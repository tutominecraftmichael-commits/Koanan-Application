import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : TCDE — Thème : Chimie Organique — Titre : Les Acides α-aminés
export const CHIMIE_TLE_CD_L08_ACIDES_ALPHA_AMINES: CurriculumChapter = {
  "id": "terminale_c_chimie_l08_acides_alpha_amines",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 8,
  "title": "Leçon 8 : Les Acides α-aminés et la liaison peptidique",
  "summary": "Structure générale et carbone asymétrique des acides α-aminés, nomenclature systématique IUPAC et codes usuels (Gly, Ala, Val), forme dipolaire zwitterionique (amphion) et comportement acido-basique selon le pH, formation et géométrie de la liaison peptidique, synthèse sélective d'un dipeptide (protection/activation), caractérisation par le test du Biuret, polypeptides et rôle biologique fondamental des protéines.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : TCDE – Chimie Organique – Les acides α-aminés)",
  "points": [
    {
      "id": "terminale_c_chimie_l08_acides_alpha_amines_p01",
      "order": 1,
      "title": "Structure moléculaire et nomenclature systématique des acides α-aminés",
      "summary": "Définition du carbone α (C-2), formule générale R-CH(NH2)-COOH, chiralité et énantiomérie (sauf pour la glycine), règles IUPAC 'acide 2-aminoalcanoïque' et abréviations internationales à 3 lettres.",
      "conceptExplanation": "Un acide α-aminé est un composé organique bifonctionnel qui comporte simultanément un groupe carboxyle (-COOH) et un groupe amine (-NH2) fixés sur le même atome de carbone, appelé carbone α (ou carbone numéro 2 selon la nomenclature officielle).\n\n1. Formule générale :\nR - CH(NH2) - COOH, où R- représente soit un atome d'hydrogène, soit une chaîne carbonée (radical alkyle ramifié, aromatique ou porteur d'une autre fonction appelée chaîne latérale ou résidu).\n\n2. Chiralité et carbone asymétrique :\nÀ l'exception notable de la glycine (acide aminoéthanoïque, pour laquelle R = H et le carbone α porte deux atomes d'hydrogène identiques), le carbone α est lié à 4 substituants différents (-COOH, -NH2, -R, -H) : c'est un carbone asymétrique C*. Tous les acides α-aminés naturels (sauf la glycine) sont donc des molécules chirales existant sous forme de deux énantiomères optiquement actifs (D et L). Dans les protéines vivantes, ils appartiennent quasi exclusivement à la série stéréochimique L.\n\n3. Nomenclature systématique IUPAC :\nLe nom systématique dérive de l'alcane correspondant à la chaîne carbonée la plus longue incluant le carbone du carboxyle numéroté 1 :\n'acide 2-amino + nom de l'acide carboxylique'.\nExemples officiels du programme :\n- Glycine (Gly) : H-CH(NH2)-COOH -> acide 2-aminoéthanoïque (non chiral).\n- Alanine (Ala) : CH3-CH(NH2)-COOH -> acide 2-aminopropanoïque.\n- Valine (Val) : (CH3)2CH-CH(NH2)-COOH -> acide 2-amino-3-méthylbutanoïque.",
      "keyRule": "Acide α-aminé = groupe -NH2 et groupe -COOH sur le même carbone C-2. Tous sont chiraux avec un carbone asymétrique C*, exceptée la glycine (R = H). Nom officiel : acide 2-aminoalcanoïque.",
      "formulas": [
        {
          "name": "Formule générale d'un acide α-aminé",
          "formula": "\\mathrm{R-CH(NH_2)-COOH}",
          "note": "Le carbone central porte à la fois -NH2, -COOH, -H et le résidu R"
        },
        {
          "name": "Formule brute générale (chaîne alkyle saturée)",
          "formula": "\\mathrm{C}_n\\mathrm{H}_{2n+1}\\mathrm{NO}_2",
          "note": "Exemple pour l'alanine n = 3 : C3H7NO2"
        }
      ],
      "workedExample": {
        "title": "Identification d'un acide α-aminé par analyse centésimale élémentaire",
        "statement": "L'analyse élémentaire d'un acide α-aminé A donne les pourcentages massiques : %C = 40,45 %, %H = 7,87 % et %N = 15,72 %. Sachant que sa molécule ne renferme que deux atomes d'oxygène, détermine sa formule brute, sa formule semi-développée et son nom systématique.",
        "methodSteps": [
          "Étape 1 : Calculer le pourcentage d'oxygène : %O = 100 - (40,45 + 7,87 + 15,72) = 35,96 %.",
          "Étape 2 : Masse molaire M avec 2 atomes d'oxygène (32 g/mol) : M = (2 × 16) / 0,3596 ≈ 89,0 g/mol.",
          "Étape 3 : Nombre d'atomes de chaque élément : x(C) = (89 × 0,4045) / 12 = 3 ; y(H) = (89 × 0,0787) / 1 = 7 ; z(N) = (89 × 0,1572) / 14 = 1.",
          "Étape 4 : Formule brute obtenue : C3H7NO2.",
          "Étape 5 : Structure α-aminée à 3 carbones : CH3-CH(NH2)-COOH."
        ],
        "conclusion": "Il s'agit de l'alanine, soit l'acide 2-aminopropanoïque."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Principaux acides α-aminés du programme et caractéristiques structurales",
        "tableData": {
          "headers": [
            "Nom courant",
            "Abréviation",
            "Formule semi-développée",
            "Nom systématique IUPAC",
            "Chiralité (C*)"
          ],
          "rows": [
            [
              "Glycine (Glycocolle)",
              "GLY",
              "H-CH(NH2)-COOH",
              "Acide 2-aminoéthanoïque",
              "Achirale (pas de C*)"
            ],
            [
              "Alanine",
              "ALA",
              "CH3-CH(NH2)-COOH",
              "Acide 2-aminopropanoïque",
              "Chirale (1 C* asymétrique)"
            ],
            [
              "Valine",
              "VAL",
              "CH3-CH(CH3)-CH(NH2)-COOH",
              "Acide 2-amino-3-méthylbutanoïque",
              "Chirale (1 C* asymétrique)"
            ],
            [
              "Leucine",
              "LEU",
              "(CH3)2CH-CH2-CH(NH2)-COOH",
              "Acide 2-amino-4-méthylpentanoïque",
              "Chirale (1 C* asymétrique)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition et structure générale d'un acide α-aminé",
          "stepTheme": "Structure",
          "stepBadge": "Carbone alpha",
          "paragraphText": "Un acide α-aminé est un composé bifonctionnel renfermant sur un même atome de carbone (le carbone α contigu au groupe carboxyle) une fonction acide carboxylique -COOH et une fonction amine primaire -NH2. Sa formule générale s'écrit R-CH(NH2)-COOH.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p01_q1",
            "type": "mcq",
            "prompt": "Parmi les formules suivantes, laquelle représente rigoureusement un acide α-aminé conforme au programme ?",
            "options": [
              "CH3-CH(NH2)-COOH",
              "H2N-CH2-CH2-COOH",
              "CH3-CO-NH-CH2-COOH",
              "H2N-CH2-CH2-CH2-COOH"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans CH3-CH(NH2)-COOH (alanine), le groupe amine -NH2 est fixé sur le carbone 2 (carbone α directement adjacent au carbone carboxylique). Dans H2N-CH2-CH2-COOH, il est sur le carbone β (acide β-aminé)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Chiralité et carbone asymétrique chez les acides α-aminés",
          "stepTheme": "Stéréochimie",
          "stepBadge": "Chiralité",
          "paragraphText": "Dès que le résidu R est différent de l'hydrogène, le carbone α porte quatre groupes distincts (-H, -R, -NH2, -COOH) : c'est un centre stéréogène (carbone asymétrique C*). La molécule est chirale et existe sous forme de deux énantiomères D et L. La glycine est l'unique acide α-aminé achiral.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p01_q2",
            "type": "mcq",
            "prompt": "Pourquoi la molécule de glycine (acide 2-aminoéthanoïque H2N-CH2-COOH) est-elle la seule parmi les acides α-aminés naturels à ne pas posséder d'activité optique ?",
            "options": [
              "Parce que son carbone central est lié à deux atomes d'hydrogène identiques : il n'est donc pas asymétrique et la molécule est achirale.",
              "Parce que sa chaîne latérale est trop longue pour dévier la lumière polarisée.",
              "Parce que le groupe amine y est désactivé par le carboxyle.",
              "Parce que la glycine n'existe qu'à l'état gazeux."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour être asymétrique, un atome de carbone tétraédrique doit porter 4 substituants différents. Chez la glycine, le carbone α porte deux atomes d'hydrogène (-H et -H) : la molécule possède un plan de symétrie et est achirale."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Règles de nomenclature systématique IUPAC",
          "stepTheme": "Nomenclature",
          "stepBadge": "Règles IUPAC",
          "paragraphText": "Pour nommer un acide α-aminé : 1° Repérer la chaîne carbonée la plus longue contenant le carbone du carboxyle (numéroté 1) ; 2° Numéroter les substituants ; 3° Faire précéder le nom de l'acide alcanoïque du préfixe '2-amino' et des ramifications alkyles classées par ordre alphabétique.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p01_q3",
            "type": "mcq",
            "prompt": "Quel est le nom systématique IUPAC de la valine de formule semi-développée (CH3)2CH-CH(NH2)-COOH ?",
            "options": [
              "Acide 2-amino-3-méthylbutanoïque",
              "Acide 3-méthyl-2-aminobutanoïque",
              "Acide 2-aminopentanoïque",
              "Acide 1-amino-2-méthylpropanoïque"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La chaîne la plus longue compte 4 atomes de carbone (butanoïque), avec le carbone 1 sur le carboxyle. En position 2 se trouve le groupe amino (-NH2) et en position 3 un groupe méthyle (-CH3), ordonnés par ordre alphabétique : acide 2-amino-3-méthylbutanoïque."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La série stéréochimique L des acides aminés naturels",
          "stepTheme": "Configuration spatiale",
          "stepBadge": "Série L",
          "paragraphText": "En représentation de Fischer (chaîne carbonée verticale avec le groupe -COOH en haut), si le groupe amine -NH2 se projette vers la gauche, l'acide aminé appartient à la série L ; s'il se projette à droite, il appartient à la série D. La quasi-totalité des acides aminés constitutifs des protéines du monde vivant sont de configuration L.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p01_q4",
            "type": "mcq",
            "prompt": "Dans la projection de Fischer d'un acide α-aminé naturel de la série L (le groupe -COOH étant placé au sommet), de quel côté de l'axe vertical se situe le groupe amine -NH2 ?",
            "options": [
              "À gauche de l'axe vertical",
              "À droite de l'axe vertical",
              "Au sommet à la place du groupe carboxyle",
              "En bas à la place du radical R"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par convention de Fischer (alignée sur le L-glycéraldéhyde), la lettre L (laevus) correspond à la position du groupe -NH2 situé à gauche de la chaîne principale verticale orientée avec C-1 (-COOH) en haut."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Formule brute générale des acides monoaminés monocarboxyliques",
          "stepTheme": "Formule brute",
          "stepBadge": "Stœchiométrie",
          "paragraphText": "Pour un acide α-aminé dont la chaîne latérale R est un radical alkyle saturé non ramifié ou ramifié (R = CnH2n+1), la formule brute générale est C_m H_{2m+1} N O2 avec m = n + 2. Sa masse molaire s'exprime par M = 14m + 47 g/mol.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p01_q5",
            "type": "mcq",
            "prompt": "Un acide α-aminé saturé possède une masse molaire moléculaire de M = 131 g/mol. Quel est le nombre total d'atomes de carbone m de sa molécule ?",
            "options": [
              "m = 6 carbones (ex : leucine ou isoleucine)",
              "m = 5 carbones (ex : valine)",
              "m = 4 carbones",
              "m = 3 carbones (alanine)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "M = 14m + 47 = 131 => 14m = 131 - 47 = 84 => m = 84 / 14 = 6. La molécule comporte 6 atomes de carbone (C6H13NO2), ce qui correspond à la leucine ou l'isoleucine."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Abréviations universelles à trois lettres",
          "stepTheme": "Symboles biochimiques",
          "stepBadge": "Codes à 3 lettres",
          "paragraphText": "En biochimie et biologie moléculaire, chaque acide α-aminé est symbolisé par un code international à 3 lettres dérivé de son nom usuel : Glycine -> Gly, Alanine -> Ala, Valine -> Val, Leucine -> Leu, Isoleucine -> Ile, Phénylalanine -> Phe.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p01_q6",
            "type": "mcq",
            "prompt": "Quelle abréviation conventionnelle désigne l'acide 2-aminopropanoïque dans la chaîne peptidique ?",
            "options": [
              "Ala",
              "Gly",
              "Val",
              "Pro"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'acide 2-aminopropanoïque est l'alanine, abrégée officiellement sous le code à trois lettres Ala."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Synthèse : la double identité fonctionnelle de l'acide α-aminé",
          "stepTheme": "Bilan structural",
          "stepBadge": "Bifonctionnel",
          "paragraphText": "La coexistence sur un même carbone du groupe acide carboxylique -COOH (caractère donneur de proton) et du groupe amine basique -NH2 (caractère accepteur de proton) confère aux acides α-aminés des propriétés chimiques intramoléculaires tout à fait uniques.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p01_q7",
            "type": "mcq",
            "prompt": "Quelle propriété physique remarquable découle de la double fonction acide/base des acides α-aminés à l'état solide pur ?",
            "options": [
              "Ils forment des réseaux cristallins ioniques à températures de fusion très élevées (> 200 °C) en raison de leur structure dipolaire zwitterionique.",
              "Ils sont tous gazeux à température ambiante.",
              "Ils s'évaporent instantanément sans chauffer car ce sont des liquides très volatils.",
              "Ils ne sont solubles que dans l'éther et insolubles dans l'eau."
            ],
            "correctAnswerIndex": 0,
            "explanation": "À l'état pur, l'attraction interne acide-base transforme chaque molécule en ion dipolaire (zwitterion). Les cristaux sont maintenus par de fortes forces électrostatiques inter-zwitterions comparables à un cristal ionique, d'où des températures de fusion très élevées (> 200 °C) et une excellente solubilité dans l'eau."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p01_q1",
          "type": "mcq",
          "prompt": "Parmi les formules suivantes, laquelle représente rigoureusement un acide α-aminé conforme au programme ?",
          "options": [
            "CH3-CH(NH2)-COOH",
            "H2N-CH2-CH2-COOH",
            "CH3-CO-NH-CH2-COOH",
            "H2N-CH2-CH2-CH2-COOH"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans CH3-CH(NH2)-COOH (alanine), le groupe amine -NH2 est fixé sur le carbone 2 (carbone α directement adjacent au carbone carboxylique). Dans H2N-CH2-CH2-COOH, il est sur le carbone β (acide β-aminé)."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p01_q2",
          "type": "mcq",
          "prompt": "Pourquoi la molécule de glycine (acide 2-aminoéthanoïque H2N-CH2-COOH) est-elle la seule parmi les acides α-aminés naturels à ne pas posséder d'activité optique ?",
          "options": [
            "Parce que son carbone central est lié à deux atomes d'hydrogène identiques : il n'est donc pas asymétrique et la molécule est achirale.",
            "Parce que sa chaîne latérale est trop longue pour dévier la lumière polarisée.",
            "Parce que le groupe amine y est désactivé par le carboxyle.",
            "Parce que la glycine n'existe qu'à l'état gazeux."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour être asymétrique, un atome de carbone tétraédrique doit porter 4 substituants différents. Chez la glycine, le carbone α porte deux atomes d'hydrogène (-H et -H) : la molécule possède un plan de symétrie et est achirale."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p01_q3",
          "type": "mcq",
          "prompt": "Quel est le nom systématique IUPAC de la valine de formule semi-développée (CH3)2CH-CH(NH2)-COOH ?",
          "options": [
            "Acide 2-amino-3-méthylbutanoïque",
            "Acide 3-méthyl-2-aminobutanoïque",
            "Acide 2-aminopentanoïque",
            "Acide 1-amino-2-méthylpropanoïque"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La chaîne la plus longue compte 4 atomes de carbone (butanoïque), avec le carbone 1 sur le carboxyle. En position 2 se trouve le groupe amino (-NH2) et en position 3 un groupe méthyle (-CH3), ordonnés par ordre alphabétique : acide 2-amino-3-méthylbutanoïque."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p01_q4",
          "type": "mcq",
          "prompt": "Dans la projection de Fischer d'un acide α-aminé naturel de la série L (le groupe -COOH étant placé au sommet), de quel côté de l'axe vertical se situe le groupe amine -NH2 ?",
          "options": [
            "À gauche de l'axe vertical",
            "À droite de l'axe vertical",
            "Au sommet à la place du groupe carboxyle",
            "En bas à la place du radical R"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par convention de Fischer (alignée sur le L-glycéraldéhyde), la lettre L (laevus) correspond à la position du groupe -NH2 situé à gauche de la chaîne principale verticale orientée avec C-1 (-COOH) en haut."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p01_q5",
          "type": "mcq",
          "prompt": "Un acide α-aminé saturé possède une masse molaire moléculaire de M = 131 g/mol. Quel est le nombre total d'atomes de carbone m de sa molécule ?",
          "options": [
            "m = 6 carbones (ex : leucine ou isoleucine)",
            "m = 5 carbones (ex : valine)",
            "m = 4 carbones",
            "m = 3 carbones (alanine)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "M = 14m + 47 = 131 => 14m = 131 - 47 = 84 => m = 84 / 14 = 6. La molécule comporte 6 atomes de carbone (C6H13NO2), ce qui correspond à la leucine ou l'isoleucine."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p01_q6",
          "type": "mcq",
          "prompt": "Quelle abréviation conventionnelle désigne l'acide 2-aminopropanoïque dans la chaîne peptidique ?",
          "options": [
            "Ala",
            "Gly",
            "Val",
            "Pro"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'acide 2-aminopropanoïque est l'alanine, abrégée officiellement sous le code à trois lettres Ala."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p01_q7",
          "type": "mcq",
          "prompt": "Quelle propriété physique remarquable découle de la double fonction acide/base des acides α-aminés à l'état solide pur ?",
          "options": [
            "Ils forment des réseaux cristallins ioniques à températures de fusion très élevées (> 200 °C) en raison de leur structure dipolaire zwitterionique.",
            "Ils sont tous gazeux à température ambiante.",
            "Ils s'évaporent instantanément sans chauffer car ce sont des liquides très volatils.",
            "Ils ne sont solubles que dans l'éther et insolubles dans l'eau."
          ],
          "correctAnswerIndex": 0,
          "explanation": "À l'état pur, l'attraction interne acide-base transforme chaque molécule en ion dipolaire (zwitterion). Les cristaux sont maintenus par de fortes forces électrostatiques inter-zwitterions comparables à un cristal ionique, d'où des températures de fusion très élevées (> 200 °C) et une excellente solubilité dans l'eau."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l08_acides_alpha_amines_p02",
      "order": 2,
      "title": "Propriétés acido-basiques, zwitterion et point isoélectrique",
      "summary": "Transfert intramoléculaire de proton conduisant à l'amphion (zwitterion +H3N-CH(R)-COO-), comportement amphotère, forme cationique en milieu très acide, forme anionique en milieu très basique, deux constantes d'acidité Ka1 et Ka2, et point isoélectrique pHi.",
      "conceptExplanation": "En solution aqueuse comme à l'état cristallin pur, le groupe carboxyle acide (-COOH) cède spontanément son proton H+ au groupe amine basique (-NH2) de la même molécule : c'est un transfert protonique intramoléculaire.\n\n1. L'ion dipolaire ou zwitterion (amphion) :\nIl en résulte une espèce électriquement neutre globalement mais porteuse de deux charges opposées distinctes : le groupe carboxylate -COO⁻ et le groupe ammonium -NH3⁺. Sa formule est : R-CH(NH3⁺)-COO⁻.\n\n2. Comportement acido-basique en fonction du pH :\nLe zwitterion est un ampholyte (espèce amphotère) capable d'agir comme acide ou comme base selon le pH du milieu :\n- En milieu très acide (pH faible, excès de H3O+) : le groupe -COO⁻ capte un proton. La molécule devient un CATION globalement chargé positivement (+1) : R-CH(NH3⁺)-COOH.\n- En milieu très basique (pH élevé, excès de OH⁻) : le groupe -NH3⁺ cède son proton à OH⁻. La molécule devient un ANION globalement chargé négativement (-1) : R-CH(NH2)-COO⁻.\n\n3. Les deux équilibres et le point isoélectrique pHi :\nOn a deux couples successifs :\n- Couple 1 : Cation / Zwitterion (constante Ka1, pKa1 de l'ordre de 2,3)\n- Couple 2 : Zwitterion / Anion (constante Ka2, pKa2 de l'ordre de 9,7)\nAu point isoélectrique pHi (ou pI), la concentration du zwitterion est maximale et la charge électrique moyenne est rigoureusement nulle : pHi = ½ (pKa1 + pKa2). À ce pH particulier, l'acide aminé ne migre dans aucun sens sous l'effet d'un champ électrique lors d'une électrophorèse.",
      "keyRule": "Milieu acide -> Cation (+H3N-R-COOH). Milieu neutre/pHi -> Zwitterion (+H3N-R-COO-). Milieu basique -> Anion (H2N-R-COO-). Le point isoélectrique vaut pHi = ½ (pKa1 + pKa2).",
      "formulas": [
        {
          "name": "Point isoélectrique (pHi)",
          "formula": "\\mathrm{pH}_i = \\frac{\\mathrm{p}K_{a1} + \\mathrm{p}K_{a2}}{2}",
          "note": "À pH = pHi, la charge globale nette est nulle"
        },
        {
          "name": "Équilibres successifs",
          "formula": "\\mathrm{A}^+ \\underset{+\\mathrm{H}^+}{\\overset{-\\mathrm{H}^+}{\\rightleftharpoons}} \\mathrm{A}^\\pm \\underset{+\\mathrm{H}^+}{\\overset{-\\mathrm{H}^+}{\\rightleftharpoons}} \\mathrm{A}^-",
          "note": "Ka1 régit A+/A± et Ka2 régit A±/A-"
        }
      ],
      "workedExample": {
        "title": "Calcul du pHi et prévision de migration à l'électrophorèse pour l'alanine",
        "statement": "L'alanine possède deux constantes d'acidité à 25 °C : pKa1 = 2,34 (déprotonation de -COOH) et pKa2 = 9,69 (déprotonation de -NH3⁺). Calcule son point isoélectrique pHi et indique vers quelle électrode migre l'alanine lors d'une électrophorèse réalisée à pH = 1,5 puis à pH = 11,0.",
        "methodSteps": [
          "Étape 1 : Calculer le point isoélectrique : pHi = (pKa1 + pKa2) / 2 = (2,34 + 9,69) / 2 = 12,03 / 2 = 6,02.",
          "Étape 2 : À pH = 1,5 : comme pH < pKa1 < pHi, le milieu est fortement acide. L'espèce prédominante est le cation CH3-CH(NH3⁺)-COOH portant une charge nette positive (+1). Il migre vers la cathode (électrode négative).",
          "Étape 3 : À pH = 11,0 : comme pH > pKa2 > pHi, le milieu est fortement basique. L'espèce prédominante est l'anion CH3-CH(NH2)-COO⁻ portant une charge nette négative (-1). Il migre vers l'anode (électrode positive)."
        ],
        "conclusion": "pHi = 6,02. À pH 1,5, l'alanine migre vers la cathode ; à pH 11,0, elle migre vers l'anode."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Les trois formes acido-basiques d'un acide α-aminé selon le pH",
        "tableData": {
          "headers": [
            "Domaine de pH",
            "Forme prédominante",
            "Structure chimique",
            "Charge nette",
            "Comportement en électrophorèse"
          ],
          "rows": [
            [
              "pH < pKa1 (milieu très acide)",
              "Cation",
              "R - CH(NH3⁺) - COOH",
              "+1",
              "Migration vers la CATHODE (-)"
            ],
            [
              "pKa1 < pH < pKa2 (au voisinage de pHi)",
              "Zwitterion (Amphion)",
              "R - CH(NH3⁺) - COO⁻",
              "0",
              "Aucune migration (immobile)"
            ],
            [
              "pH > pKa2 (milieu très basique)",
              "Anion",
              "R - CH(NH2) - COO⁻",
              "-1",
              "Migration vers l'ANODE (+)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'ion dipolaire ou zwitterion (amphion)",
          "stepTheme": "Structure dipolaire",
          "stepBadge": "Zwitterion",
          "paragraphText": "En solution aqueuse et à l'état pur, le groupe carboxyle -COOH cède son proton H+ au groupe amine -NH2 de la même molécule. L'espèce formée, appelée amphion ou zwitterion, porte une charge négative sur le groupe carboxylate -COO⁻ et une charge positive sur le groupe ammonium -NH3⁺ : R-CH(NH3⁺)-COO⁻.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p02_q1",
            "type": "mcq",
            "prompt": "Quelle est la formule chimique exacte de l'amphion (zwitterion) correspondant à la glycine ?",
            "options": [
              "+H3N - CH2 - COO⁻",
              "H2N - CH2 - COOH",
              "+H3N - CH2 - COOH",
              "H2N - CH2 - COO⁻"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'amphion résulte du transfert du proton de -COOH vers -NH2 : il porte simultanément la fonction ammonium +H3N- et la fonction carboxylate -COO⁻, d'où +H3N-CH2-COO⁻."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Comportement en milieu fortement acide",
          "stepTheme": "Milieu acide",
          "stepBadge": "Forme cationique",
          "paragraphText": "En milieu très acide (pH << pKa1), la concentration élevée en ions oxonium H3O+ force le groupe carboxylate à capter un proton : -COO⁻ + H3O+ -> -COOH + H2O. L'acide aminé existe alors majoritairement sous forme d'un cation monovalent : R-CH(NH3⁺)-COOH.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p02_q2",
            "type": "mcq",
            "prompt": "Dans une solution aqueuse chlorhydrique de pH = 1,0, sous quelle forme prédominante se trouve l'alanine (pKa1 = 2,34) ?",
            "options": [
              "Sous forme cationique CH3-CH(NH3⁺)-COOH",
              "Sous forme anionique CH3-CH(NH2)-COO⁻",
              "Sous forme d'amphion dipolaire neutre",
              "Sous forme de précipité d'amide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À pH = 1,0, le pH est inférieur au pKa1 (2,34) du groupe carboxylique : le groupe carboxyle est protoné (-COOH) tandis que le groupe amine reste protoné (-NH3⁺). L'alanine est sous forme cationique (+1)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Comportement en milieu fortement basique",
          "stepTheme": "Milieu basique",
          "stepBadge": "Forme anionique",
          "paragraphText": "En milieu très basique (pH >> pKa2), les ions hydroxyde OH⁻ arrachent un proton au groupe ammonium : -NH3⁺ + OH⁻ -> -NH2 + H2O. L'acide aminé existe alors majoritairement sous forme d'un anion monovalent : R-CH(NH2)-COO⁻.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p02_q3",
            "type": "mcq",
            "prompt": "Dans une solution de soude NaOH à pH = 12,0, sous quelle forme chimique se trouve la valine (pKa2 = 9,7) ?",
            "options": [
              "Sous forme anionique (CH3)2CH-CH(NH2)-COO⁻",
              "Sous forme cationique (CH3)2CH-CH(NH3⁺)-COOH",
              "Sous forme de zwitterion dipolaire",
              "Sous forme d'ester d'éthyle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À pH = 12,0 (pH > pKa2 = 9,7), le groupe ammonium a cédé son proton : il est sous forme basique -NH2, et le groupe carboxyle sous forme -COO⁻. L'espèce dominante est donc l'anion porteur d'une charge globale négative (-1)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Définition et calcul du point isoélectrique pHi",
          "stepTheme": "Point isoélectrique",
          "stepBadge": "Formule pHi",
          "paragraphText": "Le point isoélectrique pHi est la valeur du pH pour laquelle la concentration en zwitterion est maximale et où la charge électrique globale nette de l'acide aminé est strictement nulle. Il est donné par la moyenne arithmétique des deux pKa : pHi = ½ (pKa1 + pKa2).",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p02_q4",
            "type": "mcq",
            "prompt": "La glycine possède pKa1 = 2,35 et pKa2 = 9,78. Quelle est la valeur de son point isoélectrique pHi ?",
            "options": [
              "pHi = 6,06",
              "pHi = 7,00",
              "pHi = 12,13",
              "pHi = 3,71"
            ],
            "correctAnswerIndex": 0,
            "explanation": "pHi = (pKa1 + pKa2) / 2 = (2,35 + 9,78) / 2 = 12,13 / 2 = 6,065 ≈ 6,06."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Principe de la séparation par électrophorèse",
          "stepTheme": "Électrophorèse",
          "stepBadge": "Séparation d'acides aminés",
          "paragraphText": "L'électrophorèse est une technique séparative fondée sur la migration différentielle d'espèces chargées sous l'action d'un champ électrique continu : à un pH donné, les cations migrent vers la cathode (-), les anions vers l'anode (+), et les espèces au point isoélectrique (charge nette nulle) restent immobiles.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p02_q5",
            "type": "mcq",
            "prompt": "On soumet un mélange de glycine (pHi = 6,0) et d'acide aspartique (acide aminé dicarboxylique de pHi = 2,8) à une électrophorèse sur papier tamponné à pH = 6,0. Que constate-t-on ?",
            "options": [
              "La glycine reste immobile au dépôt (pH = pHi) tandis que l'acide aspartique (chargé négativement car pH > pHi) migre vers l'anode (+).",
              "Les deux acides aminés migrent ensemble vers la cathode.",
              "La glycine migre vers l'anode et l'acide aspartique vers la cathode.",
              "Aucun acide aminé ne bouge."
            ],
            "correctAnswerIndex": 0,
            "explanation": "À pH = 6,0 = pHi(glycine), la glycine a une charge nette nulle : elle ne migre pas. En revanche, pour l'acide aspartique, pH = 6,0 > pHi (2,8) : il est sous forme anionique chargée négativement et migre vers le pôle positif (anode)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Diagramme de prédominance des espèces",
          "stepTheme": "Spéciation",
          "stepBadge": "Axes de pH",
          "paragraphText": "Sur l'axe des pH, on distingue trois zones de prédominance délimitées par les deux valeurs pKa1 et pKa2 : pour pH < pKa1, prédominance du cation ; pour pKa1 < pH < pKa2, prédominance du zwitterion ; pour pH > pKa2, prédominance de l'anion.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p02_q6",
            "type": "mcq",
            "prompt": "Pour un acide aminé de pKa1 = 2,2 et pKa2 = 9,6, quelle espèce chimique est majoritaire dans le suc gastrique stomacal à pH = 1,5 ?",
            "options": [
              "Le cation R-CH(NH3⁺)-COOH",
              "Le zwitterion R-CH(NH3⁺)-COO⁻",
              "L'anion R-CH(NH2)-COO⁻",
              "Le dipeptide condensé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À pH = 1,5, on a pH < pKa1 (2,2) : la solution est suffisamment acide pour protoner à la fois le carboxyle et l'amine, rendant le cation largement majoritaire."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège fréquent : ne pas confondre zwitterion et molécule neutre non ionisée",
          "stepTheme": "Mise en garde",
          "stepBadge": "Formule réelle",
          "paragraphText": "Écrire la formule non ionisée R-CH(NH2)-COOH pour représenter un acide aminé en solution aqueuse à pH neutre est une simplification abusive : en réalité, la forme non ionisée n'existe quasiment pas (moins de 1 molécule sur 100 000), la quasi-totalité étant sous forme de zwitterion +H3N-CH(R)-COO⁻.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p02_q7",
            "type": "mcq",
            "prompt": "Pourquoi un acide α-aminé solide pur ne possède-t-il pas les propriétés spectrales infrarouges typiques d'une amine libre (-NH2) et d'un acide carboxylique libre (-COOH) ?",
            "options": [
              "Parce qu'à l'état cristallin, il existe exclusivement sous forme d'amphion avec les bandes de vibration caractéristiques de -COO⁻ et de -NH3⁺.",
              "Parce que la liaison covalente C-C s'est rompue.",
              "Parce que les rayons infrarouges détruisent les acides aminés.",
              "Parce que l'azote a perdu tous ses protons."
            ],
            "correctAnswerIndex": 0,
            "explanation": "À l'état cristallin, les acides α-aminés sont sous forme zwitterionique : la spectroscopie IR ne détecte pas de vibration d'élongation C=O de -COOH libre ni de N-H d'amine libre, mais les bandes caractéristiques de l'ion carboxylate (-COO⁻) et de l'ion ammonium (-NH3⁺)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p02_q1",
          "type": "mcq",
          "prompt": "Quelle est la formule chimique exacte de l'amphion (zwitterion) correspondant à la glycine ?",
          "options": [
            "+H3N - CH2 - COO⁻",
            "H2N - CH2 - COOH",
            "+H3N - CH2 - COOH",
            "H2N - CH2 - COO⁻"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'amphion résulte du transfert du proton de -COOH vers -NH2 : il porte simultanément la fonction ammonium +H3N- et la fonction carboxylate -COO⁻, d'où +H3N-CH2-COO⁻."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p02_q2",
          "type": "mcq",
          "prompt": "Dans une solution aqueuse chlorhydrique de pH = 1,0, sous quelle forme prédominante se trouve l'alanine (pKa1 = 2,34) ?",
          "options": [
            "Sous forme cationique CH3-CH(NH3⁺)-COOH",
            "Sous forme anionique CH3-CH(NH2)-COO⁻",
            "Sous forme d'amphion dipolaire neutre",
            "Sous forme de précipité d'amide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À pH = 1,0, le pH est inférieur au pKa1 (2,34) du groupe carboxylique : le groupe carboxyle est protoné (-COOH) tandis que le groupe amine reste protoné (-NH3⁺). L'alanine est sous forme cationique (+1)."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p02_q3",
          "type": "mcq",
          "prompt": "Dans une solution de soude NaOH à pH = 12,0, sous quelle forme chimique se trouve la valine (pKa2 = 9,7) ?",
          "options": [
            "Sous forme anionique (CH3)2CH-CH(NH2)-COO⁻",
            "Sous forme cationique (CH3)2CH-CH(NH3⁺)-COOH",
            "Sous forme de zwitterion dipolaire",
            "Sous forme d'ester d'éthyle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À pH = 12,0 (pH > pKa2 = 9,7), le groupe ammonium a cédé son proton : il est sous forme basique -NH2, et le groupe carboxyle sous forme -COO⁻. L'espèce dominante est donc l'anion porteur d'une charge globale négative (-1)."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p02_q4",
          "type": "mcq",
          "prompt": "La glycine possède pKa1 = 2,35 et pKa2 = 9,78. Quelle est la valeur de son point isoélectrique pHi ?",
          "options": [
            "pHi = 6,06",
            "pHi = 7,00",
            "pHi = 12,13",
            "pHi = 3,71"
          ],
          "correctAnswerIndex": 0,
          "explanation": "pHi = (pKa1 + pKa2) / 2 = (2,35 + 9,78) / 2 = 12,13 / 2 = 6,065 ≈ 6,06."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p02_q5",
          "type": "mcq",
          "prompt": "On soumet un mélange de glycine (pHi = 6,0) et d'acide aspartique (acide aminé dicarboxylique de pHi = 2,8) à une électrophorèse sur papier tamponné à pH = 6,0. Que constate-t-on ?",
          "options": [
            "La glycine reste immobile au dépôt (pH = pHi) tandis que l'acide aspartique (chargé négativement car pH > pHi) migre vers l'anode (+).",
            "Les deux acides aminés migrent ensemble vers la cathode.",
            "La glycine migre vers l'anode et l'acide aspartique vers la cathode.",
            "Aucun acide aminé ne bouge."
          ],
          "correctAnswerIndex": 0,
          "explanation": "À pH = 6,0 = pHi(glycine), la glycine a une charge nette nulle : elle ne migre pas. En revanche, pour l'acide aspartique, pH = 6,0 > pHi (2,8) : il est sous forme anionique chargée négativement et migre vers le pôle positif (anode)."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p02_q6",
          "type": "mcq",
          "prompt": "Pour un acide aminé de pKa1 = 2,2 et pKa2 = 9,6, quelle espèce chimique est majoritaire dans le suc gastrique stomacal à pH = 1,5 ?",
          "options": [
            "Le cation R-CH(NH3⁺)-COOH",
            "Le zwitterion R-CH(NH3⁺)-COO⁻",
            "L'anion R-CH(NH2)-COO⁻",
            "Le dipeptide condensé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À pH = 1,5, on a pH < pKa1 (2,2) : la solution est suffisamment acide pour protoner à la fois le carboxyle et l'amine, rendant le cation largement majoritaire."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p02_q7",
          "type": "mcq",
          "prompt": "Pourquoi un acide α-aminé solide pur ne possède-t-il pas les propriétés spectrales infrarouges typiques d'une amine libre (-NH2) et d'un acide carboxylique libre (-COOH) ?",
          "options": [
            "Parce qu'à l'état cristallin, il existe exclusivement sous forme d'amphion avec les bandes de vibration caractéristiques de -COO⁻ et de -NH3⁺.",
            "Parce que la liaison covalente C-C s'est rompue.",
            "Parce que les rayons infrarouges détruisent les acides aminés.",
            "Parce que l'azote a perdu tous ses protons."
          ],
          "correctAnswerIndex": 0,
          "explanation": "À l'état cristallin, les acides α-aminés sont sous forme zwitterionique : la spectroscopie IR ne détecte pas de vibration d'élongation C=O de -COOH libre ni de N-H d'amine libre, mais les bandes caractéristiques de l'ion carboxylate (-COO⁻) et de l'ion ammonium (-NH3⁺)."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l08_acides_alpha_amines_p03",
      "order": 3,
      "title": "La liaison peptidique, formation de dipeptides et convention N/C-terminal",
      "summary": "Réaction de condensation entre le groupe -COOH d'un acide α-aminé et le groupe -NH2 d'un second avec élimination d'eau, nature amide plane de la liaison peptidique (-CO-NH-), orientation N-terminale et C-terminale, et isomérie de séquence (Ala-Gly ≠ Gly-Ala).",
      "conceptExplanation": "1. Définition et équation de formation d'un dipeptide :\nLa liaison peptidique est une liaison covalente amide formée par la réaction de condensation entre le groupe carboxyle (-COOH) d'un premier acide α-aminé A1 et le groupe amine (-NH2) d'un deuxième acide α-aminé A2, avec élimination d'une molécule d'eau :\nR1-CH(NH2)-COOH + H-NH-CH(R2)-COOH -> R1-CH(NH2)-CO-NH-CH(R2)-COOH + H2O.\nLe groupe fonctionnel obtenu -CO-NH- est appelé liaison peptidique.\n\n2. Polarité de la chaîne peptidique : extrémités N-terminale et C-terminale :\nLe dipeptide formé conserve à une extrémité un groupe amine libre (-NH2), appelée extrémité N-terminale, et à l'autre extrémité un groupe carboxyle libre (-COOH), appelée extrémité C-terminale.\nPar convention internationale, on écrit toujours la chaîne peptidique de gauche à droite en commençant par le résidu N-terminal et en terminant par le résidu C-terminal :\nH2N - [résidu 1] - CO - NH - [résidu 2] - COOH.\n\n3. Isomérie de constitution de séquence :\nLorsqu'on fait réagir deux acides α-aminés différents A et B sans précaution, la condensation peut former deux dipeptides isomères distincts :\n- A-B : A est N-terminal et B est C-terminal.\n- B-A : B est N-terminal et A est C-terminal.\nCes deux molécules possèdent la même formule brute mais des structures et des propriétés biologiques totalement différentes. Par exemple, Ala-Gly ≠ Gly-Ala.",
      "keyRule": "Liaison peptidique = fonction amide -CO-NH-. Un dipeptide s'écrit de gauche à droite : N-terminal (amine libre à gauche) vers C-terminal (carboxyle libre à droite). Deux acides aminés différents A et B peuvent former 4 dipeptides (A-A, B-B, A-B, B-A).",
      "formulas": [
        {
          "name": "Formation de la liaison peptidique",
          "formula": "\\mathrm{-COOH} + \\mathrm{H_2N-} \\longrightarrow \\mathrm{-CO-NH-} + \\mathrm{H_2O}",
          "note": "Réaction de condensation avec élimination d'eau"
        },
        {
          "name": "Masse molaire d'un dipeptide formé de A et B",
          "formula": "M(\\text{dipeptide}) = M(A) + M(B) - M(\\mathrm{H_2O}) = M(A) + M(B) - 18",
          "note": "Soustraction impérative des 18 g/mol de la molécule d'eau éliminée"
        }
      ],
      "workedExample": {
        "title": "Calcul de masse molaire et formules semi-développées des dipeptides Ala-Gly et Gly-Ala",
        "statement": "On donne M(Glycine) = 75 g/mol et M(Alanine) = 89 g/mol. Calcule la masse molaire des dipeptides formés par ces deux acides aminés, et écris la formule semi-développée du dipeptide Alanylglycine (Ala-Gly).",
        "methodSteps": [
          "Étape 1 : Calcul de la masse molaire du dipeptide : M = M(Ala) + M(Gly) - M(H2O) = 89 + 75 - 18 = 146 g/mol.",
          "Étape 2 : Identifier les extrémités pour Ala-Gly : Ala est l'acide N-terminal (son -NH2 reste libre) et Gly est l'acide C-terminal (son -COOH reste libre).",
          "Étape 3 : Écrire la chaîne de gauche à droite : NH2-CH(CH3)-CO- (résidu alanyle) lié à -NH-CH2-COOH (résidu glycine).",
          "Étape 4 : Formule complète : H2N - CH(CH3) - CO - NH - CH2 - COOH."
        ],
        "conclusion": "La masse molaire vaut 146 g/mol et la formule semi-développée d'Ala-Gly met en évidence la liaison centrale -CO-NH-."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Structure détaillée d'un dipeptide et repérage des extrémités",
        "tableData": {
          "headers": [
            "Partie de la molécule",
            "Groupe chimique",
            "Position conventionnelle",
            "Rôle fonctionnel"
          ],
          "rows": [
            [
              "Extrémité N-terminale",
              "Amine libre (-NH2)",
              "À gauche de la formule",
              "Peut subir une nouvelle condensation avec un carboxyle"
            ],
            [
              "Cœur peptidique",
              "Liaison amide (-CO-NH-)",
              "Au centre de la molécule",
              "Liaison rigide et plane stabilisant la chaîne"
            ],
            [
              "Extrémité C-terminale",
              "Carboxyle libre (-COOH)",
              "À droite de la formule",
              "Peut subir une nouvelle condensation avec une amine"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Nature chimique de la liaison peptidique",
          "stepTheme": "Liaison peptidique",
          "stepBadge": "Liaison amide",
          "paragraphText": "La liaison peptidique est une liaison covalente de type amide reliant le carbone carbonyle d'un résidu d'acide aminé à l'atome d'azote du résidu suivant : -CO-NH-. Elle résulte de l'élimination formelle d'une molécule d'eau entre un groupe -COOH et un groupe -NH2.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p03_q1",
            "type": "mcq",
            "prompt": "À quelle famille fonctionnelle de la chimie organique appartient rigoureusement la liaison peptidique ?",
            "options": [
              "Aux amides",
              "Aux esters",
              "Aux amines secondaires",
              "Aux anhydrides d'acide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La liaison -CO-NH- résulte de la réaction entre un acide carboxylique et une amine : c'est la fonction amide."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Planéité et géométrie de la liaison peptidique",
          "stepTheme": "Géométrie moléculaire",
          "stepBadge": "Caractère partiel double liaison",
          "paragraphText": "En raison de la délocalisation du doublet non liant de l'azote vers le carbonyle (mésomérie O=C-NH <-> ⁻O-C=NH⁺), la liaison C-N possède un caractère partiel de double liaison (environ 40 %). Il en découle une absence de libre rotation et une géométrie rigoureusement plane des 6 atomes C_α, C, O, N, H, C_α'.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p03_q2",
            "type": "mcq",
            "prompt": "Pourquoi la liaison C-N de la liaison peptidique ne présente-t-elle pas de libre rotation à température ordinaire ?",
            "options": [
              "Parce que la mésomérie confère à la liaison C-N un caractère partiel de double liaison imposant une géométrie plane rigide.",
              "Parce que les atomes d'oxygène sont trop volumineux.",
              "Parce qu'elle est entourée d'une cage d'eau solide.",
              "Parce qu'elle est purement ionique."
            ],
            "correctAnswerIndex": 0,
            "explanation": "La mésomérie entre le carbonyle et le doublet non liant de l'azote bloque la rotation autour de la liaison C-N, conférant aux 6 atomes du squelette peptidique une conformation plane très stable (habituellement trans)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Convention d'écriture N-terminal et C-terminal",
          "stepTheme": "Convention d'écriture",
          "stepBadge": "Sens N -> C",
          "paragraphText": "Par convention internationale de l'IUPAC, une chaîne peptidique s'écrit toujours de gauche à droite, en débutant par l'acide aminé N-terminal (porteur du -NH2 libre à gauche) et en achevant par l'acide aminé C-terminal (porteur du -COOH libre à droite).",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p03_q3",
            "type": "mcq",
            "prompt": "Dans le dipeptide Val-Ala, quel est l'acide aminé N-terminal ?",
            "options": [
              "La valine (Val)",
              "L'alanine (Ala)",
              "Les deux simultanément",
              "Aucun car le dipeptide est cyclique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par convention, le premier acide aminé mentionné à gauche (ici la valine) est l'acide aminé N-terminal (fonction amine libre)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Non-équivalence de séquence : Val-Ala ≠ Ala-Val",
          "stepTheme": "Isomérie de séquence",
          "stepBadge": "Dipeptides distincts",
          "paragraphText": "Deux acides aminés différents A et B forment deux dipeptides isomères de constitution distincts selon l'ordre d'enchaînement : dans A-B, A fournit le carboxyle et B l'amine ; dans B-A, c'est l'inverse. Leurs formules semi-développées et leurs fonctions chimiques terminales sont permutées.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p03_q4",
            "type": "mcq",
            "prompt": "Si l'on fait réagir de la glycine et de l'alanine sans aucune protection des fonctions, combien de dipeptides différents peut-on obtenir théoriquement dans le mélange réactionnel ?",
            "options": [
              "4 dipeptides (Gly-Gly, Ala-Ala, Gly-Ala, Ala-Gly)",
              "2 dipeptides uniquement",
              "1 seul dipeptide",
              "8 dipeptides"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque acide aminé peut réagir avec lui-même ou avec l'autre : Gly-Gly, Ala-Ala, Gly-Ala et Ala-Gly, soit 4 dipeptides différents."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Calcul de la masse molaire d'un dipeptide",
          "stepTheme": "Masse molaire",
          "stepBadge": "Élimination de H2O",
          "paragraphText": "Lors de la synthèse d'un dipeptide à partir de deux acides aminés de masses molaires M1 et M2, il y a élimination d'une mole d'eau (M = 18 g/mol). La masse molaire du dipeptide vaut donc impérativement M = M1 + M2 - 18.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p03_q5",
            "type": "mcq",
            "prompt": "La condensation de la valine (M = 117 g/mol) avec un acide aminé A inconnu conduit à un dipeptide de masse molaire M = 188 g/mol. Quelle est la masse molaire M(A) de l'acide aminé A ?",
            "options": [
              "89 g/mol (il s'agit de l'alanine)",
              "71 g/mol",
              "105 g/mol",
              "188 g/mol"
            ],
            "correctAnswerIndex": 0,
            "explanation": "M(dipeptide) = M(Val) + M(A) - 18 => 188 = 117 + M(A) - 18 = 99 + M(A) => M(A) = 188 - 99 = 89 g/mol. L'acide aminé A est l'alanine (C3H7NO2)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Hydrolyse de la liaison peptidique",
          "stepTheme": "Rupture de la liaison",
          "stepBadge": "Hydrolyse",
          "paragraphText": "La réaction inverse de la condensation est l'hydrolyse de la liaison peptidique : en milieu acide concentré chaud (HCl 6 mol/L à 110 °C pendant 24 h) ou sous l'action d'enzymes protéolytiques (peptidases), l'eau coupe la liaison -CO-NH- pour régénérer les acides α-aminés de départ.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p03_q6",
            "type": "mcq",
            "prompt": "Quels sont les produits obtenus lors de l'hydrolyse complète du dipeptide Gly-Val ?",
            "options": [
              "Une mole de glycine et une mole de valine",
              "De l'ammoniac et du dioxyde de carbone",
              "Deux moles d'alanine",
              "Un polymère de nylon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'hydrolyse scinde la liaison peptidique par réincorporation d'une molécule d'eau, restituant exactement les deux acides aminés constitutifs : la glycine et la valine."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Synthèse : la liaison peptidique, brique du vivant",
          "stepTheme": "Rôle architectural",
          "stepBadge": "Polymérisation",
          "paragraphText": "En répétant la condensation peptidique n fois, on forme des tripeptides (2 liaisons peptidiques), des tétrapeptides (3 liaisons peptidiques), puis des polypeptides et des protéines comportant des centaines d'acides aminés reliés par ces liaisons amides planes.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p03_q7",
            "type": "mcq",
            "prompt": "Combien de liaisons peptidiques renferme un pentapeptide linéaire formé de 5 résidus d'acides aminés ?",
            "options": [
              "4 liaisons peptidiques",
              "5 liaisons peptidiques",
              "3 liaisons peptidiques",
              "10 liaisons peptidiques"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans un peptide linéaire non ramifié constitué de N résidus, le nombre de liaisons peptidiques reliant les monomères est égal à N - 1. Pour N = 5 (pentapeptide), on compte 4 liaisons peptidiques."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p03_q1",
          "type": "mcq",
          "prompt": "À quelle famille fonctionnelle de la chimie organique appartient rigoureusement la liaison peptidique ?",
          "options": [
            "Aux amides",
            "Aux esters",
            "Aux amines secondaires",
            "Aux anhydrides d'acide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La liaison -CO-NH- résulte de la réaction entre un acide carboxylique et une amine : c'est la fonction amide."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p03_q2",
          "type": "mcq",
          "prompt": "Pourquoi la liaison C-N de la liaison peptidique ne présente-t-elle pas de libre rotation à température ordinaire ?",
          "options": [
            "Parce que la mésomérie confère à la liaison C-N un caractère partiel de double liaison imposant une géométrie plane rigide.",
            "Parce que les atomes d'oxygène sont trop volumineux.",
            "Parce qu'elle est entourée d'une cage d'eau solide.",
            "Parce qu'elle est purement ionique."
          ],
          "correctAnswerIndex": 0,
          "explanation": "La mésomérie entre le carbonyle et le doublet non liant de l'azote bloque la rotation autour de la liaison C-N, conférant aux 6 atomes du squelette peptidique une conformation plane très stable (habituellement trans)."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p03_q3",
          "type": "mcq",
          "prompt": "Dans le dipeptide Val-Ala, quel est l'acide aminé N-terminal ?",
          "options": [
            "La valine (Val)",
            "L'alanine (Ala)",
            "Les deux simultanément",
            "Aucun car le dipeptide est cyclique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par convention, le premier acide aminé mentionné à gauche (ici la valine) est l'acide aminé N-terminal (fonction amine libre)."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p03_q4",
          "type": "mcq",
          "prompt": "Si l'on fait réagir de la glycine et de l'alanine sans aucune protection des fonctions, combien de dipeptides différents peut-on obtenir théoriquement dans le mélange réactionnel ?",
          "options": [
            "4 dipeptides (Gly-Gly, Ala-Ala, Gly-Ala, Ala-Gly)",
            "2 dipeptides uniquement",
            "1 seul dipeptide",
            "8 dipeptides"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque acide aminé peut réagir avec lui-même ou avec l'autre : Gly-Gly, Ala-Ala, Gly-Ala et Ala-Gly, soit 4 dipeptides différents."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p03_q5",
          "type": "mcq",
          "prompt": "La condensation de la valine (M = 117 g/mol) avec un acide aminé A inconnu conduit à un dipeptide de masse molaire M = 188 g/mol. Quelle est la masse molaire M(A) de l'acide aminé A ?",
          "options": [
            "89 g/mol (il s'agit de l'alanine)",
            "71 g/mol",
            "105 g/mol",
            "188 g/mol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "M(dipeptide) = M(Val) + M(A) - 18 => 188 = 117 + M(A) - 18 = 99 + M(A) => M(A) = 188 - 99 = 89 g/mol. L'acide aminé A est l'alanine (C3H7NO2)."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p03_q6",
          "type": "mcq",
          "prompt": "Quels sont les produits obtenus lors de l'hydrolyse complète du dipeptide Gly-Val ?",
          "options": [
            "Une mole de glycine et une mole de valine",
            "De l'ammoniac et du dioxyde de carbone",
            "Deux moles d'alanine",
            "Un polymère de nylon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'hydrolyse scinde la liaison peptidique par réincorporation d'une molécule d'eau, restituant exactement les deux acides aminés constitutifs : la glycine et la valine."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p03_q7",
          "type": "mcq",
          "prompt": "Combien de liaisons peptidiques renferme un pentapeptide linéaire formé de 5 résidus d'acides aminés ?",
          "options": [
            "4 liaisons peptidiques",
            "5 liaisons peptidiques",
            "3 liaisons peptidiques",
            "10 liaisons peptidiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans un peptide linéaire non ramifié constitué de N résidus, le nombre de liaisons peptidiques reliant les monomères est égal à N - 1. Pour N = 5 (pentapeptide), on compte 4 liaisons peptidiques."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l08_acides_alpha_amines_p04",
      "order": 4,
      "title": "Synthèse exclusive d'un dipeptide : blocage et activation",
      "summary": "Problématique du mélange statistique de 4 dipeptides, stratégie de synthèse raisonnée en 4 étapes : protection (blocage) des fonctions non réactives, activation de la fonction carboxyle, couplage peptidique et déprotection (déblocage) sélective.",
      "conceptExplanation": "Si l'on met en présence deux acides α-aminés différents A1 et A2 en vue d'obtenir un dipeptide déterminé (par exemple A1-A2), la réaction spontanée produit un mélange anarchique de 4 dipeptides : A1-A1, A2-A2, A1-A2 et A2-A1. Pour obtenir EXCLUSIVEMENT le dipeptide cible A1-A2, le chimiste doit mettre en œuvre une stratégie de synthèse orientée en 4 étapes clés :\n\n1. Étape 1 : Blocage (ou protection) sélectif des fonctions qui ne doivent pas réagir :\n- On bloque la fonction amine (-NH2) de l'acide A1 (souvent par acylation ou groupement Boc/Fmoc) pour qu'il ne puisse agir qu'avec son carboxyle.\n- On bloque la fonction carboxyle (-COOH) de l'acide A2 (souvent par estérification en ester méthylique ou éthylique) pour qu'il ne puisse agir qu'avec son amine.\n\n2. Étape 2 : Activation de la fonction carboxyle de A1 :\nLe groupe carboxyle -COOH libre de A1 réagit très lentement à froid avec une amine. On le transforme en un dérivé d'acide beaucoup plus réactif (chlorure d'acyle ou anhydride d'acide, ou utilisation d'un réactif de couplage comme le DCC).\n\n3. Étape 3 : Réaction de couplage peptidique :\nOn mélange le dérivé activé de A1 protégé et l'acide A2 protégé. La réaction est immédiate, totale et n'engendre qu'un seul dipeptide protégé : P_protégé.\n\n4. Étape 4 : Déblocage (déprotection) sélectif :\nOn élimine les groupements protecteurs sur l'amine de A1 et sur le carboxyle de A2 par des réactions chimiques douces (hydrolyse ménagée) sans rompre la liaison peptidique nouvellement formée.",
      "keyRule": "Pour synthétiser exclusivement A1-A2 : bloquer -NH2 de A1, bloquer -COOH de A2, activer -COOH de A1, faire le couplage peptidique, puis débloquer les deux fonctions protégées.",
      "formulas": [
        {
          "name": "Stratégie de couplage orienté",
          "formula": "\\mathrm{Bloc-NH-CH(R_1)-CO-X} + \\mathrm{H_2N-CH(R_2)-CO-O-R'} \\longrightarrow \\mathrm{Dipeptide\\ protégé}",
          "note": "X = activateur (ex: Cl), R' = groupe protecteur ester"
        }
      ],
      "workedExample": {
        "title": "Protocole de synthèse sélective du dipeptide Alanylglycine (Ala-Gly)",
        "statement": "On désire synthétiser exclusivement le dipeptide Ala-Gly au laboratoire à partir d'alanine (Ala) et de glycine (Gly). Décris précisément les étapes de protection et d'activation nécessaires.",
        "methodSteps": [
          "Étape 1 : Analyser la cible Ala-Gly : l'alanine doit être N-terminale (fournir son -COOH) et la glycine C-terminale (fournir son -NH2).",
          "Étape 2 : Blocage des fonctions passives : bloquer la fonction amine (-NH2) de l'alanine, et bloquer la fonction acide (-COOH) de la glycine.",
          "Étape 3 : Activation du réactif : activer la fonction acide (-COOH) de l'alanine (par exemple sous forme de chlorure d'acyle).",
          "Étape 4 : Couplage : faire réagir le chlorure d'alanine N-protégée avec la glycine C-protégée pour former la liaison -CO-NH-.",
          "Étape 5 : Déblocage : déprotéger la fonction amine de l'alanine et la fonction acide de la glycine par hydrolyse douce."
        ],
        "conclusion": "On obtient du dipeptide Ala-Gly pur, à l'exclusion totale de Gly-Ala, Ala-Ala et Gly-Gly."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Chronologie méthodique d'une synthèse peptidique sélective",
        "tableData": {
          "headers": [
            "Étape",
            "Action chimique",
            "Composé A1 (N-terminal)",
            "Composé A2 (C-terminal)"
          ],
          "rows": [
            [
              "1. Protection (blocage)",
              "Empêcher les réactions parasites",
              "Blocage de la fonction -NH2",
              "Blocage de la fonction -COOH"
            ],
            [
              "2. Activation",
              "Augmenter la réactivité",
              "Activation du groupe -COOH (chlorure d'acyle)",
              "Fonction -NH2 laissée libre pour attaquer"
            ],
            [
              "3. Couplage",
              "Formation de la liaison peptidique",
              "Attaque nucléophile de -NH2 sur le carboxyle activé -> formation -CO-NH-",
              "Liaison créée"
            ],
            [
              "4. Déprotection (déblocage)",
              "Restauration des fonctions libres",
              "Déblocage doux de l'amine de A1",
              "Déblocage doux de l'acide de A2"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La problématique du mélange statistique de 4 dipeptides",
          "stepTheme": "Sélectivité chimique",
          "stepBadge": "Mélange parasite",
          "paragraphText": "Lorsqu'on met en présence deux acides α-aminés A et B sans précaution, les fonctions -NH2 et -COOH des deux molécules réagissent sans discernement, fournissant un mélange équimolaire statistique de 4 dipeptides (A-A, B-B, A-B, B-A) impossible à séparer facilement.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p04_q1",
            "type": "mcq",
            "prompt": "Pourquoi est-il impossible d'obtenir un dipeptide unique en mélangeant simplement deux acides α-aminés différents dans l'eau ?",
            "options": [
              "Parce que chaque acide aminé possède deux fonctions réactives opposées (-COOH et -NH2), conduisant à des réactions croisées et d'homocouplage.",
              "Parce que les acides aminés se détruisent mutuellement à température ambiante.",
              "Parce que l'eau empêche toute réaction chimique organique.",
              "Parce que les liaisons peptidiques sont toujours instables."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque acide aminé possédant à la fois un site donneur (-COOH) et un site accepteur (-NH2), 4 combinaisons de couplage entrent en compétition simultanée."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Étape de blocage (protection) des fonctions passives",
          "stepTheme": "Protection fonctionnelle",
          "stepBadge": "Blocage sélectif",
          "paragraphText": "Pour diriger la réaction vers A1-A2, on doit rendre chimiquement inertes la fonction amine de A1 et la fonction acide de A2. On greffe sur ces fonctions des groupes protecteurs temporaires résistants aux conditions de couplage.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p04_q2",
            "type": "mcq",
            "prompt": "Pour préparer exclusivement le dipeptide Val-Gly, quelles fonctions doit-on obligatoirement bloquer (protéger) ?",
            "options": [
              "La fonction amine (-NH2) de la valine et la fonction acide (-COOH) de la glycine",
              "La fonction acide de la valine et la fonction amine de la glycine",
              "Toutes les fonctions amine des deux acides aminés",
              "Uniquement la chaîne carbonée latérale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans Val-Gly, la valine doit réagir par son -COOH (donc son -NH2 doit être bloqué) et la glycine par son -NH2 (donc son -COOH doit être bloqué)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Étape d'activation du groupe carboxyle",
          "stepTheme": "Activation chimique",
          "stepBadge": "Chlorure d'acyle",
          "paragraphText": "La réaction entre un groupe -COOH non modifié et une amine est trop lente à température ordinaire. On active le groupe -COOH de l'acide N-protégé en le transformant en un dérivé hautement électrophile, tel qu'un chlorure d'acyle R-CH(NH-Bloc)-COCl.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p04_q3",
            "type": "mcq",
            "prompt": "Quel réactif peut être utilisé pour transformer le groupe carboxyle -COOH d'un acide aminé protégé en chlorure d'acyle hautement réactif ?",
            "options": [
              "Le chlorure de thionyle SOCl2 ou le pentachlorure de phosphore PCl5",
              "L'eau distillée",
              "La soude NaOH concentrée",
              "Le dihydrogène H2 gazeux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le chlorure de thionyle SOCl2 ou PCl5 convertit quantitativement le groupe carboxyle -COOH en chlorure d'acyle -COCl, augmentant considérablement l'électrophilie du carbone carbonyle."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le couplage peptidique proprement dit",
          "stepTheme": "Couplage",
          "stepBadge": "Réaction unique",
          "paragraphText": "Lorsque le carboxyle activé est mis en présence de l'acide aminé C-protégé, la fonction amine libre de ce dernier attaque immédiatement le carbone électrophile : la liaison peptidique -CO-NH- se forme avec un rendement élevé sans aucune réaction parasite.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p04_q4",
            "type": "mcq",
            "prompt": "Quel est l'unique produit de couplage obtenu entre l'alanine N-protégée activée et la glycine C-protégée ?",
            "options": [
              "Le dipeptide Ala-Gly protégé",
              "Le dipeptide Gly-Ala protégé",
              "Un mélange de Gly-Gly et d'Ala-Ala",
              "Un tripeptide linéaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les fonctions parasites étant protégées, la seule réaction possible est l'attaque de l'amine libre de Gly sur le carbonyle activé d'Ala, produisant exclusivement Ala-Gly protégé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Étape finale de déblocage (déprotection) sélective",
          "stepTheme": "Déprotection",
          "stepBadge": "Régénération",
          "paragraphText": "Après couplage, il faut restaurer les fonctions terminales libres. Cette déprotection s'effectue par des réactifs spécifiques doux qui hydrolysent les groupements protecteurs sans altérer la liaison peptidique -CO-NH-.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p04_q5",
            "type": "mcq",
            "prompt": "Quelle contrainte fondamentale doit respecter la réaction de déblocage des groupements protecteurs à la fin de la synthèse ?",
            "options": [
              "Elle doit éliminer les groupements protecteurs sans rompre la nouvelle liaison peptidique -CO-NH-.",
              "Elle doit transformer le dipeptide en acide aminé unique.",
              "Elle doit chauffer le milieu à plus de 500 °C.",
              "Elle doit oxyder la liaison peptidique."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les conditions de déprotection doivent être suffisamment ménagées pour éliminer les masques protecteurs sans hydrolyser la liaison peptidique qui vient d'être construite."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Exemple d'exercice type baccalauréat sur la synthèse d'un dipeptide",
          "stepTheme": "Cas d'examen",
          "stepBadge": "Problème type",
          "paragraphText": "Un sujet d'examen donne la formule d'un dipeptide cible et demande d'identifier les acides aminés initiaux, de préciser la suite ordonnée des étapes expérimentales et d'écrire l'équation du dipeptide isomère.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p04_q6",
            "type": "mcq",
            "prompt": "Dans un dipeptide de formule H2N-CH(CH3)-CO-NH-CH(CH2-CH(CH3)2)-COOH, quels sont les deux acides α-aminés constitutifs ?",
            "options": [
              "L'alanine (Ala) en N-terminal et la leucine (Leu) en C-terminal",
              "La leucine en N-terminal et l'alanine en C-terminal",
              "La glycine et la valine",
              "Deux molécules d'alanine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le premier résidu (N-terminal) porte le groupe -CH3 : c'est l'alanine. Le second résidu (C-terminal) porte le groupe isobutyle -CH2-CH(CH3)2 : c'est la leucine. Le dipeptide est Ala-Leu."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Synthèse industrielle sur support solide (Méthode de Merrifield)",
          "stepTheme": "Progrès technique",
          "stepBadge": "Prix Nobel",
          "paragraphText": "La synthèse peptidique moderne utilise la méthode sur support solide (inventée par Robert Merrifield, prix Nobel 1984) : le premier acide aminé est greffé sur une résine insoluble de polymère, permettant d'enchaîner automatisations, lavages et couplages sans pertes de matière.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p04_q7",
            "type": "mcq",
            "prompt": "Quel est l'avantage déterminant de fixer le premier acide aminé sur une bille de résine polymère insoluble lors de la synthèse peptidique moderne ?",
            "options": [
              "Permettre d'éliminer les réactifs en excès et les sous-produits par simple filtration et lavage, sans pertes de peptide.",
              "Rendre le peptide fluorescent dans le noir.",
              "Éviter d'utiliser de l'eau.",
              "Remplacer les atomes d'azote par du carbone."
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'ancrage sur une phase solide insoluble permet de rincer et filtrer les excès de réactifs après chaque cycle de couplage en quelques secondes, ouvrant la voie à la synthèse automatisée de peptides et de protéines thérapeutiques."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p04_q1",
          "type": "mcq",
          "prompt": "Pourquoi est-il impossible d'obtenir un dipeptide unique en mélangeant simplement deux acides α-aminés différents dans l'eau ?",
          "options": [
            "Parce que chaque acide aminé possède deux fonctions réactives opposées (-COOH et -NH2), conduisant à des réactions croisées et d'homocouplage.",
            "Parce que les acides aminés se détruisent mutuellement à température ambiante.",
            "Parce que l'eau empêche toute réaction chimique organique.",
            "Parce que les liaisons peptidiques sont toujours instables."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque acide aminé possédant à la fois un site donneur (-COOH) et un site accepteur (-NH2), 4 combinaisons de couplage entrent en compétition simultanée."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p04_q2",
          "type": "mcq",
          "prompt": "Pour préparer exclusivement le dipeptide Val-Gly, quelles fonctions doit-on obligatoirement bloquer (protéger) ?",
          "options": [
            "La fonction amine (-NH2) de la valine et la fonction acide (-COOH) de la glycine",
            "La fonction acide de la valine et la fonction amine de la glycine",
            "Toutes les fonctions amine des deux acides aminés",
            "Uniquement la chaîne carbonée latérale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans Val-Gly, la valine doit réagir par son -COOH (donc son -NH2 doit être bloqué) et la glycine par son -NH2 (donc son -COOH doit être bloqué)."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p04_q3",
          "type": "mcq",
          "prompt": "Quel réactif peut être utilisé pour transformer le groupe carboxyle -COOH d'un acide aminé protégé en chlorure d'acyle hautement réactif ?",
          "options": [
            "Le chlorure de thionyle SOCl2 ou le pentachlorure de phosphore PCl5",
            "L'eau distillée",
            "La soude NaOH concentrée",
            "Le dihydrogène H2 gazeux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le chlorure de thionyle SOCl2 ou PCl5 convertit quantitativement le groupe carboxyle -COOH en chlorure d'acyle -COCl, augmentant considérablement l'électrophilie du carbone carbonyle."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p04_q4",
          "type": "mcq",
          "prompt": "Quel est l'unique produit de couplage obtenu entre l'alanine N-protégée activée et la glycine C-protégée ?",
          "options": [
            "Le dipeptide Ala-Gly protégé",
            "Le dipeptide Gly-Ala protégé",
            "Un mélange de Gly-Gly et d'Ala-Ala",
            "Un tripeptide linéaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les fonctions parasites étant protégées, la seule réaction possible est l'attaque de l'amine libre de Gly sur le carbonyle activé d'Ala, produisant exclusivement Ala-Gly protégé."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p04_q5",
          "type": "mcq",
          "prompt": "Quelle contrainte fondamentale doit respecter la réaction de déblocage des groupements protecteurs à la fin de la synthèse ?",
          "options": [
            "Elle doit éliminer les groupements protecteurs sans rompre la nouvelle liaison peptidique -CO-NH-.",
            "Elle doit transformer le dipeptide en acide aminé unique.",
            "Elle doit chauffer le milieu à plus de 500 °C.",
            "Elle doit oxyder la liaison peptidique."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les conditions de déprotection doivent être suffisamment ménagées pour éliminer les masques protecteurs sans hydrolyser la liaison peptidique qui vient d'être construite."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p04_q6",
          "type": "mcq",
          "prompt": "Dans un dipeptide de formule H2N-CH(CH3)-CO-NH-CH(CH2-CH(CH3)2)-COOH, quels sont les deux acides α-aminés constitutifs ?",
          "options": [
            "L'alanine (Ala) en N-terminal et la leucine (Leu) en C-terminal",
            "La leucine en N-terminal et l'alanine en C-terminal",
            "La glycine et la valine",
            "Deux molécules d'alanine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le premier résidu (N-terminal) porte le groupe -CH3 : c'est l'alanine. Le second résidu (C-terminal) porte le groupe isobutyle -CH2-CH(CH3)2 : c'est la leucine. Le dipeptide est Ala-Leu."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p04_q7",
          "type": "mcq",
          "prompt": "Quel est l'avantage déterminant de fixer le premier acide aminé sur une bille de résine polymère insoluble lors de la synthèse peptidique moderne ?",
          "options": [
            "Permettre d'éliminer les réactifs en excès et les sous-produits par simple filtration et lavage, sans pertes de peptide.",
            "Rendre le peptide fluorescent dans le noir.",
            "Éviter d'utiliser de l'eau.",
            "Remplacer les atomes d'azote par du carbone."
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ancrage sur une phase solide insoluble permet de rincer et filtrer les excès de réactifs après chaque cycle de couplage en quelques secondes, ouvrant la voie à la synthèse automatisée de peptides et de protéines thérapeutiques."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l08_acides_alpha_amines_p05",
      "order": 5,
      "title": "Caractérisation par le Biuret, polypeptides et rôle biologique des protéines",
      "summary": "Réaction colorée du Biuret (complexe cuivrique violet en milieu basique dès 2 liaisons peptidiques), distinction oligopeptides, polypeptides et protéines (> 50-100 résidus), hydrolyse totale enzymatique, et les 9 acides aminés essentiels de l'alimentation humaine.",
      "conceptExplanation": "1. La réaction du Biuret (test d'identification spécifique) :\nLa réaction du Biuret permet de caractériser la présence de liaisons peptidiques dans une solution. En milieu fortement basique (soude NaOH), en présence de quelques gouttes de solution de sulfate de cuivre CuSO4 (ions Cu²⁺), il se forme un complexe de coordination violet caractéristique entre les ions Cu²⁺ et les atomes d'azote des liaisons peptidiques.\nCondition impérative : la molécule doit posséder au moins DEUX liaisons peptidiques (tripeptides, polypeptides, protéines). Un acide aminé isolé ou un dipeptide simple (une seule liaison peptidique) ne donne pas de coloration violette au test du Biuret.\n\n2. De l'oligopeptide à la protéine :\n- Oligopeptide : peptide court contenant de 2 à une dizaine d'acides aminés (ex : dipeptide, tripeptide).\n- Polypeptide : polymère linéaire contenant de 10 à une cinquantaine d'acides aminés.\n- Protéine : macromolécule biologique constituée d'une ou plusieurs chaînes polypeptidiques repliées dans l'espace, comprenant généralement plus de 50 à 100 résidus d'acides aminés (masse molaire souvent supérieure à 10 000 g/mol).\n\n3. Rôle biologique et acides aminés essentiels :\nLes protéines constituent le matériau structural fondamental des cellules vivantes (muscles, collagène, kératine), des catalyseurs biologiques (enzymes), des transporteurs (hémoglobine) et des agents immunitaires (anticorps). Chez l'Homme, sur les 20 acides aminés protéinogènes, 9 sont dits essentiels car l'organisme ne sait pas les synthétiser : ils doivent être obligatoirement apportés par l'alimentation quotidienne (aliments carnés, poissons, légumineuses).",
      "keyRule": "Test du Biuret = Cu²⁺ en milieu basique donne une coloration violette avec les molécules ayant au moins 2 liaisons peptidiques (tripeptides et protéines). L'Homme a 9 acides aminés essentiels obligatoirement alimentaires.",
      "formulas": [
        {
          "name": "Complexe du Biuret",
          "formula": "\\mathrm{Cu^{2+}} + 4\\,(-\\mathrm{CO-NH-}) + 2\\,\\mathrm{OH^-} \\longrightarrow [\\mathrm{Cu}(\\mathrm{pept})_4]^{2-} \\quad (\\text{violet})",
          "note": "Exige au moins deux liaisons peptidiques adjacentes"
        }
      ],
      "workedExample": {
        "title": "Interprétation d'un test au Biuret sur trois échantillons inconnus",
        "statement": "On teste par la réaction du Biuret (quelques gouttes de CuSO4 en milieu NaOH) trois tubes à essai contenant respectivement : Tube 1 (solution de glycine), Tube 2 (solution de dipeptide Ala-Gly), Tube 3 (solution d'ovalbumine, protéine du blanc d'œuf). Prédis les observations pour chaque tube.",
        "methodSteps": [
          "Étape 1 : Tube 1 (glycine) : la glycine est un acide aminé isolé, elle ne possède aucune liaison peptidique. Le test est négatif (teinte bleue des ions Cu²⁺ non complexés ou précipité bleu de Cu(OH)2).",
          "Étape 2 : Tube 2 (Ala-Gly) : Ala-Gly est un dipeptide qui ne possède qu'UNE SEULE liaison peptidique. Le test du Biuret exige au moins deux liaisons peptidiques. Le test est négatif (pas de coloration violette).",
          "Étape 3 : Tube 3 (ovalbumine) : protéine formée de centaines de liaisons peptidiques. Le test est très nettement positif : apparition d'une coloration violette intense."
        ],
        "conclusion": "Seul le tube 3 (protéine) donne le test positif violet du Biuret."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Classification dimensionnelle des chaînes peptidiques et réactivité au Biuret",
        "tableData": {
          "headers": [
            "Type de chaîne",
            "Nombre d'acides aminés",
            "Nombre de liaisons peptidiques",
            "Résultat au test du Biuret"
          ],
          "rows": [
            [
              "Acide aminé libre",
              "1",
              "0",
              "Négatif (bleu)"
            ],
            [
              "Dipeptide",
              "2",
              "1",
              "Négatif (bleu, pas assez de liaisons)"
            ],
            [
              "Tripeptide",
              "3",
              "2",
              "Positif (coloration violette)"
            ],
            [
              "Polypeptide",
              "10 à 50",
              "9 à 49",
              "Positif (coloration violette nette)"
            ],
            [
              "Protéine",
              "> 50 à 100",
              "> 50",
              "Positif (coloration violette très intense)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Principe expérimental de la réaction du Biuret",
          "stepTheme": "Test du Biuret",
          "stepBadge": "Caractérisation",
          "paragraphText": "La réaction du Biuret est un test de caractérisation spécifique des liaisons peptidiques. Lorsqu'on ajoute quelques gouttes de solution de sulfate de cuivre(II) CuSO4 dans une solution rendue basique par de la soude NaOH, l'apparition d'une coloration violette prouve la présence de liaisons peptidiques.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p05_q1",
            "type": "mcq",
            "prompt": "Quels réactifs chimiques composent le test du Biuret et quelle couleur caractérise un résultat positif ?",
            "options": [
              "Ions Cu²⁺ (sulfate de cuivre) en milieu basique (soude NaOH) ; coloration violette",
              "Liqueur de Fehling à chaud ; précipité rouge brique",
              "Réactif de Tollens ; miroir d'argent",
              "Eau de brome ; décoloration instantanée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le test du Biuret utilise des ions cuivriques Cu²⁺ en milieu alcalin (NaOH) qui forment un complexe de coordination chélaté de couleur violette intense avec les doublets non liants des azotes peptidiques."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Condition minimale pour un test du Biuret positif",
          "stepTheme": "Sensibilité du Biuret",
          "stepBadge": "Au moins 2 liaisons",
          "paragraphText": "La formation du complexe chélaté violet exige la coordination de plusieurs doublets d'azote : la réaction du Biuret n'est positive que si la molécule contient au moins DEUX liaisons peptidiques. Elle est donc négative pour un dipeptide simple (1 seule liaison).",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p05_q2",
            "type": "mcq",
            "prompt": "Une solution de dipeptide Gly-Ala donne-t-elle une coloration violette au test du Biuret ?",
            "options": [
              "Non, car un dipeptide ne comporte qu'une seule liaison peptidique, alors que le test en requiert au moins deux.",
              "Oui, car tout composé contenant de l'azote vire au violet.",
              "Oui, car la glycine catalyse la réaction.",
              "Non, car le dipeptide précipite sous forme de cristal blanc."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le test du Biuret exige au minimum 2 liaisons peptidiques pour stabiliser le complexe de cuivre tétra-coordonné. Un dipeptide ne possédant qu'une seule liaison peptidique donne un résultat négatif."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Différence entre dipeptide, polypeptide et protéine",
          "stepTheme": "Classification des protéines",
          "stepBadge": "Taille de chaîne",
          "paragraphText": "On distingue les peptides selon le nombre de résidus d'acides aminés : de 2 à 10 pour les oligopeptides, de 10 à 50 pour les polypeptides, et au-delà de 50 à 100 résidus pour les protéines, qui acquièrent une structure tridimensionnelle repliée complexe.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p05_q3",
            "type": "mcq",
            "prompt": "À partir de quel ordre de grandeur de résidus d'acides aminés qualifie-t-on généralement une chaîne polypeptidique de protéine ?",
            "options": [
              "Plus de 50 à 100 acides aminés",
              "Exactement 2 acides aminés",
              "De 3 à 5 acides aminés",
              "Moins de 10 acides aminés"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une protéine est une macromolécule biologique constituée d'une ou plusieurs chaînes de plus de 50 à 100 résidus d'acides aminés adoptant un repliement tridimensionnel stable (structures secondaire, tertiaire et quaternaire)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les différents niveaux structuraux d'une protéine",
          "stepTheme": "Structure des protéines",
          "stepBadge": "Repliement spatial",
          "paragraphText": "L'architecture d'une protéine comprend : 1° Structure primaire : la séquence linéaire ordonnée des résidus ; 2° Structure secondaire : hélices α et feuillets β stabilisés par liaisons hydrogène ; 3° Structure tertiaire : conformation 3D globale ; 4° Structure quaternaire : assemblage de plusieurs sous-unités (ex : 4 chaînes dans l'hémoglobine).",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p05_q4",
            "type": "mcq",
            "prompt": "Qu'appelle-t-on structure primaire d'une protéine ?",
            "options": [
              "L'ordre séquentiel linéaire précis dans lequel les résidus d'acides aminés sont enchaînés par les liaisons peptidiques",
              "Le repliement en hélice alpha uniquement",
              "Le nombre d'atomes de carbone de la molécule",
              "La couleur prise au test du Biuret"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La structure primaire d'une protéine est la séquence ordonnée d'acides aminés liés de façon covalente de l'extrémité N-terminale vers l'extrémité C-terminale, déterminée par l'information génétique (code génétique de l'ADN)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les 9 acides aminés essentiels de l'alimentation humaine",
          "stepTheme": "Nutrition",
          "stepBadge": "Acides aminés essentiels",
          "paragraphText": "L'organisme humain ne peut pas synthétiser 9 des 20 acides aminés protéinogènes : ils sont dits indispensables ou essentiels (valine, leucine, isoleucine, lysine, méthionine, phénylalanine, thréonine, tryptophane, histidine). Une carence alimentaire en l'un d'eux bloque la synthèse protéique.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p05_q5",
            "type": "mcq",
            "prompt": "Pourquoi qualifie-t-on certains acides aminés d'acides aminés essentiels pour l'être humain ?",
            "options": [
              "Parce que le métabolisme humain est incapable de les synthétiser et qu'ils doivent obligatoirement être fournis par la nourriture.",
              "Parce qu'ils ne contiennent pas d'atomes d'azote.",
              "Parce qu'ils sont toxiques pour les cellules.",
              "Parce qu'ils ne se dissolvent pas dans l'eau."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les cellules humaines ne disposent pas des voies enzymatiques pour fabriquer la chaîne latérale de ces 9 acides aminés : ils doivent impérativement être apportés par les protéines de l'alimentation quotidienne."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Dénaturation des protéines : effets thermiques et chimiques",
          "stepTheme": "Dénaturation",
          "stepBadge": "Perte de structure 3D",
          "paragraphText": "Sous l'action de la chaleur (cuisson d'un œuf à 60-70 °C), de variations extrêmes de pH ou de solvants organiques, les liaisons faibles (liaisons hydrogène, interactions hydrophobes) maintenant la structure tridimensionnelle se rompent : c'est la dénaturation, qui entraîne la perte irréversible de l'activité biologique sans rompre la structure primaire covalente.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p05_q6",
            "type": "mcq",
            "prompt": "Lorsqu'on cuit un œuf et que le blanc passe de l'état liquide transparent à un gel blanc opaque solide, que subit la protéine d'ovalbumine à l'échelle moléculaire ?",
            "options": [
              "Une dénaturation thermique avec dépliement de la structure 3D et agrégation par ponts disulfures sans rupture des liaisons peptidiques",
              "Une hydrolyse complète en acides aminés individuels",
              "Une évaporation de toutes ses liaisons amides",
              "Une transformation en acide acétique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La chaleur brise les liaisons faibles qui stabilisent la forme native repliée de l'ovalbumine : les chaînes se déroulent, exposent leurs zones hydrophobes et s'agrègent en un réseau solide tridimensionnel irréversible (dénaturation)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Synthèse : bilan du rôle des acides aminés en chimie et biochimie",
          "stepTheme": "Bilan global",
          "stepBadge": "Rôle central",
          "paragraphText": "Les acides α-aminés constituent l'interface fondamentale entre la chimie organique et le vivant : monomères bifonctionnels chiraux, ils s'unissent par liaisons peptidiques pour bâtir les protéines, enzymes et hormones indispensables au fonctionnement de tous les organismes.",
          "exercise": {
            "id": "terminale_c_chimie_l08_acides_alpha_amines_p05_q7",
            "type": "mcq",
            "prompt": "Quel test analytique permet de distinguer au laboratoire une solution aqueuse d'ovalbumine (protéine) d'une solution d'acide éthanoïque ?",
            "options": [
              "Le test du Biuret (sulfate de cuivre en milieu NaOH) qui donne une coloration violette avec l'ovalbumine et un précipité bleu sans virage avec l'acide éthanoïque",
              "Le test de la liqueur de Fehling qui donne un miroir d'argent",
              "Le test au papier pH qui ne fonctionne qu'avec les protéines",
              "L'ajout d'eau distillée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'ovalbumine possède des centaines de liaisons peptidiques réagissant positivement au test du Biuret en formant un complexe violet intense avec les ions Cu²⁺ en milieu basique, ce qui n'est pas le cas de l'acide acétique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p05_q1",
          "type": "mcq",
          "prompt": "Quels réactifs chimiques composent le test du Biuret et quelle couleur caractérise un résultat positif ?",
          "options": [
            "Ions Cu²⁺ (sulfate de cuivre) en milieu basique (soude NaOH) ; coloration violette",
            "Liqueur de Fehling à chaud ; précipité rouge brique",
            "Réactif de Tollens ; miroir d'argent",
            "Eau de brome ; décoloration instantanée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le test du Biuret utilise des ions cuivriques Cu²⁺ en milieu alcalin (NaOH) qui forment un complexe de coordination chélaté de couleur violette intense avec les doublets non liants des azotes peptidiques."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p05_q2",
          "type": "mcq",
          "prompt": "Une solution de dipeptide Gly-Ala donne-t-elle une coloration violette au test du Biuret ?",
          "options": [
            "Non, car un dipeptide ne comporte qu'une seule liaison peptidique, alors que le test en requiert au moins deux.",
            "Oui, car tout composé contenant de l'azote vire au violet.",
            "Oui, car la glycine catalyse la réaction.",
            "Non, car le dipeptide précipite sous forme de cristal blanc."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le test du Biuret exige au minimum 2 liaisons peptidiques pour stabiliser le complexe de cuivre tétra-coordonné. Un dipeptide ne possédant qu'une seule liaison peptidique donne un résultat négatif."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p05_q3",
          "type": "mcq",
          "prompt": "À partir de quel ordre de grandeur de résidus d'acides aminés qualifie-t-on généralement une chaîne polypeptidique de protéine ?",
          "options": [
            "Plus de 50 à 100 acides aminés",
            "Exactement 2 acides aminés",
            "De 3 à 5 acides aminés",
            "Moins de 10 acides aminés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une protéine est une macromolécule biologique constituée d'une ou plusieurs chaînes de plus de 50 à 100 résidus d'acides aminés adoptant un repliement tridimensionnel stable (structures secondaire, tertiaire et quaternaire)."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p05_q4",
          "type": "mcq",
          "prompt": "Qu'appelle-t-on structure primaire d'une protéine ?",
          "options": [
            "L'ordre séquentiel linéaire précis dans lequel les résidus d'acides aminés sont enchaînés par les liaisons peptidiques",
            "Le repliement en hélice alpha uniquement",
            "Le nombre d'atomes de carbone de la molécule",
            "La couleur prise au test du Biuret"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La structure primaire d'une protéine est la séquence ordonnée d'acides aminés liés de façon covalente de l'extrémité N-terminale vers l'extrémité C-terminale, déterminée par l'information génétique (code génétique de l'ADN)."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p05_q5",
          "type": "mcq",
          "prompt": "Pourquoi qualifie-t-on certains acides aminés d'acides aminés essentiels pour l'être humain ?",
          "options": [
            "Parce que le métabolisme humain est incapable de les synthétiser et qu'ils doivent obligatoirement être fournis par la nourriture.",
            "Parce qu'ils ne contiennent pas d'atomes d'azote.",
            "Parce qu'ils sont toxiques pour les cellules.",
            "Parce qu'ils ne se dissolvent pas dans l'eau."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les cellules humaines ne disposent pas des voies enzymatiques pour fabriquer la chaîne latérale de ces 9 acides aminés : ils doivent impérativement être apportés par les protéines de l'alimentation quotidienne."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p05_q6",
          "type": "mcq",
          "prompt": "Lorsqu'on cuit un œuf et que le blanc passe de l'état liquide transparent à un gel blanc opaque solide, que subit la protéine d'ovalbumine à l'échelle moléculaire ?",
          "options": [
            "Une dénaturation thermique avec dépliement de la structure 3D et agrégation par ponts disulfures sans rupture des liaisons peptidiques",
            "Une hydrolyse complète en acides aminés individuels",
            "Une évaporation de toutes ses liaisons amides",
            "Une transformation en acide acétique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La chaleur brise les liaisons faibles qui stabilisent la forme native repliée de l'ovalbumine : les chaînes se déroulent, exposent leurs zones hydrophobes et s'agrègent en un réseau solide tridimensionnel irréversible (dénaturation)."
        },
        {
          "id": "terminale_c_chimie_l08_acides_alpha_amines_p05_q7",
          "type": "mcq",
          "prompt": "Quel test analytique permet de distinguer au laboratoire une solution aqueuse d'ovalbumine (protéine) d'une solution d'acide éthanoïque ?",
          "options": [
            "Le test du Biuret (sulfate de cuivre en milieu NaOH) qui donne une coloration violette avec l'ovalbumine et un précipité bleu sans virage avec l'acide éthanoïque",
            "Le test de la liqueur de Fehling qui donne un miroir d'argent",
            "Le test au papier pH qui ne fonctionne qu'avec les protéines",
            "L'ajout d'eau distillée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ovalbumine possède des centaines de liaisons peptidiques réagissant positivement au test du Biuret en formant un complexe violet intense avec les ions Cu²⁺ en milieu basique, ce qui n'est pas le cas de l'acide acétique."
        }
      ]
    }
  ]
};
