import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « L'essor du capitalisme et ses conséquences » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=877
export const HIST_1ERE_T1_L01_ESSOR_CAPITALISME: CurriculumChapter = {
  "id": "premiere_hg_histoire_t1_l01_essor_capitalisme",
  "subjectId": "histoire_geo",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 1,
  "title": "Thème 1, leçon 1 : L'essor du capitalisme et ses conséquences",
  "summary": "Apparu en Europe à la fin du Moyen Âge et en plein essor au XIXe siècle, le capitalisme repose sur la liberté, la concurrence, la recherche du profit et la propriété privée ; la leçon explique son évolution, ses moyens d'action, son fonctionnement et ses conséquences sociales, politiques et économiques.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=877",
  "points": [
    {
      "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p01",
      "order": 1,
      "title": "Les fondements du capitalisme",
      "summary": "Définir le capitalisme et présenter ses quatre bases : liberté, concurrence, profit et propriété privée.",
      "conceptExplanation": "À la fin du Moyen Âge, un nouveau système économique apparaît en Europe : le capitalisme. Il provient du mot capital, qui est l'ensemble des moyens financiers, matériels et humains nécessaires à la création d'une entreprise. C'est une doctrine économique et sociale qui prend son essor au XIXe siècle.\nLes bases du capitalisme sont la liberté, la concurrence, la recherche du profit et la propriété privée. La liberté d'entreprise est la liberté pour chacun de créer et de gérer des entreprises de son choix dans le respect de la législation en vigueur. La libre concurrence désigne une sorte de confrontation stimulante et légale d'entreprises exerçant dans le même domaine ; elle fait appel à la loi de l'offre et de la demande. Le profit désigne le bénéfice : c'est la différence entre la valeur de la production qui est vendue et le coût nécessaire à la création de la même production. Dans le système capitaliste, les moyens de production sont privés : ils appartiennent à une ou plusieurs personnes physiques ou morales.",
      "keyRule": "Le capitalisme repose sur quatre bases : liberté d'entreprise, libre concurrence, recherche du profit et propriété privée des moyens de production.",
      "formulas": [],
      "workedExample": {
        "title": "Identifier les fondements dans la situation d'apprentissage",
        "statement": "Lors d'un débat sur Africa 24 sur la crise économique mondiale, un invité affirme que les crises sont inhérentes à l'économie capitaliste. Des élèves cherchent à identifier les fondements du capitalisme.",
        "methodSteps": [
          "Repérer le mot capital : l'ensemble des moyens financiers, matériels et humains nécessaires à la création d'une entreprise.",
          "Citer les quatre bases : liberté, concurrence, recherche du profit et propriété privée.",
          "Préciser que les moyens de production appartiennent à des personnes privées, et non à l'État."
        ],
        "conclusion": "Le capitalisme est une doctrine économique et sociale fondée sur la liberté, la concurrence, le profit et la propriété privée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le capital et le capitalisme",
          "stepTheme": "Le capital et le capitalisme",
          "stepBadge": "Le capital et le capitalisme",
          "paragraphText": "• Capital : ensemble des moyens financiers, matériels et humains nécessaires à la création d'une entreprise.\nLe capitalisme est le nouveau système économique qui apparaît en Europe à la fin du Moyen Âge ; c'est une doctrine économique et sociale qui prend son essor au XIXe siècle.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p01_q1",
            "type": "mcq",
            "prompt": "Le capital désigne :",
            "options": [
              "Uniquement les billets de banque",
              "L'ensemble des moyens financiers, matériels et humains nécessaires à la création d'une entreprise",
              "Le salaire des ouvriers",
              "Les impôts payés à l'État"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition donnée au début de la leçon : le capital réunit les moyens financiers, matériels et humains nécessaires pour créer une entreprise."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La liberté d'entreprise",
          "stepTheme": "La liberté d'entreprise",
          "stepBadge": "La liberté d'entreprise",
          "paragraphText": "• Liberté d'entreprise : liberté pour chacun de créer et de gérer des entreprises de son choix dans le respect de la législation en vigueur.\nC'est l'une des quatre bases du capitalisme, avec la concurrence, le profit et la propriété privée.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p01_q2",
            "type": "mcq",
            "prompt": "La liberté d'entreprise, c'est :",
            "options": [
              "La liberté de ne pas payer d'impôts",
              "La liberté de créer et de gérer des entreprises de son choix dans le respect de la loi",
              "La liberté de fixer seul tous les prix du marché",
              "La liberté de supprimer la concurrence"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon définit la liberté d'entreprise comme la liberté de créer et de gérer des entreprises de son choix, dans le respect de la législation en vigueur."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La libre concurrence",
          "stepTheme": "La libre concurrence",
          "stepBadge": "La libre concurrence",
          "paragraphText": "• Libre concurrence : confrontation stimulante et légale d'entreprises exerçant dans le même domaine.\nElle fait appel à la loi de l'offre et de la demande : les prix varient selon la quantité de produits offerts et la demande des acheteurs.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p01_q3",
            "type": "mcq",
            "prompt": "La libre concurrence fait appel à :",
            "options": [
              "La loi de l'offre et de la demande",
              "La fixation des prix par l'État",
              "L'interdiction de créer des entreprises",
              "La suppression des bénéfices"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Selon la leçon, la libre concurrence désigne une confrontation légale d'entreprises du même domaine et fait appel à la loi de l'offre et de la demande."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le profit recherché",
          "stepTheme": "Le profit recherché",
          "stepBadge": "Le profit recherché",
          "paragraphText": "• Profit : le bénéfice, c'est-à-dire la différence entre la valeur de la production qui est vendue et le coût nécessaire à la création de la même production.\nLe profit est aussi l'excédent brut ou le gain : c'est ce bénéfice que recherche le capitaliste qui engage son argent dans une affaire.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p01_q4",
            "type": "mcq",
            "prompt": "Le profit est :",
            "options": [
              "Le coût de fabrication d'un produit",
              "Le salaire versé aux ouvriers",
              "La différence entre la valeur de la production vendue et le coût nécessaire à sa création",
              "Le prix fixé par la bourse"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon définit le profit comme le bénéfice : la différence entre la valeur de la production vendue et le coût nécessaire à la création de cette production."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La propriété des moyens de production",
          "stepTheme": "La propriété des moyens de production",
          "stepBadge": "La propriété des moyens de production",
          "paragraphText": "Piège : dans le système capitaliste, les moyens de production n'appartiennent pas à l'État.\nIls sont privés et appartiennent à une ou plusieurs personnes physiques ou morales, comme une société anonyme ou une société à responsabilité limitée.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p01_q5",
            "type": "mcq",
            "prompt": "Dans le système capitaliste, les moyens de production appartiennent :",
            "options": [
              "À l'État uniquement",
              "À la collectivité tout entière",
              "À des personnes privées, physiques ou morales",
              "Aux seuls ouvriers de l'entreprise"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La propriété privée est un fondement du capitalisme : les moyens de production appartiennent à une ou plusieurs personnes physiques ou morales."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un capitaliste qui engage son argent",
          "stepTheme": "Un capitaliste qui engage son argent",
          "stepBadge": "Un capitaliste qui engage son argent",
          "paragraphText": "Exemple tiré de la leçon : le capitaliste engage son argent dans une affaire pour rechercher le bénéfice.\nS'il vend sa production plus cher que ce qu'elle lui a coûté à produire, la différence constitue son profit.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p01_q6",
            "type": "mcq",
            "prompt": "Dans l'exemple de la leçon, le capitaliste engage son argent dans une affaire pour :",
            "options": [
              "Perdre son capital",
              "Rechercher le bénéfice, c'est-à-dire le profit",
              "Supprimer la concurrence",
              "Financer l'État"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La recherche du profit est un fondement du système : le capitaliste engage son argent dans une affaire pour en tirer un bénéfice."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p01_q1",
          "type": "mcq",
          "prompt": "Le capital désigne :",
          "options": [
            "Uniquement les billets de banque",
            "L'ensemble des moyens financiers, matériels et humains nécessaires à la création d'une entreprise",
            "Le salaire des ouvriers",
            "Les impôts payés à l'État"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition donnée au début de la leçon : le capital réunit les moyens financiers, matériels et humains nécessaires pour créer une entreprise."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p01_q2",
          "type": "mcq",
          "prompt": "La liberté d'entreprise, c'est :",
          "options": [
            "La liberté de ne pas payer d'impôts",
            "La liberté de créer et de gérer des entreprises de son choix dans le respect de la loi",
            "La liberté de fixer seul tous les prix du marché",
            "La liberté de supprimer la concurrence"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon définit la liberté d'entreprise comme la liberté de créer et de gérer des entreprises de son choix, dans le respect de la législation en vigueur."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p01_q3",
          "type": "mcq",
          "prompt": "La libre concurrence fait appel à :",
          "options": [
            "La loi de l'offre et de la demande",
            "La fixation des prix par l'État",
            "L'interdiction de créer des entreprises",
            "La suppression des bénéfices"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Selon la leçon, la libre concurrence désigne une confrontation légale d'entreprises du même domaine et fait appel à la loi de l'offre et de la demande."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p01_q4",
          "type": "mcq",
          "prompt": "Le profit est :",
          "options": [
            "Le coût de fabrication d'un produit",
            "Le salaire versé aux ouvriers",
            "La différence entre la valeur de la production vendue et le coût nécessaire à sa création",
            "Le prix fixé par la bourse"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon définit le profit comme le bénéfice : la différence entre la valeur de la production vendue et le coût nécessaire à la création de cette production."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p01_q5",
          "type": "mcq",
          "prompt": "Dans le système capitaliste, les moyens de production appartiennent :",
          "options": [
            "À l'État uniquement",
            "À la collectivité tout entière",
            "À des personnes privées, physiques ou morales",
            "Aux seuls ouvriers de l'entreprise"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La propriété privée est un fondement du capitalisme : les moyens de production appartiennent à une ou plusieurs personnes physiques ou morales."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p01_q6",
          "type": "mcq",
          "prompt": "Dans l'exemple de la leçon, le capitaliste engage son argent dans une affaire pour :",
          "options": [
            "Perdre son capital",
            "Rechercher le bénéfice, c'est-à-dire le profit",
            "Supprimer la concurrence",
            "Financer l'État"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La recherche du profit est un fondement du système : le capitaliste engage son argent dans une affaire pour en tirer un bénéfice."
        }
      ]
    },
    {
      "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p02",
      "order": 2,
      "title": "Du capitalisme mercantile au capitalisme financier",
      "summary": "Suivre l'évolution du capitalisme : mercantile aux Temps modernes, industriel au XVIIIe siècle, puis financier.",
      "conceptExplanation": "Le capitalisme mercantile, ou capitalisme marchand, se développe en Europe à l'époque des Temps modernes, de 1492 à 1792. Le cabotage puis les grandes découvertes du XVe au XVIIIe siècle jettent les bases de ce capitalisme. Les produits recherchés étaient les produits tropicaux, l'or et les esclaves noirs. Les principaux acteurs sont les Vénitiens, les Portugais, les Espagnols, les Hollandais, les Anglais et les Français, financés par les souverains et les familles nobles. Les grandes places étaient Gênes, Venise, Liverpool, Nantes et Bordeaux.\nAvec l'avènement du machinisme, se développe le capitalisme industriel à partir du XVIIIe siècle. La naissance de l'industrie commande la recherche de gros capitaux. Les capitalistes ont alors recours aux banques et aux bourses, ce qui engendre une nouvelle forme de capitalisme : le capitalisme financier.",
      "keyRule": "L'ordre d'évolution est : capitalisme mercantile, puis capitalisme industriel avec le machinisme, puis capitalisme financier grâce aux banques et aux bourses.",
      "formulas": [],
      "workedExample": {
        "title": "Ordonner les formes du capitalisme",
        "statement": "Un élève doit classer dans l'ordre chronologique : capitalisme financier, capitalisme mercantile, capitalisme industriel.",
        "methodSteps": [
          "Le capitalisme mercantile vient en premier : il se développe aux Temps modernes, de 1492 à 1792, avec le cabotage et les grandes découvertes.",
          "Le capitalisme industriel suit : il naît à partir du XVIIIe siècle avec l'avènement du machinisme.",
          "Le capitalisme financier vient en dernier : la recherche de gros capitaux pousse les capitalistes vers les banques et les bourses."
        ],
        "conclusion": "Mercantile, industriel puis financier : chaque forme succède à la précédente selon l'évolution des activités économiques."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le capitalisme mercantile",
          "stepTheme": "Le capitalisme mercantile",
          "stepBadge": "Le capitalisme mercantile",
          "paragraphText": "• Capitalisme mercantile ou marchand : forme de capitalisme qui se développe en Europe à l'époque des Temps modernes, de 1492 à 1792.\nLe cabotage puis les grandes découvertes du XVe au XVIIIe siècle en jettent les bases.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p02_q1",
            "type": "mcq",
            "prompt": "Le capitalisme mercantile se développe :",
            "options": [
              "Au XIXe siècle avec les banques",
              "Aux Temps modernes, de 1492 à 1792",
              "Après le capitalisme industriel",
              "Uniquement en Afrique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon situe le capitalisme mercantile aux Temps modernes, de 1492 à 1792, sur la base du cabotage et des grandes découvertes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les produits et les acteurs du commerce",
          "stepTheme": "Les produits et les acteurs du commerce",
          "stepBadge": "Les produits et les acteurs du commerce",
          "paragraphText": "Les produits recherchés au temps du capitalisme mercantile étaient les produits tropicaux, l'or et les esclaves noirs.\nLes principaux acteurs sont les Vénitiens, les Portugais, les Espagnols, les Hollandais, les Anglais et les Français ; les grandes places étaient Gênes, Venise, Liverpool, Nantes et Bordeaux.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p02_q2",
            "type": "mcq",
            "prompt": "Parmi les produits recherchés au temps du capitalisme mercantile, on trouve :",
            "options": [
              "Les automobiles et les ordinateurs",
              "Les produits tropicaux, l'or et les esclaves noirs",
              "Le pétrole et l'électricité",
              "Le café et le cacao uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les trois produits cités par la leçon pour le commerce des Temps modernes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le capitalisme industriel",
          "stepTheme": "Le capitalisme industriel",
          "stepBadge": "Le capitalisme industriel",
          "paragraphText": "• Capitalisme industriel : forme de capitalisme qui se développe avec l'avènement du machinisme, à partir du XVIIIe siècle.\nLa naissance de l'industrie commande la recherche de gros capitaux.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p02_q3",
            "type": "mcq",
            "prompt": "Le capitalisme industriel apparaît :",
            "options": [
              "Avant le capitalisme mercantile",
              "À partir du XVIIIe siècle, avec l'avènement du machinisme",
              "Au Moyen Âge",
              "Après le capitalisme financier"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon indique que le capitalisme industriel se développe à partir du XVIIIe siècle, avec l'avènement du machinisme."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le recours aux banques et aux bourses",
          "stepTheme": "Le recours aux banques et aux bourses",
          "stepBadge": "Le recours aux banques et aux bourses",
          "paragraphText": "Méthode pour comprendre la naissance du capitalisme financier : l'industrie exige de gros capitaux.\nLes capitalistes ont alors recours aux banques et aux bourses, ce qui engendre une nouvelle forme de capitalisme : le capitalisme financier.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p02_q4",
            "type": "mcq",
            "prompt": "Le capitalisme financier naît parce que :",
            "options": [
              "Les commerçants abandonnent les grandes découvertes",
              "L'État interdit les entreprises privées",
              "Les salaires des ouvriers augmentent",
              "La naissance de l'industrie commande la recherche de gros capitaux, d'où le recours aux banques et aux bourses"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Selon la leçon, le besoin de gros capitaux pour l'industrie conduit au recours aux banques et aux bourses : c'est le capitalisme financier."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Inverser mercantile et industriel",
          "stepTheme": "Inverser mercantile et industriel",
          "stepBadge": "Inverser mercantile et industriel",
          "paragraphText": "Piège : le capitalisme industriel ne précède pas le capitalisme mercantile.\nL'activité d'application de la leçon le confirme : l'affirmation selon laquelle le capitalisme industriel précède le capitalisme mercantile est fausse.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p02_q5",
            "type": "mcq",
            "prompt": "Quelle affirmation est vraie ?",
            "options": [
              "Le capitalisme industriel précède le capitalisme mercantile",
              "Le capitalisme mercantile précède le capitalisme industriel",
              "Le capitalisme financier est le plus ancien",
              "Le capitalisme est né en Afrique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le mercantile, aux Temps modernes, précède l'industriel, né au XVIIIe siècle avec le machinisme."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les grandes places marchandes",
          "stepTheme": "Les grandes places marchandes",
          "stepBadge": "Les grandes places marchandes",
          "paragraphText": "Exemple : les grandes places du capitalisme mercantile étaient Gênes, Venise, Liverpool, Nantes et Bordeaux.\nCes villes portuaires animaient le commerce lié aux grandes découvertes.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p02_q6",
            "type": "mcq",
            "prompt": "Parmi ces villes, laquelle était une grande place du capitalisme mercantile ?",
            "options": [
              "Venise",
              "Abidjan",
              "New York",
              "Tokyo"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Venise figure dans la liste des grandes places données par la leçon, avec Gênes, Liverpool, Nantes et Bordeaux."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p02_q1",
          "type": "mcq",
          "prompt": "Le capitalisme mercantile se développe :",
          "options": [
            "Au XIXe siècle avec les banques",
            "Aux Temps modernes, de 1492 à 1792",
            "Après le capitalisme industriel",
            "Uniquement en Afrique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon situe le capitalisme mercantile aux Temps modernes, de 1492 à 1792, sur la base du cabotage et des grandes découvertes."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p02_q2",
          "type": "mcq",
          "prompt": "Parmi les produits recherchés au temps du capitalisme mercantile, on trouve :",
          "options": [
            "Les automobiles et les ordinateurs",
            "Les produits tropicaux, l'or et les esclaves noirs",
            "Le pétrole et l'électricité",
            "Le café et le cacao uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les trois produits cités par la leçon pour le commerce des Temps modernes."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p02_q3",
          "type": "mcq",
          "prompt": "Le capitalisme industriel apparaît :",
          "options": [
            "Avant le capitalisme mercantile",
            "À partir du XVIIIe siècle, avec l'avènement du machinisme",
            "Au Moyen Âge",
            "Après le capitalisme financier"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon indique que le capitalisme industriel se développe à partir du XVIIIe siècle, avec l'avènement du machinisme."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p02_q4",
          "type": "mcq",
          "prompt": "Le capitalisme financier naît parce que :",
          "options": [
            "Les commerçants abandonnent les grandes découvertes",
            "L'État interdit les entreprises privées",
            "Les salaires des ouvriers augmentent",
            "La naissance de l'industrie commande la recherche de gros capitaux, d'où le recours aux banques et aux bourses"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Selon la leçon, le besoin de gros capitaux pour l'industrie conduit au recours aux banques et aux bourses : c'est le capitalisme financier."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p02_q5",
          "type": "mcq",
          "prompt": "Quelle affirmation est vraie ?",
          "options": [
            "Le capitalisme industriel précède le capitalisme mercantile",
            "Le capitalisme mercantile précède le capitalisme industriel",
            "Le capitalisme financier est le plus ancien",
            "Le capitalisme est né en Afrique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le mercantile, aux Temps modernes, précède l'industriel, né au XVIIIe siècle avec le machinisme."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p02_q6",
          "type": "mcq",
          "prompt": "Parmi ces villes, laquelle était une grande place du capitalisme mercantile ?",
          "options": [
            "Venise",
            "Abidjan",
            "New York",
            "Tokyo"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Venise figure dans la liste des grandes places données par la leçon, avec Gênes, Liverpool, Nantes et Bordeaux."
        }
      ]
    },
    {
      "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p03",
      "order": 3,
      "title": "La monnaie, les banques et le crédit",
      "summary": "Présenter les moyens d'action du capitalisme : les trois types de monnaie et les trois types de banques.",
      "conceptExplanation": "La monnaie est un moyen de paiement, un outil économique qui favorise les échanges. Il existe trois types de monnaie : la monnaie métallique, c'est-à-dire les pièces de monnaie, qui s'est accrue au XIXe siècle grâce à l'exploitation des gisements d'or et d'argent d'Amérique et d'Australie ; la monnaie fiduciaire, c'est-à-dire les billets de banque ; et la monnaie scripturale, sous forme de chèques.\nLa banque est un établissement financier qui mobilise, gère et garantit la sécurité des fonds déposés par les clients. Elle octroie d'importants crédits qui contribuent au développement des entreprises. On distingue les banques d'émission, qui émettent la monnaie, comme la Banque d'Angleterre ; les banques d'affaires, qui investissent à long et moyen terme dans les grandes entreprises, comme la banque Rothschild ; et les banques de dépôt, qui mobilisent les fonds des petits épargnants et les prêtent à court terme, comme le Crédit lyonnais, créé en 1863, et la Société Générale, créée en 1864.",
      "keyRule": "Trois monnaies (métallique, fiduciaire, scripturale) et trois banques (émission, affaires, dépôt) : chaque type a une fonction précise à retenir avec son exemple.",
      "formulas": [],
      "workedExample": {
        "title": "Classer les monnaies de l'activité d'application",
        "statement": "L'activité d'application de la leçon demande de relier : monnaie métallique, monnaie fiduciaire et monnaie scripturale à leurs correspondants.",
        "methodSteps": [
          "La monnaie métallique correspond aux pièces de monnaie.",
          "La monnaie fiduciaire correspond aux billets de banque.",
          "La monnaie scripturale correspond aux écritures comme le chèque."
        ],
        "conclusion": "Chaque type de monnaie se reconnaît à son support : pièces, billets ou écritures."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La monnaie, outil d'échange",
          "stepTheme": "La monnaie, outil d'échange",
          "stepBadge": "La monnaie, outil d'échange",
          "paragraphText": "• Monnaie : moyen de paiement, outil économique qui favorise les échanges.\nIl en existe trois types : métallique, fiduciaire et scripturale.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p03_q1",
            "type": "mcq",
            "prompt": "La monnaie est définie dans la leçon comme :",
            "options": [
              "Un impôt payé par les entreprises",
              "Un moyen de paiement qui favorise les échanges",
              "Une action vendue en bourse",
              "Un produit tropical recherché"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon définit la monnaie comme un moyen de paiement, un outil économique qui favorise les échanges."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les trois types de monnaie",
          "stepTheme": "Les trois types de monnaie",
          "stepBadge": "Les trois types de monnaie",
          "paragraphText": "• Monnaie métallique : les pièces de monnaie.\n• Monnaie fiduciaire : les billets de banque.\n• Monnaie scripturale : sous forme de chèques. La monnaie métallique s'est accrue au XIXe siècle grâce aux gisements d'or et d'argent d'Amérique et d'Australie.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p03_q2",
            "type": "mcq",
            "prompt": "Le chèque est une forme de :",
            "options": [
              "Monnaie métallique",
              "Monnaie fiduciaire",
              "Monnaie scripturale",
              "Monnaie électronique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon présente la monnaie scripturale sous forme de chèques ; les pièces sont la monnaie métallique et les billets la monnaie fiduciaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le rôle de la banque",
          "stepTheme": "Le rôle de la banque",
          "stepBadge": "Le rôle de la banque",
          "paragraphText": "• Banque : établissement financier qui mobilise, gère et garantit la sécurité des fonds déposés par les clients.\nElle octroie d'importants crédits qui contribuent au développement des entreprises.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p03_q3",
            "type": "mcq",
            "prompt": "Le rôle de la banque est notamment :",
            "options": [
              "D'émettre les lois du pays",
              "D'octroyer d'importants crédits qui contribuent au développement des entreprises",
              "De fixer les salaires des ouvriers",
              "D'interdire la concurrence"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Selon la leçon, la banque mobilise et gère les fonds des clients et octroie des crédits qui contribuent au développement des entreprises."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les banques d'émission et d'affaires",
          "stepTheme": "Les banques d'émission et d'affaires",
          "stepBadge": "Les banques d'émission et d'affaires",
          "paragraphText": "• Banques d'émission : elles émettent la monnaie, comme la Banque d'Angleterre.\n• Banques d'affaires : elles investissent à long et moyen terme des capitaux dans les grandes entreprises industrielles et commerciales, comme la banque Rothschild.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p03_q4",
            "type": "mcq",
            "prompt": "Les banques d'affaires se caractérisent par :",
            "options": [
              "L'émission des pièces de monnaie",
              "La collecte des fonds des petits épargnants",
              "Les investissements à long et moyen terme dans les grandes entreprises",
              "La vente des produits tropicaux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon définit les banques d'affaires par leurs investissements à long et moyen terme dans les grandes entreprises, avec l'exemple de la banque Rothschild."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre billet et monnaie scripturale",
          "stepTheme": "Confondre billet et monnaie scripturale",
          "stepBadge": "Confondre billet et monnaie scripturale",
          "paragraphText": "Piège tiré de l'activité d'application : l'affirmation « le billet de banque est une monnaie scripturale » est fausse.\nLe billet de banque est la monnaie fiduciaire ; la monnaie scripturale prend la forme de chèques.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p03_q5",
            "type": "mcq",
            "prompt": "Le billet de banque est :",
            "options": [
              "Une monnaie scripturale",
              "Une monnaie métallique",
              "Une obligation",
              "Une monnaie fiduciaire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le billet de banque relève de la monnaie fiduciaire ; la monnaie scripturale est celle des écritures, comme le chèque."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le Crédit lyonnais et la Société Générale",
          "stepTheme": "Le Crédit lyonnais et la Société Générale",
          "stepBadge": "Le Crédit lyonnais et la Société Générale",
          "paragraphText": "Exemple : les banques de dépôt mobilisent les fonds des petits épargnants et les prêtent à court terme.\nLa leçon cite le Crédit lyonnais, créé en 1863, et la Société Générale, créée en 1864.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p03_q6",
            "type": "mcq",
            "prompt": "Le Crédit lyonnais, créé en 1863, est cité comme exemple de :",
            "options": [
              "Banque d'émission",
              "Banque de dépôt",
              "Banque d'affaires",
              "Bourse des valeurs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le Crédit lyonnais et la Société Générale sont les exemples de banques de dépôt donnés par la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p03_q1",
          "type": "mcq",
          "prompt": "La monnaie est définie dans la leçon comme :",
          "options": [
            "Un impôt payé par les entreprises",
            "Un moyen de paiement qui favorise les échanges",
            "Une action vendue en bourse",
            "Un produit tropical recherché"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon définit la monnaie comme un moyen de paiement, un outil économique qui favorise les échanges."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p03_q2",
          "type": "mcq",
          "prompt": "Le chèque est une forme de :",
          "options": [
            "Monnaie métallique",
            "Monnaie fiduciaire",
            "Monnaie scripturale",
            "Monnaie électronique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon présente la monnaie scripturale sous forme de chèques ; les pièces sont la monnaie métallique et les billets la monnaie fiduciaire."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p03_q3",
          "type": "mcq",
          "prompt": "Le rôle de la banque est notamment :",
          "options": [
            "D'émettre les lois du pays",
            "D'octroyer d'importants crédits qui contribuent au développement des entreprises",
            "De fixer les salaires des ouvriers",
            "D'interdire la concurrence"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Selon la leçon, la banque mobilise et gère les fonds des clients et octroie des crédits qui contribuent au développement des entreprises."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p03_q4",
          "type": "mcq",
          "prompt": "Les banques d'affaires se caractérisent par :",
          "options": [
            "L'émission des pièces de monnaie",
            "La collecte des fonds des petits épargnants",
            "Les investissements à long et moyen terme dans les grandes entreprises",
            "La vente des produits tropicaux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon définit les banques d'affaires par leurs investissements à long et moyen terme dans les grandes entreprises, avec l'exemple de la banque Rothschild."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p03_q5",
          "type": "mcq",
          "prompt": "Le billet de banque est :",
          "options": [
            "Une monnaie scripturale",
            "Une monnaie métallique",
            "Une obligation",
            "Une monnaie fiduciaire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le billet de banque relève de la monnaie fiduciaire ; la monnaie scripturale est celle des écritures, comme le chèque."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p03_q6",
          "type": "mcq",
          "prompt": "Le Crédit lyonnais, créé en 1863, est cité comme exemple de :",
          "options": [
            "Banque d'émission",
            "Banque de dépôt",
            "Banque d'affaires",
            "Bourse des valeurs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le Crédit lyonnais et la Société Générale sont les exemples de banques de dépôt donnés par la leçon."
        }
      ]
    },
    {
      "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p04",
      "order": 4,
      "title": "Les sociétés anonymes et la bourse des valeurs",
      "summary": "Expliquer la société par actions, le dividende, les obligations et le marché boursier.",
      "conceptExplanation": "La société anonyme, ou société par actions, est une entreprise dont le capital appartient à plusieurs personnes. Le capital qui a servi à la création de l'entreprise est divisé en parts égales appelées actions. Le détenteur d'une ou de plusieurs actions est appelé actionnaire. À la fin de l'année, chaque actionnaire reçoit une part du bénéfice appelée dividende, proportionnelle à la valeur de ses actions.\nPour accroître son capital, la société peut solliciter des emprunts appelés obligations auprès du public. Les acheteurs de ces obligations sont des obligataires : ils reçoivent un bénéfice fixe quelle que soit la situation de l'entreprise. Ces actions et obligations sont appelés titres boursiers.\nLa bourse des valeurs est un marché financier où l'on vend et achète des marchandises, des actions et des obligations. Les prix de ces titres sont fixés selon la loi de l'offre et de la demande, comme dans les bourses de Londres, de Tokyo et de New York, à Wall Street.",
      "keyRule": "Action égale part du capital et dividende variable ; obligation égale emprunt et bénéfice fixe ; la bourse fixe les prix des titres selon l'offre et la demande.",
      "formulas": [],
      "workedExample": {
        "title": "Distinguer actionnaire et obligataire",
        "statement": "Deux personnes placent leur argent dans une société anonyme : l'une achète des actions, l'autre des obligations. Qui est actionnaire, qui est obligataire, et que reçoit chacun ?",
        "methodSteps": [
          "L'acheteur d'actions est un actionnaire : le capital de la société est divisé en parts égales appelées actions.",
          "L'actionnaire reçoit à la fin de l'année un dividende, part du bénéfice proportionnelle à la valeur de ses actions.",
          "L'acheteur d'obligations est un obligataire : il prête à la société et reçoit un bénéfice fixe quelle que soit la situation de l'entreprise."
        ],
        "conclusion": "Actionnaire et obligataire ne reçoivent pas la même rémunération : dividende proportionnel pour l'un, bénéfice fixe pour l'autre."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La société anonyme",
          "stepTheme": "La société anonyme",
          "stepBadge": "La société anonyme",
          "paragraphText": "• Société anonyme ou société par actions : entreprise dont le capital appartient à plusieurs personnes.\nLe capital est divisé en parts égales appelées actions, et le détenteur d'actions est un actionnaire.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p04_q1",
            "type": "mcq",
            "prompt": "Dans une société anonyme, le capital est :",
            "options": [
              "Détenu par l'État seul",
              "Divisé en parts égales appelées actions",
              "Réservé aux seuls ouvriers",
              "Interdit à la vente"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon définit la société anonyme comme une entreprise dont le capital, divisé en actions, appartient à plusieurs personnes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le dividende de l'actionnaire",
          "stepTheme": "Le dividende de l'actionnaire",
          "stepBadge": "Le dividende de l'actionnaire",
          "paragraphText": "• Dividende : part du bénéfice que chaque actionnaire reçoit à la fin de l'année.\nIl est proportionnel à la valeur des actions détenues.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p04_q2",
            "type": "mcq",
            "prompt": "Le dividende reçu par l'actionnaire est :",
            "options": [
              "Fixe quelle que soit la situation de l'entreprise",
              "Proportionnel à la valeur de ses actions",
              "Égal à son salaire",
              "Versé uniquement par la banque"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Selon la leçon, chaque actionnaire reçoit à la fin de l'année un dividende proportionnel à la valeur de ses actions."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les obligations et les obligataires",
          "stepTheme": "Les obligations et les obligataires",
          "stepBadge": "Les obligations et les obligataires",
          "paragraphText": "Pour accroître son capital, la société peut solliciter des emprunts appelés obligations auprès du public.\nLes acheteurs de ces obligations, les obligataires, reçoivent un bénéfice fixe quelle que soit la situation de l'entreprise. Actions et obligations sont des titres boursiers.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p04_q3",
            "type": "mcq",
            "prompt": "Les obligataires reçoivent :",
            "options": [
              "Un dividende proportionnel à leurs actions",
              "La direction de l'entreprise",
              "Un bénéfice fixe quelle que soit la situation de l'entreprise",
              "Des pièces de monnaie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la propriété des obligations rappelée par la leçon : un bénéfice fixe, contrairement au dividende de l'actionnaire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La bourse des valeurs",
          "stepTheme": "La bourse des valeurs",
          "stepBadge": "La bourse des valeurs",
          "paragraphText": "• Bourse des valeurs : marché financier où l'on vend et achète des marchandises, des actions et des obligations.\nLes prix des titres y sont fixés selon la loi de l'offre et de la demande.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p04_q4",
            "type": "mcq",
            "prompt": "La bourse des valeurs est :",
            "options": [
              "Une banque de dépôt",
              "Un marché financier où l'on vend et achète des actions et des obligations",
              "Une entreprise industrielle",
              "Un impôt sur les sociétés"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon définit la bourse des valeurs comme un marché financier ; exemples : Londres, Tokyo et New York, à Wall Street."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre actionnaire et obligataire",
          "stepTheme": "Confondre actionnaire et obligataire",
          "stepBadge": "Confondre actionnaire et obligataire",
          "paragraphText": "Piège tiré des exercices de la leçon : l'affirmation « le détenteur d'une obligation est appelé un actionnaire » est fausse.\nLe détenteur d'une obligation est un obligataire ; l'actionnaire détient des actions.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p04_q5",
            "type": "mcq",
            "prompt": "Le détenteur d'une obligation est appelé :",
            "options": [
              "Actionnaire",
              "Dividende",
              "Obligataire",
              "Capitaliste mercantile"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'obligataire prête à la société en achetant ses obligations ; l'actionnaire détient une part du capital sous forme d'actions."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Wall Street à New York",
          "stepTheme": "Wall Street à New York",
          "stepBadge": "Wall Street à New York",
          "paragraphText": "Exemple : la leçon cite les bourses des valeurs de Londres, de Tokyo et de New York, à Wall Street.\nC'est là que les prix des titres sont fixés selon la loi de l'offre et de la demande.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p04_q6",
            "type": "mcq",
            "prompt": "Selon la leçon, les prix des titres boursiers sont fixés :",
            "options": [
              "Par le gouvernement seul",
              "Par les syndicats ouvriers",
              "Une fois par an, à la création de la société",
              "Selon la loi de l'offre et de la demande"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon précise que les prix des actions et des obligations sont fixés selon la loi de l'offre et de la demande."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p04_q1",
          "type": "mcq",
          "prompt": "Dans une société anonyme, le capital est :",
          "options": [
            "Détenu par l'État seul",
            "Divisé en parts égales appelées actions",
            "Réservé aux seuls ouvriers",
            "Interdit à la vente"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon définit la société anonyme comme une entreprise dont le capital, divisé en actions, appartient à plusieurs personnes."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p04_q2",
          "type": "mcq",
          "prompt": "Le dividende reçu par l'actionnaire est :",
          "options": [
            "Fixe quelle que soit la situation de l'entreprise",
            "Proportionnel à la valeur de ses actions",
            "Égal à son salaire",
            "Versé uniquement par la banque"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Selon la leçon, chaque actionnaire reçoit à la fin de l'année un dividende proportionnel à la valeur de ses actions."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p04_q3",
          "type": "mcq",
          "prompt": "Les obligataires reçoivent :",
          "options": [
            "Un dividende proportionnel à leurs actions",
            "La direction de l'entreprise",
            "Un bénéfice fixe quelle que soit la situation de l'entreprise",
            "Des pièces de monnaie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la propriété des obligations rappelée par la leçon : un bénéfice fixe, contrairement au dividende de l'actionnaire."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p04_q4",
          "type": "mcq",
          "prompt": "La bourse des valeurs est :",
          "options": [
            "Une banque de dépôt",
            "Un marché financier où l'on vend et achète des actions et des obligations",
            "Une entreprise industrielle",
            "Un impôt sur les sociétés"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon définit la bourse des valeurs comme un marché financier ; exemples : Londres, Tokyo et New York, à Wall Street."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p04_q5",
          "type": "mcq",
          "prompt": "Le détenteur d'une obligation est appelé :",
          "options": [
            "Actionnaire",
            "Dividende",
            "Obligataire",
            "Capitaliste mercantile"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'obligataire prête à la société en achetant ses obligations ; l'actionnaire détient une part du capital sous forme d'actions."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p04_q6",
          "type": "mcq",
          "prompt": "Selon la leçon, les prix des titres boursiers sont fixés :",
          "options": [
            "Par le gouvernement seul",
            "Par les syndicats ouvriers",
            "Une fois par an, à la création de la société",
            "Selon la loi de l'offre et de la demande"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon précise que les prix des actions et des obligations sont fixés selon la loi de l'offre et de la demande."
        }
      ]
    },
    {
      "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p05",
      "order": 5,
      "title": "Le fonctionnement : concentrations et organisation du travail",
      "summary": "Décrire les trois formes de concentration des entreprises et l'amélioration des moyens de production.",
      "conceptExplanation": "La forte concurrence pousse les entreprises à la concentration. La concentration horizontale désigne l'entente entre les industries d'un même secteur d'activité ; on parle aussi de cartels, comme le regroupement des entreprises minières, ce qui stabilise le marché et maintient des prix rémunérateurs. La concentration verticale se rapporte à la fusion d'entreprises qui ont des activités complémentaires : ce sont les trusts, qui visent à éliminer la concurrence et à s'assurer un monopole de la production jusqu'à la commercialisation ; le plus célèbre fut la Standard Oil de Rockefeller, qui contrôlait tout le marché du pétrole. La concentration géographique est le regroupement des usines ou des entreprises à proximité des sources d'énergie ou de matières premières.\nLa rationalisation du travail, fondée sur l'élimination de tout ce qui peut réduire ou bloquer la productivité, marque le début de la croissance intensive. En 1903, l'ingénieur américain Taylor définit une nouvelle organisation qui consiste en la division du travail en plusieurs tâches complémentaires : c'est la taylorisation, ou travail à la chaîne. D'autres méthodes, comme la standardisation, qui permet de fabriquer des articles identiques en grandes séries et de réduire les prix de revient, et plus tard la robotisation, sont utilisées dans les entreprises industrielles.",
      "keyRule": "Cartels pour le même secteur, trusts pour les activités complémentaires, regroupement près des ressources : la concentration répond à la forte concurrence.",
      "formulas": [],
      "workedExample": {
        "title": "Reconnaître la Standard Oil de Rockefeller",
        "statement": "La Standard Oil de Rockefeller contrôlait tout le marché du pétrole, de la production jusqu'à la commercialisation. De quelle forme de concentration s'agit-il ?",
        "methodSteps": [
          "La Standard Oil réunit des entreprises aux activités complémentaires : production, transformation et commercialisation.",
          "La fusion d'entreprises complémentaires forme des trusts.",
          "Il s'agit donc d'une concentration verticale, qui vise un monopole."
        ],
        "conclusion": "La Standard Oil est l'exemple de concentration verticale donné par la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La concentration horizontale et les cartels",
          "stepTheme": "La concentration horizontale et les cartels",
          "stepBadge": "La concentration horizontale et les cartels",
          "paragraphText": "• Concentration horizontale : entente entre les industries d'un même secteur d'activité.\nOn parle aussi de cartels, comme le regroupement des entreprises minières ; l'avantage est de stabiliser le marché et de maintenir des prix rémunérateurs.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p05_q1",
            "type": "mcq",
            "prompt": "La concentration horizontale désigne :",
            "options": [
              "La fusion d'entreprises aux activités complémentaires",
              "L'entente entre les industries d'un même secteur d'activité",
              "Le regroupement des usines près des matières premières",
              "La division du travail en tâches"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Selon la leçon, la concentration horizontale est l'entente entre industries du même secteur : ce sont les cartels."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La concentration verticale et les trusts",
          "stepTheme": "La concentration verticale et les trusts",
          "stepBadge": "La concentration verticale et les trusts",
          "paragraphText": "• Concentration verticale : fusion d'entreprises qui ont des activités complémentaires.\nCe sont les trusts, qui visent à éliminer la concurrence et à s'assurer un monopole de la production jusqu'à la commercialisation en passant par la transformation.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p05_q2",
            "type": "mcq",
            "prompt": "Les trusts correspondent à :",
            "options": [
              "La concentration géographique",
              "La concentration horizontale",
              "La concentration verticale d'entreprises aux activités complémentaires",
              "La standardisation des produits"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon rattache les trusts à la concentration verticale : des entreprises complémentaires fusionnent pour contrôler la production jusqu'à la commercialisation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La concentration géographique",
          "stepTheme": "La concentration géographique",
          "stepBadge": "La concentration géographique",
          "paragraphText": "• Concentration géographique : regroupement des usines ou des entreprises à proximité des sources d'énergie ou de matières premières.\nLa leçon cite en exemple les pays noirs en Angleterre, régions de mines de charbon.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p05_q3",
            "type": "mcq",
            "prompt": "La concentration géographique consiste à regrouper les entreprises :",
            "options": [
              "Dans les capitales uniquement",
              "Près des sources d'énergie ou de matières premières",
              "Dans un même secteur d'activité",
              "Autour des bourses de valeurs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition de la leçon : les usines s'installent à proximité des sources d'énergie ou de matières premières."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La taylorisation selon Taylor",
          "stepTheme": "La taylorisation selon Taylor",
          "stepBadge": "La taylorisation selon Taylor",
          "paragraphText": "En 1903, l'ingénieur américain Taylor, partant de l'observation du travail de l'ouvrier, définit une nouvelle organisation du travail.\nElle consiste en la division du travail en plusieurs tâches complémentaires : c'est la taylorisation, ou travail à la chaîne, appliquée dans les industries alimentaires de Chicago puis dans l'industrie automobile.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p05_q4",
            "type": "mcq",
            "prompt": "La taylorisation, définie par Taylor en 1903, consiste en :",
            "options": [
              "La fabrication d'articles identiques en grandes séries",
              "La fusion des entreprises complémentaires",
              "La division du travail en plusieurs tâches complémentaires",
              "L'entente entre entreprises du même secteur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon définit la taylorisation comme la division du travail en plusieurs tâches complémentaires : c'est le travail à la chaîne."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre taylorisation et standardisation",
          "stepTheme": "Confondre taylorisation et standardisation",
          "stepBadge": "Confondre taylorisation et standardisation",
          "paragraphText": "Piège : la standardisation n'est pas la division du travail.\n• Taylorisation : division du travail en tâches complémentaires.\n• Standardisation : système permettant de fabriquer des articles identiques en grandes séries et de réduire les prix de revient.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p05_q5",
            "type": "mcq",
            "prompt": "La standardisation permet :",
            "options": [
              "De diviser le travail en tâches complémentaires",
              "De fabriquer des articles identiques en grandes séries et de réduire les prix de revient",
              "De créer des cartels",
              "D'émettre des obligations"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Selon la leçon, la standardisation fabrique des articles identiques en grandes séries, ce qui réduit les prix de revient ; la division du travail relève de la taylorisation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La Standard Oil de Rockefeller",
          "stepTheme": "La Standard Oil de Rockefeller",
          "stepBadge": "La Standard Oil de Rockefeller",
          "paragraphText": "Exemple célèbre donné par la leçon : la Standard Oil de Rockefeller contrôlait tout le marché du pétrole.\nC'est un trust, forme de concentration verticale cherchant le monopole de la production jusqu'à la commercialisation.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p05_q6",
            "type": "mcq",
            "prompt": "La Standard Oil de Rockefeller est citée comme :",
            "options": [
              "Un cartel d'entreprises minières",
              "Un trust qui contrôlait tout le marché du pétrole",
              "Une banque d'affaires anglaise",
              "Une société de petits épargnants"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon présente la Standard Oil comme le plus célèbre des trusts, contrôlant tout le marché du pétrole."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p05_q1",
          "type": "mcq",
          "prompt": "La concentration horizontale désigne :",
          "options": [
            "La fusion d'entreprises aux activités complémentaires",
            "L'entente entre les industries d'un même secteur d'activité",
            "Le regroupement des usines près des matières premières",
            "La division du travail en tâches"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Selon la leçon, la concentration horizontale est l'entente entre industries du même secteur : ce sont les cartels."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p05_q2",
          "type": "mcq",
          "prompt": "Les trusts correspondent à :",
          "options": [
            "La concentration géographique",
            "La concentration horizontale",
            "La concentration verticale d'entreprises aux activités complémentaires",
            "La standardisation des produits"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon rattache les trusts à la concentration verticale : des entreprises complémentaires fusionnent pour contrôler la production jusqu'à la commercialisation."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p05_q3",
          "type": "mcq",
          "prompt": "La concentration géographique consiste à regrouper les entreprises :",
          "options": [
            "Dans les capitales uniquement",
            "Près des sources d'énergie ou de matières premières",
            "Dans un même secteur d'activité",
            "Autour des bourses de valeurs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition de la leçon : les usines s'installent à proximité des sources d'énergie ou de matières premières."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p05_q4",
          "type": "mcq",
          "prompt": "La taylorisation, définie par Taylor en 1903, consiste en :",
          "options": [
            "La fabrication d'articles identiques en grandes séries",
            "La fusion des entreprises complémentaires",
            "La division du travail en plusieurs tâches complémentaires",
            "L'entente entre entreprises du même secteur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon définit la taylorisation comme la division du travail en plusieurs tâches complémentaires : c'est le travail à la chaîne."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p05_q5",
          "type": "mcq",
          "prompt": "La standardisation permet :",
          "options": [
            "De diviser le travail en tâches complémentaires",
            "De fabriquer des articles identiques en grandes séries et de réduire les prix de revient",
            "De créer des cartels",
            "D'émettre des obligations"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Selon la leçon, la standardisation fabrique des articles identiques en grandes séries, ce qui réduit les prix de revient ; la division du travail relève de la taylorisation."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p05_q6",
          "type": "mcq",
          "prompt": "La Standard Oil de Rockefeller est citée comme :",
          "options": [
            "Un cartel d'entreprises minières",
            "Un trust qui contrôlait tout le marché du pétrole",
            "Une banque d'affaires anglaise",
            "Une société de petits épargnants"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon présente la Standard Oil comme le plus célèbre des trusts, contrôlant tout le marché du pétrole."
        }
      ]
    },
    {
      "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p06",
      "order": 6,
      "title": "Les conséquences du capitalisme",
      "summary": "Apprécier les conséquences du capitalisme : division en deux classes, naissance du socialisme et crises économiques.",
      "conceptExplanation": "Le capitalisme favorise l'émergence de deux classes sociales opposées. La bourgeoisie est composée des riches propriétaires, détenteurs de capitaux ou patrons d'entreprises ; ils sont minoritaires et vivent dans le confort en exploitant les plus faibles. Le prolétariat, ce sont les ouvriers, la classe sociale des pauvres : ils sont les plus nombreux, sont exploités par les riches et ne reçoivent rien des bénéfices de la croissance ; leurs conditions de travail et de vie sont extrêmement difficiles, avec de faibles salaires, de longues heures de travail entre 15 et 16 heures, des logements surpeuplés et insalubres, une nourriture médiocre et de nombreuses maladies.\nSur le plan politique, les inégalités sociales suscitent la naissance du socialisme, doctrine qui cherche à supprimer les inégalités sociales. Cette idée, lancée par l'Anglais Robert Owen et les Français Pierre Joseph Proudhon et Saint-Simon, prend de l'ampleur avec Karl Marx. À l'appel de Karl Marx, « Prolétaires de tous les pays, unissez-vous », les prolétaires engagent la lutte au sein des syndicats et obtiennent notamment la réduction des heures de travail à 8 heures par jour, l'augmentation des salaires, le droit d'association et de grève, les congés payés et la suppression du travail des enfants.\nSur le plan économique, la vie dans le système capitaliste connaît des périodes de prospérité et des périodes de crises, comme les crises de 1815, de 1873 et de 1929, marquées par la surproduction, la stagnation et le chômage.",
      "keyRule": "Deux classes opposées, le socialisme et les luttes syndicales en réaction politique, et une alternance de prospérité et de crises sur le plan économique.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser l'extrait du Manifeste de Karl Marx",
        "statement": "Dans la situation d'évaluation, un conférencier lit un extrait du Manifeste du Parti communiste de Karl Marx : la société se divise en deux classes diamétralement opposées, la bourgeoisie et le prolétariat, et le développement de l'industrie accroît le nombre des prolétaires et leur force.",
        "methodSteps": [
          "Le texte parle de la division de la société capitaliste en deux classes opposées.",
          "La bourgeoisie détient les moyens de production ; le prolétariat regroupe les ouvriers exploités.",
          "En se concentrant en masses importantes, les prolétaires prennent conscience de leur force et s'organisent pour lutter, notamment dans les syndicats."
        ],
        "conclusion": "L'extrait illustre la conséquence sociale majeure du capitalisme et la réaction politique des ouvriers."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Bourgeoisie et prolétariat",
          "stepTheme": "Bourgeoisie et prolétariat",
          "stepBadge": "Bourgeoisie et prolétariat",
          "paragraphText": "• Bourgeoisie : riches propriétaires, détenteurs de capitaux ou patrons d'entreprises, minoritaires.\n• Prolétariat : les ouvriers, classe sociale des pauvres, les plus nombreux, exploités par les riches.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p06_q1",
            "type": "mcq",
            "prompt": "Le prolétariat désigne :",
            "options": [
              "Les riches propriétaires d'entreprises",
              "Les détenteurs de capitaux",
              "Les ouvriers, classe sociale des pauvres et les plus nombreux",
              "Les actionnaires des sociétés anonymes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon oppose la bourgeoisie, minoritaire et riche, au prolétariat, la classe ouvrière pauvre et la plus nombreuse."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les conditions de vie ouvrières",
          "stepTheme": "Les conditions de vie ouvrières",
          "stepBadge": "Les conditions de vie ouvrières",
          "paragraphText": "La classe ouvrière connaît des conditions de travail et de vie extrêmement difficiles.\nLa leçon cite la faiblesse des salaires, de longues heures de travail entre 15 et 16 heures, des logements surpeuplés et insalubres, une nourriture médiocre, de nombreuses maladies et l'alcoolisme.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p06_q2",
            "type": "mcq",
            "prompt": "Selon la leçon, les journées de travail des ouvriers duraient :",
            "options": [
              "8 heures",
              "Entre 15 et 16 heures",
              "10 heures",
              "6 heures"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon indique de longues heures de travail, entre 15 et 16 heures, parmi les conditions extrêmement difficiles de la classe ouvrière."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le socialisme, réaction politique",
          "stepTheme": "Le socialisme, réaction politique",
          "stepBadge": "Le socialisme, réaction politique",
          "paragraphText": "• Socialisme : doctrine qui cherche à supprimer les inégalités sociales.\nElle préconise la disparition de la propriété privée des moyens de production et l'appropriation de ceux-ci par la collectivité. L'idée est lancée par Robert Owen, Pierre Joseph Proudhon et Saint-Simon, puis prend de l'ampleur avec Karl Marx.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p06_q3",
            "type": "mcq",
            "prompt": "Le socialisme préconise :",
            "options": [
              "Le renforcement de la propriété privée",
              "La suppression de la concurrence par les cartels",
              "La disparition de la propriété privée des moyens de production et leur appropriation par la collectivité",
              "L'augmentation des heures de travail"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition donnée par la leçon : le socialisme veut supprimer les inégalités en supprimant la propriété privée des moyens de production."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Les luttes syndicales et leurs acquis",
          "stepTheme": "Les luttes syndicales et leurs acquis",
          "stepBadge": "Les luttes syndicales et leurs acquis",
          "paragraphText": "À l'appel de Karl Marx, « Prolétaires de tous les pays, unissez-vous », les prolétaires engagent la lutte au sein des syndicats.\nGrâce à leurs luttes, les ouvriers obtiennent la réduction des heures de travail à 8 heures par jour, l'augmentation des salaires, le droit d'association et de grève, les congés payés, la suppression du travail des enfants et un jour de fête du travail, le 1er Mai.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p06_q4",
            "type": "mcq",
            "prompt": "Parmi les acquis des luttes ouvrières cités par la leçon, on trouve :",
            "options": [
              "La création des bourses de valeurs",
              "La réduction des heures de travail à 8 heures par jour et les congés payés",
              "La formation des trusts",
              "La baisse des salaires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon liste ces résultats satisfaisants des luttes syndicales : journée de 8 heures, congés payés, droit de grève, fin du travail des enfants."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Attribuer les crises au mauvais type de conséquence",
          "stepTheme": "Attribuer les crises au mauvais type de conséquence",
          "stepBadge": "Attribuer les crises au mauvais type de conséquence",
          "paragraphText": "Piège : les crises de surproduction sont une conséquence économique, pas politique.\nLa naissance du socialisme et du syndicalisme relève des conséquences politiques ; la division de la société en classes est une conséquence sociale ; les crises de 1815, de 1873 et de 1929 sont économiques.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p06_q5",
            "type": "mcq",
            "prompt": "Les crises de 1815, de 1873 et de 1929 sont des conséquences :",
            "options": [
              "Sociales",
              "Politiques",
              "Économiques, marquées par la surproduction, la stagnation et le chômage",
              "Religieuses"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Selon la leçon, la vie économique capitaliste alterne prospérité et crises : ces dates illustrent les conséquences économiques."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'appel de Karl Marx aux prolétaires",
          "stepTheme": "L'appel de Karl Marx aux prolétaires",
          "stepBadge": "L'appel de Karl Marx aux prolétaires",
          "paragraphText": "Exemple : le document de la leçon reproduit le Manifeste du Parti communiste de 1848 de Karl Marx.\nIl se termine par l'appel : « Prolétaires de tous les pays, unissez-vous », qui pousse les ouvriers à s'organiser et à lutter ensemble.",
          "exercise": {
            "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p06_q6",
            "type": "mcq",
            "prompt": "L'appel « Prolétaires de tous les pays, unissez-vous » est lancé par :",
            "options": [
              "Robert Owen",
              "Saint-Simon",
              "Rockefeller",
              "Karl Marx"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est l'appel de Karl Marx, cité dans la leçon et dans l'extrait du Manifeste du Parti communiste de 1848."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p06_q1",
          "type": "mcq",
          "prompt": "Le prolétariat désigne :",
          "options": [
            "Les riches propriétaires d'entreprises",
            "Les détenteurs de capitaux",
            "Les ouvriers, classe sociale des pauvres et les plus nombreux",
            "Les actionnaires des sociétés anonymes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon oppose la bourgeoisie, minoritaire et riche, au prolétariat, la classe ouvrière pauvre et la plus nombreuse."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p06_q2",
          "type": "mcq",
          "prompt": "Selon la leçon, les journées de travail des ouvriers duraient :",
          "options": [
            "8 heures",
            "Entre 15 et 16 heures",
            "10 heures",
            "6 heures"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon indique de longues heures de travail, entre 15 et 16 heures, parmi les conditions extrêmement difficiles de la classe ouvrière."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p06_q3",
          "type": "mcq",
          "prompt": "Le socialisme préconise :",
          "options": [
            "Le renforcement de la propriété privée",
            "La suppression de la concurrence par les cartels",
            "La disparition de la propriété privée des moyens de production et leur appropriation par la collectivité",
            "L'augmentation des heures de travail"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition donnée par la leçon : le socialisme veut supprimer les inégalités en supprimant la propriété privée des moyens de production."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p06_q4",
          "type": "mcq",
          "prompt": "Parmi les acquis des luttes ouvrières cités par la leçon, on trouve :",
          "options": [
            "La création des bourses de valeurs",
            "La réduction des heures de travail à 8 heures par jour et les congés payés",
            "La formation des trusts",
            "La baisse des salaires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon liste ces résultats satisfaisants des luttes syndicales : journée de 8 heures, congés payés, droit de grève, fin du travail des enfants."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p06_q5",
          "type": "mcq",
          "prompt": "Les crises de 1815, de 1873 et de 1929 sont des conséquences :",
          "options": [
            "Sociales",
            "Politiques",
            "Économiques, marquées par la surproduction, la stagnation et le chômage",
            "Religieuses"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Selon la leçon, la vie économique capitaliste alterne prospérité et crises : ces dates illustrent les conséquences économiques."
        },
        {
          "id": "premiere_hg_histoire_t1_l01_essor_capitalisme_p06_q6",
          "type": "mcq",
          "prompt": "L'appel « Prolétaires de tous les pays, unissez-vous » est lancé par :",
          "options": [
            "Robert Owen",
            "Saint-Simon",
            "Rockefeller",
            "Karl Marx"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est l'appel de Karl Marx, cité dans la leçon et dans l'extrait du Manifeste du Parti communiste de 1848."
        }
      ]
    }
  ]
};
