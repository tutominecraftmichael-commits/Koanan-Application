import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Philo Tle_L4_La vie en société.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const PHILO_TLE_L04_VIE_EN_SOCIETE: CurriculumChapter = {
  "id": "terminale_philo_conditions_liberte_l02_vie_en_societe",
  "subjectId": "philosophie",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  "order": 4,
  "title": "Les conditions de la liberté, leçon 2 : La vie en société",
  "summary": "L'homme être social, autrui, l'État, le droit, la justice, la nation et la violence.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "Philo Tle_L4_La vie en société.pdf",
  "points": [
    {
      "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p01",
      "order": 1,
      "title": "L'homme, un être social",
      "summary": "La société, et deux thèses sur son origine : naturaliste et culturaliste.",
      "conceptExplanation": "La société est une communauté d'individus qui ont des rapports organisés et échangent des services.\nSur son origine, deux thèses s'opposent.\nThèse naturaliste (Aristote) : la société est naturelle ; « l'homme est par nature un animal politique ».\nThèse culturaliste ou contractualiste (Hobbes, Locke, Rousseau) : la société naît d'un contrat entre les hommes ; selon Hobbes, les hommes s'assemblent « par accident et non par une disposition nécessaire de la nature ».",
      "keyRule": "Naturaliste : la société vient de la nature (Aristote) ; culturaliste : elle vient d'un contrat (Hobbes, Locke, Rousseau).",
      "formulas": [],
      "workedExample": {
        "title": "Classer une thèse",
        "statement": "« L'homme est par nature un animal politique. » Naturaliste ou culturaliste ?",
        "methodSteps": [
          "La phrase dit que la vie en cité vient de la nature de l'homme.",
          "C'est la position d'Aristote."
        ],
        "conclusion": "C'est la thèse naturaliste."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La société",
          "stepTheme": "La société",
          "stepBadge": "La société",
          "paragraphText": "• Société : ensemble d'individus entre lesquels existent des rapports durables et organisés, établis en institutions et garantis par des sanctions.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p01_q1",
            "type": "mcq",
            "prompt": "Quelle est la bonne définition de la société ?",
            "options": [
              "L'ensemble des infrastructures économiques d'un État",
              "L'ensemble des hommes et des animaux d'un État",
              "Un ensemble d'individus aux rapports organisés et garantis par des institutions",
              "Un ensemble de valeurs morales"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La société, ce sont des hommes reliés par des rapports organisés et des institutions."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La thèse naturaliste",
          "stepTheme": "La thèse naturaliste",
          "stepBadge": "La thèse naturaliste",
          "paragraphText": "• Thèse naturaliste : la société est un fait naturel ; l'homme est naturellement social.\nAristote (La Politique) : « L'homme est par nature un animal politique. »",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p01_q2",
            "type": "mcq",
            "prompt": "Selon Aristote, qu'est-ce que l'homme ?",
            "options": [
              "« Par nature un animal politique »",
              "« Un loup pour l'homme »",
              "« Condamné à être libre »",
              "« Un roseau pensant »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour Aristote, vivre en cité fait partie de la nature humaine."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La thèse culturaliste",
          "stepTheme": "La thèse culturaliste",
          "stepBadge": "La thèse culturaliste",
          "paragraphText": "• Thèse culturaliste (ou contractualiste) : la société est le produit d'un contrat social, un accord passé entre les hommes.\nPhilosophes du contrat : Hobbes, Locke, Rousseau.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p01_q3",
            "type": "mcq",
            "prompt": "Pour les philosophes du contrat, d'où vient la société ?",
            "options": [
              "D'une loi de la nature",
              "D'un ordre de Dieu uniquement",
              "Du hasard pur",
              "D'un accord passé entre les hommes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Pour Hobbes, Locke et Rousseau, la société naît d'un contrat."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Hobbes contre Aristote",
          "stepTheme": "Hobbes contre Aristote",
          "stepBadge": "Hobbes contre Aristote",
          "paragraphText": "Hobbes (Du citoyen) : les hommes s'assemblent « par accident et non pas par une disposition nécessaire de la nature ».\nIl s'oppose donc à Aristote : la société n'est pas naturelle, elle est construite.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p01_q4",
            "type": "mcq",
            "prompt": "Pourquoi Hobbes s'oppose-t-il à Aristote ?",
            "options": [
              "Pour lui, l'homme est naturellement politique",
              "Pour lui, la société n'est pas naturelle mais construite",
              "Pour lui, la société n'existe pas",
              "Pour lui, les animaux forment des sociétés politiques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Hobbes voit la société comme un artifice, pas comme un fait de nature."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser les thèses",
          "stepTheme": "Ne pas inverser les thèses",
          "stepBadge": "Ne pas inverser les thèses",
          "paragraphText": "• Aristote = naturaliste.\n• Hobbes, Locke, Rousseau = contrat social (culturalistes).\nUn piège classique : attribuer le « contrat social » à Aristote.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p01_q5",
            "type": "mcq",
            "prompt": "Lequel de ces philosophes défend la thèse naturaliste ?",
            "options": [
              "Hobbes",
              "Aristote",
              "Locke",
              "Rousseau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Aristote est naturaliste ; les trois autres sont des philosophes du contrat."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "L'homme seul ne devient pas homme",
          "stepTheme": "L'homme seul ne devient pas homme",
          "stepBadge": "L'homme seul ne devient pas homme",
          "paragraphText": "Que la société soit naturelle ou contractuelle, l'homme vit toujours avec les autres.\nLucien Malson (Les enfants sauvages) : « Avant la rencontre d'autrui et du groupe, l'homme n'est rien d'autre que des virtualités aussi légères qu'une transparente vapeur. »",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p01_q6",
            "type": "mcq",
            "prompt": "Que montre l'exemple des enfants sauvages selon Malson ?",
            "options": [
              "L'homme peut parfaitement grandir seul",
              "Les animaux éduquent mieux que les hommes",
              "La société rend l'homme sauvage",
              "Sans les autres, l'homme ne développe pas son humanité"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Sans autrui, les capacités humaines restent de simples « virtualités »."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p01_q1",
          "type": "mcq",
          "prompt": "Quelle est la bonne définition de la société ?",
          "options": [
            "L'ensemble des infrastructures économiques d'un État",
            "L'ensemble des hommes et des animaux d'un État",
            "Un ensemble d'individus aux rapports organisés et garantis par des institutions",
            "Un ensemble de valeurs morales"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La société, ce sont des hommes reliés par des rapports organisés et des institutions."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p01_q2",
          "type": "mcq",
          "prompt": "Selon Aristote, qu'est-ce que l'homme ?",
          "options": [
            "« Par nature un animal politique »",
            "« Un loup pour l'homme »",
            "« Condamné à être libre »",
            "« Un roseau pensant »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour Aristote, vivre en cité fait partie de la nature humaine."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p01_q3",
          "type": "mcq",
          "prompt": "Pour les philosophes du contrat, d'où vient la société ?",
          "options": [
            "D'une loi de la nature",
            "D'un ordre de Dieu uniquement",
            "Du hasard pur",
            "D'un accord passé entre les hommes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Pour Hobbes, Locke et Rousseau, la société naît d'un contrat."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p01_q4",
          "type": "mcq",
          "prompt": "Pourquoi Hobbes s'oppose-t-il à Aristote ?",
          "options": [
            "Pour lui, l'homme est naturellement politique",
            "Pour lui, la société n'est pas naturelle mais construite",
            "Pour lui, la société n'existe pas",
            "Pour lui, les animaux forment des sociétés politiques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Hobbes voit la société comme un artifice, pas comme un fait de nature."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p01_q5",
          "type": "mcq",
          "prompt": "Lequel de ces philosophes défend la thèse naturaliste ?",
          "options": [
            "Hobbes",
            "Aristote",
            "Locke",
            "Rousseau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Aristote est naturaliste ; les trois autres sont des philosophes du contrat."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p01_q6",
          "type": "mcq",
          "prompt": "Que montre l'exemple des enfants sauvages selon Malson ?",
          "options": [
            "L'homme peut parfaitement grandir seul",
            "Les animaux éduquent mieux que les hommes",
            "La société rend l'homme sauvage",
            "Sans les autres, l'homme ne développe pas son humanité"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Sans autrui, les capacités humaines restent de simples « virtualités »."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p02",
      "order": 2,
      "title": "La relation nécessaire à autrui",
      "summary": "Autrui me révèle à moi-même ; le rejet du solipsisme.",
      "conceptExplanation": "Autrui est mon semblable, mon prochain.\nHegel et Sartre rejettent le solipsisme, l'idée d'une conscience qui existerait seule.\nPour Sartre, « pour obtenir une vérité quelconque sur moi, il faut que je passe par l'autre » (L'existentialisme est un humanisme).\nMa liberté, mon épanouissement et mon humanisation dépendent du respect et de la considération des autres.",
      "keyRule": "Je ne me connais pas seul : autrui est nécessaire à ma conscience de moi.",
      "formulas": [],
      "workedExample": {
        "title": "Se connaître grâce aux autres",
        "statement": "Comment un élève découvre-t-il qu'il est doué pour expliquer les maths ?",
        "methodSteps": [
          "Il aide un camarade.",
          "Le camarade comprend et le remercie.",
          "Le regard de l'autre lui révèle une qualité qu'il ignorait."
        ],
        "conclusion": "Comme le dit Sartre, je passe par l'autre pour découvrir une vérité sur moi."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Autrui",
          "stepTheme": "Autrui",
          "stepBadge": "Autrui",
          "paragraphText": "• Autrui : l'autre homme, mon semblable, mon prochain ; à la fois semblable à moi et différent de moi.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p02_q1",
            "type": "mcq",
            "prompt": "Qui est « autrui » en philosophie ?",
            "options": [
              "L'autre homme, mon semblable",
              "Un animal domestique",
              "Un objet",
              "Dieu uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Autrui désigne l'autre personne, semblable et différente de moi."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le solipsisme",
          "stepTheme": "Le solipsisme",
          "stepBadge": "Le solipsisme",
          "paragraphText": "• Solipsisme : idée selon laquelle la conscience existerait seule, sans avoir besoin des autres.\nHegel et Sartre le rejettent : la conscience de soi passe par autrui.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p02_q2",
            "type": "mcq",
            "prompt": "Qu'est-ce que le solipsisme ?",
            "options": [
              "L'amour du prochain",
              "La vie en communauté",
              "L'idée qu'une conscience peut exister seule, sans les autres",
              "La croyance en plusieurs dieux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Solus ipse : « soi seul ». Hegel et Sartre refusent cette solitude de la conscience."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Sartre et l'autre",
          "stepTheme": "Sartre et l'autre",
          "stepBadge": "Sartre et l'autre",
          "paragraphText": "Sartre (L'existentialisme est un humanisme) : « Pour obtenir une vérité quelconque sur moi, il faut que je passe par l'autre. »\nAutrui contribue à ma prise de conscience.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p02_q3",
            "type": "mcq",
            "prompt": "Selon Sartre, par qui faut-il passer pour obtenir une vérité sur soi ?",
            "options": [
              "Par Dieu seul",
              "Par la solitude",
              "Par l'oubli",
              "Par l'autre"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le regard d'autrui me révèle à moi-même."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Autrui et mon humanisation",
          "stepTheme": "Autrui et mon humanisation",
          "stepBadge": "Autrui et mon humanisation",
          "paragraphText": "Ma liberté, mon épanouissement et mon humanisation dépendent du respect et de la considération que les autres m'accordent.\nSeydou Badian (Sous l'orage) : « L'homme n'est rien sans les autres. »",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p02_q4",
            "type": "mcq",
            "prompt": "Quel écrivain africain a écrit « L'homme n'est rien sans les autres » ?",
            "options": [
              "Aimé Césaire",
              "Léopold Sédar Senghor",
              "Seydou Badian",
              "Bernard Dadié"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La formule vient du roman Sous l'orage du Malien Seydou Badian."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Autrui, ni seulement ami ni seulement ennemi",
          "stepTheme": "Autrui, ni seulement ami ni seulement ennemi",
          "stepBadge": "Autrui, ni seulement ami ni seulement ennemi",
          "paragraphText": "Autrui m'aide à me construire, mais il peut aussi me juger et me limiter.\nAu BAC, on montre les deux faces de la relation à autrui.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p02_q5",
            "type": "mcq",
            "prompt": "Quelle réponse est la plus juste sur autrui ?",
            "options": [
              "Autrui est toujours mon ennemi",
              "Autrui peut m'enrichir mais aussi me limiter",
              "Autrui ne compte jamais",
              "Autrui est toujours parfait"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La relation à autrui est ambivalente : source de richesse et de conflit."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Argumenter « autrui est indispensable »",
          "stepTheme": "Argumenter « autrui est indispensable »",
          "stepBadge": "Argumenter « autrui est indispensable »",
          "paragraphText": "Trois arguments :\n• l'homme est un animal politique (Aristote) ;\n• sans les autres, il reste des « virtualités » (Malson) ;\n• autrui m'enrichit par sa différence (Saint-Exupéry).",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p02_q6",
            "type": "mcq",
            "prompt": "Quel argument montre que autrui est indispensable ?",
            "options": [
              "Sans les autres, l'homme ne développe pas ses capacités",
              "L'homme est un loup pour l'homme",
              "L'enfer, c'est les autres",
              "Autrui me chosifie par son regard"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les autres réponses montrent au contraire le côté conflictuel d'autrui."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p02_q1",
          "type": "mcq",
          "prompt": "Qui est « autrui » en philosophie ?",
          "options": [
            "L'autre homme, mon semblable",
            "Un animal domestique",
            "Un objet",
            "Dieu uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Autrui désigne l'autre personne, semblable et différente de moi."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p02_q2",
          "type": "mcq",
          "prompt": "Qu'est-ce que le solipsisme ?",
          "options": [
            "L'amour du prochain",
            "La vie en communauté",
            "L'idée qu'une conscience peut exister seule, sans les autres",
            "La croyance en plusieurs dieux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Solus ipse : « soi seul ». Hegel et Sartre refusent cette solitude de la conscience."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p02_q3",
          "type": "mcq",
          "prompt": "Selon Sartre, par qui faut-il passer pour obtenir une vérité sur soi ?",
          "options": [
            "Par Dieu seul",
            "Par la solitude",
            "Par l'oubli",
            "Par l'autre"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le regard d'autrui me révèle à moi-même."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p02_q4",
          "type": "mcq",
          "prompt": "Quel écrivain africain a écrit « L'homme n'est rien sans les autres » ?",
          "options": [
            "Aimé Césaire",
            "Léopold Sédar Senghor",
            "Seydou Badian",
            "Bernard Dadié"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La formule vient du roman Sous l'orage du Malien Seydou Badian."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p02_q5",
          "type": "mcq",
          "prompt": "Quelle réponse est la plus juste sur autrui ?",
          "options": [
            "Autrui est toujours mon ennemi",
            "Autrui peut m'enrichir mais aussi me limiter",
            "Autrui ne compte jamais",
            "Autrui est toujours parfait"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La relation à autrui est ambivalente : source de richesse et de conflit."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p02_q6",
          "type": "mcq",
          "prompt": "Quel argument montre que autrui est indispensable ?",
          "options": [
            "Sans les autres, l'homme ne développe pas ses capacités",
            "L'homme est un loup pour l'homme",
            "L'enfer, c'est les autres",
            "Autrui me chosifie par son regard"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les autres réponses montrent au contraire le côté conflictuel d'autrui."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p03",
      "order": 3,
      "title": "L'État, le droit et la justice",
      "summary": "Pourquoi l'État est nécessaire et comment il garantit la liberté par le droit et la justice.",
      "conceptExplanation": "L'État est une organisation politico-administrative et juridique qui exerce son autorité sur un territoire.\nAvec lui, les hommes sortent de l'état de nature : ils renoncent à une part de leur liberté pour obtenir la sécurité et la justice.\nL'État fait les lois (le droit positif) et garantit la liberté et la sécurité : « La fin de l'État est en réalité la liberté » (Spinoza).\nLa justice est l'équité, donner à chacun ce qui lui revient ; pour Rousseau, les lois émanent de la volonté générale.",
      "keyRule": "L'État, par le droit et la justice, garantit la liberté et la sécurité de chacun.",
      "formulas": [],
      "workedExample": {
        "title": "Pourquoi accepter l'État ?",
        "statement": "Pourquoi renoncer à une part de sa liberté naturelle ?",
        "methodSteps": [
          "À l'état de nature, chacun peut tout faire, mais personne n'est en sécurité.",
          "En acceptant des lois communes, chacun est protégé.",
          "La liberté devient sûre et garantie."
        ],
        "conclusion": "On échange une liberté sauvage contre une liberté protégée par le droit."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'État",
          "stepTheme": "L'État",
          "stepBadge": "L'État",
          "paragraphText": "• État : organisation politico-administrative et juridique qui exerce son autorité sur un territoire défini.\nIl élabore les lois, qui forment le droit positif.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p03_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce que l'État ?",
            "options": [
              "Une organisation politique et juridique qui exerce son autorité sur un territoire",
              "Un groupe d'amis",
              "Une religion",
              "Une entreprise privée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'État organise et gouverne la vie commune sur un territoire."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'état de nature",
          "stepTheme": "L'état de nature",
          "stepBadge": "L'état de nature",
          "paragraphText": "• État de nature : situation imaginée des hommes avant toute société organisée, sans lois ni État.\nEn sortant de l'état de nature, les hommes renoncent à une part de leur liberté pour obtenir la sécurité et la justice.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p03_q2",
            "type": "mcq",
            "prompt": "Que gagnent les hommes en sortant de l'état de nature ?",
            "options": [
              "Une liberté sans limites",
              "La sécurité et la justice",
              "Le droit du plus fort",
              "La fin de toutes les lois"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ils échangent une liberté sans garantie contre la protection des lois."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Spinoza",
          "stepTheme": "Spinoza",
          "stepBadge": "Spinoza",
          "paragraphText": "Spinoza (Traité théologico-politique) : « La fin de l'État n'est pas de faire passer les hommes de la condition d'êtres raisonnables à celle de bêtes brutes ou d'automates (…). La fin de l'État est donc en réalité la liberté. »",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p03_q3",
            "type": "mcq",
            "prompt": "Selon Spinoza, quelle est la fin (le but) de l'État ?",
            "options": [
              "La guerre",
              "La richesse des dirigeants",
              "La liberté",
              "L'obéissance aveugle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour Spinoza, l'État existe pour garantir la liberté."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le droit",
          "stepTheme": "Le droit",
          "stepBadge": "Le droit",
          "paragraphText": "• Droit : ensemble des règles (droits et devoirs) qui régissent la vie sociale.\nKant : « Le droit est l'ensemble des conditions qui permettent à la liberté de chacun de s'accorder avec la liberté de tous. »",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p03_q4",
            "type": "mcq",
            "prompt": "Quelle est la bonne définition du droit ?",
            "options": [
              "Ce à quoi j'ai droit personnellement",
              "L'ensemble des droits de l'homme seulement",
              "Ce qui me fait plaisir",
              "L'ensemble des droits et devoirs régissant la vie sociale"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le droit organise à la fois les droits et les devoirs de chacun."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La justice",
          "stepTheme": "La justice",
          "stepBadge": "La justice",
          "paragraphText": "• Justice : équité, égalité ; vertu qui consiste à donner à chacun ce qui lui revient.\nC'est aussi l'institution qui applique le droit et répare les torts.\nRousseau (Du contrat social) : les lois émanent de la volonté générale, c'est-à-dire de l'ensemble des citoyens.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p03_q5",
            "type": "mcq",
            "prompt": "Selon Rousseau, de quoi émanent les lois ?",
            "options": [
              "De la volonté du roi",
              "De la volonté des riches",
              "De la volonté générale",
              "Du hasard"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour Rousseau, la loi exprime la volonté de l'ensemble des citoyens."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Liberté et lois",
          "stepTheme": "Liberté et lois",
          "stepBadge": "Liberté et lois",
          "paragraphText": "On croit souvent que les lois s'opposent à la liberté.\nRousseau (Lettres écrites de la montagne) : « Il n'y a point de liberté sans lois. »\nDDHC (1789), article 4 : « La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui. »",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p03_q6",
            "type": "mcq",
            "prompt": "Selon Rousseau, quel est le rapport entre liberté et lois ?",
            "options": [
              "Les lois suppriment toujours la liberté",
              "La liberté n'a pas besoin de lois",
              "Les lois sont réservées aux esclaves",
              "Il n'y a point de liberté sans lois"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les lois protègent la liberté de chacun contre l'arbitraire des autres."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p03_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'État ?",
          "options": [
            "Une organisation politique et juridique qui exerce son autorité sur un territoire",
            "Un groupe d'amis",
            "Une religion",
            "Une entreprise privée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'État organise et gouverne la vie commune sur un territoire."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p03_q2",
          "type": "mcq",
          "prompt": "Que gagnent les hommes en sortant de l'état de nature ?",
          "options": [
            "Une liberté sans limites",
            "La sécurité et la justice",
            "Le droit du plus fort",
            "La fin de toutes les lois"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ils échangent une liberté sans garantie contre la protection des lois."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p03_q3",
          "type": "mcq",
          "prompt": "Selon Spinoza, quelle est la fin (le but) de l'État ?",
          "options": [
            "La guerre",
            "La richesse des dirigeants",
            "La liberté",
            "L'obéissance aveugle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour Spinoza, l'État existe pour garantir la liberté."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p03_q4",
          "type": "mcq",
          "prompt": "Quelle est la bonne définition du droit ?",
          "options": [
            "Ce à quoi j'ai droit personnellement",
            "L'ensemble des droits de l'homme seulement",
            "Ce qui me fait plaisir",
            "L'ensemble des droits et devoirs régissant la vie sociale"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le droit organise à la fois les droits et les devoirs de chacun."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p03_q5",
          "type": "mcq",
          "prompt": "Selon Rousseau, de quoi émanent les lois ?",
          "options": [
            "De la volonté du roi",
            "De la volonté des riches",
            "De la volonté générale",
            "Du hasard"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour Rousseau, la loi exprime la volonté de l'ensemble des citoyens."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p03_q6",
          "type": "mcq",
          "prompt": "Selon Rousseau, quel est le rapport entre liberté et lois ?",
          "options": [
            "Les lois suppriment toujours la liberté",
            "La liberté n'a pas besoin de lois",
            "Les lois sont réservées aux esclaves",
            "Il n'y a point de liberté sans lois"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les lois protègent la liberté de chacun contre l'arbitraire des autres."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p04",
      "order": 4,
      "title": "La nation",
      "summary": "Distinguer la nation de l'État ; la nation selon Renan.",
      "conceptExplanation": "La nation se distingue de l'État : la nation est une unité spontanée, l'État une organisation plus ou moins artificielle.\nUne nation peut être partagée entre plusieurs États ; un État peut rassembler plusieurs nations.\nConditions objectives : liens géographiques, ethniques, linguistiques, politiques, religieux.\nConditions subjectives : une conscience nationale.\nRenan (Qu'est-ce qu'une nation ?, 1882) : la nation est « une âme, un principe spirituel », fait d'un riche legs de souvenirs et du « désir de vivre ensemble ».",
      "keyRule": "Pour Renan, la nation = des souvenirs partagés + la volonté de vivre ensemble.",
      "formulas": [],
      "workedExample": {
        "title": "Une nation, plusieurs États",
        "statement": "Les Peuls vivent dans plusieurs pays d'Afrique de l'Ouest. Que montre cet exemple ?",
        "methodSteps": [
          "Un même peuple partage langue, histoire et culture.",
          "Il est réparti entre plusieurs États."
        ],
        "conclusion": "Une nation (au sens culturel) peut être partagée entre plusieurs États : nation et État ne se confondent pas."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Nation et État",
          "stepTheme": "Nation et État",
          "stepBadge": "Nation et État",
          "paragraphText": "• La nation est une unité spontanée (histoire, culture, conscience commune).\n• L'État est une organisation politique, plus ou moins artificielle.\nUne nation peut survivre partagée entre plusieurs États, et un État peut comprendre plusieurs nations.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p04_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces affirmations est juste ?",
            "options": [
              "Un État peut comprendre plusieurs nations",
              "Nation et État sont exactement la même chose",
              "Une nation ne peut jamais être partagée entre plusieurs États",
              "L'État est toujours une unité spontanée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La nation relève de l'identité commune ; l'État relève de l'organisation politique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les conditions objectives",
          "stepTheme": "Les conditions objectives",
          "stepBadge": "Les conditions objectives",
          "paragraphText": "La nation suppose des liens objectifs :\n• géographiques ;\n• ethniques ;\n• linguistiques ;\n• politiques ;\n• parfois religieux.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p04_q2",
            "type": "mcq",
            "prompt": "Lequel de ces éléments est une condition objective de la nation ?",
            "options": [
              "Le désir de vivre ensemble",
              "Une langue commune",
              "La conscience nationale",
              "La volonté de continuer l'héritage"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La langue est un lien objectif ; les autres sont des conditions subjectives."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Renan : une âme",
          "stepTheme": "Renan : une âme",
          "stepBadge": "Renan : une âme",
          "paragraphText": "Ernest Renan (1823-1892), Qu'est-ce qu'une nation ? : la nation est « une âme, un principe spirituel ».\nCette âme tient à deux choses :\n• dans le passé, « la possession en commun d'un riche legs de souvenirs » ;\n• dans le présent, « le désir de vivre ensemble ».",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p04_q3",
            "type": "mcq",
            "prompt": "Selon Renan, qu'est-ce qu'une nation ?",
            "options": [
              "« Un animal politique »",
              "« Une âme, un principe spirituel »",
              "« Le monopole de la violence légitime »",
              "« Un immense cimetière »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour Renan, la nation est d'abord un lien spirituel et une volonté commune."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La conscience nationale",
          "stepTheme": "La conscience nationale",
          "stepBadge": "La conscience nationale",
          "paragraphText": "• Conscience nationale : sentiment partagé d'appartenir à une même nation et volonté de construire un avenir commun.\nC'est la condition subjective de la nation.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p04_q4",
            "type": "mcq",
            "prompt": "Pourquoi la conscience nationale est-elle une condition subjective ?",
            "options": [
              "Parce qu'elle dépend du sentiment et de la volonté des membres",
              "Parce qu'elle se mesure en kilomètres",
              "Parce qu'elle dépend du climat",
              "Parce qu'elle est imposée par la nature"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle repose sur ce que les membres ressentent et veulent, pas sur des faits matériels."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La nation n'est pas seulement le passé",
          "stepTheme": "La nation n'est pas seulement le passé",
          "stepBadge": "La nation n'est pas seulement le passé",
          "paragraphText": "Renan : la nation est « l'aboutissement d'un long passé », mais elle se construit sans cesse par la volonté présente.\nUne nation sans désir de vivre ensemble se défait.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p04_q5",
            "type": "mcq",
            "prompt": "Selon Renan, que faut-il ajouter aux souvenirs communs pour qu'une nation existe ?",
            "options": [
              "Une armée puissante",
              "Une seule religion",
              "Une même couleur de peau",
              "Le désir actuel de vivre ensemble"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le passé partagé ne suffit pas : il faut aussi la volonté présente de vivre ensemble."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La Côte d'Ivoire, une nation à construire",
          "stepTheme": "La Côte d'Ivoire, une nation à construire",
          "stepBadge": "La Côte d'Ivoire, une nation à construire",
          "paragraphText": "La Côte d'Ivoire rassemble une soixantaine de peuples dans un même État.\nSelon Renan, la nation ivoirienne se construit par une histoire partagée et la volonté de vivre ensemble.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p04_q6",
            "type": "mcq",
            "prompt": "Selon la pensée de Renan, qu'est-ce qui fait l'unité de la nation ivoirienne ?",
            "options": [
              "Une seule langue maternelle pour tous",
              "Une seule ethnie",
              "Une histoire partagée et la volonté de vivre ensemble",
              "Une seule religion"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour Renan, la volonté commune compte plus que l'origine ethnique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p04_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces affirmations est juste ?",
          "options": [
            "Un État peut comprendre plusieurs nations",
            "Nation et État sont exactement la même chose",
            "Une nation ne peut jamais être partagée entre plusieurs États",
            "L'État est toujours une unité spontanée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La nation relève de l'identité commune ; l'État relève de l'organisation politique."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p04_q2",
          "type": "mcq",
          "prompt": "Lequel de ces éléments est une condition objective de la nation ?",
          "options": [
            "Le désir de vivre ensemble",
            "Une langue commune",
            "La conscience nationale",
            "La volonté de continuer l'héritage"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La langue est un lien objectif ; les autres sont des conditions subjectives."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p04_q3",
          "type": "mcq",
          "prompt": "Selon Renan, qu'est-ce qu'une nation ?",
          "options": [
            "« Un animal politique »",
            "« Une âme, un principe spirituel »",
            "« Le monopole de la violence légitime »",
            "« Un immense cimetière »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour Renan, la nation est d'abord un lien spirituel et une volonté commune."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p04_q4",
          "type": "mcq",
          "prompt": "Pourquoi la conscience nationale est-elle une condition subjective ?",
          "options": [
            "Parce qu'elle dépend du sentiment et de la volonté des membres",
            "Parce qu'elle se mesure en kilomètres",
            "Parce qu'elle dépend du climat",
            "Parce qu'elle est imposée par la nature"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle repose sur ce que les membres ressentent et veulent, pas sur des faits matériels."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p04_q5",
          "type": "mcq",
          "prompt": "Selon Renan, que faut-il ajouter aux souvenirs communs pour qu'une nation existe ?",
          "options": [
            "Une armée puissante",
            "Une seule religion",
            "Une même couleur de peau",
            "Le désir actuel de vivre ensemble"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le passé partagé ne suffit pas : il faut aussi la volonté présente de vivre ensemble."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p04_q6",
          "type": "mcq",
          "prompt": "Selon la pensée de Renan, qu'est-ce qui fait l'unité de la nation ivoirienne ?",
          "options": [
            "Une seule langue maternelle pour tous",
            "Une seule ethnie",
            "Une histoire partagée et la volonté de vivre ensemble",
            "Une seule religion"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour Renan, la volonté commune compte plus que l'origine ethnique."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p05",
      "order": 5,
      "title": "Conflit avec autrui et violence de l'État",
      "summary": "La relation conflictuelle à autrui (Hegel, Sartre) et la violence de l'État (Machiavel, Weber, Althusser).",
      "conceptExplanation": "La violence est l'usage abusif de la force pour asservir, faire souffrir ou anéantir.\nPour Hegel, autrui se révèle dans un conflit qui aboutit à la reconnaissance (dialectique du maître et de l'esclave).\nPour Sartre, le regard d'autrui me chosifie : la honte est « honte devant quelqu'un » (L'être et le néant).\nMachiavel (Le Prince) : en politique, la violence peut être un mal nécessaire.\nMax Weber : l'État a le monopole de la violence légitime.\nAlthusser : l'État dispose d'appareils idéologiques (école, médias, religion) et répressifs (police, armée, justice).",
      "keyRule": "Autrui peut être source de conflit ; l'État détient le monopole de la violence légitime.",
      "formulas": [],
      "workedExample": {
        "title": "La honte selon Sartre",
        "statement": "Je fais un geste maladroit, seul : je ne ressens rien. Quelqu'un me voit : j'ai honte. Pourquoi ?",
        "methodSteps": [
          "Seul, je vis mon geste sans le juger.",
          "Sous le regard d'autrui, je me vois comme un objet jugé.",
          "La honte naît de ce regard."
        ],
        "conclusion": "Pour Sartre, la honte est toujours honte devant quelqu'un : autrui me chosifie."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La violence",
          "stepTheme": "La violence",
          "stepBadge": "La violence",
          "paragraphText": "• Violence : usage abusif de la force.\nIl y a violence quand un individu ou un groupe cherche à asservir, faire souffrir, aliéner ou anéantir un autre.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p05_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce que la violence ?",
            "options": [
              "Le respect de la loi",
              "La discussion pacifique",
              "L'usage abusif de la force",
              "L'éducation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La violence, c'est la force utilisée de façon abusive contre autrui."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Hegel : maître et esclave",
          "stepTheme": "Hegel : maître et esclave",
          "stepBadge": "Hegel : maître et esclave",
          "paragraphText": "Pour Hegel (Phénoménologie de l'esprit), deux consciences s'affrontent pour être reconnues.\nL'une devient maître, l'autre esclave : c'est la dialectique du maître et de l'esclave.\nLe conflit débouche sur la reconnaissance.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p05_q2",
            "type": "mcq",
            "prompt": "Sur quoi débouche le conflit des consciences chez Hegel ?",
            "options": [
              "Sur la reconnaissance mutuelle",
              "Sur l'indifférence",
              "Sur la disparition des deux consciences",
              "Sur le solipsisme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chez Hegel, le conflit permet à chaque conscience d'être reconnue."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Sartre : le regard d'autrui",
          "stepTheme": "Sartre : le regard d'autrui",
          "stepBadge": "Sartre : le regard d'autrui",
          "paragraphText": "Sartre (L'être et le néant) : « La honte est toujours honte devant quelqu'un (…). J'ai honte de moi tel que j'apparais à autrui. »\nPar son regard, autrui me chosifie, me juge et limite ma liberté.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p05_q3",
            "type": "mcq",
            "prompt": "Selon Sartre, que fait le regard d'autrui ?",
            "options": [
              "Il me rend invisible",
              "Il me rend totalement libre",
              "Il n'a aucun effet",
              "Il me chosifie et me juge"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Sous le regard d'autrui, je deviens un objet jugé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Machiavel",
          "stepTheme": "Machiavel",
          "stepBadge": "Machiavel",
          "paragraphText": "Machiavel (Le Prince) : « Qui veut faire entièrement profession d'homme de bien ne peut éviter sa perte parmi tant d'autres qui ne sont pas bons. »\nPour lui, en politique, la violence peut être un mal nécessaire pour maintenir l'ordre.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p05_q4",
            "type": "mcq",
            "prompt": "Selon Machiavel, quelle est la place de la violence en politique ?",
            "options": [
              "Elle est toujours interdite",
              "Elle peut être un mal nécessaire pour maintenir l'ordre",
              "Elle n'existe pas",
              "Elle est réservée aux citoyens"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour Machiavel, un dirigeant trop bon dans un monde de méchants court à sa perte."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Weber : la violence légitime",
          "stepTheme": "Weber : la violence légitime",
          "stepBadge": "Weber : la violence légitime",
          "paragraphText": "Max Weber : l'État moderne détient le monopole de la violence physique légitime.\nSeul l'État peut légalement utiliser la force (police, armée, justice).\nPrécision : la séparation des trois pouvoirs (législatif, exécutif, judiciaire) est une idée de Montesquieu, que le PDF mêle à Weber.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p05_q5",
            "type": "mcq",
            "prompt": "Selon Max Weber, de quoi l'État a-t-il le monopole ?",
            "options": [
              "De la richesse",
              "De la violence légitime",
              "De la religion",
              "De la vérité"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Seul l'État a le droit d'utiliser légalement la force."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Althusser : deux sortes d'appareils",
          "stepTheme": "Althusser : deux sortes d'appareils",
          "stepBadge": "Althusser : deux sortes d'appareils",
          "paragraphText": "Louis Althusser distingue :\n• les appareils idéologiques d'État (AIE) : médias, école, religion, culture… ils imposent une vision du monde ;\n• les appareils répressifs d'État (ARE) : police, armée, justice… ils contraignent par la force.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p05_q6",
            "type": "mcq",
            "prompt": "Lequel de ces éléments est un appareil répressif d'État selon Althusser ?",
            "options": [
              "L'école",
              "Les médias",
              "La religion",
              "La police"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La police contraint par la force ; l'école, les médias et la religion sont des appareils idéologiques."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p05_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce que la violence ?",
          "options": [
            "Le respect de la loi",
            "La discussion pacifique",
            "L'usage abusif de la force",
            "L'éducation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La violence, c'est la force utilisée de façon abusive contre autrui."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p05_q2",
          "type": "mcq",
          "prompt": "Sur quoi débouche le conflit des consciences chez Hegel ?",
          "options": [
            "Sur la reconnaissance mutuelle",
            "Sur l'indifférence",
            "Sur la disparition des deux consciences",
            "Sur le solipsisme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chez Hegel, le conflit permet à chaque conscience d'être reconnue."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p05_q3",
          "type": "mcq",
          "prompt": "Selon Sartre, que fait le regard d'autrui ?",
          "options": [
            "Il me rend invisible",
            "Il me rend totalement libre",
            "Il n'a aucun effet",
            "Il me chosifie et me juge"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Sous le regard d'autrui, je deviens un objet jugé."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p05_q4",
          "type": "mcq",
          "prompt": "Selon Machiavel, quelle est la place de la violence en politique ?",
          "options": [
            "Elle est toujours interdite",
            "Elle peut être un mal nécessaire pour maintenir l'ordre",
            "Elle n'existe pas",
            "Elle est réservée aux citoyens"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour Machiavel, un dirigeant trop bon dans un monde de méchants court à sa perte."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p05_q5",
          "type": "mcq",
          "prompt": "Selon Max Weber, de quoi l'État a-t-il le monopole ?",
          "options": [
            "De la richesse",
            "De la violence légitime",
            "De la religion",
            "De la vérité"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Seul l'État a le droit d'utiliser légalement la force."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p05_q6",
          "type": "mcq",
          "prompt": "Lequel de ces éléments est un appareil répressif d'État selon Althusser ?",
          "options": [
            "L'école",
            "Les médias",
            "La religion",
            "La police"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La police contraint par la force ; l'école, les médias et la religion sont des appareils idéologiques."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p06",
      "order": 6,
      "title": "Entraînement : autrui et la loi",
      "summary": "Préparer « Autrui est-il absolument mon ennemi ? » et « Une société sans lois est-elle envisageable ? ».",
      "conceptExplanation": "« Autrui est-il absolument mon ennemi ? » : axe 1, autrui me gêne et me nuit (Sartre, Nietzsche, Freud) ; axe 2, autrui est indispensable et m'enrichit (Aristote, Badian, Saint-Exupéry).\n« Une société sans lois est-elle envisageable ? » : axe 1, oui pour les anarchistes (Rousseau sur la bonté naturelle, Bakounine) ; axe 2, non, sans lois règne le droit du plus fort (Hobbes, Locke, Kant, Rousseau : « Il n'y a point de liberté sans lois »).",
      "keyRule": "Autrui et la loi : sources de contraintes, mais conditions de notre liberté.",
      "formulas": [],
      "workedExample": {
        "title": "Plan de « Une société sans lois est-elle envisageable ? »",
        "statement": "Construis deux axes.",
        "methodSteps": [
          "Axe 1 : on pourrait se passer des lois si les hommes étaient naturellement bons (anarchistes ; Bakounine : l'État est « un immense cimetière »).",
          "Axe 2 : la loi est indispensable ; sans elle, c'est la guerre de chacun contre chacun (Hobbes) ; « il n'y a point de liberté sans lois » (Rousseau)."
        ],
        "conclusion": "Une société sans lois n'est guère envisageable : la loi protège la liberté de tous."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Autrui, mon ennemi ?",
          "stepTheme": "Autrui, mon ennemi ?",
          "stepBadge": "Autrui, mon ennemi ?",
          "paragraphText": "Arguments pour « autrui est mon ennemi » :\n• Sartre : « L'enfer, c'est les autres » (Huis clos) ;\n• Nietzsche : vivre, c'est « dépouiller, blesser, violenter le faible et l'étranger » ;\n• Freud : l'homme satisfait son agressivité aux dépens de son prochain.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p06_q1",
            "type": "mcq",
            "prompt": "Quelle référence soutient que autrui peut être une menace ?",
            "options": [
              "Sartre : « L'enfer, c'est les autres »",
              "Aristote : « animal politique »",
              "Saint-Exupéry : « tu m'enrichis »",
              "Badian : « l'homme n'est rien sans les autres »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La formule de Sartre présente autrui comme une source de souffrance."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Autrui, indispensable",
          "stepTheme": "Autrui, indispensable",
          "stepBadge": "Autrui, indispensable",
          "paragraphText": "Arguments pour « autrui est indispensable » :\n• Aristote : l'homme est un animal politique ;\n• Badian : « L'homme n'est rien sans les autres » ;\n• Saint-Exupéry : « Si tu diffères de moi, mon frère, loin de me léser, tu m'enrichis » (Lettre à un otage ; le PDF écrit Terre des hommes).",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p06_q2",
            "type": "mcq",
            "prompt": "Quelle citation montre que la différence d'autrui est une richesse ?",
            "options": [
              "« L'enfer, c'est les autres »",
              "« L'homme est un loup pour l'homme »",
              "« Si tu diffères de moi, mon frère, loin de me léser, tu m'enrichis »",
              "« La honte est toujours honte devant quelqu'un »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Saint-Exupéry voit dans la différence de l'autre un enrichissement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Une société sans lois ?",
          "stepTheme": "Une société sans lois ?",
          "stepBadge": "Une société sans lois ?",
          "paragraphText": "Axe 1 (anarchistes) : si les hommes sont naturellement bons (Rousseau), ils peuvent vivre en paix sans contrainte.\nBakounine : l'État est « un immense cimetière » où meurt la vie individuelle.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p06_q3",
            "type": "mcq",
            "prompt": "Quel courant pense qu'une société pourrait se passer de l'État et des lois ?",
            "options": [
              "Le contractualisme de Hobbes",
              "Le rationalisme de Kant",
              "Le stoïcisme",
              "L'anarchisme"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les anarchistes, comme Bakounine, rejettent l'État et la contrainte des lois."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La loi indispensable",
          "stepTheme": "La loi indispensable",
          "stepBadge": "La loi indispensable",
          "paragraphText": "Axe 2 : sans lois, règne le droit du plus fort.\nHobbes (Léviathan) : sans pouvoir commun, c'est « la guerre de chacun contre chacun ».\nLocke : l'état de nature est « plein de crainte » et « exposé à de continuels dangers ».",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p06_q4",
            "type": "mcq",
            "prompt": "Selon Hobbes, que se passe-t-il sans pouvoir commun ?",
            "options": [
              "La paix éternelle",
              "Le bonheur de tous",
              "La guerre de chacun contre chacun",
              "La fin des conflits"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour Hobbes, sans État, les hommes vivent dans la peur et la guerre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le texte de Hegel",
          "stepTheme": "Le texte de Hegel",
          "stepBadge": "Le texte de Hegel",
          "paragraphText": "Hegel (Propédeutique philosophique) : l'état de nature est un état « de rudesse, de violence et d'injustice ».\nThèse : il faut sortir de l'état de nature pour instituer l'État, où « prédomine le vouloir raisonnable ».\nAntithèse possible : Rousseau, « l'homme est naturellement bon ».",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p06_q5",
            "type": "mcq",
            "prompt": "Quelle est la thèse du texte de Hegel sur l'état de nature ?",
            "options": [
              "L'état de nature est l'âge d'or de l'humanité",
              "Il faut sortir de l'état de nature pour instituer l'État",
              "L'État corrompt l'homme naturellement bon",
              "La violence est toujours bonne"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Hegel rejette l'idée d'un état de nature parfait : seul l'État rend le droit effectif."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Conclure avec nuance",
          "stepTheme": "Conclure avec nuance",
          "stepBadge": "Conclure avec nuance",
          "paragraphText": "Conclusion possible : la vie en société impose des contraintes (autrui, lois, État), mais ce sont aussi les conditions de notre liberté.\nL'homme peut améliorer ces institutions quand elles ne répondent plus à ses aspirations.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p06_q6",
            "type": "mcq",
            "prompt": "Quelle conclusion est la plus nuancée ?",
            "options": [
              "La société contraint l'homme mais lui permet aussi d'être libre",
              "La société n'apporte que des malheurs",
              "La société n'impose aucune contrainte",
              "L'homme serait plus libre seul dans la forêt"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une bonne conclusion reconnaît à la fois les contraintes et les bienfaits de la vie sociale."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p06_q1",
          "type": "mcq",
          "prompt": "Quelle référence soutient que autrui peut être une menace ?",
          "options": [
            "Sartre : « L'enfer, c'est les autres »",
            "Aristote : « animal politique »",
            "Saint-Exupéry : « tu m'enrichis »",
            "Badian : « l'homme n'est rien sans les autres »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La formule de Sartre présente autrui comme une source de souffrance."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p06_q2",
          "type": "mcq",
          "prompt": "Quelle citation montre que la différence d'autrui est une richesse ?",
          "options": [
            "« L'enfer, c'est les autres »",
            "« L'homme est un loup pour l'homme »",
            "« Si tu diffères de moi, mon frère, loin de me léser, tu m'enrichis »",
            "« La honte est toujours honte devant quelqu'un »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Saint-Exupéry voit dans la différence de l'autre un enrichissement."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p06_q3",
          "type": "mcq",
          "prompt": "Quel courant pense qu'une société pourrait se passer de l'État et des lois ?",
          "options": [
            "Le contractualisme de Hobbes",
            "Le rationalisme de Kant",
            "Le stoïcisme",
            "L'anarchisme"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les anarchistes, comme Bakounine, rejettent l'État et la contrainte des lois."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p06_q4",
          "type": "mcq",
          "prompt": "Selon Hobbes, que se passe-t-il sans pouvoir commun ?",
          "options": [
            "La paix éternelle",
            "Le bonheur de tous",
            "La guerre de chacun contre chacun",
            "La fin des conflits"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour Hobbes, sans État, les hommes vivent dans la peur et la guerre."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p06_q5",
          "type": "mcq",
          "prompt": "Quelle est la thèse du texte de Hegel sur l'état de nature ?",
          "options": [
            "L'état de nature est l'âge d'or de l'humanité",
            "Il faut sortir de l'état de nature pour instituer l'État",
            "L'État corrompt l'homme naturellement bon",
            "La violence est toujours bonne"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Hegel rejette l'idée d'un état de nature parfait : seul l'État rend le droit effectif."
        },
        {
          "id": "terminale_philo_conditions_liberte_l02_vie_en_societe_p06_q6",
          "type": "mcq",
          "prompt": "Quelle conclusion est la plus nuancée ?",
          "options": [
            "La société contraint l'homme mais lui permet aussi d'être libre",
            "La société n'apporte que des malheurs",
            "La société n'impose aucune contrainte",
            "L'homme serait plus libre seul dans la forêt"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une bonne conclusion reconnaît à la fois les contraintes et les bienfaits de la vie sociale."
        }
      ]
    }
  ]
};
