import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Programme de Terminale A fourni par l'équipe KONAN (pas de PDF officiel), vérifié et corrigé » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_TLE_A_L02_ETUDE_FONCTIONS: CurriculumChapter = {
  "id": "terminale_a_maths_numerique_l02_etude_fonctions",
  "subjectId": "maths",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 2,
  "title": "Leçon 2 : Étude de fonctions et représentation graphique",
  "summary": "Plan d'étude, ensemble de définition, points sur les axes, tangente, parité et position relative d'une courbe et d'une droite.",
  "officialVolumeHours": 12,
  "contentVersion": 2,
  "source": "Programme de Terminale A fourni par l'équipe KONAN (pas de PDF officiel), vérifié et corrigé",
  "points": [
    {
      "id": "terminale_a_maths_numerique_l02_etude_fonctions_p01",
      "order": 1,
      "title": "Le plan d'étude et l'ensemble de définition",
      "summary": "Les 5 étapes de l'étude d'une fonction, l'ensemble de définition et les points sur les axes.",
      "conceptExplanation": "Plan complet pour étudier une fonction au BAC A :\n- étape 1 : déterminer l'ensemble de définition $D_f$ (pour une fraction, le dénominateur doit être différent de $0$) ;\n- étape 2 : calculer les limites aux bornes de $D_f$ et en déduire les asymptotes ;\n- étape 3 : calculer la dérivée $f'(x)$ et étudier son signe ;\n- étape 4 : dresser le tableau de variation (signe de $f'$, flèches, limites, valeurs des extremums) ;\n- étape 5 : tracer les asymptotes, les tangentes particulières et la courbe $(C_f)$.\n\nPoints sur les axes :\n- intersection avec l'axe des ordonnées $(OJ)$ : le point $(0;f(0))$ ;\n- intersection avec l'axe des abscisses $(OI)$ : on résout $f(x)=0$.\n\nExemple : $f(x)=\\dfrac{2x+1}{x-3}$ est définie si $x-3\\neq0$, donc $D_f=\\mathbb{R}\\setminus\\{3\\}$ ; $f(0)=-\\dfrac{1}{3}$ ; $f(x)=0\\iff2x+1=0\\iff x=-\\dfrac{1}{2}$.",
      "keyRule": "Fraction : dénominateur $\\neq0$. Axe $(OJ)$ : calculer $f(0)$. Axe $(OI)$ : résoudre $f(x)=0$.",
      "formulas": [],
      "workedExample": {
        "title": "Ensemble de définition",
        "statement": "Détermine $D_f$ pour $f(x)=\\dfrac{x+5}{2x-4}$.",
        "methodSteps": [
          "Valeur interdite : $2x-4=0\\iff x=2$.",
          "Toutes les autres valeurs sont permises."
        ],
        "conclusion": "$D_f=\\mathbb{R}\\setminus\\{2\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Fraction et valeur interdite",
          "stepTheme": "Fraction et valeur interdite",
          "stepBadge": "Fraction et valeur interdite",
          "paragraphText": "Une fraction n'existe que si son dénominateur est différent de $0$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p01_q1",
            "type": "mcq",
            "prompt": "Quel est l'ensemble de définition de la fonction $f(x)=\\dfrac{2x+1}{x-3}$ ?",
            "options": [
              "$\\mathbb{R}$",
              "$\\mathbb{R}\\setminus\\{3\\}$",
              "$\\mathbb{R}\\setminus\\{-3\\}$",
              "$]3;+\\infty[$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$x-3=0$ pour $x=3$ : c'est la seule valeur interdite."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Une autre valeur interdite",
          "stepTheme": "Une autre valeur interdite",
          "stepBadge": "Une autre valeur interdite",
          "paragraphText": "$2x-4=0\\iff x=2$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p01_q2",
            "type": "mcq",
            "prompt": "Quel est l'ensemble de définition de $f(x)=\\dfrac{x+5}{2x-4}$ ?",
            "options": [
              "$\\mathbb{R}\\setminus\\{-5\\}$",
              "$\\mathbb{R}\\setminus\\{4\\}$",
              "$\\mathbb{R}\\setminus\\{2\\}$",
              "$\\mathbb{R}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On annule le dénominateur : $2x=4$, $x=2$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Un polynôme",
          "stepTheme": "Un polynôme",
          "stepBadge": "Un polynôme",
          "paragraphText": "Un polynôme est défini pour tout réel : $D_f=\\mathbb{R}$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p01_q3",
            "type": "mcq",
            "prompt": "Quel est l'ensemble de définition de $f(x)=x^2-3x$ ?",
            "options": [
              "$\\mathbb{R}$",
              "$\\mathbb{R}\\setminus\\{0\\}$",
              "$\\mathbb{R}\\setminus\\{3\\}$",
              "$[0;3]$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il n'y a ni dénominateur ni racine carrée : tous les réels conviennent."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "L'ordre des étapes",
          "stepTheme": "L'ordre des étapes",
          "stepBadge": "L'ordre des étapes",
          "paragraphText": "Après la dérivée, on étudie son signe puis on dresse le tableau de variation.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p01_q4",
            "type": "mcq",
            "prompt": "Dans le plan d'étude d'une fonction, que fait-on juste après avoir calculé la dérivée $f'(x)$ ?",
            "options": [
              "On cherche l'ensemble de définition",
              "On trace directement la courbe",
              "On calcule $f(0)$ seulement",
              "On étudie le signe de $f'(x)$ puis on dresse le tableau de variation"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le signe de $f'$ donne les flèches du tableau de variation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Couper l'axe (OJ)",
          "stepTheme": "Couper l'axe (OJ)",
          "stepBadge": "Couper l'axe (OJ)",
          "paragraphText": "Sur l'axe des ordonnées, $x=0$ : le point est $(0;f(0))$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p01_q5",
            "type": "mcq",
            "prompt": "Comment trouve-t-on le point d'intersection de la courbe $(C_f)$ avec l'axe des ordonnées ?",
            "options": [
              "En résolvant $f(x)=0$",
              "En calculant $f(0)$",
              "En calculant $f'(0)$",
              "En cherchant la limite en $0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Tous les points de l'axe des ordonnées ont une abscisse nulle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Calculer f(0)",
          "stepTheme": "Calculer f(0)",
          "stepBadge": "Calculer f(0)",
          "paragraphText": "Pour $f(x)=\\dfrac{2x+1}{x-3}$ : $f(0)=\\dfrac{1}{-3}=-\\dfrac{1}{3}$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p01_q6",
            "type": "mcq",
            "prompt": "En quel point la courbe de $f(x)=\\dfrac{2x+1}{x-3}$ coupe-t-elle l'axe des ordonnées ?",
            "options": [
              "$\\left(0;\\dfrac{1}{3}\\right)$",
              "$\\left(-\\dfrac{1}{2};0\\right)$",
              "$\\left(0;-\\dfrac{1}{3}\\right)$",
              "$(0;3)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$f(0)=\\dfrac{2\\times0+1}{0-3}=-\\dfrac{1}{3}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Couper l'axe (OI)",
          "stepTheme": "Couper l'axe (OI)",
          "stepBadge": "Couper l'axe (OI)",
          "paragraphText": "Sur l'axe des abscisses, $y=0$ : on résout $f(x)=0$, c'est-à-dire numérateur nul.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p01_q7",
            "type": "mcq",
            "prompt": "En quel point la courbe de $f(x)=\\dfrac{2x+1}{x-3}$ coupe-t-elle l'axe des abscisses ?",
            "options": [
              "$\\left(-\\dfrac{1}{2};0\\right)$",
              "$(3;0)$",
              "$\\left(0;-\\dfrac{1}{3}\\right)$",
              "$(2;0)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$2x+1=0\\iff x=-\\dfrac{1}{2}$, valeur permise."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepTitle": "Un dénominateur jamais nul",
          "stepTheme": "Un dénominateur jamais nul",
          "stepBadge": "Un dénominateur jamais nul",
          "paragraphText": "$x^2+1\\geq1$ : il ne s'annule jamais, donc aucune valeur n'est interdite.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p01_q8",
            "type": "mcq",
            "prompt": "Quel est l'ensemble de définition de $f(x)=\\dfrac{3}{x^2+1}$ ?",
            "options": [
              "$\\mathbb{R}\\setminus\\{1\\}$",
              "$\\mathbb{R}\\setminus\\{-1;1\\}$",
              "$\\mathbb{R}\\setminus\\{0\\}$",
              "$\\mathbb{R}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$x^2+1=0$ n'a pas de solution réelle."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p01_q1",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de définition de la fonction $f(x)=\\dfrac{2x+1}{x-3}$ ?",
          "options": [
            "$\\mathbb{R}$",
            "$\\mathbb{R}\\setminus\\{3\\}$",
            "$\\mathbb{R}\\setminus\\{-3\\}$",
            "$]3;+\\infty[$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$x-3=0$ pour $x=3$ : c'est la seule valeur interdite."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p01_q2",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de définition de $f(x)=\\dfrac{x+5}{2x-4}$ ?",
          "options": [
            "$\\mathbb{R}\\setminus\\{-5\\}$",
            "$\\mathbb{R}\\setminus\\{4\\}$",
            "$\\mathbb{R}\\setminus\\{2\\}$",
            "$\\mathbb{R}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On annule le dénominateur : $2x=4$, $x=2$."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p01_q3",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de définition de $f(x)=x^2-3x$ ?",
          "options": [
            "$\\mathbb{R}$",
            "$\\mathbb{R}\\setminus\\{0\\}$",
            "$\\mathbb{R}\\setminus\\{3\\}$",
            "$[0;3]$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il n'y a ni dénominateur ni racine carrée : tous les réels conviennent."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p01_q4",
          "type": "mcq",
          "prompt": "Dans le plan d'étude d'une fonction, que fait-on juste après avoir calculé la dérivée $f'(x)$ ?",
          "options": [
            "On cherche l'ensemble de définition",
            "On trace directement la courbe",
            "On calcule $f(0)$ seulement",
            "On étudie le signe de $f'(x)$ puis on dresse le tableau de variation"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le signe de $f'$ donne les flèches du tableau de variation."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p01_q5",
          "type": "mcq",
          "prompt": "Comment trouve-t-on le point d'intersection de la courbe $(C_f)$ avec l'axe des ordonnées ?",
          "options": [
            "En résolvant $f(x)=0$",
            "En calculant $f(0)$",
            "En calculant $f'(0)$",
            "En cherchant la limite en $0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Tous les points de l'axe des ordonnées ont une abscisse nulle."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p01_q6",
          "type": "mcq",
          "prompt": "En quel point la courbe de $f(x)=\\dfrac{2x+1}{x-3}$ coupe-t-elle l'axe des ordonnées ?",
          "options": [
            "$\\left(0;\\dfrac{1}{3}\\right)$",
            "$\\left(-\\dfrac{1}{2};0\\right)$",
            "$\\left(0;-\\dfrac{1}{3}\\right)$",
            "$(0;3)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$f(0)=\\dfrac{2\\times0+1}{0-3}=-\\dfrac{1}{3}$."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p01_q7",
          "type": "mcq",
          "prompt": "En quel point la courbe de $f(x)=\\dfrac{2x+1}{x-3}$ coupe-t-elle l'axe des abscisses ?",
          "options": [
            "$\\left(-\\dfrac{1}{2};0\\right)$",
            "$(3;0)$",
            "$\\left(0;-\\dfrac{1}{3}\\right)$",
            "$(2;0)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$2x+1=0\\iff x=-\\dfrac{1}{2}$, valeur permise."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p01_q8",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de définition de $f(x)=\\dfrac{3}{x^2+1}$ ?",
          "options": [
            "$\\mathbb{R}\\setminus\\{1\\}$",
            "$\\mathbb{R}\\setminus\\{-1;1\\}$",
            "$\\mathbb{R}\\setminus\\{0\\}$",
            "$\\mathbb{R}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$x^2+1=0$ n'a pas de solution réelle."
        }
      ]
    },
    {
      "id": "terminale_a_maths_numerique_l02_etude_fonctions_p02",
      "order": 2,
      "title": "Tangente à une courbe",
      "summary": "La formule $y=f'(x_0)(x-x_0)+f(x_0)$ et les tangentes horizontales.",
      "conceptExplanation": "Équation de la tangente $(T)$ à $(C_f)$ au point d'abscisse $x_0$ (formule à connaître par cœur) :\n$$y=f'(x_0)(x-x_0)+f(x_0).$$\nLe nombre $f'(x_0)$ est le coefficient directeur (la pente) de la tangente.\n\nCas particulier : si $f'(x_0)=0$, la tangente est horizontale (parallèle à l'axe des abscisses), d'équation $y=f(x_0)$.\n\nExemple : $f(x)=x^2-3x+1$ en $x_0=2$. On a $f(2)=4-6+1=-1$, $f'(x)=2x-3$ donc $f'(2)=1$. Tangente : $y=1\\times(x-2)+(-1)$, soit $y=x-3$.\n\nMéthode pour une tangente horizontale : on résout $f'(x)=0$. Pour $f(x)=x^2-6x+2$ : $f'(x)=2x-6=0\\iff x=3$, et $f(3)=9-18+2=-7$ : tangente $y=-7$.",
      "keyRule": "$(T)$ : $y=f'(x_0)(x-x_0)+f(x_0)$. Si $f'(x_0)=0$ : tangente horizontale $y=f(x_0)$.",
      "formulas": [
        {
          "name": "Tangente",
          "formula": "y=f'(x_0)(x-x_0)+f(x_0)"
        }
      ],
      "workedExample": {
        "title": "Équation d'une tangente",
        "statement": "$f(x)=x^3$ ; tangente au point d'abscisse $x_0=1$.",
        "methodSteps": [
          "$f(1)=1$.",
          "$f'(x)=3x^2$, donc $f'(1)=3$.",
          "$y=3(x-1)+1=3x-2$."
        ],
        "conclusion": "$(T)$ : $y=3x-2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La formule",
          "stepTheme": "La formule",
          "stepBadge": "La formule",
          "paragraphText": "$y=f'(x_0)(x-x_0)+f(x_0)$ : la dérivée devant, la valeur de $f$ à la fin.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p02_q1",
            "type": "mcq",
            "prompt": "Quelle est la formule de l'équation de la tangente à $(C_f)$ au point d'abscisse $x_0$ ?",
            "options": [
              "$y=f(x_0)(x-x_0)+f'(x_0)$",
              "$y=f'(x_0)(x-x_0)+f(x_0)$",
              "$y=f'(x_0)x+f(x_0)$",
              "$y=f'(x)-f(x_0)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la formule officielle à savoir par cœur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Calculer f'(x0)",
          "stepTheme": "Calculer f'(x0)",
          "stepBadge": "Calculer f'(x0)",
          "paragraphText": "Pour $f(x)=x^2-3x+1$ : $f'(x)=2x-3$, donc $f'(2)=1$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p02_q2",
            "type": "mcq",
            "prompt": "Pour $f(x)=x^2-3x+1$, combien vaut $f'(2)$ ?",
            "options": [
              "$-1$",
              "$4$",
              "$1$",
              "$7$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$f'(x)=2x-3$ et $2\\times2-3=1$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Écrire la tangente",
          "stepTheme": "Écrire la tangente",
          "stepBadge": "Écrire la tangente",
          "paragraphText": "$f(2)=-1$ et $f'(2)=1$ : $y=1(x-2)-1=x-3$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p02_q3",
            "type": "mcq",
            "prompt": "Pour $f(x)=x^2-3x+1$, on a $f(2)=-1$ et $f'(2)=1$. Quelle est l'équation de la tangente au point d'abscisse $2$ ?",
            "options": [
              "$y=x-3$",
              "$y=x-1$",
              "$y=-x+1$",
              "$y=x+3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$y=1\\times(x-2)+(-1)=x-3$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Tangente horizontale",
          "stepTheme": "Tangente horizontale",
          "stepBadge": "Tangente horizontale",
          "paragraphText": "Si $f'(x_0)=0$, la tangente est horizontale : $y=f(x_0)$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p02_q4",
            "type": "mcq",
            "prompt": "On sait que $f'(2)=0$ et $f(2)=4$. Comment est la tangente à la courbe au point d'abscisse $2$ ?",
            "options": [
              "Verticale, d'équation $x=2$",
              "Oblique, d'équation $y=2x+4$",
              "Elle passe par l'origine",
              "Horizontale, d'équation $y=4$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Pente nulle : $y=0\\times(x-2)+4=4$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Tangente à x³",
          "stepTheme": "Tangente à x³",
          "stepBadge": "Tangente à x³",
          "paragraphText": "$f(x)=x^3$ en $x_0=1$ : $f(1)=1$, $f'(1)=3$, donc $y=3x-2$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p02_q5",
            "type": "mcq",
            "prompt": "Pour $f(x)=x^3$, quelle est l'équation de la tangente au point d'abscisse $1$ ?",
            "options": [
              "$y=3x-2$",
              "$y=3x+1$",
              "$y=x+2$",
              "$y=3x$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$f'(x)=3x^2$, $f'(1)=3$ ; $y=3(x-1)+1=3x-2$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser f et f'",
          "stepTheme": "Ne pas inverser f et f'",
          "stepBadge": "Ne pas inverser f et f'",
          "paragraphText": "Erreur fréquente : écrire $f(x_0)$ devant $(x-x_0)$ au lieu de $f'(x_0)$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p02_q6",
            "type": "mcq",
            "prompt": "Pour $f(x)=x^3$ en $x_0=1$ ($f(1)=1$ et $f'(1)=3$), un élève trouve $y=x+2$ en écrivant $y=f(x_0)(x-x_0)+f'(x_0)$. Quelle est son erreur ?",
            "options": [
              "Aucune, son résultat est juste",
              "Il a oublié de dériver $x^3$",
              "Il a inversé $f(x_0)$ et $f'(x_0)$ : la bonne tangente est $y=3x-2$",
              "Il fallait écrire $y=f'(x_0)x$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La pente est $f'(x_0)=3$, pas $f(x_0)=1$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "La pente de la tangente",
          "stepTheme": "La pente de la tangente",
          "stepBadge": "La pente de la tangente",
          "paragraphText": "Le coefficient directeur de la tangente en $x_0$ est $f'(x_0)$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p02_q7",
            "type": "mcq",
            "prompt": "On sait que $f'(-1)=-4$ et $f(-1)=2$. Quel est le coefficient directeur de la tangente à $(C_f)$ au point d'abscisse $-1$ ?",
            "options": [
              "$2$",
              "$-4$",
              "$-1$",
              "$4$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La pente de la tangente est le nombre dérivé $f'(-1)=-4$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepTitle": "Trouver une tangente horizontale",
          "stepTheme": "Trouver une tangente horizontale",
          "stepBadge": "Trouver une tangente horizontale",
          "paragraphText": "On résout $f'(x)=0$ : pour $f(x)=x^2-6x+2$, $2x-6=0$ donne $x=3$ et $f(3)=-7$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p02_q8",
            "type": "mcq",
            "prompt": "En quel point la courbe de $f(x)=x^2-6x+2$ a-t-elle une tangente horizontale, et quelle est l'équation de cette tangente ?",
            "options": [
              "Au point d'abscisse $0$ : $y=2$",
              "Au point d'abscisse $6$ : $y=2$",
              "Au point d'abscisse $-3$ : $y=29$",
              "Au point d'abscisse $3$ : $y=-7$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$f'(x)=2x-6=0\\iff x=3$ ; $f(3)=9-18+2=-7$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p02_q1",
          "type": "mcq",
          "prompt": "Quelle est la formule de l'équation de la tangente à $(C_f)$ au point d'abscisse $x_0$ ?",
          "options": [
            "$y=f(x_0)(x-x_0)+f'(x_0)$",
            "$y=f'(x_0)(x-x_0)+f(x_0)$",
            "$y=f'(x_0)x+f(x_0)$",
            "$y=f'(x)-f(x_0)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la formule officielle à savoir par cœur."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p02_q2",
          "type": "mcq",
          "prompt": "Pour $f(x)=x^2-3x+1$, combien vaut $f'(2)$ ?",
          "options": [
            "$-1$",
            "$4$",
            "$1$",
            "$7$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$f'(x)=2x-3$ et $2\\times2-3=1$."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p02_q3",
          "type": "mcq",
          "prompt": "Pour $f(x)=x^2-3x+1$, on a $f(2)=-1$ et $f'(2)=1$. Quelle est l'équation de la tangente au point d'abscisse $2$ ?",
          "options": [
            "$y=x-3$",
            "$y=x-1$",
            "$y=-x+1$",
            "$y=x+3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$y=1\\times(x-2)+(-1)=x-3$."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p02_q4",
          "type": "mcq",
          "prompt": "On sait que $f'(2)=0$ et $f(2)=4$. Comment est la tangente à la courbe au point d'abscisse $2$ ?",
          "options": [
            "Verticale, d'équation $x=2$",
            "Oblique, d'équation $y=2x+4$",
            "Elle passe par l'origine",
            "Horizontale, d'équation $y=4$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Pente nulle : $y=0\\times(x-2)+4=4$."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p02_q5",
          "type": "mcq",
          "prompt": "Pour $f(x)=x^3$, quelle est l'équation de la tangente au point d'abscisse $1$ ?",
          "options": [
            "$y=3x-2$",
            "$y=3x+1$",
            "$y=x+2$",
            "$y=3x$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$f'(x)=3x^2$, $f'(1)=3$ ; $y=3(x-1)+1=3x-2$."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p02_q6",
          "type": "mcq",
          "prompt": "Pour $f(x)=x^3$ en $x_0=1$ ($f(1)=1$ et $f'(1)=3$), un élève trouve $y=x+2$ en écrivant $y=f(x_0)(x-x_0)+f'(x_0)$. Quelle est son erreur ?",
          "options": [
            "Aucune, son résultat est juste",
            "Il a oublié de dériver $x^3$",
            "Il a inversé $f(x_0)$ et $f'(x_0)$ : la bonne tangente est $y=3x-2$",
            "Il fallait écrire $y=f'(x_0)x$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La pente est $f'(x_0)=3$, pas $f(x_0)=1$."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p02_q7",
          "type": "mcq",
          "prompt": "On sait que $f'(-1)=-4$ et $f(-1)=2$. Quel est le coefficient directeur de la tangente à $(C_f)$ au point d'abscisse $-1$ ?",
          "options": [
            "$2$",
            "$-4$",
            "$-1$",
            "$4$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La pente de la tangente est le nombre dérivé $f'(-1)=-4$."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p02_q8",
          "type": "mcq",
          "prompt": "En quel point la courbe de $f(x)=x^2-6x+2$ a-t-elle une tangente horizontale, et quelle est l'équation de cette tangente ?",
          "options": [
            "Au point d'abscisse $0$ : $y=2$",
            "Au point d'abscisse $6$ : $y=2$",
            "Au point d'abscisse $-3$ : $y=29$",
            "Au point d'abscisse $3$ : $y=-7$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$f'(x)=2x-6=0\\iff x=3$ ; $f(3)=9-18+2=-7$."
        }
      ]
    },
    {
      "id": "terminale_a_maths_numerique_l02_etude_fonctions_p03",
      "order": 3,
      "title": "Parité et position relative",
      "summary": "Fonctions paires et impaires, symétries de la courbe, position par rapport à une droite.",
      "conceptExplanation": "Parité (l'ensemble $D_f$ doit être symétrique par rapport à $0$) :\n- $f$ est paire si $f(-x)=f(x)$ pour tout $x\\in D_f$ : $(C_f)$ est symétrique par rapport à l'axe des ordonnées $(OJ)$ ;\n- $f$ est impaire si $f(-x)=-f(x)$ pour tout $x\\in D_f$ : $(C_f)$ est symétrique par rapport à l'origine $O$.\nUne fonction peut n'être ni paire ni impaire : $h(x)=x^2+x$ donne $h(-x)=x^2-x$.\n\nPosition relative de $(C_f)$ et d'une droite $(D)$ d'équation $y=ax+b$ : on étudie le signe de la différence $f(x)-(ax+b)$.\n- Si $f(x)-(ax+b)>0$, $(C_f)$ est au-dessus de $(D)$.\n- Si $f(x)-(ax+b)<0$, $(C_f)$ est en dessous de $(D)$.\n- Si $f(x)-(ax+b)=0$, la courbe et la droite se coupent.\n\nCorrection : la question « $f(x)-y>0$ » du document est ambiguë ; il faut écrire $f(x)-(ax+b)>0$, où $ax+b$ est l'ordonnée du point de la droite.",
      "keyRule": "Paire : $f(-x)=f(x)$, symétrie d'axe $(OJ)$. Impaire : $f(-x)=-f(x)$, symétrie de centre $O$. Position : signe de $f(x)-(ax+b)$.",
      "formulas": [],
      "workedExample": {
        "title": "Position d'une courbe et d'une droite",
        "statement": "$f(x)=x+1+\\dfrac{1}{x}$ sur $]0;+\\infty[$ et $(D)$ : $y=x+1$.",
        "methodSteps": [
          "$f(x)-(x+1)=\\dfrac{1}{x}$.",
          "Pour $x>0$, $\\dfrac{1}{x}>0$."
        ],
        "conclusion": "$(C_f)$ est au-dessus de $(D)$ sur $]0;+\\infty[$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Fonction paire",
          "stepTheme": "Fonction paire",
          "stepBadge": "Fonction paire",
          "paragraphText": "$f(-x)=f(x)$ pour tout $x$ de $D_f$ : $f$ est paire.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p03_q1",
            "type": "mcq",
            "prompt": "On sait que pour tout $x\\in D_f$, $f(-x)=f(x)$. On dit que la fonction $f$ est :",
            "options": [
              "Impaire",
              "Paire",
              "Croissante",
              "Constante"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition d'une fonction paire."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Symétrie d'une fonction impaire",
          "stepTheme": "Symétrie d'une fonction impaire",
          "stepBadge": "Symétrie d'une fonction impaire",
          "paragraphText": "La courbe d'une fonction impaire est symétrique par rapport à l'origine $O$ du repère.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p03_q2",
            "type": "mcq",
            "prompt": "La courbe représentative d'une fonction impaire est symétrique par rapport :",
            "options": [
              "À l'axe des abscisses",
              "À l'axe des ordonnées",
              "À la droite $y=x$",
              "À l'origine $O$ du repère"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Fonction paire : axe $(OJ)$ ; fonction impaire : origine $O$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Reconnaître une fonction paire",
          "stepTheme": "Reconnaître une fonction paire",
          "stepBadge": "Reconnaître une fonction paire",
          "paragraphText": "$f(x)=x^4-2x^2$ : $f(-x)=(-x)^4-2(-x)^2=x^4-2x^2=f(x)$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p03_q3",
            "type": "mcq",
            "prompt": "Soit $f(x)=x^4-2x^2$ définie sur $\\mathbb{R}$. On calcule $f(-x)=x^4-2x^2$. Que peut-on conclure ?",
            "options": [
              "$f$ est paire",
              "$f$ est impaire",
              "$f$ n'est ni paire ni impaire",
              "$f$ est constante"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$f(-x)=f(x)$ pour tout réel $x$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Reconnaître une fonction impaire",
          "stepTheme": "Reconnaître une fonction impaire",
          "stepBadge": "Reconnaître une fonction impaire",
          "paragraphText": "$g(x)=x^3-5x$ : $g(-x)=-x^3+5x=-g(x)$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p03_q4",
            "type": "mcq",
            "prompt": "Soit $g(x)=x^3-5x$ définie sur $\\mathbb{R}$. On calcule $g(-x)=-x^3+5x$. Que peut-on conclure ?",
            "options": [
              "$g$ est paire",
              "$g$ n'est ni paire ni impaire",
              "$g$ est impaire",
              "$g$ est positive"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$-x^3+5x=-(x^3-5x)=-g(x)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ni paire ni impaire",
          "stepTheme": "Ni paire ni impaire",
          "stepBadge": "Ni paire ni impaire",
          "paragraphText": "$h(x)=x^2+x$ : $h(-x)=x^2-x$, qui n'est égal ni à $h(x)$ ni à $-h(x)$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p03_q5",
            "type": "mcq",
            "prompt": "Soit $h(x)=x^2+x$ définie sur $\\mathbb{R}$. On calcule $h(-x)=x^2-x$. Que peut-on conclure ?",
            "options": [
              "$h$ est paire",
              "$h$ est impaire",
              "$h$ est paire et impaire",
              "$h$ n'est ni paire ni impaire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Par exemple $h(1)=2$ et $h(-1)=0$ : ni égaux, ni opposés."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Comparer une courbe et une droite",
          "stepTheme": "Comparer une courbe et une droite",
          "stepBadge": "Comparer une courbe et une droite",
          "paragraphText": "Pour placer $(C_f)$ par rapport à $(D)$ : $y=ax+b$, on étudie le signe de $f(x)-(ax+b)$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p03_q6",
            "type": "mcq",
            "prompt": "Comment étudie-t-on la position relative de la courbe $(C_f)$ par rapport à une droite $(D)$ d'équation $y=ax+b$ ?",
            "options": [
              "On calcule la dérivée $f'(x)$",
              "On étudie le signe de $f(x)-(ax+b)$",
              "On calcule la limite en $+\\infty$",
              "On calcule $f(0)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le signe de la différence dit lequel est au-dessus."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Lire le signe de la différence",
          "stepTheme": "Lire le signe de la différence",
          "stepBadge": "Lire le signe de la différence",
          "paragraphText": "Si $f(x)-(ax+b)>0$, la courbe est au-dessus de la droite.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p03_q7",
            "type": "mcq",
            "prompt": "Sur un intervalle, on a $f(x)-(ax+b)>0$, où $y=ax+b$ est l'équation de la droite $(D)$. Que signifie ce résultat ?",
            "options": [
              "La courbe $(C_f)$ est en dessous de la droite $(D)$",
              "La fonction $f$ est croissante",
              "La courbe $(C_f)$ est au-dessus de la droite $(D)$",
              "La dérivée est positive"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$f(x)>ax+b$ : les points de la courbe sont plus hauts que ceux de la droite."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepTitle": "Un exemple complet",
          "stepTheme": "Un exemple complet",
          "stepBadge": "Un exemple complet",
          "paragraphText": "$f(x)=x+1+\\dfrac{1}{x}$ et $(D)$ : $y=x+1$. La différence vaut $\\dfrac{1}{x}>0$ sur $]0;+\\infty[$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p03_q8",
            "type": "mcq",
            "prompt": "Soit $f(x)=x+1+\\dfrac{1}{x}$ sur $]0;+\\infty[$ et la droite $(D)$ : $y=x+1$. Sachant que $f(x)-(x+1)=\\dfrac{1}{x}$, quelle est la position de $(C_f)$ ?",
            "options": [
              "Au-dessus de $(D)$ sur $]0;+\\infty[$",
              "En dessous de $(D)$",
              "Elle coupe $(D)$ en $x=1$",
              "Confondue avec $(D)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{1}{x}>0$ pour tout $x>0$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p03_q1",
          "type": "mcq",
          "prompt": "On sait que pour tout $x\\in D_f$, $f(-x)=f(x)$. On dit que la fonction $f$ est :",
          "options": [
            "Impaire",
            "Paire",
            "Croissante",
            "Constante"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition d'une fonction paire."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p03_q2",
          "type": "mcq",
          "prompt": "La courbe représentative d'une fonction impaire est symétrique par rapport :",
          "options": [
            "À l'axe des abscisses",
            "À l'axe des ordonnées",
            "À la droite $y=x$",
            "À l'origine $O$ du repère"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Fonction paire : axe $(OJ)$ ; fonction impaire : origine $O$."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p03_q3",
          "type": "mcq",
          "prompt": "Soit $f(x)=x^4-2x^2$ définie sur $\\mathbb{R}$. On calcule $f(-x)=x^4-2x^2$. Que peut-on conclure ?",
          "options": [
            "$f$ est paire",
            "$f$ est impaire",
            "$f$ n'est ni paire ni impaire",
            "$f$ est constante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$f(-x)=f(x)$ pour tout réel $x$."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p03_q4",
          "type": "mcq",
          "prompt": "Soit $g(x)=x^3-5x$ définie sur $\\mathbb{R}$. On calcule $g(-x)=-x^3+5x$. Que peut-on conclure ?",
          "options": [
            "$g$ est paire",
            "$g$ n'est ni paire ni impaire",
            "$g$ est impaire",
            "$g$ est positive"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$-x^3+5x=-(x^3-5x)=-g(x)$."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p03_q5",
          "type": "mcq",
          "prompt": "Soit $h(x)=x^2+x$ définie sur $\\mathbb{R}$. On calcule $h(-x)=x^2-x$. Que peut-on conclure ?",
          "options": [
            "$h$ est paire",
            "$h$ est impaire",
            "$h$ est paire et impaire",
            "$h$ n'est ni paire ni impaire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Par exemple $h(1)=2$ et $h(-1)=0$ : ni égaux, ni opposés."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p03_q6",
          "type": "mcq",
          "prompt": "Comment étudie-t-on la position relative de la courbe $(C_f)$ par rapport à une droite $(D)$ d'équation $y=ax+b$ ?",
          "options": [
            "On calcule la dérivée $f'(x)$",
            "On étudie le signe de $f(x)-(ax+b)$",
            "On calcule la limite en $+\\infty$",
            "On calcule $f(0)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le signe de la différence dit lequel est au-dessus."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p03_q7",
          "type": "mcq",
          "prompt": "Sur un intervalle, on a $f(x)-(ax+b)>0$, où $y=ax+b$ est l'équation de la droite $(D)$. Que signifie ce résultat ?",
          "options": [
            "La courbe $(C_f)$ est en dessous de la droite $(D)$",
            "La fonction $f$ est croissante",
            "La courbe $(C_f)$ est au-dessus de la droite $(D)$",
            "La dérivée est positive"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$f(x)>ax+b$ : les points de la courbe sont plus hauts que ceux de la droite."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p03_q8",
          "type": "mcq",
          "prompt": "Soit $f(x)=x+1+\\dfrac{1}{x}$ sur $]0;+\\infty[$ et la droite $(D)$ : $y=x+1$. Sachant que $f(x)-(x+1)=\\dfrac{1}{x}$, quelle est la position de $(C_f)$ ?",
          "options": [
            "Au-dessus de $(D)$ sur $]0;+\\infty[$",
            "En dessous de $(D)$",
            "Elle coupe $(D)$ en $x=1$",
            "Confondue avec $(D)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{1}{x}>0$ pour tout $x>0$."
        }
      ]
    },
    {
      "id": "terminale_a_maths_numerique_l02_etude_fonctions_p04",
      "order": 4,
      "title": "Exercice type BAC : étude de f(x) = (x + 1)/(x − 1)",
      "summary": "Ensemble de définition, asymptotes, dérivée, variations, tangente et position, comme au BAC.",
      "conceptExplanation": "Sujet : soit $f(x)=\\dfrac{x+1}{x-1}$.\n\n1. $D_f=\\mathbb{R}\\setminus\\{1\\}$.\n2. En $\\pm\\infty$ : $\\dfrac{x}{x}=1$, donc $\\lim\\limits_{x\\to\\pm\\infty}f(x)=1$ : la droite $y=1$ est asymptote horizontale.\n3. En $1^+$ : numérateur $\\to2$, dénominateur $\\to0^+$, donc $f(x)\\to+\\infty$ ; en $1^-$, $f(x)\\to-\\infty$ : la droite $x=1$ est asymptote verticale.\n4. $f'(x)=\\dfrac{1\\times(x-1)-(x+1)\\times1}{(x-1)^2}=\\dfrac{-2}{(x-1)^2}$.\n5. $f'(x)<0$ : $f$ est strictement décroissante sur $]-\\infty;1[$ et sur $]1;+\\infty[$.\n6. Tangente en $0$ : $f(0)=-1$, $f'(0)=-2$, donc $y=-2x-1$.\n7. Axe des abscisses : $f(x)=0\\iff x=-1$, point $(-1;0)$.\n8. Position par rapport à $y=1$ : $f(x)-1=\\dfrac{2}{x-1}$, positif sur $]1;+\\infty[$ (courbe au-dessus), négatif sur $]-\\infty;1[$ (courbe en dessous).",
      "keyRule": "Étude complète : $D_f$, limites et asymptotes, $f'$ et son signe, tableau de variation, tangente, points remarquables, position.",
      "formulas": [],
      "workedExample": {
        "title": "Position par rapport à l'asymptote",
        "statement": "Compare $(C_f)$ et la droite $y=1$ pour $f(x)=\\dfrac{x+1}{x-1}$.",
        "methodSteps": [
          "$f(x)-1=\\dfrac{x+1-(x-1)}{x-1}=\\dfrac{2}{x-1}$.",
          "Si $x>1$ : positif ; si $x<1$ : négatif."
        ],
        "conclusion": "$(C_f)$ est au-dessus de $y=1$ sur $]1;+\\infty[$ et en dessous sur $]-\\infty;1[$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Ensemble de définition",
          "stepTheme": "Ensemble de définition",
          "stepBadge": "Ensemble de définition",
          "paragraphText": "$x-1\\neq0$, donc $D_f=\\mathbb{R}\\setminus\\{1\\}$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p04_q1",
            "type": "mcq",
            "prompt": "Soit $f(x)=\\dfrac{x+1}{x-1}$. Quel est son ensemble de définition ?",
            "options": [
              "$\\mathbb{R}\\setminus\\{-1\\}$",
              "$\\mathbb{R}$",
              "$\\mathbb{R}\\setminus\\{1\\}$",
              "$]1;+\\infty[$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le dénominateur s'annule pour $x=1$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Asymptote horizontale",
          "stepTheme": "Asymptote horizontale",
          "stepBadge": "Asymptote horizontale",
          "paragraphText": "En $\\pm\\infty$, $\\dfrac{x}{x}=1$ : asymptote $y=1$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p04_q2",
            "type": "mcq",
            "prompt": "Soit $f(x)=\\dfrac{x+1}{x-1}$. Quelle droite est asymptote horizontale à $(C_f)$ ?",
            "options": [
              "$y=1$",
              "$x=1$",
              "$y=-1$",
              "$y=0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\lim\\limits_{x\\to\\pm\\infty}f(x)=1$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Asymptote verticale",
          "stepTheme": "Asymptote verticale",
          "stepBadge": "Asymptote verticale",
          "paragraphText": "En $1^+$, $\\dfrac{2}{0^+}\\to+\\infty$ : asymptote verticale $x=1$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p04_q3",
            "type": "mcq",
            "prompt": "Soit $f(x)=\\dfrac{x+1}{x-1}$. Quand $x\\to1$ avec $x>1$, le numérateur tend vers $2$ et le dénominateur vers $0$ en restant positif. Que vaut $\\lim\\limits_{x\\to1^+}f(x)$ ?",
            "options": [
              "$2$",
              "$1$",
              "$-\\infty$",
              "$+\\infty$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$2$ divisé par un petit nombre positif : $+\\infty$ ; donc $x=1$ est asymptote verticale."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La dérivée",
          "stepTheme": "La dérivée",
          "stepBadge": "La dérivée",
          "paragraphText": "$f'(x)=\\dfrac{(x-1)-(x+1)}{(x-1)^2}=\\dfrac{-2}{(x-1)^2}$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p04_q4",
            "type": "mcq",
            "prompt": "Soit $f(x)=\\dfrac{x+1}{x-1}$. Avec la formule $\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^2}$, que vaut $f'(x)$ ?",
            "options": [
              "$\\dfrac{2}{(x-1)^2}$",
              "$\\dfrac{-2}{(x-1)^2}$",
              "$\\dfrac{2x}{(x-1)^2}$",
              "$1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$u'v-uv'=1\\times(x-1)-(x+1)\\times1=-2$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les variations",
          "stepTheme": "Les variations",
          "stepBadge": "Les variations",
          "paragraphText": "$f'(x)=\\dfrac{-2}{(x-1)^2}<0$ : $f$ est décroissante sur chaque intervalle.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p04_q5",
            "type": "mcq",
            "prompt": "Pour $f(x)=\\dfrac{x+1}{x-1}$, on a $f'(x)=\\dfrac{-2}{(x-1)^2}$. Quel est le sens de variation de $f$ ?",
            "options": [
              "Croissante sur $\\mathbb{R}$",
              "Croissante puis décroissante",
              "Strictement décroissante sur $]-\\infty;1[$ et sur $]1;+\\infty[$",
              "Constante"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$-2<0$ et $(x-1)^2>0$ : $f'(x)<0$ partout sur $D_f$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Tangente en 0",
          "stepTheme": "Tangente en 0",
          "stepBadge": "Tangente en 0",
          "paragraphText": "$f(0)=-1$, $f'(0)=-2$ : $y=-2(x-0)-1=-2x-1$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p04_q6",
            "type": "mcq",
            "prompt": "Pour $f(x)=\\dfrac{x+1}{x-1}$, on a $f(0)=-1$ et $f'(0)=-2$. Quelle est l'équation de la tangente au point d'abscisse $0$ ?",
            "options": [
              "$y=-2x-1$",
              "$y=-x-2$",
              "$y=2x-1$",
              "$y=-2x+1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$y=f'(0)(x-0)+f(0)=-2x-1$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Couper l'axe des abscisses",
          "stepTheme": "Couper l'axe des abscisses",
          "stepBadge": "Couper l'axe des abscisses",
          "paragraphText": "$f(x)=0\\iff x+1=0\\iff x=-1$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p04_q7",
            "type": "mcq",
            "prompt": "En quel point la courbe de $f(x)=\\dfrac{x+1}{x-1}$ coupe-t-elle l'axe des abscisses ?",
            "options": [
              "$(1;0)$",
              "$(0;-1)$",
              "$(0;1)$",
              "$(-1;0)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On annule le numérateur : $x=-1$, valeur permise."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepTitle": "Position selon l'intervalle",
          "stepTheme": "Position selon l'intervalle",
          "stepBadge": "Position selon l'intervalle",
          "paragraphText": "$f(x)-1=\\dfrac{2}{x-1}$ change de signe en $1$ : la position dépend de l'intervalle.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l02_etude_fonctions_p04_q8",
            "type": "mcq",
            "prompt": "Pour $f(x)=\\dfrac{x+1}{x-1}$, on a $f(x)-1=\\dfrac{2}{x-1}$. Quelle est la position de $(C_f)$ par rapport à la droite $y=1$ sur $]1;+\\infty[$ ?",
            "options": [
              "En dessous",
              "Au-dessus",
              "Confondue",
              "Elle la coupe en $x=2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Si $x>1$, $\\dfrac{2}{x-1}>0$ : la courbe est au-dessus (et en dessous sur $]-\\infty;1[$)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p04_q1",
          "type": "mcq",
          "prompt": "Soit $f(x)=\\dfrac{x+1}{x-1}$. Quel est son ensemble de définition ?",
          "options": [
            "$\\mathbb{R}\\setminus\\{-1\\}$",
            "$\\mathbb{R}$",
            "$\\mathbb{R}\\setminus\\{1\\}$",
            "$]1;+\\infty[$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le dénominateur s'annule pour $x=1$."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p04_q2",
          "type": "mcq",
          "prompt": "Soit $f(x)=\\dfrac{x+1}{x-1}$. Quelle droite est asymptote horizontale à $(C_f)$ ?",
          "options": [
            "$y=1$",
            "$x=1$",
            "$y=-1$",
            "$y=0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\lim\\limits_{x\\to\\pm\\infty}f(x)=1$."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p04_q3",
          "type": "mcq",
          "prompt": "Soit $f(x)=\\dfrac{x+1}{x-1}$. Quand $x\\to1$ avec $x>1$, le numérateur tend vers $2$ et le dénominateur vers $0$ en restant positif. Que vaut $\\lim\\limits_{x\\to1^+}f(x)$ ?",
          "options": [
            "$2$",
            "$1$",
            "$-\\infty$",
            "$+\\infty$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$2$ divisé par un petit nombre positif : $+\\infty$ ; donc $x=1$ est asymptote verticale."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p04_q4",
          "type": "mcq",
          "prompt": "Soit $f(x)=\\dfrac{x+1}{x-1}$. Avec la formule $\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^2}$, que vaut $f'(x)$ ?",
          "options": [
            "$\\dfrac{2}{(x-1)^2}$",
            "$\\dfrac{-2}{(x-1)^2}$",
            "$\\dfrac{2x}{(x-1)^2}$",
            "$1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$u'v-uv'=1\\times(x-1)-(x+1)\\times1=-2$."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p04_q5",
          "type": "mcq",
          "prompt": "Pour $f(x)=\\dfrac{x+1}{x-1}$, on a $f'(x)=\\dfrac{-2}{(x-1)^2}$. Quel est le sens de variation de $f$ ?",
          "options": [
            "Croissante sur $\\mathbb{R}$",
            "Croissante puis décroissante",
            "Strictement décroissante sur $]-\\infty;1[$ et sur $]1;+\\infty[$",
            "Constante"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$-2<0$ et $(x-1)^2>0$ : $f'(x)<0$ partout sur $D_f$."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p04_q6",
          "type": "mcq",
          "prompt": "Pour $f(x)=\\dfrac{x+1}{x-1}$, on a $f(0)=-1$ et $f'(0)=-2$. Quelle est l'équation de la tangente au point d'abscisse $0$ ?",
          "options": [
            "$y=-2x-1$",
            "$y=-x-2$",
            "$y=2x-1$",
            "$y=-2x+1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$y=f'(0)(x-0)+f(0)=-2x-1$."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p04_q7",
          "type": "mcq",
          "prompt": "En quel point la courbe de $f(x)=\\dfrac{x+1}{x-1}$ coupe-t-elle l'axe des abscisses ?",
          "options": [
            "$(1;0)$",
            "$(0;-1)$",
            "$(0;1)$",
            "$(-1;0)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On annule le numérateur : $x=-1$, valeur permise."
        },
        {
          "id": "terminale_a_maths_numerique_l02_etude_fonctions_p04_q8",
          "type": "mcq",
          "prompt": "Pour $f(x)=\\dfrac{x+1}{x-1}$, on a $f(x)-1=\\dfrac{2}{x-1}$. Quelle est la position de $(C_f)$ par rapport à la droite $y=1$ sur $]1;+\\infty[$ ?",
          "options": [
            "En dessous",
            "Au-dessus",
            "Confondue",
            "Elle la coupe en $x=2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Si $x>1$, $\\dfrac{2}{x-1}>0$ : la courbe est au-dessus (et en dessous sur $]-\\infty;1[$)."
        }
      ]
    }
  ]
};
