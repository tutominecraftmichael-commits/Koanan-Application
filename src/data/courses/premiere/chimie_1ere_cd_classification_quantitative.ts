import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Classification quantitative des couples oxydants/réducteurs » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Classification quantitative des couples oxydants/réducteurs » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const CHIMIE_1ERE_CD_L08_CLASSIFICATION_QUANTITATIVE: CurriculumChapter = {
  "id": "premiere_c_chimie_l08_classification_quantitative",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 8,
  "title": "Leçon 8 : Classification quantitative des couples oxydants/réducteurs",
  "summary": "On étudie la pile de Daniell et son fonctionnement, on définit le potentiel d'oxydoréduction d'un couple par rapport à l'électrode standard à hydrogène, puis on utilise ces potentiels pour calculer la force électromotrice d'une pile, classer les couples et prévoir les réactions spontanées.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Classification quantitative des couples oxydants/réducteurs » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_chimie_l08_classification_quantitative_p01",
      "order": 1,
      "title": "La pile électrochimique et la pile de Daniell",
      "summary": "Définir une pile électrochimique et décrire la constitution de la pile de Daniell.",
      "conceptExplanation": "Les réactions d'oxydoréduction sont des réactions au cours desquelles il s'effectue un transfert d'électrons, les deux réactifs étant dans le même milieu réactionnel.\nPour produire de l'électricité à partir d'une réaction chimique, il suffit de séparer les deux couples et de faire circuler les électrons grâce à un circuit extérieur : la pile obtenue s'appelle une pile électrochimique, et elle transforme l'énergie chimique en énergie électrique.\nLa pile de Daniell est constituée d'une lame de zinc plongée dans une solution de sulfate de zinc et d'une lame de cuivre plongée dans une solution de sulfate de cuivre, les deux compartiments étant reliés par un pont salin. Les deux lames sont appelées électrodes et chaque compartiment constitue une demi-pile.",
      "keyRule": "Une pile électrochimique sépare les deux couples et fait circuler les électrons dans un circuit extérieur : elle transforme l'énergie chimique en énergie électrique.",
      "formulas": [],
      "workedExample": {
        "title": "La pile réalisée avec une tomate (situation d'apprentissage)",
        "statement": "Un réparateur insère une lame de cuivre et une lame de zinc dans une tomate et mesure, à l'aide d'un voltmètre, une différence de potentiel entre les deux lames. Explique pourquoi il vient de réaliser une pile.",
        "methodSteps": [
          "Les deux lames métalliques jouent le rôle d'électrodes de deux couples oxydant et réducteur différents.",
          "Les deux couples sont séparés, et les électrons peuvent circuler par le circuit extérieur relié au voltmètre.",
          "Le voltmètre détecte une tension électrique : l'énergie chimique est transformée en énergie électrique."
        ],
        "conclusion": "L'ensemble formé par les deux lames et le milieu qui les relie est une pile électrochimique, comme l'annonce le réparateur."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La pile électrochimique",
          "stepTheme": "La pile électrochimique",
          "stepBadge": "La pile électrochimique",
          "paragraphText": "• Pile électrochimique : dispositif qui produit de l'électricité à partir d'une réaction chimique, en séparant les deux couples oxydant et réducteur et en faisant circuler les électrons dans un circuit extérieur.\nElle transforme l'énergie chimique en énergie électrique.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p01_q1",
            "type": "mcq",
            "prompt": "Une pile électrochimique transforme :",
            "options": [
              "L'énergie électrique en énergie chimique",
              "L'énergie chimique en énergie électrique",
              "L'énergie chimique en énergie thermique uniquement",
              "L'énergie lumineuse en énergie électrique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document définit la pile électrochimique comme un dispositif qui transforme l'énergie chimique en énergie électrique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les deux compartiments de la pile de Daniell",
          "stepTheme": "Les deux compartiments de la pile de Daniell",
          "stepBadge": "Les deux compartiments de la pile de Daniell",
          "paragraphText": "La pile de Daniell comporte une lame de zinc dans une solution de sulfate de zinc, d'une part.\nElle comporte d'autre part une lame de cuivre dans une solution de sulfate de cuivre. Chaque compartiment constitue une demi-pile.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p01_q2",
            "type": "mcq",
            "prompt": "Dans la pile de Daniell, la lame de zinc plonge dans :",
            "options": [
              "Une solution de sulfate de cuivre",
              "Une solution de chlorure de potassium",
              "Une solution de sulfate de zinc",
              "De l'eau distillée"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Chaque lame plonge dans la solution contenant les ions de son propre métal : le zinc dans le sulfate de zinc, le cuivre dans le sulfate de cuivre."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le rôle du pont salin",
          "stepTheme": "Le rôle du pont salin",
          "stepBadge": "Le rôle du pont salin",
          "paragraphText": "Le contact électrique entre les deux couples est assuré par un pont salin, ou pont de jonction.\nIl est constitué d'une languette de papier filtre imbibée de chlorure de potassium ou de nitrate de potassium, inerte vis-à-vis des deux couples.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p01_q3",
            "type": "mcq",
            "prompt": "Dans la pile de Daniell, le pont salin assure :",
            "options": [
              "Le contact électrique entre les deux couples",
              "Le passage des électrons d'une lame à l'autre",
              "Le chauffage des solutions",
              "La production des ions cuivre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le document indique que le contact électrique entre les deux couples est assuré par le pont salin. Les électrons, eux, circulent dans les fils du circuit extérieur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Électrodes et demi-piles",
          "stepTheme": "Électrodes et demi-piles",
          "stepBadge": "Électrodes et demi-piles",
          "paragraphText": "• Électrode : chacune des deux lames métalliques de la pile.\n• Demi-pile : chaque compartiment de la pile, formé d'une électrode et de la solution dans laquelle elle plonge.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p01_q4",
            "type": "mcq",
            "prompt": "Dans une pile, on appelle demi-pile :",
            "options": [
              "La moitié du pont salin",
              "Le voltmètre et ses fils",
              "La moitié de la lame métallique",
              "Chaque compartiment, formé d'une électrode et de sa solution"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la remarque du document : chaque compartiment constitue une demi-pile, et les deux lames sont appelées électrodes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Séparer les couples pour obtenir un courant",
          "stepTheme": "Séparer les couples pour obtenir un courant",
          "stepBadge": "Séparer les couples pour obtenir un courant",
          "paragraphText": "Piège : croire qu'il suffit de mélanger les deux réactifs pour produire de l'électricité.\nDans un même milieu, le transfert d'électrons se fait directement, sans courant utilisable : il faut séparer les deux couples et imposer aux électrons le passage par le circuit extérieur.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p01_q5",
            "type": "mcq",
            "prompt": "Pour produire de l'électricité à partir d'une réaction d'oxydoréduction, il faut :",
            "options": [
              "Mélanger les deux réactifs dans un seul bécher",
              "Séparer les deux couples et faire circuler les électrons dans un circuit extérieur",
              "Chauffer fortement le mélange réactionnel",
              "Ajouter un acide concentré au mélange"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le principe énoncé au début du document : séparer les deux couples et faire circuler les électrons grâce à un circuit extérieur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La tension détectée par le voltmètre",
          "stepTheme": "La tension détectée par le voltmètre",
          "stepBadge": "La tension détectée par le voltmètre",
          "paragraphText": "Dans l'expérience du document, les deux lames sont reliées à un voltmètre par des fils électriques.\nUne tension électrique est détectée par le voltmètre : c'est la preuve que la pile débite une énergie électrique.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p01_q6",
            "type": "mcq",
            "prompt": "Dans l'expérience de la pile de Daniell, le voltmètre branché entre les deux lames indique :",
            "options": [
              "Une tension électrique",
              "Une température",
              "Une intensité toujours nulle",
              "Une masse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le document rapporte qu'une tension électrique est détectée par le voltmètre relié aux deux lames."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p01_q1",
          "type": "mcq",
          "prompt": "Une pile électrochimique transforme :",
          "options": [
            "L'énergie électrique en énergie chimique",
            "L'énergie chimique en énergie électrique",
            "L'énergie chimique en énergie thermique uniquement",
            "L'énergie lumineuse en énergie électrique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document définit la pile électrochimique comme un dispositif qui transforme l'énergie chimique en énergie électrique."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p01_q2",
          "type": "mcq",
          "prompt": "Dans la pile de Daniell, la lame de zinc plonge dans :",
          "options": [
            "Une solution de sulfate de cuivre",
            "Une solution de chlorure de potassium",
            "Une solution de sulfate de zinc",
            "De l'eau distillée"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Chaque lame plonge dans la solution contenant les ions de son propre métal : le zinc dans le sulfate de zinc, le cuivre dans le sulfate de cuivre."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p01_q3",
          "type": "mcq",
          "prompt": "Dans la pile de Daniell, le pont salin assure :",
          "options": [
            "Le contact électrique entre les deux couples",
            "Le passage des électrons d'une lame à l'autre",
            "Le chauffage des solutions",
            "La production des ions cuivre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le document indique que le contact électrique entre les deux couples est assuré par le pont salin. Les électrons, eux, circulent dans les fils du circuit extérieur."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p01_q4",
          "type": "mcq",
          "prompt": "Dans une pile, on appelle demi-pile :",
          "options": [
            "La moitié du pont salin",
            "Le voltmètre et ses fils",
            "La moitié de la lame métallique",
            "Chaque compartiment, formé d'une électrode et de sa solution"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la remarque du document : chaque compartiment constitue une demi-pile, et les deux lames sont appelées électrodes."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p01_q5",
          "type": "mcq",
          "prompt": "Pour produire de l'électricité à partir d'une réaction d'oxydoréduction, il faut :",
          "options": [
            "Mélanger les deux réactifs dans un seul bécher",
            "Séparer les deux couples et faire circuler les électrons dans un circuit extérieur",
            "Chauffer fortement le mélange réactionnel",
            "Ajouter un acide concentré au mélange"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le principe énoncé au début du document : séparer les deux couples et faire circuler les électrons grâce à un circuit extérieur."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p01_q6",
          "type": "mcq",
          "prompt": "Dans l'expérience de la pile de Daniell, le voltmètre branché entre les deux lames indique :",
          "options": [
            "Une tension électrique",
            "Une température",
            "Une intensité toujours nulle",
            "Une masse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le document rapporte qu'une tension électrique est détectée par le voltmètre relié aux deux lames."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l08_classification_quantitative_p02",
      "order": 2,
      "title": "Fonctionnement de la pile de Daniell",
      "summary": "Écrire les demi-équations aux électrodes, l'équation-bilan et la notation conventionnelle de la pile de Daniell.",
      "conceptExplanation": "À l'électrode de zinc, pôle négatif, les atomes de zinc cèdent des électrons et se transforment en ions $\\mathrm{Zn^{2+}}$ : c'est une oxydation, $\\mathrm{Zn \\longrightarrow Zn^{2+} + 2\\,e^-}$.\nÀ l'électrode de cuivre, pôle positif, les ions $\\mathrm{Cu^{2+}}$ captent les électrons et se transforment en métal cuivre : c'est une réduction, $\\mathrm{Cu^{2+} + 2\\,e^- \\longrightarrow Cu}$.\nL'équation-bilan est donc $\\mathrm{Zn + Cu^{2+} \\longrightarrow Cu + Zn^{2+}}$. Le document rappelle que le pôle négatif est toujours le siège d'une oxydation et le pôle positif le siège d'une réduction ; la masse de la lame de zinc diminue, tandis que la masse de cuivre augmente.",
      "keyRule": "Pôle négatif : oxydation ; pôle positif : réduction. Pour la pile de Daniell, le zinc est le pôle négatif et le cuivre le pôle positif.",
      "formulas": [
        {
          "name": "Oxydation au pôle négatif",
          "formula": "\\mathrm{Zn \\longrightarrow Zn^{2+} + 2\\,e^-}",
          "note": "Électrode de zinc."
        },
        {
          "name": "Réduction au pôle positif",
          "formula": "\\mathrm{Cu^{2+} + 2\\,e^- \\longrightarrow Cu}",
          "note": "Électrode de cuivre."
        },
        {
          "name": "Équation-bilan de la pile de Daniell",
          "formula": "\\mathrm{Zn + Cu^{2+} \\longrightarrow Cu + Zn^{2+}}",
          "note": "Somme des deux demi-équations."
        }
      ],
      "workedExample": {
        "title": "Le dépôt sur une lame de zinc (exercice 1)",
        "statement": "Une lame de zinc introduite dans une solution de sulfate de cuivre II se recouvre d'un dépôt brun-rouge, alors qu'une lame de cuivre introduite dans une solution de sulfate de zinc ne se recouvre pas de dépôt. Écris l'équation-bilan de la réaction qui a lieu.",
        "methodSteps": [
          "Le dépôt brun-rouge est du cuivre métallique : les ions $\\mathrm{Cu^{2+}}$ sont réduits en Cu.",
          "Le zinc est donc oxydé en ions $\\mathrm{Zn^{2+}}$, selon $\\mathrm{Zn \\longrightarrow Zn^{2+} + 2\\,e^-}$.",
          "En ajoutant la réduction $\\mathrm{Cu^{2+} + 2\\,e^- \\longrightarrow Cu}$, les électrons se compensent."
        ],
        "conclusion": "L'équation-bilan est $\\mathrm{Cu^{2+} + Zn \\longrightarrow Cu + Zn^{2+}}$, comme dans la solution de l'exercice 1 ; la réaction inverse n'a pas lieu spontanément."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'oxydation à l'électrode de zinc",
          "stepTheme": "L'oxydation à l'électrode de zinc",
          "stepBadge": "L'oxydation à l'électrode de zinc",
          "paragraphText": "• Demi-équation d'oxydation : les atomes de zinc cèdent des électrons et se transforment en ions $\\mathrm{Zn^{2+}}$.\nElle s'écrit : $\\mathrm{Zn \\longrightarrow Zn^{2+} + 2\\,e^-}$.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p02_q1",
            "type": "mcq",
            "prompt": "La demi-équation qui se déroule à l'électrode de zinc de la pile de Daniell est :",
            "options": [
              "$\\mathrm{Cu^{2+} + 2\\,e^- \\longrightarrow Cu}$",
              "$\\mathrm{Zn \\longrightarrow Zn^{2+} + 2\\,e^-}$",
              "$\\mathrm{Zn^{2+} + 2\\,e^- \\longrightarrow Zn}$",
              "$\\mathrm{Cu \\longrightarrow Cu^{2+} + 2\\,e^-}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "À l'électrode de zinc, les atomes de zinc cèdent des électrons : c'est la demi-équation d'oxydation donnée dans l'interprétation du document."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La réduction à l'électrode de cuivre",
          "stepTheme": "La réduction à l'électrode de cuivre",
          "stepBadge": "La réduction à l'électrode de cuivre",
          "paragraphText": "• Demi-équation de réduction : les ions cuivre II captent les électrons cédés par les atomes de zinc et se transforment en métal cuivre.\nElle s'écrit : $\\mathrm{Cu^{2+} + 2\\,e^- \\longrightarrow Cu}$.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p02_q2",
            "type": "mcq",
            "prompt": "À l'électrode de cuivre de la pile de Daniell, les ions $\\mathrm{Cu^{2+}}$ :",
            "options": [
              "Cèdent des électrons et deviennent du cuivre métallique",
              "Captent des électrons et deviennent des ions $\\mathrm{Zn^{2+}}$",
              "Captent des électrons et se transforment en métal cuivre",
              "Ne participent à aucune réaction"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les ions cuivre II captent les électrons cédés par le zinc et se transforment en métal cuivre : c'est une réduction."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La polarité et le type de réaction",
          "stepTheme": "La polarité et le type de réaction",
          "stepBadge": "La polarité et le type de réaction",
          "paragraphText": "Remarque du document : le pôle négatif d'une pile est toujours le siège d'une réaction d'oxydation.\nLe pôle positif est toujours le siège d'une réaction de réduction : pour Daniell, zinc au pôle négatif et cuivre au pôle positif.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p02_q3",
            "type": "mcq",
            "prompt": "Dans une pile, le pôle négatif est toujours le siège :",
            "options": [
              "D'une oxydation",
              "D'une réduction",
              "D'une combustion",
              "D'une estérification"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la remarque générale du document : oxydation au pôle négatif, réduction au pôle positif."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Obtenir l'équation-bilan",
          "stepTheme": "Obtenir l'équation-bilan",
          "stepBadge": "Obtenir l'équation-bilan",
          "paragraphText": "Méthode : ajouter membre à membre les deux demi-équations, en vérifiant que le nombre d'électrons cédés égale le nombre d'électrons captés.\nLes électrons disparaissent de l'équation-bilan : $\\mathrm{Zn + Cu^{2+} \\longrightarrow Cu + Zn^{2+}}$.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p02_q4",
            "type": "mcq",
            "prompt": "L'équation-bilan du fonctionnement de la pile de Daniell est :",
            "options": [
              "$\\mathrm{Cu + Zn^{2+} \\longrightarrow Zn + Cu^{2+}}$",
              "$\\mathrm{Zn + Cu \\longrightarrow Zn^{2+} + Cu^{2+}}$",
              "$\\mathrm{Zn^{2+} + Cu^{2+} \\longrightarrow Zn + Cu}$",
              "$\\mathrm{Zn + Cu^{2+} \\longrightarrow Cu + Zn^{2+}}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On additionne l'oxydation du zinc et la réduction des ions cuivre II ; les 2 électrons échangés se compensent."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'évolution des masses et des concentrations",
          "stepTheme": "L'évolution des masses et des concentrations",
          "stepBadge": "L'évolution des masses et des concentrations",
          "paragraphText": "Pendant le fonctionnement, la concentration en ions $\\mathrm{Cu^{2+}}$ diminue tandis que la masse de cuivre augmente.\nEn même temps, la concentration en ions $\\mathrm{Zn^{2+}}$ augmente tandis que la masse de la lame de zinc diminue.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p02_q5",
            "type": "mcq",
            "prompt": "Quand la pile de Daniell fonctionne, la masse de la lame de zinc :",
            "options": [
              "Augmente",
              "Diminue",
              "Reste constante",
              "Devient égale à celle du cuivre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les atomes de zinc passent en solution sous forme d'ions $\\mathrm{Zn^{2+}}$ : la lame de zinc est consommée et sa masse diminue."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser les pôles",
          "stepTheme": "Ne pas inverser les pôles",
          "stepBadge": "Ne pas inverser les pôles",
          "paragraphText": "Piège : placer le zinc au pôle positif parce qu'il fournit les électrons.\nC'est l'inverse : l'électrode qui cède les électrons par oxydation est le pôle négatif, donc le zinc ; le cuivre, où a lieu la réduction, est le pôle positif.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p02_q6",
            "type": "mcq",
            "prompt": "Dans la notation conventionnelle de la pile de Daniell, on écrit, du pôle négatif vers le pôle positif :",
            "options": [
              "Cuivre avec le couple cuivre, puis zinc avec le couple zinc",
              "Zinc avec le couple zinc, puis cuivre avec le couple cuivre",
              "Zinc avec le couple cuivre, puis cuivre avec le couple zinc",
              "Le pont salin d'abord, puis les deux lames"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La notation commence par le pôle négatif, l'électrode de zinc et son couple, et se termine par le pôle positif, l'électrode de cuivre et son couple."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "La pile cuivre et argent (activité d'application)",
          "stepTheme": "La pile cuivre et argent (activité d'application)",
          "stepBadge": "La pile cuivre et argent (activité d'application)",
          "paragraphText": "L'activité d'application concerne une pile formée des couples cuivre et argent.\nSa solution indique que la masse de l'électrode de cuivre diminue et que la masse de l'électrode d'argent augmente : le cuivre s'oxyde et les ions argent se réduisent.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p02_q7",
            "type": "mcq",
            "prompt": "Dans la pile cuivre et argent de l'activité d'application, la masse de l'électrode d'argent :",
            "options": [
              "Augmente",
              "Diminue",
              "Reste constante",
              "Disparaît complètement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La solution de l'activité indique que l'affirmation « la masse de l'électrode d'argent augmente » est vraie : les ions argent se déposent en métal sur l'électrode."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p02_q1",
          "type": "mcq",
          "prompt": "La demi-équation qui se déroule à l'électrode de zinc de la pile de Daniell est :",
          "options": [
            "$\\mathrm{Cu^{2+} + 2\\,e^- \\longrightarrow Cu}$",
            "$\\mathrm{Zn \\longrightarrow Zn^{2+} + 2\\,e^-}$",
            "$\\mathrm{Zn^{2+} + 2\\,e^- \\longrightarrow Zn}$",
            "$\\mathrm{Cu \\longrightarrow Cu^{2+} + 2\\,e^-}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "À l'électrode de zinc, les atomes de zinc cèdent des électrons : c'est la demi-équation d'oxydation donnée dans l'interprétation du document."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p02_q2",
          "type": "mcq",
          "prompt": "À l'électrode de cuivre de la pile de Daniell, les ions $\\mathrm{Cu^{2+}}$ :",
          "options": [
            "Cèdent des électrons et deviennent du cuivre métallique",
            "Captent des électrons et deviennent des ions $\\mathrm{Zn^{2+}}$",
            "Captent des électrons et se transforment en métal cuivre",
            "Ne participent à aucune réaction"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les ions cuivre II captent les électrons cédés par le zinc et se transforment en métal cuivre : c'est une réduction."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p02_q3",
          "type": "mcq",
          "prompt": "Dans une pile, le pôle négatif est toujours le siège :",
          "options": [
            "D'une oxydation",
            "D'une réduction",
            "D'une combustion",
            "D'une estérification"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la remarque générale du document : oxydation au pôle négatif, réduction au pôle positif."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p02_q4",
          "type": "mcq",
          "prompt": "L'équation-bilan du fonctionnement de la pile de Daniell est :",
          "options": [
            "$\\mathrm{Cu + Zn^{2+} \\longrightarrow Zn + Cu^{2+}}$",
            "$\\mathrm{Zn + Cu \\longrightarrow Zn^{2+} + Cu^{2+}}$",
            "$\\mathrm{Zn^{2+} + Cu^{2+} \\longrightarrow Zn + Cu}$",
            "$\\mathrm{Zn + Cu^{2+} \\longrightarrow Cu + Zn^{2+}}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On additionne l'oxydation du zinc et la réduction des ions cuivre II ; les 2 électrons échangés se compensent."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p02_q5",
          "type": "mcq",
          "prompt": "Quand la pile de Daniell fonctionne, la masse de la lame de zinc :",
          "options": [
            "Augmente",
            "Diminue",
            "Reste constante",
            "Devient égale à celle du cuivre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les atomes de zinc passent en solution sous forme d'ions $\\mathrm{Zn^{2+}}$ : la lame de zinc est consommée et sa masse diminue."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p02_q6",
          "type": "mcq",
          "prompt": "Dans la notation conventionnelle de la pile de Daniell, on écrit, du pôle négatif vers le pôle positif :",
          "options": [
            "Cuivre avec le couple cuivre, puis zinc avec le couple zinc",
            "Zinc avec le couple zinc, puis cuivre avec le couple cuivre",
            "Zinc avec le couple cuivre, puis cuivre avec le couple zinc",
            "Le pont salin d'abord, puis les deux lames"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La notation commence par le pôle négatif, l'électrode de zinc et son couple, et se termine par le pôle positif, l'électrode de cuivre et son couple."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p02_q7",
          "type": "mcq",
          "prompt": "Dans la pile cuivre et argent de l'activité d'application, la masse de l'électrode d'argent :",
          "options": [
            "Augmente",
            "Diminue",
            "Reste constante",
            "Disparaît complètement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La solution de l'activité indique que l'affirmation « la masse de l'électrode d'argent augmente » est vraie : les ions argent se déposent en métal sur l'électrode."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l08_classification_quantitative_p03",
      "order": 3,
      "title": "Autres exemples de piles et généralisation",
      "summary": "Construire une pile à partir de deux couples : le métal le plus réducteur forme le pôle négatif.",
      "conceptExplanation": "Le document donne d'autres exemples de piles : cuivre et plomb, plomb et fer, plomb et zinc.\nGénéralisation : soient deux couples dont les métaux sont notés M et M'. Pour obtenir une pile à partir de ces couples, la borne négative est constituée par le métal le plus réducteur et la borne positive par le métal le moins réducteur, dont l'oxydant est le plus fort.\nAinsi, dans la pile plomb et fer, le fer, plus réducteur, s'oxyde au pôle négatif et les ions $\\mathrm{Pb^{2+}}$ se réduisent au pôle positif : l'équation-bilan est $\\mathrm{Fe + Pb^{2+} \\longrightarrow Fe^{2+} + Pb}$.",
      "keyRule": "Dans une pile, le pôle négatif est le métal le plus réducteur ; le pôle positif correspond à l'oxydant le plus fort.",
      "formulas": [
        {
          "name": "Pile cuivre et plomb : bilan",
          "formula": "\\mathrm{Pb + Cu^{2+} \\longrightarrow Pb^{2+} + Cu}",
          "note": "Le plomb, plus réducteur, est le pôle négatif."
        },
        {
          "name": "Pile plomb et fer : bilan",
          "formula": "\\mathrm{Fe + Pb^{2+} \\longrightarrow Fe^{2+} + Pb}",
          "note": "Le fer, plus réducteur, est le pôle négatif."
        },
        {
          "name": "Pile plomb et zinc : bilan",
          "formula": "\\mathrm{Zn + Pb^{2+} \\longrightarrow Zn^{2+} + Pb}",
          "note": "Le zinc, plus réducteur, est le pôle négatif."
        }
      ],
      "workedExample": {
        "title": "La pile plomb et zinc du tableau",
        "statement": "À partir du tableau du document, donne les demi-équations aux deux pôles de la pile plomb et zinc, puis son équation-bilan.",
        "methodSteps": [
          "Le tableau donne le plomb comme pôle positif et le zinc comme pôle négatif.",
          "Au pôle positif, réduction : $\\mathrm{Pb^{2+} + 2\\,e^- \\longrightarrow Pb}$.",
          "Au pôle négatif, oxydation : $\\mathrm{Zn \\longrightarrow Zn^{2+} + 2\\,e^-}$."
        ],
        "conclusion": "L'équation-bilan est $\\mathrm{Zn + Pb^{2+} \\longrightarrow Zn^{2+} + Pb}$ : c'est le métal le plus réducteur, le zinc, qui s'oxyde."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le métal le plus réducteur au pôle négatif",
          "stepTheme": "Le métal le plus réducteur au pôle négatif",
          "stepBadge": "Le métal le plus réducteur au pôle négatif",
          "paragraphText": "• Généralisation du document : la borne négative d'une pile est constituée par le métal le plus réducteur.\nLa borne positive est constituée par le métal le moins réducteur, celui dont l'oxydant est le plus fort.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p03_q1",
            "type": "mcq",
            "prompt": "Pour construire une pile avec deux couples de métaux, la borne négative est constituée par :",
            "options": [
              "Le métal le moins réducteur",
              "Le métal le plus réducteur",
              "Le métal le plus lourd",
              "Le métal dont l'ion est le plus concentré"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la généralisation du document : borne négative pour le métal le plus réducteur, borne positive pour le métal le moins réducteur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La pile cuivre et plomb",
          "stepTheme": "La pile cuivre et plomb",
          "stepBadge": "La pile cuivre et plomb",
          "paragraphText": "Dans la pile cuivre et plomb du tableau, le cuivre est le pôle positif et le plomb le pôle négatif.\nAu pôle positif : $\\mathrm{Cu^{2+} + 2\\,e^- \\longrightarrow Cu}$ ; au pôle négatif : $\\mathrm{Pb \\longrightarrow Pb^{2+} + 2\\,e^-}$.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p03_q2",
            "type": "mcq",
            "prompt": "Dans la pile cuivre et plomb, le pôle négatif est :",
            "options": [
              "Le cuivre",
              "Le pont salin",
              "Le plomb",
              "La solution de sulfate de cuivre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le tableau donne le cuivre comme pôle positif et le plomb comme pôle négatif : le plomb, plus réducteur, s'oxyde."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La pile plomb et fer",
          "stepTheme": "La pile plomb et fer",
          "stepBadge": "La pile plomb et fer",
          "paragraphText": "Dans la pile plomb et fer, le plomb est le pôle positif et le fer le pôle négatif.\nLes ions $\\mathrm{Pb^{2+}}$ se réduisent donc en plomb pendant que le fer s'oxyde en ions $\\mathrm{Fe^{2+}}$.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p03_q3",
            "type": "mcq",
            "prompt": "L'équation-bilan de la pile plomb et fer est :",
            "options": [
              "$\\mathrm{Fe + Pb^{2+} \\longrightarrow Fe^{2+} + Pb}$",
              "$\\mathrm{Pb + Fe^{2+} \\longrightarrow Pb^{2+} + Fe}$",
              "$\\mathrm{Fe + Pb \\longrightarrow Fe^{2+} + Pb^{2+}}$",
              "$\\mathrm{Pb^{2+} + Fe^{2+} \\longrightarrow Pb + Fe}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le fer est le pôle négatif : il s'oxyde. Les ions plomb se réduisent au pôle positif, d'où le bilan $\\mathrm{Fe + Pb^{2+} \\longrightarrow Fe^{2+} + Pb}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Écrire le schéma d'une pile",
          "stepTheme": "Écrire le schéma d'une pile",
          "stepBadge": "Écrire le schéma d'une pile",
          "paragraphText": "Méthode : écrire d'abord le pôle négatif, avec le métal le plus réducteur et son ion, puis le pôle positif, avec l'ion et le métal de l'autre couple.\nEntre les deux, on représente le pont salin qui relie les deux demi-piles.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p03_q4",
            "type": "mcq",
            "prompt": "Dans le schéma conventionnel d'une pile, le premier couple écrit, à gauche, est celui :",
            "options": [
              "Du pôle positif",
              "Du couple de référence",
              "De l'oxydant le plus fort",
              "Du pôle négatif"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La notation conventionnelle commence par le pôle négatif (signe moins) et se termine par le pôle positif (signe plus), comme pour la pile de Daniell."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le bilan va dans le sens du métal le plus réducteur",
          "stepTheme": "Le bilan va dans le sens du métal le plus réducteur",
          "stepBadge": "Le bilan va dans le sens du métal le plus réducteur",
          "paragraphText": "Piège : écrire le bilan dans le sens inverse, comme si le métal du pôle positif s'oxydait.\nC'est toujours le métal le plus réducteur, au pôle négatif, qui est consommé et qui réduit les ions de l'autre couple.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p03_q5",
            "type": "mcq",
            "prompt": "Dans la pile plomb et zinc, le métal qui est consommé au pôle négatif est :",
            "options": [
              "Le plomb",
              "Le zinc",
              "Aucun, les deux sont conservés",
              "Le cuivre du pont salin"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le zinc est le métal le plus réducteur des deux : il forme le pôle négatif et s'oxyde selon $\\mathrm{Zn \\longrightarrow Zn^{2+} + 2\\,e^-}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Vrai ou faux sur la pile cuivre et argent",
          "stepTheme": "Vrai ou faux sur la pile cuivre et argent",
          "stepBadge": "Vrai ou faux sur la pile cuivre et argent",
          "paragraphText": "L'activité d'application demande de juger quatre affirmations sur une pile cuivre et argent.\nLa solution déclare fausse l'affirmation « la masse de l'électrode de cuivre augmente » et vraie l'affirmation « la masse de l'électrode de cuivre diminue ».",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p03_q6",
            "type": "mcq",
            "prompt": "D'après la solution de l'activité, dans la pile cuivre et argent, la masse de l'électrode de cuivre :",
            "options": [
              "Augmente",
              "Diminue",
              "Reste constante",
              "Augmente puis diminue"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le cuivre, plus réducteur que l'argent, s'oxyde et passe en solution : la masse de son électrode diminue."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p03_q1",
          "type": "mcq",
          "prompt": "Pour construire une pile avec deux couples de métaux, la borne négative est constituée par :",
          "options": [
            "Le métal le moins réducteur",
            "Le métal le plus réducteur",
            "Le métal le plus lourd",
            "Le métal dont l'ion est le plus concentré"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la généralisation du document : borne négative pour le métal le plus réducteur, borne positive pour le métal le moins réducteur."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p03_q2",
          "type": "mcq",
          "prompt": "Dans la pile cuivre et plomb, le pôle négatif est :",
          "options": [
            "Le cuivre",
            "Le pont salin",
            "Le plomb",
            "La solution de sulfate de cuivre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le tableau donne le cuivre comme pôle positif et le plomb comme pôle négatif : le plomb, plus réducteur, s'oxyde."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p03_q3",
          "type": "mcq",
          "prompt": "L'équation-bilan de la pile plomb et fer est :",
          "options": [
            "$\\mathrm{Fe + Pb^{2+} \\longrightarrow Fe^{2+} + Pb}$",
            "$\\mathrm{Pb + Fe^{2+} \\longrightarrow Pb^{2+} + Fe}$",
            "$\\mathrm{Fe + Pb \\longrightarrow Fe^{2+} + Pb^{2+}}$",
            "$\\mathrm{Pb^{2+} + Fe^{2+} \\longrightarrow Pb + Fe}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le fer est le pôle négatif : il s'oxyde. Les ions plomb se réduisent au pôle positif, d'où le bilan $\\mathrm{Fe + Pb^{2+} \\longrightarrow Fe^{2+} + Pb}$."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p03_q4",
          "type": "mcq",
          "prompt": "Dans le schéma conventionnel d'une pile, le premier couple écrit, à gauche, est celui :",
          "options": [
            "Du pôle positif",
            "Du couple de référence",
            "De l'oxydant le plus fort",
            "Du pôle négatif"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La notation conventionnelle commence par le pôle négatif (signe moins) et se termine par le pôle positif (signe plus), comme pour la pile de Daniell."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p03_q5",
          "type": "mcq",
          "prompt": "Dans la pile plomb et zinc, le métal qui est consommé au pôle négatif est :",
          "options": [
            "Le plomb",
            "Le zinc",
            "Aucun, les deux sont conservés",
            "Le cuivre du pont salin"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le zinc est le métal le plus réducteur des deux : il forme le pôle négatif et s'oxyde selon $\\mathrm{Zn \\longrightarrow Zn^{2+} + 2\\,e^-}$."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p03_q6",
          "type": "mcq",
          "prompt": "D'après la solution de l'activité, dans la pile cuivre et argent, la masse de l'électrode de cuivre :",
          "options": [
            "Augmente",
            "Diminue",
            "Reste constante",
            "Augmente puis diminue"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le cuivre, plus réducteur que l'argent, s'oxyde et passe en solution : la masse de son électrode diminue."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l08_classification_quantitative_p04",
      "order": 4,
      "title": "Le potentiel d'oxydoréduction",
      "summary": "Définir le potentiel d'un couple à l'aide de l'électrode standard à hydrogène et connaître la référence secondaire du cuivre.",
      "conceptExplanation": "Une demi-pile à hydrogène est constituée par une électrode de platine plongeant dans une solution d'acide, tandis qu'un courant de dihydrogène barbote au-dessus d'elle. Quand son potentiel est de $0{,}00$ V, avec un pH de 0 et une pression de 1 atmosphère, elle est dite standard : c'est l'électrode standard à hydrogène, notée ESH.\nLe couple formé par les ions hydrogène et le dihydrogène est le couple de référence, et son potentiel est choisi nul à toute température.\nOn associe ensuite chaque couple à cette demi-pile de référence : la force électromotrice de la pile constituée est, par définition, le potentiel d'oxydoréduction du couple considéré. Dans la pratique, l'ESH, très délicate à réaliser, est remplacée par la demi-pile cuivre, dont le potentiel normal vaut $0{,}34$ V.",
      "keyRule": "Le potentiel d'un couple se mesure par rapport à l'électrode standard à hydrogène, de potentiel nul : il est positif si le métal est moins réducteur que le dihydrogène, négatif sinon.",
      "formulas": [
        {
          "name": "Potentiel du couple de référence",
          "formula": "E^\\circ\\mathrm{(H^+/H_2)} = 0\\ \\mathrm{V}",
          "note": "Choisi nul à toute température."
        },
        {
          "name": "Demi-équation du couple de référence",
          "formula": "\\mathrm{2\\,H^+ + 2\\,e^- \\longrightarrow H_2}",
          "note": "Couple de l'électrode standard à hydrogène."
        },
        {
          "name": "Potentiel normal du cuivre",
          "formula": "E^\\circ\\mathrm{(Cu^{2+}/Cu)} = 0{,}34\\ \\mathrm{V}",
          "note": "Pour une concentration en ions cuivre de 1 mol par litre et 298 K."
        }
      ],
      "workedExample": {
        "title": "Le signe du potentiel du zinc",
        "statement": "Le métal zinc est plus réducteur que le dihydrogène. Que peut-on dire du signe de son potentiel d'oxydoréduction, et quelle est sa valeur dans le tableau du document ?",
        "methodSteps": [
          "On applique la remarque du document : si le métal est plus réducteur que le dihydrogène, son potentiel est inférieur à celui de la référence.",
          "Le potentiel de référence vaut 0 V, donc le potentiel du couple du zinc est négatif.",
          "Le tableau des exemples de potentiels standards donne, pour le couple zinc, la valeur $-0{,}77$ V."
        ],
        "conclusion": "Le potentiel du couple du zinc est négatif et vaut $-0{,}77$ V dans le tableau du document."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La demi-pile à hydrogène",
          "stepTheme": "La demi-pile à hydrogène",
          "stepBadge": "La demi-pile à hydrogène",
          "paragraphText": "• Demi-pile à hydrogène : électrode de platine plongeant dans une solution d'acide, avec un courant de dihydrogène qui barbote au-dessus d'elle.\nElle sert de référence pour mesurer les potentiels des autres couples.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p04_q1",
            "type": "mcq",
            "prompt": "La demi-pile à hydrogène est constituée par :",
            "options": [
              "Une lame de zinc dans une solution d'acide",
              "Une électrode de platine dans une solution d'acide, avec barbotage de dihydrogène",
              "Une lame de cuivre dans une solution de sulfate de cuivre",
              "Un pont salin rempli de dihydrogène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document décrit une électrode de platine plongeant dans une solution d'acide, tandis qu'un courant de dihydrogène barbote au-dessus d'elle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'électrode standard à hydrogène",
          "stepTheme": "L'électrode standard à hydrogène",
          "stepBadge": "L'électrode standard à hydrogène",
          "paragraphText": "• Électrode standard à hydrogène (ESH) : demi-pile à hydrogène dans les conditions standard, pH égal à 0 et pression de 1 atmosphère.\nSon couple est le couple de référence, de potentiel choisi nul à toute température.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p04_q2",
            "type": "mcq",
            "prompt": "Le potentiel du couple de référence, formé par les ions hydrogène et le dihydrogène, vaut :",
            "options": [
              "$0{,}34$ V",
              "$1$ V",
              "$0$ V",
              "$-0{,}77$ V"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Par convention, le potentiel du couple de référence est choisi nul à toute température : $E^\\circ = 0$ V."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Définition du potentiel d'oxydoréduction",
          "stepTheme": "Définition du potentiel d'oxydoréduction",
          "stepBadge": "Définition du potentiel d'oxydoréduction",
          "paragraphText": "• Potentiel d'oxydoréduction d'un couple : force électromotrice de la pile constituée en associant la demi-pile de ce couple à la demi-pile de référence.\nLe document l'écrit comme la différence entre le potentiel de la lame du métal et celui de l'électrode standard à hydrogène.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p04_q3",
            "type": "mcq",
            "prompt": "Le potentiel d'oxydoréduction d'un couple est, par définition :",
            "options": [
              "La force électromotrice de la pile formée avec la demi-pile de référence",
              "La masse de l'électrode du couple",
              "La concentration des ions du couple",
              "La somme des potentiels des deux couples"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le document définit ce potentiel comme la force électromotrice de la pile constituée avec la demi-pile à hydrogène."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le signe du potentiel",
          "stepTheme": "Le signe du potentiel",
          "stepBadge": "Le signe du potentiel",
          "paragraphText": "Remarque du document : si le métal est moins réducteur que le dihydrogène, son potentiel est positif.\nSi le métal est plus réducteur que le dihydrogène, son potentiel est négatif, comme celui du zinc.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p04_q4",
            "type": "mcq",
            "prompt": "Si un métal M est plus réducteur que le dihydrogène, alors son potentiel vérifie :",
            "options": [
              "Il est égal à $0{,}34$ V",
              "Il est positif",
              "Il est toujours égal à 1 V",
              "Il est négatif"
            ],
            "correctAnswerIndex": 3,
            "explanation": "D'après la remarque du document, un métal plus réducteur que le dihydrogène a un potentiel inférieur à la référence, donc négatif."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La référence secondaire du cuivre",
          "stepTheme": "La référence secondaire du cuivre",
          "stepBadge": "La référence secondaire du cuivre",
          "paragraphText": "La réalisation d'une électrode standard à hydrogène est très délicate ; on la remplace dans la pratique par une demi-pile plus commode, de potentiel bien connu.\nCette référence secondaire est la demi-pile cuivre, dont le potentiel normal vaut $0{,}34$ V quand la concentration en ions cuivre vaut 1 mol par litre, à 298 K.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p04_q5",
            "type": "mcq",
            "prompt": "La demi-pile utilisée comme référence secondaire, à la place de l'électrode standard à hydrogène, est :",
            "options": [
              "La demi-pile zinc",
              "La demi-pile cuivre",
              "La demi-pile plomb",
              "La demi-pile fer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document désigne la demi-pile cuivre comme électrode de référence secondaire, d'emploi plus commode et de potentiel bien connu."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le potentiel normal du cuivre n'est pas nul",
          "stepTheme": "Le potentiel normal du cuivre n'est pas nul",
          "stepBadge": "Le potentiel normal du cuivre n'est pas nul",
          "paragraphText": "Piège : attribuer la valeur 0 V au couple du cuivre parce qu'il sert de référence secondaire.\nSeul le couple de référence hydrogène a un potentiel nul ; celui du cuivre vaut $0{,}34$ V dans les conditions normales.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p04_q6",
            "type": "mcq",
            "prompt": "Le potentiel normal du couple du cuivre vaut :",
            "options": [
              "$0$ V",
              "$0{,}80$ V",
              "$0{,}34$ V",
              "$-0{,}13$ V"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le document donne $0{,}34$ V pour le cuivre, $0$ V pour le couple hydrogène, $0{,}80$ V pour l'argent et $-0{,}13$ V pour le plomb."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Quelques potentiels standards du tableau",
          "stepTheme": "Quelques potentiels standards du tableau",
          "stepBadge": "Quelques potentiels standards du tableau",
          "paragraphText": "Le tableau du document donne les potentiels standards de plusieurs couples de métaux.\nOn y lit notamment $0{,}80$ V pour l'argent, $-0{,}44$ V pour le fer et $-0{,}77$ V pour le zinc.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p04_q7",
            "type": "mcq",
            "prompt": "D'après le tableau du document, le potentiel standard du couple du fer vaut :",
            "options": [
              "$-0{,}44$ V",
              "$-0{,}13$ V",
              "$0{,}34$ V",
              "$-0{,}77$ V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le tableau donne $-0{,}44$ V pour le fer, $-0{,}13$ V pour le plomb, $0{,}34$ V pour le cuivre et $-0{,}77$ V pour le zinc."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p04_q1",
          "type": "mcq",
          "prompt": "La demi-pile à hydrogène est constituée par :",
          "options": [
            "Une lame de zinc dans une solution d'acide",
            "Une électrode de platine dans une solution d'acide, avec barbotage de dihydrogène",
            "Une lame de cuivre dans une solution de sulfate de cuivre",
            "Un pont salin rempli de dihydrogène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document décrit une électrode de platine plongeant dans une solution d'acide, tandis qu'un courant de dihydrogène barbote au-dessus d'elle."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p04_q2",
          "type": "mcq",
          "prompt": "Le potentiel du couple de référence, formé par les ions hydrogène et le dihydrogène, vaut :",
          "options": [
            "$0{,}34$ V",
            "$1$ V",
            "$0$ V",
            "$-0{,}77$ V"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Par convention, le potentiel du couple de référence est choisi nul à toute température : $E^\\circ = 0$ V."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p04_q3",
          "type": "mcq",
          "prompt": "Le potentiel d'oxydoréduction d'un couple est, par définition :",
          "options": [
            "La force électromotrice de la pile formée avec la demi-pile de référence",
            "La masse de l'électrode du couple",
            "La concentration des ions du couple",
            "La somme des potentiels des deux couples"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le document définit ce potentiel comme la force électromotrice de la pile constituée avec la demi-pile à hydrogène."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p04_q4",
          "type": "mcq",
          "prompt": "Si un métal M est plus réducteur que le dihydrogène, alors son potentiel vérifie :",
          "options": [
            "Il est égal à $0{,}34$ V",
            "Il est positif",
            "Il est toujours égal à 1 V",
            "Il est négatif"
          ],
          "correctAnswerIndex": 3,
          "explanation": "D'après la remarque du document, un métal plus réducteur que le dihydrogène a un potentiel inférieur à la référence, donc négatif."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p04_q5",
          "type": "mcq",
          "prompt": "La demi-pile utilisée comme référence secondaire, à la place de l'électrode standard à hydrogène, est :",
          "options": [
            "La demi-pile zinc",
            "La demi-pile cuivre",
            "La demi-pile plomb",
            "La demi-pile fer"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document désigne la demi-pile cuivre comme électrode de référence secondaire, d'emploi plus commode et de potentiel bien connu."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p04_q6",
          "type": "mcq",
          "prompt": "Le potentiel normal du couple du cuivre vaut :",
          "options": [
            "$0$ V",
            "$0{,}80$ V",
            "$0{,}34$ V",
            "$-0{,}13$ V"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le document donne $0{,}34$ V pour le cuivre, $0$ V pour le couple hydrogène, $0{,}80$ V pour l'argent et $-0{,}13$ V pour le plomb."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p04_q7",
          "type": "mcq",
          "prompt": "D'après le tableau du document, le potentiel standard du couple du fer vaut :",
          "options": [
            "$-0{,}44$ V",
            "$-0{,}13$ V",
            "$0{,}34$ V",
            "$-0{,}77$ V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le tableau donne $-0{,}44$ V pour le fer, $-0{,}13$ V pour le plomb, $0{,}34$ V pour le cuivre et $-0{,}77$ V pour le zinc."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l08_classification_quantitative_p05",
      "order": 5,
      "title": "Force électromotrice et classification quantitative",
      "summary": "Calculer la force électromotrice d'une pile et classer les couples selon leur potentiel standard.",
      "conceptExplanation": "La force électromotrice d'une pile est égale à la différence entre le potentiel du couple dont l'électrode constitue le pôle positif et le potentiel du couple dont l'électrode constitue le pôle négatif.\nLa connaissance des potentiels permet d'établir une classification électrochimique quantitative des couples : plus l'oxydant d'un couple est fort, plus son potentiel est élevé ; plus le réducteur d'un couple est fort, plus son potentiel est faible.\nLorsque deux couples constituent une pile, la borne positive correspond au couple de potentiel standard le plus élevé et la borne négative au couple de potentiel standard le plus bas.",
      "keyRule": "Force électromotrice : potentiel du couple du pôle positif moins potentiel du couple du pôle négatif ; le pôle positif est le couple de potentiel le plus élevé.",
      "formulas": [
        {
          "name": "Force électromotrice standard",
          "formula": "E^\\circ = E^\\circ(+) - E^\\circ(-)",
          "note": "Différence des potentiels standards des deux couples."
        },
        {
          "name": "Pile cuivre et zinc",
          "formula": "E^\\circ = 0{,}34 - (-0{,}77) = 1{,}11\\ \\mathrm{V}",
          "note": "Valeur du tableau du document."
        }
      ],
      "workedExample": {
        "title": "La pile fer et argent (activité d'application)",
        "statement": "On réalise une pile avec les couples du fer, de potentiel $-0{,}44$ V, et de l'argent, de potentiel $+0{,}80$ V. Donne le pôle positif, le pôle négatif et la force électromotrice de cette pile.",
        "methodSteps": [
          "Le potentiel le plus élevé est celui de l'argent : l'électrode d'argent est la borne positive.",
          "Le potentiel le plus bas est celui du fer : l'électrode de fer est la borne négative.",
          "On calcule la différence : $0{,}80 - (-0{,}44)$, soit $1{,}24$ V."
        ],
        "conclusion": "La borne positive est l'argent, la borne négative le fer, et la force électromotrice vaut $1{,}24$ V, comme dans la solution de l'activité."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la force électromotrice",
          "stepTheme": "Définition de la force électromotrice",
          "stepBadge": "Définition de la force électromotrice",
          "paragraphText": "• Force électromotrice d'une pile : différence entre le potentiel du couple dont l'électrode constitue le pôle positif et le potentiel du couple dont l'électrode constitue le pôle négatif.\nC'est aussi la réponse attendue à la première question de la situation d'évaluation.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p05_q1",
            "type": "mcq",
            "prompt": "La force électromotrice d'une pile est égale à :",
            "options": [
              "La somme des potentiels des deux couples",
              "La différence entre le potentiel du couple du pôle positif et celui du couple du pôle négatif",
              "Le double du potentiel du pôle positif",
              "La différence entre les masses des deux électrodes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du document, reprise dans le corrigé de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Calculer une force électromotrice",
          "stepTheme": "Calculer une force électromotrice",
          "stepBadge": "Calculer une force électromotrice",
          "paragraphText": "Méthode : repérer le couple de potentiel le plus élevé pour le pôle positif, puis soustraire le potentiel du couple du pôle négatif.\nPour la pile cuivre et zinc : $0{,}34 - (-0{,}77)$, soit $1{,}11$ V.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p05_q2",
            "type": "mcq",
            "prompt": "La force électromotrice standard de la pile cuivre et zinc vaut :",
            "options": [
              "$0{,}43$ V",
              "$1{,}11$ V",
              "$-1{,}11$ V",
              "$0{,}77$ V"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $0{,}34 - (-0{,}77) = 1{,}11$ V : c'est la valeur du tableau des forces électromotrices du document."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les forces électromotrices du tableau",
          "stepTheme": "Les forces électromotrices du tableau",
          "stepBadge": "Les forces électromotrices du tableau",
          "paragraphText": "Le tableau du document donne $0{,}47$ V pour la pile cuivre et plomb et $0{,}64$ V pour la pile plomb et zinc.\nPour la pile plomb et fer, le calcul à partir des potentiels du tableau, $-0{,}13$ V et $-0{,}44$ V, donne $0{,}31$ V.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p05_q3",
            "type": "mcq",
            "prompt": "Avec les potentiels $-0{,}13$ V pour le plomb et $-0{,}44$ V pour le fer, la force électromotrice de la pile plomb et fer vaut :",
            "options": [
              "$0{,}57$ V",
              "$0{,}31$ V",
              "$0{,}78$ V",
              "$-0{,}31$ V"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le pôle positif est le plomb, de potentiel le plus élevé : on calcule $-0{,}13 - (-0{,}44) = 0{,}31$ V."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'axe de classification des couples",
          "stepTheme": "L'axe de classification des couples",
          "stepBadge": "L'axe de classification des couples",
          "paragraphText": "• Classification quantitative : classement des couples sur un axe de potentiels croissants, de $-0{,}77$ V pour le zinc à $0{,}80$ V pour l'argent dans les exemples du document.\nEn montant sur l'axe, le pouvoir oxydant croît ; en descendant, le pouvoir réducteur croît.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p05_q4",
            "type": "mcq",
            "prompt": "Sur l'axe de classification du document, le couple placé le plus haut parmi les exemples est :",
            "options": [
              "Le couple du zinc",
              "Le couple du fer",
              "Le couple hydrogène",
              "Le couple de l'argent"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'argent a le potentiel le plus élevé des exemples, $0{,}80$ V : son couple est en haut de l'axe, du côté du pouvoir oxydant croissant."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Potentiel, pouvoir oxydant et pouvoir réducteur",
          "stepTheme": "Potentiel, pouvoir oxydant et pouvoir réducteur",
          "stepBadge": "Potentiel, pouvoir oxydant et pouvoir réducteur",
          "paragraphText": "Conclusion du document : plus l'oxydant d'un couple est fort, plus son potentiel est élevé.\nÀ l'inverse, plus le réducteur d'un couple est fort, plus son potentiel est faible.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p05_q5",
            "type": "mcq",
            "prompt": "D'après la conclusion du document, plus un réducteur est fort :",
            "options": [
              "Plus le potentiel de son couple est faible",
              "Plus le potentiel de son couple est élevé",
              "Plus son couple est proche de zéro",
              "Moins il peut former une pile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le document conclut que le réducteur le plus fort correspond au potentiel le plus faible, et l'oxydant le plus fort au potentiel le plus élevé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Comparer deux oxydants (exercice 5)",
          "stepTheme": "Comparer deux oxydants (exercice 5)",
          "stepBadge": "Comparer deux oxydants (exercice 5)",
          "paragraphText": "Piège : comparer les pouvoirs oxydants à partir des métaux au lieu des potentiels des couples.\nDans l'exercice 5, le potentiel du cuivre, $0{,}34$ V, est supérieur à celui de l'étain, $-0{,}14$ V : l'ion cuivre est donc l'oxydant le plus fort.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p05_q6",
            "type": "mcq",
            "prompt": "D'après la solution de l'exercice 5, l'oxydant le plus fort entre les ions cuivre et les ions étain est :",
            "options": [
              "L'ion étain, car son potentiel est négatif",
              "L'ion cuivre, car le potentiel de son couple est le plus élevé",
              "Aucun des deux, ils ont le même pouvoir",
              "L'ion étain, car son métal est le pôle positif"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La solution compare les potentiels : celui du cuivre est supérieur à celui de l'étain, donc l'ion cuivre est l'oxydant le plus fort."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Retrouver un potentiel inconnu (exercice 5)",
          "stepTheme": "Retrouver un potentiel inconnu (exercice 5)",
          "stepBadge": "Retrouver un potentiel inconnu (exercice 5)",
          "paragraphText": "Dans l'exercice 5, une pile cuivre et étain a pour pôle négatif l'électrode d'étain et une force électromotrice de $0{,}48$ V.\nOn en déduit le potentiel de l'étain : $0{,}34 - 0{,}48$, soit $-0{,}14$ V.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p05_q7",
            "type": "mcq",
            "prompt": "D'après l'exercice 5, le potentiel standard du couple de l'étain vaut :",
            "options": [
              "$0{,}82$ V",
              "$0{,}14$ V",
              "$-0{,}14$ V",
              "$-0{,}48$ V"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On isole le potentiel cherché dans la relation de la force électromotrice : $0{,}34 - 0{,}48 = -0{,}14$ V."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p05_q1",
          "type": "mcq",
          "prompt": "La force électromotrice d'une pile est égale à :",
          "options": [
            "La somme des potentiels des deux couples",
            "La différence entre le potentiel du couple du pôle positif et celui du couple du pôle négatif",
            "Le double du potentiel du pôle positif",
            "La différence entre les masses des deux électrodes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du document, reprise dans le corrigé de la situation d'évaluation."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p05_q2",
          "type": "mcq",
          "prompt": "La force électromotrice standard de la pile cuivre et zinc vaut :",
          "options": [
            "$0{,}43$ V",
            "$1{,}11$ V",
            "$-1{,}11$ V",
            "$0{,}77$ V"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $0{,}34 - (-0{,}77) = 1{,}11$ V : c'est la valeur du tableau des forces électromotrices du document."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p05_q3",
          "type": "mcq",
          "prompt": "Avec les potentiels $-0{,}13$ V pour le plomb et $-0{,}44$ V pour le fer, la force électromotrice de la pile plomb et fer vaut :",
          "options": [
            "$0{,}57$ V",
            "$0{,}31$ V",
            "$0{,}78$ V",
            "$-0{,}31$ V"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le pôle positif est le plomb, de potentiel le plus élevé : on calcule $-0{,}13 - (-0{,}44) = 0{,}31$ V."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p05_q4",
          "type": "mcq",
          "prompt": "Sur l'axe de classification du document, le couple placé le plus haut parmi les exemples est :",
          "options": [
            "Le couple du zinc",
            "Le couple du fer",
            "Le couple hydrogène",
            "Le couple de l'argent"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'argent a le potentiel le plus élevé des exemples, $0{,}80$ V : son couple est en haut de l'axe, du côté du pouvoir oxydant croissant."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p05_q5",
          "type": "mcq",
          "prompt": "D'après la conclusion du document, plus un réducteur est fort :",
          "options": [
            "Plus le potentiel de son couple est faible",
            "Plus le potentiel de son couple est élevé",
            "Plus son couple est proche de zéro",
            "Moins il peut former une pile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le document conclut que le réducteur le plus fort correspond au potentiel le plus faible, et l'oxydant le plus fort au potentiel le plus élevé."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p05_q6",
          "type": "mcq",
          "prompt": "D'après la solution de l'exercice 5, l'oxydant le plus fort entre les ions cuivre et les ions étain est :",
          "options": [
            "L'ion étain, car son potentiel est négatif",
            "L'ion cuivre, car le potentiel de son couple est le plus élevé",
            "Aucun des deux, ils ont le même pouvoir",
            "L'ion étain, car son métal est le pôle positif"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La solution compare les potentiels : celui du cuivre est supérieur à celui de l'étain, donc l'ion cuivre est l'oxydant le plus fort."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p05_q7",
          "type": "mcq",
          "prompt": "D'après l'exercice 5, le potentiel standard du couple de l'étain vaut :",
          "options": [
            "$0{,}82$ V",
            "$0{,}14$ V",
            "$-0{,}14$ V",
            "$-0{,}48$ V"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On isole le potentiel cherché dans la relation de la force électromotrice : $0{,}34 - 0{,}48 = -0{,}14$ V."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l08_classification_quantitative_p06",
      "order": 6,
      "title": "Prévision des réactions et piles usuelles",
      "summary": "Prévoir la réaction spontanée entre deux couples et connaître quelques piles électrochimiques usuelles.",
      "conceptExplanation": "D'après le document, la seule réaction spontanée possible entre deux couples oxydant et réducteur est celle entre l'oxydant le plus fort et le réducteur le plus fort.\nOn le vérifie avec les potentiels : l'ion hydrogène réagit avec le manganèse, de potentiel $-1{,}18$ V, mais pas avec le platine, de potentiel $1{,}2$ V (exercice 2).\nLe document présente ensuite quelques piles : la pile de Volta, inventée en 1800, la pile Leclanché, première pile saline, la pile alcaline, dont l'électrolyte est basique, et les accumulateurs, qui peuvent être rechargés par électrolyse.",
      "keyRule": "Réaction spontanée : l'oxydant le plus fort (potentiel le plus élevé) réagit avec le réducteur le plus fort (potentiel le plus faible).",
      "formulas": [
        {
          "name": "Pile de Volta : bilan donné par le document",
          "formula": "\\mathrm{Zn + 2\\,H_2O \\longrightarrow Zn^{2+} + 2\\,HO^- + H_2}",
          "note": "Pile inventée en 1800 par Alessandro Volta."
        },
        {
          "name": "Pile Leclanché : bilan donné par le document",
          "formula": "\\mathrm{Zn + 2\\,MnO_2 + 2\\,H^+ \\longrightarrow Zn^{2+} + 2\\,MnO(OH)}",
          "note": "Première pile saline, inventée par Georges Leclanché."
        },
        {
          "name": "Réaction du manganèse avec l'acide (exercice 2)",
          "formula": "\\mathrm{Mn + 2\\,H^+ \\longrightarrow H_2 + Mn^{2+}}",
          "note": "Le potentiel du manganèse est inférieur à celui du couple hydrogène."
        }
      ],
      "workedExample": {
        "title": "La réaction entre le magnésium et les ions or (exercice 3)",
        "statement": "Les potentiels normaux valent $1{,}5$ V pour le couple de l'or et $-2{,}37$ V pour le couple du magnésium. Détermine la réaction possible entre ces couples et écris son équation-bilan.",
        "methodSteps": [
          "Le potentiel de l'or est supérieur à celui du magnésium : les ions or sont l'oxydant le plus fort et le magnésium le réducteur le plus fort.",
          "Oxydation : $\\mathrm{Mg \\longrightarrow Mg^{2+} + 2\\,e^-}$, à multiplier par 3 pour échanger 6 électrons.",
          "Réduction : $\\mathrm{Au^{3+} + 3\\,e^- \\longrightarrow Au}$, à multiplier par 2 pour échanger 6 électrons."
        ],
        "conclusion": "L'équation-bilan est $\\mathrm{3\\,Mg + 2\\,Au^{3+} \\longrightarrow 3\\,Mg^{2+} + 2\\,Au}$, comme dans la solution de l'exercice 3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La règle de prévision",
          "stepTheme": "La règle de prévision",
          "stepBadge": "La règle de prévision",
          "paragraphText": "• Règle de prévision : la seule réaction spontanée possible entre deux couples est celle entre l'oxydant le plus fort et le réducteur le plus fort.\nOn repère ces deux espèces grâce à la classification quantitative des couples.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p06_q1",
            "type": "mcq",
            "prompt": "La seule réaction spontanée possible entre deux couples a lieu entre :",
            "options": [
              "L'oxydant le plus faible et le réducteur le plus faible",
              "L'oxydant le plus fort et le réducteur le plus fort",
              "Les deux oxydants des deux couples",
              "Les deux réducteurs des deux couples"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la règle énoncée dans la partie « Prévision des réactions » du document."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Comparer les potentiels pour prévoir",
          "stepTheme": "Comparer les potentiels pour prévoir",
          "stepBadge": "Comparer les potentiels pour prévoir",
          "paragraphText": "Méthode de l'exercice 2 : comparer le potentiel de chaque couple à celui du couple hydrogène, placé à l'origine de la classification avec 0 V.\nUn métal de potentiel inférieur à 0 V est attaqué par les ions hydrogène ; un métal de potentiel supérieur ne l'est pas.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p06_q2",
            "type": "mcq",
            "prompt": "D'après l'exercice 2, l'acide chlorhydrique peut réagir avec le manganèse, de potentiel $-1{,}18$ V, parce que ce potentiel est :",
            "options": [
              "Supérieur à celui du couple hydrogène",
              "Égal à celui du platine",
              "Inférieur à celui du couple hydrogène",
              "Égal à zéro"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La solution compare les potentiels : celui du manganèse est inférieur à 0 V, donc les ions hydrogène, oxydant plus fort, réagissent avec le manganèse."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le platine n'est pas attaqué par l'acide",
          "stepTheme": "Le platine n'est pas attaqué par l'acide",
          "stepBadge": "Le platine n'est pas attaqué par l'acide",
          "paragraphText": "Le potentiel du couple du platine vaut $1{,}2$ V, supérieur à celui du couple hydrogène.\nLa solution de l'exercice 2 conclut donc que les ions hydrogène ne peuvent pas réagir avec le platine.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p06_q3",
            "type": "mcq",
            "prompt": "L'ion hydrogène ne peut pas réagir avec le platine parce que le potentiel du couple du platine, $1{,}2$ V, est :",
            "options": [
              "Supérieur à celui du couple hydrogène",
              "Inférieur à celui du couple hydrogène",
              "Négatif",
              "Égal à celui du manganèse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le platine est un réducteur plus faible que le dihydrogène : son potentiel est supérieur à 0 V, donc la réaction spontanée avec les ions hydrogène est impossible."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La pile de Volta et la pile Leclanché",
          "stepTheme": "La pile de Volta et la pile Leclanché",
          "stepBadge": "La pile de Volta et la pile Leclanché",
          "paragraphText": "• Pile de Volta : pile inventée en 1800 par Alessandro Volta.\n• Pile Leclanché : pile inventée par Georges Leclanché, présentée comme la première pile saline, car elle contient un sel.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p06_q4",
            "type": "mcq",
            "prompt": "La pile Leclanché est présentée dans le document comme :",
            "options": [
              "La première pile alcaline",
              "La première pile rechargeable",
              "La première pile saline",
              "La pile inventée par Volta en 1800"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le document attribue à Georges Leclanché l'invention de la première pile saline ; la pile de 1800 est celle de Volta."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Pile alcaline et accumulateurs",
          "stepTheme": "Pile alcaline et accumulateurs",
          "stepBadge": "Pile alcaline et accumulateurs",
          "paragraphText": "• Pile alcaline : pile dont l'électrolyte est alcalin, c'est-à-dire basique ; le document cite en exemple la pile Duracell.\n• Accumulateurs : composants qui peuvent être rechargés, en branchant un générateur qui impose un courant de sens inverse, par électrolyse.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p06_q5",
            "type": "mcq",
            "prompt": "On appelle pile alcaline une pile dont :",
            "options": [
              "L'électrolyte est alcalin, c'est-à-dire basique",
              "Les électrodes sont en aluminium",
              "L'électrolyte est un acide fort",
              "Le fonctionnement est toujours réversible"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du document, qui cite la pile Duracell comme exemple de pile alcaline."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une pile usagée ne se recharge pas",
          "stepTheme": "Une pile usagée ne se recharge pas",
          "stepBadge": "Une pile usagée ne se recharge pas",
          "paragraphText": "Piège : vouloir recharger une pile ordinaire usagée comme un accumulateur.\nLa remarque du document précise qu'une pile neuve est chargée, qu'elle se décharge à l'usage quand l'un des réactifs est entièrement consommé, et qu'elle ne doit pas être rechargée ; seuls les accumulateurs sont rechargeables.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p06_q6",
            "type": "mcq",
            "prompt": "D'après la remarque du document, une pile ordinaire usagée :",
            "options": [
              "Se rebranche comme un accumulateur",
              "Ne doit pas être rechargée, car l'un de ses réactifs est entièrement consommé",
              "Retrouve sa charge en refroidissant",
              "Se recharge en ajoutant du pont salin"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document distingue les piles, non rechargeables, des accumulateurs, qui se rechargent par électrolyse avec un courant de sens inverse."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Les deux piles de la situation d'évaluation",
          "stepTheme": "Les deux piles de la situation d'évaluation",
          "stepBadge": "Les deux piles de la situation d'évaluation",
          "paragraphText": "La situation d'évaluation forme une pile zinc et argent, de force électromotrice $1{,}56$ V, et une pile cuivre et mercure, de force électromotrice $0{,}52$ V.\nPour la première, le bilan s'écrit avec deux ions argent, car chaque ion argent ne capte qu'un seul électron.",
          "exercise": {
            "id": "premiere_c_chimie_l08_classification_quantitative_p06_q7",
            "type": "mcq",
            "prompt": "D'après le corrigé de la situation d'évaluation, l'équation-bilan de la pile zinc et argent est :",
            "options": [
              "$\\mathrm{Zn + Ag^+ \\longrightarrow Zn^{2+} + Ag}$",
              "$\\mathrm{2\\,Zn + Ag^+ \\longrightarrow 2\\,Zn^{2+} + Ag}$",
              "$\\mathrm{Zn + 2\\,Ag^+ \\longrightarrow Zn^{2+} + 2\\,Ag}$",
              "$\\mathrm{Ag + Zn^{2+} \\longrightarrow Ag^+ + Zn}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le zinc cède 2 électrons et chaque ion argent n'en capte qu'un : il faut donc 2 ions argent pour équilibrer le transfert d'électrons."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p06_q1",
          "type": "mcq",
          "prompt": "La seule réaction spontanée possible entre deux couples a lieu entre :",
          "options": [
            "L'oxydant le plus faible et le réducteur le plus faible",
            "L'oxydant le plus fort et le réducteur le plus fort",
            "Les deux oxydants des deux couples",
            "Les deux réducteurs des deux couples"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la règle énoncée dans la partie « Prévision des réactions » du document."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p06_q2",
          "type": "mcq",
          "prompt": "D'après l'exercice 2, l'acide chlorhydrique peut réagir avec le manganèse, de potentiel $-1{,}18$ V, parce que ce potentiel est :",
          "options": [
            "Supérieur à celui du couple hydrogène",
            "Égal à celui du platine",
            "Inférieur à celui du couple hydrogène",
            "Égal à zéro"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La solution compare les potentiels : celui du manganèse est inférieur à 0 V, donc les ions hydrogène, oxydant plus fort, réagissent avec le manganèse."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p06_q3",
          "type": "mcq",
          "prompt": "L'ion hydrogène ne peut pas réagir avec le platine parce que le potentiel du couple du platine, $1{,}2$ V, est :",
          "options": [
            "Supérieur à celui du couple hydrogène",
            "Inférieur à celui du couple hydrogène",
            "Négatif",
            "Égal à celui du manganèse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le platine est un réducteur plus faible que le dihydrogène : son potentiel est supérieur à 0 V, donc la réaction spontanée avec les ions hydrogène est impossible."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p06_q4",
          "type": "mcq",
          "prompt": "La pile Leclanché est présentée dans le document comme :",
          "options": [
            "La première pile alcaline",
            "La première pile rechargeable",
            "La première pile saline",
            "La pile inventée par Volta en 1800"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le document attribue à Georges Leclanché l'invention de la première pile saline ; la pile de 1800 est celle de Volta."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p06_q5",
          "type": "mcq",
          "prompt": "On appelle pile alcaline une pile dont :",
          "options": [
            "L'électrolyte est alcalin, c'est-à-dire basique",
            "Les électrodes sont en aluminium",
            "L'électrolyte est un acide fort",
            "Le fonctionnement est toujours réversible"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du document, qui cite la pile Duracell comme exemple de pile alcaline."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p06_q6",
          "type": "mcq",
          "prompt": "D'après la remarque du document, une pile ordinaire usagée :",
          "options": [
            "Se rebranche comme un accumulateur",
            "Ne doit pas être rechargée, car l'un de ses réactifs est entièrement consommé",
            "Retrouve sa charge en refroidissant",
            "Se recharge en ajoutant du pont salin"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document distingue les piles, non rechargeables, des accumulateurs, qui se rechargent par électrolyse avec un courant de sens inverse."
        },
        {
          "id": "premiere_c_chimie_l08_classification_quantitative_p06_q7",
          "type": "mcq",
          "prompt": "D'après le corrigé de la situation d'évaluation, l'équation-bilan de la pile zinc et argent est :",
          "options": [
            "$\\mathrm{Zn + Ag^+ \\longrightarrow Zn^{2+} + Ag}$",
            "$\\mathrm{2\\,Zn + Ag^+ \\longrightarrow 2\\,Zn^{2+} + Ag}$",
            "$\\mathrm{Zn + 2\\,Ag^+ \\longrightarrow Zn^{2+} + 2\\,Ag}$",
            "$\\mathrm{Ag + Zn^{2+} \\longrightarrow Ag^+ + Zn}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le zinc cède 2 électrons et chaque ion argent n'en capte qu'un : il faut donc 2 ions argent pour équilibrer le transfert d'électrons."
        }
      ]
    }
  ]
};
