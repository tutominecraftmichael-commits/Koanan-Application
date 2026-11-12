import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : TCDE — Thème : Chimie Générale — Titre : Couples acide/base et classification
export const CHIMIE_TLE_CD_L10_COUPLE_ACIDE_BASE_CLASSIFICATION: CurriculumChapter = {
  "id": "terminale_c_chimie_l10_couple_acide_base_classification",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 10,
  "title": "Leçon 10 : Couples acide/base et classification selon la force",
  "summary": "Définition selon Brönsted, concept de couple acide/base conjugué, caractère amphotère de l'eau, constante d'acidité Ka et pKa, relation fondamentale d'Henderson-Hasselbalch pH = pKa + log([B]/[A]), détermination expérimentale du pKa par régression linéaire pH = f(log Vb/Va), diagrammes de prédominance des espèces, théorie et zone de virage des indicateurs colorés, échelle des pKa et classification universelle de la force relative des acides et des bases dans l'eau.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : TCDE – Chimie Générale – Couple acide/base et classification)",
  "points": [
    {
      "id": "terminale_c_chimie_l10_couple_acide_base_classification_p01",
      "order": 1,
      "title": "Définition de Brönsted, couples acide/base conjugués et ampholytes",
      "summary": "Théorie protonique de Brönsted, demi-équation de transfert de proton Acide <=> Base + H+, couples conjugués (CH3COOH/CH3COO-, NH4+/NH3) et les deux couples de l'eau révélant son caractère amphotère.",
      "conceptExplanation": "1. Définitions de Johannes Brönsted (1923) :\n- Un acide est une espèce chimique (molécule ou ion) capable de céder un ou plusieurs protons H+.\n- Une base est une espèce chimique (molécule ou ion) capable de capter un ou plusieurs protons H+.\n\n2. Notion de couple acide/base conjugué :\nLorsqu'un acide AH cède un proton H+, il se transforme en une espèce A- capable de recapturer ce proton en sens inverse : A- est la base conjuguée de l'acide AH. Inversement, AH est l'acide conjugué de la base A-.\nCes deux espèces conjuguées forment le couple acide/base noté Acide/Base (AH/A- ou BH+/B), relié par le schéma formel d'échange protonique :\nAcide <=> Base + H+.\nExemples majeurs :\n- CH3COOH / CH3COO- (acide éthanoïque / ion éthanoate)\n- HCOOH / HCOO- (acide méthanoïque / ion méthanoate)\n- NH4+ / NH3 (ion ammonium / ammoniac)\n- CH3NH3+ / CH3NH2 (ion méthylammonium / méthylamine).\n\n3. Les deux couples de l'eau : le caractère amphotère (ampholyte) :\nL'eau présente un double comportement selon les partenaires en présence :\n- Elle peut céder un proton : H2O <=> OH- + H+ -> l'eau est l'acide du couple H2O / OH-.\n- Elle peut capter un proton : H3O+ <=> H2O + H+ -> l'eau est la base du couple H3O+ / H2O.\nUne espèce qui peut se comporter à la fois comme un acide et comme une base est appelée un ampholyte (ou une espèce amphotère).",
      "keyRule": "Couple Acide/Base relié par : Acide <=> Base + H+. L'eau est un ampholyte appartenant à deux couples fondamentaux : H3O+/H2O (où l'eau est base) et H2O/OH- (où l'eau est acide).",
      "formulas": [
        {
          "name": "Schéma formel de couple acide/base",
          "formula": "\\mathrm{Acide} \\rightleftharpoons \\mathrm{Base} + \\mathrm{H^+}",
          "note": "Transfert d'un proton H+"
        },
        {
          "name": "Les deux couples de l'eau",
          "formula": "\\mathrm{H_3O^+ / H_2O} \\quad \\text{et} \\quad \\mathrm{H_2O / OH^-}",
          "note": "Illustre le caractère amphotère de l'eau"
        }
      ],
      "workedExample": {
        "title": "Identification des couples conjugués dans une réaction chimique",
        "statement": "Dans la réaction chimique suivante : HNO2 + NH3 <=> NO2- + NH4+, identifie les deux couples acide/base mis en jeu et précise pour chacun l'acide et la base conjuguée.",
        "methodSteps": [
          "Étape 1 : Analyser le devenir de HNO2 : il cède un proton H+ pour devenir NO2-. HNO2 est l'acide et NO2- est sa base conjuguée. Couple 1 : HNO2 / NO2-.",
          "Étape 2 : Analyser le devenir de NH3 : il capte le proton H+ pour devenir NH4+. NH4+ est l'acide et NH3 est sa base conjuguée. Couple 2 : NH4+ / NH3.",
          "Étape 3 : Écrire les demi-équations protoniques : HNO2 <=> NO2- + H+ et NH4+ <=> NH3 + H+."
        ],
        "conclusion": "La réaction est un transfert de proton entre l'acide HNO2 (du couple HNO2/NO2-) et la base NH3 (du couple NH4+/NH3)."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Exemples types de couples acide/base du programme officiel",
        "tableData": {
          "headers": [
            "Formule du couple",
            "Forme acide",
            "Forme basique",
            "Nature des espèces"
          ],
          "rows": [
            [
              "CH3COOH / CH3COO-",
              "Acide éthanoïque (neutre)",
              "Ion éthanoate (anionique)",
              "Acide carboxylique / carboxylate"
            ],
            [
              "HCOOH / HCOO-",
              "Acide méthanoïque (neutre)",
              "Ion méthanoate (anionique)",
              "Acide carboxylique / carboxylate"
            ],
            [
              "NH4+ / NH3",
              "Ion ammonium (cationique)",
              "Ammoniac (neutre)",
              "Amine / ion ammonium"
            ],
            [
              "CH3NH3+ / CH3NH2",
              "Ion méthylammonium (cationique)",
              "Méthylamine (neutre)",
              "Amine aliphatique"
            ],
            [
              "H3O+ / H2O",
              "Ion oxonium (cationique)",
              "Eau (solvant neutre)",
              "Couple acide de référence de l'eau"
            ],
            [
              "H2O / OH-",
              "Eau (solvant neutre)",
              "Ion hydroxyde (anionique)",
              "Couple basique de référence de l'eau"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de Brönsted d'un acide et d'une base",
          "stepTheme": "Définitions fondamentales",
          "stepBadge": "Brönsted (1923)",
          "paragraphText": "Selon la théorie protonique de Brönsted, un acide est toute espèce chimique capable de céder au moins un proton H+ au cours d'une réaction, et une base est toute espèce capable de capter au moins un proton H+.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p01_q1",
            "type": "mcq",
            "prompt": "Parmi les propositions suivantes, laquelle définit rigoureusement une base selon Johannes Brönsted ?",
            "options": [
              "Une espèce chimique capable de capter un ou plusieurs protons H+",
              "Une espèce qui libère obligatoirement des ions sodium",
              "Une espèce capable de céder un doublet d'électrons sans proton",
              "Une substance uniquement présente à l'état solide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans la théorie de Brönsted, la définition repose exclusivement sur le transfert de proton : la base est l'accepteur de proton H+."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le concept de couple acide/base conjugué",
          "stepTheme": "Couple conjugué",
          "stepBadge": "Équilibre protonique",
          "paragraphText": "Un couple acide/base est formé par deux espèces chimiques conjuguées qui se transforment l'une en l'autre par gain ou perte d'un unique proton H+ selon la demi-équation symbolique : Acide <=> Base + H+. Par convention, l'acide est toujours écrit en premier à gauche de la barre oblique : Acide / Base.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p01_q2",
            "type": "mcq",
            "prompt": "Quelle est la base conjuguée de l'acide hypobromeux HBrO ?",
            "options": [
              "L'ion hypobromite BrO-",
              "L'ion bromure Br-",
              "Le dibrome Br2",
              "L'acide bromique HBrO3"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En cédant un proton H+, HBrO se transforme en sa base conjuguée BrO- selon la demi-équation HBrO <=> BrO- + H+."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le caractère amphotère de l'eau (ampholyte)",
          "stepTheme": "Ampholyte",
          "stepBadge": "Double comportement",
          "paragraphText": "L'eau joue un rôle pivot en chimie des solutions car elle est amphotère : elle est la base conjuguée de l'ion oxonium dans le couple H3O+ / H2O, et l'acide conjugué de l'ion hydroxyde dans le couple H2O / OH-.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p01_q3",
            "type": "mcq",
            "prompt": "Dans quel couple acido-basique l'eau liquide H2O joue-t-elle le rôle de la BASE conjuguée ?",
            "options": [
              "H3O+ / H2O",
              "H2O / OH-",
              "H2O / H2",
              "O2 / H2O"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans le couple H3O+ / H2O, l'ion oxonium est l'acide qui cède H+ et l'eau est la base conjuguée qui capte H+ (H3O+ <=> H2O + H+)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Couples d'acides faibles halogénés",
          "stepTheme": "Effet inductif",
          "stepBadge": "Exemples dérivés",
          "paragraphText": "La substitution d'un hydrogène par un atome fortement électronégatif comme le chlore sur l'acide acétique donne l'acide monochloroéthanoïque CH2Cl-COOH, dont le couple associé est CH2ClCOOH / CH2ClCOO-.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p01_q4",
            "type": "mcq",
            "prompt": "Quelle est la formule semi-développée de l'acide conjugué de l'ion monochloroéthanoate CH2ClCOO- ?",
            "options": [
              "CH2ClCOOH",
              "CHCl2COOH",
              "CH3COOH",
              "CH3Cl"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'acide conjugué s'obtient en ajoutant un proton H+ à la base : CH2ClCOO- + H+ -> CH2ClCOOH (acide monochloroéthanoïque)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Couples acide/base cationiques des amines",
          "stepTheme": "Cations acides",
          "stepBadge": "Ions ammonium",
          "paragraphText": "Les dérivés d'ammonium R-NH3+ sont des acides de Brønsted dont les bases conjuguées sont les amines neutres correspondantes R-NH2 : R-NH3+ / R-NH2.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p01_q5",
            "type": "mcq",
            "prompt": "Quel est le couple acide/base associé à l'éthylamine C2H5NH2 ?",
            "options": [
              "C2H5NH3+ / C2H5NH2",
              "C2H5NH2 / C2H5NH-",
              "C2H5NH3+ / C2H5OH",
              "CH3NH3+ / CH3NH2"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'éthylamine C2H5NH2 capte un proton pour former le cation éthylammonium C2H5NH3+ : le couple est C2H5NH3+ / C2H5NH2."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Autre exemple d'ampholyte : l'ion hydrogénocarbonate HCO3-",
          "stepTheme": "Polyacides et ampholytes",
          "stepBadge": "Ampholyte HCO3-",
          "paragraphText": "L'eau n'est pas le seul ampholyte. L'ion hydrogénocarbonate HCO3- peut céder un proton pour donner CO3²- (couple HCO3- / CO3²-) ou capter un proton pour former H2CO3 (couple H2CO3 / HCO3-).",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p01_q6",
            "type": "mcq",
            "prompt": "Dans quel couple l'ion hydrogénocarbonate HCO3- joue-t-il le rôle d'un ACIDE de Brønsted ?",
            "options": [
              "HCO3- / CO3²-",
              "H2CO3 / HCO3-",
              "CO2 / HCO3-",
              "H3O+ / HCO3-"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans le couple HCO3- / CO3²-, HCO3- cède un proton pour former l'ion carbonate CO3²- : il joue le rôle d'acide."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Synthèse : réaction acido-basique = compétition entre deux couples",
          "stepTheme": "Transfert de proton",
          "stepBadge": "Vision globale",
          "paragraphText": "Toute réaction acido-basique met toujours en présence deux couples acide/base (A1/B1 et A2/B2) : l'acide du premier couple transfère son proton à la base du second couple selon A1 + B2 <=> B1 + A2.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p01_q7",
            "type": "mcq",
            "prompt": "Dans la réaction CH3COOH + NH3 <=> CH3COO- + NH4+, quels sont les deux couples acide/base conjugués qui s'affrontent ?",
            "options": [
              "CH3COOH / CH3COO- et NH4+ / NH3",
              "CH3COOH / NH3 et CH3COO- / NH4+",
              "H3O+ / H2O et NH4+ / NH3",
              "CH3COOH / H2O et NH3 / OH-"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'acide éthanoïque CH3COOH (couple CH3COOH/CH3COO-) cède son proton à la base ammoniac NH3 (couple NH4+/NH3)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p01_q1",
          "type": "mcq",
          "prompt": "Parmi les propositions suivantes, laquelle définit rigoureusement une base selon Johannes Brönsted ?",
          "options": [
            "Une espèce chimique capable de capter un ou plusieurs protons H+",
            "Une espèce qui libère obligatoirement des ions sodium",
            "Une espèce capable de céder un doublet d'électrons sans proton",
            "Une substance uniquement présente à l'état solide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans la théorie de Brönsted, la définition repose exclusivement sur le transfert de proton : la base est l'accepteur de proton H+."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p01_q2",
          "type": "mcq",
          "prompt": "Quelle est la base conjuguée de l'acide hypobromeux HBrO ?",
          "options": [
            "L'ion hypobromite BrO-",
            "L'ion bromure Br-",
            "Le dibrome Br2",
            "L'acide bromique HBrO3"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En cédant un proton H+, HBrO se transforme en sa base conjuguée BrO- selon la demi-équation HBrO <=> BrO- + H+."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p01_q3",
          "type": "mcq",
          "prompt": "Dans quel couple acido-basique l'eau liquide H2O joue-t-elle le rôle de la BASE conjuguée ?",
          "options": [
            "H3O+ / H2O",
            "H2O / OH-",
            "H2O / H2",
            "O2 / H2O"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans le couple H3O+ / H2O, l'ion oxonium est l'acide qui cède H+ et l'eau est la base conjuguée qui capte H+ (H3O+ <=> H2O + H+)."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p01_q4",
          "type": "mcq",
          "prompt": "Quelle est la formule semi-développée de l'acide conjugué de l'ion monochloroéthanoate CH2ClCOO- ?",
          "options": [
            "CH2ClCOOH",
            "CHCl2COOH",
            "CH3COOH",
            "CH3Cl"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'acide conjugué s'obtient en ajoutant un proton H+ à la base : CH2ClCOO- + H+ -> CH2ClCOOH (acide monochloroéthanoïque)."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p01_q5",
          "type": "mcq",
          "prompt": "Quel est le couple acide/base associé à l'éthylamine C2H5NH2 ?",
          "options": [
            "C2H5NH3+ / C2H5NH2",
            "C2H5NH2 / C2H5NH-",
            "C2H5NH3+ / C2H5OH",
            "CH3NH3+ / CH3NH2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'éthylamine C2H5NH2 capte un proton pour former le cation éthylammonium C2H5NH3+ : le couple est C2H5NH3+ / C2H5NH2."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p01_q6",
          "type": "mcq",
          "prompt": "Dans quel couple l'ion hydrogénocarbonate HCO3- joue-t-il le rôle d'un ACIDE de Brønsted ?",
          "options": [
            "HCO3- / CO3²-",
            "H2CO3 / HCO3-",
            "CO2 / HCO3-",
            "H3O+ / HCO3-"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans le couple HCO3- / CO3²-, HCO3- cède un proton pour former l'ion carbonate CO3²- : il joue le rôle d'acide."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p01_q7",
          "type": "mcq",
          "prompt": "Dans la réaction CH3COOH + NH3 <=> CH3COO- + NH4+, quels sont les deux couples acide/base conjugués qui s'affrontent ?",
          "options": [
            "CH3COOH / CH3COO- et NH4+ / NH3",
            "CH3COOH / NH3 et CH3COO- / NH4+",
            "H3O+ / H2O et NH4+ / NH3",
            "CH3COOH / H2O et NH3 / OH-"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'acide éthanoïque CH3COOH (couple CH3COOH/CH3COO-) cède son proton à la base ammoniac NH3 (couple NH4+/NH3)."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l10_couple_acide_base_classification_p02",
      "order": 2,
      "title": "Constante d'acidité Ka, pKa et relation fondamentale d'Henderson-Hasselbalch",
      "summary": "Définition thermodynamique de Ka comme constante d'équilibre avec l'eau, indépendance vis-à-vis des autres espèces, définition de pKa = -log Ka, et démonstration de la formule universelle pH = pKa + log([B]/[A]).",
      "conceptExplanation": "1. Définition de la constante d'acidité Ka d'un couple dans l'eau :\nSoit un couple acide/base noté AH / A- (ou A / B). Dans l'eau liquide, l'acide réagit selon l'équilibre acido-basique :\nAH + H2O <=> A- + H3O+.\nLa constante d'équilibre thermodynamique de cette réaction est appelée constante d'acidité du couple, notée Ka :\nKa = ([A-] · [H3O+]) / [AH]  (ou Ka = ([B] · [H3O+]) / [A]).\nPropriétés fondamentales de Ka :\n- Ka est un nombre sans dimension (sans unité).\n- Ka dépend EXCLUSIVEMENT de la température T (pour T fixée, Ka est une constante absolue).\n- Ka est totalement indépendante des concentrations initiales et des autres espèces spectatrices présentes en solution.\n\n2. Le pKa du couple dans l'eau :\nLes valeurs de Ka s'échelonnant sur de multiples puissances de dix, on utilise couramment la notation logarithmique pKa :\npKa = -log10(Ka) <=> Ka = 10^(-pKa).\n\n3. La relation d'Henderson-Hasselbalch :\nEn appliquant la fonction -log aux deux membres de la définition de Ka :\n-log(Ka) = -log[H3O+] - log([B] / [A]).\nSoit : pKa = pH - log([B] / [A]).\nEn isolant le pH, on établit la relation fondamentale de toute la chimie acido-basique :\npH = pKa + log([B] / [A])  (ou pH = pKa + log([Base] / [Acide])).",
      "keyRule": "Ka = [B][H3O+]/[A] et pKa = -log Ka. La relation fondamentale universelle est : pH = pKa + log([B]/[A]). Si [B] = [A], alors pH = pKa.",
      "formulas": [
        {
          "name": "Constante d'acidité Ka",
          "formula": "K_a = \\frac{[\\mathrm{Base}] \\cdot [\\mathrm{H_3O^+}]}{[\\mathrm{Acide}]}",
          "note": "Sans unité, constant à température donnée"
        },
        {
          "name": "Relation d'Henderson-Hasselbalch",
          "formula": "\\mathrm{pH} = \\mathrm{p}K_a + \\log\\left(\\frac{[\\mathrm{Base}]}{[\\mathrm{Acide}]}\\right)",
          "note": "Vérifiée pour tout couple à l'équilibre"
        }
      ],
      "workedExample": {
        "title": "Calcul du pH d'un mélange tampon acide/base",
        "statement": "On mélange 30 mL d'une solution d'acide éthanoïque à 0,10 mol/L et 60 mL d'une solution d'éthanoate de sodium à 0,10 mol/L. Sachant que le pKa du couple CH3COOH/CH3COO- vaut 4,8 à 25 °C, calcule le pH du mélange obtenu.",
        "methodSteps": [
          "Étape 1 : Calculer le rapport des concentrations [Base]/[Acide] dans le mélange : [Base]/[Acide] = n(Base)/n(Acide) = (Cb · Vb) / (Ca · Va).",
          "Étape 2 : Comme Ca = Cb = 0,10 mol/L : [Base]/[Acide] = Vb / Va = 60 mL / 30 mL = 2,0.",
          "Étape 3 : Appliquer la formule d'Henderson : pH = pKa + log([Base]/[Acide]) = 4,8 + log(2,0).",
          "Étape 4 : Calcul numérique avec log(2) ≈ 0,30 : pH = 4,8 + 0,30 = 5,10."
        ],
        "conclusion": "Le pH du mélange s'élève à 5,10."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Constantes d'acidité Ka et pKa de couples de référence à 25 °C",
        "tableData": {
          "headers": [
            "Couple acide/base",
            "Nom de l'acide / base",
            "Ka (à 25 °C)",
            "pKa (à 25 °C)",
            "Caractère dominant"
          ],
          "rows": [
            [
              "HCOOH / HCOO-",
              "Acide méthanoïque / ion méthanoate",
              "1,8 × 10⁻⁴",
              "3,7",
              "Acide faible moyen"
            ],
            [
              "CH3COOH / CH3COO-",
              "Acide éthanoïque / ion éthanoate",
              "1,8 × 10⁻⁵",
              "4,8",
              "Acide faible usuel (vinaigre)"
            ],
            [
              "NH4+ / NH3",
              "Ion ammonium / ammoniac",
              "6,3 × 10⁻¹⁰",
              "9,2",
              "Base faible usuelle"
            ],
            [
              "CH3NH3+ / CH3NH2",
              "Ion méthylammonium / méthylamine",
              "2,0 × 10⁻¹¹",
              "10,7",
              "Base faible plus forte que NH3"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Expression mathématique de la constante d'acidité Ka",
          "stepTheme": "Constante d'acidité",
          "stepBadge": "Définition Ka",
          "paragraphText": "La constante d'acidité Ka est la constante d'équilibre associée à la réaction de dissociation de l'acide avec l'eau : AH + H2O <=> A- + H3O+. Elle s'exprime par Ka = ([A-] · [H3O+]) / [AH]. Elle ne dépend que de la température.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p02_q1",
            "type": "mcq",
            "prompt": "Dans l'expression de la constante d'acidité Ka du couple NH4+ / NH3, quelle formule est exacte ?",
            "options": [
              "Ka = ([NH3] · [H3O+]) / [NH4+]",
              "Ka = ([NH4+] · [H3O+]) / [NH3]",
              "Ka = ([NH3] · [OH-]) / [NH4+]",
              "Ka = [NH4+] · [NH3]"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ka est toujours le produit de la base conjuguée [NH3] par [H3O+], divisé par la forme acide [NH4+] : Ka = ([NH3]·[H3O+]) / [NH4+]."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Définition du pKa",
          "stepTheme": "Échelle pKa",
          "stepBadge": "pKa = -log Ka",
          "paragraphText": "Par analogie avec le pH, le pKa est défini par pKa = -log10(Ka), d'où Ka = 10^(-pKa). Plus un couple est acide, plus son Ka est grand et plus son pKa est petit.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p02_q2",
            "type": "mcq",
            "prompt": "Un couple acido-basique possède une constante d'acidité Ka = 2,0×10⁻¹¹ à 25 °C. Sachant que log(2) ≈ 0,30, que vaut son pKa ?",
            "options": [
              "pKa = 10,7",
              "pKa = 11,3",
              "pKa = 9,2",
              "pKa = 2,0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "pKa = -log(2,0×10⁻¹¹) = 11 - log 2 = 11 - 0,30 = 10,7."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Démonstration de la relation d'Henderson-Hasselbalch",
          "stepTheme": "Henderson-Hasselbalch",
          "stepBadge": "Formule clé",
          "paragraphText": "À partir de Ka = [B][H3O+]/[A], on tire [H3O+] = Ka · [A]/[B]. En prenant -log des deux côtés : -log[H3O+] = -log Ka - log([A]/[B]) = pKa + log([B]/[A]). D'où la relation majeure : pH = pKa + log([B]/[A]).",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p02_q3",
            "type": "mcq",
            "prompt": "Que devient la valeur du pH d'une solution contenant un couple acide/base lorsque la concentration en base [B] est rigoureusement égale à la concentration en acide [A] ?",
            "options": [
              "pH = pKa",
              "pH = 7,0",
              "pH = 14 - pKa",
              "pH = 0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Si [B] = [A], le rapport [B]/[A] = 1. Comme log(1) = 0, la relation donne immédiatement pH = pKa + 0 = pKa."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Calcul du rapport [B]/[A] à partir du pH et du pKa",
          "stepTheme": "Rapport de spéciation",
          "stepBadge": "Calcul inverse",
          "paragraphText": "La relation d'Henderson permet de calculer directement les proportions relatives des formes acide et basique : log([B]/[A]) = pH - pKa, ce qui implique [B]/[A] = 10^(pH - pKa).",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p02_q4",
            "type": "mcq",
            "prompt": "Dans une solution à pH = 5,8, quelle est la valeur du rapport [CH3COO-] / [CH3COOH] pour le couple éthanoïque de pKa = 4,8 ?",
            "options": [
              "Le rapport vaut 10 (la forme basique est 10 fois plus concentrée que l'acide)",
              "Le rapport vaut 1",
              "Le rapport vaut 0,1",
              "Le rapport vaut 100"
            ],
            "correctAnswerIndex": 0,
            "explanation": "log([B]/[A]) = pH - pKa = 5,8 - 4,8 = 1,0. Donc [B]/[A] = 10^(1,0) = 10."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Indépendance de Ka envers les autres solutés",
          "stepTheme": "Propriété de Ka",
          "stepBadge": "Thermodynamique",
          "paragraphText": "La constante Ka est une constante thermodynamique intrinsèque du couple dans l'eau. L'addition de sels spectateurs neutres (comme NaCl ou KNO3) ne modifie pas sa valeur théorique à force ionique faible.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p02_q5",
            "type": "mcq",
            "prompt": "Si l'on ajoute 10 g de sulfate de potassium K2SO4 dans une solution d'acide acétique à 25 °C, comment varie la constante d'acidité Ka du couple CH3COOH/CH3COO- ?",
            "options": [
              "Elle reste constante car Ka ne dépend que de la température",
              "Elle double",
              "Elle s'annule",
              "Elle diminue de moitié"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ka est une constante d'équilibre qui ne dépend que de la température du solvant et de la nature intrinsèque des espèces du couple."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Application aux médicaments : le pKa de l'aspirine",
          "stepTheme": "Application pharmaceutique",
          "stepBadge": "Forme active",
          "paragraphText": "L'aspirine (acide acétylsalicylique, pKa = 3,5) présente dans le sang à pH = 7,4 un rapport [Base]/[Acide] = 10^(7,4 - 3,5) = 10^(3,9) ≈ 8 000 : elle circule donc dans le plasma quasi exclusivement sous forme d'ion acétylsalicylate hydrosoluble.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p02_q6",
            "type": "mcq",
            "prompt": "Dans le sang artériel à pH = 7,4, sous quelle forme se trouve l'aspirine (pKa = 3,5) ?",
            "options": [
              "À plus de 99,9 % sous forme d'ion carboxylate déprotoné (forme basique hydrosoluble)",
              "Majoritairement sous forme de molécule d'acide neutre",
              "Sous forme de précipité cristallin insoluble",
              "Sous forme de gaz carbonique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme le pH (7,4) est très supérieur au pKa (3,5) avec un écart de près de 4 unités, la forme déprotonée basique chargée négativement représente plus de 99,98 % des molécules."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Synthèse : le tandem Ka et pKa, signature d'un couple",
          "stepTheme": "Signature du couple",
          "stepBadge": "Bilan",
          "paragraphText": "Chaque couple acide/base possède sa propre carte d'identité acido-basique chiffrée par son pKa dans l'eau. Ce nombre fixe le comportement de spéciation du couple à n'importe quel pH.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p02_q7",
            "type": "mcq",
            "prompt": "Si deux couples acido-basiques C1 et C2 ont des pKa respectifs de 3,8 et 9,2, lequel présente la plus forte tendance à céder un proton dans l'eau ?",
            "options": [
              "Le couple C1 de pKa = 3,8",
              "Le couple C2 de pKa = 9,2",
              "Ils ont exactement la même tendance",
              "Aucun des deux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Plus le pKa est faible (Ka plus élevé), plus l'acide a tendance à céder facilement son proton à l'eau."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p02_q1",
          "type": "mcq",
          "prompt": "Dans l'expression de la constante d'acidité Ka du couple NH4+ / NH3, quelle formule est exacte ?",
          "options": [
            "Ka = ([NH3] · [H3O+]) / [NH4+]",
            "Ka = ([NH4+] · [H3O+]) / [NH3]",
            "Ka = ([NH3] · [OH-]) / [NH4+]",
            "Ka = [NH4+] · [NH3]"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ka est toujours le produit de la base conjuguée [NH3] par [H3O+], divisé par la forme acide [NH4+] : Ka = ([NH3]·[H3O+]) / [NH4+]."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p02_q2",
          "type": "mcq",
          "prompt": "Un couple acido-basique possède une constante d'acidité Ka = 2,0×10⁻¹¹ à 25 °C. Sachant que log(2) ≈ 0,30, que vaut son pKa ?",
          "options": [
            "pKa = 10,7",
            "pKa = 11,3",
            "pKa = 9,2",
            "pKa = 2,0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "pKa = -log(2,0×10⁻¹¹) = 11 - log 2 = 11 - 0,30 = 10,7."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p02_q3",
          "type": "mcq",
          "prompt": "Que devient la valeur du pH d'une solution contenant un couple acide/base lorsque la concentration en base [B] est rigoureusement égale à la concentration en acide [A] ?",
          "options": [
            "pH = pKa",
            "pH = 7,0",
            "pH = 14 - pKa",
            "pH = 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Si [B] = [A], le rapport [B]/[A] = 1. Comme log(1) = 0, la relation donne immédiatement pH = pKa + 0 = pKa."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p02_q4",
          "type": "mcq",
          "prompt": "Dans une solution à pH = 5,8, quelle est la valeur du rapport [CH3COO-] / [CH3COOH] pour le couple éthanoïque de pKa = 4,8 ?",
          "options": [
            "Le rapport vaut 10 (la forme basique est 10 fois plus concentrée que l'acide)",
            "Le rapport vaut 1",
            "Le rapport vaut 0,1",
            "Le rapport vaut 100"
          ],
          "correctAnswerIndex": 0,
          "explanation": "log([B]/[A]) = pH - pKa = 5,8 - 4,8 = 1,0. Donc [B]/[A] = 10^(1,0) = 10."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p02_q5",
          "type": "mcq",
          "prompt": "Si l'on ajoute 10 g de sulfate de potassium K2SO4 dans une solution d'acide acétique à 25 °C, comment varie la constante d'acidité Ka du couple CH3COOH/CH3COO- ?",
          "options": [
            "Elle reste constante car Ka ne dépend que de la température",
            "Elle double",
            "Elle s'annule",
            "Elle diminue de moitié"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ka est une constante d'équilibre qui ne dépend que de la température du solvant et de la nature intrinsèque des espèces du couple."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p02_q6",
          "type": "mcq",
          "prompt": "Dans le sang artériel à pH = 7,4, sous quelle forme se trouve l'aspirine (pKa = 3,5) ?",
          "options": [
            "À plus de 99,9 % sous forme d'ion carboxylate déprotoné (forme basique hydrosoluble)",
            "Majoritairement sous forme de molécule d'acide neutre",
            "Sous forme de précipité cristallin insoluble",
            "Sous forme de gaz carbonique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme le pH (7,4) est très supérieur au pKa (3,5) avec un écart de près de 4 unités, la forme déprotonée basique chargée négativement représente plus de 99,98 % des molécules."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p02_q7",
          "type": "mcq",
          "prompt": "Si deux couples acido-basiques C1 et C2 ont des pKa respectifs de 3,8 et 9,2, lequel présente la plus forte tendance à céder un proton dans l'eau ?",
          "options": [
            "Le couple C1 de pKa = 3,8",
            "Le couple C2 de pKa = 9,2",
            "Ils ont exactement la même tendance",
            "Aucun des deux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Plus le pKa est faible (Ka plus élevé), plus l'acide a tendance à céder facilement son proton à l'eau."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l10_couple_acide_base_classification_p03",
      "order": 3,
      "title": "Détermination expérimentale et graphique du pKa par régression linéaire",
      "summary": "Protocole de mesure des mélanges (Va + Vb = cste), vérification des approximations de non-réaction, équation de la droite affine pH = f(log Vb/Va), calcul du coefficient directeur α = 1 et identification de l'ordonnée à l'origine β = pKa.",
      "conceptExplanation": "1. Protocole expérimental officiel du programme :\nOn dispose d'une solution d'acide éthanoïque CH3COOH de concentration Ca et d'une solution d'éthanoate de sodium (CH3COO- + Na+) de même concentration Cb = Ca. On réalise une série de mélanges de volume total constant Va + Vb = 100 mL en faisant varier le rapport Vb / Va. Pour chaque mélange, on mesure le pH au pH-mètre à 25 °C.\n\n2. Justification théorique de la relation simplifiée :\nDans le mélange, les concentrations apportées valent :\n[B]mél = (Cb · Vb) / (Va + Vb) et [A]mél = (Ca · Va) / (Va + Vb).\nSi le rapport des volumes reste modéré (1/10 <= Vb/Va <= 10), les réactions résiduelles de CH3COOH et CH3COO- avec l'eau sont négligeables : tout se passe comme si les espèces ne réagissaient pas après mélange.\nPuisque Ca = Cb, le rapport des concentrations effectives se simplifie exactement :\n[B] / [A] = Vb / Va.\nEn reportant dans la relation d'Henderson :\npH = pKa + log(Vb / Va).\n\n3. Exploitation graphique :\nSi l'on trace la courbe pH = f(log(Vb / Va)) :\n- On obtient une droite affine expérimentale d'équation : pH = α · log(Vb / Va) + β.\n- Le coefficient directeur vaut théoriquement α = ΔpH / Δlog(Vb/Va) = 1.\n- L'ordonnée à l'origine β (valeur du pH pour log(Vb/Va) = 0, c'est-à-dire pour Va = Vb = 50 mL) donne directement la valeur du pKa :\nβ = pKa = 4,75 (ou 4,80 selon les séries de TP).\nOn en déduit immédiatement la constante d'acidité : Ka = 10^(-pKa) = 10^(-4,75) ≈ 1,8×10⁻⁵.",
      "keyRule": "Pour un mélange équimolaire d'acide et de base conjuguée : [B]/[A] = Vb/Va. Le graphe pH = f(log Vb/Va) est une droite de pente 1 dont l'ordonnée à l'origine est exactement égale au pKa du couple.",
      "formulas": [
        {
          "name": "Équation de la droite d'étalonnage",
          "formula": "\\mathrm{pH} = \\log\\left(\\frac{V_b}{V_a}\\right) + \\mathrm{p}K_a",
          "note": "Droite affine de pente α = 1 et d'ordonnée à l'origine β = pKa"
        }
      ],
      "workedExample": {
        "title": "Exploitation d'une série de mesures pour déterminer Ka et pKa",
        "statement": "On mélange Va = 20 mL de CH3COOH (Ca = 0,1 M) et Vb = 80 mL de CH3COONa (Cb = 0,1 M). Le pH mesuré est 5,35. Calcule log(Vb/Va) et déduis-en la valeur du pKa du couple.",
        "methodSteps": [
          "Étape 1 : Calculer le rapport des volumes : Vb / Va = 80 mL / 20 mL = 4,0.",
          "Étape 2 : Calculer log(Vb / Va) : log(4,0) = 2 · log(2) ≈ 2 × 0,301 = 0,602.",
          "Étape 3 : Utiliser la relation affine : pH = pKa + log(Vb/Va) => pKa = pH - log(Vb/Va).",
          "Étape 4 : Calcul numérique : pKa = 5,35 - 0,60 = 4,75.",
          "Étape 5 : Calcul de Ka : Ka = 10^(-4,75) ≈ 1,78×10⁻⁵."
        ],
        "conclusion": "Le pKa déterminé expérimentalement vaut 4,75 et Ka = 1,8×10⁻⁵."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Données de dosage par mélange et détermination graphique du pKa",
        "tableData": {
          "headers": [
            "Va (mL)",
            "Vb (mL)",
            "log(Vb/Va)",
            "pH mesuré à 25 °C",
            "Points remarquables du graphe"
          ],
          "rows": [
            [
              "90",
              "10",
              "-0,95",
              "3,80",
              "Zone acide dominée par l'acide"
            ],
            [
              "80",
              "20",
              "-0,60",
              "4,15",
              "Linéarité parfaite"
            ],
            [
              "50",
              "50",
              "0,00",
              "4,75",
              "ORDONNÉE À L'ORIGINE : pH = pKa = 4,75"
            ],
            [
              "20",
              "80",
              "+0,60",
              "5,35",
              "Zone basique dominée par la base"
            ],
            [
              "10",
              "90",
              "+0,95",
              "5,70",
              "Pente de la droite α = ΔpH / Δlog = 1,00"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Principe du protocole à volume total constant",
          "stepTheme": "Protocole de TP",
          "stepBadge": "Va + Vb = cste",
          "paragraphText": "On réalise des mélanges d'un acide faible et de sa base conjuguée de concentrations égales Ca = Cb avec Va + Vb = 100 mL. Ce protocole élimine les variations de force ionique et simplifie le rapport [B]/[A] qui devient rigoureusement égal à Vb/Va.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p03_q1",
            "type": "mcq",
            "prompt": "Dans un mélange de Va = 40 mL d'acide éthanoïque à 0,1 mol/L et Vb = 60 mL d'éthanoate de sodium à 0,1 mol/L, que vaut le rapport [CH3COO-] / [CH3COOH] en négligeant les réactions secondaires ?",
            "options": [
              "1,5 (soit 60/40)",
              "0,67",
              "1,0",
              "2,4"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À concentrations égales Ca = Cb, le rapport des concentrations molaires [B]/[A] est égal au rapport des volumes versés Vb/Va = 60 / 40 = 1,5."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Nature géométrique de la courbe pH = f(log Vb/Va)",
          "stepTheme": "Régression linéaire",
          "stepBadge": "Droite affine",
          "paragraphText": "En portant le pH en ordonnée et log(Vb/Va) en abscisse, les points expérimentaux s'alignent sur une droite affine d'équation théorique : pH = 1,0 · log(Vb/Va) + pKa.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p03_q2",
            "type": "mcq",
            "prompt": "Quelle est la valeur théorique du coefficient directeur de la droite représentant pH en fonction de log(Vb/Va) ?",
            "options": [
              "α = 1",
              "α = pKa",
              "α = 14",
              "α = 0,059"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'équation pH = pKa + log(Vb/Va) est de la forme y = α x + β avec x = log(Vb/Va), d'où un coefficient directeur α = 1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Identification graphique du pKa à l'ordonnée à l'origine",
          "stepTheme": "Lecture graphique",
          "stepBadge": "Ordonnée à l'origine",
          "paragraphText": "Pour log(Vb/Va) = 0 (c'est-à-dire Vb/Va = 1, soit Va = Vb = 50 mL), la droite coupe l'axe des ordonnées. La valeur du pH mesurée à cette intersection est exactement le pKa du couple étudié.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p03_q3",
            "type": "mcq",
            "prompt": "Sur le graphe pH = f(log Vb/Va), la droite coupe l'axe vertical au point de coordonnées (0 ; 4,80). Quelle est la valeur du pKa et du Ka du couple ?",
            "options": [
              "pKa = 4,80 et Ka = 10^(-4,80) ≈ 1,6×10⁻⁵",
              "pKa = 0 et Ka = 1",
              "pKa = 9,20 et Ka = 6,3×10⁻¹⁰",
              "pKa = 7,00"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'ordonnée à l'origine correspond à log(Vb/Va) = 0, donc pH = pKa = 4,80. Ka = 10^(-4,80) ≈ 1,58×10⁻⁵."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Domaine de validité de l'approximation de non-réaction",
          "stepTheme": "Conditions de validité",
          "stepBadge": "1/10 <= Vb/Va <= 10",
          "paragraphText": "La formule simplifiée [B]/[A] = Vb/Va n'est rigoureuse que si le rapport Vb/Va reste compris entre 0,1 et 10 (c'est-à-dire -1 <= log(Vb/Va) <= +1). En dehors de cet intervalle, l'ionisation avec l'eau n'est plus négligeable et la droite s'incurve légèrement.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p03_q4",
            "type": "mcq",
            "prompt": "Pourquoi évite-t-on de choisir des rapports Vb/Va extrêmes (comme Vb = 1 mL et Va = 99 mL) dans cette méthode de détermination de pKa ?",
            "options": [
              "Parce qu'à forte dilution de l'une des espèces, la réaction résiduelle avec l'eau n'est plus négligeable et l'approximation [B]/[A] = Vb/Va devient fausse.",
              "Parce que le pH-mètre s'éteint automatiquement.",
              "Parce que la température s'élève à 100 °C.",
              "Parce que le sel précipite."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Lorsque l'un des composants est en trop faible proportion, son équilibre spontané avec l'eau modifie sensiblement sa concentration par rapport au simple volume versé, faussant la linéarité."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Application à la détermination du pKa du couple NH4+ / NH3",
          "stepTheme": "Autre couple",
          "stepBadge": "Couple ammonium",
          "paragraphText": "En appliquant la même méthode à des mélanges de chlorure d'ammonium NH4Cl et d'ammoniac NH3 à 0,1 mol/L, la droite affine coupe l'axe vertical à pH = 9,20, confirmant pKa(NH4+/NH3) = 9,20.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p03_q5",
            "type": "mcq",
            "prompt": "On mélange 50 mL d'ammoniac à 0,1 mol/L et 50 mL de chlorure d'ammonium à 0,1 mol/L. Quel pH mesurera-t-on à 25 °C ?",
            "options": [
              "pH = 9,20",
              "pH = 7,00",
              "pH = 4,80",
              "pH = 14,00"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les volumes et concentrations étant identiques, [NH3] = [NH4+]. Donc pH = pKa(NH4+/NH3) = 9,20."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Calcul du coefficient directeur à partir de deux points de mesure",
          "stepTheme": "Calcul de pente",
          "stepBadge": "Vérification α = 1",
          "paragraphText": "Pour vérifier l'exactitude de la manipulation, on calcule la pente expérimentale α = (pH2 - pH1) / (log(Vb2/Va2) - log(Vb1/Va1)). Une manipulation soignée doit donner α = 1,00 ± 0,05.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p03_q6",
            "type": "mcq",
            "prompt": "Un binôme mesure pH1 = 4,15 pour log(Vb1/Va1) = -0,60 et pH2 = 5,35 pour log(Vb2/Va2) = +0,60. Que vaut la pente expérimentale α ?",
            "options": [
              "α = 1,00",
              "α = 0,50",
              "α = 2,00",
              "α = 4,75"
            ],
            "correctAnswerIndex": 0,
            "explanation": "α = (5,35 - 4,15) / (0,60 - (-0,60)) = 1,20 / 1,20 = 1,00. La pente est rigoureusement conforme à la théorie."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Synthèse : la méthode des mélanges, référence de mesure de pKa",
          "stepTheme": "Bilan TP",
          "stepBadge": "Méthode infaillible",
          "paragraphText": "La méthode des mélanges conjugués est la technique la plus robuste de chimie générale pour déterminer un pKa, car elle ne dépend pas de l'étalonnage absolu d'un volume d'équivalence mais d'une droite de plusieurs mesures concordantes.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p03_q7",
            "type": "mcq",
            "prompt": "Quel est le principal avantage de la méthode des mélanges par rapport à une mesure de pH sur une solution d'acide pur seul pour déterminer le pKa ?",
            "options": [
              "Elle exploite plusieurs points expérimentaux alignés (régression statistique) et minimise l'impact des incertitudes de mesure du pH-mètre.",
              "Elle ne nécessite aucun pH-mètre.",
              "Elle fonctionne sans eau.",
              "Elle donne toujours pKa = 7."
            ],
            "correctAnswerIndex": 0,
            "explanation": "La méthode graphique moyenne les imprécisions de mesure sur une droite complète, offrant une fiabilité et une précision largement supérieures à une unique mesure isolée."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p03_q1",
          "type": "mcq",
          "prompt": "Dans un mélange de Va = 40 mL d'acide éthanoïque à 0,1 mol/L et Vb = 60 mL d'éthanoate de sodium à 0,1 mol/L, que vaut le rapport [CH3COO-] / [CH3COOH] en négligeant les réactions secondaires ?",
          "options": [
            "1,5 (soit 60/40)",
            "0,67",
            "1,0",
            "2,4"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À concentrations égales Ca = Cb, le rapport des concentrations molaires [B]/[A] est égal au rapport des volumes versés Vb/Va = 60 / 40 = 1,5."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p03_q2",
          "type": "mcq",
          "prompt": "Quelle est la valeur théorique du coefficient directeur de la droite représentant pH en fonction de log(Vb/Va) ?",
          "options": [
            "α = 1",
            "α = pKa",
            "α = 14",
            "α = 0,059"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'équation pH = pKa + log(Vb/Va) est de la forme y = α x + β avec x = log(Vb/Va), d'où un coefficient directeur α = 1."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p03_q3",
          "type": "mcq",
          "prompt": "Sur le graphe pH = f(log Vb/Va), la droite coupe l'axe vertical au point de coordonnées (0 ; 4,80). Quelle est la valeur du pKa et du Ka du couple ?",
          "options": [
            "pKa = 4,80 et Ka = 10^(-4,80) ≈ 1,6×10⁻⁵",
            "pKa = 0 et Ka = 1",
            "pKa = 9,20 et Ka = 6,3×10⁻¹⁰",
            "pKa = 7,00"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ordonnée à l'origine correspond à log(Vb/Va) = 0, donc pH = pKa = 4,80. Ka = 10^(-4,80) ≈ 1,58×10⁻⁵."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p03_q4",
          "type": "mcq",
          "prompt": "Pourquoi évite-t-on de choisir des rapports Vb/Va extrêmes (comme Vb = 1 mL et Va = 99 mL) dans cette méthode de détermination de pKa ?",
          "options": [
            "Parce qu'à forte dilution de l'une des espèces, la réaction résiduelle avec l'eau n'est plus négligeable et l'approximation [B]/[A] = Vb/Va devient fausse.",
            "Parce que le pH-mètre s'éteint automatiquement.",
            "Parce que la température s'élève à 100 °C.",
            "Parce que le sel précipite."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lorsque l'un des composants est en trop faible proportion, son équilibre spontané avec l'eau modifie sensiblement sa concentration par rapport au simple volume versé, faussant la linéarité."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p03_q5",
          "type": "mcq",
          "prompt": "On mélange 50 mL d'ammoniac à 0,1 mol/L et 50 mL de chlorure d'ammonium à 0,1 mol/L. Quel pH mesurera-t-on à 25 °C ?",
          "options": [
            "pH = 9,20",
            "pH = 7,00",
            "pH = 4,80",
            "pH = 14,00"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les volumes et concentrations étant identiques, [NH3] = [NH4+]. Donc pH = pKa(NH4+/NH3) = 9,20."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p03_q6",
          "type": "mcq",
          "prompt": "Un binôme mesure pH1 = 4,15 pour log(Vb1/Va1) = -0,60 et pH2 = 5,35 pour log(Vb2/Va2) = +0,60. Que vaut la pente expérimentale α ?",
          "options": [
            "α = 1,00",
            "α = 0,50",
            "α = 2,00",
            "α = 4,75"
          ],
          "correctAnswerIndex": 0,
          "explanation": "α = (5,35 - 4,15) / (0,60 - (-0,60)) = 1,20 / 1,20 = 1,00. La pente est rigoureusement conforme à la théorie."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p03_q7",
          "type": "mcq",
          "prompt": "Quel est le principal avantage de la méthode des mélanges par rapport à une mesure de pH sur une solution d'acide pur seul pour déterminer le pKa ?",
          "options": [
            "Elle exploite plusieurs points expérimentaux alignés (régression statistique) et minimise l'impact des incertitudes de mesure du pH-mètre.",
            "Elle ne nécessite aucun pH-mètre.",
            "Elle fonctionne sans eau.",
            "Elle donne toujours pKa = 7."
          ],
          "correctAnswerIndex": 0,
          "explanation": "La méthode graphique moyenne les imprécisions de mesure sur une droite complète, offrant une fiabilité et une précision largement supérieures à une unique mesure isolée."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l10_couple_acide_base_classification_p04",
      "order": 4,
      "title": "Domaines de prédominance et théorie des indicateurs colorés",
      "summary": "Critères de prédominance sur l'échelle des pH (pH < pKa : acide prédominant ; pH > pKa : base prédominante), zone d'équipartition, principe d'un indicateur coloré HIn/In-, calcul de la zone de virage [pKi - 1 ; pKi + 1] et critères de sélection pour un titrage.",
      "conceptExplanation": "1. Domaines de prédominance d'un couple acide/base :\nD'après la relation pH = pKa + log([B]/[A]), la proportion relative des deux formes conjuguées dépend exclusivement de la position du pH par rapport au pKa du couple :\n- Si pH < pKa : log([B]/[A]) < 0 => [B] < [A] : la forme acide A prédomine sur la forme basique B.\n- Si pH = pKa : [A] = [B] : les deux formes sont en concentrations rigoureusement égales (aucune ne prédomine).\n- Si pH > pKa : log([B]/[A]) > 0 => [B] > [A] : la forme basique B prédomine sur la forme acide A.\nSi pH <= pKa - 1, la forme acide représente plus de 91 % des espèces (forme ultra-majoritaire).\nSi pH >= pKa + 1, la forme basique représente plus de 91 % des espèces.\n\n2. Théorie des indicateurs colorés acido-basiques :\nUn indicateur coloré est un couple acide/base faible noté HIn / In- dont la forme acide HIn et la forme basique In- possèdent des teintes nettement différentes en solution :\nHIn + H2O <=> In- + H3O+ (constante Ki et pKi).\nLa relation d'Henderson appliquée à l'indicateur s'écrit :\npH = pKi + log([In-] / [HIn]).\n\n3. La zone de virage expérimentale :\nL'œil humain ne distingue nettement la couleur de la forme acide HIn que si celle-ci masque la forme basique, c'est-à-dire si [HIn] >= 10 [In-], ce qui correspond à pH <= pKi - 1.\nDe même, l'œil ne perçoit la teinte basique pure de In- que si [In-] >= 10 [HIn], ce qui correspond à pH >= pKi + 1.\nL'intervalle de pH [pKi - 1 ; pKi + 1], d'une largeur d'environ 2 unités de pH, constitue la zone de virage de l'indicateur. Dans cet intervalle, la teinte observée est un mélange des deux couleurs fondamentales, appelée teinte sensible (observée exactement pour pH = pKi où [HIn] = [In-]).\n\n4. Règle de choix d'un indicateur coloré pour un titrage acido-basique :\nPour qu'un indicateur coloré permette de repérer avec exactitude l'équivalence d'un titrage, sa zone de virage doit impérativement englober le pH à l'équivalence (pHE) de la réaction de dosage : pKi - 1 <= pHE <= pKi + 1.",
      "keyRule": "pH < pKa -> Acide prédomine. pH > pKa -> Base prédomine. Zone de virage d'un indicateur : [pKi - 1 ; pKi + 1]. Règle de dosage : pHE doit appartenir à la zone de virage de l'indicateur choisi.",
      "formulas": [
        {
          "name": "Zone de virage d'un indicateur coloré",
          "formula": "\\mathrm{p}K_i - 1 \\le \\mathrm{pH} \\le \\mathrm{p}K_i + 1",
          "note": "Largeur optique d'environ 2 unités de pH"
        },
        {
          "name": "Critère de choix pour un dosage",
          "formula": "\\mathrm{pH}_E \\in [\\mathrm{p}K_i - 1 \\; ; \\; \\mathrm{p}K_i + 1]",
          "note": "Garantit que le virage visuel coïncide avec le saut de pH à l'équivalence"
        }
      ],
      "workedExample": {
        "title": "Sélection d'un indicateur coloré pour le dosage de l'acide acétique par la soude",
        "statement": "Lors du titrage de 20 mL d'acide éthanoïque à 0,1 mol/L par de la soude à 0,1 mol/L, le pH à l'équivalence vaut pHE = 8,8. Tu disposes de trois indicateurs : Hélianthine (3,1 - 4,4), Bleu de bromothymol (6,0 - 7,6) et Phénolphtaléine (8,2 - 10,0). Choisis l'indicateur adéquat et justifie.",
        "methodSteps": [
          "Étape 1 : Rappeler la condition de sélection : le pH à l'équivalence pHE doit être inclus dans la zone de virage de l'indicateur.",
          "Étape 2 : Examiner l'hélianthine : zone [3,1 - 4,4]. 8,8 n'appartient pas à l'intervalle (elle virera beaucoup trop tôt, bien avant l'équivalence).",
          "Étape 3 : Examiner le BBT : zone [6,0 - 7,6]. 8,8 n'appartient pas à l'intervalle (virage avant la fin du saut).",
          "Étape 4 : Examiner la phénolphtaléine : zone [8,2 - 10,0]. On a bien 8,2 <= 8,8 <= 10,0 : pHE se situe en plein cœur de sa zone de virage."
        ],
        "conclusion": "La phénolphtaléine est l'unique indicateur coloré approprié pour ce dosage. Le virage de l'incolore au rose violacé signalera précisément l'équivalence."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Indicateurs colorés usuels, zones de virage et teintes associées",
        "tableData": {
          "headers": [
            "Indicateur coloré",
            "Teinte acide",
            "Zone de virage de pH",
            "Teinte basique",
            "Usage privilégié"
          ],
          "rows": [
            [
              "Hélianthine (Méthylorange)",
              "Rouge",
              "3,1 – 4,4",
              "Jaune",
              "Dosage base faible par acide fort (pHE < 7)"
            ],
            [
              "Rouge de méthyle",
              "Rouge",
              "4,2 – 6,2",
              "Jaune",
              "Dosage d'amines par HCl"
            ],
            [
              "Bleu de bromothymol (BBT)",
              "Jaune",
              "6,0 – 7,6 (teinte sensible : verte)",
              "Bleu",
              "Dosage acide fort par base forte (pHE = 7,0)"
            ],
            [
              "Phénolphtaléine",
              "Incolore",
              "8,2 – 10,0",
              "Rose violacé",
              "Dosage acide faible par base forte (pHE > 7)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Critères rigoureux des domaines de prédominance",
          "stepTheme": "Prédominance",
          "stepBadge": "pH comparé à pKa",
          "paragraphText": "Le diagramme de prédominance d'un couple AH/A- se lit directement sur l'axe des pH : si pH < pKa, la forme acide AH est majoritaire ; si pH > pKa, la forme basique A- est majoritaire ; à pH = pKa, les deux formes sont en concentrations égales.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p04_q1",
            "type": "mcq",
            "prompt": "Dans un vin blanc dont le pH est mesuré à 3,2, quelle est l'espèce prédominante du couple acide éthanoïque / ion éthanoate (pKa = 4,8) ?",
            "options": [
              "L'acide éthanoïque CH3COOH car pH (3,2) < pKa (4,8)",
              "L'ion éthanoate CH3COO- car tout acide se transforme en ion dans le vin",
              "Les deux espèces sont à égalité parfaite",
              "L'ion oxonium uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme pH < pKa, la relation d'Henderson donne log([B]/[A]) < 0, donc [CH3COOH] > [CH3COO-] : la forme acide moléculaire prédomine très largement."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Seuils de prédominance à 90 % et 99 %",
          "stepTheme": "Spéciation avancée",
          "stepBadge": "Écart de pH",
          "paragraphText": "Pour un écart de 1 unité de pH (pH = pKa + 1), [Base] = 10 · [Acide], ce qui correspond à environ 91 % de forme basique. Pour un écart de 2 unités de pH (pH = pKa + 2), la forme basique atteint 99 % du total.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p04_q2",
            "type": "mcq",
            "prompt": "À partir de quel pH peut-on affirmer que la forme ammoniac NH3 représente plus de 90 % des espèces du couple NH4+ / NH3 (pKa = 9,2) ?",
            "options": [
              "Pour pH >= 10,2 (pH >= pKa + 1)",
              "Pour pH >= 9,2",
              "Pour pH >= 7,0",
              "Pour pH >= 14,0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour que [NH3] / [NH4+] >= 10, il faut log([NH3]/[NH4+]) >= 1, ce qui impose pH >= pKa + 1 = 9,2 + 1 = 10,2."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Structure et fonctionnement d'un indicateur coloré acido-basique",
          "stepTheme": "Indicateurs colorés",
          "stepBadge": "Couple HIn / In-",
          "paragraphText": "Un indicateur coloré est un couple acide/base faible HIn / In- où la protonation ou déprotonation modifie le système d'électrons délocalisés (chromophore), changeant la longueur d'onde de la lumière absorbée et donc la couleur perçue.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p04_q3",
            "type": "mcq",
            "prompt": "Quelle modification structurale élémentaire provoque le changement de couleur d'un indicateur coloré lorsqu'on modifie le pH ?",
            "options": [
              "Le transfert d'un unique proton H+ qui modifie la délocalisation électronique du système conjugué de la molécule",
              "L'explosion de la molécule",
              "L'évaporation du solvant",
              "La fusion du colorant"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La capture ou la libération d'un proton H+ modifie la conjugaison des liaisons doubles du chromophore, ce qui déplace le spectre d'absorption lumineuse et transforme la teinte de la solution."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Origine physiologique de la zone de virage de 2 unités",
          "stepTheme": "Zone de virage",
          "stepBadge": "[pKi-1 ; pKi+1]",
          "paragraphText": "L'œil humain ne discerne la pureté d'une couleur que si l'autre forme est au moins 10 fois moins concentrée. Cela impose un intervalle de transition d'au moins 2 unités de pH centré sur le pKi de l'indicateur : [pKi - 1 ; pKi + 1].",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p04_q4",
            "type": "mcq",
            "prompt": "Le bleu de bromothymol (BBT) possède un pKi de 6,8. Quelle est sa zone de virage expérimentale approximative ?",
            "options": [
              "De pH 6,0 à pH 7,6",
              "De pH 0 à pH 14",
              "De pH 3,1 à pH 4,4",
              "De pH 8,2 à pH 10,0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La zone de virage s'étend sur environ 2 unités autour du pKi : [6,8 - 0,8 ; 6,8 + 0,8] soit [6,0 ; 7,6]. En dessous de 6,0 il est jaune ; au-dessus de 7,6 il est bleu ; entre les deux, il prend sa teinte sensible verte."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Règle absolue de choix pour un dosage colorimétrique",
          "stepTheme": "Choix d'indicateur",
          "stepBadge": "pHE dans la zone",
          "paragraphText": "Lors d'un titrage acido-basique, le saut de pH à l'équivalence est très abrupt. Pour que le virage coloré indique fidèlement le volume équivalent sans erreur systématique, la zone de virage de l'indicateur doit obligatoirement recouvrir la valeur du pH à l'équivalence (pHE).",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p04_q5",
            "type": "mcq",
            "prompt": "On dose une solution aqueuse d'ammoniac NH3 par l'acide chlorhydrique HCl. Le pH à l'équivalence est acide (pHE = 5,3). Quel indicateur coloré doit-on impérativement sélectionner ?",
            "options": [
              "Le rouge de méthyle (zone de virage 4,2 - 6,2)",
              "La phénolphtaléine (zone de virage 8,2 - 10,0)",
              "Le bleu de thymol basique (zone de virage 8,0 - 9,6)",
              "L'alizarine (zone de virage 11,0 - 13,0)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le pH à l'équivalence pHE = 5,3 est inclus dans la zone de virage du rouge de méthyle [4,2 ; 6,2]. La phénolphtaléine virerait beaucoup trop tôt dès le début du dosage."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Dosage acide fort - base forte et choix du BBT",
          "stepTheme": "Cas fort-fort",
          "stepBadge": "pHE = 7",
          "paragraphText": "Lors du titrage d'un acide fort par une base forte (HCl par NaOH), le pH à l'équivalence vaut rigoureusement pHE = 7,0 à 25 °C. Le BBT (zone 6,0 - 7,6) est l'indicateur parfait car sa teinte sensible verte apparaît exactement au point équivalent neutre.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p04_q6",
            "type": "mcq",
            "prompt": "Pourquoi le bleu de bromothymol (BBT) est-il l'indicateur universellement recommandé pour le dosage d'un acide fort par une base forte ?",
            "options": [
              "Parce que le pH à l'équivalence d'un tel dosage vaut 7,0 à 25 °C, valeur située exactement au milieu de la zone de virage du BBT (6,0 - 7,6).",
              "Parce que le BBT est le seul colorant qui ne tache pas.",
              "Parce qu'il coûte moins cher.",
              "Parce qu'il rend la réaction réversible."
            ],
            "correctAnswerIndex": 0,
            "explanation": "À l'équivalence, la solution ne contient que des ions spectateurs Na+ et Cl- et de l'eau : le milieu est parfaitement neutre (pH = 7,0). La zone [6,0 - 7,6] encadre symétriquement ce point."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Synthèse : le diagramme de prédominance, outil prédictif",
          "stepTheme": "Bilan prédominance",
          "stepBadge": "Outil clé",
          "paragraphText": "Tracer l'axe des pH et y positionner les pKa et zones de virage permet de visualiser d'un seul coup d'œil l'état d'ionisation des molécules, la couleur des réactifs et la faisabilité des séparations acido-basiques.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p04_q7",
            "type": "mcq",
            "prompt": "Dans une solution tampon de pH = 4,8 contenant le couple CH3COOH/CH3COO- (pKa = 4,8), quel pourcentage de la matière totale se trouve sous forme basique déprotonée CH3COO- ?",
            "options": [
              "Exactement 50 %",
              "100 %",
              "10 %",
              "0 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À pH = pKa, [CH3COO-] = [CH3COOH]. La matière apportée se répartit à parts rigoureusement égales entre la forme acide et la forme basique, soit 50 % de chaque."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p04_q1",
          "type": "mcq",
          "prompt": "Dans un vin blanc dont le pH est mesuré à 3,2, quelle est l'espèce prédominante du couple acide éthanoïque / ion éthanoate (pKa = 4,8) ?",
          "options": [
            "L'acide éthanoïque CH3COOH car pH (3,2) < pKa (4,8)",
            "L'ion éthanoate CH3COO- car tout acide se transforme en ion dans le vin",
            "Les deux espèces sont à égalité parfaite",
            "L'ion oxonium uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme pH < pKa, la relation d'Henderson donne log([B]/[A]) < 0, donc [CH3COOH] > [CH3COO-] : la forme acide moléculaire prédomine très largement."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p04_q2",
          "type": "mcq",
          "prompt": "À partir de quel pH peut-on affirmer que la forme ammoniac NH3 représente plus de 90 % des espèces du couple NH4+ / NH3 (pKa = 9,2) ?",
          "options": [
            "Pour pH >= 10,2 (pH >= pKa + 1)",
            "Pour pH >= 9,2",
            "Pour pH >= 7,0",
            "Pour pH >= 14,0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour que [NH3] / [NH4+] >= 10, il faut log([NH3]/[NH4+]) >= 1, ce qui impose pH >= pKa + 1 = 9,2 + 1 = 10,2."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p04_q3",
          "type": "mcq",
          "prompt": "Quelle modification structurale élémentaire provoque le changement de couleur d'un indicateur coloré lorsqu'on modifie le pH ?",
          "options": [
            "Le transfert d'un unique proton H+ qui modifie la délocalisation électronique du système conjugué de la molécule",
            "L'explosion de la molécule",
            "L'évaporation du solvant",
            "La fusion du colorant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La capture ou la libération d'un proton H+ modifie la conjugaison des liaisons doubles du chromophore, ce qui déplace le spectre d'absorption lumineuse et transforme la teinte de la solution."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p04_q4",
          "type": "mcq",
          "prompt": "Le bleu de bromothymol (BBT) possède un pKi de 6,8. Quelle est sa zone de virage expérimentale approximative ?",
          "options": [
            "De pH 6,0 à pH 7,6",
            "De pH 0 à pH 14",
            "De pH 3,1 à pH 4,4",
            "De pH 8,2 à pH 10,0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La zone de virage s'étend sur environ 2 unités autour du pKi : [6,8 - 0,8 ; 6,8 + 0,8] soit [6,0 ; 7,6]. En dessous de 6,0 il est jaune ; au-dessus de 7,6 il est bleu ; entre les deux, il prend sa teinte sensible verte."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p04_q5",
          "type": "mcq",
          "prompt": "On dose une solution aqueuse d'ammoniac NH3 par l'acide chlorhydrique HCl. Le pH à l'équivalence est acide (pHE = 5,3). Quel indicateur coloré doit-on impérativement sélectionner ?",
          "options": [
            "Le rouge de méthyle (zone de virage 4,2 - 6,2)",
            "La phénolphtaléine (zone de virage 8,2 - 10,0)",
            "Le bleu de thymol basique (zone de virage 8,0 - 9,6)",
            "L'alizarine (zone de virage 11,0 - 13,0)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le pH à l'équivalence pHE = 5,3 est inclus dans la zone de virage du rouge de méthyle [4,2 ; 6,2]. La phénolphtaléine virerait beaucoup trop tôt dès le début du dosage."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p04_q6",
          "type": "mcq",
          "prompt": "Pourquoi le bleu de bromothymol (BBT) est-il l'indicateur universellement recommandé pour le dosage d'un acide fort par une base forte ?",
          "options": [
            "Parce que le pH à l'équivalence d'un tel dosage vaut 7,0 à 25 °C, valeur située exactement au milieu de la zone de virage du BBT (6,0 - 7,6).",
            "Parce que le BBT est le seul colorant qui ne tache pas.",
            "Parce qu'il coûte moins cher.",
            "Parce qu'il rend la réaction réversible."
          ],
          "correctAnswerIndex": 0,
          "explanation": "À l'équivalence, la solution ne contient que des ions spectateurs Na+ et Cl- et de l'eau : le milieu est parfaitement neutre (pH = 7,0). La zone [6,0 - 7,6] encadre symétriquement ce point."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p04_q7",
          "type": "mcq",
          "prompt": "Dans une solution tampon de pH = 4,8 contenant le couple CH3COOH/CH3COO- (pKa = 4,8), quel pourcentage de la matière totale se trouve sous forme basique déprotonée CH3COO- ?",
          "options": [
            "Exactement 50 %",
            "100 %",
            "10 %",
            "0 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À pH = pKa, [CH3COO-] = [CH3COOH]. La matière apportée se répartit à parts rigoureusement égales entre la forme acide et la forme basique, soit 50 % de chaque."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l10_couple_acide_base_classification_p05",
      "order": 5,
      "title": "Force relative des acides et des bases faibles et classification sur l'échelle des pKa",
      "summary": "Comparaison de force à concentration égale, relation réciproque Ka/pKa pour les acides et pour les bases, effet nivelant de l'eau, et classement vertical sur l'échelle officielle des pKa.",
      "conceptExplanation": "1. Force d'un acide faible :\nLa force d'un acide faible mesure son aptitude à céder un proton à l'eau : plus il s'ionise facilement, plus la concentration en ions H3O+ et A- formés est élevée à concentration égale Ca.\n- Expérience : pour Ca = 10^-2 mol/L à 25 °C, l'acide méthanoïque donne pH = 2,9 ([H3O+] = 1,26×10^-3 mol/L, Ka = 1,8×10^-4, pKa = 3,74), tandis que l'acide éthanoïque donne pH = 3,4 ([H3O+] = 3,98×10^-4 mol/L, Ka = 1,65×10^-5, pKa = 4,78).\nConclusion pour les acides faibles :\n- La force d'un acide faible CROÎT lorsque sa constante d'acidité Ka augmente.\n- La force d'un acide faible CROÎT lorsque son pKa diminue.\n\n2. Force d'une base faible :\nLa force d'une base faible mesure son aptitude à capter un proton cédé par l'eau pour libérer des ions OH-.\n- Expérience : pour Cb = 10^-2 mol/L à 25 °C, l'ammoniac donne pH = 10,6 (pKa = 9,2), tandis que la méthylamine donne pH = 11,3 (pKa = 10,7).\nLa méthylamine s'ionise davantage et produit plus d'ions OH- : c'est une base plus forte que l'ammoniac.\nConclusion pour les bases faibles :\n- La force d'une base faible CROÎT lorsque son pKa AUGMENTE (et que son Ka diminue).\n\n3. Relation fondamentale entre un acide et sa base conjuguée :\nAu sein d'un même couple acide/base faible : plus un acide faible est fort, plus sa base conjuguée est faible, et réciproquement.\n\n4. L'échelle des pKa et l'effet nivelant de l'eau :\nDans l'eau, le domaine des acides et bases faibles s'étend entre 0 et 14 (à 25 °C) :\n- Couples à pKa < 0 : l'acide est un acide fort (ex : HCl, HNO3), sa dissociation dans l'eau est totale. Tous les acides forts sont nivelés au niveau de l'ion H3O+, qui est l'acide le plus fort pouvant exister dans l'eau. Leurs bases conjuguées (Cl-, NO3-) sont des bases indifférentes (inertes dans l'eau).\n- Couples à pKa > 14 : la base est une base forte (ex : ion éthanolate C2H5O-, ion amidure NH2-). Elles sont nivelées au niveau de l'ion OH-, base la plus forte pouvant subsister dans l'eau. Leurs acides conjugués (C2H5OH, NH3) sont des acides indifférents dans l'eau.",
      "keyRule": "Acide faible : plus Ka est grand (pKa petit), plus l'acide est fort. Base faible : plus pKa est grand (Ka petit), plus la base est forte. Dans l'eau, l'acide le plus fort est H3O+ (pKa = 0) et la base la plus forte est OH- (pKa = 14).",
      "formulas": [
        {
          "name": "Règle de force des acides faibles",
          "formula": "K_a \\nearrow \\iff \\mathrm{p}K_a \\searrow \\iff \\text{Acide plus fort}",
          "note": "À concentrations égales"
        },
        {
          "name": "Règle de force des bases faibles",
          "formula": "\\mathrm{p}K_a \\nearrow \\iff K_a \\searrow \\iff \\text{Base plus forte}",
          "note": "À concentrations égales"
        }
      ],
      "workedExample": {
        "title": "Classement comparatif de force de trois couples acido-basiques",
        "statement": "On donne les pKa à 25 °C : Couple 1 (HF / F-, pKa = 3,2) ; Couple 2 (CH3COOH / CH3COO-, pKa = 4,8) ; Couple 3 (HCN / CN-, pKa = 9,2). Classe les acides par ordre de force décroissante, et les bases par ordre de force croissante.",
        "methodSteps": [
          "Étape 1 : Règle pour les acides : l'acide le plus fort est celui dont le pKa est le plus petit.",
          "Étape 2 : Classement des pKa : 3,2 < 4,8 < 9,2.",
          "Étape 3 : Ordre de force décroissante des acides : HF > CH3COOH > HCN (l'acide fluorhydrique est le plus fort, le cyanure d'hydrogène le plus faible).",
          "Étape 4 : Règle pour les bases : la base la plus forte appartient au couple dont le pKa est le plus grand.",
          "Étape 5 : Ordre de force croissante des bases : F- < CH3COO- < CN- (l'ion cyanure CN- est la base la plus forte, l'ion fluorure F- la plus faible)."
        ],
        "conclusion": "L'acide le plus fort (HF) a pour conjuguée la base la plus faible (F-), illustrant la complémentarité stricte."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Échelle officielle des pKa et classification des couples acide/base dans l'eau",
        "tableData": {
          "headers": [
            "pKa à 25 °C",
            "Acide (Force croissante vers le bas)",
            "Base (Force croissante vers le haut)",
            "Statut dans l'eau"
          ],
          "rows": [
            [
              "> 14",
              "C2H5OH (acide indifférent)",
              "C2H5O- (base forte)",
              "Bases fortes nivelées par OH-"
            ],
            [
              "14,0",
              "H2O",
              "OH-",
              "Couple de référence supérieur"
            ],
            [
              "10,7",
              "CH3NH3+",
              "CH3NH2",
              "Base faible forte"
            ],
            [
              "9,2",
              "NH4+",
              "NH3",
              "Base faible usuelle"
            ],
            [
              "4,8",
              "CH3COOH",
              "CH3COO-",
              "Acide faible usuel"
            ],
            [
              "3,7",
              "HCOOH",
              "HCOO-",
              "Acide carboxylique plus fort"
            ],
            [
              "3,2",
              "HF",
              "F-",
              "Acide faible le plus fort de la série"
            ],
            [
              "0,0",
              "H3O+",
              "H2O",
              "Couple de référence inférieur"
            ],
            [
              "< 0",
              "HCl (acide fort)",
              "Cl- (base indifférente)",
              "Acides forts nivelés par H3O+"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Relation fondamentale entre Ka, pKa et la force d'un acide",
          "stepTheme": "Force d'un acide",
          "stepBadge": "Ka élevé = acide fort",
          "paragraphText": "De deux acides faibles pris à la même concentration molaire, le plus fort est celui qui s'ionise le plus dans l'eau. Il possède la plus grande constante d'acidité Ka et par conséquent la plus faible valeur de pKa.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p05_q1",
            "type": "mcq",
            "prompt": "On compare l'acide méthanoïque (pKa = 3,75) et l'acide éthanoïque (pKa = 4,75) à la concentration C = 0,01 mol/L. Quel est l'acide le plus fort et pourquoi ?",
            "options": [
              "L'acide méthanoïque, car son pKa est plus petit, ce qui signifie que sa constante Ka est plus grande et qu'il libère plus d'ions H3O+.",
              "L'acide éthanoïque car son pKa est plus grand.",
              "Ils ont la même force car ce sont deux acides carboxyliques.",
              "L'acide éthanoïque car il a plus d'atomes de carbone."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour les acides faibles, la force croît lorsque le pKa diminue. Avec pKa = 3,75, l'acide méthanoïque a un Ka = 1,8×10⁻⁴ environ 10 fois supérieur à celui de l'acide éthanoïque (1,8×10⁻⁵) : il est nettement plus fort."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Relation entre pKa et la force d'une base faible",
          "stepTheme": "Force d'une base",
          "stepBadge": "pKa élevé = base forte",
          "paragraphText": "De deux bases faibles à même concentration, la plus forte est celle qui capte le plus facilement les protons de l'eau. Elle appartient au couple qui a le plus petit Ka, et par conséquent le plus grand pKa.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p05_q2",
            "type": "mcq",
            "prompt": "On donne pKa(NH4+/NH3) = 9,20 et pKa(CH3NH3+/CH3NH2) = 10,72. Quelle est la base faible la plus forte à concentration égale ?",
            "options": [
              "La méthylamine CH3NH2 car son couple présente le pKa le plus élevé (10,72 > 9,20)",
              "L'ammoniac NH3 car son pKa est plus faible",
              "L'ion ammonium NH4+",
              "L'eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour les bases faibles, la force croît avec le pKa. Le pKa de la méthylamine étant supérieur à celui de l'ammoniac, la méthylamine capte plus vigoureusement les protons de l'eau et produit une concentration plus élevée en ions OH-."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Règle de dualité conjuguée : plus l'acide est fort, plus la base est faible",
          "stepTheme": "Dualité conjuguée",
          "stepBadge": "Loi réciproque",
          "paragraphText": "La force d'un acide et celle de sa base conjuguée évoluent en sens inverse : plus un acide faible cède facilement son proton, plus sa base conjuguée aura de difficultés à le retenir. Ainsi, la base conjuguée d'un acide relativement fort est une base très faible.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p05_q3",
            "type": "mcq",
            "prompt": "Sachant que l'acide nitreux HNO2 (pKa = 3,3) est un acide plus fort que l'acide hypochloreux HClO (pKa = 7,5), que peut-on affirmer de leurs bases conjuguées respectives NO2- et ClO- ?",
            "options": [
              "L'ion hypochlorite ClO- est une base plus forte que l'ion nitrite NO2-",
              "L'ion nitrite NO2- est une base plus forte que ClO-",
              "Les deux bases ont la même force",
              "Aucune des deux n'est une base"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Puisque l'acide le plus fort a pour conjuguée la base la plus faible, l'acide le plus faible (HClO, pKa = 7,5) engendre la base conjuguée la plus forte (ClO-)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'effet nivelant de l'eau sur les acides forts",
          "stepTheme": "Nivellement acide",
          "stepBadge": "H3O+ limite",
          "paragraphText": "Dans l'eau, tous les acides forts (HCl, HNO3, H2SO4, HBr, HI, HClO4) ont un pKa < 0 et réagissent totalement avec l'eau pour former des ions oxonium H3O+. L'ion H3O+ est l'acide le plus fort pouvant exister dans l'eau : il est impossible de comparer la force respective de deux acides forts dans l'eau.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p05_q4",
            "type": "mcq",
            "prompt": "Pourquoi dit-on que l'eau exerce un effet nivelant sur les acides forts ?",
            "options": [
              "Parce que tous les acides forts réagissent totalement avec l'eau pour être convertis à 100 % en ions H3O+ : ils présentent donc tous exactement la même force apparente dans l'eau.",
              "Parce que l'eau éteint les acides forts.",
              "Parce que leur pH devient égal à 14.",
              "Parce que les acides forts se transforment en calcaire."
            ],
            "correctAnswerIndex": 0,
            "explanation": "La réaction étant quantitative pour tous les acides forts, l'espèce acide effectivement présente en solution est systématiquement et uniquement H3O+. Leurs différences intrinsèques sont gommées (nivelées) par le solvant eau."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'effet nivelant de l'eau sur les bases fortes",
          "stepTheme": "Nivellement basique",
          "stepBadge": "OH- limite",
          "paragraphText": "De façon symétrique, toute base forte (pKa > 14) réagit totalement avec l'eau pour former des ions hydroxyde OH-. L'ion OH- est la base la plus forte qui puisse exister dans l'eau liquide. Leurs acides conjugués sont indifférents.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p05_q5",
            "type": "mcq",
            "prompt": "Lorsqu'on dissout de l'éthanolate de sodium NaC2H5O (dont le couple a un pKa de 16) dans l'eau, que devient l'ion éthanolate C2H5O- ?",
            "options": [
              "Il réagit totalement et quantitativement avec l'eau pour former de l'éthanol C2H5OH et des ions hydroxyde OH-.",
              "Il reste intact en solution sans réagir.",
              "Il se transforme en acide fort.",
              "Il précipite sous forme de sel minéral."
            ],
            "correctAnswerIndex": 0,
            "explanation": "C2H5O- étant une base plus forte que OH- (pKa = 16 > 14), elle arrache quantitativement un proton à l'eau : C2H5O- + H2O -> C2H5OH + OH-."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Prévision du sens spontané d'une réaction acido-basique (Règle du gamma)",
          "stepTheme": "Règle du gamma",
          "stepBadge": "Sens spontané",
          "paragraphText": "Sur l'échelle verticale des pKa (acides à gauche, force croissante vers le bas ; bases à droite, force croissante vers le haut), la réaction prépondérante spontanée a toujours lieu entre l'acide le plus fort placé en bas et la base la plus forte placée en haut (sens direct selon le tracé de la lettre grecque gamma γ).",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p05_q6",
            "type": "mcq",
            "prompt": "En appliquant la règle du gamma sur l'échelle des pKa, la réaction entre l'acide méthanoïque HCOOH (pKa = 3,7) et l'ammoniac NH3 (pKa = 9,2) est-elle très favorable ou très défavorisée ?",
            "options": [
              "Très favorable (constante d'équilibre K = 10^(9,2 - 3,7) = 10^(5,5) ≈ 3,16×10⁵ >> 1)",
              "Totalement impossible (K = 0)",
              "Défavorisée avec K << 1",
              "Athermique sans réaction"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'acide HCOOH (pKa = 3,7) est situé plus bas que l'acide conjugué NH4+ (pKa = 9,2). La constante d'équilibre vaut K = 10^(ΔpKa) = 10^(9,2 - 3,7) = 10^(5,5) > 10⁴ : la réaction est quantitative et quasi totale."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Synthèse : l'échelle universelle des pKa, guide du chimiste",
          "stepTheme": "Bilan global",
          "stepBadge": "Maîtrise de l'échelle",
          "paragraphText": "L'échelle des pKa est l'outil prédictif suprême : elle permet de déterminer immédiatement la force relative d'un acide, la force d'une base, la constante d'équilibre d'une réaction K = 10^(pKa2 - pKa1), et la composition de tout mélange acido-basique.",
          "exercise": {
            "id": "terminale_c_chimie_l10_couple_acide_base_classification_p05_q7",
            "type": "mcq",
            "prompt": "Quelle formule donne la constante d'équilibre K de la réaction entre un acide A1 (couple de pKa1) et une base B2 (couple de pKa2) : A1 + B2 <=> B1 + A2 ?",
            "options": [
              "K = 10^(pKa2 - pKa1)",
              "K = 10^(pKa1 - pKa2)",
              "K = pKa1 + pKa2",
              "K = pKa1 / pKa2"
            ],
            "correctAnswerIndex": 0,
            "explanation": "K = ([B1][A2]) / ([A1][B2]) = (Ka1 / Ka2) = 10^(-pKa1) / 10^(-pKa2) = 10^(pKa2 - pKa1). Si pKa2 > pKa1, la constante est supérieure à 1 et la réaction est thermodynamiquement favorisée."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p05_q1",
          "type": "mcq",
          "prompt": "On compare l'acide méthanoïque (pKa = 3,75) et l'acide éthanoïque (pKa = 4,75) à la concentration C = 0,01 mol/L. Quel est l'acide le plus fort et pourquoi ?",
          "options": [
            "L'acide méthanoïque, car son pKa est plus petit, ce qui signifie que sa constante Ka est plus grande et qu'il libère plus d'ions H3O+.",
            "L'acide éthanoïque car son pKa est plus grand.",
            "Ils ont la même force car ce sont deux acides carboxyliques.",
            "L'acide éthanoïque car il a plus d'atomes de carbone."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour les acides faibles, la force croît lorsque le pKa diminue. Avec pKa = 3,75, l'acide méthanoïque a un Ka = 1,8×10⁻⁴ environ 10 fois supérieur à celui de l'acide éthanoïque (1,8×10⁻⁵) : il est nettement plus fort."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p05_q2",
          "type": "mcq",
          "prompt": "On donne pKa(NH4+/NH3) = 9,20 et pKa(CH3NH3+/CH3NH2) = 10,72. Quelle est la base faible la plus forte à concentration égale ?",
          "options": [
            "La méthylamine CH3NH2 car son couple présente le pKa le plus élevé (10,72 > 9,20)",
            "L'ammoniac NH3 car son pKa est plus faible",
            "L'ion ammonium NH4+",
            "L'eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour les bases faibles, la force croît avec le pKa. Le pKa de la méthylamine étant supérieur à celui de l'ammoniac, la méthylamine capte plus vigoureusement les protons de l'eau et produit une concentration plus élevée en ions OH-."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p05_q3",
          "type": "mcq",
          "prompt": "Sachant que l'acide nitreux HNO2 (pKa = 3,3) est un acide plus fort que l'acide hypochloreux HClO (pKa = 7,5), que peut-on affirmer de leurs bases conjuguées respectives NO2- et ClO- ?",
          "options": [
            "L'ion hypochlorite ClO- est une base plus forte que l'ion nitrite NO2-",
            "L'ion nitrite NO2- est une base plus forte que ClO-",
            "Les deux bases ont la même force",
            "Aucune des deux n'est une base"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Puisque l'acide le plus fort a pour conjuguée la base la plus faible, l'acide le plus faible (HClO, pKa = 7,5) engendre la base conjuguée la plus forte (ClO-)."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p05_q4",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que l'eau exerce un effet nivelant sur les acides forts ?",
          "options": [
            "Parce que tous les acides forts réagissent totalement avec l'eau pour être convertis à 100 % en ions H3O+ : ils présentent donc tous exactement la même force apparente dans l'eau.",
            "Parce que l'eau éteint les acides forts.",
            "Parce que leur pH devient égal à 14.",
            "Parce que les acides forts se transforment en calcaire."
          ],
          "correctAnswerIndex": 0,
          "explanation": "La réaction étant quantitative pour tous les acides forts, l'espèce acide effectivement présente en solution est systématiquement et uniquement H3O+. Leurs différences intrinsèques sont gommées (nivelées) par le solvant eau."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p05_q5",
          "type": "mcq",
          "prompt": "Lorsqu'on dissout de l'éthanolate de sodium NaC2H5O (dont le couple a un pKa de 16) dans l'eau, que devient l'ion éthanolate C2H5O- ?",
          "options": [
            "Il réagit totalement et quantitativement avec l'eau pour former de l'éthanol C2H5OH et des ions hydroxyde OH-.",
            "Il reste intact en solution sans réagir.",
            "Il se transforme en acide fort.",
            "Il précipite sous forme de sel minéral."
          ],
          "correctAnswerIndex": 0,
          "explanation": "C2H5O- étant une base plus forte que OH- (pKa = 16 > 14), elle arrache quantitativement un proton à l'eau : C2H5O- + H2O -> C2H5OH + OH-."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p05_q6",
          "type": "mcq",
          "prompt": "En appliquant la règle du gamma sur l'échelle des pKa, la réaction entre l'acide méthanoïque HCOOH (pKa = 3,7) et l'ammoniac NH3 (pKa = 9,2) est-elle très favorable ou très défavorisée ?",
          "options": [
            "Très favorable (constante d'équilibre K = 10^(9,2 - 3,7) = 10^(5,5) ≈ 3,16×10⁵ >> 1)",
            "Totalement impossible (K = 0)",
            "Défavorisée avec K << 1",
            "Athermique sans réaction"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'acide HCOOH (pKa = 3,7) est situé plus bas que l'acide conjugué NH4+ (pKa = 9,2). La constante d'équilibre vaut K = 10^(ΔpKa) = 10^(9,2 - 3,7) = 10^(5,5) > 10⁴ : la réaction est quantitative et quasi totale."
        },
        {
          "id": "terminale_c_chimie_l10_couple_acide_base_classification_p05_q7",
          "type": "mcq",
          "prompt": "Quelle formule donne la constante d'équilibre K de la réaction entre un acide A1 (couple de pKa1) et une base B2 (couple de pKa2) : A1 + B2 <=> B1 + A2 ?",
          "options": [
            "K = 10^(pKa2 - pKa1)",
            "K = 10^(pKa1 - pKa2)",
            "K = pKa1 + pKa2",
            "K = pKa1 / pKa2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "K = ([B1][A2]) / ([A1][B2]) = (Ka1 / Ka2) = 10^(-pKa1) / 10^(-pKa2) = 10^(pKa2 - pKa1). Si pKa2 > pKa1, la constante est supérieure à 1 et la réaction est thermodynamiquement favorisée."
        }
      ]
    }
  ]
};
