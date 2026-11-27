import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Puissance et énergie électrique » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Puissance et énergie électrique » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const PHYSIQUE_1ERE_CD_L03_PUISSANCE_ENERGIE_ELECTRIQUE: CurriculumChapter = {
  "id": "premiere_c_physique_l03_puissance_energie_electrique",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 3,
  "title": "Leçon 3 : Puissance et énergie électrique",
  "summary": "L'énergie consommée par un appareil dépend de sa puissance et de sa durée de fonctionnement, mais elle ne s'exprime pas de la même manière pour tous les appareils. La leçon applique la loi d'Ohm au conducteur ohmique, au générateur et à l'électrolyseur, établit leurs bilans de puissance et d'énergie, puis la loi de Pouillet et le rendement électrique.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Puissance et énergie électrique » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_physique_l03_puissance_energie_electrique_p01",
      "order": 1,
      "title": "Le conducteur ohmique : loi d'Ohm et effet Joule",
      "summary": "Pour un résistor, U = R × I et toute l'énergie électrique reçue est transformée en chaleur : c'est l'effet Joule.",
      "conceptExplanation": "Pour un conducteur ohmique (résistor) de résistance R, la loi d'Ohm s'écrit $U = R \\times I$, avec U en volts (V), R en ohms (Ω) et I en ampères (A).\nLa conductance du conducteur ohmique vaut $G = \\frac{1}{R}$ ; elle s'exprime en siemens (S) et donne $I = G \\times U$.\nL'énergie électrique reçue par le résistor vaut $E_{reçue} = U_{AB} \\times I \\times t = R \\times I^2 \\times t$, et la puissance reçue vaut $P_{reçue} = U_{AB} \\times I = R \\times I^2$.\nBilan énergétique : l'énergie électrique reçue par le résistor est totalement transformée en chaleur (énergie thermique) : c'est l'effet Joule. Le résistor est un dipôle purement thermique et la puissance évacuée sous forme de chaleur est la puissance Joule, notée PJ.",
      "keyRule": "Résistor : U = RI et E = RI²t ; toute l'énergie reçue devient de la chaleur (effet Joule).",
      "formulas": [
        {
          "name": "Loi d'Ohm pour un résistor",
          "formula": "U = R \\times I",
          "note": "U en volts, R en ohms, I en ampères."
        },
        {
          "name": "Énergie et puissance reçues par un résistor",
          "formula": "E = R \\times I^2 \\times t \\quad ; \\quad P = R \\times I^2",
          "note": "Totalement converties en chaleur par effet Joule."
        },
        {
          "name": "Conductance",
          "formula": "G = \\frac{1}{R}",
          "note": "G en siemens (S) ; on a alors I = G × U."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application : retrouver l'intensité",
        "statement": "Un conducteur ohmique de résistance R = 20 Ω consomme une énergie électrique W = 540 J pendant une durée de fonctionnement Δt = 5 min. Détermine l'intensité du courant électrique qui traverse le conducteur ohmique.",
        "methodSteps": [
          "On convertit la durée : Δt = 5 min = 300 s.",
          "De E = R × I² × Δt, on tire I en prenant la racine carrée du quotient de E par R × Δt.",
          "I = 0,3 A."
        ],
        "conclusion": "L'intensité vaut 0,3 A : c'est le résultat du corrigé de l'activité d'application."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La loi d'Ohm : U = R × I",
          "stepTheme": "La loi d'Ohm : U = R × I",
          "stepBadge": "La loi d'Ohm : U = R × I",
          "paragraphText": "• Loi d'Ohm pour un conducteur ohmique : la tension à ses bornes est proportionnelle à l'intensité qui le traverse, $U = R \\times I$.\nLe résumé précise les unités : U en volts (V), R en ohms (Ω) et I en ampères (A).",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p01_q1",
            "type": "mcq",
            "prompt": "La loi d'Ohm pour un conducteur ohmique de résistance R s'écrit :",
            "options": [
              "$U = \\frac{R}{I}$",
              "$U = R \\times I$",
              "$U = \\frac{I}{R}$",
              "$I = R \\times U$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la relation du §1.1 du résumé : U = R × I."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "La conductance G = 1 divisé par R",
          "stepTheme": "La conductance G = 1 divisé par R",
          "stepBadge": "La conductance G = 1 divisé par R",
          "paragraphText": "Piège : la conductance n'est pas une deuxième résistance, c'est l'inverse de la résistance.\nLa conductance du conducteur ohmique est l'inverse de sa résistance : $G = \\frac{1}{R}$.\nElle s'exprime en siemens (S), c'est-à-dire en ohm moins un, et la loi d'Ohm devient $I = G \\times U$.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p01_q2",
            "type": "mcq",
            "prompt": "La conductance d'un conducteur ohmique s'exprime en :",
            "options": [
              "Ohms (Ω)",
              "Volts (V)",
              "Siemens (S)",
              "Ampères (A)"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé donne G = 1 divisé par R, en siemens (S), soit des ohms moins un."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'énergie reçue : E = R × I² × t",
          "stepTheme": "L'énergie reçue : E = R × I² × t",
          "stepBadge": "L'énergie reçue : E = R × I² × t",
          "paragraphText": "L'énergie électrique reçue par le résistor vaut $E_{reçue} = U_{AB} \\times I \\times t$.\nEn utilisant la loi d'Ohm U = R × I, on obtient l'expression propre au résistor : $E_{reçue} = R \\times I^2 \\times t$, et la puissance reçue $P = R \\times I^2$.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p01_q3",
            "type": "mcq",
            "prompt": "L'énergie électrique reçue par un résistor pendant la durée t s'écrit :",
            "options": [
              "$E = R \\times I^2 \\times t$",
              "$E = \\frac{R \\times I}{t}$",
              "$E = U + I + t$",
              "$E = R \\times I$ uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'étude énergétique du §1.2 : E reçue = UAB × I × t = R × I² × t."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'effet Joule : tout devient chaleur",
          "stepTheme": "L'effet Joule : tout devient chaleur",
          "stepBadge": "L'effet Joule : tout devient chaleur",
          "paragraphText": "• Effet Joule : l'énergie électrique reçue par le résistor est totalement transformée en chaleur (énergie thermique).\nLe résistor est un dipôle purement thermique ; la puissance thermique évacuée à l'extérieur est appelée puissance Joule et notée PJ.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p01_q4",
            "type": "mcq",
            "prompt": "Dans un conducteur ohmique, l'énergie électrique reçue est :",
            "options": [
              "Stockée sous forme chimique",
              "Transformée en énergie mécanique",
              "Perdue sans transformation",
              "Totalement transformée en chaleur : c'est l'effet Joule"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le bilan énergétique du §1.3 : le résistor est un dipôle purement thermique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le calcul de l'activité : I = 0,3 A",
          "stepTheme": "Le calcul de l'activité : I = 0,3 A",
          "stepBadge": "Le calcul de l'activité : I = 0,3 A",
          "paragraphText": "Pour l'activité (R = 20 Ω, W = 540 J, Δt = 5 min), la durée doit d'abord être convertie en secondes : 300 s.\nLe corrigé isole ensuite I en prenant la racine carrée du quotient de l'énergie par le produit R × Δt.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p01_q5",
            "type": "mcq",
            "prompt": "L'intensité qui traverse le conducteur ohmique de l'activité (R = 20 Ω, W = 540 J en 5 min) vaut :",
            "options": [
              "3 A",
              "0,3 A",
              "0,03 A",
              "1,5 A"
            ],
            "correctAnswerIndex": 1,
            "explanation": "I est la racine carrée de 540 divisé par (20 × 300), soit la racine de 0,09 : I = 0,3 A (corrigé de l'activité)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le fer à repasser de l'exercice 2",
          "stepTheme": "Le fer à repasser de l'exercice 2",
          "stepBadge": "Le fer à repasser de l'exercice 2",
          "paragraphText": "Le fer à repasser de l'exercice 2 porte les indications 220 V et 1 000 W : c'est un résistor chauffant.\nSon intensité se déduit de la puissance reçue P = U × I, et sa résistance vaut 48,4 Ω d'après le corrigé de l'exercice.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p01_q6",
            "type": "mcq",
            "prompt": "L'intensité du courant dans la résistance chauffante du fer à repasser (220 V ; 1 000 W) vaut environ :",
            "options": [
              "1,5 A",
              "2,6 A",
              "4,5 A",
              "0,45 A"
            ],
            "correctAnswerIndex": 2,
            "explanation": "I = P divisé par U = 1 000 divisé par 220, soit environ 4,5 A : c'est la réponse c de l'exercice 2."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p01_q1",
          "type": "mcq",
          "prompt": "La loi d'Ohm pour un conducteur ohmique de résistance R s'écrit :",
          "options": [
            "$U = \\frac{R}{I}$",
            "$U = R \\times I$",
            "$U = \\frac{I}{R}$",
            "$I = R \\times U$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la relation du §1.1 du résumé : U = R × I."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p01_q2",
          "type": "mcq",
          "prompt": "La conductance d'un conducteur ohmique s'exprime en :",
          "options": [
            "Ohms (Ω)",
            "Volts (V)",
            "Siemens (S)",
            "Ampères (A)"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé donne G = 1 divisé par R, en siemens (S), soit des ohms moins un."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p01_q3",
          "type": "mcq",
          "prompt": "L'énergie électrique reçue par un résistor pendant la durée t s'écrit :",
          "options": [
            "$E = R \\times I^2 \\times t$",
            "$E = \\frac{R \\times I}{t}$",
            "$E = U + I + t$",
            "$E = R \\times I$ uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'étude énergétique du §1.2 : E reçue = UAB × I × t = R × I² × t."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p01_q4",
          "type": "mcq",
          "prompt": "Dans un conducteur ohmique, l'énergie électrique reçue est :",
          "options": [
            "Stockée sous forme chimique",
            "Transformée en énergie mécanique",
            "Perdue sans transformation",
            "Totalement transformée en chaleur : c'est l'effet Joule"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le bilan énergétique du §1.3 : le résistor est un dipôle purement thermique."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p01_q5",
          "type": "mcq",
          "prompt": "L'intensité qui traverse le conducteur ohmique de l'activité (R = 20 Ω, W = 540 J en 5 min) vaut :",
          "options": [
            "3 A",
            "0,3 A",
            "0,03 A",
            "1,5 A"
          ],
          "correctAnswerIndex": 1,
          "explanation": "I est la racine carrée de 540 divisé par (20 × 300), soit la racine de 0,09 : I = 0,3 A (corrigé de l'activité)."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p01_q6",
          "type": "mcq",
          "prompt": "L'intensité du courant dans la résistance chauffante du fer à repasser (220 V ; 1 000 W) vaut environ :",
          "options": [
            "1,5 A",
            "2,6 A",
            "4,5 A",
            "0,45 A"
          ],
          "correctAnswerIndex": 2,
          "explanation": "I = P divisé par U = 1 000 divisé par 220, soit environ 4,5 A : c'est la réponse c de l'exercice 2."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l03_puissance_energie_electrique_p02",
      "order": 2,
      "title": "Le générateur : puissance engendrée, puissance disponible, pertes Joule",
      "summary": "Pour un générateur, UPN = e − r × I ; la puissance engendrée e × I se partage entre la puissance disponible UPN × I et les pertes r × I².",
      "conceptExplanation": "Le schéma équivalent série d'un générateur (une pile) donne la loi d'Ohm : $U_{PN} = e - r \\times I$, où e est la force électromotrice et r la résistance interne.\nLe schéma équivalent parallèle utilise la conductance $g = \\frac{1}{r}$ et le courant de court-circuit $I_0 = \\frac{e}{r}$.\nUn électron qui passe de P à N gagne une énergie potentielle électrostatique $\\Delta E_p = e \\times U_{PN} > 0$ : cette énergie est donnée par le générateur.\nBilan énergétique : $P = U_{PN} \\times I = e \\times I - r \\times I^2$. Le produit $e \\times I$ est la puissance engendrée par le générateur, notée Pe, qui résulte des transformations chimiques ; $U_{PN} \\times I$ est la puissance disponible à la sortie, notée Pd ; et $r \\times I^2$ est la puissance Joule dissipée dans la résistance interne du générateur.",
      "keyRule": "Générateur : Pe = e × I (engendrée) ; Pd = UPN × I (disponible) ; la différence r × I² est perdue par effet Joule.",
      "formulas": [
        {
          "name": "Loi d'Ohm pour un générateur",
          "formula": "U_{PN} = e - r \\times I",
          "note": "e : force électromotrice en volts ; r : résistance interne en ohms."
        },
        {
          "name": "Bilan de puissance du générateur",
          "formula": "P_d = U_{PN} \\times I = e \\times I - r \\times I^2",
          "note": "Pd : puissance disponible ; e × I : puissance engendrée ; r × I² : puissance Joule interne."
        }
      ],
      "workedExample": {
        "title": "L'exercice 3 : identifier un dipôle à sa caractéristique",
        "statement": "La caractéristique d'un dipôle a pour équation UPN = −0,01 × I + 2. Donne la nature du dipôle, sa tension à vide et sa résistance interne.",
        "methodSteps": [
          "L'équation est de la forme UAB = E − r × I : c'est la loi d'Ohm d'un générateur.",
          "Par identification, le terme constant donne la force électromotrice : E = 2 V, qui est aussi la tension à vide.",
          "Le coefficient de I donne la résistance interne : r = 0,01 Ω."
        ],
        "conclusion": "Le dipôle est un générateur de force électromotrice 2 V et de résistance interne 0,01 Ω (solution de l'exercice 3)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La loi d'Ohm pour un générateur : UPN = e − rI",
          "stepTheme": "La loi d'Ohm pour un générateur : UPN = e − rI",
          "stepBadge": "La loi d'Ohm pour un générateur : UPN = e − rI",
          "paragraphText": "Le schéma équivalent série d'un générateur associe sa force électromotrice e et sa résistance interne r en série.\nLa tension à ses bornes vaut alors $U_{PN} = e - r \\times I$ : elle diminue quand l'intensité débitée augmente.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p02_q1",
            "type": "mcq",
            "prompt": "La loi d'Ohm pour un générateur de force électromotrice e et de résistance interne r s'écrit :",
            "options": [
              "$U_{PN} = e - r \\times I$",
              "$U_{PN} = e + r \\times I$",
              "$U_{PN} = r \\times I$ uniquement",
              "$U_{PN} = \\frac{e}{r \\times I}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le schéma équivalent série du §2.1 : U = e − r × I."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La puissance engendrée Pe = e × I",
          "stepTheme": "La puissance engendrée Pe = e × I",
          "stepBadge": "La puissance engendrée Pe = e × I",
          "paragraphText": "• Puissance engendrée : le produit $e \\times I$, noté Pe.\nLe résumé précise qu'elle résulte des transformations chimiques qui ont lieu dans le générateur.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p02_q2",
            "type": "mcq",
            "prompt": "La puissance engendrée par un générateur est :",
            "options": [
              "$P_e = r \\times I^2$",
              "$P_e = U_{PN} \\times I$",
              "$P_e = e \\times I$",
              "$P_e = \\frac{e}{I}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le bilan du §2.3 : Pe = e × I, issue des transformations chimiques dans le générateur."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La puissance disponible Pd = UPN × I",
          "stepTheme": "La puissance disponible Pd = UPN × I",
          "stepBadge": "La puissance disponible Pd = UPN × I",
          "paragraphText": "Les électrons sortent du générateur avec la puissance électrique $P = U_{PN} \\times I$.\nC'est la puissance disponible à la sortie du générateur, notée Pd : c'est elle que le circuit extérieur peut utiliser.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p02_q3",
            "type": "mcq",
            "prompt": "La puissance disponible à la sortie d'un générateur est :",
            "options": [
              "$P_d = e \\times I$",
              "$P_d = U_{PN} \\times I$",
              "$P_d = r \\times I^2$",
              "$P_d = e - r \\times I$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le §2.3 note Pd = UPN × I : la puissance que le générateur met à disposition du circuit."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Le terme r × I² : la perte Joule interne",
          "stepTheme": "Le terme r × I² : la perte Joule interne",
          "stepBadge": "Le terme r × I² : la perte Joule interne",
          "paragraphText": "Dans le bilan $P = e \\times I - r \\times I^2$, le terme $r \\times I^2$ est la puissance Joule dissipée dans la résistance interne du générateur.\nPiège : la puissance disponible est donc toujours inférieure à la puissance engendrée, sauf si r est négligeable.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p02_q4",
            "type": "mcq",
            "prompt": "Dans le bilan de puissance d'un générateur, le terme r × I² représente :",
            "options": [
              "La puissance utile du circuit extérieur",
              "La puissance engendrée",
              "La puissance disponible",
              "La puissance Joule dissipée dans la résistance interne du générateur"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le troisième point du bilan du §2.3 : r × I² est perdu par effet Joule dans le générateur lui-même."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Reconnaître un générateur (exercice 3)",
          "stepTheme": "Reconnaître un générateur (exercice 3)",
          "stepBadge": "Reconnaître un générateur (exercice 3)",
          "paragraphText": "L'équation UPN = −0,01 × I + 2 a la forme d'une droite décroissante en fonction de I.\nLa solution de l'exercice 3 la reconnaît comme la caractéristique d'un générateur, de la forme UAB = E − r × I.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p02_q5",
            "type": "mcq",
            "prompt": "Le dipôle de caractéristique UPN = −0,01 × I + 2 (exercice 3) est :",
            "options": [
              "Un générateur",
              "Un électrolyseur",
              "Un conducteur ohmique",
              "Un moteur bloqué"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La forme U = E − rI est celle d'un générateur (solution de l'exercice 3) ; un récepteur aurait la forme U = E' + r'I, croissante."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Lire E et r par identification (exercice 3)",
          "stepTheme": "Lire E et r par identification (exercice 3)",
          "stepBadge": "Lire E et r par identification (exercice 3)",
          "paragraphText": "Méthode de l'exercice 3 : identifier terme à terme l'équation donnée avec U = E − r × I.\nLe terme constant donne la force électromotrice (la tension à vide, pour I = 0) et le coefficient de I donne la résistance interne.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p02_q6",
            "type": "mcq",
            "prompt": "Pour le dipôle de l'exercice 3, la force électromotrice et la résistance interne valent :",
            "options": [
              "E = 0,01 V et r = 2 Ω",
              "E = 2 V et r = 0,01 Ω",
              "E = 2 V et r = 2 Ω",
              "E = −0,01 V et r = 2 Ω"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par identification avec U = E − rI : E = 2 V et r = 0,01 Ω (solution de l'exercice 3)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p02_q1",
          "type": "mcq",
          "prompt": "La loi d'Ohm pour un générateur de force électromotrice e et de résistance interne r s'écrit :",
          "options": [
            "$U_{PN} = e - r \\times I$",
            "$U_{PN} = e + r \\times I$",
            "$U_{PN} = r \\times I$ uniquement",
            "$U_{PN} = \\frac{e}{r \\times I}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le schéma équivalent série du §2.1 : U = e − r × I."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p02_q2",
          "type": "mcq",
          "prompt": "La puissance engendrée par un générateur est :",
          "options": [
            "$P_e = r \\times I^2$",
            "$P_e = U_{PN} \\times I$",
            "$P_e = e \\times I$",
            "$P_e = \\frac{e}{I}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le bilan du §2.3 : Pe = e × I, issue des transformations chimiques dans le générateur."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p02_q3",
          "type": "mcq",
          "prompt": "La puissance disponible à la sortie d'un générateur est :",
          "options": [
            "$P_d = e \\times I$",
            "$P_d = U_{PN} \\times I$",
            "$P_d = r \\times I^2$",
            "$P_d = e - r \\times I$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le §2.3 note Pd = UPN × I : la puissance que le générateur met à disposition du circuit."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p02_q4",
          "type": "mcq",
          "prompt": "Dans le bilan de puissance d'un générateur, le terme r × I² représente :",
          "options": [
            "La puissance utile du circuit extérieur",
            "La puissance engendrée",
            "La puissance disponible",
            "La puissance Joule dissipée dans la résistance interne du générateur"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le troisième point du bilan du §2.3 : r × I² est perdu par effet Joule dans le générateur lui-même."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p02_q5",
          "type": "mcq",
          "prompt": "Le dipôle de caractéristique UPN = −0,01 × I + 2 (exercice 3) est :",
          "options": [
            "Un générateur",
            "Un électrolyseur",
            "Un conducteur ohmique",
            "Un moteur bloqué"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La forme U = E − rI est celle d'un générateur (solution de l'exercice 3) ; un récepteur aurait la forme U = E' + r'I, croissante."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p02_q6",
          "type": "mcq",
          "prompt": "Pour le dipôle de l'exercice 3, la force électromotrice et la résistance interne valent :",
          "options": [
            "E = 0,01 V et r = 2 Ω",
            "E = 2 V et r = 0,01 Ω",
            "E = 2 V et r = 2 Ω",
            "E = −0,01 V et r = 2 Ω"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par identification avec U = E − rI : E = 2 V et r = 0,01 Ω (solution de l'exercice 3)."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l03_puissance_energie_electrique_p03",
      "order": 3,
      "title": "L'électrolyseur : loi d'Ohm et bilan énergétique d'un récepteur",
      "summary": "Pour un électrolyseur, U = E' + r' × I ; l'énergie reçue se partage entre l'énergie utile E' × I × Δt et la chaleur r' × I² × Δt.",
      "conceptExplanation": "Le montage potentiométrique permet de mesurer la tension aux bornes d'un électrolyseur en fonction de l'intensité qui le traverse.\nPour I différent de 0, la caractéristique est une droite d'équation $U_{AB} = a \\times I + b$ : la pente a est la résistance interne r' de l'électrolyseur et l'ordonnée à l'origine b est sa force contre électromotrice (f.c.é.m.), notée E'.\nLa loi d'Ohm pour un électrolyseur (récepteur) s'écrit donc : $U = E' + r' \\times I$.\nL'énergie électrique reçue s'écrit $E_r = (E' \\times I + r' \\times I^2) \\times \\Delta t = E_u + E_{th}$, où $E_u = E' \\times I \\times \\Delta t$ est l'énergie utile et $E_{th} = r' \\times I^2 \\times \\Delta t$ l'énergie thermique.\nLe moteur électrique est un autre récepteur qui a la même caractéristique que l'électrolyseur.",
      "keyRule": "Récepteur actif : U = E' + r'I ; l'énergie reçue = énergie utile (E'IΔt) + chaleur (r'I²Δt).",
      "formulas": [
        {
          "name": "Loi d'Ohm pour un électrolyseur",
          "formula": "U = E' + r' \\times I",
          "note": "E' : force contre électromotrice en volts ; r' : résistance interne en ohms."
        },
        {
          "name": "Énergie reçue par un électrolyseur",
          "formula": "E_r = E' \\times I \\times \\Delta t + r' \\times I^2 \\times \\Delta t",
          "note": "Premier terme : énergie utile ; second terme : énergie thermique (effet Joule)."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application : rendement et énergie d'un récepteur",
        "statement": "Un récepteur de force contre électromotrice E' = 6 V et de résistance interne r' = 2 Ω est parcouru par un courant d'intensité I = 0,5 A pendant une durée t = 30 s. Détermine le rendement du récepteur, puis l'énergie électrique qu'il reçoit.",
        "methodSteps": [
          "La tension aux bornes du récepteur vaut U = E' + r' × I = 6 + 2 × 0,5 = 7 V.",
          "Le rendement vaut η = E' divisé par U, soit 6 divisé par 7 : η = 0,86, c'est-à-dire 86 %.",
          "L'énergie reçue vaut Er = U × I × t = 7 × 0,5 × 30 = 105 J."
        ],
        "conclusion": "Le rendement vaut 86 % et l'énergie reçue 105 J pendant les 30 s de fonctionnement."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La loi d'Ohm pour un électrolyseur : U = E' + r'I",
          "stepTheme": "La loi d'Ohm pour un électrolyseur : U = E' + r'I",
          "stepBadge": "La loi d'Ohm pour un électrolyseur : U = E' + r'I",
          "paragraphText": "La conclusion du §3.1 : la loi d'Ohm pour un électrolyseur (récepteur) s'écrit $U = E' + r' \\times I$.\nContrairement au générateur, le terme en I s'ajoute : la tension aux bornes croît avec l'intensité.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p03_q1",
            "type": "mcq",
            "prompt": "La loi d'Ohm pour un électrolyseur s'écrit :",
            "options": [
              "$U = E' - r' \\times I$",
              "$U = E' + r' \\times I$",
              "$U = r' \\times I$ uniquement",
              "$U = \\frac{E'}{r' \\times I}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la conclusion du §3.1 du résumé : U = E' + r'I pour un récepteur actif."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Pente et ordonnée à l'origine de la caractéristique",
          "stepTheme": "Pente et ordonnée à l'origine de la caractéristique",
          "stepBadge": "Pente et ordonnée à l'origine de la caractéristique",
          "paragraphText": "Pour I différent de 0, la caractéristique UAB = f(I) est une droite d'équation de la forme UAB = a × I + b.\nLe résumé identifie : a, la pente de la droite, est la résistance interne r' ; b, l'ordonnée à l'origine (pour I = 0), est la force contre électromotrice E'.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p03_q2",
            "type": "mcq",
            "prompt": "Dans la caractéristique d'un électrolyseur, l'ordonnée à l'origine de la droite représente :",
            "options": [
              "La résistance interne r'",
              "La force contre électromotrice E'",
              "La puissance utile",
              "L'intensité de court-circuit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le §3.1 identifie b, l'ordonnée à l'origine, à la force contre électromotrice E' ; la pente donne r'."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'énergie utile Eu = E' × I × Δt",
          "stepTheme": "L'énergie utile Eu = E' × I × Δt",
          "stepBadge": "L'énergie utile Eu = E' × I × Δt",
          "paragraphText": "Dans le bilan de l'électrolyseur, l'énergie utile est la part de l'énergie reçue qui correspond à la force contre électromotrice : $E_u = E' \\times I \\times \\Delta t$.\nC'est elle qui produit le travail chimique de l'électrolyse (ou le travail mécanique pour un moteur).",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p03_q3",
            "type": "mcq",
            "prompt": "L'énergie utile reçue par un électrolyseur pendant la durée Δt vaut :",
            "options": [
              "$E_u = r' \\times I^2 \\times \\Delta t$",
              "$E_u = U \\times I \\times \\Delta t$",
              "$E_u = E' \\times I \\times \\Delta t$",
              "$E_u = E' + r' \\times I$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le premier terme du bilan du §3.2 : Eu = E' × I × Δt."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'énergie thermique Eth = r' × I² × Δt",
          "stepTheme": "L'énergie thermique Eth = r' × I² × Δt",
          "stepBadge": "L'énergie thermique Eth = r' × I² × Δt",
          "paragraphText": "Le second terme du bilan est l'énergie thermique : $E_{th} = r' \\times I^2 \\times \\Delta t$.\nElle correspond aux pertes par effet Joule dans la résistance interne du récepteur : l'énergie reçue est la somme Er = Eu + Eth.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p03_q4",
            "type": "mcq",
            "prompt": "L'énergie thermique dissipée dans un électrolyseur pendant la durée Δt vaut :",
            "options": [
              "$E_{th} = E' \\times I \\times \\Delta t$",
              "$E_{th} = r' \\times I^2 \\times \\Delta t$",
              "$E_{th} = U \\times \\Delta t$",
              "$E_{th} = 0$ dans un électrolyseur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le second terme du bilan du §3.2 : Eth = r' × I² × Δt, perdu par effet Joule."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le rendement de l'activité : 86 %",
          "stepTheme": "Le rendement de l'activité : 86 %",
          "stepBadge": "Le rendement de l'activité : 86 %",
          "paragraphText": "Pour le récepteur de l'activité (E' = 6 V, r' = 2 Ω, I = 0,5 A), la tension vaut U = 6 + 2 × 0,5 = 7 V.\nLe corrigé calcule le rendement comme le quotient de E' par U et obtient 0,86, soit 86 %.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p03_q5",
            "type": "mcq",
            "prompt": "Le rendement du récepteur de l'activité (E' = 6 V, r' = 2 Ω, I = 0,5 A) vaut :",
            "options": [
              "86 %",
              "50 %",
              "100 %",
              "14 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "η = E' divisé par (E' + r'I) = 6 divisé par 7 = 0,86, soit 86 % (corrigé de l'activité)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L'énergie reçue fait intervenir la durée",
          "stepTheme": "L'énergie reçue fait intervenir la durée",
          "stepBadge": "L'énergie reçue fait intervenir la durée",
          "paragraphText": "Piège : (E' + r'I) × I donne une puissance, en watts, et non une énergie.\nPour l'activité, la puissance reçue vaut 3,5 W ; il faut encore multiplier par la durée de 30 s pour obtenir l'énergie reçue, soit 105 J.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p03_q6",
            "type": "mcq",
            "prompt": "L'énergie électrique reçue par le récepteur de l'activité pendant 30 s vaut :",
            "options": [
              "3,5 J",
              "7 J",
              "105 J",
              "210 J"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Er = (E' + r'I) × I × t = 7 × 0,5 × 30 = 105 J ; 3,5 W est la puissance reçue, pas l'énergie."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p03_q1",
          "type": "mcq",
          "prompt": "La loi d'Ohm pour un électrolyseur s'écrit :",
          "options": [
            "$U = E' - r' \\times I$",
            "$U = E' + r' \\times I$",
            "$U = r' \\times I$ uniquement",
            "$U = \\frac{E'}{r' \\times I}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la conclusion du §3.1 du résumé : U = E' + r'I pour un récepteur actif."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p03_q2",
          "type": "mcq",
          "prompt": "Dans la caractéristique d'un électrolyseur, l'ordonnée à l'origine de la droite représente :",
          "options": [
            "La résistance interne r'",
            "La force contre électromotrice E'",
            "La puissance utile",
            "L'intensité de court-circuit"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le §3.1 identifie b, l'ordonnée à l'origine, à la force contre électromotrice E' ; la pente donne r'."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p03_q3",
          "type": "mcq",
          "prompt": "L'énergie utile reçue par un électrolyseur pendant la durée Δt vaut :",
          "options": [
            "$E_u = r' \\times I^2 \\times \\Delta t$",
            "$E_u = U \\times I \\times \\Delta t$",
            "$E_u = E' \\times I \\times \\Delta t$",
            "$E_u = E' + r' \\times I$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le premier terme du bilan du §3.2 : Eu = E' × I × Δt."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p03_q4",
          "type": "mcq",
          "prompt": "L'énergie thermique dissipée dans un électrolyseur pendant la durée Δt vaut :",
          "options": [
            "$E_{th} = E' \\times I \\times \\Delta t$",
            "$E_{th} = r' \\times I^2 \\times \\Delta t$",
            "$E_{th} = U \\times \\Delta t$",
            "$E_{th} = 0$ dans un électrolyseur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le second terme du bilan du §3.2 : Eth = r' × I² × Δt, perdu par effet Joule."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p03_q5",
          "type": "mcq",
          "prompt": "Le rendement du récepteur de l'activité (E' = 6 V, r' = 2 Ω, I = 0,5 A) vaut :",
          "options": [
            "86 %",
            "50 %",
            "100 %",
            "14 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "η = E' divisé par (E' + r'I) = 6 divisé par 7 = 0,86, soit 86 % (corrigé de l'activité)."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p03_q6",
          "type": "mcq",
          "prompt": "L'énergie électrique reçue par le récepteur de l'activité pendant 30 s vaut :",
          "options": [
            "3,5 J",
            "7 J",
            "105 J",
            "210 J"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Er = (E' + r'I) × I × t = 7 × 0,5 × 30 = 105 J ; 3,5 W est la puissance reçue, pas l'énergie."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l03_puissance_energie_electrique_p04",
      "order": 4,
      "title": "La loi de Pouillet dans un circuit série",
      "summary": "Dans un circuit série, l'intensité vaut I = (ΣE − ΣE') divisé par ΣR : c'est la loi de Pouillet.",
      "conceptExplanation": "Considérons un circuit série comprenant un générateur (E, r), un récepteur (E', r') et un conducteur ohmique R.\nLa loi des mailles donne : RI + E' + r'I − (E − rI) = 0, c'est-à-dire E − E' = (R + r + r') × I.\nOn en tire l'intensité du circuit : $I = \\frac{E - E'}{R + r + r'}$.\nSous sa forme générale, la loi de Pouillet s'écrit $I = \\frac{\\sum E - \\sum E'}{\\sum R}$ : au numérateur, la différence entre les forces électromotrices et les forces contre électromotrices ; au dénominateur, la somme de toutes les résistances du circuit.",
      "keyRule": "Loi de Pouillet : I = (ΣE − ΣE') / ΣR — une seule maille, une seule intensité.",
      "formulas": [
        {
          "name": "Loi de Pouillet (générateur et récepteur)",
          "formula": "I = \\frac{E - E'}{R + r + r'}",
          "note": "Circuit série avec un générateur (E, r), un récepteur (E', r') et un résistor R."
        },
        {
          "name": "Loi de Pouillet (forme générale)",
          "formula": "I = \\frac{\\sum E - \\sum E'}{\\sum R}",
          "note": "Sommes sur toutes les forces (contre) électromotrices et toutes les résistances de la maille."
        }
      ],
      "workedExample": {
        "title": "L'exercice 5 : deux générateurs en opposition",
        "statement": "Deux générateurs (e1 = 7 V, r1 = 2 Ω et e2 = 10 V, r2 = 0,5 Ω) sont montés en opposition, en série avec un électrolyseur (e' = 1,5 V, r' = 2 Ω) et un conducteur ohmique R = 10 Ω. Calcule l'intensité du courant, la puissance engendrée et la puissance utile du circuit, puis son rendement.",
        "methodSteps": [
          "La loi de Pouillet donne I = (e2 − e1 − e') divisé par (R + r1 + r2 + r'), soit environ 0,1 A.",
          "La puissance engendrée est Pe = e2 × I = 1 W : le générateur réel du circuit est celui de plus grande force électromotrice, e2.",
          "La puissance utile vaut Pu = (e1 + e') × I = 0,85 W, d'où un rendement de 0,85, soit 85 %."
        ],
        "conclusion": "I ≈ 0,1 A, Pe = 1 W, Pu = 0,85 W et rendement 85 % : ce sont les résultats de la solution de l'exercice 5."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'énoncé de la loi de Pouillet",
          "stepTheme": "L'énoncé de la loi de Pouillet",
          "stepBadge": "L'énoncé de la loi de Pouillet",
          "paragraphText": "• Loi de Pouillet : dans un circuit série formant une seule maille, l'intensité est le quotient de (ΣE − ΣE') par la somme de toutes les résistances.\nElle se déduit directement de la loi des mailles appliquée au circuit.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p04_q1",
            "type": "mcq",
            "prompt": "La loi de Pouillet donne l'intensité d'un circuit série par :",
            "options": [
              "$I = \\frac{\\sum E - \\sum E'}{\\sum R}$",
              "$I = \\frac{\\sum R}{\\sum E}$",
              "$I = \\sum E \\times \\sum R$",
              "$I = \\frac{\\sum E + \\sum E'}{\\sum R}$ dans tous les cas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la forme générale écrite au §4 du résumé : I = (ΣE − ΣE') divisé par ΣR."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le cas d'un générateur et d'un récepteur",
          "stepTheme": "Le cas d'un générateur et d'un récepteur",
          "stepBadge": "Le cas d'un générateur et d'un récepteur",
          "paragraphText": "Pour un générateur (E, r), un récepteur (E', r') et un résistor R en série, la loi des mailles conduit à E − E' = (R + r + r') × I.\nLe dénominateur contient donc toutes les résistances de la maille, y compris les résistances internes.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p04_q2",
            "type": "mcq",
            "prompt": "Pour un générateur (E, r), un récepteur (E', r') et un résistor R en série, l'intensité vaut :",
            "options": [
              "$I = \\frac{E}{R}$",
              "$I = \\frac{E - E'}{R + r + r'}$",
              "$I = \\frac{E + E'}{R}$",
              "$I = \\frac{E - E'}{R}$ sans les résistances internes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la loi de Pouillet du §4, obtenue à partir de la loi des mailles."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le calcul de l'exercice 5 : I ≈ 0,1 A",
          "stepTheme": "Le calcul de l'exercice 5 : I ≈ 0,1 A",
          "stepBadge": "Le calcul de l'exercice 5 : I ≈ 0,1 A",
          "paragraphText": "Dans l'exercice 5, le numérateur vaut e2 − e1 − e' = 10 − 7 − 1,5 = 1,5 V.\nLe dénominateur est la somme des quatre résistances : 10 + 2 + 0,5 + 2. La solution obtient une intensité d'environ 0,1 A.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p04_q3",
            "type": "mcq",
            "prompt": "L'intensité du courant dans le circuit de l'exercice 5 vaut environ :",
            "options": [
              "1 A",
              "0,5 A",
              "0,1 A",
              "1,5 A"
            ],
            "correctAnswerIndex": 2,
            "explanation": "I = 1,5 divisé par 14,5, soit environ 0,1 A (solution de l'exercice 5)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "En opposition, la plus grande f.é.m. commande",
          "stepTheme": "En opposition, la plus grande f.é.m. commande",
          "stepBadge": "En opposition, la plus grande f.é.m. commande",
          "paragraphText": "La solution de l'exercice 5 le rappelle : lorsque deux piles sont montées en opposition, celle qui a la plus grande force électromotrice est le générateur.\nL'autre pile se comporte alors comme un récepteur, et sa force électromotrice vient en déduction au numérateur de la loi de Pouillet.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p04_q4",
            "type": "mcq",
            "prompt": "Lorsque deux générateurs sont montés en opposition, le rôle de générateur revient :",
            "options": [
              "À celui de plus faible force électromotrice",
              "Aux deux en même temps",
              "À celui de plus grande résistance interne",
              "À celui de plus grande force électromotrice, l'autre devenant un récepteur"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la remarque de la solution de l'exercice 5 : la plus grande f.é.m. (ici e2 = 10 V) est le générateur du circuit."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La puissance engendrée du circuit de l'exercice 5",
          "stepTheme": "La puissance engendrée du circuit de l'exercice 5",
          "stepBadge": "La puissance engendrée du circuit de l'exercice 5",
          "paragraphText": "La puissance engendrée du circuit est celle du générateur réel, la pile de force électromotrice e2 = 10 V.\nAvec I ≈ 0,1 A, la solution calcule Pe = e2 × I = 1 W.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p04_q5",
            "type": "mcq",
            "prompt": "La puissance engendrée dans le circuit de l'exercice 5 vaut :",
            "options": [
              "1 W",
              "0,85 W",
              "10 W",
              "0,15 W"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pe = e2 × I = 10 × 0,1 = 1 W (solution de l'exercice 5)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La puissance utile du circuit de l'exercice 5",
          "stepTheme": "La puissance utile du circuit de l'exercice 5",
          "stepBadge": "La puissance utile du circuit de l'exercice 5",
          "paragraphText": "La puissance utile du circuit rassemble les puissances utiles des récepteurs : la pile e1 montée en opposition et l'électrolyseur de force contre électromotrice e'.\nLa solution calcule Pu = (e1 + e') × I = 0,85 W, d'où le rendement du circuit.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p04_q6",
            "type": "mcq",
            "prompt": "La puissance utile du circuit de l'exercice 5 vaut :",
            "options": [
              "1 W",
              "0,85 W",
              "0,70 W",
              "8,5 W"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pu = (e1 + e') × I = (7 + 1,5) × 0,1 = 0,85 W (solution de l'exercice 5)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p04_q1",
          "type": "mcq",
          "prompt": "La loi de Pouillet donne l'intensité d'un circuit série par :",
          "options": [
            "$I = \\frac{\\sum E - \\sum E'}{\\sum R}$",
            "$I = \\frac{\\sum R}{\\sum E}$",
            "$I = \\sum E \\times \\sum R$",
            "$I = \\frac{\\sum E + \\sum E'}{\\sum R}$ dans tous les cas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la forme générale écrite au §4 du résumé : I = (ΣE − ΣE') divisé par ΣR."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p04_q2",
          "type": "mcq",
          "prompt": "Pour un générateur (E, r), un récepteur (E', r') et un résistor R en série, l'intensité vaut :",
          "options": [
            "$I = \\frac{E}{R}$",
            "$I = \\frac{E - E'}{R + r + r'}$",
            "$I = \\frac{E + E'}{R}$",
            "$I = \\frac{E - E'}{R}$ sans les résistances internes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la loi de Pouillet du §4, obtenue à partir de la loi des mailles."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p04_q3",
          "type": "mcq",
          "prompt": "L'intensité du courant dans le circuit de l'exercice 5 vaut environ :",
          "options": [
            "1 A",
            "0,5 A",
            "0,1 A",
            "1,5 A"
          ],
          "correctAnswerIndex": 2,
          "explanation": "I = 1,5 divisé par 14,5, soit environ 0,1 A (solution de l'exercice 5)."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p04_q4",
          "type": "mcq",
          "prompt": "Lorsque deux générateurs sont montés en opposition, le rôle de générateur revient :",
          "options": [
            "À celui de plus faible force électromotrice",
            "Aux deux en même temps",
            "À celui de plus grande résistance interne",
            "À celui de plus grande force électromotrice, l'autre devenant un récepteur"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la remarque de la solution de l'exercice 5 : la plus grande f.é.m. (ici e2 = 10 V) est le générateur du circuit."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p04_q5",
          "type": "mcq",
          "prompt": "La puissance engendrée dans le circuit de l'exercice 5 vaut :",
          "options": [
            "1 W",
            "0,85 W",
            "10 W",
            "0,15 W"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pe = e2 × I = 10 × 0,1 = 1 W (solution de l'exercice 5)."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p04_q6",
          "type": "mcq",
          "prompt": "La puissance utile du circuit de l'exercice 5 vaut :",
          "options": [
            "1 W",
            "0,85 W",
            "0,70 W",
            "8,5 W"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pu = (e1 + e') × I = (7 + 1,5) × 0,1 = 0,85 W (solution de l'exercice 5)."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l03_puissance_energie_electrique_p05",
      "order": 5,
      "title": "Le rendement électrique",
      "summary": "Le rendement est le quotient de la puissance utile par la puissance reçue (ou engendrée) ; il est toujours inférieur à 1.",
      "conceptExplanation": "Pour un électrolyseur (ou un récepteur), le rendement est $\\eta = \\frac{P_u}{P_r} = \\frac{E'}{U} = \\frac{E'}{E' + r'I}$, toujours inférieur à 1.\nPour un générateur, le rendement est $\\eta = \\frac{P_f}{P_e} = \\frac{U_{PN}}{E} = \\frac{E - rI}{E} = 1 - \\frac{rI}{E}$, également inférieur à 1.\nDans la situation d'évaluation, un générateur (E = 120 V, r négligeable) alimente, à travers R0 = 25 Ω, différents dipôles montés entre A et B : la première expérience (deux résistors en parallèle) donne une intensité principale de 3 A, et la deuxième (un moteur de force contre électromotrice 100 V) donne un rendement du moteur de 93,02 %.",
      "keyRule": "Rendement = puissance utile divisée par puissance totale : toujours inférieur à 1, à cause des pertes Joule.",
      "formulas": [
        {
          "name": "Rendement d'un récepteur",
          "formula": "\\eta = \\frac{E'}{U} = \\frac{E'}{E' + r'I}",
          "note": "Rapport de la puissance utile à la puissance reçue ; inférieur à 1."
        },
        {
          "name": "Rendement d'un générateur",
          "formula": "\\eta = \\frac{U_{PN}}{E} = 1 - \\frac{rI}{E}",
          "note": "Rapport de la puissance fournie à la puissance engendrée ; inférieur à 1."
        }
      ],
      "workedExample": {
        "title": "La situation d'évaluation : le moteur alimenté par le générateur de 120 V",
        "statement": "Le dipôle X entre A et B est un moteur de force contre électromotrice E' = 100 V et de résistance interne r' = 15 Ω, alimenté par le générateur (E = 120 V, r négligeable) à travers R0 = 25 Ω. Détermine l'intensité du circuit, la tension aux bornes du moteur et le rendement du moteur.",
        "methodSteps": [
          "La loi de Pouillet donne I = (E − E') divisé par (R0 + r'), soit 20 divisé par 40 : I = 0,5 A.",
          "La tension aux bornes du moteur vaut UAB = E' + r' × I = 100 + 15 × 0,5 = 107,5 V.",
          "Le rendement du moteur vaut η = E' divisé par UAB, soit environ 93,02 %."
        ],
        "conclusion": "I = 0,5 A, UAB = 107,5 V et rendement du moteur 93,02 % : ce sont les résultats du corrigé de la situation d'évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le rendement d'un récepteur : η = E' divisé par U",
          "stepTheme": "Le rendement d'un récepteur : η = E' divisé par U",
          "stepBadge": "Le rendement d'un récepteur : η = E' divisé par U",
          "paragraphText": "• Rendement d'un récepteur : quotient de la puissance utile par la puissance reçue, $\\eta = \\frac{P_u}{P_r}$.\nPour l'électrolyseur, les intensités se simplifient et il reste $\\eta = \\frac{E'}{U} = \\frac{E'}{E' + r'I}$, toujours inférieur à 1.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p05_q1",
            "type": "mcq",
            "prompt": "Le rendement électrique d'un électrolyseur s'écrit :",
            "options": [
              "$\\eta = \\frac{E'}{E' + r'I}$",
              "$\\eta = \\frac{U}{E'}$",
              "$\\eta = E' + r'I$",
              "$\\eta = \\frac{r'I}{E'}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le §5.1 du résumé : η = Pu divisé par Pr = E' divisé par U, avec U = E' + r'I."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le rendement d'un générateur : η = UPN divisé par E",
          "stepTheme": "Le rendement d'un générateur : η = UPN divisé par E",
          "stepBadge": "Le rendement d'un générateur : η = UPN divisé par E",
          "paragraphText": "Pour le générateur, le rendement est le quotient de la puissance fournie par la puissance engendrée : $\\eta = \\frac{U_{PN}}{E} = \\frac{E - rI}{E}$.\nIl se réécrit $\\eta = 1 - \\frac{rI}{E}$ : la perte relative vient de la résistance interne.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p05_q2",
            "type": "mcq",
            "prompt": "Le rendement d'un générateur s'écrit :",
            "options": [
              "$\\eta = \\frac{E}{U_{PN}}$",
              "$\\eta = 1 - \\frac{rI}{E}$",
              "$\\eta = \\frac{rI}{E}$",
              "$\\eta = E - rI$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le second cas du §5 du résumé : η = UPN divisé par E = 1 − rI divisé par E, inférieur à 1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La première expérience : la résistance équivalente vaut 15 Ω",
          "stepTheme": "La première expérience : la résistance équivalente vaut 15 Ω",
          "stepBadge": "La première expérience : la résistance équivalente vaut 15 Ω",
          "paragraphText": "Dans la première expérience de la situation, le dipôle X est l'association en parallèle de deux conducteurs ohmiques R1 = 40 Ω et R2 = 24 Ω.\nLe corrigé remplace ce dipôle par un résistor unique dont la résistance est le produit des deux, divisé par leur somme.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p05_q3",
            "type": "mcq",
            "prompt": "La résistance équivalente aux deux résistors en parallèle (40 Ω et 24 Ω) de la situation vaut :",
            "options": [
              "64 Ω",
              "32 Ω",
              "15 Ω",
              "9,6 Ω"
            ],
            "correctAnswerIndex": 2,
            "explanation": "R = (40 × 24) divisé par (40 + 24) = 960 divisé par 64 = 15 Ω (corrigé de la situation d'évaluation)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "L'intensité principale de la première expérience : 3 A",
          "stepTheme": "L'intensité principale de la première expérience : 3 A",
          "stepBadge": "L'intensité principale de la première expérience : 3 A",
          "paragraphText": "Le circuit principal contient le générateur (E = 120 V, r négligeable), le résistor R0 = 25 Ω et la résistance équivalente de 15 Ω.\nLe corrigé applique la loi de Pouillet à cette maille unique et obtient l'intensité principale.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p05_q4",
            "type": "mcq",
            "prompt": "L'intensité du courant dans le circuit principal de la première expérience vaut :",
            "options": [
              "4,8 A",
              "8 A",
              "1,2 A",
              "3 A"
            ],
            "correctAnswerIndex": 3,
            "explanation": "I = E divisé par (R0 + R) = 120 divisé par 40 = 3 A (corrigé de la situation d'évaluation)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le rendement du moteur de la situation : 93,02 %",
          "stepTheme": "Le rendement du moteur de la situation : 93,02 %",
          "stepBadge": "Le rendement du moteur de la situation : 93,02 %",
          "paragraphText": "Pour le moteur de la deuxième expérience, la tension à ses bornes vaut UAB = 107,5 V et sa force contre électromotrice E' = 100 V.\nLe corrigé calcule son rendement par le quotient de E' par UAB ; le rendement du circuit entier, lui, vaut E' divisé par E, soit 0,83.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p05_q5",
            "type": "mcq",
            "prompt": "Le rendement du moteur de la deuxième expérience de la situation vaut :",
            "options": [
              "93,02 %",
              "83 %",
              "100 %",
              "50 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "η = E' divisé par UAB = 100 divisé par 107,5, soit 93,02 % (corrigé de la situation) ; 83 % est le rendement du circuit entier."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le moteur bloqué : un cas limite",
          "stepTheme": "Le moteur bloqué : un cas limite",
          "stepBadge": "Le moteur bloqué : un cas limite",
          "paragraphText": "Dernière question de la deuxième expérience : si le moteur est bloqué, il ne tourne plus et sa force contre électromotrice devient nulle.\nLe corrigé calcule alors l'intensité avec la seule résistance du circuit : elle devient beaucoup plus forte que les 0,5 A du fonctionnement normal, ce qui explique le danger d'un moteur bloqué.",
          "exercise": {
            "id": "premiere_c_physique_l03_puissance_energie_electrique_p05_q6",
            "type": "mcq",
            "prompt": "L'intensité du courant lorsque le moteur de la situation est bloqué (E' = 0) vaut :",
            "options": [
              "0,5 A",
              "3 A",
              "0 A",
              "8 A"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec E' = 0, la loi de Pouillet donne I = E divisé par (R0 + r') = 120 divisé par 40 = 3 A (corrigé de la situation)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p05_q1",
          "type": "mcq",
          "prompt": "Le rendement électrique d'un électrolyseur s'écrit :",
          "options": [
            "$\\eta = \\frac{E'}{E' + r'I}$",
            "$\\eta = \\frac{U}{E'}$",
            "$\\eta = E' + r'I$",
            "$\\eta = \\frac{r'I}{E'}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le §5.1 du résumé : η = Pu divisé par Pr = E' divisé par U, avec U = E' + r'I."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p05_q2",
          "type": "mcq",
          "prompt": "Le rendement d'un générateur s'écrit :",
          "options": [
            "$\\eta = \\frac{E}{U_{PN}}$",
            "$\\eta = 1 - \\frac{rI}{E}$",
            "$\\eta = \\frac{rI}{E}$",
            "$\\eta = E - rI$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le second cas du §5 du résumé : η = UPN divisé par E = 1 − rI divisé par E, inférieur à 1."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p05_q3",
          "type": "mcq",
          "prompt": "La résistance équivalente aux deux résistors en parallèle (40 Ω et 24 Ω) de la situation vaut :",
          "options": [
            "64 Ω",
            "32 Ω",
            "15 Ω",
            "9,6 Ω"
          ],
          "correctAnswerIndex": 2,
          "explanation": "R = (40 × 24) divisé par (40 + 24) = 960 divisé par 64 = 15 Ω (corrigé de la situation d'évaluation)."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p05_q4",
          "type": "mcq",
          "prompt": "L'intensité du courant dans le circuit principal de la première expérience vaut :",
          "options": [
            "4,8 A",
            "8 A",
            "1,2 A",
            "3 A"
          ],
          "correctAnswerIndex": 3,
          "explanation": "I = E divisé par (R0 + R) = 120 divisé par 40 = 3 A (corrigé de la situation d'évaluation)."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p05_q5",
          "type": "mcq",
          "prompt": "Le rendement du moteur de la deuxième expérience de la situation vaut :",
          "options": [
            "93,02 %",
            "83 %",
            "100 %",
            "50 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "η = E' divisé par UAB = 100 divisé par 107,5, soit 93,02 % (corrigé de la situation) ; 83 % est le rendement du circuit entier."
        },
        {
          "id": "premiere_c_physique_l03_puissance_energie_electrique_p05_q6",
          "type": "mcq",
          "prompt": "L'intensité du courant lorsque le moteur de la situation est bloqué (E' = 0) vaut :",
          "options": [
            "0,5 A",
            "3 A",
            "0 A",
            "8 A"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec E' = 0, la loi de Pouillet donne I = E divisé par (R0 + r') = 120 divisé par 40 = 3 A (corrigé de la situation)."
        }
      ]
    }
  ]
};
