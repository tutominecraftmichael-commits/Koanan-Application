import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 2nde H6-La démocratie athénienne.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const HIST_2DE_T2_L03_DEMOCRATIE_ATHENIENNE: CurriculumChapter = {
  "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne",
  "subjectId": "histoire_geo",
  "gradeLevel": "seconde_a",
  "alsoForGrades": [],
  "order": 6,
  "title": "Thème 2, leçon 3 : La démocratie athénienne",
  "summary": "Athènes, les réformateurs, les institutions, la démocratie directe, ses limites et son héritage.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "2nde H6-La démocratie athénienne.pdf",
  "points": [
    {
      "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p01",
      "order": 1,
      "title": "Athènes, une cité prospère et inégalitaire",
      "summary": "La cité d'Athènes, sa richesse et sa société avant la démocratie.",
      "conceptExplanation": "Athènes est une cité-État de la Grèce antique, en Europe du Sud-Est. Elle est située dans l'Attique, une petite région de plaines entourées de montagnes, ouverte sur la mer Égée. Les terres sont rocailleuses et peu fertiles, mais le sous-sol est riche en argent (mines du Laurion). Son port est Le Pirée.\n\nAthènes s'enrichit grâce au commerce maritime, à la monnaie, à l'argent du Laurion et aux tributs versés par ses alliés. Le commerce des céramiques enrichit les grandes familles.\n\nMais la société est très inégalitaire. Au Ve siècle av. J.-C., l'Attique compte environ 400 000 habitants : 40 000 citoyens, 80 000 femmes et enfants de citoyens, 80 000 métèques (étrangers libres) et 200 000 esclaves. Les femmes sont considérées comme mineures et n'ont pas de droits politiques. Avant les réformes, seules les grandes familles aristocratiques exercent le pouvoir ; des citoyens endettés tombent en esclavage ; la cité connaît aussi la tyrannie.",
      "keyRule": "Athènes : cité-État de l'Attique, riche (commerce, argent du Laurion) mais inégalitaire : 40 000 citoyens sur environ 400 000 habitants.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer une part",
        "statement": "Quelle part de la population de l'Attique représentent les 40 000 citoyens sur 400 000 habitants ?",
        "methodSteps": [
          "40 000 / 400 000 = 0,1.",
          "0,1 = 10 %."
        ],
        "conclusion": "Les citoyens ne représentent qu'environ 10 % de la population."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une cité-État",
          "stepTheme": "Une cité-État",
          "stepBadge": "Une cité-État",
          "paragraphText": "Athènes est une cité-État : une ville et son territoire, indépendants, avec leurs propres lois et leur gouvernement.\nElle est située dans l'Attique, en Grèce, en Europe du Sud-Est.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p01_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une cité-État ?",
            "options": [
              "Une province gouvernée par un empire lointain",
              "Un village sans aucune organisation politique",
              "Une ville et son territoire, indépendants, avec leurs propres lois",
              "Une colonie dirigée par un pays étranger"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La cité-État est un petit État indépendant formé d'une ville et de ses campagnes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Un territoire contraignant",
          "stepTheme": "Un territoire contraignant",
          "stepBadge": "Un territoire contraignant",
          "paragraphText": "L'Attique est une région de petites plaines entourées de montagnes.\nLes terres sont rocailleuses et peu fertiles, mais le sous-sol contient de l'argent (mines du Laurion).",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p01_q2",
            "type": "mcq",
            "prompt": "Quelle richesse le sous-sol de l'Attique contient-il ?",
            "options": [
              "De l'argent, extrait des mines du Laurion",
              "Du pétrole, extrait au Pirée",
              "De l'or, extrait sur l'Acropole",
              "Du charbon, extrait à Marathon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les mines d'argent du Laurion ont enrichi Athènes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une cité prospère",
          "stepTheme": "Une cité prospère",
          "stepBadge": "Une cité prospère",
          "paragraphText": "Athènes s'enrichit grâce :\n• au commerce maritime, par son port du Pirée ;\n• à la monnaie et à l'argent du Laurion ;\n• aux tributs versés par les cités alliées.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p01_q3",
            "type": "mcq",
            "prompt": "Quel est le port d'Athènes ?",
            "options": [
              "Marathon",
              "Éleusis",
              "Le Laurion",
              "Le Pirée"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le Pirée est le port d'Athènes, centre de son commerce maritime."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les métèques",
          "stepTheme": "Les métèques",
          "stepBadge": "Les métèques",
          "paragraphText": "Les métèques sont des étrangers libres installés à Athènes.\nIls travaillent (commerce, artisanat) et paient des impôts, mais ne sont pas citoyens et n'ont aucun droit politique.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p01_q4",
            "type": "mcq",
            "prompt": "Qui sont les métèques à Athènes ?",
            "options": [
              "Des citoyens riches qui dirigent la cité",
              "Des étrangers libres qui n'ont pas de droits politiques",
              "Des esclaves affranchis devenus citoyens",
              "Des magistrats élus par l'Ecclésia"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les métèques sont libres mais étrangers : ils ne votent pas."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La population de l'Attique",
          "stepTheme": "La population de l'Attique",
          "stepBadge": "La population de l'Attique",
          "paragraphText": "Au Ve siècle av. J.-C., l'Attique compte environ 400 000 habitants :\n• 40 000 citoyens ;\n• 80 000 femmes et enfants de citoyens ;\n• 80 000 métèques ;\n• 200 000 esclaves.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p01_q5",
            "type": "mcq",
            "prompt": "Quel groupe est le plus nombreux en Attique au Ve siècle av. J.-C. ?",
            "options": [
              "Les citoyens",
              "Les esclaves",
              "Les métèques",
              "Les femmes et enfants de citoyens"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les esclaves (environ 200 000) sont cinq fois plus nombreux que les citoyens."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Une société inégalitaire",
          "stepTheme": "Une société inégalitaire",
          "stepBadge": "Une société inégalitaire",
          "paragraphText": "Avant les réformes :\n• seules les grandes familles aristocratiques exercent le pouvoir ;\n• les femmes sont considérées comme mineures, sans droits politiques ;\n• des citoyens endettés tombent en esclavage.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p01_q6",
            "type": "mcq",
            "prompt": "Quelle injustice frappe certains citoyens pauvres avant les réformes ?",
            "options": [
              "Ils sont obligés de devenir stratèges",
              "Ils doivent quitter définitivement Athènes",
              "Ils sont exclus des fêtes religieuses",
              "Ils peuvent tomber en esclavage à cause de leurs dettes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'esclavage pour dettes frappait les citoyens pauvres."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Où se trouve la Grèce ?",
          "stepTheme": "Où se trouve la Grèce ?",
          "stepBadge": "Où se trouve la Grèce ?",
          "paragraphText": "Attention : la Grèce est située en Europe du Sud-Est, au bord de la mer Égée et de la Méditerranée, et non en Europe occidentale.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p01_q7",
            "type": "mcq",
            "prompt": "Où se situe la Grèce ?",
            "options": [
              "En Europe du Sud-Est, au bord de la mer Égée",
              "En Europe occidentale, au bord de l'Atlantique",
              "En Afrique du Nord, au bord du Nil",
              "En Asie centrale, loin de la mer"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La Grèce est au sud-est de l'Europe, ouverte sur la mer Égée."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p01_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une cité-État ?",
          "options": [
            "Une province gouvernée par un empire lointain",
            "Un village sans aucune organisation politique",
            "Une ville et son territoire, indépendants, avec leurs propres lois",
            "Une colonie dirigée par un pays étranger"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La cité-État est un petit État indépendant formé d'une ville et de ses campagnes."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p01_q2",
          "type": "mcq",
          "prompt": "Quelle richesse le sous-sol de l'Attique contient-il ?",
          "options": [
            "De l'argent, extrait des mines du Laurion",
            "Du pétrole, extrait au Pirée",
            "De l'or, extrait sur l'Acropole",
            "Du charbon, extrait à Marathon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les mines d'argent du Laurion ont enrichi Athènes."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p01_q3",
          "type": "mcq",
          "prompt": "Quel est le port d'Athènes ?",
          "options": [
            "Marathon",
            "Éleusis",
            "Le Laurion",
            "Le Pirée"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le Pirée est le port d'Athènes, centre de son commerce maritime."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p01_q4",
          "type": "mcq",
          "prompt": "Qui sont les métèques à Athènes ?",
          "options": [
            "Des citoyens riches qui dirigent la cité",
            "Des étrangers libres qui n'ont pas de droits politiques",
            "Des esclaves affranchis devenus citoyens",
            "Des magistrats élus par l'Ecclésia"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les métèques sont libres mais étrangers : ils ne votent pas."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p01_q5",
          "type": "mcq",
          "prompt": "Quel groupe est le plus nombreux en Attique au Ve siècle av. J.-C. ?",
          "options": [
            "Les citoyens",
            "Les esclaves",
            "Les métèques",
            "Les femmes et enfants de citoyens"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les esclaves (environ 200 000) sont cinq fois plus nombreux que les citoyens."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p01_q6",
          "type": "mcq",
          "prompt": "Quelle injustice frappe certains citoyens pauvres avant les réformes ?",
          "options": [
            "Ils sont obligés de devenir stratèges",
            "Ils doivent quitter définitivement Athènes",
            "Ils sont exclus des fêtes religieuses",
            "Ils peuvent tomber en esclavage à cause de leurs dettes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'esclavage pour dettes frappait les citoyens pauvres."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p01_q7",
          "type": "mcq",
          "prompt": "Où se situe la Grèce ?",
          "options": [
            "En Europe du Sud-Est, au bord de la mer Égée",
            "En Europe occidentale, au bord de l'Atlantique",
            "En Afrique du Nord, au bord du Nil",
            "En Asie centrale, loin de la mer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La Grèce est au sud-est de l'Europe, ouverte sur la mer Égée."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p02",
      "order": 2,
      "title": "Les grands réformateurs",
      "summary": "Dracon, Solon, Clisthène et Périclès bâtissent la démocratie.",
      "conceptExplanation": "Plusieurs législateurs posent peu à peu les bases de la démocratie (du grec « dêmos », le peuple, et « kratos », le pouvoir).\n\n- Dracon (vers 621 av. J.-C.) donne à Athènes ses premières lois écrites, les mêmes pour tous, même si elles sont très sévères (d'où l'adjectif « draconien »).\n- Solon (594 av. J.-C.) supprime l'esclavage pour dettes, réduit le pouvoir de l'aristocratie et de l'Aréopage au profit de l'assemblée du peuple, crée le tribunal populaire de l'Héliée et un Conseil.\n- Clisthène (508-507 av. J.-C.) est considéré comme le fondateur de la démocratie : il répartit les citoyens en 10 tribus mêlant des habitants de toute l'Attique, crée la Boulè de 500 membres tirés au sort et établit l'isonomie, l'égalité de tous les citoyens devant la loi. Il instaure aussi l'ostracisme (le bannissement par vote d'un citoyen jugé dangereux).\n- Périclès, stratège réélu chaque année de 443 à 429 av. J.-C., crée le misthos, une indemnité qui permet aux citoyens pauvres de participer à la vie politique. En 451 av. J.-C., il réserve la citoyenneté aux fils de père et de mère athéniens.",
      "keyRule": "Démocratie = pouvoir du peuple ; Dracon (lois écrites), Solon (fin de l'esclavage pour dettes, Héliée), Clisthène (10 tribus, isonomie, Boulè), Périclès (misthos).",
      "formulas": [],
      "workedExample": {
        "title": "Relier un réformateur à sa réforme",
        "statement": "Qui a supprimé l'esclavage pour dettes ? Qui a créé le misthos ?",
        "methodSteps": [
          "La suppression de l'esclavage pour dettes : Solon, en 594 av. J.-C.",
          "Le misthos, indemnité pour les citoyens pauvres : Périclès."
        ],
        "conclusion": "Chaque réformateur a ajouté une pierre à la démocratie."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La démocratie",
          "stepTheme": "La démocratie",
          "stepBadge": "La démocratie",
          "paragraphText": "Le mot démocratie vient du grec :\n• « dêmos » : le peuple ;\n• « kratos » : le pouvoir.\nLa démocratie est le pouvoir exercé par le peuple.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p02_q1",
            "type": "mcq",
            "prompt": "Que signifie le mot « démocratie » ?",
            "options": [
              "Le pouvoir d'un seul homme",
              "Le pouvoir des plus riches",
              "Le pouvoir du peuple",
              "Le pouvoir des prêtres"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Dêmos = peuple, kratos = pouvoir."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Dracon",
          "stepTheme": "Dracon",
          "stepBadge": "Dracon",
          "paragraphText": "Vers 621 av. J.-C., Dracon donne à Athènes ses premières lois écrites, les mêmes pour tous.\nElles étaient très sévères : on parle encore aujourd'hui de lois « draconiennes ».",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p02_q2",
            "type": "mcq",
            "prompt": "Quel est l'apport de Dracon à Athènes ?",
            "options": [
              "La création de l'indemnité du misthos",
              "La division de l'Attique en 10 tribus",
              "L'élection des 10 stratèges",
              "Les premières lois écrites, les mêmes pour tous"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Dracon met les lois par écrit : chacun peut les connaître."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Solon",
          "stepTheme": "Solon",
          "stepBadge": "Solon",
          "paragraphText": "En 594 av. J.-C., Solon :\n• supprime l'esclavage pour dettes ;\n• réduit le pouvoir des aristocrates au profit de l'assemblée du peuple ;\n• crée le tribunal populaire de l'Héliée.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p02_q3",
            "type": "mcq",
            "prompt": "Quelle grande réforme sociale doit-on à Solon ?",
            "options": [
              "La création de l'ostracisme",
              "Le droit de vote des femmes",
              "La suppression de l'esclavage pour dettes",
              "L'abolition totale de l'esclavage"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Solon libère les citoyens endettés de l'esclavage."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Clisthène",
          "stepTheme": "Clisthène",
          "stepBadge": "Clisthène",
          "paragraphText": "En 508-507 av. J.-C., Clisthène, considéré comme le fondateur de la démocratie :\n• répartit les citoyens en 10 tribus mêlant toute l'Attique ;\n• crée la Boulè de 500 membres tirés au sort ;\n• établit l'égalité des citoyens devant la loi (isonomie).",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p02_q4",
            "type": "mcq",
            "prompt": "Qui est considéré comme le fondateur de la démocratie athénienne ?",
            "options": [
              "Dracon",
              "Clisthène",
              "Thésée",
              "Alexandre le Grand"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Clisthène établit les institutions et l'isonomie en 508-507 av. J.-C."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L'isonomie",
          "stepTheme": "L'isonomie",
          "stepBadge": "L'isonomie",
          "paragraphText": "L'isonomie est l'égalité de tous les citoyens devant la loi.\nC'est l'un des principes fondamentaux de la démocratie athénienne.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p02_q5",
            "type": "mcq",
            "prompt": "Qu'est-ce que l'isonomie ?",
            "options": [
              "L'égalité de tous les citoyens devant la loi",
              "Le droit de vote accordé aux esclaves",
              "Le pouvoir réservé aux riches",
              "Le bannissement d'un citoyen dangereux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Iso = égal, nomos = loi."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le misthos",
          "stepTheme": "Le misthos",
          "stepBadge": "Le misthos",
          "paragraphText": "Périclès, stratège réélu chaque année de 443 à 429 av. J.-C., crée le misthos : une indemnité versée aux citoyens pour qu'ils puissent participer à la vie politique sans perdre leur journée de travail.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p02_q6",
            "type": "mcq",
            "prompt": "À quoi sert le misthos créé par Périclès ?",
            "options": [
              "À permettre aux citoyens pauvres de participer à la vie politique",
              "À payer les esclaves des mines du Laurion",
              "À financer la construction des navires de guerre",
              "À récompenser les vainqueurs des Jeux olympiques"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le misthos compense la perte de salaire des citoyens pauvres."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "L'ostracisme",
          "stepTheme": "L'ostracisme",
          "stepBadge": "L'ostracisme",
          "paragraphText": "L'ostracisme permet aux citoyens de bannir pour dix ans un homme jugé dangereux pour la démocratie.\nOn vote en écrivant son nom sur un tesson de poterie (ostrakon).",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p02_q7",
            "type": "mcq",
            "prompt": "Qu'est-ce que l'ostracisme ?",
            "options": [
              "L'élection des stratèges chaque année",
              "Le bannissement, par un vote, d'un citoyen jugé dangereux",
              "Le tirage au sort des juges de l'Héliée",
              "La condamnation à mort des voleurs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ostracisme protège la démocratie contre les ambitieux."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p02_q1",
          "type": "mcq",
          "prompt": "Que signifie le mot « démocratie » ?",
          "options": [
            "Le pouvoir d'un seul homme",
            "Le pouvoir des plus riches",
            "Le pouvoir du peuple",
            "Le pouvoir des prêtres"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Dêmos = peuple, kratos = pouvoir."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p02_q2",
          "type": "mcq",
          "prompt": "Quel est l'apport de Dracon à Athènes ?",
          "options": [
            "La création de l'indemnité du misthos",
            "La division de l'Attique en 10 tribus",
            "L'élection des 10 stratèges",
            "Les premières lois écrites, les mêmes pour tous"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Dracon met les lois par écrit : chacun peut les connaître."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p02_q3",
          "type": "mcq",
          "prompt": "Quelle grande réforme sociale doit-on à Solon ?",
          "options": [
            "La création de l'ostracisme",
            "Le droit de vote des femmes",
            "La suppression de l'esclavage pour dettes",
            "L'abolition totale de l'esclavage"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Solon libère les citoyens endettés de l'esclavage."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p02_q4",
          "type": "mcq",
          "prompt": "Qui est considéré comme le fondateur de la démocratie athénienne ?",
          "options": [
            "Dracon",
            "Clisthène",
            "Thésée",
            "Alexandre le Grand"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Clisthène établit les institutions et l'isonomie en 508-507 av. J.-C."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p02_q5",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'isonomie ?",
          "options": [
            "L'égalité de tous les citoyens devant la loi",
            "Le droit de vote accordé aux esclaves",
            "Le pouvoir réservé aux riches",
            "Le bannissement d'un citoyen dangereux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Iso = égal, nomos = loi."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p02_q6",
          "type": "mcq",
          "prompt": "À quoi sert le misthos créé par Périclès ?",
          "options": [
            "À permettre aux citoyens pauvres de participer à la vie politique",
            "À payer les esclaves des mines du Laurion",
            "À financer la construction des navires de guerre",
            "À récompenser les vainqueurs des Jeux olympiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le misthos compense la perte de salaire des citoyens pauvres."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p02_q7",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'ostracisme ?",
          "options": [
            "L'élection des stratèges chaque année",
            "Le bannissement, par un vote, d'un citoyen jugé dangereux",
            "Le tirage au sort des juges de l'Héliée",
            "La condamnation à mort des voleurs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ostracisme protège la démocratie contre les ambitieux."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p03",
      "order": 3,
      "title": "Les institutions athéniennes",
      "summary": "L'Ecclésia, la Boulè, les tribunaux et les magistrats.",
      "conceptExplanation": "1. L'Ecclésia : l'assemblée de tous les citoyens. Elle se réunit environ 40 fois par an sur la colline de la Pnyx. Elle détient le pouvoir : elle vote les lois, décide de la paix et de la guerre, élit les stratèges et contrôle les magistrats.\n\n2. La Boulè : le Conseil permanent de 500 citoyens tirés au sort (50 par tribu). Elle prépare les lois soumises à l'Ecclésia et surveille les magistrats.\n\n3. Les tribunaux : l'Héliée, tribunal populaire de 6 000 citoyens tirés au sort, juge la plupart des affaires ; l'Aréopage, composé d'anciens archontes, juge les meurtres.\n\n4. Les magistrats appliquent les lois :\n- les 10 stratèges, élus pour un an et rééligibles, commandent l'armée et dirigent la politique ;\n- les 9 archontes, tirés au sort, président les tribunaux et les cérémonies religieuses.",
      "keyRule": "Ecclésia (assemblée, vote les lois) ; Boulè (500, prépare les lois) ; Héliée (6 000 juges) et Aréopage (meurtres) ; 10 stratèges élus et 9 archontes.",
      "formulas": [],
      "workedExample": {
        "title": "Qui fait quoi ?",
        "statement": "Une nouvelle loi est proposée à Athènes. Quel est son parcours ?",
        "methodSteps": [
          "La Boulè prépare le projet de loi.",
          "L'Ecclésia, sur la Pnyx, en débat et la vote à main levée.",
          "Les magistrats la font appliquer ; l'Héliée juge ceux qui l'enfreignent."
        ],
        "conclusion": "Chaque institution a son rôle : préparer, voter, appliquer, juger."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'Ecclésia",
          "stepTheme": "L'Ecclésia",
          "stepBadge": "L'Ecclésia",
          "paragraphText": "L'Ecclésia est l'assemblée de tous les citoyens.\nElle se réunit environ 40 fois par an sur la colline de la Pnyx.\nElle vote les lois et décide de la paix et de la guerre.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p03_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce que l'Ecclésia ?",
            "options": [
              "Le conseil de 500 membres tirés au sort",
              "Le tribunal qui juge les meurtres",
              "L'assemblée des citoyens qui vote les lois",
              "Le groupe des 10 stratèges"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'Ecclésia est l'assemblée du peuple : elle détient le pouvoir."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La Pnyx",
          "stepTheme": "La Pnyx",
          "stepBadge": "La Pnyx",
          "paragraphText": "Les réunions de l'Ecclésia se tiennent sur la Pnyx, une colline d'Athènes.\nChaque citoyen peut y prendre la parole et proposer un amendement.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p03_q2",
            "type": "mcq",
            "prompt": "Où se réunit l'Ecclésia ?",
            "options": [
              "Au port du Pirée",
              "Dans les mines du Laurion",
              "Au temple de Karnak",
              "Sur la colline de la Pnyx"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'assemblée des citoyens se réunit sur la Pnyx."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La Boulè",
          "stepTheme": "La Boulè",
          "stepBadge": "La Boulè",
          "paragraphText": "La Boulè est le Conseil permanent de 500 citoyens tirés au sort (50 par tribu).\nElle prépare les lois soumises à l'Ecclésia et surveille les magistrats.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p03_q3",
            "type": "mcq",
            "prompt": "Quel est le rôle de la Boulè ?",
            "options": [
              "Juger les affaires de meurtre",
              "Commander l'armée en temps de guerre",
              "Préparer les lois soumises à l'Ecclésia",
              "Rendre la justice civile avec 6 000 juges"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La Boulè prépare le travail de l'assemblée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'Héliée",
          "stepTheme": "L'Héliée",
          "stepBadge": "L'Héliée",
          "paragraphText": "L'Héliée est le tribunal populaire, formé de 6 000 citoyens tirés au sort.\nIl juge la plupart des affaires. Ses décisions sont sans appel.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p03_q4",
            "type": "mcq",
            "prompt": "Qu'est-ce que l'Héliée ?",
            "options": [
              "L'assemblée qui vote les lois",
              "Le conseil qui prépare les lois",
              "L'armée de la cité",
              "Le tribunal populaire formé de citoyens tirés au sort"
            ],
            "correctAnswerIndex": 3,
            "explanation": "À l'Héliée, ce sont les citoyens eux-mêmes qui rendent la justice."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L'Aréopage",
          "stepTheme": "L'Aréopage",
          "stepBadge": "L'Aréopage",
          "paragraphText": "L'Aréopage est un tribunal composé d'anciens archontes.\nIl juge les crimes de sang : les meurtres.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p03_q5",
            "type": "mcq",
            "prompt": "Quelles affaires l'Aréopage juge-t-il ?",
            "options": [
              "Les meurtres",
              "Les vols de récoltes",
              "Les dettes commerciales",
              "Les conflits entre tribus"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'Aréopage est chargé des crimes de sang."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Les stratèges",
          "stepTheme": "Les stratèges",
          "stepBadge": "Les stratèges",
          "paragraphText": "Les 10 stratèges sont des magistrats élus pour un an par l'Ecclésia, et rééligibles.\nIls commandent l'armée et dirigent la politique de la cité.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p03_q6",
            "type": "mcq",
            "prompt": "Comment les stratèges sont-ils désignés ?",
            "options": [
              "Ils sont tirés au sort à vie",
              "Ils sont élus pour un an et rééligibles",
              "Ils héritent leur charge de leur père",
              "Ils sont nommés par le roi de Perse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les stratèges sont élus, car leur fonction demande des compétences militaires."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Tirage au sort ou élection ?",
          "stepTheme": "Tirage au sort ou élection ?",
          "stepBadge": "Tirage au sort ou élection ?",
          "paragraphText": "• Tirés au sort : les membres de la Boulè, les juges de l'Héliée, les archontes.\n• Élus : les 10 stratèges, car il faut des compétences militaires.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p03_q7",
            "type": "mcq",
            "prompt": "Quels magistrats sont élus et non tirés au sort ?",
            "options": [
              "Les membres de la Boulè",
              "Les stratèges",
              "Les juges de l'Héliée",
              "Les archontes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Seuls les stratèges sont élus ; les autres sont tirés au sort."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p03_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'Ecclésia ?",
          "options": [
            "Le conseil de 500 membres tirés au sort",
            "Le tribunal qui juge les meurtres",
            "L'assemblée des citoyens qui vote les lois",
            "Le groupe des 10 stratèges"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'Ecclésia est l'assemblée du peuple : elle détient le pouvoir."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p03_q2",
          "type": "mcq",
          "prompt": "Où se réunit l'Ecclésia ?",
          "options": [
            "Au port du Pirée",
            "Dans les mines du Laurion",
            "Au temple de Karnak",
            "Sur la colline de la Pnyx"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'assemblée des citoyens se réunit sur la Pnyx."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p03_q3",
          "type": "mcq",
          "prompt": "Quel est le rôle de la Boulè ?",
          "options": [
            "Juger les affaires de meurtre",
            "Commander l'armée en temps de guerre",
            "Préparer les lois soumises à l'Ecclésia",
            "Rendre la justice civile avec 6 000 juges"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La Boulè prépare le travail de l'assemblée."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p03_q4",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'Héliée ?",
          "options": [
            "L'assemblée qui vote les lois",
            "Le conseil qui prépare les lois",
            "L'armée de la cité",
            "Le tribunal populaire formé de citoyens tirés au sort"
          ],
          "correctAnswerIndex": 3,
          "explanation": "À l'Héliée, ce sont les citoyens eux-mêmes qui rendent la justice."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p03_q5",
          "type": "mcq",
          "prompt": "Quelles affaires l'Aréopage juge-t-il ?",
          "options": [
            "Les meurtres",
            "Les vols de récoltes",
            "Les dettes commerciales",
            "Les conflits entre tribus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'Aréopage est chargé des crimes de sang."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p03_q6",
          "type": "mcq",
          "prompt": "Comment les stratèges sont-ils désignés ?",
          "options": [
            "Ils sont tirés au sort à vie",
            "Ils sont élus pour un an et rééligibles",
            "Ils héritent leur charge de leur père",
            "Ils sont nommés par le roi de Perse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les stratèges sont élus, car leur fonction demande des compétences militaires."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p03_q7",
          "type": "mcq",
          "prompt": "Quels magistrats sont élus et non tirés au sort ?",
          "options": [
            "Les membres de la Boulè",
            "Les stratèges",
            "Les juges de l'Héliée",
            "Les archontes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Seuls les stratèges sont élus ; les autres sont tirés au sort."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p04",
      "order": 4,
      "title": "Une démocratie directe",
      "summary": "Les citoyens décident eux-mêmes, par le vote et le tirage au sort.",
      "conceptExplanation": "La démocratie athénienne est une démocratie directe : les citoyens décident eux-mêmes des affaires de la cité, sans passer par des représentants élus.\n\n- À l'Ecclésia, chacun peut prendre la parole et proposer un amendement. Les décisions sont prises à la majorité, par vote à main levée, et sont immédiatement applicables. Les lois et le nom de leurs auteurs sont gravés dans la pierre.\n- L'Ecclésia contrôle les magistrats et peut les révoquer à tout moment.\n- Le tirage au sort désigne les membres de la Boulè et de l'Héliée : chaque citoyen, riche ou pauvre, a la même chance d'exercer une fonction. Les Athéniens utilisaient une machine de tirage au sort, le klérotérion.\n- Les juges de l'Héliée prêtent serment de respecter les lois. Après les plaidoiries, ils votent sans délibérer ; leurs sentences sont sans appel.",
      "keyRule": "Démocratie directe : les citoyens votent eux-mêmes (main levée, majorité) ; le tirage au sort donne à chacun la même chance d'exercer une fonction.",
      "formulas": [],
      "workedExample": {
        "title": "Directe ou représentative ?",
        "statement": "En Côte d'Ivoire, les citoyens élisent des députés qui votent les lois. Est-ce une démocratie directe ?",
        "methodSteps": [
          "Les citoyens ne votent pas eux-mêmes les lois.",
          "Ils élisent des représentants (députés) qui votent à leur place."
        ],
        "conclusion": "C'est une démocratie représentative ; à Athènes, la démocratie était directe."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La démocratie directe",
          "stepTheme": "La démocratie directe",
          "stepBadge": "La démocratie directe",
          "paragraphText": "Dans une démocratie directe, les citoyens décident eux-mêmes des affaires de la cité, sans passer par des représentants élus.\nC'est le cas à Athènes.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p04_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une démocratie directe ?",
            "options": [
              "Un régime où les citoyens décident eux-mêmes, sans représentants",
              "Un régime où des députés élus votent les lois à la place du peuple",
              "Un régime où un roi décide seul",
              "Un régime où seuls les prêtres gouvernent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À Athènes, les citoyens votent eux-mêmes les lois à l'Ecclésia."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le droit de parole",
          "stepTheme": "Le droit de parole",
          "stepBadge": "Le droit de parole",
          "paragraphText": "À l'Ecclésia, chaque citoyen peut prendre la parole et proposer un amendement (une modification) aux projets de loi.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p04_q2",
            "type": "mcq",
            "prompt": "Que peut faire chaque citoyen lors de l'Ecclésia ?",
            "options": [
              "Seulement écouter sans parler",
              "Nommer seul les stratèges",
              "Juger les meurtres",
              "Prendre la parole et proposer un amendement"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La liberté de parole à l'assemblée est au cœur de la démocratie athénienne."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le vote à main levée",
          "stepTheme": "Le vote à main levée",
          "stepBadge": "Le vote à main levée",
          "paragraphText": "Les décisions de l'Ecclésia sont prises à la majorité, par vote à main levée.\nElles sont immédiatement applicables.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p04_q3",
            "type": "mcq",
            "prompt": "Comment les décisions de l'Ecclésia sont-elles prises ?",
            "options": [
              "Par décision du seul stratège",
              "Par tirage au sort entre les propositions",
              "À la majorité, par vote à main levée",
              "À l'unanimité obligatoire de tous les habitants"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le vote se fait à main levée, et la majorité l'emporte."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le tirage au sort",
          "stepTheme": "Le tirage au sort",
          "stepBadge": "Le tirage au sort",
          "paragraphText": "Le tirage au sort désigne les membres de la Boulè et de l'Héliée.\nAinsi, chaque citoyen, riche ou pauvre, a la même chance d'exercer une fonction.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p04_q4",
            "type": "mcq",
            "prompt": "Pourquoi le tirage au sort est-il un principe démocratique à Athènes ?",
            "options": [
              "Parce qu'il réserve les fonctions aux plus riches",
              "Parce qu'il permet au roi de choisir ses amis",
              "Parce qu'il donne à chaque citoyen la même chance d'exercer une fonction",
              "Parce qu'il exclut les citoyens pauvres"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le sort ne favorise ni les riches ni les puissants."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le klérotérion",
          "stepTheme": "Le klérotérion",
          "stepBadge": "Le klérotérion",
          "paragraphText": "Pour tirer au sort, les Athéniens utilisaient une machine en pierre, le klérotérion, dans laquelle on insérait des jetons portant le nom des citoyens.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p04_q5",
            "type": "mcq",
            "prompt": "À quoi servait le klérotérion ?",
            "options": [
              "À tirer au sort les citoyens appelés à exercer une fonction",
              "À mesurer le temps de parole à l'assemblée",
              "À compter les votes à main levée",
              "À graver les lois dans la pierre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le klérotérion était la machine de tirage au sort."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le contrôle des magistrats",
          "stepTheme": "Le contrôle des magistrats",
          "stepBadge": "Le contrôle des magistrats",
          "paragraphText": "L'Ecclésia élit les stratèges et contrôle tous les magistrats.\nElle peut les révoquer à tout moment s'ils agissent mal.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p04_q6",
            "type": "mcq",
            "prompt": "Que peut faire l'Ecclésia envers un magistrat qui agit mal ?",
            "options": [
              "Rien, car les magistrats sont intouchables",
              "Seulement attendre la fin de son mandat de 10 ans",
              "Demander l'avis du roi de Perse",
              "Le révoquer à tout moment"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le peuple contrôle ses magistrats et peut les démettre."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Des lois publiques",
          "stepTheme": "Des lois publiques",
          "stepBadge": "Des lois publiques",
          "paragraphText": "Les lois votées et le nom de leurs auteurs sont gravés dans la pierre et exposés.\nAinsi, chaque citoyen peut les connaître.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p04_q7",
            "type": "mcq",
            "prompt": "Pourquoi les lois athéniennes étaient-elles gravées dans la pierre ?",
            "options": [
              "Pour les cacher aux métèques",
              "Pour que chaque citoyen puisse les connaître",
              "Pour décorer les temples",
              "Pour pouvoir les modifier facilement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Des lois publiques et connues de tous protègent contre l'arbitraire."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p04_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une démocratie directe ?",
          "options": [
            "Un régime où les citoyens décident eux-mêmes, sans représentants",
            "Un régime où des députés élus votent les lois à la place du peuple",
            "Un régime où un roi décide seul",
            "Un régime où seuls les prêtres gouvernent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À Athènes, les citoyens votent eux-mêmes les lois à l'Ecclésia."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p04_q2",
          "type": "mcq",
          "prompt": "Que peut faire chaque citoyen lors de l'Ecclésia ?",
          "options": [
            "Seulement écouter sans parler",
            "Nommer seul les stratèges",
            "Juger les meurtres",
            "Prendre la parole et proposer un amendement"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La liberté de parole à l'assemblée est au cœur de la démocratie athénienne."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p04_q3",
          "type": "mcq",
          "prompt": "Comment les décisions de l'Ecclésia sont-elles prises ?",
          "options": [
            "Par décision du seul stratège",
            "Par tirage au sort entre les propositions",
            "À la majorité, par vote à main levée",
            "À l'unanimité obligatoire de tous les habitants"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le vote se fait à main levée, et la majorité l'emporte."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p04_q4",
          "type": "mcq",
          "prompt": "Pourquoi le tirage au sort est-il un principe démocratique à Athènes ?",
          "options": [
            "Parce qu'il réserve les fonctions aux plus riches",
            "Parce qu'il permet au roi de choisir ses amis",
            "Parce qu'il donne à chaque citoyen la même chance d'exercer une fonction",
            "Parce qu'il exclut les citoyens pauvres"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le sort ne favorise ni les riches ni les puissants."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p04_q5",
          "type": "mcq",
          "prompt": "À quoi servait le klérotérion ?",
          "options": [
            "À tirer au sort les citoyens appelés à exercer une fonction",
            "À mesurer le temps de parole à l'assemblée",
            "À compter les votes à main levée",
            "À graver les lois dans la pierre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le klérotérion était la machine de tirage au sort."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p04_q6",
          "type": "mcq",
          "prompt": "Que peut faire l'Ecclésia envers un magistrat qui agit mal ?",
          "options": [
            "Rien, car les magistrats sont intouchables",
            "Seulement attendre la fin de son mandat de 10 ans",
            "Demander l'avis du roi de Perse",
            "Le révoquer à tout moment"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le peuple contrôle ses magistrats et peut les démettre."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p04_q7",
          "type": "mcq",
          "prompt": "Pourquoi les lois athéniennes étaient-elles gravées dans la pierre ?",
          "options": [
            "Pour les cacher aux métèques",
            "Pour que chaque citoyen puisse les connaître",
            "Pour décorer les temples",
            "Pour pouvoir les modifier facilement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Des lois publiques et connues de tous protègent contre l'arbitraire."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p05",
      "order": 5,
      "title": "Les limites de la démocratie athénienne",
      "summary": "Une démocratie réservée à une minorité, inégale et imparfaite.",
      "conceptExplanation": "La démocratie athénienne a des limites :\n\n1. Une minorité dirige la cité : seuls les citoyens (environ 40 000, soit 10 % de la population de l'Attique) participent à la vie politique. Les femmes, les métèques et les esclaves, la grande majorité, subissent les décisions sans y prendre part.\n\n2. Des inégalités entre citoyens : en théorie, tous sont égaux. En réalité, les plus pauvres participent peu : ils ne peuvent pas toujours quitter leur travail, sont souvent moins instruits et prennent rarement la parole. Les riches et les instruits dominent la vie politique.\n\n3. La non-limitation des mandats : un stratège peut être réélu sans limite et garder longtemps le pouvoir. Périclès a été réélu chaque année de 443 à 429 av. J.-C.\n\n4. Des jugements sans recours : les décisions de l'Héliée sont sans appel.\n\nLa démocratie athénienne disparaît au IVe siècle av. J.-C., après les défaites militaires d'Athènes face à la Macédoine.",
      "keyRule": "Limites : seuls 10 % d'habitants sont citoyens (ni femmes, ni métèques, ni esclaves) ; pauvres peu présents ; mandats illimités (Périclès) ; jugements sans appel.",
      "formulas": [],
      "workedExample": {
        "title": "Une démocratie pour tous ?",
        "statement": "Peut-on dire que la démocratie athénienne était le pouvoir de tout le peuple ?",
        "methodSteps": [
          "Sur environ 400 000 habitants, seuls 40 000 citoyens votent.",
          "Les femmes, les métèques et les esclaves sont exclus."
        ],
        "conclusion": "Non : c'est une démocratie réservée à une minorité d'hommes citoyens."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Une minorité de citoyens",
          "stepTheme": "Une minorité de citoyens",
          "stepBadge": "Une minorité de citoyens",
          "paragraphText": "Seuls les citoyens participent à la vie politique : environ 40 000 sur 400 000 habitants, soit 10 %.\nLes femmes, les métèques et les esclaves en sont exclus.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p05_q1",
            "type": "mcq",
            "prompt": "Quelle part de la population de l'Attique participe à la vie politique ?",
            "options": [
              "Environ 50 %",
              "Environ 10 %",
              "Environ 90 %",
              "La totalité"
            ],
            "correctAnswerIndex": 1,
            "explanation": "40 000 citoyens sur 400 000 habitants : environ 10 %."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les exclus",
          "stepTheme": "Les exclus",
          "stepBadge": "Les exclus",
          "paragraphText": "Sont exclus de la vie politique :\n• les femmes ;\n• les métèques (étrangers) ;\n• les esclaves.\nIls forment la grande majorité de la population.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p05_q2",
            "type": "mcq",
            "prompt": "Lequel de ces groupes est exclu de la vie politique athénienne ?",
            "options": [
              "Les citoyens pauvres",
              "Les citoyens riches",
              "Les stratèges",
              "Les femmes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les femmes, comme les métèques et les esclaves, n'ont aucun droit politique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Des inégalités entre citoyens",
          "stepTheme": "Des inégalités entre citoyens",
          "stepBadge": "Des inégalités entre citoyens",
          "paragraphText": "En théorie, les citoyens sont égaux. En réalité, les plus pauvres participent peu :\n• ils ne peuvent pas toujours quitter leur travail ;\n• ils sont souvent moins instruits et prennent rarement la parole.\nLes riches dominent la vie politique.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p05_q3",
            "type": "mcq",
            "prompt": "Pourquoi les citoyens pauvres participaient-ils peu à la vie politique ?",
            "options": [
              "Parce qu'ils travaillaient et étaient souvent moins instruits",
              "Parce qu'une loi leur interdisait de voter",
              "Parce qu'ils vivaient tous hors de l'Attique",
              "Parce qu'ils étaient tous esclaves"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le manque de temps et d'instruction éloignait les pauvres de la vie politique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les mandats illimités",
          "stepTheme": "Les mandats illimités",
          "stepBadge": "Les mandats illimités",
          "paragraphText": "Le nombre de mandats n'est pas limité : un stratège peut être réélu sans fin.\nPériclès a été réélu stratège chaque année de 443 à 429 av. J.-C.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p05_q4",
            "type": "mcq",
            "prompt": "Quel stratège a été réélu chaque année de 443 à 429 av. J.-C. ?",
            "options": [
              "Clisthène",
              "Solon",
              "Périclès",
              "Dracon"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Périclès a dominé la vie politique athénienne pendant près de 15 ans."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Jugements sans appel",
          "stepTheme": "Jugements sans appel",
          "stepBadge": "Jugements sans appel",
          "paragraphText": "Les décisions de l'Héliée sont sans appel : une fois la sentence prononcée, on ne peut pas la contester devant un autre tribunal.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p05_q5",
            "type": "mcq",
            "prompt": "Pourquoi l'absence d'appel est-elle une limite de la justice athénienne ?",
            "options": [
              "Parce que les procès duraient plusieurs années",
              "Parce que les juges étaient tous des étrangers",
              "Parce que les esclaves jugeaient les citoyens",
              "Parce qu'on ne peut pas faire corriger une erreur judiciaire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Sans appel, une erreur de jugement ne peut pas être réparée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La fin de la démocratie",
          "stepTheme": "La fin de la démocratie",
          "stepBadge": "La fin de la démocratie",
          "paragraphText": "La démocratie athénienne disparaît au IVe siècle av. J.-C., après les défaites militaires d'Athènes face à la Macédoine.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p05_q6",
            "type": "mcq",
            "prompt": "À quelle époque la démocratie athénienne disparaît-elle ?",
            "options": [
              "Au XIXe siècle après J.-C., avec la colonisation",
              "Au VIIIe siècle av. J.-C., avant sa création",
              "Au IVe siècle av. J.-C., après des défaites militaires",
              "Au XXe siècle, après la Seconde Guerre mondiale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les défaites face à la Macédoine mettent fin à la démocratie athénienne."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Peser le pour et le contre",
          "stepTheme": "Peser le pour et le contre",
          "stepBadge": "Peser le pour et le contre",
          "paragraphText": "Pour juger la démocratie athénienne, on distingue :\n• ses apports : égalité devant la loi, vote, tirage au sort, liberté de parole ;\n• ses limites : peu de citoyens, inégalités, mandats illimités.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p05_q7",
            "type": "mcq",
            "prompt": "Lequel de ces éléments est un apport, et non une limite, de la démocratie athénienne ?",
            "options": [
              "L'exclusion des femmes et des métèques",
              "L'égalité des citoyens devant la loi (isonomie)",
              "Les mandats illimités des stratèges",
              "Les jugements sans appel"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'isonomie est un apport ; les trois autres sont des limites."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p05_q1",
          "type": "mcq",
          "prompt": "Quelle part de la population de l'Attique participe à la vie politique ?",
          "options": [
            "Environ 50 %",
            "Environ 10 %",
            "Environ 90 %",
            "La totalité"
          ],
          "correctAnswerIndex": 1,
          "explanation": "40 000 citoyens sur 400 000 habitants : environ 10 %."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p05_q2",
          "type": "mcq",
          "prompt": "Lequel de ces groupes est exclu de la vie politique athénienne ?",
          "options": [
            "Les citoyens pauvres",
            "Les citoyens riches",
            "Les stratèges",
            "Les femmes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les femmes, comme les métèques et les esclaves, n'ont aucun droit politique."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p05_q3",
          "type": "mcq",
          "prompt": "Pourquoi les citoyens pauvres participaient-ils peu à la vie politique ?",
          "options": [
            "Parce qu'ils travaillaient et étaient souvent moins instruits",
            "Parce qu'une loi leur interdisait de voter",
            "Parce qu'ils vivaient tous hors de l'Attique",
            "Parce qu'ils étaient tous esclaves"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le manque de temps et d'instruction éloignait les pauvres de la vie politique."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p05_q4",
          "type": "mcq",
          "prompt": "Quel stratège a été réélu chaque année de 443 à 429 av. J.-C. ?",
          "options": [
            "Clisthène",
            "Solon",
            "Périclès",
            "Dracon"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Périclès a dominé la vie politique athénienne pendant près de 15 ans."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p05_q5",
          "type": "mcq",
          "prompt": "Pourquoi l'absence d'appel est-elle une limite de la justice athénienne ?",
          "options": [
            "Parce que les procès duraient plusieurs années",
            "Parce que les juges étaient tous des étrangers",
            "Parce que les esclaves jugeaient les citoyens",
            "Parce qu'on ne peut pas faire corriger une erreur judiciaire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Sans appel, une erreur de jugement ne peut pas être réparée."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p05_q6",
          "type": "mcq",
          "prompt": "À quelle époque la démocratie athénienne disparaît-elle ?",
          "options": [
            "Au XIXe siècle après J.-C., avec la colonisation",
            "Au VIIIe siècle av. J.-C., avant sa création",
            "Au IVe siècle av. J.-C., après des défaites militaires",
            "Au XXe siècle, après la Seconde Guerre mondiale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les défaites face à la Macédoine mettent fin à la démocratie athénienne."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p05_q7",
          "type": "mcq",
          "prompt": "Lequel de ces éléments est un apport, et non une limite, de la démocratie athénienne ?",
          "options": [
            "L'exclusion des femmes et des métèques",
            "L'égalité des citoyens devant la loi (isonomie)",
            "Les mandats illimités des stratèges",
            "Les jugements sans appel"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'isonomie est un apport ; les trois autres sont des limites."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p06",
      "order": 6,
      "title": "L'héritage de la démocratie athénienne",
      "summary": "Ce que les démocraties actuelles doivent à Athènes et en quoi elles diffèrent.",
      "conceptExplanation": "Athènes est considérée comme le berceau de la démocratie. Les démocraties actuelles lui doivent de grands principes : le pouvoir du peuple, l'égalité des citoyens devant la loi, le vote, la liberté de parole, les lois écrites et le contrôle des dirigeants. L'historien grec Thucydide fait dire à Périclès que le régime athénien est « une démocratie » parce que les choses y dépendent « non pas du petit nombre mais de la majorité ».\n\nLes démocraties actuelles ont enrichi ce modèle :\n- elles sont surtout représentatives : les citoyens élisent des représentants (députés, président) ;\n- le droit de vote est élargi à tous les adultes, femmes comprises ; l'esclavage est aboli ;\n- les pouvoirs sont séparés (législatif, exécutif, judiciaire) ;\n- les mandats sont souvent limités, et la justice permet de faire appel.\n\nElles gardent aussi des faiblesses : abstention, inégalités, corruption, ou dirigeants qui cherchent à se maintenir au pouvoir.",
      "keyRule": "Athènes, berceau de la démocratie : pouvoir du peuple, isonomie, vote ; les démocraties actuelles sont représentatives, ouvertes à tous les adultes, avec séparation des pouvoirs.",
      "formulas": [],
      "workedExample": {
        "title": "Comparer hier et aujourd'hui",
        "statement": "Quelle différence majeure entre la démocratie athénienne et celle d'aujourd'hui ?",
        "methodSteps": [
          "À Athènes, seuls les hommes citoyens votent, eux-mêmes, à l'assemblée.",
          "Aujourd'hui, tous les adultes, femmes comprises, élisent des représentants."
        ],
        "conclusion": "On est passé d'une démocratie directe et restreinte à une démocratie représentative et ouverte."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le berceau de la démocratie",
          "stepTheme": "Le berceau de la démocratie",
          "stepBadge": "Le berceau de la démocratie",
          "paragraphText": "Athènes est considérée comme le berceau de la démocratie : c'est là que ce régime est né, aux VIe et Ve siècles av. J.-C.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p06_q1",
            "type": "mcq",
            "prompt": "Pourquoi dit-on qu'Athènes est le berceau de la démocratie ?",
            "options": [
              "Parce que la démocratie y est née aux VIe et Ve siècles av. J.-C.",
              "Parce que la démocratie y existe sans interruption depuis 3 000 ans",
              "Parce que tous les habitants y votaient, esclaves compris",
              "Parce qu'Athènes a imposé la démocratie à toute l'Afrique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La démocratie apparaît à Athènes avec les réformes de Solon puis de Clisthène."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le témoignage de Thucydide",
          "stepTheme": "Le témoignage de Thucydide",
          "stepBadge": "Le témoignage de Thucydide",
          "paragraphText": "L'historien Thucydide fait dire à Périclès que le régime athénien est une démocratie parce que les choses y dépendent « non pas du petit nombre mais de la majorité ».",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p06_q2",
            "type": "mcq",
            "prompt": "Selon le discours rapporté par Thucydide, pourquoi le régime athénien est-il une démocratie ?",
            "options": [
              "Parce que les décisions dépendent de la majorité et non du petit nombre",
              "Parce que les décisions dépendent d'un seul homme",
              "Parce que les lois sont copiées sur celles des autres cités",
              "Parce que seuls les riches gouvernent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La démocratie, c'est le gouvernement de la majorité."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Des principes hérités",
          "stepTheme": "Des principes hérités",
          "stepBadge": "Des principes hérités",
          "paragraphText": "Les démocraties actuelles ont hérité d'Athènes :\n• le pouvoir du peuple ;\n• l'égalité devant la loi ;\n• le vote et la liberté de parole ;\n• les lois écrites et le contrôle des dirigeants.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p06_q3",
            "type": "mcq",
            "prompt": "Lequel de ces principes les démocraties actuelles ont-elles hérité d'Athènes ?",
            "options": [
              "Le pouvoir absolu d'un roi-dieu",
              "L'égalité des citoyens devant la loi",
              "L'esclavage pour dettes",
              "L'exclusion des femmes du vote"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'isonomie athénienne est devenue un principe universel."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La démocratie représentative",
          "stepTheme": "La démocratie représentative",
          "stepBadge": "La démocratie représentative",
          "paragraphText": "Les démocraties actuelles sont surtout représentatives : les citoyens élisent des représentants (députés, président) qui gouvernent et votent les lois en leur nom.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p06_q4",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une démocratie représentative ?",
            "options": [
              "Un régime où tous les citoyens votent eux-mêmes chaque loi sur une colline",
              "Un régime où un roi décide sans élection",
              "Un régime où les citoyens élisent des représentants qui décident en leur nom",
              "Un régime où les juges sont tirés au sort à vie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Dans une démocratie représentative, le peuple délègue son pouvoir à des élus."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Un droit de vote élargi",
          "stepTheme": "Un droit de vote élargi",
          "stepBadge": "Un droit de vote élargi",
          "paragraphText": "Aujourd'hui, le droit de vote est accordé à tous les citoyens adultes, femmes comprises.\nL'esclavage est aboli.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p06_q5",
            "type": "mcq",
            "prompt": "Qu'est-ce qui distingue les démocraties actuelles de la démocratie athénienne ?",
            "options": [
              "Seuls les hommes riches peuvent voter",
              "Les esclaves votent à la place des citoyens",
              "Le vote est réservé aux soldats",
              "Le droit de vote est accordé à tous les adultes, femmes comprises"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les démocraties actuelles ont étendu le vote à tous les adultes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La séparation des pouvoirs",
          "stepTheme": "La séparation des pouvoirs",
          "stepBadge": "La séparation des pouvoirs",
          "paragraphText": "Les démocraties actuelles séparent les pouvoirs :\n• législatif (voter les lois) ;\n• exécutif (gouverner) ;\n• judiciaire (rendre la justice).\nAinsi, aucun pouvoir ne domine les autres.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p06_q6",
            "type": "mcq",
            "prompt": "Quel pouvoir est chargé de voter les lois ?",
            "options": [
              "Le pouvoir exécutif",
              "Le pouvoir judiciaire",
              "Le pouvoir législatif",
              "Le pouvoir religieux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le législatif vote les lois ; l'exécutif gouverne ; le judiciaire juge."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Des faiblesses actuelles",
          "stepTheme": "Des faiblesses actuelles",
          "stepBadge": "Des faiblesses actuelles",
          "paragraphText": "Les démocraties actuelles ont aussi des faiblesses :\n• l'abstention (des citoyens ne votent pas) ;\n• les inégalités et la corruption ;\n• des dirigeants qui cherchent à se maintenir au pouvoir.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p06_q7",
            "type": "mcq",
            "prompt": "Lequel de ces problèmes est une faiblesse des démocraties actuelles ?",
            "options": [
              "L'esclavage pour dettes",
              "L'interdiction de voter pour les femmes",
              "Le pouvoir absolu du pharaon",
              "L'abstention de nombreux électeurs"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Quand beaucoup de citoyens ne votent pas, la démocratie s'affaiblit."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p06_q1",
          "type": "mcq",
          "prompt": "Pourquoi dit-on qu'Athènes est le berceau de la démocratie ?",
          "options": [
            "Parce que la démocratie y est née aux VIe et Ve siècles av. J.-C.",
            "Parce que la démocratie y existe sans interruption depuis 3 000 ans",
            "Parce que tous les habitants y votaient, esclaves compris",
            "Parce qu'Athènes a imposé la démocratie à toute l'Afrique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La démocratie apparaît à Athènes avec les réformes de Solon puis de Clisthène."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p06_q2",
          "type": "mcq",
          "prompt": "Selon le discours rapporté par Thucydide, pourquoi le régime athénien est-il une démocratie ?",
          "options": [
            "Parce que les décisions dépendent de la majorité et non du petit nombre",
            "Parce que les décisions dépendent d'un seul homme",
            "Parce que les lois sont copiées sur celles des autres cités",
            "Parce que seuls les riches gouvernent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La démocratie, c'est le gouvernement de la majorité."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p06_q3",
          "type": "mcq",
          "prompt": "Lequel de ces principes les démocraties actuelles ont-elles hérité d'Athènes ?",
          "options": [
            "Le pouvoir absolu d'un roi-dieu",
            "L'égalité des citoyens devant la loi",
            "L'esclavage pour dettes",
            "L'exclusion des femmes du vote"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'isonomie athénienne est devenue un principe universel."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p06_q4",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une démocratie représentative ?",
          "options": [
            "Un régime où tous les citoyens votent eux-mêmes chaque loi sur une colline",
            "Un régime où un roi décide sans élection",
            "Un régime où les citoyens élisent des représentants qui décident en leur nom",
            "Un régime où les juges sont tirés au sort à vie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Dans une démocratie représentative, le peuple délègue son pouvoir à des élus."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p06_q5",
          "type": "mcq",
          "prompt": "Qu'est-ce qui distingue les démocraties actuelles de la démocratie athénienne ?",
          "options": [
            "Seuls les hommes riches peuvent voter",
            "Les esclaves votent à la place des citoyens",
            "Le vote est réservé aux soldats",
            "Le droit de vote est accordé à tous les adultes, femmes comprises"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les démocraties actuelles ont étendu le vote à tous les adultes."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p06_q6",
          "type": "mcq",
          "prompt": "Quel pouvoir est chargé de voter les lois ?",
          "options": [
            "Le pouvoir exécutif",
            "Le pouvoir judiciaire",
            "Le pouvoir législatif",
            "Le pouvoir religieux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le législatif vote les lois ; l'exécutif gouverne ; le judiciaire juge."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p06_q7",
          "type": "mcq",
          "prompt": "Lequel de ces problèmes est une faiblesse des démocraties actuelles ?",
          "options": [
            "L'esclavage pour dettes",
            "L'interdiction de voter pour les femmes",
            "Le pouvoir absolu du pharaon",
            "L'abstention de nombreux électeurs"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Quand beaucoup de citoyens ne votent pas, la démocratie s'affaiblit."
        }
      ]
    }
  ]
};
