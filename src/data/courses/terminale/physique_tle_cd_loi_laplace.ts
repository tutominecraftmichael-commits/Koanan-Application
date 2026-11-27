import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 8 : Loi de Laplace » (Terminale C/D ; format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=172
export const PHYSIQUE_TLE_CD_L08_LOI_LAPLACE: CurriculumChapter = {
  "id": "terminale_c_physique_l08_loi_laplace",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 8,
  "title": "Leçon 8 : Loi de Laplace",
  "summary": "Un conducteur parcouru par un courant et placé dans un champ magnétique subit la force de Laplace F = I·ℓ∧B. On détermine ses caractéristiques, sa valeur I·ℓ·B·sin α, et ses applications : balance de Cotton, roue de Barlow, haut-parleur.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=172",
  "points": [
    {
      "id": "terminale_c_physique_l08_loi_laplace_p01",
      "order": 1,
      "title": "Mise en évidence de la force de Laplace",
      "summary": "La tige de Laplace dévie et les rails de Laplace se mettent en mouvement : un conducteur parcouru par un courant dans un champ magnétique subit une force électromagnétique.",
      "conceptExplanation": "Dans l'expérience de la tige de Laplace, à la fermeture de l'interrupteur, le conducteur en cuivre placé dans un champ magnétique dévie.\nCette déviation change de sens si l'on modifie le sens du champ magnétique ou le sens du courant (changement de bornes) ; le conducteur reprend sa position si l'on supprime B ou si l'on ouvre l'interrupteur.\nDans l'expérience des rails de Laplace, une barre conductrice posée sur deux rails dans l'entrefer d'un aimant en U se met en mouvement lorsqu'elle est parcourue par un courant constant ; sa vitesse augmente avec l'intensité du courant.\nConclusion du résumé : un conducteur placé dans un champ magnétique et traversé par un courant électrique constant subit une force électromagnétique appelée force de Laplace, dont la valeur dépend de I et de B.",
      "keyRule": "Pas de courant ou pas de champ ⇒ pas de force ; inverser I ou B inverse le sens de la force.",
      "formulas": [
        {
          "name": "Conditions d'existence",
          "formula": "\\text{Force de Laplace} \\iff I \\neq 0 \\text{ et } B \\neq 0",
          "note": "Le conducteur doit être à la fois parcouru par un courant et plongé dans le champ."
        }
      ],
      "workedExample": {
        "title": "Les quatre cas de la situation d'évaluation (tige OA)",
        "statement": "Une tige de cuivre OA, mobile autour d'un axe, est placée dans un champ magnétique. Que se passe-t-il si : le circuit est fermé avec champ ? on intervertit les bornes ? le champ est supprimé ? le circuit est ouvert ?",
        "methodSteps": [
          "Circuit fermé et champ présent : la tige est déviée par la force de Laplace.",
          "Bornes interverties : le courant change de sens, la tige est déviée dans l'autre sens.",
          "Champ supprimé ou circuit ouvert : pas de force, la tige reste dans sa position d'équilibre verticale."
        ],
        "conclusion": "Ce sont les quatre réponses de la première partie de la situation d'évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'expérience de la tige de Laplace",
          "stepTheme": "L'expérience de la tige de Laplace",
          "stepBadge": "L'expérience de la tige de Laplace",
          "paragraphText": "Une tige conductrice suspendue dans un champ magnétique est traversée par un courant.\nÀ la fermeture de l'interrupteur K, on observe que le conducteur en cuivre dévie : il est donc soumis à une force.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p01_q1",
            "type": "mcq",
            "prompt": "Dans l'expérience de la tige de Laplace, à la fermeture de l'interrupteur, on observe que :",
            "options": [
              "Le conducteur dévie",
              "Le conducteur chauffe sans bouger",
              "L'aimant se déplace",
              "Le courant s'arrête"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la première observation du §1.1.2 : la déviation révèle l'existence d'une force électromagnétique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le sens dépend de I et de B",
          "stepTheme": "Le sens dépend de I et de B",
          "stepBadge": "Le sens dépend de I et de B",
          "paragraphText": "La déviation change de sens si l'on modifie le sens du champ magnétique, par exemple en retournant l'aimant.\nElle change aussi de sens si l'on inverse le sens du courant en échangeant les bornes du générateur.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p01_q2",
            "type": "mcq",
            "prompt": "La déviation de la tige de Laplace change de sens si l'on :",
            "options": [
              "Augmente seulement la longueur de la tige",
              "Inverse le sens du courant ou celui du champ magnétique",
              "Change la couleur de la tige",
              "Rapproche l'interrupteur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la deuxième observation du §1.1.2 : le sens de la force dépend de ceux de B et de I."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Sans courant ou sans champ : pas de force",
          "stepTheme": "Sans courant ou sans champ : pas de force",
          "stepBadge": "Sans courant ou sans champ : pas de force",
          "paragraphText": "Le conducteur reprend sa position si on supprime le champ B, ou si on ouvre l'interrupteur K.\nDans la situation d'évaluation, la tige reste alors dans sa position d'équilibre verticale : la force de Laplace a disparu.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p01_q3",
            "type": "mcq",
            "prompt": "La force de Laplace disparaît lorsque :",
            "options": [
              "La tige est en cuivre",
              "Le circuit est fermé",
              "On supprime le champ magnétique ou on ouvre le circuit",
              "Le courant est continu"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Troisième observation du §1.1.2 : il faut simultanément un courant et un champ."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les rails de Laplace : la barre se met en mouvement",
          "stepTheme": "Les rails de Laplace : la barre se met en mouvement",
          "stepBadge": "Les rails de Laplace : la barre se met en mouvement",
          "paragraphText": "Deux rails horizontaux reliés à un générateur portent une barre conductrice, dans l'entrefer d'un aimant en U.\nLorsque la barre est parcourue par un courant constant, elle se met en mouvement le long des rails ; sa vitesse augmente avec l'intensité du courant.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p01_q4",
            "type": "mcq",
            "prompt": "Dans l'expérience des rails de Laplace, la vitesse de la barre augmente lorsque :",
            "options": [
              "On éloigne l'aimant",
              "On coupe le courant",
              "On diminue l'intensité du courant",
              "On augmente l'intensité du courant"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Observation du §1.2.2 : la valeur de la force dépend de l'intensité I du courant."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La définition de la force de Laplace",
          "stepTheme": "La définition de la force de Laplace",
          "stepBadge": "La définition de la force de Laplace",
          "paragraphText": "• Force de Laplace : force électromagnétique subie par un conducteur placé dans un champ magnétique et traversé par un courant électrique constant.\nC'est la conclusion commune des deux expériences du §1.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p01_q5",
            "type": "mcq",
            "prompt": "La force de Laplace est la force électromagnétique subie par :",
            "options": [
              "Un conducteur parcouru par un courant et placé dans un champ magnétique",
              "Un aimant immobile",
              "Un conducteur sans courant dans un champ électrique",
              "Une charge immobile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la conclusion du §1.2.3 du résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Intervertir les bornes inverse la déviation",
          "stepTheme": "Intervertir les bornes inverse la déviation",
          "stepBadge": "Intervertir les bornes inverse la déviation",
          "paragraphText": "Dans la situation d'évaluation, on intervertit les bornes du générateur en gardant le même champ.\nLa correction indique que la tige est alors déviée dans l'autre sens : seul le sens du courant a changé, donc celui de la force.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p01_q6",
            "type": "mcq",
            "prompt": "On intervertit les bornes du générateur (même champ B) : la tige de la situation d'évaluation est :",
            "options": [
              "Déviée deux fois plus",
              "Déviée dans l'autre sens",
              "Immobile",
              "Déviée dans le même sens"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Réponse 1.2 de la situation : inverser I inverse le sens de la force de Laplace."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l08_loi_laplace_p01_q1",
          "type": "mcq",
          "prompt": "Dans l'expérience de la tige de Laplace, à la fermeture de l'interrupteur, on observe que :",
          "options": [
            "Le conducteur dévie",
            "Le conducteur chauffe sans bouger",
            "L'aimant se déplace",
            "Le courant s'arrête"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la première observation du §1.1.2 : la déviation révèle l'existence d'une force électromagnétique."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p01_q2",
          "type": "mcq",
          "prompt": "La déviation de la tige de Laplace change de sens si l'on :",
          "options": [
            "Augmente seulement la longueur de la tige",
            "Inverse le sens du courant ou celui du champ magnétique",
            "Change la couleur de la tige",
            "Rapproche l'interrupteur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la deuxième observation du §1.1.2 : le sens de la force dépend de ceux de B et de I."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p01_q3",
          "type": "mcq",
          "prompt": "La force de Laplace disparaît lorsque :",
          "options": [
            "La tige est en cuivre",
            "Le circuit est fermé",
            "On supprime le champ magnétique ou on ouvre le circuit",
            "Le courant est continu"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Troisième observation du §1.1.2 : il faut simultanément un courant et un champ."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p01_q4",
          "type": "mcq",
          "prompt": "Dans l'expérience des rails de Laplace, la vitesse de la barre augmente lorsque :",
          "options": [
            "On éloigne l'aimant",
            "On coupe le courant",
            "On diminue l'intensité du courant",
            "On augmente l'intensité du courant"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Observation du §1.2.2 : la valeur de la force dépend de l'intensité I du courant."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p01_q5",
          "type": "mcq",
          "prompt": "La force de Laplace est la force électromagnétique subie par :",
          "options": [
            "Un conducteur parcouru par un courant et placé dans un champ magnétique",
            "Un aimant immobile",
            "Un conducteur sans courant dans un champ électrique",
            "Une charge immobile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la conclusion du §1.2.3 du résumé."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p01_q6",
          "type": "mcq",
          "prompt": "On intervertit les bornes du générateur (même champ B) : la tige de la situation d'évaluation est :",
          "options": [
            "Déviée deux fois plus",
            "Déviée dans l'autre sens",
            "Immobile",
            "Déviée dans le même sens"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Réponse 1.2 de la situation : inverser I inverse le sens de la force de Laplace."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l08_loi_laplace_p02",
      "order": 2,
      "title": "La loi de Laplace et les caractéristiques de la force",
      "summary": "F = I·ℓ∧B : point d'application au milieu du conducteur plongé, direction perpendiculaire au plan (ℓ, B), sens du trièdre direct.",
      "conceptExplanation": "Énoncé de la loi : un conducteur rectiligne de longueur ℓ, parcouru par un courant électrique constant d'intensité I et placé dans un champ magnétique uniforme B, est soumis à une force F appelée force de Laplace, d'expression vectorielle F = I·ℓ⃗ ∧ B⃗.\nSon point d'application est le milieu de la partie du conducteur placée dans le champ magnétique.\nSa direction est la perpendiculaire au plan formé par le conducteur rectiligne et le champ B.\nSon sens est tel que le trièdre (ℓ⃗, B⃗, F⃗) est direct ; on le trouve par la règle des trois doigts de la main droite : l'index indique le sens du courant I, le majeur le sens de B, alors le pouce indique le sens de F.",
      "keyRule": "Trois doigts de la main droite : index = I, majeur = B, pouce = F.",
      "formulas": [
        {
          "name": "Loi de Laplace (forme vectorielle)",
          "formula": "\\vec{F} = I \\, \\vec{\\ell} \\wedge \\vec{B}",
          "note": "Le vecteur ℓ a pour direction le conducteur et pour sens celui du courant."
        }
      ],
      "workedExample": {
        "title": "Représenter la force (activité d'application)",
        "statement": "Des conducteurs parcourus par des courants sont placés dans une zone de champ magnétique délimitée par un rectangle, avec B sortant (⊙) ou rentrant (⊗). Représente la force de Laplace sur chacun.",
        "methodSteps": [
          "On place l'index de la main droite dans le sens du courant I.",
          "On place le majeur dans le sens de B (sortant ou rentrant selon le symbole).",
          "Le pouce donne alors le sens de F, perpendiculaire au plan du schéma ou dans ce plan selon le cas."
        ],
        "conclusion": "C'est la correction de l'activité d'application, entièrement fondée sur la règle des trois doigts."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'énoncé de la loi de Laplace",
          "stepTheme": "L'énoncé de la loi de Laplace",
          "stepBadge": "L'énoncé de la loi de Laplace",
          "paragraphText": "• Loi de Laplace : un conducteur rectiligne de longueur ℓ, parcouru par un courant constant I dans un champ magnétique uniforme B, subit la force F = I·ℓ⃗ ∧ B⃗.\nLe produit vectoriel condense la direction, le sens et la valeur de la force.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p02_q1",
            "type": "mcq",
            "prompt": "L'expression vectorielle de la force de Laplace est :",
            "options": [
              "$\\vec{F} = I \\vec{\\ell} \\wedge \\vec{B}$",
              "$\\vec{F} = q \\vec{E}$",
              "$\\vec{F} = I \\vec{\\ell} \\cdot \\vec{B}$ (produit scalaire)",
              "$\\vec{F} = \\vec{B}/(I \\ell)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'énoncé du §2.1 : un produit vectoriel, qui donne une force perpendiculaire à ℓ et à B."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le point d'application : le milieu du conducteur plongé",
          "stepTheme": "Le point d'application : le milieu du conducteur plongé",
          "stepBadge": "Le point d'application : le milieu du conducteur plongé",
          "paragraphText": "La force de Laplace s'applique au milieu de la partie du conducteur placée dans le champ magnétique.\nSi seule une portion du conducteur est dans le champ, c'est le milieu de cette portion qui compte.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p02_q2",
            "type": "mcq",
            "prompt": "Le point d'application de la force de Laplace est :",
            "options": [
              "L'extrémité d'entrée du courant",
              "Le milieu de la partie du conducteur placée dans le champ",
              "Le centre de l'aimant",
              "Le générateur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la première caractéristique du §2.2 du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La direction : perpendiculaire au plan (conducteur, B)",
          "stepTheme": "La direction : perpendiculaire au plan (conducteur, B)",
          "stepBadge": "La direction : perpendiculaire au plan (conducteur, B)",
          "paragraphText": "La direction de F est la perpendiculaire au plan formé par le conducteur rectiligne et le vecteur B.\nC'est une conséquence directe du produit vectoriel : F est perpendiculaire à la fois à ℓ⃗ et à B⃗.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p02_q3",
            "type": "mcq",
            "prompt": "La direction de la force de Laplace est :",
            "options": [
              "Celle du courant",
              "Celle du champ magnétique",
              "La perpendiculaire au plan formé par le conducteur et le champ B",
              "Toujours verticale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la deuxième caractéristique du §2.2, cohérente avec le produit vectoriel."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le sens : la règle des trois doigts de la main droite",
          "stepTheme": "Le sens : la règle des trois doigts de la main droite",
          "stepBadge": "Le sens : la règle des trois doigts de la main droite",
          "paragraphText": "Règle des trois doigts de la main droite : l'index indique le sens du courant I, le majeur le sens de B.\nLe pouce indique alors le sens de F : les trois vecteurs forment un trièdre direct.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p02_q4",
            "type": "mcq",
            "prompt": "Dans la règle des trois doigts de la main droite, le pouce indique le sens de F lorsque :",
            "options": [
              "L'index suit B et le majeur suit I",
              "L'index suit F et le majeur suit B",
              "Le pouce suit le courant",
              "L'index suit le sens du courant I et le majeur celui du champ B"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la règle énoncée au §2.2 : index = I, majeur = B, pouce = F."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le trièdre (ℓ, B, F) est direct",
          "stepTheme": "Le trièdre (ℓ, B, F) est direct",
          "stepBadge": "Le trièdre (ℓ, B, F) est direct",
          "paragraphText": "La formulation savante du §2.2 : le sens de F est tel que le trièdre (ℓ⃗, B⃗, F⃗) est direct.\nC'est exactement ce que traduit la règle des trois doigts de la main droite, et non de la main gauche.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p02_q5",
            "type": "mcq",
            "prompt": "Le sens de la force de Laplace est tel que le trièdre (ℓ⃗, B⃗, F⃗) est :",
            "options": [
              "Direct",
              "Indirect",
              "Plat",
              "Quelconque"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la formulation du §2.2, équivalente à la règle de la main droite."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La longueur utile : la partie plongée dans le champ",
          "stepTheme": "La longueur utile : la partie plongée dans le champ",
          "stepBadge": "La longueur utile : la partie plongée dans le champ",
          "paragraphText": "Piège : ℓ désigne la longueur du conducteur placée dans le champ, pas forcément sa longueur totale.\nDans la situation d'évaluation, la tige OA est entièrement plongée dans le champ : ℓ = 20 cm est alors toute sa longueur.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p02_q6",
            "type": "mcq",
            "prompt": "Dans la loi de Laplace, la longueur ℓ est celle :",
            "options": [
              "Du fil d'alimentation",
              "De la partie du conducteur placée dans le champ magnétique",
              "De l'aimant",
              "Du circuit entier"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Seule la portion soumise au champ subit la force : c'est elle qui fixe ℓ et le point d'application."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l08_loi_laplace_p02_q1",
          "type": "mcq",
          "prompt": "L'expression vectorielle de la force de Laplace est :",
          "options": [
            "$\\vec{F} = I \\vec{\\ell} \\wedge \\vec{B}$",
            "$\\vec{F} = q \\vec{E}$",
            "$\\vec{F} = I \\vec{\\ell} \\cdot \\vec{B}$ (produit scalaire)",
            "$\\vec{F} = \\vec{B}/(I \\ell)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'énoncé du §2.1 : un produit vectoriel, qui donne une force perpendiculaire à ℓ et à B."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p02_q2",
          "type": "mcq",
          "prompt": "Le point d'application de la force de Laplace est :",
          "options": [
            "L'extrémité d'entrée du courant",
            "Le milieu de la partie du conducteur placée dans le champ",
            "Le centre de l'aimant",
            "Le générateur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la première caractéristique du §2.2 du résumé."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p02_q3",
          "type": "mcq",
          "prompt": "La direction de la force de Laplace est :",
          "options": [
            "Celle du courant",
            "Celle du champ magnétique",
            "La perpendiculaire au plan formé par le conducteur et le champ B",
            "Toujours verticale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la deuxième caractéristique du §2.2, cohérente avec le produit vectoriel."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p02_q4",
          "type": "mcq",
          "prompt": "Dans la règle des trois doigts de la main droite, le pouce indique le sens de F lorsque :",
          "options": [
            "L'index suit B et le majeur suit I",
            "L'index suit F et le majeur suit B",
            "Le pouce suit le courant",
            "L'index suit le sens du courant I et le majeur celui du champ B"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la règle énoncée au §2.2 : index = I, majeur = B, pouce = F."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p02_q5",
          "type": "mcq",
          "prompt": "Le sens de la force de Laplace est tel que le trièdre (ℓ⃗, B⃗, F⃗) est :",
          "options": [
            "Direct",
            "Indirect",
            "Plat",
            "Quelconque"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la formulation du §2.2, équivalente à la règle de la main droite."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p02_q6",
          "type": "mcq",
          "prompt": "Dans la loi de Laplace, la longueur ℓ est celle :",
          "options": [
            "Du fil d'alimentation",
            "De la partie du conducteur placée dans le champ magnétique",
            "De l'aimant",
            "Du circuit entier"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Seule la portion soumise au champ subit la force : c'est elle qui fixe ℓ et le point d'application."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l08_loi_laplace_p03",
      "order": 3,
      "title": "La valeur de la force : F = I·ℓ·B·sin α",
      "summary": "F dépend de l'angle α entre le conducteur et B : maximale (I·ℓ·B) si le conducteur est perpendiculaire aux lignes de champ, nulle s'il leur est parallèle.",
      "conceptExplanation": "La valeur de la force de Laplace est F = I·ℓ·B·|sin α|, où α est l'angle entre le vecteur ℓ⃗ (direction du conducteur, sens du courant) et le vecteur B⃗.\nSi le conducteur est perpendiculaire à B, α = 90° et sin α = 1 : la force est maximale et vaut F = I·ℓ·B.\nSi le conducteur est parallèle aux lignes de champ, sin α = 0 : la force est nulle, malgré la présence du courant et du champ.\nDans l'exercice 1 (ℓ = 0,4 m, I = 12 A, B = 0,25 T), on obtient F = 0,6 N pour α = 30° ; dans l'exercice 3 (d = 20 cm, I = 500 mA, B = 0,4 T, conducteur perpendiculaire), F = I·d·B = 0,04 N et le moment par rapport à l'extrémité vaut F·d/2 = 0,004 N·m.",
      "keyRule": "F = I·ℓ·B·sin α : tout est dans l'angle — 90° ⇒ F max ; 0° ⇒ F = 0.",
      "formulas": [
        {
          "name": "Valeur de la force de Laplace",
          "formula": "F = I \\ell B \\, |\\sin\\alpha|",
          "note": "α est l'angle entre le conducteur (sens du courant) et B."
        },
        {
          "name": "Cas perpendiculaire",
          "formula": "F = I \\ell B",
          "note": "Quand le conducteur est perpendiculaire aux lignes de champ (α = 90°)."
        }
      ],
      "workedExample": {
        "title": "L'exercice 1 : deux inclinaisons du conducteur",
        "statement": "Un conducteur de 0,4 m, parcouru par 12 A, est placé dans un champ uniforme de 0,25 T. Calcule la force pour un angle de 30° entre le conducteur et les lignes de champ.",
        "methodSteps": [
          "On applique F = I·ℓ·B·sin α avec les données de l'énoncé.",
          "Le produit I·ℓ·B vaut 1,2 N, et sin 30° vaut un demi.",
          "On obtient F = 0,6 N."
        ],
        "conclusion": "C'est le premier résultat de la solution de l'exercice 1 (le second, à 45°, suit la même méthode)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La formule générale",
          "stepTheme": "La formule générale",
          "stepBadge": "La formule générale",
          "paragraphText": "La norme du produit vectoriel donne F = I·ℓ·B·|sin α|.\nLa valeur absolue rappelle que l'intensité d'une force est toujours positive, quel que soit l'angle orienté.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p03_q1",
            "type": "mcq",
            "prompt": "La valeur de la force de Laplace sur un conducteur de longueur ℓ parcouru par I dans un champ B vaut :",
            "options": [
              "$F = I \\ell B \\sin\\alpha$",
              "$F = I \\ell B \\cos\\alpha$",
              "$F = I \\ell/B$",
              "$F = I + \\ell + B$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la valeur donnée au §2.2, α étant l'angle entre ℓ⃗ et B⃗."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le cas maximal : conducteur perpendiculaire à B",
          "stepTheme": "Le cas maximal : conducteur perpendiculaire à B",
          "stepBadge": "Le cas maximal : conducteur perpendiculaire à B",
          "paragraphText": "Pour un conducteur perpendiculaire aux lignes de champ, α = 90° et sin α = 1.\nLa force prend sa valeur maximale F = I·ℓ·B : c'est le cas de la balance de Cotton et des rails de Laplace.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p03_q2",
            "type": "mcq",
            "prompt": "La force de Laplace est maximale lorsque le conducteur est :",
            "options": [
              "Parallèle aux lignes de champ",
              "Perpendiculaire aux lignes de champ",
              "Incliné à 45°",
              "Hors du champ"
            ],
            "correctAnswerIndex": 1,
            "explanation": "sin α est maximal (= 1) pour α = 90° (§2.2 du résumé)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Le cas nul : conducteur parallèle à B",
          "stepTheme": "Le cas nul : conducteur parallèle à B",
          "stepBadge": "Le cas nul : conducteur parallèle à B",
          "paragraphText": "Piège : si le conducteur est parallèle aux lignes de champ, α = 0 et sin α = 0.\nLa force de Laplace est alors nulle, même avec un courant élevé et un champ intense.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p03_q3",
            "type": "mcq",
            "prompt": "Un conducteur rectiligne placé parallèlement aux lignes de champ, parcouru par un courant, subit une force de Laplace :",
            "options": [
              "Maximale",
              "Égale à I·ℓ·B",
              "Nulle",
              "Égale à son poids"
            ],
            "correctAnswerIndex": 2,
            "explanation": "F = I·ℓ·B·sin(0°) = 0 : le produit vectoriel de deux vecteurs parallèles est nul."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 1 : F = 0,6 N à 30°",
          "stepTheme": "L'exercice 1 : F = 0,6 N à 30°",
          "stepBadge": "L'exercice 1 : F = 0,6 N à 30°",
          "paragraphText": "Pour ℓ = 0,4 m, I = 12 A et B = 0,25 T, le produit I·ℓ·B vaut 1,2 N.\nAvec l'angle de 30°, la solution obtient F = 0,6 N, exactement la moitié de la valeur maximale.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p03_q4",
            "type": "mcq",
            "prompt": "La force sur le conducteur de l'exercice 1 (0,4 m ; 12 A ; 0,25 T) incliné à 30° vaut :",
            "options": [
              "1,2 N",
              "2,4 N",
              "0,3 N",
              "0,6 N"
            ],
            "correctAnswerIndex": 3,
            "explanation": "F = I·ℓ·B·sin 30° : c'est le résultat de la solution de l'exercice 1."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 3 : force et moment",
          "stepTheme": "L'exercice 3 : force et moment",
          "stepBadge": "L'exercice 3 : force et moment",
          "paragraphText": "Pour d = 20 cm, I = 500 mA et B = 0,4 T avec un conducteur perpendiculaire au champ, la solution donne F = I·d·B = 0,04 N.\nLe moment de cette force par rapport à une extrémité du conducteur vaut F·d/2 = 0,004 N·m, car la force s'applique au milieu.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p03_q5",
            "type": "mcq",
            "prompt": "Dans l'exercice 3 (d = 20 cm ; I = 500 mA ; B = 0,4 T), la force de Laplace vaut :",
            "options": [
              "0,04 N",
              "0,4 N",
              "4 N",
              "0,004 N"
            ],
            "correctAnswerIndex": 0,
            "explanation": "F = I·d·B = 0,04 N dans les deux premiers cas de l'exercice 3 ; 0,004 N·m est la valeur du moment."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La force croît avec I, ℓ et B",
          "stepTheme": "La force croît avec I, ℓ et B",
          "stepBadge": "La force croît avec I, ℓ et B",
          "paragraphText": "La formule montre que F est proportionnelle à chacun des trois facteurs I, ℓ et B.\nC'est cohérent avec les observations des rails de Laplace : la barre accélère davantage quand l'intensité augmente.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p03_q6",
            "type": "mcq",
            "prompt": "Toutes choses égales par ailleurs, si l'on double à la fois I et B, la force de Laplace est multipliée par :",
            "options": [
              "2",
              "4",
              "8",
              "Elle ne change pas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "F est proportionnelle à I et à B : doubler les deux facteurs quadruple la force."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l08_loi_laplace_p03_q1",
          "type": "mcq",
          "prompt": "La valeur de la force de Laplace sur un conducteur de longueur ℓ parcouru par I dans un champ B vaut :",
          "options": [
            "$F = I \\ell B \\sin\\alpha$",
            "$F = I \\ell B \\cos\\alpha$",
            "$F = I \\ell/B$",
            "$F = I + \\ell + B$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la valeur donnée au §2.2, α étant l'angle entre ℓ⃗ et B⃗."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p03_q2",
          "type": "mcq",
          "prompt": "La force de Laplace est maximale lorsque le conducteur est :",
          "options": [
            "Parallèle aux lignes de champ",
            "Perpendiculaire aux lignes de champ",
            "Incliné à 45°",
            "Hors du champ"
          ],
          "correctAnswerIndex": 1,
          "explanation": "sin α est maximal (= 1) pour α = 90° (§2.2 du résumé)."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p03_q3",
          "type": "mcq",
          "prompt": "Un conducteur rectiligne placé parallèlement aux lignes de champ, parcouru par un courant, subit une force de Laplace :",
          "options": [
            "Maximale",
            "Égale à I·ℓ·B",
            "Nulle",
            "Égale à son poids"
          ],
          "correctAnswerIndex": 2,
          "explanation": "F = I·ℓ·B·sin(0°) = 0 : le produit vectoriel de deux vecteurs parallèles est nul."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p03_q4",
          "type": "mcq",
          "prompt": "La force sur le conducteur de l'exercice 1 (0,4 m ; 12 A ; 0,25 T) incliné à 30° vaut :",
          "options": [
            "1,2 N",
            "2,4 N",
            "0,3 N",
            "0,6 N"
          ],
          "correctAnswerIndex": 3,
          "explanation": "F = I·ℓ·B·sin 30° : c'est le résultat de la solution de l'exercice 1."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p03_q5",
          "type": "mcq",
          "prompt": "Dans l'exercice 3 (d = 20 cm ; I = 500 mA ; B = 0,4 T), la force de Laplace vaut :",
          "options": [
            "0,04 N",
            "0,4 N",
            "4 N",
            "0,004 N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "F = I·d·B = 0,04 N dans les deux premiers cas de l'exercice 3 ; 0,004 N·m est la valeur du moment."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p03_q6",
          "type": "mcq",
          "prompt": "Toutes choses égales par ailleurs, si l'on double à la fois I et B, la force de Laplace est multipliée par :",
          "options": [
            "2",
            "4",
            "8",
            "Elle ne change pas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "F est proportionnelle à I et à B : doubler les deux facteurs quadruple la force."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l08_loi_laplace_p04",
      "order": 4,
      "title": "Application 1 : la balance de Cotton",
      "summary": "En équilibrant le moment de la force de Laplace par celui d'un poids connu, la balance de Cotton mesure la valeur d'un champ magnétique.",
      "conceptExplanation": "La balance de Cotton comprend un bras de fléau supportant un plateau et, sur l'autre bras, un circuit électrique dont une partie plonge dans le champ magnétique à mesurer.\nLes portions en arcs de cercle ont leurs forces dont les droites d'action passent par l'axe de rotation O : leurs moments sont nuls et elles n'ont aucune influence sur l'équilibre (exercice 4).\nÀ l'équilibre, le théorème des moments donne F·d = P·d', soit I·ℓ·B = m·g avec des bras égaux : on en tire B = m·g/(I·ℓ).\nDans l'exercice 2 (ℓ = 3 cm, I = 8 A, B = 0,5 T), la masse d'équilibre vaut m = I·ℓ·B/g = 0,012 kg ; dans l'exercice 4, la droite I = f(m), de coefficient k = 1600 A/kg, donne B = 0,215 T pour ℓ = 2,9 cm.",
      "keyRule": "Balance de Cotton : à l'équilibre, I·ℓ·B = m·g — un champ se « pèse ».",
      "formulas": [
        {
          "name": "Équilibre de la balance de Cotton",
          "formula": "I \\ell B = m g \\quad \\text{donc} \\quad B = \\frac{m g}{I \\ell}",
          "note": "Lorsque les deux bras de levier sont égaux (d = d')."
        }
      ],
      "workedExample": {
        "title": "L'exercice 2 : la masse d'équilibre",
        "statement": "Une balance de Cotton possède un conducteur actif de 3 cm traversé par 8 A, placé perpendiculairement au champ B = 0,5 T. Quelle masse faut-il placer dans le plateau pour équilibrer la balance ?",
        "methodSteps": [
          "À l'équilibre, le moment de la force de Laplace compense celui du poids : I·ℓ·B = m·g.",
          "On isole la masse : m = I·ℓ·B/g.",
          "L'application numérique de la solution donne m = 0,012 kg, soit 12 g."
        ],
        "conclusion": "C'est le résultat de la solution de l'exercice 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'intérêt de la balance de Cotton",
          "stepTheme": "L'intérêt de la balance de Cotton",
          "stepBadge": "L'intérêt de la balance de Cotton",
          "paragraphText": "Le §3.1.3 le dit explicitement : la balance de Cotton permet de déterminer la valeur du champ magnétique B.\nOn transforme ainsi une mesure de champ en une pesée, beaucoup plus précise.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p04_q1",
            "type": "mcq",
            "prompt": "La balance de Cotton est un dispositif qui permet de mesurer :",
            "options": [
              "La valeur d'un champ magnétique B",
              "Une intensité inconnue seulement",
              "La masse d'un aimant",
              "La température d'un conducteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'intérêt du dispositif indiqué au §3.1.3 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La condition d'équilibre : le théorème des moments",
          "stepTheme": "La condition d'équilibre : le théorème des moments",
          "stepBadge": "La condition d'équilibre : le théorème des moments",
          "paragraphText": "Le fléau est mobile autour d'un axe horizontal fixe : son équilibre s'écrit avec le théorème des moments.\nLa somme des moments des forces extérieures par rapport à l'axe de rotation doit être nulle.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p04_q2",
            "type": "mcq",
            "prompt": "L'équilibre du fléau de la balance de Cotton s'écrit :",
            "options": [
              "Somme des forces = 0 uniquement",
              "Somme des moments des forces par rapport à l'axe de rotation = 0",
              "Force de Laplace = 0",
              "I = 0"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la condition utilisée au §3.1.2 : ∑M(Δ)(Fext) = 0."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les arcs de cercle ne comptent pas",
          "stepTheme": "Les arcs de cercle ne comptent pas",
          "stepBadge": "Les arcs de cercle ne comptent pas",
          "paragraphText": "Les portions CA et DE du circuit sont des arcs de cercle de centre O, l'axe de rotation.\nLes forces de Laplace qui s'y exercent ont des droites d'action qui coupent l'axe en O : leurs moments sont nuls, comme le montre l'exercice 4 pour les portions AD et BC.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p04_q3",
            "type": "mcq",
            "prompt": "Les forces de Laplace sur les arcs de cercle du circuit n'influencent pas l'équilibre car :",
            "options": [
              "Elles sont nulles",
              "Le courant n'y passe pas",
              "Leurs droites d'action rencontrent l'axe de rotation, donc leurs moments sont nuls",
              "Elles se compensent deux à deux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'argument du §3.1.2 et de la question 2 de l'exercice 4."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La relation d'équilibre I·ℓ·B = m·g",
          "stepTheme": "La relation d'équilibre I·ℓ·B = m·g",
          "stepBadge": "La relation d'équilibre I·ℓ·B = m·g",
          "paragraphText": "Avec des bras de levier égaux (d = d'), l'égalité des moments F·d = P·d' se simplifie.\nIl reste I·ℓ·B = m·g, d'où l'expression de B en fonction de grandeurs toutes mesurables.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p04_q4",
            "type": "mcq",
            "prompt": "À l'équilibre de la balance de Cotton (bras égaux), la relation entre les grandeurs est :",
            "options": [
              "I·ℓ·B = m/g",
              "B = I·ℓ·m·g",
              "I·ℓ = m·g·B",
              "I·ℓ·B = m·g"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la relation du §3.1.2, qui donne B = m·g/(I·ℓ)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 2 : m = 0,012 kg",
          "stepTheme": "L'exercice 2 : m = 0,012 kg",
          "stepBadge": "L'exercice 2 : m = 0,012 kg",
          "paragraphText": "Pour un conducteur actif de 3 cm, un courant de 8 A et un champ de 0,5 T, la masse d'équilibre est faible.\nLa solution calcule m = I·ℓ·B/g = 0,012 kg, soit 12 grammes dans le plateau.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p04_q5",
            "type": "mcq",
            "prompt": "La masse à placer dans le plateau dans l'exercice 2 (ℓ = 3 cm ; I = 8 A ; B = 0,5 T) vaut :",
            "options": [
              "0,012 kg",
              "0,12 kg",
              "1,2 kg",
              "0,0012 kg"
            ],
            "correctAnswerIndex": 0,
            "explanation": "m = I·ℓ·B/g donne 0,012 kg dans la solution de l'exercice 2."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 4 : B par la courbe I = f(m)",
          "stepTheme": "L'exercice 4 : B par la courbe I = f(m)",
          "stepBadge": "L'exercice 4 : B par la courbe I = f(m)",
          "paragraphText": "En faisant varier la masse marquée, on relève I : la courbe I = f(m) est une droite passant par l'origine, de coefficient k = 1600 A/kg.\nPar identification avec I = (g/(ℓ·B))·m, la solution obtient B = 0,215 T pour ℓ = 2,9 cm.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p04_q6",
            "type": "mcq",
            "prompt": "La valeur du champ mesurée dans l'exercice 4 (balance de Cotton, ℓ = 2,9 cm) vaut :",
            "options": [
              "0,5 T",
              "0,215 T",
              "1600 T",
              "0,04 T"
            ],
            "correctAnswerIndex": 1,
            "explanation": "B = g/(k·ℓ) avec k = 1600 A/kg : c'est le résultat de la question 5 de l'exercice 4."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l08_loi_laplace_p04_q1",
          "type": "mcq",
          "prompt": "La balance de Cotton est un dispositif qui permet de mesurer :",
          "options": [
            "La valeur d'un champ magnétique B",
            "Une intensité inconnue seulement",
            "La masse d'un aimant",
            "La température d'un conducteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'intérêt du dispositif indiqué au §3.1.3 du résumé."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p04_q2",
          "type": "mcq",
          "prompt": "L'équilibre du fléau de la balance de Cotton s'écrit :",
          "options": [
            "Somme des forces = 0 uniquement",
            "Somme des moments des forces par rapport à l'axe de rotation = 0",
            "Force de Laplace = 0",
            "I = 0"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la condition utilisée au §3.1.2 : ∑M(Δ)(Fext) = 0."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p04_q3",
          "type": "mcq",
          "prompt": "Les forces de Laplace sur les arcs de cercle du circuit n'influencent pas l'équilibre car :",
          "options": [
            "Elles sont nulles",
            "Le courant n'y passe pas",
            "Leurs droites d'action rencontrent l'axe de rotation, donc leurs moments sont nuls",
            "Elles se compensent deux à deux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'argument du §3.1.2 et de la question 2 de l'exercice 4."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p04_q4",
          "type": "mcq",
          "prompt": "À l'équilibre de la balance de Cotton (bras égaux), la relation entre les grandeurs est :",
          "options": [
            "I·ℓ·B = m/g",
            "B = I·ℓ·m·g",
            "I·ℓ = m·g·B",
            "I·ℓ·B = m·g"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la relation du §3.1.2, qui donne B = m·g/(I·ℓ)."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p04_q5",
          "type": "mcq",
          "prompt": "La masse à placer dans le plateau dans l'exercice 2 (ℓ = 3 cm ; I = 8 A ; B = 0,5 T) vaut :",
          "options": [
            "0,012 kg",
            "0,12 kg",
            "1,2 kg",
            "0,0012 kg"
          ],
          "correctAnswerIndex": 0,
          "explanation": "m = I·ℓ·B/g donne 0,012 kg dans la solution de l'exercice 2."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p04_q6",
          "type": "mcq",
          "prompt": "La valeur du champ mesurée dans l'exercice 4 (balance de Cotton, ℓ = 2,9 cm) vaut :",
          "options": [
            "0,5 T",
            "0,215 T",
            "1600 T",
            "0,04 T"
          ],
          "correctAnswerIndex": 1,
          "explanation": "B = g/(k·ℓ) avec k = 1600 A/kg : c'est le résultat de la question 5 de l'exercice 4."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l08_loi_laplace_p05",
      "order": 5,
      "title": "Applications 2 : roue de Barlow et haut-parleur",
      "summary": "La roue de Barlow tourne sous l'effet des forces de Laplace successives sur ses rayons ; le haut-parleur convertit un courant variable en vibration sonore.",
      "conceptExplanation": "La roue de Barlow est un disque de cuivre mobile autour d'un axe horizontal, dont le bas plonge dans une solution conductrice, dans le champ d'un aimant en U.\nÀ la fermeture du circuit, le rayon qui plonge dans la solution est traversé par le courant et subit la force de Laplace ; il sort de la solution, un autre rayon y pénètre, et l'ensemble tourne dans le sens de F : c'est un ancêtre du moteur électrique.\nLe haut-parleur transforme des courants électriques en ondes sonores : il est constitué d'un aimant, d'une bobine et d'une membrane solidaire de la bobine.\nLes variations du courant dans la bobine créent une force de Laplace variable qui fait vibrer la membrane, et cette vibration crée le son.",
      "keyRule": "Laplace au travail : un courant dans un champ ⇒ un mouvement (roue, membrane) — le principe du moteur et du haut-parleur.",
      "formulas": [
        {
          "name": "Principe commun",
          "formula": "\\text{Courant variable ou successif} \\Rightarrow F \\text{ de Laplace} \\Rightarrow \\text{mouvement}",
          "note": "Rotation continue pour Barlow, vibration pour le haut-parleur."
        }
      ],
      "workedExample": {
        "title": "Pourquoi la roue de Barlow tourne-t-elle en continu ?",
        "statement": "Explique le fonctionnement de la roue de Barlow après la fermeture du circuit.",
        "methodSteps": [
          "Le rayon immergé, parcouru par le courant radial dans le champ de l'aimant en U, subit une force de Laplace tangentielle.",
          "Si la force est suffisante, ce rayon sort de la solution conductrice.",
          "Le rayon suivant y pénètre à son tour et subit la même force : la rotation s'entretient, dans le sens de F."
        ],
        "conclusion": "C'est le fonctionnement décrit au §3.2.2 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La constitution de la roue de Barlow",
          "stepTheme": "La constitution de la roue de Barlow",
          "stepBadge": "La constitution de la roue de Barlow",
          "paragraphText": "La roue de Barlow est un disque de cuivre mobile autour d'un axe horizontal relié à une borne du générateur.\nL'autre borne est reliée à une cuve de solution conductrice en contact avec le bas du disque, et un aimant en U crée le champ autour de cette portion basse.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p05_q1",
            "type": "mcq",
            "prompt": "La roue de Barlow est constituée principalement :",
            "options": [
              "D'un disque de cuivre mobile autour d'un axe, plongeant dans une solution conductrice, dans le champ d'un aimant en U",
              "D'un pendule et d'un ressort",
              "De deux rails et d'une barre",
              "D'une bobine et d'une membrane"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la description du §3.2.1 ; la dernière proposition décrit le haut-parleur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le rayon immergé subit la force de Laplace",
          "stepTheme": "Le rayon immergé subit la force de Laplace",
          "stepBadge": "Le rayon immergé subit la force de Laplace",
          "paragraphText": "Le courant traverse le disque depuis l'axe vers la cuve, le long du rayon immergé.\nCe rayon, conducteur parcouru par un courant dans un champ magnétique, est exactement dans la situation de la loi de Laplace.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p05_q2",
            "type": "mcq",
            "prompt": "Dans la roue de Barlow, l'élément qui subit la force de Laplace est :",
            "options": [
              "L'aimant en U",
              "Le rayon du disque qui plonge dans la solution conductrice et qui est traversé par le courant",
              "L'axe de rotation",
              "La cuve"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le fonctionnement du §3.2.2 : le rayon joue le rôle du conducteur de longueur ℓ."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les rayons se succèdent : la rotation s'entretient",
          "stepTheme": "Les rayons se succèdent : la rotation s'entretient",
          "stepBadge": "Les rayons se succèdent : la rotation s'entretient",
          "paragraphText": "Chaque rayon, en sortant de la solution, cesse d'être parcouru par le courant ; le suivant prend sa place.\nLa force de Laplace s'exerce donc toujours sur le rayon immergé : la roue tourne continûment dans le sens de F.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p05_q3",
            "type": "mcq",
            "prompt": "La roue de Barlow tourne de façon continue parce que :",
            "options": [
              "Le disque est parfaitement équilibré",
              "Le courant chauffe la solution",
              "Les rayons se succèdent dans la solution et chacun subit à son tour la force de Laplace",
              "L'aimant tourne avec la roue"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la fin du §3.2.2 : « les rayons se suivent ainsi les uns après les autres »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le haut-parleur : convertir le courant en son",
          "stepTheme": "Le haut-parleur : convertir le courant en son",
          "stepBadge": "Le haut-parleur : convertir le courant en son",
          "paragraphText": "• Haut-parleur : appareil qui transforme des courants électriques en ondes sonores.\nIl est constitué d'un aimant, d'une bobine mobile et d'une membrane solidaire de la bobine.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p05_q4",
            "type": "mcq",
            "prompt": "Un haut-parleur transforme :",
            "options": [
              "Le son en courant électrique",
              "La lumière en son",
              "La chaleur en son",
              "Des courants électriques en ondes sonores"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la première phrase du §3.3 du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La membrane vibre sous la force de Laplace",
          "stepTheme": "La membrane vibre sous la force de Laplace",
          "stepBadge": "La membrane vibre sous la force de Laplace",
          "paragraphText": "La bobine du haut-parleur, placée dans le champ de l'aimant, est parcourue par le courant à reproduire.\nLes variations de ce courant créent une force de Laplace variable qui fait vibrer la membrane solidaire de la bobine : cette vibration crée le son.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p05_q5",
            "type": "mcq",
            "prompt": "Dans un haut-parleur, la membrane vibre parce que :",
            "options": [
              "Les variations du courant dans la bobine créent une force de Laplace variable",
              "L'aimant chauffe l'air",
              "Un moteur fait tourner la bobine",
              "Le courant est continu et constant"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le fonctionnement décrit au §3.3 : courant variable ⇒ force variable ⇒ vibration ⇒ son."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Un courant constant ne produit pas de son",
          "stepTheme": "Un courant constant ne produit pas de son",
          "stepBadge": "Un courant constant ne produit pas de son",
          "paragraphText": "Piège : avec un courant constant, la force de Laplace sur la bobine du haut-parleur est constante.\nLa membrane se déplacerait d'une position fixe sans vibrer : c'est la variation du courant qui produit le son.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p05_q6",
            "type": "mcq",
            "prompt": "Si la bobine d'un haut-parleur était parcourue par un courant rigoureusement constant, la membrane :",
            "options": [
              "Vibrerait de plus en plus fort",
              "Se déplacerait vers une position fixe sans vibrer (pas de son entretenu)",
              "Tournerait comme la roue de Barlow",
              "Fondrait immédiatement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La force de Laplace serait constante : pas de vibration, donc pas d'onde sonore (§3.3)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l08_loi_laplace_p05_q1",
          "type": "mcq",
          "prompt": "La roue de Barlow est constituée principalement :",
          "options": [
            "D'un disque de cuivre mobile autour d'un axe, plongeant dans une solution conductrice, dans le champ d'un aimant en U",
            "D'un pendule et d'un ressort",
            "De deux rails et d'une barre",
            "D'une bobine et d'une membrane"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la description du §3.2.1 ; la dernière proposition décrit le haut-parleur."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p05_q2",
          "type": "mcq",
          "prompt": "Dans la roue de Barlow, l'élément qui subit la force de Laplace est :",
          "options": [
            "L'aimant en U",
            "Le rayon du disque qui plonge dans la solution conductrice et qui est traversé par le courant",
            "L'axe de rotation",
            "La cuve"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le fonctionnement du §3.2.2 : le rayon joue le rôle du conducteur de longueur ℓ."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p05_q3",
          "type": "mcq",
          "prompt": "La roue de Barlow tourne de façon continue parce que :",
          "options": [
            "Le disque est parfaitement équilibré",
            "Le courant chauffe la solution",
            "Les rayons se succèdent dans la solution et chacun subit à son tour la force de Laplace",
            "L'aimant tourne avec la roue"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la fin du §3.2.2 : « les rayons se suivent ainsi les uns après les autres »."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p05_q4",
          "type": "mcq",
          "prompt": "Un haut-parleur transforme :",
          "options": [
            "Le son en courant électrique",
            "La lumière en son",
            "La chaleur en son",
            "Des courants électriques en ondes sonores"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la première phrase du §3.3 du résumé."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p05_q5",
          "type": "mcq",
          "prompt": "Dans un haut-parleur, la membrane vibre parce que :",
          "options": [
            "Les variations du courant dans la bobine créent une force de Laplace variable",
            "L'aimant chauffe l'air",
            "Un moteur fait tourner la bobine",
            "Le courant est continu et constant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le fonctionnement décrit au §3.3 : courant variable ⇒ force variable ⇒ vibration ⇒ son."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p05_q6",
          "type": "mcq",
          "prompt": "Si la bobine d'un haut-parleur était parcourue par un courant rigoureusement constant, la membrane :",
          "options": [
            "Vibrerait de plus en plus fort",
            "Se déplacerait vers une position fixe sans vibrer (pas de son entretenu)",
            "Tournerait comme la roue de Barlow",
            "Fondrait immédiatement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La force de Laplace serait constante : pas de vibration, donc pas d'onde sonore (§3.3)."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l08_loi_laplace_p06",
      "order": 6,
      "title": "Équilibre d'une tige mobile et courants de Foucault",
      "summary": "L'équilibre des moments donne l'inclinaison d'une tige de Laplace ; la documentation présente les courants de Foucault, leurs pertes et le freinage électromagnétique.",
      "conceptExplanation": "Dans la situation d'évaluation, la tige OA (ℓ = 20 cm, m = 10 g), entièrement plongée dans un champ B = 5 × 10⁻² T et parcourue par I = 5 A, s'équilibre inclinée d'un angle α par rapport à la verticale.\nLe bilan des forces comprend la réaction du support, le poids et la force de Laplace ; le théorème des moments donne F = P·sin α, soit sin α = I·ℓ·B/(m·g) = 0,5, d'où α = 30°.\nDans l'exercice 5, le même raisonnement conduit à I = m·g·sin(2α)/(2·h·B) = 1,36 A pour une tige inclinée de 10°.\nLa documentation présente les courants de Foucault : courants créés dans une masse conductrice par la variation d'un champ magnétique ou par le déplacement de la masse dans un champ ; ils provoquent des pertes par effet Joule (d'où les tôles feuilletées des transformateurs) mais aussi le freinage électromagnétique sans contact des trains et poids lourds.",
      "keyRule": "Tige en équilibre : moment de F = moment du poids ; courant de Foucault = courant induit dans une masse conductrice, à l'origine des freins électromagnétiques.",
      "formulas": [
        {
          "name": "Inclinaison de la tige de Laplace",
          "formula": "\\sin\\alpha = \\frac{I \\ell B}{m g}",
          "note": "Résultat de la situation d'évaluation (moments par rapport à l'axe)."
        },
        {
          "name": "Courants de Foucault",
          "formula": "\\text{Courants induits dans une masse conductrice par } \\Delta B \\text{ ou par un déplacement dans } B",
          "note": "Effets : échauffement par effet Joule et forces de Laplace de freinage (documentation)."
        }
      ],
      "workedExample": {
        "title": "L'inclinaison de la tige OA (situation d'évaluation, partie 2)",
        "statement": "La tige OA de longueur 20 cm et de masse 10 g est entièrement plongée dans un champ de 5 × 10⁻² T et parcourue par un courant de 5 A (g = 10 m/s²). Détermine son inclinaison α par rapport à la verticale.",
        "methodSteps": [
          "Bilan des forces : réaction du support, poids de la tige et force de Laplace.",
          "Équilibre autour de l'axe : les moments donnent F = P·sin α, avec F = I·ℓ·B et P = m·g.",
          "sin α = 0,5, donc α = 30°."
        ],
        "conclusion": "C'est le résultat de la question 2.3 de la situation d'évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le bilan des forces sur la tige mobile",
          "stepTheme": "Le bilan des forces sur la tige mobile",
          "stepBadge": "Le bilan des forces sur la tige mobile",
          "paragraphText": "La correction de la situation dresse le bilan des forces extérieures à la tige OA.\nOn y trouve la réaction du support (à l'axe), le poids de la tige et la force de Laplace.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p06_q1",
            "type": "mcq",
            "prompt": "Le bilan des forces sur la tige OA de la situation d'évaluation comprend :",
            "options": [
              "Le poids seul",
              "La réaction du support, le poids et la force de Laplace",
              "La force de Laplace et les frottements seulement",
              "Le poids et la poussée d'Archimède"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le bilan de la question 2.1 de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "L'équilibre autour d'un axe fixe",
          "stepTheme": "L'équilibre autour d'un axe fixe",
          "stepBadge": "L'équilibre autour d'un axe fixe",
          "paragraphText": "Pour un solide mobile autour d'un axe fixe, l'équilibre exige deux conditions.\nLa somme des forces extérieures est nulle, et la somme de leurs moments par rapport à l'axe est nulle : c'est la seconde qui donne l'inclinaison.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p06_q2",
            "type": "mcq",
            "prompt": "Les conditions d'équilibre d'une tige mobile autour d'un axe fixe sont :",
            "options": [
              "Somme des forces ≠ 0 et somme des moments = 0",
              "Somme des vitesses = 0",
              "Somme des forces extérieures = 0 et somme de leurs moments par rapport à l'axe = 0",
              "Force de Laplace = poids en norme uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la réponse à la question 2.2 de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'inclinaison de la situation : α = 30°",
          "stepTheme": "L'inclinaison de la situation : α = 30°",
          "stepBadge": "L'inclinaison de la situation : α = 30°",
          "paragraphText": "Les moments calculés par la correction conduisent à I·ℓ·B = m·g·sin α.\nAvec les valeurs numériques (5 A ; 0,20 m ; 5 × 10⁻² T ; 10 g ; g = 10), sin α vaut un demi : α = 30°.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p06_q3",
            "type": "mcq",
            "prompt": "L'inclinaison de la tige OA par rapport à la verticale (situation d'évaluation) vaut :",
            "options": [
              "10°",
              "45°",
              "60°",
              "30°"
            ],
            "correctAnswerIndex": 3,
            "explanation": "sin α = I·ℓ·B/(m·g) = 0,5 donne α = 30° (question 2.3)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 5 : retrouver le courant d'équilibre",
          "stepTheme": "L'exercice 5 : retrouver le courant d'équilibre",
          "stepBadge": "L'exercice 5 : retrouver le courant d'équilibre",
          "paragraphText": "Pour une tige de 20 g inclinée de 10°, avec h = 5 cm et B = 0,5 T, l'équilibre des moments donne le courant.\nLa solution obtient I = m·g·sin(2α)/(2·h·B) = 1,36 A.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p06_q4",
            "type": "mcq",
            "prompt": "Le courant d'équilibre calculé dans l'exercice 5 (tige inclinée de 10°) vaut environ :",
            "options": [
              "1,36 A",
              "5 A",
              "0,5 A",
              "13,6 A"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la valeur finale de la solution de l'exercice 5."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les courants de Foucault (documentation)",
          "stepTheme": "Les courants de Foucault (documentation)",
          "stepBadge": "Les courants de Foucault (documentation)",
          "paragraphText": "• Courants de Foucault : courants électriques créés dans une masse conductrice par la variation d'un champ magnétique extérieur, ou par le déplacement de cette masse dans un champ magnétique.\nIls sont une conséquence de l'induction électromagnétique.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p06_q5",
            "type": "mcq",
            "prompt": "Les courants de Foucault sont des courants créés dans une masse conductrice par :",
            "options": [
              "Un générateur branché à la masse",
              "La variation d'un champ magnétique traversant le milieu, ou le déplacement de la masse dans un champ",
              "Le frottement de la masse",
              "Une réaction chimique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition de la documentation qui clôt le résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Freinage électromagnétique et tôles feuilletées",
          "stepTheme": "Freinage électromagnétique et tôles feuilletées",
          "stepBadge": "Freinage électromagnétique et tôles feuilletées",
          "paragraphText": "Les courants de Foucault créent des forces de Laplace qui s'opposent au déplacement : c'est le freinage électromagnétique, sans contact ni usure, des trains et des poids lourds.\nMais ils causent aussi des pertes par effet Joule dans les transformateurs : on y limite leur circulation en feuilletant les circuits magnétiques en tôles.",
          "exercise": {
            "id": "terminale_c_physique_l08_loi_laplace_p06_q6",
            "type": "mcq",
            "prompt": "Les circuits magnétiques des transformateurs sont constitués de tôles feuilletées afin de :",
            "options": [
              "Augmenter les courants de Foucault",
              "Faciliter le montage",
              "Limiter les courants de Foucault et les pertes par effet Joule qui en découlent",
              "Rendre le transformateur plus lourd"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'explication donnée dans la documentation sur les courants de Foucault."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l08_loi_laplace_p06_q1",
          "type": "mcq",
          "prompt": "Le bilan des forces sur la tige OA de la situation d'évaluation comprend :",
          "options": [
            "Le poids seul",
            "La réaction du support, le poids et la force de Laplace",
            "La force de Laplace et les frottements seulement",
            "Le poids et la poussée d'Archimède"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le bilan de la question 2.1 de la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p06_q2",
          "type": "mcq",
          "prompt": "Les conditions d'équilibre d'une tige mobile autour d'un axe fixe sont :",
          "options": [
            "Somme des forces ≠ 0 et somme des moments = 0",
            "Somme des vitesses = 0",
            "Somme des forces extérieures = 0 et somme de leurs moments par rapport à l'axe = 0",
            "Force de Laplace = poids en norme uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la réponse à la question 2.2 de la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p06_q3",
          "type": "mcq",
          "prompt": "L'inclinaison de la tige OA par rapport à la verticale (situation d'évaluation) vaut :",
          "options": [
            "10°",
            "45°",
            "60°",
            "30°"
          ],
          "correctAnswerIndex": 3,
          "explanation": "sin α = I·ℓ·B/(m·g) = 0,5 donne α = 30° (question 2.3)."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p06_q4",
          "type": "mcq",
          "prompt": "Le courant d'équilibre calculé dans l'exercice 5 (tige inclinée de 10°) vaut environ :",
          "options": [
            "1,36 A",
            "5 A",
            "0,5 A",
            "13,6 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la valeur finale de la solution de l'exercice 5."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p06_q5",
          "type": "mcq",
          "prompt": "Les courants de Foucault sont des courants créés dans une masse conductrice par :",
          "options": [
            "Un générateur branché à la masse",
            "La variation d'un champ magnétique traversant le milieu, ou le déplacement de la masse dans un champ",
            "Le frottement de la masse",
            "Une réaction chimique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition de la documentation qui clôt le résumé."
        },
        {
          "id": "terminale_c_physique_l08_loi_laplace_p06_q6",
          "type": "mcq",
          "prompt": "Les circuits magnétiques des transformateurs sont constitués de tôles feuilletées afin de :",
          "options": [
            "Augmenter les courants de Foucault",
            "Faciliter le montage",
            "Limiter les courants de Foucault et les pertes par effet Joule qui en découlent",
            "Rendre le transformateur plus lourd"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'explication donnée dans la documentation sur les courants de Foucault."
        }
      ]
    }
  ]
};
