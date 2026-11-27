import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « L'introduction du commentaire de texte philosophique » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=3721
export const PHILO_1ERE_L02_INTRODUCTION_COMMENTAIRE: CurriculumChapter = {
  "id": "premiere_philo_methodologie_l02_introduction_commentaire",
  "subjectId": "philosophie",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 2,
  "title": "Leçon 2 : L'introduction du commentaire de texte philosophique",
  "summary": "La leçon apprend à rédiger l’introduction du commentaire de texte philosophique : présenter le texte à partir du thème, du problème, de la thèse et, éventuellement, de la structure logique.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=3721",
  "points": [
    {
      "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01",
      "order": 1,
      "title": "Définir l’introduction du commentaire",
      "summary": "Comprendre que l’introduction est la partie du devoir où l’on présente le texte.",
      "conceptExplanation": "L’introduction du commentaire de texte philosophique est la partie du devoir où l’on présente le texte.\nElle s’élabore à partir de certains éléments de la problématique du texte.\nDans la situation d’apprentissage, à la suite du cours sur la méthode de lecture de texte, les élèves de la classe de Première A1 du lycée municipal 1 de Bonoua sont amenés à rédiger l’introduction du commentaire de texte philosophique et s’informent sur ses éléments constitutifs, la manière de les agencer et de la construire.\nL’activité d’application de la leçon précise, parmi des propositions, que l’introduction est la première partie du devoir qui annonce le thème du texte, pose le problème et expose la thèse de l’auteur.",
      "keyRule": "L’introduction présente le texte : elle ne le commente pas encore et ne prend pas position.",
      "formulas": [],
      "workedExample": {
        "title": "Choisir la bonne définition de l’introduction",
        "statement": "Parmi trois propositions de l’activité d’application, laquelle définit correctement l’introduction du commentaire de texte philosophique ?",
        "methodSteps": [
          "Écarter la proposition qui en fait la dernière étape de la méthode consistant à prendre une position personnelle : c’est le rôle de la conclusion.",
          "Écarter la proposition qui en fait l’étape qui pose le problème et en donne la solution.",
          "Retenir la proposition qui en fait la première partie du devoir annonçant le thème, posant le problème et exposant la thèse de l’auteur."
        ],
        "conclusion": "L’introduction est la première partie du devoir : thème annoncé, problème posé, thèse exposée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Présenter le texte",
          "stepTheme": "Présenter le texte",
          "stepBadge": "Présenter le texte",
          "paragraphText": "• Introduction du commentaire de texte philosophique : partie du devoir où l’on présente le texte.\nElle s’élabore à partir de certains éléments de la problématique du texte.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q1",
            "type": "mcq",
            "prompt": "L’introduction du commentaire de texte philosophique est :",
            "options": [
              "La dernière partie du devoir",
              "La partie du devoir où l’on présente le texte",
              "La critique externe du texte",
              "La prise de position personnelle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition donnée dans la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Élaborée depuis la problématique",
          "stepTheme": "Élaborée depuis la problématique",
          "stepBadge": "Élaborée depuis la problématique",
          "paragraphText": "L’introduction s’élabore à partir de certains éléments de la problématique du texte.\nElle suppose donc que la problématique a été dégagée au préalable, lors de la lecture du texte.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q2",
            "type": "mcq",
            "prompt": "L’introduction s’élabore à partir :",
            "options": [
              "De l’opinion personnelle du candidat",
              "Du bilan de la discussion",
              "De certains éléments de la problématique du texte",
              "Des seuls connecteurs logiques"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon rattache l’introduction à certains éléments de la problématique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Première partie du devoir",
          "stepTheme": "Première partie du devoir",
          "stepBadge": "Première partie du devoir",
          "paragraphText": "Dans l’activité d’application, la bonne proposition définit l’introduction comme la première partie du devoir.\nElle annonce le thème du texte, pose le problème et expose la thèse de l’auteur.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q3",
            "type": "mcq",
            "prompt": "Selon l’activité d’application, l’introduction est la première partie du devoir qui :",
            "options": [
              "Prend une position personnelle",
              "Donne la solution du problème",
              "Évalue l’intérêt du texte",
              "Annonce le thème, pose le problème et expose la thèse de l’auteur"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Thème, problème et thèse : c’est la formulation retenue dans l’activité."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Confondre introduction et conclusion",
          "stepTheme": "Confondre introduction et conclusion",
          "stepBadge": "Confondre introduction et conclusion",
          "paragraphText": "Piège : définir l’introduction comme la dernière étape consistant à prendre une position personnelle.\nPrendre position relève de la conclusion du commentaire, non de son introduction.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q4",
            "type": "mcq",
            "prompt": "Quelle définition est fausse pour l’introduction ?",
            "options": [
              "La dernière étape de la méthode qui consiste à prendre une position personnelle",
              "La partie du devoir où l’on présente le texte",
              "La première partie du devoir",
              "Un texte élaboré depuis la problématique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La prise de position personnelle définit la conclusion, pas l’introduction."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La situation de Bonoua",
          "stepTheme": "La situation de Bonoua",
          "stepBadge": "La situation de Bonoua",
          "paragraphText": "Exemple : les élèves de Première A1 du lycée municipal 1 de Bonoua, après le cours sur la méthode de lecture de texte.\nIls s’informent sur les éléments constitutifs de l’introduction, la manière de les agencer et de construire celle-ci.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q5",
            "type": "mcq",
            "prompt": "Dans la situation d’apprentissage, les élèves s’informent sur :",
            "options": [
              "La conclusion du commentaire uniquement",
              "Les éléments constitutifs de l’introduction, leur agencement et sa construction",
              "La dissertation philosophique",
              "Les connecteurs logiques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Éléments constitutifs, agencement et construction : les trois objets de leur recherche."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q1",
          "type": "mcq",
          "prompt": "L’introduction du commentaire de texte philosophique est :",
          "options": [
            "La dernière partie du devoir",
            "La partie du devoir où l’on présente le texte",
            "La critique externe du texte",
            "La prise de position personnelle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition donnée dans la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q2",
          "type": "mcq",
          "prompt": "L’introduction s’élabore à partir :",
          "options": [
            "De l’opinion personnelle du candidat",
            "Du bilan de la discussion",
            "De certains éléments de la problématique du texte",
            "Des seuls connecteurs logiques"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon rattache l’introduction à certains éléments de la problématique."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q3",
          "type": "mcq",
          "prompt": "Selon l’activité d’application, l’introduction est la première partie du devoir qui :",
          "options": [
            "Prend une position personnelle",
            "Donne la solution du problème",
            "Évalue l’intérêt du texte",
            "Annonce le thème, pose le problème et expose la thèse de l’auteur"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Thème, problème et thèse : c’est la formulation retenue dans l’activité."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q4",
          "type": "mcq",
          "prompt": "Quelle définition est fausse pour l’introduction ?",
          "options": [
            "La dernière étape de la méthode qui consiste à prendre une position personnelle",
            "La partie du devoir où l’on présente le texte",
            "La première partie du devoir",
            "Un texte élaboré depuis la problématique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La prise de position personnelle définit la conclusion, pas l’introduction."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q5",
          "type": "mcq",
          "prompt": "Dans la situation d’apprentissage, les élèves s’informent sur :",
          "options": [
            "La conclusion du commentaire uniquement",
            "Les éléments constitutifs de l’introduction, leur agencement et sa construction",
            "La dissertation philosophique",
            "Les connecteurs logiques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Éléments constitutifs, agencement et construction : les trois objets de leur recherche."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02",
      "order": 2,
      "title": "Les éléments constitutifs de l’introduction",
      "summary": "Connaître les éléments nécessaires : thème, problème, thèse et, éventuellement, structure logique.",
      "conceptExplanation": "Les éléments constitutifs de l’introduction sont : le thème, le problème, la thèse et éventuellement la structure logique.\nDans l’activité d’application, il faut choisir, parmi les éléments de la problématique proposés — le problème, l’enjeu, l’intention, la thèse, l’antithèse, la structure du texte et le thème — ceux qui sont nécessaires à la rédaction de l’introduction. Les éléments nécessaires sont le problème, la thèse, la structure du texte et le thème.\nL’enjeu, l’intention et l’antithèse, bien qu’ils appartiennent à la problématique, ne font pas partie des éléments constitutifs de l’introduction énumérés par la leçon.",
      "keyRule": "Quatre éléments seulement : thème, problème, thèse, et structure logique à titre éventuel.",
      "formulas": [],
      "workedExample": {
        "title": "Sélectionner les éléments nécessaires (application)",
        "statement": "Parmi le problème, l’enjeu, l’intention, la thèse, l’antithèse, la structure du texte et le thème, choisis ceux qui sont nécessaires à la rédaction de l’introduction.",
        "methodSteps": [
          "Retenir le thème : il est annoncé dans l’introduction.",
          "Retenir le problème : il est posé dans l’introduction.",
          "Retenir la thèse : elle est exposée dans l’introduction.",
          "Retenir la structure du texte : elle figure éventuellement dans l’introduction.",
          "Écarter l’enjeu, l’intention et l’antithèse : ils ne sont pas énumérés parmi les éléments constitutifs."
        ],
        "conclusion": "Les éléments nécessaires sont le thème, le problème, la thèse et la structure."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Quatre éléments constitutifs",
          "stepTheme": "Quatre éléments constitutifs",
          "stepBadge": "Quatre éléments constitutifs",
          "paragraphText": "Les éléments constitutifs de l’introduction sont le thème, le problème, la thèse et éventuellement la structure logique.\nLa structure logique n’intervient qu’éventuellement, contrairement aux trois premiers éléments.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q1",
            "type": "mcq",
            "prompt": "Les éléments constitutifs de l’introduction sont :",
            "options": [
              "Le thème, le problème, la thèse et éventuellement la structure logique",
              "L’intention, l’enjeu et l’antithèse",
              "Le bilan et la prise de position",
              "Les idées principales et secondaires"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’énumération de la première partie de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La structure logique est éventuelle",
          "stepTheme": "La structure logique est éventuelle",
          "stepBadge": "La structure logique est éventuelle",
          "paragraphText": "La leçon écrit la structure logique avec la mention « éventuellement ».\nElle peut donc figurer dans l’introduction sans y être toujours indispensable, à la différence du thème, du problème et de la thèse.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q2",
            "type": "mcq",
            "prompt": "Dans l’introduction, la structure logique intervient :",
            "options": [
              "Toujours, comme le thème",
              "Éventuellement",
              "Jamais",
              "À la place de la thèse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le mot « éventuellement » est dans l’énumération de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Choisir parmi la problématique",
          "stepTheme": "Choisir parmi la problématique",
          "stepBadge": "Choisir parmi la problématique",
          "paragraphText": "Méthode de l’activité d’application : partir de la liste complète des items proposés, puis ne retenir que ceux qui sont nécessaires à l’introduction.\nSont proposés : problème, enjeu, intention, thèse, antithèse, structure du texte et thème.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q3",
            "type": "mcq",
            "prompt": "Parmi les items proposés, lesquels faut-il retenir pour l’introduction ?",
            "options": [
              "Enjeu, intention et antithèse",
              "Thème et enjeu seulement",
              "Problème, thèse, structure du texte et thème",
              "Tous les items sans exception"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les quatre éléments nécessaires, d’après les éléments constitutifs de la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Ajouter l’intention, l’enjeu, l’antithèse",
          "stepTheme": "Ajouter l’intention, l’enjeu, l’antithèse",
          "stepBadge": "Ajouter l’intention, l’enjeu, l’antithèse",
          "paragraphText": "Piège : croire que tous les items de la problématique entrent dans l’introduction.\nL’intention, l’enjeu et l’antithèse appartiennent à la problématique, mais la leçon ne les énumère pas parmi les éléments constitutifs de l’introduction.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q4",
            "type": "mcq",
            "prompt": "Quel item n’est pas énuméré parmi les éléments constitutifs de l’introduction ?",
            "options": [
              "Le thème",
              "Le problème",
              "La thèse",
              "L’antithèse"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’antithèse n’est pas dans l’énumération ; pas plus que l’intention et l’enjeu."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les éléments chez Epictète",
          "stepTheme": "Les éléments chez Epictète",
          "stepBadge": "Les éléments chez Epictète",
          "paragraphText": "Exemple du corrigé de la situation d’évaluation sur Epictète.\n• Thème : la tenue du philosophe et de son disciple\n• Problème : le philosophe et son disciple doivent-ils négliger leur tenue ?\n• Thèse : ils doivent prendre soin de leur corps et de leur âme\n• Structure : deux mouvements",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q5",
            "type": "mcq",
            "prompt": "Dans le corrigé sur Epictète, le thème annoncé est :",
            "options": [
              "La tenue du philosophe et de son disciple",
              "La valeur de la philosophie",
              "La beauté du corps",
              "La philosophie comme débat"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé ouvre par le texte d’Epictète qui parle de la tenue du philosophe et de son disciple."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q1",
          "type": "mcq",
          "prompt": "Les éléments constitutifs de l’introduction sont :",
          "options": [
            "Le thème, le problème, la thèse et éventuellement la structure logique",
            "L’intention, l’enjeu et l’antithèse",
            "Le bilan et la prise de position",
            "Les idées principales et secondaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’énumération de la première partie de la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q2",
          "type": "mcq",
          "prompt": "Dans l’introduction, la structure logique intervient :",
          "options": [
            "Toujours, comme le thème",
            "Éventuellement",
            "Jamais",
            "À la place de la thèse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le mot « éventuellement » est dans l’énumération de la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q3",
          "type": "mcq",
          "prompt": "Parmi les items proposés, lesquels faut-il retenir pour l’introduction ?",
          "options": [
            "Enjeu, intention et antithèse",
            "Thème et enjeu seulement",
            "Problème, thèse, structure du texte et thème",
            "Tous les items sans exception"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les quatre éléments nécessaires, d’après les éléments constitutifs de la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q4",
          "type": "mcq",
          "prompt": "Quel item n’est pas énuméré parmi les éléments constitutifs de l’introduction ?",
          "options": [
            "Le thème",
            "Le problème",
            "La thèse",
            "L’antithèse"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’antithèse n’est pas dans l’énumération ; pas plus que l’intention et l’enjeu."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q5",
          "type": "mcq",
          "prompt": "Dans le corrigé sur Epictète, le thème annoncé est :",
          "options": [
            "La tenue du philosophe et de son disciple",
            "La valeur de la philosophie",
            "La beauté du corps",
            "La philosophie comme débat"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé ouvre par le texte d’Epictète qui parle de la tenue du philosophe et de son disciple."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03",
      "order": 3,
      "title": "Construire l’introduction",
      "summary": "Agencer de manière cohérente les éléments constitutifs, avec une généralité possible en ouverture.",
      "conceptExplanation": "La construction de l’introduction du commentaire de texte philosophique consiste à agencer de manière cohérente les éléments constitutifs que sont le thème, le problème, la thèse et éventuellement la structure logique du texte.\nCet ordre n’est pas rigide. Néanmoins, il est possible de les faire précéder par une généralité.",
      "keyRule": "Agencement cohérent, ordre non rigide, généralité possible en tête : trois règles de construction.",
      "formulas": [],
      "workedExample": {
        "title": "Ordonner les éléments d’une introduction",
        "statement": "Un élève dispose du thème, du problème, de la thèse et de la structure logique d’un texte. Comment construit-il son introduction ?",
        "methodSteps": [
          "Il peut faire précéder les éléments par une généralité.",
          "Il agence ensuite les éléments de manière cohérente : thème, problème, thèse et éventuellement structure logique.",
          "Il ne traite pas cet ordre comme rigide : l’essentiel est la cohérence de l’agencement."
        ],
        "conclusion": "La construction est un agencement cohérent, non une récitation dans un ordre figé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un agencement cohérent",
          "stepTheme": "Un agencement cohérent",
          "stepBadge": "Un agencement cohérent",
          "paragraphText": "• Construction de l’introduction : agencer de manière cohérente les éléments constitutifs.\nCes éléments sont le thème, le problème, la thèse et éventuellement la structure logique du texte.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q1",
            "type": "mcq",
            "prompt": "Construire l’introduction consiste à :",
            "options": [
              "Agencer de manière cohérente ses éléments constitutifs",
              "Réciter la problématique entière",
              "Donner son opinion personnelle",
              "Résumer le développement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Agencer de manière cohérente : c’est la définition de la construction dans la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un ordre non rigide",
          "stepTheme": "Un ordre non rigide",
          "stepBadge": "Un ordre non rigide",
          "paragraphText": "La leçon précise que l’ordre thème, problème, thèse et structure logique n’est pas rigide.\nL’agencement doit rester cohérent, mais il n’est pas imposé de façon stricte.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q2",
            "type": "mcq",
            "prompt": "Selon la leçon, l’ordre des éléments dans l’introduction est :",
            "options": [
              "Absolument rigide",
              "Non rigide",
              "Interdit à modifier sous peine de hors-sujet",
              "Sans importance, même sans cohérence"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Cet ordre n’est pas rigide », dit la leçon, à condition de rester cohérent."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Faire précéder par une généralité",
          "stepTheme": "Faire précéder par une généralité",
          "stepBadge": "Faire précéder par une généralité",
          "paragraphText": "Méthode : il est possible de faire précéder les éléments constitutifs par une généralité.\nLa généralité ouvre l’introduction, avant l’annonce du thème et la suite des éléments.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q3",
            "type": "mcq",
            "prompt": "Les éléments de l’introduction peuvent être précédés par :",
            "options": [
              "Le bilan de la discussion",
              "Une prise de position personnelle",
              "Une généralité",
              "La critique externe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La généralité est la seule ouverture mentionnée dans la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Un agencement incohérent",
          "stepTheme": "Un agencement incohérent",
          "stepBadge": "Un agencement incohérent",
          "paragraphText": "Piège : juxtaposer les éléments sans lien, ou annoncer la thèse avant même de présenter le thème du texte sans cohérence.\nLa leçon exige un agencement cohérent, même si l’ordre n’est pas rigide.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q4",
            "type": "mcq",
            "prompt": "Quel défaut contredit la construction demandée ?",
            "options": [
              "Faire précéder les éléments par une généralité",
              "Agencer les éléments de manière cohérente",
              "Présenter le thème du texte",
              "Juxtaposer les éléments sans aucun lien cohérent"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Sans cohérence, il n’y a pas de construction au sens de la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L’ouverture du corrigé sur Epictète",
          "stepTheme": "L’ouverture du corrigé sur Epictète",
          "stepBadge": "L’ouverture du corrigé sur Epictète",
          "paragraphText": "Exemple : le corrigé de la situation d’évaluation commence directement par la présentation du texte.\n« Ce texte d’Epictète extrait de son œuvre Maximes et Pensées parle de la tenue du philosophe et de son disciple. » Le thème est ainsi annoncé dès la première phrase.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q5",
            "type": "mcq",
            "prompt": "Le corrigé sur Epictète commence par :",
            "options": [
              "Annoncer le thème : la tenue du philosophe et de son disciple",
              "Donner l’opinion personnelle du candidat",
              "Faire le bilan de la discussion",
              "Présenter l’antithèse de l’auteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La première phrase du corrigé annonce le thème du texte."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q1",
          "type": "mcq",
          "prompt": "Construire l’introduction consiste à :",
          "options": [
            "Agencer de manière cohérente ses éléments constitutifs",
            "Réciter la problématique entière",
            "Donner son opinion personnelle",
            "Résumer le développement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Agencer de manière cohérente : c’est la définition de la construction dans la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q2",
          "type": "mcq",
          "prompt": "Selon la leçon, l’ordre des éléments dans l’introduction est :",
          "options": [
            "Absolument rigide",
            "Non rigide",
            "Interdit à modifier sous peine de hors-sujet",
            "Sans importance, même sans cohérence"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Cet ordre n’est pas rigide », dit la leçon, à condition de rester cohérent."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q3",
          "type": "mcq",
          "prompt": "Les éléments de l’introduction peuvent être précédés par :",
          "options": [
            "Le bilan de la discussion",
            "Une prise de position personnelle",
            "Une généralité",
            "La critique externe"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La généralité est la seule ouverture mentionnée dans la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q4",
          "type": "mcq",
          "prompt": "Quel défaut contredit la construction demandée ?",
          "options": [
            "Faire précéder les éléments par une généralité",
            "Agencer les éléments de manière cohérente",
            "Présenter le thème du texte",
            "Juxtaposer les éléments sans aucun lien cohérent"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Sans cohérence, il n’y a pas de construction au sens de la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q5",
          "type": "mcq",
          "prompt": "Le corrigé sur Epictète commence par :",
          "options": [
            "Annoncer le thème : la tenue du philosophe et de son disciple",
            "Donner l’opinion personnelle du candidat",
            "Faire le bilan de la discussion",
            "Présenter l’antithèse de l’auteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La première phrase du corrigé annonce le thème du texte."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l02_introduction_commentaire_p04",
      "order": 4,
      "title": "Application : l’introduction du texte d’Epictète",
      "summary": "Lire le corrigé complet de l’introduction du texte d’Epictète sur la tenue du philosophe.",
      "conceptExplanation": "Dans la situation d’évaluation, le corrigé rédige l’introduction du texte d’Epictète, extrait de Maximes et Pensées.\nLe texte parle de la tenue du philosophe et de son disciple. À la question de savoir si le philosophe et son disciple doivent négliger leur tenue, l’auteur répond que ceux-ci doivent prendre soin de leur corps et de leur âme.\nLe texte s’articule autour de deux mouvements : dans le premier, il est question de la nécessité de la décence chez le philosophe et son disciple ; dans le second, l’auteur montre la primauté de la beauté intérieure sur la beauté du corps.",
      "keyRule": "Dans le corrigé, chaque élément constitutif trouve sa phrase : thème, problème en question, thèse, structure en deux mouvements.",
      "formulas": [],
      "workedExample": {
        "title": "Relire le corrigé complet de la situation d’évaluation",
        "statement": "Reconstitue l’introduction corrigée du texte d’Epictète en ordonnant ses éléments.",
        "methodSteps": [
          "Présentation et thème : ce texte d’Epictète, extrait de Maximes et Pensées, parle de la tenue du philosophe et de son disciple.",
          "Problème : le philosophe et son disciple doivent-ils négliger leur tenue ?",
          "Thèse : l’auteur répond que ceux-ci doivent prendre soin de leur corps et de leur âme.",
          "Structure : premier mouvement, la nécessité de la décence chez le philosophe et son disciple ; second mouvement, la primauté de la beauté intérieure sur la beauté du corps."
        ],
        "conclusion": "Le corrigé enchaîne les quatre éléments constitutifs en deux paragraphes cohérents."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Présenter l’auteur et l’œuvre",
          "stepTheme": "Présenter l’auteur et l’œuvre",
          "stepBadge": "Présenter l’auteur et l’œuvre",
          "paragraphText": "Le corrigé commence par présenter le texte : il est d’Epictète et extrait de son œuvre Maximes et Pensées.\nCette présentation introduit immédiatement l’annonce du thème.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p04_q1",
            "type": "mcq",
            "prompt": "Le texte du corrigé est extrait de l’œuvre d’Epictète intitulée :",
            "options": [
              "Pensées",
              "Maximes et Pensées",
              "Sur la philosophie africaine",
              "Éléments de philosophie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé cite Maximes et Pensées, édité par A. Silvaire en 1962."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le problème sous forme de question",
          "stepTheme": "Le problème sous forme de question",
          "stepBadge": "Le problème sous forme de question",
          "paragraphText": "Dans le corrigé, le problème est posé sous la forme d’une question.\n« Le philosophe et son disciple doivent-ils négliger leur tenue ? »",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p04_q2",
            "type": "mcq",
            "prompt": "Le problème posé dans le corrigé est :",
            "options": [
              "La philosophie est-elle un système ?",
              "Comment définir la beauté intérieure ?",
              "Le philosophe et son disciple doivent-ils négliger leur tenue ?",
              "Faut-il lire le texte plusieurs fois ?"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la question à laquelle l’auteur répond dans le texte."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La thèse exposée dans le corrigé",
          "stepTheme": "La thèse exposée dans le corrigé",
          "stepBadge": "La thèse exposée dans le corrigé",
          "paragraphText": "Le corrigé expose ensuite la réponse de l’auteur au problème.\nL’auteur répond que le philosophe et son disciple doivent prendre soin de leur corps et de leur âme.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p04_q3",
            "type": "mcq",
            "prompt": "Selon le corrigé, l’auteur répond que le philosophe et son disciple doivent :",
            "options": [
              "Négliger leur tenue",
              "Se consacrer uniquement à la beauté du corps",
              "Abandonner la philosophie",
              "Prendre soin de leur corps et de leur âme"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la thèse exposée dans l’introduction corrigée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Une structure en deux mouvements",
          "stepTheme": "Une structure en deux mouvements",
          "stepBadge": "Une structure en deux mouvements",
          "paragraphText": "Le corrigé annonce la structure logique du texte : deux mouvements.\nPremier mouvement : la nécessité de la décence chez le philosophe et son disciple. Second mouvement : la primauté de la beauté intérieure sur la beauté du corps.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p04_q4",
            "type": "mcq",
            "prompt": "Le premier mouvement du texte, selon le corrigé, porte sur :",
            "options": [
              "La nécessité de la décence chez le philosophe et son disciple",
              "La primauté de la beauté intérieure",
              "La définition du disciple",
              "La valeur de la philosophie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Premier mouvement : nécessité de la décence ; second : primauté de la beauté intérieure."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ajouter une opinion personnelle",
          "stepTheme": "Ajouter une opinion personnelle",
          "stepBadge": "Ajouter une opinion personnelle",
          "paragraphText": "Piège : glisser dans l’introduction son opinion personnelle sur la tenue du philosophe.\nL’introduction présente le texte et expose la thèse de l’auteur ; la prise de position personnelle appartient à la conclusion.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p04_q5",
            "type": "mcq",
            "prompt": "Que faut-il éviter dans cette introduction ?",
            "options": [
              "Annoncer le thème du texte",
              "Glisser son opinion personnelle à la place de la thèse de l’auteur",
              "Poser le problème sous forme de question",
              "Annoncer les deux mouvements du texte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’introduction expose la position de l’auteur, pas celle du candidat."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Vérifier les éléments présents",
          "stepTheme": "Vérifier les éléments présents",
          "stepBadge": "Vérifier les éléments présents",
          "paragraphText": "Méthode de vérification : relire son introduction et contrôler la présence des éléments constitutifs.\nThème annoncé, problème posé, thèse exposée, structure éventuellement annoncée : le corrigé les contient tous.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p04_q6",
            "type": "mcq",
            "prompt": "Une introduction complète, selon le corrigé, contient notamment :",
            "options": [
              "Le bilan et l’ouverture du débat",
              "L’intention et l’enjeu développés",
              "Le thème, le problème, la thèse et la structure",
              "Une confrontation avec d’autres auteurs"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les éléments constitutifs vérifiables dans le corrigé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p04_q1",
          "type": "mcq",
          "prompt": "Le texte du corrigé est extrait de l’œuvre d’Epictète intitulée :",
          "options": [
            "Pensées",
            "Maximes et Pensées",
            "Sur la philosophie africaine",
            "Éléments de philosophie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé cite Maximes et Pensées, édité par A. Silvaire en 1962."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p04_q2",
          "type": "mcq",
          "prompt": "Le problème posé dans le corrigé est :",
          "options": [
            "La philosophie est-elle un système ?",
            "Comment définir la beauté intérieure ?",
            "Le philosophe et son disciple doivent-ils négliger leur tenue ?",
            "Faut-il lire le texte plusieurs fois ?"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la question à laquelle l’auteur répond dans le texte."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p04_q3",
          "type": "mcq",
          "prompt": "Selon le corrigé, l’auteur répond que le philosophe et son disciple doivent :",
          "options": [
            "Négliger leur tenue",
            "Se consacrer uniquement à la beauté du corps",
            "Abandonner la philosophie",
            "Prendre soin de leur corps et de leur âme"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la thèse exposée dans l’introduction corrigée."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p04_q4",
          "type": "mcq",
          "prompt": "Le premier mouvement du texte, selon le corrigé, porte sur :",
          "options": [
            "La nécessité de la décence chez le philosophe et son disciple",
            "La primauté de la beauté intérieure",
            "La définition du disciple",
            "La valeur de la philosophie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Premier mouvement : nécessité de la décence ; second : primauté de la beauté intérieure."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p04_q5",
          "type": "mcq",
          "prompt": "Que faut-il éviter dans cette introduction ?",
          "options": [
            "Annoncer le thème du texte",
            "Glisser son opinion personnelle à la place de la thèse de l’auteur",
            "Poser le problème sous forme de question",
            "Annoncer les deux mouvements du texte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’introduction expose la position de l’auteur, pas celle du candidat."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p04_q6",
          "type": "mcq",
          "prompt": "Une introduction complète, selon le corrigé, contient notamment :",
          "options": [
            "Le bilan et l’ouverture du débat",
            "L’intention et l’enjeu développés",
            "Le thème, le problème, la thèse et la structure",
            "Une confrontation avec d’autres auteurs"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les éléments constitutifs vérifiables dans le corrigé."
        }
      ]
    }
  ]
};
