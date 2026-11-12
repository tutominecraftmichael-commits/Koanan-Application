import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : TCDE — Thème : Chimie Générale — Titre : Solutions aqueuses et notion de pH
export const CHIMIE_TLE_CD_L06_SOLUTIONS_AQUEUSES_PH: CurriculumChapter = {
  "id": "terminale_c_chimie_l06_solutions_aqueuses_ph",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 6,
  "title": "Leçon 6 : Solutions aqueuses et notion de pH",
  "summary": "Propriétés physico-chimiques de l'eau solvant (structure coudée, polarité, constante diélectrique), trois étapes du mécanisme de dissolution d'un cristal ionique (dislocation, solvatation/hydratation, dispersion), équilibre d'autoprotolyse de l'eau (produit ionique Ke, pKe, influence thermique), concentrations molaire et massique, lois de dilution et facteur de dilution k, bilan d'électroneutralité (LEN) et conservation de la matière (LCM), définition rigoureuse et mesure expérimentale du pH (papier pH, indicateurs colorés, pH-mètre), et comportement asymptotique sous dilution limite.",
  "officialVolumeHours": 5,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : TCDE – Chimie Générale – Solutions aqueuses et pH)",
  "points": [
    {
      "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p01",
      "order": 1,
      "title": "L'eau solvant polaire et le mécanisme de dissolution ionique",
      "summary": "Structure moléculaire angulaire de l'eau, polarité intense, constante diélectrique élevée (εr ≈ 80), et les 3 étapes séquentielles de dissolution d'un solide ionique : dislocation, hydratation, dispersion.",
      "conceptExplanation": "La molécule d'eau (H2O) possède une géométrie coudée caractérisée par un angle de 104,5° à 105° entre les deux liaisons covalentes O-H. L'oxygène (χ = 3,44) étant nettement plus électronégatif que l'hydrogène (χ = 2,20), les liaisons O-H sont fortement polarisées (charge partielle négative 2δ- sur l'oxygène, charges partielles positives δ+ sur chaque hydrogène). Comme le barycentre des charges positives ne coïncide pas avec celui des charges négatives, l'eau présente un moment dipolaire permanent élevé (μ ≈ 1,85 D) : c'est un solvant très polaire.\n\nDe plus, l'eau possède une permittivité relative (constante diélectrique) exceptionnelle (εr ≈ 80 à 20°C). Selon la loi de Coulomb, la force d'attraction électrostatique entre ions de charges q1 et q2 séparés d'une distance r vaut F = |q1·q2| / (4πε0·εr·r²). Dans l'eau, cette force est divisée par 80 par rapport à l'air ou au vide, ce qui affaiblit considérablement les liaisons ioniques du réseau cristallin.\n\nLa dissolution d'un cristal ionique dans l'eau s'opère en 3 étapes successives :\n1. Dislocation : sous l'action de la constante diélectrique élevée et des interactions dipôle-ion, les ions sont arrachés de leurs nœuds cristallins (processus endothermique absorbant de l'énergie).\n2. Solvatation (hydratation) : chaque ion libéré s'entoure d'une sphère ordonnée de molécules d'eau orientées (l'oxygène 2δ- vers les cations, les hydrogènes δ+ vers les anions). C'est un processus exothermique (libération d'énergie de solvatation).\n3. Dispersion : sous l'effet de l'agitation thermique brownienne, les ions hydratés diffusent uniformément dans tout le volume du liquide pour former une solution homogène.",
      "keyRule": "L'eau dissout les composés ioniques grâce à sa polarité permanente (interactions dipôle-ion) et sa permittivité relative élevée (εr ≈ 80) qui divise par 80 la force de Coulomb. La dissolution comprend : dislocation (endothermique) -> hydratation (exothermique) -> dispersion.",
      "formulas": [
        {
          "name": "Loi de Coulomb dans un milieu diélectrique",
          "formula": "F = \\frac{|q_1 \\cdot q_2|}{4\\pi \\varepsilon_0 \\varepsilon_r \\, r^2}",
          "note": "Dans l'eau liquide, εr ≈ 80 à 20 °C"
        },
        {
          "name": "Équation générale de dissolution d'un cristal ionique",
          "formula": "\\mathrm{A}_p\\mathrm{B}_q\\,(\\mathrm{s}) \\xrightarrow{\\mathrm{H_2O}} p\\,\\mathrm{A}^{z+}(\\mathrm{aq}) + q\\,\\mathrm{B}^{z'-}(\\mathrm{aq})",
          "note": "Conservation stricte de la masse et des charges électriques"
        }
      ],
      "workedExample": {
        "title": "Bilan d'interaction coulombienne et équation de dissolution du chlorure de magnésium",
        "statement": "On dissout du chlorure de magnésium solide MgCl2 dans l'eau pure. Décris l'orientation des molécules d'eau autour de chaque ion et écris l'équation de dissolution complète.",
        "methodSteps": [
          "Étape 1 : Analyser la nature des ions constitutifs : MgCl2 est formé d'un cation Mg²⁺ et de deux anions chlorure Cl⁻.",
          "Étape 2 : Orientation des dipôles d'eau pour l'hydratation : le pôle négatif 2δ⁻ de l'eau (atome d'oxygène) s'oriente vers le cation Mg²⁺ ; les pôles positifs δ⁺ (atomes d'hydrogène) s'orientent vers les anions Cl⁻.",
          "Étape 3 : Écrire l'équation de dissolution : MgCl2(s) -> Mg²⁺(aq) + 2 Cl⁻(aq)."
        ],
        "conclusion": "Chaque mole de MgCl2 disloquée libère 1 mole d'ions magnésium hydratés et 2 moles d'ions chlorure hydratés dispersés dans la solution."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Les trois étapes physico-chimiques de la dissolution ionique",
        "tableData": {
          "headers": [
            "Étape",
            "Action moléculaire de l'eau",
            "Facteur déterminant",
            "Bilan énergétique"
          ],
          "rows": [
            [
              "1. Dislocation",
              "Rupture des liaisons du réseau cristallin solide",
              "Constante diélectrique élevée (εr ≈ 80) qui divise par 80 l'attraction coulombienne",
              "Endothermique (absorbe l'énergie réticulaire)"
            ],
            [
              "2. Solvatation (Hydratation)",
              "Formation d'une cage dipôle-ion orientée autour de chaque ion",
              "Caractère polaire permanent de la molécule d'eau (μ = 1,85 D, angle 105°)",
              "Exothermique (libère l'énergie de liaison ion-dipôle)"
            ],
            [
              "3. Dispersion",
              "Diffusion aléatoire des ions solvatés dans tout le volume",
              "Agitation thermique permanente des molécules du solvant",
              "Variation d'entropie positive (désordre accru)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Géométrie moléculaire et caractère dipolaire de l'eau",
          "stepTheme": "Structure de l'eau",
          "stepBadge": "Molécule polaire",
          "paragraphText": "La molécule d'eau (H2O) possède une structure coudée avec un angle de liaison d'environ 104,5° à 105°. La différence d'électronégativité entre l'oxygène (χ = 3,44) et l'hydrogène (χ = 2,20) crée une forte polarisation des deux liaisons O-H. Le centre de gravité des charges positives ne coïncidant pas avec celui des charges négatives, la molécule d'eau possède un moment dipolaire permanent élevé (μ ≈ 1,85 Debye).",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p01_q1",
            "type": "mcq",
            "prompt": "Parmi les solvants suivants, lequel est strictement incapable de dissoudre un cristal ionique par interaction dipolaire et pourquoi ?",
            "options": [
              "Le méthanol CH3OH car sa liaison C-O est trop solide.",
              "Le tétrachlorométhane CCl4 car sa géométrie tétraédrique symétrique lui confère un moment dipolaire permanent nul (solvant apolaire).",
              "L'ammoniac liquide NH3 car c'est une base.",
              "L'eau pure car elle ne conduit pas le courant électrique."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour dissoudre un cristal ionique par interaction électrostatique dipôle-ion, le solvant doit posséder un moment dipolaire permanent (être polaire). Le tétrachlorométhane CCl4 est rigoureusement apolaire (μ = 0 D) par compensation de symétrie de ses 4 dipôles de liaison C-Cl."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Pouvoir dispersant et constante diélectrique de l'eau",
          "stepTheme": "Permittivité diélectrique",
          "stepBadge": "Loi de Coulomb",
          "paragraphText": "Dans un milieu de permittivité relative εr, la force d'attraction électrostatique entre deux ions est donnée par F = |q1·q2| / (4πε0·εr·r²). Dans le vide ou dans l'air, εr ≈ 1. Dans l'eau liquide à 20 °C, εr ≈ 80. L'eau divise donc par 80 l'attraction mutuelle entre cations et anions, facilitant considérablement leur séparation.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p01_q2",
            "type": "mcq",
            "prompt": "Si deux ions de charges opposées s'attirent avec une force de 4,0×10⁻⁹ N dans l'air, quelle sera l'intensité de cette force d'attraction s'ils sont placés à la même distance dans l'eau liquide (εr = 80) ?",
            "options": [
              "3,2×10⁻⁷ N",
              "5,0×10⁻¹¹ N",
              "4,0×10⁻⁹ N",
              "2,0×10⁻¹⁰ N"
            ],
            "correctAnswerIndex": 1,
            "explanation": "F(eau) = F(air) / εr = (4,0×10⁻⁹ N) / 80 = 0,050×10⁻⁹ N = 5,0×10⁻¹¹ N. L'attraction est divisée par 80."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Première étape de dissolution : la dislocation",
          "stepTheme": "Rupture du réseau",
          "stepBadge": "Étape endothermique",
          "paragraphText": "Lorsqu'un solide ionique est plongé dans l'eau, les molécules d'eau orientent leurs pôles vers la surface du cristal. L'affaiblissement des forces de Coulomb par la constante diélectrique élevée permet d'arracher les ions du réseau cristallin. Cette étape nécessite un apport d'énergie (processus endothermique absorbant l'énergie réticulaire du solide).",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p01_q3",
            "type": "mcq",
            "prompt": "Comment les molécules d'eau s'orientent-elles vis-à-vis d'un cation sodium Na⁺ lors de la dislocation d'un cristal de NaCl ?",
            "options": [
              "Leurs atomes d'oxygène (pôle négatif portant la charge partielle 2δ⁻) se dirigent vers le cation Na⁺.",
              "Leurs atomes d'hydrogène (pôle positif portant la charge partielle δ⁺) se dirigent vers le cation Na⁺.",
              "Elles tournent de façon désordonnée sans orientation dipolaire.",
              "Leurs atomes d'oxygène s'éloignent du cation pour éviter l'encombrement stérique."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par attraction électrostatique dipôle-ion, le pôle négatif du dipôle de l'eau (l'atome d'oxygène 2δ⁻) s'oriente spontanément vers le cation chargé positivement Na⁺."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Deuxième étape de dissolution : la solvatation (hydratation)",
          "stepTheme": "Cage de solvatation",
          "stepBadge": "Étape exothermique",
          "paragraphText": "Chaque ion extrait du réseau s'entoure d'une enveloppe ordonnée de molécules d'eau liées par interaction dipôle-ion : c'est l'hydratation, notée avec l'indice (aq). La formation de ces liaisons intermoléculaires libère une quantité importante d'énergie : l'hydratation est un phénomène exothermique.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p01_q4",
            "type": "mcq",
            "prompt": "La dissolution de cristaux d'hydroxyde de sodium NaOH dans l'eau provoque un échauffement très net du bécher. Comment s'explique ce dégagement de chaleur à l'échelle thermodynamique ?",
            "options": [
              "L'énergie thermique libérée lors de l'hydratation des ions Na⁺ et OH⁻ est supérieure à l'énergie absorbée pour disloquer le réseau cristallin de NaOH.",
              "La constante diélectrique de l'eau diminue spontanément en chauffant le milieu.",
              "La dislocation du cristal de NaOH est une réaction exothermique sans solvatation.",
              "L'agitation mécanique du solvant crée une friction thermique prédominante."
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'échauffement indique une enthalpie de dissolution globale négative (ΔH < 0). L'énergie libérée lors de l'hydratation (exothermique) l'emporte donc sur l'énergie réticulaire absorbée lors de la dislocation (endothermique)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Troisième étape de dissolution : la dispersion homogène",
          "stepTheme": "Diffusion homogène",
          "stepBadge": "Agitation thermique",
          "paragraphText": "Sous l'action de l'agitation thermique permanente des molécules du solvant, les ions hydratés diffusent dans l'ensemble du volume du liquide. Ce mouvement brownien aboutit à une répartition parfaitement uniforme des ions dans la solution aqueuse.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p01_q5",
            "type": "mcq",
            "prompt": "Quelle est l'équation bilan de la dissolution complète du sulfate de fer(III) solide Fe2(SO4)3 dans l'eau distillée ?",
            "options": [
              "Fe2(SO4)3(s) -> 2 Fe³⁺(aq) + 3 SO4²⁻(aq)",
              "Fe2(SO4)3(s) -> Fe2³⁺(aq) + (SO4)3²⁻(aq)",
              "Fe2(SO4)3(s) -> 2 Fe²⁺(aq) + 3 SO4²⁻(aq)",
              "Fe2(SO4)3(s) -> 2 Fe³⁺(aq) + 3 S²⁻(aq) + 12 O²⁻(aq)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque unité formulaired'Al2(SO4)3 ou Fe2(SO4)3 se dissocie en 2 cations ferriques Fe³⁺ et 3 anions polyatomiques sulfate SO4²⁻, conservant la matière et la neutralité électrique (+6 - 6 = 0)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Cas de la dissolution avec ionisation : gaz et liquides polaires",
          "stepTheme": "Ionisation réactive",
          "stepBadge": "Formation d'ions",
          "paragraphText": "Certaines substances moléculaires neutres fortement polaires ne contiennent pas d'ions à l'état pur mais s'ionisent totalement au contact de l'eau. Par exemple, le chlorure d'hydrogène gazeux HCl(g) réagit violemment avec l'eau pour former des ions oxonium et chlorure : HCl(g) + H2O(l) -> H3O⁺(aq) + Cl⁻(aq).",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p01_q6",
            "type": "mcq",
            "prompt": "Lorsque le chlorure d'hydrogène gazeux HCl se dissout dans l'eau, que devient le proton H⁺ cédé par la liaison H-Cl polarisée ?",
            "options": [
              "Il reste à l'état de proton libre H⁺ isolé flottant dans le solvant.",
              "Il se fixe sur un doublet libre d'une molécule d'eau pour former l'ion oxonium H3O⁺ (proton hydraté).",
              "Il est réduit en dihydrogène gazeux H2 par l'eau.",
              "Il se recombine instantanément avec l'ion Cl⁻ pour former un précipité."
            ],
            "correctAnswerIndex": 1,
            "explanation": "En solution aqueuse, un proton libre H⁺ n'existe jamais isolément. Il se lie par liaison dative à un doublet non liant d'une molécule d'eau pour constituer l'ion oxonium H3O⁺ (lui-même hydraté sous la forme H9O4⁺)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Synthèse : le triptyque dislocateur, solvatant et dispersant de l'eau",
          "stepTheme": "Bilan des propriétés",
          "stepBadge": "Solvant universel",
          "paragraphText": "L'eau est le solvant ionisant par excellence grâce à la synergie de trois propriétés physico-chimiques : 1° Son pouvoir dislocateur dû à sa constante diélectrique élevée (εr ≈ 80) ; 2° Son pouvoir solvatant dû à son fort moment dipolaire (μ ≈ 1,85 D) ; 3° Son pouvoir dispersant dû à l'agitation thermique du milieu liquide.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p01_q7",
            "type": "mcq",
            "prompt": "Si la molécule d'eau avait une géométrie rigoureusement linéaire (angle de 180° comme le dioxyde de carbone CO2), quelle en serait la conséquence directe sur ses propriétés de solvant ?",
            "options": [
              "Son moment dipolaire deviendrait nul, lui faisant perdre son pouvoir solvatant vis-à-vis des cristaux ioniques.",
              "Sa constante diélectrique doublerait pour atteindre 160.",
              "Elle dissoudrait deux fois plus de sel de table par effet de symétrie.",
              "Elle deviendrait un acide fort concentré spontané."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une géométrie linéaire rendrait les moments dipolaires des deux liaisons O-H colinéaires et de sens opposés : leur somme vectorielle serait nulle (μ = 0 D). L'eau deviendrait apolaire et incapable d'interagir par forces dipôle-ion avec les solides ioniques."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p01_q1",
          "type": "mcq",
          "prompt": "Parmi les solvants suivants, lequel est strictement incapable de dissoudre un cristal ionique par interaction dipolaire et pourquoi ?",
          "options": [
            "Le méthanol CH3OH car sa liaison C-O est trop solide.",
            "Le tétrachlorométhane CCl4 car sa géométrie tétraédrique symétrique lui confère un moment dipolaire permanent nul (solvant apolaire).",
            "L'ammoniac liquide NH3 car c'est une base.",
            "L'eau pure car elle ne conduit pas le courant électrique."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour dissoudre un cristal ionique par interaction électrostatique dipôle-ion, le solvant doit posséder un moment dipolaire permanent (être polaire). Le tétrachlorométhane CCl4 est rigoureusement apolaire (μ = 0 D) par compensation de symétrie de ses 4 dipôles de liaison C-Cl."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p01_q2",
          "type": "mcq",
          "prompt": "Si deux ions de charges opposées s'attirent avec une force de 4,0×10⁻⁹ N dans l'air, quelle sera l'intensité de cette force d'attraction s'ils sont placés à la même distance dans l'eau liquide (εr = 80) ?",
          "options": [
            "3,2×10⁻⁷ N",
            "5,0×10⁻¹¹ N",
            "4,0×10⁻⁹ N",
            "2,0×10⁻¹⁰ N"
          ],
          "correctAnswerIndex": 1,
          "explanation": "F(eau) = F(air) / εr = (4,0×10⁻⁹ N) / 80 = 0,050×10⁻⁹ N = 5,0×10⁻¹¹ N. L'attraction est divisée par 80."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p01_q3",
          "type": "mcq",
          "prompt": "Comment les molécules d'eau s'orientent-elles vis-à-vis d'un cation sodium Na⁺ lors de la dislocation d'un cristal de NaCl ?",
          "options": [
            "Leurs atomes d'oxygène (pôle négatif portant la charge partielle 2δ⁻) se dirigent vers le cation Na⁺.",
            "Leurs atomes d'hydrogène (pôle positif portant la charge partielle δ⁺) se dirigent vers le cation Na⁺.",
            "Elles tournent de façon désordonnée sans orientation dipolaire.",
            "Leurs atomes d'oxygène s'éloignent du cation pour éviter l'encombrement stérique."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par attraction électrostatique dipôle-ion, le pôle négatif du dipôle de l'eau (l'atome d'oxygène 2δ⁻) s'oriente spontanément vers le cation chargé positivement Na⁺."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p01_q4",
          "type": "mcq",
          "prompt": "La dissolution de cristaux d'hydroxyde de sodium NaOH dans l'eau provoque un échauffement très net du bécher. Comment s'explique ce dégagement de chaleur à l'échelle thermodynamique ?",
          "options": [
            "L'énergie thermique libérée lors de l'hydratation des ions Na⁺ et OH⁻ est supérieure à l'énergie absorbée pour disloquer le réseau cristallin de NaOH.",
            "La constante diélectrique de l'eau diminue spontanément en chauffant le milieu.",
            "La dislocation du cristal de NaOH est une réaction exothermique sans solvatation.",
            "L'agitation mécanique du solvant crée une friction thermique prédominante."
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'échauffement indique une enthalpie de dissolution globale négative (ΔH < 0). L'énergie libérée lors de l'hydratation (exothermique) l'emporte donc sur l'énergie réticulaire absorbée lors de la dislocation (endothermique)."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p01_q5",
          "type": "mcq",
          "prompt": "Quelle est l'équation bilan de la dissolution complète du sulfate de fer(III) solide Fe2(SO4)3 dans l'eau distillée ?",
          "options": [
            "Fe2(SO4)3(s) -> 2 Fe³⁺(aq) + 3 SO4²⁻(aq)",
            "Fe2(SO4)3(s) -> Fe2³⁺(aq) + (SO4)3²⁻(aq)",
            "Fe2(SO4)3(s) -> 2 Fe²⁺(aq) + 3 SO4²⁻(aq)",
            "Fe2(SO4)3(s) -> 2 Fe³⁺(aq) + 3 S²⁻(aq) + 12 O²⁻(aq)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque unité formulaired'Al2(SO4)3 ou Fe2(SO4)3 se dissocie en 2 cations ferriques Fe³⁺ et 3 anions polyatomiques sulfate SO4²⁻, conservant la matière et la neutralité électrique (+6 - 6 = 0)."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p01_q6",
          "type": "mcq",
          "prompt": "Lorsque le chlorure d'hydrogène gazeux HCl se dissout dans l'eau, que devient le proton H⁺ cédé par la liaison H-Cl polarisée ?",
          "options": [
            "Il reste à l'état de proton libre H⁺ isolé flottant dans le solvant.",
            "Il se fixe sur un doublet libre d'une molécule d'eau pour former l'ion oxonium H3O⁺ (proton hydraté).",
            "Il est réduit en dihydrogène gazeux H2 par l'eau.",
            "Il se recombine instantanément avec l'ion Cl⁻ pour former un précipité."
          ],
          "correctAnswerIndex": 1,
          "explanation": "En solution aqueuse, un proton libre H⁺ n'existe jamais isolément. Il se lie par liaison dative à un doublet non liant d'une molécule d'eau pour constituer l'ion oxonium H3O⁺ (lui-même hydraté sous la forme H9O4⁺)."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p01_q7",
          "type": "mcq",
          "prompt": "Si la molécule d'eau avait une géométrie rigoureusement linéaire (angle de 180° comme le dioxyde de carbone CO2), quelle en serait la conséquence directe sur ses propriétés de solvant ?",
          "options": [
            "Son moment dipolaire deviendrait nul, lui faisant perdre son pouvoir solvatant vis-à-vis des cristaux ioniques.",
            "Sa constante diélectrique doublerait pour atteindre 160.",
            "Elle dissoudrait deux fois plus de sel de table par effet de symétrie.",
            "Elle deviendrait un acide fort concentré spontané."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une géométrie linéaire rendrait les moments dipolaires des deux liaisons O-H colinéaires et de sens opposés : leur somme vectorielle serait nulle (μ = 0 D). L'eau deviendrait apolaire et incapable d'interagir par forces dipôle-ion avec les solides ioniques."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p02",
      "order": 2,
      "title": "Équilibre d'autoprotolyse de l'eau et produit ionique Ke",
      "summary": "Réaction d'autoprotolyse 2 H2O <=> H3O⁺ + OH⁻, ampholyte, définition du produit ionique Ke et de pKe, dépendance thermique endothermique, neutralité stricte [H3O⁺] = [OH⁻] et relation fondamentale pH + pOH = pKe.",
      "conceptExplanation": "Même hautement purifiée par distillations successives et désionisation, l'eau liquide présente une faible conductivité électrique résiduelle due à l'existence d'ions provenant de l'autoprotolyse de l'eau :\n2 H2O(l) <=> H3O⁺(aq) + OH⁻(aq).\nDans cette réaction, une molécule d'eau cède un proton H⁺ (acide de Brønsted du couple H2O / OH⁻) à une autre molécule d'eau qui le capte (base de Brønsted du couple H3O⁺ / H2O). L'eau est un ampholyte (espèce amphotère).\n\nLe produit ionique de l'eau, noté Ke, est la constante thermodynamique d'équilibre de cette réaction :\nKe = [H3O⁺] · [OH⁻] (avec les concentrations rapportées à la concentration standard C° = 1 mol/L).\nÀ 25 °C, Ke = 1,0×10⁻¹⁴ et pKe = -log10(Ke) = 14,0.\n\nL'autoprotolyse est une réaction endothermique (ΔrH° > 0). Selon le principe de Le Chatelier, une élévation de température favorise la dissociation : Ke augmente avec la température et pKe diminue. Par exemple, à 60 °C, Ke ≈ 9,6×10⁻¹⁴ et pKe ≈ 13,0.\n\nDans l'eau pure neutre, la stœchiométrie impose : [H3O⁺] = [OH⁻] = √Ke. À 25 °C, [H3O⁺] = 1,0×10⁻⁷ mol/L, ce qui correspond à un pH neutre de 7,0. La neutralité ne se définit pas par 'pH = 7', mais par l'égalité stricte [H3O⁺] = [OH⁻].",
      "keyRule": "La relation Ke = [H3O⁺]·[OH⁻] et pH + pOH = pKe est TOUJOURS vraie dans toute solution aqueuse à l'équilibre. À 25 °C, Ke = 1,0×10⁻¹⁴ et pKe = 14,0. Comme l'autoprotolyse est endothermique, Ke augmente quand la température augmente.",
      "formulas": [
        {
          "name": "Produit ionique de l'eau",
          "formula": "K_e = [\\mathrm{H_3O^+}] \\cdot [\\mathrm{OH^-}] = 1,0 \\times 10^{-14} \\quad (\\text{à } 25\\,^\\circ\\mathrm{C})",
          "note": "Sans unité, concentrations en mol/L"
        },
        {
          "name": "Relation pKe et pH / pOH",
          "formula": "\\mathrm{p}K_e = \\mathrm{pH} + \\mathrm{pOH} = 14,0 \\quad (\\text{à } 25\\,^\\circ\\mathrm{C})",
          "note": "Permet de calculer instantanément [OH⁻] à partir du pH"
        }
      ],
      "workedExample": {
        "title": "Calcul de [OH⁻] et de pOH dans une solution d'acide chlorhydrique",
        "statement": "Une solution aqueuse d'acide chlorhydrique à 25 °C a un pH mesuré de 2,3. Calcule la concentration en ions oxonium [H3O⁺], le pOH de la solution et la concentration en ions hydroxyde [OH⁻].",
        "methodSteps": [
          "Étape 1 : Calculer [H3O⁺] à partir du pH : [H3O⁺] = 10^(-pH) = 10^(-2,3) = 10^(0,7 - 3) = 10^(0,7) × 10⁻³ ≈ 5,0×10⁻³ mol/L.",
          "Étape 2 : Calculer le pOH à 25 °C : pOH = pKe - pH = 14,0 - 2,3 = 11,7.",
          "Étape 3 : Calculer [OH⁻] : [OH⁻] = 10^(-pOH) = 10^(-11,7) ≈ 2,0×10⁻¹² mol/L (ou [OH⁻] = Ke / [H3O⁺] = 1,0×10⁻¹⁴ / 5,0×10⁻³ = 2,0×10⁻¹² mol/L)."
        ],
        "conclusion": "Dans cette solution acide, les ions OH⁻ sont présents mais en concentration infime (2,0×10⁻¹² mol/L)."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Variation du produit ionique Ke et du pH de neutralité selon la température",
        "tableData": {
          "headers": [
            "Température T (°C)",
            "Ke = [H3O⁺]·[OH⁻]",
            "pKe = -log(Ke)",
            "[H3O⁺] eau pure (mol/L)",
            "pH de neutralité (½ pKe)"
          ],
          "rows": [
            [
              "0 °C",
              "0,11 × 10⁻¹⁴",
              "14,94",
              "0,33 × 10⁻⁷ mol/L",
              "7,47"
            ],
            [
              "25 °C (référence)",
              "1,00 × 10⁻¹⁴",
              "14,00",
              "1,00 × 10⁻⁷ mol/L",
              "7,00"
            ],
            [
              "37 °C (corps humain)",
              "2,40 × 10⁻¹⁴",
              "13,62",
              "1,55 × 10⁻⁷ mol/L",
              "6,81"
            ],
            [
              "60 °C",
              "9,60 × 10⁻¹⁴",
              "13,02",
              "3,10 × 10⁻⁷ mol/L",
              "6,51"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Réaction d'autoprotolyse de l'eau et caractère amphotère",
          "stepTheme": "Autoprotolyse",
          "stepBadge": "Ampholyte",
          "paragraphText": "L'autoprotolyse de l'eau est la réaction spontanée d'échange de proton entre deux molécules d'eau : 2 H2O(l) <=> H3O⁺(aq) + OH⁻(aq). L'eau y manifeste son caractère amphotère en agissant simultanément comme acide du couple H2O / OH⁻ et comme base du couple H3O⁺ / H2O.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p02_q1",
            "type": "mcq",
            "prompt": "Quels sont les deux couples acido-basiques conjugués qui interviennent dans l'équilibre d'autoprotolyse de l'eau ?",
            "options": [
              "H3O⁺ / H2O et H2O / OH⁻",
              "H2O / H⁺ et OH⁻ / O²⁻",
              "H3O⁺ / OH⁻ et H2O / H2",
              "H2 / H2O et O2 / OH⁻"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans l'autoprotolyse, une molécule d'eau se comporte comme une base qui capte H⁺ pour donner son acide conjugué H3O⁺ (couple H3O⁺ / H2O), tandis qu'une autre se comporte comme un acide qui cède H⁺ pour donner sa base conjuguée OH⁻ (couple H2O / OH⁻)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le produit ionique de l'eau Ke et son expression logarithmique pKe",
          "stepTheme": "Constante d'équilibre",
          "stepBadge": "Ke et pKe",
          "paragraphText": "La constante thermodynamique d'équilibre de l'autoprotolyse est le produit ionique Ke = [H3O⁺]·[OH⁻]. À 25 °C, Ke = 1,0×10⁻¹⁴. Par définition, pKe = -log(Ke), ce qui donne pKe = 14,0 à 25 °C. Cette constante est vérifiée dans toute solution aqueuse diluée à l'équilibre.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p02_q2",
            "type": "mcq",
            "prompt": "Dans une solution aqueuse à 25 °C, la concentration en ions hydroxyde est mesurée à [OH⁻] = 4,0×10⁻³ mol/L. Que vaut la concentration en ions oxonium [H3O⁺] ?",
            "options": [
              "2,5×10⁻¹² mol/L",
              "4,0×10⁻¹¹ mol/L",
              "1,0×10⁻¹⁴ mol/L",
              "2,5×10⁻¹⁷ mol/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "[H3O⁺] = Ke / [OH⁻] = (1,0×10⁻¹⁴) / (4,0×10⁻³) = 0,25×10⁻¹¹ = 2,5×10⁻¹² mol/L."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Caractère endothermique et effet de la température sur Ke",
          "stepTheme": "Thermochimie",
          "stepBadge": "Principe de Le Chatelier",
          "paragraphText": "La rupture des liaisons O-H lors de l'autoprotolyse absorbe de la chaleur : la réaction est endothermique (ΔrH° > 0). Selon le principe de modération de Le Chatelier, une augmentation de température déplace l'équilibre dans le sens direct : Ke augmente et le pKe diminue.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p02_q3",
            "type": "mcq",
            "prompt": "Si une solution aqueuse est refroidie de 25 °C à 5 °C, comment évoluent son produit ionique Ke et son pKe ?",
            "options": [
              "Ke diminue (devient inférieur à 10⁻¹⁴) et pKe augmente (devient supérieur à 14).",
              "Ke augmente et pKe diminue car le froid densifie l'eau.",
              "Ke et pKe restent rigoureusement constants car ce sont des constantes universelles invariables.",
              "Ke s'annule car les ions se figent."
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'autoprotolyse étant endothermique, un refroidissement favorise le sens indirect (exothermique). La concentration en ions dissociés diminue : Ke diminue, donc pKe = -log(Ke) augmente."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Définition rigoureuse de la neutralité chimique",
          "stepTheme": "Neutralité acido-basique",
          "stepBadge": "Égalité stricte",
          "paragraphText": "Une solution aqueuse est dite chimiquement neutre si et seulement si [H3O⁺] = [OH⁻]. Dans l'eau pure, cette égalité impose [H3O⁺] = √Ke, d'où pH = ½ pKe. Ce n'est qu'à 25 °C que ce pH de neutralité est égal à 7,00.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p02_q4",
            "type": "mcq",
            "prompt": "À 60 °C, le produit ionique de l'eau vaut Ke = 1,0×10⁻¹³. Quel est le pH d'une eau pure à cette température et quelle est sa nature acido-basique ?",
            "options": [
              "pH = 6,5 et elle est chimiquement neutre car [H3O⁺] = [OH⁻].",
              "pH = 6,5 et elle est acide car son pH est inférieur à 7,0.",
              "pH = 7,0 et elle reste neutre.",
              "pH = 13,0 et elle est basique."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans l'eau pure, [H3O⁺] = √Ke = √(10⁻¹³) = 10⁻⁶'⁵ mol/L, donc pH = 6,5. Comme [H3O⁺] est rigoureusement égal à [OH⁻], la solution est parfaitement neutre. Le repère 7 ne vaut qu'à 25 °C."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Universalité de l'équilibre Ke dans toutes les solutions aqueuses",
          "stepTheme": "Équilibre permanent",
          "stepBadge": "Présence permanente d'ions",
          "paragraphText": "Dans une solution aqueuse quelconque, acide, basique ou saline, la relation Ke = [H3O⁺]·[OH⁻] demeure toujours satisfaite à l'équilibre. L'ajout d'ions oxonium par un acide déplace l'équilibre d'autoprotolyse en sens inverse : les ions OH⁻ diminuent fortement sans jamais s'annuler.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p02_q5",
            "type": "mcq",
            "prompt": "Une solution d'acide sulfurique présente à 25 °C une concentration en ions oxonium [H3O⁺] = 0,050 mol/L. Que vaut la concentration résiduelle en ions hydroxyde [OH⁻] ?",
            "options": [
              "2,0×10⁻¹³ mol/L",
              "0 mol/L car l'acide sulfurique détruit totalement les ions OH⁻.",
              "1,0×10⁻¹⁴ mol/L",
              "5,0×10⁻¹² mol/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "[OH⁻] = Ke / [H3O⁺] = (1,0×10⁻¹⁴) / (0,050) = 2,0×10⁻¹³ mol/L. Même en milieu très acide, il subsiste une concentration résiduelle non nulle d'ions hydroxyde."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La relation logarithmique fondamentale pH + pOH = pKe",
          "stepTheme": "Lien pH et pOH",
          "stepBadge": "Formule clé",
          "paragraphText": "En prenant le logarithme décimal négatif de l'expression du produit ionique Ke = [H3O⁺] · [OH⁻], on obtient : -log(Ke) = -log[H3O⁺] - log[OH⁻], soit la relation fondamentale : pKe = pH + pOH. À 25 °C, cette relation s'écrit : pH + pOH = 14,0.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p02_q6",
            "type": "mcq",
            "prompt": "Une solution de produit d'entretien pour sols présente à 25 °C un pH de 10,8. Quelle est la valeur de son pOH et la concentration molaire en ions [OH⁻] correspondante ?",
            "options": [
              "pOH = 3,2 et [OH⁻] = 10⁻³'² mol/L ≈ 6,3×10⁻⁴ mol/L",
              "pOH = 10,8 et [OH⁻] = 1,6×10⁻¹¹ mol/L",
              "pOH = 4,2 et [OH⁻] = 1,0×10⁻⁴ mol/L",
              "pOH = 14,0 et [OH⁻] = 1,0×10⁻¹⁴ mol/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À 25 °C, pOH = 14,0 - pH = 14,0 - 10,8 = 3,2. D'où [OH⁻] = 10^(-pOH) = 10^(-3,2) ≈ 6,3×10⁻⁴ mol/L."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Pièges fréquents : température physiologique et neutralité",
          "stepTheme": "Conditions biologiques",
          "stepBadge": "Attention au bac",
          "paragraphText": "Dans l'organisme humain à 37 °C, pKe = 13,62. Le pH neutre physiologique vaut donc ½ pKe = 6,81. Le sang artériel présentant un pH physiologique normal de 7,40, il est en réalité légèrement alcalin (basique) par rapport au point neutre à cette température.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p02_q7",
            "type": "mcq",
            "prompt": "Pourquoi est-il scientifiquement faux d'affirmer de manière absolue qu'une solution d'eau pure à 50 °C ayant un pH de 6,6 est une solution acide ?",
            "options": [
              "Parce que dans l'eau pure, quel que soit T, [H3O⁺] est rigoureusement égal à [OH⁻] : la solution est donc strictement neutre même si son pH est inférieur à 7,0.",
              "Parce que le pH de l'eau pure ne peut jamais descendre en dessous de 7,0.",
              "Parce qu'à 50 °C la molécule d'eau se transforme en gaz.",
              "Parce que le thermomètre fausse la mesure du pH-mètre."
            ],
            "correctAnswerIndex": 0,
            "explanation": "La neutralité se définit exclusivement par l'égalité [H3O⁺] = [OH⁻]. À 50 °C, Ke > 10⁻¹⁴ donc ½ pKe < 7. L'eau pure à pH = 6,6 contient exactement autant d'ions oxonium que d'ions hydroxyde : elle est donc parfaitement neutre."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p02_q1",
          "type": "mcq",
          "prompt": "Quels sont les deux couples acido-basiques conjugués qui interviennent dans l'équilibre d'autoprotolyse de l'eau ?",
          "options": [
            "H3O⁺ / H2O et H2O / OH⁻",
            "H2O / H⁺ et OH⁻ / O²⁻",
            "H3O⁺ / OH⁻ et H2O / H2",
            "H2 / H2O et O2 / OH⁻"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans l'autoprotolyse, une molécule d'eau se comporte comme une base qui capte H⁺ pour donner son acide conjugué H3O⁺ (couple H3O⁺ / H2O), tandis qu'une autre se comporte comme un acide qui cède H⁺ pour donner sa base conjuguée OH⁻ (couple H2O / OH⁻)."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p02_q2",
          "type": "mcq",
          "prompt": "Dans une solution aqueuse à 25 °C, la concentration en ions hydroxyde est mesurée à [OH⁻] = 4,0×10⁻³ mol/L. Que vaut la concentration en ions oxonium [H3O⁺] ?",
          "options": [
            "2,5×10⁻¹² mol/L",
            "4,0×10⁻¹¹ mol/L",
            "1,0×10⁻¹⁴ mol/L",
            "2,5×10⁻¹⁷ mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "[H3O⁺] = Ke / [OH⁻] = (1,0×10⁻¹⁴) / (4,0×10⁻³) = 0,25×10⁻¹¹ = 2,5×10⁻¹² mol/L."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p02_q3",
          "type": "mcq",
          "prompt": "Si une solution aqueuse est refroidie de 25 °C à 5 °C, comment évoluent son produit ionique Ke et son pKe ?",
          "options": [
            "Ke diminue (devient inférieur à 10⁻¹⁴) et pKe augmente (devient supérieur à 14).",
            "Ke augmente et pKe diminue car le froid densifie l'eau.",
            "Ke et pKe restent rigoureusement constants car ce sont des constantes universelles invariables.",
            "Ke s'annule car les ions se figent."
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'autoprotolyse étant endothermique, un refroidissement favorise le sens indirect (exothermique). La concentration en ions dissociés diminue : Ke diminue, donc pKe = -log(Ke) augmente."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p02_q4",
          "type": "mcq",
          "prompt": "À 60 °C, le produit ionique de l'eau vaut Ke = 1,0×10⁻¹³. Quel est le pH d'une eau pure à cette température et quelle est sa nature acido-basique ?",
          "options": [
            "pH = 6,5 et elle est chimiquement neutre car [H3O⁺] = [OH⁻].",
            "pH = 6,5 et elle est acide car son pH est inférieur à 7,0.",
            "pH = 7,0 et elle reste neutre.",
            "pH = 13,0 et elle est basique."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans l'eau pure, [H3O⁺] = √Ke = √(10⁻¹³) = 10⁻⁶'⁵ mol/L, donc pH = 6,5. Comme [H3O⁺] est rigoureusement égal à [OH⁻], la solution est parfaitement neutre. Le repère 7 ne vaut qu'à 25 °C."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p02_q5",
          "type": "mcq",
          "prompt": "Une solution d'acide sulfurique présente à 25 °C une concentration en ions oxonium [H3O⁺] = 0,050 mol/L. Que vaut la concentration résiduelle en ions hydroxyde [OH⁻] ?",
          "options": [
            "2,0×10⁻¹³ mol/L",
            "0 mol/L car l'acide sulfurique détruit totalement les ions OH⁻.",
            "1,0×10⁻¹⁴ mol/L",
            "5,0×10⁻¹² mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "[OH⁻] = Ke / [H3O⁺] = (1,0×10⁻¹⁴) / (0,050) = 2,0×10⁻¹³ mol/L. Même en milieu très acide, il subsiste une concentration résiduelle non nulle d'ions hydroxyde."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p02_q6",
          "type": "mcq",
          "prompt": "Une solution de produit d'entretien pour sols présente à 25 °C un pH de 10,8. Quelle est la valeur de son pOH et la concentration molaire en ions [OH⁻] correspondante ?",
          "options": [
            "pOH = 3,2 et [OH⁻] = 10⁻³'² mol/L ≈ 6,3×10⁻⁴ mol/L",
            "pOH = 10,8 et [OH⁻] = 1,6×10⁻¹¹ mol/L",
            "pOH = 4,2 et [OH⁻] = 1,0×10⁻⁴ mol/L",
            "pOH = 14,0 et [OH⁻] = 1,0×10⁻¹⁴ mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À 25 °C, pOH = 14,0 - pH = 14,0 - 10,8 = 3,2. D'où [OH⁻] = 10^(-pOH) = 10^(-3,2) ≈ 6,3×10⁻⁴ mol/L."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p02_q7",
          "type": "mcq",
          "prompt": "Pourquoi est-il scientifiquement faux d'affirmer de manière absolue qu'une solution d'eau pure à 50 °C ayant un pH de 6,6 est une solution acide ?",
          "options": [
            "Parce que dans l'eau pure, quel que soit T, [H3O⁺] est rigoureusement égal à [OH⁻] : la solution est donc strictement neutre même si son pH est inférieur à 7,0.",
            "Parce que le pH de l'eau pure ne peut jamais descendre en dessous de 7,0.",
            "Parce qu'à 50 °C la molécule d'eau se transforme en gaz.",
            "Parce que le thermomètre fausse la mesure du pH-mètre."
          ],
          "correctAnswerIndex": 0,
          "explanation": "La neutralité se définit exclusivement par l'égalité [H3O⁺] = [OH⁻]. À 50 °C, Ke > 10⁻¹⁴ donc ½ pKe < 7. L'eau pure à pH = 6,6 contient exactement autant d'ions oxonium que d'ions hydroxyde : elle est donc parfaitement neutre."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p03",
      "order": 3,
      "title": "Concentrations molaire, massique et lois de dilution",
      "summary": "Concentration molaire C = n/V, concentration massique Cm = m/V, formule de conversion Cm = C · M, distinction entre concentration apportée C et concentrations effectives [X], conservation de matière lors d'une dilution C1·V1 = C2·V2, facteur de dilution k, et protocole expérimental de précision.",
      "conceptExplanation": "1. Grandeurs de concentration :\n- Concentration molaire volumique C : quantité de matière de soluté dissous par unité de volume de solution : C = n / V (en mol/L).\n- Concentration massique Cm (titre massique) : masse de soluté par unité de volume de solution : Cm = m / V (en g/L).\nPuisque m = n · M (avec M la masse molaire en g/mol), on a immédiatement : Cm = C · M (ou C = Cm / M).\n\n2. Concentration apportée versus concentrations effectives :\nIl faut distinguer la concentration molaire apportée C en soluté et les concentrations effectives [X] des espèces ioniques formées en solution. Pour un solide ionique ApBq -> p A^{z+} + q B^{z'-} : [A^{z+}] = p · C et [B^{z'-}] = q · C.\n\n3. Lois de la dilution :\nDiluer une solution consiste à ajouter du solvant pur (eau distillée) sans modifier la quantité de soluté : n_initial = n_final.\nSi C1 et V1 sont la concentration et le volume prélevé de la solution mère, et C2 et V2 la concentration et le volume total de la solution fille :\nC1 · V1 = C2 · V2.\nLe facteur de dilution k est le rapport k = C1 / C2 = V2 / V1 (k > 1).\nLe volume d'eau distillée à ajouter est V_eau = V2 - V1 (en admettant l'additivité des volumes en solution diluée).\n\n4. Verrerie de précision :\nUne dilution rigoureuse nécessite une pipette jaugée munie d'une propipette pour prélever V1 et une fiole jaugée de volume V2 pour préparer la solution fille.",
      "keyRule": "Lors d'une dilution, la quantité de matière se conserve : C1·V1 = C2·V2. Le facteur de dilution vaut k = C1/C2 = V2/V1. La concentration massique est reliée à la concentration molaire par Cm = C · M.",
      "formulas": [
        {
          "name": "Relation molaire - massique",
          "formula": "C_m = C \\cdot M \\iff C = \\frac{C_m}{M}",
          "note": "Cm en g/L, C en mol/L, M en g/mol"
        },
        {
          "name": "Loi de conservation en dilution",
          "formula": "C_1 \\cdot V_1 = C_2 \\cdot V_2 \\iff k = \\frac{C_1}{C_2} = \\frac{V_2}{V_1}",
          "note": "k est le facteur de dilution (sans dimension, k > 1)"
        }
      ],
      "workedExample": {
        "title": "Préparation par dilution d'une solution étalon de sulfate de cuivre",
        "statement": "On dispose d'une solution mère de sulfate de cuivre CuSO4 de concentration C1 = 0,50 mol/L. On désire préparer V2 = 250 mL d'une solution fille de concentration C2 = 0,020 mol/L. Détermine le facteur de dilution, le volume de solution mère à prélever et décris la verrerie à utiliser.",
        "methodSteps": [
          "Étape 1 : Calculer le facteur de dilution k : k = C1 / C2 = (0,50 mol/L) / (0,020 mol/L) = 25.",
          "Étape 2 : Calculer le volume de solution mère V1 à prélever : V1 = V2 / k = 250 mL / 25 = 10,0 mL (ou V1 = C2·V2 / C1 = 0,020 × 250 / 0,50 = 10,0 mL).",
          "Étape 3 : Choisir la verrerie : prélever 10,0 mL de solution mère à l'aide d'une pipette jaugée de 10 mL munie d'une propipette.",
          "Étape 4 : Introduire dans une fiole jaugée de 250 mL, ajouter de l'eau distillée aux 2/3, agiter, puis ajuster au trait de jauge."
        ],
        "conclusion": "On prélève 10,0 mL de solution mère avec une pipette jaugée pour les introduire dans une fiole jaugée de 250 mL."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Grandeurs fondamentales de concentration et lois de dilution",
        "tableData": {
          "headers": [
            "Grandeur",
            "Formule de définition",
            "Unités usuelles",
            "Lien opératoire"
          ],
          "rows": [
            [
              "Concentration molaire C",
              "C = n / V",
              "mol/L (ou mol·L⁻¹)",
              "n = C · V"
            ],
            [
              "Concentration massique Cm",
              "Cm = m / V",
              "g/L (ou g·L⁻¹)",
              "m = Cm · V"
            ],
            [
              "Passage molaire <-> massique",
              "Cm = C · M",
              "M en g/mol",
              "C = Cm / M"
            ],
            [
              "Conservation en dilution",
              "C1 · V1 = C2 · V2",
              "Volumes en mL ou L",
              "Facteur k = C1/C2 = V2/V1 > 1"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Concentration molaire volumique C",
          "stepTheme": "Concentration molaire",
          "stepBadge": "Définition SI",
          "paragraphText": "La concentration molaire volumique C d'une espèce soluté en solution est le quotient de la quantité de matière n (en mol) de soluté dissous par le volume V (en L) de la solution : C = n / V. La quantité de matière s'exprime par n = C · V.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p03_q1",
            "type": "mcq",
            "prompt": "On dissout 0,040 mol de chlorure de potassium KCl dans de l'eau distillée pour obtenir exactement 200 mL de solution. Quelle est la concentration molaire de cette solution ?",
            "options": [
              "0,20 mol/L",
              "0,008 mol/L",
              "0,040 mol/L",
              "2,0 mol/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C = n / V avec V = 200 mL = 0,200 L. On a C = 0,040 mol / 0,200 L = 0,20 mol/L."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Concentration massique Cm et formule de passage Cm = C · M",
          "stepTheme": "Concentration massique",
          "stepBadge": "Conversion",
          "paragraphText": "La concentration massique Cm est la masse m de soluté dissous par unité de volume de solution : Cm = m / V (en g/L). Comme m = n · M, on établit immédiatement la relation universelle : Cm = C · M.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p03_q2",
            "type": "mcq",
            "prompt": "Une solution de permanganate de potassium KMnO4 a une concentration molaire C = 0,050 mol/L. Sachant que M(KMnO4) = 158 g/mol, quelle est sa concentration massique Cm ?",
            "options": [
              "7,9 g/L",
              "3,16 g/L",
              "79 g/L",
              "0,79 g/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Cm = C · M = 0,050 mol/L × 158 g/mol = 7,9 g/L."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Concentration apportée C versus concentrations effectives [X]",
          "stepTheme": "Dissociation ionique",
          "stepBadge": "Stœchiométrie",
          "paragraphText": "Il est impératif de distinguer la concentration apportée C en soluté solide et les concentrations réelles [X] des ions en solution. Pour Al2(SO4)3 dissous à concentration C : [Al³⁺] = 2 C et [SO4²⁻] = 3 C.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p03_q3",
            "type": "mcq",
            "prompt": "Dans une solution de chlorure de calcium CaCl2 de concentration apportée C = 2,5×10⁻² mol/L, quelles sont les concentrations effectives en ions calcium [Ca²⁺] et en ions chlorure [Cl⁻] ?",
            "options": [
              "[Ca²⁺] = 2,5×10⁻² mol/L et [Cl⁻] = 5,0×10⁻² mol/L",
              "[Ca²⁺] = 5,0×10⁻² mol/L et [Cl⁻] = 2,5×10⁻² mol/L",
              "[Ca²⁺] = 2,5×10⁻² mol/L et [Cl⁻] = 2,5×10⁻² mol/L",
              "[Ca²⁺] = 5,0×10⁻² mol/L et [Cl⁻] = 5,0×10⁻² mol/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "CaCl2(s) -> Ca²⁺ + 2 Cl⁻. Donc [Ca²⁺] = C = 2,5×10⁻² mol/L et [Cl⁻] = 2 C = 5,0×10⁻² mol/L."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Principe de conservation de la matière lors d'une dilution",
          "stepTheme": "Loi de dilution",
          "stepBadge": "Invariance de n",
          "paragraphText": "Lors d'une dilution, on ajoute uniquement du solvant. La quantité de soluté prélevée dans la solution mère est égale à la quantité de matière présente dans la solution fille : n1 = n2, ce qui donne la relation fondamentale C1 · V1 = C2 · V2.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p03_q4",
            "type": "mcq",
            "prompt": "On désire préparer 100 mL d'une solution d'acide chlorhydrique de concentration C2 = 0,050 mol/L à partir d'une solution commerciale de concentration C1 = 1,0 mol/L. Quel volume V1 de solution mère doit-on prélever ?",
            "options": [
              "5,0 mL",
              "2,0 mL",
              "10 mL",
              "50 mL"
            ],
            "correctAnswerIndex": 0,
            "explanation": "V1 = (C2 · V2) / C1 = (0,050 mol/L × 100 mL) / 1,0 mol/L = 5,0 mL."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le facteur de dilution k",
          "stepTheme": "Rapport de dilution",
          "stepBadge": "Facteur k > 1",
          "paragraphText": "Le facteur de dilution k mesure combien de fois la solution a été diluée : k = C1 / C2 = V2 / V1. Une dilution d'un facteur 10 signifie que le volume final est 10 fois plus grand que le volume initial prélevé et que la concentration a été divisée par 10.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p03_q5",
            "type": "mcq",
            "prompt": "On prélève 25 mL d'une solution aqueuse et on ajoute de l'eau distillée dans une fiole jusqu'au volume total de 500 mL. Quel est le facteur de dilution k ?",
            "options": [
              "k = 20",
              "k = 25",
              "k = 10",
              "k = 50"
            ],
            "correctAnswerIndex": 0,
            "explanation": "k = V2 / V1 = 500 mL / 25 mL = 20. La solution a été diluée 20 fois."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Verrerie de précision pour une dilution conforme",
          "stepTheme": "Protocole expérimental",
          "stepBadge": "Verrerie jaugée",
          "paragraphText": "Pour garantir la précision analytique d'une dilution, on n'utilise jamais d'éprouvette ou de bécher gradué. Le prélèvement du volume initial V1 s'effectue obligatoirement avec une pipette jaugée munie d'une propipette, et la préparation du volume final V2 dans une fiole jaugée.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p03_q6",
            "type": "mcq",
            "prompt": "Pour préparer avec la plus grande précision 200,0 mL d'une solution fille diluée 20 fois, quelle verrerie doit impérativement être choisie ?",
            "options": [
              "Une pipette jaugée de 10 mL et une fiole jaugée de 200 mL.",
              "Une éprouvette graduée de 10 mL et un erlenmeyer de 200 mL.",
              "Une burette de 20 mL et un bécher gradué de 200 mL.",
              "Une pipette Pasteur et une fiole jaugée de 200 mL."
            ],
            "correctAnswerIndex": 0,
            "explanation": "V1 = V2 / k = 200 mL / 20 = 10 mL. Il faut donc une pipette jaugée de 10 mL (pour prélever V1) et une fiole jaugée de 200 mL (pour contenir V2)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Mélange de deux solutions de même soluté",
          "stepTheme": "Mélanges",
          "stepBadge": "Bilan global",
          "paragraphText": "Lors du mélange de deux solutions de même soluté (C_A, V_A) et (C_B, V_B), la quantité totale de matière est n_tot = C_A · V_A + C_B · V_B. La concentration du mélange final (en supposant les volumes additifs V_tot = V_A + V_B) vaut : C_mix = (C_A · V_A + C_B · V_B) / (V_A + V_B).",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p03_q7",
            "type": "mcq",
            "prompt": "On mélange 100 mL d'une solution de NaCl à 0,40 mol/L et 300 mL d'une solution de NaCl à 0,20 mol/L. Quelle est la concentration molaire en NaCl du mélange résultant ?",
            "options": [
              "0,25 mol/L",
              "0,30 mol/L",
              "0,60 mol/L",
              "0,20 mol/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "n_tot = (0,40 × 0,100) + (0,20 × 0,300) = 0,040 + 0,060 = 0,100 mol. V_tot = 0,100 + 0,300 = 0,400 L. C_mix = 0,100 / 0,400 = 0,25 mol/L."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p03_q1",
          "type": "mcq",
          "prompt": "On dissout 0,040 mol de chlorure de potassium KCl dans de l'eau distillée pour obtenir exactement 200 mL de solution. Quelle est la concentration molaire de cette solution ?",
          "options": [
            "0,20 mol/L",
            "0,008 mol/L",
            "0,040 mol/L",
            "2,0 mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C = n / V avec V = 200 mL = 0,200 L. On a C = 0,040 mol / 0,200 L = 0,20 mol/L."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p03_q2",
          "type": "mcq",
          "prompt": "Une solution de permanganate de potassium KMnO4 a une concentration molaire C = 0,050 mol/L. Sachant que M(KMnO4) = 158 g/mol, quelle est sa concentration massique Cm ?",
          "options": [
            "7,9 g/L",
            "3,16 g/L",
            "79 g/L",
            "0,79 g/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Cm = C · M = 0,050 mol/L × 158 g/mol = 7,9 g/L."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p03_q3",
          "type": "mcq",
          "prompt": "Dans une solution de chlorure de calcium CaCl2 de concentration apportée C = 2,5×10⁻² mol/L, quelles sont les concentrations effectives en ions calcium [Ca²⁺] et en ions chlorure [Cl⁻] ?",
          "options": [
            "[Ca²⁺] = 2,5×10⁻² mol/L et [Cl⁻] = 5,0×10⁻² mol/L",
            "[Ca²⁺] = 5,0×10⁻² mol/L et [Cl⁻] = 2,5×10⁻² mol/L",
            "[Ca²⁺] = 2,5×10⁻² mol/L et [Cl⁻] = 2,5×10⁻² mol/L",
            "[Ca²⁺] = 5,0×10⁻² mol/L et [Cl⁻] = 5,0×10⁻² mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "CaCl2(s) -> Ca²⁺ + 2 Cl⁻. Donc [Ca²⁺] = C = 2,5×10⁻² mol/L et [Cl⁻] = 2 C = 5,0×10⁻² mol/L."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p03_q4",
          "type": "mcq",
          "prompt": "On désire préparer 100 mL d'une solution d'acide chlorhydrique de concentration C2 = 0,050 mol/L à partir d'une solution commerciale de concentration C1 = 1,0 mol/L. Quel volume V1 de solution mère doit-on prélever ?",
          "options": [
            "5,0 mL",
            "2,0 mL",
            "10 mL",
            "50 mL"
          ],
          "correctAnswerIndex": 0,
          "explanation": "V1 = (C2 · V2) / C1 = (0,050 mol/L × 100 mL) / 1,0 mol/L = 5,0 mL."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p03_q5",
          "type": "mcq",
          "prompt": "On prélève 25 mL d'une solution aqueuse et on ajoute de l'eau distillée dans une fiole jusqu'au volume total de 500 mL. Quel est le facteur de dilution k ?",
          "options": [
            "k = 20",
            "k = 25",
            "k = 10",
            "k = 50"
          ],
          "correctAnswerIndex": 0,
          "explanation": "k = V2 / V1 = 500 mL / 25 mL = 20. La solution a été diluée 20 fois."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p03_q6",
          "type": "mcq",
          "prompt": "Pour préparer avec la plus grande précision 200,0 mL d'une solution fille diluée 20 fois, quelle verrerie doit impérativement être choisie ?",
          "options": [
            "Une pipette jaugée de 10 mL et une fiole jaugée de 200 mL.",
            "Une éprouvette graduée de 10 mL et un erlenmeyer de 200 mL.",
            "Une burette de 20 mL et un bécher gradué de 200 mL.",
            "Une pipette Pasteur et une fiole jaugée de 200 mL."
          ],
          "correctAnswerIndex": 0,
          "explanation": "V1 = V2 / k = 200 mL / 20 = 10 mL. Il faut donc une pipette jaugée de 10 mL (pour prélever V1) et une fiole jaugée de 200 mL (pour contenir V2)."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p03_q7",
          "type": "mcq",
          "prompt": "On mélange 100 mL d'une solution de NaCl à 0,40 mol/L et 300 mL d'une solution de NaCl à 0,20 mol/L. Quelle est la concentration molaire en NaCl du mélange résultant ?",
          "options": [
            "0,25 mol/L",
            "0,30 mol/L",
            "0,60 mol/L",
            "0,20 mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "n_tot = (0,40 × 0,100) + (0,20 × 0,300) = 0,040 + 0,060 = 0,100 mol. V_tot = 0,100 + 0,300 = 0,400 L. C_mix = 0,100 / 0,400 = 0,25 mol/L."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p04",
      "order": 4,
      "title": "Électroneutralité et bilan de conservation de la matière",
      "summary": "Loi de l'électroneutralité (LEN) macroscopique : Σ z_i · [Cation_i] = Σ |z_j| · [Anion_j], loi de conservation de la matière (LCM), méthode d'analyse des mélanges d'électrolytes, calcul d'une concentration inconnue et approximations légitimes.",
      "conceptExplanation": "Toute solution aqueuse est macroscopiquement électriquement neutre : la charge globale nette est rigoureusement nulle.\n\n1. Loi de l'électroneutralité (LEN) :\nLa somme des charges positives apportées par les cations est égale à la somme des charges négatives apportées par les anions :\nΣ z_i · [C_i] = Σ |z_j| · [A_j].\nAttention : la concentration effective de chaque ion est multipliée par la valeur absolue de sa charge. Par exemple pour une solution contenant Na⁺, Ca²⁺, Cl⁻ et SO4²⁻ :\n[Na⁺] + 2[Ca²⁺] + [H3O⁺] = [Cl⁻] + 2[SO4²⁻] + [OH⁻].\n\n2. Loi de conservation de la matière (LCM) :\nLa quantité totale apportée d'un élément ou d'un groupement se retrouve intégralement répartie entre les différentes formes moléculaires et ioniques présentes en solution. Pour un monoacide HA dissous à la concentration C :\nC = [HA] + [A⁻].\n\n3. Les 4 piliers de détermination de l'état d'équilibre d'une solution aqueuse :\n1° Les lois d'action de masse (Ka, Ks, etc.)\n2° Le produit ionique de l'eau Ke = [H3O⁺]·[OH⁻]\n3° La loi d'électroneutralité (LEN)\n4° Les équations de conservation de la matière (LCM).",
      "keyRule": "Loi d'électroneutralité : chaque concentration ionique est obligatoirement multipliée par la charge de l'ion : Σ z_i [Cation_i] = Σ |z_j| [Anion_j]. Les ions H3O⁺ et OH⁻ font toujours partie intégrante de la LEN.",
      "formulas": [
        {
          "name": "Loi d'Électroneutralité (LEN)",
          "formula": "\\sum z_i \\cdot [\\mathrm{Cation}_i] = \\sum |z_j| \\cdot [\\mathrm{Anion}_j]",
          "note": "Multiplication impérative par la valence de chaque ion"
        },
        {
          "name": "Conservation de la Matière (LCM)",
          "formula": "C_\\text{apportée} = \\sum [\\text{formes chimiques issues du soluté}]",
          "note": "Bilan atomique ou moléculaire invariant"
        }
      ],
      "workedExample": {
        "title": "Calcul de la concentration en ions hydrogénocarbonate dans une eau minérale",
        "statement": "Une analyse d'eau minérale donne : [Ca²⁺] = 3,0×10⁻³ mol/L, [Mg²⁺] = 1,0×10⁻³ mol/L, [Na⁺] = 2,0×10⁻³ mol/L, [Cl⁻] = 1,0×10⁻³ mol/L et [SO4²⁻] = 1,5×10⁻³ mol/L. Le seul autre anion présent est l'ion hydrogénocarbonate HCO3⁻. Sachant que le pH est neutre (7,2), calcule [HCO3⁻].",
        "methodSteps": [
          "Étape 1 : Écrire l'équation d'électroneutralité en négligeant [H3O⁺] et [OH⁻] devant 10⁻³ mol/L : 2[Ca²⁺] + 2[Mg²⁺] + [Na⁺] = [Cl⁻] + 2[SO4²⁻] + [HCO3⁻].",
          "Étape 2 : Calculer la charge totale des cations : 2(3,0×10⁻³) + 2(1,0×10⁻³) + 2,0×10⁻³ = 6,0×10⁻³ + 2,0×10⁻³ + 2,0×10⁻³ = 10,0×10⁻³ eq/L.",
          "Étape 3 : Calculer la charge des anions connus : [Cl⁻] + 2[SO4²⁻] = 1,0×10⁻³ + 2(1,5×10⁻³) = 4,0×10⁻³ eq/L.",
          "Étape 4 : Déduire [HCO3⁻] : [HCO3⁻] = 10,0×10⁻³ - 4,0×10⁻³ = 6,0×10⁻³ mol/L."
        ],
        "conclusion": "La concentration en ions hydrogénocarbonate s'élève à 6,0×10⁻³ mol/L (ou 6,0 mmol/L)."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau récapitulatif des lois de bilan en solution aqueuse",
        "tableData": {
          "headers": [
            "Loi de bilan",
            "Équation générale",
            "Signification physique",
            "Exemple d'application"
          ],
          "rows": [
            [
              "Électroneutralité (LEN)",
              "Σ z_i · [Cation_i] = Σ |z_j| · [Anion_j]",
              "Neutralité électrique globale de la solution",
              "2[Mg²⁺] + [Na⁺] + [H3O⁺] = 2[SO4²⁻] + [Cl⁻] + [OH⁻]"
            ],
            [
              "Conservation matière (LCM)",
              "C_soluté = Σ [formes dissoutes]",
              "Conservation des atomes apportés",
              "Acide éthanoïque : C = [CH3COOH] + [CH3COO⁻]"
            ],
            [
              "Produit ionique (Ke)",
              "Ke = [H3O⁺] · [OH⁻]",
              "Équilibre permanent d'autoprotolyse de l'eau",
              "À 25 °C, [OH⁻] = 10⁻¹⁴ / [H3O⁺]"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le principe fondamental d'électroneutralité",
          "stepTheme": "Électroneutralité",
          "stepBadge": "LEN",
          "paragraphText": "À l'échelle macroscopique, toute solution aqueuse est rigoureusement neutre. La concentration totale de charge positive portée par l'ensemble des cations équilibre exactement la concentration totale de charge négative portée par l'ensemble des anions : Σ z_i · [Cation_i] = Σ |z_j| · [Anion_j].",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p04_q1",
            "type": "mcq",
            "prompt": "Une solution aqueuse contient les ions Fe³⁺, Cu²⁺, K⁺, H3O⁺, SO4²⁻, NO3⁻ et OH⁻. Quelle est l'équation d'électroneutralité exacte ?",
            "options": [
              "3[Fe³⁺] + 2[Cu²⁺] + [K⁺] + [H3O⁺] = 2[SO4²⁻] + [NO3⁻] + [OH⁻]",
              "[Fe³⁺] + [Cu²⁺] + [K⁺] + [H3O⁺] = [SO4²⁻] + [NO3⁻] + [OH⁻]",
              "3[Fe³⁺] + 2[Cu²⁺] = 2[SO4²⁻] + [NO3⁻]",
              "[Fe³⁺]/3 + [Cu²⁺]/2 + [K⁺] = [SO4²⁻]/2 + [NO3⁻]"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque concentration molaire doit être pondérée par la charge de l'ion : 3 pour Fe³⁺, 2 pour Cu²⁺ et SO4²⁻, 1 pour K⁺, H3O⁺, NO3⁻ et OH⁻."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Conservation de la matière pour un soluté",
          "stepTheme": "Conservation de la matière",
          "stepBadge": "LCM",
          "paragraphText": "L'équation de conservation de la matière (LCM) exprime que la quantité apportée d'un soluté se retrouve sous l'ensemble de ses formes chimiques dissoutes. Pour une solution d'acide formique HCOOH apporté à la concentration C : C = [HCOOH] + [HCOO⁻].",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p04_q2",
            "type": "mcq",
            "prompt": "On dissout de l'acide hypochloreux HClO (acide faible) à la concentration apportée C = 0,020 mol/L. Si la mesure donne [ClO⁻] = 1,2×10⁻⁴ mol/L, quelle est la concentration en molécules HClO non dissociées restant en solution ?",
            "options": [
              "0,01988 mol/L (soit environ 0,020 mol/L)",
              "0,02012 mol/L",
              "1,2×10⁻⁴ mol/L",
              "0 mol/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D'après la LCM : [HClO] = C - [ClO⁻] = 0,020 - 0,00012 = 0,01988 mol/L. La quasi-totalité de l'acide faible reste non dissociée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calcul d'une concentration inconnue par l'électroneutralité",
          "stepTheme": "Résolution par LEN",
          "stepBadge": "Application directe",
          "paragraphText": "L'électroneutralité fournit une relation algébrique directe pour calculer la concentration d'un ion non mesuré. Dans les eaux courantes à pH compris entre 6 et 8, les ions H3O⁺ et OH⁻ (concentrations <= 10⁻⁶ mol/L) sont totalement négligeables devant les ions minéraux majeurs.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p04_q3",
            "type": "mcq",
            "prompt": "Dans une eau de rivière neutre : [Al³⁺] = 1,0×10⁻⁴ mol/L, [Na⁺] = 2,0×10⁻⁴ mol/L, [NO3⁻] = 1,0×10⁻⁴ mol/L. Le seul autre ion présent est l'ion sulfate SO4²⁻. Quelle est la concentration en ions sulfate [SO4²⁻] ?",
            "options": [
              "2,0×10⁻⁴ mol/L",
              "4,0×10⁻⁴ mol/L",
              "1,0×10⁻⁴ mol/L",
              "5,0×10⁻⁴ mol/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "LEN : 3[Al³⁺] + [Na⁺] = [NO3⁻] + 2[SO4²⁻]. Soit 3(1,0×10⁻⁴) + 2,0×10⁻⁴ = 1,0×10⁻⁴ + 2[SO4²⁻] => 5,0×10⁻⁴ = 1,0×10⁻⁴ + 2[SO4²⁻] => 2[SO4²⁻] = 4,0×10⁻⁴ => [SO4²⁻] = 2,0×10⁻⁴ mol/L."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Mélange de solutions salines sans réaction chimique",
          "stepTheme": "Mélanges d'électrolytes",
          "stepBadge": "Dilution des ions",
          "paragraphText": "Lorsque l'on mélange des solutions contenant des ions différents sans précipitation ni réaction acido-basique, chaque ion est simplement dilué dans le volume total V_tot = V1 + V2. La concentration finale de chaque ion vaut [X] = n_initial(X) / V_tot.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p04_q4",
            "type": "mcq",
            "prompt": "On mélange 50 mL de solution de MgCl2 à 0,10 mol/L et 50 mL de solution de KCl à 0,20 mol/L. Quelle est la concentration en ions chlorure [Cl⁻] dans le mélange ?",
            "options": [
              "0,20 mol/L",
              "0,15 mol/L",
              "0,30 mol/L",
              "0,10 mol/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "n(Cl⁻) = (2 × C1 × V1) + (1 × C2 × V2) = (2 × 0,10 × 0,050) + (0,20 × 0,050) = 0,010 + 0,010 = 0,020 mol. V_tot = 0,100 L. Donc [Cl⁻] = 0,020 / 0,100 = 0,20 mol/L."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le système des 4 piliers d'équilibre",
          "stepTheme": "Résolution analytique",
          "stepBadge": "Méthode experte",
          "paragraphText": "L'état d'équilibre complet de toute solution aqueuse est déterminé par la résolution conjointe d'un système de 4 relations : 1° Loi d'action de masse (Ka) ; 2° Produit ionique de l'eau (Ke) ; 3° Électroneutralité (LEN) ; 4° Conservation de la matière (LCM). Le système comporte autant d'équations que d'inconnues.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p04_q5",
            "type": "mcq",
            "prompt": "Dans une solution aqueuse d'ammoniac NH3 de concentration C, quelles sont les 4 espèces chimiques solutés dont on doit déterminer la concentration ?",
            "options": [
              "NH3, NH4⁺, H3O⁺ et OH⁻",
              "NH3, N2, H2 et O2",
              "NH4⁺ et OH⁻ uniquement",
              "H3O⁺ et OH⁻ uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les 4 espèces dissoutes en solution sont la base non protonée NH3, son acide conjugué NH4⁺, et les ions du solvant H3O⁺ et OH⁻."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Approximations légitimes en milieu acide ou basique",
          "stepTheme": "Simplification des équations",
          "stepBadge": "Approximations",
          "paragraphText": "Pour simplifier la résolution : en milieu acide (pH <= 6), [OH⁻] <= 10⁻⁸ mol/L est totalement négligeable devant [H3O⁺] dans la LEN. Inversement, en milieu basique (pH >= 8), [H3O⁺] <= 10⁻⁸ mol/L est négligeable devant [OH⁻].",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p04_q6",
            "type": "mcq",
            "prompt": "Une solution a un pH de 2,5 à 25 °C. Quel est le rapport [OH⁻] / [H3O⁺] et que permet-il de simplifier dans la LEN ?",
            "options": [
              "[OH⁻]/[H3O⁺] = 10⁻⁹ : on peut rigoureusement négliger [OH⁻] devant [H3O⁺].",
              "[OH⁻]/[H3O⁺] = 1 : les deux concentrations sont égales.",
              "[OH⁻]/[H3O⁺] = 10⁹ : on peut négliger [H3O⁺].",
              "Aucune simplification n'est jamais autorisée en chimie."
            ],
            "correctAnswerIndex": 0,
            "explanation": "À pH = 2,5, [H3O⁺] = 3,16×10⁻³ mol/L et [OH⁻] = 3,16×10⁻¹² mol/L. Le rapport vaut 10⁻⁹ (un milliardième). [OH⁻] est donc infinitésimale devant [H3O⁺]."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Vérification de la balance ionique en laboratoire d'analyse",
          "stepTheme": "Contrôle qualité",
          "stepBadge": "Balance ionique",
          "paragraphText": "En hydrogéologie et contrôle sanitaire, on calcule l'écart de balance ionique B = |Σ cations - Σ anions| / (Σ cations + Σ anions) × 100 %. Une analyse d'eau n'est certifiée valide que si B < 5 %. Un écart supérieur révèle une anomalie de dosage ou une pollution non répertoriée.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p04_q7",
            "type": "mcq",
            "prompt": "Un rapport d'analyse d'eau de consommation indique : total des équivalents cations = 5,10 meq/L et total des anions = 5,02 meq/L. Quel est l'écart de balance ionique et le résultat est-il acceptable ?",
            "options": [
              "Écart d'environ 0,79 % (< 5 %) : l'analyse est validée conforme au principe d'électroneutralité.",
              "Écart de 12 % : l'analyse doit être rejetée.",
              "L'analyse est fausse car l'écart doit être de 0,000 % sans aucune tolérance expérimentale.",
              "L'eau est impropre à la consommation car les cations dominent."
            ],
            "correctAnswerIndex": 0,
            "explanation": "B = |5,10 - 5,02| / (5,10 + 5,02) × 100 % = 0,08 / 10,12 × 100 % ≈ 0,79 %. Cet écart est très largement inférieur au seuil d'incertitude toléré (5 %), validant la grande fiabilité du dosage."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p04_q1",
          "type": "mcq",
          "prompt": "Une solution aqueuse contient les ions Fe³⁺, Cu²⁺, K⁺, H3O⁺, SO4²⁻, NO3⁻ et OH⁻. Quelle est l'équation d'électroneutralité exacte ?",
          "options": [
            "3[Fe³⁺] + 2[Cu²⁺] + [K⁺] + [H3O⁺] = 2[SO4²⁻] + [NO3⁻] + [OH⁻]",
            "[Fe³⁺] + [Cu²⁺] + [K⁺] + [H3O⁺] = [SO4²⁻] + [NO3⁻] + [OH⁻]",
            "3[Fe³⁺] + 2[Cu²⁺] = 2[SO4²⁻] + [NO3⁻]",
            "[Fe³⁺]/3 + [Cu²⁺]/2 + [K⁺] = [SO4²⁻]/2 + [NO3⁻]"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque concentration molaire doit être pondérée par la charge de l'ion : 3 pour Fe³⁺, 2 pour Cu²⁺ et SO4²⁻, 1 pour K⁺, H3O⁺, NO3⁻ et OH⁻."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p04_q2",
          "type": "mcq",
          "prompt": "On dissout de l'acide hypochloreux HClO (acide faible) à la concentration apportée C = 0,020 mol/L. Si la mesure donne [ClO⁻] = 1,2×10⁻⁴ mol/L, quelle est la concentration en molécules HClO non dissociées restant en solution ?",
          "options": [
            "0,01988 mol/L (soit environ 0,020 mol/L)",
            "0,02012 mol/L",
            "1,2×10⁻⁴ mol/L",
            "0 mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après la LCM : [HClO] = C - [ClO⁻] = 0,020 - 0,00012 = 0,01988 mol/L. La quasi-totalité de l'acide faible reste non dissociée."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p04_q3",
          "type": "mcq",
          "prompt": "Dans une eau de rivière neutre : [Al³⁺] = 1,0×10⁻⁴ mol/L, [Na⁺] = 2,0×10⁻⁴ mol/L, [NO3⁻] = 1,0×10⁻⁴ mol/L. Le seul autre ion présent est l'ion sulfate SO4²⁻. Quelle est la concentration en ions sulfate [SO4²⁻] ?",
          "options": [
            "2,0×10⁻⁴ mol/L",
            "4,0×10⁻⁴ mol/L",
            "1,0×10⁻⁴ mol/L",
            "5,0×10⁻⁴ mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "LEN : 3[Al³⁺] + [Na⁺] = [NO3⁻] + 2[SO4²⁻]. Soit 3(1,0×10⁻⁴) + 2,0×10⁻⁴ = 1,0×10⁻⁴ + 2[SO4²⁻] => 5,0×10⁻⁴ = 1,0×10⁻⁴ + 2[SO4²⁻] => 2[SO4²⁻] = 4,0×10⁻⁴ => [SO4²⁻] = 2,0×10⁻⁴ mol/L."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p04_q4",
          "type": "mcq",
          "prompt": "On mélange 50 mL de solution de MgCl2 à 0,10 mol/L et 50 mL de solution de KCl à 0,20 mol/L. Quelle est la concentration en ions chlorure [Cl⁻] dans le mélange ?",
          "options": [
            "0,20 mol/L",
            "0,15 mol/L",
            "0,30 mol/L",
            "0,10 mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "n(Cl⁻) = (2 × C1 × V1) + (1 × C2 × V2) = (2 × 0,10 × 0,050) + (0,20 × 0,050) = 0,010 + 0,010 = 0,020 mol. V_tot = 0,100 L. Donc [Cl⁻] = 0,020 / 0,100 = 0,20 mol/L."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p04_q5",
          "type": "mcq",
          "prompt": "Dans une solution aqueuse d'ammoniac NH3 de concentration C, quelles sont les 4 espèces chimiques solutés dont on doit déterminer la concentration ?",
          "options": [
            "NH3, NH4⁺, H3O⁺ et OH⁻",
            "NH3, N2, H2 et O2",
            "NH4⁺ et OH⁻ uniquement",
            "H3O⁺ et OH⁻ uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les 4 espèces dissoutes en solution sont la base non protonée NH3, son acide conjugué NH4⁺, et les ions du solvant H3O⁺ et OH⁻."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p04_q6",
          "type": "mcq",
          "prompt": "Une solution a un pH de 2,5 à 25 °C. Quel est le rapport [OH⁻] / [H3O⁺] et que permet-il de simplifier dans la LEN ?",
          "options": [
            "[OH⁻]/[H3O⁺] = 10⁻⁹ : on peut rigoureusement négliger [OH⁻] devant [H3O⁺].",
            "[OH⁻]/[H3O⁺] = 1 : les deux concentrations sont égales.",
            "[OH⁻]/[H3O⁺] = 10⁹ : on peut négliger [H3O⁺].",
            "Aucune simplification n'est jamais autorisée en chimie."
          ],
          "correctAnswerIndex": 0,
          "explanation": "À pH = 2,5, [H3O⁺] = 3,16×10⁻³ mol/L et [OH⁻] = 3,16×10⁻¹² mol/L. Le rapport vaut 10⁻⁹ (un milliardième). [OH⁻] est donc infinitésimale devant [H3O⁺]."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p04_q7",
          "type": "mcq",
          "prompt": "Un rapport d'analyse d'eau de consommation indique : total des équivalents cations = 5,10 meq/L et total des anions = 5,02 meq/L. Quel est l'écart de balance ionique et le résultat est-il acceptable ?",
          "options": [
            "Écart d'environ 0,79 % (< 5 %) : l'analyse est validée conforme au principe d'électroneutralité.",
            "Écart de 12 % : l'analyse doit être rejetée.",
            "L'analyse est fausse car l'écart doit être de 0,000 % sans aucune tolérance expérimentale.",
            "L'eau est impropre à la consommation car les cations dominent."
          ],
          "correctAnswerIndex": 0,
          "explanation": "B = |5,10 - 5,02| / (5,10 + 5,02) × 100 % = 0,08 / 10,12 × 100 % ≈ 0,79 %. Cet écart est très largement inférieur au seuil d'incertitude toléré (5 %), validant la grande fiabilité du dosage."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p05",
      "order": 5,
      "title": "Définition, domaine de validité et mesure expérimentale du pH",
      "summary": "Définition opérationnelle de Sørensen pH = -log[H3O⁺], relation réciproque [H3O⁺] = 10^(-pH), règle des chiffres significatifs sur la mantisse logarithmique, domaine de validité aux solutions diluées (C <= 0,1 mol/L), papier pH, indicateurs colorés acido-basiques et zone de virage [pKi - 1, pKi + 1], principe et étalonnage obligatoire du pH-mètre à électrode combinée de verre.",
      "conceptExplanation": "1. Définition du pH par Sørensen (1909) :\nPour des solutions aqueuses diluées (C <= 10⁻¹ mol/L), le pH est défini par :\npH = -log10([H3O⁺] / C°), où C° = 1 mol/L est la concentration standard de référence.\nRéciproquement : [H3O⁺] = 10^(-pH) mol/L.\n\n2. Règle des chiffres significatifs :\nDans la valeur d'un pH, seule la partie décimale après la virgule (la mantisse) représente les chiffres significatifs. La partie entière indique uniquement la puissance de 10. Ainsi, [H3O⁺] = 3,5×10⁻⁴ mol/L (2 chiffres significatifs) donne pH = 3,46 (2 décimales après la virgule).\n\n3. Domaine de validité :\nLa formule pH = -log[H3O⁺] n'est valide que pour les solutions diluées où le coefficient d'activité γ(H3O⁺) ≈ 1. En solution très concentrée (acide pur à 12 mol/L), l'activité thermodynamique a(H3O⁺) remplace la concentration et la relation simple ne s'applique plus.\n\n4. Méthodes de mesure du pH :\n- Papier indicateur de pH : bandelette imprégnée d'un mélange de colorants, mesure rapide et qualitative à ± 0,5 à 1 unité de pH.\n- Indicateurs colorés acido-basiques : couples HIn / In⁻ de teintes distinctes. La zone de virage s'étend sur l'intervalle [pKi - 1 ; pKi + 1]. La teinte intermédiaire est la teinte sensible.\n- pH-mètre numérique : appareil potentiométrique mesurant la différence de potentiel ΔE entre une électrode de verre et une électrode de référence selon la loi de Nernst (environ 59 mV par unité de pH à 25 °C). Il nécessite un étalonnage obligatoire avec deux tampons (tampon pH = 7,00 puis tampon pH = 4,01 ou 10,01).",
      "keyRule": "pH = -log[H3O⁺] et [H3O⁺] = 10^(-pH) pour C <= 0,1 mol/L. Le pH-mètre doit toujours être étalonné à deux solutions tampons (pH = 7,00 pour le zéro, puis pH = 4,01 ou 10,01 pour la pente) avant toute mesure.",
      "formulas": [
        {
          "name": "Définition opérationnelle du pH",
          "formula": "\\mathrm{pH} = -\\log_{10}\\left(\\frac{[\\mathrm{H_3O^+}]}{C^\\circ}\\right) \\iff [\\mathrm{H_3O^+}] = C^\\circ \\cdot 10^{-\\mathrm{pH}}",
          "note": "Valable pour [H3O⁺] <= 0,1 mol/L, C° = 1 mol/L"
        },
        {
          "name": "Loi de Nernst de l'électrode combinée de pH",
          "formula": "\\Delta E = E_0 - \\left(\\frac{2{,}303 \\, R \\, T}{F}\\right) \\cdot \\mathrm{pH} \\approx E_0 - 0{,}0592 \\cdot \\mathrm{pH} \\quad (\\text{à } 25\\,^\\circ\\mathrm{C})",
          "note": "Pente de 59 mV par unité de pH"
        }
      ],
      "workedExample": {
        "title": "Calcul de pH et application de la règle des chiffres significatifs",
        "statement": "Une solution aqueuse a une concentration en ions oxonium [H3O⁺] = 4,8×10⁻³ mol/L. Calcule son pH en respectant scrupuleusement la règle des chiffres significatifs. Sachant que log(4,8) ≈ 0,68.",
        "methodSteps": [
          "Étape 1 : Analyser le nombre de chiffres significatifs : 4,8 comporte 2 chiffres significatifs.",
          "Étape 2 : Appliquer la formule du pH : pH = -log(4,8×10⁻³) = -(log 4,8 + log 10⁻³) = -(0,68 - 3) = 3 - 0,68 = 2,32.",
          "Étape 3 : Écriture finale : la mantisse doit comporter exactement 2 décimales après la virgule."
        ],
        "conclusion": "Le pH s'écrit rigoureusement pH = 2,32."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Comparaison des trois méthodes de détermination du pH",
        "tableData": {
          "headers": [
            "Outil expérimental",
            "Principe de fonctionnement",
            "Précision de mesure",
            "Usage recommandé"
          ],
          "rows": [
            [
              "Papier pH",
              "Mélange d'indicateurs colorés absorbés sur papier",
              "± 0,5 à 1 unité de pH",
              "Estimation qualitative rapide sur le terrain"
            ],
            [
              "Indicateurs colorés liquides",
              "Couple faible HIn/In⁻ à zone de virage [pKi-1, pKi+1]",
              "Zone de virage (~2 unités)",
              "Repérage visuel de l'équivalence d'un titrage"
            ],
            [
              "pH-mètre potentiométrique",
              "Mesure de ddp (Nernst, 59 mV/pH) à travers membrane de verre",
              "± 0,01 à 0,05 unité de pH",
              "Dosages pH-métriques précis et suivi cinétique"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de Sørensen du pH",
          "stepTheme": "Définition du pH",
          "stepBadge": "Sørensen (1909)",
          "paragraphText": "Le pH est défini pour les solutions aqueuses diluées par la relation : pH = -log10([H3O⁺] / C°), avec C° = 1 mol/L. Réciproquement, la concentration en ions oxonium s'exprime par : [H3O⁺] = 10^(-pH) mol/L.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p05_q1",
            "type": "mcq",
            "prompt": "Une solution aqueuse a une concentration [H3O⁺] = 5,0×10⁻⁴ mol/L. Sachant que log(5) ≈ 0,70, que vaut son pH ?",
            "options": [
              "pH = 3,30",
              "pH = 4,70",
              "pH = 3,70",
              "pH = 4,00"
            ],
            "correctAnswerIndex": 0,
            "explanation": "pH = -log(5,0×10⁻⁴) = -(log 5 + log 10⁻⁴) = -(0,70 - 4) = 4 - 0,70 = 3,30."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Règle des chiffres significatifs pour les grandeurs logarithmiques",
          "stepTheme": "Chiffres significatifs",
          "stepBadge": "Règle de précision",
          "paragraphText": "Pour une valeur de pH, seuls les chiffres placés après la virgule sont significatifs. La partie entière avant la virgule ne fait que donner l'ordre de grandeur de la puissance de 10.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p05_q2",
            "type": "mcq",
            "prompt": "Si la concentration en ions oxonium est [H3O⁺] = 1,25×10⁻⁵ mol/L (3 chiffres significatifs), comment doit-on exprimer le pH calculé ?",
            "options": [
              "pH = 4,903 (3 chiffres après la virgule)",
              "pH = 4,9 (1 chiffre après la virgule)",
              "pH = 4,90 (2 chiffres après la virgule)",
              "pH = 5"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme [H3O⁺] compte 3 chiffres significatifs, le pH doit comporter 3 décimales après la virgule : -log(1,25×10⁻⁵) = 5 - log(1,25) = 5 - 0,0969 = 4,9031... arrondi à 4,903."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Domaine de validité de la relation de Sørensen",
          "stepTheme": "Validité thermodynamique",
          "stepBadge": "Solutions diluées",
          "paragraphText": "La formule pH = -log[H3O⁺] n'est applicable qu'aux solutions diluées de concentration C <= 10⁻¹ mol/L. Au-delà, les interactions électrostatiques inter-ioniques deviennent dominantes et imposent l'usage des activités thermodynamiques.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p05_q3",
            "type": "mcq",
            "prompt": "Peut-on appliquer directement la formule pH = -log[H3O⁺] à une solution commerciale d'acide chlorhydrique à C = 12 mol/L ?",
            "options": [
              "Non, car la solution est beaucoup trop concentrée (C >> 0,1 mol/L) et le coefficient d'activité est très éloigné de 1.",
              "Oui, le pH vaut exactement -1,08 sans aucune restriction.",
              "Oui, car la formule s'applique à toute solution liquide.",
              "Non, car le pH ne peut jamais être mesuré avec un appareil pour un acide."
            ],
            "correctAnswerIndex": 0,
            "explanation": "La relation simplifiée de Sørensen n'est valide qu'en solution aqueuse diluée (C <= 0,1 mol/L). À 12 mol/L, les fortes interactions électrostatiques imposent l'usage de l'activité thermodynamique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Indicateurs colorés acido-basiques et zone de virage",
          "stepTheme": "Indicateurs colorés",
          "stepBadge": "Zone de virage",
          "paragraphText": "Un indicateur coloré est un couple acide/base faible HIn / In⁻ dont les deux formes ont des couleurs différentes. L'œil perçoit la teinte acide si pH <= pKi - 1, la teinte basique si pH >= pKi + 1, et une teinte intermédiaire (sensible) dans la zone de virage [pKi - 1 ; pKi + 1].",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p05_q4",
            "type": "mcq",
            "prompt": "L'hélianthine (méthylorange) a un pKi de 3,7. Sa forme acide est rouge et sa forme basique est jaune. Quelle est sa zone de virage et quelle sera sa couleur à pH = 5,0 ?",
            "options": [
              "Zone de virage [3,1 - 4,4] ; couleur jaune",
              "Zone de virage [3,1 - 4,4] ; couleur rouge",
              "Zone de virage [6,0 - 7,6] ; couleur verte",
              "Zone de virage [8,2 - 10,0] ; incolore"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La zone de virage s'étend de 3,1 à 4,4. À pH = 5,0 (pH > 4,4), la forme basique In⁻ est très largement prédominante : l'hélianthine prend sa teinte jaune."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Principe du pH-mètre potentiométrique",
          "stepTheme": "Potentiométrie",
          "stepBadge": "Loi de Nernst",
          "paragraphText": "Le pH-mètre mesure la différence de potentiel entre une électrode de verre sensible aux ions H3O⁺ et une électrode de référence (au calomel saturé ou Ag/AgCl). Selon l'équation de Nernst, à 25 °C, cette tension varie de 59 mV par unité de pH.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p05_q5",
            "type": "mcq",
            "prompt": "À 25 °C, de combien varie la différence de potentiel aux bornes de la sonde pH-métrique lorsque le pH de la solution augmente de 2 unités (par exemple de 3,0 à 5,0) ?",
            "options": [
              "Elle varie d'environ 118 mV (2 × 59 mV)",
              "Elle varie de 2 V",
              "Elle varie de 14 mV",
              "Elle ne varie pas car la sonde est insensible au pH"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D'après la loi de Nernst, chaque unité de pH induit une variation de potentiel de 59 mV. Pour une variation de 2 unités de pH : ΔE = 2 × 59 mV = 118 mV."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Protocole d'étalonnage obligatoire du pH-mètre",
          "stepTheme": "Étalonnage",
          "stepBadge": "Solutions tampons",
          "paragraphText": "Avant toute série de mesures, le pH-mètre doit obligatoirement être étalonné à l'aide de deux solutions tampons certifiées : d'abord le tampon neutre pH = 7,00 (pour régler le zéro), puis un second tampon (pH = 4,01 en milieu acide ou pH = 10,01 en milieu basique) pour caler la pente de l'électrode.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p05_q6",
            "type": "mcq",
            "prompt": "Pour effectuer un dosage acido-basique d'une solution d'acide chlorhydrique par la soude où le pH va évoluer de 2 à 12, quels tampons de calibration doit-on idéalement utiliser ?",
            "options": [
              "Les tampons certifiés pH = 7,00 puis pH = 4,01 et/ou 10,01.",
              "De l'eau distillée et de l'acide pur.",
              "Une solution de savon et du vinaigre de table.",
              "Un seul tampon à pH = 1,00."
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'étalonnage d'un pH-mètre s'effectue obligatoirement avec des solutions tampons étalons normalisées : pH 7,00 pour le zéro, complété par pH 4,01 et/ou pH 10,01 pour caler la pente de réponse de la sonde."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Entretien et conservation de l'électrode de verre",
          "stepTheme": "Conservation de sonde",
          "stepBadge": "Conservation en KCl",
          "paragraphText": "La bulle de verre d'une électrode combinée ne doit jamais être conservée dans de l'eau distillée : le gradient osmotique épuiserait les ions de l'électrolyte de référence. On doit la conserver impérativement dans une solution concentrée de KCl (3 mol/L) et la sécher par tamponnement doux sans frotter.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p05_q7",
            "type": "mcq",
            "prompt": "Pourquoi est-il proscrit de frotter énergiquement la bulle de verre d'un pH-mètre avec du papier absorbant lors du séchage ?",
            "options": [
              "Parce que le frottement crée des charges électrostatiques sur le verre qui faussent durablement la mesure du potentiel.",
              "Parce que le papier absorbe les protons du réseau cristallin du verre.",
              "Parce que cela provoque l'explosion thermique du bulbe.",
              "Parce que l'acide chlorhydrique de l'électrode s'évapore instantanément."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le frottement mécanique génère une triboélectricité (charges électrostatiques) sur la membrane de verre isolante, provoquant des tensions parasites qui perturbent la mesure. Il faut toujours sécher délicatement par simple tamponnement doux."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p05_q1",
          "type": "mcq",
          "prompt": "Une solution aqueuse a une concentration [H3O⁺] = 5,0×10⁻⁴ mol/L. Sachant que log(5) ≈ 0,70, que vaut son pH ?",
          "options": [
            "pH = 3,30",
            "pH = 4,70",
            "pH = 3,70",
            "pH = 4,00"
          ],
          "correctAnswerIndex": 0,
          "explanation": "pH = -log(5,0×10⁻⁴) = -(log 5 + log 10⁻⁴) = -(0,70 - 4) = 4 - 0,70 = 3,30."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p05_q2",
          "type": "mcq",
          "prompt": "Si la concentration en ions oxonium est [H3O⁺] = 1,25×10⁻⁵ mol/L (3 chiffres significatifs), comment doit-on exprimer le pH calculé ?",
          "options": [
            "pH = 4,903 (3 chiffres après la virgule)",
            "pH = 4,9 (1 chiffre après la virgule)",
            "pH = 4,90 (2 chiffres après la virgule)",
            "pH = 5"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme [H3O⁺] compte 3 chiffres significatifs, le pH doit comporter 3 décimales après la virgule : -log(1,25×10⁻⁵) = 5 - log(1,25) = 5 - 0,0969 = 4,9031... arrondi à 4,903."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p05_q3",
          "type": "mcq",
          "prompt": "Peut-on appliquer directement la formule pH = -log[H3O⁺] à une solution commerciale d'acide chlorhydrique à C = 12 mol/L ?",
          "options": [
            "Non, car la solution est beaucoup trop concentrée (C >> 0,1 mol/L) et le coefficient d'activité est très éloigné de 1.",
            "Oui, le pH vaut exactement -1,08 sans aucune restriction.",
            "Oui, car la formule s'applique à toute solution liquide.",
            "Non, car le pH ne peut jamais être mesuré avec un appareil pour un acide."
          ],
          "correctAnswerIndex": 0,
          "explanation": "La relation simplifiée de Sørensen n'est valide qu'en solution aqueuse diluée (C <= 0,1 mol/L). À 12 mol/L, les fortes interactions électrostatiques imposent l'usage de l'activité thermodynamique."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p05_q4",
          "type": "mcq",
          "prompt": "L'hélianthine (méthylorange) a un pKi de 3,7. Sa forme acide est rouge et sa forme basique est jaune. Quelle est sa zone de virage et quelle sera sa couleur à pH = 5,0 ?",
          "options": [
            "Zone de virage [3,1 - 4,4] ; couleur jaune",
            "Zone de virage [3,1 - 4,4] ; couleur rouge",
            "Zone de virage [6,0 - 7,6] ; couleur verte",
            "Zone de virage [8,2 - 10,0] ; incolore"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La zone de virage s'étend de 3,1 à 4,4. À pH = 5,0 (pH > 4,4), la forme basique In⁻ est très largement prédominante : l'hélianthine prend sa teinte jaune."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p05_q5",
          "type": "mcq",
          "prompt": "À 25 °C, de combien varie la différence de potentiel aux bornes de la sonde pH-métrique lorsque le pH de la solution augmente de 2 unités (par exemple de 3,0 à 5,0) ?",
          "options": [
            "Elle varie d'environ 118 mV (2 × 59 mV)",
            "Elle varie de 2 V",
            "Elle varie de 14 mV",
            "Elle ne varie pas car la sonde est insensible au pH"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après la loi de Nernst, chaque unité de pH induit une variation de potentiel de 59 mV. Pour une variation de 2 unités de pH : ΔE = 2 × 59 mV = 118 mV."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p05_q6",
          "type": "mcq",
          "prompt": "Pour effectuer un dosage acido-basique d'une solution d'acide chlorhydrique par la soude où le pH va évoluer de 2 à 12, quels tampons de calibration doit-on idéalement utiliser ?",
          "options": [
            "Les tampons certifiés pH = 7,00 puis pH = 4,01 et/ou 10,01.",
            "De l'eau distillée et de l'acide pur.",
            "Une solution de savon et du vinaigre de table.",
            "Un seul tampon à pH = 1,00."
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'étalonnage d'un pH-mètre s'effectue obligatoirement avec des solutions tampons étalons normalisées : pH 7,00 pour le zéro, complété par pH 4,01 et/ou pH 10,01 pour caler la pente de réponse de la sonde."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p05_q7",
          "type": "mcq",
          "prompt": "Pourquoi est-il proscrit de frotter énergiquement la bulle de verre d'un pH-mètre avec du papier absorbant lors du séchage ?",
          "options": [
            "Parce que le frottement crée des charges électrostatiques sur le verre qui faussent durablement la mesure du potentiel.",
            "Parce que le papier absorbe les protons du réseau cristallin du verre.",
            "Parce que cela provoque l'explosion thermique du bulbe.",
            "Parce que l'acide chlorhydrique de l'électrode s'évapore instantanément."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le frottement mécanique génère une triboélectricité (charges électrostatiques) sur la membrane de verre isolante, provoquant des tensions parasites qui perturbent la mesure. Il faut toujours sécher délicatement par simple tamponnement doux."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p06",
      "order": 6,
      "title": "Classification acidobasique, dilution limite et applications",
      "summary": "Classification à 25 °C (acide pH < 7, neutre pH = 7, basique pH > 7), effet de la dilution sur un acide (augmentation de pH vers 7) et sur une base (baisse de pH vers 7), le mur asymptotique de la dilution infinie (le pH d'un acide ne dépasse jamais 7), et applications médicales (tampons sanguins), agronomiques (chaulage des sols acides de Côte d'Ivoire) et écologiques (acidification des océans).",
      "conceptExplanation": "1. Classification acido-basique à 25 °C :\n- Solution neutre : [H3O⁺] = [OH⁻] = 1,0×10⁻⁷ mol/L <=> pH = 7,0\n- Solution acide : [H3O⁺] > [OH⁻] <=> [H3O⁺] > 1,0×10⁻⁷ mol/L <=> pH < 7,0\n- Solution basique : [H3O⁺] < [OH⁻] <=> [H3O⁺] < 1,0×10⁻⁷ mol/L <=> pH > 7,0.\n\n2. Effet de la dilution par de l'eau pure distillée :\n- Pour une solution d'acide fort : diluer 10 fois (k = 10) diminue [H3O⁺] d'un facteur 10, donc le pH augmente de 1 unité : pH' = pH + 1.\n- Pour une solution de base forte : diluer 10 fois diminue [OH⁻] d'un facteur 10, donc le pH diminue de 1 unité : pH' = pH - 1.\n\n3. La limite fondamentale de la dilution infinie :\nLorsqu'un acide fort est extrêmement dilué (C <= 10⁻⁷ mol/L), la formule pH = -log C conduirait à un pH >= 7, ce qui est physiquement impossible (ajouter de l'eau pure à un acide ne peut pas le rendre basique !). En tenant compte de l'autoprotolyse de l'eau via l'électroneutralité [H3O⁺] = C + Ke/[H3O⁺], on obtient [H3O⁺]² - C·[H3O⁺] - Ke = 0. Le pH d'un acide dilué tend asymptotiquement vers 7,0 sans jamais le dépasser.\n\n4. Enjeux et applications pratiques :\n- Biologie humaine : pH sanguin régulé très étroitement entre 7,35 et 7,45 par le système tampon CO2/HCO3⁻. Une déviation hors de [7,0 ; 7,8] est mortelle.\n- Agronomie tropicale : en Côte d'Ivoire, les sols ferrallitiques lessivés sont souvent acides (pH < 5,0). On pratique le chaulage (apport de chaux Ca(OH)2 ou de calcaire CaCO3) pour remonter le pH vers 6,0-6,5 et neutraliser l'aluminium toxique.\n- Environnement : les pluies acides (pH < 4,5) et l'acidification des océans par le CO2 anthropique menacent les coraux et les espèces marines à coquille calcaire.",
      "keyRule": "Sous l'effet d'une dilution à l'eau pure, le pH d'un acide augmente et tend vers 7,0 sans jamais dépasser 7. Le pH d'une base diminue et tend vers 7,0 sans jamais descendre sous 7. Le sang humain est régulé à pH 7,40.",
      "formulas": [
        {
          "name": "Équation exacte d'un acide fort très dilué",
          "formula": "[\\mathrm{H_3O^+}]^2 - C \\cdot [\\mathrm{H_3O^+}] - K_e = 0",
          "note": "Valable pour C < 10⁻⁶ mol/L, montre que pH < 7 toujours"
        },
        {
          "name": "Variation de pH sous dilution d'un facteur 10",
          "formula": "\\Delta \\mathrm{pH}_\\text{acide fort} = +1 \\quad ; \\quad \\Delta \\mathrm{pH}_\\text{base forte} = -1",
          "note": "Par dilution d'un facteur 10 (k = 10) en zone non limite"
        }
      ],
      "workedExample": {
        "title": "Calcul du pH réel d'un acide fort à concentration C = 1,0×10⁻⁸ mol/L",
        "statement": "On dispose d'une solution d'acide chlorhydrique HCl très diluée de concentration C = 1,0×10⁻⁸ mol/L à 25 °C. Démontre pourquoi le pH n'est pas égal à 8,0 et calcule sa valeur réelle.",
        "methodSteps": [
          "Étape 1 : Constater l'absurdité du calcul simplifié : pH = -log(10⁻⁸) = 8,0. Une solution d'acide ne peut en aucun cas être basique !",
          "Étape 2 : Écrire l'électroneutralité en tenant compte de l'autoprotolyse de l'eau : [H3O⁺] = [Cl⁻] + [OH⁻] = C + Ke / [H3O⁺].",
          "Étape 3 : Établir l'équation du second degré : [H3O⁺]² - C·[H3O⁺] - Ke = 0, soit [H3O⁺]² - 10⁻⁸ [H3O⁺] - 10⁻¹⁴ = 0.",
          "Étape 4 : Calculer le discriminant : Δ = (10⁻⁸)² + 4(10⁻¹⁴) = 10⁻¹⁶ + 4×10⁻¹⁴ ≈ 4,01×10⁻¹⁴. √Δ ≈ 2,002×10⁻⁷.",
          "Étape 5 : Racine positive : [H3O⁺] = (1,0×10⁻⁸ + 2,002×10⁻⁷) / 2 ≈ 1,05×10⁻⁷ mol/L.",
          "Étape 6 : En déduire le pH : pH = -log(1,05×10⁻⁷) ≈ 6,98."
        ],
        "conclusion": "Le pH réel vaut 6,98 : la solution est extrêmement proche de la neutralité mais reste rigoureusement acide (pH < 7)."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Évolution du pH sous dilution infinie à 25 °C",
        "tableData": {
          "headers": [
            "Type de solution",
            "pH initial",
            "Effet d'une dilution 10 fois",
            "Comportement à la dilution infinie (eau pure)"
          ],
          "rows": [
            [
              "Acide fort (HCl)",
              "pH < 7 (ex : 2,0)",
              "Le pH augmente de 1 unité (+1)",
              "Tend asymptotiquement vers 7,00 sans jamais franchir 7"
            ],
            [
              "Eau pure neutre",
              "pH = 7,00",
              "Le pH reste rigoureusement égal à 7,00",
              "Reste invariant à 7,00"
            ],
            [
              "Base forte (NaOH)",
              "pH > 7 (ex : 12,0)",
              "Le pH diminue de 1 unité (-1)",
              "Tend asymptotiquement vers 7,00 sans jamais descendre sous 7"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Classification acido-basique des solutions à 25 °C",
          "stepTheme": "Classification à 25 °C",
          "stepBadge": "Acide, neutre, basique",
          "paragraphText": "À 25 °C, une solution aqueuse est acide si [H3O⁺] > [OH⁻] (pH < 7,0), neutre si [H3O⁺] = [OH⁻] (pH = 7,0), et basique si [H3O⁺] < [OH⁻] (pH > 7,0). Plus une solution est acide, plus son pH est petit ; plus elle est basique, plus son pH est grand.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p06_q1",
            "type": "mcq",
            "prompt": "À 25 °C, une solution présente une concentration en ions oxonium [H3O⁺] = 2,0×10⁻⁹ mol/L. Quel est son pH et quelle est sa nature acido-basique ?",
            "options": [
              "pH = 8,70 et la solution est basique car pH > 7,0.",
              "pH = 8,70 et la solution est acide.",
              "pH = 5,30 et la solution est acide.",
              "pH = 7,00 et la solution est neutre."
            ],
            "correctAnswerIndex": 0,
            "explanation": "pH = -log(2,0×10⁻⁹) = 9 - log 2 = 9 - 0,30 = 8,70. Comme pH > 7,0 (et [H3O⁺] < 10⁻⁷ mol/L < [OH⁻]), la solution est basique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Effet de la dilution sur le pH d'une solution acide",
          "stepTheme": "Dilution d'un acide",
          "stepBadge": "Hausse du pH",
          "paragraphText": "Diluer une solution acide par de l'eau distillée diminue la concentration en ions oxonium [H3O⁺], ce qui fait augmenter le pH vers la neutralité. Pour un acide fort dilué 10 fois, le pH augmente d'exactement 1 unité : pH' = pH + 1.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p06_q2",
            "type": "mcq",
            "prompt": "Une solution d'acide chlorhydrique a un pH initial de 1,5. Si on la dilue 100 fois avec de l'eau distillée, que vaut son nouveau pH ?",
            "options": [
              "pH = 3,5",
              "pH = 0,015",
              "pH = 11,5",
              "pH = 7,0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une dilution par 100 correspond à k = 10². Pour un acide fort, le pH augmente de log(k) = log(100) = 2 unités : pH_final = 1,5 + 2 = 3,5."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Effet de la dilution sur le pH d'une solution basique",
          "stepTheme": "Dilution d'une base",
          "stepBadge": "Baisse du pH",
          "paragraphText": "Inversement, diluer une solution basique diminue la concentration en ions hydroxyde [OH⁻], ce qui abaisse le pH vers 7. Pour une base forte diluée 10 fois, le pH diminue exactement de 1 unité : pH' = pH - 1.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p06_q3",
            "type": "mcq",
            "prompt": "Une solution d'hydroxyde de sodium NaOH a un pH de 12,3. Si on la dilue 10 fois par de l'eau pure, quelle sera la valeur du pH de la solution obtenue ?",
            "options": [
              "pH = 11,3",
              "pH = 13,3",
              "pH = 7,0",
              "pH = 1,23"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour une base forte, une dilution d'un facteur 10 entraîne une diminution de pH de 1 unité : pH_final = 12,3 - 1 = 11,3."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "La limite fondamentale de la dilution infinie",
          "stepTheme": "Dilution limite",
          "stepBadge": "Mur du pH 7",
          "paragraphText": "À dilution extrême (C < 10⁻⁶ mol/L), les ions H3O⁺ apportés par l'autoprotolyse de l'eau ne sont plus négligeables devant ceux de l'acide. L'électroneutralité exacte montre que le pH d'un acide dilué tend vers 7,00 par valeurs inférieures sans jamais franchir la neutralité.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p06_q4",
            "type": "mcq",
            "prompt": "On dilue un million de fois une solution d'acide chlorhydrique à 10⁻³ mol/L pour obtenir une concentration théorique C = 10⁻⁹ mol/L. Que vaut approximativement le pH réel à 25 °C ?",
            "options": [
              "pH ≈ 7,00 (légèrement inférieur à 7, la solution reste très faiblement acide)",
              "pH = 9,00 (la solution est devenue basique)",
              "pH = 3,00",
              "pH = 14,00"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'ajout d'eau pure (neutre) à un acide ne peut jamais le rendre basique. À cette dilution extrême, l'autoprotolyse de l'eau domine et le pH est infinitésimalement inférieur à 7,00 (environ 6,999)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Régulation biologique : le système tampon du sang humain",
          "stepTheme": "pH sanguin",
          "stepBadge": "Homéostasie",
          "paragraphText": "Dans le corps humain, le pH artériel est maintenu de façon homéostatique entre 7,35 et 7,45 grâce au système tampon bicarbonate H2CO3 / HCO3⁻ et aux protéines. Tout écart hors de [7,0 ; 7,8] perturbe gravement la conformation des enzymes et conduit au coma ou à la mort.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p06_q5",
            "type": "mcq",
            "prompt": "Lors d'un arrêt respiratoire ou d'une crise d'asthme sévère, le dioxyde de carbone CO2 s'accumule dans le sang selon l'équilibre CO2 + H2O <=> H2CO3 <=> H⁺ + HCO3⁻. Quel trouble acido-basique se produit ?",
            "options": [
              "Une acidose respiratoire (baisse du pH sanguin due à la libération accrue de protons H⁺)",
              "Une alcalose respiratoire (hausse du pH au-dessus de 7,8)",
              "Une neutralisation parfaite sans aucun effet biologique",
              "Une précipitation instantanée de carbonate de calcium"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'accumulation de CO2 dissous déplace l'équilibre vers la formation d'acide carbonique et libère des ions oxonium H3O⁺, provoquant une chute pathologique du pH sanguin appelée acidose respiratoire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Application agronomique : correction de l'acidité des sols en Côte d'Ivoire",
          "stepTheme": "Chaulage des sols",
          "stepBadge": "Agriculture tropicale",
          "paragraphText": "En Côte d'Ivoire, les sols ferrallitiques tropicaux sous cultures de cacao, de café ou d'hévéa subissent une forte acidification par lessivage des bases (pH souvent < 5,0), ce qui solubilise l'aluminium toxique. Les agriculteurs réalisent un chaulage par apport de chaux éteinte Ca(OH)2 ou de calcaire CaCO3 pour neutraliser les ions oxonium et remonter le pH vers 6,0-6,5.",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p06_q6",
            "type": "mcq",
            "prompt": "Quelle équation-bilan chimique illustre l'action neutralisante de la chaux Ca(OH)2 sur l'acidité d'un sol agricole ?",
            "options": [
              "H3O⁺ + OH⁻ -> 2 H2O",
              "Ca²⁺ + 2 Cl⁻ -> CaCl2(s)",
              "CO2 + H2O -> H2CO3",
              "Al³⁺ + 3 e⁻ -> Al(s)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La chaux éteinte libère des ions hydroxyde OH⁻ qui réagissent de manière totale avec les ions oxonium H3O⁺ responsables de l'acidité du sol : H3O⁺ + OH⁻ -> 2 H2O, augmentant ainsi le pH du sol."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Impact environnemental : pluies acides et acidification des océans",
          "stepTheme": "Écologie globale",
          "stepBadge": "Acidification globale",
          "paragraphText": "Les polluants industriels soufrés (SO2) et azotés (NOx) forment des pluies acides (pH < 4,5). De plus, l'absorption par les océans du surplus de CO2 atmosphérique a fait chuter le pH moyen de surface de 8,25 à 8,14 depuis l'ère industrielle, menaçant gravement les récifs coralliens et les animaux marins à coquille calcaire (CaCO3).",
          "exercise": {
            "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p06_q7",
            "type": "mcq",
            "prompt": "L'échelle de pH étant logarithmique décimale, de quel facteur la concentration en ions oxonium [H3O⁺] a-t-elle augmenté dans les eaux de surface des océans lorsque leur pH est passé de 8,25 à 8,14 (variation ΔpH = -0,11) ?",
            "options": [
              "D'un facteur 10⁰'¹¹ ≈ 1,29 (soit une augmentation de 29 % de l'acidité réelle)",
              "D'un facteur 0,11 %",
              "D'un facteur 2 (l'acidité a doublé)",
              "Elle n'a pas varié car 8,14 reste basique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le rapport des concentrations vaut [H3O⁺]2 / [H3O⁺]1 = 10^(-8,14) / 10^(-8,25) = 10^(8,25 - 8,14) = 10^(0,11) ≈ 1,29. Une baisse minime en apparence de 0,11 unité de pH correspond à une augmentation de 29 % des ions oxonium dans l'océan."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p06_q1",
          "type": "mcq",
          "prompt": "À 25 °C, une solution présente une concentration en ions oxonium [H3O⁺] = 2,0×10⁻⁹ mol/L. Quel est son pH et quelle est sa nature acido-basique ?",
          "options": [
            "pH = 8,70 et la solution est basique car pH > 7,0.",
            "pH = 8,70 et la solution est acide.",
            "pH = 5,30 et la solution est acide.",
            "pH = 7,00 et la solution est neutre."
          ],
          "correctAnswerIndex": 0,
          "explanation": "pH = -log(2,0×10⁻⁹) = 9 - log 2 = 9 - 0,30 = 8,70. Comme pH > 7,0 (et [H3O⁺] < 10⁻⁷ mol/L < [OH⁻]), la solution est basique."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p06_q2",
          "type": "mcq",
          "prompt": "Une solution d'acide chlorhydrique a un pH initial de 1,5. Si on la dilue 100 fois avec de l'eau distillée, que vaut son nouveau pH ?",
          "options": [
            "pH = 3,5",
            "pH = 0,015",
            "pH = 11,5",
            "pH = 7,0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une dilution par 100 correspond à k = 10². Pour un acide fort, le pH augmente de log(k) = log(100) = 2 unités : pH_final = 1,5 + 2 = 3,5."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p06_q3",
          "type": "mcq",
          "prompt": "Une solution d'hydroxyde de sodium NaOH a un pH de 12,3. Si on la dilue 10 fois par de l'eau pure, quelle sera la valeur du pH de la solution obtenue ?",
          "options": [
            "pH = 11,3",
            "pH = 13,3",
            "pH = 7,0",
            "pH = 1,23"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour une base forte, une dilution d'un facteur 10 entraîne une diminution de pH de 1 unité : pH_final = 12,3 - 1 = 11,3."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p06_q4",
          "type": "mcq",
          "prompt": "On dilue un million de fois une solution d'acide chlorhydrique à 10⁻³ mol/L pour obtenir une concentration théorique C = 10⁻⁹ mol/L. Que vaut approximativement le pH réel à 25 °C ?",
          "options": [
            "pH ≈ 7,00 (légèrement inférieur à 7, la solution reste très faiblement acide)",
            "pH = 9,00 (la solution est devenue basique)",
            "pH = 3,00",
            "pH = 14,00"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ajout d'eau pure (neutre) à un acide ne peut jamais le rendre basique. À cette dilution extrême, l'autoprotolyse de l'eau domine et le pH est infinitésimalement inférieur à 7,00 (environ 6,999)."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p06_q5",
          "type": "mcq",
          "prompt": "Lors d'un arrêt respiratoire ou d'une crise d'asthme sévère, le dioxyde de carbone CO2 s'accumule dans le sang selon l'équilibre CO2 + H2O <=> H2CO3 <=> H⁺ + HCO3⁻. Quel trouble acido-basique se produit ?",
          "options": [
            "Une acidose respiratoire (baisse du pH sanguin due à la libération accrue de protons H⁺)",
            "Une alcalose respiratoire (hausse du pH au-dessus de 7,8)",
            "Une neutralisation parfaite sans aucun effet biologique",
            "Une précipitation instantanée de carbonate de calcium"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'accumulation de CO2 dissous déplace l'équilibre vers la formation d'acide carbonique et libère des ions oxonium H3O⁺, provoquant une chute pathologique du pH sanguin appelée acidose respiratoire."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p06_q6",
          "type": "mcq",
          "prompt": "Quelle équation-bilan chimique illustre l'action neutralisante de la chaux Ca(OH)2 sur l'acidité d'un sol agricole ?",
          "options": [
            "H3O⁺ + OH⁻ -> 2 H2O",
            "Ca²⁺ + 2 Cl⁻ -> CaCl2(s)",
            "CO2 + H2O -> H2CO3",
            "Al³⁺ + 3 e⁻ -> Al(s)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La chaux éteinte libère des ions hydroxyde OH⁻ qui réagissent de manière totale avec les ions oxonium H3O⁺ responsables de l'acidité du sol : H3O⁺ + OH⁻ -> 2 H2O, augmentant ainsi le pH du sol."
        },
        {
          "id": "terminale_c_chimie_l06_solutions_aqueuses_ph_p06_q7",
          "type": "mcq",
          "prompt": "L'échelle de pH étant logarithmique décimale, de quel facteur la concentration en ions oxonium [H3O⁺] a-t-elle augmenté dans les eaux de surface des océans lorsque leur pH est passé de 8,25 à 8,14 (variation ΔpH = -0,11) ?",
          "options": [
            "D'un facteur 10⁰'¹¹ ≈ 1,29 (soit une augmentation de 29 % de l'acidité réelle)",
            "D'un facteur 0,11 %",
            "D'un facteur 2 (l'acidité a doublé)",
            "Elle n'a pas varié car 8,14 reste basique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le rapport des concentrations vaut [H3O⁺]2 / [H3O⁺]1 = 10^(-8,14) / 10^(-8,25) = 10^(8,25 - 8,14) = 10^(0,11) ≈ 1,29. Une baisse minime en apparence de 0,11 unité de pH correspond à une augmentation de 29 % des ions oxonium dans l'océan."
        }
      ]
    }
  ]
};
