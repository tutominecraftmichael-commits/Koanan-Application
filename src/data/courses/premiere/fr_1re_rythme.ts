import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir des PDF officiels « 1ere_Perfec_langue » S3 et S4 (le rythme). Toutes les Premières.
// Fichier généré (scratchpad build_1re_fr_rythme.mjs) : modifier le générateur plutôt que ce fichier.
export const FR_1RE_PL_L03_RYTHME: CurriculumChapter = {
  "id": "premiere_a1_francais_pl_l03_rythme",
  "subjectId": "francais",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 6,
  "title": "Perfectionnement de la langue : le rythme dans le texte poétique et dans la prose",
  "summary": "Accent tonique, coupe et césure ; enjambement, rejet et contre-rejet ; sonorités et rimes ; rythmes binaire, ternaire, croissant et décroissant dans la prose (leçon 3, séances 1 et 2).",
  "officialVolumeHours": 2,
  "contentVersion": 2,
  "source": "1ere_Perfec_langue S3 et S4 « Rythme dans le texte poétique et en prose » 1 et 2 (École numérique)",
  "points": [
    {
      "id": "premiere_a1_francais_pl_l03_rythme_p01",
      "order": 1,
      "title": "Accent tonique, coupe et césure",
      "summary": "Repérer l’accent tonique, compter les syllabes, placer les coupes et la césure de l’alexandrin.",
      "conceptExplanation": "Situation : des élèves de Première préparent la lecture expressive d’un poème. Pour bien le dire, ils doivent repérer le rythme : les accents, les pauses et les groupes de syllabes.\n- Le rythme : c’est le retour régulier des accents et des pauses dans un texte ; il donne au texte sa musique et souligne le sens.\n- L’accent tonique : en français, il tombe sur la dernière syllabe prononcée d’un mot ou d’un groupe de mots. Le e muet final n’est jamais accentué : in-fa-MI(e), en-ne-MI(e), dé-ses-POIR.\n- Compter les syllabes : le e muet se prononce devant une consonne, s’élide devant une voyelle, et ne compte pas en fin de vers.\n- La coupe : pause brève après une syllabe accentuée, à l’intérieur de l’hémistiche ; on la note par une barre ( / ).\n- La césure : pause principale de l’alexandrin, après la 6e syllabe ; elle le partage en deux hémistiches de 6 syllabes ; on la note par une double barre ( // ).\n- Exemple : « Ô rage / ô désespoir // ô vieillesse / ennemie ! » : 2 + 4 // 3 + 3 syllabes.\n- Corrections du document : on parle de « coupe » (et non de « couple ») ; l’auteur du Cid est Pierre Corneille (et non « Correille ») ; dans « infamie » et « ennemie », l’accent tombe sur « mi », pas sur « fa » ni sur « ne » ; le vers du Cid est « N’ai-je donc tant vécu que pour cette infamie ? » : sans « que », il n’aurait que 11 syllabes.",
      "keyRule": "L’accent tombe sur la dernière syllabe prononcée du groupe ; la coupe ( / ) suit un accent ; la césure ( // ) partage l’alexandrin après la 6e syllabe.",
      "formulas": [],
      "workedExample": {
        "title": "Scander un alexandrin du Cid",
        "statement": "Comptez les syllabes du vers « N’ai-je donc tant vécu que pour cette infamie ? » (Pierre Corneille, Le Cid) et placez la césure.",
        "methodSteps": [
          "N’ai (1) je (2) donc (3) tant (4) vé (5) cu (6) : premier hémistiche.",
          "que (7) pour (8) cet (9) t’in (10) fa (11) mie (12) : le e de « cette » s’élide devant la voyelle de « infamie », et le e final de « infamie » ne compte pas.",
          "Le vers compte 12 syllabes ; la césure se place après « vécu »."
        ],
        "conclusion": "N’ai-je donc tant vécu // que pour cette infamie ? : un alexandrin coupé en deux hémistiches de 6 syllabes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Accent tonique",
          "stepTheme": "Où tombe l’accent ?",
          "stepTitle": "L’accent tonique en français",
          "paragraphText": "En français, l’**accent tonique** tombe sur la **dernière syllabe prononcée** d’un mot ou d’un groupe de mots. Le **e muet** final n’est jamais accentué.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p01_q1",
            "type": "mcq",
            "prompt": "En français, sur quelle syllabe tombe l’accent tonique d’un mot ou d’un groupe de mots ?",
            "options": [
              "Sur la dernière syllabe prononcée",
              "Toujours sur la première syllabe",
              "Sur le e muet final",
              "Sur la syllabe la plus longue"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le français accentue la fin du groupe, jamais le e muet."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepBadge": "Accent tonique",
          "stepTheme": "Correction",
          "stepTitle": "Infamie, ennemie : l’accent est sur « mi »",
          "paragraphText": "Le document place l’accent sur « fa » dans « infamie » et sur « ne » dans « ennemie ». C’est faux : le e final est muet, donc la dernière syllabe prononcée est **« mi »** : in-fa-**MI**(e), en-ne-**MI**(e).",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p01_q2",
            "type": "mcq",
            "prompt": "Dans le mot « infamie », prononcé in-fa-mi(e), sur quelle syllabe tombe l’accent tonique ?",
            "options": [
              "Sur « mi »",
              "Sur « in »",
              "Sur « fa »",
              "Sur le e muet final"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Mi » est la dernière syllabe prononcée ; le e final est muet."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Compter les syllabes",
          "stepTheme": "Le e muet",
          "stepTitle": "Le e muet dans le vers",
          "paragraphText": "Pour compter les syllabes d’un vers : le **e muet** se prononce **devant une consonne**, s’**élide devant une voyelle**, et **ne compte pas en fin de vers**. Ainsi « cette infamie » se dit cet-t’in-fa-mi(e).",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p01_q3",
            "type": "mcq",
            "prompt": "Dans un vers, quand le e muet ne compte-t-il pas comme une syllabe ?",
            "options": [
              "Devant une voyelle et en fin de vers",
              "Devant une consonne",
              "Toujours, partout dans le vers",
              "Jamais, il compte toujours"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il s’élide devant une voyelle et ne compte pas en fin de vers ; devant une consonne, il se prononce."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Le vers du Cid",
          "stepTheme": "Correction",
          "stepTitle": "Un vers mal recopié",
          "paragraphText": "Le document cite « N’ai-je donc tant vécu pour cette infamie ? », qui n’a que **11 syllabes**. Le vrai vers de Corneille est : **« N’ai-je donc tant vécu que pour cette infamie ? »**, un alexandrin de **12 syllabes**.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p01_q4",
            "type": "mcq",
            "prompt": "Combien de syllabes compte le vers de Pierre Corneille « N’ai-je donc tant vécu que pour cette infamie ? » (Le Cid) ?",
            "options": [
              "12 syllabes",
              "11 syllabes",
              "10 syllabes",
              "13 syllabes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "N’ai-je-donc-tant-vé-cu (6) // que-pour-cet-t’in-fa-mie (6) = 12."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Coupe et césure",
          "stepTheme": "Les pauses",
          "stepTitle": "Coupe et césure",
          "paragraphText": "La **coupe** ( / ) est une pause brève après une syllabe accentuée, à l’intérieur de l’hémistiche. La **césure** ( // ) est la pause principale de l’alexandrin, **après la 6e syllabe** : elle le partage en deux **hémistiches**.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p01_q5",
            "type": "mcq",
            "prompt": "Où se place la césure dans un alexandrin classique ?",
            "options": [
              "Après la 6e syllabe",
              "Après la 4e syllabe",
              "À la fin du vers",
              "Après chaque mot"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle partage le vers de 12 syllabes en deux hémistiches de 6."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les outils du rythme dans le vers",
            "caption": "Une barre simple marque une coupe, une double barre la césure.",
            "tableData": {
              "headers": [
                "Notion",
                "Définition",
                "Exemple"
              ],
              "rows": [
                [
                  "Accent tonique",
                  "Sur la dernière syllabe prononcée d’un mot ou d’un groupe",
                  "in-fa-MI(e), en-ne-MI(e), dé-ses-POIR"
                ],
                [
                  "Coupe ( / )",
                  "Pause brève après une syllabe accentuée, à l’intérieur de l’hémistiche",
                  "Ô rage / ô désespoir"
                ],
                [
                  "Césure ( // )",
                  "Pause principale au milieu de l’alexandrin, après la 6e syllabe",
                  "N’ai-je donc tant vécu // que pour cette infamie ?"
                ],
                [
                  "Hémistiche",
                  "Chacune des deux moitiés de l’alexandrin (6 syllabes)",
                  "Plus l’offenseur est cher"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Césure",
          "stepTheme": "Corneille",
          "stepTitle": "Placer la césure",
          "paragraphText": "« Plus l’offenseur est cher // et plus grande est l’offense » (Corneille, Le Cid) : Plus (1) l’of (2) fen (3) seur (4) est (5) **cher** (6) // et (7) plus (8) gran (9) d’est (10) l’of (11) fense (12). La césure suit « **cher** ».",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p01_q6",
            "type": "mcq",
            "prompt": "Dans l’alexandrin « Plus l’offenseur est cher et plus grande est l’offense » (Pierre Corneille, Le Cid), après quel mot se place la césure ?",
            "options": [
              "Après « cher »",
              "Après « offenseur »",
              "Après « grande »",
              "Après « plus »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Cher » est la 6e syllabe : « Plus l’offenseur est cher » forme le premier hémistiche."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Coupes",
          "stepTheme": "Le Cid",
          "stepTitle": "Les coupes d’un vers célèbre",
          "paragraphText": "« Ô rage / ô désespoir // ô vieillesse / ennemie ! » : les coupes suivent les accents (ra-, -poir, -lesse, -mi) et donnent **2 + 4 // 3 + 3** syllabes. Les exclamations hachées traduisent la colère de don Diègue.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p01_q7",
            "type": "mcq",
            "prompt": "« Ô rage ! ô désespoir ! ô vieillesse ennemie ! / N’ai-je donc tant vécu que pour cette infamie ? » (Pierre Corneille, Le Cid) Comment se découpe le premier vers en groupes de syllabes ?",
            "options": [
              "2 + 4 // 3 + 3",
              "6 + 6 sans aucune coupe",
              "4 + 4 + 4",
              "3 + 3 // 2 + 4"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ô rage (2) / ô désespoir (4) // ô vieillesse (3) / ennemie (3)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p01_q1",
          "type": "mcq",
          "prompt": "En français, sur quelle syllabe tombe l’accent tonique d’un mot ou d’un groupe de mots ?",
          "options": [
            "Sur la dernière syllabe prononcée",
            "Toujours sur la première syllabe",
            "Sur le e muet final",
            "Sur la syllabe la plus longue"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le français accentue la fin du groupe, jamais le e muet."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p01_q2",
          "type": "mcq",
          "prompt": "Dans le mot « infamie », prononcé in-fa-mi(e), sur quelle syllabe tombe l’accent tonique ?",
          "options": [
            "Sur « mi »",
            "Sur « in »",
            "Sur « fa »",
            "Sur le e muet final"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Mi » est la dernière syllabe prononcée ; le e final est muet."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p01_q3",
          "type": "mcq",
          "prompt": "Dans un vers, quand le e muet ne compte-t-il pas comme une syllabe ?",
          "options": [
            "Devant une voyelle et en fin de vers",
            "Devant une consonne",
            "Toujours, partout dans le vers",
            "Jamais, il compte toujours"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il s’élide devant une voyelle et ne compte pas en fin de vers ; devant une consonne, il se prononce."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p01_q4",
          "type": "mcq",
          "prompt": "Combien de syllabes compte le vers de Pierre Corneille « N’ai-je donc tant vécu que pour cette infamie ? » (Le Cid) ?",
          "options": [
            "12 syllabes",
            "11 syllabes",
            "10 syllabes",
            "13 syllabes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "N’ai-je-donc-tant-vé-cu (6) // que-pour-cet-t’in-fa-mie (6) = 12."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p01_q5",
          "type": "mcq",
          "prompt": "Où se place la césure dans un alexandrin classique ?",
          "options": [
            "Après la 6e syllabe",
            "Après la 4e syllabe",
            "À la fin du vers",
            "Après chaque mot"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle partage le vers de 12 syllabes en deux hémistiches de 6."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p01_q6",
          "type": "mcq",
          "prompt": "Dans l’alexandrin « Plus l’offenseur est cher et plus grande est l’offense » (Pierre Corneille, Le Cid), après quel mot se place la césure ?",
          "options": [
            "Après « cher »",
            "Après « offenseur »",
            "Après « grande »",
            "Après « plus »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Cher » est la 6e syllabe : « Plus l’offenseur est cher » forme le premier hémistiche."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p01_q7",
          "type": "mcq",
          "prompt": "« Ô rage ! ô désespoir ! ô vieillesse ennemie ! / N’ai-je donc tant vécu que pour cette infamie ? » (Pierre Corneille, Le Cid) Comment se découpe le premier vers en groupes de syllabes ?",
          "options": [
            "2 + 4 // 3 + 3",
            "6 + 6 sans aucune coupe",
            "4 + 4 + 4",
            "3 + 3 // 2 + 4"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ô rage (2) / ô désespoir (4) // ô vieillesse (3) / ennemie (3)."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l03_rythme_p02",
      "order": 2,
      "title": "Enjambement, rejet et contre-rejet",
      "summary": "Reconnaître quand la phrase déborde le vers et dire quel mot est mis en relief.",
      "conceptExplanation": "- L’enjambement : la phrase ne s’arrête pas en fin de vers ; elle continue sur le vers suivant, sans pause. Musset (« Souvenir ») : « Dante, pourquoi dis-tu qu’il n’est pire misère / Qu’un souvenir heureux dans les jours de douleur ? »\n- Le rejet : un élément court de la phrase est rejeté au début du vers suivant ; il est ainsi mis en relief. Victor Hugo (Hernani) : « Serait-ce déjà lui ? C’est bien à l’escalier / Dérobé. » Rimbaud (« Le Bateau ivre ») : « Et dès lors, je me suis baigné dans le Poème / De la Mer, infusé d’astres, et lactescent ».\n- Le contre-rejet : un élément court, placé à la fin d’un vers, commence une phrase qui se poursuit au vers suivant. Verlaine (« Nevermore ») : « Souvenir, souvenir, que me veux-tu ? L’automne / Faisait voler la grive à travers l’air atone ».\n- L’effet : rejet et contre-rejet créent une discordance entre la phrase et le vers ; ils attirent l’attention sur le mot isolé.\n- Corrections du document : dans l’exemple de La Fontaine « …de manger / Le berger », l’élément rejeté et mis en relief est « Le berger », au début du vers suivant, et non « manger » ; le vers de Musset est « qu’il n’est pire misère » (et non « qu’il expire misère »), dans le poème « Souvenir » (et non « Les Nuits ») ; chez Rimbaud, il faut lire « Accrochant follement aux herbes des haillons » (et non « Accouchant ») et « lactescent » (et non « lactoscent »).",
      "keyRule": "Enjambement : la phrase continue sur le vers suivant. Rejet : élément court au début du vers suivant. Contre-rejet : élément court en fin de vers.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser une discordance chez Rimbaud",
        "statement": "« C’est un trou de verdure où chante une rivière / Accrochant follement aux herbes des haillons / D’argent ; où le soleil, de la montagne fière, / Luit » (Rimbaud, « Le Dormeur du val »). Repérez les rejets.",
        "methodSteps": [
          "La phrase « des haillons d’argent » est coupée : « D’argent » est rejeté au début du vers 3.",
          "« où le soleil, de la montagne fière, luit » : le verbe « Luit » est rejeté au début du vers 4.",
          "Ces mots courts, isolés en tête de vers, sont mis en relief : l’éclat de l’argent, la lumière du soleil."
        ],
        "conclusion": "Deux rejets : « D’argent » et « Luit » soulignent la lumière du paysage."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Enjambement",
          "stepTheme": "La phrase continue",
          "stepTitle": "L’enjambement",
          "paragraphText": "Il y a **enjambement** quand la phrase ne s’arrête pas en fin de vers et **continue sur le vers suivant**, sans pause : « Dante, pourquoi dis-tu qu’il n’est pire misère / **Qu’un souvenir heureux** dans les jours de douleur ? » (Musset, « Souvenir »).",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p02_q1",
            "type": "mcq",
            "prompt": "Dans les vers de Musset « Dante, pourquoi dis-tu qu’il n’est pire misère / Qu’un souvenir heureux dans les jours de douleur ? », quel procédé relie les deux vers ?",
            "options": [
              "Un enjambement : la phrase continue sur le vers suivant",
              "Une césure",
              "Une rime embrassée",
              "Un rythme décroissant"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La comparaison « pire misère / qu’un souvenir heureux » se poursuit d’un vers à l’autre."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Quand la phrase déborde le vers",
            "caption": "Le rejet est placé au début du vers suivant, le contre-rejet à la fin du vers.",
            "tableData": {
              "headers": [
                "Procédé",
                "Ce qui se passe",
                "Exemple"
              ],
              "rows": [
                [
                  "Enjambement",
                  "La phrase continue sur le vers suivant, sans pause en fin de vers",
                  "Musset : « qu’il n’est pire misère / Qu’un souvenir heureux… »"
                ],
                [
                  "Rejet",
                  "Un élément court est rejeté au début du vers suivant",
                  "Hugo : « …à l’escalier / Dérobé. »"
                ],
                [
                  "Contre-rejet",
                  "Un élément court, en fin de vers, annonce la phrase du vers suivant",
                  "Verlaine : « …que me veux-tu ? L’automne / Faisait voler la grive… »"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepBadge": "Musset",
          "stepTheme": "Correction",
          "stepTitle": "Un vers de Musset mal recopié",
          "paragraphText": "Le document écrit « qu’il expire misère » et attribue le vers aux « Nuits ». Le vrai texte est : « Dante, pourquoi dis-tu **qu’il n’est pire misère** / Qu’un souvenir heureux dans les jours de douleur ? », dans le poème **« Souvenir »**.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p02_q2",
            "type": "mcq",
            "prompt": "Que signifie le vers de Musset « Dante, pourquoi dis-tu qu’il n’est pire misère / Qu’un souvenir heureux dans les jours de douleur ? »",
            "options": [
              "Il n’y a pas de plus grand malheur que de se souvenir du bonheur quand on souffre",
              "Dante est mort dans la misère",
              "Le bonheur fait oublier la douleur",
              "La misère expire avec les souvenirs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Il n’est pire misère que » = il n’existe pas de plus grand malheur que."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Rejet",
          "stepTheme": "Au début du vers suivant",
          "stepTitle": "Le rejet",
          "paragraphText": "Le **rejet** : un **élément court** de la phrase est rejeté **au début du vers suivant**, où il est mis en relief. Victor Hugo (Hernani) : « Serait-ce déjà lui ? C’est bien à l’escalier / **Dérobé**. »",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p02_q3",
            "type": "mcq",
            "prompt": "Dans les vers de Victor Hugo « Serait-ce déjà lui ? C’est bien à l’escalier / Dérobé. » (Hernani), quel mot est rejeté ?",
            "options": [
              "« Dérobé »",
              "« escalier »",
              "« lui »",
              "« Serait-ce »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Dérobé » complète « escalier » mais il est placé seul au début du vers suivant."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Rejet",
          "stepTheme": "Correction",
          "stepTitle": "Quel élément est mis en relief ?",
          "paragraphText": "Dans l’exemple de La Fontaine du document, « …de manger / **Le berger** », l’élément **rejeté** est « **Le berger** », placé au début du vers suivant. Le document surligne à tort « manger », qui reste à la fin du premier vers.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p02_q4",
            "type": "mcq",
            "prompt": "Dans deux vers dont le premier se termine par « …de manger » et le second commence par « Le berger », la phrase continuant de l’un à l’autre, quel élément est rejeté ?",
            "options": [
              "« Le berger »",
              "« manger »",
              "« de »",
              "Aucun : il n’y a pas de rejet"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le rejet est toujours au début du vers suivant."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Rejet",
          "stepTheme": "Rimbaud",
          "stepTitle": "Un rejet dans « Le Bateau ivre »",
          "paragraphText": "« Et dès lors, je me suis baigné dans le Poème / **De la Mer**, infusé d’astres, et lactescent » (Rimbaud, « Le Bateau ivre ») : le complément « De la Mer » est rejeté au début du vers 2 ; il fait surgir l’immensité de la mer.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p02_q5",
            "type": "mcq",
            "prompt": "Dans les vers de Rimbaud « Et dès lors, je me suis baigné dans le Poème / De la Mer, infusé d’astres, et lactescent », quel groupe est rejeté ?",
            "options": [
              "« De la Mer »",
              "« Et dès lors »",
              "« lactescent »",
              "« le Poème »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Le Poème de la Mer » est coupé : « De la Mer » ouvre le vers suivant."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepBadge": "Contre-rejet",
          "stepTheme": "En fin de vers",
          "stepTitle": "Le contre-rejet",
          "paragraphText": "Le **contre-rejet** : un **élément court**, placé **à la fin d’un vers**, commence une phrase qui se poursuit au vers suivant. Verlaine : « Souvenir, souvenir, que me veux-tu ? **L’automne** / Faisait voler la grive à travers l’air atone ».",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p02_q6",
            "type": "mcq",
            "prompt": "Dans les vers de Verlaine « Souvenir, souvenir, que me veux-tu ? L’automne / Faisait voler la grive à travers l’air atone », quel procédé met en relief « L’automne » ?",
            "options": [
              "Un contre-rejet",
              "Un rejet",
              "Une césure",
              "Une rime plate"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« L’automne », sujet de « faisait », est isolé à la fin du premier vers."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Rimbaud",
          "stepTheme": "Correction",
          "stepTitle": "Accrochant, et non « Accouchant »",
          "paragraphText": "Le document cite « Accouchant follement aux herbes des haillons ». Rimbaud écrit : « C’est un trou de verdure où chante une rivière / **Accrochant** follement aux herbes des haillons / D’argent ». La rivière **accroche** des reflets d’argent aux herbes.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p02_q7",
            "type": "mcq",
            "prompt": "Dans « Le Dormeur du val » de Rimbaud, « C’est un trou de verdure où chante une rivière / Accrochant follement aux herbes des haillons / D’argent », quel mot est rejeté au début du troisième vers ?",
            "options": [
              "« D’argent »",
              "« Accrochant »",
              "« rivière »",
              "« verdure »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Des haillons d’argent » : « D’argent » est rejeté et mis en relief."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p02_q1",
          "type": "mcq",
          "prompt": "Dans les vers de Musset « Dante, pourquoi dis-tu qu’il n’est pire misère / Qu’un souvenir heureux dans les jours de douleur ? », quel procédé relie les deux vers ?",
          "options": [
            "Un enjambement : la phrase continue sur le vers suivant",
            "Une césure",
            "Une rime embrassée",
            "Un rythme décroissant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La comparaison « pire misère / qu’un souvenir heureux » se poursuit d’un vers à l’autre."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p02_q2",
          "type": "mcq",
          "prompt": "Que signifie le vers de Musset « Dante, pourquoi dis-tu qu’il n’est pire misère / Qu’un souvenir heureux dans les jours de douleur ? »",
          "options": [
            "Il n’y a pas de plus grand malheur que de se souvenir du bonheur quand on souffre",
            "Dante est mort dans la misère",
            "Le bonheur fait oublier la douleur",
            "La misère expire avec les souvenirs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Il n’est pire misère que » = il n’existe pas de plus grand malheur que."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p02_q3",
          "type": "mcq",
          "prompt": "Dans les vers de Victor Hugo « Serait-ce déjà lui ? C’est bien à l’escalier / Dérobé. » (Hernani), quel mot est rejeté ?",
          "options": [
            "« Dérobé »",
            "« escalier »",
            "« lui »",
            "« Serait-ce »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Dérobé » complète « escalier » mais il est placé seul au début du vers suivant."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p02_q4",
          "type": "mcq",
          "prompt": "Dans deux vers dont le premier se termine par « …de manger » et le second commence par « Le berger », la phrase continuant de l’un à l’autre, quel élément est rejeté ?",
          "options": [
            "« Le berger »",
            "« manger »",
            "« de »",
            "Aucun : il n’y a pas de rejet"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le rejet est toujours au début du vers suivant."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p02_q5",
          "type": "mcq",
          "prompt": "Dans les vers de Rimbaud « Et dès lors, je me suis baigné dans le Poème / De la Mer, infusé d’astres, et lactescent », quel groupe est rejeté ?",
          "options": [
            "« De la Mer »",
            "« Et dès lors »",
            "« lactescent »",
            "« le Poème »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Le Poème de la Mer » est coupé : « De la Mer » ouvre le vers suivant."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p02_q6",
          "type": "mcq",
          "prompt": "Dans les vers de Verlaine « Souvenir, souvenir, que me veux-tu ? L’automne / Faisait voler la grive à travers l’air atone », quel procédé met en relief « L’automne » ?",
          "options": [
            "Un contre-rejet",
            "Un rejet",
            "Une césure",
            "Une rime plate"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« L’automne », sujet de « faisait », est isolé à la fin du premier vers."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p02_q7",
          "type": "mcq",
          "prompt": "Dans « Le Dormeur du val » de Rimbaud, « C’est un trou de verdure où chante une rivière / Accrochant follement aux herbes des haillons / D’argent », quel mot est rejeté au début du troisième vers ?",
          "options": [
            "« D’argent »",
            "« Accrochant »",
            "« rivière »",
            "« verdure »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Des haillons d’argent » : « D’argent » est rejeté et mis en relief."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l03_rythme_p03",
      "order": 3,
      "title": "Les sonorités et les rimes",
      "summary": "Reconnaître assonances et allitérations, la disposition et la richesse des rimes.",
      "conceptExplanation": "- L’assonance : répétition d’un même son voyelle. Racine (Phèdre) : « Tout m’afflige et me nuit, et conspire à me nuire » : le son [i] revient (afflige, nuit, conspire, nuire).\n- L’allitération : répétition d’un même son consonne. Racine (Andromaque) : « Pour qui sont ces serpents qui sifflent sur vos têtes ? » : le son [s] imite le sifflement. Hugo (« Booz endormi ») : « Les souffles de la nuit flottaient sur Galgala » : les sons [l] et [f] donnent une impression de douceur et de légèreté.\n- La disposition des rimes : plates ou suivies (AABB), croisées (ABAB), embrassées (ABBA).\n- La richesse des rimes : pauvre (un seul son commun : ami / pari), suffisante (deux sons communs : ami / ennemi), riche (trois sons ou plus : charmante / dormante).\n- Le genre des rimes : féminine quand le vers se termine par un e muet (terre / guerre), masculine sinon (loi / toi).\n- Baudelaire (« L’Horloge ») : « Souviens-toi que le Temps est un joueur avide / Qui gagne sans tricher, à tout coup ! c’est la loi. / Le jour décroît ; la nuit augmente ; souviens-toi ! / Le gouffre a toujours soif ; la clepsydre se vide. » : rimes embrassées (avide, loi, toi, vide).\n- Corrections du document : Racine écrit « conspire à me nuire » (et non « à le nuire ») ; Hugo écrit « flottaient sur Galgala » (le document oublie « sur ») ; Baudelaire écrit « Qui gagne » et « Le gouffre » (et non « Que gagne » et « Le souffre »).",
      "keyRule": "Assonance = voyelle répétée ; allitération = consonne répétée ; rimes plates AABB, croisées ABAB, embrassées ABBA.",
      "formulas": [],
      "workedExample": {
        "title": "Étudier les rimes d’un quatrain de Baudelaire",
        "statement": "« Souviens-toi que le Temps est un joueur avide / Qui gagne sans tricher, à tout coup ! c’est la loi. / Le jour décroît ; la nuit augmente ; souviens-toi ! / Le gouffre a toujours soif ; la clepsydre se vide. » (Baudelaire, « L’Horloge »). Quelle est la disposition des rimes ?",
        "methodSteps": [
          "On relève les sons de fin de vers : avide (A), loi (B), toi (B), vide (A).",
          "Le schéma est ABBA : la rime en « oi » est entourée par la rime en « ide »."
        ],
        "conclusion": "Ce sont des rimes embrassées."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Sonorités",
          "stepTheme": "Voyelle ou consonne",
          "stepTitle": "Assonance et allitération",
          "paragraphText": "L’**assonance** est la répétition d’un même **son voyelle** ; l’**allitération** est la répétition d’un même **son consonne**. Racine : « Pour qui sont ces **s**erpents qui **s**ifflent **s**ur vos têtes ? » : allitération en [s].",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p03_q1",
            "type": "mcq",
            "prompt": "Dans le vers de Racine « Pour qui sont ces serpents qui sifflent sur vos têtes ? » (Andromaque), quel procédé sonore entend-on ?",
            "options": [
              "Une allitération en [s]",
              "Une assonance en [a]",
              "Une rime embrassée",
              "Un rejet"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le son consonne [s] revient : sont, ces, serpents, sifflent, sur. Il imite le sifflement des serpents."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Assonance",
          "stepTheme": "Racine",
          "stepTitle": "L’assonance en [i]",
          "paragraphText": "« Tout m’afflige et me nuit, et conspire à me nuire » (Racine, Phèdre) : le son voyelle **[i]** revient (afflige, nuit, conspire, nuire). C’est une **assonance** qui fait entendre la plainte de Phèdre.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p03_q2",
            "type": "mcq",
            "prompt": "Dans le vers de Racine « Tout m’afflige et me nuit, et conspire à me nuire » (Phèdre), quel son voyelle est répété ?",
            "options": [
              "Le son [i]",
              "Le son [a]",
              "Le son [o]",
              "Aucun son n’est répété"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Afflige, nuit, conspire, nuire : assonance en [i]."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "Citations",
          "stepTheme": "Correction",
          "stepTitle": "Racine et Hugo mal recopiés",
          "paragraphText": "Le document cite « conspire **à le nuire** » et « Les souffles de la nuit flottaient Galgala ». Il faut lire « conspire **à me nuire** » (on nuit **à** quelqu’un : « me » et non « le ») et « flottaient **sur** Galgala » (Victor Hugo, « Booz endormi »).",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p03_q3",
            "type": "mcq",
            "prompt": "Le verbe « nuire » se construit avec « à » : on nuit à quelqu’un. Laquelle de ces phrases est correcte ?",
            "options": [
              "Tout conspire à me nuire",
              "Tout conspire à le nuire",
              "Tout conspire à nuire lui",
              "Tout conspire le nuire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Me » remplace « à moi » : « conspire à me nuire »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Allitération",
          "stepTheme": "Hugo",
          "stepTitle": "La douceur d’une nuit d’été",
          "paragraphText": "« Les souffles de la nuit flottaient sur Galgala » (Victor Hugo, « Booz endormi ») : les sons **[l]** et **[f]** reviennent (les, souffles, la, flottaient, Galgala) ; cette **allitération** suggère la douceur et la légèreté de la nuit.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p03_q4",
            "type": "mcq",
            "prompt": "Dans le vers de Victor Hugo « Les souffles de la nuit flottaient sur Galgala », quelle allitération entend-on ?",
            "options": [
              "Une allitération en [l] et en [f]",
              "Une allitération en [r]",
              "Une assonance en [u] seulement",
              "Aucune répétition de son"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les, souffles, la, flottaient, Galgala : [l] et [f] reviennent."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Disposition",
          "stepTheme": "Plates, croisées, embrassées",
          "stepTitle": "La disposition des rimes",
          "paragraphText": "Rimes **plates** (ou suivies) : **AABB**. Rimes **croisées** : **ABAB**. Rimes **embrassées** : **ABBA**.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p03_q5",
            "type": "mcq",
            "prompt": "Quatre vers se terminent par « avide », « loi », « toi », « vide ». Quelle est la disposition des rimes ?",
            "options": [
              "Rimes embrassées (ABBA)",
              "Rimes plates (AABB)",
              "Rimes croisées (ABAB)",
              "Il n’y a pas de rimes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avide (A), loi (B), toi (B), vide (A) : schéma ABBA."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "La disposition des rimes",
            "caption": "Chaque lettre désigne un même son en fin de vers.",
            "tableData": {
              "headers": [
                "Disposition",
                "Schéma",
                "Principe"
              ],
              "rows": [
                [
                  "Rimes plates (suivies)",
                  "AABB",
                  "Deux vers de suite riment ensemble"
                ],
                [
                  "Rimes croisées",
                  "ABAB",
                  "Les rimes alternent"
                ],
                [
                  "Rimes embrassées",
                  "ABBA",
                  "Une rime en entoure une autre"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Baudelaire",
          "stepTheme": "Correction",
          "stepTitle": "« Qui gagne », « Le gouffre »",
          "paragraphText": "Le document cite « **Que** gagne sans tricher » et « Le **souffre** a toujours soif ». Baudelaire écrit : « Souviens-toi que le Temps est un joueur avide / **Qui** gagne sans tricher » (« qui » reprend « joueur ») et « Le **gouffre** a toujours soif » (un abîme qui avale tout).",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p03_q6",
            "type": "mcq",
            "prompt": "Dans le poème « L’Horloge » de Baudelaire, quel mot complète le vers « Le … a toujours soif ; la clepsydre se vide » ?",
            "options": [
              "gouffre",
              "souffre",
              "soufre",
              "souffle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le gouffre, un abîme qui a toujours soif, est l’image du temps qui engloutit tout."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepBadge": "Richesse",
          "stepTheme": "Sons communs",
          "stepTitle": "Rime pauvre, suffisante, riche",
          "paragraphText": "Une rime est **pauvre** avec un seul son commun (ami / pari), **suffisante** avec deux (ami / ennemi), **riche** avec trois ou plus (charmante / dormante). Elle est **féminine** si le vers finit par un e muet, **masculine** sinon.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p03_q7",
            "type": "mcq",
            "prompt": "Les mots « charmante » et « dormante » ont en commun les sons [m], [an] et [t]. Quelle est la richesse de cette rime ?",
            "options": [
              "Riche",
              "Pauvre",
              "Suffisante",
              "Ce n’est pas une rime"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Trois sons communs ou plus : rime riche. Elle est aussi féminine (e muet final)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p03_q1",
          "type": "mcq",
          "prompt": "Dans le vers de Racine « Pour qui sont ces serpents qui sifflent sur vos têtes ? » (Andromaque), quel procédé sonore entend-on ?",
          "options": [
            "Une allitération en [s]",
            "Une assonance en [a]",
            "Une rime embrassée",
            "Un rejet"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le son consonne [s] revient : sont, ces, serpents, sifflent, sur. Il imite le sifflement des serpents."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p03_q2",
          "type": "mcq",
          "prompt": "Dans le vers de Racine « Tout m’afflige et me nuit, et conspire à me nuire » (Phèdre), quel son voyelle est répété ?",
          "options": [
            "Le son [i]",
            "Le son [a]",
            "Le son [o]",
            "Aucun son n’est répété"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Afflige, nuit, conspire, nuire : assonance en [i]."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p03_q3",
          "type": "mcq",
          "prompt": "Le verbe « nuire » se construit avec « à » : on nuit à quelqu’un. Laquelle de ces phrases est correcte ?",
          "options": [
            "Tout conspire à me nuire",
            "Tout conspire à le nuire",
            "Tout conspire à nuire lui",
            "Tout conspire le nuire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Me » remplace « à moi » : « conspire à me nuire »."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p03_q4",
          "type": "mcq",
          "prompt": "Dans le vers de Victor Hugo « Les souffles de la nuit flottaient sur Galgala », quelle allitération entend-on ?",
          "options": [
            "Une allitération en [l] et en [f]",
            "Une allitération en [r]",
            "Une assonance en [u] seulement",
            "Aucune répétition de son"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les, souffles, la, flottaient, Galgala : [l] et [f] reviennent."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p03_q5",
          "type": "mcq",
          "prompt": "Quatre vers se terminent par « avide », « loi », « toi », « vide ». Quelle est la disposition des rimes ?",
          "options": [
            "Rimes embrassées (ABBA)",
            "Rimes plates (AABB)",
            "Rimes croisées (ABAB)",
            "Il n’y a pas de rimes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avide (A), loi (B), toi (B), vide (A) : schéma ABBA."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p03_q6",
          "type": "mcq",
          "prompt": "Dans le poème « L’Horloge » de Baudelaire, quel mot complète le vers « Le … a toujours soif ; la clepsydre se vide » ?",
          "options": [
            "gouffre",
            "souffre",
            "soufre",
            "souffle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le gouffre, un abîme qui a toujours soif, est l’image du temps qui engloutit tout."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p03_q7",
          "type": "mcq",
          "prompt": "Les mots « charmante » et « dormante » ont en commun les sons [m], [an] et [t]. Quelle est la richesse de cette rime ?",
          "options": [
            "Riche",
            "Pauvre",
            "Suffisante",
            "Ce n’est pas une rime"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Trois sons communs ou plus : rime riche. Elle est aussi féminine (e muet final)."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l03_rythme_p04",
      "order": 4,
      "title": "Le rythme dans la prose",
      "summary": "Découper une phrase en groupes rythmiques et reconnaître un rythme binaire, ternaire, croissant ou décroissant.",
      "conceptExplanation": "- Dans la prose aussi, l’accent (sur la dernière syllabe du groupe) et la pause (souvent marquée par la ponctuation) découpent la phrase en groupes rythmiques.\n- Le rythme binaire : deux groupes, souvent parallèles. « C’est là qu’il faut aller vivre, c’est là qu’il faut aller mourir ! » (Baudelaire, « L’Invitation au voyage », Petits poèmes en prose).\n- Le rythme ternaire : trois groupes. « J’étais en ville, au bar, à la terrasse. »\n- Le rythme croissant (ou cadence majeure) : les groupes sont de plus en plus longs ; il amplifie l’idée. « Va-t’en, chétif insecte, excrément de la terre ! » (La Fontaine, « Le Lion et le Moucheron ») : 2, 4, puis 6 syllabes.\n- Le rythme décroissant (ou cadence mineure) : les groupes sont de plus en plus courts ; il crée une chute brusque. « Vous aviez demandé à me voir, vous m’avez vu, je m’en vais, adieu. »\n- L’effet : le rythme binaire marque l’équilibre ou l’opposition ; le ternaire donne une impression d’ampleur et d’achèvement ; le croissant amplifie ; le décroissant crée une chute.",
      "keyRule": "On compte les groupes (2 = binaire, 3 = ternaire), puis on compare leur longueur (plus longs = croissant, plus courts = décroissant).",
      "formulas": [],
      "workedExample": {
        "title": "Analyser le rythme d’une phrase de La Fontaine",
        "statement": "« Va-t’en, chétif insecte, excrément de la terre ! » (La Fontaine, « Le Lion et le Moucheron »). Quel est le rythme de cette phrase ?",
        "methodSteps": [
          "On découpe les groupes grâce aux pauses : Va-t’en / chétif insecte / excrément de la terre.",
          "On compte les syllabes : Va-t’en (2) ; ché-tif-in-sect(e) (4) ; ex-cré-ment-de-la-terr(e) (6).",
          "Les groupes s’allongent : 2, 4, 6."
        ],
        "conclusion": "C’est un rythme ternaire croissant : la colère du lion s’amplifie à chaque insulte."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Groupes rythmiques",
          "stepTheme": "Accent et pause",
          "stepTitle": "Le rythme de la phrase en prose",
          "paragraphText": "Dans la prose, l’**accent** (sur la dernière syllabe du groupe) et la **pause** (souvent marquée par la ponctuation) découpent la phrase en **groupes rythmiques**. On compte les groupes et on compare leur longueur.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p04_q1",
            "type": "mcq",
            "prompt": "Dans un texte en prose, qu’est-ce qui découpe la phrase en groupes rythmiques ?",
            "options": [
              "L’accent et la pause",
              "Les rimes",
              "La césure de l’alexandrin",
              "Le nombre de paragraphes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La prose n’a ni vers ni rimes, mais elle a des accents et des pauses."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les rythmes de la phrase",
            "caption": "On compte les groupes séparés par les pauses, puis on compare leur longueur.",
            "tableData": {
              "headers": [
                "Rythme",
                "Construction",
                "Exemple"
              ],
              "rows": [
                [
                  "Binaire",
                  "Deux groupes",
                  "J’ai dit à mon cœur / à mon faible cœur"
                ],
                [
                  "Ternaire",
                  "Trois groupes",
                  "J’étais en ville / au bar / à la terrasse"
                ],
                [
                  "Croissant",
                  "Groupes de plus en plus longs",
                  "Va-t’en / chétif insecte / excrément de la terre"
                ],
                [
                  "Décroissant",
                  "Groupes de plus en plus courts",
                  "Vous aviez demandé à me voir / vous m’avez vu / je m’en vais / adieu"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Binaire",
          "stepTheme": "Musset",
          "stepTitle": "Le rythme binaire",
          "paragraphText": "« J’ai dit à mon cœur, / à mon faible cœur » (Musset) : **deux groupes**, le second reprend le premier en l’insistant. C’est un **rythme binaire**.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p04_q2",
            "type": "mcq",
            "prompt": "Quel est le rythme de la phrase « J’ai dit à mon cœur, à mon faible cœur » (Musset) ?",
            "options": [
              "Binaire",
              "Ternaire",
              "Décroissant",
              "Il n’y a pas de rythme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux groupes séparés par la virgule : rythme binaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Ternaire",
          "stepTheme": "Trois groupes",
          "stepTitle": "Le rythme ternaire",
          "paragraphText": "« J’étais en ville, / au bar, / à la terrasse » : **trois groupes** séparés par des virgules. C’est un **rythme ternaire**, qui donne une impression d’ampleur.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p04_q3",
            "type": "mcq",
            "prompt": "Quel est le rythme de la phrase « J’étais en ville, au bar, à la terrasse » ?",
            "options": [
              "Ternaire",
              "Binaire",
              "Croissant à deux groupes",
              "Il n’y a qu’un seul groupe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En ville / au bar / à la terrasse : trois groupes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Croissant",
          "stepTheme": "La Fontaine",
          "stepTitle": "Le rythme croissant",
          "paragraphText": "« Va-t’en, / chétif insecte, / excrément de la terre ! » (La Fontaine) : 2, puis 4, puis 6 syllabes. Les groupes **s’allongent** : c’est un **rythme croissant** (cadence majeure) qui amplifie la colère.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p04_q4",
            "type": "mcq",
            "prompt": "Dans la phrase « Va-t’en, chétif insecte, excrément de la terre ! » (La Fontaine, « Le Lion et le Moucheron »), les groupes comptent 2, 4 puis 6 syllabes. Quel est ce rythme ?",
            "options": [
              "Croissant",
              "Décroissant",
              "Binaire",
              "Régulier, sans variation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Des groupes de plus en plus longs : rythme croissant."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Décroissant",
          "stepTheme": "La chute",
          "stepTitle": "Le rythme décroissant",
          "paragraphText": "« Vous aviez demandé à me voir, / vous m’avez vu, / je m’en vais, / adieu. » : les groupes **raccourcissent** (9, 4, 3, puis 2 syllabes). C’est un **rythme décroissant** (cadence mineure) : la phrase finit sur une chute sèche.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p04_q5",
            "type": "mcq",
            "prompt": "Quel est le rythme de la phrase « Vous aviez demandé à me voir, vous m’avez vu, je m’en vais, adieu » ?",
            "options": [
              "Décroissant",
              "Croissant",
              "Binaire",
              "Ternaire régulier"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les groupes sont de plus en plus courts jusqu’au bref « adieu »."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Binaire",
          "stepTheme": "Baudelaire",
          "stepTitle": "Un parallélisme binaire",
          "paragraphText": "« C’est là qu’il faut aller vivre, / c’est là qu’il faut aller mourir ! » (Baudelaire) : deux groupes construits de la même façon, qui opposent **vivre** et **mourir**. C’est un **rythme binaire**.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p04_q6",
            "type": "mcq",
            "prompt": "Quel est le rythme de la phrase de Baudelaire « C’est là qu’il faut aller vivre, c’est là qu’il faut aller mourir ! » ?",
            "options": [
              "Binaire",
              "Ternaire",
              "Décroissant",
              "Croissant à quatre groupes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux groupes parallèles (« c’est là qu’il faut aller… ») : rythme binaire."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p04_q1",
          "type": "mcq",
          "prompt": "Dans un texte en prose, qu’est-ce qui découpe la phrase en groupes rythmiques ?",
          "options": [
            "L’accent et la pause",
            "Les rimes",
            "La césure de l’alexandrin",
            "Le nombre de paragraphes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La prose n’a ni vers ni rimes, mais elle a des accents et des pauses."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p04_q2",
          "type": "mcq",
          "prompt": "Quel est le rythme de la phrase « J’ai dit à mon cœur, à mon faible cœur » (Musset) ?",
          "options": [
            "Binaire",
            "Ternaire",
            "Décroissant",
            "Il n’y a pas de rythme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux groupes séparés par la virgule : rythme binaire."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p04_q3",
          "type": "mcq",
          "prompt": "Quel est le rythme de la phrase « J’étais en ville, au bar, à la terrasse » ?",
          "options": [
            "Ternaire",
            "Binaire",
            "Croissant à deux groupes",
            "Il n’y a qu’un seul groupe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En ville / au bar / à la terrasse : trois groupes."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p04_q4",
          "type": "mcq",
          "prompt": "Dans la phrase « Va-t’en, chétif insecte, excrément de la terre ! » (La Fontaine, « Le Lion et le Moucheron »), les groupes comptent 2, 4 puis 6 syllabes. Quel est ce rythme ?",
          "options": [
            "Croissant",
            "Décroissant",
            "Binaire",
            "Régulier, sans variation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Des groupes de plus en plus longs : rythme croissant."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p04_q5",
          "type": "mcq",
          "prompt": "Quel est le rythme de la phrase « Vous aviez demandé à me voir, vous m’avez vu, je m’en vais, adieu » ?",
          "options": [
            "Décroissant",
            "Croissant",
            "Binaire",
            "Ternaire régulier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les groupes sont de plus en plus courts jusqu’au bref « adieu »."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p04_q6",
          "type": "mcq",
          "prompt": "Quel est le rythme de la phrase de Baudelaire « C’est là qu’il faut aller vivre, c’est là qu’il faut aller mourir ! » ?",
          "options": [
            "Binaire",
            "Ternaire",
            "Décroissant",
            "Croissant à quatre groupes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux groupes parallèles (« c’est là qu’il faut aller… ») : rythme binaire."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l03_rythme_p05",
      "order": 5,
      "title": "Exercices : identifier le rythme",
      "summary": "S’entraîner à reconnaître le rythme de phrases et de vers et à scander un alexandrin.",
      "conceptExplanation": "- Méthode : 1) repérer les pauses (ponctuation, fin de groupe) ; 2) compter les groupes ; 3) comparer leur longueur ; 4) dire l’effet produit.\n- Corrigé des exercices du document : « J’ai dit à mon cœur, à mon faible cœur » : binaire ; « Cette nuit, comme les autres, j’ai pleuré » : ternaire ; « C’est là qu’il faut aller vivre, c’est là qu’il faut aller mourir » : binaire ; « J’étais en ville, au bar, à la terrasse » : ternaire ; « Tu as bien fait d’arriver, j’allais quitter l’appartement » : binaire ; « Va-t’en, chétif insecte, excrément de la terre » : croissant ; « Vous aviez demandé à me voir, vous m’avez vu, je m’en vais, adieu » : décroissant.\n- « Plus l’offenseur est cher // et plus grande est l’offense » (Corneille, Le Cid) : 12 syllabes, césure après « cher ».\n- Correction du document : dans la consigne, il faut lire « respirer » (infinitif, comme « rêver » et « allonger ») et non « respire ».",
      "keyRule": "Pauses, nombre de groupes, longueur des groupes, effet : quatre étapes pour analyser un rythme.",
      "formulas": [],
      "workedExample": {
        "title": "Identifier le rythme d’une phrase",
        "statement": "Quel est le rythme de la phrase « Cette nuit, comme les autres, j’ai pleuré » ?",
        "methodSteps": [
          "Pauses : deux virgules.",
          "Groupes : Cette nuit / comme les autres / j’ai pleuré, soit trois groupes."
        ],
        "conclusion": "C’est un rythme ternaire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Exercice",
          "stepTheme": "Ternaire",
          "stepTitle": "Cette nuit, comme les autres",
          "paragraphText": "« Cette nuit, / comme les autres, / j’ai pleuré » : **trois groupes** séparés par deux virgules : **rythme ternaire**.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p05_q1",
            "type": "mcq",
            "prompt": "Quel est le rythme de la phrase « Cette nuit, comme les autres, j’ai pleuré » ?",
            "options": [
              "Ternaire",
              "Binaire",
              "Décroissant à quatre groupes",
              "Il n’y a qu’un seul groupe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Cette nuit / comme les autres / j’ai pleuré."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Exercice",
          "stepTheme": "Binaire",
          "stepTitle": "Tu as bien fait d’arriver",
          "paragraphText": "« Tu as bien fait d’arriver, / j’allais quitter l’appartement » : **deux groupes** : **rythme binaire**.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p05_q2",
            "type": "mcq",
            "prompt": "Quel est le rythme de la phrase « Tu as bien fait d’arriver, j’allais quitter l’appartement » ?",
            "options": [
              "Binaire",
              "Ternaire",
              "Croissant à trois groupes",
              "Décroissant à quatre groupes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une seule pause, deux groupes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Méthode",
          "stepTheme": "Quatre étapes",
          "stepTitle": "Analyser un rythme en quatre étapes",
          "paragraphText": "Pour analyser un rythme : 1) repérer les **pauses** ; 2) compter les **groupes** ; 3) comparer leur **longueur** ; 4) dire l’**effet** produit.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p05_q3",
            "type": "mcq",
            "prompt": "Pour analyser le rythme d’une phrase, que fait-on après avoir repéré les pauses ?",
            "options": [
              "On compte les groupes, puis on compare leur longueur et on dit l’effet",
              "On cherche les rimes",
              "On compte les paragraphes du texte",
              "On recopie la phrase sans ponctuation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pauses, groupes, longueur, effet."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Exercice",
          "stepTheme": "Scander",
          "stepTitle": "Compter les syllabes d’un vers du Cid",
          "paragraphText": "« Plus l’offenseur est cher // et plus grande est l’offense » : le e de « grande » s’élide devant « est », le e final de « offense » ne compte pas : **12 syllabes**, césure après « cher ».",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p05_q4",
            "type": "mcq",
            "prompt": "Combien de syllabes compte le vers de Pierre Corneille « Plus l’offenseur est cher et plus grande est l’offense » (Le Cid) ?",
            "options": [
              "12 syllabes",
              "13 syllabes",
              "14 syllabes",
              "10 syllabes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le e de « grande » s’élide devant « est » et le e final ne compte pas."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Bien classer",
          "stepTheme": "Croissant ou ternaire ?",
          "stepTitle": "Un rythme peut être ternaire et croissant",
          "paragraphText": "« Va-t’en, chétif insecte, excrément de la terre ! » a **trois groupes** (ternaire) **de plus en plus longs** (croissant). On précise les deux : **ternaire croissant**. Le nombre de groupes et leur longueur sont deux observations différentes.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p05_q5",
            "type": "mcq",
            "prompt": "La phrase « Va-t’en, chétif insecte, excrément de la terre ! » a trois groupes de 2, 4 puis 6 syllabes. Quelle analyse est la plus complète ?",
            "options": [
              "Rythme ternaire croissant",
              "Rythme binaire",
              "Rythme décroissant",
              "Rythme binaire décroissant"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Trois groupes (ternaire) qui s’allongent (croissant)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Exercice",
          "stepTheme": "Effet",
          "stepTitle": "L’effet d’un rythme décroissant",
          "paragraphText": "Dans « Vous aviez demandé à me voir, vous m’avez vu, je m’en vais, adieu », les groupes raccourcissent jusqu’au mot **« adieu »** : la phrase se termine sur une **chute brusque**, qui traduit un départ sec et définitif.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l03_rythme_p05_q6",
            "type": "mcq",
            "prompt": "Quel effet produit le rythme décroissant de la phrase « Vous aviez demandé à me voir, vous m’avez vu, je m’en vais, adieu » ?",
            "options": [
              "Une chute brusque qui marque un départ sec",
              "Une amplification de la colère",
              "Un équilibre entre deux idées opposées",
              "Une impression de lenteur et de calme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les groupes de plus en plus courts mènent à un « adieu » sec."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p05_q1",
          "type": "mcq",
          "prompt": "Quel est le rythme de la phrase « Cette nuit, comme les autres, j’ai pleuré » ?",
          "options": [
            "Ternaire",
            "Binaire",
            "Décroissant à quatre groupes",
            "Il n’y a qu’un seul groupe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Cette nuit / comme les autres / j’ai pleuré."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p05_q2",
          "type": "mcq",
          "prompt": "Quel est le rythme de la phrase « Tu as bien fait d’arriver, j’allais quitter l’appartement » ?",
          "options": [
            "Binaire",
            "Ternaire",
            "Croissant à trois groupes",
            "Décroissant à quatre groupes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une seule pause, deux groupes."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p05_q3",
          "type": "mcq",
          "prompt": "Pour analyser le rythme d’une phrase, que fait-on après avoir repéré les pauses ?",
          "options": [
            "On compte les groupes, puis on compare leur longueur et on dit l’effet",
            "On cherche les rimes",
            "On compte les paragraphes du texte",
            "On recopie la phrase sans ponctuation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pauses, groupes, longueur, effet."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p05_q4",
          "type": "mcq",
          "prompt": "Combien de syllabes compte le vers de Pierre Corneille « Plus l’offenseur est cher et plus grande est l’offense » (Le Cid) ?",
          "options": [
            "12 syllabes",
            "13 syllabes",
            "14 syllabes",
            "10 syllabes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le e de « grande » s’élide devant « est » et le e final ne compte pas."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p05_q5",
          "type": "mcq",
          "prompt": "La phrase « Va-t’en, chétif insecte, excrément de la terre ! » a trois groupes de 2, 4 puis 6 syllabes. Quelle analyse est la plus complète ?",
          "options": [
            "Rythme ternaire croissant",
            "Rythme binaire",
            "Rythme décroissant",
            "Rythme binaire décroissant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Trois groupes (ternaire) qui s’allongent (croissant)."
        },
        {
          "id": "premiere_a1_francais_pl_l03_rythme_p05_q6",
          "type": "mcq",
          "prompt": "Quel effet produit le rythme décroissant de la phrase « Vous aviez demandé à me voir, vous m’avez vu, je m’en vais, adieu » ?",
          "options": [
            "Une chute brusque qui marque un départ sec",
            "Une amplification de la colère",
            "Un équilibre entre deux idées opposées",
            "Une impression de lenteur et de calme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les groupes de plus en plus courts mènent à un « adieu » sec."
        }
      ]
    }
  ]
};
