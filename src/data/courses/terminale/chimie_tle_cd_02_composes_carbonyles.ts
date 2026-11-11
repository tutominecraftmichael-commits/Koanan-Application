import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : TCDE — Thème : Chimie Organique — Titre : Composés carbonylés : Aldéhydes et Cétones
export const CHIMIE_TLE_CD_L02_COMPOSES_CARBONYLES: CurriculumChapter = {
  "id": "terminale_c_chimie_l02_composes_carbonyles",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 2,
  "title": "Leçon 2 : Composés carbonylés : Aldéhydes et Cétones",
  "summary": "Groupe carbonyle, formule CnH2nO, distinction aldéhydes vs cétones, nomenclature officielle, test commun à la 2,4-DNPH, tests réducteurs spécifiques (Schiff, Tollens, Fehling) et solvants polaires aprotiques.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : TCDE – Chimie Organique – Composés carbonylés : Aldéhydes et Cétones)",
  "points": [
    {
      "id": "terminale_c_chimie_l02_composes_carbonyles_p01",
      "order": 1,
      "title": "Le groupe carbonyle et la distinction aldéhyde vs cétone",
      "summary": "Groupe fonctionnel C=O, géométrie trigonale plane, formule brute générale CnH2nO et isomérie de fonction entre aldéhydes et cétones.",
      "conceptExplanation": "Un composé carbonylé est un composé organique oxygéné qui comporte le groupe carbonyle : un atome de carbone doublement lié à un atome d'oxygène (>C=O).\n\n1. Caractéristiques géométriques et électroniques :\n- Le carbone carbonyle est hybridé sp2 : les trois liaisons forment des angles proches de 120° (géométrie trigonale plane).\n- L'oxygène étant beaucoup plus électronégatif que le carbone, la double liaison C=O est fortement polarisée : le carbone porte une charge partielle positive (delta+) qui en fait un site électrophile privilégié, et l'oxygène porte une charge partielle négative (delta-).\n\n2. Les deux familles de composés carbonylés :\n- Les aldéhydes : le groupe carbonyle est obligatoirement situé en bout de chaîne carbonée. Le carbone fonctionnel est relié à au moins un atome d'hydrogène : formule générale R-CHO (avec R = H ou groupe alkyle/aryle). Dans le méthanal H-CHO, R est l'atome H.\n- Les cétones : le groupe carbonyle est situé à l'intérieur de la chaîne carbonée. Le carbone fonctionnel est directement lié à deux groupes alkyles ou aryles R1 et R2 (tous deux différents de H) : formule générale R1-CO-R2.\n\n3. Formule brute générale :\nPour les composés carbonylés saturés acycliques ne comportant qu'un seul groupe carbonyle, la formule brute générale est CnH2nO avec n >= 1 pour les aldéhydes et n >= 3 pour les cétones (la cétone la plus simple étant la propanone en C3).",
      "keyRule": "Si le carbone C=O porte un atome d'hydrogène direct (-CHO), c'est un aldéhyde. S'il est entouré de deux atomes de carbone (R1-CO-R2), c'est une cétone.",
      "formulas": [
        {
          "name": "Formule brute générale d'un composé carbonylé saturé",
          "formula": "\\mathrm{C_n H_{2n} O}",
          "note": "Aldéhydes : n >= 1 ; Cétones : n >= 3. Masse molaire M = 14n + 16 g/mol"
        }
      ],
      "workedExample": {
        "title": "Calcul de formule brute à partir du pourcentage massique en carbone",
        "statement": "Un composé carbonylé saturé A de formule CxHyO a une masse molaire M = 72 g/mol et contient 66,7 % de carbone en masse. Détermine sa formule brute.",
        "methodSteps": [
          "Étape 1 : Calculer le nombre d'atomes de carbone x : x = (M * %C) / 1200 = (72 * 66,7) / 1200 = 4,00 soit x = 4.",
          "Étape 2 : Un seul atome d'oxygène z = 1 (M(O) = 16 g/mol).",
          "Étape 3 : Calculer le nombre d'atomes d'hydrogène y : y = M - (12*x + 16) = 72 - (12*4 + 16) = 72 - 64 = 8.",
          "Étape 4 : Vérifier la formule générale CnH2nO : n = 4, 2n = 8, d'où C4H8O."
        ],
        "conclusion": "La formule brute est C4H8O."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau comparatif : Aldéhydes vs Cétones",
        "tableData": {
          "headers": [
            "Critère",
            "Aldéhyde",
            "Cétone"
          ],
          "rows": [
            [
              "Position du groupe C=O",
              "En bout de chaîne (carbone n°1)",
              "En milieu de chaîne (carbone intermédiaire)"
            ],
            [
              "Formule générale",
              "R-CHO (ou Ar-CHO)",
              "R1-CO-R2 (R1, R2 distincts de H)"
            ],
            [
              "Valeur minimale de n",
              "n = 1 (Méthanal)",
              "n = 3 (Propanone)"
            ],
            [
              "Atome H sur C=O",
              "Oui (au moins 1 H lié au carbone)",
              "Non (aucun H lié au carbone carbonyle)"
            ],
            [
              "Propriété redox",
              "Réducteur (oxydable en acide)",
              "Non réducteur (inerte aux oxydants doux)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le groupe carbonyle et sa polarisation",
          "stepTheme": "Structure électronique",
          "stepBadge": "Groupe C=O",
          "paragraphText": "Le groupe carbonyle est constitué d'une liaison sigma et d'une liaison pi entre le carbone et l'oxygène. La différence d'électronégativité (3,44 pour O contre 2,55 pour C) polarise la liaison : l'atome de carbone présente un déficit électronique (caractère électrophile), ce qui gouverne la réactivité d'addition nucléophile de ces molécules.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p01_q1",
            "type": "mcq",
            "prompt": "Dans une molécule d'aldéhyde ou de cétone, quelle caractéristique électronique explique que les réactifs nucléophiles attaquent spécifiquement l'atome de carbone du groupe carbonyle ?",
            "options": [
              "Le carbone est plus électronégatif que l'oxygène et porte une charge partielle négative.",
              "La double liaison C=O est fortement polarisée, conférant au carbone une charge partielle positive delta+ (site électrophile).",
              "Le carbone possède deux doublets non liants libres sur sa couche de valence.",
              "Le carbone est hybridé sp3 et forme un tétraèdre compact imperméable aux électrons."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'oxygène attire vers lui les électrons de la liaison double pi : le carbone subit une polarisation delta+ qui en fait une cible électrophile attractive pour tout réactif riche en électrons (nucléophile)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Formule brute CnH2nO et calcul de la masse molaire",
          "stepTheme": "Formule générale",
          "stepBadge": "M = 14n + 16",
          "paragraphText": "La formule brute d'un composé carbonylé saturé monofonctionnel acyclique est CnH2nO. Sa masse molaire s'écrit M = 14n + 16. La connaissance de la masse molaire ou de la densité de vapeur d (M = 29*d) permet de calculer instantanément le nombre d'atomes de carbone n = (M - 16) / 14.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p01_q2",
            "type": "mcq",
            "prompt": "Un composé carbonylé saturé inconnu présente une densité de vapeur par rapport à l'air d = 2,0. Quel est son nombre d'atomes de carbone n et sa formule brute ?",
            "options": [
              "n = 2 (C2H4O)",
              "n = 3 (C3H6O)",
              "n = 4 (C4H8O)",
              "n = 5 (C5H10O)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "M = 29 * d = 29 * 2,0 = 58 g/mol. Or 14n + 16 = 58 => 14n = 42 => n = 3. La formule brute est donc C3H6O."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Structure des aldéhydes : fonction en bout de chaîne",
          "stepTheme": "Les Aldéhydes",
          "stepBadge": "R-CHO",
          "paragraphText": "Les aldéhydes ont pour formule générale R-CHO. Le groupement -CHO est nécessairement situé à une extrémité de la chaîne carbonée. Le carbone fonctionnel porte toujours au moins un atome d'hydrogène. Le représentant le plus simple est le formaldéhyde ou méthanal H-CHO (n = 1).",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p01_q3",
            "type": "mcq",
            "prompt": "Parmi les formules semi-développées suivantes, laquelle représente sans ambiguïté un aldéhyde ?",
            "options": [
              "CH3-CO-CH2-CH3",
              "CH3-CH2-O-CH3",
              "CH3-CH2-CH2-CHO",
              "CH3-CH2-COOH"
            ],
            "correctAnswerIndex": 2,
            "explanation": "CH3-CH2-CH2-CHO possède le groupement terminal -CHO caractéristique des aldéhydes (le butanal). La première est une cétone, la deuxième un éther et la quatrième un acide carboxylique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Structure des cétones : fonction au cœur de la chaîne",
          "stepTheme": "Les Cétones",
          "stepBadge": "R1-CO-R2",
          "paragraphText": "Dans une cétone, le groupe carbonyle C=O est enserré entre deux atomes de carbone : R1-CO-R2. Les groupes R1 et R2 peuvent être identiques (cétone symétrique comme la propanone CH3-CO-CH3) ou différents (cétone dissymétrique comme la butanone CH3-CO-CH2-CH3). Il n'existe pas de cétone à 1 ou 2 carbones : le premier membre de la famille comporte au moins 3 carbones.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p01_q4",
            "type": "mcq",
            "prompt": "Pourquoi est-il chimiquement impossible qu'une cétone possède une masse molaire inférieure ou égale à 44 g/mol ?",
            "options": [
              "Parce que les cétones sont exclusivement des solides à température ambiante.",
              "Parce que le groupe C=O doit être lié à au moins deux groupements alkyles carbonés, imposant un minimum de 3 atomes de carbone (propanone, M = 58 g/mol).",
              "Parce que la liaison C=O consomme à elle seule 30 g/mol.",
              "Parce que les cétones dérivent uniquement des acides gras supérieurs."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La cétone la plus petite possible est la propanone CH3-CO-CH3 (n = 3), dont la masse molaire minimale vaut 14*3 + 16 = 58 g/mol. Aucune cétone ne peut exister en dessous de cette valeur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Isomérie de fonction entre aldéhydes et cétones",
          "stepTheme": "Isomérie de fonction",
          "stepBadge": "Même formule brute",
          "paragraphText": "Deux composés ayant la même formule brute CnH2nO (pour n >= 3) mais appartenant à des fonctions chimiques différentes sont des isomères de fonction. Par exemple, pour C3H6O, le propanal (aldéhyde) et la propanone (cétone) sont deux isomères de fonction : ils possèdent des propriétés physiques et chimiques totalement distinctes.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p01_q5",
            "type": "mcq",
            "prompt": "Quelle relation d'isomérie existe-t-il exactement entre le butanal et la butan-2-one (tous deux de formule brute C4H8O) ?",
            "options": [
              "Isomérie de chaîne",
              "Isomérie de position",
              "Isomérie de fonction",
              "Énantiomérie optique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ils possèdent la même formule brute C4H8O mais des groupes fonctionnels différents (le butanal est un aldéhyde -CHO et la butanone est une cétone >C=O) : ce sont des isomères de fonction."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Méthode d'inventaire des isomères carbonylés pour C4H8O",
          "stepTheme": "Inventaire d'isomères",
          "stepBadge": "Cas de C4H8O",
          "paragraphText": "Pour la formule brute C4H8O (n = 4), on dénombre systématiquement :\n- Pour les aldéhydes : le butanal (chaîne linéaire) et le 2-méthylpropanal (chaîne ramifiée), soit 2 aldéhydes isomères.\n- Pour les cétones : la butan-2-one (ou butanone), soit 1 cétone unique (le groupe C=O en position 2 ou 3 donne la même molécule).\nIl y a donc au total 3 composés carbonylés isomères pour C4H8O.",
          "exercise": {
            "id": "terminale_c_chimie_l01_composes_carbonyles_p01_q6",
            "type": "mcq",
            "prompt": "Combien d'aldéhydes et combien de cétones distincts peut-on écrire avec la formule brute C4H8O ?",
            "options": [
              "1 aldéhyde et 1 cétone",
              "2 aldéhydes et 1 cétone",
              "1 aldéhyde et 2 cétones",
              "3 aldéhydes et 2 cétones"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour C4H8O : 2 aldéhydes (butanal et 2-méthylpropanal) et 1 seule cétone (butanone). Soit 3 composés carbonylés au total."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège d'examen : Ne pas confondre alcène-alcool (énol) et composé carbonylé",
          "stepTheme": "Piège d'isomérie",
          "stepBadge": "Insaturation",
          "paragraphText": "La formule brute CnH2nO correspond à un degré d'insaturation égal à 1. Ce degré d'insaturation peut correspondre à la double liaison C=O (aldéhyde ou cétone), mais aussi à une double liaison C=C associée à un alcool ou un éther insaturé (ex : alcool allylique CH2=CH-CH2-OH). Les tests chimiques (2,4-DNPH) sont indispensables pour certifier la présence du groupe carbonyle.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p01_q7",
            "type": "mcq",
            "prompt": "Un liquide incolore de formule brute C3H6O ne donne aucun précipité lorsqu'on lui ajoute de la 2,4-DNPH. Que peut-on déduire de ce test négatif ?",
            "options": [
              "Le composé est obligatoirement le propanal.",
              "Le composé est la propanone mais à concentration trop faible.",
              "Le composé ne contient aucun groupe carbonyle C=O : ce n'est ni un aldéhyde ni une cétone (il peut s'agir d'un alcool insaturé comme le prop-2-èn-1-ol).",
              "Le test prouve de façon certaine que la molécule est un hydrocarbure saturé."
            ],
            "correctAnswerIndex": 2,
            "explanation": "La 2,4-DNPH est le réactif spécifique absolu du groupe carbonyle C=O. L'absence de précipité prouve l'absence de tout aldéhyde ou cétone : le composé est un autre isomère de C3H6O (comme un alcool ou éther insaturé ou cyclique)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p01_q1",
          "type": "mcq",
          "prompt": "Dans une molécule d'aldéhyde ou de cétone, quelle caractéristique électronique explique que les réactifs nucléophiles attaquent spécifiquement l'atome de carbone du groupe carbonyle ?",
          "options": [
            "Le carbone est plus électronégatif que l'oxygène et porte une charge partielle négative.",
            "La double liaison C=O est fortement polarisée, conférant au carbone une charge partielle positive delta+ (site électrophile).",
            "Le carbone possède deux doublets non liants libres sur sa couche de valence.",
            "Le carbone est hybridé sp3 et forme un tétraèdre compact imperméable aux électrons."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'oxygène attire vers lui les électrons de la liaison double pi : le carbone subit une polarisation delta+ qui en fait une cible électrophile attractive pour tout réactif riche en électrons (nucléophile)."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p01_q2",
          "type": "mcq",
          "prompt": "Un composé carbonylé saturé inconnu présente une densité de vapeur par rapport à l'air d = 2,0. Quel est son nombre d'atomes de carbone n et sa formule brute ?",
          "options": [
            "n = 2 (C2H4O)",
            "n = 3 (C3H6O)",
            "n = 4 (C4H8O)",
            "n = 5 (C5H10O)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "M = 29 * d = 29 * 2,0 = 58 g/mol. Or 14n + 16 = 58 => 14n = 42 => n = 3. La formule brute est donc C3H6O."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p01_q3",
          "type": "mcq",
          "prompt": "Parmi les formules semi-développées suivantes, laquelle représente sans ambiguïté un aldéhyde ?",
          "options": [
            "CH3-CO-CH2-CH3",
            "CH3-CH2-O-CH3",
            "CH3-CH2-CH2-CHO",
            "CH3-CH2-COOH"
          ],
          "correctAnswerIndex": 2,
          "explanation": "CH3-CH2-CH2-CHO possède le groupement terminal -CHO caractéristique des aldéhydes (le butanal). La première est une cétone, la deuxième un éther et la quatrième un acide carboxylique."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p01_q4",
          "type": "mcq",
          "prompt": "Pourquoi est-il chimiquement impossible qu'une cétone possède une masse molaire inférieure ou égale à 44 g/mol ?",
          "options": [
            "Parce que les cétones sont exclusivement des solides à température ambiante.",
            "Parce que le groupe C=O doit être lié à au moins deux groupements alkyles carbonés, imposant un minimum de 3 atomes de carbone (propanone, M = 58 g/mol).",
            "Parce que la liaison C=O consomme à elle seule 30 g/mol.",
            "Parce que les cétones dérivent uniquement des acides gras supérieurs."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La cétone la plus petite possible est la propanone CH3-CO-CH3 (n = 3), dont la masse molaire minimale vaut 14*3 + 16 = 58 g/mol. Aucune cétone ne peut exister en dessous de cette valeur."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p01_q5",
          "type": "mcq",
          "prompt": "Quelle relation d'isomérie existe-t-il exactement entre le butanal et la butan-2-one (tous deux de formule brute C4H8O) ?",
          "options": [
            "Isomérie de chaîne",
            "Isomérie de position",
            "Isomérie de fonction",
            "Énantiomérie optique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ils possèdent la même formule brute C4H8O mais des groupes fonctionnels différents (le butanal est un aldéhyde -CHO et la butanone est une cétone >C=O) : ce sont des isomères de fonction."
        },
        {
          "id": "terminale_c_chimie_l01_composes_carbonyles_p01_q6",
          "type": "mcq",
          "prompt": "Combien d'aldéhydes et combien de cétones distincts peut-on écrire avec la formule brute C4H8O ?",
          "options": [
            "1 aldéhyde et 1 cétone",
            "2 aldéhydes et 1 cétone",
            "1 aldéhyde et 2 cétones",
            "3 aldéhydes et 2 cétones"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour C4H8O : 2 aldéhydes (butanal et 2-méthylpropanal) et 1 seule cétone (butanone). Soit 3 composés carbonylés au total."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p01_q7",
          "type": "mcq",
          "prompt": "Un liquide incolore de formule brute C3H6O ne donne aucun précipité lorsqu'on lui ajoute de la 2,4-DNPH. Que peut-on déduire de ce test négatif ?",
          "options": [
            "Le composé est obligatoirement le propanal.",
            "Le composé est la propanone mais à concentration trop faible.",
            "Le composé ne contient aucun groupe carbonyle C=O : ce n'est ni un aldéhyde ni une cétone (il peut s'agir d'un alcool insaturé comme le prop-2-èn-1-ol).",
            "Le test prouve de façon certaine que la molécule est un hydrocarbure saturé."
          ],
          "correctAnswerIndex": 2,
          "explanation": "La 2,4-DNPH est le réactif spécifique absolu du groupe carbonyle C=O. L'absence de précipité prouve l'absence de tout aldéhyde ou cétone : le composé est un autre isomère de C3H6O (comme un alcool ou éther insaturé ou cyclique)."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l02_composes_carbonyles_p02",
      "order": 2,
      "title": "Règles de nomenclature IUPAC des aldéhydes et des cétones",
      "summary": "Suffixe -al avec carbone fonctionnel obligatoirement indicé 1, suffixe -one avec indice de position le plus bas possible, et règles de priorité pour les chaînes ramifiées.",
      "conceptExplanation": "La nomenclature officielle IUPAC permet de nommer sans ambiguïté n'importe quel composé carbonylé :\n\n1. Nomenclature des aldéhydes :\n- On cherche la chaîne carbonée la plus longue qui contient le carbone du groupe carbonyle.\n- Ce carbone fonctionnel porte OBLIGATOIREMENT le numéro 1 (on n'indique jamais l'indice '1' dans le suffixe car sa position est implicite).\n- On remplace le « e » final du nom de l'alcane correspondant par le suffixe « al ».\n- Exemples :\n  * H-CHO : méthanal (nom usuel : formaldéhyde ou formol à 37%)\n  * CH3-CHO : éthanal (nom usuel : acétaldéhyde)\n  * CH3-CH2-CHO : propanal\n  * CH3-CH(CH3)-CHO : 2-méthylpropanal\n\n2. Nomenclature des cétones :\n- On choisit la chaîne carbonée la plus longue contenant le carbone carbonyle.\n- On numérote la chaîne de manière à ce que le carbone du carbonyle reçoive le numéro le plus petit possible.\n- On remplace le « e » final de l'alcane par le suffixe « one », précédé de l'indice de position du carbone C=O.\n- Exemples :\n  * CH3-CO-CH3 : propan-2-one (ou propanone, indice 2 implicite car c'est la seule position possible)\n  * CH3-CO-CH2-CH3 : butan-2-one (ou butanone)\n  * CH3-CO-CH2-CH2-CH3 : pentan-2-one\n  * CH3-CH2-CO-CH2-CH3 : pentan-3-one\n  * CH3-CH(CH3)-CO-CH3 : 3-méthylbutan-2-one",
      "keyRule": "Pour un aldéhyde, le carbone -CHO est TOUJOURS le carbone n°1 (pas d'indice de position dans le nom). Pour une cétone, l'indice du C=O doit être le plus petit possible et doit obligatoirement figurer dans le nom (sauf propanone et butanone où il n'y a pas d'ambiguïté).",
      "formulas": [],
      "workedExample": {
        "title": "Nommer un composé carbonylé ramifié",
        "statement": "Donne le nom systématique de la molécule suivante : CH3-CH(CH3)-CH2-CO-CH3.",
        "methodSteps": [
          "Étape 1 : Identifier la fonction chimique : le groupe C=O est situé entre deux carbones, c'est une cétone.",
          "Étape 2 : Chaîne principale : la chaîne la plus longue contenant le carbonyle compte 5 atomes de carbone (dérivé du pentane).",
          "Étape 3 : Numérotation : de droite à gauche pour que le carbone carbonyle ait l'indice 2 (au lieu de 4 en partant de la gauche).",
          "Étape 4 : Substituant : le carbone n°4 porte un groupe méthyle -CH3."
        ],
        "conclusion": "Le nom systématique est : 4-méthylpentan-2-one."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau récapitulatif des règles de nomenclature IUPAC",
        "tableData": {
          "headers": [
            "Famille",
            "Structure type",
            "Suffixe",
            "Numérotation du carbone C=O",
            "Exemple type"
          ],
          "rows": [
            [
              "Aldéhyde",
              "R-CHO",
              "-al",
              "Toujours C1 (jamais mentionné dans le nom)",
              "CH3-CH(CH3)-CHO : 2-méthylpropanal"
            ],
            [
              "Cétone",
              "R1-CO-R2",
              "-one",
              "Indice le plus petit possible (ex : -2-one)",
              "CH3-CH2-CO-CH3 : butan-2-one"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le carbone de l'aldéhyde porte toujours l'indice 1",
          "stepTheme": "Nomenclature des aldéhydes",
          "stepBadge": "Carbone n°1 obligatoire",
          "paragraphText": "Puisque la fonction aldéhyde se trouve obligatoirement à l'extrémité de la chaîne, la numérotation commence TOUJOURS par son carbone. Il est formellement interdit d'écrire « propan-1-al » ou « butan-1-al » dans la nomenclature officielle : on écrit simplement « propanal » ou « butanal ».",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p02_q1",
            "type": "mcq",
            "prompt": "Parmi les propositions suivantes, quelle est l'écriture rigoureusement conforme aux règles de la nomenclature IUPAC pour l'aldéhyde linéaire à 3 atomes de carbone ?",
            "options": [
              "Propan-1-al",
              "Propanal",
              "1-oxopropane",
              "Propylaldéhyde-1"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour les aldéhydes, la position du carbone fonctionnel étant nécessairement en position 1, on ne précise jamais l'indice dans le suffixe : le nom officiel est exclusivement « propanal »."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Nommer un aldéhyde ramifié",
          "stepTheme": "Nomenclature des aldéhydes",
          "stepBadge": "Aldéhydes ramifiés",
          "paragraphText": "Dans un aldéhyde ramifié, la numérotation part du carbone -CHO (C1). Les substituants alkyles sont repérés par leurs indices de position sur cette chaîne et énoncés par ordre alphabétique en tête du nom.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p02_q2",
            "type": "mcq",
            "prompt": "Quel est le nom IUPAC de la molécule : CH3-CH2-CH(CH3)-CH2-CHO ?",
            "options": [
              "3-méthylpentanal",
              "2-méthylpentanal",
              "3-méthylbutanal",
              "4-méthylpentan-1-al"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le carbone du groupe -CHO est C1. Le carbone suivant -CH2- est C2, puis le carbone portant le -CH3 est C3, puis -CH2- est C4 et -CH3 terminal est C5. La chaîne compte 5 carbones : c'est le 3-méthylpentanal."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Numérotation des cétones : indice minimal pour le carbonyle",
          "stepTheme": "Nomenclature des cétones",
          "stepBadge": "Indice le plus bas",
          "paragraphText": "Pour les cétones, on parcourt la chaîne principale dans le sens qui confère au carbone du carbonyle >C=O l'indice numérique le plus bas. Cet indice est inséré immédiatement avant le suffixe « one » (ex : hexan-3-one).",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p02_q3",
            "type": "mcq",
            "prompt": "Quel est le nom officiel de la molécule : CH3-CH2-CO-CH2-CH2-CH3 ?",
            "options": [
              "Hexan-4-one",
              "Hexan-3-one",
              "Éthylpropylcétone-3",
              "Hexan-2-one"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La chaîne compte 6 atomes de carbone. De gauche à droite, le carbonyle est sur C3. De droite à gauche, il serait sur C4. On retient le plus petit indice : hexan-3-one."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Cétones ramifiées : priorité du carbonyle sur les substituants",
          "stepTheme": "Nomenclature des cétones",
          "stepBadge": "Priorité de numérotation",
          "paragraphText": "Lorsqu'une cétone comporte des ramifications alkyles, le sens de numérotation est D'ABORD dicté par le carbone carbonyle C=O. Ce n'est que dans le cas très rare où le groupe C=O se trouve exactement au milieu symétrique de la chaîne (ex : pentan-3-one) que l'on choisit le sens qui donne le plus petit indice aux substituants alkyles.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p02_q4",
            "type": "mcq",
            "prompt": "Quel est le nom officiel de la molécule : CH3-CH(CH3)-CO-CH3 ?",
            "options": [
              "3-méthylbutan-2-one",
              "2-méthylbutan-3-one",
              "Diméthylpropanone",
              "Pentan-2-one"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On numérote de droite à gauche pour donner au carbonyle l'indice 2 (au lieu de 3 de gauche à droite). Le substituant méthyle est alors porté par le carbone 3. Le nom est 3-méthylbutan-2-one."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Cas particulier de la propanone et de la butanone",
          "stepTheme": "Noms simplifiés",
          "stepBadge": "Absence d'ambiguïté",
          "paragraphText": "Pour la propanone (CH3-CO-CH3) et la butan-2-one (CH3-CO-CH2-CH3), il n'existe aucune autre position possible pour le carbonyle (en bout de chaîne, ce seraient des aldéhydes). C'est pourquoi les noms simplifiés « propanone » et « butanone » sont officiellement admis par l'IUPAC sans mentionner l'indice « -2- ».",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p02_q5",
            "type": "mcq",
            "prompt": "Pourquoi peut-on écrire indifféremment « butanone » ou « butan-2-one » sans commettre d'erreur de nomenclature ?",
            "options": [
              "Parce que la butanone est un mélange de deux isomères optiques.",
              "Parce que le carbonyle ne peut occuper que la position 2 dans une chaîne à 4 carbones : la position 3 donnerait la même molécule par numérotation inverse, et les positions 1 et 4 donneraient un aldéhyde (le butanal).",
              "Parce que l'IUPAC interdit les chiffres dans les molécules de moins de 5 carbones.",
              "Parce que la butanone n'a pas de formule semi-développée fixe."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans une chaîne à 4 carbones, placer le C=O en C2 ou en C3 correspond à la même cétone (butan-2-one) par symétrie de numérotation. L'indice 2 est donc sans ambiguïté."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège d'examen : Ne pas confondre noms usuels et noms systématiques",
          "stepTheme": "Nomenclature usuelle vs IUPAC",
          "stepBadge": "Vocabulaire historique",
          "paragraphText": "En chimie, certains noms historiques sont très fréquents dans les sujets : formaldéhyde (méthanal), acétaldéhyde (éthanal), acétone (propanone), méthyléthylcétone (butanone). Lors des épreuves, si la question demande le « nom systématique » ou « nom IUPAC », il faut impérativement fournir la forme normalisée (ex : éthanal et non acétaldéhyde).",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p02_q6",
            "type": "mcq",
            "prompt": "Quelle est la désignation systématique IUPAC de la substance commercialement appelée « acétone » ?",
            "options": [
              "Méthanal",
              "Éthanal",
              "Propanone (ou propan-2-one)",
              "Butan-2-one"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'acétone courante est la propanone CH3-CO-CH3, première molécule de la famille des cétones."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Détermination du nom à partir d'une réaction d'oxydation ménagée",
          "stepTheme": "Synthèse et nomenclature",
          "stepBadge": "Lien alcool-carbonyle",
          "paragraphText": "Le nom d'un composé carbonylé issu d'une oxydation ménagée découle directement du nom de l'alcool précurseur : l'oxydation de l'éthanol donne l'éthanal ; l'oxydation du propan-2-ol donne la propan-2-one ; l'oxydation du 2-méthylpropan-1-ol donne le 2-méthylpropanal.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p02_q7",
            "type": "mcq",
            "prompt": "On soumet le 3-méthylbutan-2-ol à une oxydation ménagée par une solution de dichromate de potassium en milieu acide. Quel est le nom du produit organique obtenu ?",
            "options": [
              "3-méthylbutanal",
              "3-méthylbutan-2-one",
              "2-méthylbutanal",
              "Acide 3-méthylbutanoïque"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le 3-méthylbutan-2-ol est un alcool secondaire (le -OH est en position 2). Son oxydation ménagée conserve la chaîne carbonée et transforme la fonction alcool en cétone au même emplacement : la 3-méthylbutan-2-one."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p02_q1",
          "type": "mcq",
          "prompt": "Parmi les propositions suivantes, quelle est l'écriture rigoureusement conforme aux règles de la nomenclature IUPAC pour l'aldéhyde linéaire à 3 atomes de carbone ?",
          "options": [
            "Propan-1-al",
            "Propanal",
            "1-oxopropane",
            "Propylaldéhyde-1"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour les aldéhydes, la position du carbone fonctionnel étant nécessairement en position 1, on ne précise jamais l'indice dans le suffixe : le nom officiel est exclusivement « propanal »."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p02_q2",
          "type": "mcq",
          "prompt": "Quel est le nom IUPAC de la molécule : CH3-CH2-CH(CH3)-CH2-CHO ?",
          "options": [
            "3-méthylpentanal",
            "2-méthylpentanal",
            "3-méthylbutanal",
            "4-méthylpentan-1-al"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le carbone du groupe -CHO est C1. Le carbone suivant -CH2- est C2, puis le carbone portant le -CH3 est C3, puis -CH2- est C4 et -CH3 terminal est C5. La chaîne compte 5 carbones : c'est le 3-méthylpentanal."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p02_q3",
          "type": "mcq",
          "prompt": "Quel est le nom officiel de la molécule : CH3-CH2-CO-CH2-CH2-CH3 ?",
          "options": [
            "Hexan-4-one",
            "Hexan-3-one",
            "Éthylpropylcétone-3",
            "Hexan-2-one"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La chaîne compte 6 atomes de carbone. De gauche à droite, le carbonyle est sur C3. De droite à gauche, il serait sur C4. On retient le plus petit indice : hexan-3-one."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p02_q4",
          "type": "mcq",
          "prompt": "Quel est le nom officiel de la molécule : CH3-CH(CH3)-CO-CH3 ?",
          "options": [
            "3-méthylbutan-2-one",
            "2-méthylbutan-3-one",
            "Diméthylpropanone",
            "Pentan-2-one"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On numérote de droite à gauche pour donner au carbonyle l'indice 2 (au lieu de 3 de gauche à droite). Le substituant méthyle est alors porté par le carbone 3. Le nom est 3-méthylbutan-2-one."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p02_q5",
          "type": "mcq",
          "prompt": "Pourquoi peut-on écrire indifféremment « butanone » ou « butan-2-one » sans commettre d'erreur de nomenclature ?",
          "options": [
            "Parce que la butanone est un mélange de deux isomères optiques.",
            "Parce que le carbonyle ne peut occuper que la position 2 dans une chaîne à 4 carbones : la position 3 donnerait la même molécule par numérotation inverse, et les positions 1 et 4 donneraient un aldéhyde (le butanal).",
            "Parce que l'IUPAC interdit les chiffres dans les molécules de moins de 5 carbones.",
            "Parce que la butanone n'a pas de formule semi-développée fixe."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans une chaîne à 4 carbones, placer le C=O en C2 ou en C3 correspond à la même cétone (butan-2-one) par symétrie de numérotation. L'indice 2 est donc sans ambiguïté."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p02_q6",
          "type": "mcq",
          "prompt": "Quelle est la désignation systématique IUPAC de la substance commercialement appelée « acétone » ?",
          "options": [
            "Méthanal",
            "Éthanal",
            "Propanone (ou propan-2-one)",
            "Butan-2-one"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'acétone courante est la propanone CH3-CO-CH3, première molécule de la famille des cétones."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p02_q7",
          "type": "mcq",
          "prompt": "On soumet le 3-méthylbutan-2-ol à une oxydation ménagée par une solution de dichromate de potassium en milieu acide. Quel est le nom du produit organique obtenu ?",
          "options": [
            "3-méthylbutanal",
            "3-méthylbutan-2-one",
            "2-méthylbutanal",
            "Acide 3-méthylbutanoïque"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le 3-méthylbutan-2-ol est un alcool secondaire (le -OH est en position 2). Son oxydation ménagée conserve la chaîne carbonée et transforme la fonction alcool en cétone au même emplacement : la 3-méthylbutan-2-one."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l02_composes_carbonyles_p03",
      "order": 3,
      "title": "Caractérisation commune du groupe carbonyle par la 2,4-DNPH",
      "summary": "Réaction de condensation avec la 2,4-dinitrophénylhydrazine, apparition du précipité jaune-orangé caractéristique et identification de la famille carbonylée.",
      "conceptExplanation": "Pour démontrer expérimentalement la présence d'un groupe carbonyle (>C=O) dans un échantillon liquide ou solide inconnu, on réalise le test commun à la 2,4-DNPH (2,4-dinitrophénylhydrazine).\n\n1. Le réactif 2,4-DNPH :\nLa 2,4-dinitrophénylhydrazine est une molécule azotée aromatique de formule brute C6H3(NO2)2-NH-NH2. Elle est dissoute dans un mélange d'éthanol et d'acide sulfurique pour constituer une solution limpide de couleur orangée.\n\n2. Principe chimique de la réaction :\nIl s'agit d'une réaction de condensation entre le groupe carbonyle (>C=O) du composé et le groupe amine primaire (-NH2) de l'hydrazine, avec élimination d'une molécule d'eau :\n>C=O + H2N-NH-Ar ---> >C=N-NH-Ar + H2O.\nLe produit formé est une 2,4-dinitrophénylhydrazone.\n\n3. Résultat expérimental visible :\n- En présence d'un ALDÉHYDE : formation quasi instantanée d'un précipité jaune, orangé ou rouge selon la conjugaison de la chaîne carbonée.\n- En présence d'une CÉTONE : formation également d'un précipité jaune-orangé cristallisé.\n- En présence de tout autre composé organique (alcool, alcane, acide carboxylique, ester, eau) : aucune formation de précipité (la solution reste limpide).",
      "keyRule": "Le test à la 2,4-DNPH est un test de FAMILLE : un précipité jaune-orangé prouve de manière indiscutable que la molécule est un composé carbonylé (aldéhyde OU cétone), mais il ne permet JAMAIS à lui seul de savoir s'il s'agit d'un aldéhyde ou d'une cétone.",
      "formulas": [
        {
          "name": "Réaction de condensation à la 2,4-DNPH",
          "formula": "\\mathrm{R_1R_2C=O} + \\mathrm{H_2N-NH-Ar} \\longrightarrow \\mathrm{R_1R_2C=N-NH-Ar} \\downarrow + \\mathrm{H_2O}",
          "note": "Précipité jaune-orangé d'hydrazone insoluble dans l'eau"
        }
      ],
      "workedExample": {
        "title": "Interprétation d'une série de tests préliminaires",
        "statement": "Un élève dispose de 3 flacons étiquetés X, Y et Z contenant l'un de l'éthanol, l'autre de l'éthanal et le troisième de l'acide éthanoïque. L'ajout de 2,4-DNPH ne donne un précipité jaune que dans le flacon Y. Que contient le flacon Y ?",
        "methodSteps": [
          "Étape 1 : Rappeler la spécificité de la 2,4-DNPH : elle réagit exclusivement avec les aldéhydes et les cétones.",
          "Étape 2 : Analyser la nature chimique des trois espèces : l'éthanol est un alcool, l'acide éthanoïque est un acide carboxylique, l'éthanal est un aldéhyde (composé carbonylé).",
          "Étape 3 : Seul l'éthanal possède le groupe carbonyle C=O libre requis pour condenser la 2,4-DNPH."
        ],
        "conclusion": "Le flacon Y contient l'éthanal."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau de spécificité du test à la 2,4-DNPH",
        "tableData": {
          "headers": [
            "Famille chimique testée",
            "Exemple de composé",
            "Observation avec la 2,4-DNPH",
            "Conclusion diagnostique"
          ],
          "rows": [
            [
              "Aldéhyde",
              "Éthanal, Propanal",
              "Précipité jaune-orangé",
              "Test positif : présence de C=O confirmée"
            ],
            [
              "Cétone",
              "Propanone, Butanone",
              "Précipité jaune-orangé",
              "Test positif : présence de C=O confirmée"
            ],
            [
              "Alcool",
              "Éthanol, Butan-2-ol",
              "Aucun précipité (solution limpide)",
              "Test négatif : absence de groupe C=O"
            ],
            [
              "Acide carboxylique",
              "Acide éthanoïque",
              "Aucun précipité (solution limpide)",
              "Test négatif : le -COOH ne réagit pas comme un carbonyle libre"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le réactif 2,4-DNPH et son rôle diagnostique",
          "stepTheme": "Test de caractérisation",
          "stepBadge": "2,4-DNPH",
          "paragraphText": "La 2,4-dinitrophénylhydrazine (2,4-DNPH) est le réactif analytique de référence pour détecter la présence de la liaison C=O. Lorsqu'on verse quelques gouttes de ce réactif dans une solution d'aldéhyde ou de cétone, les cristaux de l'hydrazone formée précipitent rapidement car ils sont totalement insolubles en milieu aqueux.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p03_q1",
            "type": "mcq",
            "prompt": "Que provoque l'ajout de quelques gouttes de réactif à la 2,4-DNPH dans un tube à essai contenant de la propanone pure ?",
            "options": [
              "Une décoloration instantanée sans aucun trouble.",
              "L'apparition immédiate d'un précipité cristallisé jaune-orangé.",
              "Le dégagement d'un gaz qui fait exploser une allumette.",
              "La formation d'un miroir métallique argenté sur les parois."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La propanone étant un composé carbonylé (cétone), elle se condense avec la 2,4-DNPH pour former un précipité jaune-orangé d'hydrazone."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Neutralité du test vis-à-vis des acides carboxyliques et des esters",
          "stepTheme": "Spécificité du carbonyle",
          "stepBadge": "Absence de fausse réaction",
          "paragraphText": "Bien que les acides carboxyliques (-COOH) et les esters (-COO-) comportent un groupe C=O, ils ne donnent AUCUN précipité avec la 2,4-DNPH. En effet, la délocalisation des électrons du doublet de l'atome d'oxygène adjacent (-OH ou -OR) modifie profondément l'électrophilie du carbone, ce qui inhibe totalement la condensation avec l'hydrazine.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p03_q2",
            "type": "mcq",
            "prompt": "Pourquoi l'acide propanoïque CH3-CH2-COOH ne donne-t-il aucun précipité avec la 2,4-DNPH bien qu'il contienne une double liaison C=O ?",
            "options": [
              "Parce que son point d'ébullition est trop faible pour permettre la réaction.",
              "Parce que la conjugaison du carbonyle avec le groupe -OH modifie la réactivité et empêche la réaction de condensation spécifique des composés carbonylés simples.",
              "Parce que l'acide propanoïque détruit le solvant alcoolique du réactif.",
              "Parce que la molécule ne comporte pas assez d'atomes de carbone."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans le groupe carboxyle -COOH, la mésomérie avec le -OH stabilise le carbone et empêche l'attaque de la 2,4-DNPH : le test est rigoureusement négatif."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Protocole expérimental de mise en œuvre au laboratoire",
          "stepTheme": "Travaux pratiques",
          "stepBadge": "Mode opératoire",
          "paragraphText": "Le test à la 2,4-DNPH s'effectue toujours à froid, dans un tube à essai sec et propre : on introduit environ 1 mL du composé à tester, puis on ajoute 1 mL de solution de 2,4-DNPH. On agite doucement. La formation du précipité jaune ou orangé intervient en quelques secondes à température ambiante, sans aucun chauffage.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p03_q3",
            "type": "mcq",
            "prompt": "Lors d'une séance de TP, quelle précaution ou condition opératoire caractérise la réalisation correcte du test à la 2,4-DNPH ?",
            "options": [
              "Il faut impérativement faire bouillir le mélange à reflux pendant 30 minutes.",
              "La réaction se réalise simplement à froid (température ambiante) par mise en contact et légère agitation.",
              "Il faut ajouter obligatoirement de la poudre de zinc métallique comme catalyseur.",
              "Le test doit obligatoirement être réalisé sous atmosphère inerte d'azote pur."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le test à la 2,4-DNPH s'effectue simplement à froid : la condensation est quasi instantanée et le précipité cristallise immédiatement à température ambiante."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Piège classique d'examen : Ne pas conclure prématurément sur la fonction",
          "stepTheme": "Raisonnement d'examen",
          "stepBadge": "Ne pas trancher trop tôt",
          "paragraphText": "Si un sujet de Bac indique : « Le composé X donne un précipité jaune avec la 2,4-DNPH », l'erreur éliminatoire est d'affirmer immédiatement « Donc X est un aldéhyde ». La SEULE conclusion scientifique rigoureuse à cette étape est : « X est un composé carbonylé (aldéhyde ou cétone) ». Il faut obligatoirement un second test différentiel pour trancher.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p03_q4",
            "type": "mcq",
            "prompt": "Un énoncé d'examen précise : « Un composé organique liquide A de formule brute C5H10O forme un précipité jaune-orangé en présence de 2,4-DNPH ». Quelle conclusion logique et complète l'élève doit-il formuler ?",
            "options": [
              "A est avec certitude le pentanal.",
              "A est avec certitude la pentan-2-one.",
              "A est un composé carbonylé : c'est soit un aldéhyde, soit une cétone à 5 atomes de carbone.",
              "A est un alcool primaire qui s'est déshydraté."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le test à la 2,4-DNPH ne distingue pas les aldéhydes des cétones : il atteste uniquement de l'appartenance à la famille des composés carbonylés."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Caractérisation par le point de fusion de l'hydrazone",
          "stepTheme": "Chimie analytique",
          "stepBadge": "Banc Kofler",
          "paragraphText": "En chimie analytique classique, les hydrazones formées sont filtrées, séchées puis analysées sur un banc Kofler. Chaque 2,4-dinitrophénylhydrazone possède une température de fusion nette et caractéristique répertoriée dans des tables (ex : l'hydrazone de l'acétone fond à 126 °C), ce qui permet d'identifier formellement le composé sans appareil de spectrométrie.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p03_q5",
            "type": "mcq",
            "prompt": "Dans un laboratoire de contrôle, pourquoi recueille-t-on et sèche-t-on le précipité jaune obtenu avec la 2,4-DNPH pour mesurer son point de fusion au banc Kofler ?",
            "options": [
              "Pour vérifier si le produit est toxique pour les eaux usées.",
              "Parce que chaque composé carbonylé donne une hydrazone spécifique ayant une température de fusion tabulée unique permettant de l'identifier avec certitude.",
              "Pour régénérer l'aldéhyde de départ par vaporisation thermique.",
              "Pour mesurer la constante d'acidité Ka du mélange."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La mesure du point de fusion du dérivé cristallisé (l'hydrazone) permet de discriminer sans équivoque deux isomères ayant des propriétés très voisines."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Différenciation de trois liquides inconnus",
          "stepTheme": "Résolution de problème",
          "stepBadge": "Diagnostic complet",
          "paragraphText": "Soit trois tubes contenant du butan-1-ol, de la butanone et de l'acide butanoïque. L'ajout de 2,4-DNPH provoque un précipité dans un seul tube : celui de la butanone. L'ajout de sodium métallique dégagerait du H2 dans le tube de l'alcool, et l'ajout de BBT virerait au jaune dans le tube de l'acide.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p03_q6",
            "type": "mcq",
            "prompt": "On dispose d'un tube contenant du propan-1-ol et d'un autre contenant de la propanone. Quel test rapide permet d'identifier le tube contenant la propanone en moins de 10 secondes ?",
            "options": [
              "Ajouter de l'eau distillée : l'un est soluble et l'autre non.",
              "Ajouter quelques gouttes de 2,4-DNPH : seul le tube de propanone donne un précipité jaune-orangé.",
              "Mesurer la température avec un thermomètre ordinaire.",
              "Ajouter quelques gouttes d'acide chlorhydrique."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La propanone est une cétone qui forme instantanément un précipité jaune-orangé avec la 2,4-DNPH, alors que l'alcool (propan-1-ol) ne donne aucun précipité."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Conservation et dégradation du réactif 2,4-DNPH",
          "stepTheme": "Sécurité & Pratique",
          "stepBadge": "Sécurité labo",
          "paragraphText": "La 2,4-DNPH solide est un explosif potentiel sensible aux chocs lorsqu'elle est totalement déshydratée. Au laboratoire des lycées, elle est impérativement conservée mouillée d'eau ou en solution stabilisée dans l'éthanol et l'acide sulfurique concentré.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p03_q7",
            "type": "mcq",
            "prompt": "Sous quelle forme la 2,4-dinitrophénylhydrazine est-elle manipulée en toute sécurité au laboratoire de chimie ?",
            "options": [
              "Sous forme de poudre sèche finement broyée exposée à la lumière.",
              "En solution liquide stabilisée dans un milieu acidifié éthanolique ou sous forme de solide humide.",
              "Sous forme gazeuse sous très haute pression.",
              "Dissoute dans une solution aqueuse concentrée de soude à 80 °C."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour des raisons de sécurité chimique évidentes, la 2,4-DNPH est stockée humidifiée ou directement préparée en solution acide hydro-alcoolique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p03_q1",
          "type": "mcq",
          "prompt": "Que provoque l'ajout de quelques gouttes de réactif à la 2,4-DNPH dans un tube à essai contenant de la propanone pure ?",
          "options": [
            "Une décoloration instantanée sans aucun trouble.",
            "L'apparition immédiate d'un précipité cristallisé jaune-orangé.",
            "Le dégagement d'un gaz qui fait exploser une allumette.",
            "La formation d'un miroir métallique argenté sur les parois."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La propanone étant un composé carbonylé (cétone), elle se condense avec la 2,4-DNPH pour former un précipité jaune-orangé d'hydrazone."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p03_q2",
          "type": "mcq",
          "prompt": "Pourquoi l'acide propanoïque CH3-CH2-COOH ne donne-t-il aucun précipité avec la 2,4-DNPH bien qu'il contienne une double liaison C=O ?",
          "options": [
            "Parce que son point d'ébullition est trop faible pour permettre la réaction.",
            "Parce que la conjugaison du carbonyle avec le groupe -OH modifie la réactivité et empêche la réaction de condensation spécifique des composés carbonylés simples.",
            "Parce que l'acide propanoïque détruit le solvant alcoolique du réactif.",
            "Parce que la molécule ne comporte pas assez d'atomes de carbone."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans le groupe carboxyle -COOH, la mésomérie avec le -OH stabilise le carbone et empêche l'attaque de la 2,4-DNPH : le test est rigoureusement négatif."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p03_q3",
          "type": "mcq",
          "prompt": "Lors d'une séance de TP, quelle précaution ou condition opératoire caractérise la réalisation correcte du test à la 2,4-DNPH ?",
          "options": [
            "Il faut impérativement faire bouillir le mélange à reflux pendant 30 minutes.",
            "La réaction se réalise simplement à froid (température ambiante) par mise en contact et légère agitation.",
            "Il faut ajouter obligatoirement de la poudre de zinc métallique comme catalyseur.",
            "Le test doit obligatoirement être réalisé sous atmosphère inerte d'azote pur."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le test à la 2,4-DNPH s'effectue simplement à froid : la condensation est quasi instantanée et le précipité cristallise immédiatement à température ambiante."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p03_q4",
          "type": "mcq",
          "prompt": "Un énoncé d'examen précise : « Un composé organique liquide A de formule brute C5H10O forme un précipité jaune-orangé en présence de 2,4-DNPH ». Quelle conclusion logique et complète l'élève doit-il formuler ?",
          "options": [
            "A est avec certitude le pentanal.",
            "A est avec certitude la pentan-2-one.",
            "A est un composé carbonylé : c'est soit un aldéhyde, soit une cétone à 5 atomes de carbone.",
            "A est un alcool primaire qui s'est déshydraté."
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le test à la 2,4-DNPH ne distingue pas les aldéhydes des cétones : il atteste uniquement de l'appartenance à la famille des composés carbonylés."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p03_q5",
          "type": "mcq",
          "prompt": "Dans un laboratoire de contrôle, pourquoi recueille-t-on et sèche-t-on le précipité jaune obtenu avec la 2,4-DNPH pour mesurer son point de fusion au banc Kofler ?",
          "options": [
            "Pour vérifier si le produit est toxique pour les eaux usées.",
            "Parce que chaque composé carbonylé donne une hydrazone spécifique ayant une température de fusion tabulée unique permettant de l'identifier avec certitude.",
            "Pour régénérer l'aldéhyde de départ par vaporisation thermique.",
            "Pour mesurer la constante d'acidité Ka du mélange."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La mesure du point de fusion du dérivé cristallisé (l'hydrazone) permet de discriminer sans équivoque deux isomères ayant des propriétés très voisines."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p03_q6",
          "type": "mcq",
          "prompt": "On dispose d'un tube contenant du propan-1-ol et d'un autre contenant de la propanone. Quel test rapide permet d'identifier le tube contenant la propanone en moins de 10 secondes ?",
          "options": [
            "Ajouter de l'eau distillée : l'un est soluble et l'autre non.",
            "Ajouter quelques gouttes de 2,4-DNPH : seul le tube de propanone donne un précipité jaune-orangé.",
            "Mesurer la température avec un thermomètre ordinaire.",
            "Ajouter quelques gouttes d'acide chlorhydrique."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La propanone est une cétone qui forme instantanément un précipité jaune-orangé avec la 2,4-DNPH, alors que l'alcool (propan-1-ol) ne donne aucun précipité."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p03_q7",
          "type": "mcq",
          "prompt": "Sous quelle forme la 2,4-dinitrophénylhydrazine est-elle manipulée en toute sécurité au laboratoire de chimie ?",
          "options": [
            "Sous forme de poudre sèche finement broyée exposée à la lumière.",
            "En solution liquide stabilisée dans un milieu acidifié éthanolique ou sous forme de solide humide.",
            "Sous forme gazeuse sous très haute pression.",
            "Dissoute dans une solution aqueuse concentrée de soude à 80 °C."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour des raisons de sécurité chimique évidentes, la 2,4-DNPH est stockée humidifiée ou directement préparée en solution acide hydro-alcoolique."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l02_composes_carbonyles_p04",
      "order": 4,
      "title": "Tests spécifiques des aldéhydes : Pouvoir réducteur face aux réactifs doux",
      "summary": "Différenciation formelle aldéhyde vs cétone, réactif de Schiff (coloration rose), liqueur de Fehling (précipité rouge brique Cu2O), réactif de Tollens (miroir d'argent) et demi-équations redox.",
      "conceptExplanation": "La différence chimique capitale entre aldéhydes et cétones réside dans leur comportement d'oxydoréduction :\n- Les aldéhydes (R-CHO) possèdent un atome d'hydrogène lié au carbone carbonyle. Cet hydrogène est facilement arraché : les aldéhydes sont des RÉDUCTEURS forts vis-à-vis des oxydants doux.\n- Les cétones (R1-CO-R2) ne possèdent aucun hydrogène sur le carbone carbonyle : elles sont totalement inertes vis-à-vis des oxydants doux.\n\n1. Réaction avec le réactif de Schiff :\nLe réactif de Schiff est une solution aqueuse de fuchsine décolorée par le dioxyde de soufre (solution incolore).\n- En présence d'un aldéhyde, à froid : la coloration rose-violacée réapparaît instantanément.\n- En présence d'une cétone : la solution reste rigoureusement incolore.\n\n2. Réduction du nitrate d'argent ammoniacal (Réactif de Tollens) :\nLe réactif de Tollens contient le complexe d'argent I diamine [Ag(NH3)2]+ en milieu basique.\n- Chauffé doucement au bain-marie avec un aldéhyde, l'argent I est réduit en argent métallique (Ag) qui se dépose sur la paroi du tube sous la forme d'un magnifique miroir d'argent réfléchissant :\nR-CHO + 2 [Ag(NH3)2]+ + 3 OH- ---> R-COO- + 2 Ag(s) + 4 NH3 + 2 H2O.\n- Les cétones ne réagissent pas.\n\n3. Réduction de la liqueur de Fehling :\nLa liqueur de Fehling est une solution bleue intense contenant des ions cuivre II (Cu2+) complexés par des ions tartrate en milieu fortement alcalin (OH-).\n- Chauffée à l'ébullition douce en présence d'un aldéhyde, les ions Cu2+ sont réduits en oxyde de cuivre I (Cu2O), formant un précipité rouge brique caractéristique :\nR-CHO + 2 Cu2+ + 5 OH- ---> R-COO- + Cu2O(s) + 3 H2O.\n- Les cétones ne réduisent jamais la liqueur de Fehling (la solution reste d'un bleu limpide).",
      "keyRule": "Schiff -> rose à froid ; Tollens -> miroir d'argent à chaud ; Fehling -> précipité rouge brique à chaud. Si l'un de ces 3 tests est positif, c'est obligatoirement un ALDÉHYDE. Si le test à la 2,4-DNPH est positif mais que ces 3 tests sont négatifs, c'est une CÉTONE.",
      "formulas": [
        {
          "name": "Oxydation d'un aldéhyde par le réactif de Tollens",
          "formula": "\\mathrm{R-CHO} + 2\\,[\\mathrm{Ag(NH_3)_2}]^+ + 3\\,\\mathrm{OH^-} \\longrightarrow \\mathrm{R-COO^-} + 2\\,\\mathrm{Ag}_{\\text{(miroir)}} + 4\\,\\mathrm{NH_3} + 2\\,\\mathrm{H_2O}",
          "note": "Dépôt d'argent métallique brillant sur les parois du tube"
        },
        {
          "name": "Oxydation d'un aldéhyde par la liqueur de Fehling",
          "formula": "\\mathrm{R-CHO} + 2\\,\\mathrm{Cu^{2+}} + 5\\,\\mathrm{OH^-} \\longrightarrow \\mathrm{R-COO^-} + \\mathrm{Cu_2O}_{\\text{(rouge brique)}} \\downarrow + 3\\,\\mathrm{H_2O}",
          "note": "Formation d'un précipité rouge brique d'oxyde de cuivre I"
        }
      ],
      "workedExample": {
        "title": "Établissement des demi-équations redox avec la liqueur de Fehling",
        "statement": "Écris les demi-équations électroniques et l'équation-bilan de la réaction entre l'éthanal et la liqueur de Fehling en milieu basique.",
        "methodSteps": [
          "Étape 1 : Demi-équation d'oxydation de l'aldéhyde en milieu basique (OH-) : CH3-CHO + 3 OH- <===> CH3-COO- + 2 H2O + 2 e-.",
          "Étape 2 : Demi-équation de réduction des ions cuivre II en oxyde de cuivre I : 2 Cu2+ + 2 OH- + 2 e- <===> Cu2O + H2O.",
          "Étape 3 : Sommer les deux demi-équations (2 électrons de chaque côté) : CH3-CHO + 3 OH- + 2 Cu2+ + 2 OH- ---> CH3-COO- + 2 H2O + Cu2O + H2O.",
          "Étape 4 : Regrouper les ions OH- (3 + 2 = 5 OH-) et les molécules d'eau (2 + 1 = 3 H2O)."
        ],
        "conclusion": "L'équation-bilan est : CH3-CHO + 2 Cu2+ + 5 OH- -> CH3-COO- + Cu2O + 3 H2O."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau officiel des tests de caractérisation des aldéhydes et cétones",
        "tableData": {
          "headers": [
            "Réactif",
            "Conditions opératoires",
            "Observation avec un Aldéhyde",
            "Observation avec une Cétone"
          ],
          "rows": [
            [
              "2,4-DNPH",
              "À froid (température ambiante)",
              "Précipité jaune-orangé",
              "Précipité jaune-orangé"
            ],
            [
              "Réactif de Schiff",
              "À froid",
              "Coloration rose persistante",
              "Aucune coloration (reste incolore)"
            ],
            [
              "Liqueur de Fehling",
              "À chaud (au bain-marie bouillant)",
              "Précipité rouge brique de Cu2O",
              "Aucun précipité (reste bleu limpide)"
            ],
            [
              "Réactif de Tollens",
              "À chaud doux (bain-marie à 60 °C)",
              "Miroir d'argent métallique",
              "Aucun dépôt (reste limpide)"
            ],
            [
              "Permanganate acidifié (KMnO4)",
              "À chaud doux en milieu acide",
              "Décoloration du violet (Mn2+)",
              "Pas de réaction (reste violet)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le réactif de Schiff et le virage au rose à froid",
          "stepTheme": "Tests distinctifs",
          "stepBadge": "Réactif de Schiff",
          "paragraphText": "Le réactif de Schiff est extrêmement sensible et doit impérativement être utilisé à froid. En présence d'un aldéhyde, il vire au rose-fuchsia en quelques instants. Il ne faut jamais le chauffer, car la chaleur chasse le dioxyde de soufre dissous et fait réapparaître la couleur rose de la fuchsine même en l'absence de tout aldéhyde (faux positif).",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p04_q1",
            "type": "mcq",
            "prompt": "Pourquoi est-il rigoureusement interdit de chauffer le réactif de Schiff lors du test de caractérisation d'un aldéhyde ?",
            "options": [
              "Parce que la fuchsine s'évapore et produit des gaz toxiques.",
              "Parce que le chauffage expulse le SO2 dissous, ce qui fait virer spontanément le réactif au rose sans présence d'aldéhyde (fausse réaction positive).",
              "Parce que la chaleur transforme immédiatement les cétones en aldéhydes.",
              "Parce que le verre du tube à essai est corrodé par le réactif à chaud."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le réactif de Schiff est stabilisé par du SO2 dissous à froid. Chauffer dégaze le SO2 et fait réapparaître la couleur rose de la fuchsine libre, créant un artefact expérimental."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le réactif de Tollens et la formation du miroir d'argent",
          "stepTheme": "Tests distinctifs",
          "stepBadge": "Miroir d'argent",
          "paragraphText": "Le réactif de Tollens contient l'ion diamine argent I [Ag(NH3)2]+. Chauffé doucement au bain-marie avec un aldéhyde, l'aldéhyde est oxydé en ion carboxylate tandis que les ions argent I sont réduits en argent métallique Ag(0). Cet argent se dépose en couche uniforme et brillante sur la surface intérieure en verre du tube, créant un véritable miroir.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p04_q2",
            "type": "mcq",
            "prompt": "Quelle espèce chimique est responsable du brillant miroir d'argent formé lors du test positif au réactif de Tollens avec le butanal ?",
            "options": [
              "Des ions Ag+ hydratés en solution.",
              "De l'oxyde d'argent Ag2O solide noir.",
              "De l'argent métallique Ag(s) à l'état zéro d'oxydation déposé sur le verre.",
              "Du nitrate de potassium cristallisé."
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'ion argent I [Ag(NH3)2]+ capte un électron pour être réduit en argent métallique neutre Ag(s) qui adhère aux parois du tube."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La liqueur de Fehling et le précipité rouge brique",
          "stepTheme": "Tests distinctifs",
          "stepBadge": "Liqueur de Fehling",
          "paragraphText": "La liqueur de Fehling contient des ions Cu2+ de couleur bleue. À chaud (au bain-marie bouillant), un aldéhyde réduit les ions Cu2+ (cuivre au degré d'oxydation +II) en oxyde de cuivre I Cu2O (cuivre au degré d'oxydation +I). Ce composé insoluble précipite sous la forme d'une poudre rouge brique très caractéristique.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p04_q3",
            "type": "mcq",
            "prompt": "Quelle est la formule chimique exacte et le degré d'oxydation du cuivre dans le précipité rouge brique obtenu avec la liqueur de Fehling ?",
            "options": [
              "CuO avec le cuivre au degré d'oxydation +II",
              "Cu2O (oxyde de cuivre I) avec le cuivre au degré d'oxydation +I",
              "Cu(OH)2 avec le cuivre au degré d'oxydation +II",
              "Cu métallique avec le cuivre au degré d'oxydation 0"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le précipité rouge brique est constitué d'oxyde de cuivre I Cu2O, où l'élément cuivre se trouve au degré d'oxydation +I (réduit depuis Cu2+)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Équilibrer la réaction globale de Fehling en milieu basique",
          "stepTheme": "Équations d'oxydoréduction",
          "stepBadge": "Bilan redox en milieu basique",
          "paragraphText": "En milieu basique, l'aldéhyde est oxydé selon : R-CHO + 3 OH- -> R-COO- + 2 H2O + 2 e-. Le cuivre est réduit selon : 2 Cu2+ + 2 OH- + 2 e- -> Cu2O + H2O. L'addition des deux demi-équations fait apparaître 5 ions OH- à gauche et 3 molécules d'eau à droite : R-CHO + 2 Cu2+ + 5 OH- -> R-COO- + Cu2O + 3 H2O.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p04_q4",
            "type": "mcq",
            "prompt": "Quel est le coefficient stœchiométrique des ions hydroxyde OH- dans l'équation-bilan équilibrée de réduction de la liqueur de Fehling par le méthanal H-CHO ?",
            "options": [
              "2",
              "3",
              "4",
              "5"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Dans l'équation-bilan globale R-CHO + 2 Cu2+ + 5 OH- -> R-COO- + Cu2O + 3 H2O, le coefficient stœchiométrique devant les ions OH- est rigoureusement égal à 5."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Inertie totale des cétones vis-à-vis des oxydants doux",
          "stepTheme": "Comportement des cétones",
          "stepBadge": "Inertie redox",
          "paragraphText": "Les cétones ne possèdent aucun atome d'hydrogène fixé sur leur carbone fonctionnel : elles ne peuvent pas être oxydées sans briser des liaisons covalentes carbone-carbone très stables. Elles sont donc totalement inertes vis-à-vis du réactif de Schiff, de la liqueur de Fehling et du réactif de Tollens, ce qui constitue la base expérimentale de leur identification.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p04_q5",
            "type": "mcq",
            "prompt": "On chauffe au bain-marie un mélange de propanone et de liqueur de Fehling. Quelle observation expérimentale fait-on après 10 minutes ?",
            "options": [
              "Apparition d'un précipité rouge brique dense.",
              "Formation d'un miroir métallique argenté brillant.",
              "Aucun changement : la solution conserve sa couleur bleue limpide d'origine.",
              "La solution se décolore totalement et dégage un gaz piquant."
            ],
            "correctAnswerIndex": 2,
            "explanation": "La propanone étant une cétone, elle ne possède aucune propriété réductrice : la liqueur de Fehling reste intacte et conserve sa couleur bleue."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Arbre de décision diagnostique pour identifier un composé inconnu",
          "stepTheme": "Démarche diagnostique",
          "stepBadge": "Arbre d'identification",
          "paragraphText": "Face à un liquide organique inconnu :\n1) Tester avec la 2,4-DNPH : si négatif -> pas de carbonyle (alcool, ester, etc.) ; si positif (précipité jaune) -> composé carbonylé.\n2) Tester avec la liqueur de Fehling ou le réactif de Tollens : si positif -> ALDÉHYDE ; si négatif -> CÉTONE.\n3) Si aldéhyde, le test au réactif de Schiff confirme le résultat par un virage au rose.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p04_q6",
            "type": "mcq",
            "prompt": "Un liquide X donne un précipité jaune avec la 2,4-DNPH, mais le test au réactif de Tollens ne produit aucun miroir d'argent. Quelle est la nature de X ?",
            "options": [
              "X est un alcool primaire.",
              "X est un aldéhyde.",
              "X est une cétone.",
              "X est un acide carboxylique saturé."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Précipité avec 2,4-DNPH = composé carbonylé (aldéhyde ou cétone). Absence de miroir avec Tollens = absence de propriétés réductrices, donc ce n'est pas un aldéhyde. X est obligatoirement une cétone."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège d'examen : Confusion entre oxydants doux et oxydants puissants",
          "stepTheme": "Piège redox",
          "stepBadge": "Fehling vs Permanganate",
          "paragraphText": "Attention lors des questions de synthèse : les oxydants doux (Fehling, Tollens, Schiff) n'attaquent QUE les aldéhydes. En revanche, un oxydant puissant à chaud en milieu très concentré (KMnO4 concentré) peut détruire le squelette d'une cétone par coupure brutale de la chaîne. C'est pourquoi seuls les oxydants doux sont qualifiés de tests de caractérisation non destructifs.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p04_q7",
            "type": "mcq",
            "prompt": "Pourquoi qualifie-t-on la liqueur de Fehling et le réactif de Tollens « d'oxydants doux » en chimie organique ?",
            "options": [
              "Parce qu'ils ne sont pas dangereux pour la peau humaine.",
              "Parce qu'ils possèdent un potentiel d'oxydoréduction modéré qui leur permet d'oxyder les aldéhydes sans jamais altérer le squelette carboné des cétones ou des alcools.",
              "Parce qu'ils réagissent à des températures négatives.",
              "Parce qu'ils sont exclusivement préparés avec de l'eau distillée sans sels minéraux."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Leur potentiel redox modéré suffit à oxyder la liaison C-H très réactive des aldéhydes, mais est insuffisant pour attaquer les liaisons C-C des cétones."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p04_q1",
          "type": "mcq",
          "prompt": "Pourquoi est-il rigoureusement interdit de chauffer le réactif de Schiff lors du test de caractérisation d'un aldéhyde ?",
          "options": [
            "Parce que la fuchsine s'évapore et produit des gaz toxiques.",
            "Parce que le chauffage expulse le SO2 dissous, ce qui fait virer spontanément le réactif au rose sans présence d'aldéhyde (fausse réaction positive).",
            "Parce que la chaleur transforme immédiatement les cétones en aldéhydes.",
            "Parce que le verre du tube à essai est corrodé par le réactif à chaud."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le réactif de Schiff est stabilisé par du SO2 dissous à froid. Chauffer dégaze le SO2 et fait réapparaître la couleur rose de la fuchsine libre, créant un artefact expérimental."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p04_q2",
          "type": "mcq",
          "prompt": "Quelle espèce chimique est responsable du brillant miroir d'argent formé lors du test positif au réactif de Tollens avec le butanal ?",
          "options": [
            "Des ions Ag+ hydratés en solution.",
            "De l'oxyde d'argent Ag2O solide noir.",
            "De l'argent métallique Ag(s) à l'état zéro d'oxydation déposé sur le verre.",
            "Du nitrate de potassium cristallisé."
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'ion argent I [Ag(NH3)2]+ capte un électron pour être réduit en argent métallique neutre Ag(s) qui adhère aux parois du tube."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p04_q3",
          "type": "mcq",
          "prompt": "Quelle est la formule chimique exacte et le degré d'oxydation du cuivre dans le précipité rouge brique obtenu avec la liqueur de Fehling ?",
          "options": [
            "CuO avec le cuivre au degré d'oxydation +II",
            "Cu2O (oxyde de cuivre I) avec le cuivre au degré d'oxydation +I",
            "Cu(OH)2 avec le cuivre au degré d'oxydation +II",
            "Cu métallique avec le cuivre au degré d'oxydation 0"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le précipité rouge brique est constitué d'oxyde de cuivre I Cu2O, où l'élément cuivre se trouve au degré d'oxydation +I (réduit depuis Cu2+)."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p04_q4",
          "type": "mcq",
          "prompt": "Quel est le coefficient stœchiométrique des ions hydroxyde OH- dans l'équation-bilan équilibrée de réduction de la liqueur de Fehling par le méthanal H-CHO ?",
          "options": [
            "2",
            "3",
            "4",
            "5"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Dans l'équation-bilan globale R-CHO + 2 Cu2+ + 5 OH- -> R-COO- + Cu2O + 3 H2O, le coefficient stœchiométrique devant les ions OH- est rigoureusement égal à 5."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p04_q5",
          "type": "mcq",
          "prompt": "On chauffe au bain-marie un mélange de propanone et de liqueur de Fehling. Quelle observation expérimentale fait-on après 10 minutes ?",
          "options": [
            "Apparition d'un précipité rouge brique dense.",
            "Formation d'un miroir métallique argenté brillant.",
            "Aucun changement : la solution conserve sa couleur bleue limpide d'origine.",
            "La solution se décolore totalement et dégage un gaz piquant."
          ],
          "correctAnswerIndex": 2,
          "explanation": "La propanone étant une cétone, elle ne possède aucune propriété réductrice : la liqueur de Fehling reste intacte et conserve sa couleur bleue."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p04_q6",
          "type": "mcq",
          "prompt": "Un liquide X donne un précipité jaune avec la 2,4-DNPH, mais le test au réactif de Tollens ne produit aucun miroir d'argent. Quelle est la nature de X ?",
          "options": [
            "X est un alcool primaire.",
            "X est un aldéhyde.",
            "X est une cétone.",
            "X est un acide carboxylique saturé."
          ],
          "correctAnswerIndex": 2,
          "explanation": "Précipité avec 2,4-DNPH = composé carbonylé (aldéhyde ou cétone). Absence de miroir avec Tollens = absence de propriétés réductrices, donc ce n'est pas un aldéhyde. X est obligatoirement une cétone."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p04_q7",
          "type": "mcq",
          "prompt": "Pourquoi qualifie-t-on la liqueur de Fehling et le réactif de Tollens « d'oxydants doux » en chimie organique ?",
          "options": [
            "Parce qu'ils ne sont pas dangereux pour la peau humaine.",
            "Parce qu'ils possèdent un potentiel d'oxydoréduction modéré qui leur permet d'oxyder les aldéhydes sans jamais altérer le squelette carboné des cétones ou des alcools.",
            "Parce qu'ils réagissent à des températures négatives.",
            "Parce qu'ils sont exclusivement préparés avec de l'eau distillée sans sels minéraux."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Leur potentiel redox modéré suffit à oxyder la liaison C-H très réactive des aldéhydes, mais est insuffisant pour attaquer les liaisons C-C des cétones."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l02_composes_carbonyles_p05",
      "order": 5,
      "title": "Solvants polaires protiques vs aprotiques et applications industrielles",
      "summary": "Notion de moment dipolaire, solvants protiques (eau, alcools) vs aprotiques (acétone), combustion complète et usages industriels.",
      "conceptExplanation": "Les propriétés physico-chimiques des composés carbonylés leur confèrent une place prépondérante dans l'industrie chimique et les laboratoires :\n\n1. Notion de solvant polaire protique vs aprotique :\n- Solvant polaire : solvant constitué de molécules possédant un moment dipolaire permanent non nul (barycentres des charges positives et négatives non confondus).\n- Solvant polaire PROTIQUE : possède au moins un atome d'hydrogène lié à un hétéroatome très électronégatif (O, N, F). Il peut libérer un proton H+ ou former des liaisons hydrogène donneuses (ex : l'eau H2O, l'éthanol C2H5OH, l'acide éthanoïque).\n- Solvant polaire APROTIQUE : présente une liaison fortement polarisée (comme le C=O de l'acétone) mais NE POSSÈDE AUCUN hydrogène mobile lié à un hétéroatome. Il ne peut pas céder de proton ni donner de liaison hydrogène (ex : l'acétone ou propan-2-one, la butan-2-one, le diméthylsulfoxyde DMSO).\n\n2. Utilité majeure des cétones comme solvants :\nAlors que les aldéhydes sont trop réactifs et s'oxydent spontanément à l'air en acides carboxyliques, les cétones (notamment la propanone) sont chimiquement très stables, solubilisent à la fois les résines, les vernis, les graisses et les polymères polaires, et s'évaporent rapidement en raison de leur volatilité.\n\n3. Combustion complète des composés carbonylés :\nLa combustion complète d'un aldéhyde ou d'une cétone dans le dioxygène produit du dioxyde de carbone et de l'eau selon l'équation stœchiométrique générale :\nCnH2nO + ((3n - 1) / 2) O2 ---> n CO2 + n H2O.",
      "keyRule": "L'acétone (propanone) est un solvant POLAIRE APROTIQUE : polaire grâce au groupe C=O, mais aprotique car ses hydrogènes sont fixés sur des carbones (-CH3) et ne peuvent pas être cédés sous forme de protons H+.",
      "formulas": [
        {
          "name": "Combustion complète d'un composé carbonylé",
          "formula": "\\mathrm{C_n H_{2n} O} + \\left(\\frac{3n-1}{2}\\right) \\mathrm{O_2} \\longrightarrow n \\, \\mathrm{CO_2} + n \\, \\mathrm{H_2O}",
          "note": "Le nombre de moles de CO2 produit est strictement égal au nombre de moles d'eau"
        }
      ],
      "workedExample": {
        "title": "Identification d'une cétone par analyse de sa combustion complète",
        "statement": "La combustion complète d'une mole d'un composé carbonylé A de formule CxHyO fournit 4 moles de CO2 et 4 moles de H2O. Le composé donne un test négatif avec la liqueur de Fehling. Détermine sa formule semi-développée et son nom.",
        "methodSteps": [
          "Étape 1 : Écrire l'équation de combustion : CxHyO + ... O2 -> x CO2 + (y/2) H2O.",
          "Étape 2 : Établir les coefficients à partir des données : x = 4 atomes de carbone et y/2 = 4, d'où y = 8 atomes d'hydrogène. La formule brute est C4H8O.",
          "Étape 3 : Interpréter le test négatif à la liqueur de Fehling : A n'est pas un aldéhyde, c'est donc une cétone.",
          "Étape 4 : Déterminer la formule semi-développée de la cétone en C4 : CH3-CO-CH2-CH3."
        ],
        "conclusion": "Le composé A est la butan-2-one (butanone)."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Comparaison : Solvants polaires protiques vs aprotiques",
        "tableData": {
          "headers": [
            "Catégorie de solvant",
            "Caractéristique structurale",
            "Capacité à libérer un proton H+",
            "Exemples types",
            "Usage préférentiel"
          ],
          "rows": [
            [
              "Polaire protique",
              "Liaison O-H ou N-H fortement polarisée",
              "Oui (aptitude donneur de liaison H)",
              "Eau (H2O), Éthanol (C2H5OH)",
              "Solvatation des anions et réactions acide-base"
            ],
            [
              "Polaire aprotique",
              "Dipôle C=O sans liaison O-H ou N-H",
              "Non (aucun proton dissociable)",
              "Propanone (acétone), Butanone",
              "Dissolution des vernis, peintures et réactions de substitution"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d'un solvant polaire protique",
          "stepTheme": "Solvants en chimie",
          "stepBadge": "Solvant protique",
          "paragraphText": "Un solvant polaire protique possède un moment dipolaire permanent et comporte des atomes d'hydrogène reliés à des hétéroatomes très électronégatifs (O ou N). L'eau et les alcools sont des solvants polaires protiques par excellence : ils forment de puissants réseaux de liaisons hydrogène et solvatent particulièrement bien les anions.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p05_q1",
            "type": "mcq",
            "prompt": "Parmi les solvants suivants, lequel est classé chimiquement comme un solvant polaire protique ?",
            "options": [
              "Le cyclohexane (apolaire)",
              "L'éthanol C2H5OH (présence du groupe O-H)",
              "La propanone CH3-CO-CH3 (présence de liaisons C-H uniquement)",
              "Le tétrachlorure de carbone CCl4 (apolaire par symétrie)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'éthanol possède une liaison polarisée O-H capable d'établir des liaisons hydrogène et d'échanger des protons : c'est un solvant polaire protique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Définition d'un solvant polaire aprotique : l'exemple de l'acétone",
          "stepTheme": "Solvants en chimie",
          "stepBadge": "Solvant aprotique",
          "paragraphText": "La propanone (acétone) possède un moment dipolaire élevé (2,7 Debye) dû à sa liaison C=O polarisée, mais ses atomes d'hydrogène sont tous fixés sur des carbones (-CH3) de faible électronégativité. Elle ne peut donner aucun proton H+ : c'est l'archétype du solvant polaire aprotique.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p05_q2",
            "type": "mcq",
            "prompt": "Pourquoi la propanone (acétone) est-elle rigoureusement qualifiée de solvant « polaire aprotique » ?",
            "options": [
              "Parce qu'elle ne possède aucun atome d'oxygène.",
              "Parce qu'elle présente un moment dipolaire permanent important mais ne comporte aucun hydrogène acide lié à un hétéroatome capable d'être libéré sous forme de proton.",
              "Parce qu'elle gèle à 0 °C comme l'eau pure.",
              "Parce qu'elle ne dissout absolument aucune substance organique."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le groupe C=O crée un fort dipôle (polaire), mais l'absence de liaison O-H ou N-H interdit la libération de protons (aprotique)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Stœchiométrie de la combustion complète : égalité des moles de CO2 et H2O",
          "stepTheme": "Combustion complète",
          "stepBadge": "n(CO2) = n(H2O)",
          "paragraphText": "D'après l'équation générale CnH2nO + ((3n-1)/2) O2 -> n CO2 + n H2O, la combustion complète d'un aldéhyde ou d'une cétone produit TOUJOURS un nombre de moles de dioxyde de carbone égal au nombre de moles d'eau (rapport 1:1). Cette propriété permet de certifier immédiatement qu'un composé oxygéné répond à la formule CnH2nO.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p05_q3",
            "type": "mcq",
            "prompt": "La combustion complète d'un composé oxygéné inconnu fournit 0,30 mole de CO2 et 0,30 mole de H2O. Que déduit-on immédiatement sur les indices stœchiométriques x et y de sa formule CxHyOz ?",
            "options": [
              "y = x + 2 (formule de type alcane-alcool)",
              "y = 2x (le nombre d'hydrogènes est exactement le double du nombre de carbones, typique de CnH2nO)",
              "x = 2y",
              "Le composé ne contient aucun atome de carbone."
            ],
            "correctAnswerIndex": 1,
            "explanation": "x moles de CO2 et y/2 moles de H2O. Comme n(CO2) = n(H2O) = 0,30 mol, on a x = y/2, d'où y = 2x : la molécule possède deux fois plus d'hydrogènes que de carbones."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calcul du volume de dioxygène consommé lors de la combustion",
          "stepTheme": "Combustion complète",
          "stepBadge": "Volume de O2",
          "paragraphText": "Pour brûler complètement une mole d'acétone C3H6O (n = 3), il faut (3*3 - 1)/2 = 8/2 = 4 moles de dioxygène O2 : C3H6O + 4 O2 -> 3 CO2 + 3 H2O. Pour une masse m de cétone, le volume de dioxygène nécessaire vaut V(O2) = 4 * (m / M) * Vm.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p05_q4",
            "type": "mcq",
            "prompt": "Quel volume de dioxygène gazeux dans les CNTP (Vm = 22,4 L/mol) est nécessaire pour la combustion complète de 5,8 g de propanone (M = 58 g/mol) ?",
            "options": [
              "4,48 L",
              "8,96 L",
              "11,2 L",
              "22,4 L"
            ],
            "correctAnswerIndex": 1,
            "explanation": "n(acétone) = 5,8 / 58 = 0,10 mol. L'équation C3H6O + 4 O2 -> 3 CO2 + 3 H2O exige 4 moles de O2 par mole d'acétone. Donc n(O2) = 4 * 0,10 = 0,40 mol. Volume V(O2) = 0,40 * 22,4 = 8,96 L."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Applications industrielles : résines, peintures et parfumerie",
          "stepTheme": "Usages industriels",
          "stepBadge": "Applications",
          "paragraphText": "Les composés carbonylés occupent une place immense dans l'économie moderne : le méthanal (formol) sert à fabriquer des résines synthétiques, des colles et des plastiques thermodurcissables ; la propanone est le solvant universel des vernis, acétates de cellulose et peintures ; de nombreux aldéhydes naturels (vanilline, cinnamaldéhyde dans la cannelle, benzaldéhyde dans l'amande amère) sont les piliers de la parfumerie et de l'aromatique alimentaire.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p05_q5",
            "type": "mcq",
            "prompt": "Dans quel secteur industriel le méthanal (formaldéhyde) est-il massivement utilisé à l'échelle mondiale ?",
            "options": [
              "Comme carburant pour les fusées spatiales.",
              "Dans la fabrication de résines synthétiques, d'agglomérés de bois, de colles et d'antiseptiques.",
              "Comme additif alimentaire dans les boissons gazeuses.",
              "Pour remplacer l'eau dans les circuits de refroidissement des centrales nucléaires."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le formaldéhyde est le précurseur fondamental des résines formophénoliques et aminoplastes utilisées dans le bois aggloméré, les stratifiés et les matières plastiques."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Auto-oxydation spontanée des aldéhydes à l'air libre",
          "stepTheme": "Conservation des réactifs",
          "stepBadge": "Sensibilité à l'air",
          "paragraphText": "Contrairement aux cétones qui se conservent indéfiniment en flacon fermé, les aldéhydes réagissent lentement avec le dioxygène de l'air (auto-oxydation radicalaire) pour former l'acide carboxylique correspondant. Un flacon de benzaldéhyde ou d'éthanal mal bouché présente toujours des dépôts solides de cristaux d'acide sur son col.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p05_q6",
            "type": "mcq",
            "prompt": "Pourquoi un vieux flacon d'éthanal liquide laissé ouvert à l'air libre finit-il par s'acidifier et faire virer le papier pH au rouge vif ?",
            "options": [
              "Parce que l'éthanal absorbe l'azote de l'air pour donner de l'ammoniac.",
              "Parce que l'éthanal subit une auto-oxydation spontanée par le dioxygène de l'air qui le transforme progressivement en acide éthanoïque.",
              "Parce que l'éthanal se polymérise en diamant synthétique.",
              "Parce que la lumière détruit les atomes d'oxygène."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'atome d'hydrogène porté par le carbonyle de l'aldéhyde est vulnérable à l'oxydation spontanée par O2 de l'air, formant l'acide carboxylique correspondant (acide éthanoïque dans le cas de l'éthanal)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Bilan global du chapitre : Compétences exigibles au Baccalauréat",
          "stepTheme": "Synthèse Bac",
          "stepBadge": "Récapitulatif",
          "paragraphText": "À l'issue de cette leçon, un élève de Terminale C/D doit savoir : 1) Identifier et nommer tout aldéhyde et toute cétone ; 2) Interpréter le test à la 2,4-DNPH ; 3) Écrire et équilibrer les équations d'oxydoréduction avec Schiff, Fehling et Tollens ; 4) Établir la formule brute à partir d'une combustion ou d'une analyse élémentaire.",
          "exercise": {
            "id": "terminale_c_chimie_l02_composes_carbonyles_p05_q7",
            "type": "mcq",
            "prompt": "Un liquide organique X rosit le réactif de Schiff et fournit par combustion un volume de CO2 égal au volume de vapeur d'eau. Sa masse molaire est de 58 g/mol. Quel est le composé X ?",
            "options": [
              "La propanone (cétone, M = 58 g/mol)",
              "Le propanal (aldéhyde, M = 58 g/mol)",
              "Le butan-1-ol (alcool, M = 74 g/mol)",
              "L'acide éthanoïque (acide, M = 60 g/mol)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "M = 58 g/mol correspond à C3H6O (14*3 + 16 = 58). Le virage au rose avec le réactif de Schiff prouve que c'est un aldéhyde : il s'agit donc du propanal (la propanone ne ferait pas virer le réactif de Schiff)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p05_q1",
          "type": "mcq",
          "prompt": "Parmi les solvants suivants, lequel est classé chimiquement comme un solvant polaire protique ?",
          "options": [
            "Le cyclohexane (apolaire)",
            "L'éthanol C2H5OH (présence du groupe O-H)",
            "La propanone CH3-CO-CH3 (présence de liaisons C-H uniquement)",
            "Le tétrachlorure de carbone CCl4 (apolaire par symétrie)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'éthanol possède une liaison polarisée O-H capable d'établir des liaisons hydrogène et d'échanger des protons : c'est un solvant polaire protique."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p05_q2",
          "type": "mcq",
          "prompt": "Pourquoi la propanone (acétone) est-elle rigoureusement qualifiée de solvant « polaire aprotique » ?",
          "options": [
            "Parce qu'elle ne possède aucun atome d'oxygène.",
            "Parce qu'elle présente un moment dipolaire permanent important mais ne comporte aucun hydrogène acide lié à un hétéroatome capable d'être libéré sous forme de proton.",
            "Parce qu'elle gèle à 0 °C comme l'eau pure.",
            "Parce qu'elle ne dissout absolument aucune substance organique."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le groupe C=O crée un fort dipôle (polaire), mais l'absence de liaison O-H ou N-H interdit la libération de protons (aprotique)."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p05_q3",
          "type": "mcq",
          "prompt": "La combustion complète d'un composé oxygéné inconnu fournit 0,30 mole de CO2 et 0,30 mole de H2O. Que déduit-on immédiatement sur les indices stœchiométriques x et y de sa formule CxHyOz ?",
          "options": [
            "y = x + 2 (formule de type alcane-alcool)",
            "y = 2x (le nombre d'hydrogènes est exactement le double du nombre de carbones, typique de CnH2nO)",
            "x = 2y",
            "Le composé ne contient aucun atome de carbone."
          ],
          "correctAnswerIndex": 1,
          "explanation": "x moles de CO2 et y/2 moles de H2O. Comme n(CO2) = n(H2O) = 0,30 mol, on a x = y/2, d'où y = 2x : la molécule possède deux fois plus d'hydrogènes que de carbones."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p05_q4",
          "type": "mcq",
          "prompt": "Quel volume de dioxygène gazeux dans les CNTP (Vm = 22,4 L/mol) est nécessaire pour la combustion complète de 5,8 g de propanone (M = 58 g/mol) ?",
          "options": [
            "4,48 L",
            "8,96 L",
            "11,2 L",
            "22,4 L"
          ],
          "correctAnswerIndex": 1,
          "explanation": "n(acétone) = 5,8 / 58 = 0,10 mol. L'équation C3H6O + 4 O2 -> 3 CO2 + 3 H2O exige 4 moles de O2 par mole d'acétone. Donc n(O2) = 4 * 0,10 = 0,40 mol. Volume V(O2) = 0,40 * 22,4 = 8,96 L."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p05_q5",
          "type": "mcq",
          "prompt": "Dans quel secteur industriel le méthanal (formaldéhyde) est-il massivement utilisé à l'échelle mondiale ?",
          "options": [
            "Comme carburant pour les fusées spatiales.",
            "Dans la fabrication de résines synthétiques, d'agglomérés de bois, de colles et d'antiseptiques.",
            "Comme additif alimentaire dans les boissons gazeuses.",
            "Pour remplacer l'eau dans les circuits de refroidissement des centrales nucléaires."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le formaldéhyde est le précurseur fondamental des résines formophénoliques et aminoplastes utilisées dans le bois aggloméré, les stratifiés et les matières plastiques."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p05_q6",
          "type": "mcq",
          "prompt": "Pourquoi un vieux flacon d'éthanal liquide laissé ouvert à l'air libre finit-il par s'acidifier et faire virer le papier pH au rouge vif ?",
          "options": [
            "Parce que l'éthanal absorbe l'azote de l'air pour donner de l'ammoniac.",
            "Parce que l'éthanal subit une auto-oxydation spontanée par le dioxygène de l'air qui le transforme progressivement en acide éthanoïque.",
            "Parce que l'éthanal se polymérise en diamant synthétique.",
            "Parce que la lumière détruit les atomes d'oxygène."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'atome d'hydrogène porté par le carbonyle de l'aldéhyde est vulnérable à l'oxydation spontanée par O2 de l'air, formant l'acide carboxylique correspondant (acide éthanoïque dans le cas de l'éthanal)."
        },
        {
          "id": "terminale_c_chimie_l02_composes_carbonyles_p05_q7",
          "type": "mcq",
          "prompt": "Un liquide organique X rosit le réactif de Schiff et fournit par combustion un volume de CO2 égal au volume de vapeur d'eau. Sa masse molaire est de 58 g/mol. Quel est le composé X ?",
          "options": [
            "La propanone (cétone, M = 58 g/mol)",
            "Le propanal (aldéhyde, M = 58 g/mol)",
            "Le butan-1-ol (alcool, M = 74 g/mol)",
            "L'acide éthanoïque (acide, M = 60 g/mol)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "M = 58 g/mol correspond à C3H6O (14*3 + 16 = 58). Le virage au rose avec le réactif de Schiff prouve que c'est un aldéhyde : il s'agit donc du propanal (la propanone ne ferait pas virer le réactif de Schiff)."
        }
      ]
    }
  ]
};
