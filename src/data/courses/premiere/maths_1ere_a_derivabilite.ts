import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 4 : DERIVABILITE ET ETUDE DE FONCTIONS » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=868
export const MATHS_1ERE_A_L04_DERIVABILITE: CurriculumChapter = {
  "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions",
  "subjectId": "maths",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 4,
  "title": "Leçon 4 : Dérivabilité et étude de fonctions",
  "summary": "À partir du bénéfice d'une entreprise qui cherche sa production optimale, on étudie la tangente, le nombre dérivé, les calculs de dérivées, l'équation de la tangente, le sens de variation et les extremums relatifs.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=868",
  "points": [
    {
      "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01",
      "order": 1,
      "title": "Tangente et nombre dérivé",
      "summary": "Définir la tangente à une courbe en un point, la dérivabilité en un point et le nombre dérivé.",
      "conceptExplanation": "Soient $f$ une fonction, $(C_f)$ sa courbe représentative, $A(a ; f(a))$ et $M(x ; f(x))$ deux points de $(C_f)$. Lorsque $M$ se déplace sur la courbe et se rapproche de $A$, la sécante $(AM)$ finit par prendre une position limite : la droite $(T)$ ainsi obtenue est la tangente en $A$ à la courbe. Le coefficient directeur de la droite $(AM)$ est $\\frac{f(x) - f(a)}{x - a}$.\nOn dit que $f$ est dérivable en $a$ lorsque sa représentation graphique admet en son point d'abscisse $a$ une tangente non parallèle à l'axe des ordonnées. On appelle nombre dérivé de $f$ en $a$ le coefficient directeur de cette tangente ; on le note $f'(a)$.\nExemple : si la tangente au point $A(1 ; 3)$ a pour coefficient directeur $2$, alors $f$ est dérivable en $1$ et $f'(1) = 2$.",
      "keyRule": "Le nombre dérivé en un point est un coefficient directeur : celui de la tangente en ce point.",
      "formulas": [
        {
          "name": "Nombre dérivé",
          "formula": "f'(a) = \\text{coefficient directeur de la tangente en } a",
          "note": "Il n'existe que si la tangente en $a$ n'est pas verticale."
        }
      ],
      "workedExample": {
        "title": "Lire un nombre dérivé (exemple de la leçon)",
        "statement": "La courbe d'une fonction $f$ admet au point $A(1 ; 3)$ une tangente de coefficient directeur $2$. Que peut-on dire de la dérivabilité de $f$ en $1$ et de $f'(1)$ ?",
        "methodSteps": [
          "La tangente en $A$ existe et n'est pas parallèle à l'axe des ordonnées.",
          "La fonction est donc dérivable en $1$.",
          "Son nombre dérivé en $1$ est le coefficient directeur de la tangente."
        ],
        "conclusion": "La fonction $f$ est dérivable en $1$ et $f'(1) = 2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La tangente comme position limite",
          "stepTheme": "La tangente comme position limite",
          "stepBadge": "La tangente comme position limite",
          "paragraphText": "• Présentation de la leçon : lorsque le point $M$ se déplace sur la courbe et se rapproche de $A$, la sécante $(AM)$ finit par prendre une position limite, représentée par la droite $(T)$.\nOn dit que la droite $(T)$ est la tangente en $A$ à la courbe.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q1",
            "type": "mcq",
            "prompt": "Comment obtient-on la tangente en $A$ à une courbe dans la présentation de la leçon ?",
            "options": [
              "En traçant une parallèle à l'axe des ordonnées",
              "En joignant deux points quelconques de la courbe",
              "Comme position limite de la sécante $(AM)$ quand $M$ se rapproche de $A$",
              "En traçant la droite d'équation $y = 0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La tangente est la position limite de la sécante $(AM)$ lorsque $M$ se rapproche de $A$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Être dérivable en un point",
          "stepTheme": "Être dérivable en un point",
          "stepBadge": "Être dérivable en un point",
          "paragraphText": "• Définition : une fonction $f$ est dérivable en $a$ lorsque sa représentation graphique admet en son point d'abscisse $a$ une tangente non parallèle à l'axe des ordonnées.\nOn appelle nombre dérivé de $f$ en $a$ le coefficient directeur de cette tangente ; on le note $f'(a)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q2",
            "type": "mcq",
            "prompt": "Comment appelle-t-on le coefficient directeur de la tangente en $a$ ?",
            "options": [
              "Le nombre dérivé de $f$ en $a$",
              "La fonction dérivée",
              "L'extremum de $f$",
              "Le coefficient de $x$ dans $f(x)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, ce coefficient directeur est le nombre dérivé de $f$ en $a$, noté $f'(a)$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Un nombre dérivé lu sur une figure",
          "stepTheme": "Un nombre dérivé lu sur une figure",
          "stepBadge": "Un nombre dérivé lu sur une figure",
          "paragraphText": "• Exemple de la leçon : la courbe admet au point $A(1 ; 3)$ une tangente de coefficient directeur $2$.\nLa fonction est donc dérivable en $1$ et $f'(1) = 2$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q3",
            "type": "mcq",
            "prompt": "Si la tangente au point d'abscisse $1$ a pour coefficient directeur $2$, que vaut $f'(1)$ ?",
            "options": [
              "$1$",
              "$3$",
              "$0$",
              "$2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le nombre dérivé est le coefficient directeur de la tangente : $f'(1) = 2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "La tangente verticale",
          "stepTheme": "La tangente verticale",
          "stepBadge": "La tangente verticale",
          "paragraphText": "• Piège de la leçon : au point d'abscisse $-1$ de la figure, la courbe admet une tangente parallèle à l'axe des ordonnées.\nLa fonction représentée n'est donc pas dérivable au point d'abscisse $-1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q4",
            "type": "mcq",
            "prompt": "Si la courbe admet en un point une tangente parallèle à l'axe des ordonnées, la fonction y est-elle dérivable ?",
            "options": [
              "Oui, avec un nombre dérivé nul",
              "Non, elle n'y est pas dérivable",
              "Oui, avec un nombre dérivé infini",
              "Oui, seulement si le point est $A$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La définition exige une tangente non parallèle à l'axe des ordonnées."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le coefficient directeur d'une sécante",
          "stepTheme": "Le coefficient directeur d'une sécante",
          "stepBadge": "Le coefficient directeur d'une sécante",
          "paragraphText": "• Rappel de la leçon : le coefficient directeur de la droite $(AM)$, avec $A(a ; f(a))$ et $M(x ; f(x))$, est $\\frac{f(x) - f(a)}{x - a}$.\nC'est ce taux que la tangente approche quand $M$ se rapproche de $A$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q5",
            "type": "mcq",
            "prompt": "Quel est le coefficient directeur de la sécante $(AM)$ rappelé dans la leçon ?",
            "options": [
              "$\\frac{f(x) - f(a)}{x - a}$",
              "$\\frac{f(a) - f(x)}{a + x}$",
              "$f(x) - f(a)$",
              "$\\frac{x - a}{f(x) - f(a)}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le rappel donne le quotient des différences : $\\frac{f(x) - f(a)}{x - a}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Reconnaître la dérivabilité sur une courbe",
          "stepTheme": "Reconnaître la dérivabilité sur une courbe",
          "stepBadge": "Reconnaître la dérivabilité sur une courbe",
          "paragraphText": "• Méthode : pour savoir si $f$ est dérivable en $a$ sur une figure, on regarde la tangente au point d'abscisse $a$.\nSi elle existe et n'est pas verticale, $f$ est dérivable en $a$ et son coefficient directeur est $f'(a)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q6",
            "type": "mcq",
            "prompt": "Sur une figure, que faut-il observer pour décider si $f$ est dérivable en $a$ ?",
            "options": [
              "La position de l'origine",
              "La plus grande valeur de $f$",
              "La tangente au point d'abscisse $a$",
              "Le nombre de points de la courbe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La dérivabilité en $a$ se lit sur la tangente au point d'abscisse $a$ : elle doit exister et ne pas être verticale."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q1",
          "type": "mcq",
          "prompt": "Comment obtient-on la tangente en $A$ à une courbe dans la présentation de la leçon ?",
          "options": [
            "En traçant une parallèle à l'axe des ordonnées",
            "En joignant deux points quelconques de la courbe",
            "Comme position limite de la sécante $(AM)$ quand $M$ se rapproche de $A$",
            "En traçant la droite d'équation $y = 0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La tangente est la position limite de la sécante $(AM)$ lorsque $M$ se rapproche de $A$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q2",
          "type": "mcq",
          "prompt": "Comment appelle-t-on le coefficient directeur de la tangente en $a$ ?",
          "options": [
            "Le nombre dérivé de $f$ en $a$",
            "La fonction dérivée",
            "L'extremum de $f$",
            "Le coefficient de $x$ dans $f(x)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, ce coefficient directeur est le nombre dérivé de $f$ en $a$, noté $f'(a)$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q3",
          "type": "mcq",
          "prompt": "Si la tangente au point d'abscisse $1$ a pour coefficient directeur $2$, que vaut $f'(1)$ ?",
          "options": [
            "$1$",
            "$3$",
            "$0$",
            "$2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le nombre dérivé est le coefficient directeur de la tangente : $f'(1) = 2$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q4",
          "type": "mcq",
          "prompt": "Si la courbe admet en un point une tangente parallèle à l'axe des ordonnées, la fonction y est-elle dérivable ?",
          "options": [
            "Oui, avec un nombre dérivé nul",
            "Non, elle n'y est pas dérivable",
            "Oui, avec un nombre dérivé infini",
            "Oui, seulement si le point est $A$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La définition exige une tangente non parallèle à l'axe des ordonnées."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q5",
          "type": "mcq",
          "prompt": "Quel est le coefficient directeur de la sécante $(AM)$ rappelé dans la leçon ?",
          "options": [
            "$\\frac{f(x) - f(a)}{x - a}$",
            "$\\frac{f(a) - f(x)}{a + x}$",
            "$f(x) - f(a)$",
            "$\\frac{x - a}{f(x) - f(a)}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le rappel donne le quotient des différences : $\\frac{f(x) - f(a)}{x - a}$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p01_q6",
          "type": "mcq",
          "prompt": "Sur une figure, que faut-il observer pour décider si $f$ est dérivable en $a$ ?",
          "options": [
            "La position de l'origine",
            "La plus grande valeur de $f$",
            "La tangente au point d'abscisse $a$",
            "Le nombre de points de la courbe"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La dérivabilité en $a$ se lit sur la tangente au point d'abscisse $a$ : elle doit exister et ne pas être verticale."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02",
      "order": 2,
      "title": "Fonction dérivée et fonctions de référence",
      "summary": "Définir la fonction dérivée et connaître les dérivées des fonctions de référence du tableau de la leçon.",
      "conceptExplanation": "Soit une fonction $f$ dérivable en tout élément d'un intervalle ouvert $I$ de $\\mathbb{R}$. La fonction qui à tout nombre $x$ élément de $I$ associe $f'(x)$ est appelée la fonction dérivée de $f$ ; elle se note $f'$.\nTableau des dérivées de référence : la dérivée de $x \\mapsto k$ est $x \\mapsto 0$ ; celle de $x \\mapsto x$ est $x \\mapsto 1$ ; celle de $x \\mapsto ax + b$ est $x \\mapsto a$ ; celle de $x \\mapsto x^2$ est $x \\mapsto 2x$ ; celle de $x \\mapsto x^3$ est $x \\mapsto 3x^2$ ; celle de $x \\mapsto \\frac{1}{x}$ est $x \\mapsto -\\frac{1}{x^2}$, sur $]-\\infty ; 0[$ ou sur $]0 ; +\\infty[$.",
      "keyRule": "Le tableau de référence se retient par cœur : constante, identité, affine, carré, cube, inverse.",
      "formulas": [
        {
          "name": "Dérivée du carré et du cube",
          "formula": "(x^2)' = 2x \\quad ; \\quad (x^3)' = 3x^2",
          "note": "Sur $\\mathbb{R}$."
        },
        {
          "name": "Dérivée de l'inverse",
          "formula": "\\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^2}",
          "note": "Sur $]-\\infty ; 0[$ ou sur $]0 ; +\\infty[$."
        }
      ],
      "workedExample": {
        "title": "Vrai ou faux sur les dérivées (exercice de fixation)",
        "statement": "Réponds par Vrai ou Faux : la dérivée de $x \\mapsto x^3$ est $x \\mapsto 3x$ ; la dérivée de $x \\mapsto -120x$ est $x \\mapsto -120$.",
        "methodSteps": [
          "La dérivée de $x^3$ est $3x^2$ d'après le tableau : la première affirmation est fausse.",
          "La dérivée de $x \\mapsto ax + b$ est $a$ : avec $a = -120$, la seconde affirmation est vraie."
        ],
        "conclusion": "Les réponses sont : Faux pour la première affirmation, Vrai pour la seconde."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La fonction dérivée",
          "stepTheme": "La fonction dérivée",
          "stepBadge": "La fonction dérivée",
          "paragraphText": "• Définition : soit $f$ une fonction dérivable en tout élément d'un intervalle ouvert $I$ ; la fonction qui à tout $x$ de $I$ associe $f'(x)$ est appelée la fonction dérivée de $f$.\nElle se note $f'$ : $f' : I \\to \\mathbb{R}$, $x \\mapsto f'(x)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q1",
            "type": "mcq",
            "prompt": "Comment note-t-on la fonction qui à chaque $x$ d'un intervalle associe le nombre dérivé $f'(x)$ ?",
            "options": [
              "$f$",
              "$f'$",
              "$f(a)$",
              "$\\Delta f$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la fonction dérivée, notée $f'$ par définition de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les dérivées des fonctions de référence",
          "stepTheme": "Les dérivées des fonctions de référence",
          "stepBadge": "Les dérivées des fonctions de référence",
          "paragraphText": "• Tableau de la leçon : la dérivée de la fonction constante $x \\mapsto k$ est $x \\mapsto 0$ ; celle de $x \\mapsto x$ est $x \\mapsto 1$ ; celle de $x \\mapsto ax + b$ est $x \\mapsto a$.\nCes fonctions sont dérivables sur $\\mathbb{R}$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q2",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de la fonction $x \\mapsto ax + b$ sur $\\mathbb{R}$ ?",
            "options": [
              "$x \\mapsto b$",
              "$x \\mapsto ax$",
              "$x \\mapsto 0$",
              "$x \\mapsto a$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "D'après le tableau des dérivées de référence, la dérivée de $x \\mapsto ax + b$ est la constante $a$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les dérivées de x carré et x cube",
          "stepTheme": "Les dérivées de x carré et x cube",
          "stepBadge": "Les dérivées de x carré et x cube",
          "paragraphText": "• Tableau de la leçon : la dérivée de $x \\mapsto x^2$ est $x \\mapsto 2x$ et celle de $x \\mapsto x^3$ est $x \\mapsto 3x^2$, sur $\\mathbb{R}$.\nL'exercice de fixation le rappelle : affirmer que la dérivée de $x^3$ est $3x$ est faux.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q3",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de la fonction $x \\mapsto x^3$ sur $\\mathbb{R}$ ?",
            "options": [
              "$x \\mapsto 3x$",
              "$x \\mapsto x^2$",
              "$x \\mapsto 3x^2$",
              "$x \\mapsto 3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "D'après le tableau, la dérivée de $x \\mapsto x^3$ est $x \\mapsto 3x^2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La dérivée de l'inverse",
          "stepTheme": "La dérivée de l'inverse",
          "stepBadge": "La dérivée de l'inverse",
          "paragraphText": "• Tableau de la leçon : la dérivée de la fonction $x \\mapsto \\frac{1}{x}$ est $x \\mapsto -\\frac{1}{x^2}$.\nElle est dérivable sur $]-\\infty ; 0[$ et sur $]0 ; +\\infty[$, mais pas en $0$ où elle n'est pas définie.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q4",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de la fonction $x \\mapsto \\frac{1}{x}$ sur $]0 ; +\\infty[$ ?",
            "options": [
              "$x \\mapsto -\\frac{1}{x^2}$",
              "$x \\mapsto \\frac{1}{x^2}$",
              "$x \\mapsto -\\frac{1}{x}$",
              "$x \\mapsto 1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D'après le tableau des fonctions de référence, la dérivée de l'inverse est $x \\mapsto -\\frac{1}{x^2}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La dérivée d'une constante fois x",
          "stepTheme": "La dérivée d'une constante fois x",
          "stepBadge": "La dérivée d'une constante fois x",
          "paragraphText": "• Exercice de fixation : la dérivée sur $\\mathbb{R}$ de la fonction $x \\mapsto -120x$ est la fonction $x \\mapsto -120$.\nC'est le cas particulier $a = -120$ et $b = 0$ de la fonction affine de référence.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q5",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de la fonction $x \\mapsto -120x$ sur $\\mathbb{R}$ ?",
            "options": [
              "$x \\mapsto 0$",
              "$x \\mapsto -120x$",
              "$x \\mapsto 120$",
              "$x \\mapsto -120$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La dérivée de $x \\mapsto ax + b$ est $a$ : ici la dérivée est la constante $-120$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Confondre la fonction et sa dérivée",
          "stepTheme": "Confondre la fonction et sa dérivée",
          "stepBadge": "Confondre la fonction et sa dérivée",
          "paragraphText": "• Piège de l'exercice de fixation : la fonction $x \\mapsto -\\frac{1}{x^2}$ est la dérivée de $x \\mapsto \\frac{1}{x}$, et non l'inverse.\nAffirmer que $x \\mapsto \\frac{1}{x}$ est la dérivée de $x \\mapsto -\\frac{1}{x^2}$, comme le propose l'énoncé, est faux.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q6",
            "type": "mcq",
            "prompt": "L'affirmation « la dérivée de $x \\mapsto x^3$ est $x \\mapsto 3x$ » est :",
            "options": [
              "Vraie",
              "Fausse, la dérivée est $x \\mapsto 3x^2$",
              "Vraie seulement en $0$",
              "Fausse, la dérivée est $x \\mapsto x^2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le tableau de référence donne $3x^2$ pour la dérivée de $x^3$ : l'affirmation est fausse."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q1",
          "type": "mcq",
          "prompt": "Comment note-t-on la fonction qui à chaque $x$ d'un intervalle associe le nombre dérivé $f'(x)$ ?",
          "options": [
            "$f$",
            "$f'$",
            "$f(a)$",
            "$\\Delta f$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la fonction dérivée, notée $f'$ par définition de la leçon."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q2",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de la fonction $x \\mapsto ax + b$ sur $\\mathbb{R}$ ?",
          "options": [
            "$x \\mapsto b$",
            "$x \\mapsto ax$",
            "$x \\mapsto 0$",
            "$x \\mapsto a$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "D'après le tableau des dérivées de référence, la dérivée de $x \\mapsto ax + b$ est la constante $a$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q3",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de la fonction $x \\mapsto x^3$ sur $\\mathbb{R}$ ?",
          "options": [
            "$x \\mapsto 3x$",
            "$x \\mapsto x^2$",
            "$x \\mapsto 3x^2$",
            "$x \\mapsto 3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "D'après le tableau, la dérivée de $x \\mapsto x^3$ est $x \\mapsto 3x^2$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q4",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de la fonction $x \\mapsto \\frac{1}{x}$ sur $]0 ; +\\infty[$ ?",
          "options": [
            "$x \\mapsto -\\frac{1}{x^2}$",
            "$x \\mapsto \\frac{1}{x^2}$",
            "$x \\mapsto -\\frac{1}{x}$",
            "$x \\mapsto 1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après le tableau des fonctions de référence, la dérivée de l'inverse est $x \\mapsto -\\frac{1}{x^2}$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q5",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de la fonction $x \\mapsto -120x$ sur $\\mathbb{R}$ ?",
          "options": [
            "$x \\mapsto 0$",
            "$x \\mapsto -120x$",
            "$x \\mapsto 120$",
            "$x \\mapsto -120$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La dérivée de $x \\mapsto ax + b$ est $a$ : ici la dérivée est la constante $-120$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p02_q6",
          "type": "mcq",
          "prompt": "L'affirmation « la dérivée de $x \\mapsto x^3$ est $x \\mapsto 3x$ » est :",
          "options": [
            "Vraie",
            "Fausse, la dérivée est $x \\mapsto 3x^2$",
            "Vraie seulement en $0$",
            "Fausse, la dérivée est $x \\mapsto x^2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le tableau de référence donne $3x^2$ pour la dérivée de $x^3$ : l'affirmation est fausse."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03",
      "order": 3,
      "title": "Dérivées et opérations sur les fonctions",
      "summary": "Calculer une dérivée à l'aide des formules d'opérations : somme, produit, produit par un réel, quotient et inverse.",
      "conceptExplanation": "$u$ et $v$ sont deux fonctions définies et dérivables sur un intervalle ouvert $I$.\nLa dérivée de la somme $u + v$ est $u' + v'$ ; celle du produit $uv$ est $u'v + uv'$ ; celle du produit par un nombre réel $ku$ est $ku'$ ; celle du quotient $\\frac{u}{v}$ est $\\frac{u'v - uv'}{v^2}$ et celle de l'inverse $\\frac{1}{v}$ est $-\\frac{v'}{v^2}$, ces deux dernières là où $v(x) \\neq 0$.\nExemples : pour $Q(x) = x + x^3$, $Q'(x) = 1 + 3x^2$ ; pour $V(x) = \\frac{2}{x}$ sur $]1 ; +\\infty[$, $V'(x) = -\\frac{2}{x^2}$.",
      "keyRule": "Produit et quotient ont des formules à deux termes : ce sont elles qu'on confond le plus souvent.",
      "formulas": [
        {
          "name": "Dérivée d'un produit",
          "formula": "(uv)' = u'v + uv'",
          "note": "Sur l'intervalle $I$."
        },
        {
          "name": "Dérivée d'un quotient",
          "formula": "\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}",
          "note": "Là où $v(x) \\neq 0$."
        }
      ],
      "workedExample": {
        "title": "Trois dérivées à calculer (exercice de fixation)",
        "statement": "Calcule la dérivée de $Q(x) = x + x^3$ sur $\\mathbb{R}$, de $J(x) = \\sqrt{2} \\, x$ sur $\\mathbb{R}$ et de $V(x) = \\frac{2}{x}$ sur $]1 ; +\\infty[$.",
        "methodSteps": [
          "Pour $Q$ : somme de deux fonctions de référence, $Q'(x) = 1 + 3x^2$.",
          "Pour $J$ : fonction affine de coefficient $\\sqrt{2}$, donc $J'(x) = \\sqrt{2}$.",
          "Pour $V$ : dérivée de l'inverse multipliée par $2$, donc $V'(x) = -\\frac{2}{x^2}$."
        ],
        "conclusion": "Les trois dérivées sont $1 + 3x^2$, $\\sqrt{2}$ et $-\\frac{2}{x^2}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Dériver une somme",
          "stepTheme": "Dériver une somme",
          "stepBadge": "Dériver une somme",
          "paragraphText": "• Tableau des opérations : si $u$ et $v$ sont dérivables sur un intervalle ouvert $I$, la dérivée de la somme $u + v$ est $u' + v'$.\nOn dérive donc terme à terme.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q1",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de la somme $u + v$ de deux fonctions dérivables sur $I$ ?",
            "options": [
              "$u' + v'$",
              "$u' \\times v'$",
              "$u + v'$",
              "$\\frac{u'}{v'}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D'après le tableau des opérations, $(u + v)' = u' + v'$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Dériver un produit",
          "stepTheme": "Dériver un produit",
          "stepBadge": "Dériver un produit",
          "paragraphText": "• Tableau des opérations : la dérivée du produit $u v$ est $u'v + uv'$.\nElle comporte deux termes : on ne dérive jamais les deux facteurs en même temps dans le même terme.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q2",
            "type": "mcq",
            "prompt": "Quelle est la dérivée du produit $u v$ ?",
            "options": [
              "$u'v'$",
              "$u'v - uv'$",
              "$u'v + uv'$",
              "$uv$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "D'après le tableau des opérations, $(uv)' = u'v + uv'$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Dériver un quotient et un inverse",
          "stepTheme": "Dériver un quotient et un inverse",
          "stepBadge": "Dériver un quotient et un inverse",
          "paragraphText": "• Tableau des opérations : la dérivée du quotient $\\frac{u}{v}$ est $\\frac{u'v - uv'}{v^2}$, là où $v(x) \\neq 0$.\nLa dérivée de l'inverse $\\frac{1}{v}$ est $-\\frac{v'}{v^2}$, sous la même condition.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q3",
            "type": "mcq",
            "prompt": "Quelle est la dérivée du quotient $\\frac{u}{v}$ là où $v$ ne s'annule pas ?",
            "options": [
              "$\\frac{u'v + uv'}{v^2}$",
              "$\\frac{u'v - uv'}{v^2}$",
              "$\\frac{u'}{v'}$",
              "$\\frac{u - v}{v^2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D'après le tableau des opérations, le numérateur est $u'v - uv'$ et le dénominateur est $v^2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Multiplier par un nombre réel",
          "stepTheme": "Multiplier par un nombre réel",
          "stepBadge": "Multiplier par un nombre réel",
          "paragraphText": "• Tableau des opérations : la dérivée de $k u$, où $k$ est un nombre réel, est $k u'$.\nLa constante multiplicative se conserve simplement devant la dérivée.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q4",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de la fonction $x \\mapsto \\sqrt{2} \\, x$ sur $\\mathbb{R}$ ?",
            "options": [
              "$x \\mapsto 0$",
              "$x \\mapsto \\frac{1}{\\sqrt{2}}$",
              "$x \\mapsto 2$",
              "$x \\mapsto \\sqrt{2}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est une fonction affine de coefficient $a = \\sqrt{2}$ : sa dérivée est la constante $\\sqrt{2}$, comme dans l'exercice de fixation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Dériver une somme de puissances",
          "stepTheme": "Dériver une somme de puissances",
          "stepBadge": "Dériver une somme de puissances",
          "paragraphText": "• Exercice de fixation : pour $Q(x) = x + x^3$ sur $\\mathbb{R}$, on dérive terme à terme.\nLa dérivée de $x$ est $1$ et celle de $x^3$ est $3x^2$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q5",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $Q(x) = x + x^3$ sur $\\mathbb{R}$ ?",
            "options": [
              "$1 + x^2$",
              "$3x^2$",
              "$1 + 3x^2$",
              "$4x^3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On dérive la somme terme à terme : $Q'(x) = 1 + 3x^2$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Dériver un inverse simple",
          "stepTheme": "Dériver un inverse simple",
          "stepBadge": "Dériver un inverse simple",
          "paragraphText": "• Exercice de fixation : pour $V(x) = \\frac{2}{x}$ sur $]1 ; +\\infty[$, on utilise la dérivée de l'inverse ou du quotient.\nLe résultat donné par la leçon est $V'(x) = -\\frac{2}{x^2}$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q6",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $V(x) = \\frac{2}{x}$ sur $]1 ; +\\infty[$ ?",
            "options": [
              "$-\\frac{2}{x^2}$",
              "$\\frac{2}{x^2}$",
              "$-\\frac{1}{x^2}$",
              "$\\frac{1}{2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On dérive $2 \\times \\frac{1}{x}$ : la dérivée est $2 \\times \\left(-\\frac{1}{x^2}\\right) = -\\frac{2}{x^2}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q1",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de la somme $u + v$ de deux fonctions dérivables sur $I$ ?",
          "options": [
            "$u' + v'$",
            "$u' \\times v'$",
            "$u + v'$",
            "$\\frac{u'}{v'}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après le tableau des opérations, $(u + v)' = u' + v'$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q2",
          "type": "mcq",
          "prompt": "Quelle est la dérivée du produit $u v$ ?",
          "options": [
            "$u'v'$",
            "$u'v - uv'$",
            "$u'v + uv'$",
            "$uv$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "D'après le tableau des opérations, $(uv)' = u'v + uv'$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q3",
          "type": "mcq",
          "prompt": "Quelle est la dérivée du quotient $\\frac{u}{v}$ là où $v$ ne s'annule pas ?",
          "options": [
            "$\\frac{u'v + uv'}{v^2}$",
            "$\\frac{u'v - uv'}{v^2}$",
            "$\\frac{u'}{v'}$",
            "$\\frac{u - v}{v^2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D'après le tableau des opérations, le numérateur est $u'v - uv'$ et le dénominateur est $v^2$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q4",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de la fonction $x \\mapsto \\sqrt{2} \\, x$ sur $\\mathbb{R}$ ?",
          "options": [
            "$x \\mapsto 0$",
            "$x \\mapsto \\frac{1}{\\sqrt{2}}$",
            "$x \\mapsto 2$",
            "$x \\mapsto \\sqrt{2}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est une fonction affine de coefficient $a = \\sqrt{2}$ : sa dérivée est la constante $\\sqrt{2}$, comme dans l'exercice de fixation."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q5",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $Q(x) = x + x^3$ sur $\\mathbb{R}$ ?",
          "options": [
            "$1 + x^2$",
            "$3x^2$",
            "$1 + 3x^2$",
            "$4x^3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On dérive la somme terme à terme : $Q'(x) = 1 + 3x^2$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p03_q6",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $V(x) = \\frac{2}{x}$ sur $]1 ; +\\infty[$ ?",
          "options": [
            "$-\\frac{2}{x^2}$",
            "$\\frac{2}{x^2}$",
            "$-\\frac{1}{x^2}$",
            "$\\frac{1}{2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On dérive $2 \\times \\frac{1}{x}$ : la dérivée est $2 \\times \\left(-\\frac{1}{x^2}\\right) = -\\frac{2}{x^2}$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04",
      "order": 4,
      "title": "Équation de la tangente à une courbe",
      "summary": "Déterminer une équation de la tangente à une courbe en un point à l'aide du nombre dérivé.",
      "conceptExplanation": "Soient $f$ une fonction, $(C_f)$ sa courbe représentative et $A$ un point de $(C_f)$ d'abscisse $a$. Lorsque $f$ est dérivable en $a$, une équation de la tangente à $(C_f)$ au point $A$ d'abscisse $a$ est $y = f'(a)(x - a) + f(a)$.\nCas particulier : lorsque $f'(a) = 0$, la tangente au point d'abscisse $a$ est parallèle à l'axe des abscisses ; on dit que $(C_f)$ admet une tangente horizontale au point d'abscisse $a$.\nExemple : pour $f(x) = -x^3 + 1$, $f'(1) = -3$ et $f(1) = 0$, donc la tangente au point d'abscisse $1$ a pour équation $y = -3x + 3$.",
      "keyRule": "Tangente en $a$ : on a besoin de deux nombres seulement, $f'(a)$ et $f(a)$.",
      "formulas": [
        {
          "name": "Équation de la tangente",
          "formula": "y = f'(a)(x - a) + f(a)",
          "note": "Valable lorsque $f$ est dérivable en $a$."
        }
      ],
      "workedExample": {
        "title": "La tangente de $f(x) = -x^3 + 1$ en $1$ (exercice de fixation)",
        "statement": "On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = -x^3 + 1$. Justifie que $f'(1) = -3$, puis détermine une équation de la tangente à sa courbe au point d'abscisse $1$.",
        "methodSteps": [
          "On dérive : $f'(x) = -3x^2$, donc $f'(1) = -3$.",
          "On calcule l'image : $f(1) = 0$.",
          "On applique la formule : $y = -3(x - 1) + 0$."
        ],
        "conclusion": "Une équation de la tangente est $y = -3x + 3$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'équation de la tangente",
          "stepTheme": "L'équation de la tangente",
          "stepBadge": "L'équation de la tangente",
          "paragraphText": "• Propriété : lorsque $f$ est dérivable en $a$, une équation de la tangente à sa courbe au point d'abscisse $a$ est $y = f'(a)(x - a) + f(a)$.\nIl faut donc connaître le nombre dérivé et l'image du point.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q1",
            "type": "mcq",
            "prompt": "Quelle est une équation de la tangente à la courbe de $f$ au point d'abscisse $a$ ?",
            "options": [
              "$y = f(a)(x - a) + f'(a)$",
              "$y = f'(x)(a - x) + f(x)$",
              "$y = f'(a) + f(a)$",
              "$y = f'(a)(x - a) + f(a)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La propriété de la leçon donne $y = f'(a)(x - a) + f(a)$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le cas de la tangente horizontale",
          "stepTheme": "Le cas de la tangente horizontale",
          "stepBadge": "Le cas de la tangente horizontale",
          "paragraphText": "• Cas particulier de la leçon : lorsque $f'(a) = 0$, la tangente au point d'abscisse $a$ est parallèle à l'axe des abscisses.\nOn dit alors que la courbe admet une tangente horizontale au point d'abscisse $a$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q2",
            "type": "mcq",
            "prompt": "Que signifie $f'(a) = 0$ pour la tangente au point d'abscisse $a$ ?",
            "options": [
              "Elle est verticale",
              "Elle est horizontale",
              "Elle n'existe pas",
              "Elle passe par l'origine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un coefficient directeur nul donne une tangente parallèle à l'axe des abscisses : une tangente horizontale."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calculer d'abord le nombre dérivé",
          "stepTheme": "Calculer d'abord le nombre dérivé",
          "stepBadge": "Calculer d'abord le nombre dérivé",
          "paragraphText": "• Exercice de fixation : pour $f(x) = -x^3 + 1$, on calcule d'abord la fonction dérivée.\nOn obtient $f'(x) = -3x^2$, d'où le nombre dérivé en $1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q3",
            "type": "mcq",
            "prompt": "Pour $f(x) = -x^3 + 1$, que vaut $f'(1)$ ?",
            "options": [
              "$-3$",
              "$3$",
              "$0$",
              "$-1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On a $f'(x) = -3x^2$, donc $f'(1) = -3 \\times 1 = -3$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Écrire l'équation complète",
          "stepTheme": "Écrire l'équation complète",
          "stepBadge": "Écrire l'équation complète",
          "paragraphText": "• Suite de l'exercice : avec $f'(1) = -3$ et $f(1) = 0$, la formule de la tangente donne l'équation cherchée.\nOn remplace $a$ par $1$ dans $y = f'(a)(x - a) + f(a)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q4",
            "type": "mcq",
            "prompt": "Quelle est une équation de la tangente à la courbe de $f(x) = -x^3 + 1$ au point d'abscisse $1$ ?",
            "options": [
              "$y = -3x - 3$",
              "$y = 3x + 3$",
              "$y = -3x + 3$",
              "$y = -x + 1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On remplace : $y = -3(x - 1) + 0$, soit $y = -3x + 3$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre f de a et f prime de a",
          "stepTheme": "Ne pas confondre f de a et f prime de a",
          "stepBadge": "Ne pas confondre f de a et f prime de a",
          "paragraphText": "• Piège : dans la formule de la tangente, $f'(a)$ multiplie $(x - a)$ et $f(a)$ s'ajoute à la fin.\nInverser les deux nombres donne une droite qui n'est pas la tangente.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q5",
            "type": "mcq",
            "prompt": "Dans l'équation $y = f'(a)(x - a) + f(a)$, quel nombre multiplie $(x - a)$ ?",
            "options": [
              "$f(a)$",
              "$f'(a)$",
              "$a$",
              "$x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le nombre dérivé $f'(a)$, coefficient directeur de la tangente, qui multiplie $(x - a)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une tangente en zéro pour un polynôme",
          "stepTheme": "Une tangente en zéro pour un polynôme",
          "stepBadge": "Une tangente en zéro pour un polynôme",
          "paragraphText": "• Exercice de renforcement : pour $h(x) = x^3 - 3x + 5$, on a $h'(x) = 3x^2 - 3$, donc $h'(0) = -3$ et $h(0) = 5$.\nLa tangente au point d'abscisse $0$ s'écrit alors avec la formule de la leçon.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q6",
            "type": "mcq",
            "prompt": "Quelle est une équation de la tangente à la courbe de $h(x) = x^3 - 3x + 5$ au point d'abscisse $0$ ?",
            "options": [
              "$y = 3x + 5$",
              "$y = -3x - 5$",
              "$y = 5$",
              "$y = -3x + 5$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On remplace : $y = h'(0)(x - 0) + h(0) = -3x + 5$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q1",
          "type": "mcq",
          "prompt": "Quelle est une équation de la tangente à la courbe de $f$ au point d'abscisse $a$ ?",
          "options": [
            "$y = f(a)(x - a) + f'(a)$",
            "$y = f'(x)(a - x) + f(x)$",
            "$y = f'(a) + f(a)$",
            "$y = f'(a)(x - a) + f(a)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La propriété de la leçon donne $y = f'(a)(x - a) + f(a)$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q2",
          "type": "mcq",
          "prompt": "Que signifie $f'(a) = 0$ pour la tangente au point d'abscisse $a$ ?",
          "options": [
            "Elle est verticale",
            "Elle est horizontale",
            "Elle n'existe pas",
            "Elle passe par l'origine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un coefficient directeur nul donne une tangente parallèle à l'axe des abscisses : une tangente horizontale."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q3",
          "type": "mcq",
          "prompt": "Pour $f(x) = -x^3 + 1$, que vaut $f'(1)$ ?",
          "options": [
            "$-3$",
            "$3$",
            "$0$",
            "$-1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On a $f'(x) = -3x^2$, donc $f'(1) = -3 \\times 1 = -3$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q4",
          "type": "mcq",
          "prompt": "Quelle est une équation de la tangente à la courbe de $f(x) = -x^3 + 1$ au point d'abscisse $1$ ?",
          "options": [
            "$y = -3x - 3$",
            "$y = 3x + 3$",
            "$y = -3x + 3$",
            "$y = -x + 1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On remplace : $y = -3(x - 1) + 0$, soit $y = -3x + 3$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q5",
          "type": "mcq",
          "prompt": "Dans l'équation $y = f'(a)(x - a) + f(a)$, quel nombre multiplie $(x - a)$ ?",
          "options": [
            "$f(a)$",
            "$f'(a)$",
            "$a$",
            "$x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le nombre dérivé $f'(a)$, coefficient directeur de la tangente, qui multiplie $(x - a)$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p04_q6",
          "type": "mcq",
          "prompt": "Quelle est une équation de la tangente à la courbe de $h(x) = x^3 - 3x + 5$ au point d'abscisse $0$ ?",
          "options": [
            "$y = 3x + 5$",
            "$y = -3x - 5$",
            "$y = 5$",
            "$y = -3x + 5$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On remplace : $y = h'(0)(x - 0) + h(0) = -3x + 5$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05",
      "order": 5,
      "title": "Sens de variation d'une fonction",
      "summary": "Déduire le sens de variation d'une fonction du signe de sa dérivée et dresser son tableau de variation.",
      "conceptExplanation": "Soit $f$ une fonction définie et dérivable sur un intervalle ouvert $I$ de $\\mathbb{R}$. Si pour tout $x \\in I$, $f'(x) \\geq 0$, alors $f$ est croissante sur $I$. Si pour tout $x \\in I$, $f'(x) \\leq 0$, alors $f$ est décroissante sur $I$. Si pour tout $x \\in I$, $f'(x) = 0$, alors $f$ est constante sur $I$.\nLe tableau de variation résume ces résultats : la flèche monte pour une fonction croissante et descend pour une fonction décroissante.\nApplication : pour le bénéfice $B(x) = -2x^2 + 60x - 400$, $B'(x) = -4x + 60$ est positive sur $[0 ; 15]$ et négative sur $[15 ; 30]$ : $B$ atteint son maximum en $15$.",
      "keyRule": "Le signe de la dérivée donne le sens de variation : positif, ça monte ; négatif, ça descend ; nul partout, c'est constant.",
      "formulas": [],
      "workedExample": {
        "title": "Le bénéfice maximal de l'entreprise (situation complexe)",
        "statement": "Le bénéfice journalier d'une entreprise est modélisé par $B(x) = -2x^2 + 60x - 400$ sur $[0 ; 30]$. Détermine le nombre de pièces à produire pour un bénéfice maximal.",
        "methodSteps": [
          "On calcule la dérivée : $B'(x) = -4x + 60$.",
          "On étudie son signe : elle est positive avant $15$ et négative après $15$.",
          "La fonction $B$ est croissante sur $[0 ; 15]$ puis décroissante sur $[15 ; 30]$, avec $B(15) = 50$."
        ],
        "conclusion": "La fonction $B$ atteint son maximum en $15$ : l'entreprise doit produire $15$ pièces par jour."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Dérivée positive et croissance",
          "stepTheme": "Dérivée positive et croissance",
          "stepBadge": "Dérivée positive et croissance",
          "paragraphText": "• Propriété : soit $f$ une fonction définie et dérivable sur un intervalle ouvert $I$ ; si pour tout $x \\in I$, $f'(x) \\geq 0$, alors $f$ est croissante sur $I$.\nLe signe de la dérivée commande donc le sens de variation.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q1",
            "type": "mcq",
            "prompt": "Si $f'(x) \\geq 0$ pour tout $x$ d'un intervalle $I$, que peut-on dire de $f$ sur $I$ ?",
            "options": [
              "Elle est décroissante",
              "Elle est constante",
              "Elle est croissante",
              "Elle admet un extremum"
            ],
            "correctAnswerIndex": 2,
            "explanation": "D'après la propriété de la leçon, une dérivée positive ou nulle donne une fonction croissante."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Dérivée négative et décroissance",
          "stepTheme": "Dérivée négative et décroissance",
          "stepBadge": "Dérivée négative et décroissance",
          "paragraphText": "• Propriété : si pour tout $x \\in I$, $f'(x) \\leq 0$, alors $f$ est décroissante sur $I$.\nEt si $f'(x) = 0$ pour tout $x \\in I$, alors $f$ est constante sur $I$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q2",
            "type": "mcq",
            "prompt": "Si $f'(x) = 0$ pour tout $x$ d'un intervalle $I$, que peut-on dire de $f$ sur $I$ ?",
            "options": [
              "Elle est constante",
              "Elle est croissante",
              "Elle est décroissante",
              "Elle change de sens"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D'après la propriété de la leçon, une dérivée identiquement nulle donne une fonction constante."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Lire un sens de variation donné",
          "stepTheme": "Lire un sens de variation donné",
          "stepBadge": "Lire un sens de variation donné",
          "paragraphText": "• Exercice de fixation : une fonction $g$ dérivable sur $[-1 ; 3]$ vérifie $g'(x) \\leq 0$ sur $[-1 ; 1]$ et $g'(x) \\geq 0$ sur $[1 ; 3]$.\nOn en déduit le sens de variation de $g$ sur chaque partie de l'intervalle.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q3",
            "type": "mcq",
            "prompt": "Avec $g'(x) \\leq 0$ sur $[-1 ; 1]$, quel est le sens de variation de $g$ sur $[-1 ; 1]$ ?",
            "options": [
              "Croissante",
              "Constante",
              "D'abord croissante puis décroissante",
              "Décroissante"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Une dérivée négative ou nulle sur l'intervalle donne une fonction décroissante."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le tableau de variation",
          "stepTheme": "Le tableau de variation",
          "stepBadge": "Le tableau de variation",
          "paragraphText": "• Le tableau de variation résume l'étude : une flèche qui monte indique que la fonction est croissante sur l'intervalle, une flèche qui descend indique qu'elle est décroissante.\nOn y fait figurer les valeurs de $x$, le signe de la dérivée et les images aux bornes et aux points remarquables.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q4",
            "type": "mcq",
            "prompt": "Dans un tableau de variation, que signifie une flèche qui monte sur un intervalle ?",
            "options": [
              "La dérivée y est négative",
              "La fonction y est croissante",
              "La fonction y est constante",
              "La dérivée y est nulle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La remarque de la leçon : la flèche qui monte indique une fonction croissante sur l'intervalle."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Étudier le bénéfice de l'entreprise",
          "stepTheme": "Étudier le bénéfice de l'entreprise",
          "stepBadge": "Étudier le bénéfice de l'entreprise",
          "paragraphText": "• Situation complexe de la leçon : le bénéfice est modélisé par $B(x) = -2x^2 + 60x - 400$ sur $[0 ; 30]$.\nSa dérivée est $B'(x) = -4x + 60$, qui s'annule pour $x = 15$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q5",
            "type": "mcq",
            "prompt": "Pour $B(x) = -2x^2 + 60x - 400$, en quel point la dérivée $B'(x) = -4x + 60$ s'annule-t-elle ?",
            "options": [
              "$x = 15$",
              "$x = 30$",
              "$x = 60$",
              "$x = 0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On résout $-4x + 60 = 0$, ce qui donne $x = 15$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le sens de variation du bénéfice",
          "stepTheme": "Le sens de variation du bénéfice",
          "stepBadge": "Le sens de variation du bénéfice",
          "paragraphText": "• Suite de la situation : $B'(x) \\geq 0$ sur $[0 ; 15]$ et $B'(x) \\leq 0$ sur $[15 ; 30]$.\nLa fonction $B$ est donc croissante puis décroissante : elle atteint son maximum en $15$, et $B(15) = 50$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q6",
            "type": "mcq",
            "prompt": "Pour réaliser un bénéfice maximal, combien de pièces l'entreprise doit-elle produire par jour ?",
            "options": [
              "$30$ pièces",
              "$60$ pièces",
              "$15$ pièces",
              "$50$ pièces"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La fonction $B$ atteint son maximum au point d'abscisse $15$ : il faut produire $15$ pièces."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q1",
          "type": "mcq",
          "prompt": "Si $f'(x) \\geq 0$ pour tout $x$ d'un intervalle $I$, que peut-on dire de $f$ sur $I$ ?",
          "options": [
            "Elle est décroissante",
            "Elle est constante",
            "Elle est croissante",
            "Elle admet un extremum"
          ],
          "correctAnswerIndex": 2,
          "explanation": "D'après la propriété de la leçon, une dérivée positive ou nulle donne une fonction croissante."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q2",
          "type": "mcq",
          "prompt": "Si $f'(x) = 0$ pour tout $x$ d'un intervalle $I$, que peut-on dire de $f$ sur $I$ ?",
          "options": [
            "Elle est constante",
            "Elle est croissante",
            "Elle est décroissante",
            "Elle change de sens"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après la propriété de la leçon, une dérivée identiquement nulle donne une fonction constante."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q3",
          "type": "mcq",
          "prompt": "Avec $g'(x) \\leq 0$ sur $[-1 ; 1]$, quel est le sens de variation de $g$ sur $[-1 ; 1]$ ?",
          "options": [
            "Croissante",
            "Constante",
            "D'abord croissante puis décroissante",
            "Décroissante"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Une dérivée négative ou nulle sur l'intervalle donne une fonction décroissante."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q4",
          "type": "mcq",
          "prompt": "Dans un tableau de variation, que signifie une flèche qui monte sur un intervalle ?",
          "options": [
            "La dérivée y est négative",
            "La fonction y est croissante",
            "La fonction y est constante",
            "La dérivée y est nulle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La remarque de la leçon : la flèche qui monte indique une fonction croissante sur l'intervalle."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q5",
          "type": "mcq",
          "prompt": "Pour $B(x) = -2x^2 + 60x - 400$, en quel point la dérivée $B'(x) = -4x + 60$ s'annule-t-elle ?",
          "options": [
            "$x = 15$",
            "$x = 30$",
            "$x = 60$",
            "$x = 0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On résout $-4x + 60 = 0$, ce qui donne $x = 15$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p05_q6",
          "type": "mcq",
          "prompt": "Pour réaliser un bénéfice maximal, combien de pièces l'entreprise doit-elle produire par jour ?",
          "options": [
            "$30$ pièces",
            "$60$ pièces",
            "$15$ pièces",
            "$50$ pièces"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La fonction $B$ atteint son maximum au point d'abscisse $15$ : il faut produire $15$ pièces."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06",
      "order": 6,
      "title": "Extremum relatif d'une fonction",
      "summary": "Reconnaître et justifier un extremum relatif à l'aide de l'annulation et du changement de signe de la dérivée.",
      "conceptExplanation": "Soit $f$ une fonction dérivable sur un intervalle $]a ; b[$ et $x_0$ un élément de $]a ; b[$. Si $f'$ s'annule en $x_0$ et change de signe, alors $f$ admet un extremum relatif en $x_0$.\nSi la dérivée passe du positif au négatif, l'extremum est un maximum relatif ; si elle passe du négatif au positif, c'est un minimum relatif. Un maximum relatif ou un minimum relatif est appelé simplement un extremum relatif.\nAttention : si la dérivée s'annule sans changer de signe, il n'y a pas d'extremum relatif, comme le montre un exercice de renforcement de la leçon.",
      "keyRule": "Extremum relatif égale dérivée qui s'annule ET qui change de signe : les deux conditions ensemble.",
      "formulas": [],
      "workedExample": {
        "title": "Un minimum lu sur un tableau (exercice de fixation)",
        "statement": "On donne le tableau de variation d'une fonction $f$ sur $]-4 ; 3[$, où la dérivée change de signe en $1$ et la fonction y vaut $-5$. Précise la nature de l'extremum, sa valeur et le point où il existe.",
        "methodSteps": [
          "On repère dans le tableau le point où la dérivée s'annule en changeant de signe : $x = 1$.",
          "La fonction décroît puis croît autour de ce point.",
          "L'image en ce point est $-5$."
        ],
        "conclusion": "La fonction $f$ admet un minimum relatif égal à $-5$ en $1$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La propriété de l'extremum relatif",
          "stepTheme": "La propriété de l'extremum relatif",
          "stepBadge": "La propriété de l'extremum relatif",
          "paragraphText": "• Propriété : soit $f$ une fonction dérivable sur un intervalle $]a ; b[$ et $x_0$ un élément de cet intervalle ; si $f'$ s'annule en $x_0$ et change de signe, alors $f$ admet un extremum relatif en $x_0$.\nUn maximum relatif ou un minimum relatif est appelé simplement un extremum relatif.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q1",
            "type": "mcq",
            "prompt": "Quelles sont les deux conditions pour qu'une fonction dérivable admette un extremum relatif en $x_0$ ?",
            "options": [
              "$f$ s'annule en $x_0$ et change de signe",
              "$f'$ s'annule en $x_0$ et change de signe",
              "$f'$ est positive partout",
              "$f(x_0) = 0$ seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La propriété porte sur la dérivée : elle doit s'annuler en $x_0$ et changer de signe."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Maximum ou minimum relatif",
          "stepTheme": "Maximum ou minimum relatif",
          "stepBadge": "Maximum ou minimum relatif",
          "paragraphText": "• Si la dérivée passe du positif au négatif, la fonction monte puis descend : l'extremum est un maximum relatif.\nSi elle passe du négatif au positif, la fonction descend puis monte : l'extremum est un minimum relatif.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q2",
            "type": "mcq",
            "prompt": "Si $f'$ s'annule en $x_0$ en passant du négatif au positif, l'extremum en $x_0$ est :",
            "options": [
              "Un maximum relatif",
              "Ni l'un ni l'autre",
              "Une valeur interdite",
              "Un minimum relatif"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La fonction décroît puis croît : elle admet un minimum relatif en $x_0$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Lire un extremum sur un tableau",
          "stepTheme": "Lire un extremum sur un tableau",
          "stepBadge": "Lire un extremum sur un tableau",
          "paragraphText": "• Exercice de fixation : d'après son tableau de variation, une fonction $f$ admet sur $]-4 ; 3[$ un extremum relatif.\nLa lecture du tableau précise sa nature, sa valeur et le point où il est atteint.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q3",
            "type": "mcq",
            "prompt": "D'après l'exercice de fixation, quel extremum la fonction admet-elle sur $]-4 ; 3[$ ?",
            "options": [
              "Un maximum relatif égal à $-5$ en $1$",
              "Un minimum relatif égal à $1$ en $-5$",
              "Un minimum relatif égal à $-5$ en $1$",
              "Aucun extremum"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé de la leçon lit un minimum relatif égal à $-5$, atteint en $1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "S'annuler ne suffit pas",
          "stepTheme": "S'annuler ne suffit pas",
          "stepBadge": "S'annuler ne suffit pas",
          "paragraphText": "• Piège de l'exercice de renforcement : dans un tableau de variation, la dérivée $g'$ s'annule en $1$ sans changer de signe.\nLa valeur $5$ lue en ce point n'est donc pas un extremum relatif de $g$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q4",
            "type": "mcq",
            "prompt": "Si $g'$ s'annule en un point sans changer de signe, la fonction $g$ y admet-elle un extremum relatif ?",
            "options": [
              "Non, pas d'extremum relatif",
              "Oui, un maximum",
              "Oui, un minimum",
              "Oui, seulement si la valeur est $5$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La propriété exige le changement de signe de la dérivée : sans lui, pas d'extremum relatif."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Justifier un extremum par le tableau",
          "stepTheme": "Justifier un extremum par le tableau",
          "stepBadge": "Justifier un extremum par le tableau",
          "paragraphText": "• Exercice d'application : dans le tableau de variation d'une fonction $g$, la dérivée $g'$ s'annule en $0$ en changeant de signe, de négatif à positif.\nOn peut donc justifier que $g$ admet un extremum relatif en $0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q5",
            "type": "mcq",
            "prompt": "Dans le tableau de l'exercice d'application, pourquoi $g$ admet-elle un extremum relatif en $0$ ?",
            "options": [
              "Parce que $g(0) = -1$",
              "Parce que $g'$ s'annule en $0$ sans changer de signe",
              "Parce que $0$ est le milieu de l'intervalle",
              "Parce que $g'$ s'annule en $0$ et change de signe"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est exactement l'hypothèse de la propriété : annulation et changement de signe de la dérivée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un extremum en moins 1",
          "stepTheme": "Un extremum en moins 1",
          "stepBadge": "Un extremum en moins 1",
          "paragraphText": "• Exercice de renforcement : dans le tableau d'une fonction $g$ sur $[-3 ; 4]$, la dérivée s'annule en $-1$ en passant du négatif au positif.\nLa fonction $g$ admet donc un extremum relatif en $-1$, alors qu'en $1$ la dérivée s'annule sans changer de signe.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q6",
            "type": "mcq",
            "prompt": "Dans cet exercice, en quel point la fonction $g$ admet-elle un extremum relatif ?",
            "options": [
              "En $1$",
              "En $-1$",
              "En $4$",
              "En aucun point"
            ],
            "correctAnswerIndex": 1,
            "explanation": "En $-1$, la dérivée s'annule et change de signe ; en $1$, elle s'annule sans changer de signe."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q1",
          "type": "mcq",
          "prompt": "Quelles sont les deux conditions pour qu'une fonction dérivable admette un extremum relatif en $x_0$ ?",
          "options": [
            "$f$ s'annule en $x_0$ et change de signe",
            "$f'$ s'annule en $x_0$ et change de signe",
            "$f'$ est positive partout",
            "$f(x_0) = 0$ seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La propriété porte sur la dérivée : elle doit s'annuler en $x_0$ et changer de signe."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q2",
          "type": "mcq",
          "prompt": "Si $f'$ s'annule en $x_0$ en passant du négatif au positif, l'extremum en $x_0$ est :",
          "options": [
            "Un maximum relatif",
            "Ni l'un ni l'autre",
            "Une valeur interdite",
            "Un minimum relatif"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La fonction décroît puis croît : elle admet un minimum relatif en $x_0$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q3",
          "type": "mcq",
          "prompt": "D'après l'exercice de fixation, quel extremum la fonction admet-elle sur $]-4 ; 3[$ ?",
          "options": [
            "Un maximum relatif égal à $-5$ en $1$",
            "Un minimum relatif égal à $1$ en $-5$",
            "Un minimum relatif égal à $-5$ en $1$",
            "Aucun extremum"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé de la leçon lit un minimum relatif égal à $-5$, atteint en $1$."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q4",
          "type": "mcq",
          "prompt": "Si $g'$ s'annule en un point sans changer de signe, la fonction $g$ y admet-elle un extremum relatif ?",
          "options": [
            "Non, pas d'extremum relatif",
            "Oui, un maximum",
            "Oui, un minimum",
            "Oui, seulement si la valeur est $5$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La propriété exige le changement de signe de la dérivée : sans lui, pas d'extremum relatif."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q5",
          "type": "mcq",
          "prompt": "Dans le tableau de l'exercice d'application, pourquoi $g$ admet-elle un extremum relatif en $0$ ?",
          "options": [
            "Parce que $g(0) = -1$",
            "Parce que $g'$ s'annule en $0$ sans changer de signe",
            "Parce que $0$ est le milieu de l'intervalle",
            "Parce que $g'$ s'annule en $0$ et change de signe"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est exactement l'hypothèse de la propriété : annulation et changement de signe de la dérivée."
        },
        {
          "id": "premiere_a1_maths_numerique_l04_derivabilite_etude_fonctions_p06_q6",
          "type": "mcq",
          "prompt": "Dans cet exercice, en quel point la fonction $g$ admet-elle un extremum relatif ?",
          "options": [
            "En $1$",
            "En $-1$",
            "En $4$",
            "En aucun point"
          ],
          "correctAnswerIndex": 1,
          "explanation": "En $-1$, la dérivée s'annule et change de signe ; en $1$, elle s'annule sans changer de signe."
        }
      ]
    }
  ]
};
