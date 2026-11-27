import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Les lentilles minces » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Les lentilles minces » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const PHYSIQUE_1ERE_CD_L05_LENTILLES_MINCES: CurriculumChapter = {
  "id": "premiere_c_physique_l05_lentilles_minces",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 5,
  "title": "Leçon 5 : Les lentilles minces",
  "summary": "Les lunettes et verres correcteurs sont des lentilles minces, convergentes ou divergentes, caractérisées par leur centre optique, leurs foyers et leur vergence. La leçon apprend à construire l'image d'un objet en décrivant la marche des rayons particuliers, puis à caractériser cette image par la formule de conjugaison, le grandissement et le théorème des vergences.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Les lentilles minces » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_physique_l05_lentilles_minces_p01",
      "order": 1,
      "title": "Définitions et les deux types de lentilles",
      "summary": "Une lentille mince est un milieu transparent d'épaisseur négligeable ; elle est convergente si ses bords sont minces, divergente si ses bords sont épais.",
      "conceptExplanation": "Une lentille est un milieu transparent limité par deux calottes sphériques, ou par une calotte sphérique et un plan.\nUne lentille est dite mince si son épaisseur est négligeable devant les rayons des calottes sphériques qui la limitent.\nLes lentilles convergentes sont les lentilles minces à bords minces : leur épaisseur est plus grande au centre que sur les bords.\nLes lentilles divergentes sont les lentilles minces à bords épais : leur épaisseur est plus grande à leurs bords qu'à leur centre.\nLa situation d'apprentissage le rappelle : les lunettes (verres correcteurs) sont des lentilles minces.",
      "keyRule": "Épaisseur maximale au centre : lentille convergente ; épaisseur maximale aux bords : lentille divergente.",
      "formulas": [],
      "workedExample": {
        "title": "Reconnaître une lentille à son profil",
        "statement": "On examine au toucher et à l'œil une lentille mince : son centre est nettement plus épais que ses bords. De quel type de lentille s'agit-il, et comment la reconnaît-on sans calcul ?",
        "methodSteps": [
          "On compare l'épaisseur au centre et l'épaisseur sur les bords de la lentille.",
          "Ici, l'épaisseur est plus grande au centre que sur les bords : les bords sont donc minces.",
          "Le résumé attribue les bords minces aux lentilles convergentes."
        ],
        "conclusion": "C'est une lentille convergente : la reconnaissance se fait uniquement sur le profil de la lentille (§2 du résumé)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d'une lentille",
          "stepTheme": "La définition d'une lentille",
          "stepBadge": "La définition d'une lentille",
          "paragraphText": "• Lentille : milieu transparent limité par deux calottes sphériques ou par une calotte sphérique et un plan.\nC'est la géométrie de ses surfaces qui détermine la déviation des rayons lumineux qui la traversent.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p01_q1",
            "type": "mcq",
            "prompt": "Une lentille est un milieu transparent limité par :",
            "options": [
              "Deux plans parallèles uniquement",
              "Deux calottes sphériques, ou une calotte sphérique et un plan",
              "Deux miroirs sphériques",
              "Un prisme triangulaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la première définition du §1 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La lentille mince",
          "stepTheme": "La lentille mince",
          "stepBadge": "La lentille mince",
          "paragraphText": "• Lentille mince : lentille dont l'épaisseur est négligeable devant les rayons des calottes sphériques qui la limitent.\nC'est dans ce modèle simplifié que se placent toutes les propriétés de la leçon.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p01_q2",
            "type": "mcq",
            "prompt": "Une lentille est dite mince si :",
            "options": [
              "Son épaisseur est négligeable devant les rayons des calottes sphériques",
              "Son diamètre est très petit",
              "Elle est nécessairement convergente",
              "Elle ne dévie aucun rayon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §1 du résumé, avec les rayons R1 et R2 des deux calottes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les lentilles convergentes : des bords minces",
          "stepTheme": "Les lentilles convergentes : des bords minces",
          "stepBadge": "Les lentilles convergentes : des bords minces",
          "paragraphText": "Les lentilles convergentes sont les lentilles minces à bords minces.\nLeur épaisseur est plus grande au centre que sur les bords : c'est le critère de reconnaissance donné au §2.1.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p01_q3",
            "type": "mcq",
            "prompt": "Une lentille convergente est une lentille mince :",
            "options": [
              "À bords épais",
              "D'épaisseur uniforme",
              "À bords minces, plus épaisse au centre qu'aux bords",
              "Toujours utilisée en loupe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la description du §2.1 du résumé : les convergentes sont les lentilles à bords minces."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les lentilles divergentes : des bords épais",
          "stepTheme": "Les lentilles divergentes : des bords épais",
          "stepBadge": "Les lentilles divergentes : des bords épais",
          "paragraphText": "Les lentilles divergentes sont les lentilles minces à bords épais.\nLeur épaisseur est plus grande à leurs bords qu'à leur centre : c'est le critère de reconnaissance donné au §2.2.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p01_q4",
            "type": "mcq",
            "prompt": "Une lentille divergente est une lentille mince :",
            "options": [
              "À bords minces",
              "Plus épaisse au centre qu'aux bords",
              "Sans foyer",
              "À bords épais, plus épaisse aux bords qu'au centre"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la description du §2.2 du résumé : les divergentes sont les lentilles à bords épais."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les lunettes : des lentilles minces du quotidien",
          "stepTheme": "Les lunettes : des lentilles minces du quotidien",
          "stepBadge": "Les lunettes : des lentilles minces du quotidien",
          "paragraphText": "La situation d'apprentissage rappelle que les lunettes (verres correcteurs) sont des lentilles minces.\nSelon le défaut de vision à corriger, le verre sera une lentille convergente ou une lentille divergente : la leçon étudie les deux types.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p01_q5",
            "type": "mcq",
            "prompt": "D'après la situation d'apprentissage, les verres correcteurs des lunettes sont :",
            "options": [
              "Des miroirs minces",
              "Des lentilles minces",
              "Des prismes",
              "Des lentilles épaisses par définition"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'exemple de la situation d'apprentissage : les lunettes sont des lentilles minces."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le piège : centre épais ne veut pas dire divergente",
          "stepTheme": "Le piège : centre épais ne veut pas dire divergente",
          "stepBadge": "Le piège : centre épais ne veut pas dire divergente",
          "paragraphText": "Piège fréquent : confondre les deux profils. Il faut retenir l'association complète : centre épais et bords minces pour la convergente, centre mince et bords épais pour la divergente.\nL'exercice 3 de la leçon teste exactement ce point pour une lentille de vergence négative.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p01_q6",
            "type": "mcq",
            "prompt": "Une lentille dont l'épaisseur est plus grande à ses bords qu'à son centre est :",
            "options": [
              "Convergente",
              "Une loupe dans tous les cas",
              "Divergente",
              "Une lentille à capacité variable"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le profil des lentilles divergentes (§2.2), également la réponse c attendue à la question 1 de l'exercice 3."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p01_q1",
          "type": "mcq",
          "prompt": "Une lentille est un milieu transparent limité par :",
          "options": [
            "Deux plans parallèles uniquement",
            "Deux calottes sphériques, ou une calotte sphérique et un plan",
            "Deux miroirs sphériques",
            "Un prisme triangulaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la première définition du §1 du résumé."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p01_q2",
          "type": "mcq",
          "prompt": "Une lentille est dite mince si :",
          "options": [
            "Son épaisseur est négligeable devant les rayons des calottes sphériques",
            "Son diamètre est très petit",
            "Elle est nécessairement convergente",
            "Elle ne dévie aucun rayon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §1 du résumé, avec les rayons R1 et R2 des deux calottes."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p01_q3",
          "type": "mcq",
          "prompt": "Une lentille convergente est une lentille mince :",
          "options": [
            "À bords épais",
            "D'épaisseur uniforme",
            "À bords minces, plus épaisse au centre qu'aux bords",
            "Toujours utilisée en loupe"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la description du §2.1 du résumé : les convergentes sont les lentilles à bords minces."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p01_q4",
          "type": "mcq",
          "prompt": "Une lentille divergente est une lentille mince :",
          "options": [
            "À bords minces",
            "Plus épaisse au centre qu'aux bords",
            "Sans foyer",
            "À bords épais, plus épaisse aux bords qu'au centre"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la description du §2.2 du résumé : les divergentes sont les lentilles à bords épais."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p01_q5",
          "type": "mcq",
          "prompt": "D'après la situation d'apprentissage, les verres correcteurs des lunettes sont :",
          "options": [
            "Des miroirs minces",
            "Des lentilles minces",
            "Des prismes",
            "Des lentilles épaisses par définition"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'exemple de la situation d'apprentissage : les lunettes sont des lentilles minces."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p01_q6",
          "type": "mcq",
          "prompt": "Une lentille dont l'épaisseur est plus grande à ses bords qu'à son centre est :",
          "options": [
            "Convergente",
            "Une loupe dans tous les cas",
            "Divergente",
            "Une lentille à capacité variable"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le profil des lentilles divergentes (§2.2), également la réponse c attendue à la question 1 de l'exercice 3."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l05_lentilles_minces_p02",
      "order": 2,
      "title": "Centre optique et foyers principaux",
      "summary": "Le rayon qui passe par le centre optique n'est pas dévié ; les foyers principaux sont réels pour une convergente et virtuels pour une divergente.",
      "conceptExplanation": "Le centre optique, noté O, d'une lentille mince est le point où l'axe optique principal traverse la lentille. Tout rayon incident passant par le centre optique d'une lentille mince n'est pas dévié.\nPour une lentille convergente, tous les rayons incidents parallèles à l'axe optique principal convergent en un point F' appelé foyer principal image, situé dans le plan focal image ; réciproquement, tout rayon incident passant par le foyer principal objet F émerge parallèlement à l'axe optique. Les foyers objet et image d'une lentille convergente sont réels, et les distances OF et OF' sont égales.\nPour une lentille divergente, les rayons incidents parallèles à l'axe principal divergent en sortant de la lentille, de sorte que leurs directions se coupent, par prolongement, en un point F' ; de même pour le foyer objet F. Les foyers objet et image d'une lentille divergente sont virtuels, et OF = OF'.",
      "keyRule": "Rayon par O : non dévié. Rayon parallèle à l'axe : il passe (ou semble passer) par F'. Rayon par F : il émerge parallèle à l'axe.",
      "formulas": [],
      "workedExample": {
        "title": "Déterminer le foyer image d'une lentille convergente (description)",
        "statement": "On envoie sur une lentille convergente un faisceau de rayons incidents tous parallèles à l'axe optique principal. Décris, en mots, la marche des rayons émergents et où se situe le foyer principal image.",
        "methodSteps": [
          "Chaque rayon du faisceau traverse la lentille et est dévié vers l'axe optique.",
          "Tous les rayons émergents convergent en un même point de l'axe optique, situé de l'autre côté de la lentille.",
          "Ce point de convergence est le foyer principal image F' ; le plan perpendiculaire à l'axe en F' est le plan focal image."
        ],
        "conclusion": "C'est la définition du foyer principal image d'une lentille convergente donnée au §3.2.1 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le centre optique O",
          "stepTheme": "Le centre optique O",
          "stepBadge": "Le centre optique O",
          "paragraphText": "• Centre optique : point O où l'axe optique principal traverse la lentille mince.\nC'est le point de référence pour toutes les distances de la leçon : positions de l'objet, de l'image et des foyers.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p02_q1",
            "type": "mcq",
            "prompt": "Le centre optique d'une lentille mince est le point :",
            "options": [
              "Où l'axe optique principal traverse la lentille",
              "Où convergent tous les rayons parallèles",
              "Situé au bord de la lentille",
              "De rencontre des deux foyers secondaires"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §3.1 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le rayon passant par O n'est pas dévié",
          "stepTheme": "Le rayon passant par O n'est pas dévié",
          "stepBadge": "Le rayon passant par O n'est pas dévié",
          "paragraphText": "Propriété fondamentale du centre optique : tout rayon incident passant par le centre optique d'une lentille mince n'est pas dévié.\nIl traverse donc la lentille en ligne droite : c'est l'un des rayons particuliers utilisés pour construire les images.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p02_q2",
            "type": "mcq",
            "prompt": "Un rayon incident qui passe par le centre optique d'une lentille mince :",
            "options": [
              "Est réfléchi par la lentille",
              "Émerge parallèlement à l'axe dans tous les cas",
              "N'est pas dévié",
              "Passe nécessairement par le foyer objet"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la propriété du §3.1, également l'affirmation vraie n° 1 de l'exercice 1 de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le foyer principal image d'une convergente",
          "stepTheme": "Le foyer principal image d'une convergente",
          "stepBadge": "Le foyer principal image d'une convergente",
          "paragraphText": "Pour une lentille convergente, tous les rayons incidents parallèles à l'axe optique principal convergent en un point F' de l'axe.\nCe point est le foyer principal image ; le plan perpendiculaire à l'axe en F' est le plan focal image.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p02_q3",
            "type": "mcq",
            "prompt": "Les rayons incidents parallèles à l'axe d'une lentille convergente convergent, après la lentille, en :",
            "options": [
              "Le centre optique O",
              "Le foyer principal image F'",
              "Le foyer principal objet F",
              "Aucun point particulier"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du foyer principal image au §3.2.1 du résumé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le foyer principal objet d'une convergente",
          "stepTheme": "Le foyer principal objet d'une convergente",
          "stepBadge": "Le foyer principal objet d'une convergente",
          "paragraphText": "Le foyer principal objet F est le point de l'axe tel que tout rayon incident passant par F émerge parallèlement à l'axe optique.\nLes foyers objet et image d'une lentille convergente sont réels, et le résumé précise que les distances OF et OF' sont égales.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p02_q4",
            "type": "mcq",
            "prompt": "Un rayon incident passant par le foyer principal objet F d'une lentille convergente émerge :",
            "options": [
              "Par le centre optique",
              "Perpendiculairement à l'axe",
              "En repassant par F'",
              "Parallèlement à l'axe optique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la définition du foyer principal objet au §3.2.1, réciproque de celle du foyer image."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les foyers d'une divergente sont virtuels",
          "stepTheme": "Les foyers d'une divergente sont virtuels",
          "stepBadge": "Les foyers d'une divergente sont virtuels",
          "paragraphText": "Pour une lentille divergente, les rayons parallèles à l'axe divergent en sortant de la lentille : ce sont leurs prolongements qui se coupent en F'.\nLe résumé conclut que les foyers objet et image d'une lentille divergente sont virtuels, avec OF = OF'.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p02_q5",
            "type": "mcq",
            "prompt": "Les foyers principaux d'une lentille divergente sont :",
            "options": [
              "Virtuels : les rayons émergents divergent et leurs prolongements s'y coupent",
              "Réels, comme pour une convergente",
              "Confondus avec le centre optique",
              "Infiniment éloignés dans tous les cas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la conclusion du §3.2.2 du résumé sur les lentilles divergentes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Après une divergente, un rayon parallèle semble venir de F'",
          "stepTheme": "Après une divergente, un rayon parallèle semble venir de F'",
          "stepBadge": "Après une divergente, un rayon parallèle semble venir de F'",
          "paragraphText": "Piège de l'exercice 1 : pour une lentille divergente, un rayon parallèle à l'axe ne semble pas provenir du foyer objet, mais du foyer image.\nLes rayons émergents s'écartent comme s'ils venaient de F', situé du même côté que la lumière incidente.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p02_q6",
            "type": "mcq",
            "prompt": "Après traversée d'une lentille divergente, un rayon parallèle à l'axe optique semble provenir :",
            "options": [
              "Du foyer principal objet F",
              "Du centre optique O",
              "Du foyer principal image F'",
              "D'un foyer secondaire quelconque"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les prolongements des rayons émergents se coupent en F' (§3.2.2) : c'est le foyer image, pas le foyer objet."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Le faisceau parallèle sur une lentille divergente (description)",
          "stepTheme": "Le faisceau parallèle sur une lentille divergente (description)",
          "stepBadge": "Le faisceau parallèle sur une lentille divergente (description)",
          "paragraphText": "Exemple décrit au §3.2.2 : un faisceau de rayons parallèles à l'axe principal arrive sur une lentille divergente.\nEn sortant de la lentille, les rayons s'écartent les uns des autres ; en les prolongeant en arrière, du côté de la lumière incidente, on trouve qu'ils semblent tous provenir du foyer principal image F'.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p02_q7",
            "type": "mcq",
            "prompt": "Après la traversée d'une lentille divergente, les rayons d'un faisceau parallèle à l'axe optique :",
            "options": [
              "Convergent réellement en F'",
              "Divergent, et leurs prolongements se coupent en F'",
              "Restent parallèles entre eux",
              "Passent tous par le foyer objet F"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la description du §3.2.2 : le foyer image d'une divergente est virtuel, atteint par les prolongements des rayons émergents."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p02_q1",
          "type": "mcq",
          "prompt": "Le centre optique d'une lentille mince est le point :",
          "options": [
            "Où l'axe optique principal traverse la lentille",
            "Où convergent tous les rayons parallèles",
            "Situé au bord de la lentille",
            "De rencontre des deux foyers secondaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §3.1 du résumé."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p02_q2",
          "type": "mcq",
          "prompt": "Un rayon incident qui passe par le centre optique d'une lentille mince :",
          "options": [
            "Est réfléchi par la lentille",
            "Émerge parallèlement à l'axe dans tous les cas",
            "N'est pas dévié",
            "Passe nécessairement par le foyer objet"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la propriété du §3.1, également l'affirmation vraie n° 1 de l'exercice 1 de la leçon."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p02_q3",
          "type": "mcq",
          "prompt": "Les rayons incidents parallèles à l'axe d'une lentille convergente convergent, après la lentille, en :",
          "options": [
            "Le centre optique O",
            "Le foyer principal image F'",
            "Le foyer principal objet F",
            "Aucun point particulier"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du foyer principal image au §3.2.1 du résumé."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p02_q4",
          "type": "mcq",
          "prompt": "Un rayon incident passant par le foyer principal objet F d'une lentille convergente émerge :",
          "options": [
            "Par le centre optique",
            "Perpendiculairement à l'axe",
            "En repassant par F'",
            "Parallèlement à l'axe optique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la définition du foyer principal objet au §3.2.1, réciproque de celle du foyer image."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p02_q5",
          "type": "mcq",
          "prompt": "Les foyers principaux d'une lentille divergente sont :",
          "options": [
            "Virtuels : les rayons émergents divergent et leurs prolongements s'y coupent",
            "Réels, comme pour une convergente",
            "Confondus avec le centre optique",
            "Infiniment éloignés dans tous les cas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la conclusion du §3.2.2 du résumé sur les lentilles divergentes."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p02_q6",
          "type": "mcq",
          "prompt": "Après traversée d'une lentille divergente, un rayon parallèle à l'axe optique semble provenir :",
          "options": [
            "Du foyer principal objet F",
            "Du centre optique O",
            "Du foyer principal image F'",
            "D'un foyer secondaire quelconque"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les prolongements des rayons émergents se coupent en F' (§3.2.2) : c'est le foyer image, pas le foyer objet."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p02_q7",
          "type": "mcq",
          "prompt": "Après la traversée d'une lentille divergente, les rayons d'un faisceau parallèle à l'axe optique :",
          "options": [
            "Convergent réellement en F'",
            "Divergent, et leurs prolongements se coupent en F'",
            "Restent parallèles entre eux",
            "Passent tous par le foyer objet F"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la description du §3.2.2 : le foyer image d'une divergente est virtuel, atteint par les prolongements des rayons émergents."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l05_lentilles_minces_p03",
      "order": 3,
      "title": "Foyers secondaires, distance focale et vergence",
      "summary": "La distance focale est f = OF = OF' ; la vergence C = 1 divisé par OF' (en dioptries) est positive pour une convergente et négative pour une divergente.",
      "conceptExplanation": "Un foyer secondaire objet est un point du plan focal objet ; un foyer secondaire image est un point du plan focal image.\nPar convention, l'axe principal est orienté dans le sens de la propagation de la lumière.\nLa distance focale f d'une lentille est la distance entre le centre optique O et le foyer principal objet F ou image F' : $f = OF = OF'$ en valeur absolue.\nLa vergence C d'une lentille est donnée par la relation $C = \\frac{1}{\\overline{OF'}}$ ; son unité est la dioptrie, de symbole δ.\nEn tenant compte de la convention d'orientation, $\\overline{OF'}$ est positive pour une lentille convergente et négative pour une lentille divergente : la vergence d'une convergente est donc positive et celle d'une divergente est négative.",
      "keyRule": "Vergence C = 1 divisé par f' (en mètres) : positive pour une convergente, négative pour une divergente, en dioptries.",
      "formulas": [
        {
          "name": "Distance focale",
          "formula": "f = OF = OF'",
          "note": "Distance du centre optique à chaque foyer principal, en mètres."
        },
        {
          "name": "Vergence",
          "formula": "C = \\frac{1}{\\overline{OF'}}",
          "note": "OF' est une distance algébrique en mètres ; C s'exprime en dioptries (δ)."
        }
      ],
      "workedExample": {
        "title": "L'exercice 3 : la vergence d'une lentille de distance focale 20 cm",
        "statement": "Une lentille mince L2 a une distance focale f2 = +20 cm. Calcule sa vergence C2 et précise son type.",
        "methodSteps": [
          "On convertit la distance focale en mètres : f2 = 0,20 m.",
          "La vergence est l'inverse de la distance focale algébrique : C2 = 1 divisé par 0,20, soit 5 δ.",
          "La vergence est positive : L2 est une lentille convergente."
        ],
        "conclusion": "C2 = 5 δ : c'est la réponse b de la question 2 de l'exercice 3 de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les foyers secondaires et les plans focaux",
          "stepTheme": "Les foyers secondaires et les plans focaux",
          "stepBadge": "Les foyers secondaires et les plans focaux",
          "paragraphText": "• Foyer secondaire : point du plan focal autre que le foyer principal.\nLe plan focal objet (respectivement image) est le plan perpendiculaire à l'axe qui passe par le foyer principal objet (respectivement image) ; il contient tous les foyers secondaires correspondants.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p03_q1",
            "type": "mcq",
            "prompt": "Un foyer secondaire image est :",
            "options": [
              "Le centre optique de la lentille",
              "Un point du plan focal image",
              "Le foyer principal objet",
              "Un point situé sur le bord de la lentille"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du §3.2.3 du résumé : les foyers secondaires appartiennent aux plans focaux."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'orientation de l'axe principal",
          "stepTheme": "L'orientation de l'axe principal",
          "stepBadge": "L'orientation de l'axe principal",
          "paragraphText": "Par convention, l'axe principal est orienté dans le sens de la propagation de la lumière.\nC'est cette convention qui donne leurs signes à toutes les distances algébriques de la leçon : $\\overline{OA}$, $\\overline{OA'}$ et $\\overline{OF'}$.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p03_q2",
            "type": "mcq",
            "prompt": "Par convention, l'axe principal d'une lentille est orienté :",
            "options": [
              "Dans le sens de la propagation de la lumière",
              "De la droite vers la gauche dans tous les cas",
              "Verticalement",
              "Dans le sens opposé à la lumière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la convention du §4.1 du résumé, qui fonde toutes les formules algébriques de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La distance focale f",
          "stepTheme": "La distance focale f",
          "stepBadge": "La distance focale f",
          "paragraphText": "• Distance focale : distance entre le centre optique O et le foyer principal objet F ou image F'.\nLes deux foyers sont symétriques par rapport à O, donc $f = OF = OF'$ en valeur absolue.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p03_q3",
            "type": "mcq",
            "prompt": "La distance focale d'une lentille est la distance entre :",
            "options": [
              "Les deux foyers principaux",
              "Le centre optique et un foyer secondaire",
              "Le centre optique O et le foyer principal objet F ou image F'",
              "Le bord de la lentille et son centre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition du §4.2 : f = OF = OF'. La distance entre les deux foyers vaudrait 2f."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La vergence C et la dioptrie",
          "stepTheme": "La vergence C et la dioptrie",
          "stepBadge": "La vergence C et la dioptrie",
          "paragraphText": "• Vergence : inverse de la distance focale image algébrique, $C = \\frac{1}{\\overline{OF'}}$.\nSon unité est la dioptrie, de symbole δ ; la distance focale doit être exprimée en mètres.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p03_q4",
            "type": "mcq",
            "prompt": "L'unité de la vergence d'une lentille est :",
            "options": [
              "Le mètre (m)",
              "La dioptrie (δ)",
              "Le farad (F)",
              "Le watt (W)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le §4.3 du résumé : la vergence s'exprime en dioptries, de symbole δ."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le signe de la vergence",
          "stepTheme": "Le signe de la vergence",
          "stepBadge": "Le signe de la vergence",
          "paragraphText": "Piège : la vergence n'est pas toujours positive ; son signe fait partie de la réponse et distingue les deux types de lentilles.\nAvec la convention d'orientation, $\\overline{OF'}$ est positive pour une lentille convergente, dont le foyer image est réel et situé après la lentille.\nElle est négative pour une lentille divergente : la vergence d'une convergente est donc positive et celle d'une divergente négative.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p03_q5",
            "type": "mcq",
            "prompt": "La vergence d'une lentille divergente est :",
            "options": [
              "Positive",
              "Nulle",
              "Toujours égale à celle d'une convergente",
              "Négative"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la remarque du §4.3 : OF' négative pour une divergente, donc C négative."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La lentille L1 de l'exercice 3 : C1 = −5 δ",
          "stepTheme": "La lentille L1 de l'exercice 3 : C1 = −5 δ",
          "stepBadge": "La lentille L1 de l'exercice 3 : C1 = −5 δ",
          "paragraphText": "Dans l'exercice 3, la lentille L1 a pour vergence C1 = −5 δ.\nLe signe négatif suffit à la classer : c'est une lentille divergente, d'épaisseur plus grande à ses bords qu'à son centre.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p03_q6",
            "type": "mcq",
            "prompt": "La lentille L1 de l'exercice 3, de vergence C1 = −5 δ, est :",
            "options": [
              "Convergente à bords minces",
              "Divergente, d'épaisseur plus grande à ses bords qu'à son centre",
              "Une lentille à capacité variable",
              "Sans foyer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Vergence négative donc lentille divergente : c'est la réponse c de la question 1 de l'exercice 3."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p03_q1",
          "type": "mcq",
          "prompt": "Un foyer secondaire image est :",
          "options": [
            "Le centre optique de la lentille",
            "Un point du plan focal image",
            "Le foyer principal objet",
            "Un point situé sur le bord de la lentille"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du §3.2.3 du résumé : les foyers secondaires appartiennent aux plans focaux."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p03_q2",
          "type": "mcq",
          "prompt": "Par convention, l'axe principal d'une lentille est orienté :",
          "options": [
            "Dans le sens de la propagation de la lumière",
            "De la droite vers la gauche dans tous les cas",
            "Verticalement",
            "Dans le sens opposé à la lumière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la convention du §4.1 du résumé, qui fonde toutes les formules algébriques de la leçon."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p03_q3",
          "type": "mcq",
          "prompt": "La distance focale d'une lentille est la distance entre :",
          "options": [
            "Les deux foyers principaux",
            "Le centre optique et un foyer secondaire",
            "Le centre optique O et le foyer principal objet F ou image F'",
            "Le bord de la lentille et son centre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition du §4.2 : f = OF = OF'. La distance entre les deux foyers vaudrait 2f."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p03_q4",
          "type": "mcq",
          "prompt": "L'unité de la vergence d'une lentille est :",
          "options": [
            "Le mètre (m)",
            "La dioptrie (δ)",
            "Le farad (F)",
            "Le watt (W)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le §4.3 du résumé : la vergence s'exprime en dioptries, de symbole δ."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p03_q5",
          "type": "mcq",
          "prompt": "La vergence d'une lentille divergente est :",
          "options": [
            "Positive",
            "Nulle",
            "Toujours égale à celle d'une convergente",
            "Négative"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la remarque du §4.3 : OF' négative pour une divergente, donc C négative."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p03_q6",
          "type": "mcq",
          "prompt": "La lentille L1 de l'exercice 3, de vergence C1 = −5 δ, est :",
          "options": [
            "Convergente à bords minces",
            "Divergente, d'épaisseur plus grande à ses bords qu'à son centre",
            "Une lentille à capacité variable",
            "Sans foyer"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Vergence négative donc lentille divergente : c'est la réponse c de la question 1 de l'exercice 3."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l05_lentilles_minces_p04",
      "order": 4,
      "title": "Construction de l'image d'un objet (description des constructions)",
      "summary": "L'image d'un point est l'intersection des rayons émergents ou de leurs prolongements ; deux rayons particuliers suffisent pour la construire.",
      "conceptExplanation": "L'image d'un objet est la somme des images de chacun des points de l'objet.\nL'image d'un point objet est le point d'intersection des rayons émergents ou de leurs supports (prolongements).\nPour tracer les rayons émergents, il suffit d'utiliser les propriétés des foyers principaux et du centre optique : le rayon passant par O n'est pas dévié, le rayon parallèle à l'axe passe par F' (ou semble en provenir), et le rayon passant par F émerge parallèlement à l'axe.\nPremier exemple du résumé, le principe de l'appareil photo : l'objet réel donne une image réelle, qui peut être recueillie sur un écran (la pellicule), et renversée.\nDeuxième exemple, le principe de la loupe : l'image est virtuelle, car elle ne peut pas être recueillie sur un écran, et non renversée.\nTroisième exemple, le principe de la lunette de myope : la lentille divergente donne de l'objet réel une image virtuelle.",
      "keyRule": "Construction : deux rayons particuliers issus de B suffisent ; si les émergents se coupent, l'image est réelle, si ce sont leurs prolongements, elle est virtuelle.",
      "formulas": [],
      "workedExample": {
        "title": "Construire l'image dans le cas de l'appareil photo (description)",
        "statement": "Un objet réel AB, perpendiculaire à l'axe optique avec A sur l'axe, est placé devant une lentille convergente, au-delà du foyer objet. Décris en mots la construction de son image A'B' et ses caractéristiques.",
        "methodSteps": [
          "Du point B, on trace le rayon qui passe par le centre optique O : il traverse la lentille sans être dévié.",
          "On trace aussi le rayon issu de B parallèle à l'axe : après la lentille, il passe par le foyer principal image F'.",
          "Les deux rayons émergents se coupent réellement en un point B', image de B ; on projette B' perpendiculairement sur l'axe en A'.",
          "L'image A'B' est réelle (elle peut être recueillie sur la pellicule) et renversée par rapport à l'objet."
        ],
        "conclusion": "Ce sont les caractéristiques du premier exemple du résumé, le principe de l'appareil photo."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'image d'un point objet",
          "stepTheme": "L'image d'un point objet",
          "stepBadge": "L'image d'un point objet",
          "paragraphText": "• Image d'un point objet : point d'intersection des rayons émergents ou de leurs supports.\nEt l'image d'un objet entier est la somme des images de chacun de ses points : il suffit donc de savoir imager un point, en pratique le point B hors de l'axe.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p04_q1",
            "type": "mcq",
            "prompt": "L'image d'un point objet à travers une lentille est :",
            "options": [
              "Le point d'intersection des rayons émergents ou de leurs supports",
              "Toujours le centre optique",
              "Le milieu du segment joignant les foyers",
              "Un point du plan focal objet dans tous les cas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §5.1 du résumé, valable pour les images réelles comme virtuelles."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Deux rayons particuliers suffisent",
          "stepTheme": "Deux rayons particuliers suffisent",
          "stepBadge": "Deux rayons particuliers suffisent",
          "paragraphText": "Pour construire l'image d'un objet, il suffit de tracer la marche de deux rayons particuliers issus du même point objet.\nOn choisit en général le rayon passant par le centre optique, qui n'est pas dévié, et le rayon parallèle à l'axe, qui passe par le foyer image ou semble en provenir.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p04_q2",
            "type": "mcq",
            "prompt": "Pour construire l'image d'un objet, il suffit de tracer la marche de :",
            "options": [
              "Tous les rayons issus de l'objet",
              "Un seul rayon quelconque",
              "Deux rayons particuliers issus du même point objet",
              "Rayons uniquement parallèles entre eux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'affirmation vraie n° 2 de l'exercice 1 : deux rayons particuliers suffisent, grâce aux propriétés de O, F et F'."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'image réelle se recueille sur un écran",
          "stepTheme": "L'image réelle se recueille sur un écran",
          "stepBadge": "L'image réelle se recueille sur un écran",
          "paragraphText": "Une image est réelle lorsque les rayons émergents se coupent effectivement en un point.\nLe résumé le précise pour l'appareil photo : l'image est réelle car elle peut être recueillie sur un écran, ici la pellicule.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p04_q3",
            "type": "mcq",
            "prompt": "Une image réelle se distingue d'une image virtuelle parce qu'elle :",
            "options": [
              "Peut être recueillie sur un écran",
              "Est toujours plus grande que l'objet",
              "Est toujours droite",
              "Ne peut pas être observée à l'œil"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le critère donné dans le premier exemple du résumé (appareil photo) : l'image réelle se recueille sur la pellicule."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "L'image virtuelle ne se recueille pas sur un écran",
          "stepTheme": "L'image virtuelle ne se recueille pas sur un écran",
          "stepBadge": "L'image virtuelle ne se recueille pas sur un écran",
          "paragraphText": "Piège : chercher à projeter une image virtuelle sur un écran est impossible, où que l'on place l'écran.\nUne image est virtuelle lorsque ce sont les prolongements des rayons émergents qui se coupent, et non les rayons eux-mêmes.\nLe résumé le précise pour la loupe : l'image est virtuelle car elle ne peut pas être recueillie sur un écran ; on l'observe en regardant à travers la lentille.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p04_q4",
            "type": "mcq",
            "prompt": "L'image donnée par une loupe est virtuelle parce que :",
            "options": [
              "Elle est renversée",
              "Elle se forme dans la lentille",
              "Elle ne peut pas être recueillie sur un écran : seuls les prolongements des rayons s'y coupent",
              "Elle n'existe que pour les objets virtuels"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le commentaire du deuxième exemple du résumé, le principe de la loupe."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'appareil photo : image réelle et renversée",
          "stepTheme": "L'appareil photo : image réelle et renversée",
          "stepBadge": "L'appareil photo : image réelle et renversée",
          "paragraphText": "Dans le premier exemple du résumé, l'objet réel placé devant la lentille convergente donne une image sur la pellicule, située après le foyer image.\nCette image est réelle et renversée par rapport à l'objet : c'est le principe de l'appareil photo.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p04_q5",
            "type": "mcq",
            "prompt": "Dans le principe de l'appareil photo (premier exemple du résumé), l'image obtenue est :",
            "options": [
              "Virtuelle et droite",
              "Réelle et renversée",
              "Virtuelle et renversée",
              "Réelle et droite"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les caractéristiques écrites dans le premier exemple du §5.1 : image réelle, recueillie sur la pellicule, et renversée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La loupe et la lunette de myope : des images virtuelles",
          "stepTheme": "La loupe et la lunette de myope : des images virtuelles",
          "stepBadge": "La loupe et la lunette de myope : des images virtuelles",
          "paragraphText": "Dans le deuxième exemple (la loupe, lentille convergente), l'image virtuelle est non renversée : l'œil voit l'objet droit et agrandi.\nDans le troisième exemple (la lunette de myope, lentille divergente), l'image de l'objet réel est également virtuelle.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p04_q6",
            "type": "mcq",
            "prompt": "L'image donnée par une loupe (deuxième exemple du résumé) est :",
            "options": [
              "Réelle et renversée",
              "Virtuelle et renversée",
              "Réelle et non renversée",
              "Virtuelle et non renversée"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ce sont les caractéristiques écrites dans le deuxième exemple du §5.1 : image virtuelle, non renversée."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p04_q1",
          "type": "mcq",
          "prompt": "L'image d'un point objet à travers une lentille est :",
          "options": [
            "Le point d'intersection des rayons émergents ou de leurs supports",
            "Toujours le centre optique",
            "Le milieu du segment joignant les foyers",
            "Un point du plan focal objet dans tous les cas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §5.1 du résumé, valable pour les images réelles comme virtuelles."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p04_q2",
          "type": "mcq",
          "prompt": "Pour construire l'image d'un objet, il suffit de tracer la marche de :",
          "options": [
            "Tous les rayons issus de l'objet",
            "Un seul rayon quelconque",
            "Deux rayons particuliers issus du même point objet",
            "Rayons uniquement parallèles entre eux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'affirmation vraie n° 2 de l'exercice 1 : deux rayons particuliers suffisent, grâce aux propriétés de O, F et F'."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p04_q3",
          "type": "mcq",
          "prompt": "Une image réelle se distingue d'une image virtuelle parce qu'elle :",
          "options": [
            "Peut être recueillie sur un écran",
            "Est toujours plus grande que l'objet",
            "Est toujours droite",
            "Ne peut pas être observée à l'œil"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le critère donné dans le premier exemple du résumé (appareil photo) : l'image réelle se recueille sur la pellicule."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p04_q4",
          "type": "mcq",
          "prompt": "L'image donnée par une loupe est virtuelle parce que :",
          "options": [
            "Elle est renversée",
            "Elle se forme dans la lentille",
            "Elle ne peut pas être recueillie sur un écran : seuls les prolongements des rayons s'y coupent",
            "Elle n'existe que pour les objets virtuels"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le commentaire du deuxième exemple du résumé, le principe de la loupe."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p04_q5",
          "type": "mcq",
          "prompt": "Dans le principe de l'appareil photo (premier exemple du résumé), l'image obtenue est :",
          "options": [
            "Virtuelle et droite",
            "Réelle et renversée",
            "Virtuelle et renversée",
            "Réelle et droite"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les caractéristiques écrites dans le premier exemple du §5.1 : image réelle, recueillie sur la pellicule, et renversée."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p04_q6",
          "type": "mcq",
          "prompt": "L'image donnée par une loupe (deuxième exemple du résumé) est :",
          "options": [
            "Réelle et renversée",
            "Virtuelle et renversée",
            "Réelle et non renversée",
            "Virtuelle et non renversée"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ce sont les caractéristiques écrites dans le deuxième exemple du §5.1 : image virtuelle, non renversée."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l05_lentilles_minces_p05",
      "order": 5,
      "title": "Grandissement et formule de conjugaison",
      "summary": "Le grandissement γ = OA' divisé par OA donne le sens et la taille relative de l'image ; la formule de conjugaison relie OA, OA' et OF'.",
      "conceptExplanation": "Le grandissement est le rapport $\\gamma = \\frac{\\overline{A'B'}}{\\overline{AB}} = \\frac{\\overline{OA'}}{\\overline{OA}}$ ; il est sans unité et les grandeurs sont algébriques.\nSi γ > 0, l'image est droite par rapport à l'objet ; si γ < 0, l'image est renversée par rapport à l'objet.\nSi la valeur absolue de γ est supérieure à 1, l'image est plus grande que l'objet ; si elle est inférieure à 1, l'image est plus petite que l'objet.\nLa formule de conjugaison relie la position de l'objet, celle de l'image et la distance focale image : $\\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{\\overline{OF'}}$.\nDans la situation d'évaluation (lentille convergente de distance focale 20 cm, objet réel de 10 cm placé à 50 cm de la lentille), elle donne une image réelle située à 33 cm de la lentille, renversée et plus petite que l'objet.",
      "keyRule": "Conjugaison pour trouver OA', grandissement pour le sens et la taille : signe de γ pour le sens, valeur absolue de γ pour la taille.",
      "formulas": [
        {
          "name": "Formule de conjugaison",
          "formula": "\\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{\\overline{OF'}}",
          "note": "Distances algébriques, avec l'axe orienté dans le sens de propagation de la lumière."
        },
        {
          "name": "Grandissement",
          "formula": "\\gamma = \\frac{\\overline{A'B'}}{\\overline{AB}} = \\frac{\\overline{OA'}}{\\overline{OA}}",
          "note": "γ sans unité : signe pour le sens, valeur absolue pour la taille relative."
        }
      ],
      "workedExample": {
        "title": "La situation d'évaluation : l'image d'un objet de 10 cm à 50 cm",
        "statement": "Un objet réel AB, de 10 cm de hauteur, perpendiculaire à l'axe principal, est placé à 50 cm d'une lentille mince convergente de 20 cm de distance focale. Détermine la position de l'image, sa nature, son sens et sa grandeur.",
        "methodSteps": [
          "Avec la convention du cours, l'objet réel est à gauche de la lentille : son abscisse algébrique vaut OA = −50 cm, et OF' = +20 cm.",
          "La formule de conjugaison donne l'inverse de OA' comme la somme de l'inverse de OF' et de l'inverse de OA : on obtient OA' = +33 cm.",
          "OA' est positif, du côté opposé à l'objet : l'image est réelle.",
          "Le grandissement vaut γ = OA' divisé par OA, soit environ −0,67 : l'image est renversée et sa hauteur vaut environ 6,7 cm."
        ],
        "conclusion": "Image réelle à 33 cm de la lentille, renversée, de hauteur environ 6,7 cm : ce sont les caractéristiques établies dans le corrigé de la situation et de l'exercice 5."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'expression du grandissement",
          "stepTheme": "L'expression du grandissement",
          "stepBadge": "L'expression du grandissement",
          "paragraphText": "Le grandissement est défini par $\\gamma = \\frac{\\overline{A'B'}}{\\overline{AB}} = \\frac{\\overline{OA'}}{\\overline{OA}}$.\nLe résumé précise qu'il est sans unité, car c'est un rapport de deux longueurs algébriques.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p05_q1",
            "type": "mcq",
            "prompt": "Le grandissement d'une lentille mince s'écrit :",
            "options": [
              "$\\gamma = \\frac{\\overline{OA'}}{\\overline{OA}}$",
              "$\\gamma = \\overline{OA'} \\times \\overline{OA}$",
              "$\\gamma = \\frac{\\overline{OF'}}{\\overline{OA}}$ uniquement",
              "$\\gamma$ s'exprime en dioptries"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §5.2.1 : γ = A'B' divisé par AB = OA' divisé par OA, sans unité."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le signe de γ donne le sens de l'image",
          "stepTheme": "Le signe de γ donne le sens de l'image",
          "stepBadge": "Le signe de γ donne le sens de l'image",
          "paragraphText": "Le résumé donne la lecture du signe : si γ > 0, l'image est droite par rapport à l'objet.\nSi γ < 0, l'image est renversée par rapport à l'objet, comme dans l'appareil photo.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p05_q2",
            "type": "mcq",
            "prompt": "Si le grandissement est négatif (γ < 0), l'image est :",
            "options": [
              "Droite par rapport à l'objet",
              "Renversée par rapport à l'objet",
              "Toujours virtuelle",
              "Toujours plus grande que l'objet"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la règle du §5.2.1 : γ < 0 signifie image renversée ; γ > 0 signifie image droite."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "La valeur absolue de γ donne la taille relative",
          "stepTheme": "La valeur absolue de γ donne la taille relative",
          "stepBadge": "La valeur absolue de γ donne la taille relative",
          "paragraphText": "Piège : pour juger la taille de l'image, c'est la valeur absolue de γ qu'il faut comparer à 1, et non son signe, qui donne le sens de l'image.\nLe résumé compare la valeur absolue du grandissement à 1 : si elle est supérieure à 1, l'image est plus grande que l'objet.\nSi elle est inférieure à 1, l'image est plus petite que l'objet, comme dans la situation d'évaluation.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p05_q3",
            "type": "mcq",
            "prompt": "Si la valeur absolue du grandissement est inférieure à 1, l'image est :",
            "options": [
              "Plus grande que l'objet",
              "De même taille que l'objet dans tous les cas",
              "Plus petite que l'objet",
              "Nécessairement virtuelle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la règle du §5.2.1 : |γ| < 1 donne une image plus petite que l'objet."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La formule de conjugaison",
          "stepTheme": "La formule de conjugaison",
          "stepBadge": "La formule de conjugaison",
          "paragraphText": "La formule de conjugaison du résumé relie les trois distances algébriques : celle de l'objet, celle de l'image et la distance focale image.\nElle s'écrit $\\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{\\overline{OF'}}$ : connaissant deux des grandeurs, on calcule la troisième.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p05_q4",
            "type": "mcq",
            "prompt": "La formule de conjugaison d'une lentille mince s'écrit :",
            "options": [
              "$\\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{\\overline{OF'}}$",
              "$\\frac{1}{\\overline{OA'}} + \\frac{1}{\\overline{OA}} = \\overline{OF'}$",
              "$\\overline{OA'} = \\overline{OA} + \\overline{OF'}$",
              "$\\frac{1}{\\overline{OF'}} = \\overline{OA'} - \\overline{OA}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la formule du §5.2.2 du résumé, avec les distances algébriques mesurées depuis le centre optique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "La position de l'image dans la situation : +33 cm",
          "stepTheme": "La position de l'image dans la situation : +33 cm",
          "stepBadge": "La position de l'image dans la situation : +33 cm",
          "paragraphText": "Méthode : écrire OA et OF' avec leurs signes (objet réel à gauche : OA = −50 cm ; lentille convergente : OF' = +20 cm), puis appliquer la formule de conjugaison.\nLe corrigé obtient une abscisse d'image positive : l'image se forme à 33 cm de la lentille, de l'autre côté que l'objet.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p05_q5",
            "type": "mcq",
            "prompt": "La position de l'image dans la situation d'évaluation (f' = 20 cm, objet à 50 cm) est :",
            "options": [
              "OA' = −33 cm",
              "OA' = +33 cm",
              "OA' = +50 cm",
              "OA' = +20 cm"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé donne OA' = +33 cm : l'image est de l'autre côté de la lentille que l'objet, elle est donc réelle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le grandissement de la situation : environ −0,67",
          "stepTheme": "Le grandissement de la situation : environ −0,67",
          "stepBadge": "Le grandissement de la situation : environ −0,67",
          "paragraphText": "Le grandissement se calcule par γ = OA' divisé par OA, avec les valeurs algébriques +33 cm et −50 cm.\nLe corrigé de l'exercice 5, qui reprend exactement la même situation, obtient γ ≈ −0,67 : l'image de 10 cm de hauteur mesure alors environ 6,7 cm.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p05_q6",
            "type": "mcq",
            "prompt": "Le grandissement et la hauteur de l'image dans la situation d'évaluation valent environ :",
            "options": [
              "γ = +0,67 et 6,7 cm, image droite",
              "γ = −1,5 et 15 cm, image renversée",
              "γ = −0,67 et 6,7 cm, image renversée et plus petite",
              "γ = −0,67 et 10 cm, image renversée"
            ],
            "correctAnswerIndex": 2,
            "explanation": "γ = 33 divisé par (−50) ≈ −0,67 < 0 : image renversée ; |γ| < 1 : hauteur 10 × 0,67 ≈ 6,7 cm (corrigé de l'exercice 5)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p05_q1",
          "type": "mcq",
          "prompt": "Le grandissement d'une lentille mince s'écrit :",
          "options": [
            "$\\gamma = \\frac{\\overline{OA'}}{\\overline{OA}}$",
            "$\\gamma = \\overline{OA'} \\times \\overline{OA}$",
            "$\\gamma = \\frac{\\overline{OF'}}{\\overline{OA}}$ uniquement",
            "$\\gamma$ s'exprime en dioptries"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §5.2.1 : γ = A'B' divisé par AB = OA' divisé par OA, sans unité."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p05_q2",
          "type": "mcq",
          "prompt": "Si le grandissement est négatif (γ < 0), l'image est :",
          "options": [
            "Droite par rapport à l'objet",
            "Renversée par rapport à l'objet",
            "Toujours virtuelle",
            "Toujours plus grande que l'objet"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la règle du §5.2.1 : γ < 0 signifie image renversée ; γ > 0 signifie image droite."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p05_q3",
          "type": "mcq",
          "prompt": "Si la valeur absolue du grandissement est inférieure à 1, l'image est :",
          "options": [
            "Plus grande que l'objet",
            "De même taille que l'objet dans tous les cas",
            "Plus petite que l'objet",
            "Nécessairement virtuelle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la règle du §5.2.1 : |γ| < 1 donne une image plus petite que l'objet."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p05_q4",
          "type": "mcq",
          "prompt": "La formule de conjugaison d'une lentille mince s'écrit :",
          "options": [
            "$\\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{\\overline{OF'}}$",
            "$\\frac{1}{\\overline{OA'}} + \\frac{1}{\\overline{OA}} = \\overline{OF'}$",
            "$\\overline{OA'} = \\overline{OA} + \\overline{OF'}$",
            "$\\frac{1}{\\overline{OF'}} = \\overline{OA'} - \\overline{OA}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la formule du §5.2.2 du résumé, avec les distances algébriques mesurées depuis le centre optique."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p05_q5",
          "type": "mcq",
          "prompt": "La position de l'image dans la situation d'évaluation (f' = 20 cm, objet à 50 cm) est :",
          "options": [
            "OA' = −33 cm",
            "OA' = +33 cm",
            "OA' = +50 cm",
            "OA' = +20 cm"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé donne OA' = +33 cm : l'image est de l'autre côté de la lentille que l'objet, elle est donc réelle."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p05_q6",
          "type": "mcq",
          "prompt": "Le grandissement et la hauteur de l'image dans la situation d'évaluation valent environ :",
          "options": [
            "γ = +0,67 et 6,7 cm, image droite",
            "γ = −1,5 et 15 cm, image renversée",
            "γ = −0,67 et 6,7 cm, image renversée et plus petite",
            "γ = −0,67 et 10 cm, image renversée"
          ],
          "correctAnswerIndex": 2,
          "explanation": "γ = 33 divisé par (−50) ≈ −0,67 < 0 : image renversée ; |γ| < 1 : hauteur 10 × 0,67 ≈ 6,7 cm (corrigé de l'exercice 5)."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l05_lentilles_minces_p06",
      "order": 6,
      "title": "Lentilles accolées : le théorème des vergences et applications",
      "summary": "Deux lentilles accolées se comportent comme une lentille unique de vergence C = C1 + C2.",
      "conceptExplanation": "Soient deux lentilles minces L1 et L2, de vergences respectives C1 et C2.\nCes deux lentilles accolées se comportent comme une lentille unique L de vergence $C = C_1 + C_2$ : c'est le théorème des vergences.\nDans l'exercice 3, la lentille L1 (C1 = −5 δ, divergente) est accolée à la lentille L2 de distance focale f2 = +20 cm, donc de vergence C2 = +5 δ : l'ensemble a une vergence nulle.\nL'exercice 6 applique la construction à la loupe : un objet placé à 4 cm d'une lentille convergente de distance focale 10 cm, donc entre le foyer objet et la lentille, donne une image virtuelle, droite et plus grande que l'objet, ce qui justifie l'usage en loupe.",
      "keyRule": "Lentilles accolées : on additionne les vergences, avec leurs signes, C = C1 + C2.",
      "formulas": [
        {
          "name": "Théorème des vergences",
          "formula": "C = C_1 + C_2",
          "note": "Vergences algébriques des lentilles accolées, en dioptries."
        }
      ],
      "workedExample": {
        "title": "L'exercice 3 : deux lentilles accolées de vergence totale nulle",
        "statement": "Une lentille mince L1 de vergence C1 = −5 δ et une autre lentille mince L2 de distance focale f2 = +20 cm sont accolées. Détermine le type de L1, la vergence de L2 et la vergence de l'ensemble.",
        "methodSteps": [
          "C1 est négative : L1 est divergente, d'épaisseur plus grande à ses bords qu'à son centre.",
          "La vergence de L2 est l'inverse de sa distance focale en mètres : C2 = 1 divisé par 0,20, soit +5 δ.",
          "Par le théorème des vergences, C = C1 + C2 = −5 + 5 = 0 δ."
        ],
        "conclusion": "L'ensemble des deux lentilles accolées a une vergence nulle : ce sont les réponses des questions 1 à 4 de l'exercice 3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le théorème des vergences",
          "stepTheme": "Le théorème des vergences",
          "stepBadge": "Le théorème des vergences",
          "paragraphText": "• Théorème des vergences : deux lentilles minces accolées L1 et L2 se comportent comme une lentille unique L.\nLa vergence de cette lentille équivalente est la somme algébrique des vergences : $C = C_1 + C_2$.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p06_q1",
            "type": "mcq",
            "prompt": "La vergence de deux lentilles minces accolées de vergences C1 et C2 vaut :",
            "options": [
              "$C = C_1 + C_2$",
              "$C = C_2 - C_1$ dans tous les cas",
              "$\\frac{1}{C} = \\frac{1}{C_1} + \\frac{1}{C_2}$",
              "$C = C_1 \\times C_2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le théorème des vergences énoncé à la fin du §5.2.2 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Calculer d'abord chaque vergence (exercice 3)",
          "stepTheme": "Calculer d'abord chaque vergence (exercice 3)",
          "stepBadge": "Calculer d'abord chaque vergence (exercice 3)",
          "paragraphText": "Méthode de l'exercice 3 : avant d'appliquer le théorème, convertir chaque donnée en vergence.\nPour L2, donnée par sa distance focale f2 = +20 cm, la vergence est l'inverse de 0,20 m, soit +5 δ.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p06_q2",
            "type": "mcq",
            "prompt": "La vergence de la lentille L2 de l'exercice 3 (distance focale +20 cm) vaut :",
            "options": [
              "0,05 δ",
              "−5 δ",
              "+5 δ",
              "+20 δ"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C2 = 1 divisé par 0,20 = +5 δ : c'est la réponse b de la question 2 de l'exercice 3."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La vergence de l'ensemble de l'exercice 3 : 0 δ",
          "stepTheme": "La vergence de l'ensemble de l'exercice 3 : 0 δ",
          "stepBadge": "La vergence de l'ensemble de l'exercice 3 : 0 δ",
          "paragraphText": "En additionnant les vergences avec leurs signes, les effets des deux lentilles se compensent dans l'exercice 3.\nL'ensemble L1 + L2 a donc une vergence nulle : il ne fait ni converger ni diverger un faisceau parallèle.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p06_q3",
            "type": "mcq",
            "prompt": "La vergence des lentilles L1 (C1 = −5 δ) et L2 (C2 = +5 δ) accolées vaut :",
            "options": [
              "10 δ",
              "0 δ",
              "0,025 δ",
              "−10 δ"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C = C1 + C2 = −5 + 5 = 0 δ par le théorème des vergences (question 4 de l'exercice 3)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La lunette de myope : une lentille divergente",
          "stepTheme": "La lunette de myope : une lentille divergente",
          "stepBadge": "La lunette de myope : une lentille divergente",
          "paragraphText": "Le troisième exemple de construction du résumé est le principe de la lunette de myope.\nLe verre correcteur de la myopie est une lentille divergente : il donne de l'objet réel une image virtuelle, que l'œil myope peut ensuite voir nettement.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p06_q4",
            "type": "mcq",
            "prompt": "Le verre correcteur utilisé dans la lunette de myope (troisième exemple du résumé) est une lentille :",
            "options": [
              "Convergente",
              "À capacité variable",
              "Divergente",
              "Plane sans vergence"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le troisième exemple du §5.1 : la correction de la myopie utilise une lentille divergente."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La loupe de l'exercice 6 : objet entre le foyer et la lentille",
          "stepTheme": "La loupe de l'exercice 6 : objet entre le foyer et la lentille",
          "stepBadge": "La loupe de l'exercice 6 : objet entre le foyer et la lentille",
          "paragraphText": "Dans l'exercice 6, l'objet de hauteur 2 cm est placé à 4 cm d'une lentille convergente de distance focale 10 cm : il se trouve donc entre le foyer objet F et le centre optique O.\nLa construction graphique donne une image virtuelle, située du même côté que l'objet, droite et plus grande que lui (hauteur lue sur le schéma : environ 3,2 cm).",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p06_q5",
            "type": "mcq",
            "prompt": "Dans l'exercice 6, l'objet placé entre le foyer objet et la lentille donne une image :",
            "options": [
              "Réelle, renversée et plus petite",
              "Virtuelle, droite et plus grande que l'objet",
              "Réelle, droite et plus grande",
              "Virtuelle, renversée et plus petite"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le résultat de la construction de l'exercice 6 : une image virtuelle et agrandie, du même côté que l'objet."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Justifier l'usage en loupe : γ supérieur à 1",
          "stepTheme": "Justifier l'usage en loupe : γ supérieur à 1",
          "stepBadge": "Justifier l'usage en loupe : γ supérieur à 1",
          "paragraphText": "La dernière question de l'exercice 6 demande de justifier que la lentille utilisée est une loupe.\nLa correction s'appuie sur le grandissement : γ > 1, l'image est plus grande que l'objet, et elle est non renversée — les deux conditions d'une loupe.",
          "exercise": {
            "id": "premiere_c_physique_l05_lentilles_minces_p06_q6",
            "type": "mcq",
            "prompt": "On justifie qu'une lentille est utilisée en loupe lorsque son image est :",
            "options": [
              "Virtuelle, renversée et plus petite",
              "Réelle et recueillie sur un écran",
              "Droite et plus grande que l'objet (γ supérieur à 1)",
              "Toujours au foyer image"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la justification de la correction de l'exercice 6 : γ > 1 et image non renversée caractérisent la loupe."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p06_q1",
          "type": "mcq",
          "prompt": "La vergence de deux lentilles minces accolées de vergences C1 et C2 vaut :",
          "options": [
            "$C = C_1 + C_2$",
            "$C = C_2 - C_1$ dans tous les cas",
            "$\\frac{1}{C} = \\frac{1}{C_1} + \\frac{1}{C_2}$",
            "$C = C_1 \\times C_2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le théorème des vergences énoncé à la fin du §5.2.2 du résumé."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p06_q2",
          "type": "mcq",
          "prompt": "La vergence de la lentille L2 de l'exercice 3 (distance focale +20 cm) vaut :",
          "options": [
            "0,05 δ",
            "−5 δ",
            "+5 δ",
            "+20 δ"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C2 = 1 divisé par 0,20 = +5 δ : c'est la réponse b de la question 2 de l'exercice 3."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p06_q3",
          "type": "mcq",
          "prompt": "La vergence des lentilles L1 (C1 = −5 δ) et L2 (C2 = +5 δ) accolées vaut :",
          "options": [
            "10 δ",
            "0 δ",
            "0,025 δ",
            "−10 δ"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C = C1 + C2 = −5 + 5 = 0 δ par le théorème des vergences (question 4 de l'exercice 3)."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p06_q4",
          "type": "mcq",
          "prompt": "Le verre correcteur utilisé dans la lunette de myope (troisième exemple du résumé) est une lentille :",
          "options": [
            "Convergente",
            "À capacité variable",
            "Divergente",
            "Plane sans vergence"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le troisième exemple du §5.1 : la correction de la myopie utilise une lentille divergente."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p06_q5",
          "type": "mcq",
          "prompt": "Dans l'exercice 6, l'objet placé entre le foyer objet et la lentille donne une image :",
          "options": [
            "Réelle, renversée et plus petite",
            "Virtuelle, droite et plus grande que l'objet",
            "Réelle, droite et plus grande",
            "Virtuelle, renversée et plus petite"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le résultat de la construction de l'exercice 6 : une image virtuelle et agrandie, du même côté que l'objet."
        },
        {
          "id": "premiere_c_physique_l05_lentilles_minces_p06_q6",
          "type": "mcq",
          "prompt": "On justifie qu'une lentille est utilisée en loupe lorsque son image est :",
          "options": [
            "Virtuelle, renversée et plus petite",
            "Réelle et recueillie sur un écran",
            "Droite et plus grande que l'objet (γ supérieur à 1)",
            "Toujours au foyer image"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la justification de la correction de l'exercice 6 : γ > 1 et image non renversée caractérisent la loupe."
        }
      ]
    }
  ]
};
