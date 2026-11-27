import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 15 : L'amélioration et la protection des sols » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2877
export const SVT_TLE_D_L15_AMELIORATION_PROTECTION_SOLS: CurriculumChapter = {
  "id": "terminale_d_svt_l15_amelioration_protection_sols",
  "subjectId": "svt",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [],
  "order": 15,
  "title": "Leçon 15 : L'amélioration et la protection des sols",
  "summary": "La fertilité d’un sol peut être améliorée par des amendements (engrais chimiques ou organiques, amendements calcaires ou humifères) et protégée par des techniques culturales comme le paillage, la jachère, l’assolement, le terrassement et l’engazonnement.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2877",
  "points": [
    {
      "id": "terminale_d_svt_l15_amelioration_protection_sols_p01",
      "order": 1,
      "title": "L’amendement chimique : les engrais N, P, K et la dose optimale",
      "summary": "Lire le tableau des rendements en fonction des doses d’engrais et comprendre pourquoi un excès devient toxique.",
      "conceptExplanation": "Un ingénieur agronome réalise des expériences d’épandage d’engrais chimiques (N, P, K) sur une parcelle dont la production est en baisse.\nDe 50 à 150 kg par hectare d’engrais apportés, le rendement augmente et atteint un maximum de 82,5 quintaux par hectare à la dose de 150 kg par hectare.\nAu-delà de 150 kg par hectare, le rendement diminue, passant de 60 à 40 quintaux par hectare pour les doses de 250 et 300 kg par hectare.\nCette augmentation initiale s’explique parce que les engrais chimiques apportés enrichissent la réserve minérale du sol : ces éléments minéraux sont directement assimilables par les plantes, et les engrais simples sont N, P et K.\nMais pour des doses très élevées, ces engrais chimiques deviennent toxiques pour les plantes, d’où la baisse du rendement.",
      "keyRule": "Le rendement monte jusqu’à la dose optimale de 150 kg par hectare (82,5 quintaux par hectare), puis chute : trop d’engrais devient toxique.",
      "formulas": [],
      "workedExample": {
        "title": "Trouver la dose optimale dans le tableau des rendements",
        "statement": "Le tableau donne les rendements (48 ; 67 ; 82,5 ; 80 ; 60 ; 40 quintaux par hectare) pour des doses de 50 à 300 kg par hectare. Détermine la dose optimale et explique la baisse au-delà.",
        "methodSteps": [
          "Le rendement croît de 48 à 82,5 quintaux par hectare quand la dose passe de 50 à 150 kg par hectare.",
          "Le maximum, 82,5 quintaux par hectare, est atteint à 150 kg par hectare : c’est la dose optimale.",
          "Au-delà, le rendement diminue jusqu’à 40 quintaux par hectare à 300 kg par hectare.",
          "L’interprétation de la leçon : à doses très élevées, les engrais chimiques deviennent toxiques pour les plantes."
        ],
        "conclusion": "La dose optimale est de 150 kg par hectare ; au-delà, l’excès d’engrais fait baisser le rendement par toxicité."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le rendement augmente jusqu’à 150 kg par hectare",
          "stepTheme": "Le rendement augmente jusqu’à 150 kg par hectare",
          "stepBadge": "Le rendement augmente jusqu’à 150 kg par hectare",
          "paragraphText": "De 50 à 150 kg par hectare d’engrais apportés, le rendement augmente régulièrement.\nIl passe de 48 quintaux par hectare à 50 kg par hectare d’engrais, à 82,5 quintaux par hectare à 150 kg par hectare.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p01_q1",
            "type": "mcq",
            "prompt": "Quand la dose d’engrais passe de 50 à 150 kg par hectare, le rendement :",
            "options": [
              "Augmente et atteint un maximum de 82,5 quintaux par hectare",
              "Diminue jusqu’à 40 quintaux par hectare",
              "Reste constant",
              "Devient nul par toxicité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D’après l’analyse du tableau, le rendement augmente de 50 à 150 kg par hectare et atteint son maximum de 82,5 quintaux par hectare."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les engrais simples N, P, K",
          "stepTheme": "Les engrais simples N, P, K",
          "stepBadge": "Les engrais simples N, P, K",
          "paragraphText": "Les éléments minéraux apportés par les engrais chimiques sont directement assimilables par les plantes.\nCe sont des éléments nutritifs, parmi lesquels on a les engrais simples : N, P, K (azote, phosphore, potassium).",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p01_q2",
            "type": "mcq",
            "prompt": "Les engrais simples cités dans la leçon sont :",
            "options": [
              "Le calcium et l’humus",
              "N, P et K",
              "Le fumier et le purin",
              "La chaux vive et le carbonate de calcium"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’interprétation de l’expérience nomme les engrais simples : N, P, K."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’enrichissement de la réserve minérale",
          "stepTheme": "L’enrichissement de la réserve minérale",
          "stepBadge": "L’enrichissement de la réserve minérale",
          "paragraphText": "L’augmentation du rendement est due au fait que les engrais chimiques apportés au sol enrichissent la réserve minérale de ce sol.\nLes plantes absorbent ensuite ces éléments minéraux directement assimilables.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p01_q3",
            "type": "mcq",
            "prompt": "Les engrais chimiques améliorent le rendement parce qu’ils :",
            "options": [
              "Apportent de l’humus au sol",
              "Favorisent les vers de terre",
              "Enrichissent la réserve minérale du sol en éléments directement assimilables",
              "Reposent le sol pendant un certain temps"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Selon la leçon, les engrais chimiques enrichissent la réserve minérale du sol en éléments directement assimilables par les plantes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Plus d’engrais ne veut pas dire plus de rendement",
          "stepTheme": "Plus d’engrais ne veut pas dire plus de rendement",
          "stepBadge": "Plus d’engrais ne veut pas dire plus de rendement",
          "paragraphText": "Piège relevé dans l’activité d’application : affirmer qu’une quantité trop élevée d’engrais chimique est bénéfique est faux.\nAu-delà de 150 kg par hectare, le rendement diminue, de 80 quintaux par hectare jusqu’à 40 quintaux par hectare.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p01_q4",
            "type": "mcq",
            "prompt": "À des doses très élevées, les engrais chimiques :",
            "options": [
              "Améliorent encore le rendement",
              "N’ont plus aucun effet",
              "Rendent le sol définitivement fertile",
              "Deviennent toxiques pour les plantes, d’où la baisse du rendement"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le corrigé de l’activité d’application confirme que, à doses élevées, l’engrais chimique devient toxique pour le sol et les plantes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Lire un tableau dose et rendement",
          "stepTheme": "Lire un tableau dose et rendement",
          "stepBadge": "Lire un tableau dose et rendement",
          "paragraphText": "Méthode : on suit l’évolution du rendement quand la dose augmente, on repère la valeur maximale et la dose correspondante.\nIci, le maximum de 82,5 quintaux par hectare correspond à la dose de 150 kg par hectare.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p01_q5",
            "type": "mcq",
            "prompt": "La dose optimale d’engrais, celle du rendement maximal, est :",
            "options": [
              "150 kg par hectare",
              "50 kg par hectare",
              "300 kg par hectare",
              "200 kg par hectare"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le rendement maximal de 82,5 quintaux par hectare est obtenu à la dose de 150 kg par hectare."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’effet immédiat mais bref des engrais chimiques",
          "stepTheme": "L’effet immédiat mais bref des engrais chimiques",
          "stepBadge": "L’effet immédiat mais bref des engrais chimiques",
          "paragraphText": "L’activité d’application 3 de la leçon complète le portrait : les engrais chimiques se dissolvent dans la solution du sol et libèrent des éléments minéraux directement assimilables.\nLeur effet est immédiat, mais il ne dure que le temps d’une récolte.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p01_q6",
            "type": "mcq",
            "prompt": "L’effet des engrais chimiques sur le sol est :",
            "options": [
              "Lent et définitif",
              "Immédiat, mais il ne dure que le temps d’une récolte",
              "Uniquement biologique",
              "Sans effet sur les plantes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D’après le texte à compléter corrigé dans la leçon, l’effet des engrais chimiques est immédiat mais ne dure que le temps d’une récolte."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p01_q1",
          "type": "mcq",
          "prompt": "Quand la dose d’engrais passe de 50 à 150 kg par hectare, le rendement :",
          "options": [
            "Augmente et atteint un maximum de 82,5 quintaux par hectare",
            "Diminue jusqu’à 40 quintaux par hectare",
            "Reste constant",
            "Devient nul par toxicité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D’après l’analyse du tableau, le rendement augmente de 50 à 150 kg par hectare et atteint son maximum de 82,5 quintaux par hectare."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p01_q2",
          "type": "mcq",
          "prompt": "Les engrais simples cités dans la leçon sont :",
          "options": [
            "Le calcium et l’humus",
            "N, P et K",
            "Le fumier et le purin",
            "La chaux vive et le carbonate de calcium"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’interprétation de l’expérience nomme les engrais simples : N, P, K."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p01_q3",
          "type": "mcq",
          "prompt": "Les engrais chimiques améliorent le rendement parce qu’ils :",
          "options": [
            "Apportent de l’humus au sol",
            "Favorisent les vers de terre",
            "Enrichissent la réserve minérale du sol en éléments directement assimilables",
            "Reposent le sol pendant un certain temps"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Selon la leçon, les engrais chimiques enrichissent la réserve minérale du sol en éléments directement assimilables par les plantes."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p01_q4",
          "type": "mcq",
          "prompt": "À des doses très élevées, les engrais chimiques :",
          "options": [
            "Améliorent encore le rendement",
            "N’ont plus aucun effet",
            "Rendent le sol définitivement fertile",
            "Deviennent toxiques pour les plantes, d’où la baisse du rendement"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le corrigé de l’activité d’application confirme que, à doses élevées, l’engrais chimique devient toxique pour le sol et les plantes."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p01_q5",
          "type": "mcq",
          "prompt": "La dose optimale d’engrais, celle du rendement maximal, est :",
          "options": [
            "150 kg par hectare",
            "50 kg par hectare",
            "300 kg par hectare",
            "200 kg par hectare"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le rendement maximal de 82,5 quintaux par hectare est obtenu à la dose de 150 kg par hectare."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p01_q6",
          "type": "mcq",
          "prompt": "L’effet des engrais chimiques sur le sol est :",
          "options": [
            "Lent et définitif",
            "Immédiat, mais il ne dure que le temps d’une récolte",
            "Uniquement biologique",
            "Sans effet sur les plantes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D’après le texte à compléter corrigé dans la leçon, l’effet des engrais chimiques est immédiat mais ne dure que le temps d’une récolte."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l15_amelioration_protection_sols_p02",
      "order": 2,
      "title": "L’amendement organique : vers de terre, minéralisation et engrais verts",
      "summary": "Montrer comment la matière organique est minéralisée et quels sont les deux types d’engrais organiques.",
      "conceptExplanation": "Dans la fertilisation des sols de forêts, les vers de terre jouent un rôle très important : ils perforent le sol, consomment la terre mélangée à de la matière organique et forment des excréments appelés « turricules ».\nLe tableau de la leçon montre qu’en présence de vers de terre, la teneur en éléments minéraux du sol est plus élevée que dans un sol sans vers de terre, pour le calcium, le manganèse, les nitrates, le phosphore et le potassium.\nLes vers de terre décomposent la matière organique, animale et végétale, non assimilable directement par les plantes ; à travers leurs déchets rejetés, ils libèrent les sels minéraux : c’est la minéralisation, qui enrichit le sol en éléments que les plantes absorbent.\nLa matière organique ainsi décomposée constitue l’engrais organique, dont on distingue deux types : les débris animaux et végétaux (paille, purin, fumier) et les engrais verts.\nUn engrais vert est une culture de végétation rapide à incorporer au sol qui la fait pousser pour améliorer sa fertilité ; les engrais verts favorisent la nutrition minérale, protègent et améliorent la structure du sol.",
      "keyRule": "Les engrais organiques doivent d’abord être minéralisés, par les vers de terre notamment, avant que les plantes puissent assimiler leurs éléments.",
      "formulas": [],
      "workedExample": {
        "title": "Comparer un sol avec et sans vers de terre",
        "statement": "À partir du tableau de la leçon (calcium : 1,990 sans vers contre 2,79 avec vers ; potassium : 0,032 contre 0,358), explique le rôle des vers de terre dans la fertilité du sol.",
        "methodSteps": [
          "Pour chaque élément minéral, la teneur est plus élevée dans le sol avec vers de terre que dans le sol sans vers.",
          "Les vers de terre consomment la terre mélangée à la matière organique et rejettent des turricules.",
          "En décomposant la matière organique, ils libèrent les sels minéraux : c’est la minéralisation.",
          "Le sol est ainsi enrichi en éléments assimilables par les plantes."
        ],
        "conclusion": "Les vers de terre fertilisent le sol en minéralisant la matière organique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les turricules",
          "stepTheme": "Les turricules",
          "stepBadge": "Les turricules",
          "paragraphText": "• Turricules : excréments formés par les vers de terre.\nLes vers perforent le sol, consomment la terre mélangée à de la matière organique et rejettent ces turricules riches en éléments minéraux.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p02_q1",
            "type": "mcq",
            "prompt": "Les turricules sont :",
            "options": [
              "Les excréments des vers de terre",
              "Des engrais chimiques de synthèse",
              "Des cultures de végétation rapide",
              "Des résidus de chaux vive"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La présentation de l’expérience définit les turricules comme les excréments formés par les vers de terre."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un sol avec vers est plus riche",
          "stepTheme": "Un sol avec vers est plus riche",
          "stepBadge": "Un sol avec vers est plus riche",
          "paragraphText": "En présence de vers de terre, la teneur en éléments minéraux du sol est plus élevée que celle du sol sans vers de terre.\nC’est vrai pour le calcium, le manganèse, les nitrates, le phosphore et le potassium du tableau.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p02_q2",
            "type": "mcq",
            "prompt": "La comparaison des deux sols du tableau montre que :",
            "options": [
              "Le sol sans vers est plus riche en potassium",
              "Les deux sols ont exactement les mêmes teneurs",
              "Le sol avec vers de terre a des teneurs en éléments minéraux plus élevées",
              "Les vers appauvrissent le sol en calcium"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’analyse des résultats conclut que la teneur en éléments minéraux est plus élevée en présence de vers de terre."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La minéralisation",
          "stepTheme": "La minéralisation",
          "stepBadge": "La minéralisation",
          "paragraphText": "• Minéralisation : libération des sels minéraux par la décomposition de la matière organique.\nLes vers de terre la réalisent à travers leurs déchets rejetés, et les éléments libérés enrichissent le sol et sont absorbés par les plantes.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p02_q3",
            "type": "mcq",
            "prompt": "La minéralisation par les vers de terre consiste à :",
            "options": [
              "Incorporer une culture rapide au sol",
              "Apporter du calcium au sol",
              "Dissoudre des engrais de synthèse",
              "Décomposer la matière organique et libérer les sels minéraux"
            ],
            "correctAnswerIndex": 3,
            "explanation": "D’après l’interprétation, les vers décomposent la matière organique non assimilable et libèrent les sels minéraux : c’est la minéralisation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les débris animaux et végétaux",
          "stepTheme": "Les débris animaux et végétaux",
          "stepBadge": "Les débris animaux et végétaux",
          "paragraphText": "Le premier type d’engrais organique est formé par les débris animaux et végétaux.\nLa leçon donne en exemples la paille, le purin et le fumier.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p02_q4",
            "type": "mcq",
            "prompt": "Parmi ces matières, laquelle est un engrais organique de type débris ?",
            "options": [
              "Le fumier",
              "L’engrais N, P, K",
              "La chaux vive",
              "Le carbonate de calcium"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon cite la paille, le purin et le fumier comme exemples de débris animaux et végétaux."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les engrais verts",
          "stepTheme": "Les engrais verts",
          "stepBadge": "Les engrais verts",
          "paragraphText": "• Engrais vert : culture de végétation rapide à incorporer au sol qui la fait pousser, pour améliorer sa fertilité.\nLes engrais verts favorisent la nutrition minérale, protègent et améliorent la structure du sol.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p02_q5",
            "type": "mcq",
            "prompt": "Un engrais vert est :",
            "options": [
              "Un engrais chimique coloré",
              "Une culture de végétation rapide incorporée au sol pour améliorer sa fertilité",
              "Un sol laissé au repos",
              "Un apport de calcium"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition donnée dans l’interprétation de la deuxième expérience."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Organique n’est pas directement assimilable",
          "stepTheme": "Organique n’est pas directement assimilable",
          "stepBadge": "Organique n’est pas directement assimilable",
          "paragraphText": "Piège : croire que les plantes absorbent directement la matière organique.\nLa matière organique n’est pas assimilable directement par les plantes : elle doit d’abord être décomposée et minéralisée, contrairement aux éléments des engrais chimiques.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p02_q6",
            "type": "mcq",
            "prompt": "Les engrais organiques doivent, avant d’être assimilés par les plantes :",
            "options": [
              "Être dissous dans l’eau chlorée",
              "Être épandus à 150 kg par hectare",
              "Être minéralisés",
              "Être mélangés à la chaux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’activité d’application 2 de la leçon retient comme juste l’affirmation : les engrais organiques sont minéralisés avant d’être assimilés."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p02_q1",
          "type": "mcq",
          "prompt": "Les turricules sont :",
          "options": [
            "Les excréments des vers de terre",
            "Des engrais chimiques de synthèse",
            "Des cultures de végétation rapide",
            "Des résidus de chaux vive"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La présentation de l’expérience définit les turricules comme les excréments formés par les vers de terre."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p02_q2",
          "type": "mcq",
          "prompt": "La comparaison des deux sols du tableau montre que :",
          "options": [
            "Le sol sans vers est plus riche en potassium",
            "Les deux sols ont exactement les mêmes teneurs",
            "Le sol avec vers de terre a des teneurs en éléments minéraux plus élevées",
            "Les vers appauvrissent le sol en calcium"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’analyse des résultats conclut que la teneur en éléments minéraux est plus élevée en présence de vers de terre."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p02_q3",
          "type": "mcq",
          "prompt": "La minéralisation par les vers de terre consiste à :",
          "options": [
            "Incorporer une culture rapide au sol",
            "Apporter du calcium au sol",
            "Dissoudre des engrais de synthèse",
            "Décomposer la matière organique et libérer les sels minéraux"
          ],
          "correctAnswerIndex": 3,
          "explanation": "D’après l’interprétation, les vers décomposent la matière organique non assimilable et libèrent les sels minéraux : c’est la minéralisation."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p02_q4",
          "type": "mcq",
          "prompt": "Parmi ces matières, laquelle est un engrais organique de type débris ?",
          "options": [
            "Le fumier",
            "L’engrais N, P, K",
            "La chaux vive",
            "Le carbonate de calcium"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon cite la paille, le purin et le fumier comme exemples de débris animaux et végétaux."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p02_q5",
          "type": "mcq",
          "prompt": "Un engrais vert est :",
          "options": [
            "Un engrais chimique coloré",
            "Une culture de végétation rapide incorporée au sol pour améliorer sa fertilité",
            "Un sol laissé au repos",
            "Un apport de calcium"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition donnée dans l’interprétation de la deuxième expérience."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p02_q6",
          "type": "mcq",
          "prompt": "Les engrais organiques doivent, avant d’être assimilés par les plantes :",
          "options": [
            "Être dissous dans l’eau chlorée",
            "Être épandus à 150 kg par hectare",
            "Être minéralisés",
            "Être mélangés à la chaux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’activité d’application 2 de la leçon retient comme juste l’affirmation : les engrais organiques sont minéralisés avant d’être assimilés."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l15_amelioration_protection_sols_p03",
      "order": 3,
      "title": "Diagnostiquer un sol impropre à l’agriculture",
      "summary": "Reconnaître les mauvaises propriétés physiques, chimiques et biologiques d’un sol dégradé.",
      "conceptExplanation": "Des études pédologiques réalisées sur un champ dont les rendements diminuent, malgré des doses élevées de fertilisants apportées, donnent les résultats suivants : un pH de 4,5.\nL’état physico-chimique montre une structure compacte, un manque de granulation, une très grande perméabilité à l’eau et à l’air, pas d’ions calcium, beaucoup d’ions H+ et très peu d’humus.\nL’état biologique montre une vie microbienne presque inexistante et une absence de végétation.\nCe sol possède donc une mauvaise propriété physique (structure non organisée, texture non équilibrée, mauvaise perméabilité), une mauvaise propriété chimique (pH acide et absence de sels minéraux) et une mauvaise propriété biologique (activité biologique faible).\nCe sol n’est donc pas propice à l’agriculture : il a perdu ses caractéristiques de fertilité et il faut l’amender, en lui apportant soit du calcium (amendement calcaire), soit de l’humus (amendement humifère).",
      "keyRule": "pH acide, pas de calcium, très peu d’humus et vie microbienne presque inexistante : un sol à amender, en calcaire ou en humus.",
      "formulas": [],
      "workedExample": {
        "title": "Lire le diagnostic d’un sol appauvri",
        "statement": "Un champ donne des rendements en baisse malgré de fortes doses de fertilisants. Les analyses donnent un pH de 4,5, aucun ion calcium, beaucoup d’ions H+ et une vie microbienne presque inexistante. Conclus sur l’état de ce sol.",
        "methodSteps": [
          "Le pH de 4,5 est acide et l’absence d’ions calcium, avec beaucoup d’ions H+, confirme la mauvaise propriété chimique.",
          "La structure compacte et le manque de granulation montrent la mauvaise propriété physique.",
          "La vie microbienne presque inexistante montre la mauvaise propriété biologique.",
          "Le sol est impropre à l’agriculture : il faut un amendement calcaire ou humifère."
        ],
        "conclusion": "Les trois propriétés du sol sont mauvaises : ce sol doit être amendé avant toute culture rentable."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Un pH de 4,5 : un sol acide",
          "stepTheme": "Un pH de 4,5 : un sol acide",
          "stepBadge": "Un pH de 4,5 : un sol acide",
          "paragraphText": "Le sol étudié a un pH de 4,5, avec beaucoup d’ions H+ et pas d’ions calcium.\nSa propriété chimique est mauvaise : pH acide et absence de sels minéraux.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p03_q1",
            "type": "mcq",
            "prompt": "Le sol diagnostiqué dans la leçon a un pH de :",
            "options": [
              "4,5, donc acide",
              "7, donc neutre",
              "9, donc basique",
              "14, donc très basique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le tableau des résultats donne un pH de 4,5, que l’analyse qualifie de pH acide."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une mauvaise propriété physique",
          "stepTheme": "Une mauvaise propriété physique",
          "stepBadge": "Une mauvaise propriété physique",
          "paragraphText": "L’état physico-chimique du sol montre une structure compacte et un manque de granulation.\nL’analyse parle d’une structure non organisée, d’une texture non équilibrée et d’une mauvaise perméabilité à l’eau et à l’air.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p03_q2",
            "type": "mcq",
            "prompt": "La mauvaise propriété physique de ce sol se reconnaît à :",
            "options": [
              "Son pH de 4,5",
              "Sa structure compacte et son manque de granulation",
              "Sa vie microbienne faible",
              "Son absence de végétation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La structure compacte et le manque de granulation relèvent de la propriété physique du sol, selon l’analyse de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une mauvaise propriété biologique",
          "stepTheme": "Une mauvaise propriété biologique",
          "stepBadge": "Une mauvaise propriété biologique",
          "paragraphText": "L’état biologique du sol montre une vie microbienne presque inexistante et une absence de végétation.\nSon activité biologique est donc faible.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p03_q3",
            "type": "mcq",
            "prompt": "La vie microbienne de ce sol est :",
            "options": [
              "Très active grâce aux vers de terre",
              "Normale",
              "Presque inexistante",
              "Responsable de sa fertilité"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le tableau des résultats indique une vie microbienne presque inexistante et une absence de végétation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Un sol impropre à l’agriculture",
          "stepTheme": "Un sol impropre à l’agriculture",
          "stepBadge": "Un sol impropre à l’agriculture",
          "paragraphText": "Ce sol a perdu ses caractéristiques de fertilité : il n’est pas propice à l’agriculture.\nIl faut donc l’amender, en lui apportant soit du calcium, soit de l’humus.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p03_q4",
            "type": "mcq",
            "prompt": "Pour rendre ce sol cultivable, la leçon propose de l’amender par un apport :",
            "options": [
              "D’engrais chimiques à doses toujours plus élevées",
              "De sable uniquement",
              "D’eau chlorée",
              "De calcium (amendement calcaire) ou d’humus (amendement humifère)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’interprétation conclut qu’il faut amender ce sol en lui apportant soit du calcium, soit de l’humus."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Augmenter les fertilisants ne suffit pas",
          "stepTheme": "Augmenter les fertilisants ne suffit pas",
          "stepBadge": "Augmenter les fertilisants ne suffit pas",
          "paragraphText": "Piège : répondre à la baisse des rendements par toujours plus de fertilisants.\nLe champ étudié reçoit déjà des doses élevées de fertilisants, et ses rendements diminuent quand même : le problème est dans les propriétés mêmes du sol.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p03_q5",
            "type": "mcq",
            "prompt": "Le champ de l’expérience reçoit déjà de fortes doses de fertilisants, et pourtant :",
            "options": [
              "Ses rendements diminuent, car le sol a perdu ses caractéristiques de fertilité",
              "Ses rendements augmentent sans limite",
              "Son pH devient neutre",
              "Sa vie microbienne explose"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La présentation de l’expérience précise que les rendements diminuent malgré des doses élevées de fertilisants apportées."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Très peu d’humus dans le sol dégradé",
          "stepTheme": "Très peu d’humus dans le sol dégradé",
          "stepBadge": "Très peu d’humus dans le sol dégradé",
          "paragraphText": "Parmi les signes relevés figurent très peu d’humus dans le sol.\nL’humus sera au cœur de l’amendement humifère étudié ensuite dans la leçon.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p03_q6",
            "type": "mcq",
            "prompt": "Le sol diagnostiqué contient :",
            "options": [
              "Beaucoup d’humus",
              "Très peu d’humus",
              "Beaucoup d’ions calcium",
              "Aucun ion H+"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le tableau des résultats indique très peu d’humus, pas d’ions calcium et beaucoup d’ions H+."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p03_q1",
          "type": "mcq",
          "prompt": "Le sol diagnostiqué dans la leçon a un pH de :",
          "options": [
            "4,5, donc acide",
            "7, donc neutre",
            "9, donc basique",
            "14, donc très basique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le tableau des résultats donne un pH de 4,5, que l’analyse qualifie de pH acide."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p03_q2",
          "type": "mcq",
          "prompt": "La mauvaise propriété physique de ce sol se reconnaît à :",
          "options": [
            "Son pH de 4,5",
            "Sa structure compacte et son manque de granulation",
            "Sa vie microbienne faible",
            "Son absence de végétation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La structure compacte et le manque de granulation relèvent de la propriété physique du sol, selon l’analyse de la leçon."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p03_q3",
          "type": "mcq",
          "prompt": "La vie microbienne de ce sol est :",
          "options": [
            "Très active grâce aux vers de terre",
            "Normale",
            "Presque inexistante",
            "Responsable de sa fertilité"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le tableau des résultats indique une vie microbienne presque inexistante et une absence de végétation."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p03_q4",
          "type": "mcq",
          "prompt": "Pour rendre ce sol cultivable, la leçon propose de l’amender par un apport :",
          "options": [
            "D’engrais chimiques à doses toujours plus élevées",
            "De sable uniquement",
            "D’eau chlorée",
            "De calcium (amendement calcaire) ou d’humus (amendement humifère)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’interprétation conclut qu’il faut amender ce sol en lui apportant soit du calcium, soit de l’humus."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p03_q5",
          "type": "mcq",
          "prompt": "Le champ de l’expérience reçoit déjà de fortes doses de fertilisants, et pourtant :",
          "options": [
            "Ses rendements diminuent, car le sol a perdu ses caractéristiques de fertilité",
            "Ses rendements augmentent sans limite",
            "Son pH devient neutre",
            "Sa vie microbienne explose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La présentation de l’expérience précise que les rendements diminuent malgré des doses élevées de fertilisants apportées."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p03_q6",
          "type": "mcq",
          "prompt": "Le sol diagnostiqué contient :",
          "options": [
            "Beaucoup d’humus",
            "Très peu d’humus",
            "Beaucoup d’ions calcium",
            "Aucun ion H+"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le tableau des résultats indique très peu d’humus, pas d’ions calcium et beaucoup d’ions H+."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l15_amelioration_protection_sols_p04",
      "order": 4,
      "title": "L’amendement calcaire : chaux vive et carbonate de calcium",
      "summary": "Expliquer comment l’apport de calcium forme le complexe argilo-humique et fait s’élever le pH des sols acides.",
      "conceptExplanation": "Faire l’amendement calcaire, c’est apporter du calcium au sol, qui permettra de floculer l’argile et l’humus pour former le complexe argilo-humique et de régulariser l’état ionique du sol.\nPremier exemple : la chaux vive (CaO), réservée aux sols très acides, a un fort pouvoir tampon ; elle s’hydrate et se dissocie dans l’eau du sol en ions calcium et en ions hydroxyde.\nLes ions calcium se fixent sur le complexe argilo-humique en échange d’ions H+, ce qui permet au sol d’avoir une structure organisée, une structure grumeleuse ; les ions hydroxyde se combinent aux ions H+ libérés pour former de l’eau, aucun résidu acide n’apparaît et le pH du milieu s’élève.\nDeuxième exemple : le carbonate de calcium (CaCO3), qui convient aux sols légers (sableux) ; les calcaires broyés finement sont attaqués par l’eau chargée de dioxyde de carbone et par les acides du sol pour se transformer en bicarbonate de calcium, qui se dissocie.\nLes ions calcium se fixent alors sur le complexe argilo-humique en échange d’ions H+, donnant là aussi une structure grumeleuse, tandis que les ions bicarbonate se combinent aux ions H+ pour former l’acide carbonique, un acide faible.",
      "keyRule": "Calcium contre ions H+ sur le complexe argilo-humique : structure grumeleuse retrouvée et pH qui s’élève.",
      "formulas": [],
      "workedExample": {
        "title": "Le mécanisme de la chaux vive dans un sol très acide",
        "statement": "Explique, étape par étape, ce qui se passe quand on apporte de la chaux vive à un sol très acide.",
        "methodSteps": [
          "La chaux vive (CaO), réservée aux sols très acides, s’hydrate et se dissocie dans l’eau du sol.",
          "Elle libère des ions calcium et des ions hydroxyde.",
          "Les ions calcium se fixent sur le complexe argilo-humique en échange d’ions H+ : le sol acquiert une structure grumeleuse.",
          "Les ions hydroxyde se combinent aux ions H+ libérés pour former de l’eau : le pH du milieu s’élève."
        ],
        "conclusion": "L’amendement calcaire réorganise la structure du sol et fait s’élever son pH."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’amendement calcaire",
          "stepTheme": "L’amendement calcaire",
          "stepBadge": "L’amendement calcaire",
          "paragraphText": "• Amendement calcaire : apport de calcium au sol.\nLe calcium permet de floculer l’argile et l’humus pour former le complexe argilo-humique et de régulariser l’état ionique du sol.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p04_q1",
            "type": "mcq",
            "prompt": "Faire un amendement calcaire, c’est apporter au sol :",
            "options": [
              "Du calcium",
              "De l’azote",
              "De la matière organique fraîche",
              "Des vers de terre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon définit l’amendement calcaire comme l’apport de calcium au sol."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le complexe argilo-humique",
          "stepTheme": "Le complexe argilo-humique",
          "stepBadge": "Le complexe argilo-humique",
          "paragraphText": "• Complexe argilo-humique : association de l’argile et de l’humus, floculés grâce au calcium.\nQuand les ions calcium s’y fixent en échange d’ions H+, le sol acquiert une structure organisée, dite grumeleuse.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p04_q2",
            "type": "mcq",
            "prompt": "Le complexe argilo-humique se forme par la floculation :",
            "options": [
              "Du sable et de l’eau",
              "De l’argile et de l’humus, grâce au calcium",
              "Des ions H+ entre eux",
              "Des engrais N, P, K"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D’après le texte, le calcium permet de floculer l’argile et l’humus pour former le complexe argilo-humique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La chaux vive pour les sols très acides",
          "stepTheme": "La chaux vive pour les sols très acides",
          "stepBadge": "La chaux vive pour les sols très acides",
          "paragraphText": "La chaux vive (CaO) est réservée aux sols très acides et a un fort pouvoir tampon.\nElle s’hydrate et se dissocie dans l’eau du sol en ions calcium et ions hydroxyde.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p04_q3",
            "type": "mcq",
            "prompt": "La chaux vive est réservée :",
            "options": [
              "Aux sols légers et sableux",
              "Aux sols neutres",
              "Aux sols très acides",
              "Aux sols riches en humus"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon réserve la chaux vive aux sols très acides, avec un fort pouvoir tampon ; le carbonate de calcium convient aux sols légers."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L’échange calcium contre H+ fait s’élever le pH",
          "stepTheme": "L’échange calcium contre H+ fait s’élever le pH",
          "stepBadge": "L’échange calcium contre H+ fait s’élever le pH",
          "paragraphText": "Les ions calcium se fixent sur le complexe argilo-humique en échange d’ions H+.\nLes ions hydroxyde se combinent aux ions H+ libérés pour former de l’eau : aucun résidu acide n’apparaît et le pH du milieu s’élève.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p04_q4",
            "type": "mcq",
            "prompt": "Après un amendement calcaire à la chaux vive, le pH du sol :",
            "options": [
              "Baisse fortement",
              "Reste inchangé",
              "Devient nul",
              "S’élève, car les ions H+ sont échangés et neutralisés"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le texte de la leçon conclut qu’aucun résidu acide n’apparaît et que le pH du milieu s’élève."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le carbonate de calcium pour les sols légers",
          "stepTheme": "Le carbonate de calcium pour les sols légers",
          "stepBadge": "Le carbonate de calcium pour les sols légers",
          "paragraphText": "Le carbonate de calcium (CaCO3) convient aux sols légers, c’est-à-dire sableux.\nLes calcaires broyés finement sont attaqués par l’eau chargée de dioxyde de carbone et par les acides du sol, pour se transformer en bicarbonate de calcium qui se dissocie.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p04_q5",
            "type": "mcq",
            "prompt": "Le carbonate de calcium convient :",
            "options": [
              "Aux sols légers (sableux)",
              "Aux sols très acides uniquement",
              "Aux sols compacts et argileux",
              "Aux sols de forêt"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon attribue le carbonate de calcium aux sols légers (sableux), et la chaux vive aux sols très acides."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Structure grumeleuse, signe de réussite",
          "stepTheme": "Structure grumeleuse, signe de réussite",
          "stepBadge": "Structure grumeleuse, signe de réussite",
          "paragraphText": "Piège : confondre la structure compacte du sol dégradé avec le résultat de l’amendement.\nAprès fixation des ions calcium sur le complexe argilo-humique, le sol obtient une structure organisée : la structure grumeleuse, favorable aux cultures.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p04_q6",
            "type": "mcq",
            "prompt": "Après l’amendement calcaire, le sol acquiert une structure :",
            "options": [
              "Compacte et sans granulation",
              "Grumeleuse et organisée",
              "Uniquement sableuse",
              "Imperméable à l’eau et à l’air"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte précise que la fixation des ions calcium permet au sol d’avoir une structure organisée, une structure grumeleuse."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "L’intérêt de l’amendement calcaire en évaluation",
          "stepTheme": "L’intérêt de l’amendement calcaire en évaluation",
          "stepBadge": "L’intérêt de l’amendement calcaire en évaluation",
          "paragraphText": "L’activité d’application 2 de la leçon retient comme juste l’affirmation : l’amendement calcaire élève le pH des sols acides.\nC’est exactement le problème du sol diagnostiqué, avec son pH de 4,5.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p04_q7",
            "type": "mcq",
            "prompt": "L’amendement calcaire élève le pH :",
            "options": [
              "Des sols neutres",
              "Des sols basiques",
              "Des sols acides",
              "De tous les sols jusqu’à 14"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’affirmation retenue comme juste dans la leçon est que l’amendement calcaire élève le pH des sols acides."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p04_q1",
          "type": "mcq",
          "prompt": "Faire un amendement calcaire, c’est apporter au sol :",
          "options": [
            "Du calcium",
            "De l’azote",
            "De la matière organique fraîche",
            "Des vers de terre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon définit l’amendement calcaire comme l’apport de calcium au sol."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p04_q2",
          "type": "mcq",
          "prompt": "Le complexe argilo-humique se forme par la floculation :",
          "options": [
            "Du sable et de l’eau",
            "De l’argile et de l’humus, grâce au calcium",
            "Des ions H+ entre eux",
            "Des engrais N, P, K"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D’après le texte, le calcium permet de floculer l’argile et l’humus pour former le complexe argilo-humique."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p04_q3",
          "type": "mcq",
          "prompt": "La chaux vive est réservée :",
          "options": [
            "Aux sols légers et sableux",
            "Aux sols neutres",
            "Aux sols très acides",
            "Aux sols riches en humus"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon réserve la chaux vive aux sols très acides, avec un fort pouvoir tampon ; le carbonate de calcium convient aux sols légers."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p04_q4",
          "type": "mcq",
          "prompt": "Après un amendement calcaire à la chaux vive, le pH du sol :",
          "options": [
            "Baisse fortement",
            "Reste inchangé",
            "Devient nul",
            "S’élève, car les ions H+ sont échangés et neutralisés"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le texte de la leçon conclut qu’aucun résidu acide n’apparaît et que le pH du milieu s’élève."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p04_q5",
          "type": "mcq",
          "prompt": "Le carbonate de calcium convient :",
          "options": [
            "Aux sols légers (sableux)",
            "Aux sols très acides uniquement",
            "Aux sols compacts et argileux",
            "Aux sols de forêt"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon attribue le carbonate de calcium aux sols légers (sableux), et la chaux vive aux sols très acides."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p04_q6",
          "type": "mcq",
          "prompt": "Après l’amendement calcaire, le sol acquiert une structure :",
          "options": [
            "Compacte et sans granulation",
            "Grumeleuse et organisée",
            "Uniquement sableuse",
            "Imperméable à l’eau et à l’air"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte précise que la fixation des ions calcium permet au sol d’avoir une structure organisée, une structure grumeleuse."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p04_q7",
          "type": "mcq",
          "prompt": "L’amendement calcaire élève le pH :",
          "options": [
            "Des sols neutres",
            "Des sols basiques",
            "Des sols acides",
            "De tous les sols jusqu’à 14"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’affirmation retenue comme juste dans la leçon est que l’amendement calcaire élève le pH des sols acides."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l15_amelioration_protection_sols_p05",
      "order": 5,
      "title": "L’amendement humifère et le rôle de l’humus",
      "summary": "Montrer comment l’humus améliore les propriétés physiques, chimiques et biologiques des sols.",
      "conceptExplanation": "L’humus est une matière organique variée, de couleur brune ou noirâtre, de composition chimique mal définie, qui résulte de la décomposition de matière organique d’origine exclusivement végétale, selon la leçon.\nLa présence de l’humus contribue à l’amélioration des propriétés physiques, chimiques et biologiques des sols ; les amendements humifères servent de supports et d’aliments aux micro-organismes et sont la source de l’humus.\nPour les propriétés physiques, l’humus s’associe à l’argile pour former le complexe argilo-humique, qui soude les éléments sableux et forme des agrégats stables, responsables de la bonne perméabilité du sol à l’eau et à l’air.\nPour les propriétés chimiques, la minéralisation de l’humus met à la disposition des plantes des éléments minéraux directement assimilables.\nPour les propriétés biologiques, l’humus sert de support et d’aliments aux micro-organismes qui améliorent la structure du sol, et il contient aussi des activateurs de croissance qui stimulent l’alimentation minérale des plantes.",
      "keyRule": "L’humus agit sur les trois propriétés du sol : agrégats et perméabilité, éléments minéraux par minéralisation, nourriture des micro-organismes.",
      "formulas": [],
      "workedExample": {
        "title": "Les trois rôles de l’humus",
        "statement": "Un sol manque d’humus. Explique, propriété par propriété, ce que l’apport d’amendements humifères va améliorer.",
        "methodSteps": [
          "Physique : l’humus forme avec l’argile le complexe argilo-humique, dont les agrégats stables assurent une bonne perméabilité à l’eau et à l’air.",
          "Chimique : la minéralisation de l’humus libère des éléments minéraux directement assimilables par les plantes.",
          "Biologique : l’humus sert de support et d’aliments aux micro-organismes et contient des activateurs de croissance."
        ],
        "conclusion": "L’amendement humifère améliore simultanément les propriétés physiques, chimiques et biologiques du sol."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’humus",
          "stepTheme": "L’humus",
          "stepBadge": "L’humus",
          "paragraphText": "• Humus : matière organique variée, de couleur brune ou noirâtre, de composition chimique mal définie.\nIl résulte, selon la leçon, de la décomposition de matière organique d’origine exclusivement végétale.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p05_q1",
            "type": "mcq",
            "prompt": "L’humus est une matière organique :",
            "options": [
              "De couleur brune ou noirâtre, résultant de la décomposition de matière organique végétale",
              "De synthèse, produite en usine",
              "Purement minérale",
              "Formée uniquement de débris animaux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition donnée dans la partie sur l’amendement humifère de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’humus et les propriétés physiques",
          "stepTheme": "L’humus et les propriétés physiques",
          "stepBadge": "L’humus et les propriétés physiques",
          "paragraphText": "Pour les propriétés physiques, l’humus s’associe à l’argile pour former le complexe argilo-humique.\nCe complexe soude les éléments sableux en agrégats stables, responsables de la bonne perméabilité du sol à l’eau et à l’air.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p05_q2",
            "type": "mcq",
            "prompt": "Sur le plan physique, l’humus améliore le sol en :",
            "options": [
              "Formant des agrégats stables qui assurent une bonne perméabilité à l’eau et à l’air",
              "Rendant le sol compact",
              "Supprimant toute perméabilité",
              "Augmentant l’acidité"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Selon la leçon, le complexe argilo-humique forme des agrégats stables responsables de la bonne perméabilité du sol."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’humus et les propriétés chimiques",
          "stepTheme": "L’humus et les propriétés chimiques",
          "stepBadge": "L’humus et les propriétés chimiques",
          "paragraphText": "Pour les propriétés chimiques, la minéralisation de l’humus met à la disposition des plantes des éléments minéraux.\nCes éléments sont directement assimilables par les plantes.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p05_q3",
            "type": "mcq",
            "prompt": "Par sa minéralisation, l’humus fournit aux plantes :",
            "options": [
              "Uniquement de l’eau",
              "Du dioxyde de carbone",
              "Des éléments minéraux directement assimilables",
              "De la chaux vive"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le texte précise que la minéralisation de l’humus met à disposition des plantes des éléments minéraux directement assimilables."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L’humus et les propriétés biologiques",
          "stepTheme": "L’humus et les propriétés biologiques",
          "stepBadge": "L’humus et les propriétés biologiques",
          "paragraphText": "Pour les propriétés biologiques, l’humus sert de support et d’aliments aux micro-organismes qui améliorent la structure du sol.\nIl contient aussi des activateurs de croissance qui stimulent l’alimentation minérale des plantes.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p05_q4",
            "type": "mcq",
            "prompt": "Sur le plan biologique, l’humus sert :",
            "options": [
              "À détruire les micro-organismes",
              "Uniquement de réserve d’eau",
              "À bloquer l’alimentation des plantes",
              "De support et d’aliments aux micro-organismes du sol"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’activité d’application 2 retient comme juste que l’amendement humifère sert de support et d’aliments aux micro-organismes du sol."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L’humus n’apporte pas que de l’humus",
          "stepTheme": "L’humus n’apporte pas que de l’humus",
          "stepBadge": "L’humus n’apporte pas que de l’humus",
          "paragraphText": "Piège relevé dans l’activité d’application 2 : affirmer que les engrais organiques apportent uniquement de l’humus au sol est faux.\nLeur minéralisation fournit aussi des éléments minéraux assimilables par les plantes.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p05_q5",
            "type": "mcq",
            "prompt": "L’affirmation « les engrais organiques apportent uniquement de l’humus au sol » est :",
            "options": [
              "Fausse, car leur minéralisation libère aussi des éléments minéraux",
              "Vraie, selon le corrigé de la leçon",
              "Vraie uniquement pour le fumier",
              "Sans lien avec la minéralisation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé de l’activité d’application 2 ne retient pas cette affirmation parmi les justes : les affirmations justes sont 1, 2 et 3."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les amendements humifères, source de l’humus",
          "stepTheme": "Les amendements humifères, source de l’humus",
          "stepBadge": "Les amendements humifères, source de l’humus",
          "paragraphText": "Les amendements humifères sont les apports qui servent de supports et d’aliments aux micro-organismes.\nIls sont la source de l’humus qui améliorera durablement le sol.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p05_q6",
            "type": "mcq",
            "prompt": "Les amendements humifères sont :",
            "options": [
              "Des apports de chaux vive",
              "La source de l’humus et le support des micro-organismes",
              "Des engrais chimiques N, P, K",
              "Des cultures laissées au repos"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon présente les amendements humifères comme servant de supports et d’aliments aux micro-organismes et comme source de l’humus."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p05_q1",
          "type": "mcq",
          "prompt": "L’humus est une matière organique :",
          "options": [
            "De couleur brune ou noirâtre, résultant de la décomposition de matière organique végétale",
            "De synthèse, produite en usine",
            "Purement minérale",
            "Formée uniquement de débris animaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition donnée dans la partie sur l’amendement humifère de la leçon."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p05_q2",
          "type": "mcq",
          "prompt": "Sur le plan physique, l’humus améliore le sol en :",
          "options": [
            "Formant des agrégats stables qui assurent une bonne perméabilité à l’eau et à l’air",
            "Rendant le sol compact",
            "Supprimant toute perméabilité",
            "Augmentant l’acidité"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Selon la leçon, le complexe argilo-humique forme des agrégats stables responsables de la bonne perméabilité du sol."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p05_q3",
          "type": "mcq",
          "prompt": "Par sa minéralisation, l’humus fournit aux plantes :",
          "options": [
            "Uniquement de l’eau",
            "Du dioxyde de carbone",
            "Des éléments minéraux directement assimilables",
            "De la chaux vive"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le texte précise que la minéralisation de l’humus met à disposition des plantes des éléments minéraux directement assimilables."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p05_q4",
          "type": "mcq",
          "prompt": "Sur le plan biologique, l’humus sert :",
          "options": [
            "À détruire les micro-organismes",
            "Uniquement de réserve d’eau",
            "À bloquer l’alimentation des plantes",
            "De support et d’aliments aux micro-organismes du sol"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’activité d’application 2 retient comme juste que l’amendement humifère sert de support et d’aliments aux micro-organismes du sol."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p05_q5",
          "type": "mcq",
          "prompt": "L’affirmation « les engrais organiques apportent uniquement de l’humus au sol » est :",
          "options": [
            "Fausse, car leur minéralisation libère aussi des éléments minéraux",
            "Vraie, selon le corrigé de la leçon",
            "Vraie uniquement pour le fumier",
            "Sans lien avec la minéralisation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé de l’activité d’application 2 ne retient pas cette affirmation parmi les justes : les affirmations justes sont 1, 2 et 3."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p05_q6",
          "type": "mcq",
          "prompt": "Les amendements humifères sont :",
          "options": [
            "Des apports de chaux vive",
            "La source de l’humus et le support des micro-organismes",
            "Des engrais chimiques N, P, K",
            "Des cultures laissées au repos"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon présente les amendements humifères comme servant de supports et d’aliments aux micro-organismes et comme source de l’humus."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l15_amelioration_protection_sols_p06",
      "order": 6,
      "title": "Les techniques de protection des sols",
      "summary": "Définir paillage, jachère, assolement, terrassement et engazonnement, et choisir une technique adaptée à une situation.",
      "conceptExplanation": "Pour protéger et améliorer la fertilité des sols, le texte de la leçon cite le paillage des surfaces à protéger, les pratiques de jachère et d’assolement, le reboisement et l’engazonnement des terrains dénudés, ainsi que le terrassement sur les terrains pentus.\nLe paillage consiste en la mise en place d’une couverture de matière végétale morte (paille) pour enrichir un sol et le protéger contre la battance des pluies, l’érosion et l’insolation.\nLa jachère consiste à la mise au repos d’un sol pendant un certain temps afin de lui permettre de reconstituer naturellement sa fertilité.\nL’assolement, ou rotation, est une alternance de cultures n’ayant pas les mêmes besoins en éléments minéraux sur un même sol, dans le but de conserver la fertilité de ce sol en retardant son épuisement en éléments minéraux.\nLe terrassement consiste à faire des cultures en terrasse, en forme d’escaliers : le terrain en pente est aménagé en une succession de surfaces planes ou peu inclinées, ce qui permet de lutter contre l’écoulement rapide des eaux.\nLes plantes de couverture, ou engazonnement, consistent à recouvrir le sol par une plante de couverture qui le protège contre l’érosion et reconstitue la faune et la flore de ce sol.",
      "keyRule": "Paillage contre la battance et l’érosion, jachère pour le repos, assolement contre l’épuisement, terrassement contre le ruissellement, engazonnement pour couvrir.",
      "formulas": [],
      "workedExample": {
        "title": "Choisir entre engrais azoté et engrais vert pour le riz (situation d’évaluation)",
        "statement": "Des parcelles de riz donnent 2100 kg par hectare sans amélioration (témoin), 3800 kg par hectare avec 60 kg d’engrais azotés par hectare et 5900 kg par hectare avec une légumineuse comme engrais vert. Déduis la technique qui convient le mieux.",
        "methodSteps": [
          "La parcelle témoin, pauvre en éléments minéraux assimilables, donne le plus faible rendement.",
          "L’engrais azoté apporte des éléments minéraux : le rendement monte à 3800 kg par hectare.",
          "La légumineuse fait mieux, 5900 kg par hectare, car elle fixe l’azote atmosphérique grâce à ses nodosités et, par sa décomposition et sa minéralisation, fournit encore des éléments minéraux."
        ],
        "conclusion": "La technique qui convient est l’amendement organique par apport d’engrais vert (légumineuse)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le paillage",
          "stepTheme": "Le paillage",
          "stepBadge": "Le paillage",
          "paragraphText": "• Paillage : mise en place d’une couverture de matière végétale morte (paille) sur le sol.\nIl enrichit le sol et le protège contre la battance des pluies, l’érosion et l’insolation.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p06_q1",
            "type": "mcq",
            "prompt": "Le paillage consiste à :",
            "options": [
              "Mettre en place une couverture de matière végétale morte sur le sol",
              "Laisser le sol au repos sans culture",
              "Alterner les cultures sur un même sol",
              "Aménager le terrain en escaliers"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la description du paillage dans l’analyse du texte de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La jachère",
          "stepTheme": "La jachère",
          "stepBadge": "La jachère",
          "paragraphText": "• Jachère : mise au repos d’un sol pendant un certain temps.\nCe repos lui permet de reconstituer naturellement sa fertilité.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p06_q2",
            "type": "mcq",
            "prompt": "La jachère consiste à :",
            "options": [
              "Couvrir le sol de paille",
              "Mettre le sol au repos pour qu’il reconstitue naturellement sa fertilité",
              "Cultiver en terrasses",
              "Planter une légumineuse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Selon la leçon, la jachère est la mise au repos du sol afin de lui permettre de reconstituer naturellement sa fertilité."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L’assolement ou rotation",
          "stepTheme": "L’assolement ou rotation",
          "stepBadge": "L’assolement ou rotation",
          "paragraphText": "• Assolement (ou rotation) : alternance de cultures n’ayant pas les mêmes besoins en éléments minéraux sur un même sol.\nSon but est de conserver la fertilité du sol en retardant son épuisement en éléments minéraux.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p06_q3",
            "type": "mcq",
            "prompt": "L’assolement vise à :",
            "options": [
              "Protéger le sol de l’insolation",
              "Lutter contre l’écoulement rapide des eaux",
              "Retarder l’épuisement du sol en éléments minéraux par l’alternance des cultures",
              "Apporter immédiatement des sels minéraux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’analyse du texte définit l’assolement comme une alternance de cultures aux besoins différents, pour retarder l’épuisement du sol."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le terrassement",
          "stepTheme": "Le terrassement",
          "stepBadge": "Le terrassement",
          "paragraphText": "• Terrassement : aménagement d’un terrain en pente en cultures en terrasse, en forme d’escaliers.\nLa succession de surfaces planes ou peu inclinées permet de lutter contre l’écoulement rapide des eaux.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p06_q4",
            "type": "mcq",
            "prompt": "Le terrassement est particulièrement utile :",
            "options": [
              "Sur les sols acides",
              "Dans les forêts denses",
              "Pour apporter du calcium",
              "Sur les terrains pentus, contre l’écoulement rapide des eaux"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le texte présente le terrassement comme la réalisation de terrasses sur les terrains pentus, contre l’écoulement rapide des eaux."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L’engazonnement ou plantes de couverture",
          "stepTheme": "L’engazonnement ou plantes de couverture",
          "stepBadge": "L’engazonnement ou plantes de couverture",
          "paragraphText": "• Engazonnement : recouvrement du sol par la mise en place d’une plante de couverture.\nElle protège le sol contre l’érosion et reconstitue la faune et la flore de ce sol.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p06_q5",
            "type": "mcq",
            "prompt": "Les plantes de couverture protègent le sol :",
            "options": [
              "Contre l’érosion, en le recouvrant et en reconstituant sa faune et sa flore",
              "En le laissant au repos",
              "En lui apportant de la chaux",
              "En le dissolvant lentement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D’après la leçon, la plante de couverture protège le sol contre l’érosion et reconstitue la faune et la flore de ce sol."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Associer chaque technique à sa description",
          "stepTheme": "Associer chaque technique à sa description",
          "stepBadge": "Associer chaque technique à sa description",
          "paragraphText": "Piège : confondre paillage et jachère, qui protègent tous deux le sol mais différemment.\nL’activité d’application 1 donne les bonnes paires : assolement et alternance des cultures, jachère et mise au repos, paillage et matière végétale morte sur le sol, terrassement et bandes planes en travers d’une pente.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p06_q6",
            "type": "mcq",
            "prompt": "La mise en place de matière végétale morte sur le sol décrit :",
            "options": [
              "L’assolement",
              "Le paillage",
              "La jachère",
              "Le terrassement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé de l’activité d’application 1 associe la matière végétale morte sur le sol au paillage."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Le meilleur rendement du riz avec la légumineuse",
          "stepTheme": "Le meilleur rendement du riz avec la légumineuse",
          "stepBadge": "Le meilleur rendement du riz avec la légumineuse",
          "paragraphText": "Dans la situation d’évaluation, le riz rend 2100 kg par hectare sur la parcelle témoin et 3800 kg par hectare avec l’engrais azoté.\nAvec la légumineuse comme engrais vert, le rendement atteint 5900 kg par hectare, le meilleur des trois.",
          "exercise": {
            "id": "terminale_d_svt_l15_amelioration_protection_sols_p06_q7",
            "type": "mcq",
            "prompt": "Le meilleur rendement de riz est obtenu avec :",
            "options": [
              "La parcelle témoin sans engrais",
              "L’engrais azoté seul",
              "La légumineuse utilisée comme engrais vert",
              "Une dose de 300 kg par hectare d’engrais"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le tableau de la situation d’évaluation donne 5900 kg par hectare avec la légumineuse, contre 3800 avec l’engrais azoté et 2100 pour le témoin."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p06_q1",
          "type": "mcq",
          "prompt": "Le paillage consiste à :",
          "options": [
            "Mettre en place une couverture de matière végétale morte sur le sol",
            "Laisser le sol au repos sans culture",
            "Alterner les cultures sur un même sol",
            "Aménager le terrain en escaliers"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la description du paillage dans l’analyse du texte de la leçon."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p06_q2",
          "type": "mcq",
          "prompt": "La jachère consiste à :",
          "options": [
            "Couvrir le sol de paille",
            "Mettre le sol au repos pour qu’il reconstitue naturellement sa fertilité",
            "Cultiver en terrasses",
            "Planter une légumineuse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Selon la leçon, la jachère est la mise au repos du sol afin de lui permettre de reconstituer naturellement sa fertilité."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p06_q3",
          "type": "mcq",
          "prompt": "L’assolement vise à :",
          "options": [
            "Protéger le sol de l’insolation",
            "Lutter contre l’écoulement rapide des eaux",
            "Retarder l’épuisement du sol en éléments minéraux par l’alternance des cultures",
            "Apporter immédiatement des sels minéraux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’analyse du texte définit l’assolement comme une alternance de cultures aux besoins différents, pour retarder l’épuisement du sol."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p06_q4",
          "type": "mcq",
          "prompt": "Le terrassement est particulièrement utile :",
          "options": [
            "Sur les sols acides",
            "Dans les forêts denses",
            "Pour apporter du calcium",
            "Sur les terrains pentus, contre l’écoulement rapide des eaux"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le texte présente le terrassement comme la réalisation de terrasses sur les terrains pentus, contre l’écoulement rapide des eaux."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p06_q5",
          "type": "mcq",
          "prompt": "Les plantes de couverture protègent le sol :",
          "options": [
            "Contre l’érosion, en le recouvrant et en reconstituant sa faune et sa flore",
            "En le laissant au repos",
            "En lui apportant de la chaux",
            "En le dissolvant lentement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D’après la leçon, la plante de couverture protège le sol contre l’érosion et reconstitue la faune et la flore de ce sol."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p06_q6",
          "type": "mcq",
          "prompt": "La mise en place de matière végétale morte sur le sol décrit :",
          "options": [
            "L’assolement",
            "Le paillage",
            "La jachère",
            "Le terrassement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé de l’activité d’application 1 associe la matière végétale morte sur le sol au paillage."
        },
        {
          "id": "terminale_d_svt_l15_amelioration_protection_sols_p06_q7",
          "type": "mcq",
          "prompt": "Le meilleur rendement de riz est obtenu avec :",
          "options": [
            "La parcelle témoin sans engrais",
            "L’engrais azoté seul",
            "La légumineuse utilisée comme engrais vert",
            "Une dose de 300 kg par hectare d’engrais"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le tableau de la situation d’évaluation donne 5900 kg par hectare avec la légumineuse, contre 3800 avec l’engrais azoté et 2100 pour le témoin."
        }
      ]
    }
  ]
};
