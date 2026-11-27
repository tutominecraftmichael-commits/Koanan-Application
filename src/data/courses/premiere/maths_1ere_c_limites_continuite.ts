import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Limites et continuité » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Limites et continuité » (document PDF officiel, Mathématiques 1ère C, lot P10)
export const MATHS_1ERE_C_L05_LIMITES_CONTINUITE: CurriculumChapter = {
  "id": "premiere_c_maths_numerique_l05_limites_continuite",
  "subjectId": "maths",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 5,
  "title": "Leçon 5 : Limites et continuité",
  "summary": "La leçon introduit la notion de limite d’une fonction en un point, définit la continuité en un point, présente les limites à gauche et à droite, puis les opérations sur les limites pour calculer des limites, avec une application à un tarif téléphonique défini par morceaux.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Limites et continuité » (document PDF officiel, Mathématiques 1ère C, lot P10)",
  "points": [
    {
      "id": "premiere_c_maths_numerique_l05_limites_continuite_p01",
      "order": 1,
      "title": "Notion de limite en un point",
      "summary": "Comprendre, à partir de la fonction carré, ce que signifie « $f(x)$ tend vers $4$ lorsque $x$ tend vers $2$ » et la notation de la limite.",
      "conceptExplanation": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x^2$.\nOn constate par le calcul que lorsque l’on choisit « $x$ suffisamment proche de $2$ », on obtient « $f(x)$ suffisamment proche de $4$ ».\nOn dit alors que $f(x)$ tend vers $4$ lorsque $x$ tend vers $2$, ou bien que la limite, lorsque $x$ tend vers $2$, de $f(x)$ égale $4$. On dit aussi que $4$ est la limite de $f$ en $2$, et on note $\\lim_{x \\to 2} f(x) = 4$.\nRemarque de la leçon : on démontre et on admet que, lorsqu’une fonction admet une limite en $a$, cette limite est unique.",
      "keyRule": "Lis $\\lim_{x \\to a} f(x) = l$ ainsi : quand $x$ se rapproche de $a$, les valeurs $f(x)$ se rapprochent de $l$.",
      "formulas": [
        {
          "name": "Limite de la fonction carré en 2",
          "formula": "\\lim_{x \\to 2} x^2 = 4"
        }
      ],
      "workedExample": {
        "title": "La limite de $2x - 1$ en $5$ (exercice de fixation)",
        "statement": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = 2x - 1$. Parmi les affirmations $\\lim_{x \\to 5} f(x) = 8$, $\\lim_{x \\to 5} f(x) = 5$ et $\\lim_{x \\to 5} f(x) = 9$, laquelle est correcte ?",
        "methodSteps": [
          "On remplace $x$ par $5$ dans l’expression de $f$ : $2 \\times 5 - 1$.",
          "On obtient $10 - 1 = 9$.",
          "On compare aux affirmations proposées : $8$ est faux, $5$ est faux, $9$ est vrai."
        ],
        "conclusion": "$\\lim_{x \\to 5} f(x) = 9$ : c’est la troisième affirmation qui est correcte."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Tendre vers une limite",
          "stepTheme": "Tendre vers une limite",
          "stepBadge": "Tendre vers une limite",
          "paragraphText": "• Notion de limite : pour $f(x) = x^2$, lorsque l’on choisit $x$ suffisamment proche de $2$, on obtient $f(x)$ suffisamment proche de $4$.\nOn dit que $f(x)$ tend vers $4$ lorsque $x$ tend vers $2$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p01_q1",
            "type": "mcq",
            "prompt": "Pour la fonction définie par $f(x) = x^2$, que vaut $\\lim_{x \\to 2} f(x)$ ?",
            "options": [
              "$2$",
              "$8$",
              "$4$",
              "$16$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Quand $x$ est suffisamment proche de $2$, $x^2$ est suffisamment proche de $4$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La notation de la limite",
          "stepTheme": "La notation de la limite",
          "stepBadge": "La notation de la limite",
          "paragraphText": "• Notation : la limite, lorsque $x$ tend vers $2$, de $f(x)$ égale $4$ s’écrit $\\lim_{x \\to 2} f(x) = 4$.\nOn dit aussi que $4$ est la limite de $f$ en $2$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p01_q2",
            "type": "mcq",
            "prompt": "Que signifie l’écriture $\\lim_{x \\to 2} f(x) = 4$ pour $f(x) = x^2$ ?",
            "options": [
              "Que $f(x)$ tend vers $4$ lorsque $x$ tend vers $2$",
              "Que $x$ vaut $4$",
              "Que $f(2)$ n’existe pas",
              "Que $f(x)$ vaut $2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la lecture de la notation : $f(x)$ se rapproche de $4$ quand $x$ se rapproche de $2$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Vérifier une limite par le calcul",
          "stepTheme": "Vérifier une limite par le calcul",
          "stepBadge": "Vérifier une limite par le calcul",
          "paragraphText": "• Méthode de l’exercice de fixation : pour $f(x) = 2x - 1$, on calcule la valeur visée en remplaçant $x$ par $5$.\nOn obtient $2 \\times 5 - 1 = 9$, ce qui départage les affirmations proposées.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p01_q3",
            "type": "mcq",
            "prompt": "Pour $f(x) = 2x - 1$, que vaut $\\lim_{x \\to 5} f(x)$ ?",
            "options": [
              "$8$",
              "$5$",
              "$11$",
              "$9$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $2 \\times 5 - 1 = 9$ : c’est le corrigé de l’exercice de fixation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Des valeurs plausibles mais fausses",
          "stepTheme": "Des valeurs plausibles mais fausses",
          "stepBadge": "Des valeurs plausibles mais fausses",
          "paragraphText": "• Piège de l’exercice de fixation : les valeurs $8$ et $5$ sont proposées pour la limite de $2x - 1$ en $5$, mais le corrigé les déclare fausses.\nSeule la valeur $9$, obtenue par le calcul, est correcte.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p01_q4",
            "type": "mcq",
            "prompt": "L’affirmation $\\lim_{x \\to 5} (2x - 1) = 8$ est-elle correcte ?",
            "options": [
              "Oui, elle vaut $8$",
              "Non, la limite vaut $9$",
              "Non, la limite vaut $5$",
              "Non, la limite vaut $10$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé répond Faux à cette affirmation : $2 \\times 5 - 1 = 9$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La fonction carré autour de 2",
          "stepTheme": "La fonction carré autour de 2",
          "stepBadge": "La fonction carré autour de 2",
          "paragraphText": "• Exemple de la leçon : plus $x$ est choisi proche de $2$, plus $x^2$ est proche de $4$.\nC’est ce comportement qui fonde la notion de limite en un point.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p01_q5",
            "type": "mcq",
            "prompt": "Si $x$ est très proche de $2$, alors $x^2$ est très proche de :",
            "options": [
              "$2$",
              "$4$",
              "$6$",
              "$8$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le constat de départ de la leçon : $x$ proche de $2$ donne $x^2$ proche de $4$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "L’unicité de la limite",
          "stepTheme": "L’unicité de la limite",
          "stepBadge": "L’unicité de la limite",
          "paragraphText": "• Remarque de la leçon : on démontre et on admet que, lorsqu’une fonction admet une limite en $a$, cette limite est unique.\nUne fonction ne peut donc pas tendre vers deux valeurs différentes au même point.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p01_q6",
            "type": "mcq",
            "prompt": "Une fonction peut-elle admettre deux limites différentes en un même point $a$ ?",
            "options": [
              "Oui, une à gauche et une à droite seulement",
              "Oui, deux limites au maximum",
              "Oui, si elle est définie en $a$",
              "Non, lorsqu’elle existe, la limite en $a$ est unique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la remarque admise dans la leçon : la limite en un point, si elle existe, est unique."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p01_q1",
          "type": "mcq",
          "prompt": "Pour la fonction définie par $f(x) = x^2$, que vaut $\\lim_{x \\to 2} f(x)$ ?",
          "options": [
            "$2$",
            "$8$",
            "$4$",
            "$16$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Quand $x$ est suffisamment proche de $2$, $x^2$ est suffisamment proche de $4$."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p01_q2",
          "type": "mcq",
          "prompt": "Que signifie l’écriture $\\lim_{x \\to 2} f(x) = 4$ pour $f(x) = x^2$ ?",
          "options": [
            "Que $f(x)$ tend vers $4$ lorsque $x$ tend vers $2$",
            "Que $x$ vaut $4$",
            "Que $f(2)$ n’existe pas",
            "Que $f(x)$ vaut $2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la lecture de la notation : $f(x)$ se rapproche de $4$ quand $x$ se rapproche de $2$."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p01_q3",
          "type": "mcq",
          "prompt": "Pour $f(x) = 2x - 1$, que vaut $\\lim_{x \\to 5} f(x)$ ?",
          "options": [
            "$8$",
            "$5$",
            "$11$",
            "$9$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $2 \\times 5 - 1 = 9$ : c’est le corrigé de l’exercice de fixation."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p01_q4",
          "type": "mcq",
          "prompt": "L’affirmation $\\lim_{x \\to 5} (2x - 1) = 8$ est-elle correcte ?",
          "options": [
            "Oui, elle vaut $8$",
            "Non, la limite vaut $9$",
            "Non, la limite vaut $5$",
            "Non, la limite vaut $10$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé répond Faux à cette affirmation : $2 \\times 5 - 1 = 9$."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p01_q5",
          "type": "mcq",
          "prompt": "Si $x$ est très proche de $2$, alors $x^2$ est très proche de :",
          "options": [
            "$2$",
            "$4$",
            "$6$",
            "$8$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le constat de départ de la leçon : $x$ proche de $2$ donne $x^2$ proche de $4$."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p01_q6",
          "type": "mcq",
          "prompt": "Une fonction peut-elle admettre deux limites différentes en un même point $a$ ?",
          "options": [
            "Oui, une à gauche et une à droite seulement",
            "Oui, deux limites au maximum",
            "Oui, si elle est définie en $a$",
            "Non, lorsqu’elle existe, la limite en $a$ est unique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la remarque admise dans la leçon : la limite en un point, si elle existe, est unique."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l05_limites_continuite_p02",
      "order": 2,
      "title": "Notion de continuité en un point",
      "summary": "Définir la continuité en un point $a$ par l’égalité entre la limite en $a$ et l’image $f(a)$.",
      "conceptExplanation": "Propriété : soit $f$ une fonction définie en $a$. Si $f$ admet une limite en $a$, alors $\\lim_{x \\to a} f(x) = f(a)$.\nDéfinition : soit $f$ une fonction et $a$ un élément de l’ensemble de définition de $f$. On dit que la fonction $f$ est continue en $a$ lorsque $f$ admet une limite en $a$, c’est-à-dire lorsque $\\lim_{x \\to a} f(x) = f(a)$.\nExemple de la leçon : une fonction définie sur $\\mathbb{R}^*$ est continue en $2$ car elle est définie en $2$ et sa limite en $2$ égale son image en $2$ ; elle n’est pas continue en $0$ car elle n’est pas définie en $0$.\nRemarque : pour qu’une fonction $f$ soit continue en $a$, il est nécessaire qu’elle soit définie en $a$. Sur les figures de la leçon, la courbe d’une fonction continue en $a$ passe par le point d’abscisse $a$ sans rupture en ce point ; dans l’exercice graphique, ce sont les figures 3 et 5 qui présentent une fonction continue en $a$.",
      "keyRule": "Continuité en $a$ égale : $f$ définie en $a$ et limite en $a$ égale à $f(a)$ ; sans image en $a$, pas de continuité.",
      "formulas": [
        {
          "name": "Continuité en a",
          "formula": "\\lim_{x \\to a} f(x) = f(a)",
          "note": "$f$ doit être définie en $a$."
        }
      ],
      "workedExample": {
        "title": "La continuité de $x^2 + 3$ en $2$ (exercice 2)",
        "statement": "La fonction $f$ de $\\mathbb{R}$ vers $\\mathbb{R}$ est définie par $f(x) = x^2 + 3$. Étudie la continuité de $f$ en $2$.",
        "methodSteps": [
          "La fonction $f$ est une fonction polynôme, définie sur $\\mathbb{R}$ : elle est en particulier définie en $2$.",
          "On calcule $\\lim_{x \\to 2} f(x) = 2^2 + 3 = 7$.",
          "On calcule $f(2) = 2^2 + 3 = 7$."
        ],
        "conclusion": "Comme $\\lim_{x \\to 2} f(x) = f(2)$, la fonction $f$ est continue en $2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition de la continuité en a",
          "stepTheme": "La définition de la continuité en a",
          "stepBadge": "La définition de la continuité en a",
          "paragraphText": "• Définition : soit $a$ un élément de l’ensemble de définition de $f$ ; $f$ est continue en $a$ lorsque $f$ admet une limite en $a$.\nCela signifie que $\\lim_{x \\to a} f(x) = f(a)$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p02_q1",
            "type": "mcq",
            "prompt": "$f$ est continue en $a$ signifie que :",
            "options": [
              "$\\lim_{x \\to a} f(x) = f(a)$",
              "$f(a) = 0$",
              "$f$ est définie partout",
              "$\\lim_{x \\to a} f(x)$ n’existe pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition de la leçon : la limite en $a$ égale l’image $f(a)$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La propriété fondamentale",
          "stepTheme": "La propriété fondamentale",
          "stepBadge": "La propriété fondamentale",
          "paragraphText": "• Propriété : soit $f$ une fonction définie en $a$ ; si $f$ admet une limite en $a$, alors $\\lim_{x \\to a} f(x) = f(a)$.\nLa limite d’une fonction définie en $a$ ne peut donc être que son image en $a$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p02_q2",
            "type": "mcq",
            "prompt": "Si $f$, définie en $a$, admet une limite en $a$, cette limite est nécessairement :",
            "options": [
              "Un nombre différent de $f(a)$",
              "Égale à $a$",
              "Égale à $f(a)$",
              "Égale à $0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la propriété énoncée au début de la partie sur la continuité."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Continue en 2, pas continue en 0",
          "stepTheme": "Continue en 2, pas continue en 0",
          "stepBadge": "Continue en 2, pas continue en 0",
          "paragraphText": "• Exemple de la leçon : une fonction définie sur $\\mathbb{R}^*$ est continue en $2$ car elle est définie en $2$ et sa limite en $2$ égale $f(2)$.\nElle n’est pas continue en $0$ car elle n’est pas définie en $0$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p02_q3",
            "type": "mcq",
            "prompt": "Pourquoi cette fonction n’est-elle pas continue en $0$ ?",
            "options": [
              "Parce que sa limite en $0$ vaut $2$",
              "Parce que $0$ est trop petit",
              "Parce que sa courbe est morcelée",
              "Parce qu’elle n’est pas définie en $0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’ensemble de définition est $\\mathbb{R}^*$ : $f(0)$ n’existe pas, donc pas de continuité en $0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Être définie en a est nécessaire",
          "stepTheme": "Être définie en a est nécessaire",
          "stepBadge": "Être définie en a est nécessaire",
          "paragraphText": "• Exercice de fixation : pour une fonction définie sur $\\mathbb{R}^*$, l’affirmation $\\lim_{x \\to 0} f(x) = f(0)$ est fausse et la fonction n’admet pas de limite en $0$.\nEn revanche, elle admet une limite en $-2$, point de son ensemble de définition.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p02_q4",
            "type": "mcq",
            "prompt": "Selon le corrigé de l’exercice de fixation, la fonction définie sur $\\mathbb{R}^*$ admet-elle une limite en $0$ ?",
            "options": [
              "Oui, et cette limite vaut $f(0)$",
              "Non, elle n’admet pas de limite en $0$",
              "Oui, et cette limite vaut $0$",
              "Oui, car elle admet une limite en $-2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé répond Faux aux affirmations portant sur le point $0$, où la fonction n’est pas définie."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Lire la continuité sur un graphique",
          "stepTheme": "Lire la continuité sur un graphique",
          "stepBadge": "Lire la continuité sur un graphique",
          "paragraphText": "• Illustration graphique de la leçon : dans chacun des trois premiers cas présentés, la courbe passe par le point d’abscisse $a$ sans rupture en ce point et la fonction est continue en $a$.\nDans l’exercice graphique corrigé, ce sont les figures 3 et 5 qui présentent une fonction continue en $a$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p02_q5",
            "type": "mcq",
            "prompt": "Dans l’exercice graphique de la leçon, quelles figures présentent une fonction continue en $a$ ?",
            "options": [
              "Les figures 1 et 2",
              "Les figures 4 et 6",
              "Les figures 3 et 5",
              "Toutes les figures"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est le corrigé de l’exercice de fixation sur les figures."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La courbe morcelée de la situation d’apprentissage",
          "stepTheme": "La courbe morcelée de la situation d’apprentissage",
          "stepBadge": "La courbe morcelée de la situation d’apprentissage",
          "paragraphText": "• Situation d’apprentissage : la fonction définie par $f(x) = x^2$ si $x \\in ]-\\infty ; 1]$ et $f(x) = x + 2$ si $x \\in ]1 ; +\\infty[$ a une courbe morcelée en deux parties au point d’abscisse $1$.\nEn $1$, la première expression donne $f(1) = 1$ alors que la seconde donnerait $3$ : c’est cette particularité que la continuité permet d’expliquer.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p02_q6",
            "type": "mcq",
            "prompt": "Pour cette fonction, que vaut $f(1)$ ?",
            "options": [
              "$1$",
              "$2$",
              "$3$",
              "$0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En $1$, c’est la première expression qui s’applique : $f(1) = 1^2 = 1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p02_q1",
          "type": "mcq",
          "prompt": "$f$ est continue en $a$ signifie que :",
          "options": [
            "$\\lim_{x \\to a} f(x) = f(a)$",
            "$f(a) = 0$",
            "$f$ est définie partout",
            "$\\lim_{x \\to a} f(x)$ n’existe pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition de la leçon : la limite en $a$ égale l’image $f(a)$."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p02_q2",
          "type": "mcq",
          "prompt": "Si $f$, définie en $a$, admet une limite en $a$, cette limite est nécessairement :",
          "options": [
            "Un nombre différent de $f(a)$",
            "Égale à $a$",
            "Égale à $f(a)$",
            "Égale à $0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la propriété énoncée au début de la partie sur la continuité."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p02_q3",
          "type": "mcq",
          "prompt": "Pourquoi cette fonction n’est-elle pas continue en $0$ ?",
          "options": [
            "Parce que sa limite en $0$ vaut $2$",
            "Parce que $0$ est trop petit",
            "Parce que sa courbe est morcelée",
            "Parce qu’elle n’est pas définie en $0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’ensemble de définition est $\\mathbb{R}^*$ : $f(0)$ n’existe pas, donc pas de continuité en $0$."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p02_q4",
          "type": "mcq",
          "prompt": "Selon le corrigé de l’exercice de fixation, la fonction définie sur $\\mathbb{R}^*$ admet-elle une limite en $0$ ?",
          "options": [
            "Oui, et cette limite vaut $f(0)$",
            "Non, elle n’admet pas de limite en $0$",
            "Oui, et cette limite vaut $0$",
            "Oui, car elle admet une limite en $-2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé répond Faux aux affirmations portant sur le point $0$, où la fonction n’est pas définie."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p02_q5",
          "type": "mcq",
          "prompt": "Dans l’exercice graphique de la leçon, quelles figures présentent une fonction continue en $a$ ?",
          "options": [
            "Les figures 1 et 2",
            "Les figures 4 et 6",
            "Les figures 3 et 5",
            "Toutes les figures"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est le corrigé de l’exercice de fixation sur les figures."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p02_q6",
          "type": "mcq",
          "prompt": "Pour cette fonction, que vaut $f(1)$ ?",
          "options": [
            "$1$",
            "$2$",
            "$3$",
            "$0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En $1$, c’est la première expression qui s’applique : $f(1) = 1^2 = 1$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l05_limites_continuite_p03",
      "order": 3,
      "title": "Continuité des fonctions élémentaires et opérations",
      "summary": "Utiliser la continuité des fonctions élémentaires et celle des sommes, produits, quotients et racines carrées de fonctions continues.",
      "conceptExplanation": "Propriété 1 : les fonctions élémentaires définies respectivement par $x \\mapsto c$ ($c \\in \\mathbb{R}$), $x \\mapsto x^n$ ($n \\in \\mathbb{N}^*$), $x \\mapsto \\frac{1}{x}$, $x \\mapsto \\sqrt{x}$, $x \\mapsto |x|$, $x \\mapsto \\cos x$ et $x \\mapsto \\sin x$ sont continues en tout élément $a$ de leurs ensembles de définition respectifs.\nPropriété 2 : $f$ et $g$ étant deux fonctions continues en $a$, les fonctions $f + g$, $fg$, $kf$ ($k \\in \\mathbb{R}$) et $|f|$ sont continues en $a$ ; si $g$ ne s’annule pas en $a$, alors les fonctions $\\frac{1}{g}$ et $\\frac{f}{g}$ sont continues en $a$ ; si $f$ est positive, alors la fonction $\\sqrt{f}$ est continue en $a$.\nRemarque : toute fonction qui est somme, produit ou quotient de fonctions élémentaires est continue en tout élément de son ensemble de définition.",
      "keyRule": "Une fonction élémentaire est continue en tout point de son ensemble de définition : sa limite en $a$ est donc simplement son image en $a$.",
      "formulas": [
        {
          "name": "Limite d’une racine carrée élémentaire",
          "formula": "\\lim_{x \\to 49} \\sqrt{x} = \\sqrt{49} = 7"
        },
        {
          "name": "Continuité d’un quotient",
          "formula": "\\frac{f}{g}",
          "note": "Continue en $a$ si $f$ et $g$ sont continues en $a$ et si $g(a) \\neq 0$."
        }
      ],
      "workedExample": {
        "title": "Les limites des fonctions élémentaires (exercice de fixation)",
        "statement": "Complète les égalités suivantes : $\\lim_{x \\to 15} \\cos x$, $\\lim_{x \\to -2} 3$, $\\lim_{x \\to -3} x^2$, $\\lim_{x \\to 49} \\sqrt{x}$, $\\lim_{x \\to -1{,}8} |x|$ et $\\lim_{x \\to 3} \\frac{1}{x}$.",
        "methodSteps": [
          "Les fonctions élémentaires sont continues en tout élément de leur ensemble de définition : chaque limite est l’image du point.",
          "$\\lim_{x \\to 15} \\cos x = \\cos(15)$, $\\lim_{x \\to -2} 3 = 3$ et $\\lim_{x \\to -3} x^2 = (-3)^2 = 9$.",
          "$\\lim_{x \\to 49} \\sqrt{x} = \\sqrt{49} = 7$ et $\\lim_{x \\to -1{,}8} |x| = |-1{,}8| = 1{,}8$.",
          "$\\lim_{x \\to 3} \\frac{1}{x} = \\frac{1}{3}$."
        ],
        "conclusion": "Pour une fonction élémentaire, calculer la limite en $a$ revient à calculer l’image de $a$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les fonctions élémentaires sont continues",
          "stepTheme": "Les fonctions élémentaires sont continues",
          "stepBadge": "Les fonctions élémentaires sont continues",
          "paragraphText": "• Propriété 1 : les fonctions $x \\mapsto c$, $x \\mapsto x^n$, $x \\mapsto \\frac{1}{x}$, $x \\mapsto \\sqrt{x}$, $x \\mapsto |x|$, $x \\mapsto \\cos x$ et $x \\mapsto \\sin x$ sont continues en tout élément de leurs ensembles de définition respectifs.\nC’est ce qui permet de calculer leurs limites par simple substitution.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p03_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to 49} \\sqrt{x}$ ?",
            "options": [
              "$7$",
              "$49$",
              "$24{,}5$",
              "$98$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La fonction racine carrée est élémentaire et continue en $49$ : $\\sqrt{49} = 7$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Trois limites élémentaires du corrigé",
          "stepTheme": "Trois limites élémentaires du corrigé",
          "stepBadge": "Trois limites élémentaires du corrigé",
          "paragraphText": "• Corrigé de l’exercice de fixation : $\\lim_{x \\to -3} x^2 = 9$, $\\lim_{x \\to -1{,}8} |x| = 1{,}8$ et $\\lim_{x \\to 3} \\frac{1}{x} = \\frac{1}{3}$.\nChaque fois, la limite est l’image du point par la fonction élémentaire.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p03_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to -3} x^2$ ?",
            "options": [
              "$-9$",
              "$-3$",
              "$9$",
              "$6$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La fonction carré est continue en $-3$ : $(-3)^2 = 9$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Somme, produit et multiple de fonctions continues",
          "stepTheme": "Somme, produit et multiple de fonctions continues",
          "stepBadge": "Somme, produit et multiple de fonctions continues",
          "paragraphText": "• Propriété 2 : si $f$ et $g$ sont continues en $a$, alors $f + g$, $fg$, $kf$ (pour $k \\in \\mathbb{R}$) et $|f|$ sont continues en $a$.\nLa continuité se transmet donc aux opérations usuelles.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p03_q3",
            "type": "mcq",
            "prompt": "Si $f$ et $g$ sont continues en $a$, laquelle de ces fonctions est nécessairement continue en $a$ ?",
            "options": [
              "Une fonction quelconque",
              "La fonction $f + g$",
              "La fonction qui vaut $f(a)$ partout sauf en $a$",
              "Aucune autre fonction"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La propriété 2 cite la somme, le produit, les multiples $kf$ et la valeur absolue $|f|$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Quotient et racine carrée de fonctions continues",
          "stepTheme": "Quotient et racine carrée de fonctions continues",
          "stepBadge": "Quotient et racine carrée de fonctions continues",
          "paragraphText": "• Propriété 2 (suite) : si $g$ ne s’annule pas en $a$, alors $\\frac{1}{g}$ et $\\frac{f}{g}$ sont continues en $a$.\nSi $f$ est positive, alors $\\sqrt{f}$ est continue en $a$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p03_q4",
            "type": "mcq",
            "prompt": "Quelle condition sur $g$ permet d’affirmer que $\\frac{f}{g}$ est continue en $a$ ?",
            "options": [
              "$g$ s’annule en $a$",
              "$g$ est négative en $a$",
              "$g$ est un polynôme",
              "$g$ ne s’annule pas en $a$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le quotient exige un dénominateur non nul au point : $g(a) \\neq 0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Justifier que $f^2$, $f - g$ et $4f$ sont continues en $5$",
          "stepTheme": "Justifier que $f^2$, $f - g$ et $4f$ sont continues en $5$",
          "stepBadge": "Justifier que $f^2$, $f - g$ et $4f$ sont continues en $5$",
          "paragraphText": "• Exercice de fixation : $f$ et $g$ sont continues en $5$ ; $f^2$ est le produit $f \\times f$, donc continue en $5$.\n$-g$ est continue en $5$, donc $f - g = f + (-g)$ est continue en $5$, et $4f$ est continue en $5$ comme multiple de $f$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p03_q5",
            "type": "mcq",
            "prompt": "Pourquoi $f^2$ est-elle continue en $5$ dans cet exercice ?",
            "options": [
              "Parce que $5$ est impair",
              "Parce que toute fonction est continue en $5$",
              "Parce que $f^2$ est le produit de $f$ par $f$, deux fonctions continues en $5$",
              "Parce que $g$ est continue en $5$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est le corrigé : le produit de deux fonctions continues en un point est continu en ce point."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le quotient exige un dénominateur non nul",
          "stepTheme": "Le quotient exige un dénominateur non nul",
          "stepBadge": "Le quotient exige un dénominateur non nul",
          "paragraphText": "• Piège : la propriété du quotient ne s’applique que si $g$ ne s’annule pas en $a$.\nSi $g(a) = 0$, le quotient n’est même pas défini en $a$ : on ne peut pas conclure à sa continuité en $a$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p03_q6",
            "type": "mcq",
            "prompt": "Si $g$ est continue en $a$ avec $g(a) = 0$, peut-on affirmer que le quotient de $f$ par $g$ est continu en $a$ ?",
            "options": [
              "Non, car le quotient n’est pas défini en $a$",
              "Oui, si $f$ est continue en $a$",
              "Oui, toujours",
              "Oui, si $f(a) = 0$ aussi"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans la condition $g(a) \\neq 0$, la propriété 2 ne s’applique pas au quotient."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p03_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to 49} \\sqrt{x}$ ?",
          "options": [
            "$7$",
            "$49$",
            "$24{,}5$",
            "$98$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fonction racine carrée est élémentaire et continue en $49$ : $\\sqrt{49} = 7$."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p03_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to -3} x^2$ ?",
          "options": [
            "$-9$",
            "$-3$",
            "$9$",
            "$6$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La fonction carré est continue en $-3$ : $(-3)^2 = 9$."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p03_q3",
          "type": "mcq",
          "prompt": "Si $f$ et $g$ sont continues en $a$, laquelle de ces fonctions est nécessairement continue en $a$ ?",
          "options": [
            "Une fonction quelconque",
            "La fonction $f + g$",
            "La fonction qui vaut $f(a)$ partout sauf en $a$",
            "Aucune autre fonction"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La propriété 2 cite la somme, le produit, les multiples $kf$ et la valeur absolue $|f|$."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p03_q4",
          "type": "mcq",
          "prompt": "Quelle condition sur $g$ permet d’affirmer que $\\frac{f}{g}$ est continue en $a$ ?",
          "options": [
            "$g$ s’annule en $a$",
            "$g$ est négative en $a$",
            "$g$ est un polynôme",
            "$g$ ne s’annule pas en $a$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le quotient exige un dénominateur non nul au point : $g(a) \\neq 0$."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p03_q5",
          "type": "mcq",
          "prompt": "Pourquoi $f^2$ est-elle continue en $5$ dans cet exercice ?",
          "options": [
            "Parce que $5$ est impair",
            "Parce que toute fonction est continue en $5$",
            "Parce que $f^2$ est le produit de $f$ par $f$, deux fonctions continues en $5$",
            "Parce que $g$ est continue en $5$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est le corrigé : le produit de deux fonctions continues en un point est continu en ce point."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p03_q6",
          "type": "mcq",
          "prompt": "Si $g$ est continue en $a$ avec $g(a) = 0$, peut-on affirmer que le quotient de $f$ par $g$ est continu en $a$ ?",
          "options": [
            "Non, car le quotient n’est pas défini en $a$",
            "Oui, si $f$ est continue en $a$",
            "Oui, toujours",
            "Oui, si $f(a) = 0$ aussi"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans la condition $g(a) \\neq 0$, la propriété 2 ne s’applique pas au quotient."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l05_limites_continuite_p04",
      "order": 4,
      "title": "Limites à gauche et à droite en un point",
      "summary": "Définir et noter les limites à gauche et à droite en $a$, et les calculer sur une fonction définie par morceaux.",
      "conceptExplanation": "Présentation : lorsqu’on choisit $x$ dans $]-\\infty ; a[$ et suffisamment proche de $a$, $f(x)$ est très proche d’un nombre $l$. On dit alors que $l$ est la limite de $f$ à gauche en $a$ et on note $\\lim_{x \\to a, x < a} f(x) = l$.\nLorsqu’on choisit $x$ dans $]a ; +\\infty[$ et suffisamment proche de $a$, $f(x)$ est très proche d’un nombre $l'$. On dit alors que $l'$ est la limite de $f$ à droite en $a$ et on note $\\lim_{x \\to a, x > a} f(x) = l'$.\nExemple de l’exercice de fixation : pour la fonction définie par $f(x) = x^2$ si $x \\in ]-\\infty ; 3]$ et $f(x) = 2x + 1$ si $x \\in ]3 ; +\\infty[$, la limite à gauche en $3$ vaut $9$ et la limite à droite en $3$ vaut $7$.",
      "keyRule": "À gauche, on approche $a$ avec des $x$ plus petits que $a$ ; à droite, avec des $x$ plus grands que $a$ : choisis l’expression valable du bon côté.",
      "formulas": [
        {
          "name": "Limite à gauche en a",
          "formula": "\\lim_{x \\to a, x < a} f(x) = l"
        },
        {
          "name": "Limite à droite en a",
          "formula": "\\lim_{x \\to a, x > a} f(x) = l'"
        }
      ],
      "workedExample": {
        "title": "Les limites latérales en $3$ (exercice de fixation)",
        "statement": "On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = x^2$ si $x \\in ]-\\infty ; 3]$ et $f(x) = 2x + 1$ si $x \\in ]3 ; +\\infty[$. Détermine la limite de $f$ à gauche en $3$ et sa limite à droite en $3$.",
        "methodSteps": [
          "À gauche en $3$, on utilise l’expression $x^2$ : la limite vaut $3^2 = 9$.",
          "À droite en $3$, on utilise l’expression $2x + 1$ : la limite vaut $2 \\times 3 + 1 = 7$."
        ],
        "conclusion": "La limite à gauche en $3$ est $9$ et la limite à droite en $3$ est $7$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La limite à gauche en a",
          "stepTheme": "La limite à gauche en a",
          "stepBadge": "La limite à gauche en a",
          "paragraphText": "• Définition : lorsqu’on choisit $x$ dans $]-\\infty ; a[$ et suffisamment proche de $a$, $f(x)$ est très proche de $l$.\nOn dit que $l$ est la limite de $f$ à gauche en $a$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p04_q1",
            "type": "mcq",
            "prompt": "Pour la limite à gauche en $a$, les valeurs de $x$ sont choisies :",
            "options": [
              "Dans $]a ; +\\infty[$",
              "Très loin de $a$",
              "Égales à $a$",
              "Dans $]-\\infty ; a[$, donc plus petites que $a$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "À gauche signifie $x < a$ : on approche $a$ par des valeurs plus petites."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La notation de la limite à droite",
          "stepTheme": "La notation de la limite à droite",
          "stepBadge": "La notation de la limite à droite",
          "paragraphText": "• Notation : la limite de $f$ à droite en $a$ se note avec la condition $x > a$ sous la limite.\nElle décrit le comportement de $f(x)$ quand $x$ approche $a$ par des valeurs plus grandes que $a$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p04_q2",
            "type": "mcq",
            "prompt": "Comment se note la limite de $f$ à droite en $a$ ?",
            "options": [
              "$\\lim_{x \\to a, x < a} f(x)$",
              "$\\lim_{x \\to a, x > a} f(x)$",
              "$f(a)$",
              "$\\lim_{x \\to a} (f(x) + a)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La condition $x > a$ indique qu’on approche $a$ par la droite."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La limite à gauche en 3",
          "stepTheme": "La limite à gauche en 3",
          "stepBadge": "La limite à gauche en 3",
          "paragraphText": "• Exercice de fixation : à gauche en $3$, la fonction est donnée par $f(x) = x^2$.\nLa limite à gauche en $3$ vaut donc $3^2 = 9$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p04_q3",
            "type": "mcq",
            "prompt": "Pour cette fonction, que vaut la limite à gauche en $3$ ?",
            "options": [
              "$7$",
              "$9$",
              "$3$",
              "$6$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Du côté gauche, on utilise $x^2$ : $3^2 = 9$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La limite à droite en 3",
          "stepTheme": "La limite à droite en 3",
          "stepBadge": "La limite à droite en 3",
          "paragraphText": "• Exercice de fixation : à droite en $3$, la fonction est donnée par $f(x) = 2x + 1$.\nLa limite à droite en $3$ vaut donc $2 \\times 3 + 1 = 7$, ce qui rend vraie l’affirmation $\\lim_{x \\to 3, x > 3} f(x) = 7$ du corrigé.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p04_q4",
            "type": "mcq",
            "prompt": "Pour cette fonction, que vaut la limite à droite en $3$ ?",
            "options": [
              "$9$",
              "$3$",
              "$5$",
              "$7$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Du côté droit, on utilise $2x + 1$ : $2 \\times 3 + 1 = 7$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser les deux notations",
          "stepTheme": "Ne pas inverser les deux notations",
          "stepBadge": "Ne pas inverser les deux notations",
          "paragraphText": "• Piège relevé par le corrigé : l’affirmation « la limite de $f$ à gauche en $3$ se note avec la condition $x > 3$ » est fausse.\nLe signe sous la limite indique le côté d’approche : $x < a$ pour la gauche, $x > a$ pour la droite.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p04_q5",
            "type": "mcq",
            "prompt": "L’affirmation « la limite à gauche en $3$ se note $\\lim_{x \\to 3, x > 3} f(x)$ » est :",
            "options": [
              "Fausse, la limite à gauche utilise la condition $x < 3$",
              "Vraie seulement à droite",
              "Vraie si $f$ est continue",
              "Vraie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé répond Faux : la condition $x > 3$ correspond à la limite à droite."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Choisir l’expression du bon côté",
          "stepTheme": "Choisir l’expression du bon côté",
          "stepBadge": "Choisir l’expression du bon côté",
          "paragraphText": "• Méthode : pour une fonction définie par morceaux, une limite latérale se calcule avec l’expression valable du côté considéré.\nEn $3$, l’expression $x^2$ sert à gauche et l’expression $2x + 1$ sert à droite.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p04_q6",
            "type": "mcq",
            "prompt": "Pour calculer la limite de cette fonction à droite en $3$, quelle expression utilise-t-on ?",
            "options": [
              "$x^2$",
              "$x + 3$",
              "$2x + 1$",
              "Aucune, la limite n’existe jamais"
            ],
            "correctAnswerIndex": 2,
            "explanation": "À droite de $3$, c’est-à-dire pour $x > 3$, la fonction est définie par $2x + 1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p04_q1",
          "type": "mcq",
          "prompt": "Pour la limite à gauche en $a$, les valeurs de $x$ sont choisies :",
          "options": [
            "Dans $]a ; +\\infty[$",
            "Très loin de $a$",
            "Égales à $a$",
            "Dans $]-\\infty ; a[$, donc plus petites que $a$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "À gauche signifie $x < a$ : on approche $a$ par des valeurs plus petites."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p04_q2",
          "type": "mcq",
          "prompt": "Comment se note la limite de $f$ à droite en $a$ ?",
          "options": [
            "$\\lim_{x \\to a, x < a} f(x)$",
            "$\\lim_{x \\to a, x > a} f(x)$",
            "$f(a)$",
            "$\\lim_{x \\to a} (f(x) + a)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La condition $x > a$ indique qu’on approche $a$ par la droite."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p04_q3",
          "type": "mcq",
          "prompt": "Pour cette fonction, que vaut la limite à gauche en $3$ ?",
          "options": [
            "$7$",
            "$9$",
            "$3$",
            "$6$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Du côté gauche, on utilise $x^2$ : $3^2 = 9$."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p04_q4",
          "type": "mcq",
          "prompt": "Pour cette fonction, que vaut la limite à droite en $3$ ?",
          "options": [
            "$9$",
            "$3$",
            "$5$",
            "$7$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Du côté droit, on utilise $2x + 1$ : $2 \\times 3 + 1 = 7$."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p04_q5",
          "type": "mcq",
          "prompt": "L’affirmation « la limite à gauche en $3$ se note $\\lim_{x \\to 3, x > 3} f(x)$ » est :",
          "options": [
            "Fausse, la limite à gauche utilise la condition $x < 3$",
            "Vraie seulement à droite",
            "Vraie si $f$ est continue",
            "Vraie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé répond Faux : la condition $x > 3$ correspond à la limite à droite."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p04_q6",
          "type": "mcq",
          "prompt": "Pour calculer la limite de cette fonction à droite en $3$, quelle expression utilise-t-on ?",
          "options": [
            "$x^2$",
            "$x + 3$",
            "$2x + 1$",
            "Aucune, la limite n’existe jamais"
          ],
          "correctAnswerIndex": 2,
          "explanation": "À droite de $3$, c’est-à-dire pour $x > 3$, la fonction est définie par $2x + 1$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l05_limites_continuite_p05",
      "order": 5,
      "title": "Limite en un point, limites latérales et continuité",
      "summary": "Relier la limite en $a$ aux limites à gauche et à droite, selon que $f$ est définie ou non en $a$.",
      "conceptExplanation": "Propriétés : $a$ et $l$ sont des nombres réels et $f$ est une fonction définie sur un intervalle ouvert centré en $a$, sauf éventuellement en $a$.\nSi $f$ n’est pas définie en $a$ : $f$ admet une limite $l$ en $a$ si et seulement si $f$ admet en $a$ une limite à gauche et une limite à droite égales à $l$.\nSi $f$ est définie en $a$ : $f$ admet une limite en $a$ si et seulement si $f$ admet en $a$ une limite à gauche et une limite à droite égales à $f(a)$.\nRemarque : $f$ est continue en $a$ si et seulement si ses limites à gauche et à droite en $a$ sont égales à $f(a)$.\nExemple de l’exercice de fixation : en $1$, les limites latérales d’une fonction valent $7$ et $7$ mais $f(1) = 3$, donc $f$ n’admet pas de limite en $1$ ; en $4$, où $f$ n’est pas définie, les limites latérales valent $-2$ et $-2$, donc $f$ admet une limite en $4$.",
      "keyRule": "Compare toujours les deux limites latérales entre elles, puis à $f(a)$ quand $f$ est définie en $a$.",
      "formulas": [
        {
          "name": "Limite et limites latérales, cas défini en a",
          "formula": "\\lim_{x \\to a} f(x) = f(a) \\iff \\lim_{x \\to a, x < a} f(x) = \\lim_{x \\to a, x > a} f(x) = f(a)"
        }
      ],
      "workedExample": {
        "title": "Limite en $1$ et limite en $4$ (exercice de fixation)",
        "statement": "$f$ est une fonction définie sur $\\mathbb{R} \\setminus \\{4\\}$ telle que ses limites à gauche et à droite en $1$ valent $7$, ses limites à gauche et à droite en $4$ valent $-2$, et $f(1) = 3$. La fonction $f$ admet-elle une limite en $1$ ? En $4$ ?",
        "methodSteps": [
          "En $1$ : $f$ est définie et $f(1) = 3$, mais les limites latérales valent $7$, différentes de $f(1)$ : $f$ n’admet pas de limite en $1$.",
          "En $4$ : $f$ n’est pas définie, et les deux limites latérales sont égales à $-2$ : $f$ admet une limite en $4$, égale à $-2$."
        ],
        "conclusion": "Le corrigé répond : Faux pour la limite en $1$, Vrai pour la limite en $4$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le cas où f n’est pas définie en a",
          "stepTheme": "Le cas où f n’est pas définie en a",
          "stepBadge": "Le cas où f n’est pas définie en a",
          "paragraphText": "• Propriété : si $f$ n’est pas définie en $a$, alors $f$ admet une limite $l$ en $a$ si et seulement si $f$ admet en $a$ une limite à gauche et une limite à droite égales à $l$.\nAucune comparaison avec $f(a)$ n’est possible dans ce cas.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p05_q1",
            "type": "mcq",
            "prompt": "Si $f$ n’est pas définie en $a$, $f$ admet une limite en $a$ si et seulement si :",
            "options": [
              "Sa limite à gauche en $a$ existe",
              "Sa limite à droite en $a$ vaut $0$",
              "$f(a)$ vaut cette limite",
              "Ses limites à gauche et à droite en $a$ sont égales"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la propriété du cas non défini : les deux limites latérales doivent être égales."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le cas où f est définie en a",
          "stepTheme": "Le cas où f est définie en a",
          "stepBadge": "Le cas où f est définie en a",
          "paragraphText": "• Propriété : si $f$ est définie en $a$, alors $f$ admet une limite en $a$ si et seulement si $f$ admet en $a$ une limite à gauche et une limite à droite égales à $f(a)$.\nLes trois valeurs doivent coïncider.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p05_q2",
            "type": "mcq",
            "prompt": "Si $f$ est définie en $a$, pour que $f$ admette une limite en $a$, il faut que ses limites latérales soient égales à :",
            "options": [
              "$0$",
              "$f(a)$",
              "$a$",
              "N’importe quel même nombre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans le cas défini en $a$, la valeur commune des limites latérales doit être $f(a)$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une limite en 4 sans image en 4",
          "stepTheme": "Une limite en 4 sans image en 4",
          "stepBadge": "Une limite en 4 sans image en 4",
          "paragraphText": "• Exercice de fixation : $f$ est définie sur $\\mathbb{R} \\setminus \\{4\\}$ et ses limites à gauche et à droite en $4$ valent toutes les deux $-2$.\nLe corrigé affirme que $f$ admet une limite en $4$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p05_q3",
            "type": "mcq",
            "prompt": "Que vaut la limite de $f$ en $4$ dans cet exercice ?",
            "options": [
              "$7$",
              "$3$",
              "$-2$",
              "$4$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les deux limites latérales valent $-2$ et $f$ n’est pas définie en $4$ : la limite en $4$ est $-2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Des limites latérales égales ne suffisent pas toujours",
          "stepTheme": "Des limites latérales égales ne suffisent pas toujours",
          "stepBadge": "Des limites latérales égales ne suffisent pas toujours",
          "paragraphText": "• Piège de l’exercice de fixation : en $1$, les limites à gauche et à droite valent $7$ et $7$, mais $f(1) = 3$.\nComme $f$ est définie en $1$ et que $7 \\neq 3$, $f$ n’admet pas de limite en $1$ : le corrigé répond Faux.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p05_q4",
            "type": "mcq",
            "prompt": "Dans cet exercice, pourquoi $f$ n’admet-elle pas de limite en $1$ malgré des limites latérales égales ?",
            "options": [
              "Parce que $f(1) = 3$ est différent des limites latérales, qui valent $7$",
              "Parce que les limites latérales sont calculées en $4$",
              "Parce que les limites latérales valent $7$",
              "Parce que $1$ n’est pas dans l’ensemble de définition"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La valeur commune des limites latérales doit égaler $f(a)$ quand $f$ est définie en $a$ : ici $7 \\neq f(1) = 3$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La continuité lue sur les limites latérales",
          "stepTheme": "La continuité lue sur les limites latérales",
          "stepBadge": "La continuité lue sur les limites latérales",
          "paragraphText": "• Remarque de la leçon : $f$ est continue en $a$ si et seulement si ses limites à gauche et à droite en $a$ sont toutes les deux égales à $f(a)$.\nC’est le critère pratique pour étudier la continuité d’une fonction définie par morceaux.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p05_q5",
            "type": "mcq",
            "prompt": "$f$ est continue en $a$ si et seulement si :",
            "options": [
              "Ses limites à gauche et à droite en $a$ valent toutes les deux $f(a)$",
              "Sa limite à gauche en $a$ vaut $f(a)$ seulement",
              "$f(a) = 0$",
              "Sa limite à droite en $a$ existe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la remarque qui suit les propriétés sur les limites latérales."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Deux limites latérales différentes en 1",
          "stepTheme": "Deux limites latérales différentes en 1",
          "stepBadge": "Deux limites latérales différentes en 1",
          "paragraphText": "• Exercice de renforcement : pour la fonction définie par $f(x) = 3x - 1$ si $x < 1$ et par la fraction de numérateur $x - 1$ et de dénominateur $x + 1$ si $x \\geq 1$, la limite à gauche en $1$ vaut $2$ et la limite à droite en $1$ vaut $0$.\nComme $2 \\neq 0$, la fonction n’admet pas de limite en $1$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p05_q6",
            "type": "mcq",
            "prompt": "Pour cette fonction, que vaut la limite à gauche en $1$ ?",
            "options": [
              "$0$",
              "$1$",
              "$2$",
              "$3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "À gauche, on utilise $3x - 1$ : $3 \\times 1 - 1 = 2$, différent de la limite à droite qui vaut $0$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p05_q1",
          "type": "mcq",
          "prompt": "Si $f$ n’est pas définie en $a$, $f$ admet une limite en $a$ si et seulement si :",
          "options": [
            "Sa limite à gauche en $a$ existe",
            "Sa limite à droite en $a$ vaut $0$",
            "$f(a)$ vaut cette limite",
            "Ses limites à gauche et à droite en $a$ sont égales"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la propriété du cas non défini : les deux limites latérales doivent être égales."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p05_q2",
          "type": "mcq",
          "prompt": "Si $f$ est définie en $a$, pour que $f$ admette une limite en $a$, il faut que ses limites latérales soient égales à :",
          "options": [
            "$0$",
            "$f(a)$",
            "$a$",
            "N’importe quel même nombre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans le cas défini en $a$, la valeur commune des limites latérales doit être $f(a)$."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p05_q3",
          "type": "mcq",
          "prompt": "Que vaut la limite de $f$ en $4$ dans cet exercice ?",
          "options": [
            "$7$",
            "$3$",
            "$-2$",
            "$4$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les deux limites latérales valent $-2$ et $f$ n’est pas définie en $4$ : la limite en $4$ est $-2$."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p05_q4",
          "type": "mcq",
          "prompt": "Dans cet exercice, pourquoi $f$ n’admet-elle pas de limite en $1$ malgré des limites latérales égales ?",
          "options": [
            "Parce que $f(1) = 3$ est différent des limites latérales, qui valent $7$",
            "Parce que les limites latérales sont calculées en $4$",
            "Parce que les limites latérales valent $7$",
            "Parce que $1$ n’est pas dans l’ensemble de définition"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La valeur commune des limites latérales doit égaler $f(a)$ quand $f$ est définie en $a$ : ici $7 \\neq f(1) = 3$."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p05_q5",
          "type": "mcq",
          "prompt": "$f$ est continue en $a$ si et seulement si :",
          "options": [
            "Ses limites à gauche et à droite en $a$ valent toutes les deux $f(a)$",
            "Sa limite à gauche en $a$ vaut $f(a)$ seulement",
            "$f(a) = 0$",
            "Sa limite à droite en $a$ existe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la remarque qui suit les propriétés sur les limites latérales."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p05_q6",
          "type": "mcq",
          "prompt": "Pour cette fonction, que vaut la limite à gauche en $1$ ?",
          "options": [
            "$0$",
            "$1$",
            "$2$",
            "$3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "À gauche, on utilise $3x - 1$ : $3 \\times 1 - 1 = 2$, différent de la limite à droite qui vaut $0$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l05_limites_continuite_p06",
      "order": 6,
      "title": "Calcul de limites : opérations et simplifications",
      "summary": "Calculer des limites par les opérations sur les limites, par substitution dans une fonction continue et par factorisation.",
      "conceptExplanation": "Opérations sur les limites : $a$, $l$ et $l'$ désignent des nombres réels. Si $\\lim_{x \\to a} f(x) = l$ et $\\lim_{x \\to a} g(x) = l'$, alors la limite de la somme $f + g$ en $a$ est $l + l'$, la limite du produit $fg$ en $a$ est le produit $l \\times l'$, et, si $l' \\neq 0$, la limite du quotient de $f$ par $g$ en $a$ est le quotient de $l$ par $l'$.\nQuand l’expression est continue au point, on calcule la limite par substitution : par exemple, la limite en $-5$ de la fraction de numérateur $x^2 - 2x + 3$ et de dénominateur $x - 2$ vaut la fraction de numérateur $38$ et de dénominateur $-7$.\nQuand la substitution donne une forme indéterminée, on simplifie d’abord : factorisation pour les fractions rationnelles, quantité conjuguée pour les racines carrées.",
      "keyRule": "D’abord les opérations et la substitution ; si le calcul se bloque, factorise ou utilise la quantité conjuguée avant de passer à la limite.",
      "formulas": [
        {
          "name": "Limite d’une somme",
          "formula": "\\lim_{x \\to a} (f + g)(x) = l + l'"
        },
        {
          "name": "Limite d’un produit",
          "formula": "\\lim_{x \\to a} (f \\times g)(x) = l \\times l'"
        },
        {
          "name": "Limite d’un quotient",
          "formula": "\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{l}{l'}",
          "note": "Si $l' \\neq 0$."
        }
      ],
      "workedExample": {
        "title": "Une limite avec une racine carrée (exercice 5)",
        "statement": "Calcule la limite en $4$ de la fraction de numérateur $x - 4$ et de dénominateur $\\sqrt{x} - 2$.",
        "methodSteps": [
          "La substitution directe donne une forme indéterminée : on multiplie le numérateur et le dénominateur par la quantité conjuguée $\\sqrt{x} + 2$.",
          "Le dénominateur devient $(\\sqrt{x})^2 - 2^2 = x - 4$, qui se simplifie avec le numérateur.",
          "Il reste $\\sqrt{x} + 2$, dont la limite en $4$ est $\\sqrt{4} + 2 = 4$."
        ],
        "conclusion": "La limite cherchée vaut $4$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La limite d’une somme",
          "stepTheme": "La limite d’une somme",
          "stepBadge": "La limite d’une somme",
          "paragraphText": "• Propriété : si $\\lim_{x \\to a} f(x) = l$ et $\\lim_{x \\to a} g(x) = l'$, alors la limite de $f + g$ en $a$ est $l + l'$.\nLa limite d’une somme est la somme des limites.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p06_q1",
            "type": "mcq",
            "prompt": "Si $\\lim_{x \\to 3} f(x) = -5$ et $\\lim_{x \\to 3} g(x) = 2$, que vaut $\\lim_{x \\to 3} (f + g)(x)$ ?",
            "options": [
              "$-7$",
              "$-3$",
              "$-10$",
              "$3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On additionne les limites : $-5 + 2 = -3$, comme dans le corrigé de l’exercice de fixation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La limite d’un produit",
          "stepTheme": "La limite d’un produit",
          "stepBadge": "La limite d’un produit",
          "paragraphText": "• Propriété : sous les mêmes hypothèses, la limite du produit $fg$ en $a$ est le produit $l \\times l'$ des limites.\nLa limite d’un produit est le produit des limites.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p06_q2",
            "type": "mcq",
            "prompt": "Avec les mêmes fonctions, que vaut $\\lim_{x \\to 3} (f \\times g)(x)$ ?",
            "options": [
              "$-3$",
              "$-7$",
              "$10$",
              "$-10$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On multiplie les limites : $(-5) \\times 2 = -10$, comme dans le corrigé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La limite d’un quotient",
          "stepTheme": "La limite d’un quotient",
          "stepBadge": "La limite d’un quotient",
          "paragraphText": "• Exercice de fixation : le quotient de $f$ par $g$ a pour limite en $3$ le quotient des limites, le dénominateur $2$ étant non nul.\nOn obtient la fraction de numérateur $-5$ et de dénominateur $2$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p06_q3",
            "type": "mcq",
            "prompt": "Avec les mêmes fonctions, que vaut la limite en $3$ du quotient de $f$ par $g$ ?",
            "options": [
              "$\\frac{5}{2}$",
              "$-\\frac{2}{5}$",
              "$-\\frac{5}{2}$",
              "$-3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On divise les limites : le quotient de $-5$ par $2$ donne $-\\frac{5}{2}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Substituer dans une expression continue",
          "stepTheme": "Substituer dans une expression continue",
          "stepBadge": "Substituer dans une expression continue",
          "paragraphText": "• Exercice 1 : la fraction de numérateur $x^2 - 2x + 3$ et de dénominateur $x - 2$ est continue en $-5$, donc sa limite s’obtient par substitution.\nLe numérateur vaut $(-5)^2 - 2 \\times (-5) + 3 = 38$ et le dénominateur vaut $-5 - 2 = -7$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p06_q4",
            "type": "mcq",
            "prompt": "Que vaut la limite en $-5$ de cette fraction ?",
            "options": [
              "$-\\frac{38}{7}$",
              "$-38$",
              "$\\frac{38}{7}$",
              "$\\frac{7}{38}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé donne la fraction de numérateur $38$ et de dénominateur $-7$, soit $-\\frac{38}{7}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un quotient trigonométrique",
          "stepTheme": "Un quotient trigonométrique",
          "stepBadge": "Un quotient trigonométrique",
          "paragraphText": "• Exercice 1 : en $-\\frac{\\pi}{6}$, le quotient du sinus par le cosinus se calcule par substitution, le cosinus ne s’annulant pas en ce point.\nLe sinus vaut $-\\frac{1}{2}$ et le cosinus vaut $\\frac{\\sqrt{3}}{2}$ en ce point.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p06_q5",
            "type": "mcq",
            "prompt": "Que vaut la limite en $-\\frac{\\pi}{6}$ du quotient de $\\sin x$ par $\\cos x$ ?",
            "options": [
              "$-\\frac{1}{2}$",
              "$\\frac{\\sqrt{3}}{3}$",
              "$-\\sqrt{3}$",
              "$-\\frac{\\sqrt{3}}{3}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le quotient de $-\\frac{1}{2}$ par $\\frac{\\sqrt{3}}{2}$ vaut $-\\frac{1}{\\sqrt{3}}$, soit $-\\frac{\\sqrt{3}}{3}$ : c’est le corrigé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Lever une indétermination par factorisation",
          "stepTheme": "Lever une indétermination par factorisation",
          "stepBadge": "Lever une indétermination par factorisation",
          "paragraphText": "• Exercice 5 : la limite en $-2$ de la fraction de numérateur $x^2 - 4$ et de dénominateur $x + 2$ est indéterminée par substitution directe.\nOn factorise le numérateur en $(x - 2)(x + 2)$, on simplifie par $x + 2$, et il reste $x - 2$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p06_q6",
            "type": "mcq",
            "prompt": "Que vaut cette limite en $-2$ ?",
            "options": [
              "$0$",
              "$-4$",
              "$-2$",
              "$4$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Après simplification, on calcule $(-2) - 2 = -4$ : c’est le corrigé de l’exercice 5."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Une autre fraction rationnelle à simplifier",
          "stepTheme": "Une autre fraction rationnelle à simplifier",
          "stepBadge": "Une autre fraction rationnelle à simplifier",
          "paragraphText": "• Exercice 5 : en $3$, la fraction de numérateur $x^2 - 4x + 3$ et de dénominateur $x^2 - x - 6$ est indéterminée.\nOn factorise : le numérateur vaut $(x - 3)(x - 1)$ et le dénominateur $(x - 3)(x + 2)$ ; après simplification par $x - 3$, il reste la fraction de numérateur $x - 1$ et de dénominateur $x + 2$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p06_q7",
            "type": "mcq",
            "prompt": "Que vaut cette limite en $3$ ?",
            "options": [
              "$\\frac{1}{5}$",
              "$\\frac{2}{5}$",
              "$\\frac{3}{5}$",
              "$1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Après simplification, on calcule la fraction de numérateur $3 - 1$ et de dénominateur $3 + 2$, soit $\\frac{2}{5}$ : c’est le corrigé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p06_q1",
          "type": "mcq",
          "prompt": "Si $\\lim_{x \\to 3} f(x) = -5$ et $\\lim_{x \\to 3} g(x) = 2$, que vaut $\\lim_{x \\to 3} (f + g)(x)$ ?",
          "options": [
            "$-7$",
            "$-3$",
            "$-10$",
            "$3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On additionne les limites : $-5 + 2 = -3$, comme dans le corrigé de l’exercice de fixation."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p06_q2",
          "type": "mcq",
          "prompt": "Avec les mêmes fonctions, que vaut $\\lim_{x \\to 3} (f \\times g)(x)$ ?",
          "options": [
            "$-3$",
            "$-7$",
            "$10$",
            "$-10$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On multiplie les limites : $(-5) \\times 2 = -10$, comme dans le corrigé."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p06_q3",
          "type": "mcq",
          "prompt": "Avec les mêmes fonctions, que vaut la limite en $3$ du quotient de $f$ par $g$ ?",
          "options": [
            "$\\frac{5}{2}$",
            "$-\\frac{2}{5}$",
            "$-\\frac{5}{2}$",
            "$-3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On divise les limites : le quotient de $-5$ par $2$ donne $-\\frac{5}{2}$."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p06_q4",
          "type": "mcq",
          "prompt": "Que vaut la limite en $-5$ de cette fraction ?",
          "options": [
            "$-\\frac{38}{7}$",
            "$-38$",
            "$\\frac{38}{7}$",
            "$\\frac{7}{38}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé donne la fraction de numérateur $38$ et de dénominateur $-7$, soit $-\\frac{38}{7}$."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p06_q5",
          "type": "mcq",
          "prompt": "Que vaut la limite en $-\\frac{\\pi}{6}$ du quotient de $\\sin x$ par $\\cos x$ ?",
          "options": [
            "$-\\frac{1}{2}$",
            "$\\frac{\\sqrt{3}}{3}$",
            "$-\\sqrt{3}$",
            "$-\\frac{\\sqrt{3}}{3}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le quotient de $-\\frac{1}{2}$ par $\\frac{\\sqrt{3}}{2}$ vaut $-\\frac{1}{\\sqrt{3}}$, soit $-\\frac{\\sqrt{3}}{3}$ : c’est le corrigé."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p06_q6",
          "type": "mcq",
          "prompt": "Que vaut cette limite en $-2$ ?",
          "options": [
            "$0$",
            "$-4$",
            "$-2$",
            "$4$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Après simplification, on calcule $(-2) - 2 = -4$ : c’est le corrigé de l’exercice 5."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p06_q7",
          "type": "mcq",
          "prompt": "Que vaut cette limite en $3$ ?",
          "options": [
            "$\\frac{1}{5}$",
            "$\\frac{2}{5}$",
            "$\\frac{3}{5}$",
            "$1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Après simplification, on calcule la fraction de numérateur $3 - 1$ et de dénominateur $3 + 2$, soit $\\frac{2}{5}$ : c’est le corrigé."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l05_limites_continuite_p07",
      "order": 7,
      "title": "Le tarif téléphonique : continuité en 5 et en 30",
      "summary": "Étudier la continuité en $5$ et en $30$ de la fonction coût d’une communication téléphonique définie par morceaux.",
      "conceptExplanation": "Situation complexe de la leçon : le gérant d’une cabine téléphonique propose $150$ francs CFA la minute de $0$ à $5$ minutes, $750$ francs CFA forfaitaires entre $5$ et $10$ minutes, $100$ francs CFA la minute de $10$ à $30$ minutes, puis au-delà de $30$ minutes un forfait de $3000$ francs CFA plus $50$ francs CFA par minute supplémentaire.\nLa fonction $f$ qui à la durée $x$ associe le coût vaut donc $150x$ sur $[0 ; 5]$, $750$ sur $]5 ; 10[$, $100x$ sur $[10 ; 30]$ et $3000 + 50(x - 30)$ au-delà de $30$.\nEn $5$ : $f(5) = 750$ et les deux limites latérales valent $750$, donc $f$ est continue en $5$. En $30$ : $f(30) = 3000$ et les deux limites latérales valent $3000$, donc $f$ est continue en $30$.",
      "keyRule": "Pour une fonction définie par morceaux, la continuité en un point de jonction se teste en comparant l’image et les deux limites latérales.",
      "formulas": [
        {
          "name": "Coût en 5 minutes",
          "formula": "f(5) = 750"
        },
        {
          "name": "Coût en 30 minutes",
          "formula": "f(30) = 3000"
        }
      ],
      "workedExample": {
        "title": "Le tarif téléphonique de la situation complexe",
        "statement": "L’aîné affirme que la fonction coût est continue en $5$ et discontinue en $30$, son petit frère soutient qu’elle est continue en $5$ et en $30$. Lequel a raison ?",
        "methodSteps": [
          "On écrit la fonction par morceaux : $150x$, puis $750$, puis $100x$, puis $3000 + 50(x - 30)$.",
          "En $5$ : $f(5) = 750$, la limite à gauche vaut $750$ et la limite à droite vaut $750$, donc $f$ est continue en $5$.",
          "En $30$ : $f(30) = 3000$, la limite à gauche vaut $3000$ et la limite à droite vaut $3000$, donc $f$ est continue en $30$."
        ],
        "conclusion": "La fonction est continue en $5$ et en $30$ : c’est le petit frère qui a raison."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La fonction coût définie par morceaux",
          "stepTheme": "La fonction coût définie par morceaux",
          "stepBadge": "La fonction coût définie par morceaux",
          "paragraphText": "• Situation complexe : soit $x$ la durée en minutes et $f(x)$ le coût en francs CFA.\nLa fonction vaut $150x$ sur $[0 ; 5]$, $750$ sur $]5 ; 10[$, $100x$ sur $[10 ; 30]$, puis $3000 + 50(x - 30)$ au-delà de $30$ minutes.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p07_q1",
            "type": "mcq",
            "prompt": "Avec ce contrat, que vaut $f(5)$, le coût de $5$ minutes de communication ?",
            "options": [
              "$700$",
              "$150$",
              "$800$",
              "$750$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Sur le premier intervalle, $f(5) = 150 \\times 5 = 750$ francs CFA."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La limite à gauche en 5",
          "stepTheme": "La limite à gauche en 5",
          "stepBadge": "La limite à gauche en 5",
          "paragraphText": "• Corrigé de la situation complexe : à gauche en $5$, on utilise l’expression $150x$.\nLa limite à gauche en $5$ vaut donc $150 \\times 5 = 750$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p07_q2",
            "type": "mcq",
            "prompt": "Que vaut la limite de $f$ à gauche en $5$ ?",
            "options": [
              "$750$",
              "$500$",
              "$150$",
              "$1000$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule $\\lim_{x \\to 5, x < 5} (150x) = 750$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La continuité en 5",
          "stepTheme": "La continuité en 5",
          "stepBadge": "La continuité en 5",
          "paragraphText": "• Corrigé de la situation complexe : à droite en $5$, la fonction est constante et vaut $750$.\nLes limites à gauche et à droite en $5$ valent toutes les deux $f(5) = 750$ : la fonction est continue en $5$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p07_q3",
            "type": "mcq",
            "prompt": "La fonction coût est-elle continue en $5$ ?",
            "options": [
              "Non, car la limite à droite vaut $1000$",
              "Non, car $f$ n’est pas définie en $5$",
              "Oui, car les limites latérales valent $f(5) = 750$",
              "Oui, car le forfait vaut $750$ sur tout l’intervalle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les deux limites latérales et l’image en $5$ valent $750$ : c’est le critère de continuité."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La valeur et la limite à gauche en 30",
          "stepTheme": "La valeur et la limite à gauche en 30",
          "stepBadge": "La valeur et la limite à gauche en 30",
          "paragraphText": "• Corrigé de la situation complexe : sur $[10 ; 30]$, la fonction vaut $100x$, donc $f(30) = 100 \\times 30 = 3000$.\nLa limite à gauche en $30$ vaut également $3000$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p07_q4",
            "type": "mcq",
            "prompt": "Que vaut $f(30)$, le coût de $30$ minutes de communication ?",
            "options": [
              "$300$",
              "$3050$",
              "$100$",
              "$3000$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Sur l’intervalle $[10 ; 30]$, $f(30) = 100 \\times 30 = 3000$ francs CFA."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La limite à droite en 30",
          "stepTheme": "La limite à droite en 30",
          "stepBadge": "La limite à droite en 30",
          "paragraphText": "• Corrigé de la situation complexe : au-delà de $30$ minutes, le coût vaut $3000 + 50(x - 30)$.\nQuand $x$ tend vers $30$ par la droite, cette expression tend vers $3000$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p07_q5",
            "type": "mcq",
            "prompt": "Que vaut la limite de $f$ à droite en $30$ ?",
            "options": [
              "$3050$",
              "$3000$",
              "$3500$",
              "$2950$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $3000 + 50 \\times (30 - 30) = 3000$ : la limite à droite vaut $3000$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Départager les deux frères",
          "stepTheme": "Départager les deux frères",
          "stepBadge": "Départager les deux frères",
          "paragraphText": "• L’aîné affirme que la fonction est continue en $5$ et discontinue en $30$ ; le petit frère soutient qu’elle est continue en $5$ et en $30$.\nLe corrigé conclut des deux études que la fonction est continue en $5$ et en $30$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l05_limites_continuite_p07_q6",
            "type": "mcq",
            "prompt": "Lequel des deux frères a raison ?",
            "options": [
              "L’aîné : continue en $5$, discontinue en $30$",
              "Aucun des deux",
              "Le petit frère : continue en $5$ et en $30$",
              "L’aîné : discontinue en $5$ et en $30$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les limites latérales égalent l’image en $5$ comme en $30$ : le petit frère a raison, d’après le corrigé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p07_q1",
          "type": "mcq",
          "prompt": "Avec ce contrat, que vaut $f(5)$, le coût de $5$ minutes de communication ?",
          "options": [
            "$700$",
            "$150$",
            "$800$",
            "$750$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Sur le premier intervalle, $f(5) = 150 \\times 5 = 750$ francs CFA."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p07_q2",
          "type": "mcq",
          "prompt": "Que vaut la limite de $f$ à gauche en $5$ ?",
          "options": [
            "$750$",
            "$500$",
            "$150$",
            "$1000$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule $\\lim_{x \\to 5, x < 5} (150x) = 750$."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p07_q3",
          "type": "mcq",
          "prompt": "La fonction coût est-elle continue en $5$ ?",
          "options": [
            "Non, car la limite à droite vaut $1000$",
            "Non, car $f$ n’est pas définie en $5$",
            "Oui, car les limites latérales valent $f(5) = 750$",
            "Oui, car le forfait vaut $750$ sur tout l’intervalle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les deux limites latérales et l’image en $5$ valent $750$ : c’est le critère de continuité."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p07_q4",
          "type": "mcq",
          "prompt": "Que vaut $f(30)$, le coût de $30$ minutes de communication ?",
          "options": [
            "$300$",
            "$3050$",
            "$100$",
            "$3000$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Sur l’intervalle $[10 ; 30]$, $f(30) = 100 \\times 30 = 3000$ francs CFA."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p07_q5",
          "type": "mcq",
          "prompt": "Que vaut la limite de $f$ à droite en $30$ ?",
          "options": [
            "$3050$",
            "$3000$",
            "$3500$",
            "$2950$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $3000 + 50 \\times (30 - 30) = 3000$ : la limite à droite vaut $3000$."
        },
        {
          "id": "premiere_c_maths_numerique_l05_limites_continuite_p07_q6",
          "type": "mcq",
          "prompt": "Lequel des deux frères a raison ?",
          "options": [
            "L’aîné : continue en $5$, discontinue en $30$",
            "Aucun des deux",
            "Le petit frère : continue en $5$ et en $30$",
            "L’aîné : discontinue en $5$ et en $30$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les limites latérales égalent l’image en $5$ comme en $30$ : le petit frère a raison, d’après le corrigé."
        }
      ]
    }
  ]
};
