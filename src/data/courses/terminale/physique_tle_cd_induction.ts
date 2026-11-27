import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 9 : Induction électromagnétique » (Terminale C/D ; format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1321
export const PHYSIQUE_TLE_CD_L09_INDUCTION: CurriculumChapter = {
  "id": "terminale_c_physique_l09_induction",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 9,
  "title": "Leçon 9 : Induction électromagnétique",
  "summary": "Le flux magnétique Φ = N·B·S·cos θ et ses variations créent un courant induit : loi de Lenz pour le sens, loi de Faraday e = −dΦ/dt pour la valeur, avec les applications : transformateur, alternateur, microphone.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1321",
  "points": [
    {
      "id": "terminale_c_physique_l09_induction_p01",
      "order": 1,
      "title": "La notion de flux magnétique",
      "summary": "Φ = B·S·cos θ (× N pour une bobine), grandeur algébrique en webers, définie à partir du vecteur surface.",
      "conceptExplanation": "Le vecteur surface S⃗ d'un circuit plan est le vecteur normal au plan du circuit, dont le sens est déterminé par la règle de l'observateur d'Ampère ; si le circuit est parcouru par un courant, le sens positif est celui du courant.\nLe flux magnétique du champ B⃗ à travers le circuit est la grandeur algébrique Φ = B⃗·S⃗ = B·S·cos θ, où θ est l'angle entre B⃗ et S⃗.\nL'unité légale du flux est le weber (Wb) et il se mesure à l'aide d'un fluxmètre ; pour une bobine de N spires, Φ = N·B·S·cos θ.\nDans l'activité d'application (bobine plate de 50 spires, r = 2,5 cm, B = 0,02 T, inclinée de 60°), on obtient un flux de ±1,7 × 10⁻³ Wb selon l'orientation choisie.",
      "keyRule": "Φ = N·B·S·cos θ : maximal quand B est parallèle à la normale (θ = 0), nul quand il lui est perpendiculaire.",
      "formulas": [
        {
          "name": "Flux magnétique",
          "formula": "\\phi = \\vec{B} \\cdot \\vec{S} = B S \\cos\\theta",
          "note": "En webers (Wb) ; pour N spires : Φ = N·B·S·cos θ."
        }
      ],
      "workedExample": {
        "title": "Le flux à travers la bobine de l'exercice 1",
        "statement": "Une bobine de N = 150 spires et de rayon r = 10 cm est plongée dans un champ uniforme B = 0,1 T parallèle à son axe, B⃗ et S⃗ de même sens. Calcule le flux à travers la bobine.",
        "methodSteps": [
          "B⃗ et S⃗ de même sens donnent θ = 0, donc cos θ = 1.",
          "Le flux s'écrit Φ = N·B·S avec S = π·r².",
          "La solution obtient Φ = 0,47 Wb."
        ],
        "conclusion": "Ce sont les réponses 1-b, 2-c et 3-a de l'exercice 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le vecteur surface",
          "stepTheme": "Le vecteur surface",
          "stepBadge": "Le vecteur surface",
          "paragraphText": "• Vecteur surface S⃗ : vecteur normal au plan du circuit, dont le sens est déterminé par la règle de l'observateur d'Ampère (ou une règle équivalente).\nSi le circuit est parcouru par un courant, le sens positif est celui du courant électrique.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p01_q1",
            "type": "mcq",
            "prompt": "Le vecteur surface d'un circuit plan est :",
            "options": [
              "Un vecteur normal au plan du circuit, orienté selon la règle de l'observateur d'Ampère",
              "Un vecteur tangent au circuit",
              "Toujours vertical",
              "Le vecteur champ magnétique lui-même"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §1.1 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La définition du flux magnétique",
          "stepTheme": "La définition du flux magnétique",
          "stepBadge": "La définition du flux magnétique",
          "paragraphText": "• Flux magnétique : produit scalaire du vecteur champ par le vecteur surface, Φ = B·S·cos θ.\nC'est une grandeur algébrique : son signe dépend de l'orientation choisie pour le circuit.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p01_q2",
            "type": "mcq",
            "prompt": "Le flux magnétique à travers un circuit d'aire S dans un champ uniforme B vaut :",
            "options": [
              "$\\phi = B \\times S \\times \\sin\\theta$",
              "$\\phi = B \\times S \\times \\cos\\theta$",
              "$\\phi = B/S$",
              "$\\phi = B + S$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du §1.2 : Φ est le produit scalaire B⃗·S⃗."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'unité : le weber, et le fluxmètre",
          "stepTheme": "L'unité : le weber, et le fluxmètre",
          "stepBadge": "L'unité : le weber, et le fluxmètre",
          "paragraphText": "L'unité légale du flux magnétique est le weber, de symbole Wb.\nLe résumé précise que le flux magnétique se mesure à l'aide d'un fluxmètre.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p01_q3",
            "type": "mcq",
            "prompt": "Le flux magnétique s'exprime en webers (Wb) et se mesure avec :",
            "options": [
              "Un teslamètre",
              "Un galvanomètre",
              "Un fluxmètre",
              "Un wattmètre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les deux remarques du §1.2 ; le teslamètre mesure le champ B, pas le flux."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le flux à travers une bobine de N spires",
          "stepTheme": "Le flux à travers une bobine de N spires",
          "stepBadge": "Le flux à travers une bobine de N spires",
          "paragraphText": "Chaque spire de la bobine est traversée par le même flux élémentaire B·S·cos θ.\nLe flux total à travers la bobine est donc la somme sur les spires : Φ = N·B·S·cos θ.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p01_q4",
            "type": "mcq",
            "prompt": "Le flux à travers une bobine de N spires identiques vaut :",
            "options": [
              "Φ = B·S·cos θ, indépendant de N",
              "Φ = B·S/(N·cos θ)",
              "Φ = N²·B·S·cos θ",
              "Φ = N·B·S·cos θ"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la troisième remarque du §1.2 : le flux s'additionne spire par spire."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'activité : un flux de ±1,7 × 10⁻³ Wb",
          "stepTheme": "L'activité : un flux de ±1,7 × 10⁻³ Wb",
          "stepBadge": "L'activité : un flux de ±1,7 × 10⁻³ Wb",
          "paragraphText": "La bobine plate de l'activité (50 spires, rayon moyen 2,5 cm) est plongée dans un champ de 0,02 T, inclinée de 60°.\nSelon l'orientation retenue, la solution obtient Φ = +1,7 × 10⁻³ Wb ou Φ = −1,7 × 10⁻³ Wb : le signe dépend du sens positif choisi.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p01_q5",
            "type": "mcq",
            "prompt": "Le flux calculé dans l'activité d'application (bobine de 50 spires inclinée à 60°) vaut, en valeur absolue :",
            "options": [
              "1,7 × 10⁻³ Wb",
              "0,47 Wb",
              "1,7 Wb",
              "0,02 Wb"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la valeur absolue obtenue dans les deux cas de l'activité ; 0,47 Wb est le flux de l'exercice 1."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La règle du flux maximal",
          "stepTheme": "La règle du flux maximal",
          "stepBadge": "La règle du flux maximal",
          "paragraphText": "• Règle du flux maximal : un circuit fermé, parcouru par un courant continu et mobile dans un champ magnétique uniforme, s'oriente de telle sorte que le flux magnétique soit maximal dans sa position d'équilibre.\nLe sens positif étant celui du courant, le flux maximal vaut Φ = N·B·S (normale alignée sur B).",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p01_q6",
            "type": "mcq",
            "prompt": "D'après la règle du flux maximal, un circuit mobile parcouru par un courant s'oriente dans un champ uniforme de façon à rendre le flux :",
            "options": [
              "Nul",
              "Maximal dans sa position d'équilibre",
              "Minimal",
              "Indépendant de sa position"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'énoncé du §1.3 : l'équilibre correspond à θ = 0 entre B⃗ et S⃗."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l09_induction_p01_q1",
          "type": "mcq",
          "prompt": "Le vecteur surface d'un circuit plan est :",
          "options": [
            "Un vecteur normal au plan du circuit, orienté selon la règle de l'observateur d'Ampère",
            "Un vecteur tangent au circuit",
            "Toujours vertical",
            "Le vecteur champ magnétique lui-même"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §1.1 du résumé."
        },
        {
          "id": "terminale_c_physique_l09_induction_p01_q2",
          "type": "mcq",
          "prompt": "Le flux magnétique à travers un circuit d'aire S dans un champ uniforme B vaut :",
          "options": [
            "$\\phi = B \\times S \\times \\sin\\theta$",
            "$\\phi = B \\times S \\times \\cos\\theta$",
            "$\\phi = B/S$",
            "$\\phi = B + S$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du §1.2 : Φ est le produit scalaire B⃗·S⃗."
        },
        {
          "id": "terminale_c_physique_l09_induction_p01_q3",
          "type": "mcq",
          "prompt": "Le flux magnétique s'exprime en webers (Wb) et se mesure avec :",
          "options": [
            "Un teslamètre",
            "Un galvanomètre",
            "Un fluxmètre",
            "Un wattmètre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les deux remarques du §1.2 ; le teslamètre mesure le champ B, pas le flux."
        },
        {
          "id": "terminale_c_physique_l09_induction_p01_q4",
          "type": "mcq",
          "prompt": "Le flux à travers une bobine de N spires identiques vaut :",
          "options": [
            "Φ = B·S·cos θ, indépendant de N",
            "Φ = B·S/(N·cos θ)",
            "Φ = N²·B·S·cos θ",
            "Φ = N·B·S·cos θ"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la troisième remarque du §1.2 : le flux s'additionne spire par spire."
        },
        {
          "id": "terminale_c_physique_l09_induction_p01_q5",
          "type": "mcq",
          "prompt": "Le flux calculé dans l'activité d'application (bobine de 50 spires inclinée à 60°) vaut, en valeur absolue :",
          "options": [
            "1,7 × 10⁻³ Wb",
            "0,47 Wb",
            "1,7 Wb",
            "0,02 Wb"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la valeur absolue obtenue dans les deux cas de l'activité ; 0,47 Wb est le flux de l'exercice 1."
        },
        {
          "id": "terminale_c_physique_l09_induction_p01_q6",
          "type": "mcq",
          "prompt": "D'après la règle du flux maximal, un circuit mobile parcouru par un courant s'oriente dans un champ uniforme de façon à rendre le flux :",
          "options": [
            "Nul",
            "Maximal dans sa position d'équilibre",
            "Minimal",
            "Indépendant de sa position"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'énoncé du §1.3 : l'équilibre correspond à θ = 0 entre B⃗ et S⃗."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l09_induction_p02",
      "order": 2,
      "title": "Mise en évidence de l'induction électromagnétique",
      "summary": "Chaque fois que le flux varie — aimant mobile, rotation, surface variable, courant variable — un courant induit apparaît dans le circuit fermé, et seulement pendant la variation.",
      "conceptExplanation": "En déplaçant un aimant au voisinage d'une bobine reliée à un galvanomètre, on provoque l'apparition d'un courant électrique appelé courant induit ; l'aimant qui crée le champ est l'inducteur, la bobine siège du courant induit est le circuit induit, ou induit.\nL'intensité du courant induit augmente avec la vitesse de déplacement de l'aimant, son sens dépend du sens du déplacement et du pôle le plus proche, et il s'annule lorsque le déplacement cesse.\nLe résumé montre d'autres façons de faire varier le flux : rotation d'un circuit fermé (l'angle θ varie), variation de la surface du circuit (tige mobile sur rails), déplacement d'une bobine inductrice, ouverture ou fermeture du circuit inducteur.\nConclusion : un courant induit est créé dans un circuit fermé chaque fois qu'il y a variation du flux magnétique dans le circuit, et ce courant ne dure que le temps de la variation du flux.",
      "keyRule": "Induction ⇔ variation de flux ; pas de variation ⇒ pas de courant induit, même avec un champ intense.",
      "formulas": [
        {
          "name": "Condition d'induction",
          "formula": "\\text{Courant induit} \\iff \\phi \\text{ varie (} B, S \\text{ ou } \\theta \\text{ varie)}",
          "note": "Le courant induit ne dure que le temps de la variation (§2.2)."
        }
      ],
      "workedExample": {
        "title": "Approcher ou éloigner la bobine inductrice",
        "statement": "Une bobine inductrice parcourue par un courant I est déplacée par rapport à une bobine induite fixe. Qu'observe-t-on en l'approchant, puis en l'éloignant ?",
        "methodSteps": [
          "En approchant la bobine mobile, le flux à travers l'induite croît : il naît un courant induit i de sens différent de I.",
          "En l'éloignant, le flux décroît : le courant induit est alors de même sens que I.",
          "Dans les deux cas, le courant induit disparaît dès que le déplacement cesse."
        ],
        "conclusion": "Ce sont les observations du §2.1.4 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Inducteur et induit",
          "stepTheme": "Inducteur et induit",
          "stepBadge": "Inducteur et induit",
          "paragraphText": "Dans le phénomène d'induction, la source du champ magnétique se nomme l'inducteur.\nLe circuit où apparaît le courant (ou la tension) induit se nomme l'induit, ou circuit induit : ce sont les réponses 1-b et 2-a de l'exercice 2.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p02_q1",
            "type": "mcq",
            "prompt": "Dans un phénomène d'induction, l'inducteur est :",
            "options": [
              "Le circuit où apparaît le courant induit",
              "La source du champ magnétique",
              "Le galvanomètre",
              "La résistance du circuit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Réponse 1-b de l'exercice 2 : l'aimant (ou la bobine alimentée) est l'inducteur, la bobine siège du courant est l'induit."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le courant induit dépend de la vitesse de déplacement",
          "stepTheme": "Le courant induit dépend de la vitesse de déplacement",
          "stepBadge": "Le courant induit dépend de la vitesse de déplacement",
          "paragraphText": "Le résumé remarque que l'intensité du courant induit augmente avec la vitesse de déplacement de l'aimant.\nEn effet, un déplacement plus rapide fait varier le flux plus vite, donc produit une f.é.m. plus grande.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p02_q2",
            "type": "mcq",
            "prompt": "L'intensité du courant induit dans la bobine augmente lorsque :",
            "options": [
              "L'aimant reste immobile plus longtemps",
              "On éloigne le galvanomètre",
              "La vitesse de déplacement de l'aimant augmente",
              "La bobine a une plus grande résistance"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la première remarque du §2.1.1 : ce qui compte, c'est la rapidité de la variation de flux."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Quand le déplacement cesse, le courant s'annule",
          "stepTheme": "Quand le déplacement cesse, le courant s'annule",
          "stepBadge": "Quand le déplacement cesse, le courant s'annule",
          "paragraphText": "Dernière remarque du §2.1.1 : le courant induit s'annule lorsque le déplacement cesse.\nMême plongée dans un champ intense, une bobine immobile par rapport à l'aimant n'est le siège d'aucun courant induit.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p02_q3",
            "type": "mcq",
            "prompt": "L'aimant est immobile à l'intérieur de la bobine, dans un champ intense : le courant induit est :",
            "options": [
              "Maximal",
              "Constant et non nul",
              "Proportionnel à B",
              "Nul, car le flux ne varie plus"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Conclusion du §2.2 : le courant induit ne dure que le temps de la variation du flux."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Faire varier le flux par l'angle ou la surface",
          "stepTheme": "Faire varier le flux par l'angle ou la surface",
          "stepBadge": "Faire varier le flux par l'angle ou la surface",
          "paragraphText": "La rotation d'un circuit fermé près d'un aimant fait varier l'angle θ entre B⃗ et S⃗ : un courant induit apparaît (§2.1.2).\nDe même, la variation de la surface du circuit plongé dans le champ — par exemple une tige mobile sur des rails — donne naissance à un courant induit (§2.1.3).",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p02_q4",
            "type": "mcq",
            "prompt": "Une bobine fermée, soumise à un champ uniforme constant, est le siège d'une induction si :",
            "options": [
              "Elle se déplace perpendiculairement au champ de façon à faire varier le flux",
              "Elle possède beaucoup de spires, immobiles",
              "Son axe est aligné sur le champ, immobile",
              "Le champ est très intense mais constant"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Réponse 4-c de l'exercice 2 : seule une variation de flux (ici par le déplacement) produit l'induction."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Ouverture et fermeture du circuit inducteur",
          "stepTheme": "Ouverture et fermeture du circuit inducteur",
          "stepBadge": "Ouverture et fermeture du circuit inducteur",
          "paragraphText": "À la fermeture du circuit inducteur, le flux à travers l'induite croît brusquement : il naît un courant induit de sens contraire à I.\nÀ l'ouverture, le flux décroît : un courant induit apparaît aussi, dans l'autre sens — c'est le principe du transformateur et de la situation d'apprentissage de la génératrice de bicyclette.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p02_q5",
            "type": "mcq",
            "prompt": "À la fermeture du circuit inducteur, le courant induit dans la bobine voisine est :",
            "options": [
              "De même sens que le courant inducteur I",
              "De sens contraire au courant inducteur I, car le flux croît",
              "Nul",
              "Toujours nul si la bobine est fermée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'observation du §2.1.5 : le courant induit s'oppose à la croissance du flux (loi de Lenz)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Un champ intense mais constant n'induit rien",
          "stepTheme": "Un champ intense mais constant n'induit rien",
          "stepBadge": "Un champ intense mais constant n'induit rien",
          "paragraphText": "L'exercice 2 le tranche : une tension induite apparaît aux bornes d'un circuit plongé dans un champ magnétique d'intensité variable.\nNi un champ faible, ni un champ fort mais constant ne produisent d'induction sans variation.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p02_q6",
            "type": "mcq",
            "prompt": "Une tension induite apparaît aux bornes d'un circuit plongé dans un champ magnétique :",
            "options": [
              "De faible intensité constante",
              "De forte intensité constante",
              "D'intensité variable",
              "Uniquement s'il est créé par un aimant permanent"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Réponse 3-c de l'exercice 2 : c'est la variation qui est la cause de l'induction."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l09_induction_p02_q1",
          "type": "mcq",
          "prompt": "Dans un phénomène d'induction, l'inducteur est :",
          "options": [
            "Le circuit où apparaît le courant induit",
            "La source du champ magnétique",
            "Le galvanomètre",
            "La résistance du circuit"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Réponse 1-b de l'exercice 2 : l'aimant (ou la bobine alimentée) est l'inducteur, la bobine siège du courant est l'induit."
        },
        {
          "id": "terminale_c_physique_l09_induction_p02_q2",
          "type": "mcq",
          "prompt": "L'intensité du courant induit dans la bobine augmente lorsque :",
          "options": [
            "L'aimant reste immobile plus longtemps",
            "On éloigne le galvanomètre",
            "La vitesse de déplacement de l'aimant augmente",
            "La bobine a une plus grande résistance"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la première remarque du §2.1.1 : ce qui compte, c'est la rapidité de la variation de flux."
        },
        {
          "id": "terminale_c_physique_l09_induction_p02_q3",
          "type": "mcq",
          "prompt": "L'aimant est immobile à l'intérieur de la bobine, dans un champ intense : le courant induit est :",
          "options": [
            "Maximal",
            "Constant et non nul",
            "Proportionnel à B",
            "Nul, car le flux ne varie plus"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Conclusion du §2.2 : le courant induit ne dure que le temps de la variation du flux."
        },
        {
          "id": "terminale_c_physique_l09_induction_p02_q4",
          "type": "mcq",
          "prompt": "Une bobine fermée, soumise à un champ uniforme constant, est le siège d'une induction si :",
          "options": [
            "Elle se déplace perpendiculairement au champ de façon à faire varier le flux",
            "Elle possède beaucoup de spires, immobiles",
            "Son axe est aligné sur le champ, immobile",
            "Le champ est très intense mais constant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Réponse 4-c de l'exercice 2 : seule une variation de flux (ici par le déplacement) produit l'induction."
        },
        {
          "id": "terminale_c_physique_l09_induction_p02_q5",
          "type": "mcq",
          "prompt": "À la fermeture du circuit inducteur, le courant induit dans la bobine voisine est :",
          "options": [
            "De même sens que le courant inducteur I",
            "De sens contraire au courant inducteur I, car le flux croît",
            "Nul",
            "Toujours nul si la bobine est fermée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'observation du §2.1.5 : le courant induit s'oppose à la croissance du flux (loi de Lenz)."
        },
        {
          "id": "terminale_c_physique_l09_induction_p02_q6",
          "type": "mcq",
          "prompt": "Une tension induite apparaît aux bornes d'un circuit plongé dans un champ magnétique :",
          "options": [
            "De faible intensité constante",
            "De forte intensité constante",
            "D'intensité variable",
            "Uniquement s'il est créé par un aimant permanent"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Réponse 3-c de l'exercice 2 : c'est la variation qui est la cause de l'induction."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l09_induction_p03",
      "order": 3,
      "title": "Les lois de Lenz et de Faraday",
      "summary": "Lenz donne le sens : le courant induit s'oppose à la cause qui le crée ; Faraday donne la valeur : e = −dΦ/dt.",
      "conceptExplanation": "La loi de Lenz énonce que le sens du courant induit est tel que, par ses effets, il s'oppose à la cause qui lui donne naissance ; elle permet de prévoir le sens du courant induit.\nLa loi de Faraday énonce que tout circuit soumis à une variation de flux magnétique est le siège d'une force électromotrice induite e = −dΦ/dt.\nPour une variation finie, on utilise la f.é.m. moyenne : e_moy = −ΔΦ/Δt.\nDans l'activité d'application, le champ traversant une bobine de 100 spires (r = 4 cm) diminue linéairement de 0,04 T à 0 en 0,1 s : la f.é.m. induite vaut e = 0,2 V, positive, donc le courant induit circule dans le sens positif choisi.",
      "keyRule": "Lenz pour le sens (opposition), Faraday pour la valeur (e = −dΦ/dt) ; le signe moins de Faraday traduit Lenz.",
      "formulas": [
        {
          "name": "Loi de Faraday",
          "formula": "e = -\\frac{d\\phi}{dt}",
          "note": "Le signe (−) traduit la loi de Lenz, compte tenu des conventions d'orientation."
        },
        {
          "name": "f.é.m. induite moyenne",
          "formula": "e_{moy} = -\\frac{\\Delta\\phi}{\\Delta t}",
          "note": "Pour une variation de flux ΔΦ pendant la durée Δt."
        }
      ],
      "workedExample": {
        "title": "La f.é.m. de l'activité (champ décroissant de 0,04 T à 0)",
        "statement": "Une bobine de 100 spires de rayon moyen 4 cm est placée dans un champ parallèle à son axe, qui varie linéairement de 0,04 T à 0,00 T en 0,1 s. Calcule la f.é.m. d'induction.",
        "methodSteps": [
          "Le flux s'écrit Φ = N·B·S ; sa variation vient uniquement de celle de B.",
          "La pente de B(t) vaut −0,4 T/s : e = −N·S·(dB/dt).",
          "La solution obtient e = 0,2 V, positive : le courant induit circule dans le sens positif choisi."
        ],
        "conclusion": "C'est la solution de l'activité d'application du §4.4 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'énoncé de la loi de Lenz",
          "stepTheme": "L'énoncé de la loi de Lenz",
          "stepBadge": "L'énoncé de la loi de Lenz",
          "paragraphText": "• Loi de Lenz : le sens du courant induit est tel que, par ses effets, il s'oppose à la cause qui lui donne naissance.\nLe résumé précise que cette loi permet de prévoir le sens du courant induit.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p03_q1",
            "type": "mcq",
            "prompt": "D'après la loi de Lenz, le courant induit a un sens tel que, par ses effets, il :",
            "options": [
              "S'oppose à la cause qui lui donne naissance",
              "Renforce toujours le champ inducteur",
              "Suit toujours le sens du courant inducteur",
              "S'oppose à la résistance du circuit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'énoncé du §3.1 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le champ induit s'oppose à la variation (exercice 2)",
          "stepTheme": "Le champ induit s'oppose à la variation (exercice 2)",
          "stepBadge": "Le champ induit s'oppose à la variation (exercice 2)",
          "paragraphText": "L'exercice 2 précise la loi de Lenz : le courant induit produit à son tour un champ magnétique qui s'oppose à la variation du champ magnétique.\nIl ne s'oppose pas au champ inducteur lui-même, mais à sa variation : si le flux augmente, le champ induit le combat ; s'il diminue, il le soutient.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p03_q2",
            "type": "mcq",
            "prompt": "La loi de Lenz nous dit que le champ magnétique produit par le courant induit s'oppose :",
            "options": [
              "Au champ magnétique inducteur dans tous les cas",
              "À la variation du champ magnétique",
              "À la variation de la tension d'alimentation",
              "Au déplacement de l'expérimentateur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Réponse 5-b de l'exercice 2 : nuance essentielle, l'opposition porte sur la variation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Approcher un pôle nord : la bobine le repousse",
          "stepTheme": "Approcher un pôle nord : la bobine le repousse",
          "stepBadge": "Approcher un pôle nord : la bobine le repousse",
          "paragraphText": "On approche le pôle nord d'un aimant d'une bobine : le flux entrant augmente.\nPar la loi de Lenz, le courant induit crée un champ qui s'y oppose : la face de la bobine tournée vers l'aimant devient un pôle nord, qui repousse l'aimant.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p03_q3",
            "type": "mcq",
            "prompt": "On approche le pôle nord d'un aimant d'une bobine fermée : la face de la bobine la plus proche devient :",
            "options": [
              "Un pôle sud, qui attire l'aimant",
              "Neutre",
              "Un pôle nord, qui repousse l'aimant (opposition à l'approche)",
              "Un pôle nord seulement si l'aimant est lent"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Application directe de la loi de Lenz, dans l'esprit de l'activité d'application du §3.1."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La loi de Faraday : e = −dΦ/dt",
          "stepTheme": "La loi de Faraday : e = −dΦ/dt",
          "stepBadge": "La loi de Faraday : e = −dΦ/dt",
          "paragraphText": "• Loi de Faraday : tout circuit électrique soumis à une variation de flux magnétique est le siège d'une force électromotrice induite e = −dΦ/dt.\nPlus le flux varie vite, plus la f.é.m. est grande ; son signe dépend de l'orientation choisie.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p03_q4",
            "type": "mcq",
            "prompt": "La f.é.m. induite dans un circuit soumis à une variation de flux est donnée par :",
            "options": [
              "$e = -d\\phi/dt$",
              "$e = \\phi \\times t$",
              "$e = -\\phi/t^2$",
              "$e = R \\times \\phi$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la loi de Faraday du §3.2 ; le signe moins traduit la loi de Lenz."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'activité : e = 0,2 V",
          "stepTheme": "L'activité : e = 0,2 V",
          "stepBadge": "L'activité : e = 0,2 V",
          "paragraphText": "La bobine de 100 spires voit le champ passer linéairement de 0,04 T à 0 en un dixième de seconde.\nLa solution calcule une f.é.m. constante e = 0,2 V pendant la variation, puis nulle dès que le champ cesse de varier.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p03_q5",
            "type": "mcq",
            "prompt": "La f.é.m. induite dans la bobine de l'activité (100 spires, B de 0,04 T à 0 en 0,1 s) vaut :",
            "options": [
              "0,02 V",
              "0,2 V",
              "2 V",
              "0 V dès le départ"
            ],
            "correctAnswerIndex": 1,
            "explanation": "e = −N·S·(ΔB/Δt) donne 0,2 V dans la solution de l'activité."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "La méthode de résolution des problèmes d'induction",
          "stepTheme": "La méthode de résolution des problèmes d'induction",
          "stepBadge": "La méthode de résolution des problèmes d'induction",
          "paragraphText": "Le résumé donne la méthode : pour résoudre un problème de courants induits, on oriente arbitrairement le circuit.\nCette orientation donne le sens du vecteur surface S⃗ et détermine le signe du flux, donc celui de e.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p03_q6",
            "type": "mcq",
            "prompt": "La première étape pour traiter un problème d'induction par la loi de Faraday est :",
            "options": [
              "De mesurer le courant",
              "D'orienter arbitrairement le circuit, ce qui fixe S⃗ et le signe du flux",
              "De fermer l'interrupteur",
              "De choisir la résistance"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la « méthode de résolution » imprimée après l'activité du §4.4."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l09_induction_p03_q1",
          "type": "mcq",
          "prompt": "D'après la loi de Lenz, le courant induit a un sens tel que, par ses effets, il :",
          "options": [
            "S'oppose à la cause qui lui donne naissance",
            "Renforce toujours le champ inducteur",
            "Suit toujours le sens du courant inducteur",
            "S'oppose à la résistance du circuit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'énoncé du §3.1 du résumé."
        },
        {
          "id": "terminale_c_physique_l09_induction_p03_q2",
          "type": "mcq",
          "prompt": "La loi de Lenz nous dit que le champ magnétique produit par le courant induit s'oppose :",
          "options": [
            "Au champ magnétique inducteur dans tous les cas",
            "À la variation du champ magnétique",
            "À la variation de la tension d'alimentation",
            "Au déplacement de l'expérimentateur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Réponse 5-b de l'exercice 2 : nuance essentielle, l'opposition porte sur la variation."
        },
        {
          "id": "terminale_c_physique_l09_induction_p03_q3",
          "type": "mcq",
          "prompt": "On approche le pôle nord d'un aimant d'une bobine fermée : la face de la bobine la plus proche devient :",
          "options": [
            "Un pôle sud, qui attire l'aimant",
            "Neutre",
            "Un pôle nord, qui repousse l'aimant (opposition à l'approche)",
            "Un pôle nord seulement si l'aimant est lent"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Application directe de la loi de Lenz, dans l'esprit de l'activité d'application du §3.1."
        },
        {
          "id": "terminale_c_physique_l09_induction_p03_q4",
          "type": "mcq",
          "prompt": "La f.é.m. induite dans un circuit soumis à une variation de flux est donnée par :",
          "options": [
            "$e = -d\\phi/dt$",
            "$e = \\phi \\times t$",
            "$e = -\\phi/t^2$",
            "$e = R \\times \\phi$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la loi de Faraday du §3.2 ; le signe moins traduit la loi de Lenz."
        },
        {
          "id": "terminale_c_physique_l09_induction_p03_q5",
          "type": "mcq",
          "prompt": "La f.é.m. induite dans la bobine de l'activité (100 spires, B de 0,04 T à 0 en 0,1 s) vaut :",
          "options": [
            "0,02 V",
            "0,2 V",
            "2 V",
            "0 V dès le départ"
          ],
          "correctAnswerIndex": 1,
          "explanation": "e = −N·S·(ΔB/Δt) donne 0,2 V dans la solution de l'activité."
        },
        {
          "id": "terminale_c_physique_l09_induction_p03_q6",
          "type": "mcq",
          "prompt": "La première étape pour traiter un problème d'induction par la loi de Faraday est :",
          "options": [
            "De mesurer le courant",
            "D'orienter arbitrairement le circuit, ce qui fixe S⃗ et le signe du flux",
            "De fermer l'interrupteur",
            "De choisir la résistance"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la « méthode de résolution » imprimée après l'activité du §4.4."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l09_induction_p04",
      "order": 4,
      "title": "Courant induit, quantité d'électricité et circuit ouvert",
      "summary": "i = e/(R + r) dans un circuit fermé ; à circuit ouvert, la f.é.m. existe sans courant ; la quantité d'électricité induite ne dépend que de ΔΦ et de la résistance totale.",
      "conceptExplanation": "Si le circuit induit est fermé sur une résistance R (et possède une résistance interne r), la loi des mailles donne l'intensité du courant induit i = e/(R + r).\nLa quantité d'électricité induite lors d'une variation de flux de Φi à Φf s'en déduit par intégration : Q = −(Φf − Φi)/(R + r) ; elle ne dépend ni de la durée ni de la rapidité de la variation.\nSi le circuit est ouvert, il n'y a pas de courant induit, mais la f.é.m. existe toujours : la tension aux bornes du circuit ouvert vaut u = −e.\nLe sens se lit sur le signe de e : si e > 0, le courant induit circule dans le sens positif choisi ; si e < 0, dans le sens opposé — comme aux rails de l'exercice 3, où la tige mobile donne e = B·ℓ·v = 2,5 V et i = 2,5 A.",
      "keyRule": "Circuit fermé : i = e/(R+r) ; circuit ouvert : e seule, mesurable comme une tension ; Q = −ΔΦ/(R+r).",
      "formulas": [
        {
          "name": "Intensité du courant induit",
          "formula": "i = \\frac{e}{R + r}",
          "note": "R résistance de charge, r résistance interne du circuit induit."
        },
        {
          "name": "Quantité d'électricité induite",
          "formula": "Q = -\\frac{\\phi_f - \\phi_i}{R + r}",
          "note": "Indépendante de la durée de la variation de flux."
        }
      ],
      "workedExample": {
        "title": "La tige mobile sur rails (exercice 3)",
        "statement": "Une tige de longueur ℓ = 25 cm se déplace à v = 10 m/s sur des rails dans un champ B = 1 T perpendiculaire au plan ; le circuit totalise R + r = 1 Ω. Calcule la f.é.m. et le courant induit.",
        "methodSteps": [
          "La surface du circuit croît : le flux varie, avec une f.é.m. e = B·ℓ·v = 2,5 V.",
          "Le courant induit vaut i = e/(R + r) = 2,5 A.",
          "Par la loi de Lenz, ce courant crée une force de Laplace qui s'oppose au déplacement de la tige."
        ],
        "conclusion": "Ce sont les résultats de la question 3 du corrigé de l'exercice 3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'intensité du courant induit",
          "stepTheme": "L'intensité du courant induit",
          "stepBadge": "L'intensité du courant induit",
          "paragraphText": "Le circuit induit se comporte comme un générateur de f.é.m. e et de résistance interne r, fermé sur R.\nLa loi des mailles donne alors i = e/(R + r) : la loi de Faraday fournit e, la loi d'Ohm fournit i.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p04_q1",
            "type": "mcq",
            "prompt": "L'intensité du courant induit dans un circuit de résistance totale (R + r) est :",
            "options": [
              "$i = e/(R + r)$",
              "$i = e \\times (R + r)$",
              "$i = (R + r)/e$",
              "$i = e - R$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le résultat du §4.1, obtenu par la loi des mailles."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "À circuit ouvert : la f.é.m. sans le courant",
          "stepTheme": "À circuit ouvert : la f.é.m. sans le courant",
          "stepBadge": "À circuit ouvert : la f.é.m. sans le courant",
          "paragraphText": "Le résumé le souligne : si le circuit est ouvert, il n'y a pas de courant induit, mais la f.é.m. existe toujours.\nOn la mesure alors comme une tension aux bornes du circuit ouvert : u = −e, ce qu'exploite l'exercice 5 avec un oscillographe.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p04_q2",
            "type": "mcq",
            "prompt": "Un circuit ouvert, soumis à une variation de flux :",
            "options": [
              "N'a ni f.é.m. ni courant",
              "A un courant induit mais pas de f.é.m.",
              "A une f.é.m. induite mesurable comme tension, mais aucun courant",
              "Court-circuite le champ magnétique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la remarque du §4.4.2 : la f.é.m. d'induction existe indépendamment de la fermeture du circuit."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La quantité d'électricité induite",
          "stepTheme": "La quantité d'électricité induite",
          "stepBadge": "La quantité d'électricité induite",
          "paragraphText": "En intégrant i = dq/dt pendant la variation du flux, on obtient Q = −(Φf − Φi)/(R + r).\nRésultat remarquable : Q ne dépend que de la variation totale de flux et de la résistance, pas de la vitesse de la variation.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p04_q3",
            "type": "mcq",
            "prompt": "La quantité d'électricité induite lors d'une variation de flux donnée dépend :",
            "options": [
              "De la durée de la variation",
              "De la vitesse de déplacement de l'aimant",
              "De la variation totale de flux et de la résistance totale du circuit",
              "De la masse de la bobine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la formule du §4.3 : Q = −ΔΦ/(R + r), sans aucune durée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le signe de e donne le sens du courant",
          "stepTheme": "Le signe de e donne le sens du courant",
          "stepBadge": "Le signe de e donne le sens du courant",
          "paragraphText": "Une fois le circuit orienté, la loi de Faraday donne à la fois le sens et l'intensité du courant induit.\nSi e > 0, le courant circule dans le sens positif choisi ; si e < 0, il circule dans le sens opposé.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p04_q4",
            "type": "mcq",
            "prompt": "Si le calcul de Faraday donne e < 0, le courant induit circule :",
            "options": [
              "Dans le sens positif choisi",
              "Dans le sens opposé au sens positif choisi",
              "Il n'y a pas de courant",
              "Perpendiculairement au circuit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la règle de lecture du §4.4.2 du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les rails de l'exercice 3 : e = 2,5 V et i = 2,5 A",
          "stepTheme": "Les rails de l'exercice 3 : e = 2,5 V et i = 2,5 A",
          "stepBadge": "Les rails de l'exercice 3 : e = 2,5 V et i = 2,5 A",
          "paragraphText": "La tige de 25 cm avance à 10 m/s dans un champ de 1 T : la surface balayée fait croître le flux régulièrement.\nLe corrigé obtient une f.é.m. constante e = B·ℓ·v = 2,5 V et, la résistance totale valant 1 Ω, un courant i = 2,5 A.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p04_q5",
            "type": "mcq",
            "prompt": "La f.é.m. induite aux rails de l'exercice 3 (B = 1 T ; ℓ = 25 cm ; v = 10 m/s) vaut :",
            "options": [
              "0,25 V",
              "25 V",
              "2,5 V",
              "1 V"
            ],
            "correctAnswerIndex": 2,
            "explanation": "e = B·ℓ·v : c'est le résultat du corrigé, avec i = 2,5 A pour une résistance totale de 1 Ω."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le courant induit freine la cause : la force de Laplace",
          "stepTheme": "Le courant induit freine la cause : la force de Laplace",
          "stepBadge": "Le courant induit freine la cause : la force de Laplace",
          "paragraphText": "Sur les rails, le courant induit qui traverse la tige dans le champ B la soumet à une force de Laplace.\nLe corrigé de l'exercice 3 montre, par Lenz, que cette force est dirigée en sens inverse du déplacement : l'induction freine mécaniquement la tige.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p04_q6",
            "type": "mcq",
            "prompt": "La force de Laplace exercée sur la tige mobile de l'exercice 3 est dirigée :",
            "options": [
              "Dans le sens du déplacement",
              "En sens opposé au déplacement (elle s'oppose à la cause)",
              "Verticalement",
              "Elle est nulle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la justification alternative du corrigé : Lenz exige que les effets du courant induit s'opposent au mouvement qui le crée."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l09_induction_p04_q1",
          "type": "mcq",
          "prompt": "L'intensité du courant induit dans un circuit de résistance totale (R + r) est :",
          "options": [
            "$i = e/(R + r)$",
            "$i = e \\times (R + r)$",
            "$i = (R + r)/e$",
            "$i = e - R$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le résultat du §4.1, obtenu par la loi des mailles."
        },
        {
          "id": "terminale_c_physique_l09_induction_p04_q2",
          "type": "mcq",
          "prompt": "Un circuit ouvert, soumis à une variation de flux :",
          "options": [
            "N'a ni f.é.m. ni courant",
            "A un courant induit mais pas de f.é.m.",
            "A une f.é.m. induite mesurable comme tension, mais aucun courant",
            "Court-circuite le champ magnétique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la remarque du §4.4.2 : la f.é.m. d'induction existe indépendamment de la fermeture du circuit."
        },
        {
          "id": "terminale_c_physique_l09_induction_p04_q3",
          "type": "mcq",
          "prompt": "La quantité d'électricité induite lors d'une variation de flux donnée dépend :",
          "options": [
            "De la durée de la variation",
            "De la vitesse de déplacement de l'aimant",
            "De la variation totale de flux et de la résistance totale du circuit",
            "De la masse de la bobine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la formule du §4.3 : Q = −ΔΦ/(R + r), sans aucune durée."
        },
        {
          "id": "terminale_c_physique_l09_induction_p04_q4",
          "type": "mcq",
          "prompt": "Si le calcul de Faraday donne e < 0, le courant induit circule :",
          "options": [
            "Dans le sens positif choisi",
            "Dans le sens opposé au sens positif choisi",
            "Il n'y a pas de courant",
            "Perpendiculairement au circuit"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la règle de lecture du §4.4.2 du résumé."
        },
        {
          "id": "terminale_c_physique_l09_induction_p04_q5",
          "type": "mcq",
          "prompt": "La f.é.m. induite aux rails de l'exercice 3 (B = 1 T ; ℓ = 25 cm ; v = 10 m/s) vaut :",
          "options": [
            "0,25 V",
            "25 V",
            "2,5 V",
            "1 V"
          ],
          "correctAnswerIndex": 2,
          "explanation": "e = B·ℓ·v : c'est le résultat du corrigé, avec i = 2,5 A pour une résistance totale de 1 Ω."
        },
        {
          "id": "terminale_c_physique_l09_induction_p04_q6",
          "type": "mcq",
          "prompt": "La force de Laplace exercée sur la tige mobile de l'exercice 3 est dirigée :",
          "options": [
            "Dans le sens du déplacement",
            "En sens opposé au déplacement (elle s'oppose à la cause)",
            "Verticalement",
            "Elle est nulle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la justification alternative du corrigé : Lenz exige que les effets du courant induit s'opposent au mouvement qui le crée."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l09_induction_p05",
      "order": 5,
      "title": "Application 1 : le transformateur",
      "summary": "Deux bobines sur un circuit magnétique : U₂/U₁ = N₂/N₁ ; il ne fonctionne qu'en courant alternatif — abaisseur, élévateur ou d'isolement selon le rapport.",
      "conceptExplanation": "Un transformateur est constitué de deux bobines placées face à face sur un circuit magnétique.\nL'une est branchée à une source alternative : c'est le circuit primaire, l'inducteur ; les variations du flux qu'il crée donnent naissance, dans l'autre bobine — le secondaire, ou induit — à une f.é.m. induite alternative.\nLe résumé insiste : les transformateurs ne fonctionnent pas en courant continu, car un flux constant n'induit rien.\nLe rapport de transformation est k = U₂/U₁ = N₂/N₁ : si k < 1 le transformateur est abaisseur de tension, si k > 1 il est élévateur, et si k = 1 c'est un transformateur d'isolement ; pour un transformateur parfait, le rapport des courants est inverse, comme dans l'activité (U₁ = 220 V, U₂ = 24 V : k = 0,109, N₂ = 109 spires pour N₁ = 1000, et I₂ = 4,58 A pour I₁ = 0,5 A).",
      "keyRule": "Transformateur : k = N₂/N₁ = U₂/U₁ = I₁/I₂ (parfait) ; courant alternatif obligatoire.",
      "formulas": [
        {
          "name": "Rapport de transformation",
          "formula": "\\frac{U_2}{U_1} = \\frac{N_2}{N_1} = k",
          "note": "k < 1 abaisseur ; k > 1 élévateur ; k = 1 isolement."
        }
      ],
      "workedExample": {
        "title": "L'activité : le transformateur 220 V / 24 V",
        "statement": "Les tensions efficaces d'un transformateur parfait sont U₁ = 220 V et U₂ = 24 V ; le primaire compte 1000 spires et est parcouru par I₁ = 0,5 A. Détermine k, N₂ et I₂.",
        "methodSteps": [
          "Le rapport de transformation vaut k = U₂/U₁ = 0,109 : le transformateur est abaisseur.",
          "Le nombre de spires du secondaire est N₂ = k·N₁ = 109 spires.",
          "Pour un transformateur parfait, I₂ = I₁/k = 4,58 A : la tension baisse, le courant augmente."
        ],
        "conclusion": "Ce sont les trois résultats du corrigé de l'activité du §5.1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La constitution du transformateur",
          "stepTheme": "La constitution du transformateur",
          "stepBadge": "La constitution du transformateur",
          "paragraphText": "Un transformateur comporte deux bobines sans contact électrique, placées face à face sur un même circuit magnétique.\nLe circuit magnétique canalise le flux du primaire vers le secondaire.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p05_q1",
            "type": "mcq",
            "prompt": "Un transformateur est constitué :",
            "options": [
              "D'un aimant et d'une bobine",
              "De deux bobines placées face à face sur un circuit magnétique",
              "D'une seule bobine et d'un condensateur",
              "De deux piles en série"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la description du §5.1.1 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Primaire inducteur, secondaire induit",
          "stepTheme": "Primaire inducteur, secondaire induit",
          "stepBadge": "Primaire inducteur, secondaire induit",
          "paragraphText": "La bobine branchée à la source alternative est le circuit primaire : elle joue le rôle d'inducteur.\nL'autre bobine, où naît la f.é.m. induite, est le secondaire, c'est-à-dire l'induit du dispositif.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p05_q2",
            "type": "mcq",
            "prompt": "Dans un transformateur, le circuit primaire est :",
            "options": [
              "L'induit",
              "La charge",
              "L'inducteur, branché à la source alternative",
              "Toujours la bobine qui a le plus de spires"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la correspondance du §5.1.1 : primaire = inducteur, secondaire = induit."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Pas de fonctionnement en courant continu",
          "stepTheme": "Pas de fonctionnement en courant continu",
          "stepBadge": "Pas de fonctionnement en courant continu",
          "paragraphText": "Piège : alimenté en courant continu, le primaire crée un flux constant.\nSans variation de flux, aucune f.é.m. n'est induite au secondaire : le résumé affirme que les transformateurs ne fonctionnent pas en courant continu.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p05_q3",
            "type": "mcq",
            "prompt": "Un transformateur alimenté en courant continu :",
            "options": [
              "Fonctionne normalement",
              "Double la tension",
              "Ne délivre aucune tension au secondaire, car le flux est constant",
              "Fonctionne seulement à vide"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'induction qui exige la variation : remarque explicite du §5.1.1."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le rapport de transformation",
          "stepTheme": "Le rapport de transformation",
          "stepBadge": "Le rapport de transformation",
          "paragraphText": "Les tensions efficaces sont dans le même rapport que les nombres de spires : U₂/U₁ = N₂/N₁.\nL'exemple du résumé le vérifie : 3 V et 6 V correspondent à 33 et 66 spires, rapport 0,5 dans les deux cas.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p05_q4",
            "type": "mcq",
            "prompt": "Le rapport de transformation d'un transformateur est :",
            "options": [
              "k = U₁/U₂",
              "k = N₁ × N₂",
              "k = U₂ × U₁",
              "k = U₂/U₁ = N₂/N₁"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la relation du §5.1.2 du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Abaisseur, élévateur, isolement",
          "stepTheme": "Abaisseur, élévateur, isolement",
          "stepBadge": "Abaisseur, élévateur, isolement",
          "paragraphText": "Si N₂/N₁ < 1, alors U₂ < U₁ : le transformateur est abaisseur de tension.\nSi le rapport dépasse 1, il est élévateur ; s'il vaut exactement 1, c'est un transformateur d'isolement.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p05_q5",
            "type": "mcq",
            "prompt": "Un transformateur dont le secondaire a moins de spires que le primaire est :",
            "options": [
              "Abaisseur de tension",
              "Élévateur de tension",
              "D'isolement",
              "En panne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "k = N₂/N₁ < 1 implique U₂ < U₁ : ce sont les remarques du §5.1.2."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'activité : k = 0,109 et I₂ = 4,58 A",
          "stepTheme": "L'activité : k = 0,109 et I₂ = 4,58 A",
          "stepBadge": "L'activité : k = 0,109 et I₂ = 4,58 A",
          "paragraphText": "Pour U₁ = 220 V et U₂ = 24 V, le rapport vaut k = 0,109 et le secondaire compte 109 spires pour 1000 au primaire.\nLe corrigé donne aussi le courant secondaire : I₂ = 4,58 A pour I₁ = 0,5 A, car le rapport des courants est l'inverse de celui des tensions.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p05_q6",
            "type": "mcq",
            "prompt": "Dans l'activité du transformateur parfait (k = 0,109 ; I₁ = 0,5 A), le courant secondaire vaut :",
            "options": [
              "0,5 A",
              "4,58 A",
              "0,055 A",
              "0,109 A"
            ],
            "correctAnswerIndex": 1,
            "explanation": "I₂ = I₁/k : abaisser la tension d'un facteur 9 environ augmente le courant du même facteur (corrigé de l'activité)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l09_induction_p05_q1",
          "type": "mcq",
          "prompt": "Un transformateur est constitué :",
          "options": [
            "D'un aimant et d'une bobine",
            "De deux bobines placées face à face sur un circuit magnétique",
            "D'une seule bobine et d'un condensateur",
            "De deux piles en série"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la description du §5.1.1 du résumé."
        },
        {
          "id": "terminale_c_physique_l09_induction_p05_q2",
          "type": "mcq",
          "prompt": "Dans un transformateur, le circuit primaire est :",
          "options": [
            "L'induit",
            "La charge",
            "L'inducteur, branché à la source alternative",
            "Toujours la bobine qui a le plus de spires"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la correspondance du §5.1.1 : primaire = inducteur, secondaire = induit."
        },
        {
          "id": "terminale_c_physique_l09_induction_p05_q3",
          "type": "mcq",
          "prompt": "Un transformateur alimenté en courant continu :",
          "options": [
            "Fonctionne normalement",
            "Double la tension",
            "Ne délivre aucune tension au secondaire, car le flux est constant",
            "Fonctionne seulement à vide"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'induction qui exige la variation : remarque explicite du §5.1.1."
        },
        {
          "id": "terminale_c_physique_l09_induction_p05_q4",
          "type": "mcq",
          "prompt": "Le rapport de transformation d'un transformateur est :",
          "options": [
            "k = U₁/U₂",
            "k = N₁ × N₂",
            "k = U₂ × U₁",
            "k = U₂/U₁ = N₂/N₁"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la relation du §5.1.2 du résumé."
        },
        {
          "id": "terminale_c_physique_l09_induction_p05_q5",
          "type": "mcq",
          "prompt": "Un transformateur dont le secondaire a moins de spires que le primaire est :",
          "options": [
            "Abaisseur de tension",
            "Élévateur de tension",
            "D'isolement",
            "En panne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "k = N₂/N₁ < 1 implique U₂ < U₁ : ce sont les remarques du §5.1.2."
        },
        {
          "id": "terminale_c_physique_l09_induction_p05_q6",
          "type": "mcq",
          "prompt": "Dans l'activité du transformateur parfait (k = 0,109 ; I₁ = 0,5 A), le courant secondaire vaut :",
          "options": [
            "0,5 A",
            "4,58 A",
            "0,055 A",
            "0,109 A"
          ],
          "correctAnswerIndex": 1,
          "explanation": "I₂ = I₁/k : abaisser la tension d'un facteur 9 environ augmente le courant du même facteur (corrigé de l'activité)."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l09_induction_p06",
      "order": 6,
      "title": "Alternateur, autres applications et enroulements couplés",
      "summary": "L'alternateur convertit l'énergie mécanique en f.é.m. alternative sinusoïdale ; deux enroulements couplés transforment un courant triangulaire en créneaux de f.é.m. de ±6 mV.",
      "conceptExplanation": "Les alternateurs produisent des tensions alternatives en convertissant l'énergie mécanique en énergie électrique : un aimant tournant devant une bobine y fait naître une f.é.m. induite.\nAvec θ = ω·t, le flux s'écrit Φ = N·B·S·cos(ωt) et la f.é.m. obtenue est une tension alternative sinusoïdale, d'amplitude N·B·S·ω ; dans l'industrie, l'aimant est remplacé par des électroaimants (le rotor) et l'induit fixe (le stator) regroupe plusieurs bobines en série — c'est aussi le principe de la génératrice de bicyclette de la situation d'apprentissage.\nLe microphone électrodynamique fait le chemin inverse du haut-parleur : sa bobine, solidaire de la membrane et placée dans le champ d'un aimant, traduit chaque mouvement mécanique en tension électrique.\nEnfin, dans la situation d'évaluation, un courant triangulaire (±50 mA en 5 ms) dans un enroulement de 200 spires induit dans le second enroulement (100 spires) une f.é.m. en créneaux : −6 mV quand le courant croît, 0 quand il est constant, +6 mV quand il décroît.",
      "keyRule": "Alternateur : rotation ⇒ flux en cos(ωt) ⇒ f.é.m. sinusoïdale ; couplage : e₂ = −k·di₁/dt, créneaux pour un courant triangulaire.",
      "formulas": [
        {
          "name": "Flux et f.é.m. d'un alternateur",
          "formula": "\\phi = N B S \\cos(\\omega t) \\Rightarrow e \\text{ sinusoïdale d'amplitude } N B S \\omega",
          "note": "θ = ωt pour une rotation uniforme (§6)."
        },
        {
          "name": "f.é.m. entre enroulements couplés",
          "formula": "e_2 = -k \\frac{d i_1}{dt} \\quad ; \\quad k = \\mu_0 \\frac{\\pi N_1 N_2}{l} r^2",
          "note": "Forme obtenue dans la situation d'évaluation (k = 1,2 × 10⁻⁴)."
        }
      ],
      "workedExample": {
        "title": "La situation d'évaluation : les créneaux de e₂",
        "statement": "Un solénoïde porte deux enroulements entrelacés (N₁ = 200, N₂ = 100 spires, r = 2,5 cm, l = 41,2 cm). Le courant i₁ varie en triangle entre −50 mA et +50 mA sur 5 ms. Détermine la f.é.m. induite e₂ sur chaque intervalle.",
        "methodSteps": [
          "Le champ du premier enroulement est B₁ = μ₀·(N₁/l)·i₁, et le flux à travers le second Φ = N₂·B₁·π·r², proportionnel à i₁.",
          "La constante de proportionnalité vaut k = 1,2 × 10⁻⁴ : e₂ = −k·(di₁/dt).",
          "Pente +50 A/s sur [0 ; 2 ms] : e₂ = −6 mV ; pente nulle sur ]2 ; 3 ms[ : e₂ = 0 ; pente −50 A/s sur ]3 ; 5 ms] : e₂ = +6 mV."
        ],
        "conclusion": "Ce sont les résultats de la question 2 de la situation d'évaluation, repris à l'identique dans l'exercice 4."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'alternateur : convertir le mécanique en électrique",
          "stepTheme": "L'alternateur : convertir le mécanique en électrique",
          "stepBadge": "L'alternateur : convertir le mécanique en électrique",
          "paragraphText": "• Alternateur : machine qui produit des tensions alternatives en convertissant l'énergie mécanique en énergie électrique.\nLa rotation d'un aimant devant une bobine y fait apparaître une f.é.m. induite : la bobine devient génératrice de courant.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p06_q1",
            "type": "mcq",
            "prompt": "Un alternateur sert à :",
            "options": [
              "Produire des tensions alternatives en convertissant l'énergie mécanique en énergie électrique",
              "Convertir l'énergie électrique en mouvement uniquement",
              "Stocker le courant continu",
              "Mesurer un champ magnétique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §5.2, reprise au §6 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Rotor et stator dans l'industrie",
          "stepTheme": "Rotor et stator dans l'industrie",
          "stepBadge": "Rotor et stator dans l'industrie",
          "paragraphText": "Dans la production industrielle, l'aimant tournant est remplacé par plusieurs électroaimants : c'est le rotor.\nL'induit, fixe, est le stator : il est constitué de plusieurs bobines montées en série.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p06_q2",
            "type": "mcq",
            "prompt": "Dans un alternateur industriel, le rotor est constitué :",
            "options": [
              "De bobines fixes",
              "D'électroaimants tournants, l'induit fixe formant le stator",
              "D'un aimant permanent fixe",
              "D'un circuit magnétique immobile"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la description du §5.2 : rotor = électroaimants mobiles, stator = induit fixe."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La f.é.m. de l'alternateur est sinusoïdale",
          "stepTheme": "La f.é.m. de l'alternateur est sinusoïdale",
          "stepBadge": "La f.é.m. de l'alternateur est sinusoïdale",
          "paragraphText": "Avec une rotation uniforme, l'angle vaut θ = ω·t et le flux s'écrit Φ = N·B·S·cos(ωt).\nLa loi de Faraday donne alors une tension alternative sinusoïdale, dont l'amplitude N·B·S·ω croît avec la vitesse de rotation.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p06_q3",
            "type": "mcq",
            "prompt": "La f.é.m. produite par un alternateur en rotation uniforme est :",
            "options": [
              "Continue et constante",
              "En créneaux",
              "Alternative sinusoïdale, d'amplitude N·B·S·ω",
              "Nulle une fois le régime établi"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la conclusion du §6 : e = −dΦ/dt appliquée à Φ = NBS·cos(ωt)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le microphone électrodynamique : l'inverse du haut-parleur",
          "stepTheme": "Le microphone électrodynamique : l'inverse du haut-parleur",
          "stepBadge": "Le microphone électrodynamique : l'inverse du haut-parleur",
          "paragraphText": "Le microphone électrodynamique utilise une bobine de cuivre solidaire de la membrane, placée dans le champ d'un aimant.\nChaque mouvement mécanique de la membrane est traduit en tension électrique par induction : robuste, il est utilisé sur scène.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p06_q4",
            "type": "mcq",
            "prompt": "Dans un microphone électrodynamique à bobine mobile, l'induction sert à :",
            "options": [
              "Produire le son",
              "Amplifier le courant du haut-parleur",
              "Chauffer la membrane",
              "Traduire chaque mouvement mécanique de la membrane en tension électrique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le principe du §5.4 : la bobine mobile dans le champ de l'aimant génère la tension du signal."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La situation : e₂ en créneaux de ±6 mV",
          "stepTheme": "La situation : e₂ en créneaux de ±6 mV",
          "stepBadge": "La situation : e₂ en créneaux de ±6 mV",
          "paragraphText": "Le courant i₁ triangulaire a une dérivée constante par morceaux : la f.é.m. induite est donc constante par morceaux.\nLa solution obtient e₂ = −6 mV pendant la croissance de i₁, 0 pendant son palier, et +6 mV pendant sa décroissance.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p06_q5",
            "type": "mcq",
            "prompt": "Quand le courant i₁ est constant (palier entre 2 et 3 ms), la f.é.m. induite e₂ dans le second enroulement vaut :",
            "options": [
              "0 V, car le flux ne varie pas",
              "−6 mV",
              "+6 mV",
              "Elle double"
            ],
            "correctAnswerIndex": 0,
            "explanation": "di₁/dt = 0 implique e₂ = 0 : c'est le résultat du deuxième intervalle de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La tête de lecture d'un disque dur (documentation)",
          "stepTheme": "La tête de lecture d'un disque dur (documentation)",
          "stepBadge": "La tête de lecture d'un disque dur (documentation)",
          "paragraphText": "La documentation décrit la tête de lecture inductive des disques durs : un électroaimant devant lequel défilent les zones magnétiques du disque.\nLorsqu'une zone magnétique passe à proximité, un courant électrique se forme dans le bobinage, d'autant plus intense que le champ créé est fort : c'est encore l'induction.",
          "exercise": {
            "id": "terminale_c_physique_l09_induction_p06_q6",
            "type": "mcq",
            "prompt": "Dans une tête de lecture inductive de disque dur, le signal lu naît :",
            "options": [
              "D'un courant induit dans le bobinage quand une zone magnétique passe à proximité",
              "D'un faisceau laser",
              "D'une pression mécanique",
              "D'un champ électrique constant"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le fonctionnement décrit dans la documentation qui clôt le résumé."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l09_induction_p06_q1",
          "type": "mcq",
          "prompt": "Un alternateur sert à :",
          "options": [
            "Produire des tensions alternatives en convertissant l'énergie mécanique en énergie électrique",
            "Convertir l'énergie électrique en mouvement uniquement",
            "Stocker le courant continu",
            "Mesurer un champ magnétique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §5.2, reprise au §6 du résumé."
        },
        {
          "id": "terminale_c_physique_l09_induction_p06_q2",
          "type": "mcq",
          "prompt": "Dans un alternateur industriel, le rotor est constitué :",
          "options": [
            "De bobines fixes",
            "D'électroaimants tournants, l'induit fixe formant le stator",
            "D'un aimant permanent fixe",
            "D'un circuit magnétique immobile"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la description du §5.2 : rotor = électroaimants mobiles, stator = induit fixe."
        },
        {
          "id": "terminale_c_physique_l09_induction_p06_q3",
          "type": "mcq",
          "prompt": "La f.é.m. produite par un alternateur en rotation uniforme est :",
          "options": [
            "Continue et constante",
            "En créneaux",
            "Alternative sinusoïdale, d'amplitude N·B·S·ω",
            "Nulle une fois le régime établi"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la conclusion du §6 : e = −dΦ/dt appliquée à Φ = NBS·cos(ωt)."
        },
        {
          "id": "terminale_c_physique_l09_induction_p06_q4",
          "type": "mcq",
          "prompt": "Dans un microphone électrodynamique à bobine mobile, l'induction sert à :",
          "options": [
            "Produire le son",
            "Amplifier le courant du haut-parleur",
            "Chauffer la membrane",
            "Traduire chaque mouvement mécanique de la membrane en tension électrique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le principe du §5.4 : la bobine mobile dans le champ de l'aimant génère la tension du signal."
        },
        {
          "id": "terminale_c_physique_l09_induction_p06_q5",
          "type": "mcq",
          "prompt": "Quand le courant i₁ est constant (palier entre 2 et 3 ms), la f.é.m. induite e₂ dans le second enroulement vaut :",
          "options": [
            "0 V, car le flux ne varie pas",
            "−6 mV",
            "+6 mV",
            "Elle double"
          ],
          "correctAnswerIndex": 0,
          "explanation": "di₁/dt = 0 implique e₂ = 0 : c'est le résultat du deuxième intervalle de la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l09_induction_p06_q6",
          "type": "mcq",
          "prompt": "Dans une tête de lecture inductive de disque dur, le signal lu naît :",
          "options": [
            "D'un courant induit dans le bobinage quand une zone magnétique passe à proximité",
            "D'un faisceau laser",
            "D'une pression mécanique",
            "D'un champ électrique constant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le fonctionnement décrit dans la documentation qui clôt le résumé."
        }
      ]
    }
  ]
};
