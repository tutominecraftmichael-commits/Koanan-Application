import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : TCDE — Thème : Chimie Organique — Titre : Les Alcools
export const CHIMIE_TLE_CD_L01_ALCOOLS: CurriculumChapter = {
  "id": "terminale_c_chimie_l01_alcools",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 1,
  "title": "Leçon 1 : Les Alcools",
  "summary": "Structure des alcools, trois classes, nomenclature IUPAC, fermentation, hydratation des alcènes selon Markovnikov, réaction au sodium, déshydratations et oxydation ménagée.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : TCDE – Chimie Organique – Les Alcools)",
  "points": [
    {
      "id": "terminale_c_chimie_l01_alcools_p01",
      "order": 1,
      "title": "Définition, formule brute générale et les trois classes d'alcools",
      "summary": "Groupe hydroxyle -OH fixé sur un carbone tétraédrique, formule brute CnH(2n+2)O, et distinction fondamentale des alcools primaires, secondaires et tertiaires.",
      "conceptExplanation": "Un alcool est un composé organique oxygéné possédant un groupe hydroxyle (-OH) lié à un atome de carbone tétraédrique (carbone saturé lié à 4 atomes ou groupes par des liaisons simples), appelé carbone fonctionnel.\n\n1. Formules générales :\n- Formule générale : R-OH (où R est un groupement alkyle saturé acyclique).\n- Formule brute générale des monoalcools saturés : CnH(2n+2)O avec n >= 1.\n- Masse molaire : M = 14n + 18 (en g/mol).\n\n2. Les trois classes d'alcools :\nLa classe d'un alcool est déterminée par le nombre de groupements alkyles (ou d'atomes de carbone) directement liés au carbone fonctionnel :\n- Alcool primaire : le carbone fonctionnel est lié à 0 ou 1 seul groupement alkyle (R-CH2-OH). Le méthanol CH3-OH est assimilé à un alcool primaire.\n- Alcool secondaire : le carbone fonctionnel est lié à 2 groupements alkyles (R1-CH(OH)-R2).\n- Alcool tertiaire : le carbone fonctionnel est lié à 3 groupements alkyles (R1-C(OH)(R2)-R3). Le carbone ne porte aucun atome d'hydrogène.",
      "keyRule": "Pour déterminer la classe d'un alcool, compte le nombre d'atomes de carbone directement attachés au carbone qui porte le groupe -OH : 1 carbone = primaire, 2 carbones = secondaire, 3 carbones = tertiaire.",
      "formulas": [
        {
          "name": "Formule brute d'un monoalcool saturé",
          "formula": "\\mathrm{C_n H_{2n+2} O} \\quad (n \\ge 1)",
          "note": "Masse molaire M = 14n + 18 g/mol"
        }
      ],
      "workedExample": {
        "title": "Identification de la classe d'un alcool ramifié",
        "statement": "On considère le 2-méthylbutan-2-ol de formule CH3-C(CH3)(OH)-CH2-CH3. Quelle est sa classe et sa formule brute ?",
        "methodSteps": [
          "Étape 1 : Repérer le carbone fonctionnel : c'est le carbone n°2 qui porte le groupe -OH.",
          "Étape 2 : Compter les carbones voisins liés à ce carbone n°2 : il est relié au CH3 à gauche, au CH3 en haut (ramification) et au CH2 à droite, soit 3 atomes de carbone.",
          "Étape 3 : Conclure sur la classe : le carbone fonctionnel est lié à 3 groupes alkyles, c'est donc un alcool tertiaire.",
          "Étape 4 : Déterminer la formule brute : il compte 5 atomes de carbone (n = 5), donc C5H(2*5+2)O = C5H12O."
        ],
        "conclusion": "Le 2-méthylbutan-2-ol est un alcool tertiaire de formule brute C5H12O."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau comparatif des trois classes d'alcools",
        "tableData": {
          "headers": [
            "Classe",
            "Formule générale",
            "Liaisons du carbone fonctionnel",
            "Exemple type",
            "Nom IUPAC"
          ],
          "rows": [
            [
              "Primaire",
              "R-CH2-OH",
              "Lié à 1 groupe R et 2 atomes H",
              "CH3-CH2-OH",
              "Éthanol"
            ],
            [
              "Secondaire",
              "R1-CH(OH)-R2",
              "Lié à 2 groupes R et 1 atome H",
              "CH3-CH(OH)-CH3",
              "Propan-2-ol"
            ],
            [
              "Tertiaire",
              "R1-C(OH)(R2)-R3",
              "Lié à 3 groupes R et 0 atome H",
              "(CH3)3C-OH",
              "2-méthylpropan-2-ol"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Carbone tétraédrique et groupe hydroxyle",
          "stepTheme": "Structure des alcools",
          "stepBadge": "Définition",
          "paragraphText": "Dans un alcool, le groupe hydroxyle -OH est obligatoirement greffé sur un carbone tétraédrique (saturé, sans double liaison). Si le groupe -OH est fixé sur un cycle aromatique (benzène), le composé est un phénol et non un alcool. Si le groupe -OH est fixé sur un carbone sp2 engagé dans une double liaison C=C, c'est un énol instable qui se tautomérise en composé carbonylé.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p01_q1",
            "type": "mcq",
            "prompt": "Parmi les espèces suivantes, laquelle constitue un véritable alcool selon la définition officielle du programme de Terminale ?",
            "options": [
              "C6H5-OH (le groupe -OH est directement greffé sur le noyau benzénique).",
              "CH3-CH=CH-OH (le groupe -OH est porté par un carbone engagé dans une double liaison).",
              "C6H5-CH2-OH (le groupe -OH est porté par un carbone tétraédrique lié au noyau benzénique).",
              "CH3-CO-OH (le groupe -OH est directement fixé sur un carbone portant une fonction carbonyle C=O)."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Dans C6H5-CH2-OH (alcool benzylique), le carbone portant le groupe -OH est tétraédrique (-CH2-), ce qui en fait un alcool primaire authentique. C6H5-OH est un phénol, CH3-CH=CH-OH est un énol et CH3-COOH est un acide carboxylique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Formule brute générale et calcul stœchiométrique de masse molaire",
          "stepTheme": "Formule brute",
          "stepBadge": "Formule CnH(2n+2)O",
          "paragraphText": "Tout monoalcool saturé non cyclique répond à la formule brute CnH(2n+2)O. Sa masse molaire moléculaire vaut M = 12n + (2n+2)*1 + 16 = 14n + 18 (en g/mol). La teneur centésimale massique en oxygène %O est donnée par : %O = (16 / M) * 100.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p01_q2",
            "type": "mcq",
            "prompt": "Un monoalcool saturé A contient en masse 21,62 % d'oxygène. Sachant que M(C)=12 g/mol, M(H)=1 g/mol et M(O)=16 g/mol, quelle est sa formule brute exacte ?",
            "options": [
              "C2H6O (M = 46 g/mol)",
              "C3H8O (M = 60 g/mol)",
              "C4H10O (M = 74 g/mol)",
              "C5H12O (M = 88 g/mol)"
            ],
            "correctAnswerIndex": 2,
            "explanation": "M = 1600 / %O = 1600 / 21,62 = 74 g/mol. Or M = 14n + 18, d'où 14n = 74 - 18 = 56, soit n = 56/14 = 4. La formule brute est donc C4H10O."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Identification des alcools primaires",
          "stepTheme": "Classes d'alcools",
          "stepBadge": "Alcool primaire",
          "paragraphText": "Un alcool est dit primaire si son carbone fonctionnel ne possède qu'un seul carbone voisin direct (structure -CH2-OH). La présence de deux atomes d'hydrogène sur ce carbone fonctionnel lui confère une réactivité d'oxydation très spécifique (possibilité d'oxydation ménagée en deux temps successifs : aldéhyde puis acide carboxylique).",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p01_q3",
            "type": "mcq",
            "prompt": "On synthétise l'alcool de formule semi-développée CH3-CH(C2H5)-CH2-OH. De quelle classe relève cet alcool ?",
            "options": [
              "Alcool primaire",
              "Alcool secondaire",
              "Alcool tertiaire",
              "Phénol ramifié"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le carbone fonctionnel est le groupe terminal -CH2-OH : il n'est lié qu'à un seul autre atome de carbone (le carbone n°2 qui porte le groupe éthyle). C'est donc obligatoirement un alcool primaire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Identification des alcools secondaires",
          "stepTheme": "Classes d'alcools",
          "stepBadge": "Alcool secondaire",
          "paragraphText": "Un alcool est dit secondaire si son carbone fonctionnel est engagé avec deux autres atomes de carbone (groupements alkyles distincts ou identiques). Il ne porte qu'un seul atome d'hydrogène (structure >CH-OH). Par oxydation ménagée, il ne peut former qu'un composé carbonylé cétonique.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p01_q4",
            "type": "mcq",
            "prompt": "On considère la molécule de pentan-3-ol : CH3-CH2-CH(OH)-CH2-CH3. Quelle affirmation décrit fidèlement son carbone fonctionnel ?",
            "options": [
              "Il est lié à un seul groupement butyle et porte deux atomes d'hydrogène.",
              "Il est lié à deux groupements éthyles identiques et porte un atome d'hydrogène.",
              "Il est lié à trois groupements méthyles et ne porte aucun hydrogène.",
              "Il est insaturé et participe à une double liaison éthylénique."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le carbone n°3 porte le groupe -OH et est lié à deux groupements -CH2-CH3 (éthyle), avec un seul hydrogène restant : il s'agit typiquement d'un alcool secondaire symétrique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Identification des alcools tertiaires",
          "stepTheme": "Classes d'alcools",
          "stepBadge": "Alcool tertiaire",
          "paragraphText": "Un alcool est dit tertiaire lorsque le carbone fonctionnel est relié à trois groupes carbonés. Ce carbone est entièrement entouré de liaisons C-C et C-O : il ne porte aucun hydrogène. En conséquence, l'oxydation ménagée est impossible sans rupture brutale du squelette carboné.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p01_q5",
            "type": "mcq",
            "prompt": "Parmi les isomères de constitution de formule brute C4H10O, lequel est un alcool tertiaire ?",
            "options": [
              "Le butan-1-ol",
              "Le butan-2-ol",
              "Le 2-méthylpropan-1-ol",
              "Le 2-méthylpropan-2-ol"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Dans le 2-méthylpropan-2-ol, le carbone n°2 porte le -OH et trois groupes méthyles -CH3 : il ne porte aucun hydrogène. C'est l'unique isomère tertiaire en C4."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Méthode de comptage des isomères pour une formule brute donnée",
          "stepTheme": "Isomérie des alcools",
          "stepBadge": "Isomérie C3 et C4",
          "paragraphText": "Pour déterminer tous les isomères d'alcools associés à une formule brute CnH(2n+2)O, on procède méthodiquement : 1) Dessiner toutes les chaînes carbonées possibles (linéaires puis ramifiées) ; 2) Déplacer le groupe -OH sur chaque position non équivalente ; 3) Déterminer la classe de chaque isomère obtenu.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p01_q6",
            "type": "mcq",
            "prompt": "Combien d'isomères de constitution alcools distincts correspondent exactement à la formule brute C3H8O ?",
            "options": [
              "1 seul isomère (l'éthanol)",
              "2 isomères (le propan-1-ol et le propan-2-ol)",
              "3 isomères (propan-1-ol, propan-2-ol et 2-méthylpropan-1-ol)",
              "4 isomères (deux primaires, un secondaire et un tertiaire)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour C3H8O, la chaîne à 3 carbones ne peut porter le -OH qu'en position 1 (propan-1-ol, primaire) ou en position 2 (propan-2-ol, secondaire). Il y a donc exactement 2 alcools isomères."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège d'examen : Différencier isomérie de position et isomérie de squelette",
          "stepTheme": "Piège d'examen",
          "stepBadge": "Vigilance",
          "paragraphText": "Attention lors des épreuves de Baccalauréat : deux alcools de même formule brute qui possèdent la même chaîne carbonée mais où le groupe -OH est situé sur un carbone différent sont des isomères de position (ex : propan-1-ol et propan-2-ol). Deux alcools ayant des enchaînements carbonés différents sont des isomères de chaîne ou de squelette (ex : butan-1-ol et 2-méthylpropan-1-ol).",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p01_q7",
            "type": "mcq",
            "prompt": "Quelle est la relation d'isomérie exacte qui lie le butan-2-ol et le 2-méthylpropan-2-ol ?",
            "options": [
              "Ce sont des isomères de position car seul le groupe -OH a changé de place.",
              "Ce sont des stéréoisomères de conformation identiques par simple rotation.",
              "Ce sont des isomères de chaîne (ou de squelette) car l'un possède une chaîne linéaire à 4 carbones et l'autre une chaîne ramifiée à 3 carbones.",
              "Ce ne sont pas des isomères car ils ne possèdent pas la même formule brute."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Tous deux ont pour formule C4H10O mais le squelette carboné est différent (chaîne principale à 4 carbones pour le butan-2-ol contre chaîne principale à 3 carbones avec ramification pour le 2-méthylpropan-2-ol) : ce sont des isomères de chaîne."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l01_alcools_p01_q1",
          "type": "mcq",
          "prompt": "Parmi les espèces suivantes, laquelle constitue un véritable alcool selon la définition officielle du programme de Terminale ?",
          "options": [
            "C6H5-OH (le groupe -OH est directement greffé sur le noyau benzénique).",
            "CH3-CH=CH-OH (le groupe -OH est porté par un carbone engagé dans une double liaison).",
            "C6H5-CH2-OH (le groupe -OH est porté par un carbone tétraédrique lié au noyau benzénique).",
            "CH3-CO-OH (le groupe -OH est directement fixé sur un carbone portant une fonction carbonyle C=O)."
          ],
          "correctAnswerIndex": 2,
          "explanation": "Dans C6H5-CH2-OH (alcool benzylique), le carbone portant le groupe -OH est tétraédrique (-CH2-), ce qui en fait un alcool primaire authentique. C6H5-OH est un phénol, CH3-CH=CH-OH est un énol et CH3-COOH est un acide carboxylique."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p01_q2",
          "type": "mcq",
          "prompt": "Un monoalcool saturé A contient en masse 21,62 % d'oxygène. Sachant que M(C)=12 g/mol, M(H)=1 g/mol et M(O)=16 g/mol, quelle est sa formule brute exacte ?",
          "options": [
            "C2H6O (M = 46 g/mol)",
            "C3H8O (M = 60 g/mol)",
            "C4H10O (M = 74 g/mol)",
            "C5H12O (M = 88 g/mol)"
          ],
          "correctAnswerIndex": 2,
          "explanation": "M = 1600 / %O = 1600 / 21,62 = 74 g/mol. Or M = 14n + 18, d'où 14n = 74 - 18 = 56, soit n = 56/14 = 4. La formule brute est donc C4H10O."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p01_q3",
          "type": "mcq",
          "prompt": "On synthétise l'alcool de formule semi-développée CH3-CH(C2H5)-CH2-OH. De quelle classe relève cet alcool ?",
          "options": [
            "Alcool primaire",
            "Alcool secondaire",
            "Alcool tertiaire",
            "Phénol ramifié"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le carbone fonctionnel est le groupe terminal -CH2-OH : il n'est lié qu'à un seul autre atome de carbone (le carbone n°2 qui porte le groupe éthyle). C'est donc obligatoirement un alcool primaire."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p01_q4",
          "type": "mcq",
          "prompt": "On considère la molécule de pentan-3-ol : CH3-CH2-CH(OH)-CH2-CH3. Quelle affirmation décrit fidèlement son carbone fonctionnel ?",
          "options": [
            "Il est lié à un seul groupement butyle et porte deux atomes d'hydrogène.",
            "Il est lié à deux groupements éthyles identiques et porte un atome d'hydrogène.",
            "Il est lié à trois groupements méthyles et ne porte aucun hydrogène.",
            "Il est insaturé et participe à une double liaison éthylénique."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le carbone n°3 porte le groupe -OH et est lié à deux groupements -CH2-CH3 (éthyle), avec un seul hydrogène restant : il s'agit typiquement d'un alcool secondaire symétrique."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p01_q5",
          "type": "mcq",
          "prompt": "Parmi les isomères de constitution de formule brute C4H10O, lequel est un alcool tertiaire ?",
          "options": [
            "Le butan-1-ol",
            "Le butan-2-ol",
            "Le 2-méthylpropan-1-ol",
            "Le 2-méthylpropan-2-ol"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Dans le 2-méthylpropan-2-ol, le carbone n°2 porte le -OH et trois groupes méthyles -CH3 : il ne porte aucun hydrogène. C'est l'unique isomère tertiaire en C4."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p01_q6",
          "type": "mcq",
          "prompt": "Combien d'isomères de constitution alcools distincts correspondent exactement à la formule brute C3H8O ?",
          "options": [
            "1 seul isomère (l'éthanol)",
            "2 isomères (le propan-1-ol et le propan-2-ol)",
            "3 isomères (propan-1-ol, propan-2-ol et 2-méthylpropan-1-ol)",
            "4 isomères (deux primaires, un secondaire et un tertiaire)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour C3H8O, la chaîne à 3 carbones ne peut porter le -OH qu'en position 1 (propan-1-ol, primaire) ou en position 2 (propan-2-ol, secondaire). Il y a donc exactement 2 alcools isomères."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p01_q7",
          "type": "mcq",
          "prompt": "Quelle est la relation d'isomérie exacte qui lie le butan-2-ol et le 2-méthylpropan-2-ol ?",
          "options": [
            "Ce sont des isomères de position car seul le groupe -OH a changé de place.",
            "Ce sont des stéréoisomères de conformation identiques par simple rotation.",
            "Ce sont des isomères de chaîne (ou de squelette) car l'un possède une chaîne linéaire à 4 carbones et l'autre une chaîne ramifiée à 3 carbones.",
            "Ce ne sont pas des isomères car ils ne possèdent pas la même formule brute."
          ],
          "correctAnswerIndex": 2,
          "explanation": "Tous deux ont pour formule C4H10O mais le squelette carboné est différent (chaîne principale à 4 carbones pour le butan-2-ol contre chaîne principale à 3 carbones avec ramification pour le 2-méthylpropan-2-ol) : ce sont des isomères de chaîne."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l01_alcools_p02",
      "order": 2,
      "title": "Nomenclature systématique IUPAC et étude des polyols",
      "summary": "Règles officielles de numérotation, choix de la chaîne principale, indices des substituants et étude des polyalcools (glycol et glycérol).",
      "conceptExplanation": "La nomenclature IUPAC obéit à des règles universelles et précises :\n1. Identifier la chaîne carbonée la plus longue qui contient obligatoirement le carbone fonctionnel (porteur du -OH).\n2. Numéroter cette chaîne de manière à attribuer au carbone fonctionnel l'indice de position le plus petit possible.\n3. Remplacer le « e » final du nom de l'alcane correspondant par le suffixe « ol », précédé de l'indice de position du carbone fonctionnel (ex : butan-2-ol).\n4. Placer les noms des substituants alkyles en préfixe par ordre alphabétique, précédés de leurs indices de position respectifs.\n\nLes polyols (ou polyalcools) :\nCe sont des composés organiques portant plusieurs groupes hydroxyles (-OH) sur des carbones tétraédriques distincts (deux groupes -OH sur un même carbone forment un diol géminal instable qui se déshydrate instantanément) :\n- Diols : comportent 2 groupes -OH, comme l'éthane-1,2-diol (nom usuel : glycol).\n- Triols : comportent 3 groupes -OH, comme le propane-1,2,3-triol (nom usuel : glycérol).",
      "keyRule": "La priorité absolue de numérotation dans les alcools revient au carbone portant le groupe -OH : il doit recevoir le plus petit indice possible, avant même de considérer les ramifications alkyles.",
      "formulas": [],
      "workedExample": {
        "title": "Nommer un alcool complexe ramifié",
        "statement": "Trouve le nom systématique de la molécule : CH3-CH(CH3)-CH(C2H5)-CH2-CH(OH)-CH3.",
        "methodSteps": [
          "Étape 1 : Chaîne la plus longue contenant le carbone fonctionnel : 6 carbones (dérivé de l'hexane).",
          "Étape 2 : Numérotation : de droite à gauche pour que le carbone fonctionnel reçoive le numéro 2 (de gauche à droite il aurait le numéro 5).",
          "Étape 3 : Identifier les substituants : en position 4 un groupe éthyle (-C2H5) et en position 5 un groupe méthyle (-CH3).",
          "Étape 4 : Ordonner par ordre alphabétique : 'éthyle' avant 'méthyle'."
        ],
        "conclusion": "Le nom systématique est : 4-éthyl-5-méthylhexan-2-ol."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau des polyols remarquables du programme officiel",
        "tableData": {
          "headers": [
            "Nom usuel",
            "Nom IUPAC",
            "Formule semi-développée",
            "Nombre de -OH",
            "Usage industriel"
          ],
          "rows": [
            [
              "Glycol",
              "Éthane-1,2-diol",
              "HO-CH2-CH2-OH",
              "2 (Diol)",
              "Antigel pour moteurs, liquide de refroidissement"
            ],
            [
              "Glycérol",
              "Propane-1,2,3-triol",
              "HO-CH2-CH(OH)-CH2-OH",
              "3 (Triol)",
              "Fabrication de savons, cosmétique, résines"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Choix de la chaîne principale contenant le carbone fonctionnel",
          "stepTheme": "Nomenclature IUPAC",
          "stepBadge": "Chaîne principale",
          "paragraphText": "La chaîne principale n'est pas simplement la plus longue de toute la molécule : elle doit impérativement contenir le carbone lié au groupe -OH. Si une chaîne plus longue existe mais ne traverse pas le carbone fonctionnel, elle ne peut pas être choisie comme chaîne principale.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p02_q1",
            "type": "mcq",
            "prompt": "Dans la molécule CH3-CH2-CH(CH2-CH2-CH3)-CH2-OH, quelle est la longueur de la chaîne principale et son nom de base ?",
            "options": [
              "3 carbones (propan-1-ol)",
              "4 carbones (butan-1-ol)",
              "5 carbones (pentan-1-ol)",
              "6 carbones (hexan-1-ol)"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le carbone fonctionnel est le C1 (-CH2-OH). La chaîne continue la plus longue partant de ce carbone comprend le -CH- (C2) puis le groupement propyle à 3 carbones (C3, C4, C5), soit 5 atomes de carbone. Le nom de base est donc le pentan-1-ol (portant un substituant éthyle en C2 : 2-éthylpentan-1-ol)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Règle de priorité du plus petit indice pour le groupe fonctionnel",
          "stepTheme": "Nomenclature IUPAC",
          "stepBadge": "Indice le plus bas",
          "paragraphText": "On numérote la chaîne carbonée d'un bout à l'autre en donnant au carbone porteur du groupe -OH le numéro le plus faible possible. Ce n'est qu'en cas d'égalité stricte d'indice pour la fonction -OH qu'on départage le sens de numérotation en cherchant le plus petit indice pour les ramifications.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p02_q2",
            "type": "mcq",
            "prompt": "Quel est le nom officiel de la molécule CH3-CH(CH3)-CH2-CH(OH)-CH3 ?",
            "options": [
              "4-méthylpentan-2-ol",
              "2-méthylpentan-4-ol",
              "1,3-diméthylbutan-1-ol",
              "2-hydroxy-4-méthylpentane"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Numérotation de droite à gauche : le carbone fonctionnel est C2 et le groupe méthyle est en C4 -> 4-méthylpentan-2-ol. Si l'on numérotait de gauche à droite, le -OH serait en C4, ce qui violerait la règle de priorité."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les diols et la préparation industrielle du glycol",
          "stepTheme": "Les Polyols",
          "stepBadge": "Éthane-1,2-diol",
          "paragraphText": "L'éthane-1,2-diol (glycol) possède deux groupes -OH sur deux carbones voisins : HO-CH2-CH2-OH. Sa préparation industrielle s'effectue en deux étapes consécutives à partir de l'éthylène : 1) Oxydation de l'éthylène par l'oxygène de l'air en présence d'oxyde d'argent AgO pour former l'oxyde d'éthylène (époxyde) ; 2) Hydratation de l'oxyde d'éthylène avec l'eau pour obtenir le glycol.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p02_q3",
            "type": "mcq",
            "prompt": "Quelle équation-bilan décrit fidèlement la première étape de la synthèse industrielle du glycol ?",
            "options": [
              "CH2=CH2 + H2O -> CH3-CH2-OH",
              "CH2=CH2 + 1/2 O2 -(AgO)-> C2H4O (oxyde d'éthylène)",
              "C2H4O + H2O -> HO-CH2-CH2-OH",
              "CH3-CH3 + O2 -> HO-CH2-CH2-OH"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La première étape est l'oxydation ménagée de l'éthylène par le dioxygène de l'air catalysée par AgO pour former l'oxyde d'éthylène. L'hydratation de cet oxyde en glycol constitue la seconde étape."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le glycérol : triol d'origine biologique",
          "stepTheme": "Les Polyols",
          "stepBadge": "Propane-1,2,3-triol",
          "paragraphText": "Le propane-1,2,3-triol (glycérol) est un liquide visqueux, doux au goût, obtenu par saponification des corps gras naturels (huiles végétales et graisses animales). Ses trois fonctions alcools (deux primaires aux extrémités et une secondaire au centre) lui confèrent une grande solubilité dans l'eau et de multiples propriétés hydratantes et plastifiantes.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p02_q4",
            "type": "mcq",
            "prompt": "Quelle est la composition exacte des fonctions alcools présentes au sein d'une molécule de glycérol ?",
            "options": [
              "Trois fonctions alcools primaires identiques.",
              "Deux fonctions alcools primaires et une fonction alcool secondaire.",
              "Une fonction alcool primaire, une secondaire et une tertiaire.",
              "Trois fonctions alcools secondaires."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans HO-CH2-CH(OH)-CH2-OH, les deux carbones terminaux (-CH2-OH) sont des alcools primaires, et le carbone central (-CH(OH)-) est un alcool secondaire."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L'instabilité absolue des diols géminés",
          "stepTheme": "Règle de stabilité",
          "stepBadge": "Diol géminé",
          "paragraphText": "En chimie organique, une molécule ne peut jamais posséder deux groupes hydroxyles (-OH) sur le même atome de carbone : une telle structure est appelée « diol géminé ». Elle est extrêmement instable et perd spontanément une molécule d'eau pour se convertir immédiatement en composé carbonylé (aldéhyde ou cétone).",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p02_q5",
            "type": "mcq",
            "prompt": "Que se passe-t-il si l'on tente de fixer deux groupes -OH sur le carbone n°2 du propane (formule théorique CH3-C(OH)2-CH3) ?",
            "options": [
              "Le composé est stable et constitue un diol aromatique résistant.",
              "Il se déshydrate instantanément en libérant une molécule d'eau pour former la propanone (CH3-CO-CH3).",
              "Il se transforme spontanément en acide propanoïque par oxydation spontanée.",
              "Il se polymérise immédiatement pour donner du polyéthylène."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les diols géminés sont instables : CH3-C(OH)2-CH3 perd instantanément une molécule de H2O pour donner le composé carbonylé correspondant, la propanone (cétone)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Propriétés physiques : liaisons hydrogène et solubilité",
          "stepTheme": "Propriétés physiques",
          "stepBadge": "Liaison H",
          "paragraphText": "Grâce à la forte électronégativité de l'oxygène, la liaison O-H est fortement polarisée (O porte une charge partielle négative et H une charge positive). Les molécules d'alcool s'associent entre elles et avec l'eau par des liaisons hydrogène intermoléculaires. Cela explique pourquoi les alcools ont des températures d'ébullition nettement plus élevées que les alcanes de même masse molaire, et pourquoi les alcools légers (méthanol, éthanol, propanol) sont totalement miscibles à l'eau.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p02_q6",
            "type": "mcq",
            "prompt": "Pourquoi la température d'ébullition de l'éthanol C2H5OH (78 °C) est-elle considérablement plus haute que celle du propane C3H8 (-42 °C), alors que leurs masses molaires sont très proches (46 g/mol vs 44 g/mol) ?",
            "options": [
              "Parce que le propane forme des liaisons covalentes très fragiles avec l'air.",
              "Parce que les molécules d'éthanol sont solidement associées par un réseau dense de liaisons hydrogène intermoléculaires qu'il faut rompre par la chaleur.",
              "Parce que l'éthanol réagit violemment avec le dioxygène dès la température ambiante.",
              "Parce que l'éthanol possède une masse volumique 100 fois supérieure à celle du propane."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La présence du groupe polaire -OH permet l'établissement de liaisons hydrogène intermoléculaires très énergétiques entre molécules d'éthanol, inexistantes dans le propane apolaire."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Baisse de solubilité avec l'allongement de la chaîne carbonée",
          "stepTheme": "Solubilité dans l'eau",
          "stepBadge": "Chaîne hydrophobe",
          "paragraphText": "Bien que le groupe -OH soit hydrophile (polaire), la chaîne alkyle R est hydrophobe (apolaire). Au fur et à mesure que le nombre d'atomes de carbone augmente (à partir de 4 ou 5 carbones), le caractère hydrophobe de la chaîne l'emporte sur l'affinité du seul groupe -OH, et la solubilité dans l'eau diminue drastiquement (l'octan-1-ol est pratiquement insoluble dans l'eau).",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p02_q7",
            "type": "mcq",
            "prompt": "Lequel des alcools suivants présente la plus faible solubilité dans l'eau à 25 °C ?",
            "options": [
              "Le méthanol (CH3-OH)",
              "L'éthanol (CH3-CH2-OH)",
              "Le propan-1-ol (CH3-CH2-CH2-OH)",
              "L'hexan-1-ol (CH3-(CH2)4-CH2-OH)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'hexan-1-ol possède une longue chaîne carbonée hydrophobe de 6 atomes de carbone qui prédomine largement sur le caractère hydrophile d'un unique groupement -OH."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l01_alcools_p02_q1",
          "type": "mcq",
          "prompt": "Dans la molécule CH3-CH2-CH(CH2-CH2-CH3)-CH2-OH, quelle est la longueur de la chaîne principale et son nom de base ?",
          "options": [
            "3 carbones (propan-1-ol)",
            "4 carbones (butan-1-ol)",
            "5 carbones (pentan-1-ol)",
            "6 carbones (hexan-1-ol)"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le carbone fonctionnel est le C1 (-CH2-OH). La chaîne continue la plus longue partant de ce carbone comprend le -CH- (C2) puis le groupement propyle à 3 carbones (C3, C4, C5), soit 5 atomes de carbone. Le nom de base est donc le pentan-1-ol (portant un substituant éthyle en C2 : 2-éthylpentan-1-ol)."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p02_q2",
          "type": "mcq",
          "prompt": "Quel est le nom officiel de la molécule CH3-CH(CH3)-CH2-CH(OH)-CH3 ?",
          "options": [
            "4-méthylpentan-2-ol",
            "2-méthylpentan-4-ol",
            "1,3-diméthylbutan-1-ol",
            "2-hydroxy-4-méthylpentane"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Numérotation de droite à gauche : le carbone fonctionnel est C2 et le groupe méthyle est en C4 -> 4-méthylpentan-2-ol. Si l'on numérotait de gauche à droite, le -OH serait en C4, ce qui violerait la règle de priorité."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p02_q3",
          "type": "mcq",
          "prompt": "Quelle équation-bilan décrit fidèlement la première étape de la synthèse industrielle du glycol ?",
          "options": [
            "CH2=CH2 + H2O -> CH3-CH2-OH",
            "CH2=CH2 + 1/2 O2 -(AgO)-> C2H4O (oxyde d'éthylène)",
            "C2H4O + H2O -> HO-CH2-CH2-OH",
            "CH3-CH3 + O2 -> HO-CH2-CH2-OH"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La première étape est l'oxydation ménagée de l'éthylène par le dioxygène de l'air catalysée par AgO pour former l'oxyde d'éthylène. L'hydratation de cet oxyde en glycol constitue la seconde étape."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p02_q4",
          "type": "mcq",
          "prompt": "Quelle est la composition exacte des fonctions alcools présentes au sein d'une molécule de glycérol ?",
          "options": [
            "Trois fonctions alcools primaires identiques.",
            "Deux fonctions alcools primaires et une fonction alcool secondaire.",
            "Une fonction alcool primaire, une secondaire et une tertiaire.",
            "Trois fonctions alcools secondaires."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans HO-CH2-CH(OH)-CH2-OH, les deux carbones terminaux (-CH2-OH) sont des alcools primaires, et le carbone central (-CH(OH)-) est un alcool secondaire."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p02_q5",
          "type": "mcq",
          "prompt": "Que se passe-t-il si l'on tente de fixer deux groupes -OH sur le carbone n°2 du propane (formule théorique CH3-C(OH)2-CH3) ?",
          "options": [
            "Le composé est stable et constitue un diol aromatique résistant.",
            "Il se déshydrate instantanément en libérant une molécule d'eau pour former la propanone (CH3-CO-CH3).",
            "Il se transforme spontanément en acide propanoïque par oxydation spontanée.",
            "Il se polymérise immédiatement pour donner du polyéthylène."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les diols géminés sont instables : CH3-C(OH)2-CH3 perd instantanément une molécule de H2O pour donner le composé carbonylé correspondant, la propanone (cétone)."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p02_q6",
          "type": "mcq",
          "prompt": "Pourquoi la température d'ébullition de l'éthanol C2H5OH (78 °C) est-elle considérablement plus haute que celle du propane C3H8 (-42 °C), alors que leurs masses molaires sont très proches (46 g/mol vs 44 g/mol) ?",
          "options": [
            "Parce que le propane forme des liaisons covalentes très fragiles avec l'air.",
            "Parce que les molécules d'éthanol sont solidement associées par un réseau dense de liaisons hydrogène intermoléculaires qu'il faut rompre par la chaleur.",
            "Parce que l'éthanol réagit violemment avec le dioxygène dès la température ambiante.",
            "Parce que l'éthanol possède une masse volumique 100 fois supérieure à celle du propane."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La présence du groupe polaire -OH permet l'établissement de liaisons hydrogène intermoléculaires très énergétiques entre molécules d'éthanol, inexistantes dans le propane apolaire."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p02_q7",
          "type": "mcq",
          "prompt": "Lequel des alcools suivants présente la plus faible solubilité dans l'eau à 25 °C ?",
          "options": [
            "Le méthanol (CH3-OH)",
            "L'éthanol (CH3-CH2-OH)",
            "Le propan-1-ol (CH3-CH2-CH2-OH)",
            "L'hexan-1-ol (CH3-(CH2)4-CH2-OH)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'hexan-1-ol possède une longue chaîne carbonée hydrophobe de 6 atomes de carbone qui prédomine largement sur le caractère hydrophile d'un unique groupement -OH."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l01_alcools_p03",
      "order": 3,
      "title": "Méthodes de préparation : Fermentation et hydratation d'alcènes",
      "summary": "Fermentation du glucose en présence de levures, sucres fermentescibles vs non fermentescibles, et hydratation électrophile selon la règle de Markovnikov.",
      "conceptExplanation": "Il existe deux voies majeures de synthèse des alcools au programme :\n\n1. Voie biologique : la fermentation alcoolique des jus sucrés :\nSous l'action d'enzymes sécrétées par des levures (Zymase) en milieu anaérobie (absence d'air), les sucres fermentescibles (glucose, fructose, saccharose) sont dégradés en éthanol et dioxyde de carbone :\nC6H12O6 ---> 2 C2H5OH + 2 CO2.\nLes sucres non fermentescibles (lactose, amidon non hydrolysé, sorbitol) ne peuvent pas fermenter directement sous l'action simple des levures.\n\n2. Voie chimique industrielle : l'hydratation des alcènes :\nL'addition d'eau (H-OH) sur la double liaison C=C d'un alcène, réalisée à chaud en milieu acide (H2SO4 ou H3PO4), conduit à la formation d'un alcool.\nPour les alcènes dissymétriques, l'addition est régiosélective et suit la Règle de Markovnikov :\n« Lors de l'addition d'un composé hydrogéné H-X sur une double liaison dissymétrique, l'atome d'hydrogène H se fixe préférentiellement sur le carbone de la double liaison qui porte déjà le plus grand nombre d'atomes d'hydrogène. »\nLe groupe -OH se fixe ainsi sur le carbone le plus substitué, faisant du produit le plus ramifié le produit majoritaire.",
      "keyRule": "Règle de Markovnikov : l'hydrogène va au carbone le plus riche en hydrogène de la double liaison, et le groupe -OH va sur le carbone le plus encombré (le plus substitué).",
      "formulas": [
        {
          "name": "Fermentation alcoolique du glucose",
          "formula": "\\mathrm{C_6H_{12}O_6} \\overset{\\text{enzymes}}{\\longrightarrow} 2 \\, \\mathrm{C_2H_5OH} + 2 \\, \\mathrm{CO_2}",
          "note": "Production d'éthanol et dégagement de dioxyde de carbone"
        },
        {
          "name": "Hydratation du propène (Markovnikov)",
          "formula": "\\mathrm{CH_3-CH=CH_2} + \\mathrm{H_2O} \\overset{\\mathrm{H^+}}{\\longrightarrow} \\mathrm{CH_3-CH(OH)-CH_3} \\; \\text{(majoritaire)}",
          "note": "Le propan-2-ol (secondaire) est très largement majoritaire devant le propan-1-ol"
        }
      ],
      "workedExample": {
        "title": "Application de la règle de Markovnikov au 2-méthylbut-2-ène",
        "statement": "On réalise l'hydratation du 2-méthylbut-2-ène : CH3-C(CH3)=CH-CH3 en présence d'acide sulfurique. Quel est le produit majoritaire obtenu et quelle est sa classe ?",
        "methodSteps": [
          "Étape 1 : Examiner les deux carbones de la double liaison C=C : le carbone n°2 est lié à deux groupes méthyles (0 hydrogène direct) ; le carbone n°3 est lié à un hydrogène et un méthyle (1 hydrogène direct).",
          "Étape 2 : Appliquer la règle de Markovnikov : l'atome d'hydrogène de H2O se fixe sur le carbone le plus hydrogéné (C3, qui possède 1 H).",
          "Étape 3 : Le groupe -OH se fixe sur le carbone le moins hydrogéné (C2, qui porte déjà deux méthyles).",
          "Étape 4 : Écrire la formule du produit obtenu : CH3-C(CH3)(OH)-CH2-CH3 (2-méthylbutan-2-ol).",
          "Étape 5 : Déterminer la classe : le carbone n°2 est lié à 3 carbones, c'est un alcool tertiaire."
        ],
        "conclusion": "Le produit majoritaire est le 2-méthylbutan-2-ol, un alcool tertiaire."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Synthèse comparée : Voie biochimique vs Voie industrielle",
        "tableData": {
          "headers": [
            "Procédé",
            "Réactifs",
            "Conditions opératoires",
            "Produits obtenus",
            "Spécificité"
          ],
          "rows": [
            [
              "Fermentation",
              "Glucose C6H12O6",
              "Milieu anaérobie, levures (zymase), 25-35 °C",
              "Éthanol + CO2",
              "Limité à ~14-16% en alcool par mort des levures"
            ],
            [
              "Hydratation d'alcène",
              "Alcène + H2O",
              "Catalyseur acide fort (H2SO4), haute pression, 300 °C",
              "Alcool régiosélectif",
              "Régie par la règle de Markovnikov (produit majoritaire)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La fermentation alcoolique et les sucres fermentescibles",
          "stepTheme": "Fermentation",
          "stepBadge": "Sucres fermentescibles",
          "paragraphText": "La fermentation transforme les hexoses (glucose, fructose) sous l'action d'enzymes en éthanol et CO2. Les sucres simples et certains disaccharides comme le saccharose (hydrolysé au préalable) sont dits fermentescibles. D'autres glucides complexes comme l'amidon doivent d'abord subir une hydrolyse enzymatique (maltage) pour devenir fermentescibles, tandis que le lactose du lait ou le sorbitol ne fermentent pas avec la levure de bière ordinaire.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p03_q1",
            "type": "mcq",
            "prompt": "Lors de la fermentation complète de 0,5 mole de glucose C6H12O6 en milieu anaérobie, quel volume de CO2 gazeux se dégage-t-il dans les CNTP où Vm = 22,4 L/mol ?",
            "options": [
              "11,2 L",
              "22,4 L",
              "44,8 L",
              "5,6 L"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'équation C6H12O6 -> 2 C2H5OH + 2 CO2 montre que 1 mole de glucose produit 2 moles de CO2. Ainsi, 0,5 mole de glucose produit 1,0 mole de CO2, ce qui correspond à un volume V = n * Vm = 1 * 22,4 L = 22,4 L."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le principe de régiosélectivité et la règle de Markovnikov",
          "stepTheme": "Hydratation d'alcènes",
          "stepBadge": "Markovnikov",
          "paragraphText": "Lorsqu'un réactif dissymétrique H-OH s'additionne sur un alcène dissymétrique R-CH=CH2, deux alcools isomères peuvent théoriquement se former. L'expérience montre qu'un seul des deux isomères est très largement prédominant : l'addition est régiosélective. L'hydrogène se lie au carbone porteur du plus grand nombre d'hydrogènes pour former l'intermédiaire carbocationique le plus stable.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p03_q2",
            "type": "mcq",
            "prompt": "Lors de l'hydratation acide du but-1-ène (CH3-CH2-CH=CH2), quel est le produit majoritaire obtenu ?",
            "options": [
              "Le butan-1-ol (alcool primaire)",
              "Le butan-2-ol (alcool secondaire)",
              "Le 2-méthylpropan-2-ol (alcool tertiaire)",
              "Le butanal (aldéhyde)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans le but-1-ène, le carbone C1 porte 2 hydrogènes et le carbone C2 n'en porte qu'un. L'hydrogène se fixe sur C1 (qui devient -CH3) et le groupe -OH se fixe sur C2. Le produit majoritaire est donc le butan-2-ol (alcool secondaire)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Application aux alcènes ramifiés pour obtenir des alcools tertiaires",
          "stepTheme": "Hydratation d'alcènes",
          "stepBadge": "Alcool tertiaire",
          "paragraphText": "Lorsque la double liaison porte à la fois un carbone substitué par deux groupes alkyles et un carbone portant des hydrogènes (ex : méthylpropène), l'hydratation conduit majoritairement à un alcool tertiaire. C'est le procédé industriel par excellence pour fabriquer des alcools tertiaires à haut rendement.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p03_q3",
            "type": "mcq",
            "prompt": "Quelle est la formule semi-développée et le nom du produit majoritaire résultant de l'hydratation du 2-méthylpropène : CH2=C(CH3)2 ?",
            "options": [
              "CH3-CH(CH3)-CH2-OH (2-méthylpropan-1-ol, primaire)",
              "CH3-C(CH3)(OH)-CH3 (2-méthylpropan-2-ol, tertiaire)",
              "CH3-CH2-CH2-CH2-OH (butan-1-ol, primaire)",
              "CH3-CO-CH2-CH3 (butanone, cétone)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le carbone =CH2 a 2 H tandis que le carbone =C(CH3)2 a 0 H. L'hydrogène se fixe sur =CH2 (devenant -CH3) et le -OH se fixe sur le carbone central, donnant le 2-méthylpropan-2-ol, un alcool tertiaire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Cas des alcènes symétriques : absence de régiosélectivité",
          "stepTheme": "Hydratation d'alcènes",
          "stepBadge": "Alcène symétrique",
          "paragraphText": "Si les deux atomes de carbone de la double liaison portent exactement le même nombre d'hydrogènes et des substituants identiques (comme dans l'éthène CH2=CH2 ou le but-2-ène CH3-CH=CH-CH3), la règle de Markovnikov n'intervient pas : l'addition conduit à un produit unique sans compétition régiochimique.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p03_q4",
            "type": "mcq",
            "prompt": "Quel produit unique obtient-on lors de l'hydratation catalytique du but-2-ène CH3-CH=CH-CH3 ?",
            "options": [
              "Le butan-1-ol exclusivement",
              "Le butan-2-ol exclusivement",
              "Un mélange équimolaire de butan-1-ol et de butan-2-ol",
              "De l'éthanol pur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les deux carbones de la double liaison sont rigoureusement équivalents (chacun porte 1 H et 1 CH3). Que le -OH se fixe sur le carbone 2 ou le carbone 3, la molécule formée est dans les deux cas le butan-2-ol."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Piège d'examen : Ne pas confondre hydratation et hydrogénation",
          "stepTheme": "Piège de vocabulaire",
          "stepBadge": "Vocabulaire",
          "paragraphText": "Attention aux termes voisins lors des rédactions de devoirs et d'examens : l'hydratation est l'addition d'eau H2O (qui crée un alcool) ; l'hydrogénation est l'addition de dihydrogène H2 (qui transforme un alcène en alcane) ; l'hydrolyse est la coupure d'une molécule organique par l'eau (comme l'hydrolyse d'un ester).",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p03_q5",
            "type": "mcq",
            "prompt": "Un élève écrit sur sa copie : « On réalise l'hydrogénation de l'éthylène pour fabriquer de l'éthanol ». Quelle est l'erreur commise ?",
            "options": [
              "Aucune erreur, l'hydrogénation de l'éthylène produit bien de l'éthanol.",
              "L'hydrogénation ajoute H2 et produit de l'éthane (alcane) ; pour obtenir l'alcool, il faut réaliser une hydratation (addition de H2O).",
              "L'éthylène ne réagit jamais avec le dihydrogène.",
              "L'éthanol ne peut être obtenu qu'à partir du méthane."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'hydrogénation fixe H2 sur l'éthylène et donne l'éthane C2H6. Pour synthétiser l'éthanol C2H5OH, il faut impérativement réaliser une réaction d'hydratation (addition de H2O)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Rendement de la fermentation et limite toxique de l'alcool",
          "stepTheme": "Applications industrielles",
          "stepBadge": "Brasserie & Distillation",
          "paragraphText": "En brasserie et vinification, la fermentation alcoolique s'arrête naturellement dès que la teneur en éthanol atteint 14 à 16 % en volume. À cette concentration, l'éthanol devient cytotoxique pour les levures, ce qui inhibe leurs enzymes. Pour obtenir des alcools plus concentrés (spiritueux à 40-50 % ou alcool médical à 70-90 %), il est indispensable de recourir à une distillation fractionnée.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p03_q6",
            "type": "mcq",
            "prompt": "Pourquoi la fermentation spontanée d'un jus de raisin ou de canne à sucre ne permet-elle jamais d'obtenir directement un alcool à 90° sans passer par la distillation ?",
            "options": [
              "Parce que le glucose s'évapore avant de pouvoir être consommé.",
              "Parce que l'éthanol à forte concentration intoxique les levures et stoppe leur activité enzymatique autour de 15 % en volume.",
              "Parce que le dioxygène de l'air détruit instantanément l'éthanol produit.",
              "Parce que les enzymes transforment obligatoirement l'éthanol en méthane à partir de 20 °C."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'éthanol est un déchet métabolique pour les levures ; à concentration élevée (environ 15 % vol), il altère la membrane cellulaire des levures et stoppe la fermentation."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Bilan atomique et stœchiométrique d'un alcène inconnu",
          "stepTheme": "Détermination de formule",
          "stepBadge": "Stœchiométrie",
          "paragraphText": "Lorsqu'un hydrocarbure insaturé de formule CxHy possède une masse molaire M et des pourcentages massiques %C et %H, on calcule le nombre d'atomes par x = (M * %C) / 1200 et y = (M * %H) / 100. Si y = 2x, l'hydrocarbure est un alcène CnH2n dont l'hydratation fournit un alcool CnH(2n+2)O.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p03_q7",
            "type": "mcq",
            "prompt": "Un hydrocarbure X de masse molaire M = 56 g/mol contient 85,7 % de carbone et 14,3 % d'hydrogène. Son hydratation conduit à deux alcools A et B, dont l'un est majoritaire. Quelle est la formule brute de X ?",
            "options": [
              "C3H6 (propène)",
              "C4H8 (butène)",
              "C5H10 (pentène)",
              "C4H10 (butane)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "x = (56 * 85,7) / 1200 = 4 atomes de C ; y = (56 * 14,3) / 100 = 8 atomes de H. La formule brute est C4H8 (un alcène)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l01_alcools_p03_q1",
          "type": "mcq",
          "prompt": "Lors de la fermentation complète de 0,5 mole de glucose C6H12O6 en milieu anaérobie, quel volume de CO2 gazeux se dégage-t-il dans les CNTP où Vm = 22,4 L/mol ?",
          "options": [
            "11,2 L",
            "22,4 L",
            "44,8 L",
            "5,6 L"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'équation C6H12O6 -> 2 C2H5OH + 2 CO2 montre que 1 mole de glucose produit 2 moles de CO2. Ainsi, 0,5 mole de glucose produit 1,0 mole de CO2, ce qui correspond à un volume V = n * Vm = 1 * 22,4 L = 22,4 L."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p03_q2",
          "type": "mcq",
          "prompt": "Lors de l'hydratation acide du but-1-ène (CH3-CH2-CH=CH2), quel est le produit majoritaire obtenu ?",
          "options": [
            "Le butan-1-ol (alcool primaire)",
            "Le butan-2-ol (alcool secondaire)",
            "Le 2-méthylpropan-2-ol (alcool tertiaire)",
            "Le butanal (aldéhyde)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans le but-1-ène, le carbone C1 porte 2 hydrogènes et le carbone C2 n'en porte qu'un. L'hydrogène se fixe sur C1 (qui devient -CH3) et le groupe -OH se fixe sur C2. Le produit majoritaire est donc le butan-2-ol (alcool secondaire)."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p03_q3",
          "type": "mcq",
          "prompt": "Quelle est la formule semi-développée et le nom du produit majoritaire résultant de l'hydratation du 2-méthylpropène : CH2=C(CH3)2 ?",
          "options": [
            "CH3-CH(CH3)-CH2-OH (2-méthylpropan-1-ol, primaire)",
            "CH3-C(CH3)(OH)-CH3 (2-méthylpropan-2-ol, tertiaire)",
            "CH3-CH2-CH2-CH2-OH (butan-1-ol, primaire)",
            "CH3-CO-CH2-CH3 (butanone, cétone)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le carbone =CH2 a 2 H tandis que le carbone =C(CH3)2 a 0 H. L'hydrogène se fixe sur =CH2 (devenant -CH3) et le -OH se fixe sur le carbone central, donnant le 2-méthylpropan-2-ol, un alcool tertiaire."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p03_q4",
          "type": "mcq",
          "prompt": "Quel produit unique obtient-on lors de l'hydratation catalytique du but-2-ène CH3-CH=CH-CH3 ?",
          "options": [
            "Le butan-1-ol exclusivement",
            "Le butan-2-ol exclusivement",
            "Un mélange équimolaire de butan-1-ol et de butan-2-ol",
            "De l'éthanol pur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les deux carbones de la double liaison sont rigoureusement équivalents (chacun porte 1 H et 1 CH3). Que le -OH se fixe sur le carbone 2 ou le carbone 3, la molécule formée est dans les deux cas le butan-2-ol."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p03_q5",
          "type": "mcq",
          "prompt": "Un élève écrit sur sa copie : « On réalise l'hydrogénation de l'éthylène pour fabriquer de l'éthanol ». Quelle est l'erreur commise ?",
          "options": [
            "Aucune erreur, l'hydrogénation de l'éthylène produit bien de l'éthanol.",
            "L'hydrogénation ajoute H2 et produit de l'éthane (alcane) ; pour obtenir l'alcool, il faut réaliser une hydratation (addition de H2O).",
            "L'éthylène ne réagit jamais avec le dihydrogène.",
            "L'éthanol ne peut être obtenu qu'à partir du méthane."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'hydrogénation fixe H2 sur l'éthylène et donne l'éthane C2H6. Pour synthétiser l'éthanol C2H5OH, il faut impérativement réaliser une réaction d'hydratation (addition de H2O)."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p03_q6",
          "type": "mcq",
          "prompt": "Pourquoi la fermentation spontanée d'un jus de raisin ou de canne à sucre ne permet-elle jamais d'obtenir directement un alcool à 90° sans passer par la distillation ?",
          "options": [
            "Parce que le glucose s'évapore avant de pouvoir être consommé.",
            "Parce que l'éthanol à forte concentration intoxique les levures et stoppe leur activité enzymatique autour de 15 % en volume.",
            "Parce que le dioxygène de l'air détruit instantanément l'éthanol produit.",
            "Parce que les enzymes transforment obligatoirement l'éthanol en méthane à partir de 20 °C."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'éthanol est un déchet métabolique pour les levures ; à concentration élevée (environ 15 % vol), il altère la membrane cellulaire des levures et stoppe la fermentation."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p03_q7",
          "type": "mcq",
          "prompt": "Un hydrocarbure X de masse molaire M = 56 g/mol contient 85,7 % de carbone et 14,3 % d'hydrogène. Son hydratation conduit à deux alcools A et B, dont l'un est majoritaire. Quelle est la formule brute de X ?",
          "options": [
            "C3H6 (propène)",
            "C4H8 (butène)",
            "C5H10 (pentène)",
            "C4H10 (butane)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "x = (56 * 85,7) / 1200 = 4 atomes de C ; y = (56 * 14,3) / 100 = 8 atomes de H. La formule brute est C4H8 (un alcène)."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l01_alcools_p04",
      "order": 4,
      "title": "Propriétés chimiques : Réaction avec le sodium et déshydratations",
      "summary": "Attaque du sodium métallique (formation d'alcoolate et dégagement de H2), déshydratation intramoléculaire en alcène et intermoléculaire en étheroxyde.",
      "conceptExplanation": "Les alcools possèdent une réactivité riche centrée sur la coupure de la liaison O-H ou de la liaison C-OH :\n\n1. Réaction avec le sodium métallique (Coupure de la liaison O-H) :\nLes alcools réagissent avec le sodium métallique Na de manière vive mais sans explosion violente (contrairement à l'eau). L'atome d'hydrogène du groupe hydroxyle est réduit en dihydrogène gazeux H2, avec formation d'un ion alcoolate RO- et d'un ion sodium Na+ :\nR-OH + Na ---> (RO- + Na+) + 1/2 H2.\nExemple avec l'éthanol : formation d'éthanolate de sodium (C2H5O- + Na+) et dégagement de gaz H2 qui détonne à la flamme.\n\n2. Les déshydratations des alcools (Coupure de la liaison C-OH) :\n- Déshydratation intramoléculaire (élimination au sein de la même molécule) :\nChauffé vers 350-400 °C en présence d'un catalyseur solide comme l'alumine activée Al2O3 ou vers 170 °C avec de l'acide sulfurique concentré H2SO4, l'alcool perd une molécule d'eau entre son carbone fonctionnel et un carbone voisin pour former un alcène :\nR-CH2-CH2-OH ---> R-CH=CH2 + H2O.\n- Déshydratation intermoléculaire (condensation entre deux molécules d'alcool) :\nÀ température plus modérée (vers 140 °C en présence de H2SO4), deux molécules d'alcool s'unissent en éliminant une molécule d'eau pour former un étheroxyde (R-O-R') :\nR-OH + R'-OH ---> R-O-R' + H2O.",
      "keyRule": "Déshydratation à haute température (170-350 °C) = intramoléculaire (formation d'un ALCÈNE) ; Déshydratation à température modérée (140 °C) = intermoléculaire (formation d'un ÉTHEROXYDE).",
      "formulas": [
        {
          "name": "Action du sodium sur un alcool",
          "formula": "\\mathrm{R-OH} + \\mathrm{Na} \\longrightarrow \\mathrm{RO^-} + \\mathrm{Na^+} + \\frac{1}{2} \\, \\mathrm{H_2}",
          "note": "Dégagement de dihydrogène inflammable et formation d'alcoolate de sodium"
        },
        {
          "name": "Déshydratation intramoléculaire",
          "formula": "\\mathrm{-CH(OH)-CH_2-} \\xrightarrow[\\Delta]{\\mathrm{Al_2O_3}} \\mathrm{-C=C-} + \\mathrm{H_2O}",
          "note": "Production d'un alcène par élimination d'eau"
        },
        {
          "name": "Déshydratation intermoléculaire",
          "formula": "\\mathrm{R-OH} + \\mathrm{R'-OH} \\xrightarrow[140^{\\circ}\\mathrm{C}]{\\mathrm{H_2SO_4}} \\mathrm{R-O-R'} + \\mathrm{H_2O}",
          "note": "Production d'un étheroxyde par condensation de deux alcools"
        }
      ],
      "workedExample": {
        "title": "Calcul du volume de gaz dégagé par réaction avec le sodium",
        "statement": "On introduit un morceau de sodium métallique en excès dans 4,6 g d'éthanol pur (M = 46 g/mol). Quel volume de dihydrogène gazeux se dégage-t-il dans les conditions où Vm = 24 L/mol ?",
        "methodSteps": [
          "Étape 1 : Calculer la quantité de matière d'éthanol : n(alcool) = m / M = 4,6 / 46 = 0,10 mol.",
          "Étape 2 : Écrire la stœchiométrie de la réaction : C2H5OH + Na -> C2H5O- + Na+ + 1/2 H2.",
          "Étape 3 : Déterminer la quantité de dihydrogène produit : n(H2) = 1/2 * n(alcool) = 0,10 / 2 = 0,05 mol.",
          "Étape 4 : Calculer le volume de H2 : V(H2) = n(H2) * Vm = 0,05 * 24 = 1,20 L."
        ],
        "conclusion": "Il se dégage un volume de 1,20 litre de dihydrogène gazeux."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau récapitulatif des modes de coupure et produits formés",
        "tableData": {
          "headers": [
            "Type de réaction",
            "Réactifs / Catalyseur",
            "Liaison coupée",
            "Produit principal formé",
            "Sous-produit"
          ],
          "rows": [
            [
              "Action du sodium",
              "Alcool + Na métallique",
              "Liaison O-H",
              "Alcoolate de sodium (RO- + Na+)",
              "Dihydrogène gazeux H2"
            ],
            [
              "Déshydratation intramoléculaire",
              "Alcool seul, Al2O3 à 350 °C (ou H2SO4 à 170 °C)",
              "Liaisons C-OH et C-H",
              "Alcène (C=C)",
              "Eau H2O"
            ],
            [
              "Déshydratation intermoléculaire",
              "Deux alcools, H2SO4 à 140 °C",
              "Liaisons C-OH et O-H",
              "Étheroxyde (R-O-R')",
              "Eau H2O"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'ion alcoolate : une base très forte en milieu anhydre",
          "stepTheme": "Action du sodium",
          "stepBadge": "Alcoolate de sodium",
          "paragraphText": "L'ion alcoolate RO- obtenu lors de la réaction avec le sodium est une base conjuguée extrêmement forte (pKa du couple ROH/RO- d'environ 16 à 18). Si l'on ajoute de l'eau sur un alcoolate solide, l'eau (plus acide que l'alcool) cède immédiatement son proton dans une réaction totale : RO- + H2O -> ROH + OH-, régénérant l'alcool et libérant des ions hydroxyle.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p04_q1",
            "type": "mcq",
            "prompt": "On dissout de l'éthanolate de sodium solide (C2H5O-Na+) dans de l'eau pure. Quel est le comportement chimique observé et le pH résultant ?",
            "options": [
              "La solution reste neutre (pH = 7) car l'éthanol est neutre.",
              "L'ion éthanolate réagit totalement avec l'eau selon C2H5O- + H2O -> C2H5OH + OH-, rendant la solution fortement basique (pH > 7).",
              "La solution devient très acide (pH < 3) par libération massive d'ions H3O+.",
              "Il se forme un précipité blanc d'hydroxyde de sodium insoluble."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ion éthanolate C2H5O- est une base plus forte que l'ion hydroxyde HO- : il arrache quantitativement un proton à l'eau pour former des ions HO-, ce qui confère à la solution un caractère très basique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Déshydratation intramoléculaire de l'éthanol sur alumine",
          "stepTheme": "Déshydratation intramoléculaire",
          "stepBadge": "Vers les alcènes",
          "paragraphText": "Faire passer des vapeurs d'éthanol sur de l'alumine Al2O3 chauffée au rouge sombre (environ 350-400 °C) provoque une élimination intramoléculaire d'eau : CH3-CH2-OH -> CH2=CH2 + H2O. Le gaz incolore recueilli décolore l'eau de brome et une solution de permanganate de potassium, ce qui prouve la présence d'une double liaison (alcène).",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p04_q2",
            "type": "mcq",
            "prompt": "Quel gaz recueille-t-on lors de la déshydratation intramoléculaire complète de l'éthanol sur alumine chauffée ?",
            "options": [
              "Du méthane CH4",
              "De l'éthane C2H6",
              "De l'éthylène (éthène) C2H4",
              "Du monoxyde de carbone CO"
            ],
            "correctAnswerIndex": 2,
            "explanation": "CH3-CH2-OH perd H2O au sein de la même molécule pour former l'alcène correspondant à deux atomes de carbone : l'éthylène (éthène) CH2=CH2."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Règle de Zaïtsev lors de l'élimination intramoléculaire",
          "stepTheme": "Régiosélectivité de déshydratation",
          "stepBadge": "Règle de Zaïtsev",
          "paragraphText": "Lorsqu'un alcool secondaire dissymétrique subit une déshydratation intramoléculaire, deux alcènes isomères peuvent se former. La règle de Zaïtsev indique que l'hydrogène est éliminé préférentiellement du carbone voisin le plus pauvre en hydrogène : l'alcène le plus substitué (le plus ramifié ou le plus stable) est le produit majoritaire.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p04_q3",
            "type": "mcq",
            "prompt": "Par déshydratation intramoléculaire du butan-2-ol (CH3-CH2-CH(OH)-CH3), quel alcène obtient-on majoritairement selon la règle de Zaïtsev ?",
            "options": [
              "Le but-1-ène (CH3-CH2-CH=CH2)",
              "Le but-2-ène (CH3-CH=CH-CH3)",
              "Le 2-méthylpropène (CH2=C(CH3)2)",
              "Le cyclobutane"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le carbone C3 (-CH2-) possède 2 hydrogènes tandis que le carbone C1 (-CH3) en possède 3. L'élimination d'hydrogène a lieu préférentiellement sur C3, conduisant au but-2-ène (alcène le plus substitué et le plus stable)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Déshydratation intermoléculaire et synthèse des étheroxydes",
          "stepTheme": "Déshydratation intermoléculaire",
          "stepBadge": "Étheroxydes",
          "paragraphText": "Lorsque la déshydratation est conduite à température plus basse (vers 140 °C avec H2SO4), deux molécules d'alcool réagissent entre elles par condensation : R-OH + HO-R -> R-O-R + H2O. L'éthanol fournit ainsi l'éthoxyéthane (communément appelé oxyde de diéthyle ou éther éthylique), un solvant très volatil et anesthésique historique.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p04_q4",
            "type": "mcq",
            "prompt": "Quelle est la formule semi-développée et le nom du produit organique obtenu lors de la déshydratation intermoléculaire de deux molécules d'éthanol ?",
            "options": [
              "CH2=CH2 (éthène)",
              "CH3-CH2-O-CH2-CH3 (éthoxyéthane ou éther diéthylique)",
              "CH3-COO-CH2-CH3 (éthanoate d'éthyle)",
              "CH3-CH2-O-CH3 (méthoxyéthane)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Deux molécules d'éthanol C2H5OH s'associent en libérant H2O pour former l'étheroxyde symétrique C2H5-O-C2H5 (éthoxyéthane)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Synthèse d'éthers mixtes à partir de deux alcools distincts",
          "stepTheme": "Éthers mixtes",
          "stepBadge": "Mélange d'alcools",
          "paragraphText": "Si l'on fait réagir un mélange de deux alcools différents R-OH et R'-OH en présence d'acide sulfurique à 140 °C, on obtient statistiquement un mélange de trois étheroxydes : deux éthers symétriques (R-O-R et R'-O-R') et un éther mixte dissymétrique (R-O-R').",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p04_q5",
            "type": "mcq",
            "prompt": "Si l'on soumet un mélange équimolaire de méthanol (CH3-OH) et d'éthanol (C2H5-OH) à une déshydratation intermoléculaire catalysée par H2SO4 à 140 °C, quels étheroxydes se forment dans le milieu ?",
            "options": [
              "Seul le méthoxyéthane (CH3-O-C2H5) peut se former.",
              "Du diméthyléther (CH3-O-CH3), du diéthyléther (C2H5-O-C2H5) et du méthoxyéthane (CH3-O-C2H5).",
              "De l'éthylène et du méthane uniquement.",
              "De l'acétone et du formaldéhyde."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les collisions statistiques produisent l'auto-condensation du méthanol (CH3-O-CH3), l'auto-condensation de l'éthanol (C2H5-O-C2H5) et la condensation croisée mixte (CH3-O-C2H5)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Combustion complète et équation stœchiométrique générale",
          "stepTheme": "Combustion des alcools",
          "stepBadge": "Combustion",
          "paragraphText": "La combustion complète d'un alcool saturé dans le dioxygène de l'air produit exclusivement du dioxyde de carbone et de l'eau : CnH(2n+2)O + (3n/2) O2 -> n CO2 + (n+1) H2O. Cette réaction très exothermique est exploitée pour les biocarburants (bioéthanol).",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p04_q6",
            "type": "mcq",
            "prompt": "Combien de moles de dioxygène O2 sont exactement requises pour la combustion complète d'une mole de propanol (C3H8O) ?",
            "options": [
              "3 moles de O2",
              "4 moles de O2",
              "4,5 moles de O2",
              "5 moles de O2"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour n = 3 : le terme stœchiométrique devant O2 vaut 3n/2 = 3*3/2 = 4,5 moles de O2 (soit l'équation : C3H8O + 4,5 O2 -> 3 CO2 + 4 H2O)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Exploitation quantitative du dégagement de dihydrogène",
          "stepTheme": "Stœchiométrie du sodium",
          "stepBadge": "Calcul d'analyse",
          "paragraphText": "La mesure du volume de gaz H2 dégagé lors de la réaction d'une masse connue d'alcool pur avec un excès de sodium permet de déterminer expérimentalement la masse molaire et donc la formule brute de l'alcool inconnu : n(alcool) = 2 * n(H2) = 2 * (V_H2 / Vm).",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p04_q7",
            "type": "mcq",
            "prompt": "On fait réagir 3,7 g d'un monoalcool saturé inconnu avec un excès de sodium métallique. On recueille 0,60 L de gaz H2 (Vm = 24 L/mol). Quelle est la masse molaire de cet alcool ?",
            "options": [
              "46 g/mol",
              "60 g/mol",
              "74 g/mol",
              "88 g/mol"
            ],
            "correctAnswerIndex": 2,
            "explanation": "n(H2) = 0,60 / 24 = 0,025 mol. D'après l'équation, n(alcool) = 2 * n(H2) = 2 * 0,025 = 0,050 mol. Masse molaire M = m / n = 3,7 / 0,050 = 74 g/mol (ce qui correspond à C4H10O)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l01_alcools_p04_q1",
          "type": "mcq",
          "prompt": "On dissout de l'éthanolate de sodium solide (C2H5O-Na+) dans de l'eau pure. Quel est le comportement chimique observé et le pH résultant ?",
          "options": [
            "La solution reste neutre (pH = 7) car l'éthanol est neutre.",
            "L'ion éthanolate réagit totalement avec l'eau selon C2H5O- + H2O -> C2H5OH + OH-, rendant la solution fortement basique (pH > 7).",
            "La solution devient très acide (pH < 3) par libération massive d'ions H3O+.",
            "Il se forme un précipité blanc d'hydroxyde de sodium insoluble."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ion éthanolate C2H5O- est une base plus forte que l'ion hydroxyde HO- : il arrache quantitativement un proton à l'eau pour former des ions HO-, ce qui confère à la solution un caractère très basique."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p04_q2",
          "type": "mcq",
          "prompt": "Quel gaz recueille-t-on lors de la déshydratation intramoléculaire complète de l'éthanol sur alumine chauffée ?",
          "options": [
            "Du méthane CH4",
            "De l'éthane C2H6",
            "De l'éthylène (éthène) C2H4",
            "Du monoxyde de carbone CO"
          ],
          "correctAnswerIndex": 2,
          "explanation": "CH3-CH2-OH perd H2O au sein de la même molécule pour former l'alcène correspondant à deux atomes de carbone : l'éthylène (éthène) CH2=CH2."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p04_q3",
          "type": "mcq",
          "prompt": "Par déshydratation intramoléculaire du butan-2-ol (CH3-CH2-CH(OH)-CH3), quel alcène obtient-on majoritairement selon la règle de Zaïtsev ?",
          "options": [
            "Le but-1-ène (CH3-CH2-CH=CH2)",
            "Le but-2-ène (CH3-CH=CH-CH3)",
            "Le 2-méthylpropène (CH2=C(CH3)2)",
            "Le cyclobutane"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le carbone C3 (-CH2-) possède 2 hydrogènes tandis que le carbone C1 (-CH3) en possède 3. L'élimination d'hydrogène a lieu préférentiellement sur C3, conduisant au but-2-ène (alcène le plus substitué et le plus stable)."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p04_q4",
          "type": "mcq",
          "prompt": "Quelle est la formule semi-développée et le nom du produit organique obtenu lors de la déshydratation intermoléculaire de deux molécules d'éthanol ?",
          "options": [
            "CH2=CH2 (éthène)",
            "CH3-CH2-O-CH2-CH3 (éthoxyéthane ou éther diéthylique)",
            "CH3-COO-CH2-CH3 (éthanoate d'éthyle)",
            "CH3-CH2-O-CH3 (méthoxyéthane)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Deux molécules d'éthanol C2H5OH s'associent en libérant H2O pour former l'étheroxyde symétrique C2H5-O-C2H5 (éthoxyéthane)."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p04_q5",
          "type": "mcq",
          "prompt": "Si l'on soumet un mélange équimolaire de méthanol (CH3-OH) et d'éthanol (C2H5-OH) à une déshydratation intermoléculaire catalysée par H2SO4 à 140 °C, quels étheroxydes se forment dans le milieu ?",
          "options": [
            "Seul le méthoxyéthane (CH3-O-C2H5) peut se former.",
            "Du diméthyléther (CH3-O-CH3), du diéthyléther (C2H5-O-C2H5) et du méthoxyéthane (CH3-O-C2H5).",
            "De l'éthylène et du méthane uniquement.",
            "De l'acétone et du formaldéhyde."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les collisions statistiques produisent l'auto-condensation du méthanol (CH3-O-CH3), l'auto-condensation de l'éthanol (C2H5-O-C2H5) et la condensation croisée mixte (CH3-O-C2H5)."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p04_q6",
          "type": "mcq",
          "prompt": "Combien de moles de dioxygène O2 sont exactement requises pour la combustion complète d'une mole de propanol (C3H8O) ?",
          "options": [
            "3 moles de O2",
            "4 moles de O2",
            "4,5 moles de O2",
            "5 moles de O2"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour n = 3 : le terme stœchiométrique devant O2 vaut 3n/2 = 3*3/2 = 4,5 moles de O2 (soit l'équation : C3H8O + 4,5 O2 -> 3 CO2 + 4 H2O)."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p04_q7",
          "type": "mcq",
          "prompt": "On fait réagir 3,7 g d'un monoalcool saturé inconnu avec un excès de sodium métallique. On recueille 0,60 L de gaz H2 (Vm = 24 L/mol). Quelle est la masse molaire de cet alcool ?",
          "options": [
            "46 g/mol",
            "60 g/mol",
            "74 g/mol",
            "88 g/mol"
          ],
          "correctAnswerIndex": 2,
          "explanation": "n(H2) = 0,60 / 24 = 0,025 mol. D'après l'équation, n(alcool) = 2 * n(H2) = 2 * 0,025 = 0,050 mol. Masse molaire M = m / n = 3,7 / 0,050 = 74 g/mol (ce qui correspond à C4H10O)."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l01_alcools_p05",
      "order": 5,
      "title": "Oxydation ménagée des alcools : Primaires, secondaires et tertiaires",
      "summary": "Différence fondamentale entre oxydation ménagée et combustion, comportement selon la classe, équations redox avec permanganate et dichromate en milieu acide.",
      "conceptExplanation": "Une oxydation ménagée est une réaction d'oxydation qui préserve l'intégrité du squelette carboné de la molécule, contrairement à la combustion complète qui brise toutes les liaisons C-C pour donner CO2 et H2O.\n\n1. Comportement des trois classes d'alcools :\n- Alcools primaires (R-CH2-OH) :\n  * En présence d'oxydant en défaut : oxydation ménagée en ALDÉHYDE (R-CHO) selon : R-CH2-OH -> R-CHO + 2 H+ + 2 e-.\n  * En présence d'oxydant en excès : l'aldéhyde formé s'oxyde immédiatement à son tour en ACIDE CARBOXYLIQUE (R-COOH) selon : R-CH2-OH + H2O -> R-COOH + 4 H+ + 4 e-.\n- Alcools secondaires (R1-CH(OH)-R2) :\n  S'oxydent exclusivement en CÉTONE (R1-CO-R2) selon : R1-CH(OH)-R2 -> R1-CO-R2 + 2 H+ + 2 e-. L'oxydation s'arrête là, même en présence d'un grand excès d'oxydant.\n- Alcools tertiaires (R1-C(OH)(R2)-R3) :\n  Ne possèdent aucun atome d'hydrogène sur le carbone fonctionnel. Ils ne subissent AUCUNE oxydation ménagée en milieu acide dilué.\n\n2. Les couples oxydants usuels en solution acide :\n- Ion dichromate (orange) : Cr2O7(2-) + 14 H+ + 6 e- <===> 2 Cr(3+) (vert) + 7 H2O (ou avec 8 H3O+ et 15 H2O).\n- Ion permanganate (violet) : MnO4(-) + 8 H+ + 5 e- <===> Mn(2+) (incolore) + 4 H2O (ou avec 6 H3O+ et 9 H2O).",
      "keyRule": "Alcool primaire -> aldéhyde (si défaut) puis acide carboxylique (si excès). Alcool secondaire -> cétone (toujours). Alcool tertiaire -> aucune réaction d'oxydation ménagée.",
      "formulas": [
        {
          "name": "Oxydation de l'éthanol en défaut de dichromate (vers aldéhyde)",
          "formula": "3\\,\\mathrm{CH_3CH_2OH} + \\mathrm{Cr_2O_7^{2-}} + 8\\,\\mathrm{H_3O^+} \\longrightarrow 3\\,\\mathrm{CH_3CHO} + 2\\,\\mathrm{Cr^{3+}} + 15\\,\\mathrm{H_2O}",
          "note": "Formation d'éthanal (aldéhyde)"
        },
        {
          "name": "Oxydation de l'éthanol en excès de dichromate (vers acide)",
          "formula": "3\\,\\mathrm{CH_3CH_2OH} + 2\\,\\mathrm{Cr_2O_7^{2-}} + 16\\,\\mathrm{H_3O^+} \\longrightarrow 3\\,\\mathrm{CH_3COOH} + 4\\,\\mathrm{Cr^{3+}} + 27\\,\\mathrm{H_2O}",
          "note": "Oxydation complète en acide éthanoïque"
        },
        {
          "name": "Oxydation du propan-2-ol (vers cétone)",
          "formula": "3\\,\\mathrm{CH_3CH(OH)CH_3} + \\mathrm{Cr_2O_7^{2-}} + 8\\,\\mathrm{H_3O^+} \\longrightarrow 3\\,\\mathrm{CH_3COCH_3} + 2\\,\\mathrm{Cr^{3+}} + 15\\,\\mathrm{H_2O}",
          "note": "Formation de propanone (cétone)"
        }
      ],
      "workedExample": {
        "title": "Établissement de l'équation-bilan avec le permanganate en excès",
        "statement": "Écris l'équation-bilan de l'oxydation ménagée du 2-méthylpropan-1-ol par une solution acidifiée de permanganate de potassium en excès.",
        "methodSteps": [
          "Étape 1 : Identifier la classe de l'alcool : c'est un alcool primaire. En excès d'oxydant, il s'oxyde en acide 2-méthylpropanoïque.",
          "Étape 2 : Écrire la demi-équation du réducteur : CH3-CH(CH3)-CH2OH + H2O <===> CH3-CH(CH3)-COOH + 4 H+ + 4 e- (* 5).",
          "Étape 3 : Écrire la demi-équation de l'oxydant : MnO4- + 8 H+ + 5 e- <===> Mn2+ + 4 H2O (* 4).",
          "Étape 4 : Égaliser les électrons échangés (20 électrons) et faire la somme : 5 CH3-CH(CH3)-CH2OH + 4 MnO4- + 32 H+ + 5 H2O ---> 5 CH3-CH(CH3)-COOH + 4 Mn2+ + 20 H+ + 16 H2O.",
          "Étape 5 : Simplifier les H+ et H2O : 5 Alcool + 4 MnO4- + 12 H+ ---> 5 Acide + 4 Mn2+ + 11 H2O (ou avec H3O+ : + 12 H3O+ ---> + 23 H2O)."
        ],
        "conclusion": "L'équation équilibrée est : 5 CH3-CH(CH3)-CH2OH + 4 MnO4- + 12 H3O+ -> 5 CH3-CH(CH3)-COOH + 4 Mn2+ + 23 H2O."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau de synthèse de l'oxydation ménagée selon la classe",
        "tableData": {
          "headers": [
            "Classe de l'alcool",
            "Oxydant en défaut",
            "Test caractéristique du produit",
            "Oxydant en excès",
            "Test caractéristique du produit"
          ],
          "rows": [
            [
              "Primaire (R-CH2-OH)",
              "Aldéhyde (R-CHO)",
              "Précipité avec 2,4-DNPH et réagit avec Fehling / Schiff",
              "Acide carboxylique (R-COOH)",
              "Fait virer le BBT au jaune (pH < 7)"
            ],
            [
              "Secondaire (R1-CH(OH)-R2)",
              "Cétone (R1-CO-R2)",
              "Précipité avec 2,4-DNPH mais inerte avec Fehling / Schiff",
              "Cétone (aucune oxydation ultérieure)",
              "Identique : inerte sur réactifs spécifiques des aldéhydes"
            ],
            [
              "Tertiaire (R1-C(OH)(R2)-R3)",
              "Pas de réaction",
              "La solution d'oxydant conserve sa couleur d'origine",
              "Pas de réaction",
              "Inerte : aucune oxydation ménagée possible"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'oxydation ménagée préserve le squelette carboné",
          "stepTheme": "Oxydation ménagée",
          "stepBadge": "Principe fondamental",
          "paragraphText": "Contrairement à une combustion violente, l'oxydation ménagée n'attaque que le carbone fonctionnel porteur de la liaison C-H. Le nombre d'atomes de carbone de la chaîne carbonée et ses éventuelles ramifications restent strictement inchangés entre l'alcool initial et les produits d'oxydation obtenus.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p05_q1",
            "type": "mcq",
            "prompt": "Un alcool A de formule brute C4H10O subit une oxydation ménagée. Le produit organique B obtenu possède également 4 atomes de carbone et ne contient aucun atome de carbone supplémentaire ou manquant. Que peut-on affirmer avec certitude ?",
            "options": [
              "La réaction est une combustion complète ayant formé du monoxyde de carbone.",
              "Le squelette carboné a été conservé : il s'agit d'une oxydation ménagée.",
              "L'alcool A est obligatoirement un alcool tertiaire.",
              "La réaction a produit un alcane par élimination du groupe hydroxyle."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La conservation intégrale du squelette carboné à 4 atomes de carbone sans rupture de liaison C-C est la caractéristique distinctive d'une oxydation ménagée."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Alcool primaire en défaut d'oxydant : formation d'aldéhyde",
          "stepTheme": "Alcool primaire",
          "stepBadge": "Oxydant en défaut",
          "paragraphText": "Lorsque la quantité d'oxydant introduite est en défaut par rapport à l'alcool primaire, l'oxydation s'arrête au premier stade : la déshydrogénation ménagée vers l'aldéhyde correspondant. L'aldéhyde obtenu peut être immédiatement caractérisé par le test à la 2,4-DNPH (précipité jaune-orangé) et par le réactif de Schiff (coloration rose).",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p05_q2",
            "type": "mcq",
            "prompt": "On fait réagir du propan-1-ol avec une quantité insuffisante (en défaut) d'ions dichromate en milieu acide. Quel produit organique isole-t-on en majorité ?",
            "options": [
              "L'acide propanoïque",
              "Le propanal",
              "La propanone",
              "Le propanoate de propyle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le propan-1-ol est un alcool primaire. En défaut d'oxydant, l'oxydation ménagée s'arrête au stade de l'aldéhyde correspondant, qui est le propanal CH3-CH2-CHO."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Alcool primaire en excès d'oxydant : formation d'acide carboxylique",
          "stepTheme": "Alcool primaire",
          "stepBadge": "Oxydant en excès",
          "paragraphText": "Si la solution de dichromate ou de permanganate est ajoutée en excès, l'aldéhyde transitoire est instantanément oxydé en acide carboxylique. La solution obtenue présente un caractère acide accusé qui fait virer le bleu de bromothymol (BBT) du vert au jaune.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p05_q3",
            "type": "mcq",
            "prompt": "On traite un alcool inconnu A par une solution acidifiée de permanganate de potassium en excès. Le produit obtenu B fait virer le BBT au jaune et présente une chaîne carbonée ramifiée de 4 carbones. Quel était le nom de l'alcool A ?",
            "options": [
              "Butan-1-ol",
              "Butan-2-ol",
              "2-méthylpropan-1-ol",
              "2-méthylpropan-2-ol"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le produit B vire au jaune avec le BBT, c'est donc un acide carboxylique. L'alcool A est donc un alcool primaire. Comme sa chaîne est ramifiée à 4 carbones, c'est obligatoirement le 2-méthylpropan-1-ol."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Alcool secondaire : production exclusive de cétone",
          "stepTheme": "Alcool secondaire",
          "stepBadge": "Vers la cétone",
          "paragraphText": "Un alcool secondaire R1-CH(OH)-R2 s'oxyde en cétone R1-CO-R2. Comme le carbone carbonyle de la cétone ne porte aucun hydrogène, il ne peut plus subir d'oxydation supplémentaire sans destruction de la molécule. La cétone donne un précipité avec la 2,4-DNPH mais ne réagit ni avec la liqueur de Fehling ni avec le réactif de Tollens.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p05_q4",
            "type": "mcq",
            "prompt": "On oxyde le butan-2-ol par une solution acidifiée de dichromate de potassium en large excès. Quel produit organique recueille-t-on finalement ?",
            "options": [
              "L'acide butanoïque",
              "Le butanal",
              "La butanone",
              "Le dioxyde de carbone uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le butan-2-ol est un alcool secondaire : son oxydation s'arrête impérativement au stade de la cétone correspondante, la butanone, quelle que soit la quantité d'oxydant ajoutée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Alcool tertiaire : inertie totale face aux oxydants ménagés",
          "stepTheme": "Alcool tertiaire",
          "stepBadge": "Inertie redox",
          "paragraphText": "Dans un tube à essai contenant un alcool tertiaire (comme le 2-méthylpropan-2-ol), l'ajout d'une solution de dichromate de potassium acidifiée ne produit aucun changement : la solution conserve sa couleur orange initiale, car le carbone fonctionnel ne porte aucun hydrogène réactif.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p05_q5",
            "type": "mcq",
            "prompt": "Un laborantin verse quelques gouttes de solution acidifiée de permanganate de potassium (violette) dans trois tubes à essai contenant chacun un isomère de C4H10O. Dans le tube n°3, la couleur violette persiste indéfiniment. Quel alcool contient ce tube ?",
            "options": [
              "Le butan-1-ol",
              "Le butan-2-ol",
              "Le 2-méthylpropan-1-ol",
              "Le 2-méthylpropan-2-ol"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La persistance de la couleur violette de l'ion MnO4- prouve l'absence totale de réaction d'oxydoréduction : le composé est un alcool tertiaire, le 2-méthylpropan-2-ol."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Suivi visuel des changements de couleur des oxydants",
          "stepTheme": "Indicateurs redox",
          "stepBadge": "Couleurs des ions",
          "paragraphText": "Lors des travaux pratiques, le déroulement de la réaction redox est visualisé directement par le changement de couleur de l'oxydant : l'ion dichromate Cr2O7(2-) passe de l'orange au vert (ions Cr3+) ; l'ion permanganate MnO4(-) passe du violet intense à une décoloration quasi totale (ions Mn2+ rose très pâle/incolore).",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p05_q6",
            "type": "mcq",
            "prompt": "Lorsqu'on fait réagir de l'éthanol avec une solution de dichromate de potassium acidifiée, quel changement de couleur atteste expérimentalement de l'oxydation de l'alcool ?",
            "options": [
              "Le mélange vire du vert à l'orange.",
              "Le mélange passe de l'orange au vert émeraude caractéristique des ions Cr3+.",
              "Le mélange devient immédiatement bleu intense.",
              "Un précipité blanc laiteux se forme spontanément."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les ions Cr2O7(2-) de couleur orange sont réduits en ions chrome III Cr(3+) de couleur verte au cours de l'oxydation de l'alcool."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège d'examen : Différencier test de groupe et test réducteur",
          "stepTheme": "Tests de caractérisation",
          "stepBadge": "DNPH vs Fehling",
          "paragraphText": "La 2,4-DNPH est un test de famille : elle réagit avec TOUS les composés carbonylés (aldéhydes ET cétones) en donnant un précipité jaune-orangé. Elle ne permet en aucun cas de distinguer un aldéhyde d'une cétone. Seuls les réactifs réducteurs doux (Liqueur de Fehling, réactif de Tollens, réactif de Schiff) permettent de prouver qu'il s'agit d'un aldéhyde.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p05_q7",
            "type": "mcq",
            "prompt": "Le produit d'oxydation d'un alcool forme un précipité jaune avec la 2,4-DNPH mais ne produit aucun précipité rouge brique lorsqu'il est chauffé avec la liqueur de Fehling. Quel était l'alcool de départ ?",
            "options": [
              "Un alcool primaire",
              "Un alcool secondaire",
              "Un alcool tertiaire",
              "Un polyol aromatique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le produit donne un test positif à la 2,4-DNPH (c'est un composé carbonylé) mais négatif à la liqueur de Fehling (ce n'est pas un aldéhyde, c'est donc une cétone). L'alcool initial était donc obligatoirement secondaire."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l01_alcools_p05_q1",
          "type": "mcq",
          "prompt": "Un alcool A de formule brute C4H10O subit une oxydation ménagée. Le produit organique B obtenu possède également 4 atomes de carbone et ne contient aucun atome de carbone supplémentaire ou manquant. Que peut-on affirmer avec certitude ?",
          "options": [
            "La réaction est une combustion complète ayant formé du monoxyde de carbone.",
            "Le squelette carboné a été conservé : il s'agit d'une oxydation ménagée.",
            "L'alcool A est obligatoirement un alcool tertiaire.",
            "La réaction a produit un alcane par élimination du groupe hydroxyle."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La conservation intégrale du squelette carboné à 4 atomes de carbone sans rupture de liaison C-C est la caractéristique distinctive d'une oxydation ménagée."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p05_q2",
          "type": "mcq",
          "prompt": "On fait réagir du propan-1-ol avec une quantité insuffisante (en défaut) d'ions dichromate en milieu acide. Quel produit organique isole-t-on en majorité ?",
          "options": [
            "L'acide propanoïque",
            "Le propanal",
            "La propanone",
            "Le propanoate de propyle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le propan-1-ol est un alcool primaire. En défaut d'oxydant, l'oxydation ménagée s'arrête au stade de l'aldéhyde correspondant, qui est le propanal CH3-CH2-CHO."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p05_q3",
          "type": "mcq",
          "prompt": "On traite un alcool inconnu A par une solution acidifiée de permanganate de potassium en excès. Le produit obtenu B fait virer le BBT au jaune et présente une chaîne carbonée ramifiée de 4 carbones. Quel était le nom de l'alcool A ?",
          "options": [
            "Butan-1-ol",
            "Butan-2-ol",
            "2-méthylpropan-1-ol",
            "2-méthylpropan-2-ol"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le produit B vire au jaune avec le BBT, c'est donc un acide carboxylique. L'alcool A est donc un alcool primaire. Comme sa chaîne est ramifiée à 4 carbones, c'est obligatoirement le 2-méthylpropan-1-ol."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p05_q4",
          "type": "mcq",
          "prompt": "On oxyde le butan-2-ol par une solution acidifiée de dichromate de potassium en large excès. Quel produit organique recueille-t-on finalement ?",
          "options": [
            "L'acide butanoïque",
            "Le butanal",
            "La butanone",
            "Le dioxyde de carbone uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le butan-2-ol est un alcool secondaire : son oxydation s'arrête impérativement au stade de la cétone correspondante, la butanone, quelle que soit la quantité d'oxydant ajoutée."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p05_q5",
          "type": "mcq",
          "prompt": "Un laborantin verse quelques gouttes de solution acidifiée de permanganate de potassium (violette) dans trois tubes à essai contenant chacun un isomère de C4H10O. Dans le tube n°3, la couleur violette persiste indéfiniment. Quel alcool contient ce tube ?",
          "options": [
            "Le butan-1-ol",
            "Le butan-2-ol",
            "Le 2-méthylpropan-1-ol",
            "Le 2-méthylpropan-2-ol"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La persistance de la couleur violette de l'ion MnO4- prouve l'absence totale de réaction d'oxydoréduction : le composé est un alcool tertiaire, le 2-méthylpropan-2-ol."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p05_q6",
          "type": "mcq",
          "prompt": "Lorsqu'on fait réagir de l'éthanol avec une solution de dichromate de potassium acidifiée, quel changement de couleur atteste expérimentalement de l'oxydation de l'alcool ?",
          "options": [
            "Le mélange vire du vert à l'orange.",
            "Le mélange passe de l'orange au vert émeraude caractéristique des ions Cr3+.",
            "Le mélange devient immédiatement bleu intense.",
            "Un précipité blanc laiteux se forme spontanément."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les ions Cr2O7(2-) de couleur orange sont réduits en ions chrome III Cr(3+) de couleur verte au cours de l'oxydation de l'alcool."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p05_q7",
          "type": "mcq",
          "prompt": "Le produit d'oxydation d'un alcool forme un précipité jaune avec la 2,4-DNPH mais ne produit aucun précipité rouge brique lorsqu'il est chauffé avec la liqueur de Fehling. Quel était l'alcool de départ ?",
          "options": [
            "Un alcool primaire",
            "Un alcool secondaire",
            "Un alcool tertiaire",
            "Un polyol aromatique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le produit donne un test positif à la 2,4-DNPH (c'est un composé carbonylé) mais négatif à la liqueur de Fehling (ce n'est pas un aldéhyde, c'est donc une cétone). L'alcool initial était donc obligatoirement secondaire."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l01_alcools_p06",
      "order": 6,
      "title": "Exploitation quantitative et calculs de titrage d'oxydation",
      "summary": "Bilan molaire à l'équivalence redox, calculs de volume de réactif titrant, détermination de degré alcoolique et résolution méthodique d'exercices type Bac.",
      "conceptExplanation": "Les exercices d'examen de Terminale D et C reposent sur l'exploitation stœchiométrique rigoureuse des réactions redox des alcools.\n\n1. Établissement des relations molaires à partir de l'équation-bilan :\nSoit la réaction d'oxydation d'un alcool par le dichromate en milieu acide vers l'aldéhyde :\n3 Alcool + Cr2O7(2-) + 8 H3O+ ---> 3 Aldéhyde + 2 Cr(3+) + 15 H2O.\nÀ l'équivalence stœchiométrique :\nn(Cr2O7(2-)) / 1 = n(Alcool) / 3\nSoit : C_ox * V_ox = (1/3) * (m_alcool / M_alcool).\nOn en déduit le volume d'oxydant nécessaire : V_ox = m_alcool / (3 * C_ox * M_alcool).\n\n2. Cas de l'oxydation poussée vers l'acide carboxylique :\n3 Alcool + 2 Cr2O7(2-) + 16 H3O+ ---> 3 Acide + 4 Cr(3+) + 27 H2O.\nLa relation stœchiométrique devient :\nn(Cr2O7(2-)) / 2 = n(Alcool) / 3   <=>   n(Cr2O7(2-)) = (2/3) * n(Alcool).\n\n3. Cas du permanganate de potassium (oxydation en acide) :\n5 Alcool + 4 MnO4(-) + 12 H3O+ ---> 5 Acide + 4 Mn(2+) + 23 H2O.\nRelation stœchiométrique :\nn(MnO4(-)) / 4 = n(Alcool) / 5   <=>   n(MnO4(-)) = (4/5) * n(Alcool).",
      "keyRule": "Toujours équilibrer d'abord les deux demi-équations électroniques pour trouver les coefficients stœchiométriques avant d'écrire la relation n_ox / a = n_red / b.",
      "formulas": [
        {
          "name": "Relation stœchiométrique générale à l'équivalence",
          "formula": "\\frac{n_{\\text{oxydant}}}{a} = \\frac{n_{\\text{réducteur}}}{b} \\iff \\frac{C_{\\text{ox}} \\cdot V_{\\text{ox}}}{a} = \\frac{m_{\\text{alcool}}}{b \\cdot M_{\\text{alcool}}}",
          "note": "Permet de calculer la masse, la concentration ou le volume équivalent"
        }
      ],
      "workedExample": {
        "title": "Calcul du volume de dichromate nécessaire pour oxyder de l'éthanol",
        "statement": "On désire oxyder m = 0,20 g d'éthanol (M = 46 g/mol) en éthanal par une solution de dichromate de potassium de concentration C = 1,0 mol/L en milieu acide. Calcule le volume V de solution nécessaire.",
        "methodSteps": [
          "Étape 1 : Écrire l'équation-bilan : 3 C2H5OH + Cr2O7(2-) + 8 H3O+ -> 3 CH3CHO + 2 Cr(3+) + 15 H2O.",
          "Étape 2 : Établir la relation molaire : n(Cr2O7(2-)) = n(éthanol) / 3.",
          "Étape 3 : Exprimer en fonction des données : C * V = m / (3 * M).",
          "Étape 4 : Isoler le volume V : V = m / (3 * C * M) = 0,20 / (3 * 1,0 * 46) = 0,20 / 138 = 1,45 * 10^(-3) L = 1,45 mL."
        ],
        "conclusion": "Le volume de solution de dichromate requis est V = 1,45 mL (ou 1,45 * 10^-3 L)."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau de correspondances stœchiométriques selon le couple d'oxydation",
        "tableData": {
          "headers": [
            "Couple oxydant",
            "Degré d'oxydation atteint",
            "Rapport n(oxydant) / n(alcool)",
            "Formule du volume Vox"
          ],
          "rows": [
            [
              "Cr2O7(2-) / Cr(3+)",
              "Stade aldéhyde ou cétone",
              "1 / 3",
              "Vox = m_alcool / (3 * C * M)"
            ],
            [
              "Cr2O7(2-) / Cr(3+)",
              "Stade acide carboxylique",
              "2 / 3",
              "Vox = 2 * m_alcool / (3 * C * M)"
            ],
            [
              "MnO4(-) / Mn(2+)",
              "Stade acide carboxylique",
              "4 / 5",
              "Vox = 4 * m_alcool / (5 * C * M)"
            ],
            [
              "MnO4(-) / Mn(2+)",
              "Stade aldéhyde (défaut)",
              "2 / 5",
              "Vox = 2 * m_alcool / (5 * C * M)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Calcul du rapport stœchiométrique à partir des électrons échangés",
          "stepTheme": "Méthode des demi-équations",
          "stepBadge": "Conservation des électrons",
          "paragraphText": "Le rapport stœchiométrique entre l'alcool et l'oxydant se déduit directement du nombre d'électrons échangés : si l'oxydation de l'alcool libère 2 électrons et que la réduction de l'oxydant en capte 6 (ion dichromate), il faut 3 molécules d'alcool pour 1 ion dichromate (3 * 2 e- = 6 e-).",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p06_q1",
            "type": "mcq",
            "prompt": "Dans l'oxydation d'un alcool primaire en acide carboxylique, la demi-équation libère 4 électrons. L'ion permanganate MnO4- capte 5 électrons. Quel est le plus petit commun multiple d'électrons échangés et le coefficient de l'alcool dans l'équation-bilan ?",
            "options": [
              "10 électrons échangés, coefficient 5 pour l'alcool",
              "20 électrons échangés, coefficient 5 pour l'alcool et 4 pour MnO4-",
              "9 électrons échangés, coefficient 1 pour l'alcool",
              "8 électrons échangés, coefficient 2 pour l'alcool"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le PPCM entre 4 et 5 est 20 électrons. On multiplie la demi-équation de l'alcool par 5 (5 * 4 e- = 20 e-) et celle du permanganate par 4 (4 * 5 e- = 20 e-)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Calcul de concentration molaire lors d'un titrage d'éthanol",
          "stepTheme": "Dosage d'alcool",
          "stepBadge": "Calcul de concentration",
          "paragraphText": "Lors du dosage d'un échantillon d'éthanol de volume Valcool par une solution de dichromate de concentration Cox, le volume équivalent versé Vox permet de calculer la concentration molaire de l'alcool : Calcool = 3 * Cox * Vox / Valcool (pour une oxydation en aldéhyde) ou Calcool = (3/2) * Cox * Vox / Valcool (si l'éthanol est oxydé en acide).",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p06_q2",
            "type": "mcq",
            "prompt": "On dose un volume Valcool = 10 mL d'une solution d'éthanol par du dichromate de potassium acidifié à Cox = 0,20 mol/L en excès. L'oxydation totale en acide carboxylique nécessite Vox = 15 mL de dichromate. Quelle est la concentration molaire de la solution d'éthanol ?",
            "options": [
              "0,15 mol/L",
              "0,225 mol/L",
              "0,30 mol/L",
              "0,45 mol/L"
            ],
            "correctAnswerIndex": 1,
            "explanation": "n(alcool) = (3/2) * n(Cr2O7(2-)) = 1,5 * Cox * Vox = 1,5 * 0,20 * 0,015 = 4,5 * 10^(-3) mol. Concentration Calcool = n / Valcool = 4,5 * 10^(-3) / 0,010 = 0,45 mol/L ? Attention : 1,5 * 0,20 = 0,30 ; 0,30 * 0,015 = 0,0045 mol ; 0,0045 / 0,020 = 0,225 mol/L si V=20 mL, ou 0,0045 / 0,010 = 0,45 mol/L. Recalculons : Calcool = (3/2) * 0,20 * 15 / 10 = 1,5 * 0,20 * 1,5 = 0,45 mol/L."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Piège stœchiométrique : Alcool secondaire vs Alcool primaire",
          "stepTheme": "Stœchiométrie comparée",
          "stepBadge": "Attention aux coefficients",
          "paragraphText": "Un piège fréquent est d'utiliser le coefficient 2/3 (correspondant à l'oxydation de l'alcool primaire en acide) pour un alcool secondaire. L'alcool secondaire ne peut s'oxyder qu'en cétone (échange de 2 électrons seulement) : le rapport stœchiométrique n(Cr2O7(2-)) / n(alcool) vaut TOUJOURS 1/3, quelle que soit la quantité de dichromate présente.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p06_q3",
            "type": "mcq",
            "prompt": "On fait réagir 0,06 mole de propan-2-ol avec une solution de dichromate de potassium en milieu acide. Combien de moles d'ions Cr2O7(2-) sont strictement consommées à l'équivalence ?",
            "options": [
              "0,06 mole",
              "0,04 mole",
              "0,02 mole",
              "0,01 mole"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le propan-2-ol est un alcool secondaire s'oxydant en propanone (échange de 2 e-). Le dichromate en captant 6 e-, 1 ion Cr2O7(2-) oxyde 3 molécules d'alcool : n(Cr2O7(2-)) = n(alcool) / 3 = 0,06 / 3 = 0,02 mole."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Détermination de la structure d'un alcool à partir d'analyses en chaîne",
          "stepTheme": "Problème d'analyse organique",
          "stepBadge": "Raisonnement déductif",
          "paragraphText": "Au Baccalauréat, les sujets de synthèse combinent souvent : 1) une densité de vapeur d pour trouver M = 29*d ; 2) l'oxydation ménagée pour identifier la classe ; 3) les tests au réactif de Schiff / Tollens / liqueur de Fehling pour distinguer aldéhyde et cétone ; 4) le test au BBT pour déceler un acide carboxylique.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p06_q4",
            "type": "mcq",
            "prompt": "Un alcool A a une densité de vapeur d = 2,07. Son oxydation ménagée donne un composé B qui rosit le réactif de Schiff. Sachant que la chaîne de A est linéaire, quel est le nom précis de A ?",
            "options": [
              "Éthanol",
              "Propan-1-ol",
              "Propan-2-ol",
              "Butan-1-ol"
            ],
            "correctAnswerIndex": 1,
            "explanation": "M = 29 * 2,07 = 60 g/mol. Or 14n + 18 = 60 => 14n = 42 => n = 3 (formule C3H8O). Le composé B rosit le réactif de Schiff : B est un aldéhyde (le propanal), donc A est un alcool primaire linéaire à 3 carbones : le propan-1-ol."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le principe de l'alcootest chimique",
          "stepTheme": "Applications sociétales",
          "stepBadge": "Sécurité routière",
          "paragraphText": "L'alcootest traditionnel à ballon utilise l'oxydation ménagée de l'éthanol par les ions dichromate immobilisés sur un gel de silice acidifié : les vapeurs d'éthanol contenues dans l'air expiré réduisent les ions Cr2O7(2-) jaune-orangé en ions Cr(3+) vert émeraude. La longueur de la zone virée au vert est proportionnelle à l'imprégnation alcoolique du conducteur.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p06_q5",
            "type": "mcq",
            "prompt": "Quel principe chimique régit le fonctionnement d'un éthylotest chimique à tube réactif ?",
            "options": [
              "Une précipitation des ions chlorure sous forme de chlorure d'argent blanc.",
              "L'oxydation ménagée de l'éthanol de l'haleine par le dichromate de potassium acidifié, accompagnée du virage de l'orange au vert.",
              "La combustion spontanée de l'éthanol formant une flamme bleue.",
              "Une neutralisation acido-basique de l'alcool par l'hydroxyde de sodium."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'éthanol expiré est un réducteur qui transforme les ions dichromate orange en ions chrome III verts dans le tube réactif."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Calcul du rendement d'une synthèse d'alcool",
          "stepTheme": "Rendement de synthèse",
          "stepBadge": "Rendement r",
          "paragraphText": "Le rendement r d'une réaction chimique est le quotient de la masse de produit réellement obtenue m_exp par la masse théorique maximale m_th attendue d'après la stœchiométrie : r = (m_exp / m_th) * 100. En pratique industrielle, le rendement est souvent inférieur à 100 % en raison de réactions secondaires ou de pertes lors de la purification.",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p06_q6",
            "type": "mcq",
            "prompt": "On hydrate 28 g d'éthylène C2H4 (M = 28 g/mol) pour synthétiser de l'éthanol (M = 46 g/mol). On obtient expérimentalement 36,8 g d'éthanol pur. Quel est le rendement de cette hydratation ?",
            "options": [
              "60 %",
              "75 %",
              "80 %",
              "92 %"
            ],
            "correctAnswerIndex": 2,
            "explanation": "n(éthylène) = 28 / 28 = 1,0 mol. Théoriquement, 1,0 mol d'éthylène produit 1,0 mol d'éthanol, soit m_th = 1,0 * 46 = 46 g. Le rendement vaut r = (36,8 / 46) * 100 = 80 %."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Vérification finale du bilan de matière d'un TP d'oxydation",
          "stepTheme": "Bilan global",
          "stepBadge": "Récapitulatif examen",
          "paragraphText": "Avant de conclure un compte rendu de travaux pratiques ou un exercice de Bac, vérifie toujours la cohérence globale : la classe de l'alcool déduite est-elle compatible avec les produits identifiés ? Les unités sont-elles bien converties (mL en L, mg en g) ? Les demi-équations respectent-elles la conservation des charges et des éléments chimiques ?",
          "exercise": {
            "id": "terminale_c_chimie_l01_alcools_p06_q7",
            "type": "mcq",
            "prompt": "Un candidat trouve à l'issue de ses calculs qu'un alcool tertiaire a été oxydé par le permanganate en un acide carboxylique de même chaîne carbonée. Quelle critique scientifique majeure doit-il s'adresser ?",
            "options": [
              "Aucune, les alcools tertiaires s'oxydent toujours facilement en acide.",
              "Le résultat est rigoureusement impossible : un alcool tertiaire est inerte à l'oxydation ménagée ; seul un alcool primaire peut conduire à un acide carboxylique.",
              "L'acide produit devrait contenir deux atomes de carbone de plus que l'alcool.",
              "Le permanganate de potassium n'est pas un oxydant en milieu acide."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une règle intangible de la chimie organique est que les alcools tertiaires ne subissent aucune oxydation ménagée. Obtenir un acide carboxylique prouve de façon certaine que l'alcool initial était primaire."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l01_alcools_p06_q1",
          "type": "mcq",
          "prompt": "Dans l'oxydation d'un alcool primaire en acide carboxylique, la demi-équation libère 4 électrons. L'ion permanganate MnO4- capte 5 électrons. Quel est le plus petit commun multiple d'électrons échangés et le coefficient de l'alcool dans l'équation-bilan ?",
          "options": [
            "10 électrons échangés, coefficient 5 pour l'alcool",
            "20 électrons échangés, coefficient 5 pour l'alcool et 4 pour MnO4-",
            "9 électrons échangés, coefficient 1 pour l'alcool",
            "8 électrons échangés, coefficient 2 pour l'alcool"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le PPCM entre 4 et 5 est 20 électrons. On multiplie la demi-équation de l'alcool par 5 (5 * 4 e- = 20 e-) et celle du permanganate par 4 (4 * 5 e- = 20 e-)."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p06_q2",
          "type": "mcq",
          "prompt": "On dose un volume Valcool = 10 mL d'une solution d'éthanol par du dichromate de potassium acidifié à Cox = 0,20 mol/L en excès. L'oxydation totale en acide carboxylique nécessite Vox = 15 mL de dichromate. Quelle est la concentration molaire de la solution d'éthanol ?",
          "options": [
            "0,15 mol/L",
            "0,225 mol/L",
            "0,30 mol/L",
            "0,45 mol/L"
          ],
          "correctAnswerIndex": 1,
          "explanation": "n(alcool) = (3/2) * n(Cr2O7(2-)) = 1,5 * Cox * Vox = 1,5 * 0,20 * 0,015 = 4,5 * 10^(-3) mol. Concentration Calcool = n / Valcool = 4,5 * 10^(-3) / 0,010 = 0,45 mol/L ? Attention : 1,5 * 0,20 = 0,30 ; 0,30 * 0,015 = 0,0045 mol ; 0,0045 / 0,020 = 0,225 mol/L si V=20 mL, ou 0,0045 / 0,010 = 0,45 mol/L. Recalculons : Calcool = (3/2) * 0,20 * 15 / 10 = 1,5 * 0,20 * 1,5 = 0,45 mol/L."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p06_q3",
          "type": "mcq",
          "prompt": "On fait réagir 0,06 mole de propan-2-ol avec une solution de dichromate de potassium en milieu acide. Combien de moles d'ions Cr2O7(2-) sont strictement consommées à l'équivalence ?",
          "options": [
            "0,06 mole",
            "0,04 mole",
            "0,02 mole",
            "0,01 mole"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le propan-2-ol est un alcool secondaire s'oxydant en propanone (échange de 2 e-). Le dichromate en captant 6 e-, 1 ion Cr2O7(2-) oxyde 3 molécules d'alcool : n(Cr2O7(2-)) = n(alcool) / 3 = 0,06 / 3 = 0,02 mole."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p06_q4",
          "type": "mcq",
          "prompt": "Un alcool A a une densité de vapeur d = 2,07. Son oxydation ménagée donne un composé B qui rosit le réactif de Schiff. Sachant que la chaîne de A est linéaire, quel est le nom précis de A ?",
          "options": [
            "Éthanol",
            "Propan-1-ol",
            "Propan-2-ol",
            "Butan-1-ol"
          ],
          "correctAnswerIndex": 1,
          "explanation": "M = 29 * 2,07 = 60 g/mol. Or 14n + 18 = 60 => 14n = 42 => n = 3 (formule C3H8O). Le composé B rosit le réactif de Schiff : B est un aldéhyde (le propanal), donc A est un alcool primaire linéaire à 3 carbones : le propan-1-ol."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p06_q5",
          "type": "mcq",
          "prompt": "Quel principe chimique régit le fonctionnement d'un éthylotest chimique à tube réactif ?",
          "options": [
            "Une précipitation des ions chlorure sous forme de chlorure d'argent blanc.",
            "L'oxydation ménagée de l'éthanol de l'haleine par le dichromate de potassium acidifié, accompagnée du virage de l'orange au vert.",
            "La combustion spontanée de l'éthanol formant une flamme bleue.",
            "Une neutralisation acido-basique de l'alcool par l'hydroxyde de sodium."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'éthanol expiré est un réducteur qui transforme les ions dichromate orange en ions chrome III verts dans le tube réactif."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p06_q6",
          "type": "mcq",
          "prompt": "On hydrate 28 g d'éthylène C2H4 (M = 28 g/mol) pour synthétiser de l'éthanol (M = 46 g/mol). On obtient expérimentalement 36,8 g d'éthanol pur. Quel est le rendement de cette hydratation ?",
          "options": [
            "60 %",
            "75 %",
            "80 %",
            "92 %"
          ],
          "correctAnswerIndex": 2,
          "explanation": "n(éthylène) = 28 / 28 = 1,0 mol. Théoriquement, 1,0 mol d'éthylène produit 1,0 mol d'éthanol, soit m_th = 1,0 * 46 = 46 g. Le rendement vaut r = (36,8 / 46) * 100 = 80 %."
        },
        {
          "id": "terminale_c_chimie_l01_alcools_p06_q7",
          "type": "mcq",
          "prompt": "Un candidat trouve à l'issue de ses calculs qu'un alcool tertiaire a été oxydé par le permanganate en un acide carboxylique de même chaîne carbonée. Quelle critique scientifique majeure doit-il s'adresser ?",
          "options": [
            "Aucune, les alcools tertiaires s'oxydent toujours facilement en acide.",
            "Le résultat est rigoureusement impossible : un alcool tertiaire est inerte à l'oxydation ménagée ; seul un alcool primaire peut conduire à un acide carboxylique.",
            "L'acide produit devrait contenir deux atomes de carbone de plus que l'alcool.",
            "Le permanganate de potassium n'est pas un oxydant en milieu acide."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une règle intangible de la chimie organique est que les alcools tertiaires ne subissent aucune oxydation ménagée. Obtenir un acide carboxylique prouve de façon certaine que l'alcool initial était primaire."
        }
      ]
    }
  ]
};
