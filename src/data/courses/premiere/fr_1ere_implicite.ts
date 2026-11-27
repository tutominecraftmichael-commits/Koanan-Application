import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « L’implicite » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2347
export const FR_1ERE_PL_L08_IMPLICITE: CurriculumChapter = {
  "id": "premiere_a1_francais_pl_l08_implicite",
  "subjectId": "francais",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 8,
  "title": "Leçon 8 : L’implicite",
  "summary": "Émerveillés par la subtilité du message véhiculé par des textes, les élèves s’exercent à dégager les présupposés et les sous-entendus, à analyser leur valeur d’emploi et à les utiliser en contexte.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2347",
  "points": [
    {
      "id": "premiere_a1_francais_pl_l08_implicite_p01",
      "order": 1,
      "title": "L’implicite : le non-dit du message",
      "summary": "Définir l’implicite comme une information contenue dans l’énoncé mais non exprimée explicitement.",
      "conceptExplanation": "On dit d’un message qu’il est implicite quand il est voilé, quand il ne se laisse pas saisir automatiquement. Ce message est transmis de façon immédiate, avec une nuance. Il se caractérise par sa capacité à créer une zone d’ombre, un flou dans le message exprimé.\nL’implicite est le non-dit, c’est-à-dire une information contenue dans un énoncé mais non exprimée de manière explicite.\nL’implicite comprend le sous-entendu et le présupposé. Exemple de la leçon : dans « Merci mon enfant ! », l’expression « mon enfant » n’exprime pas une simple appartenance ; c’est le reflet de l’amour, de l’attachement et de la fierté.",
      "keyRule": "Implicite égale non-dit : cherche l’information contenue dans l’énoncé sans y être exprimée.",
      "formulas": [],
      "workedExample": {
        "title": "Lire le non-dit de « Merci mon enfant ! »",
        "statement": "Énoncé de la leçon : « Merci mon enfant ! » Que signifie implicitement « mon enfant » ?",
        "methodSteps": [
          "Sens apparent : une simple appartenance, l’enfant de celui qui parle.",
          "Contexte affectif : la formule est un remerciement chaleureux.",
          "Sens implicite : le reflet de l’amour, de l’attachement et de la fierté."
        ],
        "conclusion": "Le même énoncé porte une information affective non dite : c’est de l’implicite."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de l’implicite",
          "stepTheme": "Définition de l’implicite",
          "stepBadge": "Définition de l’implicite",
          "paragraphText": "• Implicite : information contenue dans un énoncé mais non exprimée de manière explicite.\nC’est le non-dit du message.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p01_q1",
            "type": "mcq",
            "prompt": "L’implicite est :",
            "options": [
              "Une information exprimée mot pour mot",
              "Le non-dit : une information contenue dans l’énoncé mais non exprimée explicitement",
              "Une faute de grammaire",
              "Le titre d’un texte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition de la leçon : l’implicite est le non-dit contenu dans l’énoncé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un message voilé, une zone d’ombre",
          "stepTheme": "Un message voilé, une zone d’ombre",
          "stepBadge": "Un message voilé, une zone d’ombre",
          "paragraphText": "Propriété : le message implicite est voilé, il ne se laisse pas saisir automatiquement.\nIl crée une zone d’ombre, un flou dans le message exprimé, et il est transmis avec une nuance.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p01_q2",
            "type": "mcq",
            "prompt": "Un message implicite se caractérise par :",
            "options": [
              "Sa clarté immédiate et totale",
              "Son absence de nuance",
              "Sa capacité à créer une zone d’ombre, un flou dans le message",
              "Sa longueur obligatoire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Voilé et nuancé, l’implicite laisse une zone d’ombre que le lecteur doit interpréter."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Sous-entendu et présupposé",
          "stepTheme": "Sous-entendu et présupposé",
          "stepBadge": "Sous-entendu et présupposé",
          "paragraphText": "Propriété : l’implicite comprend deux formes étudiées dans la leçon.\n• Le sous-entendu\n• Le présupposé",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p01_q3",
            "type": "mcq",
            "prompt": "L’implicite comprend :",
            "options": [
              "Le titre et la conclusion",
              "Le sous-entendu et le présupposé",
              "La rime et la strophe",
              "Le passé simple et l’imparfait"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les deux formes annoncées dès la définition de la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Confondre explicite et implicite",
          "stepTheme": "Confondre explicite et implicite",
          "stepBadge": "Confondre explicite et implicite",
          "paragraphText": "Piège : appeler implicite ce qui est dit noir sur blanc dans l’énoncé.\nSi l’information est exprimée de manière explicite, elle n’appartient pas au non-dit.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p01_q4",
            "type": "mcq",
            "prompt": "Quel contenu est explicite et non implicite ?",
            "options": [
              "L’amour suggéré par « mon enfant »",
              "La fierté devinée dans un remerciement",
              "L’heure dite dans « Il est huit heures »",
              "Le retard sous-entendu selon le contexte"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Il est huit heures » exprime explicitement l’heure ; le retard éventuel, lui, serait sous-entendu selon le contexte."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Merci mon enfant",
          "stepTheme": "Merci mon enfant",
          "stepBadge": "Merci mon enfant",
          "paragraphText": "Exemple : « Merci mon enfant ! »\nAu-delà de la simple appartenance, « mon enfant » est le reflet de l’amour, de l’attachement et de la fierté de celui qui parle.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p01_q5",
            "type": "mcq",
            "prompt": "Dans l’exemple de la leçon, « mon enfant » exprime implicitement :",
            "options": [
              "Une simple appartenance administrative",
              "L’amour, l’attachement et la fierté",
              "Un ordre de partir",
              "Une information horaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’analyse donnée par la leçon elle-même."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p01_q1",
          "type": "mcq",
          "prompt": "L’implicite est :",
          "options": [
            "Une information exprimée mot pour mot",
            "Le non-dit : une information contenue dans l’énoncé mais non exprimée explicitement",
            "Une faute de grammaire",
            "Le titre d’un texte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition de la leçon : l’implicite est le non-dit contenu dans l’énoncé."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p01_q2",
          "type": "mcq",
          "prompt": "Un message implicite se caractérise par :",
          "options": [
            "Sa clarté immédiate et totale",
            "Son absence de nuance",
            "Sa capacité à créer une zone d’ombre, un flou dans le message",
            "Sa longueur obligatoire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Voilé et nuancé, l’implicite laisse une zone d’ombre que le lecteur doit interpréter."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p01_q3",
          "type": "mcq",
          "prompt": "L’implicite comprend :",
          "options": [
            "Le titre et la conclusion",
            "Le sous-entendu et le présupposé",
            "La rime et la strophe",
            "Le passé simple et l’imparfait"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les deux formes annoncées dès la définition de la leçon."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p01_q4",
          "type": "mcq",
          "prompt": "Quel contenu est explicite et non implicite ?",
          "options": [
            "L’amour suggéré par « mon enfant »",
            "La fierté devinée dans un remerciement",
            "L’heure dite dans « Il est huit heures »",
            "Le retard sous-entendu selon le contexte"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Il est huit heures » exprime explicitement l’heure ; le retard éventuel, lui, serait sous-entendu selon le contexte."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p01_q5",
          "type": "mcq",
          "prompt": "Dans l’exemple de la leçon, « mon enfant » exprime implicitement :",
          "options": [
            "Une simple appartenance administrative",
            "L’amour, l’attachement et la fierté",
            "Un ordre de partir",
            "Une information horaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’analyse donnée par la leçon elle-même."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l08_implicite_p02",
      "order": 2,
      "title": "L’implicite lexical",
      "summary": "Reconnaître le mot qui cache une autre signification au-delà de son sens apparent.",
      "conceptExplanation": "L’implicite lexical : le mot utilisé cache une autre signification au-delà de son sens apparent ou habituel.\nExemple de la leçon : « Cet enfant de mon ami est un véritable fils pour moi. » Le mot « fils » a pour sens apparent : enfant de sexe masculin que nous avons mis au monde. Ici, pour l’émetteur, « fils » signifie : un enfant aimable, plein d’amour filial, gentil, serviable.\nLe sens implicite du mot dépend donc de l’émetteur et du contexte d’emploi.",
      "keyRule": "Pour l’implicite lexical, compare le sens habituel du mot et le sens que lui donne l’émetteur ici.",
      "formulas": [],
      "workedExample": {
        "title": "Le mot fils dans la phrase de la leçon",
        "statement": "Phrase : « Cet enfant de mon ami est un véritable fils pour moi. » Quel est le sens implicite de « fils » ?",
        "methodSteps": [
          "Sens apparent de fils : enfant de sexe masculin que nous avons mis au monde.",
          "Constat : l’enfant est celui d’un ami, pas celui de l’émetteur.",
          "Sens implicite pour l’émetteur : un enfant aimable, plein d’amour filial, gentil, serviable."
        ],
        "conclusion": "Le mot garde sa forme mais change de signification selon l’émetteur : implicite lexical."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de l’implicite lexical",
          "stepTheme": "Définition de l’implicite lexical",
          "stepBadge": "Définition de l’implicite lexical",
          "paragraphText": "• Implicite lexical : le mot utilisé cache une autre signification au-delà de son sens apparent ou habituel.\nL’implicite porte ici sur un mot précis de l’énoncé.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p02_q1",
            "type": "mcq",
            "prompt": "L’implicite lexical concerne :",
            "options": [
              "La ponctuation du texte",
              "Un mot qui cache une autre signification au-delà de son sens apparent",
              "La longueur des phrases",
              "Le nom de l’auteur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition du premier type d’implicite de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Sens apparent et sens pour l’émetteur",
          "stepTheme": "Sens apparent et sens pour l’émetteur",
          "stepBadge": "Sens apparent et sens pour l’émetteur",
          "paragraphText": "Propriété : il faut distinguer deux niveaux.\n• Le sens apparent ou habituel du mot\n• Le sens que le mot prend pour l’émetteur dans cet énoncé",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p02_q2",
            "type": "mcq",
            "prompt": "Dans l’analyse d’un implicite lexical, on oppose :",
            "options": [
              "Le titre et la conclusion",
              "Le sens apparent du mot et le sens qu’il prend pour l’émetteur",
              "Le passé et le futur",
              "Le récit et le discours"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’écart entre les deux sens fait apparaître l’implicite lexical."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Repérer le mot qui déroute",
          "stepTheme": "Repérer le mot qui déroute",
          "stepBadge": "Repérer le mot qui déroute",
          "paragraphText": "Méthode : repérer le mot dont le sens habituel ne convient pas au contexte.\nDans l’exemple, l’enfant est celui d’un ami : « fils » ne peut donc pas garder son sens apparent.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p02_q3",
            "type": "mcq",
            "prompt": "Le signal de l’implicite lexical dans l’exemple est :",
            "options": [
              "La présence du mot ami",
              "Le fait que l’enfant d’un ami ne peut pas être le fils au sens apparent",
              "La longueur de la phrase",
              "Le point final"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’incompatibilité avec le sens apparent qui oblige à chercher le sens implicite de « fils »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "S’arrêter au sens du dictionnaire",
          "stepTheme": "S’arrêter au sens du dictionnaire",
          "stepBadge": "S’arrêter au sens du dictionnaire",
          "paragraphText": "Piège : expliquer le mot uniquement par son sens habituel.\nOn manquerait alors ce que l’émetteur veut vraiment dire : ici, une qualité de relation, pas une filiation.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p02_q4",
            "type": "mcq",
            "prompt": "Expliquer « fils » par « enfant mâle mis au monde » dans cet énoncé est insuffisant car :",
            "options": [
              "Le mot est mal orthographié",
              "L’émetteur désigne l’enfant de son ami et vise un enfant aimable, gentil et serviable",
              "La phrase est trop courte",
              "Le dictionnaire est interdit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le sens implicite, pour l’émetteur, est affectif et relationnel, pas biologique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un véritable fils pour moi",
          "stepTheme": "Un véritable fils pour moi",
          "stepBadge": "Un véritable fils pour moi",
          "paragraphText": "Exemple complet : « Cet enfant de mon ami est un véritable fils pour moi. »\n« Véritable » renforce le déplacement de sens : l’enfant se comporte comme un fils, par son amour filial, sa gentillesse et sa serviabilité.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p02_q5",
            "type": "mcq",
            "prompt": "Dans l’exemple, l’enfant est qualifié implicitement de :",
            "options": [
              "Distrait et bruyant",
              "Aimable, plein d’amour filial, gentil, serviable",
              "Inconnu de l’émetteur",
              "Fils biologique de l’émetteur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la signification implicite donnée par la leçon pour le mot « fils »."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p02_q1",
          "type": "mcq",
          "prompt": "L’implicite lexical concerne :",
          "options": [
            "La ponctuation du texte",
            "Un mot qui cache une autre signification au-delà de son sens apparent",
            "La longueur des phrases",
            "Le nom de l’auteur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition du premier type d’implicite de la leçon."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p02_q2",
          "type": "mcq",
          "prompt": "Dans l’analyse d’un implicite lexical, on oppose :",
          "options": [
            "Le titre et la conclusion",
            "Le sens apparent du mot et le sens qu’il prend pour l’émetteur",
            "Le passé et le futur",
            "Le récit et le discours"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’écart entre les deux sens fait apparaître l’implicite lexical."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p02_q3",
          "type": "mcq",
          "prompt": "Le signal de l’implicite lexical dans l’exemple est :",
          "options": [
            "La présence du mot ami",
            "Le fait que l’enfant d’un ami ne peut pas être le fils au sens apparent",
            "La longueur de la phrase",
            "Le point final"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’incompatibilité avec le sens apparent qui oblige à chercher le sens implicite de « fils »."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p02_q4",
          "type": "mcq",
          "prompt": "Expliquer « fils » par « enfant mâle mis au monde » dans cet énoncé est insuffisant car :",
          "options": [
            "Le mot est mal orthographié",
            "L’émetteur désigne l’enfant de son ami et vise un enfant aimable, gentil et serviable",
            "La phrase est trop courte",
            "Le dictionnaire est interdit"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le sens implicite, pour l’émetteur, est affectif et relationnel, pas biologique."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p02_q5",
          "type": "mcq",
          "prompt": "Dans l’exemple, l’enfant est qualifié implicitement de :",
          "options": [
            "Distrait et bruyant",
            "Aimable, plein d’amour filial, gentil, serviable",
            "Inconnu de l’émetteur",
            "Fils biologique de l’émetteur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la signification implicite donnée par la leçon pour le mot « fils »."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l08_implicite_p03",
      "order": 3,
      "title": "L’implicite rhétorique ou stylistique",
      "summary": "Reconnaître l’implicite porté par une figure de style ou de rhétorique.",
      "conceptExplanation": "L’implicite rhétorique ou stylistique : le mot ou l’expression relève d’une figure de style ou de rhétorique.\nExemple de la leçon, chez Victor Hugo : « Dans ce bagne terrestre où ne s’ouvre aucune aile ». Le mot « aile » a pour sens explicite : symbole de vol, élément permettant de voler. Son sens implicite ici : le symbole de la liberté, de la liberté de pensée, de l’élévation.\nLa figure déplace donc le mot de son sens propre vers un sens symbolique que le lecteur doit construire.",
      "keyRule": "Quand une figure de style porte le mot, cherche sa valeur symbolique dans le texte.",
      "formulas": [],
      "workedExample": {
        "title": "L’aile de Victor Hugo",
        "statement": "Vers cité : « Dans ce bagne terrestre où ne s’ouvre aucune aile » (V. Hugo). Quel est le sens implicite de « aile » ?",
        "methodSteps": [
          "Sens explicite : l’aile, élément permettant de voler.",
          "Contexte : un « bagne terrestre », lieu d’enfermement, où rien ne s’ouvre.",
          "Sens implicite : le symbole de la liberté, de la liberté de pensée, de l’élévation."
        ],
        "conclusion": "Par la figure, « aile » signifie implicitement la liberté et l’élévation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de l’implicite rhétorique",
          "stepTheme": "Définition de l’implicite rhétorique",
          "stepBadge": "Définition de l’implicite rhétorique",
          "paragraphText": "• Implicite rhétorique ou stylistique : le mot ou l’expression relève d’une figure de style ou de rhétorique.\nLe sens implicite naît alors du travail de la figure.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p03_q1",
            "type": "mcq",
            "prompt": "L’implicite est dit rhétorique ou stylistique quand :",
            "options": [
              "Il dépend d’un accord grammatical",
              "Le mot ou l’expression relève d’une figure de style ou de rhétorique",
              "Il porte sur l’heure",
              "Il figure dans le titre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition du deuxième type d’implicite de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Du sens propre au sens symbolique",
          "stepTheme": "Du sens propre au sens symbolique",
          "stepBadge": "Du sens propre au sens symbolique",
          "paragraphText": "Propriété : la figure fait passer le mot de son sens explicite à une valeur symbolique.\n« Aile » ne désigne plus seulement l’organe du vol : elle devient symbole.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p03_q2",
            "type": "mcq",
            "prompt": "Dans l’exemple de Hugo, le passage du sens explicite au sens implicite est :",
            "options": [
              "De l’aile organe du vol à l’aile symbole de la liberté et de l’élévation",
              "De l’aile à l’oiseau domestique",
              "Du vers à la prose",
              "Du passé au présent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon oppose exactement ces deux lectures du mot « aile »."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Lire la figure dans son contexte",
          "stepTheme": "Lire la figure dans son contexte",
          "stepBadge": "Lire la figure dans son contexte",
          "paragraphText": "Méthode : identifier la figure, puis interroger le contexte qui l’entoure.\nIci, le « bagne terrestre » — lieu clos et pénible — rend sensible l’absence d’aile, donc l’absence de liberté.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p03_q3",
            "type": "mcq",
            "prompt": "Le contexte « bagne terrestre » aide à comprendre « aile » car :",
            "options": [
              "Il parle d’aviation",
              "Il évoque un enfermement auquel la liberté de l’aile s’oppose",
              "Il donne la date du poème",
              "Il nomme l’auteur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’opposition entre le bagne et l’aile fait émerger la valeur symbolique : la liberté absente."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Lire la figure au premier degré",
          "stepTheme": "Lire la figure au premier degré",
          "stepBadge": "Lire la figure au premier degré",
          "paragraphText": "Piège : ne retenir que le sens explicite de l’expression figurée.\nDire que le vers parle seulement d’oiseaux sans ailes ferait perdre tout le sens implicite du texte.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p03_q4",
            "type": "mcq",
            "prompt": "Une lecture au premier degré du vers de Hugo dirait que :",
            "options": [
              "La liberté de pensée est absente du bagne terrestre",
              "Il est question d’oiseaux privés d’ailes, sans aucune portée symbolique",
              "L’élévation de l’esprit est impossible",
              "Le bagne est une image de la condition humaine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le premier degré ignore la figure et son sens implicite : la liberté et l’élévation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le dormeur du val : sommeil et mort",
          "stepTheme": "Le dormeur du val : sommeil et mort",
          "stepBadge": "Le dormeur du val : sommeil et mort",
          "paragraphText": "Exemple d’exercice : dans « Le dormeur du val » de Rimbaud, le champ lexical souligné relève en sens explicite du sommeil.\nSa signification implicite, donnée par le corrigé de la leçon, est la mort.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p03_q5",
            "type": "mcq",
            "prompt": "Dans l’exercice sur « Le dormeur du val », la signification implicite du champ lexical du sommeil est :",
            "options": [
              "La fatigue après une marche",
              "La mort",
              "Le repos mérité du soldat",
              "La nuit qui tombe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Corrigé de la leçon : sens explicite, le sommeil ; signification implicite, la mort."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p03_q1",
          "type": "mcq",
          "prompt": "L’implicite est dit rhétorique ou stylistique quand :",
          "options": [
            "Il dépend d’un accord grammatical",
            "Le mot ou l’expression relève d’une figure de style ou de rhétorique",
            "Il porte sur l’heure",
            "Il figure dans le titre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition du deuxième type d’implicite de la leçon."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p03_q2",
          "type": "mcq",
          "prompt": "Dans l’exemple de Hugo, le passage du sens explicite au sens implicite est :",
          "options": [
            "De l’aile organe du vol à l’aile symbole de la liberté et de l’élévation",
            "De l’aile à l’oiseau domestique",
            "Du vers à la prose",
            "Du passé au présent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon oppose exactement ces deux lectures du mot « aile »."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p03_q3",
          "type": "mcq",
          "prompt": "Le contexte « bagne terrestre » aide à comprendre « aile » car :",
          "options": [
            "Il parle d’aviation",
            "Il évoque un enfermement auquel la liberté de l’aile s’oppose",
            "Il donne la date du poème",
            "Il nomme l’auteur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’opposition entre le bagne et l’aile fait émerger la valeur symbolique : la liberté absente."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p03_q4",
          "type": "mcq",
          "prompt": "Une lecture au premier degré du vers de Hugo dirait que :",
          "options": [
            "La liberté de pensée est absente du bagne terrestre",
            "Il est question d’oiseaux privés d’ailes, sans aucune portée symbolique",
            "L’élévation de l’esprit est impossible",
            "Le bagne est une image de la condition humaine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le premier degré ignore la figure et son sens implicite : la liberté et l’élévation."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p03_q5",
          "type": "mcq",
          "prompt": "Dans l’exercice sur « Le dormeur du val », la signification implicite du champ lexical du sommeil est :",
          "options": [
            "La fatigue après une marche",
            "La mort",
            "Le repos mérité du soldat",
            "La nuit qui tombe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Corrigé de la leçon : sens explicite, le sommeil ; signification implicite, la mort."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l08_implicite_p04",
      "order": 4,
      "title": "L’implicite grammatical",
      "summary": "Reconnaître l’implication implicite d’une règle grammaticale, comme l’accord du participe passé.",
      "conceptExplanation": "L’implicite grammatical : il s’agit de l’implication, c’est-à-dire de la conséquence implicite, d’une règle grammaticale.\nExemple de la leçon : « J’ai rencontré cette femme hier » et « Cette femme, je l’ai rencontrée hier ». Les participes « rencontré » et « rencontrée » sont une information explicite de forme. Mais la forme « rencontrée » implique la règle : le participe passé employé avec l’auxiliaire avoir s’accorde en genre et en nombre avec le complément d’objet direct lorsque celui-ci est placé avant.\nLa graphie du mot porte donc implicitement une information grammaticale sur la phrase.",
      "keyRule": "Une forme grammaticale peut impliquer toute une règle : lis ce que la forme suppose.",
      "formulas": [],
      "workedExample": {
        "title": "Rencontré ou rencontrée",
        "statement": "Compare : « J’ai rencontré cette femme hier » et « Cette femme, je l’ai rencontrée hier ». Quelle règle la seconde forme implique-t-elle ?",
        "methodSteps": [
          "Dans la seconde phrase, le complément d’objet direct « cette femme » est placé avant le verbe.",
          "Le participe passé prend alors un e : « rencontrée ».",
          "Règle impliquée : avec l’auxiliaire avoir, le participe passé s’accorde en genre et en nombre avec le complément d’objet direct placé avant."
        ],
        "conclusion": "La forme « rencontrée » contient implicitement la règle d’accord du participe passé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de l’implicite grammatical",
          "stepTheme": "Définition de l’implicite grammatical",
          "stepBadge": "Définition de l’implicite grammatical",
          "paragraphText": "• Implicite grammatical : implication, conséquence implicite, d’une règle grammaticale.\nL’information n’est pas énoncée ; elle est portée par la forme grammaticale elle-même.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p04_q1",
            "type": "mcq",
            "prompt": "L’implicite grammatical est :",
            "options": [
              "Un jeu de mots de l’auteur",
              "L’implication d’une règle grammaticale dans une forme de la phrase",
              "Un sous-entendu horaire",
              "Une figure de style"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Troisième type d’implicite de la leçon : celui de la règle grammaticale."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’accord révèle la place du complément",
          "stepTheme": "L’accord révèle la place du complément",
          "stepBadge": "L’accord révèle la place du complément",
          "paragraphText": "Propriété : dans l’exemple, l’accord du participe passé signale que le complément d’objet direct est placé avant le verbe.\nSans cette place, le participe resterait invariable : « j’ai rencontré cette femme ».",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p04_q2",
            "type": "mcq",
            "prompt": "La forme « je l’ai rencontrée » implique que :",
            "options": [
              "Le sujet est féminin",
              "Le complément d’objet direct est placé avant le verbe et commande l’accord",
              "Le verbe est au futur",
              "La phrase est une question"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la règle rappelée par la leçon : accord avec le complément d’objet direct placé avant, avec l’auxiliaire avoir."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Comparer les deux phrases",
          "stepTheme": "Comparer les deux phrases",
          "stepBadge": "Comparer les deux phrases",
          "paragraphText": "Méthode : comparer la phrase où le complément suit le verbe et celle où il le précède.\nLa différence de forme du participe — rencontré, rencontrée — rend la règle visible.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p04_q3",
            "type": "mcq",
            "prompt": "La comparaison des deux phrases de la leçon fait apparaître :",
            "options": [
              "Deux temps différents",
              "La différence d’accord du participe passé selon la place du complément d’objet direct",
              "Deux auteurs différents",
              "Un dialogue"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Seule la place du complément change, et avec elle l’accord du participe."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Croire que l’accord dépend du sujet",
          "stepTheme": "Croire que l’accord dépend du sujet",
          "stepBadge": "Croire que l’accord dépend du sujet",
          "paragraphText": "Piège : expliquer l’e de « rencontrée » par le sujet « je ».\nAvec l’auxiliaire avoir, l’accord se fait avec le complément d’objet direct placé avant, pas avec le sujet.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p04_q4",
            "type": "mcq",
            "prompt": "Dans « Cette femme, je l’ai rencontrée hier », le participe s’accorde avec :",
            "options": [
              "Le sujet je",
              "Le complément d’objet direct « cette femme », placé avant",
              "Le mot hier",
              "L’auxiliaire ai"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’accord porte sur le complément d’objet direct antéposé : « cette femme », féminin singulier."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L’information explicite des participes",
          "stepTheme": "L’information explicite des participes",
          "stepBadge": "L’information explicite des participes",
          "paragraphText": "Exemple : la leçon note que « rencontré » et « rencontrée » sont les participes passés du verbe rencontrer.\nC’est l’information explicite ; la règle d’accord qu’implique la seconde forme est l’implicite grammatical.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p04_q5",
            "type": "mcq",
            "prompt": "Selon la leçon, l’information explicite commune aux deux phrases est :",
            "options": [
              "La règle d’accord complète",
              "Que rencontré et rencontrée sont les participes passés du verbe rencontrer",
              "L’identité de la femme",
              "La date exacte de la rencontre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La forme du participe est explicite ; la règle qu’elle implique relève de l’implicite grammatical."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p04_q1",
          "type": "mcq",
          "prompt": "L’implicite grammatical est :",
          "options": [
            "Un jeu de mots de l’auteur",
            "L’implication d’une règle grammaticale dans une forme de la phrase",
            "Un sous-entendu horaire",
            "Une figure de style"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Troisième type d’implicite de la leçon : celui de la règle grammaticale."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p04_q2",
          "type": "mcq",
          "prompt": "La forme « je l’ai rencontrée » implique que :",
          "options": [
            "Le sujet est féminin",
            "Le complément d’objet direct est placé avant le verbe et commande l’accord",
            "Le verbe est au futur",
            "La phrase est une question"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la règle rappelée par la leçon : accord avec le complément d’objet direct placé avant, avec l’auxiliaire avoir."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p04_q3",
          "type": "mcq",
          "prompt": "La comparaison des deux phrases de la leçon fait apparaître :",
          "options": [
            "Deux temps différents",
            "La différence d’accord du participe passé selon la place du complément d’objet direct",
            "Deux auteurs différents",
            "Un dialogue"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Seule la place du complément change, et avec elle l’accord du participe."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p04_q4",
          "type": "mcq",
          "prompt": "Dans « Cette femme, je l’ai rencontrée hier », le participe s’accorde avec :",
          "options": [
            "Le sujet je",
            "Le complément d’objet direct « cette femme », placé avant",
            "Le mot hier",
            "L’auxiliaire ai"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’accord porte sur le complément d’objet direct antéposé : « cette femme », féminin singulier."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p04_q5",
          "type": "mcq",
          "prompt": "Selon la leçon, l’information explicite commune aux deux phrases est :",
          "options": [
            "La règle d’accord complète",
            "Que rencontré et rencontrée sont les participes passés du verbe rencontrer",
            "L’identité de la femme",
            "La date exacte de la rencontre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La forme du participe est explicite ; la règle qu’elle implique relève de l’implicite grammatical."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l08_implicite_p05",
      "order": 5,
      "title": "Le sous-entendu",
      "summary": "Déduire le sens d’un énoncé à partir du contexte de son expression.",
      "conceptExplanation": "Le sous-entendu est un énoncé dont le sens doit être déduit à partir du contexte de son expression afin d’être compris.\nExemple de la leçon : « Il est huit heures. » Selon le contexte, cet énoncé peut sous-entendre : tu es en retard ; tu es en avance ; c’est le moment de partir ; la séance peut commencer.\nLe même énoncé peut donc porter plusieurs sous-entendus différents : tout dépend de la situation dans laquelle il est prononcé. C’est pourquoi le sous-entendu peut être contesté, discuté.",
      "keyRule": "Sous-entendu égale contexte : sans la situation, impossible de choisir entre ses lectures possibles.",
      "formulas": [],
      "workedExample": {
        "title": "Que sous-entend « Il est huit heures » ?",
        "statement": "Un professeur entre en classe, regarde l’élève qui arrive et dit : « Il est huit heures. » Quel sous-entendu le contexte rend-il le plus probable, parmi ceux de la leçon ?",
        "methodSteps": [
          "Énoncé explicite : il est huit heures.",
          "Contexte : un élève arrive au moment où le cours doit commencer.",
          "Sous-entendu probable, selon la liste de la leçon : tu es en retard."
        ],
        "conclusion": "C’est le contexte, et lui seul, qui permet de trancher entre les sous-entendus possibles."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du sous-entendu",
          "stepTheme": "Définition du sous-entendu",
          "stepBadge": "Définition du sous-entendu",
          "paragraphText": "• Sous-entendu : énoncé dont le sens doit être déduit à partir du contexte de son expression afin d’être compris.\nHors contexte, son sens reste indécis.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p05_q1",
            "type": "mcq",
            "prompt": "Le sens d’un sous-entendu se déduit :",
            "options": [
              "Du dictionnaire seul",
              "Du contexte de son expression",
              "Du nombre de mots",
              "De la biographie de l’auteur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition de la leçon : le contexte est la clé du sous-entendu."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un énoncé, plusieurs sous-entendus",
          "stepTheme": "Un énoncé, plusieurs sous-entendus",
          "stepBadge": "Un énoncé, plusieurs sous-entendus",
          "paragraphText": "Propriété : le même énoncé peut porter plusieurs sous-entendus.\n« Il est huit heures » peut signifier : tu es en retard, tu es en avance, c’est le moment de partir, ou la séance peut commencer.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p05_q2",
            "type": "mcq",
            "prompt": "Combien de sous-entendus la leçon associe-t-elle à « Il est huit heures » ?",
            "options": [
              "Un seul, toujours le même",
              "Deux seulement",
              "Quatre possibilités selon le contexte",
              "Aucun"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Retard, avance, départ, début de séance : quatre lectures listées par la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Interroger la situation d’énonciation",
          "stepTheme": "Interroger la situation d’énonciation",
          "stepBadge": "Interroger la situation d’énonciation",
          "paragraphText": "Méthode : pour comprendre un sous-entendu, demander qui parle, à qui, où et à quel moment.\nCes éléments de contexte écartent certaines lectures et en confirment d’autres.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p05_q3",
            "type": "mcq",
            "prompt": "Pour choisir le bon sous-entendu, il faut d’abord connaître :",
            "options": [
              "La situation : qui parle, à qui, où et quand",
              "La longueur du texte",
              "Le nom de l’éditeur",
              "La date de publication uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le contexte d’expression est l’outil d’interprétation du sous-entendu."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Un sous-entendu peut être contesté",
          "stepTheme": "Un sous-entendu peut être contesté",
          "stepBadge": "Un sous-entendu peut être contesté",
          "paragraphText": "Piège : traiter un sous-entendu comme une vérité inscrite dans l’énoncé.\nLa leçon le précise : le sous-entendu peut être contesté, discuté — l’interlocuteur peut répondre qu’il n’a jamais dit cela.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p05_q4",
            "type": "mcq",
            "prompt": "Selon la leçon, le sous-entendu a pour trait distinctif de pouvoir être :",
            "options": [
              "Toujours prouvé par la grammaire",
              "Contesté, discuté",
              "Écrit en gras",
              "Traduit mot à mot"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Contestabilité du sous-entendu : c’est le point de contraste avec le présupposé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "C’est le moment de partir",
          "stepTheme": "C’est le moment de partir",
          "stepBadge": "C’est le moment de partir",
          "paragraphText": "Exemple : des invités regardent l’horloge et l’hôte dit « Il est huit heures ».\nDans ce contexte de fin de visite, le sous-entendu retenu par la leçon peut être : c’est le moment de partir.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p05_q5",
            "type": "mcq",
            "prompt": "Dans un contexte de fin de visite, « Il est huit heures » sous-entend plutôt :",
            "options": [
              "Tu es en avance",
              "La séance peut commencer",
              "C’est le moment de partir",
              "Tu dois relire ton cours"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Même énoncé, autre contexte, autre sous-entendu : ici, le signal du départ."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p05_q1",
          "type": "mcq",
          "prompt": "Le sens d’un sous-entendu se déduit :",
          "options": [
            "Du dictionnaire seul",
            "Du contexte de son expression",
            "Du nombre de mots",
            "De la biographie de l’auteur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition de la leçon : le contexte est la clé du sous-entendu."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p05_q2",
          "type": "mcq",
          "prompt": "Combien de sous-entendus la leçon associe-t-elle à « Il est huit heures » ?",
          "options": [
            "Un seul, toujours le même",
            "Deux seulement",
            "Quatre possibilités selon le contexte",
            "Aucun"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Retard, avance, départ, début de séance : quatre lectures listées par la leçon."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p05_q3",
          "type": "mcq",
          "prompt": "Pour choisir le bon sous-entendu, il faut d’abord connaître :",
          "options": [
            "La situation : qui parle, à qui, où et quand",
            "La longueur du texte",
            "Le nom de l’éditeur",
            "La date de publication uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le contexte d’expression est l’outil d’interprétation du sous-entendu."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p05_q4",
          "type": "mcq",
          "prompt": "Selon la leçon, le sous-entendu a pour trait distinctif de pouvoir être :",
          "options": [
            "Toujours prouvé par la grammaire",
            "Contesté, discuté",
            "Écrit en gras",
            "Traduit mot à mot"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Contestabilité du sous-entendu : c’est le point de contraste avec le présupposé."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p05_q5",
          "type": "mcq",
          "prompt": "Dans un contexte de fin de visite, « Il est huit heures » sous-entend plutôt :",
          "options": [
            "Tu es en avance",
            "La séance peut commencer",
            "C’est le moment de partir",
            "Tu dois relire ton cours"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Même énoncé, autre contexte, autre sous-entendu : ici, le signal du départ."
        }
      ]
    },
    {
      "id": "premiere_a1_francais_pl_l08_implicite_p06",
      "order": 6,
      "title": "Le présupposé",
      "summary": "Reconnaître le fait antérieur suggéré par l’énoncé lui-même, qui ne souffre aucune contestation.",
      "conceptExplanation": "Le présupposé : le contenu présupposé laisse entendre un fait antérieur à ce qui est dit dans l’énoncé présent. C’est un sens qui se trouve en arrière-plan mais qui est suggéré par l’énoncé lui-même.\nExemple de la leçon : « Cette classe est calme à présent » présuppose qu’elle ne bavardait plus, qu’elle a arrêté de bavarder — donc qu’elle bavardait avant.\nLa leçon insiste sur le contraste : le sous-entendu peut être contesté, discuté ; par contre, le présupposé ne souffre d’aucune contestation possible. Les exercices appliquent cette recherche aux phrases : « Je ne fume plus », « Mon frère est revenu de voyage », « Il a cessé de travailler », « Cécile s’est réveillée ».",
      "keyRule": "Présupposé égale arrière-plan imposé par l’énoncé : cherche le fait antérieur qu’il suppose nécessairement.",
      "formulas": [],
      "workedExample": {
        "title": "Le présupposé de « Je ne fume plus »",
        "statement": "Phrase d’exercice : « Je ne fume plus. » Quel fait antérieur cet énoncé présuppose-t-il ?",
        "methodSteps": [
          "Mot déclencheur : « plus », qui marque l’arrêt d’un état.",
          "Énoncé présent : la personne ne fume pas maintenant.",
          "Fait antérieur présupposé : la personne fumait auparavant."
        ],
        "conclusion": "« Je ne fume plus » présuppose nécessairement que la personne fumait avant."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du présupposé",
          "stepTheme": "Définition du présupposé",
          "stepBadge": "Définition du présupposé",
          "paragraphText": "• Présupposé : contenu qui laisse entendre un fait antérieur à ce qui est dit dans l’énoncé présent.\nCe sens se trouve en arrière-plan, mais il est suggéré par l’énoncé lui-même.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p06_q1",
            "type": "mcq",
            "prompt": "Le présupposé est un sens qui :",
            "options": [
              "Est déduit seulement du contexte extérieur",
              "Se trouve en arrière-plan mais est suggéré par l’énoncé lui-même, avec un fait antérieur",
              "Dépend de l’humeur du lecteur",
              "Figure dans le titre du texte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition de la leçon : un fait antérieur, en arrière-plan, suggéré par l’énoncé lui-même."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "À présent suppose un avant",
          "stepTheme": "À présent suppose un avant",
          "stepBadge": "À présent suppose un avant",
          "paragraphText": "Propriété : certains mots installent le présupposé, comme « à présent ».\n« Cette classe est calme à présent » suppose un état antérieur différent : la classe bavardait.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p06_q2",
            "type": "mcq",
            "prompt": "Dans l’exemple de la leçon, « à présent » présuppose que la classe :",
            "options": [
              "A toujours été calme",
              "Bavardait avant et a arrêté de bavarder",
              "Va changer de salle",
              "Est en vacances"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le calme présent n’a de sens que par contraste avec le bavardage antérieur présupposé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Chercher le fait antérieur nécessaire",
          "stepTheme": "Chercher le fait antérieur nécessaire",
          "stepBadge": "Chercher le fait antérieur nécessaire",
          "paragraphText": "Méthode : demander quel fait passé doit être vrai pour que l’énoncé présent ait un sens.\nPour « Mon frère est revenu de voyage », le fait nécessaire est le départ antérieur du frère.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p06_q3",
            "type": "mcq",
            "prompt": "« Mon frère est revenu de voyage » présuppose nécessairement que :",
            "options": [
              "Mon frère aime voyager",
              "Mon frère était parti en voyage auparavant",
              "Mon frère voyagera encore",
              "Mon frère est rentré en voiture"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On ne peut revenir que d’un départ antérieur : c’est le fait présupposé par l’énoncé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Présupposé incontestable, sous-entendu discutable",
          "stepTheme": "Présupposé incontestable, sous-entendu discutable",
          "stepBadge": "Présupposé incontestable, sous-entendu discutable",
          "paragraphText": "Piège : confondre les deux formes d’implicite sur le point de la contestation.\nLe sous-entendu peut être contesté, discuté ; le présupposé, lui, ne souffre d’aucune contestation possible.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p06_q4",
            "type": "mcq",
            "prompt": "Selon la leçon, le présupposé se distingue du sous-entendu car :",
            "options": [
              "Il est toujours plus long",
              "Il ne souffre d’aucune contestation possible",
              "Il dépend entièrement du contexte",
              "Il ne concerne que les poèmes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le contraste final de la leçon entre les deux formes d’implicite."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Il a cessé de travailler",
          "stepTheme": "Il a cessé de travailler",
          "stepBadge": "Il a cessé de travailler",
          "paragraphText": "Exemple d’exercice : « Il a cessé de travailler. »\nLe verbe « cesser » installe le présupposé : avant cet arrêt, la personne travaillait.",
          "exercise": {
            "id": "premiere_a1_francais_pl_l08_implicite_p06_q5",
            "type": "mcq",
            "prompt": "« Il a cessé de travailler » présuppose que :",
            "options": [
              "Il ne travaillera plus jamais",
              "Il travaillait auparavant",
              "Il cherche un emploi",
              "Il est en congé annuel"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Cesser suppose une activité antérieure en cours : il travaillait avant."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p06_q1",
          "type": "mcq",
          "prompt": "Le présupposé est un sens qui :",
          "options": [
            "Est déduit seulement du contexte extérieur",
            "Se trouve en arrière-plan mais est suggéré par l’énoncé lui-même, avec un fait antérieur",
            "Dépend de l’humeur du lecteur",
            "Figure dans le titre du texte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition de la leçon : un fait antérieur, en arrière-plan, suggéré par l’énoncé lui-même."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p06_q2",
          "type": "mcq",
          "prompt": "Dans l’exemple de la leçon, « à présent » présuppose que la classe :",
          "options": [
            "A toujours été calme",
            "Bavardait avant et a arrêté de bavarder",
            "Va changer de salle",
            "Est en vacances"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le calme présent n’a de sens que par contraste avec le bavardage antérieur présupposé."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p06_q3",
          "type": "mcq",
          "prompt": "« Mon frère est revenu de voyage » présuppose nécessairement que :",
          "options": [
            "Mon frère aime voyager",
            "Mon frère était parti en voyage auparavant",
            "Mon frère voyagera encore",
            "Mon frère est rentré en voiture"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On ne peut revenir que d’un départ antérieur : c’est le fait présupposé par l’énoncé."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p06_q4",
          "type": "mcq",
          "prompt": "Selon la leçon, le présupposé se distingue du sous-entendu car :",
          "options": [
            "Il est toujours plus long",
            "Il ne souffre d’aucune contestation possible",
            "Il dépend entièrement du contexte",
            "Il ne concerne que les poèmes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le contraste final de la leçon entre les deux formes d’implicite."
        },
        {
          "id": "premiere_a1_francais_pl_l08_implicite_p06_q5",
          "type": "mcq",
          "prompt": "« Il a cessé de travailler » présuppose que :",
          "options": [
            "Il ne travaillera plus jamais",
            "Il travaillait auparavant",
            "Il cherche un emploi",
            "Il est en congé annuel"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Cesser suppose une activité antérieure en cours : il travaillait avant."
        }
      ]
    }
  ]
};
