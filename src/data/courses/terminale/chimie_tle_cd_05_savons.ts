import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : TCDE — Thème : Chimie Organique — Titre : Fabrication d'un savon
export const CHIMIE_TLE_CD_L05_SAVONS: CurriculumChapter = {
  "id": "terminale_c_chimie_l05_savons",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 5,
  "title": "Leçon 5 : Fabrication d'un savon (Saponification)",
  "summary": "Hydrolyse basique des esters, triglycérides naturels, acides gras (palmitique, stéarique, oléique), synthèse au laboratoire, relargage dans l'eau salée, stœchiométrie quantitative et pouvoir détergent.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : TCDE – Chimie Organique – Fabrication d'un savon)",
  "points": [
    {
      "id": "terminale_c_chimie_l05_savons_p01",
      "order": 1,
      "title": "La saponification des esters : Définition, caractéristiques et équation",
      "summary": "Hydrolyse basique d'un ester par les ions hydroxyde, obtention d'ion carboxylate et d'alcool, caractéristiques cinétiques et thermodynamiques (lente et totale).",
      "conceptExplanation": "La saponification est la réaction chimique entre un ester et une solution aqueuse d'hydroxyde de sodium (soude NaOH) ou d'hydroxyde de potassium (potasse KOH).\n\n1. Équation-bilan générale :\nR-COO-R' + (Na+ + OH-) ---> (R-COO- + Na+) + R'-OH\nou sous forme ionique nette :\nR-COO-R' + OH- ---> R-COO- + R'-OH.\nLes produits formés sont un ion carboxylate (associé au cation sodium pour former un sel carboxylate de sodium) et un alcool.\n\n2. Les deux caractéristiques fondamentales :\n- Réaction LENTE à température ambiante (nécessite d'être chauffée à reflux pour s'effectuer en quelques dizaines de minutes).\n- Réaction TOTALE et irréversible : contrairement à l'hydrolyse acide d'un ester qui est limitée par l'équilibre inverse de l'estérification (rendement 67 %), la saponification consomme intégralement le réactif limitant (rendement de 100 %).\nPourquoi la réaction est-elle totale ? L'ion carboxylate R-COO- formé est une base très faible totalement stabilisée par mésomérie : il est incapable d'attaquer l'alcool pour reformer l'ester.",
      "keyRule": "Saponification = hydrolyse basique d'un ester : lente à froid, mais TOTALE (irréversible). L'ion carboxylate formé est incapable de réagir en sens inverse.",
      "formulas": [
        {
          "name": "Équation-bilan générale de la saponification",
          "formula": "\\mathrm{R-COO-R'} + \\mathrm{OH^-} \\longrightarrow \\mathrm{R-COO^-} + \\mathrm{R'-OH}",
          "note": "Réaction totale (flèche simple irréversible) et lente"
        }
      ],
      "workedExample": {
        "title": "Saponification de l'acétate d'éthyle par la soude",
        "statement": "Écris l'équation-bilan de la réaction de saponification de l'éthanoate d'éthyle par une solution d'hydroxyde de sodium et nomme les produits formés.",
        "methodSteps": [
          "Étape 1 : Formule de l'ester : CH3-COO-CH2-CH3.",
          "Étape 2 : Réactif basique : solution de soude (Na+ + OH-).",
          "Étape 3 : Écrire l'attaque de l'ion OH- sur le carbone carbonyle : coupure de la liaison C-O de l'ester.",
          "Étape 4 : Former l'ion carboxylate (CH3-COO-) et l'alcool (CH3-CH2-OH) : CH3-COO-C2H5 + (Na+ + OH-) ---> (CH3-COO- + Na+) + C2H5-OH."
        ],
        "conclusion": "On obtient de l'éthanoate de sodium (acétate de sodium) et de l'éthanol."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Comparaison : Hydrolyse acide vs Saponification (Hydrolyse basique)",
        "tableData": {
          "headers": [
            "Critère",
            "Hydrolyse acide d'un ester",
            "Saponification (Hydrolyse basique)"
          ],
          "rows": [
            [
              "Réactif attaquant",
              "Eau pure H2O en milieu acide H+",
              "Ions hydroxyde HO- d'une base forte (NaOH/KOH)"
            ],
            [
              "Produits formés",
              "Acide carboxylique R-COOH + Alcool R'-OH",
              "Ion carboxylate R-COO- + Alcool R'-OH"
            ],
            [
              "Réversibilité",
              "Réversible et limitée (rendement ~33 %)",
              "TOTALE et irréversible (rendement 100 %)"
            ],
            [
              "Cinétique",
              "Lente",
              "Lente à froid, accélérée à chaud"
            ],
            [
              "Sens inverse possible",
              "Oui : estérification directe",
              "Non : l'ion carboxylate ne réagit pas avec l'alcool"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la saponification comme hydrolyse basique",
          "stepTheme": "Saponification d'esters simples",
          "stepBadge": "Hydrolyse basique",
          "paragraphText": "Le mot saponification vient du latin sapo (savon). Chimiquement, il désigne toute hydrolyse d'un ester réalisée en présence d'une base forte. L'ion hydroxyde HO- attaque le carbone électrophile du groupe ester, conduisant à la rupture irréversible de la liaison ester.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p01_q1",
            "type": "mcq",
            "prompt": "Quelle différence fondamentale de réversibilité oppose l'hydrolyse d'un ester par l'eau pure et la saponification de ce même ester par la soude ?",
            "options": [
              "L'hydrolyse par l'eau est totale alors que la saponification est réversible.",
              "L'hydrolyse par l'eau est équilibrée et limitée (réversible), alors que la saponification par la soude est quantitative et totale (irréversible).",
              "Toutes deux sont des équilibres réversibles limités à 67 %.",
              "La saponification ne fonctionne qu'en milieu acide concentré."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'hydrolyse acide est un équilibre limité par l'estérification inverse, alors que la saponification basique est totale et irréversible."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Caractère lent de la réaction à température ambiante",
          "stepTheme": "Cinétique",
          "stepBadge": "Chauffage nécessaire",
          "paragraphText": "À température ordinaire (20-25 °C), la saponification est une réaction lente : elle peut demander plusieurs jours pour être complète. Au laboratoire ou dans les savonneries artisanales, on chauffe systématiquement le mélange réactionnel à reflux pour que la réaction soit achevée en 30 à 45 minutes.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p01_q2",
            "type": "mcq",
            "prompt": "Pourquoi réalise-t-on la réaction de saponification au laboratoire dans un montage à reflux chauffé plutôt qu'à température ambiante ?",
            "options": [
              "Parce que la soude gèle à 20 °C.",
              "Pour augmenter la vitesse de la réaction (facteur cinétique température) tout en évitant les pertes de matière par évaporation grâce au réfrigérant à reflux.",
              "Parce que la chaleur transforme les ions carboxylates en dihydrogène.",
              "Pour rendre la réaction réversible."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le chauffage accélère la cinétique lente de saponification, et le réfrigérant condense les vapeurs pour empêcher la perte des réactifs et des produits volatils."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Irreversibilité absolue de la saponification",
          "stepTheme": "Thermodynamique",
          "stepBadge": "Réaction totale",
          "paragraphText": "L'ion carboxylate R-COO- formé possède deux atomes d'oxygène équivalents partageant une charge négative par résonance. Il ne présente plus de carbone électrophile vulnérable et ne peut pas se recombiner avec l'alcool pour reformer l'ester. L'avancement final xf est donc rigoureusement égal à l'avancement maximal xmax.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p01_q3",
            "type": "mcq",
            "prompt": "Pourquoi la réaction de saponification d'un ester est-elle irréversible et totale (rendement de 100 %) ?",
            "options": [
              "Parce que l'alcool formé s'évapore instantanément du milieu.",
              "Parce que l'ion carboxylate R-COO- formé est trop peu électrophile et stabilisé par résonance pour réagir avec l'alcool en sens inverse.",
              "Parce que les ions sodium détruisent les molécules d'ester restantes.",
              "Parce que la réaction absorbe toute l'eau du solvant."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La stabilité mésomère de l'ion carboxylate et son absence d'électrophilie interdisent toute ré-attaque par l'alcool en milieu basique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Écriture de l'équation de saponification d'un ester aromatique",
          "stepTheme": "Exemples de réactions",
          "stepBadge": "Benzoate d'éthyle",
          "paragraphText": "Le benzoate d'éthyle C6H5-COO-C2H5 saponifié par la soude produit du benzoate de sodium et de l'éthanol : C6H5-COO-C2H5 + (Na+ + OH-) -> (C6H5-COO- + Na+) + C2H5-OH. Si l'on acidifie ensuite la solution par de l'acide chlorhydrique, l'ion benzoate précipite sous forme d'acide benzoïque blanc cristallisé insoluble dans l'eau froide.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p01_q4",
            "type": "mcq",
            "prompt": "On saponifie du benzoate d'éthyle par de la soude, puis on acidifie le mélange refroidi par un excès d'acide chlorhydrique. Quel précipité solide blanc observe-t-on ?",
            "options": [
              "Du chlorure de sodium pur",
              "De l'acide benzoïque solide C6H5-COOH très peu soluble dans l'eau froide",
              "Du benzoate d'éthyle qui s'est reformé",
              "Du benzène pur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'acidification fournit des ions H3O+ qui protonent les ions carboxylates : C6H5-COO- + H3O+ -> C6H5-COOH(s) + H2O. L'acide benzoïque très peu soluble dans l'eau froide précipite sous forme de paillettes blanches."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Bases fortes utilisables : Soude (NaOH) vs Potasse (KOH)",
          "stepTheme": "Choix de la base",
          "stepBadge": "NaOH vs KOH",
          "paragraphText": "Deux bases fortes sont traditionnellement employées en saponification :\n- L'hydroxyde de sodium NaOH : fournit des carboxylates de sodium, qui forment des savons solides et compacts (savons durs de toilette et de ménage) ;\n- L'hydroxyde de potassium KOH : fournit des carboxylates de potassium, qui forment des savons mous ou liquides (savon noir, crèmes à raser, savonnettes liquides).",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p01_q5",
            "type": "mcq",
            "prompt": "Quelle base forte doit-on utiliser de préférence si l'on souhaite fabriquer un savon liquide ou un savon noir mou plutôt qu'un pain de savon dur classique ?",
            "options": [
              "L'hydroxyde de sodium (NaOH)",
              "L'hydroxyde de potassium (potasse KOH)",
              "L'ammoniaque diluée (NH3)",
              "L'eau de chaux (Ca(OH)2)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les sels de potassium des acides gras (carboxylates de potassium) sont beaucoup plus solubles et moins rigides que les sels de sodium, conférant au savon sa texture molle ou liquide."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Calcul de la masse d'ester consommé à partir de la soude",
          "stepTheme": "Stœchiométrie",
          "stepBadge": "Calcul stœchiométrique",
          "paragraphText": "La saponification d'un monoester étant une réaction mole à mole (1 mol d'ester pour 1 mol de OH-), la quantité de matière d'ester ayant réagi à l'équivalence est n(ester) = n(OH-) consommé = Cb * Vb. La masse correspondante vaut m = n(ester) * M(ester).",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p01_q6",
            "type": "mcq",
            "prompt": "On saponifie totalement 0,050 mole d'éthanoate d'éthyle (M = 88 g/mol) par une solution de soude à 2,0 mol/L. Quel volume minimal de soude est rigoureusement nécessaire ?",
            "options": [
              "10 mL",
              "25 mL",
              "50 mL",
              "100 mL"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Stœchiométrie 1:1 => n(OH-) = n(ester) = 0,050 mol. Volume de soude V = n / Cb = 0,050 / 2,0 = 0,025 L = 25 mL."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège d'examen : Ne pas confondre savon et détergent synthétique",
          "stepTheme": "Culture chimique",
          "stepBadge": "Savon vs Détergent",
          "paragraphText": "Au sens chimique strict, un « savon » est EXCLUSIVEMENT un sel d'acide gras (carboxylate de sodium ou de potassium, R-COO- Na+). Les « savons sans savon », gels douche et détergents de synthèse modernes sont des alkylsulfates ou sulfonates (R-SO3- Na+) issus de la pétrochimie, qui ne dérivent pas de la saponification naturelle des graisses.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p01_q7",
            "type": "mcq",
            "prompt": "Parmi les formules chimiques suivantes, laquelle représente formellement une molécule de savon authentique ?",
            "options": [
              "CH3-(CH2)11-SO3- Na+ (dodécylsulfonate de sodium)",
              "CH3-(CH2)14-COO- Na+ (palmitate de sodium)",
              "CH3-CH2-O-SO3- Na+",
              "C6H5-SO3- Na+"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un savon au sens chimique est obligatoirement un sel d'acide gras à longue chaîne carboxylique, comme le palmitate de sodium CH3-(CH2)14-COO- Na+."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l05_savons_p01_q1",
          "type": "mcq",
          "prompt": "Quelle différence fondamentale de réversibilité oppose l'hydrolyse d'un ester par l'eau pure et la saponification de ce même ester par la soude ?",
          "options": [
            "L'hydrolyse par l'eau est totale alors que la saponification est réversible.",
            "L'hydrolyse par l'eau est équilibrée et limitée (réversible), alors que la saponification par la soude est quantitative et totale (irréversible).",
            "Toutes deux sont des équilibres réversibles limités à 67 %.",
            "La saponification ne fonctionne qu'en milieu acide concentré."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'hydrolyse acide est un équilibre limité par l'estérification inverse, alors que la saponification basique est totale et irréversible."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p01_q2",
          "type": "mcq",
          "prompt": "Pourquoi réalise-t-on la réaction de saponification au laboratoire dans un montage à reflux chauffé plutôt qu'à température ambiante ?",
          "options": [
            "Parce que la soude gèle à 20 °C.",
            "Pour augmenter la vitesse de la réaction (facteur cinétique température) tout en évitant les pertes de matière par évaporation grâce au réfrigérant à reflux.",
            "Parce que la chaleur transforme les ions carboxylates en dihydrogène.",
            "Pour rendre la réaction réversible."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le chauffage accélère la cinétique lente de saponification, et le réfrigérant condense les vapeurs pour empêcher la perte des réactifs et des produits volatils."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p01_q3",
          "type": "mcq",
          "prompt": "Pourquoi la réaction de saponification d'un ester est-elle irréversible et totale (rendement de 100 %) ?",
          "options": [
            "Parce que l'alcool formé s'évapore instantanément du milieu.",
            "Parce que l'ion carboxylate R-COO- formé est trop peu électrophile et stabilisé par résonance pour réagir avec l'alcool en sens inverse.",
            "Parce que les ions sodium détruisent les molécules d'ester restantes.",
            "Parce que la réaction absorbe toute l'eau du solvant."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La stabilité mésomère de l'ion carboxylate et son absence d'électrophilie interdisent toute ré-attaque par l'alcool en milieu basique."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p01_q4",
          "type": "mcq",
          "prompt": "On saponifie du benzoate d'éthyle par de la soude, puis on acidifie le mélange refroidi par un excès d'acide chlorhydrique. Quel précipité solide blanc observe-t-on ?",
          "options": [
            "Du chlorure de sodium pur",
            "De l'acide benzoïque solide C6H5-COOH très peu soluble dans l'eau froide",
            "Du benzoate d'éthyle qui s'est reformé",
            "Du benzène pur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'acidification fournit des ions H3O+ qui protonent les ions carboxylates : C6H5-COO- + H3O+ -> C6H5-COOH(s) + H2O. L'acide benzoïque très peu soluble dans l'eau froide précipite sous forme de paillettes blanches."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p01_q5",
          "type": "mcq",
          "prompt": "Quelle base forte doit-on utiliser de préférence si l'on souhaite fabriquer un savon liquide ou un savon noir mou plutôt qu'un pain de savon dur classique ?",
          "options": [
            "L'hydroxyde de sodium (NaOH)",
            "L'hydroxyde de potassium (potasse KOH)",
            "L'ammoniaque diluée (NH3)",
            "L'eau de chaux (Ca(OH)2)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les sels de potassium des acides gras (carboxylates de potassium) sont beaucoup plus solubles et moins rigides que les sels de sodium, conférant au savon sa texture molle ou liquide."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p01_q6",
          "type": "mcq",
          "prompt": "On saponifie totalement 0,050 mole d'éthanoate d'éthyle (M = 88 g/mol) par une solution de soude à 2,0 mol/L. Quel volume minimal de soude est rigoureusement nécessaire ?",
          "options": [
            "10 mL",
            "25 mL",
            "50 mL",
            "100 mL"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Stœchiométrie 1:1 => n(OH-) = n(ester) = 0,050 mol. Volume de soude V = n / Cb = 0,050 / 2,0 = 0,025 L = 25 mL."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p01_q7",
          "type": "mcq",
          "prompt": "Parmi les formules chimiques suivantes, laquelle représente formellement une molécule de savon authentique ?",
          "options": [
            "CH3-(CH2)11-SO3- Na+ (dodécylsulfonate de sodium)",
            "CH3-(CH2)14-COO- Na+ (palmitate de sodium)",
            "CH3-CH2-O-SO3- Na+",
            "C6H5-SO3- Na+"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un savon au sens chimique est obligatoirement un sel d'acide gras à longue chaîne carboxylique, comme le palmitate de sodium CH3-(CH2)14-COO- Na+."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l05_savons_p02",
      "order": 2,
      "title": "Les triglycérides : Structure des corps gras et acides gras naturels",
      "summary": "Triesters du propane-1,2,3-triol (glycérol) et des acides gras supérieurs saturés (butyrique, palmitique, stéarique) et insaturés (oléique).",
      "conceptExplanation": "Les corps gras naturels (huiles végétales fluides comme l'huile de palme, d'arachide ou d'olive, et graisses animales solides comme le suif ou le beurre) sont constitués très majoritairement de triglycérides (ou triesters du glycérol).\n\n1. Définition d'un triglycéride :\nUn triglycéride est un triester résultant de l'estérification des trois fonctions alcools d'une molécule de glycérol (propane-1,2,3-triol) par trois molécules d'acides gras identiques ou différents :\n- Formule générale d'un triglycéride simple (trois acides identiques R-COOH) :\n  CH2-O-CO-R\n  |\n  CH-O-CO-R\n  |\n  CH2-O-CO-R\n\n2. Les principaux acides gras constitutifs :\nCe sont des acides carboxyliques à longue chaîne carbonée non ramifiée, comportant presque toujours un nombre pair d'atomes de carbone (généralement entre 4 et 24 carbones) :\n- Acides gras saturés (ne comportent que des liaisons simples C-C) :\n  * Acide butyrique (butanoïque) : C3H7-COOH ou CH3-(CH2)2-COOH (beurre rance, n = 4)\n  * Acide palmitique (hexadécanoïque) : C15H31-COOH ou CH3-(CH2)14-COOH (huile de palme, n = 16)\n  * Acide stéarique (octadécanoïque) : C17H35-COOH ou CH3-(CH2)16-COOH (graisse de bœuf, cacao, n = 18)\n- Acides gras insaturés (comportent une ou plusieurs doubles liaisons C=C) :\n  * Acide oléique : C17H33-COOH (possède une double liaison C=C en position 9, prédominant dans l'huile d'olive).\n\n3. Les triglycérides correspondants :\n- Butyrine (ou tributyrate de glycéryle) : triester de l'acide butyrique (M = 302 g/mol)\n- Palmitine (ou tripalmitate de glycéryle) : triester de l'acide palmitique (M = 806 g/mol)\n- Stéarine (ou tristéarate de glycéryle) : triester de l'acide stéarique (M = 890 g/mol).",
      "keyRule": "Triglycéride = 1 glycérol + 3 acides gras. Si l'acide gras est saturé à n carbones, sa formule est C(n-1)H(2n-1)COOH. Butyrique (C4), Palmitique (C16), Stéarique (C18).",
      "formulas": [
        {
          "name": "Formule brute d'un triglycéride simple à acide saturé",
          "formula": "\\mathrm{C_3H_5(O-CO-C_mH_{2m+1})_3} \\quad \\text{avec } m = n-1",
          "note": "Formé de 1 squelette glycéryle et 3 chaînes acyles grasses"
        }
      ],
      "workedExample": {
        "title": "Calcul de la masse molaire de la palmitine",
        "statement": "L'huile de palme contient en grande quantité de la palmitine, triester de l'acide palmitique C15H31-COOH et du glycérol C3H5(OH)3. Calcule sa masse molaire moléculaire (C = 12 ; H = 1 ; O = 16 g/mol).",
        "methodSteps": [
          "Étape 1 : Formule moléculaire de la palmitine : C3H5(O-CO-C15H31)3.",
          "Étape 2 : Compter le nombre total d'atomes de carbone : 3 (squelette glycérol) + 3 * (1 + 15) = 3 + 48 = 51 atomes de C.",
          "Étape 3 : Compter les atomes d'hydrogène : 5 + 3 * 31 = 5 + 93 = 98 atomes de H.",
          "Étape 4 : Compter les atomes d'oxygène : 3 * 2 = 6 atomes de O. Formule brute : C51H98O6.",
          "Étape 5 : Calculer la masse molaire : M = 51*12 + 98*1 + 6*16 = 612 + 98 + 96 = 806 g/mol."
        ],
        "conclusion": "La masse molaire de la palmitine est de 806 g/mol."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau récapitulatif des principaux acides gras et de leurs triglycérides",
        "tableData": {
          "headers": [
            "Acide gras",
            "Formule de l'acide",
            "Nombre total de C",
            "Triglycéride associé",
            "Masse molaire du triester",
            "État physique à 20 °C"
          ],
          "rows": [
            [
              "Acide butyrique",
              "CH3-(CH2)2-COOH",
              "4 carbones",
              "Butyrine",
              "302 g/mol",
              "Liquide huileux"
            ],
            [
              "Acide palmitique",
              "CH3-(CH2)14-COOH",
              "16 carbones",
              "Palmitine",
              "806 g/mol",
              "Solide cireux blanc"
            ],
            [
              "Acide stéarique",
              "CH3-(CH2)16-COOH",
              "18 carbones",
              "Stéarine",
              "890 g/mol",
              "Solide dur blanc"
            ],
            [
              "Acide oléique",
              "C17H33-COOH (1 C=C)",
              "18 carbones",
              "Oléine",
              "884 g/mol",
              "Liquide fluide (huile d'olive)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Structure d'un triester du glycérol",
          "stepTheme": "Les Triglycérides",
          "stepBadge": "Squelette glycéryle",
          "paragraphText": "Le glycérol (propane-1,2,3-triol) possède 3 fonctions alcools réactives. Lorsqu'il est entièrement estérifié par 3 acides carboxyliques, les trois atomes d'oxygène forment 3 liaisons esters avec les groupes acyles, éliminant 3 molécules d'eau.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p02_q1",
            "type": "mcq",
            "prompt": "Combien de molécules d'eau sont éliminées lors de la synthèse complète d'une molécule de triglycéride à partir de glycérol et d'acides gras ?",
            "options": [
              "1 seule molécule d'eau",
              "2 molécules d'eau",
              "3 molécules d'eau",
              "6 molécules d'eau"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le glycérol possédant 3 fonctions hydroxyles -OH qui s'estérifient chacune avec un groupe carboxyle -COOH, 3 molécules d'eau sont formées (stœchiométrie 1:3:1:3)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Différence fondamentale entre huiles et graisses",
          "stepTheme": "État physique des corps gras",
          "stepBadge": "Huile vs Graisse",
          "paragraphText": "La différence entre une huile (liquide à 20 °C) et une graisse (solide ou pâteuse à 20 °C) réside dans la présence de doubles liaisons C=C dans les chaînes d'acides gras. Les acides gras saturés ont des chaînes rectilignes qui s'empilent compactement (température de fusion élevée -> graisse solide). Les acides gras insaturés (acides oléique, linoléique) possèdent des doubles liaisons en configuration cis qui créent des coudes dans la chaîne, empêchant l'empilement cristallin (température de fusion basse -> huile liquide).",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p02_q2",
            "type": "mcq",
            "prompt": "Pourquoi l'huile d'olive est-elle liquide à température ambiante alors que le suif de bœuf ou le beurre de cacao sont solides ?",
            "options": [
              "Parce que l'huile d'olive ne contient aucun atome de carbone.",
              "Parce que l'huile d'olive est riche en triglycérides d'acides gras insaturés (acide oléique à double liaison C=C coudée) qui abaissent fortement le point de fusion.",
              "Parce que le suif est composé d'acide chlorhydrique.",
              "Parce que l'huile d'olive contient 50 % d'eau dissoute."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les doubles liaisons insaturées introduisent des coudes rigides dans les chaînes carbonées, empêchant l'organisation compacte et maintenant le corps gras à l'état liquide."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'acide palmitique et la palmitine",
          "stepTheme": "Acides gras saturés",
          "stepBadge": "Palmitine C16",
          "paragraphText": "L'acide palmitique CH3-(CH2)14-COOH est un acide gras saturé à 16 atomes de carbone. Son triester avec le glycérol est la palmitine, constituant majeur de l'huile de palme brute et de l'huile de palmiste, piliers de l'industrie agroalimentaire et cosmétique en Côte d'Ivoire.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p02_q3",
            "type": "mcq",
            "prompt": "Quelle est la formule semi-développée exacte de l'acide palmitique, composant prédominant de l'huile de palme ?",
            "options": [
              "CH3-(CH2)12-COOH",
              "CH3-(CH2)14-COOH",
              "CH3-(CH2)16-COOH",
              "CH3-(CH2)18-COOH"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'acide palmitique compte 16 atomes de carbone : 1 dans CH3 + 14 dans (CH2)14 + 1 dans COOH = 16 carbones (CH3-(CH2)14-COOH)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'acide stéarique et la stéarine",
          "stepTheme": "Acides gras saturés",
          "stepBadge": "Stéarine C18",
          "paragraphText": "L'acide stéarique CH3-(CH2)16-COOH comporte 18 atomes de carbone saturés. Son triester, la stéarine, est un solide très compact fondant vers 70 °C, employé pour confectionner des savons très durs et des bougies qui ne coulent pas.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p02_q4",
            "type": "mcq",
            "prompt": "Combien d'atomes de carbone au total contient une molécule de stéarine (tristéarate de glycéryle) ?",
            "options": [
              "18 atomes de carbone",
              "36 atomes de carbone",
              "54 atomes de carbone",
              "57 atomes de carbone"
            ],
            "correctAnswerIndex": 3,
            "explanation": "3 atomes de carbone dans le squelette glycéryle + 3 chaînes stéariques de 18 carbones chacune : 3 + (3 * 18) = 3 + 54 = 57 atomes de carbone."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Calcul de masse molaire d'un triglycéride à partir de l'acide gras",
          "stepTheme": "Masse molaire",
          "stepBadge": "M_triglycéride = 3*M_acide + M_glycérol - 3*18",
          "paragraphText": "Pour calculer la masse molaire d'un triglycéride homogène à partir de la masse molaire de son acide gras constitutif M_acide : M_tri = 3 * M_acide + M_glycérol (92) - 3 * M_eau (54) = 3 * M_acide + 38.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p02_q5",
            "type": "mcq",
            "prompt": "Sachant que la masse molaire de l'acide butyrique C3H7COOH vaut M = 88 g/mol, quelle est la masse molaire de la butyrine ?",
            "options": [
              "264 g/mol",
              "302 g/mol",
              "356 g/mol",
              "410 g/mol"
            ],
            "correctAnswerIndex": 1,
            "explanation": "M_butyrine = 3 * M_acide + 38 = 3 * 88 + 38 = 264 + 38 = 302 g/mol."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège d'examen : Ne pas confondre triglycéride simple et mixte",
          "stepTheme": "Triglycérides mixtes",
          "stepBadge": "Corps gras naturels",
          "paragraphText": "Dans les huiles naturelles réelles, les trois chaînes acyles fixées sur le glycérol sont rarement identiques : on parle de triglycérides mixtes (par exemple 1 chaîne palmitique et 2 chaînes oléiques). La saponification d'un triglycéride mixte produit donc du glycérol et un mélange de différents carboxylates de sodium.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p02_q6",
            "type": "mcq",
            "prompt": "Si l'on saponifie un triglycéride mixte constitué d'une molécule d'acide oléique et de deux molécules d'acide palmitique par de la soude, que recueille-t-on après réaction ?",
            "options": [
              "Un seul type de savon pur à 100 %.",
              "Du glycérol, du palmitate de sodium et de l'oléate de sodium dans un rapport molaire 1 : 2 : 1.",
              "De l'acide chlorhydrique et de l'éthanol.",
              "Uniquement des acides gras libres insolubles."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque liaison ester est hydrolysée indépendamment : on libère 1 mole de glycérol, 2 moles de palmitate de sodium et 1 mole d'oléate de sodium."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Rancissement oxydatif des corps gras insaturés",
          "stepTheme": "Conservation des huiles",
          "stepBadge": "Rancissement",
          "paragraphText": "Les huiles riches en acides gras insaturés rancissent à l'air et à la lumière : l'oxygène attaque les doubles liaisons C=C pour former des peroxydes qui se scindent en aldéhydes et acides courts volatils à odeur forte et désagréable. Pour protéger les huiles, on les conserve à l'abri de la lumière et de l'air.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p02_q7",
            "type": "mcq",
            "prompt": "Quel phénomène chimique est responsable du rancissement des huiles végétales et du beurre laissés à l'air libre ?",
            "options": [
              "L'évaporation spontanée du glycérol.",
              "L'oxydation des doubles liaisons des acides gras insaturés par le dioxygène de l'air, formant des aldéhydes et des acides à odeur rance.",
              "La transformation des triglycérides en diamant minéral.",
              "Une réaction nucléaire spontanée du phosphore."
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'oxydation radicalaire des insaturations carbonées par O2 qui dégrade les chaînes grasses en composés carbonylés odorants et toxiques."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l05_savons_p02_q1",
          "type": "mcq",
          "prompt": "Combien de molécules d'eau sont éliminées lors de la synthèse complète d'une molécule de triglycéride à partir de glycérol et d'acides gras ?",
          "options": [
            "1 seule molécule d'eau",
            "2 molécules d'eau",
            "3 molécules d'eau",
            "6 molécules d'eau"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le glycérol possédant 3 fonctions hydroxyles -OH qui s'estérifient chacune avec un groupe carboxyle -COOH, 3 molécules d'eau sont formées (stœchiométrie 1:3:1:3)."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p02_q2",
          "type": "mcq",
          "prompt": "Pourquoi l'huile d'olive est-elle liquide à température ambiante alors que le suif de bœuf ou le beurre de cacao sont solides ?",
          "options": [
            "Parce que l'huile d'olive ne contient aucun atome de carbone.",
            "Parce que l'huile d'olive est riche en triglycérides d'acides gras insaturés (acide oléique à double liaison C=C coudée) qui abaissent fortement le point de fusion.",
            "Parce que le suif est composé d'acide chlorhydrique.",
            "Parce que l'huile d'olive contient 50 % d'eau dissoute."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les doubles liaisons insaturées introduisent des coudes rigides dans les chaînes carbonées, empêchant l'organisation compacte et maintenant le corps gras à l'état liquide."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p02_q3",
          "type": "mcq",
          "prompt": "Quelle est la formule semi-développée exacte de l'acide palmitique, composant prédominant de l'huile de palme ?",
          "options": [
            "CH3-(CH2)12-COOH",
            "CH3-(CH2)14-COOH",
            "CH3-(CH2)16-COOH",
            "CH3-(CH2)18-COOH"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'acide palmitique compte 16 atomes de carbone : 1 dans CH3 + 14 dans (CH2)14 + 1 dans COOH = 16 carbones (CH3-(CH2)14-COOH)."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p02_q4",
          "type": "mcq",
          "prompt": "Combien d'atomes de carbone au total contient une molécule de stéarine (tristéarate de glycéryle) ?",
          "options": [
            "18 atomes de carbone",
            "36 atomes de carbone",
            "54 atomes de carbone",
            "57 atomes de carbone"
          ],
          "correctAnswerIndex": 3,
          "explanation": "3 atomes de carbone dans le squelette glycéryle + 3 chaînes stéariques de 18 carbones chacune : 3 + (3 * 18) = 3 + 54 = 57 atomes de carbone."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p02_q5",
          "type": "mcq",
          "prompt": "Sachant que la masse molaire de l'acide butyrique C3H7COOH vaut M = 88 g/mol, quelle est la masse molaire de la butyrine ?",
          "options": [
            "264 g/mol",
            "302 g/mol",
            "356 g/mol",
            "410 g/mol"
          ],
          "correctAnswerIndex": 1,
          "explanation": "M_butyrine = 3 * M_acide + 38 = 3 * 88 + 38 = 264 + 38 = 302 g/mol."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p02_q6",
          "type": "mcq",
          "prompt": "Si l'on saponifie un triglycéride mixte constitué d'une molécule d'acide oléique et de deux molécules d'acide palmitique par de la soude, que recueille-t-on après réaction ?",
          "options": [
            "Un seul type de savon pur à 100 %.",
            "Du glycérol, du palmitate de sodium et de l'oléate de sodium dans un rapport molaire 1 : 2 : 1.",
            "De l'acide chlorhydrique et de l'éthanol.",
            "Uniquement des acides gras libres insolubles."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque liaison ester est hydrolysée indépendamment : on libère 1 mole de glycérol, 2 moles de palmitate de sodium et 1 mole d'oléate de sodium."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p02_q7",
          "type": "mcq",
          "prompt": "Quel phénomène chimique est responsable du rancissement des huiles végétales et du beurre laissés à l'air libre ?",
          "options": [
            "L'évaporation spontanée du glycérol.",
            "L'oxydation des doubles liaisons des acides gras insaturés par le dioxygène de l'air, formant des aldéhydes et des acides à odeur rance.",
            "La transformation des triglycérides en diamant minéral.",
            "Une réaction nucléaire spontanée du phosphore."
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'oxydation radicalaire des insaturations carbonées par O2 qui dégrade les chaînes grasses en composés carbonylés odorants et toxiques."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l05_savons_p03",
      "order": 3,
      "title": "Protocole expérimental : Chauffage à reflux et opération de relargage",
      "summary": "Rôle de l'éthanol comme solvant émulsifiant, chauffage à reflux avec pierre ponce, relargage dans une solution saturée de NaCl et filtration sous vide.",
      "conceptExplanation": "La préparation du savon au laboratoire illustre de manière spectaculaire les techniques fondamentales de la chimie organique expérimentale :\n\n1. Préparation du mélange réactionnel :\nDans un ballon bicol ou monocol, on introduit :\n- Un corps gras (huile de palme, huile d'olive ou suif de bœuf) ;\n- Une solution concentrée de soude (NaOH à 6 ou 10 mol/L) ;\n- Un volume d'éthanol à 95 % (ou propan-2-ol) ;\n- Quelques grains de pierre ponce (ou un barreau aimanté) pour réguler l'ébullition et éviter les soubresauts du liquide.\n\n2. Le rôle fondamental de l'éthanol (solvant tiers) :\nL'huile est un liquide très hydrophobe et apolaire, alors que la solution de soude aqueuse est très polaire et ionique : les deux phases sont strictement non miscibles. Sans éthanol, la réaction ne se produirait que très lentement à l'interface des deux phases.\nL'éthanol, miscible à la fois à l'huile et à l'eau, joue le rôle de SOLVANT MUTUEL (ou émulsifiant) : il homogénéise le milieu réactionnel en créant une seule phase liquide, ce qui accélère considérablement la vitesse de la saponification.\n\n3. Le chauffage à reflux :\nOn adapte un réfrigérant à eau vertical au-dessus du ballon et on chauffe à reflux pendant 30 à 45 minutes. Le réfrigérant condense les vapeurs d'éthanol et d'eau qui retombent goutte à goutte dans le ballon : la réaction est accélérée par la température sans aucune perte de solvant ou de matière.\n\n4. L'étape clé du relargage (ou précipitation du savon) :\nÀ la fin du chauffage, on verse le contenu encore chaud du ballon dans un grand bêcher contenant une solution glacée très concentrée de chlorure de sodium (eau salée saturée ou saumure).\nPourquoi le savon précipite-t-il ?\nEn solution aqueuse ordinaire, le savon est soluble. Mais dans une solution saturée en ions Na+ et Cl-, la très forte force ionique et l'effet d'ion commun (Na+) abaissent drastiquement la solubilité des ions carboxylates : le savon devient TOTALEMENT INSOLUBLE et précipite massivement sous la forme d'un gâteau solide blanc cireux surnageant. Cette opération s'appelle le RELARGAGE.\n\n5. Filtration, lavage et séchage :\nLe savon précipité est filtré sur entonnoir Büchner sous vide, puis rincé à l'eau glacée pour éliminer l'excès de soude corrosive et de saumure.",
      "keyRule": "L'éthanol sert de solvant tiers pour homogénéiser les deux phases huile/eau. Le relargage dans l'eau salée saturée (NaCl) fait précipiter le savon en abaissant sa solubilité.",
      "formulas": [],
      "workedExample": {
        "title": "Justification des étapes du protocole de saponification",
        "statement": "Lors d'un TP, un élève oublie d'ajouter de l'éthanol et de verser le mélange dans la saumure. Explique les deux anomalies constatées.",
        "methodSteps": [
          "Étape 1 : Sans éthanol, l'huile surnage sur la soude sans se mélanger : la saponification est bloquée à l'interface et ne se fait pratiquement pas.",
          "Étape 2 : Sans relargage dans l'eau salée, le savon formé reste en solution micellaire ou en gel visqueux dissous dans l'eau : il est impossible de le filtrer et de l'isoler sous forme de solide pur."
        ],
        "conclusion": "L'éthanol est indispensable pour homogénéiser le milieu, et la saumure saturée est indispensable pour précipiter le savon par relargage."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau officiel des étapes du protocole expérimental de saponification",
        "tableData": {
          "headers": [
            "Étape expérimentale",
            "Réactifs / Matériel utilisé",
            "Phénomène chimique ou physique",
            "Objectif précis de l'étape"
          ],
          "rows": [
            [
              "Mise en contact",
              "Huile + Soude concentrée + Éthanol",
              "Homogénéisation par solvant commun",
              "Créer une phase unique et supprimer la barrière d'interface"
            ],
            [
              "Chauffage à reflux",
              "Chauffe-ballon + Réfrigérant à eau",
              "Activation thermique à reflux",
              "Accélérer la cinétique sans perte de réactifs volatils"
            ],
            [
              "Relargage",
              "Saumure glacée (eau salée saturée NaCl)",
              "Chute de solubilité par force ionique",
              "Faire précipiter le savon sous forme solide"
            ],
            [
              "Filtration & Lavage",
              "Filtre Büchner + Eau distillée glacée",
              "Séparation solide/liquide et rinçage",
              "Isoler le savon et éliminer l'excès de soude corrosive"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Rôle de l'éthanol comme solvant d'homogénéisation",
          "stepTheme": "Protocole de synthèse",
          "stepBadge": "Solvant mutuel",
          "paragraphText": "L'éthanol possède un pôle hydrophile (-OH) et un pôle lipophile (-C2H5). Il permet de dissoudre simultanément les triglycérides apolaires et les ions polaires Na+ et OH-, formant un mélange réactionnel monophasique propice aux collisions moléculaires efficaces.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p03_q1",
            "type": "mcq",
            "prompt": "Quel est le rôle physico-chimique essentiel joué par l'éthanol introduit dans le ballon de saponification ?",
            "options": [
              "Il sert de réactif pour oxyder l'huile en acide gras.",
              "Il joue le rôle de solvant mutuel qui homogénéise le mélange biphasique huile/eau en une seule phase uniforme.",
              "Il neutralise la potasse pour éviter qu'elle ne brûle le ballon.",
              "Il colore le savon en blanc étincelant."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'éthanol est soluble à la fois dans l'huile et dans l'eau : il crée une phase homogène qui permet aux réactifs d'entrer intimement en contact."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Rôle des grains de pierre ponce",
          "stepTheme": "Sécurité du chauffage",
          "stepBadge": "Pierre ponce",
          "paragraphText": "La pierre ponce est une roche volcanique poreuse contenant de minuscules bulles d'air. Lors du chauffage, ces cavités constituent des sites de nucléation pour la formation régulière de petites bulles de vapeur, empêchant la surchauffe brutale du liquide et les projections violentes hors du ballon.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p03_q2",
            "type": "mcq",
            "prompt": "Pourquoi dépose-t-on quelques grains de pierre ponce dans le ballon avant de chauffer ?",
            "options": [
              "Pour servir de catalyseur chimique redox.",
              "Pour réguler l'ébullition en évitant les surchauffes locales et les soubresauts violents du liquide.",
              "Pour parfumer le savon en fin de manipulation.",
              "Pour absorber l'excès d'eau."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les grains de pierre ponce régulent l'ébullition du mélange liquide en favorisant un dégagement doux et continu de petites bulles."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le phénomène physico-chimique du relargage",
          "stepTheme": "Isolement du produit",
          "stepBadge": "Relargage",
          "paragraphText": "Le relargage est la précipitation d'une substance dissoute provoquée par l'addition d'un sel minéral très soluble (ici le chlorure de sodium NaCl). Les molécules d'eau préférentiellement mobilisées pour hydrater les ions Na+ et Cl- ne sont plus disponibles pour solvater les ions carboxylates du savon, qui s'agglomèrent et précipitent.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p03_q3",
            "type": "mcq",
            "prompt": "Que désigne précisément le terme de « relargage » lors de la fabrication expérimentale d'un savon ?",
            "options": [
              "L'évaporation du solvant sous pression réduite.",
              "La précipitation du savon sous forme solide lorsqu'on verse le mélange réactionnel dans une solution saturée en chlorure de sodium.",
              "La combustion complète des impuretés de l'huile.",
              "L'addition d'un parfum aromatique de synthèse."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le relargage est la précipitation sélective du savon provoquée par l'immersion dans une saumure saturée en NaCl où il est insoluble."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Pourquoi le savon flotte-t-il après relargage ?",
          "stepTheme": "Séparation physique",
          "stepBadge": "Densité",
          "paragraphText": "Après relargage dans la saumure, le savon précipité forme une couche solide pâteuse qui surnage nettement à la surface du liquide. En effet, la densité du savon solide (~0,9 g/cm3) est inférieure à celle de la saumure concentrée saturée en sel (~1,2 g/cm3), ce qui facilite considérablement sa récupération par simple filtration ou écumage.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p03_q4",
            "type": "mcq",
            "prompt": "Pourquoi le savon solide précipité flotte-t-il à la surface du bêcher lors du relargage ?",
            "options": [
              "Parce qu'il est constitué de bulles de gaz uniquement.",
              "Parce que sa densité est plus faible que celle de la solution très concentrée d'eau salée (saumure).",
              "Parce que le sel repousse magnétiquement les molécules de savon.",
              "Parce qu'il a été refroidi à l'azote liquide."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La saumure saturée en sel est très dense (d ~ 1,2), ce qui fait flotter le gâteau de savon solide (d ~ 0,9)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Lavage du savon pour éliminer l'excès de soude caustique",
          "stepTheme": "Purification",
          "stepBadge": "Rinçage à l'eau glacée",
          "paragraphText": "Le savon brut recueilli sur le filtre est imprégné d'une solution très caustique d'hydroxyde de sodium qui irriterait gravement l'épiderme. On le lave sur le Büchner avec de petites portions d'eau distillée glacée pour entraîner la soude sans dissoudre le savon.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p03_q5",
            "type": "mcq",
            "prompt": "Pourquoi doit-on impérativement laver à plusieurs reprises le savon obtenu sur le filtre Büchner avec de l'eau distillée glacée ?",
            "options": [
              "Pour éliminer l'éthanol restant afin d'éviter qu'il ne brûle.",
              "Pour éliminer la soude corrosive résiduelle et l'excès de sel, en utilisant de l'eau glacée afin de ne pas redissoudre le savon.",
              "Pour transformer le savon dur en savon mou.",
              "Pour modifier la couleur du savon."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'élimination de la soude résiduelle est impérative pour rendre le savon utilisable, et l'eau doit être très froide pour minimiser sa redissolution."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège d'examen : Où se trouve le glycérol après relargage ?",
          "stepTheme": "Devenir des sous-produits",
          "stepBadge": "Phase aqueuse",
          "paragraphText": "Une question piège récurrente de TP demande : « Où se trouve le glycérol formé après filtration du savon ? ». Le glycérol (polyol comportant 3 groupes -OH) est extrêmement soluble dans l'eau : il ne précipite pas avec le savon, mais reste dissous dans le filtrat aqueux avec la saumure et l'éthanol.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p03_q6",
            "type": "mcq",
            "prompt": "Après avoir réalisé le relargage et filtré le précipité de savon sur le Büchner, dans quelle phase retrouve-t-on le glycérol formé par la réaction ?",
            "options": [
              "Il est emprisonné sous forme solide dans le gâteau de savon sur le filtre.",
              "Il s'est évaporé dans l'air pendant le chauffage à reflux.",
              "Il se trouve intégralement dissous dans le filtrat liquide (la phase aqueuse saline résiduelle).",
              "Il s'est déposé sous forme de cristaux au fond du ballon de chauffage."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le glycérol est hydrophile et très soluble dans l'eau : il traverse le filtre et demeure dans les eaux-mères de filtration (le filtrat)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Sécurité lors de l'utilisation de solutions concentrées de soude",
          "stepTheme": "Sécurité au laboratoire",
          "stepBadge": "Dangers de la soude",
          "paragraphText": "La soude concentrée à 10 mol/L utilisée pour la saponification est une base extrêmement corrosive qui détruit les tissus cutanés et attaque irrémédiablement la cornée en quelques secondes. Le port de lunettes étanches et de gants épais en caoutchouc est strictement obligatoire à chaque manipulation.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p03_q7",
            "type": "mcq",
            "prompt": "Quelle conduite immédiate d'urgence s'impose en cas de projection accidentelle de solution concentrée de soude dans l'œil lors d'un TP de saponification ?",
            "options": [
              "Frotter immédiatement l'œil avec un mouchoir sec.",
              "Rincer immédiatement et abondamment l'œil à l'eau courante au laveur d'yeux pendant au moins 15 minutes consécutives tout en prévenant les secours médicaux.",
              "Verser de l'acide chlorhydrique concentré dans l'œil pour neutraliser la base.",
              "Attendre la fin de la séance de TP pour aller à l'infirmerie."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le rinçage immédiat et prolongé à l'eau courante (au moins 15 minutes) est la seule mesure d'urgence vitale pour diluer et éliminer la base caustique avant lésion oculaire irréversible."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l05_savons_p03_q1",
          "type": "mcq",
          "prompt": "Quel est le rôle physico-chimique essentiel joué par l'éthanol introduit dans le ballon de saponification ?",
          "options": [
            "Il sert de réactif pour oxyder l'huile en acide gras.",
            "Il joue le rôle de solvant mutuel qui homogénéise le mélange biphasique huile/eau en une seule phase uniforme.",
            "Il neutralise la potasse pour éviter qu'elle ne brûle le ballon.",
            "Il colore le savon en blanc étincelant."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'éthanol est soluble à la fois dans l'huile et dans l'eau : il crée une phase homogène qui permet aux réactifs d'entrer intimement en contact."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p03_q2",
          "type": "mcq",
          "prompt": "Pourquoi dépose-t-on quelques grains de pierre ponce dans le ballon avant de chauffer ?",
          "options": [
            "Pour servir de catalyseur chimique redox.",
            "Pour réguler l'ébullition en évitant les surchauffes locales et les soubresauts violents du liquide.",
            "Pour parfumer le savon en fin de manipulation.",
            "Pour absorber l'excès d'eau."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les grains de pierre ponce régulent l'ébullition du mélange liquide en favorisant un dégagement doux et continu de petites bulles."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p03_q3",
          "type": "mcq",
          "prompt": "Que désigne précisément le terme de « relargage » lors de la fabrication expérimentale d'un savon ?",
          "options": [
            "L'évaporation du solvant sous pression réduite.",
            "La précipitation du savon sous forme solide lorsqu'on verse le mélange réactionnel dans une solution saturée en chlorure de sodium.",
            "La combustion complète des impuretés de l'huile.",
            "L'addition d'un parfum aromatique de synthèse."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le relargage est la précipitation sélective du savon provoquée par l'immersion dans une saumure saturée en NaCl où il est insoluble."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p03_q4",
          "type": "mcq",
          "prompt": "Pourquoi le savon solide précipité flotte-t-il à la surface du bêcher lors du relargage ?",
          "options": [
            "Parce qu'il est constitué de bulles de gaz uniquement.",
            "Parce que sa densité est plus faible que celle de la solution très concentrée d'eau salée (saumure).",
            "Parce que le sel repousse magnétiquement les molécules de savon.",
            "Parce qu'il a été refroidi à l'azote liquide."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La saumure saturée en sel est très dense (d ~ 1,2), ce qui fait flotter le gâteau de savon solide (d ~ 0,9)."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p03_q5",
          "type": "mcq",
          "prompt": "Pourquoi doit-on impérativement laver à plusieurs reprises le savon obtenu sur le filtre Büchner avec de l'eau distillée glacée ?",
          "options": [
            "Pour éliminer l'éthanol restant afin d'éviter qu'il ne brûle.",
            "Pour éliminer la soude corrosive résiduelle et l'excès de sel, en utilisant de l'eau glacée afin de ne pas redissoudre le savon.",
            "Pour transformer le savon dur en savon mou.",
            "Pour modifier la couleur du savon."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'élimination de la soude résiduelle est impérative pour rendre le savon utilisable, et l'eau doit être très froide pour minimiser sa redissolution."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p03_q6",
          "type": "mcq",
          "prompt": "Après avoir réalisé le relargage et filtré le précipité de savon sur le Büchner, dans quelle phase retrouve-t-on le glycérol formé par la réaction ?",
          "options": [
            "Il est emprisonné sous forme solide dans le gâteau de savon sur le filtre.",
            "Il s'est évaporé dans l'air pendant le chauffage à reflux.",
            "Il se trouve intégralement dissous dans le filtrat liquide (la phase aqueuse saline résiduelle).",
            "Il s'est déposé sous forme de cristaux au fond du ballon de chauffage."
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le glycérol est hydrophile et très soluble dans l'eau : il traverse le filtre et demeure dans les eaux-mères de filtration (le filtrat)."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p03_q7",
          "type": "mcq",
          "prompt": "Quelle conduite immédiate d'urgence s'impose en cas de projection accidentelle de solution concentrée de soude dans l'œil lors d'un TP de saponification ?",
          "options": [
            "Frotter immédiatement l'œil avec un mouchoir sec.",
            "Rincer immédiatement et abondamment l'œil à l'eau courante au laveur d'yeux pendant au moins 15 minutes consécutives tout en prévenant les secours médicaux.",
            "Verser de l'acide chlorhydrique concentré dans l'œil pour neutraliser la base.",
            "Attendre la fin de la séance de TP pour aller à l'infirmerie."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le rinçage immédiat et prolongé à l'eau courante (au moins 15 minutes) est la seule mesure d'urgence vitale pour diluer et éliminer la base caustique avant lésion oculaire irréversible."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l05_savons_p04",
      "order": 4,
      "title": "Stœchiométrie et calculs quantitatifs de fabrication de savon",
      "summary": "Relation molaire 1 triglycéride pour 3 bases, calcul des masses théoriques de savon et de glycérol, et détermination du rendement d'une savonnerie.",
      "conceptExplanation": "La saponification d'un triglycéride obéit à une stœchiométrie stricte de 1 pour 3 :\n\n1. Équation-bilan stœchiométrique :\n1 mole de Triglycéride + 3 moles de (Na+ + OH-) ---> 1 mole de Glycérol + 3 moles de Savon (R-COO- Na+).\n\n2. Relations molaires fondamentales à partir des quantités initiales :\nSoit n_huile la quantité de triglycéride pur présent au départ (n_huile = m_huile / M_huile) :\n- Quantité théorique de savon produit : n_savon = 3 * n_huile.\n- Masse théorique de savon : m_savon = n_savon * M_savon = 3 * (m_huile / M_huile) * M_savon.\n- Quantité théorique de glycérol coproduit : n_glycérol = n_huile.\n- Masse théorique de glycérol : m_glycérol = n_huile * M_glycérol = (m_huile / M_huile) * 92 g/mol.\n\n3. Consommation de base forte :\nPour saponifier intégralement une masse m_huile, il faut au minimum une quantité de soude n_soude = 3 * n_huile = 3 * (m_huile / M_huile).\nSi la soude est fournie sous forme de solution de concentration Cb, le volume minimal requis est Vb = n_soude / Cb = (3 * m_huile) / (M_huile * Cb).\n\n4. Calcul du rendement pratique :\nRendement r = (m_savon_réellement_obtenu / m_savon_théorique) * 100.",
      "keyRule": "1 mole de triglycéride produit 3 moles de savon et 1 mole de glycérol : n(savon) = 3 * n(huile) ; n(glycérol) = n(huile).",
      "formulas": [
        {
          "name": "Stœchiométrie molaire de saponification",
          "formula": "n_{\\text{savon}} = 3 \\, n_{\\text{triglycéride}} = 3 \\, \\frac{m_{\\text{huile}}}{M_{\\text{huile}}}",
          "note": "Production de 3 molécules de carboxylate de sodium par molécule de triester"
        },
        {
          "name": "Masse de savon théorique",
          "formula": "m_{\\text{savon}} = 3 \\left(\\frac{m_{\\text{huile}}}{M_{\\text{huile}}}\\right) M_{\\text{savon}}",
          "note": "Formule de calcul universelle pour les exercices du Bac"
        }
      ],
      "workedExample": {
        "title": "Calcul de la masse de savon et de glycérol à partir d'huile de palme",
        "statement": "On saponifie m_huile = 100 g de palmitine pure (M_palmitine = 806 g/mol) par un excès de solution de soude. On obtient du palmitate de sodium (M_savon = 278 g/mol) et du glycérol (M_glycérol = 92 g/mol). Calcule la masse théorique de savon et de glycérol.",
        "methodSteps": [
          "Étape 1 : Calculer la quantité de palmitine : n_huile = 100 / 806 = 0,124 mol.",
          "Étape 2 : Quantité de savon produit : n_savon = 3 * n_huile = 3 * 0,124 = 0,372 mol.",
          "Étape 3 : Calculer la masse théorique de savon : m_savon = 0,372 * 278 = 103,4 g (ou 3 * (100 / 806) * 278 = 103,47 g).",
          "Étape 4 : Quantité de glycérol coproduit : n_glycérol = n_huile = 0,124 mol.",
          "Étape 5 : Calculer la masse théorique de glycérol : m_glycérol = 0,124 * 92 = 11,4 g."
        ],
        "conclusion": "On obtient théoriquement 103,5 g de savon et 11,4 g de glycérol."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau de correspondances quantitatives de saponification (base 100 g d'huile)",
        "tableData": {
          "headers": [
            "Corps gras",
            "Masse molaire de l'huile",
            "Savon formé (formule)",
            "Masse molaire du savon",
            "Masse théorique de savon pour 100 g d'huile"
          ],
          "rows": [
            [
              "Butyrine (beurre)",
              "302 g/mol",
              "Butanoate de sodium (C3H7COONa)",
              "110 g/mol",
              "m = 3 * (100 / 302) * 110 = 109,3 g"
            ],
            [
              "Palmitine (palme)",
              "806 g/mol",
              "Palmitate de sodium (C15H31COONa)",
              "278 g/mol",
              "m = 3 * (100 / 806) * 278 = 103,5 g"
            ],
            [
              "Stéarine (suif/cacao)",
              "890 g/mol",
              "Stéarate de sodium (C17H35COONa)",
              "306 g/mol",
              "m = 3 * (100 / 890) * 306 = 103,1 g"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Rapport stœchiométrique 1 : 3 entre triglycéride et base",
          "stepTheme": "Stœchiométrie",
          "stepBadge": "Rapport 1:3",
          "paragraphText": "Chaque molécule de triglycéride renfermant 3 liaisons esters indépendantes, il faut impérativement 3 ions OH- pour saponifier complètement 1 molécule de triester : n(OH-) consommé = 3 * n(triglycéride).",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p04_q1",
            "type": "mcq",
            "prompt": "Combien de moles d'hydroxyde de sodium NaOH sont rigoureusement nécessaires pour saponifier complètement 2,0 moles de stéarine ?",
            "options": [
              "2,0 moles",
              "3,0 moles",
              "6,0 moles",
              "9,0 moles"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Chaque mole de triester requiert 3 moles de base : n(NaOH) = 3 * n(stéarine) = 3 * 2,0 = 6,0 moles."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Calcul de la masse théorique de savon produit",
          "stepTheme": "Calculs de masse",
          "stepBadge": "m_savon = 3 * n_huile * M_savon",
          "paragraphText": "La formule de référence pour déterminer la masse de savon attendue lors d'une synthèse est : m_savon = 3 * (m_huile / M_huile) * M_savon.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p04_q2",
            "type": "mcq",
            "prompt": "On saponifie complètement m = 89 g de stéarine pure (M = 890 g/mol) par un excès de soude. Sachant que la masse molaire du stéarate de sodium vaut M = 306 g/mol, quelle est la masse théorique de savon obtenu ?",
            "options": [
              "30,6 g",
              "61,2 g",
              "91,8 g",
              "102,0 g"
            ],
            "correctAnswerIndex": 2,
            "explanation": "n(huile) = 89 / 890 = 0,10 mol. n(savon) = 3 * 0,10 = 0,30 mol. Masse de savon m = 0,30 * 306 = 91,8 g."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calcul de la masse de polyalcool (glycérol) coproduit",
          "stepTheme": "Calculs de masse",
          "stepBadge": "Coproduction de glycérol",
          "paragraphText": "Chaque mole de triglycéride saponifiée libère exactement 1 mole de glycérol (M = 92 g/mol). La masse de glycérol coproduite s'écrit donc : m_glycérol = (m_huile / M_huile) * 92 g/mol.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p04_q3",
            "type": "mcq",
            "prompt": "Lors de la saponification de 0,50 mole de palmitine, quelle masse de glycérol (M = 92 g/mol) est simultanément libérée dans le milieu ?",
            "options": [
              "23 g",
              "46 g",
              "92 g",
              "138 g"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D'après la stœchiométrie (1 mole de triester donne 1 mole de glycérol) : n(glycérol) = 0,50 mol. Masse m = 0,50 * 92 = 46 g."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Détermination du rendement pratique d'une synthèse",
          "stepTheme": "Rendement de synthèse",
          "stepBadge": "Rendement r",
          "paragraphText": "Le rendement r est le rapport entre la masse de savon sec réellement pesée au laboratoire m_exp et la masse théorique m_th calculée d'après l'équation stœchiométrique : r = (m_exp / m_th) * 100. Au laboratoire, le rendement atteint couramment 85 à 95 % (quelques pertes surviennent lors des lavages et sur le filtre).",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p04_q4",
            "type": "mcq",
            "prompt": "La masse théorique de savon calculée pour une synthèse vaut 50,0 g. Après filtration, lavage et séchage complet à l'étuve, l'élève pèse 42,5 g de savon pur. Quel est le rendement de cette synthèse ?",
            "options": [
              "75 %",
              "80 %",
              "85 %",
              "90 %"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Rendement r = (42,5 / 50,0) * 100 = 85 %."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Calcul de l'indice de saponification d'un corps gras",
          "stepTheme": "Chimie industrielle",
          "stepBadge": "Indice de saponification",
          "paragraphText": "L'indice de saponification (Is) est la masse d'hydroxyde de potassium KOH (en milligrammes) nécessaire pour saponifier intégralement 1 gramme de corps gras. Plus la chaîne des acides gras est courte, plus la masse molaire de l'huile est petite, et plus l'indice de saponification est élevé : Is = (3 * M_KOH * 1000) / M_triglycéride (avec M_KOH = 56,1 g/mol).",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p04_q5",
            "type": "mcq",
            "prompt": "Quelle information analytique majeure la mesure expérimentale de l'indice de saponification (Is) d'un échantillon d'huile fournit-elle au chimiste ?",
            "options": [
              "Le degré d'acidité de l'eau contenue dans l'échantillon.",
              "La masse molaire moyenne des triglycérides et la longueur moyenne des chaînes carbonées des acides gras de l'huile.",
              "Le pourcentage d'oxygène dans l'air ambiant.",
              "La vitesse du vent lors de la récolte des fruits."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'indice de saponification étant inversement proportionnel à la masse molaire de l'huile, sa mesure permet d'estimer la longueur moyenne des chaînes d'acides gras du corps gras."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège d'examen : Ne pas oublier le facteur 3 dans le calcul de masse de savon",
          "stepTheme": "Erreur fréquente",
          "stepBadge": "Facteur 3 obligatoire",
          "paragraphText": "L'erreur la plus fréquente commise par les élèves dans les épreuves du Baccalauréat est d'oublier de multiplier par 3 la quantité de savon produit par rapport à l'huile : n(savon) = 3 * n(triglycéride). Oublier ce facteur 3 conduit à une masse de savon divisée par 3, sanctionnée par la perte de tous les points de calcul.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p04_q6",
            "type": "mcq",
            "prompt": "Un élève applique la formule m_savon = n_huile * M_savon sans le facteur 3 pour calculer la masse de savon attendue lors de la saponification d'un triglycéride. Quel est le défaut de son calcul ?",
            "options": [
              "Son résultat est trois fois trop grand.",
              "Son résultat est trois fois trop petit, car 1 mole de triester produit 3 moles de savon.",
              "Son calcul est parfaitement exact pour tous les corps gras.",
              "Son résultat a une unité incorrecte."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Comme chaque molécule de triester libère 3 molécules de carboxylate de sodium, n(savon) = 3 * n(huile) : omettre le coefficient 3 sous-estime la masse d'un facteur 3."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Vérification de la conservation globale de la masse",
          "stepTheme": "Bilan global",
          "stepBadge": "Conservation de la masse",
          "paragraphText": "Dans un réacteur fermé, la masse totale des réactifs est strictement égale à la masse totale des produits formés : m(huile) + m(NaOH pure) = m(savon théorique) + m(glycérol théorique). Cette vérification permet de contrôler instantanément la justesse de tous ses calculs stœchiométriques lors d'un examen.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p04_q7",
            "type": "mcq",
            "prompt": "On saponifie 80,6 g de palmitine par 12,0 g de soude pure NaOH. On obtient 83,4 g de palmitate de sodium. D'après la loi de Lavoisier de conservation de la masse, quelle masse de glycérol est rigoureusement attendue ?",
            "options": [
              "4,6 g",
              "9,2 g",
              "12,0 g",
              "18,4 g"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Masse des réactifs = 80,6 + 12,0 = 92,6 g. Masse de glycérol = 92,6 - 83,4 (savon) = 9,2 g."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l05_savons_p04_q1",
          "type": "mcq",
          "prompt": "Combien de moles d'hydroxyde de sodium NaOH sont rigoureusement nécessaires pour saponifier complètement 2,0 moles de stéarine ?",
          "options": [
            "2,0 moles",
            "3,0 moles",
            "6,0 moles",
            "9,0 moles"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Chaque mole de triester requiert 3 moles de base : n(NaOH) = 3 * n(stéarine) = 3 * 2,0 = 6,0 moles."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p04_q2",
          "type": "mcq",
          "prompt": "On saponifie complètement m = 89 g de stéarine pure (M = 890 g/mol) par un excès de soude. Sachant que la masse molaire du stéarate de sodium vaut M = 306 g/mol, quelle est la masse théorique de savon obtenu ?",
          "options": [
            "30,6 g",
            "61,2 g",
            "91,8 g",
            "102,0 g"
          ],
          "correctAnswerIndex": 2,
          "explanation": "n(huile) = 89 / 890 = 0,10 mol. n(savon) = 3 * 0,10 = 0,30 mol. Masse de savon m = 0,30 * 306 = 91,8 g."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p04_q3",
          "type": "mcq",
          "prompt": "Lors de la saponification de 0,50 mole de palmitine, quelle masse de glycérol (M = 92 g/mol) est simultanément libérée dans le milieu ?",
          "options": [
            "23 g",
            "46 g",
            "92 g",
            "138 g"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D'après la stœchiométrie (1 mole de triester donne 1 mole de glycérol) : n(glycérol) = 0,50 mol. Masse m = 0,50 * 92 = 46 g."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p04_q4",
          "type": "mcq",
          "prompt": "La masse théorique de savon calculée pour une synthèse vaut 50,0 g. Après filtration, lavage et séchage complet à l'étuve, l'élève pèse 42,5 g de savon pur. Quel est le rendement de cette synthèse ?",
          "options": [
            "75 %",
            "80 %",
            "85 %",
            "90 %"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Rendement r = (42,5 / 50,0) * 100 = 85 %."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p04_q5",
          "type": "mcq",
          "prompt": "Quelle information analytique majeure la mesure expérimentale de l'indice de saponification (Is) d'un échantillon d'huile fournit-elle au chimiste ?",
          "options": [
            "Le degré d'acidité de l'eau contenue dans l'échantillon.",
            "La masse molaire moyenne des triglycérides et la longueur moyenne des chaînes carbonées des acides gras de l'huile.",
            "Le pourcentage d'oxygène dans l'air ambiant.",
            "La vitesse du vent lors de la récolte des fruits."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'indice de saponification étant inversement proportionnel à la masse molaire de l'huile, sa mesure permet d'estimer la longueur moyenne des chaînes d'acides gras du corps gras."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p04_q6",
          "type": "mcq",
          "prompt": "Un élève applique la formule m_savon = n_huile * M_savon sans le facteur 3 pour calculer la masse de savon attendue lors de la saponification d'un triglycéride. Quel est le défaut de son calcul ?",
          "options": [
            "Son résultat est trois fois trop grand.",
            "Son résultat est trois fois trop petit, car 1 mole de triester produit 3 moles de savon.",
            "Son calcul est parfaitement exact pour tous les corps gras.",
            "Son résultat a une unité incorrecte."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Comme chaque molécule de triester libère 3 molécules de carboxylate de sodium, n(savon) = 3 * n(huile) : omettre le coefficient 3 sous-estime la masse d'un facteur 3."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p04_q7",
          "type": "mcq",
          "prompt": "On saponifie 80,6 g de palmitine par 12,0 g de soude pure NaOH. On obtient 83,4 g de palmitate de sodium. D'après la loi de Lavoisier de conservation de la masse, quelle masse de glycérol est rigoureusement attendue ?",
          "options": [
            "4,6 g",
            "9,2 g",
            "12,0 g",
            "18,4 g"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Masse des réactifs = 80,6 + 12,0 = 92,6 g. Masse de glycérol = 92,6 - 83,4 (savon) = 9,2 g."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l05_savons_p05",
      "order": 5,
      "title": "Structure amphiphile et mécanisme d'action détergent du savon",
      "summary": "Tête carboxylate hydrophile et queue hydrocarbonée lipophile, formation de micelles, émulsion des graisses et comportement dans les eaux dures (ions Ca2+ et Mg2+).",
      "conceptExplanation": "L'efficacité nettoyante du savon s'explique par la structure duale très originale de l'ion carboxylate R-COO- :\n\n1. Une structure moléculaire amphiphile (ou amphipathique) :\nL'ion carboxylate se décompose en deux pôles aux propriétés chimiques opposées :\n- La « tête » polaire et chargée négativement (-COO-) : elle possède une grande affinité pour l'eau grâce à des liaisons hydrogène et des attractions électrostatiques ion-dipôle. Elle est dite HYDROPHILE (qui aime l'eau) ou LIPOPHOBE (qui fuit les graisses).\n- La « queue » carbonée apolaire (R = longue chaîne aliphatique de 15 à 18 carbones) : elle est hydrophobe (fuit l'eau) mais possède une très grande affinité pour les corps gras et les taches lipidiques insolubles dans l'eau. Elle est dite LIPOPHILE (qui aime les graisses) ou HYDROPHOBE.\n\n2. Mécanisme de détergence et formation de micelles :\n- Lorsque le savon est mis en présence d'une tache de graisse sur un tissu dans l'eau, les queues lipophiles pénètrent au cœur de la graisse et s'y ancrent solidement.\n- Les têtes hydrophiles chargées négativement restent tournées vers l'extérieur au contact de l'eau.\n- Sous l'effet de l'agitation mécanique, la goutte de graisse est fragmentée en microgouttelettes sphériques entourées d'une couronne de têtes chargées négativement : ce sont des MICELLES.\n- Les micelles, portant toutes des charges négatives en surface, se repoussent électrostatiquement mutuellement : la graisse reste dispersée en suspension stable dans l'eau (émulsion) et est définitivement évacuée lors du rinçage.\n\n3. Comportement du savon dans les eaux dures :\nUne eau est dite dure lorsqu'elle contient une concentration élevée d'ions calcium Ca2+ et magnésium Mg2+.\nEn eau dure, les ions carboxylates du savon réagissent avec Ca2+ et Mg2+ pour former des carboxylates de calcium et de magnésium totalement insolubles dans l'eau :\n2 R-COO- + Ca2+ ---> (R-COO)2Ca(s) (précipité blanc de crasse savonneuse).\nLe savon est ainsi consommé inutilement en formant des dépôts et perd tout son pouvoir moussant et détergent.",
      "keyRule": "L'ion savon est amphiphile : queue lipophile dans la graisse, tête hydrophile dans l'eau. En eau calcaire (dure), le savon est neutralisé et précipite sous forme de sel de calcium insoluble.",
      "formulas": [
        {
          "name": "Précipitation du savon en eau dure (avec ions calcium)",
          "formula": "2\\,\\mathrm{R-COO^-} + \\mathrm{Ca^{2+}} \\longrightarrow \\mathrm{(R-COO)_2Ca}_{\\text{(solide)}} \\downarrow",
          "note": "Formation d'un précipité insoluble qui inactive le savon"
        }
      ],
      "workedExample": {
        "title": "Interprétation du lavage des mains au savon",
        "statement": "Pourquoi est-il impossible de nettoyer une tache d'huile de moteur sur ses mains avec de l'eau seule, alors que l'ajout d'une noisette de savon permet un nettoyage immédiat ?",
        "methodSteps": [
          "Étape 1 : Analyser l'eau seule : l'eau est très polaire et l'huile de moteur est totalement apolaire. L'eau ne peut pas dissoudre l'huile (deux phases immiscibles).",
          "Étape 2 : Analyser l'effet du savon : les queues hydrocarbonées lipophiles des molécules de savon pénètrent dans la graisse de moteur.",
          "Étape 3 : Les têtes polaires carboxylates hydrophiles restent tournées vers l'eau.",
          "Étape 4 : L'agitation mécanique arrache la graisse sous forme de micelles dispersées stables que le jet d'eau emporte."
        ],
        "conclusion": "Le savon agit comme un tensioactif intermédiaire reliant la graisse à l'eau sous forme de micelles lessivables."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau structural de l'ion carboxylate (Ion savon)",
        "tableData": {
          "headers": [
            "Partie de la molécule",
            "Structure chimique",
            "Comportement avec l'eau",
            "Comportement avec les corps gras",
            "Rôle dans le nettoyage"
          ],
          "rows": [
            [
              "La Tête",
              "Groupe carboxylate -COO-",
              "Hydrophile (affinité forte)",
              "Lipophobe (repoussé)",
              "Assure la dispersion et le maintien dans l'eau"
            ],
            [
              "La Queue",
              "Chaîne carbonée aliphatique (C15 à C17)",
              "Hydrophobe (fuit l'eau)",
              "Lipophile (dissout les graisses)",
              "Pénètre au cœur des salissures huileuses"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La dualité amphiphile de l'ion savon",
          "stepTheme": "Structure amphiphile",
          "stepBadge": "Amphiphile",
          "paragraphText": "Une molécule est dite amphiphile lorsqu'elle réunit au sein de la même entité chimique une zone polaire soluble dans l'eau (tête hydrophile) et une zone apolaire soluble dans les huiles (queue lipophile).",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p05_q1",
            "type": "mcq",
            "prompt": "Quel qualificatif physico-chimique désigne une molécule possédant simultanément une partie hydrophile et une partie lipophile ?",
            "options": [
              "Amphotère",
              "Amphiphile (ou tensioactif)",
              "Athermique",
              "Anhydre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Amphiphile (du grec amphi = les deux et philos = ami) qualifie une entité qui a une affinité conjointe pour l'eau et pour les lipides."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Formation des micelles et émulsification des salissures",
          "stepTheme": "Pouvoir nettoyant",
          "stepBadge": "Les Micelles",
          "paragraphText": "En solution aqueuse au-dessus d'une concentration critique (la concentration micellaire critique CMC), les ions savon s'organisent spontanément en agrégats sphériques appelés micelles : les queues lipophiles se regroupent au centre pour fuir l'eau, tandis que les têtes carboxylates chargées négativement tapissent la surface externe en contact avec le solvant.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p05_q2",
            "type": "mcq",
            "prompt": "Comment les molécules de savon s'orientent-elles dans l'eau pour former une micelle sphérique emprisonnant une microgouttelette d'huile ?",
            "options": [
              "Les têtes hydrophiles plongent au cœur de l'huile et les queues restent dans l'eau.",
              "Les queues hydrocarbonées lipophiles s'enfoncent au centre dans la gouttelette d'huile, et les têtes polaires hydrophiles restent en surface tournées vers l'eau.",
              "Les molécules se disposent toutes parallèlement à la surface du verre.",
              "Les molécules expulsent les atomes d'oxygène sous forme gazeuse."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les queues apolaires se dissolvent dans la salissure grasse tandis que les têtes ioniques polaires restent solvatées par l'eau extérieure."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Répulsion électrostatique des micelles entre elles",
          "stepTheme": "Stabilité de l'émulsion",
          "stepBadge": "Charges négatives",
          "paragraphText": "Toutes les micelles formées portent à leur périphérie les charges négatives des têtes -COO-. Lorsqu'elles se rapprochent, les forces de répulsion coulombienne empêchent leur coalescence : les taches de graisse restent fragmentées sous forme d'une émulsion laiteuse stable qui ne se redépose pas sur le linge et est évacuée à l'égout lors du rinçage.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p05_q3",
            "type": "mcq",
            "prompt": "Pourquoi les gouttelettes de graisse entourées de savon ne se rassemblent-elles pas pour reformer une nappe d'huile surnageante dans l'eau de lavage ?",
            "options": [
              "Parce que l'eau les détruit par combustion à froid.",
              "Parce que les têtes -COO- externes de chaque micelle portent toutes des charges négatives identiques qui se repoussent électrostatiquement, maintenant la graisse en émulsion dispersée.",
              "Parce que le savon transforme la graisse en vapeur d'eau.",
              "Parce que les forces de gravité s'annulent."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La répulsion électrostatique entre charges négatives homologues portées par la couronne externe des micelles maintient la dispersion colloïdale."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Comportement du savon en eau calcaire (eau dure)",
          "stepTheme": "Eaux dures",
          "stepBadge": "Inactivation par Ca2+",
          "paragraphText": "Lorsqu'on tente de se laver avec un savon dans une eau dure (riche en ions Ca2+ et Mg2+), le savon réagit spontanément selon : 2 R-COO- + Ca2+ -> (R-COO)2Ca(s). Ce sel de calcium insoluble forme un dépôt grisâtre collant (la « crasse de savon ») qui encrasse les lavabos et le linge, et le savon ne mousse pas tant que tous les ions calcium n'ont pas été précipités.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p05_q4",
            "type": "mcq",
            "prompt": "Que se produit-il lorsqu'on frotte un pain de savon traditionnel de ménage dans une eau très riche en ions calcium Ca2+ (eau calcaire dure) ?",
            "options": [
              "Le savon mousse instantanément dix fois plus que dans l'eau douce.",
              "Il se forme un précipité blanc grisâtre de sel de calcium insoluble qui inactive le savon et l'empêche de mousser efficacement.",
              "Le savon se dissout en dégageant du gaz dihydrogène.",
              "L'eau devient subitement limpide et acide (pH < 2)."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les ions Ca2+ précipitent les ions carboxylates sous forme de dicarboxylate de calcium insoluble, détruisant le pouvoir détergent du savon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Remède à l'eau dure : adoucissement de l'eau ou détergents synthétiques",
          "stepTheme": "Solutions techniques",
          "stepBadge": "Adoucisseur d'eau",
          "paragraphText": "Pour remédier à l'inactivation des savons en eau calcaire, l'industrie et les ménages utilisent des adoucisseurs d'eau à résine échangeuse d'ions (qui remplacent les ions Ca2+ et Mg2+ par des ions Na+) ou emploient des détergents de synthèse sulfonates dont les sels de calcium restent solubles dans l'eau.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p05_q5",
            "type": "mcq",
            "prompt": "Pourquoi les lessives modernes en poudre contiennent-elles des tensioactifs de synthèse (alkylsulfonates) plutôt que du savon traditionnel de Marseille ?",
            "options": [
              "Parce que le savon naturel est toxique pour les vêtements.",
              "Parce que les tensioactifs de synthèse restent parfaitement actifs et solubles même dans les eaux très dures riches en calcaire (Ca2+), sans former de dépôts insolubles.",
              "Parce que les détergents de synthèse sont fabriqués uniquement avec du sable.",
              "Parce que le savon ne nettoie pas à l'eau tiède."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les sels de calcium des sulfonates de synthèse sont solubles dans l'eau, ce qui permet aux poudres à laver modernes de mousser et nettoyer même en eau très calcaire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Pouvoir mouillant et tension superficielle de l'eau",
          "stepTheme": "Tension superficielle",
          "stepBadge": "Pouvoir mouillant",
          "paragraphText": "L'eau pure possède une tension superficielle élevée qui lui fait former des gouttes sphériques qui glissent sur les tissus sans les pénétrer (effet déperlant). En se plaçant à l'interface air/eau, les molécules de savon abaissent considérablement la tension superficielle de l'eau : l'eau « mouille » le tissu et s'infiltre au cœur des fibres les plus serrées.",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p05_q6",
            "type": "mcq",
            "prompt": "Quel est l'effet de l'ajout de savon sur la tension superficielle de l'eau pure ?",
            "options": [
              "Il augmente la tension superficielle, empêchant l'eau de pénétrer le tissu.",
              "Il abaisse fortement la tension superficielle de l'eau, ce qui lui confère un excellent pouvoir mouillant permettant d'imbiber les fibres textiles en profondeur.",
              "Il n'a aucun effet sur les propriétés physiques du liquide.",
              "Il transforme l'eau en glace à température ambiante."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le savon est un tensioactif qui réduit la tension superficielle de l'eau, augmentant son étalement et son pouvoir mouillant."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Caractère légèrement basique des solutions de savon et pouvoir irritant",
          "stepTheme": "pH des savons",
          "stepBadge": "pH basique du savon",
          "paragraphText": "Comme le savon est le sel d'un acide faible (acide gras, pKa ~ 4,9) et d'une base forte (NaOH), sa mise en solution dans l'eau pure provoque une légère hydrolyse basique : R-COO- + H2O ⇌ R-COOH + HO-. Une solution de savon naturel a donc toujours un pH légèrement basique (pH ~ 9 à 10). C'est pourquoi un savon ordinaire peut être légèrement agressif pour le film hydrolipidique de la peau (dont le pH naturel est d'environ 5,5).",
          "exercise": {
            "id": "terminale_c_chimie_l05_savons_p05_q7",
            "type": "mcq",
            "prompt": "Pourquoi une eau savonneuse préparée avec du savon de Marseille authentique a-t-elle un pH basique voisin de 9,5 ?",
            "options": [
              "Parce que le savon contient de l'acide sulfurique libre.",
              "Parce que l'ion carboxylate R-COO- est la base faible conjuguée d'un acide gras faible : il réagit avec l'eau pour libérer une petite quantité d'ions hydroxyde HO-.",
              "Parce que le sel de table utilisé est très acide.",
              "Parce que le glycérol est une base forte."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ion carboxylate s'hydrolyse selon R-COO- + H2O ⇌ R-COOH + HO-, ce qui confère à toute eau savonneuse un pH modérément alcalin."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l05_savons_p05_q1",
          "type": "mcq",
          "prompt": "Quel qualificatif physico-chimique désigne une molécule possédant simultanément une partie hydrophile et une partie lipophile ?",
          "options": [
            "Amphotère",
            "Amphiphile (ou tensioactif)",
            "Athermique",
            "Anhydre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Amphiphile (du grec amphi = les deux et philos = ami) qualifie une entité qui a une affinité conjointe pour l'eau et pour les lipides."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p05_q2",
          "type": "mcq",
          "prompt": "Comment les molécules de savon s'orientent-elles dans l'eau pour former une micelle sphérique emprisonnant une microgouttelette d'huile ?",
          "options": [
            "Les têtes hydrophiles plongent au cœur de l'huile et les queues restent dans l'eau.",
            "Les queues hydrocarbonées lipophiles s'enfoncent au centre dans la gouttelette d'huile, et les têtes polaires hydrophiles restent en surface tournées vers l'eau.",
            "Les molécules se disposent toutes parallèlement à la surface du verre.",
            "Les molécules expulsent les atomes d'oxygène sous forme gazeuse."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les queues apolaires se dissolvent dans la salissure grasse tandis que les têtes ioniques polaires restent solvatées par l'eau extérieure."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p05_q3",
          "type": "mcq",
          "prompt": "Pourquoi les gouttelettes de graisse entourées de savon ne se rassemblent-elles pas pour reformer une nappe d'huile surnageante dans l'eau de lavage ?",
          "options": [
            "Parce que l'eau les détruit par combustion à froid.",
            "Parce que les têtes -COO- externes de chaque micelle portent toutes des charges négatives identiques qui se repoussent électrostatiquement, maintenant la graisse en émulsion dispersée.",
            "Parce que le savon transforme la graisse en vapeur d'eau.",
            "Parce que les forces de gravité s'annulent."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La répulsion électrostatique entre charges négatives homologues portées par la couronne externe des micelles maintient la dispersion colloïdale."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p05_q4",
          "type": "mcq",
          "prompt": "Que se produit-il lorsqu'on frotte un pain de savon traditionnel de ménage dans une eau très riche en ions calcium Ca2+ (eau calcaire dure) ?",
          "options": [
            "Le savon mousse instantanément dix fois plus que dans l'eau douce.",
            "Il se forme un précipité blanc grisâtre de sel de calcium insoluble qui inactive le savon et l'empêche de mousser efficacement.",
            "Le savon se dissout en dégageant du gaz dihydrogène.",
            "L'eau devient subitement limpide et acide (pH < 2)."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les ions Ca2+ précipitent les ions carboxylates sous forme de dicarboxylate de calcium insoluble, détruisant le pouvoir détergent du savon."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p05_q5",
          "type": "mcq",
          "prompt": "Pourquoi les lessives modernes en poudre contiennent-elles des tensioactifs de synthèse (alkylsulfonates) plutôt que du savon traditionnel de Marseille ?",
          "options": [
            "Parce que le savon naturel est toxique pour les vêtements.",
            "Parce que les tensioactifs de synthèse restent parfaitement actifs et solubles même dans les eaux très dures riches en calcaire (Ca2+), sans former de dépôts insolubles.",
            "Parce que les détergents de synthèse sont fabriqués uniquement avec du sable.",
            "Parce que le savon ne nettoie pas à l'eau tiède."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les sels de calcium des sulfonates de synthèse sont solubles dans l'eau, ce qui permet aux poudres à laver modernes de mousser et nettoyer même en eau très calcaire."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p05_q6",
          "type": "mcq",
          "prompt": "Quel est l'effet de l'ajout de savon sur la tension superficielle de l'eau pure ?",
          "options": [
            "Il augmente la tension superficielle, empêchant l'eau de pénétrer le tissu.",
            "Il abaisse fortement la tension superficielle de l'eau, ce qui lui confère un excellent pouvoir mouillant permettant d'imbiber les fibres textiles en profondeur.",
            "Il n'a aucun effet sur les propriétés physiques du liquide.",
            "Il transforme l'eau en glace à température ambiante."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le savon est un tensioactif qui réduit la tension superficielle de l'eau, augmentant son étalement et son pouvoir mouillant."
        },
        {
          "id": "terminale_c_chimie_l05_savons_p05_q7",
          "type": "mcq",
          "prompt": "Pourquoi une eau savonneuse préparée avec du savon de Marseille authentique a-t-elle un pH basique voisin de 9,5 ?",
          "options": [
            "Parce que le savon contient de l'acide sulfurique libre.",
            "Parce que l'ion carboxylate R-COO- est la base faible conjuguée d'un acide gras faible : il réagit avec l'eau pour libérer une petite quantité d'ions hydroxyde HO-.",
            "Parce que le sel de table utilisé est très acide.",
            "Parce que le glycérol est une base forte."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ion carboxylate s'hydrolyse selon R-COO- + H2O ⇌ R-COOH + HO-, ce qui confère à toute eau savonneuse un pH modérément alcalin."
        }
      ]
    }
  ]
};
