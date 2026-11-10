import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « TD Maths leçon 02 Probabilité_1.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_TLE_D_L02_PROBABILITE_CONDITIONNELLE: CurriculumChapter = {
  "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire",
  "subjectId": "maths",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [],
  "order": 2,
  "title": "Leçon 2 : Probabilité conditionnelle et variable aléatoire",
  "summary": "Probabilité conditionnelle, indépendance, arbre pondéré et probabilités totales, loi d'une variable aléatoire, espérance et variance, loi binomiale, fonction de répartition.",
  "officialVolumeHours": 18,
  "contentVersion": 2,
  "source": "TD Maths leçon 02 Probabilité_1.pdf",
  "points": [
    {
      "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p01",
      "order": 1,
      "title": "La probabilité conditionnelle",
      "summary": "$P_B(A)=\\dfrac{P(A\\cap B)}{P(B)}$ et la formule $P(A\\cap B)=P(B)\\times P_B(A)$.",
      "conceptExplanation": "Soit $B$ un événement tel que $P(B)\\neq0$. La probabilité de $A$ sachant $B$ est :\n$$P_B(A)=P(A/B)=\\dfrac{P(A\\cap B)}{P(B)}.$$\nOn la lit « probabilité de $A$ sachant que $B$ est réalisé ».\n\nConséquence : $P(A\\cap B)=P(B)\\times P_B(A)=P(A)\\times P_A(B)$.\n\nExemples :\n- $P(E)=\\dfrac12$, $P(F)=\\dfrac34$, $P(E\\cap F)=\\dfrac25$ : $P_E(F)=\\dfrac{2/5}{1/2}=\\dfrac45$ et $P_F(E)=\\dfrac{2/5}{3/4}=\\dfrac{8}{15}$ ;\n- $P(F)=0,75$ et $P_F(I)=0,45$ : $P(F\\cap I)=0,75\\times0,45=0,3375$.\n\nAttention : en général $P_A(B)\\neq P_B(A)$ ; on divise toujours par la probabilité de l'événement qui est « su » (celui après « sachant »).",
      "keyRule": "$P_B(A)=\\dfrac{P(A\\cap B)}{P(B)}$ ; $P(A\\cap B)=P(B)\\times P_B(A)$.",
      "formulas": [
        {
          "name": "Probabilité conditionnelle",
          "formula": "P_B(A)=\\dfrac{P(A\\cap B)}{P(B)}"
        },
        {
          "name": "Probabilité de l'intersection",
          "formula": "P(A\\cap B)=P(B)\\times P_B(A)"
        }
      ],
      "workedExample": {
        "title": "Deux probabilités conditionnelles",
        "statement": "$P(E)=\\dfrac12$, $P(F)=\\dfrac34$, $P(E\\cap F)=\\dfrac25$. Calcule $P_E(F)$ et $P_F(E)$.",
        "methodSteps": [
          "$P_E(F)=\\dfrac{P(E\\cap F)}{P(E)}=\\dfrac25\\times2=\\dfrac45$.",
          "$P_F(E)=\\dfrac{P(E\\cap F)}{P(F)}=\\dfrac25\\times\\dfrac43=\\dfrac{8}{15}$."
        ],
        "conclusion": "$P_E(F)=\\dfrac45$ et $P_F(E)=\\dfrac{8}{15}$ : elles sont différentes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition",
          "stepTheme": "La définition",
          "stepBadge": "La définition",
          "paragraphText": "Si $P(B)\\neq0$, la probabilité de $A$ sachant $B$ est $P_B(A)=\\dfrac{P(A\\cap B)}{P(B)}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p01_q1",
            "type": "mcq",
            "prompt": "Quelle est la formule de $P_B(A)$ ?",
            "options": [
              "$\\dfrac{P(A\\cap B)}{P(A)}$",
              "$P(A)\\times P(B)$",
              "$\\dfrac{P(A\\cap B)}{P(B)}$",
              "$\\dfrac{P(A)}{P(B)}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On divise par la probabilité de l'événement « su », ici $B$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Un premier calcul",
          "stepTheme": "Un premier calcul",
          "stepBadge": "Un premier calcul",
          "paragraphText": "Avec $P(E)=\\dfrac12$ et $P(E\\cap F)=\\dfrac25$ : $P_E(F)=\\dfrac25\\div\\dfrac12=\\dfrac45$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p01_q2",
            "type": "mcq",
            "prompt": "Avec $P(F)=\\dfrac34$ et $P(E\\cap F)=\\dfrac25$, que vaut $P_F(E)$ ?",
            "options": [
              "$\\dfrac{8}{15}$",
              "$\\dfrac{3}{10}$",
              "$\\dfrac45$",
              "$\\dfrac{15}{8}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac25\\times\\dfrac43=\\dfrac{8}{15}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "L'ordre compte",
          "stepTheme": "L'ordre compte",
          "stepBadge": "L'ordre compte",
          "paragraphText": "$P_E(F)=\\dfrac45$ mais $P_F(E)=\\dfrac{8}{15}$ : en général, $P_A(B)\\neq P_B(A)$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p01_q3",
            "type": "mcq",
            "prompt": "« La probabilité qu'un élève aime le damier sachant qu'il est en Tle C » s'écrit :",
            "options": [
              "$P_D(C)$",
              "$P(C\\cap D)$",
              "$P(D)\\times P(C)$",
              "$P_C(D)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ce qui est « su » ($C$) se met en indice ; l'événement cherché ($D$, aimer le damier) entre parenthèses."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La probabilité de l'intersection",
          "stepTheme": "La probabilité de l'intersection",
          "stepBadge": "La probabilité de l'intersection",
          "paragraphText": "De la définition on tire : $P(A\\cap B)=P(B)\\times P_B(A)$. C'est la formule qu'on utilise le long d'une branche d'arbre.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p01_q4",
            "type": "mcq",
            "prompt": "$P(F)=0,75$ et $P_F(I)=0,45$. Que vaut $P(F\\cap I)$ ?",
            "options": [
              "$1,2$",
              "$0,3375$",
              "$0,6$",
              "$0,30$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$0,75\\times0,45=0,3375$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le restaurant de Mariam",
          "stepTheme": "Le restaurant de Mariam",
          "stepBadge": "Le restaurant de Mariam",
          "paragraphText": "Affluence : $P(A)=0,6$. Avec affluence, bénéfice : $P_A(B)=0,7$. Donc $P(A\\cap B)=0,6\\times0,7=0,42$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p01_q5",
            "type": "mcq",
            "prompt": "Sans affluence ($P(\\bar A)=0,4$), le bénéfice a pour probabilité $0,4$. Que vaut $P(\\bar A\\cap B)$ ?",
            "options": [
              "$0,8$",
              "$0,4$",
              "$1$",
              "$0,16$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$P(\\bar A)\\times P_{\\bar A}(B)=0,4\\times0,4=0,16$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Remonter l'information",
          "stepTheme": "Remonter l'information",
          "stepBadge": "Remonter l'information",
          "paragraphText": "Mariam a fait un bénéfice ($P(B)=0,58$). La probabilité qu'il y ait eu affluence est $P_B(A)=\\dfrac{P(A\\cap B)}{P(B)}=\\dfrac{0,42}{0,58}=\\dfrac{21}{29}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p01_q6",
            "type": "mcq",
            "prompt": "Pourquoi divise-t-on par $0,58$ pour calculer $P_B(A)$ ?",
            "options": [
              "Parce que $0,58=P(A)$",
              "Parce qu'on sait que $B$ est réalisé, et $P(B)=0,58$",
              "Parce que $0,58=P(A\\cap B)$",
              "Par habitude"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On divise toujours par la probabilité de l'événement « su »."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Une probabilité reste entre 0 et 1",
          "stepTheme": "Une probabilité reste entre 0 et 1",
          "stepBadge": "Une probabilité reste entre 0 et 1",
          "paragraphText": "Si ton calcul de $P_B(A)$ dépasse $1$, tu as divisé par la mauvaise probabilité : $P(A\\cap B)$ est toujours plus petite que $P(B)$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p01_q7",
            "type": "mcq",
            "prompt": "Un élève trouve $P_E(F)=\\dfrac{15}{8}$. Que conclut-on ?",
            "options": [
              "Le calcul est juste",
              "C'est impossible : une probabilité ne dépasse pas $1$",
              "$E$ et $F$ sont indépendants",
              "$F$ est certain"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il a sans doute inversé la fraction."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p01_q1",
          "type": "mcq",
          "prompt": "Quelle est la formule de $P_B(A)$ ?",
          "options": [
            "$\\dfrac{P(A\\cap B)}{P(A)}$",
            "$P(A)\\times P(B)$",
            "$\\dfrac{P(A\\cap B)}{P(B)}$",
            "$\\dfrac{P(A)}{P(B)}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On divise par la probabilité de l'événement « su », ici $B$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p01_q2",
          "type": "mcq",
          "prompt": "Avec $P(F)=\\dfrac34$ et $P(E\\cap F)=\\dfrac25$, que vaut $P_F(E)$ ?",
          "options": [
            "$\\dfrac{8}{15}$",
            "$\\dfrac{3}{10}$",
            "$\\dfrac45$",
            "$\\dfrac{15}{8}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac25\\times\\dfrac43=\\dfrac{8}{15}$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p01_q3",
          "type": "mcq",
          "prompt": "« La probabilité qu'un élève aime le damier sachant qu'il est en Tle C » s'écrit :",
          "options": [
            "$P_D(C)$",
            "$P(C\\cap D)$",
            "$P(D)\\times P(C)$",
            "$P_C(D)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ce qui est « su » ($C$) se met en indice ; l'événement cherché ($D$, aimer le damier) entre parenthèses."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p01_q4",
          "type": "mcq",
          "prompt": "$P(F)=0,75$ et $P_F(I)=0,45$. Que vaut $P(F\\cap I)$ ?",
          "options": [
            "$1,2$",
            "$0,3375$",
            "$0,6$",
            "$0,30$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$0,75\\times0,45=0,3375$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p01_q5",
          "type": "mcq",
          "prompt": "Sans affluence ($P(\\bar A)=0,4$), le bénéfice a pour probabilité $0,4$. Que vaut $P(\\bar A\\cap B)$ ?",
          "options": [
            "$0,8$",
            "$0,4$",
            "$1$",
            "$0,16$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$P(\\bar A)\\times P_{\\bar A}(B)=0,4\\times0,4=0,16$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p01_q6",
          "type": "mcq",
          "prompt": "Pourquoi divise-t-on par $0,58$ pour calculer $P_B(A)$ ?",
          "options": [
            "Parce que $0,58=P(A)$",
            "Parce qu'on sait que $B$ est réalisé, et $P(B)=0,58$",
            "Parce que $0,58=P(A\\cap B)$",
            "Par habitude"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On divise toujours par la probabilité de l'événement « su »."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p01_q7",
          "type": "mcq",
          "prompt": "Un élève trouve $P_E(F)=\\dfrac{15}{8}$. Que conclut-on ?",
          "options": [
            "Le calcul est juste",
            "C'est impossible : une probabilité ne dépasse pas $1$",
            "$E$ et $F$ sont indépendants",
            "$F$ est certain"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il a sans doute inversé la fraction."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p02",
      "order": 2,
      "title": "Événements indépendants",
      "summary": "$P(A\\cap B)=P(A)\\times P(B)$ : la réalisation de l'un n'influence pas l'autre.",
      "conceptExplanation": "Deux événements $A$ et $B$ sont indépendants lorsque :\n$$P(A\\cap B)=P(A)\\times P(B).$$\nSi $P(A)\\neq0$ et $P(B)\\neq0$, cela revient à $P_B(A)=P(A)$ (ou $P_A(B)=P(B)$) : savoir que $B$ est réalisé ne change pas la probabilité de $A$.\n\nPropriété : si $A$ et $B$ sont indépendants, alors $\\bar A$ et $B$, $A$ et $\\bar B$, $\\bar A$ et $\\bar B$ le sont aussi.\n\nExemple : on lance deux fois une pièce équilibrée. $A$ « Face au 1er lancer », $B$ « Face au 2e ». $P(A)=P(B)=\\dfrac12$ et $P(A\\cap B)=P(\\{(F;F)\\})=\\dfrac14=\\dfrac12\\times\\dfrac12$ : $A$ et $B$ sont indépendants.\n\nAttention : ne pas confondre avec « incompatibles » ($A\\cap B=\\varnothing$). Deux événements incompatibles de probabilités non nulles ne sont JAMAIS indépendants, car $P(A\\cap B)=0\\neq P(A)P(B)$.",
      "keyRule": "Indépendants : $P(A\\cap B)=P(A)\\times P(B)$. Incompatibles : $A\\cap B=\\varnothing$. Ce n'est pas la même chose.",
      "formulas": [
        {
          "name": "Indépendance",
          "formula": "P(A\\cap B)=P(A)\\times P(B)"
        }
      ],
      "workedExample": {
        "title": "Deux lancers de pièce",
        "statement": "Justifie que « Face au 1er lancer » et « Face au 2e lancer » sont indépendants.",
        "methodSteps": [
          "$\\Omega=\\{(P;P),(P;F),(F;P),(F;F)\\}$, $4$ issues équiprobables.",
          "$P(A)=\\dfrac24=\\dfrac12$, $P(B)=\\dfrac12$, $P(A\\cap B)=\\dfrac14$.",
          "$P(A)\\times P(B)=\\dfrac14=P(A\\cap B)$."
        ],
        "conclusion": "$A$ et $B$ sont indépendants."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition",
          "stepTheme": "La définition",
          "stepBadge": "La définition",
          "paragraphText": "$A$ et $B$ sont indépendants si $P(A\\cap B)=P(A)\\times P(B)$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p02_q1",
            "type": "mcq",
            "prompt": "$P(A)=0,4$, $P(B)=0,5$ et $P(A\\cap B)=0,2$. $A$ et $B$ sont-ils indépendants ?",
            "options": [
              "Oui, car $0,4\\times0,5=0,2$",
              "Non, car $0,4\\neq0,5$",
              "Non, car $0,2<0,5$",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le produit des probabilités est égal à la probabilité de l'intersection."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Ce que cela veut dire",
          "stepTheme": "Ce que cela veut dire",
          "stepBadge": "Ce que cela veut dire",
          "paragraphText": "Si $A$ et $B$ sont indépendants (probabilités non nulles), alors $P_B(A)=P(A)$ : savoir que $B$ s'est produit ne change rien pour $A$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p02_q2",
            "type": "mcq",
            "prompt": "$A$ et $B$ sont indépendants et $P(A)=0,3$. Que vaut $P_B(A)$ ?",
            "options": [
              "$0,7$",
              "$0$",
              "$0,3$",
              "On ne peut pas savoir sans $P(B)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Indépendance : $P_B(A)=P(A)=0,3$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Deux lancers",
          "stepTheme": "Deux lancers",
          "stepBadge": "Deux lancers",
          "paragraphText": "Deux lancers d'une pièce équilibrée : $P(\\text{Face puis Face})=\\dfrac14=\\dfrac12\\times\\dfrac12$. Les deux lancers sont indépendants.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p02_q3",
            "type": "mcq",
            "prompt": "On lance deux fois un dé équilibré. Quelle est la probabilité d'obtenir deux fois le $6$ ?",
            "options": [
              "$\\dfrac16$",
              "$\\dfrac{1}{12}$",
              "$\\dfrac{2}{6}$",
              "$\\dfrac{1}{36}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Lancers indépendants : $\\dfrac16\\times\\dfrac16=\\dfrac{1}{36}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les contraires",
          "stepTheme": "Les contraires",
          "stepBadge": "Les contraires",
          "paragraphText": "Si $A$ et $B$ sont indépendants, alors $\\bar A$ et $B$, $A$ et $\\bar B$, $\\bar A$ et $\\bar B$ le sont aussi.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p02_q4",
            "type": "mcq",
            "prompt": "$A$ et $B$ indépendants, $P(A)=0,2$, $P(B)=0,5$. Que vaut $P(\\bar A\\cap\\bar B)$ ?",
            "options": [
              "$0,1$",
              "$0,4$",
              "$0,3$",
              "$0,9$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\bar A$ et $\\bar B$ sont indépendants : $0,8\\times0,5=0,4$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Incompatible n'est pas indépendant",
          "stepTheme": "Incompatible n'est pas indépendant",
          "stepBadge": "Incompatible n'est pas indépendant",
          "paragraphText": "Incompatibles : $A\\cap B=\\varnothing$, donc $P(A\\cap B)=0$. Si $P(A)$ et $P(B)$ ne sont pas nulles, $P(A)P(B)\\neq0$ : ils ne sont PAS indépendants.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p02_q5",
            "type": "mcq",
            "prompt": "$A$ et $B$ sont incompatibles, avec $P(A)=0,3$ et $P(B)=0,4$. Sont-ils indépendants ?",
            "options": [
              "Oui, toujours",
              "Oui, car $0,3+0,4<1$",
              "Non, car $P(A\\cap B)=0\\neq0,12$",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Si l'un se produit, l'autre est impossible : ils s'influencent fortement."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Vérifier par le calcul",
          "stepTheme": "Vérifier par le calcul",
          "stepBadge": "Vérifier par le calcul",
          "paragraphText": "Pour prouver l'indépendance, on calcule séparément $P(A\\cap B)$ et $P(A)\\times P(B)$, puis on compare. L'intuition ne suffit pas.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p02_q6",
            "type": "mcq",
            "prompt": "$P(A)=0,5$, $P(B)=0,6$ et $P(A\\cap B)=0,2$. Que conclut-on ?",
            "options": [
              "$A$ et $B$ sont indépendants",
              "$A$ et $B$ sont incompatibles",
              "$A$ est certain",
              "$A$ et $B$ ne sont pas indépendants"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$0,5\\times0,6=0,3\\neq0,2$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Des tirages avec remise",
          "stepTheme": "Des tirages avec remise",
          "stepBadge": "Des tirages avec remise",
          "paragraphText": "Dans des tirages AVEC remise, l'urne est la même à chaque tirage : les résultats successifs sont indépendants. Sans remise, la composition change : ils ne le sont plus.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p02_q7",
            "type": "mcq",
            "prompt": "Une urne a 3 boules rouges et 2 noires. On tire 2 boules avec remise. Quelle est la probabilité de tirer deux rouges ?",
            "options": [
              "$\\dfrac{9}{25}$",
              "$\\dfrac{3}{10}$",
              "$\\dfrac{6}{25}$",
              "$\\dfrac35$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec remise, les tirages sont indépendants : $\\dfrac35\\times\\dfrac35=\\dfrac{9}{25}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p02_q1",
          "type": "mcq",
          "prompt": "$P(A)=0,4$, $P(B)=0,5$ et $P(A\\cap B)=0,2$. $A$ et $B$ sont-ils indépendants ?",
          "options": [
            "Oui, car $0,4\\times0,5=0,2$",
            "Non, car $0,4\\neq0,5$",
            "Non, car $0,2<0,5$",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le produit des probabilités est égal à la probabilité de l'intersection."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p02_q2",
          "type": "mcq",
          "prompt": "$A$ et $B$ sont indépendants et $P(A)=0,3$. Que vaut $P_B(A)$ ?",
          "options": [
            "$0,7$",
            "$0$",
            "$0,3$",
            "On ne peut pas savoir sans $P(B)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Indépendance : $P_B(A)=P(A)=0,3$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p02_q3",
          "type": "mcq",
          "prompt": "On lance deux fois un dé équilibré. Quelle est la probabilité d'obtenir deux fois le $6$ ?",
          "options": [
            "$\\dfrac16$",
            "$\\dfrac{1}{12}$",
            "$\\dfrac{2}{6}$",
            "$\\dfrac{1}{36}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Lancers indépendants : $\\dfrac16\\times\\dfrac16=\\dfrac{1}{36}$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p02_q4",
          "type": "mcq",
          "prompt": "$A$ et $B$ indépendants, $P(A)=0,2$, $P(B)=0,5$. Que vaut $P(\\bar A\\cap\\bar B)$ ?",
          "options": [
            "$0,1$",
            "$0,4$",
            "$0,3$",
            "$0,9$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\bar A$ et $\\bar B$ sont indépendants : $0,8\\times0,5=0,4$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p02_q5",
          "type": "mcq",
          "prompt": "$A$ et $B$ sont incompatibles, avec $P(A)=0,3$ et $P(B)=0,4$. Sont-ils indépendants ?",
          "options": [
            "Oui, toujours",
            "Oui, car $0,3+0,4<1$",
            "Non, car $P(A\\cap B)=0\\neq0,12$",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Si l'un se produit, l'autre est impossible : ils s'influencent fortement."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p02_q6",
          "type": "mcq",
          "prompt": "$P(A)=0,5$, $P(B)=0,6$ et $P(A\\cap B)=0,2$. Que conclut-on ?",
          "options": [
            "$A$ et $B$ sont indépendants",
            "$A$ et $B$ sont incompatibles",
            "$A$ est certain",
            "$A$ et $B$ ne sont pas indépendants"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$0,5\\times0,6=0,3\\neq0,2$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p02_q7",
          "type": "mcq",
          "prompt": "Une urne a 3 boules rouges et 2 noires. On tire 2 boules avec remise. Quelle est la probabilité de tirer deux rouges ?",
          "options": [
            "$\\dfrac{9}{25}$",
            "$\\dfrac{3}{10}$",
            "$\\dfrac{6}{25}$",
            "$\\dfrac35$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec remise, les tirages sont indépendants : $\\dfrac35\\times\\dfrac35=\\dfrac{9}{25}$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p03",
      "order": 3,
      "title": "Arbre pondéré et probabilités totales",
      "summary": "Partition de l'univers, arbre de probabilités et formule des probabilités totales.",
      "conceptExplanation": "Partition : $B_1,\\dots,B_n$ forment une partition de $\\Omega$ s'ils sont deux à deux disjoints et si leur réunion est $\\Omega$. Exemple : $A$ et $\\bar A$.\n\nFormule des probabilités totales : si $B_1,\\dots,B_n$ forment une partition de $\\Omega$ (probabilités non nulles), alors pour tout événement $A$ :\n$$P(A)=P(A\\cap B_1)+\\dots+P(A\\cap B_n),\\quad\\text{avec}\\ P(A\\cap B_i)=P(B_i)\\times P_{B_i}(A).$$\n\nArbre pondéré :\n- au 1er niveau, les probabilités $P(A)$ et $P(\\bar A)$ ;\n- au 2e niveau, les probabilités conditionnelles $P_A(B)$, $P_A(\\bar B)$… ;\n- la somme des branches issues d'un même nœud vaut $1$ ;\n- la probabilité d'un chemin est le PRODUIT des probabilités de ses branches ;\n- la probabilité d'un événement est la SOMME des chemins qui y mènent.\n\nExemple : un magasin vend 64 % d'ordinateurs A et 36 % de N ; 30 % des A et 60 % des N sont soldés. $P(S)=0,64\\times0,3+0,36\\times0,6=0,192+0,216=0,408$.\n\nSituation : 25 % des Tle C et un tiers des Tle D aiment le damier, et 3 élèves sur 10 au total. Avec $x=P(E)$ (Tle D) : $\\dfrac{3}{10}=\\dfrac13x+\\dfrac14(1-x)$, d'où $x=\\dfrac35$ : 60 % des élèves sont en Tle D.",
      "keyRule": "Sur un arbre : on MULTIPLIE le long d'un chemin, on ADDITIONNE les chemins qui mènent au même événement.",
      "formulas": [
        {
          "name": "Probabilités totales (2 cas)",
          "formula": "P(B)=P(A)P_A(B)+P(\\bar A)P_{\\bar A}(B)"
        }
      ],
      "workedExample": {
        "title": "La probabilité d'un bénéfice",
        "statement": "$P(A)=0,6$, $P_A(B)=0,7$, $P_{\\bar A}(B)=0,4$. Calcule $P(B)$.",
        "methodSteps": [
          "Chemin $A$ puis $B$ : $0,6\\times0,7=0,42$.",
          "Chemin $\\bar A$ puis $B$ : $0,4\\times0,4=0,16$.",
          "On additionne : $0,42+0,16$."
        ],
        "conclusion": "$P(B)=0,58$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une partition",
          "stepTheme": "Une partition",
          "stepBadge": "Une partition",
          "paragraphText": "$B_1,\\dots,B_n$ forment une partition de $\\Omega$ s'ils sont deux à deux disjoints et si leur réunion est $\\Omega$ : chaque issue est dans un et un seul $B_i$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p03_q1",
            "type": "mcq",
            "prompt": "$A=\\{1;\\dots;8\\}$. Lequel de ces groupes forme une partition de $A$ ?",
            "options": [
              "$\\{1;2\\}$, $\\{2;3;4\\}$, $\\{5;6;7;8\\}$",
              "$\\{1;2\\}$, $\\{3;4;5\\}$, $\\{6;7\\}$",
              "$\\{1;2\\}$, $\\{3;4;5\\}$, $\\{6;7\\}$, $\\{8\\}$",
              "$\\{1;2;3;4\\}$, $\\{4;5;6;7;8\\}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Disjoints deux à deux et réunion égale à $A$ ; les autres oublient $8$ ou répètent un élément."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Construire l'arbre",
          "stepTheme": "Construire l'arbre",
          "stepBadge": "Construire l'arbre",
          "paragraphText": "Au 1er niveau : $P(A)=0,64$ et $P(N)=0,36$. Au 2e niveau : $P_A(S)=0,3$, $P_A(\\bar S)=0,7$, $P_N(S)=0,6$, $P_N(\\bar S)=0,4$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p03_q2",
            "type": "mcq",
            "prompt": "Si $P_N(S)=0,6$, quelle probabilité écrit-on sur la branche de $N$ vers $\\bar S$ ?",
            "options": [
              "$0,6$",
              "$0,36$",
              "$0,64$",
              "$0,4$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les branches issues d'un même nœud ont pour somme $1$ : $1-0,6=0,4$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le long d'un chemin",
          "stepTheme": "Le long d'un chemin",
          "stepBadge": "Le long d'un chemin",
          "paragraphText": "La probabilité d'un chemin est le produit des probabilités de ses branches : $P(A\\cap S)=0,64\\times0,3=0,192$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p03_q3",
            "type": "mcq",
            "prompt": "Que vaut $P(N\\cap S)$, un ordinateur de marque N et soldé ?",
            "options": [
              "$0,96$",
              "$0,216$",
              "$0,6$",
              "$0,24$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$0,36\\times0,6=0,216$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les probabilités totales",
          "stepTheme": "Les probabilités totales",
          "stepBadge": "Les probabilités totales",
          "paragraphText": "On additionne les chemins qui mènent à $S$ : $P(S)=0,192+0,216=0,408$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p03_q4",
            "type": "mcq",
            "prompt": "Barrage : 65 % sont contre, dont 70 % d'écologistes ; parmi les autres, 20 % d'écologistes. Quelle est $P(E)$ ?",
            "options": [
              "$0,525$",
              "$0,455$",
              "$0,9$",
              "$0,45$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$0,65\\times0,7+0,35\\times0,2=0,455+0,07=0,525$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Retrouver une probabilité inconnue",
          "stepTheme": "Retrouver une probabilité inconnue",
          "stepBadge": "Retrouver une probabilité inconnue",
          "paragraphText": "Damier : avec $x=P(E)$ (Tle D), $P(R)=\\dfrac13x+\\dfrac14(1-x)=\\dfrac{3}{10}$. On trouve $\\dfrac{x}{12}=\\dfrac{1}{20}$, soit $x=\\dfrac35$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p03_q5",
            "type": "mcq",
            "prompt": "Quelle proportion des élèves de l'échantillon est en Terminale D ?",
            "options": [
              "$30\\,\\%$",
              "$25\\,\\%$",
              "$40\\,\\%$",
              "$60\\,\\%$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$x=\\dfrac35=60\\,\\%$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Les conditionnelles sont au 2e niveau",
          "stepTheme": "Les conditionnelles sont au 2e niveau",
          "stepBadge": "Les conditionnelles sont au 2e niveau",
          "paragraphText": "Les branches du 2e niveau portent des probabilités conditionnelles : sur la branche $A\\to B$, on lit $P_A(B)$, pas $P(B)$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p03_q6",
            "type": "mcq",
            "prompt": "Que représente le nombre écrit sur la branche qui va de $A$ à $B$ ?",
            "options": [
              "$P(A\\cap B)$",
              "$P(B)$",
              "$P_A(B)$",
              "$P_B(A)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la probabilité de $B$ sachant qu'on est passé par $A$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Additionner les bons chemins",
          "stepTheme": "Additionner les bons chemins",
          "stepBadge": "Additionner les bons chemins",
          "paragraphText": "Pour $P(B)$, on additionne TOUS les chemins qui finissent par $B$, et seulement eux. Oublier le chemin par $\\bar A$ est l'erreur la plus courante.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p03_q7",
            "type": "mcq",
            "prompt": "Avec $P(A)=0,6$, $P_A(B)=0,7$ et $P_{\\bar A}(B)=0,4$, un élève répond $P(B)=0,42$. Quelle est son erreur ?",
            "options": [
              "Aucune",
              "Il a oublié le chemin $\\bar A\\to B$, qui vaut $0,16$",
              "Il fallait additionner $0,7$ et $0,4$",
              "Il fallait diviser par $0,6$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$P(B)=0,42+0,16=0,58$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p03_q1",
          "type": "mcq",
          "prompt": "$A=\\{1;\\dots;8\\}$. Lequel de ces groupes forme une partition de $A$ ?",
          "options": [
            "$\\{1;2\\}$, $\\{2;3;4\\}$, $\\{5;6;7;8\\}$",
            "$\\{1;2\\}$, $\\{3;4;5\\}$, $\\{6;7\\}$",
            "$\\{1;2\\}$, $\\{3;4;5\\}$, $\\{6;7\\}$, $\\{8\\}$",
            "$\\{1;2;3;4\\}$, $\\{4;5;6;7;8\\}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Disjoints deux à deux et réunion égale à $A$ ; les autres oublient $8$ ou répètent un élément."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p03_q2",
          "type": "mcq",
          "prompt": "Si $P_N(S)=0,6$, quelle probabilité écrit-on sur la branche de $N$ vers $\\bar S$ ?",
          "options": [
            "$0,6$",
            "$0,36$",
            "$0,64$",
            "$0,4$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les branches issues d'un même nœud ont pour somme $1$ : $1-0,6=0,4$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p03_q3",
          "type": "mcq",
          "prompt": "Que vaut $P(N\\cap S)$, un ordinateur de marque N et soldé ?",
          "options": [
            "$0,96$",
            "$0,216$",
            "$0,6$",
            "$0,24$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$0,36\\times0,6=0,216$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p03_q4",
          "type": "mcq",
          "prompt": "Barrage : 65 % sont contre, dont 70 % d'écologistes ; parmi les autres, 20 % d'écologistes. Quelle est $P(E)$ ?",
          "options": [
            "$0,525$",
            "$0,455$",
            "$0,9$",
            "$0,45$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$0,65\\times0,7+0,35\\times0,2=0,455+0,07=0,525$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p03_q5",
          "type": "mcq",
          "prompt": "Quelle proportion des élèves de l'échantillon est en Terminale D ?",
          "options": [
            "$30\\,\\%$",
            "$25\\,\\%$",
            "$40\\,\\%$",
            "$60\\,\\%$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$x=\\dfrac35=60\\,\\%$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p03_q6",
          "type": "mcq",
          "prompt": "Que représente le nombre écrit sur la branche qui va de $A$ à $B$ ?",
          "options": [
            "$P(A\\cap B)$",
            "$P(B)$",
            "$P_A(B)$",
            "$P_B(A)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la probabilité de $B$ sachant qu'on est passé par $A$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p03_q7",
          "type": "mcq",
          "prompt": "Avec $P(A)=0,6$, $P_A(B)=0,7$ et $P_{\\bar A}(B)=0,4$, un élève répond $P(B)=0,42$. Quelle est son erreur ?",
          "options": [
            "Aucune",
            "Il a oublié le chemin $\\bar A\\to B$, qui vaut $0,16$",
            "Il fallait additionner $0,7$ et $0,4$",
            "Il fallait diviser par $0,6$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$P(B)=0,42+0,16=0,58$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p04",
      "order": 4,
      "title": "Variable aléatoire et loi de probabilité",
      "summary": "Les valeurs prises par $X$ et la probabilité de chacune.",
      "conceptExplanation": "Une variable aléatoire $X$ est une application de l'univers $\\Omega$ dans $\\mathbb{R}$ : elle associe un nombre à chaque issue (un gain, un nombre de boules…).\n\n$X(\\Omega)=\\{x_1;\\dots;x_n\\}$ est l'ensemble des valeurs prises par $X$.\n\nLa loi de probabilité de $X$ associe à chaque valeur $x_i$ la probabilité $P(X=x_i)$. On la présente dans un tableau, valeurs rangées dans l'ordre croissant. On a toujours $p_1+p_2+\\dots+p_n=1$.\n\nExemple : une urne contient 2 boules blanches et 4 rouges ; on tire simultanément 3 boules ; $X$ = nombre de boules blanches. $X(\\Omega)=\\{0;1;2\\}$ et $\\text{Card}(\\Omega)=C_6^3=20$.\n- $P(X=0)=\\dfrac{C_4^3}{20}=\\dfrac{4}{20}=\\dfrac15$ ;\n- $P(X=1)=\\dfrac{C_2^1\\times C_4^2}{20}=\\dfrac{12}{20}=\\dfrac35$ ;\n- $P(X=2)=\\dfrac{C_2^2\\times C_4^1}{20}=\\dfrac{4}{20}=\\dfrac15$.\nVérification : $\\dfrac15+\\dfrac35+\\dfrac15=1$.\n\nAutre exemple : on lance 3 fois une pièce ; on gagne 600 F pour 3 Faces, 300 F pour 2, 100 F pour 1, et on perd 1000 F pour 0. La loi de $X$ (gain) : $-1000$ : $\\dfrac18$ ; $100$ : $\\dfrac38$ ; $300$ : $\\dfrac38$ ; $600$ : $\\dfrac18$.",
      "keyRule": "Loi de $X$ : tableau des valeurs $x_i$ (ordre croissant) et des $P(X=x_i)$, dont la somme vaut $1$.",
      "formulas": [],
      "workedExample": {
        "title": "Des points avec des boules",
        "statement": "Urne : 3 blanches, 5 noires. On tire 3 boules à la fois ; une blanche rapporte $+1$, une noire $-1$. Donne $X(\\Omega)$ et $P(X=3)$.",
        "methodSteps": [
          "Tirages possibles : BBB, BBN, BNN, NNN, soit $+3$, $+1$, $-1$, $-3$.",
          "$\\text{Card}(\\Omega)=C_8^3=56$.",
          "$P(X=3)=\\dfrac{C_3^3}{56}=\\dfrac{1}{56}$ (les trois boules blanches)."
        ],
        "conclusion": "$X(\\Omega)=\\{-3;-1;1;3\\}$ et $P(X=3)=\\dfrac{1}{56}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une variable aléatoire",
          "stepTheme": "Une variable aléatoire",
          "stepBadge": "Une variable aléatoire",
          "paragraphText": "Une variable aléatoire $X$ associe un nombre réel à chaque issue de l'expérience : un gain, un nombre de succès, une durée…",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p04_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une variable aléatoire $X$ ?",
            "options": [
              "Une probabilité comprise entre $0$ et $1$",
              "Une application qui associe un nombre réel à chaque issue",
              "Un événement de $\\Omega$",
              "Le nombre total d'issues"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est une application de $\\Omega$ dans $\\mathbb{R}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Les valeurs prises",
          "stepTheme": "Les valeurs prises",
          "stepBadge": "Les valeurs prises",
          "paragraphText": "On commence par lister $X(\\Omega)$. Avec 2 blanches et 4 rouges, en tirant 3 boules, on peut avoir 0, 1 ou 2 blanches : $X(\\Omega)=\\{0;1;2\\}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p04_q2",
            "type": "mcq",
            "prompt": "Pourquoi $X=3$ est-il impossible dans ce tirage ?",
            "options": [
              "Parce qu'on tire 3 boules",
              "Parce que $3$ est impair",
              "Parce qu'il n'y a que 2 boules blanches",
              "Parce qu'il y a 4 rouges"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On ne peut pas tirer plus de blanches qu'il n'y en a."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Calculer une probabilité",
          "stepTheme": "Calculer une probabilité",
          "stepBadge": "Calculer une probabilité",
          "paragraphText": "$\\text{Card}(\\Omega)=C_6^3=20$. Une blanche et deux rouges : $C_2^1\\times C_4^2=2\\times6=12$ tirages, donc $P(X=1)=\\dfrac{12}{20}=\\dfrac35$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p04_q3",
            "type": "mcq",
            "prompt": "Que vaut $P(X=0)$, aucune boule blanche ?",
            "options": [
              "$\\dfrac15$",
              "$\\dfrac{3}{5}$",
              "$0$",
              "$\\dfrac{4}{6}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Trois rouges : $\\dfrac{C_4^3}{20}=\\dfrac{4}{20}=\\dfrac15$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La somme vaut 1",
          "stepTheme": "La somme vaut 1",
          "stepBadge": "La somme vaut 1",
          "paragraphText": "Dans une loi de probabilité, la somme des $P(X=x_i)$ vaut toujours $1$. C'est le meilleur moyen de vérifier ses calculs.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p04_q4",
            "type": "mcq",
            "prompt": "$P(X=0)=\\dfrac15$ et $P(X=1)=\\dfrac35$, avec $X(\\Omega)=\\{0;1;2\\}$. Que vaut $P(X=2)$ ?",
            "options": [
              "$\\dfrac35$",
              "$\\dfrac45$",
              "$0$",
              "$\\dfrac15$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$1-\\dfrac15-\\dfrac35=\\dfrac15$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un jeu de pile ou face",
          "stepTheme": "Un jeu de pile ou face",
          "stepBadge": "Un jeu de pile ou face",
          "paragraphText": "Trois lancers : 8 issues équiprobables. Exactement deux Faces : FFP, FPF, PFF, soit $P(X=300)=\\dfrac38$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p04_q5",
            "type": "mcq",
            "prompt": "On perd 1000 F si l'on n'obtient que des Piles. Que vaut $P(X=-1000)$ ?",
            "options": [
              "$\\dfrac38$",
              "$\\dfrac12$",
              "$\\dfrac18$",
              "$\\dfrac14$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une seule issue sur 8 : PPP."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Une probabilité d'intervalle",
          "stepTheme": "Une probabilité d'intervalle",
          "stepBadge": "Une probabilité d'intervalle",
          "paragraphText": "Pour « gagner strictement moins de 300 F », on additionne les probabilités des valeurs concernées : $P(X=-1000)+P(X=100)=\\dfrac18+\\dfrac38=\\dfrac12$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p04_q6",
            "type": "mcq",
            "prompt": "Avec la même loi, que vaut $P(X\\geq300)$ ?",
            "options": [
              "$\\dfrac38$",
              "$\\dfrac12$",
              "$\\dfrac18$",
              "$\\dfrac78$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$P(X=300)+P(X=600)=\\dfrac38+\\dfrac18=\\dfrac12$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Simultané : des combinaisons",
          "stepTheme": "Simultané : des combinaisons",
          "stepBadge": "Simultané : des combinaisons",
          "paragraphText": "Pour un tirage simultané, on compte avec des combinaisons $C_n^p$ : l'ordre ne compte pas. Avec 8 boules et 3 tirées : $C_8^3=56$ tirages.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p04_q7",
            "type": "mcq",
            "prompt": "Urne : 3 blanches, 5 noires, 3 boules tirées à la fois. Que vaut $P(X=-1)$, une blanche et deux noires ?",
            "options": [
              "$\\dfrac{15}{56}$",
              "$\\dfrac{30}{56}$",
              "$\\dfrac{1}{56}$",
              "$\\dfrac{10}{56}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$C_3^1\\times C_5^2=3\\times10=30$, donc $\\dfrac{30}{56}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p04_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une variable aléatoire $X$ ?",
          "options": [
            "Une probabilité comprise entre $0$ et $1$",
            "Une application qui associe un nombre réel à chaque issue",
            "Un événement de $\\Omega$",
            "Le nombre total d'issues"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est une application de $\\Omega$ dans $\\mathbb{R}$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p04_q2",
          "type": "mcq",
          "prompt": "Pourquoi $X=3$ est-il impossible dans ce tirage ?",
          "options": [
            "Parce qu'on tire 3 boules",
            "Parce que $3$ est impair",
            "Parce qu'il n'y a que 2 boules blanches",
            "Parce qu'il y a 4 rouges"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On ne peut pas tirer plus de blanches qu'il n'y en a."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p04_q3",
          "type": "mcq",
          "prompt": "Que vaut $P(X=0)$, aucune boule blanche ?",
          "options": [
            "$\\dfrac15$",
            "$\\dfrac{3}{5}$",
            "$0$",
            "$\\dfrac{4}{6}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Trois rouges : $\\dfrac{C_4^3}{20}=\\dfrac{4}{20}=\\dfrac15$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p04_q4",
          "type": "mcq",
          "prompt": "$P(X=0)=\\dfrac15$ et $P(X=1)=\\dfrac35$, avec $X(\\Omega)=\\{0;1;2\\}$. Que vaut $P(X=2)$ ?",
          "options": [
            "$\\dfrac35$",
            "$\\dfrac45$",
            "$0$",
            "$\\dfrac15$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$1-\\dfrac15-\\dfrac35=\\dfrac15$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p04_q5",
          "type": "mcq",
          "prompt": "On perd 1000 F si l'on n'obtient que des Piles. Que vaut $P(X=-1000)$ ?",
          "options": [
            "$\\dfrac38$",
            "$\\dfrac12$",
            "$\\dfrac18$",
            "$\\dfrac14$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une seule issue sur 8 : PPP."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p04_q6",
          "type": "mcq",
          "prompt": "Avec la même loi, que vaut $P(X\\geq300)$ ?",
          "options": [
            "$\\dfrac38$",
            "$\\dfrac12$",
            "$\\dfrac18$",
            "$\\dfrac78$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$P(X=300)+P(X=600)=\\dfrac38+\\dfrac18=\\dfrac12$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p04_q7",
          "type": "mcq",
          "prompt": "Urne : 3 blanches, 5 noires, 3 boules tirées à la fois. Que vaut $P(X=-1)$, une blanche et deux noires ?",
          "options": [
            "$\\dfrac{15}{56}$",
            "$\\dfrac{30}{56}$",
            "$\\dfrac{1}{56}$",
            "$\\dfrac{10}{56}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$C_3^1\\times C_5^2=3\\times10=30$, donc $\\dfrac{30}{56}$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p05",
      "order": 5,
      "title": "Espérance, variance et écart type",
      "summary": "Le gain moyen d'un jeu, et la dispersion autour de ce gain.",
      "conceptExplanation": "Soit $X$ prenant les valeurs $x_1,\\dots,x_n$ avec les probabilités $p_1,\\dots,p_n$.\n\nEspérance (moyenne) : $E(X)=x_1p_1+x_2p_2+\\dots+x_np_n$.\nVariance : $V(X)=\\sum(x_i-E(X))^2p_i$, ou plus simplement $V(X)=E(X^2)-[E(X)]^2=x_1^2p_1+\\dots+x_n^2p_n-[E(X)]^2$.\nÉcart type : $\\sigma(X)=\\sqrt{V(X)}$.\n\nInterprétation pour un jeu, si $X$ est le gain algébrique (ce qu'on reçoit moins la mise) :\n- $E(X)>0$ : jeu avantageux pour le joueur ;\n- $E(X)<0$ : jeu désavantageux pour le joueur ;\n- $E(X)=0$ : jeu équitable.\n\nExemple (pile ou face, 3 lancers) : $E(X)=-1000\\times\\dfrac18+100\\times\\dfrac38+300\\times\\dfrac38+600\\times\\dfrac18=100$ F. Le jeu est favorable au joueur : il gagne 100 F en moyenne par partie.\nPour rendre le jeu équitable, on cherche la perte $S$ telle que $E(X)=\\dfrac{-S+300+900+600}{8}=\\dfrac{1800-S}{8}=0$ : $S=1800$ F.\n\nVariance du même jeu : $E(X^2)=\\dfrac{1\\,000\\,000+3\\times10\\,000+3\\times90\\,000+360\\,000}{8}=207\\,500$, donc $V(X)=207\\,500-100^2=197\\,500$ et $\\sigma(X)\\approx444$ F.",
      "keyRule": "$E(X)=\\sum x_ip_i$ ; $V(X)=E(X^2)-[E(X)]^2$ ; $\\sigma=\\sqrt V$. Jeu équitable : $E(X)=0$.",
      "formulas": [
        {
          "name": "Espérance",
          "formula": "E(X)=x_1p_1+x_2p_2+\\dots+x_np_n"
        },
        {
          "name": "Variance",
          "formula": "V(X)=E(X^2)-[E(X)]^2"
        },
        {
          "name": "Écart type",
          "formula": "\\sigma(X)=\\sqrt{V(X)}"
        }
      ],
      "workedExample": {
        "title": "Rendre un jeu équitable",
        "statement": "Gains : $-S$ avec $\\dfrac18$, $100$ avec $\\dfrac38$, $300$ avec $\\dfrac38$, $600$ avec $\\dfrac18$. Trouve $S$ pour que le jeu soit équitable.",
        "methodSteps": [
          "$E(X)=\\dfrac{-S+300+900+600}{8}=\\dfrac{1800-S}{8}$.",
          "Équitable : $E(X)=0$, donc $1800-S=0$."
        ],
        "conclusion": "Il faudrait perdre $1800$ F quand on n'obtient que des Piles."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'espérance",
          "stepTheme": "L'espérance",
          "stepBadge": "L'espérance",
          "paragraphText": "$E(X)=x_1p_1+\\dots+x_np_n$ : on multiplie chaque valeur par sa probabilité, puis on additionne. C'est la valeur moyenne de $X$ sur un grand nombre d'essais.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p05_q1",
            "type": "mcq",
            "prompt": "$X$ prend les valeurs $0$, $1$, $2$ avec les probabilités $\\dfrac15$, $\\dfrac35$, $\\dfrac15$. Que vaut $E(X)$ ?",
            "options": [
              "$\\dfrac35$",
              "$1$",
              "$\\dfrac65$",
              "$3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$0+\\dfrac35+\\dfrac25=1$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le gain moyen",
          "stepTheme": "Le gain moyen",
          "stepBadge": "Le gain moyen",
          "paragraphText": "Jeu de pile ou face : $E(X)=\\dfrac{-1000+300+900+600}{8}=\\dfrac{800}{8}=100$ F.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p05_q2",
            "type": "mcq",
            "prompt": "Que signifie $E(X)=100$ F pour le joueur ?",
            "options": [
              "Il gagne 100 F à chaque partie",
              "Il ne peut pas perdre",
              "Il gagne en moyenne 100 F par partie",
              "La mise est de 100 F"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est une moyenne : certaines parties font perdre 1000 F."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Avantageux, équitable",
          "stepTheme": "Avantageux, équitable",
          "stepBadge": "Avantageux, équitable",
          "paragraphText": "Si $X$ est le gain du joueur : $E(X)>0$ jeu avantageux pour le joueur ; $E(X)<0$ désavantageux ; $E(X)=0$ équitable.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p05_q3",
            "type": "mcq",
            "prompt": "À un stand de kermesse, le gain du joueur a pour espérance $-50$ F. Pour qui le jeu est-il avantageux ?",
            "options": [
              "Pour le joueur",
              "Pour personne, il est équitable",
              "On ne peut pas savoir",
              "Pour les organisateurs du stand"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$E(X)<0$ : le joueur perd en moyenne, le stand gagne."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Rendre le jeu équitable",
          "stepTheme": "Rendre le jeu équitable",
          "stepBadge": "Rendre le jeu équitable",
          "paragraphText": "On remplace la valeur inconnue par une lettre, on écrit $E(X)$, puis on résout $E(X)=0$. Ici $\\dfrac{1800-S}{8}=0$ donne $S=1800$ F.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p05_q4",
            "type": "mcq",
            "prompt": "Quelle équation traduit « le jeu est équitable » ?",
            "options": [
              "$E(X)=0$",
              "$E(X)=1$",
              "$V(X)=0$",
              "$P(X=0)=\\dfrac12$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Équitable : ni gain ni perte en moyenne."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La variance",
          "stepTheme": "La variance",
          "stepBadge": "La variance",
          "paragraphText": "$V(X)=E(X^2)-[E(X)]^2$ : on fait la moyenne des carrés, puis on retire le carré de la moyenne. Elle mesure la dispersion autour de $E(X)$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p05_q5",
            "type": "mcq",
            "prompt": "$X$ vaut $0$ ou $2$ avec la probabilité $\\dfrac12$ chacun. Que vaut $V(X)$ ?",
            "options": [
              "$2$",
              "$4$",
              "$1$",
              "$0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$E(X)=1$, $E(X^2)=\\dfrac{0+4}{2}=2$, donc $V(X)=2-1=1$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "L'écart type",
          "stepTheme": "L'écart type",
          "stepBadge": "L'écart type",
          "paragraphText": "$\\sigma(X)=\\sqrt{V(X)}$, dans la même unité que $X$. Pour le jeu de pile ou face, $V(X)=197\\,500$, donc $\\sigma(X)\\approx444$ F.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p05_q6",
            "type": "mcq",
            "prompt": "Si $V(X)=\\dfrac{15}{16}$, que vaut $\\sigma(X)$ ?",
            "options": [
              "$\\dfrac{15}{16}$",
              "$\\dfrac{\\sqrt{15}}{4}$",
              "$\\dfrac{15}{4}$",
              "$\\dfrac{225}{256}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\sqrt{\\dfrac{15}{16}}=\\dfrac{\\sqrt{15}}{4}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le carré de la moyenne",
          "stepTheme": "Le carré de la moyenne",
          "stepBadge": "Le carré de la moyenne",
          "paragraphText": "Dans $V(X)=E(X^2)-[E(X)]^2$, on retire le CARRÉ de l'espérance, pas l'espérance elle-même.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p05_q7",
            "type": "mcq",
            "prompt": "On a $E(X^2)=207\\,500$ et $E(X)=100$. Que vaut $V(X)$ ?",
            "options": [
              "$207\\,400$",
              "$197\\,500$",
              "$207\\,500$",
              "$2\\,075$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$207\\,500-100^2=207\\,500-10\\,000=197\\,500$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p05_q1",
          "type": "mcq",
          "prompt": "$X$ prend les valeurs $0$, $1$, $2$ avec les probabilités $\\dfrac15$, $\\dfrac35$, $\\dfrac15$. Que vaut $E(X)$ ?",
          "options": [
            "$\\dfrac35$",
            "$1$",
            "$\\dfrac65$",
            "$3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$0+\\dfrac35+\\dfrac25=1$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p05_q2",
          "type": "mcq",
          "prompt": "Que signifie $E(X)=100$ F pour le joueur ?",
          "options": [
            "Il gagne 100 F à chaque partie",
            "Il ne peut pas perdre",
            "Il gagne en moyenne 100 F par partie",
            "La mise est de 100 F"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est une moyenne : certaines parties font perdre 1000 F."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p05_q3",
          "type": "mcq",
          "prompt": "À un stand de kermesse, le gain du joueur a pour espérance $-50$ F. Pour qui le jeu est-il avantageux ?",
          "options": [
            "Pour le joueur",
            "Pour personne, il est équitable",
            "On ne peut pas savoir",
            "Pour les organisateurs du stand"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$E(X)<0$ : le joueur perd en moyenne, le stand gagne."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p05_q4",
          "type": "mcq",
          "prompt": "Quelle équation traduit « le jeu est équitable » ?",
          "options": [
            "$E(X)=0$",
            "$E(X)=1$",
            "$V(X)=0$",
            "$P(X=0)=\\dfrac12$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Équitable : ni gain ni perte en moyenne."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p05_q5",
          "type": "mcq",
          "prompt": "$X$ vaut $0$ ou $2$ avec la probabilité $\\dfrac12$ chacun. Que vaut $V(X)$ ?",
          "options": [
            "$2$",
            "$4$",
            "$1$",
            "$0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$E(X)=1$, $E(X^2)=\\dfrac{0+4}{2}=2$, donc $V(X)=2-1=1$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p05_q6",
          "type": "mcq",
          "prompt": "Si $V(X)=\\dfrac{15}{16}$, que vaut $\\sigma(X)$ ?",
          "options": [
            "$\\dfrac{15}{16}$",
            "$\\dfrac{\\sqrt{15}}{4}$",
            "$\\dfrac{15}{4}$",
            "$\\dfrac{225}{256}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\sqrt{\\dfrac{15}{16}}=\\dfrac{\\sqrt{15}}{4}$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p05_q7",
          "type": "mcq",
          "prompt": "On a $E(X^2)=207\\,500$ et $E(X)=100$. Que vaut $V(X)$ ?",
          "options": [
            "$207\\,400$",
            "$197\\,500$",
            "$207\\,500$",
            "$2\\,075$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$207\\,500-100^2=207\\,500-10\\,000=197\\,500$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p06",
      "order": 6,
      "title": "Schéma de Bernoulli et loi binomiale",
      "summary": "$P(X=k)=C_n^kp^k(1-p)^{n-k}$, $E(X)=np$ et $V(X)=np(1-p)$.",
      "conceptExplanation": "Épreuve de Bernoulli : expérience à deux issues seulement, le succès $S$ (probabilité $p$) et l'échec $\\bar S$ (probabilité $1-p$).\nExemple : lancer un dé et s'intéresser au $6$ : $p=\\dfrac16$.\n\nSchéma de Bernoulli : on répète $n$ fois ($n\\geq2$), de façon indépendante, la même épreuve de Bernoulli. Ses paramètres sont $n$ et $p$.\n\nLoi binomiale : si $X$ est le nombre de succès, $X$ suit la loi binomiale $\\mathcal{B}(n;p)$ :\n$$P(X=k)=C_n^k\\,p^k(1-p)^{n-k},\\quad0\\leq k\\leq n.$$\n$E(X)=np$ et $V(X)=np(1-p)$.\n\nExemples :\n- 5 lancers d'un dé, exactement 4 fois le $2$ : $C_5^4\\left(\\dfrac16\\right)^4\\dfrac56=\\dfrac{25}{7776}$ ;\n- un feu est vert avec la probabilité $\\dfrac34$ ; on y passe 5 fois : $P(X=3)=C_5^3\\left(\\dfrac34\\right)^3\\left(\\dfrac14\\right)^2=\\dfrac{270}{1024}\\approx0,26$ ; $E(X)=\\dfrac{15}{4}\\approx4$ feux verts en moyenne ; $V(X)=\\dfrac{15}{16}$ ;\n- Mariam fait un bénéfice avec $p=0,58$ chaque jour ; sur 3 jours, $E(X)=3\\times0,58=1,74$.",
      "keyRule": "$X\\sim\\mathcal{B}(n;p)$ : $P(X=k)=C_n^kp^k(1-p)^{n-k}$ ; $E(X)=np$ ; $V(X)=np(1-p)$.",
      "formulas": [
        {
          "name": "Loi binomiale",
          "formula": "P(X=k)=C_n^k\\,p^k(1-p)^{n-k}"
        },
        {
          "name": "Espérance et variance",
          "formula": "E(X)=np\\qquad V(X)=np(1-p)"
        }
      ],
      "workedExample": {
        "title": "Le feu vert",
        "statement": "Le feu est vert avec la probabilité $\\dfrac34$. On passe 5 fois. Calcule la probabilité de 3 feux verts exactement.",
        "methodSteps": [
          "Chaque passage est une épreuve de Bernoulli de succès « vert », $p=\\dfrac34$.",
          "5 passages indépendants : $X\\sim\\mathcal{B}\\left(5;\\dfrac34\\right)$.",
          "$P(X=3)=C_5^3\\left(\\dfrac34\\right)^3\\left(\\dfrac14\\right)^2=10\\times\\dfrac{27}{64}\\times\\dfrac{1}{16}=\\dfrac{270}{1024}$."
        ],
        "conclusion": "$P(X=3)\\approx0,26$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'épreuve de Bernoulli",
          "stepTheme": "L'épreuve de Bernoulli",
          "stepBadge": "L'épreuve de Bernoulli",
          "paragraphText": "Une épreuve de Bernoulli n'a que deux issues : le succès (probabilité $p$) et l'échec (probabilité $1-p$).",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p06_q1",
            "type": "mcq",
            "prompt": "On lance un dé équilibré et le succès est « obtenir 6 ». Quelle est la probabilité de l'échec ?",
            "options": [
              "$\\dfrac16$",
              "$\\dfrac12$",
              "$1$",
              "$\\dfrac56$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$1-\\dfrac16=\\dfrac56$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le schéma de Bernoulli",
          "stepTheme": "Le schéma de Bernoulli",
          "stepBadge": "Le schéma de Bernoulli",
          "paragraphText": "Un schéma de Bernoulli répète $n$ fois la même épreuve de Bernoulli, de façon indépendante. Ses paramètres sont $n$ et $p$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p06_q2",
            "type": "mcq",
            "prompt": "Quelle situation n'est PAS un schéma de Bernoulli ?",
            "options": [
              "Lancer 5 fois un dé et compter les 6",
              "Passer 5 fois au même feu",
              "Tirer 3 boules SANS remise et compter les rouges",
              "Lancer 10 fois une pièce"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Sans remise, les tirages ne sont pas indépendants."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La formule",
          "stepTheme": "La formule",
          "stepBadge": "La formule",
          "paragraphText": "La probabilité d'exactement $k$ succès en $n$ épreuves est $C_n^kp^k(1-p)^{n-k}$ : $C_n^k$ compte les places des succès.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p06_q3",
            "type": "mcq",
            "prompt": "5 lancers d'un dé : quelle est la probabilité d'obtenir exactement 4 fois le chiffre 2 ?",
            "options": [
              "$C_5^4\\left(\\dfrac16\\right)^4\\dfrac56$",
              "$\\left(\\dfrac16\\right)^4$",
              "$C_5^4\\left(\\dfrac56\\right)^4\\dfrac16$",
              "$\\dfrac45$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$n=5$, $k=4$, $p=\\dfrac16$ : $5\\times\\dfrac{1}{1296}\\times\\dfrac56=\\dfrac{25}{7776}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le feu vert",
          "stepTheme": "Le feu vert",
          "stepBadge": "Le feu vert",
          "paragraphText": "$X\\sim\\mathcal{B}\\left(5;\\dfrac34\\right)$ : $P(X=3)=10\\times\\dfrac{27}{64}\\times\\dfrac{1}{16}=\\dfrac{270}{1024}\\approx0,26$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p06_q4",
            "type": "mcq",
            "prompt": "Pour $X\\sim\\mathcal{B}\\left(5;\\dfrac34\\right)$, que vaut $P(X=5)$, cinq feux verts ?",
            "options": [
              "$\\dfrac34$",
              "$\\dfrac{15}{4}$",
              "$\\left(\\dfrac34\\right)^5$",
              "$5\\times\\dfrac34$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$C_5^5\\left(\\dfrac34\\right)^5\\left(\\dfrac14\\right)^0=\\left(\\dfrac34\\right)^5\\approx0,24$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Espérance et variance",
          "stepTheme": "Espérance et variance",
          "stepBadge": "Espérance et variance",
          "paragraphText": "Pour $X\\sim\\mathcal{B}(n;p)$ : $E(X)=np$ et $V(X)=np(1-p)$. Feu vert : $E(X)=5\\times\\dfrac34=\\dfrac{15}{4}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p06_q5",
            "type": "mcq",
            "prompt": "Pour $X\\sim\\mathcal{B}\\left(5;\\dfrac34\\right)$, que vaut $V(X)$ ?",
            "options": [
              "$\\dfrac{15}{4}$",
              "$\\dfrac{15}{16}$",
              "$\\dfrac34$",
              "$\\dfrac{5}{16}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$5\\times\\dfrac34\\times\\dfrac14=\\dfrac{15}{16}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Interpréter l'espérance",
          "stepTheme": "Interpréter l'espérance",
          "stepBadge": "Interpréter l'espérance",
          "paragraphText": "$E(X)=\\dfrac{15}{4}\\approx4$ : en passant 5 fois au carrefour, l'automobiliste rencontre en moyenne environ 4 feux verts.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p06_q6",
            "type": "mcq",
            "prompt": "Mariam fait un bénéfice chaque jour avec la probabilité $0,58$. Combien de jours de bénéfice en moyenne sur 3 jours ?",
            "options": [
              "$0,58$",
              "$3$",
              "$1,16$",
              "$1,74$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$E(X)=np=3\\times0,58=1,74$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Ne pas oublier $C_n^k$",
          "stepTheme": "Ne pas oublier $C_n^k$",
          "stepBadge": "Ne pas oublier $C_n^k$",
          "paragraphText": "$p^k(1-p)^{n-k}$ est la probabilité d'UN ordre précis de succès et d'échecs. Il faut multiplier par $C_n^k$, le nombre d'ordres possibles.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p06_q7",
            "type": "mcq",
            "prompt": "Combien d'ordres différents donnent exactement 3 succès en 5 épreuves ?",
            "options": [
              "$3$",
              "$5$",
              "$15$",
              "$10$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$C_5^3=10$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p06_q1",
          "type": "mcq",
          "prompt": "On lance un dé équilibré et le succès est « obtenir 6 ». Quelle est la probabilité de l'échec ?",
          "options": [
            "$\\dfrac16$",
            "$\\dfrac12$",
            "$1$",
            "$\\dfrac56$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$1-\\dfrac16=\\dfrac56$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p06_q2",
          "type": "mcq",
          "prompt": "Quelle situation n'est PAS un schéma de Bernoulli ?",
          "options": [
            "Lancer 5 fois un dé et compter les 6",
            "Passer 5 fois au même feu",
            "Tirer 3 boules SANS remise et compter les rouges",
            "Lancer 10 fois une pièce"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Sans remise, les tirages ne sont pas indépendants."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p06_q3",
          "type": "mcq",
          "prompt": "5 lancers d'un dé : quelle est la probabilité d'obtenir exactement 4 fois le chiffre 2 ?",
          "options": [
            "$C_5^4\\left(\\dfrac16\\right)^4\\dfrac56$",
            "$\\left(\\dfrac16\\right)^4$",
            "$C_5^4\\left(\\dfrac56\\right)^4\\dfrac16$",
            "$\\dfrac45$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$n=5$, $k=4$, $p=\\dfrac16$ : $5\\times\\dfrac{1}{1296}\\times\\dfrac56=\\dfrac{25}{7776}$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p06_q4",
          "type": "mcq",
          "prompt": "Pour $X\\sim\\mathcal{B}\\left(5;\\dfrac34\\right)$, que vaut $P(X=5)$, cinq feux verts ?",
          "options": [
            "$\\dfrac34$",
            "$\\dfrac{15}{4}$",
            "$\\left(\\dfrac34\\right)^5$",
            "$5\\times\\dfrac34$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$C_5^5\\left(\\dfrac34\\right)^5\\left(\\dfrac14\\right)^0=\\left(\\dfrac34\\right)^5\\approx0,24$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p06_q5",
          "type": "mcq",
          "prompt": "Pour $X\\sim\\mathcal{B}\\left(5;\\dfrac34\\right)$, que vaut $V(X)$ ?",
          "options": [
            "$\\dfrac{15}{4}$",
            "$\\dfrac{15}{16}$",
            "$\\dfrac34$",
            "$\\dfrac{5}{16}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$5\\times\\dfrac34\\times\\dfrac14=\\dfrac{15}{16}$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p06_q6",
          "type": "mcq",
          "prompt": "Mariam fait un bénéfice chaque jour avec la probabilité $0,58$. Combien de jours de bénéfice en moyenne sur 3 jours ?",
          "options": [
            "$0,58$",
            "$3$",
            "$1,16$",
            "$1,74$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$E(X)=np=3\\times0,58=1,74$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p06_q7",
          "type": "mcq",
          "prompt": "Combien d'ordres différents donnent exactement 3 succès en 5 épreuves ?",
          "options": [
            "$3$",
            "$5$",
            "$15$",
            "$10$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$C_5^3=10$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p07",
      "order": 7,
      "title": "Fonction de répartition et « au moins une fois »",
      "summary": "$F(x)=P(X\\leq x)$, une fonction en escalier, et $P_n=1-(1-p)^n$.",
      "conceptExplanation": "La fonction de répartition de $X$ est la fonction $F$ définie sur $\\mathbb{R}$ par $F(x)=P(X\\leq x)$.\nC'est une fonction en escalier, croissante, à valeurs dans $[0;1]$ : elle vaut $0$ avant la plus petite valeur et $1$ après la plus grande, et elle « saute » de $P(X=x_i)$ en chaque valeur $x_i$.\n\nExemple, loi $-1000$ : $\\dfrac18$ ; $100$ : $\\dfrac38$ ; $300$ : $\\dfrac38$ ; $600$ : $\\dfrac18$ :\n- $F(x)=0$ sur $]-\\infty;-1000[$ ;\n- $F(x)=\\dfrac18$ sur $[-1000;100[$ ;\n- $F(x)=\\dfrac12$ sur $[100;300[$ ;\n- $F(x)=\\dfrac78$ sur $[300;600[$ ;\n- $F(x)=1$ sur $[600;+\\infty[$.\n\n« Au moins une fois » : l'événement contraire de « au moins un succès en $n$ épreuves » est « aucun succès », de probabilité $(1-p)^n$. Donc :\n$$P_n=1-(1-p)^n.$$\nExemple : Mariam fait un bénéfice avec $p=0,58$. Sur $n$ jours, $P_n=1-0,42^n$. Pour $P_n\\geq0,9999$ : $0,42^n\\leq0,0001$, soit $n\\geq\\dfrac{\\ln0,0001}{\\ln0,42}\\approx10,6$ (on divise par $\\ln0,42<0$, ce qui change le sens). Il faut au moins $11$ jours.",
      "keyRule": "$F(x)=P(X\\leq x)$, en escalier de $0$ à $1$. « Au moins un succès » : $1-(1-p)^n$.",
      "formulas": [
        {
          "name": "Fonction de répartition",
          "formula": "F(x)=P(X\\leq x)"
        },
        {
          "name": "Au moins un succès",
          "formula": "P_n=1-(1-p)^n"
        }
      ],
      "workedExample": {
        "title": "Le nombre minimal de jours",
        "statement": "Trouve le plus petit $n$ tel que $1-0,42^n\\geq0,9999$.",
        "methodSteps": [
          "$0,42^n\\leq0,0001$.",
          "$n\\ln0,42\\leq\\ln0,0001$ ; comme $\\ln0,42<0$, on divise en changeant le sens : $n\\geq\\dfrac{\\ln0,0001}{\\ln0,42}\\approx10,61$."
        ],
        "conclusion": "Le plus petit entier est $n=11$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La fonction de répartition",
          "stepTheme": "La fonction de répartition",
          "stepBadge": "La fonction de répartition",
          "paragraphText": "La fonction de répartition de $X$ est $F(x)=P(X\\leq x)$ : la probabilité que $X$ prenne une valeur inférieure ou égale à $x$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p07_q1",
            "type": "mcq",
            "prompt": "Que représente $F(x)$ ?",
            "options": [
              "$P(X=x)$",
              "$P(X\\leq x)$",
              "$P(X>x)$",
              "$E(X)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la probabilité cumulée jusqu'à $x$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Additionner jusqu'à $x$",
          "stepTheme": "Additionner jusqu'à $x$",
          "stepBadge": "Additionner jusqu'à $x$",
          "paragraphText": "Sur $[100;300[$, les valeurs $\\leq x$ sont $-1000$ et $100$ : $F(x)=\\dfrac18+\\dfrac38=\\dfrac12$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p07_q2",
            "type": "mcq",
            "prompt": "Avec la même loi, que vaut $F(x)$ sur $[300;600[$ ?",
            "options": [
              "$\\dfrac38$",
              "$\\dfrac12$",
              "$1$",
              "$\\dfrac78$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\dfrac18+\\dfrac38+\\dfrac38=\\dfrac78$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une fonction en escalier",
          "stepTheme": "Une fonction en escalier",
          "stepBadge": "Une fonction en escalier",
          "paragraphText": "$F$ est croissante et en escalier : elle vaut $0$ avant la plus petite valeur de $X$, $1$ après la plus grande, et reste constante entre deux valeurs.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p07_q3",
            "type": "mcq",
            "prompt": "Que vaut $F(x)$ pour $x=2000$, plus grand que toutes les valeurs de $X$ ?",
            "options": [
              "$1$",
              "$0$",
              "$\\dfrac18$",
              "$2000$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Toutes les valeurs sont $\\leq2000$ : la probabilité est $1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Le saut est inclus",
          "stepTheme": "Le saut est inclus",
          "stepBadge": "Le saut est inclus",
          "paragraphText": "En $x=100$ exactement, $F(100)=P(X\\leq100)$ COMPREND $P(X=100)$ : $F(100)=\\dfrac12$, pas $\\dfrac18$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p07_q4",
            "type": "mcq",
            "prompt": "Avec la loi $-1000$ : $\\dfrac18$ ; $100$ : $\\dfrac38$ ; …, que vaut $F(-1000)$ ?",
            "options": [
              "$0$",
              "$\\dfrac12$",
              "$\\dfrac18$",
              "$\\dfrac38$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$P(X\\leq-1000)=P(X=-1000)=\\dfrac18$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Au moins une fois",
          "stepTheme": "Au moins une fois",
          "stepBadge": "Au moins une fois",
          "paragraphText": "Le contraire de « au moins un succès » est « aucun succès », de probabilité $(1-p)^n$. Donc $P(\\text{au moins un})=1-(1-p)^n$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p07_q5",
            "type": "mcq",
            "prompt": "Mariam ($p=0,58$) : quelle est la probabilité d'au moins un jour de bénéfice sur $n$ jours ?",
            "options": [
              "$0,58^n$",
              "$1-0,58^n$",
              "$1-0,42^n$",
              "$n\\times0,58$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Aucun bénéfice : $0,42^n$ ; on prend le contraire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Trouver $n$",
          "stepTheme": "Trouver $n$",
          "stepBadge": "Trouver $n$",
          "paragraphText": "$1-0,42^n\\geq0,9999\\iff0,42^n\\leq0,0001\\iff n\\geq\\dfrac{\\ln0,0001}{\\ln0,42}\\approx10,61$. Le plus petit entier est $11$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p07_q6",
            "type": "mcq",
            "prompt": "On trouve $n\\geq10,61$. Quelle est la valeur minimale de $n$ ?",
            "options": [
              "$10$",
              "$10,61$",
              "$12$",
              "$11$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$n$ est un entier au moins égal à $10,61$ : $n=11$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Diviser par un logarithme négatif",
          "stepTheme": "Diviser par un logarithme négatif",
          "stepBadge": "Diviser par un logarithme négatif",
          "paragraphText": "$\\ln0,42<0$ : quand on divise $n\\ln0,42\\leq\\ln0,0001$ par $\\ln0,42$, le sens de l'inégalité change.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p07_q7",
            "type": "mcq",
            "prompt": "De $n\\ln0,42\\leq\\ln0,0001$, que déduit-on ?",
            "options": [
              "$n\\leq\\dfrac{\\ln0,0001}{\\ln0,42}$",
              "$n\\geq\\dfrac{\\ln0,0001}{\\ln0,42}$",
              "$n\\geq\\ln0,0001-\\ln0,42$",
              "$n\\leq0,0001$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On divise par un nombre négatif : $\\leq$ devient $\\geq$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p07_q1",
          "type": "mcq",
          "prompt": "Que représente $F(x)$ ?",
          "options": [
            "$P(X=x)$",
            "$P(X\\leq x)$",
            "$P(X>x)$",
            "$E(X)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la probabilité cumulée jusqu'à $x$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p07_q2",
          "type": "mcq",
          "prompt": "Avec la même loi, que vaut $F(x)$ sur $[300;600[$ ?",
          "options": [
            "$\\dfrac38$",
            "$\\dfrac12$",
            "$1$",
            "$\\dfrac78$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\dfrac18+\\dfrac38+\\dfrac38=\\dfrac78$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p07_q3",
          "type": "mcq",
          "prompt": "Que vaut $F(x)$ pour $x=2000$, plus grand que toutes les valeurs de $X$ ?",
          "options": [
            "$1$",
            "$0$",
            "$\\dfrac18$",
            "$2000$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toutes les valeurs sont $\\leq2000$ : la probabilité est $1$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p07_q4",
          "type": "mcq",
          "prompt": "Avec la loi $-1000$ : $\\dfrac18$ ; $100$ : $\\dfrac38$ ; …, que vaut $F(-1000)$ ?",
          "options": [
            "$0$",
            "$\\dfrac12$",
            "$\\dfrac18$",
            "$\\dfrac38$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$P(X\\leq-1000)=P(X=-1000)=\\dfrac18$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p07_q5",
          "type": "mcq",
          "prompt": "Mariam ($p=0,58$) : quelle est la probabilité d'au moins un jour de bénéfice sur $n$ jours ?",
          "options": [
            "$0,58^n$",
            "$1-0,58^n$",
            "$1-0,42^n$",
            "$n\\times0,58$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Aucun bénéfice : $0,42^n$ ; on prend le contraire."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p07_q6",
          "type": "mcq",
          "prompt": "On trouve $n\\geq10,61$. Quelle est la valeur minimale de $n$ ?",
          "options": [
            "$10$",
            "$10,61$",
            "$12$",
            "$11$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$n$ est un entier au moins égal à $10,61$ : $n=11$."
        },
        {
          "id": "terminale_d_maths_numerique_l02_probabilite_conditionnelle_variable_aleatoire_p07_q7",
          "type": "mcq",
          "prompt": "De $n\\ln0,42\\leq\\ln0,0001$, que déduit-on ?",
          "options": [
            "$n\\leq\\dfrac{\\ln0,0001}{\\ln0,42}$",
            "$n\\geq\\dfrac{\\ln0,0001}{\\ln0,42}$",
            "$n\\geq\\ln0,0001-\\ln0,42$",
            "$n\\leq0,0001$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On divise par un nombre négatif : $\\leq$ devient $\\geq$."
        }
      ]
    }
  ]
};
