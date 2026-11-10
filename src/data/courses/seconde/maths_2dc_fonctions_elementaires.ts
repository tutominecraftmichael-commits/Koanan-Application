import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Maths_2C_L13_Etude_de_fonctions_élémentaires.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_2DC_NUM_L13_FONCTIONS_ELEMENTAIRES: CurriculumChapter = {
  "id": "seconde_c_maths_numerique_l13_fonctions_elementaires",
  "subjectId": "maths",
  "gradeLevel": "seconde_c",
  "alsoForGrades": [],
  "order": 13,
  "title": "Leçon 13 : Étude de fonctions élémentaires",
  "summary": "Fonctions affines par intervalles, partie entière, fonctions carré, valeur absolue, racine carrée, inverse et cube, et un problème de forfaits.",
  "officialVolumeHours": 12,
  "contentVersion": 2,
  "source": "Maths_2C_L13_Etude_de_fonctions_élémentaires.pdf",
  "points": [
    {
      "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p01",
      "order": 1,
      "title": "Fonctions affines par intervalles",
      "summary": "Une fonction faite de morceaux de droites.",
      "conceptExplanation": "Une fonction est affine par intervalles si, sur chacun de plusieurs intervalles disjoints, elle est égale à une fonction affine $x\\mapsto ax+b$.\n\nExemples :\n- $f(x)=3x-2$ si $x\\le4$ et $f(x)=1-x$ si $x>4$ : affine par intervalles ;\n- $g(x)=x^2+3$ si $x\\le0$ et $g(x)=5x+7$ si $x>0$ : non, car $x^2+3$ n'est pas affine ;\n- $i(x)=|7x+11|$ : oui, car elle vaut $7x+11$ ou $-(7x+11)$ selon l'intervalle.\n\nSa courbe est une réunion de segments et de demi-droites.\n\nExemple : $f(x)=|3x-6|$. On a $3x-6=0$ pour $x=2$.\n- Pour $x\\le2$ : $3x-6\\le0$, donc $f(x)=-3x+6$.\n- Pour $x\\ge2$ : $f(x)=3x-6$.\nLa courbe est un V de sommet $(2\\,;0)$.",
      "keyRule": "Affine par intervalles : un morceau $ax+b$ sur chaque intervalle. Courbe : segments et demi-droites. $|ax+b|$ se découpe là où $ax+b=0$.",
      "formulas": [],
      "workedExample": {
        "title": "Découper une valeur absolue",
        "statement": "Écris $f(x)=|3x-6|$ sans valeur absolue.",
        "methodSteps": [
          "$3x-6=0$ ⇔ $x=2$ ; $3x-6$ est négatif avant $2$ et positif après.",
          "Pour $x\\le2$ : $f(x)=-(3x-6)=-3x+6$ ; pour $x\\ge2$ : $f(x)=3x-6$."
        ],
        "conclusion": "$f$ est affine par intervalles : $f(x)=-3x+6$ sur $]-\\infty;2]$ et $f(x)=3x-6$ sur $[2;+\\infty[$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Reconnaître",
          "stepTheme": "Reconnaître",
          "stepBadge": "Reconnaître",
          "paragraphText": "Sur chaque intervalle, l'expression doit être de la forme $ax+b$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p01_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces fonctions est affine par intervalles ?",
            "options": [
              "$g(x)=x^2+3$ si $x\\le0$ ; $g(x)=5x+7$ si $x>0$",
              "$k(x)=x^2-11$ pour tout réel $x$",
              "$f(x)=3x-2$ si $x\\le4$ ; $f(x)=1-x$ si $x>4$",
              "$l(x)=x+13$ si $x<1$ ; $l(x)=\\sqrt x$ si $x\\ge1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les deux morceaux de $f$ sont affines ; $g$, $k$ et $l$ contiennent $x^2$ ou $\\sqrt x$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Un morceau qui ne va pas",
          "stepTheme": "Un morceau qui ne va pas",
          "stepBadge": "Un morceau qui ne va pas",
          "paragraphText": "Il suffit d'un seul morceau non affine pour que la fonction ne soit pas affine par intervalles.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p01_q2",
            "type": "mcq",
            "prompt": "Pourquoi $g$ ($x^2+3$ si $x\\le0$ ; $5x+7$ si $x>0$) n'est-elle pas affine par intervalles ?",
            "options": [
              "Le morceau $x^2+3$ n'est pas affine",
              "Le morceau $5x+7$ n'est pas affine",
              "Elle n'est pas définie en $0$",
              "Elle a trop de morceaux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$x^2+3$ contient un carré."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'allure de la courbe",
          "stepTheme": "L'allure de la courbe",
          "stepBadge": "L'allure de la courbe",
          "paragraphText": "Chaque morceau affine donne un bout de droite.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p01_q3",
            "type": "mcq",
            "prompt": "La courbe d'une fonction affine par intervalles est formée de :",
            "options": [
              "arcs de parabole",
              "branches d'hyperbole",
              "arcs de cercle",
              "segments et demi-droites"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Une fonction affine se représente par une droite ; on n'en garde qu'un morceau."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Où découper",
          "stepTheme": "Où découper",
          "stepBadge": "Où découper",
          "paragraphText": "On découpe $|3x-6|$ là où $3x-6$ s'annule.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p01_q4",
            "type": "mcq",
            "prompt": "Pour quelle valeur de $x$ l'expression $3x-6$ s'annule-t-elle ?",
            "options": [
              "$-2$",
              "$2$",
              "$6$",
              "$3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$3x-6=0$ ⇔ $x=2$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le morceau de gauche",
          "stepTheme": "Le morceau de gauche",
          "stepBadge": "Le morceau de gauche",
          "paragraphText": "Pour $x\\le2$, $3x-6\\le0$ : $|3x-6|=-(3x-6)$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p01_q5",
            "type": "mcq",
            "prompt": "Pour $x\\le2$, $|3x-6|$ est égal à :",
            "options": [
              "$3x-6$",
              "$-3x+6$",
              "$3x+6$",
              "$-3x-6$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La valeur absolue d'un nombre négatif est son opposé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une valeur",
          "stepTheme": "Une valeur",
          "stepBadge": "Une valeur",
          "paragraphText": "On peut calculer directement : $|3\\times0-6|=|-6|$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p01_q6",
            "type": "mcq",
            "prompt": "Combien vaut $|3x-6|$ pour $x=0$ ?",
            "options": [
              "$-6$",
              "$0$",
              "$3$",
              "$6$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$|-6|=6$. On retrouve $-3\\times0+6=6$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Avec une valeur absolue",
          "stepTheme": "Avec une valeur absolue",
          "stepBadge": "Avec une valeur absolue",
          "paragraphText": "$i(x)=|7x+11|$ vaut $7x+11$ quand $7x+11\\ge0$, et $-7x-11$ sinon.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p01_q7",
            "type": "mcq",
            "prompt": "La fonction $i(x)=|7x+11|$ est-elle affine par intervalles ?",
            "options": [
              "Oui : $7x+11$ ou $-7x-11$ selon l'intervalle",
              "Non : une valeur absolue n'est jamais affine",
              "Non : elle n'existe que sur $\\mathbb R_+$",
              "Oui, mais seulement pour $x>0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On découpe en $x=-\\frac{11}{7}$ : deux morceaux affines."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p01_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces fonctions est affine par intervalles ?",
          "options": [
            "$g(x)=x^2+3$ si $x\\le0$ ; $g(x)=5x+7$ si $x>0$",
            "$k(x)=x^2-11$ pour tout réel $x$",
            "$f(x)=3x-2$ si $x\\le4$ ; $f(x)=1-x$ si $x>4$",
            "$l(x)=x+13$ si $x<1$ ; $l(x)=\\sqrt x$ si $x\\ge1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les deux morceaux de $f$ sont affines ; $g$, $k$ et $l$ contiennent $x^2$ ou $\\sqrt x$."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p01_q2",
          "type": "mcq",
          "prompt": "Pourquoi $g$ ($x^2+3$ si $x\\le0$ ; $5x+7$ si $x>0$) n'est-elle pas affine par intervalles ?",
          "options": [
            "Le morceau $x^2+3$ n'est pas affine",
            "Le morceau $5x+7$ n'est pas affine",
            "Elle n'est pas définie en $0$",
            "Elle a trop de morceaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$x^2+3$ contient un carré."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p01_q3",
          "type": "mcq",
          "prompt": "La courbe d'une fonction affine par intervalles est formée de :",
          "options": [
            "arcs de parabole",
            "branches d'hyperbole",
            "arcs de cercle",
            "segments et demi-droites"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Une fonction affine se représente par une droite ; on n'en garde qu'un morceau."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p01_q4",
          "type": "mcq",
          "prompt": "Pour quelle valeur de $x$ l'expression $3x-6$ s'annule-t-elle ?",
          "options": [
            "$-2$",
            "$2$",
            "$6$",
            "$3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$3x-6=0$ ⇔ $x=2$."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p01_q5",
          "type": "mcq",
          "prompt": "Pour $x\\le2$, $|3x-6|$ est égal à :",
          "options": [
            "$3x-6$",
            "$-3x+6$",
            "$3x+6$",
            "$-3x-6$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La valeur absolue d'un nombre négatif est son opposé."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p01_q6",
          "type": "mcq",
          "prompt": "Combien vaut $|3x-6|$ pour $x=0$ ?",
          "options": [
            "$-6$",
            "$0$",
            "$3$",
            "$6$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$|-6|=6$. On retrouve $-3\\times0+6=6$."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p01_q7",
          "type": "mcq",
          "prompt": "La fonction $i(x)=|7x+11|$ est-elle affine par intervalles ?",
          "options": [
            "Oui : $7x+11$ ou $-7x-11$ selon l'intervalle",
            "Non : une valeur absolue n'est jamais affine",
            "Non : elle n'existe que sur $\\mathbb R_+$",
            "Oui, mais seulement pour $x>0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On découpe en $x=-\\frac{11}{7}$ : deux morceaux affines."
        }
      ]
    },
    {
      "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p02",
      "order": 2,
      "title": "Calculer avec une fonction par morceaux",
      "summary": "Toujours repérer le bon intervalle avant de calculer.",
      "conceptExplanation": "Exemple : $f(x)=-x-5$ sur $]-\\infty;0]$, $f(x)=\\frac32x+1$ sur $]0;2[$ et $f(x)=x-5$ sur $[2;+\\infty[$.\n\n- Ensemble de définition : $]-\\infty;0]\\cup]0;2[\\cup[2;+\\infty[=\\mathbb R$.\n- Pour calculer une image, on cherche d'abord l'intervalle qui contient le nombre :\n  $3\\in[2;+\\infty[$, donc $f(3)=3-5=-2$ ;\n  $-5\\in]-\\infty;0]$, donc $f(-5)=5-5=0$ ;\n  $0\\in]-\\infty;0]$, donc $f(0)=-5$.\n- Résoudre $f(x)=0$ : on résout sur chaque intervalle et on garde seulement les solutions qui sont dans cet intervalle.\n  Sur $]-\\infty;0]$ : $-x-5=0$ ⇔ $x=-5$ : convient.\n  Sur $]0;2[$ : $\\frac32x+1=0$ ⇔ $x=-\\frac23$, qui n'est pas dans $]0;2[$ : rejeté.\n  Sur $[2;+\\infty[$ : $x-5=0$ ⇔ $x=5$ : convient.\n  Donc $S=\\{-5\\,;5\\}$.",
      "keyRule": "1. Trouver l'intervalle. 2. Utiliser l'expression de cet intervalle. 3. Pour une équation, garder seulement les solutions qui sont dans l'intervalle.",
      "formulas": [],
      "workedExample": {
        "title": "Résoudre f(x) = 0",
        "statement": "$f(x)=-x-5$ sur $]-\\infty;0]$, $\\frac32x+1$ sur $]0;2[$, $x-5$ sur $[2;+\\infty[$. Résous $f(x)=0$.",
        "methodSteps": [
          "$-x-5=0$ donne $x=-5$, qui est bien dans $]-\\infty;0]$.",
          "$\\frac32x+1=0$ donne $x=-\\frac23$, qui n'est pas dans $]0;2[$ : on le rejette.",
          "$x-5=0$ donne $x=5$, qui est bien dans $[2;+\\infty[$."
        ],
        "conclusion": "$S=\\{-5\\,;5\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "L'ensemble de définition",
          "stepTheme": "L'ensemble de définition",
          "stepBadge": "L'ensemble de définition",
          "paragraphText": "Les trois intervalles $]-\\infty;0]$, $]0;2[$ et $[2;+\\infty[$ se touchent sans trou.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p02_q1",
            "type": "mcq",
            "prompt": "$f(x)=-x-5$ sur $]-\\infty;0]$, $f(x)=\\dfrac32x+1$ sur $]0;2[$ et $f(x)=x-5$ sur $[2;+\\infty[$. Quel est l'ensemble de définition de $f$ ?",
            "options": [
              "$]-\\infty;2[$",
              "$]0;+\\infty[$",
              "$\\mathbb R$",
              "$\\mathbb R\\setminus\\{0\\,;2\\}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Leur réunion est $\\mathbb R$ tout entier."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Choisir l'expression",
          "stepTheme": "Choisir l'expression",
          "stepBadge": "Choisir l'expression",
          "paragraphText": "Pour calculer $f(a)$, on repère l'intervalle qui contient $a$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p02_q2",
            "type": "mcq",
            "prompt": "Pour calculer $f(3)$, quelle expression faut-il utiliser ?",
            "options": [
              "$\\frac32x+1$, car $3>0$",
              "$-x-5$, car $3\\neq0$",
              "N'importe laquelle des trois",
              "$x-5$, car $3\\in[2;+\\infty[$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$3$ est dans $[2;+\\infty[$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Calculer f(3)",
          "stepTheme": "Calculer f(3)",
          "stepBadge": "Calculer f(3)",
          "paragraphText": "$f(3)=3-5$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p02_q3",
            "type": "mcq",
            "prompt": "$f(x)=-x-5$ sur $]-\\infty;0]$, $f(x)=\\dfrac32x+1$ sur $]0;2[$ et $f(x)=x-5$ sur $[2;+\\infty[$. Combien vaut $f(3)$ ?",
            "options": [
              "$5{,}5$",
              "$-8$",
              "$-2$",
              "$2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$3-5=-2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Un nombre à la frontière",
          "stepTheme": "Un nombre à la frontière",
          "stepBadge": "Un nombre à la frontière",
          "paragraphText": "$0$ appartient à $]-\\infty;0]$ (crochet fermé), pas à $]0;2[$ (crochet ouvert).",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p02_q4",
            "type": "mcq",
            "prompt": "$f(x)=-x-5$ sur $]-\\infty;0]$, $f(x)=\\dfrac32x+1$ sur $]0;2[$ et $f(x)=x-5$ sur $[2;+\\infty[$. Combien vaut $f(0)$ ?",
            "options": [
              "$1$",
              "$-5$",
              "$0$",
              "$5$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On utilise $-x-5$ : $f(0)=-5$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Calculer f(−5)",
          "stepTheme": "Calculer f(−5)",
          "stepBadge": "Calculer f(−5)",
          "paragraphText": "$-5\\in]-\\infty;0]$, donc $f(-5)=-(-5)-5$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p02_q5",
            "type": "mcq",
            "prompt": "$f(x)=-x-5$ sur $]-\\infty;0]$, $f(x)=\\dfrac32x+1$ sur $]0;2[$ et $f(x)=x-5$ sur $[2;+\\infty[$. Combien vaut $f(-5)$ ?",
            "options": [
              "$0$",
              "$-10$",
              "$-6{,}5$",
              "$5$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$5-5=0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une solution hors de l'intervalle",
          "stepTheme": "Une solution hors de l'intervalle",
          "stepBadge": "Une solution hors de l'intervalle",
          "paragraphText": "Sur $]0;2[$ : $\\frac32x+1=0$ ⇔ $x=-\\frac23$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p02_q6",
            "type": "mcq",
            "prompt": "Sur $]0;2[$, $f(x)=\\dfrac32x+1$, et l'équation $\\dfrac32x+1=0$ donne $x=-\\dfrac23$. Que conclure pour l'équation $f(x)=0$ sur l'intervalle $]0;2[$ ?",
            "options": [
              "Pas de solution sur cet intervalle",
              "$-\\frac23$ est solution de $f(x)=0$",
              "$f$ n'est pas définie en $-\\frac23$",
              "Il y a une infinité de solutions"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$-\\frac23\\notin]0;2[$ : on le rejette."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Toutes les solutions",
          "stepTheme": "Toutes les solutions",
          "stepBadge": "Toutes les solutions",
          "paragraphText": "On réunit les solutions trouvées sur chaque intervalle.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p02_q7",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $f(x)=0$ ?",
            "options": [
              "$\\left\\{-5\\,;-\\frac23\\,;5\\right\\}$",
              "$\\{-5\\,;5\\}$",
              "$\\{5\\}$",
              "$\\{-5\\}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$-5$ et $5$ sont chacun dans leur intervalle ; $-\\frac23$ ne l'est pas."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p02_q1",
          "type": "mcq",
          "prompt": "$f(x)=-x-5$ sur $]-\\infty;0]$, $f(x)=\\dfrac32x+1$ sur $]0;2[$ et $f(x)=x-5$ sur $[2;+\\infty[$. Quel est l'ensemble de définition de $f$ ?",
          "options": [
            "$]-\\infty;2[$",
            "$]0;+\\infty[$",
            "$\\mathbb R$",
            "$\\mathbb R\\setminus\\{0\\,;2\\}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Leur réunion est $\\mathbb R$ tout entier."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p02_q2",
          "type": "mcq",
          "prompt": "Pour calculer $f(3)$, quelle expression faut-il utiliser ?",
          "options": [
            "$\\frac32x+1$, car $3>0$",
            "$-x-5$, car $3\\neq0$",
            "N'importe laquelle des trois",
            "$x-5$, car $3\\in[2;+\\infty[$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$3$ est dans $[2;+\\infty[$."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p02_q3",
          "type": "mcq",
          "prompt": "$f(x)=-x-5$ sur $]-\\infty;0]$, $f(x)=\\dfrac32x+1$ sur $]0;2[$ et $f(x)=x-5$ sur $[2;+\\infty[$. Combien vaut $f(3)$ ?",
          "options": [
            "$5{,}5$",
            "$-8$",
            "$-2$",
            "$2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$3-5=-2$."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p02_q4",
          "type": "mcq",
          "prompt": "$f(x)=-x-5$ sur $]-\\infty;0]$, $f(x)=\\dfrac32x+1$ sur $]0;2[$ et $f(x)=x-5$ sur $[2;+\\infty[$. Combien vaut $f(0)$ ?",
          "options": [
            "$1$",
            "$-5$",
            "$0$",
            "$5$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On utilise $-x-5$ : $f(0)=-5$."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p02_q5",
          "type": "mcq",
          "prompt": "$f(x)=-x-5$ sur $]-\\infty;0]$, $f(x)=\\dfrac32x+1$ sur $]0;2[$ et $f(x)=x-5$ sur $[2;+\\infty[$. Combien vaut $f(-5)$ ?",
          "options": [
            "$0$",
            "$-10$",
            "$-6{,}5$",
            "$5$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$5-5=0$."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p02_q6",
          "type": "mcq",
          "prompt": "Sur $]0;2[$, $f(x)=\\dfrac32x+1$, et l'équation $\\dfrac32x+1=0$ donne $x=-\\dfrac23$. Que conclure pour l'équation $f(x)=0$ sur l'intervalle $]0;2[$ ?",
          "options": [
            "Pas de solution sur cet intervalle",
            "$-\\frac23$ est solution de $f(x)=0$",
            "$f$ n'est pas définie en $-\\frac23$",
            "Il y a une infinité de solutions"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$-\\frac23\\notin]0;2[$ : on le rejette."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p02_q7",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $f(x)=0$ ?",
          "options": [
            "$\\left\\{-5\\,;-\\frac23\\,;5\\right\\}$",
            "$\\{-5\\,;5\\}$",
            "$\\{5\\}$",
            "$\\{-5\\}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$-5$ et $5$ sont chacun dans leur intervalle ; $-\\frac23$ ne l'est pas."
        }
      ]
    },
    {
      "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p03",
      "order": 3,
      "title": "La fonction partie entière",
      "summary": "Le plus grand entier inférieur ou égal à $x$.",
      "conceptExplanation": "La partie entière d'un réel $x$, notée $E(x)$, est le plus grand entier relatif inférieur ou égal à $x$.\n\nPropriété : pour tout réel $x$, il existe un unique entier $z$ tel que $z\\le x<z+1$ ; c'est $E(x)$.\n\nExemples :\n- $7\\le7{,}8<8$, donc $E(7{,}8)=7$ ;\n- $-5\\le-4{,}02<-4$, donc $E(-4{,}02)=-5$ (et non $-4$) ;\n- $9\\le9<10$, donc $E(9)=9$ ;\n- $31\\le31{,}365<32$, donc $E(31{,}365)=31$.\n\nLa fonction $E$ est définie sur $\\mathbb R$. Sa courbe est un escalier : sur chaque intervalle $[n\\,;n+1[$, $E(x)=n$. Chaque marche est fermée à gauche (point plein) et ouverte à droite (point vide).",
      "keyRule": "$E(x)=z$ ⇔ $z$ entier et $z\\le x<z+1$. Attention aux négatifs : $E(-4{,}02)=-5$.",
      "formulas": [],
      "workedExample": {
        "title": "Un nombre négatif",
        "statement": "Détermine $E(-4{,}02)$.",
        "methodSteps": [
          "On encadre par deux entiers consécutifs : $-5\\le-4{,}02<-4$.",
          "$E$ est l'entier de gauche."
        ],
        "conclusion": "$E(-4{,}02)=-5$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition",
          "stepTheme": "La définition",
          "stepBadge": "La définition",
          "paragraphText": "$E(x)$ est le plus grand entier inférieur ou égal à $x$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p03_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce que $E(x)$ ?",
            "options": [
              "L'entier le plus proche de $x$",
              "Le plus petit entier supérieur ou égal à $x$",
              "Le plus grand entier inférieur ou égal à $x$",
              "Le nombre $x$ sans ses décimales, avec son signe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'entier « juste en dessous » de $x$ (ou $x$ lui-même s'il est entier)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Un décimal positif",
          "stepTheme": "Un décimal positif",
          "stepBadge": "Un décimal positif",
          "paragraphText": "$7\\le7{,}8<8$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p03_q2",
            "type": "mcq",
            "prompt": "$E(x)$ désigne la partie entière de $x$ (le plus grand entier inférieur ou égal à $x$). Combien vaut $E(7{,}8)$ ?",
            "options": [
              "$8$",
              "$0{,}8$",
              "$-7$",
              "$7$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On ne prend pas l'arrondi : on prend l'entier en dessous."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Un décimal négatif",
          "stepTheme": "Un décimal négatif",
          "stepBadge": "Un décimal négatif",
          "paragraphText": "$-5\\le-4{,}02<-4$ : l'entier « en dessous » de $-4{,}02$ est $-5$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p03_q3",
            "type": "mcq",
            "prompt": "$E(x)$ désigne la partie entière de $x$ (le plus grand entier inférieur ou égal à $x$). Combien vaut $E(-4{,}02)$ ?",
            "options": [
              "$-4$",
              "$4$",
              "$-5$",
              "$5$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$-4$ est plus grand que $-4{,}02$ : il ne convient pas."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un entier",
          "stepTheme": "Un entier",
          "stepBadge": "Un entier",
          "paragraphText": "Si $x$ est un entier, $E(x)=x$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p03_q4",
            "type": "mcq",
            "prompt": "$E(x)$ désigne la partie entière de $x$ (le plus grand entier inférieur ou égal à $x$). Combien vaut $E(9)$ ?",
            "options": [
              "$8$",
              "$10$",
              "$0$",
              "$9$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$9\\le9<10$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'encadrement",
          "stepTheme": "L'encadrement",
          "stepBadge": "L'encadrement",
          "paragraphText": "$E(x)=z$ ⇔ $z\\le x<z+1$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p03_q5",
            "type": "mcq",
            "prompt": "Si $E(x)=3$, alors :",
            "options": [
              "$3\\le x<4$",
              "$3<x\\le4$",
              "$2<x\\le3$",
              "$x=3$ exactement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Tous les réels de $[3\\,;4[$ ont pour partie entière $3$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La courbe en escalier",
          "stepTheme": "La courbe en escalier",
          "stepBadge": "La courbe en escalier",
          "paragraphText": "Sur $[n\\,;n+1[$, $E(x)=n$ : la marche commence par un point plein et finit par un point vide.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p03_q6",
            "type": "mcq",
            "prompt": "La courbe de $E$ est formée de marches :",
            "options": [
              "ouvertes à gauche, fermées à droite",
              "fermées à gauche, ouvertes à droite",
              "fermées des deux côtés",
              "ouvertes des deux côtés"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$E(n)=n$ (point plein), mais en $n+1$ on passe à la marche suivante (point vide)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Entre −1 et 0",
          "stepTheme": "Entre −1 et 0",
          "stepBadge": "Entre −1 et 0",
          "paragraphText": "$-1\\le-0{,}5<0$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p03_q7",
            "type": "mcq",
            "prompt": "$E(x)$ désigne la partie entière de $x$ (le plus grand entier inférieur ou égal à $x$). Combien vaut $E(-0{,}5)$ ?",
            "options": [
              "$0$",
              "$-1$",
              "$-0{,}5$",
              "$1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$0$ est plus grand que $-0{,}5$ : la partie entière est $-1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p03_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce que $E(x)$ ?",
          "options": [
            "L'entier le plus proche de $x$",
            "Le plus petit entier supérieur ou égal à $x$",
            "Le plus grand entier inférieur ou égal à $x$",
            "Le nombre $x$ sans ses décimales, avec son signe"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'entier « juste en dessous » de $x$ (ou $x$ lui-même s'il est entier)."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p03_q2",
          "type": "mcq",
          "prompt": "$E(x)$ désigne la partie entière de $x$ (le plus grand entier inférieur ou égal à $x$). Combien vaut $E(7{,}8)$ ?",
          "options": [
            "$8$",
            "$0{,}8$",
            "$-7$",
            "$7$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On ne prend pas l'arrondi : on prend l'entier en dessous."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p03_q3",
          "type": "mcq",
          "prompt": "$E(x)$ désigne la partie entière de $x$ (le plus grand entier inférieur ou égal à $x$). Combien vaut $E(-4{,}02)$ ?",
          "options": [
            "$-4$",
            "$4$",
            "$-5$",
            "$5$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$-4$ est plus grand que $-4{,}02$ : il ne convient pas."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p03_q4",
          "type": "mcq",
          "prompt": "$E(x)$ désigne la partie entière de $x$ (le plus grand entier inférieur ou égal à $x$). Combien vaut $E(9)$ ?",
          "options": [
            "$8$",
            "$10$",
            "$0$",
            "$9$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$9\\le9<10$."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p03_q5",
          "type": "mcq",
          "prompt": "Si $E(x)=3$, alors :",
          "options": [
            "$3\\le x<4$",
            "$3<x\\le4$",
            "$2<x\\le3$",
            "$x=3$ exactement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tous les réels de $[3\\,;4[$ ont pour partie entière $3$."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p03_q6",
          "type": "mcq",
          "prompt": "La courbe de $E$ est formée de marches :",
          "options": [
            "ouvertes à gauche, fermées à droite",
            "fermées à gauche, ouvertes à droite",
            "fermées des deux côtés",
            "ouvertes des deux côtés"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$E(n)=n$ (point plein), mais en $n+1$ on passe à la marche suivante (point vide)."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p03_q7",
          "type": "mcq",
          "prompt": "$E(x)$ désigne la partie entière de $x$ (le plus grand entier inférieur ou égal à $x$). Combien vaut $E(-0{,}5)$ ?",
          "options": [
            "$0$",
            "$-1$",
            "$-0{,}5$",
            "$1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$0$ est plus grand que $-0{,}5$ : la partie entière est $-1$."
        }
      ]
    },
    {
      "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p04",
      "order": 4,
      "title": "Les fonctions carré et valeur absolue",
      "summary": "Décroissantes sur $]-\\infty;0]$, croissantes sur $[0;+\\infty[$.",
      "conceptExplanation": "Fonction carré $x\\mapsto x^2$ :\n- définie sur $\\mathbb R$ ;\n- strictement décroissante sur $]-\\infty;0]$, strictement croissante sur $[0;+\\infty[$ ;\n- minimum $0$, atteint en $x=0$ ;\n- courbe : une parabole de sommet $O$, symétrique par rapport à l'axe des ordonnées. Points : $(\\pm1\\,;1)$, $(\\pm2\\,;4)$, $(\\pm3\\,;9)$.\n\nFonction valeur absolue $x\\mapsto|x|$ :\n- définie sur $\\mathbb R$ ;\n- strictement décroissante sur $]-\\infty;0]$, strictement croissante sur $[0;+\\infty[$ ;\n- minimum $0$ en $x=0$ ;\n- courbe : un V de sommet $O$, formé de deux demi-droites ($y=-x$ à gauche, $y=x$ à droite).\n\nComparer : sur $]-\\infty;0]$, la fonction carré renverse l'ordre. Par exemple $-3<-2$ donne $(-3)^2>(-2)^2$, soit $9>4$.",
      "keyRule": "$x^2$ et $|x|$ : définies sur $\\mathbb R$, décroissantes sur $]-\\infty;0]$, croissantes sur $[0;+\\infty[$, minimum $0$ en $0$.",
      "formulas": [],
      "workedExample": {
        "title": "Comparer deux carrés",
        "statement": "Compare $(-3)^2$ et $(-2)^2$ sans les calculer.",
        "methodSteps": [
          "$-3<-2\\le0$ : les deux nombres sont dans $]-\\infty;0]$.",
          "Sur cet intervalle, la fonction carré est décroissante : elle renverse l'ordre."
        ],
        "conclusion": "$(-3)^2>(-2)^2$ (en effet $9>4$)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ensemble de définition",
          "stepTheme": "Ensemble de définition",
          "stepBadge": "Ensemble de définition",
          "paragraphText": "On peut élever au carré n'importe quel réel.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p04_q1",
            "type": "mcq",
            "prompt": "Quel est l'ensemble de définition de $x\\mapsto x^2$ ?",
            "options": [
              "$\\mathbb R$",
              "$[0;+\\infty[$",
              "$\\mathbb R^*$",
              "$]0;+\\infty[$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Tout réel a un carré."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le sens de variation",
          "stepTheme": "Le sens de variation",
          "stepBadge": "Le sens de variation",
          "paragraphText": "$x\\mapsto x^2$ est strictement décroissante sur $]-\\infty;0]$, puis strictement croissante sur $[0;+\\infty[$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p04_q2",
            "type": "mcq",
            "prompt": "Sur $]-\\infty;0]$, la fonction carré est :",
            "options": [
              "strictement croissante",
              "constante",
              "négative",
              "strictement décroissante"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Par exemple $(-3)^2=9$ et $(-1)^2=1$ : elle descend vers $0$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Comparer des carrés",
          "stepTheme": "Comparer des carrés",
          "stepBadge": "Comparer des carrés",
          "paragraphText": "Sur $]-\\infty;0]$, une fonction décroissante renverse l'ordre.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p04_q3",
            "type": "mcq",
            "prompt": "On a $-3<-2$. Comment se comparent $(-3)^2$ et $(-2)^2$ ?",
            "options": [
              "$(-3)^2<(-2)^2$",
              "Ils sont égaux",
              "$(-3)^2>(-2)^2$",
              "On ne peut pas comparer"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$9>4$ : l'ordre est renversé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le minimum",
          "stepTheme": "Le minimum",
          "stepBadge": "Le minimum",
          "paragraphText": "Un carré est toujours positif ou nul, et $0^2=0$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p04_q4",
            "type": "mcq",
            "prompt": "Quel est le minimum de $x\\mapsto x^2$ sur $\\mathbb R$ ?",
            "options": [
              "$1$, atteint en $x=1$",
              "Il n'y a pas de minimum",
              "$0$, atteint en $x=0$",
              "$-1$, atteint en $x=-1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$x^2\\ge0=0^2$ pour tout $x$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La valeur absolue",
          "stepTheme": "La valeur absolue",
          "stepBadge": "La valeur absolue",
          "paragraphText": "Sur $[0;+\\infty[$, $|x|=x$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p04_q5",
            "type": "mcq",
            "prompt": "Sur $[0;+\\infty[$, la fonction $x\\mapsto|x|$ est :",
            "options": [
              "strictement croissante",
              "strictement décroissante",
              "constante",
              "non définie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle coïncide avec $x\\mapsto x$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La courbe de |x|",
          "stepTheme": "La courbe de |x|",
          "stepBadge": "La courbe de |x|",
          "paragraphText": "$|x|=-x$ pour $x\\le0$ et $|x|=x$ pour $x\\ge0$ : deux demi-droites.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p04_q6",
            "type": "mcq",
            "prompt": "Quelle est la forme de la courbe de $x\\mapsto|x|$ ?",
            "options": [
              "Une parabole",
              "Une seule droite",
              "Deux branches d'hyperbole",
              "Un V de sommet $O$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Deux demi-droites qui partent de l'origine."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Une symétrie",
          "stepTheme": "Une symétrie",
          "stepBadge": "Une symétrie",
          "paragraphText": "$(-x)^2=x^2$ et $|-x|=|x|$ : $x$ et $-x$ ont la même image.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p04_q7",
            "type": "mcq",
            "prompt": "Les courbes de $x\\mapsto x^2$ et de $x\\mapsto|x|$ sont symétriques par rapport :",
            "options": [
              "à l'axe des abscisses",
              "à l'axe des ordonnées",
              "à la droite d'équation $y=x$",
              "au point $(1\\,;1)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les points $(x\\,;y)$ et $(-x\\,;y)$ sont tous les deux sur la courbe."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p04_q1",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de définition de $x\\mapsto x^2$ ?",
          "options": [
            "$\\mathbb R$",
            "$[0;+\\infty[$",
            "$\\mathbb R^*$",
            "$]0;+\\infty[$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tout réel a un carré."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p04_q2",
          "type": "mcq",
          "prompt": "Sur $]-\\infty;0]$, la fonction carré est :",
          "options": [
            "strictement croissante",
            "constante",
            "négative",
            "strictement décroissante"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Par exemple $(-3)^2=9$ et $(-1)^2=1$ : elle descend vers $0$."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p04_q3",
          "type": "mcq",
          "prompt": "On a $-3<-2$. Comment se comparent $(-3)^2$ et $(-2)^2$ ?",
          "options": [
            "$(-3)^2<(-2)^2$",
            "Ils sont égaux",
            "$(-3)^2>(-2)^2$",
            "On ne peut pas comparer"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$9>4$ : l'ordre est renversé."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p04_q4",
          "type": "mcq",
          "prompt": "Quel est le minimum de $x\\mapsto x^2$ sur $\\mathbb R$ ?",
          "options": [
            "$1$, atteint en $x=1$",
            "Il n'y a pas de minimum",
            "$0$, atteint en $x=0$",
            "$-1$, atteint en $x=-1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$x^2\\ge0=0^2$ pour tout $x$."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p04_q5",
          "type": "mcq",
          "prompt": "Sur $[0;+\\infty[$, la fonction $x\\mapsto|x|$ est :",
          "options": [
            "strictement croissante",
            "strictement décroissante",
            "constante",
            "non définie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle coïncide avec $x\\mapsto x$."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p04_q6",
          "type": "mcq",
          "prompt": "Quelle est la forme de la courbe de $x\\mapsto|x|$ ?",
          "options": [
            "Une parabole",
            "Une seule droite",
            "Deux branches d'hyperbole",
            "Un V de sommet $O$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Deux demi-droites qui partent de l'origine."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p04_q7",
          "type": "mcq",
          "prompt": "Les courbes de $x\\mapsto x^2$ et de $x\\mapsto|x|$ sont symétriques par rapport :",
          "options": [
            "à l'axe des abscisses",
            "à l'axe des ordonnées",
            "à la droite d'équation $y=x$",
            "au point $(1\\,;1)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les points $(x\\,;y)$ et $(-x\\,;y)$ sont tous les deux sur la courbe."
        }
      ]
    },
    {
      "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p05",
      "order": 5,
      "title": "Racine carrée, inverse et cube",
      "summary": "Trois fonctions, trois ensembles de définition.",
      "conceptExplanation": "Fonction racine carrée $x\\mapsto\\sqrt x$ :\n- définie sur $\\mathbb R_+=[0;+\\infty[$ ;\n- strictement croissante sur $[0;+\\infty[$. Points : $(0;0)$, $(1;1)$, $(4;2)$, $(9;3)$.\n\nFonction inverse $x\\mapsto\\dfrac1x$ :\n- définie sur $\\mathbb R^*=]-\\infty;0[\\cup]0;+\\infty[$ ;\n- strictement décroissante sur $]-\\infty;0[$ et strictement décroissante sur $]0;+\\infty[$ ;\n- attention : elle n'est pas décroissante sur $\\mathbb R^*$ tout entier, car $-1<1$ et $\\frac{1}{-1}<\\frac11$ ;\n- courbe : une hyperbole à deux branches.\n\nFonction cube $x\\mapsto x^3$ :\n- définie sur $\\mathbb R$ ;\n- strictement croissante sur $\\mathbb R$. Points : $(-2;-8)$, $(-1;-1)$, $(0;0)$, $(1;1)$, $(2;8)$.",
      "keyRule": "$\\sqrt x$ : $[0;+\\infty[$, croissante. $\\frac1x$ : $\\mathbb R^*$, décroissante sur chacun des deux intervalles. $x^3$ : $\\mathbb R$, croissante.",
      "formulas": [],
      "workedExample": {
        "title": "Comparer deux inverses",
        "statement": "Compare $\\dfrac12$ et $\\dfrac13$ en utilisant la fonction inverse.",
        "methodSteps": [
          "$2$ et $3$ sont dans $]0;+\\infty[$, et $2<3$.",
          "Sur $]0;+\\infty[$, la fonction inverse est décroissante : elle renverse l'ordre."
        ],
        "conclusion": "$\\dfrac12>\\dfrac13$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La racine carrée",
          "stepTheme": "La racine carrée",
          "stepBadge": "La racine carrée",
          "paragraphText": "$\\sqrt x$ n'existe que si $x\\ge0$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p05_q1",
            "type": "mcq",
            "prompt": "Quel est l'ensemble de définition de $x\\mapsto\\sqrt x$ ?",
            "options": [
              "$\\mathbb R$",
              "$[0;+\\infty[$",
              "$]0;+\\infty[$",
              "$\\mathbb R^*$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\sqrt0=0$ existe : $0$ est inclus."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Comparer des racines",
          "stepTheme": "Comparer des racines",
          "stepBadge": "Comparer des racines",
          "paragraphText": "La fonction racine carrée est strictement croissante : elle conserve l'ordre.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p05_q2",
            "type": "mcq",
            "prompt": "Comment se comparent $\\sqrt5$ et $\\sqrt7$ ?",
            "options": [
              "$\\sqrt5>\\sqrt7$",
              "$\\sqrt5=\\sqrt7$",
              "On ne peut pas savoir",
              "$\\sqrt5<\\sqrt7$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$5<7$ donc $\\sqrt5<\\sqrt7$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La fonction inverse",
          "stepTheme": "La fonction inverse",
          "stepBadge": "La fonction inverse",
          "paragraphText": "On ne peut pas diviser par $0$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p05_q3",
            "type": "mcq",
            "prompt": "Quel est l'ensemble de définition de $x\\mapsto\\dfrac1x$ ?",
            "options": [
              "$\\mathbb R^*$",
              "$\\mathbb R$",
              "$[0;+\\infty[$",
              "$\\{0\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\mathbb R^*=]-\\infty;0[\\cup]0;+\\infty[$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Variations de l'inverse",
          "stepTheme": "Variations de l'inverse",
          "stepBadge": "Variations de l'inverse",
          "paragraphText": "Sur chacun des intervalles $]-\\infty;0[$ et $]0;+\\infty[$, la fonction inverse est strictement décroissante.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p05_q4",
            "type": "mcq",
            "prompt": "Comment varie $x\\mapsto\\dfrac1x$ ?",
            "options": [
              "Croissante sur $]-\\infty;0[$ et sur $]0;+\\infty[$",
              "Décroissante sur $]-\\infty;0[$, croissante sur $]0;+\\infty[$",
              "Décroissante sur $]-\\infty;0[$ et sur $]0;+\\infty[$",
              "Constante sur $\\mathbb R^*$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Sur chaque branche, quand $x$ augmente, $\\frac1x$ diminue."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Comparer des inverses",
          "stepTheme": "Comparer des inverses",
          "stepBadge": "Comparer des inverses",
          "paragraphText": "Sur $]0;+\\infty[$, la fonction inverse renverse l'ordre.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p05_q5",
            "type": "mcq",
            "prompt": "On a $2<3$. Comment se comparent $\\dfrac12$ et $\\dfrac13$ ?",
            "options": [
              "$\\dfrac12<\\dfrac13$",
              "Ils sont égaux",
              "On ne peut pas savoir",
              "$\\dfrac12>\\dfrac13$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$0{,}5>0{,}33$ : l'ordre est renversé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Pas sur ℝ* tout entier",
          "stepTheme": "Pas sur ℝ* tout entier",
          "stepBadge": "Pas sur ℝ* tout entier",
          "paragraphText": "Décroissante sur chaque morceau ne veut pas dire décroissante sur $\\mathbb R^*$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p05_q6",
            "type": "mcq",
            "prompt": "Peut-on dire que $x\\mapsto\\dfrac1x$ est décroissante sur $\\mathbb R^*$ tout entier ?",
            "options": [
              "Oui, car elle l'est sur chaque intervalle",
              "Oui, car $\\frac1x$ est toujours positif",
              "Non : $-1<1$ et pourtant $\\frac{1}{-1}<\\frac11$",
              "Non, car elle est croissante sur $\\mathbb R^*$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "En passant d'une branche à l'autre, l'ordre n'est pas renversé."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "La fonction cube",
          "stepTheme": "La fonction cube",
          "stepBadge": "La fonction cube",
          "paragraphText": "$x\\mapsto x^3$ est définie sur $\\mathbb R$ et strictement croissante : $(-2)^3=-8$, $0^3=0$, $2^3=8$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p05_q7",
            "type": "mcq",
            "prompt": "Comment varie la fonction $x\\mapsto x^3$ ?",
            "options": [
              "Décroissante, puis croissante",
              "Strictement croissante sur $\\mathbb R$",
              "Strictement décroissante sur $\\mathbb R$",
              "Définie seulement sur $\\mathbb R_+$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Contrairement au carré, le cube conserve le signe et l'ordre."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p05_q1",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de définition de $x\\mapsto\\sqrt x$ ?",
          "options": [
            "$\\mathbb R$",
            "$[0;+\\infty[$",
            "$]0;+\\infty[$",
            "$\\mathbb R^*$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\sqrt0=0$ existe : $0$ est inclus."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p05_q2",
          "type": "mcq",
          "prompt": "Comment se comparent $\\sqrt5$ et $\\sqrt7$ ?",
          "options": [
            "$\\sqrt5>\\sqrt7$",
            "$\\sqrt5=\\sqrt7$",
            "On ne peut pas savoir",
            "$\\sqrt5<\\sqrt7$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$5<7$ donc $\\sqrt5<\\sqrt7$."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p05_q3",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de définition de $x\\mapsto\\dfrac1x$ ?",
          "options": [
            "$\\mathbb R^*$",
            "$\\mathbb R$",
            "$[0;+\\infty[$",
            "$\\{0\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\mathbb R^*=]-\\infty;0[\\cup]0;+\\infty[$."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p05_q4",
          "type": "mcq",
          "prompt": "Comment varie $x\\mapsto\\dfrac1x$ ?",
          "options": [
            "Croissante sur $]-\\infty;0[$ et sur $]0;+\\infty[$",
            "Décroissante sur $]-\\infty;0[$, croissante sur $]0;+\\infty[$",
            "Décroissante sur $]-\\infty;0[$ et sur $]0;+\\infty[$",
            "Constante sur $\\mathbb R^*$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Sur chaque branche, quand $x$ augmente, $\\frac1x$ diminue."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p05_q5",
          "type": "mcq",
          "prompt": "On a $2<3$. Comment se comparent $\\dfrac12$ et $\\dfrac13$ ?",
          "options": [
            "$\\dfrac12<\\dfrac13$",
            "Ils sont égaux",
            "On ne peut pas savoir",
            "$\\dfrac12>\\dfrac13$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$0{,}5>0{,}33$ : l'ordre est renversé."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p05_q6",
          "type": "mcq",
          "prompt": "Peut-on dire que $x\\mapsto\\dfrac1x$ est décroissante sur $\\mathbb R^*$ tout entier ?",
          "options": [
            "Oui, car elle l'est sur chaque intervalle",
            "Oui, car $\\frac1x$ est toujours positif",
            "Non : $-1<1$ et pourtant $\\frac{1}{-1}<\\frac11$",
            "Non, car elle est croissante sur $\\mathbb R^*$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "En passant d'une branche à l'autre, l'ordre n'est pas renversé."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p05_q7",
          "type": "mcq",
          "prompt": "Comment varie la fonction $x\\mapsto x^3$ ?",
          "options": [
            "Décroissante, puis croissante",
            "Strictement croissante sur $\\mathbb R$",
            "Strictement décroissante sur $\\mathbb R$",
            "Définie seulement sur $\\mathbb R_+$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Contrairement au carré, le cube conserve le signe et l'ordre."
        }
      ]
    },
    {
      "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p06",
      "order": 6,
      "title": "Lire, comparer et choisir",
      "summary": "Une fonction à quatre morceaux et le forfait de Moya.",
      "conceptExplanation": "Exemple : $f(x)=3x+8$ sur $[-6;-4]$ ; $f(x)=-\\frac87x+\\frac{10}{7}$ sur $]-4;3[$ ; $f(x)=-1$ sur $[3;4]$ ; $f(x)=2{,}5x-12$ sur $]4;8]$.\n\n- Images : $f(-5)=-7$ ; $f(0)=\\frac{10}{7}$ ; $f(3)=-1$ ; $f(7)=5{,}5$.\n- Variations : croissante sur $[-6;-4]$ (de $-10$ à $-4$) ; décroissante sur $]-4;3[$ (de $6$ à $-2$, bornes exclues) ; constante égale à $-1$ sur $[3;4]$ ; croissante sur $]4;8]$ (de $-2$ exclu à $8$).\n- Équations : on cherche sur chaque morceau.\n  $f(x)=0$ : $x=\\frac54$ (2e morceau) et $x=\\frac{24}{5}$ (4e morceau).\n  $f(x)=-3$ : aucun morceau n'atteint $-3$, donc $S=\\varnothing$.\n\nSituation : forfait 1 = $300$ F + $25$ F par minute de dépassement ; forfait 2 = $150$ F + $75$ F par minute.\nCoûts : $C_1(x)=300+25x$ et $C_2(x)=150+75x$. Ils sont égaux pour $x=3$ ; au-delà de $3$ minutes, le forfait 1 est moins cher.\nMoya se connecte $153$ min, soit $33$ min de dépassement : $C_1=1\\,125$ F et $C_2=2\\,625$ F. Elle choisit le forfait 1.",
      "keyRule": "Fonction par morceaux : un calcul par morceau, en vérifiant l'intervalle. Comparer deux offres : écrire deux fonctions affines et chercher quand l'une passe sous l'autre.",
      "formulas": [],
      "workedExample": {
        "title": "Le forfait de Moya",
        "statement": "Forfait 1 : $300$ F + $25$ F/min de dépassement. Forfait 2 : $150$ F + $75$ F/min. Moya dépasse de $33$ minutes. Quel forfait choisir ?",
        "methodSteps": [
          "$C_1=300+25\\times33=1\\,125$ F.",
          "$C_2=150+75\\times33=2\\,625$ F."
        ],
        "conclusion": "Le forfait 1 est le moins cher : $1\\,125$ F."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Une image",
          "stepTheme": "Une image",
          "stepBadge": "Une image",
          "paragraphText": "$-5\\in[-6;-4]$, donc $f(-5)=3\\times(-5)+8$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p06_q1",
            "type": "mcq",
            "prompt": "$f(x)=3x+8$ sur $[-6;-4]$ ; $f(x)=-\\dfrac87x+\\dfrac{10}{7}$ sur $]-4;3[$ ; $f(x)=-1$ sur $[3;4]$ ; $f(x)=2{,}5x-12$ sur $]4;8]$. Que vaut $f(-5)$ ?",
            "options": [
              "$-7$",
              "$23$",
              "$-5$",
              "$7$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$-15+8=-7$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Une autre image",
          "stepTheme": "Une autre image",
          "stepBadge": "Une autre image",
          "paragraphText": "$7\\in]4;8]$, donc $f(7)=2{,}5\\times7-12$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p06_q2",
            "type": "mcq",
            "prompt": "$f(x)=3x+8$ sur $[-6;-4]$ ; $f(x)=-\\dfrac87x+\\dfrac{10}{7}$ sur $]-4;3[$ ; $f(x)=-1$ sur $[3;4]$ ; $f(x)=2{,}5x-12$ sur $]4;8]$. Combien vaut $f(7)$ ?",
            "options": [
              "$5{,}5$",
              "$17{,}5$",
              "$-1$",
              "$8$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$17{,}5-12=5{,}5$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le sens d'un morceau",
          "stepTheme": "Le sens d'un morceau",
          "stepBadge": "Le sens d'un morceau",
          "paragraphText": "Sur un intervalle, $x\\mapsto ax+b$ est croissante si $a>0$, décroissante si $a<0$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p06_q3",
            "type": "mcq",
            "prompt": "Sur $]-4;3[$, $f(x)=-\\frac87x+\\frac{10}{7}$. Comment varie $f$ ?",
            "options": [
              "Strictement croissante",
              "Strictement décroissante",
              "Constante",
              "Croissante puis décroissante"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le coefficient $-\\frac87$ est négatif."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Les valeurs aux bornes",
          "stepTheme": "Les valeurs aux bornes",
          "stepBadge": "Les valeurs aux bornes",
          "paragraphText": "$-\\frac87\\times(-4)+\\frac{10}{7}=\\frac{42}{7}$ et $-\\frac87\\times3+\\frac{10}{7}=-\\frac{14}{7}$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p06_q4",
            "type": "mcq",
            "prompt": "Sur $]-4;3[$, entre quelles valeurs (exclues) $f(x)$ varie-t-elle ?",
            "options": [
              "Entre $-4$ et $-1$",
              "Entre $-10$ et $8$",
              "Entre $-2$ et $6$",
              "Entre $0$ et $3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule l'expression aux bornes : $6$ et $-2$, toutes deux exclues."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Résoudre f(x) = 0",
          "stepTheme": "Résoudre f(x) = 0",
          "stepBadge": "Résoudre f(x) = 0",
          "paragraphText": "2e morceau : $-\\frac87x+\\frac{10}{7}=0$ ⇔ $x=\\frac54$ : convient.\n4e morceau : $2{,}5x-12=0$ ⇔ $x=\\frac{24}{5}=4{,}8$ : convient.\n1er morceau : $x=-\\frac83$ n'est pas dans $[-6;-4]$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p06_q5",
            "type": "mcq",
            "prompt": "$f(x)=3x+8$ sur $[-6;-4]$ ; $f(x)=-\\dfrac87x+\\dfrac{10}{7}$ sur $]-4;3[$ ; $f(x)=-1$ sur $[3;4]$ ; $f(x)=2{,}5x-12$ sur $]4;8]$. Quelles sont les solutions de $f(x)=0$ ?",
            "options": [
              "$\\left\\{-\\frac83\\,;\\frac54\\,;\\frac{24}{5}\\right\\}$",
              "$\\left\\{\\frac54\\right\\}$",
              "$\\{0\\}$",
              "$\\left\\{\\frac54\\,;\\frac{24}{5}\\right\\}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$-\\frac83\\approx-2{,}67$ est hors de $[-6;-4]$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une valeur jamais atteinte",
          "stepTheme": "Une valeur jamais atteinte",
          "stepBadge": "Une valeur jamais atteinte",
          "paragraphText": "Valeurs prises : $[-10;-4]$, puis $]-2;6[$, puis $-1$, puis $]-2;8]$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p06_q6",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $f(x)=-3$ ?",
            "options": [
              "$\\left\\{-\\frac{11}{3}\\right\\}$",
              "$\\{3{,}6\\}$",
              "$\\varnothing$",
              "$\\left\\{\\frac{31}{8}\\right\\}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Chaque calcul donne une valeur hors de son intervalle : $-3$ n'est jamais atteint."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Le forfait de Moya",
          "stepTheme": "Le forfait de Moya",
          "stepBadge": "Le forfait de Moya",
          "paragraphText": "Forfait 1 : $C_1(x)=300+25x$, avec $x$ le nombre de minutes de dépassement.\n$153$ min $-$ $120$ min $=33$ min.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p06_q7",
            "type": "mcq",
            "prompt": "Combien coûte le forfait 1 pour $33$ minutes de dépassement ?",
            "options": [
              "$2\\,625$ F",
              "$825$ F",
              "$1\\,050$ F",
              "$1\\,125$ F"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$300+25\\times33=300+825=1\\,125$ F."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p06_q1",
          "type": "mcq",
          "prompt": "$f(x)=3x+8$ sur $[-6;-4]$ ; $f(x)=-\\dfrac87x+\\dfrac{10}{7}$ sur $]-4;3[$ ; $f(x)=-1$ sur $[3;4]$ ; $f(x)=2{,}5x-12$ sur $]4;8]$. Que vaut $f(-5)$ ?",
          "options": [
            "$-7$",
            "$23$",
            "$-5$",
            "$7$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$-15+8=-7$."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p06_q2",
          "type": "mcq",
          "prompt": "$f(x)=3x+8$ sur $[-6;-4]$ ; $f(x)=-\\dfrac87x+\\dfrac{10}{7}$ sur $]-4;3[$ ; $f(x)=-1$ sur $[3;4]$ ; $f(x)=2{,}5x-12$ sur $]4;8]$. Combien vaut $f(7)$ ?",
          "options": [
            "$5{,}5$",
            "$17{,}5$",
            "$-1$",
            "$8$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$17{,}5-12=5{,}5$."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p06_q3",
          "type": "mcq",
          "prompt": "Sur $]-4;3[$, $f(x)=-\\frac87x+\\frac{10}{7}$. Comment varie $f$ ?",
          "options": [
            "Strictement croissante",
            "Strictement décroissante",
            "Constante",
            "Croissante puis décroissante"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le coefficient $-\\frac87$ est négatif."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p06_q4",
          "type": "mcq",
          "prompt": "Sur $]-4;3[$, entre quelles valeurs (exclues) $f(x)$ varie-t-elle ?",
          "options": [
            "Entre $-4$ et $-1$",
            "Entre $-10$ et $8$",
            "Entre $-2$ et $6$",
            "Entre $0$ et $3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule l'expression aux bornes : $6$ et $-2$, toutes deux exclues."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p06_q5",
          "type": "mcq",
          "prompt": "$f(x)=3x+8$ sur $[-6;-4]$ ; $f(x)=-\\dfrac87x+\\dfrac{10}{7}$ sur $]-4;3[$ ; $f(x)=-1$ sur $[3;4]$ ; $f(x)=2{,}5x-12$ sur $]4;8]$. Quelles sont les solutions de $f(x)=0$ ?",
          "options": [
            "$\\left\\{-\\frac83\\,;\\frac54\\,;\\frac{24}{5}\\right\\}$",
            "$\\left\\{\\frac54\\right\\}$",
            "$\\{0\\}$",
            "$\\left\\{\\frac54\\,;\\frac{24}{5}\\right\\}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$-\\frac83\\approx-2{,}67$ est hors de $[-6;-4]$."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p06_q6",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $f(x)=-3$ ?",
          "options": [
            "$\\left\\{-\\frac{11}{3}\\right\\}$",
            "$\\{3{,}6\\}$",
            "$\\varnothing$",
            "$\\left\\{\\frac{31}{8}\\right\\}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Chaque calcul donne une valeur hors de son intervalle : $-3$ n'est jamais atteint."
        },
        {
          "id": "seconde_c_maths_numerique_l13_fonctions_elementaires_p06_q7",
          "type": "mcq",
          "prompt": "Combien coûte le forfait 1 pour $33$ minutes de dépassement ?",
          "options": [
            "$2\\,625$ F",
            "$825$ F",
            "$1\\,050$ F",
            "$1\\,125$ F"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$300+25\\times33=300+825=1\\,125$ F."
        }
      ]
    }
  ]
};
