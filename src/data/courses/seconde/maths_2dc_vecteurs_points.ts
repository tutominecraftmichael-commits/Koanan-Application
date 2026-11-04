import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Maths_2C_L1_VECTEURS_ET_POINTS_DU_PLAN.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_2DC_GEO_L01_VECTEURS_POINTS: CurriculumChapter = {
  "id": "seconde_c_maths_geometrie_l01_vecteurs_points",
  "subjectId": "maths",
  "gradeLevel": "seconde_c",
  "alsoForGrades": [],
  "order": 1,
  "title": "Leçon 1 : Vecteurs et points du plan",
  "summary": "Vecteurs, norme, calcul vectoriel, colinéarité, centre de gravité, mesure algébrique, bases, coordonnées, déterminant et repères.",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "Maths_2C_L1_VECTEURS_ET_POINTS_DU_PLAN.pdf",
  "points": [
    {
      "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p01",
      "order": 1,
      "title": "Les vecteurs du plan",
      "summary": "Direction, sens, longueur, représentants et égalité de vecteurs.",
      "conceptExplanation": "Le vecteur $\\vec{AB}$ est déterminé par le couple de points $(A\\,;B)$. Il a pour :\n- direction : celle de la droite $(AB)$ ;\n- sens : de $A$ vers $B$ ;\n- longueur : la longueur $AB$ du segment $[AB]$.\n\nUn vecteur a une infinité de représentants : si $\\vec u=\\vec{AB}=\\vec{MN}=\\vec{PQ}$, les couples $(A,B)$, $(M,N)$ et $(P,Q)$ représentent tous $\\vec u$.\n\nÉgalité : $\\vec{AB}=\\vec{DC}$ signifie que $ABCD$ est un parallélogramme (éventuellement aplati).\n\nPropriété fondamentale : pour tout point $O$ et tout vecteur $\\vec u$, il existe un et un seul point $M$ tel que $\\vec{OM}=\\vec u$.\n\nL'ensemble de tous les vecteurs du plan s'appelle le plan vectoriel, noté $\\mathcal{V}$. Le vecteur $\\vec{AA}$ est le vecteur nul $\\vec 0$.",
      "keyRule": "$\\vec{AB}$ : direction $(AB)$, sens de $A$ vers $B$, longueur $AB$. $\\vec{AB}=\\vec{DC}$ ⇔ $ABCD$ parallélogramme. Pour tout $O$ et tout $\\vec u$, un seul $M$ tel que $\\vec{OM}=\\vec u$.",
      "formulas": [],
      "workedExample": {
        "title": "Lire un parallélogramme",
        "statement": "$ABCD$ est un parallélogramme. Cite deux égalités de vecteurs.",
        "methodSteps": [
          "Les côtés opposés $[AB]$ et $[DC]$ sont parallèles, de même longueur et parcourus dans le même sens.",
          "De même pour $[AD]$ et $[BC]$."
        ],
        "conclusion": "$\\vec{AB}=\\vec{DC}$ et $\\vec{AD}=\\vec{BC}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Trois caractéristiques",
          "stepTheme": "Trois caractéristiques",
          "stepBadge": "Trois caractéristiques",
          "paragraphText": "Un vecteur non nul est caractérisé par :\n• sa direction ;\n• son sens ;\n• sa longueur.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p01_q1",
            "type": "mcq",
            "prompt": "Quelles sont les trois caractéristiques d'un vecteur non nul ?",
            "options": [
              "Son origine, son milieu et son extrémité",
              "Son abscisse, son ordonnée et son nom",
              "Sa direction, son sens et sa longueur",
              "Sa longueur, sa largeur et son aire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Deux vecteurs sont égaux quand ces trois caractéristiques sont les mêmes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La direction",
          "stepTheme": "La direction",
          "stepBadge": "La direction",
          "paragraphText": "La direction du vecteur $\\vec{AB}$ est celle de la droite $(AB)$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p01_q2",
            "type": "mcq",
            "prompt": "Quelle est la direction du vecteur $\\vec{AB}$ ?",
            "options": [
              "Celle de la droite $(AB)$",
              "Celle de la perpendiculaire à $(AB)$",
              "Celle de l'axe des abscisses",
              "Celle de la médiatrice de $[AB]$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le vecteur « suit » la droite $(AB)$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Vecteurs opposés",
          "stepTheme": "Vecteurs opposés",
          "stepBadge": "Vecteurs opposés",
          "paragraphText": "$\\vec{AB}$ et $\\vec{BA}$ ont la même direction et la même longueur, mais des sens contraires : $\\vec{BA}=-\\vec{AB}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p01_q3",
            "type": "mcq",
            "prompt": "Que peut-on dire de $\\vec{AB}$ et $\\vec{BA}$ ?",
            "options": [
              "Même direction, même sens, même longueur",
              "Directions différentes, même longueur",
              "Même sens, longueurs différentes",
              "Même direction, même longueur, sens contraires"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ce sont des vecteurs opposés : $\\vec{BA}=-\\vec{AB}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Des représentants",
          "stepTheme": "Des représentants",
          "stepBadge": "Des représentants",
          "paragraphText": "Si $\\vec u=\\vec{AB}=\\vec{MN}=\\vec{PQ}$, les couples $(A,B)$, $(M,N)$ et $(P,Q)$ sont des représentants de $\\vec u$.\nUn vecteur a une infinité de représentants.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p01_q4",
            "type": "mcq",
            "prompt": "Combien de représentants un vecteur non nul possède-t-il ?",
            "options": [
              "Un seul",
              "Une infinité",
              "Deux",
              "Quatre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On peut « placer » le vecteur à partir de n'importe quel point."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le parallélogramme",
          "stepTheme": "Le parallélogramme",
          "stepBadge": "Le parallélogramme",
          "paragraphText": "$\\vec{AB}=\\vec{DC}$ équivaut à : $ABCD$ est un parallélogramme (éventuellement aplati).\nAttention à l'ordre des lettres.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p01_q5",
            "type": "mcq",
            "prompt": "$ABCD$ est un parallélogramme. Quelle égalité est vraie ?",
            "options": [
              "$\\vec{AB}=\\vec{CD}$",
              "$\\vec{AB}=\\vec{DC}$",
              "$\\vec{AB}=\\vec{AD}$",
              "$\\vec{AC}=\\vec{BD}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\vec{CD}$ a le sens contraire : $\\vec{CD}=-\\vec{AB}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Propriété fondamentale",
          "stepTheme": "Propriété fondamentale",
          "stepBadge": "Propriété fondamentale",
          "paragraphText": "Pour tout point $O$ et tout vecteur $\\vec u$, il existe un et un seul point $M$ tel que $\\vec{OM}=\\vec u$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p01_q6",
            "type": "mcq",
            "prompt": "On donne un point $O$ et un vecteur $\\vec u$. Combien de points $M$ vérifient $\\vec{OM}=\\vec u$ ?",
            "options": [
              "Aucun",
              "Deux",
              "Une infinité",
              "Un et un seul"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est ce qui permet de construire un point à partir d'un vecteur."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le vecteur nul",
          "stepTheme": "Le vecteur nul",
          "stepBadge": "Le vecteur nul",
          "paragraphText": "Le vecteur $\\vec{AA}$ est le vecteur nul, noté $\\vec 0$. Il a une longueur nulle.\nAttention : c'est un vecteur, pas le nombre $0$ ni le point $A$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p01_q7",
            "type": "mcq",
            "prompt": "Que vaut le vecteur $\\vec{AA}$ ?",
            "options": [
              "Le vecteur nul $\\vec 0$",
              "Un vecteur unitaire",
              "Le point $A$",
              "Le nombre $0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\vec{AA}=\\vec 0$, vecteur de longueur nulle."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p01_q1",
          "type": "mcq",
          "prompt": "Quelles sont les trois caractéristiques d'un vecteur non nul ?",
          "options": [
            "Son origine, son milieu et son extrémité",
            "Son abscisse, son ordonnée et son nom",
            "Sa direction, son sens et sa longueur",
            "Sa longueur, sa largeur et son aire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Deux vecteurs sont égaux quand ces trois caractéristiques sont les mêmes."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p01_q2",
          "type": "mcq",
          "prompt": "Quelle est la direction du vecteur $\\vec{AB}$ ?",
          "options": [
            "Celle de la droite $(AB)$",
            "Celle de la perpendiculaire à $(AB)$",
            "Celle de l'axe des abscisses",
            "Celle de la médiatrice de $[AB]$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le vecteur « suit » la droite $(AB)$."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p01_q3",
          "type": "mcq",
          "prompt": "Que peut-on dire de $\\vec{AB}$ et $\\vec{BA}$ ?",
          "options": [
            "Même direction, même sens, même longueur",
            "Directions différentes, même longueur",
            "Même sens, longueurs différentes",
            "Même direction, même longueur, sens contraires"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ce sont des vecteurs opposés : $\\vec{BA}=-\\vec{AB}$."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p01_q4",
          "type": "mcq",
          "prompt": "Combien de représentants un vecteur non nul possède-t-il ?",
          "options": [
            "Un seul",
            "Une infinité",
            "Deux",
            "Quatre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On peut « placer » le vecteur à partir de n'importe quel point."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p01_q5",
          "type": "mcq",
          "prompt": "$ABCD$ est un parallélogramme. Quelle égalité est vraie ?",
          "options": [
            "$\\vec{AB}=\\vec{CD}$",
            "$\\vec{AB}=\\vec{DC}$",
            "$\\vec{AB}=\\vec{AD}$",
            "$\\vec{AC}=\\vec{BD}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\vec{CD}$ a le sens contraire : $\\vec{CD}=-\\vec{AB}$."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p01_q6",
          "type": "mcq",
          "prompt": "On donne un point $O$ et un vecteur $\\vec u$. Combien de points $M$ vérifient $\\vec{OM}=\\vec u$ ?",
          "options": [
            "Aucun",
            "Deux",
            "Une infinité",
            "Un et un seul"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est ce qui permet de construire un point à partir d'un vecteur."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p01_q7",
          "type": "mcq",
          "prompt": "Que vaut le vecteur $\\vec{AA}$ ?",
          "options": [
            "Le vecteur nul $\\vec 0$",
            "Un vecteur unitaire",
            "Le point $A$",
            "Le nombre $0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\vec{AA}=\\vec 0$, vecteur de longueur nulle."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p02",
      "order": 2,
      "title": "Norme et vecteur unitaire",
      "summary": "La longueur d'un vecteur et ses propriétés.",
      "conceptExplanation": "La norme du vecteur $\\vec u$ est la longueur $AB$ d'un de ses représentants $(A\\,;B)$. On la note $\\|\\vec u\\|$ : $\\|\\vec u\\|=AB$.\n\nExemple : $ABC$ est rectangle en $A$ avec $AB=3$ et $AC=4$. Alors $\\|\\vec{AB}\\|=3$, $\\|\\vec{AC}\\|=4$ et, par Pythagore, $\\|\\vec{BC}\\|=\\sqrt{3^2+4^2}=\\sqrt{25}=5$.\n\nPropriétés : pour tous vecteurs $\\vec u$ et $\\vec v$ :\n- $\\|\\vec u\\|\\ge 0$ ;\n- $\\|\\vec u\\|=0 \\iff \\vec u=\\vec 0$ ;\n- $\\|-\\vec u\\|=\\|\\vec u\\|$ ;\n- $\\|\\vec u+\\vec v\\|\\le\\|\\vec u\\|+\\|\\vec v\\|$ (inégalité triangulaire).\n\nUn vecteur unitaire est un vecteur de norme $1$. Si $\\vec v\\neq\\vec 0$, le vecteur $\\dfrac{\\vec v}{\\|\\vec v\\|}$ est unitaire.\n\nAttention : deux vecteurs de même norme ne sont pas forcément égaux.",
      "keyRule": "$\\|\\vec{AB}\\|=AB$. $\\|-\\vec u\\|=\\|\\vec u\\|$ ; $\\|\\vec u+\\vec v\\|\\le\\|\\vec u\\|+\\|\\vec v\\|$. Unitaire : norme $1$ ; $\\dfrac{\\vec v}{\\|\\vec v\\|}$ est unitaire.",
      "formulas": [],
      "workedExample": {
        "title": "Fabriquer un vecteur unitaire",
        "statement": "Sur un quadrillage, $\\vec u$ avance de $1$ carreau en largeur et de $2$ en hauteur. Calcule $\\|\\vec u\\|$ et donne un vecteur unitaire.",
        "methodSteps": [
          "Par Pythagore : $\\|\\vec u\\|=\\sqrt{1^2+2^2}=\\sqrt5$.",
          "On divise $\\vec u$ par sa norme."
        ],
        "conclusion": "$\\dfrac{1}{\\sqrt5}\\vec u$ est un vecteur unitaire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La norme",
          "stepTheme": "La norme",
          "stepBadge": "La norme",
          "paragraphText": "La norme de $\\vec u$ est la longueur d'un de ses représentants : si $\\vec u=\\vec{AB}$, alors $\\|\\vec u\\|=AB$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p02_q1",
            "type": "mcq",
            "prompt": "Si $\\vec u=\\vec{AB}$, que vaut $\\|\\vec u\\|$ ?",
            "options": [
              "Le milieu de $[AB]$",
              "Le double de $AB$",
              "La distance $AB$",
              "La droite $(AB)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La norme est une longueur, donc un nombre positif."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Avec Pythagore",
          "stepTheme": "Avec Pythagore",
          "stepBadge": "Avec Pythagore",
          "paragraphText": "$ABC$ est rectangle en $A$, $AB=3$, $AC=4$.\n$\\|\\vec{BC}\\|=BC=\\sqrt{3^2+4^2}=\\sqrt{25}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p02_q2",
            "type": "mcq",
            "prompt": "$ABC$ est rectangle en $A$ avec $AB=3$ et $AC=4$. Que vaut $\\|\\vec{BC}\\|$ ?",
            "options": [
              "$7$",
              "$1$",
              "$12$",
              "$5$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\sqrt{9+16}=\\sqrt{25}=5$. On n'additionne pas les longueurs des côtés."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Norme de l'opposé",
          "stepTheme": "Norme de l'opposé",
          "stepBadge": "Norme de l'opposé",
          "paragraphText": "Un vecteur et son opposé ont la même norme : $\\|-\\vec u\\|=\\|\\vec u\\|$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p02_q3",
            "type": "mcq",
            "prompt": "$\\|\\vec u\\|=2$. Que vaut $\\|-\\vec u\\|$ ?",
            "options": [
              "$-2$",
              "$0$",
              "$2$",
              "$\\dfrac12$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une norme n'est jamais négative."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'inégalité triangulaire",
          "stepTheme": "L'inégalité triangulaire",
          "stepBadge": "L'inégalité triangulaire",
          "paragraphText": "Pour tous vecteurs $\\vec u$ et $\\vec v$ : $\\|\\vec u+\\vec v\\|\\le\\|\\vec u\\|+\\|\\vec v\\|$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p02_q4",
            "type": "mcq",
            "prompt": "$\\|\\vec u\\|=2$ et $\\|\\vec v\\|=0{,}5$. Quel encadrement est toujours vrai ?",
            "options": [
              "$\\|\\vec u+\\vec v\\|=2{,}5$",
              "$0\\le\\|\\vec u+\\vec v\\|\\le 2{,}5$",
              "$\\|\\vec u+\\vec v\\|\\ge 2{,}5$",
              "$2\\le\\|\\vec u+\\vec v\\|\\le 3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La norme de la somme ne dépasse jamais la somme des normes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Vecteur unitaire",
          "stepTheme": "Vecteur unitaire",
          "stepBadge": "Vecteur unitaire",
          "paragraphText": "Un vecteur unitaire est un vecteur de norme $1$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p02_q5",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'un vecteur unitaire ?",
            "options": [
              "Un vecteur de norme $1$",
              "Un vecteur de norme $0$",
              "Un vecteur horizontal",
              "Un vecteur égal à son opposé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Unitaire = de longueur une unité."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Rendre unitaire",
          "stepTheme": "Rendre unitaire",
          "stepBadge": "Rendre unitaire",
          "paragraphText": "Si $\\vec v\\neq\\vec 0$, le vecteur $\\dfrac{\\vec v}{\\|\\vec v\\|}$ est unitaire : on divise le vecteur par sa norme.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p02_q6",
            "type": "mcq",
            "prompt": "$\\|\\vec u\\|=\\sqrt5$. Quel vecteur est unitaire ?",
            "options": [
              "$\\dfrac{1}{\\sqrt5}\\vec u$",
              "$\\sqrt5\\,\\vec u$",
              "$5\\,\\vec u$",
              "$\\dfrac15\\vec u$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\left\\|\\dfrac{1}{\\sqrt5}\\vec u\\right\\|=\\dfrac{\\sqrt5}{\\sqrt5}=1$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Même norme, pas égaux",
          "stepTheme": "Même norme, pas égaux",
          "stepBadge": "Même norme, pas égaux",
          "paragraphText": "Deux vecteurs de même norme ne sont pas forcément égaux : ils peuvent avoir des directions ou des sens différents.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p02_q7",
            "type": "mcq",
            "prompt": "$\\|\\vec u\\|=\\|\\vec v\\|$. Peut-on conclure que $\\vec u=\\vec v$ ?",
            "options": [
              "Oui, toujours",
              "Non, leurs directions ou leurs sens peuvent différer",
              "Oui, si leur norme vaut $1$",
              "Non, deux vecteurs ne sont jamais égaux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Exemple : $\\vec u$ et $-\\vec u$ ont la même norme mais ne sont pas égaux."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p02_q1",
          "type": "mcq",
          "prompt": "Si $\\vec u=\\vec{AB}$, que vaut $\\|\\vec u\\|$ ?",
          "options": [
            "Le milieu de $[AB]$",
            "Le double de $AB$",
            "La distance $AB$",
            "La droite $(AB)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La norme est une longueur, donc un nombre positif."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p02_q2",
          "type": "mcq",
          "prompt": "$ABC$ est rectangle en $A$ avec $AB=3$ et $AC=4$. Que vaut $\\|\\vec{BC}\\|$ ?",
          "options": [
            "$7$",
            "$1$",
            "$12$",
            "$5$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\sqrt{9+16}=\\sqrt{25}=5$. On n'additionne pas les longueurs des côtés."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p02_q3",
          "type": "mcq",
          "prompt": "$\\|\\vec u\\|=2$. Que vaut $\\|-\\vec u\\|$ ?",
          "options": [
            "$-2$",
            "$0$",
            "$2$",
            "$\\dfrac12$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une norme n'est jamais négative."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p02_q4",
          "type": "mcq",
          "prompt": "$\\|\\vec u\\|=2$ et $\\|\\vec v\\|=0{,}5$. Quel encadrement est toujours vrai ?",
          "options": [
            "$\\|\\vec u+\\vec v\\|=2{,}5$",
            "$0\\le\\|\\vec u+\\vec v\\|\\le 2{,}5$",
            "$\\|\\vec u+\\vec v\\|\\ge 2{,}5$",
            "$2\\le\\|\\vec u+\\vec v\\|\\le 3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La norme de la somme ne dépasse jamais la somme des normes."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p02_q5",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un vecteur unitaire ?",
          "options": [
            "Un vecteur de norme $1$",
            "Un vecteur de norme $0$",
            "Un vecteur horizontal",
            "Un vecteur égal à son opposé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Unitaire = de longueur une unité."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p02_q6",
          "type": "mcq",
          "prompt": "$\\|\\vec u\\|=\\sqrt5$. Quel vecteur est unitaire ?",
          "options": [
            "$\\dfrac{1}{\\sqrt5}\\vec u$",
            "$\\sqrt5\\,\\vec u$",
            "$5\\,\\vec u$",
            "$\\dfrac15\\vec u$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\left\\|\\dfrac{1}{\\sqrt5}\\vec u\\right\\|=\\dfrac{\\sqrt5}{\\sqrt5}=1$."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p02_q7",
          "type": "mcq",
          "prompt": "$\\|\\vec u\\|=\\|\\vec v\\|$. Peut-on conclure que $\\vec u=\\vec v$ ?",
          "options": [
            "Oui, toujours",
            "Non, leurs directions ou leurs sens peuvent différer",
            "Oui, si leur norme vaut $1$",
            "Non, deux vecteurs ne sont jamais égaux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Exemple : $\\vec u$ et $-\\vec u$ ont la même norme mais ne sont pas égaux."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p03",
      "order": 3,
      "title": "Somme de vecteurs et produit par un réel",
      "summary": "Relation de Chasles, multiplication par un réel, règles de calcul.",
      "conceptExplanation": "1. Somme : si $\\vec u=\\vec{AB}$ et $\\vec v=\\vec{BC}$, alors $\\vec u+\\vec v=\\vec{AC}$. C'est la relation de Chasles : $\\vec{AB}+\\vec{BC}=\\vec{AC}$.\n\n2. Produit par un réel : si $\\vec u\\neq\\vec 0$ et $\\lambda\\neq 0$, le vecteur $\\lambda\\vec u$ a :\n- la direction de $\\vec u$ ;\n- le sens de $\\vec u$ si $\\lambda>0$, le sens contraire si $\\lambda<0$ ;\n- pour norme $|\\lambda|\\,\\|\\vec u\\|$.\nDe plus $\\lambda\\vec 0=\\vec 0$, $0\\,\\vec u=\\vec 0$ et $\\lambda\\vec u=\\vec 0 \\iff \\lambda=0$ ou $\\vec u=\\vec 0$.\n\n3. Règles de calcul (comme avec les nombres) :\n$\\vec u+\\vec v=\\vec v+\\vec u$ ; $(\\lambda+\\mu)\\vec u=\\lambda\\vec u+\\mu\\vec u$ ; $\\lambda(\\vec u+\\vec v)=\\lambda\\vec u+\\lambda\\vec v$ ; $\\lambda(\\mu\\vec u)=(\\lambda\\mu)\\vec u$ ; $\\vec u+(-\\vec u)=\\vec 0$.\n\nExemple : $8\\vec u-2\\vec v+6\\vec w+6\\vec v-2(\\vec u+3\\vec w)=6\\vec u+4\\vec v$.",
      "keyRule": "Chasles : $\\vec{AB}+\\vec{BC}=\\vec{AC}$. $\\lambda\\vec u$ : même direction, sens selon le signe de $\\lambda$, norme $|\\lambda|\\,\\|\\vec u\\|$. On développe et on regroupe comme en algèbre.",
      "formulas": [],
      "workedExample": {
        "title": "Simplifier une expression",
        "statement": "Simplifie $\\vec a=8\\vec u-2\\vec v+6\\vec w+6\\vec v-2(\\vec u+3\\vec w)$.",
        "methodSteps": [
          "On développe : $-2(\\vec u+3\\vec w)=-2\\vec u-6\\vec w$.",
          "On regroupe : $(8-2)\\vec u+(-2+6)\\vec v+(6-6)\\vec w$."
        ],
        "conclusion": "$\\vec a=6\\vec u+4\\vec v$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La relation de Chasles",
          "stepTheme": "La relation de Chasles",
          "stepBadge": "La relation de Chasles",
          "paragraphText": "Pour tous points $A$, $B$, $C$ : $\\vec{AB}+\\vec{BC}=\\vec{AC}$.\nL'extrémité du premier vecteur est l'origine du second.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p03_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\vec{AB}+\\vec{BC}$ ?",
            "options": [
              "$\\vec{CA}$",
              "$\\vec{BA}$",
              "$\\vec{AC}$",
              "$\\vec 0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On « enchaîne » les vecteurs : $A\\to B\\to C$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Enchaîner",
          "stepTheme": "Enchaîner",
          "stepBadge": "Enchaîner",
          "paragraphText": "La relation de Chasles s'applique à plusieurs vecteurs : $\\vec{MA}+\\vec{AN}+\\vec{NP}=\\vec{MP}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p03_q2",
            "type": "mcq",
            "prompt": "Simplifie $\\vec{MA}+\\vec{AN}+\\vec{NP}$.",
            "options": [
              "$\\vec{PM}$",
              "$\\vec{MN}$",
              "$\\vec{AP}$",
              "$\\vec{MP}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$M\\to A\\to N\\to P$ : on va de $M$ à $P$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Norme de $\\lambda\\vec u$",
          "stepTheme": "Norme de $\\lambda\\vec u$",
          "stepBadge": "Norme de $\\lambda\\vec u$",
          "paragraphText": "La norme de $\\lambda\\vec u$ est $|\\lambda|\\,\\|\\vec u\\|$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p03_q3",
            "type": "mcq",
            "prompt": "$\\|\\vec u\\|=3$. Quelle est la norme de $-2\\vec u$ ?",
            "options": [
              "$-6$",
              "$1$",
              "$6$",
              "$5$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$|-2|\\times 3=6$ : une norme est toujours positive."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le sens de $\\lambda\\vec u$",
          "stepTheme": "Le sens de $\\lambda\\vec u$",
          "stepBadge": "Le sens de $\\lambda\\vec u$",
          "paragraphText": "• Si $\\lambda>0$ : $\\lambda\\vec u$ a le sens de $\\vec u$.\n• Si $\\lambda<0$ : $\\lambda\\vec u$ a le sens contraire.\nDans les deux cas, la direction est celle de $\\vec u$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p03_q4",
            "type": "mcq",
            "prompt": "Si $\\lambda<0$, quel est le sens de $\\lambda\\vec u$ ?",
            "options": [
              "Le même sens que $\\vec u$",
              "Un sens perpendiculaire à $\\vec u$",
              "Aucun sens",
              "Le sens contraire de celui de $\\vec u$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Multiplier par un nombre négatif retourne le vecteur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Produit nul",
          "stepTheme": "Produit nul",
          "stepBadge": "Produit nul",
          "paragraphText": "$\\lambda\\vec u=\\vec 0 \\iff \\lambda=0$ ou $\\vec u=\\vec 0$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p03_q5",
            "type": "mcq",
            "prompt": "$\\lambda\\vec u=\\vec 0$ avec $\\vec u\\neq\\vec 0$. Que vaut $\\lambda$ ?",
            "options": [
              "$0$",
              "$1$",
              "$-1$",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme $\\vec u$ n'est pas nul, c'est forcément $\\lambda$ qui est nul."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Développer et regrouper",
          "stepTheme": "Développer et regrouper",
          "stepBadge": "Développer et regrouper",
          "paragraphText": "$\\vec a=8\\vec u-2\\vec v+6\\vec w+6\\vec v-2(\\vec u+3\\vec w)$\n$=8\\vec u-2\\vec v+6\\vec w+6\\vec v-2\\vec u-6\\vec w$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p03_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\vec a=8\\vec u-2\\vec v+6\\vec w+6\\vec v-2(\\vec u+3\\vec w)$ ?",
            "options": [
              "$6\\vec u+4\\vec v+12\\vec w$",
              "$6\\vec u+4\\vec v$",
              "$10\\vec u+4\\vec v$",
              "$6\\vec u-8\\vec v$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les termes en $\\vec w$ s'annulent : $6\\vec w-6\\vec w=\\vec 0$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Attention aux signes",
          "stepTheme": "Attention aux signes",
          "stepBadge": "Attention aux signes",
          "paragraphText": "En développant, chaque signe compte : $-3(4\\vec v-2\\vec w)=-12\\vec v+6\\vec w$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p03_q7",
            "type": "mcq",
            "prompt": "Que vaut $\\vec b=2\\vec u-3(4\\vec v-2\\vec w)-5(3\\vec u+2\\vec v)$ ?",
            "options": [
              "$-13\\vec u-22\\vec v-6\\vec w$",
              "$-13\\vec u-22\\vec v+6\\vec w$",
              "$17\\vec u-2\\vec v+6\\vec w$",
              "$-13\\vec u-2\\vec v+6\\vec w$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$2\\vec u-15\\vec u=-13\\vec u$ ; $-12\\vec v-10\\vec v=-22\\vec v$ ; $(-3)(-2\\vec w)=+6\\vec w$."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p03_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\vec{AB}+\\vec{BC}$ ?",
          "options": [
            "$\\vec{CA}$",
            "$\\vec{BA}$",
            "$\\vec{AC}$",
            "$\\vec 0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On « enchaîne » les vecteurs : $A\\to B\\to C$."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p03_q2",
          "type": "mcq",
          "prompt": "Simplifie $\\vec{MA}+\\vec{AN}+\\vec{NP}$.",
          "options": [
            "$\\vec{PM}$",
            "$\\vec{MN}$",
            "$\\vec{AP}$",
            "$\\vec{MP}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$M\\to A\\to N\\to P$ : on va de $M$ à $P$."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p03_q3",
          "type": "mcq",
          "prompt": "$\\|\\vec u\\|=3$. Quelle est la norme de $-2\\vec u$ ?",
          "options": [
            "$-6$",
            "$1$",
            "$6$",
            "$5$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$|-2|\\times 3=6$ : une norme est toujours positive."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p03_q4",
          "type": "mcq",
          "prompt": "Si $\\lambda<0$, quel est le sens de $\\lambda\\vec u$ ?",
          "options": [
            "Le même sens que $\\vec u$",
            "Un sens perpendiculaire à $\\vec u$",
            "Aucun sens",
            "Le sens contraire de celui de $\\vec u$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Multiplier par un nombre négatif retourne le vecteur."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p03_q5",
          "type": "mcq",
          "prompt": "$\\lambda\\vec u=\\vec 0$ avec $\\vec u\\neq\\vec 0$. Que vaut $\\lambda$ ?",
          "options": [
            "$0$",
            "$1$",
            "$-1$",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme $\\vec u$ n'est pas nul, c'est forcément $\\lambda$ qui est nul."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p03_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\vec a=8\\vec u-2\\vec v+6\\vec w+6\\vec v-2(\\vec u+3\\vec w)$ ?",
          "options": [
            "$6\\vec u+4\\vec v+12\\vec w$",
            "$6\\vec u+4\\vec v$",
            "$10\\vec u+4\\vec v$",
            "$6\\vec u-8\\vec v$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les termes en $\\vec w$ s'annulent : $6\\vec w-6\\vec w=\\vec 0$."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p03_q7",
          "type": "mcq",
          "prompt": "Que vaut $\\vec b=2\\vec u-3(4\\vec v-2\\vec w)-5(3\\vec u+2\\vec v)$ ?",
          "options": [
            "$-13\\vec u-22\\vec v-6\\vec w$",
            "$-13\\vec u-22\\vec v+6\\vec w$",
            "$17\\vec u-2\\vec v+6\\vec w$",
            "$-13\\vec u-2\\vec v+6\\vec w$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$2\\vec u-15\\vec u=-13\\vec u$ ; $-12\\vec v-10\\vec v=-22\\vec v$ ; $(-3)(-2\\vec w)=+6\\vec w$."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p04",
      "order": 4,
      "title": "Combinaisons linéaires et colinéarité",
      "summary": "Écrire un vecteur à l'aide d'autres ; vecteurs colinéaires.",
      "conceptExplanation": "1. Une combinaison linéaire de $\\vec u$ et $\\vec v$ est un vecteur de la forme $\\lambda\\vec u+\\mu\\vec v$, où $\\lambda$ et $\\mu$ sont des réels. Exemples : $2\\vec u-3\\vec v$ ; $\\frac14\\vec u+\\vec v$.\n\n2. Deux vecteurs sont colinéaires si l'un d'eux est nul ou s'ils ont la même direction. Le vecteur nul est colinéaire à tout vecteur.\n\nPropriétés :\n- $\\vec u$ et $\\vec v$ sont colinéaires si et seulement s'il existe un réel $\\lambda$ tel que $\\vec v=\\lambda\\vec u$ (ou $\\vec u=\\lambda\\vec v$) ;\n- si $\\vec u$ et $\\vec v$ ne sont pas colinéaires, alors $\\lambda\\vec u+\\mu\\vec v=\\vec 0 \\Rightarrow \\lambda=\\mu=0$ ;\n- $\\vec u$ et $\\vec v$ sont colinéaires si et seulement s'il existe une combinaison linéaire nulle de $\\vec u$ et $\\vec v$ à coefficients non tous nuls.\n\n3. Applications :\n- $\\vec{AB}$ et $\\vec{AC}$ colinéaires ⇔ $A$, $B$, $C$ alignés ;\n- $\\vec{AB}$ et $\\vec{CD}$ colinéaires ⇔ $(AB)$ et $(CD)$ parallèles.",
      "keyRule": "Colinéaires ⇔ $\\vec v=\\lambda\\vec u$. $\\vec{AB}$, $\\vec{AC}$ colinéaires ⇔ $A$, $B$, $C$ alignés. $\\vec{AB}$, $\\vec{CD}$ colinéaires ⇔ $(AB)\\parallel(CD)$.",
      "formulas": [],
      "workedExample": {
        "title": "Démontrer un parallélisme",
        "statement": "$ABC$ est un triangle, $\\vec{AD}=\\frac13\\vec{AB}$ et $\\vec{CE}=-2\\vec{CA}$. Démontre que $(BE)\\parallel(CD)$.",
        "methodSteps": [
          "$\\vec{CE}=2\\vec{AC}$ donc $\\vec{AE}=\\vec{AC}+\\vec{CE}=3\\vec{AC}$, soit $\\vec{AC}=\\frac13\\vec{AE}$.",
          "$\\vec{AD}+\\vec{DC}=\\frac13(\\vec{AB}+\\vec{BE})=\\frac13\\vec{AB}+\\frac13\\vec{BE}$, donc $\\vec{DC}=\\frac13\\vec{BE}$."
        ],
        "conclusion": "$\\vec{DC}$ et $\\vec{BE}$ sont colinéaires : $(BE)\\parallel(CD)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Combinaison linéaire",
          "stepTheme": "Combinaison linéaire",
          "stepBadge": "Combinaison linéaire",
          "paragraphText": "Une combinaison linéaire de $\\vec u$ et $\\vec v$ est un vecteur de la forme $\\lambda\\vec u+\\mu\\vec v$, avec $\\lambda$ et $\\mu$ réels.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p04_q1",
            "type": "mcq",
            "prompt": "Lequel de ces vecteurs est une combinaison linéaire de $\\vec u$ et $\\vec v$ ?",
            "options": [
              "$2\\vec u-3\\vec v$",
              "$\\|\\vec u\\|+\\|\\vec v\\|$",
              "$\\vec u\\times\\vec v$",
              "$\\|\\vec u\\|\\,\\vec v-1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un réel fois $\\vec u$ plus un réel fois $\\vec v$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Exprimer un vecteur",
          "stepTheme": "Exprimer un vecteur",
          "stepBadge": "Exprimer un vecteur",
          "paragraphText": "$\\vec u=2\\vec a+\\vec b$ et $\\vec v=-\\vec a-2\\vec b$.\nOn élimine $\\vec b$ : $2\\vec u+\\vec v=4\\vec a+2\\vec b-\\vec a-2\\vec b=3\\vec a$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p04_q2",
            "type": "mcq",
            "prompt": "$\\vec u=2\\vec a+\\vec b$ et $\\vec v=-\\vec a-2\\vec b$. Exprime $\\vec a$ en fonction de $\\vec u$ et $\\vec v$.",
            "options": [
              "$\\vec a=\\dfrac13\\vec u+\\dfrac23\\vec v$",
              "$\\vec a=2\\vec u+\\vec v$",
              "$\\vec a=\\dfrac23\\vec u-\\dfrac13\\vec v$",
              "$\\vec a=\\dfrac23\\vec u+\\dfrac13\\vec v$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$3\\vec a=2\\vec u+\\vec v$ donc $\\vec a=\\frac23\\vec u+\\frac13\\vec v$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Vecteurs colinéaires",
          "stepTheme": "Vecteurs colinéaires",
          "stepBadge": "Vecteurs colinéaires",
          "paragraphText": "Deux vecteurs non nuls sont colinéaires s'ils ont la même direction.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p04_q3",
            "type": "mcq",
            "prompt": "Quand deux vecteurs non nuls sont-ils colinéaires ?",
            "options": [
              "Quand ils ont la même norme",
              "Quand ils sont perpendiculaires",
              "Quand ils ont la même direction",
              "Quand ils ont la même origine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le sens peut être le même ou contraire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "$\\vec v=\\lambda\\vec u$",
          "stepTheme": "$\\vec v=\\lambda\\vec u$",
          "stepBadge": "$\\vec v=\\lambda\\vec u$",
          "paragraphText": "$\\vec u$ et $\\vec v$ sont colinéaires si et seulement s'il existe un réel $\\lambda$ tel que $\\vec v=\\lambda\\vec u$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p04_q4",
            "type": "mcq",
            "prompt": "Que peut-on dire de $\\vec u$ et $-2\\vec u$ (avec $\\vec u\\neq\\vec 0$) ?",
            "options": [
              "Ils sont colinéaires, de même sens",
              "Ils ne sont pas colinéaires",
              "Ils sont colinéaires, de sens contraires",
              "Ils sont orthogonaux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$-2\\vec u=\\lambda\\vec u$ avec $\\lambda=-2<0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Parallélisme",
          "stepTheme": "Parallélisme",
          "stepBadge": "Parallélisme",
          "paragraphText": "Si $\\vec{DC}=\\frac13\\vec{BE}$, les vecteurs sont colinéaires, donc les droites $(DC)$ et $(BE)$ sont parallèles.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p04_q5",
            "type": "mcq",
            "prompt": "$\\vec{DC}=\\dfrac13\\vec{BE}$. Que peut-on conclure ?",
            "options": [
              "$(DC)$ et $(BE)$ sont parallèles",
              "$D$, $C$ et $E$ sont alignés",
              "$(DC)$ et $(BE)$ sont perpendiculaires",
              "$DC=3\\,BE$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Colinéarité de deux vecteurs ⇒ parallélisme des droites."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Vecteurs non colinéaires",
          "stepTheme": "Vecteurs non colinéaires",
          "stepBadge": "Vecteurs non colinéaires",
          "paragraphText": "Si $\\vec u$ et $\\vec v$ ne sont pas colinéaires, alors $\\lambda\\vec u+\\mu\\vec v=\\vec 0$ impose $\\lambda=\\mu=0$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p04_q6",
            "type": "mcq",
            "prompt": "$A$, $B$, $C$ ne sont pas alignés et $\\lambda\\vec{AB}+\\mu\\vec{AC}=\\vec 0$. Que valent $\\lambda$ et $\\mu$ ?",
            "options": [
              "$\\lambda=\\mu=1$",
              "$\\lambda=-\\mu$, quelconques",
              "$\\lambda=1$ et $\\mu=-1$",
              "$\\lambda=\\mu=0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\vec{AB}$ et $\\vec{AC}$ ne sont pas colinéaires."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le vecteur nul",
          "stepTheme": "Le vecteur nul",
          "stepBadge": "Le vecteur nul",
          "paragraphText": "Par convention, le vecteur nul est colinéaire à tout vecteur.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p04_q7",
            "type": "mcq",
            "prompt": "Le vecteur nul est-il colinéaire à un vecteur $\\vec u$ quelconque ?",
            "options": [
              "Non, car il n'a pas de direction",
              "Oui, il est colinéaire à tout vecteur",
              "Seulement si $\\vec u$ est unitaire",
              "Seulement si $\\vec u$ est nul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\vec 0=0\\,\\vec u$ : il s'écrit $\\lambda\\vec u$ avec $\\lambda=0$."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p04_q1",
          "type": "mcq",
          "prompt": "Lequel de ces vecteurs est une combinaison linéaire de $\\vec u$ et $\\vec v$ ?",
          "options": [
            "$2\\vec u-3\\vec v$",
            "$\\|\\vec u\\|+\\|\\vec v\\|$",
            "$\\vec u\\times\\vec v$",
            "$\\|\\vec u\\|\\,\\vec v-1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un réel fois $\\vec u$ plus un réel fois $\\vec v$."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p04_q2",
          "type": "mcq",
          "prompt": "$\\vec u=2\\vec a+\\vec b$ et $\\vec v=-\\vec a-2\\vec b$. Exprime $\\vec a$ en fonction de $\\vec u$ et $\\vec v$.",
          "options": [
            "$\\vec a=\\dfrac13\\vec u+\\dfrac23\\vec v$",
            "$\\vec a=2\\vec u+\\vec v$",
            "$\\vec a=\\dfrac23\\vec u-\\dfrac13\\vec v$",
            "$\\vec a=\\dfrac23\\vec u+\\dfrac13\\vec v$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$3\\vec a=2\\vec u+\\vec v$ donc $\\vec a=\\frac23\\vec u+\\frac13\\vec v$."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p04_q3",
          "type": "mcq",
          "prompt": "Quand deux vecteurs non nuls sont-ils colinéaires ?",
          "options": [
            "Quand ils ont la même norme",
            "Quand ils sont perpendiculaires",
            "Quand ils ont la même direction",
            "Quand ils ont la même origine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le sens peut être le même ou contraire."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p04_q4",
          "type": "mcq",
          "prompt": "Que peut-on dire de $\\vec u$ et $-2\\vec u$ (avec $\\vec u\\neq\\vec 0$) ?",
          "options": [
            "Ils sont colinéaires, de même sens",
            "Ils ne sont pas colinéaires",
            "Ils sont colinéaires, de sens contraires",
            "Ils sont orthogonaux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$-2\\vec u=\\lambda\\vec u$ avec $\\lambda=-2<0$."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p04_q5",
          "type": "mcq",
          "prompt": "$\\vec{DC}=\\dfrac13\\vec{BE}$. Que peut-on conclure ?",
          "options": [
            "$(DC)$ et $(BE)$ sont parallèles",
            "$D$, $C$ et $E$ sont alignés",
            "$(DC)$ et $(BE)$ sont perpendiculaires",
            "$DC=3\\,BE$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Colinéarité de deux vecteurs ⇒ parallélisme des droites."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p04_q6",
          "type": "mcq",
          "prompt": "$A$, $B$, $C$ ne sont pas alignés et $\\lambda\\vec{AB}+\\mu\\vec{AC}=\\vec 0$. Que valent $\\lambda$ et $\\mu$ ?",
          "options": [
            "$\\lambda=\\mu=1$",
            "$\\lambda=-\\mu$, quelconques",
            "$\\lambda=1$ et $\\mu=-1$",
            "$\\lambda=\\mu=0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\vec{AB}$ et $\\vec{AC}$ ne sont pas colinéaires."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p04_q7",
          "type": "mcq",
          "prompt": "Le vecteur nul est-il colinéaire à un vecteur $\\vec u$ quelconque ?",
          "options": [
            "Non, car il n'a pas de direction",
            "Oui, il est colinéaire à tout vecteur",
            "Seulement si $\\vec u$ est unitaire",
            "Seulement si $\\vec u$ est nul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\vec 0=0\\,\\vec u$ : il s'écrit $\\lambda\\vec u$ avec $\\lambda=0$."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p05",
      "order": 5,
      "title": "Centre de gravité, vecteur directeur, mesure algébrique",
      "summary": "Trois outils pour travailler avec des points et des droites.",
      "conceptExplanation": "1. Centre de gravité : le centre de gravité d'un triangle $ABC$ est l'unique point $G$ tel que $\\vec{GA}+\\vec{GB}+\\vec{GC}=\\vec 0$. Si $A'$ est le milieu de $[BC]$, alors $\\vec{AG}=\\frac23\\vec{AA'}$.\n\n2. Vecteur directeur : un vecteur directeur d'une droite $(D)$ est un vecteur non nul qui a la direction de $(D)$. Si $\\vec u$ dirige $(D)$, alors $k\\vec u$ ($k\\neq 0$) la dirige aussi : une droite a une infinité de vecteurs directeurs. Si $A$ et $B$ sont deux points distincts de $(D)$, $\\vec{AB}$ dirige $(D)$.\n\n3. Mesure algébrique : sur une droite orientée de repère $(O\\,;\\vec i)$ avec $\\|\\vec i\\|=1$, la mesure algébrique $\\overline{AB}$ est l'unique réel tel que $\\vec{AB}=\\overline{AB}\\,\\vec i$. Elle peut être positive, négative ou nulle ; elle vaut (abscisse de $B$) − (abscisse de $A$).\nPropriétés : $\\overline{BA}=-\\overline{AB}$ ; $|\\overline{AB}|=AB$ ; $\\overline{AB}+\\overline{BC}=\\overline{AC}$ (Chasles, pour des points alignés).\nAttention : $AB+BC=AC$ (avec des longueurs) n'est vrai que si $B\\in[AC]$.",
      "keyRule": "$G$ : $\\vec{GA}+\\vec{GB}+\\vec{GC}=\\vec 0$ et $\\vec{AG}=\\frac23\\vec{AA'}$. Vecteur directeur : non nul, de même direction. $\\overline{AB}=x_B-x_A$ ; $\\overline{AB}+\\overline{BC}=\\overline{AC}$.",
      "formulas": [],
      "workedExample": {
        "title": "Lire des mesures algébriques",
        "statement": "Sur une droite graduée, $B$ a pour abscisse $-1$, $A$ a pour abscisse $4$ et $C$ a pour abscisse $7$. Calcule $\\overline{AB}$ et $\\overline{CA}$.",
        "methodSteps": [
          "$\\overline{AB}=x_B-x_A=-1-4=-5$.",
          "$\\overline{CA}=x_A-x_C=4-7=-3$."
        ],
        "conclusion": "$\\overline{AB}=-5$ et $\\overline{CA}=-3$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le centre de gravité",
          "stepTheme": "Le centre de gravité",
          "stepBadge": "Le centre de gravité",
          "paragraphText": "$G$ est le centre de gravité de $ABC$ si et seulement si $\\vec{GA}+\\vec{GB}+\\vec{GC}=\\vec 0$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p05_q1",
            "type": "mcq",
            "prompt": "$G$ est le centre de gravité de $ABC$. Que vaut $\\vec{GA}+\\vec{GB}+\\vec{GC}$ ?",
            "options": [
              "$\\vec{AB}$",
              "$\\vec 0$",
              "$3\\,\\vec{GA}$",
              "$\\vec{AG}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la caractérisation vectorielle du centre de gravité."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Aux deux tiers",
          "stepTheme": "Aux deux tiers",
          "stepBadge": "Aux deux tiers",
          "paragraphText": "Si $A'$ est le milieu de $[BC]$, le centre de gravité $G$ vérifie $\\vec{AG}=\\frac23\\vec{AA'}$ (et $\\vec{GA'}=\\frac13\\vec{AA'}$).",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p05_q2",
            "type": "mcq",
            "prompt": "$A'$ est le milieu de $[BC]$ et $G$ le centre de gravité de $ABC$. Quelle égalité est vraie ?",
            "options": [
              "$\\vec{AG}=\\dfrac13\\vec{AA'}$",
              "$\\vec{AG}=\\dfrac12\\vec{AA'}$",
              "$\\vec{AG}=\\vec{AA'}$",
              "$\\vec{AG}=\\dfrac23\\vec{AA'}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$G$ est situé aux deux tiers de la médiane en partant du sommet."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Vecteur directeur",
          "stepTheme": "Vecteur directeur",
          "stepBadge": "Vecteur directeur",
          "paragraphText": "Un vecteur directeur d'une droite $(D)$ est un vecteur non nul qui a la direction de $(D)$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p05_q3",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'un vecteur directeur d'une droite $(D)$ ?",
            "options": [
              "Un vecteur non nul ayant la direction de $(D)$",
              "Un vecteur perpendiculaire à $(D)$",
              "Le vecteur nul porté par $(D)$",
              "N'importe quel vecteur de norme $1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il « indique » la direction de la droite."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Une infinité",
          "stepTheme": "Une infinité",
          "stepBadge": "Une infinité",
          "paragraphText": "Si $\\vec u$ dirige $(D)$, alors $k\\vec u$ dirige aussi $(D)$ pour tout réel $k\\neq 0$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p05_q4",
            "type": "mcq",
            "prompt": "$\\vec u$ dirige la droite $(D)$. Lequel de ces vecteurs dirige aussi $(D)$ ?",
            "options": [
              "$\\vec 0$",
              "$\\vec u+\\vec v$, pour $\\vec v$ quelconque",
              "$-3\\vec u$",
              "Un vecteur orthogonal à $\\vec u$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$-3\\vec u$ est non nul et colinéaire à $\\vec u$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Mesure algébrique",
          "stepTheme": "Mesure algébrique",
          "stepBadge": "Mesure algébrique",
          "paragraphText": "Sur une droite de repère $(O\\,;\\vec i)$, $\\overline{AB}$ est le réel tel que $\\vec{AB}=\\overline{AB}\\,\\vec i$.\nIl vaut : abscisse de $B$ − abscisse de $A$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p05_q5",
            "type": "mcq",
            "prompt": "Sur une droite graduée, $R$ a pour abscisse $3$ et $O$ pour abscisse $0$. Que vaut $\\overline{RO}$ ?",
            "options": [
              "$3$",
              "$0$",
              "$6$",
              "$-3$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\overline{RO}=0-3=-3$ : $\\vec{RO}$ va dans le sens contraire de $\\vec i$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Lire sur une droite",
          "stepTheme": "Lire sur une droite",
          "stepBadge": "Lire sur une droite",
          "paragraphText": "$B$ a pour abscisse $-1$ et $A$ pour abscisse $4$.\n$\\overline{AB}=x_B-x_A$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p05_q6",
            "type": "mcq",
            "prompt": "$A$ a pour abscisse $4$ et $B$ pour abscisse $-1$. Que vaut $\\overline{AB}$ ?",
            "options": [
              "$5$",
              "$-3$",
              "$-5$",
              "$3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$-1-4=-5$ : on va de $A$ vers $B$, dans le sens négatif."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Chasles avec des mesures",
          "stepTheme": "Chasles avec des mesures",
          "stepBadge": "Chasles avec des mesures",
          "paragraphText": "Pour $A$, $B$, $C$ alignés, $\\overline{AB}+\\overline{BC}=\\overline{AC}$ est toujours vrai.\nMais $AB+BC=AC$ (longueurs) n'est vrai que si $B\\in[AC]$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p05_q7",
            "type": "mcq",
            "prompt": "$A$, $B$, $C$ sont alignés. Quelle égalité est toujours vraie ?",
            "options": [
              "$AB+BC=AC$",
              "$\\overline{AB}+\\overline{BC}=\\overline{AC}$",
              "$\\overline{AB}=\\overline{BA}$",
              "$AB=\\overline{AB}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les mesures algébriques tiennent compte du sens, pas les longueurs."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p05_q1",
          "type": "mcq",
          "prompt": "$G$ est le centre de gravité de $ABC$. Que vaut $\\vec{GA}+\\vec{GB}+\\vec{GC}$ ?",
          "options": [
            "$\\vec{AB}$",
            "$\\vec 0$",
            "$3\\,\\vec{GA}$",
            "$\\vec{AG}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la caractérisation vectorielle du centre de gravité."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p05_q2",
          "type": "mcq",
          "prompt": "$A'$ est le milieu de $[BC]$ et $G$ le centre de gravité de $ABC$. Quelle égalité est vraie ?",
          "options": [
            "$\\vec{AG}=\\dfrac13\\vec{AA'}$",
            "$\\vec{AG}=\\dfrac12\\vec{AA'}$",
            "$\\vec{AG}=\\vec{AA'}$",
            "$\\vec{AG}=\\dfrac23\\vec{AA'}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$G$ est situé aux deux tiers de la médiane en partant du sommet."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p05_q3",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un vecteur directeur d'une droite $(D)$ ?",
          "options": [
            "Un vecteur non nul ayant la direction de $(D)$",
            "Un vecteur perpendiculaire à $(D)$",
            "Le vecteur nul porté par $(D)$",
            "N'importe quel vecteur de norme $1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il « indique » la direction de la droite."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p05_q4",
          "type": "mcq",
          "prompt": "$\\vec u$ dirige la droite $(D)$. Lequel de ces vecteurs dirige aussi $(D)$ ?",
          "options": [
            "$\\vec 0$",
            "$\\vec u+\\vec v$, pour $\\vec v$ quelconque",
            "$-3\\vec u$",
            "Un vecteur orthogonal à $\\vec u$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$-3\\vec u$ est non nul et colinéaire à $\\vec u$."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p05_q5",
          "type": "mcq",
          "prompt": "Sur une droite graduée, $R$ a pour abscisse $3$ et $O$ pour abscisse $0$. Que vaut $\\overline{RO}$ ?",
          "options": [
            "$3$",
            "$0$",
            "$6$",
            "$-3$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\overline{RO}=0-3=-3$ : $\\vec{RO}$ va dans le sens contraire de $\\vec i$."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p05_q6",
          "type": "mcq",
          "prompt": "$A$ a pour abscisse $4$ et $B$ pour abscisse $-1$. Que vaut $\\overline{AB}$ ?",
          "options": [
            "$5$",
            "$-3$",
            "$-5$",
            "$3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$-1-4=-5$ : on va de $A$ vers $B$, dans le sens négatif."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p05_q7",
          "type": "mcq",
          "prompt": "$A$, $B$, $C$ sont alignés. Quelle égalité est toujours vraie ?",
          "options": [
            "$AB+BC=AC$",
            "$\\overline{AB}+\\overline{BC}=\\overline{AC}$",
            "$\\overline{AB}=\\overline{BA}$",
            "$AB=\\overline{AB}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les mesures algébriques tiennent compte du sens, pas les longueurs."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p06",
      "order": 6,
      "title": "Bases, coordonnées, déterminant et repères",
      "summary": "Calculer avec des coordonnées.",
      "conceptExplanation": "1. Base : tout couple $(\\vec i,\\vec j)$ de vecteurs non colinéaires est une base de $\\mathcal{V}$. Elle est orthonormée si $\\vec i\\perp\\vec j$ et $\\|\\vec i\\|=\\|\\vec j\\|=1$.\n\n2. Coordonnées : pour tout vecteur $\\vec u$, il existe un unique couple $(x\\,;y)$ tel que $\\vec u=x\\vec i+y\\vec j$. On note $\\vec u(x\\,;y)$.\nSi $\\vec u(x\\,;y)$ et $\\vec u'(x'\\,;y')$ : $\\vec u+\\vec u'(x+x'\\,;y+y')$ et $\\lambda\\vec u(\\lambda x\\,;\\lambda y)$.\nDans une base orthonormée seulement : $\\|\\vec u\\|=\\sqrt{x^2+y^2}$.\n\n3. Déterminant : $\\det(\\vec u,\\vec u')=xy'-yx'$.\n- $\\vec u$ et $\\vec u'$ colinéaires ⇔ $\\det(\\vec u,\\vec u')=0$ ;\n- $(\\vec u,\\vec u')$ est une base ⇔ $\\det(\\vec u,\\vec u')\\neq 0$.\n\n4. Repère : $(O,\\vec i,\\vec j)$ où $O$ est un point et $(\\vec i,\\vec j)$ une base. Les coordonnées d'un vecteur se lisent dans une base, celles d'un point dans un repère.\nPour $A(x_A\\,;y_A)$, $B(x_B\\,;y_B)$, $C(x_C\\,;y_C)$ :\n- $\\vec{AB}(x_B-x_A\\,;y_B-y_A)$ ;\n- milieu de $[AB]$ : $\\left(\\frac{x_A+x_B}{2}\\,;\\frac{y_A+y_B}{2}\\right)$ ;\n- centre de gravité de $ABC$ : $\\left(\\frac{x_A+x_B+x_C}{3}\\,;\\frac{y_A+y_B+y_C}{3}\\right)$.\nTrois points $A$, $B$, $M$ sont alignés ⇔ $\\det(\\vec{AM},\\vec{AB})=0$.",
      "keyRule": "$\\vec u(x;y)$ ⇔ $\\vec u=x\\vec i+y\\vec j$. $\\det(\\vec u,\\vec u')=xy'-yx'$ : nul ⇔ colinéaires ; non nul ⇔ base. $\\vec{AB}(x_B-x_A;y_B-y_A)$. Base orthonormée : $\\|\\vec u\\|=\\sqrt{x^2+y^2}$.",
      "formulas": [],
      "workedExample": {
        "title": "Démontrer un alignement",
        "statement": "$A(2\\,;3)$ et $B(4\\,;1)$. Trouve $x$ pour que $M(25\\,;x)$ soit aligné avec $A$ et $B$.",
        "methodSteps": [
          "$\\vec{AM}(23\\,;x-3)$ et $\\vec{AB}(2\\,;-2)$.",
          "$\\det(\\vec{AM},\\vec{AB})=23\\times(-2)-(x-3)\\times 2=-46-2x+6=-2x-40$.",
          "Alignés ⇔ $-2x-40=0$ ⇔ $x=-20$."
        ],
        "conclusion": "$M$ est aligné avec $A$ et $B$ pour $x=-20$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une base",
          "stepTheme": "Une base",
          "stepBadge": "Une base",
          "paragraphText": "Tout couple $(\\vec i,\\vec j)$ de vecteurs non colinéaires est une base du plan vectoriel $\\mathcal{V}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p06_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une base du plan vectoriel ?",
            "options": [
              "Un couple de vecteurs non colinéaires",
              "Un couple de vecteurs colinéaires",
              "Un seul vecteur unitaire",
              "Trois points alignés"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux vecteurs de directions différentes suffisent."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Calculer des coordonnées",
          "stepTheme": "Calculer des coordonnées",
          "stepBadge": "Calculer des coordonnées",
          "paragraphText": "Si $\\vec u(x\\,;y)$ et $\\vec u'(x'\\,;y')$ : $\\vec u+\\vec u'(x+x'\\,;y+y')$ et $\\lambda\\vec u(\\lambda x\\,;\\lambda y)$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p06_q2",
            "type": "mcq",
            "prompt": "$\\vec u(1\\,;2)$ et $\\vec u'(0\\,;-6)$. Quelles sont les coordonnées de $\\vec u-2\\vec u'$ ?",
            "options": [
              "$(1\\,;14)$",
              "$(1\\,;-10)$",
              "$(-1\\,;14)$",
              "$(1\\,;-14)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$1-2\\times 0=1$ et $2-2\\times(-6)=14$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Norme dans une base orthonormée",
          "stepTheme": "Norme dans une base orthonormée",
          "stepBadge": "Norme dans une base orthonormée",
          "paragraphText": "Dans une base orthonormée seulement : si $\\vec u(x\\,;y)$, alors $\\|\\vec u\\|=\\sqrt{x^2+y^2}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p06_q3",
            "type": "mcq",
            "prompt": "Dans une base orthonormée, $\\vec u(-4\\,;2)$. Que vaut $\\|\\vec u\\|$ ?",
            "options": [
              "$\\sqrt{12}$",
              "$2\\sqrt5$",
              "$6$",
              "$-2\\sqrt5$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\sqrt{(-4)^2+2^2}=\\sqrt{20}=2\\sqrt5$. Attention : $(-4)^2=16$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le déterminant",
          "stepTheme": "Le déterminant",
          "stepBadge": "Le déterminant",
          "paragraphText": "$\\det(\\vec u,\\vec u')=xy'-yx'$ : on fait le « produit en croix » des coordonnées.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p06_q4",
            "type": "mcq",
            "prompt": "$\\vec u(2\\,;1)$ et $\\vec v(3\\,;2)$. Que vaut $\\det(\\vec u,\\vec v)$ ?",
            "options": [
              "$7$",
              "$-1$",
              "$1$",
              "$0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$2\\times 2-1\\times 3=4-3=1$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Déterminant nul",
          "stepTheme": "Déterminant nul",
          "stepBadge": "Déterminant nul",
          "paragraphText": "• $\\det(\\vec u,\\vec v)=0$ ⇔ $\\vec u$ et $\\vec v$ colinéaires : ils ne forment pas une base.\n• $\\det(\\vec u,\\vec v)\\neq 0$ ⇔ $(\\vec u,\\vec v)$ est une base.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p06_q5",
            "type": "mcq",
            "prompt": "$\\det(\\vec u,\\vec v)=0$. Que peut-on dire du couple $(\\vec u,\\vec v)$ ?",
            "options": [
              "C'est une base orthonormée",
              "C'est une base quelconque",
              "Les vecteurs sont perpendiculaires",
              "Vecteurs colinéaires : ce n'est pas une base"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Une base exige deux vecteurs non colinéaires, donc un déterminant non nul."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Centre de gravité",
          "stepTheme": "Centre de gravité",
          "stepBadge": "Centre de gravité",
          "paragraphText": "Le centre de gravité de $ABC$ a pour coordonnées $\\left(\\frac{x_A+x_B+x_C}{3}\\,;\\frac{y_A+y_B+y_C}{3}\\right)$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p06_q6",
            "type": "mcq",
            "prompt": "$A(-4\\,;1)$, $B(2\\,;-3)$, $C(3\\,;4)$. Quelles sont les coordonnées du centre de gravité $G$ ?",
            "options": [
              "$\\left(\\dfrac52\\,;\\dfrac12\\right)$",
              "$(1\\,;2)$",
              "$\\left(\\dfrac13\\,;\\dfrac23\\right)$",
              "$\\left(\\dfrac13\\,;-\\dfrac23\\right)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\frac{-4+2+3}{3}=\\frac13$ et $\\frac{1-3+4}{3}=\\frac23$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Alignement par le déterminant",
          "stepTheme": "Alignement par le déterminant",
          "stepBadge": "Alignement par le déterminant",
          "paragraphText": "$A$, $B$, $M$ alignés ⇔ $\\det(\\vec{AM},\\vec{AB})=0$.\n$A(2\\,;3)$, $B(4\\,;1)$, $M(25\\,;x)$ : $\\vec{AM}(23\\,;x-3)$, $\\vec{AB}(2\\,;-2)$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p06_q7",
            "type": "mcq",
            "prompt": "Pour quelle valeur de $x$ le point $M(25\\,;x)$ est-il aligné avec $A(2\\,;3)$ et $B(4\\,;1)$ ?",
            "options": [
              "$20$",
              "$26$",
              "$-26$",
              "$-20$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$23\\times(-2)-(x-3)\\times 2=0$ ⇔ $-46-2x+6=0$ ⇔ $x=-20$."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p06_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une base du plan vectoriel ?",
          "options": [
            "Un couple de vecteurs non colinéaires",
            "Un couple de vecteurs colinéaires",
            "Un seul vecteur unitaire",
            "Trois points alignés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux vecteurs de directions différentes suffisent."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p06_q2",
          "type": "mcq",
          "prompt": "$\\vec u(1\\,;2)$ et $\\vec u'(0\\,;-6)$. Quelles sont les coordonnées de $\\vec u-2\\vec u'$ ?",
          "options": [
            "$(1\\,;14)$",
            "$(1\\,;-10)$",
            "$(-1\\,;14)$",
            "$(1\\,;-14)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$1-2\\times 0=1$ et $2-2\\times(-6)=14$."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p06_q3",
          "type": "mcq",
          "prompt": "Dans une base orthonormée, $\\vec u(-4\\,;2)$. Que vaut $\\|\\vec u\\|$ ?",
          "options": [
            "$\\sqrt{12}$",
            "$2\\sqrt5$",
            "$6$",
            "$-2\\sqrt5$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\sqrt{(-4)^2+2^2}=\\sqrt{20}=2\\sqrt5$. Attention : $(-4)^2=16$."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p06_q4",
          "type": "mcq",
          "prompt": "$\\vec u(2\\,;1)$ et $\\vec v(3\\,;2)$. Que vaut $\\det(\\vec u,\\vec v)$ ?",
          "options": [
            "$7$",
            "$-1$",
            "$1$",
            "$0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$2\\times 2-1\\times 3=4-3=1$."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p06_q5",
          "type": "mcq",
          "prompt": "$\\det(\\vec u,\\vec v)=0$. Que peut-on dire du couple $(\\vec u,\\vec v)$ ?",
          "options": [
            "C'est une base orthonormée",
            "C'est une base quelconque",
            "Les vecteurs sont perpendiculaires",
            "Vecteurs colinéaires : ce n'est pas une base"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Une base exige deux vecteurs non colinéaires, donc un déterminant non nul."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p06_q6",
          "type": "mcq",
          "prompt": "$A(-4\\,;1)$, $B(2\\,;-3)$, $C(3\\,;4)$. Quelles sont les coordonnées du centre de gravité $G$ ?",
          "options": [
            "$\\left(\\dfrac52\\,;\\dfrac12\\right)$",
            "$(1\\,;2)$",
            "$\\left(\\dfrac13\\,;\\dfrac23\\right)$",
            "$\\left(\\dfrac13\\,;-\\dfrac23\\right)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\frac{-4+2+3}{3}=\\frac13$ et $\\frac{1-3+4}{3}=\\frac23$."
        },
        {
          "id": "seconde_c_maths_geometrie_l01_vecteurs_points_p06_q7",
          "type": "mcq",
          "prompt": "Pour quelle valeur de $x$ le point $M(25\\,;x)$ est-il aligné avec $A(2\\,;3)$ et $B(4\\,;1)$ ?",
          "options": [
            "$20$",
            "$26$",
            "$-26$",
            "$-20$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$23\\times(-2)-(x-3)\\times 2=0$ ⇔ $-46-2x+6=0$ ⇔ $x=-20$."
        }
      ]
    }
  ]
};
