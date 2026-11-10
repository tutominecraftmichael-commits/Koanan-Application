import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Philo 1ère_Leç 9_La période comtemporaine.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const PHILO_1RE_L09_PERIODE_CONTEMPORAINE: CurriculumChapter = {
  "id": "premiere_philo_histoire_l09_periode_contemporaine",
  "subjectId": "philosophie",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 9,
  "title": "Leçon 9 : Histoire de la philosophie, la période contemporaine",
  "summary": "Épistémologie (Bachelard : l'opinion obstacle, la science par ruptures ; Jacob, Claude Bernard) et existentialisme (Sartre : l'existence précède l'essence ; essentialisme).",
  "officialVolumeHours": 5,
  "contentVersion": 2,
  "source": "Philo 1ère_Leç 9_La période comtemporaine.pdf",
  "points": [
    {
      "id": "premiere_philo_histoire_l09_periode_contemporaine_p01",
      "order": 1,
      "title": "La période contemporaine et Gaston Bachelard",
      "summary": "Du XIXe siècle à nos jours : la science et la liberté.",
      "conceptExplanation": "La période contemporaine va du XIXe siècle à nos jours. Ses réflexions portent sur deux questions :\n- les conditions d'élaboration de la connaissance scientifique : c'est l'ÉPISTÉMOLOGIE (Bachelard) ;\n- la place de la liberté dans l'existence humaine : c'est l'EXISTENTIALISME (Sartre).\n\nRécapitulatif des quatre périodes :\n- Antiquité (VIe s. av. J.-C. – Ve s. apr. J.-C.) : l'Être, la vérité, le bonheur ;\n- Moyen Âge et Renaissance (VIe – XVe s.) : philosophie et religion, philosophie et politique ;\n- période moderne (XVIe – XVIIIe s.) : la source de la connaissance ;\n- période contemporaine (XIXe s. à nos jours) : la science et la liberté.\n\nGaston Bachelard (1884-1962) : philosophe et épistémologue français. D'abord commis des postes, il obtient une licence de mathématiques et enseigne la physique et la chimie dans un collège. Il obtient ensuite une licence, puis l'agrégation de philosophie, et un doctorat ès lettres. Il occupe la chaire d'histoire et de philosophie des sciences à la Sorbonne de 1940 à 1954 (correction du document : il prend sa retraite en 1954, il n'y enseigne pas jusqu'à sa mort en 1962).\nŒuvres scientifiques : Essai sur la connaissance approchée, Le Nouvel Esprit scientifique, La Formation de l'esprit scientifique (1938), La Philosophie du non, Le Rationalisme appliqué. Œuvres littéraires : L'Eau et les Rêves, La Terre et les Rêveries de la volonté.",
      "keyRule": "Période contemporaine (XIXe s. – aujourd'hui) : épistémologie (Bachelard) et existentialisme (Sartre).",
      "formulas": [],
      "workedExample": {
        "title": "Situer un auteur",
        "statement": "Gaston Bachelard (1884-1962) appartient-il à la période moderne ou contemporaine ?",
        "methodSteps": [
          "La période moderne s'arrête au XVIIIe siècle.",
          "Bachelard vit aux XIXe et XXe siècles."
        ],
        "conclusion": "Il appartient à la période contemporaine."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Les dates",
          "stepTheme": "Les dates",
          "stepBadge": "Les dates",
          "paragraphText": "La période contemporaine va du XIXe siècle à nos jours.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p01_q1",
            "type": "mcq",
            "prompt": "En histoire de la philosophie, quand commence la période contemporaine ?",
            "options": [
              "Au VIe siècle",
              "Au XVIe siècle",
              "Au XIXe siècle, et elle dure jusqu'à nos jours",
              "Au XXIe siècle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Elle suit la période moderne (XVIe – XVIIIe siècle)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Deux questions",
          "stepTheme": "Deux questions",
          "stepBadge": "Deux questions",
          "paragraphText": "Réflexions contemporaines : les conditions d'élaboration de la connaissance scientifique et la place de la liberté dans l'existence humaine.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p01_q2",
            "type": "mcq",
            "prompt": "Sur quelles deux questions portent les réflexions de la période contemporaine (XIXe siècle à nos jours) ?",
            "options": [
              "L'Être et le bonheur",
              "La connaissance scientifique et la liberté dans l'existence humaine",
              "La religion et la politique",
              "La raison et les sens"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Épistémologie (Bachelard) et existentialisme (Sartre)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Les quatre périodes",
          "stepTheme": "Les quatre périodes",
          "stepBadge": "Les quatre périodes",
          "paragraphText": "Antiquité : l'Être, la vérité, le bonheur. Moyen Âge et Renaissance : religion, politique. Moderne : la connaissance. Contemporaine : la science, la liberté.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p01_q3",
            "type": "mcq",
            "prompt": "Quelle période de l'histoire de la philosophie s'interroge surtout sur la source de la connaissance (raison ou sens), avec Descartes, Locke et Kant ?",
            "options": [
              "L'Antiquité",
              "Le Moyen Âge et la Renaissance",
              "La période moderne",
              "La période contemporaine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La période contemporaine s'interroge, elle, sur la science et la liberté."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Bachelard",
          "stepTheme": "Bachelard",
          "stepBadge": "Bachelard",
          "paragraphText": "Gaston Bachelard (1884-1962) est un philosophe et épistémologue français.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p01_q4",
            "type": "mcq",
            "prompt": "Gaston Bachelard (1884-1962), auteur de La Formation de l'esprit scientifique, est surtout connu comme quoi ?",
            "options": [
              "Un philosophe existentialiste",
              "Un philosophe et épistémologue français",
              "Un théologien du Moyen Âge",
              "Un homme politique italien"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il réfléchit sur la manière dont se construit la science."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un parcours étonnant",
          "stepTheme": "Un parcours étonnant",
          "stepBadge": "Un parcours étonnant",
          "paragraphText": "D'abord commis des postes, Bachelard obtient une licence de mathématiques, enseigne la physique-chimie, puis devient agrégé et docteur en philosophie.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p01_q5",
            "type": "mcq",
            "prompt": "Quel était le premier métier de Gaston Bachelard (1884-1962), avant qu'il ne devienne professeur de physique-chimie puis de philosophie ?",
            "options": [
              "Médecin",
              "Commis des postes",
              "Prêtre",
              "Soldat"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il a étudié tout en travaillant aux postes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La Sorbonne",
          "stepTheme": "La Sorbonne",
          "stepBadge": "La Sorbonne",
          "paragraphText": "Bachelard occupe la chaire de philosophie des sciences à la Sorbonne de 1940 à 1954, puis prend sa retraite ; il meurt en 1962.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p01_q6",
            "type": "mcq",
            "prompt": "Gaston Bachelard, mort en 1962, a occupé la chaire de philosophie des sciences à la Sorbonne. Pendant quelle période ?",
            "options": [
              "Jusqu'à sa mort en 1962",
              "De 1940 à 1954, avant sa retraite",
              "De 1884 à 1900",
              "Il n'a jamais enseigné"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document dit « jusqu'à sa mort », mais il a pris sa retraite en 1954."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Science et rêverie",
          "stepTheme": "Science et rêverie",
          "stepBadge": "Science et rêverie",
          "paragraphText": "Bachelard a écrit des ouvrages de science (Le Nouvel Esprit scientifique) et des ouvrages de littérature (L'Eau et les Rêves).",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p01_q7",
            "type": "mcq",
            "prompt": "Parmi ces œuvres, laquelle est un ouvrage littéraire de Gaston Bachelard, et non un ouvrage sur la science ?",
            "options": [
              "Le Nouvel Esprit scientifique",
              "La Philosophie du non",
              "L'Eau et les Rêves",
              "Le Rationalisme appliqué"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il a aussi étudié l'imagination et la rêverie."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p01_q1",
          "type": "mcq",
          "prompt": "En histoire de la philosophie, quand commence la période contemporaine ?",
          "options": [
            "Au VIe siècle",
            "Au XVIe siècle",
            "Au XIXe siècle, et elle dure jusqu'à nos jours",
            "Au XXIe siècle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Elle suit la période moderne (XVIe – XVIIIe siècle)."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p01_q2",
          "type": "mcq",
          "prompt": "Sur quelles deux questions portent les réflexions de la période contemporaine (XIXe siècle à nos jours) ?",
          "options": [
            "L'Être et le bonheur",
            "La connaissance scientifique et la liberté dans l'existence humaine",
            "La religion et la politique",
            "La raison et les sens"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Épistémologie (Bachelard) et existentialisme (Sartre)."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p01_q3",
          "type": "mcq",
          "prompt": "Quelle période de l'histoire de la philosophie s'interroge surtout sur la source de la connaissance (raison ou sens), avec Descartes, Locke et Kant ?",
          "options": [
            "L'Antiquité",
            "Le Moyen Âge et la Renaissance",
            "La période moderne",
            "La période contemporaine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La période contemporaine s'interroge, elle, sur la science et la liberté."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p01_q4",
          "type": "mcq",
          "prompt": "Gaston Bachelard (1884-1962), auteur de La Formation de l'esprit scientifique, est surtout connu comme quoi ?",
          "options": [
            "Un philosophe existentialiste",
            "Un philosophe et épistémologue français",
            "Un théologien du Moyen Âge",
            "Un homme politique italien"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il réfléchit sur la manière dont se construit la science."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p01_q5",
          "type": "mcq",
          "prompt": "Quel était le premier métier de Gaston Bachelard (1884-1962), avant qu'il ne devienne professeur de physique-chimie puis de philosophie ?",
          "options": [
            "Médecin",
            "Commis des postes",
            "Prêtre",
            "Soldat"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il a étudié tout en travaillant aux postes."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p01_q6",
          "type": "mcq",
          "prompt": "Gaston Bachelard, mort en 1962, a occupé la chaire de philosophie des sciences à la Sorbonne. Pendant quelle période ?",
          "options": [
            "Jusqu'à sa mort en 1962",
            "De 1940 à 1954, avant sa retraite",
            "De 1884 à 1900",
            "Il n'a jamais enseigné"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document dit « jusqu'à sa mort », mais il a pris sa retraite en 1954."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p01_q7",
          "type": "mcq",
          "prompt": "Parmi ces œuvres, laquelle est un ouvrage littéraire de Gaston Bachelard, et non un ouvrage sur la science ?",
          "options": [
            "Le Nouvel Esprit scientifique",
            "La Philosophie du non",
            "L'Eau et les Rêves",
            "Le Rationalisme appliqué"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il a aussi étudié l'imagination et la rêverie."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_l09_periode_contemporaine_p02",
      "order": 2,
      "title": "Bachelard : l'opinion, premier obstacle",
      "summary": "La science s'oppose à l'opinion ; toute connaissance répond à une question.",
      "conceptExplanation": "Texte (Gaston Bachelard, La Formation de l'esprit scientifique, 1938) :\n« La science, dans son besoin d'achèvement comme dans son principe, s'oppose absolument à l'opinion. S'il lui arrive, sur un point particulier, de légitimer l'opinion, c'est pour d'autres raisons que celles qui fondent l'opinion ; de sorte que l'opinion a, en droit, toujours tort. L'opinion pense mal, elle ne pense pas ; elle traduit des besoins en connaissances. En désignant les objets par leur utilité, elle s'interdit de les connaître. On ne peut rien fonder sur l'opinion ; il faut d'abord la détruire. Elle est le premier obstacle à surmonter. (…) Avant tout, il faut savoir poser des problèmes. Et quoi qu'on dise, dans la vie scientifique, les problèmes ne se posent pas d'eux-mêmes. C'est précisément ce « sens du problème » qui donne la marque du véritable esprit scientifique. Pour un esprit scientifique, toute connaissance est une réponse à une question. S'il n'y a pas eu de question, il ne peut y avoir connaissance scientifique. Rien ne va de soi. Rien n'est donné. Tout est construit. »\n\nExplication :\n- l'opinion : jugement non vérifié, fondé sur l'habitude, l'utilité ou le besoin ;\n- « elle traduit des besoins en connaissances » : elle croit savoir ce qui l'arrange ou ce qui lui sert ;\n- obstacle épistémologique : ce qui, dans l'esprit, empêche la connaissance scientifique (préjugés, habitudes) ;\n- « le sens du problème » : savoir poser clairement une question.\n\nPosition : l'opinion prend les besoins pour des connaissances ; elle constitue un véritable obstacle épistémologique. La science se construit CONTRE l'opinion, à partir de questions bien posées.",
      "keyRule": "Bachelard : « L'opinion a, en droit, toujours tort » ; elle est le premier obstacle épistémologique. « Rien n'est donné. Tout est construit. »",
      "formulas": [],
      "workedExample": {
        "title": "Un exemple d'opinion",
        "statement": "Quelqu'un dit : « Le soleil tourne autour de la Terre, je le vois se lever et se coucher. » Pourquoi est-ce une opinion au sens de Bachelard ?",
        "methodSteps": [
          "Le jugement vient de l'apparence immédiate, sans question posée ni vérification.",
          "La science a dû détruire cette opinion pour établir que la Terre tourne autour du Soleil."
        ],
        "conclusion": "C'est une opinion, obstacle à la connaissance scientifique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Science contre opinion",
          "stepTheme": "Science contre opinion",
          "stepBadge": "Science contre opinion",
          "paragraphText": "« La science (…) s'oppose absolument à l'opinion (…) de sorte que l'opinion a, en droit, toujours tort. »",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p02_q1",
            "type": "mcq",
            "prompt": "Bachelard écrit : « La science, dans son besoin d'achèvement comme dans son principe, s'oppose absolument à l'opinion. » Quelle conclusion en tire-t-il sur l'opinion ?",
            "options": [
              "Elle a parfois raison",
              "Elle a, en droit, toujours tort",
              "Elle est le fondement de la science",
              "Elle vaut autant que la science"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Même quand elle tombe juste, c'est pour de mauvaises raisons."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Des besoins pris pour des connaissances",
          "stepTheme": "Des besoins pris pour des connaissances",
          "stepBadge": "Des besoins pris pour des connaissances",
          "paragraphText": "« L'opinion pense mal, elle ne pense pas ; elle traduit des besoins en connaissances. En désignant les objets par leur utilité, elle s'interdit de les connaître. »",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p02_q2",
            "type": "mcq",
            "prompt": "Selon Bachelard, l'opinion « traduit des besoins en connaissances » et désigne « les objets par leur utilité ». Pourquoi cela l'empêche-t-il de connaître ?",
            "options": [
              "Parce qu'elle s'intéresse à ce qui lui sert, pas à ce que sont réellement les choses",
              "Parce qu'elle est trop savante",
              "Parce qu'elle utilise des appareils",
              "Parce qu'elle pose trop de questions"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Connaître un objet par son usage, ce n'est pas le connaître scientifiquement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'obstacle épistémologique",
          "stepTheme": "L'obstacle épistémologique",
          "stepBadge": "L'obstacle épistémologique",
          "paragraphText": "Pour Bachelard, l'opinion est le premier obstacle épistémologique : il faut d'abord la détruire.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p02_q3",
            "type": "mcq",
            "prompt": "Bachelard dit de l'opinion : « On ne peut rien fonder sur l'opinion ; il faut d'abord la détruire. Elle est le premier obstacle à surmonter. » Comment appelle-t-on ce type d'obstacle ?",
            "options": [
              "Un obstacle physique",
              "Un obstacle épistémologique",
              "Un obstacle politique",
              "Un obstacle religieux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est un obstacle dans l'esprit, qui freine la connaissance scientifique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le sens du problème",
          "stepTheme": "Le sens du problème",
          "stepBadge": "Le sens du problème",
          "paragraphText": "« Avant tout, il faut savoir poser des problèmes. (…) C'est précisément ce « sens du problème » qui donne la marque du véritable esprit scientifique. »",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p02_q4",
            "type": "mcq",
            "prompt": "Selon Bachelard, dans La Formation de l'esprit scientifique, qu'est-ce qui donne « la marque du véritable esprit scientifique » ?",
            "options": [
              "Le sens du problème : savoir poser des questions",
              "Le fait d'avoir beaucoup d'opinions",
              "L'utilité des objets",
              "La mémoire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les problèmes ne se posent pas d'eux-mêmes : il faut savoir les poser."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une réponse à une question",
          "stepTheme": "Une réponse à une question",
          "stepBadge": "Une réponse à une question",
          "paragraphText": "« Pour un esprit scientifique, toute connaissance est une réponse à une question. S'il n'y a pas eu de question, il ne peut y avoir connaissance scientifique. »",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p02_q5",
            "type": "mcq",
            "prompt": "Bachelard écrit : « Pour un esprit scientifique, toute connaissance est une réponse à une question. » Que se passe-t-il s'il n'y a pas eu de question ?",
            "options": [
              "La connaissance est encore meilleure",
              "Il ne peut y avoir connaissance scientifique",
              "L'opinion devient science",
              "Dieu donne la réponse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La science commence par un problème bien posé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Tout est construit",
          "stepTheme": "Tout est construit",
          "stepBadge": "Tout est construit",
          "paragraphText": "« Rien ne va de soi. Rien n'est donné. Tout est construit. »",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p02_q6",
            "type": "mcq",
            "prompt": "Bachelard conclut : « Rien ne va de soi. Rien n'est donné. Tout est construit. » Que signifie cette phrase pour la science ?",
            "options": [
              "Que la connaissance scientifique est construite par l'esprit, à partir de questions",
              "Que les faits se présentent tout seuls",
              "Que la science est inutile",
              "Que l'opinion suffit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le savoir scientifique n'est pas reçu passivement : il est élaboré."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "La position de Bachelard",
          "stepTheme": "La position de Bachelard",
          "stepBadge": "La position de Bachelard",
          "paragraphText": "L'opinion prend les besoins pour des connaissances et constitue un véritable obstacle épistémologique.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p02_q7",
            "type": "mcq",
            "prompt": "Quelle est la thèse de Gaston Bachelard dans l'extrait de La Formation de l'esprit scientifique (1938) ?",
            "options": [
              "L'opinion est la base de la science",
              "L'opinion prend les besoins pour des connaissances et constitue un obstacle épistémologique",
              "L'existence précède l'essence",
              "Toute connaissance vient de l'expérience"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« L'existence précède l'essence » est la thèse de Sartre."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p02_q1",
          "type": "mcq",
          "prompt": "Bachelard écrit : « La science, dans son besoin d'achèvement comme dans son principe, s'oppose absolument à l'opinion. » Quelle conclusion en tire-t-il sur l'opinion ?",
          "options": [
            "Elle a parfois raison",
            "Elle a, en droit, toujours tort",
            "Elle est le fondement de la science",
            "Elle vaut autant que la science"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Même quand elle tombe juste, c'est pour de mauvaises raisons."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p02_q2",
          "type": "mcq",
          "prompt": "Selon Bachelard, l'opinion « traduit des besoins en connaissances » et désigne « les objets par leur utilité ». Pourquoi cela l'empêche-t-il de connaître ?",
          "options": [
            "Parce qu'elle s'intéresse à ce qui lui sert, pas à ce que sont réellement les choses",
            "Parce qu'elle est trop savante",
            "Parce qu'elle utilise des appareils",
            "Parce qu'elle pose trop de questions"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Connaître un objet par son usage, ce n'est pas le connaître scientifiquement."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p02_q3",
          "type": "mcq",
          "prompt": "Bachelard dit de l'opinion : « On ne peut rien fonder sur l'opinion ; il faut d'abord la détruire. Elle est le premier obstacle à surmonter. » Comment appelle-t-on ce type d'obstacle ?",
          "options": [
            "Un obstacle physique",
            "Un obstacle épistémologique",
            "Un obstacle politique",
            "Un obstacle religieux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est un obstacle dans l'esprit, qui freine la connaissance scientifique."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p02_q4",
          "type": "mcq",
          "prompt": "Selon Bachelard, dans La Formation de l'esprit scientifique, qu'est-ce qui donne « la marque du véritable esprit scientifique » ?",
          "options": [
            "Le sens du problème : savoir poser des questions",
            "Le fait d'avoir beaucoup d'opinions",
            "L'utilité des objets",
            "La mémoire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les problèmes ne se posent pas d'eux-mêmes : il faut savoir les poser."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p02_q5",
          "type": "mcq",
          "prompt": "Bachelard écrit : « Pour un esprit scientifique, toute connaissance est une réponse à une question. » Que se passe-t-il s'il n'y a pas eu de question ?",
          "options": [
            "La connaissance est encore meilleure",
            "Il ne peut y avoir connaissance scientifique",
            "L'opinion devient science",
            "Dieu donne la réponse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La science commence par un problème bien posé."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p02_q6",
          "type": "mcq",
          "prompt": "Bachelard conclut : « Rien ne va de soi. Rien n'est donné. Tout est construit. » Que signifie cette phrase pour la science ?",
          "options": [
            "Que la connaissance scientifique est construite par l'esprit, à partir de questions",
            "Que les faits se présentent tout seuls",
            "Que la science est inutile",
            "Que l'opinion suffit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le savoir scientifique n'est pas reçu passivement : il est élaboré."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p02_q7",
          "type": "mcq",
          "prompt": "Quelle est la thèse de Gaston Bachelard dans l'extrait de La Formation de l'esprit scientifique (1938) ?",
          "options": [
            "L'opinion est la base de la science",
            "L'opinion prend les besoins pour des connaissances et constitue un obstacle épistémologique",
            "L'existence précède l'essence",
            "Toute connaissance vient de l'expérience"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« L'existence précède l'essence » est la thèse de Sartre."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_l09_periode_contemporaine_p03",
      "order": 3,
      "title": "L'épistémologie : une science qui progresse par ruptures",
      "summary": "Vérité approchée, ruptures ; théorie et expérience (Jacob, Claude Bernard).",
      "conceptExplanation": "L'épistémologie bachelardienne : une réflexion sur le processus d'élaboration de la connaissance scientifique.\n- La vérité scientifique est une réalité dynamique, toujours APPROCHÉE, jamais achevée, ni définitive, ni absolue.\n- Le progrès scientifique n'est pas une continuité, une simple accumulation de savoirs : toute science progresse par FRACTURES, par RUPTURES, en luttant contre les préjugés et les habitudes mentales, et en se remettant sans cesse en cause.\nExemple de rupture : passer de l'idée que la Terre est immobile au centre du monde à l'idée qu'elle tourne autour du Soleil.\n\nThéorie et expérience :\n- François Jacob (prix Nobel de médecine 1965), La Souris, la mouche et l'homme (1997) : « On ne peut arriver à une observation de quelque valeur sans avoir, en commençant, une certaine idée de ce qu'il faut observer. » Observer et accumuler des résultats ne suffit pas : une idée doit guider le regard.\n- Claude Bernard (1813-1878), Introduction à l'étude de la médecine expérimentale (1865) : « Le savant complet est celui qui embrasse à la fois la théorie et la pratique expérimentale. 1° Il constate un fait ; 2° à propos de ce fait, une idée naît dans son esprit ; 3° en vue de cette idée, il raisonne, institue une expérience (…) ; 4° de cette expérience résultent de nouveaux phénomènes qu'il faut observer, et ainsi de suite. »\n- Chez Claude Bernard, l'observateur doit être passif (« le photographe des phénomènes »), l'expérimentateur actif (il interroge la nature avec une idée préconçue, une hypothèse).\n\nLa démarche expérimentale : observation → hypothèse → expérience → nouvelle observation (conclusion).",
      "keyRule": "Épistémologie (Bachelard) : vérité toujours approchée ; progrès par ruptures. Méthode expérimentale (Claude Bernard) : fait → idée → expérience → observation.",
      "formulas": [],
      "workedExample": {
        "title": "Ordonner la démarche",
        "statement": "Remets dans l'ordre la démarche du savant selon Claude Bernard : « il institue une expérience » ; « une idée naît » ; « il constate un fait » ; « il observe les nouveaux phénomènes ».",
        "methodSteps": [
          "On part d'un fait constaté.",
          "Ce fait fait naître une idée (hypothèse).",
          "On teste l'idée par une expérience, puis on observe ses résultats."
        ],
        "conclusion": "Fait → idée → expérience → observation des résultats."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'épistémologie",
          "stepTheme": "L'épistémologie",
          "stepBadge": "L'épistémologie",
          "paragraphText": "L'épistémologie bachelardienne est une réflexion sur le processus d'élaboration de la connaissance scientifique.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p03_q1",
            "type": "mcq",
            "prompt": "Chez Gaston Bachelard, qu'est-ce que l'épistémologie ?",
            "options": [
              "L'étude de l'Être",
              "Une réflexion sur le processus d'élaboration de la connaissance scientifique",
              "L'art de bien parler",
              "L'étude des passions"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Du grec « épistémè » (science) et « logos » (discours, étude)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une vérité approchée",
          "stepTheme": "Une vérité approchée",
          "stepBadge": "Une vérité approchée",
          "paragraphText": "Pour Bachelard, la vérité scientifique est toujours approchée, jamais achevée, ni définitive, ni absolue.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p03_q2",
            "type": "mcq",
            "prompt": "Pour Bachelard, auteur de l'Essai sur la connaissance approchée, comment se caractérise la vérité scientifique ?",
            "options": [
              "Absolue et définitive",
              "Toujours approchée, jamais achevée",
              "Relative à chaque individu",
              "Révélée par Dieu"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est une réalité dynamique, toujours à corriger."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Des ruptures",
          "stepTheme": "Des ruptures",
          "stepBadge": "Des ruptures",
          "paragraphText": "La science ne progresse pas par accumulation, mais par fractures, par ruptures, en luttant contre les préjugés.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p03_q3",
            "type": "mcq",
            "prompt": "Selon l'épistémologie de Bachelard, comment la science progresse-t-elle ?",
            "options": [
              "Par une simple accumulation continue de savoirs",
              "Par des ruptures, en luttant contre les préjugés et en se remettant en cause",
              "En suivant l'opinion",
              "Sans jamais changer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque grand progrès casse une ancienne façon de penser."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une idée guide l'observation",
          "stepTheme": "Une idée guide l'observation",
          "stepBadge": "Une idée guide l'observation",
          "paragraphText": "François Jacob : « On ne peut arriver à une observation de quelque valeur sans avoir, en commençant, une certaine idée de ce qu'il faut observer. »",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p03_q4",
            "type": "mcq",
            "prompt": "François Jacob écrit : « On ne peut arriver à une observation de quelque valeur sans avoir, en commençant, une certaine idée de ce qu'il faut observer. » Quelle idée défend-il ?",
            "options": [
              "Il suffit d'accumuler des observations pour faire une théorie",
              "Une idée, une théorie, doit guider l'observation scientifique",
              "L'observation est inutile",
              "Il faut observer sans rien penser"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Contempler un objet pendant des années ne produit rien sans question."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "La démarche du savant",
          "stepTheme": "La démarche du savant",
          "stepBadge": "La démarche du savant",
          "paragraphText": "Claude Bernard : 1° il constate un fait ; 2° une idée naît ; 3° il institue une expérience ; 4° il observe de nouveaux phénomènes.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p03_q5",
            "type": "mcq",
            "prompt": "Selon Claude Bernard, le savant « constate un fait », puis « une idée naît dans son esprit ». Quelle est l'étape suivante ?",
            "options": [
              "Il publie sa conclusion",
              "En vue de cette idée, il raisonne et institue une expérience",
              "Il abandonne l'idée",
              "Il demande l'avis de l'opinion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'expérience sert à contrôler l'idée (l'hypothèse)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Observateur et expérimentateur",
          "stepTheme": "Observateur et expérimentateur",
          "stepBadge": "Observateur et expérimentateur",
          "paragraphText": "Pour Claude Bernard, l'observateur est passif, « le photographe des phénomènes » ; l'expérimentateur est actif, il interroge la nature avec une idée préconçue.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p03_q6",
            "type": "mcq",
            "prompt": "Claude Bernard écrit : « L'observateur doit être le photographe des phénomènes (…) l'esprit de l'expérimentateur doit être actif. » Quelle différence fait-il entre les deux ?",
            "options": [
              "Aucune",
              "L'observateur constate sans idée préconçue ; l'expérimentateur interroge la nature avec une hypothèse",
              "L'observateur invente ; l'expérimentateur photographie",
              "Les deux sont passifs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le savant complet est les deux à la fois."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Entre deux observations",
          "stepTheme": "Entre deux observations",
          "stepBadge": "Entre deux observations",
          "paragraphText": "« L'esprit du savant se trouve en quelque sorte toujours placé entre deux observations : l'une qui sert de point de départ au raisonnement, et l'autre qui lui sert de conclusion. »",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p03_q7",
            "type": "mcq",
            "prompt": "Claude Bernard écrit que l'esprit du savant est « toujours placé entre deux observations : l'une qui sert de point de départ au raisonnement, et l'autre qui lui sert de conclusion ». Quel rapport entre théorie et expérience cela montre-t-il ?",
            "options": [
              "La théorie se passe de l'expérience",
              "La théorie et l'expérience sont liées : le raisonnement part de l'expérience et y revient",
              "L'expérience se passe de la théorie",
              "Les deux s'opposent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le savant complet embrasse à la fois la théorie et la pratique expérimentale."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p03_q1",
          "type": "mcq",
          "prompt": "Chez Gaston Bachelard, qu'est-ce que l'épistémologie ?",
          "options": [
            "L'étude de l'Être",
            "Une réflexion sur le processus d'élaboration de la connaissance scientifique",
            "L'art de bien parler",
            "L'étude des passions"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Du grec « épistémè » (science) et « logos » (discours, étude)."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p03_q2",
          "type": "mcq",
          "prompt": "Pour Bachelard, auteur de l'Essai sur la connaissance approchée, comment se caractérise la vérité scientifique ?",
          "options": [
            "Absolue et définitive",
            "Toujours approchée, jamais achevée",
            "Relative à chaque individu",
            "Révélée par Dieu"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est une réalité dynamique, toujours à corriger."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p03_q3",
          "type": "mcq",
          "prompt": "Selon l'épistémologie de Bachelard, comment la science progresse-t-elle ?",
          "options": [
            "Par une simple accumulation continue de savoirs",
            "Par des ruptures, en luttant contre les préjugés et en se remettant en cause",
            "En suivant l'opinion",
            "Sans jamais changer"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque grand progrès casse une ancienne façon de penser."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p03_q4",
          "type": "mcq",
          "prompt": "François Jacob écrit : « On ne peut arriver à une observation de quelque valeur sans avoir, en commençant, une certaine idée de ce qu'il faut observer. » Quelle idée défend-il ?",
          "options": [
            "Il suffit d'accumuler des observations pour faire une théorie",
            "Une idée, une théorie, doit guider l'observation scientifique",
            "L'observation est inutile",
            "Il faut observer sans rien penser"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Contempler un objet pendant des années ne produit rien sans question."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p03_q5",
          "type": "mcq",
          "prompt": "Selon Claude Bernard, le savant « constate un fait », puis « une idée naît dans son esprit ». Quelle est l'étape suivante ?",
          "options": [
            "Il publie sa conclusion",
            "En vue de cette idée, il raisonne et institue une expérience",
            "Il abandonne l'idée",
            "Il demande l'avis de l'opinion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'expérience sert à contrôler l'idée (l'hypothèse)."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p03_q6",
          "type": "mcq",
          "prompt": "Claude Bernard écrit : « L'observateur doit être le photographe des phénomènes (…) l'esprit de l'expérimentateur doit être actif. » Quelle différence fait-il entre les deux ?",
          "options": [
            "Aucune",
            "L'observateur constate sans idée préconçue ; l'expérimentateur interroge la nature avec une hypothèse",
            "L'observateur invente ; l'expérimentateur photographie",
            "Les deux sont passifs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le savant complet est les deux à la fois."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p03_q7",
          "type": "mcq",
          "prompt": "Claude Bernard écrit que l'esprit du savant est « toujours placé entre deux observations : l'une qui sert de point de départ au raisonnement, et l'autre qui lui sert de conclusion ». Quel rapport entre théorie et expérience cela montre-t-il ?",
          "options": [
            "La théorie se passe de l'expérience",
            "La théorie et l'expérience sont liées : le raisonnement part de l'expérience et y revient",
            "L'expérience se passe de la théorie",
            "Les deux s'opposent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le savant complet embrasse à la fois la théorie et la pratique expérimentale."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_l09_periode_contemporaine_p04",
      "order": 4,
      "title": "Sartre : l'existence précède l'essence",
      "summary": "L'homme existe d'abord, puis il se définit par ses actes.",
      "conceptExplanation": "Texte (Jean-Paul Sartre, L'existentialisme est un humanisme, 1946) :\n« Lorsqu'on considère un objet fabriqué, comme par exemple un livre ou un coupe-papier, cet objet a été fabriqué par un artisan qui s'est inspiré d'un concept (…). Nous dirons donc que, pour le coupe-papier, l'essence – c'est-à-dire l'ensemble des recettes et des qualités qui permettent de le produire et de le définir – précède l'existence. (…) Lorsque nous concevons un Dieu créateur, ce Dieu est assimilé la plupart du temps à un artisan supérieur (…). L'existentialisme athée (…) déclare que si Dieu n'existe pas, il y a au moins un être chez qui l'existence précède l'essence. (…) Cela signifie que l'homme existe d'abord, se rencontre, surgit dans le monde, et qu'il se définit après. L'homme tel que le conçoit l'existentialiste, s'il n'est pas définissable, c'est qu'il n'est d'abord rien. Il ne sera qu'ensuite, et tel qu'il se sera fait. »\n\nL'auteur : Jean-Paul Sartre, né à Paris le 21 juin 1905, mort à Paris le 15 avril 1980. Entré à l'École normale supérieure en 1924, agrégé de philosophie en 1929, il enseigne de 1931 jusqu'à la Seconde Guerre mondiale. En 1945, il quitte l'enseignement pour écrire. En 1964, il refuse le prix Nobel de littérature. Œuvres : L'Imaginaire, L'Être et le Néant, L'existentialisme est un humanisme, Critique de la raison dialectique, Huis clos, Les Chemins de la liberté.\n\nMots :\n- essence : ce qui définit une chose, sa nature, « l'ensemble des recettes et des qualités » ;\n- existence : le fait d'être là, réellement, dans le monde ;\n- le coupe-papier : l'artisan a l'idée de l'objet AVANT de le fabriquer → l'essence précède l'existence.\n\nPosition : chez l'homme, l'existence précède l'essence : l'homme existe d'abord, surgit dans le monde, et se définit ensuite par ses choix et ses actes.",
      "keyRule": "Objet fabriqué : l'essence précède l'existence. Homme (Sartre) : l'existence précède l'essence ; il n'est rien d'abord et devient ce qu'il se fait.",
      "formulas": [],
      "workedExample": {
        "title": "Le coupe-papier et l'homme",
        "statement": "Pourquoi, selon Sartre, l'homme n'est-il pas comme un coupe-papier ?",
        "methodSteps": [
          "Pour le coupe-papier, l'artisan a d'abord l'idée (l'essence), puis il fabrique l'objet (l'existence).",
          "Si Dieu n'existe pas, aucun « artisan » n'a d'idée de l'homme avant qu'il existe."
        ],
        "conclusion": "L'homme existe d'abord ; c'est lui qui se donne ensuite son essence par ce qu'il fait."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'auteur",
          "stepTheme": "L'auteur",
          "stepBadge": "L'auteur",
          "paragraphText": "Jean-Paul Sartre (1905-1980), philosophe et écrivain français, refuse le prix Nobel de littérature en 1964.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p04_q1",
            "type": "mcq",
            "prompt": "Quel philosophe français (1905-1980), auteur de L'Être et le Néant et de Huis clos, a refusé le prix Nobel de littérature en 1964 ?",
            "options": [
              "Gaston Bachelard",
              "Jean-Paul Sartre",
              "René Descartes",
              "Henri Bergson"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sartre refusait les honneurs officiels."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'essence",
          "stepTheme": "L'essence",
          "stepBadge": "L'essence",
          "paragraphText": "Pour Sartre, l'essence est « l'ensemble des recettes et des qualités qui permettent de produire et de définir » une chose.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p04_q2",
            "type": "mcq",
            "prompt": "Dans L'existentialisme est un humanisme, Sartre définit l'essence comme « l'ensemble des recettes et des qualités qui permettent de le produire et de le définir ». Que désigne donc l'essence ?",
            "options": [
              "Le carburant d'une machine",
              "Ce qui définit une chose, sa nature",
              "Le fait d'exister",
              "La liberté"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'existence, elle, est le fait d'être là."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le coupe-papier",
          "stepTheme": "Le coupe-papier",
          "stepBadge": "Le coupe-papier",
          "paragraphText": "L'artisan a l'idée du coupe-papier avant de le fabriquer : pour l'objet fabriqué, l'essence précède l'existence.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p04_q3",
            "type": "mcq",
            "prompt": "Sartre explique qu'un artisan fabrique un coupe-papier en s'inspirant d'un concept et en sachant à quoi l'objet va servir. Pour le coupe-papier, qu'est-ce qui vient en premier ?",
            "options": [
              "L'existence",
              "L'essence (l'idée de l'objet)",
              "La liberté",
              "Le hasard"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Pour le coupe-papier, l'essence (…) précède l'existence. »"
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'existence précède l'essence",
          "stepTheme": "L'existence précède l'essence",
          "stepBadge": "L'existence précède l'essence",
          "paragraphText": "Chez l'homme, l'existence précède l'essence : il « existe d'abord, se rencontre, surgit dans le monde, et se définit après ».",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p04_q4",
            "type": "mcq",
            "prompt": "Sartre écrit : « l'homme existe d'abord, se rencontre, surgit dans le monde, et (…) se définit après ». Comment résume-t-on cette thèse ?",
            "options": [
              "L'essence précède l'existence",
              "L'existence précède l'essence",
              "L'homme est une table rase",
              "L'homme est un coupe-papier"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la formule centrale de l'existentialisme sartrien."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Tel qu'il se sera fait",
          "stepTheme": "Tel qu'il se sera fait",
          "stepBadge": "Tel qu'il se sera fait",
          "paragraphText": "« L'homme (…) n'est d'abord rien. Il ne sera qu'ensuite, et tel qu'il se sera fait. »",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p04_q5",
            "type": "mcq",
            "prompt": "Sartre écrit : « L'homme (…) n'est d'abord rien. Il ne sera qu'ensuite, et tel qu'il se sera fait. » Selon cette idée, qu'est-ce qui fait qu'un homme est courageux ?",
            "options": [
              "Sa naissance",
              "Ses actes courageux",
              "Sa famille",
              "Le destin"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On n'est pas courageux par nature : on le devient en agissant."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Si Dieu n'existe pas",
          "stepTheme": "Si Dieu n'existe pas",
          "stepBadge": "Si Dieu n'existe pas",
          "paragraphText": "Pour l'existentialisme athée, si Dieu n'existe pas, il n'y a pas d'« artisan supérieur » qui aurait conçu l'homme d'avance.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p04_q6",
            "type": "mcq",
            "prompt": "Sartre compare le Dieu créateur à « un artisan supérieur ». Pourquoi l'existentialisme athée affirme-t-il que, chez l'homme, l'existence précède l'essence ?",
            "options": [
              "Parce que les hommes sont fabriqués en usine",
              "Parce que, si Dieu n'existe pas, personne n'a conçu l'idée de l'homme avant qu'il existe",
              "Parce que l'homme a une nature fixée d'avance",
              "Parce que l'opinion le dit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sans créateur, pas de « plan » préalable de l'homme."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Ses œuvres",
          "stepTheme": "Ses œuvres",
          "stepBadge": "Ses œuvres",
          "paragraphText": "Sartre a écrit L'Imaginaire, L'Être et le Néant, L'existentialisme est un humanisme, Critique de la raison dialectique, Huis clos, Les Chemins de la liberté.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p04_q7",
            "type": "mcq",
            "prompt": "Parmi ces ouvrages, lequel est de Jean-Paul Sartre ?",
            "options": [
              "La Formation de l'esprit scientifique",
              "L'Être et le Néant",
              "Critique de la raison pure",
              "Le Prince"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les autres sont de Bachelard, Kant et Machiavel."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p04_q1",
          "type": "mcq",
          "prompt": "Quel philosophe français (1905-1980), auteur de L'Être et le Néant et de Huis clos, a refusé le prix Nobel de littérature en 1964 ?",
          "options": [
            "Gaston Bachelard",
            "Jean-Paul Sartre",
            "René Descartes",
            "Henri Bergson"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sartre refusait les honneurs officiels."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p04_q2",
          "type": "mcq",
          "prompt": "Dans L'existentialisme est un humanisme, Sartre définit l'essence comme « l'ensemble des recettes et des qualités qui permettent de le produire et de le définir ». Que désigne donc l'essence ?",
          "options": [
            "Le carburant d'une machine",
            "Ce qui définit une chose, sa nature",
            "Le fait d'exister",
            "La liberté"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'existence, elle, est le fait d'être là."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p04_q3",
          "type": "mcq",
          "prompt": "Sartre explique qu'un artisan fabrique un coupe-papier en s'inspirant d'un concept et en sachant à quoi l'objet va servir. Pour le coupe-papier, qu'est-ce qui vient en premier ?",
          "options": [
            "L'existence",
            "L'essence (l'idée de l'objet)",
            "La liberté",
            "Le hasard"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Pour le coupe-papier, l'essence (…) précède l'existence. »"
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p04_q4",
          "type": "mcq",
          "prompt": "Sartre écrit : « l'homme existe d'abord, se rencontre, surgit dans le monde, et (…) se définit après ». Comment résume-t-on cette thèse ?",
          "options": [
            "L'essence précède l'existence",
            "L'existence précède l'essence",
            "L'homme est une table rase",
            "L'homme est un coupe-papier"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la formule centrale de l'existentialisme sartrien."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p04_q5",
          "type": "mcq",
          "prompt": "Sartre écrit : « L'homme (…) n'est d'abord rien. Il ne sera qu'ensuite, et tel qu'il se sera fait. » Selon cette idée, qu'est-ce qui fait qu'un homme est courageux ?",
          "options": [
            "Sa naissance",
            "Ses actes courageux",
            "Sa famille",
            "Le destin"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On n'est pas courageux par nature : on le devient en agissant."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p04_q6",
          "type": "mcq",
          "prompt": "Sartre compare le Dieu créateur à « un artisan supérieur ». Pourquoi l'existentialisme athée affirme-t-il que, chez l'homme, l'existence précède l'essence ?",
          "options": [
            "Parce que les hommes sont fabriqués en usine",
            "Parce que, si Dieu n'existe pas, personne n'a conçu l'idée de l'homme avant qu'il existe",
            "Parce que l'homme a une nature fixée d'avance",
            "Parce que l'opinion le dit"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sans créateur, pas de « plan » préalable de l'homme."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p04_q7",
          "type": "mcq",
          "prompt": "Parmi ces ouvrages, lequel est de Jean-Paul Sartre ?",
          "options": [
            "La Formation de l'esprit scientifique",
            "L'Être et le Néant",
            "Critique de la raison pure",
            "Le Prince"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les autres sont de Bachelard, Kant et Machiavel."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_l09_periode_contemporaine_p05",
      "order": 5,
      "title": "Existentialisme et essentialisme",
      "summary": "Deux tendances de l'existentialisme ; l'essentialisme, son contraire.",
      "conceptExplanation": "L'existentialisme : courant philosophique qui considère que l'homme, en raison de sa liberté, est une valeur fondamentale. Il accorde la priorité à l'existence.\n\nCe n'est pas un courant homogène ; il a deux tendances :\n- l'existentialisme chrétien (croyant) : Søren Kierkegaard, Gabriel Marcel, Karl Jaspers ;\n- l'existentialisme athée : Jean-Paul Sartre (et, selon Sartre, Martin Heidegger).\n\nL'essentialisme : doctrine qui considère qu'il existe une essence humaine ANTÉRIEURE à l'existence de l'homme, par laquelle on peut savoir précisément ce qu'il est. Exemple : l'idée qu'une « nature humaine » fixée d'avance détermine ce que chacun doit être.\n\nComparer :\n- essentialisme : essence → existence (comme pour le coupe-papier) ;\n- existentialisme : existence → essence (l'homme se fait par ses choix).\n\nConséquence : pour l'existentialiste, l'homme est libre et responsable de ce qu'il devient ; il ne peut pas dire « je suis né comme ça ».\n\nTexte d'entraînement (Bergson, Essai sur les données immédiates de la conscience) : « On appelle liberté le rapport du moi concret à l'acte qu'il accomplit. Ce rapport est indéfinissable, précisément parce que nous sommes libres. (…) C'est pourquoi toute définition de la liberté donnera raison au déterminisme. » Problème : peut-on définir la liberté ? Thèse : non, la définir, c'est la figer et donner raison au déterminisme.",
      "keyRule": "Existentialisme : priorité à l'existence et à la liberté (tendance chrétienne et tendance athée). Essentialisme : une essence humaine précède l'existence.",
      "formulas": [],
      "workedExample": {
        "title": "Existentialiste ou essentialiste ?",
        "statement": "Quelqu'un dit : « Il est né voleur, il restera voleur toute sa vie. » Quelle conception de l'homme exprime-t-il ?",
        "methodSteps": [
          "Il suppose une nature fixée dès la naissance, avant tout choix.",
          "C'est une essence qui précède l'existence."
        ],
        "conclusion": "Une conception essentialiste ; l'existentialiste répondrait que l'homme peut toujours se choisir autrement."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'existentialisme",
          "stepTheme": "L'existentialisme",
          "stepBadge": "L'existentialisme",
          "paragraphText": "L'existentialisme considère que l'homme, en raison de sa liberté, est une valeur fondamentale ; il accorde la priorité à l'existence.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p05_q1",
            "type": "mcq",
            "prompt": "Quelle est la définition de l'existentialisme donnée dans le cours sur la période contemporaine ?",
            "options": [
              "Une doctrine selon laquelle une essence humaine précède l'existence",
              "Un courant qui considère que l'homme, en raison de sa liberté, est une valeur fondamentale et qui accorde la priorité à l'existence",
              "Une réflexion sur la connaissance scientifique",
              "Une doctrine selon laquelle tout vient de l'expérience"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La première définition est celle de l'essentialisme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Deux tendances",
          "stepTheme": "Deux tendances",
          "stepBadge": "Deux tendances",
          "paragraphText": "L'existentialisme n'est pas homogène : il y a un existentialisme chrétien et un existentialisme athée.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p05_q2",
            "type": "mcq",
            "prompt": "L'existentialisme « n'est pas un courant homogène ». Quelles sont ses deux tendances ?",
            "options": [
              "L'existentialisme chrétien et l'existentialisme athée",
              "Le rationalisme et l'empirisme",
              "Le stoïcisme et l'épicurisme",
              "L'Antiquité et le Moyen Âge"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Kierkegaard (chrétien) ; Sartre (athée)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Sartre, athée",
          "stepTheme": "Sartre, athée",
          "stepBadge": "Sartre, athée",
          "paragraphText": "Sartre représente l'existentialisme athée : « si Dieu n'existe pas, il y a au moins un être chez qui l'existence précède l'essence ».",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p05_q3",
            "type": "mcq",
            "prompt": "Sartre écrit : « L'existentialisme athée (…) déclare que si Dieu n'existe pas, il y a au moins un être chez qui l'existence précède l'essence. » À quelle tendance de l'existentialisme appartient-il ?",
            "options": [
              "À l'existentialisme chrétien",
              "À l'existentialisme athée",
              "À l'essentialisme",
              "Au criticisme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Kierkegaard et Gabriel Marcel représentent la tendance chrétienne."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'essentialisme",
          "stepTheme": "L'essentialisme",
          "stepBadge": "L'essentialisme",
          "paragraphText": "L'essentialisme considère qu'il existe une essence humaine antérieure à l'existence, par laquelle on peut savoir ce qu'est l'homme.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p05_q4",
            "type": "mcq",
            "prompt": "Selon l'essentialisme, qu'est-ce qui vient en premier chez l'homme ?",
            "options": [
              "L'existence",
              "Une essence humaine antérieure à l'existence",
              "La liberté absolue",
              "L'opinion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'inverse de la thèse de Sartre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Reconnaître une conception",
          "stepTheme": "Reconnaître une conception",
          "stepBadge": "Reconnaître une conception",
          "paragraphText": "Dire « il est né comme ça, il ne changera jamais » suppose une nature fixée d'avance : c'est une conception essentialiste.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p05_q5",
            "type": "mcq",
            "prompt": "Quelqu'un affirme : « Il est né voleur, il restera voleur toute sa vie. » Quelle conception de l'homme exprime-t-il ?",
            "options": [
              "Existentialiste",
              "Essentialiste",
              "Sceptique",
              "Épistémologique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il suppose une essence fixée avant tout choix."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Liberté et responsabilité",
          "stepTheme": "Liberté et responsabilité",
          "stepBadge": "Liberté et responsabilité",
          "paragraphText": "Pour l'existentialiste, l'homme est libre et responsable de ce qu'il devient ; il ne peut pas s'excuser par sa nature.",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p05_q6",
            "type": "mcq",
            "prompt": "Un élève qui a échoué dit : « Je suis né paresseux, ce n'est pas ma faute. » Que lui répondrait un existentialiste comme Sartre ?",
            "options": [
              "Il a raison : sa nature le détermine",
              "L'homme se fait par ses choix : il est responsable de ce qu'il devient",
              "Il faut suspendre son jugement",
              "C'est la volonté de Dieu"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pas d'essence fixée d'avance : on devient ce que l'on fait."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Bergson et la liberté",
          "stepTheme": "Bergson et la liberté",
          "stepBadge": "Bergson et la liberté",
          "paragraphText": "Bergson : la liberté est « le rapport du moi concret à l'acte qu'il accomplit » ; elle est indéfinissable, et « toute définition de la liberté donnera raison au déterminisme ».",
          "exercise": {
            "id": "premiere_philo_histoire_l09_periode_contemporaine_p05_q7",
            "type": "mcq",
            "prompt": "Bergson écrit : « On appelle liberté le rapport du moi concret à l'acte qu'il accomplit. Ce rapport est indéfinissable, précisément parce que nous sommes libres. (…) C'est pourquoi toute définition de la liberté donnera raison au déterminisme. » Quel est le problème posé par ce texte ?",
            "options": [
              "Peut-on définir la liberté ?",
              "La science s'oppose-t-elle à l'opinion ?",
              "D'où vient la connaissance ?",
              "Le prince doit-il être moral ?"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sa thèse : définir la liberté, c'est la figer et la transformer en nécessité."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p05_q1",
          "type": "mcq",
          "prompt": "Quelle est la définition de l'existentialisme donnée dans le cours sur la période contemporaine ?",
          "options": [
            "Une doctrine selon laquelle une essence humaine précède l'existence",
            "Un courant qui considère que l'homme, en raison de sa liberté, est une valeur fondamentale et qui accorde la priorité à l'existence",
            "Une réflexion sur la connaissance scientifique",
            "Une doctrine selon laquelle tout vient de l'expérience"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La première définition est celle de l'essentialisme."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p05_q2",
          "type": "mcq",
          "prompt": "L'existentialisme « n'est pas un courant homogène ». Quelles sont ses deux tendances ?",
          "options": [
            "L'existentialisme chrétien et l'existentialisme athée",
            "Le rationalisme et l'empirisme",
            "Le stoïcisme et l'épicurisme",
            "L'Antiquité et le Moyen Âge"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Kierkegaard (chrétien) ; Sartre (athée)."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p05_q3",
          "type": "mcq",
          "prompt": "Sartre écrit : « L'existentialisme athée (…) déclare que si Dieu n'existe pas, il y a au moins un être chez qui l'existence précède l'essence. » À quelle tendance de l'existentialisme appartient-il ?",
          "options": [
            "À l'existentialisme chrétien",
            "À l'existentialisme athée",
            "À l'essentialisme",
            "Au criticisme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Kierkegaard et Gabriel Marcel représentent la tendance chrétienne."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p05_q4",
          "type": "mcq",
          "prompt": "Selon l'essentialisme, qu'est-ce qui vient en premier chez l'homme ?",
          "options": [
            "L'existence",
            "Une essence humaine antérieure à l'existence",
            "La liberté absolue",
            "L'opinion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'inverse de la thèse de Sartre."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p05_q5",
          "type": "mcq",
          "prompt": "Quelqu'un affirme : « Il est né voleur, il restera voleur toute sa vie. » Quelle conception de l'homme exprime-t-il ?",
          "options": [
            "Existentialiste",
            "Essentialiste",
            "Sceptique",
            "Épistémologique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il suppose une essence fixée avant tout choix."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p05_q6",
          "type": "mcq",
          "prompt": "Un élève qui a échoué dit : « Je suis né paresseux, ce n'est pas ma faute. » Que lui répondrait un existentialiste comme Sartre ?",
          "options": [
            "Il a raison : sa nature le détermine",
            "L'homme se fait par ses choix : il est responsable de ce qu'il devient",
            "Il faut suspendre son jugement",
            "C'est la volonté de Dieu"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pas d'essence fixée d'avance : on devient ce que l'on fait."
        },
        {
          "id": "premiere_philo_histoire_l09_periode_contemporaine_p05_q7",
          "type": "mcq",
          "prompt": "Bergson écrit : « On appelle liberté le rapport du moi concret à l'acte qu'il accomplit. Ce rapport est indéfinissable, précisément parce que nous sommes libres. (…) C'est pourquoi toute définition de la liberté donnera raison au déterminisme. » Quel est le problème posé par ce texte ?",
          "options": [
            "Peut-on définir la liberté ?",
            "La science s'oppose-t-elle à l'opinion ?",
            "D'où vient la connaissance ?",
            "Le prince doit-il être moral ?"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sa thèse : définir la liberté, c'est la figer et la transformer en nécessité."
        }
      ]
    }
  ]
};
