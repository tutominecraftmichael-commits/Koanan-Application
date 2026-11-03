import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Philo Tle_L10_La Connaissance scientifique.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const PHILO_TLE_L10_CONNAISSANCE_SCIENTIFIQUE: CurriculumChapter = {
  "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique",
  "subjectId": "philosophie",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  "order": 10,
  "title": "Les conditions de la connaissance, leçon 2 : La connaissance scientifique",
  "summary": "Formes de connaissance, types de sciences et leurs démarches, connaissance du vivant et bioéthique, limites de la vérité scientifique.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "Philo Tle_L10_La Connaissance scientifique.pdf",
  "points": [
    {
      "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p01",
      "order": 1,
      "title": "Les formes de la connaissance",
      "summary": "Connaissance vulgaire, philosophique et scientifique.",
      "conceptExplanation": "On distingue trois formes de connaissance.\n• La connaissance vulgaire (le sens commun, la doxa de Platon) : opinions reçues, non organisées, qui s'arrêtent aux apparences et généralisent sans preuve. Pour Bachelard (La Formation de l'esprit scientifique), « l'opinion pense mal ; elle ne pense pas ».\n• La connaissance philosophique : un savoir critique et désintéressé, qui interroge l'homme et le monde et réfléchit aux valeurs (le bien, le juste, le beau, le vrai).\n• La connaissance scientifique : selon Lalande, un ensemble de connaissances qui mènent à des conclusions concordantes, fondées sur des relations objectives confirmées par des méthodes de vérification définies.",
      "keyRule": "Opinion = croire sans preuve ; philosophie = interroger de façon critique ; science = démontrer ou vérifier.",
      "formulas": [],
      "workedExample": {
        "title": "Le ciel sombre",
        "statement": "« Le ciel est sombre, donc il va pleuvoir. » Quelle forme de connaissance est-ce ?",
        "methodSteps": [
          "L'idée vient de l'habitude et d'observations répétées.",
          "Elle n'est ni démontrée ni vérifiée par une méthode."
        ],
        "conclusion": "C'est une connaissance vulgaire : utile parfois, mais sans preuve."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La connaissance vulgaire",
          "stepTheme": "La connaissance vulgaire",
          "stepBadge": "La connaissance vulgaire",
          "paragraphText": "• Connaissance vulgaire (sens commun) : ensemble d'opinions et de croyances reçues de l'expérience quotidienne.\nPlaton l'appelle la doxa (l'opinion). Elle est subjective, s'arrête aux apparences et généralise à partir d'un seul cas, sans preuve.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p01_q1",
            "type": "mcq",
            "prompt": "Comment Platon appelle-t-il l'opinion ?",
            "options": [
              "Le logos",
              "L'épistémè",
              "La doxa",
              "Le muthos"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La doxa s'oppose à la science (épistémè)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'opinion pense mal",
          "stepTheme": "L'opinion pense mal",
          "stepBadge": "L'opinion pense mal",
          "paragraphText": "Bachelard (La Formation de l'esprit scientifique) : « L'opinion pense mal ; elle ne pense pas ».\nL'opinion traduit des besoins en connaissances ; elle est le premier obstacle à surmonter pour faire de la science.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p01_q2",
            "type": "mcq",
            "prompt": "Qui a écrit : « L'opinion pense mal ; elle ne pense pas » ?",
            "options": [
              "Bachelard",
              "Lalande",
              "Auguste Comte",
              "Descartes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour Bachelard, la science se construit contre l'opinion."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La connaissance philosophique",
          "stepTheme": "La connaissance philosophique",
          "stepBadge": "La connaissance philosophique",
          "paragraphText": "• Connaissance philosophique : savoir critique et désintéressé, interrogation sur l'homme, le monde et les valeurs (le bien, le juste, le beau, le vrai).\nElle vise à sortir l'homme des préjugés.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p01_q3",
            "type": "mcq",
            "prompt": "Qu'est-ce qui caractérise la connaissance philosophique ?",
            "options": [
              "La démonstration expérimentale",
              "Le sens commun",
              "La croyance sans examen",
              "L'esprit critique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La philosophie résulte de l'esprit critique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La science selon Lalande",
          "stepTheme": "La science selon Lalande",
          "stepBadge": "La science selon Lalande",
          "paragraphText": "Lalande (Vocabulaire technique et critique de la philosophie) : la science est un ensemble de connaissances qui conduisent à des conclusions concordantes, fondées non sur des goûts ou des intérêts, mais sur des relations objectives confirmées par des méthodes de vérification définies.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p01_q4",
            "type": "mcq",
            "prompt": "Selon Lalande, sur quoi reposent les conclusions de la science ?",
            "options": [
              "Sur les goûts des savants",
              "Sur des relations objectives vérifiées par des méthodes définies",
              "Sur des conventions arbitraires",
              "Sur la tradition"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La science est objective et vérifiable."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Relier chaque connaissance à sa source",
          "stepTheme": "Relier chaque connaissance à sa source",
          "stepBadge": "Relier chaque connaissance à sa source",
          "paragraphText": "• Connaissance générale ou vulgaire → le sens commun.\n• Connaissance philosophique → l'esprit critique.\n• Connaissance scientifique → la démonstration et la vérification.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p01_q5",
            "type": "mcq",
            "prompt": "D'où provient la connaissance scientifique ?",
            "options": [
              "Du sens commun",
              "De la démonstration et de la vérification",
              "De l'habitude",
              "De la tradition"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La science prouve : par démonstration (sciences formelles) ou par vérification (sciences expérimentales)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La science n'est pas vulgaire",
          "stepTheme": "La science n'est pas vulgaire",
          "stepBadge": "La science n'est pas vulgaire",
          "paragraphText": "Au vrai ou faux : « La connaissance scientifique est vulgaire » est faux.\nElle est au contraire exacte, objective et fondée sur la vérification expérimentale ou la démarche hypothético-déductive.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p01_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces affirmations sur la connaissance scientifique est fausse ?",
            "options": [
              "Elle est exacte et objective",
              "Elle repose sur la vérification ou la démonstration",
              "Elle rompt avec les préjugés",
              "Elle est vulgaire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La connaissance vulgaire, c'est celle du sens commun."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p01_q1",
          "type": "mcq",
          "prompt": "Comment Platon appelle-t-il l'opinion ?",
          "options": [
            "Le logos",
            "L'épistémè",
            "La doxa",
            "Le muthos"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La doxa s'oppose à la science (épistémè)."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p01_q2",
          "type": "mcq",
          "prompt": "Qui a écrit : « L'opinion pense mal ; elle ne pense pas » ?",
          "options": [
            "Bachelard",
            "Lalande",
            "Auguste Comte",
            "Descartes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour Bachelard, la science se construit contre l'opinion."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p01_q3",
          "type": "mcq",
          "prompt": "Qu'est-ce qui caractérise la connaissance philosophique ?",
          "options": [
            "La démonstration expérimentale",
            "Le sens commun",
            "La croyance sans examen",
            "L'esprit critique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La philosophie résulte de l'esprit critique."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p01_q4",
          "type": "mcq",
          "prompt": "Selon Lalande, sur quoi reposent les conclusions de la science ?",
          "options": [
            "Sur les goûts des savants",
            "Sur des relations objectives vérifiées par des méthodes définies",
            "Sur des conventions arbitraires",
            "Sur la tradition"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La science est objective et vérifiable."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p01_q5",
          "type": "mcq",
          "prompt": "D'où provient la connaissance scientifique ?",
          "options": [
            "Du sens commun",
            "De la démonstration et de la vérification",
            "De l'habitude",
            "De la tradition"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La science prouve : par démonstration (sciences formelles) ou par vérification (sciences expérimentales)."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p01_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces affirmations sur la connaissance scientifique est fausse ?",
          "options": [
            "Elle est exacte et objective",
            "Elle repose sur la vérification ou la démonstration",
            "Elle rompt avec les préjugés",
            "Elle est vulgaire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La connaissance vulgaire, c'est celle du sens commun."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p02",
      "order": 2,
      "title": "La spécificité de la connaissance scientifique",
      "summary": "Rupture avec les préjugés, objectivité, preuve et universalité.",
      "conceptExplanation": "La connaissance scientifique rompt avec les préjugés, les coutumes, la tradition et les explications théologiques ou métaphysiques.\nElle dépasse les apparences pour chercher les causes profondes des phénomènes.\nElle repose sur l'esprit critique, le sens de la preuve et l'objectivité. Elle est universelle : elle fait l'accord des esprits.\nPour Auguste Comte, elle n'est pas naturelle à l'homme : elle représente la maturité de l'esprit humain.",
      "keyRule": "La science : rupture avec l'opinion, objectivité, preuve, universalité.",
      "formulas": [],
      "workedExample": {
        "title": "Le bâton dans l'eau",
        "statement": "Un bâton plongé dans l'eau paraît brisé. Que fait la science ?",
        "methodSteps": [
          "Elle ne se fie pas à l'apparence.",
          "Elle explique le phénomène par une loi : la réfraction de la lumière."
        ],
        "conclusion": "La science dépasse les apparences pour trouver les causes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Une rupture avec les préjugés",
          "stepTheme": "Une rupture avec les préjugés",
          "stepBadge": "Une rupture avec les préjugés",
          "paragraphText": "La connaissance scientifique rejette les préjugés issus des coutumes, de l'éducation, de la tradition et de l'esprit théologique ou métaphysique.\nElle ne se contente pas d'observer sommairement : elle cherche les causes profondes.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p02_q1",
            "type": "mcq",
            "prompt": "Avec quoi la connaissance scientifique rompt-elle ?",
            "options": [
              "Avec les préjugés et les apparences",
              "Avec la raison",
              "Avec la vérification",
              "Avec la démonstration"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La science commence par dépasser l'opinion et l'apparence."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Objectivité et preuve",
          "stepTheme": "Objectivité et preuve",
          "stepBadge": "Objectivité et preuve",
          "paragraphText": "L'esprit scientifique repose sur le sens de la preuve, le besoin de certitude et l'objectivité : le résultat ne dépend pas des goûts ou des intérêts du savant.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p02_q2",
            "type": "mcq",
            "prompt": "Sur quoi repose l'esprit scientifique ?",
            "options": [
              "Sur les goûts personnels",
              "Sur la croyance",
              "Sur le sens de la preuve et l'objectivité",
              "Sur la tradition"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un résultat scientifique doit pouvoir être prouvé par tous."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Une connaissance universelle",
          "stepTheme": "Une connaissance universelle",
          "stepBadge": "Une connaissance universelle",
          "paragraphText": "• Universelle : valable pour tous les esprits.\nLa connaissance scientifique fait l'accord des esprits sur les résultats : n'importe quel savant qui refait l'expérience aboutit au même résultat.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p02_q3",
            "type": "mcq",
            "prompt": "Pourquoi dit-on que la connaissance scientifique est universelle ?",
            "options": [
              "Parce que tout le monde la connaît",
              "Parce qu'elle ne change jamais",
              "Parce qu'elle concerne l'univers",
              "Parce qu'elle fait l'accord de tous les esprits sur ses résultats"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Universel : valable pour tout esprit qui suit la méthode."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La maturité de l'esprit",
          "stepTheme": "La maturité de l'esprit",
          "stepBadge": "La maturité de l'esprit",
          "paragraphText": "Pour Auguste Comte (Cours de philosophie positive), la connaissance scientifique n'est pas naturelle à l'homme : elle représente la maturité de l'esprit humain, après l'état théologique et l'état métaphysique.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p02_q4",
            "type": "mcq",
            "prompt": "Pour Auguste Comte, que représente la connaissance scientifique ?",
            "options": [
              "L'enfance de l'esprit",
              "Une connaissance naturelle à l'homme",
              "La maturité de l'esprit humain",
              "Une simple opinion"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'état positif de la loi des trois états."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les sens et l'esprit",
          "stepTheme": "Les sens et l'esprit",
          "stepBadge": "Les sens et l'esprit",
          "paragraphText": "Les sens fournissent la matière de nos perceptions, mais c'est l'esprit (l'entendement, la raison) qui leur donne une forme et les relie.\nPour connaître sûrement, il faut dépasser la perception immédiate.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p02_q5",
            "type": "mcq",
            "prompt": "Quel rôle joue l'esprit dans la connaissance scientifique ?",
            "options": [
              "Il remplace complètement les sens",
              "Il met en forme et relie ce que les sens fournissent",
              "Il ne joue aucun rôle",
              "Il se contente de recevoir les impressions"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les sens donnent la matière, l'esprit la forme."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L'anthropomorphisme",
          "stepTheme": "L'anthropomorphisme",
          "stepBadge": "L'anthropomorphisme",
          "paragraphText": "L'anthropomorphisme consiste à prêter aux choses des intentions humaines (« la mer est en colère »).\nLes premières explications humaines en étaient remplies ; la science s'en débarrasse.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p02_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces explications est anthropomorphique ?",
            "options": [
              "La rivière a débordé parce qu'elle était fâchée",
              "La rivière a débordé à cause de fortes pluies",
              "La rivière a débordé car son lit était trop étroit",
              "La rivière a débordé à cause d'un barrage ouvert"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Prêter de la colère à une rivière, c'est projeter la psychologie humaine sur la nature."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p02_q1",
          "type": "mcq",
          "prompt": "Avec quoi la connaissance scientifique rompt-elle ?",
          "options": [
            "Avec les préjugés et les apparences",
            "Avec la raison",
            "Avec la vérification",
            "Avec la démonstration"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La science commence par dépasser l'opinion et l'apparence."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p02_q2",
          "type": "mcq",
          "prompt": "Sur quoi repose l'esprit scientifique ?",
          "options": [
            "Sur les goûts personnels",
            "Sur la croyance",
            "Sur le sens de la preuve et l'objectivité",
            "Sur la tradition"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un résultat scientifique doit pouvoir être prouvé par tous."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p02_q3",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que la connaissance scientifique est universelle ?",
          "options": [
            "Parce que tout le monde la connaît",
            "Parce qu'elle ne change jamais",
            "Parce qu'elle concerne l'univers",
            "Parce qu'elle fait l'accord de tous les esprits sur ses résultats"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Universel : valable pour tout esprit qui suit la méthode."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p02_q4",
          "type": "mcq",
          "prompt": "Pour Auguste Comte, que représente la connaissance scientifique ?",
          "options": [
            "L'enfance de l'esprit",
            "Une connaissance naturelle à l'homme",
            "La maturité de l'esprit humain",
            "Une simple opinion"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'état positif de la loi des trois états."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p02_q5",
          "type": "mcq",
          "prompt": "Quel rôle joue l'esprit dans la connaissance scientifique ?",
          "options": [
            "Il remplace complètement les sens",
            "Il met en forme et relie ce que les sens fournissent",
            "Il ne joue aucun rôle",
            "Il se contente de recevoir les impressions"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les sens donnent la matière, l'esprit la forme."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p02_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces explications est anthropomorphique ?",
          "options": [
            "La rivière a débordé parce qu'elle était fâchée",
            "La rivière a débordé à cause de fortes pluies",
            "La rivière a débordé car son lit était trop étroit",
            "La rivière a débordé à cause d'un barrage ouvert"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Prêter de la colère à une rivière, c'est projeter la psychologie humaine sur la nature."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p03",
      "order": 3,
      "title": "Les types de sciences et les sciences formelles",
      "summary": "Sciences formelles, expérimentales et humaines ; logique et mathématiques.",
      "conceptExplanation": "On distingue trois types de sciences :\n• les sciences formelles (logique, mathématiques), axiomatico-déductives : seule compte la rigueur du raisonnement ;\n• les sciences expérimentales (physique, chimie, biologie), qui unissent raisonnement et expérimentation ;\n• les sciences humaines (histoire, sociologie, psychologie), qui étudient l'homme.\nLa logique, née avec Aristote, fixe les règles du raisonnement correct (le syllogisme). Les mathématiques étudient des êtres abstraits par déduction. Un discours formel est vrai s'il est cohérent.\nPour Galilée (L'Essayeur), le livre de la nature est écrit en langue mathématique.",
      "keyRule": "Sciences formelles : vrai = cohérent et démontré, indépendamment du réel.",
      "formulas": [],
      "workedExample": {
        "title": "Le syllogisme",
        "statement": "« Tous les hommes sont mortels. Or Socrate est un homme. Donc Socrate est mortel. »",
        "methodSteps": [
          "Prémisse majeure : tous les hommes sont mortels.",
          "Prémisse mineure : Socrate est un homme.",
          "Conclusion : elle découle nécessairement des deux prémisses."
        ],
        "conclusion": "La logique garantit la validité du passage des prémisses à la conclusion."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Trois types de sciences",
          "stepTheme": "Trois types de sciences",
          "stepBadge": "Trois types de sciences",
          "paragraphText": "• Sciences formelles : logique, mathématiques.\n• Sciences expérimentales : physique, chimie, biologie.\n• Sciences humaines : histoire, sociologie, psychologie.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p03_q1",
            "type": "mcq",
            "prompt": "Dans quelle catégorie range-t-on la sociologie ?",
            "options": [
              "Les sciences humaines",
              "Les sciences formelles",
              "Les sciences expérimentales",
              "Les mathématiques"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La sociologie étudie l'homme en société."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Ranger les sciences",
          "stepTheme": "Ranger les sciences",
          "stepBadge": "Ranger les sciences",
          "paragraphText": "Logique et mathématiques → formelles.\nPhysique et biologie → expérimentales.\nHistoire, sociologie, psychologie → humaines.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p03_q2",
            "type": "mcq",
            "prompt": "Laquelle de ces disciplines est une science formelle ?",
            "options": [
              "La physique",
              "La logique",
              "La biologie",
              "L'histoire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La logique ne s'occupe que de la forme du raisonnement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La logique",
          "stepTheme": "La logique",
          "stepBadge": "La logique",
          "paragraphText": "Née avec Aristote, la logique est la science des règles du raisonnement correct.\nArnauld et Nicole (Logique de Port-Royal) : « l'art de bien conduire sa raison dans la connaissance des choses ».\nSon modèle est le syllogisme : prémisse majeure, prémisse mineure, conclusion.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p03_q3",
            "type": "mcq",
            "prompt": "Qui est considéré comme le fondateur de la logique ?",
            "options": [
              "Galilée",
              "Claude Bernard",
              "Aristote",
              "Auguste Comte"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Aristote a formalisé le syllogisme."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La vérité formelle",
          "stepTheme": "La vérité formelle",
          "stepBadge": "La vérité formelle",
          "paragraphText": "Dans les sciences formelles, un discours est vrai s'il est cohérent : les propositions sont déduites rigoureusement les unes des autres.\nIl n'a pas besoin que ses objets soient réels : la pensée doit seulement être d'accord avec ses propres principes.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p03_q4",
            "type": "mcq",
            "prompt": "Dans les sciences formelles, quand un discours est-il vrai ?",
            "options": [
              "Quand il est vérifié par l'expérience",
              "Quand tout le monde l'accepte",
              "Quand il est utile",
              "Quand il est cohérent et rigoureusement déduit"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La vérité formelle est l'accord de la pensée avec elle-même."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Axiomes et postulats",
          "stepTheme": "Axiomes et postulats",
          "stepBadge": "Axiomes et postulats",
          "paragraphText": "• Axiome : proposition admise comme évidente, point de départ du raisonnement.\n• Postulat : proposition non démontrée qu'on demande d'admettre.\n• Axiomatique : construction entièrement formalisée à partir de ces principes.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p03_q5",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'un postulat ?",
            "options": [
              "Une proposition démontrée par l'expérience",
              "Une conclusion de syllogisme",
              "Une proposition non démontrée qu'on demande d'admettre",
              "Une opinion personnelle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le postulat d'Euclide sur les parallèles en est l'exemple célèbre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les mathématiques, langage des sciences",
          "stepTheme": "Les mathématiques, langage des sciences",
          "stepBadge": "Les mathématiques, langage des sciences",
          "paragraphText": "Galilée (L'Essayeur) : le livre de la nature est écrit en langage mathématique.\nPour Poincaré, le langage ordinaire est trop vague : le physicien ne peut se passer des mathématiques pour énoncer les lois.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p03_q6",
            "type": "mcq",
            "prompt": "Pourquoi le physicien a-t-il besoin des mathématiques ?",
            "options": [
              "Elles remplacent l'expérience",
              "Elles prouvent que la nature est divine",
              "Elles sont plus faciles que le français",
              "Elles fournissent un langage assez précis pour énoncer les lois"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les mathématiques sont le langage commun des sciences de la nature."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p03_q1",
          "type": "mcq",
          "prompt": "Dans quelle catégorie range-t-on la sociologie ?",
          "options": [
            "Les sciences humaines",
            "Les sciences formelles",
            "Les sciences expérimentales",
            "Les mathématiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La sociologie étudie l'homme en société."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p03_q2",
          "type": "mcq",
          "prompt": "Laquelle de ces disciplines est une science formelle ?",
          "options": [
            "La physique",
            "La logique",
            "La biologie",
            "L'histoire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La logique ne s'occupe que de la forme du raisonnement."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p03_q3",
          "type": "mcq",
          "prompt": "Qui est considéré comme le fondateur de la logique ?",
          "options": [
            "Galilée",
            "Claude Bernard",
            "Aristote",
            "Auguste Comte"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Aristote a formalisé le syllogisme."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p03_q4",
          "type": "mcq",
          "prompt": "Dans les sciences formelles, quand un discours est-il vrai ?",
          "options": [
            "Quand il est vérifié par l'expérience",
            "Quand tout le monde l'accepte",
            "Quand il est utile",
            "Quand il est cohérent et rigoureusement déduit"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La vérité formelle est l'accord de la pensée avec elle-même."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p03_q5",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un postulat ?",
          "options": [
            "Une proposition démontrée par l'expérience",
            "Une conclusion de syllogisme",
            "Une proposition non démontrée qu'on demande d'admettre",
            "Une opinion personnelle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le postulat d'Euclide sur les parallèles en est l'exemple célèbre."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p03_q6",
          "type": "mcq",
          "prompt": "Pourquoi le physicien a-t-il besoin des mathématiques ?",
          "options": [
            "Elles remplacent l'expérience",
            "Elles prouvent que la nature est divine",
            "Elles sont plus faciles que le français",
            "Elles fournissent un langage assez précis pour énoncer les lois"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les mathématiques sont le langage commun des sciences de la nature."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p04",
      "order": 4,
      "title": "Théorie et expérience : la démarche expérimentale",
      "summary": "Empirisme, rationalisme, Kant, Claude Bernard ; observation, hypothèse, vérification.",
      "conceptExplanation": "L'empirisme (Locke) : la connaissance vient de l'expérience sensible ; l'esprit est une « table rase ».\nLe rationalisme (Descartes) : la connaissance vient de la raison ; le morceau de cire (Méditations, II) montre que l'entendement, non les sens, connaît la chose.\nKant dépasse l'opposition : « Des pensées sans contenu sont vides, des intuitions sans concepts sont aveugles » (Critique de la raison pure).\nClaude Bernard : « Le savant complet est celui qui embrasse à la fois la théorie et la pratique expérimentale ».\nLa démarche expérimentale : observation d'un fait, hypothèse, vérification. Confirmée, l'hypothèse devient loi ; infirmée, elle est rejetée.",
      "keyRule": "Démarche expérimentale : Observation → Hypothèse → Vérification.",
      "formulas": [],
      "workedExample": {
        "title": "Le paludisme",
        "statement": "On observe que le paludisme frappe surtout près des eaux stagnantes. Comment procède le savant ?",
        "methodSteps": [
          "Observation : un fait qui pose question.",
          "Hypothèse : le moustique transmet la maladie.",
          "Vérification : on cherche le parasite dans les moustiques et on teste la transmission."
        ],
        "conclusion": "L'hypothèse confirmée devient une loi ; sinon, on en cherche une autre."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'empirisme",
          "stepTheme": "L'empirisme",
          "stepBadge": "L'empirisme",
          "paragraphText": "• Empirisme : doctrine selon laquelle toute connaissance vient de l'expérience sensible.\nPour Locke (Essai sur l'entendement humain), l'esprit est au départ comme une « table rase » sur laquelle l'expérience inscrit ses idées : pas d'idées innées.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p04_q1",
            "type": "mcq",
            "prompt": "Pour l'empirisme, d'où vient la connaissance ?",
            "options": [
              "De l'expérience sensible",
              "De la seule raison",
              "Des idées innées",
              "De la révélation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Empirisme vient du grec empeiria : expérience."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le morceau de cire",
          "stepTheme": "Le morceau de cire",
          "stepBadge": "Le morceau de cire",
          "paragraphText": "Descartes (Méditations, II) : un morceau de cire, chauffé, perd son odeur, sa couleur, sa forme. Pourtant on juge que c'est la même cire.\nCe n'est donc pas par les sens mais par l'entendement que nous connaissons la chose : c'est le rationalisme.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p04_q2",
            "type": "mcq",
            "prompt": "Que montre l'analyse du morceau de cire chez Descartes ?",
            "options": [
              "Que les sens ne se trompent jamais",
              "Que c'est l'entendement, et non les sens, qui connaît la chose",
              "Que la cire n'existe pas",
              "Que la chaleur détruit la connaissance"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Toutes les qualités sensibles changent, mais l'esprit reconnaît la même cire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Kant : les deux sources",
          "stepTheme": "Kant : les deux sources",
          "stepBadge": "Kant : les deux sources",
          "paragraphText": "Kant (Critique de la raison pure) : « Des pensées sans contenu sont vides, des intuitions sans concepts sont aveugles ».\nLa sensibilité donne les objets, l'entendement les pense : il faut les deux.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p04_q3",
            "type": "mcq",
            "prompt": "Que signifie « des intuitions sans concepts sont aveugles » ?",
            "options": [
              "Les sens suffisent à connaître",
              "Ce que les sens donnent ne devient connaissance que pensé par l'entendement",
              "Les concepts n'ont besoin d'aucun contenu",
              "La connaissance est impossible"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Kant réconcilie empirisme et rationalisme."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le savant complet",
          "stepTheme": "Le savant complet",
          "stepBadge": "Le savant complet",
          "paragraphText": "Claude Bernard (Introduction à l'étude de la médecine expérimentale) : « Le savant complet est celui qui embrasse à la fois la théorie et la pratique expérimentale ».",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p04_q4",
            "type": "mcq",
            "prompt": "Selon Claude Bernard, qu'est-ce qu'un savant complet ?",
            "options": [
              "Celui qui unit la théorie et la pratique expérimentale",
              "Celui qui se contente d'observer",
              "Celui qui se contente de théoriser",
              "Celui qui ne fait jamais d'hypothèse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Théorie et expérience sont solidaires."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Les étapes de la démarche",
          "stepTheme": "Les étapes de la démarche",
          "stepBadge": "Les étapes de la démarche",
          "paragraphText": "1. Observation du fait : un fait nouveau contredit les explications admises (le fait-question).\n2. Hypothèse : une idée anticipée pour l'expliquer (« l'idée scientifique préconçue », Claude Bernard).\n3. Vérification (expérimentation) : l'hypothèse est confirmée ou infirmée.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p04_q5",
            "type": "mcq",
            "prompt": "Dans quel ordre se déroule la démarche expérimentale ?",
            "options": [
              "Hypothèse, observation, vérification",
              "Vérification, hypothèse, observation",
              "Observation, vérification, hypothèse",
              "Observation, hypothèse, vérification"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On observe, on suppose, puis on vérifie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Confirmée ou infirmée",
          "stepTheme": "Confirmée ou infirmée",
          "stepBadge": "Confirmée ou infirmée",
          "paragraphText": "Claude Bernard : « ou bien l'hypothèse de l'expérimentateur sera infirmée, ou bien elle sera confirmée par l'expérimentation ».\nConfirmée, elle devient loi scientifique ; infirmée, elle est rejetée et remplacée par une autre.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p04_q6",
            "type": "mcq",
            "prompt": "Que devient une hypothèse infirmée par l'expérience ?",
            "options": [
              "Elle devient une loi",
              "Elle est gardée malgré tout",
              "Elle est rejetée et remplacée par une autre",
              "Elle devient un axiome"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la vérification qui donne sa valeur à l'hypothèse."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p04_q1",
          "type": "mcq",
          "prompt": "Pour l'empirisme, d'où vient la connaissance ?",
          "options": [
            "De l'expérience sensible",
            "De la seule raison",
            "Des idées innées",
            "De la révélation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Empirisme vient du grec empeiria : expérience."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p04_q2",
          "type": "mcq",
          "prompt": "Que montre l'analyse du morceau de cire chez Descartes ?",
          "options": [
            "Que les sens ne se trompent jamais",
            "Que c'est l'entendement, et non les sens, qui connaît la chose",
            "Que la cire n'existe pas",
            "Que la chaleur détruit la connaissance"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Toutes les qualités sensibles changent, mais l'esprit reconnaît la même cire."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p04_q3",
          "type": "mcq",
          "prompt": "Que signifie « des intuitions sans concepts sont aveugles » ?",
          "options": [
            "Les sens suffisent à connaître",
            "Ce que les sens donnent ne devient connaissance que pensé par l'entendement",
            "Les concepts n'ont besoin d'aucun contenu",
            "La connaissance est impossible"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Kant réconcilie empirisme et rationalisme."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p04_q4",
          "type": "mcq",
          "prompt": "Selon Claude Bernard, qu'est-ce qu'un savant complet ?",
          "options": [
            "Celui qui unit la théorie et la pratique expérimentale",
            "Celui qui se contente d'observer",
            "Celui qui se contente de théoriser",
            "Celui qui ne fait jamais d'hypothèse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Théorie et expérience sont solidaires."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p04_q5",
          "type": "mcq",
          "prompt": "Dans quel ordre se déroule la démarche expérimentale ?",
          "options": [
            "Hypothèse, observation, vérification",
            "Vérification, hypothèse, observation",
            "Observation, vérification, hypothèse",
            "Observation, hypothèse, vérification"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On observe, on suppose, puis on vérifie."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p04_q6",
          "type": "mcq",
          "prompt": "Que devient une hypothèse infirmée par l'expérience ?",
          "options": [
            "Elle devient une loi",
            "Elle est gardée malgré tout",
            "Elle est rejetée et remplacée par une autre",
            "Elle devient un axiome"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la vérification qui donne sa valeur à l'hypothèse."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p05",
      "order": 5,
      "title": "Les sciences humaines et les limites des démarches",
      "summary": "Les sciences de l'homme ; limites des sciences formelles, expérimentales et humaines.",
      "conceptExplanation": "Les sciences humaines (histoire, psychologie, sociologie, anthropologie) étudient l'homme. Pour Piaget, elles se sont séparées de la philosophie pour devenir des sciences.\nLimites des sciences formelles : elles ne portent pas sur le réel ; pour Bacon, les mathématiques ne doivent être que les servantes de la physique.\nLimites des sciences expérimentales : l'observation est imparfaite, et l'hypothèse vient de l'imagination du savant. La lumière, expliquée par des corpuscules puis par des ondes, montre que les vérités acquises se corrigent.\nLimites des sciences humaines : l'événement est irréversible, on ne peut pas le refaire ; le chercheur est influencé par son époque et ses choix.",
      "keyRule": "Chaque démarche a ses limites : formelle (hors du réel), expérimentale (provisoire), humaine (subjective).",
      "formulas": [],
      "workedExample": {
        "title": "Étudier une guerre",
        "statement": "Un historien veut expliquer une guerre du XIXe siècle. Quelle difficulté rencontre-t-il ?",
        "methodSteps": [
          "Il ne peut pas refaire l'événement en laboratoire.",
          "Il risque de juger avec les valeurs de son époque ou de son pays."
        ],
        "conclusion": "Les sciences humaines sont des sciences, mais leur objectivité est plus difficile."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les sciences humaines",
          "stepTheme": "Les sciences humaines",
          "stepBadge": "Les sciences humaines",
          "paragraphText": "• Sciences humaines : sciences qui étudient l'homme et ses comportements individuels et collectifs : histoire, psychologie, sociologie, anthropologie, ethnologie.\nPour Piaget (Épistémologie des sciences de l'homme), elles se sont dissociées de la philosophie pour devenir des sciences.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p05_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces disciplines est une science humaine ?",
            "options": [
              "La chimie",
              "La logique",
              "La psychologie",
              "La géométrie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La psychologie étudie le comportement et la vie mentale de l'homme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les limites des sciences formelles",
          "stepTheme": "Les limites des sciences formelles",
          "stepBadge": "Les limites des sciences formelles",
          "paragraphText": "Logique et mathématiques servent à bien raisonner, mais ne disent rien directement du réel.\nAristote appelait sa logique organon : un outil. Pour Bacon, les mathématiques ne doivent être que les « servantes de la physique ».",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p05_q2",
            "type": "mcq",
            "prompt": "Que signifie le mot organon qu'Aristote donne à sa logique ?",
            "options": [
              "Un outil, un instrument",
              "Une science du vivant",
              "Une vérité absolue",
              "Une croyance"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La logique est un instrument au service de la connaissance."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Le sens de la phrase de Russell",
          "stepTheme": "Le sens de la phrase de Russell",
          "stepBadge": "Le sens de la phrase de Russell",
          "paragraphText": "Russell (Mysticisme et logique) : les mathématiques sont « le domaine dans lequel on ne sait jamais de quoi l'on parle, ni si ce que l'on dit est vrai ».\nLe PDF y voit une preuve que les mathématiques sont stériles : c'est un contresens. Russell veut dire qu'elles sont purement formelles : elles valent pour n'importe quels objets et n'affirment pas la vérité de leurs points de départ, seulement la rigueur des déductions.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p05_q3",
            "type": "mcq",
            "prompt": "Que veut dire Russell par cette formule sur les mathématiques ?",
            "options": [
              "Qu'elles sont inutiles et stériles",
              "Que les mathématiciens se trompent toujours",
              "Qu'elles sont des sciences expérimentales",
              "Qu'elles sont purement formelles et indépendantes de tout contenu particulier"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La formule souligne le caractère formel des mathématiques, pas leur inutilité."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La lumière : corpuscules ou ondes ?",
          "stepTheme": "La lumière : corpuscules ou ondes ?",
          "stepBadge": "La lumière : corpuscules ou ondes ?",
          "paragraphText": "On a d'abord expliqué la lumière par des corpuscules (Newton). Les interférences (deux lumières qui produisent des zones sombres) ont imposé la théorie ondulatoire (Young, Fresnel). Au XXe siècle, la physique a montré que la lumière a les deux aspects (photons d'Einstein).\nLa vérité expérimentale se corrige sans cesse.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p05_q4",
            "type": "mcq",
            "prompt": "Que montre l'histoire des théories de la lumière ?",
            "options": [
              "Que la science ne progresse jamais",
              "Que les vérités scientifiques se corrigent avec de nouvelles expériences",
              "Que la première théorie était la bonne",
              "Que l'expérience ne sert à rien"
            ],
            "correctAnswerIndex": 1,
            "explanation": "De nouveaux faits obligent à réviser les théories."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les limites des sciences humaines",
          "stepTheme": "Les limites des sciences humaines",
          "stepBadge": "Les limites des sciences humaines",
          "paragraphText": "Dans les sciences humaines, l'événement est irréversible : on ne peut pas l'observer à nouveau ni le reproduire.\nLe chercheur peut être influencé par son époque, sa culture, ses choix politiques ou religieux : son objectivité est fragile.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p05_q5",
            "type": "mcq",
            "prompt": "Pourquoi l'objectivité est-elle difficile dans les sciences humaines ?",
            "options": [
              "Les hommes n'ont aucun comportement",
              "Le chercheur est lui-même un homme influencé par son époque",
              "Les faits humains se répètent à l'identique",
              "On peut tout refaire en laboratoire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'homme étudie l'homme : il est juge et partie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une citation de Pascal mal située",
          "stepTheme": "Une citation de Pascal mal située",
          "stepBadge": "Une citation de Pascal mal située",
          "paragraphText": "« Les secrets de la nature sont cachés ; […] le temps les révèle d'âge en âge » n'est pas tiré des Pensées, comme le dit le PDF.\nPascal l'écrit dans la Préface pour le Traité du vide, où il défend le progrès des connaissances scientifiques.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p05_q6",
            "type": "mcq",
            "prompt": "Dans quel texte Pascal écrit-il que le temps révèle les secrets de la nature d'âge en âge ?",
            "options": [
              "Les Pensées",
              "De l'esprit géométrique",
              "Le Discours de la méthode",
              "La Préface pour le Traité du vide"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Citer la bonne œuvre évite de perdre des points."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p05_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces disciplines est une science humaine ?",
          "options": [
            "La chimie",
            "La logique",
            "La psychologie",
            "La géométrie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La psychologie étudie le comportement et la vie mentale de l'homme."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p05_q2",
          "type": "mcq",
          "prompt": "Que signifie le mot organon qu'Aristote donne à sa logique ?",
          "options": [
            "Un outil, un instrument",
            "Une science du vivant",
            "Une vérité absolue",
            "Une croyance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La logique est un instrument au service de la connaissance."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p05_q3",
          "type": "mcq",
          "prompt": "Que veut dire Russell par cette formule sur les mathématiques ?",
          "options": [
            "Qu'elles sont inutiles et stériles",
            "Que les mathématiciens se trompent toujours",
            "Qu'elles sont des sciences expérimentales",
            "Qu'elles sont purement formelles et indépendantes de tout contenu particulier"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La formule souligne le caractère formel des mathématiques, pas leur inutilité."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p05_q4",
          "type": "mcq",
          "prompt": "Que montre l'histoire des théories de la lumière ?",
          "options": [
            "Que la science ne progresse jamais",
            "Que les vérités scientifiques se corrigent avec de nouvelles expériences",
            "Que la première théorie était la bonne",
            "Que l'expérience ne sert à rien"
          ],
          "correctAnswerIndex": 1,
          "explanation": "De nouveaux faits obligent à réviser les théories."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p05_q5",
          "type": "mcq",
          "prompt": "Pourquoi l'objectivité est-elle difficile dans les sciences humaines ?",
          "options": [
            "Les hommes n'ont aucun comportement",
            "Le chercheur est lui-même un homme influencé par son époque",
            "Les faits humains se répètent à l'identique",
            "On peut tout refaire en laboratoire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'homme étudie l'homme : il est juge et partie."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p05_q6",
          "type": "mcq",
          "prompt": "Dans quel texte Pascal écrit-il que le temps révèle les secrets de la nature d'âge en âge ?",
          "options": [
            "Les Pensées",
            "De l'esprit géométrique",
            "Le Discours de la méthode",
            "La Préface pour le Traité du vide"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Citer la bonne œuvre évite de perdre des points."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p06",
      "order": 6,
      "title": "La connaissance du vivant et la bioéthique",
      "summary": "Finalisme, mécanisme, vitalisme, organicisme ; problèmes de bioéthique.",
      "conceptExplanation": "Le vivant se caractérise par la cellule, la respiration, la reproduction, l'irritabilité, l'autoconstruction et l'autoréparation.\n• Finalisme (Aristote) : la nature ne fait rien en vain ; tout organe a une fin (l'œil est fait pour voir).\n• Mécanisme (Descartes) : le vivant s'explique comme une machine, par les lois physiques.\n• Vitalisme : la vie vient d'une force vitale immatérielle.\n• Organicisme : pour Kant (Critique de la faculté de juger), « un être organisé n'est pas une simple machine » ; Canguilhem (La connaissance de la vie) souligne l'autoconstitution, l'autorégulation, l'autoréparation.\nLa bioéthique étudie les règles morales qui doivent encadrer les pratiques médicales et biologiques : procréation assistée, mère porteuse, euthanasie, vente d'organes. « Science sans conscience n'est que ruine de l'âme » (Rabelais).",
      "keyRule": "Le vivant n'est pas une simple machine ; la bioéthique fixe les limites morales de la science.",
      "formulas": [],
      "workedExample": {
        "title": "La montre et l'organisme",
        "statement": "Une montre cassée se répare-t-elle seule ? Et une peau coupée ?",
        "methodSteps": [
          "La montre a besoin d'un horloger pour être réparée.",
          "La peau cicatrise d'elle-même : l'organisme s'autorépare."
        ],
        "conclusion": "C'est l'argument organiciste : le vivant n'est pas une machine."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le finalisme",
          "stepTheme": "Le finalisme",
          "stepBadge": "Le finalisme",
          "paragraphText": "• Finalisme : doctrine selon laquelle tout dans la nature a une fin, un but.\nAristote (Parties des animaux) : ce n'est pas le hasard mais la finalité qui règne dans les œuvres de la nature. Exemple : les yeux sont faits pour voir.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p06_q1",
            "type": "mcq",
            "prompt": "Quelle phrase exprime le finalisme ?",
            "options": [
              "Les yeux sont faits pour voir",
              "Le corps est une machine",
              "La vie est une force immatérielle",
              "Tout s'explique par le hasard"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le finalisme explique les organes par leur fonction, leur but."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le mécanisme",
          "stepTheme": "Le mécanisme",
          "stepBadge": "Le mécanisme",
          "paragraphText": "• Mécanisme : doctrine selon laquelle le vivant s'explique comme les autres phénomènes naturels, par les lois du mouvement et les lois physico-chimiques.\nDescartes compare le corps à une machine : c'est la théorie des animaux-machines.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p06_q2",
            "type": "mcq",
            "prompt": "Pour le mécanisme, comment s'explique le vivant ?",
            "options": [
              "Par une force vitale immatérielle",
              "Par une âme qui le guide",
              "Par les lois physiques et chimiques, comme une machine",
              "Par le hasard pur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le mécanisme réduit le vivant au fonctionnement d'une machine."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "La « machine de terre » de Descartes",
          "stepTheme": "La « machine de terre » de Descartes",
          "stepBadge": "La « machine de terre » de Descartes",
          "paragraphText": "Le PDF situe dans le Discours de la méthode la phrase : « Je suppose que le corps n'est autre chose qu'une statue ou machine de terre ».\nElle vient en réalité du Traité de l'homme de Descartes.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p06_q3",
            "type": "mcq",
            "prompt": "Dans quel ouvrage Descartes compare-t-il le corps à une « statue ou machine de terre » ?",
            "options": [
              "Le Discours de la méthode",
              "Les Méditations métaphysiques",
              "Les Principes de la philosophie",
              "Le Traité de l'homme"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Traité de l'homme, rédigé vers 1633 et publié après sa mort."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'organicisme",
          "stepTheme": "L'organicisme",
          "stepBadge": "L'organicisme",
          "paragraphText": "Kant (Critique de la faculté de juger) : « un être organisé n'est pas une simple machine ».\nCanguilhem (La connaissance de la vie) : l'organisme présente une autoconstitution, une autorégulation et une autoréparation, impossibles pour une machine qui dépend de l'homme.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p06_q4",
            "type": "mcq",
            "prompt": "Qu'est-ce qui distingue un organisme d'une machine selon Canguilhem ?",
            "options": [
              "Il a besoin d'un réparateur",
              "Il ne consomme pas d'énergie",
              "Il se construit, se règle et se répare lui-même",
              "Il ne se reproduit pas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La machine dépend de son constructeur ; le vivant s'auto-organise."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La bioéthique",
          "stepTheme": "La bioéthique",
          "stepBadge": "La bioéthique",
          "paragraphText": "• Bioéthique (du grec bios, la vie, et ethos, les mœurs) : étude des règles morales qui doivent guider les pratiques médicales et biologiques sur l'être humain.\nElle réunit médecins, biologistes, juristes, philosophes et religieux pour fixer les frontières du possible et du légitime.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p06_q5",
            "type": "mcq",
            "prompt": "Qu'est-ce que la bioéthique ?",
            "options": [
              "Une branche de la chimie",
              "L'étude des règles morales qui encadrent les pratiques médicales et biologiques",
              "La science des plantes",
              "Une technique de clonage"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La bioéthique pose des limites morales à ce que la science sait faire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Des problèmes bioéthiques",
          "stepTheme": "Des problèmes bioéthiques",
          "stepBadge": "Des problèmes bioéthiques",
          "paragraphText": "La procréation assistée (insémination artificielle, fécondation in vitro, mère porteuse, embryons congelés) pose la question du statut de l'embryon et de la filiation.\nL'acharnement thérapeutique, l'euthanasie et le commerce d'organes posent la question de la dignité humaine.\nRabelais : « Science sans conscience n'est que ruine de l'âme ».",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p06_q6",
            "type": "mcq",
            "prompt": "Quelle question pose la pratique de la mère porteuse ?",
            "options": [
              "La question de la filiation et de la dignité de la personne",
              "La question de la vitesse de la lumière",
              "La question du syllogisme",
              "La question de la loi des trois états"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Qui est la mère : celle qui donne l'ovule ou celle qui porte l'enfant ?"
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p06_q1",
          "type": "mcq",
          "prompt": "Quelle phrase exprime le finalisme ?",
          "options": [
            "Les yeux sont faits pour voir",
            "Le corps est une machine",
            "La vie est une force immatérielle",
            "Tout s'explique par le hasard"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le finalisme explique les organes par leur fonction, leur but."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p06_q2",
          "type": "mcq",
          "prompt": "Pour le mécanisme, comment s'explique le vivant ?",
          "options": [
            "Par une force vitale immatérielle",
            "Par une âme qui le guide",
            "Par les lois physiques et chimiques, comme une machine",
            "Par le hasard pur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le mécanisme réduit le vivant au fonctionnement d'une machine."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p06_q3",
          "type": "mcq",
          "prompt": "Dans quel ouvrage Descartes compare-t-il le corps à une « statue ou machine de terre » ?",
          "options": [
            "Le Discours de la méthode",
            "Les Méditations métaphysiques",
            "Les Principes de la philosophie",
            "Le Traité de l'homme"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Traité de l'homme, rédigé vers 1633 et publié après sa mort."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p06_q4",
          "type": "mcq",
          "prompt": "Qu'est-ce qui distingue un organisme d'une machine selon Canguilhem ?",
          "options": [
            "Il a besoin d'un réparateur",
            "Il ne consomme pas d'énergie",
            "Il se construit, se règle et se répare lui-même",
            "Il ne se reproduit pas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La machine dépend de son constructeur ; le vivant s'auto-organise."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p06_q5",
          "type": "mcq",
          "prompt": "Qu'est-ce que la bioéthique ?",
          "options": [
            "Une branche de la chimie",
            "L'étude des règles morales qui encadrent les pratiques médicales et biologiques",
            "La science des plantes",
            "Une technique de clonage"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La bioéthique pose des limites morales à ce que la science sait faire."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p06_q6",
          "type": "mcq",
          "prompt": "Quelle question pose la pratique de la mère porteuse ?",
          "options": [
            "La question de la filiation et de la dignité de la personne",
            "La question de la vitesse de la lumière",
            "La question du syllogisme",
            "La question de la loi des trois états"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Qui est la mère : celle qui donne l'ovule ou celle qui porte l'enfant ?"
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p07",
      "order": 7,
      "title": "Les limites de la vérité scientifique",
      "summary": "Vérités provisoires, falsifiabilité, obstacle épistémologique, autres vérités.",
      "conceptExplanation": "Les théories scientifiques sont relatives : en mathématiques, à leurs axiomes ; en sciences humaines, à la liberté humaine ; en sciences expérimentales, à l'état des connaissances.\nClaude Bernard : les théories « ne sont que des vérités partielles et provisoires ». Pour Max Planck, rien ne garantit qu'une loi physique vaudra toujours.\nPopper (La Logique de la découverte scientifique) : une théorie scientifique doit pouvoir être réfutée par l'expérience (falsifiabilité).\nBachelard : une théorie qui se croit absolue devient un « obstacle épistémologique ».\nLa science ne répond pas aux besoins moraux et spirituels : d'autres vérités (du cœur, de la foi, de l'art) la complètent.",
      "keyRule": "Une théorie scientifique est provisoire et doit pouvoir être réfutée.",
      "formulas": [],
      "workedExample": {
        "title": "« Tous les cygnes sont blancs »",
        "statement": "On a vu des milliers de cygnes blancs. A-t-on prouvé que tous les cygnes sont blancs ?",
        "methodSteps": [
          "Mille confirmations ne prouvent pas une loi universelle.",
          "Un seul cygne noir suffit à la réfuter (on en a trouvé en Australie)."
        ],
        "conclusion": "Pour Popper, une théorie est scientifique si on peut la mettre à l'épreuve et éventuellement la réfuter."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Des vérités provisoires",
          "stepTheme": "Des vérités provisoires",
          "stepBadge": "Des vérités provisoires",
          "paragraphText": "Claude Bernard : les théories scientifiques « ne sont que des vérités partielles et provisoires ».\nMax Planck (Initiation à la physique) : rien ne garantit qu'une loi physique, valable jusqu'ici, le restera toujours.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p07_q1",
            "type": "mcq",
            "prompt": "Selon Claude Bernard, que sont les théories scientifiques ?",
            "options": [
              "Des vérités partielles et provisoires",
              "Des vérités éternelles",
              "De simples opinions",
              "Des dogmes religieux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La science progresse en corrigeant ses théories."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La falsifiabilité",
          "stepTheme": "La falsifiabilité",
          "stepBadge": "La falsifiabilité",
          "paragraphText": "Popper (La Logique de la découverte scientifique, 1934) : « un système faisant partie de la science empirique doit pouvoir être réfuté par l'expérience ».\n• Falsifiable (réfutable) : qu'on peut mettre à l'épreuve et qui pourrait se révéler faux.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p07_q2",
            "type": "mcq",
            "prompt": "Pour Popper, qu'est-ce qui caractérise une théorie scientifique ?",
            "options": [
              "Elle ne peut jamais être contestée",
              "Elle peut être réfutée par l'expérience",
              "Elle est acceptée par la majorité",
              "Elle est démontrée une fois pour toutes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une théorie qui ne peut être réfutée par aucun fait n'est pas scientifique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Corroborée, pas prouvée",
          "stepTheme": "Corroborée, pas prouvée",
          "stepBadge": "Corroborée, pas prouvée",
          "paragraphText": "Pour Popper, une théorie qui résiste aux tests est « corroborée » : elle a fait ses preuves pour un temps, mais un test négatif pourra toujours l'éliminer plus tard.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p07_q3",
            "type": "mcq",
            "prompt": "Que signifie qu'une théorie est « corroborée » selon Popper ?",
            "options": [
              "Elle est vraie pour toujours",
              "Elle a été réfutée",
              "Elle a résisté aux tests pour l'instant",
              "Elle n'a jamais été testée"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La corroboration est toujours provisoire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'obstacle épistémologique",
          "stepTheme": "L'obstacle épistémologique",
          "stepBadge": "L'obstacle épistémologique",
          "paragraphText": "Bachelard (La Formation de l'esprit scientifique) : une connaissance qui se croit absolue freine le progrès ; elle devient un « obstacle épistémologique ».\nLe savant doit savoir abandonner ses idées chères.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p07_q4",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'un obstacle épistémologique pour Bachelard ?",
            "options": [
              "Un appareil de laboratoire défectueux",
              "Une expérience réussie",
              "Une loi mathématique",
              "Une connaissance qui bloque le progrès de la science"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'obstacle est dans l'esprit du savant, pas dans les choses."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Ce que la science ne peut pas dire",
          "stepTheme": "Ce que la science ne peut pas dire",
          "stepBadge": "Ce que la science ne peut pas dire",
          "paragraphText": "La science aide à dominer la matière, mais elle ne dit pas comment vivre : elle ne nous apprend ni l'amour, ni la solidarité, ni le sens de la vie.\nD'autres vérités la complètent : celles du cœur, de la foi, de l'art, de la philosophie. Pour Bachelard, science et poésie doivent s'unir « comme deux contraires bien faits ».",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p07_q5",
            "type": "mcq",
            "prompt": "Pourquoi la science n'est-elle pas la seule détentrice de la vérité ?",
            "options": [
              "Elle se trompe toujours",
              "Elle n'utilise aucune méthode",
              "Elle ne répond pas aux besoins moraux et spirituels de l'homme",
              "Elle refuse toute expérience"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La science explique comment ; elle ne dit pas pourquoi vivre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Croyance et théorie",
          "stepTheme": "Croyance et théorie",
          "stepBadge": "Croyance et théorie",
          "paragraphText": "Russell (Science et religion) : un credo religieux prétend exprimer une vérité éternelle, alors que la science garde un caractère provisoire.\nFrançois Jacob : le mythe se fige, la théorie scientifique est sans cesse confrontée aux faits et modifiée.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p07_q6",
            "type": "mcq",
            "prompt": "Selon François Jacob, qu'est-ce qui distingue la théorie scientifique du mythe ?",
            "options": [
              "Elle ne fait jamais appel à l'imagination",
              "Elle se fige une fois inventée",
              "Elle explique tout définitivement",
              "Elle est sans cesse confrontée aux faits et modifiée"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le mythe se fige ; la science se corrige."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p07_q1",
          "type": "mcq",
          "prompt": "Selon Claude Bernard, que sont les théories scientifiques ?",
          "options": [
            "Des vérités partielles et provisoires",
            "Des vérités éternelles",
            "De simples opinions",
            "Des dogmes religieux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La science progresse en corrigeant ses théories."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p07_q2",
          "type": "mcq",
          "prompt": "Pour Popper, qu'est-ce qui caractérise une théorie scientifique ?",
          "options": [
            "Elle ne peut jamais être contestée",
            "Elle peut être réfutée par l'expérience",
            "Elle est acceptée par la majorité",
            "Elle est démontrée une fois pour toutes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une théorie qui ne peut être réfutée par aucun fait n'est pas scientifique."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p07_q3",
          "type": "mcq",
          "prompt": "Que signifie qu'une théorie est « corroborée » selon Popper ?",
          "options": [
            "Elle est vraie pour toujours",
            "Elle a été réfutée",
            "Elle a résisté aux tests pour l'instant",
            "Elle n'a jamais été testée"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La corroboration est toujours provisoire."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p07_q4",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un obstacle épistémologique pour Bachelard ?",
          "options": [
            "Un appareil de laboratoire défectueux",
            "Une expérience réussie",
            "Une loi mathématique",
            "Une connaissance qui bloque le progrès de la science"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'obstacle est dans l'esprit du savant, pas dans les choses."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p07_q5",
          "type": "mcq",
          "prompt": "Pourquoi la science n'est-elle pas la seule détentrice de la vérité ?",
          "options": [
            "Elle se trompe toujours",
            "Elle n'utilise aucune méthode",
            "Elle ne répond pas aux besoins moraux et spirituels de l'homme",
            "Elle refuse toute expérience"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La science explique comment ; elle ne dit pas pourquoi vivre."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p07_q6",
          "type": "mcq",
          "prompt": "Selon François Jacob, qu'est-ce qui distingue la théorie scientifique du mythe ?",
          "options": [
            "Elle ne fait jamais appel à l'imagination",
            "Elle se fige une fois inventée",
            "Elle explique tout définitivement",
            "Elle est sans cesse confrontée aux faits et modifiée"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le mythe se fige ; la science se corrige."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p08",
      "order": 8,
      "title": "Méthode : sujets et texte du BAC",
      "summary": "Nos connaissances résultent-elles de l'expérience ? Le texte de Pascal.",
      "conceptExplanation": "Sujet : « Nos connaissances résultent-elles de l'expérience ? » Problème : quelle est la source de nos connaissances ?\nAxe 1 : elles viennent des sens (empirisme : Locke).\nAxe 2 : les sens trompent, la raison est la vraie source (Descartes).\nAxe 3 : sensibilité et entendement collaborent (Kant ; Claude Bernard).\nTexte de Pascal (De l'esprit géométrique) : la méthode parfaite (tout définir, tout prouver) est impossible, car on remonterait à l'infini ; il faut s'arrêter à des mots primitifs et à des principes évidents. La géométrie est l'ordre le plus parfait que l'homme puisse atteindre.",
      "keyRule": "La connaissance unit l'expérience et la raison ; aucune méthode humaine n'est absolument parfaite.",
      "formulas": [],
      "workedExample": {
        "title": "Tout définir ?",
        "statement": "Essayez de définir « temps » sans utiliser de mots qui supposent déjà le temps. Que constatez-vous ?",
        "methodSteps": [
          "Chaque définition utilise d'autres mots qu'il faudrait définir.",
          "On finit par arriver à des mots primitifs que tout le monde comprend sans définition."
        ],
        "conclusion": "C'est l'argument de Pascal : tout définir mènerait à une régression à l'infini."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Analyser le sujet",
          "stepTheme": "Analyser le sujet",
          "stepBadge": "Analyser le sujet",
          "paragraphText": "« Nos connaissances résultent-elles de l'expérience ? »\n• Nos connaissances : l'ensemble de nos savoirs.\n• Résultent-elles de : viennent-elles de, ont-elles pour source.\n• L'expérience : ce que nous apprennent les sens et le vécu.\nProblème : quelle est la source de nos connaissances ?",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p08_q1",
            "type": "mcq",
            "prompt": "Quel est le problème du sujet « Nos connaissances résultent-elles de l'expérience ? »",
            "options": [
              "Quelle est la source de nos connaissances ?",
              "La science est-elle utile ?",
              "Faut-il croire en Dieu ?",
              "Le langage dit-il la vérité ?"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Résulter de » pose la question de l'origine."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "« De l'expérience » : c'est Locke",
          "stepTheme": "« De l'expérience » : c'est Locke",
          "stepBadge": "« De l'expérience » : c'est Locke",
          "paragraphText": "Le corrigé du PDF attribue à Hume la phrase : « D'où viennent nos connaissances ? Je réponds en un mot : de l'expérience ».\nElle est de Locke (Essai sur l'entendement humain, livre II, chapitre 1). Hume est bien empiriste, mais la formule est de Locke.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p08_q2",
            "type": "mcq",
            "prompt": "Qui écrit : « Je réponds en un mot : de l'expérience » ?",
            "options": [
              "Hume",
              "Locke",
              "Descartes",
              "Kant"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Essai sur l'entendement humain, II, 1, § 2."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Hegel hors sujet",
          "stepTheme": "Hegel hors sujet",
          "stepBadge": "Hegel hors sujet",
          "paragraphText": "Le corrigé cite Hegel (« Tout ce qui est réel est rationnel, tout ce qui est rationnel est réel ») pour dire que la connaissance vient de la seule raison.\nC'est un contresens : dans les Principes de la philosophie du droit, Hegel parle de la rationalité de la réalité et de l'histoire, pas de la source de nos connaissances. Pour l'axe rationaliste, citez plutôt Descartes.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p08_q3",
            "type": "mcq",
            "prompt": "Quel auteur convient le mieux pour soutenir que la connaissance vient de la raison ?",
            "options": [
              "Locke",
              "Descartes",
              "Hume",
              "Claude Bernard"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Descartes est le grand représentant du rationalisme."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "L'axe de la synthèse",
          "stepTheme": "L'axe de la synthèse",
          "stepBadge": "L'axe de la synthèse",
          "paragraphText": "Axe 3 : la connaissance naît de la collaboration des sens et de la raison.\nKant : « Sans la sensibilité nul objet ne serait donné, et sans l'entendement nul ne serait pensé ».\nClaude Bernard : le savant complet unit théorie et expérience.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p08_q4",
            "type": "mcq",
            "prompt": "Quel auteur montre que la connaissance unit sensibilité et entendement ?",
            "options": [
              "Kant",
              "Locke",
              "Platon",
              "Pyrrhon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Kant dépasse l'opposition entre empirisme et rationalisme."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La vraie thèse du texte de Pascal",
          "stepTheme": "La vraie thèse du texte de Pascal",
          "stepBadge": "La vraie thèse du texte de Pascal",
          "paragraphText": "Le corrigé résume la thèse ainsi : « en dehors de la méthode géométrique, les hommes ne peuvent parvenir à la vérité ». C'est trop fort.\nPascal dit : la méthode parfaite (tout définir, tout prouver) est impossible, car on remonterait à l'infini ; aucune science ne peut être traitée dans un ordre absolument accompli. La géométrie, qui s'arrête à des mots primitifs et à des principes clairs, est l'ordre le plus parfait accessible à l'homme.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p08_q5",
            "type": "mcq",
            "prompt": "Pourquoi, selon Pascal, la méthode qui définit tout et prouve tout est-elle impossible ?",
            "options": [
              "Parce que les hommes sont paresseux",
              "Parce que la géométrie est fausse",
              "Parce qu'il n'existe aucun principe clair",
              "Parce que chaque définition suppose d'autres termes, à l'infini"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On arrive nécessairement à des mots primitifs et à des principes qu'on ne peut plus prouver."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "« Nul n'entre ici s'il n'est géomètre »",
          "stepTheme": "« Nul n'entre ici s'il n'est géomètre »",
          "stepBadge": "« Nul n'entre ici s'il n'est géomètre »",
          "paragraphText": "Le corrigé cite cette formule comme tirée de La République de Platon.\nC'est en réalité, selon la tradition, l'inscription placée à l'entrée de l'Académie de Platon ; elle ne figure pas dans La République.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p08_q6",
            "type": "mcq",
            "prompt": "Où, selon la tradition, était inscrite la formule « Nul n'entre ici s'il n'est géomètre » ?",
            "options": [
              "Dans La République de Platon",
              "Dans les Pensées de Pascal",
              "À l'entrée de l'Académie de Platon",
              "Dans le Discours de la méthode"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Elle montre l'importance des mathématiques dans la formation du philosophe selon Platon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p08_q1",
          "type": "mcq",
          "prompt": "Quel est le problème du sujet « Nos connaissances résultent-elles de l'expérience ? »",
          "options": [
            "Quelle est la source de nos connaissances ?",
            "La science est-elle utile ?",
            "Faut-il croire en Dieu ?",
            "Le langage dit-il la vérité ?"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Résulter de » pose la question de l'origine."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p08_q2",
          "type": "mcq",
          "prompt": "Qui écrit : « Je réponds en un mot : de l'expérience » ?",
          "options": [
            "Hume",
            "Locke",
            "Descartes",
            "Kant"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Essai sur l'entendement humain, II, 1, § 2."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p08_q3",
          "type": "mcq",
          "prompt": "Quel auteur convient le mieux pour soutenir que la connaissance vient de la raison ?",
          "options": [
            "Locke",
            "Descartes",
            "Hume",
            "Claude Bernard"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Descartes est le grand représentant du rationalisme."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p08_q4",
          "type": "mcq",
          "prompt": "Quel auteur montre que la connaissance unit sensibilité et entendement ?",
          "options": [
            "Kant",
            "Locke",
            "Platon",
            "Pyrrhon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Kant dépasse l'opposition entre empirisme et rationalisme."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p08_q5",
          "type": "mcq",
          "prompt": "Pourquoi, selon Pascal, la méthode qui définit tout et prouve tout est-elle impossible ?",
          "options": [
            "Parce que les hommes sont paresseux",
            "Parce que la géométrie est fausse",
            "Parce qu'il n'existe aucun principe clair",
            "Parce que chaque définition suppose d'autres termes, à l'infini"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On arrive nécessairement à des mots primitifs et à des principes qu'on ne peut plus prouver."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p08_q6",
          "type": "mcq",
          "prompt": "Où, selon la tradition, était inscrite la formule « Nul n'entre ici s'il n'est géomètre » ?",
          "options": [
            "Dans La République de Platon",
            "Dans les Pensées de Pascal",
            "À l'entrée de l'Académie de Platon",
            "Dans le Discours de la méthode"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Elle montre l'importance des mathématiques dans la formation du philosophe selon Platon."
        }
      ]
    }
  ]
};
