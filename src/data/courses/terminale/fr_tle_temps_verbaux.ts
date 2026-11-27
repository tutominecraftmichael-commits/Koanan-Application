import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Les temps verbaux dans le système du récit et dans celui du discours » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=507
export const FR_TLE_PL_L07_TEMPS_VERBAUX: CurriculumChapter = {
  "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux",
  "subjectId": "francais",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  "order": 7,
  "title": "Leçon 7 : Les valeurs des temps verbaux",
  "summary": "Séduits par le talent de conteurs invités au Lycée Moderne de Port-Bouët, les élèves de Terminale s'organisent pour identifier les temps verbaux dans le système du récit et dans celui du discours, puis analyser leurs valeurs d'emploi.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=507",
  "points": [
    {
      "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p01",
      "order": 1,
      "title": "Le système du récit : présent de narration, passé simple et imparfait",
      "summary": "Distinguer le système du récit et les valeurs du présent de narration, du passé simple et de l'imparfait.",
      "conceptExplanation": "Le système du récit concerne les textes d'historiens, les romans, les contes, les épopées, les biographies et les fables. Le texte 1 du résumé, extrait de La Princesse de Clèves de Madame de Lafayette (1678), en est un exemple : les préparatifs du mariage, l'arrivée du duc d'Albe et le souper de la reine dauphine y sont racontés au passé.\nLe présent de l'indicatif, dans le système du récit, est appelé présent de narration : il sert à rapporter les faits passés de façon à les rendre plus vivants. Le passé simple présente l'action comme achevée, comme ponctuelle ; il marque une action brève dans le passé qui ne dure pas. L'imparfait présente une action qui dure dans le passé et a une valeur descriptive et itérative.\nDans le texte 1, l'imparfait décrit le décor et les occupations (« Mme de Clèves, qui était occupée à s'habiller »), tandis que le passé simple fait avancer l'action (« elle alla au Louvre plus tard que de coutume »).",
      "keyRule": "Récit : présent de narration pour rendre vivant, passé simple pour l'action brève et achevée, imparfait pour la durée, la description et la répétition.",
      "formulas": [],
      "workedExample": {
        "title": "Imparfait et passé simple chez Madame de Lafayette",
        "statement": "Dans le texte 1, explique les valeurs de « était occupée » et de « alla » dans la phrase sur Mme de Clèves.",
        "methodSteps": [
          "« Etait occupée à s'habiller » est à l'imparfait : l'action dure dans le passé et décrit la situation de Mme de Clèves.",
          "« Alla au Louvre » est au passé simple : c'est une action ponctuelle qui fait avancer le récit.",
          "Le couple imparfait et passé simple oppose donc l'arrière-plan descriptif et l'événement.",
          "C'est le fonctionnement décrit par le résumé pour le système du récit."
        ],
        "conclusion": "Imparfait pour la description qui dure, passé simple pour l'action qui avance : le couple de base du récit."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le système du récit",
          "stepTheme": "Le système du récit",
          "stepBadge": "Le système du récit",
          "paragraphText": "• Système du récit : système qui concerne les textes d'historiens, les romans, les contes, les épopées, les biographies et les fables.\nLe texte 1, La Princesse de Clèves de Madame de Lafayette, relève de ce système.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p01_q1",
            "type": "mcq",
            "prompt": "Le système du récit concerne notamment :",
            "options": [
              "Les romans, les contes, les épopées, les biographies et les fables",
              "Uniquement les lettres personnelles",
              "Uniquement les manifestes",
              "Uniquement les poèmes lyriques"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Liste du résumé : textes d'historiens, romans, contes, épopées, biographies, fables."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le présent de narration",
          "stepTheme": "Le présent de narration",
          "stepBadge": "Le présent de narration",
          "paragraphText": "• Présent de narration : présent de l'indicatif employé dans le système du récit.\nIl sert à rapporter les faits passés de façon à les rendre plus vivants, comme dans l'exemple du résumé : « Hier, je sors faire des courses et qu'est-ce que je vois ? »",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p01_q2",
            "type": "mcq",
            "prompt": "Le présent de narration sert à :",
            "options": [
              "Exprimer une vérité générale",
              "Rapporter les faits passés en les rendant plus vivants",
              "Exprimer un ordre",
              "Marquer l'antériorité par rapport à l'imparfait"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la valeur donnée par le résumé pour le présent dans le système du récit."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le passé simple",
          "stepTheme": "Le passé simple",
          "stepBadge": "Le passé simple",
          "paragraphText": "• Passé simple : temps qui présente l'action comme achevée, comme ponctuelle.\nIl marque une action brève dans le passé qui ne dure pas, comme dans l'exemple du résumé tiré de Cheikh Hamidou Kane : « Il répéta la phrase sans broncher ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p01_q3",
            "type": "mcq",
            "prompt": "Le passé simple présente l'action comme :",
            "options": [
              "Durable et descriptive",
              "Future et proche",
              "Achevée et ponctuelle, brève dans le passé",
              "Incertaine et souhaitée"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Définition du résumé : action achevée, ponctuelle, brève, qui ne dure pas."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'imparfait",
          "stepTheme": "L'imparfait",
          "stepBadge": "L'imparfait",
          "paragraphText": "• Imparfait : temps qui présente une action qui dure dans le passé.\nIl a une valeur descriptive et itérative, comme dans l'exemple du résumé tiré de Diégou Bailly : « Pendant que sa Mercedes avalait des kilomètres, madame Tressia se laissait emporter par la rêverie ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p01_q4",
            "type": "mcq",
            "prompt": "L'imparfait a pour valeurs, selon le résumé :",
            "options": [
              "L'ordre et l'interdiction",
              "Le futur proche uniquement",
              "L'action brève et ponctuelle",
              "La durée dans le passé, la description et la répétition"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé lui donne une valeur descriptive et itérative, pour une action qui dure dans le passé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Présent de narration ou présent actuel",
          "stepTheme": "Présent de narration ou présent actuel",
          "stepBadge": "Présent de narration ou présent actuel",
          "paragraphText": "Piège : dans « Hier, je sors faire des courses », le présent ne situe pas l'action au moment où l'on parle.\nL'indice « Hier » montre qu'il s'agit de faits passés rendus vivants : c'est un présent de narration, dans le système du récit.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p01_q5",
            "type": "mcq",
            "prompt": "Dans « Hier, je sors faire des courses et qu'est-ce que je vois ? », le présent est :",
            "options": [
              "Un présent de narration qui rend des faits passés plus vivants",
              "Un présent de vérité générale",
              "Un présent de futur proche",
              "Un présent d'énonciation ordinaire du discours"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'exemple est donné par le résumé pour le présent de narration : des faits passés, signalés par hier, rapportés au présent."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Candide tire son épée",
          "stepTheme": "Candide tire son épée",
          "stepBadge": "Candide tire son épée",
          "paragraphText": "Exemple 2 du résumé pour le présent de narration, tiré de Candide de Voltaire : « Il lui donna un grand coup du plat de son épée sur le visage. Candide dans l'instant tire la sienne ».\nAprès le passé simple donna, le présent tire rend l'action passée plus vivante.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p01_q6",
            "type": "mcq",
            "prompt": "Dans la citation de Voltaire, le verbe « tire » au présent sert à :",
            "options": [
              "Exprimer une vérité générale",
              "Rendre un fait passé plus vivant",
              "Donner un ordre à Candide",
              "Exprimer une éventualité après si"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé cite ce passage comme exemple de présent de narration après un passé simple."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p01_q1",
          "type": "mcq",
          "prompt": "Le système du récit concerne notamment :",
          "options": [
            "Les romans, les contes, les épopées, les biographies et les fables",
            "Uniquement les lettres personnelles",
            "Uniquement les manifestes",
            "Uniquement les poèmes lyriques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Liste du résumé : textes d'historiens, romans, contes, épopées, biographies, fables."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p01_q2",
          "type": "mcq",
          "prompt": "Le présent de narration sert à :",
          "options": [
            "Exprimer une vérité générale",
            "Rapporter les faits passés en les rendant plus vivants",
            "Exprimer un ordre",
            "Marquer l'antériorité par rapport à l'imparfait"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la valeur donnée par le résumé pour le présent dans le système du récit."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p01_q3",
          "type": "mcq",
          "prompt": "Le passé simple présente l'action comme :",
          "options": [
            "Durable et descriptive",
            "Future et proche",
            "Achevée et ponctuelle, brève dans le passé",
            "Incertaine et souhaitée"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Définition du résumé : action achevée, ponctuelle, brève, qui ne dure pas."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p01_q4",
          "type": "mcq",
          "prompt": "L'imparfait a pour valeurs, selon le résumé :",
          "options": [
            "L'ordre et l'interdiction",
            "Le futur proche uniquement",
            "L'action brève et ponctuelle",
            "La durée dans le passé, la description et la répétition"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé lui donne une valeur descriptive et itérative, pour une action qui dure dans le passé."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p01_q5",
          "type": "mcq",
          "prompt": "Dans « Hier, je sors faire des courses et qu'est-ce que je vois ? », le présent est :",
          "options": [
            "Un présent de narration qui rend des faits passés plus vivants",
            "Un présent de vérité générale",
            "Un présent de futur proche",
            "Un présent d'énonciation ordinaire du discours"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'exemple est donné par le résumé pour le présent de narration : des faits passés, signalés par hier, rapportés au présent."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p01_q6",
          "type": "mcq",
          "prompt": "Dans la citation de Voltaire, le verbe « tire » au présent sert à :",
          "options": [
            "Exprimer une vérité générale",
            "Rendre un fait passé plus vivant",
            "Donner un ordre à Candide",
            "Exprimer une éventualité après si"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé cite ce passage comme exemple de présent de narration après un passé simple."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p02",
      "order": 2,
      "title": "L'antériorité dans le récit : plus-que-parfait, passé antérieur et passé composé",
      "summary": "Situer les actions passées les unes par rapport aux autres grâce aux temps composés du récit.",
      "conceptExplanation": "Le plus-que-parfait indique une action passée à un moment indéterminé avant une autre action passée, exprimée le plus souvent à l'imparfait et aussi au passé composé : il marque l'antériorité par rapport à l'imparfait. Exemple du résumé, tiré d'Ahmadou Kourouma : « Les soleils des indépendances s'étaient annoncés comme un orage lointain ».\nLe passé antérieur indique une action passée à un moment déterminé, avant une autre action passée généralement exprimée au passé simple. Exemple du résumé : « Quand Pierre l'eut rejoint, ils partirent d'un pas fraternel ».\nLe passé composé exprime une action passée par rapport au moment où l'on parle ou écrit ; il peut également exprimer l'éventualité après « si », comme dans l'exemple du résumé : « Hier je suis allé à la plage avec ma famille » pour le premier emploi. Le résumé rappelle enfin que ces temps s'utilisent le plus souvent par couples : présent et passé composé, imparfait et passé simple, imparfait et plus-que-parfait, passé simple et passé antérieur.",
      "keyRule": "Antériorité : plus-que-parfait avant l'imparfait (moment indéterminé), passé antérieur avant le passé simple (moment déterminé).",
      "formulas": [],
      "workedExample": {
        "title": "Quand Pierre l'eut rejoint",
        "statement": "Dans l'exemple du résumé « Quand Pierre l'eut rejoint, ils partirent d'un pas fraternel », explique la valeur de « eut rejoint ».",
        "methodSteps": [
          "« Ils partirent » est au passé simple : c'est l'action de référence, ponctuelle.",
          "« L'eut rejoint » est au passé antérieur : l'action de rejoindre est passée avant le départ.",
          "Le moment de cette action antérieure est déterminé par la proposition introduite par quand.",
          "Le couple passé simple et passé antérieur exprime donc une antériorité précise."
        ],
        "conclusion": "Le passé antérieur place une action à un moment déterminé avant une action au passé simple."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le plus-que-parfait",
          "stepTheme": "Le plus-que-parfait",
          "stepBadge": "Le plus-que-parfait",
          "paragraphText": "• Plus-que-parfait : temps qui indique une action passée à un moment indéterminé avant une autre action passée.\nIl marque l'antériorité par rapport à l'imparfait, comme dans l'exemple de Kourouma : « Les soleils des indépendances s'étaient annoncés comme un orage lointain ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p02_q1",
            "type": "mcq",
            "prompt": "Le plus-que-parfait marque :",
            "options": [
              "Une action au moment où l'on parle",
              "L'antériorité par rapport à l'imparfait, à un moment indéterminé",
              "Un ordre donné au lecteur",
              "Un futur proche"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition du résumé : action passée avant une autre action passée, le plus souvent à l'imparfait."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le passé antérieur",
          "stepTheme": "Le passé antérieur",
          "stepBadge": "Le passé antérieur",
          "paragraphText": "• Passé antérieur : temps qui indique une action passée à un moment déterminé, avant une autre action passée généralement exprimée au passé simple.\nExemple du résumé : « Quand Pierre l'eut rejoint, ils partirent d'un pas fraternel ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p02_q2",
            "type": "mcq",
            "prompt": "Le passé antérieur indique une action :",
            "options": [
              "Postérieure à l'action au passé simple",
              "Simultanée à un présent de narration",
              "Antérieure, à un moment déterminé, à une action au passé simple",
              "Habituelle et descriptive"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé oppose son moment déterminé au moment indéterminé du plus-que-parfait."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le passé composé dans le récit",
          "stepTheme": "Le passé composé dans le récit",
          "stepBadge": "Le passé composé dans le récit",
          "paragraphText": "Le passé composé exprime une action passée par rapport au moment où l'on parle ou écrit.\nExemple du résumé : « Hier je suis allé à la plage avec ma famille ». Il peut également exprimer l'éventualité après « si ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p02_q3",
            "type": "mcq",
            "prompt": "Selon le résumé, le passé composé peut exprimer :",
            "options": [
              "Uniquement une description durable",
              "Une action passée par rapport au moment où l'on parle, et l'éventualité après si",
              "Uniquement un ordre",
              "Une vérité générale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les deux emplois donnés par le résumé pour le passé composé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les temps par couples",
          "stepTheme": "Les temps par couples",
          "stepBadge": "Les temps par couples",
          "paragraphText": "Le résumé indique que les temps du récit s'utilisent le plus souvent par couples.\nLes couples cités sont : présent et passé composé, imparfait et passé simple, imparfait et plus-que-parfait, passé simple et passé antérieur.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p02_q4",
            "type": "mcq",
            "prompt": "Parmi les couples cités par le résumé, on trouve :",
            "options": [
              "Présent et futur simple uniquement",
              "Subjonctif et impératif",
              "Imparfait et plus-que-parfait",
              "Passé antérieur et futur proche"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'imparfait et le plus-que-parfait forment l'un des quatre couples listés dans la remarque du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Moment déterminé ou indéterminé",
          "stepTheme": "Moment déterminé ou indéterminé",
          "stepBadge": "Moment déterminé ou indéterminé",
          "paragraphText": "Piège : confondre plus-que-parfait et passé antérieur, qui expriment tous deux une antériorité.\nLe résumé les distingue par le moment : indéterminé pour le plus-que-parfait, déterminé pour le passé antérieur, et par le temps de référence : imparfait contre passé simple.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p02_q5",
            "type": "mcq",
            "prompt": "Ce qui distingue le passé antérieur du plus-que-parfait, selon le résumé, c'est :",
            "options": [
              "La personne du verbe",
              "Le moment déterminé de l'action antérieure et la référence au passé simple",
              "La présence d'un dialogue",
              "L'absence d'auxiliaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Moment déterminé et action de référence au passé simple pour le passé antérieur ; moment indéterminé et référence à l'imparfait pour le plus-que-parfait."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les soleils des indépendances",
          "stepTheme": "Les soleils des indépendances",
          "stepBadge": "Les soleils des indépendances",
          "paragraphText": "Exemple du résumé pour le plus-que-parfait, tiré d'Ahmadou Kourouma : « Les soleils des indépendances s'étaient annoncés comme un orage lointain ».\nLe verbe s'étaient annoncés situe l'annonce avant un autre moment passé du récit.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p02_q6",
            "type": "mcq",
            "prompt": "Dans la citation de Kourouma, « s'étaient annoncés » est :",
            "options": [
              "Au passé simple",
              "A l'imparfait",
              "Au présent de narration",
              "Au plus-que-parfait"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé donne cette phrase comme exemple du plus-que-parfait, marque d'antériorité par rapport à l'imparfait."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p02_q1",
          "type": "mcq",
          "prompt": "Le plus-que-parfait marque :",
          "options": [
            "Une action au moment où l'on parle",
            "L'antériorité par rapport à l'imparfait, à un moment indéterminé",
            "Un ordre donné au lecteur",
            "Un futur proche"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition du résumé : action passée avant une autre action passée, le plus souvent à l'imparfait."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p02_q2",
          "type": "mcq",
          "prompt": "Le passé antérieur indique une action :",
          "options": [
            "Postérieure à l'action au passé simple",
            "Simultanée à un présent de narration",
            "Antérieure, à un moment déterminé, à une action au passé simple",
            "Habituelle et descriptive"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé oppose son moment déterminé au moment indéterminé du plus-que-parfait."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p02_q3",
          "type": "mcq",
          "prompt": "Selon le résumé, le passé composé peut exprimer :",
          "options": [
            "Uniquement une description durable",
            "Une action passée par rapport au moment où l'on parle, et l'éventualité après si",
            "Uniquement un ordre",
            "Une vérité générale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les deux emplois donnés par le résumé pour le passé composé."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p02_q4",
          "type": "mcq",
          "prompt": "Parmi les couples cités par le résumé, on trouve :",
          "options": [
            "Présent et futur simple uniquement",
            "Subjonctif et impératif",
            "Imparfait et plus-que-parfait",
            "Passé antérieur et futur proche"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'imparfait et le plus-que-parfait forment l'un des quatre couples listés dans la remarque du résumé."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p02_q5",
          "type": "mcq",
          "prompt": "Ce qui distingue le passé antérieur du plus-que-parfait, selon le résumé, c'est :",
          "options": [
            "La personne du verbe",
            "Le moment déterminé de l'action antérieure et la référence au passé simple",
            "La présence d'un dialogue",
            "L'absence d'auxiliaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Moment déterminé et action de référence au passé simple pour le passé antérieur ; moment indéterminé et référence à l'imparfait pour le plus-que-parfait."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p02_q6",
          "type": "mcq",
          "prompt": "Dans la citation de Kourouma, « s'étaient annoncés » est :",
          "options": [
            "Au passé simple",
            "A l'imparfait",
            "Au présent de narration",
            "Au plus-que-parfait"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé donne cette phrase comme exemple du plus-que-parfait, marque d'antériorité par rapport à l'imparfait."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p03",
      "order": 3,
      "title": "Le système du discours et les valeurs du présent",
      "summary": "Distinguer le système du discours et les valeurs du présent, du passé composé et du futur dans le discours.",
      "conceptExplanation": "Le système du discours concerne les essais, les pièces de théâtre, les poèmes lyriques et les manifestes. Les textes qui relèvent du discours se caractérisent par le présent, le passé composé et le futur, qui situent l'énoncé par rapport au moment de l'énonciation. Le texte 2 du résumé, la lettre de Gustave Flaubert à Louise Colet du 16 février 1852, relève de ce système : Flaubert y parle de Ronsard et de sa lecture du matin au présent et au passé composé, en s'adressant directement à sa correspondante.\nDans le discours, le présent exprime une action qui se déroule au moment où l'on parle, comme « Je vous remercie de votre lettre » ; il peut aussi exprimer une vérité générale, comme « La terre tourne autour du soleil » ; il peut également exprimer un futur proche, comme « Je pars dans une semaine ».\nLe résumé remarque enfin que les temps verbaux étudiés dans le récit peuvent se retrouver dans le discours, par exemple l'imparfait dans « Il y a deux ans, j'avais une voiture » ou le passé composé dans « Ma mère s'est levée ce matin de bonne humeur ».",
      "keyRule": "Discours : l'énoncé se situe par rapport au moment de l'énonciation, avec le présent, le passé composé et le futur.",
      "formulas": [],
      "workedExample": {
        "title": "La lettre de Flaubert à Louise Colet (texte 2)",
        "statement": "Dans le texte 2, la lettre de Flaubert, relève deux indices du système du discours.",
        "methodSteps": [
          "Flaubert s'adresse à sa correspondante au moment où il écrit : « Tu ne t'imagines pas quel poète c'est que Ronsard ».",
          "Il raconte sa lecture du matin par rapport à ce moment : « Ce matin, à 1 heure et demie, je lisais tout haut une pièce ».",
          "L'énoncé est donc situé par rapport au moment de l'énonciation, avec présent et temps du passé récent.",
          "Le texte relève du système du discours, comme les essais, les pièces de théâtre, les poèmes lyriques et les manifestes."
        ],
        "conclusion": "Adresse directe et repérage par rapport au moment où Flaubert écrit : système du discours."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le système du discours",
          "stepTheme": "Le système du discours",
          "stepBadge": "Le système du discours",
          "paragraphText": "• Système du discours : système qui concerne les essais, les pièces de théâtre, les poèmes lyriques et les manifestes.\nSes temps caractéristiques sont le présent, le passé composé et le futur.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p03_q1",
            "type": "mcq",
            "prompt": "Le système du discours concerne notamment :",
            "options": [
              "Les essais, les pièces de théâtre, les poèmes lyriques et les manifestes",
              "Uniquement les romans et les contes",
              "Uniquement les biographies",
              "Uniquement les épopées"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Liste du résumé pour le discours, à opposer à celle du récit : romans, contes, épopées, biographies, fables."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Situer par rapport à l'énonciation",
          "stepTheme": "Situer par rapport à l'énonciation",
          "stepBadge": "Situer par rapport à l'énonciation",
          "paragraphText": "Les textes du discours se caractérisent par le présent, le passé composé et le futur.\nCes temps situent l'énoncé par rapport au moment de l'énonciation, c'est-à-dire au moment où l'on parle ou écrit.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p03_q2",
            "type": "mcq",
            "prompt": "Dans le discours, le présent, le passé composé et le futur servent à situer l'énoncé par rapport :",
            "options": [
              "A une action au passé simple",
              "Au moment de l'énonciation",
              "A un décor décrit à l'imparfait",
              "A la naissance du héros"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la caractéristique donnée par le résumé pour les temps du discours."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le présent d'énonciation",
          "stepTheme": "Le présent d'énonciation",
          "stepBadge": "Le présent d'énonciation",
          "paragraphText": "• Présent du discours : présent qui exprime une action qui se déroule au moment où l'on parle.\nExemple du résumé : « Je vous remercie de votre lettre ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p03_q3",
            "type": "mcq",
            "prompt": "Le présent dans « Je vous remercie de votre lettre » exprime :",
            "options": [
              "Un fait passé rendu vivant",
              "Une vérité générale",
              "Une action qui se déroule au moment où l'on parle",
              "Un futur proche"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le premier emploi du présent dans le discours selon le résumé : l'action coïncide avec le moment de parole."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Vérité générale et futur proche",
          "stepTheme": "Vérité générale et futur proche",
          "stepBadge": "Vérité générale et futur proche",
          "paragraphText": "• Le présent peut aussi exprimer une vérité générale : « La terre tourne autour du soleil ».\n• Il peut également exprimer un futur proche : « Je pars dans une semaine ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p03_q4",
            "type": "mcq",
            "prompt": "Dans « La terre tourne autour du soleil », le présent exprime :",
            "options": [
              "Une action ponctuelle achevée",
              "Un ordre",
              "Une antériorité",
              "Une vérité générale"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé donne cette phrase comme exemple du présent de vérité générale dans le discours."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Un temps du récit dans le discours",
          "stepTheme": "Un temps du récit dans le discours",
          "stepBadge": "Un temps du récit dans le discours",
          "paragraphText": "Piège : croire qu'un temps du récit ne peut jamais apparaître dans le discours.\nLe résumé remarque que les temps étudiés dans le récit peuvent se retrouver dans le discours, comme l'imparfait dans « Il y a deux ans, j'avais une voiture », rapporté par Serge.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p03_q5",
            "type": "mcq",
            "prompt": "Selon la remarque du résumé, les temps du récit dans le discours :",
            "options": [
              "Sont impossibles",
              "Peuvent s'y retrouver, comme l'imparfait ou le passé composé",
              "Transforment le texte en roman",
              "Doivent toujours être corrigés"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La remarque donne deux exemples : l'imparfait chez Serge et le passé composé pour la mère levée de bonne humeur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Je pars dans une semaine",
          "stepTheme": "Je pars dans une semaine",
          "stepBadge": "Je pars dans une semaine",
          "paragraphText": "Exemple du résumé : « Je pars dans une semaine ».\nLe verbe est au présent, mais l'action de partir est située dans un futur proche par rapport au moment de l'énonciation.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p03_q6",
            "type": "mcq",
            "prompt": "Dans « Je pars dans une semaine », le présent exprime :",
            "options": [
              "Un futur proche",
              "Une vérité générale",
              "Une action passée achevée",
              "Une description durable"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'exemple du résumé pour le présent à valeur de futur proche dans le système du discours."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p03_q1",
          "type": "mcq",
          "prompt": "Le système du discours concerne notamment :",
          "options": [
            "Les essais, les pièces de théâtre, les poèmes lyriques et les manifestes",
            "Uniquement les romans et les contes",
            "Uniquement les biographies",
            "Uniquement les épopées"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Liste du résumé pour le discours, à opposer à celle du récit : romans, contes, épopées, biographies, fables."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p03_q2",
          "type": "mcq",
          "prompt": "Dans le discours, le présent, le passé composé et le futur servent à situer l'énoncé par rapport :",
          "options": [
            "A une action au passé simple",
            "Au moment de l'énonciation",
            "A un décor décrit à l'imparfait",
            "A la naissance du héros"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la caractéristique donnée par le résumé pour les temps du discours."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p03_q3",
          "type": "mcq",
          "prompt": "Le présent dans « Je vous remercie de votre lettre » exprime :",
          "options": [
            "Un fait passé rendu vivant",
            "Une vérité générale",
            "Une action qui se déroule au moment où l'on parle",
            "Un futur proche"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le premier emploi du présent dans le discours selon le résumé : l'action coïncide avec le moment de parole."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p03_q4",
          "type": "mcq",
          "prompt": "Dans « La terre tourne autour du soleil », le présent exprime :",
          "options": [
            "Une action ponctuelle achevée",
            "Un ordre",
            "Une antériorité",
            "Une vérité générale"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé donne cette phrase comme exemple du présent de vérité générale dans le discours."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p03_q5",
          "type": "mcq",
          "prompt": "Selon la remarque du résumé, les temps du récit dans le discours :",
          "options": [
            "Sont impossibles",
            "Peuvent s'y retrouver, comme l'imparfait ou le passé composé",
            "Transforment le texte en roman",
            "Doivent toujours être corrigés"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La remarque donne deux exemples : l'imparfait chez Serge et le passé composé pour la mère levée de bonne humeur."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p03_q6",
          "type": "mcq",
          "prompt": "Dans « Je pars dans une semaine », le présent exprime :",
          "options": [
            "Un futur proche",
            "Une vérité générale",
            "Une action passée achevée",
            "Une description durable"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'exemple du résumé pour le présent à valeur de futur proche dans le système du discours."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p04",
      "order": 4,
      "title": "Les modes : subjonctif, conditionnel et impératif",
      "summary": "Reconnaître les valeurs du subjonctif, du conditionnel et de l'impératif.",
      "conceptExplanation": "Le subjonctif est un mode personnel qui exprime le souhait, l'éventualité, c'est-à-dire une action incertaine. Il se rencontre souvent après un verbe de volonté ou de sentiment (vouloir, désirer, craindre) dans une proposition subordonnée introduite par « que ». Exemple du résumé : « Il désire que je sorte », au subjonctif présent.\nLe conditionnel exprime des faits irréels ou possibles mais dont la réalisation est soumise à une condition. Exemple du résumé : « Si je révisais mes leçons et faisais mes exercices, je réussirais », au conditionnel présent.\nL'impératif s'emploie dans des phrases de type injonctif et sert à exprimer un ordre, un conseil, une demande ou une interdiction. Exemple du résumé : « Ecoutez les conseils de vos parents afin de réussir dans la vie », qui a valeur de conseil. Le texte 3 du résumé, texte inédit d'un père à son fils sur un chantier, illustre l'impératif dans le discours direct : « Quitte ces lieux » y est un ordre.",
      "keyRule": "Subjonctif : souhait et éventualité après que ; conditionnel : fait possible soumis à condition ; impératif : ordre, conseil, demande, interdiction.",
      "formulas": [],
      "workedExample": {
        "title": "Quitte ces lieux (texte 3)",
        "statement": "Dans le texte 3, le père dit à son fils : « Quitte ces lieux ». Identifie le mode et sa valeur.",
        "methodSteps": [
          "« Quitte » n'a pas de sujet exprimé et s'adresse directement au fils : c'est un impératif.",
          "La phrase est de type injonctif : elle ne décrit pas, elle impose une action.",
          "Le père, maître du chantier, ordonne à son fils de partir après avoir dépassé les bornes.",
          "La valeur est donc celle d'un ordre."
        ],
        "conclusion": "Impératif à valeur d'ordre, comme le définit le résumé pour les phrases injonctives."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le subjonctif",
          "stepTheme": "Le subjonctif",
          "stepBadge": "Le subjonctif",
          "paragraphText": "• Subjonctif : mode personnel qui exprime le souhait et l'éventualité, une action incertaine.\nIl se rencontre souvent après un verbe de volonté ou de sentiment, dans une subordonnée introduite par « que ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p04_q1",
            "type": "mcq",
            "prompt": "Le subjonctif exprime principalement :",
            "options": [
              "Un ordre et une interdiction",
              "Le souhait et l'éventualité, une action incertaine",
              "Une action achevée dans le passé",
              "Une vérité générale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition du résumé, avec les verbes déclencheurs vouloir, désirer, craindre."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Il désire que je sorte",
          "stepTheme": "Il désire que je sorte",
          "stepBadge": "Il désire que je sorte",
          "paragraphText": "Exemple du résumé : « Il désire que je sorte ».\nAprès le verbe de volonté désirer, la subordonnée introduite par que est au subjonctif présent : sorte.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p04_q2",
            "type": "mcq",
            "prompt": "Dans « Il désire que je sorte », le verbe « sorte » est :",
            "options": [
              "A l'impératif",
              "Au conditionnel présent",
              "Au subjonctif présent",
              "Au passé simple"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé identifie un subjonctif présent après le verbe de volonté désirer et la conjonction que."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le conditionnel",
          "stepTheme": "Le conditionnel",
          "stepBadge": "Le conditionnel",
          "paragraphText": "• Conditionnel : mode qui exprime des faits irréels ou possibles mais dont la réalisation est soumise à une condition.\nExemple du résumé : « Si je révisais mes leçons et faisais mes exercices, je réussirais ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p04_q3",
            "type": "mcq",
            "prompt": "Le conditionnel exprime des faits :",
            "options": [
              "Certains et déjà accomplis",
              "Irréels ou possibles, soumis à une condition",
              "Ordonnés à un subordonné",
              "Vrais en tout temps"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition du résumé : la réalisation du fait dépend d'une condition, souvent introduite par si avec l'imparfait."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'impératif",
          "stepTheme": "L'impératif",
          "stepBadge": "L'impératif",
          "paragraphText": "• Impératif : mode employé dans les phrases de type injonctif.\nIl sert à exprimer un ordre, un conseil, une demande ou une interdiction, comme « Ecoutez les conseils de vos parents », à valeur de conseil.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p04_q4",
            "type": "mcq",
            "prompt": "L'impératif sert à exprimer :",
            "options": [
              "Un souhait incertain",
              "Une antériorité dans le passé",
              "Une description durable",
              "Un ordre, un conseil, une demande ou une interdiction"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ce sont les quatre valeurs listées par le résumé pour l'impératif dans les phrases injonctives."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Conditionnel ou futur",
          "stepTheme": "Conditionnel ou futur",
          "stepBadge": "Conditionnel ou futur",
          "paragraphText": "Piège : « je réussirais » n'est pas un futur simple, malgré sa ressemblance.\nDans l'exemple du résumé, la réussite dépend de la condition « si je révisais mes leçons » : c'est un conditionnel présent, fait possible soumis à condition.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p04_q5",
            "type": "mcq",
            "prompt": "Dans « Si je révisais mes leçons, je réussirais », le verbe « réussirais » est :",
            "options": [
              "Au futur simple de l'indicatif",
              "Au conditionnel présent",
              "Au subjonctif présent",
              "A l'impératif"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé identifie un conditionnel présent : fait possible dont la réalisation est soumise à la condition introduite par si."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Repérer le mode par son déclencheur",
          "stepTheme": "Repérer le mode par son déclencheur",
          "stepBadge": "Repérer le mode par son déclencheur",
          "paragraphText": "Méthode du résumé : chaque mode a ses indices.\nVerbe de volonté ou de sentiment suivi de que pour le subjonctif, si de condition pour le conditionnel, phrase injonctive sans sujet pour l'impératif.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p04_q6",
            "type": "mcq",
            "prompt": "Pour reconnaître le subjonctif, l'indice le plus sûr selon le résumé est :",
            "options": [
              "La présence d'un verbe de volonté ou de sentiment suivi de que",
              "La présence d'un décor à l'imparfait",
              "La présence d'une date passée",
              "La présence d'un point d'exclamation seul"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé rattache le subjonctif aux verbes vouloir, désirer, craindre et à la subordonnée en que."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p04_q1",
          "type": "mcq",
          "prompt": "Le subjonctif exprime principalement :",
          "options": [
            "Un ordre et une interdiction",
            "Le souhait et l'éventualité, une action incertaine",
            "Une action achevée dans le passé",
            "Une vérité générale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition du résumé, avec les verbes déclencheurs vouloir, désirer, craindre."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p04_q2",
          "type": "mcq",
          "prompt": "Dans « Il désire que je sorte », le verbe « sorte » est :",
          "options": [
            "A l'impératif",
            "Au conditionnel présent",
            "Au subjonctif présent",
            "Au passé simple"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé identifie un subjonctif présent après le verbe de volonté désirer et la conjonction que."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p04_q3",
          "type": "mcq",
          "prompt": "Le conditionnel exprime des faits :",
          "options": [
            "Certains et déjà accomplis",
            "Irréels ou possibles, soumis à une condition",
            "Ordonnés à un subordonné",
            "Vrais en tout temps"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition du résumé : la réalisation du fait dépend d'une condition, souvent introduite par si avec l'imparfait."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p04_q4",
          "type": "mcq",
          "prompt": "L'impératif sert à exprimer :",
          "options": [
            "Un souhait incertain",
            "Une antériorité dans le passé",
            "Une description durable",
            "Un ordre, un conseil, une demande ou une interdiction"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ce sont les quatre valeurs listées par le résumé pour l'impératif dans les phrases injonctives."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p04_q5",
          "type": "mcq",
          "prompt": "Dans « Si je révisais mes leçons, je réussirais », le verbe « réussirais » est :",
          "options": [
            "Au futur simple de l'indicatif",
            "Au conditionnel présent",
            "Au subjonctif présent",
            "A l'impératif"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé identifie un conditionnel présent : fait possible dont la réalisation est soumise à la condition introduite par si."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p04_q6",
          "type": "mcq",
          "prompt": "Pour reconnaître le subjonctif, l'indice le plus sûr selon le résumé est :",
          "options": [
            "La présence d'un verbe de volonté ou de sentiment suivi de que",
            "La présence d'un décor à l'imparfait",
            "La présence d'une date passée",
            "La présence d'un point d'exclamation seul"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé rattache le subjonctif aux verbes vouloir, désirer, craindre et à la subordonnée en que."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p05",
      "order": 5,
      "title": "Identifier les temps du récit et du discours en contexte",
      "summary": "Appliquer le traitement de l'évaluation sur le texte de Balzac, Une ténébreuse affaire.",
      "conceptExplanation": "La situation d'évaluation propose un extrait d'Une ténébreuse affaire de Balzac (1843), mêlant dialogue et narration sur Michu, régisseur de Gondreville. Son traitement distingue les deux systèmes dans le même texte.\nDans le récit : le passé simple avec « siffla » et « accourut » pour les actions ponctuelles ; l'imparfait avec « démontrait », « était » et « inspirait » pour les descriptions et les habitudes ; le plus-que-parfait avec « étaient partagées » selon le traitement ; le futur simple avec « achèveront » dans une intervention du narrateur. Dans le discours, c'est-à-dire dans les paroles des personnages : le présent avec « est », « rôde » et « dit », situés au moment de l'énonciation, et le passé simple « demanda » qui introduit la prise de parole dans la narration.\nCe texte montre donc que récit et discours coexistent : le dialogue relève du discours par ses présents d'énonciation, tandis que la narration qui l'encadre relève du récit par son couple imparfait et passé simple.",
      "keyRule": "Dans un texte mixte, sépare les paroles (discours, présents d'énonciation) de la narration (récit, imparfait et passé simple).",
      "formulas": [],
      "workedExample": {
        "title": "Michu siffle, son fils accourt",
        "statement": "Dans l'extrait de Balzac, explique les valeurs de « siffla » et « accourut » identifiés dans le traitement.",
        "methodSteps": [
          "Les deux verbes sont au passé simple, temps du récit relevé par le traitement.",
          "« Siffla » et « accourut » désignent des actions brèves et ponctuelles : Michu siffle, son fils arrive aussitôt.",
          "La prestesse de l'arrivée est ensuite commentée à l'imparfait : « démontrait le despotisme exercé par le régisseur ».",
          "On retrouve donc le couple du récit : passé simple pour l'événement, imparfait pour l'explication durable."
        ],
        "conclusion": "Passé simple pour les actions qui font avancer la scène, imparfait pour le commentaire descriptif."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Siffla et accourut",
          "stepTheme": "Siffla et accourut",
          "stepBadge": "Siffla et accourut",
          "paragraphText": "Le traitement de l'évaluation relève, dans le récit de Balzac, le passé simple avec « siffla » et « accourut ».\nCe sont les actions ponctuelles qui déclenchent la scène autour de l'étang.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p05_q1",
            "type": "mcq",
            "prompt": "Dans le traitement, « siffla » et « accourut » sont classés comme :",
            "options": [
              "Des présents du discours",
              "Des passés simples du récit",
              "Des subjonctifs présents",
              "Des impératifs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le traitement les range dans le récit, au passé simple, temps de l'action brève et achevée."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Démontrait, était, inspirait",
          "stepTheme": "Démontrait, était, inspirait",
          "stepBadge": "Démontrait, était, inspirait",
          "paragraphText": "Le traitement relève, dans le récit, l'imparfait avec « démontrait », « était » et « inspirait ».\nCes verbes décrivent la terreur durable que Michu inspire à sa femme, à sa belle-mère et à son entourage.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p05_q2",
            "type": "mcq",
            "prompt": "Dans le traitement, « démontrait », « était » et « inspirait » sont :",
            "options": [
              "Des plus-que-parfaits",
              "Des futurs simples",
              "Des imparfaits du récit",
              "Des présents du discours"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le traitement les range à l'imparfait du récit, temps de la durée et de la description."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Est, rôde, dit",
          "stepTheme": "Est, rôde, dit",
          "stepBadge": "Est, rôde, dit",
          "paragraphText": "Le traitement relève, dans le discours, le présent avec « est », « rôde » et « dit ».\nCe sont les paroles échangées au moment même : « Le petit est là ? », « Il rôde autour de l'étang », dit la mère.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p05_q3",
            "type": "mcq",
            "prompt": "Dans le traitement, « est », « rôde » et « dit » sont des présents :",
            "options": [
              "De narration",
              "De vérité générale",
              "De futur proche",
              "Du discours, situés au moment de l'énonciation"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le dialogue se déroule au moment où les personnages parlent : présent du système du discours."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Demanda entre récit et discours",
          "stepTheme": "Demanda entre récit et discours",
          "stepBadge": "Demanda entre récit et discours",
          "paragraphText": "Piège relevé par le traitement : « demanda » introduit le dialogue (« Le petit est là ? demanda Michu à sa femme »).\nLe traitement le classe dans le discours de son relevé, alors que c'est un passé simple de narration qui encadre la prise de parole.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p05_q4",
            "type": "mcq",
            "prompt": "Dans le relevé du traitement, le verbe « demanda » est associé :",
            "options": [
              "Au discours, comme passé simple introduisant la parole",
              "A l'imparfait descriptif",
              "Au plus-que-parfait d'antériorité",
              "Au conditionnel de condition"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le traitement le place dans sa partie discours : il faut donc lire chaque relevé dans son contexte d'énonciation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Un même texte, deux systèmes",
          "stepTheme": "Un même texte, deux systèmes",
          "stepBadge": "Un même texte, deux systèmes",
          "paragraphText": "L'extrait de Balzac combine narration et dialogue dans la même page.\nLa narration relève du récit avec le passé simple et l'imparfait ; les paroles des personnages relèvent du discours avec le présent d'énonciation.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p05_q5",
            "type": "mcq",
            "prompt": "L'extrait d'Une ténébreuse affaire montre que récit et discours :",
            "options": [
              "S'excluent totalement dans un texte",
              "Peuvent coexister, narration d'un côté et dialogue de l'autre",
              "Utilisent toujours les mêmes temps",
              "Ne se distinguent jamais"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le relevé du traitement sépare les temps du récit et ceux du discours à l'intérieur du même extrait."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "La démarche d'identification",
          "stepTheme": "La démarche d'identification",
          "stepBadge": "La démarche d'identification",
          "paragraphText": "Méthode de l'évaluation : lire le texte, identifier les temps du récit et du discours, puis justifier par leur valeur.\nOn repère d'abord qui parle et à quel moment, puis on classe chaque verbe selon le système et la valeur étudiés.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p05_q6",
            "type": "mcq",
            "prompt": "La première question à se poser pour classer un temps dans ce texte est :",
            "options": [
              "Le texte est-il long ou court",
              "Qui parle, et le verbe relève-t-il de la narration ou des paroles des personnages",
              "L'auteur est-il célèbre",
              "Le titre contient-il un temps verbal"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Séparer narration et paroles permet de rattacher chaque temps à son système, comme le fait le traitement."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p05_q1",
          "type": "mcq",
          "prompt": "Dans le traitement, « siffla » et « accourut » sont classés comme :",
          "options": [
            "Des présents du discours",
            "Des passés simples du récit",
            "Des subjonctifs présents",
            "Des impératifs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le traitement les range dans le récit, au passé simple, temps de l'action brève et achevée."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p05_q2",
          "type": "mcq",
          "prompt": "Dans le traitement, « démontrait », « était » et « inspirait » sont :",
          "options": [
            "Des plus-que-parfaits",
            "Des futurs simples",
            "Des imparfaits du récit",
            "Des présents du discours"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le traitement les range à l'imparfait du récit, temps de la durée et de la description."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p05_q3",
          "type": "mcq",
          "prompt": "Dans le traitement, « est », « rôde » et « dit » sont des présents :",
          "options": [
            "De narration",
            "De vérité générale",
            "De futur proche",
            "Du discours, situés au moment de l'énonciation"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le dialogue se déroule au moment où les personnages parlent : présent du système du discours."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p05_q4",
          "type": "mcq",
          "prompt": "Dans le relevé du traitement, le verbe « demanda » est associé :",
          "options": [
            "Au discours, comme passé simple introduisant la parole",
            "A l'imparfait descriptif",
            "Au plus-que-parfait d'antériorité",
            "Au conditionnel de condition"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le traitement le place dans sa partie discours : il faut donc lire chaque relevé dans son contexte d'énonciation."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p05_q5",
          "type": "mcq",
          "prompt": "L'extrait d'Une ténébreuse affaire montre que récit et discours :",
          "options": [
            "S'excluent totalement dans un texte",
            "Peuvent coexister, narration d'un côté et dialogue de l'autre",
            "Utilisent toujours les mêmes temps",
            "Ne se distinguent jamais"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le relevé du traitement sépare les temps du récit et ceux du discours à l'intérieur du même extrait."
        },
        {
          "id": "terminale_a1_francais_pl_l07_valeurs_temps_verbaux_p05_q6",
          "type": "mcq",
          "prompt": "La première question à se poser pour classer un temps dans ce texte est :",
          "options": [
            "Le texte est-il long ou court",
            "Qui parle, et le verbe relève-t-il de la narration ou des paroles des personnages",
            "L'auteur est-il célèbre",
            "Le titre contient-il un temps verbal"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Séparer narration et paroles permet de rattacher chaque temps à son système, comme le fait le traitement."
        }
      ]
    }
  ]
};
