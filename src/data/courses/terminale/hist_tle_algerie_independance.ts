import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « L'accession de l'Algérie à l'indépendance » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2141
// Le PDF appelle cette leçon « LEÇON 3 » du Thème 2, le cours l'appelle Leçon 6 : l'order retenu est celui du cours (6).
export const HIST_TLE_T2_L03_ALGERIE_INDEPENDANCE: CurriculumChapter = {
  "id": "terminale_hg_histoire_t2_l03_algerie_independance",
  "subjectId": "histoire_geo",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d",
    "terminale_a1",
    "terminale_a2"
  ],
  "order": 6,
  "title": "Thème 2, leçon 3 : L'accession de l'Algérie à l'indépendance",
  "summary": "Le statut de l'Algérie coloniale, les inégalités, les trois tendances du nationalisme algérien, la radicalisation, la guerre, les accords d'Évian et le bilan de l'indépendance.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2141",
  "points": [
    {
      "id": "terminale_hg_histoire_t2_l03_algerie_independance_p01",
      "order": 1,
      "title": "Le statut de l'Algérie coloniale",
      "summary": "La conquête de 1830, les trois départements, le code de l'indigénat et la colonie de peuplement.",
      "conceptExplanation": "L'Algérie est conquise par la France en 1830. Le 9 décembre 1848, elle devient partie intégrante de la France : elle est divisée en trois départements — Alger, Oran et Constantine. Les Algériens vivent sous le régime du code de l'indigénat, un statut discriminatoire qui les prive de leurs droits.\nL'Algérie est une colonie de peuplement : environ un million de Français s'y installent, les « Pieds-noirs », selon le résumé du cours. Les Algériens sont la majorité de la population mais sont exclus de la vie politique : les autochtones sont mal représentés au Conseil de Gouvernement.\nLe code de l'indigénat est abrogé en 1944, selon le livre d'exercices 2025-2026. Le 8 mai 1945, les manifestations de Sétif sont violemment réprimées.",
      "keyRule": "1830 : conquête ; 1848 : trois départements, partie intégrante de la France ; code de l'indigénat ; colonie de peuplement.",
      "formulas": [],
      "workedExample": {
        "title": "Associer les dates aux événements",
        "statement": "Associe chaque date à son événement : 1830, 1848, 1944, 1945.",
        "methodSteps": [
          "1830 : la conquête de l'Algérie par la France.",
          "1848 : l'Algérie devient partie intégrante de la France, divisée en trois départements.",
          "1944 : l'abrogation du code de l'indigénat.",
          "1945 : les manifestations de Sétif."
        ],
        "conclusion": "1830 : conquête ; 1848 : trois départements ; 1944 : abrogation du code de l'indigénat ; 1945 : Sétif."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La conquête de 1830",
          "stepTheme": "La conquête de 1830",
          "stepBadge": "La conquête de 1830",
          "paragraphText": "• L'Algérie est conquise par la France en 1830.\n• La conquête ouvre une longue période de colonisation, qui durera plus d'un siècle.\n• L'Algérie devient ensuite une colonie de peuplement française.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p01_q1",
            "type": "mcq",
            "prompt": "En quelle année la France conquiert-elle l'Algérie ?",
            "options": [
              "1830",
              "1848",
              "1945",
              "1954"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'Algérie est conquise par la France en 1830."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les trois départements",
          "stepTheme": "Les trois départements",
          "stepBadge": "Les trois départements",
          "paragraphText": "• Le 9 décembre 1848, l'Algérie devient partie intégrante de la France.\n• Elle est divisée en trois départements : Alger, Oran et Constantine.\n• Les Algériens vivent alors sous le régime du code de l'indigénat.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p01_q2",
            "type": "mcq",
            "prompt": "Quels sont les trois départements de l'Algérie française ?",
            "options": [
              "Alger, Oran et Constantine",
              "Alger, Sétif et Oran",
              "Alger, Constantine et Annaba",
              "Oran, Constantine et Sétif"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'Algérie française est divisée en trois départements : Alger, Oran et Constantine."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le code de l'indigénat",
          "stepTheme": "Le code de l'indigénat",
          "stepBadge": "Le code de l'indigénat",
          "paragraphText": "• Le code de l'indigénat est un statut discriminatoire qui prive les Algériens de leurs droits.\n• Il est abrogé en 1944, selon le livre d'exercices 2025-2026.\n• Les Algériens restent mal représentés au Conseil de Gouvernement.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p01_q3",
            "type": "mcq",
            "prompt": "En quelle année le code de l'indigénat est-il abrogé, selon le livre d'exercices 2025-2026 ?",
            "options": [
              "1944",
              "1946",
              "1954",
              "1962"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le livre d'exercices 2025-2026 donne 1944 pour l'abrogation du code de l'indigénat."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La colonie de peuplement",
          "stepTheme": "La colonie de peuplement",
          "stepBadge": "La colonie de peuplement",
          "paragraphText": "• L'Algérie est une colonie de peuplement : des Français s'y installent en nombre, les « Pieds-noirs ».\n• Le résumé du cours donne environ un million de Pieds-noirs.\n• Piège d'examen : l'affirmation « L'Algérie était une colonie d'exploitation » est fausse — c'est une colonie de peuplement.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p01_q4",
            "type": "mcq",
            "prompt": "Quel type de colonie l'Algérie était-elle ?",
            "options": [
              "Une colonie de peuplement",
              "Une colonie d'exploitation",
              "Un protectorat",
              "Une colonie de plantation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'Algérie était une colonie de peuplement (les « Pieds-noirs » s'y installent) ; l'affirmation « colonie d'exploitation » est fausse."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Combien de Pieds-noirs ?",
          "stepTheme": "Combien de Pieds-noirs ?",
          "stepBadge": "Combien de Pieds-noirs ?",
          "paragraphText": "• Le résumé du cours donne environ un million de Pieds-noirs installés en Algérie.\n• Le livre d'exercices 2025-2026 donne 1,5 million de Français d'Algérie.\n• Les deux chiffres sont reproduits tels quels dans le cours ; le chiffre retenu ici est celui du résumé du cours, environ un million.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p01_q5",
            "type": "mcq",
            "prompt": "Combien de Pieds-noirs le résumé du cours compte-t-il en Algérie ?",
            "options": [
              "Environ un million",
              "Environ 500 000",
              "Environ 2 millions",
              "Environ 3 millions"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé du cours donne environ un million de Pieds-noirs ; le livre d'exercices 2025-2026 en donne 1,5 million."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les Algériens exclus de la vie politique",
          "stepTheme": "Les Algériens exclus de la vie politique",
          "stepBadge": "Les Algériens exclus de la vie politique",
          "paragraphText": "• Les autochtones algériens sont mal représentés au Conseil de Gouvernement.\n• Ils vivent sous le régime du code de l'indigénat, qui les prive de leurs droits.\n• Cette exclusion politique nourrit le nationalisme algérien.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p01_q6",
            "type": "mcq",
            "prompt": "Comment les autochtones algériens sont-ils représentés au Conseil de Gouvernement ?",
            "options": [
              "Ils sont mal représentés",
              "Ils sont majoritaires",
              "Ils sont représentés à égalité",
              "Ils n'y sont pas représentés du tout"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le cours indique que les autochtones algériens sont mal représentés au Conseil de Gouvernement."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p01_q1",
          "type": "mcq",
          "prompt": "En quelle année la France conquiert-elle l'Algérie ?",
          "options": [
            "1830",
            "1848",
            "1945",
            "1954"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'Algérie est conquise par la France en 1830."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p01_q2",
          "type": "mcq",
          "prompt": "Quels sont les trois départements de l'Algérie française ?",
          "options": [
            "Alger, Oran et Constantine",
            "Alger, Sétif et Oran",
            "Alger, Constantine et Annaba",
            "Oran, Constantine et Sétif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'Algérie française est divisée en trois départements : Alger, Oran et Constantine."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p01_q3",
          "type": "mcq",
          "prompt": "En quelle année le code de l'indigénat est-il abrogé, selon le livre d'exercices 2025-2026 ?",
          "options": [
            "1944",
            "1946",
            "1954",
            "1962"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le livre d'exercices 2025-2026 donne 1944 pour l'abrogation du code de l'indigénat."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p01_q4",
          "type": "mcq",
          "prompt": "Quel type de colonie l'Algérie était-elle ?",
          "options": [
            "Une colonie de peuplement",
            "Une colonie d'exploitation",
            "Un protectorat",
            "Une colonie de plantation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'Algérie était une colonie de peuplement (les « Pieds-noirs » s'y installent) ; l'affirmation « colonie d'exploitation » est fausse."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p01_q5",
          "type": "mcq",
          "prompt": "Combien de Pieds-noirs le résumé du cours compte-t-il en Algérie ?",
          "options": [
            "Environ un million",
            "Environ 500 000",
            "Environ 2 millions",
            "Environ 3 millions"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé du cours donne environ un million de Pieds-noirs ; le livre d'exercices 2025-2026 en donne 1,5 million."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p01_q6",
          "type": "mcq",
          "prompt": "Comment les autochtones algériens sont-ils représentés au Conseil de Gouvernement ?",
          "options": [
            "Ils sont mal représentés",
            "Ils sont majoritaires",
            "Ils sont représentés à égalité",
            "Ils n'y sont pas représentés du tout"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cours indique que les autochtones algériens sont mal représentés au Conseil de Gouvernement."
        }
      ]
    },
    {
      "id": "terminale_hg_histoire_t2_l03_algerie_independance_p02",
      "order": 2,
      "title": "Les inégalités économiques et sociales",
      "summary": "Les privilèges des Français d'Algérie, la misère des musulmans et la prise de conscience nationale.",
      "conceptExplanation": "Les musulmans autochtones, plus de huit millions, vivent dans la misère : ils sont les victimes de l'exploitation coloniale. Les colons possèdent les terres les plus fertiles et les meilleures ; les musulmans n'ont que les terres les moins fertiles. Les Français d'Algérie jouissent de privilèges : ils sont les plus riches, les plus instruits, les mieux soignés.\nLa Première Guerre mondiale n'améliore pas la condition des Algériens : les promesses de liberté et d'égalité ne sont pas tenues. La conscience nationale naît parmi les commerçants, les intellectuels, les ouvriers et les anciens combattants.\nLes Algériens sont exclus de la vie politique : les autochtones sont mal représentés au Conseil de Gouvernement. Les inégalités économiques et sociales nourrissent le nationalisme algérien.",
      "keyRule": "Musulmans : plus de 8 millions, terres les moins fertiles ; colons : terres les plus fertiles et privilèges.",
      "formulas": [],
      "workedExample": {
        "title": "Classer les affirmations sur les inégalités",
        "statement": "Classe chaque affirmation en vraie ou fausse : les colons possèdent les terres les plus fertiles ; les Français d'Algérie jouissent de privilèges ; les autochtones sont bien représentés au Conseil de Gouvernement ; la Première Guerre mondiale a amélioré la condition des Algériens.",
        "methodSteps": [
          "Vrai : les colons possèdent les terres les plus fertiles.",
          "Vrai : les Français d'Algérie jouissent de privilèges.",
          "Faux : les autochtones sont mal représentés au Conseil de Gouvernement.",
          "Faux : la Première Guerre mondiale n'a pas amélioré la condition des Algériens."
        ],
        "conclusion": "Vrai : terres fertiles des colons, privilèges des Français ; faux : représentation des autochtones, amélioration après 1918."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les musulmans autochtones",
          "stepTheme": "Les musulmans autochtones",
          "stepBadge": "Les musulmans autochtones",
          "paragraphText": "• Les musulmans autochtones sont plus de huit millions en Algérie.\n• Ils vivent dans la misère, victimes de l'exploitation coloniale.\n• Ils ne possèdent que les terres les moins fertiles.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p02_q1",
            "type": "mcq",
            "prompt": "Combien les musulmans autochtones sont-ils en Algérie, selon le cours ?",
            "options": [
              "Plus de huit millions",
              "Environ un million",
              "Environ trois millions",
              "Environ cinq millions"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le cours donne plus de huit millions de musulmans autochtones en Algérie."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les terres les plus fertiles",
          "stepTheme": "Les terres les plus fertiles",
          "stepBadge": "Les terres les plus fertiles",
          "paragraphText": "• Les colons possèdent les terres les plus fertiles et les meilleures.\n• Les musulmans n'ont que les terres les moins fertiles.\n• Cette inégalité foncière est l'une des causes du nationalisme algérien.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p02_q2",
            "type": "mcq",
            "prompt": "Qui possède les terres les plus fertiles en Algérie ?",
            "options": [
              "Les colons",
              "Les musulmans autochtones",
              "Les commerçants arabes",
              "Les anciens combattants"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les colons possèdent les terres les plus fertiles ; les musulmans n'ont que les terres les moins fertiles."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les privilèges des Français d'Algérie",
          "stepTheme": "Les privilèges des Français d'Algérie",
          "stepBadge": "Les privilèges des Français d'Algérie",
          "paragraphText": "• Les Français d'Algérie jouissent de privilèges : ils sont les plus riches, les plus instruits, les mieux soignés.\n• Les musulmans, eux, vivent dans la misère.\n• L'affirmation « Les Français d'Algérie jouissent de privilèges » est vraie.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p02_q3",
            "type": "mcq",
            "prompt": "Les Français d'Algérie jouissent-ils de privilèges ?",
            "options": [
              "Oui, ils sont les plus riches, les plus instruits, les mieux soignés",
              "Non, ils vivent dans la misère",
              "Non, ils sont traités comme les musulmans",
              "Oui, mais seulement en matière de santé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le cours affirme que les Français d'Algérie jouissent de privilèges : ils sont les plus riches, les plus instruits, les mieux soignés."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La Première Guerre mondiale sans amélioration",
          "stepTheme": "La Première Guerre mondiale sans amélioration",
          "stepBadge": "La Première Guerre mondiale sans amélioration",
          "paragraphText": "• La Première Guerre mondiale n'améliore pas la condition des Algériens.\n• Les promesses de liberté et d'égalité ne sont pas tenues.\n• Cette déception nourrit le nationalisme algérien.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p02_q4",
            "type": "mcq",
            "prompt": "La Première Guerre mondiale a-t-elle amélioré la condition des Algériens ?",
            "options": [
              "Non, les promesses de liberté et d'égalité ne sont pas tenues",
              "Oui, elle leur a apporté l'égalité",
              "Oui, elle leur a apporté l'indépendance",
              "Non, mais elle a supprimé le code de l'indigénat"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La Première Guerre mondiale n'améliore pas la condition des Algériens : les promesses de liberté et d'égalité ne sont pas tenues."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La conscience nationale",
          "stepTheme": "La conscience nationale",
          "stepBadge": "La conscience nationale",
          "paragraphText": "• La conscience nationale naît parmi les commerçants, les intellectuels, les ouvriers et les anciens combattants.\n• Ces groupes sociaux sont les premiers à prendre conscience de l'injustice coloniale.\n• Les anciens combattants, révoltés contre le système colonial, jouent un rôle important.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p02_q5",
            "type": "mcq",
            "prompt": "Parmi quels groupes la conscience nationale algérienne naît-elle ?",
            "options": [
              "Les commerçants, les intellectuels, les ouvriers et les anciens combattants",
              "Les colons et les administrateurs français",
              "Les missionnaires et les prêtres",
              "Les chefs de tribu et les notables"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le cours situe la naissance de la conscience nationale parmi les commerçants, les intellectuels, les ouvriers et les anciens combattants."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les inégalités en résumé",
          "stepTheme": "Les inégalités en résumé",
          "stepBadge": "Les inégalités en résumé",
          "paragraphText": "• Les musulmans autochtones, plus de huit millions, vivent dans la misère ; les colons possèdent les terres les plus fertiles.\n• Les Français d'Algérie jouissent de privilèges.\n• Les autochtones sont mal représentés au Conseil de Gouvernement.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p02_q6",
            "type": "mcq",
            "prompt": "Quelle inégalité foncière caractérise l'Algérie coloniale ?",
            "options": [
              "Les colons possèdent les terres les plus fertiles, les musulmans les moins fertiles",
              "Les musulmans possèdent les terres les plus fertiles",
              "Les terres sont partagées à égalité",
              "Les colons ne possèdent aucune terre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les colons possèdent les terres les plus fertiles et les meilleures ; les musulmans n'ont que les terres les moins fertiles."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p02_q1",
          "type": "mcq",
          "prompt": "Combien les musulmans autochtones sont-ils en Algérie, selon le cours ?",
          "options": [
            "Plus de huit millions",
            "Environ un million",
            "Environ trois millions",
            "Environ cinq millions"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cours donne plus de huit millions de musulmans autochtones en Algérie."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p02_q2",
          "type": "mcq",
          "prompt": "Qui possède les terres les plus fertiles en Algérie ?",
          "options": [
            "Les colons",
            "Les musulmans autochtones",
            "Les commerçants arabes",
            "Les anciens combattants"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les colons possèdent les terres les plus fertiles ; les musulmans n'ont que les terres les moins fertiles."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p02_q3",
          "type": "mcq",
          "prompt": "Les Français d'Algérie jouissent-ils de privilèges ?",
          "options": [
            "Oui, ils sont les plus riches, les plus instruits, les mieux soignés",
            "Non, ils vivent dans la misère",
            "Non, ils sont traités comme les musulmans",
            "Oui, mais seulement en matière de santé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cours affirme que les Français d'Algérie jouissent de privilèges : ils sont les plus riches, les plus instruits, les mieux soignés."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p02_q4",
          "type": "mcq",
          "prompt": "La Première Guerre mondiale a-t-elle amélioré la condition des Algériens ?",
          "options": [
            "Non, les promesses de liberté et d'égalité ne sont pas tenues",
            "Oui, elle leur a apporté l'égalité",
            "Oui, elle leur a apporté l'indépendance",
            "Non, mais elle a supprimé le code de l'indigénat"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La Première Guerre mondiale n'améliore pas la condition des Algériens : les promesses de liberté et d'égalité ne sont pas tenues."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p02_q5",
          "type": "mcq",
          "prompt": "Parmi quels groupes la conscience nationale algérienne naît-elle ?",
          "options": [
            "Les commerçants, les intellectuels, les ouvriers et les anciens combattants",
            "Les colons et les administrateurs français",
            "Les missionnaires et les prêtres",
            "Les chefs de tribu et les notables"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cours situe la naissance de la conscience nationale parmi les commerçants, les intellectuels, les ouvriers et les anciens combattants."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p02_q6",
          "type": "mcq",
          "prompt": "Quelle inégalité foncière caractérise l'Algérie coloniale ?",
          "options": [
            "Les colons possèdent les terres les plus fertiles, les musulmans les moins fertiles",
            "Les musulmans possèdent les terres les plus fertiles",
            "Les terres sont partagées à égalité",
            "Les colons ne possèdent aucune terre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les colons possèdent les terres les plus fertiles et les meilleures ; les musulmans n'ont que les terres les moins fertiles."
        }
      ]
    },
    {
      "id": "terminale_hg_histoire_t2_l03_algerie_independance_p03",
      "order": 3,
      "title": "Les trois tendances du nationalisme algérien",
      "summary": "Les Ouléma de Ben Badis, Messali Hadj et l'Étoile Nord-africaine, Ferhat Abbas et l'assimilation.",
      "conceptExplanation": "Le nationalisme algérien compte trois tendances. Les Ouléma, avec Cheikh Abdelhamid Ben Badis et l'Association des Ouléma créée en 1931, défendent l'identité arabo-musulmane : leur devise est « L'Islam est ma religion, l'Arabe est ma langue et l'Algérie est ma patrie ». Ils prônent la réforme de l'enseignement et la défense de la langue arabe.\nMessali Hadj fonde l'Étoile Nord-africaine en 1927, puis le PPA (Parti du Peuple Algérien) en 1939 : il revendique l'indépendance de l'Algérie, « avec le concours de la France », tel qu'écrit dans le livre. Le MTLD (Mouvement pour le Triomphe des Libertés Démocratiques) est le parti de Messali Hadj.\nFerhat Abbas fonde la Fédération des Élus Indigènes en 1927 et revendique d'abord l'assimilation et l'égalité complète ; il crée l'UDMA (Union Démocratique du Manifeste Algérien) en 1946. Le Manifeste du peuple algérien, du 10 février 1943, réclame la liberté et l'égalité absolue, ainsi que l'instruction gratuite et obligatoire.",
      "keyRule": "Ouléma (Ben Badis, 1931) : identité arabo-musulmane ; Messali Hadj (Étoile 1927, PPA 1939) : indépendance ; Ferhat Abbas (UDMA 1946) : assimilation puis autonomie.",
      "formulas": [],
      "workedExample": {
        "title": "Associer chaque tendance à son chef",
        "statement": "Associe chaque tendance à son chef et à son organisation : les Ouléma, l'Étoile Nord-africaine, la Fédération des Élus Indigènes.",
        "methodSteps": [
          "Les Ouléma : Cheikh Abdelhamid Ben Badis, Association des Ouléma (1931).",
          "L'Étoile Nord-africaine : Messali Hadj, fondée en 1927, puis le PPA en 1939.",
          "La Fédération des Élus Indigènes : Ferhat Abbas, fondée en 1927, puis l'UDMA en 1946."
        ],
        "conclusion": "Ouléma : Ben Badis ; Étoile Nord-africaine : Messali Hadj ; Fédération des Élus Indigènes : Ferhat Abbas."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les Ouléma de Ben Badis",
          "stepTheme": "Les Ouléma de Ben Badis",
          "stepBadge": "Les Ouléma de Ben Badis",
          "paragraphText": "• Les Ouléma sont une tendance du nationalisme algérien, avec Cheikh Abdelhamid Ben Badis.\n• L'Association des Ouléma est créée en 1931.\n• Leur devise est : « L'Islam est ma religion, l'Arabe est ma langue et l'Algérie est ma patrie ».",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p03_q1",
            "type": "mcq",
            "prompt": "Qui dirige les Ouléma et quand leur association est-elle créée ?",
            "options": [
              "Cheikh Abdelhamid Ben Badis, en 1931",
              "Messali Hadj, en 1927",
              "Ferhat Abbas, en 1946",
              "Belkacem Krim, en 1954"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les Ouléma sont dirigés par Cheikh Abdelhamid Ben Badis ; l'Association des Ouléma est créée en 1931."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La devise des Ouléma",
          "stepTheme": "La devise des Ouléma",
          "stepBadge": "La devise des Ouléma",
          "paragraphText": "• La devise des Ouléma est : « L'Islam est ma religion, l'Arabe est ma langue et l'Algérie est ma patrie ».\n• Elle exprime la défense de l'identité arabo-musulmane de l'Algérie.\n• Les Ouléma prônent la réforme de l'enseignement et la défense de la langue arabe.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p03_q2",
            "type": "mcq",
            "prompt": "Quelle est la devise des Ouléma ?",
            "options": [
              "« L'Islam est ma religion, l'Arabe est ma langue et l'Algérie est ma patrie »",
              "« L'Algérie est ma patrie, la France est ma mère »",
              "« L'indépendance ou la mort »",
              "« Égalité, liberté, fraternité »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La devise des Ouléma est : « L'Islam est ma religion, l'Arabe est ma langue et l'Algérie est ma patrie »."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Messali Hadj et l'Étoile Nord-africaine",
          "stepTheme": "Messali Hadj et l'Étoile Nord-africaine",
          "stepBadge": "Messali Hadj et l'Étoile Nord-africaine",
          "paragraphText": "• Messali Hadj fonde l'Étoile Nord-africaine en 1927.\n• Il crée ensuite le PPA (Parti du Peuple Algérien) en 1939.\n• Il revendique l'indépendance de l'Algérie, « avec le concours de la France », tel qu'écrit dans le livre.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p03_q3",
            "type": "mcq",
            "prompt": "Quelles organisations Messali Hadj fonde-t-il ?",
            "options": [
              "L'Étoile Nord-africaine en 1927, puis le PPA en 1939",
              "L'Association des Ouléma en 1931",
              "La Fédération des Élus Indigènes en 1927",
              "L'UDMA en 1946"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Messali Hadj fonde l'Étoile Nord-africaine en 1927, puis le PPA en 1939."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le MTLD, parti de Messali Hadj",
          "stepTheme": "Le MTLD, parti de Messali Hadj",
          "stepBadge": "Le MTLD, parti de Messali Hadj",
          "paragraphText": "• Le MTLD (Mouvement pour le Triomphe des Libertés Démocratiques) est le parti de Messali Hadj.\n• Piège d'examen : le MTLD n'est pas le parti de Ben Badis.\n• Messali Hadj est donc le chef de la tendance indépendantiste du nationalisme algérien.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p03_q4",
            "type": "mcq",
            "prompt": "De qui le MTLD est-il le parti ?",
            "options": [
              "De Messali Hadj",
              "De Ben Badis",
              "De Ferhat Abbas",
              "De Belkacem Krim"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le MTLD est le parti de Messali Hadj (le livre propose aussi Ben Badis comme piège)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ferhat Abbas et l'assimilation",
          "stepTheme": "Ferhat Abbas et l'assimilation",
          "stepBadge": "Ferhat Abbas et l'assimilation",
          "paragraphText": "• Ferhat Abbas fonde la Fédération des Élus Indigènes en 1927.\n• Il revendique d'abord l'assimilation et l'égalité complète.\n• Il crée l'UDMA (Union Démocratique du Manifeste Algérien) en 1946.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p03_q5",
            "type": "mcq",
            "prompt": "Que revendique d'abord Ferhat Abbas ?",
            "options": [
              "L'assimilation et l'égalité complète",
              "L'indépendance immédiate",
              "La création d'un État islamique",
              "Le rattachement à l'Égypte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ferhat Abbas revendique d'abord l'assimilation et l'égalité complète ; il crée l'UDMA en 1946."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le Manifeste du peuple algérien",
          "stepTheme": "Le Manifeste du peuple algérien",
          "stepBadge": "Le Manifeste du peuple algérien",
          "paragraphText": "• Le Manifeste du peuple algérien est publié le 10 février 1943.\n• Il réclame la liberté et l'égalité absolue.\n• Il réclame aussi l'instruction gratuite et obligatoire.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p03_q6",
            "type": "mcq",
            "prompt": "Que réclame le Manifeste du peuple algérien du 10 février 1943 ?",
            "options": [
              "La liberté et l'égalité absolue",
              "L'assimilation immédiate",
              "La création d'un État islamique",
              "Le rattachement à la France"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le Manifeste du peuple algérien du 10 février 1943 réclame la liberté et l'égalité absolue, ainsi que l'instruction gratuite et obligatoire."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p03_q1",
          "type": "mcq",
          "prompt": "Qui dirige les Ouléma et quand leur association est-elle créée ?",
          "options": [
            "Cheikh Abdelhamid Ben Badis, en 1931",
            "Messali Hadj, en 1927",
            "Ferhat Abbas, en 1946",
            "Belkacem Krim, en 1954"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les Ouléma sont dirigés par Cheikh Abdelhamid Ben Badis ; l'Association des Ouléma est créée en 1931."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p03_q2",
          "type": "mcq",
          "prompt": "Quelle est la devise des Ouléma ?",
          "options": [
            "« L'Islam est ma religion, l'Arabe est ma langue et l'Algérie est ma patrie »",
            "« L'Algérie est ma patrie, la France est ma mère »",
            "« L'indépendance ou la mort »",
            "« Égalité, liberté, fraternité »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La devise des Ouléma est : « L'Islam est ma religion, l'Arabe est ma langue et l'Algérie est ma patrie »."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p03_q3",
          "type": "mcq",
          "prompt": "Quelles organisations Messali Hadj fonde-t-il ?",
          "options": [
            "L'Étoile Nord-africaine en 1927, puis le PPA en 1939",
            "L'Association des Ouléma en 1931",
            "La Fédération des Élus Indigènes en 1927",
            "L'UDMA en 1946"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Messali Hadj fonde l'Étoile Nord-africaine en 1927, puis le PPA en 1939."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p03_q4",
          "type": "mcq",
          "prompt": "De qui le MTLD est-il le parti ?",
          "options": [
            "De Messali Hadj",
            "De Ben Badis",
            "De Ferhat Abbas",
            "De Belkacem Krim"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le MTLD est le parti de Messali Hadj (le livre propose aussi Ben Badis comme piège)."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p03_q5",
          "type": "mcq",
          "prompt": "Que revendique d'abord Ferhat Abbas ?",
          "options": [
            "L'assimilation et l'égalité complète",
            "L'indépendance immédiate",
            "La création d'un État islamique",
            "Le rattachement à l'Égypte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ferhat Abbas revendique d'abord l'assimilation et l'égalité complète ; il crée l'UDMA en 1946."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p03_q6",
          "type": "mcq",
          "prompt": "Que réclame le Manifeste du peuple algérien du 10 février 1943 ?",
          "options": [
            "La liberté et l'égalité absolue",
            "L'assimilation immédiate",
            "La création d'un État islamique",
            "Le rattachement à la France"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le Manifeste du peuple algérien du 10 février 1943 réclame la liberté et l'égalité absolue, ainsi que l'instruction gratuite et obligatoire."
        }
      ]
    },
    {
      "id": "terminale_hg_histoire_t2_l03_algerie_independance_p04",
      "order": 4,
      "title": "La radicalisation et la création du FLN",
      "summary": "Sétif 1945, le statut de 1947, le CRUA de 1954 et la naissance du FLN et de l'ALN.",
      "conceptExplanation": "Le 8 mai 1945, à Sétif, les manifestations algériennes sont violemment réprimées : une centaine de Français sont tués, et plus de 8 000 Algériens sont massacrés selon l'administration coloniale, 15 000 selon les nationalistes. Sétif marque la radicalisation du nationalisme algérien.\nL'UDMA et le MTLD sont créés en 1946. Le statut du 20 septembre 1947 crée une Assemblée algérienne de 120 députés, élus par deux collèges : le premier collège, celui des Français, élit 60 députés ; le second collège, celui des musulmans, élit 60 députés. Les réformes de 1943 et de 1947 sont jugées insuffisantes.\nEn mars 1954, le CRUA (Comité Révolutionnaire d'Unité et d'Action) est créé par Belkacem Krim, Ben Boulaïd et Larbi Ben M'Hidi. Le CRUA donne naissance au FLN (Front de Libération Nationale) et à l'ALN (Armée de Libération Nationale).",
      "keyRule": "Sétif 8 mai 1945 ; statut du 20 septembre 1947 (120 députés, deux collèges) ; CRUA mars 1954 → FLN et ALN.",
      "formulas": [],
      "workedExample": {
        "title": "Associer les dates aux événements",
        "statement": "Associe chaque date à son événement : 8 mai 1945, 1946, 20 septembre 1947, mars 1954.",
        "methodSteps": [
          "8 mai 1945 : les manifestations de Sétif et leur répression.",
          "1946 : la création de l'UDMA et du MTLD.",
          "20 septembre 1947 : le statut de l'Algérie, avec une Assemblée de 120 députés élus par deux collèges.",
          "Mars 1954 : la création du CRUA, qui donne naissance au FLN et à l'ALN."
        ],
        "conclusion": "1945 : Sétif ; 1946 : UDMA et MTLD ; 1947 : statut ; 1954 : CRUA."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les manifestations de Sétif",
          "stepTheme": "Les manifestations de Sétif",
          "stepBadge": "Les manifestations de Sétif",
          "paragraphText": "• Le 8 mai 1945, les manifestations algériennes de Sétif sont violemment réprimées.\n• Une centaine de Français sont tués.\n• Plus de 8 000 Algériens sont massacrés selon l'administration coloniale, 15 000 selon les nationalistes.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p04_q1",
            "type": "mcq",
            "prompt": "Quand les manifestations de Sétif ont-elles lieu ?",
            "options": [
              "Le 8 mai 1945",
              "Le 1er novembre 1954",
              "Le 13 mai 1958",
              "Le 3 juillet 1962"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les manifestations de Sétif ont lieu le 8 mai 1945."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le bilan de Sétif",
          "stepTheme": "Le bilan de Sétif",
          "stepBadge": "Le bilan de Sétif",
          "paragraphText": "• Plus de 8 000 Algériens sont massacrés selon l'administration coloniale.\n• Les nationalistes donnent le chiffre de 15 000 Algériens massacrés.\n• Le livre d'exercices 2025-2026 donne environ 1 500 Arabes massacrés : le chiffre retenu ici est celui du résumé du cours (8 000 selon l'administration, 15 000 selon les nationalistes).",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p04_q2",
            "type": "mcq",
            "prompt": "Quel bilan le résumé du cours donne-t-il pour les massacres de Sétif ?",
            "options": [
              "Plus de 8 000 Algériens massacrés selon l'administration coloniale, 15 000 selon les nationalistes",
              "Environ 1 500 Algériens massacrés",
              "Une centaine d'Algériens massacrés",
              "Aucun Algérien massacré"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé du cours donne plus de 8 000 Algériens massacrés selon l'administration coloniale et 15 000 selon les nationalistes (le livre 2025-2026 donne environ 1 500)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le statut du 20 septembre 1947",
          "stepTheme": "Le statut du 20 septembre 1947",
          "stepBadge": "Le statut du 20 septembre 1947",
          "paragraphText": "• Le statut du 20 septembre 1947 crée une Assemblée algérienne de 120 députés.\n• Les députés sont élus par deux collèges : le premier collège, celui des Français, élit 60 députés ; le second collège, celui des musulmans, élit 60 députés.\n• Les réformes de 1943 et de 1947 sont jugées insuffisantes par les nationalistes.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p04_q3",
            "type": "mcq",
            "prompt": "Combien de députés l'Assemblée algérienne du statut de 1947 compte-t-elle ?",
            "options": [
              "120 députés, élus par deux collèges",
              "60 députés, élus par un seul collège",
              "200 députés, élus par trois collèges",
              "90 députés, nommés par le gouverneur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le statut du 20 septembre 1947 crée une Assemblée algérienne de 120 députés, élus par deux collèges (60 pour le premier collège, 60 pour le second)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "L'UDMA et le MTLD",
          "stepTheme": "L'UDMA et le MTLD",
          "stepBadge": "L'UDMA et le MTLD",
          "paragraphText": "• L'UDMA (Union Démocratique du Manifeste Algérien) et le MTLD (Mouvement pour le Triomphe des Libertés Démocratiques) sont créés en 1946.\n• L'UDMA est le parti de Ferhat Abbas, le MTLD celui de Messali Hadj.\n• Les deux partis marquent la radicalisation du nationalisme algérien après Sétif.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p04_q4",
            "type": "mcq",
            "prompt": "En quelle année l'UDMA et le MTLD sont-ils créés ?",
            "options": [
              "1946",
              "1943",
              "1947",
              "1954"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'UDMA et le MTLD sont créés en 1946, après les massacres de Sétif."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le CRUA",
          "stepTheme": "Le CRUA",
          "stepBadge": "Le CRUA",
          "paragraphText": "• Le CRUA (Comité Révolutionnaire d'Unité et d'Action) est créé en mars 1954.\n• Il est créé par Belkacem Krim, Ben Boulaïd et Larbi Ben M'Hidi.\n• Le CRUA donne naissance au FLN et à l'ALN.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p04_q5",
            "type": "mcq",
            "prompt": "Qui crée le CRUA en mars 1954 ?",
            "options": [
              "Belkacem Krim, Ben Boulaïd et Larbi Ben M'Hidi",
              "Ferhat Abbas, Ben Badis et Messali Hadj",
              "Ahmed Ben Bella, Mohamed Boudiaf et Hocine Aït Ahmed",
              "De Gaulle, Joxe et Debré"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le CRUA est créé en mars 1954 par Belkacem Krim, Ben Boulaïd et Larbi Ben M'Hidi."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le FLN et l'ALN",
          "stepTheme": "Le FLN et l'ALN",
          "stepBadge": "Le FLN et l'ALN",
          "paragraphText": "• Le FLN (Front de Libération Nationale) est le mouvement politique de la lutte pour l'indépendance.\n• L'ALN (Armée de Libération Nationale) est son bras armé.\n• Le FLN et l'ALN naissent du CRUA, créé en mars 1954.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p04_q6",
            "type": "mcq",
            "prompt": "Que signifient les sigles FLN et ALN ?",
            "options": [
              "Front de Libération Nationale et Armée de Libération Nationale",
              "Front de Lutte Nationale et Armée de Libération Nationale",
              "Front de Libération Nationale et Alliance de Libération Nationale",
              "Fédération de Libération Nationale et Armée de Libération Nationale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "FLN signifie Front de Libération Nationale et ALN Armée de Libération Nationale."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p04_q1",
          "type": "mcq",
          "prompt": "Quand les manifestations de Sétif ont-elles lieu ?",
          "options": [
            "Le 8 mai 1945",
            "Le 1er novembre 1954",
            "Le 13 mai 1958",
            "Le 3 juillet 1962"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les manifestations de Sétif ont lieu le 8 mai 1945."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p04_q2",
          "type": "mcq",
          "prompt": "Quel bilan le résumé du cours donne-t-il pour les massacres de Sétif ?",
          "options": [
            "Plus de 8 000 Algériens massacrés selon l'administration coloniale, 15 000 selon les nationalistes",
            "Environ 1 500 Algériens massacrés",
            "Une centaine d'Algériens massacrés",
            "Aucun Algérien massacré"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé du cours donne plus de 8 000 Algériens massacrés selon l'administration coloniale et 15 000 selon les nationalistes (le livre 2025-2026 donne environ 1 500)."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p04_q3",
          "type": "mcq",
          "prompt": "Combien de députés l'Assemblée algérienne du statut de 1947 compte-t-elle ?",
          "options": [
            "120 députés, élus par deux collèges",
            "60 députés, élus par un seul collège",
            "200 députés, élus par trois collèges",
            "90 députés, nommés par le gouverneur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le statut du 20 septembre 1947 crée une Assemblée algérienne de 120 députés, élus par deux collèges (60 pour le premier collège, 60 pour le second)."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p04_q4",
          "type": "mcq",
          "prompt": "En quelle année l'UDMA et le MTLD sont-ils créés ?",
          "options": [
            "1946",
            "1943",
            "1947",
            "1954"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'UDMA et le MTLD sont créés en 1946, après les massacres de Sétif."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p04_q5",
          "type": "mcq",
          "prompt": "Qui crée le CRUA en mars 1954 ?",
          "options": [
            "Belkacem Krim, Ben Boulaïd et Larbi Ben M'Hidi",
            "Ferhat Abbas, Ben Badis et Messali Hadj",
            "Ahmed Ben Bella, Mohamed Boudiaf et Hocine Aït Ahmed",
            "De Gaulle, Joxe et Debré"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le CRUA est créé en mars 1954 par Belkacem Krim, Ben Boulaïd et Larbi Ben M'Hidi."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p04_q6",
          "type": "mcq",
          "prompt": "Que signifient les sigles FLN et ALN ?",
          "options": [
            "Front de Libération Nationale et Armée de Libération Nationale",
            "Front de Lutte Nationale et Armée de Libération Nationale",
            "Front de Libération Nationale et Alliance de Libération Nationale",
            "Fédération de Libération Nationale et Armée de Libération Nationale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "FLN signifie Front de Libération Nationale et ALN Armée de Libération Nationale."
        }
      ]
    },
    {
      "id": "terminale_hg_histoire_t2_l03_algerie_independance_p05",
      "order": 5,
      "title": "La guerre d'Algérie",
      "summary": "La Toussaint rouge, les maquis, le 13 mai 1958 et la France non conciliante.",
      "conceptExplanation": "La guerre d'Algérie commence dans la nuit du 31 octobre au 1er novembre 1954, la « Toussaint rouge » : le FLN déclenche des attentats dans toute l'Algérie. Le conflit dure près de huit ans.\nLes maquisards de l'ALN sont soutenus par les montagnes et les campagnes. Le FLN s'approvisionne depuis le Maroc, la Tunisie et l'Égypte. La France se montre non conciliante : elle pratique le quadrillage du territoire, le regroupement des populations et la torture.\nLe 13 mai 1958, le Comité de Salut Public est créé à Alger et appelle le général De Gaulle. La guerre d'Algérie est une guerre de libération nationale : ce sont les nationalistes algériens qui conquièrent l'indépendance.",
      "keyRule": "Toussaint rouge : nuit du 31 octobre au 1er novembre 1954 ; guerre de près de huit ans ; 13 mai 1958 : Comité de Salut Public.",
      "formulas": [],
      "workedExample": {
        "title": "Associer les dates aux événements de la guerre",
        "statement": "Associe chaque date à son événement : 1er novembre 1954, 13 mai 1958, 1962.",
        "methodSteps": [
          "1er novembre 1954 : la Toussaint rouge, début de la guerre d'Algérie.",
          "13 mai 1958 : le Comité de Salut Public est créé à Alger et appelle De Gaulle.",
          "1962 : les accords d'Évian et l'indépendance de l'Algérie."
        ],
        "conclusion": "1954 : Toussaint rouge ; 1958 : Comité de Salut Public ; 1962 : Évian et indépendance."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La Toussaint rouge",
          "stepTheme": "La Toussaint rouge",
          "stepBadge": "La Toussaint rouge",
          "paragraphText": "• La guerre d'Algérie commence dans la nuit du 31 octobre au 1er novembre 1954, la « Toussaint rouge ».\n• Le FLN déclenche des attentats dans toute l'Algérie.\n• Le conflit dure près de huit ans.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p05_q1",
            "type": "mcq",
            "prompt": "Quand la guerre d'Algérie commence-t-elle ?",
            "options": [
              "Dans la nuit du 31 octobre au 1er novembre 1954, la « Toussaint rouge »",
              "Le 8 mai 1945, à Sétif",
              "Le 13 mai 1958, à Alger",
              "Le 18 mars 1962, à Évian"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La guerre d'Algérie commence dans la nuit du 31 octobre au 1er novembre 1954, la « Toussaint rouge »."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La durée de la guerre",
          "stepTheme": "La durée de la guerre",
          "stepBadge": "La durée de la guerre",
          "paragraphText": "• Le conflit dure près de huit ans, de 1954 à 1962.\n• C'est une guerre de libération nationale menée par le FLN et l'ALN.\n• La guerre se termine par les accords d'Évian et l'indépendance de l'Algérie.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p05_q2",
            "type": "mcq",
            "prompt": "Combien de temps la guerre d'Algérie dure-t-elle ?",
            "options": [
              "Près de huit ans",
              "Près de deux ans",
              "Près de quatre ans",
              "Près de douze ans"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le cours donne une durée de près de huit ans pour la guerre d'Algérie (1954-1962)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les maquis et leurs soutiens",
          "stepTheme": "Les maquis et leurs soutiens",
          "stepBadge": "Les maquis et leurs soutiens",
          "paragraphText": "• Les maquisards de l'ALN sont soutenus par les montagnes et les campagnes.\n• Le FLN s'approvisionne depuis le Maroc, la Tunisie et l'Égypte.\n• Ces soutiens extérieurs permettent au FLN de tenir face à l'armée française.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p05_q3",
            "type": "mcq",
            "prompt": "Depuis quels pays le FLN s'approvisionne-t-il ?",
            "options": [
              "Le Maroc, la Tunisie et l'Égypte",
              "Le Mali, le Sénégal et la Guinée",
              "La Libye, le Soudan et l'Éthiopie",
              "L'Italie, l'Espagne et le Portugal"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le FLN s'approvisionne depuis le Maroc, la Tunisie et l'Égypte."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La France non conciliante",
          "stepTheme": "La France non conciliante",
          "stepBadge": "La France non conciliante",
          "paragraphText": "• La France se montre non conciliante face au FLN.\n• Elle pratique le quadrillage du territoire, le regroupement des populations et la torture.\n• Ces méthodes durcissent le conflit et renforcent la détermination des nationalistes.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p05_q4",
            "type": "mcq",
            "prompt": "Quelles méthodes la France utilise-t-elle pendant la guerre d'Algérie ?",
            "options": [
              "Le quadrillage, le regroupement des populations et la torture",
              "La négociation et le dialogue",
              "L'octroi immédiat de l'indépendance",
              "Le retrait de toutes les troupes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La France pratique le quadrillage du territoire, le regroupement des populations et la torture."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le 13 mai 1958",
          "stepTheme": "Le 13 mai 1958",
          "stepBadge": "Le 13 mai 1958",
          "paragraphText": "• Le 13 mai 1958, le Comité de Salut Public est créé à Alger.\n• Il appelle le général De Gaulle.\n• De Gaulle revient au pouvoir en France et prononce à Alger : « Algériens, je vous ai compris ! » le 4 juin 1958.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p05_q5",
            "type": "mcq",
            "prompt": "Que se passe-t-il le 13 mai 1958 à Alger ?",
            "options": [
              "Le Comité de Salut Public est créé et appelle le général De Gaulle",
              "Les accords d'Évian sont signés",
              "L'indépendance de l'Algérie est proclamée",
              "Le FLN dépose les armes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le 13 mai 1958, le Comité de Salut Public est créé à Alger et appelle le général De Gaulle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une guerre de libération nationale",
          "stepTheme": "Une guerre de libération nationale",
          "stepBadge": "Une guerre de libération nationale",
          "paragraphText": "• La guerre d'Algérie est une guerre de libération nationale.\n• Ce sont les nationalistes algériens qui conquièrent l'indépendance, par la lutte armée et la négociation.\n• La conclusion du cours est claire : l'indépendance n'a pas été octroyée, elle a été conquise.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p05_q6",
            "type": "mcq",
            "prompt": "Comment le cours qualifie-t-il la guerre d'Algérie ?",
            "options": [
              "Une guerre de libération nationale",
              "Une guerre civile entre Algériens",
              "Une guerre entre la France et l'Égypte",
              "Une guerre de religion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le cours qualifie la guerre d'Algérie de guerre de libération nationale, menée par les nationalistes algériens."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p05_q1",
          "type": "mcq",
          "prompt": "Quand la guerre d'Algérie commence-t-elle ?",
          "options": [
            "Dans la nuit du 31 octobre au 1er novembre 1954, la « Toussaint rouge »",
            "Le 8 mai 1945, à Sétif",
            "Le 13 mai 1958, à Alger",
            "Le 18 mars 1962, à Évian"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La guerre d'Algérie commence dans la nuit du 31 octobre au 1er novembre 1954, la « Toussaint rouge »."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p05_q2",
          "type": "mcq",
          "prompt": "Combien de temps la guerre d'Algérie dure-t-elle ?",
          "options": [
            "Près de huit ans",
            "Près de deux ans",
            "Près de quatre ans",
            "Près de douze ans"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cours donne une durée de près de huit ans pour la guerre d'Algérie (1954-1962)."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p05_q3",
          "type": "mcq",
          "prompt": "Depuis quels pays le FLN s'approvisionne-t-il ?",
          "options": [
            "Le Maroc, la Tunisie et l'Égypte",
            "Le Mali, le Sénégal et la Guinée",
            "La Libye, le Soudan et l'Éthiopie",
            "L'Italie, l'Espagne et le Portugal"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le FLN s'approvisionne depuis le Maroc, la Tunisie et l'Égypte."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p05_q4",
          "type": "mcq",
          "prompt": "Quelles méthodes la France utilise-t-elle pendant la guerre d'Algérie ?",
          "options": [
            "Le quadrillage, le regroupement des populations et la torture",
            "La négociation et le dialogue",
            "L'octroi immédiat de l'indépendance",
            "Le retrait de toutes les troupes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La France pratique le quadrillage du territoire, le regroupement des populations et la torture."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p05_q5",
          "type": "mcq",
          "prompt": "Que se passe-t-il le 13 mai 1958 à Alger ?",
          "options": [
            "Le Comité de Salut Public est créé et appelle le général De Gaulle",
            "Les accords d'Évian sont signés",
            "L'indépendance de l'Algérie est proclamée",
            "Le FLN dépose les armes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le 13 mai 1958, le Comité de Salut Public est créé à Alger et appelle le général De Gaulle."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p05_q6",
          "type": "mcq",
          "prompt": "Comment le cours qualifie-t-il la guerre d'Algérie ?",
          "options": [
            "Une guerre de libération nationale",
            "Une guerre civile entre Algériens",
            "Une guerre entre la France et l'Égypte",
            "Une guerre de religion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cours qualifie la guerre d'Algérie de guerre de libération nationale, menée par les nationalistes algériens."
        }
      ]
    },
    {
      "id": "terminale_hg_histoire_t2_l03_algerie_independance_p06",
      "order": 6,
      "title": "De Gaulle et les accords d'Évian",
      "summary": "« Algériens, je vous ai compris ! », le GPRA, l'OAS et les accords d'Évian de 1962.",
      "conceptExplanation": "Le 4 juin 1958, à Alger, le général De Gaulle prononce : « Algériens, je vous ai compris ! ». En octobre 1958, le GPRA (Gouvernement Provisoire de la République Algérienne) est créé. La semaine des barricades, du 24 au 31 janvier 1960, puis l'OAS (Organisation Armée Secrète) et le putsch d'avril 1961 s'opposent à l'indépendance.\nLes négociations s'ouvrent : côté français, Louis Joxe, R. Rubon [sic] et J. de Broglie ; côté algérien, Belkacem Krim, L. Ben Tobbal, S. Dahleb et M. Yazid. Les accords d'Évian sont signés le 18 mars 1962 : ils prévoient l'indépendance, l'intégrité du territoire y compris le Sahara, l'évacuation progressive des troupes françaises et une aide maintenue trois ans.\nLe référendum du 8 avril 1962 approuve les accords d'Évian ; le référendum d'autodétermination du 1er juillet 1962 donne 90 % de « OUI » ; l'indépendance est proclamée le 3 juillet 1962. Le premier président de l'Algérie indépendante est Ahmed Ben Bella.",
      "keyRule": "4 juin 1958 : « Algériens, je vous ai compris ! » ; 18 mars 1962 : accords d'Évian ; 1er juillet 1962 : référendum (90 % de OUI) ; 3 juillet 1962 : indépendance.",
      "formulas": [],
      "workedExample": {
        "title": "Associer les dates aux événements de 1958 à 1962",
        "statement": "Associe chaque date à son événement : 4 juin 1958, octobre 1958, 18 mars 1962, 1er juillet 1962, 3 juillet 1962.",
        "methodSteps": [
          "4 juin 1958 : De Gaulle prononce à Alger « Algériens, je vous ai compris ! ».",
          "Octobre 1958 : création du GPRA.",
          "18 mars 1962 : signature des accords d'Évian.",
          "1er juillet 1962 : référendum d'autodétermination, 90 % de « OUI ».",
          "3 juillet 1962 : proclamation de l'indépendance de l'Algérie."
        ],
        "conclusion": "1958 : De Gaulle et GPRA ; 1962 : Évian, référendum et indépendance."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "« Algériens, je vous ai compris ! »",
          "stepTheme": "« Algériens, je vous ai compris ! »",
          "stepBadge": "« Algériens, je vous ai compris ! »",
          "paragraphText": "• Le 4 juin 1958, à Alger, le général De Gaulle prononce : « Algériens, je vous ai compris ! ».\n• De Gaulle est revenu au pouvoir après l'appel du Comité de Salut Public du 13 mai 1958.\n• Ses intentions restent ambiguës : il ouvre ensuite la voie à l'autodétermination.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p06_q1",
            "type": "mcq",
            "prompt": "Quand et où De Gaulle prononce-t-il « Algériens, je vous ai compris ! » ?",
            "options": [
              "Le 4 juin 1958, à Alger",
              "Le 13 mai 1958, à Paris",
              "Le 18 mars 1962, à Évian",
              "Le 3 juillet 1962, à Alger"
            ],
            "correctAnswerIndex": 0,
            "explanation": "De Gaulle prononce « Algériens, je vous ai compris ! » le 4 juin 1958, à Alger."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le GPRA",
          "stepTheme": "Le GPRA",
          "stepBadge": "Le GPRA",
          "paragraphText": "• Le GPRA (Gouvernement Provisoire de la République Algérienne) est créé en octobre 1958.\n• Il représente le FLN dans les négociations avec la France.\n• Il prépare la transition vers l'indépendance.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p06_q2",
            "type": "mcq",
            "prompt": "Quand le GPRA est-il créé ?",
            "options": [
              "En octobre 1958",
              "En mars 1954",
              "En mai 1945",
              "En juillet 1962"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le GPRA (Gouvernement Provisoire de la République Algérienne) est créé en octobre 1958."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'OAS et le putsch",
          "stepTheme": "L'OAS et le putsch",
          "stepBadge": "L'OAS et le putsch",
          "paragraphText": "• La semaine des barricades, du 24 au 31 janvier 1960, s'oppose à l'autodétermination.\n• L'OAS (Organisation Armée Secrète) et le putsch d'avril 1961 s'opposent aussi à l'indépendance.\n• Ces oppositions n'empêchent pas les négociations d'aboutir.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p06_q3",
            "type": "mcq",
            "prompt": "Qu'est-ce que l'OAS ?",
            "options": [
              "L'Organisation Armée Secrète, opposée à l'indépendance de l'Algérie",
              "L'Organisation Africaine de Solidarité",
              "L'Office Algérien de la Santé",
              "L'Organisation des Armées Secrètes du FLN"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'OAS est l'Organisation Armée Secrète, qui s'oppose à l'indépendance de l'Algérie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Les négociateurs d'Évian",
          "stepTheme": "Les négociateurs d'Évian",
          "stepBadge": "Les négociateurs d'Évian",
          "paragraphText": "• Côté français : Louis Joxe, R. Rubon [sic] et J. de Broglie.\n• Côté algérien : Belkacem Krim, L. Ben Tobbal, S. Dahleb et M. Yazid.\n• Les accords d'Évian sont signés le 18 mars 1962.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p06_q4",
            "type": "mcq",
            "prompt": "Quand les accords d'Évian sont-ils signés ?",
            "options": [
              "Le 18 mars 1962",
              "Le 8 avril 1962",
              "Le 1er juillet 1962",
              "Le 3 juillet 1962"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les accords d'Évian sont signés le 18 mars 1962."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le contenu des accords d'Évian",
          "stepTheme": "Le contenu des accords d'Évian",
          "stepBadge": "Le contenu des accords d'Évian",
          "paragraphText": "• Les accords d'Évian prévoient l'indépendance de l'Algérie et l'intégrité de son territoire, y compris le Sahara.\n• Ils prévoient l'évacuation progressive des troupes françaises et une aide maintenue trois ans.\n• Ils prévoient aussi un cessez-le-feu, un État indépendant et souverain, et des garanties pour les Français d'Algérie.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p06_q5",
            "type": "mcq",
            "prompt": "Que prévoient les accords d'Évian pour le territoire algérien ?",
            "options": [
              "L'indépendance et l'intégrité du territoire, y compris le Sahara",
              "Le partage de l'Algérie entre la France et le FLN",
              "Le maintien de l'Algérie dans la France",
              "La partition du Sahara"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les accords d'Évian prévoient l'indépendance de l'Algérie et l'intégrité de son territoire, y compris le Sahara."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les référendums et l'indépendance",
          "stepTheme": "Les référendums et l'indépendance",
          "stepBadge": "Les référendums et l'indépendance",
          "paragraphText": "• Le référendum du 8 avril 1962 approuve les accords d'Évian.\n• Le référendum d'autodétermination du 1er juillet 1962 donne 90 % de « OUI ».\n• L'indépendance est proclamée le 3 juillet 1962 ; le premier président est Ahmed Ben Bella.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p06_q6",
            "type": "mcq",
            "prompt": "Quel résultat donne le référendum d'autodétermination du 1er juillet 1962 ?",
            "options": [
              "90 % de « OUI »",
              "50 % de « OUI »",
              "90 % de « NON »",
              "Un résultat nul"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le référendum d'autodétermination du 1er juillet 1962 donne 90 % de « OUI » ; l'indépendance est proclamée le 3 juillet 1962."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p06_q1",
          "type": "mcq",
          "prompt": "Quand et où De Gaulle prononce-t-il « Algériens, je vous ai compris ! » ?",
          "options": [
            "Le 4 juin 1958, à Alger",
            "Le 13 mai 1958, à Paris",
            "Le 18 mars 1962, à Évian",
            "Le 3 juillet 1962, à Alger"
          ],
          "correctAnswerIndex": 0,
          "explanation": "De Gaulle prononce « Algériens, je vous ai compris ! » le 4 juin 1958, à Alger."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p06_q2",
          "type": "mcq",
          "prompt": "Quand le GPRA est-il créé ?",
          "options": [
            "En octobre 1958",
            "En mars 1954",
            "En mai 1945",
            "En juillet 1962"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le GPRA (Gouvernement Provisoire de la République Algérienne) est créé en octobre 1958."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p06_q3",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'OAS ?",
          "options": [
            "L'Organisation Armée Secrète, opposée à l'indépendance de l'Algérie",
            "L'Organisation Africaine de Solidarité",
            "L'Office Algérien de la Santé",
            "L'Organisation des Armées Secrètes du FLN"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'OAS est l'Organisation Armée Secrète, qui s'oppose à l'indépendance de l'Algérie."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p06_q4",
          "type": "mcq",
          "prompt": "Quand les accords d'Évian sont-ils signés ?",
          "options": [
            "Le 18 mars 1962",
            "Le 8 avril 1962",
            "Le 1er juillet 1962",
            "Le 3 juillet 1962"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les accords d'Évian sont signés le 18 mars 1962."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p06_q5",
          "type": "mcq",
          "prompt": "Que prévoient les accords d'Évian pour le territoire algérien ?",
          "options": [
            "L'indépendance et l'intégrité du territoire, y compris le Sahara",
            "Le partage de l'Algérie entre la France et le FLN",
            "Le maintien de l'Algérie dans la France",
            "La partition du Sahara"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les accords d'Évian prévoient l'indépendance de l'Algérie et l'intégrité de son territoire, y compris le Sahara."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p06_q6",
          "type": "mcq",
          "prompt": "Quel résultat donne le référendum d'autodétermination du 1er juillet 1962 ?",
          "options": [
            "90 % de « OUI »",
            "50 % de « OUI »",
            "90 % de « NON »",
            "Un résultat nul"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le référendum d'autodétermination du 1er juillet 1962 donne 90 % de « OUI » ; l'indépendance est proclamée le 3 juillet 1962."
        }
      ]
    },
    {
      "id": "terminale_hg_histoire_t2_l03_algerie_independance_p07",
      "order": 7,
      "title": "L'indépendance et son bilan",
      "summary": "Le coût humain de la guerre, les grandes étapes et la conclusion du cours.",
      "conceptExplanation": "La guerre d'Algérie a coûté environ un million de morts algériens. Le Manifeste du peuple algérien de 1943 réclamait déjà l'instruction gratuite et obligatoire.\nLes grandes étapes de l'accession à l'indépendance sont : Sétif en 1945, le 1er novembre 1954, le référendum de septembre 1958, les accords d'Évian du 18 mars 1962 et le 3 juillet 1962.\nLa conclusion du cours est claire : ce sont les nationalistes algériens qui ont conquis l'indépendance. L'affirmation « Le référendum de l'autodétermination a eu lieu le 8 janvier 1956 » est fausse : le référendum d'autodétermination a eu lieu le 1er juillet 1962.",
      "keyRule": "Environ un million de morts algériens ; grandes étapes : Sétif 1945, 1er novembre 1954, référendum septembre 1958, Évian 18 mars 1962, 3 juillet 1962.",
      "formulas": [],
      "workedExample": {
        "title": "Classer les grandes étapes de l'indépendance",
        "statement": "Classe les grandes étapes dans l'ordre chronologique : les accords d'Évian, Sétif, le 1er novembre 1954, le référendum de septembre 1958, l'indépendance.",
        "methodSteps": [
          "1945 : Sétif.",
          "1er novembre 1954 : la Toussaint rouge, début de la guerre.",
          "Septembre 1958 : le référendum.",
          "18 mars 1962 : les accords d'Évian.",
          "3 juillet 1962 : l'indépendance."
        ],
        "conclusion": "Sétif 1945, Toussaint rouge 1954, référendum 1958, Évian 1962, indépendance 3 juillet 1962."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le coût humain de la guerre",
          "stepTheme": "Le coût humain de la guerre",
          "stepBadge": "Le coût humain de la guerre",
          "paragraphText": "• La guerre d'Algérie a coûté environ un million de morts algériens.\n• Ce bilan montre le prix payé pour l'indépendance.\n• La guerre a duré près de huit ans, de 1954 à 1962.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p07_q1",
            "type": "mcq",
            "prompt": "Combien la guerre d'Algérie a-t-elle coûté de morts algériens, selon le cours ?",
            "options": [
              "Environ un million",
              "Environ 100 000",
              "Environ 10 000",
              "Environ 5 millions"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le cours donne environ un million de morts algériens pour la guerre d'Algérie."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le Manifeste de 1943 et l'instruction",
          "stepTheme": "Le Manifeste de 1943 et l'instruction",
          "stepBadge": "Le Manifeste de 1943 et l'instruction",
          "paragraphText": "• Le Manifeste du peuple algérien du 10 février 1943 réclame la liberté et l'égalité absolue.\n• Il réclame aussi l'instruction gratuite et obligatoire.\n• L'instruction est donc une revendication ancienne du nationalisme algérien.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p07_q2",
            "type": "mcq",
            "prompt": "Que réclame le Manifeste de 1943 en matière d'instruction ?",
            "options": [
              "L'instruction gratuite et obligatoire",
              "L'instruction réservée aux Français",
              "L'instruction en arabe seulement",
              "L'instruction en français seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le Manifeste du peuple algérien de 1943 réclame l'instruction gratuite et obligatoire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les grandes étapes de l'indépendance",
          "stepTheme": "Les grandes étapes de l'indépendance",
          "stepBadge": "Les grandes étapes de l'indépendance",
          "paragraphText": "• Les grandes étapes de l'accession à l'indépendance sont : Sétif en 1945, le 1er novembre 1954, le référendum de septembre 1958, les accords d'Évian du 18 mars 1962 et le 3 juillet 1962.\n• Ces étapes jalonnent dix-sept ans de lutte, de Sétif à l'indépendance.\n• Le référendum de septembre 1958 est l'étape citée par le cours entre 1954 et 1962.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p07_q3",
            "type": "mcq",
            "prompt": "Quelle est la première grande étape de l'accession à l'indépendance citée par le cours ?",
            "options": [
              "Sétif en 1945",
              "Le 1er novembre 1954",
              "Le référendum de septembre 1958",
              "Les accords d'Évian de 1962"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La première grande étape citée par le cours est Sétif en 1945, suivie du 1er novembre 1954, du référendum de septembre 1958, des accords d'Évian et du 3 juillet 1962."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le référendum d'autodétermination",
          "stepTheme": "Le référendum d'autodétermination",
          "stepBadge": "Le référendum d'autodétermination",
          "paragraphText": "• Le référendum d'autodétermination a eu lieu le 1er juillet 1962.\n• Il a donné 90 % de « OUI ».\n• Piège d'examen : l'affirmation « Le référendum de l'autodétermination a eu lieu le 8 janvier 1956 » est fausse.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p07_q4",
            "type": "mcq",
            "prompt": "L'affirmation « Le référendum de l'autodétermination a eu lieu le 8 janvier 1956 » est-elle vraie ?",
            "options": [
              "Non, il a eu lieu le 1er juillet 1962",
              "Oui, il a eu lieu le 8 janvier 1956",
              "Non, il a eu lieu le 8 avril 1962",
              "Oui, mais seulement en métropole"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le référendum d'autodétermination a eu lieu le 1er juillet 1962 (90 % de « OUI ») ; l'affirmation du 8 janvier 1956 est fausse."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les accords d'Évian en résumé",
          "stepTheme": "Les accords d'Évian en résumé",
          "stepBadge": "Les accords d'Évian en résumé",
          "paragraphText": "• Les accords d'Évian prévoient un cessez-le-feu, un État indépendant et souverain, et des garanties pour les Français d'Algérie.\n• Ils prévoient l'évacuation progressive des troupes françaises et une aide maintenue trois ans.\n• L'indépendance est proclamée le 3 juillet 1962.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p07_q5",
            "type": "mcq",
            "prompt": "Que prévoient les accords d'Évian, en résumé ?",
            "options": [
              "Un cessez-le-feu, un État indépendant et souverain, et des garanties pour les Français d'Algérie",
              "Le maintien de l'Algérie dans la France",
              "Le partage de l'Algérie entre la France et le FLN",
              "L'expulsion immédiate de tous les Français d'Algérie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les accords d'Évian prévoient un cessez-le-feu, un État indépendant et souverain, et des garanties pour les Français d'Algérie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La conclusion du cours",
          "stepTheme": "La conclusion du cours",
          "stepBadge": "La conclusion du cours",
          "paragraphText": "• La conclusion du cours est claire : ce sont les nationalistes algériens qui ont conquis l'indépendance.\n• L'indépendance n'a pas été octroyée par la France, elle a été conquise par la lutte.\n• Le premier président de l'Algérie indépendante est Ahmed Ben Bella.",
          "exercise": {
            "id": "terminale_hg_histoire_t2_l03_algerie_independance_p07_q6",
            "type": "mcq",
            "prompt": "Quelle est la conclusion du cours sur l'indépendance de l'Algérie ?",
            "options": [
              "Ce sont les nationalistes algériens qui ont conquis l'indépendance",
              "L'indépendance a été octroyée par la France",
              "L'indépendance a été décidée par l'ONU seule",
              "L'indépendance a été accordée sans lutte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La conclusion du cours est que ce sont les nationalistes algériens qui ont conquis l'indépendance."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p07_q1",
          "type": "mcq",
          "prompt": "Combien la guerre d'Algérie a-t-elle coûté de morts algériens, selon le cours ?",
          "options": [
            "Environ un million",
            "Environ 100 000",
            "Environ 10 000",
            "Environ 5 millions"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cours donne environ un million de morts algériens pour la guerre d'Algérie."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p07_q2",
          "type": "mcq",
          "prompt": "Que réclame le Manifeste de 1943 en matière d'instruction ?",
          "options": [
            "L'instruction gratuite et obligatoire",
            "L'instruction réservée aux Français",
            "L'instruction en arabe seulement",
            "L'instruction en français seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le Manifeste du peuple algérien de 1943 réclame l'instruction gratuite et obligatoire."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p07_q3",
          "type": "mcq",
          "prompt": "Quelle est la première grande étape de l'accession à l'indépendance citée par le cours ?",
          "options": [
            "Sétif en 1945",
            "Le 1er novembre 1954",
            "Le référendum de septembre 1958",
            "Les accords d'Évian de 1962"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La première grande étape citée par le cours est Sétif en 1945, suivie du 1er novembre 1954, du référendum de septembre 1958, des accords d'Évian et du 3 juillet 1962."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p07_q4",
          "type": "mcq",
          "prompt": "L'affirmation « Le référendum de l'autodétermination a eu lieu le 8 janvier 1956 » est-elle vraie ?",
          "options": [
            "Non, il a eu lieu le 1er juillet 1962",
            "Oui, il a eu lieu le 8 janvier 1956",
            "Non, il a eu lieu le 8 avril 1962",
            "Oui, mais seulement en métropole"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le référendum d'autodétermination a eu lieu le 1er juillet 1962 (90 % de « OUI ») ; l'affirmation du 8 janvier 1956 est fausse."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p07_q5",
          "type": "mcq",
          "prompt": "Que prévoient les accords d'Évian, en résumé ?",
          "options": [
            "Un cessez-le-feu, un État indépendant et souverain, et des garanties pour les Français d'Algérie",
            "Le maintien de l'Algérie dans la France",
            "Le partage de l'Algérie entre la France et le FLN",
            "L'expulsion immédiate de tous les Français d'Algérie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les accords d'Évian prévoient un cessez-le-feu, un État indépendant et souverain, et des garanties pour les Français d'Algérie."
        },
        {
          "id": "terminale_hg_histoire_t2_l03_algerie_independance_p07_q6",
          "type": "mcq",
          "prompt": "Quelle est la conclusion du cours sur l'indépendance de l'Algérie ?",
          "options": [
            "Ce sont les nationalistes algériens qui ont conquis l'indépendance",
            "L'indépendance a été octroyée par la France",
            "L'indépendance a été décidée par l'ONU seule",
            "L'indépendance a été accordée sans lutte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La conclusion du cours est que ce sont les nationalistes algériens qui ont conquis l'indépendance."
        }
      ]
    }
  ]
};
