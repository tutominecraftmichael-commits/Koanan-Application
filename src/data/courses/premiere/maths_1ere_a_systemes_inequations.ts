import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon : SYSTEMES D'INEQUATIONS LINEAIRES DANS ℝ × ℝ » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=871
export const MATHS_1ERE_A_L07_SYSTEMES_INEQUATIONS: CurriculumChapter = {
  "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires",
  "subjectId": "maths",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 7,
  "title": "Leçon 7 : Systèmes d'inéquations linéaires dans ℝ×ℝ",
  "summary": "À partir des provisions d'un père de famille pendant le jeûne, on étudie les inéquations du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$, leur représentation par des demi-plans, et la résolution graphique des systèmes par intersection de demi-plans.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=871",
  "points": [
    {
      "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01",
      "order": 1,
      "title": "Inéquations du premier degré dans ℝ×ℝ",
      "summary": "Reconnaître une inéquation du premier degré à deux inconnues et tester si un couple donné en est solution.",
      "conceptExplanation": "Soient $a$, $b$ et $c$ des nombres réels non tous nuls. Une inéquation du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$ se présente sous la forme $ax + by + c < 0$, $ax + by + c > 0$, $ax + by + c \\leq 0$ ou $ax + by + c \\geq 0$.\nParmi les exemples de la leçon, $3x + y \\leq 7$, $3y \\leq 0$ et $6x \\leq 9$ sont de telles inéquations, tandis que $-x + 5y = 9$ et $x + y = 8$ sont des équations du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$.\nUn couple $(x_0 ; y_0)$ de nombres réels est solution d'une inéquation s'il vérifie cette inéquation : par exemple, $(1 ; -5)$ est solution de $x + y + 6 > 0$ car $1 - 5 + 6 = 2 > 0$.",
      "keyRule": "Une inéquation à deux inconnues se teste couple par couple : on remplace, on calcule, on compare.",
      "formulas": [
        {
          "name": "Forme générale",
          "formula": "ax + by + c < 0",
          "note": "Ou avec $>$, $\\leq$, $\\geq$ ; $a$, $b$, $c$ non tous nuls."
        }
      ],
      "workedExample": {
        "title": "Trois couples à tester (exercice de fixation 1)",
        "statement": "Réponds par vrai ou faux : le couple $(1 ; -5)$ est solution de $x + y + 6 > 0$ ; le couple $(1 ; 1)$ n'est pas solution de $2x - y + 2 > 0$.",
        "methodSteps": [
          "Pour le premier couple : $1 - 5 + 6 = 2 > 0$, l'affirmation est vraie.",
          "Pour le second couple : $2 - 1 + 2 = 3 > 0$, donc $(1 ; 1)$ est solution et l'affirmation « n'est pas solution » est fausse."
        ],
        "conclusion": "Les réponses sont : vrai pour la première affirmation, faux pour la seconde."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La forme d'une inéquation du premier degré dans R fois R",
          "stepTheme": "La forme d'une inéquation du premier degré dans R fois R",
          "stepBadge": "La forme d'une inéquation du premier degré dans R fois R",
          "paragraphText": "• Définition : soient $a$, $b$ et $c$ des nombres réels non tous nuls ; une inéquation du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$ se présente sous l'une des formes $ax + by + c < 0$, $ax + by + c > 0$, $ax + by + c \\leq 0$ ou $ax + by + c \\geq 0$.\nElle comporte deux inconnues, $x$ et $y$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces expressions est une inéquation du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$ ?",
            "options": [
              "$-x + 5y = 9$",
              "$x^2 + 3y < 5$",
              "$3x + y \\leq 7$",
              "$x + y = 8$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est une inégalité du premier degré à deux inconnues ; les autres sont des équations ou contiennent un terme en $x^2$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Un couple solution",
          "stepTheme": "Un couple solution",
          "stepBadge": "Un couple solution",
          "paragraphText": "• Un couple $(x_0 ; y_0)$ de nombres réels est solution d'une inéquation $ax + by + c < 0$ s'il vérifie cette inéquation, c'est-à-dire si $ax_0 + by_0 + c < 0$.\nOn teste donc un couple en remplaçant $x$ et $y$ par ses deux nombres.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q2",
            "type": "mcq",
            "prompt": "Le couple $(1 ; -5)$ est-il solution de l'inéquation $x + y + 6 > 0$ ?",
            "options": [
              "Oui, car on obtient $2 > 0$",
              "Non, car le résultat est négatif",
              "Non, car $y$ est négatif",
              "Oui, seulement si $x$ est positif"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On remplace : $1 - 5 + 6 = 2$, et $2 > 0$ est vrai : le couple est solution."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Tester un couple sans se tromper de signe",
          "stepTheme": "Tester un couple sans se tromper de signe",
          "stepBadge": "Tester un couple sans se tromper de signe",
          "paragraphText": "• Exercice de fixation : le couple $(2 ; 1)$ est solution de l'inéquation $2x - y - 2 > 0$.\nLe calcul donne en effet un nombre strictement positif.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q3",
            "type": "mcq",
            "prompt": "Que vaut $2x - y - 2$ pour le couple $(2 ; 1)$ ?",
            "options": [
              "$-1$",
              "$0$",
              "$5$",
              "$1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $2 \\times 2 - 1 - 2 = 1$, qui est strictement positif : le couple est bien solution."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Ne pas confondre équation et inéquation",
          "stepTheme": "Ne pas confondre équation et inéquation",
          "stepBadge": "Ne pas confondre équation et inéquation",
          "paragraphText": "• Dans les exemples de la leçon, $3x + y \\leq 7$, $3y \\leq 0$ et $6x \\leq 9$ sont des inéquations du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$.\nEn revanche, $-x + 5y = 9$ et $x + y = 8$ sont des équations du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$, car elles portent un signe égal.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q4",
            "type": "mcq",
            "prompt": "L'expression $-x + 5y = 9$ est :",
            "options": [
              "Une inéquation du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$",
              "Une équation du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$",
              "Une inéquation du second degré",
              "Un système d'inéquations"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le signe égal en fait une équation, pas une inéquation, comme le précise la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Une inéquation peut ne montrer qu'une inconnue",
          "stepTheme": "Une inéquation peut ne montrer qu'une inconnue",
          "stepBadge": "Une inéquation peut ne montrer qu'une inconnue",
          "paragraphText": "• Les exemples $3y \\leq 0$ et $6x \\leq 9$ sont bien des inéquations du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$, même si une seule inconnue y apparaît visiblement.\nLe coefficient de l'inconnue absente vaut simplement $0$, la définition demandant seulement que $a$, $b$ et $c$ ne soient pas tous nuls.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q5",
            "type": "mcq",
            "prompt": "L'expression $6x \\leq 9$ est-elle une inéquation du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$ ?",
            "options": [
              "Oui, le coefficient de $y$ vaut $0$",
              "Non, car $y$ n'apparaît pas",
              "Non, car il manque le terme constant",
              "Oui, seulement si on ajoute $y$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon la compte parmi ses exemples : le coefficient de $y$ est nul, ce qui est permis."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un couple qui ne convient pas",
          "stepTheme": "Un couple qui ne convient pas",
          "stepBadge": "Un couple qui ne convient pas",
          "paragraphText": "• Tester un couple peut aussi donner un refus : pour l'inéquation $x - y - 5 > 0$, le couple $(3 ; 3)$ donne un résultat négatif.\nCe couple n'est donc pas solution de l'inéquation.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q6",
            "type": "mcq",
            "prompt": "Le couple $(3 ; 3)$ est-il solution de l'inéquation $x - y - 5 > 0$ ?",
            "options": [
              "Oui, car on obtient $0$",
              "Oui, car $x = y$",
              "Non, car on obtient $-5$, qui n'est pas strictement positif",
              "Non, car les couples solutions ont toujours $x > y$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $3 - 3 - 5 = -5$ : l'inégalité stricte n'est pas vérifiée, le couple n'est pas solution."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces expressions est une inéquation du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$ ?",
          "options": [
            "$-x + 5y = 9$",
            "$x^2 + 3y < 5$",
            "$3x + y \\leq 7$",
            "$x + y = 8$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est une inégalité du premier degré à deux inconnues ; les autres sont des équations ou contiennent un terme en $x^2$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q2",
          "type": "mcq",
          "prompt": "Le couple $(1 ; -5)$ est-il solution de l'inéquation $x + y + 6 > 0$ ?",
          "options": [
            "Oui, car on obtient $2 > 0$",
            "Non, car le résultat est négatif",
            "Non, car $y$ est négatif",
            "Oui, seulement si $x$ est positif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On remplace : $1 - 5 + 6 = 2$, et $2 > 0$ est vrai : le couple est solution."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q3",
          "type": "mcq",
          "prompt": "Que vaut $2x - y - 2$ pour le couple $(2 ; 1)$ ?",
          "options": [
            "$-1$",
            "$0$",
            "$5$",
            "$1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $2 \\times 2 - 1 - 2 = 1$, qui est strictement positif : le couple est bien solution."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q4",
          "type": "mcq",
          "prompt": "L'expression $-x + 5y = 9$ est :",
          "options": [
            "Une inéquation du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$",
            "Une équation du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$",
            "Une inéquation du second degré",
            "Un système d'inéquations"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le signe égal en fait une équation, pas une inéquation, comme le précise la leçon."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q5",
          "type": "mcq",
          "prompt": "L'expression $6x \\leq 9$ est-elle une inéquation du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$ ?",
          "options": [
            "Oui, le coefficient de $y$ vaut $0$",
            "Non, car $y$ n'apparaît pas",
            "Non, car il manque le terme constant",
            "Oui, seulement si on ajoute $y$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon la compte parmi ses exemples : le coefficient de $y$ est nul, ce qui est permis."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q6",
          "type": "mcq",
          "prompt": "Le couple $(3 ; 3)$ est-il solution de l'inéquation $x - y - 5 > 0$ ?",
          "options": [
            "Oui, car on obtient $0$",
            "Oui, car $x = y$",
            "Non, car on obtient $-5$, qui n'est pas strictement positif",
            "Non, car les couples solutions ont toujours $x > y$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $3 - 3 - 5 = -5$ : l'inégalité stricte n'est pas vérifiée, le couple n'est pas solution."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02",
      "order": 2,
      "title": "Résolution graphique d'une inéquation",
      "summary": "Représenter graphiquement l'ensemble des solutions d'une inéquation du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$ par un demi-plan.",
      "conceptExplanation": "La représentation graphique de l'ensemble des solutions d'une inéquation $ax + by + c < 0$ dans le plan muni d'un repère $(O ; I ; J)$ est un demi-plan de frontière la droite $(D)$ d'équation $ax + by + c = 0$, ne contenant pas la droite $(D)$.\nRemarque : si l'inégalité est large, alors la droite $(D)$ est contenue dans l'ensemble des solutions.\nPour choisir le bon demi-plan, on teste un point : pour $2x - y + 2 > 0$, le couple $(0 ; 0)$ donne $2 > 0$, donc l'origine est solution et le demi-plan solution est celui qui contient $O$, frontière exclue.",
      "keyRule": "On trace la frontière, on teste un point, on garde le demi-plan du point si le test réussit.",
      "formulas": [],
      "workedExample": {
        "title": "Représenter les solutions de $2x - y + 2 > 0$ (exercice de fixation 2)",
        "statement": "Représente graphiquement les solutions de l'inéquation $(I) : 2x - y + 2 > 0$ dans le plan muni d'un repère $(O ; I ; J)$.",
        "methodSteps": [
          "On trace la droite d'équation $2x - y + 2 = 0$.",
          "On teste l'origine : $2 \\times 0 - 0 + 2 = 2 > 0$, donc $O$ est solution.",
          "On garde le demi-plan contenant $O$, sans la droite frontière car l'inégalité est stricte."
        ],
        "conclusion": "L'ensemble des solutions est le demi-plan ouvert limité par la droite d'équation $2x - y + 2 = 0$ et contenant le point $O$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un demi-plan de solutions",
          "stepTheme": "Un demi-plan de solutions",
          "stepBadge": "Un demi-plan de solutions",
          "paragraphText": "• La représentation graphique de l'ensemble des solutions d'une inéquation $ax + by + c < 0$ est un demi-plan de frontière la droite $(D)$ d'équation $ax + by + c = 0$, ne contenant pas la droite $(D)$.\nL'inégalité stricte exclut la frontière elle-même.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q1",
            "type": "mcq",
            "prompt": "Comment l'ensemble des solutions d'une inéquation stricte $ax + by + c < 0$ se représente-t-il graphiquement ?",
            "options": [
              "Par la seule droite d'équation $ax + by + c = 0$",
              "Par un demi-plan ne contenant pas sa droite frontière",
              "Par tout le plan",
              "Par un seul point"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est un demi-plan limité par la droite frontière, qui n'en fait pas partie pour une inégalité stricte."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le cas de l'inégalité large",
          "stepTheme": "Le cas de l'inégalité large",
          "stepBadge": "Le cas de l'inégalité large",
          "paragraphText": "• Remarque de la leçon : si l'inégalité est large, alors la droite $(D)$ d'équation $ax + by + c = 0$ est contenue dans l'ensemble des solutions.\nLes points de la frontière vérifient en effet l'égalité, donc l'inégalité large.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q2",
            "type": "mcq",
            "prompt": "Pour une inéquation large $ax + by + c \\leq 0$, la droite frontière fait-elle partie des solutions ?",
            "options": [
              "Non, jamais",
              "Seulement son origine",
              "Seulement si $c = 0$",
              "Oui, elle est contenue dans l'ensemble des solutions"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La remarque de la leçon : avec une inégalité large, la frontière est incluse dans les solutions."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Tester un point pour choisir le demi-plan",
          "stepTheme": "Tester un point pour choisir le demi-plan",
          "stepBadge": "Tester un point pour choisir le demi-plan",
          "paragraphText": "• Méthode : on trace la droite frontière, puis on teste un point simple, souvent l'origine $O$, dans l'inéquation.\nSi le point testé est solution, le bon demi-plan est celui qui le contient ; sinon, c'est l'autre.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q3",
            "type": "mcq",
            "prompt": "Pour l'inéquation $2x - y + 2 > 0$, que donne le test du couple $(0 ; 0)$ ?",
            "options": [
              "$-2$, donc $O$ n'est pas solution",
              "$0$, donc $O$ est sur la frontière",
              "$2$, donc $O$ est solution",
              "$-1$, donc $O$ n'est pas solution"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $0 - 0 + 2 = 2$, strictement positif : l'origine est solution de l'inéquation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le demi-plan de l'exercice de fixation",
          "stepTheme": "Le demi-plan de l'exercice de fixation",
          "stepBadge": "Le demi-plan de l'exercice de fixation",
          "paragraphText": "• Exercice de fixation : pour $(I) : 2x - y + 2 > 0$, la frontière est la droite d'équation $2x - y + 2 = 0$.\nComme l'origine est solution, l'ensemble des solutions est le demi-plan ouvert limité par cette droite et contenant le point $O$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q4",
            "type": "mcq",
            "prompt": "Quel demi-plan représente les solutions de $2x - y + 2 > 0$ ?",
            "options": [
              "Le demi-plan contenant $O$, frontière exclue",
              "Le demi-plan ne contenant pas $O$, frontière incluse",
              "La droite elle-même",
              "Le demi-plan contenant $O$, frontière incluse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'origine est solution et l'inégalité est stricte : demi-plan contenant $O$, sans la frontière."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Tracer la bonne frontière",
          "stepTheme": "Tracer la bonne frontière",
          "stepBadge": "Tracer la bonne frontière",
          "paragraphText": "• Piège : la frontière d'une inéquation $ax + by + c$ s'obtient en remplaçant l'inégalité par une égalité, sans changer les coefficients.\nPour $x + y < 3$, la droite à tracer est donc celle d'équation $x + y = 3$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q5",
            "type": "mcq",
            "prompt": "Quelle droite faut-il tracer pour résoudre graphiquement l'inéquation $x + y < 3$ ?",
            "options": [
              "La droite d'équation $x + y = 0$",
              "La droite d'équation $x - y = 3$",
              "La droite d'équation $x + y = -3$",
              "La droite d'équation $x + y = 3$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On remplace l'inégalité par l'égalité en gardant les mêmes coefficients : $x + y = 3$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'inéquation x plus y strictement inférieur à 3",
          "stepTheme": "L'inéquation x plus y strictement inférieur à 3",
          "stepBadge": "L'inéquation x plus y strictement inférieur à 3",
          "paragraphText": "• Exercice de la leçon : pour $x + y < 3$, le point $O(0 ; 0)$ vérifie l'inéquation, car $0 < 3$.\nL'ensemble des solutions est donc le demi-plan privé de la droite d'équation $x + y = 3$ et contenant le point de coordonnées $(0 ; 0)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q6",
            "type": "mcq",
            "prompt": "Quel point la correction de la leçon utilise-t-elle pour situer les solutions de $x + y < 3$ ?",
            "options": [
              "Le point $(3 ; 3)$",
              "Le point $(0 ; 0)$, contenu dans le demi-plan solution",
              "Le point $(3 ; 0)$, sur la frontière",
              "Le point $(-3 ; -3)$, hors du demi-plan"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le demi-plan solution est celui qui contient l'origine, qui vérifie $0 + 0 < 3$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q1",
          "type": "mcq",
          "prompt": "Comment l'ensemble des solutions d'une inéquation stricte $ax + by + c < 0$ se représente-t-il graphiquement ?",
          "options": [
            "Par la seule droite d'équation $ax + by + c = 0$",
            "Par un demi-plan ne contenant pas sa droite frontière",
            "Par tout le plan",
            "Par un seul point"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est un demi-plan limité par la droite frontière, qui n'en fait pas partie pour une inégalité stricte."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q2",
          "type": "mcq",
          "prompt": "Pour une inéquation large $ax + by + c \\leq 0$, la droite frontière fait-elle partie des solutions ?",
          "options": [
            "Non, jamais",
            "Seulement son origine",
            "Seulement si $c = 0$",
            "Oui, elle est contenue dans l'ensemble des solutions"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La remarque de la leçon : avec une inégalité large, la frontière est incluse dans les solutions."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q3",
          "type": "mcq",
          "prompt": "Pour l'inéquation $2x - y + 2 > 0$, que donne le test du couple $(0 ; 0)$ ?",
          "options": [
            "$-2$, donc $O$ n'est pas solution",
            "$0$, donc $O$ est sur la frontière",
            "$2$, donc $O$ est solution",
            "$-1$, donc $O$ n'est pas solution"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $0 - 0 + 2 = 2$, strictement positif : l'origine est solution de l'inéquation."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q4",
          "type": "mcq",
          "prompt": "Quel demi-plan représente les solutions de $2x - y + 2 > 0$ ?",
          "options": [
            "Le demi-plan contenant $O$, frontière exclue",
            "Le demi-plan ne contenant pas $O$, frontière incluse",
            "La droite elle-même",
            "Le demi-plan contenant $O$, frontière incluse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'origine est solution et l'inégalité est stricte : demi-plan contenant $O$, sans la frontière."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q5",
          "type": "mcq",
          "prompt": "Quelle droite faut-il tracer pour résoudre graphiquement l'inéquation $x + y < 3$ ?",
          "options": [
            "La droite d'équation $x + y = 0$",
            "La droite d'équation $x - y = 3$",
            "La droite d'équation $x + y = -3$",
            "La droite d'équation $x + y = 3$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On remplace l'inégalité par l'égalité en gardant les mêmes coefficients : $x + y = 3$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q6",
          "type": "mcq",
          "prompt": "Quel point la correction de la leçon utilise-t-elle pour situer les solutions de $x + y < 3$ ?",
          "options": [
            "Le point $(3 ; 3)$",
            "Le point $(0 ; 0)$, contenu dans le demi-plan solution",
            "Le point $(3 ; 0)$, sur la frontière",
            "Le point $(-3 ; -3)$, hors du demi-plan"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le demi-plan solution est celui qui contient l'origine, qui vérifie $0 + 0 < 3$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03",
      "order": 3,
      "title": "Systèmes d'inéquations : définition et couples solutions",
      "summary": "Définir un système d'inéquations du premier degré et vérifier si un couple donné en est solution.",
      "conceptExplanation": "Un système d'inéquations du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$ est composé d'au moins deux inéquations du premier degré qui contiennent chacune les deux mêmes inconnues.\nUn couple $(x_0 ; y_0)$ de nombres réels est solution du système si et seulement s'il est solution de chacune des inéquations du système.\nL'ensemble des solutions de ce système est représenté graphiquement, dans le plan muni d'un repère $(O ; I ; J)$, par l'intersection des deux demi-plans limités par les droites frontières des deux inéquations.\nExemple : le couple $(-1 ; 1)$ est solution du système formé de $x + y - 2 < 0$ et de $-x + 2y - 6 < 0$.",
      "keyRule": "Solution d'un système égale solution de chaque inéquation : on teste tout, on ne conclut qu'à la fin.",
      "formulas": [],
      "workedExample": {
        "title": "Le couple $(-1 ; 1)$ et un système (exercice de fixation)",
        "statement": "On donne le système formé des inéquations $x + y - 2 < 0$ et $-x + 2y - 6 < 0$. Justifie que le couple $(-1 ; 1)$ est solution de ce système.",
        "methodSteps": [
          "On teste la première inéquation : $-1 + 1 - 2 = -2 < 0$, elle est vérifiée.",
          "On teste la seconde : $1 + 2 - 6 = -3 < 0$, elle est vérifiée.",
          "Le couple vérifie chacune des deux inéquations."
        ],
        "conclusion": "Le couple $(-1 ; 1)$ est bien solution du système."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qu'est un système d'inéquations",
          "stepTheme": "Ce qu'est un système d'inéquations",
          "stepBadge": "Ce qu'est un système d'inéquations",
          "paragraphText": "• Définition : un système d'inéquations du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$ est composé d'au moins deux inéquations du premier degré qui contiennent chacune les deux mêmes inconnues.\nLes deux inéquations doivent être vérifiées en même temps.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q1",
            "type": "mcq",
            "prompt": "De quoi un système d'inéquations du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$ est-il composé ?",
            "options": [
              "D'au moins deux inéquations du premier degré avec les mêmes inconnues",
              "D'une seule inéquation et d'une équation",
              "De deux équations du second degré",
              "D'inéquations sans inconnue commune"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, il faut au moins deux inéquations du premier degré portant sur les deux mêmes inconnues."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Un couple solution d'un système",
          "stepTheme": "Un couple solution d'un système",
          "stepBadge": "Un couple solution d'un système",
          "paragraphText": "• Un couple $(x_0 ; y_0)$ est solution du système si et seulement s'il est solution de chacune des inéquations du système.\nIl ne suffit donc pas qu'il vérifie l'une des deux inéquations.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q2",
            "type": "mcq",
            "prompt": "Quand un couple est-il solution d'un système d'inéquations ?",
            "options": [
              "Quand il vérifie au moins une des inéquations",
              "Quand il annule les deux membres de gauche",
              "Quand il vérifie chacune des inéquations du système",
              "Quand il vérifie la première inéquation seulement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon l'exige : le couple doit être solution de chacune des inéquations."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Vérifier le couple moins 1 et 1",
          "stepTheme": "Vérifier le couple moins 1 et 1",
          "stepBadge": "Vérifier le couple moins 1 et 1",
          "paragraphText": "• Exercice de fixation : pour le système formé de $x + y - 2 < 0$ et de $-x + 2y - 6 < 0$, le couple $(-1 ; 1)$ vérifie la première inéquation.\nOn calcule $-1 + 1 - 2 = -2$, qui est bien strictement négatif.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q3",
            "type": "mcq",
            "prompt": "Que vaut $x + y - 2$ pour le couple $(-1 ; 1)$ ?",
            "options": [
              "$0$",
              "$-2$",
              "$2$",
              "$-4$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $-1 + 1 - 2 = -2 < 0$ : la première inéquation est vérifiée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Vérifier la seconde inéquation",
          "stepTheme": "Vérifier la seconde inéquation",
          "stepBadge": "Vérifier la seconde inéquation",
          "paragraphText": "• Pour la seconde inéquation $-x + 2y - 6 < 0$, le même couple $(-1 ; 1)$ donne aussi un résultat strictement négatif.\nLes deux inéquations étant vérifiées, le couple est solution du système.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q4",
            "type": "mcq",
            "prompt": "Que vaut $-x + 2y - 6$ pour le couple $(-1 ; 1)$ ?",
            "options": [
              "$3$",
              "$-9$",
              "$0$",
              "$-3$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $1 + 2 - 6 = -3 < 0$ : la seconde inéquation est aussi vérifiée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Une seule inéquation vérifiée ne suffit pas",
          "stepTheme": "Une seule inéquation vérifiée ne suffit pas",
          "stepBadge": "Une seule inéquation vérifiée ne suffit pas",
          "paragraphText": "• Piège : un couple peut vérifier une seule des deux inéquations sans être solution du système.\nPar exemple, le couple $(5 ; 0)$ vérifie $-x + 2y - 6 < 0$ mais pas $x + y - 2 < 0$ : il n'est donc pas solution du système de l'exercice.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q5",
            "type": "mcq",
            "prompt": "Le couple $(5 ; 0)$ est-il solution du système formé de $x + y - 2 < 0$ et $-x + 2y - 6 < 0$ ?",
            "options": [
              "Oui, car il vérifie la seconde inéquation",
              "Oui, car $x$ est positif",
              "Non, car $x + y - 2$ vaut $3$, qui n'est pas strictement négatif",
              "Non, car aucun couple n'est solution"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La première inéquation donne $5 + 0 - 2 = 3 > 0$ : elle n'est pas vérifiée, donc le couple n'est pas solution du système."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "L'intersection des demi-plans",
          "stepTheme": "L'intersection des demi-plans",
          "stepBadge": "L'intersection des demi-plans",
          "paragraphText": "• L'ensemble des solutions d'un système est représenté graphiquement par l'intersection des deux demi-plans limités par les droites frontières des deux inéquations.\nC'est la partie du plan qui convient aux deux inéquations à la fois.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q6",
            "type": "mcq",
            "prompt": "Comment l'ensemble des solutions d'un système se représente-t-il graphiquement ?",
            "options": [
              "Par l'intersection des deux demi-plans",
              "Par la réunion des deux demi-plans",
              "Par les deux droites frontières seulement",
              "Par un seul demi-plan au choix"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon : les solutions du système forment l'intersection des demi-plans des deux inéquations."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q1",
          "type": "mcq",
          "prompt": "De quoi un système d'inéquations du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$ est-il composé ?",
          "options": [
            "D'au moins deux inéquations du premier degré avec les mêmes inconnues",
            "D'une seule inéquation et d'une équation",
            "De deux équations du second degré",
            "D'inéquations sans inconnue commune"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, il faut au moins deux inéquations du premier degré portant sur les deux mêmes inconnues."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q2",
          "type": "mcq",
          "prompt": "Quand un couple est-il solution d'un système d'inéquations ?",
          "options": [
            "Quand il vérifie au moins une des inéquations",
            "Quand il annule les deux membres de gauche",
            "Quand il vérifie chacune des inéquations du système",
            "Quand il vérifie la première inéquation seulement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon l'exige : le couple doit être solution de chacune des inéquations."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q3",
          "type": "mcq",
          "prompt": "Que vaut $x + y - 2$ pour le couple $(-1 ; 1)$ ?",
          "options": [
            "$0$",
            "$-2$",
            "$2$",
            "$-4$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $-1 + 1 - 2 = -2 < 0$ : la première inéquation est vérifiée."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q4",
          "type": "mcq",
          "prompt": "Que vaut $-x + 2y - 6$ pour le couple $(-1 ; 1)$ ?",
          "options": [
            "$3$",
            "$-9$",
            "$0$",
            "$-3$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $1 + 2 - 6 = -3 < 0$ : la seconde inéquation est aussi vérifiée."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q5",
          "type": "mcq",
          "prompt": "Le couple $(5 ; 0)$ est-il solution du système formé de $x + y - 2 < 0$ et $-x + 2y - 6 < 0$ ?",
          "options": [
            "Oui, car il vérifie la seconde inéquation",
            "Oui, car $x$ est positif",
            "Non, car $x + y - 2$ vaut $3$, qui n'est pas strictement négatif",
            "Non, car aucun couple n'est solution"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La première inéquation donne $5 + 0 - 2 = 3 > 0$ : elle n'est pas vérifiée, donc le couple n'est pas solution du système."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q6",
          "type": "mcq",
          "prompt": "Comment l'ensemble des solutions d'un système se représente-t-il graphiquement ?",
          "options": [
            "Par l'intersection des deux demi-plans",
            "Par la réunion des deux demi-plans",
            "Par les deux droites frontières seulement",
            "Par un seul demi-plan au choix"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon : les solutions du système forment l'intersection des demi-plans des deux inéquations."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04",
      "order": 4,
      "title": "Résolution graphique d'un système",
      "summary": "Résoudre graphiquement un système d'inéquations par l'intersection de deux demi-plans.",
      "conceptExplanation": "Pour résoudre un système d'inéquations du premier degré dans $\\mathbb{R} \\times \\mathbb{R}$, on trace les droites frontières des deux inéquations, on détermine le demi-plan des solutions de chacune, puis on prend l'intersection des deux demi-plans.\nDans l'exercice de fixation de la leçon, pour le système formé de $x + y - 2 < 0$ et de $-x + 2y - 6 < 0$, le demi-plan de chaque inéquation est situé grâce au point de coordonnées $(-1 ; 1)$, solution du système : l'ensemble des solutions est l'intersection des deux demi-plans, privés de leurs droites car les inégalités sont strictes.",
      "keyRule": "Système égale intersection : tracer les deux droites, situer les deux demi-plans, garder la partie commune.",
      "formulas": [],
      "workedExample": {
        "title": "Résolution graphique du système de l'exercice de fixation",
        "statement": "Détermine graphiquement les solutions du système formé des inéquations $x + y - 2 < 0$ et $-x + 2y - 6 < 0$.",
        "methodSteps": [
          "On trace les droites d'équations $x + y - 2 = 0$ et $-x + 2y - 6 = 0$.",
          "Le demi-plan privé de sa droite et contenant le point $(-1 ; 1)$ représente les solutions de la première inéquation.",
          "On fait de même pour la seconde inéquation, puis on prend l'intersection des deux demi-plans."
        ],
        "conclusion": "L'ensemble des solutions du système est l'intersection des deux demi-plans ainsi déterminés."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Tracer les deux droites frontières",
          "stepTheme": "Tracer les deux droites frontières",
          "stepBadge": "Tracer les deux droites frontières",
          "paragraphText": "• Méthode de la leçon : pour résoudre graphiquement un système, on trace d'abord les droites frontières des deux inéquations.\nPour le système de l'exercice, ce sont les droites d'équations $x + y - 2 = 0$ et $-x + 2y - 6 = 0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q1",
            "type": "mcq",
            "prompt": "Quelle est la première étape de la résolution graphique d'un système d'inéquations ?",
            "options": [
              "Calculer un discriminant",
              "Choisir un couple au hasard",
              "Additionner les deux inéquations",
              "Tracer les droites frontières des inéquations"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On commence par tracer les deux droites d'équations obtenues en remplaçant les inégalités par des égalités."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Déterminer chaque demi-plan",
          "stepTheme": "Déterminer chaque demi-plan",
          "stepBadge": "Déterminer chaque demi-plan",
          "paragraphText": "• On détermine ensuite, pour chaque inéquation, le demi-plan de ses solutions, à l'aide d'un point test.\nDans l'exercice de la leçon, le point de coordonnées $(-1 ; 1)$, solution du système, sert à situer les deux demi-plans.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q2",
            "type": "mcq",
            "prompt": "À quoi sert le couple $(-1 ; 1)$ dans la résolution graphique de l'exercice de fixation ?",
            "options": [
              "À tracer les droites",
              "À situer les demi-plans solutions, car il est solution du système",
              "À calculer les coefficients",
              "À remplacer les inconnues dans les droites"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Étant solution des deux inéquations, il indique de quel côté de chaque droite se trouvent les solutions."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Prendre l'intersection",
          "stepTheme": "Prendre l'intersection",
          "stepBadge": "Prendre l'intersection",
          "paragraphText": "• L'ensemble des solutions du système est l'intersection des deux demi-plans, privés de leurs droites frontières quand les inégalités sont strictes.\nDans l'exercice, les deux inégalités sont strictes : les deux droites sont exclues.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q3",
            "type": "mcq",
            "prompt": "Les droites frontières font-elles partie des solutions du système de l'exercice, dont les inégalités sont strictes ?",
            "options": [
              "Non, aucune des deux",
              "Oui, toutes les deux",
              "Oui, une seule des deux",
              "Seulement leurs points d'intersection"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec des inégalités strictes, chaque frontière est exclue de son demi-plan, donc de l'intersection."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un autre système des exercices",
          "stepTheme": "Un autre système des exercices",
          "stepBadge": "Un autre système des exercices",
          "paragraphText": "• Exercice de renforcement : on résout graphiquement le système formé de $x + y < -2$ et de $x - y > 3$.\nOn trace les droites d'équations $x + y = -2$ et $x - y = 3$, on détermine chaque demi-plan, puis on prend leur intersection.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q4",
            "type": "mcq",
            "prompt": "Quelles droites trace-t-on pour le système formé de $x + y < -2$ et de $x - y > 3$ ?",
            "options": [
              "$x + y = 2$ et $x - y = -3$",
              "$x - y = -2$ et $x + y = 3$",
              "$x + y = -2$ et $x - y = 3$",
              "$y = -2$ et $x = 3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On remplace chaque inégalité par une égalité sans changer les coefficients ni les constantes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas prendre la réunion",
          "stepTheme": "Ne pas prendre la réunion",
          "stepBadge": "Ne pas prendre la réunion",
          "paragraphText": "• Piège : les solutions d'un système forment l'intersection des demi-plans, pas leur réunion.\nUn point qui ne convient qu'à une seule inéquation n'est pas solution du système, même s'il se trouve dans l'un des demi-plans.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q5",
            "type": "mcq",
            "prompt": "Un point situé dans un seul des deux demi-plans est-il solution du système ?",
            "options": [
              "Oui, un seul demi-plan suffit",
              "Non, il faut appartenir aux deux demi-plans",
              "Oui, si les inégalités sont larges",
              "Oui, s'il est sur une frontière"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les solutions du système sont l'intersection : il faut vérifier les deux inéquations à la fois."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Vérifier un point de l'intersection",
          "stepTheme": "Vérifier un point de l'intersection",
          "stepBadge": "Vérifier un point de l'intersection",
          "paragraphText": "• Pour contrôler une résolution graphique, on peut tester un couple situé dans la zone obtenue.\nPar exemple, le couple $(-1 ; 1)$ appartient à l'intersection pour le système de l'exercice de fixation, ce qu'on a vérifié par le calcul.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q6",
            "type": "mcq",
            "prompt": "Comment peut-on contrôler qu'une zone du plan est bien l'ensemble des solutions d'un système ?",
            "options": [
              "En mesurant la zone",
              "En comptant les droites",
              "En changeant les signes des inéquations",
              "En testant un couple de la zone dans les deux inéquations"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Un couple de la zone doit vérifier chacune des inéquations : c'est le test de la définition."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q1",
          "type": "mcq",
          "prompt": "Quelle est la première étape de la résolution graphique d'un système d'inéquations ?",
          "options": [
            "Calculer un discriminant",
            "Choisir un couple au hasard",
            "Additionner les deux inéquations",
            "Tracer les droites frontières des inéquations"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On commence par tracer les deux droites d'équations obtenues en remplaçant les inégalités par des égalités."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q2",
          "type": "mcq",
          "prompt": "À quoi sert le couple $(-1 ; 1)$ dans la résolution graphique de l'exercice de fixation ?",
          "options": [
            "À tracer les droites",
            "À situer les demi-plans solutions, car il est solution du système",
            "À calculer les coefficients",
            "À remplacer les inconnues dans les droites"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Étant solution des deux inéquations, il indique de quel côté de chaque droite se trouvent les solutions."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q3",
          "type": "mcq",
          "prompt": "Les droites frontières font-elles partie des solutions du système de l'exercice, dont les inégalités sont strictes ?",
          "options": [
            "Non, aucune des deux",
            "Oui, toutes les deux",
            "Oui, une seule des deux",
            "Seulement leurs points d'intersection"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec des inégalités strictes, chaque frontière est exclue de son demi-plan, donc de l'intersection."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q4",
          "type": "mcq",
          "prompt": "Quelles droites trace-t-on pour le système formé de $x + y < -2$ et de $x - y > 3$ ?",
          "options": [
            "$x + y = 2$ et $x - y = -3$",
            "$x - y = -2$ et $x + y = 3$",
            "$x + y = -2$ et $x - y = 3$",
            "$y = -2$ et $x = 3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On remplace chaque inégalité par une égalité sans changer les coefficients ni les constantes."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q5",
          "type": "mcq",
          "prompt": "Un point situé dans un seul des deux demi-plans est-il solution du système ?",
          "options": [
            "Oui, un seul demi-plan suffit",
            "Non, il faut appartenir aux deux demi-plans",
            "Oui, si les inégalités sont larges",
            "Oui, s'il est sur une frontière"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les solutions du système sont l'intersection : il faut vérifier les deux inéquations à la fois."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q6",
          "type": "mcq",
          "prompt": "Comment peut-on contrôler qu'une zone du plan est bien l'ensemble des solutions d'un système ?",
          "options": [
            "En mesurant la zone",
            "En comptant les droites",
            "En changeant les signes des inéquations",
            "En testant un couple de la zone dans les deux inéquations"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Un couple de la zone doit vérifier chacune des inéquations : c'est le test de la définition."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05",
      "order": 5,
      "title": "Traduire une situation en système d'inéquations",
      "summary": "Modéliser des contraintes de la vie courante par des inéquations à deux inconnues et exploiter les couples solutions entiers.",
      "conceptExplanation": "De nombreuses situations se traduisent par des inéquations à deux inconnues : une dépense maximale donne une inégalité large, par exemple $25x + 30y \\leq 300$ pour $x$ livres à $25$ francs et $y$ bandes dessinées à $30$ francs achetés par Maud pour au plus $300$ francs.\nPour le cocktail de Karim, les contraintes « au moins $10$ litres » et « au plus $6000$ francs » conduisent au système formé de $3x + 2y \\leq 30$ et de $x + y \\geq 10$, dont les couples solutions entiers, comme $(1 ; 10)$ ou $(2 ; 9)$, sont les possibilités d'achat.\nDans la situation complexe du tissu, on retient parmi les couples solutions celui qui minimise les déchets : $(5 ; 4)$, c'est-à-dire $5$ chemises et $4$ pantalons.",
      "keyRule": "Modéliser, c'est traduire chaque phrase de contrainte par une inégalité, puis lire les couples entiers dans la zone solution.",
      "formulas": [],
      "workedExample": {
        "title": "Le cocktail de Karim (exercice d'approfondissement)",
        "statement": "Karim achète $x$ litres de jus d'orange à $600$ francs le litre et $y$ litres de jus d'ananas à $400$ francs le litre. Elle veut au moins $10$ litres de cocktail et dispose de $6000$ francs. Montre que les contraintes conduisent au système formé de $3x + 2y \\leq 30$ et de $x + y \\geq 10$, et donne une possibilité d'achat.",
        "methodSteps": [
          "Le budget donne $600x + 400y \\leq 6000$, qui se simplifie en $3x + 2y \\leq 30$.",
          "La quantité totale donne $x + y \\geq 10$.",
          "La résolution graphique fournit des couples entiers solutions, par exemple $(1 ; 10)$."
        ],
        "conclusion": "Le couple $(1 ; 10)$ est une possibilité : $1$ litre de jus d'orange et $10$ litres de jus d'ananas."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Traduire une dépense maximale",
          "stepTheme": "Traduire une dépense maximale",
          "stepBadge": "Traduire une dépense maximale",
          "paragraphText": "• Exercice de la leçon : Maud achète $x$ livres à $25$ francs et $y$ bandes dessinées à $30$ francs, pour une dépense maximale de $300$ francs.\nLa contrainte de dépense se traduit par une inéquation à deux inconnues.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q1",
            "type": "mcq",
            "prompt": "Quelle inéquation traduit la dépense de Maud, $x$ livres à $25$ francs et $y$ bandes dessinées à $30$ francs, pour au maximum $300$ francs ?",
            "options": [
              "$25x + 30y = 300$",
              "$25x + 30y \\geq 300$",
              "$25x + 30y \\leq 300$",
              "$x + y \\leq 300$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La dépense totale ne doit pas dépasser $300$ francs : elle est donc inférieure ou égale à $300$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Traduire des contraintes de quantités",
          "stepTheme": "Traduire des contraintes de quantités",
          "stepBadge": "Traduire des contraintes de quantités",
          "paragraphText": "• Exercice d'approfondissement : Karim achète $x$ litres de jus d'orange à $600$ francs le litre et $y$ litres de jus d'ananas à $400$ francs le litre ; elle veut au moins $10$ litres de cocktail et dispose de $6000$ francs.\nCes deux contraintes conduisent au système formé de $3x + 2y \\leq 30$ et de $x + y \\geq 10$, après simplification de la première inéquation par $200$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q2",
            "type": "mcq",
            "prompt": "Quelle inéquation traduit « au moins $10$ litres de cocktail » pour $x$ litres d'un jus et $y$ litres de l'autre ?",
            "options": [
              "$x + y \\geq 10$",
              "$x + y \\leq 10$",
              "$x + y = 10$",
              "$xy \\geq 10$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Au moins $10$ » signifie supérieur ou égal à $10$ : la somme des deux quantités doit atteindre $10$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Simplifier une inéquation de budget",
          "stepTheme": "Simplifier une inéquation de budget",
          "stepBadge": "Simplifier une inéquation de budget",
          "paragraphText": "• La contrainte de budget de Karim s'écrit d'abord $600x + 400y \\leq 6000$.\nEn divisant les trois nombres par $200$, on obtient la forme simplifiée $3x + 2y \\leq 30$ du système de la leçon.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q3",
            "type": "mcq",
            "prompt": "Par quel nombre la leçon divise-t-elle $600x + 400y \\leq 6000$ pour obtenir $3x + 2y \\leq 30$ ?",
            "options": [
              "Par $100$",
              "Par $600$",
              "Par $30$",
              "Par $200$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On divise $600$, $400$ et $6000$ par $200$ : on obtient $3$, $2$ et $30$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Des possibilités d'achat pour Karim",
          "stepTheme": "Des possibilités d'achat pour Karim",
          "stepBadge": "Des possibilités d'achat pour Karim",
          "paragraphText": "• La résolution graphique du système de Karim donne des couples solutions à coordonnées entières, comme $(1 ; 10)$ et $(2 ; 9)$.\nChaque couple indique une possibilité d'achat compatible avec les deux contraintes.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q4",
            "type": "mcq",
            "prompt": "Le couple $(2 ; 9)$ est-il une possibilité d'achat pour Karim, avec les contraintes $3x + 2y \\leq 30$ et $x + y \\geq 10$ ?",
            "options": [
              "Non, car la somme des litres est trop faible",
              "Oui, car les deux inéquations sont vérifiées",
              "Non, car le budget est dépassé",
              "Oui, seulement si $x$ est pair"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On vérifie : la somme des litres vaut $11$, au moins $10$, et la contrainte de budget simplifiée est respectée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La situation des chemises et des pantalons",
          "stepTheme": "La situation des chemises et des pantalons",
          "stepBadge": "La situation des chemises et des pantalons",
          "paragraphText": "• Situation complexe de la leçon : un père dispose de $10$ mètres de tissu ; une chemise nécessite $1$ mètre et un pantalon $1{,}2$ mètre, et il veut plus de chemises que de pantalons.\nEn notant $x$ le nombre de chemises et $y$ le nombre de pantalons, les contraintes conduisent notamment à $x + 1{,}2y \\leq 10$ et à $y < x$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q5",
            "type": "mcq",
            "prompt": "Dans la situation du tissu, que traduit l'inégalité $y < x$ ?",
            "options": [
              "Le père veut plus de chemises que de pantalons",
              "Il faut moins de tissu pour un pantalon",
              "Il y a moins de $10$ mètres de tissu",
              "Les pantalons coûtent plus cher"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le père voudrait coudre plus de chemises que de pantalons : le nombre de pantalons $y$ est inférieur au nombre de chemises $x$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Minimiser les déchets de tissu",
          "stepTheme": "Minimiser les déchets de tissu",
          "stepBadge": "Minimiser les déchets de tissu",
          "paragraphText": "• Parmi les couples solutions entiers du système du tissu, comme $(5 ; 4)$, on retient celui qui utilise le plus de tissu pour minimiser les déchets.\nPour le couple $(5 ; 4)$, la quantité de tissu utilisée est très proche de $10$ mètres, soit $9{,}8$ mètres : c'est le couple retenu par la correction, avec $5$ chemises et $4$ pantalons.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q6",
            "type": "mcq",
            "prompt": "Quelle quantité de tissu le couple $(5 ; 4)$ utilise-t-il dans la situation complexe ?",
            "options": [
              "$10$ mètres exactement",
              "$8{,}8$ mètres",
              "$9{,}8$ mètres",
              "$6{,}2$ mètres"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Avec $5$ chemises et $4$ pantalons, le tissu utilisé est très proche des $10$ mètres disponibles : $9{,}8$ mètres d'après la correction."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q1",
          "type": "mcq",
          "prompt": "Quelle inéquation traduit la dépense de Maud, $x$ livres à $25$ francs et $y$ bandes dessinées à $30$ francs, pour au maximum $300$ francs ?",
          "options": [
            "$25x + 30y = 300$",
            "$25x + 30y \\geq 300$",
            "$25x + 30y \\leq 300$",
            "$x + y \\leq 300$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La dépense totale ne doit pas dépasser $300$ francs : elle est donc inférieure ou égale à $300$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q2",
          "type": "mcq",
          "prompt": "Quelle inéquation traduit « au moins $10$ litres de cocktail » pour $x$ litres d'un jus et $y$ litres de l'autre ?",
          "options": [
            "$x + y \\geq 10$",
            "$x + y \\leq 10$",
            "$x + y = 10$",
            "$xy \\geq 10$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Au moins $10$ » signifie supérieur ou égal à $10$ : la somme des deux quantités doit atteindre $10$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q3",
          "type": "mcq",
          "prompt": "Par quel nombre la leçon divise-t-elle $600x + 400y \\leq 6000$ pour obtenir $3x + 2y \\leq 30$ ?",
          "options": [
            "Par $100$",
            "Par $600$",
            "Par $30$",
            "Par $200$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On divise $600$, $400$ et $6000$ par $200$ : on obtient $3$, $2$ et $30$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q4",
          "type": "mcq",
          "prompt": "Le couple $(2 ; 9)$ est-il une possibilité d'achat pour Karim, avec les contraintes $3x + 2y \\leq 30$ et $x + y \\geq 10$ ?",
          "options": [
            "Non, car la somme des litres est trop faible",
            "Oui, car les deux inéquations sont vérifiées",
            "Non, car le budget est dépassé",
            "Oui, seulement si $x$ est pair"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On vérifie : la somme des litres vaut $11$, au moins $10$, et la contrainte de budget simplifiée est respectée."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q5",
          "type": "mcq",
          "prompt": "Dans la situation du tissu, que traduit l'inégalité $y < x$ ?",
          "options": [
            "Le père veut plus de chemises que de pantalons",
            "Il faut moins de tissu pour un pantalon",
            "Il y a moins de $10$ mètres de tissu",
            "Les pantalons coûtent plus cher"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le père voudrait coudre plus de chemises que de pantalons : le nombre de pantalons $y$ est inférieur au nombre de chemises $x$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q6",
          "type": "mcq",
          "prompt": "Quelle quantité de tissu le couple $(5 ; 4)$ utilise-t-il dans la situation complexe ?",
          "options": [
            "$10$ mètres exactement",
            "$8{,}8$ mètres",
            "$9{,}8$ mètres",
            "$6{,}2$ mètres"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Avec $5$ chemises et $4$ pantalons, le tissu utilisé est très proche des $10$ mètres disponibles : $9{,}8$ mètres d'après la correction."
        }
      ]
    }
  ]
};
