import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir des PDF officiels « 1ere_Perfec_langue » S5 et S6 (les tonalités littéraires). Toutes les Premières.
// Fichier généré (scratchpad build_1re_fr_tonalites.mjs) : modifier le générateur plutôt que ce fichier.
export const FR_1RE_PL_L02_TONALITES: CurriculumChapter = {
  "id": "premiere_a1_francais_pl_l02_tonalites",
  "subjectId": "francais",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 5,
  "title": "Perfectionnement de la langue : les tonalités littéraires",
  "summary": "Identifier, analyser et utiliser les tonalités tragique, pathétique, lyrique et épique, puis dégager la tonalité dominante d’un texte (leçon 2, séances 1 et 2).",
  "officialVolumeHours": 2,
  "contentVersion": 2,
  "source": "1ere_Perfec_langue S5 et S6 « Tonalités littéraires » 1 et 2 (École numérique)",
  "points": [
    {
      "id": "premiere_a1_francais_pl_l02_tonalites_p01",
      "order": 1,
      "title": "La tonalité tragique",
      "summary": "Reconnaître le tragique : un destin sans issue, des forces implacables, l’effroi et la pitié.",
      "conceptExplanation": "Situation : des élèves de Première veulent renforcer leurs acquis en lecture et en production de textes. À partir d’un extrait du Dernier Jour d’un condamné de Victor Hugo (1829), ils s’exercent à identifier, analyser et utiliser les tonalités littéraires.\n- Une tonalité (ou registre) : c’est l’effet qu’un texte cherche à produire sur le lecteur (peur, pitié, admiration, rire…), créé par des procédés d’écriture repérables.\n- La tonalité tragique : elle naît de la conviction qu’il n’y a plus d’issue. Elle montre la marche inéluctable d’un destin fatal qui voue l’homme à la souffrance ou à la mort. Des forces implacables (passion, loi, politique, société, dieux) écrasent un héros souvent solitaire.\n- Ses indices : un langage souvent soutenu ; les champs lexicaux de la mort et de la fatalité (« mon testament », « ma mort », « dernier moment », « elle mourra ») ; des forces implacables (« Je suis condamné », « J’admets que je sois justement puni ») ; un héros qui affronte son sort avec dignité.\n- Ses procédés : comparaison (« elle est comme morte »), répétition et énumération (« Je laisse une mère, je laisse une femme, je laisse un enfant »), exclamations, oppositions, interjections.\n- Sa fonction : provoquer chez le lecteur l’effroi (la terreur) et la pitié.\n- Corrections du document : on écrit « la destinée humaine » (et non « la destiné ») ; le titre de l’œuvre est Le Dernier Jour d’un condamné.",
      "keyRule": "Tragique = destin inéluctable + forces implacables + mort ; il provoque l’effroi et la pitié.",
      "formulas": [],
      "workedExample": {
        "title": "Repérer le tragique dans Le Dernier Jour d’un condamné",
        "statement": "Relevez dans l’extrait de Victor Hugo deux indices de la tonalité tragique.",
        "methodSteps": [
          "Champ lexical de la mort : « mon testament », « ma mort », « dernier moment », « elle mourra ».",
          "Force implacable d’ordre juridique : « Je suis condamné », « J’admets que je sois justement puni » : la loi a fixé un sort auquel le narrateur ne peut échapper."
        ],
        "conclusion": "La mort annoncée et inévitable du narrateur donne au texte sa tonalité tragique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Tonalité",
          "stepTheme": "Définition",
          "stepTitle": "Qu’est-ce qu’une tonalité ?",
          "paragraphText": "Une **tonalité** (ou **registre**) est l’**effet** qu’un texte cherche à produire sur le lecteur : peur, pitié, admiration, rire… On la reconnaît grâce à des **procédés d’écriture** repérables.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p01_q1",
            "type": "mcq",
            "prompt": "En littérature, qu’appelle-t-on la tonalité (ou le registre) d’un texte ?",
            "options": [
              "L’effet que le texte cherche à produire sur le lecteur",
              "Le nombre de syllabes de ses vers",
              "Le genre du texte : roman, poème ou théâtre",
              "La biographie de son auteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La tonalité est liée à l’émotion visée chez le lecteur."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les quatre tonalités de la leçon",
            "caption": "On reconnaît une tonalité à l’effet produit sur le lecteur et aux procédés qui le créent.",
            "tableData": {
              "headers": [
                "Tonalité",
                "Effet sur le lecteur",
                "Procédés caractéristiques"
              ],
              "rows": [
                [
                  "Tragique",
                  "Effroi et pitié devant un destin sans issue",
                  "Champs lexicaux de la mort et de la fatalité, forces implacables, langage soutenu"
                ],
                [
                  "Pathétique",
                  "Compassion, attendrissement, parfois les larmes",
                  "Lexique de l’affectivité et de la souffrance, exclamations, questions, répétitions"
                ],
                [
                  "Lyrique",
                  "Partage des sentiments intimes du locuteur",
                  "Première personne, lexique des sentiments, ponctuation forte, musicalité"
                ],
                [
                  "Épique",
                  "Admiration pour un héros hors du commun",
                  "Hyperboles, comparaisons, accumulations, pluriels, merveilleux"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Tragique",
          "stepTheme": "Pas d’issue",
          "stepTitle": "La tonalité tragique",
          "paragraphText": "La tonalité **tragique** naît de la conviction qu’il **n’y a plus d’issue** : un **destin fatal**, des **forces implacables** vouent le héros à la souffrance ou à la **mort**.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p01_q2",
            "type": "mcq",
            "prompt": "Quelle idée est au cœur de la tonalité tragique ?",
            "options": [
              "Un destin inéluctable auquel le héros ne peut échapper",
              "Un héros qui triomphe de tous ses ennemis",
              "Une situation ridicule qui fait rire",
              "La description paisible d’un paysage"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le tragique, c’est l’absence d’issue face à la fatalité."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Champ lexical",
          "stepTheme": "Hugo",
          "stepTitle": "Le champ lexical de la mort",
          "paragraphText": "Dans l’extrait de Hugo, « mon **testament** », « ma **mort** », « **dernier** moment », « elle **mourra** » forment le **champ lexical de la mort**, indice du tragique.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p01_q3",
            "type": "mcq",
            "prompt": "Dans Le Dernier Jour d’un condamné (Victor Hugo, 1829), un condamné à mort écrit son journal avant son exécution : « Je viens de faire mon testament. À quoi bon ? […] La guillotine, c’est fort cher. Je laisse une mère, je laisse une femme, je laisse un enfant. […] J’admets que je sois justement puni ; ces innocentes, qu’ont-elles fait ? N’importe ; on les déshonore, on les ruine. C’est la justice. […] Mais ma fille, mon enfant, ma pauvre petite Marie, qui rit, qui joue, qui chante à cette heure et ne pense à rien, c’est celle-là qui me fait mal ! » Quels mots appartiennent au champ lexical de la mort ?",
            "options": [
              "« testament », « ma mort », « dernier moment »",
              "« rit », « joue », « chante »",
              "« douce », « rose », « frêle »",
              "« fort cher », « frais »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Testament, mort, dernier moment : le narrateur parle de sa fin prochaine."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Forces implacables",
          "stepTheme": "La loi",
          "stepTitle": "Une force implacable : la justice",
          "paragraphText": "« Je suis **condamné** », « J’admets que je sois justement **puni** » : la **loi** est une force implacable d’ordre **juridique**. Le narrateur ne peut plus échapper à la guillotine.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p01_q4",
            "type": "mcq",
            "prompt": "Dans Le Dernier Jour d’un condamné (Victor Hugo, 1829), un condamné à mort écrit son journal avant son exécution : « Je viens de faire mon testament. À quoi bon ? […] La guillotine, c’est fort cher. Je laisse une mère, je laisse une femme, je laisse un enfant. […] J’admets que je sois justement puni ; ces innocentes, qu’ont-elles fait ? N’importe ; on les déshonore, on les ruine. C’est la justice. […] Mais ma fille, mon enfant, ma pauvre petite Marie, qui rit, qui joue, qui chante à cette heure et ne pense à rien, c’est celle-là qui me fait mal ! » Quelle force implacable écrase le narrateur ?",
            "options": [
              "La justice, qui l’a condamné à mort",
              "Les dieux de l’Olympe",
              "Une maladie incurable",
              "Un ennemi dans une bataille"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La condamnation à mort est une force juridique contre laquelle il ne peut rien."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Procédés",
          "stepTheme": "Répétition",
          "stepTitle": "Répétition et énumération",
          "paragraphText": "« **Je laisse** une mère, **je laisse** une femme, **je laisse** un enfant » : la **répétition** de « je laisse » et l’**énumération** des proches insistent sur tout ce que la mort va détruire.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p01_q5",
            "type": "mcq",
            "prompt": "Dans la phrase de Victor Hugo « Je laisse une mère, je laisse une femme, je laisse un enfant », quel procédé repère-t-on ?",
            "options": [
              "Une répétition et une énumération",
              "Une métaphore filée",
              "Une hyperbole épique",
              "Une rime embrassée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Je laisse » est repris trois fois devant trois proches."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Fonction",
          "stepTheme": "Effroi et pitié",
          "stepTitle": "L’effet du tragique sur le lecteur",
          "paragraphText": "La tonalité tragique vise à provoquer chez le lecteur l’**effroi** (la terreur) et la **pitié** devant un être humain écrasé par son destin.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p01_q6",
            "type": "mcq",
            "prompt": "Quels sentiments la tonalité tragique cherche-t-elle à provoquer chez le lecteur ?",
            "options": [
              "L’effroi et la pitié",
              "Le rire et la moquerie",
              "L’admiration pour un exploit",
              "L’indifférence"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Terreur et pitié sont les deux émotions du tragique."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Tragique ou pathétique ?",
          "stepTheme": "Bien distinguer",
          "stepTitle": "Ne pas confondre tragique et pathétique",
          "paragraphText": "Le **tragique** insiste sur la **fatalité** (aucune issue possible) ; le **pathétique** insiste sur la **souffrance** qui touche le lecteur. Un même texte peut mêler les deux, comme l’extrait de Hugo.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p01_q7",
            "type": "mcq",
            "prompt": "Qu’est-ce qui distingue d’abord la tonalité tragique de la tonalité pathétique ?",
            "options": [
              "Le tragique met l’accent sur la fatalité sans issue, le pathétique sur la souffrance qui émeut",
              "Le tragique fait rire, le pathétique fait peur",
              "Le tragique n’existe qu’en poésie",
              "Il n’y a aucune différence entre elles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Fatalité pour le tragique, émotion devant la souffrance pour le pathétique."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p01_q1",
          "type": "mcq",
          "prompt": "En littérature, qu’appelle-t-on la tonalité (ou le registre) d’un texte ?",
          "options": [
            "L’effet que le texte cherche à produire sur le lecteur",
            "Le nombre de syllabes de ses vers",
            "Le genre du texte : roman, poème ou théâtre",
            "La biographie de son auteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La tonalité est liée à l’émotion visée chez le lecteur."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p01_q2",
          "type": "mcq",
          "prompt": "Quelle idée est au cœur de la tonalité tragique ?",
          "options": [
            "Un destin inéluctable auquel le héros ne peut échapper",
            "Un héros qui triomphe de tous ses ennemis",
            "Une situation ridicule qui fait rire",
            "La description paisible d’un paysage"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le tragique, c’est l’absence d’issue face à la fatalité."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p01_q3",
          "type": "mcq",
          "prompt": "Dans Le Dernier Jour d’un condamné (Victor Hugo, 1829), un condamné à mort écrit son journal avant son exécution : « Je viens de faire mon testament. À quoi bon ? […] La guillotine, c’est fort cher. Je laisse une mère, je laisse une femme, je laisse un enfant. […] J’admets que je sois justement puni ; ces innocentes, qu’ont-elles fait ? N’importe ; on les déshonore, on les ruine. C’est la justice. […] Mais ma fille, mon enfant, ma pauvre petite Marie, qui rit, qui joue, qui chante à cette heure et ne pense à rien, c’est celle-là qui me fait mal ! » Quels mots appartiennent au champ lexical de la mort ?",
          "options": [
            "« testament », « ma mort », « dernier moment »",
            "« rit », « joue », « chante »",
            "« douce », « rose », « frêle »",
            "« fort cher », « frais »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Testament, mort, dernier moment : le narrateur parle de sa fin prochaine."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p01_q4",
          "type": "mcq",
          "prompt": "Dans Le Dernier Jour d’un condamné (Victor Hugo, 1829), un condamné à mort écrit son journal avant son exécution : « Je viens de faire mon testament. À quoi bon ? […] La guillotine, c’est fort cher. Je laisse une mère, je laisse une femme, je laisse un enfant. […] J’admets que je sois justement puni ; ces innocentes, qu’ont-elles fait ? N’importe ; on les déshonore, on les ruine. C’est la justice. […] Mais ma fille, mon enfant, ma pauvre petite Marie, qui rit, qui joue, qui chante à cette heure et ne pense à rien, c’est celle-là qui me fait mal ! » Quelle force implacable écrase le narrateur ?",
          "options": [
            "La justice, qui l’a condamné à mort",
            "Les dieux de l’Olympe",
            "Une maladie incurable",
            "Un ennemi dans une bataille"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La condamnation à mort est une force juridique contre laquelle il ne peut rien."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p01_q5",
          "type": "mcq",
          "prompt": "Dans la phrase de Victor Hugo « Je laisse une mère, je laisse une femme, je laisse un enfant », quel procédé repère-t-on ?",
          "options": [
            "Une répétition et une énumération",
            "Une métaphore filée",
            "Une hyperbole épique",
            "Une rime embrassée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Je laisse » est repris trois fois devant trois proches."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p01_q6",
          "type": "mcq",
          "prompt": "Quels sentiments la tonalité tragique cherche-t-elle à provoquer chez le lecteur ?",
          "options": [
            "L’effroi et la pitié",
            "Le rire et la moquerie",
            "L’admiration pour un exploit",
            "L’indifférence"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Terreur et pitié sont les deux émotions du tragique."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p01_q7",
          "type": "mcq",
          "prompt": "Qu’est-ce qui distingue d’abord la tonalité tragique de la tonalité pathétique ?",
          "options": [
            "Le tragique met l’accent sur la fatalité sans issue, le pathétique sur la souffrance qui émeut",
            "Le tragique fait rire, le pathétique fait peur",
            "Le tragique n’existe qu’en poésie",
            "Il n’y a aucune différence entre elles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Fatalité pour le tragique, émotion devant la souffrance pour le pathétique."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l02_tonalites_p02",
      "order": 2,
      "title": "La tonalité pathétique",
      "summary": "Reconnaître le pathétique : la souffrance d’un être qui suscite la compassion et la pitié.",
      "conceptExplanation": "- La tonalité pathétique : elle cherche à émouvoir, parfois jusqu’aux larmes ; elle suscite la compassion et la pitié du lecteur pour celui qui souffre.\n- Ses indices : le lexique de l’affectivité (« une petite fille », « ma fille, mon enfant, ma pauvre petite Marie ») ; le lexique de la souffrance et de la douleur (« c’est celle-là qui me fait mal ! ») ; les exclamations ; les questions (« À quoi bon ? », « qu’ont-elles fait ? »).\n- Ses procédés à forte charge émotive : comparaison (« elle est comme morte ») ; accumulation d’adjectifs (« douce, rose, frêle ») ; anaphores et répétitions (« trois femmes, sans fils, sans mari, sans père ; trois orphelines […] ; trois veuves ») ; phrases négatives (« sans fils, sans mari, sans père ») ; tournures emphatiques (« c’est celle-là qui me fait mal ! ») ; phrases longues et complexes.\n- Sa fonction : provoquer chez le lecteur la compassion et la pitié.\n- Corrections du document : « Une petite fille de trois ans, douce, rose, frêle » n’est pas une métaphore (aucune image ne remplace la fillette) : c’est une accumulation d’adjectifs qui la rend fragile et attendrissante. « La guillotine, c’est fort cher » relève plutôt de l’ironie amère que du lexique de la souffrance.",
      "keyRule": "Pathétique = souffrance + lexique de l’affectivité + exclamations et questions ; il provoque la compassion et la pitié.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser la dernière phrase de l’extrait",
        "statement": "« Mais ma fille, mon enfant, ma pauvre petite Marie, qui rit, qui joue, qui chante à cette heure et ne pense à rien, c’est celle-là qui me fait mal ! » (Victor Hugo). Montrez qu’elle est pathétique.",
        "methodSteps": [
          "Lexique de l’affectivité : « ma fille, mon enfant, ma pauvre petite Marie » (gradation affectueuse, possessifs).",
          "Contraste : l’enfant insouciante « qui rit, qui joue, qui chante » ignore le malheur qui l’attend.",
          "Tournure emphatique et exclamation : « c’est celle-là qui me fait mal ! »."
        ],
        "conclusion": "La souffrance du père à la pensée de sa fille émeut le lecteur : la phrase est pathétique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Pathétique",
          "stepTheme": "Émouvoir",
          "stepTitle": "La tonalité pathétique",
          "paragraphText": "La tonalité **pathétique** cherche à **émouvoir**, parfois jusqu’aux larmes : elle suscite la **compassion** et la **pitié** pour celui qui **souffre**.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p02_q1",
            "type": "mcq",
            "prompt": "Quel est le but de la tonalité pathétique ?",
            "options": [
              "Susciter la compassion et la pitié pour celui qui souffre",
              "Faire admirer un héros invincible",
              "Faire rire le lecteur",
              "Donner des informations scientifiques"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le pathétique émeut par le spectacle de la souffrance."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Affectivité",
          "stepTheme": "Hugo",
          "stepTitle": "Le lexique de l’affectivité",
          "paragraphText": "« Ma fille, mon enfant, ma pauvre petite Marie » : les **possessifs** et les mots tendres (« pauvre », « petite ») forment le **lexique de l’affectivité**.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p02_q2",
            "type": "mcq",
            "prompt": "Dans Le Dernier Jour d’un condamné (Victor Hugo, 1829), un condamné à mort écrit son journal avant son exécution : « Je viens de faire mon testament. À quoi bon ? […] La guillotine, c’est fort cher. Je laisse une mère, je laisse une femme, je laisse un enfant. […] J’admets que je sois justement puni ; ces innocentes, qu’ont-elles fait ? N’importe ; on les déshonore, on les ruine. C’est la justice. […] Mais ma fille, mon enfant, ma pauvre petite Marie, qui rit, qui joue, qui chante à cette heure et ne pense à rien, c’est celle-là qui me fait mal ! » Quelle expression relève du lexique de l’affectivité ?",
            "options": [
              "« ma pauvre petite Marie »",
              "« Je viens de faire mon testament »",
              "« C’est la justice »",
              "« La guillotine, c’est fort cher »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Possessif + « pauvre » + « petite » : tendresse du père."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Questions",
          "stepTheme": "Ponctuation",
          "stepTitle": "Questions et exclamations",
          "paragraphText": "« À quoi bon ? », « ces innocentes, qu’ont-elles fait ? » : ces **questions** sans réponse et l’**exclamation** finale traduisent le désarroi du narrateur.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p02_q3",
            "type": "mcq",
            "prompt": "Dans Le Dernier Jour d’un condamné (Victor Hugo, 1829), un condamné à mort écrit son journal avant son exécution : « Je viens de faire mon testament. À quoi bon ? […] La guillotine, c’est fort cher. Je laisse une mère, je laisse une femme, je laisse un enfant. […] J’admets que je sois justement puni ; ces innocentes, qu’ont-elles fait ? N’importe ; on les déshonore, on les ruine. C’est la justice. […] Mais ma fille, mon enfant, ma pauvre petite Marie, qui rit, qui joue, qui chante à cette heure et ne pense à rien, c’est celle-là qui me fait mal ! » Quelle phrase est une question qui traduit le désarroi du narrateur ?",
            "options": [
              "« ces innocentes, qu’ont-elles fait ? »",
              "« Je laisse une mère »",
              "« C’est la justice. »",
              "« Je viens de faire mon testament. »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La question souligne l’injustice subie par sa famille innocente."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Métaphore ?",
          "stepTheme": "Correction",
          "stepTitle": "« Douce, rose, frêle » n’est pas une métaphore",
          "paragraphText": "Le document présente « une petite fille de trois ans, **douce, rose, frêle** » comme une métaphore. C’est faux : aucune image ne remplace la fillette. C’est une **accumulation d’adjectifs** qui la rend **fragile et attendrissante**.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p02_q4",
            "type": "mcq",
            "prompt": "Dans la phrase « Une petite fille de trois ans, douce, rose, frêle, avec de grands yeux noirs » (Victor Hugo), quel procédé est employé ?",
            "options": [
              "Une accumulation d’adjectifs",
              "Une métaphore",
              "Une hyperbole",
              "Une personnification"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Trois adjectifs à la suite décrivent l’enfant : c’est une accumulation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Anaphore",
          "stepTheme": "Trois femmes",
          "stepTitle": "Répétitions et phrases négatives",
          "paragraphText": "« **trois** femmes, **sans** fils, **sans** mari, **sans** père ; **trois** orphelines […] ; **trois** veuves » : les **anaphores** de « trois » et de « sans » insistent sur le manque et le malheur qui frappera les trois femmes.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p02_q5",
            "type": "mcq",
            "prompt": "Dans « trois femmes, sans fils, sans mari, sans père ; trois orphelines de différente espèce ; trois veuves du fait de la loi » (Victor Hugo), quel effet produit la répétition de « sans » ?",
            "options": [
              "Elle insiste sur tout ce que les trois femmes vont perdre",
              "Elle crée un effet comique",
              "Elle décrit un paysage",
              "Elle n’a aucun effet"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Sans » répété martèle le vide laissé par la mort du narrateur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Emphase",
          "stepTheme": "Mise en relief",
          "stepTitle": "La tournure emphatique",
          "paragraphText": "« **C’est celle-là qui** me fait mal ! » : la tournure **emphatique** « c’est… qui » met la fille en relief. Elle est la plus grande douleur du père.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p02_q6",
            "type": "mcq",
            "prompt": "Dans la phrase « Mais ma fille, […] c’est celle-là qui me fait mal ! » (Victor Hugo), comment s’appelle la tournure « c’est celle-là qui » ?",
            "options": [
              "Une tournure emphatique (mise en relief)",
              "Une phrase négative",
              "Une question rhétorique",
              "Une métaphore"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« C’est … qui » isole et souligne un élément de la phrase."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Ironie",
          "stepTheme": "Bien lire",
          "stepTitle": "« La guillotine, c’est fort cher »",
          "paragraphText": "« La guillotine, c’est **fort cher** » : le narrateur parle de sa propre exécution comme d’une dépense. C’est une **ironie amère** : le ton détaché rend la situation encore plus cruelle, plus que du simple lexique de la souffrance.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p02_q7",
            "type": "mcq",
            "prompt": "Le condamné de Victor Hugo écrit : « Je suis condamné aux frais […]. La guillotine, c’est fort cher. » Quel ton prend-il ici ?",
            "options": [
              "Une ironie amère sur sa propre exécution",
              "Un enthousiasme sincère",
              "Une admiration pour la guillotine",
              "Un ton épique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il réduit sa mort à une question d’argent : l’ironie est grinçante."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p02_q1",
          "type": "mcq",
          "prompt": "Quel est le but de la tonalité pathétique ?",
          "options": [
            "Susciter la compassion et la pitié pour celui qui souffre",
            "Faire admirer un héros invincible",
            "Faire rire le lecteur",
            "Donner des informations scientifiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le pathétique émeut par le spectacle de la souffrance."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p02_q2",
          "type": "mcq",
          "prompt": "Dans Le Dernier Jour d’un condamné (Victor Hugo, 1829), un condamné à mort écrit son journal avant son exécution : « Je viens de faire mon testament. À quoi bon ? […] La guillotine, c’est fort cher. Je laisse une mère, je laisse une femme, je laisse un enfant. […] J’admets que je sois justement puni ; ces innocentes, qu’ont-elles fait ? N’importe ; on les déshonore, on les ruine. C’est la justice. […] Mais ma fille, mon enfant, ma pauvre petite Marie, qui rit, qui joue, qui chante à cette heure et ne pense à rien, c’est celle-là qui me fait mal ! » Quelle expression relève du lexique de l’affectivité ?",
          "options": [
            "« ma pauvre petite Marie »",
            "« Je viens de faire mon testament »",
            "« C’est la justice »",
            "« La guillotine, c’est fort cher »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Possessif + « pauvre » + « petite » : tendresse du père."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p02_q3",
          "type": "mcq",
          "prompt": "Dans Le Dernier Jour d’un condamné (Victor Hugo, 1829), un condamné à mort écrit son journal avant son exécution : « Je viens de faire mon testament. À quoi bon ? […] La guillotine, c’est fort cher. Je laisse une mère, je laisse une femme, je laisse un enfant. […] J’admets que je sois justement puni ; ces innocentes, qu’ont-elles fait ? N’importe ; on les déshonore, on les ruine. C’est la justice. […] Mais ma fille, mon enfant, ma pauvre petite Marie, qui rit, qui joue, qui chante à cette heure et ne pense à rien, c’est celle-là qui me fait mal ! » Quelle phrase est une question qui traduit le désarroi du narrateur ?",
          "options": [
            "« ces innocentes, qu’ont-elles fait ? »",
            "« Je laisse une mère »",
            "« C’est la justice. »",
            "« Je viens de faire mon testament. »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La question souligne l’injustice subie par sa famille innocente."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p02_q4",
          "type": "mcq",
          "prompt": "Dans la phrase « Une petite fille de trois ans, douce, rose, frêle, avec de grands yeux noirs » (Victor Hugo), quel procédé est employé ?",
          "options": [
            "Une accumulation d’adjectifs",
            "Une métaphore",
            "Une hyperbole",
            "Une personnification"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Trois adjectifs à la suite décrivent l’enfant : c’est une accumulation."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p02_q5",
          "type": "mcq",
          "prompt": "Dans « trois femmes, sans fils, sans mari, sans père ; trois orphelines de différente espèce ; trois veuves du fait de la loi » (Victor Hugo), quel effet produit la répétition de « sans » ?",
          "options": [
            "Elle insiste sur tout ce que les trois femmes vont perdre",
            "Elle crée un effet comique",
            "Elle décrit un paysage",
            "Elle n’a aucun effet"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Sans » répété martèle le vide laissé par la mort du narrateur."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p02_q6",
          "type": "mcq",
          "prompt": "Dans la phrase « Mais ma fille, […] c’est celle-là qui me fait mal ! » (Victor Hugo), comment s’appelle la tournure « c’est celle-là qui » ?",
          "options": [
            "Une tournure emphatique (mise en relief)",
            "Une phrase négative",
            "Une question rhétorique",
            "Une métaphore"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« C’est … qui » isole et souligne un élément de la phrase."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p02_q7",
          "type": "mcq",
          "prompt": "Le condamné de Victor Hugo écrit : « Je suis condamné aux frais […]. La guillotine, c’est fort cher. » Quel ton prend-il ici ?",
          "options": [
            "Une ironie amère sur sa propre exécution",
            "Un enthousiasme sincère",
            "Une admiration pour la guillotine",
            "Un ton épique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il réduit sa mort à une question d’argent : l’ironie est grinçante."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l02_tonalites_p03",
      "order": 3,
      "title": "La tonalité lyrique",
      "summary": "Reconnaître le lyrisme : l’expression des sentiments personnels du locuteur.",
      "conceptExplanation": "- La tonalité lyrique : elle traduit les sentiments et les émotions du locuteur (trouble, passion, mélancolie, regret, tristesse, douleur, joie), à travers les thèmes de l’amour, de la vie, de la nature, de la solitude, de la fuite du temps et de la mort.\n- Ses marques : le lexique de l’affectivité et des sentiments ; l’énonciation à la première personne (je, me, mon), souvent adressée à un « tu » ; la ponctuation forte (exclamations, interrogations) ; les figures de style (apostrophe, anaphore, comparaison) ; la musicalité (rythme, rimes, sonorités).\n- Exemple : « Demain, dès l’aube » (Victor Hugo, Les Contemplations, 1856). Le poète s’adresse à sa fille Léopoldine, morte noyée en 1843. Le dernier vers révèle qu’il se rend sur sa tombe.\n- Le lyrisme peut se mêler au pathétique quand la douleur exprimée émeut le lecteur : on parle alors de lyrisme élégiaque.\n- Corrections du document : le premier vers se termine par une virgule (« Demain, dès l’aube, à l’heure où blanchit la campagne, / Je partirai »), car la phrase continue au vers suivant ; le titre s’écrit Les Contemplations ; « Aujourd’hui » est la seconde partie du recueil (le poème est dans le livre IV, « Pauca meae ») ; Hugo écrit « descendant vers Harfleur ».",
      "keyRule": "Lyrique = « je » qui exprime ses sentiments + lexique affectif + ponctuation forte + musicalité.",
      "formulas": [],
      "workedExample": {
        "title": "Montrer le lyrisme de « Demain, dès l’aube »",
        "statement": "« Demain, dès l’aube, à l’heure où blanchit la campagne, / Je partirai. Vois-tu, je sais que tu m’attends. / J’irai par la forêt, j’irai par la montagne. / Je ne puis demeurer loin de toi plus longtemps. […] Et quand j’arriverai, je mettrai sur ta tombe / Un bouquet de houx vert et de bruyère en fleur. » (Victor Hugo, Les Contemplations) Relevez trois marques du lyrisme.",
        "methodSteps": [
          "Énonciation : « je » (« Je partirai », « J’irai ») s’adresse à « tu » (« Vois-tu, je sais que tu m’attends »).",
          "Sentiments : la tristesse (« Triste, et le jour pour moi sera comme la nuit »), le manque (« Je ne puis demeurer loin de toi plus longtemps »).",
          "Musicalité : alexandrins, rimes croisées, anaphore « J’irai par la forêt, j’irai par la montagne »."
        ],
        "conclusion": "Le poète exprime son deuil personnel : le poème est lyrique, et pathétique par l’émotion qu’il suscite."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Lyrique",
          "stepTheme": "Les sentiments",
          "stepTitle": "La tonalité lyrique",
          "paragraphText": "La tonalité **lyrique** traduit les **sentiments** et les **émotions** du locuteur (amour, mélancolie, regret, joie, douleur), autour de thèmes comme l’amour, la nature, la solitude, la fuite du temps ou la mort.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p03_q1",
            "type": "mcq",
            "prompt": "Qu’exprime avant tout la tonalité lyrique ?",
            "options": [
              "Les sentiments et les émotions personnels du locuteur",
              "Les exploits d’un héros collectif",
              "Des informations objectives",
              "Une argumentation scientifique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le lyrisme, c’est l’expression du « moi »."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Énonciation",
          "stepTheme": "Je et tu",
          "stepTitle": "La première personne",
          "paragraphText": "Dans « Demain, dès l’aube », le poète dit « **je** » et s’adresse à « **tu** » : « Vois-tu, je sais que **tu** m’attends ». Cette **énonciation** personnelle est une marque du lyrisme.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p03_q2",
            "type": "mcq",
            "prompt": "« Demain, dès l’aube, à l’heure où blanchit la campagne, / Je partirai. Vois-tu, je sais que tu m’attends. / J’irai par la forêt, j’irai par la montagne. / Je ne puis demeurer loin de toi plus longtemps. […] Et quand j’arriverai, je mettrai sur ta tombe / Un bouquet de houx vert et de bruyère en fleur. » (Victor Hugo, Les Contemplations) Quelle marque du lyrisme trouve-t-on dans « Vois-tu, je sais que tu m’attends » ?",
            "options": [
              "L’énonciation à la première personne adressée à un « tu »",
              "Une hyperbole épique",
              "Un champ lexical de la guerre",
              "Un récit à la troisième personne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le « je » du poète parle directement à sa fille."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Chute",
          "stepTheme": "La tombe",
          "stepTitle": "Le sens du dernier vers",
          "paragraphText": "Tout le poème semble décrire un rendez-vous. Le dernier vers révèle qu’il s’agit d’une **tombe** : « je mettrai sur ta **tombe** / Un bouquet de houx vert et de bruyère en fleur ». Hugo pense à sa fille **Léopoldine**, morte noyée en **1843**.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p03_q3",
            "type": "mcq",
            "prompt": "« Demain, dès l’aube, à l’heure où blanchit la campagne, / Je partirai. Vois-tu, je sais que tu m’attends. / J’irai par la forêt, j’irai par la montagne. / Je ne puis demeurer loin de toi plus longtemps. […] Et quand j’arriverai, je mettrai sur ta tombe / Un bouquet de houx vert et de bruyère en fleur. » (Victor Hugo, Les Contemplations) Que révèle la fin du poème ?",
            "options": [
              "Le poète se rend sur la tombe d’un être cher",
              "Le poète part en vacances à la montagne",
              "Le poète rejoint une amoureuse qui l’attend",
              "Le poète part à la guerre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La « tombe » transforme le rendez-vous en pèlerinage de deuil."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Musicalité",
          "stepTheme": "Anaphore",
          "stepTitle": "Les figures et la musicalité",
          "paragraphText": "« **J’irai** par la forêt, **j’irai** par la montagne » : l’**anaphore** et le **rythme binaire** traduisent la marche obstinée du poète. Les **alexandrins** et les **rimes croisées** donnent au poème sa **musicalité**.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p03_q4",
            "type": "mcq",
            "prompt": "Dans le vers de Victor Hugo « J’irai par la forêt, j’irai par la montagne », quelle figure de style est employée ?",
            "options": [
              "Une anaphore",
              "Une hyperbole",
              "Une métaphore",
              "Un oxymore"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« J’irai » est repris en tête de chaque moitié du vers."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Sentiments",
          "stepTheme": "Lamartine",
          "stepTitle": "La lassitude du poète",
          "paragraphText": "Chez Lamartine : « J’ai **trop** vu, **trop** senti, **trop** aimé dans ma vie ». La répétition de « trop » exprime la **lassitude** du poète qui cherche l’oubli dans la nature : c’est un texte **lyrique**.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p03_q5",
            "type": "mcq",
            "prompt": "« Ah ! c’est là qu’entouré d’un rempart de verdure, / D’un horizon borné qui suffit à mes yeux, / J’aime à fixer mes pas, et, seul dans la nature, / À n’entendre que l’onde, à ne voir que les cieux. / J’ai trop vu, trop senti, trop aimé dans ma vie ; / Je viens chercher vivant le calme du Léthé. » (Alphonse de Lamartine, « Le Vallon », Méditations poétiques, 1820) Quel sentiment exprime le vers « J’ai trop vu, trop senti, trop aimé dans ma vie » ?",
            "options": [
              "La lassitude d’un homme qui a trop souffert et cherche l’oubli",
              "La joie d’un héros victorieux",
              "La colère contre un ennemi",
              "L’indifférence totale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Trop vu, trop senti, trop aimé : il est épuisé et veut oublier."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Citation",
          "stepTheme": "Correction",
          "stepTitle": "« l’onde », et non « Ponde »",
          "paragraphText": "Le document écrit « À n’entendre que **Ponde** » : il faut lire « que **l’onde** » (l’eau du ruisseau). Le **Léthé** est, dans la mythologie grecque, le fleuve de l’**oubli** des Enfers.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p03_q6",
            "type": "mcq",
            "prompt": "Dans le poème de Lamartine « Le Vallon », que désigne « le calme du Léthé » dans le vers « Je viens chercher vivant le calme du Léthé » ?",
            "options": [
              "L’oubli : le Léthé est le fleuve de l’oubli dans la mythologie grecque",
              "Une ville de France",
              "Le nom de la femme aimée",
              "Une tempête en mer"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le poète veut oublier ses souffrances de son vivant."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Ponctuation",
          "stepTheme": "Correction",
          "stepTitle": "Le premier vers de « Demain, dès l’aube »",
          "paragraphText": "Le document écrit « Demain dès l’aube, à l’heure où blanchit la campagne. » avec un point. Hugo écrit : « **Demain, dès l’aube, à l’heure où blanchit la campagne, / Je partirai.** » La phrase ne s’arrête pas : elle continue au vers suivant (**enjambement**).",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p03_q7",
            "type": "mcq",
            "prompt": "Les deux premiers vers de Victor Hugo sont « Demain, dès l’aube, à l’heure où blanchit la campagne, / Je partirai. » Quel procédé relie ces deux vers ?",
            "options": [
              "Un enjambement : la phrase continue au vers suivant",
              "Une rime embrassée",
              "Une hyperbole",
              "Un rythme décroissant"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le verbe « Je partirai » est au vers 2 : la phrase déborde le vers 1."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p03_q1",
          "type": "mcq",
          "prompt": "Qu’exprime avant tout la tonalité lyrique ?",
          "options": [
            "Les sentiments et les émotions personnels du locuteur",
            "Les exploits d’un héros collectif",
            "Des informations objectives",
            "Une argumentation scientifique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le lyrisme, c’est l’expression du « moi »."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p03_q2",
          "type": "mcq",
          "prompt": "« Demain, dès l’aube, à l’heure où blanchit la campagne, / Je partirai. Vois-tu, je sais que tu m’attends. / J’irai par la forêt, j’irai par la montagne. / Je ne puis demeurer loin de toi plus longtemps. […] Et quand j’arriverai, je mettrai sur ta tombe / Un bouquet de houx vert et de bruyère en fleur. » (Victor Hugo, Les Contemplations) Quelle marque du lyrisme trouve-t-on dans « Vois-tu, je sais que tu m’attends » ?",
          "options": [
            "L’énonciation à la première personne adressée à un « tu »",
            "Une hyperbole épique",
            "Un champ lexical de la guerre",
            "Un récit à la troisième personne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le « je » du poète parle directement à sa fille."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p03_q3",
          "type": "mcq",
          "prompt": "« Demain, dès l’aube, à l’heure où blanchit la campagne, / Je partirai. Vois-tu, je sais que tu m’attends. / J’irai par la forêt, j’irai par la montagne. / Je ne puis demeurer loin de toi plus longtemps. […] Et quand j’arriverai, je mettrai sur ta tombe / Un bouquet de houx vert et de bruyère en fleur. » (Victor Hugo, Les Contemplations) Que révèle la fin du poème ?",
          "options": [
            "Le poète se rend sur la tombe d’un être cher",
            "Le poète part en vacances à la montagne",
            "Le poète rejoint une amoureuse qui l’attend",
            "Le poète part à la guerre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La « tombe » transforme le rendez-vous en pèlerinage de deuil."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p03_q4",
          "type": "mcq",
          "prompt": "Dans le vers de Victor Hugo « J’irai par la forêt, j’irai par la montagne », quelle figure de style est employée ?",
          "options": [
            "Une anaphore",
            "Une hyperbole",
            "Une métaphore",
            "Un oxymore"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« J’irai » est repris en tête de chaque moitié du vers."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p03_q5",
          "type": "mcq",
          "prompt": "« Ah ! c’est là qu’entouré d’un rempart de verdure, / D’un horizon borné qui suffit à mes yeux, / J’aime à fixer mes pas, et, seul dans la nature, / À n’entendre que l’onde, à ne voir que les cieux. / J’ai trop vu, trop senti, trop aimé dans ma vie ; / Je viens chercher vivant le calme du Léthé. » (Alphonse de Lamartine, « Le Vallon », Méditations poétiques, 1820) Quel sentiment exprime le vers « J’ai trop vu, trop senti, trop aimé dans ma vie » ?",
          "options": [
            "La lassitude d’un homme qui a trop souffert et cherche l’oubli",
            "La joie d’un héros victorieux",
            "La colère contre un ennemi",
            "L’indifférence totale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Trop vu, trop senti, trop aimé : il est épuisé et veut oublier."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p03_q6",
          "type": "mcq",
          "prompt": "Dans le poème de Lamartine « Le Vallon », que désigne « le calme du Léthé » dans le vers « Je viens chercher vivant le calme du Léthé » ?",
          "options": [
            "L’oubli : le Léthé est le fleuve de l’oubli dans la mythologie grecque",
            "Une ville de France",
            "Le nom de la femme aimée",
            "Une tempête en mer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le poète veut oublier ses souffrances de son vivant."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p03_q7",
          "type": "mcq",
          "prompt": "Les deux premiers vers de Victor Hugo sont « Demain, dès l’aube, à l’heure où blanchit la campagne, / Je partirai. » Quel procédé relie ces deux vers ?",
          "options": [
            "Un enjambement : la phrase continue au vers suivant",
            "Une rime embrassée",
            "Une hyperbole",
            "Un rythme décroissant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le verbe « Je partirai » est au vers 2 : la phrase déborde le vers 1."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l02_tonalites_p04",
      "order": 4,
      "title": "La tonalité épique",
      "summary": "Reconnaître l’épique : un héros hors du commun, des exploits amplifiés, l’admiration du lecteur.",
      "conceptExplanation": "- La tonalité épique : elle vient de l’épopée, où un héros hors du commun affronte des situations extraordinaires, parfois surnaturelles. Elle suscite l’admiration du lecteur.\n- Ses procédés : les figures d’amplification (hyperbole, comparaison, accumulation, répétitions, énumérations) ; le recours au merveilleux ; la fréquence du pluriel, des termes collectifs et du superlatif ; les passages descriptifs (batailles, armes, foules).\n- Exemple : Soundjata ou l’épopée mandingue (Djibril Tamsir Niane, 1960). Soundjata (Djata), fils de Sogolon, affronte l’armée de Soumaoro Kanté, roi du Sosso, et de son fils Sosso Balla.\n- « L’éclair traverse le ciel moins rapidement, la foudre terrorise moins, la crue surprend moins que Djata ne fondit sur Sosso Balla » : le héros dépasse les forces de la nature (comparaisons de supériorité, hyperbole).\n- « tel un lion dans une bergerie », « comme lorsqu’on secoue un arbre aux fruits mûrs » : comparaisons qui grandissent le héros ; « tombaient par dizaines » : pluriel et hyperbole ; « Quand il se tournait à droite […] ; quand il se tournait à gauche » : parallélisme.",
      "keyRule": "Épique = héros hors du commun + amplification (hyperbole, comparaison, accumulation, pluriel) ; il provoque l’admiration.",
      "formulas": [],
      "workedExample": {
        "title": "Montrer que l’extrait de Soundjata est épique",
        "statement": "« L’éclair traverse le ciel moins rapidement, la foudre terrorise moins, la crue surprend moins que Djata ne fondit sur Sosso Balla et ses forgerons. En un instant, le fils de Sogolon était au milieu des Sosso tel un lion dans une bergerie. Quand il se tournait à droite, les forgerons de Soumaoro tombaient par dizaines ; quand il se tournait à gauche, son sabre faisait tomber les têtes comme lorsqu’on secoue un arbre aux fruits mûrs. » (Djibril Tamsir Niane, Soundjata ou l’épopée mandingue) Relevez trois procédés épiques.",
        "methodSteps": [
          "Hyperbole et comparaison de supériorité : l’éclair, la foudre et la crue sont moins rapides et moins terribles que Djata.",
          "Comparaison animale : « tel un lion dans une bergerie » : les ennemis sont des moutons sans défense.",
          "Pluriel et hyperbole : « les forgerons de Soumaoro tombaient par dizaines » ; parallélisme droite / gauche."
        ],
        "conclusion": "Djata apparaît comme un héros surhumain qui suscite l’admiration : la tonalité est épique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Épique",
          "stepTheme": "L’épopée",
          "stepTitle": "La tonalité épique",
          "paragraphText": "La tonalité **épique** vient de l’**épopée** : un **héros hors du commun** affronte des situations extraordinaires, parfois **surnaturelles**. Elle suscite l’**admiration** du lecteur.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p04_q1",
            "type": "mcq",
            "prompt": "Quel sentiment la tonalité épique cherche-t-elle à faire naître chez le lecteur ?",
            "options": [
              "L’admiration pour un héros hors du commun",
              "La pitié pour une victime",
              "Le rire",
              "L’ennui"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’épique grandit le héros pour le faire admirer."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Hyperbole",
          "stepTheme": "Soundjata",
          "stepTitle": "Plus rapide que l’éclair",
          "paragraphText": "« L’éclair traverse le ciel **moins rapidement**, la foudre terrorise **moins**, la crue surprend **moins** que Djata ne fondit sur Sosso Balla » : le héros **dépasse les forces de la nature**. C’est une **hyperbole** construite sur des comparaisons.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p04_q2",
            "type": "mcq",
            "prompt": "« L’éclair traverse le ciel moins rapidement, la foudre terrorise moins, la crue surprend moins que Djata ne fondit sur Sosso Balla et ses forgerons. En un instant, le fils de Sogolon était au milieu des Sosso tel un lion dans une bergerie. Quand il se tournait à droite, les forgerons de Soumaoro tombaient par dizaines ; quand il se tournait à gauche, son sabre faisait tomber les têtes comme lorsqu’on secoue un arbre aux fruits mûrs. » (Djibril Tamsir Niane, Soundjata ou l’épopée mandingue) Quel procédé épique trouve-t-on dans « L’éclair traverse le ciel moins rapidement […] que Djata ne fondit sur Sosso Balla » ?",
            "options": [
              "Une hyperbole : le héros est plus rapide que l’éclair",
              "Une litote",
              "Un euphémisme",
              "Une question rhétorique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Djata est présenté comme plus fort que l’éclair, la foudre et la crue."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Comparaison",
          "stepTheme": "Le lion",
          "stepTitle": "Tel un lion dans une bergerie",
          "paragraphText": "« Le fils de Sogolon était au milieu des Sosso **tel un lion dans une bergerie** » : la **comparaison** fait de Djata un fauve invincible et de ses ennemis des moutons sans défense.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p04_q3",
            "type": "mcq",
            "prompt": "« L’éclair traverse le ciel moins rapidement, la foudre terrorise moins, la crue surprend moins que Djata ne fondit sur Sosso Balla et ses forgerons. En un instant, le fils de Sogolon était au milieu des Sosso tel un lion dans une bergerie. Quand il se tournait à droite, les forgerons de Soumaoro tombaient par dizaines ; quand il se tournait à gauche, son sabre faisait tomber les têtes comme lorsqu’on secoue un arbre aux fruits mûrs. » (Djibril Tamsir Niane, Soundjata ou l’épopée mandingue) Quel effet produit la comparaison « tel un lion dans une bergerie » ?",
            "options": [
              "Elle montre la force invincible du héros face à des ennemis sans défense",
              "Elle montre que Djata a peur",
              "Elle décrit une ferme paisible",
              "Elle rend le héros ridicule"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le lion domine totalement les moutons."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Amplification",
          "stepTheme": "Pluriel",
          "stepTitle": "Pluriel, termes collectifs et parallélisme",
          "paragraphText": "« Les forgerons de Soumaoro tombaient **par dizaines** » : le **pluriel** et l’**hyperbole** multiplient les victimes. « Quand il se tournait **à droite** […] ; quand il se tournait **à gauche** » : le **parallélisme** montre que le héros frappe de tous côtés.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p04_q4",
            "type": "mcq",
            "prompt": "« L’éclair traverse le ciel moins rapidement, la foudre terrorise moins, la crue surprend moins que Djata ne fondit sur Sosso Balla et ses forgerons. En un instant, le fils de Sogolon était au milieu des Sosso tel un lion dans une bergerie. Quand il se tournait à droite, les forgerons de Soumaoro tombaient par dizaines ; quand il se tournait à gauche, son sabre faisait tomber les têtes comme lorsqu’on secoue un arbre aux fruits mûrs. » (Djibril Tamsir Niane, Soundjata ou l’épopée mandingue) Dans « les forgerons de Soumaoro tombaient par dizaines », quels procédés épiques repère-t-on ?",
            "options": [
              "Le pluriel et l’hyperbole",
              "Le lexique de l’affectivité et la première personne",
              "Une question et une négation",
              "Une rime et un enjambement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Par dizaines » exagère le nombre des ennemis abattus."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Comparaison",
          "stepTheme": "Image",
          "stepTitle": "Les têtes comme des fruits mûrs",
          "paragraphText": "« Son sabre faisait tomber les têtes **comme lorsqu’on secoue un arbre aux fruits mûrs** » : la comparaison montre la **facilité** avec laquelle le héros abat ses ennemis.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p04_q5",
            "type": "mcq",
            "prompt": "« L’éclair traverse le ciel moins rapidement, la foudre terrorise moins, la crue surprend moins que Djata ne fondit sur Sosso Balla et ses forgerons. En un instant, le fils de Sogolon était au milieu des Sosso tel un lion dans une bergerie. Quand il se tournait à droite, les forgerons de Soumaoro tombaient par dizaines ; quand il se tournait à gauche, son sabre faisait tomber les têtes comme lorsqu’on secoue un arbre aux fruits mûrs. » (Djibril Tamsir Niane, Soundjata ou l’épopée mandingue) Que suggère la comparaison « comme lorsqu’on secoue un arbre aux fruits mûrs » ?",
            "options": [
              "La facilité avec laquelle le héros abat ses ennemis",
              "La récolte des fruits après la bataille",
              "La faiblesse du héros",
              "La tristesse du héros"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les têtes tombent aussi facilement que des fruits mûrs."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepBadge": "Merveilleux",
          "stepTheme": "Le surnaturel",
          "stepTitle": "Le recours au merveilleux",
          "paragraphText": "L’épopée fait souvent appel au **merveilleux** : pouvoirs magiques, interventions surnaturelles, héros aux forces surhumaines. Dans l’épopée mandingue, Soundjata et Soumaoro possèdent des pouvoirs liés à des secrets magiques.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p04_q6",
            "type": "mcq",
            "prompt": "Dans une épopée, comment appelle-t-on la présence d’éléments surnaturels (pouvoirs magiques, prodiges) ?",
            "options": [
              "Le merveilleux",
              "Le réalisme",
              "Le pathétique",
              "Le comique de situation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le merveilleux est un procédé caractéristique de l’épique."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p04_q1",
          "type": "mcq",
          "prompt": "Quel sentiment la tonalité épique cherche-t-elle à faire naître chez le lecteur ?",
          "options": [
            "L’admiration pour un héros hors du commun",
            "La pitié pour une victime",
            "Le rire",
            "L’ennui"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’épique grandit le héros pour le faire admirer."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p04_q2",
          "type": "mcq",
          "prompt": "« L’éclair traverse le ciel moins rapidement, la foudre terrorise moins, la crue surprend moins que Djata ne fondit sur Sosso Balla et ses forgerons. En un instant, le fils de Sogolon était au milieu des Sosso tel un lion dans une bergerie. Quand il se tournait à droite, les forgerons de Soumaoro tombaient par dizaines ; quand il se tournait à gauche, son sabre faisait tomber les têtes comme lorsqu’on secoue un arbre aux fruits mûrs. » (Djibril Tamsir Niane, Soundjata ou l’épopée mandingue) Quel procédé épique trouve-t-on dans « L’éclair traverse le ciel moins rapidement […] que Djata ne fondit sur Sosso Balla » ?",
          "options": [
            "Une hyperbole : le héros est plus rapide que l’éclair",
            "Une litote",
            "Un euphémisme",
            "Une question rhétorique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Djata est présenté comme plus fort que l’éclair, la foudre et la crue."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p04_q3",
          "type": "mcq",
          "prompt": "« L’éclair traverse le ciel moins rapidement, la foudre terrorise moins, la crue surprend moins que Djata ne fondit sur Sosso Balla et ses forgerons. En un instant, le fils de Sogolon était au milieu des Sosso tel un lion dans une bergerie. Quand il se tournait à droite, les forgerons de Soumaoro tombaient par dizaines ; quand il se tournait à gauche, son sabre faisait tomber les têtes comme lorsqu’on secoue un arbre aux fruits mûrs. » (Djibril Tamsir Niane, Soundjata ou l’épopée mandingue) Quel effet produit la comparaison « tel un lion dans une bergerie » ?",
          "options": [
            "Elle montre la force invincible du héros face à des ennemis sans défense",
            "Elle montre que Djata a peur",
            "Elle décrit une ferme paisible",
            "Elle rend le héros ridicule"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le lion domine totalement les moutons."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p04_q4",
          "type": "mcq",
          "prompt": "« L’éclair traverse le ciel moins rapidement, la foudre terrorise moins, la crue surprend moins que Djata ne fondit sur Sosso Balla et ses forgerons. En un instant, le fils de Sogolon était au milieu des Sosso tel un lion dans une bergerie. Quand il se tournait à droite, les forgerons de Soumaoro tombaient par dizaines ; quand il se tournait à gauche, son sabre faisait tomber les têtes comme lorsqu’on secoue un arbre aux fruits mûrs. » (Djibril Tamsir Niane, Soundjata ou l’épopée mandingue) Dans « les forgerons de Soumaoro tombaient par dizaines », quels procédés épiques repère-t-on ?",
          "options": [
            "Le pluriel et l’hyperbole",
            "Le lexique de l’affectivité et la première personne",
            "Une question et une négation",
            "Une rime et un enjambement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Par dizaines » exagère le nombre des ennemis abattus."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p04_q5",
          "type": "mcq",
          "prompt": "« L’éclair traverse le ciel moins rapidement, la foudre terrorise moins, la crue surprend moins que Djata ne fondit sur Sosso Balla et ses forgerons. En un instant, le fils de Sogolon était au milieu des Sosso tel un lion dans une bergerie. Quand il se tournait à droite, les forgerons de Soumaoro tombaient par dizaines ; quand il se tournait à gauche, son sabre faisait tomber les têtes comme lorsqu’on secoue un arbre aux fruits mûrs. » (Djibril Tamsir Niane, Soundjata ou l’épopée mandingue) Que suggère la comparaison « comme lorsqu’on secoue un arbre aux fruits mûrs » ?",
          "options": [
            "La facilité avec laquelle le héros abat ses ennemis",
            "La récolte des fruits après la bataille",
            "La faiblesse du héros",
            "La tristesse du héros"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les têtes tombent aussi facilement que des fruits mûrs."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p04_q6",
          "type": "mcq",
          "prompt": "Dans une épopée, comment appelle-t-on la présence d’éléments surnaturels (pouvoirs magiques, prodiges) ?",
          "options": [
            "Le merveilleux",
            "Le réalisme",
            "Le pathétique",
            "Le comique de situation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le merveilleux est un procédé caractéristique de l’épique."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l02_tonalites_p05",
      "order": 5,
      "title": "Évaluation : dégager la tonalité dominante",
      "summary": "Identifier la tonalité dominante d’un texte et justifier par ses procédés.",
      "conceptExplanation": "- Méthode : 1) se demander quel effet le texte produit sur le lecteur ; 2) relever les indices (énonciation, champs lexicaux, ponctuation, figures) ; 3) nommer la tonalité dominante ; 4) signaler les tonalités secondaires.\n- Texte 1 : Lamartine, « Le Vallon » (Méditations poétiques, 1820). Tonalité dominante : lyrique. Indices : « je » (« J’aime à fixer mes pas », « J’ai trop vu ») ; interjection et exclamation (« Ah ! ») ; thèmes de la nature, de la solitude, de l’oubli, du passé ; anaphore de « trop » ; apostrophe « Beaux lieux, soyez pour moi ces bords où l’on oublie » ; comparaison « comme une grande image ».\n- Texte 2 : Pierre-Claver Ilboudo, Adama ou la force des choses. Tonalité dominante : tragique, avec du pathétique. Indices : la fatalité (« le poids de sa destinée », « sa vie de fatalité ») ; le malheur qui poursuit le personnage (« le spectre de la misère l’avait suivi à la trace ») ; l’anaphore « Tout chancelait, tout titubait, tout chavirait » ; les comparaisons « comme un chasseur tenace traque un animal blessé », « comme un bagnard traîne son boulet ».\n- Texte « Demain, dès l’aube » : tonalités lyrique et pathétique.\n- Correction du document : chez Lamartine, la comparaison porte sur « une grande image » (nom féminin), qui « survit seule » ; le document écrit « seul ».",
      "keyRule": "Effet produit, indices relevés, tonalité dominante nommée, tonalités secondaires signalées.",
      "formulas": [],
      "workedExample": {
        "title": "Dégager la tonalité du texte d’Ilboudo",
        "statement": "« Quand il avait constaté la disparition du vélo et des tissus, il avait senti se creuser en lui un vide immense. Tout chancelait, tout titubait, tout chavirait autour de lui. Il sentait presque physiquement peser sur ses épaules le poids de sa destinée. […] le spectre de la misère l’avait suivi à la trace comme un chasseur tenace traque un animal blessé. […] il avait traîné nuit et jour sa vie de fatalité comme un bagnard traîne son boulet. » (Pierre-Claver Ilboudo, Adama ou la force des choses) Quelle est la tonalité dominante ?",
        "methodSteps": [
          "Effet : on voit un homme écrasé par un malheur qui le poursuit sans relâche.",
          "Indices : « le poids de sa destinée », « sa vie de fatalité », « le spectre de la misère l’avait suivi à la trace ».",
          "Procédés : anaphore « Tout chancelait, tout titubait, tout chavirait » ; comparaisons du chasseur et du bagnard."
        ],
        "conclusion": "Tonalité dominante : tragique (la fatalité), avec une dimension pathétique (la souffrance du personnage)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Lamartine",
          "stepTheme": "Texte 1",
          "stepTitle": "La tonalité du « Vallon »",
          "paragraphText": "Le poète dit « **je** », exprime sa **lassitude** et son désir d’**oubli** dans la **nature** solitaire. La tonalité dominante est **lyrique**.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p05_q1",
            "type": "mcq",
            "prompt": "« Ah ! c’est là qu’entouré d’un rempart de verdure, / D’un horizon borné qui suffit à mes yeux, / J’aime à fixer mes pas, et, seul dans la nature, / À n’entendre que l’onde, à ne voir que les cieux. / J’ai trop vu, trop senti, trop aimé dans ma vie ; / Je viens chercher vivant le calme du Léthé. » (Alphonse de Lamartine, « Le Vallon », Méditations poétiques, 1820) Quelle est la tonalité dominante de cet extrait ?",
            "options": [
              "Lyrique",
              "Épique",
              "Comique",
              "Didactique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un « je » qui confie ses sentiments au sein de la nature : lyrisme."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les quatre tonalités de la leçon",
            "caption": "On reconnaît une tonalité à l’effet produit sur le lecteur et aux procédés qui le créent.",
            "tableData": {
              "headers": [
                "Tonalité",
                "Effet sur le lecteur",
                "Procédés caractéristiques"
              ],
              "rows": [
                [
                  "Tragique",
                  "Effroi et pitié devant un destin sans issue",
                  "Champs lexicaux de la mort et de la fatalité, forces implacables, langage soutenu"
                ],
                [
                  "Pathétique",
                  "Compassion, attendrissement, parfois les larmes",
                  "Lexique de l’affectivité et de la souffrance, exclamations, questions, répétitions"
                ],
                [
                  "Lyrique",
                  "Partage des sentiments intimes du locuteur",
                  "Première personne, lexique des sentiments, ponctuation forte, musicalité"
                ],
                [
                  "Épique",
                  "Admiration pour un héros hors du commun",
                  "Hyperboles, comparaisons, accumulations, pluriels, merveilleux"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Lamartine",
          "stepTheme": "Figure",
          "stepTitle": "L’apostrophe aux beaux lieux",
          "paragraphText": "« **Beaux lieux**, soyez pour moi ces bords où l’on oublie » : le poète s’adresse directement au paysage. C’est une **apostrophe**, figure fréquente du lyrisme.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p05_q2",
            "type": "mcq",
            "prompt": "Dans le vers de Lamartine « Beaux lieux, soyez pour moi ces bords où l’on oublie », comment s’appelle le fait de s’adresser directement au paysage ?",
            "options": [
              "Une apostrophe",
              "Une hyperbole",
              "Une litote",
              "Une antithèse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le poète interpelle les « beaux lieux » comme une personne."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Ilboudo",
          "stepTheme": "Texte 2",
          "stepTitle": "La tonalité du texte d’Ilboudo",
          "paragraphText": "« Le **poids de sa destinée** », « sa vie de **fatalité** », « le spectre de la misère l’avait suivi à la trace » : un malheur implacable poursuit le personnage. La tonalité dominante est **tragique**, avec du **pathétique**.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p05_q3",
            "type": "mcq",
            "prompt": "« Quand il avait constaté la disparition du vélo et des tissus, il avait senti se creuser en lui un vide immense. Tout chancelait, tout titubait, tout chavirait autour de lui. Il sentait presque physiquement peser sur ses épaules le poids de sa destinée. […] le spectre de la misère l’avait suivi à la trace comme un chasseur tenace traque un animal blessé. […] il avait traîné nuit et jour sa vie de fatalité comme un bagnard traîne son boulet. » (Pierre-Claver Ilboudo, Adama ou la force des choses) Quelle est la tonalité dominante de cet extrait ?",
            "options": [
              "Tragique, avec une dimension pathétique",
              "Épique",
              "Lyrique joyeux",
              "Comique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La fatalité écrase le personnage : tragique ; sa souffrance émeut : pathétique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Ilboudo",
          "stepTheme": "Anaphore",
          "stepTitle": "« Tout chancelait, tout titubait, tout chavirait »",
          "paragraphText": "L’**anaphore** de « tout » et le **rythme ternaire** des trois verbes de déséquilibre traduisent l’effondrement du personnage : son monde bascule.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p05_q4",
            "type": "mcq",
            "prompt": "Dans la phrase de Pierre-Claver Ilboudo « Tout chancelait, tout titubait, tout chavirait autour de lui », quel procédé est employé ?",
            "options": [
              "Une anaphore de « tout » sur un rythme ternaire",
              "Une métaphore filée de la mer",
              "Une question rhétorique",
              "Une rime plate"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Tout » est répété en tête de trois groupes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Ilboudo",
          "stepTheme": "Comparaison",
          "stepTitle": "Le bagnard et son boulet",
          "paragraphText": "« Il avait traîné nuit et jour sa vie de fatalité **comme un bagnard traîne son boulet** » : la comparaison montre un homme **prisonnier** de son destin, sans espoir d’en sortir.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p05_q5",
            "type": "mcq",
            "prompt": "« Quand il avait constaté la disparition du vélo et des tissus, il avait senti se creuser en lui un vide immense. Tout chancelait, tout titubait, tout chavirait autour de lui. Il sentait presque physiquement peser sur ses épaules le poids de sa destinée. […] le spectre de la misère l’avait suivi à la trace comme un chasseur tenace traque un animal blessé. […] il avait traîné nuit et jour sa vie de fatalité comme un bagnard traîne son boulet. » (Pierre-Claver Ilboudo, Adama ou la force des choses) Que suggère la comparaison « comme un bagnard traîne son boulet » ?",
            "options": [
              "Le personnage est prisonnier d’un destin malheureux",
              "Le personnage est un héros victorieux",
              "Le personnage voyage avec plaisir",
              "Le personnage fait du sport"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le boulet du bagnard est l’image d’un malheur qu’on ne peut quitter."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Accord",
          "stepTheme": "Correction",
          "stepTitle": "« Survit seule », et non « seul »",
          "paragraphText": "Le document écrit : « L’amour seul est resté, comme une grande image / Survit **seul** au réveil ». Le sujet de « survit » est « une grande **image** » (nom féminin) : il faut « survit **seule** ».",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p05_q6",
            "type": "mcq",
            "prompt": "Dans la phrase « L’amour seul est resté, comme une grande image survit … au réveil », quel adjectif s’accorde avec « une grande image » ?",
            "options": [
              "seule",
              "seul",
              "seuls",
              "seules"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Image » est féminin singulier : « survit seule »."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Demain, dès l’aube",
          "stepTheme": "Synthèse",
          "stepTitle": "Deux tonalités mêlées",
          "paragraphText": "« Demain, dès l’aube » exprime le deuil personnel du poète (**lyrique**) et émeut le lecteur par la révélation de la tombe (**pathétique**). Un texte peut avoir une tonalité **dominante** et des tonalités **secondaires**.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l02_tonalites_p05_q7",
            "type": "mcq",
            "prompt": "« Demain, dès l’aube, à l’heure où blanchit la campagne, / Je partirai. Vois-tu, je sais que tu m’attends. / J’irai par la forêt, j’irai par la montagne. / Je ne puis demeurer loin de toi plus longtemps. […] Et quand j’arriverai, je mettrai sur ta tombe / Un bouquet de houx vert et de bruyère en fleur. » (Victor Hugo, Les Contemplations) Quelles tonalités dominent ce poème ?",
            "options": [
              "Lyrique et pathétique",
              "Épique et comique",
              "Didactique et polémique",
              "Épique seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le « je » endeuillé (lyrique) touche le lecteur (pathétique)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p05_q1",
          "type": "mcq",
          "prompt": "« Ah ! c’est là qu’entouré d’un rempart de verdure, / D’un horizon borné qui suffit à mes yeux, / J’aime à fixer mes pas, et, seul dans la nature, / À n’entendre que l’onde, à ne voir que les cieux. / J’ai trop vu, trop senti, trop aimé dans ma vie ; / Je viens chercher vivant le calme du Léthé. » (Alphonse de Lamartine, « Le Vallon », Méditations poétiques, 1820) Quelle est la tonalité dominante de cet extrait ?",
          "options": [
            "Lyrique",
            "Épique",
            "Comique",
            "Didactique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un « je » qui confie ses sentiments au sein de la nature : lyrisme."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p05_q2",
          "type": "mcq",
          "prompt": "Dans le vers de Lamartine « Beaux lieux, soyez pour moi ces bords où l’on oublie », comment s’appelle le fait de s’adresser directement au paysage ?",
          "options": [
            "Une apostrophe",
            "Une hyperbole",
            "Une litote",
            "Une antithèse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le poète interpelle les « beaux lieux » comme une personne."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p05_q3",
          "type": "mcq",
          "prompt": "« Quand il avait constaté la disparition du vélo et des tissus, il avait senti se creuser en lui un vide immense. Tout chancelait, tout titubait, tout chavirait autour de lui. Il sentait presque physiquement peser sur ses épaules le poids de sa destinée. […] le spectre de la misère l’avait suivi à la trace comme un chasseur tenace traque un animal blessé. […] il avait traîné nuit et jour sa vie de fatalité comme un bagnard traîne son boulet. » (Pierre-Claver Ilboudo, Adama ou la force des choses) Quelle est la tonalité dominante de cet extrait ?",
          "options": [
            "Tragique, avec une dimension pathétique",
            "Épique",
            "Lyrique joyeux",
            "Comique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fatalité écrase le personnage : tragique ; sa souffrance émeut : pathétique."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p05_q4",
          "type": "mcq",
          "prompt": "Dans la phrase de Pierre-Claver Ilboudo « Tout chancelait, tout titubait, tout chavirait autour de lui », quel procédé est employé ?",
          "options": [
            "Une anaphore de « tout » sur un rythme ternaire",
            "Une métaphore filée de la mer",
            "Une question rhétorique",
            "Une rime plate"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Tout » est répété en tête de trois groupes."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p05_q5",
          "type": "mcq",
          "prompt": "« Quand il avait constaté la disparition du vélo et des tissus, il avait senti se creuser en lui un vide immense. Tout chancelait, tout titubait, tout chavirait autour de lui. Il sentait presque physiquement peser sur ses épaules le poids de sa destinée. […] le spectre de la misère l’avait suivi à la trace comme un chasseur tenace traque un animal blessé. […] il avait traîné nuit et jour sa vie de fatalité comme un bagnard traîne son boulet. » (Pierre-Claver Ilboudo, Adama ou la force des choses) Que suggère la comparaison « comme un bagnard traîne son boulet » ?",
          "options": [
            "Le personnage est prisonnier d’un destin malheureux",
            "Le personnage est un héros victorieux",
            "Le personnage voyage avec plaisir",
            "Le personnage fait du sport"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le boulet du bagnard est l’image d’un malheur qu’on ne peut quitter."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p05_q6",
          "type": "mcq",
          "prompt": "Dans la phrase « L’amour seul est resté, comme une grande image survit … au réveil », quel adjectif s’accorde avec « une grande image » ?",
          "options": [
            "seule",
            "seul",
            "seuls",
            "seules"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Image » est féminin singulier : « survit seule »."
        },
        {
          "id": "premiere_a1_francais_pl_l02_tonalites_p05_q7",
          "type": "mcq",
          "prompt": "« Demain, dès l’aube, à l’heure où blanchit la campagne, / Je partirai. Vois-tu, je sais que tu m’attends. / J’irai par la forêt, j’irai par la montagne. / Je ne puis demeurer loin de toi plus longtemps. […] Et quand j’arriverai, je mettrai sur ta tombe / Un bouquet de houx vert et de bruyère en fleur. » (Victor Hugo, Les Contemplations) Quelles tonalités dominent ce poème ?",
          "options": [
            "Lyrique et pathétique",
            "Épique et comique",
            "Didactique et polémique",
            "Épique seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le « je » endeuillé (lyrique) touche le lecteur (pathétique)."
        }
      ]
    }
  ]
};
