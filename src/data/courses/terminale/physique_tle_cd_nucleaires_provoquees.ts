import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 19 : Réactions nucléaires provoquées » (Terminale C/D ; format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1331
export const PHYSIQUE_TLE_CD_L19_NUCLEAIRES_PROVOQUEES: CurriculumChapter = {
  "id": "terminale_c_physique_l19_nucleaires_provoquees",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 19,
  "title": "Leçon 19 : Réactions nucléaires provoquées",
  "summary": "Le défaut de masse Δm fixe l'énergie de liaison EL = Δm·c² ; la fission des noyaux lourds et la fusion des noyaux légers libèrent l'écart d'énergie de liaison — avec leurs applications et leurs dangers.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1331",
  "points": [
    {
      "id": "terminale_c_physique_l19_nucleaires_provoquees_p01",
      "order": 1,
      "title": "Le défaut de masse d'un noyau",
      "summary": "La masse d'un noyau est toujours inférieure à la somme des masses de ses nucléons séparés : la différence est le défaut de masse Δm.",
      "conceptExplanation": "La masse mX d'un noyau X est inférieure à la somme des masses de ses constituants.\nOn appelle défaut de masse Δm la différence entre la masse des nucléons séparés et la masse du noyau : Δm = [Z·mp + (A − Z)·mn − mX].\nCe « manque » de masse n'est pas une erreur de mesure : il correspond à l'énergie de liaison du point suivant, par l'équivalence masse-énergie.\nDans l'activité 1, le noyau d'uranium 235 (mU = 235,0439 u, avec mp = 1,0073 u et mn = 1,0087 u) présente un défaut de masse de 1,8718 u.",
      "keyRule": "Δm = Z·mp + (A − Z)·mn − m(noyau) > 0 : le noyau lié « pèse » moins que ses parties.",
      "formulas": [
        {
          "name": "Défaut de masse",
          "formula": "\\Delta m = Z \\cdot m_p + (A - Z) \\cdot m_n - m_X",
          "note": "En kilogrammes, ou en u si les masses sont en u (1 u = 931,5 MeV/c²)."
        }
      ],
      "workedExample": {
        "title": "L'activité 1 : le défaut de masse de l'uranium 235",
        "statement": "La masse du noyau d'uranium 235 vaut 235,0439 u ; un proton isolé vaut 1,0073 u et un neutron isolé 1,0087 u. Calcule le défaut de masse de ce noyau.",
        "methodSteps": [
          "L'uranium 235 compte 92 protons et 235 − 92 = 143 neutrons.",
          "On calcule la somme des masses des nucléons séparés, puis on retranche la masse du noyau.",
          "La solution obtient Δm = 1,8718 u."
        ],
        "conclusion": "C'est la réponse à la question 1 de l'activité d'application 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition du défaut de masse",
          "stepTheme": "La définition du défaut de masse",
          "stepBadge": "La définition du défaut de masse",
          "paragraphText": "• Défaut de masse Δm : différence entre la masse des nucléons séparés d'un noyau et la masse de ce noyau assemblé.\nIl est toujours positif pour un noyau lié.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p01_q1",
            "type": "mcq",
            "prompt": "Le défaut de masse Δm d'un noyau est :",
            "options": [
              "La différence entre la masse de ses nucléons séparés et la masse du noyau",
              "La masse du noyau moins celle de ses nucléons séparés",
              "La masse des électrons de l'atome",
              "Une erreur expérimentale de pesée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §1.1 : le noyau assemblé est plus léger que la somme de ses constituants."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'expression de Δm",
          "stepTheme": "L'expression de Δm",
          "stepBadge": "L'expression de Δm",
          "paragraphText": "On compte Z protons de masse mp et (A − Z) neutrons de masse mn, puis on soustrait la masse réelle du noyau.\nAttention à ne pas utiliser la masse de l'atome complet sans réfléchir : ici, toutes les masses sont celles des noyaux et des nucléons.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p01_q2",
            "type": "mcq",
            "prompt": "L'expression du défaut de masse est :",
            "options": [
              "Δm = mX − Z·mp − (A − Z)·mn",
              "Δm = Z·mp + (A − Z)·mn − mX",
              "Δm = A·mp − mX",
              "Δm = Z·(mp + mn)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'expression du §1.2 du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'uranium 235 : Δm = 1,8718 u",
          "stepTheme": "L'uranium 235 : Δm = 1,8718 u",
          "stepBadge": "L'uranium 235 : Δm = 1,8718 u",
          "paragraphText": "Avec 92 protons et 143 neutrons, la somme des masses séparées dépasse la masse du noyau de près de 2 unités de masse atomique.\nC'est ce défaut, converti en énergie, qui donnera l'énergie de liaison de 1743,58 MeV du point suivant.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p01_q3",
            "type": "mcq",
            "prompt": "Le défaut de masse du noyau d'uranium 235 calculé dans l'activité 1 vaut :",
            "options": [
              "0,18898 u",
              "235,0439 u",
              "1,8718 u",
              "7,4195 u"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la réponse à la question 1 de l'activité 1 ; 235,0439 u est la masse du noyau."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le noyau est plus léger que ses constituants",
          "stepTheme": "Le noyau est plus léger que ses constituants",
          "stepBadge": "Le noyau est plus léger que ses constituants",
          "paragraphText": "La première phrase du §1.1 est un fait expérimental : la masse d'un noyau est inférieure à la somme des masses de ses nucléons libres.\nPlus le noyau est fortement lié, plus ce défaut est grand relativement à A.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p01_q4",
            "type": "mcq",
            "prompt": "La masse d'un noyau assemblé est, par rapport à la somme des masses de ses nucléons séparés :",
            "options": [
              "Toujours égale",
              "Toujours supérieure",
              "Parfois supérieure, parfois inférieure",
              "Toujours inférieure"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le constat qui ouvre le §1.1 du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Compter les neutrons avant de calculer",
          "stepTheme": "Compter les neutrons avant de calculer",
          "stepBadge": "Compter les neutrons avant de calculer",
          "paragraphText": "Le réflexe préalable à tout calcul de défaut de masse : obtenir le nombre de neutrons par N = A − Z.\nL'exercice 2 l'applique : ¹²₅B a 7 neutrons, ¹²₆C en a 6 et ¹²₇N en a 5.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p01_q5",
            "type": "mcq",
            "prompt": "Les noyaux ¹²₅B, ¹²₆C et ¹²₇N contiennent respectivement :",
            "options": [
              "7, 6 et 5 neutrons",
              "5, 6 et 7 neutrons",
              "12 neutrons chacun",
              "6 neutrons chacun"
            ],
            "correctAnswerIndex": 0,
            "explanation": "N = A − Z : ce sont les compositions de la question 1 de l'exercice 2."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Δm n'est pas une perte au sens chimique",
          "stepTheme": "Δm n'est pas une perte au sens chimique",
          "stepBadge": "Δm n'est pas une perte au sens chimique",
          "paragraphText": "Piège : le défaut de masse ne signifie pas que des nucléons ont disparu — le noyau contient bien ses A nucléons.\nLa masse « manquante » est l'équivalent, par E = Δm·c², de l'énergie qu'il a fallu libérer pour assembler le noyau.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p01_q6",
            "type": "mcq",
            "prompt": "Le défaut de masse signifie que :",
            "options": [
              "Des nucléons ont disparu du noyau",
              "La masse des nucléons séparés excède celle du noyau, sans qu'aucun nucléon ne manque",
              "Les balances sont imprécises à cette échelle",
              "Le noyau contient moins de nucléons que prévu"
            ],
            "correctAnswerIndex": 1,
            "explanation": "A est inchangé : l'écart de masse est l'équivalent de l'énergie de liaison (§2)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p01_q1",
          "type": "mcq",
          "prompt": "Le défaut de masse Δm d'un noyau est :",
          "options": [
            "La différence entre la masse de ses nucléons séparés et la masse du noyau",
            "La masse du noyau moins celle de ses nucléons séparés",
            "La masse des électrons de l'atome",
            "Une erreur expérimentale de pesée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §1.1 : le noyau assemblé est plus léger que la somme de ses constituants."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p01_q2",
          "type": "mcq",
          "prompt": "L'expression du défaut de masse est :",
          "options": [
            "Δm = mX − Z·mp − (A − Z)·mn",
            "Δm = Z·mp + (A − Z)·mn − mX",
            "Δm = A·mp − mX",
            "Δm = Z·(mp + mn)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'expression du §1.2 du résumé."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p01_q3",
          "type": "mcq",
          "prompt": "Le défaut de masse du noyau d'uranium 235 calculé dans l'activité 1 vaut :",
          "options": [
            "0,18898 u",
            "235,0439 u",
            "1,8718 u",
            "7,4195 u"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la réponse à la question 1 de l'activité 1 ; 235,0439 u est la masse du noyau."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p01_q4",
          "type": "mcq",
          "prompt": "La masse d'un noyau assemblé est, par rapport à la somme des masses de ses nucléons séparés :",
          "options": [
            "Toujours égale",
            "Toujours supérieure",
            "Parfois supérieure, parfois inférieure",
            "Toujours inférieure"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le constat qui ouvre le §1.1 du résumé."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p01_q5",
          "type": "mcq",
          "prompt": "Les noyaux ¹²₅B, ¹²₆C et ¹²₇N contiennent respectivement :",
          "options": [
            "7, 6 et 5 neutrons",
            "5, 6 et 7 neutrons",
            "12 neutrons chacun",
            "6 neutrons chacun"
          ],
          "correctAnswerIndex": 0,
          "explanation": "N = A − Z : ce sont les compositions de la question 1 de l'exercice 2."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p01_q6",
          "type": "mcq",
          "prompt": "Le défaut de masse signifie que :",
          "options": [
            "Des nucléons ont disparu du noyau",
            "La masse des nucléons séparés excède celle du noyau, sans qu'aucun nucléon ne manque",
            "Les balances sont imprécises à cette échelle",
            "Le noyau contient moins de nucléons que prévu"
          ],
          "correctAnswerIndex": 1,
          "explanation": "A est inchangé : l'écart de masse est l'équivalent de l'énergie de liaison (§2)."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l19_nucleaires_provoquees_p02",
      "order": 2,
      "title": "L'énergie de liaison et l'énergie de liaison par nucléon",
      "summary": "EL = Δm·c² est l'énergie à fournir pour dissocier le noyau ; rapportée à A, elle mesure la stabilité : EL/A vaut 7,42 MeV pour l'uranium 235.",
      "conceptExplanation": "Le noyau étant un système à très forte cohésion, il faut fournir une énergie très importante pour le dissocier, au repos, en ses nucléons séparés également au repos : cette énergie est l'énergie de liaison EL = Δm·c².\nSon unité est le joule, mais il est commode en physique nucléaire de l'exprimer en MeV : 1 MeV = 10⁶ eV = 1,60 × 10⁻¹³ J, et 1 u = 931,5 MeV/c².\nL'énergie de liaison par nucléon, E₀ = EL/A = Δm·c²/A, est l'énergie moyenne qu'il faut apporter à chaque nucléon pour le sortir du noyau : elle traduit la stabilité d'un noyau.\nPour l'uranium 235 de l'activité 1 : EL = 1743,58 MeV et E₀ = 7,4195 MeV par nucléon ; pour le carbone 12 de l'exercice 2, EL = 66,98 MeV.",
      "keyRule": "EL = Δm·c² ; EL/A compare les stabilités : plus il est grand, plus le noyau est stable.",
      "formulas": [
        {
          "name": "Énergie de liaison",
          "formula": "E_L = \\Delta m \\cdot c^2",
          "note": "En joules si Δm est en kg ; en MeV si Δm est en u (1 u = 931,5 MeV/c²)."
        },
        {
          "name": "Énergie de liaison par nucléon",
          "formula": "E_0 = \\frac{E_L}{A}",
          "note": "Elle traduit la stabilité du noyau."
        }
      ],
      "workedExample": {
        "title": "L'exercice 2 : l'énergie de liaison du carbone 12",
        "statement": "On donne la masse du noyau de carbone 12 en unités d'énergie : 1,12 × 10⁴ MeV/c², avec mp = 938,27 MeV/c² et mn = 939,56 MeV/c². Calcule son énergie de liaison.",
        "methodSteps": [
          "Le carbone 12 compte 6 protons et 6 neutrons : on forme leur somme de masses.",
          "On retranche la masse du noyau pour obtenir le défaut de masse en MeV/c².",
          "En multipliant par c², la solution obtient EL = 66,98 MeV."
        ],
        "conclusion": "C'est la réponse à la question 2.2 de l'exercice 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition de l'énergie de liaison",
          "stepTheme": "La définition de l'énergie de liaison",
          "stepBadge": "La définition de l'énergie de liaison",
          "paragraphText": "• Énergie de liaison EL : énergie qu'il faut fournir pour dissocier un noyau au repos en ses nucléons séparés, eux-mêmes au repos.\nL'exercice 2 la redéfinit : l'énergie minimum nécessaire pour dissocier les nucléons, c'est-à-dire l'énergie de cohésion du noyau.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p02_q1",
            "type": "mcq",
            "prompt": "L'énergie de liaison d'un noyau est l'énergie :",
            "options": [
              "Qu'il faut fournir pour dissocier le noyau en ses nucléons séparés au repos",
              "Que le noyau libère en se formant spontanément dans le vide",
              "C'nétique des nucléons dans le noyau",
              "Des électrons autour du noyau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §2.1, rappelée à la question 2.1 de l'exercice 2."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La relation EL = Δm·c²",
          "stepTheme": "La relation EL = Δm·c²",
          "stepBadge": "La relation EL = Δm·c²",
          "paragraphText": "L'équivalence masse-énergie d'Einstein relie directement le défaut de masse à l'énergie de liaison.\nAvec des masses en unités atomiques, on utilise 1 u = 931,5 MeV/c² pour obtenir EL directement en MeV.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p02_q2",
            "type": "mcq",
            "prompt": "L'énergie de liaison d'un noyau se calcule par :",
            "options": [
              "EL = Δm/c²",
              "EL = Δm·c²",
              "EL = Δm × A",
              "EL = c²/Δm"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la relation du §2.1, avec c = 3,00 × 10⁸ m/s."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les unités pratiques : MeV et MeV/c²",
          "stepTheme": "Les unités pratiques : MeV et MeV/c²",
          "stepBadge": "Les unités pratiques : MeV et MeV/c²",
          "paragraphText": "Le joule est inadapté à l'échelle d'un noyau : on exprime les énergies en MeV (1 MeV = 1,60 × 10⁻¹³ J).\nSymétriquement, exprimer les masses en MeV/c² rend le produit Δm·c² immédiat.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p02_q3",
            "type": "mcq",
            "prompt": "En physique nucléaire, une unité de masse atomique équivaut à :",
            "options": [
              "931,5 J",
              "1,60 × 10⁻¹³ MeV",
              "931,5 MeV/c²",
              "1 MeV/c²"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la remarque du §2.1 : 1 u = 931,5 MeV/c² ; et 1 MeV = 1,60 × 10⁻¹³ J."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'uranium 235 : EL = 1743,58 MeV, soit 7,4195 MeV/nucléon",
          "stepTheme": "L'uranium 235 : EL = 1743,58 MeV, soit 7,4195 MeV/nucléon",
          "stepBadge": "L'uranium 235 : EL = 1743,58 MeV, soit 7,4195 MeV/nucléon",
          "paragraphText": "Le produit du défaut de masse (1,8718 u) par 931,5 MeV donne l'énergie totale de liaison de l'uranium 235.\nRapportée à ses 235 nucléons, elle vaut 7,4195 MeV par nucléon.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p02_q4",
            "type": "mcq",
            "prompt": "L'énergie de liaison et l'énergie par nucléon de l'uranium 235 (activité 1) valent :",
            "options": [
              "EL = 66,98 MeV et 5,58 MeV/nucléon",
              "EL = 1743,58 MeV et 1743,58 MeV/nucléon",
              "EL = 1,8718 MeV et 7,4195 MeV/nucléon",
              "EL = 1743,58 MeV et 7,4195 MeV/nucléon"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ce sont les réponses aux questions 2 et 3 de l'activité 1 ; 66,98 MeV est l'énergie de liaison du carbone 12."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "EL/A traduit la stabilité",
          "stepTheme": "EL/A traduit la stabilité",
          "stepBadge": "EL/A traduit la stabilité",
          "paragraphText": "Comparer les EL totales n'a pas de sens entre noyaux de tailles différentes : c'est l'énergie moyenne par nucléon qui compte.\nPlus elle est élevée, plus il est coûteux d'arracher un nucléon, donc plus le noyau est stable.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p02_q5",
            "type": "mcq",
            "prompt": "L'énergie de liaison par nucléon E₀ = EL/A traduit :",
            "options": [
              "La stabilité du noyau : plus elle est grande, plus le noyau est stable",
              "La radioactivité du noyau",
              "La charge du noyau",
              "La taille de l'atome"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la phrase du §2.2 du résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre EL et EL/A",
          "stepTheme": "Ne pas confondre EL et EL/A",
          "stepBadge": "Ne pas confondre EL et EL/A",
          "paragraphText": "Piège classique : l'uranium a une énergie de liaison totale énorme (1743,58 MeV) parce qu'il a 235 nucléons, pas parce qu'il est très stable.\nSon énergie par nucléon (7,42 MeV) est au contraire inférieure à celle des noyaux moyens, ce qui rend sa fission énergétiquement favorable (point 5).",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p02_q6",
            "type": "mcq",
            "prompt": "Pour comparer la stabilité de deux noyaux de tailles différentes, il faut comparer :",
            "options": [
              "Leurs énergies de liaison totales",
              "Leurs énergies de liaison par nucléon",
              "Leurs défauts de masse",
              "Leurs nombres de masse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Seul EL/A est une grandeur intensive comparable (§2.2)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p02_q1",
          "type": "mcq",
          "prompt": "L'énergie de liaison d'un noyau est l'énergie :",
          "options": [
            "Qu'il faut fournir pour dissocier le noyau en ses nucléons séparés au repos",
            "Que le noyau libère en se formant spontanément dans le vide",
            "C'nétique des nucléons dans le noyau",
            "Des électrons autour du noyau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §2.1, rappelée à la question 2.1 de l'exercice 2."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p02_q2",
          "type": "mcq",
          "prompt": "L'énergie de liaison d'un noyau se calcule par :",
          "options": [
            "EL = Δm/c²",
            "EL = Δm·c²",
            "EL = Δm × A",
            "EL = c²/Δm"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la relation du §2.1, avec c = 3,00 × 10⁸ m/s."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p02_q3",
          "type": "mcq",
          "prompt": "En physique nucléaire, une unité de masse atomique équivaut à :",
          "options": [
            "931,5 J",
            "1,60 × 10⁻¹³ MeV",
            "931,5 MeV/c²",
            "1 MeV/c²"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la remarque du §2.1 : 1 u = 931,5 MeV/c² ; et 1 MeV = 1,60 × 10⁻¹³ J."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p02_q4",
          "type": "mcq",
          "prompt": "L'énergie de liaison et l'énergie par nucléon de l'uranium 235 (activité 1) valent :",
          "options": [
            "EL = 66,98 MeV et 5,58 MeV/nucléon",
            "EL = 1743,58 MeV et 1743,58 MeV/nucléon",
            "EL = 1,8718 MeV et 7,4195 MeV/nucléon",
            "EL = 1743,58 MeV et 7,4195 MeV/nucléon"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ce sont les réponses aux questions 2 et 3 de l'activité 1 ; 66,98 MeV est l'énergie de liaison du carbone 12."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p02_q5",
          "type": "mcq",
          "prompt": "L'énergie de liaison par nucléon E₀ = EL/A traduit :",
          "options": [
            "La stabilité du noyau : plus elle est grande, plus le noyau est stable",
            "La radioactivité du noyau",
            "La charge du noyau",
            "La taille de l'atome"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la phrase du §2.2 du résumé."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p02_q6",
          "type": "mcq",
          "prompt": "Pour comparer la stabilité de deux noyaux de tailles différentes, il faut comparer :",
          "options": [
            "Leurs énergies de liaison totales",
            "Leurs énergies de liaison par nucléon",
            "Leurs défauts de masse",
            "Leurs nombres de masse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Seul EL/A est une grandeur intensive comparable (§2.2)."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l19_nucleaires_provoquees_p03",
      "order": 3,
      "title": "La réaction de fission nucléaire",
      "summary": "Un noyau lourd fissile, frappé par un neutron, se scinde en deux noyaux plus légers et plus stables, en libérant des neutrons : la réaction en chaîne.",
      "conceptExplanation": "Une réaction de fission nucléaire est une réaction au cours de laquelle un noyau lourd se scinde en deux noyaux légers plus stables sous l'impact d'un neutron ; un tel noyau est dit fissile.\nExemple du résumé : ²³⁵₉₂U + ¹₀n → ⁹⁴₃₈Sr + ¹⁴⁰₅₄Xe + 2 ¹₀n.\nUne réaction de fission libère en plus des neutrons (deux ici, souvent trois) susceptibles, dans certaines conditions, de produire de nouvelles fissions : c'est le processus de la réaction en chaîne.\nLes fissions contrôlées sont mises en œuvre dans les réacteurs nucléaires ; les fissions incontrôlées se produisent dans les bombes explosives appelées « bombes A ».",
      "keyRule": "Fission : lourd + neutron lent → deux noyaux moyens + neutrons + énergie ; en chaîne si on n'y prend pas garde.",
      "formulas": [],
      "workedExample": {
        "title": "L'exercice 5 : retrouver les nombres inconnus d'une fission",
        "statement": "Une fission de l'uranium s'écrit : ¹₀n + ²³⁵₉₂U → ¹³⁹₅₃I + ⁹⁴xY + y ¹₀n. Détermine x et y par les lois de conservation.",
        "methodSteps": [
          "Conservation de la charge : 92 = 53 + x, d'où x = 39 (l'yttrium).",
          "Conservation du nombre de nucléons : 235 + 1 = 139 + 94 + y, d'où y = 3 neutrons émis.",
          "La perte de masse de cette réaction vaut 0,215 u en valeur absolue."
        ],
        "conclusion": "Ce sont les résultats des questions 3.1 et 3.2 de l'exercice 5."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition de la fission",
          "stepTheme": "La définition de la fission",
          "stepBadge": "La définition de la fission",
          "paragraphText": "• Fission nucléaire : un noyau lourd se scinde en deux noyaux légers plus stables sous l'impact d'un neutron.\nL'exercice 1 la justifie ainsi : éclatement d'un noyau lourd par bombardement d'un neutron lent, donnant deux noyaux légers.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p03_q1",
            "type": "mcq",
            "prompt": "Une réaction de fission nucléaire est :",
            "options": [
              "La scission d'un noyau lourd en deux noyaux légers plus stables sous l'impact d'un neutron",
              "L'union de deux noyaux légers",
              "Une désintégration α spontanée",
              "La capture d'un électron par le noyau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §3, reprise dans la situation d'évaluation et l'exercice 5."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Un noyau fissile, des neutrons lents",
          "stepTheme": "Un noyau fissile, des neutrons lents",
          "stepBadge": "Un noyau fissile, des neutrons lents",
          "paragraphText": "Le noyau susceptible de se scinder ainsi est dit fissile : c'est le cas de l'uranium 235 et du plutonium 239.\nLa situation d'évaluation précise que le neutron qui le brise est un neutron « lent », bien plus efficace qu'un neutron rapide.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p03_q2",
            "type": "mcq",
            "prompt": "Un noyau capable de se scinder sous l'impact d'un neutron est dit :",
            "options": [
              "Fertile",
              "Fissile",
              "Stable",
              "Radioactif β⁺"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le vocabulaire du §3 ; « fertile » désigne au contraire l'uranium 238 (exercice 3)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'exemple du résumé : U-235 → Sr + Xe + 2 neutrons",
          "stepTheme": "L'exemple du résumé : U-235 → Sr + Xe + 2 neutrons",
          "stepBadge": "L'exemple du résumé : U-235 → Sr + Xe + 2 neutrons",
          "paragraphText": "L'équation type produit deux noyaux de masse moyenne (94 et 140) et deux neutrons libres.\nOn vérifie les conservations : 235 + 1 = 94 + 140 + 2 et 92 = 38 + 54.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p03_q3",
            "type": "mcq",
            "prompt": "Dans la fission type du résumé, ²³⁵₉₂U + ¹₀n donne :",
            "options": [
              "Un seul noyau très lourd et un neutron",
              "Deux noyaux d'hélium",
              "⁹⁴₃₈Sr + ¹⁴⁰₅₄Xe + 2 neutrons",
              "¹⁴⁰₃₈Sr + ⁹⁴₅₄Xe sans neutron"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'exemple du §3, également complété dans l'activité 2."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La réaction en chaîne",
          "stepTheme": "La réaction en chaîne",
          "stepBadge": "La réaction en chaîne",
          "paragraphText": "Chaque fission libère 2 ou 3 neutrons ; chacun peut fissionner un autre noyau, qui en libère d'autres.\nSi rien ne contrôle ce processus, le nombre de fissions croît exponentiellement : c'est la réaction en chaîne.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p03_q4",
            "type": "mcq",
            "prompt": "La réaction en chaîne de fission est possible parce que chaque fission :",
            "options": [
              "Consomme tous les neutrons",
              "Émet un rayonnement γ",
              "Refroidit le combustible",
              "Libère des neutrons susceptibles de provoquer de nouvelles fissions"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la remarque du §3 du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Contrôlée : le réacteur ; incontrôlée : la bombe A",
          "stepTheme": "Contrôlée : le réacteur ; incontrôlée : la bombe A",
          "stepBadge": "Contrôlée : le réacteur ; incontrôlée : la bombe A",
          "paragraphText": "La même physique sert deux usages opposés selon le contrôle de la réaction en chaîne.\nLes réactions de fission contrôlées sont mises en œuvre dans les réacteurs nucléaires ; les incontrôlées, dans les bombes A.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p03_q5",
            "type": "mcq",
            "prompt": "Les réactions de fission contrôlées sont mises en œuvre dans :",
            "options": [
              "Les réacteurs nucléaires",
              "Les bombes A",
              "Les étoiles",
              "Les tubes à rayons X"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la fin de la remarque du §3 ; la bombe A correspond aux fissions incontrôlées."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La fission est provoquée, pas spontanée",
          "stepTheme": "La fission est provoquée, pas spontanée",
          "stepBadge": "La fission est provoquée, pas spontanée",
          "paragraphText": "Piège : contrairement aux radioactivités de la leçon 18, la fission exige un projectile — le neutron incident.\nC'est pour cela qu'elle appartient aux réactions nucléaires provoquées : sans neutron lent, l'uranium 235 attend (sa radioactivité α propre est extrêmement lente).",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p03_q6",
            "type": "mcq",
            "prompt": "La fission de l'uranium 235 est une réaction provoquée car elle nécessite :",
            "options": [
              "Un apport de chaleur",
              "L'impact d'un neutron sur le noyau",
              "Un champ magnétique",
              "Une pression énorme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le neutron incident figure dans toutes les équations de fission du résumé et des exercices."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p03_q1",
          "type": "mcq",
          "prompt": "Une réaction de fission nucléaire est :",
          "options": [
            "La scission d'un noyau lourd en deux noyaux légers plus stables sous l'impact d'un neutron",
            "L'union de deux noyaux légers",
            "Une désintégration α spontanée",
            "La capture d'un électron par le noyau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §3, reprise dans la situation d'évaluation et l'exercice 5."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p03_q2",
          "type": "mcq",
          "prompt": "Un noyau capable de se scinder sous l'impact d'un neutron est dit :",
          "options": [
            "Fertile",
            "Fissile",
            "Stable",
            "Radioactif β⁺"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le vocabulaire du §3 ; « fertile » désigne au contraire l'uranium 238 (exercice 3)."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p03_q3",
          "type": "mcq",
          "prompt": "Dans la fission type du résumé, ²³⁵₉₂U + ¹₀n donne :",
          "options": [
            "Un seul noyau très lourd et un neutron",
            "Deux noyaux d'hélium",
            "⁹⁴₃₈Sr + ¹⁴⁰₅₄Xe + 2 neutrons",
            "¹⁴⁰₃₈Sr + ⁹⁴₅₄Xe sans neutron"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'exemple du §3, également complété dans l'activité 2."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p03_q4",
          "type": "mcq",
          "prompt": "La réaction en chaîne de fission est possible parce que chaque fission :",
          "options": [
            "Consomme tous les neutrons",
            "Émet un rayonnement γ",
            "Refroidit le combustible",
            "Libère des neutrons susceptibles de provoquer de nouvelles fissions"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la remarque du §3 du résumé."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p03_q5",
          "type": "mcq",
          "prompt": "Les réactions de fission contrôlées sont mises en œuvre dans :",
          "options": [
            "Les réacteurs nucléaires",
            "Les bombes A",
            "Les étoiles",
            "Les tubes à rayons X"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la fin de la remarque du §3 ; la bombe A correspond aux fissions incontrôlées."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p03_q6",
          "type": "mcq",
          "prompt": "La fission de l'uranium 235 est une réaction provoquée car elle nécessite :",
          "options": [
            "Un apport de chaleur",
            "L'impact d'un neutron sur le noyau",
            "Un champ magnétique",
            "Une pression énorme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le neutron incident figure dans toutes les équations de fission du résumé et des exercices."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l19_nucleaires_provoquees_p04",
      "order": 4,
      "title": "La réaction de fusion nucléaire",
      "summary": "Deux noyaux légers s'unissent en un noyau plus lourd : réactions thermonucléaires du Soleil et des étoiles, encore non maîtrisées pour la production d'énergie.",
      "conceptExplanation": "Une réaction de fusion nucléaire est une réaction au cours de laquelle deux noyaux légers s'unissent pour former un noyau lourd ; ce sont des réactions thermonucléaires, car elles exigent des températures prodigieuses pour vaincre la répulsion électrique des noyaux.\nExemple du résumé : ²₁H + ³₁H → ⁴₂He + ¹₀n — un deutérium et un tritium donnent un noyau d'hélium et un neutron ; l'activité 2 complète aussi ²₁H + ²₁H → ³₂He + ¹₀n.\nL'application des fusions contrôlées à la production d'énergie est encore au stade de la recherche ; les fusions incontrôlées se produisent dans les bombes thermonucléaires, ou bombes H.\nCes réactions ont une très grande importance dans l'univers : elles se produisent dans le Soleil et les étoiles et sont à l'origine de l'énergie rayonnée par les astres.",
      "keyRule": "Fusion : légers + légers → plus lourd + énergie ; il faut des températures d'étoile pour l'amorcer.",
      "formulas": [],
      "workedExample": {
        "title": "L'activité 2 : classer trois réactions",
        "statement": "Complète puis classe : (a) ²³⁵₉₂U + ¹₀n → Sr + Xe + 2 ¹₀n ; (b) ²₁H + ²₁H → …He + ¹₀n ; (c) …K + ⁴₂He → ⁴²₂₀Ca + ¹₁H.",
        "methodSteps": [
          "Par conservation de A et Z : (a) ⁹⁴₃₈Sr et ¹⁴⁰₅₄Xe — un noyau lourd éclate : fission.",
          "(b) ³₂He : deux noyaux légers s'unissent : fusion.",
          "(c) ³⁹₁₉K : la solution la range parmi les fusions au sens large des réactions provoquées entre noyaux légers et particules."
        ],
        "conclusion": "Ce sont les complétions et classements de l'activité d'application 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition de la fusion",
          "stepTheme": "La définition de la fusion",
          "stepBadge": "La définition de la fusion",
          "paragraphText": "• Fusion nucléaire : deux noyaux légers s'unissent pour former un noyau lourd.\nC'est l'exact inverse, en schéma, de la fission.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p04_q1",
            "type": "mcq",
            "prompt": "Une réaction de fusion nucléaire est :",
            "options": [
              "L'union de deux noyaux légers pour former un noyau lourd",
              "La scission d'un noyau lourd",
              "L'émission d'un électron par un noyau",
              "La capture d'un neutron par un noyau lourd"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §4 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Des réactions thermonucléaires",
          "stepTheme": "Des réactions thermonucléaires",
          "stepBadge": "Des réactions thermonucléaires",
          "paragraphText": "Deux noyaux, tous deux positifs, se repoussent violemment : il faut une agitation thermique extrême pour les rapprocher jusqu'à la fusion.\nD'où leur nom de réactions thermonucléaires.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p04_q2",
            "type": "mcq",
            "prompt": "Les réactions de fusion sont dites thermonucléaires parce qu'elles exigent :",
            "options": [
              "Un refroidissement extrême",
              "Des températures prodigieuses pour vaincre la répulsion des noyaux positifs",
              "Un catalyseur chimique",
              "Une forte pression atmosphérique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la précision du §4 du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'exemple : deutérium + tritium → hélium + neutron",
          "stepTheme": "L'exemple : deutérium + tritium → hélium + neutron",
          "stepBadge": "L'exemple : deutérium + tritium → hélium + neutron",
          "paragraphText": "L'équation du résumé associe les deux isotopes lourds de l'hydrogène.\nLes conservations sont vérifiées : 2 + 3 = 4 + 1 pour A, et 1 + 1 = 2 + 0 pour Z.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p04_q3",
            "type": "mcq",
            "prompt": "La réaction de fusion donnée en exemple dans le résumé est :",
            "options": [
              "²³⁵U + neutron → Sr + Xe",
              "¹⁴C → ¹⁴N + électron",
              "²₁H + ³₁H → ⁴₂He + ¹₀n",
              "⁴He → 2 protons + 2 neutrons"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'exemple du §4 : deutérium et tritium donnent l'hélium 4 et un neutron."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'énergie des étoiles",
          "stepTheme": "L'énergie des étoiles",
          "stepBadge": "L'énergie des étoiles",
          "paragraphText": "Les réactions thermonucléaires ont une très grande importance dans l'univers.\nElles se produisent dans le Soleil et les étoiles et sont à l'origine de l'énergie rayonnée par les astres.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p04_q4",
            "type": "mcq",
            "prompt": "L'énergie rayonnée par le Soleil et les étoiles provient :",
            "options": [
              "De la fission de l'uranium",
              "De combustions chimiques",
              "De la radioactivité α",
              "De réactions de fusion thermonucléaires en leur cœur"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la dernière phrase du §4 du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Contrôlée : encore de la recherche ; incontrôlée : la bombe H",
          "stepTheme": "Contrôlée : encore de la recherche ; incontrôlée : la bombe H",
          "stepBadge": "Contrôlée : encore de la recherche ; incontrôlée : la bombe H",
          "paragraphText": "Contrairement à la fission, la fusion contrôlée pour produire de l'énergie n'est pas encore industrialisée.\nLe résumé le dit : son application à la production d'énergie est encore au stade de la recherche, alors que la version incontrôlée existe — la bombe thermonucléaire ou bombe H.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p04_q5",
            "type": "mcq",
            "prompt": "La fusion nucléaire contrôlée pour la production d'énergie en est :",
            "options": [
              "Encore au stade de la recherche",
              "Largement industrialisée depuis un siècle",
              "Interdite par la physique",
              "Utilisée dans toutes les centrales actuelles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'état des lieux du §4 ; les centrales actuelles utilisent la fission."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Fission et fusion libèrent de l'énergie pour la même raison",
          "stepTheme": "Fission et fusion libèrent de l'énergie pour la même raison",
          "stepBadge": "Fission et fusion libèrent de l'énergie pour la même raison",
          "paragraphText": "Piège : les deux réactions opposées libèrent de l'énergie parce que, dans les deux cas, les produits ont une énergie de liaison par nucléon supérieure à celle des réactifs.\nLes noyaux moyens sont les plus stables : on y arrive en cassant les très lourds (fission) ou en assemblant les très légers (fusion).",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p04_q6",
            "type": "mcq",
            "prompt": "Fission et fusion libèrent toutes deux de l'énergie parce que leurs produits :",
            "options": [
              "Sont radioactifs",
              "Ont une énergie de liaison par nucléon supérieure à celle des réactifs",
              "Sont plus lourds que les réactifs",
              "Émettent des rayons γ"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le bilan des énergies de liaison du point 5, appliqué aux deux réactions."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p04_q1",
          "type": "mcq",
          "prompt": "Une réaction de fusion nucléaire est :",
          "options": [
            "L'union de deux noyaux légers pour former un noyau lourd",
            "La scission d'un noyau lourd",
            "L'émission d'un électron par un noyau",
            "La capture d'un neutron par un noyau lourd"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §4 du résumé."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p04_q2",
          "type": "mcq",
          "prompt": "Les réactions de fusion sont dites thermonucléaires parce qu'elles exigent :",
          "options": [
            "Un refroidissement extrême",
            "Des températures prodigieuses pour vaincre la répulsion des noyaux positifs",
            "Un catalyseur chimique",
            "Une forte pression atmosphérique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la précision du §4 du résumé."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p04_q3",
          "type": "mcq",
          "prompt": "La réaction de fusion donnée en exemple dans le résumé est :",
          "options": [
            "²³⁵U + neutron → Sr + Xe",
            "¹⁴C → ¹⁴N + électron",
            "²₁H + ³₁H → ⁴₂He + ¹₀n",
            "⁴He → 2 protons + 2 neutrons"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'exemple du §4 : deutérium et tritium donnent l'hélium 4 et un neutron."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p04_q4",
          "type": "mcq",
          "prompt": "L'énergie rayonnée par le Soleil et les étoiles provient :",
          "options": [
            "De la fission de l'uranium",
            "De combustions chimiques",
            "De la radioactivité α",
            "De réactions de fusion thermonucléaires en leur cœur"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la dernière phrase du §4 du résumé."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p04_q5",
          "type": "mcq",
          "prompt": "La fusion nucléaire contrôlée pour la production d'énergie en est :",
          "options": [
            "Encore au stade de la recherche",
            "Largement industrialisée depuis un siècle",
            "Interdite par la physique",
            "Utilisée dans toutes les centrales actuelles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'état des lieux du §4 ; les centrales actuelles utilisent la fission."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p04_q6",
          "type": "mcq",
          "prompt": "Fission et fusion libèrent toutes deux de l'énergie parce que leurs produits :",
          "options": [
            "Sont radioactifs",
            "Ont une énergie de liaison par nucléon supérieure à celle des réactifs",
            "Sont plus lourds que les réactifs",
            "Émettent des rayons γ"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le bilan des énergies de liaison du point 5, appliqué aux deux réactions."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l19_nucleaires_provoquees_p05",
      "order": 5,
      "title": "L'énergie libérée par une fission : le bilan des énergies de liaison",
      "summary": "La situation chiffre une fission en réacteur : produits plus liés que l'uranium (8,7 et 8,37 contre 7,59 MeV/nucléon), énergie libérée 196,59 MeV, soit 3,15 × 10⁻¹¹ J par fission.",
      "conceptExplanation": "La situation d'évaluation étudie une fission en réacteur à eau sous pression : ²³⁵₉₂U + ¹₀n → ⁹¹Zr + Ce + 3 ¹₀n + 6 ⁰₋₁e, complétée par les conservations en ⁹¹₄₀Zr et ¹⁴²₅₈Ce (a = 142, b = 40).\nL'énergie libérée se calcule comme l'excès d'énergie de liaison des produits sur celle de l'uranium : les noyaux formés sont plus liés par nucléon (8,7 et 8,37 MeV) que l'uranium (7,59 MeV par nucléon dans le tableau des données).\nLe bilan donne E = 91 × 8,7 + 142 × 8,37 − 235 × 7,59 = 196,59 MeV, soit 3,15 × 10⁻¹¹ J pour une seule fission.\nÀ l'échelle macroscopique, l'exercice 5 évalue l'énergie libérée par un kilogramme d'uranium à 8,23 × 10¹³ J en valeur absolue : c'est l'immensité de ce chiffre qui explique l'intérêt — et le danger — de l'énergie nucléaire.",
      "keyRule": "E libérée = somme des EL des produits − EL des réactifs : positive si les produits sont plus liés par nucléon.",
      "formulas": [
        {
          "name": "Énergie libérée par une réaction nucléaire",
          "formula": "E = \\sum E_L(\\text{produits}) - \\sum E_L(\\text{réactifs})",
          "note": "Chaque EL s'obtient par (EL/A) × A du noyau concerné."
        }
      ],
      "workedExample": {
        "title": "La situation : compléter puis chiffrer la fission",
        "statement": "La fission du réacteur s'écrit ²³⁵₉₂U + ¹₀n → ⁹¹_bZr + ᵃ₅₈Ce + 3 ¹₀n + 6 ⁰₋₁e. Détermine a et b, puis l'énergie libérée à partir des énergies par nucléon (U : 7,59 ; Zr : 8,7 ; Ce : 8,37 MeV).",
        "methodSteps": [
          "Conservation de A : 235 + 1 = 91 + a + 3, donc a = 142 ; conservation de Z : 92 = b + 58 − 6, donc b = 40.",
          "Énergies de liaison totales : on multiplie chaque valeur par nucléon par le nombre de nucléons du noyau.",
          "Le bilan donne E = 196,59 MeV, soit 3,15 × 10⁻¹¹ J."
        ],
        "conclusion": "Ce sont les résultats des questions 2 et 3.2 de la situation d'évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Compléter l'équation par les conservations",
          "stepTheme": "Compléter l'équation par les conservations",
          "stepBadge": "Compléter l'équation par les conservations",
          "paragraphText": "La présence de particules β⁻ parmi les produits (les noyaux formés, instables, se désintègrent par radioactivité β⁻) ajoute leur charge au bilan.\nOn applique donc les deux conservations en comptant toutes les particules écrites, y compris les 6 électrons.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p05_q1",
            "type": "mcq",
            "prompt": "Dans la fission de la situation, les valeurs qui complètent l'équation (⁹¹_bZr et ᵃ₅₈Ce) sont :",
            "options": [
              "a = 142 et b = 40",
              "a = 140 et b = 38",
              "a = 142 et b = 46",
              "a = 91 et b = 58"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Conservation de A : a = 142 ; conservation de Z en comptant les 6 β⁻ : b = 40 (question 2)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le principe du bilan énergétique",
          "stepTheme": "Le principe du bilan énergétique",
          "stepBadge": "Le principe du bilan énergétique",
          "paragraphText": "L'énergie libérée par une réaction nucléaire est l'énergie de liaison gagnée entre l'état initial et l'état final.\nSi les produits sont plus liés que les réactifs, la différence est libérée (chaleur, rayonnements, énergie cinétique).",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p05_q2",
            "type": "mcq",
            "prompt": "L'énergie libérée par une réaction nucléaire s'obtient par :",
            "options": [
              "La somme des masses des produits",
              "La différence entre la somme des énergies de liaison des produits et celle des réactifs",
              "Le produit de A par Z",
              "La différence des nombres de masse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la méthode de la question 3.2 de la situation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "196,59 MeV par fission, soit 3,15 × 10⁻¹¹ J",
          "stepTheme": "196,59 MeV par fission, soit 3,15 × 10⁻¹¹ J",
          "stepBadge": "196,59 MeV par fission, soit 3,15 × 10⁻¹¹ J",
          "paragraphText": "Le bilan de la situation surpasse de loin les énergies chimiques, qui sont de l'ordre de l'électron-volt par atome.\nConverti avec 1 MeV = 1,6 × 10⁻¹³ J, il donne 3,15 × 10⁻¹¹ J pour un seul noyau fissionné.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p05_q3",
            "type": "mcq",
            "prompt": "L'énergie libérée par la fission étudiée dans la situation vaut :",
            "options": [
              "7,59 MeV",
              "66,98 MeV",
              "196,59 MeV, soit 3,15 × 10⁻¹¹ J",
              "1743,58 MeV"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le résultat de la question 3.2 ; 1743,58 MeV est l'énergie de liaison totale de l'uranium, pas l'énergie libérée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les produits sont plus liés que l'uranium",
          "stepTheme": "Les produits sont plus liés que l'uranium",
          "stepBadge": "Les produits sont plus liés que l'uranium",
          "paragraphText": "Le tableau des données donne 8,7 MeV par nucléon pour le zirconium 91 et 8,37 pour le cérium 142, contre 7,59 pour l'uranium 235.\nCe gain d'environ 1 MeV par nucléon, multiplié par 235 nucléons, est la source de l'énergie de fission.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p05_q4",
            "type": "mcq",
            "prompt": "La fission de l'uranium libère de l'énergie parce que les noyaux produits (8,7 et 8,37 MeV/nucléon) sont :",
            "options": [
              "Plus légers que l'uranium",
              "Chargés négativement",
              "Non radioactifs",
              "Plus liés par nucléon que l'uranium (7,59 MeV/nucléon)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la lecture du tableau des données de la situation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un kilogramme d'uranium : 8,23 × 10¹³ J",
          "stepTheme": "Un kilogramme d'uranium : 8,23 × 10¹³ J",
          "stepBadge": "Un kilogramme d'uranium : 8,23 × 10¹³ J",
          "paragraphText": "L'exercice 5 multiplie l'énergie d'une fission (perte de masse 0,215 u pour sa réaction) par le nombre de noyaux d'un kilogramme, via la constante d'Avogadro.\nLe résultat, 8,23 × 10¹³ J en valeur absolue, équivaut à l'énergie de milliers de tonnes de combustible fossile.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p05_q5",
            "type": "mcq",
            "prompt": "L'énergie libérée par la fission complète d'un kilogramme d'uranium (exercice 5) est de l'ordre de :",
            "options": [
              "8,23 × 10¹³ J",
              "3,15 × 10⁻¹¹ J",
              "196,59 J",
              "1,6 × 10⁻¹³ J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "3,15 × 10⁻¹¹ J est l'énergie d'une seule fission (situation) ; le kilogramme en contient un nombre d'Avogadro d'atomes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le signe de Δm dans les exercices",
          "stepTheme": "Le signe de Δm dans les exercices",
          "stepBadge": "Le signe de Δm dans les exercices",
          "paragraphText": "Piège : les exercices 1 et 5 calculent Δm = (masses des produits) − (masses des réactifs), qui sort négatif pour une réaction qui libère de l'énergie.\nL'énergie libérée est la valeur absolue : 177,5 MeV dans l'exercice 1, à comparer aux 196,59 MeV de la situation — chaque fission a son bilan propre.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p05_q6",
            "type": "mcq",
            "prompt": "Quand le calcul donne Δm négatif (produits moins massifs que les réactifs), la réaction :",
            "options": [
              "Est impossible",
              "Libère une énergie égale à la valeur absolue de Δm·c²",
              "Absorbe de l'énergie",
              "Viole la conservation de la masse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la convention des exercices 1 et 5 : E = −177,5 MeV signifie 177,5 MeV libérés."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p05_q1",
          "type": "mcq",
          "prompt": "Dans la fission de la situation, les valeurs qui complètent l'équation (⁹¹_bZr et ᵃ₅₈Ce) sont :",
          "options": [
            "a = 142 et b = 40",
            "a = 140 et b = 38",
            "a = 142 et b = 46",
            "a = 91 et b = 58"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Conservation de A : a = 142 ; conservation de Z en comptant les 6 β⁻ : b = 40 (question 2)."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p05_q2",
          "type": "mcq",
          "prompt": "L'énergie libérée par une réaction nucléaire s'obtient par :",
          "options": [
            "La somme des masses des produits",
            "La différence entre la somme des énergies de liaison des produits et celle des réactifs",
            "Le produit de A par Z",
            "La différence des nombres de masse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la méthode de la question 3.2 de la situation."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p05_q3",
          "type": "mcq",
          "prompt": "L'énergie libérée par la fission étudiée dans la situation vaut :",
          "options": [
            "7,59 MeV",
            "66,98 MeV",
            "196,59 MeV, soit 3,15 × 10⁻¹¹ J",
            "1743,58 MeV"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le résultat de la question 3.2 ; 1743,58 MeV est l'énergie de liaison totale de l'uranium, pas l'énergie libérée."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p05_q4",
          "type": "mcq",
          "prompt": "La fission de l'uranium libère de l'énergie parce que les noyaux produits (8,7 et 8,37 MeV/nucléon) sont :",
          "options": [
            "Plus légers que l'uranium",
            "Chargés négativement",
            "Non radioactifs",
            "Plus liés par nucléon que l'uranium (7,59 MeV/nucléon)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la lecture du tableau des données de la situation."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p05_q5",
          "type": "mcq",
          "prompt": "L'énergie libérée par la fission complète d'un kilogramme d'uranium (exercice 5) est de l'ordre de :",
          "options": [
            "8,23 × 10¹³ J",
            "3,15 × 10⁻¹¹ J",
            "196,59 J",
            "1,6 × 10⁻¹³ J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "3,15 × 10⁻¹¹ J est l'énergie d'une seule fission (situation) ; le kilogramme en contient un nombre d'Avogadro d'atomes."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p05_q6",
          "type": "mcq",
          "prompt": "Quand le calcul donne Δm négatif (produits moins massifs que les réactifs), la réaction :",
          "options": [
            "Est impossible",
            "Libère une énergie égale à la valeur absolue de Δm·c²",
            "Absorbe de l'énergie",
            "Viole la conservation de la masse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la convention des exercices 1 et 5 : E = −177,5 MeV signifie 177,5 MeV libérés."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l19_nucleaires_provoquees_p06",
      "order": 6,
      "title": "Applications et dangers de la radioactivité ; la filière fertile",
      "summary": "Médecine, industrie, agronomie, datation : la radioactivité rend des services ; déchets, irradiations et armes sont ses dangers. L'uranium 238 fertile régénère du plutonium fissile dans les surrégénérateurs.",
      "conceptExplanation": "La radioactivité est utilisée en médecine (radiologie, traitement des tumeurs, analyses chimiques par spectrographie), dans l'industrie (contrôles d'épaisseur, de soudures…), en agronomie (modifications génétiques pour obtenir des semences améliorées) et pour la datation au carbone 14 des objets anciens.\nEn contrepartie, s'exposer à des déchets radioactifs et à des réactions nucléaires incontrôlées expose à l'irradiation, et les bombes nucléaires font planer sur la planète le risque d'une guerre désastreuse — la situation d'apprentissage partait des fuites de la centrale de Fukushima.\nL'exercice 3 montre une valorisation élégante : l'uranium 238, non fissile, est dit fertile : il capte un neutron pour donner l'uranium 239, qui par deux désintégrations β⁻ successives devient du neptunium 239 puis du plutonium 239, fissile comme l'uranium 235.\nDans les surrégénérateurs (type Phénix), le couple fissile-fertile plutonium 239 / uranium 238 régénère une partie du combustible : les neutrons de fission du plutonium recréent du plutonium à partir de l'uranium 238.",
      "keyRule": "La radioactivité sert partout où un rayonnement pénétrant ou un traceur est utile — et se paie en risques d'irradiation à maîtriser.",
      "formulas": [],
      "workedExample": {
        "title": "Les activités du quotidien (documentation)",
        "statement": "Donne l'ordre de grandeur de l'activité d'un litre d'eau de mer, d'un homme de 70 kg et d'un minerai d'uranium, d'après le tableau de la documentation.",
        "methodSteps": [
          "Eau de mer : environ 10 Bq par litre ; lait : 80 Bq par litre.",
          "Homme de 70 kg : 7000 Bq au total, soit 100 Bq par kilogramme.",
          "Minerai d'uranium : 25 millions de Bq — sans commune mesure avec les objets quotidiens."
        ],
        "conclusion": "Ce sont les valeurs du tableau du Laboratoire Souterrain de Modane reproduit dans la documentation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Les applications médicales",
          "stepTheme": "Les applications médicales",
          "stepBadge": "Les applications médicales",
          "paragraphText": "Le §5 cite la radiologie, le traitement des tumeurs et les analyses chimiques (spectrographie).\nLa documentation complète le tableau : un radioisotope pour les diagnostics médicaux affiche 70 millions de Bq.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p06_q1",
            "type": "mcq",
            "prompt": "En médecine, la radioactivité est utilisée pour :",
            "options": [
              "La radiologie, le traitement des tumeurs et certaines analyses",
              "La stérilisation des aliments uniquement",
              "La production d'électricité",
              "Aucune application"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les applications médicales du §5 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les applications industrielles et agronomiques",
          "stepTheme": "Les applications industrielles et agronomiques",
          "stepBadge": "Les applications industrielles et agronomiques",
          "paragraphText": "Dans l'industrie, les rayonnements contrôlent l'épaisseur des matériaux et la qualité des soudures sans les détruire.\nEn agronomie, ils permettent des modifications génétiques pour obtenir des semences améliorées ; s'y ajoute la datation au carbone 14 des vestiges.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p06_q2",
            "type": "mcq",
            "prompt": "Dans l'industrie, la radioactivité permet notamment :",
            "options": [
              "De souder les métaux",
              "Les contrôles d'épaisseur et de soudures",
              "De refroidir les réacteurs",
              "De produire des rayons X domestiques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les applications industrielles du §5 du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le danger principal : l'irradiation",
          "stepTheme": "Le danger principal : l'irradiation",
          "stepBadge": "Le danger principal : l'irradiation",
          "paragraphText": "Le §5 avertit : exposé à des déchets radioactifs et à des réactions nucléaires incontrôlées, l'on risque d'être irradié.\nL'accident de Fukushima, point de départ de la leçon, illustre la perte de contrôle d'un réacteur et les fuites de produits radioactifs.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p06_q3",
            "type": "mcq",
            "prompt": "Le risque sanitaire lié aux déchets radioactifs et aux réactions incontrôlées est :",
            "options": [
              "L'électrocution",
              "L'explosion chimique",
              "L'irradiation des personnes exposées",
              "La pollution sonore"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le danger énoncé au §5, illustré par la situation d'apprentissage (Fukushima)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le risque des armes nucléaires",
          "stepTheme": "Le risque des armes nucléaires",
          "stepBadge": "Le risque des armes nucléaires",
          "paragraphText": "Le résumé conclut sa liste des dangers par les bombes nucléaires, qui font planer sur la planète les risques d'une guerre désastreuse.\nBombe A (fission incontrôlée) et bombe H (fusion incontrôlée) en sont les deux formes.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p06_q4",
            "type": "mcq",
            "prompt": "Le §5 cite comme danger majeur, à l'échelle de la planète :",
            "options": [
              "Les déchets ménagers",
              "Les centrales solaires",
              "Les barrages hydroélectriques",
              "Les bombes nucléaires et le risque de guerre désastreuse"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la dernière phrase du §5 du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'uranium 238 fertile devient du plutonium fissile",
          "stepTheme": "L'uranium 238 fertile devient du plutonium fissile",
          "stepBadge": "L'uranium 238 fertile devient du plutonium fissile",
          "paragraphText": "L'exercice 3 enchaîne : capture d'un neutron par ²³⁸U → ²³⁹U ; désintégration β⁻ → ²³⁹Np ; nouvelle désintégration β⁻ → ²³⁹Pu, fissile.\nL'uranium 238, inutilisable directement comme combustible de fission, est donc « fertile » : il engendre un noyau fissile.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p06_q5",
            "type": "mcq",
            "prompt": "L'uranium 238 est dit fertile parce qu'après capture d'un neutron, deux désintégrations β⁻ le transforment en :",
            "options": [
              "Plutonium 239, qui est fissile",
              "Uranium 235 directement",
              "Thorium 232",
              "Plomb 206 stable"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les équations de l'exercice 3 : ²³⁹U → ²³⁹Np → ²³⁹Pu."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "L'intérêt des surrégénérateurs",
          "stepTheme": "L'intérêt des surrégénérateurs",
          "stepBadge": "L'intérêt des surrégénérateurs",
          "paragraphText": "Dans un surrégénérateur (type Phénix), le combustible associe le fissile (plutonium 239) et le fertile (uranium 238).\nLa fission du plutonium engendre des neutrons qui, en réagissant avec l'uranium 238, donnent naissance à du plutonium 239 : on régénère donc une partie du combustible.",
          "exercise": {
            "id": "terminale_c_physique_l19_nucleaires_provoquees_p06_q6",
            "type": "mcq",
            "prompt": "L'intérêt du combustible fissile-fertile des surrégénérateurs est que :",
            "options": [
              "Il ne produit aucun déchet",
              "Une partie du combustible fissile est régénérée à partir de l'uranium 238 fertile",
              "Il fonctionne sans neutrons",
              "Il utilise la fusion nucléaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la réponse à la question 3 de l'exercice 3."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p06_q1",
          "type": "mcq",
          "prompt": "En médecine, la radioactivité est utilisée pour :",
          "options": [
            "La radiologie, le traitement des tumeurs et certaines analyses",
            "La stérilisation des aliments uniquement",
            "La production d'électricité",
            "Aucune application"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les applications médicales du §5 du résumé."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p06_q2",
          "type": "mcq",
          "prompt": "Dans l'industrie, la radioactivité permet notamment :",
          "options": [
            "De souder les métaux",
            "Les contrôles d'épaisseur et de soudures",
            "De refroidir les réacteurs",
            "De produire des rayons X domestiques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les applications industrielles du §5 du résumé."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p06_q3",
          "type": "mcq",
          "prompt": "Le risque sanitaire lié aux déchets radioactifs et aux réactions incontrôlées est :",
          "options": [
            "L'électrocution",
            "L'explosion chimique",
            "L'irradiation des personnes exposées",
            "La pollution sonore"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le danger énoncé au §5, illustré par la situation d'apprentissage (Fukushima)."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p06_q4",
          "type": "mcq",
          "prompt": "Le §5 cite comme danger majeur, à l'échelle de la planète :",
          "options": [
            "Les déchets ménagers",
            "Les centrales solaires",
            "Les barrages hydroélectriques",
            "Les bombes nucléaires et le risque de guerre désastreuse"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la dernière phrase du §5 du résumé."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p06_q5",
          "type": "mcq",
          "prompt": "L'uranium 238 est dit fertile parce qu'après capture d'un neutron, deux désintégrations β⁻ le transforment en :",
          "options": [
            "Plutonium 239, qui est fissile",
            "Uranium 235 directement",
            "Thorium 232",
            "Plomb 206 stable"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les équations de l'exercice 3 : ²³⁹U → ²³⁹Np → ²³⁹Pu."
        },
        {
          "id": "terminale_c_physique_l19_nucleaires_provoquees_p06_q6",
          "type": "mcq",
          "prompt": "L'intérêt du combustible fissile-fertile des surrégénérateurs est que :",
          "options": [
            "Il ne produit aucun déchet",
            "Une partie du combustible fissile est régénérée à partir de l'uranium 238 fertile",
            "Il fonctionne sans neutrons",
            "Il utilise la fusion nucléaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la réponse à la question 3 de l'exercice 3."
        }
      ]
    }
  ]
};
