// ============================================================================
// MODULE OFFICIEL : MATHÉMATIQUES 2de C — NUMÉRIQUE (MENA CÔTE D'IVOIRE)
// Volet : Numérique | Classe : Seconde C
// 4 Leçons Officielles :
//   - Leçon 1 : Généralités sur les fonctions (8H)
//   - Leçon 2 : Fonctions polynômes et fonctions rationnelles (8H)
//   - Leçon 3 : Équations et inéquations dans ℝ (8H)
//   - Leçon 4 : Statistique (8H)
// Total : 10 Points clés (mini-leçons), 80 QCM progressifs (8/8 requis par point)
// Zéro code brut à l'écran : symboles universels purs (√, ×, ÷, ≠, ≈, ², ³, ⁻², ⁿ, −, π, θ, α, λ, μ, ·, ℝ, ℕ, ℤ, ∑, σ, Δ)
// ============================================================================

import type { CurriculumChapter } from '../../lib/curriculum/types';

export const maths2deCFonctionsGeneralitesChapter: CurriculumChapter = {
  "id": "seconde_c_maths_numerique_ch1_fonctions_generalites",
  "subjectId": "maths",
  "gradeLevel": "seconde_c",
  "order": 9,
  "officialVolumeHours": 8,
  "title": "Leçon 1 — Généralités sur les fonctions",
  "summary": "Notion de fonction, ensemble de définition, calcul et lecture graphique d'images et d'antécédents, image directe et réciproque d'un ensemble, égalité de fonctions, sens de variation, tableau de variations et recherche d'extrema (maximum et minimum).",
  "points": [
    {
      "id": "seconde_c_maths_numerique_ch1_p1",
      "order": 1,
      "title": "Notion de fonction, ensemble de définition et calculs d'images / antécédents",
      "summary": "Définition formelle d'une fonction, ensemble de définition Df, calcul algébrique et lecture graphique des images et antécédents, test de la droite verticale.",
      "conceptExplanation": "Une fonction est l'un des concepts les plus centraux de toutes les mathématiques et des sciences physiques.\n\n1. Définition fondamentale d’une fonction :\nSoit E et F deux sous-ensembles de ℝ.\nOn appelle fonction f de E vers F toute relation qui, à chaque élément x de E, associe AU PLUS UN élément de F (c'est-à-dire zéro ou une seule image).\n- Si un élément x possède une image y par f, on note : y = f(x). On dit que y est l'image de x par f, et que x est un antécédent de y par f.\n- Attention : un nombre x ne peut jamais avoir deux images différentes. En revanche, un nombre y peut avoir plusieurs antécédents, un seul, ou aucun.\n\n2. Ensemble de définition (Df) :\nL'ensemble de définition d'une fonction f, noté Df, est l'ensemble de tous les réels x pour lesquels l'image f(x) existe (est calculable dans ℝ).\n- Pour une fonction polynôme P(x) : Df = ℝ (aucune restriction).\n- Pour une fonction rationnelle f(x) = P(x) / Q(x) : Df = {x ∈ ℝ | Q(x) ≠ 0} (le dénominateur ne doit jamais être nul).\n- Pour une fonction racine carrée f(x) = √(U(x)) : Df = {x ∈ ℝ | U(x) ≥ 0} (l'expression sous le radical doit être positive ou nulle).\n- Pour une fonction f(x) = 1 / √(U(x)) : Df = {x ∈ ℝ | U(x) > 0} (strictement positif au dénominateur).\n\n3. Calcul algébrique d'images et d'antécédents :\n- Pour calculer l'image d'un réel a : on remplace simplement x par a dans l'expression de f(x).\n- Pour chercher les antécédents d'un réel b : on résout l'équation f(x) = b d'inconnue x dans Df.\n\n4. Représentation graphique et lecture :\nLa courbe représentative de f, notée (Cf), est l'ensemble des points M(x ; y) du plan tels que x ∈ Df et y = f(x).\n- Test de la droite verticale : Une courbe dans le plan représente une fonction si et seulement si toute droite verticale d'équation x = k coupe la courbe en au plus un point.\n- Image graphique de a : On part de l'abscisse x = a sur l'axe des abscisses, on monte ou descend verticalement jusqu'à la courbe, puis on lit l'ordonnée correspondante sur l'axe des ordonnées.\n- Antécédents graphiques de b : On trace la droite horizontale d'équation y = b. Les abscisses des points d'intersection de cette droite avec la courbe sont les antécédents de b.",
      "formulas": [
        {
          "name": "Ensemble de définition (Rationnelle)",
          "formula": "Df = {x ∈ ℝ | Dénominateur(x) ≠ 0}",
          "note": "Le dénominateur doit impérativement être non nul."
        },
        {
          "name": "Ensemble de définition (Radical)",
          "formula": "Df = {x ∈ ℝ | Expression_sous_racine(x) ≥ 0}",
          "note": "Le radicande doit toujours être positif ou nul dans ℝ."
        },
        {
          "name": "Équation aux antécédents",
          "formula": "f(x) = b, avec x ∈ Df",
          "note": "Résoudre cette équation permet de déterminer tous les antécédents de b par f."
        }
      ],
      "keyRule": "Tout réel x ∈ Df possède une UNIQUE image f(x). En revanche, un réel y peut posséder zéro, un ou plusieurs antécédents solutions de f(x) = y.",
      "workedExample": {
        "title": "Détermination d'ensemble de définition et calculs d'antécédents",
        "statement": "Soit la fonction f définie par f(x) = (2x − 6) / (x + 1). Détermine son ensemble de définition Df, puis calcule l'image de 3 et les antécédents éventuels de 1 par f.",
        "methodSteps": [
          "1. Identifier la contrainte d'existence : f(x) est un quotient de deux polynômes, il existe si et seulement si son dénominateur est non nul, soit x + 1 ≠ 0.",
          "2. Résoudre la contrainte : x + 1 ≠ 0 ⟺ x ≠ −1. L'ensemble de définition est donc Df = ℝ \\ {−1} = ]−∞ ; −1[ ∪ ]−1 ; +∞[.",
          "3. Calculer l'image de 3 : Comme 3 ∈ Df, f(3) = (2(3) − 6) / (3 + 1) = (6 − 6) / 4 = 0 / 4 = 0.",
          "4. Chercher les antécédents de 1 : On pose l'équation f(x) = 1 pour x ≠ −1.",
          "5. Résoudre l'équation : (2x − 6) / (x + 1) = 1 ⟺ 2x − 6 = x + 1 ⟺ 2x − x = 1 + 6 ⟺ x = 7.",
          "6. Vérifier la validité de la solution : 7 ≠ −1, donc 7 ∈ Df. L'unique antécédent de 1 par f est 7."
        ],
        "conclusion": "L'ensemble de définition est Df = ℝ \\ {−1}, l'image de 3 est 0, et 1 admet pour unique antécédent le nombre 7."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_ch1_p1_ex1",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de définition de la fonction f définie par f(x) = (3x + 1) / (x − 4) ?",
          "options": [
            "Df = ℝ \\ {4}",
            "Df = ℝ \\ {−4}",
            "Df = [4 ; +∞[",
            "Df = ℝ"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fonction f est rationnelle. Elle existe si et seulement si x − 4 ≠ 0, soit x ≠ 4. Donc Df = ℝ \\ {4} = ]−∞ ; 4[ ∪ ]4 ; +∞[."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p1_ex2",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de définition de la fonction g définie par g(x) = √(2x − 8) ?",
          "options": [
            "Dg = [4 ; +∞[",
            "Dg = ]4 ; +∞[",
            "Dg = ℝ \\ {4}",
            "Dg = ]−∞ ; 4]"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'expression sous le radical doit être positive ou nulle : 2x − 8 ≥ 0 ⟺ 2x ≥ 8 ⟺ x ≥ 4. Donc Dg = [4 ; +∞[."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p1_ex3",
          "type": "mcq",
          "prompt": "Soit la fonction h(x) = x² − 5x + 3. Quelle est l'image de −2 par h ?",
          "options": [
            "17",
            "9",
            "−3",
            "−11"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On remplace x par −2 : h(−2) = (−2)² − 5(−2) + 3 = 4 + 10 + 3 = 17."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p1_ex4",
          "type": "mcq",
          "prompt": "Soit la fonction f(x) = 2x² − 8. Quels sont les antécédents éventuels de 10 par f ?",
          "options": [
            "−3 et 3",
            "3 uniquement",
            "−9 et 9",
            "Aucun antécédent dans ℝ"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On résout f(x) = 10 ⟺ 2x² − 8 = 10 ⟺ 2x² = 18 ⟺ x² = 9 ⟺ x = 3 ou x = −3."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p1_ex5",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de définition de la fonction k(x) = 1 / √(5 − x) ?",
          "options": [
            "Dk = ]−∞ ; 5[",
            "Dk = ]−∞ ; 5]",
            "Dk = ]5 ; +∞[",
            "Dk = ℝ \\ {5}"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La racine est au dénominateur, l'expression sous la racine doit être strictement positive : 5 − x > 0 ⟺ x < 5. Donc Dk = ]−∞ ; 5[."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p1_ex6",
          "type": "mcq",
          "prompt": "D'après le test de la droite verticale, quelle condition assure qu'une courbe géométrique représente une fonction ?",
          "options": [
            "Toute droite verticale x = k coupe la courbe en au plus un point",
            "Toute droite horizontale y = c coupe la courbe en un point unique",
            "La courbe passe obligatoirement par l'origine O(0 ; 0)",
            "La courbe est continue sans aucun saut"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, chaque abscisse x doit avoir AU PLUS une image y. Toute droite verticale d'équation x = k doit donc rencontrer la courbe en au plus un point."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p1_ex7",
          "type": "mcq",
          "prompt": "Soit la fonction f(x) = (x + 2) / (x² − 9). Quel est son ensemble de définition Df ?",
          "options": [
            "Df = ℝ \\ {−3 ; 3}",
            "Df = ℝ \\ {3}",
            "Df = ]−3 ; 3[",
            "Df = [3 ; +∞["
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le dénominateur s'annule lorsque x² − 9 = 0 ⟺ (x − 3)(x + 3) = 0 ⟺ x = 3 ou x = −3. D'où Df = ℝ \\ {−3 ; 3}."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p1_ex8",
          "type": "mcq",
          "prompt": "Soit f(x) = √(x + 3) / (x − 1). Quel est l'ensemble de définition Df ?",
          "options": [
            "Df = [−3 ; 1[ ∪ ]1 ; +∞[",
            "Df = [−3 ; +∞[",
            "Df = ℝ \\ {1}",
            "Df = ]1 ; +∞["
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux conditions cumulatives : x + 3 ≥ 0 (soit x ≥ −3) ET x − 1 ≠ 0 (soit x ≠ 1). L'intersection donne Df = [−3 ; 1[ ∪ ]1 ; +∞[."
        }
      ]
    },
    {
      "id": "seconde_c_maths_numerique_ch1_p2",
      "order": 2,
      "title": "Images directes, images réciproques d'un ensemble et égalité de fonctions",
      "summary": "Détermination de l'image directe f(A), de l'image réciproque f⁻¹(B), et conditions d'égalité de deux fonctions sur un ensemble.",
      "conceptExplanation": "En classe de Seconde C, l'étude des fonctions s'étend à des ensembles de nombres, et non plus seulement à des réels isolés.\n\n1. Image directe d’un ensemble par une fonction :\nSoit f une fonction de Df vers ℝ et A une partie incluse dans Df (A ⊂ Df).\nOn appelle image directe de A par f, notée f(A), l'ensemble de toutes les images f(x) lorsque x parcourt A :\nf(A) = {y ∈ ℝ | ∃ x ∈ A, y = f(x)} = {f(x) | x ∈ A}.\n- Propriété : Si f est continue et strictement monotone sur un intervalle [a ; b] :\n  * Si f est croissante, f([a ; b]) = [f(a) ; f(b)].\n  * Si f est décroissante, f([a ; b]) = [f(b) ; f(a)].\n- Graphiquement : f(A) est la projection sur l'axe des ordonnées de la portion de courbe (Cf) correspondant aux abscisses x ∈ A.\n\n2. Image réciproque d’un ensemble par une fonction :\nSoit f une fonction et B une partie de ℝ.\nOn appelle image réciproque de B par f, notée f⁻¹(B), l'ensemble de tous les éléments x de Df dont l'image f(x) appartient à B :\nf⁻¹(B) = {x ∈ Df | f(x) ∈ B}.\n- Attention : La notation f⁻¹ désigne ici l'image réciproque d'un sous-ensemble, elle n'implique pas que f admette une fonction réciproque.\n- Graphiquement : On repère la zone de l'axe des ordonnées correspondant à B, puis on projette sur l'axe des abscisses l'ensemble des points de la courbe dont l'ordonnée est dans B.\n\n3. Égalité de deux fonctions sur un ensemble :\nDeux fonctions f et g sont dites égales (noté f = g) si et seulement si deux conditions sont simultanément remplies :\n1) Elles ont le même ensemble de définition : Df = Dg.\n2) Pour tout élément x de cet ensemble commun : f(x) = g(x).\n- Attention aux pièges : Soit f(x) = (x² − 1) / (x − 1) et g(x) = x + 1.\n  Pour tout x ≠ 1, f(x) = (x − 1)(x + 1) / (x − 1) = x + 1 = g(x).\n  Pourtant f ≠ g sur ℝ car Df = ℝ \\ {1} alors que Dg = ℝ !\n  En revanche, on dit que f et g sont égales SUR l'ensemble E = ℝ \\ {1}.",
      "formulas": [
        {
          "name": "Image directe d'un ensemble",
          "formula": "f(A) = {f(x) | x ∈ A}",
          "note": "Ensemble de toutes les images des éléments de A."
        },
        {
          "name": "Image réciproque d'un ensemble",
          "formula": "f⁻¹(B) = {x ∈ Df | f(x) ∈ B}",
          "note": "Ensemble de tous les antécédents des éléments de B situés dans Df."
        },
        {
          "name": "Condition d'égalité de deux fonctions",
          "formula": "f = g ⟺ (Df = Dg et ∀ x ∈ Df, f(x) = g(x))",
          "note": "L'égalité des formules sans égalité des domaines ne suffit pas."
        }
      ],
      "keyRule": "Deux fonctions sont rigoureusement égales si et seulement si elles possèdent EXACTEMENT le même ensemble de définition et prennent la même valeur pour chaque point.",
      "workedExample": {
        "title": "Calcul d'image directe, d'image réciproque et test d'égalité",
        "statement": "Soit f la fonction définie sur ℝ par f(x) = 2x − 3, et g la fonction définie par g(x) = (2x² − 3x) / x. 1) Calcule f([1 ; 5]). 2) Détermine f⁻¹([1 ; 7]). 3) Les fonctions f et g sont-elles égales sur ℝ ?",
        "methodSteps": [
          "1. Calculer f([1 ; 5]) : f est une fonction affine croissante car le coefficient 2 > 0. L'image de l'intervalle [1 ; 5] est donc l'intervalle [f(1) ; f(5)].",
          "2. Calculer les bornes : f(1) = 2(1) − 3 = −1 et f(5) = 2(5) − 3 = 7. Ainsi, f([1 ; 5]) = [−1 ; 7].",
          "3. Déterminer f⁻¹([1 ; 7]) : Par définition, x ∈ f⁻¹([1 ; 7]) ⟺ 1 ≤ f(x) ≤ 7 ⟺ 1 ≤ 2x − 3 ≤ 7.",
          "4. Résoudre l'encadrement : 1 + 3 ≤ 2x ≤ 7 + 3 ⟺ 4 ≤ 2x ≤ 10 ⟺ 2 ≤ x ≤ 5. D'où f⁻¹([1 ; 7]) = [2 ; 5].",
          "5. Comparer f et g : Df = ℝ, tandis que g(x) existe ssi x ≠ 0, donc Dg = ℝ \\ {0}. Comme Df ≠ Dg, f et g ne sont pas égales sur ℝ (bien qu'elles soient égales sur ℝ \\ {0})."
        ],
        "conclusion": "f([1 ; 5]) = [−1 ; 7], f⁻¹([1 ; 7]) = [2 ; 5], et f ≠ g sur ℝ car leurs ensembles de définition sont distincts."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_ch1_p2_ex1",
          "type": "mcq",
          "prompt": "Soit f(x) = 3x + 2 définie sur ℝ. Quelle est l'image directe de l'intervalle [−1 ; 3] par f ?",
          "options": [
            "[−1 ; 11]",
            "[−1 ; 9]",
            "[1 ; 11]",
            "[−3 ; 11]"
          ],
          "correctAnswerIndex": 0,
          "explanation": "f est strictement croissante car 3 > 0. Donc f([−1 ; 3]) = [f(−1) ; f(3)] = [3(−1) + 2 ; 3(3) + 2] = [−1 ; 11]."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p2_ex2",
          "type": "mcq",
          "prompt": "Soit g(x) = −2x + 4. Quelle est l'image directe g([0 ; 3]) ?",
          "options": [
            "[−2 ; 4]",
            "[4 ; −2]",
            "[0 ; 4]",
            "[−6 ; 4]"
          ],
          "correctAnswerIndex": 0,
          "explanation": "g est strictement décroissante car −2 < 0. Donc g([0 ; 3]) = [g(3) ; g(0)] = [−2(3) + 4 ; −2(0) + 4] = [−2 ; 4]."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p2_ex3",
          "type": "mcq",
          "prompt": "Soit f(x) = x² définie sur ℝ. Quelle est l'image directe de l'intervalle [−2 ; 3] ?",
          "options": [
            "[0 ; 9]",
            "[4 ; 9]",
            "[−4 ; 9]",
            "[0 ; 4]"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour x ∈ [−2 ; 3], x² atteint son minimum absolu en x = 0 (valeur 0) et son maximum en x = 3 avec 3² = 9 (car (−2)² = 4 ≤ 9). L'image est donc [0 ; 9]."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p2_ex4",
          "type": "mcq",
          "prompt": "Soit f(x) = 2x − 1. Quelle est l'image réciproque f⁻¹([3 ; 9]) ?",
          "options": [
            "[2 ; 5]",
            "[5 ; 17]",
            "[1 ; 4]",
            "[2 ; 4]"
          ],
          "correctAnswerIndex": 0,
          "explanation": "x ∈ f⁻¹([3 ; 9]) ⟺ 3 ≤ 2x − 1 ≤ 9 ⟺ 4 ≤ 2x ≤ 10 ⟺ 2 ≤ x ≤ 5. Donc f⁻¹([3 ; 9]) = [2 ; 5]."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p2_ex5",
          "type": "mcq",
          "prompt": "Les fonctions f(x) = √(x²) et g(x) = x sont-elles égales sur ℝ ?",
          "options": [
            "Non, car √(x²) = |x|, donc f(x) ≠ g(x) pour tout x < 0",
            "Oui, car la racine et le carré s'annulent toujours",
            "Non, car f n'est pas définie pour x négatif",
            "Oui, car Df = Dg = ℝ"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour tout réel x, √(x²) = |x|. Si x = −3, f(−3) = |−3| = 3, alors que g(−3) = −3. Comme f(−3) ≠ g(−3), les deux fonctions ne sont pas égales."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p2_ex6",
          "type": "mcq",
          "prompt": "Soit f(x) = |x| définie sur ℝ. Quelle est l'image réciproque f⁻¹([0 ; 4]) ?",
          "options": [
            "[−4 ; 4]",
            "[0 ; 4]",
            "[0 ; 16]",
            "[−16 ; 16]"
          ],
          "correctAnswerIndex": 0,
          "explanation": "x ∈ f⁻¹([0 ; 4]) ⟺ 0 ≤ |x| ≤ 4 ⟺ |x| ≤ 4 ⟺ −4 ≤ x ≤ 4. Donc f⁻¹([0 ; 4]) = [−4 ; 4]."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p2_ex7",
          "type": "mcq",
          "prompt": "Soit f(x) = (x² − 4) / (x + 2) et g(x) = x − 2. Sur quel ensemble ces fonctions sont-elles égales ?",
          "options": [
            "Sur ℝ \\ {−2}",
            "Sur ℝ tout entier",
            "Sur [0 ; +∞[ uniquement",
            "Sur ℝ \\ {2}"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Df = ℝ \\ {−2} et Dg = ℝ. Pour tout x ≠ −2, f(x) = (x − 2)(x + 2) / (x + 2) = x − 2 = g(x). Les fonctions sont donc égales sur ℝ \\ {−2}."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p2_ex8",
          "type": "mcq",
          "prompt": "Soit f(x) = 5 (fonction constante). Quelle est l'image réciproque f⁻¹({5}) ?",
          "options": [
            "ℝ tout entier",
            "{5}",
            "{0}",
            "L'ensemble vide ∅"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour tout réel x ∈ ℝ, f(x) = 5. Donc tous les réels ont pour image 5. Ainsi f⁻¹({5}) = ℝ."
        }
      ]
    },
    {
      "id": "seconde_c_maths_numerique_ch1_p3",
      "order": 3,
      "title": "Variations d'une fonction, tableau de variations et extrema (maximum et minimum)",
      "summary": "Sens de variation (croissance, décroissance, constance), construction d'un tableau de variations, et détermination rigoureuse du maximum et minimum.",
      "conceptExplanation": "Étudier les variations d'une fonction, c'est comprendre comment elle évolue lorsque la variable x augmente le long de l'axe des réels.\n\n1. Sens de variation sur un intervalle I ⊂ Df :\nSoit f une fonction définie sur un intervalle I :\n- f est STRICTEMENT CROISSANTE sur I si pour tous réels u et v de I :\n  u < v ⟹ f(u) < f(v) (l'ordre des images est conservé).\n- f est STRICTEMENT DÉCROISSANTE sur I si pour tous réels u et v de I :\n  u < v ⟹ f(u) > f(v) (l'ordre des images est inversé).\n- f est CONSTANTE sur I si pour tous réels u et v de I : f(u) = f(v).\n- f est dite monotone sur I si elle est soit croissante sur tout I, soit décroissante sur tout I.\n\n2. Méthode algébrique d'étude des variations :\nPour étudier le sens de variation de f sur un intervalle I :\n1) On choisit deux réels quelconques u et v dans I tels que u < v.\n2) On calcule et factorise la différence f(u) − f(v) (ou le taux de variation (f(u) − f(v)) / (u − v)).\n3) On étudie le signe de cette différence :\n   - Si f(u) − f(v) < 0, alors f(u) < f(v) : f est strictement croissante.\n   - Si f(u) − f(v) > 0, alors f(u) > f(v) : f est strictement décroissante.\n\n3. Tableau de variations :\nLe tableau de variations résume synthétiquement :\n- La première ligne : la variable x avec les bornes de Df et les valeurs clés (zéros, extrema, valeurs interdites notées par une double barre ||).\n- La deuxième ligne : le sens de variation matérialisé par des flèches montantes (↗ pour la croissance) et descendantes (↘ pour la décroissance), accompagnées des valeurs prises aux bornes et aux extrema.\n\n4. Extrema d'une fonction (Maximum et Minimum) :\nSoit f une fonction définie sur un ensemble E, et a ∈ E :\n- f admet un MAXIMUM en a sur E, noté M = f(a), si :\n  Pour tout x ∈ E : f(x) ≤ M, et f(a) = M.\n- f admet un MINIMUM en a sur E, noté m = f(a), si :\n  Pour tout x ∈ E : f(x) ≥ m, et f(a) = m.\n- Un extremum (maximum ou minimum) est dit local s'il n'est valable que sur un intervalle ouvert contenant a.",
      "formulas": [
        {
          "name": "Fonction strictement croissante",
          "formula": "u < v ⟹ f(u) < f(v)",
          "note": "L'inégalité conserve son sens entre les antécédents et leurs images."
        },
        {
          "name": "Fonction strictement décroissante",
          "formula": "u < v ⟹ f(u) > f(v)",
          "note": "L'inégalité change de sens entre les antécédents et leurs images."
        },
        {
          "name": "Maximum et Minimum",
          "formula": "∀ x ∈ E, m ≤ f(x) ≤ M",
          "note": "M est le maximum ssi f(x) ≤ M et atteint ; m est le minimum ssi f(x) ≥ m et atteint."
        }
      ],
      "keyRule": "Une fonction est croissante lorsqu'elle conserve l'ordre des nombres, et décroissante lorsqu'elle inverse l'ordre. Un nombre M n'est un maximum que s'il est majorant ET effectivement atteint pour au moins une valeur x.",
      "workedExample": {
        "title": "Étude des variations et recherche d'extremum d'une fonction",
        "statement": "Soit f la fonction définie sur ℝ par f(x) = (x − 3)² + 2. Étudie le sens de variation de f sur ]−∞ ; 3] et sur [3 ; +∞[, dresse son tableau de variations et détermine son extremum absolu.",
        "methodSteps": [
          "1. Étude sur ]−∞ ; 3] : Soit u et v deux réels tels que u < v ≤ 3.",
          "   On soustrait 3 : u − 3 < v − 3 ≤ 0. Les deux nombres sont négatifs.",
          "   La fonction carré est strictement décroissante sur les réels négatifs, donc : (u − 3)² > (v − 3)².",
          "   On ajoute 2 : (u − 3)² + 2 > (v − 3)² + 2, soit f(u) > f(v).",
          "   Conclusion : f est strictement décroissante sur ]−∞ ; 3].",
          "2. Étude sur [3 ; +∞[ : Soit u et v deux réels tels que 3 ≤ u < v.",
          "   On soustrait 3 : 0 ≤ u − 3 < v − 3. Les deux nombres sont positifs.",
          "   La fonction carré est strictement croissante sur les réels positifs : (u − 3)² < (v − 3)².",
          "   On ajoute 2 : (u − 3)² + 2 < (v − 3)² + 2, soit f(u) < f(v).",
          "   Conclusion : f est strictement croissante sur [3 ; +∞[.",
          "3. Recherche d'extremum : Pour tout réel x, (x − 3)² ≥ 0, donc (x − 3)² + 2 ≥ 2, soit f(x) ≥ 2.",
          "   De plus, pour x = 3, f(3) = (3 − 3)² + 2 = 2. La valeur 2 est donc atteinte."
        ],
        "conclusion": "f est décroissante sur ]−∞ ; 3], croissante sur [3 ; +∞[, et admet un minimum absolu égal à 2, atteint en x = 3."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_ch1_p3_ex1",
          "type": "mcq",
          "prompt": "Si une fonction f est strictement décroissante sur [−2 ; 5], que peut-on affirmer pour f(−1) et f(3) ?",
          "options": [
            "f(−1) > f(3)",
            "f(−1) < f(3)",
            "f(−1) = f(3)",
            "On ne peut pas comparer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme −1 < 3 et que f est strictement décroissante, l'ordre est inversé : f(−1) > f(3)."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p3_ex2",
          "type": "mcq",
          "prompt": "Soit f(x) = −3x + 7. Quel est le sens de variation de f sur ℝ ?",
          "options": [
            "Strictement décroissante sur ℝ",
            "Strictement croissante sur ℝ",
            "Croissante puis décroissante",
            "Constante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "f est une fonction affine de coefficient directeur a = −3. Comme a < 0, f est strictement décroissante sur ℝ."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p3_ex3",
          "type": "mcq",
          "prompt": "Soit la fonction g(x) = −(x − 1)² + 5 définie sur ℝ. Quel est son extremum absolu ?",
          "options": [
            "Un maximum égal à 5, atteint en x = 1",
            "Un minimum égal à 5, atteint en x = 1",
            "Un maximum égal à 1, atteint en x = 5",
            "Un minimum égal à −1, atteint en x = 5"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour tout x ∈ ℝ, (x − 1)² ≥ 0 ⟹ −(x − 1)² ≤ 0 ⟹ g(x) ≤ 5. De plus g(1) = 5. Donc 5 est le maximum absolu de g sur ℝ, atteint en x = 1."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p3_ex4",
          "type": "mcq",
          "prompt": "Soit f la fonction inverse définie par f(x) = 1 / x. Quel est son sens de variation sur ]0 ; +∞[ ?",
          "options": [
            "Strictement décroissante sur ]0 ; +∞[",
            "Strictement croissante sur ]0 ; +∞[",
            "Croissante puis décroissante",
            "Constante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour 0 < u < v, 1 / u > 1 / v. La fonction inverse inverse l'ordre des nombres de même signe, elle est strictement décroissante sur ]0 ; +∞[."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p3_ex5",
          "type": "mcq",
          "prompt": "Dans un tableau de variations, que signifie une double barre verticale sous une valeur x₀ ?",
          "options": [
            "x₀ est une valeur interdite n'appartenant pas à l'ensemble de définition",
            "La fonction atteint son maximum en x₀",
            "La fonction s'annule en x₀ (f(x₀) = 0)",
            "La fonction change de signe en x₀"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une double barre verticale signale que la valeur x₀ n'appartient pas au domaine de définition de la fonction (valeur interdite)."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p3_ex6",
          "type": "mcq",
          "prompt": "Soit h(x) = 2x² − 4x + 7. En écrivant h(x) = 2(x − 1)² + 5, quel est l'extremum de h sur ℝ ?",
          "options": [
            "Un minimum égal à 5, atteint en x = 1",
            "Un maximum égal à 5, atteint en x = 1",
            "Un minimum égal à 7, atteint en x = 0",
            "Un maximum égal à 2, atteint en x = −1"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour tout x, 2(x − 1)² ≥ 0 donc h(x) ≥ 5, et h(1) = 5. 5 est donc le minimum absolu de h, atteint en x = 1."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p3_ex7",
          "type": "mcq",
          "prompt": "Si f est strictement croissante sur [1 ; 4] avec f(1) = −2 et f(4) = 6, quel est le minimum de f sur [1 ; 4] ?",
          "options": [
            "−2, atteint en x = 1",
            "6, atteint en x = 4",
            "0, atteint en x = 2",
            "1, atteint en x = −2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Puisque f est strictement croissante sur [1 ; 4], pour tout x ∈ [1 ; 4], f(1) ≤ f(x) ≤ f(4), soit −2 ≤ f(x) ≤ 6. Le minimum est donc f(1) = −2."
        },
        {
          "id": "seconde_c_maths_numerique_ch1_p3_ex8",
          "type": "mcq",
          "prompt": "Soit f une fonction paire (f(−x) = f(x)). Si f est strictement croissante sur [0 ; +∞[, quel est son sens de variation sur ]−∞ ; 0] ?",
          "options": [
            "Strictement décroissante sur ]−∞ ; 0]",
            "Strictement croissante sur ]−∞ ; 0]",
            "Constante sur ]−∞ ; 0]",
            "Périodique sur ]−∞ ; 0]"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour une fonction paire, les variations sont opposées sur les intervalles symétriques par rapport à 0. Si elle est croissante sur [0 ; +∞[, elle est strictement décroissante sur ]−∞ ; 0]."
        }
      ]
    }
  ]
};

export const maths2deCPolynomesRationnellesChapter: CurriculumChapter = {
  "id": "seconde_c_maths_numerique_ch2_polynomes_rationnelles",
  "subjectId": "maths",
  "gradeLevel": "seconde_c",
  "order": 10,
  "officialVolumeHours": 8,
  "title": "Leçon 2 — Fonctions polynômes et fonctions rationnelles",
  "summary": "Définition formelle des polynômes, degré, opérations (somme, produit), forme canonique d'un trinôme du second degré, discriminant Δ, factorisation par (x − α) par division euclidienne ou identification, et étude complète des fractions rationnelles.",
  "points": [
    {
      "id": "seconde_c_maths_numerique_ch2_p1",
      "order": 1,
      "title": "Généralités sur les polynômes et forme canonique du second degré",
      "summary": "Définition d'un polynôme, monômes, degré, égalité, somme, produit, mise sous forme canonique d'un trinôme ax² + bx + c, discriminant Δ et factorisation.",
      "conceptExplanation": "Les polynômes forment la classe de fonctions la plus simple et la plus puissante de l'algèbre.\n\n1. Définition d’un polynôme :\nOn appelle fonction polynôme (ou simplement polynôme) toute fonction P définie sur ℝ pouvant s'écrire sous la forme développée et ordonnée :\nP(x) = an·xⁿ + an₋₁·xⁿ⁻¹ + ... + a₁·x + a₀,\noù n ∈ ℕ est un entier naturel et an, an₋₁, ..., a₀ sont des nombres réels fixés appelés coefficients.\n- Chaque terme ak·xᵏ est appelé un monôme de degré k.\n- Si an ≠ 0, l'entier n est appelé le degré du polynôme P, noté deg(P) ou d°(P). Le terme an est le coefficient dominant.\n- Le polynôme nul n'a pas de degré (par convention d°(0) = −∞).\n\n2. Propriétés fondamentales des polynômes :\n- Unicité de l'écriture : Deux polynômes sont égaux sur ℝ si et seulement si ils ont le même degré et leurs coefficients respectifs de même degré sont tous égaux.\n- Degré d'une somme : d°(P + Q) ≤ max(d°(P), d°(Q)). Si d°(P) ≠ d°(Q), alors d°(P + Q) = max(d°(P), d°(Q)).\n- Degré d'un produit : Pour deux polynômes non nuls P et Q, d°(P × Q) = d°(P) + d°(Q).\n\n3. Trinôme du second degré et forme canonique :\nUn polynôme du second degré est de la forme P(x) = ax² + bx + c avec a ≠ 0.\nPour tout x ∈ ℝ, on peut transformer cette écriture grâce au début d'une identité remarquable :\nP(x) = a · [(x + b / (2a))² − (b² − 4ac) / (4a²)].\nOn pose le discriminant : Δ = b² − 4ac.\nLa forme canonique s'écrit alors :\nP(x) = a · (x − α)² + β, où α = −b / (2a) et β = −Δ / (4a) = P(α).\n\n4. Factorisation et racines d'un trinôme selon le signe de Δ :\n- Si Δ < 0 : Le trinôme ne possède AUCUNE racine dans ℝ et NE SE FACTORISE PAS en produit de facteurs du premier degré. Il garde un signe constant égal au signe de a.\n- Si Δ = 0 : Le trinôme possède une UNIQUE racine double x₀ = −b / (2a). Il se factorise sous la forme : P(x) = a · (x − x₀)².\n- Si Δ > 0 : Le trinôme possède DEUX racines réelles distinctes x₁ = (−b − √Δ) / (2a) et x₂ = (−b + √Δ) / (2a). Il se factorise sous la forme : P(x) = a · (x − x₁)(x − x₂).",
      "formulas": [
        {
          "name": "Discriminant d'un trinôme",
          "formula": "Δ = b² − 4ac",
          "note": "Détermine le nombre de racines réelles et la factorisation possible."
        },
        {
          "name": "Forme canonique",
          "formula": "P(x) = a · [(x + b / (2a))² − Δ / (4a²)]",
          "note": "Permet de lire instantanément l'extremum et l'axe de symétrie."
        },
        {
          "name": "Factorisation (Δ > 0)",
          "formula": "P(x) = a(x − x₁)(x − x₂)",
          "note": "Avec x₁ = (−b − √Δ)/(2a) et x₂ = (−b + √Δ)/(2a)."
        }
      ],
      "keyRule": "Tout trinôme ax² + bx + c (a ≠ 0) admet une écriture canonique a[(x + b/(2a))² − Δ/(4a²)]. Il est factorisable dans ℝ si et seulement si Δ = b² − 4ac ≥ 0.",
      "workedExample": {
        "title": "Mise sous forme canonique et factorisation d'un polynôme du second degré",
        "statement": "Soit le polynôme P(x) = 2x² − 8x − 10. 1) Détermine la forme canonique de P(x). 2) Déduis-en ses racines et sa factorisation dans ℝ.",
        "methodSteps": [
          "1. Factoriser par le coefficient dominant a = 2 : P(x) = 2 · [x² − 4x − 5].",
          "2. Faire apparaître le début d'un carré parfait : x² − 4x est le début de (x − 2)² car (x − 2)² = x² − 4x + 4. Donc x² − 4x = (x − 2)² − 4.",
          "3. Remplacer dans l'expression : P(x) = 2 · [(x − 2)² − 4 − 5] = 2 · [(x − 2)² − 9].",
          "   La forme canonique est donc P(x) = 2(x − 2)² − 18.",
          "4. Factoriser en utilisant l'identité a² − b² = (a − b)(a + b) avec 9 = 3² :",
          "   P(x) = 2 · [(x − 2)² − 3²] = 2 · [(x − 2 − 3)(x − 2 + 3)] = 2(x − 5)(x + 1).",
          "5. Déterminer les racines : P(x) = 0 ⟺ x − 5 = 0 ou x + 1 = 0, soit x₁ = −1 et x₂ = 5."
        ],
        "conclusion": "La forme canonique est P(x) = 2(x − 2)² − 18, ses racines sont −1 et 5, et sa factorisation est P(x) = 2(x + 1)(x − 5)."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_ch2_p1_ex1",
          "type": "mcq",
          "prompt": "Quel est le degré du polynôme P(x) = 4x⁵ − 7x³ + 2x − 9 ?",
          "options": [
            "5",
            "4",
            "3",
            "−9"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le terme de plus haut degré est 4x⁵. La puissance la plus élevée de x avec un coefficient non nul est 5, donc d°(P) = 5."
        },
        {
          "id": "seconde_c_maths_numerique_ch2_p1_ex2",
          "type": "mcq",
          "prompt": "Soit P de degré 3 et Q de degré 4. Quel est le degré du produit P × Q ?",
          "options": [
            "7",
            "12",
            "4",
            "1"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le degré d'un produit de deux polynômes non nuls est la somme de leurs degrés : d°(P × Q) = d°(P) + d°(Q) = 3 + 4 = 7."
        },
        {
          "id": "seconde_c_maths_numerique_ch2_p1_ex3",
          "type": "mcq",
          "prompt": "Quelle est la valeur du discriminant Δ pour le trinôme T(x) = 3x² − 5x + 2 ?",
          "options": [
            "1",
            "−1",
            "49",
            "25"
          ],
          "correctAnswerIndex": 0,
          "explanation": "a = 3, b = −5, c = 2. Δ = b² − 4ac = (−5)² − 4(3)(2) = 25 − 24 = 1."
        },
        {
          "id": "seconde_c_maths_numerique_ch2_p1_ex4",
          "type": "mcq",
          "prompt": "Quelle est la forme canonique du trinôme f(x) = x² − 6x + 11 ?",
          "options": [
            "(x − 3)² + 2",
            "(x − 3)² − 2",
            "(x − 6)² + 11",
            "(x + 3)² + 2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "x² − 6x = (x − 3)² − 9. Donc x² − 6x + 11 = (x − 3)² − 9 + 11 = (x − 3)² + 2."
        },
        {
          "id": "seconde_c_maths_numerique_ch2_p1_ex5",
          "type": "mcq",
          "prompt": "Combien de racines réelles possède le trinôme g(x) = 2x² − 4x + 5 ?",
          "options": [
            "Aucune racine réelle car Δ < 0",
            "Une racine double car Δ = 0",
            "Deux racines réelles distinctes car Δ > 0",
            "Trois racines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Δ = (−4)² − 4(2)(5) = 16 − 40 = −24 < 0. Comme Δ est strictement négatif, g n'admet aucune racine réelle."
        },
        {
          "id": "seconde_c_maths_numerique_ch2_p1_ex6",
          "type": "mcq",
          "prompt": "Quelle est la factorisation dans ℝ du trinôme h(x) = x² + 2x − 15 ?",
          "options": [
            "(x − 3)(x + 5)",
            "(x + 3)(x − 5)",
            "(x − 1)(x + 15)",
            "Non factorisable"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Δ = 2² − 4(1)(−15) = 4 + 60 = 64 = 8². Les racines sont x₁ = (−2 − 8)/2 = −5 et x₂ = (−2 + 8)/2 = 3. Donc h(x) = (x − 3)(x + 5)."
        },
        {
          "id": "seconde_c_maths_numerique_ch2_p1_ex7",
          "type": "mcq",
          "prompt": "Pour quelle valeur de x le trinôme P(x) = −3(x − 4)² + 12 atteint-il son maximum ?",
          "options": [
            "x = 4",
            "x = 12",
            "x = −4",
            "x = −3"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme a = −3 < 0, le terme −3(x − 4)² est toujours négatif ou nul, et s'annule pour x = 4. Le maximum 12 est donc atteint en x = 4."
        },
        {
          "id": "seconde_c_maths_numerique_ch2_p1_ex8",
          "type": "mcq",
          "prompt": "Si un trinôme ax² + bx + c a un discriminant Δ = 0, quelle est l'expression de son unique racine double x₀ ?",
          "options": [
            "x₀ = −b / (2a)",
            "x₀ = b / (2a)",
            "x₀ = −b / a",
            "x₀ = −c / a"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lorsque Δ = 0, la formule générale donne x₀ = (−b ± √0) / (2a) = −b / (2a)."
        }
      ]
    },
    {
      "id": "seconde_c_maths_numerique_ch2_p2",
      "order": 2,
      "title": "Factorisation par (x − α) et étude des fractions rationnelles",
      "summary": "Théorème de factorisation par (x − α), identification des coefficients, division euclidienne de polynômes, et étude des fractions rationnelles (domaine, simplification, signe).",
      "conceptExplanation": "La factorisation des polynômes de degré supérieur et l'étude des quotients de polynômes constituent le socle du calcul algébrique avancé.\n\n1. Théorème de la racine et factorisation par (x − α) :\nSoit P un polynôme de degré n ≥ 1 et α un nombre réel.\n- Définition : On dit que α est une racine (ou un zéro) de P si P(α) = 0.\n- Théorème fondamental : Un réel α est racine de P si et seulement si le polynôme P(x) est factorisable par (x − α). C'est-à-dire qu'il existe un unique polynôme Q(x) tel que :\nP(x) = (x − α) · Q(x), avec deg(Q) = deg(P) − 1.\n\n2. Méthodes pratiques de détermination de Q(x) :\nPour un polynôme de degré 3 : P(x) = ax³ + bx² + cx + d dont α est racine connue, Q(x) est de degré 2 : Q(x) = ax² + b'x + c'.\n- Méthode 1 (Identification des coefficients) :\n  On développe (x − α)(ax² + b'x + c') = ax³ + (b' − aα)x² + (c' − b'α)x − c'α.\n  Par unicité des coefficients, on identifie chaque coefficient avec ceux de P(x) pour résoudre le système linéaire.\n- Méthode 2 (Division euclidienne) :\n  On pose la division euclidienne de P(x) par (x − α). Le reste de la division est obligatoirement 0 (car P(α) = 0) et le quotient est Q(x).\n\n3. Fractions rationnelles :\nOn appelle fonction rationnelle (ou fraction rationnelle) toute fonction F s'écrivant comme le quotient de deux polynômes :\nF(x) = P(x) / Q(x), avec Q(x) non identiquement nul.\n- Ensemble de définition : DF = {x ∈ ℝ | Q(x) ≠ 0}. Pour déterminer DF, on résout l'équation Q(x) = 0 dont les solutions constituent les valeurs interdites.\n- Simplification : Si P(x) et Q(x) admettent une racine commune α, on factorise P(x) = (x − α)P₁(x) et Q(x) = (x − α)Q₁(x). Pour tout x ∈ DF, on simplifie par (x − α) :\n  F(x) = P₁(x) / Q₁(x).\n- Étude du signe d'une fraction rationnelle :\n  Le signe de F(x) = P(x) / Q(x) est identique à celui du produit P(x) × Q(x) sur DF.\n  On dresse un tableau de signes contenant une ligne pour chaque facteur du numérateur et du dénominateur, en marquant par 0 les zéros du numérateur et par une double barre || les valeurs interdites issues du dénominateur.",
      "formulas": [
        {
          "name": "Théorème de factorisation",
          "formula": "P(α) = 0 ⟺ P(x) = (x − α) · Q(x)",
          "note": "Le quotient Q a pour degré deg(P) − 1."
        },
        {
          "name": "Domaine d'une fraction rationnelle",
          "formula": "DF = {x ∈ ℝ | Dénominateur Q(x) ≠ 0}",
          "note": "Toutes les racines du dénominateur sont des valeurs interdites."
        },
        {
          "name": "Règle des signes d'un quotient",
          "formula": "Signe(P(x) / Q(x)) = Signe(P(x) × Q(x)), pour x ∈ DF",
          "note": "Règle des signes identique au produit mais avec double barre pour Q(x) = 0."
        }
      ],
      "keyRule": "Si α annule P(x), alors (x − α) se met en facteur. Pour une fraction rationnelle P(x)/Q(x), déterminer les valeurs interdites (Q(x) = 0) est TOUJOURS la première étape impérative.",
      "workedExample": {
        "title": "Factorisation d'un polynôme de degré 3 et simplification d'une fraction rationnelle",
        "statement": "Soit le polynôme P(x) = x³ − 2x² − 5x + 6 et la fraction F(x) = P(x) / (x² − 1). 1) Vérifie que 1 est racine de P(x) et factorise P(x). 2) Détermine DF et simplifie F(x).",
        "methodSteps": [
          "1. Vérifier la racine : P(1) = 1³ − 2(1)² − 5(1) + 6 = 1 − 2 − 5 + 6 = 0. Donc 1 est bien racine de P, qui se factorise par (x − 1).",
          "2. Trouver le quotient Q(x) : On écrit P(x) = (x − 1)(ax² + bx + c).",
          "   Développons : (x − 1)(ax² + bx + c) = ax³ + (b − a)x² + (c − b)x − c.",
          "   Par identification avec x³ − 2x² − 5x + 6 :",
          "   a = 1 ; b − a = −2 ⟹ b = −1 ; −c = 6 ⟹ c = −6.",
          "   Donc P(x) = (x − 1)(x² − x − 6).",
          "3. Factoriser le trinôme x² − x − 6 : Δ = (−1)² − 4(1)(−6) = 1 + 24 = 25 = 5².",
          "   x₁ = (1 − 5)/2 = −2 et x₂ = (1 + 5)/2 = 3.",
          "   D'où P(x) = (x − 1)(x + 2)(x − 3).",
          "4. Domaine de F : Dénominateur x² − 1 = (x − 1)(x + 1) = 0 ⟺ x = 1 ou x = −1. Donc DF = ℝ \\ {−1 ; 1}.",
          "5. Simplifier F(x) : Pour tout x ∈ DF, F(x) = [(x − 1)(x + 2)(x − 3)] / [(x − 1)(x + 1)] = [(x + 2)(x − 3)] / (x + 1)."
        ],
        "conclusion": "P(x) = (x − 1)(x + 2)(x − 3), DF = ℝ \\ {−1 ; 1}, et pour tout x ∈ DF, F(x) = (x² − x − 6) / (x + 1)."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_ch2_p2_ex1",
          "type": "mcq",
          "prompt": "Soit P(x) = 2x³ − 3x² − 8x − 3. Quel nombre parmi les suivants est une racine évidente de P(x) ?",
          "options": [
            "−1",
            "1",
            "2",
            "0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Calculons P(−1) : 2(−1)³ − 3(−1)² − 8(−1) − 3 = −2 − 3 + 8 − 3 = 0. Donc −1 est racine de P(x)."
        },
        {
          "id": "seconde_c_maths_numerique_ch2_p2_ex2",
          "type": "mcq",
          "prompt": "Si le nombre 2 est racine d'un polynôme P(x) de degré 3, par quel facteur du premier degré P(x) est-il nécessairement divisible ?",
          "options": [
            "x − 2",
            "x + 2",
            "2x",
            "x² − 4"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après le théorème fondamental, P(α) = 0 équivaut à la divisibilité de P(x) par (x − α). Ici α = 2, donc par (x − 2)."
        },
        {
          "id": "seconde_c_maths_numerique_ch2_p2_ex3",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de définition DF de la fraction rationnelle F(x) = (2x + 5) / (x² − 4x) ?",
          "options": [
            "DF = ℝ \\ {0 ; 4}",
            "DF = ℝ \\ {4}",
            "DF = ℝ \\ {−2 ; 2}",
            "DF = ]0 ; 4["
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le dénominateur s'annule lorsque x² − 4x = 0 ⟺ x(x − 4) = 0 ⟺ x = 0 ou x = 4. Donc DF = ℝ \\ {0 ; 4}."
        },
        {
          "id": "seconde_c_maths_numerique_ch2_p2_ex4",
          "type": "mcq",
          "prompt": "Soit P(x) = x³ − 7x + 6 sachant que P(1) = 0. Quelle est la factorisation complète de P(x) ?",
          "options": [
            "(x − 1)(x − 2)(x + 3)",
            "(x − 1)(x + 2)(x − 3)",
            "(x + 1)(x − 2)(x + 3)",
            "(x − 1)(x² + 7)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "P(x) / (x − 1) = x² + x − 6. Le trinôme x² + x − 6 a pour racines 2 et −3. D'où P(x) = (x − 1)(x − 2)(x + 3)."
        },
        {
          "id": "seconde_c_maths_numerique_ch2_p2_ex5",
          "type": "mcq",
          "prompt": "Pour tout x ∈ ℝ \\ {3}, que vaut l'expression simplifiée de F(x) = (x² − 9) / (2x − 6) ?",
          "options": [
            "(x + 3) / 2",
            "(x − 3) / 2",
            "x + 3",
            "(x + 3) / (x − 3)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "F(x) = [(x − 3)(x + 3)] / [2(x − 3)]. Pour x ≠ 3, on simplifie par (x − 3), ce qui donne (x + 3) / 2."
        },
        {
          "id": "seconde_c_maths_numerique_ch2_p2_ex6",
          "type": "mcq",
          "prompt": "Dans un tableau de signes pour une fraction rationnelle P(x) / Q(x), comment note-t-on le résultat pour une valeur où Q(x) = 0 ?",
          "options": [
            "Une double barre verticale ||",
            "Un zéro 0",
            "Un signe plus +",
            "Un point d'interrogation ?"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les zéros du dénominateur sont des valeurs interdites où le quotient n'est pas défini, symbolisées par une double barre ||."
        },
        {
          "id": "seconde_c_maths_numerique_ch2_p2_ex7",
          "type": "mcq",
          "prompt": "Soit F(x) = (x − 1) / (x + 3). Pour quelles valeurs de x la fraction F(x) est-elle strictement positive ?",
          "options": [
            "x ∈ ]−∞ ; −3[ ∪ ]1 ; +∞[",
            "x ∈ ]−3 ; 1[",
            "x ∈ [1 ; +∞[",
            "x ∈ ]−∞ ; 1["
          ],
          "correctAnswerIndex": 0,
          "explanation": "F(x) a le même signe que (x − 1)(x + 3) pour x ≠ −3. Le produit de deux facteurs affines est positif à l'extérieur des racines : ]−∞ ; −3[ ∪ ]1 ; +∞[."
        },
        {
          "id": "seconde_c_maths_numerique_ch2_p2_ex8",
          "type": "mcq",
          "prompt": "Si le reste de la division euclidienne de P(x) par (x − 3) vaut 5, que vaut P(3) ?",
          "options": [
            "5",
            "0",
            "−5",
            "3"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'égalité euclidienne s'écrit P(x) = (x − 3)Q(x) + R. Comme R est une constante (degré < 1), en évaluant en x = 3 on a P(3) = (0)Q(3) + R = R = 5."
        }
      ]
    }
  ]
};

export const maths2deCEquationsInequationsChapter: CurriculumChapter = {
  "id": "seconde_c_maths_numerique_ch3_equations_inequations",
  "subjectId": "maths",
  "gradeLevel": "seconde_c",
  "order": 11,
  "officialVolumeHours": 8,
  "title": "Leçon 3 — Équations et inéquations dans ℝ",
  "summary": "Ensemble de validité Dv, résolution méthodique d'équations polynomiales par factorisation, équations rationnelles à inconnue au dénominateur, équations avec valeurs absolues, inéquations rationnelles par tableau de signes, et inéquations avec valeurs absolues interprétées en termes de distances.",
  "points": [
    {
      "id": "seconde_c_maths_numerique_ch3_p1",
      "order": 1,
      "title": "Résolution d'équations dans ℝ (produits nuls, quotients et valeurs absolues)",
      "summary": "Ensemble de validité Dv, équations se ramenant au produit nul A(x) × B(x) = 0, équations rationnelles A(x)/B(x) = 0, et équations avec valeurs absolues |u| = a et |u| = |v|.",
      "conceptExplanation": "Résoudre une équation d'inconnue x dans ℝ, c'est déterminer l'ensemble S de tous les nombres réels qui rendent l'égalité vraie.\n\n1. Notion d’ensemble de validité (Dv) :\nAvant tout calcul, il faut déterminer l'ensemble de validité Dv de l'équation, c'est-à-dire l'ensemble des réels pour lesquels chaque membre de l'équation a un sens :\n- Dénominateurs non nuls : toute expression au dénominateur doit être différente de 0.\n- Radicandes positifs ou nuls : toute expression sous une racine carrée doit être ≥ 0.\n- Règle d'or : Toute solution trouvée n'appartenant pas à Dv doit être impérativement rejetée.\n\n2. Équations produits nuls :\nThéorème fondamental : Un produit de facteurs est nul si et seulement si l'un au moins des facteurs est nul :\nA(x) × B(x) = 0 ⟺ A(x) = 0 ou B(x) = 0.\n- Méthode : On transpose tous les termes dans le premier membre pour obtenir F(x) = 0, puis on factorise F(x) (par facteur commun ou identités remarquables).\n\n3. Équations rationnelles (inconnue au dénominateur) :\nSoit l'équation A(x) / B(x) = 0.\n- Étape 1 : Déterminer Dv = {x ∈ ℝ | B(x) ≠ 0}.\n- Étape 2 : Un quotient est nul si et seulement si son numérateur est nul et son dénominateur est non nul :\nA(x) / B(x) = 0 ⟺ A(x) = 0 et x ∈ Dv.\n- Si l'équation se présente sous la forme A(x) / B(x) = C(x) / D(x), on transpose pour mettre au même dénominateur : (A·D − B·C) / (B·D) = 0 (on évite le produit en croix brut qui fait perdre de vue les valeurs interdites).\n\n4. Équations avec valeurs absolues :\nLa valeur absolue d'un réel x, notée |x|, représente la distance entre le point d'abscisse x et l'origine 0 sur la droite numérique. Propriétés fondamentales :\n- Pour tout a ≥ 0 : |u(x)| = a ⟺ u(x) = a ou u(x) = −a.\n- Si a < 0 : L'équation |u(x)| = a n'a AUCUNE solution (S = ∅), car une valeur absolue est toujours positive ou nulle.\n- Égalité de deux valeurs absolues : |u(x)| = |v(x)| ⟺ u(x) = v(x) ou u(x) = −v(x).",
      "formulas": [
        {
          "name": "Règle du produit nul",
          "formula": "A(x) × B(x) = 0 ⟺ A(x) = 0 ou B(x) = 0",
          "note": "Permet de ramener un polynôme factorisé à des équations du 1er degré."
        },
        {
          "name": "Quotient nul",
          "formula": "A(x) / B(x) = 0 ⟺ A(x) = 0 avec B(x) ≠ 0",
          "note": "Les zéros du numérateur doivent appartenir à Dv."
        },
        {
          "name": "Équation valeur absolue",
          "formula": "|u| = a (a ≥ 0) ⟺ u = a ou u = −a",
          "note": "Si a < 0, l'ensemble des solutions est l'ensemble vide ∅."
        }
      ],
      "keyRule": "L'ensemble de validité Dv doit être posé avant toute manipulation. Pour un quotient A(x)/B(x) = 0, une racine de A(x) qui annule aussi B(x) est une fausse solution à éliminer.",
      "workedExample": {
        "title": "Résolution méthodique d'une équation rationnelle et d'une équation avec valeur absolue",
        "statement": "Résous dans ℝ les équations suivantes : 1) (x² − 4) / (x − 2) = 0. 2) |2x − 5| = 7.",
        "methodSteps": [
          "1. Équation 1 : Poser l'ensemble de validité Dv : le dénominateur est x − 2 ≠ 0 ⟺ x ≠ 2. Donc Dv = ℝ \\ {2}.",
          "2. Annuler le numérateur : x² − 4 = 0 ⟺ (x − 2)(x + 2) = 0 ⟺ x = 2 ou x = −2.",
          "3. Vérifier l'appartenance à Dv : x = 2 ∉ Dv (valeur interdite rejetée). En revanche, −2 ∈ Dv. Donc S₁ = {−2}.",
          "4. Équation 2 : |2x − 5| = 7. Comme 7 ≥ 0, cette équation équivaut à : 2x − 5 = 7 ou 2x − 5 = −7.",
          "5. Résoudre chaque branche :",
          "   - Première branche : 2x = 7 + 5 = 12 ⟺ x = 6.",
          "   - Deuxième branche : 2x = −7 + 5 = −2 ⟺ x = −1.",
          "6. Conclure : L'ensemble des solutions est S₂ = {−1 ; 6}."
        ],
        "conclusion": "L'équation rationnelle a pour unique solution S₁ = {−2} (le 2 étant rejeté), et l'équation avec valeur absolue a pour ensemble de solutions S₂ = {−1 ; 6}."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_ch3_p1_ex1",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de l'équation (2x − 8)(3x + 9) = 0 dans ℝ ?",
          "options": [
            "S = {−3 ; 4}",
            "S = {3 ; 4}",
            "S = {−4 ; 3}",
            "S = {−3 ; −4}"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un produit est nul ssi un facteur est nul : 2x − 8 = 0 ⟺ x = 4 ou 3x + 9 = 0 ⟺ x = −3. D'où S = {−3 ; 4}."
        },
        {
          "id": "seconde_c_maths_numerique_ch3_p1_ex2",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de validité Dv de l'équation 3 / (x − 5) + 1 / (x + 2) = 0 ?",
          "options": [
            "Dv = ℝ \\ {−2 ; 5}",
            "Dv = ℝ \\ {5}",
            "Dv = ℝ \\ {2 ; −5}",
            "Dv = ]−2 ; 5["
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les dénominateurs s'annulent pour x = 5 et x = −2. Donc Dv = ℝ \\ {−2 ; 5}."
        },
        {
          "id": "seconde_c_maths_numerique_ch3_p1_ex3",
          "type": "mcq",
          "prompt": "Résous dans ℝ l'équation (x² − 9) / (x + 3) = 0.",
          "options": [
            "S = {3}",
            "S = {−3 ; 3}",
            "S = {−3}",
            "S = ∅"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dv = ℝ \\ {−3}. Le numérateur s'annule en x = 3 et x = −3. Comme −3 est une valeur interdite (x ∉ Dv), seul 3 est solution : S = {3}."
        },
        {
          "id": "seconde_c_maths_numerique_ch3_p1_ex4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans ℝ de l'équation |3x − 1| = −4 ?",
          "options": [
            "S = ∅",
            "S = {−1 ; 5/3}",
            "S = {−1}",
            "S = {4/3}"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une valeur absolue est par définition toujours positive ou nulle (|u| ≥ 0). Elle ne peut jamais être égale à −4. D'où S = ∅."
        },
        {
          "id": "seconde_c_maths_numerique_ch3_p1_ex5",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de l'équation |x − 3| = 5 dans ℝ ?",
          "options": [
            "S = {−2 ; 8}",
            "S = {2 ; 8}",
            "S = {8}",
            "S = {−2}"
          ],
          "correctAnswerIndex": 0,
          "explanation": "|x − 3| = 5 ⟺ x − 3 = 5 ou x − 3 = −5 ⟺ x = 8 ou x = −2. D'où S = {−2 ; 8}."
        },
        {
          "id": "seconde_c_maths_numerique_ch3_p1_ex6",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de l'équation |2x + 1| = |x − 4| dans ℝ ?",
          "options": [
            "S = {−5 ; 1}",
            "S = {−5 ; 3}",
            "S = {1 ; 5}",
            "S = {−1 ; 4}"
          ],
          "correctAnswerIndex": 0,
          "explanation": "|u| = |v| ⟺ u = v ou u = −v. Ici : 2x + 1 = x − 4 ⟺ x = −5, ou 2x + 1 = −(x − 4) = −x + 4 ⟺ 3x = 3 ⟺ x = 1. Donc S = {−5 ; 1}."
        },
        {
          "id": "seconde_c_maths_numerique_ch3_p1_ex7",
          "type": "mcq",
          "prompt": "Soit l'équation 2x / (x − 1) = 3. Quelle est la solution dans ℝ ?",
          "options": [
            "x = 3",
            "x = 1",
            "x = −3",
            "x = 3/2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dv = ℝ \\ {1}. 2x / (x − 1) = 3 ⟺ 2x = 3(x − 1) ⟺ 2x = 3x − 3 ⟺ −x = −3 ⟺ x = 3. Comme 3 ∈ Dv, S = {3}."
        },
        {
          "id": "seconde_c_maths_numerique_ch3_p1_ex8",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de l'équation x² = 7 dans ℝ ?",
          "options": [
            "S = {−√7 ; √7}",
            "S = {√7}",
            "S = {49}",
            "S = ∅"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour tout réel a > 0, l'équation x² = a admet exactement deux solutions réelles : √a et −√a. Ici S = {−√7 ; √7}."
        }
      ]
    },
    {
      "id": "seconde_c_maths_numerique_ch3_p2",
      "order": 2,
      "title": "Résolution d'inéquations dans ℝ (tableaux de signes et valeurs absolues)",
      "summary": "Inéquations produits et quotients par tableau de signes, et inéquations avec valeurs absolues interprétées géométriquement par la notion de distance.",
      "conceptExplanation": "Résoudre une inéquation consiste à déterminer l'intervalle ou la réunion d'intervalles de tous les réels x vérifiant une inégalité.\n\n1. Méthode générale pour les inéquations produits et quotients :\nPour résoudre une inéquation du type P(x) × Q(x) ≥ 0 ou P(x) / Q(x) ≤ 0 :\n1) Transposer tous les termes dans un seul membre pour avoir 0 dans le second membre.\n2) Factoriser complètement le numérateur et le dénominateur en facteurs de degré 1 (ax + b) ou du second degré sans racine.\n3) Déterminer l'ensemble de validité Dv (valeurs interdites annulant le dénominateur).\n4) Trouver les zéros de chaque facteur en résolvant ax + b = 0 (racine x = −b/a).\n   - Règle du signe d'un binôme ax + b : à droite de sa racine (−b/a), il a le signe de a ; à gauche, le signe opposé de a.\n5) Construire un tableau de signes ordonné :\n   - Placer sur la première ligne toutes les racines ordonnées de façon strictement croissante.\n   - Remplir une ligne de signes pour chaque facteur.\n   - Calculer le signe du produit ou du quotient en appliquant la règle des signes (nombre impair de signes − donne −, nombre pair donne +).\n   - Marquer un 0 sous les racines du numérateur, et une double barre || sous les valeurs interdites.\n6) Conclure en écrivant l'ensemble solution sous forme d'intervalles, en vérifiant si les crochets aux zéros sont fermés (si ≤ ou ≥) ou ouverts (si < ou >).\n\n2. Inéquations avec valeurs absolues et distance :\nSur la droite numérique, la distance entre deux points d'abscisses x et a est égale à |x − a|.\n- Inégalité triangulaire et voisinage (avec r > 0) :\n  |x − a| ≤ r ⟺ a − r ≤ x ≤ a + r ⟺ x ∈ [a − r ; a + r].\n  L'ensemble des réels dont la distance à a est inférieure ou égale à r forme un segment de centre a et de rayon r.\n- Cas strict : |x − a| < r ⟺ x ∈ ]a − r ; a + r[.\n- Éloignement (distance supérieure à r) :\n  |x − a| ≥ r ⟺ x − a ≤ −r ou x − a ≥ r ⟺ x ≤ a − r ou x ≥ a + r\n  ⟺ x ∈ ]−∞ ; a − r] ∪ [a + r ; +∞[.\n- Cas strict : |x − a| > r ⟺ x ∈ ]−∞ ; a − r[ ∪ ]a + r ; +∞[.",
      "formulas": [
        {
          "name": "Signe du binôme ax + b",
          "formula": "Signe opposé de a avant −b/a, et signe de a après −b/a",
          "note": "Règle universelle de signe pour toute expression affine."
        },
        {
          "name": "Valeur absolue bornée (≤ r)",
          "formula": "|x − a| ≤ r ⟺ x ∈ [a − r ; a + r]",
          "note": "Intervalle fermé centré en a et de rayon r (r > 0)."
        },
        {
          "name": "Valeur absolue extérieure (≥ r)",
          "formula": "|x − a| ≥ r ⟺ x ∈ ]−∞ ; a − r] ∪ [a + r ; +∞[",
          "note": "Réunion de deux demi-droites extérieures."
        }
      ],
      "keyRule": "Ne jamais multiplier une inéquation par une quantité contenant x sans connaître son signe (cela inverserait l'inégalité si négatif). Il faut TOUJOURS transposer, mettre au même dénominateur et dresser un tableau de signes.",
      "workedExample": {
        "title": "Résolution d'une inéquation quotient et d'une inéquation avec valeur absolue",
        "statement": "Résous dans ℝ : 1) (2x − 4) / (x + 3) ≤ 0. 2) |x − 2| ≤ 5.",
        "methodSteps": [
          "1. Inéquation 1 : Déterminer la valeur interdite : x + 3 = 0 ⟺ x = −3, donc Dv = ℝ \\ {−3}.",
          "2. Trouver les racines : Numérateur 2x − 4 = 0 ⟺ x = 2. Dénominateur x + 3 = 0 ⟺ x = −3.",
          "3. Dresser le tableau de signes avec les valeurs −3 et 2 :",
          "   - Pour 2x − 4 (a = 2 > 0) : négatif pour x < 2, nul en 2, positif pour x > 2.",
          "   - Pour x + 3 (a = 1 > 0) : négatif pour x < −3, nul en −3, positif pour x > −3.",
          "   - Bilan du quotient : positif sur ]−∞ ; −3[, négatif sur ]−3 ; 2], positif sur [2 ; +∞[.",
          "   - Valeur interdite en −3 (double barre ||), zéro en 2.",
          "4. Lire l'ensemble solution pour ≤ 0 : S₁ = ]−3 ; 2] (crochet ouvert en −3 car interdite, fermé en 2 car inégalité large).",
          "5. Inéquation 2 : |x − 2| ≤ 5. D'après la propriété des distances, cela équivaut à : 2 − 5 ≤ x ≤ 2 + 5 ⟺ −3 ≤ x ≤ 7.",
          "6. Conclure : S₂ = [−3 ; 7]."
        ],
        "conclusion": "La solution de l'inéquation quotient est S₁ = ]−3 ; 2], et celle de l'inéquation avec valeur absolue est S₂ = [−3 ; 7]."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_ch3_p2_ex1",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de l'inéquation (x − 1)(x + 4) < 0 dans ℝ ?",
          "options": [
            "S = ]−4 ; 1[",
            "S = [−4 ; 1]",
            "S = ]−∞ ; −4[ ∪ ]1 ; +∞[",
            "S = ]1 ; 4["
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le produit est du second degré ax² + bx + c avec a = 1 > 0. Il est strictement négatif STRICTEMENT entre ses deux racines −4 et 1 : S = ]−4 ; 1[."
        },
        {
          "id": "seconde_c_maths_numerique_ch3_p2_ex2",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de l'inéquation (3x − 6) / (x − 5) ≥ 0 ?",
          "options": [
            "S = ]−∞ ; 2] ∪ ]5 ; +∞[",
            "S = [2 ; 5[",
            "S = [2 ; 5]",
            "S = ]−∞ ; 2] ∪ [5 ; +∞["
          ],
          "correctAnswerIndex": 0,
          "explanation": "Numérateur s'annule en 2, dénominateur en 5 (valeur interdite). Le quotient est positif à l'extérieur des racines. 5 est strictement exclu : S = ]−∞ ; 2] ∪ ]5 ; +∞[."
        },
        {
          "id": "seconde_c_maths_numerique_ch3_p2_ex3",
          "type": "mcq",
          "prompt": "Résous dans ℝ l'inéquation |x − 4| ≤ 3.",
          "options": [
            "S = [1 ; 7]",
            "S = ]1 ; 7[",
            "S = [−1 ; 7]",
            "S = ]−∞ ; 1] ∪ [7 ; +∞["
          ],
          "correctAnswerIndex": 0,
          "explanation": "|x − 4| ≤ 3 ⟺ 4 − 3 ≤ x ≤ 4 + 3 ⟺ 1 ≤ x ≤ 7, soit S = [1 ; 7]."
        },
        {
          "id": "seconde_c_maths_numerique_ch3_p2_ex4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de l'inéquation |x + 1| > 4 dans ℝ ?",
          "options": [
            "S = ]−∞ ; −5[ ∪ ]3 ; +∞[",
            "S = ]−5 ; 3[",
            "S = [−5 ; 3]",
            "S = ]−∞ ; −3[ ∪ ]5 ; +∞["
          ],
          "correctAnswerIndex": 0,
          "explanation": "|x − (−1)| > 4 ⟺ x + 1 < −4 ou x + 1 > 4 ⟺ x < −5 ou x > 3. D'où S = ]−∞ ; −5[ ∪ ]3 ; +∞[."
        },
        {
          "id": "seconde_c_maths_numerique_ch3_p2_ex5",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de l'inéquation x² − 9 ≥ 0 dans ℝ ?",
          "options": [
            "S = ]−∞ ; −3] ∪ [3 ; +∞[",
            "S = [−3 ; 3]",
            "S = [3 ; +∞[",
            "S = ]−3 ; 3["
          ],
          "correctAnswerIndex": 0,
          "explanation": "(x − 3)(x + 3) ≥ 0. Un trinôme avec a = 1 > 0 est positif à l'extérieur de ses racines, donc S = ]−∞ ; −3] ∪ [3 ; +∞[."
        },
        {
          "id": "seconde_c_maths_numerique_ch3_p2_ex6",
          "type": "mcq",
          "prompt": "Pourquoi est-il FAUX d'écrire 1 / x ≤ 2 ⟺ 1 ≤ 2x ?",
          "options": [
            "Car x peut être négatif, ce qui changerait le sens de l'inégalité",
            "Car 1 ne peut pas être inférieur à 2",
            "Car 2 n'a pas de dénominateur",
            "Car l'inéquation n'a aucune solution"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Multiplier par x est interdit tant que le signe de x n'est pas fixé : si x < 0, multiplier par x inverse le sens de l'inégalité. Il faut transposer : 1/x − 2 ≤ 0."
        },
        {
          "id": "seconde_c_maths_numerique_ch3_p2_ex7",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de l'inéquation |2x − 6| < 0 dans ℝ ?",
          "options": [
            "S = ∅",
            "S = {3}",
            "S = ℝ",
            "S = ]−∞ ; 3["
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une valeur absolue est TOUJOURS supérieure ou égale à 0. Elle ne peut jamais être strictement inférieure à 0. Donc S = ∅."
        },
        {
          "id": "seconde_c_maths_numerique_ch3_p2_ex8",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de l'inéquation |x − 5| ≥ 0 dans ℝ ?",
          "options": [
            "S = ℝ tout entier",
            "S = [5 ; +∞[",
            "S = ℝ \\ {5}",
            "S = {5}"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour tout réel x, la valeur absolue d'un nombre réel est toujours positive ou nulle. L'inégalité est donc toujours vraie pour tout x ∈ ℝ."
        }
      ]
    }
  ]
};

export const maths2deCStatistiqueChapter: CurriculumChapter = {
  "id": "seconde_c_maths_numerique_ch4_statistique",
  "subjectId": "maths",
  "gradeLevel": "seconde_c",
  "order": 12,
  "officialVolumeHours": 8,
  "title": "Leçon 4 — Statistique",
  "summary": "Organisation et traitement des données statistiques à une variable : effectifs et fréquences cumulés croissants et décroissants, polygones cumulés, médiane graphique, paramètres de position (mode, moyenne, médiane par interpolation linéaire) et paramètres de dispersion (étendue, écart moyen, variance, écart-type).",
  "points": [
    {
      "id": "seconde_c_maths_numerique_ch4_p1",
      "order": 1,
      "title": "Effectifs et fréquences cumulés, polygones cumulés et médiane graphique",
      "summary": "Définition et calcul des effectifs cumulés (croissants et décroissants), fréquences cumulées, construction des polygones ECC et ECD, et détermination graphique de la médiane.",
      "conceptExplanation": "La statistique descriptive permet de synthétiser, représenter et interpréter de grandes quantités de données issues d'observations ou d'expériences.\n\n1. Vocabulaire statistique fondamental :\n- Population : L'ensemble étudié (ex: les élèves d'un lycée, les ampoules d'une usine).\n- Individu : Un élément de la population.\n- Caractère : La propriété observée sur chaque individu (ex: note, taille, durée de vie).\n  * Caractère qualitatif : non mesurable par un nombre (couleur, sexe).\n  * Caractère quantitatif : mesurable par un nombre. Il est DISCRET si ses valeurs sont isolées (notes entières, nombre d'enfants) ou CONTINU s'il prend toutes les valeurs d'un intervalle (taille, masse, regroupées en classes [a ; b[).\n- Effectif total (N) : Somme de tous les effectifs nᵢ de la série : N = ∑ nᵢ.\n- Fréquence (fᵢ) : Rapport fᵢ = nᵢ / N (exprimée en décimal ou en pourcentage % avec fᵢ = (nᵢ / N) × 100). La somme de toutes les fréquences est toujours égale à 1 (ou 100%).\n\n2. Effectifs et fréquences cumulés :\n- Effectif cumulé croissant (ECC) d'une modalité xₖ : Somme des effectifs des modalités inférieures ou égales à xₖ. Le dernier ECC est toujours égal à l'effectif total N.\n- Effectif cumulé décroissant (ECD) d'une modalité xₖ : Somme des effectifs des modalités supérieures ou égales à xₖ. Le premier ECD est égal à N.\n- Fréquences cumulées croissantes (FCC) : Rapport ECC / N (ou somme des fréquences jusqu'à xₖ). La dernière valeur est 1 (ou 100%).\n- Fréquences cumulées décroissantes (FCD) : Rapport ECD / N. La première valeur est 1 (ou 100%).\n\n3. Polygones cumulés (ECC et ECD) pour séries groupées en classes [a ; b[ :\n- Pour le polygone des ECC : On place les points dont l'abscisse est la BORNE SUPÉRIEURE de chaque classe et l'ordonnée l'ECC correspondant (en commençant par la borne inférieure de la première classe avec une ordonnée de 0).\n- Pour le polygone des ECD : On place les points dont l'abscisse est la BORNE INFÉRIEURE de chaque classe et l'ordonnée l'ECD correspondant (en terminant à la borne supérieure de la dernière classe avec une ordonnée de 0).\n\n4. Détermination graphique de la médiane (Me) :\nLa médiane est la valeur de la variable qui partage la population en deux sous-ensembles de même effectif (50% de la population a une valeur ≤ Me, et 50% une valeur ≥ Me).\n- Méthode 1 : Sur le polygone des ECC, on repère l'ordonnée N/2 (ou 50% sur le polygone des FCC). On trace une droite horizontale jusqu'au polygone, puis on projette verticalement sur l'axe des abscisses : l'abscisse lue est la médiane Me.\n- Méthode 2 : L'intersection du polygone des ECC et du polygone des ECD a pour ordonnée N/2. Son abscisse est exactement la médiane Me !",
      "formulas": [
        {
          "name": "Fréquence d'une modalité",
          "formula": "fᵢ = nᵢ / N",
          "note": "La somme de toutes les fréquences fᵢ est égale à 1 (ou 100%)."
        },
        {
          "name": "Point du polygone ECC",
          "formula": "M(Borne_supérieure ; ECC)",
          "note": "On commence à (Borne_inf_première_classe ; 0)."
        },
        {
          "name": "Médiane graphique",
          "formula": "Ordonnée = N / 2 (ou 50%) ⟹ Abscisse = Me",
          "note": "Point d'intersection des courbes ECC et ECD."
        }
      ],
      "keyRule": "Pour construire le polygone des ECC d'une série par classes, les ordonnées cumulées sont TOUJOURS associées aux bornes supérieures de chaque classe. L'intersection des polygones ECC et ECD donne instantanément la médiane Me.",
      "workedExample": {
        "title": "Calcul du tableau des effectifs cumulés et détermination de la médiane",
        "statement": "Une classe de 40 élèves a passé un devoir noté par classes de notes : [0 ; 4[ (effectif 4), [4 ; 8[ (effectif 8), [8 ; 12[ (effectif 16), [12 ; 16[ (effectif 8), [16 ; 20[ (effectif 4). Dresse le tableau des ECC et détermine la classe médiane.",
        "methodSteps": [
          "1. Vérifier l'effectif total N : N = 4 + 8 + 16 + 8 + 4 = 40 élèves.",
          "2. Calculer les effectifs cumulés croissants (ECC) :",
          "   - Pour la classe [0 ; 4[ : ECC = 4.",
          "   - Pour la classe [4 ; 8[ : ECC = 4 + 8 = 12.",
          "   - Pour la classe [8 ; 12[ : ECC = 12 + 16 = 28.",
          "   - Pour la classe [12 ; 16[ : ECC = 28 + 8 = 36.",
          "   - Pour la classe [16 ; 20[ : ECC = 36 + 4 = 40. Le dernier ECC est bien 40 = N.",
          "3. Déterminer le rang de la médiane : Le rang médian correspond à N / 2 = 40 / 2 = 20 élèves.",
          "4. Identifier la classe médiane : L'ECC de [4 ; 8[ est 12 (< 20) et l'ECC de [8 ; 12[ est 28 (≥ 20). Le 20e élève se trouve donc dans la classe [8 ; 12[."
        ],
        "conclusion": "L'effectif total est 40, le 20e élève appartient à la classe [8 ; 12[, qui est la classe médiane."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_ch4_p1_ex1",
          "type": "mcq",
          "prompt": "Quelle est la somme de toutes les fréquences relatives d'une série statistique ?",
          "options": [
            "1 (ou 100%)",
            "N (l'effectif total)",
            "0",
            "Cela dépend du nombre de classes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, la fréquence fᵢ = nᵢ / N. La somme des fᵢ vaut (∑ nᵢ) / N = N / N = 1, soit 100%."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p1_ex2",
          "type": "mcq",
          "prompt": "Pour une population de 50 individus, à quelle ordonnée sur le polygone des effectifs cumulés croissants (ECC) lit-on la médiane ?",
          "options": [
            "25",
            "50",
            "10",
            "12,5"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La médiane partage la population en deux moitiés égales. L'ordonnée correspondante est N / 2 = 50 / 2 = 25."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p1_ex3",
          "type": "mcq",
          "prompt": "Sur le polygone des effectifs cumulés croissants d'une série par classes [a ; b[, à quelle valeur de l'axe des abscisses associe-t-on l'ECC de la classe ?",
          "options": [
            "La borne supérieure b de la classe",
            "La borne inférieure a de la classe",
            "Le centre de la classe (a + b) / 2",
            "L'amplitude b − a de la classe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ECC représente l'effectif des individus ayant une valeur inférieure ou égale à la borne supérieure. On place donc le point en (b ; ECC)."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p1_ex4",
          "type": "mcq",
          "prompt": "Quelle est la signification de l'abscisse du point d'intersection du polygone des ECC et du polygone des ECD ?",
          "options": [
            "C'est la médiane de la série",
            "C'est la moyenne arithmétique",
            "C'est le mode de la série",
            "C'est l'étendue"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Au point d'intersection, ECC = ECD = N / 2. L'abscisse correspondante est rigoureusement la médiane Me de la distribution."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p1_ex5",
          "type": "mcq",
          "prompt": "Si une série statistique comporte 80 individus, que vaut le premier effectif cumulé décroissant (ECD) ?",
          "options": [
            "80",
            "0",
            "40",
            "L'effectif de la dernière modalité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le premier ECD regroupe l'ensemble de tous les individus ayant une valeur supérieure ou égale à la première modalité, c'est-à-dire toute la population : N = 80."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p1_ex6",
          "type": "mcq",
          "prompt": "Quelle est la nature du caractère 'durée de fonctionnement d'une lampe en heures' ?",
          "options": [
            "Quantitatif continu",
            "Quantitatif discret",
            "Qualitatif ordinal",
            "Qualitatif nominal"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une durée peut prendre n'importe quelle valeur réelle dans un intervalle continu de temps : c'est un caractère quantitatif continu."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p1_ex7",
          "type": "mcq",
          "prompt": "Une classe a pour bornes [10 ; 14[. Quel est son centre cᵢ et son amplitude aᵢ ?",
          "options": [
            "Centre = 12 et amplitude = 4",
            "Centre = 12 et amplitude = 2",
            "Centre = 4 et amplitude = 12",
            "Centre = 14 et amplitude = 10"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le centre est le milieu cᵢ = (10 + 14) / 2 = 24 / 2 = 12. L'amplitude est la largeur aᵢ = 14 − 10 = 4."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p1_ex8",
          "type": "mcq",
          "prompt": "Pour une série d'effectif total N = 60, l'ECC de la 2e classe est 24 et celui de la 3e classe est 38. Dans quelle classe se trouve la médiane ?",
          "options": [
            "Dans la 3e classe",
            "Dans la 2e classe",
            "Dans la 4e classe",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le rang médian est N / 2 = 60 / 2 = 30. Comme 24 < 30 ≤ 38, le 30e individu se trouve nécessairement dans la 3e classe."
        }
      ]
    },
    {
      "id": "seconde_c_maths_numerique_ch4_p2",
      "order": 2,
      "title": "Paramètres de position : Mode, moyenne pondérée et médiane par interpolation linéaire",
      "summary": "Définition du mode et de la classe modale, calcul de la moyenne arithmétique pondérée x̄, médiane pour une variable discrète, et calcul précis de la médiane continue par interpolation linéaire.",
      "conceptExplanation": "Les paramètres de position résument une distribution statistique par une seule valeur numérique centrale représentative.\n\n1. Le Mode et la Classe modale :\n- Pour une variable discrète : Le mode, noté Mo, est la valeur du caractère qui a le plus grand effectif (la plus fréquente).\n- Pour une variable continue par classes de même amplitude : La classe modale est la classe qui possède le plus grand effectif.\n- Une série peut être unimodale (un seul mode) ou bimodale (deux modes distincts de même effectif maximal).\n\n2. La Moyenne arithmétique pondérée (x̄) :\n- Pour une variable discrète de modalités x₁, x₂, ..., xₚ d'effectifs respectifs n₁, n₂, ..., nₚ (avec N = ∑ nᵢ) :\n  x̄ = (n₁·x₁ + n₂·x₂ + ... + nₚ·xₚ) / N = (1 / N) · ∑ nᵢ·xᵢ = ∑ fᵢ·xᵢ.\n- Pour une variable continue regroupée en classes [aᵢ ; bᵢ[ :\n  On remplace chaque classe par son CENTRE cᵢ = (aᵢ + bᵢ) / 2, puis on applique la formule :\n  x̄ = (1 / N) · ∑ nᵢ·cᵢ.\n- Propriété de linéarité : Si chaque valeur subit la transformation affine yᵢ = a·xᵢ + b, alors la nouvelle moyenne vaut ȳ = a·x̄ + b.\n\n3. La Médiane (Me) pour une variable discrète :\nAprès avoir ordonné les N valeurs par ordre croissant :\n- Si N est IMPAIR (N = 2k + 1) : La médiane est la valeur de rang k + 1, c'est-à-dire la valeur centrale exacte : Me = xₖ₊₁.\n- Si N est PAIR (N = 2k) : La médiane est la demi-somme des deux valeurs centrales de rangs k et k + 1 : Me = (xₖ + xₖ₊₁) / 2.\n\n4. Calcul de la médiane continue par interpolation linéaire :\nPour une variable continue, la médiane se situe dans la classe médiane [x₁ ; x₂[ dont l'ECC passe par N/2 (ou dont la fréquence cumulée passe par 50%).\nSoit F₁ la fréquence cumulée à la borne x₁, et F₂ la fréquence cumulée à la borne x₂.\nLe théorème de Thalès (ou proportionnalité des accroissements) donne la relation d'interpolation linéaire :\n(Me − x₁) / (x₂ − x₁) = (50 − F₁) / (F₂ − F₁)\n⟹ Me = x₁ + (x₂ − x₁) · [(50 − F₁) / (F₂ − F₁)].\nCette formule algébrique fournit la valeur exacte de la médiane sans nécessiter de tracé graphique.",
      "formulas": [
        {
          "name": "Moyenne pondérée",
          "formula": "x̄ = (1 / N) · ∑ nᵢ·cᵢ",
          "note": "Où cᵢ est la valeur ou le centre de classe (aᵢ + bᵢ)/2."
        },
        {
          "name": "Interpolation linéaire de la médiane",
          "formula": "(Me − x₁) / (x₂ − x₁) = (50 − F₁) / (F₂ − F₁)",
          "note": "Avec x₁ et x₂ les bornes de la classe médiane, et F₁, F₂ leurs FCC respectives."
        },
        {
          "name": "Propriété affine de la moyenne",
          "formula": "yᵢ = a·xᵢ + b ⟹ ȳ = a·x̄ + b",
          "note": "La moyenne conserve les transformations affines."
        }
      ],
      "keyRule": "Pour une série continue, le calcul de la moyenne utilise impérativement le CENTRE de chaque classe. La médiane se calcule rigoureusement par interpolation linéaire à partir des fréquences ou effectifs cumulés.",
      "workedExample": {
        "title": "Calcul complet de la moyenne et de la médiane par interpolation linéaire",
        "statement": "Une série statistique est donnée par le tableau suivant : Classe [0 ; 10[ (effectif 10, FCC = 20%), Classe [10 ; 20[ (effectif 20, FCC = 60%), Classe [20 ; 30[ (effectif 20, FCC = 100%). Effectif total N = 50. 1) Calcule la moyenne x̄. 2) Calcule la médiane Me par interpolation linéaire.",
        "methodSteps": [
          "1. Déterminer les centres de classe cᵢ :",
          "   - [0 ; 10[ : c₁ = (0 + 10) / 2 = 5.",
          "   - [10 ; 20[ : c₂ = (10 + 20) / 2 = 15.",
          "   - [20 ; 30[ : c₃ = (20 + 30) / 2 = 25.",
          "2. Calculer la moyenne pondérée x̄ :",
          "   x̄ = (10 × 5 + 20 × 15 + 20 × 25) / 50 = (50 + 300 + 500) / 50 = 850 / 50 = 17.",
          "3. Identifier la classe médiane : La FCC passe par 50% dans la classe [10 ; 20[ car F₁ = 20% < 50% ≤ F₂ = 60%. La classe médiane est donc [10 ; 20[.",
          "4. Poser la formule d'interpolation linéaire avec x₁ = 10, x₂ = 20, F₁ = 20 et F₂ = 60 :",
          "   (Me − 10) / (20 − 10) = (50 − 20) / (60 − 20).",
          "5. Résoudre pour Me :",
          "   (Me − 10) / 10 = 30 / 40 = 0,75 ⟺ Me − 10 = 10 × 0,75 = 7,5 ⟺ Me = 17,5."
        ],
        "conclusion": "La moyenne pondérée de la série est x̄ = 17 et la médiane calculée par interpolation linéaire est Me = 17,5."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_ch4_p2_ex1",
          "type": "mcq",
          "prompt": "Quelle est la moyenne de la série de notes : 8, 12, 14, 16, 20 avec des effectifs respectifs de 1, 2, 3, 2, 2 (effectif total N = 10) ?",
          "options": [
            "14,6",
            "14,0",
            "15,2",
            "13,8"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Somme = 1(8) + 2(12) + 3(14) + 2(16) + 2(20) = 8 + 24 + 42 + 32 + 40 = 146. Moyenne = 146 / 10 = 14,6."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p2_ex2",
          "type": "mcq",
          "prompt": "Soit la série discrète ordonnée : 3, 5, 7, 9, 11, 13, 17 (7 valeurs). Quelle est sa médiane ?",
          "options": [
            "9",
            "7",
            "10",
            "11"
          ],
          "correctAnswerIndex": 0,
          "explanation": "N = 7 est impair. La médiane est la valeur de rang (7 + 1) / 2 = 4e valeur. La 4e valeur est 9, donc Me = 9."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p2_ex3",
          "type": "mcq",
          "prompt": "Soit la série discrète ordonnée : 4, 6, 8, 12, 14, 18 (6 valeurs). Quelle est sa médiane ?",
          "options": [
            "10",
            "8",
            "12",
            "11"
          ],
          "correctAnswerIndex": 0,
          "explanation": "N = 6 est pair. La médiane est la moyenne des 3e et 4e valeurs : (8 + 12) / 2 = 20 / 2 = 10."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p2_ex4",
          "type": "mcq",
          "prompt": "Dans une classe, la moyenne à un devoir est de 11/20. Le professeur décide d'augmenter chaque note de 2 points puis de la multiplier par 1,1. Quelle sera la nouvelle moyenne ?",
          "options": [
            "14,3",
            "13,0",
            "12,1",
            "15,0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par linéarité de la moyenne, ȳ = 1,1 × (x̄ + 2) = 1,1 × (11 + 2) = 1,1 × 13 = 14,3."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p2_ex5",
          "type": "mcq",
          "prompt": "Si la classe médiane d'une série est [20 ; 30[, avec une FCC de 40% en 20 et de 65% en 30, quelle est la médiane par interpolation linéaire ?",
          "options": [
            "24",
            "25",
            "26",
            "23,5"
          ],
          "correctAnswerIndex": 0,
          "explanation": "(Me − 20) / (30 − 20) = (50 − 40) / (65 − 40) = 10 / 25 = 0,4. Donc Me − 20 = 10 × 0,4 = 4 ⟺ Me = 24."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p2_ex6",
          "type": "mcq",
          "prompt": "Qu'appelle-t-on classe modale dans une série statistique continue par classes de même amplitude ?",
          "options": [
            "La classe ayant le plus grand effectif",
            "La classe contenant la médiane",
            "La classe du milieu",
            "La classe ayant la plus grande amplitude"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La classe modale est par définition la classe correspondant à l'effectif le plus élevé (la plus forte densité)."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p2_ex7",
          "type": "mcq",
          "prompt": "Quel est le centre de la classe statistique [45 ; 55[ ?",
          "options": [
            "50",
            "10",
            "47,5",
            "52,5"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le centre d'une classe [a ; b[ est c = (a + b) / 2 = (45 + 55) / 2 = 100 / 2 = 50."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p2_ex8",
          "type": "mcq",
          "prompt": "Une série a pour valeurs : 2, 4, 4, 7, 7, 7, 9, 9. Quel est son mode ?",
          "options": [
            "7",
            "4",
            "9",
            "6"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La valeur 7 apparaît 3 fois (effectif le plus grand). C'est le mode unique de la série : Mo = 7."
        }
      ]
    },
    {
      "id": "seconde_c_maths_numerique_ch4_p3",
      "order": 3,
      "title": "Paramètres de dispersion : Étendue, écart moyen, variance et écart-type",
      "summary": "Mesure de la variabilité d'une série statistique : calcul de l'étendue e, de l'écart moyen em, de la variance V (formule de définition et formule de König-Huygens), et de l'écart-type σ.",
      "conceptExplanation": "Deux séries statistiques peuvent avoir exactement la même moyenne tout en étant extrêmement différentes : l'une peut être très regroupée autour de sa moyenne et l'autre très dispersée. Les paramètres de dispersion mesurent cette variabilité.\n\n1. L'Étendue (e) :\nL'étendue est la différence entre la plus grande et la plus petite valeur observée dans la série :\ne = xₘₐₓ − xₘᵢₙ.\n- Pour une série par classes : e est la différence entre la borne supérieure de la dernière classe et la borne inférieure de la première classe.\n- C'est un indicateur très simple mais sensible aux valeurs extrêmes isolées.\n\n2. L'Écart moyen (eₘ) :\nL'écart moyen est la moyenne arithmétique des valeurs absolues des écarts à la moyenne x̄ :\neₘ = (1 / N) · ∑ nᵢ·|xᵢ − x̄|.\nIl mesure la distance moyenne de chaque individu par rapport à la moyenne du groupe.\n\n3. La Variance (V) :\nLa variance est la moyenne arithmétique des carrés des écarts à la moyenne. Deux formules équivalentes permettent de la calculer :\n- Formule de définition :\nV = (1 / N) · ∑ nᵢ·(xᵢ − x̄)².\n- Formule développée (théorème de König-Huygens) :\nV = [ (1 / N) · ∑ nᵢ·xᵢ² ] − (x̄)².\n\"La variance est égale à la moyenne des carrés moins le carré de la moyenne\". Cette seconde formule est beaucoup plus rapide et évite les erreurs d'arrondis intermédiaires.\n- Propriété : La variance est toujours un nombre positif ou nul : V ≥ 0.\n\n4. L'Écart-type (σ) :\nL'écart-type est la racine carrée positive de la variance :\nσ = √V.\n- Avantage majeur : Alors que la variance est exprimée au carré des unités (ex: cm² ou points²), l'écart-type est exprimé dans la MÊME UNITÉ que la variable étudiée (ex: cm ou points).\n- Interprétation concrète :\n  * Un écart-type faible (proche de 0) signifie que la série est homogène, les individus sont très concentrés autour de la moyenne.\n  * Un écart-type élevé signifie que la série est très hétérogène, les résultats sont très dispersés.",
      "formulas": [
        {
          "name": "Étendue",
          "formula": "e = xₘₐₓ − xₘᵢₙ",
          "note": "Différence entre la valeur maximale et la valeur minimale."
        },
        {
          "name": "Variance (König-Huygens)",
          "formula": "V = (1 / N) · ∑ nᵢ·xᵢ² − (x̄)²",
          "note": "Moyenne des carrés moins carré de la moyenne (toujours V ≥ 0)."
        },
        {
          "name": "Écart-type",
          "formula": "σ = √V",
          "note": "Mesure de dispersion dans la même unité physique que la variable."
        }
      ],
      "keyRule": "La variance est TOUJOURS positive ou nulle (V ≥ 0). L'écart-type σ = √V mesure la dispersion dans la même unité que les données : plus σ est petit, plus la population est homogène.",
      "workedExample": {
        "title": "Calcul de l'étendue, de la variance et de l'écart-type",
        "statement": "Un groupe de 5 élèves a obtenu les notes suivantes à un test : 10, 12, 12, 14, 17. 1) Calcule l'étendue. 2) Calcule la moyenne x̄. 3) Calcule la variance V et l'écart-type σ.",
        "methodSteps": [
          "1. Calculer l'étendue : e = 17 − 10 = 7 points.",
          "2. Calculer la moyenne x̄ (N = 5) :",
          "   x̄ = (10 + 12 + 12 + 14 + 17) / 5 = 65 / 5 = 13 points.",
          "3. Calculer les carrés des valeurs xᵢ² :",
          "   10² = 100 ; 12² = 144 ; 12² = 144 ; 14² = 196 ; 17² = 289.",
          "4. Calculer la somme des carrés : ∑ xᵢ² = 100 + 144 + 144 + 196 + 289 = 873.",
          "5. Calculer la moyenne des carrés : (1 / 5) × 873 = 174,6.",
          "6. Appliquer la formule de König-Huygens pour la variance :",
          "   V = 174,6 − (x̄)² = 174,6 − 13² = 174,6 − 169 = 5,6.",
          "7. Calculer l'écart-type σ : σ = √5,6 ≈ 2,37 points."
        ],
        "conclusion": "L'étendue est e = 7 points, la moyenne est x̄ = 13 points, la variance est V = 5,6 points² et l'écart-type est σ ≈ 2,37 points."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_ch4_p3_ex1",
          "type": "mcq",
          "prompt": "Quelle est l'étendue de la série de notes : 6, 9, 11, 14, 18 ?",
          "options": [
            "12",
            "18",
            "6",
            "11"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'étendue est e = xₘₐₓ − xₘᵢₙ = 18 − 6 = 12."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p3_ex2",
          "type": "mcq",
          "prompt": "Une série de données a une variance V = 16. Que vaut son écart-type σ ?",
          "options": [
            "4",
            "256",
            "8",
            "2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'écart-type est la racine carrée de la variance : σ = √V = √16 = 4."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p3_ex3",
          "type": "mcq",
          "prompt": "D'après le théorème de König-Huygens, comment s'exprime la variance V ?",
          "options": [
            "Moyenne des carrés − Carré de la moyenne",
            "Carré de la moyenne − Moyenne des carrés",
            "Moyenne des carrés + Carré de la moyenne",
            "Racine carrée de la moyenne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le théorème de König-Huygens énonce : V = (1/N)·∑ nᵢ·xᵢ² − (x̄)² = Moyenne des carrés − Carré de la moyenne."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p3_ex4",
          "type": "mcq",
          "prompt": "Si tous les élèves d'une classe obtiennent exactement la même note de 12/20, que vaut l'écart-type σ ?",
          "options": [
            "0",
            "12",
            "1",
            "Impossible à calculer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Si toutes les valeurs sont identiques, il n'y a aucune dispersion par rapport à la moyenne : les écarts sont nuls, donc V = 0 et σ = 0."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p3_ex5",
          "type": "mcq",
          "prompt": "Deux classes A et B ont la même moyenne de 12/20. La classe A a un écart-type de 1,5 et la classe B a un écart-type de 4,2. Quelle classe est la plus homogène ?",
          "options": [
            "La classe A car son écart-type est plus faible",
            "La classe B car son écart-type est plus élevé",
            "Elles sont aussi homogènes car elles ont la même moyenne",
            "On ne peut pas comparer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Plus l'écart-type est petit, plus les notes sont resserrées autour de la moyenne, donc plus la classe est homogène."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p3_ex6",
          "type": "mcq",
          "prompt": "Soit une série de 4 valeurs : 2, 4, 6, 8. Sachant que la moyenne est x̄ = 5, que vaut la variance V ?",
          "options": [
            "5",
            "20",
            "√5",
            "4"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Écarts : (2−5)²=9, (4−5)²=1, (6−5)²=1, (8−5)²=9. Somme des carrés des écarts = 9+1+1+9 = 20. Variance = 20 / 4 = 5."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p3_ex7",
          "type": "mcq",
          "prompt": "Si on multiplie toutes les valeurs d'une série statistique par un nombre positif k, par combien est multiplié l'écart-type σ ?",
          "options": [
            "Par k",
            "Par k²",
            "Par √k",
            "L'écart-type ne change pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La variance est multipliée par k², donc l'écart-type σ' = √(k²·V) = k·√V = k·σ."
        },
        {
          "id": "seconde_c_maths_numerique_ch4_p3_ex8",
          "type": "mcq",
          "prompt": "Si on ajoute 5 points à toutes les notes d'une classe, que devient l'écart-type σ ?",
          "options": [
            "Il reste inchangé",
            "Il augmente de 5 points",
            "Il est multiplié par 5",
            "Il est divisé par 5"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ajouter une constante translate toutes les notes sans modifier l'écartement relatif entre elles. La dispersion et l'écart-type restent donc strictement identiques."
        }
      ]
    }
  ]
};

export const maths2deCNumericChapters: CurriculumChapter[] = [
  maths2deCFonctionsGeneralitesChapter,
  maths2deCPolynomesRationnellesChapter,
  maths2deCEquationsInequationsChapter,
  maths2deCStatistiqueChapter,
];
