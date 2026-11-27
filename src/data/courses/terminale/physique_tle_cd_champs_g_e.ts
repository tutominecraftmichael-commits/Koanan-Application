import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 4 : Mouvements dans les champs g et E uniformes » (Terminale C/D ; format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1339
export const PHYSIQUE_TLE_CD_L04_CHAMPS_G_E: CurriculumChapter = {
  "id": "terminale_c_physique_l04_champs_g_e",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 4,
  "title": "Leçon 4 : Mouvements dans les champs g et E uniformes",
  "summary": "Après la notion de champ uniforme, on établit les équations horaires et la trajectoire parabolique d'un projectile dans le champ de pesanteur, puis le mouvement d'une particule chargée dans un champ électrostatique uniforme et son application à l'oscilloscope.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1339",
  "points": [
    {
      "id": "terminale_c_physique_l04_champs_g_e_p01",
      "order": 1,
      "title": "La notion de champ uniforme",
      "summary": "Un champ est uniforme si son vecteur a même direction, même sens et même intensité en tout point d'une région.",
      "conceptExplanation": "Un champ est uniforme dans une région de l'espace si les caractéristiques du vecteur-champ (direction, sens, intensité) sont les mêmes en tout point de cette région.\nDeux exemples structurent la leçon : dans une région au voisinage de la Terre, le champ de pesanteur g peut être considéré comme uniforme ; entre les armatures d'un condensateur plan chargé, le champ électrostatique E est uniforme.\nAttention : une norme constante ne suffit pas pour conclure à l'uniformité — l'exercice 1 le classe « Faux » : il faut aussi la direction et le sens constants.",
      "keyRule": "Champ uniforme = vecteur-champ identique (direction, sens, intensité) en tout point de la région.",
      "formulas": [
        {
          "name": "Exemples de champs uniformes",
          "formula": "\\vec{g} \\text{ au voisinage de la Terre ; } \\vec{E} \\text{ entre les armatures d'un condensateur plan}",
          "note": "Ce sont les deux exemples du §1 du résumé."
        }
      ],
      "workedExample": {
        "title": "Vrai ou faux ? (exercice 1)",
        "statement": "« Un champ électrostatique E est uniforme si sa norme est constante » et « un champ est uniforme si ses caractéristiques sont les mêmes en tout point de l'espace » : vrai ou faux ?",
        "methodSteps": [
          "La première affirmation est fausse : la norme constante ne suffit pas.",
          "Il faut même direction, même sens et même valeur en tout point.",
          "La seconde affirmation est donc vraie."
        ],
        "conclusion": "Ce sont les réponses 2 (Faux) et 3 (Vrai) de la solution de l'exercice 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d'un champ uniforme",
          "stepTheme": "La définition d'un champ uniforme",
          "stepBadge": "La définition d'un champ uniforme",
          "paragraphText": "• Champ uniforme : champ dont le vecteur-champ a les mêmes caractéristiques (direction, sens, intensité) en tout point d'une région de l'espace.\nLes lignes de champ d'un champ uniforme sont des droites parallèles et équidistantes.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p01_q1",
            "type": "mcq",
            "prompt": "Un champ est uniforme dans une région si son vecteur-champ y a, en tout point :",
            "options": [
              "Même direction, même sens et même intensité",
              "Seulement la même norme",
              "Seulement la même direction",
              "Une intensité proportionnelle à la distance"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §1 du résumé, reprise dans la phrase reconstituée de l'exercice 3."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Piège : la norme constante ne suffit pas",
          "stepTheme": "Piège : la norme constante ne suffit pas",
          "stepBadge": "Piège : la norme constante ne suffit pas",
          "paragraphText": "L'affirmation « un champ électrostatique est uniforme si sa norme est constante » est classée Faux dans l'exercice 1.\nUn champ peut garder la même norme en tout point tout en changeant de direction (par exemple autour d'une charge ponctuelle) : il n'est alors pas uniforme.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p01_q2",
            "type": "mcq",
            "prompt": "« Un champ est uniforme si sa norme est constante » : cette affirmation est :",
            "options": [
              "Vraie",
              "Fausse : il faut aussi même direction et même sens en tout point",
              "Vraie seulement pour le champ de pesanteur",
              "Fausse car la norme doit varier"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la réponse 2 de l'exercice 1 : l'uniformité porte sur les trois caractéristiques du vecteur."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le champ de pesanteur au voisinage de la Terre",
          "stepTheme": "Le champ de pesanteur au voisinage de la Terre",
          "stepBadge": "Le champ de pesanteur au voisinage de la Terre",
          "paragraphText": "À l'échelle d'une expérience locale, les variations du champ de pesanteur sont négligeables.\nLe résumé le considère donc comme uniforme au voisinage de la Terre : vertical, dirigé vers le bas, d'intensité g constante.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p01_q3",
            "type": "mcq",
            "prompt": "Au voisinage de la Terre, le champ de pesanteur peut être considéré comme :",
            "options": [
              "Nul",
              "Radial et variable",
              "Uniforme",
              "Horizontal"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le premier exemple du §1 : localement, g garde même direction, même sens et même intensité."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le champ entre les armatures d'un condensateur plan",
          "stepTheme": "Le champ entre les armatures d'un condensateur plan",
          "stepBadge": "Le champ entre les armatures d'un condensateur plan",
          "paragraphText": "Entre les armatures d'un condensateur plan chargé, le champ électrostatique est uniforme.\nC'est le dispositif utilisé dans toute la suite de la leçon pour dévier les particules chargées, et dans l'oscilloscope.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p01_q4",
            "type": "mcq",
            "prompt": "Le champ électrostatique est uniforme :",
            "options": [
              "Autour d'une charge ponctuelle",
              "Près d'un fil chargé",
              "Uniquement dans le vide",
              "Entre les armatures d'un condensateur plan chargé"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le second exemple du §1 du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La situation d'apprentissage : deux mouvements à comparer",
          "stepTheme": "La situation d'apprentissage : deux mouvements à comparer",
          "stepBadge": "La situation d'apprentissage : deux mouvements à comparer",
          "paragraphText": "La situation d'apprentissage annonce le fil conducteur : le mouvement d'un projectile dans le champ de pesanteur uniforme est indépendant de sa masse.\nCe n'est pas le cas d'une particule chargée dans un champ électrostatique uniforme.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p01_q5",
            "type": "mcq",
            "prompt": "D'après la situation d'apprentissage, le mouvement indépendant de la masse de l'objet est celui :",
            "options": [
              "Du projectile dans le champ de pesanteur uniforme",
              "De la particule chargée dans le champ électrostatique",
              "Des deux",
              "D'aucun des deux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour le projectile a = g ; pour la particule a = (q/m)·E, qui contient la masse."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le mouvement d'une particule chargée dépend de sa masse",
          "stepTheme": "Le mouvement d'une particule chargée dépend de sa masse",
          "stepBadge": "Le mouvement d'une particule chargée dépend de sa masse",
          "paragraphText": "L'exercice 1 classe « Vrai » l'affirmation : le mouvement du centre d'inertie d'une particule chargée dans un champ électrostatique dépend de sa masse.\nEn effet, son accélération a = (q/m)·E fait intervenir le rapport charge sur masse.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p01_q6",
            "type": "mcq",
            "prompt": "Le mouvement d'une particule chargée dans un champ électrostatique uniforme dépend de sa masse car :",
            "options": [
              "Son poids est prépondérant",
              "Son accélération vaut (q/m)·E",
              "Le champ dépend de la masse",
              "Sa charge dépend de la masse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Réponse 4 (Vrai) de l'exercice 1 : a = qE/m contient explicitement m au dénominateur."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l04_champs_g_e_p01_q1",
          "type": "mcq",
          "prompt": "Un champ est uniforme dans une région si son vecteur-champ y a, en tout point :",
          "options": [
            "Même direction, même sens et même intensité",
            "Seulement la même norme",
            "Seulement la même direction",
            "Une intensité proportionnelle à la distance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §1 du résumé, reprise dans la phrase reconstituée de l'exercice 3."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p01_q2",
          "type": "mcq",
          "prompt": "« Un champ est uniforme si sa norme est constante » : cette affirmation est :",
          "options": [
            "Vraie",
            "Fausse : il faut aussi même direction et même sens en tout point",
            "Vraie seulement pour le champ de pesanteur",
            "Fausse car la norme doit varier"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la réponse 2 de l'exercice 1 : l'uniformité porte sur les trois caractéristiques du vecteur."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p01_q3",
          "type": "mcq",
          "prompt": "Au voisinage de la Terre, le champ de pesanteur peut être considéré comme :",
          "options": [
            "Nul",
            "Radial et variable",
            "Uniforme",
            "Horizontal"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le premier exemple du §1 : localement, g garde même direction, même sens et même intensité."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p01_q4",
          "type": "mcq",
          "prompt": "Le champ électrostatique est uniforme :",
          "options": [
            "Autour d'une charge ponctuelle",
            "Près d'un fil chargé",
            "Uniquement dans le vide",
            "Entre les armatures d'un condensateur plan chargé"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le second exemple du §1 du résumé."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p01_q5",
          "type": "mcq",
          "prompt": "D'après la situation d'apprentissage, le mouvement indépendant de la masse de l'objet est celui :",
          "options": [
            "Du projectile dans le champ de pesanteur uniforme",
            "De la particule chargée dans le champ électrostatique",
            "Des deux",
            "D'aucun des deux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour le projectile a = g ; pour la particule a = (q/m)·E, qui contient la masse."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p01_q6",
          "type": "mcq",
          "prompt": "Le mouvement d'une particule chargée dans un champ électrostatique uniforme dépend de sa masse car :",
          "options": [
            "Son poids est prépondérant",
            "Son accélération vaut (q/m)·E",
            "Le champ dépend de la masse",
            "Sa charge dépend de la masse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Réponse 4 (Vrai) de l'exercice 1 : a = qE/m contient explicitement m au dénominateur."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l04_champs_g_e_p02",
      "order": 2,
      "title": "Le projectile : accélération et équations horaires",
      "summary": "Soumis à son seul poids, le projectile a une accélération égale à g ; son mouvement est plan et sa vitesse horizontale constante.",
      "conceptExplanation": "On étudie le projectile dans le référentiel terrestre supposé galiléen, en négligeant les frottements de l'air devant son poids.\nLe théorème du centre d'inertie donne P = m·a, donc a = g : l'accélération est verticale, constante, indépendante de la masse — l'exercice 1 classe « Faux » l'affirmation contraire.\nLancé avec une vitesse v₀ faisant l'angle α avec l'horizontale, le projectile a pour composantes : vx = v₀·cos α (constante) et vz = −g·t + v₀·sin α.\nLes équations horaires sont alors x(t) = (v₀·cos α)·t et z(t) = −½·g·t² + (v₀·sin α)·t : le mouvement se déroule dans le plan vertical contenant v₀.",
      "keyRule": "Projectile : a = g ; le mouvement horizontal est uniforme, le mouvement vertical est uniformément varié.",
      "formulas": [
        {
          "name": "Équations horaires du projectile",
          "formula": "x = (v_0 \\cos\\alpha) \\times t \\quad ; \\quad z = -\\frac{1}{2} g t^2 + (v_0 \\sin\\alpha) t",
          "note": "L'origine est le point de lancement, Oz vertical ascendant."
        },
        {
          "name": "Composantes de la vitesse",
          "formula": "v_x = v_0 \\cos\\alpha \\quad ; \\quad v_z = -g t + v_0 \\sin\\alpha",
          "note": "vx est constante : pas d'accélération horizontale."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application : deux lancers à comparer",
        "statement": "Détermine les équations horaires puis l'équation cartésienne pour (a) un projectile lancé à la hauteur h avec l'angle α, (b) un projectile lancé horizontalement depuis la hauteur h.",
        "methodSteps": [
          "Cas (a) : z = −½·g·t² + (v₀·sin α)·t + h, et la trajectoire contient le terme en x·tan α et la hauteur h.",
          "Cas (b) : vitesse initiale horizontale : x = v₀·t et z = −½·g·t² + h.",
          "Dans les deux cas, la trajectoire s'obtient en éliminant t entre x(t) et z(t)."
        ],
        "conclusion": "Ce sont les deux corrigés de l'activité d'application du §2 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'accélération vaut g",
          "stepTheme": "L'accélération vaut g",
          "stepBadge": "L'accélération vaut g",
          "paragraphText": "Le projectile n'est soumis qu'à son poids (frottements négligés).\nLe théorème du centre d'inertie donne a = g : une accélération verticale, dirigée vers le bas, d'intensité constante.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p02_q1",
            "type": "mcq",
            "prompt": "L'accélération d'un projectile en chute libre (frottements négligés) est :",
            "options": [
              "Égale au vecteur champ de pesanteur g",
              "Nulle",
              "Égale à sa vitesse",
              "Proportionnelle à sa masse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "P = m·a donne a = g (§2.2), quel que soit le projectile."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Piège : l'accélération ne dépend pas de la masse",
          "stepTheme": "Piège : l'accélération ne dépend pas de la masse",
          "stepBadge": "Piège : l'accélération ne dépend pas de la masse",
          "paragraphText": "L'affirmation « l'accélération du centre d'inertie d'un point mobile en chute libre dépend de sa masse » est la réponse 1 de l'exercice 1 : Faux.\nLa masse se simplifie dans m·a = m·g : deux projectiles différents ont la même accélération, donc le même mouvement à conditions initiales égales.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p02_q2",
            "type": "mcq",
            "prompt": "Deux projectiles de masses différentes, lancés dans les mêmes conditions, ont pendant leur vol :",
            "options": [
              "Des accélérations proportionnelles à leurs masses",
              "La même accélération g et le même mouvement",
              "Des trajectoires différentes",
              "Des portées proportionnelles à leurs masses"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la réponse 1 (Faux) de l'exercice 1 et le point de départ de la situation d'apprentissage."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le mouvement horizontal est uniforme",
          "stepTheme": "Le mouvement horizontal est uniforme",
          "stepBadge": "Le mouvement horizontal est uniforme",
          "paragraphText": "Aucune force n'a de composante horizontale : ax = 0.\nLa composante vx = v₀·cos α reste donc constante pendant tout le vol, et x = (v₀·cos α)·t.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p02_q3",
            "type": "mcq",
            "prompt": "Pendant le vol d'un projectile, la composante horizontale de sa vitesse :",
            "options": [
              "Augmente régulièrement",
              "Diminue régulièrement",
              "Reste constante, égale à v₀·cos α",
              "S'annule au sommet"
            ],
            "correctAnswerIndex": 2,
            "explanation": "ax = 0 implique vx constante (§2.3) : le mouvement projeté sur Ox est rectiligne uniforme."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le mouvement vertical est uniformément varié",
          "stepTheme": "Le mouvement vertical est uniformément varié",
          "stepBadge": "Le mouvement vertical est uniformément varié",
          "paragraphText": "Sur l'axe vertical, az = −g (Oz ascendant) : la composante vz = −g·t + v₀·sin α diminue régulièrement.\nElle s'annule au sommet de la trajectoire, puis devient négative pendant la descente.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p02_q4",
            "type": "mcq",
            "prompt": "Au sommet de la trajectoire d'un projectile, la composante verticale de la vitesse est :",
            "options": [
              "Maximale",
              "Égale à v₀·sin α",
              "Égale à l'accélération",
              "Nulle"
            ],
            "correctAnswerIndex": 3,
            "explanation": "vz = −g·t + v₀·sin α s'annule à l'instant tS du sommet, mais vx subsiste : la vitesse totale n'est pas nulle."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le mouvement est plan",
          "stepTheme": "Le mouvement est plan",
          "stepBadge": "Le mouvement est plan",
          "paragraphText": "La composante de la position perpendiculaire au plan (Oxz) reste nulle : y = 0 à tout instant.\nLe projectile décrit donc sa trajectoire dans le plan vertical qui contient le vecteur vitesse initial.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p02_q5",
            "type": "mcq",
            "prompt": "La trajectoire d'un projectile lancé dans le champ de pesanteur est contenue dans :",
            "options": [
              "Le plan vertical contenant le vecteur vitesse initial",
              "Un plan horizontal",
              "Un plan incliné à 45°",
              "Aucun plan : elle est gauche"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les équations horaires donnent y = 0 (§2.3) : le mouvement est plan."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le cas du lancer horizontal",
          "stepTheme": "Le cas du lancer horizontal",
          "stepBadge": "Le cas du lancer horizontal",
          "paragraphText": "Dans le cas (b) de l'activité, le projectile est lancé horizontalement (α = 0) depuis la hauteur h.\nSes équations deviennent x = v₀·t et z = −½·g·t² + h : il tombe en décrivant une demi-parabole.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p02_q6",
            "type": "mcq",
            "prompt": "Pour un projectile lancé horizontalement depuis la hauteur h, l'équation horaire verticale est :",
            "options": [
              "z = v₀·t + h",
              "z = −½·g·t² + h",
              "z = ½·g·t² + h",
              "z = h, constante"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La composante initiale verticale est nulle : il ne reste que le terme de chute −½·g·t² et la hauteur initiale h."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l04_champs_g_e_p02_q1",
          "type": "mcq",
          "prompt": "L'accélération d'un projectile en chute libre (frottements négligés) est :",
          "options": [
            "Égale au vecteur champ de pesanteur g",
            "Nulle",
            "Égale à sa vitesse",
            "Proportionnelle à sa masse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "P = m·a donne a = g (§2.2), quel que soit le projectile."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p02_q2",
          "type": "mcq",
          "prompt": "Deux projectiles de masses différentes, lancés dans les mêmes conditions, ont pendant leur vol :",
          "options": [
            "Des accélérations proportionnelles à leurs masses",
            "La même accélération g et le même mouvement",
            "Des trajectoires différentes",
            "Des portées proportionnelles à leurs masses"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la réponse 1 (Faux) de l'exercice 1 et le point de départ de la situation d'apprentissage."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p02_q3",
          "type": "mcq",
          "prompt": "Pendant le vol d'un projectile, la composante horizontale de sa vitesse :",
          "options": [
            "Augmente régulièrement",
            "Diminue régulièrement",
            "Reste constante, égale à v₀·cos α",
            "S'annule au sommet"
          ],
          "correctAnswerIndex": 2,
          "explanation": "ax = 0 implique vx constante (§2.3) : le mouvement projeté sur Ox est rectiligne uniforme."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p02_q4",
          "type": "mcq",
          "prompt": "Au sommet de la trajectoire d'un projectile, la composante verticale de la vitesse est :",
          "options": [
            "Maximale",
            "Égale à v₀·sin α",
            "Égale à l'accélération",
            "Nulle"
          ],
          "correctAnswerIndex": 3,
          "explanation": "vz = −g·t + v₀·sin α s'annule à l'instant tS du sommet, mais vx subsiste : la vitesse totale n'est pas nulle."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p02_q5",
          "type": "mcq",
          "prompt": "La trajectoire d'un projectile lancé dans le champ de pesanteur est contenue dans :",
          "options": [
            "Le plan vertical contenant le vecteur vitesse initial",
            "Un plan horizontal",
            "Un plan incliné à 45°",
            "Aucun plan : elle est gauche"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les équations horaires donnent y = 0 (§2.3) : le mouvement est plan."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p02_q6",
          "type": "mcq",
          "prompt": "Pour un projectile lancé horizontalement depuis la hauteur h, l'équation horaire verticale est :",
          "options": [
            "z = v₀·t + h",
            "z = −½·g·t² + h",
            "z = ½·g·t² + h",
            "z = h, constante"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La composante initiale verticale est nulle : il ne reste que le terme de chute −½·g·t² et la hauteur initiale h."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l04_champs_g_e_p03",
      "order": 3,
      "title": "Trajectoire du projectile : parabole, flèche et portée",
      "summary": "La trajectoire est une parabole ; la flèche vaut v₀²sin²α/(2g) et la portée v₀²sin(2α)/g, maximale à 45°.",
      "conceptExplanation": "En éliminant le temps entre x(t) et z(t), on obtient l'équation cartésienne de la trajectoire : z = −(g/(2·v₀²·cos²α))·x² + x·tan α — celle d'une parabole.\nAu sommet S, vz = 0 à l'instant tS = v₀·sin α/g, et la hauteur maximale (la flèche) vaut ZS = v₀²·sin²α/(2g).\nLa portée est la distance entre le point de lancement O et le point de chute P sur l'horizontale : xP = v₀²·sin(2α)/g.\nLe résumé remarque que la portée est maximale pour sin(2α) = 1, c'est-à-dire pour un angle de tir α = 45°.",
      "keyRule": "Parabole : flèche en v₀²sin²α/(2g), portée en v₀²sin(2α)/g, portée maximale à α = 45°.",
      "formulas": [
        {
          "name": "Flèche (hauteur maximale)",
          "formula": "Z_S = \\frac{v_0^2 \\sin^2\\alpha}{2g}",
          "note": "Atteinte à l'instant tS = v₀·sin α/g, quand vz = 0."
        },
        {
          "name": "Portée horizontale",
          "formula": "x_P = \\frac{v_0^2 \\sin 2\\alpha}{g}",
          "note": "Maximale pour α = 45°."
        },
        {
          "name": "Équation de la trajectoire",
          "formula": "z = -\\frac{g}{2 v_0^2 \\cos^2\\alpha} x^2 + x \\tan\\alpha",
          "note": "Équation d'une parabole tournée vers le bas."
        }
      ],
      "workedExample": {
        "title": "Le projectile de l'exercice 2 (v₀ = 200 m/s, α = 20°)",
        "statement": "Un projectile de masse 860 g est lancé à v₀ = 200 m/s sous l'angle α = 20°. Détermine la hauteur atteinte, la durée du lancer et la vitesse au point d'impact.",
        "methodSteps": [
          "Flèche : h = v₀²·sin²α/(2g) = 238,7 m.",
          "Durée totale du vol : tp = 2·v₀·sin α/g = 13,96 s.",
          "À l'impact, vz a repris la valeur −v₀·sin α : la vitesse vaut donc vp = v₀ = 200 m/s."
        ],
        "conclusion": "Ce sont les trois résultats de la solution de l'exercice 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La trajectoire est une parabole",
          "stepTheme": "La trajectoire est une parabole",
          "stepBadge": "La trajectoire est une parabole",
          "paragraphText": "L'équation cartésienne z(x) est du second degré en x : la trajectoire est une parabole.\nSon coefficient dominant est négatif : la parabole est tournée vers le bas.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p03_q1",
            "type": "mcq",
            "prompt": "La trajectoire d'un projectile dans le champ de pesanteur uniforme est :",
            "options": [
              "Une parabole",
              "Un arc de cercle",
              "Une droite inclinée",
              "Une ellipse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "z(x) contient un terme en x² (§2.4) : c'est l'équation d'une parabole."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Obtenir l'équation cartésienne",
          "stepTheme": "Obtenir l'équation cartésienne",
          "stepBadge": "Obtenir l'équation cartésienne",
          "paragraphText": "La méthode du résumé : on tire t de l'équation x(t), soit t = x/(v₀·cos α).\nOn reporte ensuite cette expression dans z(t) pour obtenir z en fonction de x seul.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p03_q2",
            "type": "mcq",
            "prompt": "Pour établir l'équation cartésienne de la trajectoire, on :",
            "options": [
              "Dérive z(t) par rapport à t",
              "Élimine le temps t entre x(t) et z(t)",
              "Pose x = z",
              "Intègre l'accélération deux fois"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la démarche du §2.4 : t = x/(v₀ cos α) reporté dans z(t)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La flèche : hauteur maximale",
          "stepTheme": "La flèche : hauteur maximale",
          "stepBadge": "La flèche : hauteur maximale",
          "paragraphText": "Le sommet est atteint quand vz = 0, à l'instant tS = v₀·sin α/g.\nLa hauteur maximale vaut alors ZS = v₀²·sin²α/(2g).",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p03_q3",
            "type": "mcq",
            "prompt": "La hauteur maximale atteinte par un projectile vaut :",
            "options": [
              "$v_0^2/(2g)$ dans tous les cas",
              "$v_0 \\sin\\alpha/g$",
              "$v_0^2 \\sin^2\\alpha/(2g)$",
              "$v_0^2 \\sin 2\\alpha/g$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la flèche ZS du §2.4 ; la dernière expression est celle de la portée, pas de la hauteur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La portée et l'angle optimal de 45°",
          "stepTheme": "La portée et l'angle optimal de 45°",
          "stepBadge": "La portée et l'angle optimal de 45°",
          "paragraphText": "La portée est la distance entre le point de lancement et le point de chute sur l'horizontale : xP = v₀²·sin(2α)/g.\nLe résumé remarque qu'elle est maximale pour sin(2α) = 1, soit α = 45°.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p03_q4",
            "type": "mcq",
            "prompt": "À vitesse initiale fixée, la portée d'un projectile est maximale pour un angle de tir de :",
            "options": [
              "20°",
              "30°",
              "60°",
              "45°"
            ],
            "correctAnswerIndex": 3,
            "explanation": "sin(2α) est maximal (= 1) pour 2α = 90°, donc α = 45° (§2.5)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Exercice 2 : hauteur et durée du vol",
          "stepTheme": "Exercice 2 : hauteur et durée du vol",
          "stepBadge": "Exercice 2 : hauteur et durée du vol",
          "paragraphText": "Pour v₀ = 200 m/s et α = 20°, la solution de l'exercice 2 obtient une flèche de 238,7 m.\nLa durée totale du lancer, jusqu'au point de chute au sol, vaut tp = 13,96 s.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p03_q5",
            "type": "mcq",
            "prompt": "Dans l'exercice 2 (v₀ = 200 m/s, α = 20°), la hauteur maximale atteinte vaut environ :",
            "options": [
              "238,7 m",
              "23,87 m",
              "2 500 m",
              "866 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "h = v₀²·sin²α/(2g) = 238,7 m dans la solution de l'exercice 2."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La vitesse à l'impact égale la vitesse initiale",
          "stepTheme": "La vitesse à l'impact égale la vitesse initiale",
          "stepBadge": "La vitesse à l'impact égale la vitesse initiale",
          "paragraphText": "Au point de chute situé à la même altitude que le lancement, vz a repris la valeur initiale au signe près.\nLa solution de l'exercice 2 conclut donc vp = v₀ = 200 m/s : le projectile retombe avec la même vitesse qu'au départ.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p03_q6",
            "type": "mcq",
            "prompt": "Un projectile retombe au sol à la même altitude que son point de lancement : sa vitesse à l'impact vaut :",
            "options": [
              "0 m/s",
              "La même valeur qu'à son lancement, v₀",
              "Le double de v₀",
              "√2 fois v₀"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par symétrie du mouvement, vp = v₀ : c'est la conclusion de la question 3 de l'exercice 2."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l04_champs_g_e_p03_q1",
          "type": "mcq",
          "prompt": "La trajectoire d'un projectile dans le champ de pesanteur uniforme est :",
          "options": [
            "Une parabole",
            "Un arc de cercle",
            "Une droite inclinée",
            "Une ellipse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "z(x) contient un terme en x² (§2.4) : c'est l'équation d'une parabole."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p03_q2",
          "type": "mcq",
          "prompt": "Pour établir l'équation cartésienne de la trajectoire, on :",
          "options": [
            "Dérive z(t) par rapport à t",
            "Élimine le temps t entre x(t) et z(t)",
            "Pose x = z",
            "Intègre l'accélération deux fois"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la démarche du §2.4 : t = x/(v₀ cos α) reporté dans z(t)."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p03_q3",
          "type": "mcq",
          "prompt": "La hauteur maximale atteinte par un projectile vaut :",
          "options": [
            "$v_0^2/(2g)$ dans tous les cas",
            "$v_0 \\sin\\alpha/g$",
            "$v_0^2 \\sin^2\\alpha/(2g)$",
            "$v_0^2 \\sin 2\\alpha/g$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la flèche ZS du §2.4 ; la dernière expression est celle de la portée, pas de la hauteur."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p03_q4",
          "type": "mcq",
          "prompt": "À vitesse initiale fixée, la portée d'un projectile est maximale pour un angle de tir de :",
          "options": [
            "20°",
            "30°",
            "60°",
            "45°"
          ],
          "correctAnswerIndex": 3,
          "explanation": "sin(2α) est maximal (= 1) pour 2α = 90°, donc α = 45° (§2.5)."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p03_q5",
          "type": "mcq",
          "prompt": "Dans l'exercice 2 (v₀ = 200 m/s, α = 20°), la hauteur maximale atteinte vaut environ :",
          "options": [
            "238,7 m",
            "23,87 m",
            "2 500 m",
            "866 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "h = v₀²·sin²α/(2g) = 238,7 m dans la solution de l'exercice 2."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p03_q6",
          "type": "mcq",
          "prompt": "Un projectile retombe au sol à la même altitude que son point de lancement : sa vitesse à l'impact vaut :",
          "options": [
            "0 m/s",
            "La même valeur qu'à son lancement, v₀",
            "Le double de v₀",
            "√2 fois v₀"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par symétrie du mouvement, vp = v₀ : c'est la conclusion de la question 3 de l'exercice 2."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l04_champs_g_e_p04",
      "order": 4,
      "title": "Le champ électrique uniforme et la force électrostatique",
      "summary": "Entre les plaques d'un condensateur plan, E = U/d, perpendiculaire aux plaques, des potentiels décroissants ; une charge q y subit F = q·E.",
      "conceptExplanation": "Un condensateur plan chargé crée entre ses armatures un champ électrostatique uniforme E.\nLe vecteur E est perpendiculaire aux armatures et dirigé dans le sens des potentiels décroissants, de l'armature positive vers l'armature négative.\nSa norme vaut E = U/d, où U est la tension entre les armatures et d leur distance ; dans la situation d'évaluation, U = 120 V et d = 3 cm donnent E = 4000 V/m.\nUne particule de charge q placée dans ce champ subit la force électrostatique F = q·E : dans le même sens que E si q > 0, en sens opposé si q < 0.",
      "keyRule": "E = U/d (V/m), perpendiculaire aux plaques, du + vers le − ; F = q·E.",
      "formulas": [
        {
          "name": "Champ dans un condensateur plan",
          "formula": "E = \\frac{U}{d}",
          "note": "U en volts, d en mètres : E s'exprime en V/m."
        },
        {
          "name": "Force électrostatique",
          "formula": "\\vec{F} = q \\times \\vec{E}",
          "note": "Même sens que E si q > 0, sens opposé si q < 0."
        }
      ],
      "workedExample": {
        "title": "Le champ entre les plaques de l'oscilloscope (situation d'évaluation)",
        "statement": "Entre les armatures horizontales P et P' distantes de d = 3 cm, on établit la tension UPP' = 120 V. Donne les caractéristiques du vecteur champ E.",
        "methodSteps": [
          "Direction : perpendiculaire aux armatures.",
          "Sens : de l'armature P vers l'armature P', c'est-à-dire des potentiels décroissants puisque UPP' > 0.",
          "Norme : E = U/d, soit 4000 V/m."
        ],
        "conclusion": "Ce sont les caractéristiques données dans la solution de la situation d'évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La norme du champ : E = U/d",
          "stepTheme": "La norme du champ : E = U/d",
          "stepBadge": "La norme du champ : E = U/d",
          "paragraphText": "La norme du champ entre les armatures se calcule par E = U/d.\nPlus les armatures sont proches ou la tension élevée, plus le champ est intense.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p04_q1",
            "type": "mcq",
            "prompt": "Le champ électrique entre les armatures d'un condensateur plan soumis à la tension U, distantes de d, vaut :",
            "options": [
              "$E = U/d$",
              "$E = U \\times d$",
              "$E = d/U$",
              "$E = U^2/d$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la relation utilisée dans la situation d'évaluation : U = 120 V et d = 3 cm donnent E = 4000 V/m."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Direction et sens du vecteur E",
          "stepTheme": "Direction et sens du vecteur E",
          "stepBadge": "Direction et sens du vecteur E",
          "paragraphText": "Le vecteur E est perpendiculaire aux armatures.\nSon sens va des potentiels élevés vers les potentiels faibles : de l'armature chargée positivement vers l'armature négative.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p04_q2",
            "type": "mcq",
            "prompt": "Entre les armatures d'un condensateur plan, le vecteur champ E est dirigé :",
            "options": [
              "Parallèlement aux armatures",
              "Des potentiels décroissants, de l'armature positive vers l'armature négative",
              "De l'armature négative vers la positive",
              "Dans le sens du mouvement des électrons"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans la situation d'évaluation, E va de P (potentiel le plus élevé) vers P'."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La force électrostatique F = q·E",
          "stepTheme": "La force électrostatique F = q·E",
          "stepBadge": "La force électrostatique F = q·E",
          "paragraphText": "Une charge q dans le champ subit la force F = q·E.\nPour une charge positive, F est colinéaire à E et de même sens ; pour un électron (q = −e), F est de sens opposé à E.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p04_q3",
            "type": "mcq",
            "prompt": "Un électron placé dans un champ électrique E subit une force :",
            "options": [
              "Dans le même sens que E",
              "Nulle",
              "De sens opposé à E, car sa charge est négative",
              "Perpendiculaire à E"
            ],
            "correctAnswerIndex": 2,
            "explanation": "F = q·E avec q = −e < 0 : la force est anti-parallèle au champ."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le champ de la situation : 4000 V/m",
          "stepTheme": "Le champ de la situation : 4000 V/m",
          "stepBadge": "Le champ de la situation : 4000 V/m",
          "paragraphText": "Dans la situation d'évaluation, la tension entre les plaques déflectrices vaut 120 V et leur distance 3 cm.\nLa solution calcule E = 4000 V/m : un champ uniforme qui dévie les électrons de l'oscilloscope.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p04_q4",
            "type": "mcq",
            "prompt": "Pour U = 120 V entre des plaques distantes de 3 cm, le champ vaut :",
            "options": [
              "40 V/m",
              "360 V/m",
              "1 200 V/m",
              "4 000 V/m"
            ],
            "correctAnswerIndex": 3,
            "explanation": "E = U/d avec d converti en mètres : c'est la valeur de la solution de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Convertir d en mètres",
          "stepTheme": "Convertir d en mètres",
          "stepBadge": "Convertir d en mètres",
          "paragraphText": "Piège de calcul récurrent : la distance d doit être convertie en mètres avant d'appliquer E = U/d.\nAvec d = 3 cm laissé en centimètres, on trouverait 40 V/m au lieu de 4000 V/m.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p04_q5",
            "type": "mcq",
            "prompt": "Dans le calcul de E = U/d, la distance d = 3 cm doit être saisie comme :",
            "options": [
              "0,03 m",
              "3 m",
              "0,3 m",
              "30 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "3 cm = 0,03 m : c'est la conversion qui donne E = 4000 V/m pour 120 V."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le poids de l'électron est négligeable",
          "stepTheme": "Le poids de l'électron est négligeable",
          "stepBadge": "Le poids de l'électron est négligeable",
          "paragraphText": "Dans les dispositifs de la leçon, le poids d'un électron est négligeable devant la force électrostatique.\nLe résumé le précise dès le §3.1 : on ne retient que F = q·E dans le bilan des forces.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p04_q6",
            "type": "mcq",
            "prompt": "Dans l'étude du mouvement d'un électron entre les plaques d'un condensateur, on néglige :",
            "options": [
              "La force électrostatique",
              "Son poids, très faible devant la force électrostatique",
              "Sa charge",
              "Le champ électrique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'hypothèse du §3.1, rappelée dans l'énoncé de la situation d'évaluation et de l'exercice 4."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l04_champs_g_e_p04_q1",
          "type": "mcq",
          "prompt": "Le champ électrique entre les armatures d'un condensateur plan soumis à la tension U, distantes de d, vaut :",
          "options": [
            "$E = U/d$",
            "$E = U \\times d$",
            "$E = d/U$",
            "$E = U^2/d$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la relation utilisée dans la situation d'évaluation : U = 120 V et d = 3 cm donnent E = 4000 V/m."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p04_q2",
          "type": "mcq",
          "prompt": "Entre les armatures d'un condensateur plan, le vecteur champ E est dirigé :",
          "options": [
            "Parallèlement aux armatures",
            "Des potentiels décroissants, de l'armature positive vers l'armature négative",
            "De l'armature négative vers la positive",
            "Dans le sens du mouvement des électrons"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans la situation d'évaluation, E va de P (potentiel le plus élevé) vers P'."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p04_q3",
          "type": "mcq",
          "prompt": "Un électron placé dans un champ électrique E subit une force :",
          "options": [
            "Dans le même sens que E",
            "Nulle",
            "De sens opposé à E, car sa charge est négative",
            "Perpendiculaire à E"
          ],
          "correctAnswerIndex": 2,
          "explanation": "F = q·E avec q = −e < 0 : la force est anti-parallèle au champ."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p04_q4",
          "type": "mcq",
          "prompt": "Pour U = 120 V entre des plaques distantes de 3 cm, le champ vaut :",
          "options": [
            "40 V/m",
            "360 V/m",
            "1 200 V/m",
            "4 000 V/m"
          ],
          "correctAnswerIndex": 3,
          "explanation": "E = U/d avec d converti en mètres : c'est la valeur de la solution de la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p04_q5",
          "type": "mcq",
          "prompt": "Dans le calcul de E = U/d, la distance d = 3 cm doit être saisie comme :",
          "options": [
            "0,03 m",
            "3 m",
            "0,3 m",
            "30 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "3 cm = 0,03 m : c'est la conversion qui donne E = 4000 V/m pour 120 V."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p04_q6",
          "type": "mcq",
          "prompt": "Dans l'étude du mouvement d'un électron entre les plaques d'un condensateur, on néglige :",
          "options": [
            "La force électrostatique",
            "Son poids, très faible devant la force électrostatique",
            "Sa charge",
            "Le champ électrique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'hypothèse du §3.1, rappelée dans l'énoncé de la situation d'évaluation et de l'exercice 4."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l04_champs_g_e_p05",
      "order": 5,
      "title": "Le mouvement d'une particule chargée dans un champ uniforme",
      "summary": "a = (q/m)·E : la particule décrit une parabole entre les plaques, comme un projectile dans le champ de pesanteur.",
      "conceptExplanation": "Une particule de charge q et de masse m pénètre en O entre les armatures avec la vitesse v₀ perpendiculaire au champ ; son poids est négligé devant la force électrostatique.\nLe théorème du centre d'inertie donne a = (q/m)·E : l'accélération est constante, portée par la direction du champ.\nLes équations horaires sont alors x = v₀·t et y = (q·E/(2m))·t², d'où la trajectoire y = (q·E/(2·m·v₀²))·x² : une parabole, exactement comme le projectile avec g remplacé par (q/m)·E.\nAprès la sortie du condensateur, plus aucune force ne s'exerce (exercice 4) : la particule poursuit en ligne droite à vitesse constante jusqu'à l'écran.",
      "keyRule": "Particule chargée : a = (q/m)·E, trajectoire parabolique entre les plaques, droite après la sortie.",
      "formulas": [
        {
          "name": "Accélération de la particule",
          "formula": "\\vec{a} = \\frac{q}{m} \\vec{E}",
          "note": "Constante : le mouvement est uniformément varié selon la direction du champ."
        },
        {
          "name": "Trajectoire entre les plaques",
          "formula": "y = \\frac{qE}{2 m v_0^2} x^2",
          "note": "Parabole, analogue à celle du projectile."
        }
      ],
      "workedExample": {
        "title": "L'électron de l'exercice 4 (condensateur puis écran)",
        "statement": "Un électron (v₀ = 1,30 × 10⁷ m/s) pénètre entre les armatures de longueur l = 5 cm, distantes de d = 2 cm, sous la tension UAB = 100 V ; l'écran est à D = 20 cm. Nomme les forces entre les armatures, puis entre le condensateur et l'écran.",
        "methodSteps": [
          "Entre les armatures : la seule force retenue est la force électrostatique F = q·E.",
          "Entre le condensateur et l'écran : aucune force ne s'exerce.",
          "Le déplacement vertical à la sortie du condensateur vaut yM = 6,5 mm."
        ],
        "conclusion": "Ce sont les réponses des questions 1 et 3.1 de la solution de l'exercice 4."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'accélération vaut (q/m)·E",
          "stepTheme": "L'accélération vaut (q/m)·E",
          "stepBadge": "L'accélération vaut (q/m)·E",
          "paragraphText": "Le théorème du centre d'inertie appliqué à la particule donne q·E = m·a.\nDonc a = (q/m)·E : une accélération constante, dans la direction du champ, dont le sens dépend du signe de q.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p05_q1",
            "type": "mcq",
            "prompt": "L'accélération d'une particule de charge q et de masse m dans un champ électrique uniforme vaut :",
            "options": [
              "$a = (q/m) \\times E$",
              "$a = q \\times E \\times m$",
              "$a = E/q$",
              "$a = g$ dans tous les cas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le résultat du §3.2 : a = (q/m)·E, analogue de a = g pour le projectile."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une trajectoire parabolique entre les plaques",
          "stepTheme": "Une trajectoire parabolique entre les plaques",
          "stepBadge": "Une trajectoire parabolique entre les plaques",
          "paragraphText": "Les équations horaires combinent un mouvement uniforme le long de v₀ et un mouvement uniformément varié le long du champ.\nL'élimination du temps donne y proportionnel à x² : la trajectoire entre les plaques est un arc de parabole.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p05_q2",
            "type": "mcq",
            "prompt": "Entre les plaques du condensateur, la trajectoire de la particule chargée est :",
            "options": [
              "Un arc de cercle",
              "Un arc de parabole",
              "Une droite parallèle aux plaques",
              "Une hélice"
            ],
            "correctAnswerIndex": 1,
            "explanation": "y = (qE/(2mv₀²))·x² (§3.4) : même forme que la trajectoire du projectile."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Après la sortie : mouvement rectiligne uniforme",
          "stepTheme": "Après la sortie : mouvement rectiligne uniforme",
          "stepBadge": "Après la sortie : mouvement rectiligne uniforme",
          "paragraphText": "Entre le condensateur et l'écran, l'exercice 4 le précise : aucune force ne s'exerce sur l'électron.\nSon mouvement y est donc rectiligne et uniforme, avec la vitesse acquise à la sortie des plaques.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p05_q3",
            "type": "mcq",
            "prompt": "Après sa sortie du condensateur, avant de frapper l'écran, l'électron a un mouvement :",
            "options": [
              "Toujours parabolique",
              "Circulaire uniforme",
              "Rectiligne uniforme, car aucune force ne s'exerce",
              "Rectiligne accéléré"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la réponse 1.2 et le commentaire 3.3 de l'exercice 4 : la vitesse reste celle de la sortie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le déplacement vertical à la sortie (exercice 4)",
          "stepTheme": "Le déplacement vertical à la sortie (exercice 4)",
          "stepBadge": "Le déplacement vertical à la sortie (exercice 4)",
          "paragraphText": "À la sortie des plaques, l'abscisse de l'électron vaut x = l = 5 cm.\nLa solution de l'exercice 4 calcule alors le déplacement vertical yM = 6,5 mm.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p05_q4",
            "type": "mcq",
            "prompt": "Le déplacement vertical de l'électron à la sortie du condensateur de l'exercice 4 vaut :",
            "options": [
              "6,5 cm",
              "4,55 cm",
              "2,27 cm",
              "6,5 mm"
            ],
            "correctAnswerIndex": 3,
            "explanation": "yM = 6,5 mm (question 3.1 de l'exercice 4) ; 4,55 cm est l'ordonnée du point d'impact sur l'écran."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le sens de la déviation dépend du signe de q",
          "stepTheme": "Le sens de la déviation dépend du signe de q",
          "stepBadge": "Le sens de la déviation dépend du signe de q",
          "paragraphText": "Piège : la déviation se fait dans le sens de la force, donc dans le sens de E pour une charge positive.\nUn électron, de charge négative, est dévié en sens inverse du vecteur E.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p05_q5",
            "type": "mcq",
            "prompt": "Dans un condensateur, un électron est dévié :",
            "options": [
              "En sens opposé au vecteur E",
              "Dans le sens du vecteur E",
              "Perpendiculairement à E",
              "Il n'est jamais dévié"
            ],
            "correctAnswerIndex": 0,
            "explanation": "a = (q/m)·E avec q < 0 : l'accélération, donc la déviation, est anti-parallèle à E."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "L'analogie avec le projectile",
          "stepTheme": "L'analogie avec le projectile",
          "stepBadge": "L'analogie avec le projectile",
          "paragraphText": "La démarche de résolution est identique à celle du projectile : bilan des forces, théorème du centre d'inertie, équations horaires, élimination du temps.\nSeule l'accélération change : (q/m)·E au lieu de g — et elle dépend de la particule.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p05_q6",
            "type": "mcq",
            "prompt": "L'étude de la particule chargée dans E suit la même démarche que celle du projectile, avec pour accélération :",
            "options": [
              "g à la place de (q/m)·E",
              "(q/m)·E à la place de g",
              "v₀ à la place de g",
              "E seul, sans rapport à la masse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le parallèle construit par toute la leçon : mêmes étapes, accélération différente."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l04_champs_g_e_p05_q1",
          "type": "mcq",
          "prompt": "L'accélération d'une particule de charge q et de masse m dans un champ électrique uniforme vaut :",
          "options": [
            "$a = (q/m) \\times E$",
            "$a = q \\times E \\times m$",
            "$a = E/q$",
            "$a = g$ dans tous les cas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le résultat du §3.2 : a = (q/m)·E, analogue de a = g pour le projectile."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p05_q2",
          "type": "mcq",
          "prompt": "Entre les plaques du condensateur, la trajectoire de la particule chargée est :",
          "options": [
            "Un arc de cercle",
            "Un arc de parabole",
            "Une droite parallèle aux plaques",
            "Une hélice"
          ],
          "correctAnswerIndex": 1,
          "explanation": "y = (qE/(2mv₀²))·x² (§3.4) : même forme que la trajectoire du projectile."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p05_q3",
          "type": "mcq",
          "prompt": "Après sa sortie du condensateur, avant de frapper l'écran, l'électron a un mouvement :",
          "options": [
            "Toujours parabolique",
            "Circulaire uniforme",
            "Rectiligne uniforme, car aucune force ne s'exerce",
            "Rectiligne accéléré"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la réponse 1.2 et le commentaire 3.3 de l'exercice 4 : la vitesse reste celle de la sortie."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p05_q4",
          "type": "mcq",
          "prompt": "Le déplacement vertical de l'électron à la sortie du condensateur de l'exercice 4 vaut :",
          "options": [
            "6,5 cm",
            "4,55 cm",
            "2,27 cm",
            "6,5 mm"
          ],
          "correctAnswerIndex": 3,
          "explanation": "yM = 6,5 mm (question 3.1 de l'exercice 4) ; 4,55 cm est l'ordonnée du point d'impact sur l'écran."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p05_q5",
          "type": "mcq",
          "prompt": "Dans un condensateur, un électron est dévié :",
          "options": [
            "En sens opposé au vecteur E",
            "Dans le sens du vecteur E",
            "Perpendiculairement à E",
            "Il n'est jamais dévié"
          ],
          "correctAnswerIndex": 0,
          "explanation": "a = (q/m)·E avec q < 0 : l'accélération, donc la déviation, est anti-parallèle à E."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p05_q6",
          "type": "mcq",
          "prompt": "L'étude de la particule chargée dans E suit la même démarche que celle du projectile, avec pour accélération :",
          "options": [
            "g à la place de (q/m)·E",
            "(q/m)·E à la place de g",
            "v₀ à la place de g",
            "E seul, sans rapport à la masse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le parallèle construit par toute la leçon : mêmes étapes, accélération différente."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l04_champs_g_e_p06",
      "order": 6,
      "title": "Déviation, déflexion et oscilloscope",
      "summary": "La déviation angulaire et la déflexion sur l'écran sont proportionnelles à la tension de déviation : c'est le principe de l'oscilloscope.",
      "conceptExplanation": "À la sortie des plaques, la trajectoire de la particule fait un angle α avec sa direction initiale : c'est la déviation (angulaire), donnée par tan α = q·E·l/(m·v₀²), où l est la longueur des plaques.\nLa déflexion électrostatique Y est la distance entre le point d'impact P sur l'écran et le point d'impact O' sans déviation ; le résumé donne Y = (q·l·D/(m·d·v₀²))·U : elle est proportionnelle à la tension U appliquée aux plaques, comme le reconstitue la phrase de l'exercice 3.\nC'est le principe de l'oscilloscope : dans la situation d'évaluation, les électrons accélérés sous U₀ = 1,27 kV arrivent avec l'énergie cinétique Ec = e·U₀ = 2,03 × 10⁻¹⁶ J et la vitesse v₀ = 2,11 × 10⁷ m/s, sortent du condensateur si U < 356,1 V, et la déflexion mesurée vaut Y = 2,27 cm.",
      "keyRule": "Déflexion Y proportionnelle à la tension U des plaques : mesurer Y, c'est mesurer U (oscilloscope).",
      "formulas": [
        {
          "name": "Déviation angulaire",
          "formula": "\\tan\\alpha = \\frac{q E l}{m v_0^2}",
          "note": "l est la longueur des plaques déflectrices."
        },
        {
          "name": "Déflexion sur l'écran",
          "formula": "Y = \\frac{q l D}{m d v_0^2} \\times U",
          "note": "Proportionnelle à la tension U : principe de l'oscilloscope."
        }
      ],
      "workedExample": {
        "title": "La déflexion des électrons de l'oscilloscope (situation d'évaluation)",
        "statement": "Les électrons sont accélérés sous |U₀| = 1,27 kV, déviés par des plaques de longueur l = 8 cm distantes de d = 3 cm sous UPP' = 120 V, et l'écran est à L = 18 cm du centre des plaques. Calcule la déflexion Y du spot.",
        "methodSteps": [
          "Accélération : Ec = e·U₀ = 2,03 × 10⁻¹⁶ J, d'où v₀ = 2,11 × 10⁷ m/s.",
          "La condition de sortie du condensateur est vérifiée car 120 V < 356,1 V.",
          "Y = (e·L·l/(m·d·v₀²))·U donne Y = 2,27 × 10⁻² m, soit 2,27 cm."
        ],
        "conclusion": "Ce sont les résultats des questions 1.2, 3.2 et 4 de la situation d'évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La déviation angulaire α",
          "stepTheme": "La déviation angulaire α",
          "stepBadge": "La déviation angulaire α",
          "paragraphText": "• Déviation : angle formé par les directions des vecteurs vitesses d'entrée v₀ et de sortie vS de la particule.\nElle est donnée par tan α = q·E·l/(m·v₀²).",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p06_q1",
            "type": "mcq",
            "prompt": "La déviation angulaire α d'une particule à la sortie des plaques est l'angle entre :",
            "options": [
              "Les deux plaques",
              "Le champ E et la plaque positive",
              "La vitesse d'entrée v₀ et la vitesse de sortie vS",
              "La trajectoire et l'écran"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition du §3.5 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La déflexion électrostatique Y",
          "stepTheme": "La déflexion électrostatique Y",
          "stepBadge": "La déflexion électrostatique Y",
          "paragraphText": "• Déflexion électrostatique : distance Y = O'P entre le point d'impact réel P sur l'écran et le point d'impact O' qu'aurait la particule sans déviation.\nC'est le déplacement du spot lumineux sur l'écran de l'oscilloscope.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p06_q2",
            "type": "mcq",
            "prompt": "La déflexion électrostatique Y mesure :",
            "options": [
              "L'angle de sortie des plaques",
              "La distance entre le point d'impact dévié P et le point d'impact non dévié O' sur l'écran",
              "La longueur des plaques",
              "La tension d'accélération"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du §3.6 : Y = O'P sur l'écran."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La déflexion est proportionnelle à la tension",
          "stepTheme": "La déflexion est proportionnelle à la tension",
          "stepBadge": "La déflexion est proportionnelle à la tension",
          "paragraphText": "La phrase reconstituée de l'exercice 3 l'énonce : la déflexion subie par un faisceau d'électrons à la sortie d'un condensateur est proportionnelle à la tension appliquée aux plaques déflectrices.\nConséquence pratique : en mesurant Y sur l'écran, l'oscilloscope mesure la tension inconnue.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p06_q3",
            "type": "mcq",
            "prompt": "Si la tension appliquée aux plaques déflectrices double, la déflexion Y :",
            "options": [
              "Est divisée par deux",
              "Ne change pas",
              "Est multipliée par quatre",
              "Double"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Y est proportionnelle à U (exercice 3 et formule du §3.6)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'énergie des électrons accélérés : Ec = e·U₀",
          "stepTheme": "L'énergie des électrons accélérés : Ec = e·U₀",
          "stepBadge": "L'énergie des électrons accélérés : Ec = e·U₀",
          "paragraphText": "Les électrons émis sans vitesse par la cathode sont accélérés par la tension U₀ = VA − VC > 0 : ils sont attirés par l'anode.\nLe théorème de l'énergie cinétique donne Ec = e·U₀ = 2,03 × 10⁻¹⁶ J pour U₀ = 1,27 kV, soit v₀ = 2,11 × 10⁷ m/s.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p06_q4",
            "type": "mcq",
            "prompt": "L'énergie cinétique d'un électron accéléré sans vitesse initiale sous la tension U₀ vaut :",
            "options": [
              "Ec = e·U₀",
              "Ec = m·U₀",
              "Ec = e/U₀",
              "Ec = 0, car il part sans vitesse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le théorème de l'énergie cinétique appliqué à la question 1.2.1 de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La condition de sortie du condensateur",
          "stepTheme": "La condition de sortie du condensateur",
          "stepBadge": "La condition de sortie du condensateur",
          "paragraphText": "Pour sortir des plaques sans les heurter, la déviation verticale de l'électron à l'abscisse l doit rester inférieure à la demi-distance des plaques.\nDans la situation d'évaluation, cela impose une tension de déviation inférieure à 356,1 V.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p06_q5",
            "type": "mcq",
            "prompt": "Dans la situation d'évaluation, les électrons sortent du condensateur si la tension de déviation vérifie :",
            "options": [
              "U > 1,27 kV",
              "U < 356,1 V",
              "U = 120 V exactement",
              "Aucune condition n'est nécessaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La condition géométrique (question 3.2) donne U < 356,1 V ; la tension utilisée, 120 V, la satisfait."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La déflexion de la situation : Y = 2,27 cm",
          "stepTheme": "La déflexion de la situation : Y = 2,27 cm",
          "stepBadge": "La déflexion de la situation : Y = 2,27 cm",
          "paragraphText": "Avec L = 18 cm, l = 8 cm, d = 3 cm et U = 120 V, la solution de la situation obtient Y = 2,27 cm.\nC'est le déplacement du spot sur l'écran fluorescent de l'oscilloscope.",
          "exercise": {
            "id": "terminale_c_physique_l04_champs_g_e_p06_q6",
            "type": "mcq",
            "prompt": "La déflexion du spot dans la situation d'évaluation vaut :",
            "options": [
              "2,27 cm",
              "6,5 mm",
              "14,57°",
              "356,1 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Y = 2,27 × 10⁻² m (question 4) ; 6,5 mm et 14,57° appartiennent à l'exercice 4, 356,1 V à la condition de sortie."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l04_champs_g_e_p06_q1",
          "type": "mcq",
          "prompt": "La déviation angulaire α d'une particule à la sortie des plaques est l'angle entre :",
          "options": [
            "Les deux plaques",
            "Le champ E et la plaque positive",
            "La vitesse d'entrée v₀ et la vitesse de sortie vS",
            "La trajectoire et l'écran"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition du §3.5 du résumé."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p06_q2",
          "type": "mcq",
          "prompt": "La déflexion électrostatique Y mesure :",
          "options": [
            "L'angle de sortie des plaques",
            "La distance entre le point d'impact dévié P et le point d'impact non dévié O' sur l'écran",
            "La longueur des plaques",
            "La tension d'accélération"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du §3.6 : Y = O'P sur l'écran."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p06_q3",
          "type": "mcq",
          "prompt": "Si la tension appliquée aux plaques déflectrices double, la déflexion Y :",
          "options": [
            "Est divisée par deux",
            "Ne change pas",
            "Est multipliée par quatre",
            "Double"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Y est proportionnelle à U (exercice 3 et formule du §3.6)."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p06_q4",
          "type": "mcq",
          "prompt": "L'énergie cinétique d'un électron accéléré sans vitesse initiale sous la tension U₀ vaut :",
          "options": [
            "Ec = e·U₀",
            "Ec = m·U₀",
            "Ec = e/U₀",
            "Ec = 0, car il part sans vitesse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le théorème de l'énergie cinétique appliqué à la question 1.2.1 de la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p06_q5",
          "type": "mcq",
          "prompt": "Dans la situation d'évaluation, les électrons sortent du condensateur si la tension de déviation vérifie :",
          "options": [
            "U > 1,27 kV",
            "U < 356,1 V",
            "U = 120 V exactement",
            "Aucune condition n'est nécessaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La condition géométrique (question 3.2) donne U < 356,1 V ; la tension utilisée, 120 V, la satisfait."
        },
        {
          "id": "terminale_c_physique_l04_champs_g_e_p06_q6",
          "type": "mcq",
          "prompt": "La déflexion du spot dans la situation d'évaluation vaut :",
          "options": [
            "2,27 cm",
            "6,5 mm",
            "14,57°",
            "356,1 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Y = 2,27 × 10⁻² m (question 4) ; 6,5 mm et 14,57° appartiennent à l'exercice 4, 356,1 V à la condition de sortie."
        }
      ]
    }
  ]
};
