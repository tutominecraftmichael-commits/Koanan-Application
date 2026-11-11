import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : TCDE — Thème : Chimie Organique — Titre : Les Amines
export const CHIMIE_TLE_CD_L04_AMINES: CurriculumChapter = {
  "id": "terminale_c_chimie_l04_amines",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 4,
  "title": "Leçon 4 : Les Amines",
  "summary": "Définition, formule CnH(2n+3)N, les trois classes d'amines, double nomenclature (alcanamine et alkylamine), caractère basique (pKa ~ 10), caractère nucléophile, réaction d'alkylation d'Hofmann et applications médicales.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : TCDE – Chimie Organique – Les Amines)",
  "points": [
    {
      "id": "terminale_c_chimie_l04_amines_p01",
      "order": 1,
      "title": "Définition, formule brute générale et les trois classes d'amines",
      "summary": "Remplacement des atomes d'hydrogène de NH3 par des radicaux carbonés, formule brute CnH(2n+3)N, et distinction stricte des classes primaire, secondaire et tertiaire.",
      "conceptExplanation": "Une amine est un composé organique azoté dérivé formellement de la molécule d'ammoniac (NH3) par substitution d'un, de deux ou de trois atomes d'hydrogène par des groupements carbonés alkyles (R) ou aryles (Ar).\n\n1. Formule générale et formule brute :\nPour les amines aliphatiques saturées acycliques comportant un seul atome d'azote :\n- Formule brute générale : CnH(2n+3)N avec n >= 1.\n- Masse molaire : M = 12n + (2n+3)*1 + 14 = 14n + 17 g/mol.\n- Pourcentage massique d'azote : %N = (14 / M) * 100 = (1400 / M).\n\n2. Les trois classes d'amines :\nContrairement aux alcools où la classe dépend du carbone fonctionnel, la classe d'une amine est définie STRICTEMENT par le nombre de groupements carbonés (alkyles ou aryles) directement attachés à l'atome d'azote N :\n- Amine primaire : l'atome d'azote est lié à un seul groupement carboné et porte 2 hydrogènes (R-NH2).\n- Amine secondaire : l'atome d'azote est lié à deux groupements carbonés et porte 1 hydrogène (R1-NH-R2).\n- Amine tertiaire : l'atome d'azote est lié à trois groupements carbonés et ne porte aucun hydrogène (R1-N(R3)-R2).",
      "keyRule": "Pour classer une amine, compte les groupes carbonés fixés sur l'atome d'AZOTE : 1 groupe R = primaire (R-NH2) ; 2 groupes R = secondaire (R-NH-R') ; 3 groupes R = tertiaire (R-N(R')-R'').",
      "formulas": [
        {
          "name": "Formule brute générale d'une amine saturée",
          "formula": "\\mathrm{C_n H_{2n+3} N} \\quad (n \\ge 1)",
          "note": "Masse molaire M = 14n + 17 g/mol"
        },
        {
          "name": "Teneur massique en azote",
          "formula": "\\%\\mathrm{N} = \\frac{14}{M} \\times 100 = \\frac{1400}{14n + 17}",
          "note": "Permet de déterminer la masse molaire M et l'entier n"
        }
      ],
      "workedExample": {
        "title": "Détermination de la formule brute à partir du pourcentage massique en azote",
        "statement": "Une amine aliphatique saturée A contient en masse 23,7 % d'azote. Détermine sa formule brute et le nombre d'atomes de carbone.",
        "methodSteps": [
          "Étape 1 : Exprimer la masse molaire M à partir de %N : M = 1400 / %N = 1400 / 23,7 = 59,07 g/mol.",
          "Étape 2 : Poser l'égalité avec la formule générale M = 14n + 17 = 59,07.",
          "Étape 3 : Résoudre pour n : 14n = 59,07 - 17 = 42,07 => n = 42,07 / 14 = 3,00 (soit n = 3).",
          "Étape 4 : Déterminer la formule brute : C3H(2*3+3)N = C3H9N."
        ],
        "conclusion": "La formule brute de l'amine est C3H9N."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau comparatif des trois classes d'amines",
        "tableData": {
          "headers": [
            "Classe",
            "Formule générale",
            "Nombre de liaisons N-C",
            "Nombre d'atomes H sur N",
            "Exemple type",
            "Nom usuel / IUPAC"
          ],
          "rows": [
            [
              "Primaire",
              "R-NH2",
              "1 liaison",
              "2 atomes H",
              "CH3-NH2",
              "Méthanamine (méthylamine)"
            ],
            [
              "Secondaire",
              "R1-NH-R2",
              "2 liaisons",
              "1 atome H",
              "CH3-NH-CH3",
              "N-méthylméthanamine (diméthylamine)"
            ],
            [
              "Tertiaire",
              "R1-N(R3)-R2",
              "3 liaisons",
              "0 atome H",
              "(CH3)3N",
              "N,N-diméthylméthanamine (triméthylamine)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Filiation structurale avec l'ammoniac NH3",
          "stepTheme": "Définition des amines",
          "stepBadge": "Dérivé de NH3",
          "paragraphText": "L'ammoniac NH3 possède une géométrie pyramidale trigonale avec un atome d'azote portant un doublet électronique non liant. Remplacer un ou plusieurs atomes H par des chaînes alkyles génère la famille des amines, qui héritent de cette géométrie et de ce doublet réactif.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p01_q1",
            "type": "mcq",
            "prompt": "Parmi les composés suivants, lequel appartient formellement à la famille des amines ?",
            "options": [
              "CH3-CO-NH2 (éthanamide)",
              "CH3-CH2-NO2 (nitroéthane)",
              "CH3-CH2-NH2 (éthanamine)",
              "H2N-CO-NH2 (urée)"
            ],
            "correctAnswerIndex": 2,
            "explanation": "CH3-CH2-NH2 est une amine primaire (le groupe -NH2 est lié à un carbone sp3). CH3-CO-NH2 et l'urée sont des amides (l'azote est lié à un carbonyle C=O), et CH3-CH2-NO2 est un dérivé nitré."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Formule générale brute CnH(2n+3)N",
          "stepTheme": "Formule brute",
          "stepBadge": "M = 14n + 17",
          "paragraphText": "Pour une amine saturée acyclique à n atomes de carbone, la formule brute est CnH(2n+3)N. Le nombre d'hydrogènes est impair (2n+3) en raison de la présence de l'atome d'azote trivalent (règle de l'azote). La masse molaire M = 14n + 17 est donc également un nombre impair.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p01_q2",
            "type": "mcq",
            "prompt": "Une amine saturée acyclique possède 4 atomes de carbone. Quelle est sa formule brute et sa masse molaire moléculaire ?",
            "options": [
              "C4H9N (M = 71 g/mol)",
              "C4H11N (M = 73 g/mol)",
              "C4H10N (M = 72 g/mol)",
              "C4H12N (M = 74 g/mol)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour n = 4, le nombre d'hydrogènes est 2n + 3 = 2*4 + 3 = 11. La formule brute est C4H11N et sa masse molaire vaut 14*4 + 17 = 56 + 17 = 73 g/mol."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Reconnaissance d'une amine primaire",
          "stepTheme": "Classes d'amines",
          "stepBadge": "Amine primaire",
          "paragraphText": "Dans une amine primaire, l'azote ne porte qu'une seule liaison carbone-azote et conserve deux atomes d'hydrogène (-NH2). Attention : même si le carbone porteur est ramifié (comme dans (CH3)3C-NH2), l'amine reste PRIMAIRE car l'azote n'est lié qu'à un seul atome de carbone.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p01_q3",
            "type": "mcq",
            "prompt": "Quelle est la classe de l'amine de formule semi-développée : (CH3)3C-NH2 (tert-butylamine ou 2-méthylpropan-2-amine) ?",
            "options": [
              "Amine primaire",
              "Amine secondaire",
              "Amine tertiaire",
              "Sel d'ammonium quaternaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Piège classique d'examen : bien que le carbone soit tertiaire, l'atome d'azote n'est lié qu'à UN SEUL atome de carbone et porte 2 hydrogènes (-NH2). Il s'agit rigoureusement d'une AMINE PRIMAIRE."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Reconnaissance d'une amine secondaire",
          "stepTheme": "Classes d'amines",
          "stepBadge": "Amine secondaire",
          "paragraphText": "Une amine secondaire possède un atome d'azote engagé dans deux liaisons carbone-azote (structure R1-NH-R2). L'azote ne conserve qu'un seul atome d'hydrogène.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p01_q4",
            "type": "mcq",
            "prompt": "Quelle est la classe de l'amine de formule : CH3-NH-CH2-CH3 ?",
            "options": [
              "Amine primaire",
              "Amine secondaire",
              "Amine tertiaire",
              "Amide secondaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'atome d'azote est lié à deux groupes carbonés (un méthyle -CH3 et un éthyle -C2H5) et porte un atome H : c'est une amine secondaire (N-méthyléthanamine)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Reconnaissance d'une amine tertiaire",
          "stepTheme": "Classes d'amines",
          "stepBadge": "Amine tertiaire",
          "paragraphText": "Dans une amine tertiaire, l'azote a remplacé la totalité de ses trois atomes d'hydrogène d'origine par des chaînes carbonées : R1-N(R3)-R2. L'absence de liaison N-H supprime la possibilité de former des liaisons hydrogène donneuses entre molécules d'amine tertiaire, ce qui abaisse leur température d'ébullition par rapport aux isomères primaires et secondaires.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p01_q5",
            "type": "mcq",
            "prompt": "On considère la triéthylamine (C2H5)3N. Pourquoi son point d'ébullition (89 °C) est-il inférieur à celui de l'hexylamine primaire C6H13-NH2 (131 °C), alors qu'elles ont la même masse molaire (101 g/mol) ?",
            "options": [
              "Parce que la triéthylamine est insoluble dans tous les solvants.",
              "Parce que la triéthylamine ne possède aucun hydrogène sur son atome d'azote et ne peut donc pas former de liaisons hydrogène intermoléculaires entre ses molécules.",
              "Parce que l'azote de la triéthylamine est radioactif.",
              "Parce que l'hexylamine est un alcane gazeux."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'absence de liaison N-H dans l'amine tertiaire interdit l'établissement de liaisons hydrogène entre molécules de même nature, diminuant les interactions intermoléculaires et abaissant la température d'ébullition."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Inventaire et dénombrement des isomères pour C3H9N",
          "stepTheme": "Isomérie des amines",
          "stepBadge": "Cas de C3H9N",
          "paragraphText": "Pour la formule brute C3H9N (n = 3), il existe exactement 4 isomères d'amines :\n- 2 amines primaires : propan-1-amine (CH3-CH2-CH2-NH2) et propan-2-amine (CH3-CH(NH2)-CH3) ;\n- 1 amine secondaire : N-méthyléthanamine (CH3-CH2-NH-CH3) ;\n- 1 amine tertiaire : N,N-diméthylméthanamine ((CH3)3N).",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p01_q6",
            "type": "mcq",
            "prompt": "Combien d'isomères d'amines de chaque classe correspondent rigoureusement à la formule brute C3H9N ?",
            "options": [
              "3 primaires, 1 secondaire et 0 tertiaire",
              "2 primaires, 1 secondaire et 1 tertiaire",
              "1 primaire, 2 secondaires et 1 tertiaire",
              "4 primaires et aucune autre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C3H9N donne 4 isomères : 2 primaires (propan-1-amine et propan-2-amine), 1 secondaire (N-méthyléthanamine) et 1 tertiaire (triméthylamine)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège d'examen : Différence absolue entre classe d'alcool et classe d'amine",
          "stepTheme": "Règle de classification",
          "stepBadge": "Alcool vs Amine",
          "paragraphText": "Règle fondamentale à graver : pour un alcool, on regarde les atomes de carbone liés au CARBONE fonctionnel (le -OH reste toujours identique) ; pour une amine, on regarde les atomes de carbone liés à l'AZOTE lui-même. C'est pourquoi (CH3)3C-OH est un alcool tertiaire, mais (CH3)3C-NH2 est une amine primaire.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p01_q7",
            "type": "mcq",
            "prompt": "Sur une copie d'examen, un élève écrit : « Le composé (CH3)2CH-NH2 est une amine secondaire car son azote est lié à un carbone secondaire ». Quelle appréciation le correcteur doit-il porter ?",
            "options": [
              "Exact, la classe d'une amine est toujours identique à celle du carbone porteur.",
              "Faux : la classe d'une amine dépend uniquement du nombre de carbones attachés à l'azote N ; ici, l'azote n'étant lié qu'à 1 seul carbone, c'est une amine primaire.",
              "Faux : c'est une amine tertiaire car elle comporte deux groupes méthyles.",
              "Exact, car elle possède 2 hydrogènes."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La classe d'une amine ne dépend jamais de la classe du carbone adjacent, mais uniquement du nombre de carbones directement attachés à l'atome d'azote. Avec un seul carbone lié à N, c'est une amine primaire."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l04_amines_p01_q1",
          "type": "mcq",
          "prompt": "Parmi les composés suivants, lequel appartient formellement à la famille des amines ?",
          "options": [
            "CH3-CO-NH2 (éthanamide)",
            "CH3-CH2-NO2 (nitroéthane)",
            "CH3-CH2-NH2 (éthanamine)",
            "H2N-CO-NH2 (urée)"
          ],
          "correctAnswerIndex": 2,
          "explanation": "CH3-CH2-NH2 est une amine primaire (le groupe -NH2 est lié à un carbone sp3). CH3-CO-NH2 et l'urée sont des amides (l'azote est lié à un carbonyle C=O), et CH3-CH2-NO2 est un dérivé nitré."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p01_q2",
          "type": "mcq",
          "prompt": "Une amine saturée acyclique possède 4 atomes de carbone. Quelle est sa formule brute et sa masse molaire moléculaire ?",
          "options": [
            "C4H9N (M = 71 g/mol)",
            "C4H11N (M = 73 g/mol)",
            "C4H10N (M = 72 g/mol)",
            "C4H12N (M = 74 g/mol)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour n = 4, le nombre d'hydrogènes est 2n + 3 = 2*4 + 3 = 11. La formule brute est C4H11N et sa masse molaire vaut 14*4 + 17 = 56 + 17 = 73 g/mol."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p01_q3",
          "type": "mcq",
          "prompt": "Quelle est la classe de l'amine de formule semi-développée : (CH3)3C-NH2 (tert-butylamine ou 2-méthylpropan-2-amine) ?",
          "options": [
            "Amine primaire",
            "Amine secondaire",
            "Amine tertiaire",
            "Sel d'ammonium quaternaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Piège classique d'examen : bien que le carbone soit tertiaire, l'atome d'azote n'est lié qu'à UN SEUL atome de carbone et porte 2 hydrogènes (-NH2). Il s'agit rigoureusement d'une AMINE PRIMAIRE."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p01_q4",
          "type": "mcq",
          "prompt": "Quelle est la classe de l'amine de formule : CH3-NH-CH2-CH3 ?",
          "options": [
            "Amine primaire",
            "Amine secondaire",
            "Amine tertiaire",
            "Amide secondaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'atome d'azote est lié à deux groupes carbonés (un méthyle -CH3 et un éthyle -C2H5) et porte un atome H : c'est une amine secondaire (N-méthyléthanamine)."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p01_q5",
          "type": "mcq",
          "prompt": "On considère la triéthylamine (C2H5)3N. Pourquoi son point d'ébullition (89 °C) est-il inférieur à celui de l'hexylamine primaire C6H13-NH2 (131 °C), alors qu'elles ont la même masse molaire (101 g/mol) ?",
          "options": [
            "Parce que la triéthylamine est insoluble dans tous les solvants.",
            "Parce que la triéthylamine ne possède aucun hydrogène sur son atome d'azote et ne peut donc pas former de liaisons hydrogène intermoléculaires entre ses molécules.",
            "Parce que l'azote de la triéthylamine est radioactif.",
            "Parce que l'hexylamine est un alcane gazeux."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'absence de liaison N-H dans l'amine tertiaire interdit l'établissement de liaisons hydrogène entre molécules de même nature, diminuant les interactions intermoléculaires et abaissant la température d'ébullition."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p01_q6",
          "type": "mcq",
          "prompt": "Combien d'isomères d'amines de chaque classe correspondent rigoureusement à la formule brute C3H9N ?",
          "options": [
            "3 primaires, 1 secondaire et 0 tertiaire",
            "2 primaires, 1 secondaire et 1 tertiaire",
            "1 primaire, 2 secondaires et 1 tertiaire",
            "4 primaires et aucune autre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C3H9N donne 4 isomères : 2 primaires (propan-1-amine et propan-2-amine), 1 secondaire (N-méthyléthanamine) et 1 tertiaire (triméthylamine)."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p01_q7",
          "type": "mcq",
          "prompt": "Sur une copie d'examen, un élève écrit : « Le composé (CH3)2CH-NH2 est une amine secondaire car son azote est lié à un carbone secondaire ». Quelle appréciation le correcteur doit-il porter ?",
          "options": [
            "Exact, la classe d'une amine est toujours identique à celle du carbone porteur.",
            "Faux : la classe d'une amine dépend uniquement du nombre de carbones attachés à l'azote N ; ici, l'azote n'étant lié qu'à 1 seul carbone, c'est une amine primaire.",
            "Faux : c'est une amine tertiaire car elle comporte deux groupes méthyles.",
            "Exact, car elle possède 2 hydrogènes."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La classe d'une amine ne dépend jamais de la classe du carbone adjacent, mais uniquement du nombre de carbones directement attachés à l'atome d'azote. Avec un seul carbone lié à N, c'est une amine primaire."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l04_amines_p02",
      "order": 2,
      "title": "Double nomenclature des amines : Méthode alcanamine et méthode alkylamine",
      "summary": "Système officiel IUPAC (alcanamine avec indices et préfixes N- / N,N-) et système usuel admis (alkylamine).",
      "conceptExplanation": "Le programme officiel de Côte d'Ivoire enseigne deux méthodes complémentaires pour nommer les amines :\n\n1. Première méthode (nomenclature systématique IUPAC : alcanamine) :\n- Pour les amines primaires :\n  * On identifie la chaîne carbonée la plus longue contenant le carbone lié à l'azote.\n  * On numérote cette chaîne de façon à donner à ce carbone lié à l'azote l'indice le plus petit possible.\n  * On remplace le « e » final de l'alcane par « amine », précédé de l'indice de position (ex : propan-1-amine, propan-2-amine).\n- Pour les amines secondaires et tertiaires :\n  * La chaîne la plus longue est choisie comme chaîne principale.\n  * Les autres groupes alkyles fixés sur l'azote sont énoncés en préfixe, précédés de la lettre N (ou N,N s'ils sont deux) : ex : N-méthyléthanamine, N,N-diméthyléthanamine.\n\n2. Deuxième méthode (nomenclature des radicaux : alkylamine) :\n- Pour les amines primaires :\n  On fait suivre le nom du groupe alkyle lié au -NH2 du suffixe « amine » (ex : méthylamine, éthylamine, propylamine).\n- Pour les amines secondaires et tertiaires :\n  On énonce les noms de tous les groupes alkyles attachés à l'azote par ordre alphabétique ou avec les préfixes di- / tri- devant le mot « amine » (ex : diméthylamine, éthylméthylamine, triéthylamine).",
      "keyRule": "1ère méthode (IUPAC) : alcanamine avec préfixe N- pour les substituants sur l'azote. 2ème méthode : alkylamine (ex : N-méthyléthanamine = éthylméthylamine).",
      "formulas": [],
      "workedExample": {
        "title": "Nommer une amine tertiaire par les deux méthodes officielles",
        "statement": "Donne le nom de l'amine suivante selon les deux méthodes officielles : CH3-N(CH3)-CH2-CH3.",
        "methodSteps": [
          "Étape 1 : Analyser la structure : l'azote est lié à un groupe éthyle (-CH2-CH3) et à deux groupes méthyles (-CH3).",
          "Étape 2 : 1ère méthode (IUPAC) : la chaîne la plus longue a 2 carbones (éthanamine). Les deux groupes méthyles sur l'azote deviennent : N,N-diméthyléthanamine.",
          "Étape 3 : 2ème méthode (alkylamine) : on liste les groupes alkyles 'éthyle' et 'diméthyle' : éthyldiméthylamine (ou N,N-diméthyléthylamine)."
        ],
        "conclusion": "1ère méthode : N,N-diméthyléthanamine. 2ème méthode : éthyldiméthylamine."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau de correspondance entre les deux méthodes de nomenclature",
        "tableData": {
          "headers": [
            "Formule semi-développée",
            "Classe",
            "1ère méthode (IUPAC : alcanamine)",
            "2ème méthode (alkylamine)"
          ],
          "rows": [
            [
              "CH3-NH2",
              "Primaire",
              "Méthanamine",
              "Méthylamine"
            ],
            [
              "CH3-CH2-CH2-NH2",
              "Primaire",
              "Propan-1-amine",
              "Propylamine"
            ],
            [
              "CH3-CH(NH2)-CH3",
              "Primaire",
              "Propan-2-amine",
              "Isopropylamine (1-méthyléthylamine)"
            ],
            [
              "CH3-NH-C2H5",
              "Secondaire",
              "N-méthyléthanamine",
              "Éthylméthylamine"
            ],
            [
              "(C2H5)2NH",
              "Secondaire",
              "N-éthyléthanamine",
              "Diéthylamine"
            ],
            [
              "(CH3)3N",
              "Tertiaire",
              "N,N-diméthylméthanamine",
              "Triméthylamine"
            ],
            [
              "C2H5-N(CH3)2",
              "Tertiaire",
              "N,N-diméthyléthanamine",
              "Éthyldiméthylamine"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Nomenclature IUPAC d'une amine primaire ramifiée",
          "stepTheme": "Nomenclature alcanamine",
          "stepBadge": "1ère méthode",
          "paragraphText": "Dans la nomenclature systématique des amines primaires, on cherche la chaîne la plus longue contenant le carbone lié au -NH2. Ce carbone reçoit l'indice le plus bas possible. Si la chaîne est ramifiée, les substituants sont placés en tête du nom avec leurs indices respectifs.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p02_q1",
            "type": "mcq",
            "prompt": "Quel est le nom IUPAC (1ère méthode) de la molécule : CH3-CH(CH3)-CH2-NH2 ?",
            "options": [
              "2-méthylpropan-1-amine",
              "2-méthylpropan-3-amine",
              "Isobutylamine-1",
              "Butan-2-amine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le carbone lié au -NH2 est le C1. Le C2 porte le méthyle, et C3 est le CH3 terminal. La chaîne la plus longue compte 3 carbones : 2-méthylpropan-1-amine."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Rôle de la lettre N dans les amines secondaires et tertiaires",
          "stepTheme": "Nomenclature alcanamine",
          "stepBadge": "Préfixe N-",
          "paragraphText": "La lettre majuscule N indique expressément que le substituant alkyle est rattaché à l'atome d'AZOTE et non à un atome de carbone de la chaîne principale. S'il y a deux substituants identiques sur l'azote, on utilise le préfixe N,N-.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p02_q2",
            "type": "mcq",
            "prompt": "Quel est le nom officiel IUPAC de l'amine secondaire : CH3-CH2-CH2-NH-CH3 ?",
            "options": [
              "N-méthylpropan-1-amine",
              "1-méthylaminopropane",
              "Méthylpropylamine-1",
              "Butan-2-amine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La chaîne la plus longue est le propane (propan-1-amine). L'azote porte un groupe méthyle : N-méthylpropan-1-amine (ou N-méthylpropanamine)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La méthode des alkylamines (2ème méthode)",
          "stepTheme": "Nomenclature alkylamine",
          "stepBadge": "2ème méthode",
          "paragraphText": "La seconde méthode traite la molécule comme une amine substituée par des radicaux alkyles. Pour les amines symétriques ou simples, cette méthode est très concise : (CH3)2NH s'appelle diméthylamine, (C2H5)3N s'appelle triéthylamine.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p02_q3",
            "type": "mcq",
            "prompt": "Quel est le nom de l'amine (C2H5)2NH selon la 2ème méthode officielle (méthode des alkylamines) ?",
            "options": [
              "Diéthanamine",
              "Diéthylamine",
              "N-éthyléthanamine",
              "Bis-éthylamine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Selon la 2ème méthode, les deux groupes alkyles identiques éthyles (-C2H5) fixés sur l'azote donnent directement le nom : diéthylamine."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Amines dissymétriques tertiaires en nomenclature alkylamine",
          "stepTheme": "Nomenclature alkylamine",
          "stepBadge": "Ordre alphabétique",
          "paragraphText": "Lorsque l'amine tertiaire porte des groupes alkyles différents, la 2ème méthode les énonce généralement par ordre alphabétique avant le mot amine : éthylméthylpropylamine pour C2H5-N(CH3)-C3H7.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p02_q4",
            "type": "mcq",
            "prompt": "Quel est le nom de l'amine CH3-N(C2H5)-CH2-CH2-CH3 selon la 2ème méthode ?",
            "options": [
              "Éthylméthylpropylamine",
              "Méthyléthylpropylamine",
              "Propylméthyléthylamine",
              "N-éthyl-N-méthylpropanamine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les trois radicaux alkyles fixés sur l'azote sont l'éthyle, le méthyle et le propyle. Par ordre alphabétique : éthylméthylpropylamine."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Piège d'examen : Ne pas confondre N- et un indice de carbone",
          "stepTheme": "Vigilance notation",
          "stepBadge": "N- vs Chiffre",
          "paragraphText": "Attention lors de la lecture d'un sujet : « 2-méthylpropanamine » désigne un méthyle greffé sur le carbone n°2 de la chaîne carbonée, tandis que « N-méthylpropanamine » désigne un méthyle greffé directement sur l'atome d'azote !",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p02_q5",
            "type": "mcq",
            "prompt": "Quelle est la différence structurale capitale entre la 2-méthylpropan-1-amine et la N-méthylpropan-1-amine ?",
            "options": [
              "Aucune, ce sont deux noms synonymes pour la même molécule.",
              "La première est une amine primaire (le méthyle est sur le carbone C2), tandis que la seconde est une amine secondaire (le méthyle est sur l'azote N).",
              "La première est une cétone et la seconde un éther.",
              "La première est aromatique et la seconde aliphatique."
            ],
            "correctAnswerIndex": 1,
            "explanation": "2-méthyl : ramification sur le carbone 2 (amine primaire R-NH2). N-méthyl : ramification sur l'azote (amine secondaire R-NH-CH3)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les amines aromatiques : l'aniline",
          "stepTheme": "Amines aromatiques",
          "stepBadge": "Aniline",
          "paragraphText": "Lorsque le groupe -NH2 est directement attaché à un anneau benzénique (C6H5-NH2), le composé est l'aniline ou phénylamine (ou benzénamine). Le doublet de l'azote est partiellement conjugué avec le cycle aromatique, ce qui diminue fortement son caractère basique (pKa ~ 4,6 au lieu de 10,7 pour les alkylamines).",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p02_q6",
            "type": "mcq",
            "prompt": "Quel est le nom systématique IUPAC et le nom usuel de l'amine aromatique C6H5-NH2 ?",
            "options": [
              "Benzénamine (nom usuel : aniline)",
              "Phénylamide (nom usuel : acétamide)",
              "Nitrotoluène (nom usuel : TNT)",
              "Benzylamine (nom usuel : pyridine)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C6H5-NH2 est la benzénamine (ou phénylamine), universellement connue sous le nom historique d'aniline (matière première des colorants synthétiques)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Passage d'une formule semi-développée à son nom IUPAC",
          "stepTheme": "Exercice d'application",
          "stepBadge": "Méthodologie",
          "paragraphText": "Soit l'amine tertiaire CH3-CH2-N(CH3)-CH2-CH2-CH3. La chaîne la plus longue partagée par l'azote est le propane (3 carbones). L'azote porte un groupe éthyle et un groupe méthyle. Par ordre alphabétique des substituants sur l'azote : N-éthyl-N-méthylpropan-1-amine.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p02_q7",
            "type": "mcq",
            "prompt": "Quel est le nom systématique de l'amine tertiaire : CH3-CH2-N(CH3)-CH2-CH2-CH3 ?",
            "options": [
              "N-éthyl-N-méthylpropan-1-amine",
              "N-méthyl-N-éthylpropan-1-amine",
              "Éthylméthylpropylméthanamine",
              "Hexan-3-amine disubstituée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaîne principale : propan-1-amine. Les substituants sur l'azote sont 'éthyl' et 'méthyl' (ordre alphabétique E avant M) -> N-éthyl-N-méthylpropan-1-amine."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l04_amines_p02_q1",
          "type": "mcq",
          "prompt": "Quel est le nom IUPAC (1ère méthode) de la molécule : CH3-CH(CH3)-CH2-NH2 ?",
          "options": [
            "2-méthylpropan-1-amine",
            "2-méthylpropan-3-amine",
            "Isobutylamine-1",
            "Butan-2-amine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le carbone lié au -NH2 est le C1. Le C2 porte le méthyle, et C3 est le CH3 terminal. La chaîne la plus longue compte 3 carbones : 2-méthylpropan-1-amine."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p02_q2",
          "type": "mcq",
          "prompt": "Quel est le nom officiel IUPAC de l'amine secondaire : CH3-CH2-CH2-NH-CH3 ?",
          "options": [
            "N-méthylpropan-1-amine",
            "1-méthylaminopropane",
            "Méthylpropylamine-1",
            "Butan-2-amine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La chaîne la plus longue est le propane (propan-1-amine). L'azote porte un groupe méthyle : N-méthylpropan-1-amine (ou N-méthylpropanamine)."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p02_q3",
          "type": "mcq",
          "prompt": "Quel est le nom de l'amine (C2H5)2NH selon la 2ème méthode officielle (méthode des alkylamines) ?",
          "options": [
            "Diéthanamine",
            "Diéthylamine",
            "N-éthyléthanamine",
            "Bis-éthylamine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Selon la 2ème méthode, les deux groupes alkyles identiques éthyles (-C2H5) fixés sur l'azote donnent directement le nom : diéthylamine."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p02_q4",
          "type": "mcq",
          "prompt": "Quel est le nom de l'amine CH3-N(C2H5)-CH2-CH2-CH3 selon la 2ème méthode ?",
          "options": [
            "Éthylméthylpropylamine",
            "Méthyléthylpropylamine",
            "Propylméthyléthylamine",
            "N-éthyl-N-méthylpropanamine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les trois radicaux alkyles fixés sur l'azote sont l'éthyle, le méthyle et le propyle. Par ordre alphabétique : éthylméthylpropylamine."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p02_q5",
          "type": "mcq",
          "prompt": "Quelle est la différence structurale capitale entre la 2-méthylpropan-1-amine et la N-méthylpropan-1-amine ?",
          "options": [
            "Aucune, ce sont deux noms synonymes pour la même molécule.",
            "La première est une amine primaire (le méthyle est sur le carbone C2), tandis que la seconde est une amine secondaire (le méthyle est sur l'azote N).",
            "La première est une cétone et la seconde un éther.",
            "La première est aromatique et la seconde aliphatique."
          ],
          "correctAnswerIndex": 1,
          "explanation": "2-méthyl : ramification sur le carbone 2 (amine primaire R-NH2). N-méthyl : ramification sur l'azote (amine secondaire R-NH-CH3)."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p02_q6",
          "type": "mcq",
          "prompt": "Quel est le nom systématique IUPAC et le nom usuel de l'amine aromatique C6H5-NH2 ?",
          "options": [
            "Benzénamine (nom usuel : aniline)",
            "Phénylamide (nom usuel : acétamide)",
            "Nitrotoluène (nom usuel : TNT)",
            "Benzylamine (nom usuel : pyridine)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C6H5-NH2 est la benzénamine (ou phénylamine), universellement connue sous le nom historique d'aniline (matière première des colorants synthétiques)."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p02_q7",
          "type": "mcq",
          "prompt": "Quel est le nom systématique de l'amine tertiaire : CH3-CH2-N(CH3)-CH2-CH2-CH3 ?",
          "options": [
            "N-éthyl-N-méthylpropan-1-amine",
            "N-méthyl-N-éthylpropan-1-amine",
            "Éthylméthylpropylméthanamine",
            "Hexan-3-amine disubstituée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaîne principale : propan-1-amine. Les substituants sur l'azote sont 'éthyl' et 'méthyl' (ordre alphabétique E avant M) -> N-éthyl-N-méthylpropan-1-amine."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l04_amines_p03",
      "order": 3,
      "title": "Propriétés chimiques : Caractère basique des amines et équilibre dans l'eau",
      "summary": "Doublet non liant sur l'azote, capteur de proton selon Brönsted, équilibre avec l'eau (production d'ions HO-), constante d'acidité Ka et pKa du couple R-NH3+ / R-NH2.",
      "conceptExplanation": "Les amines sont des bases de Brönsted : elles ont la capacité de capter un proton H+ grâce au doublet électronique non liant porté par l'atome d'azote.\n\n1. Réaction d'une amine avec l'eau (base faible) :\nEn solution aqueuse, les amines réagissent de manière réversible et partielle avec l'eau :\nR-NH2 + H2O <=====> R-NH3+ + HO-.\nCette réaction libère des ions hydroxyde HO-, ce qui confère à la solution aqueuse un caractère basique marqué (pH > 7) :\n- Le bleu de bromothymol (BBT) vire au bleu intense.\n- La phénolphtaléine vire au rose fuchsia.\n- Le papier pH indique généralement une valeur comprise entre 10 et 12.\n\n2. Le couple acido-basique ion alkylammonium / amine :\nLe couple s'écrit R-NH3+ / R-NH2 (acide conjugué / base).\nSa constante d'acidité Ka est associée à l'équilibre :\nR-NH3+ + H2O <=====> R-NH2 + H3O+.\nPour les alkylamines aliphatiques, le pKa de ce couple se situe aux alentours de 10 à 11 à 25 °C (méthylamine : pKa = 10,7 ; éthylamine : pKa = 10,8).\n\n3. Réaction totale avec les acides forts :\nEn présence d'un acide fort (acide chlorhydrique HCl, acide nitrique HNO3), l'amine réagit de façon totale et exothermique pour former un sel d'alkylammonium :\nR-NH2 + H3O+ ---> R-NH3+ + H2O (ou R-NH2 + HCl -> R-NH3+ Cl-).",
      "keyRule": "L'atome d'azote porte un doublet non liant qui attire et fixe un proton H+ : R-NH2 + H2O ⇌ R-NH3+ + HO-. Les amines sont des bases faibles (pKa ~ 10,7). Elles réagissent totalement avec les acides forts pour donner des sels d'ammonium solubles.",
      "formulas": [
        {
          "name": "Équilibre basique d'une amine dans l'eau",
          "formula": "\\mathrm{R-NH_2} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{R-NH_3^+} + \\mathrm{HO^-}",
          "note": "Production d'ions hydroxyde HO- responsables du pH basique"
        },
        {
          "name": "Constante d'acidité du couple alkylammonium / amine",
          "formula": "K_a = \\frac{[\\mathrm{R-NH_2}] \\cdot [\\mathrm{H_3O^+}]}{[\\mathrm{R-NH_3^+}]}, \\quad \\mathrm{pH} = \\mathrm{p}K_a + \\log\\left(\\frac{[\\mathrm{R-NH_2}]}{[\\mathrm{R-NH_3^+}]}\\right)",
          "note": "pKa compris entre 10 et 11 pour les amines aliphatiques saturées"
        }
      ],
      "workedExample": {
        "title": "Calcul du pH d'une solution aqueuse de méthylamine",
        "statement": "On prépare une solution de méthylamine CH3-NH2 de concentration C = 1,0 * 10^-2 mol/L. Le pKa du couple CH3-NH3+ / CH3-NH2 vaut 10,7 à 25 °C. Calcule le pH de cette solution basique.",
        "methodSteps": [
          "Étape 1 : Pour une base faible peu dissociée dans l'eau (alpha < 0,05), on applique la formule approchée : pH = 7 + 0,5 * (pKa + log C).",
          "Étape 2 : log C = log(10^-2) = -2,0.",
          "Étape 3 : Calculer le pH : pH = 7 + 0,5 * (10,7 + (-2,0)) = 7 + 0,5 * (8,7) = 7 + 4,35 = 11,35.",
          "Étape 4 : Vérifier la concentration en ions HO- : [HO-] = 10^(pH - 14) = 10^(11,35 - 14) = 10^(-2,65) = 2,24 * 10^-3 mol/L. Le taux d'ionisation vaut 2,24*10^-3 / 10^-2 = 0,22 (la formule approchée donne un ordre de grandeur cohérent montrant un milieu nettement basique)."
        ],
        "conclusion": "Le pH de la solution de méthylamine est d'environ 11,35 (milieu nettement alcalin)."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau comparatif du caractère basique : Ammoniac vs Amines vs Amides",
        "tableData": {
          "headers": [
            "Espèce",
            "Formule",
            "Disponibilité du doublet électronique de l'azote",
            "pKa du couple acide/base",
            "Caractère acido-basique dans l'eau"
          ],
          "rows": [
            [
              "Ammoniac",
              "NH3",
              "Doublet libre localisé sur N",
              "9,25",
              "Base faible"
            ],
            [
              "Éthylamine",
              "C2H5-NH2",
              "Doublet enrichi par l'effet donneur (+I) du groupe alkyle",
              "10,8",
              "Base faible plus forte que NH3"
            ],
            [
              "Diméthylamine",
              "(CH3)2NH",
              "Deux groupes donneurs alkyles",
              "10,7",
              "Base faible"
            ],
            [
              "Aniline",
              "C6H5-NH2",
              "Doublet délocalisé dans le cycle aromatique",
              "4,6",
              "Base très faible"
            ],
            [
              "Éthanamide",
              "CH3-CO-NH2",
              "Doublet délocalisé sur le carbonyle C=O",
              "< 0",
              "Espèce neutre (non basique)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Origine électronique de la basicité : le doublet non liant",
          "stepTheme": "Caractère basique",
          "stepBadge": "Doublet non liant",
          "paragraphText": "L'atome d'azote (Z = 7) possède 5 électrons de valence : 3 électrons célibataires engagés dans des liaisons covalentes et 1 doublet électronique non liant libre. Ce doublet présente une forte densité de charge négative capable d'attirer et de lier par liaison dative (coordinence) un proton H+ démuni d'électrons.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p03_q1",
            "type": "mcq",
            "prompt": "Quelle caractéristique structurale fondamentale de l'atome d'azote confère aux amines leurs propriétés de base de Brönsted ?",
            "options": [
              "La présence d'une orbitale d vide.",
              "La présence d'un doublet électronique non liant disponible sur la couche externe de l'azote.",
              "Le fait que l'azote est un métal de transition.",
              "L'absence totale d'électrons de valence."
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la présence du doublet non liant sur l'azote qui permet de capter un proton H+ pour former un ion alkylammonium R-NH3+."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Effet donneur inductif des groupements alkyles (+I)",
          "stepTheme": "Force basique",
          "stepBadge": "Effet inductif +I",
          "paragraphText": "Les groupements alkyles saturés (méthyle, éthyle) sont électrodonneurs par effet inductif (+I). En repoussant les électrons vers l'azote, ils augmentent la densité électronique du doublet non liant, rendant les alkylamines aliphatiques encore plus basiques que l'ammoniac NH3 (pKa ~ 10,7 contre 9,25 pour NH4+/NH3).",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p03_q2",
            "type": "mcq",
            "prompt": "Pourquoi la méthylamine CH3-NH2 (pKa = 10,7) est-elle une base plus forte dans l'eau que l'ammoniac NH3 (pKa = 9,25) ?",
            "options": [
              "Parce que la méthylamine est plus dense que l'ammoniac.",
              "Parce que le groupe méthyle -CH3 exerce un effet inductif donneur (+I) qui enrichit l'azote en électrons et facilite la capture d'un proton H+.",
              "Parce que la molécule d'ammoniac ne possède aucun doublet non liant.",
              "Parce que l'ammoniac est un acide fort."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'effet inductif donneur d'électrons (+I) du groupe méthyle augmente la disponibilité du doublet de l'azote, renforçant le caractère basique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Action sur les indicateurs colorés usuels",
          "stepTheme": "Tests acido-basiques",
          "stepBadge": "BBT et Phénolphtaléine",
          "paragraphText": "Une solution aqueuse d'amine fait virer le bleu de bromothymol (BBT) au bleu franc (zone de virage 6,0-7,6) et la phénolphtaléine à l'incolore vers le rose-violacé soutenu (virage à pH > 8,2), attestant sans ambiguïté de la présence prépondérante d'ions hydroxyde HO-.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p03_q3",
            "type": "mcq",
            "prompt": "On verse quelques gouttes de bleu de bromothymol (BBT) dans une solution aqueuse d'éthylamine C2H5-NH2. Quelle teinte prend immédiatement la solution ?",
            "options": [
              "Jaune d'or (milieu acide)",
              "Vert émeraude (milieu strictement neutre)",
              "Bleu soutenu (milieu basique)",
              "Rouge écarlate"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'éthylamine s'ionise partiellement en libérant des ions HO- : le milieu devient basique (pH > 7,6), ce qui fait virer le BBT au bleu."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Réaction totale avec l'acide chlorhydrique : les fumées blanches de chlorure d'ammonium",
          "stepTheme": "Neutralisation acide fort",
          "stepBadge": "Formation de sel",
          "paragraphText": "Lorsqu'on approche une tige de verre imprégnée d'ammoniaque ou d'amine volatile (méthylamine) d'un flacon d'acide chlorhydrique fumant, les vapeurs de base et de HCl réagissent instantanément en phase gazeuse pour former un brouillard blanc épais constitué de microcristaux solides de sel d'ammonium : CH3-NH2(g) + HCl(g) -> CH3-NH3+ Cl-(s).",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p03_q4",
            "type": "mcq",
            "prompt": "Quelle réaction explique l'apparition d'une fumée blanche dense lorsqu'on met en présence des vapeurs de méthylamine et des vapeurs de chlorure d'hydrogène ?",
            "options": [
              "Une réaction d'oxydation violente formant du diazote et du chlore.",
              "La condensation de l'eau présente dans l'atmosphère.",
              "Une réaction acido-basique quantitative formant des microcristaux solides en suspension de chlorure de méthylammonium CH3NH3+ Cl-.",
              "La fusion du verre de la tige."
            ],
            "correctAnswerIndex": 2,
            "explanation": "CH3-NH2(g) + HCl(g) -> CH3-NH3+ Cl-(s). Ce sel ionique solide blanc en suspension dans l'air forme le brouillard de fumée blanche."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Dosage acido-basique d'une amine par un acide fort",
          "stepTheme": "Titrage volumétrique",
          "stepBadge": "Équivalence acido-basique",
          "paragraphText": "Lors du titrage d'une solution d'amine B de volume Vb et concentration Cb par un acide fort (H3O+ + Cl-) de concentration Ca, l'équivalence a lieu quand n(H3O+) versé = n(amine) initiale : Ca * Vae = Cb * Vb. Au point d'équivalence, la solution contient l'acide faible conjugué R-NH3+ : le pH à l'équivalence est donc légèrement acide (pHe < 7, généralement entre 5 et 6). L'indicateur approprié est le rouge de méthyle (et non le BBT ou la phénolphtaléine).",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p03_q5",
            "type": "mcq",
            "prompt": "On titre 20 mL d'une solution de propanamine par de l'acide chlorhydrique à 0,10 mol/L. Le volume à l'équivalence est Vae = 12 mL. Quelle est la concentration de l'amine et la nature du pH à l'équivalence ?",
            "options": [
              "Cb = 0,060 mol/L avec un pH équivalent basique (pHe > 7)",
              "Cb = 0,060 mol/L avec un pH équivalent légèrement acide (pHe < 7) dû à la présence des ions propanammonium R-NH3+",
              "Cb = 0,12 mol/L avec un pH strictement neutre de 7",
              "Cb = 0,020 mol/L"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Cb = (Ca * Vae) / Vb = (0,10 * 12) / 20 = 0,060 mol/L. À l'équivalence, tout le réactif a été transformé en sa forme acide conjuguée R-NH3+, ce qui rend le pH à l'équivalence acide (pHe < 7)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège d'examen : Ne pas oublier les ions spectateurs dans l'équation d'ionisation",
          "stepTheme": "Rédaction d'équations",
          "stepBadge": "Équation ionique",
          "paragraphText": "Lorsqu'on dissout une amine dans l'eau, il n'y a pas de sel de départ : la réaction est un équilibre réversible avec l'eau (R-NH2 + H2O ⇌ R-NH3+ + HO-). Mais lorsqu'on fait réagir l'amine avec l'acide chlorhydrique, la réaction est TOTALE et s'écrit sous forme ionique : R-NH2 + H3O+ -> R-NH3+ + H2O.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p03_q6",
            "type": "mcq",
            "prompt": "Quelle équation-bilan représente rigoureusement l'action de l'acide chlorhydrique (H3O+ + Cl-) sur une solution aqueuse d'éthylamine ?",
            "options": [
              "C2H5-NH2 + H2O ⇌ C2H5-NH3+ + HO-",
              "C2H5-NH2 + H3O+ -> C2H5-NH3+ + H2O",
              "C2H5-NH2 + Cl- -> C2H5-NHCl + H+",
              "C2H5-NH2 + H3O+ ⇌ C2H5-NH- + 2 H2O"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'acide fort H3O+ réagit totalement avec la base éthylamine pour donner son acide conjugué, l'ion éthylammonium C2H5-NH3+, et de l'eau."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Diagramme de prédominance du couple alkylammonium / amine",
          "stepTheme": "Diagramme de prédominance",
          "stepBadge": "pH et pKa",
          "paragraphText": "D'après la relation d'Henderson-Hasselbalch pH = pKa + log([B]/[BH+]) :\n- Si pH < pKa : l'espèce acide ionisée R-NH3+ prédomine en solution (l'amine est sous forme de sel d'ammonium très soluble dans l'eau) ;\n- Si pH = pKa : il y a autant d'amine libre R-NH2 que d'ion ammonium R-NH3+ ;\n- Si pH > pKa : l'amine libre neutre R-NH2 prédomine (plus volatile et extractible par les solvants organiques).",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p03_q7",
            "type": "mcq",
            "prompt": "Le pKa du couple CH3-NH3+ / CH3-NH2 vaut 10,7. Dans un suc gastrique très acide où le pH vaut 2,0, sous quelle forme chimique la méthylamine se trouve-t-elle quasi exclusivement ?",
            "options": [
              "Sous forme de méthylamine libre volatile CH3-NH2 à plus de 99,9 %.",
              "Sous forme d'ion méthylammonium protoné CH3-NH3+ à plus de 99,9 %.",
              "Sous forme de dimère insoluble déshydraté.",
              "Sous forme d'ion amidure CH3-NH-."
            ],
            "correctAnswerIndex": 1,
            "explanation": "À pH = 2,0, on est largement en dessous du pKa (pH < pKa - 2) : la forme acide protonée CH3-NH3+ prédomine très largement (rapport [BH+]/[B] = 10^(10,7 - 2) ~ 5 * 10^8)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l04_amines_p03_q1",
          "type": "mcq",
          "prompt": "Quelle caractéristique structurale fondamentale de l'atome d'azote confère aux amines leurs propriétés de base de Brönsted ?",
          "options": [
            "La présence d'une orbitale d vide.",
            "La présence d'un doublet électronique non liant disponible sur la couche externe de l'azote.",
            "Le fait que l'azote est un métal de transition.",
            "L'absence totale d'électrons de valence."
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la présence du doublet non liant sur l'azote qui permet de capter un proton H+ pour former un ion alkylammonium R-NH3+."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p03_q2",
          "type": "mcq",
          "prompt": "Pourquoi la méthylamine CH3-NH2 (pKa = 10,7) est-elle une base plus forte dans l'eau que l'ammoniac NH3 (pKa = 9,25) ?",
          "options": [
            "Parce que la méthylamine est plus dense que l'ammoniac.",
            "Parce que le groupe méthyle -CH3 exerce un effet inductif donneur (+I) qui enrichit l'azote en électrons et facilite la capture d'un proton H+.",
            "Parce que la molécule d'ammoniac ne possède aucun doublet non liant.",
            "Parce que l'ammoniac est un acide fort."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'effet inductif donneur d'électrons (+I) du groupe méthyle augmente la disponibilité du doublet de l'azote, renforçant le caractère basique."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p03_q3",
          "type": "mcq",
          "prompt": "On verse quelques gouttes de bleu de bromothymol (BBT) dans une solution aqueuse d'éthylamine C2H5-NH2. Quelle teinte prend immédiatement la solution ?",
          "options": [
            "Jaune d'or (milieu acide)",
            "Vert émeraude (milieu strictement neutre)",
            "Bleu soutenu (milieu basique)",
            "Rouge écarlate"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'éthylamine s'ionise partiellement en libérant des ions HO- : le milieu devient basique (pH > 7,6), ce qui fait virer le BBT au bleu."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p03_q4",
          "type": "mcq",
          "prompt": "Quelle réaction explique l'apparition d'une fumée blanche dense lorsqu'on met en présence des vapeurs de méthylamine et des vapeurs de chlorure d'hydrogène ?",
          "options": [
            "Une réaction d'oxydation violente formant du diazote et du chlore.",
            "La condensation de l'eau présente dans l'atmosphère.",
            "Une réaction acido-basique quantitative formant des microcristaux solides en suspension de chlorure de méthylammonium CH3NH3+ Cl-.",
            "La fusion du verre de la tige."
          ],
          "correctAnswerIndex": 2,
          "explanation": "CH3-NH2(g) + HCl(g) -> CH3-NH3+ Cl-(s). Ce sel ionique solide blanc en suspension dans l'air forme le brouillard de fumée blanche."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p03_q5",
          "type": "mcq",
          "prompt": "On titre 20 mL d'une solution de propanamine par de l'acide chlorhydrique à 0,10 mol/L. Le volume à l'équivalence est Vae = 12 mL. Quelle est la concentration de l'amine et la nature du pH à l'équivalence ?",
          "options": [
            "Cb = 0,060 mol/L avec un pH équivalent basique (pHe > 7)",
            "Cb = 0,060 mol/L avec un pH équivalent légèrement acide (pHe < 7) dû à la présence des ions propanammonium R-NH3+",
            "Cb = 0,12 mol/L avec un pH strictement neutre de 7",
            "Cb = 0,020 mol/L"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Cb = (Ca * Vae) / Vb = (0,10 * 12) / 20 = 0,060 mol/L. À l'équivalence, tout le réactif a été transformé en sa forme acide conjuguée R-NH3+, ce qui rend le pH à l'équivalence acide (pHe < 7)."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p03_q6",
          "type": "mcq",
          "prompt": "Quelle équation-bilan représente rigoureusement l'action de l'acide chlorhydrique (H3O+ + Cl-) sur une solution aqueuse d'éthylamine ?",
          "options": [
            "C2H5-NH2 + H2O ⇌ C2H5-NH3+ + HO-",
            "C2H5-NH2 + H3O+ -> C2H5-NH3+ + H2O",
            "C2H5-NH2 + Cl- -> C2H5-NHCl + H+",
            "C2H5-NH2 + H3O+ ⇌ C2H5-NH- + 2 H2O"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'acide fort H3O+ réagit totalement avec la base éthylamine pour donner son acide conjugué, l'ion éthylammonium C2H5-NH3+, et de l'eau."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p03_q7",
          "type": "mcq",
          "prompt": "Le pKa du couple CH3-NH3+ / CH3-NH2 vaut 10,7. Dans un suc gastrique très acide où le pH vaut 2,0, sous quelle forme chimique la méthylamine se trouve-t-elle quasi exclusivement ?",
          "options": [
            "Sous forme de méthylamine libre volatile CH3-NH2 à plus de 99,9 %.",
            "Sous forme d'ion méthylammonium protoné CH3-NH3+ à plus de 99,9 %.",
            "Sous forme de dimère insoluble déshydraté.",
            "Sous forme d'ion amidure CH3-NH-."
          ],
          "correctAnswerIndex": 1,
          "explanation": "À pH = 2,0, on est largement en dessous du pKa (pH < pKa - 2) : la forme acide protonée CH3-NH3+ prédomine très largement (rapport [BH+]/[B] = 10^(10,7 - 2) ~ 5 * 10^8)."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l04_amines_p04",
      "order": 4,
      "title": "Caractère nucléophile et réaction d'alkylation d'Hofmann",
      "summary": "Attaque de l'azote nucléophile sur le carbone électrophile d'un halogénoalcane R-X, alkylations successives menant aux sels d'ammonium quaternaire.",
      "conceptExplanation": "En plus de son caractère basique (capteur de protons), le doublet non liant de l'azote confère aux amines un puissant CARACTÈRE NUCLÉOPHILE : l'aptitude à attaquer un atome de carbone porteur d'une charge partielle positive delta+ dans une molécule organique.\n\n1. Principe de la réaction d'alkylation d'Hofmann :\nL'amine réagit avec un dérivé halogéné (halogénoalcane R'-X, avec X = I, Br ou Cl). Dans R'-X, la liaison C-X est fortement polarisée vers l'halogène électronégatif (carbone électrophile delta+).\nL'azote nucléophile de l'amine attaque ce carbone et expulse l'ion halogénure X- :\n- Étape 1 : Attaque nucléophile donnant un sel d'ammonium halogéné intermédiaire :\nR-NH2 + R'-X ---> (R-NH2-R')+ + X-.\n- Étape 2 : Déprotonation par une base ou par l'amine en excès pour libérer une amine de classe supérieure :\n(R-NH2-R')+ + X- + R-NH2 ---> R-NH-R' + R-NH3+ X- (ou R-NH-R' + HX).\n\n2. Alkylation en cascade (polyalkylation d'Hofmann) :\nComme l'amine formée est plus nucléophile que l'amine de départ (effet donneur du groupe alkyle supplémentaire), la réaction ne s'arrête pas :\n- Amine primaire (R-NH2) + R'-X ---> Amine secondaire (R-NH-R') + HX\n- Amine secondaire (R-NH-R') + R'-X ---> Amine tertiaire (R-N(R')2) + HX\n- Amine tertiaire (R-N(R')2) + R'-X ---> Sel d'ammonium quaternaire ([R-N(R')3]+ X-).\n\n3. Le stade ultime : le sel d'ammonium quaternaire :\nL'amine tertiaire ne possédant plus d'hydrogène sur l'azote, l'attaque finale sur R'-X forme un cation tétraalkylammonium tétraédrique stable [R4N]+ associé à l'anion X-. Ce solide cristallisé blanc ne possède plus aucun doublet libre : la réaction d'Hofmann s'achève définitivement à ce stade.",
      "keyRule": "L'alkylation d'Hofmann transforme successivement : Amine I -> Amine II -> Amine III -> Sel d'ammonium quaternaire [R4N]+ X-. Le sel quaternaire est le stade ultime d'alkylation.",
      "formulas": [
        {
          "name": "Alkylation d'une amine primaire vers amine secondaire",
          "formula": "\\mathrm{R-NH_2} + \\mathrm{R'-X} \\longrightarrow \\mathrm{R-NH-R'} + \\mathrm{HX}",
          "note": "Attaque nucléophile de l'azote sur le carbone électrophile"
        },
        {
          "name": "Stade final : formation du sel d'ammonium quaternaire",
          "formula": "\\mathrm{R_3N} + \\mathrm{R-X} \\longrightarrow [\\mathrm{R_4N}]^+ \\mathrm{X^-}",
          "note": "Cristaux ioniques de sel d'halogénure de tétraalkylammonium"
        }
      ],
      "workedExample": {
        "title": "Synthèse de l'iodure de tétraéthylammonium",
        "statement": "On fait réagir de la triéthylamine (C2H5)3N avec de l'iodoéthane (C2H5-I). Écris l'équation de la réaction et nomme le composé obtenu.",
        "methodSteps": [
          "Étape 1 : Identifier la classe de l'amine de départ : (C2H5)3N est une amine tertiaire.",
          "Étape 2 : Identifier le réactif halogéné : C2H5-I (iodoéthane).",
          "Étape 3 : L'azote attaque le carbone du groupe éthyle et fixe un quatrième groupe éthyle : (C2H5)3N + C2H5-I ---> [(C2H5)4N]+ + I-.",
          "Étape 4 : Nommer le sel ionique formé : iodure de tétraéthylammonium."
        ],
        "conclusion": "Le produit formé est un sel d'ammonium quaternaire : l'iodure de tétraéthylammonium [(C2H5)4N]+ I-."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Schéma de la cascade d'alkylation d'Hofmann",
        "tableData": {
          "headers": [
            "Étape de la réaction",
            "Réactif azoté de départ",
            "Agent alkylant",
            "Produit organique obtenu",
            "Classe obtenue"
          ],
          "rows": [
            [
              "Étape 1",
              "Ammoniac NH3",
              "R-X (1 équivalent)",
              "R-NH2 + HX",
              "Amine primaire"
            ],
            [
              "Étape 2",
              "Amine primaire R-NH2",
              "R-X (2ème équivalent)",
              "R-NH-R + HX",
              "Amine secondaire"
            ],
            [
              "Étape 3",
              "Amine secondaire R2NH",
              "R-X (3ème équivalent)",
              "R3N + HX",
              "Amine tertiaire"
            ],
            [
              "Étape 4 (Finale)",
              "Amine tertiaire R3N",
              "R-X (4ème équivalent)",
              "[R4N]+ X-",
              "Sel d'ammonium quaternaire"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la nucléophilie de l'azote",
          "stepTheme": "Nucléophilie",
          "stepBadge": "Caractère nucléophile",
          "paragraphText": "Une espèce nucléophile (qui « aime les noyaux ») possède un doublet d'électrons disponible pour attaquer un centre déficitaire en électrons (centre électrophile). Dans les amines, l'atome d'azote est un excellent nucléophile capable d'attaquer les carbones polarisés positivement des halogénoalcanes.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p04_q1",
            "type": "mcq",
            "prompt": "Dans la réaction d'Hofmann entre la méthylamine CH3-NH2 et le chlorométhane CH3-Cl, quel est le centre nucléophile et quel est le centre électrophile ?",
            "options": [
              "L'atome de chlore est le nucléophile et l'azote est l'électrophile.",
              "L'atome d'azote de l'amine est le centre nucléophile (doublet libre), et le carbone lié au chlore dans CH3-Cl est le centre électrophile (charge delta+).",
              "Le carbone de la méthylamine est le centre nucléophile.",
              "L'hydrogène de l'amine est le centre électrophile."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'azote riche en électrons attaque le carbone polarisé positivement du chlorométhane : c'est une substitution nucléophile bimoléculaire."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'alkylation d'une amine primaire vers une amine secondaire",
          "stepTheme": "Réaction d'Hofmann",
          "stepBadge": "Vers l'amine II",
          "paragraphText": "Lorsqu'on fait réagir de la méthylamine avec du chlorométhane, l'azote attaque le carbone du chlorométhane en expulsant un ion chlorure Cl-. Le sel d'ammonium intermédiaire est neutralisé pour libérer la diméthylamine (amine secondaire) et du chlorure d'hydrogène : CH3-NH2 + CH3-Cl -> (CH3)2NH + HCl.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p04_q2",
            "type": "mcq",
            "prompt": "Quel produit organique de classe supérieure obtient-on lors de la première alkylation de la méthylamine par le chlorométhane ?",
            "options": [
              "Le méthanamide",
              "La diméthylamine (ou N-méthylméthanamine)",
              "Le méthanol",
              "La triméthylamine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'addition d'un groupe méthyle sur la méthylamine (primaire) produit la diméthylamine (amine secondaire)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'alkylation d'une amine secondaire vers une amine tertiaire",
          "stepTheme": "Réaction d'Hofmann",
          "stepBadge": "Vers l'amine III",
          "paragraphText": "La diméthylamine formée réagit à son tour avec une nouvelle molécule de chlorométhane : (CH3)2NH + CH3-Cl -> (CH3)3N + HCl. On obtient la triméthylamine, une amine tertiaire.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p04_q3",
            "type": "mcq",
            "prompt": "Quelle équation-bilan traduit l'alkylation de la N,N-diéthylamine (amine secondaire) par l'iodoéthane ?",
            "options": [
              "(C2H5)2NH + C2H5-I -> (C2H5)3N + HI",
              "(C2H5)2NH + C2H5-I -> (C2H5)4N+ + I-",
              "(C2H5)2NH + C2H5-I -> C2H6 + NH3 + I2",
              "(C2H5)2NH + 2 C2H5-I -> (C2H5)3N + 2 HI"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'amine secondaire (C2H5)2NH incorpore un troisième groupe éthyle pour former l'amine tertiaire (C2H5)3N (triéthylamine) et de l'iodure d'hydrogène HI."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le stade terminal : sel d'ammonium quaternaire",
          "stepTheme": "Réaction d'Hofmann",
          "stepBadge": "Sel quaternaire",
          "paragraphText": "L'amine tertiaire ne possédant plus d'atome d'hydrogène à éliminer, son attaque nucléophile sur une molécule supplémentaire d'halogénoalcane conduit obligatoirement à la fixation définitive du quatrième groupe alkyle sur l'azote, formant un sel ionique quaternaire : R3N + R-X -> [R4N]+ X-. Cette liaison est irréversible dans ces conditions : la polyalkylation s'arrête ici.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p04_q4",
            "type": "mcq",
            "prompt": "Pourquoi la réaction d'alkylation d'Hofmann s'arrête-t-elle nécessairement et définitivement après la formation du sel d'ammonium quaternaire [R4N]+ X- ?",
            "options": [
              "Parce que le ballon se brise sous l'effet de la pression.",
              "Parce que l'atome d'azote est désormais lié à 4 groupements carbonés et a engagé son doublet non liant : il ne possède plus aucun doublet libre pour réaliser une nouvelle attaque nucléophile.",
              "Parce que la température devient négative.",
              "Parce que le produit devient un gaz inflammable."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans le cation ammonium quaternaire [R4N]+, les 4 paires d'électrons de l'azote sont engagées dans 4 liaisons covalentes : l'azote n'a plus de doublet non liant, ce qui met un terme absolu à la nucléophilie."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Comment favoriser sélectivement l'amine primaire ou le sel quaternaire",
          "stepTheme": "Optimisation de synthèse",
          "stepBadge": "Conditions opératoires",
          "paragraphText": "En synthèse industrielle :\n- Si l'on désire obtenir principalement l'amine primaire, on introduit l'ammoniac NH3 en TRÈS LARGE EXCÈS par rapport à l'halogénoalcane (pour que chaque R-X ne rencontre statistiquement que des molécules NH3) ;\n- Si l'on désire obtenir exclusivement le sel d'ammonium quaternaire [R4N]+ X-, on introduit l'halogénoalcane R-X en TRÈS LARGE EXCÈS.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p04_q5",
            "type": "mcq",
            "prompt": "Pour préparer de l'éthylamine C2H5-NH2 avec un minimum de sous-produits polyalkylés indésirables à partir de chlorométhane ou de chloroéthane, comment doit-on ajuster le rapport des réactifs ?",
            "options": [
              "Mettre l'ammoniac NH3 en très large excès stœchiométrique devant l'halogénoalcane.",
              "Mettre l'halogénoalcane en très large excès devant l'ammoniac.",
              "Mélanger les deux réactifs en proportions exactement équimolaires 1:1.",
              "Opérer sous vide absolu sans aucun solvant."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un large excès d'ammoniac garantit que les molécules R-X réagissent quasi exclusivement avec NH3, minimisant les réactions secondaires de polyalkylation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Application aux tensioactifs et antiseptiques quaternaires",
          "stepTheme": "Applications sociétales",
          "stepBadge": "Tensioactifs cationiques",
          "paragraphText": "Les sels d'ammonium quaternaire possédant une longue chaîne alkyle (ex : chlorure de cétyltriméthylammonium ou chlorure de benzalkonium) sont des tensioactifs cationiques majeurs. Leurs propriétés bactéricides puissantes les rendent indispensables dans les désinfectants hospitaliers, les collyres antiseptiques et les après-shampooings démêlants.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p04_q6",
            "type": "mcq",
            "prompt": "Dans quel domaine médical et d'hygiène les sels d'ammonium quaternaires sont-ils couramment exploités pour leurs propriétés bactéricides remarquables ?",
            "options": [
              "Comme anesthésiques gazeux dans les blocs opératoires.",
              "Comme agents antiseptiques et désinfectants pour la stérilisation des instruments médicaux et de la peau.",
              "Comme substituts du sucre pour diabétiques.",
              "Comme sources d'énergie dans les pacemakers."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Leur pôle cationique [R4N]+ détruit la membrane cellulaire des bactéries, ce qui en fait de puissants antiseptiques locaux et désinfectants hospitaliers."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège d'examen : Différencier basophilie et nucléophilie",
          "stepTheme": "Raisonnement avancé",
          "stepBadge": "Base vs Nucléophile",
          "paragraphText": "La basicité est une grandeur thermodynamique qui mesure la tendance du doublet de l'azote à capter un PROTON H+ minuscule. La nucléophilie est une grandeur cinétique qui mesure la vitesse à laquelle ce doublet attaque un atome de CARBONE volumineux. Une amine très encombrée par de gros groupes alkyles peut être une base forte mais un mauvais nucléophile (encombrement stérique).",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p04_q7",
            "type": "mcq",
            "prompt": "Quelle est la nuance conceptuelle essentielle entre le caractère « basique » et le caractère « nucléophile » d'une amine ?",
            "options": [
              "Il n'y a aucune différence, ce sont deux termes rigoureusement identiques.",
              "Le caractère basique concerne l'affinité pour un proton H+, tandis que le caractère nucléophile concerne l'attaque sur un atome de carbone électrophile.",
              "Le caractère basique s'applique uniquement aux métaux et le caractère nucléophile aux gaz.",
              "Le caractère nucléophile disparaît en présence d'eau pure."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une base attaque un proton H+ (équilibre acide-base), tandis qu'un nucléophile attaque un atome de carbone carboné (cinétique de substitution nucléophile)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l04_amines_p04_q1",
          "type": "mcq",
          "prompt": "Dans la réaction d'Hofmann entre la méthylamine CH3-NH2 et le chlorométhane CH3-Cl, quel est le centre nucléophile et quel est le centre électrophile ?",
          "options": [
            "L'atome de chlore est le nucléophile et l'azote est l'électrophile.",
            "L'atome d'azote de l'amine est le centre nucléophile (doublet libre), et le carbone lié au chlore dans CH3-Cl est le centre électrophile (charge delta+).",
            "Le carbone de la méthylamine est le centre nucléophile.",
            "L'hydrogène de l'amine est le centre électrophile."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'azote riche en électrons attaque le carbone polarisé positivement du chlorométhane : c'est une substitution nucléophile bimoléculaire."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p04_q2",
          "type": "mcq",
          "prompt": "Quel produit organique de classe supérieure obtient-on lors de la première alkylation de la méthylamine par le chlorométhane ?",
          "options": [
            "Le méthanamide",
            "La diméthylamine (ou N-méthylméthanamine)",
            "Le méthanol",
            "La triméthylamine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'addition d'un groupe méthyle sur la méthylamine (primaire) produit la diméthylamine (amine secondaire)."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p04_q3",
          "type": "mcq",
          "prompt": "Quelle équation-bilan traduit l'alkylation de la N,N-diéthylamine (amine secondaire) par l'iodoéthane ?",
          "options": [
            "(C2H5)2NH + C2H5-I -> (C2H5)3N + HI",
            "(C2H5)2NH + C2H5-I -> (C2H5)4N+ + I-",
            "(C2H5)2NH + C2H5-I -> C2H6 + NH3 + I2",
            "(C2H5)2NH + 2 C2H5-I -> (C2H5)3N + 2 HI"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'amine secondaire (C2H5)2NH incorpore un troisième groupe éthyle pour former l'amine tertiaire (C2H5)3N (triéthylamine) et de l'iodure d'hydrogène HI."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p04_q4",
          "type": "mcq",
          "prompt": "Pourquoi la réaction d'alkylation d'Hofmann s'arrête-t-elle nécessairement et définitivement après la formation du sel d'ammonium quaternaire [R4N]+ X- ?",
          "options": [
            "Parce que le ballon se brise sous l'effet de la pression.",
            "Parce que l'atome d'azote est désormais lié à 4 groupements carbonés et a engagé son doublet non liant : il ne possède plus aucun doublet libre pour réaliser une nouvelle attaque nucléophile.",
            "Parce que la température devient négative.",
            "Parce que le produit devient un gaz inflammable."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans le cation ammonium quaternaire [R4N]+, les 4 paires d'électrons de l'azote sont engagées dans 4 liaisons covalentes : l'azote n'a plus de doublet non liant, ce qui met un terme absolu à la nucléophilie."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p04_q5",
          "type": "mcq",
          "prompt": "Pour préparer de l'éthylamine C2H5-NH2 avec un minimum de sous-produits polyalkylés indésirables à partir de chlorométhane ou de chloroéthane, comment doit-on ajuster le rapport des réactifs ?",
          "options": [
            "Mettre l'ammoniac NH3 en très large excès stœchiométrique devant l'halogénoalcane.",
            "Mettre l'halogénoalcane en très large excès devant l'ammoniac.",
            "Mélanger les deux réactifs en proportions exactement équimolaires 1:1.",
            "Opérer sous vide absolu sans aucun solvant."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un large excès d'ammoniac garantit que les molécules R-X réagissent quasi exclusivement avec NH3, minimisant les réactions secondaires de polyalkylation."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p04_q6",
          "type": "mcq",
          "prompt": "Dans quel domaine médical et d'hygiène les sels d'ammonium quaternaires sont-ils couramment exploités pour leurs propriétés bactéricides remarquables ?",
          "options": [
            "Comme anesthésiques gazeux dans les blocs opératoires.",
            "Comme agents antiseptiques et désinfectants pour la stérilisation des instruments médicaux et de la peau.",
            "Comme substituts du sucre pour diabétiques.",
            "Comme sources d'énergie dans les pacemakers."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Leur pôle cationique [R4N]+ détruit la membrane cellulaire des bactéries, ce qui en fait de puissants antiseptiques locaux et désinfectants hospitaliers."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p04_q7",
          "type": "mcq",
          "prompt": "Quelle est la nuance conceptuelle essentielle entre le caractère « basique » et le caractère « nucléophile » d'une amine ?",
          "options": [
            "Il n'y a aucune différence, ce sont deux termes rigoureusement identiques.",
            "Le caractère basique concerne l'affinité pour un proton H+, tandis que le caractère nucléophile concerne l'attaque sur un atome de carbone électrophile.",
            "Le caractère basique s'applique uniquement aux métaux et le caractère nucléophile aux gaz.",
            "Le caractère nucléophile disparaît en présence d'eau pure."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une base attaque un proton H+ (équilibre acide-base), tandis qu'un nucléophile attaque un atome de carbone carboné (cinétique de substitution nucléophile)."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l04_amines_p05",
      "order": 5,
      "title": "Importance des amines : Alcaloïdes naturels, toxines et synthèse industrielle",
      "summary": "Toxines naturelles (tétrodotoxine du poisson globe), alcaloïdes thérapeutiques (quinine, morphine), synthèse de colorants (aniline) et engrais azotés.",
      "conceptExplanation": "Les amines occupent une place centrale dans les sciences de la vie, la toxicologie et l'industrie chimique mondiale :\n\n1. Les amines naturelles et toxines végétales/animales :\n- La tétrodotoxine (TTX) : présente chez le poisson tétrodon (fugu ou poisson-globe). C'est l'un des poisons neurotoxiques les plus violents connus au monde (bloqueur des canaux sodium des neurones), mortel à dose infime (quelques milligrammes). Sa structure moléculaire comporte plusieurs fonctions amines et guanidines.\n- Les alcaloïdes : substances azotées basiques extraites des plantes :\n  * La quinine : extraite de l'écorce de quinquina, elle a été le tout premier médicament efficace contre le paludisme (malaria). Elle reste utilisée contre les souches de Plasmodium falciparum résistantes aux autres antipaludiques.\n  * La morphine : extraite du pavot somnifère (opium), c'est l'antalgique de référence le plus puissant contre les douleurs intenses rebelles.\n  * La nicotine (tabac) et la caféine (café) sont également des alcaloïdes aminés agissant sur le système nerveux central.\n\n2. Les amines dans l'industrie chimique :\n- Synthèse de matières plastiques : le nylon-6,6 est synthétisé par polycondensation d'une diamine (hexaméthylènediamine) et d'un diacide (acide adipique).\n- Synthèse de colorants : l'aniline (C6H5-NH2) est la matière première des colorants azoïques industriels.\n- Fabrication d'insecticides, d'engrais et de produits pharmaceutiques.",
      "keyRule": "De nombreux médicaments vitaux (quinine antipaludique, morphine antalgique) et toxines foudroyantes (tétrodotoxine) sont des amines naturelles ou alcaloïdes.",
      "formulas": [],
      "workedExample": {
        "title": "Identification du rôle thérapeutique de la quinine",
        "statement": "Dans le cadre de la lutte contre les grandes endémies en Afrique de l'Ouest, quel a été le rôle historique et médical déterminant de la quinine ?",
        "methodSteps": [
          "Étape 1 : Identifier la famille chimique : la quinine est un alcaloïde naturel comportant des fonctions amines.",
          "Étape 2 : Origine : extraite de l'écorce de l'arbre quinquina.",
          "Étape 3 : Rôle médical : premier antipaludéen majeur capable de détruire le parasite Plasmodium dans le sang des malades.",
          "Étape 4 : Statut actuel : traitement de recours indispensable contre les formes graves de paludisme résistant."
        ],
        "conclusion": "La quinine est l'alcaloïde aminé de référence historique dans le traitement curatif du paludisme."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau récapitulatif des amines remarquables du vivant et de l'industrie",
        "tableData": {
          "headers": [
            "Molécule",
            "Origine naturelle / Synthèse",
            "Propriété biologique ou industrielle",
            "Usage principal"
          ],
          "rows": [
            [
              "Quinine",
              "Écorce de quinquina (naturelle)",
              "Antipaludique puissant",
              "Traitement des crises de paludisme résistant"
            ],
            [
              "Morphine",
              "Pavot somnifère (naturelle)",
              "Analgésique stupéfiant central",
              "Soulagement des douleurs extrêmes rebelles"
            ],
            [
              "Tétrodotoxine",
              "Poisson globe / tétrodon (naturelle)",
              "Poison neurotoxique foudroyant",
              "Recherche en neurobiologie (bloqueur Na+)"
            ],
            [
              "Aniline",
              "Dérivé du benzène (synthèse)",
              "Amine aromatique réactive",
              "Industrie des colorants textiles et résines"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les alcaloïdes : amines d'origine végétale à puissante activité physiologique",
          "stepTheme": "Alcaloïdes",
          "stepBadge": "Alcaloïdes",
          "paragraphText": "Le mot alcaloïde signifie littéralement « semblable à un alcali » (qui a des propriétés basiques). Ce sont des molécules organiques azotées complexes produites par le métabolisme secondaire des végétaux, exerçant des effets physiologiques ou pharmacologiques considérables sur l'organisme animal.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p05_q1",
            "type": "mcq",
            "prompt": "Quelle propriété chimique commune et quelle origine biologique caractérisent l'ensemble de la famille des alcaloïdes ?",
            "options": [
              "Ce sont des acides forts d'origine minérale extraits des roches volcaniques.",
              "Ce sont des substances organiques basiques d'origine végétale comportant au moins un atome d'azote dans leur structure.",
              "Ce sont des hydrocarbures gazeux synthétisés par les bactéries marines.",
              "Ce sont des sucres fermentescibles synthétisés par la levure."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les alcaloïdes sont des métabolites végétaux caractérisés par la présence d'azote basique et dotés d'une forte réactivité biologique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La quinine et le traitement du paludisme",
          "stepTheme": "Pharmacologie",
          "stepBadge": "Quinine & Paludisme",
          "paragraphText": "Isolée de l'écorce de quinquina par les chimistes Pelletier et Caventou au XIXe siècle, la quinine est une amine complexe qui s'attaque à la vacuole digestive du parasite du paludisme (Plasmodium falciparum). Bien que toxique à forte dose (effets secondaires auditifs et cardiaques), elle demeure le traitement de sauvetage irremplaçable lors des accès pernicieux.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p05_q2",
            "type": "mcq",
            "prompt": "Pour quelle pathologie endémique majeure en Afrique tropicale la quinine a-t-elle constitué le premier médicament moderne réellement salvateur ?",
            "options": [
              "La tuberculose pulmonaire",
              "Le paludisme (malaria)",
              "Le choléra épidémique",
              "Le diabète de type 2"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La quinine est le premier antipaludique historique de référence, permettant de traiter efficacement la malaria."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La morphine : analgésique majeur issu du pavot",
          "stepTheme": "Pharmacologie",
          "stepBadge": "Morphine",
          "paragraphText": "La morphine est un alcaloïde phénanthrénique extrait de l'opium. En se fixant sur les récepteurs opioïdes du système nerveux central, elle bloque la transmission des signaux douloureux. C'est le médicament antalgique majeur contre les douleurs post-opératoires et cancéreuses.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p05_q3",
            "type": "mcq",
            "prompt": "Quelle est la fonction thérapeutique principale de la morphine en médecine hospitalière d'urgence ?",
            "options": [
              "Un antibiotique à large spectre contre les bactéries à Gram négatif.",
              "Un analgésique stupéfiant puissant utilisé pour supprimer les douleurs intenses et rebelles.",
              "Un vaccin préventif contre les virus à ARN.",
              "Un coagulant sanguin pour stopper les hémorragies externes."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La morphine est l'analgésique de palier 3 de l'OMS, administré pour neutraliser les douleurs les plus sévères."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La tétrodotoxine : neurotoxine foudroyante du tétrodon",
          "stepTheme": "Toxicologie",
          "stepBadge": "Tétrodotoxine",
          "paragraphText": "La tétrodotoxine (TTX) est une toxine aminée produite par des bactéries symbiotiques hébergées dans les organes internes du tétrodon (foie, ovaires du fugu). Elle bloque spécifiquement et irréversiblement les canaux sodium voltage-dépendants des neurones, provoquant une paralysie respiratoire totale en moins de quelques heures.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p05_q4",
            "type": "mcq",
            "prompt": "Quel est le mécanisme d'action toxique foudroyant de la tétrodotoxine contenue dans le poisson globe ?",
            "options": [
              "Elle dissout les globules rouges par hémolyse directe.",
              "Elle bloque sélectivement les canaux sodium des cellules nerveuses et musculaires, entraînant une paralysie motrice et un arrêt respiratoire mortel.",
              "Elle transforme le glycogène hépatique en dioxyde de carbone.",
              "Elle provoque une coagulation instantanée du sang."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La tétrodotoxine obstrue les canaux Na+ membranaires, empêchant la propagation du potentiel d'action et paralysant les muscles respiratoires."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'aniline et l'essor de la chimie des colorants de synthèse",
          "stepTheme": "Industrie chimique",
          "stepBadge": "Colorants azoïques",
          "paragraphText": "L'aniline C6H5-NH2 a révolutionné la révolution industrielle au XIXe siècle en permettant la fabrication des premiers colorants artificiels stables (la mauvéine de Perkin, les colorants azoïques). Aujourd'hui encore, elle est produite à des millions de tonnes pour synthétiser les polyuréthanes, les caoutchoucs et les herbicides.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p05_q5",
            "type": "mcq",
            "prompt": "Quelle amine aromatique fondamentale a été à l'origine de la naissance historique de l'industrie des colorants synthétiques ?",
            "options": [
              "La méthylamine",
              "L'aniline (ou phénylamine)",
              "La triéthylamine",
              "L'urée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'aniline est le précurseur de toute la famille des colorants d'aniline et des composés azoïques industriels."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Toxicité générale et précautions de manipulation des amines",
          "stepTheme": "Sécurité",
          "stepBadge": "Dangers des amines",
          "paragraphText": "Les amines aliphatiques légères possèdent une odeur fétide de poisson pourri très désagréable et sont très irritantes pour les yeux et les muqueuses respiratoires. De nombreuses amines aromatiques (notamment l'aniline) sont classées cancérigènes ou toxiques par passage percutané : leur manipulation exige obligatoirement gants étanches et hotte aspirante.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p05_q6",
            "type": "mcq",
            "prompt": "Quelle règle de sécurité impérative s'applique lors du transvasement d'aniline liquide au laboratoire ?",
            "options": [
              "Travailler à mains nues pour mieux ressentir la viscosité.",
              "Manipuler impérativement sous hotte aspirante avec des gants en nitrile adaptés, car l'aniline traverse facilement la peau et présente une toxicité sanguine et hépatotoxique élevée.",
              "Chauffer le liquide à 200 °C avant utilisation.",
              "Laisser le flacon ouvert sur la paillasse centrale."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'aniline traverse rapidement la barrière cutanée et provoque la formation de méthémoglobine (cyanose toxique) : la protection cutanée et l'aspiration sont obligatoires."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Bilan global du chapitre : Compétences d'examen exigibles",
          "stepTheme": "Synthèse Bac",
          "stepBadge": "Récapitulatif",
          "paragraphText": "Au terme de cette leçon, tout élève de Terminale C/D doit savoir avec aisance : 1) Calculer la formule brute à partir de %N ; 2) Identifier la classe d'une amine (I, II, III) ; 3) Nommer selon les 2 méthodes ; 4) Écrire l'équilibre avec l'eau et les dosages acido-basiques ; 5) Écrire les étapes successives de la réaction d'Hofmann jusqu'au sel d'ammonium quaternaire.",
          "exercise": {
            "id": "terminale_c_chimie_l04_amines_p05_q7",
            "type": "mcq",
            "prompt": "Une amine tertiaire de formule C6H15N réagit avec l'iodoéthane pour former un sel solide cristallisé B. Quelle est la classe de l'amine de départ et le nom précis du produit B ?",
            "options": [
              "Amine primaire et chlorure d'éthyle",
              "Amine tertiaire (la triéthylamine) et iodure de tétraéthylammonium",
              "Amine secondaire et acétate de sodium",
              "Amide tertiaire et éthanol"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C6H15N tertiaire symétrique est la triéthylamine (C2H5)3N. Son alkylation finale par C2H5-I forme le sel d'ammonium quaternaire : l'iodure de tétraéthylammonium [(C2H5)4N]+ I-."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l04_amines_p05_q1",
          "type": "mcq",
          "prompt": "Quelle propriété chimique commune et quelle origine biologique caractérisent l'ensemble de la famille des alcaloïdes ?",
          "options": [
            "Ce sont des acides forts d'origine minérale extraits des roches volcaniques.",
            "Ce sont des substances organiques basiques d'origine végétale comportant au moins un atome d'azote dans leur structure.",
            "Ce sont des hydrocarbures gazeux synthétisés par les bactéries marines.",
            "Ce sont des sucres fermentescibles synthétisés par la levure."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les alcaloïdes sont des métabolites végétaux caractérisés par la présence d'azote basique et dotés d'une forte réactivité biologique."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p05_q2",
          "type": "mcq",
          "prompt": "Pour quelle pathologie endémique majeure en Afrique tropicale la quinine a-t-elle constitué le premier médicament moderne réellement salvateur ?",
          "options": [
            "La tuberculose pulmonaire",
            "Le paludisme (malaria)",
            "Le choléra épidémique",
            "Le diabète de type 2"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La quinine est le premier antipaludique historique de référence, permettant de traiter efficacement la malaria."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p05_q3",
          "type": "mcq",
          "prompt": "Quelle est la fonction thérapeutique principale de la morphine en médecine hospitalière d'urgence ?",
          "options": [
            "Un antibiotique à large spectre contre les bactéries à Gram négatif.",
            "Un analgésique stupéfiant puissant utilisé pour supprimer les douleurs intenses et rebelles.",
            "Un vaccin préventif contre les virus à ARN.",
            "Un coagulant sanguin pour stopper les hémorragies externes."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La morphine est l'analgésique de palier 3 de l'OMS, administré pour neutraliser les douleurs les plus sévères."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p05_q4",
          "type": "mcq",
          "prompt": "Quel est le mécanisme d'action toxique foudroyant de la tétrodotoxine contenue dans le poisson globe ?",
          "options": [
            "Elle dissout les globules rouges par hémolyse directe.",
            "Elle bloque sélectivement les canaux sodium des cellules nerveuses et musculaires, entraînant une paralysie motrice et un arrêt respiratoire mortel.",
            "Elle transforme le glycogène hépatique en dioxyde de carbone.",
            "Elle provoque une coagulation instantanée du sang."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La tétrodotoxine obstrue les canaux Na+ membranaires, empêchant la propagation du potentiel d'action et paralysant les muscles respiratoires."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p05_q5",
          "type": "mcq",
          "prompt": "Quelle amine aromatique fondamentale a été à l'origine de la naissance historique de l'industrie des colorants synthétiques ?",
          "options": [
            "La méthylamine",
            "L'aniline (ou phénylamine)",
            "La triéthylamine",
            "L'urée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'aniline est le précurseur de toute la famille des colorants d'aniline et des composés azoïques industriels."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p05_q6",
          "type": "mcq",
          "prompt": "Quelle règle de sécurité impérative s'applique lors du transvasement d'aniline liquide au laboratoire ?",
          "options": [
            "Travailler à mains nues pour mieux ressentir la viscosité.",
            "Manipuler impérativement sous hotte aspirante avec des gants en nitrile adaptés, car l'aniline traverse facilement la peau et présente une toxicité sanguine et hépatotoxique élevée.",
            "Chauffer le liquide à 200 °C avant utilisation.",
            "Laisser le flacon ouvert sur la paillasse centrale."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'aniline traverse rapidement la barrière cutanée et provoque la formation de méthémoglobine (cyanose toxique) : la protection cutanée et l'aspiration sont obligatoires."
        },
        {
          "id": "terminale_c_chimie_l04_amines_p05_q7",
          "type": "mcq",
          "prompt": "Une amine tertiaire de formule C6H15N réagit avec l'iodoéthane pour former un sel solide cristallisé B. Quelle est la classe de l'amine de départ et le nom précis du produit B ?",
          "options": [
            "Amine primaire et chlorure d'éthyle",
            "Amine tertiaire (la triéthylamine) et iodure de tétraéthylammonium",
            "Amine secondaire et acétate de sodium",
            "Amide tertiaire et éthanol"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C6H15N tertiaire symétrique est la triéthylamine (C2H5)3N. Son alkylation finale par C2H5-I forme le sel d'ammonium quaternaire : l'iodure de tétraéthylammonium [(C2H5)4N]+ I-."
        }
      ]
    }
  ]
};
