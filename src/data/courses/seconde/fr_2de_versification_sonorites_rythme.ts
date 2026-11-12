import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 11 PL la versification les sonorités.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const FR_2DE_PL_L06B_VERSIFICATION_SONORITES_RYTHME: CurriculumChapter = {
  "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme",
  "subjectId": "francais",
  "gradeLevel": "seconde_a",
  "alsoForGrades": [
    "seconde_c"
  ],
  "order": 15,
  "title": "Perfectionnement de la langue, leçon 6 (suite) : La versification, les rimes, les sonorités et le rythme",
  "summary": "Genre, qualité et disposition des rimes, assonances et allitérations, accents, coupes, enjambement, rejet et contre-rejet.",
  "officialVolumeHours": 2,
  "contentVersion": 2,
  "source": "11 PL la versification les sonorités.pdf",
  "points": [
    {
      "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p01",
      "order": 1,
      "title": "La rime : genre et qualité",
      "summary": "Rimes féminines et masculines ; pauvres, suffisantes, riches.",
      "conceptExplanation": "La rime est le retour d'un ou plusieurs sons identiques à la fin de deux ou plusieurs vers : « idéal / féal ».\n\n1. Le genre de la rime :\n- rime féminine : le vers se termine par un e muet (« repose / déclose », « vie / envie ») ;\n- rime masculine : le vers ne se termine pas par un e muet (« odeur / ardeur », « lit / dit »).\nEn poésie classique, on alterne rimes masculines et féminines.\n\n2. La qualité (ou richesse) de la rime, selon le nombre de sons communs :\n- rime pauvre : un seul son commun, la voyelle finale (« ami / joli » : [i]) ;\n- rime suffisante : deux sons communs (« repose / déclose » : [o] + [z]) ;\n- rime riche : trois sons communs ou plus (« odeur / ardeur » : [d] + [œ] + [ʁ]).\n\nOn compte les sons qu'on entend, pas les lettres : « temps / sang » riment par le seul son [ɑ̃].",
      "keyRule": "Rime féminine : finit par un e muet ; masculine : sans e muet. Pauvre : 1 son commun ; suffisante : 2 ; riche : 3 ou plus. On compte les sons, pas les lettres.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser une rime",
        "statement": "Ronsard fait rimer « odeur » et « ardeur ». Genre et qualité ?",
        "methodSteps": [
          "Pas de e muet final : rime masculine.",
          "Sons communs : [d], [œ], [ʁ], soit trois sons."
        ],
        "conclusion": "C'est une rime masculine et riche."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La rime",
          "stepTheme": "La rime",
          "stepBadge": "La rime",
          "paragraphText": "La rime est le retour d'un ou plusieurs sons identiques à la fin de deux ou plusieurs vers : « idéal / féal ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p01_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une rime ?",
            "options": [
              "La répétition d'un mot en début de vers",
              "Le nombre de syllabes d'un vers",
              "Le retour de sons identiques en fin de vers",
              "Une pause au milieu du vers"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La rime est un écho sonore à la fin des vers."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Rime féminine",
          "stepTheme": "Rime féminine",
          "stepBadge": "Rime féminine",
          "paragraphText": "Une rime féminine se termine par un e muet : « repose / déclose », « vie / envie ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p01_q2",
            "type": "mcq",
            "prompt": "Quelle paire forme une rime féminine ?",
            "options": [
              "« repose / déclose »",
              "« odeur / ardeur »",
              "« lit / dit »",
              "« bleu / pleut »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Repose et déclose finissent par un e muet."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Rime masculine",
          "stepTheme": "Rime masculine",
          "stepBadge": "Rime masculine",
          "paragraphText": "Une rime masculine ne se termine pas par un e muet : « odeur / ardeur », « lit / dit ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p01_q3",
            "type": "mcq",
            "prompt": "Comment appelle-t-on une rime sans e muet final ?",
            "options": [
              "Une rime féminine",
              "Une rime pauvre",
              "Une rime intérieure",
              "Une rime masculine"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le genre de la rime dépend du e muet final."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Rime pauvre",
          "stepTheme": "Rime pauvre",
          "stepBadge": "Rime pauvre",
          "paragraphText": "Une rime pauvre n'a qu'un seul son commun, la voyelle finale : « ami / joli » ([i]).",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p01_q4",
            "type": "mcq",
            "prompt": "« ami / joli » : quelle est la qualité de cette rime ?",
            "options": [
              "Suffisante",
              "Pauvre",
              "Riche",
              "Féminine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un seul son commun : [i]."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Rime suffisante",
          "stepTheme": "Rime suffisante",
          "stepBadge": "Rime suffisante",
          "paragraphText": "Une rime suffisante a deux sons communs : « repose / déclose » ([o] + [z]).",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p01_q5",
            "type": "mcq",
            "prompt": "Combien de sons communs compte une rime suffisante ?",
            "options": [
              "Un",
              "Deux",
              "Trois",
              "Quatre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pauvre 1, suffisante 2, riche 3 ou plus."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Rime riche",
          "stepTheme": "Rime riche",
          "stepBadge": "Rime riche",
          "paragraphText": "« odeur / ardeur » ont trois sons communs : [d], [œ], [ʁ]. C'est une rime riche.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p01_q6",
            "type": "mcq",
            "prompt": "« odeur / ardeur » : quelle est la qualité de cette rime ?",
            "options": [
              "Pauvre",
              "Suffisante",
              "Intérieure",
              "Riche"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Trois sons communs : rime riche."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Les sons, pas les lettres",
          "stepTheme": "Les sons, pas les lettres",
          "stepBadge": "Les sons, pas les lettres",
          "paragraphText": "On compte les sons que l'on entend, pas les lettres écrites.\n« temps / sang » riment sur le seul son [ɑ̃] malgré des lettres différentes.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p01_q7",
            "type": "mcq",
            "prompt": "Pour juger la qualité d'une rime, que compte-t-on ?",
            "options": [
              "Les sons communs entendus",
              "Les lettres communes écrites",
              "Le nombre de mots du vers",
              "Le nombre de vers de la strophe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La rime est un phénomène sonore."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p01_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une rime ?",
          "options": [
            "La répétition d'un mot en début de vers",
            "Le nombre de syllabes d'un vers",
            "Le retour de sons identiques en fin de vers",
            "Une pause au milieu du vers"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La rime est un écho sonore à la fin des vers."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p01_q2",
          "type": "mcq",
          "prompt": "Quelle paire forme une rime féminine ?",
          "options": [
            "« repose / déclose »",
            "« odeur / ardeur »",
            "« lit / dit »",
            "« bleu / pleut »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Repose et déclose finissent par un e muet."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p01_q3",
          "type": "mcq",
          "prompt": "Comment appelle-t-on une rime sans e muet final ?",
          "options": [
            "Une rime féminine",
            "Une rime pauvre",
            "Une rime intérieure",
            "Une rime masculine"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le genre de la rime dépend du e muet final."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p01_q4",
          "type": "mcq",
          "prompt": "« ami / joli » : quelle est la qualité de cette rime ?",
          "options": [
            "Suffisante",
            "Pauvre",
            "Riche",
            "Féminine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un seul son commun : [i]."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p01_q5",
          "type": "mcq",
          "prompt": "Combien de sons communs compte une rime suffisante ?",
          "options": [
            "Un",
            "Deux",
            "Trois",
            "Quatre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pauvre 1, suffisante 2, riche 3 ou plus."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p01_q6",
          "type": "mcq",
          "prompt": "« odeur / ardeur » : quelle est la qualité de cette rime ?",
          "options": [
            "Pauvre",
            "Suffisante",
            "Intérieure",
            "Riche"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Trois sons communs : rime riche."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p01_q7",
          "type": "mcq",
          "prompt": "Pour juger la qualité d'une rime, que compte-t-on ?",
          "options": [
            "Les sons communs entendus",
            "Les lettres communes écrites",
            "Le nombre de mots du vers",
            "Le nombre de vers de la strophe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La rime est un phénomène sonore."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p02",
      "order": 2,
      "title": "La disposition des rimes",
      "summary": "Rimes plates, croisées, embrassées et intérieures.",
      "conceptExplanation": "La disposition des rimes s'écrit avec des lettres : même lettre = même rime.\n\n- Rimes plates (ou suivies) : AABB.\n  « Malgré envie, / Toute ma vie / Je l'aimerai / Et chanterai » (Clément Marot) : vie / vie, aimerai / chanterai.\n- Rimes croisées : ABAB.\n  « Un soldat jeune, bouche ouverte, tête nue, / Et la nuque baignant dans le frais cresson bleu, / Dort ; il est étendu dans l'herbe, sous la nue, / Pâle dans son lit vert où la lumière pleut. » (Rimbaud, « Le Dormeur du val ») : nue / bleu / nue / pleut.\n- Rimes embrassées : ABBA.\n  « Vois-tu ce moine triste / Là tout près de mon lit, / Qui lit ? / Il dit : « Dieu vous assiste ! » » (Musset) : triste / lit / lit / assiste.\n\nLa rime intérieure répète au milieu du vers un son de la rime finale, créant un écho :\n« Elle a tous les ruisseaux dans ses regards d'émail / Elle a tous les oiseaux sur son chapeau de paille » (Aragon) : ruisseaux / oiseaux.",
      "keyRule": "Plates AABB, croisées ABAB, embrassées ABBA. Rime intérieure : écho sonore au milieu du vers.",
      "formulas": [],
      "workedExample": {
        "title": "Noter les rimes",
        "statement": "Ronsard : repose / odeur / ardeur / déclose. Quelle disposition ?",
        "methodSteps": [
          "repose = A ; odeur = B ; ardeur = B ; déclose = A.",
          "Schéma : ABBA."
        ],
        "conclusion": "Ce sont des rimes embrassées."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Rimes plates",
          "stepTheme": "Rimes plates",
          "stepBadge": "Rimes plates",
          "paragraphText": "Les rimes plates (ou suivies) se suivent deux par deux : AABB.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p02_q1",
            "type": "mcq",
            "prompt": "Quel schéma correspond aux rimes plates ?",
            "options": [
              "ABAB",
              "ABBA",
              "AABB",
              "ABCD"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Plates = suivies, deux à deux."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Rimes croisées",
          "stepTheme": "Rimes croisées",
          "stepBadge": "Rimes croisées",
          "paragraphText": "Les rimes croisées alternent : ABAB.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p02_q2",
            "type": "mcq",
            "prompt": "Quel schéma correspond aux rimes croisées ?",
            "options": [
              "AABB",
              "ABBA",
              "AAAA",
              "ABAB"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les rimes se croisent un vers sur deux."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Rimes embrassées",
          "stepTheme": "Rimes embrassées",
          "stepBadge": "Rimes embrassées",
          "paragraphText": "Dans les rimes embrassées, une paire de rimes en entoure une autre : ABBA.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p02_q3",
            "type": "mcq",
            "prompt": "Quel schéma correspond aux rimes embrassées ?",
            "options": [
              "ABAB",
              "AABB",
              "ABBA",
              "ABCA"
            ],
            "correctAnswerIndex": 2,
            "explanation": "A « embrasse » BB."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le Dormeur du val",
          "stepTheme": "Le Dormeur du val",
          "stepBadge": "Le Dormeur du val",
          "paragraphText": "Rimbaud : nue / bleu / nue / pleut.\nnue = A, bleu = B, nue = A, pleut = B.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p02_q4",
            "type": "mcq",
            "prompt": "Dans ce quatrain de Rimbaud (nue / bleu / nue / pleut), quelle est la disposition des rimes ?",
            "options": [
              "Plates",
              "Croisées",
              "Embrassées",
              "Intérieures"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Schéma ABAB."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Musset",
          "stepTheme": "Musset",
          "stepBadge": "Musset",
          "paragraphText": "Musset : triste / lit / lit / assiste.\ntriste = A, lit = B, lit = B, assiste = A.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p02_q5",
            "type": "mcq",
            "prompt": "Dans les vers de Musset (triste / lit / lit / assiste), quelle est la disposition des rimes ?",
            "options": [
              "Embrassées",
              "Croisées",
              "Plates",
              "Sans rimes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Schéma ABBA."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La rime intérieure",
          "stepTheme": "La rime intérieure",
          "stepBadge": "La rime intérieure",
          "paragraphText": "La rime intérieure répète au milieu du vers un son de la rime : « Elle a tous les ruisseaux / dans ses regards d'émail / Elle a tous les oiseaux / sur son chapeau de paille » (Aragon).",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p02_q6",
            "type": "mcq",
            "prompt": "Dans les vers d'Aragon, quels mots forment une rime intérieure ?",
            "options": [
              "« ruisseaux » et « oiseaux »",
              "« émail » et « paille »",
              "« Elle » et « Elle »",
              "« regards » et « chapeau »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ils riment au milieu des vers, non à la fin."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Noter avec des lettres",
          "stepTheme": "Noter avec des lettres",
          "stepBadge": "Noter avec des lettres",
          "paragraphText": "Pour trouver la disposition, donne la lettre A à la première rime, B à la suivante si elle est différente, et ainsi de suite.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p02_q7",
            "type": "mcq",
            "prompt": "vie / vie / aimerai / chanterai : quel schéma obtient-on ?",
            "options": [
              "ABAB",
              "AABB",
              "ABBA",
              "ABCD"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Deux paires qui se suivent : rimes plates."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p02_q1",
          "type": "mcq",
          "prompt": "Quel schéma correspond aux rimes plates ?",
          "options": [
            "ABAB",
            "ABBA",
            "AABB",
            "ABCD"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Plates = suivies, deux à deux."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p02_q2",
          "type": "mcq",
          "prompt": "Quel schéma correspond aux rimes croisées ?",
          "options": [
            "AABB",
            "ABBA",
            "AAAA",
            "ABAB"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les rimes se croisent un vers sur deux."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p02_q3",
          "type": "mcq",
          "prompt": "Quel schéma correspond aux rimes embrassées ?",
          "options": [
            "ABAB",
            "AABB",
            "ABBA",
            "ABCA"
          ],
          "correctAnswerIndex": 2,
          "explanation": "A « embrasse » BB."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p02_q4",
          "type": "mcq",
          "prompt": "Dans ce quatrain de Rimbaud (nue / bleu / nue / pleut), quelle est la disposition des rimes ?",
          "options": [
            "Plates",
            "Croisées",
            "Embrassées",
            "Intérieures"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Schéma ABAB."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p02_q5",
          "type": "mcq",
          "prompt": "Dans les vers de Musset (triste / lit / lit / assiste), quelle est la disposition des rimes ?",
          "options": [
            "Embrassées",
            "Croisées",
            "Plates",
            "Sans rimes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Schéma ABBA."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p02_q6",
          "type": "mcq",
          "prompt": "Dans les vers d'Aragon, quels mots forment une rime intérieure ?",
          "options": [
            "« ruisseaux » et « oiseaux »",
            "« émail » et « paille »",
            "« Elle » et « Elle »",
            "« regards » et « chapeau »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ils riment au milieu des vers, non à la fin."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p02_q7",
          "type": "mcq",
          "prompt": "vie / vie / aimerai / chanterai : quel schéma obtient-on ?",
          "options": [
            "ABAB",
            "AABB",
            "ABBA",
            "ABCD"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Deux paires qui se suivent : rimes plates."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p03",
      "order": 3,
      "title": "Assonance, allitération, hiatus",
      "summary": "La musique des sons dans le vers.",
      "conceptExplanation": "La musicalité d'un poème vient aussi de la répétition de certains sons à l'intérieur des vers.\n\n1. L'assonance est la répétition d'un même son voyelle dans un vers ou d'un vers à l'autre.\nExemple : « Que la pluie est humide et que l'eau mouille et mouille ! » (Raymond Queneau) : répétition des sons [ɥi], [y], [u].\n\n2. L'allitération est la répétition d'un même son consonne.\nExemple : « Pour qui sont ces serpents qui sifflent sur vos têtes ? » (Racine) : allitération en [s] qui imite le sifflement des serpents.\nExemple : « Le moulin à vent vire et vire » : allitération en [v] qui suggère le tournoiement.\n\nCes répétitions créent un effet d'harmonie imitative (le son imite ce dont on parle) ou soulignent un sentiment.\n\n3. Le hiatus est la rencontre de deux voyelles prononcées l'une après l'autre, sans élision : « j'ai eu » ; « il a aimé ». La poésie classique l'évitait, car il produit un heurt sonore.",
      "keyRule": "Assonance : répétition d'un son voyelle. Allitération : répétition d'un son consonne (« ces serpents qui sifflent » : [s]). Hiatus : rencontre de deux voyelles prononcées.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter une allitération",
        "statement": "« Pour qui sont ces serpents qui sifflent sur vos têtes ? » (Racine). Analyse les sons.",
        "methodSteps": [
          "Le son [s] revient : sont, ces, serpents, sifflent, sur.",
          "C'est une allitération en [s].",
          "Elle imite le sifflement des serpents."
        ],
        "conclusion": "L'allitération en [s] rend le vers inquiétant : c'est une harmonie imitative."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'assonance",
          "stepTheme": "L'assonance",
          "stepBadge": "L'assonance",
          "paragraphText": "L'assonance est la répétition d'un même son voyelle dans un vers ou d'un vers à l'autre.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p03_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une assonance ?",
            "options": [
              "La répétition d'un son consonne",
              "La rencontre de deux voyelles",
              "La répétition d'un son voyelle",
              "Une rime en fin de vers"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Assonance : voyelles ; allitération : consonnes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'allitération",
          "stepTheme": "L'allitération",
          "stepBadge": "L'allitération",
          "paragraphText": "L'allitération est la répétition d'un même son consonne dans un vers ou d'un vers à l'autre.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p03_q2",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une allitération ?",
            "options": [
              "La répétition d'un son voyelle",
              "Un vers de douze syllabes",
              "Une pause dans le vers",
              "La répétition d'un son consonne"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On repère les consonnes qui reviennent."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les serpents de Racine",
          "stepTheme": "Les serpents de Racine",
          "stepBadge": "Les serpents de Racine",
          "paragraphText": "« Pour qui sont ces serpents qui sifflent sur vos têtes ? » (Racine).\nLe son [s] revient : sont, ces, serpents, sifflent, sur.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p03_q3",
            "type": "mcq",
            "prompt": "Quelle figure de son trouve-t-on dans « ces serpents qui sifflent sur vos têtes » ?",
            "options": [
              "Une assonance en [a]",
              "Un hiatus",
              "Une allitération en [s]",
              "Une rime intérieure"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La consonne [s] est répétée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'harmonie imitative",
          "stepTheme": "L'harmonie imitative",
          "stepBadge": "L'harmonie imitative",
          "paragraphText": "Quand les sons répétés imitent ce dont on parle, on parle d'harmonie imitative.\nLe [s] de Racine imite le sifflement des serpents.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p03_q4",
            "type": "mcq",
            "prompt": "Que produit l'allitération en [s] dans le vers de Racine ?",
            "options": [
              "Elle adoucit la scène",
              "Elle ralentit le vers",
              "Elle n'a aucun effet",
              "Elle imite le sifflement des serpents"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le son évoque la chose : harmonie imitative."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le moulin",
          "stepTheme": "Le moulin",
          "stepBadge": "Le moulin",
          "paragraphText": "« Le moulin à vent vire et vire. »\nLe son [v] revient : vent, vire, vire. Il suggère le tournoiement des ailes.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p03_q5",
            "type": "mcq",
            "prompt": "Quel son est répété dans « Le moulin à vent vire et vire » ?",
            "options": [
              "Le son [v]",
              "Le son [s]",
              "Le son [m]",
              "Le son [a]"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Allitération en [v]."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le hiatus",
          "stepTheme": "Le hiatus",
          "stepBadge": "Le hiatus",
          "paragraphText": "Le hiatus est la rencontre de deux voyelles prononcées l'une après l'autre, sans élision : « j'ai eu », « il a aimé ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p03_q6",
            "type": "mcq",
            "prompt": "Quel exemple contient un hiatus ?",
            "options": [
              "« la pluie »",
              "« j'ai eu »",
              "« le moulin »",
              "« sous la nue »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les voyelles de « ai » et « eu » se heurtent."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Assonance ou allitération ?",
          "stepTheme": "Assonance ou allitération ?",
          "stepBadge": "Assonance ou allitération ?",
          "paragraphText": "Pour ne pas confondre : allitération = consonne (comme dans « consonne », pense au « l » de « allitération ») ; assonance = voyelle (comme dans « son »).",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p03_q7",
            "type": "mcq",
            "prompt": "« Les sanglots longs des violons » : la répétition du son [ɔ̃] (on) est une :",
            "options": [
              "Allitération",
              "Assonance",
              "Rime riche",
              "Rime pauvre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "[ɔ̃] est un son voyelle : c'est une assonance."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p03_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une assonance ?",
          "options": [
            "La répétition d'un son consonne",
            "La rencontre de deux voyelles",
            "La répétition d'un son voyelle",
            "Une rime en fin de vers"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Assonance : voyelles ; allitération : consonnes."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p03_q2",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une allitération ?",
          "options": [
            "La répétition d'un son voyelle",
            "Un vers de douze syllabes",
            "Une pause dans le vers",
            "La répétition d'un son consonne"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On repère les consonnes qui reviennent."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p03_q3",
          "type": "mcq",
          "prompt": "Quelle figure de son trouve-t-on dans « ces serpents qui sifflent sur vos têtes » ?",
          "options": [
            "Une assonance en [a]",
            "Un hiatus",
            "Une allitération en [s]",
            "Une rime intérieure"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La consonne [s] est répétée."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p03_q4",
          "type": "mcq",
          "prompt": "Que produit l'allitération en [s] dans le vers de Racine ?",
          "options": [
            "Elle adoucit la scène",
            "Elle ralentit le vers",
            "Elle n'a aucun effet",
            "Elle imite le sifflement des serpents"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le son évoque la chose : harmonie imitative."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p03_q5",
          "type": "mcq",
          "prompt": "Quel son est répété dans « Le moulin à vent vire et vire » ?",
          "options": [
            "Le son [v]",
            "Le son [s]",
            "Le son [m]",
            "Le son [a]"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Allitération en [v]."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p03_q6",
          "type": "mcq",
          "prompt": "Quel exemple contient un hiatus ?",
          "options": [
            "« la pluie »",
            "« j'ai eu »",
            "« le moulin »",
            "« sous la nue »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les voyelles de « ai » et « eu » se heurtent."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p03_q7",
          "type": "mcq",
          "prompt": "« Les sanglots longs des violons » : la répétition du son [ɔ̃] (on) est une :",
          "options": [
            "Allitération",
            "Assonance",
            "Rime riche",
            "Rime pauvre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "[ɔ̃] est un son voyelle : c'est une assonance."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p04",
      "order": 4,
      "title": "Le rythme : accents et coupes",
      "summary": "Comment le vers respire.",
      "conceptExplanation": "Le rythme du vers français repose sur les accents et les pauses.\n\n1. L'accent tonique tombe sur la dernière syllabe prononcée (non muette) d'un mot ou d'un groupe de mots : « dans Pa-RIS », « un si-len-ce de NEI-ge ».\n\n2. La coupe est une pause placée après chaque syllabe accentuée. Elle découpe le vers en mesures.\nExemple : « Il se fit / dans Paris // un silence / de neige » (Aragon).\n\n3. La césure est la coupe principale. Dans l'alexandrin classique, elle sépare deux hémistiches de 6 syllabes :\n« Heureux ceux qui sont morts // pour la terre charnelle, / Mais pourvu que ce fût // dans une juste guerre » (Péguy).\n\n4. Les types de rythme :\n- rythme binaire : le vers est coupé en deux parties égales (6/6) ; il donne équilibre et régularité ;\n- rythme ternaire : le vers est coupé en trois parties égales (4/4/4) : « Toujours aimer, / toujours souffrir, / toujours mourir ! » (Corneille). La répétition de « toujours » sur trois mesures égales insiste sur une souffrance sans fin ;\n- rythme accumulatif ou irrégulier : les mesures sont inégales, pour traduire l'agitation ou l'émotion.",
      "keyRule": "Accent tonique : dernière syllabe prononcée du groupe. Coupe : pause après chaque accent. Rythme binaire (6/6) ou ternaire (4/4/4).",
      "formulas": [],
      "workedExample": {
        "title": "Analyser un rythme",
        "statement": "« Toujours aimer, toujours souffrir, toujours mourir ! » (Corneille). Analyse le rythme.",
        "methodSteps": [
          "Trois groupes : tou-jours-ai-mer (4), tou-jours-souf-frir (4), tou-jours-mou-rir (4).",
          "Trois mesures égales : rythme ternaire 4/4/4.",
          "La reprise de « toujours » souligne une souffrance qui ne finit pas."
        ],
        "conclusion": "Rythme ternaire régulier qui martèle la fatalité de l'amour malheureux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'accent tonique",
          "stepTheme": "L'accent tonique",
          "stepBadge": "L'accent tonique",
          "paragraphText": "L'accent tonique tombe sur la dernière syllabe prononcée d'un mot ou d'un groupe de mots : « dans Pa-RIS ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p04_q1",
            "type": "mcq",
            "prompt": "Sur quelle syllabe tombe l'accent tonique en français ?",
            "options": [
              "Sur la dernière syllabe prononcée du groupe",
              "Sur la première syllabe du vers",
              "Sur chaque e muet",
              "Sur la syllabe du milieu du mot"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le français accentue la fin des groupes de mots."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La coupe",
          "stepTheme": "La coupe",
          "stepBadge": "La coupe",
          "paragraphText": "La coupe est une pause placée après chaque syllabe accentuée. Elle découpe le vers en mesures.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p04_q2",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une coupe dans un vers ?",
            "options": [
              "La suppression d'un vers",
              "La rime entre deux vers",
              "Le titre d'un poème",
              "Une pause après une syllabe accentuée"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les coupes donnent sa respiration au vers."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La césure, coupe principale",
          "stepTheme": "La césure, coupe principale",
          "stepBadge": "La césure, coupe principale",
          "paragraphText": "La césure est la coupe la plus importante. Dans l'alexandrin, elle sépare deux hémistiches de 6 syllabes :\n« Heureux ceux qui sont morts // pour la terre charnelle » (Péguy).",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p04_q3",
            "type": "mcq",
            "prompt": "Dans « Heureux ceux qui sont morts // pour la terre charnelle », après quel mot se place la césure ?",
            "options": [
              "Après « Heureux »",
              "Après « terre »",
              "Après « morts »",
              "Après « charnelle »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Heu-reux-ceux-qui-sont-morts : 6 syllabes, puis la césure."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le rythme binaire",
          "stepTheme": "Le rythme binaire",
          "stepBadge": "Le rythme binaire",
          "paragraphText": "Le rythme binaire coupe le vers en deux parties égales (6/6). Il donne une impression d'équilibre.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p04_q4",
            "type": "mcq",
            "prompt": "Quel effet donne un alexandrin au rythme binaire 6/6 ?",
            "options": [
              "L'agitation et le désordre",
              "La surprise brutale",
              "L'équilibre et la régularité",
              "La moquerie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Deux moitiés égales : un vers équilibré."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Corneille",
          "stepTheme": "Corneille",
          "stepBadge": "Corneille",
          "paragraphText": "« Toujours aimer, / toujours souffrir, / toujours mourir ! » (Corneille, Suréna).\nTrois mesures de 4 syllabes : rythme ternaire.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p04_q5",
            "type": "mcq",
            "prompt": "Quel est le rythme de « Toujours aimer, toujours souffrir, toujours mourir ! » ?",
            "options": [
              "Ternaire (4/4/4)",
              "Binaire (6/6)",
              "Irrégulier",
              "Sans rythme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Trois groupes égaux de quatre syllabes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "L'effet du ternaire",
          "stepTheme": "L'effet du ternaire",
          "stepBadge": "L'effet du ternaire",
          "paragraphText": "Dans le vers de Corneille, la reprise de « toujours » sur trois mesures égales martèle une souffrance sans fin.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p04_q6",
            "type": "mcq",
            "prompt": "Que souligne le rythme ternaire de « Toujours aimer, toujours souffrir, toujours mourir » ?",
            "options": [
              "Une joie passagère",
              "Une hésitation du personnage",
              "Une description de paysage",
              "Une souffrance sans fin"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La régularité imite une fatalité qui se répète."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Rythme irrégulier",
          "stepTheme": "Rythme irrégulier",
          "stepBadge": "Rythme irrégulier",
          "paragraphText": "Quand les mesures sont inégales, le rythme est irrégulier : il traduit souvent l'agitation, l'émotion ou le désordre.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p04_q7",
            "type": "mcq",
            "prompt": "Que traduit souvent un rythme aux mesures très inégales ?",
            "options": [
              "Le calme absolu",
              "L'agitation ou l'émotion",
              "La neutralité",
              "La solennité d'une cérémonie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'irrégularité casse l'équilibre du vers."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p04_q1",
          "type": "mcq",
          "prompt": "Sur quelle syllabe tombe l'accent tonique en français ?",
          "options": [
            "Sur la dernière syllabe prononcée du groupe",
            "Sur la première syllabe du vers",
            "Sur chaque e muet",
            "Sur la syllabe du milieu du mot"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le français accentue la fin des groupes de mots."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p04_q2",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une coupe dans un vers ?",
          "options": [
            "La suppression d'un vers",
            "La rime entre deux vers",
            "Le titre d'un poème",
            "Une pause après une syllabe accentuée"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les coupes donnent sa respiration au vers."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p04_q3",
          "type": "mcq",
          "prompt": "Dans « Heureux ceux qui sont morts // pour la terre charnelle », après quel mot se place la césure ?",
          "options": [
            "Après « Heureux »",
            "Après « terre »",
            "Après « morts »",
            "Après « charnelle »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Heu-reux-ceux-qui-sont-morts : 6 syllabes, puis la césure."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p04_q4",
          "type": "mcq",
          "prompt": "Quel effet donne un alexandrin au rythme binaire 6/6 ?",
          "options": [
            "L'agitation et le désordre",
            "La surprise brutale",
            "L'équilibre et la régularité",
            "La moquerie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Deux moitiés égales : un vers équilibré."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p04_q5",
          "type": "mcq",
          "prompt": "Quel est le rythme de « Toujours aimer, toujours souffrir, toujours mourir ! » ?",
          "options": [
            "Ternaire (4/4/4)",
            "Binaire (6/6)",
            "Irrégulier",
            "Sans rythme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Trois groupes égaux de quatre syllabes."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p04_q6",
          "type": "mcq",
          "prompt": "Que souligne le rythme ternaire de « Toujours aimer, toujours souffrir, toujours mourir » ?",
          "options": [
            "Une joie passagère",
            "Une hésitation du personnage",
            "Une description de paysage",
            "Une souffrance sans fin"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La régularité imite une fatalité qui se répète."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p04_q7",
          "type": "mcq",
          "prompt": "Que traduit souvent un rythme aux mesures très inégales ?",
          "options": [
            "Le calme absolu",
            "L'agitation ou l'émotion",
            "La neutralité",
            "La solennité d'une cérémonie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'irrégularité casse l'équilibre du vers."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p05",
      "order": 5,
      "title": "Enjambement, rejet et contre-rejet",
      "summary": "Quand la phrase déborde du vers.",
      "conceptExplanation": "D'habitude, la fin du vers coïncide avec la fin d'un groupe de sens. Parfois, la phrase déborde.\n\n1. L'enjambement : la phrase continue sur le vers suivant, sans pause à la fin du vers. Il accélère le rythme et rapproche le vers de la prose.\nExemple : « vents et soleil sont repartis ce soir dans une gloire / de palmes et de corolles » (Fatho-Amoy) : le groupe « une gloire de palmes et de corolles » est coupé par la fin du vers.\n\n2. Le rejet : un élément court qui appartient au vers précédent est rejeté au début du vers suivant. Il est ainsi mis en relief.\nExemple : « Jubal, père de ceux qui passent dans les bourgs / Soufflant dans des clairons et frappant des tambours, / Cria : « Je saurai bien construire une barrière. » » (Hugo) : le verbe « Cria » est rejeté au début du vers.\n\n3. Le contre-rejet : un élément court placé à la fin d'un vers commence une phrase qui se poursuit au vers suivant.\nExemple : « Un nuage tombé par terre, horrible, accru / Par des vomissements immenses de fumées » (Hugo) : « accru » annonce la suite.\n\nCes procédés mettent un mot en valeur, créent un effet de surprise ou traduisent un mouvement.",
      "keyRule": "Enjambement : la phrase déborde sur le vers suivant. Rejet : élément court rejeté en début du vers suivant. Contre-rejet : élément court en fin de vers qui annonce la suite.",
      "formulas": [],
      "workedExample": {
        "title": "Repérer un rejet",
        "statement": "Hugo : « Soufflant dans des clairons et frappant des tambours, / Cria : … » Où est le rejet ?",
        "methodSteps": [
          "Le sujet « Jubal » est dans les vers précédents.",
          "Son verbe « Cria » est placé seul au début du vers suivant."
        ],
        "conclusion": "« Cria » est un rejet, mis en relief."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'enjambement",
          "stepTheme": "L'enjambement",
          "stepBadge": "L'enjambement",
          "paragraphText": "Il y a enjambement quand la phrase continue sur le vers suivant, sans pause à la fin du vers.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p05_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'un enjambement ?",
            "options": [
              "Une rime répétée au milieu du vers",
              "Une phrase qui continue sur le vers suivant",
              "Une pause au milieu de l'alexandrin",
              "La répétition d'un son voyelle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La phrase « enjambe » la fin du vers."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'effet de l'enjambement",
          "stepTheme": "L'effet de l'enjambement",
          "stepBadge": "L'effet de l'enjambement",
          "paragraphText": "L'enjambement accélère le rythme et rapproche le vers de la prose (il le « prosaïse »).",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p05_q2",
            "type": "mcq",
            "prompt": "Quel effet produit l'enjambement sur le rythme ?",
            "options": [
              "Il le rend parfaitement régulier",
              "Il le ralentit toujours",
              "Il le supprime",
              "Il l'accélère"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Sans pause en fin de vers, la lecture s'enchaîne."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le rejet",
          "stepTheme": "Le rejet",
          "stepBadge": "Le rejet",
          "paragraphText": "Le rejet est un élément court, lié au vers précédent, rejeté au début du vers suivant. Il est mis en relief.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p05_q3",
            "type": "mcq",
            "prompt": "Où se place le rejet ?",
            "options": [
              "Au début du vers suivant",
              "À la fin du même vers",
              "Au milieu de l'hémistiche",
              "Dans le titre du poème"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le mot est « rejeté » au vers suivant."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Cria",
          "stepTheme": "Cria",
          "stepBadge": "Cria",
          "paragraphText": "« Soufflant dans des clairons et frappant des tambours, / Cria : « Je saurai bien construire une barrière. » » (Hugo).\nLe verbe « Cria » est rejeté au début du vers.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p05_q4",
            "type": "mcq",
            "prompt": "« Soufflant dans des clairons et frappant des tambours, / Cria : « Je saurai bien construire une barrière. » » (Hugo). Dans ces vers, quel mot forme le rejet ?",
            "options": [
              "« tambours »",
              "« barrière »",
              "« Cria »",
              "« Soufflant »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le verbe de Jubal est isolé en tête de vers."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le contre-rejet",
          "stepTheme": "Le contre-rejet",
          "stepBadge": "Le contre-rejet",
          "paragraphText": "Le contre-rejet est un élément court placé à la fin d'un vers, qui commence une phrase poursuivie au vers suivant.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p05_q5",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'un contre-rejet ?",
            "options": [
              "Un élément court rejeté en début de vers",
              "Une rime riche",
              "Une répétition de consonnes",
              "Un élément court en fin de vers qui annonce la suite"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est l'inverse du rejet."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Accru",
          "stepTheme": "Accru",
          "stepBadge": "Accru",
          "paragraphText": "« Un nuage tombé par terre, horrible, accru / Par des vomissements immenses de fumées » (Hugo).\n« accru », en fin de vers, annonce « par des vomissements... ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p05_q6",
            "type": "mcq",
            "prompt": "« Un nuage tombé par terre, horrible, accru / Par des vomissements immenses de fumées » (Hugo). Dans ces vers, quel mot forme le contre-rejet ?",
            "options": [
              "« nuage »",
              "« fumées »",
              "« accru »",
              "« horrible »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le mot en fin de vers attend sa suite au vers suivant."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Rejet ou contre-rejet ?",
          "stepTheme": "Rejet ou contre-rejet ?",
          "stepBadge": "Rejet ou contre-rejet ?",
          "paragraphText": "• Rejet : l'élément isolé est au début du vers suivant.\n• Contre-rejet : l'élément isolé est à la fin du vers.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p05_q7",
            "type": "mcq",
            "prompt": "Un mot isolé en fin de vers, dont la suite est au vers suivant, est :",
            "options": [
              "Un rejet",
              "Un contre-rejet",
              "Une césure",
              "Une rime intérieure"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Fin de vers = contre-rejet ; début du vers suivant = rejet."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p05_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un enjambement ?",
          "options": [
            "Une rime répétée au milieu du vers",
            "Une phrase qui continue sur le vers suivant",
            "Une pause au milieu de l'alexandrin",
            "La répétition d'un son voyelle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La phrase « enjambe » la fin du vers."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p05_q2",
          "type": "mcq",
          "prompt": "Quel effet produit l'enjambement sur le rythme ?",
          "options": [
            "Il le rend parfaitement régulier",
            "Il le ralentit toujours",
            "Il le supprime",
            "Il l'accélère"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Sans pause en fin de vers, la lecture s'enchaîne."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p05_q3",
          "type": "mcq",
          "prompt": "Où se place le rejet ?",
          "options": [
            "Au début du vers suivant",
            "À la fin du même vers",
            "Au milieu de l'hémistiche",
            "Dans le titre du poème"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le mot est « rejeté » au vers suivant."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p05_q4",
          "type": "mcq",
          "prompt": "« Soufflant dans des clairons et frappant des tambours, / Cria : « Je saurai bien construire une barrière. » » (Hugo). Dans ces vers, quel mot forme le rejet ?",
          "options": [
            "« tambours »",
            "« barrière »",
            "« Cria »",
            "« Soufflant »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le verbe de Jubal est isolé en tête de vers."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p05_q5",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un contre-rejet ?",
          "options": [
            "Un élément court rejeté en début de vers",
            "Une rime riche",
            "Une répétition de consonnes",
            "Un élément court en fin de vers qui annonce la suite"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est l'inverse du rejet."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p05_q6",
          "type": "mcq",
          "prompt": "« Un nuage tombé par terre, horrible, accru / Par des vomissements immenses de fumées » (Hugo). Dans ces vers, quel mot forme le contre-rejet ?",
          "options": [
            "« nuage »",
            "« fumées »",
            "« accru »",
            "« horrible »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le mot en fin de vers attend sa suite au vers suivant."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p05_q7",
          "type": "mcq",
          "prompt": "Un mot isolé en fin de vers, dont la suite est au vers suivant, est :",
          "options": [
            "Un rejet",
            "Un contre-rejet",
            "Une césure",
            "Une rime intérieure"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Fin de vers = contre-rejet ; début du vers suivant = rejet."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p06",
      "order": 6,
      "title": "Analyser les sonorités d'un poème",
      "summary": "Mettre ensemble rime, sons et rythme.",
      "conceptExplanation": "Pour analyser la versification d'un poème, on étudie :\n1. la mesure (le nombre de syllabes) ;\n2. les rimes : disposition (plates, croisées, embrassées), genre (féminine, masculine), qualité (pauvre, suffisante, riche) ;\n3. les sonorités : assonances, allitérations, hiatus ;\n4. le rythme : coupes, césure, rythme binaire ou ternaire, enjambements, rejets.\n\nPuis on interprète : à quoi servent ces choix ? Ils créent une musique, imitent ce qui est décrit, soulignent un sentiment, mettent un mot en relief.\n\nExemple d'analyse (Ronsard) :\n« La grâce dans sa feuille, et l'amour se repose, / Embaumant les jardins et les arbres d'odeur ; / Mais battue, ou de pluie, ou d'excessive ardeur, / Languissante elle meurt, feuille à feuille déclose. »\n- disposition : ABBA, rimes embrassées ;\n- genre : « repose / déclose » féminines, « odeur / ardeur » masculines ;\n- qualité : « repose / déclose » suffisante ([oz]), « odeur / ardeur » riche ([dœʁ]).",
      "keyRule": "Analyser : mesure, rimes (disposition, genre, qualité), sonorités, rythme. Puis interpréter l'effet.",
      "formulas": [],
      "workedExample": {
        "title": "Une analyse complète",
        "statement": "Analyse les rimes du quatrain de Ronsard (repose / odeur / ardeur / déclose).",
        "methodSteps": [
          "Disposition ABBA : embrassées.",
          "Repose/déclose : féminines, suffisantes. Odeur/ardeur : masculines, riches."
        ],
        "conclusion": "Rimes embrassées, alternant féminines et masculines."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Quatre éléments",
          "stepTheme": "Quatre éléments",
          "stepBadge": "Quatre éléments",
          "paragraphText": "Pour analyser la versification : la mesure, les rimes, les sonorités et le rythme.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p06_q1",
            "type": "mcq",
            "prompt": "Lequel de ces éléments fait partie de l'analyse de la versification ?",
            "options": [
              "Les rimes et leur disposition",
              "La biographie de l'éditeur",
              "Le prix du recueil",
              "Le nombre de pages du livre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On étudie la forme sonore du poème."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La disposition chez Ronsard",
          "stepTheme": "La disposition chez Ronsard",
          "stepBadge": "La disposition chez Ronsard",
          "paragraphText": "Ronsard : repose (A) / odeur (B) / ardeur (B) / déclose (A).",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p06_q2",
            "type": "mcq",
            "prompt": "Quelle est la disposition des rimes dans le quatrain de Ronsard ?",
            "options": [
              "Embrassées (ABBA)",
              "Croisées (ABAB)",
              "Plates (AABB)",
              "Intérieures"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les rimes A entourent les rimes B."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le genre chez Ronsard",
          "stepTheme": "Le genre chez Ronsard",
          "stepBadge": "Le genre chez Ronsard",
          "paragraphText": "« repose / déclose » se terminent par un e muet ; « odeur / ardeur » non.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p06_q3",
            "type": "mcq",
            "prompt": "Quel est le genre de la rime « repose / déclose » ?",
            "options": [
              "Masculine",
              "Féminine",
              "Pauvre",
              "Intérieure"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le e muet final rend la rime féminine."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'alternance",
          "stepTheme": "L'alternance",
          "stepBadge": "L'alternance",
          "paragraphText": "La poésie classique alterne rimes masculines et féminines, comme chez Ronsard.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p06_q4",
            "type": "mcq",
            "prompt": "Que fait la poésie classique avec le genre des rimes ?",
            "options": [
              "Elle n'utilise que des rimes féminines",
              "Elle n'utilise que des rimes masculines",
              "Elle alterne rimes masculines et féminines",
              "Elle supprime toutes les rimes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'alternance crée une musique variée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Interpréter",
          "stepTheme": "Interpréter",
          "stepBadge": "Interpréter",
          "paragraphText": "Après avoir décrit, on interprète : les sons et le rythme créent une musique, imitent ce qui est décrit, soulignent un sentiment.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p06_q5",
            "type": "mcq",
            "prompt": "Que faut-il faire après avoir relevé rimes et sonorités ?",
            "options": [
              "Recopier le poème",
              "Compter les lettres",
              "Changer les rimes",
              "Interpréter leur effet sur le sens"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La forme sert toujours le sens."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un son qui imite",
          "stepTheme": "Un son qui imite",
          "stepBadge": "Un son qui imite",
          "paragraphText": "Dans « Les sanglots longs des violons de l'automne » (Verlaine), l'assonance en [ɔ̃] prolonge le son, comme une plainte musicale.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p06_q6",
            "type": "mcq",
            "prompt": "Quel effet produit l'assonance en [ɔ̃] dans « Les sanglots longs des violons » ?",
            "options": [
              "Elle rend le vers joyeux et rapide",
              "Elle crée un effet comique",
              "Elle imite une plainte longue et musicale",
              "Elle n'a aucun effet"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le son nasal prolongé évoque la mélancolie."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Décrire ne suffit pas",
          "stepTheme": "Décrire ne suffit pas",
          "stepBadge": "Décrire ne suffit pas",
          "paragraphText": "Une analyse qui se contente de nommer les procédés (« rimes embrassées ») sans dire leur effet est incomplète.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p06_q7",
            "type": "mcq",
            "prompt": "Pourquoi l'analyse « Il y a des rimes croisées » est-elle insuffisante ?",
            "options": [
              "Parce que les rimes croisées n'existent pas",
              "Parce qu'il faut compter les mots",
              "Parce qu'il faut citer l'éditeur",
              "Parce qu'elle n'explique pas l'effet produit"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Il faut toujours relier la forme au sens."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p06_q1",
          "type": "mcq",
          "prompt": "Lequel de ces éléments fait partie de l'analyse de la versification ?",
          "options": [
            "Les rimes et leur disposition",
            "La biographie de l'éditeur",
            "Le prix du recueil",
            "Le nombre de pages du livre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On étudie la forme sonore du poème."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p06_q2",
          "type": "mcq",
          "prompt": "Quelle est la disposition des rimes dans le quatrain de Ronsard ?",
          "options": [
            "Embrassées (ABBA)",
            "Croisées (ABAB)",
            "Plates (AABB)",
            "Intérieures"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les rimes A entourent les rimes B."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p06_q3",
          "type": "mcq",
          "prompt": "Quel est le genre de la rime « repose / déclose » ?",
          "options": [
            "Masculine",
            "Féminine",
            "Pauvre",
            "Intérieure"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le e muet final rend la rime féminine."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p06_q4",
          "type": "mcq",
          "prompt": "Que fait la poésie classique avec le genre des rimes ?",
          "options": [
            "Elle n'utilise que des rimes féminines",
            "Elle n'utilise que des rimes masculines",
            "Elle alterne rimes masculines et féminines",
            "Elle supprime toutes les rimes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'alternance crée une musique variée."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p06_q5",
          "type": "mcq",
          "prompt": "Que faut-il faire après avoir relevé rimes et sonorités ?",
          "options": [
            "Recopier le poème",
            "Compter les lettres",
            "Changer les rimes",
            "Interpréter leur effet sur le sens"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La forme sert toujours le sens."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p06_q6",
          "type": "mcq",
          "prompt": "Quel effet produit l'assonance en [ɔ̃] dans « Les sanglots longs des violons » ?",
          "options": [
            "Elle rend le vers joyeux et rapide",
            "Elle crée un effet comique",
            "Elle imite une plainte longue et musicale",
            "Elle n'a aucun effet"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le son nasal prolongé évoque la mélancolie."
        },
        {
          "id": "seconde_a_francais_pl_l06b_versification_sonorites_rythme_p06_q7",
          "type": "mcq",
          "prompt": "Pourquoi l'analyse « Il y a des rimes croisées » est-elle insuffisante ?",
          "options": [
            "Parce que les rimes croisées n'existent pas",
            "Parce qu'il faut compter les mots",
            "Parce qu'il faut citer l'éditeur",
            "Parce qu'elle n'explique pas l'effet produit"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Il faut toujours relier la forme au sens."
        }
      ]
    }
  ]
};
