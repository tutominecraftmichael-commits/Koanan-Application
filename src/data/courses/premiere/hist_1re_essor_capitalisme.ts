import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ère H1 - L'essor du capitalisme et ses conséquences.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const HIST_1RE_T1_L01_ESSOR_CAPITALISME: CurriculumChapter = {
  "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme",
  "subjectId": "histoire_geo",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c"
  ],
  "order": 1,
  "title": "Thème 1, leçon 1 : L'essor du capitalisme et ses conséquences",
  "summary": "Les fondements du capitalisme, ses formes (mercantile, industriel, financier), ses outils (monnaie, banques, sociétés anonymes, bourse) et ses conséquences sociales, politiques et économiques.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "1ère H1 - L'essor du capitalisme et ses conséquences.pdf",
  "points": [
    {
      "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p01",
      "order": 1,
      "title": "Les fondements du capitalisme",
      "summary": "Liberté d'entreprise, concurrence, profit, propriété privée.",
      "conceptExplanation": "Le capitalisme est un système économique et social apparu en Europe à la fin du Moyen Âge. Son nom vient du mot capital : l'ensemble des moyens financiers, matériels et humains nécessaires pour créer une entreprise. Il prend son essor au XIXe siècle.\n\nIl repose sur quatre fondements :\n1. La liberté d'entreprise : chacun peut créer et gérer l'entreprise de son choix, dans le respect de la loi.\n2. La libre concurrence : des entreprises du même domaine s'affrontent légalement ; les prix dépendent de la loi de l'offre et de la demande.\n3. La recherche du profit : le profit est le bénéfice, c'est-à-dire la différence entre le prix de vente d'une production et ce qu'elle a coûté.\n4. La propriété privée des moyens de production : usines, machines et terres appartiennent à des personnes ou à des sociétés (SA, SARL…), et non à l'État.",
      "keyRule": "Capitalisme = liberté d'entreprise + libre concurrence + recherche du profit + propriété privée des moyens de production.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer un profit",
        "statement": "Un artisan fabrique des chaises pour 60 000 F et les vend 90 000 F. Quel est son profit ?",
        "methodSteps": [
          "Profit = valeur de la vente - coût de production.",
          "90 000 - 60 000 = 30 000 F."
        ],
        "conclusion": "Le profit est de 30 000 F : c'est ce que recherche le capitaliste."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le capital",
          "stepTheme": "Le capital",
          "stepBadge": "Le capital",
          "paragraphText": "Le capital est l'ensemble des moyens financiers, matériels et humains nécessaires à la création d'une entreprise.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p01_q1",
            "type": "mcq",
            "prompt": "D'où vient le mot « capitalisme » ?",
            "options": [
              "Du mot capitale, la ville du gouvernement",
              "Du nom d'un roi européen",
              "Du mot capital, les moyens pour créer une entreprise",
              "Du mot capitaine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le capitaliste engage son capital dans une affaire."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Né en Europe",
          "stepTheme": "Né en Europe",
          "stepBadge": "Né en Europe",
          "paragraphText": "Le capitalisme apparaît en Europe à la fin du Moyen Âge et prend son essor au XIXe siècle.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p01_q2",
            "type": "mcq",
            "prompt": "Où le capitalisme est-il né ?",
            "options": [
              "En Europe",
              "En Afrique",
              "En Asie centrale",
              "En Océanie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D'abord dans les cités marchandes d'Italie et d'Europe du Nord."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le profit",
          "stepTheme": "Le profit",
          "stepBadge": "Le profit",
          "paragraphText": "Le profit est le bénéfice : la différence entre le prix de vente d'une production et son coût.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p01_q3",
            "type": "mcq",
            "prompt": "Que désigne le profit ?",
            "options": [
              "Le salaire de l'ouvrier",
              "L'impôt payé à l'État",
              "Le prix d'achat",
              "Le bénéfice"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Profit = vente - coût."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calculer un profit",
          "stepTheme": "Calculer un profit",
          "stepBadge": "Calculer un profit",
          "paragraphText": "Profit = valeur de la vente - coût de production.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p01_q4",
            "type": "mcq",
            "prompt": "Une entreprise produit pour 400 000 F et vend pour 550 000 F. Quel est son profit ?",
            "options": [
              "950 000 F",
              "150 000 F",
              "400 000 F",
              "-150 000 F"
            ],
            "correctAnswerIndex": 1,
            "explanation": "550 000 - 400 000 = 150 000 F."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La libre concurrence",
          "stepTheme": "La libre concurrence",
          "stepBadge": "La libre concurrence",
          "paragraphText": "La libre concurrence est l'affrontement légal d'entreprises du même domaine ; elle obéit à la loi de l'offre et de la demande.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p01_q5",
            "type": "mcq",
            "prompt": "À quelle loi la libre concurrence fait-elle appel ?",
            "options": [
              "La loi du plus fort",
              "La loi de l'offre et de la demande",
              "La loi de la gravitation",
              "La loi sur la décentralisation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Si l'offre est forte et la demande faible, les prix baissent."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La propriété privée",
          "stepTheme": "La propriété privée",
          "stepBadge": "La propriété privée",
          "paragraphText": "Dans le capitalisme, les moyens de production appartiennent à des personnes privées ou à des sociétés, pas à l'État.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p01_q6",
            "type": "mcq",
            "prompt": "À qui appartiennent les moyens de production dans le capitalisme ?",
            "options": [
              "Uniquement à l'État",
              "À tous les ouvriers en commun",
              "À l'Église",
              "À des propriétaires privés"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le socialisme qui veut une propriété collective."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Vrai ou faux",
          "stepTheme": "Vrai ou faux",
          "stepBadge": "Vrai ou faux",
          "paragraphText": "Dans le capitalisme, l'État ne possède pas les moyens de production : ils sont privés.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p01_q7",
            "type": "mcq",
            "prompt": "« Les moyens de production appartiennent à l'État dans le capitalisme. » Cette affirmation est :",
            "options": [
              "Fausse",
              "Vraie",
              "Vraie seulement en Angleterre",
              "Vraie seulement au XIXe siècle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la question 1 de l'activité d'application du cours."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p01_q1",
          "type": "mcq",
          "prompt": "D'où vient le mot « capitalisme » ?",
          "options": [
            "Du mot capitale, la ville du gouvernement",
            "Du nom d'un roi européen",
            "Du mot capital, les moyens pour créer une entreprise",
            "Du mot capitaine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le capitaliste engage son capital dans une affaire."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p01_q2",
          "type": "mcq",
          "prompt": "Où le capitalisme est-il né ?",
          "options": [
            "En Europe",
            "En Afrique",
            "En Asie centrale",
            "En Océanie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'abord dans les cités marchandes d'Italie et d'Europe du Nord."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p01_q3",
          "type": "mcq",
          "prompt": "Que désigne le profit ?",
          "options": [
            "Le salaire de l'ouvrier",
            "L'impôt payé à l'État",
            "Le prix d'achat",
            "Le bénéfice"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Profit = vente - coût."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p01_q4",
          "type": "mcq",
          "prompt": "Une entreprise produit pour 400 000 F et vend pour 550 000 F. Quel est son profit ?",
          "options": [
            "950 000 F",
            "150 000 F",
            "400 000 F",
            "-150 000 F"
          ],
          "correctAnswerIndex": 1,
          "explanation": "550 000 - 400 000 = 150 000 F."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p01_q5",
          "type": "mcq",
          "prompt": "À quelle loi la libre concurrence fait-elle appel ?",
          "options": [
            "La loi du plus fort",
            "La loi de l'offre et de la demande",
            "La loi de la gravitation",
            "La loi sur la décentralisation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Si l'offre est forte et la demande faible, les prix baissent."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p01_q6",
          "type": "mcq",
          "prompt": "À qui appartiennent les moyens de production dans le capitalisme ?",
          "options": [
            "Uniquement à l'État",
            "À tous les ouvriers en commun",
            "À l'Église",
            "À des propriétaires privés"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le socialisme qui veut une propriété collective."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p01_q7",
          "type": "mcq",
          "prompt": "« Les moyens de production appartiennent à l'État dans le capitalisme. » Cette affirmation est :",
          "options": [
            "Fausse",
            "Vraie",
            "Vraie seulement en Angleterre",
            "Vraie seulement au XIXe siècle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la question 1 de l'activité d'application du cours."
        }
      ]
    },
    {
      "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p02",
      "order": 2,
      "title": "Du capitalisme marchand au capitalisme financier",
      "summary": "Commerce, puis industrie, puis banques et bourses.",
      "conceptExplanation": "Le capitalisme a pris plusieurs formes successives :\n\n1. Le capitalisme mercantile (ou marchand), à l'époque moderne (fin XVe-fin XVIIIe siècle). Il naît du commerce : cabotage, puis Grandes Découvertes. On recherche les produits tropicaux, l'or et les esclaves noirs (commerce triangulaire). Les acteurs sont les Vénitiens, Portugais, Espagnols, Hollandais, Anglais et Français, financés par les souverains et les familles nobles. Grandes places : Gênes, Venise, Liverpool, Nantes, Bordeaux.\n\n2. Le capitalisme industriel, à partir du XVIIIe siècle, avec le machinisme : on investit dans des usines et des machines.\n\n3. Le capitalisme financier : l'industrie demande de très gros capitaux, alors les capitalistes ont recours aux banques et aux bourses.\n\nLe capitalisme mercantile précède donc le capitalisme industriel.",
      "keyRule": "Ordre : capitalisme mercantile (commerce, XVe-XVIIIe) puis capitalisme industriel (machines, XVIIIe) puis capitalisme financier (banques, bourses).",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer une phrase",
        "statement": "Explique : « Le capitalisme mercantile a précédé le capitalisme industriel. »",
        "methodSteps": [
          "Le capitalisme mercantile repose sur le commerce (produits tropicaux, or, esclaves) dès les Grandes Découvertes.",
          "Les capitaux ainsi accumulés financent ensuite les machines et les usines à partir du XVIIIe siècle."
        ],
        "conclusion": "Le commerce a enrichi l'Europe avant que l'industrie ne se développe."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le capitalisme mercantile",
          "stepTheme": "Le capitalisme mercantile",
          "stepBadge": "Le capitalisme mercantile",
          "paragraphText": "Le capitalisme mercantile (ou marchand) repose sur le commerce ; il se développe à l'époque moderne.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p02_q1",
            "type": "mcq",
            "prompt": "Sur quelle activité repose le capitalisme mercantile ?",
            "options": [
              "L'industrie automobile",
              "Les bourses électroniques",
              "Le commerce",
              "L'agriculture vivrière"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Mercantile vient de « marchand »."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les produits recherchés",
          "stepTheme": "Les produits recherchés",
          "stepBadge": "Les produits recherchés",
          "paragraphText": "Le capitalisme mercantile recherchait les produits tropicaux, l'or et les esclaves noirs.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p02_q2",
            "type": "mcq",
            "prompt": "Lequel de ces produits était recherché par le capitalisme mercantile ?",
            "options": [
              "Le pétrole",
              "L'électricité",
              "L'aluminium",
              "L'or"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les esclaves noirs aussi, par le commerce triangulaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les grandes places",
          "stepTheme": "Les grandes places",
          "stepBadge": "Les grandes places",
          "paragraphText": "Gênes, Venise, Liverpool, Nantes et Bordeaux étaient les grandes places du capitalisme marchand.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p02_q3",
            "type": "mcq",
            "prompt": "Laquelle de ces villes était une grande place du capitalisme marchand ?",
            "options": [
              "Chicago",
              "Tokyo",
              "Nantes",
              "Abidjan"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Nantes était un grand port négrier."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le capitalisme industriel",
          "stepTheme": "Le capitalisme industriel",
          "stepBadge": "Le capitalisme industriel",
          "paragraphText": "Avec le machinisme, le capitalisme industriel se développe à partir du XVIIIe siècle.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p02_q4",
            "type": "mcq",
            "prompt": "À partir de quand le capitalisme industriel se met-il en place ?",
            "options": [
              "Au XIIe siècle",
              "À partir du XVIIIe siècle",
              "Après 1945",
              "Au Ier siècle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il s'appuie sur les machines et les usines."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le capitalisme financier",
          "stepTheme": "Le capitalisme financier",
          "stepBadge": "Le capitalisme financier",
          "paragraphText": "Pour réunir de gros capitaux, les industriels ont recours aux banques et aux bourses : c'est le capitalisme financier.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p02_q5",
            "type": "mcq",
            "prompt": "Sur quoi s'appuie le capitalisme financier ?",
            "options": [
              "Les banques et les bourses",
              "Les caravanes transsahariennes",
              "Les plantations seules",
              "Le troc"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'industrie a besoin de beaucoup d'argent."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Remettre dans l'ordre",
          "stepTheme": "Remettre dans l'ordre",
          "stepBadge": "Remettre dans l'ordre",
          "paragraphText": "Ordre des formes du capitalisme : mercantile, puis industriel, puis financier.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p02_q6",
            "type": "mcq",
            "prompt": "Quelle forme du capitalisme apparaît en premier ?",
            "options": [
              "Le capitalisme mercantile",
              "Le capitalisme industriel",
              "Le capitalisme financier",
              "Le capitalisme numérique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le commerce précède l'industrie."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Vrai ou faux",
          "stepTheme": "Vrai ou faux",
          "stepBadge": "Vrai ou faux",
          "paragraphText": "Le capitalisme industriel vient après le capitalisme mercantile, pas avant.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p02_q7",
            "type": "mcq",
            "prompt": "« Le capitalisme industriel précède le capitalisme mercantile. » Cette affirmation est :",
            "options": [
              "Vraie",
              "Fausse",
              "Vraie seulement en France",
              "Vraie seulement en Italie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'inverse : le commerce a financé l'industrie."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p02_q1",
          "type": "mcq",
          "prompt": "Sur quelle activité repose le capitalisme mercantile ?",
          "options": [
            "L'industrie automobile",
            "Les bourses électroniques",
            "Le commerce",
            "L'agriculture vivrière"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Mercantile vient de « marchand »."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p02_q2",
          "type": "mcq",
          "prompt": "Lequel de ces produits était recherché par le capitalisme mercantile ?",
          "options": [
            "Le pétrole",
            "L'électricité",
            "L'aluminium",
            "L'or"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les esclaves noirs aussi, par le commerce triangulaire."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p02_q3",
          "type": "mcq",
          "prompt": "Laquelle de ces villes était une grande place du capitalisme marchand ?",
          "options": [
            "Chicago",
            "Tokyo",
            "Nantes",
            "Abidjan"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Nantes était un grand port négrier."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p02_q4",
          "type": "mcq",
          "prompt": "À partir de quand le capitalisme industriel se met-il en place ?",
          "options": [
            "Au XIIe siècle",
            "À partir du XVIIIe siècle",
            "Après 1945",
            "Au Ier siècle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il s'appuie sur les machines et les usines."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p02_q5",
          "type": "mcq",
          "prompt": "Sur quoi s'appuie le capitalisme financier ?",
          "options": [
            "Les banques et les bourses",
            "Les caravanes transsahariennes",
            "Les plantations seules",
            "Le troc"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'industrie a besoin de beaucoup d'argent."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p02_q6",
          "type": "mcq",
          "prompt": "Quelle forme du capitalisme apparaît en premier ?",
          "options": [
            "Le capitalisme mercantile",
            "Le capitalisme industriel",
            "Le capitalisme financier",
            "Le capitalisme numérique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le commerce précède l'industrie."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p02_q7",
          "type": "mcq",
          "prompt": "« Le capitalisme industriel précède le capitalisme mercantile. » Cette affirmation est :",
          "options": [
            "Vraie",
            "Fausse",
            "Vraie seulement en France",
            "Vraie seulement en Italie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'inverse : le commerce a financé l'industrie."
        }
      ]
    },
    {
      "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p03",
      "order": 3,
      "title": "Les outils du capitalisme",
      "summary": "Monnaie, banques, sociétés anonymes et bourses.",
      "conceptExplanation": "1. La monnaie, moyen de paiement qui favorise les échanges. Trois formes :\n- la monnaie métallique : les pièces ; elle s'accroît au XIXe siècle grâce à l'or et à l'argent d'Amérique et d'Australie ;\n- la monnaie fiduciaire : les billets de banque ;\n- la monnaie scripturale : les chèques (aujourd'hui aussi la monnaie électronique, comme la carte bancaire).\n\n2. Les banques, qui gardent l'argent des clients et prêtent aux entreprises :\n- banques d'émission : elles émettent la monnaie (Banque d'Angleterre) ;\n- banques d'affaires : elles investissent à long et moyen terme dans les grandes entreprises (Rothschild) ;\n- banques de dépôt : elles collectent l'épargne et prêtent à court terme (Crédit lyonnais, 1863 ; Société générale, 1864).\n\n3. La société anonyme (SA) : son capital est divisé en actions. Le détenteur d'actions est un actionnaire ; il reçoit chaque année un dividende, une part du bénéfice. La SA peut aussi emprunter au public par des obligations ; les obligataires reçoivent un intérêt fixe. Actions et obligations sont des titres boursiers.\n\n4. La bourse des valeurs : marché où l'on achète et vend actions et obligations (Londres, New York à Wall Street, Tokyo).",
      "keyRule": "Monnaie (métallique, fiduciaire, scripturale), banques (émission, affaires, dépôt), société anonyme (actions, dividendes, obligations), bourse des valeurs.",
      "formulas": [],
      "workedExample": {
        "title": "Distinguer actionnaire et obligataire",
        "statement": "Awa possède des actions, Koffi des obligations d'une même SA. Que reçoivent-ils ?",
        "methodSteps": [
          "Awa est actionnaire : elle reçoit un dividende qui dépend des bénéfices.",
          "Koffi est obligataire : il a prêté de l'argent et reçoit un intérêt fixe, quelle que soit la situation de l'entreprise."
        ],
        "conclusion": "Le dividende varie, l'intérêt de l'obligation est fixe."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La monnaie fiduciaire",
          "stepTheme": "La monnaie fiduciaire",
          "stepBadge": "La monnaie fiduciaire",
          "paragraphText": "La monnaie fiduciaire est formée des billets de banque.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p03_q1",
            "type": "mcq",
            "prompt": "Le billet de banque est une monnaie :",
            "options": [
              "Scripturale",
              "Métallique",
              "Fiduciaire",
              "Électronique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La monnaie scripturale, ce sont les chèques."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La monnaie scripturale",
          "stepTheme": "La monnaie scripturale",
          "stepBadge": "La monnaie scripturale",
          "paragraphText": "La monnaie scripturale existe sous forme d'écritures, comme les chèques.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p03_q2",
            "type": "mcq",
            "prompt": "Quel moyen de paiement est une monnaie scripturale ?",
            "options": [
              "La pièce de 100 F",
              "Le billet de 10 000 F",
              "Le lingot d'or",
              "Le chèque"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Scriptural vient du latin « écrire »."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La banque de dépôt",
          "stepTheme": "La banque de dépôt",
          "stepBadge": "La banque de dépôt",
          "paragraphText": "Les banques de dépôt collectent l'épargne des petits épargnants et la prêtent à court terme.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p03_q3",
            "type": "mcq",
            "prompt": "Que font les banques de dépôt ?",
            "options": [
              "Elles fabriquent les billets de banque",
              "Elles achètent des usines entières",
              "Elles collectent l'épargne et prêtent à court terme",
              "Elles fixent les impôts"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Exemples : Crédit lyonnais (1863), Société générale (1864)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'action",
          "stepTheme": "L'action",
          "stepBadge": "L'action",
          "paragraphText": "Le capital d'une société anonyme est divisé en parts égales appelées actions ; leur détenteur est un actionnaire.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p03_q4",
            "type": "mcq",
            "prompt": "Comment appelle-t-on le détenteur d'actions d'une société anonyme ?",
            "options": [
              "Un obligataire",
              "Un prolétaire",
              "Un banquier d'émission",
              "Un actionnaire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Il est copropriétaire de l'entreprise."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le dividende",
          "stepTheme": "Le dividende",
          "stepBadge": "Le dividende",
          "paragraphText": "Chaque année, l'actionnaire reçoit une part du bénéfice appelée dividende.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p03_q5",
            "type": "mcq",
            "prompt": "Comment s'appelle la part du bénéfice reçue par un actionnaire ?",
            "options": [
              "Le dividende",
              "L'obligation",
              "Le salaire",
              "La patente"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il dépend du nombre d'actions et des bénéfices."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L'obligataire",
          "stepTheme": "L'obligataire",
          "stepBadge": "L'obligataire",
          "paragraphText": "L'obligataire a prêté de l'argent à la société en achetant une obligation ; il reçoit un intérêt fixe. Ce n'est pas un actionnaire.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p03_q6",
            "type": "mcq",
            "prompt": "« Le détenteur d'une obligation est appelé un actionnaire. » Cette affirmation est :",
            "options": [
              "Vraie",
              "Fausse",
              "Vraie seulement à Londres",
              "Vraie seulement pour les banques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il s'appelle un obligataire."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "La bourse des valeurs",
          "stepTheme": "La bourse des valeurs",
          "stepBadge": "La bourse des valeurs",
          "paragraphText": "La bourse des valeurs est un marché financier où l'on achète et vend actions et obligations, comme à Wall Street (New York).",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p03_q7",
            "type": "mcq",
            "prompt": "Qu'est-ce que la bourse des valeurs ?",
            "options": [
              "Une banque qui émet la monnaie",
              "Un marché financier d'actions et d'obligations",
              "Un sac pour ranger l'argent",
              "Un impôt sur les entreprises"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les prix y dépendent de l'offre et de la demande."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p03_q1",
          "type": "mcq",
          "prompt": "Le billet de banque est une monnaie :",
          "options": [
            "Scripturale",
            "Métallique",
            "Fiduciaire",
            "Électronique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La monnaie scripturale, ce sont les chèques."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p03_q2",
          "type": "mcq",
          "prompt": "Quel moyen de paiement est une monnaie scripturale ?",
          "options": [
            "La pièce de 100 F",
            "Le billet de 10 000 F",
            "Le lingot d'or",
            "Le chèque"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Scriptural vient du latin « écrire »."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p03_q3",
          "type": "mcq",
          "prompt": "Que font les banques de dépôt ?",
          "options": [
            "Elles fabriquent les billets de banque",
            "Elles achètent des usines entières",
            "Elles collectent l'épargne et prêtent à court terme",
            "Elles fixent les impôts"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Exemples : Crédit lyonnais (1863), Société générale (1864)."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p03_q4",
          "type": "mcq",
          "prompt": "Comment appelle-t-on le détenteur d'actions d'une société anonyme ?",
          "options": [
            "Un obligataire",
            "Un prolétaire",
            "Un banquier d'émission",
            "Un actionnaire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Il est copropriétaire de l'entreprise."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p03_q5",
          "type": "mcq",
          "prompt": "Comment s'appelle la part du bénéfice reçue par un actionnaire ?",
          "options": [
            "Le dividende",
            "L'obligation",
            "Le salaire",
            "La patente"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il dépend du nombre d'actions et des bénéfices."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p03_q6",
          "type": "mcq",
          "prompt": "« Le détenteur d'une obligation est appelé un actionnaire. » Cette affirmation est :",
          "options": [
            "Vraie",
            "Fausse",
            "Vraie seulement à Londres",
            "Vraie seulement pour les banques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il s'appelle un obligataire."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p03_q7",
          "type": "mcq",
          "prompt": "Qu'est-ce que la bourse des valeurs ?",
          "options": [
            "Une banque qui émet la monnaie",
            "Un marché financier d'actions et d'obligations",
            "Un sac pour ranger l'argent",
            "Un impôt sur les entreprises"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les prix y dépendent de l'offre et de la demande."
        }
      ]
    },
    {
      "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p04",
      "order": 4,
      "title": "Concentration et organisation du travail",
      "summary": "Cartels, trusts, taylorisme et standardisation.",
      "conceptExplanation": "1. La concentration des entreprises. Pour résister à la concurrence, les entreprises se regroupent :\n- la concentration horizontale : entente entre entreprises d'un même secteur (un cartel), pour stabiliser le marché et maintenir des prix rémunérateurs ;\n- la concentration verticale : fusion d'entreprises aux activités complémentaires, de la matière première jusqu'à la vente (un trust). Le plus célèbre est la Standard Oil de Rockefeller, qui contrôlait le marché du pétrole ;\n- la concentration géographique : usines installées près des sources d'énergie ou de matières premières (les « pays noirs » des bassins houillers anglais).\n\n2. L'amélioration des moyens de production. La rationalisation du travail élimine tout ce qui freine la productivité :\n- la taylorisation (de l'ingénieur américain Frederick Taylor, fin XIXe-début XXe siècle) : le travail est divisé en tâches simples et répétitives ; elle prépare le travail à la chaîne, appliqué dans les abattoirs de Chicago puis dans l'industrie automobile ;\n- la standardisation : fabriquer en grandes séries des objets identiques, ce qui baisse le prix de revient ;\n- plus tard, la robotisation.",
      "keyRule": "Cartel = concentration horizontale (même produit). Trust = concentration verticale (activités complémentaires). Taylorisation = division du travail en tâches ; standardisation = objets identiques en série.",
      "formulas": [],
      "workedExample": {
        "title": "Classer une concentration",
        "statement": "Une compagnie possède des puits de pétrole, des raffineries, des camions-citernes et des stations-service. Quel type de concentration ?",
        "methodSteps": [
          "Ces activités sont différentes mais complémentaires, de l'extraction à la vente.",
          "C'est une concentration verticale."
        ],
        "conclusion": "C'est un trust, comme la Standard Oil de Rockefeller."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le cartel",
          "stepTheme": "Le cartel",
          "stepBadge": "Le cartel",
          "paragraphText": "Le cartel est une entente entre entreprises d'un même secteur d'activité : c'est une concentration horizontale.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p04_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'un cartel ?",
            "options": [
              "Une entente entre entreprises d'un même secteur",
              "Une fusion d'activités complémentaires",
              "Une usine près d'une mine",
              "Une banque d'émission"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le but : stabiliser le marché et les prix."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le trust",
          "stepTheme": "Le trust",
          "stepBadge": "Le trust",
          "paragraphText": "Le trust réunit des entreprises aux activités complémentaires, de la production à la vente : c'est une concentration verticale.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p04_q2",
            "type": "mcq",
            "prompt": "Quel type de concentration le trust représente-t-il ?",
            "options": [
              "La concentration horizontale",
              "La concentration géographique",
              "La décentralisation",
              "La concentration verticale"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Il cherche à éliminer la concurrence."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La Standard Oil",
          "stepTheme": "La Standard Oil",
          "stepBadge": "La Standard Oil",
          "paragraphText": "Le plus célèbre trust fut la Standard Oil de Rockefeller, qui contrôlait le marché du pétrole.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p04_q3",
            "type": "mcq",
            "prompt": "Qui dirigeait la Standard Oil ?",
            "options": [
              "Karl Marx",
              "Taylor",
              "Rockefeller",
              "Bismarck"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Elle contrôlait le pétrole de l'extraction à la vente."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La concentration géographique",
          "stepTheme": "La concentration géographique",
          "stepBadge": "La concentration géographique",
          "paragraphText": "La concentration géographique installe les usines près des sources d'énergie ou de matières premières, comme les pays noirs anglais.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p04_q4",
            "type": "mcq",
            "prompt": "Où une concentration géographique installe-t-elle les usines ?",
            "options": [
              "Loin de toute ressource",
              "Uniquement dans les capitales",
              "Près des sources d'énergie ou de matières premières",
              "Sur les îles désertes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les pays noirs étaient près des mines de charbon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La taylorisation",
          "stepTheme": "La taylorisation",
          "stepBadge": "La taylorisation",
          "paragraphText": "La taylorisation divise le travail en tâches simples et complémentaires pour augmenter le rendement.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p04_q5",
            "type": "mcq",
            "prompt": "En quoi consiste la taylorisation ?",
            "options": [
              "Diviser le travail en tâches simples",
              "Fabriquer à la main chaque objet",
              "Supprimer toutes les machines",
              "Réduire le nombre de produits"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle porte le nom de l'ingénieur américain Frederick Taylor."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La standardisation",
          "stepTheme": "La standardisation",
          "stepBadge": "La standardisation",
          "paragraphText": "La standardisation est la fabrication d'objets identiques en grandes séries, qui réduit le prix de revient.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p04_q6",
            "type": "mcq",
            "prompt": "Qu'est-ce que la standardisation ?",
            "options": [
              "Spécialiser chaque ouvrier dans une tâche",
              "Regrouper des banques",
              "Fixer un salaire minimum",
              "Fabriquer des objets identiques en grande série"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La spécialisation des tâches, c'est la taylorisation."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Classer une entente",
          "stepTheme": "Classer une entente",
          "stepBadge": "Classer une entente",
          "paragraphText": "Plusieurs mines de charbon s'entendent pour fixer le même prix de vente : elles forment un cartel.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p04_q7",
            "type": "mcq",
            "prompt": "Des mines de charbon s'entendent pour vendre au même prix. Comment s'appelle ce regroupement ?",
            "options": [
              "Un trust",
              "Un cartel",
              "Une banque d'affaires",
              "Une société de dépôt"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Même secteur = concentration horizontale."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p04_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un cartel ?",
          "options": [
            "Une entente entre entreprises d'un même secteur",
            "Une fusion d'activités complémentaires",
            "Une usine près d'une mine",
            "Une banque d'émission"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le but : stabiliser le marché et les prix."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p04_q2",
          "type": "mcq",
          "prompt": "Quel type de concentration le trust représente-t-il ?",
          "options": [
            "La concentration horizontale",
            "La concentration géographique",
            "La décentralisation",
            "La concentration verticale"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Il cherche à éliminer la concurrence."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p04_q3",
          "type": "mcq",
          "prompt": "Qui dirigeait la Standard Oil ?",
          "options": [
            "Karl Marx",
            "Taylor",
            "Rockefeller",
            "Bismarck"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Elle contrôlait le pétrole de l'extraction à la vente."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p04_q4",
          "type": "mcq",
          "prompt": "Où une concentration géographique installe-t-elle les usines ?",
          "options": [
            "Loin de toute ressource",
            "Uniquement dans les capitales",
            "Près des sources d'énergie ou de matières premières",
            "Sur les îles désertes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les pays noirs étaient près des mines de charbon."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p04_q5",
          "type": "mcq",
          "prompt": "En quoi consiste la taylorisation ?",
          "options": [
            "Diviser le travail en tâches simples",
            "Fabriquer à la main chaque objet",
            "Supprimer toutes les machines",
            "Réduire le nombre de produits"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle porte le nom de l'ingénieur américain Frederick Taylor."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p04_q6",
          "type": "mcq",
          "prompt": "Qu'est-ce que la standardisation ?",
          "options": [
            "Spécialiser chaque ouvrier dans une tâche",
            "Regrouper des banques",
            "Fixer un salaire minimum",
            "Fabriquer des objets identiques en grande série"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La spécialisation des tâches, c'est la taylorisation."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p04_q7",
          "type": "mcq",
          "prompt": "Des mines de charbon s'entendent pour vendre au même prix. Comment s'appelle ce regroupement ?",
          "options": [
            "Un trust",
            "Un cartel",
            "Une banque d'affaires",
            "Une société de dépôt"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Même secteur = concentration horizontale."
        }
      ]
    },
    {
      "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p05",
      "order": 5,
      "title": "Bourgeoisie et prolétariat",
      "summary": "Une société divisée en deux classes opposées.",
      "conceptExplanation": "Le capitalisme fait naître deux classes sociales opposées :\n\n1. La bourgeoisie : les riches propriétaires, détenteurs de capitaux et patrons d'entreprises. Ils sont peu nombreux et vivent dans le confort.\n\n2. Le prolétariat : les ouvriers, qui ne possèdent que leur force de travail. Ils sont les plus nombreux et ne profitent pas des bénéfices de la croissance. Leurs conditions de vie sont très dures :\n- salaires faibles ;\n- journées de travail de 15 à 16 heures ;\n- logements surpeuplés et insalubres ;\n- nourriture médiocre, maladies, alcoolisme ;\n- travail des enfants.\n\nLes budgets le montrent (1914) : une famille d'ouvrier mineur dispose d'environ 2 500 francs par an et en consacre plus de la moitié (52,5 %) à la nourriture ; une famille bourgeoise dispose d'environ 17 000 francs et peut dépenser beaucoup en loisirs, éducation et transports.",
      "keyRule": "Bourgeoisie = propriétaires des moyens de production, minoritaires et riches. Prolétariat = ouvriers, nombreux, pauvres, aux conditions de vie très dures.",
      "formulas": [],
      "workedExample": {
        "title": "Lire un budget",
        "statement": "En 1914, une famille de mineur consacre 52,5 % de son budget à la nourriture, une famille bourgeoise 21,8 %. Que montrent ces chiffres ?",
        "methodSteps": [
          "L'ouvrier dépense plus de la moitié de son petit revenu pour simplement manger.",
          "Le bourgeois, plus riche, garde une grande part pour les loisirs, l'éducation et les domestiques."
        ],
        "conclusion": "Ces chiffres montrent de profondes inégalités entre bourgeoisie et prolétariat."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La bourgeoisie",
          "stepTheme": "La bourgeoisie",
          "stepBadge": "La bourgeoisie",
          "paragraphText": "La bourgeoisie regroupe les riches propriétaires, détenteurs de capitaux et patrons d'entreprises.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p05_q1",
            "type": "mcq",
            "prompt": "Qui compose la bourgeoisie ?",
            "options": [
              "Les ouvriers des usines",
              "Les riches propriétaires et patrons",
              "Les paysans sans terre",
              "Les esclaves affranchis"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle possède les moyens de production."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le prolétariat",
          "stepTheme": "Le prolétariat",
          "stepBadge": "Le prolétariat",
          "paragraphText": "Le prolétariat est formé des ouvriers, qui ne possèdent que leur force de travail.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p05_q2",
            "type": "mcq",
            "prompt": "Que possèdent les prolétaires ?",
            "options": [
              "Les usines et les machines",
              "Des actions en bourse",
              "Des banques d'affaires",
              "Seulement leur force de travail"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ils vendent leur travail contre un salaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Nombreux et pauvres",
          "stepTheme": "Nombreux et pauvres",
          "stepBadge": "Nombreux et pauvres",
          "paragraphText": "Les prolétaires sont les plus nombreux, mais ils ne profitent pas des bénéfices de la croissance.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p05_q3",
            "type": "mcq",
            "prompt": "Quelle classe sociale est la plus nombreuse au XIXe siècle ?",
            "options": [
              "Le prolétariat",
              "La bourgeoisie",
              "La noblesse",
              "Le clergé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La bourgeoisie est minoritaire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Des journées interminables",
          "stepTheme": "Des journées interminables",
          "stepBadge": "Des journées interminables",
          "paragraphText": "Les ouvriers du XIXe siècle travaillent souvent 15 à 16 heures par jour.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p05_q4",
            "type": "mcq",
            "prompt": "Combien d'heures par jour un ouvrier travaillait-il souvent au XIXe siècle ?",
            "options": [
              "4 à 5 heures",
              "8 heures",
              "15 à 16 heures",
              "1 heure"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les 8 heures seront une conquête des luttes ouvrières."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le budget d'un mineur",
          "stepTheme": "Le budget d'un mineur",
          "stepBadge": "Le budget d'un mineur",
          "paragraphText": "En 1914, une famille de mineur consacre 52,5 % de son budget annuel (2 500 F) à la nourriture.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p05_q5",
            "type": "mcq",
            "prompt": "Quelle part de son budget une famille de mineur consacre-t-elle à la nourriture en 1914 ?",
            "options": [
              "Moins d'un dixième",
              "La totalité",
              "Rien",
              "Plus de la moitié"
            ],
            "correctAnswerIndex": 3,
            "explanation": "52,5 % : il reste très peu pour le reste."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Des logements insalubres",
          "stepTheme": "Des logements insalubres",
          "stepBadge": "Des logements insalubres",
          "paragraphText": "Les ouvriers vivent dans des logements surpeuplés et insalubres, avec une nourriture médiocre et beaucoup de maladies.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p05_q6",
            "type": "mcq",
            "prompt": "Lequel de ces éléments décrit les conditions de vie ouvrières au XIXe siècle ?",
            "options": [
              "Des vacances payées chaque été",
              "Des domestiques à la maison",
              "Des logements surpeuplés et insalubres",
              "Des journées de 6 heures"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les conditions qui provoquent les luttes ouvrières."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Qui est pauvre ?",
          "stepTheme": "Qui est pauvre ?",
          "stepBadge": "Qui est pauvre ?",
          "paragraphText": "Ce sont les prolétaires, et non les bourgeois, qui sont nombreux, pauvres et travaillent dans des conditions pénibles.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p05_q7",
            "type": "mcq",
            "prompt": "« Nombreux et pauvres, les bourgeois vivent et travaillent dans des conditions extrêmement pénibles. » Cette affirmation est :",
            "options": [
              "Vraie",
              "Fausse",
              "Vraie seulement en France",
              "Vraie seulement en 1914"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il faut remplacer « bourgeois » par « prolétaires »."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p05_q1",
          "type": "mcq",
          "prompt": "Qui compose la bourgeoisie ?",
          "options": [
            "Les ouvriers des usines",
            "Les riches propriétaires et patrons",
            "Les paysans sans terre",
            "Les esclaves affranchis"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle possède les moyens de production."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p05_q2",
          "type": "mcq",
          "prompt": "Que possèdent les prolétaires ?",
          "options": [
            "Les usines et les machines",
            "Des actions en bourse",
            "Des banques d'affaires",
            "Seulement leur force de travail"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ils vendent leur travail contre un salaire."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p05_q3",
          "type": "mcq",
          "prompt": "Quelle classe sociale est la plus nombreuse au XIXe siècle ?",
          "options": [
            "Le prolétariat",
            "La bourgeoisie",
            "La noblesse",
            "Le clergé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La bourgeoisie est minoritaire."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p05_q4",
          "type": "mcq",
          "prompt": "Combien d'heures par jour un ouvrier travaillait-il souvent au XIXe siècle ?",
          "options": [
            "4 à 5 heures",
            "8 heures",
            "15 à 16 heures",
            "1 heure"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les 8 heures seront une conquête des luttes ouvrières."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p05_q5",
          "type": "mcq",
          "prompt": "Quelle part de son budget une famille de mineur consacre-t-elle à la nourriture en 1914 ?",
          "options": [
            "Moins d'un dixième",
            "La totalité",
            "Rien",
            "Plus de la moitié"
          ],
          "correctAnswerIndex": 3,
          "explanation": "52,5 % : il reste très peu pour le reste."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p05_q6",
          "type": "mcq",
          "prompt": "Lequel de ces éléments décrit les conditions de vie ouvrières au XIXe siècle ?",
          "options": [
            "Des vacances payées chaque été",
            "Des domestiques à la maison",
            "Des logements surpeuplés et insalubres",
            "Des journées de 6 heures"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les conditions qui provoquent les luttes ouvrières."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p05_q7",
          "type": "mcq",
          "prompt": "« Nombreux et pauvres, les bourgeois vivent et travaillent dans des conditions extrêmement pénibles. » Cette affirmation est :",
          "options": [
            "Vraie",
            "Fausse",
            "Vraie seulement en France",
            "Vraie seulement en 1914"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il faut remplacer « bourgeois » par « prolétaires »."
        }
      ]
    },
    {
      "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p06",
      "order": 6,
      "title": "Socialisme, syndicats et crises",
      "summary": "Les conséquences politiques et économiques du capitalisme.",
      "conceptExplanation": "1. Les conséquences politiques : la naissance du socialisme. Face aux inégalités, des penseurs veulent remplacer le capitalisme par le socialisme, une doctrine qui veut supprimer les inégalités sociales en confiant les moyens de production à la collectivité.\n- Les premiers socialistes : l'Anglais Robert Owen, les Français Saint-Simon et Pierre-Joseph Proudhon.\n- Karl Marx (avec Friedrich Engels) développe le socialisme scientifique. Dans le Manifeste du Parti communiste (1848), il lance : « Prolétaires de tous les pays, unissez-vous ! » et décrit la lutte des classes.\n\n2. Le syndicalisme : les ouvriers s'organisent en syndicats, font grève et créent des caisses de solidarité. Ils obtiennent peu à peu : la journée de 8 heures, des hausses de salaire, le droit d'association et de grève, les congés payés, la fin du travail des enfants, la fête du Travail (1er mai), des assurances sociales.\n\n3. Les conséquences économiques : l'économie capitaliste alterne périodes de prospérité (consommation forte, bénéfices importants) et crises (surproduction, faillites, chômage). Exemples : 1815, 1873, 1929.\n\nConclusion : l'essor du capitalisme pousse l'Europe à chercher des débouchés dans le monde, ce qui mène à l'impérialisme.",
      "keyRule": "Conséquences : politiques (socialisme de Marx, syndicalisme, acquis sociaux), sociales (lutte des classes), économiques (crises de surproduction : 1873, 1929).",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la portée d'un texte",
        "statement": "Marx écrit que l'industrie concentre les prolétaires en masses, que « leur force augmente et ils en prennent davantage conscience ». Quelle portée ces propos ont-ils ?",
        "methodSteps": [
          "Rassemblés dans les usines, les ouvriers prennent conscience de leur nombre et de leur force.",
          "Ils s'unissent dans des syndicats, font grève et obtiennent des droits (8 heures, congés, fin du travail des enfants)."
        ],
        "conclusion": "Ces idées ont encouragé l'organisation et les victoires de la classe ouvrière."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le socialisme",
          "stepTheme": "Le socialisme",
          "stepBadge": "Le socialisme",
          "paragraphText": "Le socialisme est une doctrine qui veut supprimer les inégalités sociales en confiant les moyens de production à la collectivité.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p06_q1",
            "type": "mcq",
            "prompt": "Que veut le socialisme ?",
            "options": [
              "Supprimer les inégalités par la propriété collective",
              "Renforcer la propriété privée",
              "Supprimer tous les ouvriers",
              "Interdire les syndicats"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il s'oppose au capitalisme libéral."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Karl Marx",
          "stepTheme": "Karl Marx",
          "stepBadge": "Karl Marx",
          "paragraphText": "Karl Marx a lancé l'appel : « Prolétaires de tous les pays, unissez-vous ! » dans le Manifeste du Parti communiste de 1848.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p06_q2",
            "type": "mcq",
            "prompt": "Qui a lancé l'appel « Prolétaires de tous les pays, unissez-vous ! » ?",
            "options": [
              "Karl Marx",
              "Rockefeller",
              "Frederick Taylor",
              "Jules Ferry"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le Manifeste date de 1848 (et non 1948, comme l'écrit une situation du cours)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les premiers socialistes",
          "stepTheme": "Les premiers socialistes",
          "stepBadge": "Les premiers socialistes",
          "paragraphText": "Avant Marx, l'Anglais Robert Owen et les Français Saint-Simon et Proudhon ont lancé les idées socialistes.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p06_q3",
            "type": "mcq",
            "prompt": "Lequel de ces penseurs est un des premiers socialistes ?",
            "options": [
              "Rockefeller",
              "Robert Owen",
              "Bismarck",
              "James Watt"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Marx a ensuite donné de l'ampleur à ces idées."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les acquis ouvriers",
          "stepTheme": "Les acquis ouvriers",
          "stepBadge": "Les acquis ouvriers",
          "paragraphText": "Grâce à leurs luttes, les ouvriers obtiennent la journée de 8 heures, les congés payés et la fin du travail des enfants.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p06_q4",
            "type": "mcq",
            "prompt": "Lequel de ces droits les ouvriers ont-ils obtenu grâce à leurs luttes ?",
            "options": [
              "La journée de 16 heures",
              "Le travail des enfants",
              "La journée de 8 heures",
              "La suppression des salaires"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ils ont aussi obtenu le droit de grève."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La crise de surproduction",
          "stepTheme": "La crise de surproduction",
          "stepBadge": "La crise de surproduction",
          "paragraphText": "Une crise de surproduction survient quand on produit plus que ce que les consommateurs peuvent acheter : faillites et chômage suivent.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p06_q5",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une crise de surproduction ?",
            "options": [
              "Une pénurie de tous les produits",
              "Une hausse des salaires",
              "Une baisse du chômage",
              "Une production supérieure à ce qui peut être vendu"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Exemples : 1873, 1929."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Classer les conséquences",
          "stepTheme": "Classer les conséquences",
          "stepBadge": "Classer les conséquences",
          "paragraphText": "Naissance du socialisme et du syndicalisme : conséquences politiques. Division en classes : conséquence sociale. Crise de surproduction et faillites : conséquences économiques.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p06_q6",
            "type": "mcq",
            "prompt": "Dans quelle catégorie ranger « la faillite des entreprises » ?",
            "options": [
              "Conséquences politiques",
              "Conséquences sociales",
              "Conséquences économiques",
              "Fondements du capitalisme"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'activité d'application n°2 du cours."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Une économie irrégulière",
          "stepTheme": "Une économie irrégulière",
          "stepBadge": "Une économie irrégulière",
          "paragraphText": "L'économie capitaliste ne suit pas un rythme régulier : elle alterne prospérité et crises.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p06_q7",
            "type": "mcq",
            "prompt": "Comment évolue l'économie capitaliste selon le cours ?",
            "options": [
              "Elle progresse toujours sans crise",
              "Elle ne change jamais",
              "Elle recule toujours",
              "Elle alterne prospérité et crises"
            ],
            "correctAnswerIndex": 3,
            "explanation": "D'où l'idée que « les crises sont inhérentes au capitalisme »."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p06_q1",
          "type": "mcq",
          "prompt": "Que veut le socialisme ?",
          "options": [
            "Supprimer les inégalités par la propriété collective",
            "Renforcer la propriété privée",
            "Supprimer tous les ouvriers",
            "Interdire les syndicats"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il s'oppose au capitalisme libéral."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p06_q2",
          "type": "mcq",
          "prompt": "Qui a lancé l'appel « Prolétaires de tous les pays, unissez-vous ! » ?",
          "options": [
            "Karl Marx",
            "Rockefeller",
            "Frederick Taylor",
            "Jules Ferry"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le Manifeste date de 1848 (et non 1948, comme l'écrit une situation du cours)."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p06_q3",
          "type": "mcq",
          "prompt": "Lequel de ces penseurs est un des premiers socialistes ?",
          "options": [
            "Rockefeller",
            "Robert Owen",
            "Bismarck",
            "James Watt"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Marx a ensuite donné de l'ampleur à ces idées."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p06_q4",
          "type": "mcq",
          "prompt": "Lequel de ces droits les ouvriers ont-ils obtenu grâce à leurs luttes ?",
          "options": [
            "La journée de 16 heures",
            "Le travail des enfants",
            "La journée de 8 heures",
            "La suppression des salaires"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ils ont aussi obtenu le droit de grève."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p06_q5",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une crise de surproduction ?",
          "options": [
            "Une pénurie de tous les produits",
            "Une hausse des salaires",
            "Une baisse du chômage",
            "Une production supérieure à ce qui peut être vendu"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Exemples : 1873, 1929."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p06_q6",
          "type": "mcq",
          "prompt": "Dans quelle catégorie ranger « la faillite des entreprises » ?",
          "options": [
            "Conséquences politiques",
            "Conséquences sociales",
            "Conséquences économiques",
            "Fondements du capitalisme"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'activité d'application n°2 du cours."
        },
        {
          "id": "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p06_q7",
          "type": "mcq",
          "prompt": "Comment évolue l'économie capitaliste selon le cours ?",
          "options": [
            "Elle progresse toujours sans crise",
            "Elle ne change jamais",
            "Elle recule toujours",
            "Elle alterne prospérité et crises"
          ],
          "correctAnswerIndex": 3,
          "explanation": "D'où l'idée que « les crises sont inhérentes au capitalisme »."
        }
      ]
    }
  ]
};
