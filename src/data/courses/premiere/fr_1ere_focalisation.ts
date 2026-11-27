import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « La focalisation » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2345
export const FR_1ERE_PL_L06_FOCALISATION: CurriculumChapter = {
  "id": "premiere_a1_francais_pl_l06_focalisation",
  "subjectId": "francais",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 6,
  "title": "Leçon 6 : La focalisation",
  "summary": "Les élèves de Première A/C/D veulent renforcer leurs acquis en lecture et en production de textes divers : à partir des textes en annexe, ils s’exercent à identifier, à analyser et à utiliser judicieusement les différents types de focalisation, ou niveaux de narration.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2345",
  "points": [
    {
      "id": "premiere_a1_francais_pl_l06_focalisation_p01",
      "order": 1,
      "title": "Définir la focalisation et distinguer ses trois types",
      "summary": "Définir la focalisation comme point de vue du narrateur et situer les trois types selon ce que le narrateur sait par rapport aux personnages.",
      "conceptExplanation": "La focalisation est une technique de narration. Elle précise la position de celui qui raconte ou parle dans le texte. C’est pourquoi elle est aussi dite : point de vue. La focalisation, c’est donc le point de vue de celui qui conduit la narration dans un récit (roman, nouvelle, épopée…).\nIl existe trois types de focalisation selon la position occupée par le narrateur.\n• La focalisation externe : le narrateur ne rapporte que les apparences extérieures de l’histoire ; il en sait moins que les personnages — la leçon note : narrateur < personnage.\n• La focalisation interne : narrateur et personnage sont confondus ; le narrateur en sait autant que le personnage — narrateur = un personnage.\n• La focalisation zéro, ou point de vue omniscient : le narrateur connaît tout de l’histoire ; il en sait plus que les personnages — narrateur > personnages.",
      "keyRule": "Pour nommer une focalisation, compare ce que sait le narrateur à ce que savent les personnages : moins = externe, autant = interne, plus = zéro.",
      "formulas": [],
      "workedExample": {
        "title": "Classer les trois textes supports de la séance",
        "statement": "La séance donne trois textes d’appui : texte 1, Flaubert, Bouvard et Pécuchet ; texte 2, Flaubert, L’Éducation sentimentale ; texte 3, Balzac, incipit de Modeste Mignon. Associe chacun à son type de focalisation.",
        "methodSteps": [
          "Texte 1 : le narrateur décrit le boulevard, la chaleur et l’arrivée de deux hommes sans entrer dans leurs pensées — il en sait moins qu’eux : focalisation externe.",
          "Texte 2 : la scène est vue par Frédéric, qui « distinguait l’ombre de ses cils » — le narrateur en sait autant que le personnage : focalisation interne.",
          "Texte 3 : le narrateur de Balzac connaît les personnages et leurs précautions (« par excès de précaution ») — il en sait plus qu’eux : focalisation zéro.",
          "Chaque texte illustre donc l’un des trois types, dans l’ordre de présentation de la leçon."
        ],
        "conclusion": "Externe, interne, zéro : les trois textes supports correspondent aux trois comparaisons entre narrateur et personnages."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une technique de narration, un point de vue",
          "stepTheme": "Une technique de narration, un point de vue",
          "stepBadge": "Une technique de narration, un point de vue",
          "paragraphText": "• Focalisation : technique de narration qui précise la position de celui qui raconte ou parle dans le texte.\nElle est aussi dite « point de vue » : le point de vue de celui qui conduit la narration dans un récit (roman, nouvelle, épopée…).",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p01_q1",
            "type": "mcq",
            "prompt": "La focalisation précise, dans un récit :",
            "options": [
              "Le nombre de chapitres",
              "La position de celui qui raconte ou parle dans le texte",
              "La date d’écriture uniquement",
              "Le prix du livre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition de la notion : la focalisation précise la position du narrateur, d’où son autre nom, point de vue."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Trois types selon la position du narrateur",
          "stepTheme": "Trois types selon la position du narrateur",
          "stepBadge": "Trois types selon la position du narrateur",
          "paragraphText": "Propriété : il existe trois types de focalisation selon la position occupée par le narrateur.\nCe sont la focalisation externe, la focalisation interne et la focalisation zéro.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p01_q2",
            "type": "mcq",
            "prompt": "Combien de types de focalisation la leçon distingue-t-elle ?",
            "options": [
              "Deux",
              "Quatre",
              "Trois : externe, interne et zéro",
              "Un seul"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon présente successivement la focalisation externe, la focalisation interne et la focalisation zéro."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Comparer narrateur et personnages",
          "stepTheme": "Comparer narrateur et personnages",
          "stepBadge": "Comparer narrateur et personnages",
          "paragraphText": "Propriété : chaque type se résume par une comparaison.\n• Externe : narrateur < personnage\n• Interne : narrateur = un personnage\n• Zéro : narrateur > personnages",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p01_q3",
            "type": "mcq",
            "prompt": "Pour la focalisation interne, la comparaison donnée par la leçon est :",
            "options": [
              "Narrateur > personnages",
              "Narrateur = un personnage",
              "Narrateur < personnage",
              "Narrateur absent du récit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon écrit, pour le texte de Kelara : « Narrateur = un personnage », car le narrateur se confond avec le personnage."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La question à se poser devant un texte",
          "stepTheme": "La question à se poser devant un texte",
          "stepBadge": "La question à se poser devant un texte",
          "paragraphText": "Méthode : pour identifier le type, demande-toi ce que le narrateur sait et ce qu’il peut dire des personnages.\nSait-il leurs pensées ? Alors ce n’est pas une focalisation externe. Ne rapporte-t-il que ce qu’il observe ? Alors c’est une focalisation externe.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p01_q4",
            "type": "mcq",
            "prompt": "La première question pour identifier une focalisation porte sur :",
            "options": [
              "Ce que sait le narrateur par rapport aux personnages",
              "La longueur des phrases",
              "Le titre du chapitre suivant",
              "La couleur de la couverture"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Toute la séance compare les savoirs : moins que le personnage (externe), autant (interne), plus (zéro, omniscient)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les trois textes d’ouverture",
          "stepTheme": "Les trois textes d’ouverture",
          "stepBadge": "Les trois textes d’ouverture",
          "paragraphText": "Exemples d’ouverture de la séance : texte 1, Flaubert, Bouvard et Pécuchet (1881) ; texte 2, Flaubert, L’Éducation sentimentale (1869) ; texte 3, Balzac, incipit de Modeste Mignon (1844).\nChaque texte illustre un type de focalisation différent.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p01_q5",
            "type": "mcq",
            "prompt": "Le texte 3, donné pour la focalisation zéro, est l’incipit de :",
            "options": [
              "Bouvard et Pécuchet de Flaubert",
              "Modeste Mignon de Balzac",
              "L’Éducation sentimentale de Flaubert",
              "Les Misérables de Hugo"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon associe l’exemple du texte 3 à Balzac, incipit de Modeste Mignon, 1844."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre narrateur et auteur",
          "stepTheme": "Ne pas confondre narrateur et auteur",
          "stepBadge": "Ne pas confondre narrateur et auteur",
          "paragraphText": "Piège : parler de l’auteur quand la question porte sur le narrateur.\nLa focalisation précise la position de celui qui raconte dans le texte — le narrateur — et ce qu’il sait des personnages, pas la vie de l’écrivain.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p01_q6",
            "type": "mcq",
            "prompt": "La focalisation concerne la position :",
            "options": [
              "De l’auteur dans sa biographie",
              "Du lecteur dans la salle",
              "De celui qui raconte ou parle dans le texte",
              "De l’éditeur du livre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La définition vise celui qui conduit la narration dans le récit : le narrateur, dont on compare le savoir à celui des personnages."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p01_q1",
          "type": "mcq",
          "prompt": "La focalisation précise, dans un récit :",
          "options": [
            "Le nombre de chapitres",
            "La position de celui qui raconte ou parle dans le texte",
            "La date d’écriture uniquement",
            "Le prix du livre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition de la notion : la focalisation précise la position du narrateur, d’où son autre nom, point de vue."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p01_q2",
          "type": "mcq",
          "prompt": "Combien de types de focalisation la leçon distingue-t-elle ?",
          "options": [
            "Deux",
            "Quatre",
            "Trois : externe, interne et zéro",
            "Un seul"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon présente successivement la focalisation externe, la focalisation interne et la focalisation zéro."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p01_q3",
          "type": "mcq",
          "prompt": "Pour la focalisation interne, la comparaison donnée par la leçon est :",
          "options": [
            "Narrateur > personnages",
            "Narrateur = un personnage",
            "Narrateur < personnage",
            "Narrateur absent du récit"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon écrit, pour le texte de Kelara : « Narrateur = un personnage », car le narrateur se confond avec le personnage."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p01_q4",
          "type": "mcq",
          "prompt": "La première question pour identifier une focalisation porte sur :",
          "options": [
            "Ce que sait le narrateur par rapport aux personnages",
            "La longueur des phrases",
            "Le titre du chapitre suivant",
            "La couleur de la couverture"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toute la séance compare les savoirs : moins que le personnage (externe), autant (interne), plus (zéro, omniscient)."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p01_q5",
          "type": "mcq",
          "prompt": "Le texte 3, donné pour la focalisation zéro, est l’incipit de :",
          "options": [
            "Bouvard et Pécuchet de Flaubert",
            "Modeste Mignon de Balzac",
            "L’Éducation sentimentale de Flaubert",
            "Les Misérables de Hugo"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon associe l’exemple du texte 3 à Balzac, incipit de Modeste Mignon, 1844."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p01_q6",
          "type": "mcq",
          "prompt": "La focalisation concerne la position :",
          "options": [
            "De l’auteur dans sa biographie",
            "Du lecteur dans la salle",
            "De celui qui raconte ou parle dans le texte",
            "De l’éditeur du livre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La définition vise celui qui conduit la narration dans le récit : le narrateur, dont on compare le savoir à celui des personnages."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l06_focalisation_p02",
      "order": 2,
      "title": "La focalisation externe ou point de vue externe",
      "summary": "Définir la focalisation externe — un narrateur témoin, neutre et objectif, qui ne rapporte que les apparences — et connaître sa valeur d’emploi.",
      "conceptExplanation": "On parle de « focalisation externe », de « point de vue externe » ou de « narrateur externe » lorsque le narrateur ne rapporte que les apparences extérieures de l’histoire. Le narrateur se tient en dehors de l’histoire. Il se contente de raconter les faits tels qu’il les observe. De plus, il ne se met pas dans la peau du personnage et utilise la troisième personne. De ce fait, il ne peut donc pas dire les sentiments de ce dernier. Le point de vue est donc neutre et objectif.\nLe narrateur n’est qu’un témoin de l’action : il ne peut raconter que ce qu’il voit, sans être capable de formuler autre chose que des suppositions sur le caractère des personnages, leur histoire passée, etc. Il ne s’implique pas non plus dans l’action, il n’y a aucune part. Cette semi-ignorance transparaît dans les descriptions, qui sont sommaires et superficielles, puisque le narrateur ne connaît pas les pensées des personnages ni leur psychologie.\nExemple, texte 1 (Flaubert, Bouvard et Pécuchet) : on ne sait pas qui est le personnage, ni ce qu’il a fait ni ce qu’il fera — narrateur < personnage.\nValeur d’emploi : à cause de son caractère neutre et objectif, la focalisation externe entraîne le manque de sensation chez le lecteur ; celui-ci n’éprouve aucune émotion dans la narration. Elle n’installe pas le lecteur dans un suspens et ne l’oriente pas dans sa réaction après la lecture : le narrateur tient ainsi le lecteur en attente. Le texte 4, extrait des Misérables de Victor Hugo (le passage du corbillard sur le boulevard), illustre cette description extérieure.",
      "keyRule": "Externe : le narrateur-témoin voit de l’extérieur, à la troisième personne, sans pensées ni sentiments des personnages — point de vue neutre et objectif.",
      "formulas": [],
      "workedExample": {
        "title": "Bouvard et Pécuchet vus de l’extérieur (texte 1)",
        "statement": "Montre que l’extrait de Bouvard et Pécuchet de Flaubert relève de la focalisation externe.",
        "methodSteps": [
          "Le narrateur décrit ce qui se voit : la chaleur de trente-trois degrés, le boulevard Bourdon désert, le canal Saint-Martin, puis l’arrivée de deux hommes.",
          "Il décrit leurs vêtements et leurs gestes : le plus grand « marchait le chapeau en arrière, le gilet déboutonné », le plus petit baisse la tête sous une casquette.",
          "Il ne dit ni leurs pensées ni leurs sentiments : leurs noms mêmes ne sont connus que par ce qui est écrit dans le chapeau et la casquette — Bouvard et Pécuchet.",
          "On ne sait pas qui ils sont, ni ce qu’ils ont fait ni ce qu’ils feront : narrateur < personnage.",
          "Le point de vue est neutre et objectif : c’est la focalisation externe."
        ],
        "conclusion": "Descriptions d’apparences, aucune pensée rapportée : l’extrait de Flaubert est en focalisation externe."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ne rapporter que les apparences extérieures",
          "stepTheme": "Ne rapporter que les apparences extérieures",
          "stepBadge": "Ne rapporter que les apparences extérieures",
          "paragraphText": "• Focalisation externe : le narrateur ne rapporte que les apparences extérieures de l’histoire.\nIl se tient en dehors de l’histoire, raconte les faits tels qu’il les observe et utilise la troisième personne.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p02_q1",
            "type": "mcq",
            "prompt": "En focalisation externe, le narrateur :",
            "options": [
              "Se met dans la peau du personnage",
              "Ne rapporte que les apparences extérieures de l’histoire",
              "Connaît toutes les pensées de tous les personnages",
              "Raconte toujours à la première personne"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition : apparences extérieures seulement, narrateur en dehors de l’histoire, troisième personne."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un point de vue neutre et objectif",
          "stepTheme": "Un point de vue neutre et objectif",
          "stepBadge": "Un point de vue neutre et objectif",
          "paragraphText": "Propriété : le point de vue externe est neutre et objectif.\nLe narrateur ne peut pas dire les sentiments du personnage, puisqu’il ne se met pas dans sa peau.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p02_q2",
            "type": "mcq",
            "prompt": "Le point de vue externe est qualifié par la leçon de :",
            "options": [
              "Subjectif et exhaustif",
              "Subjectif et complice",
              "Neutre et objectif",
              "Lyrique et musical"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Neutre et objectif : ce sont les deux adjectifs donnés pour la focalisation externe."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Un narrateur témoin en semi-ignorance",
          "stepTheme": "Un narrateur témoin en semi-ignorance",
          "stepBadge": "Un narrateur témoin en semi-ignorance",
          "paragraphText": "Propriété : le narrateur n’est qu’un témoin de l’action ; il ne peut raconter que ce qu’il voit.\nCette semi-ignorance transparaît dans des descriptions sommaires et superficielles, car il ne connaît ni les pensées ni la psychologie des personnages.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p02_q3",
            "type": "mcq",
            "prompt": "En focalisation externe, les descriptions sont, selon la leçon :",
            "options": [
              "Détaillées jusqu’aux pensées secrètes",
              "Sommaires et superficielles",
              "Toujours à la première personne",
              "Pleines de jugements du narrateur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La semi-ignorance du témoin donne des descriptions sommaires et superficielles : il ignore pensées et psychologie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "On ne sait ni qui ils sont, ni leur passé",
          "stepTheme": "On ne sait ni qui ils sont, ni leur passé",
          "stepBadge": "On ne sait ni qui ils sont, ni leur passé",
          "paragraphText": "Exemple du texte 1 : sous l’extrait de Bouvard et Pécuchet, la leçon note « Le narrateur < personnage ».\nIci, on ne sait pas qui est le personnage, ni ce qu’il a fait ni ce qu’il fera.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p02_q4",
            "type": "mcq",
            "prompt": "Pour le texte 1, la leçon conclut que le narrateur en sait :",
            "options": [
              "Plus que les personnages",
              "Autant que les personnages",
              "Moins que les personnages",
              "Tout, y compris leur avenir"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Narrateur < personnage » : on ignore qui est le personnage, ce qu’il a fait et ce qu’il fera."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Valeur d’emploi : le lecteur tenu en attente",
          "stepTheme": "Valeur d’emploi : le lecteur tenu en attente",
          "stepBadge": "Valeur d’emploi : le lecteur tenu en attente",
          "paragraphText": "Valeur d’emploi : par son caractère neutre et objectif, la focalisation externe entraîne le manque de sensation chez le lecteur, qui n’éprouve aucune émotion dans la narration.\nElle n’installe pas le lecteur dans un suspens et ne l’oriente pas dans sa réaction : le narrateur tient le lecteur en attente.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p02_q5",
            "type": "mcq",
            "prompt": "L’effet principal de la focalisation externe sur le lecteur est, selon la leçon :",
            "options": [
              "Une forte complicité émotive",
              "Le manque de sensation : le lecteur est tenu en attente, sans émotion ni suspens installé",
              "La maîtrise totale de la situation",
              "La connaissance des pensées de tous"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Valeur d’emploi de l’externe : aucune émotion ni suspens installé, le lecteur reste en attente."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Vouloir donner les sentiments en externe",
          "stepTheme": "Vouloir donner les sentiments en externe",
          "stepBadge": "Vouloir donner les sentiments en externe",
          "paragraphText": "Piège : affirmer, en focalisation externe, ce que le personnage ressent ou pense.\nLe narrateur externe ne peut formuler, sur le caractère des personnages ou leur histoire passée, que des suppositions.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p02_q6",
            "type": "mcq",
            "prompt": "En focalisation externe, affirmer avec certitude les sentiments intimes du personnage est :",
            "options": [
              "La règle du point de vue",
              "Impossible : le narrateur ne peut faire que des suppositions sur ce qu’il ne voit pas",
              "Obligatoire à chaque phrase",
              "Le signe d’un narrateur omniscient"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le témoin externe ne voit que les apparences : sur le caractère et le passé, il ne peut que supposer."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p02_q1",
          "type": "mcq",
          "prompt": "En focalisation externe, le narrateur :",
          "options": [
            "Se met dans la peau du personnage",
            "Ne rapporte que les apparences extérieures de l’histoire",
            "Connaît toutes les pensées de tous les personnages",
            "Raconte toujours à la première personne"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition : apparences extérieures seulement, narrateur en dehors de l’histoire, troisième personne."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p02_q2",
          "type": "mcq",
          "prompt": "Le point de vue externe est qualifié par la leçon de :",
          "options": [
            "Subjectif et exhaustif",
            "Subjectif et complice",
            "Neutre et objectif",
            "Lyrique et musical"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Neutre et objectif : ce sont les deux adjectifs donnés pour la focalisation externe."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p02_q3",
          "type": "mcq",
          "prompt": "En focalisation externe, les descriptions sont, selon la leçon :",
          "options": [
            "Détaillées jusqu’aux pensées secrètes",
            "Sommaires et superficielles",
            "Toujours à la première personne",
            "Pleines de jugements du narrateur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La semi-ignorance du témoin donne des descriptions sommaires et superficielles : il ignore pensées et psychologie."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p02_q4",
          "type": "mcq",
          "prompt": "Pour le texte 1, la leçon conclut que le narrateur en sait :",
          "options": [
            "Plus que les personnages",
            "Autant que les personnages",
            "Moins que les personnages",
            "Tout, y compris leur avenir"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Narrateur < personnage » : on ignore qui est le personnage, ce qu’il a fait et ce qu’il fera."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p02_q5",
          "type": "mcq",
          "prompt": "L’effet principal de la focalisation externe sur le lecteur est, selon la leçon :",
          "options": [
            "Une forte complicité émotive",
            "Le manque de sensation : le lecteur est tenu en attente, sans émotion ni suspens installé",
            "La maîtrise totale de la situation",
            "La connaissance des pensées de tous"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Valeur d’emploi de l’externe : aucune émotion ni suspens installé, le lecteur reste en attente."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p02_q6",
          "type": "mcq",
          "prompt": "En focalisation externe, affirmer avec certitude les sentiments intimes du personnage est :",
          "options": [
            "La règle du point de vue",
            "Impossible : le narrateur ne peut faire que des suppositions sur ce qu’il ne voit pas",
            "Obligatoire à chaque phrase",
            "Le signe d’un narrateur omniscient"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le témoin externe ne voit que les apparences : sur le caractère et le passé, il ne peut que supposer."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l06_focalisation_p03",
      "order": 3,
      "title": "La focalisation interne ou point de vue interne",
      "summary": "Définir la focalisation interne — narrateur confondu avec le personnage, point de vue subjectif — et connaître sa valeur d’emploi : émotion et complicité.",
      "conceptExplanation": "Il y a focalisation interne lorsque narrateur et personnage sont confondus. Ici, le narrateur se met dans la peau du personnage. Il ne raconte que ce que voit, ce que sait et ce que pense un personnage. Il arrive ainsi à dévoiler tous les sentiments du personnage. À ce niveau, le narrateur en sait autant que le personnage. Il est en mesure d’évoquer les sensations (visuelles, auditives, etc.), les réactions, les pensées du personnage, en utilisant des champs lexicaux révélateurs, en choisissant un lexique à connotation péjorative ou méliorative.\nPar ailleurs, elle se caractérise par la présence de verbes de perception et des moyens permettant le regard. Le point de vue est ici subjectif. Ce point de vue est celui des narrations à la première personne (je) ou à la deuxième personne (tu), mais il est possible que la narration se fasse à la troisième personne (il).\nExemple, texte 2 (Flaubert, L’Éducation sentimentale) : « Frédéric, en face, distinguait l’ombre de ses cils… » — la scène est perçue par Frédéric.\nValeur d’emploi : la subjectivité crée de l’émotion, de la sensibilité et fait naître des sentiments pour le personnage ; le lecteur compatit envers le personnage. Ce point de vue permet au lecteur de comprendre la mentalité du personnage, favorisant ainsi une certaine complicité entre eux. Exemple, texte 5 : Kelara, dans Le vieux nègre et la médaille de Ferdinand Oyono, sent la boule montée à sa gorge en même temps qu’elle pleure — narrateur = un personnage.",
      "keyRule": "Interne : le narrateur se met dans la peau d’un personnage, il en sait autant que lui — verbes de perception, sensations et pensées, point de vue subjectif.",
      "formulas": [],
      "workedExample": {
        "title": "Le corrigé de l’exercice « La récitation » (N. Sarraute, Enfance)",
        "statement": "Le corrigé de l’exercice 1 analyse l’extrait « La récitation » de N. Sarraute : relève les indices d’émotion, le rapport narrateur-personnage et le type de focalisation.",
        "methodSteps": [
          "Indices des émotions : les points de suspension ; l’interrogation rhétorique (« si elle pouvait aller plus bas jusqu’à la lettre T ? ») ; les verbes de perception (regarde, sentir) ; le vocabulaire de l’émotion (« aime », « excitation »).",
          "Le personnage et le narrateur semblent se confondre : la scène est vécue de l’intérieur, avec sa peur légère et son excitation.",
          "Le narrateur en sait donc autant que le personnage, dont il dévoile les sensations et les pensées.",
          "Conclusion du corrigé : il s’agit de la focalisation interne."
        ],
        "conclusion": "Verbes de perception et vocabulaire de l’émotion, narrateur confondu avec le personnage : focalisation interne."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Narrateur et personnage confondus",
          "stepTheme": "Narrateur et personnage confondus",
          "stepBadge": "Narrateur et personnage confondus",
          "paragraphText": "• Focalisation interne : narrateur et personnage sont confondus.\nLe narrateur se met dans la peau du personnage et ne raconte que ce qu’il voit, ce qu’il sait et ce qu’il pense.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p03_q1",
            "type": "mcq",
            "prompt": "Il y a focalisation interne lorsque :",
            "options": [
              "Le narrateur sait tout de tous les personnages",
              "Narrateur et personnage sont confondus",
              "Le narrateur reste un simple témoin extérieur",
              "Aucun personnage n’apparaît"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition d’ouverture : narrateur et personnage confondus, le narrateur en sait autant que le personnage."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Verbes de perception et sensations",
          "stepTheme": "Verbes de perception et sensations",
          "stepBadge": "Verbes de perception et sensations",
          "paragraphText": "Propriété : la focalisation interne se caractérise par la présence de verbes de perception et des moyens permettant le regard.\nLe narrateur évoque les sensations (visuelles, auditives, etc.), les réactions et les pensées du personnage.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p03_q2",
            "type": "mcq",
            "prompt": "Quel indice est caractéristique de la focalisation interne ?",
            "options": [
              "Les verbes de perception et les sensations du personnage",
              "L’absence de tout personnage",
              "Les descriptions sommaires et superficielles",
              "La seule troisième personne impersonnelle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Verbes de perception, sensations, réactions et pensées : ce sont les marques données pour l’interne."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Un point de vue subjectif, en je, tu ou il",
          "stepTheme": "Un point de vue subjectif, en je, tu ou il",
          "stepBadge": "Un point de vue subjectif, en je, tu ou il",
          "paragraphText": "Propriété : le point de vue interne est subjectif.\nC’est celui des narrations à la première personne (je) ou à la deuxième personne (tu), mais la narration peut aussi se faire à la troisième personne (il).",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p03_q3",
            "type": "mcq",
            "prompt": "La focalisation interne est possible avec une narration :",
            "options": [
              "Uniquement à la première personne",
              "À la première, à la deuxième ou même à la troisième personne",
              "Sans aucune personne grammaticale",
              "Uniquement au futur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon précise que, malgré l’habitude du « je », la focalisation interne peut aussi se faire en « il »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Frédéric distingue l’ombre de ses cils (texte 2)",
          "stepTheme": "Frédéric distingue l’ombre de ses cils (texte 2)",
          "stepBadge": "Frédéric distingue l’ombre de ses cils (texte 2)",
          "paragraphText": "Exemple du texte 2 : « Frédéric, en face, distinguait l’ombre de ses cils. Elle trempait ses lèvres dans son verre, cassait un peu de croûte entre ses doigts… »\nLa scène est limitée à ce que Frédéric perçoit, en face d’elle.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p03_q4",
            "type": "mcq",
            "prompt": "Dans le texte 2, la focalisation est interne parce que :",
            "options": [
              "Le narrateur connaît l’avenir de tous les convives",
              "La scène est perçue à travers le regard de Frédéric, qui distingue l’ombre de ses cils",
              "Aucun personnage n’est nommé",
              "Le narrateur décrit un boulevard désert"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le verbe de perception « distinguait » ancre la scène dans le regard de Frédéric : le narrateur en sait autant que lui."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Valeur d’emploi : émotion et complicité",
          "stepTheme": "Valeur d’emploi : émotion et complicité",
          "stepBadge": "Valeur d’emploi : émotion et complicité",
          "paragraphText": "Valeur d’emploi : la subjectivité crée de l’émotion, de la sensibilité et fait naître des sentiments pour le personnage ; le lecteur compatit envers lui.\nCe point de vue permet de comprendre la mentalité du personnage, favorisant une complicité entre le lecteur et lui.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p03_q5",
            "type": "mcq",
            "prompt": "L’effet de la focalisation interne sur le lecteur est, selon la leçon :",
            "options": [
              "Le manque de sensation",
              "L’émotion et une complicité avec le personnage, dont on comprend la mentalité",
              "La connaissance exhaustive de l’intrigue",
              "L’attente sans aucune réaction possible"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Subjectivité, émotion, compassion et complicité : c’est la valeur d’emploi écrite pour l’interne."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Interne ne veut pas dire omniscient",
          "stepTheme": "Interne ne veut pas dire omniscient",
          "stepBadge": "Interne ne veut pas dire omniscient",
          "paragraphText": "Piège : dès que le narrateur donne une pensée, le déclarer omniscient.\nEn interne, le narrateur ne dévoile que les pensées du personnage dans la peau duquel il s’est mis : il en sait autant que ce personnage, pas plus.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p03_q6",
            "type": "mcq",
            "prompt": "En focalisation interne, le narrateur connaît les pensées :",
            "options": [
              "De tous les personnages à la fois",
              "Du seul personnage avec lequel il est confondu",
              "D’aucun personnage",
              "Des personnages absents de la scène seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le narrateur interne en sait autant que le personnage focal : ses sensations et ses pensées à lui, pas celles de tous."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p03_q1",
          "type": "mcq",
          "prompt": "Il y a focalisation interne lorsque :",
          "options": [
            "Le narrateur sait tout de tous les personnages",
            "Narrateur et personnage sont confondus",
            "Le narrateur reste un simple témoin extérieur",
            "Aucun personnage n’apparaît"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition d’ouverture : narrateur et personnage confondus, le narrateur en sait autant que le personnage."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p03_q2",
          "type": "mcq",
          "prompt": "Quel indice est caractéristique de la focalisation interne ?",
          "options": [
            "Les verbes de perception et les sensations du personnage",
            "L’absence de tout personnage",
            "Les descriptions sommaires et superficielles",
            "La seule troisième personne impersonnelle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Verbes de perception, sensations, réactions et pensées : ce sont les marques données pour l’interne."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p03_q3",
          "type": "mcq",
          "prompt": "La focalisation interne est possible avec une narration :",
          "options": [
            "Uniquement à la première personne",
            "À la première, à la deuxième ou même à la troisième personne",
            "Sans aucune personne grammaticale",
            "Uniquement au futur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon précise que, malgré l’habitude du « je », la focalisation interne peut aussi se faire en « il »."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p03_q4",
          "type": "mcq",
          "prompt": "Dans le texte 2, la focalisation est interne parce que :",
          "options": [
            "Le narrateur connaît l’avenir de tous les convives",
            "La scène est perçue à travers le regard de Frédéric, qui distingue l’ombre de ses cils",
            "Aucun personnage n’est nommé",
            "Le narrateur décrit un boulevard désert"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le verbe de perception « distinguait » ancre la scène dans le regard de Frédéric : le narrateur en sait autant que lui."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p03_q5",
          "type": "mcq",
          "prompt": "L’effet de la focalisation interne sur le lecteur est, selon la leçon :",
          "options": [
            "Le manque de sensation",
            "L’émotion et une complicité avec le personnage, dont on comprend la mentalité",
            "La connaissance exhaustive de l’intrigue",
            "L’attente sans aucune réaction possible"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Subjectivité, émotion, compassion et complicité : c’est la valeur d’emploi écrite pour l’interne."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p03_q6",
          "type": "mcq",
          "prompt": "En focalisation interne, le narrateur connaît les pensées :",
          "options": [
            "De tous les personnages à la fois",
            "Du seul personnage avec lequel il est confondu",
            "D’aucun personnage",
            "Des personnages absents de la scène seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le narrateur interne en sait autant que le personnage focal : ses sensations et ses pensées à lui, pas celles de tous."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l06_focalisation_p04",
      "order": 4,
      "title": "La focalisation zéro ou point de vue omniscient",
      "summary": "Définir la focalisation zéro — narrateur omniscient au regard illimité — et connaître sa valeur d’emploi : une connaissance ample de l’intrigue.",
      "conceptExplanation": "La focalisation est dite zéro ou point de vue omniscient lorsque le narrateur est omniscient. Contrairement aux deux premières focalisations, la focalisation zéro est un regard illimité. Le narrateur connaît tout de l’histoire racontée. Il sait tout des personnages, des lieux et des temps de l’action. Il voit tout et sait tout ; il connaît les pensées de tous les personnages, leur passé, leur présent, leurs sentiments et leur avenir. Il peut même raconter des événements qui se déroulent dans divers endroits au même moment. C’est pourquoi cette focalisation est aussi dite focalisation omnisciente. Le point de vue est donc ici subjectif et exhaustif.\nLe narrateur omniscient intervient très fréquemment dans la narration pour donner au lecteur des indications sur l’action ou les personnages.\nExemple, texte 3 : Balzac, incipit de Modeste Mignon (1844) — le notaire Latournelle examine si personne ne peut l’écouter et prend le médium de sa voix « par excès de précaution » : le narrateur connaît ses motifs. La leçon note : narrateur > personnages, et précise, pour l’exemple du texte 6 (Albert Camus, La peste, le docteur Bernard Rieux et le rat mort), que le narrateur connaît même les rêves de ses personnages.\nValeur d’emploi : l’effet est produit par le manque de limite dans la narration. Cela crée chez le lecteur une connaissance ample de l’intrigue ; le lecteur a l’impression d’avoir été un témoin de l’histoire, vu qu’il sait tout et même les moindres détails. Il pense avoir la maîtrise de la situation évoquée parce qu’il l’a véritablement vécue.",
      "keyRule": "Zéro : regard illimité, le narrateur sait tout — pensées, passé, présent, avenir, événements simultanés — point de vue subjectif et exhaustif.",
      "formulas": [],
      "workedExample": {
        "title": "Le notaire de Balzac vu par un narrateur omniscient (texte 3)",
        "statement": "Montre que l’incipit de Modeste Mignon de Balzac relève de la focalisation zéro.",
        "methodSteps": [
          "Le narrateur présente les quatre personnages, leurs habitudes — deux d’entre eux font ce chemin tous les soirs — et la route en corniche.",
          "Il rapporte le geste du notaire : il examine si personne ne peut l’écouter du haut d’une terrasse, en arrière ou en avant d’eux.",
          "Il en donne le motif intérieur : il prend le médium de sa voix « par excès de précaution » — le narrateur connaît les raisons du personnage.",
          "Son savoir dépasse donc ce que montrent les apparences et ce que sait chaque personnage : narrateur > personnages.",
          "Regard illimité et point de vue exhaustif : c’est la focalisation zéro."
        ],
        "conclusion": "Le narrateur de Balzac connaît les habitudes et les motifs des personnages : focalisation zéro, omnisciente."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un regard illimité",
          "stepTheme": "Un regard illimité",
          "stepBadge": "Un regard illimité",
          "paragraphText": "• Focalisation zéro : focalisation d’un narrateur omniscient, au regard illimité.\nIl connaît tout de l’histoire racontée : les personnages, les lieux et les temps de l’action.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p04_q1",
            "type": "mcq",
            "prompt": "La focalisation zéro se définit par :",
            "options": [
              "Un regard limité aux apparences",
              "Un regard illimité : le narrateur connaît tout de l’histoire",
              "Un regard confondu avec un seul personnage",
              "L’absence de narrateur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Contrairement aux deux autres types, la focalisation zéro est un regard illimité : le narrateur sait tout."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Pensées, passé, présent, sentiments et avenir",
          "stepTheme": "Pensées, passé, présent, sentiments et avenir",
          "stepBadge": "Pensées, passé, présent, sentiments et avenir",
          "paragraphText": "Propriété : le narrateur omniscient connaît les pensées de tous les personnages, leur passé, leur présent, leurs sentiments et leur avenir.\nIl peut même raconter des événements qui se déroulent dans divers endroits au même moment.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p04_q2",
            "type": "mcq",
            "prompt": "Le narrateur omniscient peut raconter :",
            "options": [
              "Uniquement ce qu’un personnage voit",
              "Des événements qui se déroulent dans divers endroits au même moment",
              "Seulement des apparences extérieures",
              "Rien qui concerne l’avenir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pensées de tous, passé, présent, avenir et événements simultanés en divers endroits : tel est le savoir de l’omniscient."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Un point de vue subjectif et exhaustif",
          "stepTheme": "Un point de vue subjectif et exhaustif",
          "stepBadge": "Un point de vue subjectif et exhaustif",
          "paragraphText": "Propriété : en focalisation zéro, le point de vue est subjectif et exhaustif.\nLe narrateur omniscient intervient très fréquemment dans la narration pour donner au lecteur des indications sur l’action ou les personnages.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p04_q3",
            "type": "mcq",
            "prompt": "En focalisation zéro, le point de vue est dit :",
            "options": [
              "Neutre et objectif",
              "Subjectif et exhaustif",
              "Neutre et sommaire",
              "Absent et muet"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Subjectif et exhaustif : c’est la qualification donnée, à distinguer du neutre et objectif de l’externe."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Il connaît même les rêves de ses personnages",
          "stepTheme": "Il connaît même les rêves de ses personnages",
          "stepBadge": "Il connaît même les rêves de ses personnages",
          "paragraphText": "Exemple du texte 6 (Albert Camus, La peste) : sous l’extrait du docteur Bernard Rieux, la leçon note « Narrateur > personnages ».\nElle précise : le narrateur connaît les rêves de ses personnages.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p04_q4",
            "type": "mcq",
            "prompt": "Pour l’exemple du texte 6, la leçon souligne que le narrateur :",
            "options": [
              "Ignore tout du docteur Rieux",
              "Connaît même les rêves de ses personnages",
              "Ne voit que la rue",
              "Est un personnage secondaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Connaître les rêves des personnages dépasse tout savoir de témoin ou de personnage : marque de l’omniscience."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Valeur d’emploi : une connaissance ample de l’intrigue",
          "stepTheme": "Valeur d’emploi : une connaissance ample de l’intrigue",
          "stepBadge": "Valeur d’emploi : une connaissance ample de l’intrigue",
          "paragraphText": "Valeur d’emploi : le manque de limite dans la narration crée chez le lecteur une connaissance ample de l’intrigue.\nLe lecteur a l’impression d’avoir été un témoin de l’histoire et pense avoir la maîtrise de la situation évoquée.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p04_q5",
            "type": "mcq",
            "prompt": "L’effet de la focalisation zéro sur le lecteur est :",
            "options": [
              "Le manque de sensation et l’attente",
              "Une connaissance ample de l’intrigue, avec l’impression d’avoir vécu l’histoire",
              "La seule complicité avec un personnage",
              "L’ignorance des motifs des personnages"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la valeur d’emploi écrite : connaissance ample, impression d’avoir été témoin, maîtrise de la situation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Zéro ne veut pas dire absence de point de vue",
          "stepTheme": "Zéro ne veut pas dire absence de point de vue",
          "stepBadge": "Zéro ne veut pas dire absence de point de vue",
          "paragraphText": "Piège : comprendre « zéro » comme « aucun point de vue ».\nDans la leçon, zéro désigne le point de vue omniscient : le narrateur n’est limité par aucun personnage, il sait plus que tous.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p04_q6",
            "type": "mcq",
            "prompt": "Dans « focalisation zéro », le mot zéro signifie que :",
            "options": [
              "Le narrateur n’existe pas",
              "Le récit n’a aucune narration",
              "Le narrateur est omniscient, sans la limite d’un personnage",
              "Le personnage principal est absent"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon assimile focalisation zéro et point de vue omniscient : aucune limite de savoir pour le narrateur."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p04_q1",
          "type": "mcq",
          "prompt": "La focalisation zéro se définit par :",
          "options": [
            "Un regard limité aux apparences",
            "Un regard illimité : le narrateur connaît tout de l’histoire",
            "Un regard confondu avec un seul personnage",
            "L’absence de narrateur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Contrairement aux deux autres types, la focalisation zéro est un regard illimité : le narrateur sait tout."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p04_q2",
          "type": "mcq",
          "prompt": "Le narrateur omniscient peut raconter :",
          "options": [
            "Uniquement ce qu’un personnage voit",
            "Des événements qui se déroulent dans divers endroits au même moment",
            "Seulement des apparences extérieures",
            "Rien qui concerne l’avenir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pensées de tous, passé, présent, avenir et événements simultanés en divers endroits : tel est le savoir de l’omniscient."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p04_q3",
          "type": "mcq",
          "prompt": "En focalisation zéro, le point de vue est dit :",
          "options": [
            "Neutre et objectif",
            "Subjectif et exhaustif",
            "Neutre et sommaire",
            "Absent et muet"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Subjectif et exhaustif : c’est la qualification donnée, à distinguer du neutre et objectif de l’externe."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p04_q4",
          "type": "mcq",
          "prompt": "Pour l’exemple du texte 6, la leçon souligne que le narrateur :",
          "options": [
            "Ignore tout du docteur Rieux",
            "Connaît même les rêves de ses personnages",
            "Ne voit que la rue",
            "Est un personnage secondaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Connaître les rêves des personnages dépasse tout savoir de témoin ou de personnage : marque de l’omniscience."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p04_q5",
          "type": "mcq",
          "prompt": "L’effet de la focalisation zéro sur le lecteur est :",
          "options": [
            "Le manque de sensation et l’attente",
            "Une connaissance ample de l’intrigue, avec l’impression d’avoir vécu l’histoire",
            "La seule complicité avec un personnage",
            "L’ignorance des motifs des personnages"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la valeur d’emploi écrite : connaissance ample, impression d’avoir été témoin, maîtrise de la situation."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p04_q6",
          "type": "mcq",
          "prompt": "Dans « focalisation zéro », le mot zéro signifie que :",
          "options": [
            "Le narrateur n’existe pas",
            "Le récit n’a aucune narration",
            "Le narrateur est omniscient, sans la limite d’un personnage",
            "Le personnage principal est absent"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon assimile focalisation zéro et point de vue omniscient : aucune limite de savoir pour le narrateur."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l06_focalisation_p05",
      "order": 5,
      "title": "Identifier les focalisations dans un texte et justifier",
      "summary": "Appliquer la méthode d’identification à un texte qui mêle les trois focalisations, en citant le passage qui prouve chaque type.",
      "conceptExplanation": "Les exercices de la leçon demandent d’identifier le type de focalisation utilisé dans chaque texte et de justifier la réponse en analysant les indices textuels. Le traitement de l’évaluation du texte 7 (Guy de Maupassant, Bel-Ami) montre qu’un même extrait peut contenir les trois focalisations.\n• Focalisation interne : « Duroy aperçut soudain, à quelques centaines de mètres, deux vieilles gens qui venaient » — perception de Duroy ; et Madeleine « regardait venir ces deux pauvres êtres avec un serrement de cœur, une tristesse qu’elle n’avait point prévue ».\n• Focalisation zéro : la description des deux paysans — l’homme « rigoureux malgré son âge », la femme « qui a travaillé dès l’enfance et qui n’a jamais ri, tandis que le mari blaguait en buvant avec les pratiques » — le narrateur connaît leur passé et leurs habitudes.\n• Focalisation externe : « Ils allaient, sans parler et vite, au-devant de l’enfant attendu, sans regarder ces personnes de la ville que suivait une voiture » — seuls les gestes visibles sont rapportés.\nLa méthode est donc : découper l’extrait en passages, comparer pour chacun le savoir du narrateur à celui des personnages, et citer le passage qui prouve le type retenu. Les autres exercices proposent le même travail sur des textes de Tidiane Dem (Masseni), de Victor Hugo (Les Misérables, Jean Valjean) et d’Adrass Amed (« L’affront »).",
      "keyRule": "Méthode : découper, comparer les savoirs passage par passage, citer la preuve — un même texte peut mêler interne, zéro et externe.",
      "formulas": [],
      "workedExample": {
        "title": "Les trois focalisations du texte 7 (Maupassant, Bel-Ami)",
        "statement": "Identifie les focalisations contenues dans l’extrait de Bel-Ami et justifie chaque réponse en citant le passage qui le prouve, comme le fait le traitement de l’évaluation.",
        "methodSteps": [
          "Interne : « Duroy aperçut soudain… deux vieilles gens » — verbe de perception, scène vue par Duroy ; de même, le « serrement de cœur » de Madeleine donne son sentiment intérieur.",
          "Zéro : le portrait des deux paysans donne leur passé — la femme « qui a travaillé dès l’enfance et qui n’a jamais ri, tandis que le mari blaguait en buvant » — savoir supérieur à celui des personnages présents.",
          "Externe : « Ils allaient, sans parler et vite, au-devant de l’enfant attendu, sans regarder ces personnes de la ville » — gestes visibles seulement, aucune pensée.",
          "Conclusion du traitement : l’extrait contient successivement les trois focalisations."
        ],
        "conclusion": "Un même extrait peut changer de focalisation d’un passage à l’autre : seule la citation précise justifie chaque identification."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Justifier en citant le passage qui le prouve",
          "stepTheme": "Justifier en citant le passage qui le prouve",
          "stepBadge": "Justifier en citant le passage qui le prouve",
          "paragraphText": "Méthode : les consignes des exercices demandent d’identifier les focalisations possibles et de justifier la réponse en citant le passage qui le prouve.\nSans citation précise, l’identification reste une affirmation non démontrée.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p05_q1",
            "type": "mcq",
            "prompt": "La justification attendue pour identifier une focalisation consiste à :",
            "options": [
              "Donner son impression générale sans citation",
              "Citer le passage qui prouve le type retenu",
              "Raconter la vie de l’auteur",
              "Résumer la suite du roman"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les exercices 3 et 4 exigent de justifier « en citant le passage qui le prouve » : la citation est la preuve."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Interne : Duroy aperçoit, Madeleine ressent",
          "stepTheme": "Interne : Duroy aperçoit, Madeleine ressent",
          "stepBadge": "Interne : Duroy aperçoit, Madeleine ressent",
          "paragraphText": "Exemple du traitement de l’évaluation : sont en focalisation interne « Duroy aperçut soudain… deux vieilles gens qui venaient » et le passage de Madeleine.\nMadeleine regarde les deux pauvres êtres « avec un serrement de cœur, une tristesse qu’elle n’avait point prévue ».",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p05_q2",
            "type": "mcq",
            "prompt": "Le « serrement de cœur » de Madeleine relève de la focalisation interne parce qu’ :",
            "options": [
              "Il décrit un vêtement",
              "Il donne le sentiment intérieur du personnage",
              "Il est vu par un passant inconnu",
              "Il annonce l’avenir du couple"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Donner le sentiment intérieur — serrement de cœur, tristesse imprévue — suppose un narrateur confondu avec le personnage : interne."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Zéro : le passé des deux paysans",
          "stepTheme": "Zéro : le passé des deux paysans",
          "stepBadge": "Zéro : le passé des deux paysans",
          "paragraphText": "Exemple du traitement : sont en focalisation zéro les lignes sur les deux paysans.\nLa femme est « la vraie femme de peine des champs, qui a travaillé dès l’enfance et qui n’a jamais ri, tandis que le mari blaguait en buvant avec les pratiques » : le narrateur connaît leur vie entière.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p05_q3",
            "type": "mcq",
            "prompt": "Connaître l’enfance et les habitudes de toute une vie des paysans suppose un narrateur :",
            "options": [
              "Externe, limité aux apparences du moment",
              "Omniscient, qui sait leur passé : focalisation zéro",
              "Confondu avec la voiture",
              "Absent de la scène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Savoir que la femme a travaillé dès l’enfance et n’a jamais ri dépasse la scène présente : c’est le savoir de l’omniscient."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Externe : ils allaient, sans parler",
          "stepTheme": "Externe : ils allaient, sans parler",
          "stepBadge": "Externe : ils allaient, sans parler",
          "paragraphText": "Exemple du traitement : est en focalisation externe la fin de l’extrait.\n« Ils allaient, sans parler et vite, au-devant de l’enfant attendu, sans regarder ces personnes de la ville que suivait une voiture » : seuls des faits observables sont rapportés.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p05_q4",
            "type": "mcq",
            "prompt": "Ce dernier passage est externe parce qu’ :",
            "options": [
              "Il donne les pensées des paysans",
              "Il ne rapporte que des gestes et des déplacements observables",
              "Il raconte leur passé",
              "Il est à la première personne"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Aller, ne pas parler, ne pas regarder : apparences extérieures sans aucune pensée — focalisation externe."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Un même texte peut mêler les trois types",
          "stepTheme": "Un même texte peut mêler les trois types",
          "stepBadge": "Un même texte peut mêler les trois types",
          "paragraphText": "Propriété mise en évidence par le traitement du texte 7 : un même extrait peut contenir successivement une focalisation interne, une focalisation zéro et une focalisation externe.\nL’identification se fait donc passage par passage, pas seulement texte par texte.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p05_q5",
            "type": "mcq",
            "prompt": "Le traitement de l’évaluation du texte 7 conclut que cet extrait contient :",
            "options": [
              "Une seule focalisation du début à la fin",
              "Les trois focalisations : interne, zéro et externe",
              "Aucune focalisation identifiable",
              "Uniquement la focalisation externe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le traitement liste successivement interne, zéro et externe dans le même extrait de Bel-Ami."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Étiqueter tout le texte d’un seul type",
          "stepTheme": "Étiqueter tout le texte d’un seul type",
          "stepBadge": "Étiqueter tout le texte d’un seul type",
          "paragraphText": "Piège : donner un seul type pour un long extrait sans vérifier chaque passage.\nDans Bel-Ami, la perception de Duroy est interne, le portrait des paysans est omniscient et leur marche finale est externe : un seul label pour tout serait faux.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l06_focalisation_p05_q6",
            "type": "mcq",
            "prompt": "Devant un long extrait, la démarche correcte est de :",
            "options": [
              "Choisir le type du premier passage pour tout le texte",
              "Vérifier la focalisation passage par passage et citer chaque preuve",
              "Compter les personnages",
              "Ignorer les passages qui contredisent le premier label"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le traitement de l’évaluation découpe l’extrait et associe chaque passage à son type, preuve citée à l’appui."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p05_q1",
          "type": "mcq",
          "prompt": "La justification attendue pour identifier une focalisation consiste à :",
          "options": [
            "Donner son impression générale sans citation",
            "Citer le passage qui prouve le type retenu",
            "Raconter la vie de l’auteur",
            "Résumer la suite du roman"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les exercices 3 et 4 exigent de justifier « en citant le passage qui le prouve » : la citation est la preuve."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p05_q2",
          "type": "mcq",
          "prompt": "Le « serrement de cœur » de Madeleine relève de la focalisation interne parce qu’ :",
          "options": [
            "Il décrit un vêtement",
            "Il donne le sentiment intérieur du personnage",
            "Il est vu par un passant inconnu",
            "Il annonce l’avenir du couple"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Donner le sentiment intérieur — serrement de cœur, tristesse imprévue — suppose un narrateur confondu avec le personnage : interne."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p05_q3",
          "type": "mcq",
          "prompt": "Connaître l’enfance et les habitudes de toute une vie des paysans suppose un narrateur :",
          "options": [
            "Externe, limité aux apparences du moment",
            "Omniscient, qui sait leur passé : focalisation zéro",
            "Confondu avec la voiture",
            "Absent de la scène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Savoir que la femme a travaillé dès l’enfance et n’a jamais ri dépasse la scène présente : c’est le savoir de l’omniscient."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p05_q4",
          "type": "mcq",
          "prompt": "Ce dernier passage est externe parce qu’ :",
          "options": [
            "Il donne les pensées des paysans",
            "Il ne rapporte que des gestes et des déplacements observables",
            "Il raconte leur passé",
            "Il est à la première personne"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Aller, ne pas parler, ne pas regarder : apparences extérieures sans aucune pensée — focalisation externe."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p05_q5",
          "type": "mcq",
          "prompt": "Le traitement de l’évaluation du texte 7 conclut que cet extrait contient :",
          "options": [
            "Une seule focalisation du début à la fin",
            "Les trois focalisations : interne, zéro et externe",
            "Aucune focalisation identifiable",
            "Uniquement la focalisation externe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le traitement liste successivement interne, zéro et externe dans le même extrait de Bel-Ami."
        },
        {
          "id": "premiere_a1_francais_pl_l06_focalisation_p05_q6",
          "type": "mcq",
          "prompt": "Devant un long extrait, la démarche correcte est de :",
          "options": [
            "Choisir le type du premier passage pour tout le texte",
            "Vérifier la focalisation passage par passage et citer chaque preuve",
            "Compter les personnages",
            "Ignorer les passages qui contredisent le premier label"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le traitement de l’évaluation découpe l’extrait et associe chaque passage à son type, preuve citée à l’appui."
        }
      ]
    }
  ]
};
