import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir des PDF officiels « 1ere_EE_Prdtion-écrite » séances 1 à 10 (résumé de texte argumentatif). Toutes les Premières.
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
  "title": "Expression écrite : le résumé de texte argumentatif",
  "summary": "Répondre aux questions, identifier la situation d’argumentation, sélectionner et reformuler les idées essentielles, rédiger le résumé, puis la production écrite : analyser le sujet (étayer, réfuter), rechercher les idées, rédiger les paragraphes, l’introduction et la conclusion (séances 1 à 10).",
  "officialVolumeHours": 10,
  "contentVersion": 2,
  "source": "1ere_EE_Résumé_Texte_Argu S1 à S5 ; 1ere_EE_Prdtion-écrite S6-8, S9, S10 (École numérique)",
  "points": [
    {
      "id": "premiere_a1_francais_ee_resume_production_ecrite_p01",
      "order": 1,
      "title": "Répondre aux questions sur le texte",
      "summary": "Connaître les trois parties de l’épreuve et répondre aux questions : thème, explication en contexte, visée argumentative.",
      "conceptExplanation": "Situation : des élèves de Première du Lycée moderne Alassane Ouattara d’Anyama découvrent le texte « Foot africain : danger ! » d’Alphonse Boolamou de Ligouri. Ils veulent en retenir l’essentiel : répondre aux questions, résumer le texte au quart, puis rédiger une production écrite.\n- L’épreuve comporte trois parties : les questions sur le texte, le résumé au quart du volume du texte (avec une marge de plus ou moins 10 %), la production écrite.\n- Texte 1 : Dans le texte « Foot africain : danger ! » (Alphonse Boolamou de Ligouri, Stades d’Afrique n° 31, 5 avril 2006), l’auteur dénonce les cris racistes contre les joueurs africains dans les stades européens, rappelle que l’Afrique regorge de talents recherchés par les grands clubs, puis montre que les exigences financières du G14 (14 grands clubs européens) menacent les sélections nationales africaines et le football mondial, sacrifié au profit.\n- Texte 2 : Dans « Le livre est fait pour être publié » (Michel Tournier, Le Vol du vampire, 1981), l’auteur constate que certains écrivains écrivent pour eux seuls, « comme ils respirent », sans penser au lecteur ; puis il affirme que lui écrit pour être publié et lu, car un livre non lu n’a qu’une « demi-existence » : le lecteur est l’indispensable collaborateur de l’écrivain.\n- Dégager le thème : dire de quoi parle le texte, en un groupe nominal. Texte 1 : les entraves au football africain. Texte 2 : la publication du livre.\n- Expliquer en contexte : redire le sens de l’expression dans le texte. « Le football professionnel a fini par sacrifier l’idéal de Coubertin sur l’autel du dieu argent » : l’esprit d’argent a pris le pas sur la passion du jeu et l’esprit sportif. « Nombre d’écrivains écrivent comme ils respirent » : certains écrivains écrivent naturellement, pour le seul plaisir d’écrire.\n- Visée argumentative du texte 2 : le livre n’a d’existence que lorsqu’il est mis à la disposition du lecteur.\n- Corrections du document : Ronaldinho (et non « Ronadinho ») ; Thierry Henry (et non « Henri ») était l’attaquant vedette d’Arsenal, pas un milieu de terrain ; Pierre de Coubertin a fondé le Comité international olympique en 1894 (les premiers Jeux olympiques modernes ont eu lieu en 1896, à Athènes).",
      "keyRule": "Thème = de quoi parle le texte ; expliquer en contexte = redire le sens de l’expression dans le texte ; visée = ce que l’auteur veut faire admettre.",
      "formulas": [],
      "workedExample": {
        "title": "Répondre aux questions du texte 1",
        "statement": "Texte « Foot africain : danger ! » : 1) Dégagez le thème. 2) Expliquez en contexte : « le football professionnel a fini par sacrifier l’idéal de Coubertin sur l’autel du dieu argent ».",
        "methodSteps": [
          "1) Thème : les entraves au football africain (racisme, exigences financières des grands clubs).",
          "2) L’idéal de Coubertin (le sport pour la passion et la participation) a été sacrifié à l’argent : l’esprit mercantile l’emporte sur l’amour du jeu."
        ],
        "conclusion": "Réponses courtes, rédigées, appuyées sur le texte."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "L’épreuve",
          "stepTheme": "Trois parties",
          "stepTitle": "Les trois parties de l’épreuve",
          "paragraphText": "L’épreuve comporte trois parties : des **questions** sur le texte, le **résumé** au quart de son volume (marge de plus ou moins 10 %), puis une **production écrite** sur une idée du texte.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q1",
            "type": "mcq",
            "prompt": "De quelles parties se compose l’épreuve de résumé de texte argumentatif ?",
            "options": [
              "Questions sur le texte, résumé au quart, production écrite",
              "Commentaire composé, dissertation, résumé",
              "Dictée, questions, conjugaison",
              "Introduction, développement, conclusion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Questions, résumé, puis production écrite."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Le thème",
          "stepTheme": "Texte 1",
          "stepTitle": "Dégager le thème du texte 1",
          "paragraphText": "Le **thème** dit de quoi parle le texte, en un groupe nominal. Le texte d’Alphonse Boolamou de Ligouri parle des **entraves au football africain** : le racisme et les exigences financières des grands clubs.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q2",
            "type": "mcq",
            "prompt": "Dans le texte « Foot africain : danger ! » (Alphonse Boolamou de Ligouri, Stades d’Afrique n° 31, 5 avril 2006), l’auteur dénonce les cris racistes contre les joueurs africains dans les stades européens, rappelle que l’Afrique regorge de talents recherchés par les grands clubs, puis montre que les exigences financières du G14 (14 grands clubs européens) menacent les sélections nationales africaines et le football mondial, sacrifié au profit. Quel est le thème de ce texte ?",
            "options": [
              "Les entraves au football africain",
              "L’histoire des Jeux olympiques",
              "La biographie de Didier Drogba",
              "Les règles du football"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Racisme et exigences financières sont des obstacles au football africain."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Expliquer en contexte",
          "stepTheme": "Coubertin et l’argent",
          "stepTitle": "Expliquer une expression dans son contexte",
          "paragraphText": "Expliquer en contexte, c’est redire le sens de l’expression **dans le texte**. « Sacrifier l’idéal de Coubertin sur l’autel du dieu argent » : l’**esprit d’argent** a pris le pas sur la **passion du jeu** et l’esprit sportif.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q3",
            "type": "mcq",
            "prompt": "Dans un texte sur le football professionnel, que signifie : « le football professionnel a fini par sacrifier l’idéal de Coubertin sur l’autel du dieu argent » ?",
            "options": [
              "Le désir de gagner de l’argent l’emporte sur la passion du jeu et l’esprit sportif",
              "Les stades sont construits à côté des églises",
              "Coubertin a vendu le football aux clubs européens",
              "Les joueurs refusent d’être payés"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’« autel du dieu argent » : l’argent est adoré comme un dieu, au détriment de l’idéal sportif."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Coubertin",
          "stepTheme": "Correction",
          "stepTitle": "En quelle année le CIO a-t-il été fondé ?",
          "paragraphText": "La note du document dit que Coubertin a fondé le Comité international olympique « en 1896 ». En réalité, **Pierre de Coubertin** a fondé le **CIO en 1894** ; **1896** est l’année des **premiers Jeux olympiques modernes**, à Athènes.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q4",
            "type": "mcq",
            "prompt": "En quelle année Pierre de Coubertin a-t-il fondé le Comité international olympique (CIO) ?",
            "options": [
              "En 1894",
              "En 1896",
              "En 1900",
              "En 1924"
            ],
            "correctAnswerIndex": 0,
            "explanation": "CIO fondé en 1894 ; premiers Jeux modernes en 1896 à Athènes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Les joueurs cités",
          "stepTheme": "Correction",
          "stepTitle": "Vérifier les noms et les postes des joueurs",
          "paragraphText": "Le texte écrit « Ronadinho » et « Thierry Henri, le milieu de terrain racé d’Arsenal ». Il faut lire **Ronaldinho** et **Thierry Henry**, qui était l’**attaquant** vedette d’Arsenal.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q5",
            "type": "mcq",
            "prompt": "À quel poste jouait Thierry Henry, joueur vedette d’Arsenal cité dans le texte « Foot africain : danger ! » ?",
            "options": [
              "Attaquant",
              "Gardien de but",
              "Défenseur central",
              "Il n’était pas footballeur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Thierry Henry était attaquant ; le document le présente à tort comme milieu de terrain."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Expliquer en contexte",
          "stepTheme": "Texte 2",
          "stepTitle": "« Écrire comme on respire »",
          "paragraphText": "Dans le texte de Michel Tournier, « nombre d’écrivains écrivent comme ils respirent » veut dire que certains écrivains écrivent **naturellement**, **pour le seul plaisir d’écrire**, sans penser à publier.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q6",
            "type": "mcq",
            "prompt": "Dans « Le livre est fait pour être publié » (Michel Tournier, Le Vol du vampire, 1981), l’auteur constate que certains écrivains écrivent pour eux seuls, « comme ils respirent », sans penser au lecteur ; puis il affirme que lui écrit pour être publié et lu, car un livre non lu n’a qu’une « demi-existence » : le lecteur est l’indispensable collaborateur de l’écrivain. Que signifie l’expression « nombre d’écrivains écrivent comme ils respirent » ?",
            "options": [
              "Certains écrivains écrivent naturellement, pour le seul plaisir d’écrire",
              "Les écrivains écrivent très vite, sans s’arrêter",
              "Les écrivains écrivent sur la respiration",
              "Les écrivains ne peuvent écrire qu’en plein air"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Écrire leur est aussi naturel que respirer : c’est un besoin, pas un projet de publication."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Visée",
          "stepTheme": "Texte 2",
          "stepTitle": "La visée argumentative du texte de Michel Tournier",
          "paragraphText": "La **visée argumentative** est ce que l’auteur veut faire admettre. Pour Michel Tournier, **le livre n’existe vraiment que lorsqu’il est mis à la disposition du lecteur**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q7",
            "type": "mcq",
            "prompt": "Dans « Le livre est fait pour être publié » (Michel Tournier, Le Vol du vampire, 1981), l’auteur constate que certains écrivains écrivent pour eux seuls, « comme ils respirent », sans penser au lecteur ; puis il affirme que lui écrit pour être publié et lu, car un livre non lu n’a qu’une « demi-existence » : le lecteur est l’indispensable collaborateur de l’écrivain. Quelle est la visée argumentative de ce texte ?",
            "options": [
              "Montrer que le livre n’existe vraiment que lorsqu’il est lu",
              "Montrer que les écrivains doivent garder leurs livres dans un tiroir",
              "Montrer que les livres coûtent trop cher",
              "Montrer que les lecteurs n’ont aucun rôle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un livre non lu n’a qu’une « demi-existence » : il a besoin du lecteur."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q1",
          "type": "mcq",
          "prompt": "De quelles parties se compose l’épreuve de résumé de texte argumentatif ?",
          "options": [
            "Questions sur le texte, résumé au quart, production écrite",
            "Commentaire composé, dissertation, résumé",
            "Dictée, questions, conjugaison",
            "Introduction, développement, conclusion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Questions, résumé, puis production écrite."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q2",
          "type": "mcq",
          "prompt": "Dans le texte « Foot africain : danger ! » (Alphonse Boolamou de Ligouri, Stades d’Afrique n° 31, 5 avril 2006), l’auteur dénonce les cris racistes contre les joueurs africains dans les stades européens, rappelle que l’Afrique regorge de talents recherchés par les grands clubs, puis montre que les exigences financières du G14 (14 grands clubs européens) menacent les sélections nationales africaines et le football mondial, sacrifié au profit. Quel est le thème de ce texte ?",
          "options": [
            "Les entraves au football africain",
            "L’histoire des Jeux olympiques",
            "La biographie de Didier Drogba",
            "Les règles du football"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Racisme et exigences financières sont des obstacles au football africain."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q3",
          "type": "mcq",
          "prompt": "Dans un texte sur le football professionnel, que signifie : « le football professionnel a fini par sacrifier l’idéal de Coubertin sur l’autel du dieu argent » ?",
          "options": [
            "Le désir de gagner de l’argent l’emporte sur la passion du jeu et l’esprit sportif",
            "Les stades sont construits à côté des églises",
            "Coubertin a vendu le football aux clubs européens",
            "Les joueurs refusent d’être payés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’« autel du dieu argent » : l’argent est adoré comme un dieu, au détriment de l’idéal sportif."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q4",
          "type": "mcq",
          "prompt": "En quelle année Pierre de Coubertin a-t-il fondé le Comité international olympique (CIO) ?",
          "options": [
            "En 1894",
            "En 1896",
            "En 1900",
            "En 1924"
          ],
          "correctAnswerIndex": 0,
          "explanation": "CIO fondé en 1894 ; premiers Jeux modernes en 1896 à Athènes."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q5",
          "type": "mcq",
          "prompt": "À quel poste jouait Thierry Henry, joueur vedette d’Arsenal cité dans le texte « Foot africain : danger ! » ?",
          "options": [
            "Attaquant",
            "Gardien de but",
            "Défenseur central",
            "Il n’était pas footballeur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Thierry Henry était attaquant ; le document le présente à tort comme milieu de terrain."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q6",
          "type": "mcq",
          "prompt": "Dans « Le livre est fait pour être publié » (Michel Tournier, Le Vol du vampire, 1981), l’auteur constate que certains écrivains écrivent pour eux seuls, « comme ils respirent », sans penser au lecteur ; puis il affirme que lui écrit pour être publié et lu, car un livre non lu n’a qu’une « demi-existence » : le lecteur est l’indispensable collaborateur de l’écrivain. Que signifie l’expression « nombre d’écrivains écrivent comme ils respirent » ?",
          "options": [
            "Certains écrivains écrivent naturellement, pour le seul plaisir d’écrire",
            "Les écrivains écrivent très vite, sans s’arrêter",
            "Les écrivains écrivent sur la respiration",
            "Les écrivains ne peuvent écrire qu’en plein air"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Écrire leur est aussi naturel que respirer : c’est un besoin, pas un projet de publication."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p01_q7",
          "type": "mcq",
          "prompt": "Dans « Le livre est fait pour être publié » (Michel Tournier, Le Vol du vampire, 1981), l’auteur constate que certains écrivains écrivent pour eux seuls, « comme ils respirent », sans penser au lecteur ; puis il affirme que lui écrit pour être publié et lu, car un livre non lu n’a qu’une « demi-existence » : le lecteur est l’indispensable collaborateur de l’écrivain. Quelle est la visée argumentative de ce texte ?",
          "options": [
            "Montrer que le livre n’existe vraiment que lorsqu’il est lu",
            "Montrer que les écrivains doivent garder leurs livres dans un tiroir",
            "Montrer que les livres coûtent trop cher",
            "Montrer que les lecteurs n’ont aucun rôle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un livre non lu n’a qu’une « demi-existence » : il a besoin du lecteur."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_resume_production_ecrite_p02",
      "order": 2,
      "title": "Identifier la situation d’argumentation",
      "summary": "Dégager le thème, la thèse, la structure (titres des paragraphes, séquences) et la visée du texte, puis calculer la longueur du résumé.",
      "conceptExplanation": "- Identifier la situation d’argumentation, c’est dégager le thème, la thèse de l’auteur, la structure du texte (un titre par paragraphe, regroupés en séquences) et la visée argumentative.\n- Texte 1, thème : les entraves au football africain. Thèse : le football africain, riche en talents et en plein essor, est menacé par le racisme et par les exigences financières des grands clubs européens (le document la résume ainsi : « le football africain émerge malgré les difficultés »).\n- Structure du texte 1 : huit paragraphes, du constat du racisme (paragraphes 1 à 3) aux menaces financières (paragraphes 4 à 8).\n- Texte 2, thème : la publication du livre. Thèse : l’existence du livre passe par sa publication et sa lecture. Structure : séquence 1 (paragraphe 1), écrire pour soi ; séquence 2 (paragraphes 2 à 4), le livre n’existe que publié et lu.\n- Longueur du résumé : au quart du texte, avec une marge de plus ou moins 10 %. Texte 1 (730 mots) : environ 182 mots, entre 164 et 201. Texte 2 (610 mots) : environ 152 mots, entre 137 et 168.\n- Corrections du document : au paragraphe 4, il faut parler d’une « pépinière de talents » (le mot « faitière » ne convient pas) ; le titre du paragraphe 8 se dit plus clairement : « le profit financier passe avant l’avenir du football mondial ».",
      "keyRule": "Situation d’argumentation = thème + thèse + structure (un titre par paragraphe) + visée. Résumé = un quart du texte, plus ou moins 10 %.",
      "formulas": [],
      "workedExample": {
        "title": "Évaluation corrigée : situation d’argumentation du texte 2",
        "statement": "Dans « Le livre est fait pour être publié » (Michel Tournier, Le Vol du vampire, 1981), l’auteur constate que certains écrivains écrivent pour eux seuls, « comme ils respirent », sans penser au lecteur ; puis il affirme que lui écrit pour être publié et lu, car un livre non lu n’a qu’une « demi-existence » : le lecteur est l’indispensable collaborateur de l’écrivain.",
        "methodSteps": [
          "Thème : la publication du livre.",
          "Thèse : l’existence du livre passe par sa publication et sa lecture.",
          "Structure : séquence 1 (paragraphe 1) l’écriture pour le plaisir de l’auteur ; séquence 2 (paragraphes 2 à 4) sortir de l’anonymat par la publication, puis publication et lecture indispensables à l’existence du livre.",
          "Visée : le livre n’a d’existence que lorsqu’il est mis à la disposition du lecteur."
        ],
        "conclusion": "Le résumé suivra ces deux séquences en environ 152 mots."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Situation d’argumentation",
          "stepTheme": "Quatre éléments",
          "stepTitle": "Que faut-il dégager ?",
          "paragraphText": "Identifier la **situation d’argumentation**, c’est dégager le **thème**, la **thèse** de l’auteur, la **structure** du texte (un titre par paragraphe) et la **visée argumentative**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q1",
            "type": "mcq",
            "prompt": "Qu’identifie-t-on lorsqu’on dégage la situation d’argumentation d’un texte ?",
            "options": [
              "Le thème, la thèse, la structure et la visée argumentative",
              "Les fautes d’orthographe du texte",
              "La biographie complète de l’auteur",
              "Le nombre de phrases interrogatives"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ces quatre éléments préparent le résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "La thèse",
          "stepTheme": "Texte 1",
          "stepTitle": "La thèse du texte « Foot africain : danger ! »",
          "paragraphText": "Le titre « danger ! » l’annonce : riche en talents et en plein essor, **le football africain est menacé** par le **racisme** et par les **exigences financières** des grands clubs européens. Le document résume : « le football africain émerge malgré les difficultés ».",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q2",
            "type": "mcq",
            "prompt": "Dans le texte « Foot africain : danger ! » (Alphonse Boolamou de Ligouri, Stades d’Afrique n° 31, 5 avril 2006), l’auteur dénonce les cris racistes contre les joueurs africains dans les stades européens, rappelle que l’Afrique regorge de talents recherchés par les grands clubs, puis montre que les exigences financières du G14 (14 grands clubs européens) menacent les sélections nationales africaines et le football mondial, sacrifié au profit. Quelle formulation rend le mieux la thèse de l’auteur ?",
            "options": [
              "Riche en talents, le football africain est menacé par le racisme et par l’argent des grands clubs européens",
              "Le football africain n’a aucun talent",
              "Les clubs européens aident généreusement les sélections africaines",
              "Le racisme a disparu des stades européens"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le texte associe l’essor des talents africains et les dangers qui les menacent."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Titrer les paragraphes",
          "stepTheme": "Structure",
          "stepTitle": "Donner un titre à chaque paragraphe",
          "paragraphText": "Pour dégager la **structure**, on donne à chaque paragraphe un **titre** court qui résume son idée principale ; on regroupe ensuite les paragraphes en séquences.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q3",
            "type": "mcq",
            "prompt": "Le premier paragraphe d’un texte dit : « Des footballeurs professionnels noirs continuent d’être traqués, humiliés… cris, sifflets, quolibets et injures… mimant des cris de singe… Eto’o, Ronaldinho, Thierry Henry, Drogba… tous ont fait les frais de ces bêtises humaines. » Quel titre lui convient ?",
            "options": [
              "Constat du racisme subi par les footballeurs noirs",
              "Les exigences financières du G14",
              "La baisse du niveau des sélections africaines",
              "La création des Jeux olympiques"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le paragraphe décrit les actes racistes contre les joueurs noirs."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Structure du texte « Foot africain : danger ! »",
            "caption": "Un titre par paragraphe : c’est la base du résumé (titres corrigés aux paragraphes 4 et 8).",
            "tableData": {
              "headers": [
                "Paragraphe",
                "Titre"
              ],
              "rows": [
                [
                  "1",
                  "Constat du racisme subi par les footballeurs africains"
                ],
                [
                  "2",
                  "L’impunité des auteurs de ces actes"
                ],
                [
                  "3",
                  "Questionnement sur les raisons de ces attaques"
                ],
                [
                  "4",
                  "Le football africain, pépinière de talents"
                ],
                [
                  "5",
                  "Les exigences financières du G14 face aux difficultés du football africain"
                ],
                [
                  "6",
                  "La menace sur la libération des joueurs pour les sélections"
                ],
                [
                  "7",
                  "La baisse du niveau des sélections privées de leurs professionnels"
                ],
                [
                  "8",
                  "Le profit financier passe avant l’avenir du football mondial"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Le mot juste",
          "stepTheme": "Correction",
          "stepTitle": "Une « pépinière » de talents",
          "paragraphText": "Le document titre le paragraphe 4 « football africain, **faitière** de talents » : ce mot ne convient pas. Pour un lieu qui produit en abondance des talents, on dit une **pépinière** de talents.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q4",
            "type": "mcq",
            "prompt": "Quel mot désigne un lieu qui produit en abondance des talents, comme le football africain selon le paragraphe 4 du texte ?",
            "options": [
              "Une pépinière",
              "Une faîtière",
              "Une gouttière",
              "Une frontière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Pépinière » : au sens propre, lieu où l’on fait pousser de jeunes plants ; au figuré, lieu qui forme des talents."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Séquences",
          "stepTheme": "Texte 2",
          "stepTitle": "Les deux séquences du texte de Michel Tournier",
          "paragraphText": "Le texte de Michel Tournier se divise en **deux séquences** : le paragraphe 1 (certains écrivent pour eux seuls), puis les paragraphes 2 à 4 (le livre n’existe que publié et lu).",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q5",
            "type": "mcq",
            "prompt": "Dans « Le livre est fait pour être publié » (Michel Tournier, Le Vol du vampire, 1981), l’auteur constate que certains écrivains écrivent pour eux seuls, « comme ils respirent », sans penser au lecteur ; puis il affirme que lui écrit pour être publié et lu, car un livre non lu n’a qu’une « demi-existence » : le lecteur est l’indispensable collaborateur de l’écrivain. Comment ce texte de quatre paragraphes se structure-t-il ?",
            "options": [
              "Séquence 1 (paragraphe 1) : écrire pour soi ; séquence 2 (paragraphes 2 à 4) : le livre n’existe que publié et lu",
              "Une seule séquence sur l’histoire de l’imprimerie",
              "Séquence 1 : le football ; séquence 2 : le racisme",
              "Quatre séquences sans lien entre elles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’auteur expose d’abord la position qu’il conteste, puis la sienne."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Longueur du résumé",
          "stepTheme": "Au quart, ±10 %",
          "stepTitle": "Calculer la longueur du résumé",
          "paragraphText": "Le résumé se fait **au quart** du texte, avec une marge de **plus ou moins 10 %**. Pour 730 mots : 730 ÷ 4 ≈ 182 mots, donc entre environ 164 et 201 mots.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q6",
            "type": "mcq",
            "prompt": "Un texte compte 730 mots. Le résumé doit en faire le quart, avec une marge de plus ou moins 10 %. Quelle longueur est acceptable ?",
            "options": [
              "Entre environ 164 et 201 mots",
              "Exactement 730 mots",
              "Entre 50 et 70 mots",
              "Entre 300 et 365 mots"
            ],
            "correctAnswerIndex": 0,
            "explanation": "730 ÷ 4 ≈ 182 ; 10 % de 182 ≈ 18 : de 164 à 201 mots."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Thèse",
          "stepTheme": "Texte 2",
          "stepTitle": "La thèse de Michel Tournier",
          "paragraphText": "Pour Michel Tournier, **l’existence du livre passe par sa publication et sa lecture** : le lecteur est l’« indispensable collaborateur » de l’écrivain.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q7",
            "type": "mcq",
            "prompt": "Dans « Le livre est fait pour être publié » (Michel Tournier, Le Vol du vampire, 1981), l’auteur constate que certains écrivains écrivent pour eux seuls, « comme ils respirent », sans penser au lecteur ; puis il affirme que lui écrit pour être publié et lu, car un livre non lu n’a qu’une « demi-existence » : le lecteur est l’indispensable collaborateur de l’écrivain. Quelle est la thèse de l’auteur ?",
            "options": [
              "L’existence du livre passe par sa publication et sa lecture",
              "Les vrais génies ne publient jamais",
              "Il faut écrire sans penser au lecteur",
              "Les lettres anonymes sont utiles aux écrivains"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Michel Tournier se range parmi les écrivains qui écrivent pour être publiés et lus."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q1",
          "type": "mcq",
          "prompt": "Qu’identifie-t-on lorsqu’on dégage la situation d’argumentation d’un texte ?",
          "options": [
            "Le thème, la thèse, la structure et la visée argumentative",
            "Les fautes d’orthographe du texte",
            "La biographie complète de l’auteur",
            "Le nombre de phrases interrogatives"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ces quatre éléments préparent le résumé."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q2",
          "type": "mcq",
          "prompt": "Dans le texte « Foot africain : danger ! » (Alphonse Boolamou de Ligouri, Stades d’Afrique n° 31, 5 avril 2006), l’auteur dénonce les cris racistes contre les joueurs africains dans les stades européens, rappelle que l’Afrique regorge de talents recherchés par les grands clubs, puis montre que les exigences financières du G14 (14 grands clubs européens) menacent les sélections nationales africaines et le football mondial, sacrifié au profit. Quelle formulation rend le mieux la thèse de l’auteur ?",
          "options": [
            "Riche en talents, le football africain est menacé par le racisme et par l’argent des grands clubs européens",
            "Le football africain n’a aucun talent",
            "Les clubs européens aident généreusement les sélections africaines",
            "Le racisme a disparu des stades européens"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le texte associe l’essor des talents africains et les dangers qui les menacent."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q3",
          "type": "mcq",
          "prompt": "Le premier paragraphe d’un texte dit : « Des footballeurs professionnels noirs continuent d’être traqués, humiliés… cris, sifflets, quolibets et injures… mimant des cris de singe… Eto’o, Ronaldinho, Thierry Henry, Drogba… tous ont fait les frais de ces bêtises humaines. » Quel titre lui convient ?",
          "options": [
            "Constat du racisme subi par les footballeurs noirs",
            "Les exigences financières du G14",
            "La baisse du niveau des sélections africaines",
            "La création des Jeux olympiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le paragraphe décrit les actes racistes contre les joueurs noirs."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q4",
          "type": "mcq",
          "prompt": "Quel mot désigne un lieu qui produit en abondance des talents, comme le football africain selon le paragraphe 4 du texte ?",
          "options": [
            "Une pépinière",
            "Une faîtière",
            "Une gouttière",
            "Une frontière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Pépinière » : au sens propre, lieu où l’on fait pousser de jeunes plants ; au figuré, lieu qui forme des talents."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q5",
          "type": "mcq",
          "prompt": "Dans « Le livre est fait pour être publié » (Michel Tournier, Le Vol du vampire, 1981), l’auteur constate que certains écrivains écrivent pour eux seuls, « comme ils respirent », sans penser au lecteur ; puis il affirme que lui écrit pour être publié et lu, car un livre non lu n’a qu’une « demi-existence » : le lecteur est l’indispensable collaborateur de l’écrivain. Comment ce texte de quatre paragraphes se structure-t-il ?",
          "options": [
            "Séquence 1 (paragraphe 1) : écrire pour soi ; séquence 2 (paragraphes 2 à 4) : le livre n’existe que publié et lu",
            "Une seule séquence sur l’histoire de l’imprimerie",
            "Séquence 1 : le football ; séquence 2 : le racisme",
            "Quatre séquences sans lien entre elles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’auteur expose d’abord la position qu’il conteste, puis la sienne."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q6",
          "type": "mcq",
          "prompt": "Un texte compte 730 mots. Le résumé doit en faire le quart, avec une marge de plus ou moins 10 %. Quelle longueur est acceptable ?",
          "options": [
            "Entre environ 164 et 201 mots",
            "Exactement 730 mots",
            "Entre 50 et 70 mots",
            "Entre 300 et 365 mots"
          ],
          "correctAnswerIndex": 0,
          "explanation": "730 ÷ 4 ≈ 182 ; 10 % de 182 ≈ 18 : de 164 à 201 mots."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p02_q7",
          "type": "mcq",
          "prompt": "Dans « Le livre est fait pour être publié » (Michel Tournier, Le Vol du vampire, 1981), l’auteur constate que certains écrivains écrivent pour eux seuls, « comme ils respirent », sans penser au lecteur ; puis il affirme que lui écrit pour être publié et lu, car un livre non lu n’a qu’une « demi-existence » : le lecteur est l’indispensable collaborateur de l’écrivain. Quelle est la thèse de l’auteur ?",
          "options": [
            "L’existence du livre passe par sa publication et sa lecture",
            "Les vrais génies ne publient jamais",
            "Il faut écrire sans penser au lecteur",
            "Les lettres anonymes sont utiles aux écrivains"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Michel Tournier se range parmi les écrivains qui écrivent pour être publiés et lus."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_resume_production_ecrite_p03",
      "order": 3,
      "title": "Sélectionner les idées essentielles et les enchaîner",
      "summary": "Garder les idées indispensables au raisonnement, éliminer exemples et anecdotes, repérer les liens logiques entre les idées.",
      "conceptExplanation": "- Une idée essentielle est une idée indispensable pour comprendre le raisonnement de l’auteur : la thèse, les arguments, les conclusions.\n- On élimine ce qui illustre ou répète : les exemples (noms de joueurs, de clubs), les anecdotes, les énumérations, les citations, les images.\n- Méthode : on travaille paragraphe par paragraphe et on relève les phrases qui portent l’idée.\n- Enchaînement logique : on repère les relations entre les idées (opposition, cause, conséquence, concession) pour les garder dans le résumé à l’aide de connecteurs (mais, car, donc, pourtant, ainsi…).\n- Texte 1, idées retenues : des footballeurs noirs sont humiliés dans les stades d’Europe pour leur couleur ; ce racisme jouit de l’impunité ; pourquoi viser les vedettes africaines ? L’Afrique a vite réduit son retard dans le football, et ses talents compensent son manque de moyens ; mais l’argent domine le football ; le G14 réclame des compensations pour libérer les joueurs ; les sélections africaines, composées d’expatriés, risquent d’en être privées ; leur niveau baisserait ; ce serait un recul pour le football mondial.\n- Texte 2, idées retenues : certains écrivains écrivent comme ils respirent, sans penser au lecteur ; pourtant on ne les connaît que parce qu’ils ont publié ; les écrivains « artisans » fabriquent un livre pour un public ; le livre est fait pour être publié et lu ; un livre non lu n’existe qu’à moitié ; le lecteur lui donne vie.",
      "keyRule": "Garder la thèse, les arguments et les conclusions ; supprimer exemples, anecdotes, énumérations et images ; noter les liens logiques entre les idées.",
      "formulas": [],
      "workedExample": {
        "title": "Sélectionner dans le paragraphe 4 du texte 1",
        "statement": "« S’il y a un domaine dans lequel l’Afrique a vite réduit l’écart de son retard… c’est bien dans celui du football. Même s’il faut convenir que sur le plan des moyens financiers et structurels, notre continent éprouve encore quelques difficultés… Mais ce déficit semble être relativement comblé par les immenses talents dont regorge le football africain… N’est-ce pas Drogba, Eto’o Fils, Essien et Martins… ? »",
        "methodSteps": [
          "Idée 1 : l’Afrique a vite réduit son retard dans le football.",
          "Idée 2, liée par une concession (« même s’il faut convenir ») : elle manque encore de moyens.",
          "Idée 3, liée par une opposition (« mais ») : ses talents compensent ce manque.",
          "On élimine la question finale qui cite des joueurs : ce sont des exemples."
        ],
        "conclusion": "Trois idées et deux liens logiques à conserver dans le résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Idée essentielle",
          "stepTheme": "Indispensable",
          "stepTitle": "Qu’est-ce qu’une idée essentielle ?",
          "paragraphText": "Une **idée essentielle** est indispensable pour comprendre le **raisonnement** de l’auteur : sa thèse, ses arguments, ses conclusions. Sans elle, le raisonnement serait incomplet.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q1",
            "type": "mcq",
            "prompt": "Dans un texte argumentatif, qu’appelle-t-on une idée essentielle ?",
            "options": [
              "Une idée indispensable pour comprendre le raisonnement de l’auteur",
              "Un exemple frappant tiré de l’actualité",
              "Une phrase qui contient beaucoup de mots difficiles",
              "La première phrase de chaque paragraphe, toujours"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On garde ce qui porte le raisonnement, pas ce qui l’illustre."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepBadge": "Les exemples",
          "stepTheme": "À éliminer",
          "stepTitle": "Les noms de joueurs sont des exemples",
          "paragraphText": "Les **exemples** (Samuel Eto’o, Ronaldinho, Thierry Henry, Didier Drogba…), les anecdotes et les énumérations **illustrent** une idée : on les **élimine** dans le résumé.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q2",
            "type": "mcq",
            "prompt": "Dans le texte « Foot africain : danger ! » (Alphonse Boolamou de Ligouri, Stades d’Afrique n° 31, 5 avril 2006), l’auteur dénonce les cris racistes contre les joueurs africains dans les stades européens, rappelle que l’Afrique regorge de talents recherchés par les grands clubs, puis montre que les exigences financières du G14 (14 grands clubs européens) menacent les sélections nationales africaines et le football mondial, sacrifié au profit. Dans le premier paragraphe, l’auteur cite Samuel Eto’o, Ronaldinho, Thierry Henry et Didier Drogba, victimes de cris racistes. Que faut-il faire de cette liste dans le résumé ?",
            "options": [
              "L’éliminer, car ce sont des exemples",
              "La recopier en entier",
              "Ajouter d’autres joueurs à la liste",
              "En faire le titre du résumé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les exemples illustrent l’idée « des vedettes africaines sont victimes de racisme » ; seule l’idée reste."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Paragraphe 1",
          "stepTheme": "Sélection",
          "stepTitle": "Trouver l’idée essentielle du paragraphe 1",
          "paragraphText": "Dans le paragraphe 1, la phrase qui porte l’idée est : « Des footballeurs professionnels noirs continuent d’être traqués, humiliés. » Le reste décrit et illustre.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q3",
            "type": "mcq",
            "prompt": "Voici des phrases du premier paragraphe du texte « Foot africain : danger ! ». Laquelle exprime une idée essentielle ?",
            "options": [
              "« Des footballeurs professionnels noirs continuent d’être traqués, humiliés. »",
              "« Le Brésilien Ronaldinho, phénoménal joueur au club catalan coéquipier de Eto’o… »",
              "« …l’Ivoirien Drogba Didier, l’Éléphant voltigeur et renard des surfaces… »",
              "« Et la liste des infortunes n’est pas exhaustive. »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les autres phrases donnent des exemples ou commentent la liste."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Paragraphe 4",
          "stepTheme": "Sélection",
          "stepTitle": "Une idée essentielle du paragraphe 4",
          "paragraphText": "Dans le paragraphe 4, l’idée « **ce déficit semble être relativement comblé par les immenses talents** dont regorge le football africain » est essentielle ; la question qui cite Drogba, Eto’o, Essien et Martins n’est qu’un exemple.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q4",
            "type": "mcq",
            "prompt": "Dans le paragraphe du texte « Foot africain : danger ! » qui parle des talents africains, quelle phrase faut-il garder pour le résumé ?",
            "options": [
              "« Mais ce déficit semble être relativement comblé par les immenses talents dont regorge le football africain. »",
              "« N’est-ce pas Drogba, Eto’o Fils, Essien et Martins, de purs produits du football africain ? »",
              "« C’est la ruée vers les perles noires qu’on arrache à prix d’or. »",
              "« …dont les transferts ont frôlé la folie ? »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle exprime l’argument ; les autres phrases l’illustrent par des images ou des exemples."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Lien logique",
          "stepTheme": "Opposition",
          "stepTitle": "Repérer le lien entre deux idées",
          "paragraphText": "Il faut garder les **liens logiques** entre les idées. « Notre continent éprouve encore quelques difficultés financières… **Mais** ce déficit semble être comblé par ses talents » : c’est une **opposition**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q5",
            "type": "mcq",
            "prompt": "Dans le texte « Foot africain : danger ! », quel lien logique unit « l’Afrique éprouve encore des difficultés financières » et « mais ce déficit est comblé par les talents de ses joueurs » ?",
            "options": [
              "Une opposition",
              "Une cause",
              "Une addition",
              "Une comparaison"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Mais » oppose le manque de moyens et la richesse en talents."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Lien logique",
          "stepTheme": "Conséquence",
          "stepTitle": "Un enchaînement de conséquences",
          "paragraphText": "« Les sélections africaines ne pourraient plus libérer leurs joueurs expatriés. **Toute chose qui** aurait une incidence négative sur leur niveau. » L’expression « toute chose qui » introduit une **conséquence**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q6",
            "type": "mcq",
            "prompt": "Dans le texte « Foot africain : danger ! », la phrase « Toute chose qui aurait une incidence négative sur le niveau des sélections nationales africaines » suit l’idée que les pays africains ne pourraient plus obtenir la libération de leurs joueurs. Quel lien logique exprime-t-elle ?",
            "options": [
              "Une conséquence",
              "Une opposition",
              "Une concession",
              "Une hypothèse sans lien"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La baisse de niveau est la conséquence de l’absence des joueurs professionnels."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Texte 2",
          "stepTheme": "Anecdote",
          "stepTitle": "Une anecdote à éliminer chez Michel Tournier",
          "paragraphText": "Dans le texte de Michel Tournier, l’**anecdote** du lecteur qui renvoie son roman déchiré (« Cinquante francs de fichus ! ») illustre l’idée de l’écrivain-artisan : on l’**élimine** dans le résumé.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q7",
            "type": "mcq",
            "prompt": "Dans « Le livre est fait pour être publié » (Michel Tournier, Le Vol du vampire, 1981), l’auteur constate que certains écrivains écrivent pour eux seuls, « comme ils respirent », sans penser au lecteur ; puis il affirme que lui écrit pour être publié et lu, car un livre non lu n’a qu’une « demi-existence » : le lecteur est l’indispensable collaborateur de l’écrivain. Quel passage de ce texte est une anecdote à éliminer dans le résumé ?",
            "options": [
              "Le lecteur qui renvoie le roman Les Météores déchiré avec « Cinquante francs de fichus ! »",
              "« Le livre est fait pour être publié, lancé, acheté, lu. »",
              "« Un livre écrit, mais non lu, n’existe pleinement pas. »",
              "« Nombre d’écrivains écrivent comme ils respirent. »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les trois autres passages expriment des idées essentielles."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q1",
          "type": "mcq",
          "prompt": "Dans un texte argumentatif, qu’appelle-t-on une idée essentielle ?",
          "options": [
            "Une idée indispensable pour comprendre le raisonnement de l’auteur",
            "Un exemple frappant tiré de l’actualité",
            "Une phrase qui contient beaucoup de mots difficiles",
            "La première phrase de chaque paragraphe, toujours"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On garde ce qui porte le raisonnement, pas ce qui l’illustre."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q2",
          "type": "mcq",
          "prompt": "Dans le texte « Foot africain : danger ! » (Alphonse Boolamou de Ligouri, Stades d’Afrique n° 31, 5 avril 2006), l’auteur dénonce les cris racistes contre les joueurs africains dans les stades européens, rappelle que l’Afrique regorge de talents recherchés par les grands clubs, puis montre que les exigences financières du G14 (14 grands clubs européens) menacent les sélections nationales africaines et le football mondial, sacrifié au profit. Dans le premier paragraphe, l’auteur cite Samuel Eto’o, Ronaldinho, Thierry Henry et Didier Drogba, victimes de cris racistes. Que faut-il faire de cette liste dans le résumé ?",
          "options": [
            "L’éliminer, car ce sont des exemples",
            "La recopier en entier",
            "Ajouter d’autres joueurs à la liste",
            "En faire le titre du résumé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les exemples illustrent l’idée « des vedettes africaines sont victimes de racisme » ; seule l’idée reste."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q3",
          "type": "mcq",
          "prompt": "Voici des phrases du premier paragraphe du texte « Foot africain : danger ! ». Laquelle exprime une idée essentielle ?",
          "options": [
            "« Des footballeurs professionnels noirs continuent d’être traqués, humiliés. »",
            "« Le Brésilien Ronaldinho, phénoménal joueur au club catalan coéquipier de Eto’o… »",
            "« …l’Ivoirien Drogba Didier, l’Éléphant voltigeur et renard des surfaces… »",
            "« Et la liste des infortunes n’est pas exhaustive. »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les autres phrases donnent des exemples ou commentent la liste."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q4",
          "type": "mcq",
          "prompt": "Dans le paragraphe du texte « Foot africain : danger ! » qui parle des talents africains, quelle phrase faut-il garder pour le résumé ?",
          "options": [
            "« Mais ce déficit semble être relativement comblé par les immenses talents dont regorge le football africain. »",
            "« N’est-ce pas Drogba, Eto’o Fils, Essien et Martins, de purs produits du football africain ? »",
            "« C’est la ruée vers les perles noires qu’on arrache à prix d’or. »",
            "« …dont les transferts ont frôlé la folie ? »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle exprime l’argument ; les autres phrases l’illustrent par des images ou des exemples."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q5",
          "type": "mcq",
          "prompt": "Dans le texte « Foot africain : danger ! », quel lien logique unit « l’Afrique éprouve encore des difficultés financières » et « mais ce déficit est comblé par les talents de ses joueurs » ?",
          "options": [
            "Une opposition",
            "Une cause",
            "Une addition",
            "Une comparaison"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Mais » oppose le manque de moyens et la richesse en talents."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q6",
          "type": "mcq",
          "prompt": "Dans le texte « Foot africain : danger ! », la phrase « Toute chose qui aurait une incidence négative sur le niveau des sélections nationales africaines » suit l’idée que les pays africains ne pourraient plus obtenir la libération de leurs joueurs. Quel lien logique exprime-t-elle ?",
          "options": [
            "Une conséquence",
            "Une opposition",
            "Une concession",
            "Une hypothèse sans lien"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La baisse de niveau est la conséquence de l’absence des joueurs professionnels."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p03_q7",
          "type": "mcq",
          "prompt": "Dans « Le livre est fait pour être publié » (Michel Tournier, Le Vol du vampire, 1981), l’auteur constate que certains écrivains écrivent pour eux seuls, « comme ils respirent », sans penser au lecteur ; puis il affirme que lui écrit pour être publié et lu, car un livre non lu n’a qu’une « demi-existence » : le lecteur est l’indispensable collaborateur de l’écrivain. Quel passage de ce texte est une anecdote à éliminer dans le résumé ?",
          "options": [
            "Le lecteur qui renvoie le roman Les Météores déchiré avec « Cinquante francs de fichus ! »",
            "« Le livre est fait pour être publié, lancé, acheté, lu. »",
            "« Un livre écrit, mais non lu, n’existe pleinement pas. »",
            "« Nombre d’écrivains écrivent comme ils respirent. »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les trois autres passages expriment des idées essentielles."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_resume_production_ecrite_p04",
      "order": 4,
      "title": "Reformuler les idées essentielles",
      "summary": "Redire chaque idée essentielle avec ses propres mots, fidèlement, sans recopier ni commenter.",
      "conceptExplanation": "- Reformuler, c’est redire chaque idée essentielle avec ses propres mots : on ne recopie pas les phrases du texte.\n- La reformulation doit rester fidèle : ne rien ajouter, ne rien exagérer, ne pas donner son avis.\n- On garde l’ordre des idées et le point de vue de l’auteur : on écrit comme lui, sans « l’auteur affirme que ».\n- Procédés utiles : synonymes, nominalisation, changement de construction, mot générique qui remplace une énumération (« cris, sifflets, quolibets et injures » devient « insultes racistes »).\n- Texte 1, reformulations : des footballeurs noirs sont humiliés dans les stades d’Europe à cause de leur couleur ; ce racisme contredit l’esprit fraternel du football et reste impuni ; les principales victimes sont les vedettes africaines ; l’Afrique a presque rattrapé l’Europe dans le football, ses talents compensant son manque de moyens ; dans un football devenu mercantile règne l’hypocrisie ; racisme et exigences financières des grands clubs coïncident ; les pays africains ne pourraient pas payer pour libérer leurs joueurs ; leurs sélections, réduites aux joueurs locaux, perdraient leur niveau ; le football mondial reculerait.\n- Texte 2, reformulations : certains auteurs écrivent par besoin vital ; leurs ouvrages, restés dans les tiroirs, les laissent méconnus ; la publication fait sortir les auteurs de l’anonymat ; certains cherchent la reconnaissance par la publication, même si le lecteur est parfois déçu ; tout livre est destiné au public ; c’est le lecteur qui lui donne vie.\n- Corrections du document : « dans le domaine du football, l’Afrique égale l’Europe » exagère la pensée de l’auteur (il dit qu’elle a « vite réduit l’écart de son retard ») ; on écrit « si elles devaient reposer » (et non « si elles devraient »).",
      "keyRule": "Reformuler = ses propres mots, même idée, même ordre, même point de vue que l’auteur ; rien d’ajouté, rien d’exagéré.",
      "formulas": [],
      "workedExample": {
        "title": "Évaluation corrigée : reformuler les idées du texte 2",
        "statement": "Dans « Le livre est fait pour être publié » (Michel Tournier, Le Vol du vampire, 1981), l’auteur constate que certains écrivains écrivent pour eux seuls, « comme ils respirent », sans penser au lecteur ; puis il affirme que lui écrit pour être publié et lu, car un livre non lu n’a qu’une « demi-existence » : le lecteur est l’indispensable collaborateur de l’écrivain.",
        "methodSteps": [
          "Paragraphe 1 : certains auteurs écrivent parce que cela leur est vital ; leurs ouvrages restés dans les tiroirs les laissent méconnus.",
          "Paragraphe 2 : la publication fait sortir les auteurs de l’anonymat.",
          "Paragraphe 3 : certains auteurs recherchent la reconnaissance par la publication, même si le lecteur est parfois déçu.",
          "Paragraphe 4 : tout livre est destiné au public ; c’est le lecteur qui lui donne vie et le valorise."
        ],
        "conclusion": "Ces reformulations, reliées par des connecteurs, formeront le résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Reformuler",
          "stepTheme": "Ses propres mots",
          "stepTitle": "Qu’est-ce que reformuler une idée ?",
          "paragraphText": "**Reformuler**, c’est redire une idée essentielle **avec ses propres mots**, sans recopier les phrases du texte et sans en changer le sens.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p04_q1",
            "type": "mcq",
            "prompt": "Dans le résumé de texte argumentatif, que signifie reformuler une idée essentielle ?",
            "options": [
              "La redire avec ses propres mots sans en changer le sens",
              "La recopier entre guillemets",
              "La commenter en donnant son avis",
              "La remplacer par un exemple"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé ne recopie pas le texte : il le redit autrement, fidèlement."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Mot générique",
          "stepTheme": "Résumer une énumération",
          "stepTitle": "Remplacer une énumération par un mot générique",
          "paragraphText": "Une **énumération** se remplace par un **mot générique** qui la résume : « des cris, sifflets, quolibets et injures, mimant des cris et grimaces de singe » devient « des **insultes racistes** ».",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p04_q2",
            "type": "mcq",
            "prompt": "Dans le texte « Foot africain : danger ! », comment reformuler brièvement : « des cris, sifflets, quolibets et injures, mimant des cris et grimaces de singe, fusent… » ?",
            "options": [
              "Des insultes racistes",
              "Des encouragements bruyants",
              "Des chants de victoire",
              "Des applaudissements"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un seul groupe nominal regroupe tous les éléments de l’énumération."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Paragraphe 1",
          "stepTheme": "Texte 1",
          "stepTitle": "Reformuler l’idée du paragraphe 1",
          "paragraphText": "L’idée du paragraphe 1 (des joueurs noirs humiliés dans les stades d’Europe, leur « seul crime » étant leur couleur) se reformule : « Des footballeurs noirs sont **humiliés** dans les stades d’Europe **à cause de la couleur de leur peau**. »",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p04_q3",
            "type": "mcq",
            "prompt": "Dans le texte « Foot africain : danger ! » (Alphonse Boolamou de Ligouri, Stades d’Afrique n° 31, 5 avril 2006), l’auteur dénonce les cris racistes contre les joueurs africains dans les stades européens, rappelle que l’Afrique regorge de talents recherchés par les grands clubs, puis montre que les exigences financières du G14 (14 grands clubs européens) menacent les sélections nationales africaines et le football mondial, sacrifié au profit. Quelle reformulation de l’idée du premier paragraphe (des joueurs noirs « traqués, humiliés » dans les stades d’Europe, dont « le seul crime est d’être des gens de couleur ») est juste ?",
            "options": [
              "Des footballeurs noirs sont humiliés dans les stades d’Europe à cause de leur couleur de peau",
              "Les footballeurs noirs jouent mal dans les stades d’Europe",
              "Les supporters européens adorent les joueurs noirs",
              "Des footballeurs noirs ont commis des crimes en Europe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Leur seul crime est d’être des gens de couleur » : c’est une ironie, ils n’ont commis aucun crime."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Fidélité",
          "stepTheme": "Ne pas exagérer",
          "stepTitle": "La reformulation ne doit pas exagérer",
          "paragraphText": "Le corrigé propose « dans le domaine du football, l’**Afrique égale** l’Europe » : c’est **exagéré**. L’auteur dit qu’elle a « vite **réduit l’écart de son retard** », c’est-à-dire qu’elle a **presque rattrapé** l’Europe, malgré son manque de moyens.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p04_q4",
            "type": "mcq",
            "prompt": "L’auteur écrit : « S’il y a un domaine dans lequel l’Afrique a vite réduit l’écart de son retard par rapport aux autres continents, notamment l’Europe, c’est bien dans celui du football. » Quelle reformulation est fidèle ?",
            "options": [
              "Dans le football, l’Afrique a presque rattrapé l’Europe",
              "Dans le football, l’Afrique a largement dépassé l’Europe",
              "Dans le football, l’Afrique égale exactement l’Europe en tout",
              "Dans le football, l’Afrique a pris encore plus de retard"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Réduire l’écart » n’est pas « égaler » : la reformulation doit garder la nuance."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Point de vue",
          "stepTheme": "Pas de « l’auteur dit »",
          "stepTitle": "Écrire du point de vue de l’auteur",
          "paragraphText": "Le résumé se fait **du point de vue de l’auteur**, dans l’ordre de ses idées : on n’écrit pas « l’auteur affirme que… », on redit directement ses idées.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p04_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces phrases convient le mieux dans un résumé du texte « Foot africain : danger ! » ?",
            "options": [
              "« Les vedettes africaines sont les principales victimes de ce racisme. »",
              "« L’auteur affirme ensuite que les vedettes africaines sont visées. »",
              "« Je pense que l’auteur a raison de parler des vedettes. »",
              "« Dans le paragraphe 3, le journaliste pose une question. »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pas de « l’auteur affirme », pas d’avis personnel, pas de référence aux paragraphes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Paragraphe 2",
          "stepTheme": "Texte 1",
          "stepTitle": "Reformuler « l’indulgence, voire l’impunité »",
          "paragraphText": "« Le hic, c’est l’indulgence, voire l’impunité dont semblent jouir ces fauteurs de trouble » : les auteurs de ces actes racistes **ne sont pas punis**, les instances du football **restent impassibles**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p04_q6",
            "type": "mcq",
            "prompt": "Dans le texte « Foot africain : danger ! », comment reformuler : « Le hic, c’est l’indulgence, voire l’impunité dont semblent jouir ces fauteurs de trouble d’un autre âge » ?",
            "options": [
              "Les auteurs de ces actes racistes restent impunis",
              "Les supporters racistes sont sévèrement punis",
              "Les joueurs noirs provoquent les supporters",
              "Les stades sont trop vieux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Impunité » : absence de punition."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Texte 2",
          "stepTheme": "Paragraphe 4",
          "stepTitle": "Reformuler la conclusion de Michel Tournier",
          "paragraphText": "Le dernier paragraphe de Michel Tournier (« un livre écrit, mais non lu, n’existe pleinement pas… il se gonfle de la chaleur et des rêves du lecteur ») se reformule : **c’est le lecteur qui donne vie au livre**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p04_q7",
            "type": "mcq",
            "prompt": "Dans « Le livre est fait pour être publié » (Michel Tournier, Le Vol du vampire, 1981), l’auteur constate que certains écrivains écrivent pour eux seuls, « comme ils respirent », sans penser au lecteur ; puis il affirme que lui écrit pour être publié et lu, car un livre non lu n’a qu’une « demi-existence » : le lecteur est l’indispensable collaborateur de l’écrivain. Quelle reformulation rend fidèlement l’idée : « Un livre écrit, mais non lu, n’existe pleinement pas. Il ne possède qu’une demi-existence » ?",
            "options": [
              "C’est le lecteur qui donne vie au livre",
              "Les livres non lus sont les meilleurs",
              "Un livre doit rester dans un tiroir",
              "Le lecteur détruit le livre en le lisant"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans lecteur, le livre n’existe qu’à moitié : le lecteur l’accomplit."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepBadge": "Sans avis",
          "stepTheme": "Neutralité",
          "stepTitle": "Ne pas glisser son avis dans le résumé",
          "paragraphText": "Le résumé **ne contient aucun avis personnel** ni commentaire : on garde seulement les idées de l’auteur. Le débat viendra plus tard, dans la production écrite.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p04_q8",
            "type": "mcq",
            "prompt": "Laquelle de ces phrases n’a pas sa place dans le résumé du texte de Michel Tournier ?",
            "options": [
              "« Je trouve que Michel Tournier exagère beaucoup. »",
              "« La publication fait sortir les auteurs de l’anonymat. »",
              "« Tout livre est destiné au public. »",
              "« C’est le lecteur qui donne vie au livre. »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un avis personnel n’appartient pas au résumé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p04_q1",
          "type": "mcq",
          "prompt": "Dans le résumé de texte argumentatif, que signifie reformuler une idée essentielle ?",
          "options": [
            "La redire avec ses propres mots sans en changer le sens",
            "La recopier entre guillemets",
            "La commenter en donnant son avis",
            "La remplacer par un exemple"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé ne recopie pas le texte : il le redit autrement, fidèlement."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p04_q2",
          "type": "mcq",
          "prompt": "Dans le texte « Foot africain : danger ! », comment reformuler brièvement : « des cris, sifflets, quolibets et injures, mimant des cris et grimaces de singe, fusent… » ?",
          "options": [
            "Des insultes racistes",
            "Des encouragements bruyants",
            "Des chants de victoire",
            "Des applaudissements"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un seul groupe nominal regroupe tous les éléments de l’énumération."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p04_q3",
          "type": "mcq",
          "prompt": "Dans le texte « Foot africain : danger ! » (Alphonse Boolamou de Ligouri, Stades d’Afrique n° 31, 5 avril 2006), l’auteur dénonce les cris racistes contre les joueurs africains dans les stades européens, rappelle que l’Afrique regorge de talents recherchés par les grands clubs, puis montre que les exigences financières du G14 (14 grands clubs européens) menacent les sélections nationales africaines et le football mondial, sacrifié au profit. Quelle reformulation de l’idée du premier paragraphe (des joueurs noirs « traqués, humiliés » dans les stades d’Europe, dont « le seul crime est d’être des gens de couleur ») est juste ?",
          "options": [
            "Des footballeurs noirs sont humiliés dans les stades d’Europe à cause de leur couleur de peau",
            "Les footballeurs noirs jouent mal dans les stades d’Europe",
            "Les supporters européens adorent les joueurs noirs",
            "Des footballeurs noirs ont commis des crimes en Europe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Leur seul crime est d’être des gens de couleur » : c’est une ironie, ils n’ont commis aucun crime."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p04_q4",
          "type": "mcq",
          "prompt": "L’auteur écrit : « S’il y a un domaine dans lequel l’Afrique a vite réduit l’écart de son retard par rapport aux autres continents, notamment l’Europe, c’est bien dans celui du football. » Quelle reformulation est fidèle ?",
          "options": [
            "Dans le football, l’Afrique a presque rattrapé l’Europe",
            "Dans le football, l’Afrique a largement dépassé l’Europe",
            "Dans le football, l’Afrique égale exactement l’Europe en tout",
            "Dans le football, l’Afrique a pris encore plus de retard"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Réduire l’écart » n’est pas « égaler » : la reformulation doit garder la nuance."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p04_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces phrases convient le mieux dans un résumé du texte « Foot africain : danger ! » ?",
          "options": [
            "« Les vedettes africaines sont les principales victimes de ce racisme. »",
            "« L’auteur affirme ensuite que les vedettes africaines sont visées. »",
            "« Je pense que l’auteur a raison de parler des vedettes. »",
            "« Dans le paragraphe 3, le journaliste pose une question. »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pas de « l’auteur affirme », pas d’avis personnel, pas de référence aux paragraphes."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p04_q6",
          "type": "mcq",
          "prompt": "Dans le texte « Foot africain : danger ! », comment reformuler : « Le hic, c’est l’indulgence, voire l’impunité dont semblent jouir ces fauteurs de trouble d’un autre âge » ?",
          "options": [
            "Les auteurs de ces actes racistes restent impunis",
            "Les supporters racistes sont sévèrement punis",
            "Les joueurs noirs provoquent les supporters",
            "Les stades sont trop vieux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Impunité » : absence de punition."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p04_q7",
          "type": "mcq",
          "prompt": "Dans « Le livre est fait pour être publié » (Michel Tournier, Le Vol du vampire, 1981), l’auteur constate que certains écrivains écrivent pour eux seuls, « comme ils respirent », sans penser au lecteur ; puis il affirme que lui écrit pour être publié et lu, car un livre non lu n’a qu’une « demi-existence » : le lecteur est l’indispensable collaborateur de l’écrivain. Quelle reformulation rend fidèlement l’idée : « Un livre écrit, mais non lu, n’existe pleinement pas. Il ne possède qu’une demi-existence » ?",
          "options": [
            "C’est le lecteur qui donne vie au livre",
            "Les livres non lus sont les meilleurs",
            "Un livre doit rester dans un tiroir",
            "Le lecteur détruit le livre en le lisant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans lecteur, le livre n’existe qu’à moitié : le lecteur l’accomplit."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p04_q8",
          "type": "mcq",
          "prompt": "Laquelle de ces phrases n’a pas sa place dans le résumé du texte de Michel Tournier ?",
          "options": [
            "« Je trouve que Michel Tournier exagère beaucoup. »",
            "« La publication fait sortir les auteurs de l’anonymat. »",
            "« Tout livre est destiné au public. »",
            "« C’est le lecteur qui donne vie au livre. »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un avis personnel n’appartient pas au résumé."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_resume_production_ecrite_p05",
      "order": 5,
      "title": "Rédiger le résumé",
      "summary": "Calculer le nombre de mots exigé, enchaîner les idées reformulées avec des connecteurs justes et vérifier la longueur et la fidélité.",
      "conceptExplanation": "- Avant de rédiger, on calcule la longueur : texte de 730 mots ÷ 4 ≈ 183 mots ; marge de 10 % ≈ 18 mots ; le résumé doit compter entre 165 et 201 mots. Texte de 610 mots ÷ 4 ≈ 153 mots ; marge ≈ 15 mots ; entre 137 et 168 mots.\n- On rédige un texte suivi, dans l’ordre des idées de l’auteur, de son point de vue, avec ses propres mots, sans citation, sans exemple et sans avis personnel.\n- Les connecteurs logiques (par ailleurs, malgré, cependant, de plus, ainsi, donc…) rendent visibles les liens entre les idées ; ils doivent correspondre au vrai rapport logique.\n- À la fin, on indique le nombre de mots du résumé.\n- Début du résumé modèle du texte 1 (172 mots en tout, dans la norme) : « Des footballeurs noirs sont humiliés dans les stades d’Europe du simple fait de la couleur de leur peau. Par ailleurs, l’ampleur de ce racisme va à l’encontre de l’esprit de fraternité prôné dans le football. Les instances du football restent impassibles devant cette situation qui vise surtout les vedettes africaines. Malgré la faiblesse de ses infrastructures et de ses moyens, l’Afrique produit de grands talents… »\n- Corrections du document : dans le résumé du texte 1, « Pourtant, cette situation serait préjudiciable… » emploie un connecteur d’opposition là où il faut une conséquence (« Ainsi » ou « Dès lors ») ; le résumé corrigé du texte 2 ne compte que 116 mots, hors de la norme de 137 à 168 mots, et ajoute un jugement absent du texte (« contenu léger »).",
      "keyRule": "Calculer d’abord la longueur (un quart, plus ou moins 10 %), puis rédiger dans l’ordre de l’auteur avec des connecteurs justes, et indiquer le nombre de mots à la fin.",
      "formulas": [],
      "workedExample": {
        "title": "Calcul de la longueur du résumé du texte 1",
        "statement": "Le texte « Foot africain : danger ! » compte 730 mots. Il faut le résumer au quart de son volume, avec une marge de plus ou moins 10 %.",
        "methodSteps": [
          "730 ÷ 4 = 182,5, soit environ 183 mots.",
          "10 % de 183 ≈ 18 mots.",
          "Le résumé doit compter entre 183 − 18 = 165 et 183 + 18 = 201 mots."
        ],
        "conclusion": "Le résumé modèle de 172 mots respecte cette norme."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Longueur",
          "stepTheme": "Texte 1",
          "stepTitle": "Calculer le nombre de mots du résumé",
          "paragraphText": "On divise le nombre de mots du texte par 4, puis on calcule la marge de 10 % : pour 730 mots, 730 ÷ 4 ≈ 183 ; 10 % ≈ 18 ; le résumé compte **entre 165 et 201 mots**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p05_q1",
            "type": "mcq",
            "prompt": "Un texte de 730 mots doit être résumé au quart de son volume, avec une marge de plus ou moins 10 %. Entre combien de mots le résumé doit-il se situer ?",
            "options": [
              "Entre 165 et 201 mots",
              "Entre 100 et 120 mots",
              "Exactement 730 mots",
              "Entre 300 et 400 mots"
            ],
            "correctAnswerIndex": 0,
            "explanation": "730 ÷ 4 ≈ 183 ; 183 − 18 = 165 et 183 + 18 = 201."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Longueur",
          "stepTheme": "Texte 2",
          "stepTitle": "La longueur du résumé du texte de Michel Tournier",
          "paragraphText": "Pour le texte de Michel Tournier (610 mots) : 610 ÷ 4 ≈ 153 mots ; 10 % ≈ 15 mots ; le résumé doit compter **entre 137 et 168 mots**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p05_q2",
            "type": "mcq",
            "prompt": "Le texte de Michel Tournier compte 610 mots. Il faut le résumer au quart de son volume, avec une marge de plus ou moins 10 %. Quelle longueur est acceptable ?",
            "options": [
              "Entre 137 et 168 mots",
              "Entre 100 et 120 mots",
              "Entre 165 et 201 mots",
              "Exactement 610 mots"
            ],
            "correctAnswerIndex": 0,
            "explanation": "610 ÷ 4 ≈ 153 ; 153 − 15 ≈ 137 et 153 + 15 = 168."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "Hors norme",
          "stepTheme": "Correction",
          "stepTitle": "Le résumé corrigé du texte 2 est trop court",
          "paragraphText": "Le document propose pour le texte de Michel Tournier un résumé de **116 mots** : il est **hors norme** (il en faut entre 137 et 168). Un résumé trop court ou trop long est sanctionné.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p05_q3",
            "type": "mcq",
            "prompt": "Un élève propose un résumé de 116 mots pour un texte de 610 mots à résumer au quart de son volume, avec une marge de plus ou moins 10 %. Que faut-il en penser ?",
            "options": [
              "Il est trop court : il doit compter entre 137 et 168 mots",
              "Il est parfait, car plus un résumé est court, mieux c’est",
              "Il est trop long",
              "La longueur n’a aucune importance"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé du document lui-même ne respecte pas la norme : il faut le compléter."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Les règles",
          "stepTheme": "Rédiger",
          "stepTitle": "Les règles de rédaction du résumé",
          "paragraphText": "Le résumé est un **texte suivi** qui respecte l’**ordre** des idées de l’auteur et son **point de vue**, avec des **connecteurs logiques**, sans citation, sans exemple, sans avis personnel. On indique le **nombre de mots** à la fin.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p05_q4",
            "type": "mcq",
            "prompt": "Que faut-il écrire à la fin d’un résumé de texte argumentatif ?",
            "options": [
              "Le nombre de mots du résumé",
              "Son avis sur le texte",
              "La biographie de l’auteur",
              "La liste des exemples supprimés"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le correcteur vérifie ainsi que la longueur est respectée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Connecteur juste",
          "stepTheme": "Correction",
          "stepTitle": "Choisir le bon connecteur",
          "paragraphText": "Le résumé modèle écrit : « …l’incapacité à honorer les revendications des clubs européens. **Pourtant**, cette situation serait préjudiciable aux équipes africaines. » Il ne s’agit pas d’une opposition mais d’une **conséquence** : il faut « **Ainsi** » ou « **Dès lors** ».",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p05_q5",
            "type": "mcq",
            "prompt": "Dans un résumé, une phrase dit que les pays africains ne pourraient pas payer pour libérer leurs joueurs ; la suivante dit que cette situation affaiblirait leurs équipes nationales. Quel connecteur convient entre les deux ?",
            "options": [
              "Ainsi",
              "Pourtant",
              "Au contraire",
              "Bien que"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’affaiblissement des équipes est la conséquence : « ainsi » ; « pourtant » marquerait une opposition."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Fidélité",
          "stepTheme": "Pas de jugement",
          "stepTitle": "Ne rien ajouter au texte",
          "paragraphText": "Le résumé corrigé du texte 2 parle du « **contenu léger** » de certains livres : ce jugement **n’est pas dans le texte**. Michel Tournier dit seulement qu’un lecteur a été déçu. Le résumé ne doit rien ajouter.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p05_q6",
            "type": "mcq",
            "prompt": "Dans « Le livre est fait pour être publié » (Michel Tournier, Le Vol du vampire, 1981), l’auteur constate que certains écrivains écrivent pour eux seuls, « comme ils respirent », sans penser au lecteur ; puis il affirme que lui écrit pour être publié et lu, car un livre non lu n’a qu’une « demi-existence » : le lecteur est l’indispensable collaborateur de l’écrivain. Le texte raconte aussi qu’un lecteur déçu a renvoyé un roman à Michel Tournier. Quelle phrase de résumé reste fidèle au texte ?",
            "options": [
              "Le lecteur est parfois déçu par le livre qu’il a acheté",
              "Les livres de Michel Tournier ont un contenu léger",
              "Tous les lecteurs détestent les romans",
              "Michel Tournier refuse de rembourser ses lecteurs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le texte ne juge pas le contenu des livres : le résumé ne doit rien ajouter."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Ouverture du résumé",
          "stepTheme": "Texte 1",
          "stepTitle": "Bien commencer le résumé du texte 1",
          "paragraphText": "Le résumé commence directement par la **première idée essentielle**, reformulée, sans phrase d’introduction ni « l’auteur dit que » : « Des footballeurs noirs sont humiliés dans les stades d’Europe du simple fait de la couleur de leur peau. »",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p05_q7",
            "type": "mcq",
            "prompt": "Dans le texte « Foot africain : danger ! » (Alphonse Boolamou de Ligouri, Stades d’Afrique n° 31, 5 avril 2006), l’auteur dénonce les cris racistes contre les joueurs africains dans les stades européens, rappelle que l’Afrique regorge de talents recherchés par les grands clubs, puis montre que les exigences financières du G14 (14 grands clubs européens) menacent les sélections nationales africaines et le football mondial, sacrifié au profit. Quelle phrase convient pour commencer le résumé de ce texte ?",
            "options": [
              "« Des footballeurs noirs sont humiliés dans les stades d’Europe du simple fait de la couleur de leur peau. »",
              "« Dans ce texte, l’auteur Alphonse Boolamou de Ligouri parle du football. »",
              "« Samuel Eto’o, Ronaldinho, Thierry Henry et Didier Drogba ont été insultés. »",
              "« Je vais résumer ce texte en 183 mots. »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pas de présentation du texte, pas d’exemples, pas de « je » : on entre directement dans les idées."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p05_q1",
          "type": "mcq",
          "prompt": "Un texte de 730 mots doit être résumé au quart de son volume, avec une marge de plus ou moins 10 %. Entre combien de mots le résumé doit-il se situer ?",
          "options": [
            "Entre 165 et 201 mots",
            "Entre 100 et 120 mots",
            "Exactement 730 mots",
            "Entre 300 et 400 mots"
          ],
          "correctAnswerIndex": 0,
          "explanation": "730 ÷ 4 ≈ 183 ; 183 − 18 = 165 et 183 + 18 = 201."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p05_q2",
          "type": "mcq",
          "prompt": "Le texte de Michel Tournier compte 610 mots. Il faut le résumer au quart de son volume, avec une marge de plus ou moins 10 %. Quelle longueur est acceptable ?",
          "options": [
            "Entre 137 et 168 mots",
            "Entre 100 et 120 mots",
            "Entre 165 et 201 mots",
            "Exactement 610 mots"
          ],
          "correctAnswerIndex": 0,
          "explanation": "610 ÷ 4 ≈ 153 ; 153 − 15 ≈ 137 et 153 + 15 = 168."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p05_q3",
          "type": "mcq",
          "prompt": "Un élève propose un résumé de 116 mots pour un texte de 610 mots à résumer au quart de son volume, avec une marge de plus ou moins 10 %. Que faut-il en penser ?",
          "options": [
            "Il est trop court : il doit compter entre 137 et 168 mots",
            "Il est parfait, car plus un résumé est court, mieux c’est",
            "Il est trop long",
            "La longueur n’a aucune importance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé du document lui-même ne respecte pas la norme : il faut le compléter."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p05_q4",
          "type": "mcq",
          "prompt": "Que faut-il écrire à la fin d’un résumé de texte argumentatif ?",
          "options": [
            "Le nombre de mots du résumé",
            "Son avis sur le texte",
            "La biographie de l’auteur",
            "La liste des exemples supprimés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le correcteur vérifie ainsi que la longueur est respectée."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p05_q5",
          "type": "mcq",
          "prompt": "Dans un résumé, une phrase dit que les pays africains ne pourraient pas payer pour libérer leurs joueurs ; la suivante dit que cette situation affaiblirait leurs équipes nationales. Quel connecteur convient entre les deux ?",
          "options": [
            "Ainsi",
            "Pourtant",
            "Au contraire",
            "Bien que"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’affaiblissement des équipes est la conséquence : « ainsi » ; « pourtant » marquerait une opposition."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p05_q6",
          "type": "mcq",
          "prompt": "Dans « Le livre est fait pour être publié » (Michel Tournier, Le Vol du vampire, 1981), l’auteur constate que certains écrivains écrivent pour eux seuls, « comme ils respirent », sans penser au lecteur ; puis il affirme que lui écrit pour être publié et lu, car un livre non lu n’a qu’une « demi-existence » : le lecteur est l’indispensable collaborateur de l’écrivain. Le texte raconte aussi qu’un lecteur déçu a renvoyé un roman à Michel Tournier. Quelle phrase de résumé reste fidèle au texte ?",
          "options": [
            "Le lecteur est parfois déçu par le livre qu’il a acheté",
            "Les livres de Michel Tournier ont un contenu léger",
            "Tous les lecteurs détestent les romans",
            "Michel Tournier refuse de rembourser ses lecteurs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le texte ne juge pas le contenu des livres : le résumé ne doit rien ajouter."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p05_q7",
          "type": "mcq",
          "prompt": "Dans le texte « Foot africain : danger ! » (Alphonse Boolamou de Ligouri, Stades d’Afrique n° 31, 5 avril 2006), l’auteur dénonce les cris racistes contre les joueurs africains dans les stades européens, rappelle que l’Afrique regorge de talents recherchés par les grands clubs, puis montre que les exigences financières du G14 (14 grands clubs européens) menacent les sélections nationales africaines et le football mondial, sacrifié au profit. Quelle phrase convient pour commencer le résumé de ce texte ?",
          "options": [
            "« Des footballeurs noirs sont humiliés dans les stades d’Europe du simple fait de la couleur de leur peau. »",
            "« Dans ce texte, l’auteur Alphonse Boolamou de Ligouri parle du football. »",
            "« Samuel Eto’o, Ronaldinho, Thierry Henry et Didier Drogba ont été insultés. »",
            "« Je vais résumer ce texte en 183 mots. »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pas de présentation du texte, pas d’exemples, pas de « je » : on entre directement dans les idées."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_ee_resume_production_ecrite_p06",
      "order": 6,
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p06_q1",
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p06_q2",
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p06_q3",
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p06_q4",
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p06_q5",
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p06_q6",
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p06_q7",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p06_q1",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p06_q2",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p06_q3",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p06_q4",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p06_q5",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p06_q6",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p06_q7",
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
      "id": "premiere_a1_francais_ee_resume_production_ecrite_p07",
      "order": 7,
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p07_q1",
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p07_q2",
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p07_q3",
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p07_q4",
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p07_q5",
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p07_q6",
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p07_q7",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p07_q1",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p07_q2",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p07_q3",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p07_q4",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p07_q5",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p07_q6",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p07_q7",
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
      "id": "premiere_a1_francais_ee_resume_production_ecrite_p08",
      "order": 8,
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p08_q1",
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p08_q2",
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p08_q3",
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p08_q4",
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p08_q5",
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p08_q6",
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
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p08_q7",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p08_q1",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p08_q2",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p08_q3",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p08_q4",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p08_q5",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p08_q6",
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
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p08_q7",
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
    },
    {
      "id": "premiere_a1_francais_ee_resume_production_ecrite_p09",
      "order": 9,
      "title": "Rédiger l’introduction et la conclusion de la production écrite",
      "summary": "Construire l’introduction (phrase d’accrochage, prise de position et plan) et la conclusion (bilan, ouverture) de la production écrite.",
      "conceptExplanation": "- La production écrite comporte trois articulations : l’introduction, le développement, la conclusion.\n- L’introduction, « porte d’entrée du devoir », comporte deux éléments : une phrase d’accrochage, qui présente l’auteur, la source (titre du texte ou de l’article, de l’ouvrage ou de la revue, date de publication, éditeur) et la citation ; puis une phrase qui annonce la prise de position (selon la consigne : étayer ou réfuter) et le plan (les axes du développement).\n- Exemple (sujet A) : « Alphonse Boolamou de Ligouri, dans son texte extrait de Stades d’Afrique n° 31 du mercredi 5 avril 2006, soutient l’idée selon laquelle l’Afrique avoisine le développement de l’Occident en matière footballistique. Dans un développement illustré d’exemples, nous étayerons cette affirmation sur les plans de la valeur et de la compétitivité des joueurs, des infrastructures et du rayonnement des pays. »\n- La conclusion fait le bilan de l’argumentation, puis une ouverture (autres orientations du thème ou limites de la thèse), si possible.\n- Correction du document : dans l’introduction corrigée du sujet de Michel Tournier, le document écrit « nous étayerons cette affirmation », alors que la consigne demande de la réfuter. Il faut écrire : « nous réfuterons cette affirmation en montrant que toute production écrite vise une catégorie de lecteurs ».",
      "keyRule": "Introduction : phrase d’accrochage (auteur, source, citation) + prise de position et plan. Conclusion : bilan + ouverture.",
      "formulas": [],
      "workedExample": {
        "title": "Conclusion corrigée du sujet B (Michel Tournier)",
        "statement": "Réfutez la pensée de Michel Tournier selon laquelle, pour certains écrivains, le lecteur n’apparaît nullement comme le destinataire obligé de leur écrit.",
        "methodSteps": [
          "Bilan : « Au total, la publication de tout écrit vise un public cible, une catégorie de lecteurs. Ainsi, pour sa survie, l’écrit doit être publié afin d’atteindre le lecteur qui en valide l’existence. »",
          "Ouverture : « Si tel est le cas, n’est-il pas indispensable de faciliter la publication des ouvrages afin de faire la promotion de la lecture ? »"
        ],
        "conclusion": "La conclusion confirme la réfutation, puis élargit la réflexion."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "L’introduction",
          "stepTheme": "Deux éléments",
          "stepTitle": "Les deux éléments de l’introduction",
          "paragraphText": "L’introduction de la production écrite comporte une **phrase d’accrochage** (auteur, source, citation) et une phrase qui **annonce la prise de position et le plan**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p09_q1",
            "type": "mcq",
            "prompt": "De quels éléments se compose l’introduction de la production écrite ?",
            "options": [
              "Une phrase d’accrochage puis l’annonce de la prise de position et du plan",
              "Un bilan puis une ouverture",
              "Un exemple puis un argument",
              "Une citation seule, sans phrase"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Accrocher le texte-support, puis annoncer sa position et ses axes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Phrase d’accrochage",
          "stepTheme": "Auteur, source, citation",
          "stepTitle": "Ce que contient la phrase d’accrochage",
          "paragraphText": "La **phrase d’accrochage** présente l’**identité de l’auteur**, la **source** (titre du texte ou de l’article, de l’ouvrage ou de la revue, date, éditeur) et la **citation** (ou sa reformulation).",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p09_q2",
            "type": "mcq",
            "prompt": "Que doit présenter la phrase d’accrochage de l’introduction d’une production écrite ?",
            "options": [
              "L’auteur, la source du texte et l’opinion à discuter",
              "Le bilan de toute l’argumentation",
              "Les trois exemples du développement",
              "Une question d’ouverture"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle situe l’opinion : qui l’a dite, où, et ce qu’elle dit."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Prise de position",
          "stepTheme": "Sujet A",
          "stepTitle": "Repérer l’annonce de la prise de position et du plan",
          "paragraphText": "Dans l’introduction du sujet A, la phrase « Dans un développement illustré d’exemples, **nous étayerons** cette affirmation **sur les plans** de la valeur et de la compétitivité des joueurs, des infrastructures… » annonce la **position** et le **plan**.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p09_q3",
            "type": "mcq",
            "prompt": "Dans l’introduction « Alphonse Boolamou de Ligouri, dans Stades d’Afrique n° 31 du 5 avril 2006, soutient que l’Afrique avoisine le développement de l’Occident en matière footballistique. Dans un développement illustré d’exemples, nous étayerons cette affirmation sur les plans des joueurs, des infrastructures et du rayonnement des pays », quel rôle joue la seconde phrase ?",
            "options": [
              "Elle annonce la prise de position et le plan",
              "C’est la phrase d’accrochage",
              "C’est le bilan",
              "C’est l’ouverture"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Nous étayerons… sur les plans… » : position (étayer) et axes du développement."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Étayer ou réfuter",
          "stepTheme": "Correction",
          "stepTitle": "La position annoncée doit suivre la consigne",
          "paragraphText": "La position annoncée doit respecter la **consigne**. Pour « Réfutez la pensée de Michel Tournier… », le document écrit à tort « nous étayerons » : il faut annoncer « **nous réfuterons** cette affirmation ».",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p09_q4",
            "type": "mcq",
            "prompt": "Voici un sujet : Réfutez la pensée de Michel Tournier selon laquelle, pour certains écrivains, le lecteur n’apparaît nullement comme le destinataire obligé de leur écrit. Quelle phrase convient pour annoncer la prise de position dans l’introduction ?",
            "options": [
              "« Nous réfuterons cette affirmation en montrant que toute production écrite vise une catégorie de lecteurs »",
              "« Nous étayerons cette affirmation de Michel Tournier »",
              "« Nous résumerons la vie de Michel Tournier »",
              "« Nous ne prendrons pas position »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La consigne demande de réfuter : annoncer « étayer » serait un contresens."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "La conclusion",
          "stepTheme": "Bilan et ouverture",
          "stepTitle": "Les éléments de la conclusion",
          "paragraphText": "La **conclusion** fait le **bilan** de l’argumentation menée dans le développement, puis, si possible, une **ouverture** (autres orientations du thème, limites de la thèse).",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p09_q5",
            "type": "mcq",
            "prompt": "De quoi se compose la conclusion de la production écrite ?",
            "options": [
              "Du bilan de l’argumentation et, si possible, d’une ouverture",
              "D’une nouvelle citation et d’un exemple",
              "De la phrase d’accrochage et du plan",
              "D’un résumé du texte-support"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Bilan d’abord, ouverture ensuite."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "L’ouverture",
          "stepTheme": "Sujet B",
          "stepTitle": "Reconnaître l’ouverture",
          "paragraphText": "L’**ouverture** élargit la réflexion : « Si tel est le cas, n’est-il pas indispensable de faciliter la publication des ouvrages afin de faire la promotion de la lecture ? »",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p09_q6",
            "type": "mcq",
            "prompt": "Dans la conclusion « Au total, la publication de tout écrit vise un public cible. Ainsi, pour sa survie, l’écrit doit être publié afin d’atteindre le lecteur. Si tel est le cas, n’est-il pas indispensable de faciliter la publication des ouvrages afin de faire la promotion de la lecture ? », quel rôle joue la dernière phrase ?",
            "options": [
              "C’est l’ouverture",
              "C’est le bilan",
              "C’est la phrase d’accrochage",
              "C’est un exemple"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle pose une question nouvelle qui prolonge le débat."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Pas une dissertation",
          "stepTheme": "Accrocher le texte",
          "stepTitle": "Par quoi commence l’introduction de la production écrite ?",
          "paragraphText": "Contrairement à la dissertation, qui commence par une amorce générale, l’introduction de la production écrite commence par une **phrase d’accrochage au texte-support** : l’auteur, la source et l’opinion à discuter.",
          "exercise": {
            "id": "premiere_a1_francais_ee_resume_production_ecrite_p09_q7",
            "type": "mcq",
            "prompt": "Par quoi commence l’introduction d’une production écrite, après un résumé de texte argumentatif ?",
            "options": [
              "Par une phrase d’accrochage qui présente l’auteur, la source et l’opinion",
              "Par une longue réflexion sur l’histoire de la littérature",
              "Par le bilan de l’argumentation",
              "Par un exemple personnel"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On rattache tout de suite le devoir au texte-support."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p09_q1",
          "type": "mcq",
          "prompt": "De quels éléments se compose l’introduction de la production écrite ?",
          "options": [
            "Une phrase d’accrochage puis l’annonce de la prise de position et du plan",
            "Un bilan puis une ouverture",
            "Un exemple puis un argument",
            "Une citation seule, sans phrase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Accrocher le texte-support, puis annoncer sa position et ses axes."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p09_q2",
          "type": "mcq",
          "prompt": "Que doit présenter la phrase d’accrochage de l’introduction d’une production écrite ?",
          "options": [
            "L’auteur, la source du texte et l’opinion à discuter",
            "Le bilan de toute l’argumentation",
            "Les trois exemples du développement",
            "Une question d’ouverture"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle situe l’opinion : qui l’a dite, où, et ce qu’elle dit."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p09_q3",
          "type": "mcq",
          "prompt": "Dans l’introduction « Alphonse Boolamou de Ligouri, dans Stades d’Afrique n° 31 du 5 avril 2006, soutient que l’Afrique avoisine le développement de l’Occident en matière footballistique. Dans un développement illustré d’exemples, nous étayerons cette affirmation sur les plans des joueurs, des infrastructures et du rayonnement des pays », quel rôle joue la seconde phrase ?",
          "options": [
            "Elle annonce la prise de position et le plan",
            "C’est la phrase d’accrochage",
            "C’est le bilan",
            "C’est l’ouverture"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Nous étayerons… sur les plans… » : position (étayer) et axes du développement."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p09_q4",
          "type": "mcq",
          "prompt": "Voici un sujet : Réfutez la pensée de Michel Tournier selon laquelle, pour certains écrivains, le lecteur n’apparaît nullement comme le destinataire obligé de leur écrit. Quelle phrase convient pour annoncer la prise de position dans l’introduction ?",
          "options": [
            "« Nous réfuterons cette affirmation en montrant que toute production écrite vise une catégorie de lecteurs »",
            "« Nous étayerons cette affirmation de Michel Tournier »",
            "« Nous résumerons la vie de Michel Tournier »",
            "« Nous ne prendrons pas position »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La consigne demande de réfuter : annoncer « étayer » serait un contresens."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p09_q5",
          "type": "mcq",
          "prompt": "De quoi se compose la conclusion de la production écrite ?",
          "options": [
            "Du bilan de l’argumentation et, si possible, d’une ouverture",
            "D’une nouvelle citation et d’un exemple",
            "De la phrase d’accrochage et du plan",
            "D’un résumé du texte-support"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Bilan d’abord, ouverture ensuite."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p09_q6",
          "type": "mcq",
          "prompt": "Dans la conclusion « Au total, la publication de tout écrit vise un public cible. Ainsi, pour sa survie, l’écrit doit être publié afin d’atteindre le lecteur. Si tel est le cas, n’est-il pas indispensable de faciliter la publication des ouvrages afin de faire la promotion de la lecture ? », quel rôle joue la dernière phrase ?",
          "options": [
            "C’est l’ouverture",
            "C’est le bilan",
            "C’est la phrase d’accrochage",
            "C’est un exemple"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle pose une question nouvelle qui prolonge le débat."
        },
        {
          "id": "premiere_a1_francais_ee_resume_production_ecrite_p09_q7",
          "type": "mcq",
          "prompt": "Par quoi commence l’introduction d’une production écrite, après un résumé de texte argumentatif ?",
          "options": [
            "Par une phrase d’accrochage qui présente l’auteur, la source et l’opinion",
            "Par une longue réflexion sur l’histoire de la littérature",
            "Par le bilan de l’argumentation",
            "Par un exemple personnel"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On rattache tout de suite le devoir au texte-support."
        }
      ]
    }
  ]
};
