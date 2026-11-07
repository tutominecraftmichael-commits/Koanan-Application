import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1A-Maths leçon-02 dénombrement.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_1RE_L02_DENOMBREMENT: CurriculumChapter = {
  "id": "premiere_a1_maths_numerique_l02_denombrement",
  "subjectId": "maths",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 2,
  "title": "Leçon 2 : Dénombrement",
  "summary": "Cardinal, complémentaire, produit cartésien, p-listes, arrangements, permutations et combinaisons, et le choix du bon outil selon le type de tirage.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "1A-Maths leçon-02 dénombrement.pdf",
  "points": [
    {
      "id": "premiere_a1_maths_numerique_l02_denombrement_p01",
      "order": 1,
      "title": "Cardinal et complémentaire",
      "summary": "Compter les éléments d'un ensemble.",
      "conceptExplanation": "1. Le cardinal d'un ensemble fini $E$ est le nombre de ses éléments. On le note $\\mathrm{Card}(E)$.\nExemple : $A=\\{a\\,;b\\,;c\\,;d\\,;e\\,;f\\}$ a pour cardinal $\\mathrm{Card}(A)=6$ ; $B=\\{0\\,;1\\}$ a pour cardinal $2$.\n\n2. Le complémentaire d'une partie $A$ de $E$ est l'ensemble des éléments de $E$ qui n'appartiennent pas à $A$. On le note $\\overline{A}$.\nExemple : $E=\\{1\\,;2\\,;3\\,;4\\,;5\\,;6\\,;7\\}$ et $A=\\{1\\,;4\\,;7\\}$ ; alors $\\overline{A}=\\{2\\,;3\\,;5\\,;6\\}$.\n\nPropriété : $\\mathrm{Card}(\\overline{A})=\\mathrm{Card}(E)-\\mathrm{Card}(A)$.\n\nCette propriété est très utile pour compter « au moins un » : on compte le contraire (« aucun ») puis on soustrait du total.",
      "keyRule": "$\\mathrm{Card}(E)$ = nombre d'éléments. $\\mathrm{Card}(\\overline{A})=\\mathrm{Card}(E)-\\mathrm{Card}(A)$.",
      "formulas": [],
      "workedExample": {
        "title": "Utiliser le complémentaire",
        "statement": "$E=\\{1\\,;2\\,;3\\,;4\\,;5\\,;7\\,;8\\,;9\\,;10\\,;11\\}$ et $A$ est l'ensemble des nombres impairs de $E$. Calcule $\\mathrm{Card}(\\overline{A})$.",
        "methodSteps": [
          "$A=\\{1\\,;3\\,;5\\,;7\\,;9\\,;11\\}$, donc $\\mathrm{Card}(A)=6$ ; $E$ a $10$ éléments.",
          "$\\mathrm{Card}(\\overline{A})=10-6=4$."
        ],
        "conclusion": "$\\mathrm{Card}(\\overline{A})=4$ : ce sont les nombres pairs $2$, $4$, $8$, $10$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le cardinal",
          "stepTheme": "Le cardinal",
          "stepBadge": "Le cardinal",
          "paragraphText": "Le cardinal d'un ensemble fini est le nombre de ses éléments.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q1",
            "type": "mcq",
            "prompt": "Quel est le cardinal de $A=\\{a\\,;b\\,;c\\,;d\\,;e\\,;f\\}$ ?",
            "options": [
              "$5$",
              "$1$",
              "$6$",
              "$26$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On compte les éléments : il y en a six."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le complémentaire",
          "stepTheme": "Le complémentaire",
          "stepBadge": "Le complémentaire",
          "paragraphText": "Le complémentaire $\\overline{A}$ de $A$ dans $E$ regroupe les éléments de $E$ qui ne sont pas dans $A$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q2",
            "type": "mcq",
            "prompt": "$E=\\{1\\,;2\\,;3\\,;4\\,;5\\,;6\\,;7\\}$ et $A=\\{1\\,;4\\,;7\\}$. Quel est $\\overline{A}$ ?",
            "options": [
              "$\\{2\\,;3\\,;5\\,;6\\}$",
              "$\\{1\\,;4\\,;7\\}$",
              "$\\{1\\,;2\\,;3\\,;4\\}$",
              "$\\varnothing$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On retire de $E$ les éléments de $A$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le cardinal du complémentaire",
          "stepTheme": "Le cardinal du complémentaire",
          "stepBadge": "Le cardinal du complémentaire",
          "paragraphText": "$\\mathrm{Card}(\\overline{A})=\\mathrm{Card}(E)-\\mathrm{Card}(A)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q3",
            "type": "mcq",
            "prompt": "$E$ a $10$ éléments et $A$ en a $6$. Combien d'éléments a $\\overline{A}$ ?",
            "options": [
              "$16$",
              "$6$",
              "$60$",
              "$4$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$10-6=4$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les nombres pairs",
          "stepTheme": "Les nombres pairs",
          "stepBadge": "Les nombres pairs",
          "paragraphText": "Dans $E=\\{1\\,;2\\,;3\\,;4\\,;5\\,;7\\,;8\\,;9\\,;10\\,;11\\}$, les nombres impairs sont $1$, $3$, $5$, $7$, $9$, $11$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q4",
            "type": "mcq",
            "prompt": "Combien de nombres impairs contient $E=\\{1\\,;2\\,;3\\,;4\\,;5\\,;7\\,;8\\,;9\\,;10\\,;11\\}$ ?",
            "options": [
              "$5$",
              "$6$",
              "$4$",
              "$10$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$1$, $3$, $5$, $7$, $9$ et $11$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Compter « au moins un »",
          "stepTheme": "Compter « au moins un »",
          "stepBadge": "Compter « au moins un »",
          "paragraphText": "Pour compter les cas avec « au moins un », on compte les cas avec « aucun » et on les retire du total.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q5",
            "type": "mcq",
            "prompt": "Sur $1\\,000$ tirages, $343$ ne contiennent aucune boule noire. Combien contiennent au moins une boule noire ?",
            "options": [
              "$343$",
              "$657$",
              "$1\\,343$",
              "$700$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$1\\,000-343=657$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un ensemble à deux éléments",
          "stepTheme": "Un ensemble à deux éléments",
          "stepBadge": "Un ensemble à deux éléments",
          "paragraphText": "$B=\\{0\\,;1\\}$ contient deux éléments : $\\mathrm{Card}(B)=2$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\mathrm{Card}(\\{0\\,;1\\})$ ?",
            "options": [
              "$1$",
              "$0$",
              "$3$",
              "$2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le zéro compte comme un élément."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Complémentaire et ensemble total",
          "stepTheme": "Complémentaire et ensemble total",
          "stepBadge": "Complémentaire et ensemble total",
          "paragraphText": "Le complémentaire dépend de l'ensemble de référence $E$ : $A$ et $\\overline{A}$ réunis redonnent $E$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q7",
            "type": "mcq",
            "prompt": "Que donne la réunion de $A$ et de son complémentaire $\\overline{A}$ dans $E$ ?",
            "options": [
              "L'ensemble $E$",
              "L'ensemble vide",
              "L'ensemble $A$",
              "L'ensemble $\\overline{A}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque élément de $E$ est soit dans $A$, soit dans $\\overline{A}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q1",
          "type": "mcq",
          "prompt": "Quel est le cardinal de $A=\\{a\\,;b\\,;c\\,;d\\,;e\\,;f\\}$ ?",
          "options": [
            "$5$",
            "$1$",
            "$6$",
            "$26$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On compte les éléments : il y en a six."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q2",
          "type": "mcq",
          "prompt": "$E=\\{1\\,;2\\,;3\\,;4\\,;5\\,;6\\,;7\\}$ et $A=\\{1\\,;4\\,;7\\}$. Quel est $\\overline{A}$ ?",
          "options": [
            "$\\{2\\,;3\\,;5\\,;6\\}$",
            "$\\{1\\,;4\\,;7\\}$",
            "$\\{1\\,;2\\,;3\\,;4\\}$",
            "$\\varnothing$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On retire de $E$ les éléments de $A$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q3",
          "type": "mcq",
          "prompt": "$E$ a $10$ éléments et $A$ en a $6$. Combien d'éléments a $\\overline{A}$ ?",
          "options": [
            "$16$",
            "$6$",
            "$60$",
            "$4$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$10-6=4$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q4",
          "type": "mcq",
          "prompt": "Combien de nombres impairs contient $E=\\{1\\,;2\\,;3\\,;4\\,;5\\,;7\\,;8\\,;9\\,;10\\,;11\\}$ ?",
          "options": [
            "$5$",
            "$6$",
            "$4$",
            "$10$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$1$, $3$, $5$, $7$, $9$ et $11$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q5",
          "type": "mcq",
          "prompt": "Sur $1\\,000$ tirages, $343$ ne contiennent aucune boule noire. Combien contiennent au moins une boule noire ?",
          "options": [
            "$343$",
            "$657$",
            "$1\\,343$",
            "$700$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$1\\,000-343=657$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\mathrm{Card}(\\{0\\,;1\\})$ ?",
          "options": [
            "$1$",
            "$0$",
            "$3$",
            "$2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le zéro compte comme un élément."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q7",
          "type": "mcq",
          "prompt": "Que donne la réunion de $A$ et de son complémentaire $\\overline{A}$ dans $E$ ?",
          "options": [
            "L'ensemble $E$",
            "L'ensemble vide",
            "L'ensemble $A$",
            "L'ensemble $\\overline{A}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque élément de $E$ est soit dans $A$, soit dans $\\overline{A}$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l02_denombrement_p02",
      "order": 2,
      "title": "Le produit cartésien",
      "summary": "Des couples ordonnés $(a\\,;b)$.",
      "conceptExplanation": "Le produit cartésien de deux ensembles $A$ et $B$, noté $A\\times B$ (« $A$ croix $B$ »), est l'ensemble des couples $(a\\,;b)$ tels que $a\\in A$ et $b\\in B$.\n\nExemple : $A=\\{1\\,;2\\,;3\\}$ et $B=\\{a\\,;b\\,;c\\,;d\\}$.\n$A\\times B=\\{(1;a),(1;b),(1;c),(1;d),(2;a),\\dots,(3;d)\\}$.\nOn peut les lister avec un arbre de choix ou un tableau à double entrée.\n\nDans un couple, l'ordre compte : $(a\\,;b)\\neq(b\\,;a)$. Le premier élément vient du premier ensemble.\n\nPropriété : $\\mathrm{Card}(A\\times B)=\\mathrm{Card}(A)\\times\\mathrm{Card}(B)$.\nIci : $3\\times4=12$ couples.",
      "keyRule": "$A\\times B$ = ensemble des couples $(a\\,;b)$, $a\\in A$, $b\\in B$. L'ordre compte. $\\mathrm{Card}(A\\times B)=\\mathrm{Card}(A)\\times\\mathrm{Card}(B)$.",
      "formulas": [],
      "workedExample": {
        "title": "Compter des couples",
        "statement": "Un menu propose 3 entrées et 4 plats. Combien de repas « entrée + plat » différents ?",
        "methodSteps": [
          "Un repas est un couple (entrée ; plat).",
          "$\\mathrm{Card}(E\\times P)=3\\times4=12$."
        ],
        "conclusion": "Il y a $12$ repas possibles."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le produit cartésien",
          "stepTheme": "Le produit cartésien",
          "stepBadge": "Le produit cartésien",
          "paragraphText": "$A\\times B$ est l'ensemble des couples $(a\\,;b)$ avec $a\\in A$ et $b\\in B$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q1",
            "type": "mcq",
            "prompt": "Avec $A=\\{a\\,;b\\}$ et $B=\\{1\\,;2\\}$, à quel ensemble appartient le couple $(a\\,;1)$ ?",
            "options": [
              "$B\\times A$",
              "$B\\times B$",
              "$A\\times B$",
              "$A\\times A$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le premier élément vient de $A$, le second de $B$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'ordre compte",
          "stepTheme": "L'ordre compte",
          "stepBadge": "L'ordre compte",
          "paragraphText": "Dans un couple, l'ordre est important : $(a\\,;b)\\neq(b\\,;a)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q2",
            "type": "mcq",
            "prompt": "Les couples $(1\\,;2)$ et $(2\\,;1)$ sont-ils égaux ?",
            "options": [
              "Oui, ce sont les mêmes nombres",
              "Oui, si on les additionne",
              "Non, car $1<2$ seulement",
              "Non, l'ordre compte"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le premier et le second élément sont échangés."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le nombre de couples",
          "stepTheme": "Le nombre de couples",
          "stepBadge": "Le nombre de couples",
          "paragraphText": "$\\mathrm{Card}(A\\times B)=\\mathrm{Card}(A)\\times\\mathrm{Card}(B)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q3",
            "type": "mcq",
            "prompt": "$A$ a $3$ éléments et $B$ en a $4$. Combien d'éléments a $A\\times B$ ?",
            "options": [
              "$7$",
              "$81$",
              "$12$",
              "$64$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$3\\times4=12$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un couple de $C\\times A$",
          "stepTheme": "Un couple de $C\\times A$",
          "stepBadge": "Un couple de $C\\times A$",
          "paragraphText": "Avec $A=\\{a\\,;b\\}$ et $C=\\{\\alpha\\,;\\beta\\,;\\gamma\\}$, le couple $(\\gamma\\,;b)$ a son premier élément dans $C$ et le second dans $A$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q4",
            "type": "mcq",
            "prompt": "À quel produit cartésien appartient $(\\gamma\\,;b)$ ?",
            "options": [
              "$A\\times C$",
              "$C\\times A$",
              "$A\\times B$",
              "$C\\times C$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Premier élément $\\gamma\\in C$, second $b\\in A$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Arbre ou tableau",
          "stepTheme": "Arbre ou tableau",
          "stepBadge": "Arbre ou tableau",
          "paragraphText": "Pour lister les couples, on utilise un arbre de choix ou un tableau à double entrée : chaque case du tableau est un couple.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q5",
            "type": "mcq",
            "prompt": "Un tableau à double entrée a $3$ lignes et $4$ colonnes. Combien de couples contient-il ?",
            "options": [
              "$12$",
              "$7$",
              "$34$",
              "$3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une case par couple : $3\\times4$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Des tenues",
          "stepTheme": "Des tenues",
          "stepBadge": "Des tenues",
          "paragraphText": "Avec $5$ chemises et $3$ pantalons, une tenue est un couple (chemise ; pantalon).",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q6",
            "type": "mcq",
            "prompt": "Combien de tenues différentes peut-on composer avec $5$ chemises et $3$ pantalons ?",
            "options": [
              "$15$",
              "$8$",
              "$125$",
              "$243$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$5\\times3=15$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le bon produit",
          "stepTheme": "Le bon produit",
          "stepBadge": "Le bon produit",
          "paragraphText": "Le couple $(2\\,;\\beta)$, avec $2\\in B$ et $\\beta\\in C$, appartient à $B\\times C$ et non à $C\\times B$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q7",
            "type": "mcq",
            "prompt": "Avec $B=\\{1\\,;2\\}$ et $C=\\{\\alpha\\,;\\beta\\,;\\gamma\\}$, à quel ensemble appartient $(2\\,;\\beta)$ ?",
            "options": [
              "$C\\times B$",
              "$B\\times C$",
              "$A\\times B$",
              "$C\\times C$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ordre des ensembles suit l'ordre des éléments du couple."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q1",
          "type": "mcq",
          "prompt": "Avec $A=\\{a\\,;b\\}$ et $B=\\{1\\,;2\\}$, à quel ensemble appartient le couple $(a\\,;1)$ ?",
          "options": [
            "$B\\times A$",
            "$B\\times B$",
            "$A\\times B$",
            "$A\\times A$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le premier élément vient de $A$, le second de $B$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q2",
          "type": "mcq",
          "prompt": "Les couples $(1\\,;2)$ et $(2\\,;1)$ sont-ils égaux ?",
          "options": [
            "Oui, ce sont les mêmes nombres",
            "Oui, si on les additionne",
            "Non, car $1<2$ seulement",
            "Non, l'ordre compte"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le premier et le second élément sont échangés."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q3",
          "type": "mcq",
          "prompt": "$A$ a $3$ éléments et $B$ en a $4$. Combien d'éléments a $A\\times B$ ?",
          "options": [
            "$7$",
            "$81$",
            "$12$",
            "$64$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$3\\times4=12$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q4",
          "type": "mcq",
          "prompt": "À quel produit cartésien appartient $(\\gamma\\,;b)$ ?",
          "options": [
            "$A\\times C$",
            "$C\\times A$",
            "$A\\times B$",
            "$C\\times C$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Premier élément $\\gamma\\in C$, second $b\\in A$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q5",
          "type": "mcq",
          "prompt": "Un tableau à double entrée a $3$ lignes et $4$ colonnes. Combien de couples contient-il ?",
          "options": [
            "$12$",
            "$7$",
            "$34$",
            "$3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une case par couple : $3\\times4$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q6",
          "type": "mcq",
          "prompt": "Combien de tenues différentes peut-on composer avec $5$ chemises et $3$ pantalons ?",
          "options": [
            "$15$",
            "$8$",
            "$125$",
            "$243$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$5\\times3=15$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q7",
          "type": "mcq",
          "prompt": "Avec $B=\\{1\\,;2\\}$ et $C=\\{\\alpha\\,;\\beta\\,;\\gamma\\}$, à quel ensemble appartient $(2\\,;\\beta)$ ?",
          "options": [
            "$C\\times B$",
            "$B\\times C$",
            "$A\\times B$",
            "$C\\times C$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ordre des ensembles suit l'ordre des éléments du couple."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l02_denombrement_p03",
      "order": 3,
      "title": "Les $p$-listes",
      "summary": "Des choix avec répétition possible : $n^p$.",
      "conceptExplanation": "$E^p$ désigne le produit cartésien de $p$ ensembles tous égaux à $E$ : $E^p=E\\times E\\times\\dots\\times E$.\n\nUne $p$-liste (ou $p$-uplet) de $E$ est un élément de $E^p$ : une suite ordonnée de $p$ éléments de $E$, où les répétitions sont permises.\n\nPropriété : le nombre de $p$-listes d'un ensemble à $n$ éléments est $n^p$.\n\nExemples :\n- si $\\mathrm{Card}(E)=6$, alors $\\mathrm{Card}(E^3)=6^3=216$ ;\n- avec les chiffres de $A=\\{2\\,;3\\,;5\\,;7\\,;8\\,;9\\}$, on peut former $6^3=216$ nombres de trois chiffres (un chiffre peut se répéter, comme $777$) ;\n- un code à $4$ chiffres de $0$ à $9$ : $10^4=10\\,000$ possibilités.\n\nModèle : tirages successifs avec remise.",
      "keyRule": "$p$-liste = suite ordonnée de $p$ éléments, répétitions permises. Nombre : $n^p$. Modèle : tirages successifs avec remise.",
      "formulas": [],
      "workedExample": {
        "title": "Former des nombres",
        "statement": "Combien de nombres de trois chiffres peut-on former avec les chiffres de $\\{2\\,;3\\,;5\\,;7\\,;8\\,;9\\}$ ?",
        "methodSteps": [
          "Chaque nombre est une 3-liste de cet ensemble de $6$ chiffres (répétitions permises).",
          "Nombre : $6^3=216$."
        ],
        "conclusion": "On peut former $216$ nombres."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La $p$-liste",
          "stepTheme": "La $p$-liste",
          "stepBadge": "La $p$-liste",
          "paragraphText": "Une $p$-liste de $E$ est une suite ordonnée de $p$ éléments de $E$ ; un élément peut se répéter.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q1",
            "type": "mcq",
            "prompt": "Avec $A=\\{0\\,;1\\,;2\\,;3\\,;4\\,;5\\}$, lequel est un triplet (3-liste) d'éléments de $A$ ?",
            "options": [
              "$(1\\,;0\\,;6)$",
              "$(3\\,;9\\,;2)$",
              "$(4\\,;4\\,;0)$",
              "$(7\\,;1\\,;0)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Tous ses éléments sont dans $A$ ; la répétition de $4$ est permise."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le nombre de $p$-listes",
          "stepTheme": "Le nombre de $p$-listes",
          "stepBadge": "Le nombre de $p$-listes",
          "paragraphText": "Un ensemble à $n$ éléments possède $n^p$ $p$-listes.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q2",
            "type": "mcq",
            "prompt": "$\\mathrm{Card}(E)=6$. Que vaut $\\mathrm{Card}(E^3)$ ?",
            "options": [
              "$18$",
              "$120$",
              "$729$",
              "$216$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$6^3=6\\times6\\times6=216$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Un code secret",
          "stepTheme": "Un code secret",
          "stepBadge": "Un code secret",
          "paragraphText": "Un code de $4$ chiffres, chacun de $0$ à $9$, est une 4-liste de $\\{0\\,;1\\,;\\dots;9\\}$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q3",
            "type": "mcq",
            "prompt": "Combien de codes à $4$ chiffres (de $0$ à $9$) existe-t-il ?",
            "options": [
              "$40$",
              "$5\\,040$",
              "$10\\,000$",
              "$1\\,000$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$10^4=10\\,000$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Tirages avec remise",
          "stepTheme": "Tirages avec remise",
          "stepBadge": "Tirages avec remise",
          "paragraphText": "Une urne contient $10$ boules. On en tire $3$ successivement avec remise : chaque tirage est une 3-liste.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q4",
            "type": "mcq",
            "prompt": "Combien de tirages successifs avec remise de $3$ boules parmi $10$ ?",
            "options": [
              "$720$",
              "$120$",
              "$30$",
              "$1\\,000$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$10^3=1\\,000$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Même couleur",
          "stepTheme": "Même couleur",
          "stepBadge": "Même couleur",
          "paragraphText": "L'urne a $3$ noires, $2$ blanches, $5$ rouges. Trois boules de même couleur, avec remise : $3^3+2^3+5^3$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q5",
            "type": "mcq",
            "prompt": "Combien de tirages (3 boules avec remise) donnent trois boules de la même couleur ?",
            "options": [
              "$160$",
              "$1\\,000$",
              "$30$",
              "$180$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$27+8+125=160$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une 5-liste",
          "stepTheme": "Une 5-liste",
          "stepBadge": "Une 5-liste",
          "paragraphText": "$(0\\,;0\\,;0\\,;0\\,;0)$ est bien une 5-liste de $A=\\{0\\,;1\\,;2\\,;3\\,;4\\,;5\\}$ : tous ses termes sont dans $A$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q6",
            "type": "mcq",
            "prompt": "Avec $A=\\{0\\,;1\\,;2\\,;3\\,;4\\,;5\\}$, laquelle est une 5-liste d'éléments de $A$ ?",
            "options": [
              "$(9\\,;2\\,;2\\,;3\\,;5)$",
              "$(0\\,;0\\,;0\\,;0\\,;0)$",
              "$(0\\,;1\\,;1\\,;6\\,;4)$",
              "$(7\\,;7\\,;7\\,;7\\,;7)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$9$, $6$ et $7$ ne sont pas dans $A$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Puissance, pas produit",
          "stepTheme": "Puissance, pas produit",
          "stepBadge": "Puissance, pas produit",
          "paragraphText": "Le nombre de $p$-listes est $n^p$ (puissance), et non $n\\times p$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q7",
            "type": "mcq",
            "prompt": "Combien de mots de $2$ lettres (avec répétition) peut-on écrire avec $3$ lettres ?",
            "options": [
              "$6$",
              "$9$",
              "$5$",
              "$8$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$3^2=9$, et non $3\\times2=6$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q1",
          "type": "mcq",
          "prompt": "Avec $A=\\{0\\,;1\\,;2\\,;3\\,;4\\,;5\\}$, lequel est un triplet (3-liste) d'éléments de $A$ ?",
          "options": [
            "$(1\\,;0\\,;6)$",
            "$(3\\,;9\\,;2)$",
            "$(4\\,;4\\,;0)$",
            "$(7\\,;1\\,;0)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Tous ses éléments sont dans $A$ ; la répétition de $4$ est permise."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q2",
          "type": "mcq",
          "prompt": "$\\mathrm{Card}(E)=6$. Que vaut $\\mathrm{Card}(E^3)$ ?",
          "options": [
            "$18$",
            "$120$",
            "$729$",
            "$216$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$6^3=6\\times6\\times6=216$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q3",
          "type": "mcq",
          "prompt": "Combien de codes à $4$ chiffres (de $0$ à $9$) existe-t-il ?",
          "options": [
            "$40$",
            "$5\\,040$",
            "$10\\,000$",
            "$1\\,000$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$10^4=10\\,000$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q4",
          "type": "mcq",
          "prompt": "Combien de tirages successifs avec remise de $3$ boules parmi $10$ ?",
          "options": [
            "$720$",
            "$120$",
            "$30$",
            "$1\\,000$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$10^3=1\\,000$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q5",
          "type": "mcq",
          "prompt": "Combien de tirages (3 boules avec remise) donnent trois boules de la même couleur ?",
          "options": [
            "$160$",
            "$1\\,000$",
            "$30$",
            "$180$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$27+8+125=160$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q6",
          "type": "mcq",
          "prompt": "Avec $A=\\{0\\,;1\\,;2\\,;3\\,;4\\,;5\\}$, laquelle est une 5-liste d'éléments de $A$ ?",
          "options": [
            "$(9\\,;2\\,;2\\,;3\\,;5)$",
            "$(0\\,;0\\,;0\\,;0\\,;0)$",
            "$(0\\,;1\\,;1\\,;6\\,;4)$",
            "$(7\\,;7\\,;7\\,;7\\,;7)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$9$, $6$ et $7$ ne sont pas dans $A$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q7",
          "type": "mcq",
          "prompt": "Combien de mots de $2$ lettres (avec répétition) peut-on écrire avec $3$ lettres ?",
          "options": [
            "$6$",
            "$9$",
            "$5$",
            "$8$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$3^2=9$, et non $3\\times2=6$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l02_denombrement_p04",
      "order": 4,
      "title": "Arrangements et factorielle",
      "summary": "Des choix ordonnés sans répétition.",
      "conceptExplanation": "1. Un arrangement de $p$ éléments d'un ensemble $E$ à $n$ éléments ($p\\leq n$) est une $p$-liste d'éléments deux à deux distincts : l'ordre compte, pas de répétition.\nExemples avec $E=\\{0\\,;1\\,;3\\,;4\\}$ : $(0\\,;3)$ et $(0\\,;4\\,;1\\,;3)$ sont des arrangements ; $(1\\,;4\\,;3\\,;1)$ n'en est pas un (le $1$ se répète).\n\nNombre d'arrangements : $A_n^p=n\\times(n-1)\\times\\dots\\times(n-p+1)$ ($p$ facteurs).\nExemple : $A_6^3=6\\times5\\times4=120$.\n\n2. La factorielle de $n$ : $n!=n\\times(n-1)\\times\\dots\\times2\\times1$, avec $0!=1$.\nExemples : $6!=720$ ; $\\dfrac{8!}{5!}=8\\times7\\times6=336$.\n\nPropriété : $A_n^p=\\dfrac{n!}{(n-p)!}$. Exemple : $A_5^2=\\dfrac{5!}{3!}=20$.\n\nModèle : tirages successifs sans remise.",
      "keyRule": "Arrangement : ordre compte, pas de répétition. $A_n^p=n(n-1)\\dots(n-p+1)=\\dfrac{n!}{(n-p)!}$. $n!=n\\times\\dots\\times1$, $0!=1$.",
      "formulas": [],
      "workedExample": {
        "title": "Former des mots",
        "statement": "Combien de mots de $4$ lettres distinctes commençant par C peut-on former avec les lettres de CHANSLY ?",
        "methodSteps": [
          "La première lettre est fixée : C.",
          "Il reste à ranger $3$ lettres parmi les $6$ autres : $A_6^3=6\\times5\\times4=120$."
        ],
        "conclusion": "On peut former $120$ mots."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'arrangement",
          "stepTheme": "L'arrangement",
          "stepBadge": "L'arrangement",
          "paragraphText": "Un arrangement est une $p$-liste dont les éléments sont deux à deux distincts.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q1",
            "type": "mcq",
            "prompt": "Avec $E=\\{0\\,;1\\,;3\\,;4\\}$, lequel est un arrangement de $4$ éléments de $E$ ?",
            "options": [
              "$(0\\,;4\\,;1\\,;3)$",
              "$(1\\,;4\\,;3\\,;1)$",
              "$(0\\,;1\\,;1\\,;3)$",
              "$(4\\,;4\\,;4\\,;4)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pas de répétition : tous les éléments sont différents."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le nombre d'arrangements",
          "stepTheme": "Le nombre d'arrangements",
          "stepBadge": "Le nombre d'arrangements",
          "paragraphText": "$A_n^p=n\\times(n-1)\\times\\dots\\times(n-p+1)$ : on multiplie $p$ facteurs décroissants à partir de $n$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q2",
            "type": "mcq",
            "prompt": "Que vaut $A_6^3$ ?",
            "options": [
              "$216$",
              "$18$",
              "$20$",
              "$120$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$6\\times5\\times4=120$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La factorielle",
          "stepTheme": "La factorielle",
          "stepBadge": "La factorielle",
          "paragraphText": "$n!=n\\times(n-1)\\times\\dots\\times2\\times1$ et $0!=1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q3",
            "type": "mcq",
            "prompt": "Que vaut $5!$ ?",
            "options": [
              "$25$",
              "$15$",
              "$120$",
              "$60$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$5\\times4\\times3\\times2\\times1=120$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Simplifier un quotient",
          "stepTheme": "Simplifier un quotient",
          "stepBadge": "Simplifier un quotient",
          "paragraphText": "$\\dfrac{8!}{5!}=\\dfrac{8\\times7\\times6\\times5!}{5!}=8\\times7\\times6$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\dfrac{8!}{5!}$ ?",
            "options": [
              "$3$",
              "$56$",
              "$336$",
              "$40\\,320$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$8\\times7\\times6=336$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Avec la formule",
          "stepTheme": "Avec la formule",
          "stepBadge": "Avec la formule",
          "paragraphText": "$A_n^p=\\dfrac{n!}{(n-p)!}$, donc $A_5^2=\\dfrac{5!}{3!}=5\\times4$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q5",
            "type": "mcq",
            "prompt": "Que vaut $A_5^2$ ?",
            "options": [
              "$20$",
              "$10$",
              "$25$",
              "$60$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$5\\times4=20$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Premières et dernières lettres",
          "stepTheme": "Premières et dernières lettres",
          "stepBadge": "Premières et dernières lettres",
          "paragraphText": "Avec CHANSLY, un mot de $4$ lettres distinctes qui commence par C et finit par Y : on choisit les $2$ lettres du milieu parmi $5$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q6",
            "type": "mcq",
            "prompt": "Combien de tels mots commencent par C et finissent par Y ?",
            "options": [
              "$10$",
              "$25$",
              "$120$",
              "$20$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$A_5^2=5\\times4=20$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Zéro factorielle",
          "stepTheme": "Zéro factorielle",
          "stepBadge": "Zéro factorielle",
          "paragraphText": "Par convention, $0!=1$ (et non $0$).",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q7",
            "type": "mcq",
            "prompt": "Que vaut $0!$ ?",
            "options": [
              "$0$",
              "$1$",
              "Ce n'est pas défini",
              "$-1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est une convention qui rend les formules justes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q1",
          "type": "mcq",
          "prompt": "Avec $E=\\{0\\,;1\\,;3\\,;4\\}$, lequel est un arrangement de $4$ éléments de $E$ ?",
          "options": [
            "$(0\\,;4\\,;1\\,;3)$",
            "$(1\\,;4\\,;3\\,;1)$",
            "$(0\\,;1\\,;1\\,;3)$",
            "$(4\\,;4\\,;4\\,;4)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pas de répétition : tous les éléments sont différents."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q2",
          "type": "mcq",
          "prompt": "Que vaut $A_6^3$ ?",
          "options": [
            "$216$",
            "$18$",
            "$20$",
            "$120$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$6\\times5\\times4=120$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q3",
          "type": "mcq",
          "prompt": "Que vaut $5!$ ?",
          "options": [
            "$25$",
            "$15$",
            "$120$",
            "$60$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$5\\times4\\times3\\times2\\times1=120$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\dfrac{8!}{5!}$ ?",
          "options": [
            "$3$",
            "$56$",
            "$336$",
            "$40\\,320$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$8\\times7\\times6=336$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q5",
          "type": "mcq",
          "prompt": "Que vaut $A_5^2$ ?",
          "options": [
            "$20$",
            "$10$",
            "$25$",
            "$60$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$5\\times4=20$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q6",
          "type": "mcq",
          "prompt": "Combien de tels mots commencent par C et finissent par Y ?",
          "options": [
            "$10$",
            "$25$",
            "$120$",
            "$20$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$A_5^2=5\\times4=20$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q7",
          "type": "mcq",
          "prompt": "Que vaut $0!$ ?",
          "options": [
            "$0$",
            "$1$",
            "Ce n'est pas défini",
            "$-1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est une convention qui rend les formules justes."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l02_denombrement_p05",
      "order": 5,
      "title": "Permutations et combinaisons",
      "summary": "Ranger tout le monde, ou choisir sans ordre.",
      "conceptExplanation": "1. Une permutation des $n$ éléments de $E$ est un arrangement de ces $n$ éléments : on les range tous dans un ordre.\nNombre de permutations : $A_n^n=n!$.\nSituation : faire asseoir $4$ personnalités sur $4$ fauteuils : $4!=4\\times3\\times2\\times1=24$ façons.\n\n2. Une combinaison de $p$ éléments de $E$ ($p\\leq n$) est une partie de $E$ à $p$ éléments : l'ordre ne compte pas.\nNombre de combinaisons :\n$$C_n^p=\\dfrac{A_n^p}{p!}=\\dfrac{n!}{p!\\,(n-p)!}.$$\nExemples : $C_5^3=\\dfrac{A_5^3}{3!}=\\dfrac{60}{6}=10$ ; $C_5^2=10$.\nCas particuliers : $C_n^n=1$, $C_n^1=n$, $C_n^0=1$.\n\nExemple : une équipe de $5$ élèves dans une classe de $36$ : $C_{36}^5=376\\,992$. Une équipe de $3$ filles parmi $18$ et $2$ garçons parmi $18$ : $C_{18}^3\\times C_{18}^2=816\\times153=124\\,848$.\n\nModèle : tirages simultanés.",
      "keyRule": "Permutation : ranger les $n$ éléments, $n!$ façons. Combinaison : choisir $p$ éléments sans ordre, $C_n^p=\\dfrac{n!}{p!(n-p)!}$.",
      "formulas": [],
      "workedExample": {
        "title": "Former un comité",
        "statement": "Une association compte $12$ hommes et $8$ femmes. Combien de comités de $5$ personnes avec $2$ hommes et $3$ femmes ?",
        "methodSteps": [
          "Choisir $2$ hommes parmi $12$ : $C_{12}^2=66$. Choisir $3$ femmes parmi $8$ : $C_8^3=56$.",
          "On multiplie : $66\\times56=3\\,696$."
        ],
        "conclusion": "Il y a $3\\,696$ comités possibles."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La permutation",
          "stepTheme": "La permutation",
          "stepBadge": "La permutation",
          "paragraphText": "Une permutation range tous les $n$ éléments dans un ordre ; il y en a $n!$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q1",
            "type": "mcq",
            "prompt": "De combien de façons peut-on faire asseoir $4$ personnes sur $4$ fauteuils ?",
            "options": [
              "$16$",
              "$24$",
              "$4$",
              "$256$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$4!=4\\times3\\times2\\times1=24$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La combinaison",
          "stepTheme": "La combinaison",
          "stepBadge": "La combinaison",
          "paragraphText": "Une combinaison de $p$ éléments est une partie de $E$ à $p$ éléments : l'ordre ne compte pas.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q2",
            "type": "mcq",
            "prompt": "Quelle est la différence entre un arrangement et une combinaison ?",
            "options": [
              "Dans une combinaison, on peut répéter",
              "Une combinaison a toujours $2$ éléments",
              "Il n'y a aucune différence",
              "Dans une combinaison, l'ordre ne compte pas"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\{1\\,;2\\}$ et $\\{2\\,;1\\}$ sont la même combinaison."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La formule",
          "stepTheme": "La formule",
          "stepBadge": "La formule",
          "paragraphText": "$C_n^p=\\dfrac{n!}{p!\\,(n-p)!}$. Par exemple $C_5^2=\\dfrac{5!}{2!\\times3!}$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q3",
            "type": "mcq",
            "prompt": "Que vaut $C_5^2$ ?",
            "options": [
              "$10$",
              "$20$",
              "$25$",
              "$5$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{5\\times4}{2}=10$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Arrangement puis combinaison",
          "stepTheme": "Arrangement puis combinaison",
          "stepBadge": "Arrangement puis combinaison",
          "paragraphText": "$C_5^3=\\dfrac{A_5^3}{3!}=\\dfrac{5\\times4\\times3}{6}$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q4",
            "type": "mcq",
            "prompt": "Que vaut $C_5^3$ ?",
            "options": [
              "$60$",
              "$15$",
              "$10$",
              "$20$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{60}{6}=10$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Former une équipe",
          "stepTheme": "Former une équipe",
          "stepBadge": "Former une équipe",
          "paragraphText": "Choisir $3$ filles parmi $18$ et $2$ garçons parmi $18$ : $C_{18}^3\\times C_{18}^2=816\\times153$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q5",
            "type": "mcq",
            "prompt": "Combien d'équipes de $3$ filles (parmi $18$) et $2$ garçons (parmi $18$) peut-on former ?",
            "options": [
              "$969$",
              "$376\\,992$",
              "$12\\,240$",
              "$124\\,848$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$816\\times153=124\\,848$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Les cas particuliers",
          "stepTheme": "Les cas particuliers",
          "stepBadge": "Les cas particuliers",
          "paragraphText": "$C_n^0=1$, $C_n^1=n$ et $C_n^n=1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q6",
            "type": "mcq",
            "prompt": "Que vaut $C_7^1$ ?",
            "options": [
              "$1$",
              "$0$",
              "$7$",
              "$42$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il y a $7$ façons de choisir un seul élément parmi $7$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Arrangement ou permutation ?",
          "stepTheme": "Arrangement ou permutation ?",
          "stepBadge": "Arrangement ou permutation ?",
          "paragraphText": "Une permutation est un arrangement particulier, où l'on range tous les éléments : $A_n^n=n!$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q7",
            "type": "mcq",
            "prompt": "À quoi est égal $A_4^4$ ?",
            "options": [
              "$4^4=256$",
              "$4!=24$",
              "$1$",
              "$16$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ranger les $4$ éléments : $4\\times3\\times2\\times1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q1",
          "type": "mcq",
          "prompt": "De combien de façons peut-on faire asseoir $4$ personnes sur $4$ fauteuils ?",
          "options": [
            "$16$",
            "$24$",
            "$4$",
            "$256$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$4!=4\\times3\\times2\\times1=24$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q2",
          "type": "mcq",
          "prompt": "Quelle est la différence entre un arrangement et une combinaison ?",
          "options": [
            "Dans une combinaison, on peut répéter",
            "Une combinaison a toujours $2$ éléments",
            "Il n'y a aucune différence",
            "Dans une combinaison, l'ordre ne compte pas"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\{1\\,;2\\}$ et $\\{2\\,;1\\}$ sont la même combinaison."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q3",
          "type": "mcq",
          "prompt": "Que vaut $C_5^2$ ?",
          "options": [
            "$10$",
            "$20$",
            "$25$",
            "$5$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{5\\times4}{2}=10$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q4",
          "type": "mcq",
          "prompt": "Que vaut $C_5^3$ ?",
          "options": [
            "$60$",
            "$15$",
            "$10$",
            "$20$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{60}{6}=10$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q5",
          "type": "mcq",
          "prompt": "Combien d'équipes de $3$ filles (parmi $18$) et $2$ garçons (parmi $18$) peut-on former ?",
          "options": [
            "$969$",
            "$376\\,992$",
            "$12\\,240$",
            "$124\\,848$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$816\\times153=124\\,848$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q6",
          "type": "mcq",
          "prompt": "Que vaut $C_7^1$ ?",
          "options": [
            "$1$",
            "$0$",
            "$7$",
            "$42$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il y a $7$ façons de choisir un seul élément parmi $7$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q7",
          "type": "mcq",
          "prompt": "À quoi est égal $A_4^4$ ?",
          "options": [
            "$4^4=256$",
            "$4!=24$",
            "$1$",
            "$16$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ranger les $4$ éléments : $4\\times3\\times2\\times1$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l02_denombrement_p06",
      "order": 6,
      "title": "Choisir le bon outil",
      "summary": "Le modèle des tirages de boules.",
      "conceptExplanation": "Pour choisir l'outil de dénombrement, on ramène le problème à un tirage de $p$ boules dans une urne de $n$ boules :\n- tirages successifs avec remise (l'ordre compte, répétitions permises) : $p$-listes, $n^p$ ;\n- tirages successifs sans remise (l'ordre compte, pas de répétition) : arrangements, $A_n^p$ ;\n- tirages simultanés (on prend $p$ boules d'un coup, l'ordre ne compte pas) : combinaisons, $C_n^p$.\n\nQuestions à se poser :\n1. L'ordre compte-t-il ? (un podium oui, une équipe non)\n2. Peut-on répéter ? (un code oui, des personnes non)\n\nExemple : urne de $3$ noires, $2$ blanches, $5$ rouges, $3$ tirages successifs avec remise :\n- total : $10^3=1\\,000$ ;\n- trois couleurs différentes : $3\\times2\\times5\\times6=180$ (6 ordres possibles des couleurs) ;\n- aucune noire : $7^3=343$, donc au moins une noire : $1\\,000-343=657$.",
      "keyRule": "Successifs avec remise : $n^p$. Successifs sans remise : $A_n^p$. Simultanés : $C_n^p$.",
      "formulas": [],
      "workedExample": {
        "title": "Un podium",
        "statement": "$8$ coureurs disputent une course. Combien de podiums (1er, 2e, 3e) possibles ?",
        "methodSteps": [
          "L'ordre compte et un coureur ne peut pas occuper deux places : arrangement.",
          "$A_8^3=8\\times7\\times6=336$."
        ],
        "conclusion": "Il y a $336$ podiums possibles."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Avec remise",
          "stepTheme": "Avec remise",
          "stepBadge": "Avec remise",
          "paragraphText": "Des tirages successifs avec remise se comptent avec les $p$-listes : $n^p$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q1",
            "type": "mcq",
            "prompt": "Quel outil utiliser pour des tirages successifs avec remise ?",
            "options": [
              "Les $p$-listes ($n^p$)",
              "Les combinaisons ($C_n^p$)",
              "Les arrangements ($A_n^p$)",
              "La factorielle seule"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On peut retirer la même boule : répétitions permises."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Sans remise",
          "stepTheme": "Sans remise",
          "stepBadge": "Sans remise",
          "paragraphText": "Des tirages successifs sans remise se comptent avec les arrangements : $A_n^p$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q2",
            "type": "mcq",
            "prompt": "Quel outil utiliser pour des tirages successifs sans remise ?",
            "options": [
              "Les arrangements ($A_n^p$)",
              "Les $p$-listes ($n^p$)",
              "Les combinaisons ($C_n^p$)",
              "Le complémentaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'ordre compte, mais pas de répétition."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Tirage simultané",
          "stepTheme": "Tirage simultané",
          "stepBadge": "Tirage simultané",
          "paragraphText": "Un tirage simultané de $p$ boules se compte avec les combinaisons : $C_n^p$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q3",
            "type": "mcq",
            "prompt": "On tire $3$ boules d'un coup dans une urne. Quel outil utiliser ?",
            "options": [
              "Les arrangements ($A_n^p$)",
              "Les combinaisons ($C_n^p$)",
              "Les $p$-listes ($n^p$)",
              "Le produit cartésien de $3$ urnes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D'un coup : pas d'ordre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un podium",
          "stepTheme": "Un podium",
          "stepBadge": "Un podium",
          "paragraphText": "Un podium de $3$ coureurs parmi $8$ : l'ordre compte et pas de répétition.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q4",
            "type": "mcq",
            "prompt": "Combien de podiums possibles avec $8$ coureurs ?",
            "options": [
              "$56$",
              "$512$",
              "$336$",
              "$24$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$A_8^3=8\\times7\\times6=336$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une équipe",
          "stepTheme": "Une équipe",
          "stepBadge": "Une équipe",
          "paragraphText": "Une équipe de $5$ élèves parmi $36$ : l'ordre ne compte pas.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q5",
            "type": "mcq",
            "prompt": "Quel nombre correspond aux équipes de $5$ élèves parmi $36$ ?",
            "options": [
              "$A_{36}^5$",
              "$36^5$",
              "$5^{36}$",
              "$C_{36}^5$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Dans une équipe, on ne classe pas les membres."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Trois couleurs différentes",
          "stepTheme": "Trois couleurs différentes",
          "stepBadge": "Trois couleurs différentes",
          "paragraphText": "Urne : $3$ noires, $2$ blanches, $5$ rouges ; $3$ tirages avec remise. Une noire, une blanche, une rouge, dans l'un des $6$ ordres possibles : $3\\times2\\times5\\times6$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q6",
            "type": "mcq",
            "prompt": "Combien de tirages donnent trois boules de couleurs différentes ?",
            "options": [
              "$30$",
              "$160$",
              "$180$",
              "$1\\,000$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$30\\times6=180$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "L'ordre compte-t-il ?",
          "stepTheme": "L'ordre compte-t-il ?",
          "stepBadge": "L'ordre compte-t-il ?",
          "paragraphText": "Pour un code de cadenas, l'ordre compte (1-2-3 n'ouvre pas comme 3-2-1) et les chiffres peuvent se répéter.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q7",
            "type": "mcq",
            "prompt": "Quel outil compte les codes de cadenas à $3$ chiffres (de $0$ à $9$) ?",
            "options": [
              "Les combinaisons : $C_{10}^3$",
              "Les arrangements : $A_{10}^3$",
              "Les permutations : $3!$",
              "Les $p$-listes : $10^3$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ordre important et répétitions permises."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q1",
          "type": "mcq",
          "prompt": "Quel outil utiliser pour des tirages successifs avec remise ?",
          "options": [
            "Les $p$-listes ($n^p$)",
            "Les combinaisons ($C_n^p$)",
            "Les arrangements ($A_n^p$)",
            "La factorielle seule"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On peut retirer la même boule : répétitions permises."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q2",
          "type": "mcq",
          "prompt": "Quel outil utiliser pour des tirages successifs sans remise ?",
          "options": [
            "Les arrangements ($A_n^p$)",
            "Les $p$-listes ($n^p$)",
            "Les combinaisons ($C_n^p$)",
            "Le complémentaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ordre compte, mais pas de répétition."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q3",
          "type": "mcq",
          "prompt": "On tire $3$ boules d'un coup dans une urne. Quel outil utiliser ?",
          "options": [
            "Les arrangements ($A_n^p$)",
            "Les combinaisons ($C_n^p$)",
            "Les $p$-listes ($n^p$)",
            "Le produit cartésien de $3$ urnes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D'un coup : pas d'ordre."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q4",
          "type": "mcq",
          "prompt": "Combien de podiums possibles avec $8$ coureurs ?",
          "options": [
            "$56$",
            "$512$",
            "$336$",
            "$24$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$A_8^3=8\\times7\\times6=336$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q5",
          "type": "mcq",
          "prompt": "Quel nombre correspond aux équipes de $5$ élèves parmi $36$ ?",
          "options": [
            "$A_{36}^5$",
            "$36^5$",
            "$5^{36}$",
            "$C_{36}^5$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Dans une équipe, on ne classe pas les membres."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q6",
          "type": "mcq",
          "prompt": "Combien de tirages donnent trois boules de couleurs différentes ?",
          "options": [
            "$30$",
            "$160$",
            "$180$",
            "$1\\,000$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$30\\times6=180$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q7",
          "type": "mcq",
          "prompt": "Quel outil compte les codes de cadenas à $3$ chiffres (de $0$ à $9$) ?",
          "options": [
            "Les combinaisons : $C_{10}^3$",
            "Les arrangements : $A_{10}^3$",
            "Les permutations : $3!$",
            "Les $p$-listes : $10^3$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ordre important et répétitions permises."
        }
      ]
    }
  ]
};
