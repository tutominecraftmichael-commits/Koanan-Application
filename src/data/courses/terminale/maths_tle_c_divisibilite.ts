import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « TleC_Maths_L04_Divisibilite_dans_Z.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_TLE_C_L04_DIVISIBILITE: CurriculumChapter = {
  "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z",
  "subjectId": "maths",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [],
  "order": 4,
  "title": "Leçon 4 : Divisibilité dans ℤ",
  "summary": "Diviseurs, division euclidienne, congruences, numération, critères de divisibilité et nombres premiers.",
  "officialVolumeHours": 10,
  "contentVersion": 2,
  "source": "TleC_Maths_L04_Divisibilite_dans_Z.pdf",
  "points": [
    {
      "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p01",
      "order": 1,
      "title": "Diviseurs et multiples dans ℤ",
      "summary": "Savoir ce que signifie « b divise a » dans ℤ, avec les diviseurs négatifs et le cas particulier de 0.",
      "conceptExplanation": "Soit $a$ et $b$ deux entiers relatifs avec $b \\neq 0$.\n$b$ divise $a$ s'il existe $k \\in \\mathbb{Z}$ tel que $a = kb$. On note $b \\mid a$.\nOn dit aussi : $b$ est un diviseur de $a$, ou $a$ est un multiple de $b$.\n$D(a)$ désigne l'ensemble des diviseurs de $a$ dans $\\mathbb{Z}$, négatifs compris.\n1 et −1 divisent tout entier ; tout entier non nul divise 0 ; 0 ne divise aucun entier.",
      "keyRule": "b divise a (b ≠ 0) si et seulement si a s'écrit a = k × b avec k entier relatif.",
      "formulas": [
        {
          "name": "Définition de la divisibilité",
          "formula": "b \\mid a \\iff \\exists k \\in \\mathbb{Z},\\ a = kb \\quad (b \\neq 0)",
          "note": "On cherche toujours le facteur entier k."
        }
      ],
      "workedExample": {
        "title": "Montrer que 3 divise 6n + 15",
        "statement": "Soit n un entier relatif. Montre que 3 divise 6n + 15.",
        "methodSteps": [
          "On factorise par 3 : 6n + 15 = 3(2n + 5).",
          "Comme n est entier, k = 2n + 5 est un entier relatif.",
          "On a donc 6n + 15 = 3k avec k ∈ ℤ."
        ],
        "conclusion": "Par définition, 3 divise 6n + 15 pour tout entier relatif n."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "b divise a",
          "stepTheme": "b divise a",
          "stepBadge": "b divise a",
          "paragraphText": "Soit $a$ et $b$ deux entiers relatifs, avec $b \\neq 0$.\n• Divise : $b$ divise $a$ s'il existe un entier relatif $k$ tel que $a = kb$.\nExemple : $28 = 7 \\times 4$, donc 7 divise 28.",
          "formula": {
            "name": "Divisibilité",
            "formula": "a = k \\times b,\\ k \\in \\mathbb{Z}",
            "note": "b doit être non nul."
          },
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p01_q1",
            "type": "mcq",
            "prompt": "Pour quel entier $k$ a-t-on $-91 = 7k$ ?",
            "options": [
              "$13$",
              "$-84$",
              "$-13$",
              "$98$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$7 \\times (-13) = -91$. Donc $k = -13$ et 7 divise −91."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Diviseur, multiple et notation",
          "stepTheme": "Diviseur, multiple et notation",
          "stepBadge": "Diviseur, multiple et notation",
          "paragraphText": "Trois phrases disent la même chose :\n• « $b$ divise $a$ » ; « $b$ est un diviseur de $a$ » ; « $a$ est un multiple de $b$ ».\n• Notation : $b \\mid a$ (le diviseur est écrit à gauche).",
          "konanTip": "Dans $b \\mid a$, le plus « petit » en valeur absolue est à gauche.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p01_q2",
            "type": "mcq",
            "prompt": "L'écriture $6 \\mid 42$ signifie :",
            "options": [
              "42 est un multiple de 6",
              "42 divise 6",
              "6 est un multiple de 42",
              "$\\frac{6}{42}$ est un entier"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$42 = 7 \\times 6$ : 6 divise 42, donc 42 est un multiple de 6."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'ensemble D(a)",
          "stepTheme": "L'ensemble D(a)",
          "stepBadge": "L'ensemble D(a)",
          "paragraphText": "• $D(a)$ : ensemble des diviseurs de $a$ dans $\\mathbb{Z}$.\nDans $\\mathbb{Z}$, on n'oublie pas les diviseurs négatifs.\nExemple : $D(12) = \\{\\pm 1 ; \\pm 2 ; \\pm 3 ; \\pm 4 ; \\pm 6 ; \\pm 12\\}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p01_q3",
            "type": "mcq",
            "prompt": "Combien d'éléments contient $D(12)$, l'ensemble des diviseurs de 12 dans $\\mathbb{Z}$ ?",
            "options": [
              "6",
              "11",
              "7",
              "12"
            ],
            "correctAnswerIndex": 3,
            "explanation": "12 a 6 diviseurs positifs (1, 2, 3, 4, 6, 12) et autant de diviseurs négatifs : 12 éléments en tout."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "1, −1 et 0",
          "stepTheme": "1, −1 et 0",
          "stepBadge": "1, −1 et 0",
          "paragraphText": "Pour tout entier relatif $n$ :\n• $n = n \\times 1 = (-n) \\times (-1)$, donc 1 et −1 divisent $n$.\n• $0 = 0 \\times n$, donc 0 est un multiple de tout entier relatif.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p01_q4",
            "type": "mcq",
            "prompt": "Quelle affirmation est vraie pour tout entier relatif $n$ ?",
            "options": [
              "$n$ divise 1",
              "−1 divise $n$",
              "2 divise $n$",
              "$n$ divise −1"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$n = (-n) \\times (-1)$ avec $-n \\in \\mathbb{Z}$ : −1 divise tout entier. Les autres affirmations sont fausses pour $n = 3$, par exemple."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le piège du zéro",
          "stepTheme": "Le piège du zéro",
          "stepBadge": "Le piège du zéro",
          "paragraphText": "• Tout entier non nul divise 0, car $0 = 0 \\times b$.\n• Mais 0 ne divise aucun entier : la définition exige $b \\neq 0$.\nNe confonds pas « 5 divise 0 » (vrai) et « 0 divise 5 » (faux).",
          "konanTip": "0 peut être à droite du trait, jamais à gauche.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p01_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces écritures est correcte ?",
            "options": [
              "$0 \\mid 5$",
              "$0 \\mid 0$",
              "$0 \\mid -5$",
              "$5 \\mid 0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$0 = 0 \\times 5$, donc 5 divise 0. Les trois autres écritures placent 0 comme diviseur, ce qui est interdit."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Prouver une divisibilité",
          "stepTheme": "Prouver une divisibilité",
          "stepBadge": "Prouver une divisibilité",
          "paragraphText": "Pour prouver que $b$ divise une expression, on la factorise par $b$.\nExemple : $6n + 15 = 3(2n + 5)$, et $2n + 5$ est un entier.\nDonc 3 divise $6n + 15$ pour tout $n \\in \\mathbb{Z}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p01_q6",
            "type": "mcq",
            "prompt": "Pour tout $n \\in \\mathbb{Z}$, quel entier divise toujours $6n + 15$ ?",
            "options": [
              "6",
              "3",
              "15",
              "2"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$6n + 15 = 3(2n + 5)$. 6 et 2 ne conviennent pas, car $6n + 15$ est impair ; 15 ne divise pas 21 (cas $n = 1$)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p01_q1",
          "type": "mcq",
          "prompt": "Pour quel entier $k$ a-t-on $-91 = 7k$ ?",
          "options": [
            "$13$",
            "$-84$",
            "$-13$",
            "$98$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$7 \\times (-13) = -91$. Donc $k = -13$ et 7 divise −91."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p01_q2",
          "type": "mcq",
          "prompt": "L'écriture $6 \\mid 42$ signifie :",
          "options": [
            "42 est un multiple de 6",
            "42 divise 6",
            "6 est un multiple de 42",
            "$\\frac{6}{42}$ est un entier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$42 = 7 \\times 6$ : 6 divise 42, donc 42 est un multiple de 6."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p01_q3",
          "type": "mcq",
          "prompt": "Combien d'éléments contient $D(12)$, l'ensemble des diviseurs de 12 dans $\\mathbb{Z}$ ?",
          "options": [
            "6",
            "11",
            "7",
            "12"
          ],
          "correctAnswerIndex": 3,
          "explanation": "12 a 6 diviseurs positifs (1, 2, 3, 4, 6, 12) et autant de diviseurs négatifs : 12 éléments en tout."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p01_q4",
          "type": "mcq",
          "prompt": "Quelle affirmation est vraie pour tout entier relatif $n$ ?",
          "options": [
            "$n$ divise 1",
            "−1 divise $n$",
            "2 divise $n$",
            "$n$ divise −1"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$n = (-n) \\times (-1)$ avec $-n \\in \\mathbb{Z}$ : −1 divise tout entier. Les autres affirmations sont fausses pour $n = 3$, par exemple."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p01_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces écritures est correcte ?",
          "options": [
            "$0 \\mid 5$",
            "$0 \\mid 0$",
            "$0 \\mid -5$",
            "$5 \\mid 0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$0 = 0 \\times 5$, donc 5 divise 0. Les trois autres écritures placent 0 comme diviseur, ce qui est interdit."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p01_q6",
          "type": "mcq",
          "prompt": "Pour tout $n \\in \\mathbb{Z}$, quel entier divise toujours $6n + 15$ ?",
          "options": [
            "6",
            "3",
            "15",
            "2"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$6n + 15 = 3(2n + 5)$. 6 et 2 ne conviennent pas, car $6n + 15$ est impair ; 15 ne divise pas 21 (cas $n = 1$)."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p02",
      "order": 2,
      "title": "Propriétés de la divisibilité",
      "summary": "Utiliser les propriétés de la divisibilité, en particulier les combinaisons linéaires, pour démontrer.",
      "conceptExplanation": "Si $b \\mid a$ et $a \\neq 0$, alors $|b| \\leq |a|$.\nSi $a \\mid b$ et $b \\mid a$, alors $a = b$ ou $a = -b$.\nTransitivité : si $a \\mid b$ et $b \\mid c$, alors $a \\mid c$.\nCombinaison linéaire : si $a \\mid b$ et $a \\mid c$, alors $a \\mid pb + qc$ pour tous $p, q \\in \\mathbb{Z}$.\nLa réciproque de la dernière propriété est fausse.",
      "keyRule": "Un diviseur commun à b et c divise toute combinaison pb + qc : c'est l'outil clé des démonstrations.",
      "formulas": [
        {
          "name": "Combinaison linéaire",
          "formula": "a \\mid b \\text{ et } a \\mid c \\implies a \\mid pb + qc",
          "note": "p et q sont des entiers relatifs quelconques."
        }
      ],
      "workedExample": {
        "title": "Une fraction irréductible",
        "statement": "Montre que la fraction $\\frac{15n^{2}+8n+6}{30n^{2}+21n+13}$ est irréductible pour tout entier naturel n.",
        "methodSteps": [
          "Soit d un diviseur commun de b = 15n² + 8n + 6 et a = 30n² + 21n + 13.",
          "d divise a − 2b = 5n + 1.",
          "Or b = (5n + 1)(3n + 1) + 5, donc d divise b − (5n + 1)(3n + 1) = 5.",
          "d divise 5, donc 5n, et d divise 5n + 1 : d divise (5n + 1) − 5n = 1."
        ],
        "conclusion": "Les seuls diviseurs communs sont 1 et −1 : la fraction est irréductible."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Un diviseur n'est pas trop grand",
          "stepTheme": "Un diviseur n'est pas trop grand",
          "stepBadge": "Un diviseur n'est pas trop grand",
          "paragraphText": "Si $b$ divise $a$ et $a \\neq 0$, alors $|b| \\leq |a|$.\nConséquence : un entier non nul n'a qu'un nombre fini de diviseurs.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p02_q1",
            "type": "mcq",
            "prompt": "Lequel de ces nombres ne peut pas être un diviseur de −15 ?",
            "options": [
              "−15",
              "5",
              "30",
              "−3"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$|30| > |-15|$ : 30 ne peut pas diviser −15. Les trois autres divisent bien −15."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "a divise b et b divise a",
          "stepTheme": "a divise b et b divise a",
          "stepBadge": "a divise b et b divise a",
          "paragraphText": "Si $a \\mid b$ et $b \\mid a$, alors $a = b$ ou $a = -b$.\nEn effet $|a| \\leq |b|$ et $|b| \\leq |a|$, donc $|a| = |b|$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p02_q2",
            "type": "mcq",
            "prompt": "On sait que $a$ divise 7 et que 7 divise $a$. Que vaut $a$ ?",
            "options": [
              "Uniquement 7",
              "1 ou 7",
              "±1 ou ±7",
              "7 ou −7"
            ],
            "correctAnswerIndex": 3,
            "explanation": "D'après la propriété, $a = 7$ ou $a = -7$. Les valeurs ±1 divisent 7, mais 7 ne divise pas ±1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La transitivité",
          "stepTheme": "La transitivité",
          "stepBadge": "La transitivité",
          "paragraphText": "• Transitivité : si $a \\mid b$ et $b \\mid c$, alors $a \\mid c$.\nExemple : $4 \\mid 12$ et $12 \\mid 36$, donc $4 \\mid 36$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p02_q3",
            "type": "mcq",
            "prompt": "On sait que 6 divise $n$. Quelle conclusion est sûre ?",
            "options": [
              "3 divise $n$",
              "12 divise $n$",
              "$n$ divise 6",
              "9 divise $n$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$3 \\mid 6$ et $6 \\mid n$, donc $3 \\mid n$ par transitivité. Avec $n = 6$, ni 12 ni 9 ne divisent $n$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les combinaisons linéaires",
          "stepTheme": "Les combinaisons linéaires",
          "stepBadge": "Les combinaisons linéaires",
          "paragraphText": "Si $a$ divise $b$ et $c$, alors $a$ divise $pb + qc$ pour tous entiers $p$ et $q$.\nCas utile : $a$ divise la différence $b - c$.",
          "formula": {
            "name": "Combinaison linéaire",
            "formula": "a \\mid b,\\ a \\mid c \\implies a \\mid pb + qc",
            "note": "p, q ∈ ℤ"
          },
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p02_q4",
            "type": "mcq",
            "prompt": "Un entier $d$ divise $n$ et $n + 4$. Que divise forcément $d$ ?",
            "options": [
              "$n + 2$",
              "4",
              "$2n + 5$",
              "$8n + 1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$d$ divise la différence $(n + 4) - n = 4$. Avec $d = n = 4$, $d$ ne divise ni $n + 2 = 6$, ni $2n + 5 = 13$, ni $8n + 1 = 33$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La réciproque est fausse",
          "stepTheme": "La réciproque est fausse",
          "stepBadge": "La réciproque est fausse",
          "paragraphText": "Si $d$ divise une somme $b + c$, il ne divise pas forcément $b$ ni $c$.\nContre-exemple : 5 divise $2 + 3$, mais 5 ne divise ni 2 ni 3.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p02_q5",
            "type": "mcq",
            "prompt": "Quelle affirmation est fausse ?",
            "options": [
              "Si $d \\mid b$ et $d \\mid c$, alors $d \\mid b - c$.",
              "Si $d \\mid b$, alors $d \\mid 7b$.",
              "Si $d \\mid b + c$, alors $d \\mid b$.",
              "Si $d \\mid b$ et $d \\mid c$, alors $d \\mid 2b + 3c$."
            ],
            "correctAnswerIndex": 2,
            "explanation": "5 divise $2 + 3$ sans diviser 2. Les trois autres affirmations sont des combinaisons linéaires, donc vraies."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Faire baisser le degré",
          "stepTheme": "Faire baisser le degré",
          "stepBadge": "Faire baisser le degré",
          "paragraphText": "Pour trouver les diviseurs communs de deux expressions, on les combine pour faire disparaître les termes en $n^{2}$.\nAvec $a = 30n^{2} + 21n + 13$ et $b = 15n^{2} + 8n + 6$, on calcule $a - 2b$.\nTout diviseur commun $d$ de $a$ et $b$ divise $a - 2b$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p02_q6",
            "type": "mcq",
            "prompt": "Avec $a = 30n^{2} + 21n + 13$ et $b = 15n^{2} + 8n + 6$, que vaut $a - 2b$ ?",
            "options": [
              "$5n + 25$",
              "$37n + 25$",
              "$15n^{2} + 13n + 7$",
              "$5n + 1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$2b = 30n^{2} + 16n + 12$, donc $a - 2b = 21n - 16n + 13 - 12 = 5n + 1$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "La fraction est irréductible",
          "stepTheme": "La fraction est irréductible",
          "stepBadge": "La fraction est irréductible",
          "paragraphText": "On a $b = (5n + 1)(3n + 1) + 5$, donc $d$ divise 5.\n$d$ divise 5, donc $5n$ ; et $d$ divise $5n + 1$.\nDonc $d$ divise $(5n + 1) - 5n = 1$ : la fraction $\\frac{b}{a}$ est irréductible.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p02_q7",
            "type": "mcq",
            "prompt": "Dans cette démonstration, pourquoi $d$ divise-t-il 1 ?",
            "options": [
              "Car 5 est premier",
              "Car $d$ divise $5n$ et $5n + 1$",
              "Car $5n + 1$ est impair",
              "Car $d$ divise $3n + 1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$d \\mid 5$ donne $d \\mid 5n$. Avec $d \\mid 5n + 1$, la différence donne $d \\mid 1$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepTitle": "Deux entiers consécutifs",
          "stepTheme": "Deux entiers consécutifs",
          "stepBadge": "Deux entiers consécutifs",
          "paragraphText": "$n$ et $n + 1$ sont consécutifs : l'un des deux est pair.\nDonc le produit $n(n + 1)$ est toujours un multiple de 2.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p02_q8",
            "type": "mcq",
            "prompt": "Pour tout $n \\in \\mathbb{Z}$, $n(n + 1)$ est toujours un multiple de :",
            "options": [
              "3",
              "6",
              "4",
              "2"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Un des deux facteurs est pair. Pour $n = 1$, $n(n + 1) = 2$ n'est multiple ni de 3, ni de 4, ni de 6."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p02_q1",
          "type": "mcq",
          "prompt": "Lequel de ces nombres ne peut pas être un diviseur de −15 ?",
          "options": [
            "−15",
            "5",
            "30",
            "−3"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$|30| > |-15|$ : 30 ne peut pas diviser −15. Les trois autres divisent bien −15."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p02_q2",
          "type": "mcq",
          "prompt": "On sait que $a$ divise 7 et que 7 divise $a$. Que vaut $a$ ?",
          "options": [
            "Uniquement 7",
            "1 ou 7",
            "±1 ou ±7",
            "7 ou −7"
          ],
          "correctAnswerIndex": 3,
          "explanation": "D'après la propriété, $a = 7$ ou $a = -7$. Les valeurs ±1 divisent 7, mais 7 ne divise pas ±1."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p02_q3",
          "type": "mcq",
          "prompt": "On sait que 6 divise $n$. Quelle conclusion est sûre ?",
          "options": [
            "3 divise $n$",
            "12 divise $n$",
            "$n$ divise 6",
            "9 divise $n$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$3 \\mid 6$ et $6 \\mid n$, donc $3 \\mid n$ par transitivité. Avec $n = 6$, ni 12 ni 9 ne divisent $n$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p02_q4",
          "type": "mcq",
          "prompt": "Un entier $d$ divise $n$ et $n + 4$. Que divise forcément $d$ ?",
          "options": [
            "$n + 2$",
            "4",
            "$2n + 5$",
            "$8n + 1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$d$ divise la différence $(n + 4) - n = 4$. Avec $d = n = 4$, $d$ ne divise ni $n + 2 = 6$, ni $2n + 5 = 13$, ni $8n + 1 = 33$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p02_q5",
          "type": "mcq",
          "prompt": "Quelle affirmation est fausse ?",
          "options": [
            "Si $d \\mid b$ et $d \\mid c$, alors $d \\mid b - c$.",
            "Si $d \\mid b$, alors $d \\mid 7b$.",
            "Si $d \\mid b + c$, alors $d \\mid b$.",
            "Si $d \\mid b$ et $d \\mid c$, alors $d \\mid 2b + 3c$."
          ],
          "correctAnswerIndex": 2,
          "explanation": "5 divise $2 + 3$ sans diviser 2. Les trois autres affirmations sont des combinaisons linéaires, donc vraies."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p02_q6",
          "type": "mcq",
          "prompt": "Avec $a = 30n^{2} + 21n + 13$ et $b = 15n^{2} + 8n + 6$, que vaut $a - 2b$ ?",
          "options": [
            "$5n + 25$",
            "$37n + 25$",
            "$15n^{2} + 13n + 7$",
            "$5n + 1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$2b = 30n^{2} + 16n + 12$, donc $a - 2b = 21n - 16n + 13 - 12 = 5n + 1$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p02_q7",
          "type": "mcq",
          "prompt": "Dans cette démonstration, pourquoi $d$ divise-t-il 1 ?",
          "options": [
            "Car 5 est premier",
            "Car $d$ divise $5n$ et $5n + 1$",
            "Car $5n + 1$ est impair",
            "Car $d$ divise $3n + 1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$d \\mid 5$ donne $d \\mid 5n$. Avec $d \\mid 5n + 1$, la différence donne $d \\mid 1$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p02_q8",
          "type": "mcq",
          "prompt": "Pour tout $n \\in \\mathbb{Z}$, $n(n + 1)$ est toujours un multiple de :",
          "options": [
            "3",
            "6",
            "4",
            "2"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Un des deux facteurs est pair. Pour $n = 1$, $n(n + 1) = 2$ n'est multiple ni de 3, ni de 4, ni de 6."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p03",
      "order": 3,
      "title": "Division euclidienne dans ℕ et dans ℤ",
      "summary": "Effectuer une division euclidienne, y compris avec un dividende ou un diviseur négatif.",
      "conceptExplanation": "Dans ℕ : pour $b \\neq 0$, il existe un unique couple $(q ; r)$ tel que $a = bq + r$ et $0 \\leq r < b$.\nDans ℤ : pour $b \\neq 0$, il existe un unique couple $(q ; r) \\in \\mathbb{Z} \\times \\mathbb{N}$ tel que $a = bq + r$ et $0 \\leq r < |b|$.\nLe reste est toujours positif ou nul.\nMéthode : encadrer $a$ entre deux multiples consécutifs de $b$.",
      "keyRule": "Une égalité a = bq + r n'est une division euclidienne que si 0 ≤ r < |b|.",
      "formulas": [
        {
          "name": "Division euclidienne dans ℤ",
          "formula": "a = bq + r,\\quad 0 \\leq r < |b|",
          "note": "q ∈ ℤ et r ∈ ℕ ; le couple (q ; r) est unique."
        }
      ],
      "workedExample": {
        "title": "Diviser −17 par 3",
        "statement": "Effectue la division euclidienne de −17 par 3.",
        "methodSteps": [
          "On encadre −17 entre deux multiples consécutifs de 3 : −18 ≤ −17 < −15.",
          "Soit 3 × (−6) ≤ −17 < 3 × (−5), donc q = −6.",
          "r = −17 − 3 × (−6) = −17 + 18 = 1, et 0 ≤ 1 < 3."
        ],
        "conclusion": "−17 = 3 × (−6) + 1 : le quotient est −6 et le reste est 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Division euclidienne dans ℕ",
          "stepTheme": "Division euclidienne dans ℕ",
          "stepBadge": "Division euclidienne dans ℕ",
          "paragraphText": "Soit $a \\in \\mathbb{N}$ et $b \\in \\mathbb{N}^{*}$.\nIl existe un unique couple $(q ; r)$ tel que $a = bq + r$ et $0 \\leq r < b$.\n• $q$ est le quotient, $r$ est le reste.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p03_q1",
            "type": "mcq",
            "prompt": "Quels sont le quotient et le reste de la division euclidienne de 72 par 5 ?",
            "options": [
              "$q = 14$ et $r = 2$",
              "$q = 13$ et $r = 7$",
              "$q = 15$ et $r = -3$",
              "$q = 14$ et $r = 0{,}4$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$72 = 5 \\times 14 + 2$ et $0 \\leq 2 < 5$. Les autres couples ne respectent pas $0 \\leq r < 5$ ou ne sont pas entiers."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Le reste doit être plus petit",
          "stepTheme": "Le reste doit être plus petit",
          "stepBadge": "Le reste doit être plus petit",
          "paragraphText": "Une égalité $a = bq + r$ n'est pas toujours une division euclidienne.\nIl faut vérifier $0 \\leq r < b$.\nExemple : $27 = 4 \\times 5 + 7$ n'en est pas une, car $7 > 5$ et $7 > 4$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p03_q2",
            "type": "mcq",
            "prompt": "Laquelle de ces égalités traduit une division euclidienne ?",
            "options": [
              "$27 = 4 \\times 5 + 7$",
              "$50 = 6 \\times 7 + 8$",
              "$-161 = -12 \\times 13 - 5$",
              "$71 = 7 \\times 9 + 8$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$71 = 7 \\times 9 + 8$ avec $0 \\leq 8 < 9$ : c'est la division de 71 par 9. Dans les autres, le reste est trop grand ou négatif."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Division euclidienne dans ℤ",
          "stepTheme": "Division euclidienne dans ℤ",
          "stepBadge": "Division euclidienne dans ℤ",
          "paragraphText": "Soit $a \\in \\mathbb{Z}$ et $b \\in \\mathbb{Z}^{*}$.\nIl existe un unique couple $(q ; r) \\in \\mathbb{Z} \\times \\mathbb{N}$ tel que $a = bq + r$ et $0 \\leq r < |b|$.\nLe quotient peut être négatif, mais le reste est toujours positif ou nul.",
          "konanTip": "Le PDF dit « toujours positif » : il faut lire « positif ou nul », car le reste peut valoir 0.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p03_q3",
            "type": "mcq",
            "prompt": "Quels sont les restes possibles dans une division euclidienne par −6 ?",
            "options": [
              "De −5 à 0",
              "0, 1, 2, 3, 4 et 5",
              "De −5 à 5",
              "1, 2, 3, 4, 5 et 6"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le reste vérifie $0 \\leq r < |-6| = 6$ : il vaut 0, 1, 2, 3, 4 ou 5."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La méthode de l'encadrement",
          "stepTheme": "La méthode de l'encadrement",
          "stepBadge": "La méthode de l'encadrement",
          "paragraphText": "On encadre $a$ entre deux multiples consécutifs de $b$ : $bq \\leq a < b(q + 1)$.\nExemple : $-18 \\leq -17 < -15$, soit $3 \\times (-6) \\leq -17 < 3 \\times (-5)$.\nDonc $q = -6$ et $r = -17 - (-18) = 1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p03_q4",
            "type": "mcq",
            "prompt": "Quels sont le quotient et le reste de la division euclidienne de −17 par 3 ?",
            "options": [
              "$q = -5$ et $r = -2$",
              "$q = 5$ et $r = 2$",
              "$q = -6$ et $r = 1$",
              "$q = -6$ et $r = -1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$-17 = 3 \\times (-6) + 1$ avec $0 \\leq 1 < 3$. Le couple $(-5 ; -2)$ donne un reste négatif."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Corriger un reste négatif",
          "stepTheme": "Corriger un reste négatif",
          "stepBadge": "Corriger un reste négatif",
          "paragraphText": "$-161 = -12 \\times 13 - 5$ n'est pas une division euclidienne : le reste est négatif.\nOn retire 13 au produit et on l'ajoute au reste : $-161 = -13 \\times 13 + 8$.\nCette fois $0 \\leq 8 < 13$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p03_q5",
            "type": "mcq",
            "prompt": "Quel est le reste de la division euclidienne de −161 par 13 ?",
            "options": [
              "8",
              "−5",
              "5",
              "12"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$-13 \\times 13 = -169$ et $-169 + 8 = -161$, avec $0 \\leq 8 < 13$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Diviser par un nombre négatif",
          "stepTheme": "Diviser par un nombre négatif",
          "stepBadge": "Diviser par un nombre négatif",
          "paragraphText": "$361 = 15 \\times 23 + 16$.\nOn écrit $15 \\times 23 = (-15) \\times (-23)$, donc $361 = (-23) \\times (-15) + 16$.\nPar −23 : $q = -15$ et $r = 16$, car $0 \\leq 16 < 23$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p03_q6",
            "type": "mcq",
            "prompt": "Quels sont le quotient et le reste de la division euclidienne de 361 par −23 ?",
            "options": [
              "$q = 15$ et $r = 16$",
              "$q = -16$ et $r = -7$",
              "$q = -15$ et $r = -16$",
              "$q = -15$ et $r = 16$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$(-23) \\times (-15) = 345$ et $345 + 16 = 361$, avec $0 \\leq 16 < 23$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Diviser −361 par 23",
          "stepTheme": "Diviser −361 par 23",
          "stepBadge": "Diviser −361 par 23",
          "paragraphText": "$-361 = -15 \\times 23 - 16$ : le reste est négatif.\nOn retire 23 et on le rajoute : $-361 = -16 \\times 23 + 7$.\nAttention : le PDF donne $r = 16$, c'est une erreur. Le bon reste est 7.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p03_q7",
            "type": "mcq",
            "prompt": "Quel est le reste de la division euclidienne de −361 par 23 ?",
            "options": [
              "16",
              "7",
              "−16",
              "−7"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$-16 \\times 23 = -368$ et $-368 + 7 = -361$, avec $0 \\leq 7 < 23$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepTitle": "Diviser 23 par −3",
          "stepTheme": "Diviser 23 par −3",
          "stepBadge": "Diviser 23 par −3",
          "paragraphText": "On cherche un multiple de −3 juste inférieur ou égal à 23 : $21 = (-3) \\times (-7)$.\nDonc $23 = (-3) \\times (-7) + 2$, avec $0 \\leq 2 < |-3|$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p03_q8",
            "type": "mcq",
            "prompt": "Quel est le reste de la division euclidienne de 23 par −3 ?",
            "options": [
              "−2",
              "−1",
              "2",
              "1"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$23 = (-3) \\times (-7) + 2$ et $0 \\leq 2 < 3$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p03_q1",
          "type": "mcq",
          "prompt": "Quels sont le quotient et le reste de la division euclidienne de 72 par 5 ?",
          "options": [
            "$q = 14$ et $r = 2$",
            "$q = 13$ et $r = 7$",
            "$q = 15$ et $r = -3$",
            "$q = 14$ et $r = 0{,}4$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$72 = 5 \\times 14 + 2$ et $0 \\leq 2 < 5$. Les autres couples ne respectent pas $0 \\leq r < 5$ ou ne sont pas entiers."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p03_q2",
          "type": "mcq",
          "prompt": "Laquelle de ces égalités traduit une division euclidienne ?",
          "options": [
            "$27 = 4 \\times 5 + 7$",
            "$50 = 6 \\times 7 + 8$",
            "$-161 = -12 \\times 13 - 5$",
            "$71 = 7 \\times 9 + 8$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$71 = 7 \\times 9 + 8$ avec $0 \\leq 8 < 9$ : c'est la division de 71 par 9. Dans les autres, le reste est trop grand ou négatif."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p03_q3",
          "type": "mcq",
          "prompt": "Quels sont les restes possibles dans une division euclidienne par −6 ?",
          "options": [
            "De −5 à 0",
            "0, 1, 2, 3, 4 et 5",
            "De −5 à 5",
            "1, 2, 3, 4, 5 et 6"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le reste vérifie $0 \\leq r < |-6| = 6$ : il vaut 0, 1, 2, 3, 4 ou 5."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p03_q4",
          "type": "mcq",
          "prompt": "Quels sont le quotient et le reste de la division euclidienne de −17 par 3 ?",
          "options": [
            "$q = -5$ et $r = -2$",
            "$q = 5$ et $r = 2$",
            "$q = -6$ et $r = 1$",
            "$q = -6$ et $r = -1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$-17 = 3 \\times (-6) + 1$ avec $0 \\leq 1 < 3$. Le couple $(-5 ; -2)$ donne un reste négatif."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p03_q5",
          "type": "mcq",
          "prompt": "Quel est le reste de la division euclidienne de −161 par 13 ?",
          "options": [
            "8",
            "−5",
            "5",
            "12"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$-13 \\times 13 = -169$ et $-169 + 8 = -161$, avec $0 \\leq 8 < 13$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p03_q6",
          "type": "mcq",
          "prompt": "Quels sont le quotient et le reste de la division euclidienne de 361 par −23 ?",
          "options": [
            "$q = 15$ et $r = 16$",
            "$q = -16$ et $r = -7$",
            "$q = -15$ et $r = -16$",
            "$q = -15$ et $r = 16$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$(-23) \\times (-15) = 345$ et $345 + 16 = 361$, avec $0 \\leq 16 < 23$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p03_q7",
          "type": "mcq",
          "prompt": "Quel est le reste de la division euclidienne de −361 par 23 ?",
          "options": [
            "16",
            "7",
            "−16",
            "−7"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$-16 \\times 23 = -368$ et $-368 + 7 = -361$, avec $0 \\leq 7 < 23$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p03_q8",
          "type": "mcq",
          "prompt": "Quel est le reste de la division euclidienne de 23 par −3 ?",
          "options": [
            "−2",
            "−1",
            "2",
            "1"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$23 = (-3) \\times (-7) + 2$ et $0 \\leq 2 < 3$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p04",
      "order": 4,
      "title": "Congruence modulo n",
      "summary": "Comprendre la congruence modulo n et son lien avec le reste de la division euclidienne.",
      "conceptExplanation": "Soit $n \\in \\mathbb{N}^{*}$. $a \\equiv b \\; [n]$ signifie que $n$ divise $a - b$.\nCela revient à écrire $a = b + kn$ avec $k \\in \\mathbb{Z}$.\nLa congruence est réflexive, symétrique et transitive.\nSi $a \\equiv b \\; [n]$ et $0 \\leq b < n$, alors $b$ est le reste de $a$ par $n$.\nDeux entiers sont congrus modulo $n$ si et seulement s'ils ont le même reste.",
      "keyRule": "a ≡ b [n] signifie que n divise a − b, ou encore que a et b ont le même reste dans la division par n.",
      "formulas": [
        {
          "name": "Congruence",
          "formula": "a \\equiv b \\; [n] \\iff n \\mid a - b \\iff a = b + kn,\\ k \\in \\mathbb{Z}",
          "note": "n est un entier naturel non nul."
        }
      ],
      "workedExample": {
        "title": "Les deux corps célestes",
        "statement": "Le corps A apparaît tous les 105 jours à partir de J0. Le corps B apparaît tous les 81 jours, à partir de J0 + 6. Trouve une date d'apparition simultanée.",
        "methodSteps": [
          "A apparaît les jours J0 + d avec d ≡ 0 [105] ; B les jours J0 + d avec d ≡ 6 [81].",
          "On teste les multiples de 105 : 105, 210, …, 735.",
          "735 = 7 × 105 et 735 − 6 = 729 = 9 × 81, donc 735 ≡ 6 [81]."
        ],
        "conclusion": "Les deux corps apparaissent ensemble au jour J0 + 735, puis tous les PPCM(105 ; 81) = 2835 jours."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Être congru modulo n",
          "stepTheme": "Être congru modulo n",
          "stepBadge": "Être congru modulo n",
          "paragraphText": "Soit $n \\in \\mathbb{N}^{*}$.\n• Congruence : $a$ est congru à $b$ modulo $n$ si $n$ divise $a - b$.\nExemple : $23 \\equiv 3 \\; [5]$, car $23 - 3 = 20$ est un multiple de 5.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p04_q1",
            "type": "mcq",
            "prompt": "Quelle congruence est vraie ?",
            "options": [
              "$23 \\equiv 4 \\; [5]$",
              "$39 \\equiv -1 \\; [8]$",
              "$17 \\equiv 2 \\; [4]$",
              "$10 \\equiv 3 \\; [6]$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$39 - (-1) = 40 = 5 \\times 8$. Les autres différences (19, 15 et 7) ne sont pas multiples du module."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Notations et écriture équivalente",
          "stepTheme": "Notations et écriture équivalente",
          "stepBadge": "Notations et écriture équivalente",
          "paragraphText": "On note $a \\equiv b \\; [n]$ ou $a \\equiv b \\pmod{n}$.\nDire que $n$ divise $a - b$, c'est écrire $a - b = kn$.\nDonc $a \\equiv b \\; [n] \\iff a = b + kn$, avec $k \\in \\mathbb{Z}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p04_q2",
            "type": "mcq",
            "prompt": "L'écriture $x \\equiv 6 \\; [8]$ équivaut à :",
            "options": [
              "$x = 8 + 6k$, $k \\in \\mathbb{Z}$",
              "$x = 6k$, $k \\in \\mathbb{Z}$",
              "$x = 6 + 8k$, $k \\in \\mathbb{Z}$",
              "$x - 8 = 6$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$8 \\mid x - 6$, donc $x - 6 = 8k$, soit $x = 6 + 8k$ avec $k \\in \\mathbb{Z}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Réflexive, symétrique, transitive",
          "stepTheme": "Réflexive, symétrique, transitive",
          "stepBadge": "Réflexive, symétrique, transitive",
          "paragraphText": "Pour tous entiers $a$, $b$, $c$ :\n• $a \\equiv a \\; [n]$ ;\n• si $a \\equiv b \\; [n]$, alors $b \\equiv a \\; [n]$ ;\n• si $a \\equiv b \\; [n]$ et $b \\equiv c \\; [n]$, alors $a \\equiv c \\; [n]$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p04_q3",
            "type": "mcq",
            "prompt": "On sait que $a \\equiv 5 \\; [7]$ et $5 \\equiv 12 \\; [7]$. Que peut-on conclure ?",
            "options": [
              "$a \\equiv 12 \\; [7]$",
              "$a = 12$",
              "$a \\equiv 7 \\; [12]$",
              "$a \\equiv -5 \\; [7]$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par transitivité, $a \\equiv 12 \\; [7]$. On ne peut pas affirmer $a = 12$ : $a = 5$ convient aussi."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Congruence et reste",
          "stepTheme": "Congruence et reste",
          "stepBadge": "Congruence et reste",
          "paragraphText": "Si $a \\equiv b \\; [n]$ et $0 \\leq b < n$, alors $b$ est le reste de la division de $a$ par $n$.\nSi $b$ est trop grand, on lui retire des multiples de $n$ jusqu'à tomber entre 0 et $n - 1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p04_q4",
            "type": "mcq",
            "prompt": "On sait que $a \\equiv 18 \\; [7]$. Quel est le reste de la division de $a$ par 7 ?",
            "options": [
              "18",
              "11",
              "3",
              "4"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$18 = 2 \\times 7 + 4$, donc $a \\equiv 4 \\; [7]$ avec $0 \\leq 4 < 7$. 18 et 11 sont trop grands pour être un reste."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Même reste, même classe",
          "stepTheme": "Même reste, même classe",
          "stepBadge": "Même reste, même classe",
          "paragraphText": "$a \\equiv a' \\; [n]$ si et seulement si $a$ et $a'$ ont le même reste dans la division par $n$.\nExemple : 47 et 12 ont tous deux pour reste 2 dans la division par 5.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p04_q5",
            "type": "mcq",
            "prompt": "Lequel de ces nombres est congru à 47 modulo 5 ?",
            "options": [
              "15",
              "12",
              "43",
              "49"
            ],
            "correctAnswerIndex": 1,
            "explanation": "47 et 12 ont le même reste, 2, dans la division par 5. Les restes de 15, 43 et 49 sont 0, 3 et 4."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Un nombre négatif n'est pas un reste",
          "stepTheme": "Un nombre négatif n'est pas un reste",
          "stepBadge": "Un nombre négatif n'est pas un reste",
          "paragraphText": "$-17 \\equiv -2 \\; [3]$ est vrai, mais −2 n'est pas le reste.\nLe reste doit vérifier $0 \\leq r < 3$.\nOn ajoute 3 : $-17 \\equiv -2 + 3 = 1 \\; [3]$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p04_q6",
            "type": "mcq",
            "prompt": "Quel est le reste de la division de −17 par 3 ?",
            "options": [
              "−2",
              "2",
              "1",
              "−5"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$-17 = 3 \\times (-6) + 1$ : le reste est 1."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Le reste de a quand a ≡ 2020 [13]",
          "stepTheme": "Le reste de a quand a ≡ 2020 [13]",
          "stepBadge": "Le reste de a quand a ≡ 2020 [13]",
          "paragraphText": "$2020 = 13 \\times 155 + 5$, donc $2020 \\equiv 5 \\; [13]$.\nSi $a \\equiv 2020 \\; [13]$, alors $a$ a le même reste que 2020.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p04_q7",
            "type": "mcq",
            "prompt": "On sait que $a \\equiv 2020 \\; [13]$. Quel est le reste $r$ de la division de $a$ par 13 ?",
            "options": [
              "5",
              "2020",
              "8",
              "155"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$13 \\times 155 = 2015$ et $2020 - 2015 = 5$. Donc $r = 5$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepTitle": "Les deux corps célestes",
          "stepTheme": "Les deux corps célestes",
          "stepBadge": "Les deux corps célestes",
          "paragraphText": "Le corps A apparaît les jours J0 + $d$ avec $d \\equiv 0 \\; [105]$.\nLe corps B apparaît les jours J0 + $d$ avec $d \\equiv 6 \\; [81]$.\nUne apparition simultanée vérifie les deux congruences à la fois.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p04_q8",
            "type": "mcq",
            "prompt": "Le corps A apparaît les jours J0 $+\\,d$ avec $d\\equiv0\\;[105]$ ; le corps B, les jours J0 $+\\,d$ avec $d\\equiv6\\;[81]$. Lequel de ces jours, comptés après J0, est une apparition simultanée ?",
            "options": [
              "630",
              "729",
              "735",
              "405"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$735 = 7 \\times 105$ et $735 - 6 = 729 = 9 \\times 81$. Les dates suivantes reviennent tous les $\\text{PPCM}(105 ; 81) = 2835$ jours."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p04_q1",
          "type": "mcq",
          "prompt": "Quelle congruence est vraie ?",
          "options": [
            "$23 \\equiv 4 \\; [5]$",
            "$39 \\equiv -1 \\; [8]$",
            "$17 \\equiv 2 \\; [4]$",
            "$10 \\equiv 3 \\; [6]$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$39 - (-1) = 40 = 5 \\times 8$. Les autres différences (19, 15 et 7) ne sont pas multiples du module."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p04_q2",
          "type": "mcq",
          "prompt": "L'écriture $x \\equiv 6 \\; [8]$ équivaut à :",
          "options": [
            "$x = 8 + 6k$, $k \\in \\mathbb{Z}$",
            "$x = 6k$, $k \\in \\mathbb{Z}$",
            "$x = 6 + 8k$, $k \\in \\mathbb{Z}$",
            "$x - 8 = 6$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$8 \\mid x - 6$, donc $x - 6 = 8k$, soit $x = 6 + 8k$ avec $k \\in \\mathbb{Z}$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p04_q3",
          "type": "mcq",
          "prompt": "On sait que $a \\equiv 5 \\; [7]$ et $5 \\equiv 12 \\; [7]$. Que peut-on conclure ?",
          "options": [
            "$a \\equiv 12 \\; [7]$",
            "$a = 12$",
            "$a \\equiv 7 \\; [12]$",
            "$a \\equiv -5 \\; [7]$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par transitivité, $a \\equiv 12 \\; [7]$. On ne peut pas affirmer $a = 12$ : $a = 5$ convient aussi."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p04_q4",
          "type": "mcq",
          "prompt": "On sait que $a \\equiv 18 \\; [7]$. Quel est le reste de la division de $a$ par 7 ?",
          "options": [
            "18",
            "11",
            "3",
            "4"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$18 = 2 \\times 7 + 4$, donc $a \\equiv 4 \\; [7]$ avec $0 \\leq 4 < 7$. 18 et 11 sont trop grands pour être un reste."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p04_q5",
          "type": "mcq",
          "prompt": "Lequel de ces nombres est congru à 47 modulo 5 ?",
          "options": [
            "15",
            "12",
            "43",
            "49"
          ],
          "correctAnswerIndex": 1,
          "explanation": "47 et 12 ont le même reste, 2, dans la division par 5. Les restes de 15, 43 et 49 sont 0, 3 et 4."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p04_q6",
          "type": "mcq",
          "prompt": "Quel est le reste de la division de −17 par 3 ?",
          "options": [
            "−2",
            "2",
            "1",
            "−5"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$-17 = 3 \\times (-6) + 1$ : le reste est 1."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p04_q7",
          "type": "mcq",
          "prompt": "On sait que $a \\equiv 2020 \\; [13]$. Quel est le reste $r$ de la division de $a$ par 13 ?",
          "options": [
            "5",
            "2020",
            "8",
            "155"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$13 \\times 155 = 2015$ et $2020 - 2015 = 5$. Donc $r = 5$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p04_q8",
          "type": "mcq",
          "prompt": "Le corps A apparaît les jours J0 $+\\,d$ avec $d\\equiv0\\;[105]$ ; le corps B, les jours J0 $+\\,d$ avec $d\\equiv6\\;[81]$. Lequel de ces jours, comptés après J0, est une apparition simultanée ?",
          "options": [
            "630",
            "729",
            "735",
            "405"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$735 = 7 \\times 105$ et $735 - 6 = 729 = 9 \\times 81$. Les dates suivantes reviennent tous les $\\text{PPCM}(105 ; 81) = 2835$ jours."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p05",
      "order": 5,
      "title": "Calculer avec les congruences",
      "summary": "Additionner, multiplier et élever à une puissance des congruences, puis résoudre des équations simples.",
      "conceptExplanation": "Si $a \\equiv b \\; [n]$ et $c \\equiv d \\; [n]$, alors $a + c \\equiv b + d \\; [n]$ et $ac \\equiv bd \\; [n]$.\nSi $a \\equiv b \\; [n]$, alors $a^{k} \\equiv b^{k} \\; [n]$ pour tout $k \\in \\mathbb{N}^{*}$.\nOn remplace d'abord chaque nombre par son reste, puis on calcule.\nUn résultat négatif ou trop grand se ramène entre 0 et $n - 1$.\nPour résoudre $ax \\equiv b \\; [n]$, on peut dresser le tableau des restes.",
      "keyRule": "Les congruences modulo n se comportent comme des égalités pour l'addition, la multiplication et les puissances.",
      "formulas": [
        {
          "name": "Compatibilité",
          "formula": "a \\equiv b,\\ c \\equiv d \\; [n] \\implies a + c \\equiv b + d,\\ ac \\equiv bd \\; [n]",
          "note": "Valable aussi pour la soustraction."
        },
        {
          "name": "Puissance",
          "formula": "a \\equiv b \\; [n] \\implies a^{k} \\equiv b^{k} \\; [n]",
          "note": "k entier naturel non nul."
        }
      ],
      "workedExample": {
        "title": "Calculs modulo 8",
        "statement": "On donne a = 51 et b = 126. Détermine les restes de ab, de 6a − 5b et de a⁴ dans la division par 8.",
        "methodSteps": [
          "51 = 6 × 8 + 3, donc a ≡ 3 [8] ; 126 = 15 × 8 + 6, donc b ≡ 6 [8].",
          "ab ≡ 3 × 6 = 18 ≡ 2 [8].",
          "6a − 5b ≡ 18 − 30 = −12 ≡ −12 + 16 = 4 [8].",
          "a⁴ ≡ 3⁴ = 81 = 10 × 8 + 1 ≡ 1 [8]."
        ],
        "conclusion": "Les restes cherchés sont 2, 4 et 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Additionner des congruences",
          "stepTheme": "Additionner des congruences",
          "stepBadge": "Additionner des congruences",
          "paragraphText": "Si $a \\equiv b \\; [n]$ et $c \\equiv d \\; [n]$, alors $a + c \\equiv b + d \\; [n]$.\nOn ajoute les restes, puis on ramène le résultat entre 0 et $n - 1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p05_q1",
            "type": "mcq",
            "prompt": "Dans la division par 17, $m$ a pour reste 8 et $n$ a pour reste 12. Quel est le reste de $m + n$ ?",
            "options": [
              "20",
              "4",
              "2",
              "3"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$m + n \\equiv 8 + 12 = 20 \\equiv 3 \\; [17]$. 20 n'est pas un reste, car $20 \\geq 17$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Multiplier des congruences",
          "stepTheme": "Multiplier des congruences",
          "stepBadge": "Multiplier des congruences",
          "paragraphText": "Si $a \\equiv b \\; [n]$ et $c \\equiv d \\; [n]$, alors $ac \\equiv bd \\; [n]$.\nOn multiplie les restes, puis on divise le produit par $n$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p05_q2",
            "type": "mcq",
            "prompt": "Avec $m \\equiv 8 \\; [17]$ et $n \\equiv 12 \\; [17]$, quel est le reste de $mn$ dans la division par 17 ?",
            "options": [
              "96",
              "11",
              "5",
              "12"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$8 \\times 12 = 96 = 5 \\times 17 + 11$, donc $mn \\equiv 11 \\; [17]$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Élever à une puissance",
          "stepTheme": "Élever à une puissance",
          "stepBadge": "Élever à une puissance",
          "paragraphText": "Si $a \\equiv b \\; [n]$, alors $a^{k} \\equiv b^{k} \\; [n]$ pour tout $k \\in \\mathbb{N}^{*}$.\nC'est la multiplication répétée $k$ fois.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p05_q3",
            "type": "mcq",
            "prompt": "Avec $m \\equiv 8 \\; [17]$, quel est le reste de $m^{2}$ dans la division par 17 ?",
            "options": [
              "13",
              "64",
              "16",
              "4"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$m^{2} \\equiv 8^{2} = 64 = 3 \\times 17 + 13$, donc le reste est 13."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Remplacer par les restes d'abord",
          "stepTheme": "Remplacer par les restes d'abord",
          "stepBadge": "Remplacer par les restes d'abord",
          "paragraphText": "Pour éviter les grands nombres, on remplace chaque facteur par son reste.\n$51 \\equiv 3 \\; [8]$ et $126 \\equiv 6 \\; [8]$.\nDonc $51 \\times 126 \\equiv 3 \\times 6 = 18 \\equiv 2 \\; [8]$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p05_q4",
            "type": "mcq",
            "prompt": "Quel est le reste de $51 \\times 126$ dans la division par 8 ?",
            "options": [
              "18",
              "6",
              "2",
              "0"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$51 \\times 126 \\equiv 3 \\times 6 = 18 = 2 \\times 8 + 2$, donc le reste est 2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Un résultat négatif",
          "stepTheme": "Un résultat négatif",
          "stepBadge": "Un résultat négatif",
          "paragraphText": "Une soustraction peut donner un nombre négatif : ce n'est pas encore le reste.\n$6 \\times 51 - 5 \\times 126 \\equiv 6 \\times 3 - 5 \\times 6 = -12 \\; [8]$.\nOn ajoute 16 : $-12 + 16 = 4$, donc le reste est 4.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p05_q5",
            "type": "mcq",
            "prompt": "Quel est le reste de $6 \\times 51 - 5 \\times 126$ dans la division par 8 ?",
            "options": [
              "−12",
              "−4",
              "12",
              "4"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$-12 \\equiv -12 + 2 \\times 8 = 4 \\; [8]$, et $0 \\leq 4 < 8$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une puissance modulo 8",
          "stepTheme": "Une puissance modulo 8",
          "stepBadge": "Une puissance modulo 8",
          "paragraphText": "$51 \\equiv 3 \\; [8]$, donc $51^{4} \\equiv 3^{4} \\; [8]$.\n$3^{4} = 81 = 10 \\times 8 + 1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p05_q6",
            "type": "mcq",
            "prompt": "Quel est le reste de $51^{4}$ dans la division par 8 ?",
            "options": [
              "81",
              "1",
              "3",
              "4"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$51^{4} \\equiv 3^{4} = 81 \\equiv 1 \\; [8]$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Résoudre x + a ≡ b [n]",
          "stepTheme": "Résoudre x + a ≡ b [n]",
          "stepBadge": "Résoudre x + a ≡ b [n]",
          "paragraphText": "On retranche $a$ des deux côtés, puis on se ramène entre 0 et $n - 1$.\n$x + 5 \\equiv 3 \\; [8] \\iff x \\equiv -2 \\equiv 6 \\; [8]$.\nLes solutions sont les entiers $x = 6 + 8k$, $k \\in \\mathbb{Z}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p05_q7",
            "type": "mcq",
            "prompt": "Quelles sont les solutions de $x + 5 \\equiv 3 \\; [8]$ ?",
            "options": [
              "$x = 6 + 8k$, $k \\in \\mathbb{Z}$",
              "$x = -2$ seulement",
              "$x = 8 + 6k$, $k \\in \\mathbb{Z}$",
              "$x \\equiv 2 \\; [8]$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$x \\equiv 3 - 5 = -2 \\equiv 6 \\; [8]$. Il y a une infinité de solutions, pas seulement −2."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "methode",
          "stepTitle": "Le tableau des restes",
          "stepTheme": "Le tableau des restes",
          "stepBadge": "Le tableau des restes",
          "paragraphText": "Pour résoudre $3x \\equiv 5 \\; [8]$, on teste les restes possibles de $x$, de 0 à 7.\nRestes de $3x$ : 0, 3, 6, 1, 4, 7, 2, 5.\nOn lit la colonne où le reste de $3x$ vaut 5.",
          "konanTip": "Modulo 8, il suffit de tester 8 valeurs de x : de 0 à 7.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p05_q8",
            "type": "mcq",
            "prompt": "Quelles sont les solutions de $3x \\equiv 5 \\; [8]$ ?",
            "options": [
              "$x \\equiv 5 \\; [8]$",
              "$x \\equiv 3 \\; [8]$",
              "$x \\equiv 7 \\; [8]$",
              "Il n'y a aucune solution"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$3 \\times 7 = 21 = 2 \\times 8 + 5$. C'est la seule colonne du tableau où le reste vaut 5."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p05_q1",
          "type": "mcq",
          "prompt": "Dans la division par 17, $m$ a pour reste 8 et $n$ a pour reste 12. Quel est le reste de $m + n$ ?",
          "options": [
            "20",
            "4",
            "2",
            "3"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$m + n \\equiv 8 + 12 = 20 \\equiv 3 \\; [17]$. 20 n'est pas un reste, car $20 \\geq 17$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p05_q2",
          "type": "mcq",
          "prompt": "Avec $m \\equiv 8 \\; [17]$ et $n \\equiv 12 \\; [17]$, quel est le reste de $mn$ dans la division par 17 ?",
          "options": [
            "96",
            "11",
            "5",
            "12"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$8 \\times 12 = 96 = 5 \\times 17 + 11$, donc $mn \\equiv 11 \\; [17]$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p05_q3",
          "type": "mcq",
          "prompt": "Avec $m \\equiv 8 \\; [17]$, quel est le reste de $m^{2}$ dans la division par 17 ?",
          "options": [
            "13",
            "64",
            "16",
            "4"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$m^{2} \\equiv 8^{2} = 64 = 3 \\times 17 + 13$, donc le reste est 13."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p05_q4",
          "type": "mcq",
          "prompt": "Quel est le reste de $51 \\times 126$ dans la division par 8 ?",
          "options": [
            "18",
            "6",
            "2",
            "0"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$51 \\times 126 \\equiv 3 \\times 6 = 18 = 2 \\times 8 + 2$, donc le reste est 2."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p05_q5",
          "type": "mcq",
          "prompt": "Quel est le reste de $6 \\times 51 - 5 \\times 126$ dans la division par 8 ?",
          "options": [
            "−12",
            "−4",
            "12",
            "4"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$-12 \\equiv -12 + 2 \\times 8 = 4 \\; [8]$, et $0 \\leq 4 < 8$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p05_q6",
          "type": "mcq",
          "prompt": "Quel est le reste de $51^{4}$ dans la division par 8 ?",
          "options": [
            "81",
            "1",
            "3",
            "4"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$51^{4} \\equiv 3^{4} = 81 \\equiv 1 \\; [8]$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p05_q7",
          "type": "mcq",
          "prompt": "Quelles sont les solutions de $x + 5 \\equiv 3 \\; [8]$ ?",
          "options": [
            "$x = 6 + 8k$, $k \\in \\mathbb{Z}$",
            "$x = -2$ seulement",
            "$x = 8 + 6k$, $k \\in \\mathbb{Z}$",
            "$x \\equiv 2 \\; [8]$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$x \\equiv 3 - 5 = -2 \\equiv 6 \\; [8]$. Il y a une infinité de solutions, pas seulement −2."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p05_q8",
          "type": "mcq",
          "prompt": "Quelles sont les solutions de $3x \\equiv 5 \\; [8]$ ?",
          "options": [
            "$x \\equiv 5 \\; [8]$",
            "$x \\equiv 3 \\; [8]$",
            "$x \\equiv 7 \\; [8]$",
            "Il n'y a aucune solution"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$3 \\times 7 = 21 = 2 \\times 8 + 5$. C'est la seule colonne du tableau où le reste vaut 5."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p06",
      "order": 6,
      "title": "Numération : écrire un nombre en base b",
      "summary": "Passer de la base 10 à une base b et inversement, en particulier en bases 2, 8 et 16.",
      "conceptExplanation": "Soit $b \\geq 2$. Tout entier naturel non nul s'écrit de façon unique $x = a_{n}b^{n} + \\dots + a_{1}b + a_{0}$, avec $0 \\leq a_{k} < b$ et $a_{n} \\neq 0$.\nBase 10 vers base b : divisions successives par b, puis lecture des restes de bas en haut.\nBase b vers base 10 : on développe en puissances de b.\nEn base 16, A = 10, B = 11, C = 12, D = 13, E = 14 et F = 15.\nUn nombre formé de n chiffres 1 en base a vaut $\\frac{a^{n} - 1}{a - 1}$.",
      "keyRule": "En base b, on n'utilise que des chiffres de 0 à b − 1 ; pour convertir vers la base b, on divise par b et on lit les restes à l'envers.",
      "formulas": [
        {
          "name": "Écriture en base b",
          "formula": "x = a_{n}b^{n} + a_{n-1}b^{n-1} + \\dots + a_{1}b + a_{0}",
          "note": "0 ≤ a_k < b et a_n ≠ 0."
        },
        {
          "name": "Nombre formé de n chiffres 1",
          "formula": "\\overline{11\\dots1}^{\\,a} = \\frac{a^{n} - 1}{a - 1}",
          "note": "Car (a − 1)(aⁿ⁻¹ + … + a + 1) = aⁿ − 1."
        }
      ],
      "workedExample": {
        "title": "Écrire 222 en base 2",
        "statement": "Donne l'écriture de 222 en base 2.",
        "methodSteps": [
          "222 = 2 × 111 + 0 ; 111 = 2 × 55 + 1 ; 55 = 2 × 27 + 1 ; 27 = 2 × 13 + 1.",
          "13 = 2 × 6 + 1 ; 6 = 2 × 3 + 0 ; 3 = 2 × 1 + 1 ; 1 = 2 × 0 + 1.",
          "On lit les restes du dernier au premier : 1, 1, 0, 1, 1, 1, 1, 0."
        ],
        "conclusion": "222 s'écrit 11011110 en base 2 (vérification : 128 + 64 + 16 + 8 + 4 + 2 = 222)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Les chiffres d'une base b",
          "stepTheme": "Les chiffres d'une base b",
          "stepBadge": "Les chiffres d'une base b",
          "paragraphText": "Soit $b \\geq 2$. Tout entier naturel non nul s'écrit de façon unique en base $b$.\n• Chiffres autorisés : les entiers $a_{k}$ tels que $0 \\leq a_{k} < b$.\nEn base 8, on n'utilise donc que les chiffres de 0 à 7.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p06_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces écritures n'est pas valable en base 8 ?",
            "options": [
              "1027",
              "1029",
              "7770",
              "10254"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le chiffre 9 n'existe pas en base 8, puisque les chiffres vont de 0 à 7."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "De la base 10 à la base 2",
          "stepTheme": "De la base 10 à la base 2",
          "stepBadge": "De la base 10 à la base 2",
          "paragraphText": "On divise successivement par 2 jusqu'à obtenir un quotient nul.\nPour 222 : quotients 111, 55, 27, 13, 6, 3, 1, 0 ; restes 0, 1, 1, 1, 1, 0, 1, 1.\nOn écrit les restes du dernier au premier.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p06_q2",
            "type": "mcq",
            "prompt": "Quelle est l'écriture de 222 en base 2 ?",
            "options": [
              "01111011",
              "11101110",
              "1101111",
              "11011110"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$11011110_{2} = 128 + 64 + 16 + 8 + 4 + 2 = 222$. 01111011 correspond aux restes lus dans le mauvais sens."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Lire les restes à l'envers",
          "stepTheme": "Lire les restes à l'envers",
          "stepBadge": "Lire les restes à l'envers",
          "paragraphText": "Le premier reste obtenu est le chiffre des unités.\nOn lit donc les restes de bas en haut, du dernier au premier.\nPour 13 : restes 1, 0, 1, 1, donc $13 = 1101_{2}$.",
          "konanTip": "Vérifie toujours en reconvertissant : 8 + 4 + 0 + 1 = 13.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p06_q3",
            "type": "mcq",
            "prompt": "Quelle est l'écriture de 13 en base 2 ?",
            "options": [
              "1101",
              "1011",
              "111",
              "1110"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$1101_{2} = 8 + 4 + 1 = 13$. 1011 vaut 11 : c'est la lecture dans le mauvais sens."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "De la base b à la base 10",
          "stepTheme": "De la base b à la base 10",
          "stepBadge": "De la base b à la base 10",
          "paragraphText": "On développe selon les puissances de la base.\n$10254_{8} = 1 \\times 8^{4} + 0 \\times 8^{3} + 2 \\times 8^{2} + 5 \\times 8 + 4$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p06_q4",
            "type": "mcq",
            "prompt": "Quelle est la valeur décimale de $10254_{8}$ ?",
            "options": [
              "10254",
              "4232",
              "4268",
              "4276"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$4096 + 0 + 128 + 40 + 4 = 4268$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les chiffres de la base 16",
          "stepTheme": "Les chiffres de la base 16",
          "stepBadge": "Les chiffres de la base 16",
          "paragraphText": "• Base 16 (hexadécimale) : chiffres 0 à 9, puis A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.\nExemple : $2F_{16} = 2 \\times 16 + 15$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p06_q5",
            "type": "mcq",
            "prompt": "Quelle est la valeur décimale de $2F_{16}$ ?",
            "options": [
              "215",
              "47",
              "32",
              "45"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$2 \\times 16 + 15 = 47$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les puissances de 17 en base 16",
          "stepTheme": "Les puissances de 17 en base 16",
          "stepBadge": "Les puissances de 17 en base 16",
          "paragraphText": "$17 = 16 + 1$ s'écrit $11_{16}$.\n$17^{2} = 16^{2} + 2 \\times 16 + 1$ s'écrit $121_{16}$.\nOn développe $(16 + 1)^{3}$ de la même façon.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p06_q6",
            "type": "mcq",
            "prompt": "Quelle est l'écriture de $17^{3}$ en base 16 ?",
            "options": [
              "4913",
              "1221",
              "1441",
              "1331"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$(16 + 1)^{3} = 16^{3} + 3 \\times 16^{2} + 3 \\times 16 + 1$, donc $17^{3} = 1331_{16}$. 4913 est son écriture en base 10."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "2ⁿ − 1 en base 2",
          "stepTheme": "2ⁿ − 1 en base 2",
          "stepBadge": "2ⁿ − 1 en base 2",
          "paragraphText": "$2^{n} - 1 = 2^{n-1} + \\dots + 2 + 1$.\nEn base 2, il s'écrit donc avec $n$ chiffres 1.\nExemple : $11111_{2} = 2^{5} - 1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p06_q7",
            "type": "mcq",
            "prompt": "Quelle est la valeur décimale de $11111_{2}$ ?",
            "options": [
              "32",
              "15",
              "31",
              "11111"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$11111_{2} = 16 + 8 + 4 + 2 + 1 = 31 = 2^{5} - 1$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "propriete",
          "stepTitle": "Des chiffres 1 en base a",
          "stepTheme": "Des chiffres 1 en base a",
          "stepBadge": "Des chiffres 1 en base a",
          "paragraphText": "Un nombre formé de $n$ chiffres 1 en base $a$ vaut $a^{n-1} + \\dots + a + 1$.\nComme $(a - 1)(a^{n-1} + \\dots + a + 1) = a^{n} - 1$, il vaut $\\frac{a^{n} - 1}{a - 1}$.",
          "formula": {
            "name": "n chiffres 1 en base a",
            "formula": "\\frac{a^{n} - 1}{a - 1}",
            "note": "a ≥ 2"
          },
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p06_q8",
            "type": "mcq",
            "prompt": "Quelle est la valeur décimale de $111_{6}$ ?",
            "options": [
              "43",
              "111",
              "36",
              "42"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$111_{6} = 36 + 6 + 1 = 43$, et aussi $\\frac{6^{3} - 1}{6 - 1} = \\frac{215}{5} = 43$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p06_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces écritures n'est pas valable en base 8 ?",
          "options": [
            "1027",
            "1029",
            "7770",
            "10254"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le chiffre 9 n'existe pas en base 8, puisque les chiffres vont de 0 à 7."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p06_q2",
          "type": "mcq",
          "prompt": "Quelle est l'écriture de 222 en base 2 ?",
          "options": [
            "01111011",
            "11101110",
            "1101111",
            "11011110"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$11011110_{2} = 128 + 64 + 16 + 8 + 4 + 2 = 222$. 01111011 correspond aux restes lus dans le mauvais sens."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p06_q3",
          "type": "mcq",
          "prompt": "Quelle est l'écriture de 13 en base 2 ?",
          "options": [
            "1101",
            "1011",
            "111",
            "1110"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$1101_{2} = 8 + 4 + 1 = 13$. 1011 vaut 11 : c'est la lecture dans le mauvais sens."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p06_q4",
          "type": "mcq",
          "prompt": "Quelle est la valeur décimale de $10254_{8}$ ?",
          "options": [
            "10254",
            "4232",
            "4268",
            "4276"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$4096 + 0 + 128 + 40 + 4 = 4268$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p06_q5",
          "type": "mcq",
          "prompt": "Quelle est la valeur décimale de $2F_{16}$ ?",
          "options": [
            "215",
            "47",
            "32",
            "45"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$2 \\times 16 + 15 = 47$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p06_q6",
          "type": "mcq",
          "prompt": "Quelle est l'écriture de $17^{3}$ en base 16 ?",
          "options": [
            "4913",
            "1221",
            "1441",
            "1331"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$(16 + 1)^{3} = 16^{3} + 3 \\times 16^{2} + 3 \\times 16 + 1$, donc $17^{3} = 1331_{16}$. 4913 est son écriture en base 10."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p06_q7",
          "type": "mcq",
          "prompt": "Quelle est la valeur décimale de $11111_{2}$ ?",
          "options": [
            "32",
            "15",
            "31",
            "11111"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$11111_{2} = 16 + 8 + 4 + 2 + 1 = 31 = 2^{5} - 1$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p06_q8",
          "type": "mcq",
          "prompt": "Quelle est la valeur décimale de $111_{6}$ ?",
          "options": [
            "43",
            "111",
            "36",
            "42"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$111_{6} = 36 + 6 + 1 = 43$, et aussi $\\frac{6^{3} - 1}{6 - 1} = \\frac{215}{5} = 43$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p07",
      "order": 7,
      "title": "Critères de divisibilité",
      "summary": "Démontrer et utiliser les critères de divisibilité par 2, 3, 4, 5, 9, 10, 11 et 25 grâce aux congruences.",
      "conceptExplanation": "On écrit $x = \\gamma_{p}\\dots\\gamma_{1}\\gamma_{0} = \\sum_{k=0}^{p} \\gamma_{k} 10^{k}$.\nUn critère modulo $n$ s'obtient avec le reste de chaque puissance $10^{k}$ modulo $n$.\nPar 2, 5 et 10 : chiffre des unités. Par 4 et 25 : deux derniers chiffres. Par 8 : trois derniers.\nPar 3 et 9 : somme de tous les chiffres.\nPar 11 : différence entre la somme des chiffres de rang pair et celle des chiffres de rang impair.",
      "keyRule": "Chaque critère vient du reste des puissances de 10 : 10ᵏ ≡ 1 modulo 3 et 9, et 10ᵏ ≡ (−1)ᵏ modulo 11.",
      "formulas": [
        {
          "name": "Écriture décimale",
          "formula": "x = \\sum_{k=0}^{p} \\gamma_{k} 10^{k}",
          "note": "γ₀ est le chiffre des unités."
        },
        {
          "name": "Modulo 9",
          "formula": "10^{k} \\equiv 1 \\; [9] \\implies x \\equiv \\sum_{k=0}^{p} \\gamma_{k} \\; [9]",
          "note": "La somme commence à k = 0 (le PDF l'oublie)."
        }
      ],
      "workedExample": {
        "title": "6485958017 est-il divisible par 11 ?",
        "statement": "Montre que 6485958017 est divisible par 11.",
        "methodSteps": [
          "Chiffres de rang pair (unités, centaines…) : 7, 0, 5, 5, 4, de somme 21.",
          "Chiffres de rang impair (dizaines, milliers…) : 1, 8, 9, 8, 6, de somme 32.",
          "Différence : 32 − 21 = 11, qui est divisible par 11."
        ],
        "conclusion": "Comme 10ᵏ ≡ (−1)ᵏ [11], le nombre est congru à 21 − 32 = −11 ≡ 0 [11] : il est divisible par 11."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "D'où viennent les critères",
          "stepTheme": "D'où viennent les critères",
          "stepBadge": "D'où viennent les critères",
          "paragraphText": "On écrit $x = \\sum_{k=0}^{p} \\gamma_{k} 10^{k}$.\nPour un critère modulo $n$, on cherche le reste de $10^{k}$ modulo $n$.\nExemple : $10 \\equiv 1 \\; [9]$, donc $10^{k} \\equiv 1^{k} \\; [9]$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p07_q1",
            "type": "mcq",
            "prompt": "Pour tout $k \\in \\mathbb{N}$, à quoi $10^{k}$ est-il congru modulo 9 ?",
            "options": [
              "0",
              "10",
              "1",
              "$k$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$10 = 9 + 1 \\equiv 1 \\; [9]$, donc $10^{k} \\equiv 1^{k} = 1 \\; [9]$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Par 2, 5 et 10",
          "stepTheme": "Par 2, 5 et 10",
          "stepBadge": "Par 2, 5 et 10",
          "paragraphText": "Dès que $k \\geq 1$, $10^{k} \\equiv 0$ modulo 2, 5 et 10 : seul le chiffre des unités compte.\n• Par 2 : unités 0, 2, 4, 6 ou 8.\n• Par 5 : unités 0 ou 5.\n• Par 10 : unités 0.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p07_q2",
            "type": "mcq",
            "prompt": "Lequel de ces nombres est divisible à la fois par 2 et par 5 ?",
            "options": [
              "4735",
              "4730",
              "4732",
              "5002"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Être divisible par 2 et par 5, c'est être divisible par 10 : le chiffre des unités doit être 0."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Par 3 et 9",
          "stepTheme": "Par 3 et 9",
          "stepBadge": "Par 3 et 9",
          "paragraphText": "Comme $10^{k} \\equiv 1$ modulo 3 et modulo 9, un nombre est congru à la somme de ses chiffres.\n• Divisible par 3 (ou par 9) si la somme de tous ses chiffres l'est.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p07_q3",
            "type": "mcq",
            "prompt": "Lequel de ces nombres est divisible par 9 ?",
            "options": [
              "4521",
              "4517",
              "4529",
              "4527"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$4 + 5 + 2 + 7 = 18$, multiple de 9. Les autres sommes valent 12, 17 et 20."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Tous les chiffres, et 3 n'est pas 9",
          "stepTheme": "Tous les chiffres, et 3 n'est pas 9",
          "stepBadge": "Tous les chiffres, et 3 n'est pas 9",
          "paragraphText": "La somme porte sur tous les chiffres, unités comprises : le PDF oublie $\\gamma_{0}$ pour 9.\nContre-exemple : 18 est divisible par 9, mais 1 seul ne l'est pas.\nDivisible par 3 ne veut pas dire divisible par 9.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p07_q4",
            "type": "mcq",
            "prompt": "La somme des chiffres de 1236 vaut 12. Ce nombre est :",
            "options": [
              "divisible par 3, mais pas par 9",
              "divisible par 9",
              "divisible ni par 3 ni par 9",
              "divisible par 9, mais pas par 3"
            ],
            "correctAnswerIndex": 0,
            "explanation": "12 est multiple de 3, mais pas de 9. Un multiple de 9 est toujours multiple de 3, donc la dernière option est impossible."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Par 4, 25 et 8",
          "stepTheme": "Par 4, 25 et 8",
          "stepBadge": "Par 4, 25 et 8",
          "paragraphText": "Dès que $k \\geq 2$, $10^{k} \\equiv 0$ modulo 4 et modulo 25.\n• Par 4 ou 25 : on regarde le nombre formé par les deux derniers chiffres.\n• Par 8 : $1000 \\equiv 0 \\; [8]$, on regarde les trois derniers chiffres.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p07_q5",
            "type": "mcq",
            "prompt": "Lequel de ces nombres est divisible par 4 ?",
            "options": [
              "7326",
              "7342",
              "7316",
              "7314"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$16 = 4 \\times 4$. Les nombres 26, 42 et 14 ne sont pas multiples de 4."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Le critère de divisibilité par 11",
          "stepTheme": "Le critère de divisibilité par 11",
          "stepBadge": "Le critère de divisibilité par 11",
          "paragraphText": "$10 \\equiv -1 \\; [11]$, donc $10^{k} \\equiv (-1)^{k} \\; [11]$.\nOn numérote les rangs depuis les unités (rang 0).\nOn calcule la différence entre la somme des chiffres de rang pair et celle des chiffres de rang impair.",
          "formula": {
            "name": "Modulo 11",
            "formula": "10^{k} \\equiv (-1)^{k} \\; [11]",
            "note": "Les signes alternent à partir des unités."
          },
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p07_q6",
            "type": "mcq",
            "prompt": "Pour 6485958017, combien vaut l'écart entre la somme des chiffres de rang pair et celle des chiffres de rang impair ?",
            "options": [
              "53",
              "0",
              "11",
              "21"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Rangs pairs : $7 + 0 + 5 + 5 + 4 = 21$. Rangs impairs : $1 + 8 + 9 + 8 + 6 = 32$. L'écart vaut 11, donc le nombre est divisible par 11."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Trouver un reste modulo 11",
          "stepTheme": "Trouver un reste modulo 11",
          "stepBadge": "Trouver un reste modulo 11",
          "paragraphText": "Le critère donne aussi le reste.\nPour 174277, depuis les unités : $7 - 7 + 2 - 4 + 7 - 1 = 4$.\nDonc $174277 \\equiv 4 \\; [11]$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p07_q7",
            "type": "mcq",
            "prompt": "Quel est le reste de 174277 dans la division par 11 ?",
            "options": [
              "4",
              "0",
              "7",
              "28"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La somme alternée vaut 4, et $0 \\leq 4 < 11$. Vérification : $11 \\times 15843 = 174273$ et $174277 - 174273 = 4$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p07_q1",
          "type": "mcq",
          "prompt": "Pour tout $k \\in \\mathbb{N}$, à quoi $10^{k}$ est-il congru modulo 9 ?",
          "options": [
            "0",
            "10",
            "1",
            "$k$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$10 = 9 + 1 \\equiv 1 \\; [9]$, donc $10^{k} \\equiv 1^{k} = 1 \\; [9]$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p07_q2",
          "type": "mcq",
          "prompt": "Lequel de ces nombres est divisible à la fois par 2 et par 5 ?",
          "options": [
            "4735",
            "4730",
            "4732",
            "5002"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Être divisible par 2 et par 5, c'est être divisible par 10 : le chiffre des unités doit être 0."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p07_q3",
          "type": "mcq",
          "prompt": "Lequel de ces nombres est divisible par 9 ?",
          "options": [
            "4521",
            "4517",
            "4529",
            "4527"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$4 + 5 + 2 + 7 = 18$, multiple de 9. Les autres sommes valent 12, 17 et 20."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p07_q4",
          "type": "mcq",
          "prompt": "La somme des chiffres de 1236 vaut 12. Ce nombre est :",
          "options": [
            "divisible par 3, mais pas par 9",
            "divisible par 9",
            "divisible ni par 3 ni par 9",
            "divisible par 9, mais pas par 3"
          ],
          "correctAnswerIndex": 0,
          "explanation": "12 est multiple de 3, mais pas de 9. Un multiple de 9 est toujours multiple de 3, donc la dernière option est impossible."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p07_q5",
          "type": "mcq",
          "prompt": "Lequel de ces nombres est divisible par 4 ?",
          "options": [
            "7326",
            "7342",
            "7316",
            "7314"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$16 = 4 \\times 4$. Les nombres 26, 42 et 14 ne sont pas multiples de 4."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p07_q6",
          "type": "mcq",
          "prompt": "Pour 6485958017, combien vaut l'écart entre la somme des chiffres de rang pair et celle des chiffres de rang impair ?",
          "options": [
            "53",
            "0",
            "11",
            "21"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Rangs pairs : $7 + 0 + 5 + 5 + 4 = 21$. Rangs impairs : $1 + 8 + 9 + 8 + 6 = 32$. L'écart vaut 11, donc le nombre est divisible par 11."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p07_q7",
          "type": "mcq",
          "prompt": "Quel est le reste de 174277 dans la division par 11 ?",
          "options": [
            "4",
            "0",
            "7",
            "28"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La somme alternée vaut 4, et $0 \\leq 4 < 11$. Vérification : $11 \\times 15843 = 174273$ et $174277 - 174273 = 4$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p08",
      "order": 8,
      "title": "Les nombres premiers",
      "summary": "Reconnaître un nombre premier et tester la primalité avec les nombres premiers inférieurs ou égaux à √n.",
      "conceptExplanation": "Un entier naturel $p$ est premier s'il a exactement deux diviseurs positifs : 1 et $p$.\n0 et 1 ne sont pas premiers ; 2 est le seul nombre premier pair.\nTout entier $n > 1$ admet au moins un diviseur premier.\nSi $n > 1$ n'est pas premier, il a un diviseur premier $p \\leq \\sqrt{n}$.\nIl existe une infinité de nombres premiers.",
      "keyRule": "Pour savoir si n est premier, il suffit de tester les nombres premiers p tels que p ≤ √n.",
      "formulas": [
        {
          "name": "Test de primalité",
          "formula": "n \\text{ non premier} \\implies \\exists p \\text{ premier},\\ p \\mid n \\text{ et } p \\leq \\sqrt{n}",
          "note": "Valable pour n > 1."
        }
      ],
      "workedExample": {
        "title": "983 est-il premier ?",
        "statement": "Détermine si 983 est un nombre premier.",
        "methodSteps": [
          "√983 ≈ 31,35 : on teste les nombres premiers inférieurs ou égaux à 31.",
          "2, 3, 5, 7, 11, 13, 17, 19, 23, 29 et 31 ne divisent pas 983.",
          "Aucun diviseur premier inférieur ou égal à √983 n'existe."
        ],
        "conclusion": "983 est un nombre premier."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Nombre premier",
          "stepTheme": "Nombre premier",
          "stepBadge": "Nombre premier",
          "paragraphText": "• Nombre premier : entier naturel qui a exactement deux diviseurs positifs, 1 et lui-même.\nExemple : 7 est premier, ses seuls diviseurs positifs sont 1 et 7.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p08_q1",
            "type": "mcq",
            "prompt": "Lequel de ces nombres est premier ?",
            "options": [
              "51",
              "1",
              "91",
              "53"
            ],
            "correctAnswerIndex": 3,
            "explanation": "53 n'a que 1 et 53 comme diviseurs positifs. $51 = 3 \\times 17$, $91 = 7 \\times 13$, et 1 n'a qu'un seul diviseur positif."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "0, 1 et 2",
          "stepTheme": "0, 1 et 2",
          "stepBadge": "0, 1 et 2",
          "paragraphText": "• 1 n'est pas premier : il n'a qu'un seul diviseur positif.\n• 0 n'est pas premier : il a une infinité de diviseurs.\n• 2 est le seul nombre premier pair.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p08_q2",
            "type": "mcq",
            "prompt": "Quelle affirmation est vraie ?",
            "options": [
              "1 est premier",
              "2 est le seul nombre premier pair",
              "Tout nombre impair est premier",
              "0 est premier"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Tout autre nombre pair est divisible par 2, donc a au moins trois diviseurs positifs. 9 est impair mais pas premier."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Tester jusqu'à √n",
          "stepTheme": "Tester jusqu'à √n",
          "stepBadge": "Tester jusqu'à √n",
          "paragraphText": "Si $n > 1$ n'est pas premier, il a un diviseur premier $p$ tel que $p \\leq \\sqrt{n}$.\nOn teste donc seulement les nombres premiers inférieurs ou égaux à $\\sqrt{n}$.\nSi aucun ne divise $n$, alors $n$ est premier.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p08_q3",
            "type": "mcq",
            "prompt": "On a $\\sqrt{221} \\approx 14{,}9$. Quel est le plus petit diviseur premier de 221 ?",
            "options": [
              "13",
              "17",
              "11",
              "221 est premier"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$221 = 13 \\times 17$. On teste 2, 3, 5, 7 et 11 sans succès, puis 13 divise 221."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "983 est premier",
          "stepTheme": "983 est premier",
          "stepBadge": "983 est premier",
          "paragraphText": "$\\sqrt{983} \\approx 31{,}35$.\nOn teste 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 et 31 : aucun ne divise 983.\nDonc 983 est premier.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p08_q4",
            "type": "mcq",
            "prompt": "Pour montrer que 983 est premier, jusqu'à quel nombre premier faut-il tester ?",
            "options": [
              "29",
              "37",
              "31",
              "983"
            ],
            "correctAnswerIndex": 2,
            "explanation": "31 est le plus grand nombre premier inférieur ou égal à $\\sqrt{983} \\approx 31{,}35$. 37 est trop grand, et 29 ne suffit pas."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "2419 n'est pas premier",
          "stepTheme": "2419 n'est pas premier",
          "stepBadge": "2419 n'est pas premier",
          "paragraphText": "$\\sqrt{2419} \\approx 49{,}2$. On teste les nombres premiers dans l'ordre.\nLe premier diviseur trouvé est 41 : $2419 = 41 \\times 59$.\nAttention : la correction du PDF traite un autre nombre (2232), c'est une erreur.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p08_q5",
            "type": "mcq",
            "prompt": "Quel est le plus petit diviseur premier de 2419 ?",
            "options": [
              "13",
              "41",
              "31",
              "7"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$41 \\times 59 = 2419$. Ni 7, ni 13, ni 31 ne conviennent : $13 \\times 186 = 2418$ et $31 \\times 78 = 2418$, il reste 1."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Une infinité de nombres premiers",
          "stepTheme": "Une infinité de nombres premiers",
          "stepBadge": "Une infinité de nombres premiers",
          "paragraphText": "• Tout entier $n > 1$ admet au moins un diviseur premier.\n• Il existe une infinité de nombres premiers : la liste ne s'arrête jamais.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p08_q6",
            "type": "mcq",
            "prompt": "Que peut-on affirmer sur l'ensemble des nombres premiers ?",
            "options": [
              "Le plus grand nombre premier est connu",
              "Certains entiers supérieurs à 1 n'ont aucun diviseur premier",
              "Tout nombre premier est impair",
              "La liste des nombres premiers ne s'arrête jamais"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Il existe une infinité de nombres premiers. 2 est premier et pair, et tout entier supérieur à 1 a un diviseur premier."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "n premier, n + 7 ne l'est pas",
          "stepTheme": "n premier, n + 7 ne l'est pas",
          "stepBadge": "n premier, n + 7 ne l'est pas",
          "paragraphText": "Si $n = 2$, alors $n + 7 = 9 = 3 \\times 3$ n'est pas premier.\nSi $n$ est un premier impair, $n + 7$ est pair et supérieur à 2.\nDans les deux cas, $n + 7$ n'est pas premier.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p08_q7",
            "type": "mcq",
            "prompt": "Pourquoi $n + 7$ n'est-il pas premier quand $n$ est un nombre premier impair ?",
            "options": [
              "Car $n + 7$ est pair et strictement supérieur à 2",
              "Car 7 divise $n + 7$",
              "Car $n + 7$ est multiple de 3",
              "Car $n + 7$ est impair"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Impair + impair = pair. Un nombre pair plus grand que 2 est divisible par 2, donc n'est pas premier."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepTitle": "Factoriser a⁴ + a² + 1",
          "stepTheme": "Factoriser a⁴ + a² + 1",
          "stepBadge": "Factoriser a⁴ + a² + 1",
          "paragraphText": "$a^{4} + a^{2} + 1 = (a^{2} + 1)^{2} - a^{2} = (a^{2} - a + 1)(a^{2} + a + 1)$.\nPour $|a| \\geq 2$, les deux facteurs valent au moins 3 : le nombre n'est pas premier.\nPour $a = \\pm 1$, on obtient 3, qui est premier.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p08_q8",
            "type": "mcq",
            "prompt": "Pour quels entiers $a$ le nombre $a^{4} + a^{2} + 1$ est-il premier ?",
            "options": [
              "$a = 0$ seulement",
              "Pour tout $a$ impair",
              "$a = 1$ ou $a = -1$",
              "Jamais"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour $a = \\pm 1$, on obtient 3, premier. Pour $a = 0$, on obtient 1, qui n'est pas premier ; pour $a = 3$, on obtient $91 = 7 \\times 13$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p08_q1",
          "type": "mcq",
          "prompt": "Lequel de ces nombres est premier ?",
          "options": [
            "51",
            "1",
            "91",
            "53"
          ],
          "correctAnswerIndex": 3,
          "explanation": "53 n'a que 1 et 53 comme diviseurs positifs. $51 = 3 \\times 17$, $91 = 7 \\times 13$, et 1 n'a qu'un seul diviseur positif."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p08_q2",
          "type": "mcq",
          "prompt": "Quelle affirmation est vraie ?",
          "options": [
            "1 est premier",
            "2 est le seul nombre premier pair",
            "Tout nombre impair est premier",
            "0 est premier"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Tout autre nombre pair est divisible par 2, donc a au moins trois diviseurs positifs. 9 est impair mais pas premier."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p08_q3",
          "type": "mcq",
          "prompt": "On a $\\sqrt{221} \\approx 14{,}9$. Quel est le plus petit diviseur premier de 221 ?",
          "options": [
            "13",
            "17",
            "11",
            "221 est premier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$221 = 13 \\times 17$. On teste 2, 3, 5, 7 et 11 sans succès, puis 13 divise 221."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p08_q4",
          "type": "mcq",
          "prompt": "Pour montrer que 983 est premier, jusqu'à quel nombre premier faut-il tester ?",
          "options": [
            "29",
            "37",
            "31",
            "983"
          ],
          "correctAnswerIndex": 2,
          "explanation": "31 est le plus grand nombre premier inférieur ou égal à $\\sqrt{983} \\approx 31{,}35$. 37 est trop grand, et 29 ne suffit pas."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p08_q5",
          "type": "mcq",
          "prompt": "Quel est le plus petit diviseur premier de 2419 ?",
          "options": [
            "13",
            "41",
            "31",
            "7"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$41 \\times 59 = 2419$. Ni 7, ni 13, ni 31 ne conviennent : $13 \\times 186 = 2418$ et $31 \\times 78 = 2418$, il reste 1."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p08_q6",
          "type": "mcq",
          "prompt": "Que peut-on affirmer sur l'ensemble des nombres premiers ?",
          "options": [
            "Le plus grand nombre premier est connu",
            "Certains entiers supérieurs à 1 n'ont aucun diviseur premier",
            "Tout nombre premier est impair",
            "La liste des nombres premiers ne s'arrête jamais"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Il existe une infinité de nombres premiers. 2 est premier et pair, et tout entier supérieur à 1 a un diviseur premier."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p08_q7",
          "type": "mcq",
          "prompt": "Pourquoi $n + 7$ n'est-il pas premier quand $n$ est un nombre premier impair ?",
          "options": [
            "Car $n + 7$ est pair et strictement supérieur à 2",
            "Car 7 divise $n + 7$",
            "Car $n + 7$ est multiple de 3",
            "Car $n + 7$ est impair"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Impair + impair = pair. Un nombre pair plus grand que 2 est divisible par 2, donc n'est pas premier."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p08_q8",
          "type": "mcq",
          "prompt": "Pour quels entiers $a$ le nombre $a^{4} + a^{2} + 1$ est-il premier ?",
          "options": [
            "$a = 0$ seulement",
            "Pour tout $a$ impair",
            "$a = 1$ ou $a = -1$",
            "Jamais"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour $a = \\pm 1$, on obtient 3, premier. Pour $a = 0$, on obtient 1, qui n'est pas premier ; pour $a = 3$, on obtient $91 = 7 \\times 13$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p09",
      "order": 9,
      "title": "Facteurs premiers et nombre de diviseurs",
      "summary": "Décomposer un entier en produit de facteurs premiers, puis en déduire ses diviseurs et leur nombre.",
      "conceptExplanation": "Tout entier $n > 1$ s'écrit de façon unique $n = p_{1}^{\\alpha_{1}} \\times \\dots \\times p_{k}^{\\alpha_{k}}$, avec $p_{1} < \\dots < p_{k}$ premiers et $\\alpha_{i} \\in \\mathbb{N}^{*}$.\nMéthode : divisions successives par le plus petit nombre premier possible.\nLes diviseurs positifs de $n$ sont les $p_{1}^{\\beta_{1}} \\times \\dots \\times p_{k}^{\\beta_{k}}$ avec $0 \\leq \\beta_{i} \\leq \\alpha_{i}$.\nLe nombre de diviseurs positifs est $(1 + \\alpha_{1})(1 + \\alpha_{2}) \\dots (1 + \\alpha_{k})$.",
      "keyRule": "Nombre de diviseurs positifs : on ajoute 1 à chaque exposant, puis on multiplie.",
      "formulas": [
        {
          "name": "Décomposition",
          "formula": "n = p_{1}^{\\alpha_{1}} \\times p_{2}^{\\alpha_{2}} \\times \\dots \\times p_{k}^{\\alpha_{k}}",
          "note": "Les pᵢ sont premiers et les αᵢ non nuls."
        },
        {
          "name": "Nombre de diviseurs positifs",
          "formula": "(1 + \\alpha_{1})(1 + \\alpha_{2}) \\dots (1 + \\alpha_{k})",
          "note": "À doubler pour compter les diviseurs dans ℤ."
        }
      ],
      "workedExample": {
        "title": "Les diviseurs de 1092",
        "statement": "Décompose 1092 en facteurs premiers et donne le nombre de ses diviseurs positifs.",
        "methodSteps": [
          "1092 = 2 × 546 ; 546 = 2 × 273 ; 273 = 3 × 91 ; 91 = 7 × 13 ; 13 est premier.",
          "Donc 1092 = 2² × 3 × 7 × 13.",
          "Nombre de diviseurs positifs : (2 + 1)(1 + 1)(1 + 1)(1 + 1) = 3 × 2 × 2 × 2 = 24."
        ],
        "conclusion": "1092 a 24 diviseurs positifs, donc 48 diviseurs dans ℤ."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La décomposition est unique",
          "stepTheme": "La décomposition est unique",
          "stepBadge": "La décomposition est unique",
          "paragraphText": "Tout entier $n > 1$ s'écrit de façon unique comme produit de puissances de nombres premiers.\nOn range les facteurs premiers dans l'ordre croissant.\nExemple : $360 = 2^{3} \\times 3^{2} \\times 5$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p09_q1",
            "type": "mcq",
            "prompt": "Quelle est la décomposition de 360 en facteurs premiers ?",
            "options": [
              "$4 \\times 9 \\times 10$",
              "$2^{3} \\times 3 \\times 15$",
              "$2^{2} \\times 90$",
              "$2^{3} \\times 3^{2} \\times 5$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$8 \\times 9 \\times 5 = 360$ et 2, 3, 5 sont premiers. Dans les autres écritures, 4, 9, 10, 15 ou 90 ne sont pas premiers."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Les divisions successives",
          "stepTheme": "Les divisions successives",
          "stepBadge": "Les divisions successives",
          "paragraphText": "On divise par le plus petit nombre premier possible, et on recommence avec le quotient.\n1092 → 546 → 273 → 91 → 13 → 1.\nDiviseurs utilisés : 2, 2, 3, 7, 13.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p09_q2",
            "type": "mcq",
            "prompt": "Quelle est la décomposition de 1092 en facteurs premiers ?",
            "options": [
              "$2 \\times 3 \\times 7 \\times 26$",
              "$2^{2} \\times 3 \\times 7 \\times 13$",
              "$4 \\times 273$",
              "$2^{2} \\times 3 \\times 91$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$4 \\times 3 \\times 7 \\times 13 = 1092$, et tous les facteurs sont premiers."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Tous les facteurs doivent être premiers",
          "stepTheme": "Tous les facteurs doivent être premiers",
          "stepBadge": "Tous les facteurs doivent être premiers",
          "paragraphText": "Une égalité comme $1092 = 4 \\times 273$ est juste, mais ce n'est pas une décomposition en facteurs premiers.\n4 et 273 ne sont pas premiers : il faut continuer à diviser.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p09_q3",
            "type": "mcq",
            "prompt": "Laquelle de ces écritures de 1092 est une décomposition en facteurs premiers ?",
            "options": [
              "$4 \\times 3 \\times 91$",
              "$12 \\times 7 \\times 13$",
              "$2^{2} \\times 3 \\times 7 \\times 13$",
              "$2^{2} \\times 21 \\times 13$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les quatre écritures valent 1092, mais 4, 91, 12 et 21 ne sont pas premiers."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La forme des diviseurs",
          "stepTheme": "La forme des diviseurs",
          "stepBadge": "La forme des diviseurs",
          "paragraphText": "Si $n = p_{1}^{\\alpha_{1}} \\times \\dots \\times p_{k}^{\\alpha_{k}}$, ses diviseurs positifs sont les $d = p_{1}^{\\beta_{1}} \\times \\dots \\times p_{k}^{\\beta_{k}}$ avec $0 \\leq \\beta_{i} \\leq \\alpha_{i}$.\nUn diviseur ne peut pas avoir un exposant plus grand que celui de $n$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p09_q4",
            "type": "mcq",
            "prompt": "Avec $1092 = 2^{2} \\times 3 \\times 7 \\times 13$, lequel de ces nombres ne divise pas 1092 ?",
            "options": [
              "$56 = 2^{3} \\times 7$",
              "$78 = 2 \\times 3 \\times 13$",
              "$28 = 2^{2} \\times 7$",
              "$273 = 3 \\times 7 \\times 13$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "56 contient $2^{3}$, alors que 1092 ne contient que $2^{2}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Compter les diviseurs",
          "stepTheme": "Compter les diviseurs",
          "stepBadge": "Compter les diviseurs",
          "paragraphText": "Chaque exposant $\\beta_{i}$ peut prendre $\\alpha_{i} + 1$ valeurs (de 0 à $\\alpha_{i}$).\nLe nombre de diviseurs positifs est donc $(1 + \\alpha_{1})(1 + \\alpha_{2}) \\dots (1 + \\alpha_{k})$.",
          "formula": {
            "name": "Nombre de diviseurs positifs",
            "formula": "(1 + \\alpha_{1})(1 + \\alpha_{2}) \\dots (1 + \\alpha_{k})",
            "note": "Un facteur par nombre premier."
          },
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p09_q5",
            "type": "mcq",
            "prompt": "Combien 1092 a-t-il de diviseurs positifs ?",
            "options": [
              "5",
              "16",
              "24",
              "12"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$(2 + 1)(1 + 1)(1 + 1)(1 + 1) = 3 \\times 2 \\times 2 \\times 2 = 24$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ajouter 1 avant de multiplier",
          "stepTheme": "Ajouter 1 avant de multiplier",
          "stepBadge": "Ajouter 1 avant de multiplier",
          "paragraphText": "On ajoute 1 à chaque exposant, puis on multiplie.\nOn ne multiplie pas les exposants entre eux, et on ne les additionne pas.\nPour $72 = 2^{3} \\times 3^{2}$ : $(3 + 1)(2 + 1)$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p09_q6",
            "type": "mcq",
            "prompt": "Combien $72 = 2^{3} \\times 3^{2}$ a-t-il de diviseurs positifs ?",
            "options": [
              "6",
              "12",
              "5",
              "7"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$(3 + 1)(2 + 1) = 12$. 6 vient de $3 \\times 2$ et 5 de $3 + 2$ : ce sont les erreurs classiques."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Les diviseurs dans ℤ",
          "stepTheme": "Les diviseurs dans ℤ",
          "stepBadge": "Les diviseurs dans ℤ",
          "paragraphText": "Dans $\\mathbb{Z}$, chaque diviseur positif $d$ donne aussi le diviseur $-d$.\nLe nombre de diviseurs dans $\\mathbb{Z}$ est donc le double du nombre de diviseurs positifs.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p09_q7",
            "type": "mcq",
            "prompt": "Combien 1092 a-t-il de diviseurs dans $\\mathbb{Z}$ ?",
            "options": [
              "24",
              "25",
              "48",
              "47"
            ],
            "correctAnswerIndex": 2,
            "explanation": "1092 a 24 diviseurs positifs, donc $2 \\times 24 = 48$ diviseurs dans $\\mathbb{Z}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p09_q1",
          "type": "mcq",
          "prompt": "Quelle est la décomposition de 360 en facteurs premiers ?",
          "options": [
            "$4 \\times 9 \\times 10$",
            "$2^{3} \\times 3 \\times 15$",
            "$2^{2} \\times 90$",
            "$2^{3} \\times 3^{2} \\times 5$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$8 \\times 9 \\times 5 = 360$ et 2, 3, 5 sont premiers. Dans les autres écritures, 4, 9, 10, 15 ou 90 ne sont pas premiers."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p09_q2",
          "type": "mcq",
          "prompt": "Quelle est la décomposition de 1092 en facteurs premiers ?",
          "options": [
            "$2 \\times 3 \\times 7 \\times 26$",
            "$2^{2} \\times 3 \\times 7 \\times 13$",
            "$4 \\times 273$",
            "$2^{2} \\times 3 \\times 91$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$4 \\times 3 \\times 7 \\times 13 = 1092$, et tous les facteurs sont premiers."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p09_q3",
          "type": "mcq",
          "prompt": "Laquelle de ces écritures de 1092 est une décomposition en facteurs premiers ?",
          "options": [
            "$4 \\times 3 \\times 91$",
            "$12 \\times 7 \\times 13$",
            "$2^{2} \\times 3 \\times 7 \\times 13$",
            "$2^{2} \\times 21 \\times 13$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les quatre écritures valent 1092, mais 4, 91, 12 et 21 ne sont pas premiers."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p09_q4",
          "type": "mcq",
          "prompt": "Avec $1092 = 2^{2} \\times 3 \\times 7 \\times 13$, lequel de ces nombres ne divise pas 1092 ?",
          "options": [
            "$56 = 2^{3} \\times 7$",
            "$78 = 2 \\times 3 \\times 13$",
            "$28 = 2^{2} \\times 7$",
            "$273 = 3 \\times 7 \\times 13$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "56 contient $2^{3}$, alors que 1092 ne contient que $2^{2}$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p09_q5",
          "type": "mcq",
          "prompt": "Combien 1092 a-t-il de diviseurs positifs ?",
          "options": [
            "5",
            "16",
            "24",
            "12"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$(2 + 1)(1 + 1)(1 + 1)(1 + 1) = 3 \\times 2 \\times 2 \\times 2 = 24$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p09_q6",
          "type": "mcq",
          "prompt": "Combien $72 = 2^{3} \\times 3^{2}$ a-t-il de diviseurs positifs ?",
          "options": [
            "6",
            "12",
            "5",
            "7"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$(3 + 1)(2 + 1) = 12$. 6 vient de $3 \\times 2$ et 5 de $3 + 2$ : ce sont les erreurs classiques."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p09_q7",
          "type": "mcq",
          "prompt": "Combien 1092 a-t-il de diviseurs dans $\\mathbb{Z}$ ?",
          "options": [
            "24",
            "25",
            "48",
            "47"
          ],
          "correctAnswerIndex": 2,
          "explanation": "1092 a 24 diviseurs positifs, donc $2 \\times 24 = 48$ diviseurs dans $\\mathbb{Z}$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p10",
      "order": 10,
      "title": "Entraînement type BAC",
      "summary": "Réinvestir divisibilité, congruences et restes sur des exercices et situations de type BAC.",
      "conceptExplanation": "Pour une puissance, on cherche le cycle des restes : un exposant qui donne 1 ramène tout au début.\nPour prouver $n \\mid a^{k} - 1$, on montre que $a^{k} \\equiv 1 \\; [n]$.\nTout carré impair est congru à 1 modulo 8.\nUn jeu à tour de rôle se gagne souvent avec une stratégie modulo un entier.\nUn codage par congruence se décode avec la congruence inverse.",
      "keyRule": "Face à une grande puissance modulo n, on cherche d'abord le cycle des restes.",
      "formulas": [
        {
          "name": "Cycle de 5 modulo 13",
          "formula": "5^{4} \\equiv 1 \\; [13] \\implies 5^{4p + r} \\equiv 5^{r} \\; [13]",
          "note": "Le cycle 1 ; 5 ; −1 ; −5 a une période de 4."
        }
      ],
      "workedExample": {
        "title": "Montrer que 11 divise 174277²⁶²⁵ − 1",
        "statement": "Démontre que 11 divise 174277²⁶²⁵ − 1.",
        "methodSteps": [
          "Critère de 11 : 174277 ≡ 4 [11].",
          "4⁵ = 1024 = 93 × 11 + 1, donc 4⁵ ≡ 1 [11].",
          "2625 = 5 × 525, donc 174277²⁶²⁵ ≡ 4²⁶²⁵ = (4⁵)⁵²⁵ ≡ 1 [11]."
        ],
        "conclusion": "174277²⁶²⁵ − 1 ≡ 0 [11] : 11 divise 174277²⁶²⁵ − 1. Le PDF conclut à tort « 11 divise 174277 »."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Le cycle de 5ⁿ modulo 13",
          "stepTheme": "Le cycle de 5ⁿ modulo 13",
          "stepBadge": "Le cycle de 5ⁿ modulo 13",
          "paragraphText": "On calcule les premières puissances : $5^{0} \\equiv 1$, $5^{1} \\equiv 5$, $5^{2} = 25 \\equiv -1$, $5^{3} \\equiv -5$, $5^{4} \\equiv 1 \\; [13]$.\nLe cycle 1 ; 5 ; −1 ; −5 recommence tous les 4 exposants.\nAttention : la liste du PDF saute $5^{5}$ ; en réalité $5^{5} \\equiv 5$ et $5^{6} \\equiv -1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p10_q1",
            "type": "mcq",
            "prompt": "Pour quels entiers naturels $n$ a-t-on $5^{n} \\equiv -1 \\; [13]$ ?",
            "options": [
              "$n = 4p$, $p \\in \\mathbb{N}$",
              "$n$ pair",
              "$n = 4p + 2$, $p \\in \\mathbb{N}$",
              "$n = 2p + 1$, $p \\in \\mathbb{N}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Dans le cycle de période 4, −1 apparaît à la position 2. Donc $5^{n} \\equiv -1 \\; [13]$ si et seulement si $n = 4p + 2$. Pour $n = 4$ (pair), on obtient 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Quand 13 divise 5ⁿ + 5²ⁿ",
          "stepTheme": "Quand 13 divise 5ⁿ + 5²ⁿ",
          "stepBadge": "Quand 13 divise 5ⁿ + 5²ⁿ",
          "paragraphText": "$5^{n} + 5^{2n} = 5^{n}(1 + 5^{n})$.\n13 ne divise aucune puissance de 5, donc 13 divise la somme si et seulement si $5^{n} \\equiv -1 \\; [13]$.\nC'est-à-dire $n = 4p + 2$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p10_q2",
            "type": "mcq",
            "prompt": "Pour quelle valeur de $n$ le nombre 13 divise-t-il $5^{n} + 5^{2n}$ ?",
            "options": [
              "$n = 6$",
              "$n = 4$",
              "$n = 5$",
              "$n = 7$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$6 = 4 \\times 1 + 2$, donc $5^{6} \\equiv -1 \\; [13]$ et $1 + 5^{6} \\equiv 0 \\; [13]$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Une très grande puissance",
          "stepTheme": "Une très grande puissance",
          "stepBadge": "Une très grande puissance",
          "paragraphText": "On cherche un exposant qui donne 1.\n$174277 \\equiv 4 \\; [11]$ et $4^{5} = 1024 \\equiv 1 \\; [11]$.\nComme $2625 = 5 \\times 525$, on a $174277^{2625} \\equiv (4^{5})^{525} \\equiv 1 \\; [11]$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p10_q3",
            "type": "mcq",
            "prompt": "Quelle conclusion est correcte ?",
            "options": [
              "11 divise 174277",
              "$174277^{2625} \\equiv 4 \\; [11]$",
              "11 divise $174277^{2625}$",
              "11 divise $174277^{2625} - 1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$174277^{2625} \\equiv 1 \\; [11]$, donc $174277^{2625} - 1 \\equiv 0 \\; [11]$. La conclusion « 11 divise 174277 » du PDF est fausse, puisque $174277 \\equiv 4 \\; [11]$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le carré d'un nombre impair",
          "stepTheme": "Le carré d'un nombre impair",
          "stepBadge": "Le carré d'un nombre impair",
          "paragraphText": "Si $q = 2k + 1$, alors $q^{2} - 1 = 4k^{2} + 4k = 4k(k + 1)$.\n$k(k + 1)$ est pair, donc 8 divise $q^{2} - 1$.\nTout carré impair est congru à 1 modulo 8.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p10_q4",
            "type": "mcq",
            "prompt": "Quel est le reste de $2025^{2}$ dans la division par 8 ?",
            "options": [
              "0",
              "1",
              "4",
              "7"
            ],
            "correctAnswerIndex": 1,
            "explanation": "2025 est impair, donc $2025^{2} \\equiv 1 \\; [8]$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le jeu des 20 bâtonnets",
          "stepTheme": "Le jeu des 20 bâtonnets",
          "stepBadge": "Le jeu des 20 bâtonnets",
          "paragraphText": "On joue avec 20 bâtonnets. À tour de rôle, on en prend 1, 2 ou 3 ; celui qui prend le dernier perd.\nPour gagner, on laisse toujours à l'adversaire un nombre congru à 1 modulo 4 : 17, 13, 9, 5 puis 1.",
          "konanTip": "20 ≡ 0 [4] : il faut ramener le tas à 17 ≡ 1 [4] dès le premier coup.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p10_q5",
            "type": "mcq",
            "prompt": "Jeu des 20 bâtonnets : à tour de rôle, chaque joueur en prend 1, 2 ou 3, et celui qui prend le dernier perd. Pour gagner, on laisse toujours à l'adversaire un nombre congru à 1 modulo 4. Combien de bâtonnets le premier joueur doit-il prendre au premier tour ?",
            "options": [
              "1",
              "2",
              "3",
              "4"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$20 - 3 = 17 \\equiv 1 \\; [4]$. On ne peut pas prendre 4 bâtonnets d'un coup."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Répondre à chaque coup",
          "stepTheme": "Répondre à chaque coup",
          "stepBadge": "Répondre à chaque coup",
          "paragraphText": "Si l'adversaire prend $k$ bâtonnets, on en prend $4 - k$.\nChaque tour complet retire 4 bâtonnets, et le reste modulo 4 reste égal à 1.\nL'adversaire finit face au dernier bâtonnet.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p10_q6",
            "type": "mcq",
            "prompt": "L'adversaire vient de prendre 1 bâtonnet. Combien faut-il en prendre ?",
            "options": [
              "3",
              "1",
              "2",
              "4"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On prend $4 - 1 = 3$ bâtonnets : le tour complet en retire 4."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Un codage affine",
          "stepTheme": "Un codage affine",
          "stepBadge": "Un codage affine",
          "paragraphText": "On numérote A = 0, B = 1, …, Z = 25. On code chaque lettre par $y \\equiv x + 10 \\; [26]$.\nPour décoder : $x \\equiv y + 16 \\; [26]$, car $-10 \\equiv 16 \\; [26]$.\nMATHS devient WKDRC, et VIWK se décode en LYMA.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p10_q7",
            "type": "mcq",
            "prompt": "Avec $y \\equiv x + 10 \\; [26]$, comment se code la lettre T ($x = 19$) ?",
            "options": [
              "C",
              "D",
              "Y",
              "E"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$19 + 10 = 29 \\equiv 3 \\; [26]$, et 3 correspond à D."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepTitle": "Un codage par puissance",
          "stepTheme": "Un codage par puissance",
          "stepBadge": "Un codage par puissance",
          "paragraphText": "On code chaque symbole par $y \\equiv x^{3} \\; [29]$ (A = 0, B = 1, …).\nOn décode avec $x \\equiv y^{19} \\; [29]$, car $3 \\times 19 = 57 = 2 \\times 28 + 1$.\nAinsi le mot TWβTIG se décode en INDICE.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p10_q8",
            "type": "mcq",
            "prompt": "Avec $y \\equiv x^{3} \\; [29]$, comment se code la lettre M ($x = 12$) ?",
            "options": [
              "M",
              "Q",
              "S",
              "R"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$12^{3} = 1728 = 29 \\times 59 + 17$, et 17 correspond à R."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p10_q1",
          "type": "mcq",
          "prompt": "Pour quels entiers naturels $n$ a-t-on $5^{n} \\equiv -1 \\; [13]$ ?",
          "options": [
            "$n = 4p$, $p \\in \\mathbb{N}$",
            "$n$ pair",
            "$n = 4p + 2$, $p \\in \\mathbb{N}$",
            "$n = 2p + 1$, $p \\in \\mathbb{N}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Dans le cycle de période 4, −1 apparaît à la position 2. Donc $5^{n} \\equiv -1 \\; [13]$ si et seulement si $n = 4p + 2$. Pour $n = 4$ (pair), on obtient 1."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p10_q2",
          "type": "mcq",
          "prompt": "Pour quelle valeur de $n$ le nombre 13 divise-t-il $5^{n} + 5^{2n}$ ?",
          "options": [
            "$n = 6$",
            "$n = 4$",
            "$n = 5$",
            "$n = 7$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$6 = 4 \\times 1 + 2$, donc $5^{6} \\equiv -1 \\; [13]$ et $1 + 5^{6} \\equiv 0 \\; [13]$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p10_q3",
          "type": "mcq",
          "prompt": "Quelle conclusion est correcte ?",
          "options": [
            "11 divise 174277",
            "$174277^{2625} \\equiv 4 \\; [11]$",
            "11 divise $174277^{2625}$",
            "11 divise $174277^{2625} - 1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$174277^{2625} \\equiv 1 \\; [11]$, donc $174277^{2625} - 1 \\equiv 0 \\; [11]$. La conclusion « 11 divise 174277 » du PDF est fausse, puisque $174277 \\equiv 4 \\; [11]$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p10_q4",
          "type": "mcq",
          "prompt": "Quel est le reste de $2025^{2}$ dans la division par 8 ?",
          "options": [
            "0",
            "1",
            "4",
            "7"
          ],
          "correctAnswerIndex": 1,
          "explanation": "2025 est impair, donc $2025^{2} \\equiv 1 \\; [8]$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p10_q5",
          "type": "mcq",
          "prompt": "Jeu des 20 bâtonnets : à tour de rôle, chaque joueur en prend 1, 2 ou 3, et celui qui prend le dernier perd. Pour gagner, on laisse toujours à l'adversaire un nombre congru à 1 modulo 4. Combien de bâtonnets le premier joueur doit-il prendre au premier tour ?",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$20 - 3 = 17 \\equiv 1 \\; [4]$. On ne peut pas prendre 4 bâtonnets d'un coup."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p10_q6",
          "type": "mcq",
          "prompt": "L'adversaire vient de prendre 1 bâtonnet. Combien faut-il en prendre ?",
          "options": [
            "3",
            "1",
            "2",
            "4"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On prend $4 - 1 = 3$ bâtonnets : le tour complet en retire 4."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p10_q7",
          "type": "mcq",
          "prompt": "Avec $y \\equiv x + 10 \\; [26]$, comment se code la lettre T ($x = 19$) ?",
          "options": [
            "C",
            "D",
            "Y",
            "E"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$19 + 10 = 29 \\equiv 3 \\; [26]$, et 3 correspond à D."
        },
        {
          "id": "terminale_c_maths_numerique_l04_divisibilite_dans_z_p10_q8",
          "type": "mcq",
          "prompt": "Avec $y \\equiv x^{3} \\; [29]$, comment se code la lettre M ($x = 12$) ?",
          "options": [
            "M",
            "Q",
            "S",
            "R"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$12^{3} = 1728 = 29 \\times 59 + 17$, et 17 correspond à R."
        }
      ]
    }
  ]
};
