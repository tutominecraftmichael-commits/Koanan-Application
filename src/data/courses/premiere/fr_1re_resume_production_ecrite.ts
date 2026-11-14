import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir des PDF officiels « 1ere_EE_Prdtion-écrite » séances 6 à 9 (résumé de texte argumentatif, production écrite). Toutes les Premières.
// Fichier généré (scratchpad build_1re_fr_resume_pe.mjs) : modifier le générateur plutôt que ce fichier.
export const FR_1RE_EE_RESUME_PRODUCTION_ECRITE: CurriculumChapter = {
  "id": "premiere_a1_francais_ee_resume_production_ecrite",
  "subjectId": "francais",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 1,
  "title": "Expression écrite : le résumé de texte argumentatif (la production écrite)",
  "summary": "Séances 6 à 9 : analyser le sujet de production écrite (étayer, réfuter), rechercher et organiser les idées, rédiger des paragraphes argumentatifs.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "1ere_EE_Prdtion-écrite_S_6_7_8_Analyser_sujet-Rech_idées, S9_Rédiger_paragr_argument (École numérique)",
  "points": [
    {
      "id": "premiere_a1_francais_ee_resume_production_ecrite_p01",
      "order": 1,
      "title": "Analyser le sujet de la production écrite",
      "summary": "Repérer l’opinion et la consigne, comprendre « étayez » et « réfutez », expliquer les mots-clés et reformuler l’opinion.",
      "conceptExplanation": "- La production écrite suit le résumé du texte argumentatif : on y discute une opinion, en un développement de quelques paragraphes argumentatifs.\n- Composition du sujet : l’opinion de l’auteur, donnée dans une phrase affirmative, et la consigne.\n- Sujet A : « S’il y a un domaine dans lequel l’Afrique a vite réduit l’écart de son retard par rapport aux autres continents, notamment l’Europe, c’est bien dans celui du football. » Étayez cette assertion d’Alphonse Boolamou de Ligouri.\n- Sujet B : Réfutez la pensée de Michel Tournier selon laquelle, pour certains écrivains, le lecteur n’apparaît nullement comme le destinataire obligé de leur écrit.\n- Étayer : soutenir, justifier l’opinion par des arguments et des exemples.\n- Réfuter : rejeter l’opinion en montrant, par des arguments contraires, qu’elle est fausse.\n- Mots-clés : « réduire l’écart de son retard » = rattraper, égaler, atteindre, se développer ; « livre » = tout document écrit, tout ouvrage ; « destinataire obligé » = public cible, catégorie de lecteurs.\n- Reformulation : sujet A, il faut justifier que l’Afrique a rattrapé l’Europe dans le domaine du football ; sujet B, il faut montrer que tout livre publié vise une certaine catégorie de lecteurs, un public cible.",
      "keyRule": "Sujet = opinion + consigne. Étayer = justifier l’opinion ; réfuter = démontrer qu’elle est fausse. Toujours expliquer les mots-clés puis reformuler.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser le sujet A",
        "statement": "« S’il y a un domaine dans lequel l’Afrique a vite réduit l’écart de son retard par rapport aux autres continents, notamment l’Europe, c’est bien dans celui du football. » Étayez cette assertion d’Alphonse Boolamou de Ligouri.",
        "methodSteps": [
          "Opinion : « S’il y a un domaine dans lequel l’Afrique a vite réduit l’écart de son retard… c’est bien dans celui du football. »",
          "Consigne : « Étayez cette assertion » : il faut la justifier.",
          "Mot-clé : « réduire l’écart de son retard » = rattraper, égaler.",
          "Reformulation : justifier que l’Afrique a rattrapé l’Europe dans le football."
        ],
        "conclusion": "Tout le développement soutiendra cette idée par des arguments et des exemples."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Le sujet",
          "stepTheme": "Opinion et consigne",
          "stepTitle": "Les deux parties du sujet de production écrite",
          "paragraphText": "Le sujet de la production écrite comporte deux parties : l’**opinion de l’auteur**, donnée dans une phrase affirmative, et la **consigne**, qui dit ce qu’il faut faire.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q1",
            "type": "mcq",
            "prompt": "Voici un sujet : « S’il y a un domaine dans lequel l’Afrique a vite réduit l’écart de son retard par rapport aux autres continents, notamment l’Europe, c’est bien dans celui du football. » Étayez cette assertion d’Alphonse Boolamou de Ligouri. Quelle est la consigne ?",
            "options": [
              "« Étayez cette assertion d’Alphonse Boolamou de Ligouri »",
              "« L’Afrique a vite réduit l’écart de son retard »",
              "« notamment l’Europe »",
              "« c’est bien dans celui du football »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La consigne est le verbe à l’impératif ; le reste est l’opinion de l’auteur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Étayer",
          "stepTheme": "Justifier",
          "stepTitle": "Que demande la consigne « étayez » ?",
          "paragraphText": "**Étayer** une opinion, c’est la **soutenir** : la justifier par des arguments expliqués et des exemples précis.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q2",
            "type": "mcq",
            "prompt": "Que demande la consigne « Étayez cette assertion » ?",
            "options": [
              "Justifier l’opinion par des arguments et des exemples",
              "Démontrer que l’opinion est fausse",
              "Résumer l’opinion en une phrase",
              "Donner le pour et le contre à égalité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Étayer = soutenir, justifier ; c’est le contraire de réfuter."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Réfuter",
          "stepTheme": "Démontrer le contraire",
          "stepTitle": "Que demande la consigne « réfutez » ?",
          "paragraphText": "**Réfuter** une opinion, c’est la **rejeter** en montrant, par des arguments contraires et des exemples, qu’elle est **fausse**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q3",
            "type": "mcq",
            "prompt": "Voici un sujet : Réfutez la pensée de Michel Tournier selon laquelle, pour certains écrivains, le lecteur n’apparaît nullement comme le destinataire obligé de leur écrit. Que demande la consigne ?",
            "options": [
              "Montrer, par des arguments contraires, que la pensée de Michel Tournier est fausse",
              "Justifier la pensée de Michel Tournier",
              "Résumer la vie de Michel Tournier",
              "Recopier la pensée de Michel Tournier"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Réfuter = démontrer que l’opinion est fausse."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Mots-clés",
          "stepTheme": "Sujet A",
          "stepTitle": "Le sens de « réduire l’écart de son retard »",
          "paragraphText": "Dans le sujet A, « réduire l’écart de son retard » signifie **rattraper, égaler, atteindre** le niveau des autres continents, se développer.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q4",
            "type": "mcq",
            "prompt": "Dans la phrase « l’Afrique a vite réduit l’écart de son retard par rapport aux autres continents », que signifie « réduire l’écart de son retard » ?",
            "options": [
              "Rattraper, égaler les autres continents",
              "Prendre encore plus de retard",
              "Arriver en retard aux matchs",
              "Refuser de jouer contre l’Europe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Réduire l’écart, c’est se rapprocher du niveau des autres, les rattraper."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Reformuler",
          "stepTheme": "Sujet A",
          "stepTitle": "Reformuler l’opinion du sujet A",
          "paragraphText": "La **reformulation** dit avec ses propres mots ce qu’il faut démontrer : pour le sujet A, il faut **justifier que l’Afrique a rattrapé l’Europe dans le football**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q5",
            "type": "mcq",
            "prompt": "Voici un sujet : « S’il y a un domaine dans lequel l’Afrique a vite réduit l’écart de son retard par rapport aux autres continents, notamment l’Europe, c’est bien dans celui du football. » Étayez cette assertion d’Alphonse Boolamou de Ligouri. Quelle reformulation convient ?",
            "options": [
              "Il faut justifier que l’Afrique a rattrapé l’Europe dans le domaine du football",
              "Il faut montrer que le football africain est en retard",
              "Il faut raconter l’histoire de la Coupe du monde",
              "Il faut comparer l’Afrique et l’Europe dans tous les domaines"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La reformulation reprend l’opinion (l’Afrique a rattrapé l’Europe) dans le seul domaine du football."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Mots-clés",
          "stepTheme": "Sujet B",
          "stepTitle": "Le sens de « destinataire obligé »",
          "paragraphText": "Dans le sujet B, le « **destinataire obligé** » d’un écrit est son **public cible**, la **catégorie de lecteurs** à qui il s’adresse ; le « livre » désigne tout document écrit.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q6",
            "type": "mcq",
            "prompt": "Dans la pensée de Michel Tournier, « le lecteur n’apparaît nullement comme le destinataire obligé de leur écrit », que signifie « destinataire obligé » ?",
            "options": [
              "Le public cible, la catégorie de lecteurs visée",
              "Le facteur qui distribue le courrier",
              "L’éditeur qui imprime le livre",
              "Le personnage principal du roman"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le destinataire obligé = le public auquel l’écrit est destiné."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Sens de la réfutation",
          "stepTheme": "Sujet B",
          "stepTitle": "Ce qu’il faut démontrer dans le sujet B",
          "paragraphText": "Michel Tournier dit que certains écrivains n’écrivent pour aucun lecteur précis. **Réfuter**, c’est donc montrer le contraire : **tout livre publié vise une certaine catégorie de lecteurs**. Approuver Michel Tournier serait un contresens.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q7",
            "type": "mcq",
            "prompt": "Voici un sujet : Réfutez la pensée de Michel Tournier selon laquelle, pour certains écrivains, le lecteur n’apparaît nullement comme le destinataire obligé de leur écrit. Quelle idée générale faut-il démontrer ?",
            "options": [
              "Tout livre publié vise une certaine catégorie de lecteurs, un public cible",
              "Les écrivains n’écrivent jamais pour un public",
              "Le lecteur n’a aucune importance pour l’écrivain",
              "Seuls les journaux ont des lecteurs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La réfutation soutient l’idée inverse de celle de Michel Tournier."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q1",
          "type": "mcq",
          "prompt": "Voici un sujet : « S’il y a un domaine dans lequel l’Afrique a vite réduit l’écart de son retard par rapport aux autres continents, notamment l’Europe, c’est bien dans celui du football. » Étayez cette assertion d’Alphonse Boolamou de Ligouri. Quelle est la consigne ?",
          "options": [
            "« Étayez cette assertion d’Alphonse Boolamou de Ligouri »",
            "« L’Afrique a vite réduit l’écart de son retard »",
            "« notamment l’Europe »",
            "« c’est bien dans celui du football »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La consigne est le verbe à l’impératif ; le reste est l’opinion de l’auteur."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q2",
          "type": "mcq",
          "prompt": "Que demande la consigne « Étayez cette assertion » ?",
          "options": [
            "Justifier l’opinion par des arguments et des exemples",
            "Démontrer que l’opinion est fausse",
            "Résumer l’opinion en une phrase",
            "Donner le pour et le contre à égalité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Étayer = soutenir, justifier ; c’est le contraire de réfuter."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q3",
          "type": "mcq",
          "prompt": "Voici un sujet : Réfutez la pensée de Michel Tournier selon laquelle, pour certains écrivains, le lecteur n’apparaît nullement comme le destinataire obligé de leur écrit. Que demande la consigne ?",
          "options": [
            "Montrer, par des arguments contraires, que la pensée de Michel Tournier est fausse",
            "Justifier la pensée de Michel Tournier",
            "Résumer la vie de Michel Tournier",
            "Recopier la pensée de Michel Tournier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Réfuter = démontrer que l’opinion est fausse."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q4",
          "type": "mcq",
          "prompt": "Dans la phrase « l’Afrique a vite réduit l’écart de son retard par rapport aux autres continents », que signifie « réduire l’écart de son retard » ?",
          "options": [
            "Rattraper, égaler les autres continents",
            "Prendre encore plus de retard",
            "Arriver en retard aux matchs",
            "Refuser de jouer contre l’Europe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Réduire l’écart, c’est se rapprocher du niveau des autres, les rattraper."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q5",
          "type": "mcq",
          "prompt": "Voici un sujet : « S’il y a un domaine dans lequel l’Afrique a vite réduit l’écart de son retard par rapport aux autres continents, notamment l’Europe, c’est bien dans celui du football. » Étayez cette assertion d’Alphonse Boolamou de Ligouri. Quelle reformulation convient ?",
          "options": [
            "Il faut justifier que l’Afrique a rattrapé l’Europe dans le domaine du football",
            "Il faut montrer que le football africain est en retard",
            "Il faut raconter l’histoire de la Coupe du monde",
            "Il faut comparer l’Afrique et l’Europe dans tous les domaines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La reformulation reprend l’opinion (l’Afrique a rattrapé l’Europe) dans le seul domaine du football."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q6",
          "type": "mcq",
          "prompt": "Dans la pensée de Michel Tournier, « le lecteur n’apparaît nullement comme le destinataire obligé de leur écrit », que signifie « destinataire obligé » ?",
          "options": [
            "Le public cible, la catégorie de lecteurs visée",
            "Le facteur qui distribue le courrier",
            "L’éditeur qui imprime le livre",
            "Le personnage principal du roman"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le destinataire obligé = le public auquel l’écrit est destiné."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q7",
          "type": "mcq",
          "prompt": "Voici un sujet : Réfutez la pensée de Michel Tournier selon laquelle, pour certains écrivains, le lecteur n’apparaît nullement comme le destinataire obligé de leur écrit. Quelle idée générale faut-il démontrer ?",
          "options": [
            "Tout livre publié vise une certaine catégorie de lecteurs, un public cible",
            "Les écrivains n’écrivent jamais pour un public",
            "Le lecteur n’a aucune importance pour l’écrivain",
            "Seuls les journaux ont des lecteurs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La réfutation soutient l’idée inverse de celle de Michel Tournier."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_resume_production_ecrite_p02",
      "order": 2,
      "title": "Rechercher et organiser les idées",
      "summary": "Varier les domaines de recherche, trouver des arguments expliqués et des exemples exacts, et les organiser.",
      "conceptExplanation": "- Pour trouver des idées, on varie les domaines de recherche. Pour le sujet A : le rayonnement des pays grâce à leurs vedettes, la valeur et le talent des joueurs, les infrastructures, la compétitivité des équipes.\n- Chaque idée est un argument, accompagné de son explication et d’un exemple précis.\n- Sujet A : Didier Drogba a fait connaître la Côte d’Ivoire dans le monde ; Samuel Eto’o a été meilleur buteur du championnat d’Espagne en 2005-2006 ; l’Afrique du Sud a organisé la Coupe du monde 2010 (19e édition, du 11 juin au 11 juillet 2010) ; les équipes de Côte d’Ivoire, du Cameroun ou du Maroc rivalisent avec les grandes nations (le Maroc a atteint les demi-finales de la Coupe du monde 2022).\n- Sujet B : certains écrits visent les érudits (thèses, revue En-Quête de l’Université Félix Houphouët-Boigny) ; d’autres informent le grand public (journaux sportifs et politiques, magazines) ; d’autres s’adressent à la jeunesse (Alice au pays des merveilles de Lewis Carroll).\n- Corrections du document : Samuel Eto’o n’a pas été « meilleur buteur de tous les championnats européens », mais meilleur buteur du championnat d’Espagne en 2005-2006 ; la Coupe du monde africaine est celle de 2010, en Afrique du Sud (le document ne donne ni l’année ni le pays) ; Lewis Carroll s’écrit avec deux r ; Science et Vie est un magazine de vulgarisation destiné au grand public, et non une revue réservée aux chercheurs.",
      "keyRule": "Un argument = une idée + son explication + un exemple exact (nom, date, lieu vérifiés).",
      "formulas": [],
      "workedExample": {
        "title": "Évaluation corrigée : les idées du sujet B",
        "statement": "Réfutez la pensée de Michel Tournier selon laquelle, pour certains écrivains, le lecteur n’apparaît nullement comme le destinataire obligé de leur écrit.",
        "methodSteps": [
          "Argument 1 : certains écrits sont destinés aux érudits, aux savants (thèses, revue En-Quête).",
          "Argument 2 : certains écrits populaires informent les masses (journaux, magazines, revues de vulgarisation).",
          "Argument 3 : certains auteurs écrivent pour la jeunesse (Alice au pays des merveilles de Lewis Carroll)."
        ],
        "conclusion": "Chaque type d’écrit a son public : la pensée de Michel Tournier est réfutée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Varier les domaines",
          "stepTheme": "Chercher large",
          "stepTitle": "Comment trouver des idées pour le sujet A ?",
          "paragraphText": "Pour trouver des idées, on **varie les domaines de recherche** : pour le football africain, le rayonnement des pays grâce aux vedettes, le talent des joueurs, les infrastructures, la compétitivité des équipes.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q1",
            "type": "mcq",
            "prompt": "Pour le sujet « S’il y a un domaine dans lequel l’Afrique a vite réduit l’écart de son retard par rapport aux autres continents, notamment l’Europe, c’est bien dans celui du football. » Étayez cette assertion d’Alphonse Boolamou de Ligouri., lequel de ces domaines de recherche est hors sujet ?",
            "options": [
              "Le prix des billets d’avion entre l’Afrique et l’Europe",
              "Les infrastructures sportives africaines",
              "Le talent des joueurs africains",
              "La compétitivité des équipes nationales africaines"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les trois autres domaines montrent que l’Afrique a rattrapé l’Europe dans le football."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Rayonnement",
          "stepTheme": "Didier Drogba",
          "stepTitle": "Quel argument illustre Didier Drogba ?",
          "paragraphText": "Les vedettes du football africain sont de **vrais ambassadeurs** : le talent de **Didier Drogba** a fait connaître la Côte d’Ivoire dans le monde entier.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q2",
            "type": "mcq",
            "prompt": "Pour le sujet « S’il y a un domaine dans lequel l’Afrique a vite réduit l’écart de son retard par rapport aux autres continents, notamment l’Europe, c’est bien dans celui du football. » Étayez cette assertion d’Alphonse Boolamou de Ligouri., quel argument illustre l’exemple de Didier Drogba, qui a fait connaître la Côte d’Ivoire dans le monde entier ?",
            "options": [
              "Les vedettes du football rendent leur pays célèbre dans le monde",
              "L’Afrique manque de stades modernes",
              "Les joueurs africains jouent seulement en Afrique",
              "Le football africain est en retard sur l’Europe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Drogba illustre le rayonnement des pays grâce à leurs vedettes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Infrastructures",
          "stepTheme": "Coupe du monde 2010",
          "stepTitle": "Quel argument illustre la Coupe du monde 2010 ?",
          "paragraphText": "L’Afrique a des stades capables d’accueillir les plus grandes compétitions : l’**Afrique du Sud** a organisé la **Coupe du monde 2010** (19e édition, du 11 juin au 11 juillet 2010). Le document oublie de préciser l’année et le pays.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q3",
            "type": "mcq",
            "prompt": "Pour le sujet « S’il y a un domaine dans lequel l’Afrique a vite réduit l’écart de son retard par rapport aux autres continents, notamment l’Europe, c’est bien dans celui du football. » Étayez cette assertion d’Alphonse Boolamou de Ligouri., quel argument illustre l’organisation de la Coupe du monde 2010 par l’Afrique du Sud ?",
            "options": [
              "L’Afrique dispose d’infrastructures capables d’accueillir de grandes compétitions",
              "Les joueurs africains sont les mieux payés du monde",
              "L’Afrique n’a jamais participé à la Coupe du monde",
              "Le football est le seul sport pratiqué en Afrique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Accueillir une Coupe du monde prouve que les stades sont au niveau international."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Exemple exact",
          "stepTheme": "Samuel Eto’o",
          "stepTitle": "Vérifier un exemple : Samuel Eto’o",
          "paragraphText": "Le document affirme qu’Eto’o a été « meilleur buteur de tous les championnats européens » : c’est exagéré. **Samuel Eto’o** a été **meilleur buteur du championnat d’Espagne en 2005-2006**. Un exemple faux affaiblit tout l’argument.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q4",
            "type": "mcq",
            "prompt": "Quel titre de buteur Samuel Eto’o, attaquant camerounais du FC Barcelone, a-t-il réellement obtenu ?",
            "options": [
              "Meilleur buteur du championnat d’Espagne en 2005-2006",
              "Meilleur buteur de tous les championnats européens à la fois",
              "Meilleur buteur de la Coupe du monde 2010",
              "Il n’a jamais marqué en Europe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il fut le meilleur buteur de la Liga en 2005-2006 ; le document exagère."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Compétitivité",
          "stepTheme": "Le Maroc en 2022",
          "stepTitle": "Quel argument illustre le parcours du Maroc en 2022 ?",
          "paragraphText": "Les équipes africaines rivalisent avec les grandes nations : en 2022, le **Maroc** est devenu la première équipe africaine demi-finaliste d’une Coupe du monde.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q5",
            "type": "mcq",
            "prompt": "Pour le sujet « S’il y a un domaine dans lequel l’Afrique a vite réduit l’écart de son retard par rapport aux autres continents, notamment l’Europe, c’est bien dans celui du football. » Étayez cette assertion d’Alphonse Boolamou de Ligouri., quel argument illustre le parcours du Maroc, demi-finaliste de la Coupe du monde 2022 ?",
            "options": [
              "Les équipes africaines sont compétitives face aux grandes nations",
              "Les stades africains sont trop petits",
              "Les vedettes africaines jouent toutes au Maroc",
              "Le football africain n’intéresse personne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Atteindre les demi-finales prouve que l’Afrique rivalise avec les meilleures équipes."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Idées organisées du sujet A (le football africain)",
            "caption": "Chaque argument est expliqué puis illustré par un exemple précis et exact.",
            "tableData": {
              "headers": [
                "Argument",
                "Explication",
                "Exemple"
              ],
              "rows": [
                [
                  "Les vedettes rendent leur pays célèbre",
                  "Elles sont de vrais ambassadeurs de leur pays",
                  "Didier Drogba a fait connaître la Côte d’Ivoire dans le monde entier"
                ],
                [
                  "Le talent des joueurs africains",
                  "Leurs performances égalent celles des joueurs des autres continents",
                  "Samuel Eto’o, meilleur buteur du championnat d’Espagne (2005-2006)"
                ],
                [
                  "Les infrastructures",
                  "L’Afrique a des stades capables d’accueillir de grandes compétitions",
                  "Coupe du monde 2010 en Afrique du Sud (19e édition, 11 juin au 11 juillet 2010)"
                ],
                [
                  "La compétitivité",
                  "Les équipes africaines rivalisent avec les grandes nations",
                  "Côte d’Ivoire, Cameroun, Maroc face à la France, au Brésil, à l’Espagne…"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Sujet B",
          "stepTheme": "La jeunesse",
          "stepTitle": "Un écrit destiné à la jeunesse",
          "paragraphText": "Certains textes, écrits dans un style simple, sont adaptés au niveau et aux attentes des **jeunes** : c’est le cas d’**Alice au pays des merveilles** de **Lewis Carroll** (le document écrit « Carol »).",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q6",
            "type": "mcq",
            "prompt": "Pour réfuter la pensée de Michel Tournier (« pour certains écrivains, le lecteur n’apparaît nullement comme le destinataire obligé de leur écrit »), quel argument illustre Alice au pays des merveilles de Lewis Carroll ?",
            "options": [
              "Certains auteurs écrivent essentiellement pour la jeunesse",
              "Certains écrits sont réservés aux chercheurs",
              "Certains écrits n’ont aucun lecteur",
              "Les journaux informent les masses sur la politique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce roman s’adresse d’abord aux enfants : il a bien un public cible."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Idées organisées du sujet B (Michel Tournier)",
            "caption": "Réfuter : montrer que tout écrit vise un public, un « destinataire obligé ».",
            "tableData": {
              "headers": [
                "Argument",
                "Explication",
                "Exemple"
              ],
              "rows": [
                [
                  "Des écrits pour les érudits",
                  "Ils s’adressent à un public précis : chercheurs, universitaires",
                  "Les thèses ; la revue En-Quête de l’Université Félix Houphouët-Boigny"
                ],
                [
                  "Des écrits pour informer le grand public",
                  "Ils traitent de faits de société, de politique, de sport",
                  "Journaux sportifs et politiques, magazines, revues de vulgarisation comme Science et Vie"
                ],
                [
                  "Des écrits pour la jeunesse",
                  "Un style simple adapté au niveau et aux attentes des jeunes",
                  "Alice au pays des merveilles de Lewis Carroll"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Exemple exact",
          "stepTheme": "Science et Vie",
          "stepTitle": "Science et Vie n’est pas réservé aux chercheurs",
          "paragraphText": "Le document présente **Science et Vie** comme une revue « exclusivement » pour les chercheurs : c’est faux. C’est un magazine de **vulgarisation scientifique** destiné au **grand public**. Pour les érudits, on citera plutôt des thèses ou une revue universitaire comme En-Quête.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q7",
            "type": "mcq",
            "prompt": "Pour illustrer l’argument « certains écrits sont destinés essentiellement aux érudits et aux chercheurs », quel exemple est le plus juste ?",
            "options": [
              "Une thèse ou une revue universitaire comme En-Quête",
              "Le magazine grand public Science et Vie",
              "Un journal sportif",
              "Un album pour enfants"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Science et Vie vulgarise la science pour tous ; il illustre plutôt les écrits pour le grand public."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q1",
          "type": "mcq",
          "prompt": "Pour le sujet « S’il y a un domaine dans lequel l’Afrique a vite réduit l’écart de son retard par rapport aux autres continents, notamment l’Europe, c’est bien dans celui du football. » Étayez cette assertion d’Alphonse Boolamou de Ligouri., lequel de ces domaines de recherche est hors sujet ?",
          "options": [
            "Le prix des billets d’avion entre l’Afrique et l’Europe",
            "Les infrastructures sportives africaines",
            "Le talent des joueurs africains",
            "La compétitivité des équipes nationales africaines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les trois autres domaines montrent que l’Afrique a rattrapé l’Europe dans le football."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q2",
          "type": "mcq",
          "prompt": "Pour le sujet « S’il y a un domaine dans lequel l’Afrique a vite réduit l’écart de son retard par rapport aux autres continents, notamment l’Europe, c’est bien dans celui du football. » Étayez cette assertion d’Alphonse Boolamou de Ligouri., quel argument illustre l’exemple de Didier Drogba, qui a fait connaître la Côte d’Ivoire dans le monde entier ?",
          "options": [
            "Les vedettes du football rendent leur pays célèbre dans le monde",
            "L’Afrique manque de stades modernes",
            "Les joueurs africains jouent seulement en Afrique",
            "Le football africain est en retard sur l’Europe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Drogba illustre le rayonnement des pays grâce à leurs vedettes."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q3",
          "type": "mcq",
          "prompt": "Pour le sujet « S’il y a un domaine dans lequel l’Afrique a vite réduit l’écart de son retard par rapport aux autres continents, notamment l’Europe, c’est bien dans celui du football. » Étayez cette assertion d’Alphonse Boolamou de Ligouri., quel argument illustre l’organisation de la Coupe du monde 2010 par l’Afrique du Sud ?",
          "options": [
            "L’Afrique dispose d’infrastructures capables d’accueillir de grandes compétitions",
            "Les joueurs africains sont les mieux payés du monde",
            "L’Afrique n’a jamais participé à la Coupe du monde",
            "Le football est le seul sport pratiqué en Afrique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Accueillir une Coupe du monde prouve que les stades sont au niveau international."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q4",
          "type": "mcq",
          "prompt": "Quel titre de buteur Samuel Eto’o, attaquant camerounais du FC Barcelone, a-t-il réellement obtenu ?",
          "options": [
            "Meilleur buteur du championnat d’Espagne en 2005-2006",
            "Meilleur buteur de tous les championnats européens à la fois",
            "Meilleur buteur de la Coupe du monde 2010",
            "Il n’a jamais marqué en Europe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il fut le meilleur buteur de la Liga en 2005-2006 ; le document exagère."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q5",
          "type": "mcq",
          "prompt": "Pour le sujet « S’il y a un domaine dans lequel l’Afrique a vite réduit l’écart de son retard par rapport aux autres continents, notamment l’Europe, c’est bien dans celui du football. » Étayez cette assertion d’Alphonse Boolamou de Ligouri., quel argument illustre le parcours du Maroc, demi-finaliste de la Coupe du monde 2022 ?",
          "options": [
            "Les équipes africaines sont compétitives face aux grandes nations",
            "Les stades africains sont trop petits",
            "Les vedettes africaines jouent toutes au Maroc",
            "Le football africain n’intéresse personne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Atteindre les demi-finales prouve que l’Afrique rivalise avec les meilleures équipes."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q6",
          "type": "mcq",
          "prompt": "Pour réfuter la pensée de Michel Tournier (« pour certains écrivains, le lecteur n’apparaît nullement comme le destinataire obligé de leur écrit »), quel argument illustre Alice au pays des merveilles de Lewis Carroll ?",
          "options": [
            "Certains auteurs écrivent essentiellement pour la jeunesse",
            "Certains écrits sont réservés aux chercheurs",
            "Certains écrits n’ont aucun lecteur",
            "Les journaux informent les masses sur la politique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce roman s’adresse d’abord aux enfants : il a bien un public cible."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q7",
          "type": "mcq",
          "prompt": "Pour illustrer l’argument « certains écrits sont destinés essentiellement aux érudits et aux chercheurs », quel exemple est le plus juste ?",
          "options": [
            "Une thèse ou une revue universitaire comme En-Quête",
            "Le magazine grand public Science et Vie",
            "Un journal sportif",
            "Un album pour enfants"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Science et Vie vulgarise la science pour tous ; il illustre plutôt les écrits pour le grand public."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_resume_production_ecrite_p03",
      "order": 3,
      "title": "Rédiger un paragraphe argumentatif",
      "summary": "Construire les paragraphes du développement : exposition de l’argument, explication, exemple ; phrase d’introduction et conclusions partielles.",
      "conceptExplanation": "- Le développement de la production écrite compte au moins trois paragraphes argumentatifs.\n- Un paragraphe argumentatif comprend : l’exposition de l’argument, son explication, l’exemple d’illustration.\n- Le premier paragraphe est précédé d’une phrase d’introduction. Chaque paragraphe se termine par une conclusion partielle, qui fait le bilan partiel et annonce le paragraphe suivant.\n- Paragraphe rédigé (sujet A) : « Les vedettes du football africain sont des catalyseurs du rayonnement de leur pays. En effet, des pays africains sont honorés et connus sur l’échiquier mondial grâce aux vedettes qui en sont originaires : elles en sont de vrais ambassadeurs. C’est le cas de Didier Drogba, dont le talent a fait connaître la Côte d’Ivoire à travers le monde. »\n- Paragraphe rédigé (sujet B) : « Certains livres sont destinés essentiellement à un public érudit, notamment aux savants et aux chercheurs. Cette catégorie de production se caractérise par un niveau de langue soutenu et un contenu réservé à des spécialistes. Nous en voulons pour preuve les thèses et les revues universitaires comme En-Quête, de l’Université Félix Houphouët-Boigny de Cocody-Abidjan. »",
      "keyRule": "Au moins trois paragraphes ; chacun = argument + explication + exemple, puis conclusion partielle (bilan + annonce du suivant).",
      "formulas": [],
      "workedExample": {
        "title": "Analyser le paragraphe rédigé du sujet A",
        "statement": "« Les vedettes du football africain sont des catalyseurs du rayonnement de leur pays. En effet, des pays africains sont honorés et connus sur l’échiquier mondial. Ils en constituent de vrais ambassadeurs. C’est le cas de Didier Drogba, dont le talent a fait connaître la Côte d’Ivoire à travers le monde. »",
        "methodSteps": [
          "Exposition de l’argument : « Les vedettes du football africain sont des catalyseurs du rayonnement de leur pays. »",
          "Explication : « En effet, des pays africains sont honorés et connus sur l’échiquier mondial… de vrais ambassadeurs. »",
          "Exemple : « C’est le cas de Didier Drogba… »"
        ],
        "conclusion": "Il resterait à ajouter une conclusion partielle qui annonce l’argument suivant."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Le développement",
          "stepTheme": "Au moins trois paragraphes",
          "stepTitle": "Combien de paragraphes dans le développement ?",
          "paragraphText": "Le développement de la production écrite est constitué de **paragraphes argumentatifs**, **au moins trois**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q1",
            "type": "mcq",
            "prompt": "Selon le cours, combien de paragraphes argumentatifs le développement de la production écrite doit-il compter au minimum ?",
            "options": [
              "Trois",
              "Un seul",
              "Deux",
              "Dix"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Au moins trois paragraphes argumentatifs."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Le paragraphe",
          "stepTheme": "Trois éléments",
          "stepTitle": "Les trois éléments d’un paragraphe argumentatif",
          "paragraphText": "Un paragraphe argumentatif est composé de l’**exposition de l’argument**, de son **explication** et de l’**exemple d’illustration**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q2",
            "type": "mcq",
            "prompt": "De quels éléments un paragraphe argumentatif de production écrite est-il composé ?",
            "options": [
              "L’exposition de l’argument, son explication, l’exemple d’illustration",
              "Le titre, la date, la signature",
              "L’amorce, la présentation du sujet, l’annonce du plan",
              "Le résumé du texte, la citation, la question"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Argument + explication + exemple."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Repérer l’argument",
          "stepTheme": "Sujet A",
          "stepTitle": "L’exposition de l’argument",
          "paragraphText": "Dans le paragraphe sur le football, la première phrase **expose l’argument** : « Les vedettes du football africain sont des catalyseurs du rayonnement de leur pays. »",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q3",
            "type": "mcq",
            "prompt": "Dans le paragraphe « Les vedettes du football africain sont des catalyseurs du rayonnement de leur pays. En effet, des pays africains sont honorés et connus sur l’échiquier mondial… C’est le cas de Didier Drogba… », quel rôle joue la première phrase ?",
            "options": [
              "Elle expose l’argument",
              "Elle donne l’exemple",
              "Elle fait la conclusion partielle",
              "Elle reformule le sujet de dissertation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La première phrase pose l’idée que le reste du paragraphe va expliquer et illustrer."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Repérer l’exemple",
          "stepTheme": "Sujet A",
          "stepTitle": "L’exemple d’illustration",
          "paragraphText": "La phrase « **C’est le cas de** Didier Drogba, dont le talent a fait connaître la Côte d’Ivoire à travers le monde » est l’**exemple** : elle rend l’argument concret.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q4",
            "type": "mcq",
            "prompt": "Dans un paragraphe sur le football africain, quel rôle joue la phrase « C’est le cas de Didier Drogba, dont le talent a fait connaître la Côte d’Ivoire à travers le monde » ?",
            "options": [
              "C’est l’exemple d’illustration",
              "C’est l’exposition de l’argument",
              "C’est la phrase d’introduction du devoir",
              "C’est la consigne du sujet"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« C’est le cas de… » introduit un exemple."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Conclusion partielle",
          "stepTheme": "Bilan et annonce",
          "stepTitle": "Comment se termine chaque paragraphe ?",
          "paragraphText": "Chaque paragraphe se termine par une **conclusion partielle**, qui fait le **bilan partiel** et **annonce le paragraphe suivant**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q5",
            "type": "mcq",
            "prompt": "Comment se termine chaque paragraphe argumentatif du développement ?",
            "options": [
              "Par une conclusion partielle : bilan partiel et annonce du paragraphe suivant",
              "Par une nouvelle citation de l’auteur",
              "Par une question sans rapport avec le sujet",
              "Par la signature de l’élève"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La conclusion partielle assure la transition entre les paragraphes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepBadge": "Phrase d’introduction",
          "stepTheme": "Avant le premier paragraphe",
          "stepTitle": "Ce qui précède le premier paragraphe",
          "paragraphText": "Le **premier paragraphe** argumentatif du développement est précédé d’une **phrase d’introduction**, qui annonce l’idée générale à démontrer.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q6",
            "type": "mcq",
            "prompt": "Dans le développement de la production écrite, qu’est-ce qui précède le premier paragraphe argumentatif ?",
            "options": [
              "Une phrase d’introduction",
              "Une conclusion partielle",
              "Un exemple seul",
              "Rien du tout"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une phrase d’introduction ouvre le développement."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Sujet B",
          "stepTheme": "Paragraphe rédigé",
          "stepTitle": "L’argument du paragraphe rédigé du sujet B",
          "paragraphText": "Le corrigé du sujet B commence par : « Certains livres sont destinés essentiellement à un public **érudit**, notamment aux savants et aux chercheurs » ; il explique ensuite (niveau de langue soutenu, contenu réservé aux spécialistes), puis donne des exemples (thèses, revue En-Quête).",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q7",
            "type": "mcq",
            "prompt": "Pour réfuter la pensée de Michel Tournier (« pour certains écrivains, le lecteur n’apparaît nullement comme le destinataire obligé de leur écrit »), quel argument expose le paragraphe qui commence par « Certains livres sont destinés essentiellement à un public érudit » ?",
            "options": [
              "Certains écrits visent un public précis : les savants et les chercheurs",
              "Les livres n’ont aucun lecteur",
              "Les savants ne lisent jamais",
              "Les écrivains écrivent seulement pour eux-mêmes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Montrer qu’un livre vise les érudits prouve qu’il a un destinataire : c’est une réfutation."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q1",
          "type": "mcq",
          "prompt": "Selon le cours, combien de paragraphes argumentatifs le développement de la production écrite doit-il compter au minimum ?",
          "options": [
            "Trois",
            "Un seul",
            "Deux",
            "Dix"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Au moins trois paragraphes argumentatifs."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q2",
          "type": "mcq",
          "prompt": "De quels éléments un paragraphe argumentatif de production écrite est-il composé ?",
          "options": [
            "L’exposition de l’argument, son explication, l’exemple d’illustration",
            "Le titre, la date, la signature",
            "L’amorce, la présentation du sujet, l’annonce du plan",
            "Le résumé du texte, la citation, la question"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Argument + explication + exemple."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q3",
          "type": "mcq",
          "prompt": "Dans le paragraphe « Les vedettes du football africain sont des catalyseurs du rayonnement de leur pays. En effet, des pays africains sont honorés et connus sur l’échiquier mondial… C’est le cas de Didier Drogba… », quel rôle joue la première phrase ?",
          "options": [
            "Elle expose l’argument",
            "Elle donne l’exemple",
            "Elle fait la conclusion partielle",
            "Elle reformule le sujet de dissertation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La première phrase pose l’idée que le reste du paragraphe va expliquer et illustrer."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q4",
          "type": "mcq",
          "prompt": "Dans un paragraphe sur le football africain, quel rôle joue la phrase « C’est le cas de Didier Drogba, dont le talent a fait connaître la Côte d’Ivoire à travers le monde » ?",
          "options": [
            "C’est l’exemple d’illustration",
            "C’est l’exposition de l’argument",
            "C’est la phrase d’introduction du devoir",
            "C’est la consigne du sujet"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« C’est le cas de… » introduit un exemple."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q5",
          "type": "mcq",
          "prompt": "Comment se termine chaque paragraphe argumentatif du développement ?",
          "options": [
            "Par une conclusion partielle : bilan partiel et annonce du paragraphe suivant",
            "Par une nouvelle citation de l’auteur",
            "Par une question sans rapport avec le sujet",
            "Par la signature de l’élève"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La conclusion partielle assure la transition entre les paragraphes."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q6",
          "type": "mcq",
          "prompt": "Dans le développement de la production écrite, qu’est-ce qui précède le premier paragraphe argumentatif ?",
          "options": [
            "Une phrase d’introduction",
            "Une conclusion partielle",
            "Un exemple seul",
            "Rien du tout"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une phrase d’introduction ouvre le développement."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q7",
          "type": "mcq",
          "prompt": "Pour réfuter la pensée de Michel Tournier (« pour certains écrivains, le lecteur n’apparaît nullement comme le destinataire obligé de leur écrit »), quel argument expose le paragraphe qui commence par « Certains livres sont destinés essentiellement à un public érudit » ?",
          "options": [
            "Certains écrits visent un public précis : les savants et les chercheurs",
            "Les livres n’ont aucun lecteur",
            "Les savants ne lisent jamais",
            "Les écrivains écrivent seulement pour eux-mêmes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Montrer qu’un livre vise les érudits prouve qu’il a un destinataire : c’est une réfutation."
        }
      ]
    }
  ]
};
