import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1A-Maths leçon-07 SYSTEMES LINEAIRES.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_1RE_L07_SYSTEMES_INEQUATIONS_LINEAIRES: CurriculumChapter = {
  "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires",
  "subjectId": "maths",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 7,
  "title": "Leçon 7 : Systèmes d'inéquations linéaires dans ℝ × ℝ",
  "summary": "Inéquations du premier degré à deux inconnues, résolution graphique par demi-plans, systèmes, mise en inéquations d'un problème et solutions entières.",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "1A-Maths leçon-07 SYSTEMES LINEAIRES.pdf",
  "points": [
    {
      "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01",
      "order": 1,
      "title": "Inéquation du premier degré dans $\\mathbb{R}\\times\\mathbb{R}$",
      "summary": "Reconnaître une inéquation à deux inconnues et tester un couple.",
      "conceptExplanation": "Soit $a$, $b$ et $c$ des nombres réels non tous nuls. Une inéquation du premier degré dans $\\mathbb{R}\\times\\mathbb{R}$ s'écrit sous l'une des formes :\n$$ax+by+c<0,\\quad ax+by+c>0,\\quad ax+by+c\\leq0,\\quad ax+by+c\\geq0.$$\n\nExemples : $3x+y\\leq7$, $3y\\leq0$ et $6x\\leq9$ en sont. En revanche :\n- $-x+5y=9$ et $x+y=8$ sont des ÉQUATIONS (signe $=$) ;\n- $x^2+3y<5$ n'est pas du premier degré (il y a $x^2$).\n\nUn couple $(x_0\\,;y_0)$ est solution de l'inéquation $ax+by+c<0$ s'il la vérifie, c'est-à-dire si $ax_0+by_0+c<0$.\n\nExemple : pour $2x-y-2>0$ et le couple $(2\\,;1)$ : $2\\times2-1-2=1$ et $1>0$, donc $(2\\,;1)$ est solution.",
      "keyRule": "Pour tester $(x_0\\,;y_0)$ : on remplace $x$ et $y$, on calcule, puis on vérifie l'inégalité.",
      "formulas": [],
      "workedExample": {
        "title": "Tester un couple",
        "statement": "Le couple $(1\\,;-5)$ est-il solution de $x+y+6>0$ ?",
        "methodSteps": [
          "On remplace : $1+(-5)+6=2$.",
          "$2>0$ est vrai."
        ],
        "conclusion": "Oui, $(1\\,;-5)$ est solution."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La forme d'une inéquation",
          "stepTheme": "La forme d'une inéquation",
          "stepBadge": "La forme d'une inéquation",
          "paragraphText": "Une inéquation du premier degré dans $\\mathbb{R}\\times\\mathbb{R}$ s'écrit $ax+by+c<0$ (ou $>$, $\\leq$, $\\geq$), avec $a$, $b$, $c$ non tous nuls.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q1",
            "type": "mcq",
            "prompt": "Laquelle est une inéquation du premier degré dans $\\mathbb{R}\\times\\mathbb{R}$ ?",
            "options": [
              "$-x+5y=9$",
              "$x^2+3y<5$",
              "$3x+y\\leq7$",
              "$x+y=8$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$3x+y\\leq7$ a un signe d'inégalité et ses inconnues sont au premier degré."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Équation ou inéquation ?",
          "stepTheme": "Équation ou inéquation ?",
          "stepBadge": "Équation ou inéquation ?",
          "paragraphText": "Avec le signe $=$, c'est une ÉQUATION, pas une inéquation : $x+y=8$ est une équation du premier degré dans $\\mathbb{R}\\times\\mathbb{R}$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q2",
            "type": "mcq",
            "prompt": "Pourquoi $x^2+3y<5$ n'est-elle pas une inéquation du premier degré ?",
            "options": [
              "Parce qu'elle contient $x^2$",
              "Parce qu'elle a deux inconnues",
              "Parce que le signe est $<$",
              "Parce que $5$ est positif"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le terme $x^2$ est du second degré."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une seule inconnue, c'est permis",
          "stepTheme": "Une seule inconnue, c'est permis",
          "stepBadge": "Une seule inconnue, c'est permis",
          "paragraphText": "$a$ ou $b$ peut être nul : $3y\\leq0$ (avec $a=0$) et $6x\\leq9$ (avec $b=0$) sont aussi des inéquations du premier degré dans $\\mathbb{R}\\times\\mathbb{R}$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q3",
            "type": "mcq",
            "prompt": "$6x\\leq9$ est-elle une inéquation du premier degré dans $\\mathbb{R}\\times\\mathbb{R}$ ?",
            "options": [
              "Non, car il manque $y$",
              "Non, c'est une équation",
              "Non, car $9$ n'est pas nul",
              "Oui, avec $b=0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Il suffit que $a$, $b$, $c$ ne soient pas tous nuls : ici $b=0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Un couple solution",
          "stepTheme": "Un couple solution",
          "stepBadge": "Un couple solution",
          "paragraphText": "$(x_0\\,;y_0)$ est solution de $ax+by+c<0$ si $ax_0+by_0+c<0$ : on remplace $x$ par $x_0$ et $y$ par $y_0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q4",
            "type": "mcq",
            "prompt": "Que fait-on pour savoir si $(2\\,;1)$ est solution de $2x-y-2>0$ ?",
            "options": [
              "On résout $2x-y-2=0$",
              "On calcule $2\\times2-1-2$ et on compare à $0$",
              "On trace la droite $y=2x$",
              "On calcule $2+1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$2\\times2-1-2=1$ et $1>0$ : le couple est solution."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un couple qui convient",
          "stepTheme": "Un couple qui convient",
          "stepBadge": "Un couple qui convient",
          "paragraphText": "Pour $x+y+6>0$ et $(1\\,;-5)$ : $1-5+6=2>0$. Le couple est solution.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q5",
            "type": "mcq",
            "prompt": "Le couple $(1\\,;1)$ est-il solution de $2x-y+2>0$ ?",
            "options": [
              "Oui, car $2-1+2=3>0$",
              "Non, car $2-1+2=3$ n'est pas nul",
              "Non, car $1<2$",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$2\\times1-1+2=3$ et $3>0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un couple qui ne convient pas",
          "stepTheme": "Un couple qui ne convient pas",
          "stepBadge": "Un couple qui ne convient pas",
          "paragraphText": "Pour $x-y-5>0$ et $\\left(\\dfrac{1}{2}\\,;3\\right)$ : $\\dfrac{1}{2}-3-5=-7{,}5$, qui n'est pas $>0$. Le couple n'est pas solution.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q6",
            "type": "mcq",
            "prompt": "Le couple $(0\\,;4)$ est-il solution de $x+y<3$ ?",
            "options": [
              "Oui, car $0<3$",
              "Oui, car $4>3$",
              "Non, car $0+4=4$ et $4$ n'est pas $<3$",
              "Non, car $x$ vaut $0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On remplace les DEUX inconnues : $0+4=4$, et $4<3$ est faux."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Strict ou large",
          "stepTheme": "Strict ou large",
          "stepBadge": "Strict ou large",
          "paragraphText": "Avec $<$ ou $>$ (inégalité stricte), un couple qui donne exactement $0$ n'est pas solution. Avec $\\leq$ ou $\\geq$ (inégalité large), il l'est.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q7",
            "type": "mcq",
            "prompt": "Le couple $(3\\,;0)$ est-il solution de $x+y-3<0$ ?",
            "options": [
              "Oui, car il donne $0$",
              "Oui, car $3>0$",
              "Oui, car $y=0$",
              "Non, car il donne $0$ et $0<0$ est faux"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$3+0-3=0$ ; l'inégalité est stricte, donc ce couple n'est pas solution."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q1",
          "type": "mcq",
          "prompt": "Laquelle est une inéquation du premier degré dans $\\mathbb{R}\\times\\mathbb{R}$ ?",
          "options": [
            "$-x+5y=9$",
            "$x^2+3y<5$",
            "$3x+y\\leq7$",
            "$x+y=8$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$3x+y\\leq7$ a un signe d'inégalité et ses inconnues sont au premier degré."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q2",
          "type": "mcq",
          "prompt": "Pourquoi $x^2+3y<5$ n'est-elle pas une inéquation du premier degré ?",
          "options": [
            "Parce qu'elle contient $x^2$",
            "Parce qu'elle a deux inconnues",
            "Parce que le signe est $<$",
            "Parce que $5$ est positif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le terme $x^2$ est du second degré."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q3",
          "type": "mcq",
          "prompt": "$6x\\leq9$ est-elle une inéquation du premier degré dans $\\mathbb{R}\\times\\mathbb{R}$ ?",
          "options": [
            "Non, car il manque $y$",
            "Non, c'est une équation",
            "Non, car $9$ n'est pas nul",
            "Oui, avec $b=0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Il suffit que $a$, $b$, $c$ ne soient pas tous nuls : ici $b=0$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q4",
          "type": "mcq",
          "prompt": "Que fait-on pour savoir si $(2\\,;1)$ est solution de $2x-y-2>0$ ?",
          "options": [
            "On résout $2x-y-2=0$",
            "On calcule $2\\times2-1-2$ et on compare à $0$",
            "On trace la droite $y=2x$",
            "On calcule $2+1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$2\\times2-1-2=1$ et $1>0$ : le couple est solution."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q5",
          "type": "mcq",
          "prompt": "Le couple $(1\\,;1)$ est-il solution de $2x-y+2>0$ ?",
          "options": [
            "Oui, car $2-1+2=3>0$",
            "Non, car $2-1+2=3$ n'est pas nul",
            "Non, car $1<2$",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$2\\times1-1+2=3$ et $3>0$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q6",
          "type": "mcq",
          "prompt": "Le couple $(0\\,;4)$ est-il solution de $x+y<3$ ?",
          "options": [
            "Oui, car $0<3$",
            "Oui, car $4>3$",
            "Non, car $0+4=4$ et $4$ n'est pas $<3$",
            "Non, car $x$ vaut $0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On remplace les DEUX inconnues : $0+4=4$, et $4<3$ est faux."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p01_q7",
          "type": "mcq",
          "prompt": "Le couple $(3\\,;0)$ est-il solution de $x+y-3<0$ ?",
          "options": [
            "Oui, car il donne $0$",
            "Oui, car $3>0$",
            "Oui, car $y=0$",
            "Non, car il donne $0$ et $0<0$ est faux"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$3+0-3=0$ ; l'inégalité est stricte, donc ce couple n'est pas solution."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02",
      "order": 2,
      "title": "Résoudre graphiquement une inéquation",
      "summary": "Les solutions forment un demi-plan limité par une droite.",
      "conceptExplanation": "Dans un repère $(O\\,;I\\,;J)$, l'ensemble des solutions de $ax+by+c<0$ est un DEMI-PLAN dont la frontière est la droite $(D)$ d'équation $ax+by+c=0$.\n- Inégalité stricte ($<$ ou $>$) : la droite $(D)$ n'est pas incluse (on la trace en pointillés).\n- Inégalité large ($\\leq$ ou $\\geq$) : la droite $(D)$ fait partie des solutions.\n\nMéthode :\n1. tracer la droite $(D)$ : $ax+by+c=0$ (deux points suffisent) ;\n2. choisir un point test qui n'est pas sur $(D)$, souvent $O(0\\,;0)$ ;\n3. si le point test vérifie l'inéquation, la solution est le demi-plan qui le contient ; sinon, c'est l'autre demi-plan.\n\nExemple : $x+y<3$. La droite $x+y=3$ passe par $(3\\,;0)$ et $(0\\,;3)$. Pour $O$ : $0+0=0<3$, vrai. Les solutions sont le demi-plan contenant $O$, droite exclue.\n\nAutre exemple : $2x-y+2>0$. Pour $O$ : $0-0+2=2>0$, vrai. Les solutions sont le demi-plan contenant $O$, limité par la droite $2x-y+2=0$.",
      "keyRule": "Frontière $ax+by+c=0$ ; point test $O$ ; le bon demi-plan est celui du point test s'il vérifie l'inéquation.",
      "formulas": [],
      "workedExample": {
        "title": "Résoudre $25x+30y\\leq300$",
        "statement": "Représente les solutions de $25x+30y\\leq300$.",
        "methodSteps": [
          "La droite $25x+30y=300$ passe par $(12\\,;0)$ et $(0\\,;10)$.",
          "Point test $O$ : $0\\leq300$, vrai.",
          "L'inégalité est large : la droite est incluse."
        ],
        "conclusion": "Les solutions sont le demi-plan contenant $O$, droite comprise."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Un demi-plan",
          "stepTheme": "Un demi-plan",
          "stepBadge": "Un demi-plan",
          "paragraphText": "Les solutions de $ax+by+c<0$ sont représentées par un demi-plan dont la frontière est la droite d'équation $ax+by+c=0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q1",
            "type": "mcq",
            "prompt": "Quelle est la frontière du demi-plan solution de $x+y<3$ ?",
            "options": [
              "La droite $x=3$",
              "La droite $x+y=3$",
              "L'axe des abscisses",
              "La droite $y=3x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On remplace le signe d'inégalité par $=$ : $x+y=3$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Tracer la frontière",
          "stepTheme": "Tracer la frontière",
          "stepBadge": "Tracer la frontière",
          "paragraphText": "Deux points suffisent. Pour $x+y=3$ : si $x=0$ alors $y=3$ ; si $y=0$ alors $x=3$. La droite passe par $(0\\,;3)$ et $(3\\,;0)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q2",
            "type": "mcq",
            "prompt": "Par quels points passe la droite $25x+30y=300$ ?",
            "options": [
              "$(25\\,;0)$ et $(0\\,;30)$",
              "$(300\\,;0)$ et $(0\\,;300)$",
              "$(10\\,;0)$ et $(0\\,;12)$",
              "$(12\\,;0)$ et $(0\\,;10)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$y=0$ donne $x=\\dfrac{300}{25}=12$ ; $x=0$ donne $y=\\dfrac{300}{30}=10$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le point test",
          "stepTheme": "Le point test",
          "stepBadge": "Le point test",
          "paragraphText": "On teste un point hors de la droite, souvent $O(0\\,;0)$. S'il vérifie l'inéquation, on garde son demi-plan ; sinon, on garde l'autre.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q3",
            "type": "mcq",
            "prompt": "Pour $x+y<3$, le point $O$ donne $0<3$ (vrai). Quel demi-plan garde-t-on ?",
            "options": [
              "Celui qui contient $O$",
              "Celui qui ne contient pas $O$",
              "Les deux",
              "Aucun"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$O$ vérifie l'inéquation : son demi-plan est la solution."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le point test qui échoue",
          "stepTheme": "Le point test qui échoue",
          "stepBadge": "Le point test qui échoue",
          "paragraphText": "Pour $x-y>3$ : $O$ donne $0>3$, faux. La solution est donc le demi-plan qui NE contient PAS $O$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q4",
            "type": "mcq",
            "prompt": "Pour $x+y<-2$, le point $O$ est-il dans le demi-plan solution ?",
            "options": [
              "Oui, car $0<2$",
              "Oui, toujours",
              "Non, car $0<-2$ est faux",
              "Non, car $O$ est sur la droite"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$0+0=0$ et $0<-2$ est faux : on garde l'autre demi-plan."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Bien calculer avec $O$",
          "stepTheme": "Bien calculer avec $O$",
          "stepBadge": "Bien calculer avec $O$",
          "paragraphText": "Pour $2x-y+2>0$ et $O$ : $2\\times0-0+2=2$, et $2>0$ est VRAI. $O$ est donc solution : on garde son demi-plan.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q5",
            "type": "mcq",
            "prompt": "Pour $2x-y+2>0$, que donne le point $O(0\\,;0)$ ?",
            "options": [
              "$-2$, donc $O$ n'est pas solution",
              "$0$, donc $O$ est sur la frontière",
              "$4$, donc $O$ est solution",
              "$2$, donc $O$ est solution"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le terme constant $+2$ reste : $0-0+2=2>0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La droite incluse ou non",
          "stepTheme": "La droite incluse ou non",
          "stepBadge": "La droite incluse ou non",
          "paragraphText": "Inégalité large ($\\leq$, $\\geq$) : la droite fait partie des solutions. Inégalité stricte ($<$, $>$) : on l'exclut (tracé en pointillés).",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q6",
            "type": "mcq",
            "prompt": "Pour $25x+30y\\leq300$, la droite $25x+30y=300$ fait-elle partie des solutions ?",
            "options": [
              "Non, jamais",
              "Oui, car l'inégalité est large",
              "Seulement le point $(12\\,;0)$",
              "Non, car $300$ est positif"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec $\\leq$, les points de la droite vérifient l'égalité, donc l'inéquation."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Quand $O$ est sur la droite",
          "stepTheme": "Quand $O$ est sur la droite",
          "stepBadge": "Quand $O$ est sur la droite",
          "paragraphText": "Si la droite passe par $O$ (par exemple $y-x=0$), on choisit un autre point test, comme $(1\\,;0)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q7",
            "type": "mcq",
            "prompt": "Pour $y<x$, pourquoi ne pas tester le point $O$ ?",
            "options": [
              "Parce que $O$ est sur la droite $y=x$",
              "Parce que $O$ est toujours solution",
              "Parce que $O$ n'est jamais solution",
              "Parce que l'inégalité est stricte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$O$ est sur la frontière : il ne dit pas de quel côté sont les solutions."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q1",
          "type": "mcq",
          "prompt": "Quelle est la frontière du demi-plan solution de $x+y<3$ ?",
          "options": [
            "La droite $x=3$",
            "La droite $x+y=3$",
            "L'axe des abscisses",
            "La droite $y=3x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On remplace le signe d'inégalité par $=$ : $x+y=3$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q2",
          "type": "mcq",
          "prompt": "Par quels points passe la droite $25x+30y=300$ ?",
          "options": [
            "$(25\\,;0)$ et $(0\\,;30)$",
            "$(300\\,;0)$ et $(0\\,;300)$",
            "$(10\\,;0)$ et $(0\\,;12)$",
            "$(12\\,;0)$ et $(0\\,;10)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$y=0$ donne $x=\\dfrac{300}{25}=12$ ; $x=0$ donne $y=\\dfrac{300}{30}=10$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q3",
          "type": "mcq",
          "prompt": "Pour $x+y<3$, le point $O$ donne $0<3$ (vrai). Quel demi-plan garde-t-on ?",
          "options": [
            "Celui qui contient $O$",
            "Celui qui ne contient pas $O$",
            "Les deux",
            "Aucun"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$O$ vérifie l'inéquation : son demi-plan est la solution."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q4",
          "type": "mcq",
          "prompt": "Pour $x+y<-2$, le point $O$ est-il dans le demi-plan solution ?",
          "options": [
            "Oui, car $0<2$",
            "Oui, toujours",
            "Non, car $0<-2$ est faux",
            "Non, car $O$ est sur la droite"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$0+0=0$ et $0<-2$ est faux : on garde l'autre demi-plan."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q5",
          "type": "mcq",
          "prompt": "Pour $2x-y+2>0$, que donne le point $O(0\\,;0)$ ?",
          "options": [
            "$-2$, donc $O$ n'est pas solution",
            "$0$, donc $O$ est sur la frontière",
            "$4$, donc $O$ est solution",
            "$2$, donc $O$ est solution"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le terme constant $+2$ reste : $0-0+2=2>0$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q6",
          "type": "mcq",
          "prompt": "Pour $25x+30y\\leq300$, la droite $25x+30y=300$ fait-elle partie des solutions ?",
          "options": [
            "Non, jamais",
            "Oui, car l'inégalité est large",
            "Seulement le point $(12\\,;0)$",
            "Non, car $300$ est positif"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec $\\leq$, les points de la droite vérifient l'égalité, donc l'inéquation."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p02_q7",
          "type": "mcq",
          "prompt": "Pour $y<x$, pourquoi ne pas tester le point $O$ ?",
          "options": [
            "Parce que $O$ est sur la droite $y=x$",
            "Parce que $O$ est toujours solution",
            "Parce que $O$ n'est jamais solution",
            "Parce que l'inégalité est stricte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$O$ est sur la frontière : il ne dit pas de quel côté sont les solutions."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03",
      "order": 3,
      "title": "Système d'inéquations : couple solution",
      "summary": "Un couple est solution d'un système s'il vérifie TOUTES les inéquations.",
      "conceptExplanation": "Un système d'inéquations du premier degré dans $\\mathbb{R}\\times\\mathbb{R}$ est formé d'au moins deux inéquations du premier degré ayant les deux mêmes inconnues, par exemple :\n$$\\begin{cases}ax+by+c<0\\\\a'x+b'y+c'>0\\end{cases}$$\n\nUn couple $(x_0\\,;y_0)$ est solution du système si et seulement s'il est solution de CHACUNE des inéquations : $ax_0+by_0+c<0$ ET $a'x_0+b'y_0+c'>0$.\n\nExemple : $(S)\\begin{cases}x+y-2<0\\\\-x+2y-6<0\\end{cases}$ et le couple $(-1\\,;1)$ :\n- $-1+1-2=-2<0$ : vrai ;\n- $1+2-6=-3<0$ : vrai.\nDonc $(-1\\,;1)$ est solution de $(S)$.\n\nIl suffit qu'UNE inéquation soit fausse pour que le couple ne soit pas solution.",
      "keyRule": "Solution du système = solution de chaque inéquation à la fois.",
      "formulas": [],
      "workedExample": {
        "title": "Tester un couple dans un système",
        "statement": "Le couple $(4\\,;0)$ est-il solution de $\\begin{cases}x-y>3\\\\x+y<-2\\end{cases}$ ?",
        "methodSteps": [
          "$4-0=4>3$ : vrai.",
          "$4+0=4<-2$ : faux."
        ],
        "conclusion": "Non : la deuxième inéquation n'est pas vérifiée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Qu'est-ce qu'un système ?",
          "stepTheme": "Qu'est-ce qu'un système ?",
          "stepBadge": "Qu'est-ce qu'un système ?",
          "paragraphText": "Un système d'inéquations du premier degré dans $\\mathbb{R}\\times\\mathbb{R}$ contient au moins deux inéquations du premier degré, avec les deux mêmes inconnues $x$ et $y$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q1",
            "type": "mcq",
            "prompt": "Combien d'inéquations un système contient-il au minimum ?",
            "options": [
              "Une",
              "Trois",
              "Deux",
              "Quatre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un système regroupe au moins deux inéquations."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La règle du « et »",
          "stepTheme": "La règle du « et »",
          "stepBadge": "La règle du « et »",
          "paragraphText": "$(x_0\\,;y_0)$ est solution du système s'il vérifie la première inéquation ET la deuxième.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q2",
            "type": "mcq",
            "prompt": "Un couple vérifie la première inéquation d'un système mais pas la seconde. Est-il solution du système ?",
            "options": [
              "Oui",
              "Non",
              "Oui, si la première est stricte",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il doit vérifier TOUTES les inéquations."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Première vérification",
          "stepTheme": "Première vérification",
          "stepBadge": "Première vérification",
          "paragraphText": "Pour $(S)\\begin{cases}x+y-2<0\\\\-x+2y-6<0\\end{cases}$ et $(-1\\,;1)$ : la première donne $-1+1-2=-2<0$, vrai.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q3",
            "type": "mcq",
            "prompt": "Pour le couple $(-1\\,;1)$, que vaut $-x+2y-6$ ?",
            "options": [
              "$-3$",
              "$-5$",
              "$-9$",
              "$3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$-(-1)+2\\times1-6=1+2-6=-3$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Conclure",
          "stepTheme": "Conclure",
          "stepBadge": "Conclure",
          "paragraphText": "$-3<0$ est vrai aussi. Les deux inéquations sont vérifiées : $(-1\\,;1)$ est solution de $(S)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q4",
            "type": "mcq",
            "prompt": "Le couple $(0\\,;0)$ est-il solution de $(S)\\begin{cases}x+y-2<0\\\\-x+2y-6<0\\end{cases}$ ?",
            "options": [
              "Non, car $-2$ n'est pas positif",
              "Non, car $x=0$",
              "Oui, seulement pour la première",
              "Oui, car $-2<0$ et $-6<0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$0+0-2=-2<0$ et $0+0-6=-6<0$ : les deux sont vraies."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un couple refusé",
          "stepTheme": "Un couple refusé",
          "stepBadge": "Un couple refusé",
          "paragraphText": "Pour $\\begin{cases}x-y>3\\\\x+y<-2\\end{cases}$ et $(4\\,;0)$ : $4>3$ vrai, mais $4<-2$ faux. Le couple n'est pas solution.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q5",
            "type": "mcq",
            "prompt": "Le couple $(1\\,;-4)$ est-il solution de $\\begin{cases}x-y>3\\\\x+y<-2\\end{cases}$ ?",
            "options": [
              "Non, car $1-(-4)=-3$",
              "Oui, car $5>3$ et $-3<-2$",
              "Non, car $y$ est négatif",
              "Oui, car $1>0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$1-(-4)=5>3$ et $1+(-4)=-3<-2$ : les deux sont vraies."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Avec une seule inconnue",
          "stepTheme": "Avec une seule inconnue",
          "stepBadge": "Avec une seule inconnue",
          "paragraphText": "Seka a $x$ billes : « le double dépasse $8$ » et « augmenté de $3$, il n'atteint pas $10$ ». Donc $\\begin{cases}2x>8\\\\x+3<10\\end{cases}$, soit $4<x<7$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q6",
            "type": "mcq",
            "prompt": "Avec $4<x<7$ et « le nombre de billes n'est pas pair », combien Seka a-t-il de billes ?",
            "options": [
              "$6$",
              "$4$",
              "$5$",
              "$7$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les entiers entre $4$ et $7$ sont $5$ et $6$ ; le seul impair est $5$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Les bornes strictes",
          "stepTheme": "Les bornes strictes",
          "stepBadge": "Les bornes strictes",
          "paragraphText": "« Dépasse $8$ » se traduit par $>8$, « n'atteint pas $10$ » par $<10$ : les valeurs $8$ et $10$ elles-mêmes sont exclues.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q7",
            "type": "mcq",
            "prompt": "Comment traduire « le nombre de mes billes augmenté de $3$ n'atteint pas $10$ » ?",
            "options": [
              "$x+3\\leq10$",
              "$x+3>10$",
              "$3x<10$",
              "$x+3<10$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« N'atteint pas » : strictement inférieur, donc $x+3<10$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q1",
          "type": "mcq",
          "prompt": "Combien d'inéquations un système contient-il au minimum ?",
          "options": [
            "Une",
            "Trois",
            "Deux",
            "Quatre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un système regroupe au moins deux inéquations."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q2",
          "type": "mcq",
          "prompt": "Un couple vérifie la première inéquation d'un système mais pas la seconde. Est-il solution du système ?",
          "options": [
            "Oui",
            "Non",
            "Oui, si la première est stricte",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il doit vérifier TOUTES les inéquations."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q3",
          "type": "mcq",
          "prompt": "Pour le couple $(-1\\,;1)$, que vaut $-x+2y-6$ ?",
          "options": [
            "$-3$",
            "$-5$",
            "$-9$",
            "$3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$-(-1)+2\\times1-6=1+2-6=-3$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q4",
          "type": "mcq",
          "prompt": "Le couple $(0\\,;0)$ est-il solution de $(S)\\begin{cases}x+y-2<0\\\\-x+2y-6<0\\end{cases}$ ?",
          "options": [
            "Non, car $-2$ n'est pas positif",
            "Non, car $x=0$",
            "Oui, seulement pour la première",
            "Oui, car $-2<0$ et $-6<0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$0+0-2=-2<0$ et $0+0-6=-6<0$ : les deux sont vraies."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q5",
          "type": "mcq",
          "prompt": "Le couple $(1\\,;-4)$ est-il solution de $\\begin{cases}x-y>3\\\\x+y<-2\\end{cases}$ ?",
          "options": [
            "Non, car $1-(-4)=-3$",
            "Oui, car $5>3$ et $-3<-2$",
            "Non, car $y$ est négatif",
            "Oui, car $1>0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$1-(-4)=5>3$ et $1+(-4)=-3<-2$ : les deux sont vraies."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q6",
          "type": "mcq",
          "prompt": "Avec $4<x<7$ et « le nombre de billes n'est pas pair », combien Seka a-t-il de billes ?",
          "options": [
            "$6$",
            "$4$",
            "$5$",
            "$7$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les entiers entre $4$ et $7$ sont $5$ et $6$ ; le seul impair est $5$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p03_q7",
          "type": "mcq",
          "prompt": "Comment traduire « le nombre de mes billes augmenté de $3$ n'atteint pas $10$ » ?",
          "options": [
            "$x+3\\leq10$",
            "$x+3>10$",
            "$3x<10$",
            "$x+3<10$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« N'atteint pas » : strictement inférieur, donc $x+3<10$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04",
      "order": 4,
      "title": "Résoudre graphiquement un système",
      "summary": "Les solutions sont l'intersection des demi-plans.",
      "conceptExplanation": "L'ensemble des solutions d'un système $\\begin{cases}ax+by+c<0\\\\a'x+b'y+c'>0\\end{cases}$ est représenté par l'INTERSECTION des deux demi-plans limités par les droites $(D)$ : $ax+by+c=0$ et $(D')$ : $a'x+b'y+c'=0$.\n\nMéthode :\n1. tracer $(D)$ et $(D')$ ;\n2. pour chaque inéquation, trouver le bon demi-plan avec un point test ;\n3. hachurer (ou colorier) ces demi-plans : la zone commune est la solution.\n\nAstuce : on peut hachurer la partie qui NE convient PAS ; la solution est alors la zone restée blanche.\n\nExemple : $(S)\\begin{cases}x+y-2<0\\\\-x+2y-6<0\\end{cases}$. Le point $(-1\\,;1)$ vérifie les deux inéquations : la solution est la zone commune aux deux demi-plans qui contiennent ce point, les droites étant exclues.",
      "keyRule": "Solution d'un système = partie commune (intersection) des demi-plans solutions.",
      "formulas": [],
      "workedExample": {
        "title": "Résoudre $\\begin{cases}x+y<-2\\\\x-y>3\\end{cases}$",
        "statement": "Détermine graphiquement les solutions.",
        "methodSteps": [
          "$(D_1)$ : $x+y=-2$ ; point test $O$ : $0<-2$ faux, on garde le demi-plan sans $O$.",
          "$(D_2)$ : $x-y=3$ ; point test $O$ : $0>3$ faux, on garde le demi-plan sans $O$.",
          "On garde la zone commune, droites exclues."
        ],
        "conclusion": "Les solutions forment la région située sous les deux droites, du côté opposé à $O$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'intersection",
          "stepTheme": "L'intersection",
          "stepBadge": "L'intersection",
          "paragraphText": "Les solutions d'un système sont la partie commune (l'intersection) des demi-plans solutions de chaque inéquation.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q1",
            "type": "mcq",
            "prompt": "Comment représente-t-on graphiquement les solutions d'un système de deux inéquations ?",
            "options": [
              "Par l'intersection des deux demi-plans solutions",
              "Par la réunion des deux demi-plans",
              "Par le point d'intersection des deux droites",
              "Par la droite $(D)$ seule"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un couple doit vérifier les deux inéquations : il est dans les deux demi-plans à la fois."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Deux frontières",
          "stepTheme": "Deux frontières",
          "stepBadge": "Deux frontières",
          "paragraphText": "On trace une droite par inéquation. Pour $\\begin{cases}x+y-2<0\\\\-x+2y-6<0\\end{cases}$ : $(D_1)$ : $x+y-2=0$ et $(D_2)$ : $-x+2y-6=0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q2",
            "type": "mcq",
            "prompt": "La droite $(D_2)$ : $-x+2y-6=0$ passe par :",
            "options": [
              "$(0\\,;-3)$ et $(6\\,;0)$",
              "$(0\\,;6)$ et $(-3\\,;0)$",
              "$(0\\,;3)$ et $(-6\\,;0)$",
              "$(2\\,;0)$ et $(0\\,;2)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$x=0$ : $2y=6$, $y=3$. $y=0$ : $-x=6$, $x=-6$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Un point test pour chaque",
          "stepTheme": "Un point test pour chaque",
          "stepBadge": "Un point test pour chaque",
          "paragraphText": "On teste $O$ dans chaque inéquation : $0+0-2<0$ vrai et $0+0-6<0$ vrai. $O$ est dans les deux demi-plans, donc dans la solution.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q3",
            "type": "mcq",
            "prompt": "Pour $\\begin{cases}x+y<-2\\\\x-y>3\\end{cases}$, $O$ vérifie-t-il au moins une inéquation ?",
            "options": [
              "Oui, les deux",
              "Oui, la première seulement",
              "Oui, la deuxième seulement",
              "Non, aucune"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$0<-2$ est faux et $0>3$ est faux : on garde, pour chacune, le demi-plan sans $O$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Hachurer ce qui ne va pas",
          "stepTheme": "Hachurer ce qui ne va pas",
          "stepBadge": "Hachurer ce qui ne va pas",
          "paragraphText": "Une astuce claire : hachurer pour chaque inéquation la partie qui NE convient PAS. La solution est la zone qui reste sans hachures.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q4",
            "type": "mcq",
            "prompt": "Si l'on hachure les parties qui ne conviennent pas, où lit-on la solution ?",
            "options": [
              "Dans la zone hachurée deux fois",
              "Dans la zone non hachurée",
              "Sur les droites seulement",
              "Dans toute la feuille"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La zone blanche n'a été rejetée par aucune inéquation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Lire un point de la zone",
          "stepTheme": "Lire un point de la zone",
          "stepBadge": "Lire un point de la zone",
          "paragraphText": "Tout point de la zone solution donne un couple solution. Pour vérifier une lecture, on remplace ses coordonnées dans chaque inéquation.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q5",
            "type": "mcq",
            "prompt": "Le point $(1\\,;3)$ est-il dans la zone solution de $\\begin{cases}x+y-2<0\\\\-x+2y-6<0\\end{cases}$ ?",
            "options": [
              "Non, car $1+3-2=2$ n'est pas $<0$",
              "Oui, car $-1+6-6=-1<0$",
              "Oui, car $3>0$",
              "Non, car $x=1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La première inéquation échoue : $2<0$ est faux."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Inégalité large dans un système",
          "stepTheme": "Inégalité large dans un système",
          "stepBadge": "Inégalité large dans un système",
          "paragraphText": "Pour $\\begin{cases}2x-y-3\\geq0\\\\-x+3y-1<0\\end{cases}$ : la droite $2x-y-3=0$ fait partie de la solution ($\\geq$), la droite $-x+3y-1=0$ non ($<$).",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q6",
            "type": "mcq",
            "prompt": "Pour $2x-y-3\\geq0$, que donne le point test $(1\\,;1)$ ?",
            "options": [
              "$0$, donc il est sur la droite",
              "$2$, donc il est solution",
              "$-2$, donc il n'est pas solution",
              "$4$, donc il est solution"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$2-1-3=-2$ et $-2\\geq0$ est faux."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Ne pas prendre la réunion",
          "stepTheme": "Ne pas prendre la réunion",
          "stepBadge": "Ne pas prendre la réunion",
          "paragraphText": "Erreur fréquente : colorier tout ce qui vérifie l'une OU l'autre inéquation. Pour un système, on ne garde que ce qui vérifie l'une ET l'autre.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q7",
            "type": "mcq",
            "prompt": "Un point est dans le demi-plan de la première inéquation mais hors de celui de la seconde. Est-il dans la solution du système ?",
            "options": [
              "Oui",
              "Oui, s'il est proche de la droite",
              "Seulement si l'inégalité est large",
              "Non"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Il doit être dans les DEUX demi-plans."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q1",
          "type": "mcq",
          "prompt": "Comment représente-t-on graphiquement les solutions d'un système de deux inéquations ?",
          "options": [
            "Par l'intersection des deux demi-plans solutions",
            "Par la réunion des deux demi-plans",
            "Par le point d'intersection des deux droites",
            "Par la droite $(D)$ seule"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un couple doit vérifier les deux inéquations : il est dans les deux demi-plans à la fois."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q2",
          "type": "mcq",
          "prompt": "La droite $(D_2)$ : $-x+2y-6=0$ passe par :",
          "options": [
            "$(0\\,;-3)$ et $(6\\,;0)$",
            "$(0\\,;6)$ et $(-3\\,;0)$",
            "$(0\\,;3)$ et $(-6\\,;0)$",
            "$(2\\,;0)$ et $(0\\,;2)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$x=0$ : $2y=6$, $y=3$. $y=0$ : $-x=6$, $x=-6$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q3",
          "type": "mcq",
          "prompt": "Pour $\\begin{cases}x+y<-2\\\\x-y>3\\end{cases}$, $O$ vérifie-t-il au moins une inéquation ?",
          "options": [
            "Oui, les deux",
            "Oui, la première seulement",
            "Oui, la deuxième seulement",
            "Non, aucune"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$0<-2$ est faux et $0>3$ est faux : on garde, pour chacune, le demi-plan sans $O$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q4",
          "type": "mcq",
          "prompt": "Si l'on hachure les parties qui ne conviennent pas, où lit-on la solution ?",
          "options": [
            "Dans la zone hachurée deux fois",
            "Dans la zone non hachurée",
            "Sur les droites seulement",
            "Dans toute la feuille"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La zone blanche n'a été rejetée par aucune inéquation."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q5",
          "type": "mcq",
          "prompt": "Le point $(1\\,;3)$ est-il dans la zone solution de $\\begin{cases}x+y-2<0\\\\-x+2y-6<0\\end{cases}$ ?",
          "options": [
            "Non, car $1+3-2=2$ n'est pas $<0$",
            "Oui, car $-1+6-6=-1<0$",
            "Oui, car $3>0$",
            "Non, car $x=1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La première inéquation échoue : $2<0$ est faux."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q6",
          "type": "mcq",
          "prompt": "Pour $2x-y-3\\geq0$, que donne le point test $(1\\,;1)$ ?",
          "options": [
            "$0$, donc il est sur la droite",
            "$2$, donc il est solution",
            "$-2$, donc il n'est pas solution",
            "$4$, donc il est solution"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$2-1-3=-2$ et $-2\\geq0$ est faux."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p04_q7",
          "type": "mcq",
          "prompt": "Un point est dans le demi-plan de la première inéquation mais hors de celui de la seconde. Est-il dans la solution du système ?",
          "options": [
            "Oui",
            "Oui, s'il est proche de la droite",
            "Seulement si l'inégalité est large",
            "Non"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Il doit être dans les DEUX demi-plans."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05",
      "order": 5,
      "title": "Traduire un problème en système",
      "summary": "Choisir les inconnues et écrire chaque contrainte.",
      "conceptExplanation": "Pour résoudre un problème concret :\n1. choisir les inconnues (par exemple $x$ = nombre de chemises, $y$ = nombre de pantalons) ;\n2. traduire chaque contrainte par une inéquation ;\n3. simplifier si possible (diviser par un même nombre positif).\n\nVocabulaire :\n- « au maximum », « au plus », « ne dépasse pas » : $\\leq$ ;\n- « au moins », « au minimum » : $\\geq$ ;\n- « moins de », « inférieur à » : $<$ ; « plus de », « supérieur à » : $>$.\n\nExemple : Karim achète $x$ litres de jus d'orange à $600$ F et $y$ litres de jus d'ananas à $400$ F. Elle veut au moins $10$ litres et dispose de $6000$ F :\n$$\\begin{cases}600x+400y\\leq6000\\\\x+y\\geq10\\end{cases}\\iff\\begin{cases}3x+2y\\leq30\\\\x+y\\geq10\\end{cases}$$\n(on a divisé la première par $200$).",
      "keyRule": "« Au plus » : $\\leq$ ; « au moins » : $\\geq$. On divise par un nombre positif sans changer le sens.",
      "formulas": [],
      "workedExample": {
        "title": "Les ordinateurs de l'entreprise",
        "statement": "Budget maximal $2\\,500\\,000$ F ; $x$ ordinateurs de bureau à $70\\,000$ F, $y$ portables à $120\\,000$ F ; au moins $20$ ordinateurs dont au moins $5$ portables.",
        "methodSteps": [
          "Budget : $70\\,000x+120\\,000y\\leq2\\,500\\,000$, soit $7x+12y\\leq250$ (division par $10\\,000$).",
          "Nombre : $x+y\\geq20$.",
          "Portables : $y\\geq5$."
        ],
        "conclusion": "$\\begin{cases}7x+12y\\leq250\\\\x+y\\geq20\\\\y\\geq5\\end{cases}$"
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Choisir les inconnues",
          "stepTheme": "Choisir les inconnues",
          "stepBadge": "Choisir les inconnues",
          "paragraphText": "On commence toujours par dire ce que représentent $x$ et $y$, avec leur unité : « $x$ = nombre de litres de jus d'orange ».",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q1",
            "type": "mcq",
            "prompt": "Maud achète des livres et des bandes dessinées. Quel bon choix d'inconnues ?",
            "options": [
              "$x$ = prix total, $y$ = nombre d'achats",
              "$x$ = nombre de livres, $y$ = nombre de bandes dessinées",
              "$x$ = $25$, $y$ = $30$",
              "$x$ = $300$ F"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les inconnues sont les quantités que l'on cherche."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les mots-clés",
          "stepTheme": "Les mots-clés",
          "stepBadge": "Les mots-clés",
          "paragraphText": "« Au maximum », « au plus » se traduisent par $\\leq$ ; « au moins » par $\\geq$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q2",
            "type": "mcq",
            "prompt": "Comment traduire « une dépense maximale de $300$ F » pour la dépense $D$ ?",
            "options": [
              "$D\\geq300$",
              "$D>300$",
              "$D=300$",
              "$D\\leq300$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Maximale : on ne dépasse pas $300$, donc $D\\leq300$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une contrainte de prix",
          "stepTheme": "Une contrainte de prix",
          "stepBadge": "Une contrainte de prix",
          "paragraphText": "$x$ livres à $25$ F et $y$ bandes dessinées à $30$ F coûtent $25x+30y$ F. Avec $300$ F au maximum : $25x+30y\\leq300$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q3",
            "type": "mcq",
            "prompt": "$x$ litres d'orange à $600$ F et $y$ litres d'ananas à $400$ F, avec $6000$ F au plus. Quelle inéquation ?",
            "options": [
              "$600x+400y\\leq6000$",
              "$600x+400y\\geq6000$",
              "$x+y\\leq6000$",
              "$400x+600y\\leq6000$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le prix de chaque jus multiplie sa quantité ; le total ne dépasse pas $6000$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une contrainte de quantité",
          "stepTheme": "Une contrainte de quantité",
          "stepBadge": "Une contrainte de quantité",
          "paragraphText": "« Au moins $10$ litres de cocktail » : la quantité totale $x+y$ vérifie $x+y\\geq10$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q4",
            "type": "mcq",
            "prompt": "L'entreprise veut « au moins $20$ ordinateurs ». Quelle inéquation ?",
            "options": [
              "$x+y\\leq20$",
              "$x+y<20$",
              "$x+y\\geq20$",
              "$20x+20y\\geq0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Au moins : $\\geq$. Le nombre total est $x+y$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Simplifier",
          "stepTheme": "Simplifier",
          "stepBadge": "Simplifier",
          "paragraphText": "On peut diviser les deux membres par un même nombre POSITIF sans changer le sens : $600x+400y\\leq6000$ devient $3x+2y\\leq30$ (division par $200$).",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q5",
            "type": "mcq",
            "prompt": "Que devient $70\\,000x+120\\,000y\\leq2\\,500\\,000$ après division par $10\\,000$ ?",
            "options": [
              "$7x+12y\\leq2500$",
              "$7x+12y\\geq250$",
              "$70x+120y\\leq250$",
              "$7x+12y\\leq250$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$70\\,000\\div10\\,000=7$, $120\\,000\\div10\\,000=12$, $2\\,500\\,000\\div10\\,000=250$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le système complet",
          "stepTheme": "Le système complet",
          "stepBadge": "Le système complet",
          "paragraphText": "Cocktail de Karim : $\\begin{cases}3x+2y\\leq30\\\\x+y\\geq10\\end{cases}$. Le couple $(2\\,;10)$ convient : $6+20=26\\leq30$ et $12\\geq10$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q6",
            "type": "mcq",
            "prompt": "Le couple $(4\\,;10)$ est-il une possibilité d'achat pour Karim ?",
            "options": [
              "Oui, car $4+10=14\\geq10$",
              "Non, car $3\\times4+2\\times10=32>30$",
              "Oui, car $32\\leq30$",
              "Non, car $4<10$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La contrainte de budget n'est pas respectée : $32>30$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "« Plus de » est strict",
          "stepTheme": "« Plus de » est strict",
          "stepBadge": "« Plus de » est strict",
          "paragraphText": "« Coudre plus de chemises que de pantalons » se traduit par $x>y$ (strict) : autant de chemises que de pantalons ne convient pas.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q7",
            "type": "mcq",
            "prompt": "$x$ chemises, $y$ pantalons : « plus de chemises que de pantalons ». Quelle inéquation ?",
            "options": [
              "$y>x$",
              "$x\\geq y$",
              "$x>y$",
              "$x+y>0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Plus de chemises : $x>y$, soit aussi $y<x$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q1",
          "type": "mcq",
          "prompt": "Maud achète des livres et des bandes dessinées. Quel bon choix d'inconnues ?",
          "options": [
            "$x$ = prix total, $y$ = nombre d'achats",
            "$x$ = nombre de livres, $y$ = nombre de bandes dessinées",
            "$x$ = $25$, $y$ = $30$",
            "$x$ = $300$ F"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les inconnues sont les quantités que l'on cherche."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q2",
          "type": "mcq",
          "prompt": "Comment traduire « une dépense maximale de $300$ F » pour la dépense $D$ ?",
          "options": [
            "$D\\geq300$",
            "$D>300$",
            "$D=300$",
            "$D\\leq300$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Maximale : on ne dépasse pas $300$, donc $D\\leq300$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q3",
          "type": "mcq",
          "prompt": "$x$ litres d'orange à $600$ F et $y$ litres d'ananas à $400$ F, avec $6000$ F au plus. Quelle inéquation ?",
          "options": [
            "$600x+400y\\leq6000$",
            "$600x+400y\\geq6000$",
            "$x+y\\leq6000$",
            "$400x+600y\\leq6000$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le prix de chaque jus multiplie sa quantité ; le total ne dépasse pas $6000$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q4",
          "type": "mcq",
          "prompt": "L'entreprise veut « au moins $20$ ordinateurs ». Quelle inéquation ?",
          "options": [
            "$x+y\\leq20$",
            "$x+y<20$",
            "$x+y\\geq20$",
            "$20x+20y\\geq0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Au moins : $\\geq$. Le nombre total est $x+y$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q5",
          "type": "mcq",
          "prompt": "Que devient $70\\,000x+120\\,000y\\leq2\\,500\\,000$ après division par $10\\,000$ ?",
          "options": [
            "$7x+12y\\leq2500$",
            "$7x+12y\\geq250$",
            "$70x+120y\\leq250$",
            "$7x+12y\\leq250$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$70\\,000\\div10\\,000=7$, $120\\,000\\div10\\,000=12$, $2\\,500\\,000\\div10\\,000=250$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q6",
          "type": "mcq",
          "prompt": "Le couple $(4\\,;10)$ est-il une possibilité d'achat pour Karim ?",
          "options": [
            "Oui, car $4+10=14\\geq10$",
            "Non, car $3\\times4+2\\times10=32>30$",
            "Oui, car $32\\leq30$",
            "Non, car $4<10$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La contrainte de budget n'est pas respectée : $32>30$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p05_q7",
          "type": "mcq",
          "prompt": "$x$ chemises, $y$ pantalons : « plus de chemises que de pantalons ». Quelle inéquation ?",
          "options": [
            "$y>x$",
            "$x\\geq y$",
            "$x>y$",
            "$x+y>0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Plus de chemises : $x>y$, soit aussi $y<x$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p06",
      "order": 6,
      "title": "Solutions entières et meilleur choix",
      "summary": "Garder les points à coordonnées entières, puis choisir le meilleur.",
      "conceptExplanation": "Dans les problèmes concrets, les inconnues sont souvent des nombres entiers naturels (des chemises, des billes, des ordinateurs) : on résout alors dans $\\mathbb{N}\\times\\mathbb{N}$.\n\nMéthode :\n1. représenter la zone solution du système ;\n2. relever les points de cette zone dont les deux coordonnées sont des entiers naturels ;\n3. si le problème le demande, choisir parmi eux le meilleur (le moins de déchets, le plus de bénéfice…).\n\nSituation : à Bondoukou, un père a $10$ m de tissu. Une chemise d'enfant demande $1$ m, un pantalon $1{,}2$ m. Il veut plus de chemises que de pantalons. Avec $x$ chemises et $y$ pantalons :\n$$\\begin{cases}x+1{,}2y\\leq10\\\\y<x\\end{cases}$$\nLes couples entiers solutions (avec au moins un pantalon) sont : $(2\\,;1)$, $(3\\,;1)$, …, $(8\\,;1)$, $(3\\,;2)$, …, $(7\\,;2)$, $(4\\,;3)$, $(5\\,;3)$, $(6\\,;3)$, $(5\\,;4)$.\n\nMoins de déchets = utiliser le plus de tissu. Pour $(5\\,;4)$ : $5+1{,}2\\times4=9{,}8$ m, la valeur la plus proche de $10$.\nConclusion : il faut commander 5 chemises et 4 pantalons.",
      "keyRule": "Problème concret : points à coordonnées ENTIÈRES de la zone, puis le meilleur selon le critère demandé.",
      "formulas": [],
      "workedExample": {
        "title": "Le tissu du père",
        "statement": "Parmi $(6\\,;3)$, $(7\\,;2)$ et $(5\\,;4)$, lequel laisse le moins de déchets de tissu ?",
        "methodSteps": [
          "$(6\\,;3)$ : $6+3{,}6=9{,}6$ m.",
          "$(7\\,;2)$ : $7+2{,}4=9{,}4$ m.",
          "$(5\\,;4)$ : $5+4{,}8=9{,}8$ m."
        ],
        "conclusion": "$(5\\,;4)$ : 5 chemises et 4 pantalons, avec seulement $0{,}2$ m de chute."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Des nombres entiers",
          "stepTheme": "Des nombres entiers",
          "stepBadge": "Des nombres entiers",
          "paragraphText": "On ne coud pas $2{,}5$ chemises : quand les inconnues comptent des objets, on ne garde que les couples d'entiers naturels, dans $\\mathbb{N}\\times\\mathbb{N}$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p06_q1",
            "type": "mcq",
            "prompt": "Dans le problème des chemises, lequel de ces couples peut être une réponse ?",
            "options": [
              "$(5\\,;4)$",
              "$(4{,}5\\,;3)$",
              "$(-1\\,;2)$",
              "$(6\\,;0{,}5)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seul $(5\\,;4)$ est formé d'entiers naturels."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le système du tissu",
          "stepTheme": "Le système du tissu",
          "stepBadge": "Le système du tissu",
          "paragraphText": "$10$ m de tissu, $1$ m par chemise, $1{,}2$ m par pantalon, plus de chemises que de pantalons : $\\begin{cases}x+1{,}2y\\leq10\\\\y<x\\end{cases}$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p06_q2",
            "type": "mcq",
            "prompt": "Quelle quantité de tissu utilisent $x$ chemises et $y$ pantalons ?",
            "options": [
              "$1{,}2x+y$",
              "$x+y$",
              "$10-x-y$",
              "$x+1{,}2y$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$1$ m par chemise et $1{,}2$ m par pantalon : $x+1{,}2y$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Vérifier un couple",
          "stepTheme": "Vérifier un couple",
          "stepBadge": "Vérifier un couple",
          "paragraphText": "Pour $(8\\,;1)$ : $8+1{,}2=9{,}2\\leq10$ et $1<8$. Ce couple convient.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p06_q3",
            "type": "mcq",
            "prompt": "Le couple $(5\\,;5)$ convient-il ?",
            "options": [
              "Oui, car $5+6=11$",
              "Oui, car $x=y$",
              "Non, car il faut $y<x$",
              "Non, car $5$ est impair"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il faut strictement plus de chemises ; de plus $5+6=11>10$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le critère du choix",
          "stepTheme": "Le critère du choix",
          "stepBadge": "Le critère du choix",
          "paragraphText": "Moins de déchets signifie utiliser le plus de tissu possible : on cherche le couple pour lequel $x+1{,}2y$ est le plus proche de $10$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p06_q4",
            "type": "mcq",
            "prompt": "Combien de tissu utilise le couple $(6\\,;3)$ ?",
            "options": [
              "$9$ m",
              "$9{,}6$ m",
              "$10{,}2$ m",
              "$7{,}2$ m"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$6+1{,}2\\times3=6+3{,}6=9{,}6$ m."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le meilleur couple",
          "stepTheme": "Le meilleur couple",
          "stepBadge": "Le meilleur couple",
          "paragraphText": "$(5\\,;4)$ utilise $5+4{,}8=9{,}8$ m : c'est le maximum possible. Le père commande 5 chemises et 4 pantalons.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p06_q5",
            "type": "mcq",
            "prompt": "Que représente le couple $(5\\,;4)$ ?",
            "options": [
              "5 pantalons et 4 chemises",
              "5 mètres et 4 mètres de tissu",
              "5 enfants et 4 parents",
              "5 chemises et 4 pantalons"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$x$ compte les chemises, $y$ les pantalons : $x=5$, $y=4$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Plusieurs possibilités",
          "stepTheme": "Plusieurs possibilités",
          "stepBadge": "Plusieurs possibilités",
          "paragraphText": "Pour le cocktail de Karim $\\begin{cases}3x+2y\\leq30\\\\x+y\\geq10\\end{cases}$, plusieurs couples entiers conviennent : $(1\\,;10)$, $(2\\,;9)$, $(2\\,;12)$…",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p06_q6",
            "type": "mcq",
            "prompt": "Les achats $(x;y)$ de Karim pour son cocktail doivent vérifier $\\begin{cases}3x+2y\\leq30\\\\x+y\\geq10\\end{cases}$. Lequel de ces couples est une possibilité d'achat ?",
            "options": [
              "$(1\\,;11)$",
              "$(2\\,;7)$",
              "$(8\\,;4)$",
              "$(0\\,;16)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$(1\\,;11)$ : $3+22=25\\leq30$ et $12\\geq10$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Toutes les contraintes",
          "stepTheme": "Toutes les contraintes",
          "stepBadge": "Toutes les contraintes",
          "paragraphText": "Ordinateurs : $\\begin{cases}7x+12y\\leq250\\\\x+y\\geq20\\\\y\\geq5\\end{cases}$. Un couple doit respecter les TROIS conditions, y compris $y\\geq5$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p06_q7",
            "type": "mcq",
            "prompt": "Le couple $(18\\,;3)$ (18 ordinateurs de bureau, 3 portables) convient-il ?",
            "options": [
              "Oui, car $18+3=21\\geq20$",
              "Oui, car $126+36=162\\leq250$",
              "Non, car il faut au moins 5 portables",
              "Non, car $18>3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Budget et nombre sont respectés, mais $y=3<5$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p06_q1",
          "type": "mcq",
          "prompt": "Dans le problème des chemises, lequel de ces couples peut être une réponse ?",
          "options": [
            "$(5\\,;4)$",
            "$(4{,}5\\,;3)$",
            "$(-1\\,;2)$",
            "$(6\\,;0{,}5)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seul $(5\\,;4)$ est formé d'entiers naturels."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p06_q2",
          "type": "mcq",
          "prompt": "Quelle quantité de tissu utilisent $x$ chemises et $y$ pantalons ?",
          "options": [
            "$1{,}2x+y$",
            "$x+y$",
            "$10-x-y$",
            "$x+1{,}2y$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$1$ m par chemise et $1{,}2$ m par pantalon : $x+1{,}2y$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p06_q3",
          "type": "mcq",
          "prompt": "Le couple $(5\\,;5)$ convient-il ?",
          "options": [
            "Oui, car $5+6=11$",
            "Oui, car $x=y$",
            "Non, car il faut $y<x$",
            "Non, car $5$ est impair"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il faut strictement plus de chemises ; de plus $5+6=11>10$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p06_q4",
          "type": "mcq",
          "prompt": "Combien de tissu utilise le couple $(6\\,;3)$ ?",
          "options": [
            "$9$ m",
            "$9{,}6$ m",
            "$10{,}2$ m",
            "$7{,}2$ m"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$6+1{,}2\\times3=6+3{,}6=9{,}6$ m."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p06_q5",
          "type": "mcq",
          "prompt": "Que représente le couple $(5\\,;4)$ ?",
          "options": [
            "5 pantalons et 4 chemises",
            "5 mètres et 4 mètres de tissu",
            "5 enfants et 4 parents",
            "5 chemises et 4 pantalons"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$x$ compte les chemises, $y$ les pantalons : $x=5$, $y=4$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p06_q6",
          "type": "mcq",
          "prompt": "Les achats $(x;y)$ de Karim pour son cocktail doivent vérifier $\\begin{cases}3x+2y\\leq30\\\\x+y\\geq10\\end{cases}$. Lequel de ces couples est une possibilité d'achat ?",
          "options": [
            "$(1\\,;11)$",
            "$(2\\,;7)$",
            "$(8\\,;4)$",
            "$(0\\,;16)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$(1\\,;11)$ : $3+22=25\\leq30$ et $12\\geq10$."
        },
        {
          "id": "premiere_a1_maths_numerique_l07_systemes_inequations_lineaires_p06_q7",
          "type": "mcq",
          "prompt": "Le couple $(18\\,;3)$ (18 ordinateurs de bureau, 3 portables) convient-il ?",
          "options": [
            "Oui, car $18+3=21\\geq20$",
            "Oui, car $126+36=162\\leq250$",
            "Non, car il faut au moins 5 portables",
            "Non, car $18>3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Budget et nombre sont respectés, mais $y=3<5$."
        }
      ]
    }
  ]
};
