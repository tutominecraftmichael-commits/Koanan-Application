import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 12 PL 2nde l'implicite.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const FR_2DE_PL_L07_IMPLICITE: CurriculumChapter = {
  "id": "seconde_a_francais_pl_l07_implicite",
  "subjectId": "francais",
  "gradeLevel": "seconde_a",
  "alsoForGrades": [
    "seconde_c"
  ],
  "order": 16,
  "title": "Perfectionnement de la langue : L'implicite, le présupposé et le sous-entendu",
  "summary": "Explicite et implicite, le présupposé, le sous-entendu, les distinguer et les utiliser.",
  "officialVolumeHours": 2,
  "contentVersion": 2,
  "source": "12 PL 2nde l'implicite.pdf",
  "points": [
    {
      "id": "seconde_a_francais_pl_l07_implicite_p01",
      "order": 1,
      "title": "Explicite et implicite",
      "summary": "Ce qui est dit, ce qui est laissé entendre.",
      "conceptExplanation": "Un message explicite dit clairement les choses : tout est dans les mots.\nUn message implicite n'est pas dit directement : il est laissé entendre. Le destinataire doit le deviner, à partir des mots ou de la situation.\n\nExemple : « Il ne triche plus. »\n- explicite : en ce moment, il ne triche pas ;\n- implicite : avant, il trichait.\n\nL'implicite comprend deux formes :\n- le présupposé : une information déjà contenue dans les mots de la phrase ;\n- le sous-entendu : une information que l'on déduit de la situation.\n\nOn emploie l'implicite pour être plus discret, plus poli, plus subtil, pour suggérer une critique sans l'exprimer, ou pour faire réfléchir le destinataire. Les textes littéraires, la publicité et les discours l'utilisent beaucoup.",
      "keyRule": "Explicite : dit clairement. Implicite : laissé entendre. Deux formes : le présupposé (dans les mots) et le sous-entendu (dans la situation).",
      "formulas": [],
      "workedExample": {
        "title": "Lire entre les lignes",
        "statement": "« Pour une fois, vous êtes sages au cours. » Que laisse entendre le professeur ?",
        "methodSteps": [
          "Explicitement : aujourd'hui, les élèves sont sages.",
          "« Pour une fois » indique que ce n'est pas habituel."
        ],
        "conclusion": "Implicitement : d'habitude, les élèves ne sont pas sages."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Explicite",
          "stepTheme": "Explicite",
          "stepBadge": "Explicite",
          "paragraphText": "Un message explicite dit clairement les choses : tout le sens est dans les mots.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p01_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'un message explicite ?",
            "options": [
              "Un message caché qu'il faut deviner",
              "Un message écrit en langue étrangère",
              "Un message qui dit clairement les choses",
              "Un message sans aucun sens"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Explicite = exprimé clairement."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Implicite",
          "stepTheme": "Implicite",
          "stepBadge": "Implicite",
          "paragraphText": "Un message implicite n'est pas dit directement : il est laissé entendre et le destinataire doit le deviner.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p01_q2",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'un message implicite ?",
            "options": [
              "Un message laissé entendre, à deviner",
              "Un message dit très clairement",
              "Un message entièrement chiffré",
              "Un message répété plusieurs fois"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On parle aussi du « non-dit »."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Il ne triche plus",
          "stepTheme": "Il ne triche plus",
          "stepBadge": "Il ne triche plus",
          "paragraphText": "« Il ne triche plus. »\n• Explicite : il ne triche pas en ce moment.\n• Implicite : avant, il trichait.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p01_q3",
            "type": "mcq",
            "prompt": "Que laisse entendre « Il ne triche plus » ?",
            "options": [
              "Qu'il n'a jamais triché",
              "Qu'il va tricher demain",
              "Qu'il est le meilleur élève",
              "Qu'avant, il trichait"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Ne… plus » suppose une situation passée différente."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Deux formes",
          "stepTheme": "Deux formes",
          "stepBadge": "Deux formes",
          "paragraphText": "L'implicite comprend deux formes :\n• le présupposé ;\n• le sous-entendu.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p01_q4",
            "type": "mcq",
            "prompt": "Quelles sont les deux formes de l'implicite ?",
            "options": [
              "La rime et le rythme",
              "Le présupposé et le sous-entendu",
              "La métaphore et la comparaison",
              "L'émetteur et le récepteur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les deux manières de dire sans dire."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Pour une fois",
          "stepTheme": "Pour une fois",
          "stepBadge": "Pour une fois",
          "paragraphText": "« Pour une fois, vous êtes sages au cours. »\n« Pour une fois » laisse entendre que ce n'est pas l'habitude.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p01_q5",
            "type": "mcq",
            "prompt": "Que laisse entendre « Pour une fois, vous êtes sages au cours » ?",
            "options": [
              "Que les élèves sont toujours sages",
              "Que d'habitude, les élèves ne sont pas sages",
              "Que le cours est annulé",
              "Que le professeur est absent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'expression « pour une fois » révèle le contraste avec l'habitude."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Pourquoi l'implicite ?",
          "stepTheme": "Pourquoi l'implicite ?",
          "stepBadge": "Pourquoi l'implicite ?",
          "paragraphText": "On utilise l'implicite pour être discret, poli, subtil, pour critiquer sans le dire ouvertement ou pour faire réfléchir.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p01_q6",
            "type": "mcq",
            "prompt": "Pourquoi emploie-t-on souvent l'implicite ?",
            "options": [
              "Pour rendre le message incompréhensible",
              "Pour allonger inutilement le texte",
              "Pour éviter toute réflexion",
              "Pour suggérer une critique avec discrétion"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'implicite permet de dire sans dire."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Les mots ne disent pas tout",
          "stepTheme": "Les mots ne disent pas tout",
          "stepBadge": "Les mots ne disent pas tout",
          "paragraphText": "Comprendre un texte, ce n'est pas seulement lire les mots : il faut aussi repérer ce qu'ils laissent entendre.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p01_q7",
            "type": "mcq",
            "prompt": "« Vous êtes ponctuels aujourd'hui ! » dit le professeur. Que comprend-on ?",
            "options": [
              "Que d'habitude, les élèves sont en retard",
              "Que les élèves sont toujours à l'heure",
              "Que le cours commence plus tard",
              "Que le professeur est en retard"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Aujourd'hui » oppose ce jour aux autres."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l07_implicite_p01_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un message explicite ?",
          "options": [
            "Un message caché qu'il faut deviner",
            "Un message écrit en langue étrangère",
            "Un message qui dit clairement les choses",
            "Un message sans aucun sens"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Explicite = exprimé clairement."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p01_q2",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un message implicite ?",
          "options": [
            "Un message laissé entendre, à deviner",
            "Un message dit très clairement",
            "Un message entièrement chiffré",
            "Un message répété plusieurs fois"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On parle aussi du « non-dit »."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p01_q3",
          "type": "mcq",
          "prompt": "Que laisse entendre « Il ne triche plus » ?",
          "options": [
            "Qu'il n'a jamais triché",
            "Qu'il va tricher demain",
            "Qu'il est le meilleur élève",
            "Qu'avant, il trichait"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Ne… plus » suppose une situation passée différente."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p01_q4",
          "type": "mcq",
          "prompt": "Quelles sont les deux formes de l'implicite ?",
          "options": [
            "La rime et le rythme",
            "Le présupposé et le sous-entendu",
            "La métaphore et la comparaison",
            "L'émetteur et le récepteur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les deux manières de dire sans dire."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p01_q5",
          "type": "mcq",
          "prompt": "Que laisse entendre « Pour une fois, vous êtes sages au cours » ?",
          "options": [
            "Que les élèves sont toujours sages",
            "Que d'habitude, les élèves ne sont pas sages",
            "Que le cours est annulé",
            "Que le professeur est absent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'expression « pour une fois » révèle le contraste avec l'habitude."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p01_q6",
          "type": "mcq",
          "prompt": "Pourquoi emploie-t-on souvent l'implicite ?",
          "options": [
            "Pour rendre le message incompréhensible",
            "Pour allonger inutilement le texte",
            "Pour éviter toute réflexion",
            "Pour suggérer une critique avec discrétion"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'implicite permet de dire sans dire."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p01_q7",
          "type": "mcq",
          "prompt": "« Vous êtes ponctuels aujourd'hui ! » dit le professeur. Que comprend-on ?",
          "options": [
            "Que d'habitude, les élèves sont en retard",
            "Que les élèves sont toujours à l'heure",
            "Que le cours commence plus tard",
            "Que le professeur est en retard"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Aujourd'hui » oppose ce jour aux autres."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l07_implicite_p02",
      "order": 2,
      "title": "Le présupposé",
      "summary": "Une information déjà inscrite dans les mots.",
      "conceptExplanation": "Le présupposé est une information qui n'est pas affirmée directement, mais qui est contenue dans les mots mêmes de l'énoncé. Elle renvoie souvent à un fait antérieur.\n\nMots qui créent un présupposé :\n- les adverbes « ne... plus », « encore », « déjà », « toujours » : « Il ne triche plus » → il trichait ;\n- les verbes qui marquent un changement : arrêter de, cesser de, recommencer, reprendre, se réveiller : « J'ai repris mon devoir » → je l'avais déjà fait une première fois ; « Les jeunes se réveillent ! » → ils étaient endormis, inactifs ;\n- les expressions de temps ou de comparaison : « pour une fois », « à présent », « aujourd'hui » : « Cette classe est calme à présent » → elle ne l'était pas avant ;\n- les questions : « Comment encourager les élèves à la lecture ? » → les élèves ne lisent pas assez.\n\nLe présupposé ne peut pas être contesté sans contester toute la phrase : il reste vrai même si l'on met la phrase à la forme négative ou interrogative. « Il ne triche plus », « Il triche encore ? » : dans les deux cas, on suppose qu'il trichait.",
      "keyRule": "Présupposé : information contenue dans les mots (ne… plus, encore, reprendre, se réveiller, pour une fois, à présent). Il résiste à la négation et à la question.",
      "formulas": [],
      "workedExample": {
        "title": "Dégager un présupposé",
        "statement": "« J'ai repris mon devoir. » Quel est le présupposé ?",
        "methodSteps": [
          "Le verbe « reprendre » indique qu'on refait quelque chose.",
          "Le présupposé est donc qu'une première version existait."
        ],
        "conclusion": "Présupposé : j'avais déjà fait ce devoir une première fois."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le présupposé",
          "stepTheme": "Le présupposé",
          "stepBadge": "Le présupposé",
          "paragraphText": "Le présupposé est une information contenue dans les mots mêmes de la phrase, sans être affirmée directement.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p02_q1",
            "type": "mcq",
            "prompt": "Où se trouve l'information présupposée ?",
            "options": [
              "Uniquement dans la situation de parole",
              "Dans le titre du texte",
              "Dans les mots mêmes de la phrase",
              "Dans la ponctuation seulement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le présupposé est inscrit dans l'énoncé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Ne… plus",
          "stepTheme": "Ne… plus",
          "stepBadge": "Ne… plus",
          "paragraphText": "« Ne… plus », « encore », « déjà » créent des présupposés :\n« Il ne fume plus » → il fumait avant.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p02_q2",
            "type": "mcq",
            "prompt": "Quel est le présupposé de « Il ne fume plus » ?",
            "options": [
              "Il n'a jamais fumé",
              "Il va commencer à fumer",
              "Il fume beaucoup",
              "Il fumait avant"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Ne… plus » renvoie à une habitude passée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Reprendre",
          "stepTheme": "Reprendre",
          "stepBadge": "Reprendre",
          "paragraphText": "Les verbes de changement créent des présupposés : arrêter, cesser, recommencer, reprendre.\n« J'ai repris mon devoir » → je l'avais déjà fait une première fois.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p02_q3",
            "type": "mcq",
            "prompt": "Quel est le présupposé de « J'ai repris mon devoir » ?",
            "options": [
              "Je n'ai jamais fait ce devoir",
              "Le devoir est facile",
              "J'avais déjà fait ce devoir une première fois",
              "Le professeur a oublié le devoir"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Reprendre = refaire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Se réveiller",
          "stepTheme": "Se réveiller",
          "stepBadge": "Se réveiller",
          "paragraphText": "« Les jeunes se réveillent ! »\nLe verbe suppose qu'avant, les jeunes étaient endormis, c'est-à-dire inactifs.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p02_q4",
            "type": "mcq",
            "prompt": "Quel est le présupposé de « Les jeunes se réveillent ! » ?",
            "options": [
              "Les jeunes ont toujours été actifs",
              "Avant, les jeunes étaient inactifs",
              "Les jeunes dorment encore",
              "Les jeunes sont très fatigués"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On ne se réveille que si l'on dormait."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une question",
          "stepTheme": "Une question",
          "stepBadge": "Une question",
          "paragraphText": "« Comment encourager les élèves à la lecture ? »\nLa question suppose que les élèves ne lisent pas assez.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p02_q5",
            "type": "mcq",
            "prompt": "Que présuppose la question « Comment encourager les élèves à la lecture ? » ?",
            "options": [
              "Que les élèves ne lisent pas assez",
              "Que les élèves lisent déjà beaucoup",
              "Que la lecture est interdite",
              "Que les élèves n'ont pas de livres du tout"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On ne cherche à encourager que ce qui manque."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Le test de la négation",
          "stepTheme": "Le test de la négation",
          "stepBadge": "Le test de la négation",
          "paragraphText": "Pour vérifier un présupposé, mets la phrase à la forme négative ou interrogative : le présupposé reste vrai.\n« Il ne triche plus » / « Triche-t-il encore ? » → dans les deux cas, il trichait.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p02_q6",
            "type": "mcq",
            "prompt": "Comment vérifier qu'une information est présupposée ?",
            "options": [
              "Elle reste vraie si la phrase est niée ou mise en question",
              "Elle disparaît quand on nie la phrase",
              "Elle change selon l'humeur du lecteur",
              "Elle est toujours écrite entre guillemets"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le présupposé résiste à la négation."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Incontestable",
          "stepTheme": "Incontestable",
          "stepBadge": "Incontestable",
          "paragraphText": "On ne peut pas contester un présupposé sans contester toute la phrase : il est imposé par les mots mêmes.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p02_q7",
            "type": "mcq",
            "prompt": "Peut-on facilement nier un présupposé ?",
            "options": [
              "Oui, on peut toujours dire qu'on ne l'a pas dit",
              "Non, il est imposé par les mots mêmes",
              "Oui, il dépend seulement de l'humeur",
              "Non, car il est toujours faux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est ce qui le distingue du sous-entendu."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l07_implicite_p02_q1",
          "type": "mcq",
          "prompt": "Où se trouve l'information présupposée ?",
          "options": [
            "Uniquement dans la situation de parole",
            "Dans le titre du texte",
            "Dans les mots mêmes de la phrase",
            "Dans la ponctuation seulement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le présupposé est inscrit dans l'énoncé."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p02_q2",
          "type": "mcq",
          "prompt": "Quel est le présupposé de « Il ne fume plus » ?",
          "options": [
            "Il n'a jamais fumé",
            "Il va commencer à fumer",
            "Il fume beaucoup",
            "Il fumait avant"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Ne… plus » renvoie à une habitude passée."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p02_q3",
          "type": "mcq",
          "prompt": "Quel est le présupposé de « J'ai repris mon devoir » ?",
          "options": [
            "Je n'ai jamais fait ce devoir",
            "Le devoir est facile",
            "J'avais déjà fait ce devoir une première fois",
            "Le professeur a oublié le devoir"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Reprendre = refaire."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p02_q4",
          "type": "mcq",
          "prompt": "Quel est le présupposé de « Les jeunes se réveillent ! » ?",
          "options": [
            "Les jeunes ont toujours été actifs",
            "Avant, les jeunes étaient inactifs",
            "Les jeunes dorment encore",
            "Les jeunes sont très fatigués"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On ne se réveille que si l'on dormait."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p02_q5",
          "type": "mcq",
          "prompt": "Que présuppose la question « Comment encourager les élèves à la lecture ? » ?",
          "options": [
            "Que les élèves ne lisent pas assez",
            "Que les élèves lisent déjà beaucoup",
            "Que la lecture est interdite",
            "Que les élèves n'ont pas de livres du tout"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On ne cherche à encourager que ce qui manque."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p02_q6",
          "type": "mcq",
          "prompt": "Comment vérifier qu'une information est présupposée ?",
          "options": [
            "Elle reste vraie si la phrase est niée ou mise en question",
            "Elle disparaît quand on nie la phrase",
            "Elle change selon l'humeur du lecteur",
            "Elle est toujours écrite entre guillemets"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le présupposé résiste à la négation."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p02_q7",
          "type": "mcq",
          "prompt": "Peut-on facilement nier un présupposé ?",
          "options": [
            "Oui, on peut toujours dire qu'on ne l'a pas dit",
            "Non, il est imposé par les mots mêmes",
            "Oui, il dépend seulement de l'humeur",
            "Non, car il est toujours faux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est ce qui le distingue du sous-entendu."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l07_implicite_p03",
      "order": 3,
      "title": "Le sous-entendu",
      "summary": "Une information qui se déduit de la situation.",
      "conceptExplanation": "Le sous-entendu est une information qui n'est pas dans les mots eux-mêmes : on la déduit de la situation (qui parle, à qui, où, quand). Le même énoncé peut donc avoir des sous-entendus différents selon le contexte.\n\nExemple : « Il est huit heures. »\n- dit à un élève qui arrive : « Tu es en retard » ;\n- dit à un élève qui arrive très tôt : « Tu es en avance » ;\n- dit à un ami à la maison : « C'est le moment de partir » ;\n- dit au début d'une réunion : « La séance peut commencer ».\n\nAutres exemples :\n- « Il fait chaud ici » → « Ouvre la fenêtre » ou « Allume le ventilateur » ;\n- « Tu te rends compte de l'heure qu'il est ! » → « Il est trop tard », « Tu me déranges » ;\n- « Quel temps ! » → « Il fait très beau » ou « Il fait très mauvais », selon la situation.\n\nLe sous-entendu peut être contesté : celui qui parle peut toujours dire « Je n'ai pas dit ça ». Il permet donc de suggérer une demande ou une critique sans s'engager.",
      "keyRule": "Sous-entendu : information déduite de la situation (« Il fait chaud ici » → ouvre la fenêtre). Il varie selon le contexte et peut être nié par celui qui parle.",
      "formulas": [],
      "workedExample": {
        "title": "Dégager un sous-entendu",
        "statement": "Un visiteur dit à son hôte : « Il fait chaud ici. » Que sous-entend-il ?",
        "methodSteps": [
          "Les mots constatent seulement la chaleur.",
          "Dans la situation, le visiteur souhaite être soulagé."
        ],
        "conclusion": "Sous-entendu : « Pourriez-vous ouvrir la fenêtre ou allumer le ventilateur ? »"
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le sous-entendu",
          "stepTheme": "Le sous-entendu",
          "stepBadge": "Le sous-entendu",
          "paragraphText": "Le sous-entendu est une information qu'on déduit de la situation (qui parle, à qui, où, quand), et non des mots seuls.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p03_q1",
            "type": "mcq",
            "prompt": "D'où vient le sens d'un sous-entendu ?",
            "options": [
              "Uniquement des mots de la phrase",
              "Du dictionnaire",
              "De la situation de communication",
              "De l'orthographe de la phrase"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le contexte donne le sens caché."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Il fait chaud ici",
          "stepTheme": "Il fait chaud ici",
          "stepBadge": "Il fait chaud ici",
          "paragraphText": "« Il fait chaud ici », dit par un visiteur à son hôte, sous-entend une demande : « Ouvrez la fenêtre », « Allumez le ventilateur ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p03_q2",
            "type": "mcq",
            "prompt": "Que sous-entend souvent « Il fait chaud ici » dit à quelqu'un dans une pièce ?",
            "options": [
              "« Il fait froid dehors »",
              "« Ferme la porte à clé »",
              "« Je vais allumer le feu »",
              "« Ouvre la fenêtre, s'il te plaît »"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La remarque cache une demande polie."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Il est huit heures",
          "stepTheme": "Il est huit heures",
          "stepBadge": "Il est huit heures",
          "paragraphText": "« Il est huit heures » peut sous-entendre : « Tu es en retard », « C'est le moment de partir », « La séance peut commencer »... selon la situation.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p03_q3",
            "type": "mcq",
            "prompt": "Pourquoi « Il est huit heures » peut-il avoir plusieurs sous-entendus ?",
            "options": [
              "Parce que l'heure est fausse",
              "Parce que la phrase est mal construite",
              "Parce que le sens dépend de la situation",
              "Parce qu'il y a un présupposé"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le même énoncé change de sens selon le contexte."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'heure qu'il est",
          "stepTheme": "L'heure qu'il est",
          "stepBadge": "L'heure qu'il est",
          "paragraphText": "« Tu te rends compte de l'heure qu'il est ! »\nSelon la situation : « Il est trop tard », « Tu me déranges », « Tu es en retard ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p03_q4",
            "type": "mcq",
            "prompt": "Dit à quelqu'un qui téléphone à minuit, que sous-entend « Tu te rends compte de l'heure qu'il est ! » ?",
            "options": [
              "« Merci de m'appeler si tôt »",
              "« Quelle heure est-il, s'il te plaît ? »",
              "« Ma montre est en panne »",
              "« Tu me déranges, il est trop tard »"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La situation (minuit) révèle le reproche."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Contestable",
          "stepTheme": "Contestable",
          "stepBadge": "Contestable",
          "paragraphText": "Le sous-entendu peut être contesté : celui qui parle peut toujours dire « Je n'ai pas dit ça ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p03_q5",
            "type": "mcq",
            "prompt": "Quelle différence le sous-entendu présente-t-il avec le présupposé ?",
            "options": [
              "Celui qui parle peut nier l'avoir voulu dire",
              "Il est impossible à contester",
              "Il est toujours écrit dans les mots",
              "Il ne dépend jamais du contexte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le sous-entendu n'engage pas autant celui qui parle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Quel temps !",
          "stepTheme": "Quel temps !",
          "stepBadge": "Quel temps !",
          "paragraphText": "« Quel temps ! » peut sous-entendre « il fait très beau » ou « il fait très mauvais » : seule la situation permet de choisir.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p03_q6",
            "type": "mcq",
            "prompt": "Qu'est-ce qui permet de comprendre le sous-entendu de « Quel temps ! » ?",
            "options": [
              "La conjugaison du verbe",
              "La situation au moment où l'on parle",
              "Le nombre de mots de la phrase",
              "La ponctuation seule"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sous la pluie ou sous le soleil, le sens change."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Une stratégie polie",
          "stepTheme": "Une stratégie polie",
          "stepBadge": "Une stratégie polie",
          "paragraphText": "Le sous-entendu permet de demander ou de critiquer sans le dire ouvertement : c'est souvent une forme de politesse.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p03_q7",
            "type": "mcq",
            "prompt": "Pourquoi dire « Il fait chaud ici » plutôt que « Ouvre la fenêtre » ?",
            "options": [
              "Pour donner un ordre brutal",
              "Pour formuler une demande de façon polie et indirecte",
              "Pour parler de la météo du pays",
              "Pour éviter d'être compris"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le sous-entendu adoucit la demande."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l07_implicite_p03_q1",
          "type": "mcq",
          "prompt": "D'où vient le sens d'un sous-entendu ?",
          "options": [
            "Uniquement des mots de la phrase",
            "Du dictionnaire",
            "De la situation de communication",
            "De l'orthographe de la phrase"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le contexte donne le sens caché."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p03_q2",
          "type": "mcq",
          "prompt": "Que sous-entend souvent « Il fait chaud ici » dit à quelqu'un dans une pièce ?",
          "options": [
            "« Il fait froid dehors »",
            "« Ferme la porte à clé »",
            "« Je vais allumer le feu »",
            "« Ouvre la fenêtre, s'il te plaît »"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La remarque cache une demande polie."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p03_q3",
          "type": "mcq",
          "prompt": "Pourquoi « Il est huit heures » peut-il avoir plusieurs sous-entendus ?",
          "options": [
            "Parce que l'heure est fausse",
            "Parce que la phrase est mal construite",
            "Parce que le sens dépend de la situation",
            "Parce qu'il y a un présupposé"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le même énoncé change de sens selon le contexte."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p03_q4",
          "type": "mcq",
          "prompt": "Dit à quelqu'un qui téléphone à minuit, que sous-entend « Tu te rends compte de l'heure qu'il est ! » ?",
          "options": [
            "« Merci de m'appeler si tôt »",
            "« Quelle heure est-il, s'il te plaît ? »",
            "« Ma montre est en panne »",
            "« Tu me déranges, il est trop tard »"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La situation (minuit) révèle le reproche."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p03_q5",
          "type": "mcq",
          "prompt": "Quelle différence le sous-entendu présente-t-il avec le présupposé ?",
          "options": [
            "Celui qui parle peut nier l'avoir voulu dire",
            "Il est impossible à contester",
            "Il est toujours écrit dans les mots",
            "Il ne dépend jamais du contexte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le sous-entendu n'engage pas autant celui qui parle."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p03_q6",
          "type": "mcq",
          "prompt": "Qu'est-ce qui permet de comprendre le sous-entendu de « Quel temps ! » ?",
          "options": [
            "La conjugaison du verbe",
            "La situation au moment où l'on parle",
            "Le nombre de mots de la phrase",
            "La ponctuation seule"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sous la pluie ou sous le soleil, le sens change."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p03_q7",
          "type": "mcq",
          "prompt": "Pourquoi dire « Il fait chaud ici » plutôt que « Ouvre la fenêtre » ?",
          "options": [
            "Pour donner un ordre brutal",
            "Pour formuler une demande de façon polie et indirecte",
            "Pour parler de la météo du pays",
            "Pour éviter d'être compris"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le sous-entendu adoucit la demande."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l07_implicite_p04",
      "order": 4,
      "title": "Présupposé ou sous-entendu ?",
      "summary": "Distinguer les deux formes de l'implicite.",
      "conceptExplanation": "Pour distinguer les deux formes de l'implicite, pose-toi deux questions.\n\n1. D'où vient l'information cachée ?\n- d'un mot précis de la phrase (ne... plus, encore, reprendre, se réveiller, pour une fois) → présupposé ;\n- de la situation (qui parle, où, quand) → sous-entendu.\n\n2. Peut-on la nier ?\n- non, elle reste vraie même si l'on nie la phrase → présupposé ;\n- oui, celui qui parle peut dire « je n'ai pas voulu dire ça » → sous-entendu.\n\nExemples classés :\n- « Il ne triche plus » → présupposé (il trichait) ;\n- « Cette classe est calme à présent » → présupposé (elle bavardait avant) ;\n- « Il fait chaud ici » → sous-entendu (ouvre la fenêtre) ;\n- « Il est huit heures » → sous-entendu (tu es en retard, ou autre selon la situation).\n\nUne même phrase peut contenir les deux : « Vous êtes ponctuels aujourd'hui ! » présuppose que les élèves étaient en retard les autres jours, et sous-entend un reproche ironique.",
      "keyRule": "Information liée à un mot précis et impossible à nier → présupposé. Information liée à la situation et contestable → sous-entendu.",
      "formulas": [],
      "workedExample": {
        "title": "Classer deux phrases",
        "statement": "Classe : « Il recommence à travailler » ; « Tu as vu l'heure ? »",
        "methodSteps": [
          "« recommence » : présupposé (il avait arrêté).",
          "« Tu as vu l'heure ? » : le sens dépend de la situation → sous-entendu (tu es en retard, il faut partir…)."
        ],
        "conclusion": "La première contient un présupposé, la seconde un sous-entendu."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Première question",
          "stepTheme": "Première question",
          "stepBadge": "Première question",
          "paragraphText": "D'où vient l'information cachée ?\n• d'un mot précis de la phrase → présupposé ;\n• de la situation → sous-entendu.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p04_q1",
            "type": "mcq",
            "prompt": "Si l'information cachée vient d'un mot précis comme « encore » ou « ne… plus », de quoi s'agit-il ?",
            "options": [
              "D'un présupposé",
              "D'un sous-entendu",
              "D'une métaphore",
              "D'une rime"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le présupposé est attaché aux mots."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "À présent",
          "stepTheme": "À présent",
          "stepBadge": "À présent",
          "paragraphText": "« Cette classe est calme à présent. »\n« À présent » suppose qu'avant, la classe ne l'était pas : présupposé.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p04_q2",
            "type": "mcq",
            "prompt": "« Cette classe est calme à présent » contient :",
            "options": [
              "Un sous-entendu : ouvre la fenêtre",
              "Aucun contenu implicite",
              "Une hyperbole",
              "Un présupposé : avant, elle bavardait"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« À présent » oppose le présent au passé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Il est huit heures",
          "stepTheme": "Il est huit heures",
          "stepBadge": "Il est huit heures",
          "paragraphText": "« Il est huit heures » ne contient aucun mot qui impose un sens caché : tout dépend de la situation. C'est un sous-entendu.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p04_q3",
            "type": "mcq",
            "prompt": "« Il est huit heures », dit à un élève qui arrive, contient :",
            "options": [
              "Un présupposé",
              "Une comparaison",
              "Un sous-entendu",
              "Une allitération"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le reproche se déduit de la situation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Deuxième question",
          "stepTheme": "Deuxième question",
          "stepBadge": "Deuxième question",
          "paragraphText": "Peut-on nier l'information cachée ?\n• non → présupposé ;\n• oui, en disant « je n'ai pas voulu dire ça » → sous-entendu.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p04_q4",
            "type": "mcq",
            "prompt": "Quelle forme de l'implicite celui qui parle peut-il nier avoir voulu dire ?",
            "options": [
              "Le présupposé",
              "L'explicite",
              "Le sous-entendu",
              "Aucune des deux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le sous-entendu laisse une porte de sortie."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Recommencer",
          "stepTheme": "Recommencer",
          "stepBadge": "Recommencer",
          "paragraphText": "« Il recommence à travailler. »\nLe verbe « recommence » impose l'idée qu'il avait arrêté : présupposé.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p04_q5",
            "type": "mcq",
            "prompt": "Quel est le présupposé de « Il recommence à travailler » ?",
            "options": [
              "Il avait arrêté de travailler",
              "Il n'a jamais travaillé",
              "Il travaille trop",
              "Il est très fatigué"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Recommencer suppose une interruption."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les deux à la fois",
          "stepTheme": "Les deux à la fois",
          "stepBadge": "Les deux à la fois",
          "paragraphText": "« Vous êtes ponctuels aujourd'hui ! »\n• présupposé : les autres jours, vous étiez en retard ;\n• sous-entendu : un reproche ironique.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p04_q6",
            "type": "mcq",
            "prompt": "Que contient « Vous êtes ponctuels aujourd'hui ! » ?",
            "options": [
              "Seulement un présupposé",
              "Seulement un sous-entendu",
              "Aucun implicite",
              "Un présupposé et un sous-entendu"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Une même phrase peut combiner les deux formes."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Méthode de rédaction",
          "stepTheme": "Méthode de rédaction",
          "stepBadge": "Méthode de rédaction",
          "paragraphText": "Pour dégager un implicite dans un exercice, écris : « Cet énoncé présuppose que... » ou « Cet énoncé sous-entend que... », puis justifie avec le mot ou la situation.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p04_q7",
            "type": "mcq",
            "prompt": "Quelle réponse est la mieux formulée pour « Il ne triche plus » ?",
            "options": [
              "« Il ne triche pas, d'après ce qui est écrit dans la phrase. »",
              "« Cet énoncé présuppose qu'il trichait, à cause de « ne… plus ». »",
              "« Cet énoncé est une phrase négative au présent. »",
              "« L'élève dont on parle est un garçon honnête et sérieux. »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On nomme l'implicite et on le justifie."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l07_implicite_p04_q1",
          "type": "mcq",
          "prompt": "Si l'information cachée vient d'un mot précis comme « encore » ou « ne… plus », de quoi s'agit-il ?",
          "options": [
            "D'un présupposé",
            "D'un sous-entendu",
            "D'une métaphore",
            "D'une rime"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le présupposé est attaché aux mots."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p04_q2",
          "type": "mcq",
          "prompt": "« Cette classe est calme à présent » contient :",
          "options": [
            "Un sous-entendu : ouvre la fenêtre",
            "Aucun contenu implicite",
            "Une hyperbole",
            "Un présupposé : avant, elle bavardait"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« À présent » oppose le présent au passé."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p04_q3",
          "type": "mcq",
          "prompt": "« Il est huit heures », dit à un élève qui arrive, contient :",
          "options": [
            "Un présupposé",
            "Une comparaison",
            "Un sous-entendu",
            "Une allitération"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le reproche se déduit de la situation."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p04_q4",
          "type": "mcq",
          "prompt": "Quelle forme de l'implicite celui qui parle peut-il nier avoir voulu dire ?",
          "options": [
            "Le présupposé",
            "L'explicite",
            "Le sous-entendu",
            "Aucune des deux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le sous-entendu laisse une porte de sortie."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p04_q5",
          "type": "mcq",
          "prompt": "Quel est le présupposé de « Il recommence à travailler » ?",
          "options": [
            "Il avait arrêté de travailler",
            "Il n'a jamais travaillé",
            "Il travaille trop",
            "Il est très fatigué"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Recommencer suppose une interruption."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p04_q6",
          "type": "mcq",
          "prompt": "Que contient « Vous êtes ponctuels aujourd'hui ! » ?",
          "options": [
            "Seulement un présupposé",
            "Seulement un sous-entendu",
            "Aucun implicite",
            "Un présupposé et un sous-entendu"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Une même phrase peut combiner les deux formes."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p04_q7",
          "type": "mcq",
          "prompt": "Quelle réponse est la mieux formulée pour « Il ne triche plus » ?",
          "options": [
            "« Il ne triche pas, d'après ce qui est écrit dans la phrase. »",
            "« Cet énoncé présuppose qu'il trichait, à cause de « ne… plus ». »",
            "« Cet énoncé est une phrase négative au présent. »",
            "« L'élève dont on parle est un garçon honnête et sérieux. »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On nomme l'implicite et on le justifie."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l07_implicite_p05",
      "order": 5,
      "title": "Utiliser l'implicite",
      "summary": "L'implicite dans les textes et dans la vie.",
      "conceptExplanation": "L'implicite est partout :\n\n- dans la conversation : il permet d'être poli (« Il fait chaud ici »), de critiquer sans blesser (« Pour une fois, tu es à l'heure »), de faire de l'humour ;\n- dans la publicité : « Avec Lumi, votre linge sera enfin blanc » présuppose que, sans Lumi, votre linge n'est pas blanc ;\n- dans les discours et les débats : les questions orientées font passer une idée sans la démontrer (« Pourquoi le gouvernement a-t-il échoué ? » présuppose qu'il a échoué) ;\n- dans la littérature : les auteurs suggèrent plutôt que de tout dire ; le lecteur doit « lire entre les lignes ».\n\nIl faut donc lire de façon critique : repérer les présupposés que l'on veut nous faire accepter sans discussion.\n\nPour produire un énoncé implicite :\n- présupposé : employer « ne... plus », « encore », « recommencer », « pour une fois » ;\n- sous-entendu : faire une simple remarque dont le sens dépend de la situation.",
      "keyRule": "L'implicite sert la politesse, l'humour, la critique, la publicité et la littérature. Lire de façon critique : repérer les présupposés imposés.",
      "formulas": [],
      "workedExample": {
        "title": "Repérer un présupposé publicitaire",
        "statement": "« Avec Lumi, votre linge sera enfin blanc. » Que présuppose ce slogan ?",
        "methodSteps": [
          "« enfin » indique qu'on attendait ce résultat depuis longtemps.",
          "Le slogan suppose que votre linge n'est pas blanc aujourd'hui."
        ],
        "conclusion": "Présupposé : sans Lumi, votre linge n'est pas vraiment blanc."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "La publicité",
          "stepTheme": "La publicité",
          "stepBadge": "La publicité",
          "paragraphText": "« Avec Lumi, votre linge sera enfin blanc. »\n« Enfin » présuppose que votre linge n'est pas blanc aujourd'hui.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p05_q1",
            "type": "mcq",
            "prompt": "Que présuppose le slogan « Avec Lumi, votre linge sera enfin blanc » ?",
            "options": [
              "Que votre linge est déjà parfaitement blanc",
              "Que votre linge n'est pas blanc actuellement",
              "Que Lumi est un savon gratuit",
              "Que le linge ne se lave pas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Enfin » marque un changement attendu."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les questions orientées",
          "stepTheme": "Les questions orientées",
          "stepBadge": "Les questions orientées",
          "paragraphText": "« Pourquoi le projet a-t-il échoué ? »\nLa question présuppose que le projet a échoué, sans le démontrer.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p05_q2",
            "type": "mcq",
            "prompt": "Que présuppose la question « Pourquoi le projet a-t-il échoué ? » ?",
            "options": [
              "Que le projet a réussi",
              "Que le projet n'existe pas",
              "Que personne ne connaît le projet",
              "Que le projet a échoué"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La question impose l'idée de l'échec."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Lire de façon critique",
          "stepTheme": "Lire de façon critique",
          "stepBadge": "Lire de façon critique",
          "paragraphText": "Un lecteur attentif repère les présupposés qu'on veut lui faire accepter sans discussion.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p05_q3",
            "type": "mcq",
            "prompt": "Pourquoi faut-il repérer les présupposés dans un discours ?",
            "options": [
              "Pour ne pas accepter une idée sans l'examiner",
              "Pour apprendre le discours par cœur",
              "Pour compter les mots du discours",
              "Pour corriger l'orthographe de l'orateur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le présupposé fait passer une idée en douce."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La politesse",
          "stepTheme": "La politesse",
          "stepBadge": "La politesse",
          "paragraphText": "Dire « Il fait froid, non ? » au lieu de « Ferme la fenêtre » est une demande polie, indirecte : c'est un sous-entendu.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p05_q4",
            "type": "mcq",
            "prompt": "Que sous-entend souvent « Il fait froid, non ? » dit près d'une fenêtre ouverte ?",
            "options": [
              "« Ouvre toutes les fenêtres »",
              "« J'aime beaucoup le froid »",
              "« Ferme la fenêtre, s'il te plaît »",
              "« Il fait chaud dehors »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La remarque cache une demande."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Créer un présupposé",
          "stepTheme": "Créer un présupposé",
          "stepBadge": "Créer un présupposé",
          "paragraphText": "Pour créer un présupposé, emploie « ne... plus », « encore », « recommencer », « pour une fois » :\n« Mon frère ne ronfle plus » → il ronflait.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p05_q5",
            "type": "mcq",
            "prompt": "Quelle phrase contient un présupposé ?",
            "options": [
              "Il est dix heures.",
              "Il fait chaud ici.",
              "Quel temps !",
              "Mon frère ne ronfle plus."
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Ne… plus » impose l'idée qu'il ronflait avant."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Créer un sous-entendu",
          "stepTheme": "Créer un sous-entendu",
          "stepBadge": "Créer un sous-entendu",
          "paragraphText": "Pour créer un sous-entendu, fais une simple remarque dont le sens dépend de la situation :\n« Le frigo est vide » → il faut aller faire les courses.",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p05_q6",
            "type": "mcq",
            "prompt": "Que sous-entend « Le frigo est vide » dit par une mère à son fils ?",
            "options": [
              "« Le frigo est en panne »",
              "« Nous avons trop mangé hier »",
              "« Va faire les courses »",
              "« Achète un nouveau frigo »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La remarque cache une demande liée à la situation."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Dans la littérature",
          "stepTheme": "Dans la littérature",
          "stepBadge": "Dans la littérature",
          "paragraphText": "Les écrivains suggèrent souvent plutôt que de tout dire : le lecteur doit interpréter, « lire entre les lignes ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l07_implicite_p05_q7",
            "type": "mcq",
            "prompt": "Que signifie « lire entre les lignes » ?",
            "options": [
              "Lire uniquement les titres",
              "Comprendre ce qui est suggéré sans être dit",
              "Sauter des lignes en lisant",
              "Lire le texte à voix haute"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est repérer l'implicite."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l07_implicite_p05_q1",
          "type": "mcq",
          "prompt": "Que présuppose le slogan « Avec Lumi, votre linge sera enfin blanc » ?",
          "options": [
            "Que votre linge est déjà parfaitement blanc",
            "Que votre linge n'est pas blanc actuellement",
            "Que Lumi est un savon gratuit",
            "Que le linge ne se lave pas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Enfin » marque un changement attendu."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p05_q2",
          "type": "mcq",
          "prompt": "Que présuppose la question « Pourquoi le projet a-t-il échoué ? » ?",
          "options": [
            "Que le projet a réussi",
            "Que le projet n'existe pas",
            "Que personne ne connaît le projet",
            "Que le projet a échoué"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La question impose l'idée de l'échec."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p05_q3",
          "type": "mcq",
          "prompt": "Pourquoi faut-il repérer les présupposés dans un discours ?",
          "options": [
            "Pour ne pas accepter une idée sans l'examiner",
            "Pour apprendre le discours par cœur",
            "Pour compter les mots du discours",
            "Pour corriger l'orthographe de l'orateur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le présupposé fait passer une idée en douce."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p05_q4",
          "type": "mcq",
          "prompt": "Que sous-entend souvent « Il fait froid, non ? » dit près d'une fenêtre ouverte ?",
          "options": [
            "« Ouvre toutes les fenêtres »",
            "« J'aime beaucoup le froid »",
            "« Ferme la fenêtre, s'il te plaît »",
            "« Il fait chaud dehors »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La remarque cache une demande."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p05_q5",
          "type": "mcq",
          "prompt": "Quelle phrase contient un présupposé ?",
          "options": [
            "Il est dix heures.",
            "Il fait chaud ici.",
            "Quel temps !",
            "Mon frère ne ronfle plus."
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Ne… plus » impose l'idée qu'il ronflait avant."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p05_q6",
          "type": "mcq",
          "prompt": "Que sous-entend « Le frigo est vide » dit par une mère à son fils ?",
          "options": [
            "« Le frigo est en panne »",
            "« Nous avons trop mangé hier »",
            "« Va faire les courses »",
            "« Achète un nouveau frigo »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La remarque cache une demande liée à la situation."
        },
        {
          "id": "seconde_a_francais_pl_l07_implicite_p05_q7",
          "type": "mcq",
          "prompt": "Que signifie « lire entre les lignes » ?",
          "options": [
            "Lire uniquement les titres",
            "Comprendre ce qui est suggéré sans être dit",
            "Sauter des lignes en lisant",
            "Lire le texte à voix haute"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est repérer l'implicite."
        }
      ]
    }
  ]
};
