import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1A-Maths leçon-04 DERIVABILITE ET ETUDE DE FONCTIONS.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_1RE_L04_DERIVABILITE_ETUDE_FONCTIONS: CurriculumChapter = {
  "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions",
  "subjectId": "maths",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 4,
  "title": "Leçon 4 : Dérivabilité et étude de fonctions",
  "summary": "Tangente et nombre dérivé, dérivées usuelles et opérations, équation de la tangente, sens de variation, tableau de variation, extremums et bénéfice maximal.",
  "officialVolumeHours": 10,
  "contentVersion": 2,
  "source": "1A-Maths leçon-04 DERIVABILITE ET ETUDE DE FONCTIONS.pdf",
  "points": [
    {
      "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01",
      "order": 1,
      "title": "Tangente et nombre dérivé",
      "summary": "La tangente en un point et son coefficient directeur $f'(a)$.",
      "conceptExplanation": "Soit $(C_f)$ la courbe d'une fonction $f$ et $A(a\\,;f(a))$ un point de cette courbe.\n\nQuand un point $M$ de la courbe se rapproche de $A$, la sécante $(AM)$ prend une position limite : c'est la tangente $(T)$ en $A$ à la courbe.\n\nRappel : le coefficient directeur de $(AM)$ est $\\dfrac{f(x)-f(a)}{x-a}$.\n\nDéfinition :\n- $f$ est dérivable en $a$ lorsque sa courbe admet au point d'abscisse $a$ une tangente NON parallèle à l'axe des ordonnées ;\n- le nombre dérivé de $f$ en $a$, noté $f'(a)$ (« $f$ prime de $a$ »), est le coefficient directeur de cette tangente.\n\nExemple : si la tangente en $A(1\\,;3)$ a pour coefficient directeur $2$, alors $f'(1)=2$.\n\nUne tangente verticale (parallèle à l'axe des ordonnées) signifie que $f$ n'est PAS dérivable en ce point.",
      "keyRule": "$f'(a)$ = coefficient directeur de la tangente au point d'abscisse $a$. Tangente verticale : pas dérivable.",
      "formulas": [],
      "workedExample": {
        "title": "Lire un nombre dérivé",
        "statement": "La tangente à $(C_f)$ au point $A(1\\,;3)$ passe aussi par $B(2\\,;5)$. Donne $f'(1)$.",
        "methodSteps": [
          "Le coefficient directeur de $(AB)$ est $\\dfrac{5-3}{2-1}=2$.",
          "$(AB)$ est la tangente en $A$, donc ce coefficient est $f'(1)$."
        ],
        "conclusion": "$f'(1)=2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "De la sécante à la tangente",
          "stepTheme": "De la sécante à la tangente",
          "stepBadge": "De la sécante à la tangente",
          "paragraphText": "Quand $M$ glisse sur la courbe vers $A$, la sécante $(AM)$ se rapproche d'une position limite : la tangente $(T)$ en $A$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q1",
            "type": "mcq",
            "prompt": "Comment obtient-on la tangente en $A$ à une courbe ?",
            "options": [
              "En traçant la droite qui passe par $A$ et l'origine $O$",
              "En traçant la droite verticale qui passe par $A$",
              "C'est la position limite de la sécante $(AM)$ quand $M$ se rapproche de $A$",
              "C'est la droite qui coupe la courbe en deux points éloignés de $A$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La tangente est la position limite des sécantes $(AM)$ lorsque $M$ tend vers $A$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le coefficient d'une sécante",
          "stepTheme": "Le coefficient d'une sécante",
          "stepBadge": "Le coefficient d'une sécante",
          "paragraphText": "Le coefficient directeur de la sécante $(AM)$, avec $A(a\\,;f(a))$ et $M(x\\,;f(x))$, est $\\dfrac{f(x)-f(a)}{x-a}$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q2",
            "type": "mcq",
            "prompt": "Avec $A(1\\,;2)$ et $M(3\\,;8)$, quel est le coefficient directeur de $(AM)$ ?",
            "options": [
              "$3$",
              "$\\dfrac{1}{3}$",
              "$6$",
              "$2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{8-2}{3-1}=\\dfrac{6}{2}=3$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le nombre dérivé",
          "stepTheme": "Le nombre dérivé",
          "stepBadge": "Le nombre dérivé",
          "paragraphText": "Le nombre dérivé de $f$ en $a$, noté $f'(a)$, est le coefficient directeur de la tangente à la courbe au point d'abscisse $a$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q3",
            "type": "mcq",
            "prompt": "Que représente $f'(a)$ ?",
            "options": [
              "L'ordonnée du point de la courbe d'abscisse $a$",
              "L'abscisse du point où la courbe coupe l'axe des abscisses",
              "La valeur maximale de $f$",
              "Le coefficient directeur de la tangente au point d'abscisse $a$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'ordonnée du point, c'est $f(a)$ ; le coefficient directeur de la tangente, c'est $f'(a)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Lire $f'(a)$ sur un dessin",
          "stepTheme": "Lire $f'(a)$ sur un dessin",
          "stepBadge": "Lire $f'(a)$ sur un dessin",
          "paragraphText": "La tangente en $A(1\\,;3)$ a pour coefficient directeur $2$ : quand on avance de $1$, elle monte de $2$. Donc $f'(1)=2$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q4",
            "type": "mcq",
            "prompt": "La tangente en $A(1\\,;3)$ a pour coefficient directeur $2$. Que vaut $f'(1)$ ?",
            "options": [
              "$3$",
              "$2$",
              "$1$",
              "$5$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$f'(1)$ est le coefficient directeur de la tangente, soit $2$. Le $3$ est $f(1)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Avec deux points de la tangente",
          "stepTheme": "Avec deux points de la tangente",
          "stepBadge": "Avec deux points de la tangente",
          "paragraphText": "Si la tangente en $A(1\\,;3)$ passe par $B(2\\,;5)$, alors $f'(1)=\\dfrac{5-3}{2-1}=2$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q5",
            "type": "mcq",
            "prompt": "La tangente en $A(2\\,;1)$ passe par $B(4\\,;-3)$. Que vaut $f'(2)$ ?",
            "options": [
              "$2$",
              "$-\\dfrac{1}{2}$",
              "$-2$",
              "$-1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{-3-1}{4-2}=\\dfrac{-4}{2}=-2$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La tangente verticale",
          "stepTheme": "La tangente verticale",
          "stepBadge": "La tangente verticale",
          "paragraphText": "Si la tangente au point d'abscisse $a$ est parallèle à l'axe des ordonnées, $f$ n'est pas dérivable en $a$ : une droite verticale n'a pas de coefficient directeur.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q6",
            "type": "mcq",
            "prompt": "Au point d'abscisse $-1$, la courbe a une tangente parallèle à l'axe des ordonnées. Que peut-on dire ?",
            "options": [
              "$f'(-1)=0$",
              "$f$ n'est pas dérivable en $-1$",
              "$f'(-1)=-1$",
              "$f$ est croissante en $-1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une tangente verticale n'a pas de coefficient directeur : $f'(-1)$ n'existe pas."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre $f(a)$ et $f'(a)$",
          "stepTheme": "Ne pas confondre $f(a)$ et $f'(a)$",
          "stepBadge": "Ne pas confondre $f(a)$ et $f'(a)$",
          "paragraphText": "$f(a)$ est une hauteur (l'ordonnée du point) ; $f'(a)$ est une pente (l'inclinaison de la tangente). Une tangente horizontale donne $f'(a)=0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q7",
            "type": "mcq",
            "prompt": "Au point $A(3\\,;4)$, la tangente est horizontale. Que vaut $f'(3)$ ?",
            "options": [
              "$4$",
              "$3$",
              "Elle n'existe pas",
              "$0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Une droite horizontale a un coefficient directeur nul : $f'(3)=0$, alors que $f(3)=4$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q1",
          "type": "mcq",
          "prompt": "Comment obtient-on la tangente en $A$ à une courbe ?",
          "options": [
            "En traçant la droite qui passe par $A$ et l'origine $O$",
            "En traçant la droite verticale qui passe par $A$",
            "C'est la position limite de la sécante $(AM)$ quand $M$ se rapproche de $A$",
            "C'est la droite qui coupe la courbe en deux points éloignés de $A$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La tangente est la position limite des sécantes $(AM)$ lorsque $M$ tend vers $A$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q2",
          "type": "mcq",
          "prompt": "Avec $A(1\\,;2)$ et $M(3\\,;8)$, quel est le coefficient directeur de $(AM)$ ?",
          "options": [
            "$3$",
            "$\\dfrac{1}{3}$",
            "$6$",
            "$2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{8-2}{3-1}=\\dfrac{6}{2}=3$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q3",
          "type": "mcq",
          "prompt": "Que représente $f'(a)$ ?",
          "options": [
            "L'ordonnée du point de la courbe d'abscisse $a$",
            "L'abscisse du point où la courbe coupe l'axe des abscisses",
            "La valeur maximale de $f$",
            "Le coefficient directeur de la tangente au point d'abscisse $a$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'ordonnée du point, c'est $f(a)$ ; le coefficient directeur de la tangente, c'est $f'(a)$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q4",
          "type": "mcq",
          "prompt": "La tangente en $A(1\\,;3)$ a pour coefficient directeur $2$. Que vaut $f'(1)$ ?",
          "options": [
            "$3$",
            "$2$",
            "$1$",
            "$5$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$f'(1)$ est le coefficient directeur de la tangente, soit $2$. Le $3$ est $f(1)$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q5",
          "type": "mcq",
          "prompt": "La tangente en $A(2\\,;1)$ passe par $B(4\\,;-3)$. Que vaut $f'(2)$ ?",
          "options": [
            "$2$",
            "$-\\dfrac{1}{2}$",
            "$-2$",
            "$-1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{-3-1}{4-2}=\\dfrac{-4}{2}=-2$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q6",
          "type": "mcq",
          "prompt": "Au point d'abscisse $-1$, la courbe a une tangente parallèle à l'axe des ordonnées. Que peut-on dire ?",
          "options": [
            "$f'(-1)=0$",
            "$f$ n'est pas dérivable en $-1$",
            "$f'(-1)=-1$",
            "$f$ est croissante en $-1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une tangente verticale n'a pas de coefficient directeur : $f'(-1)$ n'existe pas."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q7",
          "type": "mcq",
          "prompt": "Au point $A(3\\,;4)$, la tangente est horizontale. Que vaut $f'(3)$ ?",
          "options": [
            "$4$",
            "$3$",
            "Elle n'existe pas",
            "$0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Une droite horizontale a un coefficient directeur nul : $f'(3)=0$, alors que $f(3)=4$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02",
      "order": 2,
      "title": "Dérivées des fonctions de référence",
      "summary": "La fonction dérivée et le tableau des dérivées usuelles.",
      "conceptExplanation": "Si $f$ est dérivable en tout point d'un intervalle ouvert $I$, la fonction qui à $x$ associe $f'(x)$ est la fonction dérivée de $f$, notée $f'$.\n\nTableau des dérivées de référence :\n- $f(x)=k$ (constante) : $f'(x)=0$, sur $\\mathbb{R}$ ;\n- $f(x)=x$ : $f'(x)=1$, sur $\\mathbb{R}$ ;\n- $f(x)=ax+b$ : $f'(x)=a$, sur $\\mathbb{R}$ ;\n- $f(x)=x^2$ : $f'(x)=2x$, sur $\\mathbb{R}$ ;\n- $f(x)=x^3$ : $f'(x)=3x^2$, sur $\\mathbb{R}$ ;\n- $f(x)=\\dfrac{1}{x}$ : $f'(x)=-\\dfrac{1}{x^2}$, sur $]-\\infty\\,;0[$ ou $]0\\,;+\\infty[$.",
      "keyRule": "$(k)'=0$ ; $(ax+b)'=a$ ; $(x^2)'=2x$ ; $(x^3)'=3x^2$ ; $\\left(\\dfrac{1}{x}\\right)'=-\\dfrac{1}{x^2}$.",
      "formulas": [
        {
          "name": "Carré",
          "formula": "(x^2)'=2x"
        },
        {
          "name": "Cube",
          "formula": "(x^3)'=3x^2"
        },
        {
          "name": "Inverse",
          "formula": "\\left(\\dfrac{1}{x}\\right)'=-\\dfrac{1}{x^2}"
        }
      ],
      "workedExample": {
        "title": "Utiliser le tableau",
        "statement": "Donne la dérivée de $f(x)=-120x$ sur $\\mathbb{R}$.",
        "methodSteps": [
          "$f$ est de la forme $ax+b$ avec $a=-120$ et $b=0$.",
          "La dérivée de $ax+b$ est $a$."
        ],
        "conclusion": "$f'(x)=-120$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La fonction dérivée",
          "stepTheme": "La fonction dérivée",
          "stepBadge": "La fonction dérivée",
          "paragraphText": "Si $f$ est dérivable en chaque point d'un intervalle ouvert $I$, la fonction $x\\mapsto f'(x)$ s'appelle la fonction dérivée de $f$ ; on la note $f'$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q1",
            "type": "mcq",
            "prompt": "Comment s'appelle la fonction qui associe à chaque $x$ de $I$ le nombre $f'(x)$ ?",
            "options": [
              "La fonction réciproque de $f$",
              "La fonction dérivée de $f$",
              "La fonction inverse de $f$",
              "La tangente de $f$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la fonction dérivée, notée $f'$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Constante et fonction affine",
          "stepTheme": "Constante et fonction affine",
          "stepBadge": "Constante et fonction affine",
          "paragraphText": "La dérivée d'une constante est $0$. La dérivée de $ax+b$ est $a$ : seul le coefficient de $x$ reste.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q2",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $f(x)=5x-7$ ?",
            "options": [
              "$f'(x)=-7$",
              "$f'(x)=5x$",
              "$f'(x)=5$",
              "$f'(x)=0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$(ax+b)'=a$, donc $f'(x)=5$ ; la constante $-7$ disparaît."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une constante seule",
          "stepTheme": "Une constante seule",
          "stepBadge": "Une constante seule",
          "paragraphText": "$7\\sqrt{3}$ est un nombre fixe : la fonction $x\\mapsto 7\\sqrt{3}$ est constante, sa dérivée est $0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q3",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $f(x)=7\\sqrt{3}$ sur $\\mathbb{R}$ ?",
            "options": [
              "$f'(x)=0$",
              "$f'(x)=7$",
              "$f'(x)=\\sqrt{3}$",
              "$f'(x)=7\\sqrt{3}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il n'y a pas de $x$ : la fonction est constante, sa dérivée est nulle."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Carré et cube",
          "stepTheme": "Carré et cube",
          "stepBadge": "Carré et cube",
          "paragraphText": "$(x^2)'=2x$ et $(x^3)'=3x^2$ : l'exposant descend devant et diminue de $1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q4",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $x\\mapsto x^3$ ?",
            "options": [
              "$x\\mapsto 3x$",
              "$x\\mapsto x^2$",
              "$x\\mapsto 3x^3$",
              "$x\\mapsto 3x^2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'exposant $3$ descend devant, puis il devient $2$ : $3x^2$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La fonction inverse",
          "stepTheme": "La fonction inverse",
          "stepBadge": "La fonction inverse",
          "paragraphText": "Sur $]-\\infty\\,;0[$ ou sur $]0\\,;+\\infty[$, la dérivée de $x\\mapsto\\dfrac{1}{x}$ est $x\\mapsto-\\dfrac{1}{x^2}$ (attention au signe moins).",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q5",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $x\\mapsto\\dfrac{1}{x}$ sur $]0\\,;+\\infty[$ ?",
            "options": [
              "$x\\mapsto\\dfrac{1}{x^2}$",
              "$x\\mapsto-\\dfrac{1}{x^2}$",
              "$x\\mapsto-\\dfrac{1}{x}$",
              "$x\\mapsto x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\left(\\dfrac{1}{x}\\right)'=-\\dfrac{1}{x^2}$, avec le signe moins."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le piège du sens",
          "stepTheme": "Le piège du sens",
          "stepBadge": "Le piège du sens",
          "paragraphText": "« $\\dfrac{1}{x}$ est la dérivée de $-\\dfrac{1}{x^2}$ » est FAUX : c'est l'inverse, $-\\dfrac{1}{x^2}$ est la dérivée de $\\dfrac{1}{x}$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q6",
            "type": "mcq",
            "prompt": "« La dérivée de $x\\mapsto x^3$ est $x\\mapsto 3x$ sur $\\mathbb{R}$. » Cette affirmation est :",
            "options": [
              "Vraie",
              "Vraie seulement pour $x>0$",
              "Fausse : la dérivée est $x\\mapsto 3x^2$",
              "Fausse : la dérivée est $x\\mapsto x^2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$(x^3)'=3x^2$ : on garde $x^2$ après avoir descendu le $3$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Un calcul de nombre dérivé",
          "stepTheme": "Un calcul de nombre dérivé",
          "stepBadge": "Un calcul de nombre dérivé",
          "paragraphText": "Pour $f(x)=x^2$, $f'(x)=2x$, donc $f'(3)=2\\times3=6$ : la tangente au point d'abscisse $3$ a pour coefficient directeur $6$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q7",
            "type": "mcq",
            "prompt": "Pour $f(x)=x^3$, que vaut $f'(2)$ ?",
            "options": [
              "$12$",
              "$8$",
              "$6$",
              "$4$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$f'(x)=3x^2$, donc $f'(2)=3\\times4=12$. Le $8$ est $f(2)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q1",
          "type": "mcq",
          "prompt": "Comment s'appelle la fonction qui associe à chaque $x$ de $I$ le nombre $f'(x)$ ?",
          "options": [
            "La fonction réciproque de $f$",
            "La fonction dérivée de $f$",
            "La fonction inverse de $f$",
            "La tangente de $f$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la fonction dérivée, notée $f'$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q2",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $f(x)=5x-7$ ?",
          "options": [
            "$f'(x)=-7$",
            "$f'(x)=5x$",
            "$f'(x)=5$",
            "$f'(x)=0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$(ax+b)'=a$, donc $f'(x)=5$ ; la constante $-7$ disparaît."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q3",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $f(x)=7\\sqrt{3}$ sur $\\mathbb{R}$ ?",
          "options": [
            "$f'(x)=0$",
            "$f'(x)=7$",
            "$f'(x)=\\sqrt{3}$",
            "$f'(x)=7\\sqrt{3}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il n'y a pas de $x$ : la fonction est constante, sa dérivée est nulle."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q4",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $x\\mapsto x^3$ ?",
          "options": [
            "$x\\mapsto 3x$",
            "$x\\mapsto x^2$",
            "$x\\mapsto 3x^3$",
            "$x\\mapsto 3x^2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'exposant $3$ descend devant, puis il devient $2$ : $3x^2$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q5",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $x\\mapsto\\dfrac{1}{x}$ sur $]0\\,;+\\infty[$ ?",
          "options": [
            "$x\\mapsto\\dfrac{1}{x^2}$",
            "$x\\mapsto-\\dfrac{1}{x^2}$",
            "$x\\mapsto-\\dfrac{1}{x}$",
            "$x\\mapsto x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\left(\\dfrac{1}{x}\\right)'=-\\dfrac{1}{x^2}$, avec le signe moins."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q6",
          "type": "mcq",
          "prompt": "« La dérivée de $x\\mapsto x^3$ est $x\\mapsto 3x$ sur $\\mathbb{R}$. » Cette affirmation est :",
          "options": [
            "Vraie",
            "Vraie seulement pour $x>0$",
            "Fausse : la dérivée est $x\\mapsto 3x^2$",
            "Fausse : la dérivée est $x\\mapsto x^2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$(x^3)'=3x^2$ : on garde $x^2$ après avoir descendu le $3$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q7",
          "type": "mcq",
          "prompt": "Pour $f(x)=x^3$, que vaut $f'(2)$ ?",
          "options": [
            "$12$",
            "$8$",
            "$6$",
            "$4$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$f'(x)=3x^2$, donc $f'(2)=3\\times4=12$. Le $8$ est $f(2)$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03",
      "order": 3,
      "title": "Dérivées et opérations",
      "summary": "Dériver une somme, un produit, $ku$, un quotient et un inverse.",
      "conceptExplanation": "$u$ et $v$ sont deux fonctions dérivables sur un intervalle ouvert $I$.\n\n- Somme : $(u+v)'=u'+v'$ ;\n- Produit par un réel : $(ku)'=ku'$ ;\n- Produit : $(uv)'=u'v+uv'$ ;\n- Quotient : $\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^2}$, là où $v(x)\\neq0$ ;\n- Inverse : $\\left(\\dfrac{1}{v}\\right)'=-\\dfrac{v'}{v^2}$, là où $v(x)\\neq0$.\n\nExemples :\n- $Q(x)=x+x^3$ : $Q'(x)=1+3x^2$ ;\n- $J(x)=\\sqrt{2}\\,x$ : $J'(x)=\\sqrt{2}$ ;\n- $V(x)=\\dfrac{2}{x}$ : $V'(x)=-\\dfrac{2}{x^2}$ ;\n- $f(x)=3x^2+7x$ : $f'(x)=6x+7$.",
      "keyRule": "$(u+v)'=u'+v'$ ; $(ku)'=ku'$ ; $(uv)'=u'v+uv'$ ; $\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^2}$.",
      "formulas": [
        {
          "name": "Produit",
          "formula": "(uv)'=u'v+uv'"
        },
        {
          "name": "Quotient",
          "formula": "\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^2}"
        }
      ],
      "workedExample": {
        "title": "Dériver un polynôme",
        "statement": "Dérive $f(x)=3x^2+7x$ sur $\\mathbb{R}$.",
        "methodSteps": [
          "$f$ est la somme de $3x^2$ et de $7x$.",
          "$(3x^2)'=3\\times2x=6x$ et $(7x)'=7$."
        ],
        "conclusion": "$f'(x)=6x+7$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Une somme",
          "stepTheme": "Une somme",
          "stepBadge": "Une somme",
          "paragraphText": "La dérivée d'une somme est la somme des dérivées : $(u+v)'=u'+v'$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q1",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $Q(x)=x+x^3$ ?",
            "options": [
              "$Q'(x)=1+3x$",
              "$Q'(x)=3x^2$",
              "$Q'(x)=x+3x^2$",
              "$Q'(x)=1+3x^2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$(x)'=1$ et $(x^3)'=3x^2$, donc $Q'(x)=1+3x^2$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un nombre devant",
          "stepTheme": "Un nombre devant",
          "stepBadge": "Un nombre devant",
          "paragraphText": "Un nombre multiplié reste devant : $(ku)'=k\\,u'$. Ainsi $(3x^2)'=3\\times2x=6x$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q2",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $J(x)=\\sqrt{2}\\,x$ ?",
            "options": [
              "$J'(x)=\\sqrt{2}$",
              "$J'(x)=0$",
              "$J'(x)=2x$",
              "$J'(x)=\\sqrt{2}\\,x$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$(kx)'=k$ : ici $k=\\sqrt{2}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Un polynôme",
          "stepTheme": "Un polynôme",
          "stepBadge": "Un polynôme",
          "paragraphText": "On dérive terme par terme : $(3x^2+7x)'=6x+7$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q3",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $f(x)=-2x^2+60x-400$ ?",
            "options": [
              "$f'(x)=-2x+60$",
              "$f'(x)=-4x+60$",
              "$f'(x)=-4x+60-400$",
              "$f'(x)=4x+60$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$(-2x^2)'=-4x$, $(60x)'=60$ et la constante $-400$ a pour dérivée $0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Un produit",
          "stepTheme": "Un produit",
          "stepBadge": "Un produit",
          "paragraphText": "Pour un produit : $(uv)'=u'v+uv'$. La dérivée d'un produit n'est PAS le produit des dérivées.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q4",
            "type": "mcq",
            "prompt": "Avec $u(x)=x$ et $v(x)=x^2+1$, que vaut $(uv)'(x)$ ?",
            "options": [
              "$2x$",
              "$x^2+1$",
              "$3x^2+1$",
              "$2x^2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$u'v+uv'=1\\times(x^2+1)+x\\times2x=3x^2+1$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Un inverse",
          "stepTheme": "Un inverse",
          "stepBadge": "Un inverse",
          "paragraphText": "$\\left(\\dfrac{1}{v}\\right)'=-\\dfrac{v'}{v^2}$. Pour $V(x)=\\dfrac{2}{x}=2\\times\\dfrac{1}{x}$ : $V'(x)=2\\times\\left(-\\dfrac{1}{x^2}\\right)=-\\dfrac{2}{x^2}$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q5",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $f(x)=-\\dfrac{3}{x}$ sur $[1\\,;5]$ ?",
            "options": [
              "$f'(x)=\\dfrac{3}{x^2}$",
              "$f'(x)=-\\dfrac{3}{x^2}$",
              "$f'(x)=\\dfrac{3}{x}$",
              "$f'(x)=-3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$-3\\times\\left(-\\dfrac{1}{x^2}\\right)=\\dfrac{3}{x^2}$ : les deux signes moins donnent un plus."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Un quotient",
          "stepTheme": "Un quotient",
          "stepBadge": "Un quotient",
          "paragraphText": "$\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^2}$. Pour $\\dfrac{x}{x+1}$ : $\\dfrac{1\\times(x+1)-x\\times1}{(x+1)^2}=\\dfrac{1}{(x+1)^2}$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q6",
            "type": "mcq",
            "prompt": "Dans la formule du quotient, quel est le numérateur ?",
            "options": [
              "$u'v+uv'$",
              "$uv'-u'v$",
              "$u'v'$",
              "$u'v-uv'$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est $u'v-uv'$ : l'ordre compte à cause du signe moins."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Où la dérivée existe",
          "stepTheme": "Où la dérivée existe",
          "stepBadge": "Où la dérivée existe",
          "paragraphText": "Un quotient ou un inverse n'est dérivable que là où le dénominateur ne s'annule pas : $\\dfrac{1}{x-2}$ n'est pas dérivable en $2$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q7",
            "type": "mcq",
            "prompt": "En quelle valeur $x\\mapsto\\dfrac{1}{x+3}$ n'est-elle pas dérivable ?",
            "options": [
              "$3$",
              "$0$",
              "$-3$",
              "$1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le dénominateur $x+3$ s'annule pour $x=-3$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q1",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $Q(x)=x+x^3$ ?",
          "options": [
            "$Q'(x)=1+3x$",
            "$Q'(x)=3x^2$",
            "$Q'(x)=x+3x^2$",
            "$Q'(x)=1+3x^2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$(x)'=1$ et $(x^3)'=3x^2$, donc $Q'(x)=1+3x^2$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q2",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $J(x)=\\sqrt{2}\\,x$ ?",
          "options": [
            "$J'(x)=\\sqrt{2}$",
            "$J'(x)=0$",
            "$J'(x)=2x$",
            "$J'(x)=\\sqrt{2}\\,x$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$(kx)'=k$ : ici $k=\\sqrt{2}$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q3",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $f(x)=-2x^2+60x-400$ ?",
          "options": [
            "$f'(x)=-2x+60$",
            "$f'(x)=-4x+60$",
            "$f'(x)=-4x+60-400$",
            "$f'(x)=4x+60$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$(-2x^2)'=-4x$, $(60x)'=60$ et la constante $-400$ a pour dérivée $0$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q4",
          "type": "mcq",
          "prompt": "Avec $u(x)=x$ et $v(x)=x^2+1$, que vaut $(uv)'(x)$ ?",
          "options": [
            "$2x$",
            "$x^2+1$",
            "$3x^2+1$",
            "$2x^2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$u'v+uv'=1\\times(x^2+1)+x\\times2x=3x^2+1$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q5",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $f(x)=-\\dfrac{3}{x}$ sur $[1\\,;5]$ ?",
          "options": [
            "$f'(x)=\\dfrac{3}{x^2}$",
            "$f'(x)=-\\dfrac{3}{x^2}$",
            "$f'(x)=\\dfrac{3}{x}$",
            "$f'(x)=-3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$-3\\times\\left(-\\dfrac{1}{x^2}\\right)=\\dfrac{3}{x^2}$ : les deux signes moins donnent un plus."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q6",
          "type": "mcq",
          "prompt": "Dans la formule du quotient, quel est le numérateur ?",
          "options": [
            "$u'v+uv'$",
            "$uv'-u'v$",
            "$u'v'$",
            "$u'v-uv'$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est $u'v-uv'$ : l'ordre compte à cause du signe moins."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q7",
          "type": "mcq",
          "prompt": "En quelle valeur $x\\mapsto\\dfrac{1}{x+3}$ n'est-elle pas dérivable ?",
          "options": [
            "$3$",
            "$0$",
            "$-3$",
            "$1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le dénominateur $x+3$ s'annule pour $x=-3$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04",
      "order": 4,
      "title": "Équation de la tangente",
      "summary": "La formule $y=f'(a)(x-a)+f(a)$ et la tangente horizontale.",
      "conceptExplanation": "Si $f$ est dérivable en $a$, une équation de la tangente à $(C_f)$ au point d'abscisse $a$ est :\n$$y=f'(a)(x-a)+f(a).$$\n\nMéthode :\n1. calculer $f(a)$ ;\n2. calculer $f'(x)$ puis $f'(a)$ ;\n3. remplacer dans la formule et développer.\n\nExemple : $f(x)=-x^3+1$ en $a=1$. On a $f(1)=0$, $f'(x)=-3x^2$, $f'(1)=-3$. Donc $y=-3(x-1)+0$, soit $y=-3x+3$.\n\nCas particulier : si $f'(a)=0$, la tangente est horizontale (parallèle à l'axe des abscisses) ; son équation est $y=f(a)$.",
      "keyRule": "$y=f'(a)(x-a)+f(a)$. Si $f'(a)=0$ : tangente horizontale $y=f(a)$.",
      "formulas": [
        {
          "name": "Tangente au point d'abscisse a",
          "formula": "y=f'(a)(x-a)+f(a)"
        }
      ],
      "workedExample": {
        "title": "Tangente à $h(x)=x^3-3x+5$ en $0$",
        "statement": "Détermine une équation de la tangente au point d'abscisse $0$.",
        "methodSteps": [
          "$h(0)=5$.",
          "$h'(x)=3x^2-3$, donc $h'(0)=-3$.",
          "$y=-3(x-0)+5$."
        ],
        "conclusion": "$y=-3x+5$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La formule",
          "stepTheme": "La formule",
          "stepBadge": "La formule",
          "paragraphText": "Au point d'abscisse $a$, la tangente a pour équation $y=f'(a)(x-a)+f(a)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q1",
            "type": "mcq",
            "prompt": "Quelle est l'équation de la tangente au point d'abscisse $a$ ?",
            "options": [
              "$y=f(a)(x-a)+f'(a)$",
              "$y=f'(a)(x-a)+f(a)$",
              "$y=f'(a)(x+a)+f(a)$",
              "$y=f'(a)\\,x+a$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La pente $f'(a)$ multiplie $(x-a)$, puis on ajoute la hauteur $f(a)$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Étape 1 : la hauteur $f(a)$",
          "stepTheme": "Étape 1 : la hauteur $f(a)$",
          "stepBadge": "Étape 1 : la hauteur $f(a)$",
          "paragraphText": "On commence par calculer $f(a)$. Pour $f(x)=-x^3+1$ et $a=1$ : $f(1)=-1+1=0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q2",
            "type": "mcq",
            "prompt": "Pour $h(x)=x^3-3x+5$, que vaut $h(0)$ ?",
            "options": [
              "$0$",
              "$-3$",
              "$5$",
              "$2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$0-0+5=5$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Étape 2 : la pente $f'(a)$",
          "stepTheme": "Étape 2 : la pente $f'(a)$",
          "stepBadge": "Étape 2 : la pente $f'(a)$",
          "paragraphText": "On dérive, puis on remplace $x$ par $a$. Pour $f(x)=-x^3+1$ : $f'(x)=-3x^2$, donc $f'(1)=-3\\times1^2=-3$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q3",
            "type": "mcq",
            "prompt": "Pour $h(x)=x^3-3x+5$, que vaut $h'(0)$ ?",
            "options": [
              "$-3$",
              "$3$",
              "$5$",
              "$0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$h'(x)=3x^2-3$, donc $h'(0)=0-3=-3$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Étape 3 : remplacer",
          "stepTheme": "Étape 3 : remplacer",
          "stepBadge": "Étape 3 : remplacer",
          "paragraphText": "Avec $f(1)=0$ et $f'(1)=-3$ : $y=-3(x-1)+0$, soit $y=-3x+3$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q4",
            "type": "mcq",
            "prompt": "Avec $h(0)=5$ et $h'(0)=-3$, quelle est la tangente au point d'abscisse $0$ ?",
            "options": [
              "$y=5x-3$",
              "$y=-3x-5$",
              "$y=3x+5$",
              "$y=-3x+5$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$y=-3(x-0)+5=-3x+5$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un exemple complet",
          "stepTheme": "Un exemple complet",
          "stepBadge": "Un exemple complet",
          "paragraphText": "Pour $f(x)=x^2$ en $a=3$ : $f(3)=9$, $f'(3)=6$, donc $y=6(x-3)+9=6x-9$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q5",
            "type": "mcq",
            "prompt": "Quelle est la tangente à la courbe de $f(x)=x^2$ au point d'abscisse $1$ ?",
            "options": [
              "$y=2x+1$",
              "$y=2x-1$",
              "$y=x+1$",
              "$y=2x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$f(1)=1$, $f'(1)=2$, donc $y=2(x-1)+1=2x-1$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La tangente horizontale",
          "stepTheme": "La tangente horizontale",
          "stepBadge": "La tangente horizontale",
          "paragraphText": "Si $f'(a)=0$, la tangente est parallèle à l'axe des abscisses : son équation est $y=f(a)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q6",
            "type": "mcq",
            "prompt": "On sait que $f'(2)=0$ et $f(2)=-1$. Quelle est la tangente au point d'abscisse $2$ ?",
            "options": [
              "$y=-1$",
              "$x=2$",
              "$y=2x-1$",
              "$y=0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$y=0\\times(x-2)+(-1)=-1$ : une droite horizontale."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le signe dans $(x-a)$",
          "stepTheme": "Le signe dans $(x-a)$",
          "stepBadge": "Le signe dans $(x-a)$",
          "paragraphText": "Si $a$ est négatif, $(x-a)$ devient $(x+\\dots)$ : pour $a=-2$, on écrit $(x-(-2))=(x+2)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q7",
            "type": "mcq",
            "prompt": "Avec $f'(-2)=4$ et $f(-2)=1$, quelle est la tangente au point d'abscisse $-2$ ?",
            "options": [
              "$y=4x-7$",
              "$y=4x+1$",
              "$y=4x+9$",
              "$y=-2x+1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$y=4(x+2)+1=4x+8+1=4x+9$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q1",
          "type": "mcq",
          "prompt": "Quelle est l'équation de la tangente au point d'abscisse $a$ ?",
          "options": [
            "$y=f(a)(x-a)+f'(a)$",
            "$y=f'(a)(x-a)+f(a)$",
            "$y=f'(a)(x+a)+f(a)$",
            "$y=f'(a)\\,x+a$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La pente $f'(a)$ multiplie $(x-a)$, puis on ajoute la hauteur $f(a)$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q2",
          "type": "mcq",
          "prompt": "Pour $h(x)=x^3-3x+5$, que vaut $h(0)$ ?",
          "options": [
            "$0$",
            "$-3$",
            "$5$",
            "$2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$0-0+5=5$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q3",
          "type": "mcq",
          "prompt": "Pour $h(x)=x^3-3x+5$, que vaut $h'(0)$ ?",
          "options": [
            "$-3$",
            "$3$",
            "$5$",
            "$0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$h'(x)=3x^2-3$, donc $h'(0)=0-3=-3$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q4",
          "type": "mcq",
          "prompt": "Avec $h(0)=5$ et $h'(0)=-3$, quelle est la tangente au point d'abscisse $0$ ?",
          "options": [
            "$y=5x-3$",
            "$y=-3x-5$",
            "$y=3x+5$",
            "$y=-3x+5$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$y=-3(x-0)+5=-3x+5$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q5",
          "type": "mcq",
          "prompt": "Quelle est la tangente à la courbe de $f(x)=x^2$ au point d'abscisse $1$ ?",
          "options": [
            "$y=2x+1$",
            "$y=2x-1$",
            "$y=x+1$",
            "$y=2x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$f(1)=1$, $f'(1)=2$, donc $y=2(x-1)+1=2x-1$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q6",
          "type": "mcq",
          "prompt": "On sait que $f'(2)=0$ et $f(2)=-1$. Quelle est la tangente au point d'abscisse $2$ ?",
          "options": [
            "$y=-1$",
            "$x=2$",
            "$y=2x-1$",
            "$y=0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$y=0\\times(x-2)+(-1)=-1$ : une droite horizontale."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q7",
          "type": "mcq",
          "prompt": "Avec $f'(-2)=4$ et $f(-2)=1$, quelle est la tangente au point d'abscisse $-2$ ?",
          "options": [
            "$y=4x-7$",
            "$y=4x+1$",
            "$y=4x+9$",
            "$y=-2x+1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$y=4(x+2)+1=4x+8+1=4x+9$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05",
      "order": 5,
      "title": "Sens de variation et tableau de variation",
      "summary": "Le signe de $f'$ donne le sens de variation de $f$.",
      "conceptExplanation": "Soit $f$ dérivable sur un intervalle ouvert $I$.\n- Si $f'(x)\\geq0$ pour tout $x$ de $I$, alors $f$ est croissante sur $I$ ;\n- si $f'(x)\\leq0$ pour tout $x$ de $I$, alors $f$ est décroissante sur $I$ ;\n- si $f'(x)=0$ pour tout $x$ de $I$, alors $f$ est constante sur $I$.\n\nMéthode pour étudier une fonction :\n1. calculer $f'(x)$ ;\n2. étudier le signe de $f'(x)$ (tableau de signes, discriminant si $f'$ est du second degré) ;\n3. en déduire le sens de variation ;\n4. dresser le tableau de variation : une flèche qui monte là où $f'>0$, une flèche qui descend là où $f'<0$, avec les valeurs de $f$ aux bornes.\n\nExemple : $h(x)=x^3-3x+5$ sur $[-2\\,;2]$. $h'(x)=3x^2-3=3(x-1)(x+1)$ : $h'$ est positive sur $[-2\\,;-1]$ et $[1\\,;2]$, négative sur $[-1\\,;1]$. $h$ croît de $h(-2)=3$ à $h(-1)=7$, décroît jusqu'à $h(1)=3$, puis croît jusqu'à $h(2)=7$.",
      "keyRule": "$f'\\geq0$ : $f$ croissante ; $f'\\leq0$ : $f$ décroissante ; $f'=0$ : $f$ constante.",
      "formulas": [],
      "workedExample": {
        "title": "Tableau de variation de $f(x)=x^2-2x+5$ sur $[-1\\,;3]$",
        "statement": "Dresse le tableau de variation de $f$.",
        "methodSteps": [
          "$f'(x)=2x-2$ : négative si $x<1$, nulle en $1$, positive si $x>1$.",
          "$f(-1)=8$, $f(1)=4$, $f(3)=8$.",
          "$f$ décroît de $8$ à $4$ sur $[-1\\,;1]$, puis croît de $4$ à $8$ sur $[1\\,;3]$."
        ],
        "conclusion": "Le tableau a une flèche qui descend de $8$ à $4$, puis une flèche qui monte de $4$ à $8$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Dérivée positive",
          "stepTheme": "Dérivée positive",
          "stepBadge": "Dérivée positive",
          "paragraphText": "Si $f'(x)\\geq0$ sur $I$, la fonction $f$ est croissante sur $I$ : la courbe monte.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q1",
            "type": "mcq",
            "prompt": "Pour tout $x$ de $[1\\,;3]$, $g'(x)\\geq0$. Que peut-on dire de $g$ sur $[1\\,;3]$ ?",
            "options": [
              "$g$ est décroissante",
              "$g$ est positive",
              "$g$ est constante",
              "$g$ est croissante"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le signe de la dérivée qui donne le sens de variation, pas le signe de $g$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Dérivée négative",
          "stepTheme": "Dérivée négative",
          "stepBadge": "Dérivée négative",
          "paragraphText": "Si $f'(x)\\leq0$ sur $I$, $f$ est décroissante sur $I$. Si $f'(x)=0$ partout sur $I$, $f$ est constante.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q2",
            "type": "mcq",
            "prompt": "Pour tout $x$ de $[-1\\,;1]$, $g'(x)\\leq0$. Que peut-on dire de $g$ sur cet intervalle ?",
            "options": [
              "$g$ est décroissante",
              "$g$ est croissante",
              "$g$ est négative",
              "$g$ est nulle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$g'\\leq0$ donne $g$ décroissante sur $[-1\\,;1]$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le signe de $f'$",
          "stepTheme": "Le signe de $f'$",
          "stepBadge": "Le signe de $f'$",
          "paragraphText": "Pour $h'(x)=3x^2-3=3(x-1)(x+1)$, un tableau de signes donne : $+$ sur $[-2\\,;-1]$, $-$ sur $[-1\\,;1]$, $+$ sur $[1\\,;2]$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q3",
            "type": "mcq",
            "prompt": "Avec $h'(x)=3(x-1)(x+1)$, quel est le signe de $h'(0)$ ?",
            "options": [
              "Positif",
              "Nul",
              "Négatif",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$h'(0)=3\\times(-1)\\times1=-3<0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Dresser le tableau",
          "stepTheme": "Dresser le tableau",
          "stepBadge": "Dresser le tableau",
          "paragraphText": "Pour $f(x)=x^2-2x+5$ sur $[-1\\,;3]$ : $f'(x)=2x-2$ s'annule en $1$. $f$ descend de $f(-1)=8$ à $f(1)=4$, puis monte jusqu'à $f(3)=8$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q4",
            "type": "mcq",
            "prompt": "Pour $f(x)=x^2-2x+5$, quelle valeur écrit-on sous $x=1$ dans le tableau de variation ?",
            "options": [
              "$8$",
              "$4$",
              "$0$",
              "$5$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$f(1)=1-2+5=4$ : c'est le point bas du tableau."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Lire les flèches",
          "stepTheme": "Lire les flèches",
          "stepBadge": "Lire les flèches",
          "paragraphText": "Dans un tableau de variation, une flèche qui monte signifie « croissante », une flèche qui descend signifie « décroissante ». Le signe de $f'$ est écrit sur la ligne au-dessus.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q5",
            "type": "mcq",
            "prompt": "Sur la ligne de $f'(x)$, on lit « $+$ » entre $a$ et $x_0$. Quelle flèche dessine-t-on pour $f$ sur $[a\\,;x_0]$ ?",
            "options": [
              "Une flèche horizontale",
              "Une flèche qui descend",
              "Aucune flèche",
              "Une flèche qui monte"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$f'>0$ : $f$ est croissante, la flèche monte."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Avec un discriminant",
          "stepTheme": "Avec un discriminant",
          "stepBadge": "Avec un discriminant",
          "paragraphText": "Pour $h(x)=x^3+5x^2+3x$ : $h'(x)=3x^2+10x+3$, $\\Delta=64$, racines $-3$ et $-\\dfrac{1}{3}$. $h'$ est positive à l'extérieur des racines et négative entre elles.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q6",
            "type": "mcq",
            "prompt": "Avec $h'(x)=3x^2+10x+3$, sur quel intervalle $h$ est-elle décroissante ?",
            "options": [
              "$[-5\\,;-3]$",
              "$\\left[-3\\,;-\\dfrac{1}{3}\\right]$",
              "$\\left[-\\dfrac{1}{3}\\,;3\\right]$",
              "$[-5\\,;3]$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec $a=3>0$, $h'$ est négative entre les racines $-3$ et $-\\dfrac{1}{3}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Les valeurs aux bornes",
          "stepTheme": "Les valeurs aux bornes",
          "stepBadge": "Les valeurs aux bornes",
          "paragraphText": "Les nombres du tableau de variation sont des images calculées avec $f$, pas avec $f'$. Pour $h(x)=x^3+5x^2+3x$ : $h(-3)=-27+45-9=9$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q7",
            "type": "mcq",
            "prompt": "Pour $h(x)=x^3+5x^2+3x$, que vaut $h(3)$ ?",
            "options": [
              "$81$",
              "$60$",
              "$0$",
              "$27$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$27+45+9=81$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q1",
          "type": "mcq",
          "prompt": "Pour tout $x$ de $[1\\,;3]$, $g'(x)\\geq0$. Que peut-on dire de $g$ sur $[1\\,;3]$ ?",
          "options": [
            "$g$ est décroissante",
            "$g$ est positive",
            "$g$ est constante",
            "$g$ est croissante"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le signe de la dérivée qui donne le sens de variation, pas le signe de $g$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q2",
          "type": "mcq",
          "prompt": "Pour tout $x$ de $[-1\\,;1]$, $g'(x)\\leq0$. Que peut-on dire de $g$ sur cet intervalle ?",
          "options": [
            "$g$ est décroissante",
            "$g$ est croissante",
            "$g$ est négative",
            "$g$ est nulle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$g'\\leq0$ donne $g$ décroissante sur $[-1\\,;1]$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q3",
          "type": "mcq",
          "prompt": "Avec $h'(x)=3(x-1)(x+1)$, quel est le signe de $h'(0)$ ?",
          "options": [
            "Positif",
            "Nul",
            "Négatif",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$h'(0)=3\\times(-1)\\times1=-3<0$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q4",
          "type": "mcq",
          "prompt": "Pour $f(x)=x^2-2x+5$, quelle valeur écrit-on sous $x=1$ dans le tableau de variation ?",
          "options": [
            "$8$",
            "$4$",
            "$0$",
            "$5$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$f(1)=1-2+5=4$ : c'est le point bas du tableau."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q5",
          "type": "mcq",
          "prompt": "Sur la ligne de $f'(x)$, on lit « $+$ » entre $a$ et $x_0$. Quelle flèche dessine-t-on pour $f$ sur $[a\\,;x_0]$ ?",
          "options": [
            "Une flèche horizontale",
            "Une flèche qui descend",
            "Aucune flèche",
            "Une flèche qui monte"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$f'>0$ : $f$ est croissante, la flèche monte."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q6",
          "type": "mcq",
          "prompt": "Avec $h'(x)=3x^2+10x+3$, sur quel intervalle $h$ est-elle décroissante ?",
          "options": [
            "$[-5\\,;-3]$",
            "$\\left[-3\\,;-\\dfrac{1}{3}\\right]$",
            "$\\left[-\\dfrac{1}{3}\\,;3\\right]$",
            "$[-5\\,;3]$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec $a=3>0$, $h'$ est négative entre les racines $-3$ et $-\\dfrac{1}{3}$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q7",
          "type": "mcq",
          "prompt": "Pour $h(x)=x^3+5x^2+3x$, que vaut $h(3)$ ?",
          "options": [
            "$81$",
            "$60$",
            "$0$",
            "$27$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$27+45+9=81$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06",
      "order": 6,
      "title": "Extremums et bénéfice maximal",
      "summary": "Quand $f'$ s'annule en changeant de signe, $f$ a un extremum relatif.",
      "conceptExplanation": "Soit $f$ dérivable sur $]a\\,;b[$ et $x_0$ un élément de $]a\\,;b[$.\nSi $f'$ s'annule en $x_0$ EN CHANGEANT DE SIGNE, alors $f$ admet un extremum relatif en $x_0$ :\n- $f'$ passe de $+$ à $-$ : maximum relatif $f(x_0)$ ;\n- $f'$ passe de $-$ à $+$ : minimum relatif $f(x_0)$.\n\nSi $f'$ s'annule sans changer de signe, il n'y a pas d'extremum en ce point.\n\nSituation : une entreprise fabrique $x$ pièces par jour ($0\\leq x\\leq30$). Son bénéfice, en millions de FCFA, est $B(x)=-2x^2+60x-400$.\n- $B'(x)=-4x+60$ s'annule en $x=15$ ;\n- $B'$ est positive sur $[0\\,;15]$ et négative sur $[15\\,;30]$ ;\n- $B$ croît puis décroît : son maximum est $B(15)=-450+900-400=50$.\nL'entreprise doit produire 15 pièces par jour pour un bénéfice maximal de 50 millions de FCFA.",
      "keyRule": "$f'$ s'annule ET change de signe en $x_0$ : extremum. De $+$ à $-$ : maximum ; de $-$ à $+$ : minimum.",
      "formulas": [],
      "workedExample": {
        "title": "Le bénéfice maximal",
        "statement": "$B(x)=-2x^2+60x-400$ sur $[0\\,;30]$. Combien de pièces produire pour un bénéfice maximal ?",
        "methodSteps": [
          "$B'(x)=-4x+60$, qui s'annule en $x=15$.",
          "$B'>0$ sur $[0\\,;15[$ et $B'<0$ sur $]15\\,;30]$ : $B$ croît puis décroît.",
          "$B(15)=-2\\times225+900-400=50$."
        ],
        "conclusion": "15 pièces par jour, pour un bénéfice de 50 millions de FCFA."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Maximum et minimum relatifs",
          "stepTheme": "Maximum et minimum relatifs",
          "stepBadge": "Maximum et minimum relatifs",
          "paragraphText": "Un maximum relatif est un « sommet » local de la courbe ; un minimum relatif est un « creux ». Les deux s'appellent des extremums relatifs.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q1",
            "type": "mcq",
            "prompt": "Comment appelle-t-on un maximum relatif ou un minimum relatif ?",
            "options": [
              "Une racine",
              "Un extremum relatif",
              "Une asymptote",
              "Un nombre dérivé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Maximum et minimum relatifs sont regroupés sous le nom d'extremum relatif."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La condition",
          "stepTheme": "La condition",
          "stepBadge": "La condition",
          "paragraphText": "Si $f'$ s'annule en $x_0$ en changeant de signe, $f$ admet un extremum relatif en $x_0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q2",
            "type": "mcq",
            "prompt": "Dans un tableau, $g'$ vaut $-$ sur $[-3\\,;0]$, $0$ en $0$ et $+$ sur $[0\\,;5]$. Que peut-on dire en $0$ ?",
            "options": [
              "$g$ admet un maximum relatif",
              "$g$ n'a pas d'extremum",
              "$g$ admet un minimum relatif",
              "$g$ n'est pas dérivable"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$g'$ passe de $-$ à $+$ : $g$ descend puis monte, c'est un minimum."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Lire un tableau",
          "stepTheme": "Lire un tableau",
          "stepBadge": "Lire un tableau",
          "paragraphText": "Sur $]-4\\,;3[$, $f'$ vaut $-$ puis $+$ avec $f'(1)=0$, et la flèche descend jusqu'à $-5$ : $f$ admet un minimum relatif égal à $-5$ en $1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q3",
            "type": "mcq",
            "prompt": "Le tableau montre une flèche qui descend de $8$ à $-1$ (en $x=0$) puis remonte à $24$. Quel est l'extremum ?",
            "options": [
              "Un minimum relatif égal à $-1$ en $0$",
              "Un maximum relatif égal à $24$ en $0$",
              "Un minimum relatif égal à $0$ en $-1$",
              "Un maximum relatif égal à $8$ en $-1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La valeur du creux est $-1$, atteinte en $x=0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Sans changement de signe",
          "stepTheme": "Sans changement de signe",
          "stepBadge": "Sans changement de signe",
          "paragraphText": "Si $f'$ s'annule en $x_0$ mais garde le même signe de part et d'autre, il n'y a PAS d'extremum en $x_0$ : la fonction continue de monter (ou de descendre).",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q4",
            "type": "mcq",
            "prompt": "$g'$ vaut $+$, puis $0$ en $1$, puis encore $+$. Y a-t-il un extremum en $1$ ?",
            "options": [
              "Oui, un maximum",
              "Oui, un minimum",
              "Oui, car $g'(1)=0$",
              "Non, car $g'$ ne change pas de signe"
            ],
            "correctAnswerIndex": 3,
            "explanation": "S'annuler ne suffit pas : il faut aussi que $g'$ change de signe."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le bénéfice : dériver",
          "stepTheme": "Le bénéfice : dériver",
          "stepBadge": "Le bénéfice : dériver",
          "paragraphText": "Pour $B(x)=-2x^2+60x-400$, on cherche où $B'(x)=-4x+60$ s'annule : $-4x+60=0$ donne $x=15$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q5",
            "type": "mcq",
            "prompt": "En quelle valeur $B'(x)=-4x+60$ s'annule-t-elle ?",
            "options": [
              "$x=-15$",
              "$x=60$",
              "$x=15$",
              "$x=4$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$-4x+60=0$, donc $x=\\dfrac{60}{4}=15$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le bénéfice maximal",
          "stepTheme": "Le bénéfice maximal",
          "stepBadge": "Le bénéfice maximal",
          "paragraphText": "$B'$ est positive avant $15$ et négative après : $B$ a un maximum en $15$. $B(15)=-2\\times225+900-400=50$ millions de FCFA.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q6",
            "type": "mcq",
            "prompt": "Le bénéfice d'une entreprise est $B(x)=-2x^2+60x-400$ (en millions de FCFA), et $B$ est maximal pour $x=15$. Quel est le bénéfice maximal $B(15)$ ?",
            "options": [
              "$15$",
              "$50$",
              "$500$",
              "$-400$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$-450+900-400=50$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Un maximum relatif",
          "stepTheme": "Un maximum relatif",
          "stepBadge": "Un maximum relatif",
          "paragraphText": "Pour $h(x)=x^3-3x+5$, $h'$ passe de $+$ à $-$ en $-1$ : $h$ admet un maximum relatif $h(-1)=7$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q7",
            "type": "mcq",
            "prompt": "Pour $h(x)=x^3-3x+5$, $h'$ passe de $-$ à $+$ en $1$. Quel est cet extremum ?",
            "options": [
              "Un minimum relatif égal à $3$",
              "Un maximum relatif égal à $3$",
              "Un minimum relatif égal à $1$",
              "Un maximum relatif égal à $7$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "De $-$ à $+$ : minimum. $h(1)=1-3+5=3$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q1",
          "type": "mcq",
          "prompt": "Comment appelle-t-on un maximum relatif ou un minimum relatif ?",
          "options": [
            "Une racine",
            "Un extremum relatif",
            "Une asymptote",
            "Un nombre dérivé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Maximum et minimum relatifs sont regroupés sous le nom d'extremum relatif."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q2",
          "type": "mcq",
          "prompt": "Dans un tableau, $g'$ vaut $-$ sur $[-3\\,;0]$, $0$ en $0$ et $+$ sur $[0\\,;5]$. Que peut-on dire en $0$ ?",
          "options": [
            "$g$ admet un maximum relatif",
            "$g$ n'a pas d'extremum",
            "$g$ admet un minimum relatif",
            "$g$ n'est pas dérivable"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$g'$ passe de $-$ à $+$ : $g$ descend puis monte, c'est un minimum."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q3",
          "type": "mcq",
          "prompt": "Le tableau montre une flèche qui descend de $8$ à $-1$ (en $x=0$) puis remonte à $24$. Quel est l'extremum ?",
          "options": [
            "Un minimum relatif égal à $-1$ en $0$",
            "Un maximum relatif égal à $24$ en $0$",
            "Un minimum relatif égal à $0$ en $-1$",
            "Un maximum relatif égal à $8$ en $-1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La valeur du creux est $-1$, atteinte en $x=0$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q4",
          "type": "mcq",
          "prompt": "$g'$ vaut $+$, puis $0$ en $1$, puis encore $+$. Y a-t-il un extremum en $1$ ?",
          "options": [
            "Oui, un maximum",
            "Oui, un minimum",
            "Oui, car $g'(1)=0$",
            "Non, car $g'$ ne change pas de signe"
          ],
          "correctAnswerIndex": 3,
          "explanation": "S'annuler ne suffit pas : il faut aussi que $g'$ change de signe."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q5",
          "type": "mcq",
          "prompt": "En quelle valeur $B'(x)=-4x+60$ s'annule-t-elle ?",
          "options": [
            "$x=-15$",
            "$x=60$",
            "$x=15$",
            "$x=4$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$-4x+60=0$, donc $x=\\dfrac{60}{4}=15$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q6",
          "type": "mcq",
          "prompt": "Le bénéfice d'une entreprise est $B(x)=-2x^2+60x-400$ (en millions de FCFA), et $B$ est maximal pour $x=15$. Quel est le bénéfice maximal $B(15)$ ?",
          "options": [
            "$15$",
            "$50$",
            "$500$",
            "$-400$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$-450+900-400=50$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q7",
          "type": "mcq",
          "prompt": "Pour $h(x)=x^3-3x+5$, $h'$ passe de $-$ à $+$ en $1$. Quel est cet extremum ?",
          "options": [
            "Un minimum relatif égal à $3$",
            "Un maximum relatif égal à $3$",
            "Un minimum relatif égal à $1$",
            "Un maximum relatif égal à $7$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "De $-$ à $+$ : minimum. $h(1)=1-3+5=3$."
        }
      ]
    }
  ]
};
