import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Les violences de masse : les génocides du XXe siècle à nos jours » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=885
// Remarque : la première page du résumé indique « Niveau : Terminale », mais la leçon figure au catalogue Première et son livre d'exercices est bien « 1ère A - C - D » : elle est donc convertie comme leçon de Première (anomalie de la source, signalée dans le rapport de lot P05).
export const HIST_1ERE_T3_L03_VIOLENCES_MASSE_GENOCIDES: CurriculumChapter = {
  "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides",
  "subjectId": "histoire_geo",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 8,
  "title": "Thème 3, leçon 3 : Les violences de masse : les génocides du XXe siècle à nos jours",
  "summary": "Le monde a toujours été confronté à des conflits, exacerbés à partir du XXe siècle par la prolifération des violences de masse et des génocides ; la leçon apprend à les comprendre, à connaître leurs caractéristiques et à apprécier les actions de lutte contre les génocides et les crimes contre l’humanité.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=885",
  "points": [
    {
      "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p01",
      "order": 1,
      "title": "Les violences de masse : définition et caractéristiques",
      "summary": "Définir une violence de masse, relever ses caractéristiques et citer les exemples donnés par la leçon.",
      "conceptExplanation": "Une violence de masse est une forme de violence généralement pas intentionnelle, portant sur un grand nombre de personnes généralement pas ciblées à l’avance.\nLes caractéristiques d’une violence de masse sont les suivantes : elles ne sont pas généralement préméditées ; elles ne visent pas un groupe de manière spécifique au préalable ; elles occasionnent d’énormes dégâts humains et matériels.\nLes exemples de violences de masse dans le monde cités par la leçon sont le massacre des civils pendant la Deuxième Guerre mondiale et la répression pendant la colonisation en Côte d’Ivoire.",
      "keyRule": "Violence de masse : un grand nombre de victimes non ciblées à l’avance, sans préméditation générale, avec d’énormes dégâts humains et matériels.",
      "formulas": [],
      "workedExample": {
        "title": "Caractériser une violence de masse à partir des exemples",
        "statement": "À partir des deux exemples de la leçon, le massacre des civils pendant la Deuxième Guerre mondiale et la répression pendant la colonisation en Côte d’Ivoire, dégage les caractéristiques d’une violence de masse.",
        "methodSteps": [
          "Les deux exemples portent sur un grand nombre de personnes, et non sur des victimes ciblées une à une à l’avance.",
          "La leçon précise que ces violences ne sont pas généralement préméditées.",
          "Elles ne visent pas un groupe de manière spécifique au préalable.",
          "Elles occasionnent d’énormes dégâts humains et matériels."
        ],
        "conclusion": "Grand nombre de victimes, absence générale de préméditation et dégâts énormes caractérisent la violence de masse."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une violence de masse",
          "stepTheme": "Une violence de masse",
          "stepBadge": "Une violence de masse",
          "paragraphText": "• Violence de masse : forme de violence généralement pas intentionnelle, portant sur un grand nombre de personnes généralement pas ciblées à l’avance.\nC’est la définition donnée au début de la leçon.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p01_q1",
            "type": "mcq",
            "prompt": "Une violence de masse porte sur :",
            "options": [
              "Une seule personne ciblée à l’avance",
              "Un grand nombre de personnes généralement pas ciblées à l’avance",
              "Uniquement des biens matériels",
              "Un groupe toujours désigné par sa religion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Grand nombre de personnes non ciblées à l’avance : c’est la définition de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Non préméditées en général",
          "stepTheme": "Non préméditées en général",
          "stepBadge": "Non préméditées en général",
          "paragraphText": "Première caractéristique citée par la leçon : les violences de masse ne sont pas généralement préméditées.\nElles se distinguent en cela du génocide, qui est planifié et coordonné.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p01_q2",
            "type": "mcq",
            "prompt": "Selon la leçon, les violences de masse sont :",
            "options": [
              "Toujours planifiées des années à l’avance",
              "Généralement pas préméditées",
              "Toujours ordonnées par un tribunal",
              "Sans aucun dégât matériel"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La non-préméditation générale est la première caractéristique listée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Aucun groupe visé au préalable",
          "stepTheme": "Aucun groupe visé au préalable",
          "stepBadge": "Aucun groupe visé au préalable",
          "paragraphText": "Deuxième caractéristique : les violences de masse ne visent pas un groupe de manière spécifique au préalable.\nElles occasionnent en revanche d’énormes dégâts humains et matériels.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p01_q3",
            "type": "mcq",
            "prompt": "Les violences de masse ne visent pas au préalable :",
            "options": [
              "Un grand nombre de personnes",
              "Des dégâts matériels",
              "Un groupe de manière spécifique",
              "Des civils pendant une guerre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’absence de groupe spécifiquement visé au préalable distingue la violence de masse du génocide."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Reconnaître une violence de masse",
          "stepTheme": "Reconnaître une violence de masse",
          "stepBadge": "Reconnaître une violence de masse",
          "paragraphText": "Méthode : vérifier les trois caractéristiques ensemble.\nPas de préméditation générale, pas de groupe visé de manière spécifique au préalable, et d’énormes dégâts humains et matériels.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p01_q4",
            "type": "mcq",
            "prompt": "Pour reconnaître une violence de masse, la leçon invite à vérifier :",
            "options": [
              "L’intention d’exterminer un groupe précis",
              "L’absence générale de préméditation, l’absence de groupe visé au préalable et d’énormes dégâts",
              "La création d’un tribunal international",
              "La présence de camps d’extermination"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les trois caractéristiques énumérées dans le résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre violence de masse et génocide",
          "stepTheme": "Confondre violence de masse et génocide",
          "stepBadge": "Confondre violence de masse et génocide",
          "paragraphText": "Piège : appeler génocide toute violence de masse.\nLa violence de masse n’est pas généralement préméditée et ne vise pas un groupe spécifique au préalable, alors que le génocide est planifié avec intention d’exterminer un groupe.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p01_q5",
            "type": "mcq",
            "prompt": "Quelle affirmation distingue correctement la violence de masse ?",
            "options": [
              "Elle est toujours planifiée pour exterminer un groupe",
              "Elle suppose une intention d’extermination totale",
              "Elle n’est pas généralement préméditée et ne vise pas un groupe spécifique au préalable",
              "Elle est jugée uniquement par la Cour pénale internationale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Non-préméditation générale et absence de groupe visé : c’est la distinction du résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La répression coloniale en Côte d’Ivoire",
          "stepTheme": "La répression coloniale en Côte d’Ivoire",
          "stepBadge": "La répression coloniale en Côte d’Ivoire",
          "paragraphText": "Exemple de violence de masse cité par la leçon : la répression pendant la colonisation en Côte d’Ivoire.\nL’autre exemple est le massacre des civils pendant la Deuxième Guerre mondiale.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p01_q6",
            "type": "mcq",
            "prompt": "Parmi les exemples de violences de masse cités figure :",
            "options": [
              "La répression pendant la colonisation en Côte d’Ivoire",
              "Le procès de Nuremberg",
              "La création du mot génocide en 1944",
              "La condamnation de Ratko Mladic"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La répression coloniale en Côte d’Ivoire est un des deux exemples du résumé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p01_q1",
          "type": "mcq",
          "prompt": "Une violence de masse porte sur :",
          "options": [
            "Une seule personne ciblée à l’avance",
            "Un grand nombre de personnes généralement pas ciblées à l’avance",
            "Uniquement des biens matériels",
            "Un groupe toujours désigné par sa religion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Grand nombre de personnes non ciblées à l’avance : c’est la définition de la leçon."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p01_q2",
          "type": "mcq",
          "prompt": "Selon la leçon, les violences de masse sont :",
          "options": [
            "Toujours planifiées des années à l’avance",
            "Généralement pas préméditées",
            "Toujours ordonnées par un tribunal",
            "Sans aucun dégât matériel"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La non-préméditation générale est la première caractéristique listée."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p01_q3",
          "type": "mcq",
          "prompt": "Les violences de masse ne visent pas au préalable :",
          "options": [
            "Un grand nombre de personnes",
            "Des dégâts matériels",
            "Un groupe de manière spécifique",
            "Des civils pendant une guerre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’absence de groupe spécifiquement visé au préalable distingue la violence de masse du génocide."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p01_q4",
          "type": "mcq",
          "prompt": "Pour reconnaître une violence de masse, la leçon invite à vérifier :",
          "options": [
            "L’intention d’exterminer un groupe précis",
            "L’absence générale de préméditation, l’absence de groupe visé au préalable et d’énormes dégâts",
            "La création d’un tribunal international",
            "La présence de camps d’extermination"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les trois caractéristiques énumérées dans le résumé."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p01_q5",
          "type": "mcq",
          "prompt": "Quelle affirmation distingue correctement la violence de masse ?",
          "options": [
            "Elle est toujours planifiée pour exterminer un groupe",
            "Elle suppose une intention d’extermination totale",
            "Elle n’est pas généralement préméditée et ne vise pas un groupe spécifique au préalable",
            "Elle est jugée uniquement par la Cour pénale internationale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Non-préméditation générale et absence de groupe visé : c’est la distinction du résumé."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p01_q6",
          "type": "mcq",
          "prompt": "Parmi les exemples de violences de masse cités figure :",
          "options": [
            "La répression pendant la colonisation en Côte d’Ivoire",
            "Le procès de Nuremberg",
            "La création du mot génocide en 1944",
            "La condamnation de Ratko Mladic"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La répression coloniale en Côte d’Ivoire est un des deux exemples du résumé."
        }
      ]
    },
    {
      "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p02",
      "order": 2,
      "title": "Le génocide : définition, Lemkin et critères distinctifs",
      "summary": "Définir le génocide, raconter la création du mot par Raphaël Lemkin en 1944 et énoncer ses critères distinctifs.",
      "conceptExplanation": "Le mot génocide est créé par le Polonais Raphaël Lemkin en 1944. Il fait valoir d’abord le terme génocide au tribunal de Nuremberg, puis auprès de l’ONU, qui à son tour l’adopta le 9 décembre 1948 en faisant entrer officiellement le mot dans le vocabulaire international.\nSelon Raphaël Lemkin, le génocide est une violence de masse. Mais en plus de cela, il met en exergue la notion d’intentionnalité, de planification et d’organisation. Ici, l’intention d’Hitler était d’exterminer totalement les Juifs d’Europe.\nUn génocide est donc une violence de masse planifiée ou coordonnée, dont l’intention est d’exterminer un groupe en raison de sa race, de sa nationalité, de sa religion, de son ethnie ou de son opinion politique.\nUn génocide est une violence de masse, mais il présente des critères distinctifs : l’extermination totale ou partielle, en raison de la race, de la nationalité ou de la religion ; la soumission intentionnelle à des conditions d’existence devant entraîner sa destruction physique ; les mesures visant à entraver les naissances au sein du groupe. Si un seul de ces critères est vraiment vérifié, alors c’est à ce moment que l’on peut vraiment parler de génocide.",
      "keyRule": "Génocide égale violence de masse plus intention, planification et organisation d’exterminer un groupe : un seul critère distinctif vérifié suffit.",
      "formulas": [],
      "workedExample": {
        "title": "Vérifier si une violence est un génocide",
        "statement": "En appliquant les critères de la leçon, explique comment on décide qu’une violence de masse est un génocide, en prenant l’exemple de l’intention d’Hitler contre les Juifs d’Europe.",
        "methodSteps": [
          "Partir de la base : un génocide est d’abord une violence de masse.",
          "Ajouter ce que Lemkin met en exergue : l’intentionnalité, la planification et l’organisation.",
          "Vérifier le motif : exterminer un groupe en raison de sa race, de sa nationalité, de sa religion, de son ethnie ou de son opinion politique, comme l’intention d’Hitler d’exterminer totalement les Juifs d’Europe.",
          "Appliquer la règle de la leçon : si un seul des critères distinctifs est vraiment vérifié, on peut parler de génocide."
        ],
        "conclusion": "Intention planifiée d’exterminer un groupe et au moins un critère distinctif vérifié : le génocide est établi."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Raphaël Lemkin crée le mot en 1944",
          "stepTheme": "Raphaël Lemkin crée le mot en 1944",
          "stepBadge": "Raphaël Lemkin crée le mot en 1944",
          "paragraphText": "• Génocide : mot créé par le Polonais Raphaël Lemkin en 1944.\nIl le fait valoir au tribunal de Nuremberg, puis auprès de l’ONU.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p02_q1",
            "type": "mcq",
            "prompt": "Le mot génocide est créé en 1944 par :",
            "options": [
              "Adolf Hitler",
              "Le Polonais Raphaël Lemkin",
              "Efrain Rios Montt",
              "Ratko Mladic"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Raphaël Lemkin, Polonais, crée le mot génocide en 1944 selon la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’adoption par l’ONU en 1948",
          "stepTheme": "L’adoption par l’ONU en 1948",
          "stepBadge": "L’adoption par l’ONU en 1948",
          "paragraphText": "L’ONU adopta le terme génocide le 9 décembre 1948.\nLe mot entre alors officiellement dans le vocabulaire international.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p02_q2",
            "type": "mcq",
            "prompt": "L’ONU adopte officiellement le mot génocide le :",
            "options": [
              "9 décembre 1948",
              "10 décembre 1948",
              "En 1944 à Nuremberg",
              "En mai 2013"
            ],
            "correctAnswerIndex": 0,
            "explanation": "9 décembre 1948 pour l’adoption par l’ONU ; le 10 décembre 1948 concerne la Déclaration universelle des droits de l’homme citée plus loin."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Intention, planification, organisation",
          "stepTheme": "Intention, planification, organisation",
          "stepBadge": "Intention, planification, organisation",
          "paragraphText": "Selon Lemkin, le génocide est une violence de masse, mais avec en plus l’intentionnalité, la planification et l’organisation.\nL’exemple donné est l’intention d’Hitler d’exterminer totalement les Juifs d’Europe.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p02_q3",
            "type": "mcq",
            "prompt": "Ce que Lemkin ajoute à la violence de masse pour définir le génocide, c’est :",
            "options": [
              "Le hasard et l’improvisation",
              "L’intentionnalité, la planification et l’organisation",
              "Uniquement le nombre de victimes",
              "La création de tribunaux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Intentionnalité, planification et organisation sont les trois notions mises en exergue par Lemkin."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les motifs d’extermination visés",
          "stepTheme": "Les motifs d’extermination visés",
          "stepBadge": "Les motifs d’extermination visés",
          "paragraphText": "Un génocide vise à exterminer un groupe en raison de critères précis.\nLa leçon cite la race, la nationalité, la religion, l’ethnie ou l’opinion politique.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p02_q4",
            "type": "mcq",
            "prompt": "Le génocide vise un groupe en raison notamment de :",
            "options": [
              "Sa profession uniquement",
              "Sa race, sa nationalité, sa religion, son ethnie ou son opinion politique",
              "Son lieu de vacances",
              "Son niveau scolaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Race, nationalité, religion, ethnie et opinion politique sont les motifs énumérés par la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Exiger tous les critères à la fois",
          "stepTheme": "Exiger tous les critères à la fois",
          "stepBadge": "Exiger tous les critères à la fois",
          "paragraphText": "Piège : croire qu’il faut réunir tous les critères distinctifs pour parler de génocide.\nLa leçon affirme que si un seul de ces critères est vraiment vérifié, on peut vraiment parler de génocide.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p02_q5",
            "type": "mcq",
            "prompt": "Selon la leçon, pour parler de génocide, il faut :",
            "options": [
              "Que tous les critères soient réunis sans exception",
              "Qu’un tribunal ait déjà condamné les auteurs",
              "Qu’un seul des critères distinctifs soit vraiment vérifié",
              "Que les victimes soient uniquement européennes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un seul critère vraiment vérifié suffit, d’après la règle énoncée dans le résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Entraver les naissances dans le groupe",
          "stepTheme": "Entraver les naissances dans le groupe",
          "stepBadge": "Entraver les naissances dans le groupe",
          "paragraphText": "Exemple de critère distinctif : les mesures visant à entraver les naissances au sein du groupe.\nLes autres critères sont l’extermination totale ou partielle et la soumission intentionnelle à des conditions d’existence devant entraîner la destruction physique.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p02_q6",
            "type": "mcq",
            "prompt": "Parmi les critères distinctifs du génocide figure :",
            "options": [
              "La destruction d’usines pendant une guerre",
              "Les mesures visant à entraver les naissances au sein du groupe",
              "La création de la Cour pénale internationale",
              "Le massacre de civils sans groupe visé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Entraver les naissances au sein du groupe est l’un des trois critères distinctifs listés."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p02_q1",
          "type": "mcq",
          "prompt": "Le mot génocide est créé en 1944 par :",
          "options": [
            "Adolf Hitler",
            "Le Polonais Raphaël Lemkin",
            "Efrain Rios Montt",
            "Ratko Mladic"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Raphaël Lemkin, Polonais, crée le mot génocide en 1944 selon la leçon."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p02_q2",
          "type": "mcq",
          "prompt": "L’ONU adopte officiellement le mot génocide le :",
          "options": [
            "9 décembre 1948",
            "10 décembre 1948",
            "En 1944 à Nuremberg",
            "En mai 2013"
          ],
          "correctAnswerIndex": 0,
          "explanation": "9 décembre 1948 pour l’adoption par l’ONU ; le 10 décembre 1948 concerne la Déclaration universelle des droits de l’homme citée plus loin."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p02_q3",
          "type": "mcq",
          "prompt": "Ce que Lemkin ajoute à la violence de masse pour définir le génocide, c’est :",
          "options": [
            "Le hasard et l’improvisation",
            "L’intentionnalité, la planification et l’organisation",
            "Uniquement le nombre de victimes",
            "La création de tribunaux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Intentionnalité, planification et organisation sont les trois notions mises en exergue par Lemkin."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p02_q4",
          "type": "mcq",
          "prompt": "Le génocide vise un groupe en raison notamment de :",
          "options": [
            "Sa profession uniquement",
            "Sa race, sa nationalité, sa religion, son ethnie ou son opinion politique",
            "Son lieu de vacances",
            "Son niveau scolaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Race, nationalité, religion, ethnie et opinion politique sont les motifs énumérés par la leçon."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p02_q5",
          "type": "mcq",
          "prompt": "Selon la leçon, pour parler de génocide, il faut :",
          "options": [
            "Que tous les critères soient réunis sans exception",
            "Qu’un tribunal ait déjà condamné les auteurs",
            "Qu’un seul des critères distinctifs soit vraiment vérifié",
            "Que les victimes soient uniquement européennes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un seul critère vraiment vérifié suffit, d’après la règle énoncée dans le résumé."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p02_q6",
          "type": "mcq",
          "prompt": "Parmi les critères distinctifs du génocide figure :",
          "options": [
            "La destruction d’usines pendant une guerre",
            "Les mesures visant à entraver les naissances au sein du groupe",
            "La création de la Cour pénale internationale",
            "Le massacre de civils sans groupe visé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Entraver les naissances au sein du groupe est l’un des trois critères distinctifs listés."
        }
      ]
    },
    {
      "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p03",
      "order": 3,
      "title": "Les origines de la Shoah",
      "summary": "Expliquer comment l’idéologie nazie désigne les Juifs et d’autres groupes comme des races inférieures et déclenche des mesures dès 1933.",
      "conceptExplanation": "L’extermination systématique par l’Allemagne nazie des Juifs d’Europe pendant la Deuxième Guerre mondiale vient du fait que ces derniers ont été désignés, avec d’autres peuples que sont les Slaves et les Tziganes, et des groupes de populations comme les homosexuels et les handicapés physiques et mentaux, comme leurs ennemis irréductibles.\nIls sont assimilés par leur idéologie à une race inférieure par rapport aux Aryens, le peuple germanique, considérés comme supérieurs.\nSuite à ce classement, de nombreuses mesures sont mises en place contre eux, surtout les Juifs, à partir de 1933.",
      "keyRule": "La Shoah commence par un classement idéologique : des groupes désignés ennemis irréductibles et races inférieures face aux Aryens présentés comme supérieurs.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer l’origine idéologique de la Shoah",
        "statement": "À partir du résumé, explique en trois temps comment l’idéologie nazie prépare l’extermination des Juifs d’Europe.",
        "methodSteps": [
          "Les Juifs sont désignés, avec les Slaves, les Tziganes, les homosexuels et les handicapés physiques et mentaux, comme des ennemis irréductibles.",
          "L’idéologie les assimile à une race inférieure, par opposition aux Aryens, peuple germanique considéré comme supérieur.",
          "Suite à ce classement, de nombreuses mesures sont mises en place contre eux, surtout les Juifs, à partir de 1933."
        ],
        "conclusion": "Désignation, classement racial puis mesures dès 1933 : telle est la chaîne des origines de la Shoah dans la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La Shoah",
          "stepTheme": "La Shoah",
          "stepBadge": "La Shoah",
          "paragraphText": "• Shoah : extermination systématique, par l’Allemagne nazie, des Juifs d’Europe pendant la Deuxième Guerre mondiale.\nLa leçon la présente comme un exemple de génocide, sous le titre de l’holocauste des Juifs.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p03_q1",
            "type": "mcq",
            "prompt": "La Shoah désigne, dans la leçon :",
            "options": [
              "La répression coloniale en Côte d’Ivoire",
              "L’extermination systématique des Juifs d’Europe par l’Allemagne nazie",
              "Un tribunal international créé en 1948",
              "Une violence de masse sans groupe visé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Extermination systématique des Juifs d’Europe par l’Allemagne nazie : c’est la Shoah."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Des ennemis irréductibles désignés",
          "stepTheme": "Des ennemis irréductibles désignés",
          "stepBadge": "Des ennemis irréductibles désignés",
          "paragraphText": "Les Juifs ont été désignés comme des ennemis irréductibles par l’Allemagne nazie.\nSont désignés avec eux les Slaves, les Tziganes, ainsi que les homosexuels et les handicapés physiques et mentaux.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p03_q2",
            "type": "mcq",
            "prompt": "Parmi les peuples et groupes désignés avec les Juifs figurent :",
            "options": [
              "Les Aryens germaniques",
              "Les Slaves et les Tziganes",
              "Les membres de l’ONU",
              "Les juges de Nuremberg"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Slaves et Tziganes, ainsi que homosexuels et handicapés, sont cités dans le résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Race inférieure contre Aryens supérieurs",
          "stepTheme": "Race inférieure contre Aryens supérieurs",
          "stepBadge": "Race inférieure contre Aryens supérieurs",
          "paragraphText": "L’idéologie nazie assimile ces groupes à une race inférieure.\nElle les oppose aux Aryens, le peuple germanique, considérés comme supérieurs.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p03_q3",
            "type": "mcq",
            "prompt": "Dans l’idéologie décrite, les Aryens sont :",
            "options": [
              "Le peuple germanique considéré comme supérieur",
              "Un groupe désigné comme ennemi irréductible",
              "Les victimes des camps d’extermination",
              "Les créateurs du mot génocide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Peuple germanique considéré comme supérieur : c’est la place des Aryens dans ce classement."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Dater le début des mesures",
          "stepTheme": "Dater le début des mesures",
          "stepBadge": "Dater le début des mesures",
          "paragraphText": "Méthode : retenir l’année de départ des mesures contre les groupes désignés.\nSuite au classement idéologique, de nombreuses mesures sont mises en place contre eux, surtout les Juifs, à partir de 1933.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p03_q4",
            "type": "mcq",
            "prompt": "Les mesures contre ces groupes, surtout les Juifs, sont mises en place à partir de :",
            "options": [
              "1948",
              "1944",
              "1933",
              "2013"
            ],
            "correctAnswerIndex": 2,
            "explanation": "À partir de 1933 : c’est la date donnée par la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Réduire la Shoah aux seuls camps",
          "stepTheme": "Réduire la Shoah aux seuls camps",
          "stepBadge": "Réduire la Shoah aux seuls camps",
          "paragraphText": "Piège : faire commencer la Shoah seulement avec les camps de 1942.\nLa leçon montre une origine antérieure : désignation idéologique des groupes, classement en race inférieure et mesures contre eux dès 1933.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p03_q5",
            "type": "mcq",
            "prompt": "Selon la leçon, avant les déportations de 1942, il y a déjà eu :",
            "options": [
              "La création de l’ONU",
              "Des mesures mises en place contre les Juifs dès 1933, après leur désignation comme ennemis",
              "La condamnation de Mladic",
              "L’adoption du mot génocide par l’ONU"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Désignation, classement racial et mesures dès 1933 précèdent les déportations."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les handicapés physiques et mentaux visés",
          "stepTheme": "Les handicapés physiques et mentaux visés",
          "stepBadge": "Les handicapés physiques et mentaux visés",
          "paragraphText": "Exemple de groupe de population désigné par l’idéologie nazie : les handicapés physiques et mentaux.\nIls sont cités aux côtés des homosexuels parmi les groupes assimilés à une race inférieure.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p03_q6",
            "type": "mcq",
            "prompt": "Parmi les groupes de populations désignés par l’idéologie nazie figurent :",
            "options": [
              "Les handicapés physiques et mentaux",
              "Les Polonais créateurs du mot génocide",
              "Les Américains membres de la SDN",
              "Les juges de la Cour pénale internationale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Handicapés physiques et mentaux et homosexuels sont les deux groupes de populations nommés."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p03_q1",
          "type": "mcq",
          "prompt": "La Shoah désigne, dans la leçon :",
          "options": [
            "La répression coloniale en Côte d’Ivoire",
            "L’extermination systématique des Juifs d’Europe par l’Allemagne nazie",
            "Un tribunal international créé en 1948",
            "Une violence de masse sans groupe visé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Extermination systématique des Juifs d’Europe par l’Allemagne nazie : c’est la Shoah."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p03_q2",
          "type": "mcq",
          "prompt": "Parmi les peuples et groupes désignés avec les Juifs figurent :",
          "options": [
            "Les Aryens germaniques",
            "Les Slaves et les Tziganes",
            "Les membres de l’ONU",
            "Les juges de Nuremberg"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Slaves et Tziganes, ainsi que homosexuels et handicapés, sont cités dans le résumé."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p03_q3",
          "type": "mcq",
          "prompt": "Dans l’idéologie décrite, les Aryens sont :",
          "options": [
            "Le peuple germanique considéré comme supérieur",
            "Un groupe désigné comme ennemi irréductible",
            "Les victimes des camps d’extermination",
            "Les créateurs du mot génocide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Peuple germanique considéré comme supérieur : c’est la place des Aryens dans ce classement."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p03_q4",
          "type": "mcq",
          "prompt": "Les mesures contre ces groupes, surtout les Juifs, sont mises en place à partir de :",
          "options": [
            "1948",
            "1944",
            "1933",
            "2013"
          ],
          "correctAnswerIndex": 2,
          "explanation": "À partir de 1933 : c’est la date donnée par la leçon."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p03_q5",
          "type": "mcq",
          "prompt": "Selon la leçon, avant les déportations de 1942, il y a déjà eu :",
          "options": [
            "La création de l’ONU",
            "Des mesures mises en place contre les Juifs dès 1933, après leur désignation comme ennemis",
            "La condamnation de Mladic",
            "L’adoption du mot génocide par l’ONU"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Désignation, classement racial et mesures dès 1933 précèdent les déportations."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p03_q6",
          "type": "mcq",
          "prompt": "Parmi les groupes de populations désignés par l’idéologie nazie figurent :",
          "options": [
            "Les handicapés physiques et mentaux",
            "Les Polonais créateurs du mot génocide",
            "Les Américains membres de la SDN",
            "Les juges de la Cour pénale internationale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Handicapés physiques et mentaux et homosexuels sont les deux groupes de populations nommés."
        }
      ]
    },
    {
      "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p04",
      "order": 4,
      "title": "La Shoah : un crime organisé et atroce",
      "summary": "Décrire les rafles, les camps de concentration et d’extermination et les traitements infligés aux victimes à partir de 1942.",
      "conceptExplanation": "Les génocides sont des crimes organisés. En 1942 commence la déportation des Juifs dans les camps de concentration, comme Buchenwald, Flossenbürg et Mauthausen au centre, les camps d’extermination, comme Chelmno, Auschwitz et Majdanek à l’ouest selon la formulation du résumé, et des centres d’euthanasie, comme Branddenbourg, Sonnenstein et Bernbourg au centre. Ils avaient été mis en place pour le massacre organisé des populations jugées indésirables, principalement les Juifs.\nLes populations sont capturées, hommes, femmes et enfants, pendant des rafles avec la participation des autorités. Les autorités réagissaient de connivence avec ceux qui capturaient, et personne n’était épargné pourvu que tu sois Juif. La documentation de la leçon précise que l’extermination des Juifs, appelée pudiquement solution finale, est décidée à la fin de 1941 et prend effet dans les premiers mois de 1942.\nUne fois dans les camps de concentration, les victimes sont battues, mutilées, stérilisées, soumises aux travaux forcés, affamées, entassées, asphyxiées par les gaz d’échappement et tuées par gaz, le cyclone B.",
      "keyRule": "Rafles avec connivence des autorités, camps différenciés et mise à mort organisée : la Shoah est un crime planifié, pas une violence spontanée.",
      "formulas": [],
      "workedExample": {
        "title": "Décrire l’organisation de la solution finale",
        "statement": "En utilisant le résumé et le document sur la solution finale, décris l’organisation du crime, de la décision à la déportation.",
        "methodSteps": [
          "L’extermination des Juifs, appelée solution finale, est décidée à la fin de 1941 et prend effet dans les premiers mois de 1942.",
          "En 1942 commence la déportation des Juifs vers les camps de concentration, les camps d’extermination et les centres d’euthanasie mis en place pour le massacre organisé des populations jugées indésirables.",
          "Les populations, hommes, femmes et enfants, sont capturées pendant des rafles avec la participation et la connivence des autorités.",
          "Dans les camps, les victimes sont battues, mutilées, stérilisées, soumises aux travaux forcés, affamées, entassées et tuées, notamment par les gaz."
        ],
        "conclusion": "Décision, rafles, déportation et camps spécialisés montrent un crime organisé et atroce."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La solution finale",
          "stepTheme": "La solution finale",
          "stepBadge": "La solution finale",
          "paragraphText": "• Solution finale : nom donné pudiquement, selon la documentation de la leçon, à l’extermination des Juifs.\nElle est décidée à la fin de 1941 et prend effet dans les premiers mois de 1942.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p04_q1",
            "type": "mcq",
            "prompt": "La solution finale désigne :",
            "options": [
              "La création de tribunaux internationaux",
              "L’extermination des Juifs, décidée à la fin de 1941",
              "La fin de la colonisation en Côte d’Ivoire",
              "Une sanction contre les auteurs de génocide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le nom de l’extermination des Juifs, décidée fin 1941 et effective début 1942."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La déportation commence en 1942",
          "stepTheme": "La déportation commence en 1942",
          "stepBadge": "La déportation commence en 1942",
          "paragraphText": "En 1942 commence la déportation des Juifs dans les camps.\nCes camps avaient été mis en place pour le massacre organisé des populations jugées indésirables, principalement les Juifs.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p04_q2",
            "type": "mcq",
            "prompt": "La déportation des Juifs dans les camps commence, selon la leçon, en :",
            "options": [
              "1933",
              "1948",
              "1942",
              "1944"
            ],
            "correctAnswerIndex": 2,
            "explanation": "1942 est l’année de début de la déportation donnée par le résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Trois types de lieux cités",
          "stepTheme": "Trois types de lieux cités",
          "stepBadge": "Trois types de lieux cités",
          "paragraphText": "La leçon distingue des camps de concentration, comme Buchenwald, Flossenbürg et Mauthausen.\nElle cite aussi des camps d’extermination, comme Chelmno, Auschwitz et Majdanek, et des centres d’euthanasie, comme Branddenbourg, Sonnenstein et Bernbourg.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p04_q3",
            "type": "mcq",
            "prompt": "Parmi les camps d’extermination cités par la leçon figure :",
            "options": [
              "Buchenwald",
              "Auschwitz",
              "Mauthausen",
              "Bernbourg"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Auschwitz est classé camp d’extermination ; Buchenwald et Mauthausen sont cités comme camps de concentration, Bernbourg comme centre d’euthanasie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Comprendre le rôle des rafles",
          "stepTheme": "Comprendre le rôle des rafles",
          "stepBadge": "Comprendre le rôle des rafles",
          "paragraphText": "Méthode : suivre la capture des populations décrite par la leçon.\nLes hommes, les femmes et les enfants sont capturés pendant des rafles, avec la participation des autorités, qui réagissaient de connivence avec ceux qui capturaient.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p04_q4",
            "type": "mcq",
            "prompt": "Pendant les rafles, les populations capturées sont :",
            "options": [
              "Uniquement des soldats en armes",
              "Les seuls dirigeants politiques",
              "Des hommes, des femmes et des enfants, avec la participation des autorités",
              "Uniquement des personnes épargnées ensuite"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Hommes, femmes et enfants sont capturés, et personne n’est épargné pourvu qu’il soit Juif."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Croire les victimes épargnées selon leur âge",
          "stepTheme": "Croire les victimes épargnées selon leur âge",
          "stepBadge": "Croire les victimes épargnées selon leur âge",
          "paragraphText": "Piège : penser que les enfants ou les femmes étaient épargnés par les rafles.\nLa leçon insiste : les hommes, les femmes et les enfants sont capturés, et personne n’était épargné pourvu que tu sois Juif.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p04_q5",
            "type": "mcq",
            "prompt": "Selon la leçon, dans les rafles, étaient épargnés :",
            "options": [
              "Les enfants uniquement",
              "Les femmes uniquement",
              "Les personnes âgées uniquement",
              "Personne, pourvu que la personne soit Juive"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Personne n’était épargné : c’est l’affirmation explicite du résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les traitements subis dans les camps",
          "stepTheme": "Les traitements subis dans les camps",
          "stepBadge": "Les traitements subis dans les camps",
          "paragraphText": "Exemple des traitements infligés dans les camps de concentration : les victimes sont battues, mutilées et stérilisées.\nElles sont aussi soumises aux travaux forcés, affamées, entassées, asphyxiées par les gaz d’échappement et tuées par gaz, le cyclone B.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p04_q6",
            "type": "mcq",
            "prompt": "Dans les camps, les victimes sont notamment :",
            "options": [
              "Battues, mutilées, stérilisées et soumises aux travaux forcés",
              "Libérées après les rafles",
              "Jugées par la Cour pénale internationale",
              "Dédommagées et réparées immédiatement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Battues, mutilées, stérilisées et soumises aux travaux forcés figurent dans la liste du résumé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p04_q1",
          "type": "mcq",
          "prompt": "La solution finale désigne :",
          "options": [
            "La création de tribunaux internationaux",
            "L’extermination des Juifs, décidée à la fin de 1941",
            "La fin de la colonisation en Côte d’Ivoire",
            "Une sanction contre les auteurs de génocide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le nom de l’extermination des Juifs, décidée fin 1941 et effective début 1942."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p04_q2",
          "type": "mcq",
          "prompt": "La déportation des Juifs dans les camps commence, selon la leçon, en :",
          "options": [
            "1933",
            "1948",
            "1942",
            "1944"
          ],
          "correctAnswerIndex": 2,
          "explanation": "1942 est l’année de début de la déportation donnée par le résumé."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p04_q3",
          "type": "mcq",
          "prompt": "Parmi les camps d’extermination cités par la leçon figure :",
          "options": [
            "Buchenwald",
            "Auschwitz",
            "Mauthausen",
            "Bernbourg"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Auschwitz est classé camp d’extermination ; Buchenwald et Mauthausen sont cités comme camps de concentration, Bernbourg comme centre d’euthanasie."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p04_q4",
          "type": "mcq",
          "prompt": "Pendant les rafles, les populations capturées sont :",
          "options": [
            "Uniquement des soldats en armes",
            "Les seuls dirigeants politiques",
            "Des hommes, des femmes et des enfants, avec la participation des autorités",
            "Uniquement des personnes épargnées ensuite"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Hommes, femmes et enfants sont capturés, et personne n’est épargné pourvu qu’il soit Juif."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p04_q5",
          "type": "mcq",
          "prompt": "Selon la leçon, dans les rafles, étaient épargnés :",
          "options": [
            "Les enfants uniquement",
            "Les femmes uniquement",
            "Les personnes âgées uniquement",
            "Personne, pourvu que la personne soit Juive"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Personne n’était épargné : c’est l’affirmation explicite du résumé."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p04_q6",
          "type": "mcq",
          "prompt": "Dans les camps, les victimes sont notamment :",
          "options": [
            "Battues, mutilées, stérilisées et soumises aux travaux forcés",
            "Libérées après les rafles",
            "Jugées par la Cour pénale internationale",
            "Dédommagées et réparées immédiatement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Battues, mutilées, stérilisées et soumises aux travaux forcés figurent dans la liste du résumé."
        }
      ]
    },
    {
      "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p05",
      "order": 5,
      "title": "Une extermination humaine importante : le bilan de la Shoah",
      "summary": "Lire le bilan chiffré de l’extermination des Juifs d’Europe et ses pourcentages par pays.",
      "conceptExplanation": "Le bilan est terrible. Sur 8 300 000 Juifs vivant en Europe en 1939, 5 978 000 périssent dans les camps, soit 72 pour cent de la communauté juive.\nDes pourcentages s’élèvent localement à 85 pour cent en Pologne, 82 pour cent en Tchécoslovaquie et presque 90 pour cent dans les pays baltes.\nLa conclusion de la leçon rappelle que plusieurs génocides ont eu lieu au cours du XXe siècle, que ces crimes sont localisés sur tous les continents et que le génocide le plus meurtrier est celui des Juifs.",
      "keyRule": "Retiens le bilan global, 5 978 000 morts sur 8 300 000 Juifs d’Europe, et les taux locaux encore plus élevés en Pologne, en Tchécoslovaquie et dans les pays baltes.",
      "formulas": [],
      "workedExample": {
        "title": "Lire le bilan chiffré de la Shoah",
        "statement": "À partir des chiffres du résumé et du document de Bernstein et Milza, présente le bilan de l’extermination des Juifs d’Europe.",
        "methodSteps": [
          "Population de départ : 8 300 000 Juifs vivant en Europe en 1939.",
          "Victimes : 5 978 000 Juifs périssent dans les camps.",
          "Part globale : cela représente 72 pour cent de la communauté juive.",
          "Parts locales : 85 pour cent en Pologne, 82 pour cent en Tchécoslovaquie et presque 90 pour cent dans les pays baltes."
        ],
        "conclusion": "Le bilan global de 72 pour cent cache des destructions locales encore plus massives, jusqu’à presque 90 pour cent dans les pays baltes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le bilan global en chiffres",
          "stepTheme": "Le bilan global en chiffres",
          "stepBadge": "Le bilan global en chiffres",
          "paragraphText": "Sur 8 300 000 Juifs vivant en Europe en 1939, 5 978 000 périssent dans les camps.\nCela représente 72 pour cent de la communauté juive, selon la leçon.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p05_q1",
            "type": "mcq",
            "prompt": "Le nombre de Juifs qui périssent dans les camps est de :",
            "options": [
              "8 300 000",
              "5 978 000",
              "72 000",
              "978 000"
            ],
            "correctAnswerIndex": 1,
            "explanation": "5 978 000 morts sur 8 300 000 Juifs vivant en Europe en 1939."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "72 pour cent de la communauté juive",
          "stepTheme": "72 pour cent de la communauté juive",
          "stepBadge": "72 pour cent de la communauté juive",
          "paragraphText": "Les morts représentent 72 pour cent de la communauté juive d’Europe.\nCe pourcentage global est complété par des pourcentages locaux plus élevés.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p05_q2",
            "type": "mcq",
            "prompt": "La part de la communauté juive d’Europe qui périt est de :",
            "options": [
              "82 pour cent",
              "85 pour cent",
              "72 pour cent",
              "Presque 90 pour cent"
            ],
            "correctAnswerIndex": 2,
            "explanation": "72 pour cent au niveau de l’Europe entière ; les autres pourcentages sont locaux."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le cas de la Pologne",
          "stepTheme": "Le cas de la Pologne",
          "stepBadge": "Le cas de la Pologne",
          "paragraphText": "Localement, les pourcentages de victimes s’élèvent à 85 pour cent en Pologne.\nLa Tchécoslovaquie est à 82 pour cent et les pays baltes à presque 90 pour cent.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p05_q3",
            "type": "mcq",
            "prompt": "Le pourcentage de victimes en Pologne s’élève à :",
            "options": [
              "72 pour cent",
              "82 pour cent",
              "90 pour cent",
              "85 pour cent"
            ],
            "correctAnswerIndex": 3,
            "explanation": "85 pour cent en Pologne, selon la liste du résumé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Comparer global et local",
          "stepTheme": "Comparer global et local",
          "stepBadge": "Comparer global et local",
          "paragraphText": "Méthode : ne pas confondre le taux européen et les taux par pays.\nLe taux global est de 72 pour cent, tandis que la Pologne, la Tchécoslovaquie et les pays baltes dépassent chacun 80 pour cent.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p05_q4",
            "type": "mcq",
            "prompt": "Quelle comparaison est conforme à la leçon ?",
            "options": [
              "Le taux global est supérieur à tous les taux locaux",
              "Les pays baltes, à presque 90 pour cent, dépassent le taux global de 72 pour cent",
              "La Pologne est le pays le moins touché",
              "Aucun pays ne dépasse 72 pour cent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Presque 90 pour cent dans les pays baltes, contre 72 pour cent pour l’ensemble de l’Europe."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Échanger Pologne et Tchécoslovaquie",
          "stepTheme": "Échanger Pologne et Tchécoslovaquie",
          "stepBadge": "Échanger Pologne et Tchécoslovaquie",
          "paragraphText": "Piège : intervertir les pourcentages de la Pologne et de la Tchécoslovaquie.\nLa leçon donne 85 pour cent en Pologne et 82 pour cent en Tchécoslovaquie.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p05_q5",
            "type": "mcq",
            "prompt": "La Tchécoslovaquie présente un pourcentage de victimes de :",
            "options": [
              "85 pour cent",
              "82 pour cent",
              "72 pour cent",
              "Presque 90 pour cent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "82 pour cent en Tchécoslovaquie, contre 85 pour cent en Pologne."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le génocide le plus meurtrier selon la conclusion",
          "stepTheme": "Le génocide le plus meurtrier selon la conclusion",
          "stepBadge": "Le génocide le plus meurtrier selon la conclusion",
          "paragraphText": "Exemple conclusif de la leçon : plusieurs génocides ont eu lieu au XXe siècle, sur tous les continents.\nLa conclusion affirme que le génocide le plus meurtrier est celui des Juifs.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p05_q6",
            "type": "mcq",
            "prompt": "Selon la conclusion de la leçon, le génocide le plus meurtrier est :",
            "options": [
              "Celui des Juifs",
              "La répression coloniale en Côte d’Ivoire",
              "Le massacre de Srebrenica",
              "Aucun génocide n’est cité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le génocide des Juifs est présenté comme le plus meurtrier dans la conclusion."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p05_q1",
          "type": "mcq",
          "prompt": "Le nombre de Juifs qui périssent dans les camps est de :",
          "options": [
            "8 300 000",
            "5 978 000",
            "72 000",
            "978 000"
          ],
          "correctAnswerIndex": 1,
          "explanation": "5 978 000 morts sur 8 300 000 Juifs vivant en Europe en 1939."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p05_q2",
          "type": "mcq",
          "prompt": "La part de la communauté juive d’Europe qui périt est de :",
          "options": [
            "82 pour cent",
            "85 pour cent",
            "72 pour cent",
            "Presque 90 pour cent"
          ],
          "correctAnswerIndex": 2,
          "explanation": "72 pour cent au niveau de l’Europe entière ; les autres pourcentages sont locaux."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p05_q3",
          "type": "mcq",
          "prompt": "Le pourcentage de victimes en Pologne s’élève à :",
          "options": [
            "72 pour cent",
            "82 pour cent",
            "90 pour cent",
            "85 pour cent"
          ],
          "correctAnswerIndex": 3,
          "explanation": "85 pour cent en Pologne, selon la liste du résumé."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p05_q4",
          "type": "mcq",
          "prompt": "Quelle comparaison est conforme à la leçon ?",
          "options": [
            "Le taux global est supérieur à tous les taux locaux",
            "Les pays baltes, à presque 90 pour cent, dépassent le taux global de 72 pour cent",
            "La Pologne est le pays le moins touché",
            "Aucun pays ne dépasse 72 pour cent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Presque 90 pour cent dans les pays baltes, contre 72 pour cent pour l’ensemble de l’Europe."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p05_q5",
          "type": "mcq",
          "prompt": "La Tchécoslovaquie présente un pourcentage de victimes de :",
          "options": [
            "85 pour cent",
            "82 pour cent",
            "72 pour cent",
            "Presque 90 pour cent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "82 pour cent en Tchécoslovaquie, contre 85 pour cent en Pologne."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p05_q6",
          "type": "mcq",
          "prompt": "Selon la conclusion de la leçon, le génocide le plus meurtrier est :",
          "options": [
            "Celui des Juifs",
            "La répression coloniale en Côte d’Ivoire",
            "Le massacre de Srebrenica",
            "Aucun génocide n’est cité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le génocide des Juifs est présenté comme le plus meurtrier dans la conclusion."
        }
      ]
    },
    {
      "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p06",
      "order": 6,
      "title": "Les actions de lutte et de prévention contre les génocides",
      "summary": "Connaître les moyens juridiques de lutte, les tribunaux créés et les sanctions infligées aux auteurs de génocide.",
      "conceptExplanation": "Les moyens juridiques de lutte contre les génocides sont les conventions pour la prévention et la répression des crimes de génocide : la Déclaration universelle des droits de l’homme du 10 décembre 1948 à Paris, par la résolution 217 A, et le Droit international humanitaire en 1949 à Genève. S’y ajoute la création de tribunaux internationaux et nationaux : le procès de Nuremberg, la CPI, le TPIR et le TPIY.\nLes sanctions contre les auteurs de crimes de génocide sont la peine de mort et les emprisonnements. Les auteurs du génocide juif ont eu des peines de mort et d’emprisonnement à vie. En mai 2013, l’ancien dictateur guatémaltèque Efrain Rios Montt, président de 1982 à 1983, a été condamné à 80 ans de prison, dont 50 ans pour génocide. Le général Ratko Mladic a été condamné à perpétuité pour avoir commandité le massacre des musulmans à Srebrenica.\nLes sanctions comprennent aussi les dédommagements et les réparations.",
      "keyRule": "Lutter contre les génocides combine des conventions, des tribunaux comme la CPI, le TPIR et le TPIY, et des sanctions allant jusqu’à la perpétuité, plus les réparations.",
      "formulas": [],
      "workedExample": {
        "title": "Présenter la lutte juridique contre les génocides",
        "statement": "En complétant le texte à trous de l’activité d’application, présente les moyens juridiques de lutte contre les génocides et le rôle de la Cour pénale internationale.",
        "methodSteps": [
          "Les violences de masse, dont les génocides, sont considérées comme des crimes contre l’humanité.",
          "Pour lutter contre ces crimes, des moyens juridiques sont mis en place : conventions de prévention et de répression, Déclaration universelle des droits de l’homme de 1948 et Droit international humanitaire de 1949.",
          "Des tribunaux sont créés : procès de Nuremberg, TPIR, TPIY et Cour pénale internationale.",
          "La Cour pénale internationale a pour mission de juger et de condamner les auteurs de crimes génocidaires."
        ],
        "conclusion": "Conventions, tribunaux et Cour pénale internationale forment l’arsenal juridique décrit par la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La Déclaration universelle des droits de l’homme",
          "stepTheme": "La Déclaration universelle des droits de l’homme",
          "stepBadge": "La Déclaration universelle des droits de l’homme",
          "paragraphText": "• Déclaration universelle des droits de l’homme : texte cité par la leçon parmi les moyens juridiques de lutte.\nElle date du 10 décembre 1948 à Paris, par la résolution 217 A.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p06_q1",
            "type": "mcq",
            "prompt": "La Déclaration universelle des droits de l’homme date du :",
            "options": [
              "9 décembre 1948",
              "10 décembre 1948 à Paris",
              "En 1949 à Genève",
              "En mai 2013"
            ],
            "correctAnswerIndex": 1,
            "explanation": "10 décembre 1948 à Paris pour la Déclaration ; le 9 décembre 1948 concerne l’adoption du terme génocide par l’ONU."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le Droit international humanitaire",
          "stepTheme": "Le Droit international humanitaire",
          "stepBadge": "Le Droit international humanitaire",
          "paragraphText": "• Droit international humanitaire : moyen juridique cité par la leçon à côté des conventions de prévention et de répression.\nIl est daté de 1949 à Genève.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p06_q2",
            "type": "mcq",
            "prompt": "Le Droit international humanitaire est daté par la leçon de :",
            "options": [
              "1948 à Paris",
              "1944 à Nuremberg",
              "1949 à Genève",
              "2002 à La Haye"
            ],
            "correctAnswerIndex": 2,
            "explanation": "1949 à Genève : lieu et date associés au Droit international humanitaire dans le résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les tribunaux créés",
          "stepTheme": "Les tribunaux créés",
          "stepBadge": "Les tribunaux créés",
          "paragraphText": "La lutte juridique passe par la création de tribunaux internationaux et nationaux.\nLa leçon cite le procès de Nuremberg, la CPI, le TPIR et le TPIY.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p06_q3",
            "type": "mcq",
            "prompt": "Parmi les juridictions citées par la leçon figure :",
            "options": [
              "La CPI, Cour pénale internationale",
              "La seule SDN",
              "Le tribunal de Sarajevo de 1914",
              "Aucun tribunal"
            ],
            "correctAnswerIndex": 0,
            "explanation": "CPI, TPIR, TPIY et procès de Nuremberg sont les juridictions listées."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les sanctions prévues",
          "stepTheme": "Les sanctions prévues",
          "stepBadge": "Les sanctions prévues",
          "paragraphText": "Les sanctions contre les auteurs de crimes de génocide comprennent la peine de mort et les emprisonnements.\nElles comprennent aussi les dédommagements et les réparations.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p06_q4",
            "type": "mcq",
            "prompt": "Outre la peine de mort et les emprisonnements, les sanctions comprennent :",
            "options": [
              "La remilitarisation des pays vaincus",
              "Les dédommagements et les réparations",
              "L’entrave aux naissances",
              "La création de camps"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dédommagements et réparations complètent les sanctions pénales dans la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Croire les auteurs jamais condamnés",
          "stepTheme": "Croire les auteurs jamais condamnés",
          "stepBadge": "Croire les auteurs jamais condamnés",
          "paragraphText": "Piège : penser que les crimes de génocide restent sans sanction.\nLa leçon donne des condamnations précises : les auteurs du génocide juif ont eu des peines de mort et d’emprisonnement à vie, et des procès récents ont abouti à de lourdes peines.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p06_q5",
            "type": "mcq",
            "prompt": "Quelle affirmation contredit la leçon ?",
            "options": [
              "Mladic a été condamné à perpétuité",
              "Rios Montt a été condamné en mai 2013",
              "Les auteurs du génocide juif ont eu des peines de mort et d’emprisonnement à vie",
              "Aucun auteur de génocide n’a jamais été condamné"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon cite au contraire plusieurs condamnations effectives."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Rios Montt et Mladic condamnés",
          "stepTheme": "Rios Montt et Mladic condamnés",
          "stepBadge": "Rios Montt et Mladic condamnés",
          "paragraphText": "Exemples de sanctions récentes : en mai 2013, Efrain Rios Montt est condamné à 80 ans de prison, dont 50 ans pour génocide.\nLe général Ratko Mladic est condamné à perpétuité pour avoir commandité le massacre des musulmans à Srebrenica.",
          "exercise": {
            "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p06_q6",
            "type": "mcq",
            "prompt": "La condamnation d’Efrain Rios Montt en mai 2013 est de :",
            "options": [
              "La peine de mort immédiate",
              "80 ans de prison, dont 50 ans pour génocide",
              "10 ans de prison",
              "La perpétuité pour Srebrenica"
            ],
            "correctAnswerIndex": 1,
            "explanation": "80 ans de prison dont 50 ans pour génocide pour Rios Montt ; la perpétuité concerne Mladic."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p06_q1",
          "type": "mcq",
          "prompt": "La Déclaration universelle des droits de l’homme date du :",
          "options": [
            "9 décembre 1948",
            "10 décembre 1948 à Paris",
            "En 1949 à Genève",
            "En mai 2013"
          ],
          "correctAnswerIndex": 1,
          "explanation": "10 décembre 1948 à Paris pour la Déclaration ; le 9 décembre 1948 concerne l’adoption du terme génocide par l’ONU."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p06_q2",
          "type": "mcq",
          "prompt": "Le Droit international humanitaire est daté par la leçon de :",
          "options": [
            "1948 à Paris",
            "1944 à Nuremberg",
            "1949 à Genève",
            "2002 à La Haye"
          ],
          "correctAnswerIndex": 2,
          "explanation": "1949 à Genève : lieu et date associés au Droit international humanitaire dans le résumé."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p06_q3",
          "type": "mcq",
          "prompt": "Parmi les juridictions citées par la leçon figure :",
          "options": [
            "La CPI, Cour pénale internationale",
            "La seule SDN",
            "Le tribunal de Sarajevo de 1914",
            "Aucun tribunal"
          ],
          "correctAnswerIndex": 0,
          "explanation": "CPI, TPIR, TPIY et procès de Nuremberg sont les juridictions listées."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p06_q4",
          "type": "mcq",
          "prompt": "Outre la peine de mort et les emprisonnements, les sanctions comprennent :",
          "options": [
            "La remilitarisation des pays vaincus",
            "Les dédommagements et les réparations",
            "L’entrave aux naissances",
            "La création de camps"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dédommagements et réparations complètent les sanctions pénales dans la leçon."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p06_q5",
          "type": "mcq",
          "prompt": "Quelle affirmation contredit la leçon ?",
          "options": [
            "Mladic a été condamné à perpétuité",
            "Rios Montt a été condamné en mai 2013",
            "Les auteurs du génocide juif ont eu des peines de mort et d’emprisonnement à vie",
            "Aucun auteur de génocide n’a jamais été condamné"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon cite au contraire plusieurs condamnations effectives."
        },
        {
          "id": "premiere_hg_histoire_t3_l03_violences_masse_genocides_p06_q6",
          "type": "mcq",
          "prompt": "La condamnation d’Efrain Rios Montt en mai 2013 est de :",
          "options": [
            "La peine de mort immédiate",
            "80 ans de prison, dont 50 ans pour génocide",
            "10 ans de prison",
            "La perpétuité pour Srebrenica"
          ],
          "correctAnswerIndex": 1,
          "explanation": "80 ans de prison dont 50 ans pour génocide pour Rios Montt ; la perpétuité concerne Mladic."
        }
      ]
    }
  ]
};
