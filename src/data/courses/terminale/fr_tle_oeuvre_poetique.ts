import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Etude d’une œuvre intégrale poétique de littérature africaine ou étrangère » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=3765
export const FR_TLE_EOI_L11_OEUVRE_POETIQUE: CurriculumChapter = {
  "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique",
  "subjectId": "francais",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  "order": 11,
  "title": "Leçon 11 : Étude d'une œuvre intégrale poétique",
  "summary": "Des élèves de terminale découvrent l'œuvre poétique Les Fleurs du mal de Charles Baudelaire, inscrite à leur programme de lecture : ils s'organisent pour connaître les différents genres poétiques, introduire l'étude de l'œuvre, en construire le sens et faire la conclusion.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=3765",
  "points": [
    {
      "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p01",
      "order": 1,
      "title": "La poésie et la poésie lyrique",
      "summary": "Définir la poésie et reconnaître la poésie lyrique, ses thèmes et ses marques.",
      "conceptExplanation": "La poésie est l'art d'évoquer et de suggérer les sensations, les impressions, les émotions les plus vives par l'union intense des sons, des rythmes, des harmonies, en particulier par les vers. La poésie parle particulièrement à l'imagination et à la sensibilité.\nLa poésie lyrique exprime les émotions, les sentiments, les passions et les espoirs : c'est la poésie du cœur. Exemple : Victor Hugo, Les Contemplations. Les thèmes abordés sont l'amour, la mort, la nostalgie, la fuite du temps, la communion avec la nature, le destin, le sacré.\nLes marques de la poésie lyrique sont : l'emploi de la première personne du singulier (je, moi, me) ; les apostrophes ; le vocabulaire des émotions et des sentiments (champs lexicaux) ; une ponctuation expressive (points d'exclamation, points d'interrogation) ; la présence d'adverbes d'intensité ; l'emploi de figures de style (comparaisons, métaphores, hyperboles, accumulation). Le poème lyrique du corpus est le texte de Victor Hugo, Les Contemplations (1856), qui commence par « J'ai cueilli cette fleur pour toi sur la colline » et s'adresse à la bien-aimée.",
      "keyRule": "Poésie lyrique : poésie du cœur, émotions et sentiments, première personne, ponctuation expressive et figures de style.",
      "formulas": [],
      "workedExample": {
        "title": "Identifier le genre du poème de Bernard Dadié (situation d'évaluation)",
        "statement": "Un voisin n'arrive pas à déterminer le genre poétique de l'extrait de Bernard Dadié qui commence par « Je vous remercie mon Dieu, de m'avoir créé Noir ». Aide-le selon le corrigé de la leçon.",
        "methodSteps": [
          "Identifier la nature de l'extrait : c'est un poème.",
          "Relever les indices de la personne : « Je », « Mon » répété, « Me », « Moi ».",
          "Relever les images et nommer les figures : « Trente-six épées », « Trente-six brasiers » et le sang qui a rougi la neige et la nature sont des hyperboles.",
          "Préciser le genre poétique : nous avons un poème lyrique."
        ],
        "conclusion": "Première personne et hyperboles au service des sentiments : l'extrait de Dadié est un poème lyrique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La poésie",
          "stepTheme": "La poésie",
          "stepBadge": "La poésie",
          "paragraphText": "• Poésie : art d'évoquer et de suggérer les sensations, les impressions et les émotions les plus vives par l'union intense des sons, des rythmes et des harmonies, en particulier par les vers.\nElle parle particulièrement à l'imagination et à la sensibilité.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p01_q1",
            "type": "mcq",
            "prompt": "La poésie parle particulièrement :",
            "options": [
              "À la seule raison comptable",
              "À l'imagination et à la sensibilité",
              "Aux règles de la tragédie",
              "À la mémoire des dates uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la fin de la définition de la poésie donnée dans la séance 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La poésie lyrique, poésie du cœur",
          "stepTheme": "La poésie lyrique, poésie du cœur",
          "stepBadge": "La poésie lyrique, poésie du cœur",
          "paragraphText": "• Poésie lyrique : poésie qui exprime les émotions, les sentiments, les passions et les espoirs.\nLa leçon la nomme la poésie du cœur ; exemple : Victor Hugo, Les Contemplations.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p01_q2",
            "type": "mcq",
            "prompt": "La poésie lyrique est appelée :",
            "options": [
              "La poésie du cœur",
              "La poésie de la guerre uniquement",
              "La poésie de l'enseignement scolaire",
              "La poésie impersonnelle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La séance présente la poésie lyrique comme la poésie du cœur, expression des émotions et des sentiments."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les thèmes lyriques",
          "stepTheme": "Les thèmes lyriques",
          "stepBadge": "Les thèmes lyriques",
          "paragraphText": "Les thèmes abordés par la poésie lyrique sont l'amour, la mort, la nostalgie et la fuite du temps.\nLa leçon ajoute la communion avec la nature, le destin et le sacré.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p01_q3",
            "type": "mcq",
            "prompt": "Parmi ces thèmes, lequel est un thème lyrique selon la leçon ?",
            "options": [
              "La fuite du temps",
              "La technique agricole",
              "Le commerce maritime",
              "Les règles du football"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La fuite du temps figure dans la liste des thèmes lyriques, avec l'amour, la mort, la nostalgie, la nature, le destin et le sacré."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les marques du lyrisme",
          "stepTheme": "Les marques du lyrisme",
          "stepBadge": "Les marques du lyrisme",
          "paragraphText": "Les marques lyriques comprennent l'emploi de la première personne du singulier (je, moi, me) et les apostrophes.\nS'y ajoutent le vocabulaire des émotions, une ponctuation expressive, les adverbes d'intensité et les figures de style comme l'hyperbole.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p01_q4",
            "type": "mcq",
            "prompt": "Une marque caractéristique de la poésie lyrique est :",
            "options": [
              "L'emploi prédominant de la troisième personne sans émotion",
              "L'emploi de la première personne du singulier",
              "L'absence de toute figure de style",
              "Un style cérémonial et grandiloquent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La première personne du singulier est la première marque listée pour la poésie lyrique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La ponctuation expressive n'est pas neutre",
          "stepTheme": "La ponctuation expressive n'est pas neutre",
          "stepBadge": "La ponctuation expressive n'est pas neutre",
          "paragraphText": "Piège : croire qu'un poème rempli de points d'exclamation et d'interrogation est impersonnel.\nUne ponctuation expressive fait partie des marques de la poésie lyrique, comme du poème satirique, car elle traduit l'émotion du poète.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p01_q5",
            "type": "mcq",
            "prompt": "Une ponctuation expressive (exclamations, interrogations) est, selon la leçon, une marque :",
            "options": [
              "De la seule poésie parnassienne",
              "D'aucun genre poétique",
              "De la poésie lyrique",
              "Des textes administratifs"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La liste des marques lyriques inclut une ponctuation expressive."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le poème lyrique de Victor Hugo",
          "stepTheme": "Le poème lyrique de Victor Hugo",
          "stepBadge": "Le poème lyrique de Victor Hugo",
          "paragraphText": "Exemple du corpus : le texte 1, tiré des Contemplations de Victor Hugo (1856), commence par « J'ai cueilli cette fleur pour toi sur la colline ».\nLe poète y offre une fleur à sa bien-aimée et y exprime sa tristesse : il est présenté comme le poème lyrique du corpus.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p01_q6",
            "type": "mcq",
            "prompt": "Le texte 1 du corpus, de Victor Hugo, est présenté comme :",
            "options": [
              "Un poème épique",
              "Un poème didactique",
              "Un poème satirique",
              "Un poème lyrique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le corpus intitule ce texte de Hugo, tiré des Contemplations, poème lyrique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p01_q1",
          "type": "mcq",
          "prompt": "La poésie parle particulièrement :",
          "options": [
            "À la seule raison comptable",
            "À l'imagination et à la sensibilité",
            "Aux règles de la tragédie",
            "À la mémoire des dates uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la fin de la définition de la poésie donnée dans la séance 1."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p01_q2",
          "type": "mcq",
          "prompt": "La poésie lyrique est appelée :",
          "options": [
            "La poésie du cœur",
            "La poésie de la guerre uniquement",
            "La poésie de l'enseignement scolaire",
            "La poésie impersonnelle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La séance présente la poésie lyrique comme la poésie du cœur, expression des émotions et des sentiments."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p01_q3",
          "type": "mcq",
          "prompt": "Parmi ces thèmes, lequel est un thème lyrique selon la leçon ?",
          "options": [
            "La fuite du temps",
            "La technique agricole",
            "Le commerce maritime",
            "Les règles du football"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fuite du temps figure dans la liste des thèmes lyriques, avec l'amour, la mort, la nostalgie, la nature, le destin et le sacré."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p01_q4",
          "type": "mcq",
          "prompt": "Une marque caractéristique de la poésie lyrique est :",
          "options": [
            "L'emploi prédominant de la troisième personne sans émotion",
            "L'emploi de la première personne du singulier",
            "L'absence de toute figure de style",
            "Un style cérémonial et grandiloquent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La première personne du singulier est la première marque listée pour la poésie lyrique."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p01_q5",
          "type": "mcq",
          "prompt": "Une ponctuation expressive (exclamations, interrogations) est, selon la leçon, une marque :",
          "options": [
            "De la seule poésie parnassienne",
            "D'aucun genre poétique",
            "De la poésie lyrique",
            "Des textes administratifs"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La liste des marques lyriques inclut une ponctuation expressive."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p01_q6",
          "type": "mcq",
          "prompt": "Le texte 1 du corpus, de Victor Hugo, est présenté comme :",
          "options": [
            "Un poème épique",
            "Un poème didactique",
            "Un poème satirique",
            "Un poème lyrique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le corpus intitule ce texte de Hugo, tiré des Contemplations, poème lyrique."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p02",
      "order": 2,
      "title": "La poésie épique et la poésie didactique",
      "summary": "Distinguer la poésie épique, qui célèbre les hauts faits héroïques, et la poésie didactique, qui instruit.",
      "conceptExplanation": "La poésie épique est généralement un long poème narratif et descriptif portant sur des événements qui se sont déroulés dans des temps lointains, au-delà de la mémoire humaine (Antiquité, Moyen Âge). Son but est de célébrer les hauts faits héroïques d'hommes et de femmes extraordinaires. Exemples : l'Iliade et l'Odyssée d'Homère. Les thèmes abordés sont la guerre, la bravoure, le courage, la nation. Les marques sont : l'emploi prédominant de la troisième personne, les apostrophes, le vocabulaire du merveilleux et du fantastique, les évaluatifs mélioratifs, la présence de verbes d'action et d'adverbes d'intensité, les figures de style, et un style cérémonial, grandiloquent. Le poème épique du corpus est Les Lusiades de Luis de Camoès, qui célèbre des héros portugais.\nLa poésie didactique se différencie par l'intention bien précise et bien déclarée de son auteur à faire apprendre quelque chose à son lecteur : elle vise à apporter un enseignement, à instruire. Exemple : les Fables de La Fontaine. Les thèmes abordés sont relatifs aux différents domaines de la vie (la science, les valeurs morales, les relations sociales). Les marques sont : l'emploi prédominant de la troisième personne, les évaluatifs mélioratifs, le lexique à valeur d'explication et de justification, et les figures de style. Le poème didactique du corpus est Le Laboureur et ses enfants de Jean de La Fontaine, dont la morale est que le travail est un trésor.",
      "keyRule": "Épique : long poème des temps lointains qui célèbre des héros, style grandiloquent ; didactique : intention déclarée d'instruire, comme les Fables.",
      "formulas": [],
      "workedExample": {
        "title": "Lire Le Laboureur et ses enfants comme un poème didactique",
        "statement": "Montre, pas à pas, que la fable de La Fontaine citée dans le corpus est un poème didactique.",
        "methodSteps": [
          "Relever le récit : un riche laboureur, sentant sa mort prochaine, fait venir ses enfants et leur annonce un trésor caché dans leur héritage.",
          "Suivre l'action : les fils retournent le champ deçà, delà, partout, et au bout de l'an il rapporte davantage ; d'argent, point de caché.",
          "Dégager l'enseignement explicite de la fin : le père fut sage de leur montrer avant sa mort que le travail est un trésor.",
          "Conclure : l'intention d'instruire est bien précise et déclarée, c'est un poème didactique."
        ],
        "conclusion": "La fable instruit par un récit : son enseignement final, le travail est un trésor, marque le genre didactique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La poésie épique",
          "stepTheme": "La poésie épique",
          "stepBadge": "La poésie épique",
          "paragraphText": "• Poésie épique : long poème narratif et descriptif portant sur des événements de temps lointains, au-delà de la mémoire humaine.\nSon but est de célébrer les hauts faits héroïques d'hommes et de femmes extraordinaires.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p02_q1",
            "type": "mcq",
            "prompt": "Le but de la poésie épique est de :",
            "options": [
              "Critiquer les vices des hommes",
              "Célébrer les hauts faits héroïques d'hommes et de femmes extraordinaires",
              "Exprimer uniquement les sentiments du poète",
              "Donner une leçon de morale domestique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le but énoncé dans la définition de la poésie épique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La poésie didactique",
          "stepTheme": "La poésie didactique",
          "stepBadge": "La poésie didactique",
          "paragraphText": "• Poésie didactique : poésie dont l'auteur a l'intention bien précise et bien déclarée de faire apprendre quelque chose à son lecteur.\nElle vise à apporter un enseignement, à instruire ; exemple : les Fables de La Fontaine.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p02_q2",
            "type": "mcq",
            "prompt": "La poésie didactique vise à :",
            "options": [
              "Célébrer des héros anciens",
              "Exprimer la nostalgie",
              "Apporter un enseignement, instruire",
              "Rejeter le moi pour la seule beauté"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La définition insiste sur l'intention déclarée d'instruire le lecteur."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les marques de l'épique",
          "stepTheme": "Les marques de l'épique",
          "stepBadge": "Les marques de l'épique",
          "paragraphText": "Les marques épiques comprennent l'emploi prédominant de la troisième personne et le vocabulaire du merveilleux et du fantastique.\nLe style y est cérémonial, grandiloquent, avec des verbes d'action et des évaluatifs mélioratifs.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p02_q3",
            "type": "mcq",
            "prompt": "Le style de la poésie épique est décrit comme :",
            "options": [
              "Cérémonial et grandiloquent",
              "Familier et sans images",
              "Uniquement interrogatif",
              "Impersonnel et sec"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La liste des marques épiques se termine par un style cérémonial, grandiloquent."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les thèmes épiques et didactiques",
          "stepTheme": "Les thèmes épiques et didactiques",
          "stepBadge": "Les thèmes épiques et didactiques",
          "paragraphText": "Thèmes épiques : la guerre, la bravoure, le courage, la nation.\nThèmes didactiques : les différents domaines de la vie, comme la science, les valeurs morales et les relations sociales.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p02_q4",
            "type": "mcq",
            "prompt": "La bravoure et la guerre sont des thèmes de la poésie :",
            "options": [
              "Lyrique uniquement",
              "Didactique uniquement",
              "Parnassienne uniquement",
              "Épique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La guerre, la bravoure, le courage et la nation sont les thèmes listés pour la poésie épique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Troisième personne : épique et didactique la partagent",
          "stepTheme": "Troisième personne : épique et didactique la partagent",
          "stepBadge": "Troisième personne : épique et didactique la partagent",
          "paragraphText": "Piège : déduire le genre d'un poème de la seule troisième personne.\nL'emploi prédominant de la troisième personne est une marque commune à la poésie épique et à la poésie didactique : il faut regarder aussi le but, célébrer des héros ou instruire.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p02_q5",
            "type": "mcq",
            "prompt": "L'emploi prédominant de la troisième personne est une marque :",
            "options": [
              "De la seule poésie lyrique",
              "Commune à la poésie épique et à la poésie didactique",
              "D'aucun genre du corpus",
              "De la seule poésie engagée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les deux listes de marques, épique et didactique, mentionnent l'emploi prédominant de la troisième personne."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les Lusiades, poème épique du corpus",
          "stepTheme": "Les Lusiades, poème épique du corpus",
          "stepBadge": "Les Lusiades, poème épique du corpus",
          "paragraphText": "Exemple du corpus : Les Lusiades de Luis de Camoès célèbrent des héros portugais, leurs conquêtes et leur courage.\nLa leçon cite aussi l'Iliade et l'Odyssée d'Homère comme exemples de poésie épique.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p02_q6",
            "type": "mcq",
            "prompt": "L'Iliade et l'Odyssée d'Homère sont les exemples donnés pour :",
            "options": [
              "La poésie satirique",
              "La poésie didactique",
              "La poésie épique",
              "La poésie parnassienne"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ces deux œuvres d'Homère sont citées comme exemples dans la partie sur la poésie épique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p02_q1",
          "type": "mcq",
          "prompt": "Le but de la poésie épique est de :",
          "options": [
            "Critiquer les vices des hommes",
            "Célébrer les hauts faits héroïques d'hommes et de femmes extraordinaires",
            "Exprimer uniquement les sentiments du poète",
            "Donner une leçon de morale domestique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le but énoncé dans la définition de la poésie épique."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p02_q2",
          "type": "mcq",
          "prompt": "La poésie didactique vise à :",
          "options": [
            "Célébrer des héros anciens",
            "Exprimer la nostalgie",
            "Apporter un enseignement, instruire",
            "Rejeter le moi pour la seule beauté"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La définition insiste sur l'intention déclarée d'instruire le lecteur."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p02_q3",
          "type": "mcq",
          "prompt": "Le style de la poésie épique est décrit comme :",
          "options": [
            "Cérémonial et grandiloquent",
            "Familier et sans images",
            "Uniquement interrogatif",
            "Impersonnel et sec"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La liste des marques épiques se termine par un style cérémonial, grandiloquent."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p02_q4",
          "type": "mcq",
          "prompt": "La bravoure et la guerre sont des thèmes de la poésie :",
          "options": [
            "Lyrique uniquement",
            "Didactique uniquement",
            "Parnassienne uniquement",
            "Épique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La guerre, la bravoure, le courage et la nation sont les thèmes listés pour la poésie épique."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p02_q5",
          "type": "mcq",
          "prompt": "L'emploi prédominant de la troisième personne est une marque :",
          "options": [
            "De la seule poésie lyrique",
            "Commune à la poésie épique et à la poésie didactique",
            "D'aucun genre du corpus",
            "De la seule poésie engagée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les deux listes de marques, épique et didactique, mentionnent l'emploi prédominant de la troisième personne."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p02_q6",
          "type": "mcq",
          "prompt": "L'Iliade et l'Odyssée d'Homère sont les exemples donnés pour :",
          "options": [
            "La poésie satirique",
            "La poésie didactique",
            "La poésie épique",
            "La poésie parnassienne"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ces deux œuvres d'Homère sont citées comme exemples dans la partie sur la poésie épique."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p03",
      "order": 3,
      "title": "La poésie satirique",
      "summary": "Définir la poésie satirique, ses thèmes et ses marques, et l'identifier dans Les Châtiments de Victor Hugo.",
      "conceptExplanation": "Le poème satirique critique les vices et les ridicules des hommes, qu'il s'agisse d'individus ou de groupes sociaux, ou encore de toute une société. Le texte satirique permet de dévaloriser l'adversaire, souvent en le caricaturant, en ayant recours à l'exagération. Exemple : Monsieur Prudhomme de Paul Verlaine.\nLes thèmes abordés sont la société, la politique, les rapports entre les hommes et les institutions. Les marques sont : le vocabulaire de la dénonciation (champs lexicaux), une ponctuation expressive (points d'exclamation, points d'interrogation), la présence d'adverbes d'intensité, et l'emploi des figures de style (comparaisons, métaphores, hyperboles, accumulation).\nLe poème satirique du corpus est un extrait des Châtiments de Victor Hugo, qui raconte le meurtre juridique, Charlet assassiné sur la place publique, et dénonce celui qui a traîné les infortunés au supplice et lié leurs mains sur la bascule, en l'appelant avec ironie « Ô sauveur, ô héros » et « César », lui dont Dieu fait sortir, au milieu des dons de la nature, la guillotine.",
      "keyRule": "Poésie satirique : critiquer les vices et les ridicules des hommes, dévaloriser l'adversaire en le caricaturant et en exagérant.",
      "formulas": [],
      "workedExample": {
        "title": "Caractériser le genre de l'extrait des Châtiments (situation d'évaluation de la séance 2)",
        "statement": "Après lecture de l'extrait des Châtiments de Victor Hugo, relève les champs lexicaux de l'injustice et de la souffrance, puis caractérise le genre poétique.",
        "methodSteps": [
          "Relever le champ lexical de l'injustice : meurtre juridique, assassiné, place publique, traîné, mains liées, César.",
          "Relever le champ lexical de la souffrance : infortuné, supplice, mains liées, guillotine.",
          "Constater que ce vocabulaire de dénonciation critique un homme et ses actes, en le dévalorisant.",
          "Conclure : nous avons un poème satirique."
        ],
        "conclusion": "Champs lexicaux de l'injustice et de la souffrance au service d'une dénonciation : l'extrait est un poème satirique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le poème satirique",
          "stepTheme": "Le poème satirique",
          "stepBadge": "Le poème satirique",
          "paragraphText": "• Poème satirique : poème qui critique les vices et les ridicules des hommes, individus, groupes sociaux ou société entière.\nIl permet de dévaloriser l'adversaire, souvent en le caricaturant, en ayant recours à l'exagération.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p03_q1",
            "type": "mcq",
            "prompt": "Le poème satirique critique principalement :",
            "options": [
              "La fuite du temps",
              "Les vices et les ridicules des hommes",
              "La beauté de la nature",
              "Les héros de l'Antiquité"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition d'ouverture de la partie sur la poésie satirique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Caricature et exagération",
          "stepTheme": "Caricature et exagération",
          "stepBadge": "Caricature et exagération",
          "paragraphText": "Le texte satirique dévalorise l'adversaire, souvent en le caricaturant.\nIl a pour cela recours à l'exagération.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p03_q2",
            "type": "mcq",
            "prompt": "Pour dévaloriser l'adversaire, le texte satirique recourt souvent :",
            "options": [
              "À la discrétion et à la mesure",
              "À la caricature et à l'exagération",
              "Au silence",
              "À la description scientifique neutre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La définition précise que la dévalorisation passe souvent par la caricature et l'exagération."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les thèmes et marques satiriques",
          "stepTheme": "Les thèmes et marques satiriques",
          "stepBadge": "Les thèmes et marques satiriques",
          "paragraphText": "Thèmes satiriques : la société, la politique, les rapports entre les hommes, les institutions.\nMarques : le vocabulaire de la dénonciation, une ponctuation expressive, des adverbes d'intensité et des figures de style.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p03_q3",
            "type": "mcq",
            "prompt": "Une marque de la poésie satirique est :",
            "options": [
              "Le vocabulaire de la dénonciation",
              "Le lexique à valeur d'explication scolaire",
              "Le rejet du moi pour la beauté seule",
              "Le vocabulaire du merveilleux antique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le vocabulaire de la dénonciation ouvre la liste des marques satiriques."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Identifier un poème satirique par ses champs lexicaux",
          "stepTheme": "Identifier un poème satirique par ses champs lexicaux",
          "stepBadge": "Identifier un poème satirique par ses champs lexicaux",
          "paragraphText": "Méthode : relever les champs lexicaux dominants du poème.\nDans Les Châtiments, les champs lexicaux de l'injustice et de la souffrance montrent une dénonciation : le genre est satirique.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p03_q4",
            "type": "mcq",
            "prompt": "Dans l'extrait des Châtiments, le champ lexical de l'injustice comprend notamment :",
            "options": [
              "Fleur, colline et bien-aimée",
              "Travail, champ et trésor",
              "Meurtre juridique, assassiné et place publique",
              "Gloire, lauriers et conquêtes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé de la situation d'évaluation relève meurtre juridique, assassiné, place publique, traîné, mains liées et César pour l'injustice."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L'éloge apparent peut être une ironie satirique",
          "stepTheme": "L'éloge apparent peut être une ironie satirique",
          "stepBadge": "L'éloge apparent peut être une ironie satirique",
          "paragraphText": "Piège : prendre « Ô sauveur, ô héros » pour un éloge sincère dans Les Châtiments.\nDans ce poème satirique, ces apostrophes dévalorisent l'adversaire dénoncé pour le supplice des infortunés et la guillotine.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p03_q5",
            "type": "mcq",
            "prompt": "Dans Les Châtiments, les mots « sauveur » et « héros » adressés à César servent, dans ce poème satirique, à :",
            "options": [
              "Célébrer sincèrement un héros épique",
              "Dévaloriser l'adversaire dénoncé",
              "Instruire les enfants au travail",
              "Exprimer la nostalgie du poète"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le poème est satirique : il critique et dévalorise celui qu'il feint de louer, auteur des supplices dénoncés."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Monsieur Prudhomme, exemple satirique",
          "stepTheme": "Monsieur Prudhomme, exemple satirique",
          "stepBadge": "Monsieur Prudhomme, exemple satirique",
          "paragraphText": "Exemple cité par la leçon : Monsieur Prudhomme de Paul Verlaine illustre la poésie satirique.\nLe corpus donne aussi l'extrait des Châtiments de Victor Hugo comme poème satirique.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p03_q6",
            "type": "mcq",
            "prompt": "Monsieur Prudhomme de Paul Verlaine est l'exemple donné pour :",
            "options": [
              "La poésie épique",
              "La poésie lyrique",
              "La poésie didactique",
              "La poésie satirique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est l'exemple placé à la fin de la définition de la poésie satirique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p03_q1",
          "type": "mcq",
          "prompt": "Le poème satirique critique principalement :",
          "options": [
            "La fuite du temps",
            "Les vices et les ridicules des hommes",
            "La beauté de la nature",
            "Les héros de l'Antiquité"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition d'ouverture de la partie sur la poésie satirique."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p03_q2",
          "type": "mcq",
          "prompt": "Pour dévaloriser l'adversaire, le texte satirique recourt souvent :",
          "options": [
            "À la discrétion et à la mesure",
            "À la caricature et à l'exagération",
            "Au silence",
            "À la description scientifique neutre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La définition précise que la dévalorisation passe souvent par la caricature et l'exagération."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p03_q3",
          "type": "mcq",
          "prompt": "Une marque de la poésie satirique est :",
          "options": [
            "Le vocabulaire de la dénonciation",
            "Le lexique à valeur d'explication scolaire",
            "Le rejet du moi pour la beauté seule",
            "Le vocabulaire du merveilleux antique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le vocabulaire de la dénonciation ouvre la liste des marques satiriques."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p03_q4",
          "type": "mcq",
          "prompt": "Dans l'extrait des Châtiments, le champ lexical de l'injustice comprend notamment :",
          "options": [
            "Fleur, colline et bien-aimée",
            "Travail, champ et trésor",
            "Meurtre juridique, assassiné et place publique",
            "Gloire, lauriers et conquêtes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé de la situation d'évaluation relève meurtre juridique, assassiné, place publique, traîné, mains liées et César pour l'injustice."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p03_q5",
          "type": "mcq",
          "prompt": "Dans Les Châtiments, les mots « sauveur » et « héros » adressés à César servent, dans ce poème satirique, à :",
          "options": [
            "Célébrer sincèrement un héros épique",
            "Dévaloriser l'adversaire dénoncé",
            "Instruire les enfants au travail",
            "Exprimer la nostalgie du poète"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le poème est satirique : il critique et dévalorise celui qu'il feint de louer, auteur des supplices dénoncés."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p03_q6",
          "type": "mcq",
          "prompt": "Monsieur Prudhomme de Paul Verlaine est l'exemple donné pour :",
          "options": [
            "La poésie épique",
            "La poésie lyrique",
            "La poésie didactique",
            "La poésie satirique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est l'exemple placé à la fin de la définition de la poésie satirique."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p04",
      "order": 4,
      "title": "La poésie parnassienne et la poésie engagée",
      "summary": "Opposer la poésie parnassienne, impersonnelle et vouée à la beauté, et la poésie engagée, qui défend une cause.",
      "conceptExplanation": "La poésie parnassienne est une réaction contre le romantisme. Elle rejette le « moi », fortement présent dans la poésie romantique, pour se tourner davantage vers une poésie impersonnelle. Son but serait uniquement la beauté. Son slogan est : « L'art pour l'art ». Ses thèmes principaux sont les mythes, la description de la nature, le pittoresque, l'exotisme, l'histoire, l'Antiquité, l'archéologie. Exemple donné : Leconte de Lisle, Poèmes antiques.\nLa poésie engagée est une poésie qui cherche, par le pouvoir des mots et la musicalité de la langue, à défendre un point de vue, à réfuter une thèse, à combattre ou à soutenir une cause. Elle prend forme grâce à des procédés stylistiques tels que les figures d'analogie et l'emphase. Le registre utilisé est le plus souvent pathétique ou épique. Le vocabulaire s'appuie sur les champs lexicaux de la violence, de la misère, de la souffrance, de l'injustice ou de l'espoir. Exemple : Aimé Césaire, Cahier d'un retour au pays natal.",
      "keyRule": "Parnassienne : rejet du moi, poésie impersonnelle, « L'art pour l'art » ; engagée : défendre ou combattre une cause par le pouvoir des mots.",
      "formulas": [],
      "workedExample": {
        "title": "Distinguer un poème parnassien d'un poème engagé",
        "statement": "On te donne deux repères : un poème impersonnel voué à la seule beauté sur un mythe antique, et un poème qui combat une injustice avec un vocabulaire de la souffrance. Classe-les.",
        "methodSteps": [
          "Pour le premier : rejet du moi, poésie impersonnelle, but unique la beauté et thème de l'Antiquité : c'est la poésie parnassienne.",
          "Pour le second : volonté de combattre une cause et champ lexical de l'injustice et de la souffrance : c'est la poésie engagée.",
          "Vérifier avec les exemples de la leçon : Leconte de Lisle, Poèmes antiques, pour le Parnasse ; Aimé Césaire, Cahier d'un retour au pays natal, pour l'engagement."
        ],
        "conclusion": "Le critère décisif est le but : la beauté seule pour la poésie parnassienne, la défense d'une cause pour la poésie engagée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La poésie parnassienne",
          "stepTheme": "La poésie parnassienne",
          "stepBadge": "La poésie parnassienne",
          "paragraphText": "• Poésie parnassienne : réaction contre le romantisme, qui rejette le « moi » pour une poésie impersonnelle.\nSon but serait uniquement la beauté, et son slogan est « L'art pour l'art ».",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p04_q1",
            "type": "mcq",
            "prompt": "Le slogan de la poésie parnassienne est :",
            "options": [
              "L'art pour l'art",
              "Le travail est un trésor",
              "La poésie du cœur",
              "Défendre une cause à tout prix"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La séance 2 donne « L'art pour l'art » comme slogan du Parnasse, voué à la seule beauté."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La poésie engagée",
          "stepTheme": "La poésie engagée",
          "stepBadge": "La poésie engagée",
          "paragraphText": "• Poésie engagée : poésie qui cherche, par le pouvoir des mots et la musicalité de la langue, à défendre un point de vue, à réfuter une thèse, à combattre ou à soutenir une cause.\nSon registre est le plus souvent pathétique ou épique.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p04_q2",
            "type": "mcq",
            "prompt": "La poésie engagée cherche à :",
            "options": [
              "Rejeter toute cause",
              "Être impersonnelle et sans opinion",
              "Défendre un point de vue, réfuter une thèse, combattre ou soutenir une cause",
              "Décrire uniquement des mythes antiques"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition donnée dans la séance 2 pour la poésie engagée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les thèmes parnassiens",
          "stepTheme": "Les thèmes parnassiens",
          "stepBadge": "Les thèmes parnassiens",
          "paragraphText": "Les thèmes principaux de la poésie parnassienne sont les mythes, la description de la nature, le pittoresque et l'exotisme.\nLa leçon ajoute l'histoire, l'Antiquité et l'archéologie.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p04_q3",
            "type": "mcq",
            "prompt": "Parmi ces thèmes, lequel est un thème parnassien selon la leçon ?",
            "options": [
              "L'archéologie",
              "La dénonciation d'un supplice",
              "La morale du laboureur",
              "La nostalgie amoureuse uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'archéologie figure dans la liste des thèmes principaux du Parnasse, avec les mythes, l'exotisme et l'Antiquité."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le vocabulaire de la poésie engagée",
          "stepTheme": "Le vocabulaire de la poésie engagée",
          "stepBadge": "Le vocabulaire de la poésie engagée",
          "paragraphText": "Le vocabulaire de la poésie engagée s'appuie sur les champs lexicaux de la violence, de la misère, de la souffrance et de l'injustice.\nLa leçon ajoute aussi le champ lexical de l'espoir.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p04_q4",
            "type": "mcq",
            "prompt": "Le vocabulaire de la poésie engagée s'appuie notamment sur le champ lexical :",
            "options": [
              "Du pittoresque antique",
              "De l'injustice et de l'espoir",
              "Du trésor caché",
              "Des lauriers héroïques uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La séance cite la violence, la misère, la souffrance, l'injustice et l'espoir comme champs lexicaux de la poésie engagée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Parnasse et lyrisme romantique s'opposent sur le moi",
          "stepTheme": "Parnasse et lyrisme romantique s'opposent sur le moi",
          "stepBadge": "Parnasse et lyrisme romantique s'opposent sur le moi",
          "paragraphText": "Piège : confondre poésie parnassienne et poésie lyrique parce que toutes deux sont des poésies.\nLa poésie parnassienne rejette le « moi » fortement présent dans la poésie romantique, alors que la poésie lyrique emploie la première personne pour exprimer les sentiments.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p04_q5",
            "type": "mcq",
            "prompt": "La poésie parnassienne se distingue de la poésie romantique parce qu'elle :",
            "options": [
              "Exprime fortement le moi",
              "Rejette le moi pour une poésie impersonnelle",
              "Défend une cause politique",
              "Critique les vices par la caricature"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La définition du Parnasse insiste sur ce rejet du moi au profit d'une poésie impersonnelle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Césaire, exemple de poésie engagée",
          "stepTheme": "Césaire, exemple de poésie engagée",
          "stepBadge": "Césaire, exemple de poésie engagée",
          "paragraphText": "Exemple cité : Aimé Césaire, Cahier d'un retour au pays natal, illustre la poésie engagée.\nPour la poésie parnassienne, l'exemple est Leconte de Lisle, Poèmes antiques.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p04_q6",
            "type": "mcq",
            "prompt": "Le Cahier d'un retour au pays natal d'Aimé Césaire est l'exemple donné pour :",
            "options": [
              "La poésie parnassienne",
              "La poésie didactique",
              "La poésie épique antique",
              "La poésie engagée"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est l'exemple placé à la fin de la définition de la poésie engagée."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p04_q1",
          "type": "mcq",
          "prompt": "Le slogan de la poésie parnassienne est :",
          "options": [
            "L'art pour l'art",
            "Le travail est un trésor",
            "La poésie du cœur",
            "Défendre une cause à tout prix"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La séance 2 donne « L'art pour l'art » comme slogan du Parnasse, voué à la seule beauté."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p04_q2",
          "type": "mcq",
          "prompt": "La poésie engagée cherche à :",
          "options": [
            "Rejeter toute cause",
            "Être impersonnelle et sans opinion",
            "Défendre un point de vue, réfuter une thèse, combattre ou soutenir une cause",
            "Décrire uniquement des mythes antiques"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition donnée dans la séance 2 pour la poésie engagée."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p04_q3",
          "type": "mcq",
          "prompt": "Parmi ces thèmes, lequel est un thème parnassien selon la leçon ?",
          "options": [
            "L'archéologie",
            "La dénonciation d'un supplice",
            "La morale du laboureur",
            "La nostalgie amoureuse uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'archéologie figure dans la liste des thèmes principaux du Parnasse, avec les mythes, l'exotisme et l'Antiquité."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p04_q4",
          "type": "mcq",
          "prompt": "Le vocabulaire de la poésie engagée s'appuie notamment sur le champ lexical :",
          "options": [
            "Du pittoresque antique",
            "De l'injustice et de l'espoir",
            "Du trésor caché",
            "Des lauriers héroïques uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La séance cite la violence, la misère, la souffrance, l'injustice et l'espoir comme champs lexicaux de la poésie engagée."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p04_q5",
          "type": "mcq",
          "prompt": "La poésie parnassienne se distingue de la poésie romantique parce qu'elle :",
          "options": [
            "Exprime fortement le moi",
            "Rejette le moi pour une poésie impersonnelle",
            "Défend une cause politique",
            "Critique les vices par la caricature"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La définition du Parnasse insiste sur ce rejet du moi au profit d'une poésie impersonnelle."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p04_q6",
          "type": "mcq",
          "prompt": "Le Cahier d'un retour au pays natal d'Aimé Césaire est l'exemple donné pour :",
          "options": [
            "La poésie parnassienne",
            "La poésie didactique",
            "La poésie épique antique",
            "La poésie engagée"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est l'exemple placé à la fin de la définition de la poésie engagée."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p05",
      "order": 5,
      "title": "Repères : quelques poètes et l'identification des genres poétiques",
      "summary": "Classer quelques poètes ivoiriens, africains et étrangers cités par les séances et récapituler les exemples des genres poétiques.",
      "conceptExplanation": "La séance 2 présente quelques poètes. En littérature ivoirienne : Amoy Fatho (Chaque aurore est une chance) et Bernard Dadié (La Ronde des jours). En littérature africaine : Léopold Sédar Senghor (Ethiopiques) et Maxime N'Debeka (L'Oseille, les citrons). En littérature étrangère : Léon Gontran Damas (Pigments) et Victor Hugo (Les Contemplations).\nCes repères s'ajoutent aux exemples donnés pour chaque genre : Victor Hugo, Les Contemplations, pour la poésie lyrique ; Homère, l'Iliade et l'Odyssée, pour la poésie épique ; La Fontaine, les Fables, pour la poésie didactique ; Paul Verlaine, Monsieur Prudhomme, pour la poésie satirique ; Leconte de Lisle, Poèmes antiques, pour la poésie parnassienne ; Aimé Césaire, Cahier d'un retour au pays natal, pour la poésie engagée.\nLa méthode d'identification reste la même : relever les marques du poème (personne employée, thèmes, vocabulaire, figures, but du poète), puis les rapprocher de la définition du genre correspondant, comme dans les deux situations d'évaluation des séances 1 et 2.",
      "keyRule": "Repères : Dadié et Amoy Fatho (Ivoiriens), Senghor et N'Debeka (Africains), Damas et Hugo (étrangers) ; chaque genre a son exemple de référence.",
      "formulas": [],
      "workedExample": {
        "title": "Classer six poètes selon leur origine",
        "statement": "Classe Amoy Fatho, Bernard Dadié, Léopold Sédar Senghor, Maxime N'Debeka, Léon Gontran Damas et Victor Hugo selon la présentation de la séance 2.",
        "methodSteps": [
          "Littérature ivoirienne : Amoy Fatho, avec Chaque aurore est une chance, et Bernard Dadié, avec La Ronde des jours.",
          "Littérature africaine : Léopold Sédar Senghor, avec Ethiopiques, et Maxime N'Debeka, avec L'Oseille, les citrons.",
          "Littérature étrangère : Léon Gontran Damas, avec Pigments, et Victor Hugo, avec Les Contemplations."
        ],
        "conclusion": "Deux poètes par rubrique : Ivoiriens, Africains et étrangers, chacun associé à l'œuvre citée par la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les poètes ivoiriens cités",
          "stepTheme": "Les poètes ivoiriens cités",
          "stepBadge": "Les poètes ivoiriens cités",
          "paragraphText": "• Poètes ivoiriens de la séance : Amoy Fatho, avec Chaque aurore est une chance, et Bernard Dadié, avec La Ronde des jours.\nLe poème « Je vous remercie mon Dieu » de Bernard Dadié, tiré de La Ronde des jours, sert de support à la séance 1.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p05_q1",
            "type": "mcq",
            "prompt": "Parmi ces poètes, lequel est cité dans la littérature ivoirienne ?",
            "options": [
              "Maxime N'Debeka",
              "Amoy Fatho",
              "Léon Gontran Damas",
              "Victor Hugo"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Amoy Fatho figure, avec Bernard Dadié, dans la rubrique de la littérature ivoirienne."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les poètes africains cités",
          "stepTheme": "Les poètes africains cités",
          "stepBadge": "Les poètes africains cités",
          "paragraphText": "En littérature africaine, la séance cite Léopold Sédar Senghor, avec Ethiopiques, et Maxime N'Debeka, avec L'Oseille, les citrons.\nEthiopiques est aussi le recueil du texte CHAKA étudié dans le groupement de textes théâtraux.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p05_q2",
            "type": "mcq",
            "prompt": "Ethiopiques est l'œuvre citée pour :",
            "options": [
              "Amoy Fatho",
              "Victor Hugo",
              "Léopold Sédar Senghor",
              "Paul Verlaine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La présentation des poètes associe Ethiopiques à Léopold Sédar Senghor, en littérature africaine."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les poètes étrangers cités",
          "stepTheme": "Les poètes étrangers cités",
          "stepBadge": "Les poètes étrangers cités",
          "paragraphText": "En littérature étrangère, la séance cite Léon Gontran Damas, avec Pigments, et Victor Hugo, avec Les Contemplations.\nLes Contemplations sont aussi l'exemple de la poésie lyrique.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p05_q3",
            "type": "mcq",
            "prompt": "Pigments est l'œuvre citée pour :",
            "options": [
              "Bernard Dadié",
              "Léon Gontran Damas",
              "Aimé Césaire",
              "Leconte de Lisle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La rubrique de la littérature étrangère associe Pigments à Léon Gontran Damas."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Identifier un genre par ses marques",
          "stepTheme": "Identifier un genre par ses marques",
          "stepBadge": "Identifier un genre par ses marques",
          "paragraphText": "Méthode : relever la personne employée, les thèmes, le vocabulaire et les figures du poème, puis les comparer aux définitions des genres.\nC'est la démarche des situations d'évaluation : indices de la personne et hyperboles conduisent au poème lyrique chez Dadié, champs lexicaux de l'injustice et de la souffrance au poème satirique chez Hugo.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p05_q4",
            "type": "mcq",
            "prompt": "Pour identifier le genre d'un poème, la démarche des séances consiste à :",
            "options": [
              "Choisir le genre au hasard",
              "Relever les marques du poème et les rapprocher des définitions des genres",
              "Lire uniquement le titre du recueil",
              "Compter les pages du livre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les deux corrigés des séances procèdent par relevés d'indices avant de nommer le genre poétique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Un même auteur peut illustrer plusieurs genres",
          "stepTheme": "Un même auteur peut illustrer plusieurs genres",
          "stepBadge": "Un même auteur peut illustrer plusieurs genres",
          "paragraphText": "Piège : enfermer Victor Hugo dans un seul genre poétique.\nHugo est cité pour Les Contemplations en poésie lyrique, et son extrait des Châtiments sert d'exemple de poème satirique : c'est le poème étudié, pas seulement l'auteur, qui détermine le genre.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p05_q5",
            "type": "mcq",
            "prompt": "Victor Hugo est cité dans les séances pour :",
            "options": [
              "Uniquement la poésie parnassienne",
              "Les Contemplations en poésie lyrique et Les Châtiments en poésie satirique",
              "Uniquement les Fables",
              "Aucune œuvre poétique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Hugo apparaît à la fois comme exemple lyrique, avec Les Contemplations, et comme support du poème satirique, avec Les Châtiments."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La Fontaine, exemple didactique",
          "stepTheme": "La Fontaine, exemple didactique",
          "stepBadge": "La Fontaine, exemple didactique",
          "paragraphText": "Exemple récapitulatif : les Fables de La Fontaine illustrent la poésie didactique.\nLe Laboureur et ses enfants, fable du corpus, se termine sur l'enseignement que le travail est un trésor.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p05_q6",
            "type": "mcq",
            "prompt": "Les Fables de La Fontaine sont l'exemple de référence pour :",
            "options": [
              "La poésie engagée",
              "La poésie épique",
              "La poésie parnassienne",
              "La poésie didactique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon donne les Fables comme exemple de la poésie didactique, qui vise à instruire."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p05_q1",
          "type": "mcq",
          "prompt": "Parmi ces poètes, lequel est cité dans la littérature ivoirienne ?",
          "options": [
            "Maxime N'Debeka",
            "Amoy Fatho",
            "Léon Gontran Damas",
            "Victor Hugo"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Amoy Fatho figure, avec Bernard Dadié, dans la rubrique de la littérature ivoirienne."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p05_q2",
          "type": "mcq",
          "prompt": "Ethiopiques est l'œuvre citée pour :",
          "options": [
            "Amoy Fatho",
            "Victor Hugo",
            "Léopold Sédar Senghor",
            "Paul Verlaine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La présentation des poètes associe Ethiopiques à Léopold Sédar Senghor, en littérature africaine."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p05_q3",
          "type": "mcq",
          "prompt": "Pigments est l'œuvre citée pour :",
          "options": [
            "Bernard Dadié",
            "Léon Gontran Damas",
            "Aimé Césaire",
            "Leconte de Lisle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La rubrique de la littérature étrangère associe Pigments à Léon Gontran Damas."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p05_q4",
          "type": "mcq",
          "prompt": "Pour identifier le genre d'un poème, la démarche des séances consiste à :",
          "options": [
            "Choisir le genre au hasard",
            "Relever les marques du poème et les rapprocher des définitions des genres",
            "Lire uniquement le titre du recueil",
            "Compter les pages du livre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les deux corrigés des séances procèdent par relevés d'indices avant de nommer le genre poétique."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p05_q5",
          "type": "mcq",
          "prompt": "Victor Hugo est cité dans les séances pour :",
          "options": [
            "Uniquement la poésie parnassienne",
            "Les Contemplations en poésie lyrique et Les Châtiments en poésie satirique",
            "Uniquement les Fables",
            "Aucune œuvre poétique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Hugo apparaît à la fois comme exemple lyrique, avec Les Contemplations, et comme support du poème satirique, avec Les Châtiments."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p05_q6",
          "type": "mcq",
          "prompt": "Les Fables de La Fontaine sont l'exemple de référence pour :",
          "options": [
            "La poésie engagée",
            "La poésie épique",
            "La poésie parnassienne",
            "La poésie didactique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon donne les Fables comme exemple de la poésie didactique, qui vise à instruire."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p06",
      "order": 6,
      "title": "Introduire Les Fleurs du mal : auteur, œuvre, contexte et axe d'étude",
      "summary": "Présenter Charles Baudelaire et Les Fleurs du mal, situer le contexte du XIXe siècle et formuler l'axe d'étude.",
      "conceptExplanation": "Charles Baudelaire est né à Paris en 1821 et y est mort en 1867. Il vécut une enfance malheureuse et ne pardonnera jamais à sa mère de s'être remariée après la mort de son père. Destiné à faire le droit, il choisit la vie de bohème du quartier latin. Les relations familiales devenues difficiles, il effectue plusieurs voyages en Orient (Île Maurice, Île de la Réunion), ce qui influence son goût pour l'exotisme. Il a traduit les œuvres d'Edgar Allan Poe.\nLes Fleurs du mal est un recueil de poèmes publié le 25 juin 1857, avec cinq sections ; en 1861, il compte six sections : Spleen et idéal, Tableau parisien, Le Vin, Les Fleurs du mal, Révolte, La Mort.\nContexte historique et littéraire : au XIXe siècle, après la Révolution française de 1789, plusieurs régimes politiques se succèdent ; la jeunesse, désœuvrée, est envahie par le mal du siècle, et les écrivains, minés par l'angoisse existentielle et la mélancolie, tentent d'extérioriser leurs sentiments emprunts de spleen. L'avènement des Fleurs du mal se situe dans la période du Symbolisme, courant littéraire qui utilise les symboles et met l'accent sur les valeurs suggestives du langage, et du Dandysme, culte de soi prônant l'extravagance.\nL'axe d'étude retenu est : la quête de l'ailleurs dans Les Fleurs du mal de Charles Baudelaire.",
      "keyRule": "Introduction des Fleurs du mal : Baudelaire (1821-1867), recueil de 1857 en cinq puis six sections, contexte du spleen et du Symbolisme, axe de la quête de l'ailleurs.",
      "formulas": [],
      "workedExample": {
        "title": "Introduire l'étude des Fleurs du mal",
        "statement": "Construis l'introduction à l'étude de l'œuvre intégrale poétique en suivant la séance 1.",
        "methodSteps": [
          "Présenter l'auteur : Charles Baudelaire, né à Paris en 1821 et mort en 1867, enfance malheureuse, vie de bohème au quartier latin, voyages en Orient qui influencent son goût pour l'exotisme.",
          "Présenter l'œuvre : Les Fleurs du mal, recueil de poèmes publié le 25 juin 1857 avec cinq sections, puis six sections en 1861.",
          "Situer le contexte : XIXe siècle, mal du siècle, angoisse existentielle et spleen, période du Symbolisme et du Dandysme.",
          "Annoncer l'axe d'étude : la quête de l'ailleurs dans Les Fleurs du mal."
        ],
        "conclusion": "L'introduction relie la vie de Baudelaire, la composition du recueil et le contexte du spleen à l'axe de la quête de l'ailleurs."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le Symbolisme selon la leçon",
          "stepTheme": "Le Symbolisme selon la leçon",
          "stepBadge": "Le Symbolisme selon la leçon",
          "paragraphText": "• Symbolisme : courant littéraire qui utilise les symboles et met l'accent sur les valeurs suggestives du langage.\nL'avènement des Fleurs du mal se situe dans la période du Symbolisme et du Dandysme.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p06_q1",
            "type": "mcq",
            "prompt": "Le Symbolisme est le courant qui :",
            "options": [
              "Utilise les symboles et met l'accent sur les valeurs suggestives du langage",
              "Rejette toute poésie impersonnelle",
              "Célèbre les héros de l'Antiquité en vers épiques",
              "Instruit par des fables"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition entre parenthèses donnée dans le contexte littéraire de l'introduction."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le Dandysme selon la leçon",
          "stepTheme": "Le Dandysme selon la leçon",
          "stepBadge": "Le Dandysme selon la leçon",
          "paragraphText": "• Dandysme : culte de soi, appréciation de ses caractéristiques prônant l'extravagance.\nIl est cité, avec le Symbolisme, comme courant de la période où paraissent Les Fleurs du mal.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p06_q2",
            "type": "mcq",
            "prompt": "Le Dandysme est défini dans la leçon comme :",
            "options": [
              "Un genre dramatique du XXe siècle",
              "Un culte de soi prônant l'extravagance",
              "Une forme de roman historique",
              "Le rejet du moi"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La parenthèse du contexte définit le Dandysme comme un culte de soi prônant l'extravagance."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les six sections du recueil",
          "stepTheme": "Les six sections du recueil",
          "stepBadge": "Les six sections du recueil",
          "paragraphText": "Les Fleurs du mal paraît en 1857 avec cinq sections, puis compte six sections en 1861.\nLes parties sont : Spleen et idéal, Tableau parisien, Le Vin, Les Fleurs du mal, Révolte et La Mort.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p06_q3",
            "type": "mcq",
            "prompt": "Parmi ces titres, lequel est une section des Fleurs du mal ?",
            "options": [
              "Les Contemplations",
              "Pigments",
              "Spleen et idéal",
              "Poèmes antiques"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Spleen et idéal est la première des six sections listées dans la présentation de l'œuvre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le contexte : le mal du siècle et le spleen",
          "stepTheme": "Le contexte : le mal du siècle et le spleen",
          "stepBadge": "Le contexte : le mal du siècle et le spleen",
          "paragraphText": "Au XIXe siècle, la jeunesse désœuvrée est envahie par le mal du siècle.\nLes écrivains, minés par l'angoisse existentielle et la mélancolie, tentent d'extérioriser leurs sentiments emprunts de spleen.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p06_q4",
            "type": "mcq",
            "prompt": "Les écrivains de ce contexte sont décrits comme minés par :",
            "options": [
              "La bravoure et le courage guerrier",
              "L'angoisse existentielle et la mélancolie",
              "La joie des indépendances",
              "Le goût du travail des champs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le contexte historique et littéraire parle d'écrivains minés par l'angoisse existentielle et la mélancolie."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les Fleurs du mal est un recueil de poèmes, pas un roman",
          "stepTheme": "Les Fleurs du mal est un recueil de poèmes, pas un roman",
          "stepBadge": "Les Fleurs du mal est un recueil de poèmes, pas un roman",
          "paragraphText": "Piège : la page de titre du résumé source annonce par erreur une œuvre narrative, mais le contenu fait foi.\nLes Fleurs du mal est un recueil de poèmes de Charles Baudelaire : c'est l'œuvre intégrale poétique de cette leçon.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p06_q5",
            "type": "mcq",
            "prompt": "Les Fleurs du mal de Charles Baudelaire est :",
            "options": [
              "Un roman en prose de Kourouma",
              "Une pièce de théâtre de Hugo",
              "Un recueil de poèmes",
              "Une fable de La Fontaine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La présentation de l'œuvre dit que Les Fleurs du mal est un recueil de poèmes publié en 1857."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'axe d'étude : la quête de l'ailleurs",
          "stepTheme": "L'axe d'étude : la quête de l'ailleurs",
          "stepBadge": "L'axe d'étude : la quête de l'ailleurs",
          "paragraphText": "Exemple d'axe d'étude : la quête de l'ailleurs dans Les Fleurs du mal de Charles Baudelaire.\nCe goût de l'ailleurs fait écho, dans la biographie, aux voyages de Baudelaire en Orient, qui influencent son goût pour l'exotisme.",
          "exercise": {
            "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p06_q6",
            "type": "mcq",
            "prompt": "L'axe d'étude retenu pour Les Fleurs du mal est :",
            "options": [
              "La satire des indépendances en Afrique",
              "La représentation du héros épique",
              "La déchéance d'un prince malinké",
              "La quête de l'ailleurs"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est l'axe formulé à la fin de l'introduction à l'étude de l'œuvre poétique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p06_q1",
          "type": "mcq",
          "prompt": "Le Symbolisme est le courant qui :",
          "options": [
            "Utilise les symboles et met l'accent sur les valeurs suggestives du langage",
            "Rejette toute poésie impersonnelle",
            "Célèbre les héros de l'Antiquité en vers épiques",
            "Instruit par des fables"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition entre parenthèses donnée dans le contexte littéraire de l'introduction."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p06_q2",
          "type": "mcq",
          "prompt": "Le Dandysme est défini dans la leçon comme :",
          "options": [
            "Un genre dramatique du XXe siècle",
            "Un culte de soi prônant l'extravagance",
            "Une forme de roman historique",
            "Le rejet du moi"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La parenthèse du contexte définit le Dandysme comme un culte de soi prônant l'extravagance."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p06_q3",
          "type": "mcq",
          "prompt": "Parmi ces titres, lequel est une section des Fleurs du mal ?",
          "options": [
            "Les Contemplations",
            "Pigments",
            "Spleen et idéal",
            "Poèmes antiques"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Spleen et idéal est la première des six sections listées dans la présentation de l'œuvre."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p06_q4",
          "type": "mcq",
          "prompt": "Les écrivains de ce contexte sont décrits comme minés par :",
          "options": [
            "La bravoure et le courage guerrier",
            "L'angoisse existentielle et la mélancolie",
            "La joie des indépendances",
            "Le goût du travail des champs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le contexte historique et littéraire parle d'écrivains minés par l'angoisse existentielle et la mélancolie."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p06_q5",
          "type": "mcq",
          "prompt": "Les Fleurs du mal de Charles Baudelaire est :",
          "options": [
            "Un roman en prose de Kourouma",
            "Une pièce de théâtre de Hugo",
            "Un recueil de poèmes",
            "Une fable de La Fontaine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La présentation de l'œuvre dit que Les Fleurs du mal est un recueil de poèmes publié en 1857."
        },
        {
          "id": "terminale_a1_francais_eoi_l11_oeuvre_integrale_poetique_p06_q6",
          "type": "mcq",
          "prompt": "L'axe d'étude retenu pour Les Fleurs du mal est :",
          "options": [
            "La satire des indépendances en Afrique",
            "La représentation du héros épique",
            "La déchéance d'un prince malinké",
            "La quête de l'ailleurs"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est l'axe formulé à la fin de l'introduction à l'étude de l'œuvre poétique."
        }
      ]
    }
  ]
};
