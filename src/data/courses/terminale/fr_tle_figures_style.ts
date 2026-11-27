import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Les figures de style » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=543
export const FR_TLE_PL_L05_FIGURES_STYLE: CurriculumChapter = {
  "id": "terminale_a1_francais_pl_l05_figures_style",
  "subjectId": "francais",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  "order": 5,
  "title": "Leçon 5 : Les figures de style",
  "summary": "Séduits par l'art oratoire d'un écrivain invité, les élèves de Terminale s'organisent, à partir de textes courts, pour identifier, analyser et utiliser en contexte les figures de style qui rendent le discours plus expressif.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=543",
  "points": [
    {
      "id": "terminale_a1_francais_pl_l05_figures_style_p01",
      "order": 1,
      "title": "Les figures d'analogie et de substitution",
      "summary": "Définir la figure de style et reconnaître métaphore, allégorie, métonymie et synecdoque.",
      "conceptExplanation": "Une figure de style est un procédé qui consiste à rendre ce que l'on veut dire plus expressif, plus impressionnant, plus convaincant, plus séduisant. Elle est utilisée en littérature, dans les beaux discours mais aussi dans le langage courant.\nOn dit qu'il y a figure par analogie lorsque l'écrivain crée des images en établissant un rapprochement entre deux réalités. La métaphore est une comparaison sans outil de comparaison, dont les termes sont pris au sens figuré. L'allégorie est la personnification d'une idée abstraite ; elle se reconnaît très souvent par l'emploi d'une majuscule.\nLes figures de substitution comportent deux termes qui peuvent se substituer l'un à l'autre. La métonymie remplace un mot par un autre mot selon un lien logique, par une relation analogique. La synecdoque consiste à désigner la partie pour le tout et le tout pour la partie, la matière pour l'objet et le particulier pour le général.",
      "keyRule": "Analogie : l'image rapproche deux réalités (métaphore sans outil de comparaison, allégorie avec majuscule) ; substitution : un terme en remplace un autre lié logiquement (métonymie, synecdoque).",
      "formulas": [],
      "workedExample": {
        "title": "Analyser une métaphore du résumé",
        "statement": "Analyse la figure dans l'exemple du résumé : « Cette faucille d'or dans le champ des étoiles ».",
        "methodSteps": [
          "On repère une image : la lune est présentée comme une faucille d'or et le ciel comme un champ.",
          "Aucun outil de comparaison (comme, tel, semblable à) n'apparaît dans l'expression.",
          "Les termes sont pris au sens figuré : la faucille désigne la lune et le champ désigne le ciel.",
          "Il s'agit donc d'une métaphore, comparaison sans outil de comparaison."
        ],
        "conclusion": "Sans outil de comparaison et avec des termes au sens figuré, l'expression est une métaphore."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La figure de style",
          "stepTheme": "La figure de style",
          "stepBadge": "La figure de style",
          "paragraphText": "• Figure de style : procédé qui consiste à rendre ce que l'on veut dire plus expressif, plus impressionnant, plus convaincant, plus séduisant.\nElle est utilisée en littérature, dans les beaux discours mais aussi dans le langage courant.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p01_q1",
            "type": "mcq",
            "prompt": "Une figure de style est un procédé qui sert à :",
            "options": [
              "Rendre le propos plus expressif, impressionnant, convaincant et séduisant",
              "Supprimer toutes les images d'un texte",
              "Rendre le propos plus neutre et plus plat",
              "Remplacer la grammaire dans un discours"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du résumé : la figure rend ce que l'on veut dire plus expressif, plus impressionnant, plus convaincant, plus séduisant."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La métaphore",
          "stepTheme": "La métaphore",
          "stepBadge": "La métaphore",
          "paragraphText": "• Métaphore : comparaison sans outil de comparaison, dont les termes sont pris au sens figuré.\nExemple du résumé : « Cette faucille d'or dans le champ des étoiles », où la faucille désigne la lune et le champ le ciel.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p01_q2",
            "type": "mcq",
            "prompt": "La métaphore se définit comme :",
            "options": [
              "Une comparaison avec l'outil comme",
              "La personnification d'une idée abstraite",
              "Une comparaison sans outil de comparaison, au sens figuré",
              "Le remplacement d'un mot par un mot lié logiquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé définit la métaphore comme une comparaison sans outil de comparaison, les termes étant pris au sens figuré."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'allégorie",
          "stepTheme": "L'allégorie",
          "stepBadge": "L'allégorie",
          "paragraphText": "• Allégorie : personnification d'une idée abstraite.\nElle se reconnaît très souvent par l'emploi d'une majuscule, comme dans « Hiver, vous n'êtes qu'un vilain ! » de Charles d'Orléans, où Hiver et Eté reçoivent des caractères humains : vilain et gentil.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p01_q3",
            "type": "mcq",
            "prompt": "On reconnaît souvent l'allégorie à :",
            "options": [
              "L'absence totale de majuscule",
              "L'emploi d'une majuscule et l'attribution de caractères humains à une idée abstraite",
              "La répétition d'un mot en début de phrase",
              "L'exagération d'une idée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé précise que l'allégorie, personnification d'une idée abstraite, se reconnaît très souvent à la majuscule, avec des caractères humains comme vilain et gentil."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La métonymie",
          "stepTheme": "La métonymie",
          "stepBadge": "La métonymie",
          "paragraphText": "• Métonymie : figure de substitution qui remplace un mot par un autre mot selon un lien logique, par une relation analogique.\nExemple du résumé : « La table douze s'impatiente », où il faut entendre la personne assise à la table numéro 12, et non la table elle-même.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p01_q4",
            "type": "mcq",
            "prompt": "Dans « La table douze s'impatiente », la métonymie désigne :",
            "options": [
              "La table elle-même qui bouge",
              "Un plat servi à cette table",
              "Un numéro écrit sur le mur",
              "La personne assise à la table numéro 12"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé explique l'exemple : c'est la personne assise à la table numéro 12 qui s'impatiente, le mot table la remplace par un lien logique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La synecdoque",
          "stepTheme": "La synecdoque",
          "stepBadge": "La synecdoque",
          "paragraphText": "• Synecdoque : figure qui consiste à désigner la partie pour le tout et le tout pour la partie, la matière pour l'objet et le particulier pour le général.\nExemple du résumé : « La France a gagné par 2 à 0 contre l'Italie », où le pays désigne son équipe.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p01_q5",
            "type": "mcq",
            "prompt": "La synecdoque consiste à désigner :",
            "options": [
              "Deux termes contradictoires dans une même expression",
              "La partie pour le tout et le tout pour la partie",
              "Une idée par son contraire atténué",
              "Un mot répété en début de vers"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du résumé : partie pour le tout, tout pour la partie, matière pour l'objet, particulier pour le général."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Métaphore ou allégorie",
          "stepTheme": "Métaphore ou allégorie",
          "stepBadge": "Métaphore ou allégorie",
          "paragraphText": "Piège : confondre métaphore et allégorie dans « Et tes mains, feuilles de l'automne », phrase de la situation d'évaluation de la séance 1.\nLes mains sont assimilées à des feuilles sans outil de comparaison : c'est une métaphore, et non une allégorie, car aucune idée abstraite n'est personnifiée avec une majuscule.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p01_q6",
            "type": "mcq",
            "prompt": "Dans « Et tes mains, feuilles de l'automne », la figure est :",
            "options": [
              "Une allégorie",
              "Une métonymie",
              "Une métaphore",
              "Une synecdoque"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les mains sont comparées à des feuilles de l'automne sans outil de comparaison et au sens figuré : c'est une métaphore."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Une décision de l'Elysée",
          "stepTheme": "Une décision de l'Elysée",
          "stepBadge": "Une décision de l'Elysée",
          "paragraphText": "Exemple tiré de la situation d'évaluation de la séance 1 : « C'est une décision de l'Elysée ».\nLe lieu, l'Elysée, remplace les personnes qui y décident : un terme en substitue un autre selon un lien logique, c'est une métonymie.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p01_q7",
            "type": "mcq",
            "prompt": "Dans « C'est une décision de l'Elysée », la figure de style est :",
            "options": [
              "Une métaphore",
              "Une allégorie",
              "Une hyperbole",
              "Une métonymie"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le lieu Elysée remplace les décideurs qui s'y trouvent : substitution selon un lien logique, donc métonymie."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p01_q1",
          "type": "mcq",
          "prompt": "Une figure de style est un procédé qui sert à :",
          "options": [
            "Rendre le propos plus expressif, impressionnant, convaincant et séduisant",
            "Supprimer toutes les images d'un texte",
            "Rendre le propos plus neutre et plus plat",
            "Remplacer la grammaire dans un discours"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du résumé : la figure rend ce que l'on veut dire plus expressif, plus impressionnant, plus convaincant, plus séduisant."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p01_q2",
          "type": "mcq",
          "prompt": "La métaphore se définit comme :",
          "options": [
            "Une comparaison avec l'outil comme",
            "La personnification d'une idée abstraite",
            "Une comparaison sans outil de comparaison, au sens figuré",
            "Le remplacement d'un mot par un mot lié logiquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé définit la métaphore comme une comparaison sans outil de comparaison, les termes étant pris au sens figuré."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p01_q3",
          "type": "mcq",
          "prompt": "On reconnaît souvent l'allégorie à :",
          "options": [
            "L'absence totale de majuscule",
            "L'emploi d'une majuscule et l'attribution de caractères humains à une idée abstraite",
            "La répétition d'un mot en début de phrase",
            "L'exagération d'une idée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé précise que l'allégorie, personnification d'une idée abstraite, se reconnaît très souvent à la majuscule, avec des caractères humains comme vilain et gentil."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p01_q4",
          "type": "mcq",
          "prompt": "Dans « La table douze s'impatiente », la métonymie désigne :",
          "options": [
            "La table elle-même qui bouge",
            "Un plat servi à cette table",
            "Un numéro écrit sur le mur",
            "La personne assise à la table numéro 12"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé explique l'exemple : c'est la personne assise à la table numéro 12 qui s'impatiente, le mot table la remplace par un lien logique."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p01_q5",
          "type": "mcq",
          "prompt": "La synecdoque consiste à désigner :",
          "options": [
            "Deux termes contradictoires dans une même expression",
            "La partie pour le tout et le tout pour la partie",
            "Une idée par son contraire atténué",
            "Un mot répété en début de vers"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du résumé : partie pour le tout, tout pour la partie, matière pour l'objet, particulier pour le général."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p01_q6",
          "type": "mcq",
          "prompt": "Dans « Et tes mains, feuilles de l'automne », la figure est :",
          "options": [
            "Une allégorie",
            "Une métonymie",
            "Une métaphore",
            "Une synecdoque"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les mains sont comparées à des feuilles de l'automne sans outil de comparaison et au sens figuré : c'est une métaphore."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p01_q7",
          "type": "mcq",
          "prompt": "Dans « C'est une décision de l'Elysée », la figure de style est :",
          "options": [
            "Une métaphore",
            "Une allégorie",
            "Une hyperbole",
            "Une métonymie"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le lieu Elysée remplace les décideurs qui s'y trouvent : substitution selon un lien logique, donc métonymie."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l05_figures_style_p02",
      "order": 2,
      "title": "Les figures d'amplification et d'atténuation",
      "summary": "Reconnaître hyperbole et gradation, qui amplifient, puis litote et euphémisme, qui atténuent.",
      "conceptExplanation": "Les figures d'amplification consistent à amplifier, renforcer, exagérer ou insister sur une idée. L'hyperbole consiste à exagérer une pensée, une idée : elle met en valeur, magnifie, glorifie, impressionne et émeut, grâce aux superlatifs, au lexique de l'intensité et de la quantité, à certains préfixes et suffixes comme maxi ou issime, et à la métaphore. La gradation est une suite de mots ou groupes de mots de même nature selon une progression (gradation ascendante) ou une régression (gradation descendante) ; elle amène progressivement l'idée qui constitue son point culminant afin de la mettre en valeur.\nLes figures d'atténuation consistent à atténuer l'expression d'une idée. La litote est une atténuation d'une idée pour la rendre plus expressive : elle peut traduire la pudeur, l'humilité ou la crainte de gêner. L'euphémisme est un adoucissement de l'expression d'une réalité grossière ou brutale : il permet de respecter les règles de bienséance et de ne pas choquer.",
      "keyRule": "Amplifier : hyperbole (exagérer) et gradation (progresser vers un point culminant) ; atténuer : litote (dire moins pour suggérer plus) et euphémisme (adoucir une réalité brutale).",
      "formulas": [],
      "workedExample": {
        "title": "Repérer une hyperbole chez Bernard Dadié",
        "statement": "Dans l'extrait de « Je vous remercie mon Dieu » de Bernard Dadié, donné en évaluation, repère une hyperbole : « Trente-six épées ont transpercé mon coeur ».",
        "methodSteps": [
          "On lit le vers : trente-six épées auraient transpercé un seul coeur.",
          "Le nombre et l'image dépassent la réalité possible : l'idée de la douleur est exagérée.",
          "L'exagération sert à mettre en valeur l'intensité de la souffrance exprimée.",
          "La figure est donc une hyperbole."
        ],
        "conclusion": "L'exagération de la douleur par les trente-six épées fait de ce vers une hyperbole."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les figures d'amplification",
          "stepTheme": "Les figures d'amplification",
          "stepBadge": "Les figures d'amplification",
          "paragraphText": "• Figures d'amplification : figures qui consistent à amplifier, renforcer, exagérer ou insister sur une idée.\nLe résumé y range l'hyperbole et la gradation.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p02_q1",
            "type": "mcq",
            "prompt": "Les figures d'amplification consistent à :",
            "options": [
              "Atténuer l'expression d'une idée",
              "Amplifier, renforcer, exagérer ou insister sur une idée",
              "Opposer deux idées dans une phrase",
              "Réorganiser la syntaxe d'une phrase"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du résumé pour l'hyperbole et la gradation, figures d'amplification."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'hyperbole",
          "stepTheme": "L'hyperbole",
          "stepBadge": "L'hyperbole",
          "paragraphText": "• Hyperbole : figure qui consiste à exagérer une pensée, une idée.\nExemples du résumé : « Je suis mort de honte », « Je t'ai appelé mille fois », « Elle a versé un torrent de larmes ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p02_q2",
            "type": "mcq",
            "prompt": "L'hyperbole consiste à :",
            "options": [
              "Dire le contraire de ce que l'on pense",
              "Associer deux termes contradictoires",
              "Exagérer une pensée ou une idée",
              "Répéter un mot en début de phrase"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé définit l'hyperbole comme l'exagération d'une pensée ou d'une idée, pour mettre en valeur, impressionner et émouvoir."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les procédés de l'hyperbole",
          "stepTheme": "Les procédés de l'hyperbole",
          "stepBadge": "Les procédés de l'hyperbole",
          "paragraphText": "L'hyperbole utilise les superlatifs absolus et relatifs, le lexique de l'intensité et de la quantité, certains préfixes et suffixes comme maxi et issime, et la métaphore.\nExemple du résumé : « Cette femme est sublimissime », avec le suffixe issime.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p02_q3",
            "type": "mcq",
            "prompt": "Parmi les procédés de l'hyperbole cités par le résumé, on trouve :",
            "options": [
              "La négation du contraire",
              "Les termes minorants comme un peu",
              "La périphrase uniquement",
              "Les superlatifs et le suffixe issime"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le tableau du résumé cite les superlatifs, le lexique de l'intensité et de la quantité, les préfixes et suffixes comme maxi et issime, et la métaphore."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La gradation",
          "stepTheme": "La gradation",
          "stepBadge": "La gradation",
          "paragraphText": "• Gradation : suite de mots ou groupes de mots de même nature selon une progression ou une régression.\nExemples du résumé : « Je suis perdu, je suis assassiné, on m'a coupé la gorge » (gradation ascendante) et la suite grimpé, glissé, tombé (gradation descendante).",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p02_q4",
            "type": "mcq",
            "prompt": "La gradation ascendante se reconnaît à :",
            "options": [
              "Une suite de mots de même nature en progression vers un point culminant",
              "Une suite de mots en régression constante",
              "Un seul mot répété sans changement",
              "L'absence de toute progression"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La gradation suit une progression (ascendante) ou une régression (descendante) pour amener l'idée à son point culminant et la mettre en valeur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La litote et l'euphémisme",
          "stepTheme": "La litote et l'euphémisme",
          "stepBadge": "La litote et l'euphémisme",
          "paragraphText": "• Litote : atténuation d'une idée pour la rendre plus expressive, par exemple « Ce n'est pas mal » pour dire que c'est très bien.\n• Euphémisme : adoucissement de l'expression d'une réalité grossière ou brutale, par exemple « Il nous a quitté hier » ou « Les non-voyants ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p02_q5",
            "type": "mcq",
            "prompt": "L'euphémisme se définit comme :",
            "options": [
              "Une exagération d'une réalité brutale",
              "Un adoucissement de l'expression d'une réalité grossière ou brutale",
              "Une atténuation par la négation du contraire",
              "Une progression vers un point culminant"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé définit l'euphémisme comme l'adoucissement d'une réalité grossière ou brutale, pour respecter la bienséance et ne pas choquer."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Litote ou euphémisme",
          "stepTheme": "Litote ou euphémisme",
          "stepBadge": "Litote ou euphémisme",
          "paragraphText": "Piège : « Ce n'est pas mal » n'est pas un euphémisme.\nLe résumé le donne comme exemple de litote : on atténue l'idée en niant son contraire, pour la rendre plus expressive. L'euphémisme, lui, adoucit une réalité brutale, comme « Il nous a quitté hier » pour annoncer un décès.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p02_q6",
            "type": "mcq",
            "prompt": "Dans « Ce n'est pas mal », employé pour dire que c'est très bien, la figure est :",
            "options": [
              "Un euphémisme",
              "Une hyperbole",
              "Une litote",
              "Une gradation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le tableau du résumé range « Ce n'est pas mal » parmi les litotes : négation du contraire de ce que l'on veut dire."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Un torrent de larmes",
          "stepTheme": "Un torrent de larmes",
          "stepBadge": "Un torrent de larmes",
          "paragraphText": "Exemple du résumé pour l'hyperbole : « Elle a versé un torrent de larmes ».\nLa quantité de larmes est exagérée par l'image du torrent, ce qui impressionne et émeut le lecteur.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p02_q7",
            "type": "mcq",
            "prompt": "Dans « Elle a versé un torrent de larmes », la figure est :",
            "options": [
              "Une litote",
              "Un euphémisme",
              "Une synecdoque",
              "Une hyperbole"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé cite cette phrase parmi les exemples d'hyperbole : l'exagération passe ici par une métaphore de quantité."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p02_q1",
          "type": "mcq",
          "prompt": "Les figures d'amplification consistent à :",
          "options": [
            "Atténuer l'expression d'une idée",
            "Amplifier, renforcer, exagérer ou insister sur une idée",
            "Opposer deux idées dans une phrase",
            "Réorganiser la syntaxe d'une phrase"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du résumé pour l'hyperbole et la gradation, figures d'amplification."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p02_q2",
          "type": "mcq",
          "prompt": "L'hyperbole consiste à :",
          "options": [
            "Dire le contraire de ce que l'on pense",
            "Associer deux termes contradictoires",
            "Exagérer une pensée ou une idée",
            "Répéter un mot en début de phrase"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé définit l'hyperbole comme l'exagération d'une pensée ou d'une idée, pour mettre en valeur, impressionner et émouvoir."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p02_q3",
          "type": "mcq",
          "prompt": "Parmi les procédés de l'hyperbole cités par le résumé, on trouve :",
          "options": [
            "La négation du contraire",
            "Les termes minorants comme un peu",
            "La périphrase uniquement",
            "Les superlatifs et le suffixe issime"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le tableau du résumé cite les superlatifs, le lexique de l'intensité et de la quantité, les préfixes et suffixes comme maxi et issime, et la métaphore."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p02_q4",
          "type": "mcq",
          "prompt": "La gradation ascendante se reconnaît à :",
          "options": [
            "Une suite de mots de même nature en progression vers un point culminant",
            "Une suite de mots en régression constante",
            "Un seul mot répété sans changement",
            "L'absence de toute progression"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La gradation suit une progression (ascendante) ou une régression (descendante) pour amener l'idée à son point culminant et la mettre en valeur."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p02_q5",
          "type": "mcq",
          "prompt": "L'euphémisme se définit comme :",
          "options": [
            "Une exagération d'une réalité brutale",
            "Un adoucissement de l'expression d'une réalité grossière ou brutale",
            "Une atténuation par la négation du contraire",
            "Une progression vers un point culminant"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé définit l'euphémisme comme l'adoucissement d'une réalité grossière ou brutale, pour respecter la bienséance et ne pas choquer."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p02_q6",
          "type": "mcq",
          "prompt": "Dans « Ce n'est pas mal », employé pour dire que c'est très bien, la figure est :",
          "options": [
            "Un euphémisme",
            "Une hyperbole",
            "Une litote",
            "Une gradation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le tableau du résumé range « Ce n'est pas mal » parmi les litotes : négation du contraire de ce que l'on veut dire."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p02_q7",
          "type": "mcq",
          "prompt": "Dans « Elle a versé un torrent de larmes », la figure est :",
          "options": [
            "Une litote",
            "Un euphémisme",
            "Une synecdoque",
            "Une hyperbole"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé cite cette phrase parmi les exemples d'hyperbole : l'exagération passe ici par une métaphore de quantité."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l05_figures_style_p03",
      "order": 3,
      "title": "Les figures d'opposition et de construction",
      "summary": "Reconnaître oxymore et antithèse, qui opposent, puis anaphore et chiasme, qui construisent la phrase.",
      "conceptExplanation": "Les figures d'opposition établissent un rapport d'opposition entre deux ou plusieurs éléments distincts. L'oxymore consiste à associer deux termes contradictoires dans une même expression, comme « Cette obscure clarté qui tombe des étoiles » de Corneille. L'antithèse consiste à rapprocher deux idées ou deux expressions fortement opposées dans une ou plusieurs phrases.\nLes figures de construction portent sur la réorganisation de la syntaxe. L'anaphore est la répétition d'un mot ou d'une expression en début de vers ou de phrases successifs : c'est une forme d'insistance pour attirer l'attention du lecteur sur l'objet visé. Le chiasme, selon le résumé, est la reprise d'un même mot ou groupe de mots en fin d'une phrase ou d'un vers suivant ; c'est aussi une forme d'insistance.",
      "keyRule": "Opposition : deux éléments contradictoires rapprochés (oxymore dans une même expression, antithèse entre idées) ; construction : la syntaxe est réorganisée (anaphore en début, chiasme en reprise).",
      "formulas": [],
      "workedExample": {
        "title": "Identifier un oxymore chez Corneille",
        "statement": "Analyse la figure dans le support de la séance 3 : « Cette obscure clarté tombait des étoiles », de Pierre Corneille.",
        "methodSteps": [
          "On repère deux termes dans la même expression : obscure et clarté.",
          "Ces deux termes sont contradictoires : l'obscurité s'oppose à la clarté.",
          "Leur association dans une même expression crée un effet de surprise.",
          "Il s'agit donc d'un oxymore."
        ],
        "conclusion": "Deux termes contradictoires associés dans une même expression forment un oxymore."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les figures d'opposition",
          "stepTheme": "Les figures d'opposition",
          "stepBadge": "Les figures d'opposition",
          "paragraphText": "• Figures d'opposition : figures qui établissent un rapport d'opposition entre deux ou plusieurs éléments distincts.\nLe résumé y range l'oxymore et l'antithèse.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p03_q1",
            "type": "mcq",
            "prompt": "Les figures d'opposition établissent :",
            "options": [
              "Un rapport d'analogie entre deux réalités",
              "Un rapport d'opposition entre deux ou plusieurs éléments distincts",
              "Une progression vers un point culminant",
              "Une atténuation de l'idée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition d'ouverture de la séance 3 pour l'oxymore et l'antithèse."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'oxymore",
          "stepTheme": "L'oxymore",
          "stepBadge": "L'oxymore",
          "paragraphText": "• Oxymore : association de deux termes contradictoires dans une même expression.\nExemple du résumé : « Cette obscure clarté qui tombe des étoiles » (Corneille), et dans l'évaluation « Le soleil noir de la mélancolie ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p03_q2",
            "type": "mcq",
            "prompt": "L'oxymore consiste à :",
            "options": [
              "Rapprocher deux idées opposées dans plusieurs phrases",
              "Répéter un mot en début de vers successifs",
              "Associer deux termes contradictoires dans une même expression",
              "Exagérer une idée"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Définition du résumé : deux termes contradictoires, comme obscure et clarté, dans une même expression."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'antithèse",
          "stepTheme": "L'antithèse",
          "stepBadge": "L'antithèse",
          "paragraphText": "• Antithèse : procédé qui consiste à rapprocher deux idées ou deux expressions fortement opposées dans une ou plusieurs phrases.\nExemple corrigé de l'évaluation : « Un homme qui me hait près d'un homme qui m'aime », où haïr et aimer s'opposent.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p03_q3",
            "type": "mcq",
            "prompt": "L'antithèse consiste à rapprocher :",
            "options": [
              "Deux idées ou expressions fortement opposées",
              "Un mot et son contraire atténué",
              "La partie et le tout",
              "Des mots de même nature en progression"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé définit l'antithèse comme le rapprochement de deux idées ou expressions fortement opposées, dans une ou plusieurs phrases."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'anaphore",
          "stepTheme": "L'anaphore",
          "stepBadge": "L'anaphore",
          "paragraphText": "• Anaphore : répétition d'un mot ou d'une expression en début de vers ou de phrases successifs.\nExemple du résumé : « Afrique mon Afrique, Afrique des fiers guerriers, Afrique que chante ma grand-mère », insistance sur le continent africain.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p03_q4",
            "type": "mcq",
            "prompt": "L'anaphore est la répétition d'un mot ou d'une expression :",
            "options": [
              "En fin de chaque phrase uniquement",
              "Au milieu d'un seul vers",
              "Dans une même expression contradictoire",
              "En début de vers ou de phrases successifs"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Définition du résumé : répétition en début de vers ou de phrases successifs, forme d'insistance sur l'objet visé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le chiasme selon le résumé",
          "stepTheme": "Le chiasme selon le résumé",
          "stepBadge": "Le chiasme selon le résumé",
          "paragraphText": "• Chiasme : selon le résumé, reprise d'un même mot ou groupe de mots en fin d'une phrase ou d'un vers suivant ; c'est une forme d'insistance.\nExemple du résumé : « Le sang de ta sueur, la sueur de ton travail, le travail de l'esclavage, l'esclavage de tes enfants ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p03_q5",
            "type": "mcq",
            "prompt": "Selon le résumé, le chiasme est :",
            "options": [
              "La reprise d'un même mot ou groupe de mots en fin d'une phrase ou d'un vers suivant",
              "La négation du contraire de ce que l'on veut dire",
              "La personnification d'une idée abstraite",
              "L'adoucissement d'une réalité brutale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition donnée par le résumé de la séance 3, illustrée par la chaîne sang, sueur, travail, esclavage, enfants."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Oxymore ou antithèse",
          "stepTheme": "Oxymore ou antithèse",
          "stepBadge": "Oxymore ou antithèse",
          "paragraphText": "Piège : « Cocody est tout petit. C'est là sa vraie grandeur », support de la séance 3, n'est pas un oxymore.\nPetit et grandeur s'opposent d'une phrase à l'autre, et non dans une même expression : c'est une antithèse.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p03_q6",
            "type": "mcq",
            "prompt": "Dans « Cocody est tout petit. C'est là sa vraie grandeur », la figure est :",
            "options": [
              "Un oxymore",
              "Une antithèse",
              "Une anaphore",
              "Un chiasme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'opposition petit contre grandeur se déploie entre deux phrases : antithèse. L'oxymore associe les contraires dans une même expression."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Paris outragé, Paris brisé",
          "stepTheme": "Paris outragé, Paris brisé",
          "stepBadge": "Paris outragé, Paris brisé",
          "paragraphText": "Exemple corrigé de l'évaluation de la séance 3 : « Paris outragé ! Paris brisé ! Paris martyrisé ! Mais Paris libéré ! ».\nLe mot Paris est répété en début de phrases successives pour insister.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p03_q7",
            "type": "mcq",
            "prompt": "Dans cet exemple, la figure de construction est :",
            "options": [
              "Le chiasme",
              "La litote",
              "L'anaphore",
              "La métonymie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le traitement de la situation d'évaluation identifie une anaphore : répétition de Paris en début de phrases successives."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p03_q1",
          "type": "mcq",
          "prompt": "Les figures d'opposition établissent :",
          "options": [
            "Un rapport d'analogie entre deux réalités",
            "Un rapport d'opposition entre deux ou plusieurs éléments distincts",
            "Une progression vers un point culminant",
            "Une atténuation de l'idée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition d'ouverture de la séance 3 pour l'oxymore et l'antithèse."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p03_q2",
          "type": "mcq",
          "prompt": "L'oxymore consiste à :",
          "options": [
            "Rapprocher deux idées opposées dans plusieurs phrases",
            "Répéter un mot en début de vers successifs",
            "Associer deux termes contradictoires dans une même expression",
            "Exagérer une idée"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Définition du résumé : deux termes contradictoires, comme obscure et clarté, dans une même expression."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p03_q3",
          "type": "mcq",
          "prompt": "L'antithèse consiste à rapprocher :",
          "options": [
            "Deux idées ou expressions fortement opposées",
            "Un mot et son contraire atténué",
            "La partie et le tout",
            "Des mots de même nature en progression"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé définit l'antithèse comme le rapprochement de deux idées ou expressions fortement opposées, dans une ou plusieurs phrases."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p03_q4",
          "type": "mcq",
          "prompt": "L'anaphore est la répétition d'un mot ou d'une expression :",
          "options": [
            "En fin de chaque phrase uniquement",
            "Au milieu d'un seul vers",
            "Dans une même expression contradictoire",
            "En début de vers ou de phrases successifs"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Définition du résumé : répétition en début de vers ou de phrases successifs, forme d'insistance sur l'objet visé."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p03_q5",
          "type": "mcq",
          "prompt": "Selon le résumé, le chiasme est :",
          "options": [
            "La reprise d'un même mot ou groupe de mots en fin d'une phrase ou d'un vers suivant",
            "La négation du contraire de ce que l'on veut dire",
            "La personnification d'une idée abstraite",
            "L'adoucissement d'une réalité brutale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition donnée par le résumé de la séance 3, illustrée par la chaîne sang, sueur, travail, esclavage, enfants."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p03_q6",
          "type": "mcq",
          "prompt": "Dans « Cocody est tout petit. C'est là sa vraie grandeur », la figure est :",
          "options": [
            "Un oxymore",
            "Une antithèse",
            "Une anaphore",
            "Un chiasme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'opposition petit contre grandeur se déploie entre deux phrases : antithèse. L'oxymore associe les contraires dans une même expression."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p03_q7",
          "type": "mcq",
          "prompt": "Dans cet exemple, la figure de construction est :",
          "options": [
            "Le chiasme",
            "La litote",
            "L'anaphore",
            "La métonymie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le traitement de la situation d'évaluation identifie une anaphore : répétition de Paris en début de phrases successives."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l05_figures_style_p04",
      "order": 4,
      "title": "Identifier les figures de style en contexte",
      "summary": "Appliquer les corrigés de l'évaluation de la séance 3 pour identifier chaque figure dans une phrase.",
      "conceptExplanation": "Le traitement de la situation d'évaluation de la séance 3 applique toutes les familles étudiées à douze phrases. Les figures d'image : « Elle a des cheveux de soie » est une métaphore ; « Le temps est un grand consolateur » est une allégorie ; « Rabat organise les festivités » et « Paris s'éveille » sont des métonymies. Les figures d'amplification et d'atténuation : « Une avalanche de cadeaux » est une hyperbole ; « Le feu a brûlé des arbustes, des champs, puis la colline entière » est une gradation ascendante ; « Il n'est plus » est un euphémisme ; « Ce n'est pas mauvais » est une litote.\nLes figures d'opposition et de construction : « Le soleil noir de la mélancolie » est un oxymore ; « Un homme qui me hait près d'un homme qui m'aime » est une antithèse ; la répétition de Paris en début de phrases est une anaphore ; « Plus l'offenseur est cher et plus grande est l'offense » est un chiasme. Identifier une figure suppose donc de repérer d'abord son procédé : image, exagération, atténuation, opposition ou construction.",
      "keyRule": "Pour identifier une figure, cherche d'abord le procédé : image sans outil, substitution, exagération, atténuation, opposition ou répétition organisée.",
      "formulas": [],
      "workedExample": {
        "title": "Classer deux phrases de l'évaluation corrigée",
        "statement": "Identifie les figures dans : « Une avalanche de cadeaux » et « Il n'est plus ».",
        "methodSteps": [
          "Première phrase : la quantité de cadeaux est exagérée par l'image de l'avalanche, qui amplifie l'idée.",
          "C'est donc une hyperbole, figure d'amplification.",
          "Deuxième phrase : la mort est dite de façon adoucie, sans le mot brutal.",
          "C'est donc un euphémisme, figure d'atténuation."
        ],
        "conclusion": "Avalanche de cadeaux : hyperbole ; il n'est plus : euphémisme, selon le corrigé de la séance 3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Des cheveux de soie",
          "stepTheme": "Des cheveux de soie",
          "stepBadge": "Des cheveux de soie",
          "paragraphText": "Dans le corrigé de l'évaluation, « Elle a des cheveux de soie » est identifiée comme une métaphore.\nLes cheveux sont assimilés à la soie, sans outil de comparaison et au sens figuré.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p04_q1",
            "type": "mcq",
            "prompt": "Dans « Elle a des cheveux de soie », la figure est :",
            "options": [
              "Une allégorie",
              "Une métaphore",
              "Une métonymie",
              "Une litote"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le traitement de la situation d'évaluation répond : métaphore, comparaison sans outil de comparaison."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le temps consolateur",
          "stepTheme": "Le temps consolateur",
          "stepBadge": "Le temps consolateur",
          "paragraphText": "Dans le corrigé de l'évaluation, « Le temps est un grand consolateur » est identifié comme une allégorie.\nLe temps, idée abstraite, reçoit un comportement humain : consoler.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p04_q2",
            "type": "mcq",
            "prompt": "Dans « Le temps est un grand consolateur », la figure est :",
            "options": [
              "Une hyperbole",
              "Une antithèse",
              "Une allégorie",
              "Un euphémisme"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé répond : allégorie, personnification d'une idée abstraite, le temps qui console comme un humain."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Rabat organise les festivités",
          "stepTheme": "Rabat organise les festivités",
          "stepBadge": "Rabat organise les festivités",
          "paragraphText": "Dans le corrigé de l'évaluation, « Rabat organise les festivités à l'occasion de la fête du trône » est une métonymie.\nLa capitale, Rabat, remplace les autorités qui y siègent et qui organisent réellement les festivités.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p04_q3",
            "type": "mcq",
            "prompt": "Dans « Rabat organise les festivités », la figure est :",
            "options": [
              "Une métonymie",
              "Une gradation",
              "Un oxymore",
              "Une anaphore"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé répond : métonymie, le lieu remplace les personnes qui y agissent, par un lien logique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Repérer le procédé avant le nom",
          "stepTheme": "Repérer le procédé avant le nom",
          "stepBadge": "Repérer le procédé avant le nom",
          "paragraphText": "Méthode tirée de l'ensemble des séances : avant de nommer la figure, repère le procédé à l'oeuvre.\nImage sans outil de comparaison, substitution logique, exagération, atténuation, opposition ou répétition organisée : chaque procédé renvoie à une famille précise.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p04_q4",
            "type": "mcq",
            "prompt": "Pour identifier une figure de style, la première étape consiste à :",
            "options": [
              "Compter les syllabes du vers",
              "Traduire la phrase dans une autre langue",
              "Supprimer toutes les images",
              "Repérer le procédé : image, substitution, exagération, atténuation, opposition ou construction"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La démarche des trois séances part toujours du procédé : c'est lui qui permet de nommer la figure sans la confondre avec une autre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ce n'est pas mauvais",
          "stepTheme": "Ce n'est pas mauvais",
          "stepBadge": "Ce n'est pas mauvais",
          "paragraphText": "Piège : « Ce n'est pas mauvais », phrase P8 de l'évaluation, ressemble à une simple négation.\nLe corrigé l'identifie comme une litote : on atténue l'idée en niant son contraire, pour suggérer qu'en réalité c'est bien, voire très bien.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p04_q5",
            "type": "mcq",
            "prompt": "Dans « Ce n'est pas mauvais », la figure identifiée par le corrigé est :",
            "options": [
              "Un euphémisme",
              "Une litote",
              "Une hyperbole",
              "Une synecdoque"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le traitement de la situation d'évaluation répond : litote, atténuation par la négation du contraire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le feu et la colline entière",
          "stepTheme": "Le feu et la colline entière",
          "stepBadge": "Le feu et la colline entière",
          "paragraphText": "Dans le corrigé de l'évaluation, « Le feu a brûlé des arbustes, des champs, puis la colline entière » est une gradation ascendante.\nLes éléments brûlés grandissent progressivement : arbustes, champs, puis la colline entière, point culminant.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p04_q6",
            "type": "mcq",
            "prompt": "Dans cette phrase, la figure est :",
            "options": [
              "Une gradation ascendante",
              "Une gradation descendante",
              "Une antithèse",
              "Un chiasme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé répond : gradation ascendante, suite de même nature en progression vers un point culminant."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Plus l'offenseur est cher",
          "stepTheme": "Plus l'offenseur est cher",
          "stepBadge": "Plus l'offenseur est cher",
          "paragraphText": "Dans le corrigé de l'évaluation, « Plus l'offenseur est cher et plus grande est l'offense » est un chiasme.\nLes termes offenseur et offense se répondent d'une proposition à l'autre, en forme d'insistance selon le résumé.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l05_figures_style_p04_q7",
            "type": "mcq",
            "prompt": "Dans « Plus l'offenseur est cher et plus grande est l'offense », la figure est :",
            "options": [
              "Une anaphore",
              "Une métaphore",
              "Une allégorie",
              "Un chiasme"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le traitement de la situation d'évaluation répond : chiasme."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p04_q1",
          "type": "mcq",
          "prompt": "Dans « Elle a des cheveux de soie », la figure est :",
          "options": [
            "Une allégorie",
            "Une métaphore",
            "Une métonymie",
            "Une litote"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le traitement de la situation d'évaluation répond : métaphore, comparaison sans outil de comparaison."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p04_q2",
          "type": "mcq",
          "prompt": "Dans « Le temps est un grand consolateur », la figure est :",
          "options": [
            "Une hyperbole",
            "Une antithèse",
            "Une allégorie",
            "Un euphémisme"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé répond : allégorie, personnification d'une idée abstraite, le temps qui console comme un humain."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p04_q3",
          "type": "mcq",
          "prompt": "Dans « Rabat organise les festivités », la figure est :",
          "options": [
            "Une métonymie",
            "Une gradation",
            "Un oxymore",
            "Une anaphore"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé répond : métonymie, le lieu remplace les personnes qui y agissent, par un lien logique."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p04_q4",
          "type": "mcq",
          "prompt": "Pour identifier une figure de style, la première étape consiste à :",
          "options": [
            "Compter les syllabes du vers",
            "Traduire la phrase dans une autre langue",
            "Supprimer toutes les images",
            "Repérer le procédé : image, substitution, exagération, atténuation, opposition ou construction"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La démarche des trois séances part toujours du procédé : c'est lui qui permet de nommer la figure sans la confondre avec une autre."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p04_q5",
          "type": "mcq",
          "prompt": "Dans « Ce n'est pas mauvais », la figure identifiée par le corrigé est :",
          "options": [
            "Un euphémisme",
            "Une litote",
            "Une hyperbole",
            "Une synecdoque"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le traitement de la situation d'évaluation répond : litote, atténuation par la négation du contraire."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p04_q6",
          "type": "mcq",
          "prompt": "Dans cette phrase, la figure est :",
          "options": [
            "Une gradation ascendante",
            "Une gradation descendante",
            "Une antithèse",
            "Un chiasme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé répond : gradation ascendante, suite de même nature en progression vers un point culminant."
        },
        {
          "id": "terminale_a1_francais_pl_l05_figures_style_p04_q7",
          "type": "mcq",
          "prompt": "Dans « Plus l'offenseur est cher et plus grande est l'offense », la figure est :",
          "options": [
            "Une anaphore",
            "Une métaphore",
            "Une allégorie",
            "Un chiasme"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le traitement de la situation d'évaluation répond : chiasme."
        }
      ]
    }
  ]
};
