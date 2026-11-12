import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Philo 1ère_Leç 5_Lintroduction de la dissertation philosophique.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const PHILO_1RE_L05_INTRODUCTION_DISSERTATION: CurriculumChapter = {
  "id": "premiere_philo_methodologie_l05_introduction_dissertation",
  "subjectId": "philosophie",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 5,
  "title": "Leçon 5 : L'introduction de la dissertation philosophique",
  "summary": "Amorce, énoncé du problème et aspects, modèle rédigé sur le progrès technique, entraînement sur « L'autre est-il absolument mon ennemi ? ».",
  "officialVolumeHours": 3,
  "contentVersion": 2,
  "source": "Philo 1ère_Leç 5_Lintroduction de la dissertation philosophique.pdf",
  "points": [
    {
      "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01",
      "order": 1,
      "title": "L'introduction et ses trois éléments",
      "summary": "Amorce, énoncé du problème, aspects du problème.",
      "conceptExplanation": "Définition : l'introduction est l'étape initiale de la rédaction de la dissertation philosophique. Elle consiste à poser clairement le problème du sujet, c'est-à-dire la difficulté intellectuelle à surmonter.\n\nElle se compose de trois éléments, toujours dans cet ordre :\n1. l'amorce (ou généralité) : une idée, un constat, une définition ou des idées opposées qui SITUE le sujet ;\n2. l'énoncé du problème : la difficulté intellectuelle liée au sujet, dont la résolution va susciter une argumentation. Il est annoncé par l'amorce ;\n3. les aspects du problème : les différentes questions suscitées par le problème. Ils annoncent les axes d'analyse.\n\nL'introduction ne donne pas la réponse : elle pose le problème. La réponse vient dans le développement et le bilan dans la conclusion.\n\nLien avec la leçon précédente : le problème et les aspects ont été trouvés pendant l'essai de problématisation ; l'introduction les rédige proprement.",
      "keyRule": "Introduction = amorce → problème → aspects. Elle pose le problème, elle ne le résout pas.",
      "formulas": [],
      "workedExample": {
        "title": "Remettre en ordre",
        "statement": "Un élève a noté les éléments de son introduction dans le désordre : « les aspects du problème – le problème – l'amorce ». Remets-les dans l'ordre.",
        "methodSteps": [
          "On commence par situer le sujet : l'amorce.",
          "L'amorce annonce le problème.",
          "Le problème fait naître les questions qui annoncent les axes : les aspects."
        ],
        "conclusion": "Ordre : l'amorce, le problème, les aspects du problème."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition",
          "stepTheme": "La définition",
          "stepBadge": "La définition",
          "paragraphText": "L'introduction est l'étape initiale de la rédaction de la dissertation : elle pose clairement le problème du sujet.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q1",
            "type": "mcq",
            "prompt": "En dissertation philosophique, en quoi consiste l'introduction ?",
            "options": [
              "À donner la réponse définitive au sujet",
              "À poser clairement le problème du sujet",
              "À résumer tous les arguments",
              "À citer le plus d'auteurs possible"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle pose la difficulté à surmonter ; elle ne la résout pas."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Trois éléments",
          "stepTheme": "Trois éléments",
          "stepBadge": "Trois éléments",
          "paragraphText": "L'introduction de la dissertation se compose d'une amorce, de l'énoncé du problème et des aspects du problème.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q2",
            "type": "mcq",
            "prompt": "De quels éléments se compose l'introduction d'une dissertation philosophique en classe de Première ?",
            "options": [
              "Thème, thèse, enjeu",
              "Amorce, énoncé du problème, aspects du problème",
              "Thèse, antithèse, synthèse",
              "Bilan, prise de position, ouverture"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Thème-thèse-enjeu, c'est l'introduction du commentaire de texte."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'amorce",
          "stepTheme": "L'amorce",
          "stepBadge": "L'amorce",
          "paragraphText": "L'amorce, ou généralité, peut être une idée, un constat, une définition ou des idées opposées qui situe le sujet.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q3",
            "type": "mcq",
            "prompt": "Dans l'introduction d'une dissertation, que peut être l'amorce (ou généralité) ?",
            "options": [
              "Une idée, un constat, une définition ou des idées opposées qui situent le sujet",
              "La réponse au sujet",
              "La liste des arguments",
              "Le nom de l'élève"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'amorce situe le sujet et prépare le problème."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le problème",
          "stepTheme": "Le problème",
          "stepBadge": "Le problème",
          "paragraphText": "Le problème est la difficulté intellectuelle liée au sujet, dont la résolution va susciter une argumentation. Il est annoncé par l'amorce.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q4",
            "type": "mcq",
            "prompt": "Dans l'introduction d'une dissertation, quel élément annonce le problème ?",
            "options": [
              "Les aspects",
              "La conclusion",
              "L'amorce",
              "Le développement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'amorce situe le sujet et conduit naturellement au problème."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les aspects",
          "stepTheme": "Les aspects",
          "stepBadge": "Les aspects",
          "paragraphText": "Les aspects du problème sont les différentes questions suscitées par le problème ; ils annoncent les axes d'analyse.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q5",
            "type": "mcq",
            "prompt": "Dans l'introduction d'une dissertation, qu'annoncent les aspects du problème ?",
            "options": [
              "L'amorce",
              "Les axes d'analyse du développement",
              "La biographie de l'auteur",
              "La note du devoir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque aspect correspond à une partie du développement."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Le bon ordre",
          "stepTheme": "Le bon ordre",
          "stepBadge": "Le bon ordre",
          "paragraphText": "Rédiger l'introduction, c'est agencer de façon cohérente ses éléments : amorce, puis problème, puis aspects.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q6",
            "type": "mcq",
            "prompt": "Mets en ordre les éléments de l'introduction donnés dans le désordre : « les aspects du problème – le problème – l'amorce ». Quel est le bon ordre ?",
            "options": [
              "Le problème, l'amorce, les aspects",
              "Les aspects, le problème, l'amorce",
              "L'amorce, le problème, les aspects",
              "L'amorce, les aspects, le problème"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On situe d'abord le sujet, puis on pose le problème, puis on annonce les axes."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Pas de réponse dans l'introduction",
          "stepTheme": "Pas de réponse dans l'introduction",
          "stepBadge": "Pas de réponse dans l'introduction",
          "paragraphText": "Une introduction qui donne déjà la réponse supprime l'intérêt du développement.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q7",
            "type": "mcq",
            "prompt": "Un élève termine son introduction sur le sujet « Doit-on condamner le progrès technique ? » par : « Je pense donc qu'il faut condamner la technique. » Quelle est l'erreur ?",
            "options": [
              "Aucune erreur",
              "Il donne la réponse au lieu de poser le problème et ses aspects",
              "Il a oublié de citer Descartes",
              "Son introduction est trop courte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'introduction se termine par les aspects du problème, sous forme de questions."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q1",
          "type": "mcq",
          "prompt": "En dissertation philosophique, en quoi consiste l'introduction ?",
          "options": [
            "À donner la réponse définitive au sujet",
            "À poser clairement le problème du sujet",
            "À résumer tous les arguments",
            "À citer le plus d'auteurs possible"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle pose la difficulté à surmonter ; elle ne la résout pas."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q2",
          "type": "mcq",
          "prompt": "De quels éléments se compose l'introduction d'une dissertation philosophique en classe de Première ?",
          "options": [
            "Thème, thèse, enjeu",
            "Amorce, énoncé du problème, aspects du problème",
            "Thèse, antithèse, synthèse",
            "Bilan, prise de position, ouverture"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Thème-thèse-enjeu, c'est l'introduction du commentaire de texte."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q3",
          "type": "mcq",
          "prompt": "Dans l'introduction d'une dissertation, que peut être l'amorce (ou généralité) ?",
          "options": [
            "Une idée, un constat, une définition ou des idées opposées qui situent le sujet",
            "La réponse au sujet",
            "La liste des arguments",
            "Le nom de l'élève"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'amorce situe le sujet et prépare le problème."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q4",
          "type": "mcq",
          "prompt": "Dans l'introduction d'une dissertation, quel élément annonce le problème ?",
          "options": [
            "Les aspects",
            "La conclusion",
            "L'amorce",
            "Le développement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'amorce situe le sujet et conduit naturellement au problème."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q5",
          "type": "mcq",
          "prompt": "Dans l'introduction d'une dissertation, qu'annoncent les aspects du problème ?",
          "options": [
            "L'amorce",
            "Les axes d'analyse du développement",
            "La biographie de l'auteur",
            "La note du devoir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque aspect correspond à une partie du développement."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q6",
          "type": "mcq",
          "prompt": "Mets en ordre les éléments de l'introduction donnés dans le désordre : « les aspects du problème – le problème – l'amorce ». Quel est le bon ordre ?",
          "options": [
            "Le problème, l'amorce, les aspects",
            "Les aspects, le problème, l'amorce",
            "L'amorce, le problème, les aspects",
            "L'amorce, les aspects, le problème"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On situe d'abord le sujet, puis on pose le problème, puis on annonce les axes."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q7",
          "type": "mcq",
          "prompt": "Un élève termine son introduction sur le sujet « Doit-on condamner le progrès technique ? » par : « Je pense donc qu'il faut condamner la technique. » Quelle est l'erreur ?",
          "options": [
            "Aucune erreur",
            "Il donne la réponse au lieu de poser le problème et ses aspects",
            "Il a oublié de citer Descartes",
            "Son introduction est trop courte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'introduction se termine par les aspects du problème, sous forme de questions."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02",
      "order": 2,
      "title": "Une introduction modèle : le progrès technique",
      "summary": "Repérer l'amorce, le problème et les aspects dans une introduction rédigée.",
      "conceptExplanation": "Sujet : « Doit-on condamner le progrès technique ? »\n\nIntroduction modèle (corrigé du programme) :\n« L'expérience quotidienne nous révèle le progrès vertigineux des sciences et techniques dans presque toutes les sphères de la vie. Et cela semble confirmer l'idée selon laquelle l'avenir appartient à la science et à la technique. Malheureusement, cette évolution de la technoscience s'accompagne souvent d'une réelle menace pour l'humanité entière. Dès lors, doit-on souscrire à l'idée selon laquelle la technique est nuisible ? Dans quelle mesure la puissance technique constitue-t-elle une menace ? N'est-elle pas au contraire un facteur de développement ? »\n\nAnalyse :\n- Amorce : « L'expérience quotidienne… menace pour l'humanité entière. » C'est un constat suivi d'idées opposées (l'avenir appartient à la technique / la technique menace).\n- Problème : « Dès lors, doit-on souscrire à l'idée selon laquelle la technique est nuisible ? » Le connecteur « Dès lors » fait passer de l'amorce au problème.\n- Aspects : « Dans quelle mesure la puissance technique constitue-t-elle une menace ? N'est-elle pas au contraire un facteur de développement ? » Deux questions qui annoncent deux axes.\n\nRemarque : l'amorce contient déjà une opposition (« Malheureusement »). C'est elle qui fait naître le problème.",
      "keyRule": "Constat ou idées opposées → « Dès lors » + problème → deux questions (aspects).",
      "formulas": [],
      "workedExample": {
        "title": "Repérer les éléments",
        "statement": "Dans l'introduction sur « Doit-on condamner le progrès technique ? », à quel élément correspond la phrase « Dès lors, doit-on souscrire à l'idée selon laquelle la technique est nuisible ? » ?",
        "methodSteps": [
          "Elle vient juste après le constat de départ.",
          "Elle pose la difficulté du sujet sous forme de question."
        ],
        "conclusion": "C'est l'énoncé du problème."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "L'amorce du modèle",
          "stepTheme": "L'amorce du modèle",
          "stepBadge": "L'amorce du modèle",
          "paragraphText": "« L'expérience quotidienne nous révèle le progrès vertigineux des sciences et techniques dans presque toutes les sphères de la vie. » : c'est un constat qui situe le sujet.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q1",
            "type": "mcq",
            "prompt": "Pour le sujet « Doit-on condamner le progrès technique ? », une introduction commence par : « L'expérience quotidienne nous révèle le progrès vertigineux des sciences et techniques dans presque toutes les sphères de la vie. » Quel élément de l'introduction est-ce ?",
            "options": [
              "Le problème",
              "Un aspect du problème",
              "L'amorce (un constat qui situe le sujet)",
              "La conclusion"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est un constat général qui situe le sujet : une amorce."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Des idées opposées",
          "stepTheme": "Des idées opposées",
          "stepBadge": "Des idées opposées",
          "paragraphText": "L'amorce oppose deux idées : « l'avenir appartient à la science et à la technique » et « cette évolution s'accompagne d'une réelle menace pour l'humanité ».",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q2",
            "type": "mcq",
            "prompt": "Dans l'amorce « l'avenir appartient à la science et à la technique. Malheureusement, cette évolution de la technoscience s'accompagne souvent d'une réelle menace pour l'humanité entière », quel mot marque l'opposition entre les deux idées ?",
            "options": [
              "Malheureusement",
              "Avenir",
              "Science",
              "Entière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Malheureusement » introduit l'idée contraire : la technique menace."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le problème du modèle",
          "stepTheme": "Le problème du modèle",
          "stepBadge": "Le problème du modèle",
          "paragraphText": "« Dès lors, doit-on souscrire à l'idée selon laquelle la technique est nuisible ? » : c'est l'énoncé du problème.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q3",
            "type": "mcq",
            "prompt": "Dans l'introduction sur le sujet « Doit-on condamner le progrès technique ? », quelle phrase est l'énoncé du problème ?",
            "options": [
              "« L'expérience quotidienne nous révèle le progrès vertigineux des sciences et techniques. »",
              "« Dès lors, doit-on souscrire à l'idée selon laquelle la technique est nuisible ? »",
              "« N'est-elle pas au contraire un facteur de développement ? »",
              "« Et cela semble confirmer l'idée selon laquelle l'avenir appartient à la science. »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Cette question pose la difficulté centrale : la technique est-elle nuisible ?"
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le connecteur de passage",
          "stepTheme": "Le connecteur de passage",
          "stepBadge": "Le connecteur de passage",
          "paragraphText": "Le connecteur « Dès lors » fait passer de l'amorce au problème. On peut aussi utiliser « Ainsi », « Par conséquent », « On peut alors se demander ».",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q4",
            "type": "mcq",
            "prompt": "Dans l'introduction modèle « … une réelle menace pour l'humanité entière. Dès lors, doit-on souscrire à l'idée selon laquelle la technique est nuisible ? », quel est le rôle de « Dès lors » ?",
            "options": [
              "Il introduit un exemple",
              "Il fait passer de l'amorce au problème",
              "Il annonce la conclusion",
              "Il introduit une citation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le pont entre la généralité et la question centrale."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les aspects du modèle",
          "stepTheme": "Les aspects du modèle",
          "stepBadge": "Les aspects du modèle",
          "paragraphText": "« Dans quelle mesure la puissance technique constitue-t-elle une menace ? N'est-elle pas au contraire un facteur de développement ? » : ce sont les aspects.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q5",
            "type": "mcq",
            "prompt": "L'introduction sur « Doit-on condamner le progrès technique ? » se termine par : « Dans quelle mesure la puissance technique constitue-t-elle une menace ? N'est-elle pas au contraire un facteur de développement ? » Que sont ces deux questions ?",
            "options": [
              "L'amorce",
              "Les aspects du problème, qui annoncent deux axes",
              "Deux citations",
              "La conclusion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque question annonce un axe : la menace, puis le développement."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Des aspects opposés",
          "stepTheme": "Des aspects opposés",
          "stepBadge": "Des aspects opposés",
          "paragraphText": "Les deux aspects explorent les deux côtés du problème : la technique comme menace, la technique comme facteur de développement.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q6",
            "type": "mcq",
            "prompt": "Dans l'introduction modèle, l'aspect 1 est « Dans quelle mesure la puissance technique constitue-t-elle une menace ? ». Quel mot montre que l'aspect 2, « N'est-elle pas au contraire un facteur de développement ? », explore l'autre côté du problème ?",
            "options": [
              "« puissance »",
              "« au contraire »",
              "« facteur »",
              "« elle »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Au contraire » annonce le point de vue opposé."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Un élément qui manque",
          "stepTheme": "Un élément qui manque",
          "stepBadge": "Un élément qui manque",
          "paragraphText": "Une introduction sans aspects ne dit pas comment le devoir va avancer.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q7",
            "type": "mcq",
            "prompt": "Voici une introduction sur le sujet « Doit-on condamner le progrès technique ? » : « Les sciences et les techniques progressent partout. Mais elles menacent aussi l'humanité. Dès lors, la technique est-elle nuisible ? » Quel élément manque ?",
            "options": [
              "L'amorce",
              "Le problème",
              "Les aspects du problème",
              "Rien ne manque"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il manque les questions qui annoncent les axes d'analyse."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q1",
          "type": "mcq",
          "prompt": "Pour le sujet « Doit-on condamner le progrès technique ? », une introduction commence par : « L'expérience quotidienne nous révèle le progrès vertigineux des sciences et techniques dans presque toutes les sphères de la vie. » Quel élément de l'introduction est-ce ?",
          "options": [
            "Le problème",
            "Un aspect du problème",
            "L'amorce (un constat qui situe le sujet)",
            "La conclusion"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est un constat général qui situe le sujet : une amorce."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q2",
          "type": "mcq",
          "prompt": "Dans l'amorce « l'avenir appartient à la science et à la technique. Malheureusement, cette évolution de la technoscience s'accompagne souvent d'une réelle menace pour l'humanité entière », quel mot marque l'opposition entre les deux idées ?",
          "options": [
            "Malheureusement",
            "Avenir",
            "Science",
            "Entière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Malheureusement » introduit l'idée contraire : la technique menace."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q3",
          "type": "mcq",
          "prompt": "Dans l'introduction sur le sujet « Doit-on condamner le progrès technique ? », quelle phrase est l'énoncé du problème ?",
          "options": [
            "« L'expérience quotidienne nous révèle le progrès vertigineux des sciences et techniques. »",
            "« Dès lors, doit-on souscrire à l'idée selon laquelle la technique est nuisible ? »",
            "« N'est-elle pas au contraire un facteur de développement ? »",
            "« Et cela semble confirmer l'idée selon laquelle l'avenir appartient à la science. »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Cette question pose la difficulté centrale : la technique est-elle nuisible ?"
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q4",
          "type": "mcq",
          "prompt": "Dans l'introduction modèle « … une réelle menace pour l'humanité entière. Dès lors, doit-on souscrire à l'idée selon laquelle la technique est nuisible ? », quel est le rôle de « Dès lors » ?",
          "options": [
            "Il introduit un exemple",
            "Il fait passer de l'amorce au problème",
            "Il annonce la conclusion",
            "Il introduit une citation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le pont entre la généralité et la question centrale."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q5",
          "type": "mcq",
          "prompt": "L'introduction sur « Doit-on condamner le progrès technique ? » se termine par : « Dans quelle mesure la puissance technique constitue-t-elle une menace ? N'est-elle pas au contraire un facteur de développement ? » Que sont ces deux questions ?",
          "options": [
            "L'amorce",
            "Les aspects du problème, qui annoncent deux axes",
            "Deux citations",
            "La conclusion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque question annonce un axe : la menace, puis le développement."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q6",
          "type": "mcq",
          "prompt": "Dans l'introduction modèle, l'aspect 1 est « Dans quelle mesure la puissance technique constitue-t-elle une menace ? ». Quel mot montre que l'aspect 2, « N'est-elle pas au contraire un facteur de développement ? », explore l'autre côté du problème ?",
          "options": [
            "« puissance »",
            "« au contraire »",
            "« facteur »",
            "« elle »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Au contraire » annonce le point de vue opposé."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q7",
          "type": "mcq",
          "prompt": "Voici une introduction sur le sujet « Doit-on condamner le progrès technique ? » : « Les sciences et les techniques progressent partout. Mais elles menacent aussi l'humanité. Dès lors, la technique est-elle nuisible ? » Quel élément manque ?",
          "options": [
            "L'amorce",
            "Le problème",
            "Les aspects du problème",
            "Rien ne manque"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il manque les questions qui annoncent les axes d'analyse."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03",
      "order": 3,
      "title": "Rédiger son introduction : « L'autre est-il absolument mon ennemi ? »",
      "summary": "De l'étude parcellaire à l'introduction complète.",
      "conceptExplanation": "Méthode : avant de rédiger l'introduction, on fait l'essai de problématisation (étude parcellaire, reformulation, problème, aspects). Ensuite on rédige l'amorce, le problème et les aspects.\n\nSujet : « L'autre est-il absolument mon ennemi ? »\n\n1. Étude parcellaire (corrigé du programme) :\n- « l'autre » : le semblable, le prochain ;\n- « absolument » : forcément, toujours ;\n- « ennemi » : celui qui cherche à me nuire, à me détruire.\n\n2. Reformulation : mon semblable cherche-t-il toujours à me nuire ?\n\n3. Exemple d'introduction :\n« Dans la vie quotidienne, les conflits entre voisins, les rivalités et les guerres montrent que l'autre peut être une menace pour moi. Pourtant, c'est aussi avec l'autre que je partage l'amitié, l'entraide et la vie en société. Dès lors, mon semblable cherche-t-il toujours à me nuire ? En quoi l'autre peut-il apparaître comme un ennemi ? N'est-il pas aussi celui sans qui je ne peux pas vivre et m'accomplir ? »\n\n- Amorce : constat des conflits + idée opposée (amitié, entraide).\n- Problème : « mon semblable cherche-t-il toujours à me nuire ? »\n- Aspects : l'autre comme ennemi / l'autre comme partenaire indispensable.\n\nAutres sujets d'entraînement du programme : « La religion nous éloigne-t-elle du mal ? », « Le travail contribue-t-il au bonheur ? ».",
      "keyRule": "Avant d'écrire : étude parcellaire et reformulation. Puis : amorce (constat ou idées opposées), problème (avec « Dès lors »), aspects (deux questions).",
      "formulas": [],
      "workedExample": {
        "title": "Une amorce pour « Le travail contribue-t-il au bonheur ? »",
        "statement": "Propose une amorce par idées opposées pour le sujet « Le travail contribue-t-il au bonheur ? ».",
        "methodSteps": [
          "Idée 1 : le travail procure un revenu, une place dans la société et la fierté de réussir.",
          "Idée 2 : pourtant, beaucoup vivent leur travail comme une fatigue, voire une souffrance."
        ],
        "conclusion": "« Le travail nous procure un revenu et une place dans la société. Pourtant, beaucoup le vivent comme une fatigue et une contrainte. »"
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "D'abord l'étude parcellaire",
          "stepTheme": "D'abord l'étude parcellaire",
          "stepBadge": "D'abord l'étude parcellaire",
          "paragraphText": "Avant de rédiger l'introduction, on définit les termes essentiels du sujet.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q1",
            "type": "mcq",
            "prompt": "Pour faire l'étude parcellaire du sujet « L'autre est-il absolument mon ennemi ? », quels sont les termes essentiels à définir ?",
            "options": [
              "« est » et « il »",
              "« l'autre », « absolument » et « ennemi »",
              "« mon » seulement",
              "Aucun, le sujet est clair"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les mots indispensables à la compréhension du sujet."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Définir « ennemi »",
          "stepTheme": "Définir « ennemi »",
          "stepBadge": "Définir « ennemi »",
          "paragraphText": "Dans « L'autre est-il absolument mon ennemi ? », « ennemi » : celui qui cherche à me nuire, à me détruire.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q2",
            "type": "mcq",
            "prompt": "Dans le sujet « L'autre est-il absolument mon ennemi ? », quelle est la bonne définition de « ennemi » ?",
            "options": [
              "Un inconnu",
              "Celui qui cherche à me nuire, à me détruire",
              "Un camarade de classe",
              "Un étranger"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ennemi est défini par l'intention de nuire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Définir « l'autre »",
          "stepTheme": "Définir « l'autre »",
          "stepBadge": "Définir « l'autre »",
          "paragraphText": "Dans « L'autre est-il absolument mon ennemi ? », « l'autre » désigne le semblable, le prochain.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q3",
            "type": "mcq",
            "prompt": "Dans le sujet « L'autre est-il absolument mon ennemi ? », que désigne « l'autre » ?",
            "options": [
              "Un objet",
              "Le semblable, le prochain",
              "Un animal",
              "Dieu"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'autre, c'est l'autre être humain, mon semblable."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Proposer une amorce",
          "stepTheme": "Proposer une amorce",
          "stepBadge": "Proposer une amorce",
          "paragraphText": "Une bonne amorce part d'un constat ou d'idées opposées en lien direct avec le sujet.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q4",
            "type": "mcq",
            "prompt": "Quelle est la meilleure amorce pour le sujet « Autrui est-il absolument mon ennemi ? » ?",
            "options": [
              "« Les conflits et les guerres montrent que l'autre peut me menacer ; pourtant, c'est avec lui que je partage l'amitié et l'entraide. »",
              "« La philosophie est née en Grèce. »",
              "« Je pense que l'autre est mon ami. »",
              "« Platon est un philosophe antique. »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle oppose deux idées liées au sujet et prépare le problème."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Énoncer le problème",
          "stepTheme": "Énoncer le problème",
          "stepBadge": "Énoncer le problème",
          "paragraphText": "Le problème reprend la reformulation : « mon semblable cherche-t-il toujours à me nuire ? ».",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q5",
            "type": "mcq",
            "prompt": "Après une amorce sur les conflits et l'amitié, quel énoncé du problème convient au sujet « L'autre est-il absolument mon ennemi ? » ?",
            "options": [
              "« Dès lors, mon semblable cherche-t-il toujours à me nuire ? »",
              "« Dès lors, qui est mon voisin ? »",
              "« Dès lors, l'autre est mon ennemi. »",
              "« Dès lors, faut-il travailler ? »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il pose la difficulté du sujet sous forme de question, sans y répondre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Annoncer les aspects",
          "stepTheme": "Annoncer les aspects",
          "stepBadge": "Annoncer les aspects",
          "paragraphText": "Aspects possibles : en quoi l'autre peut-il apparaître comme un ennemi ? N'est-il pas aussi celui sans qui je ne peux pas m'accomplir ?",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q6",
            "type": "mcq",
            "prompt": "Pour le sujet « L'autre est-il absolument mon ennemi ? », l'aspect 1 est « En quoi l'autre peut-il apparaître comme un ennemi ? ». Quel aspect 2 convient ?",
            "options": [
              "« Qui est l'ennemi de mon voisin ? »",
              "« L'autre n'est-il pas aussi celui sans qui je ne peux pas vivre et m'accomplir ? »",
              "« Combien ai-je d'ennemis ? »",
              "« L'autre est toujours mon ennemi. »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il explore l'autre côté du problème, sous forme de question."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Une amorce hors sujet",
          "stepTheme": "Une amorce hors sujet",
          "stepBadge": "Une amorce hors sujet",
          "paragraphText": "Une amorce trop vague ou sans lien avec le sujet ne situe rien et ne mène pas au problème.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q7",
            "type": "mcq",
            "prompt": "Pour le sujet « La religion nous éloigne-t-elle du mal ? », un élève commence par : « Depuis toujours, l'homme se pose des questions. » Quel est le défaut de cette amorce ?",
            "options": [
              "Elle est trop longue",
              "Elle est trop vague : elle ne parle ni de religion ni de mal",
              "Elle donne la réponse",
              "Elle contient une citation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une amorce doit situer CE sujet : par exemple, un constat sur la religion et le mal."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q1",
          "type": "mcq",
          "prompt": "Pour faire l'étude parcellaire du sujet « L'autre est-il absolument mon ennemi ? », quels sont les termes essentiels à définir ?",
          "options": [
            "« est » et « il »",
            "« l'autre », « absolument » et « ennemi »",
            "« mon » seulement",
            "Aucun, le sujet est clair"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les mots indispensables à la compréhension du sujet."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q2",
          "type": "mcq",
          "prompt": "Dans le sujet « L'autre est-il absolument mon ennemi ? », quelle est la bonne définition de « ennemi » ?",
          "options": [
            "Un inconnu",
            "Celui qui cherche à me nuire, à me détruire",
            "Un camarade de classe",
            "Un étranger"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ennemi est défini par l'intention de nuire."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q3",
          "type": "mcq",
          "prompt": "Dans le sujet « L'autre est-il absolument mon ennemi ? », que désigne « l'autre » ?",
          "options": [
            "Un objet",
            "Le semblable, le prochain",
            "Un animal",
            "Dieu"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'autre, c'est l'autre être humain, mon semblable."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q4",
          "type": "mcq",
          "prompt": "Quelle est la meilleure amorce pour le sujet « Autrui est-il absolument mon ennemi ? » ?",
          "options": [
            "« Les conflits et les guerres montrent que l'autre peut me menacer ; pourtant, c'est avec lui que je partage l'amitié et l'entraide. »",
            "« La philosophie est née en Grèce. »",
            "« Je pense que l'autre est mon ami. »",
            "« Platon est un philosophe antique. »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle oppose deux idées liées au sujet et prépare le problème."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q5",
          "type": "mcq",
          "prompt": "Après une amorce sur les conflits et l'amitié, quel énoncé du problème convient au sujet « L'autre est-il absolument mon ennemi ? » ?",
          "options": [
            "« Dès lors, mon semblable cherche-t-il toujours à me nuire ? »",
            "« Dès lors, qui est mon voisin ? »",
            "« Dès lors, l'autre est mon ennemi. »",
            "« Dès lors, faut-il travailler ? »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il pose la difficulté du sujet sous forme de question, sans y répondre."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q6",
          "type": "mcq",
          "prompt": "Pour le sujet « L'autre est-il absolument mon ennemi ? », l'aspect 1 est « En quoi l'autre peut-il apparaître comme un ennemi ? ». Quel aspect 2 convient ?",
          "options": [
            "« Qui est l'ennemi de mon voisin ? »",
            "« L'autre n'est-il pas aussi celui sans qui je ne peux pas vivre et m'accomplir ? »",
            "« Combien ai-je d'ennemis ? »",
            "« L'autre est toujours mon ennemi. »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il explore l'autre côté du problème, sous forme de question."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q7",
          "type": "mcq",
          "prompt": "Pour le sujet « La religion nous éloigne-t-elle du mal ? », un élève commence par : « Depuis toujours, l'homme se pose des questions. » Quel est le défaut de cette amorce ?",
          "options": [
            "Elle est trop longue",
            "Elle est trop vague : elle ne parle ni de religion ni de mal",
            "Elle donne la réponse",
            "Elle contient une citation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une amorce doit situer CE sujet : par exemple, un constat sur la religion et le mal."
        }
      ]
    }
  ]
};
