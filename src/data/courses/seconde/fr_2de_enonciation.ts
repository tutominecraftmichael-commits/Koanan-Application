import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 6 PL 2nde ENONCIATION les indices lexicaux.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const FR_2DE_PL_L04_ENONCIATION: CurriculumChapter = {
  "id": "seconde_a_francais_pl_l04_enonciation",
  "subjectId": "francais",
  "gradeLevel": "seconde_a",
  "alsoForGrades": [
    "seconde_c"
  ],
  "order": 10,
  "title": "Perfectionnement de la langue : L'énonciation, les indices et le vocabulaire affectif et évaluatif",
  "summary": "La situation d'énonciation, les indices de personne, de temps et de lieu, le vocabulaire affectif et évaluatif, la subjectivité.",
  "officialVolumeHours": 2,
  "contentVersion": 2,
  "source": "6 PL 2nde ENONCIATION les indices lexicaux.pdf",
  "points": [
    {
      "id": "seconde_a_francais_pl_l04_enonciation_p01",
      "order": 1,
      "title": "La situation d'énonciation",
      "summary": "Qui parle, à qui, où et quand ?",
      "conceptExplanation": "L'énonciation est l'acte de produire un énoncé (une phrase, un texte), à l'oral ou à l'écrit.\n\nLa situation d'énonciation répond à quatre questions :\n- Qui parle ? l'énonciateur (ou locuteur) ;\n- À qui ? le destinataire (ou interlocuteur) ;\n- Où ? le lieu de l'énonciation ;\n- Quand ? le moment de l'énonciation.\n\nOn distingue deux types d'énoncés :\n- l'énoncé ancré dans la situation d'énonciation : on ne peut le comprendre complètement qu'en connaissant la situation (« Je te verrai ici demain » : qui ? où ? quand ?) ; on le trouve dans les dialogues, les lettres, les discours ;\n- l'énoncé coupé de la situation d'énonciation : il se comprend seul, sans repères liés à celui qui parle (« Le 7 août 1960, la Côte d'Ivoire devint indépendante ») ; on le trouve dans les récits historiques, les textes scientifiques.",
      "keyRule": "Situation d'énonciation : qui parle (énonciateur), à qui (destinataire), où, quand. Énoncé ancré (dépend de la situation) / énoncé coupé (se comprend seul).",
      "formulas": [],
      "workedExample": {
        "title": "Analyser une situation",
        "statement": "Sur un billet laissé sur la table : « Je reviens dans une heure. » Que manque-t-il pour comprendre ?",
        "methodSteps": [
          "Qui est « je » ? On ne le sait que si on connaît l'auteur du billet.",
          "« Dans une heure » : à partir de quand ? Il faut savoir quand le billet a été écrit."
        ],
        "conclusion": "C'est un énoncé ancré : il dépend de sa situation d'énonciation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'énonciation",
          "stepTheme": "L'énonciation",
          "stepBadge": "L'énonciation",
          "paragraphText": "L'énonciation est l'acte de produire un énoncé, à l'oral ou à l'écrit.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p01_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce que l'énonciation ?",
            "options": [
              "L'étude de l'orthographe des mots",
              "La liste des personnages d'un récit",
              "L'acte de produire un énoncé",
              "Le résumé d'un texte"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Énoncer, c'est dire ou écrire quelque chose."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'énonciateur",
          "stepTheme": "L'énonciateur",
          "stepBadge": "L'énonciateur",
          "paragraphText": "L'énonciateur, ou locuteur, est celui qui produit l'énoncé : celui qui parle ou écrit.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p01_q2",
            "type": "mcq",
            "prompt": "Comment appelle-t-on celui qui produit un énoncé ?",
            "options": [
              "L'énonciateur",
              "Le référent",
              "Le canal",
              "Le narrataire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On dit aussi le locuteur."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Quatre questions",
          "stepTheme": "Quatre questions",
          "stepBadge": "Quatre questions",
          "paragraphText": "La situation d'énonciation répond à quatre questions : qui parle ? à qui ? où ? quand ?",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p01_q3",
            "type": "mcq",
            "prompt": "Laquelle de ces questions fait partie de la situation d'énonciation ?",
            "options": [
              "Combien de pages compte le texte ?",
              "Quel est le prix du livre ?",
              "Quelle est la couleur de la couverture ?",
              "Où et quand l'énoncé est-il produit ?"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Qui, à qui, où, quand : ce sont les repères de l'énonciation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'énoncé ancré",
          "stepTheme": "L'énoncé ancré",
          "stepBadge": "L'énoncé ancré",
          "paragraphText": "Un énoncé ancré dans la situation d'énonciation ne se comprend complètement que si l'on connaît cette situation.\n« Je te verrai ici demain. »",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p01_q4",
            "type": "mcq",
            "prompt": "Pourquoi « Je te verrai ici demain » est-il un énoncé ancré ?",
            "options": [
              "Parce qu'il raconte un fait historique",
              "Parce qu'il faut connaître la situation pour le comprendre",
              "Parce qu'il contient une date précise",
              "Parce qu'il est écrit au passé simple"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Qui est « je », « te », où est « ici », quand est « demain » ?"
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L'énoncé coupé",
          "stepTheme": "L'énoncé coupé",
          "stepBadge": "L'énoncé coupé",
          "paragraphText": "Un énoncé coupé de la situation d'énonciation se comprend seul, sans connaître celui qui parle.\n« Le 7 août 1960, la Côte d'Ivoire devint indépendante. »",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p01_q5",
            "type": "mcq",
            "prompt": "Dans quel type de texte trouve-t-on surtout des énoncés coupés de la situation d'énonciation ?",
            "options": [
              "Une lettre à un ami",
              "Un récit historique",
              "Un dialogue de théâtre",
              "Un discours en direct"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le récit historique donne des repères objectifs."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un billet",
          "stepTheme": "Un billet",
          "stepBadge": "Un billet",
          "paragraphText": "« Je reviens dans une heure. »\nSans savoir qui a écrit le billet et quand, on ne peut pas comprendre exactement le message.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p01_q6",
            "type": "mcq",
            "prompt": "Que faut-il savoir pour comprendre « Je reviens dans une heure » écrit sur un billet ?",
            "options": [
              "Le nombre de mots du billet",
              "La couleur du papier",
              "Le prix du stylo",
              "Qui l'a écrit et à quel moment"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le message dépend de son auteur et de son moment."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Ancré ou coupé ?",
          "stepTheme": "Ancré ou coupé ?",
          "stepBadge": "Ancré ou coupé ?",
          "paragraphText": "Repère simple :\n• « je, tu, ici, demain » → énoncé ancré ;\n• « il, ce jour-là, en 1960 » → énoncé coupé.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p01_q7",
            "type": "mcq",
            "prompt": "Laquelle de ces phrases est coupée de la situation d'énonciation ?",
            "options": [
              "En 1893, la Côte d'Ivoire devint une colonie française.",
              "Je t'attendrai ici demain matin.",
              "Viens me voir après le cours.",
              "Nous partons maintenant."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Cette phrase se comprend sans connaître celui qui parle."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p01_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'énonciation ?",
          "options": [
            "L'étude de l'orthographe des mots",
            "La liste des personnages d'un récit",
            "L'acte de produire un énoncé",
            "Le résumé d'un texte"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Énoncer, c'est dire ou écrire quelque chose."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p01_q2",
          "type": "mcq",
          "prompt": "Comment appelle-t-on celui qui produit un énoncé ?",
          "options": [
            "L'énonciateur",
            "Le référent",
            "Le canal",
            "Le narrataire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On dit aussi le locuteur."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p01_q3",
          "type": "mcq",
          "prompt": "Laquelle de ces questions fait partie de la situation d'énonciation ?",
          "options": [
            "Combien de pages compte le texte ?",
            "Quel est le prix du livre ?",
            "Quelle est la couleur de la couverture ?",
            "Où et quand l'énoncé est-il produit ?"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Qui, à qui, où, quand : ce sont les repères de l'énonciation."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p01_q4",
          "type": "mcq",
          "prompt": "Pourquoi « Je te verrai ici demain » est-il un énoncé ancré ?",
          "options": [
            "Parce qu'il raconte un fait historique",
            "Parce qu'il faut connaître la situation pour le comprendre",
            "Parce qu'il contient une date précise",
            "Parce qu'il est écrit au passé simple"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Qui est « je », « te », où est « ici », quand est « demain » ?"
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p01_q5",
          "type": "mcq",
          "prompt": "Dans quel type de texte trouve-t-on surtout des énoncés coupés de la situation d'énonciation ?",
          "options": [
            "Une lettre à un ami",
            "Un récit historique",
            "Un dialogue de théâtre",
            "Un discours en direct"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le récit historique donne des repères objectifs."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p01_q6",
          "type": "mcq",
          "prompt": "Que faut-il savoir pour comprendre « Je reviens dans une heure » écrit sur un billet ?",
          "options": [
            "Le nombre de mots du billet",
            "La couleur du papier",
            "Le prix du stylo",
            "Qui l'a écrit et à quel moment"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le message dépend de son auteur et de son moment."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p01_q7",
          "type": "mcq",
          "prompt": "Laquelle de ces phrases est coupée de la situation d'énonciation ?",
          "options": [
            "En 1893, la Côte d'Ivoire devint une colonie française.",
            "Je t'attendrai ici demain matin.",
            "Viens me voir après le cours.",
            "Nous partons maintenant."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Cette phrase se comprend sans connaître celui qui parle."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l04_enonciation_p02",
      "order": 2,
      "title": "Les indices de personne, de temps et de lieu",
      "summary": "Les traces de la situation d'énonciation dans l'énoncé.",
      "conceptExplanation": "Dans un énoncé ancré, la situation d'énonciation laisse des traces appelées indices de l'énonciation.\n\n1. Les indices de personne :\n- présence de l'énonciateur : pronoms personnels de 1re personne (je, me, moi, nous), déterminants et pronoms possessifs (mon, ma, mes, le mien) ;\n- présence du destinataire : pronoms de 2e personne (tu, te, vous), possessifs (ton, votre, vos).\n\n2. Les indices de temps : ils se repèrent par rapport au moment où l'on parle : aujourd'hui, hier, demain, maintenant, il y a une semaine, dans deux jours ; et les temps verbaux du discours (présent, passé composé, futur).\n\n3. Les indices de lieu : ils se repèrent par rapport à l'endroit où l'on parle : ici, là, là-bas, près d'ici, cette région, ce pays.\n\nExemple : « J'ai lu votre premier roman il y a une semaine et j'y ai découvert des points communs avec ma propre vie. Je connais bien cette région que vous décrivez avec tant de justesse. »\nPersonne : j', je, ma (énonciateur) ; votre, vous (destinataire). Temps : il y a une semaine. Lieu : cette région.",
      "keyRule": "Indices de personne : je, nous, mon / tu, vous, votre. Temps : aujourd'hui, hier, il y a une semaine. Lieu : ici, là-bas, cette région.",
      "formulas": [],
      "workedExample": {
        "title": "Classer les indices",
        "statement": "« Hier, je t'ai attendu ici pendant une heure. » Classe les indices.",
        "methodSteps": [
          "Personne : « je » (énonciateur), « t' » (destinataire).",
          "Temps : « hier ».",
          "Lieu : « ici »."
        ],
        "conclusion": "Trois types d'indices : personne, temps, lieu."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les indices de l'énonciation",
          "stepTheme": "Les indices de l'énonciation",
          "stepBadge": "Les indices de l'énonciation",
          "paragraphText": "Les indices de l'énonciation sont les mots qui renvoient à la situation d'énonciation : qui parle, à qui, où, quand.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p02_q1",
            "type": "mcq",
            "prompt": "À quoi renvoient les indices de l'énonciation ?",
            "options": [
              "Aux personnages d'un conte",
              "Aux règles d'orthographe",
              "À la situation d'énonciation",
              "Aux figures de style"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les traces de la situation dans l'énoncé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La présence de l'énonciateur",
          "stepTheme": "La présence de l'énonciateur",
          "stepBadge": "La présence de l'énonciateur",
          "paragraphText": "L'énonciateur se montre par les pronoms de 1re personne (je, me, moi, nous) et les possessifs (mon, ma, mes).",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p02_q2",
            "type": "mcq",
            "prompt": "Dans « J'ai découvert des points communs avec ma propre vie », quel mot marque l'énonciateur ?",
            "options": [
              "« points »",
              "« vie »",
              "« communs »",
              "« ma »"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Ma » (comme « j' ») renvoie à celui qui parle."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La présence du destinataire",
          "stepTheme": "La présence du destinataire",
          "stepBadge": "La présence du destinataire",
          "paragraphText": "Le destinataire apparaît par les pronoms de 2e personne (tu, te, vous) et les possessifs (ton, votre, vos).",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p02_q3",
            "type": "mcq",
            "prompt": "Dans « J'ai lu votre premier roman », quel mot marque le destinataire ?",
            "options": [
              "« J' »",
              "« premier »",
              "« votre »",
              "« roman »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Votre » renvoie à l'auteur du roman, à qui l'on écrit."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les indices de temps",
          "stepTheme": "Les indices de temps",
          "stepBadge": "Les indices de temps",
          "paragraphText": "Les indices de temps se repèrent par rapport au moment où l'on parle : aujourd'hui, hier, demain, maintenant, il y a une semaine.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p02_q4",
            "type": "mcq",
            "prompt": "Lequel de ces mots est un indice de temps de l'énonciation ?",
            "options": [
              "Ici",
              "Hier",
              "Vous",
              "Mon"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Hier se comprend par rapport au jour où l'on parle."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les indices de lieu",
          "stepTheme": "Les indices de lieu",
          "stepBadge": "Les indices de lieu",
          "paragraphText": "Les indices de lieu se repèrent par rapport à l'endroit où l'on parle : ici, là, là-bas, près d'ici, cette région.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p02_q5",
            "type": "mcq",
            "prompt": "Dans « Je connais bien cette région », quel groupe est un indice de lieu ?",
            "options": [
              "« cette région »",
              "« Je »",
              "« connais »",
              "« bien »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Cette région » désigne un lieu par rapport à l'énonciateur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les temps du discours",
          "stepTheme": "Les temps du discours",
          "stepBadge": "Les temps du discours",
          "paragraphText": "Dans un énoncé ancré, on emploie surtout le présent, le passé composé et le futur, qui se repèrent par rapport au moment où l'on parle.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p02_q6",
            "type": "mcq",
            "prompt": "Quel temps est typique d'un énoncé ancré dans la situation d'énonciation ?",
            "options": [
              "Le passé composé",
              "Le passé simple",
              "Le passé antérieur",
              "L'imparfait du subjonctif"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le passé simple est plutôt le temps du récit coupé."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Classer les indices",
          "stepTheme": "Classer les indices",
          "stepBadge": "Classer les indices",
          "paragraphText": "Pour relever les indices, fais trois colonnes : personne (je, vous, ma, votre), temps (il y a une semaine), lieu (cette région).",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p02_q7",
            "type": "mcq",
            "prompt": "« Hier, je t'ai attendu ici. » À quelle catégorie appartient « ici » ?",
            "options": [
              "Indice de temps",
              "Indice de lieu",
              "Indice de personne",
              "Connecteur logique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Ici » désigne l'endroit où l'on parle."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p02_q1",
          "type": "mcq",
          "prompt": "À quoi renvoient les indices de l'énonciation ?",
          "options": [
            "Aux personnages d'un conte",
            "Aux règles d'orthographe",
            "À la situation d'énonciation",
            "Aux figures de style"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les traces de la situation dans l'énoncé."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p02_q2",
          "type": "mcq",
          "prompt": "Dans « J'ai découvert des points communs avec ma propre vie », quel mot marque l'énonciateur ?",
          "options": [
            "« points »",
            "« vie »",
            "« communs »",
            "« ma »"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Ma » (comme « j' ») renvoie à celui qui parle."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p02_q3",
          "type": "mcq",
          "prompt": "Dans « J'ai lu votre premier roman », quel mot marque le destinataire ?",
          "options": [
            "« J' »",
            "« premier »",
            "« votre »",
            "« roman »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Votre » renvoie à l'auteur du roman, à qui l'on écrit."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p02_q4",
          "type": "mcq",
          "prompt": "Lequel de ces mots est un indice de temps de l'énonciation ?",
          "options": [
            "Ici",
            "Hier",
            "Vous",
            "Mon"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Hier se comprend par rapport au jour où l'on parle."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p02_q5",
          "type": "mcq",
          "prompt": "Dans « Je connais bien cette région », quel groupe est un indice de lieu ?",
          "options": [
            "« cette région »",
            "« Je »",
            "« connais »",
            "« bien »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Cette région » désigne un lieu par rapport à l'énonciateur."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p02_q6",
          "type": "mcq",
          "prompt": "Quel temps est typique d'un énoncé ancré dans la situation d'énonciation ?",
          "options": [
            "Le passé composé",
            "Le passé simple",
            "Le passé antérieur",
            "L'imparfait du subjonctif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le passé simple est plutôt le temps du récit coupé."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p02_q7",
          "type": "mcq",
          "prompt": "« Hier, je t'ai attendu ici. » À quelle catégorie appartient « ici » ?",
          "options": [
            "Indice de temps",
            "Indice de lieu",
            "Indice de personne",
            "Connecteur logique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Ici » désigne l'endroit où l'on parle."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l04_enonciation_p03",
      "order": 3,
      "title": "Le vocabulaire affectif",
      "summary": "Les mots qui expriment et suscitent l'émotion.",
      "conceptExplanation": "Le vocabulaire affectif est l'ensemble des mots qu'un locuteur emploie pour exprimer sa sensibilité, ses émotions (pitié, sympathie, colère, indignation, admiration) et pour susciter les mêmes émotions chez le lecteur.\n\nIl est formé de noms, d'adjectifs, d'adverbes et de verbes qui :\n- attirent l'attention sur la fragilité, l'impuissance ou l'innocence, pour susciter la pitié ou la compassion : « un tout petit enfant », « l'air fragile », « sa candeur », « le pauvre homme » ;\n- suscitent la sympathie ou l'admiration : « un beau regard », « d'une manière intelligente », « agréablement surpris », « admirer » ;\n- expriment la colère ou l'indignation : « scandaleux », « honteux », « révoltant ».\n\nOn y ajoute les interjections (hélas !, oh !), les phrases exclamatives et les diminutifs affectueux (« petit », « mon cher »).",
      "keyRule": "Vocabulaire affectif : mots qui expriment une émotion et cherchent à la faire partager (pitié : « tout petit enfant » ; admiration : « beau regard » ; indignation : « scandaleux »).",
      "formulas": [],
      "workedExample": {
        "title": "Repérer l'émotion",
        "statement": "« Le pauvre petit, tout tremblant, tendait sa main frêle. » Quelle émotion l'auteur veut-il susciter ?",
        "methodSteps": [
          "« pauvre petit », « tout tremblant », « main frêle » insistent sur la fragilité.",
          "Ces mots attirent la compassion du lecteur."
        ],
        "conclusion": "L'auteur veut susciter la pitié."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le vocabulaire affectif",
          "stepTheme": "Le vocabulaire affectif",
          "stepBadge": "Le vocabulaire affectif",
          "paragraphText": "Le vocabulaire affectif exprime la sensibilité, les émotions du locuteur et cherche à les faire partager au lecteur.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p03_q1",
            "type": "mcq",
            "prompt": "Que cherche à faire le vocabulaire affectif ?",
            "options": [
              "Donner une information chiffrée",
              "Expliquer le sens d'un mot",
              "Exprimer et faire partager une émotion",
              "Situer l'action dans le temps"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il touche la sensibilité du lecteur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Susciter la pitié",
          "stepTheme": "Susciter la pitié",
          "stepBadge": "Susciter la pitié",
          "paragraphText": "Des mots qui insistent sur la fragilité, l'impuissance ou l'innocence suscitent la pitié : « un tout petit enfant », « l'air fragile », « sa candeur ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p03_q2",
            "type": "mcq",
            "prompt": "Quel groupe de mots suscite la pitié ?",
            "options": [
              "« un homme grand et robuste »",
              "« une décision officielle »",
              "« un immeuble de dix étages »",
              "« un tout petit enfant à l'air fragile »"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La fragilité de l'enfant éveille la compassion."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Susciter l'admiration",
          "stepTheme": "Susciter l'admiration",
          "stepBadge": "Susciter l'admiration",
          "paragraphText": "D'autres mots suscitent la sympathie ou l'admiration : « un beau regard », « d'une manière intelligente », « agréablement surprenant », « admirer ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p03_q3",
            "type": "mcq",
            "prompt": "Quel groupe de mots suscite l'admiration ?",
            "options": [
              "« d'un air misérable »",
              "« d'une façon honteuse »",
              "« d'une manière intelligente »",
              "« d'un geste maladroit »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'intelligence est valorisée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Exprimer l'indignation",
          "stepTheme": "Exprimer l'indignation",
          "stepBadge": "Exprimer l'indignation",
          "paragraphText": "L'indignation s'exprime par des mots comme « scandaleux », « honteux », « révoltant », « inadmissible ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p03_q4",
            "type": "mcq",
            "prompt": "Quelle émotion exprime « C'est révoltant ! » ?",
            "options": [
              "La joie",
              "La pitié",
              "L'admiration",
              "L'indignation"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Révoltant » marque une colère morale."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Interjections et exclamations",
          "stepTheme": "Interjections et exclamations",
          "stepBadge": "Interjections et exclamations",
          "paragraphText": "Les interjections (hélas !, oh !) et les phrases exclamatives renforcent le vocabulaire affectif.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p03_q5",
            "type": "mcq",
            "prompt": "Quel élément renforce l'expression d'une émotion ?",
            "options": [
              "Une interjection comme « hélas ! »",
              "Une date comme « en 1960 »",
              "Un chiffre comme « 25 % »",
              "Un nom de lieu comme « Bouaké »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'interjection traduit directement le sentiment."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Des natures variées",
          "stepTheme": "Des natures variées",
          "stepBadge": "Des natures variées",
          "paragraphText": "Le vocabulaire affectif peut être formé de noms (« candeur »), d'adjectifs (« fragile »), d'adverbes (« tendrement ») ou de verbes (« admirer »).",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p03_q6",
            "type": "mcq",
            "prompt": "Dans « elle le regardait tendrement », quel mot appartient au vocabulaire affectif ?",
            "options": [
              "« elle »",
              "« tendrement »",
              "« le »",
              "« regardait »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Tendrement » exprime l'affection."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Affectif ou neutre ?",
          "stepTheme": "Affectif ou neutre ?",
          "stepBadge": "Affectif ou neutre ?",
          "paragraphText": "Un mot neutre décrit sans émotion : « un enfant de cinq ans ».\nUn mot affectif ajoute une émotion : « un pauvre petit bout d'enfant ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p03_q7",
            "type": "mcq",
            "prompt": "Laquelle de ces expressions est neutre, sans valeur affective ?",
            "options": [
              "« un pauvre petit bout d'enfant »",
              "« un enfant de cinq ans »",
              "« un adorable bambin »",
              "« un malheureux orphelin »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'âge est une simple information."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p03_q1",
          "type": "mcq",
          "prompt": "Que cherche à faire le vocabulaire affectif ?",
          "options": [
            "Donner une information chiffrée",
            "Expliquer le sens d'un mot",
            "Exprimer et faire partager une émotion",
            "Situer l'action dans le temps"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il touche la sensibilité du lecteur."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p03_q2",
          "type": "mcq",
          "prompt": "Quel groupe de mots suscite la pitié ?",
          "options": [
            "« un homme grand et robuste »",
            "« une décision officielle »",
            "« un immeuble de dix étages »",
            "« un tout petit enfant à l'air fragile »"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La fragilité de l'enfant éveille la compassion."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p03_q3",
          "type": "mcq",
          "prompt": "Quel groupe de mots suscite l'admiration ?",
          "options": [
            "« d'un air misérable »",
            "« d'une façon honteuse »",
            "« d'une manière intelligente »",
            "« d'un geste maladroit »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'intelligence est valorisée."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p03_q4",
          "type": "mcq",
          "prompt": "Quelle émotion exprime « C'est révoltant ! » ?",
          "options": [
            "La joie",
            "La pitié",
            "L'admiration",
            "L'indignation"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Révoltant » marque une colère morale."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p03_q5",
          "type": "mcq",
          "prompt": "Quel élément renforce l'expression d'une émotion ?",
          "options": [
            "Une interjection comme « hélas ! »",
            "Une date comme « en 1960 »",
            "Un chiffre comme « 25 % »",
            "Un nom de lieu comme « Bouaké »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'interjection traduit directement le sentiment."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p03_q6",
          "type": "mcq",
          "prompt": "Dans « elle le regardait tendrement », quel mot appartient au vocabulaire affectif ?",
          "options": [
            "« elle »",
            "« tendrement »",
            "« le »",
            "« regardait »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Tendrement » exprime l'affection."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p03_q7",
          "type": "mcq",
          "prompt": "Laquelle de ces expressions est neutre, sans valeur affective ?",
          "options": [
            "« un pauvre petit bout d'enfant »",
            "« un enfant de cinq ans »",
            "« un adorable bambin »",
            "« un malheureux orphelin »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'âge est une simple information."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l04_enonciation_p04",
      "order": 4,
      "title": "Le vocabulaire évaluatif",
      "summary": "Mélioratif et péjoratif dans toutes les classes de mots.",
      "conceptExplanation": "Le vocabulaire évaluatif sert à porter un jugement de valeur (bon ou mauvais) sur ce dont on parle.\n\nOn distingue :\n- le lexique valorisant, ou mélioratif ;\n- le lexique dévalorisant, ou péjoratif (on dit aussi dépréciatif).\n\nIl se trouve dans toutes les classes de mots :\n- verbes : aimer, admirer, préférer (mélioratifs) / détester, déplaire, mépriser (péjoratifs) ;\n- adverbes : bien, parfaitement, éloquemment (mélioratifs) / mal, maladroitement (péjoratifs) ;\n- noms : une demeure / une cabane ; un formateur / un endoctrineur ; un homme sincère / un menteur ;\n- adjectifs : gratifiant, rassurant, bon, beau (mélioratifs) / mauvais, abêtissant, laid (péjoratifs).\n\nUn même objet peut être désigné de façon méliorative ou péjorative : « un logement » (neutre), « une demeure » (mélioratif), « un taudis » (péjoratif). Le choix des mots révèle donc l'opinion de l'énonciateur : c'est un indice de sa subjectivité.",
      "keyRule": "Vocabulaire évaluatif : jugement de valeur. Mélioratif (valorise) / péjoratif ou dépréciatif (dévalorise), dans les verbes, adverbes, noms et adjectifs.",
      "formulas": [],
      "workedExample": {
        "title": "Trois façons de nommer",
        "statement": "Classe : « un logement », « une demeure », « un taudis ».",
        "methodSteps": [
          "« Logement » : neutre.",
          "« Demeure » : valorisant.",
          "« Taudis » : dévalorisant."
        ],
        "conclusion": "Neutre, mélioratif, péjoratif : le choix du mot révèle un jugement."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le vocabulaire évaluatif",
          "stepTheme": "Le vocabulaire évaluatif",
          "stepBadge": "Le vocabulaire évaluatif",
          "paragraphText": "Le vocabulaire évaluatif sert à porter un jugement de valeur, bon ou mauvais, sur ce dont on parle.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p04_q1",
            "type": "mcq",
            "prompt": "À quoi sert le vocabulaire évaluatif ?",
            "options": [
              "À porter un jugement de valeur",
              "À situer l'action dans l'espace",
              "À relier deux propositions",
              "À conjuguer le verbe principal"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Évaluer, c'est juger bon ou mauvais."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Dépréciatif",
          "stepTheme": "Dépréciatif",
          "stepBadge": "Dépréciatif",
          "paragraphText": "Le lexique dévalorisant s'appelle aussi péjoratif ou dépréciatif.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p04_q2",
            "type": "mcq",
            "prompt": "Quel est un synonyme de « péjoratif » ?",
            "options": [
              "Mélioratif",
              "Valorisant",
              "Affectueux",
              "Dépréciatif"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Dépréciatif = qui diminue la valeur."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les verbes",
          "stepTheme": "Les verbes",
          "stepBadge": "Les verbes",
          "paragraphText": "Verbes évaluatifs : aimer, admirer, préférer (mélioratifs) ; détester, déplaire, mépriser (péjoratifs).",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p04_q3",
            "type": "mcq",
            "prompt": "Lequel de ces verbes est péjoratif ?",
            "options": [
              "Admirer",
              "Préférer",
              "Mépriser",
              "Aimer"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Mépriser exprime un jugement négatif."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les adverbes",
          "stepTheme": "Les adverbes",
          "stepBadge": "Les adverbes",
          "paragraphText": "Adverbes évaluatifs : bien, parfaitement, éloquemment (mélioratifs) ; mal, maladroitement (péjoratifs).",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p04_q4",
            "type": "mcq",
            "prompt": "Dans « il parle éloquemment », quelle valeur a l'adverbe ?",
            "options": [
              "Péjorative",
              "Neutre",
              "Méliorative",
              "Temporelle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Parler avec éloquence est un compliment."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les noms",
          "stepTheme": "Les noms",
          "stepBadge": "Les noms",
          "paragraphText": "Deux noms peuvent désigner la même réalité avec un jugement différent :\n• « un formateur » (valorisant) / « un endoctrineur » (dévalorisant) ;\n• « une demeure » / « une cabane ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p04_q5",
            "type": "mcq",
            "prompt": "Quel nom est dévalorisant par rapport à « formateur » ?",
            "options": [
              "Endoctrineur",
              "Enseignant",
              "Éducateur",
              "Professeur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Endoctriner, c'est imposer des idées sans esprit critique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Neutre, mélioratif, péjoratif",
          "stepTheme": "Neutre, mélioratif, péjoratif",
          "stepBadge": "Neutre, mélioratif, péjoratif",
          "paragraphText": "Une même réalité peut être nommée de trois façons :\n• neutre : « un logement » ;\n• méliorative : « une demeure » ;\n• péjorative : « un taudis ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p04_q6",
            "type": "mcq",
            "prompt": "Comment qualifier le mot « taudis » ?",
            "options": [
              "Mélioratif",
              "Neutre",
              "Affectueux",
              "Péjoratif"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Un taudis est un logement misérable."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "La subjectivité",
          "stepTheme": "La subjectivité",
          "stepBadge": "La subjectivité",
          "paragraphText": "Le choix des mots évaluatifs révèle l'opinion de l'énonciateur : c'est un indice de sa subjectivité.\nUn texte objectif en contient très peu.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p04_q7",
            "type": "mcq",
            "prompt": "Que révèle la présence de nombreux mots évaluatifs dans un texte ?",
            "options": [
              "L'objectivité totale du texte",
              "La subjectivité de l'énonciateur",
              "L'absence d'énonciateur",
              "Un texte scientifique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Juger, c'est donner son point de vue."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p04_q1",
          "type": "mcq",
          "prompt": "À quoi sert le vocabulaire évaluatif ?",
          "options": [
            "À porter un jugement de valeur",
            "À situer l'action dans l'espace",
            "À relier deux propositions",
            "À conjuguer le verbe principal"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Évaluer, c'est juger bon ou mauvais."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p04_q2",
          "type": "mcq",
          "prompt": "Quel est un synonyme de « péjoratif » ?",
          "options": [
            "Mélioratif",
            "Valorisant",
            "Affectueux",
            "Dépréciatif"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Dépréciatif = qui diminue la valeur."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p04_q3",
          "type": "mcq",
          "prompt": "Lequel de ces verbes est péjoratif ?",
          "options": [
            "Admirer",
            "Préférer",
            "Mépriser",
            "Aimer"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Mépriser exprime un jugement négatif."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p04_q4",
          "type": "mcq",
          "prompt": "Dans « il parle éloquemment », quelle valeur a l'adverbe ?",
          "options": [
            "Péjorative",
            "Neutre",
            "Méliorative",
            "Temporelle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Parler avec éloquence est un compliment."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p04_q5",
          "type": "mcq",
          "prompt": "Quel nom est dévalorisant par rapport à « formateur » ?",
          "options": [
            "Endoctrineur",
            "Enseignant",
            "Éducateur",
            "Professeur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Endoctriner, c'est imposer des idées sans esprit critique."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p04_q6",
          "type": "mcq",
          "prompt": "Comment qualifier le mot « taudis » ?",
          "options": [
            "Mélioratif",
            "Neutre",
            "Affectueux",
            "Péjoratif"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Un taudis est un logement misérable."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p04_q7",
          "type": "mcq",
          "prompt": "Que révèle la présence de nombreux mots évaluatifs dans un texte ?",
          "options": [
            "L'objectivité totale du texte",
            "La subjectivité de l'énonciateur",
            "L'absence d'énonciateur",
            "Un texte scientifique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Juger, c'est donner son point de vue."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l04_enonciation_p05",
      "order": 5,
      "title": "Les marques de la subjectivité",
      "summary": "Modalisateurs et engagement de l'énonciateur.",
      "conceptExplanation": "Un énoncé est subjectif quand l'énonciateur y laisse paraître ses sentiments, ses jugements ou son degré de certitude. Il est objectif quand il présente les faits sans prendre parti.\n\nMarques de la subjectivité :\n- les indices de personne (je, nous) ;\n- le vocabulaire affectif et évaluatif ;\n- les modalisateurs, qui indiquent le degré de certitude : adverbes (franchement, sans doute, peut-être, sûrement), verbes (je crois, je doute, je suppose), expressions (je n'en suis pas sûr, il semble que), conditionnel ;\n- les phrases exclamatives et interrogatives (« Mais je m'interroge : est-il sain d'esprit ? »).\n\nExemple : « Franchement, Max, je crois qu'à nombre d'égards il est bon pour le pays, mais je n'en suis pas sûr. »\nMarques : « franchement » (sincérité), « je crois » (opinion), « bon » (évaluatif), « je n'en suis pas sûr » (doute).",
      "keyRule": "Subjectivité : je, vocabulaire affectif et évaluatif, modalisateurs (franchement, je crois, je doute), exclamations. Objectivité : faits sans jugement.",
      "formulas": [],
      "workedExample": {
        "title": "Repérer le doute",
        "statement": "« Je crois qu'il a raison, mais je n'en suis pas sûr. » Quel est le degré de certitude du locuteur ?",
        "methodSteps": [
          "« Je crois » : opinion, pas certitude.",
          "« je n'en suis pas sûr » : doute exprimé."
        ],
        "conclusion": "Le locuteur exprime une opinion hésitante."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Subjectif ou objectif",
          "stepTheme": "Subjectif ou objectif",
          "stepBadge": "Subjectif ou objectif",
          "paragraphText": "• Un énoncé subjectif montre les sentiments, les jugements de l'énonciateur.\n• Un énoncé objectif présente les faits sans prendre parti.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p05_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'un énoncé objectif ?",
            "options": [
              "Un énoncé plein d'émotions et de jugements",
              "Un énoncé qui présente les faits sans prendre parti",
              "Un énoncé écrit à la première personne",
              "Un énoncé qui contient une exclamation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'objectivité exclut le jugement personnel."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Franchement",
          "stepTheme": "Franchement",
          "stepBadge": "Franchement",
          "paragraphText": "« Franchement, Max, je crois que... »\nL'adverbe « franchement » marque la sincérité de l'énonciateur : c'est un modalisateur.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p05_q2",
            "type": "mcq",
            "prompt": "Que marque l'adverbe « franchement » en début de phrase ?",
            "options": [
              "Le lieu de l'action",
              "Le moment de l'action",
              "La conséquence d'un fait",
              "La sincérité de l'énonciateur"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'énonciateur s'engage dans ce qu'il dit."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le doute",
          "stepTheme": "Le doute",
          "stepBadge": "Le doute",
          "paragraphText": "« Je doute que... », « je n'en suis pas sûr », « peut-être » expriment le doute de l'énonciateur.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p05_q3",
            "type": "mcq",
            "prompt": "Quelle expression marque le doute ?",
            "options": [
              "« je n'en suis pas sûr »",
              "« j'en suis certain »",
              "« il est évident que »",
              "« sans aucun doute »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'énonciateur reconnaît son incertitude."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La question de l'énonciateur",
          "stepTheme": "La question de l'énonciateur",
          "stepBadge": "La question de l'énonciateur",
          "paragraphText": "Une question que l'énonciateur se pose à lui-même montre ses hésitations :\n« Mais je m'interroge : est-il complètement sain d'esprit ? »",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p05_q4",
            "type": "mcq",
            "prompt": "Que révèle « Mais je m'interroge : est-il sain d'esprit ? » ?",
            "options": [
              "Une information objective",
              "Un indice de lieu",
              "Les doutes de l'énonciateur",
              "Un ordre au destinataire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'énonciateur exprime son inquiétude."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Relever les marques",
          "stepTheme": "Relever les marques",
          "stepBadge": "Relever les marques",
          "paragraphText": "Pour relever les marques de subjectivité, cherche :\n1. je, nous ;\n2. les mots affectifs et évaluatifs ;\n3. les modalisateurs ;\n4. les exclamations et les questions.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p05_q5",
            "type": "mcq",
            "prompt": "« Hélas ! je crois que ce projet est désastreux. » Lequel de ces mots est un mot évaluatif péjoratif ?",
            "options": [
              "« Hélas »",
              "« je crois »",
              "« projet »",
              "« désastreux »"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Désastreux » porte un jugement négatif ; « hélas » est une interjection, « je crois » un modalisateur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un texte objectif",
          "stepTheme": "Un texte objectif",
          "stepBadge": "Un texte objectif",
          "paragraphText": "« Le fleuve Comoé mesure environ 1 160 km. »\nAucun jugement, aucun « je » : l'énoncé est objectif.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p05_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces phrases est objective ?",
            "options": [
              "Le Comoé est un fleuve magnifique !",
              "Je crois que le Comoé est le plus beau fleuve.",
              "Le Comoé mesure environ 1 160 km.",
              "Hélas, le Comoé est trop pollué !"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une mesure n'exprime aucun jugement."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Un modalisateur n'est pas un fait",
          "stepTheme": "Un modalisateur n'est pas un fait",
          "stepBadge": "Un modalisateur n'est pas un fait",
          "paragraphText": "« Sûrement », « peut-être », « je crois » ne donnent pas d'information sur le monde : ils indiquent l'attitude de l'énonciateur face à ce qu'il dit.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p05_q7",
            "type": "mcq",
            "prompt": "Dans « Il viendra sûrement », que nous apprend « sûrement » ?",
            "options": [
              "L'heure exacte de l'arrivée",
              "Le degré de certitude de l'énonciateur",
              "Le lieu de l'arrivée",
              "Le moyen de transport utilisé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'énonciateur qui se montre confiant."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p05_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un énoncé objectif ?",
          "options": [
            "Un énoncé plein d'émotions et de jugements",
            "Un énoncé qui présente les faits sans prendre parti",
            "Un énoncé écrit à la première personne",
            "Un énoncé qui contient une exclamation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'objectivité exclut le jugement personnel."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p05_q2",
          "type": "mcq",
          "prompt": "Que marque l'adverbe « franchement » en début de phrase ?",
          "options": [
            "Le lieu de l'action",
            "Le moment de l'action",
            "La conséquence d'un fait",
            "La sincérité de l'énonciateur"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'énonciateur s'engage dans ce qu'il dit."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p05_q3",
          "type": "mcq",
          "prompt": "Quelle expression marque le doute ?",
          "options": [
            "« je n'en suis pas sûr »",
            "« j'en suis certain »",
            "« il est évident que »",
            "« sans aucun doute »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'énonciateur reconnaît son incertitude."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p05_q4",
          "type": "mcq",
          "prompt": "Que révèle « Mais je m'interroge : est-il sain d'esprit ? » ?",
          "options": [
            "Une information objective",
            "Un indice de lieu",
            "Les doutes de l'énonciateur",
            "Un ordre au destinataire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'énonciateur exprime son inquiétude."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p05_q5",
          "type": "mcq",
          "prompt": "« Hélas ! je crois que ce projet est désastreux. » Lequel de ces mots est un mot évaluatif péjoratif ?",
          "options": [
            "« Hélas »",
            "« je crois »",
            "« projet »",
            "« désastreux »"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Désastreux » porte un jugement négatif ; « hélas » est une interjection, « je crois » un modalisateur."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p05_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces phrases est objective ?",
          "options": [
            "Le Comoé est un fleuve magnifique !",
            "Je crois que le Comoé est le plus beau fleuve.",
            "Le Comoé mesure environ 1 160 km.",
            "Hélas, le Comoé est trop pollué !"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une mesure n'exprime aucun jugement."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p05_q7",
          "type": "mcq",
          "prompt": "Dans « Il viendra sûrement », que nous apprend « sûrement » ?",
          "options": [
            "L'heure exacte de l'arrivée",
            "Le degré de certitude de l'énonciateur",
            "Le lieu de l'arrivée",
            "Le moyen de transport utilisé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'énonciateur qui se montre confiant."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l04_enonciation_p06",
      "order": 6,
      "title": "Utiliser l'énonciation pour convaincre",
      "summary": "Mobiliser les ressources de l'énonciation dans un texte.",
      "conceptExplanation": "Les ressources de l'énonciation permettent de construire un message efficace pour convaincre ou persuader :\n\n- interpeller le destinataire : apostrophe (« Chers parents, chers amis »), pronom « vous », impératif (« évitez les embrassades ») ;\n- s'impliquer : « je pense », « je vous exhorte », « laissez-moi vous dire » ;\n- associer le destinataire : « nous », « ensemble » ;\n- employer un vocabulaire évaluatif et affectif fort : « un virus très coriace, dangereux et mortel » ;\n- utiliser des modalisateurs de certitude : « il est impérieux de », « sans aucun doute ».\n\nExemple (message sur les gestes barrières) : « Chers parents, chers amis, laissez-moi vous dire que ce virus est très dangereux. Il n'épargne personne. Évitez les embrassades et ne vous serrez pas la main. Je pense qu'il est impérieux de changer de comportement pour qu'ensemble, nous nous débarrassions de ce virus. »",
      "keyRule": "Pour convaincre : interpeller (apostrophe, vous, impératif), s'impliquer (je pense), associer (nous, ensemble), vocabulaire fort, modalisateurs de certitude.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser un appel",
        "statement": "« Chers amis, protégez-vous : ensemble, nous vaincrons cette maladie ! » Relève les procédés.",
        "methodSteps": [
          "« Chers amis » : apostrophe affectueuse.",
          "« protégez-vous » : impératif.",
          "« ensemble, nous » : le destinataire est associé à l'énonciateur."
        ],
        "conclusion": "L'énonciateur interpelle, ordonne et rassemble pour convaincre."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Interpeller",
          "stepTheme": "Interpeller",
          "stepBadge": "Interpeller",
          "paragraphText": "Pour interpeller le destinataire, on utilise l'apostrophe (« Chers parents, chers amis »), le pronom « vous » et l'impératif.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p06_q1",
            "type": "mcq",
            "prompt": "Quel procédé trouve-t-on dans « Chers parents, chers amis » ?",
            "options": [
              "Une apostrophe",
              "Un indice de temps",
              "Une comparaison",
              "Un connecteur de cause"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'énonciateur s'adresse directement à ses destinataires."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L'impératif",
          "stepTheme": "L'impératif",
          "stepBadge": "L'impératif",
          "paragraphText": "L'impératif pousse le destinataire à agir : « Évitez les embrassades », « Protégez-vous ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p06_q2",
            "type": "mcq",
            "prompt": "Dans « Évitez les embrassades », quel mode est employé ?",
            "options": [
              "L'impératif",
              "Le subjonctif",
              "Le conditionnel",
              "L'infinitif"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Évitez » donne un conseil, un ordre."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "S'impliquer",
          "stepTheme": "S'impliquer",
          "stepBadge": "S'impliquer",
          "paragraphText": "L'énonciateur s'implique personnellement : « je pense », « je vous exhorte », « laissez-moi vous dire ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p06_q3",
            "type": "mcq",
            "prompt": "Que montre « je vous exhorte à informer vos proches » ?",
            "options": [
              "Un fait historique daté",
              "L'engagement personnel de l'énonciateur",
              "Une description de lieu",
              "Une hésitation de l'énonciateur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Exhorter = encourager vivement."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le « nous » de rassemblement",
          "stepTheme": "Le « nous » de rassemblement",
          "stepBadge": "Le « nous » de rassemblement",
          "paragraphText": "Le pronom « nous » et le mot « ensemble » associent le destinataire à l'énonciateur : tout le monde est concerné.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p06_q4",
            "type": "mcq",
            "prompt": "Quel est l'effet de « ensemble, nous nous débarrasserons de ce virus » ?",
            "options": [
              "Exclure le destinataire du message",
              "Exprimer le doute de l'énonciateur",
              "Associer le destinataire au combat",
              "Situer précisément l'action dans le passé"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le « nous » crée un sentiment d'union."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un vocabulaire fort",
          "stepTheme": "Un vocabulaire fort",
          "stepBadge": "Un vocabulaire fort",
          "paragraphText": "« Un virus très coriace, dangereux et mortel » : des adjectifs péjoratifs accumulés pour frapper le destinataire.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p06_q5",
            "type": "mcq",
            "prompt": "Quel est le rôle des adjectifs « coriace, dangereux et mortel » ?",
            "options": [
              "Décrire l'aspect physique du virus",
              "Rassurer le destinataire",
              "Indiquer le lieu de la maladie",
              "Souligner la gravité du danger"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'accumulation d'adjectifs négatifs alarme le lecteur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La certitude",
          "stepTheme": "La certitude",
          "stepBadge": "La certitude",
          "paragraphText": "Des expressions comme « il est impérieux de », « sans aucun doute » donnent de la force au message.",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p06_q6",
            "type": "mcq",
            "prompt": "Quel modalisateur exprime une forte certitude ?",
            "options": [
              "« peut-être »",
              "« il se pourrait que »",
              "« il est impérieux de »",
              "« je me demande si »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Impérieux = absolument nécessaire."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Accorder les adjectifs",
          "stepTheme": "Accorder les adjectifs",
          "stepBadge": "Accorder les adjectifs",
          "paragraphText": "Attention à l'accord : « un virus très coriace, dangereux et mortel » (masculin), et non « dangereuse ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l04_enonciation_p06_q7",
            "type": "mcq",
            "prompt": "Quelle phrase est correctement accordée ?",
            "options": [
              "C'est un virus coriace, dangereuse et mortel.",
              "C'est un virus coriace, dangereux et mortelle.",
              "C'est un virus coriaces, dangereux et mortel.",
              "C'est un virus coriace, dangereux et mortel."
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Virus » est masculin singulier."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p06_q1",
          "type": "mcq",
          "prompt": "Quel procédé trouve-t-on dans « Chers parents, chers amis » ?",
          "options": [
            "Une apostrophe",
            "Un indice de temps",
            "Une comparaison",
            "Un connecteur de cause"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'énonciateur s'adresse directement à ses destinataires."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p06_q2",
          "type": "mcq",
          "prompt": "Dans « Évitez les embrassades », quel mode est employé ?",
          "options": [
            "L'impératif",
            "Le subjonctif",
            "Le conditionnel",
            "L'infinitif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Évitez » donne un conseil, un ordre."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p06_q3",
          "type": "mcq",
          "prompt": "Que montre « je vous exhorte à informer vos proches » ?",
          "options": [
            "Un fait historique daté",
            "L'engagement personnel de l'énonciateur",
            "Une description de lieu",
            "Une hésitation de l'énonciateur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Exhorter = encourager vivement."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p06_q4",
          "type": "mcq",
          "prompt": "Quel est l'effet de « ensemble, nous nous débarrasserons de ce virus » ?",
          "options": [
            "Exclure le destinataire du message",
            "Exprimer le doute de l'énonciateur",
            "Associer le destinataire au combat",
            "Situer précisément l'action dans le passé"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le « nous » crée un sentiment d'union."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p06_q5",
          "type": "mcq",
          "prompt": "Quel est le rôle des adjectifs « coriace, dangereux et mortel » ?",
          "options": [
            "Décrire l'aspect physique du virus",
            "Rassurer le destinataire",
            "Indiquer le lieu de la maladie",
            "Souligner la gravité du danger"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'accumulation d'adjectifs négatifs alarme le lecteur."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p06_q6",
          "type": "mcq",
          "prompt": "Quel modalisateur exprime une forte certitude ?",
          "options": [
            "« peut-être »",
            "« il se pourrait que »",
            "« il est impérieux de »",
            "« je me demande si »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Impérieux = absolument nécessaire."
        },
        {
          "id": "seconde_a_francais_pl_l04_enonciation_p06_q7",
          "type": "mcq",
          "prompt": "Quelle phrase est correctement accordée ?",
          "options": [
            "C'est un virus coriace, dangereuse et mortel.",
            "C'est un virus coriace, dangereux et mortelle.",
            "C'est un virus coriaces, dangereux et mortel.",
            "C'est un virus coriace, dangereux et mortel."
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Virus » est masculin singulier."
        }
      ]
    }
  ]
};
