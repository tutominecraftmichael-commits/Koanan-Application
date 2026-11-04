import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 2nde H3-les techniques de devoirs.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const HIST_2DE_L03_METHODOLOGIE_DISSERTATION_COMMENTAIRE: CurriculumChapter = {
  "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire",
  "subjectId": "histoire_geo",
  "gradeLevel": "seconde_a",
  "alsoForGrades": [],
  "order": 3,
  "title": "Leçon 3 : La méthodologie de la dissertation et du commentaire de document",
  "summary": "La structure et la démarche de la dissertation, les types de sujets, et la technique du commentaire de document.",
  "officialVolumeHours": 2,
  "contentVersion": 2,
  "source": "2nde H3-les techniques de devoirs.pdf",
  "points": [
    {
      "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p01",
      "order": 1,
      "title": "La dissertation et sa structure",
      "summary": "Ce qu'est une dissertation, son introduction, son développement et sa conclusion.",
      "conceptExplanation": "La dissertation est un exercice rédigé qui consiste à organiser avec méthode des connaissances sur un sujet donné. Elle mesure la capacité de réflexion et de construction de la pensée. Elle demande une bonne connaissance des leçons, une culture générale et la maîtrise de la rédaction.\n\nElle comprend trois parties :\n1. L'introduction, en trois éléments : la présentation du sujet (le situer dans le temps et/ou l'espace, expliquer les termes, les bornes chronologiques), la problématique (la question essentielle posée par le sujet, de préférence sous forme interrogative) et l'annonce du plan.\n2. Le développement : deux parties au minimum, trois au maximum. Chaque partie a une phrase introductive, des sous-parties en paragraphes argumentés et une transition (conclusion partielle et ouverture vers la partie suivante).\n3. La conclusion, en trois éléments : le bilan, la réponse à la problématique et l'ouverture.\n\nSur la copie, on saute deux lignes entre l'introduction, le développement et la conclusion, et une ligne entre les parties du développement.",
      "keyRule": "Introduction (présentation, problématique, plan) ; développement (2 ou 3 parties) ; conclusion (bilan, réponse, ouverture).",
      "formulas": [],
      "workedExample": {
        "title": "Ranger les éléments",
        "statement": "Où placer : le contexte historique, les transitions, le bilan, l'annonce du plan ?",
        "methodSteps": [
          "Le contexte historique et l'annonce du plan : dans l'introduction.",
          "Les transitions : dans le développement.",
          "Le bilan : dans la conclusion."
        ],
        "conclusion": "Chaque élément a sa place précise dans la dissertation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La dissertation",
          "stepTheme": "La dissertation",
          "stepBadge": "La dissertation",
          "paragraphText": "La dissertation est un exercice rédigé qui consiste à organiser avec méthode des connaissances sur un sujet donné.\nElle mesure la capacité de réflexion et de construction de la pensée.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p01_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une dissertation ?",
            "options": [
              "Une série de questions courtes posées sous un document",
              "Un résumé recopié de la leçon du professeur",
              "Un exercice rédigé qui organise avec méthode des connaissances sur un sujet",
              "Une liste de dates à apprendre par cœur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La dissertation est un devoir entièrement rédigé, organisé selon un plan."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Trois parties",
          "stepTheme": "Trois parties",
          "stepBadge": "Trois parties",
          "paragraphText": "La dissertation comprend trois parties :\n• l'introduction ;\n• le développement (le corps du devoir) ;\n• la conclusion.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p01_q2",
            "type": "mcq",
            "prompt": "Quelles sont les trois parties d'une dissertation ?",
            "options": [
              "L'introduction, le développement et la conclusion",
              "Le titre, le résumé et la bibliographie",
              "La question, la réponse et la note",
              "Le brouillon, la copie et la correction"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Introduction, développement, conclusion : la structure de toute dissertation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'introduction",
          "stepTheme": "L'introduction",
          "stepBadge": "L'introduction",
          "paragraphText": "L'introduction comprend trois éléments :\n• la présentation du sujet (le situer dans le temps et l'espace, expliquer les termes) ;\n• la problématique ;\n• l'annonce du plan.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p01_q3",
            "type": "mcq",
            "prompt": "Lequel de ces éléments fait partie de l'introduction ?",
            "options": [
              "Le bilan",
              "L'ouverture",
              "Les transitions",
              "L'annonce du plan"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'annonce du plan termine l'introduction ; bilan et ouverture sont dans la conclusion."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La problématique",
          "stepTheme": "La problématique",
          "stepBadge": "La problématique",
          "paragraphText": "La problématique est la question essentielle soulevée par le sujet : c'est le fil directeur du devoir.\nOn la formule de préférence sous forme interrogative.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p01_q4",
            "type": "mcq",
            "prompt": "Qu'est-ce que la problématique d'une dissertation ?",
            "options": [
              "La liste des difficultés rencontrées par l'élève",
              "La question essentielle soulevée par le sujet, fil directeur du devoir",
              "Le résumé de la conclusion",
              "Le titre de la première partie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La problématique est la question à laquelle tout le devoir répond."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le développement",
          "stepTheme": "Le développement",
          "stepBadge": "Le développement",
          "paragraphText": "Le développement comporte deux parties au minimum et trois au maximum.\nChaque partie a :\n• une phrase introductive ;\n• des sous-parties en paragraphes argumentés ;\n• une transition (conclusion partielle et ouverture vers la partie suivante).",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p01_q5",
            "type": "mcq",
            "prompt": "Combien de parties le développement d'une dissertation comporte-t-il ?",
            "options": [
              "Une seule partie très longue",
              "Deux au minimum, trois au maximum",
              "Exactement cinq parties",
              "Autant que l'élève le souhaite"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Deux ou trois parties, organisées autour des idées principales du plan."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La conclusion",
          "stepTheme": "La conclusion",
          "stepBadge": "La conclusion",
          "paragraphText": "La conclusion comprend trois éléments :\n• le bilan (rappel des points forts) ;\n• la réponse à la problématique ;\n• l'ouverture (élargissement de la réflexion).",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p01_q6",
            "type": "mcq",
            "prompt": "Lequel de ces éléments fait partie de la conclusion ?",
            "options": [
              "L'annonce du plan",
              "Le contexte historique",
              "La phrase introductive de la partie I",
              "La réponse à la problématique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La conclusion répond à la question posée dans l'introduction."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "La présentation de la copie",
          "stepTheme": "La présentation de la copie",
          "stepBadge": "La présentation de la copie",
          "paragraphText": "Sur la copie :\n• on saute deux lignes entre l'introduction, le développement et la conclusion ;\n• on saute une ligne entre les parties du développement.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p01_q7",
            "type": "mcq",
            "prompt": "Combien de lignes saute-t-on entre l'introduction et le développement ?",
            "options": [
              "Deux lignes",
              "Une ligne",
              "Aucune ligne",
              "Une page entière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux lignes entre les grandes parties ; une ligne entre les parties du développement."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p01_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une dissertation ?",
          "options": [
            "Une série de questions courtes posées sous un document",
            "Un résumé recopié de la leçon du professeur",
            "Un exercice rédigé qui organise avec méthode des connaissances sur un sujet",
            "Une liste de dates à apprendre par cœur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La dissertation est un devoir entièrement rédigé, organisé selon un plan."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p01_q2",
          "type": "mcq",
          "prompt": "Quelles sont les trois parties d'une dissertation ?",
          "options": [
            "L'introduction, le développement et la conclusion",
            "Le titre, le résumé et la bibliographie",
            "La question, la réponse et la note",
            "Le brouillon, la copie et la correction"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Introduction, développement, conclusion : la structure de toute dissertation."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p01_q3",
          "type": "mcq",
          "prompt": "Lequel de ces éléments fait partie de l'introduction ?",
          "options": [
            "Le bilan",
            "L'ouverture",
            "Les transitions",
            "L'annonce du plan"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'annonce du plan termine l'introduction ; bilan et ouverture sont dans la conclusion."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p01_q4",
          "type": "mcq",
          "prompt": "Qu'est-ce que la problématique d'une dissertation ?",
          "options": [
            "La liste des difficultés rencontrées par l'élève",
            "La question essentielle soulevée par le sujet, fil directeur du devoir",
            "Le résumé de la conclusion",
            "Le titre de la première partie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La problématique est la question à laquelle tout le devoir répond."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p01_q5",
          "type": "mcq",
          "prompt": "Combien de parties le développement d'une dissertation comporte-t-il ?",
          "options": [
            "Une seule partie très longue",
            "Deux au minimum, trois au maximum",
            "Exactement cinq parties",
            "Autant que l'élève le souhaite"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Deux ou trois parties, organisées autour des idées principales du plan."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p01_q6",
          "type": "mcq",
          "prompt": "Lequel de ces éléments fait partie de la conclusion ?",
          "options": [
            "L'annonce du plan",
            "Le contexte historique",
            "La phrase introductive de la partie I",
            "La réponse à la problématique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La conclusion répond à la question posée dans l'introduction."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p01_q7",
          "type": "mcq",
          "prompt": "Combien de lignes saute-t-on entre l'introduction et le développement ?",
          "options": [
            "Deux lignes",
            "Une ligne",
            "Aucune ligne",
            "Une page entière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux lignes entre les grandes parties ; une ligne entre les parties du développement."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p02",
      "order": 2,
      "title": "Les types de sujets et de plans",
      "summary": "Reconnaître le type de sujet pour choisir le bon plan.",
      "conceptExplanation": "Chaque type de sujet appelle un type de plan (à titre indicatif) :\n- Sujet comparatif (ex. : étude comparée de l'organisation des Krou et des Akan lagunaires) : I. Les ressemblances ; II. Les différences.\n- Sujet évolutif ou chronologique (ex. : la Côte d'Ivoire de 1944 à 1960) : des parties qui suivent les périodes (l'espoir 1944-1947 ; la lutte 1947-1950 ; la collaboration 1950-1960).\n- Sujet dialectique (ex. : la colonisation a-t-elle été un mal nécessaire pour l'Afrique ?) : I. Aller dans le sens du sujet ; II. Relever les limites.\n- Sujet analytique ou thématique (ex. : l'agriculture dans l'économie ivoirienne) : conditions, apport, problèmes et solutions.\n- Sujet tableau (ex. : les secteurs d'activités en Côte d'Ivoire) : primaire, secondaire, tertiaire.\n- Sujet inventaire (ex. : les atouts du développement de la Côte d'Ivoire) : atouts naturels, humains, politiques.\n- Sujet avec « et » (ex. : les USA et le bloc occidental) : le plan dépend du sens du mot « et ».",
      "keyRule": "Comparatif → ressemblances/différences ; chronologique → périodes ; dialectique → pour/limites ; tableau → secteurs ; inventaire → atouts.",
      "formulas": [],
      "workedExample": {
        "title": "Reconnaître un sujet",
        "statement": "« Les sources écrites suffisent-elles pour écrire l'histoire de l'Afrique ? » Quel type de sujet ?",
        "methodSteps": [
          "Le sujet pose une question qui invite à peser le pour et le contre.",
          "C'est un sujet dialectique.",
          "Plan : I. Ce que les écrits apportent ; II. Leurs limites (et l'apport des autres sources)."
        ],
        "conclusion": "Un sujet en forme de question à débattre appelle un plan dialectique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le sujet comparatif",
          "stepTheme": "Le sujet comparatif",
          "stepBadge": "Le sujet comparatif",
          "paragraphText": "Un sujet comparatif demande de comparer deux réalités.\nPlan : I. Les ressemblances ; II. Les différences.\nExemple : l'organisation des Krou et des Akan lagunaires.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p02_q1",
            "type": "mcq",
            "prompt": "Quel plan convient à un sujet comparatif ?",
            "options": [
              "I. Les causes ; II. Les conséquences",
              "I. Le secteur primaire ; II. Le secteur secondaire",
              "I. Les ressemblances ; II. Les différences",
              "I. L'espoir ; II. La lutte ; III. La collaboration"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Comparer, c'est chercher les ressemblances et les différences."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le sujet chronologique",
          "stepTheme": "Le sujet chronologique",
          "stepBadge": "Le sujet chronologique",
          "paragraphText": "Un sujet évolutif (ou chronologique) suit une évolution dans le temps.\nLes parties correspondent à des périodes.\nExemple : la Côte d'Ivoire de 1944 à 1960.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p02_q2",
            "type": "mcq",
            "prompt": "« La Côte d'Ivoire de 1944 à 1960 » : quel type de sujet ?",
            "options": [
              "Un sujet comparatif",
              "Un sujet tableau",
              "Un sujet inventaire",
              "Un sujet évolutif (chronologique)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Deux dates bornent une évolution : on découpe en périodes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le sujet dialectique",
          "stepTheme": "Le sujet dialectique",
          "stepBadge": "Le sujet dialectique",
          "paragraphText": "Un sujet dialectique pose une question à débattre.\nPlan : I. Aller dans le sens du sujet (aspects positifs) ; II. Relever les limites (aspects négatifs).\nExemple : la colonisation a-t-elle été un mal nécessaire pour l'Afrique ?",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p02_q3",
            "type": "mcq",
            "prompt": "Quel plan convient à un sujet dialectique ?",
            "options": [
              "I. Les ressemblances ; II. Les différences",
              "I. Les atouts naturels ; II. Les atouts humains",
              "I. Aller dans le sens du sujet ; II. Relever ses limites",
              "I. Le primaire ; II. Le secondaire ; III. Le tertiaire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le sujet dialectique fait peser le pour et le contre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le sujet tableau",
          "stepTheme": "Le sujet tableau",
          "stepBadge": "Le sujet tableau",
          "paragraphText": "Un sujet tableau décrit une réalité en ses composantes.\nExemple : les secteurs d'activités économiques en Côte d'Ivoire.\nPlan : I. Primaire ; II. Secondaire ; III. Tertiaire.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p02_q4",
            "type": "mcq",
            "prompt": "« Les secteurs d'activités économiques en Côte d'Ivoire » : quel plan ?",
            "options": [
              "I. Les ressemblances ; II. Les différences",
              "I. Le primaire ; II. Le secondaire ; III. Le tertiaire",
              "I. Le pour ; II. Le contre",
              "I. Avant 1960 ; II. Après 1960"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le sujet tableau présente chaque composante : ici, chaque secteur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le sujet inventaire",
          "stepTheme": "Le sujet inventaire",
          "stepBadge": "Le sujet inventaire",
          "paragraphText": "Un sujet inventaire fait la liste organisée d'éléments.\nExemple : les atouts du développement de la Côte d'Ivoire.\nPlan : I. Atouts naturels ; II. Atouts humains ; III. Atouts politiques.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p02_q5",
            "type": "mcq",
            "prompt": "« Les atouts du développement économique de la Côte d'Ivoire » : quel type de sujet ?",
            "options": [
              "Un sujet inventaire",
              "Un sujet dialectique",
              "Un sujet comparatif",
              "Un sujet chronologique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On fait l'inventaire des atouts, classés par nature."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le sujet analytique",
          "stepTheme": "Le sujet analytique",
          "stepBadge": "Le sujet analytique",
          "paragraphText": "Un sujet analytique (thématique) étudie un thème sous plusieurs angles.\nExemple : l'agriculture dans l'économie ivoirienne.\nPlan : conditions de développement ; apport à l'économie ; problèmes et solutions.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p02_q6",
            "type": "mcq",
            "prompt": "Quel plan convient à « L'agriculture dans l'économie ivoirienne » ?",
            "options": [
              "Conditions de développement ; apport à l'économie ; problèmes et solutions",
              "Les ressemblances entre cultures ; les différences entre cultures",
              "De 1944 à 1947 ; de 1947 à 1950 ; de 1950 à 1960",
              "Les arguments pour l'agriculture ; les arguments contre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un sujet thématique s'analyse : conditions, apports, problèmes."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le sujet avec « et »",
          "stepTheme": "Le sujet avec « et »",
          "stepBadge": "Le sujet avec « et »",
          "paragraphText": "Pour un sujet avec « et » (ex. : les USA et le bloc occidental), le plan dépend du sens du mot « et » : relation, rôle, comparaison...\nExemple : I. Les USA, initiateurs du bloc ; II. Les USA, leaders du bloc.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p02_q7",
            "type": "mcq",
            "prompt": "De quoi dépend le plan d'un sujet construit avec « et » ?",
            "options": [
              "Du nombre de mots du sujet",
              "Du sens du mot « et » dans le sujet",
              "De la date de l'examen",
              "Toujours du plan ressemblances/différences"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Et » peut exprimer une relation, un rôle ou une comparaison : il faut l'interpréter."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p02_q1",
          "type": "mcq",
          "prompt": "Quel plan convient à un sujet comparatif ?",
          "options": [
            "I. Les causes ; II. Les conséquences",
            "I. Le secteur primaire ; II. Le secteur secondaire",
            "I. Les ressemblances ; II. Les différences",
            "I. L'espoir ; II. La lutte ; III. La collaboration"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Comparer, c'est chercher les ressemblances et les différences."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p02_q2",
          "type": "mcq",
          "prompt": "« La Côte d'Ivoire de 1944 à 1960 » : quel type de sujet ?",
          "options": [
            "Un sujet comparatif",
            "Un sujet tableau",
            "Un sujet inventaire",
            "Un sujet évolutif (chronologique)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Deux dates bornent une évolution : on découpe en périodes."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p02_q3",
          "type": "mcq",
          "prompt": "Quel plan convient à un sujet dialectique ?",
          "options": [
            "I. Les ressemblances ; II. Les différences",
            "I. Les atouts naturels ; II. Les atouts humains",
            "I. Aller dans le sens du sujet ; II. Relever ses limites",
            "I. Le primaire ; II. Le secondaire ; III. Le tertiaire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le sujet dialectique fait peser le pour et le contre."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p02_q4",
          "type": "mcq",
          "prompt": "« Les secteurs d'activités économiques en Côte d'Ivoire » : quel plan ?",
          "options": [
            "I. Les ressemblances ; II. Les différences",
            "I. Le primaire ; II. Le secondaire ; III. Le tertiaire",
            "I. Le pour ; II. Le contre",
            "I. Avant 1960 ; II. Après 1960"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le sujet tableau présente chaque composante : ici, chaque secteur."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p02_q5",
          "type": "mcq",
          "prompt": "« Les atouts du développement économique de la Côte d'Ivoire » : quel type de sujet ?",
          "options": [
            "Un sujet inventaire",
            "Un sujet dialectique",
            "Un sujet comparatif",
            "Un sujet chronologique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On fait l'inventaire des atouts, classés par nature."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p02_q6",
          "type": "mcq",
          "prompt": "Quel plan convient à « L'agriculture dans l'économie ivoirienne » ?",
          "options": [
            "Conditions de développement ; apport à l'économie ; problèmes et solutions",
            "Les ressemblances entre cultures ; les différences entre cultures",
            "De 1944 à 1947 ; de 1947 à 1950 ; de 1950 à 1960",
            "Les arguments pour l'agriculture ; les arguments contre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un sujet thématique s'analyse : conditions, apports, problèmes."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p02_q7",
          "type": "mcq",
          "prompt": "De quoi dépend le plan d'un sujet construit avec « et » ?",
          "options": [
            "Du nombre de mots du sujet",
            "Du sens du mot « et » dans le sujet",
            "De la date de l'examen",
            "Toujours du plan ressemblances/différences"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Et » peut exprimer une relation, un rôle ou une comparaison : il faut l'interpréter."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p03",
      "order": 3,
      "title": "La démarche pour traiter une dissertation",
      "summary": "Comprendre, analyser, puis rédiger.",
      "conceptExplanation": "La démarche se fait en trois grandes phases :\n\n1. La compréhension du sujet : recopier le sujet au brouillon, le lire attentivement, souligner les mots clés (noms, notions, dates) et les expliquer, puis reformuler le sujet.\n\n2. L'analyse du sujet : mobiliser ses connaissances, dégager la problématique, retenir les connaissances utiles et les classer par thèmes et sous-thèmes (le plan détaillé), puis en déduire le plan.\n\n3. La rédaction : rédiger entièrement au brouillon l'introduction et la conclusion ; rédiger directement sur la copie le développement à partir du plan détaillé ; soigner tout le devoir, relier les parties par des transitions et aérer le texte.",
      "keyRule": "1. Comprendre (mots clés, reformuler) ; 2. Analyser (problématique, plan détaillé) ; 3. Rédiger (intro et conclusion au brouillon, développement sur la copie).",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer les mots clés",
        "statement": "Sujet : « La Côte d'Ivoire de 1944 à 1960 ». Quels mots clés expliquer ?",
        "methodSteps": [
          "« 1944 » : la conférence de Brazzaville, début de l'évolution.",
          "« 1960 » : l'indépendance.",
          "Reformulation : comment la Côte d'Ivoire est-elle passée de la colonie à l'indépendance ?"
        ],
        "conclusion": "Les bornes chronologiques sont des mots clés à expliquer."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Trois phases",
          "stepTheme": "Trois phases",
          "stepBadge": "Trois phases",
          "paragraphText": "La démarche pour traiter une dissertation comprend trois grandes phases :\n1. la compréhension du sujet ;\n2. l'analyse du sujet ;\n3. la rédaction.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p03_q1",
            "type": "mcq",
            "prompt": "Quelle est la première phase du traitement d'une dissertation ?",
            "options": [
              "La rédaction de la conclusion",
              "L'annonce du plan",
              "La compréhension du sujet",
              "La recopie au propre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On ne peut rien faire avant d'avoir bien compris le sujet."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Comprendre le sujet",
          "stepTheme": "Comprendre le sujet",
          "stepBadge": "Comprendre le sujet",
          "paragraphText": "Pour comprendre le sujet :\n• le recopier au brouillon et le lire attentivement ;\n• souligner les mots clés (noms, notions, dates) et les expliquer ;\n• reformuler le sujet avec ses propres mots.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p03_q2",
            "type": "mcq",
            "prompt": "Que fait-on des mots clés du sujet ?",
            "options": [
              "On les supprime du sujet",
              "On les recopie dans la conclusion uniquement",
              "On les ignore pour gagner du temps",
              "On les souligne et on les explique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les mots clés portent le sens du sujet : il faut les définir."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Analyser le sujet",
          "stepTheme": "Analyser le sujet",
          "stepBadge": "Analyser le sujet",
          "paragraphText": "L'analyse consiste à :\n• mobiliser ses connaissances ;\n• dégager la problématique ;\n• classer les connaissances utiles par thèmes et sous-thèmes (plan détaillé) ;\n• en déduire le plan.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p03_q3",
            "type": "mcq",
            "prompt": "Que dégage-t-on pendant l'analyse du sujet ?",
            "options": [
              "La conclusion définitive",
              "Le nombre de pages à écrire",
              "La problématique, puis le plan détaillé",
              "La note attendue"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'analyse aboutit à la problématique et au plan détaillé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le plan détaillé",
          "stepTheme": "Le plan détaillé",
          "stepBadge": "Le plan détaillé",
          "paragraphText": "Le plan détaillé classe les connaissances utiles par thèmes et sous-thèmes.\nIl sert de guide pour rédiger directement le développement sur la copie.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p03_q4",
            "type": "mcq",
            "prompt": "À quoi sert le plan détaillé ?",
            "options": [
              "À remplacer l'introduction",
              "À choisir le sujet de l'examen",
              "À calculer la note finale",
              "À rédiger le développement directement sur la copie"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le plan détaillé est le squelette du développement."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Ce qu'on rédige au brouillon",
          "stepTheme": "Ce qu'on rédige au brouillon",
          "stepBadge": "Ce qu'on rédige au brouillon",
          "paragraphText": "Au brouillon, on rédige entièrement :\n• l'introduction ;\n• la conclusion.\nCe sont les parties les plus délicates.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p03_q5",
            "type": "mcq",
            "prompt": "Quelles parties rédige-t-on entièrement au brouillon ?",
            "options": [
              "L'introduction et la conclusion",
              "Tout le développement mot à mot",
              "Seulement le titre",
              "Seulement les transitions"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'introduction et la conclusion se rédigent au brouillon ; le développement directement sur la copie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Une rédaction soignée",
          "stepTheme": "Une rédaction soignée",
          "stepBadge": "Une rédaction soignée",
          "paragraphText": "On rédige soigneusement tout le devoir :\n• en respectant les articulations ;\n• en reliant les parties par des transitions ;\n• en aérant le texte.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p03_q6",
            "type": "mcq",
            "prompt": "Comment relie-t-on les parties d'une dissertation ?",
            "options": [
              "Par des titres numérotés soulignés",
              "Par des phrases de transition",
              "Par des tirets et des flèches",
              "On ne les relie pas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les transitions assurent la cohérence entre les parties."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Ne pas réciter",
          "stepTheme": "Ne pas réciter",
          "stepBadge": "Ne pas réciter",
          "paragraphText": "Une dissertation n'est pas une récitation de la leçon : il faut sélectionner les connaissances utiles et les organiser pour répondre à la problématique.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p03_q7",
            "type": "mcq",
            "prompt": "Quelle erreur faut-il éviter dans une dissertation ?",
            "options": [
              "Annoncer clairement le plan",
              "Réciter toute la leçon sans répondre à la problématique",
              "Relier les parties par des transitions",
              "Répondre à la problématique dans la conclusion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On sélectionne et on organise ; on ne récite pas."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p03_q1",
          "type": "mcq",
          "prompt": "Quelle est la première phase du traitement d'une dissertation ?",
          "options": [
            "La rédaction de la conclusion",
            "L'annonce du plan",
            "La compréhension du sujet",
            "La recopie au propre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On ne peut rien faire avant d'avoir bien compris le sujet."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p03_q2",
          "type": "mcq",
          "prompt": "Que fait-on des mots clés du sujet ?",
          "options": [
            "On les supprime du sujet",
            "On les recopie dans la conclusion uniquement",
            "On les ignore pour gagner du temps",
            "On les souligne et on les explique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les mots clés portent le sens du sujet : il faut les définir."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p03_q3",
          "type": "mcq",
          "prompt": "Que dégage-t-on pendant l'analyse du sujet ?",
          "options": [
            "La conclusion définitive",
            "Le nombre de pages à écrire",
            "La problématique, puis le plan détaillé",
            "La note attendue"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'analyse aboutit à la problématique et au plan détaillé."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p03_q4",
          "type": "mcq",
          "prompt": "À quoi sert le plan détaillé ?",
          "options": [
            "À remplacer l'introduction",
            "À choisir le sujet de l'examen",
            "À calculer la note finale",
            "À rédiger le développement directement sur la copie"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le plan détaillé est le squelette du développement."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p03_q5",
          "type": "mcq",
          "prompt": "Quelles parties rédige-t-on entièrement au brouillon ?",
          "options": [
            "L'introduction et la conclusion",
            "Tout le développement mot à mot",
            "Seulement le titre",
            "Seulement les transitions"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'introduction et la conclusion se rédigent au brouillon ; le développement directement sur la copie."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p03_q6",
          "type": "mcq",
          "prompt": "Comment relie-t-on les parties d'une dissertation ?",
          "options": [
            "Par des titres numérotés soulignés",
            "Par des phrases de transition",
            "Par des tirets et des flèches",
            "On ne les relie pas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les transitions assurent la cohérence entre les parties."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p03_q7",
          "type": "mcq",
          "prompt": "Quelle erreur faut-il éviter dans une dissertation ?",
          "options": [
            "Annoncer clairement le plan",
            "Réciter toute la leçon sans répondre à la problématique",
            "Relier les parties par des transitions",
            "Répondre à la problématique dans la conclusion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On sélectionne et on organise ; on ne récite pas."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p04",
      "order": 4,
      "title": "Le commentaire de document : préparation et présentation",
      "summary": "Le travail préliminaire et la question introductive.",
      "conceptExplanation": "Le commentaire de document est un exercice dirigé : on exploite un document pour l'expliquer, en répondant directement et précisément aux questions posées. Il évalue les connaissances, l'aptitude à analyser un document, la réflexion et le sens critique. Le document peut être un texte, une carte, une photo, un graphique ou un tableau statistique.\n\n1. Le travail préliminaire : numéroter les lignes du texte, lire plusieurs fois le document crayon en main (ou l'observer attentivement), dégager le thème central, lire attentivement les questions.\n\n2. La question introductive porte sur la présentation du document :\n- la nature (discours, récit, article de journal, extrait d'ouvrage, carte, photo, statistiques...) ;\n- l'origine (la source) ;\n- le destinataire ;\n- la date ;\n- l'auteur (sa fonction, son rôle) ;\n- le contexte historique (les circonstances qui ont mené à l'événement) ;\n- l'idée générale (l'idée maîtresse, en une phrase).",
      "keyRule": "Commentaire = exercice dirigé par des questions ; présentation : nature, origine, destinataire, date, auteur, contexte, idée générale.",
      "formulas": [],
      "workedExample": {
        "title": "Présenter un document",
        "statement": "Texte de Joseph Ki-Zerbo, Histoire de l'Afrique noire, Hatier, 1978. Quelle nature et quelle origine ?",
        "methodSteps": [
          "Nature : un extrait d'ouvrage historique.",
          "Origine : le livre Histoire de l'Afrique noire, éditions Hatier.",
          "Date de parution : 1978."
        ],
        "conclusion": "La présentation situe le document avant de l'expliquer."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le commentaire de document",
          "stepTheme": "Le commentaire de document",
          "stepBadge": "Le commentaire de document",
          "paragraphText": "Le commentaire de document est un exercice dirigé : on exploite un document pour l'expliquer, en répondant directement et précisément aux questions qui l'accompagnent.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p04_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qui distingue le commentaire de document de la dissertation ?",
            "options": [
              "Il est guidé par des questions posées sur un document",
              "Il est entièrement rédigé sans aucune question",
              "Il ne porte que sur des sujets de géographie",
              "Il se fait sans document"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le commentaire est dirigé par des questions ; la dissertation est entièrement construite par l'élève."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Des documents variés",
          "stepTheme": "Des documents variés",
          "stepBadge": "Des documents variés",
          "paragraphText": "Le commentaire ne porte pas seulement sur des textes : le document peut être une carte, une photo, un graphique ou un tableau statistique.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p04_q2",
            "type": "mcq",
            "prompt": "« Le commentaire de document porte uniquement sur des textes. » Cette affirmation est :",
            "options": [
              "Vraie : seuls les textes peuvent être commentés",
              "Vraie : les cartes relèvent uniquement de la géographie physique",
              "Fausse : il porte uniquement sur des cartes",
              "Fausse : il peut porter sur une carte, une photo, un graphique ou un tableau"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Tout document peut être commenté : texte, carte, image, graphique, tableau."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le travail préliminaire",
          "stepTheme": "Le travail préliminaire",
          "stepBadge": "Le travail préliminaire",
          "paragraphText": "Avant de répondre :\n• numéroter les lignes du texte ;\n• lire plusieurs fois le document, crayon en main ;\n• dégager le thème central ;\n• lire attentivement les questions.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p04_q3",
            "type": "mcq",
            "prompt": "Que fait-on en premier sur un texte à commenter ?",
            "options": [
              "On rédige directement la conclusion",
              "On recopie entièrement le texte",
              "On numérote les lignes et on le lit attentivement plusieurs fois",
              "On répond aux questions sans lire le texte"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Numéroter les lignes permet de citer précisément le texte."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La nature du document",
          "stepTheme": "La nature du document",
          "stepBadge": "La nature du document",
          "paragraphText": "La nature du document, c'est sa catégorie :\ndiscours, récit, article de journal, extrait d'ouvrage historique, carte, photo, série statistique...",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p04_q4",
            "type": "mcq",
            "prompt": "Un extrait du livre Histoire de l'Afrique noire de Ki-Zerbo est de quelle nature ?",
            "options": [
              "Un article de journal",
              "Un discours politique",
              "Un extrait d'ouvrage historique",
              "Une carte"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il s'agit d'un passage tiré d'un livre d'histoire."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Origine, auteur et destinataire",
          "stepTheme": "Origine, auteur et destinataire",
          "stepBadge": "Origine, auteur et destinataire",
          "paragraphText": "• L'origine : la source du document (l'ouvrage, le journal dont il est extrait).\n• L'auteur : qui il est, sa fonction, son rôle dans l'histoire.\n• Le destinataire : celui ou ceux à qui le document s'adresse.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p04_q5",
            "type": "mcq",
            "prompt": "Qu'est-ce que l'origine d'un document ?",
            "options": [
              "La source dont il est extrait (ouvrage, journal...)",
              "La personne à qui il est destiné",
              "L'idée principale qu'il contient",
              "Les conséquences des faits qu'il rapporte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'origine indique d'où vient le document."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le contexte historique",
          "stepTheme": "Le contexte historique",
          "stepBadge": "Le contexte historique",
          "paragraphText": "Le contexte historique retrace les circonstances qui ont conduit à l'événement décrit dans le document.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p04_q6",
            "type": "mcq",
            "prompt": "Que présente le contexte historique d'un document ?",
            "options": [
              "La biographie complète de l'auteur",
              "Les conséquences du document sur la suite de l'histoire",
              "La liste des mots difficiles du texte",
              "Les circonstances qui ont conduit à l'événement décrit"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le contexte explique dans quelle situation le document a été produit."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "L'idée générale",
          "stepTheme": "L'idée générale",
          "stepBadge": "L'idée générale",
          "paragraphText": "L'idée générale est l'idée maîtresse du document.\nElle se formule en une seule phrase.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p04_q7",
            "type": "mcq",
            "prompt": "Comment formule-t-on l'idée générale d'un document ?",
            "options": [
              "En recopiant tout le premier paragraphe",
              "En une seule phrase qui donne l'idée maîtresse",
              "En faisant la liste de tous les mots du texte",
              "En plusieurs paragraphes détaillés"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une phrase claire suffit pour l'idée générale."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p04_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qui distingue le commentaire de document de la dissertation ?",
          "options": [
            "Il est guidé par des questions posées sur un document",
            "Il est entièrement rédigé sans aucune question",
            "Il ne porte que sur des sujets de géographie",
            "Il se fait sans document"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le commentaire est dirigé par des questions ; la dissertation est entièrement construite par l'élève."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p04_q2",
          "type": "mcq",
          "prompt": "« Le commentaire de document porte uniquement sur des textes. » Cette affirmation est :",
          "options": [
            "Vraie : seuls les textes peuvent être commentés",
            "Vraie : les cartes relèvent uniquement de la géographie physique",
            "Fausse : il porte uniquement sur des cartes",
            "Fausse : il peut porter sur une carte, une photo, un graphique ou un tableau"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Tout document peut être commenté : texte, carte, image, graphique, tableau."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p04_q3",
          "type": "mcq",
          "prompt": "Que fait-on en premier sur un texte à commenter ?",
          "options": [
            "On rédige directement la conclusion",
            "On recopie entièrement le texte",
            "On numérote les lignes et on le lit attentivement plusieurs fois",
            "On répond aux questions sans lire le texte"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Numéroter les lignes permet de citer précisément le texte."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p04_q4",
          "type": "mcq",
          "prompt": "Un extrait du livre Histoire de l'Afrique noire de Ki-Zerbo est de quelle nature ?",
          "options": [
            "Un article de journal",
            "Un discours politique",
            "Un extrait d'ouvrage historique",
            "Une carte"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il s'agit d'un passage tiré d'un livre d'histoire."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p04_q5",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'origine d'un document ?",
          "options": [
            "La source dont il est extrait (ouvrage, journal...)",
            "La personne à qui il est destiné",
            "L'idée principale qu'il contient",
            "Les conséquences des faits qu'il rapporte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'origine indique d'où vient le document."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p04_q6",
          "type": "mcq",
          "prompt": "Que présente le contexte historique d'un document ?",
          "options": [
            "La biographie complète de l'auteur",
            "Les conséquences du document sur la suite de l'histoire",
            "La liste des mots difficiles du texte",
            "Les circonstances qui ont conduit à l'événement décrit"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le contexte explique dans quelle situation le document a été produit."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p04_q7",
          "type": "mcq",
          "prompt": "Comment formule-t-on l'idée générale d'un document ?",
          "options": [
            "En recopiant tout le premier paragraphe",
            "En une seule phrase qui donne l'idée maîtresse",
            "En faisant la liste de tous les mots du texte",
            "En plusieurs paragraphes détaillés"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une phrase claire suffit pour l'idée générale."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p05",
      "order": 5,
      "title": "Expliquer, commenter et ouvrir",
      "summary": "Les questions de compréhension et d'ouverture, et le commentaire de graphique.",
      "conceptExplanation": "1. La question de compréhension clarifie les thèmes et les allusions du passage :\n- expliquer un passage : le faire comprendre en faisant ressortir les non-dits et en apportant des preuves ;\n- commenter un passage : l'expliquer, puis relever par un jugement raisonné les limites des propos de l'auteur ;\n- discuter ou critiquer : examiner une idée en étudiant le pour et le contre.\n\n2. La question d'ouverture conclut en montrant :\n- la portée du document : l'impact des faits rapportés sur la suite de l'histoire ;\n- l'intérêt du document : la position qu'il permet de prendre dans un débat (« Es-tu d'accord... ? », « Partages-tu l'opinion... ? »).\n\n3. Les graphiques (courbe, histogramme, pyramide des âges, diagramme ombrothermique, diagramme circulaire), les tableaux statistiques et les cartes se commentent en deux étapes : la description (ampleur, tendance générale, ruptures) puis l'explication par les événements historiques, géographiques ou économiques. Dans un tableau statistique, la tendance générale est donnée par la ligne du total.",
      "keyRule": "Expliquer = éclairer ; commenter = expliquer + juger les limites ; discuter = pour et contre ; portée = conséquences ; graphique = décrire puis expliquer.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer ou commenter ?",
        "statement": "« Explique » et « Commente » demandent-ils la même chose ?",
        "methodSteps": [
          "Expliquer : éclairer le passage, faire ressortir les non-dits, donner des preuves.",
          "Commenter : expliquer, puis porter un jugement raisonné sur les limites des propos."
        ],
        "conclusion": "Commenter va plus loin qu'expliquer : on ajoute une appréciation critique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Expliquer",
          "stepTheme": "Expliquer",
          "stepBadge": "Expliquer",
          "paragraphText": "Expliquer un passage, c'est le faire comprendre : faire ressortir les non-dits et apporter les preuves des affirmations de l'auteur.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p05_q1",
            "type": "mcq",
            "prompt": "Que signifie « expliquer un passage » ?",
            "options": [
              "Le recopier mot pour mot entre guillemets dans la réponse",
              "Le faire comprendre en éclairant les non-dits et en apportant des preuves",
              "Donner uniquement son avis personnel sur ce que dit l'auteur",
              "Le résumer en une seule phrase sans rien ajouter d'autre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Expliquer, c'est apporter des éclaircissements."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Commenter",
          "stepTheme": "Commenter",
          "stepBadge": "Commenter",
          "paragraphText": "Commenter un passage, c'est l'expliquer, puis relever par un jugement raisonné les limites des propos de l'auteur.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p05_q2",
            "type": "mcq",
            "prompt": "Qu'ajoute « commenter » par rapport à « expliquer » ?",
            "options": [
              "Une recopie intégrale du passage",
              "Une liste de dates sans lien avec le texte",
              "Rien : c'est exactement la même chose",
              "Un jugement raisonné sur les limites des propos de l'auteur"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Commenter = expliquer + apprécier de façon critique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Discuter",
          "stepTheme": "Discuter",
          "stepBadge": "Discuter",
          "paragraphText": "Discuter ou critiquer une idée, c'est l'examiner en étudiant le pour et le contre, ses aspects pertinents et ses limites.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p05_q3",
            "type": "mcq",
            "prompt": "Que fait-on quand on « discute » une opinion ?",
            "options": [
              "On étudie le pour et le contre",
              "On l'approuve sans réserve",
              "On la rejette sans argument",
              "On la recopie dans la conclusion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Discuter, c'est peser les arguments dans les deux sens."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La portée du document",
          "stepTheme": "La portée du document",
          "stepBadge": "La portée du document",
          "paragraphText": "La question d'ouverture peut porter sur la portée du document : l'impact des faits qu'il rapporte sur la suite de l'histoire.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p05_q4",
            "type": "mcq",
            "prompt": "Qu'est-ce que la portée d'un document ?",
            "options": [
              "Le nombre de lignes du document",
              "Le nom de l'éditeur du document",
              "L'impact des faits rapportés sur la suite de l'histoire",
              "La date de naissance de l'auteur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La portée, ce sont les conséquences du document."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'intérêt du document",
          "stepTheme": "L'intérêt du document",
          "stepBadge": "L'intérêt du document",
          "paragraphText": "L'intérêt du document : la position qu'il permet de prendre dans le débat qu'il aborde.\nQuestions types : « Es-tu d'accord avec... ? », « Partages-tu l'opinion... ? », « Que penses-tu... ? »",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p05_q5",
            "type": "mcq",
            "prompt": "« Partages-tu l'opinion de l'auteur ? » est une question de quel type ?",
            "options": [
              "Une question introductive",
              "Une question sur la nature du document",
              "Une question sur la date du document",
              "Une question d'ouverture"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Elle invite à prendre position : c'est une question d'ouverture."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Commenter un graphique",
          "stepTheme": "Commenter un graphique",
          "stepBadge": "Commenter un graphique",
          "paragraphText": "Un graphique, un tableau statistique ou une carte se commente en deux étapes :\n1. la description : ampleur, tendance générale, ruptures ;\n2. l'explication par les événements historiques, géographiques ou économiques.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p05_q6",
            "type": "mcq",
            "prompt": "Quelles sont les deux étapes du commentaire d'un graphique ?",
            "options": [
              "L'explication, puis la recopie des chiffres",
              "Le titre, puis la signature",
              "La description, puis l'explication",
              "La conclusion, puis l'introduction"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On décrit d'abord ce qu'on voit, puis on l'explique."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "La ligne du total",
          "stepTheme": "La ligne du total",
          "stepBadge": "La ligne du total",
          "paragraphText": "Dans un tableau statistique, la tendance générale est donnée par la ligne du total.\nOn commence par elle avant de détailler les autres lignes.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p05_q7",
            "type": "mcq",
            "prompt": "Dans un tableau statistique, où lit-on la tendance générale ?",
            "options": [
              "Dans la première case en haut à gauche",
              "Dans la ligne du total",
              "Dans le titre du tableau",
              "Dans la source du tableau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le total résume l'évolution d'ensemble."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p05_q1",
          "type": "mcq",
          "prompt": "Que signifie « expliquer un passage » ?",
          "options": [
            "Le recopier mot pour mot entre guillemets dans la réponse",
            "Le faire comprendre en éclairant les non-dits et en apportant des preuves",
            "Donner uniquement son avis personnel sur ce que dit l'auteur",
            "Le résumer en une seule phrase sans rien ajouter d'autre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Expliquer, c'est apporter des éclaircissements."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p05_q2",
          "type": "mcq",
          "prompt": "Qu'ajoute « commenter » par rapport à « expliquer » ?",
          "options": [
            "Une recopie intégrale du passage",
            "Une liste de dates sans lien avec le texte",
            "Rien : c'est exactement la même chose",
            "Un jugement raisonné sur les limites des propos de l'auteur"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Commenter = expliquer + apprécier de façon critique."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p05_q3",
          "type": "mcq",
          "prompt": "Que fait-on quand on « discute » une opinion ?",
          "options": [
            "On étudie le pour et le contre",
            "On l'approuve sans réserve",
            "On la rejette sans argument",
            "On la recopie dans la conclusion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Discuter, c'est peser les arguments dans les deux sens."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p05_q4",
          "type": "mcq",
          "prompt": "Qu'est-ce que la portée d'un document ?",
          "options": [
            "Le nombre de lignes du document",
            "Le nom de l'éditeur du document",
            "L'impact des faits rapportés sur la suite de l'histoire",
            "La date de naissance de l'auteur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La portée, ce sont les conséquences du document."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p05_q5",
          "type": "mcq",
          "prompt": "« Partages-tu l'opinion de l'auteur ? » est une question de quel type ?",
          "options": [
            "Une question introductive",
            "Une question sur la nature du document",
            "Une question sur la date du document",
            "Une question d'ouverture"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Elle invite à prendre position : c'est une question d'ouverture."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p05_q6",
          "type": "mcq",
          "prompt": "Quelles sont les deux étapes du commentaire d'un graphique ?",
          "options": [
            "L'explication, puis la recopie des chiffres",
            "Le titre, puis la signature",
            "La description, puis l'explication",
            "La conclusion, puis l'introduction"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On décrit d'abord ce qu'on voit, puis on l'explique."
        },
        {
          "id": "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire_p05_q7",
          "type": "mcq",
          "prompt": "Dans un tableau statistique, où lit-on la tendance générale ?",
          "options": [
            "Dans la première case en haut à gauche",
            "Dans la ligne du total",
            "Dans le titre du tableau",
            "Dans la source du tableau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le total résume l'évolution d'ensemble."
        }
      ]
    }
  ]
};
