import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : TCDE — Thème : Chimie Générale — Titre : Acides faibles et bases faibles
export const CHIMIE_TLE_CD_L09_ACIDES_FAIBLES_BASES_FAIBLES: CurriculumChapter = {
  "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 9,
  "title": "Leçon 9 : Acides faibles et bases faibles en solution aqueuse",
  "summary": "Étude qualitative et conductimétrique comparée, ionisation partielle et réversible, critère de reconnaissance d'un acide faible (pH > -log Ca) et d'une base faible (pH < 14 + log Cb), inventaire rigoureux des espèces chimiques et bilans de masse et de charge, calcul du coefficient d'ionisation α, loi de dilution d'Ostwald (augmentation de α avec la dilution), solutions basiques de sels d'acides faibles (éthanoate de sodium) et notion d'équilibre chimique dynamique.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : TCDE – Chimie Générale – Acides faibles et bases faibles)",
  "points": [
    {
      "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p01",
      "order": 1,
      "title": "Définition et étude expérimentale qualitative d'un acide faible",
      "summary": "Propriétés physiques de l'acide éthanoïque pur, étude comparative de conductibilité électrique (acide pur vs acide aqueux vs acide fort HCl), réaction partielle et réversible avec l'eau, et critère pH > -log Ca.",
      "conceptExplanation": "1. L'acide éthanoïque pur :\nL'acide éthanoïque (acide acétique) CH3COOH pur est un liquide incolore à odeur piquante miscible à l'eau en toutes proportions. À l'état pur liquide, il ne conduit aucun courant électrique (I = 0 mA) : il est constitué exclusivement de molécules covalentes neutres et ne renferme aucun ion.\n\n2. Expérience de conductibilité électrique comparée :\nPlacés sous une même tension continue de 12 V avec les mêmes électrodes à 25 °C :\n- Solution d'acide chlorhydrique (HCl) à C = 0,1 mol/L : l'intensité du courant est très élevée (I ≈ 70 mA). L'ionisation est totale : HCl + H2O -> H3O+ + Cl-.\n- Solution d'acide éthanoïque (CH3COOH) à même concentration C = 0,1 mol/L : le courant mesuré est faible (I ≈ 4 mA). L'eau ionise bien l'acide éthanoïque, mais le nombre d'ions formés est très inférieur à celui de HCl.\nConclusion : l'ionisation de l'acide éthanoïque dans l'eau n'est pas totale, elle est partielle et limitée.\n\n3. Définition générale d'un acide faible :\nUn acide est dit faible en solution aqueuse si sa réaction avec l'eau est partielle (non totale). L'équation-bilan s'écrit avec une double flèche d'équilibre réversible :\nAH + H2O <=> A- + H3O+.\n\n4. Critère de reconnaissance immédiat :\nPour un monoacide fort à concentration Ca <= 0,1 mol/L, [H3O+] = Ca et pH = -log Ca.\nPour un acide faible, comme l'ionisation est partielle, [H3O+] < Ca, ce qui implique rigoureusement : pH > -log Ca.",
      "keyRule": "Acide faible = réaction partielle et limitée avec l'eau (double flèche <=>). Critère d'identification immédiat : pH mesuré > -log Ca.",
      "formulas": [
        {
          "name": "Équation d'ionisation d'un acide faible",
          "formula": "\\mathrm{AH} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{A^-} + \\mathrm{H_3O^+}",
          "note": "Équilibre chimique réversible (double flèche)"
        },
        {
          "name": "Critère d'acide faible",
          "formula": "\\mathrm{pH} > -\\log(C_a) \\iff [\\mathrm{H_3O^+}] < C_a",
          "note": "À 25 °C pour Ca <= 0,1 mol/L"
        }
      ],
      "workedExample": {
        "title": "Démonstration du caractère faible de l'acide méthanoïque",
        "statement": "On prépare une solution d'acide méthanoïque HCOOH de concentration Ca = 1,0×10⁻² mol/L. La mesure de son pH à 25 °C donne pH = 2,9. Montre que l'acide méthanoïque est un acide faible et écris son équation d'ionisation dans l'eau.",
        "methodSteps": [
          "Étape 1 : Calculer le pH théorique si l'acide était fort : pH_fort = -log(Ca) = -log(1,0×10⁻²) = 2,0.",
          "Étape 2 : Comparer le pH mesuré et le pH fort : le pH mesuré (2,9) est strictement supérieur à 2,0 (pH > -log Ca).",
          "Étape 3 : Calculer la concentration effective en ions oxonium : [H3O+] = 10^(-2,9) ≈ 1,26×10⁻³ mol/L. On constate que [H3O+] < Ca (1,26×10⁻³ < 10×10⁻³).",
          "Étape 4 : Conclure : l'ionisation dans l'eau est partielle, l'acide méthanoïque est donc un acide faible.",
          "Étape 5 : Écrire l'équation d'ionisation : HCOOH + H2O <=> HCOO- + H3O+."
        ],
        "conclusion": "L'acide méthanoïque est un acide faible, sa dissociation avec l'eau est un équilibre chimique réversible."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Comparaison expérimentale : Acide fort (HCl) versus Acide faible (CH3COOH)",
        "tableData": {
          "headers": [
            "Propriété étudiée",
            "Acide fort (HCl, C = 0,1 mol/L)",
            "Acide faible (CH3COOH, C = 0,1 mol/L)"
          ],
          "rows": [
            [
              "Intensité du courant électrique",
              "Très élevée (~70 mA, lampe très brillante)",
              "Faible (~4 mA, lampe peu brillante)"
            ],
            [
              "Nature de la dissociation dans l'eau",
              "Totale et quantitative (flèche simple ->)",
              "Partielle et équilibrée (double flèche <=> )"
            ],
            [
              "Concentration en ions oxonium [H3O+]",
              "[H3O+] = Ca = 0,10 mol/L",
              "[H3O+] ≈ 0,0013 mol/L << Ca"
            ],
            [
              "Relation de pH à 25 °C",
              "pH = -log Ca = 1,0",
              "pH = 2,9 > -log Ca (pH supérieur à 1,0)"
            ],
            [
              "Forme prédominante en solution",
              "Ions H3O+ et Cl- (molécules HCl absentes)",
              "Molécules neutres CH3COOH non dissociées (> 98 %)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'acide pur à l'état liquide et absence de conductibilité",
          "stepTheme": "Acide pur",
          "stepBadge": "Molécules covalentes",
          "paragraphText": "L'acide éthanoïque pur (acide acétique glacial) est un liquide moléculaire covalent. En l'absence de solvant ionisant comme l'eau, il ne contient aucun ion libre et présente une conductivité électrique nulle (intensité mesurée I = 0 mA).",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p01_q1",
            "type": "mcq",
            "prompt": "Pourquoi un bécher rempli d'acide éthanoïque liquide pur à 100 % n'allume-t-il pas une lampe témoin branchée sur un circuit électrique sous 12 V ?",
            "options": [
              "Parce que l'acide éthanoïque pur est un composé moléculaire covalent qui ne renferme aucun porteur de charge libre (aucun ion).",
              "Parce que l'acide éthanoïque pur est un isolant plastique.",
              "Parce que les électrons y circulent trop rapidement pour allumer la lampe.",
              "Parce que la tension de 12 V le neutralise."
            ],
            "correctAnswerIndex": 0,
            "explanation": "La conduction du courant électrique dans un liquide exige la présence d'ions mobiles. L'acide éthanoïque pur est constitué exclusivement de molécules neutres CH3COOH liées par liaisons hydrogène sans dissociation ionique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Conductibilité comparée : acide fort versus acide faible",
          "stepTheme": "Conductimétrie",
          "stepBadge": "Ionisation partielle",
          "paragraphText": "Sous la même concentration C = 0,10 mol/L, une solution d'acide éthanoïque conduit beaucoup moins le courant (4 mA) qu'une solution d'acide chlorhydrique (70 mA). Cette différence prouve sans ambiguïté que l'eau n'ionise qu'une très faible fraction des molécules d'acide éthanoïque apportées.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p01_q2",
            "type": "mcq",
            "prompt": "À concentration égale (C = 0,05 mol/L), une solution d'acide nitrique HNO3 conduit 18 fois plus le courant électrique qu'une solution d'acide benzoïque C6H5COOH. Que déduit-on de cette mesure sur la force de l'acide benzoïque ?",
            "options": [
              "L'acide benzoïque est un acide faible dont l'ionisation par l'eau est très limitée par rapport à celle de l'acide nitrique (acide fort totalement dissocié).",
              "L'acide benzoïque est un acide fort très dangereux.",
              "L'acide benzoïque est une base forte.",
              "L'acide benzoïque neutralise le courant électrique."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le courant électrique est directement proportionnel à la concentration globale des ions en solution. La très faible intensité mesurée pour C6H5COOH prouve que sa dissociation dans l'eau est partielle : c'est un acide faible."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Définition rigoureuse d'un acide faible",
          "stepTheme": "Définition acide faible",
          "stepBadge": "Double flèche",
          "paragraphText": "Un acide faible est une espèce chimique donneuse de protons dont la réaction avec l'eau est partielle (limitée) et non totale. Elle aboutit à un équilibre chimique réversible noté avec le symbole double flèche <=> : AH + H2O <=> A- + H3O+.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p01_q3",
            "type": "mcq",
            "prompt": "Quelle écriture d'équation-bilan traduit correctement la réaction de l'acide hypochloreux HClO avec l'eau en tant qu'acide faible ?",
            "options": [
              "HClO + H2O <=> ClO- + H3O+",
              "HClO + H2O -> ClO- + H3O+",
              "HClO -> Cl- + OH-",
              "HClO + H2O <=> Cl2 + H2 + O2"
            ],
            "correctAnswerIndex": 0,
            "explanation": "HClO étant un acide faible, sa réaction avec l'eau est un équilibre réversible partiel qui s'écrit obligatoirement avec une double flèche : HClO + H2O <=> ClO- + H3O+."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le critère fondamental du pH d'un acide faible",
          "stepTheme": "Critère de pH",
          "stepBadge": "pH > -log Ca",
          "paragraphText": "Puisque l'acide ne se dissocie que partiellement, la concentration finale en ions oxonium [H3O+] est strictement inférieure à la concentration initiale en acide apporté Ca : [H3O+] < Ca. En appliquant la fonction -log (qui inverse les inégalités), on obtient le critère fondamental : pH > -log Ca.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p01_q4",
            "type": "mcq",
            "prompt": "On mesure le pH d'une solution d'acide propanoïque C2H5COOH à la concentration Ca = 5,0×10⁻² mol/L. On trouve pH = 2,9. Sachant que -log(5,0×10⁻²) = 1,3, quelle conclusion s'impose ?",
            "options": [
              "Comme pH (2,9) > -log Ca (1,3), l'acide propanoïque ne s'est que partiellement dissocié : c'est un acide faible.",
              "Comme pH > 1,3, l'acide propanoïque est un acide fort surconcentré.",
              "Le pH-mètre est défectueux car le pH d'un acide ne peut dépasser 2.",
              "L'acide propanoïque est une solution basique."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Si l'acide propanoïque était fort, son pH vaudrait 1,3. La valeur mesurée 2,9 étant nettement supérieure à 1,3, [H3O+] = 10⁻²'⁹ = 1,26×10⁻³ mol/L est très inférieure à Ca (5,0×10⁻² mol/L) : l'acide est faible."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Inventaire des principaux acides faibles du programme",
          "stepTheme": "Familles chimiques",
          "stepBadge": "Exemples types",
          "paragraphText": "Font partie des acides faibles classiques : tous les acides carboxyliques (méthanoïque HCOOH, éthanoïque CH3COOH, propanoïque C2H5COOH, benzoïque C6H5COOH), les cations ammonium (NH4+, CH3NH3+, C2H5NH3+), l'acide fluorhydrique HF, l'acide nitreux HNO2 et l'acide cyanhydrique HCN.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p01_q5",
            "type": "mcq",
            "prompt": "Parmi les espèces suivantes, laquelle constitue un acide faible de type cationique capable de céder un proton à l'eau ?",
            "options": [
              "L'ion ammonium NH4+",
              "L'acide sulfurique H2SO4",
              "L'acide chlorhydrique HCl",
              "Le chlorure de sodium NaCl"
            ],
            "correctAnswerIndex": 0,
            "explanation": "NH4+ est un cation acide faible qui cède partiellement un proton à l'eau selon l'équilibre : NH4+ + H2O <=> NH3 + H3O+ (pKa = 9,2). H2SO4 et HCl sont des acides forts."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Protocole de mesure au pH-mètre pour caractériser un acide",
          "stepTheme": "Mesure expérimentale",
          "stepBadge": "Méthode TP",
          "paragraphText": "Pour déterminer si un acide inconnu de concentration connue Ca est fort ou faible en travaux pratiques : 1° Étalonner le pH-mètre avec les tampons 7,00 et 4,01 ; 2° Mesurer le pH de la solution sous agitation modérée ; 3° Calculer -log Ca ; 4° Si pH = -log Ca, l'acide est fort ; si pH > -log Ca, l'acide est faible.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p01_q6",
            "type": "mcq",
            "prompt": "Un élève prépare une solution aqueuse de monoacide à Ca = 0,0010 mol/L et mesure au pH-mètre un pH de 3,00. Quelle est la nature de cet acide ?",
            "options": [
              "C'est un acide fort car pH = -log(0,0010) = 3,00 (dissociation totale).",
              "C'est un acide faible car son pH est égal à 3.",
              "C'est une base faible.",
              "On ne peut pas conclure sans connaître la température."
            ],
            "correctAnswerIndex": 0,
            "explanation": "-log Ca = -log(10⁻³) = 3,00. La valeur mesurée coïncidant exactement avec le pH théorique d'un acide totalement dissocié (pH = -log Ca), cet acide s'ionise intégralement : c'est un acide fort."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Synthèse : la réversibilité thermodynamique de l'acide faible",
          "stepTheme": "Bilan conceptuel",
          "stepBadge": "Réversibilité",
          "paragraphText": "Contrairement à l'acide fort dont l'anion formé Cl- est totalement indifférent et incapable de recapturer le proton dans l'eau, la base conjuguée A- d'un acide faible est une base active qui capte les protons H3O+ formés : les deux réactions inverses s'opposent et mènent à un état d'équilibre.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p01_q7",
            "type": "mcq",
            "prompt": "Pourquoi la réaction entre un acide faible AH et l'eau s'arrête-t-elle à un état d'équilibre au lieu de dissocier 100 % des molécules AH ?",
            "options": [
              "Parce que la base conjuguée A- formée réagit en sens inverse avec les ions H3O+ pour reformer AH et H2O dès son apparition.",
              "Parce que l'eau s'évapore au cours de la réaction.",
              "Parce que l'acide faible manque d'électrons.",
              "Parce que les acides faibles sont insolubles."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans le milieu, la réaction directe AH + H2O -> A- + H3O+ et la réaction inverse A- + H3O+ -> AH + H2O se déroulent simultanément à des vitesses qui s'égalisent, stabilisant les concentrations à un niveau d'équilibre partiel."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p01_q1",
          "type": "mcq",
          "prompt": "Pourquoi un bécher rempli d'acide éthanoïque liquide pur à 100 % n'allume-t-il pas une lampe témoin branchée sur un circuit électrique sous 12 V ?",
          "options": [
            "Parce que l'acide éthanoïque pur est un composé moléculaire covalent qui ne renferme aucun porteur de charge libre (aucun ion).",
            "Parce que l'acide éthanoïque pur est un isolant plastique.",
            "Parce que les électrons y circulent trop rapidement pour allumer la lampe.",
            "Parce que la tension de 12 V le neutralise."
          ],
          "correctAnswerIndex": 0,
          "explanation": "La conduction du courant électrique dans un liquide exige la présence d'ions mobiles. L'acide éthanoïque pur est constitué exclusivement de molécules neutres CH3COOH liées par liaisons hydrogène sans dissociation ionique."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p01_q2",
          "type": "mcq",
          "prompt": "À concentration égale (C = 0,05 mol/L), une solution d'acide nitrique HNO3 conduit 18 fois plus le courant électrique qu'une solution d'acide benzoïque C6H5COOH. Que déduit-on de cette mesure sur la force de l'acide benzoïque ?",
          "options": [
            "L'acide benzoïque est un acide faible dont l'ionisation par l'eau est très limitée par rapport à celle de l'acide nitrique (acide fort totalement dissocié).",
            "L'acide benzoïque est un acide fort très dangereux.",
            "L'acide benzoïque est une base forte.",
            "L'acide benzoïque neutralise le courant électrique."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le courant électrique est directement proportionnel à la concentration globale des ions en solution. La très faible intensité mesurée pour C6H5COOH prouve que sa dissociation dans l'eau est partielle : c'est un acide faible."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p01_q3",
          "type": "mcq",
          "prompt": "Quelle écriture d'équation-bilan traduit correctement la réaction de l'acide hypochloreux HClO avec l'eau en tant qu'acide faible ?",
          "options": [
            "HClO + H2O <=> ClO- + H3O+",
            "HClO + H2O -> ClO- + H3O+",
            "HClO -> Cl- + OH-",
            "HClO + H2O <=> Cl2 + H2 + O2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "HClO étant un acide faible, sa réaction avec l'eau est un équilibre réversible partiel qui s'écrit obligatoirement avec une double flèche : HClO + H2O <=> ClO- + H3O+."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p01_q4",
          "type": "mcq",
          "prompt": "On mesure le pH d'une solution d'acide propanoïque C2H5COOH à la concentration Ca = 5,0×10⁻² mol/L. On trouve pH = 2,9. Sachant que -log(5,0×10⁻²) = 1,3, quelle conclusion s'impose ?",
          "options": [
            "Comme pH (2,9) > -log Ca (1,3), l'acide propanoïque ne s'est que partiellement dissocié : c'est un acide faible.",
            "Comme pH > 1,3, l'acide propanoïque est un acide fort surconcentré.",
            "Le pH-mètre est défectueux car le pH d'un acide ne peut dépasser 2.",
            "L'acide propanoïque est une solution basique."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Si l'acide propanoïque était fort, son pH vaudrait 1,3. La valeur mesurée 2,9 étant nettement supérieure à 1,3, [H3O+] = 10⁻²'⁹ = 1,26×10⁻³ mol/L est très inférieure à Ca (5,0×10⁻² mol/L) : l'acide est faible."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p01_q5",
          "type": "mcq",
          "prompt": "Parmi les espèces suivantes, laquelle constitue un acide faible de type cationique capable de céder un proton à l'eau ?",
          "options": [
            "L'ion ammonium NH4+",
            "L'acide sulfurique H2SO4",
            "L'acide chlorhydrique HCl",
            "Le chlorure de sodium NaCl"
          ],
          "correctAnswerIndex": 0,
          "explanation": "NH4+ est un cation acide faible qui cède partiellement un proton à l'eau selon l'équilibre : NH4+ + H2O <=> NH3 + H3O+ (pKa = 9,2). H2SO4 et HCl sont des acides forts."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p01_q6",
          "type": "mcq",
          "prompt": "Un élève prépare une solution aqueuse de monoacide à Ca = 0,0010 mol/L et mesure au pH-mètre un pH de 3,00. Quelle est la nature de cet acide ?",
          "options": [
            "C'est un acide fort car pH = -log(0,0010) = 3,00 (dissociation totale).",
            "C'est un acide faible car son pH est égal à 3.",
            "C'est une base faible.",
            "On ne peut pas conclure sans connaître la température."
          ],
          "correctAnswerIndex": 0,
          "explanation": "-log Ca = -log(10⁻³) = 3,00. La valeur mesurée coïncidant exactement avec le pH théorique d'un acide totalement dissocié (pH = -log Ca), cet acide s'ionise intégralement : c'est un acide fort."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p01_q7",
          "type": "mcq",
          "prompt": "Pourquoi la réaction entre un acide faible AH et l'eau s'arrête-t-elle à un état d'équilibre au lieu de dissocier 100 % des molécules AH ?",
          "options": [
            "Parce que la base conjuguée A- formée réagit en sens inverse avec les ions H3O+ pour reformer AH et H2O dès son apparition.",
            "Parce que l'eau s'évapore au cours de la réaction.",
            "Parce que l'acide faible manque d'électrons.",
            "Parce que les acides faibles sont insolubles."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans le milieu, la réaction directe AH + H2O -> A- + H3O+ et la réaction inverse A- + H3O+ -> AH + H2O se déroulent simultanément à des vitesses qui s'égalisent, stabilisant les concentrations à un niveau d'équilibre partiel."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p02",
      "order": 2,
      "title": "Étude quantitative d'une solution d'acide faible : bilans et espèces",
      "summary": "Inventaire complet des espèces chimiques, exploitation conjointe du pH et du produit ionique Ke, équation d'électroneutralité (LEN), équation de conservation de la matière (LCM), et hiérarchisation entre espèces majoritaires, minoritaires et ultra-minoritaires.",
      "conceptExplanation": "Pour une solution aqueuse d'un monoacide faible AH apporté à la concentration molaire Ca à 25 °C dont on mesure le pH :\n\n1. Inventaire des espèces chimiques présentes à l'équilibre :\n- Molécules : l'eau solvant H2O, et l'acide éthanoïque non dissocié AH restant.\n- Ions : les ions oxonium H3O+, les ions hydroxyde résiduels OH-, et les ions base conjuguée A-.\n\n2. Détermination quantitative des concentrations à partir du pH :\n- [H3O+] = 10^(-pH)\n- [OH-] = Ke / [H3O+] = 10^(pH - 14) mol/L.\n\n3. Exploitation de la Loi d'Électroneutralité (LEN) :\n[H3O+] = [A-] + [OH-].\nEn milieu acide (pH <= 6), [OH-] <= 10^-8 mol/L est totalement négligeable devant [H3O+] (typiquement > 10^-4 mol/L). On en déduit l'approximation fondamentale :\n[A-] ≈ [H3O+] = 10^(-pH).\n\n4. Exploitation de la Conservation de la Matière (LCM) :\nCa = [AH]restant + [A-], d'où :\n[AH]restant = Ca - [A-] ≈ Ca - [H3O+].\n\n5. Hiérarchie quantitative des espèces dans un acide faible :\n- Espèce majoritaire : le solvant H2O, puis la forme acide non dissociée AH (représente souvent plus de 90 à 98 % des molécules apportées).\n- Espèces minoritaires : les ions A- et H3O+ (en quantités égales).\n- Espèce ultra-minoritaire : l'ion hydroxyde OH- (concentration résiduelle infime issue de l'autoprotolyse de l'eau).",
      "keyRule": "Pour un acide faible en milieu acide : [A-] ≈ [H3O+] = 10^(-pH) et [AH] = Ca - [H3O+]. L'espèce dissoute très largement majoritaire est la molécule d'acide non dissociée AH.",
      "formulas": [
        {
          "name": "Concentration de la base conjuguée",
          "formula": "[\\mathrm{A^-}] \\approx [\\mathrm{H_3O^+}] = 10^{-\\mathrm{pH}}",
          "note": "Car [OH-] est négligeable devant [H3O+] dans la LEN"
        },
        {
          "name": "Concentration de l'acide restant",
          "formula": "[\\mathrm{AH}] = C_a - [\\mathrm{A^-}] \\approx C_a - 10^{-\\mathrm{pH}}",
          "note": "Issue de la conservation de la matière"
        }
      ],
      "workedExample": {
        "title": "Calcul complet des concentrations pour une solution d'acide éthanoïque à Ca = 1,0×10⁻² mol/L",
        "statement": "Une solution aqueuse d'acide éthanoïque CH3COOH de concentration Ca = 1,0×10⁻² mol/L présente un pH mesuré de 3,4 à 25 °C. Réalise l'inventaire des espèces chimiques et calcule leurs concentrations molaires.",
        "methodSteps": [
          "Étape 1 : Calcul de [H3O+] : [H3O+] = 10^(-3,4) = 10^(0,6 - 4) = 10^(0,6) × 10⁻⁴ ≈ 3,98×10⁻⁴ mol/L.",
          "Étape 2 : Calcul de [OH-] : [OH-] = 10⁻¹⁴ / (3,98×10⁻⁴) ≈ 2,51×10⁻¹¹ mol/L.",
          "Étape 3 : Application de l'électroneutralité : [CH3COO-] = [H3O+] - [OH-] ≈ [H3O+] = 3,98×10⁻⁴ mol/L (car 2,51×10⁻¹¹ est négligeable).",
          "Étape 4 : Application de la conservation de la matière : [CH3COOH] = Ca - [CH3COO-] = 1,0×10⁻² - 3,98×10⁻⁴ = 0,0100 - 0,000398 = 9,60×10⁻³ mol/L.",
          "Étape 5 : Hiérarchie : [CH3COOH] (9,6×10⁻³ mol/L) >> [CH3COO-] = [H3O+] (3,98×10⁻⁴ mol/L) >> [OH-] (2,51×10⁻¹¹ mol/L)."
        ],
        "conclusion": "96 % des molécules de CH3COOH restent intactes sous forme non dissociée, confirmant l'extrême faiblesse de l'ionisation."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Bilan quantitatif des espèces en solution d'acide éthanoïque (Ca = 0,01 mol/L, pH = 3,4)",
        "tableData": {
          "headers": [
            "Espèce chimique",
            "Formule",
            "Statut d'abondance",
            "Concentration molaire (mol/L)",
            "Pourcentage par rapport à Ca"
          ],
          "rows": [
            [
              "Eau liquide (solvant)",
              "H2O",
              "Ultra-majoritaire",
              "≈ 55,5 mol/L",
              "Solvant"
            ],
            [
              "Acide éthanoïque restant",
              "CH3COOH",
              "Espèce soluté majoritaire",
              "9,60 × 10⁻³ mol/L",
              "96,0 %"
            ],
            [
              "Ion éthanoate formé",
              "CH3COO-",
              "Minoritaire",
              "3,98 × 10⁻⁴ mol/L",
              "4,0 %"
            ],
            [
              "Ion oxonium formé",
              "H3O+",
              "Minoritaire",
              "3,98 × 10⁻⁴ mol/L",
              "4,0 %"
            ],
            [
              "Ion hydroxyde résiduel",
              "OH-",
              "Ultra-minoritaire",
              "2,51 × 10⁻¹¹ mol/L",
              "< 0,000001 %"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Inventaire méthodique des espèces chimiques en solution",
          "stepTheme": "Inventaire",
          "stepBadge": "Méthode d'analyse",
          "paragraphText": "Dans toute solution aqueuse d'acide faible, on liste rigoureusement : les molécules (solvant H2O et acide non dissocié AH) et les ions (H3O+, A- et OH-). Oublier le solvant ou l'ion OH- issu de l'autoprotolyse de l'eau est sanctionné au baccalauréat.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p02_q1",
            "type": "mcq",
            "prompt": "Dans une solution aqueuse d'acide benzoïque C6H5COOH, quel est l'inventaire exhaustif des espèces chimiques présentes à l'équilibre ?",
            "options": [
              "Molécules : H2O, C6H5COOH ; Ions : H3O+, OH-, C6H5COO-",
              "Ions uniquement : H3O+, C6H5COO-",
              "Molécules : H2O, C6H5COOH ; Ions : H+ et e-",
              "Molécules : CO2 et H2O ; Ions : Na+ et Cl-"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'inventaire complet recense impérativement le solvant H2O, les molécules de soluté restantes C6H5COOH, et tous les ions présents (H3O+, OH- et la base conjuguée C6H5COO-)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Calcul des concentrations en ions oxonium et hydroxyde",
          "stepTheme": "Calcul ionique",
          "stepBadge": "pH et Ke",
          "paragraphText": "À partir de la valeur mesurée du pH, on calcule immédiatement [H3O+] = 10^(-pH) puis, grâce au produit ionique de l'eau Ke = 1,0×10⁻¹⁴ à 25 °C, la concentration en ions hydroxyde : [OH-] = Ke / [H3O+].",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p02_q2",
            "type": "mcq",
            "prompt": "Une solution aqueuse d'acide acétique a un pH de 3,0 à 25 °C. Quelles sont les valeurs de [H3O+] et de [OH-] ?",
            "options": [
              "[H3O+] = 1,0×10⁻³ mol/L et [OH-] = 1,0×10⁻¹¹ mol/L",
              "[H3O+] = 3,0 mol/L et [OH-] = 11 mol/L",
              "[H3O+] = 1,0×10⁻³ mol/L et [OH-] = 0 mol/L",
              "[H3O+] = 1,0×10⁻⁷ mol/L et [OH-] = 1,0×10⁻⁷ mol/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "[H3O+] = 10^(-3,0) = 1,0×10⁻³ mol/L. [OH-] = 1,0×10⁻¹⁴ / 1,0×10⁻³ = 1,0×10⁻¹¹ mol/L."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Simplification de l'équation d'électroneutralité en milieu acide",
          "stepTheme": "Électroneutralité",
          "stepBadge": "Approximation LEN",
          "paragraphText": "L'électroneutralité s'écrit [H3O+] = [A-] + [OH-]. En milieu acide (pH <= 6), [OH-] <= 10^-8 mol/L est au minimum 10 000 fois plus faible que [H3O+] : on peut donc négliger rigoureusement [OH-] devant [H3O+], ce qui donne [A-] ≈ [H3O+].",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p02_q3",
            "type": "mcq",
            "prompt": "Dans une solution d'acide méthanoïque à pH = 2,7, pourquoi est-il légitime d'écrire [HCOO-] ≈ [H3O+] ?",
            "options": [
              "Parce que [OH-] = 10^(-11,3) mol/L est plus de 100 millions de fois inférieure à [H3O+] = 2,0×10⁻³ mol/L et est totalement négligeable dans l'électroneutralité.",
              "Parce que les ions hydroxyde n'existent pas dans l'eau.",
              "Parce que l'acide méthanoïque détruit l'eau.",
              "Parce que l'électroneutralité ne s'applique pas aux acides faibles."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans l'égalité stricte [H3O+] = [HCOO-] + [OH-], négliger [OH-] = 5,0×10⁻¹² mol/L devant [H3O+] = 2,0×10⁻³ mol/L entraîne une erreur relative inférieure à 0,000001 %, pleinement acceptable."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Conservation de la matière et concentration de l'acide restant",
          "stepTheme": "Conservation matière",
          "stepBadge": "Bilan de masse",
          "paragraphText": "La conservation de la matière impose Ca = [AH] + [A-]. La concentration en acide restant non dissocié vaut donc [AH] = Ca - [A-] ≈ Ca - [H3O+]. Elle est toujours positive et très proche de Ca pour un acide peu dissocié.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p02_q4",
            "type": "mcq",
            "prompt": "On dissout un acide faible à Ca = 0,050 mol/L. Le pH mesuré est 3,0 (soit [H3O+] = 0,001 mol/L). Quelle est la concentration en acide moléculaire restant non dissocié ?",
            "options": [
              "0,049 mol/L (soit 98 % de la quantité initiale)",
              "0,051 mol/L",
              "0,001 mol/L",
              "0 mol/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "[AH] = Ca - [A-] = Ca - [H3O+] = 0,050 - 0,001 = 0,049 mol/L. 98 % des molécules introduites restent sous leur forme acide d'origine."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Hiérarchie quantitative des espèces chimiques dissoutes",
          "stepTheme": "Ordre de grandeur",
          "stepBadge": "Hiérarchie des espèces",
          "paragraphText": "Dans toute solution d'acide faible de concentration usuelle, les concentrations obéissent au classement hiérarchique strict : [AH]restant (majoritaire) >> [A-] ≈ [H3O+] (minoritaires) >> [OH-] (ultra-minoritaire).",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p02_q5",
            "type": "mcq",
            "prompt": "Quelle est l'espèce chimique dissoute la plus abondante dans une solution d'acide éthanoïque à 0,1 mol/L ?",
            "options": [
              "La molécule d'acide éthanoïque non dissociée CH3COOH",
              "L'ion oxonium H3O+",
              "L'ion éthanoate CH3COO-",
              "L'ion hydroxyde OH-"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'ionisation étant très faible (environ 1,3 % à cette concentration), plus de 98,7 % de l'acide reste sous forme de molécules neutres CH3COOH."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Cas d'une solution d'acide très dilué : limites de l'approximation",
          "stepTheme": "Limites de calcul",
          "stepBadge": "Haute dilution",
          "paragraphText": "Si la concentration Ca est très faible (Ca < 10^-5 mol/L), le pH se rapproche de 6 et la concentration [OH-] n'est plus tout à fait négligeable dans l'électroneutralité : il faut conserver [A-] = [H3O+] - [OH-] pour une précision optimale.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p02_q6",
            "type": "mcq",
            "prompt": "Dans quel cas l'approximation [A-] ≈ [H3O+] cesse-t-elle d'être parfaitement rigoureuse ?",
            "options": [
              "Lorsque la solution est extrêmement diluée et que son pH dépasse 6,0",
              "Lorsque la solution est très concentrée à 1 mol/L",
              "À température de 25 °C",
              "Lorsque l'acide est pur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Lorsque le pH dépasse 6,0, [OH-] atteint 10^-8 mol/L et [H3O+] vaut 10^-6 mol/L : l'écart dépasse 1 %, nécessitant la prise en compte de [OH-] dans l'électroneutralité."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Synthèse : le tryptique de résolution des solutions d'acides faibles",
          "stepTheme": "Bilan méthodologique",
          "stepBadge": "Trépied de calcul",
          "paragraphText": "La résolution quantitative d'une solution d'acide faible repose sur 3 piliers indissociables : 1° [H3O+] = 10^(-pH) et [OH-] = Ke/[H3O+] ; 2° [A-] = [H3O+] - [OH-] ≈ [H3O+] (LEN) ; 3° [AH] = Ca - [A-] (LCM).",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p02_q7",
            "type": "mcq",
            "prompt": "À partir de quelles seules données expérimentales peut-on calculer toutes les concentrations des espèces d'une solution d'acide faible ?",
            "options": [
              "La concentration apportée Ca et le pH mesuré à la température fixée",
              "La masse molaire de l'acide uniquement",
              "Le volume du bécher",
              "La couleur de la solution"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La connaissance de Ca et du pH suffit intégralement pour déterminer [H3O+], [OH-], [A-] par électroneutralité et [AH] par conservation de matière."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p02_q1",
          "type": "mcq",
          "prompt": "Dans une solution aqueuse d'acide benzoïque C6H5COOH, quel est l'inventaire exhaustif des espèces chimiques présentes à l'équilibre ?",
          "options": [
            "Molécules : H2O, C6H5COOH ; Ions : H3O+, OH-, C6H5COO-",
            "Ions uniquement : H3O+, C6H5COO-",
            "Molécules : H2O, C6H5COOH ; Ions : H+ et e-",
            "Molécules : CO2 et H2O ; Ions : Na+ et Cl-"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'inventaire complet recense impérativement le solvant H2O, les molécules de soluté restantes C6H5COOH, et tous les ions présents (H3O+, OH- et la base conjuguée C6H5COO-)."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p02_q2",
          "type": "mcq",
          "prompt": "Une solution aqueuse d'acide acétique a un pH de 3,0 à 25 °C. Quelles sont les valeurs de [H3O+] et de [OH-] ?",
          "options": [
            "[H3O+] = 1,0×10⁻³ mol/L et [OH-] = 1,0×10⁻¹¹ mol/L",
            "[H3O+] = 3,0 mol/L et [OH-] = 11 mol/L",
            "[H3O+] = 1,0×10⁻³ mol/L et [OH-] = 0 mol/L",
            "[H3O+] = 1,0×10⁻⁷ mol/L et [OH-] = 1,0×10⁻⁷ mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "[H3O+] = 10^(-3,0) = 1,0×10⁻³ mol/L. [OH-] = 1,0×10⁻¹⁴ / 1,0×10⁻³ = 1,0×10⁻¹¹ mol/L."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p02_q3",
          "type": "mcq",
          "prompt": "Dans une solution d'acide méthanoïque à pH = 2,7, pourquoi est-il légitime d'écrire [HCOO-] ≈ [H3O+] ?",
          "options": [
            "Parce que [OH-] = 10^(-11,3) mol/L est plus de 100 millions de fois inférieure à [H3O+] = 2,0×10⁻³ mol/L et est totalement négligeable dans l'électroneutralité.",
            "Parce que les ions hydroxyde n'existent pas dans l'eau.",
            "Parce que l'acide méthanoïque détruit l'eau.",
            "Parce que l'électroneutralité ne s'applique pas aux acides faibles."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans l'égalité stricte [H3O+] = [HCOO-] + [OH-], négliger [OH-] = 5,0×10⁻¹² mol/L devant [H3O+] = 2,0×10⁻³ mol/L entraîne une erreur relative inférieure à 0,000001 %, pleinement acceptable."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p02_q4",
          "type": "mcq",
          "prompt": "On dissout un acide faible à Ca = 0,050 mol/L. Le pH mesuré est 3,0 (soit [H3O+] = 0,001 mol/L). Quelle est la concentration en acide moléculaire restant non dissocié ?",
          "options": [
            "0,049 mol/L (soit 98 % de la quantité initiale)",
            "0,051 mol/L",
            "0,001 mol/L",
            "0 mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "[AH] = Ca - [A-] = Ca - [H3O+] = 0,050 - 0,001 = 0,049 mol/L. 98 % des molécules introduites restent sous leur forme acide d'origine."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p02_q5",
          "type": "mcq",
          "prompt": "Quelle est l'espèce chimique dissoute la plus abondante dans une solution d'acide éthanoïque à 0,1 mol/L ?",
          "options": [
            "La molécule d'acide éthanoïque non dissociée CH3COOH",
            "L'ion oxonium H3O+",
            "L'ion éthanoate CH3COO-",
            "L'ion hydroxyde OH-"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ionisation étant très faible (environ 1,3 % à cette concentration), plus de 98,7 % de l'acide reste sous forme de molécules neutres CH3COOH."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p02_q6",
          "type": "mcq",
          "prompt": "Dans quel cas l'approximation [A-] ≈ [H3O+] cesse-t-elle d'être parfaitement rigoureuse ?",
          "options": [
            "Lorsque la solution est extrêmement diluée et que son pH dépasse 6,0",
            "Lorsque la solution est très concentrée à 1 mol/L",
            "À température de 25 °C",
            "Lorsque l'acide est pur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lorsque le pH dépasse 6,0, [OH-] atteint 10^-8 mol/L et [H3O+] vaut 10^-6 mol/L : l'écart dépasse 1 %, nécessitant la prise en compte de [OH-] dans l'électroneutralité."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p02_q7",
          "type": "mcq",
          "prompt": "À partir de quelles seules données expérimentales peut-on calculer toutes les concentrations des espèces d'une solution d'acide faible ?",
          "options": [
            "La concentration apportée Ca et le pH mesuré à la température fixée",
            "La masse molaire de l'acide uniquement",
            "Le volume du bécher",
            "La couleur de la solution"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La connaissance de Ca et du pH suffit intégralement pour déterminer [H3O+], [OH-], [A-] par électroneutralité et [AH] par conservation de matière."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p03",
      "order": 3,
      "title": "Coefficient d'ionisation α et la loi de dilution d'Ostwald",
      "summary": "Définition du coefficient de dissociation α = [AH]dissocié / Ca = [H3O+] / Ca, calcul en pourcentage, loi de modération et loi de dilution d'Ostwald : l'augmentation de la dilution accroît le taux d'ionisation d'un acide faible.",
      "conceptExplanation": "1. Définition du coefficient d'ionisation (ou de dissociation) α :\nLe coefficient de dissociation α d'un acide faible est la fraction de molécules qui se sont effectivement ionisées par rapport au nombre total de molécules d'acide introduites en solution :\nα = n(AH dissocié) / n(AH apporté) = [A-] / Ca ≈ [H3O+] / Ca.\nC'est un nombre sans dimension compris entre 0 et 1 (souvent exprimé en pourcentage : α % = α × 100 %).\nPour un acide fort (dissociation totale), α = 1 (100 %).\nPour un acide faible, α est strictement inférieur à 1 (souvent entre 1 % et 10 % aux concentrations ordinaires).\n\n2. L'effet de la dilution sur l'ionisation (Loi de dilution d'Ostwald) :\nExpérience officielle de référence :\n- Solution S1 d'acide éthanoïque à Ca = 10^-2 mol/L : pH = 3,4 => [H3O+] = 4,0×10^-4 mol/L => α1 = (4,0×10^-4) / 10^-2 = 0,04 = 4 %.\n- On dilue 100 fois : solution S2 à C'a = 10^-4 mol/L : pH = 4,4 => [H3O+] = 4,0×10^-5 mol/L => α2 = (4,0×10^-5) / 10^-4 = 0,40 = 40 % !\nInterprétation : bien que la concentration globale en ions [H3O+] diminue lors de la dilution (le pH augmente de 3,4 à 4,4), la PROPORTION relative de molécules dissociées passe de 4 % à 40 % : elle a été multipliée par 10 !\n\n3. Énoncé fondamental de la loi d'Ostwald :\nLe coefficient d'ionisation d'un acide faible (ou d'une base faible) augmente lorsque la concentration diminue (c'est-à-dire quand la dilution augmente). À dilution infinie (C -> 0), α tend asymptotiquement vers 1 (100 %) : sous très forte dilution, un acide faible tend à s'ioniser complètement.",
      "keyRule": "Coefficient de dissociation α = [H3O+]/Ca (sans unité, 0 < α < 1). Loi d'Ostwald : la dilution AUGMENTE le coefficient d'ionisation α d'un électrolyte faible.",
      "formulas": [
        {
          "name": "Coefficient d'ionisation α",
          "formula": "\\alpha = \\frac{[\\mathrm{H_3O^+}]}{C_a} = \\frac{10^{-\\mathrm{pH}}}{C_a}",
          "note": "0 < α < 1 ; α en % = α × 100"
        },
        {
          "name": "Loi de dilution d'Ostwald",
          "formula": "K_a = \\frac{\\alpha^2 \\cdot C_a}{1 - \\alpha} \\implies \\lim_{C_a \\to 0} \\alpha = 1",
          "note": "Quand Ca diminue, α augmente pour maintenir Ka constant"
        }
      ],
      "workedExample": {
        "title": "Calcul comparatif de coefficients d'ionisation avant et après dilution",
        "statement": "Une solution d'acide méthanoïque S1 à C1 = 1,0×10⁻² mol/L a un pH de 2,9. On dilue 20 fois cette solution pour obtenir S2 à C2 = 5,0×10⁻⁴ mol/L dont le pH mesuré est 3,4. Calcule les coefficients d'ionisation α1 et α2 et commente.",
        "methodSteps": [
          "Étape 1 : Pour la solution initiale S1 : [H3O+]1 = 10^(-2,9) ≈ 1,26×10⁻³ mol/L. α1 = [H3O+]1 / C1 = (1,26×10⁻³) / 10⁻² = 0,126 = 12,6 %.",
          "Étape 2 : Pour la solution diluée S2 : [H3O+]2 = 10^(-3,4) ≈ 3,98×10⁻⁴ mol/L. α2 = [H3O+]2 / C2 = (3,98×10⁻⁴) / (5,0×10⁻⁴) = 0,796 ≈ 80 %.",
          "Étape 3 : Comparaison : α2 (80 %) est nettement plus grand que α1 (12,6 %)."
        ],
        "conclusion": "En diluant la solution 20 fois, la fraction de molécules ionisées est passée de 12,6 % à près de 80 %, illustrant parfaitement la loi de dilution d'Ostwald."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Effet de la dilution sur le pH et sur le coefficient d'ionisation α (Acide éthanoïque)",
        "tableData": {
          "headers": [
            "Solution",
            "Concentration apportée Ca",
            "pH mesuré à 25 °C",
            "[H3O+] (mol/L)",
            "Coefficient d'ionisation α"
          ],
          "rows": [
            [
              "Solution mère S1",
              "1,0 × 10⁻² mol/L (C)",
              "3,4",
              "3,98 × 10⁻⁴ mol/L",
              "4,0 % (4 molécules sur 100 dissociées)"
            ],
            [
              "Dilution 100 fois S2",
              "1,0 × 10⁻⁴ mol/L (C/100)",
              "4,4",
              "3,98 × 10⁻⁵ mol/L",
              "40 % (40 molécules sur 100 dissociées)"
            ],
            [
              "Dilution infinie S∞",
              "Ca -> 0",
              "Tend vers 7,0",
              "Tend vers 10⁻⁷ mol/L",
              "Tend vers 100 % (ionisation totale)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du coefficient d'ionisation α",
          "stepTheme": "Coefficient d'ionisation",
          "stepBadge": "Définition",
          "paragraphText": "Le coefficient de dissociation (ou d'ionisation) α d'un acide faible est le quotient de la concentration en molécules dissociées [A-] par la concentration totale apportée Ca : α = [A-] / Ca ≈ [H3O+] / Ca = 10^(-pH) / Ca.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p03_q1",
            "type": "mcq",
            "prompt": "Une solution aqueuse d'acide benzoïque à Ca = 2,0×10⁻² mol/L a un pH de 3,1 (soit [H3O+] = 8,0×10⁻⁴ mol/L). Quelle est la valeur de son coefficient d'ionisation α ?",
            "options": [
              "α = 0,04 soit 4,0 %",
              "α = 0,40 soit 40 %",
              "α = 0,004 soit 0,4 %",
              "α = 1,00 soit 100 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "α = [H3O+] / Ca = (8,0×10⁻⁴ mol/L) / (2,0×10⁻² mol/L) = 0,04, soit 4,0 %."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Différence de valeur de α entre acide fort et acide faible",
          "stepTheme": "Force comparée",
          "stepBadge": "Valeurs de α",
          "paragraphText": "Pour un acide fort totalement dissocié, α = 1 (ou 100 %). Pour un acide faible, α est strictement compris entre 0 et 1 (0 < α < 1). Plus α est proche de 1 à une concentration donnée, plus l'acide est dissocié.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p03_q2",
            "type": "mcq",
            "prompt": "On étudie deux solutions d'acides de même concentration Ca = 10⁻² mol/L : l'acide A1 a α = 0,999 et l'acide A2 a α = 0,015. Que conclut-on ?",
            "options": [
              "A1 est un acide fort (dissociation quasi totale) et A2 est un acide faible (très peu dissocié).",
              "A2 est plus fort que A1.",
              "Les deux acides sont des acides faibles identiques.",
              "A1 est une base."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un coefficient d'ionisation proche de 1 (99,9 %) caractérise un acide fort, tandis qu'un coefficient de 0,015 (1,5 %) démontre que l'acide est faible."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Énoncé de la loi de dilution d'Ostwald",
          "stepTheme": "Loi d'Ostwald",
          "stepBadge": "Effet de la dilution",
          "paragraphText": "La loi de dilution d'Ostwald stipule que le coefficient d'ionisation α d'un électrolyte faible augmente lorsque la concentration de la solution diminue par ajout de solvant (dilution).",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p03_q3",
            "type": "mcq",
            "prompt": "Lorsqu'on ajoute 90 mL d'eau distillée à 10 mL d'une solution d'acide éthanoïque à 10⁻² mol/L, comment évolue son coefficient d'ionisation α ?",
            "options": [
              "Il augmente",
              "Il diminue",
              "Il reste rigoureusement constant",
              "Il tombe à zéro"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D'après la loi de dilution d'Ostwald, toute dilution favorise la dissociation de l'électrolyte faible : le coefficient d'ionisation α augmente."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Interprétation thermodynamique : modération de Le Chatelier",
          "stepTheme": "Le Chatelier",
          "stepBadge": "Déplacement d'équilibre",
          "paragraphText": "Dans l'équilibre AH + H2O <=> A- + H3O+, l'ajout d'eau (solvant) augmente le volume et diminue les concentrations ioniques. Selon le principe de Le Chatelier, le système s'oppose à cette dilution en se déplaçant dans le sens direct qui produit davantage d'ions (sens 1 vers la droite), augmentant ainsi α.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p03_q4",
            "type": "mcq",
            "prompt": "Pourquoi la dilution déplace-t-elle l'équilibre AH + H2O <=> A- + H3O+ vers la droite ?",
            "options": [
              "Parce que le système réagit pour compenser la baisse de concentration en formant un plus grand nombre de particules ioniques dans le volume accru.",
              "Parce que l'eau détruit la liaison C-C de l'acide.",
              "Parce que la constante Ka augmente avec la dilution.",
              "Parce que le récipient refroidit instantanément."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ka étant une constante thermodynamique invariante à température fixée (Ka = [A-][H3O+]/[AH]), la diminution de la concentration globale impose une augmentation de la fraction dissociée α pour maintenir le quotient réactionnel égal à Ka."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le comportement limite à dilution infinie",
          "stepTheme": "Dilution infinie",
          "stepBadge": "Limite α -> 1",
          "paragraphText": "À la limite mathématique d'une dilution infinie (Ca -> 0), le coefficient de dissociation α tend vers 1 (100 %). L'acide faible se comporte alors asymptotiquement comme un acide entièrement ionisé.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p03_q5",
            "type": "mcq",
            "prompt": "Vers quelle valeur limite tend le coefficient d'ionisation α d'un acide faible lorsque la concentration molaire Ca tend vers 0 (dilution infinie) ?",
            "options": [
              "α tend vers 1 (100 % d'ionisation)",
              "α tend vers 0",
              "α tend vers 0,5",
              "α tend vers l'infini"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D'après la relation d'Ostwald Ka = α²·Ca / (1 - α), lorsque Ca tend vers zéro avec Ka constant non nul, le dénominateur (1 - α) doit tendre vers zéro, ce qui signifie que α tend vers 1."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Paradoxe apparent : évolution conjointe de [H3O+] et de α",
          "stepTheme": "Analyse comparée",
          "stepBadge": "Attention au piège",
          "paragraphText": "Il ne faut pas confondre la concentration absolue en ions [H3O+] et la proportion relative de dissociation α : lors d'une dilution, [H3O+] diminue (le pH augmente), mais la fraction dissociée α = [H3O+]/Ca augmente car Ca diminue beaucoup plus vite que [H3O+].",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p03_q6",
            "type": "mcq",
            "prompt": "Lorsqu'on dilue un acide faible, comment évoluent respectivement la concentration en ions oxonium [H3O+] et le coefficient d'ionisation α ?",
            "options": [
              "[H3O+] diminue (le pH augmente) et α augmente",
              "[H3O+] augmente et α diminue",
              "[H3O+] et α augmentent tous les deux",
              "[H3O+] et α diminuent tous les deux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'ajout d'eau augmente le volume total, donc la concentration molaire en ions [H3O+] diminue (le milieu devient moins acide, le pH monte). Mais le pourcentage de molécules dissociées α augmente conformément à la loi d'Ostwald."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Synthèse : la formule d'Ostwald Ka = α²·Ca / (1 - α)",
          "stepTheme": "Formule d'Ostwald",
          "stepBadge": "Lien Ka et alpha",
          "paragraphText": "En remplaçant [A-] = α·Ca et [AH] = Ca·(1 - α) dans l'expression de la constante d'acidité Ka, on établit l'expression universelle d'Ostwald : Ka = (α² · Ca) / (1 - α). Si l'acide est très peu dissocié (α < 0,05), on approxime 1 - α ≈ 1, d'où Ka ≈ α² · Ca et α ≈ √(Ka / Ca).",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p03_q7",
            "type": "mcq",
            "prompt": "Un acide faible possède une constante d'acidité Ka = 1,8×10⁻⁵. En utilisant l'approximation d'Ostwald pour acide peu dissocié α ≈ √(Ka / Ca), quelle est la valeur estimée de α pour Ca = 0,20 mol/L ?",
            "options": [
              "α ≈ 9,5×10⁻³ (soit 0,95 %)",
              "α ≈ 0,50 (50 %)",
              "α ≈ 1,8×10⁻⁵",
              "α ≈ 0,095 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "α ≈ √(1,8×10⁻⁵ / 0,20) = √(9,0×10⁻⁵) = 9,48×10⁻³ ≈ 0,95 %. Comme α < 5 %, l'approximation est parfaitement justifiée."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p03_q1",
          "type": "mcq",
          "prompt": "Une solution aqueuse d'acide benzoïque à Ca = 2,0×10⁻² mol/L a un pH de 3,1 (soit [H3O+] = 8,0×10⁻⁴ mol/L). Quelle est la valeur de son coefficient d'ionisation α ?",
          "options": [
            "α = 0,04 soit 4,0 %",
            "α = 0,40 soit 40 %",
            "α = 0,004 soit 0,4 %",
            "α = 1,00 soit 100 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "α = [H3O+] / Ca = (8,0×10⁻⁴ mol/L) / (2,0×10⁻² mol/L) = 0,04, soit 4,0 %."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p03_q2",
          "type": "mcq",
          "prompt": "On étudie deux solutions d'acides de même concentration Ca = 10⁻² mol/L : l'acide A1 a α = 0,999 et l'acide A2 a α = 0,015. Que conclut-on ?",
          "options": [
            "A1 est un acide fort (dissociation quasi totale) et A2 est un acide faible (très peu dissocié).",
            "A2 est plus fort que A1.",
            "Les deux acides sont des acides faibles identiques.",
            "A1 est une base."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un coefficient d'ionisation proche de 1 (99,9 %) caractérise un acide fort, tandis qu'un coefficient de 0,015 (1,5 %) démontre que l'acide est faible."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p03_q3",
          "type": "mcq",
          "prompt": "Lorsqu'on ajoute 90 mL d'eau distillée à 10 mL d'une solution d'acide éthanoïque à 10⁻² mol/L, comment évolue son coefficient d'ionisation α ?",
          "options": [
            "Il augmente",
            "Il diminue",
            "Il reste rigoureusement constant",
            "Il tombe à zéro"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après la loi de dilution d'Ostwald, toute dilution favorise la dissociation de l'électrolyte faible : le coefficient d'ionisation α augmente."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p03_q4",
          "type": "mcq",
          "prompt": "Pourquoi la dilution déplace-t-elle l'équilibre AH + H2O <=> A- + H3O+ vers la droite ?",
          "options": [
            "Parce que le système réagit pour compenser la baisse de concentration en formant un plus grand nombre de particules ioniques dans le volume accru.",
            "Parce que l'eau détruit la liaison C-C de l'acide.",
            "Parce que la constante Ka augmente avec la dilution.",
            "Parce que le récipient refroidit instantanément."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ka étant une constante thermodynamique invariante à température fixée (Ka = [A-][H3O+]/[AH]), la diminution de la concentration globale impose une augmentation de la fraction dissociée α pour maintenir le quotient réactionnel égal à Ka."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p03_q5",
          "type": "mcq",
          "prompt": "Vers quelle valeur limite tend le coefficient d'ionisation α d'un acide faible lorsque la concentration molaire Ca tend vers 0 (dilution infinie) ?",
          "options": [
            "α tend vers 1 (100 % d'ionisation)",
            "α tend vers 0",
            "α tend vers 0,5",
            "α tend vers l'infini"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après la relation d'Ostwald Ka = α²·Ca / (1 - α), lorsque Ca tend vers zéro avec Ka constant non nul, le dénominateur (1 - α) doit tendre vers zéro, ce qui signifie que α tend vers 1."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p03_q6",
          "type": "mcq",
          "prompt": "Lorsqu'on dilue un acide faible, comment évoluent respectivement la concentration en ions oxonium [H3O+] et le coefficient d'ionisation α ?",
          "options": [
            "[H3O+] diminue (le pH augmente) et α augmente",
            "[H3O+] augmente et α diminue",
            "[H3O+] et α augmentent tous les deux",
            "[H3O+] et α diminuent tous les deux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ajout d'eau augmente le volume total, donc la concentration molaire en ions [H3O+] diminue (le milieu devient moins acide, le pH monte). Mais le pourcentage de molécules dissociées α augmente conformément à la loi d'Ostwald."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p03_q7",
          "type": "mcq",
          "prompt": "Un acide faible possède une constante d'acidité Ka = 1,8×10⁻⁵. En utilisant l'approximation d'Ostwald pour acide peu dissocié α ≈ √(Ka / Ca), quelle est la valeur estimée de α pour Ca = 0,20 mol/L ?",
          "options": [
            "α ≈ 9,5×10⁻³ (soit 0,95 %)",
            "α ≈ 0,50 (50 %)",
            "α ≈ 1,8×10⁻⁵",
            "α ≈ 0,095 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "α ≈ √(1,8×10⁻⁵ / 0,20) = √(9,0×10⁻⁵) = 9,48×10⁻³ ≈ 0,95 %. Comme α < 5 %, l'approximation est parfaitement justifiée."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p04",
      "order": 4,
      "title": "Les bases faibles en solution aqueuse : dissolution et bilans",
      "summary": "Définition d'une base faible, critère de reconnaissance pH < 14 + log Cb, dissolution d'un sel d'acide faible (éthanoate de sodium solide CH3COONa), bases moléculaires (ammoniac NH3, éthylamine C2H5NH2), calcul des concentrations et coefficient de dissociation basique α.",
      "conceptExplanation": "1. Définition d'une base faible :\nUne base est dite faible en solution aqueuse si sa réaction avec l'eau est partielle (limitée) : elle capte un proton cédé par l'eau pour former son acide conjugué et des ions hydroxyde OH- selon un équilibre chimique réversible :\nB + H2O <=> BH+ + OH- (ou pour un anion : A- + H2O <=> AH + OH-).\n\n2. Le cas de l'éthanoate de sodium CH3COONa :\nL'éthanoate de sodium est un solide ionique blanc. Sa dissolution dans l'eau est totale et très exothermique :\nCH3COONa(s) -> CH3COO-(aq) + Na+(aq).\nEn solution, l'ion sodium Na+ est un ion spectateur indifférent. En revanche, l'ion éthanoate CH3COO- est la base conjuguée de l'acide éthanoïque : il réagit partiellement avec l'eau selon l'équilibre acido-basique :\nCH3COO- + H2O <=> CH3COOH + OH-.\nLa libération d'ions OH- confère à la solution un caractère nettement basique (pH > 7).\n\n3. Étude quantitative pour Cb = 10^-2 mol/L (pH mesuré = 8,4 à 25 °C) :\n- [H3O+] = 10^(-8,4) = 3,98×10^-9 mol/L.\n- [OH-] = 10^(8,4 - 14) = 2,51×10^-6 mol/L.\n- Électroneutralité : [Na+] + [H3O+] = [CH3COO-] + [OH-]. Comme [H3O+] << [OH-] et [OH-] << [Na+], on a : [CH3COO-] ≈ [Na+] = Cb = 10^-2 mol/L.\n- Conservation de la matière : Cb = [CH3COO-] + [CH3COOH]. En combinant avec la LEN : [CH3COOH] = [OH-] - [H3O+] ≈ [OH-] = 2,51×10^-6 mol/L.\n- Coefficient de dissociation : α = [CH3COOH]/Cb = (2,51×10^-6) / 10^-2 = 2,51×10^-4 = 0,025 % (sur 100 000 ions éthanoates, seulement 25 réagissent avec l'eau !).\n\n4. Critère de reconnaissance d'une base faible :\nPour une base forte monoacide à Cb <= 0,1 mol/L : pH = 14 + log Cb.\nPour une base faible : comme [OH-] < Cb, le pH mesuré est STRICTEMENT INFÉRIEUR à 14 + log Cb : pH < 14 + log Cb.",
      "keyRule": "Base faible = réaction partielle avec l'eau. Critère immédiat : pH mesuré < 14 + log Cb. Pour un sel comme CH3COONa : dissolution totale du solide, puis réaction partielle basique de l'anion.",
      "formulas": [
        {
          "name": "Équilibre d'une base faible dans l'eau",
          "formula": "\\mathrm{B} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{BH^+} + \\mathrm{OH^-}",
          "note": "Production partielle d'ions hydroxyde OH-"
        },
        {
          "name": "Critère de base faible",
          "formula": "\\mathrm{pH} < 14 + \\log(C_b) \\iff [\\mathrm{OH^-}] < C_b",
          "note": "À 25 °C pour Cb <= 0,1 mol/L"
        }
      ],
      "workedExample": {
        "title": "Démonstration du caractère faible de l'éthylamine",
        "statement": "On dispose d'une solution d'éthylamine C2H5NH2 de concentration Cb = 1,0×10⁻² mol/L dont le pH mesuré à 25 °C vaut 11,3. Démontre que l'éthylamine est une base faible, calcule son coefficient d'ionisation α et écris l'équation d'ionisation.",
        "methodSteps": [
          "Étape 1 : Calculer le pH théorique si la base était forte : pH_forte = 14 + log(Cb) = 14 + log(10⁻²) = 14 - 2 = 12,0.",
          "Étape 2 : Comparer avec le pH mesuré : pH (11,3) < 12,0 (pH < 14 + log Cb). La base ne produit pas la totalité de ses ions OH- théoriques : c'est une base faible.",
          "Étape 3 : Calculer [OH-] : [OH-] = 10^(pH - 14) = 10^(11,3 - 14) = 10^(-2,7) ≈ 2,0×10⁻³ mol/L.",
          "Étape 4 : Calculer le coefficient d'ionisation : α = [OH-] / Cb = (2,0×10⁻³ mol/L) / (1,0×10⁻² mol/L) = 0,20 = 20 %.",
          "Étape 5 : Écrire l'équation d'ionisation : C2H5NH2 + H2O <=> C2H5NH3+ + OH-."
        ],
        "conclusion": "L'éthylamine est une base faible avec un taux de dissociation de 20 % à cette concentration."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Comparaison : Base forte (NaOH) versus Base faible (NH3 ou CH3COONa)",
        "tableData": {
          "headers": [
            "Critère comparatif",
            "Base forte (NaOH, C = 0,01 mol/L)",
            "Base faible (NH3 ou C2H5NH2, C = 0,01 mol/L)"
          ],
          "rows": [
            [
              "Type de réaction avec l'eau",
              "Dissociation totale irréversible (->)",
              "Équilibre acido-basique partiel (<=>)"
            ],
            [
              "Concentration en ions hydroxyde",
              "[OH-] = Cb = 10⁻² mol/L",
              "[OH-] << Cb (typiquement 10⁻⁴ à 10⁻³ mol/L)"
            ],
            [
              "Valeur du pH à 25 °C",
              "pH = 14 + log Cb = 12,0",
              "pH mesuré < 14 + log Cb (ex : pH = 10,6 ou 11,3)"
            ],
            [
              "Espèce dominante en solution",
              "Ions Na+ et OH- séparés",
              "Molécules neutres de base non protonée B (80 à 99 %)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d'une base faible selon Brönsted",
          "stepTheme": "Définition base faible",
          "stepBadge": "Accepteur partiel",
          "paragraphText": "Selon Brönsted, une base est une espèce capable de capter un proton. Elle est dite faible si sa réaction de captation d'un proton cédé par l'eau est partielle et réversible : B + H2O <=> BH+ + OH-.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p04_q1",
            "type": "mcq",
            "prompt": "Quelle est l'équation-bilan traduisant l'action de l'ammoniac gazeux NH3 dissous dans l'eau en tant que base faible ?",
            "options": [
              "NH3 + H2O <=> NH4+ + OH-",
              "NH3 + H2O -> NH4+ + OH-",
              "NH3 + H2O <=> NH2- + H3O+",
              "NH3 -> N3- + 3 H+"
            ],
            "correctAnswerIndex": 0,
            "explanation": "NH3 capte un proton cédé par l'eau selon un équilibre partiel réversible conduisant à l'ion ammonium NH4+ et à l'ion hydroxyde OH- : NH3 + H2O <=> NH4+ + OH-."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le critère d'identification d'une base faible",
          "stepTheme": "Critère de pH",
          "stepBadge": "pH < 14 + log Cb",
          "paragraphText": "Pour une base faible de concentration Cb <= 0,1 mol/L, la concentration en ions hydroxyde formés est inférieure à Cb ([OH-] < Cb). En conséquence, le pH à 25 °C est strictement inférieur à 14 + log Cb : pH < 14 + log Cb.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p04_q2",
            "type": "mcq",
            "prompt": "Une solution de méthylamine CH3NH2 à Cb = 10⁻² mol/L a un pH de 11,3 à 25 °C. Sachant que 14 + log(10⁻²) = 12,0, que peut-on affirmer ?",
            "options": [
              "Comme pH (11,3) < 14 + log Cb (12,0), la méthylamine est une base faible.",
              "Comme pH > 7, la méthylamine est obligatoirement une base forte.",
              "La solution est acide car le pH est inférieur à 12.",
              "La méthylamine est un amphion."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le critère discriminant d'une base faible est pH < 14 + log Cb. Le fait d'avoir un pH inférieur à la valeur théorique de dissociation totale prouve que la base est faible."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Dissolution de l'éthanoate de sodium solide CH3COONa",
          "stepTheme": "Sels basiques",
          "stepBadge": "Dissolution puis réaction",
          "paragraphText": "La dissolution de l'éthanoate de sodium solide dans l'eau est totale et dissociative : CH3COONa(s) -> CH3COO- + Na+. Ensuite, l'ion éthanoate réagit partiellement avec l'eau comme base faible : CH3COO- + H2O <=> CH3COOH + OH-.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p04_q3",
            "type": "mcq",
            "prompt": "Pourquoi la dissolution de cristaux d'éthanoate de sodium CH3COONa dans de l'eau pure donne-t-elle une solution aqueuse de pH basique (pH ≈ 8,4) ?",
            "options": [
              "Parce que les ions éthanoates CH3COO- libérés réagissent partiellement avec l'eau en captant un proton, ce qui libère des ions hydroxyde OH- responsables de la basicité.",
              "Parce que le sodium Na+ est un acide fort.",
              "Parce que l'eau distillée devient acide au contact du sel.",
              "Parce que le sel s'évapore en dégageant un gaz alcalin."
            ],
            "correctAnswerIndex": 0,
            "explanation": "CH3COO- est la base conjuguée de l'acide éthanoïque. En solution, il capte un proton de la molécule d'eau pour former des traces de CH3COOH et un excès d'ions OH- ([OH-] > 10⁻⁷ mol/L), conférant un pH supérieur à 7."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calcul du coefficient de dissociation basique",
          "stepTheme": "Coefficient basique",
          "stepBadge": "Calcul de alpha",
          "paragraphText": "Pour une base faible B de concentration apportée Cb produisant des ions OH- par équilibre avec l'eau, le coefficient d'ionisation s'exprime par : α = [BH+] / Cb ≈ [OH-] / Cb = 10^(pH - 14) / Cb.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p04_q4",
            "type": "mcq",
            "prompt": "Une solution aqueuse d'ammoniac NH3 à Cb = 4,0×10⁻² mol/L a un pH de 10,9 à 25 °C (soit [OH-] ≈ 7,94×10⁻⁴ mol/L). Quelle est la valeur de son coefficient d'ionisation α ?",
            "options": [
              "α ≈ 0,020 soit environ 2,0 %",
              "α = 0,20 soit 20 %",
              "α = 0,50",
              "α = 1,00"
            ],
            "correctAnswerIndex": 0,
            "explanation": "α = [OH-] / Cb = (7,94×10⁻⁴ mol/L) / (4,0×10⁻² mol/L) ≈ 0,01985 ≈ 2,0 %."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Rôle de l'eau : acide dans l'ionisation des bases faibles",
          "stepTheme": "Rôle du solvant",
          "stepBadge": "Eau acide",
          "paragraphText": "Lorsqu'une base faible réagit avec l'eau, la molécule d'eau agit comme un acide de Brønsted en cédant un proton H+ à la base : H2O -> OH- + H+. L'eau manifeste ici son rôle d'acide du couple H2O / OH-.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p04_q5",
            "type": "mcq",
            "prompt": "Dans la réaction de l'ion méthylammonium CH3NH3+ avec l'eau (CH3NH3+ + H2O <=> CH3NH2 + H3O+), quel est le rôle joué par l'eau ?",
            "options": [
              "L'eau joue le rôle d'une base en captant un proton cédé par l'ion méthylammonium.",
              "L'eau joue le rôle d'un acide fort.",
              "L'eau joue le rôle d'un oxydant.",
              "L'eau ne participe pas à la réaction."
            ],
            "correctAnswerIndex": 0,
            "explanation": "CH3NH3+ cède un proton H+ : c'est un acide. L'eau capte ce proton pour former H3O+ : elle se comporte donc comme une base (couple H3O+ / H2O)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Préparation d'une solution de sel d'acide faible : pesée et dissolution",
          "stepTheme": "Protocole de TP",
          "stepBadge": "Préparation de solution",
          "paragraphText": "Pour préparer un volume V d'une solution aqueuse de sel (comme le chlorure d'ammonium NH4Cl de masse molaire M = 53,5 g/mol) à la concentration C1 : on pèse la masse m = C1 · V · M à la balance de précision, on dissout dans une fiole jaugée avec de l'eau distillée et on homogénéise.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p04_q6",
            "type": "mcq",
            "prompt": "Quelle masse m de chlorure d'ammonium NH4Cl solide (M = 53,5 g/mol) doit-on peser pour préparer 1,00 L d'une solution aqueuse à C1 = 5,0×10⁻² mol/L ?",
            "options": [
              "2,675 g (environ 2,7 g)",
              "53,5 g",
              "5,35 g",
              "0,27 g"
            ],
            "correctAnswerIndex": 0,
            "explanation": "m = C1 · V · M = (5,0×10⁻² mol/L) × (1,00 L) × (53,5 g/mol) = 2,675 g."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Synthèse : symétrie conceptuelle entre acides et bases faibles",
          "stepTheme": "Bilan global",
          "stepBadge": "Symétrie acide/base",
          "paragraphText": "Acides faibles et bases faibles obéissent à une symétrie parfaite : tous deux réagissent partiellement avec l'eau sous forme d'un équilibre dynamique réversible, tous deux voient leur coefficient d'ionisation α croître lors d'une dilution, et tous deux conservent en solution une écrasante majorité de molécules non dissociées.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p04_q7",
            "type": "mcq",
            "prompt": "Quelle propriété commune partagent obligatoirement un acide faible et une base faible en solution aqueuse ?",
            "options": [
              "Leur réaction avec l'eau est partielle et réversible, et leur coefficient d'ionisation α augmente avec la dilution.",
              "Leur pH est toujours égal à 7,0.",
              "Ils ne conduisent absolument aucun courant électrique.",
              "Ils sont tous les deux gazeux à 25 °C."
            ],
            "correctAnswerIndex": 0,
            "explanation": "La nature d'électrolyte faible impose une dissociation limitée réversible gouvernée par la constante d'équilibre, avec une augmentation systématique du taux de dissociation sous l'effet de la dilution (loi d'Ostwald)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p04_q1",
          "type": "mcq",
          "prompt": "Quelle est l'équation-bilan traduisant l'action de l'ammoniac gazeux NH3 dissous dans l'eau en tant que base faible ?",
          "options": [
            "NH3 + H2O <=> NH4+ + OH-",
            "NH3 + H2O -> NH4+ + OH-",
            "NH3 + H2O <=> NH2- + H3O+",
            "NH3 -> N3- + 3 H+"
          ],
          "correctAnswerIndex": 0,
          "explanation": "NH3 capte un proton cédé par l'eau selon un équilibre partiel réversible conduisant à l'ion ammonium NH4+ et à l'ion hydroxyde OH- : NH3 + H2O <=> NH4+ + OH-."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p04_q2",
          "type": "mcq",
          "prompt": "Une solution de méthylamine CH3NH2 à Cb = 10⁻² mol/L a un pH de 11,3 à 25 °C. Sachant que 14 + log(10⁻²) = 12,0, que peut-on affirmer ?",
          "options": [
            "Comme pH (11,3) < 14 + log Cb (12,0), la méthylamine est une base faible.",
            "Comme pH > 7, la méthylamine est obligatoirement une base forte.",
            "La solution est acide car le pH est inférieur à 12.",
            "La méthylamine est un amphion."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le critère discriminant d'une base faible est pH < 14 + log Cb. Le fait d'avoir un pH inférieur à la valeur théorique de dissociation totale prouve que la base est faible."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p04_q3",
          "type": "mcq",
          "prompt": "Pourquoi la dissolution de cristaux d'éthanoate de sodium CH3COONa dans de l'eau pure donne-t-elle une solution aqueuse de pH basique (pH ≈ 8,4) ?",
          "options": [
            "Parce que les ions éthanoates CH3COO- libérés réagissent partiellement avec l'eau en captant un proton, ce qui libère des ions hydroxyde OH- responsables de la basicité.",
            "Parce que le sodium Na+ est un acide fort.",
            "Parce que l'eau distillée devient acide au contact du sel.",
            "Parce que le sel s'évapore en dégageant un gaz alcalin."
          ],
          "correctAnswerIndex": 0,
          "explanation": "CH3COO- est la base conjuguée de l'acide éthanoïque. En solution, il capte un proton de la molécule d'eau pour former des traces de CH3COOH et un excès d'ions OH- ([OH-] > 10⁻⁷ mol/L), conférant un pH supérieur à 7."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p04_q4",
          "type": "mcq",
          "prompt": "Une solution aqueuse d'ammoniac NH3 à Cb = 4,0×10⁻² mol/L a un pH de 10,9 à 25 °C (soit [OH-] ≈ 7,94×10⁻⁴ mol/L). Quelle est la valeur de son coefficient d'ionisation α ?",
          "options": [
            "α ≈ 0,020 soit environ 2,0 %",
            "α = 0,20 soit 20 %",
            "α = 0,50",
            "α = 1,00"
          ],
          "correctAnswerIndex": 0,
          "explanation": "α = [OH-] / Cb = (7,94×10⁻⁴ mol/L) / (4,0×10⁻² mol/L) ≈ 0,01985 ≈ 2,0 %."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p04_q5",
          "type": "mcq",
          "prompt": "Dans la réaction de l'ion méthylammonium CH3NH3+ avec l'eau (CH3NH3+ + H2O <=> CH3NH2 + H3O+), quel est le rôle joué par l'eau ?",
          "options": [
            "L'eau joue le rôle d'une base en captant un proton cédé par l'ion méthylammonium.",
            "L'eau joue le rôle d'un acide fort.",
            "L'eau joue le rôle d'un oxydant.",
            "L'eau ne participe pas à la réaction."
          ],
          "correctAnswerIndex": 0,
          "explanation": "CH3NH3+ cède un proton H+ : c'est un acide. L'eau capte ce proton pour former H3O+ : elle se comporte donc comme une base (couple H3O+ / H2O)."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p04_q6",
          "type": "mcq",
          "prompt": "Quelle masse m de chlorure d'ammonium NH4Cl solide (M = 53,5 g/mol) doit-on peser pour préparer 1,00 L d'une solution aqueuse à C1 = 5,0×10⁻² mol/L ?",
          "options": [
            "2,675 g (environ 2,7 g)",
            "53,5 g",
            "5,35 g",
            "0,27 g"
          ],
          "correctAnswerIndex": 0,
          "explanation": "m = C1 · V · M = (5,0×10⁻² mol/L) × (1,00 L) × (53,5 g/mol) = 2,675 g."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p04_q7",
          "type": "mcq",
          "prompt": "Quelle propriété commune partagent obligatoirement un acide faible et une base faible en solution aqueuse ?",
          "options": [
            "Leur réaction avec l'eau est partielle et réversible, et leur coefficient d'ionisation α augmente avec la dilution.",
            "Leur pH est toujours égal à 7,0.",
            "Ils ne conduisent absolument aucun courant électrique.",
            "Ils sont tous les deux gazeux à 25 °C."
          ],
          "correctAnswerIndex": 0,
          "explanation": "La nature d'électrolyte faible impose une dissociation limitée réversible gouvernée par la constante d'équilibre, avec une augmentation systématique du taux de dissociation sous l'effet de la dilution (loi d'Ostwald)."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p05",
      "order": 5,
      "title": "L'équilibre chimique acido-basique : réversibilité et dynamique",
      "summary": "Définition thermodynamique et cinétique de l'équilibre chimique, deux réactions inverses simultanées de vitesses égales, caractère dynamique permanent au niveau microscopique et invariance macroscopique des concentrations.",
      "conceptExplanation": "1. Les deux réactions inverses simultanées :\nDans toute solution aqueuse d'acide faible (par exemple l'acide éthanoïque CH3COOH), deux processus chimiques se produisent simultanément à tout instant :\n- Sens direct (sens 1) : CH3COOH + H2O -> CH3COO- + H3O+ (vitesse v1).\n- Sens indirect ou inverse (sens 2) : CH3COO- + H3O+ -> CH3COOH + H2O (vitesse v2).\n\n2. Établissement de l'état d'équilibre chimique :\nAu moment initial de la dissolution, la vitesse directe v1 est maximale (concentration en CH3COOH élevée) alors que la vitesse inverse v2 est nulle (pas encore d'ions CH3COO- ni H3O+ formés). Au fur et à mesure que les ions se forment, la vitesse v2 augmente tandis que v1 diminue.\nTrès rapidement, les deux vitesses s'égalisent rigoureusement : v1 = v2.\nÀ partir de cet instant, il se forme par seconde exactement autant d'ions CH3COO- et H3O+ qu'il en disparaît par recombinaison inverse.\n\n3. Les deux visages de l'équilibre acido-basique :\n- À l'échelle macroscopique (visible) : le système semble figé : la couleur, le pH, la conductivité et les concentrations de toutes les espèces restent strictement constantes au cours du temps.\n- À l'échelle microscopique (moléculaire) : la réaction ne s'est JAMAIS arrêtée ! Le transfert de protons continue de s'effectuer en permanence dans les deux sens à des cadences vertigineuses (millions de transferts par seconde) : c'est un équilibre DYNAMIQUE.",
      "keyRule": "L'état d'équilibre chimique acido-basique est dynamique : les deux réactions inverses se déroulent sans arrêt à des vitesses rigoureusement égales (v1 = v2), maintenant toutes les concentrations macroscopiques invariantes.",
      "formulas": [
        {
          "name": "Égalité des vitesses à l'équilibre",
          "formula": "v_{\\text{direct}} = v_{\\text{inverse}} \\iff \\frac{\\mathrm{d}[\\mathrm{AH}]}{\\mathrm{d}t} = 0",
          "note": "Stabilité macroscopique résultant d'un équilibre dynamique microscopique"
        }
      ],
      "workedExample": {
        "title": "Démonstration du caractère dynamique par traçage isotopique",
        "statement": "On ajoute à une solution d'acide éthanoïque à l'équilibre chimique une infime quantité d'eau marquée à l'oxygène 18 (H2¹⁸O). Après quelques minutes, on constate que l'oxygène 18 s'est incorporé dans les molécules d'acide acétique CH3CO¹⁸OH. Que prouve cette expérience ?",
        "methodSteps": [
          "Étape 1 : Si la réaction s'était définitivement arrêtée à l'équilibre, aucune nouvelle molécule d'acide éthanoïque ne serait synthétisée : l'oxygène lourd ¹⁸O resterait confiné exclusivement dans les molécules d'eau.",
          "Étape 2 : La présence de ¹⁸O dans le groupe carboxyle de CH3COOH prouve que la réaction inverse CH3COO- + H3¹⁸O+ -> CH3CO¹⁸OH + H2O se déroule effectivement et continuellement dans la solution.",
          "Étape 3 : Conclure sur la nature de l'équilibre."
        ],
        "conclusion": "L'expérience prouve que l'équilibre chimique n'est pas un arrêt statique, mais un processus dynamique perpétuel où les liaisons se font et se défont en permanence à vitesses égales."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Évolution cinétique vers l'état d'équilibre chimique acido-basique",
        "tableData": {
          "headers": [
            "Stade temporel",
            "Vitesse directe v1 (AH -> A-)",
            "Vitesse inverse v2 (A- -> AH)",
            "État macroscopique du système"
          ],
          "rows": [
            [
              "État initial (t = 0)",
              "Maximale (seul AH est présent)",
              "Nulle (aucun A- présent)",
              "Variation brutale du pH"
            ],
            [
              "Phase transitoire",
              "Diminue progressivement",
              "Augmente progressivement",
              "Le pH se stabilise vers sa valeur finale"
            ],
            [
              "État d'équilibre final",
              "Rigoureusement égale à v2 (v1 = v2)",
              "Rigoureusement égale à v1",
              "Stabilité absolue du pH et des concentrations"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de l'équilibre chimique acido-basique",
          "stepTheme": "Équilibre chimique",
          "stepBadge": "Définition",
          "paragraphText": "Un système chimique acido-basique est à l'état d'équilibre lorsque les concentrations de toutes les espèces chimiques présentes en solution restent invariables au cours du temps à température constante, en l'absence de tout échange avec l'extérieur.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p05_q1",
            "type": "mcq",
            "prompt": "Quel signe graphique utilise-t-on obligatoirement pour signifier qu'une réaction chimique acido-basique aboutit à un état d'équilibre réversible ?",
            "options": [
              "La double flèche opposée <=>",
              "Une flèche simple orientée vers la droite ->",
              "Le signe égal mathématique =",
              "Une croix"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La double flèche <=> (ou deux demi-flèches superposées de sens opposés) symbolise la coexistence simultanée de la réaction directe et de la réaction inverse à l'équilibre."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le caractère dynamique de l'équilibre chimique",
          "stepTheme": "Dynamique microscopique",
          "stepBadge": "v1 = v2",
          "paragraphText": "L'équilibre n'est pas un état de repos moléculaire : les transferts de protons continuent d'avoir lieu sans discontinuer dans les deux sens. L'invariance macroscopique résulte de l'égalité exacte entre la vitesse de dissociation v1 et la vitesse de recombinaison v2 : v1 = v2.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p05_q2",
            "type": "mcq",
            "prompt": "À l'état d'équilibre d'une solution d'acide éthanoïque dans l'eau, que peut-on affirmer concernant les réactions chimiques à l'échelle moléculaire ?",
            "options": [
              "La réaction d'ionisation et la réaction de recombinaison continuent de s'effectuer à la même vitesse (équilibre dynamique).",
              "Toutes les réactions chimiques sont définitivement arrêtées et figées.",
              "Seule la réaction de dissociation continue d'avancer.",
              "Les molécules se transforment spontanément en atomes isolés."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un équilibre chimique est fondamentalement dynamique : à chaque seconde, autant de molécules d'acide s'ionisent qu'il s'en reforme par collision entre les ions A- et H3O+."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Rupture et déplacement de l'équilibre (Principe de Le Chatelier)",
          "stepTheme": "Déplacement d'équilibre",
          "stepBadge": "Principe de modération",
          "paragraphText": "Si l'on perturbe l'état d'équilibre d'un acide faible (par exemple en ajoutant des ions éthanoates CH3COO- sous forme de sel solide), le système réagit conformément au principe de Le Chatelier pour consommer l'espèce ajoutée : l'équilibre se déplace dans le sens inverse (vers la gauche), ce qui consomme des ions H3O+ et fait augmenter le pH.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p05_q3",
            "type": "mcq",
            "prompt": "On ajoute quelques cristaux d'éthanoate de sodium CH3COONa pur dans une solution d'acide éthanoïque à l'équilibre CH3COOH + H2O <=> CH3COO- + H3O+. Quel est l'effet immédiat sur le pH de la solution ?",
            "options": [
              "Le pH augmente (la solution devient moins acide)",
              "Le pH diminue (la solution devient plus acide)",
              "Le pH reste rigoureusement inchangé",
              "Le pH tombe à 0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'apport d'ions éthanoates CH3COO- déplace l'équilibre dans le sens inverse (formation de CH3COOH et consommation d'ions H3O+). La concentration en ions oxonium diminue, ce qui fait monter le pH."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Effet d'un acide fort sur l'équilibre d'un acide faible (Recul d'ionisation)",
          "stepTheme": "Effet d'ion commun",
          "stepBadge": "Recul d'ionisation",
          "paragraphText": "Si l'on ajoute quelques gouttes d'acide chlorhydrique concentré (HCl) dans une solution d'acide éthanoïque, l'apport massif d'ions H3O+ déplace l'équilibre de l'acide faible vers la gauche : l'ionisation de l'acide éthanoïque est fortement réprimée (effet d'ion commun).",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p05_q4",
            "type": "mcq",
            "prompt": "Comment appelle-t-on le phénomène par lequel l'introduction d'un acide fort dans une solution d'acide faible fait reculer la dissociation de ce dernier ?",
            "options": [
              "L'effet d'ion commun (recul d'ionisation)",
              "L'effet photoélectrique",
              "La saponification",
              "La résonance magnétique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'apport externe d'ions H3O+ communs à l'équilibre force les anions A- à se recombiner avec eux pour rétablir la valeur de la constante d'acidité, diminuant encore la fraction ionisée de l'acide faible : c'est l'effet d'ion commun."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Invariance de la constante d'équilibre à température fixée",
          "stepTheme": "Constante thermodynamique",
          "stepBadge": "Invariance de K",
          "paragraphText": "Quelle que soit la perturbation apportée au système (dilution, ajout d'acide, ajout d'anion conjugué), les concentrations se réajustent spontanément de manière à ce que le quotient de réaction final Q_r,eq soit rigoureusement égal à la constante d'acidité Ka à la température considérée.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p05_q5",
            "type": "mcq",
            "prompt": "Si l'on double la concentration initiale en acide éthanoïque d'une solution à 25 °C, que devient sa constante d'acidité Ka ?",
            "options": [
              "Elle reste rigoureusement inchangée car Ka ne dépend que de la température",
              "Elle double",
              "Elle est divisée par deux",
              "Elle devient nulle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La constante d'équilibre Ka est une grandeur thermodynamique qui ne dépend absolument pas des concentrations initiales ou des mélanges, mais exclusivement de la température."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Application pratique : l'action antalgique de l'aspirine et son équilibre acido-basique",
          "stepTheme": "Pharmacologie",
          "stepBadge": "Absorption gastrique",
          "paragraphText": "L'aspirine (acide acétylsalicylique AH, pKa = 3,5) est un acide faible. Dans l'estomac très acide (pH ≈ 1,5 < pKa), elle existe à plus de 99 % sous sa forme moléculaire neutre liposoluble AH, ce qui lui permet de traverser aisément la membrane lipidique de la paroi stomacale pour passer dans le sang.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p05_q6",
            "type": "mcq",
            "prompt": "Pourquoi l'aspirine (acide faible de pKa = 3,5) est-elle rapidement absorbée au niveau de la muqueuse de l'estomac où le pH est d'environ 1,5 ?",
            "options": [
              "Parce qu'à pH = 1,5 (pH < pKa), l'aspirine est majoritairement sous forme moléculaire neutre AH non ionisée et hautement liposoluble, facilitant sa diffusion à travers les membranes cellulaires.",
              "Parce qu'elle est sous forme d'anion très soluble dans l'eau.",
              "Parce que le suc gastrique détruit la molécule.",
              "Parce que le pKa de l'estomac est basique."
            ],
            "correctAnswerIndex": 0,
            "explanation": "À pH < pKa, la forme acide non chargée AH domine largement (> 99 %). Étant électriquement neutre, elle franchit avec grande facilité les bicouches phospholipidiques hydrophobes des parois de l'estomac."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Synthèse générale de la leçon : la maîtrise des électrolytes faibles",
          "stepTheme": "Synthèse finale",
          "stepBadge": "Maîtrise complète",
          "paragraphText": "Les acides et bases faibles incarnent la chimie des équilibres réversibles : ionisation incomplète, sensibilité à la dilution (Ostwald), bilans d'électroneutralité et de masse, et flexibilité d'intervention dans les systèmes vivants et industriels.",
          "exercise": {
            "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p05_q7",
            "type": "mcq",
            "prompt": "Quelle suite d'affirmations résume avec exactitude le comportement d'un acide faible en solution aqueuse ?",
            "options": [
              "Réaction partielle avec l'eau ; pH mesuré > -log Ca ; l'espèce dominante est la molécule d'acide non dissociée ; son coefficient d'ionisation α augmente avec la dilution.",
              "Réaction totale ; pH = -log Ca ; toutes les molécules sont dissociées ; α reste égal à 1.",
              "Réaction impossible ; aucun ion n'est produit ; le pH reste à 7.",
              "Réaction instantanée explosive produisant du dihydrogène pur."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Cette synthèse regroupe les 4 propriétés maîtresses d'un acide faible étudiées tout au long de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p05_q1",
          "type": "mcq",
          "prompt": "Quel signe graphique utilise-t-on obligatoirement pour signifier qu'une réaction chimique acido-basique aboutit à un état d'équilibre réversible ?",
          "options": [
            "La double flèche opposée <=>",
            "Une flèche simple orientée vers la droite ->",
            "Le signe égal mathématique =",
            "Une croix"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La double flèche <=> (ou deux demi-flèches superposées de sens opposés) symbolise la coexistence simultanée de la réaction directe et de la réaction inverse à l'équilibre."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p05_q2",
          "type": "mcq",
          "prompt": "À l'état d'équilibre d'une solution d'acide éthanoïque dans l'eau, que peut-on affirmer concernant les réactions chimiques à l'échelle moléculaire ?",
          "options": [
            "La réaction d'ionisation et la réaction de recombinaison continuent de s'effectuer à la même vitesse (équilibre dynamique).",
            "Toutes les réactions chimiques sont définitivement arrêtées et figées.",
            "Seule la réaction de dissociation continue d'avancer.",
            "Les molécules se transforment spontanément en atomes isolés."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un équilibre chimique est fondamentalement dynamique : à chaque seconde, autant de molécules d'acide s'ionisent qu'il s'en reforme par collision entre les ions A- et H3O+."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p05_q3",
          "type": "mcq",
          "prompt": "On ajoute quelques cristaux d'éthanoate de sodium CH3COONa pur dans une solution d'acide éthanoïque à l'équilibre CH3COOH + H2O <=> CH3COO- + H3O+. Quel est l'effet immédiat sur le pH de la solution ?",
          "options": [
            "Le pH augmente (la solution devient moins acide)",
            "Le pH diminue (la solution devient plus acide)",
            "Le pH reste rigoureusement inchangé",
            "Le pH tombe à 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'apport d'ions éthanoates CH3COO- déplace l'équilibre dans le sens inverse (formation de CH3COOH et consommation d'ions H3O+). La concentration en ions oxonium diminue, ce qui fait monter le pH."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p05_q4",
          "type": "mcq",
          "prompt": "Comment appelle-t-on le phénomène par lequel l'introduction d'un acide fort dans une solution d'acide faible fait reculer la dissociation de ce dernier ?",
          "options": [
            "L'effet d'ion commun (recul d'ionisation)",
            "L'effet photoélectrique",
            "La saponification",
            "La résonance magnétique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'apport externe d'ions H3O+ communs à l'équilibre force les anions A- à se recombiner avec eux pour rétablir la valeur de la constante d'acidité, diminuant encore la fraction ionisée de l'acide faible : c'est l'effet d'ion commun."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p05_q5",
          "type": "mcq",
          "prompt": "Si l'on double la concentration initiale en acide éthanoïque d'une solution à 25 °C, que devient sa constante d'acidité Ka ?",
          "options": [
            "Elle reste rigoureusement inchangée car Ka ne dépend que de la température",
            "Elle double",
            "Elle est divisée par deux",
            "Elle devient nulle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La constante d'équilibre Ka est une grandeur thermodynamique qui ne dépend absolument pas des concentrations initiales ou des mélanges, mais exclusivement de la température."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p05_q6",
          "type": "mcq",
          "prompt": "Pourquoi l'aspirine (acide faible de pKa = 3,5) est-elle rapidement absorbée au niveau de la muqueuse de l'estomac où le pH est d'environ 1,5 ?",
          "options": [
            "Parce qu'à pH = 1,5 (pH < pKa), l'aspirine est majoritairement sous forme moléculaire neutre AH non ionisée et hautement liposoluble, facilitant sa diffusion à travers les membranes cellulaires.",
            "Parce qu'elle est sous forme d'anion très soluble dans l'eau.",
            "Parce que le suc gastrique détruit la molécule.",
            "Parce que le pKa de l'estomac est basique."
          ],
          "correctAnswerIndex": 0,
          "explanation": "À pH < pKa, la forme acide non chargée AH domine largement (> 99 %). Étant électriquement neutre, elle franchit avec grande facilité les bicouches phospholipidiques hydrophobes des parois de l'estomac."
        },
        {
          "id": "terminale_c_chimie_l09_acides_faibles_bases_faibles_p05_q7",
          "type": "mcq",
          "prompt": "Quelle suite d'affirmations résume avec exactitude le comportement d'un acide faible en solution aqueuse ?",
          "options": [
            "Réaction partielle avec l'eau ; pH mesuré > -log Ca ; l'espèce dominante est la molécule d'acide non dissociée ; son coefficient d'ionisation α augmente avec la dilution.",
            "Réaction totale ; pH = -log Ca ; toutes les molécules sont dissociées ; α reste égal à 1.",
            "Réaction impossible ; aucun ion n'est produit ; le pH reste à 7.",
            "Réaction instantanée explosive produisant du dihydrogène pur."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Cette synthèse regroupe les 4 propriétés maîtresses d'un acide faible étudiées tout au long de la leçon."
        }
      ]
    }
  ]
};
