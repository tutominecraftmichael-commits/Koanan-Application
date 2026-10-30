// ============================================================================
// MODULE OFFICIEL : MATHÉMATIQUES 2de C — GÉOMÉTRIE (MENA CÔTE D'IVOIRE)
// Volet : Géométrie | Classe : Seconde C
// 5 Leçons Officielles :
//   - Leçon 1 : Vecteurs et points du plan (8H)
//   - Leçon 2 : Utilisation des symétries et translations (6H)
//   - Leçon 3 : Droites et plans dans l'espace (8H)
//   - Leçon 4 : Angles inscrits et relations métriques dans le triangle (6H)
//   - Leçon 5 : Angles orientés et trigonométrie (10H)
// Total : 11 Points clés (mini-leçons), 88 QCM progressifs (8/8 requis par point)
// Zéro code brut à l'écran : symboles universels purs (√, ×, ÷, ≠, ≈, ², ³, ⁻², ⁿ, −, π, θ, α, ·)
// ============================================================================

import type { CurriculumChapter } from '../../lib/curriculum/types';

export const maths2deCVecteursChapter: CurriculumChapter = {
  "id": "seconde_c_maths_geometrie_ch1_vecteurs",
  "subjectId": "maths",
  "gradeLevel": "seconde_c",
  "order": 1,
  "officialVolumeHours": 8,
  "title": "Leçon 1 — Vecteurs et points du plan",
  "summary": "Étude fondamentale des vecteurs du plan : norme, vecteur unitaire, calcul vectoriel, combinaisons linéaires, colinéarité, caractérisation du centre de gravité, bases et repères du plan, coordonnées et déterminant.",
  "points": [
    {
      "id": "seconde_c_maths_geometrie_ch1_p1",
      "order": 1,
      "title": "Vecteurs, norme, vecteur unitaire et calcul vectoriel",
      "summary": "Définition d’un vecteur, représentants, calcul de la norme, vecteur unitaire, relation de Chasles et multiplication par un scalaire.",
      "conceptExplanation": "Dans la vie courante et en physique, une grandeur comme le vent ou le déplacement d’un bateau ne se résume pas à un simple nombre : il faut connaître sa force, sa direction (la ligne suivie) et son sens (vers où il souffle). C'est exactement ce que modélise un vecteur en mathématiques.\n\n1. Définition fondamentale d’un vecteur :\nUn vecteur non nul u est défini par trois caractéristiques indissociables :\n- Sa direction : la droite qui le porte ou toute droite parallèle.\n- Son sens : l’orientation sur cette droite (de l’origine vers l’extrémité).\n- Sa norme : la longueur du segment, notée ‖u‖ (ou AB si u = AB).\nSi l'origine et l'extrémité sont confondues, le vecteur est dit nul, noté 0. Sa norme est nulle (‖0‖ = 0) et il n'a ni direction ni sens privilégié.\n\n2. Propriété d’égalité et représentant unique :\nDeux vecteurs u et v sont égaux (u = v) s'ils ont exactement la même direction, le même sens et la même norme.\nThéorème fondamental : Pour tout point O du plan et pour tout vecteur u, il existe un UNIQUE point M du plan tel que OM = u.\n\n3. Norme d’un vecteur et vecteur unitaire :\n- Pour tout vecteur u, ‖u‖ ≥ 0, et ‖u‖ = 0 si et seulement si u = 0.\n- Pour tout vecteur u, ‖−u‖ = ‖u‖.\n- On appelle vecteur unitaire tout vecteur dont la norme est égale à 1.\n- Règle de normalisation : Pour tout vecteur non nul u, le vecteur u' = (1 / ‖u‖) · u est un vecteur unitaire de même direction et de même sens que u.\n\n4. Somme de vecteurs et relation de Chasles :\n- Relation de Chasles : Pour tous points A, B, C du plan : AB + BC = AC.\n- Règle du parallélogramme : AB + AD = AC si et seulement si ABCD est un parallélogramme.\n- Inégalité triangulaire : Pour tous vecteurs u et v : ‖u + v‖ ≤ ‖u‖ + ‖v‖.\n\n5. Multiplication par un nombre réel k :\nLe vecteur k · u a la même direction que u. Son sens est identique à celui de u si k > 0, et opposé si k < 0. Sa norme vaut ‖k · u‖ = |k| × ‖u‖.",
      "formulas": [
        {
          "name": "Relation de Chasles",
          "formula": "AB + BC = AC",
          "note": "Somme vectorielle fondamentale reliant trois points quelconques."
        },
        {
          "name": "Vecteur unitaire associé",
          "formula": "u_unit = (1 / ‖u‖) · u",
          "note": "Norme égale à 1, même direction et même sens que u."
        },
        {
          "name": "Norme du produit par un scalaire",
          "formula": "‖k · u‖ = |k| × ‖u‖",
          "note": "Toujours positive ou nulle grâce à la valeur absolue de k."
        }
      ],
      "keyRule": "Pour normaliser un vecteur non nul u et obtenir un vecteur unitaire de même sens, on divise simplement u par sa propre norme : (1 / ‖u‖) · u.",
      "workedExample": {
        "title": "Exemple résolu : Normalisation et relation de Chasles",
        "statement": "Soit ABC un triangle rectangle en A avec AB = 3 cm et AC = 4 cm. On pose u = BC.\n1. Calcule la norme ‖u‖.\n2. Détermine le vecteur unitaire v de même direction et même sens que u.",
        "methodSteps": [
          "Étape 1 : Dans le triangle rectangle en A, appliquons le théorème de Pythagore : BC² = AB² + AC² = 3² + 4² = 9 + 16 = 25.",
          "Étape 2 : On en déduit la longueur BC = √25 = 5 cm. La norme du vecteur u = BC est donc ‖u‖ = 5 cm.",
          "Étape 3 : Le vecteur unitaire v ayant la même direction et le même sens que u est obtenu par la formule v = (1 / ‖u‖) · u = (1 / 5) · u = (1 / 5) · BC."
        ],
        "conclusion": "La norme est ‖u‖ = 5 cm et le vecteur unitaire associé est v = (1 / 5) · u."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_ch1_p1_ex1",
          "type": "mcq",
          "prompt": "Quelles sont les trois caractéristiques qui définissent entièrement un vecteur non nul du plan ?",
          "options": [
            "Sa direction, son sens et sa norme (longueur)",
            "Son abscisse, son ordonnée et son repère",
            "Son point de départ, son angle et sa couleur",
            "Sa trajectoire, sa vitesse et son accélération"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition mathématique, un vecteur non nul est entièrement caractérisé par sa direction (droite support), son sens (orientation) et sa norme (longueur)."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p1_ex2",
          "type": "mcq",
          "prompt": "Si un vecteur u vérifie ‖u‖ = 0, quelle conclusion s’impose ?",
          "options": [
            "u est obligatoirement le vecteur nul : u = 0",
            "u a une direction quelconque mais une longueur infinie",
            "u est un vecteur unitaire de sens négatif",
            "u est perpendiculaire à l’axe des abscisses"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La norme d’un vecteur est toujours positive ou nulle. Le seul et unique vecteur ayant une norme nulle est le vecteur nul 0."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p1_ex3",
          "type": "mcq",
          "prompt": "Quelle est la norme d’un vecteur unitaire par définition ?",
          "options": [
            "1",
            "0",
            "√2",
            "−1"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On appelle vecteur unitaire tout vecteur dont la norme (longueur) est exactement égale à 1."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p1_ex4",
          "type": "mcq",
          "prompt": "Soit un vecteur non nul u dont la norme vaut ‖u‖ = 7. Quel vecteur est unitaire et orienté dans le même sens que u ?",
          "options": [
            "(1 / 7) · u",
            "7 · u",
            "−(1 / 7) · u",
            "(1 / 49) · u"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En divisant un vecteur non nul par sa norme, on obtient un vecteur unitaire de même direction et même sens : v = (1 / ‖u‖) · u = (1 / 7) · u."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p1_ex5",
          "type": "mcq",
          "prompt": "D’après la relation de Chasles, que vaut la somme vectorielle AB + BC + CA ?",
          "options": [
            "Le vecteur nul 0",
            "Le vecteur 2 · AC",
            "Le vecteur AB",
            "Le vecteur 3 · AC"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par la relation de Chasles : AB + BC = AC. Puis AC + CA = AA = 0 (le vecteur nul)."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p1_ex6",
          "type": "mcq",
          "prompt": "Soit ABCD un parallélogramme de centre O. Quelle égalité vectorielle est toujours vraie ?",
          "options": [
            "AB + AD = AC",
            "AB + AD = BD",
            "AB + CD = 2 · AC",
            "AC + BD = 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans un parallélogramme ABCD, la somme des deux vecteurs issus du sommet A vaut la diagonale issue de A : AB + AD = AC."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p1_ex7",
          "type": "mcq",
          "prompt": "Soit un vecteur u de norme ‖u‖ = 4. Quelle est la norme du vecteur v = −3 · u ?",
          "options": [
            "12",
            "−12",
            "7",
            "1"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La norme du produit par un scalaire utilise la valeur absolue : ‖k · u‖ = |k| × ‖u‖. Ici ‖−3 · u‖ = |−3| × 4 = 3 × 4 = 12."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p1_ex8",
          "type": "mcq",
          "prompt": "Si u et v sont deux vecteurs tels que v = −2 · u avec u ≠ 0, comment sont leurs sens ?",
          "options": [
            "Ils ont des sens strictement opposés car le coefficient −2 est négatif",
            "Ils ont le même sens car ils sont colinéaires",
            "Leur sens dépend de la position du point de départ",
            "Ils sont perpendiculaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lorsqu’on multiplie un vecteur par un nombre réel strictement négatif (ici −2 < 0), la direction reste la même mais le sens est inversé."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_ch1_p2",
      "order": 2,
      "title": "Combinaisons linéaires, colinéarité et centre de gravité",
      "summary": "Combinaisons linéaires de vecteurs, condition de colinéarité, caractérisation vectorielle du centre de gravité et mesure algébrique.",
      "conceptExplanation": "Après avoir appris à additionner et multiplier les vecteurs, nous abordons la puissance du calcul algébrique sur les vecteurs.\n\n1. Combinaison linéaire :\nSoit u et v deux vecteurs du plan. Tout vecteur w de la forme w = α · u + β · v (avec α et β deux nombres réels) est appelé une combinaison linéaire des vecteurs u et v.\n\n2. Vecteurs colinéaires :\nDeux vecteurs u et v sont dits colinéaires s'ils ont la même direction (c'est-à-dire s'ils sont portés par des droites parallèles ou confondues).\n- Propriété fondamentale : Deux vecteurs u et v sont colinéaires si et seulement s'il existe un nombre réel k tel que v = k · u (ou u = k · v).\n- Forme homogène : Deux vecteurs u et v sont colinéaires si et seulement s'il existe un couple de réels (α, β) ≠ (0, 0) tel que α · u + β · v = 0.\n- Le vecteur nul 0 est colinéaire à TOUT vecteur du plan (en prenant k = 0).\n\n3. Caractérisation vectorielle du centre de gravité d’un triangle :\nSoit ABC un triangle quelconque et G son centre de gravité (point d’intersection des trois médianes).\n- Théorème fondamental : G est l'unique point du plan vérifiant la relation vectorielle :\n  GA + GB + GC = 0.\n- Propriété pour tout point M du plan : Pour tout point M :\n  MA + MB + MC = 3 · MG.\n- Position sur la médiane : Si A' est le milieu de [BC], alors AG = (2 / 3) · AA' et GA' = −(1 / 3) · AA'.\n\n4. Vecteur directeur d’une droite et mesure algébrique :\n- Tout vecteur non nul u dont la direction est celle d’une droite (D) est appelé un vecteur directeur de (D).\n- Sur une droite orientée munie d’un repère (O, i) avec ‖i‖ = 1, la mesure algébrique d'un bipoint (A, B) notée AB_barre est le réel unique tel que AB = AB_barre · i.\n- Propriétés : BA_barre = −AB_barre et relation de Chasles : AB_barre + BC_barre = AC_barre.",
      "formulas": [
        {
          "name": "Caractérisation du centre de gravité",
          "formula": "GA + GB + GC = 0",
          "note": "Relation vectorielle essentielle caractérisant le point G."
        },
        {
          "name": "Position sur la médiane",
          "formula": "AG = (2 / 3) · AA’",
          "note": "A’ étant le milieu du côté opposé [BC]."
        },
        {
          "name": "Réduction barycentrique",
          "formula": "MA + MB + MC = 3 · MG",
          "note": "Valable pour n’importe quel point M du plan."
        }
      ],
      "keyRule": "Retiens la règle d’or : pour tout triangle ABC, G est caractérisé par GA + GB + GC = 0 et se situe aux deux tiers de chaque médiane en partant du sommet : AG = (2 / 3) · AA'.",
      "workedExample": {
        "title": "Exemple résolu : Colinéarité et centre de gravité",
        "statement": "Soit ABC un triangle et A’ le milieu de [BC]. On considère le point G défini par GA + GB + GC = 0.\n1. Montre que GB + GC = 2 · GA’.\n2. Déduis-en que AG = (2 / 3) · AA’.",
        "methodSteps": [
          "Étape 1 : Puisque A’ est le milieu de [BC], on a A’B + A’C = 0. En introduisant A’ par Chasles : GB + GC = (GA’ + A’B) + (GA’ + A’C) = 2 · GA’ + (A’B + A’C) = 2 · GA’.",
          "Étape 2 : L’égalité GA + GB + GC = 0 devient alors GA + 2 · GA’ = 0, soit GA = −2 · GA’, ou encore AG = 2 · GA’.",
          "Étape 3 : Exprimons AA’ en introduisant G : AA’ = AG + GA’ = AG + (1 / 2) · AG = (3 / 2) · AG.",
          "Étape 4 : En multipliant les deux membres par (2 / 3), on obtient directement : AG = (2 / 3) · AA’."
        ],
        "conclusion": "Le centre de gravité G est situé aux deux tiers de la médiane [AA’] à partir du sommet A."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_ch1_p2_ex1",
          "type": "mcq",
          "prompt": "Deux vecteurs non nuls u et v sont colinéaires si et seulement si :",
          "options": [
            "Il existe un nombre réel k tel que v = k · u",
            "Leurs normes sont obligatoirement égales",
            "Leur somme vectorielle u + v est égale à 1",
            "Ils ont des directions perpendiculaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux vecteurs sont colinéaires s’ils ont la même direction, ce qui équivaut algébriquement à l’existence d’un réel k tel que v = k · u."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p2_ex2",
          "type": "mcq",
          "prompt": "Si deux vecteurs u et v vérifient la relation 3 · u − 9 · v = 0, que peut-on affirmer ?",
          "options": [
            "u et v sont colinéaires avec u = 3 · v",
            "u et v sont orthogonaux",
            "u et v ont des normes opposées",
            "u = −3 · v"
          ],
          "correctAnswerIndex": 0,
          "explanation": "3 · u − 9 · v = 0 équivaut à 3 · u = 9 · v, soit en divisant par 3 : u = 3 · v. Les vecteurs sont donc colinéaires."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p2_ex3",
          "type": "mcq",
          "prompt": "Quelle est la relation vectorielle qui caractérise le centre de gravité G d’un triangle ABC ?",
          "options": [
            "GA + GB + GC = 0",
            "GA + GB = GC",
            "AG + BG + CG = 3 · AB",
            "GA + GB + GC = AB + BC + CA"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le centre de gravité G d’un triangle ABC est le barycentre des trois sommets affectés de coefficients égaux (1, 1, 1), caractérisé par GA + GB + GC = 0."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p2_ex4",
          "type": "mcq",
          "prompt": "Soit A’ le milieu du côté [BC] d’un triangle ABC et G son centre de gravité. Quelle est l’expression de AG en fonction de AA’ ?",
          "options": [
            "AG = (2 / 3) · AA’",
            "AG = (1 / 2) · AA’",
            "AG = (3 / 4) · AA’",
            "AG = (1 / 3) · AA’"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le centre de gravité est situé aux deux tiers de chaque médiane en partant du sommet : AG = (2 / 3) · AA’."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p2_ex5",
          "type": "mcq",
          "prompt": "Pour tout point M du plan et un triangle ABC de centre de gravité G, que vaut la somme MA + MB + MC ?",
          "options": [
            "3 · MG",
            "MG",
            "0",
            "(1 / 3) · MG"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par la relation de Chasles : MA + MB + MC = (MG + GA) + (MG + GB) + (MG + GC) = 3 · MG + (GA + GB + GC) = 3 · MG car GA + GB + GC = 0."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p2_ex6",
          "type": "mcq",
          "prompt": "Trois points distincts A, B et C sont alignés si et seulement si :",
          "options": [
            "Les vecteurs AB et AC sont colinéaires",
            "Les vecteurs AB et AC ont la même norme",
            "AB + AC = BC",
            "Le triangle ABC est rectangle en A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les points A, B, C sont alignés si et seulement si les droites (AB) et (AC) ont la même direction, ce qui se traduit par la colinéarité des vecteurs AB et AC."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p2_ex7",
          "type": "mcq",
          "prompt": "Sur un axe orienté muni d’un repère (O, i) avec ‖i‖ = 1, si le vecteur AB = −4 · i, quelle est la mesure algébrique notée AB_barre ?",
          "options": [
            "−4",
            "4",
            "16",
            "1 / 4"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, la mesure algébrique AB_barre est le coefficient réel tel que AB = AB_barre · i. Ici ce coefficient vaut −4."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p2_ex8",
          "type": "mcq",
          "prompt": "Si I est le milieu du segment [AB], quelle égalité vectorielle est vérifiée pour tout point M du plan ?",
          "options": [
            "MA + MB = 2 · MI",
            "MA + MB = MI",
            "MA − MB = 2 · MI",
            "MA + MB = 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Puisque IA + IB = 0, on a : MA + MB = (MI + IA) + (MI + IB) = 2 · MI + (IA + IB) = 2 · MI."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_ch1_p3",
      "order": 3,
      "title": "Bases, repères, coordonnées et déterminant",
      "summary": "Base vectorielle, repère du plan, calcul des coordonnées, norme euclidienne, déterminant de deux vecteurs et condition algébrique de colinéarité.",
      "conceptExplanation": "Pour résoudre des problèmes géométriques complexes sans tracer des figures géantes, les mathématiciens ont inventé la géométrie analytique : associer des nombres précis (coordonnées) à chaque point et vecteur.\n\n1. Base du plan vectoriel :\n- On appelle base du plan vectoriel tout couple (i, j) formé de deux vecteurs non nuls et NON colinéaires.\n- Théorème de décomposition unique : Pour tout vecteur u du plan et pour toute base (i, j), il existe un unique couple de réels (x, y) tel que u = x · i + y · j. Le couple (x, y) constitue les coordonnées de u dans cette base.\n- Base orthogonale : Les vecteurs i et j ont des directions perpendiculaires (i ⊥ j).\n- Base orthonormée : i et j sont orthogonaux ET de norme 1 (i ⊥ j et ‖i‖ = ‖j‖ = 1).\n\n2. Norme dans une base orthonormée :\nSi u a pour coordonnées (x, y) dans une base orthonormée, sa norme est donnée par la formule euclidienne :\n  ‖u‖ = √(x² + y²).\nPour deux points A(x_A, y_A) et B(x_B, y_B), le vecteur AB a pour coordonnées (x_B − x_A, y_B − y_A) et la distance AB vaut :\n  AB = √[(x_B − x_A)² + (y_B − y_A)²].\n\n3. Déterminant de deux vecteurs et test de colinéarité :\nSoit u(x, y) et v(x’, y’) deux vecteurs dans une base (i, j).\n- On appelle déterminant de (u, v), noté det(u, v), le nombre réel calculé par le produit en croix :\n  det(u, v) = | x  x’ | = x · y’ − y · x’.\n             | y  y’ |\n- Théorème fondamental de colinéarité : Deux vecteurs u et v sont colinéaires si et seulement si leur déterminant est rigoureusement nul :\n  u et v colinéaires ⟺ det(u, v) = 0 ⟺ x · y’ − y · x’ = 0.\n\n4. Coordonnées remarquables dans un repère (O, i, j) :\n- Coordonnées du milieu I de [AB] : I((x_A + x_B) / 2, (y_A + y_B) / 2).\n- Coordonnées du centre de gravité G de ABC : G((x_A + x_B + x_C) / 3, (y_A + y_B + y_C) / 3).",
      "formulas": [
        {
          "name": "Déterminant de deux vecteurs",
          "formula": "det(u, v) = x · y’ − y · x’",
          "note": "Produit en croix fondamental ; nul si et seulement si u et v sont colinéaires."
        },
        {
          "name": "Norme dans un repère orthonormé",
          "formula": "‖u‖ = √(x² + y²)",
          "note": "Distance euclidienne directe."
        },
        {
          "name": "Coordonnées du centre de gravité G",
          "formula": "x_G = (x_A + x_B + x_C) / 3  ;  y_G = (y_A + y_B + y_C) / 3",
          "note": "Moyenne arithmétique exacte des coordonnées des trois sommets."
        }
      ],
      "keyRule": "Pour tester instantanément si deux vecteurs u(x, y) et v(x', y') sont colinéaires, calcule sans hésiter leur déterminant : det(u, v) = x · y' − y · x'. S'il vaut 0, ils sont colinéaires !",
      "workedExample": {
        "title": "Exemple résolu : Calcul de déterminant et test de colinéarité",
        "statement": "Dans une base (i, j), on donne les vecteurs u(2, −3) et v(−4, 6).\n1. Calcule le déterminant det(u, v).\n2. Les vecteurs u et v sont-ils colinéaires ?",
        "methodSteps": [
          "Étape 1 : Identifions les coordonnées : pour u, x = 2 et y = −3 ; pour v, x’ = −4 et y’ = 6.",
          "Étape 2 : Appliquons la formule du déterminant : det(u, v) = x · y’ − y · x’.",
          "Étape 3 : Remplaçons par les valeurs numériques : det(u, v) = (2) × (6) − (−3) × (−4) = 12 − 12 = 0.",
          "Étape 4 : Le déterminant étant nul (det(u, v) = 0), d’après le théorème de colinéarité, les vecteurs u et v sont colinéaires (on remarque d’ailleurs que v = −2 · u)."
        ],
        "conclusion": "det(u, v) = 0, donc les vecteurs u et v sont colinéaires."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_ch1_p3_ex1",
          "type": "mcq",
          "prompt": "Qu’est-ce qu’une base (i, j) du plan vectoriel ?",
          "options": [
            "Un couple de deux vecteurs non nuls et non colinéaires",
            "Deux vecteurs quelconques ayant la même longueur",
            "Un triplet de trois vecteurs coplanaires",
            "Deux droites parallèles sécantes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une base du plan vectoriel est formée par deux vecteurs non colinéaires, ce qui permet de décomposer de façon unique tout vecteur du plan."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p3_ex2",
          "type": "mcq",
          "prompt": "Dans un repère orthonormé, quelle est la norme du vecteur u(3, −4) ?",
          "options": [
            "5",
            "7",
            "−1",
            "25"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La norme vaut ‖u‖ = √(x² + y²) = √(3² + (−4)²) = √(9 + 16) = √25 = 5."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p3_ex3",
          "type": "mcq",
          "prompt": "Quelle est la valeur du déterminant des vecteurs u(2, 5) et v(4, 10) ?",
          "options": [
            "0 (ils sont colinéaires)",
            "40",
            "10",
            "−20"
          ],
          "correctAnswerIndex": 0,
          "explanation": "det(u, v) = x · y’ − y · x’ = 2 × 10 − 5 × 4 = 20 − 20 = 0. Les vecteurs sont donc colinéaires (v = 2 · u)."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p3_ex4",
          "type": "mcq",
          "prompt": "Pour quelle valeur du réel m les vecteurs u(m, 3) et v(4, 6) sont-ils colinéaires ?",
          "options": [
            "2",
            "8",
            "−2",
            "12"
          ],
          "correctAnswerIndex": 0,
          "explanation": "u et v sont colinéaires si et seulement si det(u, v) = 0 ⟺ m × 6 − 3 × 4 = 0 ⟺ 6m − 12 = 0 ⟺ 6m = 12 ⟺ m = 2."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p3_ex5",
          "type": "mcq",
          "prompt": "On donne les points A(1, 3) et B(5, 7). Quelles sont les coordonnées du vecteur AB ?",
          "options": [
            "(4, 4)",
            "(6, 10)",
            "(3, 5)",
            "(−4, −4)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les coordonnées du vecteur AB sont données par (x_B − x_A, y_B − y_A) = (5 − 1, 7 − 3) = (4, 4)."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p3_ex6",
          "type": "mcq",
          "prompt": "Quelles sont les coordonnées du milieu I du segment [AB] avec A(−2, 6) et B(4, 2) ?",
          "options": [
            "(1, 4)",
            "(2, 8)",
            "(3, 4)",
            "(−3, 2)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "x_I = (x_A + x_B) / 2 = (−2 + 4) / 2 = 2 / 2 = 1 et y_I = (y_A + y_B) / 2 = (6 + 2) / 2 = 8 / 2 = 4. Donc I(1, 4)."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p3_ex7",
          "type": "mcq",
          "prompt": "Soit un triangle de sommets A(0, 3), B(3, 0) et C(3, 6). Quelles sont les coordonnées de son centre de gravité G ?",
          "options": [
            "(2, 3)",
            "(3, 3)",
            "(6, 9)",
            "(1, 2)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "x_G = (0 + 3 + 3) / 3 = 6 / 3 = 2 et y_G = (3 + 0 + 6) / 3 = 9 / 3 = 3. Donc G(2, 3)."
        },
        {
          "id": "seconde_c_maths_geometrie_ch1_p3_ex8",
          "type": "mcq",
          "prompt": "Dans un repère orthonormé, la distance entre les points A(1, 2) et B(4, 6) est égale à :",
          "options": [
            "5",
            "7",
            "25",
            "√7"
          ],
          "correctAnswerIndex": 0,
          "explanation": "AB = √[(4 − 1)² + (6 − 2)²] = √[3² + 4²] = √(9 + 16) = √25 = 5."
        }
      ]
    }
  ]
};

export const maths2deCSymetriesTranslationsChapter: CurriculumChapter = {
  "id": "seconde_c_maths_geometrie_ch2_symetries_translations",
  "subjectId": "maths",
  "gradeLevel": "seconde_c",
  "order": 2,
  "officialVolumeHours": 6,
  "title": "Leçon 2 — Utilisation des symétries et translations",
  "summary": "Transformations du plan, propriétés caractéristiques de la translation et des symétries, conservation des distances, angles et aires, et détermination de lieux géométriques.",
  "points": [
    {
      "id": "seconde_c_maths_geometrie_ch2_p1",
      "order": 1,
      "title": "Applications du plan, translation et symétries",
      "summary": "Définitions rigoureuses de la translation, de la symétrie centrale et de la symétrie orthogonale, ainsi que leurs propriétés caractéristiques vectorielles.",
      "conceptExplanation": "Une transformation géométrique est une règle mathématique qui déplace chaque point du plan vers un autre point de manière parfaitement ordonnée.\n\n1. Notion d’application du plan dans lui-même :\nOn appelle application du plan dans lui-même toute correspondance f qui, à chaque point M du plan, associe un unique point M' du plan, noté M' = f(M).\nUn point M est dit invariant par f si f(M) = M (le point ne bouge pas).\n\n2. La Translation de vecteur u :\n- Définition : Soit u un vecteur du plan. La translation de vecteur u, notée t_u, est l'application du plan qui à tout point M associe l'unique point M' tel que :\n  MM' = u.\n- Si u = 0, la translation t_0 est l'application identique (tout point est invariant).\n- Si u ≠ 0, la translation ne possède AUCUN point invariant.\n- Propriété caractéristique de la translation : Une application f du plan est une translation si et seulement si pour tous points M et N d'images respectives M' et N' :\n  M'N' = MN.\n\n3. La Symétrie centrale de centre I :\n- Définition : Soit I un point fixé du plan. La symétrie centrale de centre I, notée S_I, est l'application qui à tout point M associe l'unique point M' tel que I soit le milieu du segment [MM'], c'est-à-dire :\n  IM' = −IM   (ou   IM + IM' = 0).\n- Point invariant : Le centre I est le SEUL et unique point invariant de S_I.\n- Propriété caractéristique de la symétrie centrale : Une application f du plan est une symétrie centrale si et seulement si pour tous points M et N d'images M' et N' :\n  M'N' = −MN.\n\n4. La Symétrie orthogonale d’axe (D) :\n- Définition : Soit (D) une droite du plan. La symétrie orthogonale d'axe (D), notée S_(D), associe à tout point M le point M' tel que (D) soit la médiatrice du segment [MM'] (et si M appartient à (D), alors M' = M).\n- Points invariants : L'ensemble des points invariants par S_(D) est exactement l'axe (D) tout entier.",
      "formulas": [
        {
          "name": "Propriété caractéristique de la translation",
          "formula": "M’N’ = MN",
          "note": "Le vecteur reliant les images est identique au vecteur initial."
        },
        {
          "name": "Propriété caractéristique de la symétrie centrale",
          "formula": "M’N’ = −MN",
          "note": "Le vecteur reliant les images est l’opposé exact du vecteur initial."
        },
        {
          "name": "Définition vectorielle de S_I",
          "formula": "IM’ = −IM  ⟺  IM + IM’ = 0",
          "note": "I est le milieu du segment [MM’]."
        }
      ],
      "keyRule": "Retiens la distinction vectorielle fondamentale : par une translation, M'N' = MN ; par une symétrie centrale, M'N' = −MN.",
      "workedExample": {
        "title": "Exemple résolu : Image par translation et parallélogramme",
        "statement": "Soit t_u la translation de vecteur u = AB. Soit C un point n’appartenant pas à la droite (AB), et C’ son image par t_u.\n1. Écris l’égalité vectorielle liant C, C’ et u.\n2. Quelle est la nature précise du quadrilatère ABC’C ?",
        "methodSteps": [
          "Étape 1 : Par définition de la translation de vecteur u = AB, l’image de C est le point C’ tel que CC’ = u = AB.",
          "Étape 2 : L’égalité vectorielle CC’ = AB signifie que les segments [CC’] et [AB] ont même longueur, même direction et même sens.",
          "Étape 3 : Comme les points A, B, C ne sont pas alignés, l’égalité vectorielle AB = CC’ prouve que le quadrilatère ABC’C (attention à l’ordre des sommets) est un parallélogramme."
        ],
        "conclusion": "CC’ = AB et le quadrilatère ABC’C est un parallélogramme."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_ch2_p1_ex1",
          "type": "mcq",
          "prompt": "Par définition, l’image d’un point M par la translation de vecteur u non nul est le point M’ vérifiant :",
          "options": [
            "MM’ = u",
            "M’M = u",
            "OM’ = u",
            "MM’ = −u"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La translation de vecteur u glisse chaque point M vers M’ selon le vecteur u, donc MM’ = u."
        },
        {
          "id": "seconde_c_maths_geometrie_ch2_p1_ex2",
          "type": "mcq",
          "prompt": "Quelle est la propriété caractéristique qui identifie une translation t ?",
          "options": [
            "Pour tous points M et N, M’N’ = MN",
            "Pour tous points M et N, M’N’ = −MN",
            "Pour tout point M, M’ = M",
            "Pour tous points M et N, MN’ = NM’"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une application est une translation si et seulement si le vecteur joignant deux images M’N’ est rigoureusement égal au vecteur d’origine MN."
        },
        {
          "id": "seconde_c_maths_geometrie_ch2_p1_ex3",
          "type": "mcq",
          "prompt": "Combien de points invariants possède une translation de vecteur u ≠ 0 ?",
          "options": [
            "0 (aucun point n’est invariant)",
            "1 seul point",
            "Une infinité de points",
            "2 points"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Si u ≠ 0, MM’ = u ≠ 0 donc M’ ne peut jamais être confondu avec M : il n’y a aucun point invariant."
        },
        {
          "id": "seconde_c_maths_geometrie_ch2_p1_ex4",
          "type": "mcq",
          "prompt": "Soit I un point fixé. L’image d’un point M par la symétrie centrale S_I est le point M’ tel que :",
          "options": [
            "I est le milieu du segment [MM’] (IM’ = −IM)",
            "M est le milieu du segment [IM’]",
            "IM’ = IM",
            "Le triangle IMM’ est équilatéral"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition d’une symétrie centrale de centre I, I est le milieu du segment joignant le point et son image : IM’ = −IM."
        },
        {
          "id": "seconde_c_maths_geometrie_ch2_p1_ex5",
          "type": "mcq",
          "prompt": "Quelle est la propriété caractéristique de la symétrie centrale de centre I ?",
          "options": [
            "Pour tous points M et N, M’N’ = −MN",
            "Pour tous points M et N, M’N’ = MN",
            "Pour tous points M et N, M’N’ = 2 · MN",
            "Pour tous points M et N, M’N’ = 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La symétrie centrale inverse les vecteurs : le vecteur formé par les images est l’opposé exact du vecteur formé par les antécédents, soit M’N’ = −MN."
        },
        {
          "id": "seconde_c_maths_geometrie_ch2_p1_ex6",
          "type": "mcq",
          "prompt": "Quel est le point invariant d’une symétrie centrale S_I ?",
          "options": [
            "Le centre I uniquement",
            "Tous les points de la droite passant par I",
            "Tous les points du plan",
            "Aucun point"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le seul point qui reste fixe lors d’un demi-tour autour du centre I est le centre I lui-même : S_I(I) = I."
        },
        {
          "id": "seconde_c_maths_geometrie_ch2_p1_ex7",
          "type": "mcq",
          "prompt": "Quel est l’ensemble des points invariants par une symétrie orthogonale d’axe (D) ?",
          "options": [
            "La droite (D) toute entière",
            "Uniquement le point d’intersection avec l’axe des ordonnées",
            "Le plan tout entier",
            "L’ensemble vide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tous les points situés sur l’axe de symétrie (D) sont invariants : pour tout point M ∈ (D), S_(D)(M) = M."
        },
        {
          "id": "seconde_c_maths_geometrie_ch2_p1_ex8",
          "type": "mcq",
          "prompt": "Si ABCD est un parallélogramme, quelle transformation transforme le triangle ABD en le triangle CDB ?",
          "options": [
            "La symétrie centrale de centre O (centre du parallélogramme)",
            "La translation de vecteur AC",
            "La symétrie orthogonale d’axe (BD)",
            "L’homothétie de rapport 2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le centre O du parallélogramme est le milieu commun des diagonales [AC] et [BD]. S_O transforme A en C, B en D et D en B. Le triangle ABD devient CDB."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_ch2_p2",
      "order": 2,
      "title": "Propriétés de conservation, démonstrations et lieux géométriques",
      "summary": "Conservation des distances (isométries), de l’alignement, des angles et des aires. Utilisation des transformations pour démontrer et trouver des lieux géométriques.",
      "conceptExplanation": "Les translations, les symétries centrales et les symétries orthogonales ont une propriété remarquable : elles ne déforment aucune figure. Ce sont des isométries du plan.\n\n1. Propriétés de conservation fondamentales (Isométries) :\nToute translation, symétrie centrale ou symétrie orthogonale conserve :\n- Les distances : Pour tous points M et N d'images M' et N', M'N' = MN.\n- L'alignement : L'image de trois points alignés est formée de trois points alignés. L'image d'une droite est une droite.\n- Le parallélisme : L'image d'une droite par une translation ou une symétrie centrale est une droite STRICTEMENT PARALLÈLE.\n- Le milieu : L'image du milieu I d'un segment [AB] est le milieu I' du segment image [A'B'].\n- L'orthogonalité et les angles : L'image de deux droites perpendiculaires est formée de deux droites perpendiculaires. La mesure des angles géométriques est strictement conservée.\n- Les aires : Une figure et sa figure image ont exactement la même aire.\n\n2. Image d’un cercle :\nL'image d'un cercle C(O, R) de centre O et de rayon R par une isométrie f est un cercle C'(O', R) de MÊME RAYON R, ayant pour centre le point O' = f(O).\n\n3. Méthode de démonstration géométrique :\nPour prouver que deux droites sont parallèles, qu'un quadrilatère est un parallélogramme ou que trois points sont alignés, il suffit souvent d'identifier une transformation simple (translation ou symétrie) qui envoie les premiers éléments sur les seconds.\n\n4. Recherche d’un lieu géométrique :\nDéterminer le lieu d'un point N lorsque le point M décrit une figure (Γ) (droite, segment, cercle) consiste à trouver l'ensemble des positions prises par N.\n- Règle méthodologique : Si l'on prouve que N est l'image de M par une transformation fixée f (N = f(M)), alors le lieu de N est simplement la figure image (Γ') = f(Γ).",
      "formulas": [
        {
          "name": "Conservation des distances (Isométrie)",
          "formula": "M’N’ = MN",
          "note": "Aucune déformation des longueurs par translation ou symétrie."
        },
        {
          "name": "Image d’un cercle C(O, R)",
          "formula": "f(C(O, R)) = C’(f(O), R)",
          "note": "Même rayon R, centre translaté ou symétrique."
        },
        {
          "name": "Parallélisme des images",
          "formula": "(d’) ∥ (d)",
          "note": "L’image d’une droite par translation ou symétrie centrale est parallèle à la droite initiale."
        }
      ],
      "keyRule": "Pour trouver le lieu géométrique d'un point mobile N lié à un point mobile M décrivant un cercle (C) : montre que N = f(M) où f est une translation ou une symétrie fixe. Le lieu de N est alors le cercle image (C') de même rayon !",
      "workedExample": {
        "title": "Exemple résolu : Détermination d’un lieu géométrique",
        "statement": "Soit [AB] un segment fixe et (Γ) un cercle de centre O et de rayon R. Un point mobile M décrit le cercle (Γ). On construit le point N tel que AMNB soit un parallélogramme.\n1. Exprime le vecteur MN en fonction d’un vecteur fixe.\n2. Détermine le lieu géométrique du point N lorsque M décrit le cercle (Γ).",
        "methodSteps": [
          "Étape 1 : Par hypothèse, AMNB est un parallélogramme. D’après les propriétés vectorielles du parallélogramme, on a MN = AB.",
          "Étape 2 : Le vecteur AB étant fixe (A et B sont fixes), l’égalité MN = AB prouve que le point N est l’image de M par la translation de vecteur AB : N = t_AB(M).",
          "Étape 3 : Lorsque le point M décrit le cercle (Γ) de centre O et de rayon R, son image N décrit l’image du cercle (Γ) par la translation t_AB.",
          "Étape 4 : L’image d’un cercle par une translation est un cercle de même rayon R dont le centre est l’image du centre : O’ = t_AB(O) (tel que OO’ = AB)."
        ],
        "conclusion": "Le lieu du point N est le cercle (Γ’) de centre O’ = t_AB(O) et de même rayon R."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_ch2_p2_ex1",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que les translations et les symétries sont des isométries du plan ?",
          "options": [
            "Parce qu’elles conservent rigoureusement les distances (M’N’ = MN)",
            "Parce qu’elles augmentent les surfaces des polygones",
            "Parce qu’elles possèdent toutes au moins deux points fixes",
            "Parce qu’elles transforment toujours un cercle en une ellipse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une isométrie est par définition une transformation qui conserve les distances entre deux points quelconques : M’N’ = MN."
        },
        {
          "id": "seconde_c_maths_geometrie_ch2_p2_ex2",
          "type": "mcq",
          "prompt": "Quelle est la nature de l’image d’une droite (d) par une translation de vecteur non nul u ?",
          "options": [
            "Une droite (d’) strictement parallèle à (d) (ou confondue si u est directeur)",
            "Une droite perpendiculaire à (d)",
            "Un cercle tangent à (d)",
            "Un segment de longueur égale à ‖u‖"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La translation conserve la direction : l’image d’une droite (d) est toujours une droite parallèle à (d)."
        },
        {
          "id": "seconde_c_maths_geometrie_ch2_p2_ex3",
          "type": "mcq",
          "prompt": "Quelle est l’image d’un cercle C de centre O et de rayon 4 cm par une symétrie centrale S_I ?",
          "options": [
            "Un cercle de même rayon 4 cm dont le centre est l’image S_I(O)",
            "Un cercle de rayon 8 cm centré en I",
            "Un disque de rayon 2 cm",
            "Une droite passant par le centre I"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toute isométrie transforme un cercle C(O, R) en un cercle C’(O’, R) de même rayon R, centré en O’ = S_I(O)."
        },
        {
          "id": "seconde_c_maths_geometrie_ch2_p2_ex4",
          "type": "mcq",
          "prompt": "Si un triangle ABC a une aire de 24 cm², quelle est l’aire de son triangle image A’B’C’ par une symétrie orthogonale ?",
          "options": [
            "24 cm² (conservation exacte des aires)",
            "48 cm²",
            "12 cm²",
            "0 cm²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les isométries conservent rigoureusement les aires. L’aire du triangle image reste exactement 24 cm²."
        },
        {
          "id": "seconde_c_maths_geometrie_ch2_p2_ex5",
          "type": "mcq",
          "prompt": "Si deux droites (D1) et (D2) sont perpendiculaires, que peut-on dire de leurs images par une translation ?",
          "options": [
            "Elles sont obligatoirement perpendiculaires (conservation des angles droits)",
            "Elles deviennent parallèles",
            "Leur angle dépend de la norme du vecteur de translation",
            "Elles se coupent sous un angle de 45°"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La translation conserve les angles géométriques et l’orthogonalité : deux droites perpendiculaires ont toujours des images perpendiculaires."
        },
        {
          "id": "seconde_c_maths_geometrie_ch2_p2_ex6",
          "type": "mcq",
          "prompt": "Un point mobile M décrit une droite fixe (d). Le point N est défini par MN = u (u vecteur constant non nul). Quel est le lieu de N ?",
          "options": [
            "Une droite (d’) parallèle à (d)",
            "Un cercle passant par le point M",
            "Un point fixe unique",
            "Une demi-droite perpendiculaire à (d)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Puisque MN = u, N est l’image de M par la translation t_u. Lorsque M décrit la droite (d), son image N décrit l’image de la droite, qui est une droite parallèle (d’)."
        },
        {
          "id": "seconde_c_maths_geometrie_ch2_p2_ex7",
          "type": "mcq",
          "prompt": "Si I est le milieu du segment [AB] et si f est une symétrie centrale, quelle propriété vérifie l’image I’ ?",
          "options": [
            "I’ est le milieu du segment image [A’B’]",
            "I’ est confondu avec le centre de symétrie",
            "I’ est perpendiculaire à [A’B’]",
            "I’A’ = 2 · I’B’"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La symétrie centrale conserve le milieu : l’image du milieu d’un segment est le milieu du segment image."
        },
        {
          "id": "seconde_c_maths_geometrie_ch2_p2_ex8",
          "type": "mcq",
          "prompt": "La composée de deux symétries centrales de centres distincts I et J, notée S_J ∘ S_I, est :",
          "options": [
            "Une translation de vecteur 2 · IJ",
            "Une symétrie centrale de centre le milieu de [IJ]",
            "Une symétrie orthogonale d’axe (IJ)",
            "L’application identique du plan"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour tout point M, posons M1 = S_I(M) et M’ = S_J(M1). Par la propriété caractéristique : MM’ = MI + IM1 + M1J + JM’ = 2 · IJ. C’est la translation de vecteur 2 · IJ."
        }
      ]
    }
  ]
};

export const maths2deCEspaceChapter: CurriculumChapter = {
  "id": "seconde_c_maths_geometrie_ch3_espace",
  "subjectId": "maths",
  "gradeLevel": "seconde_c",
  "order": 3,
  "officialVolumeHours": 8,
  "title": "Leçon 3 — Droites et plans dans l’espace",
  "summary": "Règles d’incidence, positions relatives de droites et de plans, théorèmes fondamentaux de parallélisme (théorème du toit) et tracé de sections planes de solides.",
  "points": [
    {
      "id": "seconde_c_maths_geometrie_ch3_p1",
      "order": 1,
      "title": "Positions relatives de droites et de plans dans l’espace",
      "summary": "Règles d’incidence dans l’espace, droites coplanaires vs non coplanaires, positions relatives droite-plan et plan-plan.",
      "conceptExplanation": "Contrairement au plan où deux droites sans point commun sont forcément parallèles, l'espace en trois dimensions offre une richesse géométrique nouvelle !\n\n1. Règles d’incidence fondamentales dans l’espace :\n- Par deux points distincts A et B de l'espace passe une UNIQUE droite, notée (AB).\n- Par trois points NON alignés A, B, C passe un UNIQUE plan, noté (ABC).\n- Si deux points distincts A et B d'une droite (D) appartiennent à un plan (P), alors la droite (D) tout entière est contenue dans le plan (P) ((D) ⊂ (P)).\n\n2. Positions relatives de deux droites dans l’espace :\nDeux droites (D1) et (D2) peuvent être :\nA) Coplanaires (contenues dans un même plan) :\n   - Sécantes en un point unique.\n   - Strictement parallèles (disjointes, aucun point commun).\n   - Confondues (une infinité de points communs).\nB) Non coplanaires (aucun plan ne peut les contenir toutes les deux à la fois) :\n   - Elles n'ont AUCUN point commun et NE sont PAS parallèles (exemple classique : deux arêtes croisées d'un cube comme (AB) et (CG)).\n\n3. Positions relatives d’une droite (D) et d’un plan (P) :\n- Sécants en un point unique A : (D) ∩ (P) = {A}.\n- Strictement parallèles : (D) ∩ (P) = ∅ (aucun point commun).\n- Droite incluse dans le plan : (D) ⊂ (P) (tous les points de (D) sont dans (P)).\n(On dit que (D) est parallèle à (P) si elle est strictement parallèle ou incluse dans (P)).\n\n4. Positions relatives de deux plans (P) et (Q) :\n- Sécants selon une UNIQUE droite (d) : (P) ∩ (Q) = (d) (deux plans sécants se coupent TOUJOURS selon une droite).\n- Strictement parallèles : (P) ∩ (Q) = ∅.\n- Confondus : (P) = (Q).",
      "formulas": [
        {
          "name": "Intersection de deux plans sécants",
          "formula": "(P) ∩ (Q) = (d)",
          "note": "L’intersection de deux plans sécants est TOUJOURS une droite."
        },
        {
          "name": "Droite incluse dans un plan",
          "formula": "A ∈ (P) et B ∈ (P)  ⟹  (AB) ⊂ (P)",
          "note": "Si deux points appartiennent au plan, toute la droite y est contenue."
        },
        {
          "name": "Droites coplanaires vs non coplanaires",
          "formula": "(D1) et (D2) non coplanaires  ⟹  (D1) ∩ (D2) = ∅ et non parallèles",
          "note": "Spécificité fondamentale de la géométrie en 3 dimensions."
        }
      ],
      "keyRule": "Retiens bien : dans l'espace, deux droites qui ne se coupent pas ne sont pas forcément parallèles ! Elles peuvent être non coplanaires (comme une route et un pont qui passe au-dessus).",
      "workedExample": {
        "title": "Exemple résolu : Positions relatives dans un cube",
        "statement": "Soit ABCDEFGH un cube usuel (face inférieure ABCD, face supérieure EFGH, arêtes verticales AE, BF, CG, DH).\n1. Quelle est la position relative des droites (AB) et (HG) ?\n2. Quelle est la position relative des droites (AB) et (CG) ?\n3. Quelle est la position relative de la droite (AE) et du plan (BCD) ?",
        "methodSteps": [
          "Étape 1 : Dans le cube, la face supérieure EFGH est un carré avec (EF) ∥ (HG). De plus, la face ABFE est un carré avec (AB) ∥ (EF). Par transitivité du parallélisme, (AB) ∥ (HG). Elles sont donc coplanaires et strictement parallèles.",
          "Étape 2 : La droite (AB) est contenue dans le plan de base (ABC) tandis que la droite (CG) perce ce plan au point C (qui n’appartient pas à (AB)). Elles n’ont aucun point commun et ne sont pas parallèles : elles sont NON COPLANAIRES.",
          "Étape 3 : La droite (AE) coupe le plan de base (BCD) (qui est le plan (ABC)) au point unique A. La droite (AE) et le plan (BCD) sont donc sécants au point A."
        ],
        "conclusion": "(AB) et (HG) sont strictement parallèles ; (AB) et (CG) sont non coplanaires ; (AE) et (BCD) sont sécants en A."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_ch3_p1_ex1",
          "type": "mcq",
          "prompt": "Combien de points non alignés définissent un plan unique dans l’espace ?",
          "options": [
            "Exactement 3 points non alignés",
            "2 points",
            "4 points",
            "1 seul point"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par axiome d’incidence de l’espace, par trois points non alignés passe un plan et un seul."
        },
        {
          "id": "seconde_c_maths_geometrie_ch3_p1_ex2",
          "type": "mcq",
          "prompt": "Dans l’espace, que signifie que deux droites sont non coplanaires ?",
          "options": [
            "Il n’existe aucun plan qui les contient toutes les deux à la fois",
            "Elles se coupent sous un angle de 90°",
            "Elles sont strictement parallèles",
            "Elles sont contenues dans le même plan"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux droites sont non coplanaires lorsqu’aucun plan de l’espace ne peut les contenir simultanément. Elles n’ont aucun point commun et ne sont pas parallèles."
        },
        {
          "id": "seconde_c_maths_geometrie_ch3_p1_ex3",
          "type": "mcq",
          "prompt": "Dans un cube ABCDEFGH, quelle est la position relative des droites (AB) et (CD) ?",
          "options": [
            "Strictement parallèles et coplanaires (face ABCD)",
            "Non coplanaires",
            "Sécantes au centre du cube",
            "Perpendiculaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "ABCD est un carré, donc les côtés opposés (AB) et (CD) sont situés dans le même plan et sont strictement parallèles."
        },
        {
          "id": "seconde_c_maths_geometrie_ch3_p1_ex4",
          "type": "mcq",
          "prompt": "Dans un cube ABCDEFGH, les droites (AB) et (CG) sont :",
          "options": [
            "Non coplanaires",
            "Sécantes",
            "Parallèles",
            "Confondus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "(AB) est horizontale dans la face avant/bas et (CG) est verticale dans la face arrière/droite. Elles ne sont pas parallèles et ne se coupent jamais : elles sont non coplanaires."
        },
        {
          "id": "seconde_c_maths_geometrie_ch3_p1_ex5",
          "type": "mcq",
          "prompt": "Quelle est la nature de l’intersection de deux plans sécants dans l’espace ?",
          "options": [
            "Une droite unique",
            "Un point unique",
            "Un segment de droite",
            "Un cercle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux plans sécants se coupent TOUJOURS suivant une droite et une seule."
        },
        {
          "id": "seconde_c_maths_geometrie_ch3_p1_ex6",
          "type": "mcq",
          "prompt": "Dans un cube ABCDEFGH, quelle est la position relative du plan (ABC) et du plan (EFG) ?",
          "options": [
            "Strictement parallèles (plans des faces inférieure et supérieure)",
            "Sécants suivant la droite (AC)",
            "Perpendiculaires",
            "Confondus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les faces inférieure (ABCD) et supérieure (EFGH) d’un cube sont portées par deux plans strictement parallèles."
        },
        {
          "id": "seconde_c_maths_geometrie_ch3_p1_ex7",
          "type": "mcq",
          "prompt": "Si deux points distincts A et B d’une droite (D) appartiennent à un plan (P), que peut-on affirmer de la droite (D) ?",
          "options": [
            "La droite (D) est entièrement incluse dans le plan (P) : (D) ⊂ (P)",
            "La droite (D) perce le plan (P) au milieu de [AB]",
            "La droite (D) est parallèle au plan mais extérieure",
            "On ne peut rien affirmer sans connaître un 3e point"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Règle d’incidence fondamentale : si une droite possède au moins deux points dans un plan, elle est entièrement contenue dans ce plan."
        },
        {
          "id": "seconde_c_maths_geometrie_ch3_p1_ex8",
          "type": "mcq",
          "prompt": "Dans un tétraèdre régulier ABCD, quelle est la position relative de l’arête (AB) et de l’arête opposée (CD) ?",
          "options": [
            "Non coplanaires",
            "Sécantes au sommet A",
            "Parallèles",
            "Incluses dans la même face"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans un tétraèdre ABCD, les arêtes opposées comme (AB) et (CD) ne partagent aucun sommet et ne sont pas parallèles : elles sont non coplanaires."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_ch3_p2",
      "order": 2,
      "title": "Théorèmes de parallélisme et sections planes de solides",
      "summary": "Critères de parallélisme droite-plan et plan-plan, théorème du toit, et méthode de détermination d’une section plane de polyèdre.",
      "conceptExplanation": "Le parallélisme dans l'espace obéit à des théorèmes précis qui évitent toute illusion d'optique dans les représentations en perspective cavalière.\n\n1. Parallélisme d’une droite et d’un plan :\n- Théorème fondamental : Une droite (D) est parallèle à un plan (P) si et seulement si elle est parallèle à au moins une droite (d) contenue dans le plan (P).\n- Conséquence : Si une droite (D) est parallèle à deux plans sécants (P) et (Q), alors elle est parallèle à leur droite d'intersection (d) = (P) ∩ (Q).\n\n2. Parallélisme de deux plans :\n- Théorème fondamental : Deux plans (P) et (Q) sont parallèles si et seulement si le plan (P) contient deux droites SÉCANTES (d1) et (d2) qui sont respectivement parallèles au plan (Q).\n- Propriété des intersections parallèles : Si deux plans parallèles (P) et (Q) sont coupés par un troisième plan (R), alors les deux droites d'intersection sont STRICTEMENT PARALLÈLES entre elles :\n  (P) ∥ (Q)  ⟹  [(P) ∩ (R)] ∥ [(Q) ∩ (R)].\n\n3. Le Théorème du Toit :\nSoit (P) et (Q) deux plans sécants selon une droite (Δ).\nSi (d1) est une droite de (P) et (d2) une droite de (Q) telles que (d1) ∥ (d2),\nalors leur commune direction est parallèle à la droite d'intersection (Δ) :\n  (d1) ∥ (d2)  ⟹  (d1) ∥ (Δ)  et  (d2) ∥ (Δ).\n(On l'appelle 'théorème du toit' car la ligne de faîte du toit est parallèle aux deux gouttières horizontales).\n\n4. Sections planes de solides (Cube, Tétraèdre, Pyramide) :\nLa section d'un solide par un plan sécant (P) est le polygone délimité par l'intersection de (P) avec chaque face du solide.\n- Règle des faces parallèles : Si le plan sécant coupe deux faces parallèles d'un solide (comme les faces opposées d'un cube), alors les segments de section sur ces deux faces sont STRICTEMENT PARALLÈLES.\n- Pour un cube : la section peut être un triangle, un quadrilatère (parallélogramme, trapèze, rectangle), un pentagone ou un hexagone (mais jamais plus de 6 côtés car le cube n'a que 6 faces !).",
      "formulas": [
        {
          "name": "Critère de parallélisme droite-plan",
          "formula": "(d) ⊂ (P) et (D) ∥ (d)  ⟹  (D) ∥ (P)",
          "note": "Il suffit de trouver UNE droite du plan parallèle à la droite (D)."
        },
        {
          "name": "Théorème du toit",
          "formula": "(P) ∩ (Q) = (Δ),  (d1) ⊂ (P),  (d2) ⊂ (Q),  (d1) ∥ (d2)  ⟹  (d1) ∥ (Δ)",
          "note": "La ligne d’intersection de deux plans est parallèle aux deux droites coplanaires parallèles."
        },
        {
          "name": "Faces parallèles coupées par un plan",
          "formula": "(P1) ∥ (P2)  ⟹  [(P1) ∩ (S)] ∥ [(P2) ∩ (S)]",
          "note": "Les traces de section sur deux faces opposées d’un cube sont toujours parallèles."
        }
      ],
      "keyRule": "Retiens le réflexe du théorème du toit : dès que deux plans sécants contiennent deux droites parallèles entre elles, leur droite d'intersection est obligatoirement parallèle à ces deux droites !",
      "workedExample": {
        "title": "Exemple résolu : Application du théorème du toit",
        "statement": "Soit ABCDEFGH un cube. On considère le plan (ABG) et le plan (CDH).\n1. Démontre que les droites (AB) et (DC) sont parallèles.\n2. Déduis-en la droite d’intersection des plans (ABG) et (CDH) ainsi que sa direction.",
        "methodSteps": [
          "Étape 1 : ABCD est un carré (face du cube), donc la droite (AB) est strictement parallèle à la droite (DC).",
          "Étape 2 : La droite (AB) est contenue dans le plan (ABG), et la droite (DC) est contenue dans le plan (CDH).",
          "Étape 3 : De plus, le point G appartient à la fois au plan (ABG) et au plan (CDH) (car G appartient à la face CDHG). Les deux plans ne sont donc pas parallèles : ils sont sécants selon une droite (Δ) passant par G.",
          "Étape 4 : D’après le théorème du toit, comme les droites (AB) de (ABG) et (DC) de (CDH) sont parallèles, la droite d’intersection (Δ) passant par G est strictement parallèle à (AB) et à (DC). C’est la droite (GH) !"
        ],
        "conclusion": "L’intersection des plans (ABG) et (CDH) est la droite (GH), parallèle à (AB) et (DC)."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_ch3_p2_ex1",
          "type": "mcq",
          "prompt": "À quelle condition une droite (D) est-elle parallèle à un plan (P) ?",
          "options": [
            "S’il existe dans le plan (P) au moins une droite (d) parallèle à (D)",
            "Si elle est perpendiculaire à toutes les droites du plan (P)",
            "Si elle a exactement un point commun avec le plan (P)",
            "Si elle coupe le plan selon un segment fini"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Théorème fondamental : une droite est parallèle à un plan si et seulement si elle est parallèle à une droite contenue dans ce plan."
        },
        {
          "id": "seconde_c_maths_geometrie_ch3_p2_ex2",
          "type": "mcq",
          "prompt": "Deux plans (P) et (Q) sont parallèles si :",
          "options": [
            "(P) contient deux droites sécantes qui sont parallèles au plan (Q)",
            "(P) contient une seule droite parallèle au plan (Q)",
            "Ils ont une droite d’intersection commune",
            "Leurs diagonales sont perpendiculaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour que deux plans soient parallèles, il faut et il suffit que l’un contienne deux droites sécantes parallèles à l’autre plan."
        },
        {
          "id": "seconde_c_maths_geometrie_ch3_p2_ex3",
          "type": "mcq",
          "prompt": "Que stipule le Théorème du Toit ?",
          "options": [
            "Si deux plans sécants contiennent deux droites parallèles entre elles, leur intersection est parallèle à ces deux droites",
            "La somme des hauteurs d’un toit est égale à sa largeur",
            "Tout plan parallèle au sol coupe le toit selon un triangle isocèle",
            "Deux droites perpendiculaires forment un angle droit dans l’espace"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le théorème du toit énonce que si deux plans sécants selon (Δ) contiennent respectivement deux droites parallèles (d1) et (d2), alors la droite d’intersection (Δ) est parallèle à (d1) et (d2)."
        },
        {
          "id": "seconde_c_maths_geometrie_ch3_p2_ex4",
          "type": "mcq",
          "prompt": "Si deux plans parallèles (P) et (Q) sont coupés par un troisième plan (R), comment sont leurs droites d’intersection ?",
          "options": [
            "Strictement parallèles entre elles",
            "Perpendiculaires entre elles",
            "Sécantes en un point",
            "Non coplanaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’intersection de deux plans parallèles par un même troisième plan donne toujours deux droites strictement parallèles."
        },
        {
          "id": "seconde_c_maths_geometrie_ch3_p2_ex5",
          "type": "mcq",
          "prompt": "Quel est le nombre maximal de côtés que peut posséder la section plane d’un cube par un plan ?",
          "options": [
            "6 côtés (hexagone)",
            "4 côtés (quadrilatère)",
            "8 côtés (octogone)",
            "3 côtés (triangle)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un cube possède 6 faces. Un plan ne peut couper chaque face que selon un segment au maximum. La section plane a donc au plus 6 côtés (hexagone)."
        },
        {
          "id": "seconde_c_maths_geometrie_ch3_p2_ex6",
          "type": "mcq",
          "prompt": "Dans un cube ABCDEFGH, quelle est la nature de la section par un plan parallèle à la face ABCD ?",
          "options": [
            "Un carré identique aux faces du cube",
            "Un triangle équilatéral",
            "Un cercle de rayon égal à l’arête",
            "Un trapèze quelconque"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un plan parallèle à une face d’un cube coupe les quatre faces adjacentes selon des segments de même longueur et perpendiculaires : la section est un carré identique."
        },
        {
          "id": "seconde_c_maths_geometrie_ch3_p2_ex7",
          "type": "mcq",
          "prompt": "Dans un tétraèdre ABCD, un plan sécant coupe les arêtes [AB], [AC] et [AD]. Quelle est la nature du polygone de section ?",
          "options": [
            "Un triangle",
            "Un pentagone",
            "Un carré",
            "Un hexagone"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le plan coupe trois arêtes issues du même sommet A, donc il intersecte exactement 3 faces du tétraèdre : la section est un triangle."
        },
        {
          "id": "seconde_c_maths_geometrie_ch3_p2_ex8",
          "type": "mcq",
          "prompt": "Si une droite (D) est parallèle à deux plans sécants (P) et (Q), quelle est sa position par rapport à leur droite d’intersection (Δ) ?",
          "options": [
            "(D) est parallèle à (Δ)",
            "(D) est perpendiculaire à (Δ)",
            "(D) est sécante à (Δ)",
            "(D) est confondue avec (Δ)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Puisque (D) est parallèle à (P) et à (Q), sa direction est commune aux deux plans, elle est donc obligatoirement parallèle à leur droite d’intersection (Δ)."
        }
      ]
    }
  ]
};

export const maths2deCAnglesInscritsChapter: CurriculumChapter = {
  "id": "seconde_c_maths_geometrie_ch4_angles_inscrits",
  "subjectId": "maths",
  "gradeLevel": "seconde_c",
  "order": 4,
  "officialVolumeHours": 6,
  "title": "Leçon 4 — Angles inscrits et relations métriques dans le triangle",
  "summary": "Théorème de l’angle au centre et angle inscrit, angle corde-tangente, quadrilatères inscriptibles, formule trigonométrique de l’aire d’un triangle et théorème des sinus.",
  "points": [
    {
      "id": "seconde_c_maths_geometrie_ch4_p1",
      "order": 1,
      "title": "Angles inscrits, angle au centre et quadrilatères inscriptibles",
      "summary": "Relations d’angles inscrits et angles au centre interceptant le même arc, angle formé par une corde et une tangente, et critère de cocyclicité.",
      "conceptExplanation": "L'étude des angles dans le cercle est l'une des branches les plus élégantes de la géométrie plane. Elle relie directement les angles et les arcs de cercle.\n\n1. Angle inscrit et angle au centre :\n- Un angle inscrit dans un cercle (C) est un angle dont le sommet M appartient au cercle et dont les côtés coupent le cercle en deux points distincts A et B (l'angle intercepte l'arc AB).\n- L'angle au centre associé est l'angle AOB dont le sommet O est le centre du cercle.\n- Théorème de l'angle au centre :\n  * Si le sommet M se trouve sur l'arc majeur (l'angle AMB est aigu ou droit) : la mesure de l'angle inscrit est exactement la moitié de l'angle au centre associé :\n    mes(AMB) = (1 / 2) · mes(AOB).\n  * Si le sommet M se trouve sur l'arc mineur (l'angle AMB est obtus) : la mesure vaut :\n    mes(AMB) = 180° − (1 / 2) · mes(AOB).\n\n2. Deux angles inscrits interceptant le même arc :\n- Théorème fondamental : Deux angles inscrits qui interceptent le même arc de cercle ont EXACTEMENT LA MÊME MESURE.\n- Cas particulier du demi-cercle : Tout angle inscrit qui intercepte un diamètre mesure 90°. (Autrement dit, tout triangle inscrit ayant pour côté un diamètre est rectangle).\n\n3. Angle défini par une corde et une demi-tangente :\n- Soit [AB] une corde d'un cercle (C) et [At) la demi-tangente au cercle en A.\n- L'angle tAB formé par la tangente et la corde a pour mesure la moitié de l'angle au centre qui intercepte la corde [AB] :\n  mes(tAB) = (1 / 2) · mes(AOB).\n- Il a donc la même mesure que tout angle inscrit interceptant la corde [AB].\n\n4. Quadrilatères inscriptibles (Points cocycliques) :\n- Quatre points A, B, C, D sont cocycliques (situés sur un même cercle) si et seulement si le quadrilatère convexe ABCD est inscriptible.\n- Théorème fondamental des angles opposés : Un quadrilatère convexe ABCD est inscriptible dans un cercle si et seulement si ses angles opposés sont supplémentaires (leur somme vaut 180°) :\n  mes(A) + mes(C) = 180°   et   mes(B) + mes(D) = 180°.",
      "formulas": [
        {
          "name": "Théorème de l’angle au centre (arc majeur)",
          "formula": "mes(AMB) = (1 / 2) · mes(AOB)",
          "note": "L’angle inscrit vaut la moitié de l’angle au centre interceptant le même arc."
        },
        {
          "name": "Angle corde-tangente",
          "formula": "mes(tAB) = (1 / 2) · mes(AOB) = mes(AMB)",
          "note": "Même mesure que l’angle inscrit interceptant la corde [AB]."
        },
        {
          "name": "Critère du quadrilatère inscriptible",
          "formula": "mes(A) + mes(C) = 180°",
          "note": "Les angles opposés sont obligatoirement supplémentaires."
        }
      ],
      "keyRule": "Retiens le théorème magique du cercle : Angle au centre = 2 × Angle inscrit. Et pour un quadrilatère inscriptible, la somme de deux angles opposés fait toujours 180° !",
      "workedExample": {
        "title": "Exemple résolu : Calcul d’angles et quadrilatère inscriptible",
        "statement": "Soit (C) un cercle de centre O. On donne un angle au centre AOB mesurant 70°. Soit M un point de l’arc majeur AB et N un point de l’arc mineur AB.\n1. Calcule la mesure de l’angle inscrit AMB.\n2. Calcule la mesure de l’angle inscrit ANB.\n3. Vérifie que le quadrilatère AMBN a des angles opposés supplémentaires.",
        "methodSteps": [
          "Étape 1 : Le point M est sur l’arc majeur. D’après le théorème de l’angle au centre : mes(AMB) = (1 / 2) · mes(AOB) = 70° / 2 = 35°.",
          "Étape 2 : Le point N est sur l’arc mineur. D’après la propriété de l’arc mineur : mes(ANB) = 180° − (1 / 2) · mes(AOB) = 180° − 35° = 145°.",
          "Étape 3 : Calculons la somme des deux angles opposés M et N du quadrilatère AMBN : mes(AMB) + mes(ANB) = 35° + 145° = 180°."
        ],
        "conclusion": "mes(AMB) = 35°, mes(ANB) = 145° et mes(AMB) + mes(ANB) = 180° : ils sont bien supplémentaires."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_ch4_p1_ex1",
          "type": "mcq",
          "prompt": "Dans un cercle, si un angle au centre AOB mesure 110°, quelle est la mesure d’un angle inscrit AMB interceptant le même arc majeur ?",
          "options": [
            "55° (la moitié de 110°)",
            "110°",
            "220°",
            "70°"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D’après le théorème de l’angle au centre, l’angle inscrit vaut la moitié de l’angle au centre qui intercepte le même arc : 110° / 2 = 55°."
        },
        {
          "id": "seconde_c_maths_geometrie_ch4_p1_ex2",
          "type": "mcq",
          "prompt": "Si deux angles inscrits AMB et ANB interceptent exactement le même arc de cercle AB, que peut-on affirmer ?",
          "options": [
            "Ils ont exactement la même mesure : mes(AMB) = mes(ANB)",
            "Leur somme est égale à 180°",
            "mes(AMB) = 2 · mes(ANB)",
            "Ils sont complémentaires (somme = 90°)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux angles inscrits qui interceptent le même arc de cercle ont toujours la même mesure."
        },
        {
          "id": "seconde_c_maths_geometrie_ch4_p1_ex3",
          "type": "mcq",
          "prompt": "Quelle est la mesure de tout angle inscrit qui intercepte un diamètre du cercle ?",
          "options": [
            "90° (angle droit)",
            "45°",
            "60°",
            "180°"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un diamètre intercepte un angle au centre plat de 180°. L’angle inscrit associé mesure donc 180° / 2 = 90°."
        },
        {
          "id": "seconde_c_maths_geometrie_ch4_p1_ex4",
          "type": "mcq",
          "prompt": "Soit [AB] une corde d’un cercle de centre O et [At) la demi-tangente en A. Si mes(AOB) = 80°, que vaut l’angle tAB ?",
          "options": [
            "40°",
            "80°",
            "160°",
            "20°"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’angle formé par la tangente et la corde est égal à la moitié de l’angle au centre interceptant cette corde : 80° / 2 = 40°."
        },
        {
          "id": "seconde_c_maths_geometrie_ch4_p1_ex5",
          "type": "mcq",
          "prompt": "Un quadrilatère convexe ABCD est inscriptible dans un cercle si et seulement si :",
          "options": [
            "Ses angles opposés sont supplémentaires (mes(A) + mes(C) = 180°)",
            "Tous ses côtés ont la même longueur",
            "Ses diagonales sont de même longueur",
            "Ses quatre angles sont droits"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Théorème fondamental de cocyclicité : un quadrilatère est inscriptible dans un cercle si et seulement si ses angles opposés ont pour somme 180°."
        },
        {
          "id": "seconde_c_maths_geometrie_ch4_p1_ex6",
          "type": "mcq",
          "prompt": "Dans un quadrilatère inscriptible ABCD, si l’angle A mesure 68°, combien mesure l’angle opposé C ?",
          "options": [
            "112°",
            "68°",
            "22°",
            "180°"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les angles opposés sont supplémentaires : mes(C) = 180° − mes(A) = 180° − 68° = 112°."
        },
        {
          "id": "seconde_c_maths_geometrie_ch4_p1_ex7",
          "type": "mcq",
          "prompt": "Dans un cercle de centre O, un angle au centre AOB mesure 120°. Que vaut l’angle inscrit ANB dont le sommet N est sur l’arc MINEUR AB ?",
          "options": [
            "120°",
            "60°",
            "180°",
            "90°"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sur l’arc mineur, mes(ANB) = 180° − (1 / 2) · mes(AOB) = 180° − 60° = 120°."
        },
        {
          "id": "seconde_c_maths_geometrie_ch4_p1_ex8",
          "type": "mcq",
          "prompt": "Parmi les quadrilatères suivants, lequel est TOUJOURS inscriptible dans un cercle ?",
          "options": [
            "Le rectangle (car ses angles opposés sont droits : 90° + 90° = 180°)",
            "Le losange quelconque",
            "Le parallélogramme non rectangle",
            "Le trapèze quelconque"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans un rectangle, les 4 angles valent 90°. Les angles opposés ont donc pour somme 90° + 90° = 180°, il est donc toujours inscriptible."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_ch4_p2",
      "order": 2,
      "title": "Relations métriques dans le triangle : aire et théorème des sinus",
      "summary": "Formule trigonométrique de l’aire d’un triangle, loi des sinus dans un triangle quelconque et calcul du rayon du cercle circonscrit.",
      "conceptExplanation": "Jusqu'en classe de Troisième, pour calculer l'aire d'un triangle, il fallait obligatoirement connaître sa base et sa hauteur : Aire = (base × hauteur) / 2. En Seconde C, la trigonométrie permet de calculer l'aire et tous les côtés sans aucune hauteur !\n\n1. Notations usuelles dans un triangle ABC :\n- A, B, C désignent les trois sommets et la mesure des trois angles.\n- a = BC désigne la longueur du côté opposé au sommet A.\n- b = AC désigne la longueur du côté opposé au sommet B.\n- c = AB désigne la longueur du côté opposé au sommet C.\n- R désigne le rayon du cercle circonscrit au triangle ABC.\n\n2. Formule trigonométrique de l’aire d’un triangle :\nL'aire A d'un triangle ABC est égale au demi-produit des longueurs de deux côtés par le sinus de l'angle qu'ils forment :\n  Aire = (1 / 2) · b · c · sin(A)\n       = (1 / 2) · a · c · sin(B)\n       = (1 / 2) · a · b · sin(C).\n\n3. Le Théorème des Sinus (Loi des sinus) :\nDans tout triangle ABC inscrit dans un cercle de rayon R, les rapports entre la longueur d'un côté et le sinus de l'angle opposé sont tous égaux et valent deux fois le rayon du cercle circonscrit (le diamètre 2R) :\n  a / sin(A) = b / sin(B) = c / sin(C) = 2R = (a · b · c) / (2 · Aire).\n\n4. Applications fondamentales en Seconde C :\n- Calculer la longueur d'un côté inconnu : connaissant un côté et deux angles, par exemple b = a · sin(B) / sin(A).\n- Calculer le rayon du cercle circonscrit : R = a / (2 · sin(A)).\n- Calculer l'aire sans tracer de hauteur : Aire = (a · b · c) / (4R).",
      "formulas": [
        {
          "name": "Formule trigonométrique de l’aire",
          "formula": "Aire = (1 / 2) · b · c · sin(A)",
          "note": "Demi-produit de deux côtés par le sinus de leur angle compris."
        },
        {
          "name": "Théorème des sinus",
          "formula": "a / sin(A) = b / sin(B) = c / sin(C) = 2R",
          "note": "Égalité des trois rapports au diamètre 2R du cercle circonscrit."
        },
        {
          "name": "Rayon du cercle circonscrit",
          "formula": "R = a / (2 · sin(A))",
          "note": "Permet de trouver R sans construire le cercle."
        }
      ],
      "keyRule": "Règle d’or des sinus : a / sin(A) = b / sin(B) = c / sin(C) = 2R. Dès que tu as un côté et son angle opposé, tu connais immédiatement le diamètre 2R du cercle circonscrit !",
      "workedExample": {
        "title": "Exemple résolu : Calcul d’aire et application de la loi des sinus",
        "statement": "Soit ABC un triangle tel que b = AC = 6 cm, c = AB = 5 cm et l’angle A mesure 30°.\n1. Calcule l’aire du triangle ABC.\n2. Si de plus a = BC = 4 cm, calcule le rayon R du cercle circonscrit à ABC.",
        "methodSteps": [
          "Étape 1 : Appliquons la formule trigonométrique de l’aire : Aire = (1 / 2) · b · c · sin(A).",
          "Étape 2 : Comme sin(30°) = 1 / 2 = 0,5, on a : Aire = (1 / 2) × 6 × 5 × 0,5 = 15 × 0,5 = 7,5 cm².",
          "Étape 3 : D’après le théorème des sinus : a / sin(A) = 2R.",
          "Étape 4 : Remplaçons par les valeurs : 4 / sin(30°) = 4 / 0,5 = 8 cm = 2R.",
          "Étape 5 : On en déduit le rayon : R = 8 / 2 = 4 cm."
        ],
        "conclusion": "L’aire du triangle ABC est 7,5 cm² et le rayon de son cercle circonscrit est R = 4 cm."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_ch4_p2_ex1",
          "type": "mcq",
          "prompt": "Quelle est la formule trigonométrique exacte de l’aire d’un triangle ABC connaissant les côtés b, c et l’angle A ?",
          "options": [
            "Aire = (1 / 2) · b · c · sin(A)",
            "Aire = b · c · cos(A)",
            "Aire = (1 / 2) · (b + c) · sin(A)",
            "Aire = (b · c) / (2 · cos(A))"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’aire d’un triangle vaut la moitié du produit de deux côtés par le sinus de l’angle compris entre ces deux côtés : (1 / 2) · b · c · sin(A)."
        },
        {
          "id": "seconde_c_maths_geometrie_ch4_p2_ex2",
          "type": "mcq",
          "prompt": "Dans un triangle ABC, on donne b = 8 cm, c = 10 cm et sin(A) = 0,6. Quelle est l’aire du triangle ?",
          "options": [
            "24 cm²",
            "48 cm²",
            "40 cm²",
            "80 cm²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Aire = (1 / 2) × b × c × sin(A) = (1 / 2) × 8 × 10 × 0,6 = 40 × 0,6 = 24 cm²."
        },
        {
          "id": "seconde_c_maths_geometrie_ch4_p2_ex3",
          "type": "mcq",
          "prompt": "D’après le théorème des sinus, à quoi est égal le rapport a / sin(A) dans un triangle de cercle circonscrit de rayon R ?",
          "options": [
            "2R (le diamètre du cercle circonscrit)",
            "R",
            "R²",
            "4R"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le théorème des sinus établit que a / sin(A) = b / sin(B) = c / sin(C) = 2R, où R est le rayon du cercle circonscrit."
        },
        {
          "id": "seconde_c_maths_geometrie_ch4_p2_ex4",
          "type": "mcq",
          "prompt": "Dans un triangle ABC, a = 12 cm et l’angle A mesure 30°. Quel est le rayon R du cercle circonscrit ?",
          "options": [
            "12 cm",
            "6 cm",
            "24 cm",
            "3 cm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "2R = a / sin(A) = 12 / sin(30°) = 12 / 0,5 = 24 cm. Donc R = 24 / 2 = 12 cm."
        },
        {
          "id": "seconde_c_maths_geometrie_ch4_p2_ex5",
          "type": "mcq",
          "prompt": "Dans un triangle ABC, on a a = 6 cm, sin(A) = 0,5 et sin(B) = 0,8. Quelle est la longueur du côté b = AC ?",
          "options": [
            "9,6 cm",
            "4,8 cm",
            "12 cm",
            "3,75 cm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D’après la loi des sinus : a / sin(A) = b / sin(B) ⟹ b = a · sin(B) / sin(A) = (6 × 0,8) / 0,5 = 4,8 / 0,5 = 9,6 cm."
        },
        {
          "id": "seconde_c_maths_geometrie_ch4_p2_ex6",
          "type": "mcq",
          "prompt": "Dans un triangle équilatéral de côté a = 6 cm où chaque angle vaut 60° (avec sin(60°) = √3 / 2), quelle est l’aire exacte ?",
          "options": [
            "9√3 cm²",
            "18√3 cm²",
            "36 cm²",
            "18 cm²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Aire = (1 / 2) × a × a × sin(60°) = (1 / 2) × 6 × 6 × (√3 / 2) = 18 × (√3 / 2) = 9√3 cm²."
        },
        {
          "id": "seconde_c_maths_geometrie_ch4_p2_ex7",
          "type": "mcq",
          "prompt": "Quelle relation relie l’aire d’un triangle ABC, ses trois côtés a, b, c et le rayon R de son cercle circonscrit ?",
          "options": [
            "Aire = (a · b · c) / (4R)",
            "Aire = 4R / (a · b · c)",
            "Aire = (a · b · c) / (2R)",
            "Aire = 2R · (a + b + c)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme sin(C) = c / (2R), en remplaçant dans Aire = (1 / 2)ab · sin(C), on trouve directement : Aire = (a · b · c) / (4R)."
        },
        {
          "id": "seconde_c_maths_geometrie_ch4_p2_ex8",
          "type": "mcq",
          "prompt": "Si un triangle ABC est rectangle en A (angle A = 90° avec sin(90°) = 1), que devient le rapport a / sin(A) ?",
          "options": [
            "a = 2R (l’hypoténuse est un diamètre du cercle circonscrit)",
            "a = R",
            "a = 0",
            "a = 4R"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Puisque sin(90°) = 1, a / sin(90°) = a = 2R. L’hypoténuse a d’un triangle rectangle est donc bien le diamètre de son cercle circonscrit."
        }
      ]
    }
  ]
};

export const maths2deCAnglesOrientesTrigoChapter: CurriculumChapter = {
  "id": "seconde_c_maths_geometrie_ch5_angles_orientes_trigo",
  "subjectId": "maths",
  "gradeLevel": "seconde_c",
  "order": 5,
  "officialVolumeHours": 10,
  "title": "Leçon 5 — Angles orientés et trigonométrie",
  "summary": "Le radian, conversion degrés-radians, longueur d’arc, angle orienté de deux vecteurs, mesure principale, cercle trigonométrique, sinus, cosinus, tangente et valeurs remarquables.",
  "points": [
    {
      "id": "seconde_c_maths_geometrie_ch5_p1",
      "order": 1,
      "title": "Le radian, angles orientés de vecteurs et mesure principale",
      "summary": "Définition du radian, relation longueur d’arc-rayon, sens d’orientation du plan, angle de deux vecteurs et détermination méthodique de la mesure principale.",
      "conceptExplanation": "En sciences et dans les études supérieures, les angles ne sont presque plus mesurés en degrés mais en RADIANS, l'unité universelle du Système International !\n\n1. Le Radian et longueur d’arc :\n- Définition : Un radian (noté rad) est la mesure d'un angle au centre qui intercepte, sur un cercle de rayon R, un arc dont la longueur L est exactement égale au rayon R.\n- Formule de la longueur d'arc : Pour un angle au centre de mesure α RADIANS sur un cercle de rayon R, la longueur de l'arc intercepte est donnée par la formule très simple :\n  L = R × α.\n- Équivalence fondamentale degrés ⟷ radians : Un demi-tour de cercle correspond à 180° et à un arc de demi-périmètre π × R. Ainsi :\n  180° = π rad   ⟺   360° = 2π rad.\n- Formule de conversion : Pour convertir un angle de d degrés en α radians (et inversement) :\n  α = d × (π / 180)   et   d = α × (180 / π).\n\n2. Orientation du plan et angle orienté de deux vecteurs :\n- On oriente le plan en choisissant un sens de rotation positif appelé sens direct (ou sens trigonométrique), qui est le sens inverse des aiguilles d'une montre.\n- Soit u et v deux vecteurs non nuls. L'angle orienté formé par ces deux vecteurs est noté (u, v).\n- Un angle orienté possède une infinité de mesures réelles qui diffèrent toutes d'un nombre entier de tours complets (2π) : si θ est une mesure, alors toute mesure s'écrit θ + 2kπ avec k ∈ ℤ (on note : (u, v) = θ [2π]).\n\n3. La Mesure principale d’un angle orienté :\n- Parmi l'infinité de mesures d'un angle orienté, il en existe une SEULE ET UNIQUE qui appartient à l'intervalle semi-ouvert ]−π, π].\n- Cette valeur unique est appelée la mesure principale de l'angle orienté.\n- Méthode pour trouver la mesure principale d'une mesure α :\n  On retranche ou on ajoute le nombre de tours complets 2kπ nécessaire pour que le résultat appartienne à ]−π, π].\n\n4. Propriétés algébriques (Relation de Chasles pour les angles orientés) :\n- (v, u) = −(u, v) [2π]  (changer l'ordre des vecteurs change le signe de l'angle).\n- (−u, v) = (u, v) + π [2π]  et  (u, −v) = (u, v) + π [2π].\n- (−u, −v) = (u, v) [2π].\n- Relation de Chasles : Pour tous vecteurs non nuls u, v, w :\n  (u, w) = (u, v) + (v, w) [2π].",
      "formulas": [
        {
          "name": "Conversion Degrés ⟷ Radians",
          "formula": "180° = π rad  ⟺  α = d × (π / 180)",
          "note": "Proportionnalité directe avec π = 180°."
        },
        {
          "name": "Longueur d’arc de cercle",
          "formula": "L = R × α",
          "note": "Attention : α doit obligatoirement être exprimé en RADIANS !"
        },
        {
          "name": "Intervalle de la mesure principale",
          "formula": "θ ∈ ]−π, π]",
          "note": "Strictement supérieur à −π et inférieur ou égal à +π."
        }
      ],
      "keyRule": "Retiens la règle d’or : la mesure principale d'un angle orienté est l'unique valeur située dans l'intervalle ]−π, π]. Pour la trouver, ajoute ou soustrais des multiples de 2π !",
      "workedExample": {
        "title": "Exemple résolu : Conversion et calcul de mesure principale",
        "statement": "1. Convertis en radians l’angle de 150°.\n2. Soit un angle orienté ayant pour mesure α = 19π / 4. Détermine sa mesure principale θ.",
        "methodSteps": [
          "Étape 1 : Appliquons la formule de conversion pour 150° : α = 150 × (π / 180) = (150 / 180) · π = (5 / 6) · π rad.",
          "Étape 2 : Cherchons la mesure principale de α = 19π / 4. Effectuons la division euclidienne de 19 par 8 (car 2π = 8π / 4) : 19 = 2 × 8 + 3, soit 19 / 4 = 4,75.",
          "Étape 3 : Le nombre pair de tours le plus proche est 4 ou 5... 19π / 4 = (16π + 3π) / 4 = 4π + 3π / 4 = 2 × (2π) + 3π / 4.",
          "Étape 4 : En retranchant 2 tours complets (4π), on obtient θ = 19π / 4 − 4π = 19π / 4 − 16π / 4 = 3π / 4.",
          "Étape 5 : Vérifions l’intervalle : comme −π < 3π / 4 ≤ π (car 3 / 4 = 0,75 ≤ 1), 3π / 4 est bien la mesure principale."
        ],
        "conclusion": "150° correspond à 5π / 6 rad, et la mesure principale de 19π / 4 est 3π / 4 rad."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_ch5_p1_ex1",
          "type": "mcq",
          "prompt": "Combien vaut en degrés un angle de π / 3 radians ?",
          "options": [
            "60°",
            "30°",
            "45°",
            "90°"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme π rad = 180°, on a : π / 3 rad = 180° / 3 = 60°."
        },
        {
          "id": "seconde_c_maths_geometrie_ch5_p1_ex2",
          "type": "mcq",
          "prompt": "Quelle est la conversion exacte de l’angle de 45° en radians ?",
          "options": [
            "π / 4 rad",
            "π / 2 rad",
            "π / 6 rad",
            "π / 3 rad"
          ],
          "correctAnswerIndex": 0,
          "explanation": "45 × (π / 180) = 45π / 180 = π / 4 rad."
        },
        {
          "id": "seconde_c_maths_geometrie_ch5_p1_ex3",
          "type": "mcq",
          "prompt": "Sur un cercle de rayon R = 6 cm, quelle est la longueur de l’arc intercepté par un angle au centre de π / 2 radians ?",
          "options": [
            "3π cm (environ 9,42 cm)",
            "6π cm",
            "12π cm",
            "3 cm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La formule de longueur d’arc est L = R × α = 6 × (π / 2) = 3π cm."
        },
        {
          "id": "seconde_c_maths_geometrie_ch5_p1_ex4",
          "type": "mcq",
          "prompt": "Dans quel intervalle se situe obligatoirement la mesure principale d’un angle orienté ?",
          "options": [
            "]−π, π]",
            "[0, 2π[",
            "[0, π]",
            "[−2π, 2π]"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition mathématique, la mesure principale d’un angle orienté appartient à l’intervalle semi-ouvert ]−π, π]."
        },
        {
          "id": "seconde_c_maths_geometrie_ch5_p1_ex5",
          "type": "mcq",
          "prompt": "Quelle est la mesure principale de l’angle orienté mesurant 9π / 4 ?",
          "options": [
            "π / 4",
            "−π / 4",
            "3π / 4",
            "5π / 4"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On retranche un tour complet (2π = 8π / 4) : 9π / 4 − 8π / 4 = π / 4. Comme π / 4 ∈ ]−π, π], c’est la mesure principale."
        },
        {
          "id": "seconde_c_maths_geometrie_ch5_p1_ex6",
          "type": "mcq",
          "prompt": "Quelle est la mesure principale de l’angle orienté mesurant −7π / 3 ?",
          "options": [
            "−π / 3",
            "π / 3",
            "2π / 3",
            "−2π / 3"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On ajoute deux tours complets (4π = 12π / 3) : −7π / 3 + 12π / 3 = 5π / 3. Puis comme 5π / 3 > π, on soustrait 2π (6π / 3) : 5π / 3 − 6π / 3 = −π / 3 ∈ ]−π, π]."
        },
        {
          "id": "seconde_c_maths_geometrie_ch5_p1_ex7",
          "type": "mcq",
          "prompt": "Si (u, v) = π / 5 [2π], que vaut la mesure de l’angle orienté opposé (v, u) ?",
          "options": [
            "−π / 5 [2π]",
            "π / 5 [2π]",
            "4π / 5 [2π]",
            "6π / 5 [2π]"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Inverser l’ordre des deux vecteurs change le signe de l’angle : (v, u) = −(u, v) = −π / 5 [2π]."
        },
        {
          "id": "seconde_c_maths_geometrie_ch5_p1_ex8",
          "type": "mcq",
          "prompt": "D’après la relation de Chasles pour les angles orientés, (u, v) + (v, w) est égal à :",
          "options": [
            "(u, w) [2π]",
            "(w, u) [2π]",
            "0",
            "(u, v) · (v, w)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La relation de Chasles s’applique aux angles orientés : (u, v) + (v, w) = (u, w) [2π]."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_ch5_p2",
      "order": 2,
      "title": "Cercle trigonométrique, lignes trigonométriques et valeurs remarquables",
      "summary": "Définition de cosinus, sinus et tangente sur le cercle trigonométrique, formule fondamentale cos²(x) + sin²(x) = 1, valeurs remarquables et angles associés.",
      "conceptExplanation": "Le cercle trigonométrique est l'outil central de toute la trigonométrie moderne. Il permet de définir le cosinus et le sinus pour N'IMPORTE QUEL nombre réel x, qu'il soit positif, négatif ou supérieur à 360° !\n\n1. Définition du cercle trigonométrique :\n- On appelle cercle trigonométrique le cercle de centre O, de rayon 1, orienté dans le sens direct et muni d'un repère orthonormé direct (O, I, J) où I(1, 0) et J(0, 1).\n- Enroulement de la droite réelle : À tout nombre réel x correspond un unique point M sur le cercle trigonométrique tel que l'arc orienté IM ait pour longueur algébrique x (mesure de l'angle orienté (OI, OM) = x rad).\n\n2. Définitions du Cosinus, Sinus et Tangente :\n- Le cosinus de x, noté cos(x), est l'ABSCISSE du point M dans le repère (O, I, J).\n- Le sinus de x, noté sin(x), est l'ORDONNÉE du point M dans le repère (O, I, J).\n- Ainsi, pour tout réel x : M a pour coordonnées M(cos(x), sin(x)).\n- La tangente de x, notée tan(x), est le quotient tan(x) = sin(x) / cos(x) (définie pour tout x ≠ π / 2 + kπ).\n\n3. Relations fondamentales universelles :\n- Pour tout réel x : −1 ≤ cos(x) ≤ 1   et   −1 ≤ sin(x) ≤ 1.\n- Théorème fondamental de Pythagore : Pour tout réel x :\n  cos²(x) + sin²(x) = 1.\n- Relation tangente-cosinus : Pour tout x ≠ π / 2 + kπ :\n  1 + tan²(x) = 1 / cos²(x).\n\n4. Tableau des valeurs remarquables (à connaître par cœur en 2de C) :\n- x = 0 (0°) : cos(0) = 1, sin(0) = 0, tan(0) = 0.\n- x = π / 6 (30°) : cos(π / 6) = √3 / 2, sin(π / 6) = 1 / 2, tan(π / 6) = √3 / 3.\n- x = π / 4 (45°) : cos(π / 4) = √2 / 2, sin(π / 4) = √2 / 2, tan(π / 4) = 1.\n- x = π / 3 (60°) : cos(π / 3) = 1 / 2, sin(π / 3) = √3 / 2, tan(π / 3) = √3.\n- x = π / 2 (90°) : cos(π / 2) = 0, sin(π / 2) = 1, tan(π / 2) non définie.\n- x = π (180°) : cos(π) = −1, sin(π) = 0, tan(π) = 0.\n\n5. Propriétés des angles associés (symétries sur le cercle) :\n- Angles opposés : cos(−x) = cos(x)   et   sin(−x) = −sin(x).\n- Angles supplémentaires : cos(π − x) = −cos(x)   et   sin(π − x) = sin(x).\n- Angles opposés par demi-tour : cos(π + x) = −cos(x)   et   sin(π + x) = −sin(x).\n- Angles complémentaires : cos(π / 2 − x) = sin(x)   et   sin(π / 2 − x) = cos(x).",
      "formulas": [
        {
          "name": "Relation fondamentale de la trigonométrie",
          "formula": "cos²(x) + sin²(x) = 1",
          "note": "Vraie pour TOUT nombre réel x sans aucune exception."
        },
        {
          "name": "Définition de la tangente",
          "formula": "tan(x) = sin(x) / cos(x)  ;  1 + tan²(x) = 1 / cos²(x)",
          "note": "Définie pour tout x tel que cos(x) ≠ 0."
        },
        {
          "name": "Angles associés fondamentaux",
          "formula": "cos(−x) = cos(x)  ;  sin(π − x) = sin(x)",
          "note": "Cosinus est pair, sinus est impair."
        }
      ],
      "keyRule": "Retiens par cœur les coordonnées du point M(cos x, sin x) sur le cercle de rayon 1. L'abscisse horizontale est le cosinus, l'ordonnée verticale est le sinus. Et toujours : cos²(x) + sin²(x) = 1 !",
      "workedExample": {
        "title": "Exemple résolu : Calcul trigonométrique exact avec les angles associés",
        "statement": "1. Calcule la valeur exacte de sin(5π / 6).\n2. Sachant que x ∈ [0, π / 2] et que cos(x) = 3 / 5, calcule la valeur exacte de sin(x) et de tan(x).",
        "methodSteps": [
          "Étape 1 : Remarquons que 5π / 6 = π − π / 6. Utilisons la formule des angles supplémentaires : sin(π − x) = sin(x).",
          "Étape 2 : On a donc sin(5π / 6) = sin(π − π / 6) = sin(π / 6). Comme la valeur remarquable est sin(π / 6) = 1 / 2, alors sin(5π / 6) = 1 / 2.",
          "Étape 3 : Utilisons la relation fondamentale cos²(x) + sin²(x) = 1 pour trouver sin(x) : sin²(x) = 1 − cos²(x) = 1 − (3 / 5)² = 1 − 9 / 25 = 16 / 25.",
          "Étape 4 : Comme x ∈ [0, π / 2], sin(x) est positif. Donc sin(x) = √(16 / 25) = 4 / 5.",
          "Étape 5 : Calculons la tangente : tan(x) = sin(x) / cos(x) = (4 / 5) / (3 / 5) = 4 / 3."
        ],
        "conclusion": "sin(5π / 6) = 1 / 2, sin(x) = 4 / 5 et tan(x) = 4 / 3."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_ch5_p2_ex1",
          "type": "mcq",
          "prompt": "Sur le cercle trigonométrique, à quoi correspondent respectivement l’abscisse et l’ordonnée du point M image du réel x ?",
          "options": [
            "L’abscisse est cos(x) et l’ordonnée est sin(x)",
            "L’abscisse est sin(x) et l’ordonnée est cos(x)",
            "L’abscisse est tan(x) et l’ordonnée est cotan(x)",
            "L’abscisse est 1 et l’ordonnée est x"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition du cercle trigonométrique muni du repère orthonormé (O, I, J), le point image M a pour coordonnées (cos(x), sin(x))."
        },
        {
          "id": "seconde_c_maths_geometrie_ch5_p2_ex2",
          "type": "mcq",
          "prompt": "Quelle relation fondamentale relie cos(x) et sin(x) pour tout nombre réel x ?",
          "options": [
            "cos²(x) + sin²(x) = 1",
            "cos(x) + sin(x) = 1",
            "cos²(x) − sin²(x) = 1",
            "cos(x) · sin(x) = 1 / 2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Puisque le point M(cos x, sin x) appartient au cercle de rayon 1 centré en O, la distance OM² = x² + y² = cos²(x) + sin²(x) = 1² = 1."
        },
        {
          "id": "seconde_c_maths_geometrie_ch5_p2_ex3",
          "type": "mcq",
          "prompt": "Quelle est la valeur remarquable exacte de cos(π / 3) ?",
          "options": [
            "1 / 2",
            "√3 / 2",
            "√2 / 2",
            "0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour l’angle de 60° (π / 3 rad), la valeur remarquable est cos(π / 3) = 1 / 2 (et sin(π / 3) = √3 / 2)."
        },
        {
          "id": "seconde_c_maths_geometrie_ch5_p2_ex4",
          "type": "mcq",
          "prompt": "Quelle est la valeur remarquable exacte de sin(π / 4) ?",
          "options": [
            "√2 / 2",
            "1 / 2",
            "√3 / 2",
            "1"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour l’angle de 45° (π / 4 rad), le cosinus et le sinus sont égaux et valent tous les deux √2 / 2."
        },
        {
          "id": "seconde_c_maths_geometrie_ch5_p2_ex5",
          "type": "mcq",
          "prompt": "D’après la propriété des angles opposés, que vaut cos(−x) ?",
          "options": [
            "cos(x)",
            "−cos(x)",
            "sin(x)",
            "−sin(x)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fonction cosinus est paire : les points associés à x et −x ont la même abscisse sur le cercle trigonométrique, donc cos(−x) = cos(x)."
        },
        {
          "id": "seconde_c_maths_geometrie_ch5_p2_ex6",
          "type": "mcq",
          "prompt": "En utilisant la formule des angles supplémentaires sin(π − x) = sin(x), que vaut sin(5π / 6) ?",
          "options": [
            "1 / 2 (car sin(5π / 6) = sin(π / 6))",
            "−1 / 2",
            "√3 / 2",
            "−√3 / 2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "5π / 6 = π − π / 6, donc sin(5π / 6) = sin(π − π / 6) = sin(π / 6) = 1 / 2."
        },
        {
          "id": "seconde_c_maths_geometrie_ch5_p2_ex7",
          "type": "mcq",
          "prompt": "Sachant que x ∈ [0, π / 2] et que cos(x) = 0,8, quelle est la valeur de sin(x) ?",
          "options": [
            "0,6",
            "0,2",
            "0,4",
            "1"
          ],
          "correctAnswerIndex": 0,
          "explanation": "sin²(x) = 1 − cos²(x) = 1 − 0,8² = 1 − 0,64 = 0,36. Comme x ∈ [0, π / 2], sin(x) > 0, donc sin(x) = √0,36 = 0,6."
        },
        {
          "id": "seconde_c_maths_geometrie_ch5_p2_ex8",
          "type": "mcq",
          "prompt": "Quelles sont les deux solutions de l’équation cos(x) = 1 / 2 sur l’intervalle ]−π, π] ?",
          "options": [
            "x = π / 3  ou  x = −π / 3",
            "x = π / 6  ou  x = −π / 6",
            "x = 2π / 3  ou  x = −2π / 3",
            "x = π / 2  ou  x = −π / 2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sur l’intervalle ]−π, π], l’équation cos(x) = 1 / 2 admet exactement deux solutions symétriques par rapport à l’axe des abscisses : x = π / 3 et x = −π / 3."
        }
      ]
    }
  ]
};

export const maths2deCHomothetieChapter: CurriculumChapter = {
  "id": "seconde_c_maths_geometrie_ch6_homothetie",
  "subjectId": "maths",
  "gradeLevel": "seconde_c",
  "order": 6,
  "officialVolumeHours": 6,
  "title": "Leçon 6 — Homothétie",
  "summary": "Définition géométrique et vectorielle d’une homothétie, centre et rapport, propriété fondamentale vectorielle, images de figures (droite, segment, cercle), multiplication des aires par k² et propriétés de conservation.",
  "points": [
    {
      "id": "seconde_c_maths_geometrie_ch6_p1",
      "order": 1,
      "title": "Définition, propriété fondamentale et images de figures",
      "summary": "Définition de l’homothétie h(Ω, k), cas particuliers (identité, symétrie centrale), propriété vectorielle fondamentale M’N’ = k · MN et image d’une droite, d’un segment et d’un cercle.",
      "conceptExplanation": "Dans la vie courante, un zoom sur smartphone, une maquette d’architecte ou un agrandissement photo conservent exactement les formes tout en modifiant les dimensions. En mathématiques, cette transformation s’appelle une homothétie.\n\n1. Définition fondamentale de l’homothétie :\nSoit Ω un point fixé du plan (appelé le centre) et k un nombre réel non nul (appelé le rapport de l’homothétie).\nOn appelle homothétie de centre Ω et de rapport k, notée h(Ω, k), l’application du plan dans lui-même qui, à tout point M, associe l’unique point M’ tel que :\n  ΩM’ = k · ΩM.\n\n2. Conséquences immédiates et cas particuliers :\n- Alignement : Les points Ω, M et M’ sont toujours strictement alignés.\n- Si k > 0 : M et M’ sont situés du même côté par rapport au centre Ω.\n- Si k < 0 : M et M’ sont situés de part et d’autre du centre Ω.\n- Cas k = 1 : L’homothétie de rapport 1 est l’application identique du plan (tout point est invariant).\n- Cas k = −1 : L’homothétie de centre Ω et de rapport −1 est la symétrie centrale de centre Ω (ΩM’ = −ΩM).\n- Point invariant : Pour tout rapport k ≠ 1, le centre Ω est le SEUL et UNIQUE point invariant de l’homothétie : h(Ω) = Ω.\n\n3. Propriété fondamentale vectorielle :\nSoit M et N deux points quelconques du plan d’images respectives M’ et N’ par l’homothétie h(Ω, k). Alors :\n  M’N’ = k · MN.\nCette relation vectorielle fondamentale prouve que le vecteur formé par les images est colinéaire au vecteur formé par les points d’origine, avec le coefficient exact k.\n\n4. Images de figures simples :\n- Image d’une droite : L’image d’une droite (D) est une droite (D’) qui lui est STRICTEMENT PARALLÈLE ((D’) ∥ (D)).\n  Cas particulier : Si le centre Ω appartient à (D), alors l’image de (D) est (D) elle-même ((D) est globalement invariante).\n- Image d’un segment : L’image du segment [AB] est le segment [A’B’]. Sa longueur vaut :\n  A’B’ = |k| × AB.\n- Multiplication des aires : L’homothétie multiplie les aires de toute surface plane par le carré de son rapport :\n  Aire(Image) = k² × Aire(Initiale).\n- Image d’un cercle : L’image d’un cercle C(O, r) de centre O et de rayon r par h(Ω, k) est un cercle C’(O’, r’) dont le centre est l’image O’ = h(O) et dont le rayon vaut r’ = |k| × r.",
      "formulas": [
        {
          "name": "Définition vectorielle de l’homothétie",
          "formula": "ΩM’ = k · ΩM",
          "note": "Ω est le centre et k est le rapport non nul."
        },
        {
          "name": "Propriété fondamentale",
          "formula": "M’N’ = k · MN",
          "note": "Vecteur image colinéaire au vecteur antécédent avec le coefficient k."
        },
        {
          "name": "Longueur image et multiplication des aires",
          "formula": "A’B’ = |k| × AB   ;   Aire’ = k² × Aire",
          "note": "Les longueurs sont multipliées par |k| et les aires par k²."
        },
        {
          "name": "Image d’un cercle C(O, r)",
          "formula": "h(C(O, r)) = C’(h(O), |k| · r)",
          "note": "Le rayon est multiplié par la valeur absolue |k|."
        }
      ],
      "keyRule": "Règle d’or de l’homothétie : ΩM’ = k · ΩM et M’N’ = k · MN. Les longueurs sont toujours multipliées par |k|, et les aires par k² (jamais par k car une aire est toujours positive) !",
      "workedExample": {
        "title": "Exemple résolu : Image d’un triangle et calcul de longueurs et d’aires",
        "statement": "Soit ABC un triangle d’aire égale à 12 cm², avec AB = 6 cm et BC = 8 cm. On considère l’homothétie h de centre O et de rapport k = −2.\n1. Calcule les longueurs A’B’ et B’C’ du triangle image A’B’C’.\n2. Calcule l’aire du triangle image A’B’C’.",
        "methodSteps": [
          "Étape 1 : D’après la propriété de longueur de l’homothétie, pour tout segment [MN], M’N’ = |k| × MN.",
          "Étape 2 : Ici k = −2, donc |k| = |−2| = 2. On a donc : A’B’ = 2 × AB = 2 × 6 = 12 cm, et B’C’ = 2 × BC = 2 × 8 = 16 cm.",
          "Étape 3 : D’après la propriété de multiplication des aires : Aire(A’B’C’) = k² × Aire(ABC).",
          "Étape 4 : Remplaçons par les valeurs numériques : k² = (−2)² = 4. Donc Aire(A’B’C’) = 4 × 12 = 48 cm²."
        ],
        "conclusion": "A’B’ = 12 cm, B’C’ = 16 cm et l’aire du triangle image est de 48 cm²."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_ch6_p1_ex1",
          "type": "mcq",
          "prompt": "Par définition, l’image d’un point M par l’homothétie de centre Ω et de rapport k non nul est le point M’ tel que :",
          "options": [
            "ΩM’ = k · ΩM",
            "MM’ = k · ΩM",
            "ΩM = k · ΩM’",
            "ΩM’ + ΩM = k"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La définition d’une homothétie de centre Ω et de rapport k est l’égalité vectorielle directe ΩM’ = k · ΩM."
        },
        {
          "id": "seconde_c_maths_geometrie_ch6_p1_ex2",
          "type": "mcq",
          "prompt": "Que peut-on dire des trois points Ω, M et son image M’ par une homothétie de centre Ω ?",
          "options": [
            "Ils sont obligatoirement alignés car ΩM’ et ΩM sont colinéaires",
            "Ils forment un triangle isocèle en Ω",
            "Ils sont situés sur un cercle de diamètre [MM’]",
            "Ils sont perpendiculaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme ΩM’ = k · ΩM, les vecteurs ΩM’ et ΩM ont la même direction, donc les points Ω, M et M’ sont toujours alignés."
        },
        {
          "id": "seconde_c_maths_geometrie_ch6_p1_ex3",
          "type": "mcq",
          "prompt": "L’homothétie de centre O et de rapport k = −1 correspond exactement à :",
          "options": [
            "La symétrie centrale de centre O",
            "La translation de vecteur nul",
            "La symétrie orthogonale par rapport à un axe",
            "Une rotation d’angle 90°"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Si k = −1, OM’ = −OM, ce qui signifie exactement que O est le milieu du segment [MM’] : c’est la symétrie centrale de centre O."
        },
        {
          "id": "seconde_c_maths_geometrie_ch6_p1_ex4",
          "type": "mcq",
          "prompt": "Quel est l’unique point invariant d’une homothétie de rapport k = 3 ?",
          "options": [
            "Son centre Ω uniquement",
            "Tous les points du plan",
            "L’origine du repère uniquement",
            "Aucun point n’est invariant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour tout rapport k ≠ 1, une homothétie admet un seul et unique point fixe invariant : son centre Ω."
        },
        {
          "id": "seconde_c_maths_geometrie_ch6_p1_ex5",
          "type": "mcq",
          "prompt": "Si M et N ont pour images M’ et N’ par une homothétie de rapport k = −3, que vaut le vecteur M’N’ ?",
          "options": [
            "M’N’ = −3 · MN",
            "M’N’ = 3 · MN",
            "M’N’ = (1 / 3) · MN",
            "M’N’ = MN"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D’après la propriété fondamentale vectorielle de l’homothétie, pour tous points M et N : M’N’ = k · MN. Ici k = −3, donc M’N’ = −3 · MN."
        },
        {
          "id": "seconde_c_maths_geometrie_ch6_p1_ex6",
          "type": "mcq",
          "prompt": "Quelle est la nature de l’image d’une droite (D) par une homothétie de centre Ω n’appartenant pas à (D) ?",
          "options": [
            "Une droite (D’) strictement parallèle à (D)",
            "Une droite perpendiculaire à (D)",
            "Un cercle passant par le centre Ω",
            "Une courbe parabolique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’image d’une droite par une homothétie est toujours une droite parallèle à la droite initiale."
        },
        {
          "id": "seconde_c_maths_geometrie_ch6_p1_ex7",
          "type": "mcq",
          "prompt": "Soit un segment [AB] de longueur 5 cm. Quelle est la longueur de son segment image [A’B’] par une homothétie de rapport k = −2,5 ?",
          "options": [
            "12,5 cm",
            "−12,5 cm",
            "7,5 cm",
            "2 cm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La longueur d’un segment est multipliée par la valeur absolue du rapport : A’B’ = |k| × AB = |−2,5| × 5 = 2,5 × 5 = 12,5 cm."
        },
        {
          "id": "seconde_c_maths_geometrie_ch6_p1_ex8",
          "type": "mcq",
          "prompt": "Si un polygone a une aire de 15 cm², quelle est l’aire de son image par une homothétie de rapport k = 3 ?",
          "options": [
            "135 cm² (car 15 × 3² = 15 × 9 = 135)",
            "45 cm²",
            "30 cm²",
            "60 cm²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’aire est multipliée par le carré du rapport : Aire’ = k² × Aire = 3² × 15 = 9 × 15 = 135 cm²."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_ch6_p2",
      "order": 2,
      "title": "Propriétés de conservation, caractérisations et lieux géométriques",
      "summary": "Conservation de l’alignement, des milieux, du parallélisme, de l’orthogonalité et des angles orientés. Caractérisation d’une homothétie et détermination de lieux géométriques.",
      "conceptExplanation": "Bien qu'une homothétie modifie les distances, elle préserve fidèlement la structure géométrique des figures !\n\n1. Propriétés de conservation par une homothétie :\nToute homothétie h(Ω, k) conserve :\n- L'alignement : L'image de trois points alignés est formée de trois points alignés.\n- Le milieu : L'image du milieu I d'un segment [AB] est le milieu I' du segment image [A'B'] (h(I) = milieu de [h(A)h(B)]).\n- Le barycentre : L'image du barycentre de points pondérés est le barycentre des points images affectés des mêmes coefficients.\n- Le parallélisme : Les images de deux droites parallèles sont deux droites parallèles.\n- L'orthogonalité : Les images de deux droites perpendiculaires sont deux droites perpendiculaires.\n- Les angles orientés : Un angle orienté a pour image un angle orienté de MÊME MESURE (propriété remarquable : même si k < 0, l'orientation angulaire est préservée car les deux vecteurs sont multipliés par le même k !).\n\n2. Caractérisations fondamentales d’une homothétie :\n- Caractérisation par son centre A, un point B et son image C :\n  Si A, B, C sont trois points distincts et alignés, il existe une UNIQUE homothétie de centre A qui transforme B en C. Son rapport k est le réel tel que AC = k · AB.\n- Caractérisation par son rapport k (k ≠ 0, k ≠ 1), un point A et son image B :\n  Il existe une UNIQUE homothétie de rapport k qui transforme A en B. Son centre Ω est le point vérifiant ΩB = k · ΩA.\n- Caractérisation par deux couples de points (M, M’) et (N, N’) :\n  Soient M, N, M’, N’ quatre points distincts tels que les droites (MN) et (M’N’) sont parallèles ((M’N’) ∥ (MN)) et M’N’ ≠ MN.\n  Il existe une UNIQUE homothétie qui transforme M en M’ et N en N’.\n  Son centre Ω est le point d'intersection des droites (MM’) et (NN’) : {Ω} = (MM’) ∩ (NN’).\n\n3. Détermination de lieux géométriques :\nPour déterminer le lieu géométrique d'un point mobile N lié à un point M décrivant une figure connue (Γ) (droite, cercle) :\n- On établit une relation vectorielle de la forme ΩN = k · ΩM où Ω et k sont fixes.\n- Cela prouve que N est l'image de M par l'homothétie fixe h(Ω, k).\n- Le lieu de N est alors la figure image (Γ’) = h(Γ). Si (Γ) est un cercle C(O, r), le lieu est le cercle C’(h(O), |k|r).",
      "formulas": [
        {
          "name": "Conservation des angles orientés",
          "formula": "mes(M’A’, M’B’) = mes(MA, MB)",
          "note": "L’angle orienté formé par les images a exactement la même mesure."
        },
        {
          "name": "Centre déterminé par deux droites",
          "formula": "{Ω} = (MM’) ∩ (NN’)",
          "note": "Point de concours des droites joignant chaque point à son image."
        },
        {
          "name": "Rapport déterminé par des points alignés",
          "formula": "k = AC / AB  (en mesures algébriques)",
          "note": "Déterminé par l’égalité vectorielle AC = k · AB."
        }
      ],
      "keyRule": "Retiens le réflexe du trapèze : si deux segments [AB] et [A’B’] sont parallèles et de longueurs différentes, les droites (AA’) et (BB’) se coupent au centre Ω de l’homothétie qui transforme A en A’ et B en B’ !",
      "workedExample": {
        "title": "Exemple résolu : Détermination d’un lieu géométrique par homothétie",
        "statement": "Soit (C) un cercle de centre O et de rayon R = 4 cm, et A un point fixé du plan (A ∉ (C)).\nUn point mobile M décrit le cercle (C). On note M’ le milieu du segment [AM].\n1. Exprime le vecteur AM’ en fonction du vecteur AM.\n2. Détermine la nature et les éléments précis du lieu géométrique décrit par M’ lorsque M parcourt (C).",
        "methodSteps": [
          "Étape 1 : Par hypothèse, M’ est le milieu du segment [AM], donc AM’ = (1 / 2) · AM.",
          "Étape 2 : Le point A étant fixe et le coefficient (1 / 2) étant constant, l’égalité AM’ = (1 / 2) · AM prouve que M’ est l’image de M par l’homothétie h de centre A et de rapport k = 1 / 2.",
          "Étape 3 : Lorsque M décrit le cercle (C) de centre O et de rayon R = 4 cm, son image M’ décrit le cercle image (C’) = h(C).",
          "Étape 4 : Les éléments de (C’) sont son centre O’ = h(O) (tel que AO’ = (1 / 2) · AO, donc O’ est le milieu de [AO]) et son rayon R’ = |k| × R = (1 / 2) × 4 = 2 cm."
        ],
        "conclusion": "Le lieu de M’ est le cercle (C’) de centre O’ (milieu de [AO]) et de rayon 2 cm."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_ch6_p2_ex1",
          "type": "mcq",
          "prompt": "Si I est le milieu du segment [AB] et h une homothétie de rapport k, quelle est l’image h(I) ?",
          "options": [
            "Le milieu du segment image [A’B’]",
            "Le centre de l’homothétie",
            "Un point situé à une distance k² de A’",
            "L’extrémité B’"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’homothétie conserve le milieu d’un segment : l’image du milieu est obligatoirement le milieu des images."
        },
        {
          "id": "seconde_c_maths_geometrie_ch6_p2_ex2",
          "type": "mcq",
          "prompt": "Quelle est la propriété de l’homothétie concernant la mesure d’un angle orienté ?",
          "options": [
            "Elle conserve strictement la mesure de tout angle orienté",
            "Elle multiplie l’angle par le rapport k",
            "Elle change toujours le signe de l’angle si k < 0",
            "Elle transforme un angle aigu en angle obtus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toute homothétie conserve rigoureusement les angles orientés : mes(M’A’, M’B’) = mes(MA, MB), quel que soit le signe de k."
        },
        {
          "id": "seconde_c_maths_geometrie_ch6_p2_ex3",
          "type": "mcq",
          "prompt": "Soient A, B, C trois points alignés tels que AC = 4 · AB. Quelle est l’homothétie de centre A qui applique B sur C ?",
          "options": [
            "L’homothétie de centre A et de rapport 4",
            "L’homothétie de centre B et de rapport 4",
            "L’homothétie de centre A et de rapport 1 / 4",
            "La translation de vecteur 4 · AB"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme AC = 4 · AB avec centre A, l’homothétie a pour centre A et pour rapport k = 4."
        },
        {
          "id": "seconde_c_maths_geometrie_ch6_p2_ex4",
          "type": "mcq",
          "prompt": "Soit la relation 3 · CA + 2 · AB = 0. Quelle est l’expression de AC en fonction de AB ?",
          "options": [
            "AC = (2 / 3) · AB (donc le rapport de l’homothétie de centre A envoyant B sur C est 2 / 3)",
            "AC = −(2 / 3) · AB",
            "AC = (3 / 2) · AB",
            "AC = 5 · AB"
          ],
          "correctAnswerIndex": 0,
          "explanation": "3 · CA + 2 · AB = 0 ⟺ −3 · AC + 2 · AB = 0 ⟺ 3 · AC = 2 · AB ⟺ AC = (2 / 3) · AB. Le rapport vaut 2 / 3."
        },
        {
          "id": "seconde_c_maths_geometrie_ch6_p2_ex5",
          "type": "mcq",
          "prompt": "Soit un trapèze ABCD de bases parallèles [AB] et [CD] avec AB ≠ CD. Comment trouve-t-on le centre de l’homothétie qui applique A sur D et B sur C ?",
          "options": [
            "C’est le point d’intersection des droites non parallèles (AD) et (BC)",
            "C’est le milieu du segment [AB]",
            "C’est le centre de gravité du trapèze",
            "C’est le point de concours des hauteurs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le centre d’une homothétie transformant A en D et B en C appartient obligatoirement aux droites (AD) et (BC) : c’est leur point d’intersection."
        },
        {
          "id": "seconde_c_maths_geometrie_ch6_p2_ex6",
          "type": "mcq",
          "prompt": "Dans un triangle ABC de centre de gravité G et de milieu H de [BC], quelle homothétie applique H sur G ?",
          "options": [
            "L’homothétie de centre A et de rapport 2 / 3 (car AG = (2 / 3) · AH)",
            "L’homothétie de centre G et de rapport 3",
            "L’homothétie de centre A et de rapport 3 / 2",
            "La translation de vecteur (1 / 3) · AH"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par la propriété du centre de gravité, AG = (2 / 3) · AH. C’est donc l’homothétie de centre A et de rapport 2 / 3 qui transforme H en G."
        },
        {
          "id": "seconde_c_maths_geometrie_ch6_p2_ex7",
          "type": "mcq",
          "prompt": "Un point mobile M décrit un cercle (C) de centre O et de rayon 6 cm. Quel est le lieu du point N défini par ON = −(1 / 3) · OM ?",
          "options": [
            "Le cercle concentrique de centre O et de rayon 2 cm",
            "Un cercle tangent de rayon 6 cm",
            "Une droite passant par O",
            "Le point O uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "N est l’image de M par l’homothétie de centre O et de rapport k = −1 / 3. Le rayon du cercle image est |−1 / 3| × 6 = 2 cm, centré en h(O) = O."
        },
        {
          "id": "seconde_c_maths_geometrie_ch6_p2_ex8",
          "type": "mcq",
          "prompt": "Si deux droites (D1) et (D2) sont perpendiculaires, que peut-on affirmer de leurs images par une homothétie ?",
          "options": [
            "Elles sont obligatoirement perpendiculaires (conservation de l’orthogonalité)",
            "Elles deviennent parallèles",
            "Leur angle dépend de la valeur absolue du rapport |k|",
            "Elles se coupent sous un angle de 45°"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’homothétie conserve l’orthogonalité : les images de deux droites perpendiculaires sont toujours deux droites perpendiculaires."
        }
      ]
    }
  ]
};

export const maths2deCRotationChapter: CurriculumChapter = {
  "id": "seconde_c_maths_geometrie_ch7_rotation",
  "subjectId": "maths",
  "gradeLevel": "seconde_c",
  "order": 7,
  "officialVolumeHours": 10,
  "title": "Leçon 7 — Rotation",
  "summary": "Définition géométrique d’une rotation, centre et angle orienté, propriété fondamentale (isométrie et angle de rotation), images de figures, conservation et caractérisation par deux points et leurs images.",
  "points": [
    {
      "id": "seconde_c_maths_geometrie_ch7_p1",
      "order": 1,
      "title": "Définition, propriété fondamentale et images de figures",
      "summary": "Définition d’une rotation r(O, α), quarts de tour direct et indirect, centre comme unique point invariant, propriété fondamentale (conservation des distances et angle) et images de droites, segments et cercles.",
      "conceptExplanation": "Après avoir étudié le glissement (translation) et le zoom (homothétie), nous abordons le pivotement circulaire parfait : la rotation dans le plan orienté.\n\n1. Définition fondamentale de la rotation :\nSoit O un point du plan orienté et α un nombre réel appartenant à l'intervalle semi-ouvert ]−π, π] (mesure principale de l’angle).\nOn appelle rotation de centre O et d'angle orienté α, notée r(O, α), l’application du plan dans lui-même qui :\n- Au centre O associe lui-même : r(O) = O.\n- À tout point M distinct de O associe le point M’ tel que :\n  1) OM’ = OM  (le point M’ est situé sur le cercle de centre O passant par M).\n  2) mes(OM, OM’) = α [2π]  (l’angle orienté formé par OM et OM’ vaut α radians).\n\n2. Cas particuliers fondamentaux :\n- Angle α = 0 : C'est l'application identique du plan (tout point reste fixe).\n- Angle α = π (ou −π) : C'est un demi-tour, exactement équivalent à la symétrie centrale de centre O.\n- Angle α = π / 2 (90°) : Appelée quart de tour direct (sens anti-horaire).\n- Angle α = −π / 2 (−90°) : Appelée quart de tour indirect (sens horaire).\n\n3. Point invariant :\nPour tout angle α non nul (α ≠ 0 [2π]), la rotation admet un SEUL ET UNIQUE point invariant : son centre O.\n\n4. Propriété fondamentale d’une rotation :\nSoit r une rotation d’angle α. Si M et N sont deux points distincts du plan d’images respectives M’ et N’ par r, alors :\n  1) M’N’ = MN  (la rotation est une ISOMÉTRIE, elle conserve rigoureusement les longueurs).\n  2) mes(MN, M’N’) = α [2π]  (l’angle orienté formé par le vecteur initial et le vecteur image est exactement égal à l’angle de la rotation).\n\n5. Images de figures simples :\n- Image d’une droite (AB) : C'est la droite (A’B’) passant par les images A’ = r(A) et B’ = r(B).\n  L'angle entre la droite (AB) et la droite image (A’B’) est égal à α.\n- Image d’un segment [AB] : C'est le segment [A’B’] de MÊME LONGUEUR : A’B’ = AB.\n- Image d’un cercle : L'image d'un cercle C(O, R) de centre O et de rayon R est un cercle C’(O’, R) de MÊME RAYON R ayant pour centre le point O’ = r(O).",
      "formulas": [
        {
          "name": "Définition d’une rotation r(O, α)",
          "formula": "OM’ = OM   et   mes(OM, OM’) = α [2π]",
          "note": "M’ est à la même distance de O que M, décalé d’un angle orienté α."
        },
        {
          "name": "Propriété fondamentale de la rotation",
          "formula": "M’N’ = MN   et   mes(MN, M’N’) = α [2π]",
          "note": "Conservation de la distance et angle orienté égal à α."
        },
        {
          "name": "Image d’un cercle C(O, R)",
          "formula": "r(C(O, R)) = C’(r(O), R)",
          "note": "Même rayon R, le centre est simplement tourné de α autour de l’axe."
        }
      ],
      "keyRule": "Retiens les deux lois sacrées de la rotation : 1) Les longueurs ne changent jamais (M'N' = MN, c'est une isométrie) ; 2) Tout vecteur tourne exactement de l'angle α : mes(MN, M'N') = α !",
      "workedExample": {
        "title": "Exemple résolu : Rotation et triangles équilatéraux",
        "statement": "Soit ABC un triangle équilatéral direct (de centre de gravité G). On considère la rotation r de centre A et d’angle π / 3.\n1. Quelle est l’image du point B par cette rotation ?\n2. Soit un point M distinct de A et M’ son image par r. Quelle est la nature précise du triangle AMM’ ?",
        "methodSteps": [
          "Étape 1 : Dans le triangle équilatéral direct ABC, on a AB = AC et mes(AB, AC) = π / 3 (60°).",
          "Étape 2 : Par définition de la rotation r de centre A et d’angle π / 3, l’image de B est le point vérifiant AB’ = AB et mes(AB, AB’) = π / 3. Ce point est donc le point C : r(B) = C.",
          "Étape 3 : Pour tout point M, par définition de la rotation : AM = AM’ et mes(AM, AM’) = π / 3.",
          "Étape 4 : Un triangle isocèle qui possède un angle de π / 3 (60°) est obligatoirement un triangle équilatéral. Le triangle AMM’ est donc équilatéral direct."
        ],
        "conclusion": "r(B) = C et le triangle AMM’ est toujours un triangle équilatéral direct."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_ch7_p1_ex1",
          "type": "mcq",
          "prompt": "Quelles sont les deux conditions qui définissent l’image M’ d’un point M ≠ O par la rotation r(O, α) ?",
          "options": [
            "OM’ = OM  et  mes(OM, OM’) = α [2π]",
            "OM’ = α · OM  et  M’ appartient à la médiatrice",
            "OM’ + OM = α  et  (OM) ⊥ (OM’)",
            "OM’ = OM²  et  mes(OM, OM’) = 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition d’une rotation de centre O et d’angle α, M’ conserve la distance au centre (OM’ = OM) et forme l’angle orienté mes(OM, OM’) = α."
        },
        {
          "id": "seconde_c_maths_geometrie_ch7_p1_ex2",
          "type": "mcq",
          "prompt": "Comment appelle-t-on couramment une rotation d’angle π / 2 dans le sens trigonométrique ?",
          "options": [
            "Un quart de tour direct",
            "Un demi-tour",
            "Un quart de tour indirect",
            "Une homothétie de rapport 2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une rotation d’angle +π / 2 (90° dans le sens anti-horaire) est appelée un quart de tour direct."
        },
        {
          "id": "seconde_c_maths_geometrie_ch7_p1_ex3",
          "type": "mcq",
          "prompt": "Une rotation d’angle π (ou −π) est rigoureusement équivalente à :",
          "options": [
            "La symétrie centrale de centre O",
            "La symétrie orthogonale par rapport à l’axe des abscisses",
            "La translation de vecteur de norme π",
            "L’application identique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tourner d’un angle plat π (180°) revient à placer M’ tel que O soit le milieu de [MM’] : c’est la symétrie centrale de centre O."
        },
        {
          "id": "seconde_c_maths_geometrie_ch7_p1_ex4",
          "type": "mcq",
          "prompt": "Combien de points invariants possède une rotation de centre O et d’angle α = π / 4 ?",
          "options": [
            "1 seul point invariant (son centre O)",
            "0 point invariant",
            "Une infinité de points",
            "2 points invariants"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toute rotation d’angle non nul admet pour unique point fixe invariant son propre centre O."
        },
        {
          "id": "seconde_c_maths_geometrie_ch7_p1_ex5",
          "type": "mcq",
          "prompt": "D’après la propriété fondamentale, si M’ et N’ sont les images de M et N par une rotation d’angle α, que vaut l’angle mes(MN, M’N’) ?",
          "options": [
            "α [2π]",
            "2α [2π]",
            "0 [2π]",
            "π − α [2π]"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La propriété fondamentale stipule que tout vecteur non nul MN est tourné du même angle orienté α : mes(MN, M’N’) = α [2π]."
        },
        {
          "id": "seconde_c_maths_geometrie_ch7_p1_ex6",
          "type": "mcq",
          "prompt": "Pourquoi la rotation est-elle qualifiée d’isométrie du plan ?",
          "options": [
            "Parce qu’elle conserve rigoureusement les longueurs : M’N’ = MN",
            "Parce qu’elle conserve le centre O",
            "Parce qu’elle transforme une droite en une droite parallèle",
            "Parce qu’elle agrandit les figures"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une isométrie est une transformation qui conserve exactement la distance entre deux points quelconques : M’N’ = MN."
        },
        {
          "id": "seconde_c_maths_geometrie_ch7_p1_ex7",
          "type": "mcq",
          "prompt": "Quelle est l’image d’un cercle C de centre O et de rayon 7 cm par une rotation r de centre I et d’angle 2π / 3 ?",
          "options": [
            "Un cercle C’ de même rayon 7 cm dont le centre est O’ = r(O)",
            "Un cercle de rayon 14 cm",
            "Un cercle de rayon 7 × (2π / 3) cm",
            "Une ellipse de grand axe 7 cm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La rotation étant une isométrie, elle conserve les rayons des cercles : le cercle image a le même rayon 7 cm et son centre est l’image du centre."
        },
        {
          "id": "seconde_c_maths_geometrie_ch7_p1_ex8",
          "type": "mcq",
          "prompt": "Si r est une rotation qui transforme A en B, à quel ensemble géométrique appartient obligatoirement le centre O de cette rotation ?",
          "options": [
            "À la médiatrice du segment [AB] (car OA = OB)",
            "Au cercle de diamètre [AB]",
            "À la droite (AB)",
            "Au milieu de [AB] obligatoirement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition d’une rotation, le centre O est à égale distance du point et de son image (OA = OB). O appartient donc obligatoirement à la médiatrice de [AB]."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_ch7_p2",
      "order": 2,
      "title": "Propriétés de conservation, caractérisations et constructions",
      "summary": "Conservation des angles orientés, du parallélisme, de l’orthogonalité et des aires. Caractérisation par deux points et leurs images, construction du centre par médiatrices et arc capable.",
      "conceptExplanation": "La rotation est la reine des isométries directes : elle fait tourner une figure entière comme un solide indéformable sans aucune altération.\n\n1. Propriétés de conservation de la rotation :\nToute rotation conserve :\n- Les distances : M’N’ = MN.\n- Les angles orientés : mes(M’A’, M’B’) = mes(MA, MB) [2π] (conservation absolue de l’orientation du plan).\n- L'alignement : L'image de trois points alignés est formée de trois points alignés.\n- Le milieu : L'image du milieu I d'un segment [AB] est le milieu I' du segment image [A'B'].\n- Le parallélisme et l'orthogonalité : Deux droites parallèles ont pour images deux droites parallèles ; deux droites perpendiculaires ont pour images deux droites perpendiculaires.\n- Les aires et le contact : L'aire d'une figure est strictement conservée (Aire(Image) = Aire(Initiale)). Deux figures tangentes ou sécantes ont pour images des figures tangentes ou sécantes.\n\n2. Caractérisation d’une rotation par son centre, un point et son image :\nSoit A, B et C trois points deux à deux distincts du plan tels que AB = AC.\nIl existe une UNIQUE rotation de centre A qui applique B sur C. Son angle orienté est α = mes(AB, AC) [2π].\n\n3. Caractérisation par deux points distincts et leurs images :\nSoit M, N, M’, N’ quatre points du plan tels que :\n  MN = M’N’, M ≠ N et MN ≠ M’N’.\nIl existe une UNIQUE rotation r telle que r(M) = M’ et r(N) = N’.\n- L'angle de la rotation est l'angle orienté α = mes(MN, M’N’) [2π].\n- Le centre Ω est le point d'intersection des médiatrices des segments [MM’] et [NN’] :\n  {Ω} = med[MM’] ∩ med[NN’]  (car ΩM = ΩM’ et ΩN = ΩN’).\n\n4. Caractérisation par l’angle α, un point M et son image N :\nSi l’on connaît l’angle α et que l’on cherche le centre Ω d’une rotation transformant M en N :\n- Ω est à égale distance de M et N (ΩM = ΩN), donc Ω appartient à la médiatrice (Δ) de [MN].\n- De plus, mes(ΩM, ΩN) = α [2π], donc Ω appartient à l’arc capable de mesure α s'appuyant sur [MN].\n- Le centre Ω est l'intersection de la médiatrice (Δ) et de cet arc capable.",
      "formulas": [
        {
          "name": "Conservation des angles orientés",
          "formula": "mes(M’A’, M’B’) = mes(MA, MB) [2π]",
          "note": "Les angles orientés sont strictement conservés."
        },
        {
          "name": "Angle de rotation déterminé par deux bipoints",
          "formula": "α = mes(MN, M’N’) [2π]",
          "note": "Angle orienté formé par le vecteur antécédent et le vecteur image."
        },
        {
          "name": "Centre déterminé par les médiatrices",
          "formula": "{Ω} = med[MM’] ∩ med[NN’]",
          "note": "Intersection des médiatrices joignant chaque point à son image."
        }
      ],
      "keyRule": "Règle infaillible pour trouver le centre d'une rotation : si r(A) = A' et r(B) = B', trace simplement la médiatrice de [AA'] et la médiatrice de [BB']. Leur point d'intersection est exactement le centre Ω !",
      "workedExample": {
        "title": "Exemple résolu : Détermination du centre et de l’angle d’une rotation",
        "statement": "Soit ABCD un carré direct de centre O. On considère la rotation r qui transforme A en B et B en C.\n1. Justifie qu’il existe une unique rotation r transformant A en B et B en C.\n2. Détermine son centre et son angle orienté.",
        "methodSteps": [
          "Étape 1 : Dans le carré ABCD, on a AB = BC et les vecteurs AB et BC ne sont pas égaux (ils sont orthogonaux). Il existe donc une unique rotation r telle que r(A) = B et r(B) = C.",
          "Étape 2 : L’angle de la rotation est donné par l’angle orienté entre les vecteurs antécédent et image : α = mes(AB, BC). Dans un carré direct, cet angle vaut exactement π / 2 (90°).",
          "Étape 3 : Le centre Ω doit vérifier ΩA = ΩB (donc Ω est sur la médiatrice de [AB]) et ΩB = ΩC (donc Ω est sur la médiatrice de [BC]).",
          "Étape 4 : Les médiatrices des côtés consécutifs d’un carré se coupent exactement en son centre géométrique O. Le centre de la rotation est donc le point O."
        ],
        "conclusion": "La rotation est le quart de tour direct de centre O et d’angle π / 2 : r(O, π / 2)."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_ch7_p2_ex1",
          "type": "mcq",
          "prompt": "Si deux droites (D1) et (D2) sont parallèles, que peut-on dire de leurs images par une rotation ?",
          "options": [
            "Elles sont obligatoirement deux droites parallèles (conservation du parallélisme)",
            "Elles se coupent selon l’angle de la rotation",
            "Elles deviennent perpendiculaires",
            "Elles sont confondues avec le centre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toute rotation conserve le parallélisme : les images de deux droites parallèles sont toujours deux droites strictement parallèles."
        },
        {
          "id": "seconde_c_maths_geometrie_ch7_p2_ex2",
          "type": "mcq",
          "prompt": "Si un triangle ABC a une aire de 18 cm², quelle est l’aire de son image par une rotation d’angle 5π / 6 ?",
          "options": [
            "18 cm² (la rotation conserve exactement les aires)",
            "18 × (5π / 6) cm²",
            "36 cm²",
            "9 cm²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La rotation étant une isométrie, elle conserve parfaitement les aires : l’aire du triangle image reste exactement 18 cm²."
        },
        {
          "id": "seconde_c_maths_geometrie_ch7_p2_ex3",
          "type": "mcq",
          "prompt": "Soit deux points A et B et leurs images A’ et B’ par une rotation d’angle α. Comment trouve-t-on graphiquement le centre Ω de cette rotation ?",
          "options": [
            "Comme l’intersection de la médiatrice de [AA’] et de la médiatrice de [BB’]",
            "Comme le milieu du segment [AB]",
            "Comme l’intersection des droites (AB) et (A’B’)",
            "Comme le barycentre des quatre points"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme ΩA = ΩA’ et ΩB = ΩB’, le centre Ω appartient à la fois à la médiatrice de [AA’] et à celle de [BB’] : c’est leur point d’intersection."
        },
        {
          "id": "seconde_c_maths_geometrie_ch7_p2_ex4",
          "type": "mcq",
          "prompt": "Quel est l’angle de la rotation r qui transforme deux points distincts M et N en M’ et N’ ?",
          "options": [
            "L’angle orienté mes(MN, M’N’) [2π]",
            "L’angle géométrique formé par (MM’) et (NN’)",
            "Toujours 90°",
            "Le quotient MN / M’N’"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’angle orienté d’une rotation est l’angle entre tout vecteur non nul MN et son image M’N’ : α = mes(MN, M’N’) [2π]."
        },
        {
          "id": "seconde_c_maths_geometrie_ch7_p2_ex5",
          "type": "mcq",
          "prompt": "Soit un triangle ABC isocèle en A avec AB = AC et mes(AB, AC) = π / 2. Quelle est la rotation de centre A appliquant B sur C ?",
          "options": [
            "La rotation de centre A et d’angle π / 2 (quart de tour direct)",
            "La rotation de centre B et d’angle π / 2",
            "La symétrie centrale de centre A",
            "La rotation d’angle π / 4"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme AB = AC et mes(AB, AC) = π / 2, c’est l’unique rotation de centre A et d’angle π / 2 qui applique B sur C."
        },
        {
          "id": "seconde_c_maths_geometrie_ch7_p2_ex6",
          "type": "mcq",
          "prompt": "Un point mobile M parcourt un cercle (C) de centre O. N est le point tel que le triangle OMN est rectangle isocèle direct en O. Quel est le lieu de N ?",
          "options": [
            "Le cercle (C) lui-même (car N est l’image de M par le quart de tour de centre O)",
            "Une droite passant par O",
            "Un cercle de rayon deux fois plus grand",
            "Un point fixe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "N est l’image de M par la rotation de centre O et d’angle π / 2. Comme le centre de rotation est le centre du cercle, le cercle image est confondu avec (C) : N décrit le même cercle (C)."
        },
        {
          "id": "seconde_c_maths_geometrie_ch7_p2_ex7",
          "type": "mcq",
          "prompt": "Si r est une rotation d’angle α = π / 3 qui transforme M en N, à quelle courbe appartient le centre Ω de la rotation ?",
          "options": [
            "À la médiatrice de [MN] et à l’arc capable d’angle π / 3 sur [MN]",
            "Au segment [MN] uniquement",
            "Au cercle de diamètre [MN]",
            "À la tangente en M"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ω vérifie ΩM = ΩN (médiatrice de [MN]) et mes(ΩM, ΩN) = π / 3 (arc capable de mesure π / 3 s’appuyant sur [MN])."
        },
        {
          "id": "seconde_c_maths_geometrie_ch7_p2_ex8",
          "type": "mcq",
          "prompt": "La composée de deux rotations de même centre O, notée r(O, α) ∘ r(O, β), est :",
          "options": [
            "La rotation de même centre O et d’angle α + β",
            "Une translation de vecteur de norme α + β",
            "Une homothétie de rapport α · β",
            "L’application identique dans tous les cas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Composer deux rotations ayant le même centre O revient à additionner leurs angles de rotation autour de ce même centre : r(O, α + β)."
        }
      ]
    }
  ]
};

export const maths2deCGeometryChapters: CurriculumChapter[] = [
  maths2deCVecteursChapter,
  maths2deCSymetriesTranslationsChapter,
  maths2deCEspaceChapter,
  maths2deCAnglesInscritsChapter,
  maths2deCAnglesOrientesTrigoChapter,
  maths2deCHomothetieChapter,
  maths2deCRotationChapter,
];
