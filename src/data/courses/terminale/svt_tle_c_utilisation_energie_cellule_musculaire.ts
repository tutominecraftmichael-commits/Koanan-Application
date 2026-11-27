import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 4 : L'utilisation de l'énergie par la cellule musculaire » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2125
export const SVT_TLE_C_L04_UTILISATION_ENERGIE_CELLULE_MUSCULAIRE: CurriculumChapter = {
  "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire",
  "subjectId": "svt",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [],
  "order": 4,
  "title": "Leçon 4 : L'utilisation de l'énergie par la cellule musculaire",
  "summary": "Le muscle strié squelettique fonctionne grâce à sa structure en sarcomères, au mécanisme de glissement actine-myosine alimenté par l’ATP, et à des phénomènes chimiques et thermiques de régénération de l’ATP.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2125",
  "points": [
    {
      "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p01",
      "order": 1,
      "title": "La structure du muscle strié squelettique et le sarcomère",
      "summary": "Le muscle est formé de faisceaux de fibres contenant des myofibrilles faites de filaments d’actine et de myosine.",
      "conceptExplanation": "Le muscle frais a une forme allongée ou ovale et est constitué de plusieurs faisceaux de fibres musculaires, de vaisseaux sanguins et de nerfs, le tout enveloppé dans une gaine conjonctive.\nLa fibre musculaire est une cellule géante allongée et polynucléée contenant des myofibrilles, avec un sarcolemme et un sarcoplasme. Les myofibrilles présentent une succession de bandes claires et de bandes sombres.\nLa strie Z et la zone H séparent respectivement la bande claire I et la bande sombre A en deux parties égales. Le sarcomère est la partie de la myofibrille comprise entre deux stries Z consécutives.\nIl est constitué de filaments fins d’actine et de filaments épais de myosine : la bande claire I ne renferme que des filaments d’actine, tandis que la bande sombre A renferme des filaments d’actine et de myosine.",
      "keyRule": "Sarcomère = entre deux stries Z ; bande I = actine seule ; bande A = actine et myosine.",
      "formulas": [],
      "workedExample": {
        "title": "Annoter la fibre musculaire (situation d’évaluation 2 corrigée)",
        "statement": "Dans le corrigé, annote la portion de fibre : myofibrille, sarcomère, bande claire, bande sombre, zone H, strie Z, actine, myosine, mitochondrie et réticulum sarcoplasmique.",
        "methodSteps": [
          "On repère d’abord la myofibrille et le sarcomère délimité par les stries Z.",
          "On distingue ensuite la bande claire I, la bande sombre A et la zone H.",
          "On place enfin l’actine, la myosine, la mitochondrie et le réticulum sarcoplasmique."
        ],
        "conclusion": "Cette annotation correspond à l’ultrastructure de la fibre musculaire striée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du sarcomère",
          "stepTheme": "Définition du sarcomère",
          "stepBadge": "Définition du sarcomère",
          "paragraphText": "• Sarcomère : partie de la myofibrille comprise entre deux stries Z consécutives.\nIl est constitué de filaments fins d’actine et de filaments épais de myosine.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p01_q1",
            "type": "mcq",
            "prompt": "Le sarcomère est compris entre :",
            "options": [
              "Deux zones H",
              "Deux stries Z consécutives",
              "Deux noyaux",
              "Deux vaisseaux sanguins"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition de l’analyse des résultats."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Actine et myosine",
          "stepTheme": "Actine et myosine",
          "stepBadge": "Actine et myosine",
          "paragraphText": "• Actine : filament fin du sarcomère. • Myosine : filament épais du sarcomère, portant des têtes capables de se lier à l’actine.\nLe muscle fonctionne grâce à cette structure faite de ces deux types de filaments.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p01_q2",
            "type": "mcq",
            "prompt": "Les filaments épais du sarcomère sont les filaments de :",
            "options": [
              "Actine",
              "Myosine",
              "Collagène",
              "Myéline"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé oppose filaments fins d’actine et filaments épais de myosine."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Bandes claire et sombre",
          "stepTheme": "Bandes claire et sombre",
          "stepBadge": "Bandes claire et sombre",
          "paragraphText": "La bande claire I renferme uniquement des filaments d’actine.\nLa bande sombre A renferme des filaments d’actine et de myosine.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p01_q3",
            "type": "mcq",
            "prompt": "La bande claire I contient :",
            "options": [
              "Uniquement de la myosine",
              "Actine et myosine",
              "Uniquement de l’actine",
              "Aucun filament"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la composition donnée dans l’analyse du résumé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La fibre musculaire, cellule géante polynucléée",
          "stepTheme": "La fibre musculaire, cellule géante polynucléée",
          "stepBadge": "La fibre musculaire, cellule géante polynucléée",
          "paragraphText": "La fibre musculaire est une cellule géante allongée et polynucléée contenant des myofibrilles.\nElle est limitée par le sarcolemme et contient le sarcoplasme.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p01_q4",
            "type": "mcq",
            "prompt": "La fibre musculaire est :",
            "options": [
              "Une cellule sans noyau",
              "Une cellule géante allongée et polynucléée",
              "Un faisceau de nerfs",
              "Une bande sombre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la description de l’ultrastructure dans le résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre strie Z et zone H",
          "stepTheme": "Ne pas confondre strie Z et zone H",
          "stepBadge": "Ne pas confondre strie Z et zone H",
          "paragraphText": "Piège : la strie Z sépare la bande claire en deux et délimite le sarcomère, tandis que la zone H sépare la bande sombre en deux parties égales.\nChacune a sa bande propre.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p01_q5",
            "type": "mcq",
            "prompt": "La zone H sépare en deux parties égales :",
            "options": [
              "La bande claire I",
              "La bande sombre A",
              "Le sarcolemme",
              "Le faisceau de fibres"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé associe strie Z à la bande claire et zone H à la bande sombre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La composition du muscle frais",
          "stepTheme": "La composition du muscle frais",
          "stepBadge": "La composition du muscle frais",
          "paragraphText": "Exemple du tableau : le muscle frais est constitué de faisceaux de fibres musculaires, de tissu conjonctif, de vaisseaux sanguins et de nerfs.\nSon aspect est allongé et ovale.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p01_q6",
            "type": "mcq",
            "prompt": "Le muscle frais contient notamment :",
            "options": [
              "Des faisceaux de fibres, des vaisseaux sanguins et des nerfs",
              "Uniquement des myofibrilles isolées",
              "Uniquement du glycogène",
              "Des synapses seules"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la ligne constituants du tableau de structure."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p01_q1",
          "type": "mcq",
          "prompt": "Le sarcomère est compris entre :",
          "options": [
            "Deux zones H",
            "Deux stries Z consécutives",
            "Deux noyaux",
            "Deux vaisseaux sanguins"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition de l’analyse des résultats."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p01_q2",
          "type": "mcq",
          "prompt": "Les filaments épais du sarcomère sont les filaments de :",
          "options": [
            "Actine",
            "Myosine",
            "Collagène",
            "Myéline"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé oppose filaments fins d’actine et filaments épais de myosine."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p01_q3",
          "type": "mcq",
          "prompt": "La bande claire I contient :",
          "options": [
            "Uniquement de la myosine",
            "Actine et myosine",
            "Uniquement de l’actine",
            "Aucun filament"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la composition donnée dans l’analyse du résumé."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p01_q4",
          "type": "mcq",
          "prompt": "La fibre musculaire est :",
          "options": [
            "Une cellule sans noyau",
            "Une cellule géante allongée et polynucléée",
            "Un faisceau de nerfs",
            "Une bande sombre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la description de l’ultrastructure dans le résumé."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p01_q5",
          "type": "mcq",
          "prompt": "La zone H sépare en deux parties égales :",
          "options": [
            "La bande claire I",
            "La bande sombre A",
            "Le sarcolemme",
            "Le faisceau de fibres"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé associe strie Z à la bande claire et zone H à la bande sombre."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p01_q6",
          "type": "mcq",
          "prompt": "Le muscle frais contient notamment :",
          "options": [
            "Des faisceaux de fibres, des vaisseaux sanguins et des nerfs",
            "Uniquement des myofibrilles isolées",
            "Uniquement du glycogène",
            "Des synapses seules"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la ligne constituants du tableau de structure."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p02",
      "order": 2,
      "title": "Le mécanisme de la contraction : attachement, pivotement, détachement",
      "summary": "L’excitation libère du Ca2+, les têtes de myosine s’attachent à l’actine, pivotent grâce à l’ATP, puis se détachent.",
      "conceptExplanation": "Quand le sarcomère passe du repos à l’activité, sa longueur, celle de la bande claire et celle de la zone H se réduisent, tandis que la longueur de la bande sombre et celles de l’actine et de la myosine ne changent pas.\nL’excitation provoque la libération des ions Ca2+ par le réticulum sarcoplasmique. Ces ions se fixent sur la tropomyosine qui libère les sites de fixation de la myosine sur l’actine.\nUne molécule d’ATP se fixe sur chaque tête de myosine, ce qui entraîne la déformation et l’établissement du pont actomyosine : c’est la phase d’attachement. L’ATP fixée s’hydrolyse en ADP, Pi et énergie ; cette énergie fait pivoter les têtes de myosine et glisser les filaments d’actine : c’est la phase de pivotement ou de glissement, et le muscle est contracté.\nLa fixation d’une nouvelle molécule d’ATP entraîne la rupture du pont actomyosine et les ions Ca2+ sont réabsorbés par le réticulum sarcoplasmique : c’est la phase de relâchement ou détachement.",
      "keyRule": "Contraction = glissement de l’actine sans raccourcissement des filaments ; ATP et Ca2+ commandent attachement, pivotement et détachement.",
      "formulas": [],
      "workedExample": {
        "title": "Le rôle du calcium (situation d’évaluation 2 corrigée)",
        "statement": "On injecte du Ca2+ dans la fibre : le sarcomère, les bandes claires et la zone H diminuent et la bande sombre reste constante. Explique le mécanisme et déduis le rôle du Ca2+.",
        "methodSteps": [
          "Avant injection, la myosine chargée d’ATP ne se fixe pas sur l’actine et le muscle est au repos.",
          "Après injection, le Ca2+ permet la formation du complexe actomyosine : phase d’attachement.",
          "L’hydrolyse de l’ATP fait pivoter la tête de myosine et glisser l’actine, puis une nouvelle ATP permet le détachement."
        ],
        "conclusion": "Le Ca2+ déclenche la contraction en permettant l’interaction actine-myosine."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La phase d’attachement",
          "stepTheme": "La phase d’attachement",
          "stepBadge": "La phase d’attachement",
          "paragraphText": "• Phase d’attachement : établissement du pont actomyosine après fixation d’une molécule d’ATP sur chaque tête de myosine.\nElle est rendue possible par la libération des sites de fixation sur l’actine grâce aux ions Ca2+.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p02_q1",
            "type": "mcq",
            "prompt": "La phase d’attachement correspond à :",
            "options": [
              "La rupture du pont actomyosine",
              "L’établissement du pont actomyosine",
              "La réabsorption du Ca2+",
              "Le relâchement complet"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition de l’interprétation des résultats."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La phase de pivotement ou glissement",
          "stepTheme": "La phase de pivotement ou glissement",
          "stepBadge": "La phase de pivotement ou glissement",
          "paragraphText": "• Phase de pivotement : l’énergie de l’hydrolyse de l’ATP en ADP, Pi et énergie fait pivoter les têtes de myosine.\nLes filaments d’actine glissent le long des filaments de myosine et le muscle passe à l’état contracté.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p02_q2",
            "type": "mcq",
            "prompt": "L’énergie du pivotement vient de :",
            "options": [
              "La fermentation seule",
              "L’hydrolyse de l’ATP fixé sur la tête de myosine",
              "La chaleur retardée",
              "La phosphocréatine seule"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé écrit que l’ATP s’hydrolyse en ADP plus Pi plus énergie."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La phase de détachement",
          "stepTheme": "La phase de détachement",
          "stepBadge": "La phase de détachement",
          "paragraphText": "• Phase de détachement ou relâchement : la fixation d’une nouvelle molécule d’ATP sur les têtes de myosine entraîne la rupture du pont actomyosine.\nLes ions Ca2+ sont alors réabsorbés par le réticulum sarcoplasmique et le muscle retourne à son état initial.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p02_q3",
            "type": "mcq",
            "prompt": "Le détachement est provoqué par :",
            "options": [
              "La fixation d’une nouvelle molécule d’ATP",
              "L’arrivée de Ca2+ supplémentaire",
              "L’hydrolyse de la phosphocréatine",
              "L’accumulation d’acide lactique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la phase de relâchement décrite dans le résumé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Ce qui diminue et ce qui ne change pas",
          "stepTheme": "Ce qui diminue et ce qui ne change pas",
          "stepBadge": "Ce qui diminue et ce qui ne change pas",
          "paragraphText": "Pendant la contraction, la longueur du sarcomère, de la bande claire et de la zone H diminue.\nLa longueur de la bande sombre et celles des filaments d’actine et de myosine ne changent pas.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p02_q4",
            "type": "mcq",
            "prompt": "Pendant la contraction, la longueur de la bande sombre :",
            "options": [
              "Diminue fortement",
              "Ne change pas",
              "Double",
              "Disparaît"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le tableau comparatif repos contre activité."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les filaments ne raccourcissent pas",
          "stepTheme": "Les filaments ne raccourcissent pas",
          "stepBadge": "Les filaments ne raccourcissent pas",
          "paragraphText": "Piège : ce n’est pas le raccourcissement des filaments qui contracte le muscle.\nCe sont les filaments d’actine qui glissent entre les filaments de myosine vers le centre du sarcomère.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p02_q5",
            "type": "mcq",
            "prompt": "La contraction s’explique par :",
            "options": [
              "Le raccourcissement des filaments d’actine",
              "Le glissement des filaments d’actine le long de la myosine",
              "La disparition de la bande A",
              "La fusion actine-myosine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé parle d’un glissement de l’actine vers le centre du sarcomère."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le rôle du Ca2+ selon le corrigé",
          "stepTheme": "Le rôle du Ca2+ selon le corrigé",
          "stepBadge": "Le rôle du Ca2+ selon le corrigé",
          "paragraphText": "Exemple du corrigé : en présence de calcium, la troponine change de configuration et libère l’actine qui va interagir avec la myosine.\nSans Ca2+, la myosine chargée d’ATP ne se fixe pas sur l’actine.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p02_q6",
            "type": "mcq",
            "prompt": "Le rôle du Ca2+ est de :",
            "options": [
              "Fournir directement l’énergie",
              "Permettre l’interaction entre actine et myosine",
              "Détruire l’ATP",
              "Remplacer la myosine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la déduction du corrigé de la situation 2."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p02_q1",
          "type": "mcq",
          "prompt": "La phase d’attachement correspond à :",
          "options": [
            "La rupture du pont actomyosine",
            "L’établissement du pont actomyosine",
            "La réabsorption du Ca2+",
            "Le relâchement complet"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition de l’interprétation des résultats."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p02_q2",
          "type": "mcq",
          "prompt": "L’énergie du pivotement vient de :",
          "options": [
            "La fermentation seule",
            "L’hydrolyse de l’ATP fixé sur la tête de myosine",
            "La chaleur retardée",
            "La phosphocréatine seule"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé écrit que l’ATP s’hydrolyse en ADP plus Pi plus énergie."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p02_q3",
          "type": "mcq",
          "prompt": "Le détachement est provoqué par :",
          "options": [
            "La fixation d’une nouvelle molécule d’ATP",
            "L’arrivée de Ca2+ supplémentaire",
            "L’hydrolyse de la phosphocréatine",
            "L’accumulation d’acide lactique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la phase de relâchement décrite dans le résumé."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p02_q4",
          "type": "mcq",
          "prompt": "Pendant la contraction, la longueur de la bande sombre :",
          "options": [
            "Diminue fortement",
            "Ne change pas",
            "Double",
            "Disparaît"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le tableau comparatif repos contre activité."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p02_q5",
          "type": "mcq",
          "prompt": "La contraction s’explique par :",
          "options": [
            "Le raccourcissement des filaments d’actine",
            "Le glissement des filaments d’actine le long de la myosine",
            "La disparition de la bande A",
            "La fusion actine-myosine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé parle d’un glissement de l’actine vers le centre du sarcomère."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p02_q6",
          "type": "mcq",
          "prompt": "Le rôle du Ca2+ est de :",
          "options": [
            "Fournir directement l’énergie",
            "Permettre l’interaction entre actine et myosine",
            "Détruire l’ATP",
            "Remplacer la myosine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la déduction du corrigé de la situation 2."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p03",
      "order": 3,
      "title": "Les phénomènes chimiques : un ATP maintenu constant par régénération",
      "summary": "Pendant l’activité, le muscle consomme plus d’oxygène et de glucose, mais son taux d’ATP reste constant car il est régénéré.",
      "conceptExplanation": "Le tableau de variation des constituants chimiques montre que, du repos à l’activité, la quantité d’oxygène utilisé, de dioxyde de carbone rejeté, de glucose utilisé et d’acide lactique produit augmente.\nEn revanche, la quantité de glycogène baisse et celle de l’ATP reste constante.\nLors de la contraction musculaire, le taux d’ATP reste constant parce que l’ATP utilisé est régénéré.\nCette régénération ou restauration de l’ATP se fait selon deux voies principales : les voies rapides et les voies lentes, détaillées dans les points suivants.",
      "keyRule": "Si l’ATP reste constant pendant l’effort, c’est qu’il est régénéré au fur et à mesure de son utilisation.",
      "formulas": [],
      "workedExample": {
        "title": "Exploiter le tableau des constituants chimiques",
        "statement": "À partir du tableau du document 1, analyse les variations du repos à l’activité et explique la constance de l’ATP.",
        "methodSteps": [
          "On compare d’abord les valeurs au repos et en activité pour l’oxygène, le dioxyde de carbone, le glucose, l’acide lactique, le glycogène et l’ATP.",
          "On constate des augmentations, une baisse du glycogène et une constance de l’ATP.",
          "On explique cette constance par la régénération permanente de l’ATP utilisé."
        ],
        "conclusion": "Le muscle fonctionne grâce à des phénomènes chimiques de régénération de l’ATP."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La constance du taux d’ATP",
          "stepTheme": "La constance du taux d’ATP",
          "stepBadge": "La constance du taux d’ATP",
          "paragraphText": "Le taux d’ATP reste constant pendant la contraction parce que l’ATP utilisé est régénéré.\nDans le tableau, l’ATP vaut la même quantité au repos et en activité.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p03_q1",
            "type": "mcq",
            "prompt": "Dans le tableau du document 1, la quantité d’ATP du repos à l’activité :",
            "options": [
              "Augmente",
              "Diminue",
              "Reste constante",
              "S’annule"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le tableau donne la même valeur et l’interprétation parle de régénération."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Ce qui augmente pendant l’activité",
          "stepTheme": "Ce qui augmente pendant l’activité",
          "stepBadge": "Ce qui augmente pendant l’activité",
          "paragraphText": "Pendant l’activité, l’oxygène utilisé, le dioxyde de carbone rejeté, le glucose utilisé et l’acide lactique produit augmentent.\nCes hausses traduisent l’intensification des phénomènes chimiques du muscle.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p03_q2",
            "type": "mcq",
            "prompt": "Pendant l’activité musculaire, la quantité de glucose utilisé :",
            "options": [
              "Diminue",
              "Augmente",
              "Reste nulle",
              "Devient du glycogène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’analyse du tableau du document 1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La baisse du glycogène",
          "stepTheme": "La baisse du glycogène",
          "stepBadge": "La baisse du glycogène",
          "paragraphText": "La quantité de glycogène baisse du repos à l’activité.\nLe glycogène se dégrade pour donner du glucose : c’est la glycogénolyse, point de départ des voies lentes.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p03_q3",
            "type": "mcq",
            "prompt": "La baisse du glycogène pendant l’activité correspond à sa dégradation en :",
            "options": [
              "Acide lactique direct",
              "Glucose par glycogénolyse",
              "Phosphocréatine",
              "ATP direct sans intermédiaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé nomme glycogénolyse cette dégradation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Lire un tableau de variation",
          "stepTheme": "Lire un tableau de variation",
          "stepBadge": "Lire un tableau de variation",
          "paragraphText": "Méthode : pour chaque constituant, on compare repos et activité, puis on regroupe augmentations, baisse et constance avant d’interpréter.\nC’est la démarche d’analyse du document 1.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p03_q4",
            "type": "mcq",
            "prompt": "Dans le tableau, le constituant qui baisse est :",
            "options": [
              "L’oxygène utilisé",
              "Le glucose utilisé",
              "Le glycogène",
              "L’acide lactique produit"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Seul le glycogène baisse, l’ATP restant constant."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "ATP constant ne veut pas dire ATP inutilisé",
          "stepTheme": "ATP constant ne veut pas dire ATP inutilisé",
          "stepBadge": "ATP constant ne veut pas dire ATP inutilisé",
          "paragraphText": "Piège : un taux constant ne signifie pas que l’ATP n’est pas consommé.\nIl est utilisé pour le glissement des filaments, puis régénéré par les voies rapides et lentes.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p03_q5",
            "type": "mcq",
            "prompt": "Un taux d’ATP constant pendant l’effort signifie que :",
            "options": [
              "L’ATP n’est jamais utilisé",
              "L’ATP utilisé est régénéré",
              "Le muscle est au repos",
              "Aucun phénomène chimique n’a lieu"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’interprétation exacte du résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les valeurs du tableau du document 1",
          "stepTheme": "Les valeurs du tableau du document 1",
          "stepBadge": "Les valeurs du tableau du document 1",
          "paragraphText": "Exemple : l’oxygène utilisé passe de 0,307 litre au repos à 5,207 litres en activité et le glucose utilisé de 2,042 grammes à 8,432 grammes.\nL’acide lactique produit passe de 0,5 gramme à 1,5 gramme, tandis que l’ATP reste à 2 grammes.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p03_q6",
            "type": "mcq",
            "prompt": "Selon le tableau, l’acide lactique produit en activité vaut :",
            "options": [
              "0,5 gramme",
              "1,5 gramme",
              "8,432 grammes",
              "2 grammes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les valeurs lues dans le document 1."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p03_q1",
          "type": "mcq",
          "prompt": "Dans le tableau du document 1, la quantité d’ATP du repos à l’activité :",
          "options": [
            "Augmente",
            "Diminue",
            "Reste constante",
            "S’annule"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le tableau donne la même valeur et l’interprétation parle de régénération."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p03_q2",
          "type": "mcq",
          "prompt": "Pendant l’activité musculaire, la quantité de glucose utilisé :",
          "options": [
            "Diminue",
            "Augmente",
            "Reste nulle",
            "Devient du glycogène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’analyse du tableau du document 1."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p03_q3",
          "type": "mcq",
          "prompt": "La baisse du glycogène pendant l’activité correspond à sa dégradation en :",
          "options": [
            "Acide lactique direct",
            "Glucose par glycogénolyse",
            "Phosphocréatine",
            "ATP direct sans intermédiaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé nomme glycogénolyse cette dégradation."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p03_q4",
          "type": "mcq",
          "prompt": "Dans le tableau, le constituant qui baisse est :",
          "options": [
            "L’oxygène utilisé",
            "Le glucose utilisé",
            "Le glycogène",
            "L’acide lactique produit"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Seul le glycogène baisse, l’ATP restant constant."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p03_q5",
          "type": "mcq",
          "prompt": "Un taux d’ATP constant pendant l’effort signifie que :",
          "options": [
            "L’ATP n’est jamais utilisé",
            "L’ATP utilisé est régénéré",
            "Le muscle est au repos",
            "Aucun phénomène chimique n’a lieu"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’interprétation exacte du résumé."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p03_q6",
          "type": "mcq",
          "prompt": "Selon le tableau, l’acide lactique produit en activité vaut :",
          "options": [
            "0,5 gramme",
            "1,5 gramme",
            "8,432 grammes",
            "2 grammes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les valeurs lues dans le document 1."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p04",
      "order": 4,
      "title": "Les voies rapides de régénération de l’ATP",
      "summary": "La myokinase et la phosphocréatinase restaurent rapidement l’ATP dès le début de la contraction.",
      "conceptExplanation": "Les voies rapides de régénération de l’ATP sont deux. La première est la voie de la myokinase : deux molécules d’ADP donnent, en présence de la myokinase, une molécule d’ATP et l’adénosine monophosphate ou AMP.\nLa deuxième est la voie de la phosphocréatinase : une molécule d’ADP et une molécule de phosphocréatine donnent une molécule d’ATP et la créatine.\nCes voies sont rapides car elles utilisent des substrats immédiatement disponibles dans la fibre musculaire.\nElles s’opposent aux voies lentes qui passent par la dégradation du glycogène et du glucose.",
      "keyRule": "Voies rapides : 2 ADP donnent ATP plus AMP par la myokinase ; ADP plus phosphocréatine donnent ATP plus créatine.",
      "formulas": [],
      "workedExample": {
        "title": "Associer les voies de régénération (activité d’application 1)",
        "statement": "Associe voies lentes et voies rapides aux mécanismes proposés : myokinase, respiration, phosphocréatine et fermentation, en suivant la logique du cours.",
        "methodSteps": [
          "Les voies rapides utilisent des réactions immédiates : myokinase et phosphocréatine.",
          "Les voies lentes dégradent le glucose : respiration et fermentation.",
          "On vérifie ensuite avec le texte des voies lentes et rapides du cours."
        ],
        "conclusion": "Myokinase et phosphocréatine sont rapides ; respiration et fermentation sont lentes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La voie de la myokinase",
          "stepTheme": "La voie de la myokinase",
          "stepBadge": "La voie de la myokinase",
          "paragraphText": "• Voie de la myokinase : deux molécules d’ADP donnent, en présence de l’enzyme myokinase, une molécule d’ATP et une molécule d’AMP.\nC’est la première voie rapide citée dans le résumé.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p04_q1",
            "type": "mcq",
            "prompt": "La voie de la myokinase transforme :",
            "options": [
              "Deux ADP en un ATP et un AMP",
              "Un ATP en deux ADP",
              "La phosphocréatine en glucose",
              "Le glucose en glycogène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’équation écrite dans le résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La voie de la phosphocréatinase",
          "stepTheme": "La voie de la phosphocréatinase",
          "stepBadge": "La voie de la phosphocréatinase",
          "paragraphText": "• Voie de la phosphocréatinase : une molécule d’ADP et une molécule de phosphocréatine donnent une molécule d’ATP et la créatine.\nC’est la deuxième voie rapide de régénération.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p04_q2",
            "type": "mcq",
            "prompt": "La voie de la phosphocréatinase produit de l’ATP à partir de :",
            "options": [
              "Deux molécules de glucose",
              "ADP et phosphocréatine",
              "Uniquement de l’oxygène",
              "Acide lactique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’équation de la deuxième voie rapide."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Pourquoi ces voies sont rapides",
          "stepTheme": "Pourquoi ces voies sont rapides",
          "stepBadge": "Pourquoi ces voies sont rapides",
          "paragraphText": "Ces voies sont rapides car elles régénèrent l’ATP à partir de molécules déjà présentes, ADP et phosphocréatine, sans dégrader le glucose.\nElles interviennent donc dès la contraction, avant les voies lentes.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p04_q3",
            "type": "mcq",
            "prompt": "Les voies rapides se distinguent des voies lentes car elles :",
            "options": [
              "Exigent la dégradation complète du glucose",
              "Utilisent ADP et phosphocréatine immédiatement disponibles",
              "Produisent de l’acide lactique",
              "Passent par la mitochondrie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le contraste construit par le résumé entre voies rapides et lentes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Reconnaître une voie rapide dans un énoncé",
          "stepTheme": "Reconnaître une voie rapide dans un énoncé",
          "stepBadge": "Reconnaître une voie rapide dans un énoncé",
          "paragraphText": "Méthode : si l’équation contient la myokinase ou la phosphocréatine comme source d’ATP, la voie est rapide.\nSi elle contient glycogène, glucose ou acide pyruvique, la voie est lente.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p04_q4",
            "type": "mcq",
            "prompt": "Une régénération par phosphocréatine est une voie :",
            "options": [
              "Lente",
              "Rapide",
              "Respiratoire",
              "Fermentaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’activité d’application associe la phosphocréatine aux mécanismes rapides dans la logique du cours."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le corrigé imprimé de l’activité 1 est à signaler",
          "stepTheme": "Le corrigé imprimé de l’activité 1 est à signaler",
          "stepBadge": "Le corrigé imprimé de l’activité 1 est à signaler",
          "paragraphText": "Piège relevé dans la source : le corrigé imprimé de l’activité d’application 1 écrit 1-A et C et 2-B et D, alors que la question numérote 1 pour les voies lentes et 2 pour les voies rapides.\nLu littéralement, ce corrigé inverse donc les associations attendues d’après le cours.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p04_q5",
            "type": "mcq",
            "prompt": "D’après le cours, respiration et fermentation sont des voies :",
            "options": [
              "Rapides",
              "Lentes",
              "Sans production d’ATP",
              "Uniquement thermiques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le cours classe la dégradation du glucose, respiration et fermentation, parmi les voies lentes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Reconstituer la phosphocréatine",
          "stepTheme": "Reconstituer la phosphocréatine",
          "stepBadge": "Reconstituer la phosphocréatine",
          "paragraphText": "Exemple de l’activité 2 corrigée : l’énergie libérée par les dégradations sert à fabriquer l’ATP et à reconstituer la phosphocréatine.\nLa réserve de phosphocréatine, utilisée par la voie rapide, est donc rechargeable par les voies lentes.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p04_q6",
            "type": "mcq",
            "prompt": "La phosphocréatine est reconstituée grâce à l’énergie des :",
            "options": [
              "Contractions seules sans ATP",
              "Dégradations moléculaires de la voie respiratoire",
              "Barrières naturelles",
              "Synapses"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le texte complété de l’activité d’application 2."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p04_q1",
          "type": "mcq",
          "prompt": "La voie de la myokinase transforme :",
          "options": [
            "Deux ADP en un ATP et un AMP",
            "Un ATP en deux ADP",
            "La phosphocréatine en glucose",
            "Le glucose en glycogène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’équation écrite dans le résumé."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p04_q2",
          "type": "mcq",
          "prompt": "La voie de la phosphocréatinase produit de l’ATP à partir de :",
          "options": [
            "Deux molécules de glucose",
            "ADP et phosphocréatine",
            "Uniquement de l’oxygène",
            "Acide lactique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’équation de la deuxième voie rapide."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p04_q3",
          "type": "mcq",
          "prompt": "Les voies rapides se distinguent des voies lentes car elles :",
          "options": [
            "Exigent la dégradation complète du glucose",
            "Utilisent ADP et phosphocréatine immédiatement disponibles",
            "Produisent de l’acide lactique",
            "Passent par la mitochondrie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le contraste construit par le résumé entre voies rapides et lentes."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p04_q4",
          "type": "mcq",
          "prompt": "Une régénération par phosphocréatine est une voie :",
          "options": [
            "Lente",
            "Rapide",
            "Respiratoire",
            "Fermentaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’activité d’application associe la phosphocréatine aux mécanismes rapides dans la logique du cours."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p04_q5",
          "type": "mcq",
          "prompt": "D’après le cours, respiration et fermentation sont des voies :",
          "options": [
            "Rapides",
            "Lentes",
            "Sans production d’ATP",
            "Uniquement thermiques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le cours classe la dégradation du glucose, respiration et fermentation, parmi les voies lentes."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p04_q6",
          "type": "mcq",
          "prompt": "La phosphocréatine est reconstituée grâce à l’énergie des :",
          "options": [
            "Contractions seules sans ATP",
            "Dégradations moléculaires de la voie respiratoire",
            "Barrières naturelles",
            "Synapses"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le texte complété de l’activité d’application 2."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p05",
      "order": 5,
      "title": "Les voies lentes : fermentation lactique et respiration",
      "summary": "Le glucose issu du glycogène est dégradé par glycolyse, puis par fermentation lactique sans oxygène ou par respiration avec oxygène.",
      "conceptExplanation": "Lors de la contraction, le glycogène se dégrade pour donner du glucose : c’est la glycogénolyse. Le glucose se dégrade à son tour pour donner de l’acide pyruvique : c’est la glycolyse.\nEn absence ou insuffisance d’oxygène, en anaérobiose, l’acide pyruvique subit la fermentation lactique et donne l’acide lactique avec une faible quantité d’ATP, car la dégradation du glucose est partielle. L’accumulation de l’acide lactique baisse le pH musculaire, ce qui entraîne la fatigue musculaire.\nEn présence d’une quantité suffisante d’oxygène, l’acide pyruvique est oxydé au niveau des mitochondries en dioxyde de carbone et en eau, avec une grande quantité d’ATP car la dégradation du glucose est totale : c’est la voie de la respiration ou des oxydations respiratoires.\nLe résumé donne pour la voie respiratoire l’équation du glucose avec 6 oxygènes donnant 6 dioxydes de carbone, 6 eaux et 38 ATP.",
      "keyRule": "Sans oxygène suffisant : acide lactique, peu d’ATP et fatigue ; avec oxygène : dégradation totale et beaucoup d’ATP.",
      "formulas": [],
      "workedExample": {
        "title": "Le lactate chez le sujet entraîné et non entraîné (situation d’évaluation)",
        "statement": "Compare la production de lactate selon la vitesse de course chez un sujet entraîné et un sujet non entraîné, puis explique les variations.",
        "methodSteps": [
          "Chez le sujet entraîné, le lactate augmente progressivement avec la vitesse ; chez le non entraîné, il augmente rapidement jusqu’à l’arrêt.",
          "L’activité intense consomme le dioxygène disponible et provoque la fermentation de l’acide pyruvique en acide lactique.",
          "L’acide lactique entraîne la fatigue, et le manque d’entraînement favorise l’arrêt."
        ],
        "conclusion": "Le manque d’entraînement a pour conséquences courbatures, crampes et claquage selon le corrigé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Glycogénolyse et glycolyse",
          "stepTheme": "Glycogénolyse et glycolyse",
          "stepBadge": "Glycogénolyse et glycolyse",
          "paragraphText": "• Glycogénolyse : dégradation du glycogène en glucose. • Glycolyse : dégradation du glucose en acide pyruvique.\nCes deux étapes enchaînées ouvrent les voies lentes de régénération.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p05_q1",
            "type": "mcq",
            "prompt": "La glycogénolyse est la dégradation de :",
            "options": [
              "Glucose en acide pyruvique",
              "Glycogène en glucose",
              "Acide pyruvique en acide lactique",
              "ATP en ADP"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la première étape des voies lentes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La fermentation lactique musculaire",
          "stepTheme": "La fermentation lactique musculaire",
          "stepBadge": "La fermentation lactique musculaire",
          "paragraphText": "• Fermentation lactique : en absence ou insuffisance d’oxygène, l’acide pyruvique donne l’acide lactique avec une faible quantité d’ATP.\nLa dégradation du glucose y est partielle.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p05_q2",
            "type": "mcq",
            "prompt": "La fermentation lactique se produit en :",
            "options": [
              "Présence abondante d’oxygène",
              "Absence ou insuffisance d’oxygène",
              "Présence de phosphocréatine seule",
              "Repos complet uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé la situe en anaérobiose."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Acide lactique, pH et fatigue",
          "stepTheme": "Acide lactique, pH et fatigue",
          "stepBadge": "Acide lactique, pH et fatigue",
          "paragraphText": "L’accumulation de l’acide lactique baisse le pH musculaire.\nCette baisse de pH entraîne la fatigue musculaire, comme le confirme la situation d’évaluation sur le lactate.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p05_q3",
            "type": "mcq",
            "prompt": "La fatigue musculaire dans le résumé est liée à :",
            "options": [
              "La hausse du pH",
              "L’accumulation d’acide lactique qui baisse le pH",
              "La disparition du glycogène seul",
              "La chaleur retardée seule"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la phrase d’interprétation de la voie fermentaire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La voie respiratoire à haut rendement",
          "stepTheme": "La voie respiratoire à haut rendement",
          "stepBadge": "La voie respiratoire à haut rendement",
          "paragraphText": "En présence d’oxygène suffisant, l’acide pyruvique est oxydé dans les mitochondries en dioxyde de carbone et en eau.\nLa dégradation totale du glucose fournit une grande quantité d’ATP et un rendement énergétique élevé.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p05_q4",
            "type": "mcq",
            "prompt": "La voie respiratoire musculaire se déroule au niveau des :",
            "options": [
              "Synapses",
              "Mitochondries",
              "Sarcomères seuls",
              "Vaisseaux sanguins"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’activité 2 corrigée place cette oxydation dans les mitochondries."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le chiffre de la glycolyse dans la source",
          "stepTheme": "Le chiffre de la glycolyse dans la source",
          "stepBadge": "Le chiffre de la glycolyse dans la source",
          "paragraphText": "Piège relevé dans la source : le schéma des voies lentes écrit glucose donnant deux acides pyruviques plus 8 ATP, alors que la fermentation lactique est ensuite chiffrée à 2 ATP.\nIl faut reproduire ces valeurs en les distinguant : 8 ATP annoncés pour l’étape écrite dans le schéma, 2 ATP pour la fermentation lactique.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p05_q5",
            "type": "mcq",
            "prompt": "Selon le texte sur la fermentation lactique, la quantité d’ATP produite est :",
            "options": [
              "38 ATP",
              "2 ATP",
              "8 ATP pour la seule fermentation lactique",
              "Aucun ATP"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte de la voie fermentaire donne une faible quantité de 2 ATP."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Entraîné contre non entraîné",
          "stepTheme": "Entraîné contre non entraîné",
          "stepBadge": "Entraîné contre non entraîné",
          "paragraphText": "Exemple du tableau corrigé : à 18 kilomètres par heure, le sujet entraîné produit 5 unités de lactate contre 16 pour le non entraîné, qui s’arrête aux vitesses élevées.\nLe corrigé propose comme conséquences du manque d’entraînement les courbatures, les crampes et le claquage musculaire.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p05_q6",
            "type": "mcq",
            "prompt": "Une conséquence du manque d’entraînement citée par le corrigé est :",
            "options": [
              "La dégénérescence des neurones",
              "Le claquage musculaire",
              "L’éclatement de la famille",
              "La septicémie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les conséquences listées : courbatures, crampes et claquage."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p05_q1",
          "type": "mcq",
          "prompt": "La glycogénolyse est la dégradation de :",
          "options": [
            "Glucose en acide pyruvique",
            "Glycogène en glucose",
            "Acide pyruvique en acide lactique",
            "ATP en ADP"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la première étape des voies lentes."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p05_q2",
          "type": "mcq",
          "prompt": "La fermentation lactique se produit en :",
          "options": [
            "Présence abondante d’oxygène",
            "Absence ou insuffisance d’oxygène",
            "Présence de phosphocréatine seule",
            "Repos complet uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé la situe en anaérobiose."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p05_q3",
          "type": "mcq",
          "prompt": "La fatigue musculaire dans le résumé est liée à :",
          "options": [
            "La hausse du pH",
            "L’accumulation d’acide lactique qui baisse le pH",
            "La disparition du glycogène seul",
            "La chaleur retardée seule"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la phrase d’interprétation de la voie fermentaire."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p05_q4",
          "type": "mcq",
          "prompt": "La voie respiratoire musculaire se déroule au niveau des :",
          "options": [
            "Synapses",
            "Mitochondries",
            "Sarcomères seuls",
            "Vaisseaux sanguins"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’activité 2 corrigée place cette oxydation dans les mitochondries."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p05_q5",
          "type": "mcq",
          "prompt": "Selon le texte sur la fermentation lactique, la quantité d’ATP produite est :",
          "options": [
            "38 ATP",
            "2 ATP",
            "8 ATP pour la seule fermentation lactique",
            "Aucun ATP"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte de la voie fermentaire donne une faible quantité de 2 ATP."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p05_q6",
          "type": "mcq",
          "prompt": "Une conséquence du manque d’entraînement citée par le corrigé est :",
          "options": [
            "La dégénérescence des neurones",
            "Le claquage musculaire",
            "L’éclatement de la famille",
            "La septicémie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les conséquences listées : courbatures, crampes et claquage."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p06",
      "order": 6,
      "title": "Les phénomènes thermiques de l’activité musculaire",
      "summary": "Le muscle libère de la chaleur en deux temps : une chaleur initiale pendant le travail et une chaleur retardée après le relâchement.",
      "conceptExplanation": "On distingue deux types de chaleur au cours de l’activité musculaire. La chaleur initiale est produite pendant la contraction et le relâchement : chaleur de contraction et chaleur de soutien ou de maintien pendant la contraction, et chaleur de relâchement, de courte durée mais de grande amplitude, pendant le relâchement.\nLa chaleur retardée est produite après la phase de relâchement musculaire : elle est de longue durée mais de faible amplitude.\nLa chaleur initiale provient de l’énergie libérée au cours de l’hydrolyse de l’ATP pour assurer le glissement des filaments d’actine entre les filaments de myosine.\nLa chaleur retardée est due à l’énergie libérée au cours de la régénération des molécules d’ATP utilisées pendant la contraction. Le muscle est donc le siège d’un phénomène thermique pendant son travail.",
      "keyRule": "Chaleur initiale = hydrolyse de l’ATP pendant le travail ; chaleur retardée = régénération de l’ATP après le relâchement.",
      "formulas": [],
      "workedExample": {
        "title": "Exploiter le document 2 sur la production de chaleur",
        "statement": "Observe la production de chaleur au cours de la contraction, distingue les deux types de chaleur et interprète leur origine.",
        "methodSteps": [
          "On repère d’abord la chaleur initiale, produite pendant contraction et relâchement.",
          "On repère ensuite la chaleur retardée, après le relâchement, longue mais faible.",
          "On relie la première à l’hydrolyse de l’ATP et la seconde à sa régénération."
        ],
        "conclusion": "Le muscle libère de la chaleur en deux étapes principales, initiale et retardée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La chaleur initiale",
          "stepTheme": "La chaleur initiale",
          "stepBadge": "La chaleur initiale",
          "paragraphText": "• Chaleur initiale : chaleur produite pendant la phase de contraction et de relâchement du muscle.\nElle comprend la chaleur de contraction, la chaleur de soutien ou de maintien et la chaleur de relâchement.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p06_q1",
            "type": "mcq",
            "prompt": "La chaleur initiale est produite :",
            "options": [
              "Uniquement après l’arrêt définitif",
              "Pendant la contraction et le relâchement",
              "Uniquement au repos",
              "Sans hydrolyse d’ATP"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition de l’analyse du document 2."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La chaleur retardée",
          "stepTheme": "La chaleur retardée",
          "stepBadge": "La chaleur retardée",
          "paragraphText": "• Chaleur retardée : chaleur produite après la phase de relâchement musculaire.\nElle est de longue durée mais de faible amplitude.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p06_q2",
            "type": "mcq",
            "prompt": "La chaleur retardée est :",
            "options": [
              "Courte et de grande amplitude",
              "Longue et de faible amplitude",
              "Absente après le relâchement",
              "Égale à la chaleur de relâchement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le contraste donné dans le résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’origine de la chaleur initiale",
          "stepTheme": "L’origine de la chaleur initiale",
          "stepBadge": "L’origine de la chaleur initiale",
          "paragraphText": "La chaleur initiale provient de l’énergie libérée au cours de l’hydrolyse de l’ATP.\nCette hydrolyse assure le glissement des filaments d’actine entre les filaments de myosine.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p06_q3",
            "type": "mcq",
            "prompt": "La chaleur initiale provient de l’énergie libérée lors de :",
            "options": [
              "La régénération de l’ATP",
              "L’hydrolyse de l’ATP pour le glissement des filaments",
              "La glycogénolyse seule",
              "La fermentation lactique seule"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’interprétation du document 2."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L’origine de la chaleur retardée",
          "stepTheme": "L’origine de la chaleur retardée",
          "stepBadge": "L’origine de la chaleur retardée",
          "paragraphText": "La chaleur retardée est due à l’énergie libérée au cours de la régénération des molécules d’ATP utilisées pendant la contraction.\nElle survient donc après le travail proprement dit.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p06_q4",
            "type": "mcq",
            "prompt": "La chaleur retardée est due à l’énergie libérée lors de :",
            "options": [
              "L’hydrolyse initiale de l’ATP",
              "La régénération de l’ATP utilisé",
              "La fixation du Ca2+",
              "La rupture du pont actomyosine seule"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’interprétation du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser durées et amplitudes",
          "stepTheme": "Ne pas inverser durées et amplitudes",
          "stepBadge": "Ne pas inverser durées et amplitudes",
          "paragraphText": "Piège : la chaleur de relâchement est de courte durée mais de grande amplitude, alors que la chaleur retardée est de longue durée mais de faible amplitude.\nInverser ces couples est l’erreur classique sur ce document.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p06_q5",
            "type": "mcq",
            "prompt": "La chaleur de relâchement est :",
            "options": [
              "Longue et faible",
              "Courte et de grande amplitude",
              "Retardée et faible",
              "Absente pendant le relâchement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la description exacte de l’analyse des résultats."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La conclusion générale sur l’énergie du muscle",
          "stepTheme": "La conclusion générale sur l’énergie du muscle",
          "stepBadge": "La conclusion générale sur l’énergie du muscle",
          "paragraphText": "Exemple de la conclusion générale : le muscle fonctionne grâce à sa structure et selon un mécanisme, et il utilise l’énergie fournie par l’hydrolyse de l’ATP.\nLes phénomènes thermiques sont la part d’énergie libérée sous forme de chaleur pendant ce travail.",
          "exercise": {
            "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p06_q6",
            "type": "mcq",
            "prompt": "Selon la conclusion générale, le muscle utilise l’énergie fournie par :",
            "options": [
              "La phagocytose",
              "L’hydrolyse de l’ATP",
              "La synthèse des anticorps",
              "La pompe Na+/K+ seule"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la phrase finale de la conclusion générale."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p06_q1",
          "type": "mcq",
          "prompt": "La chaleur initiale est produite :",
          "options": [
            "Uniquement après l’arrêt définitif",
            "Pendant la contraction et le relâchement",
            "Uniquement au repos",
            "Sans hydrolyse d’ATP"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition de l’analyse du document 2."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p06_q2",
          "type": "mcq",
          "prompt": "La chaleur retardée est :",
          "options": [
            "Courte et de grande amplitude",
            "Longue et de faible amplitude",
            "Absente après le relâchement",
            "Égale à la chaleur de relâchement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le contraste donné dans le résumé."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p06_q3",
          "type": "mcq",
          "prompt": "La chaleur initiale provient de l’énergie libérée lors de :",
          "options": [
            "La régénération de l’ATP",
            "L’hydrolyse de l’ATP pour le glissement des filaments",
            "La glycogénolyse seule",
            "La fermentation lactique seule"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’interprétation du document 2."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p06_q4",
          "type": "mcq",
          "prompt": "La chaleur retardée est due à l’énergie libérée lors de :",
          "options": [
            "L’hydrolyse initiale de l’ATP",
            "La régénération de l’ATP utilisé",
            "La fixation du Ca2+",
            "La rupture du pont actomyosine seule"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’interprétation du résumé."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p06_q5",
          "type": "mcq",
          "prompt": "La chaleur de relâchement est :",
          "options": [
            "Longue et faible",
            "Courte et de grande amplitude",
            "Retardée et faible",
            "Absente pendant le relâchement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la description exacte de l’analyse des résultats."
        },
        {
          "id": "terminale_c_svt_l04_utilisation_energie_cellule_musculaire_p06_q6",
          "type": "mcq",
          "prompt": "Selon la conclusion générale, le muscle utilise l’énergie fournie par :",
          "options": [
            "La phagocytose",
            "L’hydrolyse de l’ATP",
            "La synthèse des anticorps",
            "La pompe Na+/K+ seule"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la phrase finale de la conclusion générale."
        }
      ]
    }
  ]
};
