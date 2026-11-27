import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Énergie mécanique » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Énergie mécanique » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const PHYSIQUE_1ERE_CD_L09_ENERGIE_MECANIQUE: CurriculumChapter = {
  "id": "premiere_c_physique_l09_energie_mecanique",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 9,
  "title": "Leçon 9 : Énergie mécanique",
  "summary": "L’énergie mécanique d’un système est la somme de son énergie cinétique et de son énergie potentielle. Elle se conserve en l’absence de frottements, et sa variation égale le travail des forces de frottement quand ils existent.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Énergie mécanique » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_physique_l09_energie_mecanique_p01",
      "order": 1,
      "title": "Étude énergétique de la chute libre",
      "summary": "L’expérience de chute libre montre que, pendant la chute, l’énergie cinétique augmente, l’énergie potentielle diminue, et leur somme reste constante.",
      "conceptExplanation": "Le dispositif expérimental du document comprend un appareil à chute libre, une horloge électronique, un électroaimant, une alimentation continue de 6 V et une bille en acier de masse m = 2 g.\nOn enregistre, à intervalles de temps égaux de 20 ms, les positions successives de la bille en chute libre sans vitesse initiale, et on détermine pour chaque position les énergies cinétique et potentielle de pesanteur, la dernière position étant prise comme position de référence (g = 9,8 N/kg).\nLe tableau d’exploitation montre que l’énergie cinétique croît de 0 à $2{,}46 \\times 10^{-3}$ J pendant que l’énergie potentielle décroît de $3{,}11 \\times 10^{-3}$ J à 0.\nConclusion du document : au cours d’une chute libre, la somme des énergies cinétique et potentielle de pesanteur d’un solide demeure constante.",
      "keyRule": "En chute libre : $E_c + E_p$ reste constante, l’énergie potentielle se transforme en énergie cinétique.",
      "formulas": [
        {
          "name": "Somme observée en chute libre",
          "formula": "E_c + E_p = \\text{constante}",
          "note": "Dans l’expérience, cette somme vaut environ $3{,}11 \\times 10^{-3}$ J à chaque position."
        }
      ],
      "workedExample": {
        "title": "Les deux extrémités du tableau de chute libre",
        "statement": "Dans l’expérience du document (bille de 2 g, g = 9,8 N/kg), relève l’énergie cinétique et l’énergie potentielle à la position initiale $A_0$ puis à l’avant-dernière position $A_8$, et vérifie leur somme.",
        "methodSteps": [
          "En $A_0$ : la bille est lâchée sans vitesse, donc $E_c = 0$ et $E_p = 3{,}11 \\times 10^{-3}$ J ; la somme vaut $3{,}11 \\times 10^{-3}$ J.",
          "En $A_8$ : $E_c = 2{,}46 \\times 10^{-3}$ J et $E_p = 0{,}65 \\times 10^{-3}$ J.",
          "Somme en $A_8$ : $2{,}46 \\times 10^{-3} + 0{,}65 \\times 10^{-3} = 3{,}11 \\times 10^{-3}$ J, la même qu’en $A_0$."
        ],
        "conclusion": "Les deux sommes sont égales : pendant la chute, la perte d’énergie potentielle compense exactement le gain d’énergie cinétique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le dispositif de chute libre",
          "stepTheme": "Le dispositif de chute libre",
          "stepBadge": "Le dispositif de chute libre",
          "paragraphText": "• Dispositif expérimental : appareil à chute libre, horloge électronique, électroaimant, alimentation continue de 6 V et bille en acier de masse 2 g.\nLes positions successives de la bille sont enregistrées à intervalles de temps égaux de 20 ms.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p01_q1",
            "type": "mcq",
            "prompt": "Dans l’expérience du document, la bille en chute libre a une masse de :",
            "options": [
              "2 g",
              "20 g",
              "200 g",
              "2 kg"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le document précise une bille en acier de masse m = 2 g, soit 0,002 kg."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’énergie cinétique augmente pendant la chute",
          "stepTheme": "L’énergie cinétique augmente pendant la chute",
          "stepBadge": "L’énergie cinétique augmente pendant la chute",
          "paragraphText": "Le tableau d’exploitation donne des vitesses croissantes au fil des positions, de 0 à environ 1,57 m/s.\nL’énergie cinétique croît donc elle aussi, de 0 à $2{,}46 \\times 10^{-3}$ J.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p01_q2",
            "type": "mcq",
            "prompt": "Pendant la chute libre de la bille, son énergie cinétique :",
            "options": [
              "Diminue",
              "Augmente",
              "Reste constante",
              "Devient négative"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La vitesse augmente pendant la chute, donc $E_c$ augmente : le tableau passe de 0 à $2{,}46 \\times 10^{-3}$ J."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’énergie potentielle diminue pendant la chute",
          "stepTheme": "L’énergie potentielle diminue pendant la chute",
          "stepBadge": "L’énergie potentielle diminue pendant la chute",
          "paragraphText": "La dernière position $A_9$ est prise comme position de référence des énergies potentielles.\nAu départ, l’énergie potentielle vaut $3{,}11 \\times 10^{-3}$ J ; elle diminue ensuite régulièrement jusqu’à s’annuler en $A_9$.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p01_q3",
            "type": "mcq",
            "prompt": "Dans l’expérience, la position prise comme référence des énergies potentielles est :",
            "options": [
              "La position initiale $A_0$",
              "La position médiane $A_5$",
              "La dernière position $A_9$",
              "Le sol de la salle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le document indique que la position $A_9$ est prise comme position de référence : $E_p$ y vaut 0."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La somme reste constante",
          "stepTheme": "La somme reste constante",
          "stepBadge": "La somme reste constante",
          "paragraphText": "À chaque position du tableau, la somme des deux énergies donne la même valeur, aux arrondis près.\nElle vaut environ $3{,}11 \\times 10^{-3}$ J de la première à la dernière position mesurée.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p01_q4",
            "type": "mcq",
            "prompt": "La somme $E_c + E_p$ au cours de la chute libre vaut, à chaque position, environ :",
            "options": [
              "0 J",
              "$1{,}5 \\times 10^{-3}$ J",
              "$6{,}2 \\times 10^{-3}$ J",
              "$3{,}11 \\times 10^{-3}$ J"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la ligne « $E_c + E_p$ » du tableau d’exploitation : environ $3{,}11 \\times 10^{-3}$ J partout."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un échange entre les deux énergies",
          "stepTheme": "Un échange entre les deux énergies",
          "stepBadge": "Un échange entre les deux énergies",
          "paragraphText": "À la position $A_8$, le tableau donne une énergie cinétique de $2{,}46 \\times 10^{-3}$ J et une énergie potentielle de $0{,}65 \\times 10^{-3}$ J.\nLeur somme redonne la valeur constante, ce qui illustre la transformation progressive de l’énergie potentielle en énergie cinétique.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p01_q5",
            "type": "mcq",
            "prompt": "À la position $A_8$, l’énergie potentielle de la bille vaut :",
            "options": [
              "$0{,}65 \\times 10^{-3}$ J",
              "$3{,}11 \\times 10^{-3}$ J",
              "$2{,}46 \\times 10^{-3}$ J",
              "0 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la valeur de la ligne $E_p$ du tableau en $A_8$ ; $2{,}46 \\times 10^{-3}$ J est son énergie cinétique à cette position."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : ce n’est pas chaque énergie qui se conserve",
          "stepTheme": "Piège : ce n’est pas chaque énergie qui se conserve",
          "stepBadge": "Piège : ce n’est pas chaque énergie qui se conserve",
          "paragraphText": "La conclusion du document porte sur la somme, pas sur chaque énergie séparément.\nPendant la chute, l’énergie cinétique et l’énergie potentielle varient toutes les deux, en sens opposés : seule leur somme demeure constante.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p01_q6",
            "type": "mcq",
            "prompt": "Au cours d’une chute libre, la grandeur qui demeure constante est :",
            "options": [
              "L’énergie cinétique seule",
              "La somme des énergies cinétique et potentielle de pesanteur",
              "L’énergie potentielle seule",
              "La vitesse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la conclusion du §1.3 du document : $E_c + E_p$ égale une constante."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p01_q1",
          "type": "mcq",
          "prompt": "Dans l’expérience du document, la bille en chute libre a une masse de :",
          "options": [
            "2 g",
            "20 g",
            "200 g",
            "2 kg"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le document précise une bille en acier de masse m = 2 g, soit 0,002 kg."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p01_q2",
          "type": "mcq",
          "prompt": "Pendant la chute libre de la bille, son énergie cinétique :",
          "options": [
            "Diminue",
            "Augmente",
            "Reste constante",
            "Devient négative"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La vitesse augmente pendant la chute, donc $E_c$ augmente : le tableau passe de 0 à $2{,}46 \\times 10^{-3}$ J."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p01_q3",
          "type": "mcq",
          "prompt": "Dans l’expérience, la position prise comme référence des énergies potentielles est :",
          "options": [
            "La position initiale $A_0$",
            "La position médiane $A_5$",
            "La dernière position $A_9$",
            "Le sol de la salle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le document indique que la position $A_9$ est prise comme position de référence : $E_p$ y vaut 0."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p01_q4",
          "type": "mcq",
          "prompt": "La somme $E_c + E_p$ au cours de la chute libre vaut, à chaque position, environ :",
          "options": [
            "0 J",
            "$1{,}5 \\times 10^{-3}$ J",
            "$6{,}2 \\times 10^{-3}$ J",
            "$3{,}11 \\times 10^{-3}$ J"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la ligne « $E_c + E_p$ » du tableau d’exploitation : environ $3{,}11 \\times 10^{-3}$ J partout."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p01_q5",
          "type": "mcq",
          "prompt": "À la position $A_8$, l’énergie potentielle de la bille vaut :",
          "options": [
            "$0{,}65 \\times 10^{-3}$ J",
            "$3{,}11 \\times 10^{-3}$ J",
            "$2{,}46 \\times 10^{-3}$ J",
            "0 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la valeur de la ligne $E_p$ du tableau en $A_8$ ; $2{,}46 \\times 10^{-3}$ J est son énergie cinétique à cette position."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p01_q6",
          "type": "mcq",
          "prompt": "Au cours d’une chute libre, la grandeur qui demeure constante est :",
          "options": [
            "L’énergie cinétique seule",
            "La somme des énergies cinétique et potentielle de pesanteur",
            "L’énergie potentielle seule",
            "La vitesse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la conclusion du §1.3 du document : $E_c + E_p$ égale une constante."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l09_energie_mecanique_p02",
      "order": 2,
      "title": "Définition de l’énergie mécanique",
      "summary": "L’énergie mécanique d’un système est la somme de son énergie cinétique et de son énergie potentielle : $E_m = E_c + E_p$, en joules.",
      "conceptExplanation": "L’énergie mécanique d’un système est égale à la somme de son énergie cinétique et de son énergie potentielle : $E_m = E_c + E_p$ ; elle s’exprime en joules (J).\nLa situation d’apprentissage la présente comme le « capital énergétique » du solide.\nDeux remarques du document donnent ses formes utiles : pour un solide de masse m, situé à une altitude z dans le champ de pesanteur et en translation avec une vitesse v, on a $E_m = \\frac{1}{2} m v^2 + m g z$.\nPour un solide en translation horizontale accroché à un ressort d’allongement x, on a $E_m = \\frac{1}{2} m v^2 + \\frac{1}{2} k x^2$.",
      "keyRule": "$E_m = E_c + E_p$ : pour calculer l’énergie mécanique, évaluer chaque énergie à la même position et au même instant.",
      "formulas": [
        {
          "name": "Énergie mécanique",
          "formula": "E_m = E_c + E_p",
          "note": "Elle s’exprime en joules (J)."
        },
        {
          "name": "Cas du champ de pesanteur",
          "formula": "E_m = \\frac{1}{2} m v^2 + m g z",
          "note": "Solide en translation à l’altitude z avec la vitesse v."
        },
        {
          "name": "Cas du ressort",
          "formula": "E_m = \\frac{1}{2} m v^2 + \\frac{1}{2} k x^2",
          "note": "Solide en translation horizontale accroché à un ressort d’allongement x."
        }
      ],
      "workedExample": {
        "title": "Le solide sur le plan incliné (activité d’application)",
        "statement": "Un solide de masse m = 200 g, considéré comme ponctuel, descend un plan incliné. À l’altitude $h_1 = 4$ m, il atteint la vitesse $v_1 = 1{,}25$ m/s ; le sol est la position de référence et g = 10 N/kg. Calcule son énergie cinétique, son énergie potentielle de pesanteur et son énergie mécanique à cette hauteur.",
        "methodSteps": [
          "Énergie cinétique : $E_c = \\frac{1}{2} \\times 0{,}2 \\times (1{,}25)^2 \\approx 0{,}16$ J.",
          "Énergie potentielle : $E_p = m g h_1 = 0{,}2 \\times 10 \\times 4 = 8$ J.",
          "Énergie mécanique : $E_m = E_c + E_p = 0{,}16 + 8 = 8{,}16$ J."
        ],
        "conclusion": "L’énergie mécanique du solide à la hauteur $h_1$ vaut 8,16 J : c’est la solution de l’activité du document."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La somme des deux énergies",
          "stepTheme": "La somme des deux énergies",
          "stepBadge": "La somme des deux énergies",
          "paragraphText": "• Énergie mécanique : somme de l’énergie cinétique et de l’énergie potentielle d’un système, $E_m = E_c + E_p$.\nLa situation d’apprentissage la décrit comme le capital énergétique du corps en mouvement.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p02_q1",
            "type": "mcq",
            "prompt": "L’énergie mécanique d’un système est égale :",
            "options": [
              "À la somme de son énergie cinétique et de son énergie potentielle",
              "À la différence entre son énergie cinétique et son énergie potentielle",
              "Au produit de ses deux énergies",
              "À son énergie cinétique seule"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition du §2 du document : $E_m = E_c + E_p$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’unité de l’énergie mécanique",
          "stepTheme": "L’unité de l’énergie mécanique",
          "stepBadge": "L’unité de l’énergie mécanique",
          "paragraphText": "Comme les deux énergies qu’elle additionne, l’énergie mécanique s’exprime en joules.\nLe document le précise juste après la définition : $E_m$ s’exprime en joule (J).",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p02_q2",
            "type": "mcq",
            "prompt": "L’énergie mécanique s’exprime en :",
            "options": [
              "Newtons (N)",
              "Watts (W)",
              "Joules (J)",
              "Mètres par seconde (m/s)"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le document indique que $E_m$ s’exprime en joule (J), comme $E_c$ et $E_p$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La forme dans le champ de pesanteur",
          "stepTheme": "La forme dans le champ de pesanteur",
          "stepBadge": "La forme dans le champ de pesanteur",
          "paragraphText": "Première remarque du document : pour un solide de masse m à l’altitude z, en translation avec la vitesse v, l’énergie mécanique combine les deux expressions connues.\nOn a $E_m = \\frac{1}{2} m v^2 + m g z$.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p02_q3",
            "type": "mcq",
            "prompt": "Pour un solide en translation à l’altitude z avec la vitesse v, l’énergie mécanique vaut :",
            "options": [
              "$E_m = \\frac{1}{2} m v^2 - m g z$",
              "$E_m = m v^2 + m g z$",
              "$E_m = \\frac{1}{2} m v + m g z$",
              "$E_m = \\frac{1}{2} m v^2 + m g z$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la première remarque du §2 : somme de l’énergie cinétique de translation et de l’énergie potentielle de pesanteur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La forme avec un ressort",
          "stepTheme": "La forme avec un ressort",
          "stepBadge": "La forme avec un ressort",
          "paragraphText": "Seconde remarque du document : pour un solide en translation horizontale accroché à un ressort d’allongement x, l’énergie potentielle est élastique.\nOn a alors $E_m = \\frac{1}{2} m v^2 + \\frac{1}{2} k x^2$.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p02_q4",
            "type": "mcq",
            "prompt": "Pour un solide accroché à un ressort d’allongement x, l’énergie mécanique vaut :",
            "options": [
              "$E_m = \\frac{1}{2} m v^2 + \\frac{1}{2} k x^2$",
              "$E_m = \\frac{1}{2} m v^2 + m g x$",
              "$E_m = k x^2 + m v^2$",
              "$E_m = \\frac{1}{2} k x$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la seconde remarque du §2 : l’énergie potentielle est ici l’énergie potentielle élastique du ressort."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "8,16 J sur le plan incliné",
          "stepTheme": "8,16 J sur le plan incliné",
          "stepBadge": "8,16 J sur le plan incliné",
          "paragraphText": "Dans l’activité d’application, le solide de 200 g à 4 m d’altitude et à 1,25 m/s a une énergie cinétique de $0{,}16$ J et une énergie potentielle de 8 J.\nSon énergie mécanique vaut donc 8,16 J, dominée par l’énergie potentielle.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p02_q5",
            "type": "mcq",
            "prompt": "L’énergie mécanique du solide de l’activité d’application (à 4 m, à 1,25 m/s) vaut :",
            "options": [
              "8 J",
              "$8{,}16$ J",
              "$0{,}16$ J",
              "$7{,}84$ J"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$E_m = 0{,}16 + 8 = 8{,}16$ J : c’est la troisième réponse de la solution de l’activité."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : deux énergies au même instant",
          "stepTheme": "Piège : deux énergies au même instant",
          "stepBadge": "Piège : deux énergies au même instant",
          "paragraphText": "L’énergie cinétique dépend de l’altitude elle-même à travers la vitesse acquise, et l’énergie potentielle dépend de la référence choisie.\nLe calcul de $E_m$ n’a de sens qu’en évaluant les deux énergies pour la même position, au même instant, avec la même référence.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p02_q6",
            "type": "mcq",
            "prompt": "Pour calculer l’énergie mécanique d’un solide à une position donnée, il faut :",
            "options": [
              "Additionner l’énergie cinétique d’un instant et l’énergie potentielle d’un autre instant",
              "Évaluer les deux énergies à la même position, au même instant, avec la même référence",
              "Prendre les valeurs maximales des deux énergies",
              "Négliger l’énergie potentielle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$E_m$ est définie position par position : dans l’activité, les deux énergies sont calculées à la même hauteur $h_1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p02_q1",
          "type": "mcq",
          "prompt": "L’énergie mécanique d’un système est égale :",
          "options": [
            "À la somme de son énergie cinétique et de son énergie potentielle",
            "À la différence entre son énergie cinétique et son énergie potentielle",
            "Au produit de ses deux énergies",
            "À son énergie cinétique seule"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition du §2 du document : $E_m = E_c + E_p$."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p02_q2",
          "type": "mcq",
          "prompt": "L’énergie mécanique s’exprime en :",
          "options": [
            "Newtons (N)",
            "Watts (W)",
            "Joules (J)",
            "Mètres par seconde (m/s)"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le document indique que $E_m$ s’exprime en joule (J), comme $E_c$ et $E_p$."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p02_q3",
          "type": "mcq",
          "prompt": "Pour un solide en translation à l’altitude z avec la vitesse v, l’énergie mécanique vaut :",
          "options": [
            "$E_m = \\frac{1}{2} m v^2 - m g z$",
            "$E_m = m v^2 + m g z$",
            "$E_m = \\frac{1}{2} m v + m g z$",
            "$E_m = \\frac{1}{2} m v^2 + m g z$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la première remarque du §2 : somme de l’énergie cinétique de translation et de l’énergie potentielle de pesanteur."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p02_q4",
          "type": "mcq",
          "prompt": "Pour un solide accroché à un ressort d’allongement x, l’énergie mécanique vaut :",
          "options": [
            "$E_m = \\frac{1}{2} m v^2 + \\frac{1}{2} k x^2$",
            "$E_m = \\frac{1}{2} m v^2 + m g x$",
            "$E_m = k x^2 + m v^2$",
            "$E_m = \\frac{1}{2} k x$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la seconde remarque du §2 : l’énergie potentielle est ici l’énergie potentielle élastique du ressort."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p02_q5",
          "type": "mcq",
          "prompt": "L’énergie mécanique du solide de l’activité d’application (à 4 m, à 1,25 m/s) vaut :",
          "options": [
            "8 J",
            "$8{,}16$ J",
            "$0{,}16$ J",
            "$7{,}84$ J"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$E_m = 0{,}16 + 8 = 8{,}16$ J : c’est la troisième réponse de la solution de l’activité."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p02_q6",
          "type": "mcq",
          "prompt": "Pour calculer l’énergie mécanique d’un solide à une position donnée, il faut :",
          "options": [
            "Additionner l’énergie cinétique d’un instant et l’énergie potentielle d’un autre instant",
            "Évaluer les deux énergies à la même position, au même instant, avec la même référence",
            "Prendre les valeurs maximales des deux énergies",
            "Négliger l’énergie potentielle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$E_m$ est définie position par position : dans l’activité, les deux énergies sont calculées à la même hauteur $h_1$."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l09_energie_mecanique_p03",
      "order": 3,
      "title": "Conservation de l’énergie mécanique",
      "summary": "En chute libre ou sur un plan incliné sans frottements, l’énergie mécanique reste constante : le système est dit conservatif.",
      "conceptExplanation": "Pour un solide en chute libre entre les positions A et B, le théorème de l’énergie cinétique donne $\\Delta E_c = W_{AB}(\\vec{P})$, ce qui se réécrit $E_{cB} + E_{pB} = E_{cA} + E_{pA}$, soit $E_{mB} = E_{mA}$ : au cours de la chute libre, l’énergie mécanique du solide reste constante, elle se conserve.\nLe même résultat s’obtient pour un solide qui glisse sans frottements le long d’une piste inclinée : le bilan des forces comprend le poids et la réaction, dont le travail est nul car elle est perpendiculaire au déplacement, et on aboutit encore à $\\Delta E_m = 0$.\nCondition générale du document : en l’absence de forces de frottement, l’énergie mécanique d’un système se conserve ; le système est dit conservatif, le poids étant une force conservative.",
      "keyRule": "Sans frottements, $\\Delta E_m = 0$ : écrire $E_{mA} = E_{mB}$ entre les deux positions pour trouver l’inconnue.",
      "formulas": [
        {
          "name": "Conservation de l’énergie mécanique",
          "formula": "E_{mB} = E_{mA} \\quad \\text{soit} \\quad \\Delta E_m = 0",
          "note": "Valable en l’absence de forces de frottement."
        },
        {
          "name": "Forme développée entre A et B",
          "formula": "E_{cB} + E_{pB} = E_{cA} + E_{pA}",
          "note": "Obtenue à partir du théorème de l’énergie cinétique et du travail du poids."
        }
      ],
      "workedExample": {
        "title": "Le rocher qui tombe de la falaise (exercice 2)",
        "statement": "Un rocher de masse m = 300 kg se détache d’une falaise, à l’altitude initiale H = 240 m par rapport au niveau de la mer, et tombe en chute libre. Détermine son énergie mécanique initiale, puis son énergie cinétique et sa vitesse à l’altitude correspondant au quart de H.",
        "methodSteps": [
          "Énergie mécanique initiale : lâché sans vitesse, $E_{mi} = m g H = 300 \\times 10 \\times 240 = 720$ kJ.",
          "Le système est conservatif : à l’altitude du quart de H, $E_p = m g \\times \\frac{H}{4} = 180$ kJ.",
          "Donc $E_c = E_{mi} - E_p = 720 - 180 = 540$ kJ.",
          "Vitesse : $\\frac{1}{2} m v^2 = 540 \\times 10^{3}$ J donne v = 60 m/s."
        ],
        "conclusion": "À cette altitude, les trois quarts de l’énergie mécanique initiale sont devenus de l’énergie cinétique : $E_c = 540$ kJ et v = 60 m/s, comme dans la solution de l’exercice 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un système conservatif",
          "stepTheme": "Un système conservatif",
          "stepBadge": "Un système conservatif",
          "paragraphText": "• Système conservatif : système dont l’énergie mécanique se conserve, c’est-à-dire reste constante au cours du mouvement.\nLe document rattache cette propriété à l’absence de forces de frottement et précise que le poids est une force conservative.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p03_q1",
            "type": "mcq",
            "prompt": "Un système est dit conservatif si, au cours du mouvement :",
            "options": [
              "Son énergie cinétique se conserve",
              "Son énergie mécanique se conserve",
              "Son énergie potentielle se conserve",
              "Sa vitesse se conserve"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la proposition 3 de l’exercice 3 du document, dont la bonne réponse est « son énergie mécanique se conserve »."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La démonstration en chute libre",
          "stepTheme": "La démonstration en chute libre",
          "stepBadge": "La démonstration en chute libre",
          "paragraphText": "Entre A et B, le théorème de l’énergie cinétique appliqué à la chute libre donne la variation d’énergie cinétique égale au travail du poids.\nEn remplaçant ce travail par la différence des énergies potentielles, les termes se regroupent en $E_{cB} + E_{pB} = E_{cA} + E_{pA}$.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p03_q2",
            "type": "mcq",
            "prompt": "La conservation de l’énergie mécanique en chute libre s’obtient à partir :",
            "options": [
              "Du théorème de l’énergie cinétique et du lien entre travail du poids et énergie potentielle",
              "De la seule définition de la vitesse",
              "De la loi d’Ohm",
              "De l’équilibre des forces"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la démarche du §3.1 : $\\Delta E_c = W_{AB}(\\vec{P})$ se réécrit $E_{mB} = E_{mA}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le cas du plan incliné sans frottements",
          "stepTheme": "Le cas du plan incliné sans frottements",
          "stepBadge": "Le cas du plan incliné sans frottements",
          "paragraphText": "Sur une piste inclinée sans frottements, le bilan des forces comprend le poids et la réaction de la piste.\nLe travail de la réaction est nul car elle est perpendiculaire au déplacement : la démonstration donne encore $\\Delta E_m = 0$.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p03_q3",
            "type": "mcq",
            "prompt": "Sur le plan incliné sans frottements, le travail de la réaction de la piste est nul car :",
            "options": [
              "La réaction est nulle",
              "La réaction est parallèle au déplacement",
              "La réaction est perpendiculaire au déplacement",
              "Le déplacement est nul"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le §3.2 du document le précise : la réaction, perpendiculaire au déplacement, ne travaille pas."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La condition de conservation",
          "stepTheme": "La condition de conservation",
          "stepBadge": "La condition de conservation",
          "paragraphText": "Le document énonce la condition générale au §3.3.\nEn l’absence de forces de frottement, l’énergie mécanique d’un système se conserve : sa variation est nulle.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p03_q4",
            "type": "mcq",
            "prompt": "L’énergie mécanique d’un système se conserve lorsque :",
            "options": [
              "Le système est immobile",
              "Les forces de frottement sont présentes",
              "La vitesse est constante",
              "Les forces de frottement sont absentes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la condition du §3.3 : en l’absence de frottements, $\\Delta E_m = 0$ et le système est conservatif."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le rocher : 720 kJ au départ",
          "stepTheme": "Le rocher : 720 kJ au départ",
          "stepBadge": "Le rocher : 720 kJ au départ",
          "paragraphText": "L’exercice 2 lâche un rocher de 300 kg depuis une falaise de 240 m, sans vitesse initiale.\nSon énergie mécanique initiale, entièrement potentielle, vaut 720 kJ, et elle gardera cette valeur pendant toute la chute libre.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p03_q5",
            "type": "mcq",
            "prompt": "L’énergie mécanique initiale du rocher de l’exercice 2 vaut :",
            "options": [
              "720 kJ",
              "540 kJ",
              "180 kJ",
              "240 kJ"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_{mi} = m g H = 300 \\times 10 \\times 240 = 720 \\times 10^{3}$ J, soit 720 kJ."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : ce qui se conserve n’est ni $E_c$ ni $E_p$",
          "stepTheme": "Piège : ce qui se conserve n’est ni $E_c$ ni $E_p$",
          "stepBadge": "Piège : ce qui se conserve n’est ni $E_c$ ni $E_p$",
          "paragraphText": "L’exercice 3 demande ce qu’est un système conservatif et écarte deux réponses tentantes.\nCe n’est ni l’énergie cinétique seule, ni l’énergie potentielle seule qui se conserve : pendant une chute, l’une augmente pendant que l’autre diminue.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p03_q6",
            "type": "mcq",
            "prompt": "Dans un système conservatif en chute libre, on peut affirmer que :",
            "options": [
              "L’énergie cinétique reste constante",
              "L’énergie potentielle reste constante",
              "L’énergie mécanique reste constante, $E_c$ et $E_p$ variant en sens opposés",
              "Toutes les énergies restent constantes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé de l’exercice 3 retient la conservation de l’énergie mécanique, pas celle de $E_c$ ou de $E_p$ séparément."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p03_q1",
          "type": "mcq",
          "prompt": "Un système est dit conservatif si, au cours du mouvement :",
          "options": [
            "Son énergie cinétique se conserve",
            "Son énergie mécanique se conserve",
            "Son énergie potentielle se conserve",
            "Sa vitesse se conserve"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la proposition 3 de l’exercice 3 du document, dont la bonne réponse est « son énergie mécanique se conserve »."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p03_q2",
          "type": "mcq",
          "prompt": "La conservation de l’énergie mécanique en chute libre s’obtient à partir :",
          "options": [
            "Du théorème de l’énergie cinétique et du lien entre travail du poids et énergie potentielle",
            "De la seule définition de la vitesse",
            "De la loi d’Ohm",
            "De l’équilibre des forces"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la démarche du §3.1 : $\\Delta E_c = W_{AB}(\\vec{P})$ se réécrit $E_{mB} = E_{mA}$."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p03_q3",
          "type": "mcq",
          "prompt": "Sur le plan incliné sans frottements, le travail de la réaction de la piste est nul car :",
          "options": [
            "La réaction est nulle",
            "La réaction est parallèle au déplacement",
            "La réaction est perpendiculaire au déplacement",
            "Le déplacement est nul"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le §3.2 du document le précise : la réaction, perpendiculaire au déplacement, ne travaille pas."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p03_q4",
          "type": "mcq",
          "prompt": "L’énergie mécanique d’un système se conserve lorsque :",
          "options": [
            "Le système est immobile",
            "Les forces de frottement sont présentes",
            "La vitesse est constante",
            "Les forces de frottement sont absentes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la condition du §3.3 : en l’absence de frottements, $\\Delta E_m = 0$ et le système est conservatif."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p03_q5",
          "type": "mcq",
          "prompt": "L’énergie mécanique initiale du rocher de l’exercice 2 vaut :",
          "options": [
            "720 kJ",
            "540 kJ",
            "180 kJ",
            "240 kJ"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_{mi} = m g H = 300 \\times 10 \\times 240 = 720 \\times 10^{3}$ J, soit 720 kJ."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p03_q6",
          "type": "mcq",
          "prompt": "Dans un système conservatif en chute libre, on peut affirmer que :",
          "options": [
            "L’énergie cinétique reste constante",
            "L’énergie potentielle reste constante",
            "L’énergie mécanique reste constante, $E_c$ et $E_p$ variant en sens opposés",
            "Toutes les énergies restent constantes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé de l’exercice 3 retient la conservation de l’énergie mécanique, pas celle de $E_c$ ou de $E_p$ séparément."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l09_energie_mecanique_p04",
      "order": 4,
      "title": "Non-conservation de l’énergie mécanique",
      "summary": "Lorsqu’il existe des forces de frottement, la variation de l’énergie mécanique égale le travail des frottements : elle est négative et le système, dissipatif, perd de l’énergie.",
      "conceptExplanation": "Le solide de masse m est maintenant soumis, sur le parcours AB d’une piste inclinée, à son poids, à la réaction normale et à des forces de frottement assimilées à une force unique f opposée au mouvement.\nEn appliquant le théorème de l’énergie cinétique entre A et B, et en utilisant $\\Delta E_p = -W_{AB}(\\vec{P})$, on obtient $\\Delta E_c + \\Delta E_p = W_{AB}(\\vec{f})$.\nDonc $\\Delta E_m = W_{AB}(\\vec{f})$ : lorsqu’il existe des forces de frottement, la variation de l’énergie mécanique est non nulle, on parle de non-conservation de l’énergie mécanique.\nRemarque du document : la force f étant opposée au sens du mouvement, son travail est résistant, donc $\\Delta E_m$ est négative : le système perd de l’énergie, il est dit dissipatif, et f est une force non conservative.",
      "keyRule": "Avec frottements : $\\Delta E_m = W_{AB}(\\vec{f})$, un travail résistant donc négatif — l’énergie mécanique diminue.",
      "formulas": [
        {
          "name": "Variation avec frottements",
          "formula": "\\Delta E_m = W_{AB}(\\vec{f})",
          "note": "Travail des forces de frottement entre A et B."
        },
        {
          "name": "Signe de la variation",
          "formula": "\\Delta E_m < 0",
          "note": "La force f est opposée au mouvement : son travail est résistant, le système est dissipatif."
        }
      ],
      "workedExample": {
        "title": "Le cube sur le profil ABCD (situation d’évaluation)",
        "statement": "Un cube de masse m = 1 kg glisse sans frottement sur les plans inclinés AB et CD, mais il est soumis sur la partie horizontale BC (longueur L = 2 m) à une force de frottement d’intensité f = 3,92 N. Il est lâché sans vitesse d’une hauteur $h_1 = 1$ m au-dessus de BC (g = 9,8 N/kg, énergie potentielle nulle sur BC). Détermine son énergie mécanique en C et sa vitesse en C.",
        "methodSteps": [
          "Au départ : $E_{m1} = E_{p1} = m g h_1 = 9{,}8$ J, l’énergie cinétique étant nulle.",
          "Entre A et B, sans frottements, l’énergie mécanique se conserve ; entre B et C, sa variation vaut le travail des frottements : $\\Delta E_m = -f \\times L$.",
          "En C : $E_{m2} = 9{,}8 - 3{,}92 \\times 2 = 1{,}96$ J.",
          "Sur BC, l’énergie potentielle est nulle, donc $E_{m2} = \\frac{1}{2} m v_C^2$ et $v_C = 2$ m/s."
        ],
        "conclusion": "Le cube arrive en C avec une énergie mécanique de 1,96 J et une vitesse de 2 m/s : les frottements lui ont fait perdre 7,84 J."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un système dissipatif",
          "stepTheme": "Un système dissipatif",
          "stepBadge": "Un système dissipatif",
          "paragraphText": "• Système dissipatif : système qui perd de l’énergie mécanique au cours du mouvement, sous l’effet de forces non conservatives comme les frottements.\nC’est le contraire d’un système conservatif, où l’énergie mécanique reste constante.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p04_q1",
            "type": "mcq",
            "prompt": "Un système soumis à des forces de frottement est dit :",
            "options": [
              "Conservatif",
              "Dissipatif, car il perd de l’énergie mécanique",
              "Isolé",
              "En équilibre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document conclut le §4 ainsi : le travail des frottements étant résistant, le système perd de l’énergie et il est dissipatif."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La relation $\\Delta E_m = W_{AB}(\\vec{f})$",
          "stepTheme": "La relation $\\Delta E_m = W_{AB}(\\vec{f})$",
          "stepBadge": "La relation $\\Delta E_m = W_{AB}(\\vec{f})$",
          "paragraphText": "La démonstration part du théorème de l’énergie cinétique entre A et B, avec trois forces : poids, réaction et frottements.\nEn regroupant les termes, la variation d’énergie cinétique plus la variation d’énergie potentielle égalent le travail des frottements, soit la variation d’énergie mécanique.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p04_q2",
            "type": "mcq",
            "prompt": "En présence de frottements entre A et B, la variation de l’énergie mécanique vaut :",
            "options": [
              "$\\Delta E_m = W_{AB}(\\vec{f})$",
              "$\\Delta E_m = 0$",
              "$\\Delta E_m = W_{AB}(\\vec{P})$",
              "$\\Delta E_m = W_{AB}(\\vec{R})$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le résultat du §4 du document, obtenu à partir du théorème de l’énergie cinétique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Un travail résistant, une variation négative",
          "stepTheme": "Un travail résistant, une variation négative",
          "stepBadge": "Un travail résistant, une variation négative",
          "paragraphText": "La remarque du document souligne que la force de frottement f est opposée au sens du mouvement.\nSon travail est donc résistant, c’est-à-dire négatif, et la variation d’énergie mécanique est elle aussi négative.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p04_q3",
            "type": "mcq",
            "prompt": "En présence de frottements, la variation de l’énergie mécanique est :",
            "options": [
              "Positive",
              "Nulle",
              "Négative, car le travail des frottements est résistant",
              "Égale à l’énergie cinétique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le document écrit $\\Delta E_m = W_{AB}(\\vec{f})$ avec un travail résistant : la variation est strictement négative."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le cube perd 7,84 J sur BC",
          "stepTheme": "Le cube perd 7,84 J sur BC",
          "stepBadge": "Le cube perd 7,84 J sur BC",
          "paragraphText": "Dans la situation d’évaluation, le cube part avec une énergie mécanique de 9,8 J et les frottements de 3,92 N agissent sur les 2 m de la partie BC.\nSon énergie mécanique en C ne vaut plus que 1,96 J : il a perdu 7,84 J sur ce trajet.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p04_q4",
            "type": "mcq",
            "prompt": "L’énergie mécanique du cube lorsqu’il arrive en C vaut :",
            "options": [
              "9,8 J",
              "7,84 J",
              "3,92 J",
              "1,96 J"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$E_{m2} = E_{m1} - f \\times L = 9{,}8 - 3{,}92 \\times 2 = 1{,}96$ J, comme dans la résolution du document."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La remontée sur CD s’arrête à 0,2 m",
          "stepTheme": "La remontée sur CD s’arrête à 0,2 m",
          "stepBadge": "La remontée sur CD s’arrête à 0,2 m",
          "paragraphText": "Après C, le cube remonte le plan CD sans frottements : son énergie mécanique de 1,96 J se conserve jusqu’au point d’arrêt.\nLa résolution obtient une hauteur de rebroussement $h_2$ de 0,2 m, bien inférieure à la hauteur de départ de 1 m, à cause des pertes sur BC.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p04_q5",
            "type": "mcq",
            "prompt": "La hauteur à partir de laquelle le cube fait demi-tour le long du plan CD vaut :",
            "options": [
              "0,2 m",
              "0,5 m",
              "1 m",
              "2 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$h_2$ se déduit de $m g h_2 = E_{m2}$ : la résolution du document donne 0,2 m."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : appliquer la conservation malgré les frottements",
          "stepTheme": "Piège : appliquer la conservation malgré les frottements",
          "stepBadge": "Piège : appliquer la conservation malgré les frottements",
          "paragraphText": "Écrire directement $E_{mA} = E_{mB}$ alors que des frottements agissent sur le trajet est l’erreur classique de cette leçon.\nIl faut d’abord repérer les trajets avec frottements et y appliquer la relation avec le travail de f, comme le fait la situation d’évaluation trajet par trajet.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p04_q6",
            "type": "mcq",
            "prompt": "Sur un trajet où agissent des frottements, la bonne relation à écrire est :",
            "options": [
              "$E_{mB} = E_{mA}$",
              "$E_{mB} - E_{mA} = W_{AB}(\\vec{f})$",
              "$E_{cB} = E_{cA}$",
              "$E_{pB} = E_{pA}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la relation du §4 : la variation d’énergie mécanique égale le travail des forces de frottement."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p04_q1",
          "type": "mcq",
          "prompt": "Un système soumis à des forces de frottement est dit :",
          "options": [
            "Conservatif",
            "Dissipatif, car il perd de l’énergie mécanique",
            "Isolé",
            "En équilibre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document conclut le §4 ainsi : le travail des frottements étant résistant, le système perd de l’énergie et il est dissipatif."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p04_q2",
          "type": "mcq",
          "prompt": "En présence de frottements entre A et B, la variation de l’énergie mécanique vaut :",
          "options": [
            "$\\Delta E_m = W_{AB}(\\vec{f})$",
            "$\\Delta E_m = 0$",
            "$\\Delta E_m = W_{AB}(\\vec{P})$",
            "$\\Delta E_m = W_{AB}(\\vec{R})$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le résultat du §4 du document, obtenu à partir du théorème de l’énergie cinétique."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p04_q3",
          "type": "mcq",
          "prompt": "En présence de frottements, la variation de l’énergie mécanique est :",
          "options": [
            "Positive",
            "Nulle",
            "Négative, car le travail des frottements est résistant",
            "Égale à l’énergie cinétique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le document écrit $\\Delta E_m = W_{AB}(\\vec{f})$ avec un travail résistant : la variation est strictement négative."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p04_q4",
          "type": "mcq",
          "prompt": "L’énergie mécanique du cube lorsqu’il arrive en C vaut :",
          "options": [
            "9,8 J",
            "7,84 J",
            "3,92 J",
            "1,96 J"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$E_{m2} = E_{m1} - f \\times L = 9{,}8 - 3{,}92 \\times 2 = 1{,}96$ J, comme dans la résolution du document."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p04_q5",
          "type": "mcq",
          "prompt": "La hauteur à partir de laquelle le cube fait demi-tour le long du plan CD vaut :",
          "options": [
            "0,2 m",
            "0,5 m",
            "1 m",
            "2 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$h_2$ se déduit de $m g h_2 = E_{m2}$ : la résolution du document donne 0,2 m."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p04_q6",
          "type": "mcq",
          "prompt": "Sur un trajet où agissent des frottements, la bonne relation à écrire est :",
          "options": [
            "$E_{mB} = E_{mA}$",
            "$E_{mB} - E_{mA} = W_{AB}(\\vec{f})$",
            "$E_{cB} = E_{cA}$",
            "$E_{pB} = E_{pA}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la relation du §4 : la variation d’énergie mécanique égale le travail des forces de frottement."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l09_energie_mecanique_p05",
      "order": 5,
      "title": "Applications de la conservation de l’énergie mécanique",
      "summary": "La conservation de l’énergie mécanique donne directement une énergie mécanique de lancement, des vitesses sur une piste lisse et la position où l’énergie cinétique est maximale.",
      "conceptExplanation": "L’exercice 1 calcule l’énergie mécanique d’une boule de masse 500 g lancée verticalement à 5 m/s depuis une hauteur de 3 m : avec le sol comme niveau de référence, elle vaut 21,25 J.\nL’exercice 4 étudie une voiturette qui part sans vitesse du point A, à l’altitude 3 m, et glisse sur une piste lisse ABCD : le système est conservatif, donc la conservation de l’énergie mécanique donne la vitesse à la bosse C, à l’altitude 2,7 m, et au creux D, à l’altitude 1 m.\nLe même exercice montre que l’énergie cinétique est maximale là où l’altitude est minimale, et que la voiturette ne peut pas dépasser, au-delà de D, un point F situé à la même altitude que A, soit 3 m.\nL’exercice 3 rappelle au passage que l’énergie potentielle de pesanteur dépend de l’altitude et de la masse, mais pas de la vitesse.",
      "keyRule": "Système conservatif : poser $E_m$ constante, calculer l’énergie au départ, puis l’égalité donne la vitesse ou l’altitude cherchée.",
      "formulas": [
        {
          "name": "Vitesse en un point d’altitude z (départ de A sans vitesse)",
          "formula": "v = \\sqrt{2 g (z_A - z)}",
          "note": "Obtenue en écrivant $E_{mA} = E_m$ en ce point, comme dans l’exercice 4."
        },
        {
          "name": "Énergie mécanique de la boule lancée (exercice 1)",
          "formula": "E_m = \\frac{1}{2} m v^2 + m g h",
          "note": "Avec h l’altitude de lancement et le sol comme référence."
        }
      ],
      "workedExample": {
        "title": "La voiturette sur la piste lisse (exercice 4)",
        "statement": "Une voiturette part de A sans vitesse, à l’altitude $z_A = 3$ m, et glisse sur une piste lisse jusqu’à la bosse C (altitude 2,7 m) puis au creux D (altitude 1 m), les frottements étant négligeables (g = 10 N/kg). Détermine sa vitesse en C et en D.",
        "methodSteps": [
          "Le système est conservatif : $E_{mA} = E_{mC}$, soit $m g z_A = \\frac{1}{2} m v_C^2 + m g z_C$.",
          "En C : $v_C = \\sqrt{2 \\times 10 \\times (3 - 2{,}7)} = 2{,}45$ m/s.",
          "De même en D : $v_D = \\sqrt{2 \\times 10 \\times (3 - 1)} = 6{,}32$ m/s.",
          "L’énergie cinétique est maximale au point le plus bas, en D, et la voiturette ne peut pas dépasser au-delà un point situé à 3 m d’altitude."
        ],
        "conclusion": "La voiturette passe la bosse à 2,45 m/s et le creux à 6,32 m/s : ce sont les résultats de la solution de l’exercice 4."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La méthode de la conservation",
          "stepTheme": "La méthode de la conservation",
          "stepBadge": "La méthode de la conservation",
          "paragraphText": "• Méthode : vérifier que le système est conservatif, calculer son énergie mécanique à la position connue, puis écrire qu’elle garde la même valeur à la position cherchée.\nC’est la démarche utilisée dans tous les exercices de ce point.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p05_q1",
            "type": "mcq",
            "prompt": "Pour appliquer la conservation de l’énergie mécanique, la première vérification à faire est que :",
            "options": [
              "Le système est conservatif (frottements absents ou négligeables)",
              "La vitesse est constante",
              "L’altitude ne change pas",
              "La masse est nulle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans l’exercice 4, la solution commence par constater que les frottements sont négligeables, donc que le système est conservatif."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La boule lancée : 21,25 J",
          "stepTheme": "La boule lancée : 21,25 J",
          "stepBadge": "La boule lancée : 21,25 J",
          "paragraphText": "L’exercice 1 lance une boule de 500 g à 5 m/s depuis une hauteur de 3 m, le sol étant le niveau de référence.\nSon énergie cinétique vaut 6,25 J et son énergie potentielle 15 J, pour une énergie mécanique totale de 21,25 J.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p05_q2",
            "type": "mcq",
            "prompt": "L’énergie mécanique de la boule de l’exercice 1 à l’instant du lancement vaut :",
            "options": [
              "6,25 J",
              "15 J",
              "21,25 J",
              "8,75 J"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$E_m = \\frac{1}{2} \\times 0{,}5 \\times 5^2 + 0{,}5 \\times 10 \\times 3 = 6{,}25 + 15 = 21{,}25$ J."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La bosse C franchie à 2,45 m/s",
          "stepTheme": "La bosse C franchie à 2,45 m/s",
          "stepBadge": "La bosse C franchie à 2,45 m/s",
          "paragraphText": "La voiturette de l’exercice 4 part de 3 m d’altitude et la bosse C est à 2,7 m : elle n’a perdu que 0,3 m d’altitude.\nLa conservation de l’énergie mécanique donne une vitesse modérée en C, de 2,45 m/s.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p05_q3",
            "type": "mcq",
            "prompt": "La vitesse de la voiturette lors de son passage par la bosse C vaut :",
            "options": [
              "$6{,}32$ m/s",
              "$2{,}45$ m/s",
              "$7{,}75$ m/s",
              "$3$ m/s"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$v_C = \\sqrt{2 \\times 10 \\times (3 - 2{,}7)} = \\sqrt{6} \\approx 2{,}45$ m/s, comme dans la solution."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L’énergie cinétique maximale au point le plus bas",
          "stepTheme": "L’énergie cinétique maximale au point le plus bas",
          "stepBadge": "L’énergie cinétique maximale au point le plus bas",
          "paragraphText": "Sur une piste conservatrice, la solution de l’exercice 4 écrit l’énergie cinétique sous la forme $E_c = m g (z_A - z)$.\nElle est donc maximale quand l’altitude z est minimale, c’est-à-dire au creux D de la piste.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p05_q4",
            "type": "mcq",
            "prompt": "Sur la piste de l’exercice 4, l’énergie cinétique de la voiturette est maximale :",
            "options": [
              "Au point de départ A",
              "À la bosse C, la plus haute après A",
              "Au creux D, le point le plus bas",
              "Elle est constante partout"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La solution montre que $E_c$ est maximale pour l’altitude minimale, qui correspond à la position D."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le point F au même niveau que A",
          "stepTheme": "Le point F au même niveau que A",
          "stepBadge": "Le point F au même niveau que A",
          "paragraphText": "Au-delà de D, la voiturette remonte ; au point d’arrêt F, son énergie cinétique serait nulle.\nLa conservation donne alors l’altitude de F égale à celle de A, soit 3 m : la voiturette ne peut pas dépasser un point plus haut que son départ.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p05_q5",
            "type": "mcq",
            "prompt": "L’altitude maximale que la voiturette peut atteindre au-delà de D vaut :",
            "options": [
              "1 m",
              "2,7 m",
              "4 m",
              "3 m, la même que celle du point de départ A"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La solution de l’exercice 4 montre que les points A et F sont au même niveau : $z_F = z_A = 3$ m."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : l’énergie potentielle ne dépend pas de la vitesse",
          "stepTheme": "Piège : l’énergie potentielle ne dépend pas de la vitesse",
          "stepBadge": "Piège : l’énergie potentielle ne dépend pas de la vitesse",
          "paragraphText": "La première proposition de l’exercice 3 demande de quoi dépend l’énergie potentielle de pesanteur d’un corps.\nLe corrigé retient l’altitude — et il est rappelé dans la leçon qu’elle dépend aussi de la masse — mais pas la vitesse, qui ne concerne que l’énergie cinétique.",
          "exercise": {
            "id": "premiere_c_physique_l09_energie_mecanique_p05_q6",
            "type": "mcq",
            "prompt": "L’énergie potentielle de pesanteur d’un corps dépend de son altitude et de sa masse, mais pas :",
            "options": [
              "De sa vitesse",
              "De l’intensité de la pesanteur",
              "De la référence choisie",
              "De sa position"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans l’exercice 3, la proposition sur l’altitude est la bonne ; la vitesse n’intervient que dans $E_c$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p05_q1",
          "type": "mcq",
          "prompt": "Pour appliquer la conservation de l’énergie mécanique, la première vérification à faire est que :",
          "options": [
            "Le système est conservatif (frottements absents ou négligeables)",
            "La vitesse est constante",
            "L’altitude ne change pas",
            "La masse est nulle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans l’exercice 4, la solution commence par constater que les frottements sont négligeables, donc que le système est conservatif."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p05_q2",
          "type": "mcq",
          "prompt": "L’énergie mécanique de la boule de l’exercice 1 à l’instant du lancement vaut :",
          "options": [
            "6,25 J",
            "15 J",
            "21,25 J",
            "8,75 J"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$E_m = \\frac{1}{2} \\times 0{,}5 \\times 5^2 + 0{,}5 \\times 10 \\times 3 = 6{,}25 + 15 = 21{,}25$ J."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p05_q3",
          "type": "mcq",
          "prompt": "La vitesse de la voiturette lors de son passage par la bosse C vaut :",
          "options": [
            "$6{,}32$ m/s",
            "$2{,}45$ m/s",
            "$7{,}75$ m/s",
            "$3$ m/s"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$v_C = \\sqrt{2 \\times 10 \\times (3 - 2{,}7)} = \\sqrt{6} \\approx 2{,}45$ m/s, comme dans la solution."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p05_q4",
          "type": "mcq",
          "prompt": "Sur la piste de l’exercice 4, l’énergie cinétique de la voiturette est maximale :",
          "options": [
            "Au point de départ A",
            "À la bosse C, la plus haute après A",
            "Au creux D, le point le plus bas",
            "Elle est constante partout"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La solution montre que $E_c$ est maximale pour l’altitude minimale, qui correspond à la position D."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p05_q5",
          "type": "mcq",
          "prompt": "L’altitude maximale que la voiturette peut atteindre au-delà de D vaut :",
          "options": [
            "1 m",
            "2,7 m",
            "4 m",
            "3 m, la même que celle du point de départ A"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La solution de l’exercice 4 montre que les points A et F sont au même niveau : $z_F = z_A = 3$ m."
        },
        {
          "id": "premiere_c_physique_l09_energie_mecanique_p05_q6",
          "type": "mcq",
          "prompt": "L’énergie potentielle de pesanteur d’un corps dépend de son altitude et de sa masse, mais pas :",
          "options": [
            "De sa vitesse",
            "De l’intensité de la pesanteur",
            "De la référence choisie",
            "De sa position"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans l’exercice 3, la proposition sur l’altitude est la bonne ; la vitesse n’intervient que dans $E_c$."
        }
      ]
    }
  ]
};
