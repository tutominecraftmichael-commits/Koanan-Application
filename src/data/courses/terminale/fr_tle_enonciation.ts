import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — contenu réel « L'énonciation » (marques grammaticales et lexicales), dans le cours affiché « Léçon 5 : RESUME DU TEXTE ARGUMENTATIF » (titre décalé, le contenu fait foi) (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=534
export const FR_TLE_PL_L14_ENONCIATION: CurriculumChapter = {
  "id": "terminale_a1_francais_pl_l14_enonciation",
  "subjectId": "francais",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  "order": 14,
  "title": "Leçon 14 : L'énonciation",
  "summary": "Étudier l'énonciation, c'est identifier dans un texte les marques qui manifestent la présence du locuteur : indices de personne, types de phrases, indicateurs spatio-temporels, vocabulaire évaluatif et affectif, et modalisateurs.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=534",
  "points": [
    {
      "id": "terminale_a1_francais_pl_l14_enonciation_p01",
      "order": 1,
      "title": "Définir l'énonciation et repérer les indices de personne",
      "summary": "Définir l'énonciation et reconnaître les pronoms et le « on » comme marques de la présence du locuteur.",
      "conceptExplanation": "L'énonciation, c'est l'acte par lequel un locuteur adresse un énoncé à un destinataire dans des circonstances précises. L'étude de l'énonciation consiste à identifier, dans un texte, l'implication de l'émetteur, autrement dit les indices qui manifestent sa présence dans le texte. Ces indices sont, en général, des marques grammaticales et lexicales.\nPremier groupe d'indices grammaticaux : les indices de personne. Leurs marques sont les pronoms personnels je et tu, leur pluriel et toutes les formes associées (adjectifs possessifs, pronoms possessifs), ainsi que le pronom indéfini « on » impliquant le locuteur.\nLeur valeur d'emploi : ces indices sont les marques de la présence du locuteur et donc de la subjectivité du texte. L'auteur du texte assume clairement ses propos, qu'il oppose à ceux tenus par d'autres personnes. Dans le texte support de Jean Giono, Les Vraies richesses (1937), cette opposition est visible : « On a dû te dire qu'il fallait réussir dans la vie ; moi je te dis qu'il faut vivre » et « Avec ce que tu sais, tu gagneras des joies ».",
      "keyRule": "Énonciation = un locuteur adresse un énoncé à un destinataire ; je, tu, on et les possessifs sont les marques de sa présence et de la subjectivité du texte.",
      "formulas": [],
      "workedExample": {
        "title": "La présence de Giono dans Les Vraies richesses",
        "statement": "Dans l'extrait des Vraies richesses, comment le locuteur manifeste-t-il sa présence et sa subjectivité ?",
        "methodSteps": [
          "Il emploie les pronoms de première et deuxième personne : « moi je te dis », « tu gagneras des joies ».",
          "Il oppose ses propos à ceux tenus par d'autres : « On a dû te dire qu'il fallait réussir dans la vie ; moi je te dis qu'il faut vivre ».",
          "Le pronom indéfini « on » renvoie à ces autres personnes dont il se démarque.",
          "Il assume donc clairement ses propos : c'est la subjectivité du texte."
        ],
        "conclusion": "Les indices de personne montrent un locuteur présent dans son texte, qui assume ses propos contre ceux d'autrui."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qu'est l'énonciation",
          "stepTheme": "Ce qu'est l'énonciation",
          "stepBadge": "Ce qu'est l'énonciation",
          "paragraphText": "• Énonciation : acte par lequel un locuteur adresse un énoncé à un destinataire dans des circonstances précises.\nÉtudier l'énonciation, c'est identifier dans un texte les indices qui manifestent la présence de l'émetteur.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p01_q1",
            "type": "mcq",
            "prompt": "L'énonciation est :",
            "options": [
              "L'acte par lequel un locuteur adresse un énoncé à un destinataire dans des circonstances précises",
              "La copie fidèle d'un texte ancien",
              "La liste des personnages d'un récit",
              "La ponctuation d'un texte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition de la leçon : un locuteur, un énoncé, un destinataire, des circonstances précises."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les indices de personne",
          "stepTheme": "Les indices de personne",
          "stepBadge": "Les indices de personne",
          "paragraphText": "• Indices de personne : pronoms personnels je et tu, leur pluriel et toutes les formes associées (adjectifs possessifs, pronoms possessifs).\nLe pronom indéfini « on » impliquant le locuteur en fait aussi partie.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p01_q2",
            "type": "mcq",
            "prompt": "Lequel de ces éléments est un indice de personne selon la leçon ?",
            "options": [
              "Le passé simple",
              "Le pronom indéfini « on » impliquant le locuteur",
              "Le point d'exclamation",
              "Le titre du texte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon range « on » impliquant le locuteur parmi les indices de personne, avec je, tu et les formes possessives associées."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La valeur des indices de personne",
          "stepTheme": "La valeur des indices de personne",
          "stepBadge": "La valeur des indices de personne",
          "paragraphText": "Ces indices sont les marques de la présence du locuteur et donc de la subjectivité du texte.\nL'auteur assume clairement ses propos, qu'il oppose à ceux tenus par d'autres personnes.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p01_q3",
            "type": "mcq",
            "prompt": "Les indices de personne marquent :",
            "options": [
              "L'objectivité totale du texte",
              "L'absence du locuteur",
              "La présence du locuteur et la subjectivité du texte",
              "Uniquement le destinataire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est leur valeur d'emploi selon la leçon : présence du locuteur et subjectivité du texte."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "« Moi je te dis » chez Giono",
          "stepTheme": "« Moi je te dis » chez Giono",
          "stepBadge": "« Moi je te dis » chez Giono",
          "paragraphText": "Dans le texte support, Giono écrit : « On a dû te dire qu'il fallait réussir dans la vie ; moi je te dis qu'il faut vivre ».\nIl oppose ses propres propos, assumés à la première personne, à ceux que d'autres ont tenus au destinataire.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p01_q4",
            "type": "mcq",
            "prompt": "Dans cet exemple, le locuteur oppose ses propos à ceux :",
            "options": [
              "De son destinataire",
              "Du lecteur inconnu",
              "Des personnages du texte",
              "Tenus par d'autres personnes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon précise que l'auteur assume ses propos qu'il oppose à ceux tenus par d'autres personnes, désignées ici par « on »."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "« On » n'implique pas toujours le locuteur",
          "stepTheme": "« On » n'implique pas toujours le locuteur",
          "stepBadge": "« On » n'implique pas toujours le locuteur",
          "paragraphText": "Piège : relever automatiquement tout « on » comme indice de personne du locuteur.\nLa leçon ne retient que le pronom indéfini « on » impliquant le locuteur ; il faut vérifier, dans le texte, qui ce « on » désigne.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p01_q5",
            "type": "mcq",
            "prompt": "La leçon retient comme indice de personne :",
            "options": [
              "Tout emploi du pronom « on », sans condition",
              "Le pronom indéfini « on » impliquant le locuteur",
              "Uniquement le pronom « nous »",
              "Les pronoms de troisième personne"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La précision « impliquant le locuteur » fait partie de la définition donnée par la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Commencer l'étude d'un texte",
          "stepTheme": "Commencer l'étude d'un texte",
          "stepBadge": "Commencer l'étude d'un texte",
          "paragraphText": "Méthode de la séance 1 : identifier d'abord les indices grammaticaux de l'énonciation, puis dégager leur valeur d'emploi.\nOn commence par les indices de personne : pronoms personnels, formes possessives et « on » impliquant le locuteur.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p01_q6",
            "type": "mcq",
            "prompt": "La première famille d'indices grammaticaux étudiée dans la séance 1 est :",
            "options": [
              "Les indices de personne",
              "Les modalisateurs",
              "Le vocabulaire évaluatif",
              "Le vocabulaire affectif"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La séance 1 ouvre l'étude des indices par les indices de personne, avant les types de phrases et les indicateurs spatio-temporels."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p01_q1",
          "type": "mcq",
          "prompt": "L'énonciation est :",
          "options": [
            "L'acte par lequel un locuteur adresse un énoncé à un destinataire dans des circonstances précises",
            "La copie fidèle d'un texte ancien",
            "La liste des personnages d'un récit",
            "La ponctuation d'un texte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition de la leçon : un locuteur, un énoncé, un destinataire, des circonstances précises."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p01_q2",
          "type": "mcq",
          "prompt": "Lequel de ces éléments est un indice de personne selon la leçon ?",
          "options": [
            "Le passé simple",
            "Le pronom indéfini « on » impliquant le locuteur",
            "Le point d'exclamation",
            "Le titre du texte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon range « on » impliquant le locuteur parmi les indices de personne, avec je, tu et les formes possessives associées."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p01_q3",
          "type": "mcq",
          "prompt": "Les indices de personne marquent :",
          "options": [
            "L'objectivité totale du texte",
            "L'absence du locuteur",
            "La présence du locuteur et la subjectivité du texte",
            "Uniquement le destinataire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est leur valeur d'emploi selon la leçon : présence du locuteur et subjectivité du texte."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p01_q4",
          "type": "mcq",
          "prompt": "Dans cet exemple, le locuteur oppose ses propos à ceux :",
          "options": [
            "De son destinataire",
            "Du lecteur inconnu",
            "Des personnages du texte",
            "Tenus par d'autres personnes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon précise que l'auteur assume ses propos qu'il oppose à ceux tenus par d'autres personnes, désignées ici par « on »."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p01_q5",
          "type": "mcq",
          "prompt": "La leçon retient comme indice de personne :",
          "options": [
            "Tout emploi du pronom « on », sans condition",
            "Le pronom indéfini « on » impliquant le locuteur",
            "Uniquement le pronom « nous »",
            "Les pronoms de troisième personne"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La précision « impliquant le locuteur » fait partie de la définition donnée par la leçon."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p01_q6",
          "type": "mcq",
          "prompt": "La première famille d'indices grammaticaux étudiée dans la séance 1 est :",
          "options": [
            "Les indices de personne",
            "Les modalisateurs",
            "Le vocabulaire évaluatif",
            "Le vocabulaire affectif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La séance 1 ouvre l'étude des indices par les indices de personne, avant les types de phrases et les indicateurs spatio-temporels."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l14_enonciation_p02",
      "order": 2,
      "title": "Types de phrases et indicateurs spatio-temporels",
      "summary": "Reconnaître la valeur des phrases impératives, interrogatives et exclamatives, et celle des temps et adverbes du discours.",
      "conceptExplanation": "Deuxième groupe d'indices grammaticaux : les types de phrases. La phrase impérative, la phrase interrogative et la phrase exclamative sont des marques grammaticales de la présence, dans le texte, du locuteur.\nLeur valeur d'emploi : les phrases impérative et interrogative expriment une adresse du locuteur à son interlocuteur. Avec l'impératif : un ordre, une défense, une supplication ; exemple de la leçon, « ne crois pas », exhortation du locuteur à son destinataire pour réviser sa conception des choses. Avec l'interrogation : une question attendant une réponse. La phrase exclamative traduit les sentiments du locuteur.\nTroisième groupe : les indicateurs spatio-temporels. Le système temporel est centré sur le présent de l'indicatif ; les temps utilisés sont ceux du discours : passé composé, imparfait, plus-que-parfait, futur, futur antérieur. Le moment et le lieu de l'énonciation sont exprimés par les adverbes « maintenant » et « ici » ou des équivalents ; la leçon note que le texte support n'en fournit pas d'exemple. Valeur d'emploi : le présent de l'indicatif, temps de base du discours, situe l'énoncé au moment de son énonciation (d'où le je, ici et maintenant) ; il actualise l'énoncé du locuteur. Les autres temps du discours situent l'énoncé par rapport au présent du locuteur. Exemple de la leçon : les conseils de Giono sur la réussite dans la vie relèvent du moment de l'énonciation, à l'opposé de la thèse contraire qui lui est antérieure.",
      "keyRule": "Impératif et interrogation adressent le locuteur à son interlocuteur, l'exclamation traduit ses sentiments ; le présent du discours actualise l'énoncé (je, ici, maintenant).",
      "formulas": [],
      "workedExample": {
        "title": "« Ne crois pas » : un impératif analysé",
        "statement": "Dans le texte de Giono, relève l'impératif « ne crois pas » et dégage sa valeur d'emploi selon la leçon.",
        "methodSteps": [
          "Marque : la phrase impérative est une marque grammaticale de la présence du locuteur.",
          "Valeur générale : l'impératif exprime une adresse du locuteur à son interlocuteur (ordre, défense, supplication).",
          "Valeur précise dans ce texte : c'est une exhortation du locuteur à son destinataire pour réviser sa conception des choses."
        ],
        "conclusion": "« Ne crois pas » n'est pas un simple ordre : Giono exhorte son destinataire à changer sa conception de la réussite."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les types de phrases concernés",
          "stepTheme": "Les types de phrases concernés",
          "stepBadge": "Les types de phrases concernés",
          "paragraphText": "• Types de phrases marques de l'énonciation : la phrase impérative, la phrase interrogative et la phrase exclamative.\nCe sont des marques grammaticales de la présence du locuteur dans le texte.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p02_q1",
            "type": "mcq",
            "prompt": "Les types de phrases retenus comme marques de la présence du locuteur sont :",
            "options": [
              "Impérative, interrogative et exclamative",
              "Déclarative, négative et passive",
              "Simple, complexe et nominale",
              "Interrogative, déclarative et passive"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon énumère exactement ces trois types : impérative, interrogative, exclamative."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La valeur de l'impératif",
          "stepTheme": "La valeur de l'impératif",
          "stepBadge": "La valeur de l'impératif",
          "paragraphText": "Avec l'impératif, le locuteur adresse à son interlocuteur un ordre, une défense ou une supplication.\nC'est une adresse directe du locuteur à son destinataire.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p02_q2",
            "type": "mcq",
            "prompt": "La phrase impérative peut exprimer :",
            "options": [
              "Un sentiment du locuteur",
              "Un ordre, une défense ou une supplication",
              "Une question attendant une réponse",
              "Un fait passé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les trois valeurs de l'impératif données par la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La valeur de l'exclamative",
          "stepTheme": "La valeur de l'exclamative",
          "stepBadge": "La valeur de l'exclamative",
          "paragraphText": "La phrase exclamative traduit les sentiments du locuteur.\nElle se distingue ainsi de l'interrogation, qui exprime une question attendant une réponse.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p02_q3",
            "type": "mcq",
            "prompt": "La phrase exclamative traduit :",
            "options": [
              "Une défense adressée au destinataire",
              "Le moment de l'énonciation",
              "Les sentiments du locuteur",
              "Une hypothèse du lecteur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la valeur d'emploi de l'exclamative selon la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le temps de base du discours",
          "stepTheme": "Le temps de base du discours",
          "stepBadge": "Le temps de base du discours",
          "paragraphText": "• Présent de l'indicatif : temps de base du discours, au centre du système temporel de l'énonciation.\nLes autres temps du discours sont le passé composé, l'imparfait, le plus-que-parfait, le futur et le futur antérieur.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p02_q4",
            "type": "mcq",
            "prompt": "Le système temporel de l'énonciation est centré sur :",
            "options": [
              "Le passé simple",
              "L'imparfait",
              "Le futur antérieur",
              "Le présent de l'indicatif"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon précise que le système temporel est centré sur le présent de l'indicatif, temps de base du discours."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "« Ici » et « maintenant »",
          "stepTheme": "« Ici » et « maintenant »",
          "stepBadge": "« Ici » et « maintenant »",
          "paragraphText": "Le moment et le lieu de l'énonciation sont exprimés par les adverbes « maintenant » et « ici » ou des équivalents.\nLa leçon note toutefois que le texte support de Giono n'en fournit pas d'exemple.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p02_q5",
            "type": "mcq",
            "prompt": "Selon la leçon, le moment et le lieu de l'énonciation sont exprimés par :",
            "options": [
              "Les adverbes « maintenant » et « ici » ou des équivalents",
              "Les pronoms de troisième personne",
              "Les noms propres uniquement",
              "La ponctuation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les indicateurs spatio-temporels cités : « maintenant » pour le moment, « ici » pour le lieu."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le présent situe l'énoncé",
          "stepTheme": "Le présent situe l'énoncé",
          "stepBadge": "Le présent situe l'énoncé",
          "paragraphText": "Piège : traiter le présent du texte de Giono comme un simple présent de narration.\nSelon la leçon, le présent de l'indicatif situe l'énoncé au moment de son énonciation et l'actualise : les conseils de Giono relèvent de ce moment, à l'opposé de la thèse contraire qui lui est antérieure.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p02_q6",
            "type": "mcq",
            "prompt": "Dans le texte de Giono, les conseils sur la réussite relèvent, selon la leçon :",
            "options": [
              "D'un passé lointain sans rapport avec le locuteur",
              "Du moment de l'énonciation",
              "D'un avenir imaginé par le destinataire",
              "De la thèse contraire antérieure"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le présent actualise l'énoncé du locuteur : ses conseils relèvent du moment de l'énonciation, contrairement à la thèse antérieure."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p02_q1",
          "type": "mcq",
          "prompt": "Les types de phrases retenus comme marques de la présence du locuteur sont :",
          "options": [
            "Impérative, interrogative et exclamative",
            "Déclarative, négative et passive",
            "Simple, complexe et nominale",
            "Interrogative, déclarative et passive"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon énumère exactement ces trois types : impérative, interrogative, exclamative."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p02_q2",
          "type": "mcq",
          "prompt": "La phrase impérative peut exprimer :",
          "options": [
            "Un sentiment du locuteur",
            "Un ordre, une défense ou une supplication",
            "Une question attendant une réponse",
            "Un fait passé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les trois valeurs de l'impératif données par la leçon."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p02_q3",
          "type": "mcq",
          "prompt": "La phrase exclamative traduit :",
          "options": [
            "Une défense adressée au destinataire",
            "Le moment de l'énonciation",
            "Les sentiments du locuteur",
            "Une hypothèse du lecteur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la valeur d'emploi de l'exclamative selon la leçon."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p02_q4",
          "type": "mcq",
          "prompt": "Le système temporel de l'énonciation est centré sur :",
          "options": [
            "Le passé simple",
            "L'imparfait",
            "Le futur antérieur",
            "Le présent de l'indicatif"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon précise que le système temporel est centré sur le présent de l'indicatif, temps de base du discours."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p02_q5",
          "type": "mcq",
          "prompt": "Selon la leçon, le moment et le lieu de l'énonciation sont exprimés par :",
          "options": [
            "Les adverbes « maintenant » et « ici » ou des équivalents",
            "Les pronoms de troisième personne",
            "Les noms propres uniquement",
            "La ponctuation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les indicateurs spatio-temporels cités : « maintenant » pour le moment, « ici » pour le lieu."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p02_q6",
          "type": "mcq",
          "prompt": "Dans le texte de Giono, les conseils sur la réussite relèvent, selon la leçon :",
          "options": [
            "D'un passé lointain sans rapport avec le locuteur",
            "Du moment de l'énonciation",
            "D'un avenir imaginé par le destinataire",
            "De la thèse contraire antérieure"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le présent actualise l'énoncé du locuteur : ses conseils relèvent du moment de l'énonciation, contrairement à la thèse antérieure."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l14_enonciation_p03",
      "order": 3,
      "title": "Le vocabulaire évaluatif",
      "summary": "Repérer les noms, adjectifs, verbes et expressions qui portent un jugement de valeur, mélioratif ou dépréciatif.",
      "conceptExplanation": "La séance 2 étudie les indices lexicaux de l'énonciation, à partir d'un texte de Jean Cazeneuve sur la guerre. Premier indice lexical : le vocabulaire évaluatif. C'est le lexique qui permet au locuteur de porter un jugement de valeur, en termes de bon ou mauvais, sur le thème ou l'objet dont il parle.\nL'appréciation est inscrite dans : un nom ou un groupe nominal, par exemple « le meilleur aiguillon » ; un adjectif, par exemple « bellicistes » ; un verbe, par exemple « glorifier » ; une expression particulière ou une proposition, par exemple « elle tend à la destruction ».\nValeur d'emploi : le lexique évaluatif peut être mélioratif (jugement positif porté sur ce dont on parle : « la glorifier », « le meilleur aiguillon ») ou dépréciatif (jugement négatif : « les théories bellicistes », « elle tend à la destruction »). Le vocabulaire évaluatif permet, dans un texte, de dégager les positions sur un thème donné : dans le texte support, deux points de vue se dégagent sur la guerre, les théoriciens sont favorables à la guerre et l'auteur la désapprouve.",
      "keyRule": "Vocabulaire évaluatif = jugement de valeur (bon ou mauvais) porté par un nom, un adjectif, un verbe ou une expression ; il est mélioratif ou dépréciatif.",
      "formulas": [],
      "workedExample": {
        "title": "Deux points de vue sur la guerre",
        "statement": "À partir des exemples de la leçon, montre comment le vocabulaire évaluatif dégage les positions sur la guerre dans le texte de Jean Cazeneuve.",
        "methodSteps": [
          "On relève le lexique mélioratif associé aux théories favorables à la guerre : « la glorifier », « le meilleur aiguillon ».",
          "On relève le lexique dépréciatif : « les théories bellicistes », « elle tend à la destruction ».",
          "On en déduit les deux points de vue : les théoriciens sont favorables à la guerre ; l'auteur la désapprouve."
        ],
        "conclusion": "Le vocabulaire évaluatif fait apparaître les positions sur le thème : faveur des théoriciens, désapprobation de l'auteur."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le vocabulaire évaluatif",
          "stepTheme": "Le vocabulaire évaluatif",
          "stepBadge": "Le vocabulaire évaluatif",
          "paragraphText": "• Vocabulaire évaluatif : lexique qui permet au locuteur de porter un jugement de valeur, en termes de bon ou mauvais, sur le thème ou l'objet dont il parle.\nC'est le premier indice lexical étudié dans la séance 2.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p03_q1",
            "type": "mcq",
            "prompt": "Le vocabulaire évaluatif permet au locuteur :",
            "options": [
              "De situer le texte dans le temps",
              "De porter un jugement de valeur sur ce dont il parle",
              "De poser une question au lecteur",
              "De conjuguer les verbes au présent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition de la leçon : un jugement de valeur, en termes de bon ou mauvais."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les formes de l'appréciation",
          "stepTheme": "Les formes de l'appréciation",
          "stepBadge": "Les formes de l'appréciation",
          "paragraphText": "L'appréciation peut être inscrite dans un nom ou un groupe nominal, un adjectif, un verbe, ou une expression particulière ou une proposition.\nExemples de la leçon : « le meilleur aiguillon », « bellicistes », « glorifier », « elle tend à la destruction ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p03_q2",
            "type": "mcq",
            "prompt": "L'appréciation évaluative peut être portée par :",
            "options": [
              "Uniquement un adjectif",
              "Uniquement un verbe",
              "Un nom, un adjectif, un verbe ou une expression",
              "Uniquement une proposition complète"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon énumère quatre supports : nom ou GN, adjectif, verbe, expression particulière ou proposition."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le lexique mélioratif",
          "stepTheme": "Le lexique mélioratif",
          "stepBadge": "Le lexique mélioratif",
          "paragraphText": "Le lexique mélioratif porte un jugement positif sur ce dont on parle.\nExemples de la leçon : « la glorifier » et « le meilleur aiguillon », associés aux vertus prêtées à la guerre par certains théoriciens.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p03_q3",
            "type": "mcq",
            "prompt": "« Le meilleur aiguillon » est un exemple de lexique :",
            "options": [
              "Dépréciatif",
              "Affectif uniquement",
              "Neutre",
              "Mélioratif"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Le meilleur aiguillon » porte un jugement positif : c'est un groupe nominal mélioratif selon la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le lexique dépréciatif",
          "stepTheme": "Le lexique dépréciatif",
          "stepBadge": "Le lexique dépréciatif",
          "paragraphText": "Le lexique dépréciatif porte un jugement négatif sur ce dont on parle.\nExemples de la leçon : « les théories bellicistes » et « elle tend à la destruction ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p03_q4",
            "type": "mcq",
            "prompt": "« Les théories bellicistes » est un exemple de lexique :",
            "options": [
              "Dépréciatif",
              "Mélioratif",
              "Temporel",
              "Interrogatif"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'adjectif « bellicistes » est cité par la leçon parmi les exemples de jugement négatif, donc dépréciatifs."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un verbe évaluatif",
          "stepTheme": "Un verbe évaluatif",
          "stepBadge": "Un verbe évaluatif",
          "paragraphText": "Exemple de la leçon : dans « Joseph de Maistre va jusqu'à la glorifier », le verbe « glorifier » porte l'appréciation.\nCe verbe est mélioratif : il présente la guerre de façon positive, dans le propos rapporté du théoricien.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p03_q5",
            "type": "mcq",
            "prompt": "Dans l'exemple de la leçon, le verbe qui porte un jugement de valeur est :",
            "options": [
              "Prétendre",
              "Glorifier",
              "Incarner",
              "Hasarder"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon cite « glorifier » comme exemple de verbe du vocabulaire évaluatif ; « prétendre » relève des modalisateurs (verbe d'opinion)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Évaluatif ne veut pas dire sentiment",
          "stepTheme": "Évaluatif ne veut pas dire sentiment",
          "stepBadge": "Évaluatif ne veut pas dire sentiment",
          "paragraphText": "Piège : confondre le vocabulaire évaluatif avec le vocabulaire affectif.\nL'évaluatif porte un jugement de valeur, en termes de bon ou mauvais ; l'affectif exprime les sentiments du locuteur. Les deux sont des indices lexicaux distincts dans la séance 2.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p03_q6",
            "type": "mcq",
            "prompt": "Le vocabulaire évaluatif se reconnaît à ce qu'il exprime :",
            "options": [
              "Le lieu de l'énonciation",
              "La certitude du locuteur",
              "Un jugement de valeur, bon ou mauvais",
              "Le temps du discours"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Jugement de valeur : c'est le critère du vocabulaire évaluatif, à distinguer des sentiments (affectif) et des certitudes ou doutes (modalisateurs)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p03_q1",
          "type": "mcq",
          "prompt": "Le vocabulaire évaluatif permet au locuteur :",
          "options": [
            "De situer le texte dans le temps",
            "De porter un jugement de valeur sur ce dont il parle",
            "De poser une question au lecteur",
            "De conjuguer les verbes au présent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition de la leçon : un jugement de valeur, en termes de bon ou mauvais."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p03_q2",
          "type": "mcq",
          "prompt": "L'appréciation évaluative peut être portée par :",
          "options": [
            "Uniquement un adjectif",
            "Uniquement un verbe",
            "Un nom, un adjectif, un verbe ou une expression",
            "Uniquement une proposition complète"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon énumère quatre supports : nom ou GN, adjectif, verbe, expression particulière ou proposition."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p03_q3",
          "type": "mcq",
          "prompt": "« Le meilleur aiguillon » est un exemple de lexique :",
          "options": [
            "Dépréciatif",
            "Affectif uniquement",
            "Neutre",
            "Mélioratif"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Le meilleur aiguillon » porte un jugement positif : c'est un groupe nominal mélioratif selon la leçon."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p03_q4",
          "type": "mcq",
          "prompt": "« Les théories bellicistes » est un exemple de lexique :",
          "options": [
            "Dépréciatif",
            "Mélioratif",
            "Temporel",
            "Interrogatif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'adjectif « bellicistes » est cité par la leçon parmi les exemples de jugement négatif, donc dépréciatifs."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p03_q5",
          "type": "mcq",
          "prompt": "Dans l'exemple de la leçon, le verbe qui porte un jugement de valeur est :",
          "options": [
            "Prétendre",
            "Glorifier",
            "Incarner",
            "Hasarder"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon cite « glorifier » comme exemple de verbe du vocabulaire évaluatif ; « prétendre » relève des modalisateurs (verbe d'opinion)."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p03_q6",
          "type": "mcq",
          "prompt": "Le vocabulaire évaluatif se reconnaît à ce qu'il exprime :",
          "options": [
            "Le lieu de l'énonciation",
            "La certitude du locuteur",
            "Un jugement de valeur, bon ou mauvais",
            "Le temps du discours"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Jugement de valeur : c'est le critère du vocabulaire évaluatif, à distinguer des sentiments (affectif) et des certitudes ou doutes (modalisateurs)."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l14_enonciation_p04",
      "order": 4,
      "title": "Le vocabulaire affectif",
      "summary": "Repérer les mots et expressions qui expriment les sentiments du locuteur et révèlent son point de vue.",
      "conceptExplanation": "Deuxième indice lexical de la séance 2 : le vocabulaire affectif. C'est l'ensemble des mots et expressions qui expriment les sentiments du locuteur par rapport à ce dont il parle.\nLe lexique affectif peut être : un nom ou un groupe nominal, un adjectif, un verbe, une expression particulière ou une proposition. Exemples de la leçon : « Joseph de Maistre va jusqu'à la glorifier » et « les sociologues ont parfois hasardé une comparaison ».\nValeur d'emploi : le vocabulaire affectif permet, dans un texte, d'identifier le sentiment du locuteur par rapport à des positions sur le thème dont il parle. Il révèle ainsi le point de vue de l'auteur. Exemple de la leçon : l'indignation de Jean Cazeneuve face aux théories favorables à la guerre révèle sa désapprobation de la force des armes et sa valorisation des théories pacifistes.",
      "keyRule": "Vocabulaire affectif = sentiments du locuteur ; il permet d'identifier son point de vue sur le thème traité.",
      "formulas": [],
      "workedExample": {
        "title": "L'indignation de Jean Cazeneuve",
        "statement": "Comment le vocabulaire affectif révèle-t-il le point de vue de Jean Cazeneuve dans le texte support de la séance 2 ?",
        "methodSteps": [
          "On repère le sentiment exprimé par l'auteur face aux théories favorables à la guerre : l'indignation.",
          "On le met en relation avec les positions du texte : d'un côté les théoriciens favorables à la guerre, de l'autre l'auteur.",
          "On en déduit son point de vue : il désapprouve la force des armes et valorise les théories pacifistes."
        ],
        "conclusion": "Le sentiment du locuteur, ici l'indignation, révèle son point de vue : désapprobation de la guerre, valorisation des théories pacifistes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le vocabulaire affectif",
          "stepTheme": "Le vocabulaire affectif",
          "stepBadge": "Le vocabulaire affectif",
          "paragraphText": "• Vocabulaire affectif : ensemble des mots et expressions qui expriment les sentiments du locuteur par rapport à ce dont il parle.\nC'est le deuxième indice lexical de la séance 2, après le vocabulaire évaluatif.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p04_q1",
            "type": "mcq",
            "prompt": "Le vocabulaire affectif exprime :",
            "options": [
              "Les sentiments du locuteur",
              "Le lieu de l'énonciation",
              "Un jugement en termes de bon ou mauvais",
              "Le doute du locuteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition de la leçon : des mots et expressions qui expriment les sentiments du locuteur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les formes du lexique affectif",
          "stepTheme": "Les formes du lexique affectif",
          "stepBadge": "Les formes du lexique affectif",
          "paragraphText": "Le lexique affectif peut être un nom ou un groupe nominal, un adjectif, un verbe, une expression particulière ou une proposition.\nCe sont les mêmes supports grammaticaux que pour le vocabulaire évaluatif : c'est la valeur exprimée qui les distingue.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p04_q2",
            "type": "mcq",
            "prompt": "Le lexique affectif peut prendre la forme :",
            "options": [
              "D'un signe de ponctuation seulement",
              "D'un nom, d'un adjectif, d'un verbe ou d'une expression",
              "D'un adverbe de temps seulement",
              "D'un pronom personnel seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon énumère : un nom ou un GN, un adjectif, un verbe, une expression particulière ou une proposition."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La valeur du vocabulaire affectif",
          "stepTheme": "La valeur du vocabulaire affectif",
          "stepBadge": "La valeur du vocabulaire affectif",
          "paragraphText": "Le vocabulaire affectif permet d'identifier le sentiment du locuteur par rapport à des positions sur le thème dont il parle.\nIl révèle ainsi le point de vue de l'auteur.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p04_q3",
            "type": "mcq",
            "prompt": "Le vocabulaire affectif permet, dans un texte, de :",
            "options": [
              "Compter les paragraphes",
              "Dater l'énonciation",
              "Révéler le point de vue de l'auteur",
              "Vérifier l'orthographe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est sa valeur d'emploi selon la leçon : identifier le sentiment du locuteur révèle le point de vue de l'auteur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le sentiment de Cazeneuve",
          "stepTheme": "Le sentiment de Cazeneuve",
          "stepBadge": "Le sentiment de Cazeneuve",
          "paragraphText": "Exemple de la leçon : l'indignation de Jean Cazeneuve face aux théories favorables à la guerre.\nCe sentiment révèle sa désapprobation de la force des armes et sa valorisation des théories pacifistes.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p04_q4",
            "type": "mcq",
            "prompt": "Le sentiment attribué à Jean Cazeneuve dans la leçon est :",
            "options": [
              "L'admiration",
              "La joie",
              "L'indifférence",
              "L'indignation"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon nomme l'indignation de l'auteur face aux théories favorables à la guerre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "« Hasarder une comparaison »",
          "stepTheme": "« Hasarder une comparaison »",
          "stepBadge": "« Hasarder une comparaison »",
          "paragraphText": "Exemple de lexique affectif donné par la leçon : « les sociologues ont parfois hasardé une comparaison ».\nL'expression suggère la prudence, voire l'audace risquée, prêtée aux sociologues par l'auteur.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p04_q5",
            "type": "mcq",
            "prompt": "L'exemple « les sociologues ont parfois hasardé une comparaison » illustre :",
            "options": [
              "Le vocabulaire affectif",
              "Les indicateurs spatio-temporels",
              "Les indices de personne",
              "Les types de phrases"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'un des deux exemples de lexique affectif donnés dans la séance 2."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Un même passage, deux lectures possibles",
          "stepTheme": "Un même passage, deux lectures possibles",
          "stepBadge": "Un même passage, deux lectures possibles",
          "paragraphText": "Piège : croire qu'un exemple ne peut relever que d'une seule catégorie d'indices.\nLa phrase « Joseph de Maistre va jusqu'à la glorifier » est citée par la leçon à la fois pour le verbe évaluatif « glorifier » et comme exemple de lexique affectif : tout dépend de l'angle d'analyse, jugement de valeur ou sentiment.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p04_q6",
            "type": "mcq",
            "prompt": "La phrase « Joseph de Maistre va jusqu'à la glorifier » est citée dans la leçon :",
            "options": [
              "Uniquement pour les indicateurs de temps",
              "Pour le vocabulaire évaluatif et pour le vocabulaire affectif",
              "Uniquement pour les modalisateurs",
              "Pour les types de phrases"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon utilise cet exemple deux fois : verbe évaluatif « glorifier », puis exemple de lexique affectif."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p04_q1",
          "type": "mcq",
          "prompt": "Le vocabulaire affectif exprime :",
          "options": [
            "Les sentiments du locuteur",
            "Le lieu de l'énonciation",
            "Un jugement en termes de bon ou mauvais",
            "Le doute du locuteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition de la leçon : des mots et expressions qui expriment les sentiments du locuteur."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p04_q2",
          "type": "mcq",
          "prompt": "Le lexique affectif peut prendre la forme :",
          "options": [
            "D'un signe de ponctuation seulement",
            "D'un nom, d'un adjectif, d'un verbe ou d'une expression",
            "D'un adverbe de temps seulement",
            "D'un pronom personnel seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon énumère : un nom ou un GN, un adjectif, un verbe, une expression particulière ou une proposition."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p04_q3",
          "type": "mcq",
          "prompt": "Le vocabulaire affectif permet, dans un texte, de :",
          "options": [
            "Compter les paragraphes",
            "Dater l'énonciation",
            "Révéler le point de vue de l'auteur",
            "Vérifier l'orthographe"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est sa valeur d'emploi selon la leçon : identifier le sentiment du locuteur révèle le point de vue de l'auteur."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p04_q4",
          "type": "mcq",
          "prompt": "Le sentiment attribué à Jean Cazeneuve dans la leçon est :",
          "options": [
            "L'admiration",
            "La joie",
            "L'indifférence",
            "L'indignation"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon nomme l'indignation de l'auteur face aux théories favorables à la guerre."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p04_q5",
          "type": "mcq",
          "prompt": "L'exemple « les sociologues ont parfois hasardé une comparaison » illustre :",
          "options": [
            "Le vocabulaire affectif",
            "Les indicateurs spatio-temporels",
            "Les indices de personne",
            "Les types de phrases"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'un des deux exemples de lexique affectif donnés dans la séance 2."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p04_q6",
          "type": "mcq",
          "prompt": "La phrase « Joseph de Maistre va jusqu'à la glorifier » est citée dans la leçon :",
          "options": [
            "Uniquement pour les indicateurs de temps",
            "Pour le vocabulaire évaluatif et pour le vocabulaire affectif",
            "Uniquement pour les modalisateurs",
            "Pour les types de phrases"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon utilise cet exemple deux fois : verbe évaluatif « glorifier », puis exemple de lexique affectif."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l14_enonciation_p05",
      "order": 5,
      "title": "Les modalisateurs",
      "summary": "Repérer auxiliaires modaux, verbes d'opinion, adverbes, adjectifs, périphrases et marques qui expriment certitude ou doute.",
      "conceptExplanation": "Troisième indice lexical de la séance 2 : les modalisateurs. Ce sont des mots, des expressions particulières, des marques grammaticales ou des ponctuations qui expriment les certitudes ou les doutes du locuteur sur son énoncé.\nIls peuvent être : des auxiliaires modaux, pouvoir et devoir (exemple : « peut avoir », « peut faire ») ; des verbes d'opinion, affirmer, soutenir, douter, prôner, suggérer, prétendre, croire (exemples : « prétend », « croient pouvoir ») ; des adverbes, évidemment, sans doute, peut-être, assurément (la leçon note qu'il n'y a pas d'exemple dans le texte) ; des adjectifs, possible, probable, certain (exemple : « certains ») ; des périphrases, il est certain que, il est possible que, il est vrai que (exemple : « il est vrai que ») ; des prétéritions, est-il utile de rappeler que, je ne m'étendrai pas sur, est-il utile d'alléguer (exemple : « est-il utile d'alléguer que »).\nD'autres modalisateurs relèvent de la ponctuation et des marques grammaticales : un mot entre guillemets (exemple : « les vertus »), les interrogations rhétoriques (exemple : la question sur les grandes civilisations disparues comme elles s'étaient répandues), et le conditionnel (la leçon note qu'il n'est pas dans le texte).\nValeur d'emploi : les modalisateurs portent sur la valeur de vérité de l'énoncé. Selon qu'ils expriment le doute ou la certitude, ils dévoilent l'attitude ou l'intention du locuteur par rapport à ce sur quoi porte son énoncé. Exemple de la leçon : l'intention de l'auteur du texte est de mettre en doute, réfuter les arguments des théoriciens favorables à la guerre en leur opposant des arguments contraires.",
      "keyRule": "Modalisateurs = certitudes ou doutes du locuteur sur son énoncé ; ils portent sur la valeur de vérité et dévoilent son attitude.",
      "formulas": [],
      "workedExample": {
        "title": "L'intention de Cazeneuve à travers ses modalisateurs",
        "statement": "Comment les modalisateurs du texte de Jean Cazeneuve dévoilent-ils l'intention de l'auteur ?",
        "methodSteps": [
          "On relève les verbes d'opinion qui rapportent les thèses adverses : Hegel « prétend », des évolutionnistes « croient pouvoir ».",
          "On relève la périphrase « il est vrai que », qui concède un point avant de le discuter.",
          "On relève la prétérition et l'interrogation rhétorique : « est-il utile d'alléguer que » les civilisations ont disparu comme elles s'étaient répandues.",
          "On en déduit l'attitude de l'auteur : mettre en doute et réfuter les arguments des théoriciens favorables à la guerre."
        ],
        "conclusion": "Les modalisateurs montrent un auteur qui rapporte les thèses adverses avec distance pour les réfuter : doute sur leurs arguments, certitude dans sa réfutation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les modalisateurs",
          "stepTheme": "Les modalisateurs",
          "stepBadge": "Les modalisateurs",
          "paragraphText": "• Modalisateurs : mots, expressions particulières, marques grammaticales ou ponctuations qui expriment les certitudes ou les doutes du locuteur sur son énoncé.\nIls constituent le troisième indice lexical de la séance 2.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p05_q1",
            "type": "mcq",
            "prompt": "Les modalisateurs expriment :",
            "options": [
              "Les certitudes ou les doutes du locuteur sur son énoncé",
              "Uniquement le lieu de l'énonciation",
              "Les sentiments du destinataire",
              "L'ordre des paragraphes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition de la leçon : certitudes ou doutes du locuteur sur son propre énoncé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les auxiliaires modaux",
          "stepTheme": "Les auxiliaires modaux",
          "stepBadge": "Les auxiliaires modaux",
          "paragraphText": "Les auxiliaires modaux pouvoir et devoir sont des modalisateurs.\nExemples de la leçon : « peut avoir » et « peut faire », tirés du texte sur la guerre.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p05_q2",
            "type": "mcq",
            "prompt": "« Pouvoir » et « devoir » sont classés dans la leçon parmi :",
            "options": [
              "Les indices de personne",
              "Les auxiliaires modaux",
              "Les adverbes de liaison",
              "Les indicateurs spatio-temporels"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pouvoir et devoir sont les deux auxiliaires modaux cités, avec les exemples « peut avoir » et « peut faire »."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les verbes d'opinion",
          "stepTheme": "Les verbes d'opinion",
          "stepBadge": "Les verbes d'opinion",
          "paragraphText": "Les verbes d'opinion sont des modalisateurs : affirmer, soutenir, douter, prôner, suggérer, prétendre, croire.\nExemples du texte : « prétend » (pour Hegel) et « croient pouvoir » (pour les évolutionnistes).",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p05_q3",
            "type": "mcq",
            "prompt": "Lequel de ces verbes est un verbe d'opinion modalisateur selon la leçon ?",
            "options": [
              "Glorifier",
              "Incarner",
              "Prétendre",
              "Opposer"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Prétendre » figure dans la liste des verbes d'opinion, avec l'exemple « Hegel prétend » ; « glorifier » relève du vocabulaire évaluatif."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La valeur des modalisateurs",
          "stepTheme": "La valeur des modalisateurs",
          "stepBadge": "La valeur des modalisateurs",
          "paragraphText": "Les modalisateurs portent sur la valeur de vérité de l'énoncé.\nSelon qu'ils expriment le doute ou la certitude, ils dévoilent l'attitude ou l'intention du locuteur par rapport à ce sur quoi porte son énoncé.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p05_q4",
            "type": "mcq",
            "prompt": "Les modalisateurs portent sur :",
            "options": [
              "La longueur de l'énoncé",
              "Le nombre d'interlocuteurs",
              "La mise en page du texte",
              "La valeur de vérité de l'énoncé"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est leur valeur d'emploi selon la leçon : ils disent le degré de certitude du locuteur sur la vérité de son énoncé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Guillemets et interrogations rhétoriques",
          "stepTheme": "Guillemets et interrogations rhétoriques",
          "stepBadge": "Guillemets et interrogations rhétoriques",
          "paragraphText": "Certains modalisateurs relèvent de la ponctuation et des marques grammaticales : un mot entre guillemets, comme « les vertus », et les interrogations rhétoriques.\nLe conditionnel est aussi un modalisateur possible, mais la leçon note qu'il n'est pas dans le texte support.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p05_q5",
            "type": "mcq",
            "prompt": "Parmi ces marques, laquelle est un modalisateur de ponctuation selon la leçon ?",
            "options": [
              "Un mot entre guillemets",
              "Un titre en majuscules",
              "Un alinéa",
              "Un numéro de page"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon cite le mot entre guillemets, avec l'exemple « les vertus », parmi les modalisateurs de ponctuation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas inventer les exemples absents",
          "stepTheme": "Ne pas inventer les exemples absents",
          "stepBadge": "Ne pas inventer les exemples absents",
          "paragraphText": "Piège : citer un adverbe modalisateur ou un conditionnel comme s'ils venaient du texte support.\nLa leçon le dit elle-même : pour les adverbes comme « évidemment » ou « peut-être », il n'y a pas d'exemple dans le texte ; le conditionnel non plus n'est pas dans le texte.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p05_q6",
            "type": "mcq",
            "prompt": "À propos des adverbes modalisateurs, la leçon précise :",
            "options": [
              "Qu'ils sont très nombreux dans le texte",
              "Qu'il n'y a pas d'exemple dans le texte",
              "Qu'ils sont tous au début du texte",
              "Qu'ils remplacent les verbes d'opinion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon indique honnêtement l'absence d'exemple pour les adverbes, comme pour le conditionnel : on ne doit pas en inventer."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p05_q1",
          "type": "mcq",
          "prompt": "Les modalisateurs expriment :",
          "options": [
            "Les certitudes ou les doutes du locuteur sur son énoncé",
            "Uniquement le lieu de l'énonciation",
            "Les sentiments du destinataire",
            "L'ordre des paragraphes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition de la leçon : certitudes ou doutes du locuteur sur son propre énoncé."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p05_q2",
          "type": "mcq",
          "prompt": "« Pouvoir » et « devoir » sont classés dans la leçon parmi :",
          "options": [
            "Les indices de personne",
            "Les auxiliaires modaux",
            "Les adverbes de liaison",
            "Les indicateurs spatio-temporels"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pouvoir et devoir sont les deux auxiliaires modaux cités, avec les exemples « peut avoir » et « peut faire »."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p05_q3",
          "type": "mcq",
          "prompt": "Lequel de ces verbes est un verbe d'opinion modalisateur selon la leçon ?",
          "options": [
            "Glorifier",
            "Incarner",
            "Prétendre",
            "Opposer"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Prétendre » figure dans la liste des verbes d'opinion, avec l'exemple « Hegel prétend » ; « glorifier » relève du vocabulaire évaluatif."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p05_q4",
          "type": "mcq",
          "prompt": "Les modalisateurs portent sur :",
          "options": [
            "La longueur de l'énoncé",
            "Le nombre d'interlocuteurs",
            "La mise en page du texte",
            "La valeur de vérité de l'énoncé"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est leur valeur d'emploi selon la leçon : ils disent le degré de certitude du locuteur sur la vérité de son énoncé."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p05_q5",
          "type": "mcq",
          "prompt": "Parmi ces marques, laquelle est un modalisateur de ponctuation selon la leçon ?",
          "options": [
            "Un mot entre guillemets",
            "Un titre en majuscules",
            "Un alinéa",
            "Un numéro de page"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon cite le mot entre guillemets, avec l'exemple « les vertus », parmi les modalisateurs de ponctuation."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p05_q6",
          "type": "mcq",
          "prompt": "À propos des adverbes modalisateurs, la leçon précise :",
          "options": [
            "Qu'ils sont très nombreux dans le texte",
            "Qu'il n'y a pas d'exemple dans le texte",
            "Qu'ils sont tous au début du texte",
            "Qu'ils remplacent les verbes d'opinion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon indique honnêtement l'absence d'exemple pour les adverbes, comme pour le conditionnel : on ne doit pas en inventer."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l14_enonciation_p06",
      "order": 6,
      "title": "Analyser les marques de l'énonciation dans un texte",
      "summary": "Appliquer la démarche complète aux deux activités d'évaluation : indices grammaticaux chez Seydou Badian, indices lexicaux chez Vialatte.",
      "conceptExplanation": "Les activités d'évaluation de la leçon demandent d'identifier les indices de l'énonciation et de dégager leur valeur d'emploi. Pour la séance 1, le texte est un extrait de Sous l'orage de Seydou Badian (1963) : Sibiri s'adresse à Birama (« Je te savais insolent, Birama, je viens de découvrir que tu es fou ») et défend l'usage selon lequel « c'est nous qui décidons », en opposant son camp (« nous », « notre milieu », « votre origine, à vous qui reniez votre milieu ») à celui des jeunes. Les indices grammaticaux (personnes, types de phrases) y manifestent la présence et la subjectivité du locuteur.\nPour la séance 2, le texte est un extrait de Vialatte, Les champignons du détroit de Behring (1988), et la leçon en donne le traitement. Vocabulaire affectif : pas de cas. Vocabulaire évaluatif : le groupe nominal « le défaut de la télévision » et la phrase « L'audiovisuel a des limites » sont dépréciatifs, « Quel progrès sur l'écran ! » est mélioratif ; valeur d'emploi : l'auteur cherche à dissuader les partisans de l'enseignement audiovisuel et dénonce leur fébrilité. Modalisateurs : l'adverbe « peut-être » et le conditionnel (« on pourrait », « aurait », « empêcherait », « voudrait ») ; valeur d'emploi : l'auteur met en doute avec subtilité les possibilités attribuées à l'enseignement audiovisuel.",
      "keyRule": "La démarche complète : relever chaque famille d'indices présente dans le texte, puis dégager sa valeur d'emploi, sans inventer les indices absents.",
      "formulas": [],
      "workedExample": {
        "title": "Le traitement du texte de Vialatte",
        "statement": "Reproduis la démarche de la leçon sur le texte de Vialatte : quelles familles d'indices sont présentes, avec quels exemples et quelles valeurs ?",
        "methodSteps": [
          "Vocabulaire affectif : pas de cas dans ce texte, la leçon le dit explicitement.",
          "Vocabulaire évaluatif : « le défaut de la télévision » (groupe nominal) et « L'audiovisuel a des limites » (phrase) sont dépréciatifs ; « Quel progrès sur l'écran ! » est mélioratif.",
          "Valeur de l'évaluatif : l'auteur cherche à dissuader les partisans de l'enseignement audiovisuel et dénonce leur fébrilité.",
          "Modalisateurs : l'adverbe « peut-être » et le conditionnel (« on pourrait », « aurait », « empêcherait », « voudrait »).",
          "Valeur des modalisateurs : l'auteur met en doute avec subtilité les possibilités attribuées à l'enseignement audiovisuel."
        ],
        "conclusion": "L'analyse aboutit à un point de vue : derrière l'éloge de surface, Vialatte doute de l'audiovisuel et dissuade ses partisans."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La consigne des activités d'évaluation",
          "stepTheme": "La consigne des activités d'évaluation",
          "stepBadge": "La consigne des activités d'évaluation",
          "paragraphText": "Les activités d'évaluation des deux séances demandent le même travail en deux temps.\nIdentifier les indices de l'énonciation du texte, puis dégager leur valeur d'emploi.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p06_q1",
            "type": "mcq",
            "prompt": "Les activités d'évaluation de la leçon demandent :",
            "options": [
              "De résumer le texte en cinq lignes",
              "D'identifier les indices de l'énonciation et de dégager leur valeur d'emploi",
              "De changer la fin du texte",
              "De traduire le texte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la consigne commune aux deux séances, pour les indices grammaticaux (Badian) comme pour les indices lexicaux (Vialatte)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Sibiri s'adresse à Birama",
          "stepTheme": "Sibiri s'adresse à Birama",
          "stepBadge": "Sibiri s'adresse à Birama",
          "paragraphText": "Dans l'extrait de Sous l'orage, Sibiri dit : « Je te savais insolent, Birama, je viens de découvrir que tu es fou ».\nLes pronoms je et te, indices de personne, installent le locuteur et son destinataire dans l'échange.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p06_q2",
            "type": "mcq",
            "prompt": "Dans cette phrase de Sibiri, les indices de personne sont :",
            "options": [
              "Il et elle",
              "On et eux",
              "Je et te",
              "Nous et ils uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Je te savais insolent » et « je viens de découvrir que tu es fou » : je et te sont les indices de personne de la séance 1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le « nous » de Sibiri",
          "stepTheme": "Le « nous » de Sibiri",
          "stepBadge": "Le « nous » de Sibiri",
          "paragraphText": "Sibiri oppose deux camps : « C'est nous qui décidons, comme il est d'usage. C'est à Kany à suivre » et « tout ce que tu viens de dire cadre bien avec votre conduite, à vous qui reniez votre milieu ».\nLe pluriel des pronoms (nous, votre, vous) prolonge les indices de personne : la subjectivité du locuteur s'y exprime au nom de son groupe.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p06_q3",
            "type": "mcq",
            "prompt": "Dans l'extrait de Badian, Sibiri oppose son camp à celui de Birama au moyen :",
            "options": [
              "Des indicateurs de lieu",
              "Des modalisateurs uniquement",
              "Du vocabulaire évaluatif uniquement",
              "Des pronoms de personne au pluriel (nous, votre, vous)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« C'est nous qui décidons » contre « votre conduite, à vous » : les formes plurielles des indices de personne portent l'opposition des deux camps."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'évaluatif chez Vialatte",
          "stepTheme": "L'évaluatif chez Vialatte",
          "stepBadge": "L'évaluatif chez Vialatte",
          "paragraphText": "Dans le traitement donné par la leçon, le vocabulaire évaluatif du texte de Vialatte comprend un groupe nominal et des phrases.\n« Le défaut de la télévision » et « L'audiovisuel a des limites » sont dépréciatifs ; « Quel progrès sur l'écran ! » est mélioratif.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p06_q4",
            "type": "mcq",
            "prompt": "Selon le traitement de la leçon, « L'audiovisuel a des limites » est :",
            "options": [
              "Dépréciatif",
              "Mélioratif",
              "Un modalisateur",
              "Un indice de personne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon classe cette phrase parmi les éléments dépréciatifs du vocabulaire évaluatif chez Vialatte."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les modalisateurs chez Vialatte",
          "stepTheme": "Les modalisateurs chez Vialatte",
          "stepBadge": "Les modalisateurs chez Vialatte",
          "paragraphText": "Les modalisateurs relevés par la leçon chez Vialatte sont l'adverbe « peut-être » et le conditionnel.\nExemples de conditionnel : « on pourrait », « aurait », « empêcherait », « voudrait ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p06_q5",
            "type": "mcq",
            "prompt": "Chez Vialatte, la leçon relève comme modalisateurs :",
            "options": [
              "Le passé simple et l'imparfait",
              "L'adverbe « peut-être » et le conditionnel",
              "Les pronoms je et tu",
              "Les adverbes « ici » et « maintenant »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les deux familles de modalisateurs du traitement : l'adverbe « peut-être » et les formes au conditionnel."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Dire « pas de cas » quand il n'y en a pas",
          "stepTheme": "Dire « pas de cas » quand il n'y en a pas",
          "stepBadge": "Dire « pas de cas » quand il n'y en a pas",
          "paragraphText": "Piège : forcer l'analyse en inventant du vocabulaire affectif chez Vialatte.\nLe traitement de la leçon est explicite : vocabulaire affectif, pas de cas. Une bonne analyse signale les familles absentes au lieu de les fabriquer.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l14_enonciation_p06_q6",
            "type": "mcq",
            "prompt": "Pour le vocabulaire affectif dans le texte de Vialatte, la leçon conclut :",
            "options": [
              "Qu'il est très abondant",
              "Qu'il se confond avec les modalisateurs",
              "Pas de cas",
              "Qu'il porte tout le texte"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Vocabulaire affectif : pas de cas » : la leçon montre qu'une famille d'indices peut être absente d'un texte, et qu'il faut le dire."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p06_q1",
          "type": "mcq",
          "prompt": "Les activités d'évaluation de la leçon demandent :",
          "options": [
            "De résumer le texte en cinq lignes",
            "D'identifier les indices de l'énonciation et de dégager leur valeur d'emploi",
            "De changer la fin du texte",
            "De traduire le texte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la consigne commune aux deux séances, pour les indices grammaticaux (Badian) comme pour les indices lexicaux (Vialatte)."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p06_q2",
          "type": "mcq",
          "prompt": "Dans cette phrase de Sibiri, les indices de personne sont :",
          "options": [
            "Il et elle",
            "On et eux",
            "Je et te",
            "Nous et ils uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Je te savais insolent » et « je viens de découvrir que tu es fou » : je et te sont les indices de personne de la séance 1."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p06_q3",
          "type": "mcq",
          "prompt": "Dans l'extrait de Badian, Sibiri oppose son camp à celui de Birama au moyen :",
          "options": [
            "Des indicateurs de lieu",
            "Des modalisateurs uniquement",
            "Du vocabulaire évaluatif uniquement",
            "Des pronoms de personne au pluriel (nous, votre, vous)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« C'est nous qui décidons » contre « votre conduite, à vous » : les formes plurielles des indices de personne portent l'opposition des deux camps."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p06_q4",
          "type": "mcq",
          "prompt": "Selon le traitement de la leçon, « L'audiovisuel a des limites » est :",
          "options": [
            "Dépréciatif",
            "Mélioratif",
            "Un modalisateur",
            "Un indice de personne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon classe cette phrase parmi les éléments dépréciatifs du vocabulaire évaluatif chez Vialatte."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p06_q5",
          "type": "mcq",
          "prompt": "Chez Vialatte, la leçon relève comme modalisateurs :",
          "options": [
            "Le passé simple et l'imparfait",
            "L'adverbe « peut-être » et le conditionnel",
            "Les pronoms je et tu",
            "Les adverbes « ici » et « maintenant »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les deux familles de modalisateurs du traitement : l'adverbe « peut-être » et les formes au conditionnel."
        },
        {
          "id": "terminale_a1_francais_pl_l14_enonciation_p06_q6",
          "type": "mcq",
          "prompt": "Pour le vocabulaire affectif dans le texte de Vialatte, la leçon conclut :",
          "options": [
            "Qu'il est très abondant",
            "Qu'il se confond avec les modalisateurs",
            "Pas de cas",
            "Qu'il porte tout le texte"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Vocabulaire affectif : pas de cas » : la leçon montre qu'une famille d'indices peut être absente d'un texte, et qu'il faut le dire."
        }
      ]
    }
  ]
};
