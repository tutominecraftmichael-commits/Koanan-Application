// ============================================================================
// MODULE OFFICIEL : MATHÉMATIQUES 2de C – NUMÉRIQUE (MENA CÔTE D'IVOIRE)
// Volet : Numérique | Classe : Seconde C
// Leçon 1 approfondie : Généralités sur les fonctions (12 Mini-Leçons distinctes, 96 questions uniques)
// ============================================================================

import type { CurriculumChapter } from '../../lib/curriculum/types';

export const maths2deCFonctionsGeneralitesChapter: CurriculumChapter = {
  "id": "seconde_c_maths_numerique_ch1_fonctions_generalites",
  "subjectId": "maths",
  "gradeLevel": "seconde_c",
  "order": 9,
  "officialVolumeHours": 8,
  "title": "Leçon 1 – Généralités sur les fonctions",
  "summary": "Notion de fonction, ensemble de définition (polynômes, rationnelles, radicaux), calculs algébriques d'images et d'antécédents, test de la droite verticale, images directes et réciproques, égalité de fonctions, sens de variation et recherche d'extrema.",
  "points": [
    {
        "id": "seconde_c_maths_numerique_ch1_p1_definition_image_antecedent",
        "order": 1,
        "title": "Notion de fonction, variable, images et antécédents",
        "summary": "Définition d'une fonction f: E -> F, variable réelle x, unicité de l'image f(x) et notion d'antécédents.",
        "conceptExplanation": "Une fonction f d'une partie E de ℝ vers ℝ associe à chaque réel x au plus un réel noté f(x).\n• Image : Tout réel de l'ensemble de définition admet une UNIQUE image f(x).\n• Antécédent : Un nombre y peut admettre zéro, un ou plusieurs antécédents solutions de l'équation f(x) = y.\n• Distinction essentielle : f désigne la fonction elle-même, tandis que f(x) désigne la valeur numérique prise par f au point x.",
        "keyRule": "Chaque réel x admet au plus UNE SEULE image par f. En revanche, un nombre y peut avoir plusieurs antécédents !",
        "formula": {
            "name": "Relation fonctionnelle fondamentale",
            "formula": "y = f(x) \\quad (x \\in D_f)",
            "note": "Unicité absolue de l'image f(x) pour tout x appartenant à Df."
        },
        "workedExample": {
            "title": "Application guidée : Calcul d'image et antécédents",
            "statement": "Soit la fonction f définie par f(x) = 2x² − 3. Calcule l'image de 2 et cherche les antécédents de 5.",
            "methodSteps": [
                "1. Calcul de l'image : on remplace x par 2 : f(2) = 2(2)² − 3 = 2(4) − 3 = 5.",
                "2. Recherche des antécédents de 5 : on pose f(x) = 5 ⇔ 2x² − 3 = 5 ⇔ 2x² = 8 ⇔ x² = 4.",
                "3. Conclusion : Dans ℝ, x² = 4 admet deux solutions réelles distinctes : x = 2 et x = −2."
            ],
            "conclusion": "L'image de 2 est 5, et les antécédents de 5 par f sont −2 et 2."
        },
        "exercises": [
            {
                "id": "seconde_c_maths_numerique_ch1_p1_ex1",
                "type": "mcq",
                "prompt": "Par définition, qu'est-ce qu'une fonction f d'un ensemble E vers ℝ ?",
                "options": [
                    "Une relation qui associe à chaque élément de E au plus un nombre réel",
                    "Une équation géométrique reliant obligatoirement deux droites",
                    "Une formule qui donne toujours deux résultats opposés pour chaque x",
                    "Une relation où chaque nombre admet obligatoirement une infinité d'images"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Une fonction de E vers ℝ est une relation qui associe à chaque élément x de E au plus une image y dans ℝ."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p1_ex2",
                "type": "mcq",
                "prompt": "Soit f(x) = 3x − 8. Quelle est l'image de 5 par la fonction f ?",
                "options": [
                    "7",
                    "15",
                    "−8",
                    "1"
                ],
                "correctAnswerIndex": 0,
                "explanation": "On remplace x par 5 : f(5) = 3(5) − 8 = 15 − 8 = 7."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p1_ex3",
                "type": "mcq",
                "prompt": "Soit g(x) = x² + 4. Combien d'antécédents réels le nombre −5 admet-il par g ?",
                "options": [
                    "0 (aucun antécédent réel)",
                    "1 antécédent unique",
                    "2 antécédents distincts",
                    "Une infinité"
                ],
                "correctAnswerIndex": 0,
                "explanation": "g(x) = −5 ⇔ x² + 4 = −5 ⇔ x² = −9. Un carré réel étant toujours positif ou nul, cette équation n'a aucune solution réelle."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p1_ex4",
                "type": "mcq",
                "prompt": "Soit h(x) = 3x² − 12. Quels sont les antécédents de 0 par h dans ℝ ?",
                "options": [
                    "−2 et 2",
                    "2 uniquement",
                    "0 et 4",
                    "−4 et 4"
                ],
                "correctAnswerIndex": 0,
                "explanation": "3x² − 12 = 0 ⇔ 3x² = 12 ⇔ x² = 4 ⇔ x = −2 ou x = 2."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p1_ex5",
                "type": "mcq",
                "prompt": "Quelle est la nuance exacte entre f et f(x) ?",
                "options": [
                    "f désigne la fonction (le procédé) et f(x) désigne l'image de x (un nombre réel)",
                    "f désigne l'image et f(x) désigne la courbe",
                    "f et f(x) sont rigoureusement identiques sans aucune différence conceptuelle",
                    "f s'utilise uniquement pour les intervalles et f(x) pour les réels"
                ],
                "correctAnswerIndex": 0,
                "explanation": "f est le nom de la fonction, f(x) est le nombre réel obtenu par l'évaluation de f au point x."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p1_ex6",
                "type": "mcq",
                "prompt": "Soit f(x) = 7 − 4x. Quel est l'antécédent de −9 par f ?",
                "options": [
                    "4",
                    "−4",
                    "−16",
                    "2"
                ],
                "correctAnswerIndex": 0,
                "explanation": "7 − 4x = −9 ⇔ −4x = −16 ⇔ x = 4."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p1_ex7",
                "type": "mcq",
                "prompt": "Si l'on sait que f(4) = 16, quelle affirmation est rigoureusement vraie ?",
                "options": [
                    "16 est l'image de 4 par f, et 4 est un antécédent de 16 par f",
                    "4 est l'image de 16 par f",
                    "16 est l'unique antécédent possible de 4",
                    "f est obligatoirement la fonction f(x) = 4x"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Dans y = f(x), y est l'image de x et x est un antécédent de y."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p1_ex8",
                "type": "mcq",
                "prompt": "Soit k(x) = 2x³ − 5. Quelle est l'image de −1 par k ?",
                "options": [
                    "−7",
                    "−3",
                    "7",
                    "3"
                ],
                "correctAnswerIndex": 0,
                "explanation": "k(−1) = 2(−1)³ − 5 = 2(−1) − 5 = −2 − 5 = −7."
            }
        ],
        "formulas": [
            {
                "name": "Relation fonctionnelle fondamentale",
                "formula": "y = f(x) \\quad (x \\in D_f)",
                "note": "Unicité absolue de l'image f(x) pour tout x appartenant à Df."
            }
        ],
        "structuredSteps": [
            {
                "stepNumber": 1,
                "stepBadge": "Étape 1/8 · Par définition, qu'est-ce qu'une fonction f d'un ensemb...",
                "stepTheme": "Par définition, qu'est-ce qu'une fonction f d'un ensemb...",
                "stepTitle": "Par définition, qu'est-ce qu'une fonction f d'un ensemb...",
                "paragraphText": "Notion fondamentale :\n• Une fonction de E vers ℝ est une relation qui associe à chaque élément x de E au plus une image y dans ℝ.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Relation fonctionnelle fondamentale",
                    "formula": "y = f(x) \\quad (x \\in D_f)",
                    "note": "Unicité absolue de l'image f(x) pour tout x appartenant à Df."
                },
                "konanTip": "L'Astuce du Professeur Konan : Une fonction de E vers ℝ est une relation qui associe à chaque élément x de E au plus une image y dans ℝ !",
                "keyRule": "Chaque réel x admet au plus UNE SEULE image par f. En revanche, un nombre y peut avoir plusieurs antécédents !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p1_ex1",
                    "type": "mcq",
                    "prompt": "Par définition, qu'est-ce qu'une fonction f d'un ensemble E vers ℝ ?",
                    "options": [
                        "Une relation qui associe à chaque élément de E au plus un nombre réel",
                        "Une équation géométrique reliant obligatoirement deux droites",
                        "Une formule qui donne toujours deux résultats opposés pour chaque x",
                        "Une relation où chaque nombre admet obligatoirement une infinité d'images"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Une fonction de E vers ℝ est une relation qui associe à chaque élément x de E au plus une image y dans ℝ."
                }
            },
            {
                "stepNumber": 2,
                "stepBadge": "Étape 2/8 · Soit f(x) = 3x − 8. Quelle est l'image de 5 par la fonc...",
                "stepTheme": "Soit f(x) = 3x − 8. Quelle est l'image de 5 par la fonc...",
                "stepTitle": "Soit f(x) = 3x − 8. Quelle est l'image de 5 par la fonc...",
                "paragraphText": "Notion fondamentale :\n• On remplace x par 5 : f(5) = 3(5) − 8 = 15 − 8 = 7.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Relation fonctionnelle fondamentale",
                    "formula": "y = f(x) \\quad (x \\in D_f)",
                    "note": "Unicité absolue de l'image f(x) pour tout x appartenant à Df."
                },
                "konanTip": "L'Astuce du Professeur Konan : On remplace x par 5 : f(5) = 3(5) − 8 = 15 − 8 = 7 !",
                "keyRule": "Chaque réel x admet au plus UNE SEULE image par f. En revanche, un nombre y peut avoir plusieurs antécédents !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p1_ex2",
                    "type": "mcq",
                    "prompt": "Soit f(x) = 3x − 8. Quelle est l'image de 5 par la fonction f ?",
                    "options": [
                        "7",
                        "15",
                        "−8",
                        "1"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "On remplace x par 5 : f(5) = 3(5) − 8 = 15 − 8 = 7."
                }
            },
            {
                "stepNumber": 3,
                "stepBadge": "Étape 3/8 · Soit g(x) = x² + 4. Combien d'antécédents réels le nomb...",
                "stepTheme": "Soit g(x) = x² + 4. Combien d'antécédents réels le nomb...",
                "stepTitle": "Soit g(x) = x² + 4. Combien d'antécédents réels le nomb...",
                "paragraphText": "Notion fondamentale :\n• g(x) = −5 ⇔ x² + 4 = −5 ⇔ x² = −9. Un carré réel étant toujours positif ou nul, cette équation n'a aucune solution réelle.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Relation fonctionnelle fondamentale",
                    "formula": "y = f(x) \\quad (x \\in D_f)",
                    "note": "Unicité absolue de l'image f(x) pour tout x appartenant à Df."
                },
                "konanTip": "L'Astuce du Professeur Konan : g(x) = −5 ⇔ x² + 4 = −5 ⇔ x² = −9 !",
                "keyRule": "Chaque réel x admet au plus UNE SEULE image par f. En revanche, un nombre y peut avoir plusieurs antécédents !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p1_ex3",
                    "type": "mcq",
                    "prompt": "Soit g(x) = x² + 4. Combien d'antécédents réels le nombre −5 admet-il par g ?",
                    "options": [
                        "0 (aucun antécédent réel)",
                        "1 antécédent unique",
                        "2 antécédents distincts",
                        "Une infinité"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "g(x) = −5 ⇔ x² + 4 = −5 ⇔ x² = −9. Un carré réel étant toujours positif ou nul, cette équation n'a aucune solution réelle."
                }
            },
            {
                "stepNumber": 4,
                "stepBadge": "Étape 4/8 · Soit h(x) = 3x² − 12. Quels sont les antécédents de 0 p...",
                "stepTheme": "Soit h(x) = 3x² − 12. Quels sont les antécédents de 0 p...",
                "stepTitle": "Soit h(x) = 3x² − 12. Quels sont les antécédents de 0 p...",
                "paragraphText": "Notion fondamentale :\n• 3x² − 12 = 0 ⇔ 3x² = 12 ⇔ x² = 4 ⇔ x = −2 ou x = 2.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Relation fonctionnelle fondamentale",
                    "formula": "y = f(x) \\quad (x \\in D_f)",
                    "note": "Unicité absolue de l'image f(x) pour tout x appartenant à Df."
                },
                "konanTip": "L'Astuce du Professeur Konan : 3x² − 12 = 0 ⇔ 3x² = 12 ⇔ x² = 4 ⇔ x = −2 ou x = 2 !",
                "keyRule": "Chaque réel x admet au plus UNE SEULE image par f. En revanche, un nombre y peut avoir plusieurs antécédents !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p1_ex4",
                    "type": "mcq",
                    "prompt": "Soit h(x) = 3x² − 12. Quels sont les antécédents de 0 par h dans ℝ ?",
                    "options": [
                        "−2 et 2",
                        "2 uniquement",
                        "0 et 4",
                        "−4 et 4"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "3x² − 12 = 0 ⇔ 3x² = 12 ⇔ x² = 4 ⇔ x = −2 ou x = 2."
                }
            },
            {
                "stepNumber": 5,
                "stepBadge": "Étape 5/8 · Quelle est la nuance exacte entre f et f(x)",
                "stepTheme": "Quelle est la nuance exacte entre f et f(x)",
                "stepTitle": "Quelle est la nuance exacte entre f et f(x)",
                "paragraphText": "Notion fondamentale :\n• f est le nom de la fonction, f(x) est le nombre réel obtenu par l'évaluation de f au point x.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Relation fonctionnelle fondamentale",
                    "formula": "y = f(x) \\quad (x \\in D_f)",
                    "note": "Unicité absolue de l'image f(x) pour tout x appartenant à Df."
                },
                "konanTip": "L'Astuce du Professeur Konan : f est le nom de la fonction, f(x) est le nombre réel obtenu par l'évaluation de f au point x !",
                "keyRule": "Chaque réel x admet au plus UNE SEULE image par f. En revanche, un nombre y peut avoir plusieurs antécédents !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p1_ex5",
                    "type": "mcq",
                    "prompt": "Quelle est la nuance exacte entre f et f(x) ?",
                    "options": [
                        "f désigne la fonction (le procédé) et f(x) désigne l'image de x (un nombre réel)",
                        "f désigne l'image et f(x) désigne la courbe",
                        "f et f(x) sont rigoureusement identiques sans aucune différence conceptuelle",
                        "f s'utilise uniquement pour les intervalles et f(x) pour les réels"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "f est le nom de la fonction, f(x) est le nombre réel obtenu par l'évaluation de f au point x."
                }
            },
            {
                "stepNumber": 6,
                "stepBadge": "Étape 6/8 · Soit f(x) = 7 − 4x. Quel est l'antécédent de −9 par f",
                "stepTheme": "Soit f(x) = 7 − 4x. Quel est l'antécédent de −9 par f",
                "stepTitle": "Soit f(x) = 7 − 4x. Quel est l'antécédent de −9 par f",
                "paragraphText": "Notion fondamentale :\n• 7 − 4x = −9 ⇔ −4x = −16 ⇔ x = 4.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Relation fonctionnelle fondamentale",
                    "formula": "y = f(x) \\quad (x \\in D_f)",
                    "note": "Unicité absolue de l'image f(x) pour tout x appartenant à Df."
                },
                "konanTip": "L'Astuce du Professeur Konan : 7 − 4x = −9 ⇔ −4x = −16 ⇔ x = 4 !",
                "keyRule": "Chaque réel x admet au plus UNE SEULE image par f. En revanche, un nombre y peut avoir plusieurs antécédents !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p1_ex6",
                    "type": "mcq",
                    "prompt": "Soit f(x) = 7 − 4x. Quel est l'antécédent de −9 par f ?",
                    "options": [
                        "4",
                        "−4",
                        "−16",
                        "2"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "7 − 4x = −9 ⇔ −4x = −16 ⇔ x = 4."
                }
            },
            {
                "stepNumber": 7,
                "stepBadge": "Étape 7/8 · Si l'on sait que f(4) = 16, quelle affirmation est rigo...",
                "stepTheme": "Si l'on sait que f(4) = 16, quelle affirmation est rigo...",
                "stepTitle": "Si l'on sait que f(4) = 16, quelle affirmation est rigo...",
                "paragraphText": "Notion fondamentale :\n• Dans y = f(x), y est l'image de x et x est un antécédent de y.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Relation fonctionnelle fondamentale",
                    "formula": "y = f(x) \\quad (x \\in D_f)",
                    "note": "Unicité absolue de l'image f(x) pour tout x appartenant à Df."
                },
                "konanTip": "L'Astuce du Professeur Konan : Dans y = f(x), y est l'image de x et x est un antécédent de y !",
                "keyRule": "Chaque réel x admet au plus UNE SEULE image par f. En revanche, un nombre y peut avoir plusieurs antécédents !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p1_ex7",
                    "type": "mcq",
                    "prompt": "Si l'on sait que f(4) = 16, quelle affirmation est rigoureusement vraie ?",
                    "options": [
                        "16 est l'image de 4 par f, et 4 est un antécédent de 16 par f",
                        "4 est l'image de 16 par f",
                        "16 est l'unique antécédent possible de 4",
                        "f est obligatoirement la fonction f(x) = 4x"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Dans y = f(x), y est l'image de x et x est un antécédent de y."
                }
            },
            {
                "stepNumber": 8,
                "stepBadge": "Étape 8/8 · Soit k(x) = 2x³ − 5. Quelle est l'image de −1 par k",
                "stepTheme": "Soit k(x) = 2x³ − 5. Quelle est l'image de −1 par k",
                "stepTitle": "Soit k(x) = 2x³ − 5. Quelle est l'image de −1 par k",
                "paragraphText": "Notion fondamentale :\n• k(−1) = 2(−1)³ − 5 = 2(−1) − 5 = −2 − 5 = −7.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Relation fonctionnelle fondamentale",
                    "formula": "y = f(x) \\quad (x \\in D_f)",
                    "note": "Unicité absolue de l'image f(x) pour tout x appartenant à Df."
                },
                "konanTip": "L'Astuce du Professeur Konan : k(−1) = 2(−1)³ − 5 = 2(−1) − 5 = −2 − 5 = −7 !",
                "keyRule": "Chaque réel x admet au plus UNE SEULE image par f. En revanche, un nombre y peut avoir plusieurs antécédents !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p1_ex8",
                    "type": "mcq",
                    "prompt": "Soit k(x) = 2x³ − 5. Quelle est l'image de −1 par k ?",
                    "options": [
                        "−7",
                        "−3",
                        "7",
                        "3"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "k(−1) = 2(−1)³ − 5 = 2(−1) − 5 = −2 − 5 = −7."
                }
            }
        ]
    },
    {
        "id": "seconde_c_maths_numerique_ch1_p2_ensemble_definition_polynomes",
        "order": 2,
        "title": "Ensemble de définition des fonctions polynômes",
        "summary": "Détermination du domaine de définition d'une fonction polynôme : Df = ℝ sans restriction.",
        "conceptExplanation": "Une fonction polynôme f est une somme de monômes du type f(x) = an·xⁿ + ... + a1·x + a0.\n• Règle d'existence : L'addition et la multiplication de réels sont définies dans ℝ pour toute valeur de x.\n• Conclusion officielle : Une fonction polynôme n'a aucun dénominateur susceptible de s'annuler ni aucun radical. Son ensemble de définition est donc systématiquement l'ensemble de tous les réels : Df = ℝ = ]−∞ ; +∞[.",
        "keyRule": "Toute fonction polynôme (constante, affine, second degré, degré n) est définie sur ℝ tout entier !",
        "formula": {
            "name": "Domaine d'une fonction polynôme",
            "formula": "D_f = \\mathbb{R} = ]-\\infty ; +\\infty[",
            "note": "Aucune restriction algébrique : les polynômes sont définis sur ℝ."
        },
        "workedExample": {
            "title": "Application guidée : Justification du domaine d'un polynôme",
            "statement": "Détermine l'ensemble de définition de la fonction P(x) = 4x³ − 7x² + 5x − 11.",
            "methodSteps": [
                "1. Identifier la nature de l'expression : P est une somme de puissances entières de x à coefficients réels.",
                "2. Vérifier les contraintes : P ne comporte aucune division par une variable ni aucune racine carrée.",
                "3. Conclure : P est une fonction polynôme, donc DP = ℝ = ]−∞ ; +∞[."
            ],
            "conclusion": "L'ensemble de définition est DP = ℝ."
        },
        "exercises": [
            {
                "id": "seconde_c_maths_numerique_ch1_p2_ex1",
                "type": "mcq",
                "prompt": "Quel est l'ensemble de définition de la fonction f(x) = 5x⁴ − 2x² + 9 ?",
                "options": [
                    "Df = ℝ",
                    "Df = ℝ \\ {0}",
                    "Df = [0 ; +∞[",
                    "Df = ℝ \\ {2 ; 5}"
                ],
                "correctAnswerIndex": 0,
                "explanation": "f est une fonction polynôme du 4e degré. Elle est définie sur ℝ tout entier sans restriction."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p2_ex2",
                "type": "mcq",
                "prompt": "Pourquoi une fonction polynôme est-elle définie sur ℝ tout entier ?",
                "options": [
                    "Parce qu'elle n'impose aucune division par zéro ni aucune racine carrée d'un nombre négatif",
                    "Parce que son graphe passe obligatoirement par l'origine O(0 ; 0)",
                    "Parce que sa dérivée est obligatoirement constante",
                    "Parce qu'elle ne prend que des valeurs positives"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Les opérations constitutives d'un polynôme sont toujours valides pour tout réel x."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p2_ex3",
                "type": "mcq",
                "prompt": "Quel est l'ensemble de définition de la fonction affine g(x) = −(3/4)x + 7 ?",
                "options": [
                    "Dg = ℝ",
                    "Dg = ℝ \\ {4}",
                    "Dg = ℝ \\ {−3/4}",
                    "Dg = [0 ; +∞["
                ],
                "correctAnswerIndex": 0,
                "explanation": "La variable x n'est pas au dénominateur : g est un polynôme de degré 1, donc Dg = ℝ."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p2_ex4",
                "type": "mcq",
                "prompt": "Soit la fonction constante h(x) = −14. Quel est son ensemble de définition ?",
                "options": [
                    "Dh = ℝ",
                    "Dh = {−14}",
                    "Dh = ℝ \\ {−14}",
                    "Dh = ∅"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Une fonction constante est un polynôme de degré 0, définie pour tout réel x ∈ ℝ."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p2_ex5",
                "type": "mcq",
                "prompt": "Soit P(x) = (x − 3)(2x + 5) − (x² − 1). Quel est l'ensemble de définition Dp ?",
                "options": [
                    "Dp = ℝ",
                    "Dp = ℝ \\ {3 ; −5/2}",
                    "Dp = ℝ \\ {1 ; −1}",
                    "Dp = [−5/2 ; 3]"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Après développement, P est un polynôme du second degré, donc Dp = ℝ."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p2_ex6",
                "type": "mcq",
                "prompt": "La fonction f(x) = 3x² + √2·x − 5 est-elle un polynôme ?",
                "options": [
                    "Oui, c'est un polynôme du second degré car √2 est un coefficient réel constant",
                    "Non, car le symbole racine carrée interdit l'appellation de polynôme",
                    "Oui, mais son domaine est restreint à [0 ; +∞[",
                    "Non, c'est une fonction irrationnelle"
                ],
                "correctAnswerIndex": 0,
                "explanation": "√2 est un coefficient réel constant devant x. La variable x n'est pas sous le radical, donc f est un polynôme défini sur ℝ."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p2_ex7",
                "type": "mcq",
                "prompt": "Quel est le domaine de définition de f(x) = (x³ − 8) / 5 ?",
                "options": [
                    "Df = ℝ",
                    "Df = ℝ \\ {5}",
                    "Df = ℝ \\ {2}",
                    "Df = [2 ; +∞["
                ],
                "correctAnswerIndex": 0,
                "explanation": "Le dénominateur 5 est une constante non nulle. f(x) = (1/5)x³ − 8/5 est un polynôme, donc Df = ℝ."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p2_ex8",
                "type": "mcq",
                "prompt": "Quelle écriture sous forme d'intervalle correspond exactement à Df = ℝ ?",
                "options": [
                    "]−∞ ; +∞[",
                    "[−∞ ; +∞]",
                    "]0 ; +∞[",
                    "[0 ; +∞["
                ],
                "correctAnswerIndex": 0,
                "explanation": "L'ensemble ℝ s'écrit sous forme d'intervalle ouvert aux infinis : ]−∞ ; +∞[."
            }
        ],
        "formulas": [
            {
                "name": "Domaine d'une fonction polynôme",
                "formula": "D_f = \\mathbb{R} = ]-\\infty ; +\\infty[",
                "note": "Aucune restriction algébrique : les polynômes sont définis sur ℝ."
            }
        ],
        "structuredSteps": [
            {
                "stepNumber": 1,
                "stepBadge": "Étape 1/8 · Quel est l'ensemble de définition de la fonction f(x) =...",
                "stepTheme": "Quel est l'ensemble de définition de la fonction f(x) =...",
                "stepTitle": "Quel est l'ensemble de définition de la fonction f(x) =...",
                "paragraphText": "Notion fondamentale :\n• f est une fonction polynôme du 4e degré. Elle est définie sur ℝ tout entier sans restriction.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Domaine d'une fonction polynôme",
                    "formula": "D_f = \\mathbb{R} = ]-\\infty ; +\\infty[",
                    "note": "Aucune restriction algébrique : les polynômes sont définis sur ℝ."
                },
                "konanTip": "L'Astuce du Professeur Konan : f est une fonction polynôme du 4e degré !",
                "keyRule": "Toute fonction polynôme (constante, affine, second degré, degré n) est définie sur ℝ tout entier !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p2_ex1",
                    "type": "mcq",
                    "prompt": "Quel est l'ensemble de définition de la fonction f(x) = 5x⁴ − 2x² + 9 ?",
                    "options": [
                        "Df = ℝ",
                        "Df = ℝ \\ {0}",
                        "Df = [0 ; +∞[",
                        "Df = ℝ \\ {2 ; 5}"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "f est une fonction polynôme du 4e degré. Elle est définie sur ℝ tout entier sans restriction."
                }
            },
            {
                "stepNumber": 2,
                "stepBadge": "Étape 2/8 · Pourquoi une fonction polynôme est-elle définie sur ℝ t...",
                "stepTheme": "Pourquoi une fonction polynôme est-elle définie sur ℝ t...",
                "stepTitle": "Pourquoi une fonction polynôme est-elle définie sur ℝ t...",
                "paragraphText": "Notion fondamentale :\n• Les opérations constitutives d'un polynôme sont toujours valides pour tout réel x.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Domaine d'une fonction polynôme",
                    "formula": "D_f = \\mathbb{R} = ]-\\infty ; +\\infty[",
                    "note": "Aucune restriction algébrique : les polynômes sont définis sur ℝ."
                },
                "konanTip": "L'Astuce du Professeur Konan : Les opérations constitutives d'un polynôme sont toujours valides pour tout réel x !",
                "keyRule": "Toute fonction polynôme (constante, affine, second degré, degré n) est définie sur ℝ tout entier !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p2_ex2",
                    "type": "mcq",
                    "prompt": "Pourquoi une fonction polynôme est-elle définie sur ℝ tout entier ?",
                    "options": [
                        "Parce qu'elle n'impose aucune division par zéro ni aucune racine carrée d'un nombre négatif",
                        "Parce que son graphe passe obligatoirement par l'origine O(0 ; 0)",
                        "Parce que sa dérivée est obligatoirement constante",
                        "Parce qu'elle ne prend que des valeurs positives"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Les opérations constitutives d'un polynôme sont toujours valides pour tout réel x."
                }
            },
            {
                "stepNumber": 3,
                "stepBadge": "Étape 3/8 · Quel est l'ensemble de définition de la fonction affine...",
                "stepTheme": "Quel est l'ensemble de définition de la fonction affine...",
                "stepTitle": "Quel est l'ensemble de définition de la fonction affine...",
                "paragraphText": "Notion fondamentale :\n• La variable x n'est pas au dénominateur : g est un polynôme de degré 1, donc Dg = ℝ.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Domaine d'une fonction polynôme",
                    "formula": "D_f = \\mathbb{R} = ]-\\infty ; +\\infty[",
                    "note": "Aucune restriction algébrique : les polynômes sont définis sur ℝ."
                },
                "konanTip": "L'Astuce du Professeur Konan : La variable x n'est pas au dénominateur : g est un polynôme de degré 1, donc Dg = ℝ !",
                "keyRule": "Toute fonction polynôme (constante, affine, second degré, degré n) est définie sur ℝ tout entier !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p2_ex3",
                    "type": "mcq",
                    "prompt": "Quel est l'ensemble de définition de la fonction affine g(x) = −(3/4)x + 7 ?",
                    "options": [
                        "Dg = ℝ",
                        "Dg = ℝ \\ {4}",
                        "Dg = ℝ \\ {−3/4}",
                        "Dg = [0 ; +∞["
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "La variable x n'est pas au dénominateur : g est un polynôme de degré 1, donc Dg = ℝ."
                }
            },
            {
                "stepNumber": 4,
                "stepBadge": "Étape 4/8 · Soit la fonction constante h(x) = −14. Quel est son ens...",
                "stepTheme": "Soit la fonction constante h(x) = −14. Quel est son ens...",
                "stepTitle": "Soit la fonction constante h(x) = −14. Quel est son ens...",
                "paragraphText": "Notion fondamentale :\n• Une fonction constante est un polynôme de degré 0, définie pour tout réel x ∈ ℝ.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Domaine d'une fonction polynôme",
                    "formula": "D_f = \\mathbb{R} = ]-\\infty ; +\\infty[",
                    "note": "Aucune restriction algébrique : les polynômes sont définis sur ℝ."
                },
                "konanTip": "L'Astuce du Professeur Konan : Une fonction constante est un polynôme de degré 0, définie pour tout réel x ∈ ℝ !",
                "keyRule": "Toute fonction polynôme (constante, affine, second degré, degré n) est définie sur ℝ tout entier !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p2_ex4",
                    "type": "mcq",
                    "prompt": "Soit la fonction constante h(x) = −14. Quel est son ensemble de définition ?",
                    "options": [
                        "Dh = ℝ",
                        "Dh = {−14}",
                        "Dh = ℝ \\ {−14}",
                        "Dh = ∅"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Une fonction constante est un polynôme de degré 0, définie pour tout réel x ∈ ℝ."
                }
            },
            {
                "stepNumber": 5,
                "stepBadge": "Étape 5/8 · Soit P(x) = (x − 3)(2x + 5) − (x² − 1). Quel est l'ense...",
                "stepTheme": "Soit P(x) = (x − 3)(2x + 5) − (x² − 1). Quel est l'ense...",
                "stepTitle": "Soit P(x) = (x − 3)(2x + 5) − (x² − 1). Quel est l'ense...",
                "paragraphText": "Notion fondamentale :\n• Après développement, P est un polynôme du second degré, donc Dp = ℝ.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Domaine d'une fonction polynôme",
                    "formula": "D_f = \\mathbb{R} = ]-\\infty ; +\\infty[",
                    "note": "Aucune restriction algébrique : les polynômes sont définis sur ℝ."
                },
                "konanTip": "L'Astuce du Professeur Konan : Après développement, P est un polynôme du second degré, donc Dp = ℝ !",
                "keyRule": "Toute fonction polynôme (constante, affine, second degré, degré n) est définie sur ℝ tout entier !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p2_ex5",
                    "type": "mcq",
                    "prompt": "Soit P(x) = (x − 3)(2x + 5) − (x² − 1). Quel est l'ensemble de définition Dp ?",
                    "options": [
                        "Dp = ℝ",
                        "Dp = ℝ \\ {3 ; −5/2}",
                        "Dp = ℝ \\ {1 ; −1}",
                        "Dp = [−5/2 ; 3]"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Après développement, P est un polynôme du second degré, donc Dp = ℝ."
                }
            },
            {
                "stepNumber": 6,
                "stepBadge": "Étape 6/8 · La fonction f(x) = 3x² + √2·x − 5 est-elle un polynôme",
                "stepTheme": "La fonction f(x) = 3x² + √2·x − 5 est-elle un polynôme",
                "stepTitle": "La fonction f(x) = 3x² + √2·x − 5 est-elle un polynôme",
                "paragraphText": "Notion fondamentale :\n• √2 est un coefficient réel constant devant x. La variable x n'est pas sous le radical, donc f est un polynôme défini sur ℝ.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Domaine d'une fonction polynôme",
                    "formula": "D_f = \\mathbb{R} = ]-\\infty ; +\\infty[",
                    "note": "Aucune restriction algébrique : les polynômes sont définis sur ℝ."
                },
                "konanTip": "L'Astuce du Professeur Konan : √2 est un coefficient réel constant devant x !",
                "keyRule": "Toute fonction polynôme (constante, affine, second degré, degré n) est définie sur ℝ tout entier !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p2_ex6",
                    "type": "mcq",
                    "prompt": "La fonction f(x) = 3x² + √2·x − 5 est-elle un polynôme ?",
                    "options": [
                        "Oui, c'est un polynôme du second degré car √2 est un coefficient réel constant",
                        "Non, car le symbole racine carrée interdit l'appellation de polynôme",
                        "Oui, mais son domaine est restreint à [0 ; +∞[",
                        "Non, c'est une fonction irrationnelle"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "√2 est un coefficient réel constant devant x. La variable x n'est pas sous le radical, donc f est un polynôme défini sur ℝ."
                }
            },
            {
                "stepNumber": 7,
                "stepBadge": "Étape 7/8 · Quel est le domaine de définition de f(x) = (x³ − 8) / ...",
                "stepTheme": "Quel est le domaine de définition de f(x) = (x³ − 8) / ...",
                "stepTitle": "Quel est le domaine de définition de f(x) = (x³ − 8) / ...",
                "paragraphText": "Notion fondamentale :\n• Le dénominateur 5 est une constante non nulle. f(x) = (1/5)x³ − 8/5 est un polynôme, donc Df = ℝ.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Domaine d'une fonction polynôme",
                    "formula": "D_f = \\mathbb{R} = ]-\\infty ; +\\infty[",
                    "note": "Aucune restriction algébrique : les polynômes sont définis sur ℝ."
                },
                "konanTip": "L'Astuce du Professeur Konan : Le dénominateur 5 est une constante non nulle !",
                "keyRule": "Toute fonction polynôme (constante, affine, second degré, degré n) est définie sur ℝ tout entier !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p2_ex7",
                    "type": "mcq",
                    "prompt": "Quel est le domaine de définition de f(x) = (x³ − 8) / 5 ?",
                    "options": [
                        "Df = ℝ",
                        "Df = ℝ \\ {5}",
                        "Df = ℝ \\ {2}",
                        "Df = [2 ; +∞["
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Le dénominateur 5 est une constante non nulle. f(x) = (1/5)x³ − 8/5 est un polynôme, donc Df = ℝ."
                }
            },
            {
                "stepNumber": 8,
                "stepBadge": "Étape 8/8 · Quelle écriture sous forme d'intervalle correspond exac...",
                "stepTheme": "Quelle écriture sous forme d'intervalle correspond exac...",
                "stepTitle": "Quelle écriture sous forme d'intervalle correspond exac...",
                "paragraphText": "Notion fondamentale :\n• L'ensemble ℝ s'écrit sous forme d'intervalle ouvert aux infinis : ]−∞ ; +∞[.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Domaine d'une fonction polynôme",
                    "formula": "D_f = \\mathbb{R} = ]-\\infty ; +\\infty[",
                    "note": "Aucune restriction algébrique : les polynômes sont définis sur ℝ."
                },
                "konanTip": "L'Astuce du Professeur Konan : L'ensemble ℝ s'écrit sous forme d'intervalle ouvert aux infinis : ]−∞ ; +∞[ !",
                "keyRule": "Toute fonction polynôme (constante, affine, second degré, degré n) est définie sur ℝ tout entier !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p2_ex8",
                    "type": "mcq",
                    "prompt": "Quelle écriture sous forme d'intervalle correspond exactement à Df = ℝ ?",
                    "options": [
                        "]−∞ ; +∞[",
                        "[−∞ ; +∞]",
                        "]0 ; +∞[",
                        "[0 ; +∞["
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "L'ensemble ℝ s'écrit sous forme d'intervalle ouvert aux infinis : ]−∞ ; +∞[."
                }
            }
        ]
    },
    {
        "id": "seconde_c_maths_numerique_ch1_p3_ensemble_definition_rationnelles",
        "order": 3,
        "title": "Ensemble de définition des fonctions rationnelles",
        "summary": "Fonctions quotients P(x) / Q(x) et détermination des valeurs interdites annulant le dénominateur : Q(x) ≠ 0.",
        "conceptExplanation": "Une fonction rationnelle f est un quotient de deux polynômes : f(x) = P(x) / Q(x).\n• Condition d'existence : Une fraction n'est définie dans ℝ que si et seulement si son dénominateur est non nul : Q(x) ≠ 0.\n• Méthode pratique : On résout l'équation Q(x) = 0. Les solutions trouvées sont les « valeurs interdites ».\n• Conclusion : L'ensemble de définition est Df = ℝ privé de ces valeurs interdites, écrit sous forme de réunion d'intervalles ouverts.",
        "keyRule": "Une fraction rationnelle existe si et seulement si son dénominateur est différent de 0 : Q(x) ≠ 0 !",
        "formula": {
            "name": "Condition d'existence d'une fraction rationnelle",
            "formula": "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) \\neq 0\\}",
            "note": "Résoudre Q(x) = 0 pour trouver les valeurs à exclure de ℝ."
        },
        "workedExample": {
            "title": "Application guidée : Détermination des valeurs interdites",
            "statement": "Détermine l'ensemble de définition de la fonction f(x) = (3x + 1) / (2x − 6).",
            "methodSteps": [
                "1. Poser la condition d'existence : f(x) existe si et seulement si 2x − 6 ≠ 0.",
                "2. Chercher la valeur interdite : 2x − 6 = 0 ⇔ 2x = 6 ⇔ x = 3.",
                "3. Écrire le domaine : Df = ℝ \\ {3} = ]−∞ ; 3[ ∪ ]3 ; +∞[."
            ],
            "conclusion": "L'ensemble de définition est Df = ℝ \\ {3}."
        },
        "exercises": [
            {
                "id": "seconde_c_maths_numerique_ch1_p3_ex1",
                "type": "mcq",
                "prompt": "Quel est l'ensemble de définition de la fonction f(x) = (2x + 5) / (x − 4) ?",
                "options": [
                    "Df = ℝ \\ {4} = ]−∞ ; 4[ ∪ ]4 ; +∞[",
                    "Df = ℝ \\ {−4}",
                    "Df = [4 ; +∞[",
                    "Df = ℝ \\ {−5/2}"
                ],
                "correctAnswerIndex": 0,
                "explanation": "La fonction existe si x − 4 ≠ 0, soit x ≠ 4. Donc Df = ℝ \\ {4}."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p3_ex2",
                "type": "mcq",
                "prompt": "Quel est l'ensemble de définition de g(x) = 1 / (3x + 9) ?",
                "options": [
                    "Dg = ℝ \\ {−3}",
                    "Dg = ℝ \\ {3}",
                    "Dg = ]−3 ; +∞[",
                    "Dg = ℝ \\ {0}"
                ],
                "correctAnswerIndex": 0,
                "explanation": "3x + 9 = 0 ⇔ 3x = −9 ⇔ x = −3. D'où Dg = ℝ \\ {−3}."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p3_ex3",
                "type": "mcq",
                "prompt": "Soit h(x) = (x − 1) / (x² − 9). Quel est l'ensemble de définition Dh ?",
                "options": [
                    "Dh = ℝ \\ {−3 ; 3}",
                    "Dh = ℝ \\ {3}",
                    "Dh = ℝ \\ {1 ; 3}",
                    "Dh = ]−3 ; 3["
                ],
                "correctAnswerIndex": 0,
                "explanation": "x² − 9 = 0 ⇔ (x − 3)(x + 3) = 0 ⇔ x = 3 ou x = −3. Dh = ℝ \\ {−3 ; 3}."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p3_ex4",
                "type": "mcq",
                "prompt": "Quel est l'ensemble de définition de k(x) = 7 / (x² + 4) ?",
                "options": [
                    "Dk = ℝ",
                    "Dk = ℝ \\ {−2 ; 2}",
                    "Dk = ℝ \\ {−4}",
                    "Dk = ∅"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Pour tout x ∈ ℝ, x² ≥ 0 donc x² + 4 ≥ 4 > 0. Le dénominateur ne s'annule jamais dans ℝ : Dk = ℝ."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p3_ex5",
                "type": "mcq",
                "prompt": "Soit f(x) = (x² − 4) / (x − 2). Quel est l'ensemble de définition Df ?",
                "options": [
                    "Df = ℝ \\ {2}",
                    "Df = ℝ (car on peut simplifier par x − 2)",
                    "Df = ℝ \\ {−2 ; 2}",
                    "Df = [2 ; +∞["
                ],
                "correctAnswerIndex": 0,
                "explanation": "L'ensemble de définition se détermine TOUJOURS avant toute simplification algébrique. Le dénominateur x − 2 s'annule en 2, donc Df = ℝ \\ {2}."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p3_ex6",
                "type": "mcq",
                "prompt": "Soit g(x) = (4x + 1) / (x(x − 5)). Quelles sont les valeurs interdites ?",
                "options": [
                    "0 et 5",
                    "5 uniquement",
                    "0 et −5",
                    "−1/4"
                ],
                "correctAnswerIndex": 0,
                "explanation": "x(x − 5) = 0 ⇔ x = 0 ou x = 5. Les deux valeurs interdites sont 0 et 5."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p3_ex7",
                "type": "mcq",
                "prompt": "Quel est l'ensemble de définition de h(x) = (2x − 3) / (2x + 1) ?",
                "options": [
                    "Dh = ℝ \\ {−1/2}",
                    "Dh = ℝ \\ {1/2}",
                    "Dh = ℝ \\ {3/2}",
                    "Dh = ]−1/2 ; +∞["
                ],
                "correctAnswerIndex": 0,
                "explanation": "2x + 1 = 0 ⇔ 2x = −1 ⇔ x = −1/2. Dh = ℝ \\ {−1/2}."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p3_ex8",
                "type": "mcq",
                "prompt": "Soit f(x) = (x + 3) / (x² − 5x + 6). Quel est le domaine Df ?",
                "options": [
                    "Df = ℝ \\ {2 ; 3}",
                    "Df = ℝ \\ {−2 ; −3}",
                    "Df = ℝ \\ {−3}",
                    "Df = [2 ; 3]"
                ],
                "correctAnswerIndex": 0,
                "explanation": "x² − 5x + 6 = (x − 2)(x − 3). Le dénominateur s'annule en 2 et 3, donc Df = ℝ \\ {2 ; 3}."
            }
        ],
        "formulas": [
            {
                "name": "Condition d'existence d'une fraction rationnelle",
                "formula": "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) \\neq 0\\}",
                "note": "Résoudre Q(x) = 0 pour trouver les valeurs à exclure de ℝ."
            }
        ],
        "structuredSteps": [
            {
                "stepNumber": 1,
                "stepBadge": "Étape 1/8 · Quel est l'ensemble de définition de la fonction f(x) =...",
                "stepTheme": "Quel est l'ensemble de définition de la fonction f(x) =...",
                "stepTitle": "Quel est l'ensemble de définition de la fonction f(x) =...",
                "paragraphText": "Notion fondamentale :\n• La fonction existe si x − 4 ≠ 0, soit x ≠ 4. Donc Df = ℝ \\ {4}.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Condition d'existence d'une fraction rationnelle",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) \\neq 0\\}",
                    "note": "Résoudre Q(x) = 0 pour trouver les valeurs à exclure de ℝ."
                },
                "konanTip": "L'Astuce du Professeur Konan : La fonction existe si x − 4 ≠ 0, soit x ≠ 4 !",
                "keyRule": "Une fraction rationnelle existe si et seulement si son dénominateur est différent de 0 : Q(x) ≠ 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p3_ex1",
                    "type": "mcq",
                    "prompt": "Quel est l'ensemble de définition de la fonction f(x) = (2x + 5) / (x − 4) ?",
                    "options": [
                        "Df = ℝ \\ {4} = ]−∞ ; 4[ ∪ ]4 ; +∞[",
                        "Df = ℝ \\ {−4}",
                        "Df = [4 ; +∞[",
                        "Df = ℝ \\ {−5/2}"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "La fonction existe si x − 4 ≠ 0, soit x ≠ 4. Donc Df = ℝ \\ {4}."
                }
            },
            {
                "stepNumber": 2,
                "stepBadge": "Étape 2/8 · Quel est l'ensemble de définition de g(x) = 1 / (3x + 9...",
                "stepTheme": "Quel est l'ensemble de définition de g(x) = 1 / (3x + 9...",
                "stepTitle": "Quel est l'ensemble de définition de g(x) = 1 / (3x + 9...",
                "paragraphText": "Notion fondamentale :\n• 3x + 9 = 0 ⇔ 3x = −9 ⇔ x = −3. D'où Dg = ℝ \\ {−3}.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Condition d'existence d'une fraction rationnelle",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) \\neq 0\\}",
                    "note": "Résoudre Q(x) = 0 pour trouver les valeurs à exclure de ℝ."
                },
                "konanTip": "L'Astuce du Professeur Konan : 3x + 9 = 0 ⇔ 3x = −9 ⇔ x = −3 !",
                "keyRule": "Une fraction rationnelle existe si et seulement si son dénominateur est différent de 0 : Q(x) ≠ 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p3_ex2",
                    "type": "mcq",
                    "prompt": "Quel est l'ensemble de définition de g(x) = 1 / (3x + 9) ?",
                    "options": [
                        "Dg = ℝ \\ {−3}",
                        "Dg = ℝ \\ {3}",
                        "Dg = ]−3 ; +∞[",
                        "Dg = ℝ \\ {0}"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "3x + 9 = 0 ⇔ 3x = −9 ⇔ x = −3. D'où Dg = ℝ \\ {−3}."
                }
            },
            {
                "stepNumber": 3,
                "stepBadge": "Étape 3/8 · Soit h(x) = (x − 1) / (x² − 9). Quel est l'ensemble de ...",
                "stepTheme": "Soit h(x) = (x − 1) / (x² − 9). Quel est l'ensemble de ...",
                "stepTitle": "Soit h(x) = (x − 1) / (x² − 9). Quel est l'ensemble de ...",
                "paragraphText": "Notion fondamentale :\n• x² − 9 = 0 ⇔ (x − 3)(x + 3) = 0 ⇔ x = 3 ou x = −3. Dh = ℝ \\ {−3 ; 3}.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Condition d'existence d'une fraction rationnelle",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) \\neq 0\\}",
                    "note": "Résoudre Q(x) = 0 pour trouver les valeurs à exclure de ℝ."
                },
                "konanTip": "L'Astuce du Professeur Konan : x² − 9 = 0 ⇔ (x − 3)(x + 3) = 0 ⇔ x = 3 ou x = −3 !",
                "keyRule": "Une fraction rationnelle existe si et seulement si son dénominateur est différent de 0 : Q(x) ≠ 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p3_ex3",
                    "type": "mcq",
                    "prompt": "Soit h(x) = (x − 1) / (x² − 9). Quel est l'ensemble de définition Dh ?",
                    "options": [
                        "Dh = ℝ \\ {−3 ; 3}",
                        "Dh = ℝ \\ {3}",
                        "Dh = ℝ \\ {1 ; 3}",
                        "Dh = ]−3 ; 3["
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "x² − 9 = 0 ⇔ (x − 3)(x + 3) = 0 ⇔ x = 3 ou x = −3. Dh = ℝ \\ {−3 ; 3}."
                }
            },
            {
                "stepNumber": 4,
                "stepBadge": "Étape 4/8 · Quel est l'ensemble de définition de k(x) = 7 / (x² + 4...",
                "stepTheme": "Quel est l'ensemble de définition de k(x) = 7 / (x² + 4...",
                "stepTitle": "Quel est l'ensemble de définition de k(x) = 7 / (x² + 4...",
                "paragraphText": "Notion fondamentale :\n• Pour tout x ∈ ℝ, x² ≥ 0 donc x² + 4 ≥ 4 > 0. Le dénominateur ne s'annule jamais dans ℝ : Dk = ℝ.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Condition d'existence d'une fraction rationnelle",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) \\neq 0\\}",
                    "note": "Résoudre Q(x) = 0 pour trouver les valeurs à exclure de ℝ."
                },
                "konanTip": "L'Astuce du Professeur Konan : Pour tout x ∈ ℝ, x² ≥ 0 donc x² + 4 ≥ 4 > 0 !",
                "keyRule": "Une fraction rationnelle existe si et seulement si son dénominateur est différent de 0 : Q(x) ≠ 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p3_ex4",
                    "type": "mcq",
                    "prompt": "Quel est l'ensemble de définition de k(x) = 7 / (x² + 4) ?",
                    "options": [
                        "Dk = ℝ",
                        "Dk = ℝ \\ {−2 ; 2}",
                        "Dk = ℝ \\ {−4}",
                        "Dk = ∅"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Pour tout x ∈ ℝ, x² ≥ 0 donc x² + 4 ≥ 4 > 0. Le dénominateur ne s'annule jamais dans ℝ : Dk = ℝ."
                }
            },
            {
                "stepNumber": 5,
                "stepBadge": "Étape 5/8 · Soit f(x) = (x² − 4) / (x − 2). Quel est l'ensemble de ...",
                "stepTheme": "Soit f(x) = (x² − 4) / (x − 2). Quel est l'ensemble de ...",
                "stepTitle": "Soit f(x) = (x² − 4) / (x − 2). Quel est l'ensemble de ...",
                "paragraphText": "Notion fondamentale :\n• L'ensemble de définition se détermine TOUJOURS avant toute simplification algébrique. Le dénominateur x − 2 s'annule en 2, donc Df = ℝ \\ {2}.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Condition d'existence d'une fraction rationnelle",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) \\neq 0\\}",
                    "note": "Résoudre Q(x) = 0 pour trouver les valeurs à exclure de ℝ."
                },
                "konanTip": "L'Astuce du Professeur Konan : L'ensemble de définition se détermine TOUJOURS avant toute simplification algébrique !",
                "keyRule": "Une fraction rationnelle existe si et seulement si son dénominateur est différent de 0 : Q(x) ≠ 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p3_ex5",
                    "type": "mcq",
                    "prompt": "Soit f(x) = (x² − 4) / (x − 2). Quel est l'ensemble de définition Df ?",
                    "options": [
                        "Df = ℝ \\ {2}",
                        "Df = ℝ (car on peut simplifier par x − 2)",
                        "Df = ℝ \\ {−2 ; 2}",
                        "Df = [2 ; +∞["
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "L'ensemble de définition se détermine TOUJOURS avant toute simplification algébrique. Le dénominateur x − 2 s'annule en 2, donc Df = ℝ \\ {2}."
                }
            },
            {
                "stepNumber": 6,
                "stepBadge": "Étape 6/8 · Soit g(x) = (4x + 1) / (x(x − 5)). Quelles sont les val...",
                "stepTheme": "Soit g(x) = (4x + 1) / (x(x − 5)). Quelles sont les val...",
                "stepTitle": "Soit g(x) = (4x + 1) / (x(x − 5)). Quelles sont les val...",
                "paragraphText": "Notion fondamentale :\n• x(x − 5) = 0 ⇔ x = 0 ou x = 5. Les deux valeurs interdites sont 0 et 5.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Condition d'existence d'une fraction rationnelle",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) \\neq 0\\}",
                    "note": "Résoudre Q(x) = 0 pour trouver les valeurs à exclure de ℝ."
                },
                "konanTip": "L'Astuce du Professeur Konan : x(x − 5) = 0 ⇔ x = 0 ou x = 5 !",
                "keyRule": "Une fraction rationnelle existe si et seulement si son dénominateur est différent de 0 : Q(x) ≠ 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p3_ex6",
                    "type": "mcq",
                    "prompt": "Soit g(x) = (4x + 1) / (x(x − 5)). Quelles sont les valeurs interdites ?",
                    "options": [
                        "0 et 5",
                        "5 uniquement",
                        "0 et −5",
                        "−1/4"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "x(x − 5) = 0 ⇔ x = 0 ou x = 5. Les deux valeurs interdites sont 0 et 5."
                }
            },
            {
                "stepNumber": 7,
                "stepBadge": "Étape 7/8 · Quel est l'ensemble de définition de h(x) = (2x − 3) / ...",
                "stepTheme": "Quel est l'ensemble de définition de h(x) = (2x − 3) / ...",
                "stepTitle": "Quel est l'ensemble de définition de h(x) = (2x − 3) / ...",
                "paragraphText": "Notion fondamentale :\n• 2x + 1 = 0 ⇔ 2x = −1 ⇔ x = −1/2. Dh = ℝ \\ {−1/2}.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Condition d'existence d'une fraction rationnelle",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) \\neq 0\\}",
                    "note": "Résoudre Q(x) = 0 pour trouver les valeurs à exclure de ℝ."
                },
                "konanTip": "L'Astuce du Professeur Konan : 2x + 1 = 0 ⇔ 2x = −1 ⇔ x = −1/2 !",
                "keyRule": "Une fraction rationnelle existe si et seulement si son dénominateur est différent de 0 : Q(x) ≠ 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p3_ex7",
                    "type": "mcq",
                    "prompt": "Quel est l'ensemble de définition de h(x) = (2x − 3) / (2x + 1) ?",
                    "options": [
                        "Dh = ℝ \\ {−1/2}",
                        "Dh = ℝ \\ {1/2}",
                        "Dh = ℝ \\ {3/2}",
                        "Dh = ]−1/2 ; +∞["
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "2x + 1 = 0 ⇔ 2x = −1 ⇔ x = −1/2. Dh = ℝ \\ {−1/2}."
                }
            },
            {
                "stepNumber": 8,
                "stepBadge": "Étape 8/8 · Soit f(x) = (x + 3) / (x² − 5x + 6). Quel est le domain...",
                "stepTheme": "Soit f(x) = (x + 3) / (x² − 5x + 6). Quel est le domain...",
                "stepTitle": "Soit f(x) = (x + 3) / (x² − 5x + 6). Quel est le domain...",
                "paragraphText": "Notion fondamentale :\n• x² − 5x + 6 = (x − 2)(x − 3). Le dénominateur s'annule en 2 et 3, donc Df = ℝ \\ {2 ; 3}.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Condition d'existence d'une fraction rationnelle",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) \\neq 0\\}",
                    "note": "Résoudre Q(x) = 0 pour trouver les valeurs à exclure de ℝ."
                },
                "konanTip": "L'Astuce du Professeur Konan : x² − 5x + 6 = (x − 2)(x − 3) !",
                "keyRule": "Une fraction rationnelle existe si et seulement si son dénominateur est différent de 0 : Q(x) ≠ 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p3_ex8",
                    "type": "mcq",
                    "prompt": "Soit f(x) = (x + 3) / (x² − 5x + 6). Quel est le domaine Df ?",
                    "options": [
                        "Df = ℝ \\ {2 ; 3}",
                        "Df = ℝ \\ {−2 ; −3}",
                        "Df = ℝ \\ {−3}",
                        "Df = [2 ; 3]"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "x² − 5x + 6 = (x − 2)(x − 3). Le dénominateur s'annule en 2 et 3, donc Df = ℝ \\ {2 ; 3}."
                }
            }
        ]
    },
    {
        "id": "seconde_c_maths_numerique_ch1_p4_ensemble_definition_radicaux",
        "order": 4,
        "title": "Ensemble de définition des fonctions racines carrées",
        "summary": "Fonctions avec radicaux f(x) = √(U(x)) et résolution de l'inéquation U(x) ≥ 0.",
        "conceptExplanation": "La racine carrée d'un nombre réel n'a de sens dans ℝ que si ce nombre est positif ou nul.\n• Condition d'existence : Pour f(x) = √(U(x)), l'expression sous la racine (le radicande) doit être positive ou nulle : U(x) ≥ 0.\n• Méthode pratique : Poser l'inéquation U(x) ≥ 0 et déterminer son ensemble de solutions (tableau de signes si nécessaire).\n• Conclusion : Le domaine Df correspond exactement à l'ensemble des réels x vérifiant U(x) ≥ 0 (crochet fermé sur la borne si le dénominateur n'intervient pas).",
        "keyRule": "L'expression située sous une racine carrée doit obligatoirement être supérieure ou égale à zéro : U(x) ≥ 0 !",
        "formula": {
            "name": "Condition d'existence du radical",
            "formula": "D_f = \\{x \\in \\mathbb{R} \\mid U(x) \\ge 0\\}",
            "note": "Résoudre U(x) ≥ 0 : penser aux crochets fermés sur les racines réelles."
        },
        "workedExample": {
            "title": "Application guidée : Inéquation sous radical",
            "statement": "Détermine l'ensemble de définition de la fonction g(x) = √(2x − 8).",
            "methodSteps": [
                "1. Poser la condition d'existence : g(x) existe dans ℝ ⇔ 2x − 8 ≥ 0.",
                "2. Résoudre l'inéquation : 2x ≥ 8 ⇔ x ≥ 8/2 ⇔ x ≥ 4.",
                "3. Exprimer sous forme d'intervalle : Dg = [4 ; +∞[."
            ],
            "conclusion": "L'ensemble de définition est Dg = [4 ; +∞[."
        },
        "exercises": [
            {
                "id": "seconde_c_maths_numerique_ch1_p4_ex1",
                "type": "mcq",
                "prompt": "Quel est l'ensemble de définition de la fonction f(x) = √(3x − 6) ?",
                "options": [
                    "Df = [2 ; +∞[",
                    "Df = ]2 ; +∞[",
                    "Df = ]−∞ ; 2]",
                    "Df = ℝ \\ {2}"
                ],
                "correctAnswerIndex": 0,
                "explanation": "3x − 6 ≥ 0 ⇔ 3x ≥ 6 ⇔ x ≥ 2. D'où Df = [2 ; +∞[ (crochet fermé en 2 car √0 = 0 existe)."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p4_ex2",
                "type": "mcq",
                "prompt": "Quel est l'ensemble de définition de g(x) = √(10 − 2x) ?",
                "options": [
                    "Dg = ]−∞ ; 5]",
                    "Dg = [5 ; +∞[",
                    "Dg = ]−∞ ; −5]",
                    "Dg = ℝ \\ {5}"
                ],
                "correctAnswerIndex": 0,
                "explanation": "10 − 2x ≥ 0 ⇔ −2x ≥ −10 ⇔ x ≤ 5 (attention : division par −2 inverse le sens de l'inégalité). Dg = ]−∞ ; 5]."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p4_ex3",
                "type": "mcq",
                "prompt": "Soit h(x) = √(x² − 16). Quel est l'ensemble de définition Dh ?",
                "options": [
                    "Dh = ]−∞ ; −4] ∪ [4 ; +∞[",
                    "Dh = [−4 ; 4]",
                    "Dh = [4 ; +∞[",
                    "Dh = ℝ \\ {−4 ; 4}"
                ],
                "correctAnswerIndex": 0,
                "explanation": "x² − 16 ≥ 0 ⇔ (x − 4)(x + 4) ≥ 0. Le trinôme est positif à l'extérieur des racines : Dh = ]−∞ ; −4] ∪ [4 ; +∞[."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p4_ex4",
                "type": "mcq",
                "prompt": "Quel est l'ensemble de définition de k(x) = √(9 − x²) ?",
                "options": [
                    "Dk = [−3 ; 3]",
                    "Dk = ]−∞ ; −3] ∪ [3 ; +∞[",
                    "Dk = [0 ; 3]",
                    "Dk = [3 ; +∞["
                ],
                "correctAnswerIndex": 0,
                "explanation": "9 − x² ≥ 0 ⇔ (3 − x)(3 + x) ≥ 0. Le coefficient de x² étant négatif (−1), l'expression est positive à l'intérieur des racines : Dk = [−3 ; 3]."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p4_ex5",
                "type": "mcq",
                "prompt": "Pourquoi le crochet est-il fermé sur la borne a pour f(x) = √(x − a) ?",
                "options": [
                    "Parce que pour x = a, on obtient √(0) = 0 qui est un nombre réel bien défini",
                    "Parce que les crochets sont toujours fermés dans toutes les fonctions",
                    "Parce que 0 est un nombre strictement négatif",
                    "Par convention arbitraire sans raison mathématique"
                ],
                "correctAnswerIndex": 0,
                "explanation": "√0 = 0 est parfaitement calculable dans ℝ, donc a appartient au domaine de définition (crochet fermé)."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p4_ex6",
                "type": "mcq",
                "prompt": "Soit f(x) = √(x² + 9). Quel est son ensemble de définition ?",
                "options": [
                    "Df = ℝ",
                    "Df = [3 ; +∞[",
                    "Df = [−3 ; 3]",
                    "Df = ℝ \\ {−3 ; 3}"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Pour tout x ∈ ℝ, x² ≥ 0, donc x² + 9 ≥ 9 > 0. L'expression sous la racine est toujours strictement positive, donc Df = ℝ."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p4_ex7",
                "type": "mcq",
                "prompt": "Quel est l'ensemble de définition de g(x) = √(4x + 12) ?",
                "options": [
                    "Dg = [−3 ; +∞[",
                    "Dg = ]−3 ; +∞[",
                    "Dg = [3 ; +∞[",
                    "Dg = ]−∞ ; −3]"
                ],
                "correctAnswerIndex": 0,
                "explanation": "4x + 12 ≥ 0 ⇔ 4x ≥ −12 ⇔ x ≥ −3. Dg = [−3 ; +∞[."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p4_ex8",
                "type": "mcq",
                "prompt": "Quel est l'ensemble de définition de h(x) = √(−x) ?",
                "options": [
                    "Dh = ]−∞ ; 0]",
                    "Dh = [0 ; +∞[",
                    "Dh = ∅",
                    "Dh = ℝ"
                ],
                "correctAnswerIndex": 0,
                "explanation": "−x ≥ 0 ⇔ x ≤ 0. Donc Dh = ]−∞ ; 0] (la racine est définie pour tous les nombres négatifs ou nuls)."
            }
        ],
        "formulas": [
            {
                "name": "Condition d'existence du radical",
                "formula": "D_f = \\{x \\in \\mathbb{R} \\mid U(x) \\ge 0\\}",
                "note": "Résoudre U(x) ≥ 0 : penser aux crochets fermés sur les racines réelles."
            }
        ],
        "structuredSteps": [
            {
                "stepNumber": 1,
                "stepBadge": "Étape 1/8 · Quel est l'ensemble de définition de la fonction f(x) =...",
                "stepTheme": "Quel est l'ensemble de définition de la fonction f(x) =...",
                "stepTitle": "Quel est l'ensemble de définition de la fonction f(x) =...",
                "paragraphText": "Notion fondamentale :\n• 3x − 6 ≥ 0 ⇔ 3x ≥ 6 ⇔ x ≥ 2. D'où Df = [2 ; +∞[ (crochet fermé en 2 car √0 = 0 existe).\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Condition d'existence du radical",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid U(x) \\ge 0\\}",
                    "note": "Résoudre U(x) ≥ 0 : penser aux crochets fermés sur les racines réelles."
                },
                "konanTip": "L'Astuce du Professeur Konan : 3x − 6 ≥ 0 ⇔ 3x ≥ 6 ⇔ x ≥ 2 !",
                "keyRule": "L'expression située sous une racine carrée doit obligatoirement être supérieure ou égale à zéro : U(x) ≥ 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p4_ex1",
                    "type": "mcq",
                    "prompt": "Quel est l'ensemble de définition de la fonction f(x) = √(3x − 6) ?",
                    "options": [
                        "Df = [2 ; +∞[",
                        "Df = ]2 ; +∞[",
                        "Df = ]−∞ ; 2]",
                        "Df = ℝ \\ {2}"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "3x − 6 ≥ 0 ⇔ 3x ≥ 6 ⇔ x ≥ 2. D'où Df = [2 ; +∞[ (crochet fermé en 2 car √0 = 0 existe)."
                }
            },
            {
                "stepNumber": 2,
                "stepBadge": "Étape 2/8 · Quel est l'ensemble de définition de g(x) = √(10 − 2x)",
                "stepTheme": "Quel est l'ensemble de définition de g(x) = √(10 − 2x)",
                "stepTitle": "Quel est l'ensemble de définition de g(x) = √(10 − 2x)",
                "paragraphText": "Notion fondamentale :\n• 10 − 2x ≥ 0 ⇔ −2x ≥ −10 ⇔ x ≤ 5 (attention : division par −2 inverse le sens de l'inégalité). Dg = ]−∞ ; 5].\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Condition d'existence du radical",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid U(x) \\ge 0\\}",
                    "note": "Résoudre U(x) ≥ 0 : penser aux crochets fermés sur les racines réelles."
                },
                "konanTip": "L'Astuce du Professeur Konan : 10 − 2x ≥ 0 ⇔ −2x ≥ −10 ⇔ x ≤ 5 (attention : division par −2 inverse le sens de l'inégalité) !",
                "keyRule": "L'expression située sous une racine carrée doit obligatoirement être supérieure ou égale à zéro : U(x) ≥ 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p4_ex2",
                    "type": "mcq",
                    "prompt": "Quel est l'ensemble de définition de g(x) = √(10 − 2x) ?",
                    "options": [
                        "Dg = ]−∞ ; 5]",
                        "Dg = [5 ; +∞[",
                        "Dg = ]−∞ ; −5]",
                        "Dg = ℝ \\ {5}"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "10 − 2x ≥ 0 ⇔ −2x ≥ −10 ⇔ x ≤ 5 (attention : division par −2 inverse le sens de l'inégalité). Dg = ]−∞ ; 5]."
                }
            },
            {
                "stepNumber": 3,
                "stepBadge": "Étape 3/8 · Soit h(x) = √(x² − 16). Quel est l'ensemble de définiti...",
                "stepTheme": "Soit h(x) = √(x² − 16). Quel est l'ensemble de définiti...",
                "stepTitle": "Soit h(x) = √(x² − 16). Quel est l'ensemble de définiti...",
                "paragraphText": "Notion fondamentale :\n• x² − 16 ≥ 0 ⇔ (x − 4)(x + 4) ≥ 0. Le trinôme est positif à l'extérieur des racines : Dh = ]−∞ ; −4] ∪ [4 ; +∞[.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Condition d'existence du radical",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid U(x) \\ge 0\\}",
                    "note": "Résoudre U(x) ≥ 0 : penser aux crochets fermés sur les racines réelles."
                },
                "konanTip": "L'Astuce du Professeur Konan : x² − 16 ≥ 0 ⇔ (x − 4)(x + 4) ≥ 0 !",
                "keyRule": "L'expression située sous une racine carrée doit obligatoirement être supérieure ou égale à zéro : U(x) ≥ 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p4_ex3",
                    "type": "mcq",
                    "prompt": "Soit h(x) = √(x² − 16). Quel est l'ensemble de définition Dh ?",
                    "options": [
                        "Dh = ]−∞ ; −4] ∪ [4 ; +∞[",
                        "Dh = [−4 ; 4]",
                        "Dh = [4 ; +∞[",
                        "Dh = ℝ \\ {−4 ; 4}"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "x² − 16 ≥ 0 ⇔ (x − 4)(x + 4) ≥ 0. Le trinôme est positif à l'extérieur des racines : Dh = ]−∞ ; −4] ∪ [4 ; +∞[."
                }
            },
            {
                "stepNumber": 4,
                "stepBadge": "Étape 4/8 · Quel est l'ensemble de définition de k(x) = √(9 − x²)",
                "stepTheme": "Quel est l'ensemble de définition de k(x) = √(9 − x²)",
                "stepTitle": "Quel est l'ensemble de définition de k(x) = √(9 − x²)",
                "paragraphText": "Notion fondamentale :\n• 9 − x² ≥ 0 ⇔ (3 − x)(3 + x) ≥ 0. Le coefficient de x² étant négatif (−1), l'expression est positive à l'intérieur des racines : Dk = [−3 ; 3].\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Condition d'existence du radical",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid U(x) \\ge 0\\}",
                    "note": "Résoudre U(x) ≥ 0 : penser aux crochets fermés sur les racines réelles."
                },
                "konanTip": "L'Astuce du Professeur Konan : 9 − x² ≥ 0 ⇔ (3 − x)(3 + x) ≥ 0 !",
                "keyRule": "L'expression située sous une racine carrée doit obligatoirement être supérieure ou égale à zéro : U(x) ≥ 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p4_ex4",
                    "type": "mcq",
                    "prompt": "Quel est l'ensemble de définition de k(x) = √(9 − x²) ?",
                    "options": [
                        "Dk = [−3 ; 3]",
                        "Dk = ]−∞ ; −3] ∪ [3 ; +∞[",
                        "Dk = [0 ; 3]",
                        "Dk = [3 ; +∞["
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "9 − x² ≥ 0 ⇔ (3 − x)(3 + x) ≥ 0. Le coefficient de x² étant négatif (−1), l'expression est positive à l'intérieur des racines : Dk = [−3 ; 3]."
                }
            },
            {
                "stepNumber": 5,
                "stepBadge": "Étape 5/8 · Pourquoi le crochet est-il fermé sur la borne a pour f(...",
                "stepTheme": "Pourquoi le crochet est-il fermé sur la borne a pour f(...",
                "stepTitle": "Pourquoi le crochet est-il fermé sur la borne a pour f(...",
                "paragraphText": "Notion fondamentale :\n• √0 = 0 est parfaitement calculable dans ℝ, donc a appartient au domaine de définition (crochet fermé).\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Condition d'existence du radical",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid U(x) \\ge 0\\}",
                    "note": "Résoudre U(x) ≥ 0 : penser aux crochets fermés sur les racines réelles."
                },
                "konanTip": "L'Astuce du Professeur Konan : √0 = 0 est parfaitement calculable dans ℝ, donc a appartient au domaine de définition (crochet fermé) !",
                "keyRule": "L'expression située sous une racine carrée doit obligatoirement être supérieure ou égale à zéro : U(x) ≥ 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p4_ex5",
                    "type": "mcq",
                    "prompt": "Pourquoi le crochet est-il fermé sur la borne a pour f(x) = √(x − a) ?",
                    "options": [
                        "Parce que pour x = a, on obtient √(0) = 0 qui est un nombre réel bien défini",
                        "Parce que les crochets sont toujours fermés dans toutes les fonctions",
                        "Parce que 0 est un nombre strictement négatif",
                        "Par convention arbitraire sans raison mathématique"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "√0 = 0 est parfaitement calculable dans ℝ, donc a appartient au domaine de définition (crochet fermé)."
                }
            },
            {
                "stepNumber": 6,
                "stepBadge": "Étape 6/8 · Soit f(x) = √(x² + 9). Quel est son ensemble de définit...",
                "stepTheme": "Soit f(x) = √(x² + 9). Quel est son ensemble de définit...",
                "stepTitle": "Soit f(x) = √(x² + 9). Quel est son ensemble de définit...",
                "paragraphText": "Notion fondamentale :\n• Pour tout x ∈ ℝ, x² ≥ 0, donc x² + 9 ≥ 9 > 0. L'expression sous la racine est toujours strictement positive, donc Df = ℝ.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Condition d'existence du radical",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid U(x) \\ge 0\\}",
                    "note": "Résoudre U(x) ≥ 0 : penser aux crochets fermés sur les racines réelles."
                },
                "konanTip": "L'Astuce du Professeur Konan : Pour tout x ∈ ℝ, x² ≥ 0, donc x² + 9 ≥ 9 > 0 !",
                "keyRule": "L'expression située sous une racine carrée doit obligatoirement être supérieure ou égale à zéro : U(x) ≥ 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p4_ex6",
                    "type": "mcq",
                    "prompt": "Soit f(x) = √(x² + 9). Quel est son ensemble de définition ?",
                    "options": [
                        "Df = ℝ",
                        "Df = [3 ; +∞[",
                        "Df = [−3 ; 3]",
                        "Df = ℝ \\ {−3 ; 3}"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Pour tout x ∈ ℝ, x² ≥ 0, donc x² + 9 ≥ 9 > 0. L'expression sous la racine est toujours strictement positive, donc Df = ℝ."
                }
            },
            {
                "stepNumber": 7,
                "stepBadge": "Étape 7/8 · Quel est l'ensemble de définition de g(x) = √(4x + 12)",
                "stepTheme": "Quel est l'ensemble de définition de g(x) = √(4x + 12)",
                "stepTitle": "Quel est l'ensemble de définition de g(x) = √(4x + 12)",
                "paragraphText": "Notion fondamentale :\n• 4x + 12 ≥ 0 ⇔ 4x ≥ −12 ⇔ x ≥ −3. Dg = [−3 ; +∞[.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Condition d'existence du radical",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid U(x) \\ge 0\\}",
                    "note": "Résoudre U(x) ≥ 0 : penser aux crochets fermés sur les racines réelles."
                },
                "konanTip": "L'Astuce du Professeur Konan : 4x + 12 ≥ 0 ⇔ 4x ≥ −12 ⇔ x ≥ −3 !",
                "keyRule": "L'expression située sous une racine carrée doit obligatoirement être supérieure ou égale à zéro : U(x) ≥ 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p4_ex7",
                    "type": "mcq",
                    "prompt": "Quel est l'ensemble de définition de g(x) = √(4x + 12) ?",
                    "options": [
                        "Dg = [−3 ; +∞[",
                        "Dg = ]−3 ; +∞[",
                        "Dg = [3 ; +∞[",
                        "Dg = ]−∞ ; −3]"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "4x + 12 ≥ 0 ⇔ 4x ≥ −12 ⇔ x ≥ −3. Dg = [−3 ; +∞[."
                }
            },
            {
                "stepNumber": 8,
                "stepBadge": "Étape 8/8 · Quel est l'ensemble de définition de h(x) = √(−x)",
                "stepTheme": "Quel est l'ensemble de définition de h(x) = √(−x)",
                "stepTitle": "Quel est l'ensemble de définition de h(x) = √(−x)",
                "paragraphText": "Notion fondamentale :\n• −x ≥ 0 ⇔ x ≤ 0. Donc Dh = ]−∞ ; 0] (la racine est définie pour tous les nombres négatifs ou nuls).\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Condition d'existence du radical",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid U(x) \\ge 0\\}",
                    "note": "Résoudre U(x) ≥ 0 : penser aux crochets fermés sur les racines réelles."
                },
                "konanTip": "L'Astuce du Professeur Konan : −x ≥ 0 ⇔ x ≤ 0 !",
                "keyRule": "L'expression située sous une racine carrée doit obligatoirement être supérieure ou égale à zéro : U(x) ≥ 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p4_ex8",
                    "type": "mcq",
                    "prompt": "Quel est l'ensemble de définition de h(x) = √(−x) ?",
                    "options": [
                        "Dh = ]−∞ ; 0]",
                        "Dh = [0 ; +∞[",
                        "Dh = ∅",
                        "Dh = ℝ"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "−x ≥ 0 ⇔ x ≤ 0. Donc Dh = ]−∞ ; 0] (la racine est définie pour tous les nombres négatifs ou nuls)."
                }
            }
        ]
    },
    {
        "id": "seconde_c_maths_numerique_ch1_p5_ensemble_definition_combines",
        "order": 5,
        "title": "Ensemble de définition : Radicaux au dénominateur",
        "summary": "Fonctions combinées f(x) = P(x) / √(Q(x)) et résolution de l'inégalité stricte Q(x) > 0.",
        "conceptExplanation": "Lorsqu'une racine carrée se trouve au dénominateur d'une fraction, deux contraintes s'appliquent en même temps :\n• Contrainte du radical : L'expression sous la racine doit être positive ou nulle (Q(x) ≥ 0).\n• Contrainte du dénominateur : Le dénominateur ne peut jamais être nul (Q(x) ≠ 0).\n• Règle unifiée : L'expression sous la racine doit être STRICTEMENT positive : Q(x) > 0 (crochets obligatoirement ouverts sur les racines du dénominateur).",
        "keyRule": "Quand la racine est au dénominateur, la condition devient STRICTEMENT SUPÉRIEURE À ZÉRO : Q(x) > 0 !",
        "formula": {
            "name": "Radical au dénominateur",
            "formula": "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) > 0\\}",
            "note": "Inégalité stricte : la borne qui annule le dénominateur est rigoureusement exclue (crochet ouvert)."
        },
        "workedExample": {
            "title": "Application guidée : Radical au dénominateur",
            "statement": "Détermine l'ensemble de définition de la fonction f(x) = (2x + 1) / √(5 − x).",
            "methodSteps": [
                "1. Poser la condition d'existence : le dénominateur comporte une racine carrée, il faut 5 − x > 0.",
                "2. Résoudre l'inégalité stricte : −x > −5 ⇔ x < 5.",
                "3. Écrire le domaine sous forme d'intervalle : Df = ]−∞ ; 5[ (crochet ouvert en 5 car x = 5 annulerait le dénominateur)."
            ],
            "conclusion": "L'ensemble de définition est Df = ]−∞ ; 5[."
        },
        "exercises": [
            {
                "id": "seconde_c_maths_numerique_ch1_p5_ex1",
                "type": "mcq",
                "prompt": "Quel est l'ensemble de définition de la fonction f(x) = 1 / √(x − 3) ?",
                "options": [
                    "Df = ]3 ; +∞[",
                    "Df = [3 ; +∞[",
                    "Df = ℝ \\ {3}",
                    "Df = ]−∞ ; 3["
                ],
                "correctAnswerIndex": 0,
                "explanation": "La racine est au dénominateur, donc x − 3 > 0 ⇔ x > 3. Df = ]3 ; +∞[ (crochet ouvert en 3)."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p5_ex2",
                "type": "mcq",
                "prompt": "Quel est l'ensemble de définition de g(x) = (3x − 2) / √(6 − 2x) ?",
                "options": [
                    "Dg = ]−∞ ; 3[",
                    "Dg = ]−∞ ; 3]",
                    "Dg = ]3 ; +∞[",
                    "Dg = ℝ \\ {3}"
                ],
                "correctAnswerIndex": 0,
                "explanation": "6 − 2x > 0 ⇔ −2x > −6 ⇔ x < 3. Dg = ]−∞ ; 3[."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p5_ex3",
                "type": "mcq",
                "prompt": "Soit h(x) = √(x + 4) / (x − 2). Quelles sont les deux conditions à réunir ?",
                "options": [
                    "x + 4 ≥ 0 ET x − 2 ≠ 0, soit Dh = [−4 ; 2[ ∪ ]2 ; +∞[",
                    "x + 4 > 0 ET x − 2 > 0",
                    "x − 2 ≥ 0 uniquement",
                    "x ∈ ℝ sans restriction"
                ],
                "correctAnswerIndex": 0,
                "explanation": "La racine au numérateur exige x + 4 ≥ 0 (x ≥ −4) et le dénominateur exige x ≠ 2. D'où Dh = [−4 ; 2[ ∪ ]2 ; +∞[."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p5_ex4",
                "type": "mcq",
                "prompt": "Quel est l'ensemble de définition de k(x) = 1 / √(x² − 25) ?",
                "options": [
                    "Dk = ]−∞ ; −5[ ∪ ]5 ; +∞[",
                    "Dk = ]−∞ ; −5] ∪ [5 ; +∞[",
                    "Dk = ]−5 ; 5[",
                    "Dk = ℝ \\ {−5 ; 5}"
                ],
                "correctAnswerIndex": 0,
                "explanation": "x² − 25 > 0 ⇔ (x − 5)(x + 5) > 0. Inégalité stricte à l'extérieur des racines : Dk = ]−∞ ; −5[ ∪ ]5 ; +∞[."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p5_ex5",
                "type": "mcq",
                "prompt": "Pourquoi la borne 2 est-elle exclue dans le domaine de f(x) = 1 / √(2x − 4) ?",
                "options": [
                    "Parce que pour x = 2, le dénominateur vaut √(0) = 0, et la division par zéro est impossible dans ℝ",
                    "Parce que 2 est un nombre négatif",
                    "Parce que la racine carrée de 2 n'existe pas",
                    "Par convention sans justification"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Pour x = 2, le dénominateur s'annule, ce qui est strictement interdit dans ℝ."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p5_ex6",
                "type": "mcq",
                "prompt": "Soit f(x) = 5 / √(4 − x²). Quel est l'ensemble de définition Df ?",
                "options": [
                    "Df = ]−2 ; 2[",
                    "Df = [−2 ; 2]",
                    "Df = ]−∞ ; −2[ ∪ ]2 ; +∞[",
                    "Df = ℝ \\ {−2 ; 2}"
                ],
                "correctAnswerIndex": 0,
                "explanation": "4 − x² > 0 ⇔ (2 − x)(2 + x) > 0. Le coefficient de x² étant négatif, l'inégalité stricte est vérifiée à l'intérieur des racines : Df = ]−2 ; 2[."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p5_ex7",
                "type": "mcq",
                "prompt": "Soit g(x) = √(2x + 6) / √(x − 1). Quel est l'ensemble de définition Dg ?",
                "options": [
                    "Dg = ]1 ; +∞[",
                    "Dg = [−3 ; +∞[",
                    "Dg = [−3 ; 1[ ∪ ]1 ; +∞[",
                    "Dg = [1 ; +∞["
                ],
                "correctAnswerIndex": 0,
                "explanation": "2x + 6 ≥ 0 (x ≥ −3) et x − 1 > 0 (x > 1). L'intersection de [−3 ; +∞[ et ]1 ; +∞[ donne Dg = ]1 ; +∞[."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p5_ex8",
                "type": "mcq",
                "prompt": "Quel est l'ensemble de définition de h(x) = (x² + 1) / √(x² + 1) ?",
                "options": [
                    "Dh = ℝ",
                    "Dh = ℝ \\ {−1 ; 1}",
                    "Dh = ]0 ; +∞[",
                    "Dh = ∅"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Pour tout x ∈ ℝ, x² + 1 ≥ 1 > 0. L'expression sous la racine au dénominateur est toujours strictement positive, donc Dh = ℝ."
            }
        ],
        "formulas": [
            {
                "name": "Radical au dénominateur",
                "formula": "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) > 0\\}",
                "note": "Inégalité stricte : la borne qui annule le dénominateur est rigoureusement exclue (crochet ouvert)."
            }
        ],
        "structuredSteps": [
            {
                "stepNumber": 1,
                "stepBadge": "Étape 1/8 · Quel est l'ensemble de définition de la fonction f(x) =...",
                "stepTheme": "Quel est l'ensemble de définition de la fonction f(x) =...",
                "stepTitle": "Quel est l'ensemble de définition de la fonction f(x) =...",
                "paragraphText": "Notion fondamentale :\n• La racine est au dénominateur, donc x − 3 > 0 ⇔ x > 3. Df = ]3 ; +∞[ (crochet ouvert en 3).\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Radical au dénominateur",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) > 0\\}",
                    "note": "Inégalité stricte : la borne qui annule le dénominateur est rigoureusement exclue (crochet ouvert)."
                },
                "konanTip": "L'Astuce du Professeur Konan : La racine est au dénominateur, donc x − 3 > 0 ⇔ x > 3 !",
                "keyRule": "Quand la racine est au dénominateur, la condition devient STRICTEMENT SUPÉRIEURE À ZÉRO : Q(x) > 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p5_ex1",
                    "type": "mcq",
                    "prompt": "Quel est l'ensemble de définition de la fonction f(x) = 1 / √(x − 3) ?",
                    "options": [
                        "Df = ]3 ; +∞[",
                        "Df = [3 ; +∞[",
                        "Df = ℝ \\ {3}",
                        "Df = ]−∞ ; 3["
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "La racine est au dénominateur, donc x − 3 > 0 ⇔ x > 3. Df = ]3 ; +∞[ (crochet ouvert en 3)."
                }
            },
            {
                "stepNumber": 2,
                "stepBadge": "Étape 2/8 · Quel est l'ensemble de définition de g(x) = (3x − 2) / ...",
                "stepTheme": "Quel est l'ensemble de définition de g(x) = (3x − 2) / ...",
                "stepTitle": "Quel est l'ensemble de définition de g(x) = (3x − 2) / ...",
                "paragraphText": "Notion fondamentale :\n• 6 − 2x > 0 ⇔ −2x > −6 ⇔ x < 3. Dg = ]−∞ ; 3[.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Radical au dénominateur",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) > 0\\}",
                    "note": "Inégalité stricte : la borne qui annule le dénominateur est rigoureusement exclue (crochet ouvert)."
                },
                "konanTip": "L'Astuce du Professeur Konan : 6 − 2x > 0 ⇔ −2x > −6 ⇔ x < 3 !",
                "keyRule": "Quand la racine est au dénominateur, la condition devient STRICTEMENT SUPÉRIEURE À ZÉRO : Q(x) > 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p5_ex2",
                    "type": "mcq",
                    "prompt": "Quel est l'ensemble de définition de g(x) = (3x − 2) / √(6 − 2x) ?",
                    "options": [
                        "Dg = ]−∞ ; 3[",
                        "Dg = ]−∞ ; 3]",
                        "Dg = ]3 ; +∞[",
                        "Dg = ℝ \\ {3}"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "6 − 2x > 0 ⇔ −2x > −6 ⇔ x < 3. Dg = ]−∞ ; 3[."
                }
            },
            {
                "stepNumber": 3,
                "stepBadge": "Étape 3/8 · Soit h(x) = √(x + 4) / (x − 2). Quelles sont les deux c...",
                "stepTheme": "Soit h(x) = √(x + 4) / (x − 2). Quelles sont les deux c...",
                "stepTitle": "Soit h(x) = √(x + 4) / (x − 2). Quelles sont les deux c...",
                "paragraphText": "Notion fondamentale :\n• La racine au numérateur exige x + 4 ≥ 0 (x ≥ −4) et le dénominateur exige x ≠ 2. D'où Dh = [−4 ; 2[ ∪ ]2 ; +∞[.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Radical au dénominateur",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) > 0\\}",
                    "note": "Inégalité stricte : la borne qui annule le dénominateur est rigoureusement exclue (crochet ouvert)."
                },
                "konanTip": "L'Astuce du Professeur Konan : La racine au numérateur exige x + 4 ≥ 0 (x ≥ −4) et le dénominateur exige x ≠ 2 !",
                "keyRule": "Quand la racine est au dénominateur, la condition devient STRICTEMENT SUPÉRIEURE À ZÉRO : Q(x) > 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p5_ex3",
                    "type": "mcq",
                    "prompt": "Soit h(x) = √(x + 4) / (x − 2). Quelles sont les deux conditions à réunir ?",
                    "options": [
                        "x + 4 ≥ 0 ET x − 2 ≠ 0, soit Dh = [−4 ; 2[ ∪ ]2 ; +∞[",
                        "x + 4 > 0 ET x − 2 > 0",
                        "x − 2 ≥ 0 uniquement",
                        "x ∈ ℝ sans restriction"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "La racine au numérateur exige x + 4 ≥ 0 (x ≥ −4) et le dénominateur exige x ≠ 2. D'où Dh = [−4 ; 2[ ∪ ]2 ; +∞[."
                }
            },
            {
                "stepNumber": 4,
                "stepBadge": "Étape 4/8 · Quel est l'ensemble de définition de k(x) = 1 / √(x² − ...",
                "stepTheme": "Quel est l'ensemble de définition de k(x) = 1 / √(x² − ...",
                "stepTitle": "Quel est l'ensemble de définition de k(x) = 1 / √(x² − ...",
                "paragraphText": "Notion fondamentale :\n• x² − 25 > 0 ⇔ (x − 5)(x + 5) > 0. Inégalité stricte à l'extérieur des racines : Dk = ]−∞ ; −5[ ∪ ]5 ; +∞[.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Radical au dénominateur",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) > 0\\}",
                    "note": "Inégalité stricte : la borne qui annule le dénominateur est rigoureusement exclue (crochet ouvert)."
                },
                "konanTip": "L'Astuce du Professeur Konan : x² − 25 > 0 ⇔ (x − 5)(x + 5) > 0 !",
                "keyRule": "Quand la racine est au dénominateur, la condition devient STRICTEMENT SUPÉRIEURE À ZÉRO : Q(x) > 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p5_ex4",
                    "type": "mcq",
                    "prompt": "Quel est l'ensemble de définition de k(x) = 1 / √(x² − 25) ?",
                    "options": [
                        "Dk = ]−∞ ; −5[ ∪ ]5 ; +∞[",
                        "Dk = ]−∞ ; −5] ∪ [5 ; +∞[",
                        "Dk = ]−5 ; 5[",
                        "Dk = ℝ \\ {−5 ; 5}"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "x² − 25 > 0 ⇔ (x − 5)(x + 5) > 0. Inégalité stricte à l'extérieur des racines : Dk = ]−∞ ; −5[ ∪ ]5 ; +∞[."
                }
            },
            {
                "stepNumber": 5,
                "stepBadge": "Étape 5/8 · Pourquoi la borne 2 est-elle exclue dans le domaine de ...",
                "stepTheme": "Pourquoi la borne 2 est-elle exclue dans le domaine de ...",
                "stepTitle": "Pourquoi la borne 2 est-elle exclue dans le domaine de ...",
                "paragraphText": "Notion fondamentale :\n• Pour x = 2, le dénominateur s'annule, ce qui est strictement interdit dans ℝ.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Radical au dénominateur",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) > 0\\}",
                    "note": "Inégalité stricte : la borne qui annule le dénominateur est rigoureusement exclue (crochet ouvert)."
                },
                "konanTip": "L'Astuce du Professeur Konan : Pour x = 2, le dénominateur s'annule, ce qui est strictement interdit dans ℝ !",
                "keyRule": "Quand la racine est au dénominateur, la condition devient STRICTEMENT SUPÉRIEURE À ZÉRO : Q(x) > 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p5_ex5",
                    "type": "mcq",
                    "prompt": "Pourquoi la borne 2 est-elle exclue dans le domaine de f(x) = 1 / √(2x − 4) ?",
                    "options": [
                        "Parce que pour x = 2, le dénominateur vaut √(0) = 0, et la division par zéro est impossible dans ℝ",
                        "Parce que 2 est un nombre négatif",
                        "Parce que la racine carrée de 2 n'existe pas",
                        "Par convention sans justification"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Pour x = 2, le dénominateur s'annule, ce qui est strictement interdit dans ℝ."
                }
            },
            {
                "stepNumber": 6,
                "stepBadge": "Étape 6/8 · Soit f(x) = 5 / √(4 − x²). Quel est l'ensemble de défin...",
                "stepTheme": "Soit f(x) = 5 / √(4 − x²). Quel est l'ensemble de défin...",
                "stepTitle": "Soit f(x) = 5 / √(4 − x²). Quel est l'ensemble de défin...",
                "paragraphText": "Notion fondamentale :\n• 4 − x² > 0 ⇔ (2 − x)(2 + x) > 0. Le coefficient de x² étant négatif, l'inégalité stricte est vérifiée à l'intérieur des racines : Df = ]−2 ; 2[.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Radical au dénominateur",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) > 0\\}",
                    "note": "Inégalité stricte : la borne qui annule le dénominateur est rigoureusement exclue (crochet ouvert)."
                },
                "konanTip": "L'Astuce du Professeur Konan : 4 − x² > 0 ⇔ (2 − x)(2 + x) > 0 !",
                "keyRule": "Quand la racine est au dénominateur, la condition devient STRICTEMENT SUPÉRIEURE À ZÉRO : Q(x) > 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p5_ex6",
                    "type": "mcq",
                    "prompt": "Soit f(x) = 5 / √(4 − x²). Quel est l'ensemble de définition Df ?",
                    "options": [
                        "Df = ]−2 ; 2[",
                        "Df = [−2 ; 2]",
                        "Df = ]−∞ ; −2[ ∪ ]2 ; +∞[",
                        "Df = ℝ \\ {−2 ; 2}"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "4 − x² > 0 ⇔ (2 − x)(2 + x) > 0. Le coefficient de x² étant négatif, l'inégalité stricte est vérifiée à l'intérieur des racines : Df = ]−2 ; 2[."
                }
            },
            {
                "stepNumber": 7,
                "stepBadge": "Étape 7/8 · Soit g(x) = √(2x + 6) / √(x − 1). Quel est l'ensemble d...",
                "stepTheme": "Soit g(x) = √(2x + 6) / √(x − 1). Quel est l'ensemble d...",
                "stepTitle": "Soit g(x) = √(2x + 6) / √(x − 1). Quel est l'ensemble d...",
                "paragraphText": "Notion fondamentale :\n• 2x + 6 ≥ 0 (x ≥ −3) et x − 1 > 0 (x > 1). L'intersection de [−3 ; +∞[ et ]1 ; +∞[ donne Dg = ]1 ; +∞[.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Radical au dénominateur",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) > 0\\}",
                    "note": "Inégalité stricte : la borne qui annule le dénominateur est rigoureusement exclue (crochet ouvert)."
                },
                "konanTip": "L'Astuce du Professeur Konan : 2x + 6 ≥ 0 (x ≥ −3) et x − 1 > 0 (x > 1) !",
                "keyRule": "Quand la racine est au dénominateur, la condition devient STRICTEMENT SUPÉRIEURE À ZÉRO : Q(x) > 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p5_ex7",
                    "type": "mcq",
                    "prompt": "Soit g(x) = √(2x + 6) / √(x − 1). Quel est l'ensemble de définition Dg ?",
                    "options": [
                        "Dg = ]1 ; +∞[",
                        "Dg = [−3 ; +∞[",
                        "Dg = [−3 ; 1[ ∪ ]1 ; +∞[",
                        "Dg = [1 ; +∞["
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "2x + 6 ≥ 0 (x ≥ −3) et x − 1 > 0 (x > 1). L'intersection de [−3 ; +∞[ et ]1 ; +∞[ donne Dg = ]1 ; +∞[."
                }
            },
            {
                "stepNumber": 8,
                "stepBadge": "Étape 8/8 · Quel est l'ensemble de définition de h(x) = (x² + 1) / ...",
                "stepTheme": "Quel est l'ensemble de définition de h(x) = (x² + 1) / ...",
                "stepTitle": "Quel est l'ensemble de définition de h(x) = (x² + 1) / ...",
                "paragraphText": "Notion fondamentale :\n• Pour tout x ∈ ℝ, x² + 1 ≥ 1 > 0. L'expression sous la racine au dénominateur est toujours strictement positive, donc Dh = ℝ.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Radical au dénominateur",
                    "formula": "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) > 0\\}",
                    "note": "Inégalité stricte : la borne qui annule le dénominateur est rigoureusement exclue (crochet ouvert)."
                },
                "konanTip": "L'Astuce du Professeur Konan : Pour tout x ∈ ℝ, x² + 1 ≥ 1 > 0 !",
                "keyRule": "Quand la racine est au dénominateur, la condition devient STRICTEMENT SUPÉRIEURE À ZÉRO : Q(x) > 0 !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p5_ex8",
                    "type": "mcq",
                    "prompt": "Quel est l'ensemble de définition de h(x) = (x² + 1) / √(x² + 1) ?",
                    "options": [
                        "Dh = ℝ",
                        "Dh = ℝ \\ {−1 ; 1}",
                        "Dh = ]0 ; +∞[",
                        "Dh = ∅"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Pour tout x ∈ ℝ, x² + 1 ≥ 1 > 0. L'expression sous la racine au dénominateur est toujours strictement positive, donc Dh = ℝ."
                }
            }
        ]
    },
    {
        "id": "seconde_c_maths_numerique_ch1_p6_calcul_algebrique_images",
        "order": 6,
        "title": "Calcul algébrique d'images et priorités opératoires",
        "summary": "Évaluation numérique de f(a), substitution rigoureuse, gestion des signes et parenthèses pour les négatifs.",
        "conceptExplanation": "L'image d'un réel a par f se calcule en substituant chaque occurrence de x par a dans l'expression f(x).\n• Priorité opératoire : Les puissances sont prioritaires sur les multiplications, elles-mêmes prioritaires sur les additions.\n• Gestion des négatifs : Toujours placer des parenthèses autour du nombre négatif substitué : (−3)² = 9, alors que −3² = −9.\n• Règle de simplification : Mettre les fractions sous forme irréductible et simplifier les radicaux (ex : √72 = 6√2).",
        "keyRule": "Quand tu remplaces x par un nombre négatif, entoure-le toujours de parenthèses : (−a)² = +a² !",
        "formula": {
            "name": "Substitution algébrique d'image",
            "formula": "y = f(a) \\quad \\text{en remplaçant } x \\text{ par } a",
            "note": "Attention aux puissances de relatifs : (−x)² est strictement positif pour x non nul."
        },
        "workedExample": {
            "title": "Application guidée : Calcul d'image avec parenthèses",
            "statement": "Soit f(x) = 2x² − 5x + 3. Calcule l'image de −2 et l'image de 1/2 par f.",
            "methodSteps": [
                "1. Calcul de f(−2) : f(−2) = 2(−2)² − 5(−2) + 3 = 2(4) + 10 + 3 = 8 + 10 + 3 = 21.",
                "2. Calcul de f(1/2) : f(1/2) = 2(1/2)² − 5(1/2) + 3 = 2(1/4) − 5/2 + 3 = 1/2 − 5/2 + 3 = −4/2 + 3 = −2 + 3 = 1.",
                "3. Conclusion : f(−2) = 21 et f(1/2) = 1."
            ],
            "conclusion": "L'image de −2 est 21 et l'image de 1/2 est 1."
        },
        "exercises": [
            {
                "id": "seconde_c_maths_numerique_ch1_p6_ex1",
                "type": "mcq",
                "prompt": "Soit f(x) = 3x² − 4x + 1. Quelle est l'image de −3 par f ?",
                "options": [
                    "40",
                    "16",
                    "−14",
                    "−38"
                ],
                "correctAnswerIndex": 0,
                "explanation": "f(−3) = 3(−3)² − 4(−3) + 1 = 3(9) + 12 + 1 = 27 + 12 + 1 = 40."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p6_ex2",
                "type": "mcq",
                "prompt": "Soit g(x) = (2x − 1) / (x + 3). Quelle est l'image de −1 par g ?",
                "options": [
                    "−3/2",
                    "3/2",
                    "−1",
                    "1/2"
                ],
                "correctAnswerIndex": 0,
                "explanation": "g(−1) = (2(−1) − 1) / (−1 + 3) = (−2 − 1) / 2 = −3/2."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p6_ex3",
                "type": "mcq",
                "prompt": "Soit h(x) = x³ − 2x² + 5. Quelle est l'image de 2 par h ?",
                "options": [
                    "5",
                    "13",
                    "0",
                    "9"
                ],
                "correctAnswerIndex": 0,
                "explanation": "h(2) = (2)³ − 2(2)² + 5 = 8 − 8 + 5 = 5."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p6_ex4",
                "type": "mcq",
                "prompt": "Soit f(x) = √(2x + 9). Quelle est l'image de 8 par f ?",
                "options": [
                    "5",
                    "√25",
                    "17",
                    "7"
                ],
                "correctAnswerIndex": 0,
                "explanation": "f(8) = √(2(8) + 9) = √(16 + 9) = √25 = 5."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p6_ex5",
                "type": "mcq",
                "prompt": "Quelle erreur fréquente commettent les élèves lors du calcul de f(−4) pour f(x) = x² ?",
                "options": [
                    "Écrire −4² = −16 au lieu de (−4)² = 16",
                    "Calculer −4 × 2 = −8",
                    "Inverser l'ordre des termes",
                    "Oublier d'additionner 1"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Remplacer x par −4 exige (−4)² = (−4) × (−4) = +16, alors que la calculatrice sans parenthèses donne −4² = −16."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p6_ex6",
                "type": "mcq",
                "prompt": "Soit k(x) = (3x − 6) / (2x + 4). Quelle est l'image de 2 par k ?",
                "options": [
                    "0",
                    "1",
                    "6/8",
                    "Indéfinie"
                ],
                "correctAnswerIndex": 0,
                "explanation": "k(2) = (3(2) − 6) / (2(2) + 4) = (6 − 6) / 8 = 0 / 8 = 0."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p6_ex7",
                "type": "mcq",
                "prompt": "Soit f(x) = −2x² + 3x − 7. Quelle est l'image de 0 par f ?",
                "options": [
                    "−7",
                    "0",
                    "−6",
                    "3"
                ],
                "correctAnswerIndex": 0,
                "explanation": "f(0) = −2(0)² + 3(0) − 7 = −7 (le terme constant du polynôme)."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p6_ex8",
                "type": "mcq",
                "prompt": "Soit g(x) = (x + 1)² − (x − 1)². Quelle est l'image de 5 par g ?",
                "options": [
                    "20",
                    "24",
                    "16",
                    "36"
                ],
                "correctAnswerIndex": 0,
                "explanation": "g(x) = (x² + 2x + 1) − (x² − 2x + 1) = 4x. Donc g(5) = 4(5) = 20."
            }
        ],
        "formulas": [
            {
                "name": "Substitution algébrique d'image",
                "formula": "y = f(a) \\quad \\text{en remplaçant } x \\text{ par } a",
                "note": "Attention aux puissances de relatifs : (−x)² est strictement positif pour x non nul."
            }
        ],
        "structuredSteps": [
            {
                "stepNumber": 1,
                "stepBadge": "Étape 1/8 · Soit f(x) = 3x² − 4x + 1. Quelle est l'image de −3 par ...",
                "stepTheme": "Soit f(x) = 3x² − 4x + 1. Quelle est l'image de −3 par ...",
                "stepTitle": "Soit f(x) = 3x² − 4x + 1. Quelle est l'image de −3 par ...",
                "paragraphText": "Notion fondamentale :\n• f(−3) = 3(−3)² − 4(−3) + 1 = 3(9) + 12 + 1 = 27 + 12 + 1 = 40.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Substitution algébrique d'image",
                    "formula": "y = f(a) \\quad \\text{en remplaçant } x \\text{ par } a",
                    "note": "Attention aux puissances de relatifs : (−x)² est strictement positif pour x non nul."
                },
                "konanTip": "L'Astuce du Professeur Konan : f(−3) = 3(−3)² − 4(−3) + 1 = 3(9) + 12 + 1 = 27 + 12 + 1 = 40 !",
                "keyRule": "Quand tu remplaces x par un nombre négatif, entoure-le toujours de parenthèses : (−a)² = +a² !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p6_ex1",
                    "type": "mcq",
                    "prompt": "Soit f(x) = 3x² − 4x + 1. Quelle est l'image de −3 par f ?",
                    "options": [
                        "40",
                        "16",
                        "−14",
                        "−38"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "f(−3) = 3(−3)² − 4(−3) + 1 = 3(9) + 12 + 1 = 27 + 12 + 1 = 40."
                }
            },
            {
                "stepNumber": 2,
                "stepBadge": "Étape 2/8 · Soit g(x) = (2x − 1) / (x + 3). Quelle est l'image de −...",
                "stepTheme": "Soit g(x) = (2x − 1) / (x + 3). Quelle est l'image de −...",
                "stepTitle": "Soit g(x) = (2x − 1) / (x + 3). Quelle est l'image de −...",
                "paragraphText": "Notion fondamentale :\n• g(−1) = (2(−1) − 1) / (−1 + 3) = (−2 − 1) / 2 = −3/2.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Substitution algébrique d'image",
                    "formula": "y = f(a) \\quad \\text{en remplaçant } x \\text{ par } a",
                    "note": "Attention aux puissances de relatifs : (−x)² est strictement positif pour x non nul."
                },
                "konanTip": "L'Astuce du Professeur Konan : g(−1) = (2(−1) − 1) / (−1 + 3) = (−2 − 1) / 2 = −3/2 !",
                "keyRule": "Quand tu remplaces x par un nombre négatif, entoure-le toujours de parenthèses : (−a)² = +a² !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p6_ex2",
                    "type": "mcq",
                    "prompt": "Soit g(x) = (2x − 1) / (x + 3). Quelle est l'image de −1 par g ?",
                    "options": [
                        "−3/2",
                        "3/2",
                        "−1",
                        "1/2"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "g(−1) = (2(−1) − 1) / (−1 + 3) = (−2 − 1) / 2 = −3/2."
                }
            },
            {
                "stepNumber": 3,
                "stepBadge": "Étape 3/8 · Soit h(x) = x³ − 2x² + 5. Quelle est l'image de 2 par h",
                "stepTheme": "Soit h(x) = x³ − 2x² + 5. Quelle est l'image de 2 par h",
                "stepTitle": "Soit h(x) = x³ − 2x² + 5. Quelle est l'image de 2 par h",
                "paragraphText": "Notion fondamentale :\n• h(2) = (2)³ − 2(2)² + 5 = 8 − 8 + 5 = 5.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Substitution algébrique d'image",
                    "formula": "y = f(a) \\quad \\text{en remplaçant } x \\text{ par } a",
                    "note": "Attention aux puissances de relatifs : (−x)² est strictement positif pour x non nul."
                },
                "konanTip": "L'Astuce du Professeur Konan : h(2) = (2)³ − 2(2)² + 5 = 8 − 8 + 5 = 5 !",
                "keyRule": "Quand tu remplaces x par un nombre négatif, entoure-le toujours de parenthèses : (−a)² = +a² !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p6_ex3",
                    "type": "mcq",
                    "prompt": "Soit h(x) = x³ − 2x² + 5. Quelle est l'image de 2 par h ?",
                    "options": [
                        "5",
                        "13",
                        "0",
                        "9"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "h(2) = (2)³ − 2(2)² + 5 = 8 − 8 + 5 = 5."
                }
            },
            {
                "stepNumber": 4,
                "stepBadge": "Étape 4/8 · Soit f(x) = √(2x + 9). Quelle est l'image de 8 par f",
                "stepTheme": "Soit f(x) = √(2x + 9). Quelle est l'image de 8 par f",
                "stepTitle": "Soit f(x) = √(2x + 9). Quelle est l'image de 8 par f",
                "paragraphText": "Notion fondamentale :\n• f(8) = √(2(8) + 9) = √(16 + 9) = √25 = 5.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Substitution algébrique d'image",
                    "formula": "y = f(a) \\quad \\text{en remplaçant } x \\text{ par } a",
                    "note": "Attention aux puissances de relatifs : (−x)² est strictement positif pour x non nul."
                },
                "konanTip": "L'Astuce du Professeur Konan : f(8) = √(2(8) + 9) = √(16 + 9) = √25 = 5 !",
                "keyRule": "Quand tu remplaces x par un nombre négatif, entoure-le toujours de parenthèses : (−a)² = +a² !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p6_ex4",
                    "type": "mcq",
                    "prompt": "Soit f(x) = √(2x + 9). Quelle est l'image de 8 par f ?",
                    "options": [
                        "5",
                        "√25",
                        "17",
                        "7"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "f(8) = √(2(8) + 9) = √(16 + 9) = √25 = 5."
                }
            },
            {
                "stepNumber": 5,
                "stepBadge": "Étape 5/8 · Quelle erreur fréquente commettent les élèves lors du c...",
                "stepTheme": "Quelle erreur fréquente commettent les élèves lors du c...",
                "stepTitle": "Quelle erreur fréquente commettent les élèves lors du c...",
                "paragraphText": "Notion fondamentale :\n• Remplacer x par −4 exige (−4)² = (−4) × (−4) = +16, alors que la calculatrice sans parenthèses donne −4² = −16.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Substitution algébrique d'image",
                    "formula": "y = f(a) \\quad \\text{en remplaçant } x \\text{ par } a",
                    "note": "Attention aux puissances de relatifs : (−x)² est strictement positif pour x non nul."
                },
                "konanTip": "L'Astuce du Professeur Konan : Remplacer x par −4 exige (−4)² = (−4) × (−4) = +16, alors que la calculatrice sans parenthèses donne −4² = −16 !",
                "keyRule": "Quand tu remplaces x par un nombre négatif, entoure-le toujours de parenthèses : (−a)² = +a² !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p6_ex5",
                    "type": "mcq",
                    "prompt": "Quelle erreur fréquente commettent les élèves lors du calcul de f(−4) pour f(x) = x² ?",
                    "options": [
                        "Écrire −4² = −16 au lieu de (−4)² = 16",
                        "Calculer −4 × 2 = −8",
                        "Inverser l'ordre des termes",
                        "Oublier d'additionner 1"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Remplacer x par −4 exige (−4)² = (−4) × (−4) = +16, alors que la calculatrice sans parenthèses donne −4² = −16."
                }
            },
            {
                "stepNumber": 6,
                "stepBadge": "Étape 6/8 · Soit k(x) = (3x − 6) / (2x + 4). Quelle est l'image de ...",
                "stepTheme": "Soit k(x) = (3x − 6) / (2x + 4). Quelle est l'image de ...",
                "stepTitle": "Soit k(x) = (3x − 6) / (2x + 4). Quelle est l'image de ...",
                "paragraphText": "Notion fondamentale :\n• k(2) = (3(2) − 6) / (2(2) + 4) = (6 − 6) / 8 = 0 / 8 = 0.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Substitution algébrique d'image",
                    "formula": "y = f(a) \\quad \\text{en remplaçant } x \\text{ par } a",
                    "note": "Attention aux puissances de relatifs : (−x)² est strictement positif pour x non nul."
                },
                "konanTip": "L'Astuce du Professeur Konan : k(2) = (3(2) − 6) / (2(2) + 4) = (6 − 6) / 8 = 0 / 8 = 0 !",
                "keyRule": "Quand tu remplaces x par un nombre négatif, entoure-le toujours de parenthèses : (−a)² = +a² !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p6_ex6",
                    "type": "mcq",
                    "prompt": "Soit k(x) = (3x − 6) / (2x + 4). Quelle est l'image de 2 par k ?",
                    "options": [
                        "0",
                        "1",
                        "6/8",
                        "Indéfinie"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "k(2) = (3(2) − 6) / (2(2) + 4) = (6 − 6) / 8 = 0 / 8 = 0."
                }
            },
            {
                "stepNumber": 7,
                "stepBadge": "Étape 7/8 · Soit f(x) = −2x² + 3x − 7. Quelle est l'image de 0 par ...",
                "stepTheme": "Soit f(x) = −2x² + 3x − 7. Quelle est l'image de 0 par ...",
                "stepTitle": "Soit f(x) = −2x² + 3x − 7. Quelle est l'image de 0 par ...",
                "paragraphText": "Notion fondamentale :\n• f(0) = −2(0)² + 3(0) − 7 = −7 (le terme constant du polynôme).\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Substitution algébrique d'image",
                    "formula": "y = f(a) \\quad \\text{en remplaçant } x \\text{ par } a",
                    "note": "Attention aux puissances de relatifs : (−x)² est strictement positif pour x non nul."
                },
                "konanTip": "L'Astuce du Professeur Konan : f(0) = −2(0)² + 3(0) − 7 = −7 (le terme constant du polynôme) !",
                "keyRule": "Quand tu remplaces x par un nombre négatif, entoure-le toujours de parenthèses : (−a)² = +a² !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p6_ex7",
                    "type": "mcq",
                    "prompt": "Soit f(x) = −2x² + 3x − 7. Quelle est l'image de 0 par f ?",
                    "options": [
                        "−7",
                        "0",
                        "−6",
                        "3"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "f(0) = −2(0)² + 3(0) − 7 = −7 (le terme constant du polynôme)."
                }
            },
            {
                "stepNumber": 8,
                "stepBadge": "Étape 8/8 · Soit g(x) = (x + 1)² − (x − 1)². Quelle est l'image de ...",
                "stepTheme": "Soit g(x) = (x + 1)² − (x − 1)². Quelle est l'image de ...",
                "stepTitle": "Soit g(x) = (x + 1)² − (x − 1)². Quelle est l'image de ...",
                "paragraphText": "Notion fondamentale :\n• g(x) = (x² + 2x + 1) − (x² − 2x + 1) = 4x. Donc g(5) = 4(5) = 20.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Substitution algébrique d'image",
                    "formula": "y = f(a) \\quad \\text{en remplaçant } x \\text{ par } a",
                    "note": "Attention aux puissances de relatifs : (−x)² est strictement positif pour x non nul."
                },
                "konanTip": "L'Astuce du Professeur Konan : g(x) = (x² + 2x + 1) − (x² − 2x + 1) = 4x !",
                "keyRule": "Quand tu remplaces x par un nombre négatif, entoure-le toujours de parenthèses : (−a)² = +a² !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p6_ex8",
                    "type": "mcq",
                    "prompt": "Soit g(x) = (x + 1)² − (x − 1)². Quelle est l'image de 5 par g ?",
                    "options": [
                        "20",
                        "24",
                        "16",
                        "36"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "g(x) = (x² + 2x + 1) − (x² − 2x + 1) = 4x. Donc g(5) = 4(5) = 20."
                }
            }
        ]
    },
    {
        "id": "seconde_c_maths_numerique_ch1_p7_recherche_algebrique_antecedents",
        "order": 7,
        "title": "Recherche algébrique des antécédents",
        "summary": "Résolution rigoureuse de l'équation f(x) = b dans le domaine Df et vérification des solutions.",
        "conceptExplanation": "Pour trouver les antécédents d'un réel b par f, on pose l'équation f(x) = b d'inconnue x.\n• Domaine d'admissibilité : Seules les solutions appartenant effectivement à l'ensemble de définition Df sont retenues comme antécédents.\n• Nombre d'antécédents : Une équation peut admettre 0 solution (aucun antécédent), 1 solution unique ou plusieurs solutions distinctes.\n• Cas des carrés : x² = k avec k > 0 admet TOUJOURS deux antécédents opposés : x = √k et x = −√k.",
        "keyRule": "Chercher les antécédents de b revient à résoudre l'équation f(x) = b dans Df !",
        "formula": {
            "name": "Équation aux antécédents",
            "formula": "f(x) = b \\quad (x \\in D_f)",
            "note": "Toute solution trouvée hors de Df doit être obligatoirement rejetée."
        },
        "workedExample": {
            "title": "Application guidée : Résolution d'équation aux antécédents",
            "statement": "Soit f(x) = (2x − 6) / (x + 1) définie sur ℝ \\ {−1}. Détermine les antécédents de 1 par f.",
            "methodSteps": [
                "1. Poser l'équation pour x ≠ −1 : f(x) = 1 ⇔ (2x − 6) / (x + 1) = 1.",
                "2. Produit en croix : 2x − 6 = 1(x + 1) ⇔ 2x − x = 1 + 6 ⇔ x = 7.",
                "3. Vérifier l'admissibilité : 7 ≠ −1, donc 7 ∈ Df. L'unique antécédent de 1 par f est 7."
            ],
            "conclusion": "1 admet pour unique antécédent par f le réel 7."
        },
        "exercises": [
            {
                "id": "seconde_c_maths_numerique_ch1_p7_ex1",
                "type": "mcq",
                "prompt": "Soit f(x) = 4x − 11. Quel est l'antécédent de 9 par f ?",
                "options": [
                    "5",
                    "−5",
                    "20",
                    "2"
                ],
                "correctAnswerIndex": 0,
                "explanation": "4x − 11 = 9 ⇔ 4x = 20 ⇔ x = 5."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p7_ex2",
                "type": "mcq",
                "prompt": "Soit g(x) = 2x² − 18. Quels sont les antécédents de 0 par g dans ℝ ?",
                "options": [
                    "−3 et 3",
                    "3 uniquement",
                    "0 et 9",
                    "−9 et 9"
                ],
                "correctAnswerIndex": 0,
                "explanation": "2x² − 18 = 0 ⇔ 2x² = 18 ⇔ x² = 9 ⇔ x = −3 ou x = 3."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p7_ex3",
                "type": "mcq",
                "prompt": "Soit h(x) = (3x + 2) / (x − 4) définie sur ℝ \\ {4}. Quel est l'antécédent de 2 par h ?",
                "options": [
                    "−10",
                    "10",
                    "−6",
                    "6"
                ],
                "correctAnswerIndex": 0,
                "explanation": "(3x + 2) / (x − 4) = 2 ⇔ 3x + 2 = 2(x − 4) = 2x − 8 ⇔ x = −10. Comme −10 ≠ 4, −10 est l'unique antécédent."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p7_ex4",
                "type": "mcq",
                "prompt": "Soit f(x) = x² + 7. Combien d'antécédents réels le nombre 3 admet-il par f ?",
                "options": [
                    "0 (aucun antécédent réel)",
                    "1",
                    "2",
                    "4"
                ],
                "correctAnswerIndex": 0,
                "explanation": "x² + 7 = 3 ⇔ x² = −4. Impossible dans ℝ, donc aucun antécédent."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p7_ex5",
                "type": "mcq",
                "prompt": "Soit k(x) = √(2x + 1). Quel est l'antécédent de 5 par k ?",
                "options": [
                    "12",
                    "2",
                    "24",
                    "10"
                ],
                "correctAnswerIndex": 0,
                "explanation": "√(2x + 1) = 5 ⇔ 2x + 1 = 25 ⇔ 2x = 24 ⇔ x = 12."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p7_ex6",
                "type": "mcq",
                "prompt": "Soit f(x) = x² − 6x + 9. Quels sont les antécédents de 0 par f ?",
                "options": [
                    "3 uniquement",
                    "−3 et 3",
                    "0 et 9",
                    "Aucun"
                ],
                "correctAnswerIndex": 0,
                "explanation": "x² − 6x + 9 = (x − 3)² = 0 ⇔ x − 3 = 0 ⇔ x = 3 (solution double unique)."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p7_ex7",
                "type": "mcq",
                "prompt": "Soit g(x) = (x + 2) / (x − 1). Peut-on trouver un antécédent de 1 par g ?",
                "options": [
                    "Non, car l'équation mène à 2 = −1, ce qui est impossible",
                    "Oui, x = 1",
                    "Oui, x = −2",
                    "Oui, x = 0"
                ],
                "correctAnswerIndex": 0,
                "explanation": "(x + 2)/(x − 1) = 1 ⇔ x + 2 = x − 1 ⇔ 2 = −1 (contradiction). 1 n'a donc aucun antécédent par g."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p7_ex8",
                "type": "mcq",
                "prompt": "Soit h(x) = 5x² − 45. Quels sont les antécédents de 80 par h ?",
                "options": [
                    "−5 et 5",
                    "5 uniquement",
                    "−4 et 4",
                    "−25 et 25"
                ],
                "correctAnswerIndex": 0,
                "explanation": "5x² − 45 = 80 ⇔ 5x² = 125 ⇔ x² = 25 ⇔ x = −5 ou x = 5."
            }
        ],
        "formulas": [
            {
                "name": "Équation aux antécédents",
                "formula": "f(x) = b \\quad (x \\in D_f)",
                "note": "Toute solution trouvée hors de Df doit être obligatoirement rejetée."
            }
        ],
        "structuredSteps": [
            {
                "stepNumber": 1,
                "stepBadge": "Étape 1/8 · Soit f(x) = 4x − 11. Quel est l'antécédent de 9 par f",
                "stepTheme": "Soit f(x) = 4x − 11. Quel est l'antécédent de 9 par f",
                "stepTitle": "Soit f(x) = 4x − 11. Quel est l'antécédent de 9 par f",
                "paragraphText": "Notion fondamentale :\n• 4x − 11 = 9 ⇔ 4x = 20 ⇔ x = 5.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Équation aux antécédents",
                    "formula": "f(x) = b \\quad (x \\in D_f)",
                    "note": "Toute solution trouvée hors de Df doit être obligatoirement rejetée."
                },
                "konanTip": "L'Astuce du Professeur Konan : 4x − 11 = 9 ⇔ 4x = 20 ⇔ x = 5 !",
                "keyRule": "Chercher les antécédents de b revient à résoudre l'équation f(x) = b dans Df !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p7_ex1",
                    "type": "mcq",
                    "prompt": "Soit f(x) = 4x − 11. Quel est l'antécédent de 9 par f ?",
                    "options": [
                        "5",
                        "−5",
                        "20",
                        "2"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "4x − 11 = 9 ⇔ 4x = 20 ⇔ x = 5."
                }
            },
            {
                "stepNumber": 2,
                "stepBadge": "Étape 2/8 · Soit g(x) = 2x² − 18. Quels sont les antécédents de 0 p...",
                "stepTheme": "Soit g(x) = 2x² − 18. Quels sont les antécédents de 0 p...",
                "stepTitle": "Soit g(x) = 2x² − 18. Quels sont les antécédents de 0 p...",
                "paragraphText": "Notion fondamentale :\n• 2x² − 18 = 0 ⇔ 2x² = 18 ⇔ x² = 9 ⇔ x = −3 ou x = 3.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Équation aux antécédents",
                    "formula": "f(x) = b \\quad (x \\in D_f)",
                    "note": "Toute solution trouvée hors de Df doit être obligatoirement rejetée."
                },
                "konanTip": "L'Astuce du Professeur Konan : 2x² − 18 = 0 ⇔ 2x² = 18 ⇔ x² = 9 ⇔ x = −3 ou x = 3 !",
                "keyRule": "Chercher les antécédents de b revient à résoudre l'équation f(x) = b dans Df !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p7_ex2",
                    "type": "mcq",
                    "prompt": "Soit g(x) = 2x² − 18. Quels sont les antécédents de 0 par g dans ℝ ?",
                    "options": [
                        "−3 et 3",
                        "3 uniquement",
                        "0 et 9",
                        "−9 et 9"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "2x² − 18 = 0 ⇔ 2x² = 18 ⇔ x² = 9 ⇔ x = −3 ou x = 3."
                }
            },
            {
                "stepNumber": 3,
                "stepBadge": "Étape 3/8 · Soit h(x) = (3x + 2) / (x − 4) définie sur ℝ \\ {4}. Que...",
                "stepTheme": "Soit h(x) = (3x + 2) / (x − 4) définie sur ℝ \\ {4}. Que...",
                "stepTitle": "Soit h(x) = (3x + 2) / (x − 4) définie sur ℝ \\ {4}. Que...",
                "paragraphText": "Notion fondamentale :\n• (3x + 2) / (x − 4) = 2 ⇔ 3x + 2 = 2(x − 4) = 2x − 8 ⇔ x = −10. Comme −10 ≠ 4, −10 est l'unique antécédent.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Équation aux antécédents",
                    "formula": "f(x) = b \\quad (x \\in D_f)",
                    "note": "Toute solution trouvée hors de Df doit être obligatoirement rejetée."
                },
                "konanTip": "L'Astuce du Professeur Konan : (3x + 2) / (x − 4) = 2 ⇔ 3x + 2 = 2(x − 4) = 2x − 8 ⇔ x = −10 !",
                "keyRule": "Chercher les antécédents de b revient à résoudre l'équation f(x) = b dans Df !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p7_ex3",
                    "type": "mcq",
                    "prompt": "Soit h(x) = (3x + 2) / (x − 4) définie sur ℝ \\ {4}. Quel est l'antécédent de 2 par h ?",
                    "options": [
                        "−10",
                        "10",
                        "−6",
                        "6"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "(3x + 2) / (x − 4) = 2 ⇔ 3x + 2 = 2(x − 4) = 2x − 8 ⇔ x = −10. Comme −10 ≠ 4, −10 est l'unique antécédent."
                }
            },
            {
                "stepNumber": 4,
                "stepBadge": "Étape 4/8 · Soit f(x) = x² + 7. Combien d'antécédents réels le nomb...",
                "stepTheme": "Soit f(x) = x² + 7. Combien d'antécédents réels le nomb...",
                "stepTitle": "Soit f(x) = x² + 7. Combien d'antécédents réels le nomb...",
                "paragraphText": "Notion fondamentale :\n• x² + 7 = 3 ⇔ x² = −4. Impossible dans ℝ, donc aucun antécédent.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Équation aux antécédents",
                    "formula": "f(x) = b \\quad (x \\in D_f)",
                    "note": "Toute solution trouvée hors de Df doit être obligatoirement rejetée."
                },
                "konanTip": "L'Astuce du Professeur Konan : x² + 7 = 3 ⇔ x² = −4 !",
                "keyRule": "Chercher les antécédents de b revient à résoudre l'équation f(x) = b dans Df !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p7_ex4",
                    "type": "mcq",
                    "prompt": "Soit f(x) = x² + 7. Combien d'antécédents réels le nombre 3 admet-il par f ?",
                    "options": [
                        "0 (aucun antécédent réel)",
                        "1",
                        "2",
                        "4"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "x² + 7 = 3 ⇔ x² = −4. Impossible dans ℝ, donc aucun antécédent."
                }
            },
            {
                "stepNumber": 5,
                "stepBadge": "Étape 5/8 · Soit k(x) = √(2x + 1). Quel est l'antécédent de 5 par k",
                "stepTheme": "Soit k(x) = √(2x + 1). Quel est l'antécédent de 5 par k",
                "stepTitle": "Soit k(x) = √(2x + 1). Quel est l'antécédent de 5 par k",
                "paragraphText": "Notion fondamentale :\n• √(2x + 1) = 5 ⇔ 2x + 1 = 25 ⇔ 2x = 24 ⇔ x = 12.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Équation aux antécédents",
                    "formula": "f(x) = b \\quad (x \\in D_f)",
                    "note": "Toute solution trouvée hors de Df doit être obligatoirement rejetée."
                },
                "konanTip": "L'Astuce du Professeur Konan : √(2x + 1) = 5 ⇔ 2x + 1 = 25 ⇔ 2x = 24 ⇔ x = 12 !",
                "keyRule": "Chercher les antécédents de b revient à résoudre l'équation f(x) = b dans Df !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p7_ex5",
                    "type": "mcq",
                    "prompt": "Soit k(x) = √(2x + 1). Quel est l'antécédent de 5 par k ?",
                    "options": [
                        "12",
                        "2",
                        "24",
                        "10"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "√(2x + 1) = 5 ⇔ 2x + 1 = 25 ⇔ 2x = 24 ⇔ x = 12."
                }
            },
            {
                "stepNumber": 6,
                "stepBadge": "Étape 6/8 · Soit f(x) = x² − 6x + 9. Quels sont les antécédents de ...",
                "stepTheme": "Soit f(x) = x² − 6x + 9. Quels sont les antécédents de ...",
                "stepTitle": "Soit f(x) = x² − 6x + 9. Quels sont les antécédents de ...",
                "paragraphText": "Notion fondamentale :\n• x² − 6x + 9 = (x − 3)² = 0 ⇔ x − 3 = 0 ⇔ x = 3 (solution double unique).\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Équation aux antécédents",
                    "formula": "f(x) = b \\quad (x \\in D_f)",
                    "note": "Toute solution trouvée hors de Df doit être obligatoirement rejetée."
                },
                "konanTip": "L'Astuce du Professeur Konan : x² − 6x + 9 = (x − 3)² = 0 ⇔ x − 3 = 0 ⇔ x = 3 (solution double unique) !",
                "keyRule": "Chercher les antécédents de b revient à résoudre l'équation f(x) = b dans Df !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p7_ex6",
                    "type": "mcq",
                    "prompt": "Soit f(x) = x² − 6x + 9. Quels sont les antécédents de 0 par f ?",
                    "options": [
                        "3 uniquement",
                        "−3 et 3",
                        "0 et 9",
                        "Aucun"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "x² − 6x + 9 = (x − 3)² = 0 ⇔ x − 3 = 0 ⇔ x = 3 (solution double unique)."
                }
            },
            {
                "stepNumber": 7,
                "stepBadge": "Étape 7/8 · Soit g(x) = (x + 2) / (x − 1). Peut-on trouver un antéc...",
                "stepTheme": "Soit g(x) = (x + 2) / (x − 1). Peut-on trouver un antéc...",
                "stepTitle": "Soit g(x) = (x + 2) / (x − 1). Peut-on trouver un antéc...",
                "paragraphText": "Notion fondamentale :\n• (x + 2)/(x − 1) = 1 ⇔ x + 2 = x − 1 ⇔ 2 = −1 (contradiction). 1 n'a donc aucun antécédent par g.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Équation aux antécédents",
                    "formula": "f(x) = b \\quad (x \\in D_f)",
                    "note": "Toute solution trouvée hors de Df doit être obligatoirement rejetée."
                },
                "konanTip": "L'Astuce du Professeur Konan : (x + 2)/(x − 1) = 1 ⇔ x + 2 = x − 1 ⇔ 2 = −1 (contradiction) !",
                "keyRule": "Chercher les antécédents de b revient à résoudre l'équation f(x) = b dans Df !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p7_ex7",
                    "type": "mcq",
                    "prompt": "Soit g(x) = (x + 2) / (x − 1). Peut-on trouver un antécédent de 1 par g ?",
                    "options": [
                        "Non, car l'équation mène à 2 = −1, ce qui est impossible",
                        "Oui, x = 1",
                        "Oui, x = −2",
                        "Oui, x = 0"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "(x + 2)/(x − 1) = 1 ⇔ x + 2 = x − 1 ⇔ 2 = −1 (contradiction). 1 n'a donc aucun antécédent par g."
                }
            },
            {
                "stepNumber": 8,
                "stepBadge": "Étape 8/8 · Soit h(x) = 5x² − 45. Quels sont les antécédents de 80 ...",
                "stepTheme": "Soit h(x) = 5x² − 45. Quels sont les antécédents de 80 ...",
                "stepTitle": "Soit h(x) = 5x² − 45. Quels sont les antécédents de 80 ...",
                "paragraphText": "Notion fondamentale :\n• 5x² − 45 = 80 ⇔ 5x² = 125 ⇔ x² = 25 ⇔ x = −5 ou x = 5.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Équation aux antécédents",
                    "formula": "f(x) = b \\quad (x \\in D_f)",
                    "note": "Toute solution trouvée hors de Df doit être obligatoirement rejetée."
                },
                "konanTip": "L'Astuce du Professeur Konan : 5x² − 45 = 80 ⇔ 5x² = 125 ⇔ x² = 25 ⇔ x = −5 ou x = 5 !",
                "keyRule": "Chercher les antécédents de b revient à résoudre l'équation f(x) = b dans Df !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p7_ex8",
                    "type": "mcq",
                    "prompt": "Soit h(x) = 5x² − 45. Quels sont les antécédents de 80 par h ?",
                    "options": [
                        "−5 et 5",
                        "5 uniquement",
                        "−4 et 4",
                        "−25 et 25"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "5x² − 45 = 80 ⇔ 5x² = 125 ⇔ x² = 25 ⇔ x = −5 ou x = 5."
                }
            }
        ]
    },
    {
        "id": "seconde_c_maths_numerique_ch1_p8_courbe_droite_verticale",
        "order": 8,
        "title": "Courbe représentative et test de la droite verticale",
        "summary": "Définition de la courbe (Cf) et critère de la droite verticale pour reconnaître graphiquement une fonction.",
        "conceptExplanation": "La courbe représentative (Cf) d'une fonction f dans un repère est l'ensemble des points M(x ; y) tels que x ∈ Df et y = f(x).\n• Test de la droite verticale : Une courbe géométrique représente une fonction si et seulement si toute droite verticale d'équation x = k coupe la courbe en AU PLUS un point.\n• Règle d'exclusion : Si au moins une droite verticale coupe la courbe en deux points ou plus, cette courbe NE REPRÉSENTE PAS une fonction (car une même abscisse x aurait plusieurs images distinctes).",
        "keyRule": "Une droite verticale ne doit JAMAIS couper la courbe en plus d'un point !",
        "formula": {
            "name": "Critère de la droite verticale",
            "formula": "\\forall k \\in \\mathbb{R}, \\quad \\text{Card}((x = k) \\cap (C_f)) \\le 1",
            "note": "Garantit qu'à chaque abscisse x correspond au maximum une seule ordonnée y = f(x)."
        },
        "workedExample": {
            "title": "Application guidée : Application du test graphique",
            "statement": "Un cercle de rayon R centré sur l'origine représente-t-il une fonction y = f(x) ?",
            "methodSteps": [
                "1. Tracer une droite verticale traversant le cercle, par exemple x = 0 (l'axe des ordonnées).",
                "2. Observer les points d'intersection : la droite coupe le cercle en deux points distincts : (0 ; R) et (0 ; −R).",
                "3. Conclure : À l'abscisse x = 0 correspondent deux ordonnées différentes (+R et −R). Le cercle ne représente donc pas une fonction."
            ],
            "conclusion": "Un cercle complet ne représente pas une fonction de ℝ vers ℝ."
        },
        "exercises": [
            {
                "id": "seconde_c_maths_numerique_ch1_p8_ex1",
                "type": "mcq",
                "prompt": "Quel est le critère géométrique pour qu'une courbe représente une fonction ?",
                "options": [
                    "Toute droite verticale coupe la courbe en au plus un point",
                    "Toute droite horizontale coupe la courbe en un point unique",
                    "La courbe doit obligatoirement être continue sans lever le crayon",
                    "La courbe doit passer par le point O(0 ; 0)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Chaque abscisse x ne pouvant avoir qu'au plus une image f(x), une droite verticale x = k rencontre la courbe en 0 ou 1 point."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p8_ex2",
                "type": "mcq",
                "prompt": "Un cercle complet tracé dans un repère orthonormé représente-t-il une fonction ?",
                "options": [
                    "Non, car certaines droites verticales coupent le cercle en deux points distincts",
                    "Oui, c'est la fonction circulaire",
                    "Oui, car le cercle est parfaitement symétrique",
                    "Non, seulement si son rayon est supérieur à 1"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Toute droite verticale passant par l'intérieur du cercle coupe le cercle en deux points (deux ordonnées opposées pour une même abscisse)."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p8_ex3",
                "type": "mcq",
                "prompt": "Une droite verticale d'équation x = 4 représente-t-elle une fonction ?",
                "options": [
                    "Non, car à l'abscisse 4 correspond une infinité d'ordonnées y",
                    "Oui, la fonction constante égale à 4",
                    "Oui, la fonction linéaire",
                    "Non, uniquement si elle ne coupe pas l'axe des abscisses"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Une droite verticale a une seule abscisse associée à une infinité d'images, ce qui viole la définition d'une fonction."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p8_ex4",
                "type": "mcq",
                "prompt": "Une droite horizontale d'équation y = 3 représente-t-elle une fonction ?",
                "options": [
                    "Oui, c'est la fonction constante f(x) = 3",
                    "Non, car toute droite horizontale est interdite",
                    "Oui, mais son domaine est réduit à {3}",
                    "Non, car elle ne coupe jamais l'axe des ordonnées"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Toute droite verticale x = k coupe la droite horizontale y = 3 en exactement un point (k ; 3) : c'est la fonction constante f(x) = 3."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p8_ex5",
                "type": "mcq",
                "prompt": "Soit la courbe d'équation y² = x pour x ≥ 0. Représente-t-elle une fonction y = f(x) ?",
                "options": [
                    "Non, car pour chaque x > 0, il y a deux ordonnées distinctes : y = √x et y = −√x",
                    "Oui, c'est la fonction racine carrée",
                    "Oui, sur l'intervalle [0 ; +∞[",
                    "Non, car x ne peut pas être nul"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Pour x = 4, y² = 4 donne y = 2 et y = −2. La parabole couchée ne représente pas une fonction de ℝ vers ℝ."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p8_ex6",
                "type": "mcq",
                "prompt": "La courbe représentant la fonction racine carrée y = √x (demi-parabole supérieure) est-elle une fonction ?",
                "options": [
                    "Oui, car chaque droite verticale x = k (k ≥ 0) la coupe en un point unique",
                    "Non, car elle s'arrête en 0",
                    "Non, car elle n'est pas définie pour x < 0",
                    "Oui, mais uniquement pour les entiers"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Pour tout x ≥ 0, il y a une seule valeur y = √x ≥ 0. Toute droite verticale coupe la courbe en au plus un point."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p8_ex7",
                "type": "mcq",
                "prompt": "Que représente géométriquement l'ensemble de définition Df sur le graphe de f ?",
                "options": [
                    "La projection orthogonale de la courbe (Cf) sur l'axe des abscisses (Ox)",
                    "La projection orthogonale de la courbe sur l'axe des ordonnées (Oy)",
                    "La pente de la tangente au point d'origine",
                    "L'aire comprise sous la courbe"
                ],
                "correctAnswerIndex": 0,
                "explanation": "L'ensemble de définition Df est l'ensemble de toutes les abscisses x pour lesquelles il existe un point sur la courbe."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p8_ex8",
                "type": "mcq",
                "prompt": "Si une droite verticale x = 2 ne coupe la courbe en aucun point, que cela signifie-t-il ?",
                "options": [
                    "Le réel 2 n'appartient pas à l'ensemble de définition Df (valeur interdite)",
                    "La fonction s'annule en 2",
                    "La fonction est discontinue mais définie en 2",
                    "L'image de 2 est égale à 0"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Si x = 2 ne rencontre pas la courbe, alors f(2) n'existe pas : 2 ∉ Df."
            }
        ],
        "formulas": [
            {
                "name": "Critère de la droite verticale",
                "formula": "\\forall k \\in \\mathbb{R}, \\quad \\text{Card}((x = k) \\cap (C_f)) \\le 1",
                "note": "Garantit qu'à chaque abscisse x correspond au maximum une seule ordonnée y = f(x)."
            }
        ],
        "structuredSteps": [
            {
                "stepNumber": 1,
                "stepBadge": "Étape 1/8 · Quel est le critère géométrique pour qu'une courbe repr...",
                "stepTheme": "Quel est le critère géométrique pour qu'une courbe repr...",
                "stepTitle": "Quel est le critère géométrique pour qu'une courbe repr...",
                "paragraphText": "Notion fondamentale :\n• Chaque abscisse x ne pouvant avoir qu'au plus une image f(x), une droite verticale x = k rencontre la courbe en 0 ou 1 point.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Critère de la droite verticale",
                    "formula": "\\forall k \\in \\mathbb{R}, \\quad \\text{Card}((x = k) \\cap (C_f)) \\le 1",
                    "note": "Garantit qu'à chaque abscisse x correspond au maximum une seule ordonnée y = f(x)."
                },
                "konanTip": "L'Astuce du Professeur Konan : Chaque abscisse x ne pouvant avoir qu'au plus une image f(x), une droite verticale x = k rencontre la courbe en 0 ou 1 point !",
                "keyRule": "Une droite verticale ne doit JAMAIS couper la courbe en plus d'un point !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p8_ex1",
                    "type": "mcq",
                    "prompt": "Quel est le critère géométrique pour qu'une courbe représente une fonction ?",
                    "options": [
                        "Toute droite verticale coupe la courbe en au plus un point",
                        "Toute droite horizontale coupe la courbe en un point unique",
                        "La courbe doit obligatoirement être continue sans lever le crayon",
                        "La courbe doit passer par le point O(0 ; 0)"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Chaque abscisse x ne pouvant avoir qu'au plus une image f(x), une droite verticale x = k rencontre la courbe en 0 ou 1 point."
                }
            },
            {
                "stepNumber": 2,
                "stepBadge": "Étape 2/8 · Un cercle complet tracé dans un repère orthonormé repré...",
                "stepTheme": "Un cercle complet tracé dans un repère orthonormé repré...",
                "stepTitle": "Un cercle complet tracé dans un repère orthonormé repré...",
                "paragraphText": "Notion fondamentale :\n• Toute droite verticale passant par l'intérieur du cercle coupe le cercle en deux points (deux ordonnées opposées pour une même abscisse).\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Critère de la droite verticale",
                    "formula": "\\forall k \\in \\mathbb{R}, \\quad \\text{Card}((x = k) \\cap (C_f)) \\le 1",
                    "note": "Garantit qu'à chaque abscisse x correspond au maximum une seule ordonnée y = f(x)."
                },
                "konanTip": "L'Astuce du Professeur Konan : Toute droite verticale passant par l'intérieur du cercle coupe le cercle en deux points (deux ordonnées opposées pour une même abscisse) !",
                "keyRule": "Une droite verticale ne doit JAMAIS couper la courbe en plus d'un point !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p8_ex2",
                    "type": "mcq",
                    "prompt": "Un cercle complet tracé dans un repère orthonormé représente-t-il une fonction ?",
                    "options": [
                        "Non, car certaines droites verticales coupent le cercle en deux points distincts",
                        "Oui, c'est la fonction circulaire",
                        "Oui, car le cercle est parfaitement symétrique",
                        "Non, seulement si son rayon est supérieur à 1"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Toute droite verticale passant par l'intérieur du cercle coupe le cercle en deux points (deux ordonnées opposées pour une même abscisse)."
                }
            },
            {
                "stepNumber": 3,
                "stepBadge": "Étape 3/8 · Une droite verticale d'équation x = 4 représente-t-elle...",
                "stepTheme": "Une droite verticale d'équation x = 4 représente-t-elle...",
                "stepTitle": "Une droite verticale d'équation x = 4 représente-t-elle...",
                "paragraphText": "Notion fondamentale :\n• Une droite verticale a une seule abscisse associée à une infinité d'images, ce qui viole la définition d'une fonction.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Critère de la droite verticale",
                    "formula": "\\forall k \\in \\mathbb{R}, \\quad \\text{Card}((x = k) \\cap (C_f)) \\le 1",
                    "note": "Garantit qu'à chaque abscisse x correspond au maximum une seule ordonnée y = f(x)."
                },
                "konanTip": "L'Astuce du Professeur Konan : Une droite verticale a une seule abscisse associée à une infinité d'images, ce qui viole la définition d'une fonction !",
                "keyRule": "Une droite verticale ne doit JAMAIS couper la courbe en plus d'un point !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p8_ex3",
                    "type": "mcq",
                    "prompt": "Une droite verticale d'équation x = 4 représente-t-elle une fonction ?",
                    "options": [
                        "Non, car à l'abscisse 4 correspond une infinité d'ordonnées y",
                        "Oui, la fonction constante égale à 4",
                        "Oui, la fonction linéaire",
                        "Non, uniquement si elle ne coupe pas l'axe des abscisses"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Une droite verticale a une seule abscisse associée à une infinité d'images, ce qui viole la définition d'une fonction."
                }
            },
            {
                "stepNumber": 4,
                "stepBadge": "Étape 4/8 · Une droite horizontale d'équation y = 3 représente-t-el...",
                "stepTheme": "Une droite horizontale d'équation y = 3 représente-t-el...",
                "stepTitle": "Une droite horizontale d'équation y = 3 représente-t-el...",
                "paragraphText": "Notion fondamentale :\n• Toute droite verticale x = k coupe la droite horizontale y = 3 en exactement un point (k ; 3) : c'est la fonction constante f(x) = 3.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Critère de la droite verticale",
                    "formula": "\\forall k \\in \\mathbb{R}, \\quad \\text{Card}((x = k) \\cap (C_f)) \\le 1",
                    "note": "Garantit qu'à chaque abscisse x correspond au maximum une seule ordonnée y = f(x)."
                },
                "konanTip": "L'Astuce du Professeur Konan : Toute droite verticale x = k coupe la droite horizontale y = 3 en exactement un point (k ; 3) : c'est la fonction constante f(x) = 3 !",
                "keyRule": "Une droite verticale ne doit JAMAIS couper la courbe en plus d'un point !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p8_ex4",
                    "type": "mcq",
                    "prompt": "Une droite horizontale d'équation y = 3 représente-t-elle une fonction ?",
                    "options": [
                        "Oui, c'est la fonction constante f(x) = 3",
                        "Non, car toute droite horizontale est interdite",
                        "Oui, mais son domaine est réduit à {3}",
                        "Non, car elle ne coupe jamais l'axe des ordonnées"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Toute droite verticale x = k coupe la droite horizontale y = 3 en exactement un point (k ; 3) : c'est la fonction constante f(x) = 3."
                }
            },
            {
                "stepNumber": 5,
                "stepBadge": "Étape 5/8 · Soit la courbe d'équation y² = x pour x ≥ 0. Représente...",
                "stepTheme": "Soit la courbe d'équation y² = x pour x ≥ 0. Représente...",
                "stepTitle": "Soit la courbe d'équation y² = x pour x ≥ 0. Représente...",
                "paragraphText": "Notion fondamentale :\n• Pour x = 4, y² = 4 donne y = 2 et y = −2. La parabole couchée ne représente pas une fonction de ℝ vers ℝ.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Critère de la droite verticale",
                    "formula": "\\forall k \\in \\mathbb{R}, \\quad \\text{Card}((x = k) \\cap (C_f)) \\le 1",
                    "note": "Garantit qu'à chaque abscisse x correspond au maximum une seule ordonnée y = f(x)."
                },
                "konanTip": "L'Astuce du Professeur Konan : Pour x = 4, y² = 4 donne y = 2 et y = −2 !",
                "keyRule": "Une droite verticale ne doit JAMAIS couper la courbe en plus d'un point !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p8_ex5",
                    "type": "mcq",
                    "prompt": "Soit la courbe d'équation y² = x pour x ≥ 0. Représente-t-elle une fonction y = f(x) ?",
                    "options": [
                        "Non, car pour chaque x > 0, il y a deux ordonnées distinctes : y = √x et y = −√x",
                        "Oui, c'est la fonction racine carrée",
                        "Oui, sur l'intervalle [0 ; +∞[",
                        "Non, car x ne peut pas être nul"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Pour x = 4, y² = 4 donne y = 2 et y = −2. La parabole couchée ne représente pas une fonction de ℝ vers ℝ."
                }
            },
            {
                "stepNumber": 6,
                "stepBadge": "Étape 6/8 · La courbe représentant la fonction racine carrée y = √x...",
                "stepTheme": "La courbe représentant la fonction racine carrée y = √x...",
                "stepTitle": "La courbe représentant la fonction racine carrée y = √x...",
                "paragraphText": "Notion fondamentale :\n• Pour tout x ≥ 0, il y a une seule valeur y = √x ≥ 0. Toute droite verticale coupe la courbe en au plus un point.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Critère de la droite verticale",
                    "formula": "\\forall k \\in \\mathbb{R}, \\quad \\text{Card}((x = k) \\cap (C_f)) \\le 1",
                    "note": "Garantit qu'à chaque abscisse x correspond au maximum une seule ordonnée y = f(x)."
                },
                "konanTip": "L'Astuce du Professeur Konan : Pour tout x ≥ 0, il y a une seule valeur y = √x ≥ 0 !",
                "keyRule": "Une droite verticale ne doit JAMAIS couper la courbe en plus d'un point !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p8_ex6",
                    "type": "mcq",
                    "prompt": "La courbe représentant la fonction racine carrée y = √x (demi-parabole supérieure) est-elle une fonction ?",
                    "options": [
                        "Oui, car chaque droite verticale x = k (k ≥ 0) la coupe en un point unique",
                        "Non, car elle s'arrête en 0",
                        "Non, car elle n'est pas définie pour x < 0",
                        "Oui, mais uniquement pour les entiers"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Pour tout x ≥ 0, il y a une seule valeur y = √x ≥ 0. Toute droite verticale coupe la courbe en au plus un point."
                }
            },
            {
                "stepNumber": 7,
                "stepBadge": "Étape 7/8 · Que représente géométriquement l'ensemble de définition...",
                "stepTheme": "Que représente géométriquement l'ensemble de définition...",
                "stepTitle": "Que représente géométriquement l'ensemble de définition...",
                "paragraphText": "Notion fondamentale :\n• L'ensemble de définition Df est l'ensemble de toutes les abscisses x pour lesquelles il existe un point sur la courbe.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Critère de la droite verticale",
                    "formula": "\\forall k \\in \\mathbb{R}, \\quad \\text{Card}((x = k) \\cap (C_f)) \\le 1",
                    "note": "Garantit qu'à chaque abscisse x correspond au maximum une seule ordonnée y = f(x)."
                },
                "konanTip": "L'Astuce du Professeur Konan : L'ensemble de définition Df est l'ensemble de toutes les abscisses x pour lesquelles il existe un point sur la courbe !",
                "keyRule": "Une droite verticale ne doit JAMAIS couper la courbe en plus d'un point !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p8_ex7",
                    "type": "mcq",
                    "prompt": "Que représente géométriquement l'ensemble de définition Df sur le graphe de f ?",
                    "options": [
                        "La projection orthogonale de la courbe (Cf) sur l'axe des abscisses (Ox)",
                        "La projection orthogonale de la courbe sur l'axe des ordonnées (Oy)",
                        "La pente de la tangente au point d'origine",
                        "L'aire comprise sous la courbe"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "L'ensemble de définition Df est l'ensemble de toutes les abscisses x pour lesquelles il existe un point sur la courbe."
                }
            },
            {
                "stepNumber": 8,
                "stepBadge": "Étape 8/8 · Si une droite verticale x = 2 ne coupe la courbe en auc...",
                "stepTheme": "Si une droite verticale x = 2 ne coupe la courbe en auc...",
                "stepTitle": "Si une droite verticale x = 2 ne coupe la courbe en auc...",
                "paragraphText": "Notion fondamentale :\n• Si x = 2 ne rencontre pas la courbe, alors f(2) n'existe pas : 2 ∉ Df.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Critère de la droite verticale",
                    "formula": "\\forall k \\in \\mathbb{R}, \\quad \\text{Card}((x = k) \\cap (C_f)) \\le 1",
                    "note": "Garantit qu'à chaque abscisse x correspond au maximum une seule ordonnée y = f(x)."
                },
                "konanTip": "L'Astuce du Professeur Konan : Si x = 2 ne rencontre pas la courbe, alors f(2) n'existe pas : 2 ∉ Df !",
                "keyRule": "Une droite verticale ne doit JAMAIS couper la courbe en plus d'un point !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p8_ex8",
                    "type": "mcq",
                    "prompt": "Si une droite verticale x = 2 ne coupe la courbe en aucun point, que cela signifie-t-il ?",
                    "options": [
                        "Le réel 2 n'appartient pas à l'ensemble de définition Df (valeur interdite)",
                        "La fonction s'annule en 2",
                        "La fonction est discontinue mais définie en 2",
                        "L'image de 2 est égale à 0"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Si x = 2 ne rencontre pas la courbe, alors f(2) n'existe pas : 2 ∉ Df."
                }
            }
        ]
    },
    {
        "id": "seconde_c_maths_numerique_ch1_p9_lecture_graphique_images_antecedents",
        "order": 9,
        "title": "Lecture graphique d'images et d'antécédents",
        "summary": "Méthode de projection orthogonale pour lire f(a) et résoudre graphiquement les équations f(x) = k.",
        "conceptExplanation": "La courbe représentative permet de déterminer visuellement les images et antécédents :\n• Lecture de l'image de a : On repère a sur l'axe des abscisses, on se déplace verticalement jusqu'à la courbe (Cf), puis horizontalement vers l'axe des ordonnées pour lire f(a).\n• Lecture des antécédents de k : On trace mentalement la droite horizontale d'équation y = k. Les abscisses des points d'intersection de cette droite avec la courbe sont les antécédents de k.\n• Résolution graphique de f(x) = 0 : Ce sont les abscisses des points d'intersection de la courbe avec l'axe des abscisses (Ox).",
        "keyRule": "Pour lire l'image de a, on part de l'axe horizontal (Ox). Pour chercher les antécédents de k, on part de l'axe vertical (Oy) !",
        "formula": {
            "name": "Lecture graphique des antécédents",
            "formula": "\\text{Antécédents de } k = \\{x \\in D_f \\mid (C_f) \\cap (y = k)\\}",
            "note": "Abscisses des points de contact entre la courbe et la droite horizontale y = k."
        },
        "workedExample": {
            "title": "Application guidée : Lecture d'antécédents graphiques",
            "statement": "Une courbe coupe la droite horizontale y = 2 aux points A(−3 ; 2), B(1 ; 2) et C(4 ; 2). Quels sont les antécédents de 2 ?",
            "methodSteps": [
                "1. Repérer l'équation de la droite horizontale : y = 2 correspond aux images valant 2.",
                "2. Identifier les abscisses des points d'intersection : A a pour abscisse −3, B a 1 et C a 4.",
                "3. Conclure : L'équation f(x) = 2 admet exactement trois solutions : x = −3, x = 1 et x = 4."
            ],
            "conclusion": "Les antécédents de 2 par f sont −3, 1 et 4."
        },
        "exercises": [
            {
                "id": "seconde_c_maths_numerique_ch1_p9_ex1",
                "type": "mcq",
                "prompt": "Pour lire graphiquement l'image d'un nombre a par f, par quel axe commence-t-on le tracé ?",
                "options": [
                    "L'axe des abscisses (axe horizontal Ox)",
                    "L'axe des ordonnées (axe vertical Oy)",
                    "L'origine du repère uniquement",
                    "La diagonale du premier quadrant"
                ],
                "correctAnswerIndex": 0,
                "explanation": "On part de l'abscisse x = a sur l'axe (Ox), on rejoint la courbe verticalement, puis on projette sur l'axe (Oy)."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p9_ex2",
                "type": "mcq",
                "prompt": "Comment résout-on graphiquement l'équation f(x) = k d'inconnue x ?",
                "options": [
                    "On lit les abscisses des points d'intersection de la courbe (Cf) avec la droite horizontale y = k",
                    "On lit les ordonnées des points d'intersection avec la droite verticale x = k",
                    "On multiplie k par la valeur de l'abscisse à l'origine",
                    "On calcule la pente de la droite passant par k"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Les antécédents de k sont les abscisses des points où la droite horizontale y = k rencontre la courbe."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p9_ex3",
                "type": "mcq",
                "prompt": "La courbe (Cf) coupe l'axe des ordonnées en un point unique d'ordonnée −4. Quelle valeur cela donne-t-il ?",
                "options": [
                    "f(0) = −4",
                    "f(−4) = 0",
                    "Df = ℝ \\ {−4}",
                    "L'antécédent de −4 est 1"
                ],
                "correctAnswerIndex": 0,
                "explanation": "L'axe des ordonnées a pour équation x = 0. Le point d'intersection est (0 ; f(0)), d'où f(0) = −4."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p9_ex4",
                "type": "mcq",
                "prompt": "La courbe coupe l'axe des abscisses aux points d'abscisses −2 et 5. Quelles sont les solutions de f(x) = 0 ?",
                "options": [
                    "S = {−2 ; 5}",
                    "S = {0}",
                    "S = [−2 ; 5]",
                    "S = {−10}"
                ],
                "correctAnswerIndex": 0,
                "explanation": "L'axe des abscisses a pour équation y = 0. Les points d'intersection correspondent aux solutions de f(x) = 0."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p9_ex5",
                "type": "mcq",
                "prompt": "Si la droite horizontale y = 6 ne coupe la courbe (Cf) en aucun point, que peut-on affirmer ?",
                "options": [
                    "Le nombre 6 n'admet aucun antécédent par f (l'équation f(x) = 6 n'a aucune solution)",
                    "f(6) n'est pas défini",
                    "La fonction est constante égale à 6",
                    "Le domaine de définition est vide"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Aucune intersection signifie qu'aucun réel x n'a pour image 6 : l'équation f(x) = 6 n'a pas de solution."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p9_ex6",
                "type": "mcq",
                "prompt": "Comment résout-on graphiquement l'inéquation f(x) > 0 ?",
                "options": [
                    "On détermine les abscisses des points de la courbe situés strictement au-dessus de l'axe des abscisses",
                    "On prend toutes les ordonnées positives",
                    "On prend la partie droite du graphe uniquement",
                    "On calcule le discriminant du trinôme"
                ],
                "correctAnswerIndex": 0,
                "explanation": "f(x) > 0 correspond aux intervalles d'abscisses où la courbe est située strictement au-dessus de l'axe (Ox)."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p9_ex7",
                "type": "mcq",
                "prompt": "Si une courbe (Cf) est entièrement située sous l'axe des abscisses, quel est le signe de f(x) pour tout x ∈ Df ?",
                "options": [
                    "f(x) < 0 (strictement négatif)",
                    "f(x) > 0 (strictement positif)",
                    "f(x) = 0",
                    "Le signe dépend de la parité de x"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Sous l'axe des abscisses, toutes les ordonnées y = f(x) sont strictement négatives."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p9_ex8",
                "type": "mcq",
                "prompt": "Pour résoudre graphiquement f(x) = g(x), que recherche-t-on ?",
                "options": [
                    "Les abscisses des points d'intersection entre la courbe (Cf) et la courbe (Cg)",
                    "Les ordonnées des points les plus hauts",
                    "La somme des coordonnées à l'origine",
                    "L'aire entre les deux courbes"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Les solutions de f(x) = g(x) sont les abscisses des points communs aux deux courbes représentatives."
            }
        ],
        "formulas": [
            {
                "name": "Lecture graphique des antécédents",
                "formula": "\\text{Antécédents de } k = \\{x \\in D_f \\mid (C_f) \\cap (y = k)\\}",
                "note": "Abscisses des points de contact entre la courbe et la droite horizontale y = k."
            }
        ],
        "structuredSteps": [
            {
                "stepNumber": 1,
                "stepBadge": "Étape 1/8 · Pour lire graphiquement l'image d'un nombre a par f, pa...",
                "stepTheme": "Pour lire graphiquement l'image d'un nombre a par f, pa...",
                "stepTitle": "Pour lire graphiquement l'image d'un nombre a par f, pa...",
                "paragraphText": "Notion fondamentale :\n• On part de l'abscisse x = a sur l'axe (Ox), on rejoint la courbe verticalement, puis on projette sur l'axe (Oy).\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Lecture graphique des antécédents",
                    "formula": "\\text{Antécédents de } k = \\{x \\in D_f \\mid (C_f) \\cap (y = k)\\}",
                    "note": "Abscisses des points de contact entre la courbe et la droite horizontale y = k."
                },
                "konanTip": "L'Astuce du Professeur Konan : On part de l'abscisse x = a sur l'axe (Ox), on rejoint la courbe verticalement, puis on projette sur l'axe (Oy) !",
                "keyRule": "Pour lire l'image de a, on part de l'axe horizontal (Ox). Pour chercher les antécédents de k, on part de l'axe vertical (Oy) !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p9_ex1",
                    "type": "mcq",
                    "prompt": "Pour lire graphiquement l'image d'un nombre a par f, par quel axe commence-t-on le tracé ?",
                    "options": [
                        "L'axe des abscisses (axe horizontal Ox)",
                        "L'axe des ordonnées (axe vertical Oy)",
                        "L'origine du repère uniquement",
                        "La diagonale du premier quadrant"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "On part de l'abscisse x = a sur l'axe (Ox), on rejoint la courbe verticalement, puis on projette sur l'axe (Oy)."
                }
            },
            {
                "stepNumber": 2,
                "stepBadge": "Étape 2/8 · Comment résout-on graphiquement l'équation f(x) = k d'i...",
                "stepTheme": "Comment résout-on graphiquement l'équation f(x) = k d'i...",
                "stepTitle": "Comment résout-on graphiquement l'équation f(x) = k d'i...",
                "paragraphText": "Notion fondamentale :\n• Les antécédents de k sont les abscisses des points où la droite horizontale y = k rencontre la courbe.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Lecture graphique des antécédents",
                    "formula": "\\text{Antécédents de } k = \\{x \\in D_f \\mid (C_f) \\cap (y = k)\\}",
                    "note": "Abscisses des points de contact entre la courbe et la droite horizontale y = k."
                },
                "konanTip": "L'Astuce du Professeur Konan : Les antécédents de k sont les abscisses des points où la droite horizontale y = k rencontre la courbe !",
                "keyRule": "Pour lire l'image de a, on part de l'axe horizontal (Ox). Pour chercher les antécédents de k, on part de l'axe vertical (Oy) !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p9_ex2",
                    "type": "mcq",
                    "prompt": "Comment résout-on graphiquement l'équation f(x) = k d'inconnue x ?",
                    "options": [
                        "On lit les abscisses des points d'intersection de la courbe (Cf) avec la droite horizontale y = k",
                        "On lit les ordonnées des points d'intersection avec la droite verticale x = k",
                        "On multiplie k par la valeur de l'abscisse à l'origine",
                        "On calcule la pente de la droite passant par k"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Les antécédents de k sont les abscisses des points où la droite horizontale y = k rencontre la courbe."
                }
            },
            {
                "stepNumber": 3,
                "stepBadge": "Étape 3/8 · La courbe (Cf) coupe l'axe des ordonnées en un point un...",
                "stepTheme": "La courbe (Cf) coupe l'axe des ordonnées en un point un...",
                "stepTitle": "La courbe (Cf) coupe l'axe des ordonnées en un point un...",
                "paragraphText": "Notion fondamentale :\n• L'axe des ordonnées a pour équation x = 0. Le point d'intersection est (0 ; f(0)), d'où f(0) = −4.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Lecture graphique des antécédents",
                    "formula": "\\text{Antécédents de } k = \\{x \\in D_f \\mid (C_f) \\cap (y = k)\\}",
                    "note": "Abscisses des points de contact entre la courbe et la droite horizontale y = k."
                },
                "konanTip": "L'Astuce du Professeur Konan : L'axe des ordonnées a pour équation x = 0 !",
                "keyRule": "Pour lire l'image de a, on part de l'axe horizontal (Ox). Pour chercher les antécédents de k, on part de l'axe vertical (Oy) !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p9_ex3",
                    "type": "mcq",
                    "prompt": "La courbe (Cf) coupe l'axe des ordonnées en un point unique d'ordonnée −4. Quelle valeur cela donne-t-il ?",
                    "options": [
                        "f(0) = −4",
                        "f(−4) = 0",
                        "Df = ℝ \\ {−4}",
                        "L'antécédent de −4 est 1"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "L'axe des ordonnées a pour équation x = 0. Le point d'intersection est (0 ; f(0)), d'où f(0) = −4."
                }
            },
            {
                "stepNumber": 4,
                "stepBadge": "Étape 4/8 · La courbe coupe l'axe des abscisses aux points d'abscis...",
                "stepTheme": "La courbe coupe l'axe des abscisses aux points d'abscis...",
                "stepTitle": "La courbe coupe l'axe des abscisses aux points d'abscis...",
                "paragraphText": "Notion fondamentale :\n• L'axe des abscisses a pour équation y = 0. Les points d'intersection correspondent aux solutions de f(x) = 0.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Lecture graphique des antécédents",
                    "formula": "\\text{Antécédents de } k = \\{x \\in D_f \\mid (C_f) \\cap (y = k)\\}",
                    "note": "Abscisses des points de contact entre la courbe et la droite horizontale y = k."
                },
                "konanTip": "L'Astuce du Professeur Konan : L'axe des abscisses a pour équation y = 0 !",
                "keyRule": "Pour lire l'image de a, on part de l'axe horizontal (Ox). Pour chercher les antécédents de k, on part de l'axe vertical (Oy) !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p9_ex4",
                    "type": "mcq",
                    "prompt": "La courbe coupe l'axe des abscisses aux points d'abscisses −2 et 5. Quelles sont les solutions de f(x) = 0 ?",
                    "options": [
                        "S = {−2 ; 5}",
                        "S = {0}",
                        "S = [−2 ; 5]",
                        "S = {−10}"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "L'axe des abscisses a pour équation y = 0. Les points d'intersection correspondent aux solutions de f(x) = 0."
                }
            },
            {
                "stepNumber": 5,
                "stepBadge": "Étape 5/8 · Si la droite horizontale y = 6 ne coupe la courbe (Cf) ...",
                "stepTheme": "Si la droite horizontale y = 6 ne coupe la courbe (Cf) ...",
                "stepTitle": "Si la droite horizontale y = 6 ne coupe la courbe (Cf) ...",
                "paragraphText": "Notion fondamentale :\n• Aucune intersection signifie qu'aucun réel x n'a pour image 6 : l'équation f(x) = 6 n'a pas de solution.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Lecture graphique des antécédents",
                    "formula": "\\text{Antécédents de } k = \\{x \\in D_f \\mid (C_f) \\cap (y = k)\\}",
                    "note": "Abscisses des points de contact entre la courbe et la droite horizontale y = k."
                },
                "konanTip": "L'Astuce du Professeur Konan : Aucune intersection signifie qu'aucun réel x n'a pour image 6 : l'équation f(x) = 6 n'a pas de solution !",
                "keyRule": "Pour lire l'image de a, on part de l'axe horizontal (Ox). Pour chercher les antécédents de k, on part de l'axe vertical (Oy) !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p9_ex5",
                    "type": "mcq",
                    "prompt": "Si la droite horizontale y = 6 ne coupe la courbe (Cf) en aucun point, que peut-on affirmer ?",
                    "options": [
                        "Le nombre 6 n'admet aucun antécédent par f (l'équation f(x) = 6 n'a aucune solution)",
                        "f(6) n'est pas défini",
                        "La fonction est constante égale à 6",
                        "Le domaine de définition est vide"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Aucune intersection signifie qu'aucun réel x n'a pour image 6 : l'équation f(x) = 6 n'a pas de solution."
                }
            },
            {
                "stepNumber": 6,
                "stepBadge": "Étape 6/8 · Comment résout-on graphiquement l'inéquation f(x) > 0",
                "stepTheme": "Comment résout-on graphiquement l'inéquation f(x) > 0",
                "stepTitle": "Comment résout-on graphiquement l'inéquation f(x) > 0",
                "paragraphText": "Notion fondamentale :\n• f(x) > 0 correspond aux intervalles d'abscisses où la courbe est située strictement au-dessus de l'axe (Ox).\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Lecture graphique des antécédents",
                    "formula": "\\text{Antécédents de } k = \\{x \\in D_f \\mid (C_f) \\cap (y = k)\\}",
                    "note": "Abscisses des points de contact entre la courbe et la droite horizontale y = k."
                },
                "konanTip": "L'Astuce du Professeur Konan : f(x) > 0 correspond aux intervalles d'abscisses où la courbe est située strictement au-dessus de l'axe (Ox) !",
                "keyRule": "Pour lire l'image de a, on part de l'axe horizontal (Ox). Pour chercher les antécédents de k, on part de l'axe vertical (Oy) !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p9_ex6",
                    "type": "mcq",
                    "prompt": "Comment résout-on graphiquement l'inéquation f(x) > 0 ?",
                    "options": [
                        "On détermine les abscisses des points de la courbe situés strictement au-dessus de l'axe des abscisses",
                        "On prend toutes les ordonnées positives",
                        "On prend la partie droite du graphe uniquement",
                        "On calcule le discriminant du trinôme"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "f(x) > 0 correspond aux intervalles d'abscisses où la courbe est située strictement au-dessus de l'axe (Ox)."
                }
            },
            {
                "stepNumber": 7,
                "stepBadge": "Étape 7/8 · Si une courbe (Cf) est entièrement située sous l'axe de...",
                "stepTheme": "Si une courbe (Cf) est entièrement située sous l'axe de...",
                "stepTitle": "Si une courbe (Cf) est entièrement située sous l'axe de...",
                "paragraphText": "Notion fondamentale :\n• Sous l'axe des abscisses, toutes les ordonnées y = f(x) sont strictement négatives.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Lecture graphique des antécédents",
                    "formula": "\\text{Antécédents de } k = \\{x \\in D_f \\mid (C_f) \\cap (y = k)\\}",
                    "note": "Abscisses des points de contact entre la courbe et la droite horizontale y = k."
                },
                "konanTip": "L'Astuce du Professeur Konan : Sous l'axe des abscisses, toutes les ordonnées y = f(x) sont strictement négatives !",
                "keyRule": "Pour lire l'image de a, on part de l'axe horizontal (Ox). Pour chercher les antécédents de k, on part de l'axe vertical (Oy) !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p9_ex7",
                    "type": "mcq",
                    "prompt": "Si une courbe (Cf) est entièrement située sous l'axe des abscisses, quel est le signe de f(x) pour tout x ∈ Df ?",
                    "options": [
                        "f(x) < 0 (strictement négatif)",
                        "f(x) > 0 (strictement positif)",
                        "f(x) = 0",
                        "Le signe dépend de la parité de x"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Sous l'axe des abscisses, toutes les ordonnées y = f(x) sont strictement négatives."
                }
            },
            {
                "stepNumber": 8,
                "stepBadge": "Étape 8/8 · Pour résoudre graphiquement f(x) = g(x), que recherche-...",
                "stepTheme": "Pour résoudre graphiquement f(x) = g(x), que recherche-...",
                "stepTitle": "Pour résoudre graphiquement f(x) = g(x), que recherche-...",
                "paragraphText": "Notion fondamentale :\n• Les solutions de f(x) = g(x) sont les abscisses des points communs aux deux courbes représentatives.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Lecture graphique des antécédents",
                    "formula": "\\text{Antécédents de } k = \\{x \\in D_f \\mid (C_f) \\cap (y = k)\\}",
                    "note": "Abscisses des points de contact entre la courbe et la droite horizontale y = k."
                },
                "konanTip": "L'Astuce du Professeur Konan : Les solutions de f(x) = g(x) sont les abscisses des points communs aux deux courbes représentatives !",
                "keyRule": "Pour lire l'image de a, on part de l'axe horizontal (Ox). Pour chercher les antécédents de k, on part de l'axe vertical (Oy) !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p9_ex8",
                    "type": "mcq",
                    "prompt": "Pour résoudre graphiquement f(x) = g(x), que recherche-t-on ?",
                    "options": [
                        "Les abscisses des points d'intersection entre la courbe (Cf) et la courbe (Cg)",
                        "Les ordonnées des points les plus hauts",
                        "La somme des coordonnées à l'origine",
                        "L'aire entre les deux courbes"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Les solutions de f(x) = g(x) sont les abscisses des points communs aux deux courbes représentatives."
                }
            }
        ]
    },
    {
        "id": "seconde_c_maths_numerique_ch1_p10_images_directes_reciproques",
        "order": 10,
        "title": "Images directes et images réciproques d'un ensemble",
        "summary": "Définition formelle de l'image directe f(A) et de l'image réciproque f⁻¹(B) d'un ensemble de réels.",
        "conceptExplanation": "En Seconde C, on étend la notion d'image à des ensembles de nombres :\n• Image directe f(A) : C'est l'ensemble de toutes les images f(x) quand x parcourt A : f(A) = {f(x) | x ∈ A}. Si f est continue et croissante sur [a ; b], alors f([a ; b]) = [f(a) ; f(b)]. Si f est décroissante, f([a ; b]) = [f(b) ; f(a)].\n• Image réciproque f⁻¹(B) : C'est l'ensemble de tous les antécédents des éléments de B : f⁻¹(B) = {x ∈ Df | f(x) ∈ B}.\n• Attention : La notation f⁻¹ désigne ici l'image réciproque d'un sous-ensemble, elle n'exige pas que f admette une fonction réciproque.",
        "keyRule": "L'image directe f(A) est un ensemble d'ordonnées, l'image réciproque f⁻¹(B) est un ensemble d'abscisses !",
        "formula": {
            "name": "Image directe et réciproque",
            "formula": "f(A) = \\{f(x) \\mid x \\in A\\} \\quad ; \\quad f^{-1}(B) = \\{x \\in D_f \\mid f(x) \\in B\\}",
            "note": "Pour f croissante sur [a ; b] : f([a ; b]) = [f(a) ; f(b)]."
        },
        "workedExample": {
            "title": "Application guidée : Calcul d'image directe d'un intervalle",
            "statement": "Soit la fonction affine croissante f(x) = 2x + 1. Détermine l'image directe de l'intervalle A = [−1 ; 3].",
            "methodSteps": [
                "1. Propriété de f : f est une fonction affine à coefficient directeur m = 2 > 0, elle est donc strictement croissante sur ℝ.",
                "2. Appliquer la formule de l'image d'un intervalle pour une fonction croissante : f([−1 ; 3]) = [f(−1) ; f(3)].",
                "3. Calculer les bornes : f(−1) = 2(−1) + 1 = −1 et f(3) = 2(3) + 1 = 7.",
                "4. Conclure : f([−1 ; 3]) = [−1 ; 7]."
            ],
            "conclusion": "L'image directe de l'intervalle [−1 ; 3] par f est [−1 ; 7]."
        },
        "exercises": [
            {
                "id": "seconde_c_maths_numerique_ch1_p10_ex1",
                "type": "mcq",
                "prompt": "Soit f(x) = 3x − 2, fonction strictement croissante. Quelle est l'image directe f([1 ; 4]) ?",
                "options": [
                    "[1 ; 10]",
                    "[−2 ; 10]",
                    "[1 ; 4]",
                    "[3 ; 12]"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Comme f est croissante, f([1 ; 4]) = [f(1) ; f(4)]. f(1) = 3(1) − 2 = 1 et f(4) = 3(4) − 2 = 10. D'où [1 ; 10]."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p10_ex2",
                "type": "mcq",
                "prompt": "Soit g(x) = −2x + 5, fonction strictement décroissante. Quelle est l'image directe g([1 ; 3]) ?",
                "options": [
                    "[−1 ; 3]",
                    "[3 ; −1]",
                    "[1 ; 3]",
                    "[−2 ; 5]"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Une fonction décroissante inverse l'ordre des bornes : g([1 ; 3]) = [g(3) ; g(1)]. g(3) = −1 et g(1) = 3. L'intervalle est [−1 ; 3]."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p10_ex3",
                "type": "mcq",
                "prompt": "Par définition, qu'appelle-t-on image réciproque d'un ensemble B par f, notée f⁻¹(B) ?",
                "options": [
                    "L'ensemble des réels x de Df dont l'image f(x) appartient à B",
                    "L'inverse numérique 1 / f(B)",
                    "L'ensemble des images négatives",
                    "La dérivée de la fonction f"
                ],
                "correctAnswerIndex": 0,
                "explanation": "f⁻¹(B) est par définition {x ∈ Df | f(x) ∈ B} (l'ensemble des antécédents des éléments de B)."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p10_ex4",
                "type": "mcq",
                "prompt": "Soit f(x) = x² définie sur ℝ. Quelle est l'image directe f([−2 ; 3]) ?",
                "options": [
                    "[0 ; 9]",
                    "[4 ; 9]",
                    "[−4 ; 9]",
                    "[−2 ; 3]"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Sur [−2 ; 3], x passe par 0 où x² atteint son minimum 0. Le maximum est atteint en 3 où 3² = 9. Donc f([−2 ; 3]) = [0 ; 9]."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p10_ex5",
                "type": "mcq",
                "prompt": "Soit f(x) = x² sur ℝ. Quelle est l'image réciproque de l'intervalle B = [4 ; 9] ?",
                "options": [
                    "[−3 ; −2] ∪ [2 ; 3]",
                    "[2 ; 3]",
                    "[16 ; 81]",
                    "[−9 ; −4]"
                ],
                "correctAnswerIndex": 0,
                "explanation": "x² ∈ [4 ; 9] ⇔ 4 ≤ x² ≤ 9 ⇔ x ∈ [2 ; 3] ou x ∈ [−3 ; −2]."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p10_ex6",
                "type": "mcq",
                "prompt": "Soit f(x) = x² sur ℝ. Quelle est l'image réciproque de l'intervalle B = ]−∞ ; −1] ?",
                "options": [
                    "∅ (ensemble vide)",
                    "[−1 ; 0]",
                    "]−∞ ; −1]",
                    "ℝ"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Un carré dans ℝ ne peut jamais être strictement négatif : aucun réel x n'a son carré dans ]−∞ ; −1], donc f⁻¹(B) = ∅."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p10_ex7",
                "type": "mcq",
                "prompt": "Sur un graphique, comment visualise-t-on l'image directe f(A) ?",
                "options": [
                    "En projetant sur l'axe des ordonnées la portion de courbe correspondant aux abscisses x ∈ A",
                    "En mesurant la longueur de la courbe",
                    "En projetant sur l'axe des abscisses",
                    "En traçant la tangente au point A"
                ],
                "correctAnswerIndex": 0,
                "explanation": "f(A) est l'ensemble des ordonnées atteintes par la courbe lorsque x varie dans A."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p10_ex8",
                "type": "mcq",
                "prompt": "Si A ⊂ Df et que f est constante égale à 5 sur A, que vaut f(A) ?",
                "options": [
                    "{5} (un singleton)",
                    "[0 ; 5]",
                    "ℝ",
                    "A"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Toutes les images étant égales à 5, l'ensemble des images est le singleton {5}."
            }
        ],
        "formulas": [
            {
                "name": "Image directe et réciproque",
                "formula": "f(A) = \\{f(x) \\mid x \\in A\\} \\quad ; \\quad f^{-1}(B) = \\{x \\in D_f \\mid f(x) \\in B\\}",
                "note": "Pour f croissante sur [a ; b] : f([a ; b]) = [f(a) ; f(b)]."
            }
        ],
        "structuredSteps": [
            {
                "stepNumber": 1,
                "stepBadge": "Étape 1/8 · Soit f(x) = 3x − 2, fonction strictement croissante. Qu...",
                "stepTheme": "Soit f(x) = 3x − 2, fonction strictement croissante. Qu...",
                "stepTitle": "Soit f(x) = 3x − 2, fonction strictement croissante. Qu...",
                "paragraphText": "Notion fondamentale :\n• Comme f est croissante, f([1 ; 4]) = [f(1) ; f(4)]. f(1) = 3(1) − 2 = 1 et f(4) = 3(4) − 2 = 10. D'où [1 ; 10].\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Image directe et réciproque",
                    "formula": "f(A) = \\{f(x) \\mid x \\in A\\} \\quad ; \\quad f^{-1}(B) = \\{x \\in D_f \\mid f(x) \\in B\\}",
                    "note": "Pour f croissante sur [a ; b] : f([a ; b]) = [f(a) ; f(b)]."
                },
                "konanTip": "L'Astuce du Professeur Konan : Comme f est croissante, f([1 ; 4]) = [f(1) ; f(4)] !",
                "keyRule": "L'image directe f(A) est un ensemble d'ordonnées, l'image réciproque f⁻¹(B) est un ensemble d'abscisses !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p10_ex1",
                    "type": "mcq",
                    "prompt": "Soit f(x) = 3x − 2, fonction strictement croissante. Quelle est l'image directe f([1 ; 4]) ?",
                    "options": [
                        "[1 ; 10]",
                        "[−2 ; 10]",
                        "[1 ; 4]",
                        "[3 ; 12]"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Comme f est croissante, f([1 ; 4]) = [f(1) ; f(4)]. f(1) = 3(1) − 2 = 1 et f(4) = 3(4) − 2 = 10. D'où [1 ; 10]."
                }
            },
            {
                "stepNumber": 2,
                "stepBadge": "Étape 2/8 · Soit g(x) = −2x + 5, fonction strictement décroissante....",
                "stepTheme": "Soit g(x) = −2x + 5, fonction strictement décroissante....",
                "stepTitle": "Soit g(x) = −2x + 5, fonction strictement décroissante....",
                "paragraphText": "Notion fondamentale :\n• Une fonction décroissante inverse l'ordre des bornes : g([1 ; 3]) = [g(3) ; g(1)]. g(3) = −1 et g(1) = 3. L'intervalle est [−1 ; 3].\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Image directe et réciproque",
                    "formula": "f(A) = \\{f(x) \\mid x \\in A\\} \\quad ; \\quad f^{-1}(B) = \\{x \\in D_f \\mid f(x) \\in B\\}",
                    "note": "Pour f croissante sur [a ; b] : f([a ; b]) = [f(a) ; f(b)]."
                },
                "konanTip": "L'Astuce du Professeur Konan : Une fonction décroissante inverse l'ordre des bornes : g([1 ; 3]) = [g(3) ; g(1)] !",
                "keyRule": "L'image directe f(A) est un ensemble d'ordonnées, l'image réciproque f⁻¹(B) est un ensemble d'abscisses !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p10_ex2",
                    "type": "mcq",
                    "prompt": "Soit g(x) = −2x + 5, fonction strictement décroissante. Quelle est l'image directe g([1 ; 3]) ?",
                    "options": [
                        "[−1 ; 3]",
                        "[3 ; −1]",
                        "[1 ; 3]",
                        "[−2 ; 5]"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Une fonction décroissante inverse l'ordre des bornes : g([1 ; 3]) = [g(3) ; g(1)]. g(3) = −1 et g(1) = 3. L'intervalle est [−1 ; 3]."
                }
            },
            {
                "stepNumber": 3,
                "stepBadge": "Étape 3/8 · Par définition, qu'appelle-t-on image réciproque d'un e...",
                "stepTheme": "Par définition, qu'appelle-t-on image réciproque d'un e...",
                "stepTitle": "Par définition, qu'appelle-t-on image réciproque d'un e...",
                "paragraphText": "Notion fondamentale :\n• f⁻¹(B) est par définition {x ∈ Df | f(x) ∈ B} (l'ensemble des antécédents des éléments de B).\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Image directe et réciproque",
                    "formula": "f(A) = \\{f(x) \\mid x \\in A\\} \\quad ; \\quad f^{-1}(B) = \\{x \\in D_f \\mid f(x) \\in B\\}",
                    "note": "Pour f croissante sur [a ; b] : f([a ; b]) = [f(a) ; f(b)]."
                },
                "konanTip": "L'Astuce du Professeur Konan : f⁻¹(B) est par définition {x ∈ Df | f(x) ∈ B} (l'ensemble des antécédents des éléments de B) !",
                "keyRule": "L'image directe f(A) est un ensemble d'ordonnées, l'image réciproque f⁻¹(B) est un ensemble d'abscisses !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p10_ex3",
                    "type": "mcq",
                    "prompt": "Par définition, qu'appelle-t-on image réciproque d'un ensemble B par f, notée f⁻¹(B) ?",
                    "options": [
                        "L'ensemble des réels x de Df dont l'image f(x) appartient à B",
                        "L'inverse numérique 1 / f(B)",
                        "L'ensemble des images négatives",
                        "La dérivée de la fonction f"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "f⁻¹(B) est par définition {x ∈ Df | f(x) ∈ B} (l'ensemble des antécédents des éléments de B)."
                }
            },
            {
                "stepNumber": 4,
                "stepBadge": "Étape 4/8 · Soit f(x) = x² définie sur ℝ. Quelle est l'image direct...",
                "stepTheme": "Soit f(x) = x² définie sur ℝ. Quelle est l'image direct...",
                "stepTitle": "Soit f(x) = x² définie sur ℝ. Quelle est l'image direct...",
                "paragraphText": "Notion fondamentale :\n• Sur [−2 ; 3], x passe par 0 où x² atteint son minimum 0. Le maximum est atteint en 3 où 3² = 9. Donc f([−2 ; 3]) = [0 ; 9].\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Image directe et réciproque",
                    "formula": "f(A) = \\{f(x) \\mid x \\in A\\} \\quad ; \\quad f^{-1}(B) = \\{x \\in D_f \\mid f(x) \\in B\\}",
                    "note": "Pour f croissante sur [a ; b] : f([a ; b]) = [f(a) ; f(b)]."
                },
                "konanTip": "L'Astuce du Professeur Konan : Sur [−2 ; 3], x passe par 0 où x² atteint son minimum 0 !",
                "keyRule": "L'image directe f(A) est un ensemble d'ordonnées, l'image réciproque f⁻¹(B) est un ensemble d'abscisses !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p10_ex4",
                    "type": "mcq",
                    "prompt": "Soit f(x) = x² définie sur ℝ. Quelle est l'image directe f([−2 ; 3]) ?",
                    "options": [
                        "[0 ; 9]",
                        "[4 ; 9]",
                        "[−4 ; 9]",
                        "[−2 ; 3]"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Sur [−2 ; 3], x passe par 0 où x² atteint son minimum 0. Le maximum est atteint en 3 où 3² = 9. Donc f([−2 ; 3]) = [0 ; 9]."
                }
            },
            {
                "stepNumber": 5,
                "stepBadge": "Étape 5/8 · Soit f(x) = x² sur ℝ. Quelle est l'image réciproque de ...",
                "stepTheme": "Soit f(x) = x² sur ℝ. Quelle est l'image réciproque de ...",
                "stepTitle": "Soit f(x) = x² sur ℝ. Quelle est l'image réciproque de ...",
                "paragraphText": "Notion fondamentale :\n• x² ∈ [4 ; 9] ⇔ 4 ≤ x² ≤ 9 ⇔ x ∈ [2 ; 3] ou x ∈ [−3 ; −2].\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Image directe et réciproque",
                    "formula": "f(A) = \\{f(x) \\mid x \\in A\\} \\quad ; \\quad f^{-1}(B) = \\{x \\in D_f \\mid f(x) \\in B\\}",
                    "note": "Pour f croissante sur [a ; b] : f([a ; b]) = [f(a) ; f(b)]."
                },
                "konanTip": "L'Astuce du Professeur Konan : x² ∈ [4 ; 9] ⇔ 4 ≤ x² ≤ 9 ⇔ x ∈ [2 ; 3] ou x ∈ [−3 ; −2] !",
                "keyRule": "L'image directe f(A) est un ensemble d'ordonnées, l'image réciproque f⁻¹(B) est un ensemble d'abscisses !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p10_ex5",
                    "type": "mcq",
                    "prompt": "Soit f(x) = x² sur ℝ. Quelle est l'image réciproque de l'intervalle B = [4 ; 9] ?",
                    "options": [
                        "[−3 ; −2] ∪ [2 ; 3]",
                        "[2 ; 3]",
                        "[16 ; 81]",
                        "[−9 ; −4]"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "x² ∈ [4 ; 9] ⇔ 4 ≤ x² ≤ 9 ⇔ x ∈ [2 ; 3] ou x ∈ [−3 ; −2]."
                }
            },
            {
                "stepNumber": 6,
                "stepBadge": "Étape 6/8 · Soit f(x) = x² sur ℝ. Quelle est l'image réciproque de ...",
                "stepTheme": "Soit f(x) = x² sur ℝ. Quelle est l'image réciproque de ...",
                "stepTitle": "Soit f(x) = x² sur ℝ. Quelle est l'image réciproque de ...",
                "paragraphText": "Notion fondamentale :\n• Un carré dans ℝ ne peut jamais être strictement négatif : aucun réel x n'a son carré dans ]−∞ ; −1], donc f⁻¹(B) = ∅.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Image directe et réciproque",
                    "formula": "f(A) = \\{f(x) \\mid x \\in A\\} \\quad ; \\quad f^{-1}(B) = \\{x \\in D_f \\mid f(x) \\in B\\}",
                    "note": "Pour f croissante sur [a ; b] : f([a ; b]) = [f(a) ; f(b)]."
                },
                "konanTip": "L'Astuce du Professeur Konan : Un carré dans ℝ ne peut jamais être strictement négatif : aucun réel x n'a son carré dans ]−∞ ; −1], donc f⁻¹(B) = ∅ !",
                "keyRule": "L'image directe f(A) est un ensemble d'ordonnées, l'image réciproque f⁻¹(B) est un ensemble d'abscisses !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p10_ex6",
                    "type": "mcq",
                    "prompt": "Soit f(x) = x² sur ℝ. Quelle est l'image réciproque de l'intervalle B = ]−∞ ; −1] ?",
                    "options": [
                        "∅ (ensemble vide)",
                        "[−1 ; 0]",
                        "]−∞ ; −1]",
                        "ℝ"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Un carré dans ℝ ne peut jamais être strictement négatif : aucun réel x n'a son carré dans ]−∞ ; −1], donc f⁻¹(B) = ∅."
                }
            },
            {
                "stepNumber": 7,
                "stepBadge": "Étape 7/8 · Sur un graphique, comment visualise-t-on l'image direct...",
                "stepTheme": "Sur un graphique, comment visualise-t-on l'image direct...",
                "stepTitle": "Sur un graphique, comment visualise-t-on l'image direct...",
                "paragraphText": "Notion fondamentale :\n• f(A) est l'ensemble des ordonnées atteintes par la courbe lorsque x varie dans A.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Image directe et réciproque",
                    "formula": "f(A) = \\{f(x) \\mid x \\in A\\} \\quad ; \\quad f^{-1}(B) = \\{x \\in D_f \\mid f(x) \\in B\\}",
                    "note": "Pour f croissante sur [a ; b] : f([a ; b]) = [f(a) ; f(b)]."
                },
                "konanTip": "L'Astuce du Professeur Konan : f(A) est l'ensemble des ordonnées atteintes par la courbe lorsque x varie dans A !",
                "keyRule": "L'image directe f(A) est un ensemble d'ordonnées, l'image réciproque f⁻¹(B) est un ensemble d'abscisses !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p10_ex7",
                    "type": "mcq",
                    "prompt": "Sur un graphique, comment visualise-t-on l'image directe f(A) ?",
                    "options": [
                        "En projetant sur l'axe des ordonnées la portion de courbe correspondant aux abscisses x ∈ A",
                        "En mesurant la longueur de la courbe",
                        "En projetant sur l'axe des abscisses",
                        "En traçant la tangente au point A"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "f(A) est l'ensemble des ordonnées atteintes par la courbe lorsque x varie dans A."
                }
            },
            {
                "stepNumber": 8,
                "stepBadge": "Étape 8/8 · Si A ⊂ Df et que f est constante égale à 5 sur A, que v...",
                "stepTheme": "Si A ⊂ Df et que f est constante égale à 5 sur A, que v...",
                "stepTitle": "Si A ⊂ Df et que f est constante égale à 5 sur A, que v...",
                "paragraphText": "Notion fondamentale :\n• Toutes les images étant égales à 5, l'ensemble des images est le singleton {5}.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Image directe et réciproque",
                    "formula": "f(A) = \\{f(x) \\mid x \\in A\\} \\quad ; \\quad f^{-1}(B) = \\{x \\in D_f \\mid f(x) \\in B\\}",
                    "note": "Pour f croissante sur [a ; b] : f([a ; b]) = [f(a) ; f(b)]."
                },
                "konanTip": "L'Astuce du Professeur Konan : Toutes les images étant égales à 5, l'ensemble des images est le singleton {5} !",
                "keyRule": "L'image directe f(A) est un ensemble d'ordonnées, l'image réciproque f⁻¹(B) est un ensemble d'abscisses !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p10_ex8",
                    "type": "mcq",
                    "prompt": "Si A ⊂ Df et que f est constante égale à 5 sur A, que vaut f(A) ?",
                    "options": [
                        "{5} (un singleton)",
                        "[0 ; 5]",
                        "ℝ",
                        "A"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Toutes les images étant égales à 5, l'ensemble des images est le singleton {5}."
                }
            }
        ]
    },
    {
        "id": "seconde_c_maths_numerique_ch1_p11_egalite_de_deux_fonctions",
        "order": 11,
        "title": "Égalité de deux fonctions sur un ensemble",
        "summary": "Deux conditions cumulatives indispensables pour que f = g : même domaine Df = Dg et même formule.",
        "conceptExplanation": "En mathématiques, deux fonctions f et g sont dites égales (noté f = g) si et seulement si deux conditions sont TOUTES LES DEUX remplies :\n1. Même ensemble de définition : Df = Dg.\n2. Même valeur pour tout x : Pour tout réel x appartenant à ce domaine commun, f(x) = g(x).\n• Piège d'examen redoutable : f(x) = (x² − 1)/(x − 1) et g(x) = x + 1 ne sont PAS égales sur ℝ, car Df = ℝ \\ {1} alors que Dg = ℝ ! En revanche, elles sont égales SUR l'ensemble E = ℝ \\ {1}.",
        "keyRule": "Pour que deux fonctions soient égales, elles doivent impérativement avoir LE MÊME DOMAINE DE DÉFINITION : Df = Dg !",
        "formula": {
            "name": "Critère d'égalité de deux fonctions",
            "formula": "f = g \\iff (D_f = D_g \\quad \\text{et} \\quad \\forall x \\in D_f, f(x) = g(x))",
            "note": "Deux expressions identiques avec des domaines distincts NE SONT PAS égales."
        },
        "workedExample": {
            "title": "Application guidée : Comparaison de deux fonctions rationnelles",
            "statement": "Les fonctions f(x) = (x² − 9) / (x − 3) et g(x) = x + 3 sont-elles égales sur ℝ ?",
            "methodSteps": [
                "1. Déterminer Df : f comporte une division par x − 3, donc x − 3 ≠ 0 ⇔ x ≠ 3. Df = ℝ \\ {3}.",
                "2. Déterminer Dg : g est un polynôme affine, donc Dg = ℝ.",
                "3. Comparer les domaines : Df ≠ Dg (le réel 3 appartient à Dg mais pas à Df).",
                "4. Conclure : f et g ne sont pas égales sur ℝ. Elles ne sont égales que sur ℝ \\ {3}."
            ],
            "conclusion": "f ≠ g car leurs ensembles de définition sont distincts."
        },
        "exercises": [
            {
                "id": "seconde_c_maths_numerique_ch1_p11_ex1",
                "type": "mcq",
                "prompt": "Quelles sont les deux conditions indispensables pour affirmer que deux fonctions f et g sont égales sur ℝ ?",
                "options": [
                    "Df = Dg = ℝ ET pour tout x ∈ ℝ, f(x) = g(x)",
                    "Uniquement que f(x) = g(x) après simplification",
                    "Qu'elles aient la même valeur en x = 0",
                    "Qu'elles soient toutes les deux croissantes"
                ],
                "correctAnswerIndex": 0,
                "explanation": "L'égalité de deux fonctions impose l'égalité stricte de leurs domaines ET l'égalité de leurs valeurs en tout point."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p11_ex2",
                "type": "mcq",
                "prompt": "Soit f(x) = (x² − 4) / (x − 2) et g(x) = x + 2. Ces deux fonctions sont-elles égales ?",
                "options": [
                    "Non, car Df = ℝ \\ {2} alors que Dg = ℝ",
                    "Oui, car (x² − 4)/(x − 2) se simplifie en x + 2",
                    "Oui, pour tout réel x",
                    "Non, car leurs graphes n'ont aucun point commun"
                ],
                "correctAnswerIndex": 0,
                "explanation": "f(2) n'existe pas alors que g(2) = 4. Ayant des domaines différents, les deux fonctions ne sont pas égales."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p11_ex3",
                "type": "mcq",
                "prompt": "Sur quel ensemble les fonctions f(x) = (x² − 4) / (x − 2) et g(x) = x + 2 sont-elles rigoureusement égales ?",
                "options": [
                    "Sur E = ℝ \\ {2}",
                    "Sur ℝ tout entier",
                    "Sur [2 ; +∞[",
                    "Sur {2}"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Pour tout x ≠ 2, (x − 2)(x + 2)/(x − 2) = x + 2. Elles sont donc égales sur l'ensemble E = ℝ \\ {2}."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p11_ex4",
                "type": "mcq",
                "prompt": "Soit f(x) = √(x²) et g(x) = x. Ces deux fonctions sont-elles égales sur ℝ ?",
                "options": [
                    "Non, car pour x < 0, √(x²) = |x| = −x ≠ x",
                    "Oui, car la racine et le carré s'annulent toujours",
                    "Oui, sur ℝ tout entier",
                    "Non, car Df = [0 ; +∞["
                ],
                "correctAnswerIndex": 0,
                "explanation": "Pour x = −3, √( (−3)² ) = √9 = 3 ≠ −3. √(x²) = |x|, donc f n'est pas égale à g sur ℝ (elles ne sont égales que sur [0 ; +∞[)."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p11_ex5",
                "type": "mcq",
                "prompt": "Soit f(x) = √(x²) et g(x) = |x|. Ces deux fonctions sont-elles égales sur ℝ ?",
                "options": [
                    "Oui, car Df = Dg = ℝ et pour tout x ∈ ℝ, √(x²) = |x|",
                    "Non, car f comporte une racine carrée",
                    "Non, car la valeur absolue n'est pas une fonction",
                    "Oui, mais uniquement pour x > 0"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Par définition de la racine carrée d'un carré réel, √(x²) = |x| pour tout x ∈ ℝ, et les deux domaines valent ℝ."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p11_ex6",
                "type": "mcq",
                "prompt": "Soit f(x) = (√x)² et g(x) = x. Sont-elles égales sur ℝ ?",
                "options": [
                    "Non, car Df = [0 ; +∞[ alors que Dg = ℝ",
                    "Oui, car (√x)² = x pour tout réel",
                    "Oui, sans restriction",
                    "Non, car (√x)² est toujours négatif"
                ],
                "correctAnswerIndex": 0,
                "explanation": "f n'est définie que sur [0 ; +∞[ (la racine est calculée en premier), alors que g est définie sur ℝ. Leurs domaines étant différents, f ≠ g."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p11_ex7",
                "type": "mcq",
                "prompt": "Soit f(x) = |x| / x et g(x) = 1. Sont-elles égales sur ]0 ; +∞[ ?",
                "options": [
                    "Oui, car pour tout x > 0, |x| = x donc |x|/x = x/x = 1 = g(x)",
                    "Non, car f n'est pas définie en 0",
                    "Non, car f(x) = −1 pour tout x",
                    "Oui sur ℝ tout entier"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Sur l'intervalle ouvert ]0 ; +∞[, x est strictement positif, donc |x| = x et f(x) = 1 = g(x). Elles sont égales sur cet ensemble."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p11_ex8",
                "type": "mcq",
                "prompt": "Si deux fonctions ont la même représentation graphique (exactement la même courbe point par point), que peut-on conclure ?",
                "options": [
                    "Elles sont rigoureusement égales (f = g)",
                    "Elles ont seulement la même dérivée",
                    "Elles sont opposées",
                    "On ne peut rien conclure"
                ],
                "correctAnswerIndex": 0,
                "explanation": "La courbe étant l'ensemble des points (x ; f(x)), deux courbes superposées impliquent Df = Dg et f(x) = g(x) pour tout x : f = g."
            }
        ],
        "formulas": [
            {
                "name": "Critère d'égalité de deux fonctions",
                "formula": "f = g \\iff (D_f = D_g \\quad \\text{et} \\quad \\forall x \\in D_f, f(x) = g(x))",
                "note": "Deux expressions identiques avec des domaines distincts NE SONT PAS égales."
            }
        ],
        "structuredSteps": [
            {
                "stepNumber": 1,
                "stepBadge": "Étape 1/8 · Quelles sont les deux conditions indispensables pour af...",
                "stepTheme": "Quelles sont les deux conditions indispensables pour af...",
                "stepTitle": "Quelles sont les deux conditions indispensables pour af...",
                "paragraphText": "Notion fondamentale :\n• L'égalité de deux fonctions impose l'égalité stricte de leurs domaines ET l'égalité de leurs valeurs en tout point.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Critère d'égalité de deux fonctions",
                    "formula": "f = g \\iff (D_f = D_g \\quad \\text{et} \\quad \\forall x \\in D_f, f(x) = g(x))",
                    "note": "Deux expressions identiques avec des domaines distincts NE SONT PAS égales."
                },
                "konanTip": "L'Astuce du Professeur Konan : L'égalité de deux fonctions impose l'égalité stricte de leurs domaines ET l'égalité de leurs valeurs en tout point !",
                "keyRule": "Pour que deux fonctions soient égales, elles doivent impérativement avoir LE MÊME DOMAINE DE DÉFINITION : Df = Dg !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p11_ex1",
                    "type": "mcq",
                    "prompt": "Quelles sont les deux conditions indispensables pour affirmer que deux fonctions f et g sont égales sur ℝ ?",
                    "options": [
                        "Df = Dg = ℝ ET pour tout x ∈ ℝ, f(x) = g(x)",
                        "Uniquement que f(x) = g(x) après simplification",
                        "Qu'elles aient la même valeur en x = 0",
                        "Qu'elles soient toutes les deux croissantes"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "L'égalité de deux fonctions impose l'égalité stricte de leurs domaines ET l'égalité de leurs valeurs en tout point."
                }
            },
            {
                "stepNumber": 2,
                "stepBadge": "Étape 2/8 · Soit f(x) = (x² − 4) / (x − 2) et g(x) = x + 2. Ces deu...",
                "stepTheme": "Soit f(x) = (x² − 4) / (x − 2) et g(x) = x + 2. Ces deu...",
                "stepTitle": "Soit f(x) = (x² − 4) / (x − 2) et g(x) = x + 2. Ces deu...",
                "paragraphText": "Notion fondamentale :\n• f(2) n'existe pas alors que g(2) = 4. Ayant des domaines différents, les deux fonctions ne sont pas égales.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Critère d'égalité de deux fonctions",
                    "formula": "f = g \\iff (D_f = D_g \\quad \\text{et} \\quad \\forall x \\in D_f, f(x) = g(x))",
                    "note": "Deux expressions identiques avec des domaines distincts NE SONT PAS égales."
                },
                "konanTip": "L'Astuce du Professeur Konan : f(2) n'existe pas alors que g(2) = 4 !",
                "keyRule": "Pour que deux fonctions soient égales, elles doivent impérativement avoir LE MÊME DOMAINE DE DÉFINITION : Df = Dg !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p11_ex2",
                    "type": "mcq",
                    "prompt": "Soit f(x) = (x² − 4) / (x − 2) et g(x) = x + 2. Ces deux fonctions sont-elles égales ?",
                    "options": [
                        "Non, car Df = ℝ \\ {2} alors que Dg = ℝ",
                        "Oui, car (x² − 4)/(x − 2) se simplifie en x + 2",
                        "Oui, pour tout réel x",
                        "Non, car leurs graphes n'ont aucun point commun"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "f(2) n'existe pas alors que g(2) = 4. Ayant des domaines différents, les deux fonctions ne sont pas égales."
                }
            },
            {
                "stepNumber": 3,
                "stepBadge": "Étape 3/8 · Sur quel ensemble les fonctions f(x) = (x² − 4) / (x − ...",
                "stepTheme": "Sur quel ensemble les fonctions f(x) = (x² − 4) / (x − ...",
                "stepTitle": "Sur quel ensemble les fonctions f(x) = (x² − 4) / (x − ...",
                "paragraphText": "Notion fondamentale :\n• Pour tout x ≠ 2, (x − 2)(x + 2)/(x − 2) = x + 2. Elles sont donc égales sur l'ensemble E = ℝ \\ {2}.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Critère d'égalité de deux fonctions",
                    "formula": "f = g \\iff (D_f = D_g \\quad \\text{et} \\quad \\forall x \\in D_f, f(x) = g(x))",
                    "note": "Deux expressions identiques avec des domaines distincts NE SONT PAS égales."
                },
                "konanTip": "L'Astuce du Professeur Konan : Pour tout x ≠ 2, (x − 2)(x + 2)/(x − 2) = x + 2 !",
                "keyRule": "Pour que deux fonctions soient égales, elles doivent impérativement avoir LE MÊME DOMAINE DE DÉFINITION : Df = Dg !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p11_ex3",
                    "type": "mcq",
                    "prompt": "Sur quel ensemble les fonctions f(x) = (x² − 4) / (x − 2) et g(x) = x + 2 sont-elles rigoureusement égales ?",
                    "options": [
                        "Sur E = ℝ \\ {2}",
                        "Sur ℝ tout entier",
                        "Sur [2 ; +∞[",
                        "Sur {2}"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Pour tout x ≠ 2, (x − 2)(x + 2)/(x − 2) = x + 2. Elles sont donc égales sur l'ensemble E = ℝ \\ {2}."
                }
            },
            {
                "stepNumber": 4,
                "stepBadge": "Étape 4/8 · Soit f(x) = √(x²) et g(x) = x. Ces deux fonctions sont-...",
                "stepTheme": "Soit f(x) = √(x²) et g(x) = x. Ces deux fonctions sont-...",
                "stepTitle": "Soit f(x) = √(x²) et g(x) = x. Ces deux fonctions sont-...",
                "paragraphText": "Notion fondamentale :\n• Pour x = −3, √( (−3)² ) = √9 = 3 ≠ −3. √(x²) = |x|, donc f n'est pas égale à g sur ℝ (elles ne sont égales que sur [0 ; +∞[).\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Critère d'égalité de deux fonctions",
                    "formula": "f = g \\iff (D_f = D_g \\quad \\text{et} \\quad \\forall x \\in D_f, f(x) = g(x))",
                    "note": "Deux expressions identiques avec des domaines distincts NE SONT PAS égales."
                },
                "konanTip": "L'Astuce du Professeur Konan : Pour x = −3, √( (−3)² ) = √9 = 3 ≠ −3 !",
                "keyRule": "Pour que deux fonctions soient égales, elles doivent impérativement avoir LE MÊME DOMAINE DE DÉFINITION : Df = Dg !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p11_ex4",
                    "type": "mcq",
                    "prompt": "Soit f(x) = √(x²) et g(x) = x. Ces deux fonctions sont-elles égales sur ℝ ?",
                    "options": [
                        "Non, car pour x < 0, √(x²) = |x| = −x ≠ x",
                        "Oui, car la racine et le carré s'annulent toujours",
                        "Oui, sur ℝ tout entier",
                        "Non, car Df = [0 ; +∞["
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Pour x = −3, √( (−3)² ) = √9 = 3 ≠ −3. √(x²) = |x|, donc f n'est pas égale à g sur ℝ (elles ne sont égales que sur [0 ; +∞[)."
                }
            },
            {
                "stepNumber": 5,
                "stepBadge": "Étape 5/8 · Soit f(x) = √(x²) et g(x) = |x|. Ces deux fonctions son...",
                "stepTheme": "Soit f(x) = √(x²) et g(x) = |x|. Ces deux fonctions son...",
                "stepTitle": "Soit f(x) = √(x²) et g(x) = |x|. Ces deux fonctions son...",
                "paragraphText": "Notion fondamentale :\n• Par définition de la racine carrée d'un carré réel, √(x²) = |x| pour tout x ∈ ℝ, et les deux domaines valent ℝ.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Critère d'égalité de deux fonctions",
                    "formula": "f = g \\iff (D_f = D_g \\quad \\text{et} \\quad \\forall x \\in D_f, f(x) = g(x))",
                    "note": "Deux expressions identiques avec des domaines distincts NE SONT PAS égales."
                },
                "konanTip": "L'Astuce du Professeur Konan : Par définition de la racine carrée d'un carré réel, √(x²) = |x| pour tout x ∈ ℝ, et les deux domaines valent ℝ !",
                "keyRule": "Pour que deux fonctions soient égales, elles doivent impérativement avoir LE MÊME DOMAINE DE DÉFINITION : Df = Dg !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p11_ex5",
                    "type": "mcq",
                    "prompt": "Soit f(x) = √(x²) et g(x) = |x|. Ces deux fonctions sont-elles égales sur ℝ ?",
                    "options": [
                        "Oui, car Df = Dg = ℝ et pour tout x ∈ ℝ, √(x²) = |x|",
                        "Non, car f comporte une racine carrée",
                        "Non, car la valeur absolue n'est pas une fonction",
                        "Oui, mais uniquement pour x > 0"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Par définition de la racine carrée d'un carré réel, √(x²) = |x| pour tout x ∈ ℝ, et les deux domaines valent ℝ."
                }
            },
            {
                "stepNumber": 6,
                "stepBadge": "Étape 6/8 · Soit f(x) = (√x)² et g(x) = x. Sont-elles égales sur ℝ",
                "stepTheme": "Soit f(x) = (√x)² et g(x) = x. Sont-elles égales sur ℝ",
                "stepTitle": "Soit f(x) = (√x)² et g(x) = x. Sont-elles égales sur ℝ",
                "paragraphText": "Notion fondamentale :\n• f n'est définie que sur [0 ; +∞[ (la racine est calculée en premier), alors que g est définie sur ℝ. Leurs domaines étant différents, f ≠ g.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Critère d'égalité de deux fonctions",
                    "formula": "f = g \\iff (D_f = D_g \\quad \\text{et} \\quad \\forall x \\in D_f, f(x) = g(x))",
                    "note": "Deux expressions identiques avec des domaines distincts NE SONT PAS égales."
                },
                "konanTip": "L'Astuce du Professeur Konan : f n'est définie que sur [0 ; +∞[ (la racine est calculée en premier), alors que g est définie sur ℝ !",
                "keyRule": "Pour que deux fonctions soient égales, elles doivent impérativement avoir LE MÊME DOMAINE DE DÉFINITION : Df = Dg !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p11_ex6",
                    "type": "mcq",
                    "prompt": "Soit f(x) = (√x)² et g(x) = x. Sont-elles égales sur ℝ ?",
                    "options": [
                        "Non, car Df = [0 ; +∞[ alors que Dg = ℝ",
                        "Oui, car (√x)² = x pour tout réel",
                        "Oui, sans restriction",
                        "Non, car (√x)² est toujours négatif"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "f n'est définie que sur [0 ; +∞[ (la racine est calculée en premier), alors que g est définie sur ℝ. Leurs domaines étant différents, f ≠ g."
                }
            },
            {
                "stepNumber": 7,
                "stepBadge": "Étape 7/8 · Soit f(x) = |x| / x et g(x) = 1. Sont-elles égales sur ...",
                "stepTheme": "Soit f(x) = |x| / x et g(x) = 1. Sont-elles égales sur ...",
                "stepTitle": "Soit f(x) = |x| / x et g(x) = 1. Sont-elles égales sur ...",
                "paragraphText": "Notion fondamentale :\n• Sur l'intervalle ouvert ]0 ; +∞[, x est strictement positif, donc |x| = x et f(x) = 1 = g(x). Elles sont égales sur cet ensemble.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Critère d'égalité de deux fonctions",
                    "formula": "f = g \\iff (D_f = D_g \\quad \\text{et} \\quad \\forall x \\in D_f, f(x) = g(x))",
                    "note": "Deux expressions identiques avec des domaines distincts NE SONT PAS égales."
                },
                "konanTip": "L'Astuce du Professeur Konan : Sur l'intervalle ouvert ]0 ; +∞[, x est strictement positif, donc |x| = x et f(x) = 1 = g(x) !",
                "keyRule": "Pour que deux fonctions soient égales, elles doivent impérativement avoir LE MÊME DOMAINE DE DÉFINITION : Df = Dg !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p11_ex7",
                    "type": "mcq",
                    "prompt": "Soit f(x) = |x| / x et g(x) = 1. Sont-elles égales sur ]0 ; +∞[ ?",
                    "options": [
                        "Oui, car pour tout x > 0, |x| = x donc |x|/x = x/x = 1 = g(x)",
                        "Non, car f n'est pas définie en 0",
                        "Non, car f(x) = −1 pour tout x",
                        "Oui sur ℝ tout entier"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Sur l'intervalle ouvert ]0 ; +∞[, x est strictement positif, donc |x| = x et f(x) = 1 = g(x). Elles sont égales sur cet ensemble."
                }
            },
            {
                "stepNumber": 8,
                "stepBadge": "Étape 8/8 · Si deux fonctions ont la même représentation graphique ...",
                "stepTheme": "Si deux fonctions ont la même représentation graphique ...",
                "stepTitle": "Si deux fonctions ont la même représentation graphique ...",
                "paragraphText": "Notion fondamentale :\n• La courbe étant l'ensemble des points (x ; f(x)), deux courbes superposées impliquent Df = Dg et f(x) = g(x) pour tout x : f = g.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Critère d'égalité de deux fonctions",
                    "formula": "f = g \\iff (D_f = D_g \\quad \\text{et} \\quad \\forall x \\in D_f, f(x) = g(x))",
                    "note": "Deux expressions identiques avec des domaines distincts NE SONT PAS égales."
                },
                "konanTip": "L'Astuce du Professeur Konan : La courbe étant l'ensemble des points (x ; f(x)), deux courbes superposées impliquent Df = Dg et f(x) = g(x) pour tout x : f = g !",
                "keyRule": "Pour que deux fonctions soient égales, elles doivent impérativement avoir LE MÊME DOMAINE DE DÉFINITION : Df = Dg !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p11_ex8",
                    "type": "mcq",
                    "prompt": "Si deux fonctions ont la même représentation graphique (exactement la même courbe point par point), que peut-on conclure ?",
                    "options": [
                        "Elles sont rigoureusement égales (f = g)",
                        "Elles ont seulement la même dérivée",
                        "Elles sont opposées",
                        "On ne peut rien conclure"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "La courbe étant l'ensemble des points (x ; f(x)), deux courbes superposées impliquent Df = Dg et f(x) = g(x) pour tout x : f = g."
                }
            }
        ]
    },
    {
        "id": "seconde_c_maths_numerique_ch1_p12_sens_variation_extrema",
        "order": 12,
        "title": "Sens de variation et recherche d'extrema",
        "summary": "Fonctions croissantes, décroissantes, conservation/inversion de l'ordre et recherche de maximum et minimum.",
        "conceptExplanation": "Le sens de variation décrit comment évoluent les images f(x) quand la variable x augmente sur un intervalle I :\n• Fonction croissante sur I : Elle conserve l'ordre. Pour tous réels a et b de I : si a < b, alors f(a) ≤ f(b).\n• Fonction décroissante sur I : Elle inverse l'ordre. Pour tous réels a et b de I : si a < b, alors f(a) ≥ f(b).\n• Maximum M sur I : f(x) ≤ M pour tout x ∈ I, et M est atteint en au moins un point x0 : f(x0) = M.\n• Minimum m sur I : f(x) ≥ m pour tout x ∈ I, et m est atteint en au moins un point x1 : f(x1) = m.",
        "keyRule": "Une fonction croissante CONSERVE le sens des inégalités. Une fonction décroissante INVERSE le sens des inégalités !",
        "formula": {
            "name": "Définition de la croissance et décroissance",
            "formula": "a < b \\implies f(a) \\le f(b) \\; (\\text{croissante}) \\quad ; \\quad a < b \\implies f(a) \\ge f(b) \\; (\\text{décroissante})",
            "note": "Maximum M : \\forall x, f(x) \\le M et \\exists x_0, f(x_0) = M."
        },
        "workedExample": {
            "title": "Application guidée : Démonstration du sens de variation",
            "statement": "Soit f(x) = −3x + 7. Démontre rigoureusement que f est strictement décroissante sur ℝ.",
            "methodSteps": [
                "1. Choisir deux réels quelconques a et b tels que a < b.",
                "2. Appliquer les opérations successives pour construire f(a) et f(b) :",
                "   • Multiplier par −3 (nombre négatif) : l'inégalité s'inverse : −3a > −3b.",
                "   • Ajouter 7 des deux côtés : −3a + 7 > −3b + 7, soit f(a) > f(b).",
                "3. Conclure : Comme a < b implique f(a) > f(b), f est strictement décroissante sur ℝ."
            ],
            "conclusion": "f inverse le sens des inégalités, elle est donc strictement décroissante sur ℝ."
        },
        "exercises": [
            {
                "id": "seconde_c_maths_numerique_ch1_p12_ex1",
                "type": "mcq",
                "prompt": "Par définition, que signifie qu'une fonction f est strictement croissante sur un intervalle I ?",
                "options": [
                    "Pour tous a, b dans I : si a < b, alors f(a) < f(b) (elle conserve strictement l'ordre)",
                    "Pour tous a, b dans I : si a < b, alors f(a) > f(b)",
                    "Que toutes les images sont strictement positives",
                    "Que la courbe monte puis redescend"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Une fonction croissante conserve l'ordre : les images sont classées dans le même ordre que les antécédents."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p12_ex2",
                "type": "mcq",
                "prompt": "Si f est strictement décroissante sur [−2 ; 5] et que −1 < 3, quelle relation est vraie ?",
                "options": [
                    "f(−1) > f(3)",
                    "f(−1) < f(3)",
                    "f(−1) = f(3)",
                    "On ne peut pas comparer sans l'expression"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Une fonction décroissante inverse obligatoirement le sens des inégalités : comme −1 < 3, f(−1) > f(3)."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p12_ex3",
                "type": "mcq",
                "prompt": "Soit la fonction carrée f(x) = x². Quel est son sens de variation sur ]−∞ ; 0] ?",
                "options": [
                    "Strictement décroissante",
                    "Strictement croissante",
                    "Constante",
                    "Périodique"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Pour a < b ≤ 0, a² > b² (les carrés de négatifs sont rangés dans l'ordre inverse) : la fonction carrée est décroissante sur ]−∞ ; 0]."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p12_ex4",
                "type": "mcq",
                "prompt": "Soit la fonction g(x) = −(x − 3)² + 7 définie sur ℝ. Quel est son extremum ?",
                "options": [
                    "Un maximum égal à 7, atteint en x = 3",
                    "Un minimum égal à 7, atteint en x = 3",
                    "Un maximum égal à 3, atteint en x = 7",
                    "Elle n'admet aucun extremum"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Pour tout x ∈ ℝ, −(x − 3)² ≤ 0, donc g(x) ≤ 7. De plus g(3) = 7. 7 est donc le maximum absolu de g sur ℝ, atteint en x = 3."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p12_ex5",
                "type": "mcq",
                "prompt": "Soit h(x) = 2(x − 1)² + 5 définie sur ℝ. Quel est son extremum ?",
                "options": [
                    "Un minimum égal à 5, atteint en x = 1",
                    "Un maximum égal à 5, atteint en x = 1",
                    "Un minimum égal à 1, atteint en x = 5",
                    "Un maximum égal à 2"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Pour tout x, 2(x − 1)² ≥ 0 donc h(x) ≥ 5, et h(1) = 5. 5 est donc le minimum absolu de h, atteint en x = 1."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p12_ex6",
                "type": "mcq",
                "prompt": "Pour prouver qu'un nombre M est le maximum de f sur I, que doit-on démontrer ?",
                "options": [
                    "Que pour tout x ∈ I, f(x) ≤ M, ET qu'il existe un x0 ∈ I tel que f(x0) = M",
                    "Uniquement que f(x) ≤ M",
                    "Que f est croissante sur tout l'intervalle",
                    "Que M est positif"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Pour être le maximum (et pas seulement un majorant), la valeur M doit obligatoirement être atteinte au moins une fois par la fonction."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p12_ex7",
                "type": "mcq",
                "prompt": "Que représente graphiquement le maximum d'une fonction sur un intervalle ?",
                "options": [
                    "L'ordonnée du point le plus élevé de la courbe sur cet intervalle",
                    "L'abscisse du point le plus à droite",
                    "Le point d'intersection avec l'axe des ordonnées",
                    "La longueur totale de la courbe"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Le maximum M est la plus grande ordonnée y atteinte par les points de la courbe."
            },
            {
                "id": "seconde_c_maths_numerique_ch1_p12_ex8",
                "type": "mcq",
                "prompt": "Soit f une fonction croissante sur [0 ; 4]. Si f(0) = −2 et f(4) = 5, quel est l'encadrement de f(x) pour x ∈ [0 ; 4] ?",
                "options": [
                    "−2 ≤ f(x) ≤ 5",
                    "0 ≤ f(x) ≤ 4",
                    "f(x) ≥ 5",
                    "f(x) ≤ −2"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Comme f est croissante sur [0 ; 4], pour tout x ∈ [0 ; 4], f(0) ≤ f(x) ≤ f(4), soit −2 ≤ f(x) ≤ 5."
            }
        ],
        "formulas": [
            {
                "name": "Définition de la croissance et décroissance",
                "formula": "a < b \\implies f(a) \\le f(b) \\; (\\text{croissante}) \\quad ; \\quad a < b \\implies f(a) \\ge f(b) \\; (\\text{décroissante})",
                "note": "Maximum M : \\forall x, f(x) \\le M et \\exists x_0, f(x_0) = M."
            }
        ],
        "structuredSteps": [
            {
                "stepNumber": 1,
                "stepBadge": "Étape 1/8 · Par définition, que signifie qu'une fonction f est stri...",
                "stepTheme": "Par définition, que signifie qu'une fonction f est stri...",
                "stepTitle": "Par définition, que signifie qu'une fonction f est stri...",
                "paragraphText": "Notion fondamentale :\n• Une fonction croissante conserve l'ordre : les images sont classées dans le même ordre que les antécédents.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Définition de la croissance et décroissance",
                    "formula": "a < b \\implies f(a) \\le f(b) \\; (\\text{croissante}) \\quad ; \\quad a < b \\implies f(a) \\ge f(b) \\; (\\text{décroissante})",
                    "note": "Maximum M : \\forall x, f(x) \\le M et \\exists x_0, f(x_0) = M."
                },
                "konanTip": "L'Astuce du Professeur Konan : Une fonction croissante conserve l'ordre : les images sont classées dans le même ordre que les antécédents !",
                "keyRule": "Une fonction croissante CONSERVE le sens des inégalités. Une fonction décroissante INVERSE le sens des inégalités !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p12_ex1",
                    "type": "mcq",
                    "prompt": "Par définition, que signifie qu'une fonction f est strictement croissante sur un intervalle I ?",
                    "options": [
                        "Pour tous a, b dans I : si a < b, alors f(a) < f(b) (elle conserve strictement l'ordre)",
                        "Pour tous a, b dans I : si a < b, alors f(a) > f(b)",
                        "Que toutes les images sont strictement positives",
                        "Que la courbe monte puis redescend"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Une fonction croissante conserve l'ordre : les images sont classées dans le même ordre que les antécédents."
                }
            },
            {
                "stepNumber": 2,
                "stepBadge": "Étape 2/8 · Si f est strictement décroissante sur [−2 ; 5] et que −...",
                "stepTheme": "Si f est strictement décroissante sur [−2 ; 5] et que −...",
                "stepTitle": "Si f est strictement décroissante sur [−2 ; 5] et que −...",
                "paragraphText": "Notion fondamentale :\n• Une fonction décroissante inverse obligatoirement le sens des inégalités : comme −1 < 3, f(−1) > f(3).\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Définition de la croissance et décroissance",
                    "formula": "a < b \\implies f(a) \\le f(b) \\; (\\text{croissante}) \\quad ; \\quad a < b \\implies f(a) \\ge f(b) \\; (\\text{décroissante})",
                    "note": "Maximum M : \\forall x, f(x) \\le M et \\exists x_0, f(x_0) = M."
                },
                "konanTip": "L'Astuce du Professeur Konan : Une fonction décroissante inverse obligatoirement le sens des inégalités : comme −1 < 3, f(−1) > f(3) !",
                "keyRule": "Une fonction croissante CONSERVE le sens des inégalités. Une fonction décroissante INVERSE le sens des inégalités !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p12_ex2",
                    "type": "mcq",
                    "prompt": "Si f est strictement décroissante sur [−2 ; 5] et que −1 < 3, quelle relation est vraie ?",
                    "options": [
                        "f(−1) > f(3)",
                        "f(−1) < f(3)",
                        "f(−1) = f(3)",
                        "On ne peut pas comparer sans l'expression"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Une fonction décroissante inverse obligatoirement le sens des inégalités : comme −1 < 3, f(−1) > f(3)."
                }
            },
            {
                "stepNumber": 3,
                "stepBadge": "Étape 3/8 · Soit la fonction carrée f(x) = x². Quel est son sens de...",
                "stepTheme": "Soit la fonction carrée f(x) = x². Quel est son sens de...",
                "stepTitle": "Soit la fonction carrée f(x) = x². Quel est son sens de...",
                "paragraphText": "Notion fondamentale :\n• Pour a < b ≤ 0, a² > b² (les carrés de négatifs sont rangés dans l'ordre inverse) : la fonction carrée est décroissante sur ]−∞ ; 0].\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Définition de la croissance et décroissance",
                    "formula": "a < b \\implies f(a) \\le f(b) \\; (\\text{croissante}) \\quad ; \\quad a < b \\implies f(a) \\ge f(b) \\; (\\text{décroissante})",
                    "note": "Maximum M : \\forall x, f(x) \\le M et \\exists x_0, f(x_0) = M."
                },
                "konanTip": "L'Astuce du Professeur Konan : Pour a < b ≤ 0, a² > b² (les carrés de négatifs sont rangés dans l'ordre inverse) : la fonction carrée est décroissante sur ]−∞ ; 0] !",
                "keyRule": "Une fonction croissante CONSERVE le sens des inégalités. Une fonction décroissante INVERSE le sens des inégalités !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p12_ex3",
                    "type": "mcq",
                    "prompt": "Soit la fonction carrée f(x) = x². Quel est son sens de variation sur ]−∞ ; 0] ?",
                    "options": [
                        "Strictement décroissante",
                        "Strictement croissante",
                        "Constante",
                        "Périodique"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Pour a < b ≤ 0, a² > b² (les carrés de négatifs sont rangés dans l'ordre inverse) : la fonction carrée est décroissante sur ]−∞ ; 0]."
                }
            },
            {
                "stepNumber": 4,
                "stepBadge": "Étape 4/8 · Soit la fonction g(x) = −(x − 3)² + 7 définie sur ℝ. Qu...",
                "stepTheme": "Soit la fonction g(x) = −(x − 3)² + 7 définie sur ℝ. Qu...",
                "stepTitle": "Soit la fonction g(x) = −(x − 3)² + 7 définie sur ℝ. Qu...",
                "paragraphText": "Notion fondamentale :\n• Pour tout x ∈ ℝ, −(x − 3)² ≤ 0, donc g(x) ≤ 7. De plus g(3) = 7. 7 est donc le maximum absolu de g sur ℝ, atteint en x = 3.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Définition de la croissance et décroissance",
                    "formula": "a < b \\implies f(a) \\le f(b) \\; (\\text{croissante}) \\quad ; \\quad a < b \\implies f(a) \\ge f(b) \\; (\\text{décroissante})",
                    "note": "Maximum M : \\forall x, f(x) \\le M et \\exists x_0, f(x_0) = M."
                },
                "konanTip": "L'Astuce du Professeur Konan : Pour tout x ∈ ℝ, −(x − 3)² ≤ 0, donc g(x) ≤ 7 !",
                "keyRule": "Une fonction croissante CONSERVE le sens des inégalités. Une fonction décroissante INVERSE le sens des inégalités !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p12_ex4",
                    "type": "mcq",
                    "prompt": "Soit la fonction g(x) = −(x − 3)² + 7 définie sur ℝ. Quel est son extremum ?",
                    "options": [
                        "Un maximum égal à 7, atteint en x = 3",
                        "Un minimum égal à 7, atteint en x = 3",
                        "Un maximum égal à 3, atteint en x = 7",
                        "Elle n'admet aucun extremum"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Pour tout x ∈ ℝ, −(x − 3)² ≤ 0, donc g(x) ≤ 7. De plus g(3) = 7. 7 est donc le maximum absolu de g sur ℝ, atteint en x = 3."
                }
            },
            {
                "stepNumber": 5,
                "stepBadge": "Étape 5/8 · Soit h(x) = 2(x − 1)² + 5 définie sur ℝ. Quel est son e...",
                "stepTheme": "Soit h(x) = 2(x − 1)² + 5 définie sur ℝ. Quel est son e...",
                "stepTitle": "Soit h(x) = 2(x − 1)² + 5 définie sur ℝ. Quel est son e...",
                "paragraphText": "Notion fondamentale :\n• Pour tout x, 2(x − 1)² ≥ 0 donc h(x) ≥ 5, et h(1) = 5. 5 est donc le minimum absolu de h, atteint en x = 1.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Définition de la croissance et décroissance",
                    "formula": "a < b \\implies f(a) \\le f(b) \\; (\\text{croissante}) \\quad ; \\quad a < b \\implies f(a) \\ge f(b) \\; (\\text{décroissante})",
                    "note": "Maximum M : \\forall x, f(x) \\le M et \\exists x_0, f(x_0) = M."
                },
                "konanTip": "L'Astuce du Professeur Konan : Pour tout x, 2(x − 1)² ≥ 0 donc h(x) ≥ 5, et h(1) = 5 !",
                "keyRule": "Une fonction croissante CONSERVE le sens des inégalités. Une fonction décroissante INVERSE le sens des inégalités !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p12_ex5",
                    "type": "mcq",
                    "prompt": "Soit h(x) = 2(x − 1)² + 5 définie sur ℝ. Quel est son extremum ?",
                    "options": [
                        "Un minimum égal à 5, atteint en x = 1",
                        "Un maximum égal à 5, atteint en x = 1",
                        "Un minimum égal à 1, atteint en x = 5",
                        "Un maximum égal à 2"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Pour tout x, 2(x − 1)² ≥ 0 donc h(x) ≥ 5, et h(1) = 5. 5 est donc le minimum absolu de h, atteint en x = 1."
                }
            },
            {
                "stepNumber": 6,
                "stepBadge": "Étape 6/8 · Pour prouver qu'un nombre M est le maximum de f sur I, ...",
                "stepTheme": "Pour prouver qu'un nombre M est le maximum de f sur I, ...",
                "stepTitle": "Pour prouver qu'un nombre M est le maximum de f sur I, ...",
                "paragraphText": "Notion fondamentale :\n• Pour être le maximum (et pas seulement un majorant), la valeur M doit obligatoirement être atteinte au moins une fois par la fonction.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Définition de la croissance et décroissance",
                    "formula": "a < b \\implies f(a) \\le f(b) \\; (\\text{croissante}) \\quad ; \\quad a < b \\implies f(a) \\ge f(b) \\; (\\text{décroissante})",
                    "note": "Maximum M : \\forall x, f(x) \\le M et \\exists x_0, f(x_0) = M."
                },
                "konanTip": "L'Astuce du Professeur Konan : Pour être le maximum (et pas seulement un majorant), la valeur M doit obligatoirement être atteinte au moins une fois par la fonction !",
                "keyRule": "Une fonction croissante CONSERVE le sens des inégalités. Une fonction décroissante INVERSE le sens des inégalités !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p12_ex6",
                    "type": "mcq",
                    "prompt": "Pour prouver qu'un nombre M est le maximum de f sur I, que doit-on démontrer ?",
                    "options": [
                        "Que pour tout x ∈ I, f(x) ≤ M, ET qu'il existe un x0 ∈ I tel que f(x0) = M",
                        "Uniquement que f(x) ≤ M",
                        "Que f est croissante sur tout l'intervalle",
                        "Que M est positif"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Pour être le maximum (et pas seulement un majorant), la valeur M doit obligatoirement être atteinte au moins une fois par la fonction."
                }
            },
            {
                "stepNumber": 7,
                "stepBadge": "Étape 7/8 · Que représente graphiquement le maximum d'une fonction ...",
                "stepTheme": "Que représente graphiquement le maximum d'une fonction ...",
                "stepTitle": "Que représente graphiquement le maximum d'une fonction ...",
                "paragraphText": "Notion fondamentale :\n• Le maximum M est la plus grande ordonnée y atteinte par les points de la courbe.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Définition de la croissance et décroissance",
                    "formula": "a < b \\implies f(a) \\le f(b) \\; (\\text{croissante}) \\quad ; \\quad a < b \\implies f(a) \\ge f(b) \\; (\\text{décroissante})",
                    "note": "Maximum M : \\forall x, f(x) \\le M et \\exists x_0, f(x_0) = M."
                },
                "konanTip": "L'Astuce du Professeur Konan : Le maximum M est la plus grande ordonnée y atteinte par les points de la courbe !",
                "keyRule": "Une fonction croissante CONSERVE le sens des inégalités. Une fonction décroissante INVERSE le sens des inégalités !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p12_ex7",
                    "type": "mcq",
                    "prompt": "Que représente graphiquement le maximum d'une fonction sur un intervalle ?",
                    "options": [
                        "L'ordonnée du point le plus élevé de la courbe sur cet intervalle",
                        "L'abscisse du point le plus à droite",
                        "Le point d'intersection avec l'axe des ordonnées",
                        "La longueur totale de la courbe"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Le maximum M est la plus grande ordonnée y atteinte par les points de la courbe."
                }
            },
            {
                "stepNumber": 8,
                "stepBadge": "Étape 8/8 · Soit f une fonction croissante sur [0 ; 4]. Si f(0) = −...",
                "stepTheme": "Soit f une fonction croissante sur [0 ; 4]. Si f(0) = −...",
                "stepTitle": "Soit f une fonction croissante sur [0 ; 4]. Si f(0) = −...",
                "paragraphText": "Notion fondamentale :\n• Comme f est croissante sur [0 ; 4], pour tout x ∈ [0 ; 4], f(0) ≤ f(x) ≤ f(4), soit −2 ≤ f(x) ≤ 5.\n• Règle : Appliquer la méthode officielle et justifier chaque étape du calcul.\n• Rigueur : Ne jamais omettre les contraintes d'existence ou les parenthèses.",
                "formula": {
                    "name": "Définition de la croissance et décroissance",
                    "formula": "a < b \\implies f(a) \\le f(b) \\; (\\text{croissante}) \\quad ; \\quad a < b \\implies f(a) \\ge f(b) \\; (\\text{décroissante})",
                    "note": "Maximum M : \\forall x, f(x) \\le M et \\exists x_0, f(x_0) = M."
                },
                "konanTip": "L'Astuce du Professeur Konan : Comme f est croissante sur [0 ; 4], pour tout x ∈ [0 ; 4], f(0) ≤ f(x) ≤ f(4), soit −2 ≤ f(x) ≤ 5 !",
                "keyRule": "Une fonction croissante CONSERVE le sens des inégalités. Une fonction décroissante INVERSE le sens des inégalités !",
                "exercise": {
                    "id": "seconde_c_maths_numerique_ch1_p12_ex8",
                    "type": "mcq",
                    "prompt": "Soit f une fonction croissante sur [0 ; 4]. Si f(0) = −2 et f(4) = 5, quel est l'encadrement de f(x) pour x ∈ [0 ; 4] ?",
                    "options": [
                        "−2 ≤ f(x) ≤ 5",
                        "0 ≤ f(x) ≤ 4",
                        "f(x) ≥ 5",
                        "f(x) ≤ −2"
                    ],
                    "correctAnswerIndex": 0,
                    "explanation": "Comme f est croissante sur [0 ; 4], pour tout x ∈ [0 ; 4], f(0) ≤ f(x) ≤ f(4), soit −2 ≤ f(x) ≤ 5."
                }
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

export const maths2deCFonctionsElementairesChapter: CurriculumChapter = {
  "id": "seconde_c_maths_numerique_ch5_fonctions_elementaires",
  "subjectId": "maths",
  "gradeLevel": "seconde_c",
  "order": 13,
  "officialVolumeHours": 12,
  "title": "Leçon 5 — Étude de fonctions élémentaires",
  "summary": "Étude approfondie des fonctions affines par intervalles, écriture d'expressions avec valeurs absolues par morceaux, fonction partie entière E(x) et sa représentation en escalier, étude complète des fonctions de référence (carré, valeur absolue, racine carrée, inverse, cube), leurs propriétés de symétrie, parité et tableaux de variations.",
  "points": [
    {
      "id": "seconde_c_maths_numerique_ch5_p1",
      "order": 1,
      "title": "Fonctions affines par intervalles et fonction partie entière",
      "summary": "Définition d'une fonction affine par intervalles, écriture d'une fonction avec valeurs absolues sous forme explicite par morceaux, fonction partie entière E(x), calculs sur réels positifs et négatifs, et tracés graphiques (segments, demi-droites et escaliers).",
      "conceptExplanation": "Dans de nombreuses situations concrètes (tarifications par paliers, forfaits de communication, phénomènes à seuil), une même formule mathématique ne suffit pas à décrire le système sur tout son domaine. On utilise alors des fonctions définies par morceaux.\n\n1. Définition d'une fonction affine par intervalles :\nUne fonction f est dite affine par intervalles si son ensemble de définition est une réunion d'intervalles disjoints sur chacun desquels f coïncide avec une fonction affine (de la forme x ↦ ax + b).\n- Sa représentation graphique est une réunion de segments de droites ou de demi-droites.\n\n2. Fonctions avec valeurs absolues comme fonctions affines par morceaux :\nToute fonction comportant une valeur absolue du type f(x) = |ax + b| est une fonction affine par intervalles.\n- Méthode pour expliciter f(x) sans les barres de valeur absolue :\n  1) On cherche la racine où l'expression s'annule : ax + b = 0 ⟺ x = −b/a.\n  2) On étudie le signe de ax + b à l'aide d'un tableau de signes.\n  3) Sur l'intervalle où ax + b ≥ 0 : |ax + b| = ax + b.\n  4) Sur l'intervalle où ax + b ≤ 0 : |ax + b| = −(ax + b) = −ax − b.\n  La courbe obtenue est typiquement en forme de « V », continue au point de raccord x = −b/a.\n\n3. La fonction partie entière E(x) :\n- Définition fondamentale : La partie entière d'un nombre réel x est le plus grand entier relatif inférieur ou égal à x. On la note E(x) (ou parfois [x]).\n- Propriété caractéristique d'encadrement : Pour tout réel x, il existe un UNIQUE entier relatif z ∈ ℤ tel que :\n  z ≤ x < z + 1, et alors E(x) = z.\n- Exemples fondamentaux :\n  * Pour les nombres positifs : E(7,8) = 7 car 7 ≤ 7,8 < 8 ; E(9) = 9 car 9 ≤ 9 < 10 ; E(31,365) = 31 car 31 ≤ 31,365 < 32.\n  * Pour les nombres négatifs (attention au piège !) : E(−4,02) = −5 car −5 ≤ −4,02 < −4 (et non −4 !).\n  * Pour tout entier n ∈ ℤ : E(n) = n.\n- Représentation graphique en « escalier » :\n  Sur chaque intervalle semi-ouvert [k ; k + 1[ (avec k ∈ ℤ), la fonction est constante et vaut k : E(x) = k.\n  Graphiquement, la courbe est formée d'une infinité de paliers horizontaux disjoints, fermés à gauche (point plein) et ouverts à droite (point évidé ou crochet).",
      "formulas": [
        {
          "name": "Encadrement de la partie entière",
          "formula": "z ≤ x < z + 1 ⟺ E(x) = z, avec z ∈ ℤ",
          "note": "Unique entier relatif inférieur ou égal à x."
        },
        {
          "name": "Propriété fondamentale de E(x)",
          "formula": "x − 1 < E(x) ≤ x",
          "note": "L'écart entre un nombre réel et sa partie entière est toujours dans [0 ; 1[."
        },
        {
          "name": "Valeur absolue par morceaux",
          "formula": "|ax + b| = ax + b si x ≥ −b/a, et −(ax + b) si x < −b/a",
          "note": "Changement d'expression affine au point d'annulation."
        }
      ],
      "keyRule": "Pour tout réel x, E(x) est le plus grand entier relatif immédiatement à sa gauche ou égal à lui sur l'axe numérique. Pour un nombre négatif, on descend toujours à l'entier strictement inférieur : E(−3,4) = −4.",
      "workedExample": {
        "title": "Écriture par intervalles d'une fonction valeur absolue et calculs de partie entière",
        "statement": "1) Soit la fonction f(x) = |2x − 6| + 1 définie sur ℝ. Écris f(x) sans valeur absolue sous forme d'une fonction affine par intervalles. 2) Calcule les valeurs exactes de E(4,7), E(−2,1) et E(5).",
        "methodSteps": [
          "1. Annuler l'expression sous la valeur absolue : 2x − 6 = 0 ⟺ 2x = 6 ⟺ x = 3.",
          "2. Étudier le signe de 2x − 6 : Comme a = 2 > 0, 2x − 6 est négatif pour x ≤ 3 et positif pour x ≥ 3.",
          "3. Expliciter f(x) sur ]−∞ ; 3] : |2x − 6| = −(2x − 6) = −2x + 6. Donc f(x) = (−2x + 6) + 1 = −2x + 7.",
          "4. Expliciter f(x) sur [3 ; +∞[ : |2x − 6| = 2x − 6. Donc f(x) = (2x − 6) + 1 = 2x − 5.",
          "   Vérification au raccord x = 3 : −2(3) + 7 = 1 et 2(3) − 5 = 1. La fonction est continue en 3.",
          "5. Calculer les parties entières :",
          "   - Pour 4,7 : 4 ≤ 4,7 < 5, donc E(4,7) = 4.",
          "   - Pour −2,1 : −3 ≤ −2,1 < −2, donc E(−2,1) = −3.",
          "   - Pour 5 : 5 est un entier, donc E(5) = 5."
        ],
        "conclusion": "f(x) = −2x + 7 si x ≤ 3, et f(x) = 2x − 5 si x ≥ 3. Les parties entières sont E(4,7) = 4, E(−2,1) = −3 et E(5) = 5."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_ch5_p1_ex1",
          "type": "mcq",
          "prompt": "Quelle est la valeur de la partie entière E(−3,8) ?",
          "options": [
            "−4",
            "−3",
            "−3,8",
            "3"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, E(x) est l'entier z tel que z ≤ x < z + 1. Comme −4 ≤ −3,8 < −3, on a E(−3,8) = −4."
        },
        {
          "id": "seconde_c_maths_numerique_ch5_p1_ex2",
          "type": "mcq",
          "prompt": "Quelle est la valeur de la partie entière E(8,001) ?",
          "options": [
            "8",
            "9",
            "8,001",
            "0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme 8 ≤ 8,001 < 9, le plus grand entier inférieur ou égal à 8,001 est 8 : E(8,001) = 8."
        },
        {
          "id": "seconde_c_maths_numerique_ch5_p1_ex3",
          "type": "mcq",
          "prompt": "Pour tout réel x ∈ ]−∞ ; 2], quelle est l'expression simplifiée de f(x) = |3x − 6| sans barres de valeur absolue ?",
          "options": [
            "−3x + 6",
            "3x − 6",
            "3x + 6",
            "−3x − 6"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour x ≤ 2, 3x − 6 ≤ 0. La valeur absolue d'un nombre négatif est son opposé : |3x − 6| = −(3x − 6) = −3x + 6."
        },
        {
          "id": "seconde_c_maths_numerique_ch5_p1_ex4",
          "type": "mcq",
          "prompt": "Quelle est l'allure de la courbe représentative de la fonction partie entière E(x) dans un repère ?",
          "options": [
            "Une suite de paliers horizontaux en forme d'escalier",
            "Une parabole orientée vers le haut",
            "Une ligne droite continue de pente 1",
            "Une hyperbole à deux branches"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sur chaque intervalle [k ; k + 1[ avec k ∈ ℤ, E(x) est constante et vaut k. Sa représentation forme une succession de segments horizontaux disjoints en escalier."
        },
        {
          "id": "seconde_c_maths_numerique_ch5_p1_ex5",
          "type": "mcq",
          "prompt": "Soit f(x) = 2x + 1 si x < 1 et f(x) = −x + 4 si x ≥ 1. Quelle est la valeur de f(1) ?",
          "options": [
            "3",
            "2",
            "4",
            "f n'est pas définie en 1"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour x = 1, on utilise la formule correspondant à x ≥ 1 : f(1) = −(1) + 4 = 3."
        },
        {
          "id": "seconde_c_maths_numerique_ch5_p1_ex6",
          "type": "mcq",
          "prompt": "Pour tout réel x, quel est l'encadrement exact de la différence x − E(x) ?",
          "options": [
            "0 ≤ x − E(x) < 1",
            "−1 < x − E(x) ≤ 0",
            "0 < x − E(x) ≤ 1",
            "x − E(x) = 0 toujours"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Puisque E(x) ≤ x < E(x) + 1, en soustrayant E(x) partout on obtient : 0 ≤ x − E(x) < 1. Cette quantité est la partie décimale de x."
        },
        {
          "id": "seconde_c_maths_numerique_ch5_p1_ex7",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions réelles de l'équation E(x) = 4 ?",
          "options": [
            "[4 ; 5[",
            "{4}",
            "[4 ; 5]",
            "]3 ; 4]"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après la propriété caractéristique, E(x) = 4 si et seulement si 4 ≤ x < 4 + 1 = 5, soit l'intervalle semi-ouvert [4 ; 5[."
        },
        {
          "id": "seconde_c_maths_numerique_ch5_p1_ex8",
          "type": "mcq",
          "prompt": "Une communication coûte un forfait fixe de 300 F CFA pour les 2 premières heures (120 min), puis 25 F CFA par minute supplémentaire x. Quelle est l'expression du coût total C(t) pour t > 120 minutes ?",
          "options": [
            "300 + 25(t − 120)",
            "300 + 25t",
            "25t − 300",
            "300 × 25(t − 120)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le dépassement est de (t − 120) minutes. Le supplément est de 25(t − 120) F CFA, s'ajoutant au forfait de 300 F CFA : C(t) = 300 + 25(t − 120)."
        }
      ]
    },
    {
      "id": "seconde_c_maths_numerique_ch5_p2",
      "order": 2,
      "title": "Fonctions de référence : carré, valeur absolue, racine carrée, inverse et cube",
      "summary": "Étude comparative complète des cinq fonctions de référence : domaines de définition, parité, sens de variation, tableaux de variations et propriétés géométriques des courbes associées.",
      "conceptExplanation": "Les fonctions élémentaires de référence constituent le répertoire fondamental à partir duquel toutes les autres fonctions usuelles sont construites et comparées.\n\n1. La fonction carré : f(x) = x²\n- Ensemble de définition : D = ℝ.\n- Parité : Paire car pour tout x ∈ ℝ, (−x)² = x². Sa courbe est une parabole de sommet O(0 ; 0), symétrique par rapport à l'axe des ordonnées (Oy).\n- Variations : Strictement décroissante sur ]−∞ ; 0], strictement croissante sur [0 ; +∞[.\n- Extremum : Admet un minimum absolu égal à 0 en x = 0.\n\n2. La fonction valeur absolue : f(x) = |x|\n- Ensemble de définition : D = ℝ.\n- Parité : Paire car |−x| = |x|. Sa courbe forme un « V », symétrique par rapport à l'axe (Oy).\n- Variations : Strictement décroissante sur ]−∞ ; 0] (f(x) = −x), strictement croissante sur [0 ; +∞[ (f(x) = x).\n- Extremum : Admet un minimum absolu égal à 0 en x = 0.\n\n3. La fonction racine carrée : f(x) = √x\n- Ensemble de définition : D = ℝ₊ = [0 ; +∞[ (la racine d'un nombre strictement négatif n'existe pas dans ℝ).\n- Variations : Strictement croissante sur [0 ; +∞[.\n- Extremum : Minimum égal à 0 atteint en x = 0.\n- Courbe : Demi-parabole d'axe horizontal (Ox), issue de l'origine O(0 ; 0).\n\n4. La fonction inverse : f(x) = 1/x\n- Ensemble de définition : D = ℝ* = ]−∞ ; 0[ ∪ ]0 ; +∞[ (0 est valeur interdite).\n- Parité : Impaire car 1/(−x) = −(1/x). Sa courbe est une hyperbole équilatère, symétrique par rapport à l'origine O(0 ; 0).\n- Variations : Strictement décroissante sur ]−∞ ; 0[ ET strictement décroissante sur ]0 ; +∞[.\n- Attention : On ne dit JAMAIS que la fonction inverse est « décroissante sur ℝ* », mais bien décroissante séparément sur chacun des deux intervalles ouverts.\n- Asymptotes : L'axe des ordonnées (x = 0) et l'axe des abscisses (y = 0).\n\n5. La fonction cube : f(x) = x³\n- Ensemble de définition : D = ℝ.\n- Parité : Impaire car (−x)³ = −x³. Sa courbe est symétrique par rapport à l'origine O(0 ; 0).\n- Variations : Strictement croissante sur tout ℝ.\n- Signe : Négative pour x < 0, nulle en 0, positive pour x > 0.",
      "formulas": [
        {
          "name": "Parité et symétrie",
          "formula": "f(−x) = f(x) ⟹ Paire (axe Oy) ; f(−x) = −f(x) ⟹ Impaire (centre O)",
          "note": "x² et |x| sont paires ; 1/x et x³ sont impaires."
        },
        {
          "name": "Règle de comparaison des puissances sur [0 ; 1]",
          "formula": "Si 0 ≤ x ≤ 1 : x³ ≤ x² ≤ x ≤ √x",
          "note": "Sur [0 ; 1], la racine domine les puissances."
        },
        {
          "name": "Règle de comparaison des puissances sur [1 ; +∞[",
          "formula": "Si x ≥ 1 : √x ≤ x ≤ x² ≤ x³",
          "note": "Sur [1 ; +∞[, l'ordre des exposants est respecté."
        }
      ],
      "keyRule": "La fonction carré et la fonction valeur absolue sont paires (symétrie axiale par rapport à Oy). La fonction inverse et la fonction cube sont impaires (symétrie centrale par rapport à O). La fonction inverse n'est jamais définie en 0.",
      "workedExample": {
        "title": "Comparaison de réels à l'aide des variations des fonctions de référence",
        "statement": "Sans utiliser de calculatrice : 1) Compare (−3,14)² et (−3,15)². 2) Compare 1 / (√2 + 1) et 1 / (√3 + 1). 3) Détermine le sens de variation et les images aux bornes de la fonction f(x) = x³ sur l'intervalle [−2 ; 3].",
        "methodSteps": [
          "1. Comparer (−3,14)² et (−3,15)² :",
          "   On a −3,15 < −3,14 ≤ 0.",
          "   La fonction carré x ↦ x² est strictement décroissante sur ]−∞ ; 0], elle inverse l'ordre des nombres négatifs.",
          "   Donc : (−3,15)² > (−3,14)².",
          "2. Comparer 1 / (√2 + 1) et 1 / (√3 + 1) :",
          "   On sait que 2 < 3, et comme la fonction racine carrée est strictement croissante sur [0 ; +∞[, √2 < √3.",
          "   On ajoute 1 : 0 < √2 + 1 < √3 + 1.",
          "   La fonction inverse x ↦ 1/x est strictement décroissante sur ]0 ; +∞[, elle inverse l'ordre :",
          "   1 / (√2 + 1) > 1 / (√3 + 1).",
          "3. Variations de la fonction cube f(x) = x³ sur [−2 ; 3] :",
          "   La fonction cube est strictement croissante sur tout ℝ, donc sur [−2 ; 3].",
          "   f(−2) = (−2)³ = −8 et f(3) = 3³ = 27.",
          "   Pour tout x ∈ [−2 ; 3] : −8 ≤ x³ ≤ 27."
        ],
        "conclusion": "(−3,15)² > (−3,14)² ; 1/(√2 + 1) > 1/(√3 + 1) ; et sur [−2 ; 3], x³ est strictement croissante de −8 à 27."
      },
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_ch5_p2_ex1",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de définition de la fonction racine carrée f(x) = √x ?",
          "options": [
            "[0 ; +∞[",
            "ℝ",
            "]0 ; +∞[",
            "]−∞ ; 0]"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans l'ensemble des réels ℝ, la racine carrée n'est définie que pour des nombres positifs ou nuls : D = [0 ; +∞[ = ℝ₊."
        },
        {
          "id": "seconde_c_maths_numerique_ch5_p2_ex2",
          "type": "mcq",
          "prompt": "Quelle propriété géométrique de symétrie possède la courbe de la fonction cube f(x) = x³ ?",
          "options": [
            "Symétrique par rapport à l'origine O(0 ; 0)",
            "Symétrique par rapport à l'axe des ordonnées (Oy)",
            "Symétrique par rapport à l'axe des abscisses (Ox)",
            "Aucune symétrie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fonction cube est impaire : (−x)³ = −x³. Toute fonction impaire possède une courbe symétrique par rapport à l'origine O du repère."
        },
        {
          "id": "seconde_c_maths_numerique_ch5_p2_ex3",
          "type": "mcq",
          "prompt": "Quel est le sens de variation de la fonction carré f(x) = x² sur l'intervalle ]−∞ ; 0] ?",
          "options": [
            "Strictement décroissante",
            "Strictement croissante",
            "Constante",
            "Croissante puis décroissante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour deux réels négatifs u < v ≤ 0, on a u² > v². La fonction carré inverse l'ordre des négatifs : elle est strictement décroissante sur ]−∞ ; 0]."
        },
        {
          "id": "seconde_c_maths_numerique_ch5_p2_ex4",
          "type": "mcq",
          "prompt": "Pourquoi est-il FAUX de dire que la fonction inverse f(x) = 1/x est décroissante sur ℝ* tout entier ?",
          "options": [
            "Car si u = −1 et v = 1, on a u < v mais f(u) = −1 < f(v) = 1 (l'ordre n'est pas inversé d'un côté à l'autre de 0)",
            "Car elle est croissante sur ℝ*",
            "Car 1/x est positive sur tout ℝ*",
            "Car elle est constante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'inversion de l'ordre n'est valable qu'entre nombres de même signe. Pour u = −1 < v = 1, f(−1) = −1 < f(1) = 1 : elle est décroissante sur ]−∞ ; 0[ et sur ]0 ; +∞[ séparément."
        },
        {
          "id": "seconde_c_maths_numerique_ch5_p2_ex5",
          "type": "mcq",
          "prompt": "Si x = 0,25 (un réel compris entre 0 et 1), quel est l'ordre exact entre x, x² et √x ?",
          "options": [
            "x² < x < √x",
            "√x < x < x²",
            "x < x² < √x",
            "x² < √x < x"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour x = 0,25 : x² = 0,0625, x = 0,25, et √x = 0,5. Pour tout x ∈ ]0 ; 1[, on a toujours x² < x < √x."
        },
        {
          "id": "seconde_c_maths_numerique_ch5_p2_ex6",
          "type": "mcq",
          "prompt": "Quel est l'extremum absolu de la fonction valeur absolue f(x) = |x| sur ℝ ?",
          "options": [
            "Un minimum égal à 0, atteint en x = 0",
            "Un maximum égal à 0, atteint en x = 0",
            "Un minimum égal à 1, atteint en x = 1",
            "Elle n'admet aucun extremum"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour tout réel x, |x| ≥ 0 et |0| = 0. Le nombre 0 est donc le minimum absolu de la fonction valeur absolue, atteint en x = 0."
        },
        {
          "id": "seconde_c_maths_numerique_ch5_p2_ex7",
          "type": "mcq",
          "prompt": "Combien de solutions réelles l'équation x³ = −27 admet-elle ?",
          "options": [
            "Une unique solution réelle : x = −3",
            "Deux solutions : −3 et 3",
            "Aucune car le second membre est négatif",
            "Trois solutions réelles distinctes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fonction cube est une bijection strictement croissante de ℝ sur ℝ. Tout réel k admet un unique antécédent x = ∛k. Comme (−3)³ = −27, l'unique solution est x = −3."
        },
        {
          "id": "seconde_c_maths_numerique_ch5_p2_ex8",
          "type": "mcq",
          "prompt": "Quelle est la nature géométrique de la courbe représentative de la fonction f(x) = 1/x ?",
          "options": [
            "Une hyperbole équilatère",
            "Une parabole",
            "Une droite passant par l'origine",
            "Un cercle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La courbe d'équation y = 1/x (ou xy = 1) est une hyperbole équilatère ayant pour asymptotes les axes de coordonnées (Ox) et (Oy)."
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
  maths2deCFonctionsElementairesChapter,
];
