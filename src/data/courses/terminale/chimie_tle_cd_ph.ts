import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 6 : Solutions aqueuses – Notion de pH » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1313
export const CHIMIE_TLE_CD_L06_PH: CurriculumChapter = {
  "id": "terminale_c_chimie_l06_ph",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 6,
  "title": "Leçon 6 : Solutions aqueuses – Notion de pH",
  "summary": "On étudie les propriétés de l'eau et son autoprotolyse, les concentrations et l'électroneutralité des solutions, puis la notion de pH pour déterminer et classer les solutions aqueuses.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1313",
  "points": [
    {
      "id": "terminale_c_chimie_l06_ph_p01",
      "order": 1,
      "title": "Propriétés de l'eau et autoprotolyse",
      "summary": "L'eau, solvant dipolaire, contient des ions H₃O⁺ et OH⁻ issus de son autoprotolyse.",
      "conceptExplanation": "L'eau est un solvant dipolaire : elle peut disloquer, ioniser et hydrater des composés chimiques ; c'est un solvant ionisant, dissociant, hydratant et dispersant.\nL'eau pure conduit faiblement le courant électrique : elle contient, en plus des molécules d'eau, des ions hydronium H₃O⁺ et des ions hydroxyde OH⁻, responsables de cette conductibilité.\nCes ions résultent de la réaction d'auto-ionisation de l'eau, appelée autoprotolyse de l'eau : 2 H₂O ⇌ H₃O⁺ + OH⁻.\nPour l'eau, le produit des concentrations des ions H₃O⁺ et OH⁻ est une constante Ke, le produit ionique de l'eau, qui ne dépend que de la température.",
      "keyRule": "Ke = [H₃O⁺] × [OH⁻] dans toute solution aqueuse ; Ke ne dépend que de la température (10⁻¹⁴ à 25 °C).",
      "formulas": [
        {
          "name": "Autoprotolyse de l'eau",
          "formula": "\\mathrm{H_2O + H_2O \\rightleftharpoons H_3O^+ + OH^-}",
          "note": "Réaction d'équilibre, dite d'auto-ionisation de l'eau."
        },
        {
          "name": "Produit ionique de l'eau",
          "formula": "K_e = \\mathrm{[H_3O^+] \\times [OH^-]}",
          "note": "Ke est sans unité ; il vaut 10⁻¹⁴ à 25 °C."
        }
      ],
      "workedExample": {
        "title": "Vrai ou faux ? (activité d'application 1)",
        "statement": "Juge les affirmations : (1) toute solution aqueuse contient des ions H₃O⁺ et OH⁻ ; (2) à toute température, [H₃O⁺]·[OH⁻] = 10⁻¹⁴ ; (3) le produit ionique de l'eau dépend de la température ; (4) l'équation d'auto-ionisation s'écrit avec une flèche simple.",
        "methodSteps": [
          "(1) Vrai : l'autoprotolyse fournit H₃O⁺ et OH⁻ à toute solution aqueuse.",
          "(2) Faux : le produit vaut 10⁻¹⁴ à 25 °C seulement ; il vaut par exemple 9,6 × 10⁻¹⁴ à 60 °C.",
          "(3) Vrai : Ke ne dépend que de la température.",
          "(4) Faux : l'autoprotolyse est un équilibre, symbolisé par la double flèche."
        ],
        "conclusion": "On retrouve la résolution du résumé : V, F, V, F."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'eau, un solvant dipolaire",
          "stepTheme": "L'eau, un solvant dipolaire",
          "stepBadge": "L'eau, un solvant dipolaire",
          "paragraphText": "D'après la situation d'apprentissage, l'eau est un solvant dipolaire.\nLe résumé précise : l'eau est un solvant ionisant, dissociant, hydratant et dispersant.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p01_q1",
            "type": "mcq",
            "prompt": "Le résumé qualifie l'eau de solvant :",
            "options": [
              "Ionisant, dissociant, hydratant et dispersant",
              "Uniquement polaire",
              "Apolaire et inerte",
              "Oxydant et réducteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les quatre qualificatifs donnés par le résumé pour le pouvoir solvant de l'eau."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'eau pure conduit faiblement le courant",
          "stepTheme": "L'eau pure conduit faiblement le courant",
          "stepBadge": "L'eau pure conduit faiblement le courant",
          "paragraphText": "L'expérience du galvanomètre montre que l'eau distillée laisse passer une faible intensité de courant.\nL'eau pure contient donc des ions : les ions hydronium H₃O⁺ et les ions hydroxyde OH⁻, responsables de sa conductibilité.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p01_q2",
            "type": "mcq",
            "prompt": "La faible conductibilité électrique de l'eau pure est due à la présence :",
            "options": [
              "De molécules d'eau uniquement",
              "D'ions hydronium H₃O⁺ et d'ions hydroxyde OH⁻",
              "D'ions sodium et chlorure",
              "D'électrons libres"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé attribue la conductibilité de l'eau aux ions H₃O⁺ et OH⁻ qu'elle contient."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'autoprotolyse de l'eau",
          "stepTheme": "L'autoprotolyse de l'eau",
          "stepBadge": "L'autoprotolyse de l'eau",
          "paragraphText": "• Autoprotolyse de l'eau : réaction d'auto-ionisation par laquelle deux molécules d'eau donnent un ion hydronium et un ion hydroxyde.\nC'est un équilibre chimique : H₂O + H₂O ⇌ H₃O⁺ + OH⁻.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p01_q3",
            "type": "mcq",
            "prompt": "L'équation de l'autoprotolyse de l'eau s'écrit :",
            "options": [
              "H₂O → H⁺ + OH⁻",
              "H₂O + H₂O → 2 H₂ + O₂",
              "H₂O + H₂O ⇌ H₃O⁺ + OH⁻",
              "H₂O ⇌ H₂ + O"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'équation-bilan du résumé fait intervenir deux molécules d'eau et la double flèche d'équilibre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le produit ionique de l'eau Ke",
          "stepTheme": "Le produit ionique de l'eau Ke",
          "stepBadge": "Le produit ionique de l'eau Ke",
          "paragraphText": "• Produit ionique de l'eau : constante Ke égale au produit des concentrations des ions H₃O⁺ et OH⁻.\nKe est sans unité et sa valeur ne dépend que de la température.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p01_q4",
            "type": "mcq",
            "prompt": "Le produit ionique de l'eau Ke vaut :",
            "options": [
              "[H₃O⁺] + [OH⁻]",
              "[H₃O⁺] − [OH⁻]",
              "Le rapport [H₃O⁺] sur [OH⁻]",
              "[H₃O⁺] × [OH⁻]"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ke est le produit des deux concentrations, comme l'indique le résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ke = 10⁻¹⁴ seulement à 25 °C",
          "stepTheme": "Ke = 10⁻¹⁴ seulement à 25 °C",
          "stepBadge": "Ke = 10⁻¹⁴ seulement à 25 °C",
          "paragraphText": "Piège de l'activité 1 : affirmer que [H₃O⁺]·[OH⁻] = 10⁻¹⁴ à toute température est faux.\nLe résumé donne Ke = 10⁻¹⁴ à 25 °C, mais Ke = 9,6 × 10⁻¹⁴ à 60 °C.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p01_q5",
            "type": "mcq",
            "prompt": "À 60 °C, le produit ionique de l'eau vaut :",
            "options": [
              "9,6 × 10⁻¹⁴",
              "Exactement 10⁻¹⁴, comme à 25 °C",
              "10⁻¹²",
              "1"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé donne cet exemple : Ke dépend de la température et vaut 9,6 × 10⁻¹⁴ à 60 °C."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Toute solution aqueuse contient H₃O⁺ et OH⁻",
          "stepTheme": "Toute solution aqueuse contient H₃O⁺ et OH⁻",
          "stepBadge": "Toute solution aqueuse contient H₃O⁺ et OH⁻",
          "paragraphText": "Conséquence de l'autoprotolyse : toute solution aqueuse contient des ions H₃O⁺ et des ions OH⁻, en plus des ions du soluté dissous.\nLeur produit reste égal à Ke, à la température de la solution.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p01_q6",
            "type": "mcq",
            "prompt": "Une solution aqueuse d'acide chlorhydrique contient, en plus des ions de l'acide :",
            "options": [
              "Aucun autre ion",
              "Des ions H₃O⁺ et OH⁻ dus à l'eau",
              "Des molécules d'eau uniquement",
              "Des ions Na⁺"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'activité 1 le confirme (affirmation vraie) : toute solution aqueuse contient H₃O⁺ et OH⁻."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l06_ph_p01_q1",
          "type": "mcq",
          "prompt": "Le résumé qualifie l'eau de solvant :",
          "options": [
            "Ionisant, dissociant, hydratant et dispersant",
            "Uniquement polaire",
            "Apolaire et inerte",
            "Oxydant et réducteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les quatre qualificatifs donnés par le résumé pour le pouvoir solvant de l'eau."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p01_q2",
          "type": "mcq",
          "prompt": "La faible conductibilité électrique de l'eau pure est due à la présence :",
          "options": [
            "De molécules d'eau uniquement",
            "D'ions hydronium H₃O⁺ et d'ions hydroxyde OH⁻",
            "D'ions sodium et chlorure",
            "D'électrons libres"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé attribue la conductibilité de l'eau aux ions H₃O⁺ et OH⁻ qu'elle contient."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p01_q3",
          "type": "mcq",
          "prompt": "L'équation de l'autoprotolyse de l'eau s'écrit :",
          "options": [
            "H₂O → H⁺ + OH⁻",
            "H₂O + H₂O → 2 H₂ + O₂",
            "H₂O + H₂O ⇌ H₃O⁺ + OH⁻",
            "H₂O ⇌ H₂ + O"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'équation-bilan du résumé fait intervenir deux molécules d'eau et la double flèche d'équilibre."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p01_q4",
          "type": "mcq",
          "prompt": "Le produit ionique de l'eau Ke vaut :",
          "options": [
            "[H₃O⁺] + [OH⁻]",
            "[H₃O⁺] − [OH⁻]",
            "Le rapport [H₃O⁺] sur [OH⁻]",
            "[H₃O⁺] × [OH⁻]"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ke est le produit des deux concentrations, comme l'indique le résumé."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p01_q5",
          "type": "mcq",
          "prompt": "À 60 °C, le produit ionique de l'eau vaut :",
          "options": [
            "9,6 × 10⁻¹⁴",
            "Exactement 10⁻¹⁴, comme à 25 °C",
            "10⁻¹²",
            "1"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé donne cet exemple : Ke dépend de la température et vaut 9,6 × 10⁻¹⁴ à 60 °C."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p01_q6",
          "type": "mcq",
          "prompt": "Une solution aqueuse d'acide chlorhydrique contient, en plus des ions de l'acide :",
          "options": [
            "Aucun autre ion",
            "Des ions H₃O⁺ et OH⁻ dus à l'eau",
            "Des molécules d'eau uniquement",
            "Des ions Na⁺"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'activité 1 le confirme (affirmation vraie) : toute solution aqueuse contient H₃O⁺ et OH⁻."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l06_ph_p02",
      "order": 2,
      "title": "Dissolution et concentrations",
      "summary": "Les trois étapes de la dissolution et les définitions des concentrations molaire et massique.",
      "conceptExplanation": "La dissolution d'un composé ionique dans l'eau se fait en trois étapes successives : la dissociation (ou dislocation) du cristal par les molécules d'eau, la solvatation (hydratation) des ions qui s'entourent de molécules d'eau, et la dispersion des ions hydratés dans la solution.\nLa concentration molaire volumique d'une solution est la quantité de matière de soluté dissoute dans un litre de solution : $C = \\frac{n}{V}$.\nLa concentration d'une espèce X en solution est $[X] = \\frac{n_X}{V}$, et la concentration massique est $C_m = \\frac{m}{V}$, reliée à la concentration molaire par $C_m = C \\times M$.",
      "keyRule": "Trois étapes : dissociation, hydratation, dispersion. Et deux formules : C = n/V et Cm = C × M.",
      "formulas": [
        {
          "name": "Concentration molaire volumique",
          "formula": "C = \\frac{n}{V}",
          "note": "n en mol, V en litre, C en mol/L."
        },
        {
          "name": "Concentration d'une espèce en solution",
          "formula": "[X] = \\frac{n_X}{V}",
          "note": "nX est la quantité de matière de l'espèce X."
        },
        {
          "name": "Concentration massique volumique",
          "formula": "C_m = \\frac{m}{V} = C \\times M",
          "note": "Cm en g/L, M masse molaire du soluté."
        }
      ],
      "workedExample": {
        "title": "Les bonnes relations (activité d'application 2)",
        "statement": "Une espèce X, de quantité de matière nX, est dissoute dans un volume V. Quelle est l'expression de [X], et comment relie-t-on sa concentration massique CX à [X] et à sa masse molaire M ?",
        "methodSteps": [
          "Par définition, la concentration d'une espèce est la quantité de matière par litre : [X] = nX/V (réponse c du résumé).",
          "La masse dissoute vaut m = nX × M, donc CX = m/V = [X] × M (réponse b du résumé)."
        ],
        "conclusion": "[X] = nX/V et CX = [X]·M : ce sont les réponses recopiées dans la solution de l'activité 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Première étape : la dissociation",
          "stepTheme": "Première étape : la dissociation",
          "stepBadge": "Première étape : la dissociation",
          "paragraphText": "• Dissociation (ou dislocation) : les molécules d'eau, par leur agitation, rompent les liaisons électrostatiques du cristal ionique et le dissocient.\nLes ions du cristal deviennent libres.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p02_q1",
            "type": "mcq",
            "prompt": "La première étape de la dissolution d'un composé ionique dans l'eau est :",
            "options": [
              "La dispersion",
              "L'hydratation",
              "La dissociation du cristal",
              "L'évaporation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé ordonne les étapes : dissociation, puis solvatation, puis dispersion."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Deuxième étape : l'hydratation des ions",
          "stepTheme": "Deuxième étape : l'hydratation des ions",
          "stepBadge": "Deuxième étape : l'hydratation des ions",
          "paragraphText": "• Solvatation, appelée hydratation quand le solvant est l'eau : les ions en solution s'entourent de molécules d'eau par attraction électrostatique.\nEn solution aqueuse, les ions sont donc toujours hydratés.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p02_q2",
            "type": "mcq",
            "prompt": "L'hydratation des ions consiste en :",
            "options": [
              "L'entourage des ions par des molécules d'eau",
              "La rupture du cristal ionique",
              "La répartition des ions dans la solution",
              "L'échauffement de la solution"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du résumé : les ions s'entourent de molécules d'eau par attraction électrostatique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Troisième étape : la dispersion",
          "stepTheme": "Troisième étape : la dispersion",
          "stepBadge": "Troisième étape : la dispersion",
          "paragraphText": "• Dispersion : sous l'effet de l'agitation thermique, les ions hydratés se répartissent progressivement dans toute la solution.\nOn peut agiter mécaniquement pour accélérer cette étape.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p02_q3",
            "type": "mcq",
            "prompt": "Grâce à quelle étape les ions hydratés se répartissent-ils dans toute la solution ?",
            "options": [
              "La dissociation",
              "La dispersion",
              "La solvatation",
              "La précipitation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La dispersion, troisième étape, répartit les ions hydratés dans la solution sous l'effet de l'agitation thermique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La concentration molaire volumique",
          "stepTheme": "La concentration molaire volumique",
          "stepBadge": "La concentration molaire volumique",
          "paragraphText": "• Concentration molaire volumique C : quantité de matière n de soluté dissoute dans un litre de solution.\nElle s'écrit $C = \\frac{n}{V}$ et s'exprime en mol/L.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p02_q4",
            "type": "mcq",
            "prompt": "La concentration molaire volumique d'une solution s'écrit :",
            "options": [
              "$C = \\frac{V}{n}$",
              "$C = n \\times V$",
              "$C = n - V$",
              "$C = \\frac{n}{V}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Par définition, C est la quantité de matière par litre : C = n/V."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre concentration d'espèce et concentration de solution",
          "stepTheme": "Ne pas confondre concentration d'espèce et concentration de solution",
          "stepBadge": "Ne pas confondre concentration d'espèce et concentration de solution",
          "paragraphText": "Piège : [X] désigne la concentration d'une espèce précise dans la solution, pas forcément celle du soluté dissous.\nPour CaCl₂ dissous, [Cl⁻] vaut le double de la concentration de la solution, car chaque CaCl₂ libère deux ions Cl⁻.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p02_q5",
            "type": "mcq",
            "prompt": "Dans une solution de chlorure de calcium de concentration C, la concentration des ions chlorure vaut :",
            "options": [
              "[Cl⁻] = 2C",
              "[Cl⁻] = C",
              "[Cl⁻] = C/2",
              "[Cl⁻] = 0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'équation de dissociation CaCl₂ → Ca²⁺ + 2 Cl⁻ montre deux ions chlorure par unité dissoute (situation d'évaluation du résumé)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Concentration massique et concentration molaire",
          "stepTheme": "Concentration massique et concentration molaire",
          "stepBadge": "Concentration massique et concentration molaire",
          "paragraphText": "La concentration massique volumique Cm est la masse de substance dissoute dans un litre de solution : $C_m = \\frac{m}{V}$, en g/L.\nElle est liée à la concentration molaire par $C_m = C \\times M$, où M est la masse molaire du soluté.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p02_q6",
            "type": "mcq",
            "prompt": "La concentration massique Cm d'un soluté de masse molaire M et de concentration molaire C vaut :",
            "options": [
              "$C_m = \\frac{C}{M}$",
              "$C_m = C \\times M$",
              "$C_m = \\frac{M}{C}$",
              "$C_m = C + M$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la réponse b de l'activité 2 : CX = [X]·M, car la masse dissoute par litre vaut n/V × M."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l06_ph_p02_q1",
          "type": "mcq",
          "prompt": "La première étape de la dissolution d'un composé ionique dans l'eau est :",
          "options": [
            "La dispersion",
            "L'hydratation",
            "La dissociation du cristal",
            "L'évaporation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé ordonne les étapes : dissociation, puis solvatation, puis dispersion."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p02_q2",
          "type": "mcq",
          "prompt": "L'hydratation des ions consiste en :",
          "options": [
            "L'entourage des ions par des molécules d'eau",
            "La rupture du cristal ionique",
            "La répartition des ions dans la solution",
            "L'échauffement de la solution"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du résumé : les ions s'entourent de molécules d'eau par attraction électrostatique."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p02_q3",
          "type": "mcq",
          "prompt": "Grâce à quelle étape les ions hydratés se répartissent-ils dans toute la solution ?",
          "options": [
            "La dissociation",
            "La dispersion",
            "La solvatation",
            "La précipitation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La dispersion, troisième étape, répartit les ions hydratés dans la solution sous l'effet de l'agitation thermique."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p02_q4",
          "type": "mcq",
          "prompt": "La concentration molaire volumique d'une solution s'écrit :",
          "options": [
            "$C = \\frac{V}{n}$",
            "$C = n \\times V$",
            "$C = n - V$",
            "$C = \\frac{n}{V}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Par définition, C est la quantité de matière par litre : C = n/V."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p02_q5",
          "type": "mcq",
          "prompt": "Dans une solution de chlorure de calcium de concentration C, la concentration des ions chlorure vaut :",
          "options": [
            "[Cl⁻] = 2C",
            "[Cl⁻] = C",
            "[Cl⁻] = C/2",
            "[Cl⁻] = 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'équation de dissociation CaCl₂ → Ca²⁺ + 2 Cl⁻ montre deux ions chlorure par unité dissoute (situation d'évaluation du résumé)."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p02_q6",
          "type": "mcq",
          "prompt": "La concentration massique Cm d'un soluté de masse molaire M et de concentration molaire C vaut :",
          "options": [
            "$C_m = \\frac{C}{M}$",
            "$C_m = C \\times M$",
            "$C_m = \\frac{M}{C}$",
            "$C_m = C + M$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la réponse b de l'activité 2 : CX = [X]·M, car la masse dissoute par litre vaut n/V × M."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l06_ph_p03",
      "order": 3,
      "title": "L'électroneutralité d'une solution aqueuse",
      "summary": "Dans toute solution, la quantité de charges positives égale la quantité de charges négatives.",
      "conceptExplanation": "Dans une solution aqueuse, la quantité de charges positives est toujours égale à la quantité de charges négatives : les solutions aqueuses sont électriquement neutres.\nPour vérifier l'électroneutralité, on somme les concentrations des cations en les pondérant par leur charge, et on compare à la somme équivalente pour les anions.\nExemple de la situation d'évaluation : dans le mélange des solutions de CaCl₂ et de KCl, on vérifie que 2[Ca²⁺] + [K⁺] = [Cl⁻].",
      "keyRule": "Électroneutralité : somme des charges + = somme des charges −, chaque concentration étant multipliée par la valeur de la charge de l'ion.",
      "formulas": [
        {
          "name": "Condition d'électroneutralité (exemple du mélange)",
          "formula": "2\\,\\mathrm{[Ca^{2+}]} + \\mathrm{[K^+]} = \\mathrm{[Cl^-]}",
          "note": "Le coefficient 2 vient de la double charge de l'ion calcium."
        }
      ],
      "workedExample": {
        "title": "Vérifier la neutralité du mélange (situation d'évaluation)",
        "statement": "Dans le mélange des deux solutions, on a [Ca²⁺] = 0,083 mol/L, [K⁺] = 0,366 mol/L et [Cl⁻] = 0,53 mol/L. Vérifie l'électroneutralité.",
        "methodSteps": [
          "Charges positives : 2 × 0,083 + 0,366 = 0,532 mol/L de charges.",
          "Charges négatives : [Cl⁻] = 0,53 mol/L.",
          "Les deux sommes sont égales (à l'arrondi près)."
        ],
        "conclusion": "La neutralité électrique du mélange est vérifiée, comme dans la résolution du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une solution est électriquement neutre",
          "stepTheme": "Une solution est électriquement neutre",
          "stepBadge": "Une solution est électriquement neutre",
          "paragraphText": "• Électroneutralité : dans une solution aqueuse, la quantité de charges positives est toujours égale à la quantité de charges négatives.\nUne solution n'est donc jamais globalement chargée, même si elle contient beaucoup d'ions.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p03_q1",
            "type": "mcq",
            "prompt": "L'électroneutralité d'une solution aqueuse signifie que :",
            "options": [
              "La solution ne contient aucun ion",
              "Les concentrations de tous les ions sont égales",
              "La quantité de charges positives égale la quantité de charges négatives",
              "La solution a un pH de 7"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition du résumé : égalité des quantités de charges, pas des concentrations."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Pondérer par la charge de l'ion",
          "stepTheme": "Pondérer par la charge de l'ion",
          "stepBadge": "Pondérer par la charge de l'ion",
          "paragraphText": "Méthode : un ion de charge 2+ comme Ca²⁺ compte double dans le bilan des charges.\nPour une solution de CaCl₂ de concentration C : les charges + valent 2C et les charges − valent [Cl⁻] = 2C : l'égalité est bien vérifiée.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p03_q2",
            "type": "mcq",
            "prompt": "Dans le bilan des charges, la concentration d'un ion Ca²⁺ doit être multipliée par :",
            "options": [
              "1",
              "2, car sa charge vaut 2+",
              "0,5",
              "Sa masse molaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque ion Ca²⁺ apporte deux charges positives : sa concentration compte double, comme dans la résolution du résumé (2[Ca²⁺] + [K⁺] = [Cl⁻])."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Ne pas oublier les ions de l'eau",
          "stepTheme": "Ne pas oublier les ions de l'eau",
          "stepBadge": "Ne pas oublier les ions de l'eau",
          "paragraphText": "Piège : dans le bilan des espèces d'une solution, ne pas oublier H₃O⁺ et OH⁻, toujours présents.\nLa résolution de la situation d'évaluation liste, parmi les ions présents : K⁺, Cl⁻, OH⁻ et H₃O⁺.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p03_q3",
            "type": "mcq",
            "prompt": "Dans le mélange de solutions de CaCl₂ et de KCl, les ions présents sont :",
            "options": [
              "Ca²⁺, Cl⁻ et H₂O seulement",
              "K⁺, Cl⁻, Ca²⁺ uniquement",
              "Uniquement K⁺ et Ca²⁺",
              "Ca²⁺, K⁺, Cl⁻, ainsi que H₃O⁺ et OH⁻ de l'eau"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'autoprotolyse de l'eau ajoute toujours H₃O⁺ et OH⁻ à l'inventaire des ions."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le mélange KCl + NaOH (exercice 6)",
          "stepTheme": "Le mélange KCl + NaOH (exercice 6)",
          "stepBadge": "Le mélange KCl + NaOH (exercice 6)",
          "paragraphText": "Dans l'exercice 6, on mélange une solution de KCl et une solution de NaOH.\nLa solution montre que [K⁺] + [Na⁺] = 0,2 mol/L et [Cl⁻] + [OH⁻] = 0,2 mol/L : la neutralité est vérifiée.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p03_q4",
            "type": "mcq",
            "prompt": "Dans le mélange de l'exercice 6, la relation d'électroneutralité s'écrit :",
            "options": [
              "[K⁺] + [Na⁺] = [Cl⁻] + [OH⁻]",
              "[K⁺] = [Na⁺]",
              "[Cl⁻] = [OH⁻] uniquement",
              "[K⁺] + [Cl⁻] = [Na⁺] + [OH⁻]"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On compare la somme des cations à la somme des anions : c'est la vérification demandée dans l'exercice 6."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Un mélange de solutions ioniques reste neutre (exercice 3)",
          "stepTheme": "Un mélange de solutions ioniques reste neutre (exercice 3)",
          "stepBadge": "Un mélange de solutions ioniques reste neutre (exercice 3)",
          "paragraphText": "L'exercice 3 prépare un mélange homogène d'hydroxyde de sodium et d'eau : le mélange est basique.\nMais basique ne veut pas dire chargé : la réponse du résumé précise que le mélange obtenu est électriquement neutre.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p03_q5",
            "type": "mcq",
            "prompt": "Une solution basique de soude est, du point de vue électrique :",
            "options": [
              "Chargée négativement",
              "Électriquement neutre",
              "Chargée positivement",
              "Sans aucun ion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Réponse c de l'exercice 3 : les ions Na⁺ compensent exactement les ions OH⁻ ; toute solution est électriquement neutre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "L'opération de dissolution (exercice 3)",
          "stepTheme": "L'opération de dissolution (exercice 3)",
          "stepBadge": "L'opération de dissolution (exercice 3)",
          "paragraphText": "Dans le même exercice 3, mélanger des cristaux (ou une solution) d'hydroxyde de sodium à l'eau en grande quantité est une dissolution.\nL'eau joue alors le rôle de solvant, et l'hydroxyde de sodium celui de soluté.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p03_q6",
            "type": "mcq",
            "prompt": "Quand on mélange de l'hydroxyde de sodium à une grande quantité d'eau, l'eau représente :",
            "options": [
              "Le soluté",
              "La solution",
              "Le solvant",
              "Le précipité"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Réponse b de l'exercice 3 : l'eau, en grande quantité, est le solvant de la dissolution."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l06_ph_p03_q1",
          "type": "mcq",
          "prompt": "L'électroneutralité d'une solution aqueuse signifie que :",
          "options": [
            "La solution ne contient aucun ion",
            "Les concentrations de tous les ions sont égales",
            "La quantité de charges positives égale la quantité de charges négatives",
            "La solution a un pH de 7"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition du résumé : égalité des quantités de charges, pas des concentrations."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p03_q2",
          "type": "mcq",
          "prompt": "Dans le bilan des charges, la concentration d'un ion Ca²⁺ doit être multipliée par :",
          "options": [
            "1",
            "2, car sa charge vaut 2+",
            "0,5",
            "Sa masse molaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque ion Ca²⁺ apporte deux charges positives : sa concentration compte double, comme dans la résolution du résumé (2[Ca²⁺] + [K⁺] = [Cl⁻])."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p03_q3",
          "type": "mcq",
          "prompt": "Dans le mélange de solutions de CaCl₂ et de KCl, les ions présents sont :",
          "options": [
            "Ca²⁺, Cl⁻ et H₂O seulement",
            "K⁺, Cl⁻, Ca²⁺ uniquement",
            "Uniquement K⁺ et Ca²⁺",
            "Ca²⁺, K⁺, Cl⁻, ainsi que H₃O⁺ et OH⁻ de l'eau"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'autoprotolyse de l'eau ajoute toujours H₃O⁺ et OH⁻ à l'inventaire des ions."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p03_q4",
          "type": "mcq",
          "prompt": "Dans le mélange de l'exercice 6, la relation d'électroneutralité s'écrit :",
          "options": [
            "[K⁺] + [Na⁺] = [Cl⁻] + [OH⁻]",
            "[K⁺] = [Na⁺]",
            "[Cl⁻] = [OH⁻] uniquement",
            "[K⁺] + [Cl⁻] = [Na⁺] + [OH⁻]"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On compare la somme des cations à la somme des anions : c'est la vérification demandée dans l'exercice 6."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p03_q5",
          "type": "mcq",
          "prompt": "Une solution basique de soude est, du point de vue électrique :",
          "options": [
            "Chargée négativement",
            "Électriquement neutre",
            "Chargée positivement",
            "Sans aucun ion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Réponse c de l'exercice 3 : les ions Na⁺ compensent exactement les ions OH⁻ ; toute solution est électriquement neutre."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p03_q6",
          "type": "mcq",
          "prompt": "Quand on mélange de l'hydroxyde de sodium à une grande quantité d'eau, l'eau représente :",
          "options": [
            "Le soluté",
            "La solution",
            "Le solvant",
            "Le précipité"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Réponse b de l'exercice 3 : l'eau, en grande quantité, est le solvant de la dissolution."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l06_ph_p04",
      "order": 4,
      "title": "Le pH d'une solution aqueuse",
      "summary": "Définir le pH, le relier à [H₃O⁺], le mesurer et passer de l'un à l'autre.",
      "conceptExplanation": "Le pH d'une solution aqueuse est défini par $\\mathrm{pH} = -\\log[H_3O^+]$, et réciproquement $[H_3O^+] = 10^{-pH}$.\nÀ 25 °C, le pH varie de 0 à 14.\nOn détermine le pH d'une solution avec un papier pH (mesure approximative) ou un pH-mètre (mesure précise).\nConnaissant [OH⁻], on retrouve [H₃O⁺] grâce au produit ionique : $[H_3O^+] = K_e/[OH^-]$, puis le pH.",
      "keyRule": "pH = −log[H₃O⁺] et [H₃O⁺] = 10^(−pH) : les deux formules inverses l'une de l'autre, à connaître dans les deux sens.",
      "formulas": [
        {
          "name": "Définition du pH",
          "formula": "\\mathrm{pH} = -\\log[H_3O^+]",
          "note": "[H₃O⁺] est en mol/L."
        },
        {
          "name": "Relation inverse",
          "formula": "\\mathrm{[H_3O^+]} = 10^{-\\mathrm{pH}}",
          "note": "Permet de retrouver la concentration à partir du pH."
        },
        {
          "name": "Passer par les ions hydroxyde",
          "formula": "\\mathrm{[H_3O^+]} = \\frac{K_e}{\\mathrm{[OH^-]}}",
          "note": "Avec Ke = 10⁻¹⁴ à 25 °C."
        }
      ],
      "workedExample": {
        "title": "Les calculs de l'exercice 2",
        "statement": "Détermine le pH d'une solution où $[H_3O^+] = 3 \\times 10^{-3}$ mol/L, puis la concentration [H₃O⁺] d'une solution de pH = 2,4.",
        "methodSteps": [
          "pH = −log(3 × 10⁻³) = 2,52.",
          "Pour la seconde solution : [H₃O⁺] = 10^(−2,4) ≈ 4 × 10⁻³ mol/L."
        ],
        "conclusion": "Ce sont les résultats de la solution de l'exercice 2 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition du pH",
          "stepTheme": "La définition du pH",
          "stepBadge": "La définition du pH",
          "paragraphText": "• pH : nombre défini par $\\mathrm{pH} = -\\log[H_3O^+]$, où [H₃O⁺] est la concentration en ions hydronium en mol/L.\nPlus [H₃O⁺] est grande, plus le pH est petit.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p04_q1",
            "type": "mcq",
            "prompt": "Le pH d'une solution aqueuse est défini par :",
            "options": [
              "$\\mathrm{pH} = -\\log[H_3O^+]$",
              "$\\mathrm{pH} = \\log[H_3O^+]$",
              "$\\mathrm{pH} = -\\log[OH^-]$",
              "$\\mathrm{pH} = [H_3O^+] \\times [OH^-]$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'expression donnée dans le résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Retrouver [H₃O⁺] à partir du pH",
          "stepTheme": "Retrouver [H₃O⁺] à partir du pH",
          "stepBadge": "Retrouver [H₃O⁺] à partir du pH",
          "paragraphText": "La relation inverse est $[H_3O^+] = 10^{-pH}$.\nExemple de l'exercice 2 : pour pH = 12, [H₃O⁺] = 10⁻¹² mol/L.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p04_q2",
            "type": "mcq",
            "prompt": "Une solution a un pH de 12 à 25 °C. Sa concentration en ions hydronium vaut :",
            "options": [
              "$10^{-2}$ mol/L",
              "$10^{-12}$ mol/L",
              "$12$ mol/L",
              "$10^{12}$ mol/L"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On applique la relation inverse [H₃O⁺] = 10^(−pH), comme dans l'exercice 2."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'échelle de pH à 25 °C",
          "stepTheme": "L'échelle de pH à 25 °C",
          "stepBadge": "L'échelle de pH à 25 °C",
          "paragraphText": "Le résumé précise que le pH varie de 0 à 14 à 25 °C.\nCette échelle est liée à la valeur du produit ionique Ke = 10⁻¹⁴ à cette température.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p04_q3",
            "type": "mcq",
            "prompt": "À 25 °C, le pH d'une solution aqueuse varie typiquement :",
            "options": [
              "De −7 à +7",
              "De 1 à 100",
              "De 0 à 14",
              "De 0 à 7 seulement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'intervalle donné par le résumé à 25 °C."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Mesurer le pH : papier pH et pH-mètre",
          "stepTheme": "Mesurer le pH : papier pH et pH-mètre",
          "stepBadge": "Mesurer le pH : papier pH et pH-mètre",
          "paragraphText": "On détermine le pH d'une solution aqueuse avec un papier pH ou avec un pH-mètre.\nLe pH-mètre donne une mesure précise ; le papier pH donne une valeur approchée par comparaison de couleur.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p04_q4",
            "type": "mcq",
            "prompt": "Pour mesurer précisément le pH d'une solution, on utilise :",
            "options": [
              "Un papier pH",
              "Un galvanomètre",
              "Un thermomètre",
              "Un pH-mètre"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé cite le papier pH et le pH-mètre ; le pH-mètre est l'instrument de mesure précis."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Passer par Ke quand on connaît [OH⁻]",
          "stepTheme": "Passer par Ke quand on connaît [OH⁻]",
          "stepBadge": "Passer par Ke quand on connaît [OH⁻]",
          "paragraphText": "Piège : appliquer pH = −log[OH⁻]. C'est faux : le pH fait intervenir [H₃O⁺].\nDans l'exercice 2, pour [OH⁻] = 10⁻⁵ mol/L, on calcule d'abord [H₃O⁺] = Ke/[OH⁻] = 10⁻⁹ mol/L, puis pH = 9.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p04_q5",
            "type": "mcq",
            "prompt": "Une solution a $[OH^-] = 10^{-5}$ mol/L à 25 °C. Son pH vaut :",
            "options": [
              "9",
              "5",
              "7",
              "12"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On passe par Ke : [H₃O⁺] = Ke/[OH⁻] = 10⁻⁹ mol/L, donc pH = 9 (exercice 2)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un pH calculé : 2,52",
          "stepTheme": "Un pH calculé : 2,52",
          "stepBadge": "Un pH calculé : 2,52",
          "paragraphText": "Pour une solution contenant $[H_3O^+] = 3 \\times 10^{-3}$ mol/L, l'exercice 2 donne pH = −log(3 × 10⁻³) = 2,52.\nOn retiendra qu'un pH n'est pas forcément un nombre entier.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p04_q6",
            "type": "mcq",
            "prompt": "Le pH d'une solution où $[H_3O^+] = 3 \\times 10^{-3}$ mol/L vaut environ :",
            "options": [
              "3,00",
              "2,52",
              "11,48",
              "0,52"
            ],
            "correctAnswerIndex": 1,
            "explanation": "pH = −log(3 × 10⁻³) ≈ 2,52 : c'est le calcul de l'exercice 2."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l06_ph_p04_q1",
          "type": "mcq",
          "prompt": "Le pH d'une solution aqueuse est défini par :",
          "options": [
            "$\\mathrm{pH} = -\\log[H_3O^+]$",
            "$\\mathrm{pH} = \\log[H_3O^+]$",
            "$\\mathrm{pH} = -\\log[OH^-]$",
            "$\\mathrm{pH} = [H_3O^+] \\times [OH^-]$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'expression donnée dans le résumé."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p04_q2",
          "type": "mcq",
          "prompt": "Une solution a un pH de 12 à 25 °C. Sa concentration en ions hydronium vaut :",
          "options": [
            "$10^{-2}$ mol/L",
            "$10^{-12}$ mol/L",
            "$12$ mol/L",
            "$10^{12}$ mol/L"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On applique la relation inverse [H₃O⁺] = 10^(−pH), comme dans l'exercice 2."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p04_q3",
          "type": "mcq",
          "prompt": "À 25 °C, le pH d'une solution aqueuse varie typiquement :",
          "options": [
            "De −7 à +7",
            "De 1 à 100",
            "De 0 à 14",
            "De 0 à 7 seulement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'intervalle donné par le résumé à 25 °C."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p04_q4",
          "type": "mcq",
          "prompt": "Pour mesurer précisément le pH d'une solution, on utilise :",
          "options": [
            "Un papier pH",
            "Un galvanomètre",
            "Un thermomètre",
            "Un pH-mètre"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé cite le papier pH et le pH-mètre ; le pH-mètre est l'instrument de mesure précis."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p04_q5",
          "type": "mcq",
          "prompt": "Une solution a $[OH^-] = 10^{-5}$ mol/L à 25 °C. Son pH vaut :",
          "options": [
            "9",
            "5",
            "7",
            "12"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On passe par Ke : [H₃O⁺] = Ke/[OH⁻] = 10⁻⁹ mol/L, donc pH = 9 (exercice 2)."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p04_q6",
          "type": "mcq",
          "prompt": "Le pH d'une solution où $[H_3O^+] = 3 \\times 10^{-3}$ mol/L vaut environ :",
          "options": [
            "3,00",
            "2,52",
            "11,48",
            "0,52"
          ],
          "correctAnswerIndex": 1,
          "explanation": "pH = −log(3 × 10⁻³) ≈ 2,52 : c'est le calcul de l'exercice 2."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l06_ph_p05",
      "order": 5,
      "title": "Classification des solutions selon le pH",
      "summary": "Acide, neutre ou basique : comparer [H₃O⁺] et [OH⁻] et situer le pH par rapport à 7.",
      "conceptExplanation": "À 25 °C, on classe les solutions aqueuses selon leur pH.\nUne solution est acide si pH < 7, c'est-à-dire si [H₃O⁺] > [OH⁻] ; elle est d'autant plus acide que le pH est petit.\nUne solution est neutre si pH = 7, c'est-à-dire si [H₃O⁺] = [OH⁻].\nUne solution est basique si pH > 7, c'est-à-dire si [H₃O⁺] < [OH⁻] ; elle est d'autant plus basique que le pH est grand.",
      "keyRule": "À 25 °C : pH < 7 acide, pH = 7 neutre, pH > 7 basique — équivalent à comparer [H₃O⁺] et [OH⁻].",
      "formulas": [],
      "workedExample": {
        "title": "Une solution de pH = 2,3 (activité d'application)",
        "statement": "On mesure à 25 °C le pH d'une solution aqueuse : pH = 2,3. Classe la solution et détermine [H₃O⁺] et [OH⁻].",
        "methodSteps": [
          "pH = 2,3 < 7 : la solution est acide.",
          "[H₃O⁺] = 10^(−2,3) ≈ 5 × 10⁻³ mol/L.",
          "[OH⁻] = Ke/[H₃O⁺] ≈ 2 × 10⁻¹² mol/L, très inférieure à [H₃O⁺], ce qui confirme le caractère acide."
        ],
        "conclusion": "Ce sont les valeurs calculées dans la solution de l'activité du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Solution acide : pH inférieur à 7",
          "stepTheme": "Solution acide : pH inférieur à 7",
          "stepBadge": "Solution acide : pH inférieur à 7",
          "paragraphText": "• Solution acide : solution dont le pH est inférieur à 7 à 25 °C.\nDans ce cas, [H₃O⁺] > [OH⁻] : plus le pH diminue vers 0, plus la solution est acide.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p05_q1",
            "type": "mcq",
            "prompt": "À 25 °C, une solution de pH = 3 est :",
            "options": [
              "Acide",
              "Basique",
              "Neutre",
              "Sans ions"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un pH inférieur à 7 caractérise une solution acide."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Solution neutre : pH égal à 7",
          "stepTheme": "Solution neutre : pH égal à 7",
          "stepBadge": "Solution neutre : pH égal à 7",
          "paragraphText": "• Solution neutre : solution dont le pH vaut 7 à 25 °C.\nDans ce cas, [H₃O⁺] = [OH⁻] : c'est le cas de l'eau pure à 25 °C.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p05_q2",
            "type": "mcq",
            "prompt": "Une solution aqueuse est neutre à 25 °C si :",
            "options": [
              "Elle ne contient aucun ion",
              "[H₃O⁺] = [OH⁻], avec un pH de 7",
              "[H₃O⁺] > [OH⁻]",
              "Son pH vaut 0"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le schéma de classification du résumé place la neutralité à pH = 7, là où les deux concentrations sont égales."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Solution basique : pH supérieur à 7",
          "stepTheme": "Solution basique : pH supérieur à 7",
          "stepBadge": "Solution basique : pH supérieur à 7",
          "paragraphText": "• Solution basique : solution dont le pH est supérieur à 7 à 25 °C.\nDans ce cas, [H₃O⁺] < [OH⁻] : plus le pH augmente vers 14, plus la solution est basique.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p05_q3",
            "type": "mcq",
            "prompt": "Dans une solution basique à 25 °C, on a :",
            "options": [
              "[H₃O⁺] > [OH⁻]",
              "[H₃O⁺] = [OH⁻]",
              "[H₃O⁺] < [OH⁻]",
              "[OH⁻] = 0"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le schéma du résumé indique [H₃O⁺] < [OH⁻] dans la zone des solutions basiques."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Une solution acide contient aussi des ions OH⁻",
          "stepTheme": "Une solution acide contient aussi des ions OH⁻",
          "stepBadge": "Une solution acide contient aussi des ions OH⁻",
          "paragraphText": "Piège : croire qu'une solution acide ne contient pas d'ions OH⁻.\nMême à pH = 2,3, il reste des ions OH⁻ (environ 2 × 10⁻¹² mol/L) : ils sont minoritaires, pas absents.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p05_q4",
            "type": "mcq",
            "prompt": "Dans une solution acide de pH = 2,3 à 25 °C, la concentration en ions OH⁻ vaut environ :",
            "options": [
              "0 mol/L",
              "5 × 10⁻³ mol/L",
              "10⁻²·³ mol/L",
              "2 × 10⁻¹² mol/L"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le produit ionique impose [OH⁻] = Ke/[H₃O⁺] ≈ 2 × 10⁻¹² mol/L : faible, mais non nulle (activité du résumé)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le jus de citron (exercice 4)",
          "stepTheme": "Le jus de citron (exercice 4)",
          "stepBadge": "Le jus de citron (exercice 4)",
          "paragraphText": "L'exercice 4 étudie un jus de citron de pH = 2,3 à 25 °C : c'est une solution acide.\nOn y calcule [H₃O⁺] = 5,01 × 10⁻³ mol/L et, dans un verre de 100 mL, une quantité d'ions hydronium de 5,01 × 10⁻⁴ mol.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p05_q5",
            "type": "mcq",
            "prompt": "La quantité d'ions hydronium dans 100 mL de jus de citron (pH = 2,3) vaut environ :",
            "options": [
              "5,01 × 10⁻⁴ mol",
              "5,01 × 10⁻³ mol",
              "5,01 × 10⁻² mol",
              "2,3 mol"
            ],
            "correctAnswerIndex": 0,
            "explanation": "n = [H₃O⁺] × V = 5,01 × 10⁻³ × 0,100 ≈ 5,01 × 10⁻⁴ mol : c'est le calcul de l'exercice 4."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "L'importance du pH au quotidien",
          "stepTheme": "L'importance du pH au quotidien",
          "stepBadge": "L'importance du pH au quotidien",
          "paragraphText": "D'après la documentation du résumé, le pH intervient en chimie, en biologie, en agriculture, en aquaculture et en médecine.\nEn agriculture, on distingue les plantes acidophiles (sols acides), alcalinophiles (sols basiques) et neutrophiles (sols neutres).",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p05_q6",
            "type": "mcq",
            "prompt": "D'après la documentation, une plante qui se développe mieux sur un sol basique est dite :",
            "options": [
              "Acidophile",
              "Alcalinophile",
              "Neutrophile",
              "Hydrophile"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La documentation distingue les plantes alcalinophiles, adaptées aux sols basiques, des acidophiles et des neutrophiles."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l06_ph_p05_q1",
          "type": "mcq",
          "prompt": "À 25 °C, une solution de pH = 3 est :",
          "options": [
            "Acide",
            "Basique",
            "Neutre",
            "Sans ions"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un pH inférieur à 7 caractérise une solution acide."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p05_q2",
          "type": "mcq",
          "prompt": "Une solution aqueuse est neutre à 25 °C si :",
          "options": [
            "Elle ne contient aucun ion",
            "[H₃O⁺] = [OH⁻], avec un pH de 7",
            "[H₃O⁺] > [OH⁻]",
            "Son pH vaut 0"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le schéma de classification du résumé place la neutralité à pH = 7, là où les deux concentrations sont égales."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p05_q3",
          "type": "mcq",
          "prompt": "Dans une solution basique à 25 °C, on a :",
          "options": [
            "[H₃O⁺] > [OH⁻]",
            "[H₃O⁺] = [OH⁻]",
            "[H₃O⁺] < [OH⁻]",
            "[OH⁻] = 0"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le schéma du résumé indique [H₃O⁺] < [OH⁻] dans la zone des solutions basiques."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p05_q4",
          "type": "mcq",
          "prompt": "Dans une solution acide de pH = 2,3 à 25 °C, la concentration en ions OH⁻ vaut environ :",
          "options": [
            "0 mol/L",
            "5 × 10⁻³ mol/L",
            "10⁻²·³ mol/L",
            "2 × 10⁻¹² mol/L"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le produit ionique impose [OH⁻] = Ke/[H₃O⁺] ≈ 2 × 10⁻¹² mol/L : faible, mais non nulle (activité du résumé)."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p05_q5",
          "type": "mcq",
          "prompt": "La quantité d'ions hydronium dans 100 mL de jus de citron (pH = 2,3) vaut environ :",
          "options": [
            "5,01 × 10⁻⁴ mol",
            "5,01 × 10⁻³ mol",
            "5,01 × 10⁻² mol",
            "2,3 mol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "n = [H₃O⁺] × V = 5,01 × 10⁻³ × 0,100 ≈ 5,01 × 10⁻⁴ mol : c'est le calcul de l'exercice 4."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p05_q6",
          "type": "mcq",
          "prompt": "D'après la documentation, une plante qui se développe mieux sur un sol basique est dite :",
          "options": [
            "Acidophile",
            "Alcalinophile",
            "Neutrophile",
            "Hydrophile"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La documentation distingue les plantes alcalinophiles, adaptées aux sols basiques, des acidophiles et des neutrophiles."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l06_ph_p06",
      "order": 6,
      "title": "Concentrations des ions d'une solution de sel",
      "summary": "De l'équation de dissociation aux concentrations des ions : les exemples NaCl et FeCl₂.",
      "conceptExplanation": "Pour obtenir les concentrations des ions d'une solution, on écrit d'abord l'équation de dissociation du soluté dans l'eau.\nLes coefficients de l'équation donnent les proportions : pour NaCl → Na⁺ + Cl⁻, on a [Na⁺] = [Cl⁻] = C ; pour FeCl₂ → Fe²⁺ + 2 Cl⁻, on a [Fe²⁺] = C et [Cl⁻] = 2C.\nExemple de l'exercice 1 : 10 g de NaCl dans 100 mL d'eau donnent C = 1,71 mol/L et une concentration massique de 100 g/L.",
      "keyRule": "L'équation de dissociation fixe les rapports entre les concentrations des ions et celle de la solution.",
      "formulas": [
        {
          "name": "Dissociation du chlorure de sodium",
          "formula": "\\mathrm{NaCl \\xrightarrow{H_2O} Na^+ + Cl^-}",
          "note": "Donc [Na⁺] = [Cl⁻] = C."
        },
        {
          "name": "Dissociation du chlorure de fer II",
          "formula": "\\mathrm{FeCl_2 \\xrightarrow{H_2O} Fe^{2+} + 2\\,Cl^-}",
          "note": "Donc [Fe²⁺] = C et [Cl⁻] = 2C."
        }
      ],
      "workedExample": {
        "title": "La solution de chlorure de sodium (exercice 1)",
        "statement": "On dissout 10 g de chlorure de sodium dans 100 mL d'eau. Détermine la concentration molaire de la solution, sa concentration massique et les concentrations des ions.",
        "methodSteps": [
          "M(NaCl) = 23 + 35,5 = 58,5 g/mol, donc n ≈ 0,171 mol pour les 10 g dissous.",
          "C = n/V ≈ 1,71 mol/L.",
          "Cm = m/V = 100 g/L.",
          "L'équation NaCl → Na⁺ + Cl⁻ donne [Na⁺] = [Cl⁻] = C = 1,71 mol/L."
        ],
        "conclusion": "Ce sont exactement les résultats de la solution de l'exercice 1 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Écrire l'équation de dissociation",
          "stepTheme": "Écrire l'équation de dissociation",
          "stepBadge": "Écrire l'équation de dissociation",
          "paragraphText": "Méthode : écrire l'équation de dissociation du composé ionique dans l'eau, en équilibrant les charges.\nPour CaCl₂ : CaCl₂ → Ca²⁺ + 2 Cl⁻ ; pour KCl : KCl → K⁺ + Cl⁻ (situation d'évaluation).",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p06_q1",
            "type": "mcq",
            "prompt": "L'équation de dissociation du chlorure de calcium dans l'eau s'écrit :",
            "options": [
              "CaCl₂ → Ca²⁺ + 2 Cl⁻",
              "CaCl₂ → Ca⁺ + Cl₂⁻",
              "CaCl₂ → 2 Ca⁺ + 2 Cl⁻",
              "CaCl₂ → Ca + Cl₂"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un ion calcium Ca²⁺ et deux ions chlorure Cl⁻ : les charges sont équilibrées, comme dans la résolution du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Calculer la quantité de matière dissoute",
          "stepTheme": "Calculer la quantité de matière dissoute",
          "stepBadge": "Calculer la quantité de matière dissoute",
          "paragraphText": "On calcule d'abord la masse molaire du soluté, puis la quantité de matière $n = \\frac{m}{M}$.\nDans la situation d'évaluation : M(CaCl₂) = 111 g/mol et n = 0,091 mol pour 10 g dissous.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p06_q2",
            "type": "mcq",
            "prompt": "La masse molaire du chlorure de calcium CaCl₂ vaut (M(Ca) = 40 ; M(Cl) = 35,5) :",
            "options": [
              "75,5 g/mol",
              "111 g/mol",
              "146,5 g/mol",
              "95 g/mol"
            ],
            "correctAnswerIndex": 1,
            "explanation": "M(CaCl₂) = 40 + 2 × 35,5 = 111 g/mol, valeur utilisée dans la résolution du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Le volume du mélange s'additionne",
          "stepTheme": "Le volume du mélange s'additionne",
          "stepBadge": "Le volume du mélange s'additionne",
          "paragraphText": "Piège : après mélange de 400 mL et 700 mL de solutions, les concentrations se calculent avec le volume total, 1,1 L.\nLa résolution du résumé obtient ainsi [Ca²⁺] = 0,083 mol/L dans le mélange.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p06_q3",
            "type": "mcq",
            "prompt": "On mélange 400 mL d'une solution et 700 mL d'une autre. Le volume total du mélange est :",
            "options": [
              "700 mL",
              "400 mL",
              "1,1 L",
              "300 mL"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les volumes s'additionnent : 400 + 700 = 1100 mL, soit 1,1 L, volume utilisé dans les calculs du résumé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les ions chlorure s'ajoutent dans un mélange",
          "stepTheme": "Les ions chlorure s'ajoutent dans un mélange",
          "stepBadge": "Les ions chlorure s'ajoutent dans un mélange",
          "paragraphText": "Dans le mélange de la situation d'évaluation, les ions Cl⁻ proviennent des deux solutions : 0,182 mol apportés par le CaCl₂ et 0,403 mol par le KCl, soit 0,585 mol au total.\nLeur concentration totale dans le volume de 1,1 L vaut donc [Cl⁻] = 0,53 mol/L.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p06_q4",
            "type": "mcq",
            "prompt": "Dans le mélange, la concentration totale en ions chlorure vaut environ :",
            "options": [
              "0,455 mol/L",
              "0,576 mol/L",
              "1,03 mol/L",
              "0,53 mol/L"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On additionne les quantités de Cl⁻ des deux solutions avant de diviser par le volume total : 0,53 mol/L (résolution du résumé)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Préparer une solution de FeCl₂ (exercice 5)",
          "stepTheme": "Préparer une solution de FeCl₂ (exercice 5)",
          "stepBadge": "Préparer une solution de FeCl₂ (exercice 5)",
          "paragraphText": "L'exercice 5 prépare une solution S₀ de FeCl₂ à C = 1 mol/L dans une fiole jaugée de 500 mL.\nLe mode opératoire : peser le solide, l'introduire dans la fiole contenant un peu d'eau, dissoudre totalement, puis compléter au trait de jauge et homogénéiser.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p06_q5",
            "type": "mcq",
            "prompt": "Pour préparer la solution S₀ de l'exercice 5, après dissolution totale du solide, il faut :",
            "options": [
              "Compléter avec de l'eau distillée jusqu'au trait de jauge de la fiole, puis homogénéiser",
              "Ajouter exactement 500 mL d'eau avec une éprouvette",
              "Chauffer la fiole jusqu'à ébullition",
              "Filtrer la solution"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le mode opératoire décrit dans la solution de l'exercice 5 : fiole jaugée, dissolution, ajustement au trait de jauge."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Concentrations des ions de la solution de FeCl₂",
          "stepTheme": "Concentrations des ions de la solution de FeCl₂",
          "stepBadge": "Concentrations des ions de la solution de FeCl₂",
          "paragraphText": "L'équation FeCl₂ → Fe²⁺ + 2 Cl⁻ fixe les proportions.\nPour la solution S₀ de concentration C = 1 mol/L, on a donc [Fe²⁺] = 1 mol/L et [Cl⁻] = 2 mol/L.",
          "exercise": {
            "id": "terminale_c_chimie_l06_ph_p06_q6",
            "type": "mcq",
            "prompt": "Dans la solution S₀ de FeCl₂ de concentration C = 1 mol/L, la concentration des ions chlorure vaut :",
            "options": [
              "1 mol/L",
              "2 mol/L",
              "0,5 mol/L",
              "3 mol/L"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque FeCl₂ libère deux ions Cl⁻ : [Cl⁻] = 2C = 2 mol/L, selon l'équation de dissolution de l'exercice 5."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l06_ph_p06_q1",
          "type": "mcq",
          "prompt": "L'équation de dissociation du chlorure de calcium dans l'eau s'écrit :",
          "options": [
            "CaCl₂ → Ca²⁺ + 2 Cl⁻",
            "CaCl₂ → Ca⁺ + Cl₂⁻",
            "CaCl₂ → 2 Ca⁺ + 2 Cl⁻",
            "CaCl₂ → Ca + Cl₂"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un ion calcium Ca²⁺ et deux ions chlorure Cl⁻ : les charges sont équilibrées, comme dans la résolution du résumé."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p06_q2",
          "type": "mcq",
          "prompt": "La masse molaire du chlorure de calcium CaCl₂ vaut (M(Ca) = 40 ; M(Cl) = 35,5) :",
          "options": [
            "75,5 g/mol",
            "111 g/mol",
            "146,5 g/mol",
            "95 g/mol"
          ],
          "correctAnswerIndex": 1,
          "explanation": "M(CaCl₂) = 40 + 2 × 35,5 = 111 g/mol, valeur utilisée dans la résolution du résumé."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p06_q3",
          "type": "mcq",
          "prompt": "On mélange 400 mL d'une solution et 700 mL d'une autre. Le volume total du mélange est :",
          "options": [
            "700 mL",
            "400 mL",
            "1,1 L",
            "300 mL"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les volumes s'additionnent : 400 + 700 = 1100 mL, soit 1,1 L, volume utilisé dans les calculs du résumé."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p06_q4",
          "type": "mcq",
          "prompt": "Dans le mélange, la concentration totale en ions chlorure vaut environ :",
          "options": [
            "0,455 mol/L",
            "0,576 mol/L",
            "1,03 mol/L",
            "0,53 mol/L"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On additionne les quantités de Cl⁻ des deux solutions avant de diviser par le volume total : 0,53 mol/L (résolution du résumé)."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p06_q5",
          "type": "mcq",
          "prompt": "Pour préparer la solution S₀ de l'exercice 5, après dissolution totale du solide, il faut :",
          "options": [
            "Compléter avec de l'eau distillée jusqu'au trait de jauge de la fiole, puis homogénéiser",
            "Ajouter exactement 500 mL d'eau avec une éprouvette",
            "Chauffer la fiole jusqu'à ébullition",
            "Filtrer la solution"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le mode opératoire décrit dans la solution de l'exercice 5 : fiole jaugée, dissolution, ajustement au trait de jauge."
        },
        {
          "id": "terminale_c_chimie_l06_ph_p06_q6",
          "type": "mcq",
          "prompt": "Dans la solution S₀ de FeCl₂ de concentration C = 1 mol/L, la concentration des ions chlorure vaut :",
          "options": [
            "1 mol/L",
            "2 mol/L",
            "0,5 mol/L",
            "3 mol/L"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque FeCl₂ libère deux ions Cl⁻ : [Cl⁻] = 2C = 2 mol/L, selon l'équation de dissolution de l'exercice 5."
        }
      ]
    }
  ]
};
