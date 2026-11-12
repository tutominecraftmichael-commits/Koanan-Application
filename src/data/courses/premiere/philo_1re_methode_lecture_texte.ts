import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Philo 1ère_Leç 1_La méthode de lecture de texte.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const PHILO_1RE_L01_METHODE_LECTURE_TEXTE: CurriculumChapter = {
  "id": "premiere_philo_methodologie_l01_methode_lecture_texte",
  "subjectId": "philosophie",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 1,
  "title": "Leçon 1 : La méthode de lecture de texte",
  "summary": "Explication littérale (mots et connecteurs), problématique et grille de lecture, explication méthodique, critique interne et externe, appliquées aux textes d'Épictète, Pascal et Descartes.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "Philo 1ère_Leç 1_La méthode de lecture de texte.pdf",
  "points": [
    {
      "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p01",
      "order": 1,
      "title": "La méthode et l'explication littérale",
      "summary": "Quatre étapes pour dégager le sens d'un texte ; on commence par les mots.",
      "conceptExplanation": "La méthode de lecture de texte est un ensemble de techniques qui permettent de dégager le sens d'un texte. Elle comprend quatre étapes, dans cet ordre :\n1. l'explication littérale ;\n2. la problématique du texte ;\n3. l'explication méthodique ;\n4. la critique du texte.\n\nL'explication littérale : après avoir numéroté les lignes et lu le texte plusieurs fois, on :\n- recense et définit les mots et expressions difficiles ou essentiels ;\n- recense les connecteurs logiques et détermine leur fonction.\n\nDéfinitions :\n- un mot (ou une expression) DIFFICILE exige un effort de compréhension de la part du lecteur ;\n- un mot (ou une expression) ESSENTIEL est indispensable à la compréhension du texte ;\n- on définit TOUJOURS les mots selon le contexte du texte, pas seulement selon le dictionnaire.\n\nExemple (Épictète, Maximes et Pensées : « Si un philosophe malpropre, négligé et horrible comme un criminel qui sort du cachot, me débite de belles maximes, comment m'attirerait-il ? ») :\n- cachot : prison ;\n- débiter : réciter mécaniquement ;\n- maximes : principes, règles morales ;\n- mis décemment : habillé convenablement ;\n- beauté intérieure : qualité morale, vertu ;\n- séant : convenable ; disciple : celui qui épouse les idées de son maître.",
      "keyRule": "Ordre : explication littérale → problématique → explication méthodique → critique. Les mots se définissent selon le contexte.",
      "formulas": [],
      "workedExample": {
        "title": "Définir selon le contexte",
        "statement": "Dans le texte d'Épictète, un philosophe malpropre « me débite de belles maximes ». Que signifie « débiter » ici ?",
        "methodSteps": [
          "Hors contexte, « débiter » peut vouloir dire vendre au détail ou couper du bois.",
          "Ici, le philosophe prononce des maximes : il les récite sans les vivre."
        ],
        "conclusion": "Dans ce texte, « débiter » signifie réciter mécaniquement."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La méthode de lecture",
          "stepTheme": "La méthode de lecture",
          "stepBadge": "La méthode de lecture",
          "paragraphText": "La méthode de lecture de texte est un ensemble de techniques permettant de dégager le sens d'un texte.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p01_q1",
            "type": "mcq",
            "prompt": "En philosophie, à quoi sert la méthode de lecture de texte ?",
            "options": [
              "À résumer la vie de l'auteur",
              "À dégager le sens d'un texte",
              "À corriger l'orthographe du texte",
              "À apprendre le texte par cœur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est un ensemble de techniques pour comprendre ce que dit le texte."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les quatre étapes",
          "stepTheme": "Les quatre étapes",
          "stepBadge": "Les quatre étapes",
          "paragraphText": "Explication littérale, problématique, explication méthodique, critique du texte.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p01_q2",
            "type": "mcq",
            "prompt": "Quel est l'ordre des quatre étapes de la méthode de lecture de texte philosophique ?",
            "options": [
              "Critique, problématique, explication littérale, explication méthodique",
              "Problématique, explication littérale, critique, explication méthodique",
              "Explication littérale, problématique, explication méthodique, critique",
              "Explication méthodique, explication littérale, problématique, critique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On part des mots (littérale), on dégage les idées (problématique), on les explique (méthodique), puis on juge (critique)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Avant de commencer",
          "stepTheme": "Avant de commencer",
          "stepBadge": "Avant de commencer",
          "paragraphText": "On numérote les lignes du texte et on le lit plusieurs fois avant de relever les mots.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p01_q3",
            "type": "mcq",
            "prompt": "Que fait-on en premier, avant de relever les mots difficiles d'un texte philosophique ?",
            "options": [
              "On numérote les lignes et on lit le texte plusieurs fois",
              "On écrit la conclusion",
              "On cherche l'antithèse",
              "On critique l'auteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La numérotation permet ensuite de citer les lignes (L1, L2…)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Difficile ou essentiel",
          "stepTheme": "Difficile ou essentiel",
          "stepBadge": "Difficile ou essentiel",
          "paragraphText": "Un mot difficile demande un effort de compréhension ; un mot essentiel est indispensable à la compréhension du texte.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p01_q4",
            "type": "mcq",
            "prompt": "Comment appelle-t-on, dans un texte, un terme indispensable à la compréhension de ce texte ?",
            "options": [
              "Un mot difficile",
              "Un connecteur logique",
              "Un mot essentiel",
              "Une allusion"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un mot essentiel porte le sens du texte, même s'il est facile."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Selon le contexte",
          "stepTheme": "Selon le contexte",
          "stepBadge": "Selon le contexte",
          "paragraphText": "On définit les mots selon le contexte du texte. « Débiter » des maximes, ce n'est pas couper du bois.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p01_q5",
            "type": "mcq",
            "prompt": "Épictète écrit : « Si un philosophe malpropre (…) me débite de belles maximes, comment m'attirerait-il ? » Que signifie « débite » dans cette phrase ?",
            "options": [
              "Vend au détail",
              "Coupe en morceaux",
              "Récite mécaniquement",
              "Rembourse"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le philosophe prononce des maximes sans les vivre : il les récite."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le vocabulaire d'Épictète",
          "stepTheme": "Le vocabulaire d'Épictète",
          "stepBadge": "Le vocabulaire d'Épictète",
          "paragraphText": "Cachot : prison. Maximes : principes, règles morales. Séant : convenable. Disciple : celui qui épouse les idées de son maître.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p01_q6",
            "type": "mcq",
            "prompt": "Épictète dit d'un jeune homme propre qu'« il se porte à ce qui est séant et honnête ». Que signifie « séant » ?",
            "options": [
              "Assis",
              "Convenable",
              "Riche",
              "Savant"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Séant » : ce qui convient, ce qui est bienséant."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Une expression",
          "stepTheme": "Une expression",
          "stepBadge": "Une expression",
          "paragraphText": "Une expression aussi se définit : pour Épictète, la « beauté intérieure » est une qualité morale, une vertu.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p01_q7",
            "type": "mcq",
            "prompt": "Épictète parle de « cette beauté intérieure qui consiste à faire usage de sa raison ». Que désigne « beauté intérieure » ?",
            "options": [
              "Une belle maison",
              "Un beau visage",
              "Un vêtement élégant",
              "Une qualité morale, une vertu"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Elle consiste à bien user de sa raison : c'est une vertu, pas une apparence."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p01_q1",
          "type": "mcq",
          "prompt": "En philosophie, à quoi sert la méthode de lecture de texte ?",
          "options": [
            "À résumer la vie de l'auteur",
            "À dégager le sens d'un texte",
            "À corriger l'orthographe du texte",
            "À apprendre le texte par cœur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est un ensemble de techniques pour comprendre ce que dit le texte."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p01_q2",
          "type": "mcq",
          "prompt": "Quel est l'ordre des quatre étapes de la méthode de lecture de texte philosophique ?",
          "options": [
            "Critique, problématique, explication littérale, explication méthodique",
            "Problématique, explication littérale, critique, explication méthodique",
            "Explication littérale, problématique, explication méthodique, critique",
            "Explication méthodique, explication littérale, problématique, critique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On part des mots (littérale), on dégage les idées (problématique), on les explique (méthodique), puis on juge (critique)."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p01_q3",
          "type": "mcq",
          "prompt": "Que fait-on en premier, avant de relever les mots difficiles d'un texte philosophique ?",
          "options": [
            "On numérote les lignes et on lit le texte plusieurs fois",
            "On écrit la conclusion",
            "On cherche l'antithèse",
            "On critique l'auteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La numérotation permet ensuite de citer les lignes (L1, L2…)."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p01_q4",
          "type": "mcq",
          "prompt": "Comment appelle-t-on, dans un texte, un terme indispensable à la compréhension de ce texte ?",
          "options": [
            "Un mot difficile",
            "Un connecteur logique",
            "Un mot essentiel",
            "Une allusion"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un mot essentiel porte le sens du texte, même s'il est facile."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p01_q5",
          "type": "mcq",
          "prompt": "Épictète écrit : « Si un philosophe malpropre (…) me débite de belles maximes, comment m'attirerait-il ? » Que signifie « débite » dans cette phrase ?",
          "options": [
            "Vend au détail",
            "Coupe en morceaux",
            "Récite mécaniquement",
            "Rembourse"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le philosophe prononce des maximes sans les vivre : il les récite."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p01_q6",
          "type": "mcq",
          "prompt": "Épictète dit d'un jeune homme propre qu'« il se porte à ce qui est séant et honnête ». Que signifie « séant » ?",
          "options": [
            "Assis",
            "Convenable",
            "Riche",
            "Savant"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Séant » : ce qui convient, ce qui est bienséant."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p01_q7",
          "type": "mcq",
          "prompt": "Épictète parle de « cette beauté intérieure qui consiste à faire usage de sa raison ». Que désigne « beauté intérieure » ?",
          "options": [
            "Une belle maison",
            "Un beau visage",
            "Un vêtement élégant",
            "Une qualité morale, une vertu"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Elle consiste à bien user de sa raison : c'est une vertu, pas une apparence."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p02",
      "order": 2,
      "title": "Les connecteurs logiques",
      "summary": "Ils relient les idées ; chacun a une fonction (cause, conséquence, opposition…).",
      "conceptExplanation": "Les connecteurs logiques sont des mots ou expressions qui relient deux mots, deux idées ou deux paragraphes. Ils assurent la cohérence du discours et ont une fonction précise.\n\nPrincipales fonctions :\n- addition : et, de plus, en outre ;\n- cause / justification : car, parce que, puisque, en effet ;\n- conséquence : donc, ainsi, par conséquent, c'est pourquoi ;\n- opposition : mais, cependant, or, pourtant, en revanche ;\n- concession : certes, bien que, même si ;\n- comparaison : comme, de même que, ainsi que ;\n- condition / supposition : si, à condition que, en supposant que ;\n- restriction : ne… que, sauf, seulement ;\n- conclusion : en somme, en définitive, bref ;\n- illustration : par exemple, notamment.\n\nExemple (Épictète) :\n- « Si un philosophe malpropre… » : supposition ;\n- « horrible comme un criminel » : comparaison ;\n- « Ayons donc de la propreté » : conséquence ;\n- « Car par là je juge… » : justification ;\n- « la beauté du corps n'est que laideur » : restriction.\n\nOn ne relève que les connecteurs essentiels, ceux qui organisent l'argumentation.",
      "keyRule": "Un connecteur se relève avec sa ligne et sa fonction : « donc » (L4) : conséquence.",
      "formulas": [],
      "workedExample": {
        "title": "Les connecteurs d'Épictète",
        "statement": "Relève deux connecteurs du texte d'Épictète et donne leur fonction.",
        "methodSteps": [
          "« Ayons donc de la propreté et de la décence » : donc introduit ce qu'il faut en conclure.",
          "« Car par là je juge qu'il a quelque idée du beau » : car justifie l'affirmation précédente."
        ],
        "conclusion": "donc (L4) : conséquence ; car (L7) : justification."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le rôle des connecteurs",
          "stepTheme": "Le rôle des connecteurs",
          "stepBadge": "Le rôle des connecteurs",
          "paragraphText": "Les connecteurs logiques relient des mots, des idées ou des paragraphes et assurent la cohérence du texte.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p02_q1",
            "type": "mcq",
            "prompt": "Dans un texte philosophique, à quoi servent les connecteurs logiques ?",
            "options": [
              "À relier les idées et assurer la cohérence du discours",
              "À donner le nom de l'auteur",
              "À remplacer les définitions",
              "À compter les lignes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ils montrent comment les idées s'enchaînent."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La conséquence",
          "stepTheme": "La conséquence",
          "stepBadge": "La conséquence",
          "paragraphText": "« Ayons donc de la propreté et de la décence » : donc tire une conséquence de ce qui précède.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p02_q2",
            "type": "mcq",
            "prompt": "Épictète écrit : « Je ne puis me décider à l'entendre (…). Ayons donc de la propreté et de la décence. » Quelle est la fonction de « donc » ?",
            "options": [
              "Opposition",
              "Comparaison",
              "Conséquence",
              "Supposition"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Donc » annonce ce qu'il faut en conclure."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La justification",
          "stepTheme": "La justification",
          "stepBadge": "La justification",
          "paragraphText": "« Car par là je juge qu'il a quelque idée du beau » : car donne la raison de ce qui vient d'être dit.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p02_q3",
            "type": "mcq",
            "prompt": "Épictète préfère un disciple propre, « car par là je juge qu'il a quelque idée du beau ». Quelle est la fonction de « car » ?",
            "options": [
              "Justification",
              "Addition",
              "Restriction",
              "Conclusion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Car » introduit la raison de sa préférence."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La comparaison",
          "stepTheme": "La comparaison",
          "stepBadge": "La comparaison",
          "paragraphText": "« Horrible comme un criminel qui sort du cachot » : comme rapproche le philosophe malpropre d'un criminel.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p02_q4",
            "type": "mcq",
            "prompt": "Dans « un philosophe malpropre, négligé et horrible comme un criminel qui sort du cachot », quelle est la fonction de « comme » ?",
            "options": [
              "Cause",
              "Comparaison",
              "Temps",
              "Opposition"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le philosophe sale est comparé à un prisonnier."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La restriction",
          "stepTheme": "La restriction",
          "stepBadge": "La restriction",
          "paragraphText": "« Ne… que », « sauf », « seulement » limitent une affirmation : c'est la restriction.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p02_q5",
            "type": "mcq",
            "prompt": "Épictète écrit qu'auprès de la beauté intérieure, « la beauté du corps n'est que laideur ». Quelle est la fonction de « ne… que » ?",
            "options": [
              "Addition",
              "Conséquence",
              "Restriction",
              "Supposition"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Ne… que » réduit la beauté du corps à de la laideur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "L'opposition",
          "stepTheme": "L'opposition",
          "stepBadge": "L'opposition",
          "paragraphText": "Mais, cependant, or, pourtant, en revanche marquent une opposition entre deux idées.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p02_q6",
            "type": "mcq",
            "prompt": "Pascal écrit : « L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant. » Quelle est la fonction de « mais » ?",
            "options": [
              "Comparaison",
              "Addition",
              "Conséquence",
              "Opposition"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Mais » oppose la faiblesse de l'homme à sa pensée."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Si : supposition",
          "stepTheme": "Si : supposition",
          "stepBadge": "Si : supposition",
          "paragraphText": "« Si » ne marque pas une cause : il pose une hypothèse (condition, supposition).",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p02_q7",
            "type": "mcq",
            "prompt": "Épictète commence par : « Si un philosophe malpropre (…) me débite de belles maximes, comment m'attirerait-il ? » Quelle est la fonction de « si » ?",
            "options": [
              "Supposition",
              "Cause",
              "Conséquence",
              "Conclusion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Si » imagine une situation : c'est une hypothèse."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p02_q1",
          "type": "mcq",
          "prompt": "Dans un texte philosophique, à quoi servent les connecteurs logiques ?",
          "options": [
            "À relier les idées et assurer la cohérence du discours",
            "À donner le nom de l'auteur",
            "À remplacer les définitions",
            "À compter les lignes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ils montrent comment les idées s'enchaînent."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p02_q2",
          "type": "mcq",
          "prompt": "Épictète écrit : « Je ne puis me décider à l'entendre (…). Ayons donc de la propreté et de la décence. » Quelle est la fonction de « donc » ?",
          "options": [
            "Opposition",
            "Comparaison",
            "Conséquence",
            "Supposition"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Donc » annonce ce qu'il faut en conclure."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p02_q3",
          "type": "mcq",
          "prompt": "Épictète préfère un disciple propre, « car par là je juge qu'il a quelque idée du beau ». Quelle est la fonction de « car » ?",
          "options": [
            "Justification",
            "Addition",
            "Restriction",
            "Conclusion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Car » introduit la raison de sa préférence."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p02_q4",
          "type": "mcq",
          "prompt": "Dans « un philosophe malpropre, négligé et horrible comme un criminel qui sort du cachot », quelle est la fonction de « comme » ?",
          "options": [
            "Cause",
            "Comparaison",
            "Temps",
            "Opposition"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le philosophe sale est comparé à un prisonnier."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p02_q5",
          "type": "mcq",
          "prompt": "Épictète écrit qu'auprès de la beauté intérieure, « la beauté du corps n'est que laideur ». Quelle est la fonction de « ne… que » ?",
          "options": [
            "Addition",
            "Conséquence",
            "Restriction",
            "Supposition"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Ne… que » réduit la beauté du corps à de la laideur."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p02_q6",
          "type": "mcq",
          "prompt": "Pascal écrit : « L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant. » Quelle est la fonction de « mais » ?",
          "options": [
            "Comparaison",
            "Addition",
            "Conséquence",
            "Opposition"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Mais » oppose la faiblesse de l'homme à sa pensée."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p02_q7",
          "type": "mcq",
          "prompt": "Épictète commence par : « Si un philosophe malpropre (…) me débite de belles maximes, comment m'attirerait-il ? » Quelle est la fonction de « si » ?",
          "options": [
            "Supposition",
            "Cause",
            "Conséquence",
            "Conclusion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Si » imagine une situation : c'est une hypothèse."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p03",
      "order": 3,
      "title": "La problématique : la grille de lecture",
      "summary": "Sept items : thème, problème, thèse, antithèse, intention, enjeu, structure logique.",
      "conceptExplanation": "La problématique est l'ensemble des items de la grille de lecture. La grille de lecture est un questionnaire qui permet de les dégager.\n\n- THÈME : ce dont parle le texte. Question : de quoi parle le texte ? Indices : mots fréquents, phrases-résumé, exemples.\n- PROBLÈME : la question à laquelle l'auteur répond. Question : à quelle question répond l'auteur ?\n- THÈSE : la position de l'auteur, sa réponse au problème. Indices : phrases principales, formes d'insistance, locutions d'opinion.\n- ANTITHÈSE : le point de vue opposé ou différent de celui de l'auteur. Indices : connecteurs d'opposition, négations.\n- INTENTION : l'objectif IMMÉDIAT de l'auteur. Question : quel est son objectif immédiat ?\n- ENJEU : l'objectif LOINTAIN, la valeur ou l'intérêt du texte. Question : quel est l'intérêt du texte ?\n- STRUCTURE LOGIQUE : les différents mouvements du texte et leurs idées principales. Indices : connecteurs, paragraphes, enchaînement des arguments.\n\nAstuce : le problème est une QUESTION ; la thèse est une RÉPONSE (une affirmation) ; le thème est un GROUPE NOMINAL.",
      "keyRule": "Thème = de quoi ? Problème = quelle question ? Thèse = quelle réponse ? Antithèse = quelle position contraire ? Intention = but immédiat ; enjeu = intérêt lointain.",
      "formulas": [],
      "workedExample": {
        "title": "Distinguer thème, problème et thèse",
        "statement": "Pascal écrit : « La pensée fait la grandeur de l'homme. (…) L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant. » Dégage le thème, le problème et la thèse.",
        "methodSteps": [
          "Thème (groupe nominal) : la grandeur de l'homme.",
          "Problème (question) : qu'est-ce qui fait la grandeur de l'homme ?",
          "Thèse (réponse) : c'est la pensée qui fait la grandeur de l'homme."
        ],
        "conclusion": "Le thème annonce le sujet, le problème pose la question, la thèse y répond."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La grille de lecture",
          "stepTheme": "La grille de lecture",
          "stepBadge": "La grille de lecture",
          "paragraphText": "La grille de lecture compte sept items : thème, problème, thèse, antithèse, intention, enjeu, structure logique.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p03_q1",
            "type": "mcq",
            "prompt": "Lequel de ces éléments ne fait PAS partie de la grille de lecture d'un texte philosophique ?",
            "options": [
              "Le thème",
              "L'enjeu",
              "La biographie de l'auteur",
              "L'antithèse"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les sept items sont : thème, problème, thèse, antithèse, intention, enjeu, structure logique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le problème",
          "stepTheme": "Le problème",
          "stepBadge": "Le problème",
          "paragraphText": "Le problème est la question à laquelle l'auteur apporte une réponse. Il se formule donc comme une question.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p03_q2",
            "type": "mcq",
            "prompt": "Quelle question permet de trouver le problème d'un texte philosophique ?",
            "options": [
              "De quoi parle le texte ?",
              "À quelle question répond l'auteur ?",
              "Quel est l'intérêt du texte ?",
              "Combien de mouvements a le texte ?"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« De quoi parle le texte ? » donne le thème ; « quel est l'intérêt ? » donne l'enjeu."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La thèse",
          "stepTheme": "La thèse",
          "stepBadge": "La thèse",
          "paragraphText": "La thèse est la position de l'auteur : sa réponse au problème.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p03_q3",
            "type": "mcq",
            "prompt": "Pascal écrit : « La pensée fait la grandeur de l'homme. » Si le problème est « qu'est-ce qui fait la grandeur de l'homme ? », quelle est sa thèse ?",
            "options": [
              "La grandeur de l'homme",
              "L'homme est un roseau",
              "L'homme est misérable",
              "C'est la pensée qui fait la grandeur de l'homme"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La thèse répond au problème. « La grandeur de l'homme » n'est que le thème."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'antithèse",
          "stepTheme": "L'antithèse",
          "stepBadge": "L'antithèse",
          "paragraphText": "L'antithèse est le point de vue opposé ou différent de celui de l'auteur.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p03_q4",
            "type": "mcq",
            "prompt": "Épictète soutient que le philosophe et son disciple doivent prendre soin de leur tenue. Quelle est l'antithèse ?",
            "options": [
              "Le philosophe doit négliger son apparence",
              "Le philosophe doit être riche",
              "Le disciple doit imiter son maître",
              "La philosophie est inutile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'antithèse prend le contre-pied de la thèse."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Intention ou enjeu ?",
          "stepTheme": "Intention ou enjeu ?",
          "stepBadge": "Intention ou enjeu ?",
          "paragraphText": "L'intention est l'objectif IMMÉDIAT de l'auteur ; l'enjeu est son objectif LOINTAIN, la valeur ou l'intérêt du texte.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p03_q5",
            "type": "mcq",
            "prompt": "Dans la grille de lecture, comment appelle-t-on l'objectif lointain de l'auteur, la valeur ou l'intérêt que suscite le texte ?",
            "options": [
              "L'intention",
              "Le thème",
              "L'enjeu",
              "La thèse"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'intention est immédiate ; l'enjeu est lointain."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La structure logique",
          "stepTheme": "La structure logique",
          "stepBadge": "La structure logique",
          "paragraphText": "La structure logique identifie les mouvements du texte et énonce l'idée principale de chacun. On s'aide des connecteurs et des paragraphes.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p03_q6",
            "type": "mcq",
            "prompt": "Pour dégager la structure logique d'un texte philosophique, quels indices utilise-t-on surtout ?",
            "options": [
              "Le nom de l'éditeur",
              "Les connecteurs logiques et les paragraphes",
              "La date de publication",
              "Le nombre de mots difficiles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les connecteurs et les paragraphes montrent où commence chaque mouvement."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Question ou affirmation ?",
          "stepTheme": "Question ou affirmation ?",
          "stepBadge": "Question ou affirmation ?",
          "paragraphText": "Le thème est un groupe nominal, le problème une question, la thèse une affirmation.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p03_q7",
            "type": "mcq",
            "prompt": "Pour un texte de Pascal sur l'homme, « Qu'est-ce qui fait la grandeur de l'homme ? » est :",
            "options": [
              "Le thème",
              "La thèse",
              "L'enjeu",
              "Le problème"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est une question à laquelle l'auteur répond : c'est le problème."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p03_q1",
          "type": "mcq",
          "prompt": "Lequel de ces éléments ne fait PAS partie de la grille de lecture d'un texte philosophique ?",
          "options": [
            "Le thème",
            "L'enjeu",
            "La biographie de l'auteur",
            "L'antithèse"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les sept items sont : thème, problème, thèse, antithèse, intention, enjeu, structure logique."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p03_q2",
          "type": "mcq",
          "prompt": "Quelle question permet de trouver le problème d'un texte philosophique ?",
          "options": [
            "De quoi parle le texte ?",
            "À quelle question répond l'auteur ?",
            "Quel est l'intérêt du texte ?",
            "Combien de mouvements a le texte ?"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« De quoi parle le texte ? » donne le thème ; « quel est l'intérêt ? » donne l'enjeu."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p03_q3",
          "type": "mcq",
          "prompt": "Pascal écrit : « La pensée fait la grandeur de l'homme. » Si le problème est « qu'est-ce qui fait la grandeur de l'homme ? », quelle est sa thèse ?",
          "options": [
            "La grandeur de l'homme",
            "L'homme est un roseau",
            "L'homme est misérable",
            "C'est la pensée qui fait la grandeur de l'homme"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La thèse répond au problème. « La grandeur de l'homme » n'est que le thème."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p03_q4",
          "type": "mcq",
          "prompt": "Épictète soutient que le philosophe et son disciple doivent prendre soin de leur tenue. Quelle est l'antithèse ?",
          "options": [
            "Le philosophe doit négliger son apparence",
            "Le philosophe doit être riche",
            "Le disciple doit imiter son maître",
            "La philosophie est inutile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'antithèse prend le contre-pied de la thèse."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p03_q5",
          "type": "mcq",
          "prompt": "Dans la grille de lecture, comment appelle-t-on l'objectif lointain de l'auteur, la valeur ou l'intérêt que suscite le texte ?",
          "options": [
            "L'intention",
            "Le thème",
            "L'enjeu",
            "La thèse"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'intention est immédiate ; l'enjeu est lointain."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p03_q6",
          "type": "mcq",
          "prompt": "Pour dégager la structure logique d'un texte philosophique, quels indices utilise-t-on surtout ?",
          "options": [
            "Le nom de l'éditeur",
            "Les connecteurs logiques et les paragraphes",
            "La date de publication",
            "Le nombre de mots difficiles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les connecteurs et les paragraphes montrent où commence chaque mouvement."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p03_q7",
          "type": "mcq",
          "prompt": "Pour un texte de Pascal sur l'homme, « Qu'est-ce qui fait la grandeur de l'homme ? » est :",
          "options": [
            "Le thème",
            "La thèse",
            "L'enjeu",
            "Le problème"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est une question à laquelle l'auteur répond : c'est le problème."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p04",
      "order": 4,
      "title": "Dégager la problématique du texte d'Épictète",
      "summary": "Appliquer la grille de lecture à un texte, en s'appuyant sur des indices.",
      "conceptExplanation": "Texte (Épictète, Maximes et Pensées) :\n« Si un philosophe malpropre, négligé et horrible comme un criminel qui sort du cachot, me débite de belles maximes, comment m'attirerait-il ? Comment me fera-t-il aimer la philosophie qui laisse un homme en cet état ? Je ne puis me décider à l'entendre, et pour rien au monde je ne m'attacherais à lui. Ayons donc de la propreté et de la décence.\nJe dis la même chose des disciples. Pour moi, j'aime mieux qu'un jeune homme qui veut s'adonner à la philosophie vienne m'entendre bien propre et mis décemment, que s'il y venait malpropre, les cheveux gras et mal peignés. Car par là je juge qu'il a quelque idée du beau et qu'il se porte à ce qui est séant et honnête. Il a soin de la beauté qu'on lui fera connaître, de cette beauté intérieure qui consiste à faire usage de sa raison, et auprès de laquelle la beauté du corps n'est que laideur. »\n\nProblématique (chaque item s'appuie sur des indices du texte) :\n- thème : la tenue du philosophe et de son disciple (indices : « philosophe malpropre », « disciples », « malpropre ») ;\n- problème : le philosophe et son disciple doivent-ils négliger leur tenue ? (indices : « comment m'attirerait-il ? », « comment me fera-t-il aimer la philosophie… ? ») ;\n- thèse : le philosophe et son disciple doivent prendre soin de leur corps et de leur âme (indice : « Ayons donc de la propreté et de la décence ») ;\n- antithèse : le philosophe doit négliger son apparence ;\n- intention : amener le philosophe à soigner son image (le ton est ironique et polémique) ;\n- enjeu : la valeur de la philosophie ;\n- structure logique : deux mouvements.\n  1er mouvement (L1-L7, « Si un philosophe… mal peignés ») : la nécessité de la décence chez le philosophe et son disciple.\n  2e mouvement (L7-L12, « Car par là je juge… n'est que laideur ») : la primauté de la beauté intérieure sur la beauté du corps.",
      "keyRule": "Chaque item de la problématique se justifie par des indices relevés dans le texte, avec leurs lignes.",
      "formulas": [],
      "workedExample": {
        "title": "Trouver la thèse par un indice",
        "statement": "Dans le texte d'Épictète, quelle phrase permet de trouver la thèse ?",
        "methodSteps": [
          "On cherche une phrase d'insistance, souvent introduite par une conséquence.",
          "« Ayons donc de la propreté et de la décence » (L4) : c'est une exhortation, introduite par « donc »."
        ],
        "conclusion": "Thèse : le philosophe et son disciple doivent prendre soin de leur corps et de leur âme."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Le thème",
          "stepTheme": "Le thème",
          "stepBadge": "Le thème",
          "paragraphText": "Les mots qui reviennent (« philosophe malpropre », « disciples », « malpropre ») indiquent le thème.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p04_q1",
            "type": "mcq",
            "prompt": "Épictète critique « un philosophe malpropre, négligé » et veut que le disciple vienne « bien propre et mis décemment ». Quel est le thème du texte ?",
            "options": [
              "La richesse du philosophe",
              "La tenue du philosophe et de son disciple",
              "L'histoire de la philosophie",
              "La prison"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte parle de l'apparence du philosophe et de son élève."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le problème",
          "stepTheme": "Le problème",
          "stepBadge": "Le problème",
          "paragraphText": "Les questions « comment m'attirerait-il ? » et « comment me fera-t-il aimer la philosophie… ? » orientent vers le problème.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p04_q2",
            "type": "mcq",
            "prompt": "Épictète se demande comment un philosophe malpropre pourrait faire aimer la philosophie. Quel est le problème du texte ?",
            "options": [
              "Le philosophe et son disciple doivent-ils négliger leur tenue ?",
              "Qu'est-ce que la philosophie ?",
              "Faut-il aller en prison ?",
              "La pensée fait-elle la grandeur de l'homme ?"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le problème est la question de la tenue du philosophe et du disciple."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La thèse",
          "stepTheme": "La thèse",
          "stepBadge": "La thèse",
          "paragraphText": "« Ayons donc de la propreté et de la décence » (L4) est l'indice principal de la thèse.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p04_q3",
            "type": "mcq",
            "prompt": "Épictète conclut : « Ayons donc de la propreté et de la décence », puis loue la « beauté intérieure ». Quelle est sa thèse ?",
            "options": [
              "Le philosophe doit être riche",
              "Seule la beauté du corps compte",
              "Le philosophe et son disciple doivent prendre soin de leur corps et de leur âme",
              "La philosophie rend sale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il demande la propreté du corps et place au-dessus la beauté de l'âme."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'intention",
          "stepTheme": "L'intention",
          "stepBadge": "L'intention",
          "paragraphText": "Le ton est ironique et polémique (« horrible comme un criminel qui sort du cachot ») : l'auteur veut faire réagir le philosophe négligé.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p04_q4",
            "type": "mcq",
            "prompt": "Épictète compare le philosophe sale à « un criminel qui sort du cachot » et refuse de l'écouter. Quel ton emploie-t-il ?",
            "options": [
              "Un ton neutre et scientifique",
              "Un ton ironique et polémique",
              "Un ton triste et nostalgique",
              "Un ton comique et léger"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La comparaison moqueuse et le refus d'écouter montrent l'ironie et la polémique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'enjeu",
          "stepTheme": "L'enjeu",
          "stepBadge": "L'enjeu",
          "paragraphText": "Si le philosophe repousse les gens, c'est la philosophie elle-même qui perd de sa valeur : l'enjeu est la valeur de la philosophie.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p04_q5",
            "type": "mcq",
            "prompt": "Épictète craint qu'un philosophe malpropre ne fasse pas « aimer la philosophie ». Quel est l'enjeu de son texte ?",
            "options": [
              "La mode vestimentaire",
              "La santé publique",
              "La valeur de la philosophie",
              "La justice pénale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Au-delà de la tenue, c'est l'image et la valeur de la philosophie qui sont en jeu."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Deux mouvements",
          "stepTheme": "Deux mouvements",
          "stepBadge": "Deux mouvements",
          "paragraphText": "1er mouvement (L1-L7) : la nécessité de la décence. 2e mouvement (L7-L12, « Car par là je juge… ») : la primauté de la beauté intérieure.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p04_q6",
            "type": "mcq",
            "prompt": "Le 2e mouvement du texte d'Épictète commence par « Car par là je juge qu'il a quelque idée du beau » et finit par « la beauté du corps n'est que laideur ». Quelle est son idée principale ?",
            "options": [
              "La nécessité de la décence",
              "Le philosophe est un criminel",
              "La primauté de la beauté intérieure sur la beauté du corps",
              "Les disciples doivent obéir"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce mouvement place la beauté de la raison au-dessus de celle du corps."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Citer avec les lignes",
          "stepTheme": "Citer avec les lignes",
          "stepBadge": "Citer avec les lignes",
          "paragraphText": "Un item sans indice tiré du texte n'est pas justifié : on cite le passage entre guillemets avec sa ligne.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p04_q7",
            "type": "mcq",
            "prompt": "Pour justifier la thèse d'Épictète (le philosophe doit soigner sa tenue), quelle est la meilleure façon de citer un indice ?",
            "options": [
              "Épictète aime la propreté.",
              "« Ayons donc de la propreté et de la décence » (L4)",
              "Je pense qu'il a raison.",
              "Le texte est intéressant."
            ],
            "correctAnswerIndex": 1,
            "explanation": "On cite exactement le texte, entre guillemets, avec la ligne."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p04_q1",
          "type": "mcq",
          "prompt": "Épictète critique « un philosophe malpropre, négligé » et veut que le disciple vienne « bien propre et mis décemment ». Quel est le thème du texte ?",
          "options": [
            "La richesse du philosophe",
            "La tenue du philosophe et de son disciple",
            "L'histoire de la philosophie",
            "La prison"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte parle de l'apparence du philosophe et de son élève."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p04_q2",
          "type": "mcq",
          "prompt": "Épictète se demande comment un philosophe malpropre pourrait faire aimer la philosophie. Quel est le problème du texte ?",
          "options": [
            "Le philosophe et son disciple doivent-ils négliger leur tenue ?",
            "Qu'est-ce que la philosophie ?",
            "Faut-il aller en prison ?",
            "La pensée fait-elle la grandeur de l'homme ?"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le problème est la question de la tenue du philosophe et du disciple."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p04_q3",
          "type": "mcq",
          "prompt": "Épictète conclut : « Ayons donc de la propreté et de la décence », puis loue la « beauté intérieure ». Quelle est sa thèse ?",
          "options": [
            "Le philosophe doit être riche",
            "Seule la beauté du corps compte",
            "Le philosophe et son disciple doivent prendre soin de leur corps et de leur âme",
            "La philosophie rend sale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il demande la propreté du corps et place au-dessus la beauté de l'âme."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p04_q4",
          "type": "mcq",
          "prompt": "Épictète compare le philosophe sale à « un criminel qui sort du cachot » et refuse de l'écouter. Quel ton emploie-t-il ?",
          "options": [
            "Un ton neutre et scientifique",
            "Un ton ironique et polémique",
            "Un ton triste et nostalgique",
            "Un ton comique et léger"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La comparaison moqueuse et le refus d'écouter montrent l'ironie et la polémique."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p04_q5",
          "type": "mcq",
          "prompt": "Épictète craint qu'un philosophe malpropre ne fasse pas « aimer la philosophie ». Quel est l'enjeu de son texte ?",
          "options": [
            "La mode vestimentaire",
            "La santé publique",
            "La valeur de la philosophie",
            "La justice pénale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Au-delà de la tenue, c'est l'image et la valeur de la philosophie qui sont en jeu."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p04_q6",
          "type": "mcq",
          "prompt": "Le 2e mouvement du texte d'Épictète commence par « Car par là je juge qu'il a quelque idée du beau » et finit par « la beauté du corps n'est que laideur ». Quelle est son idée principale ?",
          "options": [
            "La nécessité de la décence",
            "Le philosophe est un criminel",
            "La primauté de la beauté intérieure sur la beauté du corps",
            "Les disciples doivent obéir"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce mouvement place la beauté de la raison au-dessus de celle du corps."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p04_q7",
          "type": "mcq",
          "prompt": "Pour justifier la thèse d'Épictète (le philosophe doit soigner sa tenue), quelle est la meilleure façon de citer un indice ?",
          "options": [
            "Épictète aime la propreté.",
            "« Ayons donc de la propreté et de la décence » (L4)",
            "Je pense qu'il a raison.",
            "Le texte est intéressant."
          ],
          "correctAnswerIndex": 1,
          "explanation": "On cite exactement le texte, entre guillemets, avec la ligne."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p05",
      "order": 5,
      "title": "L'explication méthodique",
      "summary": "Clarifier dans l'ordre les idées principales, les idées secondaires, les illustrations, les concepts et les allusions.",
      "conceptExplanation": "L'explication méthodique consiste à clarifier, de manière ordonnée et cohérente :\n- les idées principales : les idées essentielles de chaque mouvement ;\n- les idées secondaires : les arguments qui soutiennent l'idée principale d'un mouvement ;\n- les illustrations : exemples, références ou données qui mettent l'idée en évidence ;\n- les concepts : les termes qui renvoient à une ou plusieurs idées de l'auteur ;\n- les allusions : sous-entendus ou présupposés, relatifs à une personne ou à une chose, qui ne sont pas formulés explicitement.\n\nExemple (Épictète) :\n- 1er mouvement, idée principale : la nécessité de la décence chez le philosophe et son disciple.\n  Idées secondaires : identifié à un criminel, le philosophe malpropre inspire la répugnance ; exhortation à la propreté et à la décence.\n- 2e mouvement, idée principale : la primauté de la beauté intérieure sur la beauté du corps.\n  Idées secondaires : la beauté du corps suppose la beauté intérieure ; la beauté intérieure, qui consiste à faire usage de sa raison, surpasse la beauté du corps.\n- Illustration : « comme un criminel qui sort du cachot » ; « les cheveux gras et mal peignés ».\n- Concept : la « beauté intérieure ».",
      "keyRule": "Idée principale = idée centrale d'un mouvement ; idées secondaires = ses arguments ; illustrations = exemples qui la rendent visible.",
      "formulas": [],
      "workedExample": {
        "title": "Les idées secondaires du 1er mouvement",
        "statement": "1er mouvement d'Épictète : « Si un philosophe malpropre, négligé et horrible comme un criminel (…) Ayons donc de la propreté et de la décence. » Dégage les idées secondaires.",
        "methodSteps": [
          "Premier argument : comparé à un criminel, le philosophe malpropre inspire la répugnance.",
          "Second argument : l'auteur exhorte à la propreté et à la décence."
        ],
        "conclusion": "Ces deux idées soutiennent l'idée principale : la nécessité de la décence."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'idée principale",
          "stepTheme": "L'idée principale",
          "stepBadge": "L'idée principale",
          "paragraphText": "Les idées principales sont les idées essentielles de chaque mouvement du texte.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p05_q1",
            "type": "mcq",
            "prompt": "Dans l'explication méthodique d'un texte philosophique, comment appelle-t-on l'idée essentielle d'un mouvement ?",
            "options": [
              "Une allusion",
              "L'idée principale",
              "Une illustration",
              "L'antithèse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque mouvement a une idée principale."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les idées secondaires",
          "stepTheme": "Les idées secondaires",
          "stepBadge": "Les idées secondaires",
          "paragraphText": "Les idées secondaires sont les arguments qui soutiennent l'idée principale d'un mouvement.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p05_q2",
            "type": "mcq",
            "prompt": "Que sont les idées secondaires d'un mouvement de texte ?",
            "options": [
              "Des idées sans importance",
              "Les mots difficiles",
              "Les arguments qui soutiennent l'idée principale",
              "Les critiques des autres auteurs"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Elles servent d'arguments à l'idée principale."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Un argument d'Épictète",
          "stepTheme": "Un argument d'Épictète",
          "stepBadge": "Un argument d'Épictète",
          "paragraphText": "Comparé à « un criminel qui sort du cachot », le philosophe malpropre inspire la répugnance : c'est une idée secondaire du 1er mouvement.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p05_q3",
            "type": "mcq",
            "prompt": "Le 1er mouvement d'Épictète défend la nécessité de la décence chez le philosophe. Laquelle de ces idées en est une idée secondaire ?",
            "options": [
              "La beauté intérieure surpasse la beauté du corps",
              "Identifié à un criminel, le philosophe malpropre inspire la répugnance",
              "La philosophie est un débat sans fin",
              "La pensée fait la grandeur de l'homme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'argument qui montre pourquoi la décence est nécessaire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les illustrations",
          "stepTheme": "Les illustrations",
          "stepBadge": "Les illustrations",
          "paragraphText": "Les illustrations sont des exemples, références ou données par lesquels l'auteur met en évidence son idée.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p05_q4",
            "type": "mcq",
            "prompt": "Épictète décrit un disciple qui viendrait « malpropre, les cheveux gras et mal peignés ». Qu'est-ce que ce passage dans l'explication méthodique ?",
            "options": [
              "Une illustration",
              "Un concept",
              "La thèse",
              "Le problème"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est un exemple concret qui rend l'idée visible."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les concepts",
          "stepTheme": "Les concepts",
          "stepBadge": "Les concepts",
          "paragraphText": "Les concepts sont des termes qui renvoient à une ou plusieurs idées de l'auteur.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p05_q5",
            "type": "mcq",
            "prompt": "Dans le texte d'Épictète, lequel de ces termes est un concept qui porte une idée de l'auteur ?",
            "options": [
              "« cachot »",
              "« peignés »",
              "« beauté intérieure »",
              "« jeune homme »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La « beauté intérieure » résume l'idée d'Épictète : la vertu de la raison."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Les allusions",
          "stepTheme": "Les allusions",
          "stepBadge": "Les allusions",
          "paragraphText": "Les allusions sont des sous-entendus ou des présupposés relatifs à une personne ou à une chose, sans être explicitement formulés.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p05_q6",
            "type": "mcq",
            "prompt": "Dans l'explication méthodique, comment appelle-t-on un sous-entendu qui vise une personne ou une chose sans la nommer clairement ?",
            "options": [
              "Une illustration",
              "Une idée secondaire",
              "Un connecteur",
              "Une allusion"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'allusion fait référence à quelque chose sans le dire explicitement."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Le 2e mouvement",
          "stepTheme": "Le 2e mouvement",
          "stepBadge": "Le 2e mouvement",
          "paragraphText": "Idée principale : la primauté de la beauté intérieure. Idées secondaires : la beauté du corps suppose la beauté intérieure ; la beauté intérieure surpasse celle du corps.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p05_q7",
            "type": "mcq",
            "prompt": "Épictète écrit que la beauté intérieure « consiste à faire usage de sa raison » et qu'auprès d'elle « la beauté du corps n'est que laideur ». Quelle idée secondaire en tire-t-on ?",
            "options": [
              "La beauté intérieure surpasse la beauté du corps",
              "La beauté du corps est la plus importante",
              "La raison est inutile",
              "Le philosophe doit être malpropre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comparée à la beauté de la raison, celle du corps ne vaut rien."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p05_q1",
          "type": "mcq",
          "prompt": "Dans l'explication méthodique d'un texte philosophique, comment appelle-t-on l'idée essentielle d'un mouvement ?",
          "options": [
            "Une allusion",
            "L'idée principale",
            "Une illustration",
            "L'antithèse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque mouvement a une idée principale."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p05_q2",
          "type": "mcq",
          "prompt": "Que sont les idées secondaires d'un mouvement de texte ?",
          "options": [
            "Des idées sans importance",
            "Les mots difficiles",
            "Les arguments qui soutiennent l'idée principale",
            "Les critiques des autres auteurs"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Elles servent d'arguments à l'idée principale."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p05_q3",
          "type": "mcq",
          "prompt": "Le 1er mouvement d'Épictète défend la nécessité de la décence chez le philosophe. Laquelle de ces idées en est une idée secondaire ?",
          "options": [
            "La beauté intérieure surpasse la beauté du corps",
            "Identifié à un criminel, le philosophe malpropre inspire la répugnance",
            "La philosophie est un débat sans fin",
            "La pensée fait la grandeur de l'homme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'argument qui montre pourquoi la décence est nécessaire."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p05_q4",
          "type": "mcq",
          "prompt": "Épictète décrit un disciple qui viendrait « malpropre, les cheveux gras et mal peignés ». Qu'est-ce que ce passage dans l'explication méthodique ?",
          "options": [
            "Une illustration",
            "Un concept",
            "La thèse",
            "Le problème"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est un exemple concret qui rend l'idée visible."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p05_q5",
          "type": "mcq",
          "prompt": "Dans le texte d'Épictète, lequel de ces termes est un concept qui porte une idée de l'auteur ?",
          "options": [
            "« cachot »",
            "« peignés »",
            "« beauté intérieure »",
            "« jeune homme »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La « beauté intérieure » résume l'idée d'Épictète : la vertu de la raison."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p05_q6",
          "type": "mcq",
          "prompt": "Dans l'explication méthodique, comment appelle-t-on un sous-entendu qui vise une personne ou une chose sans la nommer clairement ?",
          "options": [
            "Une illustration",
            "Une idée secondaire",
            "Un connecteur",
            "Une allusion"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'allusion fait référence à quelque chose sans le dire explicitement."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p05_q7",
          "type": "mcq",
          "prompt": "Épictète écrit que la beauté intérieure « consiste à faire usage de sa raison » et qu'auprès d'elle « la beauté du corps n'est que laideur ». Quelle idée secondaire en tire-t-on ?",
          "options": [
            "La beauté intérieure surpasse la beauté du corps",
            "La beauté du corps est la plus importante",
            "La raison est inutile",
            "Le philosophe doit être malpropre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comparée à la beauté de la raison, celle du corps ne vaut rien."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p06",
      "order": 6,
      "title": "La critique du texte",
      "summary": "Évaluer l'intérêt du texte : critique interne, puis critique externe.",
      "conceptExplanation": "La critique du texte est l'évaluation de l'intérêt du texte. Elle comporte deux parties.\n\n1. La critique interne : apprécier le texte en lui-même, c'est-à-dire examiner :\n- sa cohérence interne (les idées s'enchaînent-elles sans contradiction ?) ;\n- l'accord entre la façon d'argumenter et l'intention de l'auteur.\n\n2. La critique externe : examiner la position de l'auteur en la confrontant :\n- à celle d'autres auteurs (qui l'appuient ou s'y opposent) ;\n- au vécu (les faits, l'expérience).\n\nExemple : texte de Pascal (Pensées) : « La pensée fait la grandeur de l'homme (…) L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant. »\n- Critique interne : l'argument du roseau (fragile mais pensant) illustre bien la thèse ; le texte est cohérent.\n- Critique externe : Descartes appuie Pascal (« je pense, donc je suis ») ; Freud nuance cette thèse, car l'homme est aussi déterminé par l'inconscient.\n\nAutre texte d'entraînement : Descartes, Préface aux Principes de la philosophie : « c'est proprement avoir les yeux fermés sans tâcher jamais de les ouvrir, que de vivre sans philosopher ». Thème : l'utilité de la philosophie ; thèse : philosopher, c'est se conduire par soi-même, et c'est le plus grand bien d'un État.",
      "keyRule": "Critique interne : le texte en lui-même (cohérence). Critique externe : le texte face aux autres auteurs et au vécu.",
      "formulas": [],
      "workedExample": {
        "title": "Critiquer Pascal",
        "statement": "Pascal soutient que « la pensée fait la grandeur de l'homme ». Fais une critique externe en une phrase.",
        "methodSteps": [
          "Un appui : Descartes définit l'homme comme une chose qui pense.",
          "Une limite : pour Freud, l'homme est aussi conduit par l'inconscient."
        ],
        "conclusion": "La thèse de Pascal est forte, mais la psychanalyse montre que la pensée consciente ne dit pas tout de l'homme."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Évaluer l'intérêt",
          "stepTheme": "Évaluer l'intérêt",
          "stepBadge": "Évaluer l'intérêt",
          "paragraphText": "La critique du texte est l'évaluation de son intérêt. Elle comporte une critique interne et une critique externe.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p06_q1",
            "type": "mcq",
            "prompt": "Quelles sont les deux parties de la critique d'un texte philosophique ?",
            "options": [
              "Le thème et le problème",
              "La critique interne et la critique externe",
              "L'introduction et la conclusion",
              "La thèse et l'antithèse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On juge d'abord le texte en lui-même, puis on le confronte à d'autres points de vue."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La critique interne",
          "stepTheme": "La critique interne",
          "stepBadge": "La critique interne",
          "paragraphText": "La critique interne apprécie le texte en lui-même : sa cohérence et l'accord entre son argumentation et l'intention de l'auteur.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p06_q2",
            "type": "mcq",
            "prompt": "Qu'examine-t-on dans la critique interne d'un texte philosophique ?",
            "options": [
              "La cohérence du texte en lui-même",
              "Les positions des autres philosophes",
              "La vie de l'auteur",
              "Le nombre de lignes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On regarde si les arguments du texte tiennent ensemble."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La critique externe",
          "stepTheme": "La critique externe",
          "stepBadge": "La critique externe",
          "paragraphText": "La critique externe confronte la position de l'auteur à celle d'autres auteurs et au vécu.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p06_q3",
            "type": "mcq",
            "prompt": "Un élève compare la thèse de Pascal (« la pensée fait la grandeur de l'homme ») à la psychanalyse de Freud. Quelle partie de la critique fait-il ?",
            "options": [
              "La critique interne",
              "L'explication littérale",
              "La critique externe",
              "La structure logique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il confronte l'auteur à un autre penseur : c'est la critique externe."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le roseau pensant",
          "stepTheme": "Le roseau pensant",
          "stepBadge": "Le roseau pensant",
          "paragraphText": "Pascal : « L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant. » L'image montre à la fois la faiblesse et la grandeur de l'homme.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p06_q4",
            "type": "mcq",
            "prompt": "Pascal écrit : « L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant. » Que veut-il montrer ?",
            "options": [
              "Que l'homme est une plante",
              "Que l'homme est fragile mais grand par sa pensée",
              "Que la nature est plus forte que tout",
              "Que l'homme doit vivre au bord de l'eau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le roseau est fragile, mais la pensée fait la grandeur de l'homme."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un appui",
          "stepTheme": "Un appui",
          "stepBadge": "Un appui",
          "paragraphText": "Dans la critique externe, on cherche des auteurs qui appuient la thèse, puis d'autres qui la nuancent ou la contestent.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p06_q5",
            "type": "mcq",
            "prompt": "Pascal soutient que la pensée fait la grandeur de l'homme. Quel auteur peut APPUYER cette thèse dans la critique externe ?",
            "options": [
              "Descartes, pour qui l'homme est une chose qui pense",
              "Un auteur qui nie toute pensée chez l'homme",
              "Épictète, qui parle de la tenue vestimentaire",
              "Aucun auteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Descartes (« je pense, donc je suis ») place aussi la pensée au cœur de l'homme."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'utilité de la philosophie",
          "stepTheme": "L'utilité de la philosophie",
          "stepBadge": "L'utilité de la philosophie",
          "paragraphText": "Descartes (Préface aux Principes de la philosophie) : « c'est proprement avoir les yeux fermés sans tâcher jamais de les ouvrir, que de vivre sans philosopher ».",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p06_q6",
            "type": "mcq",
            "prompt": "Descartes écrit : « c'est proprement avoir les yeux fermés sans tâcher jamais de les ouvrir, que de vivre sans philosopher ». Quel est le thème de ce texte ?",
            "options": [
              "La beauté des couleurs",
              "La cécité",
              "L'utilité de la philosophie",
              "La politique de l'État"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les yeux fermés sont une image : le texte parle de l'utilité de philosopher."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Juger, pas résumer",
          "stepTheme": "Juger, pas résumer",
          "stepBadge": "Juger, pas résumer",
          "paragraphText": "La critique n'est pas un résumé : elle évalue l'intérêt et les limites de la thèse.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p06_q7",
            "type": "mcq",
            "prompt": "Pour la critique du texte de Pascal sur la pensée, laquelle de ces phrases est une vraie critique, et non un simple résumé ?",
            "options": [
              "Pascal dit que l'homme est un roseau pensant.",
              "Le texte parle de la pensée.",
              "Pascal écrit dans les Pensées.",
              "La thèse est forte, mais Freud montre que l'homme est aussi conduit par l'inconscient."
            ],
            "correctAnswerIndex": 3,
            "explanation": "Elle évalue la thèse en la confrontant à un autre point de vue."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p06_q1",
          "type": "mcq",
          "prompt": "Quelles sont les deux parties de la critique d'un texte philosophique ?",
          "options": [
            "Le thème et le problème",
            "La critique interne et la critique externe",
            "L'introduction et la conclusion",
            "La thèse et l'antithèse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On juge d'abord le texte en lui-même, puis on le confronte à d'autres points de vue."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p06_q2",
          "type": "mcq",
          "prompt": "Qu'examine-t-on dans la critique interne d'un texte philosophique ?",
          "options": [
            "La cohérence du texte en lui-même",
            "Les positions des autres philosophes",
            "La vie de l'auteur",
            "Le nombre de lignes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On regarde si les arguments du texte tiennent ensemble."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p06_q3",
          "type": "mcq",
          "prompt": "Un élève compare la thèse de Pascal (« la pensée fait la grandeur de l'homme ») à la psychanalyse de Freud. Quelle partie de la critique fait-il ?",
          "options": [
            "La critique interne",
            "L'explication littérale",
            "La critique externe",
            "La structure logique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il confronte l'auteur à un autre penseur : c'est la critique externe."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p06_q4",
          "type": "mcq",
          "prompt": "Pascal écrit : « L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant. » Que veut-il montrer ?",
          "options": [
            "Que l'homme est une plante",
            "Que l'homme est fragile mais grand par sa pensée",
            "Que la nature est plus forte que tout",
            "Que l'homme doit vivre au bord de l'eau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le roseau est fragile, mais la pensée fait la grandeur de l'homme."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p06_q5",
          "type": "mcq",
          "prompt": "Pascal soutient que la pensée fait la grandeur de l'homme. Quel auteur peut APPUYER cette thèse dans la critique externe ?",
          "options": [
            "Descartes, pour qui l'homme est une chose qui pense",
            "Un auteur qui nie toute pensée chez l'homme",
            "Épictète, qui parle de la tenue vestimentaire",
            "Aucun auteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Descartes (« je pense, donc je suis ») place aussi la pensée au cœur de l'homme."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p06_q6",
          "type": "mcq",
          "prompt": "Descartes écrit : « c'est proprement avoir les yeux fermés sans tâcher jamais de les ouvrir, que de vivre sans philosopher ». Quel est le thème de ce texte ?",
          "options": [
            "La beauté des couleurs",
            "La cécité",
            "L'utilité de la philosophie",
            "La politique de l'État"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les yeux fermés sont une image : le texte parle de l'utilité de philosopher."
        },
        {
          "id": "premiere_philo_methodologie_l01_methode_lecture_texte_p06_q7",
          "type": "mcq",
          "prompt": "Pour la critique du texte de Pascal sur la pensée, laquelle de ces phrases est une vraie critique, et non un simple résumé ?",
          "options": [
            "Pascal dit que l'homme est un roseau pensant.",
            "Le texte parle de la pensée.",
            "Pascal écrit dans les Pensées.",
            "La thèse est forte, mais Freud montre que l'homme est aussi conduit par l'inconscient."
          ],
          "correctAnswerIndex": 3,
          "explanation": "Elle évalue la thèse en la confrontant à un autre point de vue."
        }
      ]
    }
  ]
};
