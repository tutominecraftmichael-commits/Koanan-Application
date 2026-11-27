import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 2 : Mouvement du centre d'inertie d'un solide » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1324
export const PHYSIQUE_TLE_CD_L02_CENTRE_INERTIE: CurriculumChapter = {
  "id": "terminale_c_physique_l02_centre_inertie",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 2,
  "title": "Leçon 2 : Mouvement du centre d'inertie d'un solide",
  "summary": "On définit les référentiels galiléens, puis on énonce et applique le théorème du centre d'inertie et le théorème de l'énergie cinétique, avec un protocole de résolution et des applications au plan incliné, avec ou sans frottements.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1324",
  "points": [
    {
      "id": "terminale_c_physique_l02_centre_inertie_p01",
      "order": 1,
      "title": "Les référentiels galiléens",
      "summary": "Un référentiel galiléen est un référentiel où le principe de l'inertie est vérifié.",
      "conceptExplanation": "Un référentiel galiléen est un référentiel dans lequel le principe de l'inertie est vérifié : c'est la condition pour appliquer les théorèmes de la mécanique.\nLe référentiel de Copernic (ou héliocentrique) a pour origine le centre du système solaire et pour axes trois axes dirigés vers trois étoiles fixes.\nLe référentiel géocentrique a pour origine le centre d'inertie de la Terre, avec les mêmes axes que le référentiel de Copernic.\nLe référentiel terrestre (ou du laboratoire) a pour solide de référence un objet immobile situé sur la Terre ; il est supposé galiléen pour des expériences de courtes durées.",
      "keyRule": "Galiléen = le principe de l'inertie y est vérifié ; le référentiel terrestre ne l'est qu'en approximation, pour des expériences courtes.",
      "formulas": [],
      "workedExample": {
        "title": "Vrai ou faux ? (activité d'application)",
        "statement": "Juge les affirmations : (1) si la somme des forces extérieures est nulle, le solide est nécessairement au repos ; (3) un solide en mouvement rectiligne et uniforme peut être considéré comme un référentiel galiléen.",
        "methodSteps": [
          "(1) Faux : si ΣF = 0, le centre d'inertie peut aussi être en mouvement rectiligne uniforme, pas seulement au repos.",
          "(3) Vrai : un solide en MRU constitue un référentiel galiléen."
        ],
        "conclusion": "Ce sont les réponses du tableau de l'activité d'application du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d'un référentiel galiléen",
          "stepTheme": "Définition d'un référentiel galiléen",
          "stepBadge": "Définition d'un référentiel galiléen",
          "paragraphText": "• Référentiel galiléen : référentiel dans lequel le principe de l'inertie est vérifié.\nC'est la définition demandée dans la situation d'évaluation et dans l'exercice 5.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p01_q1",
            "type": "mcq",
            "prompt": "Un référentiel galiléen est un référentiel dans lequel :",
            "options": [
              "Le principe de l'inertie est vérifié",
              "Toutes les forces sont nulles",
              "Les solides sont toujours au repos",
              "La Terre est immobile dans l'Univers"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §1.1 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le référentiel de Copernic",
          "stepTheme": "Le référentiel de Copernic",
          "stepBadge": "Le référentiel de Copernic",
          "paragraphText": "Le référentiel de Copernic, ou référentiel héliocentrique, a pour origine le centre du système solaire.\nSes axes sont dirigés vers trois étoiles fixes.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p01_q2",
            "type": "mcq",
            "prompt": "Le référentiel de Copernic (héliocentrique) a pour origine :",
            "options": [
              "Le centre d'inertie de la Terre",
              "Le centre du système solaire",
              "Un objet du laboratoire",
              "Le centre d'inertie du solide étudié"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'exemple du §1.2 : origine au centre du système solaire, axes pointés vers trois étoiles fixes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le référentiel géocentrique",
          "stepTheme": "Le référentiel géocentrique",
          "stepBadge": "Le référentiel géocentrique",
          "paragraphText": "Le référentiel géocentrique a pour origine le centre d'inertie de la Terre.\nSes axes sont ceux du référentiel de Copernic : il est en translation par rapport à lui.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p01_q3",
            "type": "mcq",
            "prompt": "Le référentiel géocentrique diffère du référentiel de Copernic par :",
            "options": [
              "Ses axes",
              "Sa nature non galiléenne",
              "Son origine : le centre d'inertie de la Terre",
              "Le principe de l'inertie, qui n'y est pas vérifié"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Même orientation d'axes, mais l'origine est le centre de la Terre (§1.2 du résumé)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le référentiel terrestre, galiléen approché",
          "stepTheme": "Le référentiel terrestre, galiléen approché",
          "stepBadge": "Le référentiel terrestre, galiléen approché",
          "paragraphText": "Le référentiel terrestre (du laboratoire) a pour solide de référence un objet immobile situé sur la Terre, comme un arbre ou un mur.\nLe résumé précise qu'il est supposé galiléen pour des expériences de courtes durées.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p01_q4",
            "type": "mcq",
            "prompt": "Le référentiel terrestre est supposé galiléen :",
            "options": [
              "Dans tous les cas, sans restriction",
              "Uniquement pour les mouvements lents",
              "Uniquement au niveau de la mer",
              "Pour des expériences de courtes durées"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la restriction donnée au §1.2 : l'approximation vaut pour les expériences de courte durée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Somme des forces nulle n'implique pas le repos",
          "stepTheme": "Somme des forces nulle n'implique pas le repos",
          "stepBadge": "Somme des forces nulle n'implique pas le repos",
          "paragraphText": "L'affirmation n° 1 de l'activité prétend qu'un solide soumis à une somme de forces nulle est nécessairement au repos.\nLa solution la juge fausse : le solide peut être en mouvement rectiligne uniforme.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p01_q5",
            "type": "mcq",
            "prompt": "Si la somme vectorielle des forces extérieures appliquées à un solide est nulle, le solide est :",
            "options": [
              "Au repos ou en mouvement rectiligne uniforme",
              "Nécessairement au repos",
              "En mouvement accéléré",
              "En chute libre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le principe de l'inertie : aG = 0 donne v = 0 (repos) ou v constante (MRU), remarque du §2 du résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Un solide en MRU peut servir de référentiel galiléen",
          "stepTheme": "Un solide en MRU peut servir de référentiel galiléen",
          "stepBadge": "Un solide en MRU peut servir de référentiel galiléen",
          "paragraphText": "L'affirmation n° 3 de l'activité est jugée vraie dans la solution.\nUn solide en mouvement rectiligne et uniforme par rapport à un référentiel galiléen peut lui-même être considéré comme un référentiel galiléen.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p01_q6",
            "type": "mcq",
            "prompt": "Un solide en mouvement rectiligne et uniforme peut être considéré comme :",
            "options": [
              "Un système isolé dans tous les cas",
              "Un référentiel galiléen",
              "Un solide sans masse",
              "Un référentiel non galiléen"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la réponse « Vrai » de l'activité d'application pour l'affirmation n° 3."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l02_centre_inertie_p01_q1",
          "type": "mcq",
          "prompt": "Un référentiel galiléen est un référentiel dans lequel :",
          "options": [
            "Le principe de l'inertie est vérifié",
            "Toutes les forces sont nulles",
            "Les solides sont toujours au repos",
            "La Terre est immobile dans l'Univers"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §1.1 du résumé."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p01_q2",
          "type": "mcq",
          "prompt": "Le référentiel de Copernic (héliocentrique) a pour origine :",
          "options": [
            "Le centre d'inertie de la Terre",
            "Le centre du système solaire",
            "Un objet du laboratoire",
            "Le centre d'inertie du solide étudié"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'exemple du §1.2 : origine au centre du système solaire, axes pointés vers trois étoiles fixes."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p01_q3",
          "type": "mcq",
          "prompt": "Le référentiel géocentrique diffère du référentiel de Copernic par :",
          "options": [
            "Ses axes",
            "Sa nature non galiléenne",
            "Son origine : le centre d'inertie de la Terre",
            "Le principe de l'inertie, qui n'y est pas vérifié"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Même orientation d'axes, mais l'origine est le centre de la Terre (§1.2 du résumé)."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p01_q4",
          "type": "mcq",
          "prompt": "Le référentiel terrestre est supposé galiléen :",
          "options": [
            "Dans tous les cas, sans restriction",
            "Uniquement pour les mouvements lents",
            "Uniquement au niveau de la mer",
            "Pour des expériences de courtes durées"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la restriction donnée au §1.2 : l'approximation vaut pour les expériences de courte durée."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p01_q5",
          "type": "mcq",
          "prompt": "Si la somme vectorielle des forces extérieures appliquées à un solide est nulle, le solide est :",
          "options": [
            "Au repos ou en mouvement rectiligne uniforme",
            "Nécessairement au repos",
            "En mouvement accéléré",
            "En chute libre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le principe de l'inertie : aG = 0 donne v = 0 (repos) ou v constante (MRU), remarque du §2 du résumé."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p01_q6",
          "type": "mcq",
          "prompt": "Un solide en mouvement rectiligne et uniforme peut être considéré comme :",
          "options": [
            "Un système isolé dans tous les cas",
            "Un référentiel galiléen",
            "Un solide sans masse",
            "Un référentiel non galiléen"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la réponse « Vrai » de l'activité d'application pour l'affirmation n° 3."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l02_centre_inertie_p02",
      "order": 2,
      "title": "Le théorème du centre d'inertie",
      "summary": "ΣFext = m·aG dans un référentiel galiléen ; si ΣFext = 0, on retrouve le principe de l'inertie.",
      "conceptExplanation": "Dans un référentiel galiléen, la somme vectorielle des forces extérieures appliquées à un solide est égale au produit de la masse de ce solide par le vecteur-accélération de son centre d'inertie : ΣFext = m·aG.\nSi la somme des forces extérieures est nulle, alors aG = 0 : le centre d'inertie est immobile ou en mouvement rectiligne uniforme, ce qui est le principe de l'inertie.\nL'activité d'application confirme que les théorèmes du centre d'inertie et de l'énergie cinétique ne sont applicables que dans des référentiels galiléens.\nEn chute libre (exercice 1), le théorème du centre d'inertie donne a = g, le poids étant la seule force extérieure.",
      "keyRule": "ΣFext = m·aG : le théorème relie les forces extérieures à l'accélération du centre d'inertie, uniquement dans un référentiel galiléen.",
      "formulas": [
        {
          "name": "Théorème du centre d'inertie",
          "formula": "\\sum \\vec{F}_{ext} = m \\times \\vec{a}_G",
          "note": "Valable uniquement dans un référentiel galiléen."
        },
        {
          "name": "Cas d'une somme nulle",
          "formula": "\\sum \\vec{F}_{ext} = \\vec{0} \\quad \\Rightarrow \\quad \\vec{a}_G = \\vec{0}",
          "note": "Repos ou mouvement rectiligne uniforme : principe de l'inertie."
        }
      ],
      "workedExample": {
        "title": "L'exercice 2 : le solide lancé verticalement",
        "statement": "Un solide est lancé verticalement vers le haut. Au cours de sa montée, que vaut son vecteur-accélération ?",
        "methodSteps": [
          "La seule force extérieure est le poids (en négligeant l'air) : ΣFext = P.",
          "Le théorème du centre d'inertie donne m·a = m·g, donc a = g.",
          "L'accélération a le même sens que le vecteur g (vers le bas), même pendant la montée."
        ],
        "conclusion": "La réponse correcte de l'exercice 2 est la proposition c."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'énoncé du théorème",
          "stepTheme": "L'énoncé du théorème",
          "stepBadge": "L'énoncé du théorème",
          "paragraphText": "• Théorème du centre d'inertie : dans un référentiel galiléen, la somme vectorielle des forces extérieures appliquées à un solide égale le produit de sa masse par le vecteur-accélération de son centre d'inertie.\nIl s'écrit ΣFext = m·aG.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p02_q1",
            "type": "mcq",
            "prompt": "Le théorème du centre d'inertie s'écrit :",
            "options": [
              "$\\sum \\vec{F}_{ext} = m \\times \\vec{a}_G$",
              "$\\sum \\vec{F}_{ext} = \\vec{0}$ dans tous les cas",
              "$\\Delta E_C = m \\times \\vec{a}_G$",
              "$\\vec{a}_G = m \\times \\sum \\vec{F}_{ext}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la relation du §2 du résumé, demandée telle quelle dans la situation d'évaluation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Seules les forces extérieures comptent",
          "stepTheme": "Seules les forces extérieures comptent",
          "stepBadge": "Seules les forces extérieures comptent",
          "paragraphText": "La somme porte sur les forces extérieures appliquées au solide : poids, réaction du support, frottements, forces motrices…\nLes forces intérieures au système ne figurent pas dans le théorème.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p02_q2",
            "type": "mcq",
            "prompt": "Dans le théorème du centre d'inertie, la somme des forces comprend :",
            "options": [
              "Toutes les forces, intérieures et extérieures",
              "Uniquement les forces extérieures appliquées au solide",
              "Uniquement le poids",
              "Uniquement les forces de contact"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'énoncé du résumé parle bien des « forces extérieures appliquées à un solide »."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le cas ΣFext = 0 : le principe de l'inertie",
          "stepTheme": "Le cas ΣFext = 0 : le principe de l'inertie",
          "stepBadge": "Le cas ΣFext = 0 : le principe de l'inertie",
          "paragraphText": "Remarque du résumé : si ΣFext = 0, alors a = dv/dt = 0.\nDonc soit v = 0 (le système est immobile), soit v = constante (le mouvement est uniforme) : on retrouve le principe de l'inertie.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p02_q3",
            "type": "mcq",
            "prompt": "Un solide en mouvement rectiligne et uniforme, dans un référentiel galiléen, est soumis à une somme de forces extérieures :",
            "options": [
              "Égale à sa masse",
              "Constante et non nulle",
              "Nulle",
              "Égale à son poids"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Réponse « Vrai » de l'affirmation n° 4 de l'activité : MRU implique aG = 0, donc ΣFext = 0."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Les théorèmes exigent un référentiel galiléen",
          "stepTheme": "Les théorèmes exigent un référentiel galiléen",
          "stepBadge": "Les théorèmes exigent un référentiel galiléen",
          "paragraphText": "L'affirmation n° 2 de l'activité est jugée vraie : les théorèmes de l'énergie cinétique et du centre d'inertie ne sont applicables que dans des référentiels galiléens.\nL'exercice 1 le répète : ces deux théorèmes ne s'appliquent que dans des référentiels galiléens.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p02_q4",
            "type": "mcq",
            "prompt": "Le théorème du centre d'inertie s'applique :",
            "options": [
              "Dans n'importe quel référentiel",
              "Uniquement dans le référentiel terrestre",
              "Uniquement pour les solides au repos",
              "Uniquement dans un référentiel galiléen"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la condition d'application soulignée par l'activité et par l'exercice 1."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La chute libre : a = g",
          "stepTheme": "La chute libre : a = g",
          "stepBadge": "La chute libre : a = g",
          "paragraphText": "Dans l'exercice 1, un solide en chute libre n'est soumis qu'à son poids.\nEn appliquant le théorème du centre d'inertie dans le référentiel terrestre, on montre que son vecteur-accélération vaut a = g.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p02_q5",
            "type": "mcq",
            "prompt": "En chute libre, le théorème du centre d'inertie appliqué au solide donne :",
            "options": [
              "a = g",
              "a = 0",
              "a = m × g",
              "a dépend de la masse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "P = m·a avec P = m·g, donc a = g, indépendant de la masse (texte complété de l'exercice 1)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "L'accélération d'un projectile lancé vers le haut",
          "stepTheme": "L'accélération d'un projectile lancé vers le haut",
          "stepBadge": "L'accélération d'un projectile lancé vers le haut",
          "paragraphText": "Dans l'exercice 2, le solide lancé verticalement vers le haut garde l'accélération a = g pendant toute la montée.\nSon accélération a donc le même sens que g, opposé à la vitesse pendant la montée : le mouvement est retardé.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p02_q6",
            "type": "mcq",
            "prompt": "Pendant la montée d'un solide lancé verticalement, son vecteur-accélération :",
            "options": [
              "A le même sens que sa vitesse",
              "A le même sens que le vecteur g (réponse c de l'exercice 2)",
              "Est nul au sommet seulement",
              "Change de sens à mi-montée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La seule force est le poids, dirigé vers le bas comme g : la solution de l'exercice 2 choisit la proposition c."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l02_centre_inertie_p02_q1",
          "type": "mcq",
          "prompt": "Le théorème du centre d'inertie s'écrit :",
          "options": [
            "$\\sum \\vec{F}_{ext} = m \\times \\vec{a}_G$",
            "$\\sum \\vec{F}_{ext} = \\vec{0}$ dans tous les cas",
            "$\\Delta E_C = m \\times \\vec{a}_G$",
            "$\\vec{a}_G = m \\times \\sum \\vec{F}_{ext}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la relation du §2 du résumé, demandée telle quelle dans la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p02_q2",
          "type": "mcq",
          "prompt": "Dans le théorème du centre d'inertie, la somme des forces comprend :",
          "options": [
            "Toutes les forces, intérieures et extérieures",
            "Uniquement les forces extérieures appliquées au solide",
            "Uniquement le poids",
            "Uniquement les forces de contact"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'énoncé du résumé parle bien des « forces extérieures appliquées à un solide »."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p02_q3",
          "type": "mcq",
          "prompt": "Un solide en mouvement rectiligne et uniforme, dans un référentiel galiléen, est soumis à une somme de forces extérieures :",
          "options": [
            "Égale à sa masse",
            "Constante et non nulle",
            "Nulle",
            "Égale à son poids"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Réponse « Vrai » de l'affirmation n° 4 de l'activité : MRU implique aG = 0, donc ΣFext = 0."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p02_q4",
          "type": "mcq",
          "prompt": "Le théorème du centre d'inertie s'applique :",
          "options": [
            "Dans n'importe quel référentiel",
            "Uniquement dans le référentiel terrestre",
            "Uniquement pour les solides au repos",
            "Uniquement dans un référentiel galiléen"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la condition d'application soulignée par l'activité et par l'exercice 1."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p02_q5",
          "type": "mcq",
          "prompt": "En chute libre, le théorème du centre d'inertie appliqué au solide donne :",
          "options": [
            "a = g",
            "a = 0",
            "a = m × g",
            "a dépend de la masse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "P = m·a avec P = m·g, donc a = g, indépendant de la masse (texte complété de l'exercice 1)."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p02_q6",
          "type": "mcq",
          "prompt": "Pendant la montée d'un solide lancé verticalement, son vecteur-accélération :",
          "options": [
            "A le même sens que sa vitesse",
            "A le même sens que le vecteur g (réponse c de l'exercice 2)",
            "Est nul au sommet seulement",
            "Change de sens à mi-montée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La seule force est le poids, dirigé vers le bas comme g : la solution de l'exercice 2 choisit la proposition c."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l02_centre_inertie_p03",
      "order": 3,
      "title": "Le théorème de l'énergie cinétique",
      "summary": "ΔEC égale la somme des travaux des forces extérieures entre les deux instants.",
      "conceptExplanation": "Dans un référentiel galiléen, la variation de l'énergie cinétique d'un solide entre deux instants est égale à la somme algébrique des travaux effectués entre ces deux instants par toutes les forces extérieures appliquées au solide : ΔEC = ECB − ECA = Σ W_AB(Fext).\nL'affirmation n° 5 de l'activité, qui remplace les travaux par « la somme des forces », est donc fausse.\nEn chute libre d'une hauteur h (exercice 1), le théorème de l'énergie cinétique donne v² = 2gh.\nUne force perpendiculaire au déplacement, comme la réaction normale d'un support, a un travail nul et ne figure pas dans le bilan énergétique.",
      "keyRule": "ΔEC = somme des TRAVAUX des forces extérieures (en joules), pas la somme des forces.",
      "formulas": [
        {
          "name": "Théorème de l'énergie cinétique",
          "formula": "\\Delta E_C = E_{C_B} - E_{C_A} = \\sum W_{AB}(\\vec{F}_{ext})",
          "note": "Travaux algébriques, moteurs ou résistants selon leur signe."
        },
        {
          "name": "Énergie cinétique d'un solide en translation",
          "formula": "E_C = \\frac{1}{2} m v^2",
          "note": "v est la vitesse du centre d'inertie."
        }
      ],
      "workedExample": {
        "title": "La vitesse après une chute de hauteur h (exercice 1)",
        "statement": "Un solide tombe en chute libre d'une hauteur h, sans vitesse initiale. Établis sa vitesse d'arrivée par le théorème de l'énergie cinétique.",
        "methodSteps": [
          "ΔEC = ½mv² − 0.",
          "Le seul travail est celui du poids : W(P) = mgh.",
          "Donc ½mv² = mgh, soit v² = 2gh."
        ],
        "conclusion": "C'est la relation établie dans le texte complété de l'exercice 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'énoncé du théorème",
          "stepTheme": "L'énoncé du théorème",
          "stepBadge": "L'énoncé du théorème",
          "paragraphText": "• Théorème de l'énergie cinétique : dans un référentiel galiléen, la variation de l'énergie cinétique d'un solide entre deux instants égale la somme algébrique des travaux des forces extérieures entre ces instants.\nIl s'écrit ΔEC = ECB − ECA = Σ W_AB(Fext).",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p03_q1",
            "type": "mcq",
            "prompt": "D'après le théorème de l'énergie cinétique, ΔEC est égale :",
            "options": [
              "À la somme des forces extérieures",
              "À la somme algébrique des travaux des forces extérieures",
              "Au produit de la masse par l'accélération",
              "Au travail du seul poids"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'énoncé du §3 du résumé ; confondre travaux et forces est l'erreur de l'affirmation n° 5, jugée fausse."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Le piège de l'affirmation n° 5",
          "stepTheme": "Le piège de l'affirmation n° 5",
          "stepBadge": "Le piège de l'affirmation n° 5",
          "paragraphText": "L'affirmation « la variation de l'énergie cinétique est égale à la somme des forces extérieures » mélange deux théorèmes.\nElle est fausse : le centre d'inertie fait intervenir la somme des forces, l'énergie cinétique la somme des travaux.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p03_q2",
            "type": "mcq",
            "prompt": "L'affirmation « ΔEC égale la somme des forces extérieures » est :",
            "options": [
              "Vraie",
              "Vraie si le mouvement est rectiligne",
              "Fausse : ce sont les travaux des forces, pas les forces",
              "Vraie dans le référentiel terrestre uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le corrigé de l'activité d'application (affirmation n° 5 : Faux)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le travail d'une force perpendiculaire est nul",
          "stepTheme": "Le travail d'une force perpendiculaire est nul",
          "stepBadge": "Le travail d'une force perpendiculaire est nul",
          "paragraphText": "Dans la situation d'évaluation (banc incliné), la réaction R est perpendiculaire au déplacement AB.\nLa résolution écrit donc W(R) = 0, et seul le travail du poids fait varier l'énergie cinétique.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p03_q3",
            "type": "mcq",
            "prompt": "Le travail de la réaction normale d'un support lors d'un déplacement le long du support vaut :",
            "options": [
              "R × distance",
              "−R × distance",
              "Il dépend de la vitesse",
              "0, car la réaction est perpendiculaire au déplacement"
            ],
            "correctAnswerIndex": 3,
            "explanation": "W(R) = 0 car R ⊥ (AB) : c'est un pas clé de la résolution de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le travail du poids sur un plan incliné",
          "stepTheme": "Le travail du poids sur un plan incliné",
          "stepBadge": "Le travail du poids sur un plan incliné",
          "paragraphText": "Sur le banc de longueur l incliné d'un angle θ, la descente correspond à une perte d'altitude l·sinθ.\nLe travail du poids entre A et B vaut donc W(P) = mgl·sinθ, positif (moteur).",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p03_q4",
            "type": "mcq",
            "prompt": "Le travail du poids d'un solide descendant un plan incliné de longueur l et d'angle θ vaut :",
            "options": [
              "W(P) = mgl·sinθ",
              "W(P) = −mgl·sinθ",
              "W(P) = mgl·cosθ",
              "W(P) = 0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'expression utilisée dans la résolution de la situation d'évaluation : le poids est moteur dans une descente."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Un travail résistant est négatif",
          "stepTheme": "Un travail résistant est négatif",
          "stepBadge": "Un travail résistant est négatif",
          "paragraphText": "Les travaux sont algébriques : une force opposée au déplacement, comme les frottements, a un travail négatif.\nDans l'exercice 4, le travail de la résultante des frottements sur une distance l s'écrit W(f) = −f·l.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p03_q5",
            "type": "mcq",
            "prompt": "Le travail d'une force de frottement opposée au déplacement sur une distance l vaut :",
            "options": [
              "+f·l",
              "−f·l",
              "0",
              "f × l × cos(0)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Force et déplacement sont opposés : le travail est résistant, donc négatif, comme dans l'exercice 4."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Choisir le bon théorème",
          "stepTheme": "Choisir le bon théorème",
          "stepBadge": "Choisir le bon théorème",
          "paragraphText": "Le protocole du résumé demande d'appliquer le théorème du centre d'inertie ou celui de l'énergie cinétique selon le besoin.\nLe premier donne l'accélération ; le second relie les vitesses à deux positions, sans le temps.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p03_q6",
            "type": "mcq",
            "prompt": "Pour relier la vitesse d'un solide en deux points de sa trajectoire sans connaître les dates, on utilise plutôt :",
            "options": [
              "Le théorème du centre d'inertie",
              "La définition de la vitesse moyenne",
              "Le théorème de l'énergie cinétique",
              "Le principe de l'inertie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le TEC relie ΔEC aux travaux, donc aux positions : c'est son usage dans la situation d'évaluation (calcul de VB)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l02_centre_inertie_p03_q1",
          "type": "mcq",
          "prompt": "D'après le théorème de l'énergie cinétique, ΔEC est égale :",
          "options": [
            "À la somme des forces extérieures",
            "À la somme algébrique des travaux des forces extérieures",
            "Au produit de la masse par l'accélération",
            "Au travail du seul poids"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'énoncé du §3 du résumé ; confondre travaux et forces est l'erreur de l'affirmation n° 5, jugée fausse."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p03_q2",
          "type": "mcq",
          "prompt": "L'affirmation « ΔEC égale la somme des forces extérieures » est :",
          "options": [
            "Vraie",
            "Vraie si le mouvement est rectiligne",
            "Fausse : ce sont les travaux des forces, pas les forces",
            "Vraie dans le référentiel terrestre uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le corrigé de l'activité d'application (affirmation n° 5 : Faux)."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p03_q3",
          "type": "mcq",
          "prompt": "Le travail de la réaction normale d'un support lors d'un déplacement le long du support vaut :",
          "options": [
            "R × distance",
            "−R × distance",
            "Il dépend de la vitesse",
            "0, car la réaction est perpendiculaire au déplacement"
          ],
          "correctAnswerIndex": 3,
          "explanation": "W(R) = 0 car R ⊥ (AB) : c'est un pas clé de la résolution de la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p03_q4",
          "type": "mcq",
          "prompt": "Le travail du poids d'un solide descendant un plan incliné de longueur l et d'angle θ vaut :",
          "options": [
            "W(P) = mgl·sinθ",
            "W(P) = −mgl·sinθ",
            "W(P) = mgl·cosθ",
            "W(P) = 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'expression utilisée dans la résolution de la situation d'évaluation : le poids est moteur dans une descente."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p03_q5",
          "type": "mcq",
          "prompt": "Le travail d'une force de frottement opposée au déplacement sur une distance l vaut :",
          "options": [
            "+f·l",
            "−f·l",
            "0",
            "f × l × cos(0)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Force et déplacement sont opposés : le travail est résistant, donc négatif, comme dans l'exercice 4."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p03_q6",
          "type": "mcq",
          "prompt": "Pour relier la vitesse d'un solide en deux points de sa trajectoire sans connaître les dates, on utilise plutôt :",
          "options": [
            "Le théorème du centre d'inertie",
            "La définition de la vitesse moyenne",
            "Le théorème de l'énergie cinétique",
            "Le principe de l'inertie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le TEC relie ΔEC aux travaux, donc aux positions : c'est son usage dans la situation d'évaluation (calcul de VB)."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l02_centre_inertie_p04",
      "order": 4,
      "title": "Protocole et plan incliné sans frottements",
      "summary": "Les quatre étapes de résolution ; sur un plan incliné lisse, ax = g·sinθ.",
      "conceptExplanation": "Pour résoudre un problème de mécanique, il faut : définir le système ; choisir un référentiel galiléen convenable muni d'un repère orthonormé ; faire le bilan des forces appliquées au système, avec un schéma si possible ; appliquer le théorème du centre d'inertie ou le théorème de l'énergie cinétique selon le besoin.\nDans la situation d'évaluation, un mobile de masse m = 630 g est lâché sans vitesse initiale sur un banc à coussin d'air de longueur AB = 2 m, incliné de θ = 30° : les forces sont le poids P et la réaction R du banc.\nLa projection du théorème du centre d'inertie sur l'axe de la pente donne ax = g·sinθ = 5 m/s².\nLe théorème de l'énergie cinétique donne ensuite VB = √(2gl·sinθ) ≈ 4,5 m/s.",
      "keyRule": "Sur un plan incliné sans frottements, l'accélération ne dépend que de g et de θ : ax = g·sinθ (pas de la masse).",
      "formulas": [
        {
          "name": "Accélération sur plan incliné lisse",
          "formula": "a_x = g \\times \\sin\\theta",
          "note": "Projection du poids sur l'axe de la pente ; la réaction se projette à 0."
        },
        {
          "name": "Vitesse en bas du plan (depuis le repos)",
          "formula": "v_B = \\sqrt{2 \\times g \\times l \\times \\sin\\theta}",
          "note": "Par le théorème de l'énergie cinétique entre le haut et le bas."
        }
      ],
      "workedExample": {
        "title": "La situation d'évaluation pas à pas",
        "statement": "Mobile lâché sans vitesse en A sur un banc de 2 m incliné à 30° (g = 10 m/s²). Détermine ax puis VB.",
        "methodSteps": [
          "Système : le solide ; référentiel terrestre supposé galiléen ; forces : P et R.",
          "Projection du TCI sur l'axe (A, x) de la pente : 0 + mg·sinθ = m·ax, donc ax = g·sinθ = 5 m/s².",
          "TEC entre A et B : ½mVB² = mgl·sinθ, d'où VB = √(2gl·sinθ) ≈ 4,5 m/s."
        ],
        "conclusion": "Ce sont les résultats de la résolution de la situation d'évaluation du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Les quatre étapes du protocole",
          "stepTheme": "Les quatre étapes du protocole",
          "stepBadge": "Les quatre étapes du protocole",
          "paragraphText": "Le §4 du résumé donne le protocole de résolution d'un problème de mécanique en quatre points.\nSystème, référentiel galiléen et repère, bilan des forces, puis choix du théorème.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p04_q1",
            "type": "mcq",
            "prompt": "La première étape du protocole de résolution d'un problème de mécanique est :",
            "options": [
              "Définir le système étudié",
              "Appliquer le théorème de l'énergie cinétique",
              "Calculer la vitesse",
              "Tracer les courbes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le protocole commence toujours par « définir le système » avant tout bilan de forces."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Le bilan des forces sur le banc incliné",
          "stepTheme": "Le bilan des forces sur le banc incliné",
          "stepBadge": "Le bilan des forces sur le banc incliné",
          "paragraphText": "Sur le banc à coussin d'air, les frottements sont négligeables grâce au coussin d'air.\nLe bilan de la situation d'évaluation ne retient que le poids P du solide et la réaction R de la piste.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p04_q2",
            "type": "mcq",
            "prompt": "Sur le banc à coussin d'air incliné, les forces extérieures appliquées au mobile sont :",
            "options": [
              "Le poids seulement",
              "Le poids et la réaction de la piste",
              "Le poids, la réaction et les frottements",
              "La réaction seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le bilan de la résolution : P et R, les frottements étant supprimés par le coussin d'air."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Projeter le théorème sur l'axe de la pente",
          "stepTheme": "Projeter le théorème sur l'axe de la pente",
          "stepBadge": "Projeter le théorème sur l'axe de la pente",
          "paragraphText": "On applique R + P = m·a, puis on projette sur l'axe (A, x) dirigé selon la pente descendante.\nLa réaction, perpendiculaire à la piste, se projette à 0 ; la projection du poids vaut mg·sinθ.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p04_q3",
            "type": "mcq",
            "prompt": "La projection de la relation R + P = m·a sur l'axe de la pente donne :",
            "options": [
              "mg·cosθ = m·ax",
              "−mg·sinθ = m·ax",
              "mg·sinθ = m·ax",
              "R + mg = m·ax"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Rx = 0 et Px = +mg·sinθ : c'est l'étape de projection de la résolution."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "ax = g·sinθ = 5 m/s²",
          "stepTheme": "ax = g·sinθ = 5 m/s²",
          "stepBadge": "ax = g·sinθ = 5 m/s²",
          "paragraphText": "Il vient ax = g·sinθ, indépendant de la masse du mobile.\nApplication numérique : ax = 10 × sin 30° = 5 m/s², dans la situation comme dans l'exercice 3 (même inclinaison).",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p04_q4",
            "type": "mcq",
            "prompt": "L'accélération du mobile sur le banc incliné à 30° (g = 10 m/s²) vaut :",
            "options": [
              "10 m/s²",
              "8,7 m/s²",
              "0 m/s²",
              "5 m/s²"
            ],
            "correctAnswerIndex": 3,
            "explanation": "ax = g·sinθ = 10 × 0,5 = 5 m/s² : résultat commun à la situation d'évaluation et à l'exercice 3."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La masse n'intervient pas dans ax",
          "stepTheme": "La masse n'intervient pas dans ax",
          "stepBadge": "La masse n'intervient pas dans ax",
          "paragraphText": "Piège : la masse m = 630 g de la situation semble devoir entrer dans le calcul.\nElle se simplifie entre le poids (proportionnel à m) et le terme m·ax : tous les mobiles ont la même accélération sur ce plan.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p04_q5",
            "type": "mcq",
            "prompt": "Si on double la masse du mobile sur le même banc incliné lisse, son accélération :",
            "options": [
              "Reste la même : ax = g·sinθ",
              "Double",
              "Est divisée par deux",
              "Devient nulle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La masse se simplifie dans mg·sinθ = m·ax : ax ne dépend que de g et de θ."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La vitesse en B par le TEC",
          "stepTheme": "La vitesse en B par le TEC",
          "stepBadge": "La vitesse en B par le TEC",
          "paragraphText": "Le théorème de l'énergie cinétique entre A (repos) et B donne ½mVB² = mgl·sinθ.\nLa résolution obtient VB = √(2gl·sinθ) ≈ 4,5 m/s pour l = 2 m, g = 10 m/s² et θ = 30°.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p04_q6",
            "type": "mcq",
            "prompt": "La vitesse du mobile au point B (bas du banc de 2 m incliné à 30°) vaut environ :",
            "options": [
              "2,2 m/s",
              "4,5 m/s",
              "10 m/s",
              "20 m/s"
            ],
            "correctAnswerIndex": 1,
            "explanation": "VB = √(2 × 10 × 2 × 0,5) = √20 ≈ 4,5 m/s d'après la résolution (le PDF imprime l'unité « m/s² » par erreur)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l02_centre_inertie_p04_q1",
          "type": "mcq",
          "prompt": "La première étape du protocole de résolution d'un problème de mécanique est :",
          "options": [
            "Définir le système étudié",
            "Appliquer le théorème de l'énergie cinétique",
            "Calculer la vitesse",
            "Tracer les courbes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le protocole commence toujours par « définir le système » avant tout bilan de forces."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p04_q2",
          "type": "mcq",
          "prompt": "Sur le banc à coussin d'air incliné, les forces extérieures appliquées au mobile sont :",
          "options": [
            "Le poids seulement",
            "Le poids et la réaction de la piste",
            "Le poids, la réaction et les frottements",
            "La réaction seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le bilan de la résolution : P et R, les frottements étant supprimés par le coussin d'air."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p04_q3",
          "type": "mcq",
          "prompt": "La projection de la relation R + P = m·a sur l'axe de la pente donne :",
          "options": [
            "mg·cosθ = m·ax",
            "−mg·sinθ = m·ax",
            "mg·sinθ = m·ax",
            "R + mg = m·ax"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Rx = 0 et Px = +mg·sinθ : c'est l'étape de projection de la résolution."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p04_q4",
          "type": "mcq",
          "prompt": "L'accélération du mobile sur le banc incliné à 30° (g = 10 m/s²) vaut :",
          "options": [
            "10 m/s²",
            "8,7 m/s²",
            "0 m/s²",
            "5 m/s²"
          ],
          "correctAnswerIndex": 3,
          "explanation": "ax = g·sinθ = 10 × 0,5 = 5 m/s² : résultat commun à la situation d'évaluation et à l'exercice 3."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p04_q5",
          "type": "mcq",
          "prompt": "Si on double la masse du mobile sur le même banc incliné lisse, son accélération :",
          "options": [
            "Reste la même : ax = g·sinθ",
            "Double",
            "Est divisée par deux",
            "Devient nulle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La masse se simplifie dans mg·sinθ = m·ax : ax ne dépend que de g et de θ."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p04_q6",
          "type": "mcq",
          "prompt": "La vitesse du mobile au point B (bas du banc de 2 m incliné à 30°) vaut environ :",
          "options": [
            "2,2 m/s",
            "4,5 m/s",
            "10 m/s",
            "20 m/s"
          ],
          "correctAnswerIndex": 1,
          "explanation": "VB = √(2 × 10 × 2 × 0,5) = √20 ≈ 4,5 m/s d'après la résolution (le PDF imprime l'unité « m/s² » par erreur)."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l02_centre_inertie_p05",
      "order": 5,
      "title": "Plan incliné avec frottements : l'exercice 4",
      "summary": "Un véhicule en panne descend une côte avec frottements constants : déterminer f puis la distance d'arrêt.",
      "conceptExplanation": "Dans l'exercice 4, un véhicule de masse m = 800 kg, abandonné au sommet O d'une côte de longueur ℓ = 500 m inclinée de α = 20°, arrive au bas A avec vA = 15 m/s, en mouvement rectiligne uniformément varié.\nLa cinématique donne ax = (vA² − v0²)/(2ℓ) = 0,225 m/s².\nLa projection du théorème du centre d'inertie, avec la résultante constante f des frottements opposée au mouvement, donne ax = g·sinα − f/m, d'où f = m(g·sinα − ax) = 2501,4 N ; le théorème de l'énergie cinétique entre O et A conduit au même résultat.\nSur le tronçon horizontal AB, le théorème de l'énergie cinétique donne la distance d'arrêt d = m·vA²/(2f) = 36 m.",
      "keyRule": "Avec frottements : ax = g·sinα − f/m ; les deux théorèmes doivent donner la même valeur de f.",
      "formulas": [
        {
          "name": "Accélération avec frottements sur le plan incliné",
          "formula": "a_x = g \\times \\sin\\alpha - \\frac{f}{m}",
          "note": "f est opposée au mouvement ; sa projection vaut −f."
        },
        {
          "name": "Distance d'arrêt sur le plat",
          "formula": "d = \\frac{m \\times v_A^2}{2 \\times f}",
          "note": "Par le théorème de l'énergie cinétique entre A et l'arrêt B."
        }
      ],
      "workedExample": {
        "title": "Retrouver f par le théorème de l'énergie cinétique",
        "statement": "Entre O (repos) et A (vA = 15 m/s), le TEC s'écrit ½m·vA² = −f·ℓ + mg·ℓ·sinα. Résous en f.",
        "methodSteps": [
          "On isole le terme des frottements : f·ℓ = m(g·ℓ·sinα − vA²/2).",
          "Donc f = m(g·sinα − vA²/(2ℓ)).",
          "L'application numérique donne f = 2501,4 N, comme par le théorème du centre d'inertie."
        ],
        "conclusion": "Les deux méthodes concordent : c'est la double détermination demandée à la question 4.2 de l'exercice 4."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Le bilan des forces avec frottements",
          "stepTheme": "Le bilan des forces avec frottements",
          "stepBadge": "Le bilan des forces avec frottements",
          "paragraphText": "Sur le trajet OA, le bilan de l'exercice 4 comprend trois forces : le poids P, la réaction normale RN de la piste et la résultante f des frottements.\nLa force f est parallèle à la route et opposée au vecteur-vitesse.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p05_q1",
            "type": "mcq",
            "prompt": "Sur la côte, la résultante des forces de frottement f est :",
            "options": [
              "Parallèle à la route et opposée au vecteur-vitesse",
              "Perpendiculaire à la route",
              "Dirigée dans le sens du mouvement",
              "Verticale, comme le poids"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la description de l'énoncé : f est parallèle à la route rectiligne et opposée à la vitesse instantanée."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "L'accélération par la cinématique",
          "stepTheme": "L'accélération par la cinématique",
          "stepBadge": "L'accélération par la cinématique",
          "paragraphText": "Le mouvement étant rectiligne et uniformément varié, on utilise la relation Δv² = 2·ax·Δx de la leçon 1.\nEntre O (v0 = 0) et A (vA = 15 m/s) sur ℓ = 500 m, la résolution obtient ax = 0,225 m/s².",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p05_q2",
            "type": "mcq",
            "prompt": "L'accélération du véhicule entre O et A vaut :",
            "options": [
              "3,35 m/s²",
              "0,225 m/s²",
              "0,45 m/s²",
              "9,8 m/s²"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par la relation Δv² = 2·ax·Δx appliquée entre O et A, la résolution obtient ax = 0,225 m/s² (question 4.1 de l'exercice 4)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'expression ax = g·sinα − f/m",
          "stepTheme": "L'expression ax = g·sinα − f/m",
          "stepBadge": "L'expression ax = g·sinα − f/m",
          "paragraphText": "La projection du TCI (RN + P + f = m·a) sur l'axe de la route donne : 0 + mg·sinα − f = m·ax.\nD'où l'expression ax = g·sinα − f/m demandée à la question 3.2.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p05_q3",
            "type": "mcq",
            "prompt": "L'accélération du véhicule sur la côte s'exprime par :",
            "options": [
              "ax = g·sinα + f/m",
              "ax = g·cosα − f/m",
              "ax = g·sinα − f/m",
              "ax = f/m seulement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La composante du poids vaut +mg·sinα et celle des frottements −f (question 3.2 de l'exercice 4)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La valeur des frottements : f = 2501,4 N",
          "stepTheme": "La valeur des frottements : f = 2501,4 N",
          "stepBadge": "La valeur des frottements : f = 2501,4 N",
          "paragraphText": "De l'expression de ax, on tire f = m(g·sinα − ax) avec m = 800 kg, g = 9,8 m/s², α = 20° et ax = 0,225 m/s².\nLa résolution obtient f = 2501,4 N.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p05_q4",
            "type": "mcq",
            "prompt": "La résultante des forces de frottement sur le véhicule vaut environ :",
            "options": [
              "250 N",
              "25 N",
              "800 N",
              "2501,4 N"
            ],
            "correctAnswerIndex": 3,
            "explanation": "f = 800 × (9,8 × sin 20° − 0,225) ≈ 2501,4 N (question 4.2 de l'exercice 4)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Sans frottements, l'accélération serait bien plus grande",
          "stepTheme": "Sans frottements, l'accélération serait bien plus grande",
          "stepBadge": "Sans frottements, l'accélération serait bien plus grande",
          "paragraphText": "Sans frottements, ax vaudrait g·sinα = 9,8 × sin 20° ≈ 3,35 m/s².\nLa valeur mesurée (0,225 m/s²) est très inférieure : ce sont les frottements, presque aussi intenses que la composante motrice du poids, qui freinent le véhicule.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p05_q5",
            "type": "mcq",
            "prompt": "Sur cette côte de 20°, l'accélération sans frottements vaudrait environ :",
            "options": [
              "3,35 m/s², bien plus que les 0,225 m/s² mesurés",
              "0,225 m/s², comme avec frottements",
              "9,8 m/s²",
              "0 m/s²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "g·sinα ≈ 3,35 m/s² : l'écart avec la valeur réelle mesure l'effet des frottements."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La distance d'arrêt sur le tronçon horizontal",
          "stepTheme": "La distance d'arrêt sur le tronçon horizontal",
          "stepBadge": "La distance d'arrêt sur le tronçon horizontal",
          "paragraphText": "Sur AB horizontal, le poids et la réaction ont des travaux nuls ; seul le travail de f arrête le véhicule.\nLe TEC donne 0 − ½m·vA² = −f·d, et la résolution obtient d = 36 m.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p05_q6",
            "type": "mcq",
            "prompt": "La distance parcourue sur le tronçon horizontal avant l'arrêt complet vaut :",
            "options": [
              "500 m",
              "36 m",
              "15 m",
              "250 m"
            ],
            "correctAnswerIndex": 1,
            "explanation": "d = m·vA²/(2f) = 36 m (question 4.3 de l'exercice 4)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l02_centre_inertie_p05_q1",
          "type": "mcq",
          "prompt": "Sur la côte, la résultante des forces de frottement f est :",
          "options": [
            "Parallèle à la route et opposée au vecteur-vitesse",
            "Perpendiculaire à la route",
            "Dirigée dans le sens du mouvement",
            "Verticale, comme le poids"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la description de l'énoncé : f est parallèle à la route rectiligne et opposée à la vitesse instantanée."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p05_q2",
          "type": "mcq",
          "prompt": "L'accélération du véhicule entre O et A vaut :",
          "options": [
            "3,35 m/s²",
            "0,225 m/s²",
            "0,45 m/s²",
            "9,8 m/s²"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par la relation Δv² = 2·ax·Δx appliquée entre O et A, la résolution obtient ax = 0,225 m/s² (question 4.1 de l'exercice 4)."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p05_q3",
          "type": "mcq",
          "prompt": "L'accélération du véhicule sur la côte s'exprime par :",
          "options": [
            "ax = g·sinα + f/m",
            "ax = g·cosα − f/m",
            "ax = g·sinα − f/m",
            "ax = f/m seulement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La composante du poids vaut +mg·sinα et celle des frottements −f (question 3.2 de l'exercice 4)."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p05_q4",
          "type": "mcq",
          "prompt": "La résultante des forces de frottement sur le véhicule vaut environ :",
          "options": [
            "250 N",
            "25 N",
            "800 N",
            "2501,4 N"
          ],
          "correctAnswerIndex": 3,
          "explanation": "f = 800 × (9,8 × sin 20° − 0,225) ≈ 2501,4 N (question 4.2 de l'exercice 4)."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p05_q5",
          "type": "mcq",
          "prompt": "Sur cette côte de 20°, l'accélération sans frottements vaudrait environ :",
          "options": [
            "3,35 m/s², bien plus que les 0,225 m/s² mesurés",
            "0,225 m/s², comme avec frottements",
            "9,8 m/s²",
            "0 m/s²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "g·sinα ≈ 3,35 m/s² : l'écart avec la valeur réelle mesure l'effet des frottements."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p05_q6",
          "type": "mcq",
          "prompt": "La distance parcourue sur le tronçon horizontal avant l'arrêt complet vaut :",
          "options": [
            "500 m",
            "36 m",
            "15 m",
            "250 m"
          ],
          "correctAnswerIndex": 1,
          "explanation": "d = m·vA²/(2f) = 36 m (question 4.3 de l'exercice 4)."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l02_centre_inertie_p06",
      "order": 6,
      "title": "Application complète : la piste avec demi-cercle (exercice 5)",
      "summary": "Combiner TEC et TCI : vitesse en B, vitesse constante sur BC, réaction en M et condition de décollage.",
      "conceptExplanation": "Un solide, initialement au repos en A, est lancé sur une piste parfaitement lisse ACD : une force horizontale constante F agit le long de AB (de longueur L = 1,5 m), puis la piste devient horizontale (BC) et se termine par un demi-cercle de rayon r.\nPar le théorème de l'énergie cinétique entre A et B, la vitesse en B vaut vB = √(2FL/m), les travaux du poids et de la réaction étant nuls sur ce tronçon horizontal.\nSur BC, la projection du théorème du centre d'inertie donne ax = 0 : la vitesse reste constante, donc vC = vB.\nSur le demi-cercle, le TEC donne vM en un point repéré par l'angle θ, et le TCI dans la base de Frenet donne la réaction R = 2FL/r − mg(2 − 3cosθ) ; le solide quitte la piste au point K (θ = 90°) si RK = 0, ce qui fixe la force minimale F₀ = mgr/L.",
      "keyRule": "Combiner les deux théorèmes : le TEC pour les vitesses, le TCI (souvent dans Frenet) pour les forces et réactions.",
      "formulas": [
        {
          "name": "Vitesse en B (force motrice sur AB)",
          "formula": "v_B = \\sqrt{\\frac{2 \\times F \\times L}{m}}",
          "note": "Par le TEC entre A (repos) et B."
        },
        {
          "name": "Réaction de la piste sur le demi-cercle",
          "formula": "R = \\frac{2 \\times F \\times L}{r} - m \\times g \\times (2 - 3\\cos\\theta)",
          "note": "Par le TCI projeté dans la base de Frenet."
        },
        {
          "name": "Force minimale pour quitter la piste en K",
          "formula": "F_0 = \\frac{m \\times g \\times r}{L}",
          "note": "Obtenue en écrivant RK = 0 pour θ = 90°."
        }
      ],
      "workedExample": {
        "title": "Pourquoi vC = vB sur le tronçon BC ?",
        "statement": "Entre B et C, la piste est horizontale et parfaitement lisse. Montre que la vitesse du solide ne change pas.",
        "methodSteps": [
          "Les forces sont le poids P et la réaction R, toutes deux verticales.",
          "Le TCI projeté sur l'axe horizontal donne 0 + 0 = m·ax, donc ax = 0.",
          "La vitesse est constante sur BC : vC = vB."
        ],
        "conclusion": "C'est l'établissement demandé à la question 3.2 de l'exercice 5 (le TEC donnerait le même résultat)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Le bilan des forces entre A et B",
          "stepTheme": "Le bilan des forces entre A et B",
          "stepBadge": "Le bilan des forces entre A et B",
          "paragraphText": "Entre A et B, la solution liste trois forces : le poids P, la réaction R de la piste et la force motrice F, horizontale et constante.\nLa piste étant parfaitement lisse, il n'y a pas de frottements.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p06_q1",
            "type": "mcq",
            "prompt": "Entre A et B, les forces extérieures appliquées au solide sont :",
            "options": [
              "P, R et la force motrice F",
              "P seulement",
              "F seulement",
              "P, R, F et les frottements"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le bilan de la question 2.1 de l'exercice 5 : la piste lisse supprime les frottements."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "vB par le théorème de l'énergie cinétique",
          "stepTheme": "vB par le théorème de l'énergie cinétique",
          "stepBadge": "vB par le théorème de l'énergie cinétique",
          "paragraphText": "Entre A (repos) et B, les travaux de P et de R sont nuls (forces verticales, déplacement horizontal).\nLe TEC donne ½m·vB² = F·L, soit vB = √(2FL/m).",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p06_q2",
            "type": "mcq",
            "prompt": "La vitesse du solide au point B s'exprime par :",
            "options": [
              "$v_B = F \\times L/m$",
              "$v_B = \\sqrt{2FL/m}$",
              "$v_B = \\sqrt{FL/(2m)}$",
              "$v_B = 2FL/m$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'expression établie à la question 3.1 par le théorème de l'énergie cinétique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Vitesse constante entre B et C",
          "stepTheme": "Vitesse constante entre B et C",
          "stepBadge": "Vitesse constante entre B et C",
          "paragraphText": "Sur BC horizontal et lisse, aucune force n'a de composante horizontale.\nLe TCI donne ax = 0, donc la vitesse est constante : vC = vB.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p06_q3",
            "type": "mcq",
            "prompt": "Entre B et C (tronçon horizontal lisse), la vitesse du solide :",
            "options": [
              "Augmente",
              "Diminue",
              "Reste constante : vC = vB",
              "S'annule en C"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Projection nulle du TCI sur l'horizontale, donc accélération nulle (question 3.2 de l'exercice 5)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La vitesse en M sur le demi-cercle",
          "stepTheme": "La vitesse en M sur le demi-cercle",
          "stepBadge": "La vitesse en M sur le demi-cercle",
          "paragraphText": "Entre C et un point M du demi-cercle (repéré par θ, hauteur h = r(1 − cosθ)), le TEC tient compte du travail résistant du poids.\nLa solution obtient vM = √(2FL/m − 2gr(1 − cosθ)) : le solide ralentit en montant.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p06_q4",
            "type": "mcq",
            "prompt": "En montant sur le demi-cercle (θ croissant depuis C), la vitesse du solide :",
            "options": [
              "Augmente comme en B",
              "Reste égale à vB",
              "Devient nulle dès l'entrée",
              "Diminue, car le travail du poids est résistant"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le terme −2gr(1 − cosθ) de l'expression de vM traduit la perte de vitesse en montée (question 3.3)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La réaction R par le TCI dans Frenet",
          "stepTheme": "La réaction R par le TCI dans Frenet",
          "stepBadge": "La réaction R par le TCI dans Frenet",
          "paragraphText": "Au point M, on projette le TCI suivant la normale de Frenet : R − P·cosθ = m·vM²/r.\nEn remplaçant vM, la solution obtient R = 2FL/r − mg(2 − 3cosθ).",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p06_q5",
            "type": "mcq",
            "prompt": "La réaction de la piste en M s'obtient en projetant le théorème du centre d'inertie :",
            "options": [
              "Dans la base de Frenet, suivant la normale (accélération normale m·vM²/r)",
              "Sur l'axe vertical uniquement",
              "Sans tenir compte du poids",
              "Par le seul théorème de l'énergie cinétique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la démarche de la question 3.4 : R − P·cosθ = m·an dans la base de Frenet."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La condition de décollage : R = 0",
          "stepTheme": "La condition de décollage : R = 0",
          "stepBadge": "La condition de décollage : R = 0",
          "paragraphText": "Le solide quitte la piste au point K (θ = 90°) lorsque la réaction de la piste s'annule : RK = 0.\nCette condition donne la force minimale F₀ = mgr/L : en dessous, R reste positive partout et le solide ne décolle pas en K.",
          "exercise": {
            "id": "terminale_c_physique_l02_centre_inertie_p06_q6",
            "type": "mcq",
            "prompt": "Le solide quitte la piste au point K si :",
            "options": [
              "Sa vitesse s'annule en K",
              "La réaction de la piste s'annule en K : RK = 0",
              "La force F s'annule",
              "Le poids devient nul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sans contact, plus de réaction : la condition RK = 0 fixe F₀ = mgr/L (question 4.1 de l'exercice 5)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l02_centre_inertie_p06_q1",
          "type": "mcq",
          "prompt": "Entre A et B, les forces extérieures appliquées au solide sont :",
          "options": [
            "P, R et la force motrice F",
            "P seulement",
            "F seulement",
            "P, R, F et les frottements"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le bilan de la question 2.1 de l'exercice 5 : la piste lisse supprime les frottements."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p06_q2",
          "type": "mcq",
          "prompt": "La vitesse du solide au point B s'exprime par :",
          "options": [
            "$v_B = F \\times L/m$",
            "$v_B = \\sqrt{2FL/m}$",
            "$v_B = \\sqrt{FL/(2m)}$",
            "$v_B = 2FL/m$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'expression établie à la question 3.1 par le théorème de l'énergie cinétique."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p06_q3",
          "type": "mcq",
          "prompt": "Entre B et C (tronçon horizontal lisse), la vitesse du solide :",
          "options": [
            "Augmente",
            "Diminue",
            "Reste constante : vC = vB",
            "S'annule en C"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Projection nulle du TCI sur l'horizontale, donc accélération nulle (question 3.2 de l'exercice 5)."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p06_q4",
          "type": "mcq",
          "prompt": "En montant sur le demi-cercle (θ croissant depuis C), la vitesse du solide :",
          "options": [
            "Augmente comme en B",
            "Reste égale à vB",
            "Devient nulle dès l'entrée",
            "Diminue, car le travail du poids est résistant"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le terme −2gr(1 − cosθ) de l'expression de vM traduit la perte de vitesse en montée (question 3.3)."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p06_q5",
          "type": "mcq",
          "prompt": "La réaction de la piste en M s'obtient en projetant le théorème du centre d'inertie :",
          "options": [
            "Dans la base de Frenet, suivant la normale (accélération normale m·vM²/r)",
            "Sur l'axe vertical uniquement",
            "Sans tenir compte du poids",
            "Par le seul théorème de l'énergie cinétique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la démarche de la question 3.4 : R − P·cosθ = m·an dans la base de Frenet."
        },
        {
          "id": "terminale_c_physique_l02_centre_inertie_p06_q6",
          "type": "mcq",
          "prompt": "Le solide quitte la piste au point K si :",
          "options": [
            "Sa vitesse s'annule en K",
            "La réaction de la piste s'annule en K : RK = 0",
            "La force F s'annule",
            "Le poids devient nul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sans contact, plus de réaction : la condition RK = 0 fixe F₀ = mgr/L (question 4.1 de l'exercice 5)."
        }
      ]
    }
  ]
};
