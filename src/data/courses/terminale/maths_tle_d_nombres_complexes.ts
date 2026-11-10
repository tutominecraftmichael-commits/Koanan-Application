import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « TD Maths leçon 06 Nombres complexes.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_TLE_D_L06_NOMBRES_COMPLEXES: CurriculumChapter = {
  "id": "terminale_d_maths_numerique_l06_nombres_complexes",
  "subjectId": "maths",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [],
  "order": 6,
  "title": "Leçon 6 : Nombres complexes",
  "summary": "Forme algébrique, conjugué et quotient, module et argument, forme exponentielle, Moivre et Euler, équations du second degré, racines n-ièmes de l'unité, applications à la géométrie.",
  "officialVolumeHours": 16,
  "contentVersion": 2,
  "source": "TD Maths leçon 06 Nombres complexes.pdf",
  "points": [
    {
      "id": "terminale_d_maths_numerique_l06_nombres_complexes_p01",
      "order": 1,
      "title": "Forme algébrique et calculs",
      "summary": "$z=a+ib$ avec $i^2=-1$ : on calcule comme avec des polynômes.",
      "conceptExplanation": "On admet l'existence d'un ensemble $\\mathbb{C}$, qui contient $\\mathbb{R}$ et un nombre $i$ tel que $i^2=-1$, où l'on calcule avec les mêmes règles que dans $\\mathbb{R}$.\n\nForme algébrique : tout nombre complexe s'écrit de façon unique $z=a+ib$ avec $a$ et $b$ réels.\n- $a=\\mathrm{Re}(z)$ est la partie réelle ;\n- $b=\\mathrm{Im}(z)$ est la partie imaginaire ;\n- $z$ est réel si $b=0$, imaginaire pur si $a=0$.\n\nÉgalité : $a+ib=a'+ib'\\iff a=a'$ et $b=b'$.\n\nPuissances de $i$ : $i^2=-1$, $i^3=-i$, $i^4=1$, puis cela recommence tous les 4. Ainsi $i^{2019}=i^{4\\times504+3}=i^3=-i$.\n\nExemples de calculs :\n- $(i\\sqrt5)^2=i^2\\times5=-5$ ;\n- $(1-2i)^2=1-4i+4i^2=-3-4i$ ;\n- $(1-2i)^4=(-3-4i)^2=9+24i-16=-7+24i$ ;\n- $(1-2i)^5=(-7+24i)(1-2i)=-7+14i+24i+48=41+38i$.",
      "keyRule": "$i^2=-1$. On développe comme d'habitude, puis on remplace $i^2$ par $-1$ et on regroupe partie réelle et partie imaginaire.",
      "formulas": [
        {
          "name": "Forme algébrique",
          "formula": "z=a+ib,\\quad a=\\mathrm{Re}(z),\\ b=\\mathrm{Im}(z)"
        },
        {
          "name": "Puissances de i",
          "formula": "i^2=-1\\qquad i^3=-i\\qquad i^4=1"
        }
      ],
      "workedExample": {
        "title": "Une puissance",
        "statement": "Écris $(1-2i)^5$ sous forme algébrique.",
        "methodSteps": [
          "$(1-2i)^2=1-4i-4=-3-4i$.",
          "$(1-2i)^4=(-3-4i)^2=9+24i-16=-7+24i$.",
          "$(1-2i)^5=(-7+24i)(1-2i)=-7+14i+24i-48i^2=41+38i$."
        ],
        "conclusion": "$(1-2i)^5=41+38i$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Partie réelle, partie imaginaire",
          "stepTheme": "Partie réelle, partie imaginaire",
          "stepBadge": "Partie réelle, partie imaginaire",
          "paragraphText": "Dans $z=a+ib$, $a$ est la partie réelle et $b$ (un réel, sans le $i$) la partie imaginaire.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p01_q1",
            "type": "mcq",
            "prompt": "Quelle est la partie imaginaire de $z=3-5i$ ?",
            "options": [
              "$-5i$",
              "$5$",
              "$3$",
              "$-5$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\mathrm{Im}(z)$ est le réel $-5$, sans le $i$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le carré de $i$",
          "stepTheme": "Le carré de $i$",
          "stepBadge": "Le carré de $i$",
          "paragraphText": "$i^2=-1$, donc $(i\\sqrt5)^2=i^2\\times(\\sqrt5)^2=-5$ : un réel négatif.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p01_q2",
            "type": "mcq",
            "prompt": "Que vaut $(i\\sqrt5)^2$ ?",
            "options": [
              "$-5i$",
              "$-5$",
              "$5$",
              "$5i$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$i^2\\times5=-5$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Multiplier",
          "stepTheme": "Multiplier",
          "stepBadge": "Multiplier",
          "paragraphText": "On développe, on remplace $i^2$ par $-1$, puis on regroupe : $(2+i)(3-i)=6-2i+3i-i^2=7+i$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p01_q3",
            "type": "mcq",
            "prompt": "Que vaut $(1+i)(2-3i)$ ?",
            "options": [
              "$5-i$",
              "$2-3i$",
              "$-1-i$",
              "$2+3i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$2-3i+2i-3i^2=2-i+3=5-i$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un carré",
          "stepTheme": "Un carré",
          "stepBadge": "Un carré",
          "paragraphText": "$(1-2i)^2=1-4i+4i^2=-3-4i$. Puis, de proche en proche, $(1-2i)^5=41+38i$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p01_q4",
            "type": "mcq",
            "prompt": "Que vaut $(1+i)^2$ ?",
            "options": [
              "$2$",
              "$0$",
              "$2i$",
              "$1+2i$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$1+2i+i^2=1+2i-1=2i$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Les puissances de $i$",
          "stepTheme": "Les puissances de $i$",
          "stepBadge": "Les puissances de $i$",
          "paragraphText": "$i^4=1$ : on divise l'exposant par 4 et on garde le reste. $2019=4\\times504+3$, donc $i^{2019}=i^3=-i$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p01_q5",
            "type": "mcq",
            "prompt": "Que vaut $i^{2026}$ ?",
            "options": [
              "$1$",
              "$i$",
              "$-i$",
              "$-1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$2026=4\\times506+2$, donc $i^{2026}=i^2=-1$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Réel ou imaginaire pur",
          "stepTheme": "Réel ou imaginaire pur",
          "stepBadge": "Réel ou imaginaire pur",
          "paragraphText": "$z=a+ib$ est réel si $b=0$, imaginaire pur si $a=0$. Deux complexes sont égaux si leurs parties réelles et imaginaires le sont.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p01_q6",
            "type": "mcq",
            "prompt": "Pour quelle valeur de $x$ réel $z=(x-2)+3i$ est-il imaginaire pur ?",
            "options": [
              "$x=2$",
              "$x=-2$",
              "$x=3$",
              "$x=0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La partie réelle $x-2$ doit être nulle."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Pas d'ordre dans $\\mathbb{C}$",
          "stepTheme": "Pas d'ordre dans $\\mathbb{C}$",
          "stepBadge": "Pas d'ordre dans $\\mathbb{C}$",
          "paragraphText": "On ne compare pas deux complexes non réels : écrire « $2+i>1+3i$ » n'a pas de sens. On compare des modules, qui sont des réels.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p01_q7",
            "type": "mcq",
            "prompt": "Laquelle de ces écritures a un sens ?",
            "options": [
              "$i>0$",
              "$2+i<3+i$",
              "$|2+i|<|3+i|$",
              "$i<-i$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les modules sont des réels positifs : on peut les comparer."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p01_q1",
          "type": "mcq",
          "prompt": "Quelle est la partie imaginaire de $z=3-5i$ ?",
          "options": [
            "$-5i$",
            "$5$",
            "$3$",
            "$-5$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\mathrm{Im}(z)$ est le réel $-5$, sans le $i$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p01_q2",
          "type": "mcq",
          "prompt": "Que vaut $(i\\sqrt5)^2$ ?",
          "options": [
            "$-5i$",
            "$-5$",
            "$5$",
            "$5i$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$i^2\\times5=-5$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p01_q3",
          "type": "mcq",
          "prompt": "Que vaut $(1+i)(2-3i)$ ?",
          "options": [
            "$5-i$",
            "$2-3i$",
            "$-1-i$",
            "$2+3i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$2-3i+2i-3i^2=2-i+3=5-i$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p01_q4",
          "type": "mcq",
          "prompt": "Que vaut $(1+i)^2$ ?",
          "options": [
            "$2$",
            "$0$",
            "$2i$",
            "$1+2i$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$1+2i+i^2=1+2i-1=2i$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p01_q5",
          "type": "mcq",
          "prompt": "Que vaut $i^{2026}$ ?",
          "options": [
            "$1$",
            "$i$",
            "$-i$",
            "$-1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$2026=4\\times506+2$, donc $i^{2026}=i^2=-1$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p01_q6",
          "type": "mcq",
          "prompt": "Pour quelle valeur de $x$ réel $z=(x-2)+3i$ est-il imaginaire pur ?",
          "options": [
            "$x=2$",
            "$x=-2$",
            "$x=3$",
            "$x=0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La partie réelle $x-2$ doit être nulle."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p01_q7",
          "type": "mcq",
          "prompt": "Laquelle de ces écritures a un sens ?",
          "options": [
            "$i>0$",
            "$2+i<3+i$",
            "$|2+i|<|3+i|$",
            "$i<-i$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les modules sont des réels positifs : on peut les comparer."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l06_nombres_complexes_p02",
      "order": 2,
      "title": "Conjugué, inverse et quotient",
      "summary": "$\\bar z=a-ib$ ; on multiplie par le conjugué du dénominateur.",
      "conceptExplanation": "Définition : le conjugué de $z=a+ib$ est $\\bar z=a-ib$.\n\nPropriétés :\n- $z\\bar z=a^2+b^2$, un réel positif ;\n- $z+\\bar z=2a$ et $z-\\bar z=2ib$ ;\n- $\\overline{z+z'}=\\bar z+\\bar z'$, $\\overline{zz'}=\\bar z\\,\\bar z'$, $\\overline{\\left(\\dfrac{z}{z'}\\right)}=\\dfrac{\\bar z}{\\bar z'}$, $\\overline{z^n}=\\bar z^n$ ;\n- $z$ réel $\\iff\\bar z=z$ ; $z$ imaginaire pur $\\iff\\bar z=-z$.\n\nInverse et quotient : pour écrire $\\dfrac{z}{z'}$ sous forme algébrique, on multiplie le numérateur et le dénominateur par le conjugué du dénominateur.\n\nExemple :\n$$\\dfrac{2}{1-3i}=\\dfrac{2(1+3i)}{(1-3i)(1+3i)}=\\dfrac{2+6i}{1+9}=\\dfrac15+\\dfrac35i.$$\n\nExemple : $\\dfrac{1+i}{1-i}=\\dfrac{(1+i)^2}{1+1}=\\dfrac{2i}{2}=i$.",
      "keyRule": "$\\bar z=a-ib$ et $z\\bar z=a^2+b^2$. Pour un quotient, multiplier en haut et en bas par le conjugué du dénominateur.",
      "formulas": [
        {
          "name": "Conjugué",
          "formula": "\\overline{a+ib}=a-ib\\qquad z\\bar z=a^2+b^2"
        },
        {
          "name": "Inverse",
          "formula": "\\dfrac{1}{a+ib}=\\dfrac{a-ib}{a^2+b^2}"
        }
      ],
      "workedExample": {
        "title": "Un quotient",
        "statement": "Écris $\\dfrac{2}{1-3i}$ sous forme algébrique.",
        "methodSteps": [
          "On multiplie par le conjugué $1+3i$ : $\\dfrac{2(1+3i)}{(1-3i)(1+3i)}$.",
          "Dénominateur : $1^2+3^2=10$. Numérateur : $2+6i$."
        ],
        "conclusion": "$\\dfrac{2}{1-3i}=\\dfrac15+\\dfrac35i$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le conjugué",
          "stepTheme": "Le conjugué",
          "stepBadge": "Le conjugué",
          "paragraphText": "Le conjugué de $a+ib$ est $a-ib$ : on change le signe de la partie imaginaire.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p02_q1",
            "type": "mcq",
            "prompt": "Quel est le conjugué de $z=-4+7i$ ?",
            "options": [
              "$4-7i$",
              "$-4-7i$",
              "$4+7i$",
              "$-7+4i$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On garde $-4$ et on change $7i$ en $-7i$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "$z$ fois son conjugué",
          "stepTheme": "$z$ fois son conjugué",
          "stepBadge": "$z$ fois son conjugué",
          "paragraphText": "$(a+ib)(a-ib)=a^2+b^2$ : le $i$ disparaît, il reste un réel positif.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p02_q2",
            "type": "mcq",
            "prompt": "Que vaut $(3+4i)(3-4i)$ ?",
            "options": [
              "$-7$",
              "$9-16i$",
              "$25$",
              "$7$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$3^2+4^2=25$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Écrire un quotient",
          "stepTheme": "Écrire un quotient",
          "stepBadge": "Écrire un quotient",
          "paragraphText": "$\\dfrac{2}{1-3i}=\\dfrac{2(1+3i)}{10}=\\dfrac15+\\dfrac35i$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p02_q3",
            "type": "mcq",
            "prompt": "Par quoi multiplie-t-on pour écrire $\\dfrac{5}{2+i}$ sous forme algébrique ?",
            "options": [
              "Par $2+i$",
              "Par $i$",
              "Par $5$",
              "Par $2-i$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Par le conjugué du dénominateur, $2-i$. On trouve $\\dfrac{5(2-i)}{5}=2-i$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un quotient remarquable",
          "stepTheme": "Un quotient remarquable",
          "stepBadge": "Un quotient remarquable",
          "paragraphText": "$\\dfrac{1+i}{1-i}=\\dfrac{(1+i)(1+i)}{(1-i)(1+i)}=\\dfrac{2i}{2}=i$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p02_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\dfrac{1}{i}$ ?",
            "options": [
              "$-i$",
              "$i$",
              "$1$",
              "$-1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac1i=\\dfrac{-i}{i\\times(-i)}=\\dfrac{-i}{1}=-i$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Conjugué et opérations",
          "stepTheme": "Conjugué et opérations",
          "stepBadge": "Conjugué et opérations",
          "paragraphText": "Le conjugué d'une somme, d'un produit, d'un quotient ou d'une puissance est la somme, le produit, le quotient ou la puissance des conjugués.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p02_q5",
            "type": "mcq",
            "prompt": "Si $z^5=41+38i$ pour $z=1-2i$, que vaut $\\bar z^5=(1+2i)^5$ ?",
            "options": [
              "$-41-38i$",
              "$41-38i$",
              "$41+38i$",
              "$38+41i$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\bar z^5=\\overline{z^5}=\\overline{41+38i}=41-38i$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Reconnaître un réel",
          "stepTheme": "Reconnaître un réel",
          "stepBadge": "Reconnaître un réel",
          "paragraphText": "$z$ est réel si et seulement si $\\bar z=z$ ; imaginaire pur si et seulement si $\\bar z=-z$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p02_q6",
            "type": "mcq",
            "prompt": "Pour tout complexe $z$, le nombre $z+\\bar z$ est :",
            "options": [
              "Imaginaire pur",
              "Nul",
              "Égal à $2z$",
              "Réel"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$z+\\bar z=2a=2\\,\\mathrm{Re}(z)$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le conjugué de $i$",
          "stepTheme": "Le conjugué de $i$",
          "stepBadge": "Le conjugué de $i$",
          "paragraphText": "Attention au signe : $\\bar i=-i$ et $\\overline{-3i}=3i$, mais le conjugué d'un réel est lui-même : $\\bar5=5$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p02_q7",
            "type": "mcq",
            "prompt": "Quel est le conjugué de $z=-2i$ ?",
            "options": [
              "$-2i$",
              "$2$",
              "$2i$",
              "$-2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$z=0-2i$, donc $\\bar z=0+2i=2i$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p02_q1",
          "type": "mcq",
          "prompt": "Quel est le conjugué de $z=-4+7i$ ?",
          "options": [
            "$4-7i$",
            "$-4-7i$",
            "$4+7i$",
            "$-7+4i$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On garde $-4$ et on change $7i$ en $-7i$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p02_q2",
          "type": "mcq",
          "prompt": "Que vaut $(3+4i)(3-4i)$ ?",
          "options": [
            "$-7$",
            "$9-16i$",
            "$25$",
            "$7$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$3^2+4^2=25$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p02_q3",
          "type": "mcq",
          "prompt": "Par quoi multiplie-t-on pour écrire $\\dfrac{5}{2+i}$ sous forme algébrique ?",
          "options": [
            "Par $2+i$",
            "Par $i$",
            "Par $5$",
            "Par $2-i$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Par le conjugué du dénominateur, $2-i$. On trouve $\\dfrac{5(2-i)}{5}=2-i$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p02_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\dfrac{1}{i}$ ?",
          "options": [
            "$-i$",
            "$i$",
            "$1$",
            "$-1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac1i=\\dfrac{-i}{i\\times(-i)}=\\dfrac{-i}{1}=-i$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p02_q5",
          "type": "mcq",
          "prompt": "Si $z^5=41+38i$ pour $z=1-2i$, que vaut $\\bar z^5=(1+2i)^5$ ?",
          "options": [
            "$-41-38i$",
            "$41-38i$",
            "$41+38i$",
            "$38+41i$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\bar z^5=\\overline{z^5}=\\overline{41+38i}=41-38i$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p02_q6",
          "type": "mcq",
          "prompt": "Pour tout complexe $z$, le nombre $z+\\bar z$ est :",
          "options": [
            "Imaginaire pur",
            "Nul",
            "Égal à $2z$",
            "Réel"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$z+\\bar z=2a=2\\,\\mathrm{Re}(z)$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p02_q7",
          "type": "mcq",
          "prompt": "Quel est le conjugué de $z=-2i$ ?",
          "options": [
            "$-2i$",
            "$2$",
            "$2i$",
            "$-2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$z=0-2i$, donc $\\bar z=0+2i=2i$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l06_nombres_complexes_p03",
      "order": 3,
      "title": "Module, argument et forme trigonométrique",
      "summary": "Le point $M(z)$ est repéré par sa distance à $O$ et par un angle.",
      "conceptExplanation": "Le plan est muni d'un repère orthonormé direct $(O;\\vec u,\\vec v)$. Au complexe $z=a+ib$ on associe le point $M(a;b)$ : $z$ est l'affixe de $M$.\n\nModule : $|z|=OM=\\sqrt{a^2+b^2}=\\sqrt{z\\bar z}$.\nArgument (si $z\\neq0$) : une mesure $\\theta$ de l'angle $(\\vec u,\\overrightarrow{OM})$, définie à $2\\pi$ près. On a\n$$\\cos\\theta=\\dfrac{a}{|z|}\\qquad\\sin\\theta=\\dfrac{b}{|z|}.$$\n\nForme trigonométrique : $z=r(\\cos\\theta+i\\sin\\theta)$, avec $r=|z|>0$.\n\nExemples :\n- $z=1+i$ : $|z|=\\sqrt2$, $\\cos\\theta=\\sin\\theta=\\dfrac{\\sqrt2}{2}$, donc $\\theta=\\dfrac{\\pi}{4}$ ;\n- $z=-\\sqrt3+i$ : $|z|=2$, $\\cos\\theta=-\\dfrac{\\sqrt3}{2}$, $\\sin\\theta=\\dfrac12$, donc $\\theta=\\dfrac{5\\pi}{6}$ ;\n- $z=1-i\\sqrt3$ : $|z|=2$, $\\theta=-\\dfrac{\\pi}{3}$.\n\nPropriétés :\n- $|zz'|=|z||z'|$ et $\\arg(zz')=\\arg z+\\arg z'$ ;\n- $\\left|\\dfrac{z}{z'}\\right|=\\dfrac{|z|}{|z'|}$ et $\\arg\\dfrac{z}{z'}=\\arg z-\\arg z'$ ;\n- $|z^n|=|z|^n$ et $\\arg(z^n)=n\\arg z$ ;\n- $|\\bar z|=|z|$ et $\\arg\\bar z=-\\arg z$.",
      "keyRule": "$|a+ib|=\\sqrt{a^2+b^2}$ ; $\\cos\\theta=\\dfrac{a}{|z|}$, $\\sin\\theta=\\dfrac{b}{|z|}$. Les modules se multiplient, les arguments s'ajoutent.",
      "formulas": [
        {
          "name": "Module",
          "formula": "|a+ib|=\\sqrt{a^2+b^2}"
        },
        {
          "name": "Forme trigonométrique",
          "formula": "z=r(\\cos\\theta+i\\sin\\theta)"
        },
        {
          "name": "Produit",
          "formula": "|zz'|=|z||z'|\\qquad\\arg(zz')=\\arg z+\\arg z'"
        }
      ],
      "workedExample": {
        "title": "Forme trigonométrique",
        "statement": "Écris $z=-\\sqrt3+i$ sous forme trigonométrique.",
        "methodSteps": [
          "$|z|=\\sqrt{3+1}=2$.",
          "$\\cos\\theta=-\\dfrac{\\sqrt3}{2}$ et $\\sin\\theta=\\dfrac12$, donc $\\theta=\\dfrac{5\\pi}{6}$."
        ],
        "conclusion": "$z=2\\left(\\cos\\dfrac{5\\pi}{6}+i\\sin\\dfrac{5\\pi}{6}\\right)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le module",
          "stepTheme": "Le module",
          "stepBadge": "Le module",
          "paragraphText": "$|a+ib|=\\sqrt{a^2+b^2}$ : c'est la distance $OM$, toujours un réel positif.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p03_q1",
            "type": "mcq",
            "prompt": "Que vaut $|3-4i|$ ?",
            "options": [
              "$-1$",
              "$7$",
              "$25$",
              "$5$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\sqrt{9+16}=5$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'argument",
          "stepTheme": "L'argument",
          "stepBadge": "L'argument",
          "paragraphText": "Un argument $\\theta$ vérifie $\\cos\\theta=\\dfrac{a}{|z|}$ et $\\sin\\theta=\\dfrac{b}{|z|}$. Pour $1+i$ : $\\theta=\\dfrac{\\pi}{4}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p03_q2",
            "type": "mcq",
            "prompt": "Quel est un argument de $z=2i$ ?",
            "options": [
              "$0$",
              "$\\dfrac{\\pi}{2}$",
              "$\\pi$",
              "$2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$M$ est sur l'axe imaginaire, du côté positif."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Un argument en $\\dfrac{5\\pi}{6}$",
          "stepTheme": "Un argument en $\\dfrac{5\\pi}{6}$",
          "stepBadge": "Un argument en $\\dfrac{5\\pi}{6}$",
          "paragraphText": "$z=-\\sqrt3+i$ : $|z|=2$, $\\cos\\theta=-\\dfrac{\\sqrt3}{2}$ et $\\sin\\theta=\\dfrac12$, donc $\\theta=\\dfrac{5\\pi}{6}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p03_q3",
            "type": "mcq",
            "prompt": "Quel est un argument de $z=1-i\\sqrt3$ ?",
            "options": [
              "$-\\dfrac{\\pi}{3}$",
              "$\\dfrac{\\pi}{3}$",
              "$-\\dfrac{\\pi}{6}$",
              "$\\dfrac{2\\pi}{3}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$|z|=2$, $\\cos\\theta=\\dfrac12$, $\\sin\\theta=-\\dfrac{\\sqrt3}{2}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La forme trigonométrique",
          "stepTheme": "La forme trigonométrique",
          "stepBadge": "La forme trigonométrique",
          "paragraphText": "$z=r(\\cos\\theta+i\\sin\\theta)$ avec $r=|z|$. Exemple : $1+i=\\sqrt2\\left(\\cos\\dfrac{\\pi}{4}+i\\sin\\dfrac{\\pi}{4}\\right)$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p03_q4",
            "type": "mcq",
            "prompt": "Quelle est la forme algébrique de $4\\left(\\cos\\dfrac{\\pi}{2}+i\\sin\\dfrac{\\pi}{2}\\right)$ ?",
            "options": [
              "$4$",
              "$4+4i$",
              "$4i$",
              "$-4i$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\cos\\dfrac{\\pi}{2}=0$ et $\\sin\\dfrac{\\pi}{2}=1$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Produit et quotient",
          "stepTheme": "Produit et quotient",
          "stepBadge": "Produit et quotient",
          "paragraphText": "Les modules se multiplient et les arguments s'ajoutent ; pour un quotient, on divise les modules et on soustrait les arguments.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p03_q5",
            "type": "mcq",
            "prompt": "$|z|=2$, $\\arg z=\\dfrac{\\pi}{6}$ ; $|z'|=3$, $\\arg z'=\\dfrac{\\pi}{3}$. Que valent $|zz'|$ et $\\arg(zz')$ ?",
            "options": [
              "$5$ et $\\dfrac{\\pi}{2}$",
              "$6$ et $\\dfrac{\\pi}{18}$",
              "$5$ et $\\dfrac{\\pi}{18}$",
              "$6$ et $\\dfrac{\\pi}{2}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$2\\times3=6$ et $\\dfrac{\\pi}{6}+\\dfrac{\\pi}{3}=\\dfrac{\\pi}{2}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le conjugué",
          "stepTheme": "Le conjugué",
          "stepBadge": "Le conjugué",
          "paragraphText": "$\\bar z$ est le symétrique de $z$ par rapport à l'axe des réels : $|\\bar z|=|z|$ et $\\arg\\bar z=-\\arg z$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p03_q6",
            "type": "mcq",
            "prompt": "Si $\\arg z=\\dfrac{2\\pi}{3}$, quel est un argument de $\\bar z$ ?",
            "options": [
              "$-\\dfrac{2\\pi}{3}$",
              "$\\dfrac{2\\pi}{3}$",
              "$\\dfrac{\\pi}{3}$",
              "$\\pi$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le conjugué change le signe de l'argument."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le cosinus ne suffit pas",
          "stepTheme": "Le cosinus ne suffit pas",
          "stepBadge": "Le cosinus ne suffit pas",
          "paragraphText": "$\\cos\\theta=\\dfrac12$ donne $\\dfrac{\\pi}{3}$ OU $-\\dfrac{\\pi}{3}$ : c'est le signe de $\\sin\\theta$ (donc de $b$) qui tranche.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p03_q7",
            "type": "mcq",
            "prompt": "Quel est un argument de $z=-1-i$ ?",
            "options": [
              "$\\dfrac{\\pi}{4}$",
              "$\\dfrac{3\\pi}{4}$",
              "$-\\dfrac{3\\pi}{4}$",
              "$-\\dfrac{\\pi}{4}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\cos\\theta=\\sin\\theta=-\\dfrac{\\sqrt2}{2}$ : le point est en bas à gauche."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p03_q1",
          "type": "mcq",
          "prompt": "Que vaut $|3-4i|$ ?",
          "options": [
            "$-1$",
            "$7$",
            "$25$",
            "$5$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\sqrt{9+16}=5$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p03_q2",
          "type": "mcq",
          "prompt": "Quel est un argument de $z=2i$ ?",
          "options": [
            "$0$",
            "$\\dfrac{\\pi}{2}$",
            "$\\pi$",
            "$2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$M$ est sur l'axe imaginaire, du côté positif."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p03_q3",
          "type": "mcq",
          "prompt": "Quel est un argument de $z=1-i\\sqrt3$ ?",
          "options": [
            "$-\\dfrac{\\pi}{3}$",
            "$\\dfrac{\\pi}{3}$",
            "$-\\dfrac{\\pi}{6}$",
            "$\\dfrac{2\\pi}{3}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$|z|=2$, $\\cos\\theta=\\dfrac12$, $\\sin\\theta=-\\dfrac{\\sqrt3}{2}$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p03_q4",
          "type": "mcq",
          "prompt": "Quelle est la forme algébrique de $4\\left(\\cos\\dfrac{\\pi}{2}+i\\sin\\dfrac{\\pi}{2}\\right)$ ?",
          "options": [
            "$4$",
            "$4+4i$",
            "$4i$",
            "$-4i$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\cos\\dfrac{\\pi}{2}=0$ et $\\sin\\dfrac{\\pi}{2}=1$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p03_q5",
          "type": "mcq",
          "prompt": "$|z|=2$, $\\arg z=\\dfrac{\\pi}{6}$ ; $|z'|=3$, $\\arg z'=\\dfrac{\\pi}{3}$. Que valent $|zz'|$ et $\\arg(zz')$ ?",
          "options": [
            "$5$ et $\\dfrac{\\pi}{2}$",
            "$6$ et $\\dfrac{\\pi}{18}$",
            "$5$ et $\\dfrac{\\pi}{18}$",
            "$6$ et $\\dfrac{\\pi}{2}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$2\\times3=6$ et $\\dfrac{\\pi}{6}+\\dfrac{\\pi}{3}=\\dfrac{\\pi}{2}$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p03_q6",
          "type": "mcq",
          "prompt": "Si $\\arg z=\\dfrac{2\\pi}{3}$, quel est un argument de $\\bar z$ ?",
          "options": [
            "$-\\dfrac{2\\pi}{3}$",
            "$\\dfrac{2\\pi}{3}$",
            "$\\dfrac{\\pi}{3}$",
            "$\\pi$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le conjugué change le signe de l'argument."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p03_q7",
          "type": "mcq",
          "prompt": "Quel est un argument de $z=-1-i$ ?",
          "options": [
            "$\\dfrac{\\pi}{4}$",
            "$\\dfrac{3\\pi}{4}$",
            "$-\\dfrac{3\\pi}{4}$",
            "$-\\dfrac{\\pi}{4}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\cos\\theta=\\sin\\theta=-\\dfrac{\\sqrt2}{2}$ : le point est en bas à gauche."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l06_nombres_complexes_p04",
      "order": 4,
      "title": "Forme exponentielle, Moivre et Euler",
      "summary": "$e^{i\\theta}=\\cos\\theta+i\\sin\\theta$ : les puissances deviennent faciles.",
      "conceptExplanation": "Notation : $e^{i\\theta}=\\cos\\theta+i\\sin\\theta$. Tout complexe non nul s'écrit $z=re^{i\\theta}$ (forme exponentielle), avec $r=|z|$ et $\\theta=\\arg z$.\n\nRègles (comme pour les puissances) :\n- $e^{i\\theta}\\times e^{i\\theta'}=e^{i(\\theta+\\theta')}$ ;\n- $\\dfrac{e^{i\\theta}}{e^{i\\theta'}}=e^{i(\\theta-\\theta')}$ ;\n- $\\left(e^{i\\theta}\\right)^n=e^{in\\theta}$.\n\nFormule de Moivre : $(\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta$.\nExemple : $\\left(\\dfrac12+\\dfrac{\\sqrt3}{2}i\\right)^{300}=\\left(e^{i\\frac{\\pi}{3}}\\right)^{300}=e^{i100\\pi}=1$.\n\nFormules d'Euler :\n$$\\cos\\theta=\\dfrac{e^{i\\theta}+e^{-i\\theta}}{2}\\qquad\\sin\\theta=\\dfrac{e^{i\\theta}-e^{-i\\theta}}{2i}.$$\n\nLinéarisation : $\\cos^4\\alpha=\\left(\\dfrac{e^{i\\alpha}+e^{-i\\alpha}}{2}\\right)^4=\\dfrac{1}{16}\\left(e^{4i\\alpha}+4e^{2i\\alpha}+6+4e^{-2i\\alpha}+e^{-4i\\alpha}\\right)$, donc\n$$\\cos^4\\alpha=\\dfrac18\\cos4\\alpha+\\dfrac12\\cos2\\alpha+\\dfrac38.$$",
      "keyRule": "$re^{i\\theta}$ : on multiplie les modules et on ajoute les arguments ; $(e^{i\\theta})^n=e^{in\\theta}$ (Moivre) ; Euler sert à linéariser.",
      "formulas": [
        {
          "name": "Forme exponentielle",
          "formula": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta"
        },
        {
          "name": "Moivre",
          "formula": "(\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta"
        },
        {
          "name": "Euler",
          "formula": "\\cos\\theta=\\dfrac{e^{i\\theta}+e^{-i\\theta}}{2}\\qquad\\sin\\theta=\\dfrac{e^{i\\theta}-e^{-i\\theta}}{2i}"
        }
      ],
      "workedExample": {
        "title": "Une grande puissance",
        "statement": "Calcule $\\left(\\dfrac12+\\dfrac{\\sqrt3}{2}i\\right)^{300}$.",
        "methodSteps": [
          "$\\dfrac12+\\dfrac{\\sqrt3}{2}i=e^{i\\frac{\\pi}{3}}$ (module $1$, argument $\\dfrac{\\pi}{3}$).",
          "$\\left(e^{i\\frac{\\pi}{3}}\\right)^{300}=e^{i\\frac{300\\pi}{3}}=e^{i100\\pi}$.",
          "$100\\pi=50\\times2\\pi$."
        ],
        "conclusion": "Le résultat vaut $e^{0}=1$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La forme exponentielle",
          "stepTheme": "La forme exponentielle",
          "stepBadge": "La forme exponentielle",
          "paragraphText": "$e^{i\\theta}=\\cos\\theta+i\\sin\\theta$, et $z=re^{i\\theta}$ avec $r=|z|$, $\\theta=\\arg z$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p04_q1",
            "type": "mcq",
            "prompt": "Quelle est la forme exponentielle de $1+i$ ?",
            "options": [
              "$e^{i\\frac{\\pi}{4}}$",
              "$2e^{i\\frac{\\pi}{4}}$",
              "$\\sqrt2e^{i\\frac{\\pi}{4}}$",
              "$\\sqrt2e^{i\\frac{\\pi}{2}}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$|1+i|=\\sqrt2$ et $\\arg(1+i)=\\dfrac{\\pi}{4}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Des valeurs à connaître",
          "stepTheme": "Des valeurs à connaître",
          "stepBadge": "Des valeurs à connaître",
          "paragraphText": "$e^{i0}=1$, $e^{i\\frac{\\pi}{2}}=i$, $e^{i\\pi}=-1$, $e^{-i\\frac{\\pi}{2}}=-i$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p04_q2",
            "type": "mcq",
            "prompt": "Que vaut $e^{i\\pi}$ ?",
            "options": [
              "$1$",
              "$-1$",
              "$i$",
              "$\\pi$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\cos\\pi+i\\sin\\pi=-1+0i$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Calculer avec $e^{i\\theta}$",
          "stepTheme": "Calculer avec $e^{i\\theta}$",
          "stepBadge": "Calculer avec $e^{i\\theta}$",
          "paragraphText": "$e^{i\\theta}\\times e^{i\\theta'}=e^{i(\\theta+\\theta')}$ et $\\dfrac{e^{i\\theta}}{e^{i\\theta'}}=e^{i(\\theta-\\theta')}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p04_q3",
            "type": "mcq",
            "prompt": "Que vaut $2e^{i\\frac{\\pi}{3}}\\times3e^{i\\frac{\\pi}{6}}$ ?",
            "options": [
              "$5e^{i\\frac{\\pi}{2}}$",
              "$6e^{i\\frac{\\pi}{18}}$",
              "$5e^{i\\frac{\\pi}{18}}$",
              "$6e^{i\\frac{\\pi}{2}}=6i$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$2\\times3=6$ et $\\dfrac{\\pi}{3}+\\dfrac{\\pi}{6}=\\dfrac{\\pi}{2}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La formule de Moivre",
          "stepTheme": "La formule de Moivre",
          "stepBadge": "La formule de Moivre",
          "paragraphText": "$(\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta$ : on multiplie l'argument par $n$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p04_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\left(\\dfrac12+\\dfrac{\\sqrt3}{2}i\\right)^{300}$ ?",
            "options": [
              "$1$",
              "$-1$",
              "$300$",
              "$i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\left(e^{i\\frac{\\pi}{3}}\\right)^{300}=e^{i100\\pi}=1$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une puissance de $1+i$",
          "stepTheme": "Une puissance de $1+i$",
          "stepBadge": "Une puissance de $1+i$",
          "paragraphText": "$(1+i)^8=\\left(\\sqrt2e^{i\\frac{\\pi}{4}}\\right)^8=(\\sqrt2)^8e^{i2\\pi}=16$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p04_q5",
            "type": "mcq",
            "prompt": "Que vaut $(1+i)^4$ ?",
            "options": [
              "$4$",
              "$4i$",
              "$-4$",
              "$2i$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$(\\sqrt2)^4e^{i\\pi}=4\\times(-1)=-4$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les formules d'Euler",
          "stepTheme": "Les formules d'Euler",
          "stepBadge": "Les formules d'Euler",
          "paragraphText": "$\\cos\\theta=\\dfrac{e^{i\\theta}+e^{-i\\theta}}{2}$ et $\\sin\\theta=\\dfrac{e^{i\\theta}-e^{-i\\theta}}{2i}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p04_q6",
            "type": "mcq",
            "prompt": "À quoi est égal $e^{i\\theta}+e^{-i\\theta}$ ?",
            "options": [
              "$2i\\sin\\theta$",
              "$2\\sin\\theta$",
              "$0$",
              "$2\\cos\\theta$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les parties imaginaires s'annulent : il reste $2\\cos\\theta$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Linéariser $\\cos^4$",
          "stepTheme": "Linéariser $\\cos^4$",
          "stepBadge": "Linéariser $\\cos^4$",
          "paragraphText": "On développe $\\left(\\dfrac{e^{i\\alpha}+e^{-i\\alpha}}{2}\\right)^4$ avec le binôme, puis on regroupe avec Euler : $\\cos^4\\alpha=\\dfrac18\\cos4\\alpha+\\dfrac12\\cos2\\alpha+\\dfrac38$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p04_q7",
            "type": "mcq",
            "prompt": "Quel est le terme constant dans la linéarisation de $\\cos^4\\alpha$ ?",
            "options": [
              "$\\dfrac38$",
              "$\\dfrac{6}{16}\\times2$",
              "$1$",
              "$\\dfrac14$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{6}{16}=\\dfrac38$ (coefficient binomial $6$, divisé par $2^4$)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p04_q1",
          "type": "mcq",
          "prompt": "Quelle est la forme exponentielle de $1+i$ ?",
          "options": [
            "$e^{i\\frac{\\pi}{4}}$",
            "$2e^{i\\frac{\\pi}{4}}$",
            "$\\sqrt2e^{i\\frac{\\pi}{4}}$",
            "$\\sqrt2e^{i\\frac{\\pi}{2}}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$|1+i|=\\sqrt2$ et $\\arg(1+i)=\\dfrac{\\pi}{4}$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p04_q2",
          "type": "mcq",
          "prompt": "Que vaut $e^{i\\pi}$ ?",
          "options": [
            "$1$",
            "$-1$",
            "$i$",
            "$\\pi$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\cos\\pi+i\\sin\\pi=-1+0i$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p04_q3",
          "type": "mcq",
          "prompt": "Que vaut $2e^{i\\frac{\\pi}{3}}\\times3e^{i\\frac{\\pi}{6}}$ ?",
          "options": [
            "$5e^{i\\frac{\\pi}{2}}$",
            "$6e^{i\\frac{\\pi}{18}}$",
            "$5e^{i\\frac{\\pi}{18}}$",
            "$6e^{i\\frac{\\pi}{2}}=6i$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$2\\times3=6$ et $\\dfrac{\\pi}{3}+\\dfrac{\\pi}{6}=\\dfrac{\\pi}{2}$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p04_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\left(\\dfrac12+\\dfrac{\\sqrt3}{2}i\\right)^{300}$ ?",
          "options": [
            "$1$",
            "$-1$",
            "$300$",
            "$i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\left(e^{i\\frac{\\pi}{3}}\\right)^{300}=e^{i100\\pi}=1$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p04_q5",
          "type": "mcq",
          "prompt": "Que vaut $(1+i)^4$ ?",
          "options": [
            "$4$",
            "$4i$",
            "$-4$",
            "$2i$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$(\\sqrt2)^4e^{i\\pi}=4\\times(-1)=-4$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p04_q6",
          "type": "mcq",
          "prompt": "À quoi est égal $e^{i\\theta}+e^{-i\\theta}$ ?",
          "options": [
            "$2i\\sin\\theta$",
            "$2\\sin\\theta$",
            "$0$",
            "$2\\cos\\theta$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les parties imaginaires s'annulent : il reste $2\\cos\\theta$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p04_q7",
          "type": "mcq",
          "prompt": "Quel est le terme constant dans la linéarisation de $\\cos^4\\alpha$ ?",
          "options": [
            "$\\dfrac38$",
            "$\\dfrac{6}{16}\\times2$",
            "$1$",
            "$\\dfrac14$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{6}{16}=\\dfrac38$ (coefficient binomial $6$, divisé par $2^4$)."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l06_nombres_complexes_p05",
      "order": 5,
      "title": "Racines carrées et équations du second degré",
      "summary": "Dans $\\mathbb{C}$, toute équation du second degré a des solutions.",
      "conceptExplanation": "Racines carrées d'un complexe $Z=A+iB$ : on cherche $z=x+iy$ tel que $z^2=Z$. On résout le système\n- $x^2-y^2=A$ (parties réelles) ;\n- $x^2+y^2=|Z|$ (modules) ;\n- $2xy=B$ (parties imaginaires, qui donne le signe de $xy$).\n\nExemple : racines carrées de $8-6i$.\n- $x^2-y^2=8$ et $x^2+y^2=\\sqrt{64+36}=10$ ;\n- donc $x^2=9$ et $y^2=1$ ;\n- $2xy=-6<0$ : $x$ et $y$ sont de signes contraires ;\n- les racines carrées sont $3-i$ et $-3+i$.\n\nÉquation $az^2+bz+c=0$ ($a\\neq0$) : on calcule $\\Delta=b^2-4ac$ et $\\delta$ une racine carrée de $\\Delta$. Les solutions sont\n$$z_1=\\dfrac{-b-\\delta}{2a}\\qquad z_2=\\dfrac{-b+\\delta}{2a}.$$\nSi les coefficients sont réels et $\\Delta<0$, alors $\\delta=i\\sqrt{-\\Delta}$, et les deux solutions sont conjuguées.\n\nExemple : $z^2-(1+i)z+2-i=0$.\n- $\\Delta=(1+i)^2-4(2-i)=2i-8+4i=-8+6i$ ;\n- une racine carrée de $-8+6i$ est $\\delta=1+3i$ ;\n- $z=\\dfrac{1+i-(1+3i)}{2}=-i$ ou $z=\\dfrac{1+i+1+3i}{2}=1+2i$.",
      "keyRule": "Racine carrée : $x^2-y^2=A$, $x^2+y^2=|Z|$, signe de $xy$ donné par $B$. Équation : $\\Delta$, puis $\\delta$ avec $\\delta^2=\\Delta$.",
      "formulas": [
        {
          "name": "Solutions",
          "formula": "z=\\dfrac{-b\\pm\\delta}{2a}\\quad\\text{avec}\\ \\delta^2=\\Delta"
        },
        {
          "name": "Δ < 0, coefficients réels",
          "formula": "z=\\dfrac{-b\\pm i\\sqrt{-\\Delta}}{2a}"
        }
      ],
      "workedExample": {
        "title": "Une équation à coefficients complexes",
        "statement": "Résous $z^2-(1+i)z+2-i=0$ dans $\\mathbb{C}$.",
        "methodSteps": [
          "$\\Delta=(1+i)^2-4(2-i)=-8+6i$.",
          "Racine carrée : $x^2-y^2=-8$, $x^2+y^2=10$, $xy>0$, donc $\\delta=1+3i$.",
          "$z_1=\\dfrac{(1+i)-(1+3i)}{2}=-i$ et $z_2=\\dfrac{(1+i)+(1+3i)}{2}=1+2i$."
        ],
        "conclusion": "$S=\\{-i\\,;\\,1+2i\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Racines d'un réel négatif",
          "stepTheme": "Racines d'un réel négatif",
          "stepBadge": "Racines d'un réel négatif",
          "paragraphText": "Dans $\\mathbb{C}$, $-9$ a deux racines carrées : $3i$ et $-3i$, car $(3i)^2=-9$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p05_q1",
            "type": "mcq",
            "prompt": "Quelles sont les racines carrées de $-16$ ?",
            "options": [
              "$4$ et $-4$",
              "$4i$ et $-4i$",
              "$16i$ et $-16i$",
              "Il n'y en a pas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$(4i)^2=16i^2=-16$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Le système à résoudre",
          "stepTheme": "Le système à résoudre",
          "stepBadge": "Le système à résoudre",
          "paragraphText": "Pour $z^2=8-6i$ : $x^2-y^2=8$, $x^2+y^2=10$, et $2xy=-6$. On trouve $x^2=9$ et $y^2=1$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p05_q2",
            "type": "mcq",
            "prompt": "D'où vient l'équation $x^2+y^2=10$ ?",
            "options": [
              "De l'égalité des parties réelles",
              "De l'égalité des parties imaginaires",
              "De l'égalité des modules : $|z|^2=|8-6i|$",
              "Du discriminant"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$|z^2|=|z|^2=x^2+y^2$ et $|8-6i|=\\sqrt{100}=10$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les racines de $8-6i$",
          "stepTheme": "Les racines de $8-6i$",
          "stepBadge": "Les racines de $8-6i$",
          "paragraphText": "$x=\\pm3$, $y=\\pm1$, et $xy<0$ : les racines carrées de $8-6i$ sont $3-i$ et $-3+i$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p05_q3",
            "type": "mcq",
            "prompt": "Quelles sont les racines carrées de $8-6i$ ?",
            "options": [
              "$3+i$ et $-3-i$",
              "$3-i$ et $-3+i$",
              "$\\sqrt8$ et $-\\sqrt8$",
              "$1-3i$ et $-1+3i$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Vérification : $(3-i)^2=9-6i-1=8-6i$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Coefficients réels et $\\Delta<0$",
          "stepTheme": "Coefficients réels et $\\Delta<0$",
          "stepBadge": "Coefficients réels et $\\Delta<0$",
          "paragraphText": "Si $\\Delta<0$, les solutions sont $\\dfrac{-b\\pm i\\sqrt{-\\Delta}}{2a}$, conjuguées l'une de l'autre.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p05_q4",
            "type": "mcq",
            "prompt": "Quelles sont les solutions de $z^2-2z+5=0$ ?",
            "options": [
              "$1+2i$ et $1-2i$",
              "$-1+2i$ et $-1-2i$",
              "$2+i$ et $2-i$",
              "Il n'y en a pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\Delta=4-20=-16$, $\\sqrt{16}=4$ : $z=\\dfrac{2\\pm4i}{2}=1\\pm2i$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Coefficients complexes",
          "stepTheme": "Coefficients complexes",
          "stepBadge": "Coefficients complexes",
          "paragraphText": "Pour $z^2-(1+i)z+2-i=0$ : $\\Delta=(1+i)^2-4(2-i)=-8+6i$. On cherche alors une racine carrée $\\delta$ de $\\Delta$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p05_q5",
            "type": "mcq",
            "prompt": "Pour $z^2-(1+i)z+2-i=0$, que vaut $\\Delta$ ?",
            "options": [
              "$-8+2i$",
              "$8+6i$",
              "$-6+8i$",
              "$-8+6i$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$(1+i)^2=2i$ et $4(2-i)=8-4i$, donc $\\Delta=2i-8+4i=-8+6i$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les solutions",
          "stepTheme": "Les solutions",
          "stepBadge": "Les solutions",
          "paragraphText": "Avec $\\delta=1+3i$ : $z_1=\\dfrac{1+i-1-3i}{2}=-i$ et $z_2=\\dfrac{1+i+1+3i}{2}=1+2i$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p05_q6",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $z^2-(1+i)z+2-i=0$ ?",
            "options": [
              "$\\{i;1-2i\\}$",
              "$\\{1+3i;-1-3i\\}$",
              "$\\{-i;1+2i\\}$",
              "$\\{1+i;2-i\\}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Vérification pour $-i$ : $(-i)^2=-1$ et $-(1+i)(-i)=-1+i$, donc $-1-1+i+2-i=0$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Pas de $\\sqrt{}$ d'un complexe",
          "stepTheme": "Pas de $\\sqrt{}$ d'un complexe",
          "stepBadge": "Pas de $\\sqrt{}$ d'un complexe",
          "paragraphText": "On n'écrit jamais $\\sqrt{-8+6i}$ ni $\\sqrt{-5}$ : le symbole $\\sqrt{}$ est réservé aux réels positifs. On parle d'UNE racine carrée $\\delta$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p05_q7",
            "type": "mcq",
            "prompt": "Laquelle de ces écritures est correcte ?",
            "options": [
              "$\\sqrt{-4}=2i$",
              "Une racine carrée de $-4$ est $2i$",
              "$\\sqrt{-4}=-2$",
              "$-4$ n'a pas de racine carrée dans $\\mathbb{C}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$-4$ a deux racines carrées, $2i$ et $-2i$ ; le symbole $\\sqrt{}$ ne s'applique pas."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p05_q1",
          "type": "mcq",
          "prompt": "Quelles sont les racines carrées de $-16$ ?",
          "options": [
            "$4$ et $-4$",
            "$4i$ et $-4i$",
            "$16i$ et $-16i$",
            "Il n'y en a pas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$(4i)^2=16i^2=-16$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p05_q2",
          "type": "mcq",
          "prompt": "D'où vient l'équation $x^2+y^2=10$ ?",
          "options": [
            "De l'égalité des parties réelles",
            "De l'égalité des parties imaginaires",
            "De l'égalité des modules : $|z|^2=|8-6i|$",
            "Du discriminant"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$|z^2|=|z|^2=x^2+y^2$ et $|8-6i|=\\sqrt{100}=10$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p05_q3",
          "type": "mcq",
          "prompt": "Quelles sont les racines carrées de $8-6i$ ?",
          "options": [
            "$3+i$ et $-3-i$",
            "$3-i$ et $-3+i$",
            "$\\sqrt8$ et $-\\sqrt8$",
            "$1-3i$ et $-1+3i$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Vérification : $(3-i)^2=9-6i-1=8-6i$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p05_q4",
          "type": "mcq",
          "prompt": "Quelles sont les solutions de $z^2-2z+5=0$ ?",
          "options": [
            "$1+2i$ et $1-2i$",
            "$-1+2i$ et $-1-2i$",
            "$2+i$ et $2-i$",
            "Il n'y en a pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\Delta=4-20=-16$, $\\sqrt{16}=4$ : $z=\\dfrac{2\\pm4i}{2}=1\\pm2i$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p05_q5",
          "type": "mcq",
          "prompt": "Pour $z^2-(1+i)z+2-i=0$, que vaut $\\Delta$ ?",
          "options": [
            "$-8+2i$",
            "$8+6i$",
            "$-6+8i$",
            "$-8+6i$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$(1+i)^2=2i$ et $4(2-i)=8-4i$, donc $\\Delta=2i-8+4i=-8+6i$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p05_q6",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $z^2-(1+i)z+2-i=0$ ?",
          "options": [
            "$\\{i;1-2i\\}$",
            "$\\{1+3i;-1-3i\\}$",
            "$\\{-i;1+2i\\}$",
            "$\\{1+i;2-i\\}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Vérification pour $-i$ : $(-i)^2=-1$ et $-(1+i)(-i)=-1+i$, donc $-1-1+i+2-i=0$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p05_q7",
          "type": "mcq",
          "prompt": "Laquelle de ces écritures est correcte ?",
          "options": [
            "$\\sqrt{-4}=2i$",
            "Une racine carrée de $-4$ est $2i$",
            "$\\sqrt{-4}=-2$",
            "$-4$ n'a pas de racine carrée dans $\\mathbb{C}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$-4$ a deux racines carrées, $2i$ et $-2i$ ; le symbole $\\sqrt{}$ ne s'applique pas."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l06_nombres_complexes_p06",
      "order": 6,
      "title": "Racines n-ièmes de l'unité",
      "summary": "Les solutions de $z^n=1$ forment un polygone régulier.",
      "conceptExplanation": "Définition : une racine $n$-ième de l'unité est un complexe $z$ tel que $z^n=1$ ($n\\geq2$).\n\nPropriété : il y en a exactement $n$ :\n$$z_k=e^{i\\frac{2k\\pi}{n}},\\quad k\\in\\{0;1;\\dots;n-1\\}.$$\nLeurs images sont les sommets d'un polygone régulier à $n$ côtés inscrit dans le cercle de centre $O$ et de rayon $1$, avec un sommet en $1$.\n\nSomme : $\\displaystyle\\sum_{k=0}^{n-1}z_k=1+z_1+\\dots+z_{n-1}=0$.\n\nCas $n=3$ : $k\\in\\{0;1;2\\}$.\n- $z_0=1$ ;\n- $z_1=j=e^{i\\frac{2\\pi}{3}}=-\\dfrac12+\\dfrac{\\sqrt3}{2}i$ ;\n- $z_2=j^2=e^{i\\frac{4\\pi}{3}}=-\\dfrac12-\\dfrac{\\sqrt3}{2}i=\\bar j$ ;\n- $1+j+j^2=0$ et $j^3=1$. Les trois points forment un triangle équilatéral.\n\nCas $n=4$ : $1$, $i$, $-1$, $-i$ (un carré).\n\nRacines $n$-ièmes d'un complexe $a=re^{i\\theta}$ : ce sont les $n$ nombres $\\sqrt[n]{r}\\,e^{i\\frac{\\theta+2k\\pi}{n}}$, $k\\in\\{0;\\dots;n-1\\}$.",
      "keyRule": "$z^n=1\\iff z=e^{i\\frac{2k\\pi}{n}}$, $k=0,\\dots,n-1$. Leur somme est nulle ; pour $n=3$ : $1+j+j^2=0$ et $j^2=\\bar j$.",
      "formulas": [
        {
          "name": "Racines n-ièmes",
          "formula": "z_k=e^{i\\frac{2k\\pi}{n}},\\ k\\in\\{0;\\dots;n-1\\}"
        },
        {
          "name": "Le nombre j",
          "formula": "j=e^{i\\frac{2\\pi}{3}}=-\\dfrac12+\\dfrac{\\sqrt3}{2}i,\\quad1+j+j^2=0"
        }
      ],
      "workedExample": {
        "title": "Les racines cubiques de l'unité",
        "statement": "Résous $z^3=1$ dans $\\mathbb{C}$.",
        "methodSteps": [
          "$z_k=e^{i\\frac{2k\\pi}{3}}$ pour $k\\in\\{0;1;2\\}$.",
          "$z_0=1$, $z_1=-\\dfrac12+\\dfrac{\\sqrt3}{2}i=j$, $z_2=-\\dfrac12-\\dfrac{\\sqrt3}{2}i=j^2$."
        ],
        "conclusion": "$S=\\{1;j;j^2\\}$ : un triangle équilatéral inscrit dans le cercle unité."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition",
          "stepTheme": "La définition",
          "stepBadge": "La définition",
          "paragraphText": "$z$ est une racine $n$-ième de l'unité si $z^n=1$. Il y en a exactement $n$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p06_q1",
            "type": "mcq",
            "prompt": "Combien y a-t-il de racines 6-ièmes de l'unité ?",
            "options": [
              "$2$",
              "$1$",
              "$12$",
              "$6$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Il y en a toujours $n$, ici $6$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule",
          "stepTheme": "La formule",
          "stepBadge": "La formule",
          "paragraphText": "$z_k=e^{i\\frac{2k\\pi}{n}}$ avec $k$ allant de $0$ à $n-1$. Pour $n=3$ : $k\\in\\{0;1;2\\}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p06_q2",
            "type": "mcq",
            "prompt": "Quelles sont les racines quatrièmes de l'unité ?",
            "options": [
              "$1$ et $-1$",
              "$1$, $i$, $-1$, $-i$",
              "$1$, $2$, $3$, $4$",
              "$i$ et $-i$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$e^{i\\frac{2k\\pi}{4}}=e^{i\\frac{k\\pi}{2}}$ pour $k=0,1,2,3$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le nombre $j$",
          "stepTheme": "Le nombre $j$",
          "stepBadge": "Le nombre $j$",
          "paragraphText": "$j=e^{i\\frac{2\\pi}{3}}=-\\dfrac12+\\dfrac{\\sqrt3}{2}i$. Les racines cubiques de l'unité sont $1$, $j$ et $j^2$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p06_q3",
            "type": "mcq",
            "prompt": "À quoi est égal $j^2$ ?",
            "options": [
              "$\\bar j$",
              "$-j$",
              "$1$",
              "$2j$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$j^2=e^{i\\frac{4\\pi}{3}}=e^{-i\\frac{2\\pi}{3}}=\\bar j$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La somme est nulle",
          "stepTheme": "La somme est nulle",
          "stepBadge": "La somme est nulle",
          "paragraphText": "$\\displaystyle\\sum_{k=0}^{n-1}e^{i\\frac{2k\\pi}{n}}=0$. Pour $n=3$ : $1+j+j^2=0$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p06_q4",
            "type": "mcq",
            "prompt": "Que vaut $1+j+j^2$ ?",
            "options": [
              "$3$",
              "$1$",
              "$0$",
              "$j$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$1+\\left(-\\dfrac12+\\dfrac{\\sqrt3}{2}i\\right)+\\left(-\\dfrac12-\\dfrac{\\sqrt3}{2}i\\right)=0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Un polygone régulier",
          "stepTheme": "Un polygone régulier",
          "stepBadge": "Un polygone régulier",
          "paragraphText": "Les images des racines $n$-ièmes de l'unité sont les sommets d'un polygone régulier à $n$ côtés, inscrit dans le cercle unité.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p06_q5",
            "type": "mcq",
            "prompt": "Quelle figure forment les images de $1$, $j$ et $j^2$ ?",
            "options": [
              "Un carré",
              "Un triangle rectangle",
              "Un segment",
              "Un triangle équilatéral"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$n=3$ : un polygone régulier à 3 côtés."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Racines n-ièmes d'un complexe",
          "stepTheme": "Racines n-ièmes d'un complexe",
          "stepBadge": "Racines n-ièmes d'un complexe",
          "paragraphText": "Pour $z^n=re^{i\\theta}$ : $z=\\sqrt[n]{r}\\,e^{i\\frac{\\theta+2k\\pi}{n}}$. Exemple : $z^3=8$ donne $2$, $2j$, $2j^2$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p06_q6",
            "type": "mcq",
            "prompt": "Quel est le module des solutions de $z^4=16i$ ?",
            "options": [
              "$16$",
              "$2$",
              "$4$",
              "$1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$|z|^4=16$, donc $|z|=2$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le bon nombre de valeurs de $k$",
          "stepTheme": "Le bon nombre de valeurs de $k$",
          "stepBadge": "Le bon nombre de valeurs de $k$",
          "paragraphText": "$k$ va de $0$ à $n-1$ : pour $n=3$, c'est $\\{0;1;2\\}$ et non $\\{0;1;3\\}$. Avec $k=3$, on retombe sur $e^{i2\\pi}=1$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p06_q7",
            "type": "mcq",
            "prompt": "Pour $z^5=1$, quelles valeurs prend $k$ ?",
            "options": [
              "$\\{0;1;2;3;4\\}$",
              "$\\{1;2;3;4;5\\}$",
              "$\\{0;1;2;3;4;5\\}$",
              "$\\{0;5\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$k$ va de $0$ à $n-1=4$ : cinq valeurs, donc cinq racines distinctes."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p06_q1",
          "type": "mcq",
          "prompt": "Combien y a-t-il de racines 6-ièmes de l'unité ?",
          "options": [
            "$2$",
            "$1$",
            "$12$",
            "$6$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Il y en a toujours $n$, ici $6$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p06_q2",
          "type": "mcq",
          "prompt": "Quelles sont les racines quatrièmes de l'unité ?",
          "options": [
            "$1$ et $-1$",
            "$1$, $i$, $-1$, $-i$",
            "$1$, $2$, $3$, $4$",
            "$i$ et $-i$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$e^{i\\frac{2k\\pi}{4}}=e^{i\\frac{k\\pi}{2}}$ pour $k=0,1,2,3$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p06_q3",
          "type": "mcq",
          "prompt": "À quoi est égal $j^2$ ?",
          "options": [
            "$\\bar j$",
            "$-j$",
            "$1$",
            "$2j$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$j^2=e^{i\\frac{4\\pi}{3}}=e^{-i\\frac{2\\pi}{3}}=\\bar j$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p06_q4",
          "type": "mcq",
          "prompt": "Que vaut $1+j+j^2$ ?",
          "options": [
            "$3$",
            "$1$",
            "$0$",
            "$j$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$1+\\left(-\\dfrac12+\\dfrac{\\sqrt3}{2}i\\right)+\\left(-\\dfrac12-\\dfrac{\\sqrt3}{2}i\\right)=0$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p06_q5",
          "type": "mcq",
          "prompt": "Quelle figure forment les images de $1$, $j$ et $j^2$ ?",
          "options": [
            "Un carré",
            "Un triangle rectangle",
            "Un segment",
            "Un triangle équilatéral"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$n=3$ : un polygone régulier à 3 côtés."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p06_q6",
          "type": "mcq",
          "prompt": "Quel est le module des solutions de $z^4=16i$ ?",
          "options": [
            "$16$",
            "$2$",
            "$4$",
            "$1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$|z|^4=16$, donc $|z|=2$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p06_q7",
          "type": "mcq",
          "prompt": "Pour $z^5=1$, quelles valeurs prend $k$ ?",
          "options": [
            "$\\{0;1;2;3;4\\}$",
            "$\\{1;2;3;4;5\\}$",
            "$\\{0;1;2;3;4;5\\}$",
            "$\\{0;5\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$k$ va de $0$ à $n-1=4$ : cinq valeurs, donc cinq racines distinctes."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l06_nombres_complexes_p07",
      "order": 7,
      "title": "Nombres complexes et géométrie",
      "summary": "Distances, angles et nature d'un triangle avec les affixes.",
      "conceptExplanation": "Dans le repère orthonormé direct $(O;\\vec u,\\vec v)$, $A$, $B$, $C$ ont pour affixes $z_A$, $z_B$, $z_C$.\n\nOutils :\n- le vecteur $\\overrightarrow{AB}$ a pour affixe $z_B-z_A$ ;\n- le milieu de $[AB]$ a pour affixe $\\dfrac{z_A+z_B}{2}$ ;\n- distance : $AB=|z_B-z_A|$ ;\n- angle : $(\\overrightarrow{AB},\\overrightarrow{AC})=\\arg\\dfrac{z_C-z_A}{z_B-z_A}$ (à $2\\pi$ près).\n\nInterpréter le quotient $q=\\dfrac{z_C-z_A}{z_B-z_A}$ :\n- $q$ réel : $A$, $B$, $C$ alignés ;\n- $q$ imaginaire pur : $(AB)\\perp(AC)$ ;\n- $|q|=1$ : $AB=AC$ ;\n- $q=\\pm i$ : triangle rectangle isocèle en $A$ ;\n- $q=e^{\\pm i\\frac{\\pi}{3}}$ : triangle équilatéral.\n\nExemple : si $\\dfrac{z_B-z_A}{z_C-z_A}=-i$, alors $\\dfrac{AB}{AC}=|-i|=1$ et $(\\overrightarrow{AC},\\overrightarrow{AB})=\\arg(-i)=-\\dfrac{\\pi}{2}$ : le triangle $ABC$ est rectangle isocèle en $A$.\n\nEnsembles de points :\n- $|z-z_A|=r$ : cercle de centre $A$ et de rayon $r$ ;\n- $|z-z_A|=|z-z_B|$ : médiatrice de $[AB]$.",
      "keyRule": "$AB=|z_B-z_A|$ et $(\\overrightarrow{AB},\\overrightarrow{AC})=\\arg\\dfrac{z_C-z_A}{z_B-z_A}$ : le module du quotient compare les longueurs, l'argument donne l'angle.",
      "formulas": [
        {
          "name": "Distance",
          "formula": "AB=|z_B-z_A|"
        },
        {
          "name": "Angle",
          "formula": "(\\overrightarrow{AB},\\overrightarrow{AC})=\\arg\\dfrac{z_C-z_A}{z_B-z_A}"
        }
      ],
      "workedExample": {
        "title": "La nature d'un triangle",
        "statement": "$z_A=1$, $z_B=2-i$, $z_C=2+i$. Calcule $q=\\dfrac{z_B-z_A}{z_C-z_A}$ et donne la nature du triangle $ABC$.",
        "methodSteps": [
          "$z_B-z_A=1-i$ et $z_C-z_A=1+i$.",
          "$q=\\dfrac{1-i}{1+i}=\\dfrac{(1-i)^2}{(1+i)(1-i)}=\\dfrac{-2i}{2}=-i$.",
          "$|q|=1$ donne $AB=AC$, et $\\arg q=-\\dfrac{\\pi}{2}$ donne un angle droit en $A$."
        ],
        "conclusion": "Le triangle $ABC$ est rectangle isocèle en $A$ (on vérifie : $AB=AC=\\sqrt2$ et $BC=2$)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Distance",
          "stepTheme": "Distance",
          "stepBadge": "Distance",
          "paragraphText": "$AB=|z_B-z_A|$ : on calcule le module de la différence des affixes.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p07_q1",
            "type": "mcq",
            "prompt": "$z_A=1+2i$ et $z_B=4+6i$. Que vaut $AB$ ?",
            "options": [
              "$7$",
              "$25$",
              "$5$",
              "$\\sqrt7$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$z_B-z_A=3+4i$ et $|3+4i|=5$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Milieu",
          "stepTheme": "Milieu",
          "stepBadge": "Milieu",
          "paragraphText": "Le milieu de $[AB]$ a pour affixe $\\dfrac{z_A+z_B}{2}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p07_q2",
            "type": "mcq",
            "prompt": "Quelle est l'affixe du milieu de $[AB]$ avec $z_A=2-i$ et $z_B=4+3i$ ?",
            "options": [
              "$6+2i$",
              "$3+i$",
              "$1+2i$",
              "$2+4i$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\dfrac{6+2i}{2}=3+i$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Angle",
          "stepTheme": "Angle",
          "stepBadge": "Angle",
          "paragraphText": "$(\\overrightarrow{AB},\\overrightarrow{AC})=\\arg\\dfrac{z_C-z_A}{z_B-z_A}$ : l'argument du quotient donne l'angle.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p07_q3",
            "type": "mcq",
            "prompt": "Si $\\dfrac{z_C-z_A}{z_B-z_A}=2i$, que vaut l'angle $(\\overrightarrow{AB},\\overrightarrow{AC})$ ?",
            "options": [
              "$0$",
              "$\\pi$",
              "$\\dfrac{\\pi}{4}$",
              "$\\dfrac{\\pi}{2}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\arg(2i)=\\dfrac{\\pi}{2}$ : angle droit en $A$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Lire le quotient",
          "stepTheme": "Lire le quotient",
          "stepBadge": "Lire le quotient",
          "paragraphText": "Si $q=\\dfrac{z_C-z_A}{z_B-z_A}$ est réel, les points sont alignés ; s'il est imaginaire pur, $(AB)\\perp(AC)$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p07_q4",
            "type": "mcq",
            "prompt": "On trouve $\\dfrac{z_C-z_A}{z_B-z_A}=-3$. Que peut-on dire de $A$, $B$, $C$ ?",
            "options": [
              "Ils sont alignés",
              "$ABC$ est rectangle en $A$",
              "$ABC$ est équilatéral",
              "$AB=AC$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le quotient est réel : les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont colinéaires."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Rectangle isocèle",
          "stepTheme": "Rectangle isocèle",
          "stepBadge": "Rectangle isocèle",
          "paragraphText": "$\\dfrac{z_B-z_A}{z_C-z_A}=-i$ : module $1$ donc $AB=AC$ ; argument $-\\dfrac{\\pi}{2}$ donc angle droit en $A$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p07_q5",
            "type": "mcq",
            "prompt": "Avec $\\dfrac{z_B-z_A}{z_C-z_A}=-i$, quelle est la nature de $ABC$ ?",
            "options": [
              "Équilatéral",
              "Isocèle en $B$",
              "Rectangle isocèle en $A$",
              "Rectangle en $C$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$|-i|=1$ et $\\arg(-i)=-\\dfrac{\\pi}{2}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Cercles et médiatrices",
          "stepTheme": "Cercles et médiatrices",
          "stepBadge": "Cercles et médiatrices",
          "paragraphText": "$|z-z_A|=r$ : cercle de centre $A$, rayon $r$. $|z-z_A|=|z-z_B|$ : médiatrice de $[AB]$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p07_q6",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des points $M(z)$ tels que $|z-2+i|=3$ ?",
            "options": [
              "Le cercle de centre $(-2;1)$ et de rayon $3$",
              "Le cercle de centre $(2;-1)$ et de rayon $9$",
              "La médiatrice de $[OA]$",
              "Le cercle de centre $(2;-1)$ et de rayon $3$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$|z-(2-i)|=3$ : centre d'affixe $2-i$, rayon $3$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "L'ordre dans le quotient",
          "stepTheme": "L'ordre dans le quotient",
          "stepBadge": "L'ordre dans le quotient",
          "paragraphText": "$\\arg\\dfrac{z_C-z_A}{z_B-z_A}$ mesure l'angle de $\\overrightarrow{AB}$ VERS $\\overrightarrow{AC}$. Inverser le quotient change le signe de l'angle.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l06_nombres_complexes_p07_q7",
            "type": "mcq",
            "prompt": "Si $\\arg\\dfrac{z_B-z_A}{z_C-z_A}=-\\dfrac{\\pi}{2}$, que vaut $(\\overrightarrow{AB},\\overrightarrow{AC})$ ?",
            "options": [
              "$-\\dfrac{\\pi}{2}$",
              "$\\dfrac{\\pi}{2}$",
              "$\\pi$",
              "$0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\arg\\dfrac{z_B-z_A}{z_C-z_A}$ mesure $(\\overrightarrow{AC},\\overrightarrow{AB})$ ; l'angle inverse est $+\\dfrac{\\pi}{2}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p07_q1",
          "type": "mcq",
          "prompt": "$z_A=1+2i$ et $z_B=4+6i$. Que vaut $AB$ ?",
          "options": [
            "$7$",
            "$25$",
            "$5$",
            "$\\sqrt7$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$z_B-z_A=3+4i$ et $|3+4i|=5$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p07_q2",
          "type": "mcq",
          "prompt": "Quelle est l'affixe du milieu de $[AB]$ avec $z_A=2-i$ et $z_B=4+3i$ ?",
          "options": [
            "$6+2i$",
            "$3+i$",
            "$1+2i$",
            "$2+4i$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\dfrac{6+2i}{2}=3+i$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p07_q3",
          "type": "mcq",
          "prompt": "Si $\\dfrac{z_C-z_A}{z_B-z_A}=2i$, que vaut l'angle $(\\overrightarrow{AB},\\overrightarrow{AC})$ ?",
          "options": [
            "$0$",
            "$\\pi$",
            "$\\dfrac{\\pi}{4}$",
            "$\\dfrac{\\pi}{2}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\arg(2i)=\\dfrac{\\pi}{2}$ : angle droit en $A$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p07_q4",
          "type": "mcq",
          "prompt": "On trouve $\\dfrac{z_C-z_A}{z_B-z_A}=-3$. Que peut-on dire de $A$, $B$, $C$ ?",
          "options": [
            "Ils sont alignés",
            "$ABC$ est rectangle en $A$",
            "$ABC$ est équilatéral",
            "$AB=AC$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le quotient est réel : les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont colinéaires."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p07_q5",
          "type": "mcq",
          "prompt": "Avec $\\dfrac{z_B-z_A}{z_C-z_A}=-i$, quelle est la nature de $ABC$ ?",
          "options": [
            "Équilatéral",
            "Isocèle en $B$",
            "Rectangle isocèle en $A$",
            "Rectangle en $C$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$|-i|=1$ et $\\arg(-i)=-\\dfrac{\\pi}{2}$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p07_q6",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des points $M(z)$ tels que $|z-2+i|=3$ ?",
          "options": [
            "Le cercle de centre $(-2;1)$ et de rayon $3$",
            "Le cercle de centre $(2;-1)$ et de rayon $9$",
            "La médiatrice de $[OA]$",
            "Le cercle de centre $(2;-1)$ et de rayon $3$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$|z-(2-i)|=3$ : centre d'affixe $2-i$, rayon $3$."
        },
        {
          "id": "terminale_d_maths_numerique_l06_nombres_complexes_p07_q7",
          "type": "mcq",
          "prompt": "Si $\\arg\\dfrac{z_B-z_A}{z_C-z_A}=-\\dfrac{\\pi}{2}$, que vaut $(\\overrightarrow{AB},\\overrightarrow{AC})$ ?",
          "options": [
            "$-\\dfrac{\\pi}{2}$",
            "$\\dfrac{\\pi}{2}$",
            "$\\pi$",
            "$0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\arg\\dfrac{z_B-z_A}{z_C-z_A}$ mesure $(\\overrightarrow{AC},\\overrightarrow{AB})$ ; l'angle inverse est $+\\dfrac{\\pi}{2}$."
        }
      ]
    }
  ]
};
