import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Philo Tle_L6_L'histoire et l'humanité.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const PHILO_TLE_L06_HISTOIRE_HUMANITE: CurriculumChapter = {
  "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite",
  "subjectId": "philosophie",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  "order": 6,
  "title": "Les conditions du bonheur, leçon 1 : L'histoire et l'humanité",
  "summary": "Humanité, culture et civilisation ; l'homme objet ou sujet de l'histoire ; décoloniser et désaliéner.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "Philo Tle_L6_L'histoire et l'humanité.pdf",
  "points": [
    {
      "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p01",
      "order": 1,
      "title": "L'humanité, la culture et la civilisation",
      "summary": "Les deux sens du mot humanité, la culture et la civilisation.",
      "conceptExplanation": "Au sens propre, l'humanité est l'ensemble de tous les hommes sur la terre.\nAu sens moral, c'est ce qui distingue l'homme de l'animal : un ordre éthique fait de dignité et de respect.\nSophocle (Antigone) : « Il est bien des merveilles en ce monde, il n'en est pas de plus grande que l'homme. »\nPascal (Préface au Traité du vide) voit l'humanité comme un seul homme qui apprend continuellement à travers les générations.\nLa culture est l'ensemble des transformations que l'homme impose à la nature et à lui-même, et les connaissances acquises par l'éducation.\nPour Senghor, la civilisation est « l'ensemble des valeurs morales et techniques et la manière de s'en servir ».",
      "keyRule": "Humanité = tous les hommes, et ce qui les rend humains ; la culture et la civilisation sont leurs œuvres.",
      "formulas": [],
      "workedExample": {
        "title": "Deux sens du mot « humanité »",
        "statement": "« L'humanité compte 8 milliards de personnes » et « Il a agi avec humanité ». Quelle différence ?",
        "methodSteps": [
          "Dans la première phrase, l'humanité désigne l'ensemble des hommes.",
          "Dans la seconde, elle désigne une qualité morale : la bonté, le respect."
        ],
        "conclusion": "Le mot humanité a un sens collectif et un sens moral."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Deux sens du mot humanité",
          "stepTheme": "Deux sens du mot humanité",
          "stepBadge": "Deux sens du mot humanité",
          "paragraphText": "• Sens propre : l'ensemble des hommes, toutes les communautés sur la terre.\n• Sens moral : ordre éthique qui réunit les hommes et les distingue des animaux (dignité, respect, bonté).",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p01_q1",
            "type": "mcq",
            "prompt": "Dans « Il a agi avec humanité », quel sens a le mot humanité ?",
            "options": [
              "L'ensemble des hommes sur terre",
              "Une espèce animale",
              "Le sens moral : la bonté, le respect",
              "Une nation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ici, l'humanité est une qualité morale, pas l'ensemble des hommes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Sophocle et Pascal",
          "stepTheme": "Sophocle et Pascal",
          "stepBadge": "Sophocle et Pascal",
          "paragraphText": "• Sophocle (Antigone) : « Il est bien des merveilles en ce monde, il n'en est pas de plus grande que l'homme. »\n• Pascal : l'humanité, c'est toute la suite des hommes à travers les générations, comme un même individu qui apprend continuellement.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p01_q2",
            "type": "mcq",
            "prompt": "Quel auteur compare l'humanité à un même homme qui apprend continuellement ?",
            "options": [
              "Blaise Pascal",
              "Sophocle",
              "Senghor",
              "Rousseau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pascal voit dans l'humanité un progrès continu des connaissances au fil des générations."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La culture",
          "stepTheme": "La culture",
          "stepBadge": "La culture",
          "paragraphText": "• Culture : ensemble des transformations que l'homme imprime à la nature et à lui-même ; ensemble des connaissances acquises par l'éducation.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p01_q3",
            "type": "mcq",
            "prompt": "Qu'est-ce que la culture ?",
            "options": [
              "L'instinct animal",
              "Le climat d'une région",
              "La richesse d'un pays",
              "Les transformations que l'homme impose à la nature et à lui-même"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La culture s'oppose à la nature : c'est ce que l'homme ajoute par son action et son éducation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La civilisation selon Senghor",
          "stepTheme": "La civilisation selon Senghor",
          "stepBadge": "La civilisation selon Senghor",
          "paragraphText": "Léopold Sédar Senghor (Liberté) : la civilisation est « l'ensemble des valeurs morales et techniques et la manière de s'en servir ».\nC'est la culture en action.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p01_q4",
            "type": "mcq",
            "prompt": "Selon Senghor, qu'est-ce que la civilisation ?",
            "options": [
              "La seule culture européenne",
              "L'ensemble des valeurs morales et techniques et la manière de s'en servir",
              "L'ensemble des villes d'un pays",
              "Une religion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour Senghor, la civilisation unit valeurs, techniques et façon de les utiliser."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Existence et essence",
          "stepTheme": "Existence et essence",
          "stepBadge": "Existence et essence",
          "paragraphText": "• Existence : fait d'exister, d'être présent au monde et d'en prendre conscience.\n• Essence : ce qu'est une chose, ce qui la définit.\nSartre (L'existentialisme est un humanisme) : « L'existence précède l'essence » : l'homme existe d'abord, puis se définit par ses actes.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p01_q5",
            "type": "mcq",
            "prompt": "Que signifie « l'existence précède l'essence » chez Sartre ?",
            "options": [
              "L'homme a une nature fixée avant sa naissance",
              "L'homme existe d'abord, puis se définit par ses actes",
              "L'essence est plus importante que l'existence",
              "L'homme n'existe pas vraiment"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour Sartre, l'homme n'a pas de nature donnée : il se fait lui-même."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Existentialisme et essentialisme",
          "stepTheme": "Existentialisme et essentialisme",
          "stepBadge": "Existentialisme et essentialisme",
          "paragraphText": "• Existentialisme (Sartre) : l'existence précède l'essence ; l'homme se construit librement.\n• Essentialisme : l'essence précède l'existence ; l'homme a une nature fixée d'avance.\nNe pas inverser les deux formules.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p01_q6",
            "type": "mcq",
            "prompt": "Quelle formule correspond à l'existentialisme de Sartre ?",
            "options": [
              "« L'essence précède l'existence »",
              "« L'homme est un loup pour l'homme »",
              "« Je pense, donc je suis »",
              "« L'existence précède l'essence »"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« L'essence précède l'existence » résume au contraire l'essentialisme."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p01_q1",
          "type": "mcq",
          "prompt": "Dans « Il a agi avec humanité », quel sens a le mot humanité ?",
          "options": [
            "L'ensemble des hommes sur terre",
            "Une espèce animale",
            "Le sens moral : la bonté, le respect",
            "Une nation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ici, l'humanité est une qualité morale, pas l'ensemble des hommes."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p01_q2",
          "type": "mcq",
          "prompt": "Quel auteur compare l'humanité à un même homme qui apprend continuellement ?",
          "options": [
            "Blaise Pascal",
            "Sophocle",
            "Senghor",
            "Rousseau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pascal voit dans l'humanité un progrès continu des connaissances au fil des générations."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p01_q3",
          "type": "mcq",
          "prompt": "Qu'est-ce que la culture ?",
          "options": [
            "L'instinct animal",
            "Le climat d'une région",
            "La richesse d'un pays",
            "Les transformations que l'homme impose à la nature et à lui-même"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La culture s'oppose à la nature : c'est ce que l'homme ajoute par son action et son éducation."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p01_q4",
          "type": "mcq",
          "prompt": "Selon Senghor, qu'est-ce que la civilisation ?",
          "options": [
            "La seule culture européenne",
            "L'ensemble des valeurs morales et techniques et la manière de s'en servir",
            "L'ensemble des villes d'un pays",
            "Une religion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour Senghor, la civilisation unit valeurs, techniques et façon de les utiliser."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p01_q5",
          "type": "mcq",
          "prompt": "Que signifie « l'existence précède l'essence » chez Sartre ?",
          "options": [
            "L'homme a une nature fixée avant sa naissance",
            "L'homme existe d'abord, puis se définit par ses actes",
            "L'essence est plus importante que l'existence",
            "L'homme n'existe pas vraiment"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour Sartre, l'homme n'a pas de nature donnée : il se fait lui-même."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p01_q6",
          "type": "mcq",
          "prompt": "Quelle formule correspond à l'existentialisme de Sartre ?",
          "options": [
            "« L'essence précède l'existence »",
            "« L'homme est un loup pour l'homme »",
            "« Je pense, donc je suis »",
            "« L'existence précède l'essence »"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« L'essence précède l'existence » résume au contraire l'essentialisme."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p02",
      "order": 2,
      "title": "Ce qui distingue l'homme de l'animal",
      "summary": "La perfectibilité selon Rousseau et l'éducation selon Kant.",
      "conceptExplanation": "La culture, la civilisation et l'histoire distinguent l'homme de l'animal.\nPour Rousseau (Discours sur l'origine de l'inégalité), la différence tient à « la faculté de se perfectionner » : la perfectibilité.\nPour Kant, « l'homme ne peut devenir homme que par l'éducation ».\nL'éducation a deux branches : la discipline et l'instruction.",
      "keyRule": "L'homme se distingue de l'animal par sa perfectibilité : il devient homme par l'éducation.",
      "formulas": [],
      "workedExample": {
        "title": "L'abeille et l'architecte",
        "statement": "Une ruche d'abeille est-elle différente aujourd'hui de ce qu'elle était il y a 1 000 ans ?",
        "methodSteps": [
          "Les abeilles construisent toujours de la même façon, par instinct.",
          "Les maisons humaines changent sans cesse grâce au savoir transmis."
        ],
        "conclusion": "L'homme se perfectionne et transmet ; l'animal répète. C'est la perfectibilité."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La perfectibilité",
          "stepTheme": "La perfectibilité",
          "stepBadge": "La perfectibilité",
          "paragraphText": "• Perfectibilité (Rousseau) : faculté de se perfectionner, propre à l'homme.\nRousseau : « Cette différence de l'homme et de l'animal réside dans une qualité très spécifique, c'est la faculté de se perfectionner. »",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p02_q1",
            "type": "mcq",
            "prompt": "Selon Rousseau, qu'est-ce qui distingue l'homme de l'animal ?",
            "options": [
              "La faculté de se perfectionner",
              "La force physique",
              "La vitesse",
              "L'instinct"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'homme progresse et apprend ; l'animal reste guidé par l'instinct."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Kant et l'éducation",
          "stepTheme": "Kant et l'éducation",
          "stepBadge": "Kant et l'éducation",
          "paragraphText": "Kant : « L'homme ne peut devenir homme que par l'éducation. »\nL'éducation fait faire à la nature humaine un pas vers la perfection.\nPrécision : cette formule vient des Réflexions sur l'éducation (Traité de pédagogie), plutôt que de l'Anthropologie citée par le PDF.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p02_q2",
            "type": "mcq",
            "prompt": "Selon Kant, comment l'homme devient-il homme ?",
            "options": [
              "Par l'instinct",
              "Par la naissance seule",
              "Par l'éducation",
              "Par la richesse"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour Kant, on naît humain en puissance ; on le devient par l'éducation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Discipline et instruction",
          "stepTheme": "Discipline et instruction",
          "stepBadge": "Discipline et instruction",
          "paragraphText": "Pour Kant, l'éducation a deux branches :\n• la discipline : elle corrige l'animalité, apprend à se maîtriser ;\n• l'instruction : elle transmet les connaissances.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p02_q3",
            "type": "mcq",
            "prompt": "Quelles sont les deux branches de l'éducation selon Kant ?",
            "options": [
              "Le jeu et le sport",
              "La religion et la politique",
              "Le travail et le repos",
              "La discipline et l'instruction"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La discipline maîtrise les penchants ; l'instruction apporte le savoir."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Culture, civilisation, histoire",
          "stepTheme": "Culture, civilisation, histoire",
          "stepBadge": "Culture, civilisation, histoire",
          "paragraphText": "La culture, la civilisation et l'éducation déterminent l'existence humaine.\nElles éloignent l'homme de l'animalité et font évoluer l'humanité au cours de l'histoire.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p02_q4",
            "type": "mcq",
            "prompt": "Qu'est-ce qui éloigne l'homme de l'animalité selon le cours ?",
            "options": [
              "Le climat",
              "La couleur de peau",
              "La culture, la civilisation et l'éducation",
              "La taille"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les œuvres humaines transmises qui font l'humanité."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Perfectible ne veut pas dire parfait",
          "stepTheme": "Perfectible ne veut pas dire parfait",
          "stepBadge": "Perfectible ne veut pas dire parfait",
          "paragraphText": "Être perfectible, c'est pouvoir s'améliorer, pas être déjà parfait.\nRousseau note même que cette faculté peut conduire l'homme à se corrompre : progresser n'est pas toujours devenir meilleur.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p02_q5",
            "type": "mcq",
            "prompt": "Que signifie « perfectible » ?",
            "options": [
              "Déjà parfait",
              "Capable de s'améliorer",
              "Incapable de changer",
              "Mauvais par nature"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Perfectible : qui peut se perfectionner, et non qui est parfait."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Utiliser ces références",
          "stepTheme": "Utiliser ces références",
          "stepBadge": "Utiliser ces références",
          "paragraphText": "Pour défendre « l'homme se distingue de l'animal par la culture », cite :\n• Rousseau : la perfectibilité ;\n• Kant : l'éducation ;\n• l'exemple des enfants sauvages, qui privés d'éducation ne développent pas leurs capacités humaines.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p02_q6",
            "type": "mcq",
            "prompt": "Quelle référence montre que l'éducation fait l'homme ?",
            "options": [
              "Kant : « L'homme ne peut devenir homme que par l'éducation »",
              "Hegel : l'Idée mène les peuples",
              "Marc-Aurèle : tout ce qui arrive est nécessaire",
              "Machiavel : la violence est un mal nécessaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La formule de Kant affirme directement le rôle de l'éducation."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p02_q1",
          "type": "mcq",
          "prompt": "Selon Rousseau, qu'est-ce qui distingue l'homme de l'animal ?",
          "options": [
            "La faculté de se perfectionner",
            "La force physique",
            "La vitesse",
            "L'instinct"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'homme progresse et apprend ; l'animal reste guidé par l'instinct."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p02_q2",
          "type": "mcq",
          "prompt": "Selon Kant, comment l'homme devient-il homme ?",
          "options": [
            "Par l'instinct",
            "Par la naissance seule",
            "Par l'éducation",
            "Par la richesse"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour Kant, on naît humain en puissance ; on le devient par l'éducation."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p02_q3",
          "type": "mcq",
          "prompt": "Quelles sont les deux branches de l'éducation selon Kant ?",
          "options": [
            "Le jeu et le sport",
            "La religion et la politique",
            "Le travail et le repos",
            "La discipline et l'instruction"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La discipline maîtrise les penchants ; l'instruction apporte le savoir."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p02_q4",
          "type": "mcq",
          "prompt": "Qu'est-ce qui éloigne l'homme de l'animalité selon le cours ?",
          "options": [
            "Le climat",
            "La couleur de peau",
            "La culture, la civilisation et l'éducation",
            "La taille"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les œuvres humaines transmises qui font l'humanité."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p02_q5",
          "type": "mcq",
          "prompt": "Que signifie « perfectible » ?",
          "options": [
            "Déjà parfait",
            "Capable de s'améliorer",
            "Incapable de changer",
            "Mauvais par nature"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Perfectible : qui peut se perfectionner, et non qui est parfait."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p02_q6",
          "type": "mcq",
          "prompt": "Quelle référence montre que l'éducation fait l'homme ?",
          "options": [
            "Kant : « L'homme ne peut devenir homme que par l'éducation »",
            "Hegel : l'Idée mène les peuples",
            "Marc-Aurèle : tout ce qui arrive est nécessaire",
            "Machiavel : la violence est un mal nécessaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La formule de Kant affirme directement le rôle de l'éducation."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p03",
      "order": 3,
      "title": "L'historicité de l'homme",
      "summary": "L'histoire, la mémoire et l'homme, seul être historique.",
      "conceptExplanation": "L'histoire désigne à la fois l'ensemble des faits du passé humain et l'étude de ces faits.\nLe passé n'est pas coupé du présent, et le présent prépare l'avenir : c'est l'historicité.\nLa mémoire individuelle et collective restitue le passé, qui sert de repère.\nRaymond Aron (Dimensions de la conscience historique) montre la nécessité de connaître le passé.\nL'homme est le seul être historique.",
      "keyRule": "Historicité : le passé, le présent et l'avenir de l'humanité sont liés ; l'homme est le seul être historique.",
      "formulas": [],
      "workedExample": {
        "title": "Pourquoi étudier le passé ?",
        "statement": "Pourquoi apprendre l'histoire de la colonisation ?",
        "methodSteps": [
          "Le passé explique le présent (frontières, langues, économies).",
          "Le connaître aide à éviter de répéter les mêmes erreurs."
        ],
        "conclusion": "Selon Raymond Aron, connaître le passé rend l'évolution de l'humanité plus sûre."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Deux sens du mot histoire",
          "stepTheme": "Deux sens du mot histoire",
          "stepBadge": "Deux sens du mot histoire",
          "paragraphText": "• L'histoire, ce sont les faits et événements du passé humain.\n• C'est aussi l'étude et la connaissance de ces faits.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p03_q1",
            "type": "mcq",
            "prompt": "Quels sont les deux sens du mot histoire ?",
            "options": [
              "Les faits du passé humain et l'étude de ces faits",
              "Les contes et les légendes",
              "La géographie et l'économie",
              "Le présent et l'avenir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'histoire désigne à la fois ce qui s'est passé et la science qui l'étudie."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'historicité",
          "stepTheme": "L'historicité",
          "stepBadge": "L'historicité",
          "paragraphText": "• Historicité : caractère de ce qui s'inscrit dans l'histoire ; le passé n'est pas coupé du présent, et le présent prépare l'avenir.\nC'est une caractéristique de l'humanité.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p03_q2",
            "type": "mcq",
            "prompt": "Que signifie l'historicité de l'humanité ?",
            "options": [
              "Le passé n'a aucun rapport avec le présent",
              "Le passé, le présent et l'avenir sont liés",
              "L'homme ne change jamais",
              "L'avenir est déjà écrit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'humanité évolue dans un temps où chaque époque prépare la suivante."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La mémoire",
          "stepTheme": "La mémoire",
          "stepBadge": "La mémoire",
          "paragraphText": "La mémoire individuelle et collective restitue le passé.\nCe passé sert de repère et montre le caractère dynamique du parcours de l'humanité.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p03_q3",
            "type": "mcq",
            "prompt": "À quoi sert la mémoire collective ?",
            "options": [
              "À oublier le passé",
              "À inventer l'avenir sans le passé",
              "À restituer le passé pour en faire un repère",
              "À effacer les erreurs"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La mémoire collective conserve les leçons du passé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Raymond Aron",
          "stepTheme": "Raymond Aron",
          "stepBadge": "Raymond Aron",
          "paragraphText": "L'historien et sociologue Raymond Aron (1905-1983), dans Dimensions de la conscience historique, montre qu'il faut connaître le passé et ne pas le négliger pour bien conduire l'évolution de l'humanité.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p03_q4",
            "type": "mcq",
            "prompt": "Selon Raymond Aron, pourquoi faut-il connaître le passé ?",
            "options": [
              "Pour rester bloqué dans le passé",
              "Parce que le passé se répète exactement",
              "Parce que l'avenir n'existe pas",
              "Pour mieux conduire l'évolution de l'humanité"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le passé éclaire les choix du présent."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le seul être historique",
          "stepTheme": "Le seul être historique",
          "stepBadge": "Le seul être historique",
          "paragraphText": "L'homme est le seul être historique : il a une mémoire, transmet ses acquis et transforme le monde.\nL'animal, lui, répète les mêmes comportements de génération en génération.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p03_q5",
            "type": "mcq",
            "prompt": "Pourquoi dit-on que l'homme est le seul être historique ?",
            "options": [
              "Parce qu'il vit plus longtemps que les animaux",
              "Parce qu'il est le plus fort",
              "Parce qu'il transmet ses acquis et transforme le monde au fil du temps",
              "Parce qu'il ne change jamais"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'homme fait l'histoire par la transmission et la transformation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Histoire n'est pas répétition",
          "stepTheme": "Histoire n'est pas répétition",
          "stepBadge": "Histoire n'est pas répétition",
          "paragraphText": "L'histoire n'est pas un simple ordre répétitif d'événements.\nChaque époque est nouvelle, même si le passé peut donner des leçons.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p03_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces affirmations sur l'histoire est juste ?",
            "options": [
              "L'histoire se répète toujours à l'identique",
              "L'histoire n'a aucun rapport avec l'homme",
              "L'histoire ne concerne que les animaux",
              "L'histoire n'est pas une simple répétition d'événements"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'histoire est faite de nouveauté ; le passé instruit sans se répéter exactement."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p03_q1",
          "type": "mcq",
          "prompt": "Quels sont les deux sens du mot histoire ?",
          "options": [
            "Les faits du passé humain et l'étude de ces faits",
            "Les contes et les légendes",
            "La géographie et l'économie",
            "Le présent et l'avenir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'histoire désigne à la fois ce qui s'est passé et la science qui l'étudie."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p03_q2",
          "type": "mcq",
          "prompt": "Que signifie l'historicité de l'humanité ?",
          "options": [
            "Le passé n'a aucun rapport avec le présent",
            "Le passé, le présent et l'avenir sont liés",
            "L'homme ne change jamais",
            "L'avenir est déjà écrit"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'humanité évolue dans un temps où chaque époque prépare la suivante."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p03_q3",
          "type": "mcq",
          "prompt": "À quoi sert la mémoire collective ?",
          "options": [
            "À oublier le passé",
            "À inventer l'avenir sans le passé",
            "À restituer le passé pour en faire un repère",
            "À effacer les erreurs"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La mémoire collective conserve les leçons du passé."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p03_q4",
          "type": "mcq",
          "prompt": "Selon Raymond Aron, pourquoi faut-il connaître le passé ?",
          "options": [
            "Pour rester bloqué dans le passé",
            "Parce que le passé se répète exactement",
            "Parce que l'avenir n'existe pas",
            "Pour mieux conduire l'évolution de l'humanité"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le passé éclaire les choix du présent."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p03_q5",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que l'homme est le seul être historique ?",
          "options": [
            "Parce qu'il vit plus longtemps que les animaux",
            "Parce qu'il est le plus fort",
            "Parce qu'il transmet ses acquis et transforme le monde au fil du temps",
            "Parce qu'il ne change jamais"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'homme fait l'histoire par la transmission et la transformation."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p03_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces affirmations sur l'histoire est juste ?",
          "options": [
            "L'histoire se répète toujours à l'identique",
            "L'histoire n'a aucun rapport avec l'homme",
            "L'histoire ne concerne que les animaux",
            "L'histoire n'est pas une simple répétition d'événements"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'histoire est faite de nouveauté ; le passé instruit sans se répéter exactement."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p04",
      "order": 4,
      "title": "L'homme, objet ou sujet de l'histoire ?",
      "summary": "Fatalisme et déterminisme (religions, Marc-Aurèle, Hegel) contre matérialisme historique et existentialisme (Marx, Sartre), et la position de Machiavel.",
      "conceptExplanation": "Homme objet de l'histoire : pour les religions révélées, l'histoire suit le plan de la Providence ; pour Marc-Aurèle (stoïcien), « tout ce qui arrive est nécessaire » ; pour Hegel (La raison dans l'histoire), l'Esprit universel mène les peuples par sa « ruse ».\nHomme sujet de l'histoire : pour Marx, « les hommes font leur propre histoire », dans des conditions héritées du passé (Le 18 Brumaire de Louis Bonaparte) ; pour Sartre, « l'homme fait l'histoire » (Critique de la raison dialectique).\nHomme à la fois produit et agent : pour Machiavel, l'histoire n'est pas entièrement prédéterminée et laisse place à l'action humaine.",
      "keyRule": "Objet (Providence, Hegel), sujet (Marx, Sartre), ou les deux à la fois (Machiavel).",
      "formulas": [],
      "workedExample": {
        "title": "Analyser la formule de Marx",
        "statement": "« Les hommes font leur propre histoire dans des conditions directement héritées du passé. »",
        "methodSteps": [
          "« Les hommes font leur propre histoire » : ils en sont les acteurs.",
          "« dans des conditions héritées du passé » : ils ne choisissent pas tout."
        ],
        "conclusion": "Marx fait de l'homme le sujet de l'histoire, mais un sujet limité par les conditions héritées."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La Providence",
          "stepTheme": "La Providence",
          "stepBadge": "La Providence",
          "paragraphText": "Pour les religions révélées (judaïsme, christianisme, islam), l'histoire humaine suit la volonté de la Providence, c'est-à-dire de Dieu.\nLes hommes, créatures de Dieu, ne peuvent s'affranchir de son plan.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p04_q1",
            "type": "mcq",
            "prompt": "Selon les religions révélées, qui guide l'histoire humaine ?",
            "options": [
              "La Providence, c'est-à-dire Dieu",
              "Les hommes seuls",
              "Le hasard",
              "La lutte des classes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour ces religions, l'histoire réalise le plan divin."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Marc-Aurèle et Hegel",
          "stepTheme": "Marc-Aurèle et Hegel",
          "stepBadge": "Marc-Aurèle et Hegel",
          "paragraphText": "• Marc-Aurèle (stoïcien, Pensées pour moi-même) : « Tout ce qui arrive est nécessaire et utile au monde universel. »\n• Hegel (La raison dans l'histoire) : « l'Idée est en vérité ce qui mène les peuples et le monde » ; l'Esprit se sert des passions humaines (la « ruse de la raison »).",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p04_q2",
            "type": "mcq",
            "prompt": "Selon Hegel, qu'est-ce qui mène les peuples et le monde ?",
            "options": [
              "La volonté de chaque homme",
              "L'Idée, l'Esprit universel",
              "Le hasard",
              "La lutte des classes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour Hegel, la Raison universelle dirige l'histoire à travers les hommes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Fatalisme et déterminisme historique",
          "stepTheme": "Fatalisme et déterminisme historique",
          "stepBadge": "Fatalisme et déterminisme historique",
          "paragraphText": "• Fatalisme : croyance que tout est fixé d'avance et que l'homme n'y peut rien.\n• Déterminisme historique : l'histoire obéit à des forces qui dépassent la volonté humaine.\nDans cette vision, l'homme est l'objet, l'instrument de l'histoire.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p04_q3",
            "type": "mcq",
            "prompt": "Dans la vision fataliste, quel est le rôle de l'homme dans l'histoire ?",
            "options": [
              "Il est le seul maître de l'histoire",
              "Il est l'objet, l'instrument de l'histoire",
              "Il invente librement l'avenir",
              "Il n'existe pas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le fatalisme fait de l'homme un « pantin » de forces qui le dépassent."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Marx : l'homme sujet",
          "stepTheme": "Marx : l'homme sujet",
          "stepBadge": "Marx : l'homme sujet",
          "paragraphText": "Marx et Engels défendent le matérialisme historique contre Hegel.\nMarx (Le 18 Brumaire de Louis Bonaparte) : « Les hommes font leur propre histoire », mais « dans des conditions directement héritées du passé ».\nMarx et Engels (Manifeste) : « L'histoire de toute société jusqu'à nos jours n'a été que l'histoire de la lutte des classes. »",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p04_q4",
            "type": "mcq",
            "prompt": "Selon Marx, qui fait l'histoire ?",
            "options": [
              "Les hommes, dans des conditions héritées du passé",
              "L'Esprit universel",
              "La Providence divine",
              "Le hasard"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour Marx, ce sont les hommes qui font l'histoire, par leurs luttes concrètes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Sartre : l'homme fait l'histoire",
          "stepTheme": "Sartre : l'homme fait l'histoire",
          "stepBadge": "Sartre : l'homme fait l'histoire",
          "paragraphText": "Sartre (Critique de la raison dialectique) : « Ainsi l'homme fait l'histoire. En ce sens l'histoire est l'œuvre propre de toute l'activité de tous les hommes. »\nC'est la conséquence de « l'existence précède l'essence ».",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p04_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces assertions soutient que l'homme est l'agent de l'histoire ?",
            "options": [
              "L'Idée est en vérité ce qui mène les peuples et le monde",
              "Les créatures de Dieu ne peuvent s'affranchir du plan du créateur",
              "« L'essence précède l'existence »",
              "L'homme est le maître ou l'agent de son devenir"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les trois autres font de l'homme un objet guidé par une force extérieure."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Machiavel : produit et agent",
          "stepTheme": "Machiavel : produit et agent",
          "stepBadge": "Machiavel : produit et agent",
          "paragraphText": "Pour Machiavel (Le Prince ; Discours sur la première décade de Tite-Live), l'histoire n'est pas totalement prédéterminée.\nElle laisse une place à l'engagement et à l'action des hommes.\nL'homme est à la fois produit et agent de l'histoire.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p04_q6",
            "type": "mcq",
            "prompt": "Quelle est la position de Machiavel sur l'homme dans l'histoire ?",
            "options": [
              "L'homme n'est qu'un pantin du destin",
              "L'homme est totalement libre de tout",
              "L'homme est à la fois produit et agent de l'histoire",
              "L'histoire n'existe pas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Machiavel combine les circonstances qui pèsent sur l'homme et sa capacité d'agir."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p04_q1",
          "type": "mcq",
          "prompt": "Selon les religions révélées, qui guide l'histoire humaine ?",
          "options": [
            "La Providence, c'est-à-dire Dieu",
            "Les hommes seuls",
            "Le hasard",
            "La lutte des classes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour ces religions, l'histoire réalise le plan divin."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p04_q2",
          "type": "mcq",
          "prompt": "Selon Hegel, qu'est-ce qui mène les peuples et le monde ?",
          "options": [
            "La volonté de chaque homme",
            "L'Idée, l'Esprit universel",
            "Le hasard",
            "La lutte des classes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour Hegel, la Raison universelle dirige l'histoire à travers les hommes."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p04_q3",
          "type": "mcq",
          "prompt": "Dans la vision fataliste, quel est le rôle de l'homme dans l'histoire ?",
          "options": [
            "Il est le seul maître de l'histoire",
            "Il est l'objet, l'instrument de l'histoire",
            "Il invente librement l'avenir",
            "Il n'existe pas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le fatalisme fait de l'homme un « pantin » de forces qui le dépassent."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p04_q4",
          "type": "mcq",
          "prompt": "Selon Marx, qui fait l'histoire ?",
          "options": [
            "Les hommes, dans des conditions héritées du passé",
            "L'Esprit universel",
            "La Providence divine",
            "Le hasard"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour Marx, ce sont les hommes qui font l'histoire, par leurs luttes concrètes."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p04_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces assertions soutient que l'homme est l'agent de l'histoire ?",
          "options": [
            "L'Idée est en vérité ce qui mène les peuples et le monde",
            "Les créatures de Dieu ne peuvent s'affranchir du plan du créateur",
            "« L'essence précède l'existence »",
            "L'homme est le maître ou l'agent de son devenir"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les trois autres font de l'homme un objet guidé par une force extérieure."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p04_q6",
          "type": "mcq",
          "prompt": "Quelle est la position de Machiavel sur l'homme dans l'histoire ?",
          "options": [
            "L'homme n'est qu'un pantin du destin",
            "L'homme est totalement libre de tout",
            "L'homme est à la fois produit et agent de l'histoire",
            "L'histoire n'existe pas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Machiavel combine les circonstances qui pèsent sur l'homme et sa capacité d'agir."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p05",
      "order": 5,
      "title": "Décoloniser et désaliéner",
      "summary": "Le refus de l'ethnocentrisme et de la domination, la négritude et la diversité culturelle.",
      "conceptExplanation": "La colonisation a entraîné une domination politique et économique, et une aliénation intellectuelle et culturelle.\nL'humanité repose sur la dignité humaine et la diversité culturelle : elle est incompatible avec la domination.\nL'ethnocentrisme (privilégier sa propre culture) conduit au racisme, à l'esclavage, à la domination coloniale.\nLa négritude (Senghor, Césaire, Damas) revendique l'égalité des peuples et des cultures ; Frantz Fanon dénonce l'aliénation coloniale.\nLévi-Strauss (Tristes tropiques) : « Aucune société n'est foncièrement bonne ; mais aucune n'est absolument mauvaise. »\nLa diversité culturelle enrichit l'humanité ; Senghor prône la « civilisation de l'universel ».",
      "keyRule": "Décoloniser et désaliéner : refuser toute domination et reconnaître l'égale dignité des cultures.",
      "formulas": [],
      "workedExample": {
        "title": "Montesquieu : lire l'ironie",
        "statement": "Dans De l'esprit des lois, Montesquieu écrit que les esclaves noirs « ont le nez si écrasé qu'il est presque impossible de les plaindre ». Défend-il l'esclavage ?",
        "methodSteps": [
          "Les « arguments » cités sont volontairement absurdes.",
          "Montesquieu les attribue aux esclavagistes pour montrer leur bêtise.",
          "C'est une ironie qui dénonce l'esclavage."
        ],
        "conclusion": "Montesquieu condamne l'esclavage ; le PDF commet un contresens en disant qu'il le justifie."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Décoloniser, désaliéner",
          "stepTheme": "Décoloniser, désaliéner",
          "stepBadge": "Décoloniser, désaliéner",
          "paragraphText": "• Décoloniser : mettre fin à la domination politique et économique d'une colonie.\n• Désaliéner : libérer l'esprit de la domination culturelle et intellectuelle, retrouver sa propre identité.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p05_q1",
            "type": "mcq",
            "prompt": "Que signifie « désaliéner » ?",
            "options": [
              "Conquérir un territoire",
              "Accepter la domination",
              "Libérer l'esprit de la domination culturelle",
              "Changer de nationalité"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Désaliéner, c'est retrouver sa liberté intérieure et son identité culturelle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'ethnocentrisme",
          "stepTheme": "L'ethnocentrisme",
          "stepBadge": "L'ethnocentrisme",
          "paragraphText": "• Ethnocentrisme : tendance à juger les autres sociétés à partir de la sienne, considérée comme supérieure.\nIl conduit à la division, au racisme, à l'exclusion, à l'esclavage, à la domination coloniale.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p05_q2",
            "type": "mcq",
            "prompt": "Pourquoi l'ethnocentrisme est-il dangereux ?",
            "options": [
              "Il conduit au racisme et à la domination",
              "Il favorise le respect des autres",
              "Il enrichit toutes les cultures",
              "Il n'a aucune conséquence"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Se croire supérieur conduit à mépriser et à dominer les autres."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Erreur dans le PDF : Montesquieu",
          "stepTheme": "Erreur dans le PDF : Montesquieu",
          "stepBadge": "Erreur dans le PDF : Montesquieu",
          "paragraphText": "Le PDF affirme que Montesquieu, dans De l'esprit des lois, justifie l'esclavage des Noirs.\nC'est un contresens : au livre XV, chapitre 5, Montesquieu énumère ironiquement les « arguments » des esclavagistes pour en montrer l'absurdité.\nIl dénonce l'esclavage.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p05_q3",
            "type": "mcq",
            "prompt": "Quelle est la vraie position de Montesquieu dans « De l'esclavage des nègres » ?",
            "options": [
              "Il justifie sincèrement l'esclavage",
              "Il ne parle pas de l'esclavage",
              "Il défend la colonisation",
              "Il dénonce l'esclavage par l'ironie"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Montesquieu utilise l'ironie : il fait parler les esclavagistes pour ridiculiser leurs arguments."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La négritude",
          "stepTheme": "La négritude",
          "stepBadge": "La négritude",
          "paragraphText": "La négritude, mouvement fondé par Léopold Sédar Senghor, Aimé Césaire et Léon-Gontran Damas, revendique la dignité et l'égalité des peuples noirs et de leurs cultures.\nFrantz Fanon, de son côté, analyse et dénonce l'aliénation coloniale.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p05_q4",
            "type": "mcq",
            "prompt": "Lequel de ces écrivains est un fondateur de la négritude ?",
            "options": [
              "Montesquieu",
              "Aimé Césaire",
              "Hegel",
              "Machiavel"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Senghor, Césaire et Damas ont fondé la négritude."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Lévi-Strauss",
          "stepTheme": "Lévi-Strauss",
          "stepBadge": "Lévi-Strauss",
          "paragraphText": "Claude Lévi-Strauss (Tristes tropiques) : « Aucune société n'est foncièrement bonne ; mais aucune n'est absolument mauvaise. »\nIl invite à respecter la diversité des cultures sans les classer.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p05_q5",
            "type": "mcq",
            "prompt": "Que signifie la formule de Lévi-Strauss sur les sociétés ?",
            "options": [
              "Certaines sociétés sont parfaites",
              "Aucune société n'est supérieure en tout à une autre",
              "Les sociétés occidentales sont les meilleures",
              "Toutes les sociétés sont mauvaises"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque société a ses qualités et ses défauts : aucune ne peut se croire supérieure."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La diversité, une richesse",
          "stepTheme": "La diversité, une richesse",
          "stepBadge": "La diversité, une richesse",
          "paragraphText": "L'humanité se construit dans la diversité des peuples et des cultures.\nSaint-Exupéry : « Si tu diffères de moi, mon frère, loin de me léser, tu m'enrichis » (Lettre à un otage ; le PDF écrit Terre des hommes).\nAuguste Comte : « notre harmonie morale repose exclusivement sur l'altruisme ».\nSenghor prône la « civilisation de l'universel » ; Nelson Mandela a lutté contre toutes les formes de domination.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p05_q6",
            "type": "mcq",
            "prompt": "Que prône Senghor ?",
            "options": [
              "La supériorité d'une seule culture",
              "Le retour au colonialisme",
              "La fermeture des frontières culturelles",
              "La civilisation de l'universel"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Pour Senghor, chaque culture apporte sa part à une civilisation commune à toute l'humanité."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p05_q1",
          "type": "mcq",
          "prompt": "Que signifie « désaliéner » ?",
          "options": [
            "Conquérir un territoire",
            "Accepter la domination",
            "Libérer l'esprit de la domination culturelle",
            "Changer de nationalité"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Désaliéner, c'est retrouver sa liberté intérieure et son identité culturelle."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p05_q2",
          "type": "mcq",
          "prompt": "Pourquoi l'ethnocentrisme est-il dangereux ?",
          "options": [
            "Il conduit au racisme et à la domination",
            "Il favorise le respect des autres",
            "Il enrichit toutes les cultures",
            "Il n'a aucune conséquence"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Se croire supérieur conduit à mépriser et à dominer les autres."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p05_q3",
          "type": "mcq",
          "prompt": "Quelle est la vraie position de Montesquieu dans « De l'esclavage des nègres » ?",
          "options": [
            "Il justifie sincèrement l'esclavage",
            "Il ne parle pas de l'esclavage",
            "Il défend la colonisation",
            "Il dénonce l'esclavage par l'ironie"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Montesquieu utilise l'ironie : il fait parler les esclavagistes pour ridiculiser leurs arguments."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p05_q4",
          "type": "mcq",
          "prompt": "Lequel de ces écrivains est un fondateur de la négritude ?",
          "options": [
            "Montesquieu",
            "Aimé Césaire",
            "Hegel",
            "Machiavel"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Senghor, Césaire et Damas ont fondé la négritude."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p05_q5",
          "type": "mcq",
          "prompt": "Que signifie la formule de Lévi-Strauss sur les sociétés ?",
          "options": [
            "Certaines sociétés sont parfaites",
            "Aucune société n'est supérieure en tout à une autre",
            "Les sociétés occidentales sont les meilleures",
            "Toutes les sociétés sont mauvaises"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque société a ses qualités et ses défauts : aucune ne peut se croire supérieure."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p05_q6",
          "type": "mcq",
          "prompt": "Que prône Senghor ?",
          "options": [
            "La supériorité d'une seule culture",
            "Le retour au colonialisme",
            "La fermeture des frontières culturelles",
            "La civilisation de l'universel"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Pour Senghor, chaque culture apporte sa part à une civilisation commune à toute l'humanité."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p06",
      "order": 6,
      "title": "Entraînement : l'homme et son devenir",
      "summary": "Étudier le texte de Sartre sur l'homme et son projet.",
      "conceptExplanation": "Texte : Sartre, L'existentialisme est un humanisme.\nThème : l'homme et son devenir.\nProblème : l'homme a-t-il une emprise sur son devenir ?\nThèse : l'homme est entièrement responsable de son devenir ; il n'est rien d'autre que l'ensemble de ses actes.\nIntention : montrer que l'homme est le sujet de son devenir ; enjeu : la liberté.\nCritique externe : appui (Sartre, Marx) ; dépassement (Hegel, déterminisme historique, conditions sociales).",
      "keyRule": "Pour Sartre, l'homme n'est rien d'autre que ce qu'il fait : il est responsable de son devenir.",
      "formulas": [],
      "workedExample": {
        "title": "Le génie de Racine",
        "statement": "Sartre : « le génie de Racine, c'est la série de ses tragédies, en dehors de cela il n'y a rien ». Que veut-il dire ?",
        "methodSteps": [
          "On ne peut pas juger quelqu'un sur ce qu'il aurait pu faire.",
          "On le juge sur ce qu'il a réellement fait : ses œuvres, ses actes."
        ],
        "conclusion": "Pas d'excuse ni de talent caché : l'homme est l'ensemble de ses actes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "La problématique",
          "stepTheme": "La problématique",
          "stepBadge": "La problématique",
          "paragraphText": "• Thème : l'homme et son devenir.\n• Problème : l'homme a-t-il une emprise sur son devenir ?\n• Thèse : l'homme est entièrement responsable de son devenir.\n• Enjeu : la liberté.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p06_q1",
            "type": "mcq",
            "prompt": "Quelle est la thèse de Sartre dans ce texte ?",
            "options": [
              "L'homme est entièrement responsable de son devenir",
              "L'homme est soumis au destin",
              "Les circonstances excusent tous nos échecs",
              "L'homme ne peut rien changer à sa vie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour Sartre, l'homme se fait par ses actes et en est responsable."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "L'homme est son projet",
          "stepTheme": "L'homme est son projet",
          "stepBadge": "L'homme est son projet",
          "paragraphText": "Sartre : « L'homme n'est rien d'autre que son projet, il n'existe que dans la mesure où il se réalise, il n'est donc rien d'autre que l'ensemble de ses actes. »",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p06_q2",
            "type": "mcq",
            "prompt": "Selon Sartre, qu'est-ce que l'homme ?",
            "options": [
              "Ses rêves non réalisés",
              "Ses excuses",
              "L'ensemble de ses actes",
              "Ce que les autres pensent de lui"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'homme se définit par ce qu'il fait réellement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le refus des excuses",
          "stepTheme": "Le refus des excuses",
          "stepBadge": "Le refus des excuses",
          "paragraphText": "Sartre critique ceux qui disent : « Les circonstances ont été contre moi, je valais beaucoup mieux que ce que j'ai été. »\nPour lui, c'est une façon de fuir sa responsabilité.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p06_q3",
            "type": "mcq",
            "prompt": "Que critique Sartre chez ceux qui accusent les circonstances ?",
            "options": [
              "Leur courage",
              "Leur engagement",
              "Leur réussite",
              "Leur façon de fuir leur responsabilité"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Accuser les circonstances, c'est refuser d'assumer sa liberté."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Critique externe : dépasser Sartre",
          "stepTheme": "Critique externe : dépasser Sartre",
          "stepBadge": "Critique externe : dépasser Sartre",
          "paragraphText": "On peut nuancer Sartre :\n• Hegel : l'Esprit universel guide l'histoire ;\n• Marx : les hommes font l'histoire, mais dans des conditions héritées du passé ;\n• les conditions sociales (pauvreté, guerre) limitent réellement les choix.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p06_q4",
            "type": "mcq",
            "prompt": "Quel argument permet de nuancer la thèse de Sartre ?",
            "options": [
              "L'homme est l'ensemble de ses actes",
              "L'existence précède l'essence",
              "Les conditions sociales limitent réellement les choix des hommes",
              "L'homme est condamné à être libre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les trois autres soutiennent Sartre ; seul le premier le nuance."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Conclure",
          "stepTheme": "Conclure",
          "stepBadge": "Conclure",
          "paragraphText": "Conclusion possible : l'homme est responsable de son devenir, mais il agit dans des conditions qu'il n'a pas choisies.\nIl est, comme le pensait Machiavel, à la fois produit et agent de l'histoire.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p06_q5",
            "type": "mcq",
            "prompt": "Quelle conclusion est la plus nuancée ?",
            "options": [
              "L'homme ne peut rien sur son devenir",
              "L'homme fait son devenir, mais dans des conditions qu'il n'a pas choisies",
              "L'homme peut tout, sans aucune limite",
              "Le destin décide de tout"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une conclusion nuancée combine liberté et conditions."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p06_q1",
          "type": "mcq",
          "prompt": "Quelle est la thèse de Sartre dans ce texte ?",
          "options": [
            "L'homme est entièrement responsable de son devenir",
            "L'homme est soumis au destin",
            "Les circonstances excusent tous nos échecs",
            "L'homme ne peut rien changer à sa vie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour Sartre, l'homme se fait par ses actes et en est responsable."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p06_q2",
          "type": "mcq",
          "prompt": "Selon Sartre, qu'est-ce que l'homme ?",
          "options": [
            "Ses rêves non réalisés",
            "Ses excuses",
            "L'ensemble de ses actes",
            "Ce que les autres pensent de lui"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'homme se définit par ce qu'il fait réellement."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p06_q3",
          "type": "mcq",
          "prompt": "Que critique Sartre chez ceux qui accusent les circonstances ?",
          "options": [
            "Leur courage",
            "Leur engagement",
            "Leur réussite",
            "Leur façon de fuir leur responsabilité"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Accuser les circonstances, c'est refuser d'assumer sa liberté."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p06_q4",
          "type": "mcq",
          "prompt": "Quel argument permet de nuancer la thèse de Sartre ?",
          "options": [
            "L'homme est l'ensemble de ses actes",
            "L'existence précède l'essence",
            "Les conditions sociales limitent réellement les choix des hommes",
            "L'homme est condamné à être libre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les trois autres soutiennent Sartre ; seul le premier le nuance."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l01_histoire_humanite_p06_q5",
          "type": "mcq",
          "prompt": "Quelle conclusion est la plus nuancée ?",
          "options": [
            "L'homme ne peut rien sur son devenir",
            "L'homme fait son devenir, mais dans des conditions qu'il n'a pas choisies",
            "L'homme peut tout, sans aucune limite",
            "Le destin décide de tout"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une conclusion nuancée combine liberté et conditions."
        }
      ]
    }
  ]
};
