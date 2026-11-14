import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 10 PL 2nde la versification vers et strophes.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const FR_2DE_PL_L06_VERSIFICATION_VERS_STROPHES: CurriculumChapter = {
  "id": "seconde_a_francais_pl_l06_versification_vers_strophes",
  "subjectId": "francais",
  "gradeLevel": "seconde_a",
  "alsoForGrades": [
    "seconde_c"
  ],
  "order": 14,
  "title": "Perfectionnement de la langue, leçon 6 : La versification, les vers et les strophes",
  "summary": "La mesure du vers, le décompte des syllabes, la valeur des vers, le vers libre et le verset, les strophes et les poèmes à forme fixe.",
  "officialVolumeHours": 2,
  "contentVersion": 2,
  "source": "10 PL 2nde la versification vers et strophes.pdf",
  "points": [
    {
      "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p01",
      "order": 1,
      "title": "Le vers et sa mesure",
      "summary": "Syllabes, types de vers, césure et hémistiches.",
      "conceptExplanation": "Le vers est une ligne de poème. En poésie classique, il est formé d'un nombre fixe de syllabes (ou pieds) : c'est sa mesure, ou mètre.\n\nLes vers pairs :\n- 12 syllabes : l'alexandrin ;\n- 10 syllabes : le décasyllabe ;\n- 8 syllabes : l'octosyllabe ;\n- 6 syllabes : l'hexasyllabe ;\n- 4 syllabes : le tétrasyllabe (ou quadrisyllabe) ;\n- 2 syllabes : le dissyllabe.\nLes vers impairs : 11 (hendécasyllabe), 9 (ennéasyllabe), 7 (heptasyllabe), 5 (pentasyllabe), 3 (trisyllabe), 1 (monosyllabe).\n\nLes vers les plus fréquents ont 12, 10 et 8 syllabes.\n\nDans l'alexandrin classique, une pause principale, la césure, partage le vers en deux moitiés de six syllabes, les hémistiches :\n« Seul / le / si / len / c(e) est / grand // tout / le / res / t(e) est / fai / bless(e) » (Vigny).\nPremier hémistiche : 6 syllabes ; césure ; second hémistiche : 6 syllabes.",
      "keyRule": "Mesure = nombre de syllabes. Alexandrin 12, décasyllabe 10, octosyllabe 8, hexasyllabe 6. Césure : pause qui coupe l'alexandrin en deux hémistiches de 6.",
      "formulas": [],
      "workedExample": {
        "title": "Mesurer un vers",
        "statement": "Combien de syllabes compte « Seul le silence est grand ; tout le reste est faiblesse » (Vigny) ?",
        "methodSteps": [
          "Seul(1) le(2) si(3) len(4) c'est(5) grand(6) : le e de « silence » s'efface devant « est ».",
          "tout(7) le(8) res(9) t'est(10) fai(11) bless(12) : le e final ne compte pas."
        ],
        "conclusion": "12 syllabes : c'est un alexandrin, coupé après « grand »."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La mesure",
          "stepTheme": "La mesure",
          "stepBadge": "La mesure",
          "paragraphText": "La mesure (ou mètre) d'un vers est son nombre de syllabes, appelées aussi pieds.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p01_q1",
            "type": "mcq",
            "prompt": "Qu'appelle-t-on la mesure d'un vers ?",
            "options": [
              "Le nombre de ses rimes",
              "Le nombre de strophes",
              "Son nombre de syllabes",
              "Sa longueur en centimètres"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On compte les syllabes prononcées."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'alexandrin",
          "stepTheme": "L'alexandrin",
          "stepBadge": "L'alexandrin",
          "paragraphText": "L'alexandrin est le vers de 12 syllabes. C'est le plus long vers régulier.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p01_q2",
            "type": "mcq",
            "prompt": "Combien de syllabes compte un alexandrin ?",
            "options": [
              "Douze",
              "Dix",
              "Huit",
              "Six"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Alexandrin = 12 syllabes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les vers pairs",
          "stepTheme": "Les vers pairs",
          "stepBadge": "Les vers pairs",
          "paragraphText": "• 10 syllabes : le décasyllabe ;\n• 8 syllabes : l'octosyllabe ;\n• 6 syllabes : l'hexasyllabe.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p01_q3",
            "type": "mcq",
            "prompt": "Comment appelle-t-on un vers de huit syllabes ?",
            "options": [
              "Un décasyllabe",
              "Un hexasyllabe",
              "Un alexandrin",
              "Un octosyllabe"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Octo = huit."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les vers impairs",
          "stepTheme": "Les vers impairs",
          "stepBadge": "Les vers impairs",
          "paragraphText": "Vers impairs : 11 (hendécasyllabe), 9 (ennéasyllabe), 7 (heptasyllabe), 5 (pentasyllabe), 3 (trisyllabe).",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p01_q4",
            "type": "mcq",
            "prompt": "Combien de syllabes compte un heptasyllabe ?",
            "options": [
              "Six",
              "Sept",
              "Huit",
              "Cinq"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Hepta = sept."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La césure",
          "stepTheme": "La césure",
          "stepBadge": "La césure",
          "paragraphText": "La césure est la pause principale à l'intérieur d'un vers long.\nDans l'alexandrin classique, elle se place après la 6e syllabe.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p01_q5",
            "type": "mcq",
            "prompt": "Où se place la césure dans l'alexandrin classique ?",
            "options": [
              "Après la troisième syllabe",
              "Après la sixième syllabe",
              "À la fin du vers",
              "Avant la première syllabe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle coupe l'alexandrin en deux parties égales."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Les hémistiches",
          "stepTheme": "Les hémistiches",
          "stepBadge": "Les hémistiches",
          "paragraphText": "La césure partage l'alexandrin en deux moitiés de 6 syllabes, appelées hémistiches.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p01_q6",
            "type": "mcq",
            "prompt": "Comment appelle-t-on chacune des deux moitiés d'un alexandrin ?",
            "options": [
              "Une strophe",
              "Un tercet",
              "Un refrain",
              "Un hémistiche"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Hémi = moitié."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Hexasyllabe, pas hexamètre",
          "stepTheme": "Hexasyllabe, pas hexamètre",
          "stepBadge": "Hexasyllabe, pas hexamètre",
          "paragraphText": "En français, on nomme les vers d'après leur nombre de syllabes : hexasyllabe (6), pentasyllabe (5).\n« Hexamètre » et « pentamètre » désignent des vers grecs et latins.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p01_q7",
            "type": "mcq",
            "prompt": "Quel est le nom correct d'un vers français de six syllabes ?",
            "options": [
              "Un hexasyllabe",
              "Un hexamètre",
              "Un hexagone",
              "Un sixain"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le sixain est une strophe de six vers, pas un vers."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p01_q1",
          "type": "mcq",
          "prompt": "Qu'appelle-t-on la mesure d'un vers ?",
          "options": [
            "Le nombre de ses rimes",
            "Le nombre de strophes",
            "Son nombre de syllabes",
            "Sa longueur en centimètres"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On compte les syllabes prononcées."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p01_q2",
          "type": "mcq",
          "prompt": "Combien de syllabes compte un alexandrin ?",
          "options": [
            "Douze",
            "Dix",
            "Huit",
            "Six"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Alexandrin = 12 syllabes."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p01_q3",
          "type": "mcq",
          "prompt": "Comment appelle-t-on un vers de huit syllabes ?",
          "options": [
            "Un décasyllabe",
            "Un hexasyllabe",
            "Un alexandrin",
            "Un octosyllabe"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Octo = huit."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p01_q4",
          "type": "mcq",
          "prompt": "Combien de syllabes compte un heptasyllabe ?",
          "options": [
            "Six",
            "Sept",
            "Huit",
            "Cinq"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Hepta = sept."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p01_q5",
          "type": "mcq",
          "prompt": "Où se place la césure dans l'alexandrin classique ?",
          "options": [
            "Après la troisième syllabe",
            "Après la sixième syllabe",
            "À la fin du vers",
            "Avant la première syllabe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle coupe l'alexandrin en deux parties égales."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p01_q6",
          "type": "mcq",
          "prompt": "Comment appelle-t-on chacune des deux moitiés d'un alexandrin ?",
          "options": [
            "Une strophe",
            "Un tercet",
            "Un refrain",
            "Un hémistiche"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Hémi = moitié."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p01_q7",
          "type": "mcq",
          "prompt": "Quel est le nom correct d'un vers français de six syllabes ?",
          "options": [
            "Un hexasyllabe",
            "Un hexamètre",
            "Un hexagone",
            "Un sixain"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le sixain est une strophe de six vers, pas un vers."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p02",
      "order": 2,
      "title": "Compter les syllabes",
      "summary": "Le e muet, la synérèse et la diérèse.",
      "conceptExplanation": "En poésie, on ne compte pas les syllabes comme dans la langue courante. Il faut surtout faire attention au e muet (e sans accent).\n\n1. Le e muet compte pour une syllabe quand il est suivi d'une consonne :\n« Je / m'en / al / lais, / les / poings / dans / les / po / ches / cre / vées » (Rimbaud) : le e de « poches » compte → 12 syllabes.\n\n2. Le e muet ne compte pas (il s'élide) :\n- devant un mot qui commence par une voyelle ou un h muet : « Des rimes. Mon auberg(e) était à la Grand(e) Ourse » (Rimbaud) ;\n- en fin de vers : « faiblesse » se compte « fai-bless(e) ».\n\n3. La synérèse : on prononce en une seule syllabe deux voyelles qui se suivent : « hier » (1 syllabe), « pied ». Elle abrège et durcit le mot.\n\n4. La diérèse : on sépare en deux syllabes deux voyelles habituellement prononcées ensemble : « pas-si-on » (3 syllabes), « li-on », « na-ti-on ». Elle ralentit le mot, l'allonge et le met en valeur. On la signale parfois par un tréma.",
      "keyRule": "Le e muet compte devant une consonne ; il s'élide devant une voyelle et en fin de vers. Synérèse : 2 voyelles en 1 syllabe (hier). Diérèse : 1 son en 2 syllabes (pas-si-on).",
      "formulas": [],
      "workedExample": {
        "title": "Découper un vers de Musset",
        "statement": "Découpe : « Reviens, oh ! qui t'empêche, »",
        "methodSteps": [
          "Re(1) viens(2) oh(3) qui(4) t'em(5) pê(6).",
          "Le e final de « empêche » ne compte pas."
        ],
        "conclusion": "6 syllabes : c'est un hexasyllabe."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le e muet",
          "stepTheme": "Le e muet",
          "stepBadge": "Le e muet",
          "paragraphText": "Le e muet est un e sans accent, souvent en fin de mot : « poche », « reste ».\nIl compte ou non selon sa place.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p02_q1",
            "type": "mcq",
            "prompt": "Qu'appelle-t-on « e muet » en versification ?",
            "options": [
              "Un e avec un accent aigu",
              "Un e placé au début du vers",
              "Un e sans accent, souvent en fin de mot",
              "Un e qui forme une rime riche"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est lui qui pose problème dans le décompte."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Devant une consonne",
          "stepTheme": "Devant une consonne",
          "stepBadge": "Devant une consonne",
          "paragraphText": "Le e muet compte pour une syllabe quand il est suivi d'une consonne :\n« les po-ches cre-vées » : le e de « poches » compte.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p02_q2",
            "type": "mcq",
            "prompt": "Quand le e muet compte-t-il pour une syllabe ?",
            "options": [
              "Quand il est suivi d'une voyelle",
              "Quand il est en fin de vers",
              "Jamais",
              "Quand il est suivi d'une consonne"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Po-ches-cre-vées : le e se prononce."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'élision",
          "stepTheme": "L'élision",
          "stepBadge": "L'élision",
          "paragraphText": "Le e muet s'élide (ne compte pas) devant une voyelle ou un h muet :\n« Mon auberg(e) était à la Grand(e) Ourse ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p02_q3",
            "type": "mcq",
            "prompt": "Dans « Mon auberge était », pourquoi le e de « auberge » ne compte-t-il pas ?",
            "options": [
              "Parce qu'il est suivi d'une consonne",
              "Parce qu'il porte un accent",
              "Parce qu'il est suivi d'une voyelle",
              "Parce qu'il est au début du vers"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Devant « était », le e s'efface : c'est l'élision."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "En fin de vers",
          "stepTheme": "En fin de vers",
          "stepBadge": "En fin de vers",
          "paragraphText": "Le e muet placé en fin de vers ne compte jamais.\n« Reviens, oh ! qui t'empêch(e) » : 6 syllabes.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p02_q4",
            "type": "mcq",
            "prompt": "Combien de syllabes compte « Reviens, oh ! qui t'empêche » ?",
            "options": [
              "Sept",
              "Six",
              "Cinq",
              "Huit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Re-viens-oh-qui-t'em-pê : le e final ne compte pas."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La diérèse",
          "stepTheme": "La diérèse",
          "stepBadge": "La diérèse",
          "paragraphText": "La diérèse sépare en deux syllabes deux voyelles habituellement prononcées ensemble : « pas-si-on » (3 syllabes).\nElle allonge le mot et le met en valeur.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p02_q5",
            "type": "mcq",
            "prompt": "Avec une diérèse, combien de syllabes compte le mot « passion » ?",
            "options": [
              "Trois",
              "Deux",
              "Une",
              "Quatre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pas-si-on : on sépare « i » et « on »."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La synérèse",
          "stepTheme": "La synérèse",
          "stepBadge": "La synérèse",
          "paragraphText": "La synérèse réunit en une seule syllabe deux voyelles qui se suivent : « hier » en 1 syllabe au lieu de « hi-er ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p02_q6",
            "type": "mcq",
            "prompt": "Que fait la synérèse ?",
            "options": [
              "Elle réunit deux voyelles en une syllabe",
              "Elle sépare une syllabe en deux",
              "Elle supprime le e muet en fin de vers",
              "Elle ajoute une rime"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Synérèse = réunion ; diérèse = séparation."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Rimbaud",
          "stepTheme": "Rimbaud",
          "stepBadge": "Rimbaud",
          "paragraphText": "« Je m'en allais, les poings dans les poches crevées » (Rimbaud) :\nJe-m'en-al-lais-les-poings-dans-les-po-ches-cre-vées.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p02_q7",
            "type": "mcq",
            "prompt": "Combien de syllabes compte « Je m'en allais, les poings dans les poches crevées » ?",
            "options": [
              "Onze",
              "Douze",
              "Treize",
              "Dix"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le e de « poches » compte devant la consonne de « crevées »."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p02_q1",
          "type": "mcq",
          "prompt": "Qu'appelle-t-on « e muet » en versification ?",
          "options": [
            "Un e avec un accent aigu",
            "Un e placé au début du vers",
            "Un e sans accent, souvent en fin de mot",
            "Un e qui forme une rime riche"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est lui qui pose problème dans le décompte."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p02_q2",
          "type": "mcq",
          "prompt": "Quand le e muet compte-t-il pour une syllabe ?",
          "options": [
            "Quand il est suivi d'une voyelle",
            "Quand il est en fin de vers",
            "Jamais",
            "Quand il est suivi d'une consonne"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Po-ches-cre-vées : le e se prononce."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p02_q3",
          "type": "mcq",
          "prompt": "Dans « Mon auberge était », pourquoi le e de « auberge » ne compte-t-il pas ?",
          "options": [
            "Parce qu'il est suivi d'une consonne",
            "Parce qu'il porte un accent",
            "Parce qu'il est suivi d'une voyelle",
            "Parce qu'il est au début du vers"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Devant « était », le e s'efface : c'est l'élision."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p02_q4",
          "type": "mcq",
          "prompt": "Combien de syllabes compte « Reviens, oh ! qui t'empêche » ?",
          "options": [
            "Sept",
            "Six",
            "Cinq",
            "Huit"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Re-viens-oh-qui-t'em-pê : le e final ne compte pas."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p02_q5",
          "type": "mcq",
          "prompt": "Avec une diérèse, combien de syllabes compte le mot « passion » ?",
          "options": [
            "Trois",
            "Deux",
            "Une",
            "Quatre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pas-si-on : on sépare « i » et « on »."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p02_q6",
          "type": "mcq",
          "prompt": "Que fait la synérèse ?",
          "options": [
            "Elle réunit deux voyelles en une syllabe",
            "Elle sépare une syllabe en deux",
            "Elle supprime le e muet en fin de vers",
            "Elle ajoute une rime"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Synérèse = réunion ; diérèse = séparation."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p02_q7",
          "type": "mcq",
          "prompt": "Combien de syllabes compte « Je m'en allais, les poings dans les poches crevées » ?",
          "options": [
            "Onze",
            "Douze",
            "Treize",
            "Dix"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le e de « poches » compte devant la consonne de « crevées »."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p03",
      "order": 3,
      "title": "La valeur des vers",
      "summary": "Pourquoi choisir tel ou tel vers ?",
      "conceptExplanation": "Le choix du vers n'est pas indifférent : chaque mètre a des effets habituels.\n\n- L'alexandrin (12) est le grand vers de la poésie classique française. Ample et régulier, il donne de la majesté, de la gravité, du calme ou de la solennité au sujet (tragédies de Racine et de Corneille).\n- Le décasyllabe (10) est un vers très ancien, celui des chansons de geste du Moyen Âge ; il est souvent coupé 4 + 6.\n- L'octosyllabe (8) est plus vif et léger : on l'emploie pour la poésie légère, les chansons, les fables.\n- Les vers courts (6, 4, 2 syllabes) s'emploient rarement en série continue. Mêlés à des vers plus longs, ils créent un effet de contraste, de rapidité ou de surprise : « Reviens, oh ! qui t'empêche, / Toi, que le soir, longtemps, / J'attends ! » (Musset). Le dissyllabe final « J'attends ! » isole et met en relief l'attente.\n- Les vers impairs (5, 7, 9...) donnent une impression de musicalité et de légèreté ; Verlaine les recommandait : « De la musique avant toute chose, / Et pour cela préfère l'Impair ».",
      "keyRule": "Alexandrin : majesté, gravité. Décasyllabe : vers ancien. Octosyllabe : légèreté, chanson. Vers courts mêlés aux longs : contraste, surprise. Vers impairs : musicalité.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter un vers court",
        "statement": "Chez Musset, après deux vers de 6 syllabes vient « J'attends ! ». Quel effet ?",
        "methodSteps": [
          "« J'attends ! » ne compte que 2 syllabes.",
          "Le contraste avec les vers précédents isole ce mot."
        ],
        "conclusion": "Le vers très court met en relief l'attente du poète."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'alexandrin",
          "stepTheme": "L'alexandrin",
          "stepBadge": "L'alexandrin",
          "paragraphText": "L'alexandrin, ample et régulier, donne de la majesté, de la gravité ou de la solennité. C'est le vers de la tragédie classique.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p03_q1",
            "type": "mcq",
            "prompt": "Quel effet donne habituellement l'alexandrin ?",
            "options": [
              "La légèreté et la vivacité",
              "La rapidité et la surprise",
              "La majesté et la gravité",
              "Le désordre et la confusion"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le vers long est solennel."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'octosyllabe",
          "stepTheme": "L'octosyllabe",
          "stepBadge": "L'octosyllabe",
          "paragraphText": "L'octosyllabe, plus court et vif, convient à la poésie légère, aux chansons, aux fables.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p03_q2",
            "type": "mcq",
            "prompt": "Pour quel type de poème l'octosyllabe est-il souvent choisi ?",
            "options": [
              "La tragédie solennelle",
              "L'épopée guerrière",
              "Le discours officiel",
              "La chanson et la poésie légère"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Son rythme rapide convient à la légèreté."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le décasyllabe",
          "stepTheme": "Le décasyllabe",
          "stepBadge": "Le décasyllabe",
          "paragraphText": "Le décasyllabe est un vers très ancien : c'est celui des chansons de geste du Moyen Âge.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p03_q3",
            "type": "mcq",
            "prompt": "De quelle époque date l'usage du décasyllabe dans les chansons de geste ?",
            "options": [
              "Du XXe siècle",
              "De l'Antiquité grecque",
              "Du Moyen Âge",
              "Du XXIe siècle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La Chanson de Roland est en décasyllabes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les vers courts",
          "stepTheme": "Les vers courts",
          "stepBadge": "Les vers courts",
          "paragraphText": "Les vers courts (6, 4, 2 syllabes), mêlés à des vers plus longs, créent un contraste, un effet de surprise ou de rapidité.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p03_q4",
            "type": "mcq",
            "prompt": "Quel effet produit un vers très court placé après des vers longs ?",
            "options": [
              "Un effet de calme majestueux",
              "Un effet d'ennui",
              "Aucun effet particulier",
              "Un effet de contraste et de surprise"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La brièveté soudaine attire l'attention."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "J'attends !",
          "stepTheme": "J'attends !",
          "stepBadge": "J'attends !",
          "paragraphText": "« Reviens, oh ! qui t'empêche, / Toi, que le soir, longtemps, / J'attends ! » (Musset).\nLe dissyllabe « J'attends ! » isole l'attente.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p03_q5",
            "type": "mcq",
            "prompt": "Combien de syllabes compte le dernier vers « J'attends ! » ?",
            "options": [
              "Deux",
              "Trois",
              "Une",
              "Quatre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "J'at-tends : c'est un dissyllabe."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Verlaine et l'impair",
          "stepTheme": "Verlaine et l'impair",
          "stepBadge": "Verlaine et l'impair",
          "paragraphText": "« De la musique avant toute chose, / Et pour cela préfère l'Impair » (Verlaine).\nLes vers impairs donnent une impression de musicalité.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p03_q6",
            "type": "mcq",
            "prompt": "Selon Verlaine, quel type de vers favorise la musique du poème ?",
            "options": [
              "L'alexandrin",
              "Le vers impair",
              "Le vers pair de dix syllabes",
              "La prose"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Préfère l'Impair »."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le vers le plus employé",
          "stepTheme": "Le vers le plus employé",
          "stepBadge": "Le vers le plus employé",
          "paragraphText": "Le grand vers de la poésie classique française est l'alexandrin, et non le décasyllabe : c'est lui qu'emploient Racine, Corneille et la plupart des poètes classiques.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p03_q7",
            "type": "mcq",
            "prompt": "Quel est le grand vers de la poésie classique française ?",
            "options": [
              "Le décasyllabe",
              "L'alexandrin",
              "L'octosyllabe",
              "Le dissyllabe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le décasyllabe domine au Moyen Âge, l'alexandrin à l'époque classique."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p03_q1",
          "type": "mcq",
          "prompt": "Quel effet donne habituellement l'alexandrin ?",
          "options": [
            "La légèreté et la vivacité",
            "La rapidité et la surprise",
            "La majesté et la gravité",
            "Le désordre et la confusion"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le vers long est solennel."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p03_q2",
          "type": "mcq",
          "prompt": "Pour quel type de poème l'octosyllabe est-il souvent choisi ?",
          "options": [
            "La tragédie solennelle",
            "L'épopée guerrière",
            "Le discours officiel",
            "La chanson et la poésie légère"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Son rythme rapide convient à la légèreté."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p03_q3",
          "type": "mcq",
          "prompt": "De quelle époque date l'usage du décasyllabe dans les chansons de geste ?",
          "options": [
            "Du XXe siècle",
            "De l'Antiquité grecque",
            "Du Moyen Âge",
            "Du XXIe siècle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La Chanson de Roland est en décasyllabes."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p03_q4",
          "type": "mcq",
          "prompt": "Quel effet produit un vers très court placé après des vers longs ?",
          "options": [
            "Un effet de calme majestueux",
            "Un effet d'ennui",
            "Aucun effet particulier",
            "Un effet de contraste et de surprise"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La brièveté soudaine attire l'attention."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p03_q5",
          "type": "mcq",
          "prompt": "Combien de syllabes compte le dernier vers « J'attends ! » ?",
          "options": [
            "Deux",
            "Trois",
            "Une",
            "Quatre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "J'at-tends : c'est un dissyllabe."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p03_q6",
          "type": "mcq",
          "prompt": "Selon Verlaine, quel type de vers favorise la musique du poème ?",
          "options": [
            "L'alexandrin",
            "Le vers impair",
            "Le vers pair de dix syllabes",
            "La prose"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Préfère l'Impair »."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p03_q7",
          "type": "mcq",
          "prompt": "Quel est le grand vers de la poésie classique française ?",
          "options": [
            "Le décasyllabe",
            "L'alexandrin",
            "L'octosyllabe",
            "Le dissyllabe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le décasyllabe domine au Moyen Âge, l'alexandrin à l'époque classique."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p04",
      "order": 4,
      "title": "Vers libre, verset et prose poétique",
      "summary": "La poésie libérée des contraintes classiques.",
      "conceptExplanation": "À partir de la fin du XIXe siècle, la poésie se libère des contraintes classiques.\n\n1. Le vers libre n'a ni nombre fixe de syllabes, ni césure obligatoire, ni rime régulière. Sa longueur suit le rythme de la pensée et de l'émotion. Il est très présent dans la poésie négro-africaine.\nExemple : « Rama Kam » de David Diop.\n\n2. Le verset est un vers très long, qui peut occuper plusieurs lignes, inspiré des psaumes de la Bible. Il donne au poème une ampleur, un souffle proche du chant.\nExemple : Léopold Sédar Senghor, « Femme noire » : « Femme nue, femme noire / Vêtue de ta couleur qui est vie, de ta forme qui est beauté ! »\n\n3. La prose poétique (ou poème en prose) n'est pas écrite en vers, mais en phrases et en paragraphes ; elle reste poétique par ses images, ses sonorités et son rythme.\nExemple : certains passages de La Carte d'identité de Jean-Marie Adiaffi.",
      "keyRule": "Vers libre : sans mesure ni rime fixes (David Diop). Verset : vers très long, au souffle ample (Senghor). Prose poétique : paragraphes, mais images et musique (Adiaffi).",
      "formulas": [],
      "workedExample": {
        "title": "Reconnaître le verset",
        "statement": "Un poème est fait de longues lignes de longueurs inégales, sans rimes régulières, avec un rythme ample et solennel. De quoi s'agit-il ?",
        "methodSteps": [
          "Pas de mesure fixe ni de rimes : ce n'est pas un vers classique.",
          "Lignes très longues au souffle ample : c'est le verset."
        ],
        "conclusion": "Il s'agit de versets, comme chez Senghor."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le vers libre",
          "stepTheme": "Le vers libre",
          "stepBadge": "Le vers libre",
          "paragraphText": "Le vers libre n'a ni nombre fixe de syllabes, ni césure obligatoire, ni rime régulière.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p04_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qui caractérise le vers libre ?",
            "options": [
              "L'absence de mesure et de rime fixes",
              "Exactement douze syllabes",
              "Une rime obligatoire à chaque vers",
              "Une césure toujours au milieu"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le poète choisit librement la longueur du vers."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "David Diop",
          "stepTheme": "David Diop",
          "stepBadge": "David Diop",
          "paragraphText": "Le vers libre est très présent dans la poésie négro-africaine, par exemple dans « Rama Kam » de David Diop.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p04_q2",
            "type": "mcq",
            "prompt": "Quel poète africain a écrit « Rama Kam », en vers libres ?",
            "options": [
              "Victor Hugo",
              "Charles Baudelaire",
              "Jean Racine",
              "David Diop"
            ],
            "correctAnswerIndex": 3,
            "explanation": "David Diop est un poète de la négritude."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le verset",
          "stepTheme": "Le verset",
          "stepBadge": "Le verset",
          "paragraphText": "Le verset est un vers très long, parfois sur plusieurs lignes, inspiré des psaumes de la Bible. Il donne un souffle ample, proche du chant.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p04_q3",
            "type": "mcq",
            "prompt": "De quels textes s'inspire le verset ?",
            "options": [
              "Des contes populaires",
              "Des articles de journaux",
              "Des psaumes de la Bible",
              "Des fables de La Fontaine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le mot « verset » vient des textes sacrés."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Senghor",
          "stepTheme": "Senghor",
          "stepBadge": "Senghor",
          "paragraphText": "Léopold Sédar Senghor écrit souvent en versets : « Femme nue, femme noire / Vêtue de ta couleur qui est vie, de ta forme qui est beauté ! »",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p04_q4",
            "type": "mcq",
            "prompt": "Quelle forme Senghor emploie-t-il souvent, par exemple dans « Femme noire » ?",
            "options": [
              "Le sonnet",
              "Le pantoum",
              "Le verset",
              "La ballade"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les longs versets donnent un souffle de chant."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La prose poétique",
          "stepTheme": "La prose poétique",
          "stepBadge": "La prose poétique",
          "paragraphText": "La prose poétique est écrite en phrases et en paragraphes, mais reste poétique par ses images, ses sonorités et son rythme.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p04_q5",
            "type": "mcq",
            "prompt": "Qu'est-ce que la prose poétique ?",
            "options": [
              "Un texte en paragraphes aux qualités poétiques",
              "Un poème en alexandrins rimés",
              "Un dictionnaire de mots rares",
              "Un texte sans aucune image"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pas de vers, mais une écriture musicale et imagée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Adiaffi",
          "stepTheme": "Adiaffi",
          "stepBadge": "Adiaffi",
          "paragraphText": "Certains passages de La Carte d'identité de l'Ivoirien Jean-Marie Adiaffi sont de véritables poèmes en prose.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p04_q6",
            "type": "mcq",
            "prompt": "Quel écrivain ivoirien a écrit La Carte d'identité, riche en prose poétique ?",
            "options": [
              "Bernard Dadié",
              "Ahmadou Kourouma",
              "Véronique Tadjo",
              "Jean-Marie Adiaffi"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Adiaffi a publié La Carte d'identité en 1980."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Libre ne veut pas dire sans art",
          "stepTheme": "Libre ne veut pas dire sans art",
          "stepBadge": "Libre ne veut pas dire sans art",
          "paragraphText": "Le vers libre n'est pas un vers sans règles : le poète travaille le rythme, les répétitions, les images et les sonorités.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p04_q7",
            "type": "mcq",
            "prompt": "Quelle affirmation sur le vers libre est juste ?",
            "options": [
              "Il est écrit au hasard, sans travail",
              "Il reste travaillé par le rythme et les images",
              "Il compte toujours douze syllabes",
              "Il est interdit en poésie africaine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La liberté formelle n'empêche pas la recherche poétique."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p04_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qui caractérise le vers libre ?",
          "options": [
            "L'absence de mesure et de rime fixes",
            "Exactement douze syllabes",
            "Une rime obligatoire à chaque vers",
            "Une césure toujours au milieu"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le poète choisit librement la longueur du vers."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p04_q2",
          "type": "mcq",
          "prompt": "Quel poète africain a écrit « Rama Kam », en vers libres ?",
          "options": [
            "Victor Hugo",
            "Charles Baudelaire",
            "Jean Racine",
            "David Diop"
          ],
          "correctAnswerIndex": 3,
          "explanation": "David Diop est un poète de la négritude."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p04_q3",
          "type": "mcq",
          "prompt": "De quels textes s'inspire le verset ?",
          "options": [
            "Des contes populaires",
            "Des articles de journaux",
            "Des psaumes de la Bible",
            "Des fables de La Fontaine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le mot « verset » vient des textes sacrés."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p04_q4",
          "type": "mcq",
          "prompt": "Quelle forme Senghor emploie-t-il souvent, par exemple dans « Femme noire » ?",
          "options": [
            "Le sonnet",
            "Le pantoum",
            "Le verset",
            "La ballade"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les longs versets donnent un souffle de chant."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p04_q5",
          "type": "mcq",
          "prompt": "Qu'est-ce que la prose poétique ?",
          "options": [
            "Un texte en paragraphes aux qualités poétiques",
            "Un poème en alexandrins rimés",
            "Un dictionnaire de mots rares",
            "Un texte sans aucune image"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pas de vers, mais une écriture musicale et imagée."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p04_q6",
          "type": "mcq",
          "prompt": "Quel écrivain ivoirien a écrit La Carte d'identité, riche en prose poétique ?",
          "options": [
            "Bernard Dadié",
            "Ahmadou Kourouma",
            "Véronique Tadjo",
            "Jean-Marie Adiaffi"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Adiaffi a publié La Carte d'identité en 1980."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p04_q7",
          "type": "mcq",
          "prompt": "Quelle affirmation sur le vers libre est juste ?",
          "options": [
            "Il est écrit au hasard, sans travail",
            "Il reste travaillé par le rythme et les images",
            "Il compte toujours douze syllabes",
            "Il est interdit en poésie africaine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La liberté formelle n'empêche pas la recherche poétique."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p05",
      "order": 5,
      "title": "Les strophes",
      "summary": "Les groupements de vers.",
      "conceptExplanation": "Une strophe est un groupe de vers séparé des autres par un blanc. Dans la poésie classique, elle a un nombre fixe de vers et une disposition ordonnée des rimes. Chaque strophe forme souvent une unité de sens.\n\nNoms des strophes selon le nombre de vers :\n- 1 vers : le monostiche ;\n- 2 vers : le distique ;\n- 3 vers : le tercet ;\n- 4 vers : le quatrain ;\n- 5 vers : le quintil ;\n- 6 vers : le sizain (ou sixain) ;\n- 7 vers : le septain ;\n- 8 vers : le huitain ;\n- 9 vers : le neuvain ;\n- 10 vers : le dizain ;\n- 11 vers : le onzain ;\n- 12 vers : le douzain.\n\nLes strophes les plus fréquentes sont le quatrain et le tercet.\n\nExemple : « Reviens, oh ! qui t'empêche, / Toi, que le soir, longtemps, / J'attends ! » (Musset) est un tercet de deux hexasyllabes et d'un dissyllabe.",
      "keyRule": "Strophe : groupe de vers. Distique 2, tercet 3, quatrain 4, quintil 5, sizain 6, huitain 8, dizain 10. Les plus fréquentes : quatrain et tercet.",
      "formulas": [],
      "workedExample": {
        "title": "Nommer une strophe",
        "statement": "« salsifis du Bengale / ne se prive de rien / souffrance d'une fringale / il a mangé un chien » (Desnos). Quelle strophe ?",
        "methodSteps": [
          "On compte les vers : quatre.",
          "Une strophe de quatre vers s'appelle un quatrain."
        ],
        "conclusion": "C'est un quatrain."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La strophe",
          "stepTheme": "La strophe",
          "stepBadge": "La strophe",
          "paragraphText": "Une strophe est un groupe de vers séparé des autres par un blanc.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p05_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une strophe ?",
            "options": [
              "Une syllabe accentuée",
              "Un groupe de vers séparé par un blanc",
              "Un vers de douze syllabes",
              "La rime d'un poème"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les strophes sont les « paragraphes » du poème."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le quatrain",
          "stepTheme": "Le quatrain",
          "stepBadge": "Le quatrain",
          "paragraphText": "Une strophe de quatre vers s'appelle un quatrain.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p05_q2",
            "type": "mcq",
            "prompt": "Comment appelle-t-on une strophe de quatre vers ?",
            "options": [
              "Un tercet",
              "Un distique",
              "Un quintil",
              "Un quatrain"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Quatrain = 4 vers."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le tercet",
          "stepTheme": "Le tercet",
          "stepBadge": "Le tercet",
          "paragraphText": "Une strophe de trois vers s'appelle un tercet.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p05_q3",
            "type": "mcq",
            "prompt": "Combien de vers compte un tercet ?",
            "options": [
              "Trois",
              "Deux",
              "Quatre",
              "Cinq"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Tercet = 3 vers."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le distique",
          "stepTheme": "Le distique",
          "stepBadge": "Le distique",
          "paragraphText": "Une strophe de deux vers s'appelle un distique.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p05_q4",
            "type": "mcq",
            "prompt": "Comment appelle-t-on une strophe de deux vers ?",
            "options": [
              "Un dissyllabe",
              "Un tercet",
              "Un distique",
              "Un monostiche"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Attention : le dissyllabe est un vers de deux syllabes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les grandes strophes",
          "stepTheme": "Les grandes strophes",
          "stepBadge": "Les grandes strophes",
          "paragraphText": "• 6 vers : le sizain ;\n• 8 vers : le huitain ;\n• 10 vers : le dizain.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p05_q5",
            "type": "mcq",
            "prompt": "Comment appelle-t-on une strophe de dix vers ?",
            "options": [
              "Un décasyllabe",
              "Un huitain",
              "Un douzain",
              "Un dizain"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le décasyllabe est un vers de 10 syllabes, le dizain une strophe de 10 vers."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Musset",
          "stepTheme": "Musset",
          "stepBadge": "Musset",
          "paragraphText": "« Reviens, oh ! qui t'empêche, / Toi, que le soir, longtemps, / J'attends ! » (Musset).\nTrois vers : c'est un tercet.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p05_q6",
            "type": "mcq",
            "prompt": "Quel nom porte la strophe de Musset « Reviens, oh ! qui t'empêche, / Toi, que le soir, longtemps, / J'attends ! » ?",
            "options": [
              "Un distique",
              "Un quatrain",
              "Un tercet",
              "Un sizain"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On compte trois vers."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Vers ou strophe ?",
          "stepTheme": "Vers ou strophe ?",
          "stepBadge": "Vers ou strophe ?",
          "paragraphText": "Ne confonds pas :\n• le nom du vers dépend du nombre de syllabes (dissyllabe, décasyllabe) ;\n• le nom de la strophe dépend du nombre de vers (distique, dizain).",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p05_q7",
            "type": "mcq",
            "prompt": "Quel mot désigne une strophe et non un vers ?",
            "options": [
              "Un octosyllabe",
              "Un sizain",
              "Un alexandrin",
              "Un hexasyllabe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le sizain est une strophe de six vers."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p05_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une strophe ?",
          "options": [
            "Une syllabe accentuée",
            "Un groupe de vers séparé par un blanc",
            "Un vers de douze syllabes",
            "La rime d'un poème"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les strophes sont les « paragraphes » du poème."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p05_q2",
          "type": "mcq",
          "prompt": "Comment appelle-t-on une strophe de quatre vers ?",
          "options": [
            "Un tercet",
            "Un distique",
            "Un quintil",
            "Un quatrain"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Quatrain = 4 vers."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p05_q3",
          "type": "mcq",
          "prompt": "Combien de vers compte un tercet ?",
          "options": [
            "Trois",
            "Deux",
            "Quatre",
            "Cinq"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tercet = 3 vers."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p05_q4",
          "type": "mcq",
          "prompt": "Comment appelle-t-on une strophe de deux vers ?",
          "options": [
            "Un dissyllabe",
            "Un tercet",
            "Un distique",
            "Un monostiche"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Attention : le dissyllabe est un vers de deux syllabes."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p05_q5",
          "type": "mcq",
          "prompt": "Comment appelle-t-on une strophe de dix vers ?",
          "options": [
            "Un décasyllabe",
            "Un huitain",
            "Un douzain",
            "Un dizain"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le décasyllabe est un vers de 10 syllabes, le dizain une strophe de 10 vers."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p05_q6",
          "type": "mcq",
          "prompt": "Quel nom porte la strophe de Musset « Reviens, oh ! qui t'empêche, / Toi, que le soir, longtemps, / J'attends ! » ?",
          "options": [
            "Un distique",
            "Un quatrain",
            "Un tercet",
            "Un sizain"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On compte trois vers."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p05_q7",
          "type": "mcq",
          "prompt": "Quel mot désigne une strophe et non un vers ?",
          "options": [
            "Un octosyllabe",
            "Un sizain",
            "Un alexandrin",
            "Un hexasyllabe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le sizain est une strophe de six vers."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p06",
      "order": 6,
      "title": "Les poèmes à forme fixe",
      "summary": "Le sonnet, le pantoum, la ballade.",
      "conceptExplanation": "Les poèmes à forme fixe obéissent à une structure déterminée : nombre de vers, de strophes, disposition des rimes.\n\n1. Le sonnet : 14 vers de même mesure, répartis en deux quatrains suivis de deux tercets. D'origine italienne (Pétrarque), il apparaît en France au XVIe siècle et est popularisé par les poètes de la Pléiade (Ronsard, Du Bellay). Il reste très pratiqué jusqu'au XIXe siècle.\nExemple : « Correspondances » de Charles Baudelaire (Les Fleurs du mal).\n\n2. Le pantoum : forme d'origine malaise introduite en France au XIXe siècle (notamment par Victor Hugo). Il est fait de quatrains enchaînés : les vers 2 et 4 d'un quatrain deviennent les vers 1 et 3 du quatrain suivant. Le nombre de quatrains n'est pas fixé.\nExemple : « Harmonie du soir » de Baudelaire, construit sur ce principe de reprise.\n\n3. La ballade : forme du Moyen Âge, composée de trois strophes et d'un envoi plus court, avec un même vers refrain à la fin de chaque strophe et de l'envoi.\nExemple : « Ballade des pendus » de François Villon.\n\nIl existe aussi des formes plus libres : l'ode, la fable, les stances.",
      "keyRule": "Sonnet : 14 vers = 2 quatrains + 2 tercets. Pantoum : quatrains enchaînés (vers 2 et 4 repris en 1 et 3). Ballade : 3 strophes + envoi, avec refrain.",
      "formulas": [],
      "workedExample": {
        "title": "Reconnaître un sonnet",
        "statement": "Un poème compte 14 alexandrins : deux strophes de 4 vers, puis deux de 3 vers. Quelle forme ?",
        "methodSteps": [
          "14 vers au total.",
          "Deux quatrains puis deux tercets."
        ],
        "conclusion": "C'est un sonnet."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La forme fixe",
          "stepTheme": "La forme fixe",
          "stepBadge": "La forme fixe",
          "paragraphText": "Un poème à forme fixe obéit à une structure déterminée : nombre de vers, de strophes, disposition des rimes.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p06_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'un poème à forme fixe ?",
            "options": [
              "Un poème dont la structure est imposée",
              "Un poème écrit en vers libres",
              "Un poème sans strophes",
              "Un poème en prose"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La forme est fixée à l'avance par des règles."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le sonnet",
          "stepTheme": "Le sonnet",
          "stepBadge": "Le sonnet",
          "paragraphText": "Le sonnet compte 14 vers : deux quatrains suivis de deux tercets.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p06_q2",
            "type": "mcq",
            "prompt": "Combien de vers compte un sonnet ?",
            "options": [
              "Quatorze",
              "Douze",
              "Seize",
              "Dix"
            ],
            "correctAnswerIndex": 0,
            "explanation": "4 + 4 + 3 + 3 = 14."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les strophes du sonnet",
          "stepTheme": "Les strophes du sonnet",
          "stepBadge": "Les strophes du sonnet",
          "paragraphText": "Le sonnet se compose de deux quatrains suivis de deux tercets.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p06_q3",
            "type": "mcq",
            "prompt": "Comment sont organisées les strophes d'un sonnet ?",
            "options": [
              "Trois quatrains puis un distique",
              "Deux quatrains puis deux tercets",
              "Quatre tercets puis un monostiche",
              "Deux tercets puis deux quatrains"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les quatrains viennent d'abord, les tercets ensuite."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Baudelaire",
          "stepTheme": "Baudelaire",
          "stepBadge": "Baudelaire",
          "paragraphText": "« Correspondances », dans Les Fleurs du mal de Charles Baudelaire, est un sonnet.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p06_q4",
            "type": "mcq",
            "prompt": "Quel recueil de Baudelaire contient le sonnet « Correspondances » ?",
            "options": [
              "Les Contemplations",
              "Les Fables",
              "Les Fleurs du mal",
              "Les Méditations poétiques"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les Fleurs du mal paraît en 1857."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le pantoum",
          "stepTheme": "Le pantoum",
          "stepBadge": "Le pantoum",
          "paragraphText": "Le pantoum, d'origine malaise, enchaîne des quatrains : les vers 2 et 4 d'un quatrain deviennent les vers 1 et 3 du suivant.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p06_q5",
            "type": "mcq",
            "prompt": "Dans un pantoum, que deviennent les vers 2 et 4 d'un quatrain ?",
            "options": [
              "Les vers 2 et 4 du quatrain suivant",
              "Le titre du poème",
              "Le dernier vers du poème uniquement",
              "Les vers 1 et 3 du quatrain suivant"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est ce jeu de reprise qui crée l'effet d'écho."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La ballade",
          "stepTheme": "La ballade",
          "stepBadge": "La ballade",
          "paragraphText": "La ballade, forme du Moyen Âge, a trois strophes et un envoi plus court, avec un vers refrain à la fin de chaque strophe.\nExemple : « Ballade des pendus » de François Villon.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p06_q6",
            "type": "mcq",
            "prompt": "Quel élément revient à la fin de chaque strophe d'une ballade ?",
            "options": [
              "Un quatrain entier",
              "Le titre du poème",
              "Un vers refrain",
              "Une strophe de prose"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le refrain donne son unité à la ballade."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Pas de nombre fixe de quatrains",
          "stepTheme": "Pas de nombre fixe de quatrains",
          "stepBadge": "Pas de nombre fixe de quatrains",
          "paragraphText": "Le pantoum n'a pas un nombre fixe de quatrains : ce qui le définit, c'est le jeu de reprise des vers d'une strophe à l'autre.",
          "exercise": {
            "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p06_q7",
            "type": "mcq",
            "prompt": "Qu'est-ce qui définit un pantoum ?",
            "options": [
              "Un nombre fixe de quatre quatrains",
              "Un total de quatorze vers exactement",
              "L'absence totale de rimes et de strophes",
              "La reprise des vers 2 et 4 dans la strophe suivante"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le nombre de strophes est libre ; le mécanisme de reprise est obligatoire."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p06_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un poème à forme fixe ?",
          "options": [
            "Un poème dont la structure est imposée",
            "Un poème écrit en vers libres",
            "Un poème sans strophes",
            "Un poème en prose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La forme est fixée à l'avance par des règles."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p06_q2",
          "type": "mcq",
          "prompt": "Combien de vers compte un sonnet ?",
          "options": [
            "Quatorze",
            "Douze",
            "Seize",
            "Dix"
          ],
          "correctAnswerIndex": 0,
          "explanation": "4 + 4 + 3 + 3 = 14."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p06_q3",
          "type": "mcq",
          "prompt": "Comment sont organisées les strophes d'un sonnet ?",
          "options": [
            "Trois quatrains puis un distique",
            "Deux quatrains puis deux tercets",
            "Quatre tercets puis un monostiche",
            "Deux tercets puis deux quatrains"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les quatrains viennent d'abord, les tercets ensuite."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p06_q4",
          "type": "mcq",
          "prompt": "Quel recueil de Baudelaire contient le sonnet « Correspondances » ?",
          "options": [
            "Les Contemplations",
            "Les Fables",
            "Les Fleurs du mal",
            "Les Méditations poétiques"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les Fleurs du mal paraît en 1857."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p06_q5",
          "type": "mcq",
          "prompt": "Dans un pantoum, que deviennent les vers 2 et 4 d'un quatrain ?",
          "options": [
            "Les vers 2 et 4 du quatrain suivant",
            "Le titre du poème",
            "Le dernier vers du poème uniquement",
            "Les vers 1 et 3 du quatrain suivant"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est ce jeu de reprise qui crée l'effet d'écho."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p06_q6",
          "type": "mcq",
          "prompt": "Quel élément revient à la fin de chaque strophe d'une ballade ?",
          "options": [
            "Un quatrain entier",
            "Le titre du poème",
            "Un vers refrain",
            "Une strophe de prose"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le refrain donne son unité à la ballade."
        },
        {
          "id": "seconde_a_francais_pl_l06_versification_vers_strophes_p06_q7",
          "type": "mcq",
          "prompt": "Qu'est-ce qui définit un pantoum ?",
          "options": [
            "Un nombre fixe de quatre quatrains",
            "Un total de quatorze vers exactement",
            "L'absence totale de rimes et de strophes",
            "La reprise des vers 2 et 4 dans la strophe suivante"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le nombre de strophes est libre ; le mécanisme de reprise est obligatoire."
        }
      ]
    }
  ]
};
