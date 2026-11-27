import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 12 : Les acides α-aminés » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1325
export const CHIMIE_TLE_CD_L12_ACIDES_ALPHA_AMINES: CurriculumChapter = {
  "id": "terminale_c_chimie_l12_acides_alpha_amines",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 12,
  "title": "Leçon 12 : Les acides α-aminés",
  "summary": "On étudie la structure et la nomenclature des acides α-aminés, leurs propriétés acido-basiques (l'amphion), la liaison peptidique, les protéines et la synthèse dirigée des dipeptides.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1325",
  "points": [
    {
      "id": "terminale_c_chimie_l12_acides_alpha_amines_p01",
      "order": 1,
      "title": "Structure et nomenclature des acides α-aminés",
      "summary": "Une fonction acide et une fonction amine sur le même carbone ; glycine, alanine et valine.",
      "conceptExplanation": "Les acides α-aminés sont des composés organiques qui comportent une fonction acide carboxylique et une fonction amine liées au même atome de carbone.\nLeur notation générale est R–CH(NH₂)–CO₂H, où R est appelé le résidu (la chaîne latérale) de l'acide aminé.\nLa nomenclature du résumé retient trois exemples : la glycine (acide 2-aminoéthanoïque, GLY), l'alanine (acide 2-aminopropanoïque, ALA) et la valine (acide 2-amino-3-méthylbutanoïque, VAL).\nLes acides α-aminés sont les constituants des protéines, utilisés pour le fonctionnement et la construction du corps humain.",
      "keyRule": "Acide α-aminé = –CO₂H et –NH₂ sur le même carbone ; formule générale R–CH(NH₂)–CO₂H.",
      "formulas": [
        {
          "name": "Formule générale d'un acide α-aminé",
          "formula": "\\mathrm{NH_2-CH(R)-COOH}",
          "note": "R est le résidu (chaîne latérale) qui identifie l'acide aminé."
        },
        {
          "name": "La glycine (R = H)",
          "formula": "\\mathrm{H_2N-CH_2-COOH}",
          "note": "Acide 2-aminoéthanoïque, abréviation GLY."
        }
      ],
      "workedExample": {
        "title": "Nommer la valine (exercice 5)",
        "statement": "La valine a pour formule semi-développée CH₃–CH(CH₃)–CH(NH₂)–COOH. Donne son nom systématique.",
        "methodSteps": [
          "La chaîne principale compte 4 carbones : c'est un butanoïque.",
          "La fonction amine est sur le carbone 2 (α) et un méthyle sur le carbone 3.",
          "Nom : acide 2-amino-3-méthylbutanoïque."
        ],
        "conclusion": "C'est le nom donné par le corrigé de l'exercice 5 (et par le tableau de nomenclature du résumé)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Deux fonctions sur le même carbone",
          "stepTheme": "Deux fonctions sur le même carbone",
          "stepBadge": "Deux fonctions sur le même carbone",
          "paragraphText": "• Acide α-aminé : composé organique comportant une fonction acide carboxylique et une fonction amine liées au même atome de carbone.\nC'est l'affirmation n° 1 de l'exercice 1, jugée vraie dans le résumé.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p01_q1",
            "type": "mcq",
            "prompt": "Un acide α-aminé possède :",
            "options": [
              "Une fonction acide carboxylique et une fonction amine sur le même carbone",
              "Deux fonctions acides",
              "Une fonction amine et une fonction alcool sur deux carbones différents",
              "Une fonction cétone et une fonction amine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition structurale du résumé : les deux fonctions sont portées par le carbone α."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le résidu R",
          "stepTheme": "Le résidu R",
          "stepBadge": "Le résidu R",
          "paragraphText": "Dans la notation générale R–CH(NH₂)–CO₂H, le groupe R est appelé résidu de l'acide aminé.\nC'est lui qui différencie les acides α-aminés entre eux : R = H pour la glycine, R = CH₃ pour l'alanine.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p01_q2",
            "type": "mcq",
            "prompt": "Dans la formule générale des acides α-aminés, R désigne :",
            "options": [
              "Le groupe carboxyle",
              "Le résidu (chaîne latérale) de l'acide aminé",
              "La fonction amine",
              "Un atome d'hydrogène obligatoire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé nomme R « résidu acide aminé » : c'est la partie variable de la molécule."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La glycine, le plus simple",
          "stepTheme": "La glycine, le plus simple",
          "stepBadge": "La glycine, le plus simple",
          "paragraphText": "La glycine correspond à R = H : sa formule semi-développée est H₂N–CH₂–COOH (exercice 2).\nSon nom systématique est l'acide 2-aminoéthanoïque et son abréviation est GLY.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p01_q3",
            "type": "mcq",
            "prompt": "Le nom systématique de la glycine est :",
            "options": [
              "Acide 2-aminopropanoïque",
              "Acide aminoéthanoïque en position 1",
              "Acide 2-aminoéthanoïque",
              "Acide 2-amino-3-méthylbutanoïque"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la nomenclature du tableau du résumé (et la réponse de l'exercice 2)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'alanine et la valine",
          "stepTheme": "L'alanine et la valine",
          "stepBadge": "L'alanine et la valine",
          "paragraphText": "L'alanine (ALA) est l'acide 2-aminopropanoïque : CH₃–CH(NH₂)–COOH.\nLa valine (VAL) est l'acide 2-amino-3-méthylbutanoïque : sa chaîne est ramifiée, avec un groupe isopropyle sur le carbone α.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p01_q4",
            "type": "mcq",
            "prompt": "L'abréviation ALA et le nom acide 2-aminopropanoïque correspondent à :",
            "options": [
              "La glycine",
              "La valine",
              "Un dipeptide",
              "L'alanine"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la deuxième ligne du tableau de nomenclature du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les constituants des protéines",
          "stepTheme": "Les constituants des protéines",
          "stepBadge": "Les constituants des protéines",
          "paragraphText": "La situation d'apprentissage rappelle que les acides α-aminés sont les constituants des protéines.\nIls sont utilisés pour le fonctionnement du corps humain et sa construction.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p01_q5",
            "type": "mcq",
            "prompt": "Dans les êtres vivants, les acides α-aminés sont les constituants :",
            "options": [
              "Des protéines",
              "Des lipides uniquement",
              "De l'ADN directement",
              "Des glucides"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le rôle biologique mis en avant dans la situation d'apprentissage et la documentation du résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La formule brute de la glycine (exercice 2)",
          "stepTheme": "La formule brute de la glycine (exercice 2)",
          "stepBadge": "La formule brute de la glycine (exercice 2)",
          "paragraphText": "L'exercice 2 donne la formule brute de la glycine : C₂H₅O₂N.\nOn en déduit sa formule semi-développée H₂N–CH₂–COOH, la seule compatible avec un acide α-aminé à deux carbones.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p01_q6",
            "type": "mcq",
            "prompt": "La formule semi-développée de la glycine (C₂H₅O₂N) est :",
            "options": [
              "CH₃–CH(NH₂)–COOH",
              "H₂N–CH₂–COOH",
              "HO–CH₂–CH₂–NH₂",
              "CH₃–CO–NH₂"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la réponse de l'exercice 2 : le carbone α porte NH₂ et COOH, et R = H."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p01_q1",
          "type": "mcq",
          "prompt": "Un acide α-aminé possède :",
          "options": [
            "Une fonction acide carboxylique et une fonction amine sur le même carbone",
            "Deux fonctions acides",
            "Une fonction amine et une fonction alcool sur deux carbones différents",
            "Une fonction cétone et une fonction amine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition structurale du résumé : les deux fonctions sont portées par le carbone α."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p01_q2",
          "type": "mcq",
          "prompt": "Dans la formule générale des acides α-aminés, R désigne :",
          "options": [
            "Le groupe carboxyle",
            "Le résidu (chaîne latérale) de l'acide aminé",
            "La fonction amine",
            "Un atome d'hydrogène obligatoire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé nomme R « résidu acide aminé » : c'est la partie variable de la molécule."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p01_q3",
          "type": "mcq",
          "prompt": "Le nom systématique de la glycine est :",
          "options": [
            "Acide 2-aminopropanoïque",
            "Acide aminoéthanoïque en position 1",
            "Acide 2-aminoéthanoïque",
            "Acide 2-amino-3-méthylbutanoïque"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la nomenclature du tableau du résumé (et la réponse de l'exercice 2)."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p01_q4",
          "type": "mcq",
          "prompt": "L'abréviation ALA et le nom acide 2-aminopropanoïque correspondent à :",
          "options": [
            "La glycine",
            "La valine",
            "Un dipeptide",
            "L'alanine"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la deuxième ligne du tableau de nomenclature du résumé."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p01_q5",
          "type": "mcq",
          "prompt": "Dans les êtres vivants, les acides α-aminés sont les constituants :",
          "options": [
            "Des protéines",
            "Des lipides uniquement",
            "De l'ADN directement",
            "Des glucides"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le rôle biologique mis en avant dans la situation d'apprentissage et la documentation du résumé."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p01_q6",
          "type": "mcq",
          "prompt": "La formule semi-développée de la glycine (C₂H₅O₂N) est :",
          "options": [
            "CH₃–CH(NH₂)–COOH",
            "H₂N–CH₂–COOH",
            "HO–CH₂–CH₂–NH₂",
            "CH₃–CO–NH₂"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la réponse de l'exercice 2 : le carbone α porte NH₂ et COOH, et R = H."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l12_acides_alpha_amines_p02",
      "order": 2,
      "title": "Propriétés acido-basiques : l'amphion ou zwitterion",
      "summary": "À l'état pur, l'acide α-aminé est un ion dipolaire ; cation en milieu acide, anion en milieu basique.",
      "conceptExplanation": "En solution aqueuse, le groupe acide carboxylique (–CO₂H) a tendance à céder un proton H⁺, alors que le groupe amine (–NH₂) a tendance à capter un proton H⁺.\nÀ l'état pur, les acides α-aminés se présentent donc sous la forme d'un ion dipolaire appelé amphion ou zwitterion : R–CH(COO⁻)(NH₃⁺).\nEn milieu acide, l'ion dipolaire se comporte comme une base : il capte un proton H⁺ et la forme prédominante est le cation R–CH(CO₂H)(NH₃⁺).\nEn milieu basique, il se comporte comme un acide : il cède un proton et la forme prédominante est l'anion R–CH(COO⁻)(NH₂).",
      "keyRule": "Zwitterion à l'état pur ; milieu très acide → cation ; milieu très basique → anion.",
      "formulas": [
        {
          "name": "L'amphion (zwitterion)",
          "formula": "\\mathrm{NH_3^+-CH(R)-COO^-}",
          "note": "Ion dipolaire : il porte une charge + et une charge −."
        },
        {
          "name": "La forme cation en milieu acide",
          "formula": "\\mathrm{NH_3^+-CH(R)-COOH}",
          "note": "Obtenue quand l'amphion capte un proton H⁺."
        }
      ],
      "workedExample": {
        "title": "L'amphion de la glycine (exercice 2)",
        "statement": "Écris la formule chimique de l'ion dipolaire correspondant à la glycine.",
        "methodSteps": [
          "Le groupe –COOH cède son proton au groupe –NH₂ de la même molécule.",
          "On obtient ⁺H₃N–CH₂–COO⁻."
        ],
        "conclusion": "C'est la réponse de l'exercice 2 : l'amphion porte NH₃⁺ et COO⁻."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Deux tendances opposées dans la même molécule",
          "stepTheme": "Deux tendances opposées dans la même molécule",
          "stepBadge": "Deux tendances opposées dans la même molécule",
          "paragraphText": "En solution aqueuse, le groupe –CO₂H a tendance à céder un proton H⁺.\nInversement, le groupe –NH₂ a tendance à capter un proton H⁺ : la molécule est à la fois acide et basique.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p02_q1",
            "type": "mcq",
            "prompt": "Dans un acide α-aminé, le groupe amine –NH₂ a tendance à :",
            "options": [
              "Céder un proton H⁺",
              "Capter un proton H⁺",
              "Céder un ion OH⁻",
              "Se transformer en groupe carboxyle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le comportement basique du groupe amine décrit dans le résumé ; le groupe –CO₂H, lui, tend à céder H⁺."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'amphion ou zwitterion",
          "stepTheme": "L'amphion ou zwitterion",
          "stepBadge": "L'amphion ou zwitterion",
          "paragraphText": "• Amphion (ou zwitterion) : ion dipolaire sous lequel se présentent les acides α-aminés à l'état pur.\nIl porte simultanément une charge positive (sur NH₃⁺) et une charge négative (sur COO⁻).",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p02_q2",
            "type": "mcq",
            "prompt": "À l'état pur, un acide α-aminé se présente sous la forme :",
            "options": [
              "D'une molécule neutre sans charges",
              "D'un cation uniquement",
              "D'un ion dipolaire appelé amphion ou zwitterion",
              "D'un anion uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la forme décrite dans le résumé : le transfert interne du proton crée les deux charges."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Dipolaire, pas monopolaire (exercice 1)",
          "stepTheme": "Dipolaire, pas monopolaire (exercice 1)",
          "stepBadge": "Dipolaire, pas monopolaire (exercice 1)",
          "paragraphText": "L'affirmation n° 2 de l'exercice 1 prétend qu'un amphion est un ion monopolaire.\nLa solution la juge fausse : l'amphion porte deux charges opposées, il est dipolaire, et globalement neutre.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p02_q3",
            "type": "mcq",
            "prompt": "L'affirmation « un amphion ou zwitterion est un ion monopolaire » est :",
            "options": [
              "Vraie",
              "Vraie seulement en milieu acide",
              "Vraie seulement pour la glycine",
              "Fausse : l'amphion est un ion dipolaire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le corrigé de l'exercice 1 : le zwitterion porte une charge + et une charge −."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "En milieu acide : la forme cation",
          "stepTheme": "En milieu acide : la forme cation",
          "stepBadge": "En milieu acide : la forme cation",
          "paragraphText": "En milieu acide, l'ion dipolaire se comporte comme une base : il capte un proton H⁺ (sur COO⁻).\nLa forme prédominante est alors le cation R–CH(CO₂H)(NH₃⁺), comme le confirme l'exercice 1 (affirmation 3 vraie).",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p02_q4",
            "type": "mcq",
            "prompt": "En milieu très acide, un acide α-aminé existe essentiellement sous forme :",
            "options": [
              "De cation",
              "D'anion",
              "D'amphion inchangé",
              "De molécule sans azote"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le groupe COO⁻ capte un proton : la molécule ne garde que la charge + de NH₃⁺ (exercice 1)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "En milieu basique : la forme anion",
          "stepTheme": "En milieu basique : la forme anion",
          "stepBadge": "En milieu basique : la forme anion",
          "paragraphText": "En milieu basique, l'ion dipolaire se comporte comme un acide : il cède un proton (celui de NH₃⁺).\nLa forme prédominante est l'anion R–CH(COO⁻)(NH₂), comme le confirme l'exercice 1 (affirmation 4 vraie).",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p02_q5",
            "type": "mcq",
            "prompt": "En milieu très basique, un acide α-aminé existe essentiellement sous forme :",
            "options": [
              "De cation",
              "D'anion",
              "De zwitterion uniquement",
              "De dipeptide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le groupe NH₃⁺ cède son proton : il ne reste que la charge − de COO⁻ (exercice 1)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Un comportement amphotère",
          "stepTheme": "Un comportement amphotère",
          "stepBadge": "Un comportement amphotère",
          "paragraphText": "Grâce à ses deux groupes, l'acide α-aminé réagit avec les acides comme avec les bases.\nEn milieu acide il joue le rôle de base ; en milieu basique, le rôle d'acide.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p02_q6",
            "type": "mcq",
            "prompt": "En milieu acide, l'ion dipolaire d'un acide α-aminé se comporte comme :",
            "options": [
              "Un acide",
              "Un oxydant",
              "Une base, car il capte un proton H⁺",
              "Un indicateur coloré"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le texte du résumé : en milieu acide, l'amphion capte un proton, comportement typique d'une base."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p02_q1",
          "type": "mcq",
          "prompt": "Dans un acide α-aminé, le groupe amine –NH₂ a tendance à :",
          "options": [
            "Céder un proton H⁺",
            "Capter un proton H⁺",
            "Céder un ion OH⁻",
            "Se transformer en groupe carboxyle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le comportement basique du groupe amine décrit dans le résumé ; le groupe –CO₂H, lui, tend à céder H⁺."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p02_q2",
          "type": "mcq",
          "prompt": "À l'état pur, un acide α-aminé se présente sous la forme :",
          "options": [
            "D'une molécule neutre sans charges",
            "D'un cation uniquement",
            "D'un ion dipolaire appelé amphion ou zwitterion",
            "D'un anion uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la forme décrite dans le résumé : le transfert interne du proton crée les deux charges."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p02_q3",
          "type": "mcq",
          "prompt": "L'affirmation « un amphion ou zwitterion est un ion monopolaire » est :",
          "options": [
            "Vraie",
            "Vraie seulement en milieu acide",
            "Vraie seulement pour la glycine",
            "Fausse : l'amphion est un ion dipolaire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le corrigé de l'exercice 1 : le zwitterion porte une charge + et une charge −."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p02_q4",
          "type": "mcq",
          "prompt": "En milieu très acide, un acide α-aminé existe essentiellement sous forme :",
          "options": [
            "De cation",
            "D'anion",
            "D'amphion inchangé",
            "De molécule sans azote"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le groupe COO⁻ capte un proton : la molécule ne garde que la charge + de NH₃⁺ (exercice 1)."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p02_q5",
          "type": "mcq",
          "prompt": "En milieu très basique, un acide α-aminé existe essentiellement sous forme :",
          "options": [
            "De cation",
            "D'anion",
            "De zwitterion uniquement",
            "De dipeptide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le groupe NH₃⁺ cède son proton : il ne reste que la charge − de COO⁻ (exercice 1)."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p02_q6",
          "type": "mcq",
          "prompt": "En milieu acide, l'ion dipolaire d'un acide α-aminé se comporte comme :",
          "options": [
            "Un acide",
            "Un oxydant",
            "Une base, car il capte un proton H⁺",
            "Un indicateur coloré"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le texte du résumé : en milieu acide, l'amphion capte un proton, comportement typique d'une base."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l12_acides_alpha_amines_p03",
      "order": 3,
      "title": "La liaison peptidique et les dipeptides",
      "summary": "Condensation entre –CO₂H et –NH₂ avec perte d'eau ; l'hydrolyse fait le chemin inverse.",
      "conceptExplanation": "La liaison peptidique résulte de la condensation entre le groupe carboxyle (–CO₂H) d'un acide α-aminé et le groupe amine (–NH₂) d'un autre acide α-aminé, avec élimination d'une molécule d'eau.\nLe corps obtenu est appelé un dipeptide ; par exemple, l'alanine et la glycine donnent le dipeptide ALAGLY.\nLe groupe –CO–NH– ainsi formé est appelé liaison peptidique.\nL'hydrolyse est la réaction inverse : l'hydrolyse d'un dipeptide redonne les deux acides α-aminés de départ.",
      "keyRule": "Condensation : –CO₂H + H₂N– → –CO–NH– + H₂O ; hydrolyse : le dipeptide + H₂O redonne les deux acides aminés.",
      "formulas": [
        {
          "name": "La liaison peptidique",
          "formula": "\\mathrm{-CO-NH-}",
          "note": "Groupe formé lors de la condensation de deux acides α-aminés."
        }
      ],
      "workedExample": {
        "title": "La formation du dipeptide ALAGLY",
        "statement": "L'alanine réagit avec la glycine : le groupe –CO₂H de l'alanine se condense avec le groupe –NH₂ de la glycine. Nomme le produit et la liaison formée.",
        "methodSteps": [
          "Le OH du carboxyle et un H de l'amine partent sous forme d'eau.",
          "Le produit est le dipeptide noté ALAGLY, où ALA est l'acide aminé N-terminal.",
          "La liaison créée entre le carbone du carboxyle et l'azote est la liaison peptidique –CO–NH–."
        ],
        "conclusion": "C'est l'exemple développé dans le résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La condensation qui crée la liaison peptidique",
          "stepTheme": "La condensation qui crée la liaison peptidique",
          "stepBadge": "La condensation qui crée la liaison peptidique",
          "paragraphText": "• Liaison peptidique : liaison résultant de la condensation entre le groupe carboxyle d'un acide α-aminé et le groupe amine d'un autre acide α-aminé.\nLa réaction élimine une molécule d'eau.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p03_q1",
            "type": "mcq",
            "prompt": "La liaison peptidique résulte de la condensation entre :",
            "options": [
              "Deux groupes carboxyles",
              "Le groupe carboxyle d'un acide α-aminé et le groupe amine d'un autre",
              "Deux groupes amines",
              "Un groupe carboxyle et un résidu R"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du résumé : –CO₂H d'un côté, –NH₂ de l'autre, avec perte d'eau."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le dipeptide",
          "stepTheme": "Le dipeptide",
          "stepBadge": "Le dipeptide",
          "paragraphText": "• Dipeptide : corps obtenu par la condensation de deux molécules d'acide α-aminé.\nC'est la définition demandée à la question 1 de la situation d'évaluation.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p03_q2",
            "type": "mcq",
            "prompt": "Un dipeptide résulte de la réaction de condensation de :",
            "options": [
              "Deux molécules d'acide α-aminé",
              "Un acide α-aminé et un acide carboxylique quelconque",
              "Trois acides α-aminés",
              "Un acide α-aminé et de l'eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition de la situation d'évaluation : deux acides α-aminés, une liaison peptidique, une molécule d'eau éliminée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le groupe caractéristique –CO–NH–",
          "stepTheme": "Le groupe caractéristique –CO–NH–",
          "stepBadge": "Le groupe caractéristique –CO–NH–",
          "paragraphText": "Dans le dipeptide ALAGLY, le résumé désigne le groupe –CO–NH– comme la liaison peptidique.\nC'est ce groupe qu'il faut entourer dans la formule d'un dipeptide (situation d'évaluation, question 3.2).",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p03_q3",
            "type": "mcq",
            "prompt": "Le groupe qui constitue la liaison peptidique est :",
            "options": [
              "–COOH",
              "–NH₂",
              "–CO–NH–",
              "–CH(NH₂)–"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé montre ce groupe entre les deux résidus du dipeptide ALAGLY."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'eau éliminée lors de la condensation",
          "stepTheme": "L'eau éliminée lors de la condensation",
          "stepBadge": "L'eau éliminée lors de la condensation",
          "paragraphText": "L'équation de formation d'ALAGLY montre les deux acides aminés à gauche et le dipeptide plus H₂O à droite.\nLa condensation est donc une réaction de déshydratation entre les deux groupes fonctionnels.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p03_q4",
            "type": "mcq",
            "prompt": "Lors de la formation d'un dipeptide, la petite molécule éliminée est :",
            "options": [
              "Le dioxyde de carbone",
              "L'ammoniac",
              "Le dioxygène",
              "L'eau"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'équation du résumé produit H₂O en plus du dipeptide : OH vient du carboxyle, H vient de l'amine."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'hydrolyse, réaction inverse",
          "stepTheme": "L'hydrolyse, réaction inverse",
          "stepBadge": "L'hydrolyse, réaction inverse",
          "paragraphText": "L'hydrolyse d'un dipeptide, par addition d'eau, coupe la liaison peptidique.\nLe résumé précise qu'elle donne les deux acides α-aminés de départ qui ont permis d'obtenir le dipeptide.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p03_q5",
            "type": "mcq",
            "prompt": "L'hydrolyse du dipeptide ALAGLY donne :",
            "options": [
              "L'alanine et la glycine de départ",
              "Deux molécules d'alanine",
              "De l'eau et du CO₂",
              "Un tripeptide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la phrase du résumé : l'hydrolyse restitue les deux acides α-aminés initiaux."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L'ordre compte : ALAGLY n'est pas GLYALA",
          "stepTheme": "L'ordre compte : ALAGLY n'est pas GLYALA",
          "stepBadge": "L'ordre compte : ALAGLY n'est pas GLYALA",
          "paragraphText": "Un dipeptide garde une extrémité amine libre (N-terminale) et une extrémité acide libre (C-terminale).\nSelon le sens de la condensation, on obtient deux dipeptides différents : c'est le principe des deux dipeptides P1 et P2 de l'exercice 3.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p03_q6",
            "type": "mcq",
            "prompt": "La condensation de l'alanine et de la glycine peut donner deux dipeptides différents car :",
            "options": [
              "La glycine est chirale",
              "Le sens de la condensation peut être inversé (ALA–GLY ou GLY–ALA)",
              "Il se forme deux liaisons peptidiques",
              "L'eau peut être éliminée deux fois"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans l'exercice 3, les deux dipeptides P1 et P2 (même masse 188 g/mol) correspondent aux deux ordres possibles des deux acides aminés."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p03_q1",
          "type": "mcq",
          "prompt": "La liaison peptidique résulte de la condensation entre :",
          "options": [
            "Deux groupes carboxyles",
            "Le groupe carboxyle d'un acide α-aminé et le groupe amine d'un autre",
            "Deux groupes amines",
            "Un groupe carboxyle et un résidu R"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du résumé : –CO₂H d'un côté, –NH₂ de l'autre, avec perte d'eau."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p03_q2",
          "type": "mcq",
          "prompt": "Un dipeptide résulte de la réaction de condensation de :",
          "options": [
            "Deux molécules d'acide α-aminé",
            "Un acide α-aminé et un acide carboxylique quelconque",
            "Trois acides α-aminés",
            "Un acide α-aminé et de l'eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition de la situation d'évaluation : deux acides α-aminés, une liaison peptidique, une molécule d'eau éliminée."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p03_q3",
          "type": "mcq",
          "prompt": "Le groupe qui constitue la liaison peptidique est :",
          "options": [
            "–COOH",
            "–NH₂",
            "–CO–NH–",
            "–CH(NH₂)–"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé montre ce groupe entre les deux résidus du dipeptide ALAGLY."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p03_q4",
          "type": "mcq",
          "prompt": "Lors de la formation d'un dipeptide, la petite molécule éliminée est :",
          "options": [
            "Le dioxyde de carbone",
            "L'ammoniac",
            "Le dioxygène",
            "L'eau"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'équation du résumé produit H₂O en plus du dipeptide : OH vient du carboxyle, H vient de l'amine."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p03_q5",
          "type": "mcq",
          "prompt": "L'hydrolyse du dipeptide ALAGLY donne :",
          "options": [
            "L'alanine et la glycine de départ",
            "Deux molécules d'alanine",
            "De l'eau et du CO₂",
            "Un tripeptide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la phrase du résumé : l'hydrolyse restitue les deux acides α-aminés initiaux."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p03_q6",
          "type": "mcq",
          "prompt": "La condensation de l'alanine et de la glycine peut donner deux dipeptides différents car :",
          "options": [
            "La glycine est chirale",
            "Le sens de la condensation peut être inversé (ALA–GLY ou GLY–ALA)",
            "Il se forme deux liaisons peptidiques",
            "L'eau peut être éliminée deux fois"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans l'exercice 3, les deux dipeptides P1 et P2 (même masse 188 g/mol) correspondent aux deux ordres possibles des deux acides aminés."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l12_acides_alpha_amines_p04",
      "order": 4,
      "title": "Caractérisation de la liaison peptidique et protéines",
      "summary": "La réaction de Biuret détecte les liaisons peptidiques ; enchaîner les acides aminés mène aux protéines.",
      "conceptExplanation": "La réaction de Biuret permet de caractériser la liaison peptidique dans les molécules ayant au moins deux liaisons peptidiques.\nUn dipeptide possède encore deux groupes (amine et acide) lui permettant de former de nouvelles liaisons peptidiques avec d'autres acides α-aminés : on obtient ainsi un tripeptide, puis un tétrapeptide.\nEn poursuivant la condensation, on obtient des polypeptides, composés de plusieurs acides α-aminés reliés par des liaisons peptidiques.\nQuand le nombre d'acides α-aminés devient encore plus important, on parle de protéines ; la documentation précise que les protéines des êtres vivants sont constituées de 22 acides aminés protéinogènes, dont 9 sont essentiels pour l'homme.",
      "keyRule": "Biuret : positif si au moins deux liaisons peptidiques ; chaîne longue d'acides aminés = protéine.",
      "formulas": [],
      "workedExample": {
        "title": "Du dipeptide à la protéine",
        "statement": "Comment passe-t-on d'un dipeptide à une protéine ?",
        "methodSteps": [
          "Le dipeptide garde une fonction amine et une fonction acide libres : il peut se condenser avec deux autres acides aminés.",
          "On obtient un tripeptide, puis un tétrapeptide, puis un polypeptide.",
          "Quand le nombre d'acides α-aminés est encore plus important, on parle de protéine."
        ],
        "conclusion": "C'est l'enchaînement décrit dans la partie « Les protéines » du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La réaction de Biuret",
          "stepTheme": "La réaction de Biuret",
          "stepBadge": "La réaction de Biuret",
          "paragraphText": "• Réaction de Biuret : réaction qui permet de caractériser la liaison peptidique dans des molécules.\nLe résumé précise la condition : la molécule doit posséder au moins deux liaisons peptidiques.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p04_q1",
            "type": "mcq",
            "prompt": "La réaction de Biuret permet de caractériser :",
            "options": [
              "La fonction acide carboxylique",
              "La liaison peptidique, dans les molécules ayant au moins deux liaisons peptidiques",
              "La fonction amine libre",
              "Les acides aminés isolés"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la caractérisation donnée par le résumé, avec sa condition d'au moins deux liaisons peptidiques."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Un dipeptide ne suffit pas pour le test de Biuret",
          "stepTheme": "Un dipeptide ne suffit pas pour le test de Biuret",
          "stepBadge": "Un dipeptide ne suffit pas pour le test de Biuret",
          "paragraphText": "Piège : un dipeptide ne contient qu'une seule liaison peptidique.\nIl faut au minimum un tripeptide (deux liaisons) pour que la réaction de Biuret caractérise la liaison peptidique.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p04_q2",
            "type": "mcq",
            "prompt": "La plus petite molécule pouvant donner un test de Biuret positif est :",
            "options": [
              "Un acide α-aminé",
              "Un dipeptide",
              "Un tripeptide (deux liaisons peptidiques)",
              "Une protéine uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé exige au moins deux liaisons peptidiques : un tripeptide en possède exactement deux."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Tripeptides et polypeptides",
          "stepTheme": "Tripeptides et polypeptides",
          "stepBadge": "Tripeptides et polypeptides",
          "paragraphText": "En continuant la condensation à partir d'un dipeptide, on obtient un tripeptide, puis un tétrapeptide.\nLes polypeptides sont composés de plusieurs acides α-aminés reliés entre eux par des liaisons peptidiques.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p04_q3",
            "type": "mcq",
            "prompt": "Un polypeptide est :",
            "options": [
              "Un seul acide aminé modifié",
              "Un mélange d'acides aminés sans liaisons",
              "Un dipeptide particulier",
              "Une chaîne de plusieurs acides α-aminés reliés par des liaisons peptidiques"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la définition donnée dans la partie sur les protéines du résumé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Des polypeptides aux protéines",
          "stepTheme": "Des polypeptides aux protéines",
          "stepBadge": "Des polypeptides aux protéines",
          "paragraphText": "Quand le nombre d'acides α-aminés enchaînés devient encore plus important, on ne parle plus de polypeptides mais de protéines.\nLes protéines sont donc de très longues chaînes d'acides α-aminés.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p04_q4",
            "type": "mcq",
            "prompt": "On parle de protéine lorsque :",
            "options": [
              "Le nombre d'acides α-aminés enchaînés devient très important",
              "La molécule contient exactement deux acides aminés",
              "La chaîne contient du soufre",
              "La molécule est un amphion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la distinction du résumé entre polypeptides et protéines : une question de longueur de chaîne."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "22 acides aminés protéinogènes (documentation)",
          "stepTheme": "22 acides aminés protéinogènes (documentation)",
          "stepBadge": "22 acides aminés protéinogènes (documentation)",
          "paragraphText": "La documentation du résumé indique que toutes les protéines des êtres vivants connus ne sont constituées que de 22 acides aminés différents, dits protéinogènes.\nUn acide aminé engagé dans une chaîne est appelé résidu d'acide aminé, et leur ordre est la séquence peptidique, déterminée par les gènes via le code génétique.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p04_q5",
            "type": "mcq",
            "prompt": "D'après la documentation, les protéines des êtres vivants sont constituées de :",
            "options": [
              "22 acides aminés protéinogènes différents",
              "Des centaines d'acides aminés différents",
              "Seulement la glycine et l'alanine",
              "4 acides aminés seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le nombre donné par la documentation (source Wikipédia) jointe au résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les 9 acides aminés essentiels",
          "stepTheme": "Les 9 acides aminés essentiels",
          "stepBadge": "Les 9 acides aminés essentiels",
          "paragraphText": "Toujours d'après la documentation, neuf des acides aminés protéinogènes sont dits essentiels pour l'homme.\nIls ne peuvent pas être produits par le métabolisme humain et doivent être apportés directement par l'alimentation.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p04_q6",
            "type": "mcq",
            "prompt": "Un acide aminé est dit essentiel pour l'homme si :",
            "options": [
              "Il contient du soufre",
              "Il ne peut pas être produit par le métabolisme humain et doit venir de l'alimentation",
              "Il est présent dans toutes les protéines",
              "Il possède deux fonctions acides"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition de la documentation : 9 acides aminés protéinogènes sont essentiels pour l'homme."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p04_q1",
          "type": "mcq",
          "prompt": "La réaction de Biuret permet de caractériser :",
          "options": [
            "La fonction acide carboxylique",
            "La liaison peptidique, dans les molécules ayant au moins deux liaisons peptidiques",
            "La fonction amine libre",
            "Les acides aminés isolés"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la caractérisation donnée par le résumé, avec sa condition d'au moins deux liaisons peptidiques."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p04_q2",
          "type": "mcq",
          "prompt": "La plus petite molécule pouvant donner un test de Biuret positif est :",
          "options": [
            "Un acide α-aminé",
            "Un dipeptide",
            "Un tripeptide (deux liaisons peptidiques)",
            "Une protéine uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé exige au moins deux liaisons peptidiques : un tripeptide en possède exactement deux."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p04_q3",
          "type": "mcq",
          "prompt": "Un polypeptide est :",
          "options": [
            "Un seul acide aminé modifié",
            "Un mélange d'acides aminés sans liaisons",
            "Un dipeptide particulier",
            "Une chaîne de plusieurs acides α-aminés reliés par des liaisons peptidiques"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la définition donnée dans la partie sur les protéines du résumé."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p04_q4",
          "type": "mcq",
          "prompt": "On parle de protéine lorsque :",
          "options": [
            "Le nombre d'acides α-aminés enchaînés devient très important",
            "La molécule contient exactement deux acides aminés",
            "La chaîne contient du soufre",
            "La molécule est un amphion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la distinction du résumé entre polypeptides et protéines : une question de longueur de chaîne."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p04_q5",
          "type": "mcq",
          "prompt": "D'après la documentation, les protéines des êtres vivants sont constituées de :",
          "options": [
            "22 acides aminés protéinogènes différents",
            "Des centaines d'acides aminés différents",
            "Seulement la glycine et l'alanine",
            "4 acides aminés seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le nombre donné par la documentation (source Wikipédia) jointe au résumé."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p04_q6",
          "type": "mcq",
          "prompt": "Un acide aminé est dit essentiel pour l'homme si :",
          "options": [
            "Il contient du soufre",
            "Il ne peut pas être produit par le métabolisme humain et doit venir de l'alimentation",
            "Il est présent dans toutes les protéines",
            "Il possède deux fonctions acides"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition de la documentation : 9 acides aminés protéinogènes sont essentiels pour l'homme."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l12_acides_alpha_amines_p05",
      "order": 5,
      "title": "Identifier un acide α-aminé",
      "summary": "Des pourcentages massiques à la formule brute (situation d'évaluation), et de la masse d'un dipeptide au résidu R (exercice 5).",
      "conceptExplanation": "Dans la situation d'évaluation, l'analyse quantitative de l'acide α-aminé A donne %C = 40,45 ; %H = 7,87 ; %N = 15,72, et la molécule possède deux atomes d'oxygène.\nEn écrivant la formule brute CxHyNzO₂ et en utilisant les proportions des pourcentages, on obtient x = 3, y = 7 et z = 1 : A a pour formule brute C₃H₇NO₂.\nSa formule semi-développée est donc CH₃–CH(NH₂)–CO₂H : c'est l'alanine, l'acide 2-aminopropanoïque.\nDans l'exercice 5, un acide B inconnu forme avec la valine un dipeptide de masse molaire 188 g/mol ; le calcul donne un résidu R de masse 15 g/mol, donc R = CH₃ : B est aussi l'alanine.",
      "keyRule": "Pourcentages massiques + nombre d'oxygènes → formule brute → le seul acide α-aminé compatible.",
      "formulas": [
        {
          "name": "Formule brute de l'alanine",
          "formula": "\\mathrm{C_3H_7NO_2}",
          "note": "Déduite des pourcentages massiques dans la situation d'évaluation."
        }
      ],
      "workedExample": {
        "title": "Retrouver R dans l'exercice 5",
        "statement": "Un acide α-aminé B, de formule R–CH(NH₂)–COOH avec R alkyle saturé, forme avec la valine un dipeptide de masse molaire M = 188 g/mol. Détermine R et identifie B.",
        "methodSteps": [
          "La masse du dipeptide permet d'isoler la masse du groupe R : M(R) = 15 g/mol.",
          "Pour un alkyle saturé CnH2n+1, M(R) = 14n + 1 ; on obtient n = 1.",
          "R est le groupe méthyle CH₃–."
        ],
        "conclusion": "B est CH₃–CH(NH₂)–COOH, l'acide 2-aminopropanoïque (alanine) : c'est le corrigé de l'exercice 5."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Partir des pourcentages massiques",
          "stepTheme": "Partir des pourcentages massiques",
          "stepBadge": "Partir des pourcentages massiques",
          "paragraphText": "La situation d'évaluation donne pour A : %C = 40,45 ; %H = 7,87 ; %N = 15,72, et deux atomes d'oxygène.\nLe reste du pourcentage (100 % moins la somme) correspond à l'oxygène.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p05_q1",
            "type": "mcq",
            "prompt": "Dans la situation d'évaluation, le pourcentage massique d'oxygène du composé A vaut environ :",
            "options": [
              "35,96 %",
              "15,72 %",
              "64,04 %",
              "7,87 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "100 − (40,45 + 7,87 + 15,72) = 35,96 % : c'est la part des deux atomes d'oxygène utilisée dans la vérification du corrigé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "La formule brute de A : C₃H₇NO₂",
          "stepTheme": "La formule brute de A : C₃H₇NO₂",
          "stepBadge": "La formule brute de A : C₃H₇NO₂",
          "paragraphText": "En posant la formule brute CxHyNzO₂ et en égalant les rapports aux pourcentages, la solution obtient x = 3, y = 7 et z = 1.\nOn retrouve bien la formule brute C₃H₇NO₂ demandée.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p05_q2",
            "type": "mcq",
            "prompt": "La formule brute du composé A de la situation d'évaluation est :",
            "options": [
              "C₂H₅O₂N",
              "C₃H₇NO₂",
              "C₄H₉NO₂",
              "C₃H₇NO₃"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la formule vérifiée à la question 2.1 du corrigé ; C₂H₅O₂N est celle de la glycine."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "A est l'alanine",
          "stepTheme": "A est l'alanine",
          "stepBadge": "A est l'alanine",
          "paragraphText": "Avec trois carbones, la seule structure d'acide α-aminé est CH₃–CH(NH₂)–CO₂H.\nLe corrigé nomme A : acide 2-aminopropanoïque, c'est-à-dire l'alanine.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p05_q3",
            "type": "mcq",
            "prompt": "Le composé A (C₃H₇NO₂) est :",
            "options": [
              "La glycine",
              "La valine",
              "L'alanine (acide 2-aminopropanoïque)",
              "Un dipeptide"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'identification du corrigé : formule semi-développée CH₃–CH(NH₂)–COOH."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le partenaire B est la valine",
          "stepTheme": "Le partenaire B est la valine",
          "stepBadge": "Le partenaire B est la valine",
          "paragraphText": "Le composé B de la situation a pour formule C₄H₉–CH(NH₂)–COOH et sa chaîne carbonée possède deux ramifications.\nSa formule semi-développée montre le groupe isopropyle (CH₃)₂CH– : c'est la valine, et le dipeptide D est donc ALA–VAL avec A en position N-terminale.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p05_q4",
            "type": "mcq",
            "prompt": "Le dipeptide D de la situation d'évaluation est formé des acides aminés :",
            "options": [
              "Glycine et alanine",
              "Alanine et glycine",
              "Valine et glycine",
              "Alanine (N-terminal) et valine"
            ],
            "correctAnswerIndex": 3,
            "explanation": "A est l'alanine, N-terminale d'après l'énoncé (III), et B est la valine à la chaîne ramifiée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Exercice 3 : retrouver A par la masse du dipeptide",
          "stepTheme": "Exercice 3 : retrouver A par la masse du dipeptide",
          "stepBadge": "Exercice 3 : retrouver A par la masse du dipeptide",
          "paragraphText": "Dans l'exercice 3, l'alanine et un acide A inconnu donnent deux dipeptides de masse molaire 188 g/mol chacun.\nLa solution utilise la relation entre la masse du dipeptide et le nombre n de carbones du radical de A : elle obtient n = 3, donc un radical isopropyle.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p05_q5",
            "type": "mcq",
            "prompt": "Dans l'exercice 3, l'acide α-aminé A identifié est :",
            "options": [
              "La valine (acide 2-amino-3-méthylbutanoïque)",
              "La glycine",
              "L'alanine",
              "Un acide à chaîne droite de 5 carbones"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la conclusion de l'exercice 3 : le radical ramifié à 3 carbones donne la structure de la valine."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "La masse d'un alkyle saturé : 14n + 1",
          "stepTheme": "La masse d'un alkyle saturé : 14n + 1",
          "stepBadge": "La masse d'un alkyle saturé : 14n + 1",
          "paragraphText": "Le corrigé de l'exercice 5 rappelle que pour un groupe alkyle saturé CnH₂n₊₁, la masse vaut M(R) = 14n + 1 (en g/mol).\nAvec M(R) = 15 g/mol, on trouve n = 1 : R est le groupe méthyle.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p05_q6",
            "type": "mcq",
            "prompt": "Un groupe alkyle saturé de masse 15 g/mol est :",
            "options": [
              "Le groupe éthyle",
              "Le groupe méthyle CH₃–",
              "Le groupe isopropyle",
              "Un groupe à 2 carbones"
            ],
            "correctAnswerIndex": 1,
            "explanation": "14n + 1 = 15 donne n = 1 : c'est le calcul du corrigé de l'exercice 5, qui identifie B comme l'alanine."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p05_q1",
          "type": "mcq",
          "prompt": "Dans la situation d'évaluation, le pourcentage massique d'oxygène du composé A vaut environ :",
          "options": [
            "35,96 %",
            "15,72 %",
            "64,04 %",
            "7,87 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "100 − (40,45 + 7,87 + 15,72) = 35,96 % : c'est la part des deux atomes d'oxygène utilisée dans la vérification du corrigé."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p05_q2",
          "type": "mcq",
          "prompt": "La formule brute du composé A de la situation d'évaluation est :",
          "options": [
            "C₂H₅O₂N",
            "C₃H₇NO₂",
            "C₄H₉NO₂",
            "C₃H₇NO₃"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la formule vérifiée à la question 2.1 du corrigé ; C₂H₅O₂N est celle de la glycine."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p05_q3",
          "type": "mcq",
          "prompt": "Le composé A (C₃H₇NO₂) est :",
          "options": [
            "La glycine",
            "La valine",
            "L'alanine (acide 2-aminopropanoïque)",
            "Un dipeptide"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'identification du corrigé : formule semi-développée CH₃–CH(NH₂)–COOH."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p05_q4",
          "type": "mcq",
          "prompt": "Le dipeptide D de la situation d'évaluation est formé des acides aminés :",
          "options": [
            "Glycine et alanine",
            "Alanine et glycine",
            "Valine et glycine",
            "Alanine (N-terminal) et valine"
          ],
          "correctAnswerIndex": 3,
          "explanation": "A est l'alanine, N-terminale d'après l'énoncé (III), et B est la valine à la chaîne ramifiée."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p05_q5",
          "type": "mcq",
          "prompt": "Dans l'exercice 3, l'acide α-aminé A identifié est :",
          "options": [
            "La valine (acide 2-amino-3-méthylbutanoïque)",
            "La glycine",
            "L'alanine",
            "Un acide à chaîne droite de 5 carbones"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la conclusion de l'exercice 3 : le radical ramifié à 3 carbones donne la structure de la valine."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p05_q6",
          "type": "mcq",
          "prompt": "Un groupe alkyle saturé de masse 15 g/mol est :",
          "options": [
            "Le groupe éthyle",
            "Le groupe méthyle CH₃–",
            "Le groupe isopropyle",
            "Un groupe à 2 carbones"
          ],
          "correctAnswerIndex": 1,
          "explanation": "14n + 1 = 15 donne n = 1 : c'est le calcul du corrigé de l'exercice 5, qui identifie B comme l'alanine."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l12_acides_alpha_amines_p06",
      "order": 6,
      "title": "La synthèse dirigée d'un dipeptide",
      "summary": "Sans protection, deux dipeptides isomères se forment ; blocages et activations permettent d'en obtenir un seul.",
      "conceptExplanation": "Quand deux acides α-aminés différents réagissent sans précaution, chaque fonction amine peut se condenser avec chaque fonction acide : on obtient deux dipeptides isomères, comme P1 (ALAGLY) et P2 (GLYALA) de l'exercice 4.\nPour synthétiser exclusivement un dipeptide donné, le résumé décrit le principe : bloquer la fonction amine du premier acide et la fonction acide du second, activer la fonction acide du premier et la fonction amine du second, réaliser la condensation, puis débloquer.\nL'exercice 5 le résume : il faut bloquer ou désactiver les groupes qui participent aux réactions non souhaitées, et activer l'un des groupes participant à la réaction voulue.",
      "keyRule": "Synthèse exclusive = bloquer les fonctions qui ne doivent pas réagir + activer celles qui doivent réagir, puis débloquer.",
      "formulas": [],
      "workedExample": {
        "title": "Les deux isomères de l'exercice 4",
        "statement": "Le dipeptide P1 a pour formule NH₂–CH(CH₃)–CO–NH–CH₂–CO₂H. Quels sont les acides aminés A1 et A2 utilisés, et quel est le dipeptide isomère P2 ?",
        "methodSteps": [
          "En coupant la liaison peptidique de P1, on retrouve A1 = alanine (côté N-terminal) et A2 = glycine.",
          "L'isomère P2 correspond au sens inverse : GLY–ALA, glycine en position N-terminale.",
          "Sans blocage, les deux se forment simultanément."
        ],
        "conclusion": "Ce sont les réponses de l'exercice 4 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Retrouver A1 et A2 en coupant la liaison",
          "stepTheme": "Retrouver A1 et A2 en coupant la liaison",
          "stepBadge": "Retrouver A1 et A2 en coupant la liaison",
          "paragraphText": "Méthode de l'exercice 4 : l'hydrolyse fictive de P1 redonne les deux acides de départ.\nLa solution identifie A1 = CH₃–CH(NH₂)–CO₂H (alanine) et A2 = NH₂–CH₂–CO₂H (glycine).",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p06_q1",
            "type": "mcq",
            "prompt": "Dans le dipeptide P1 de l'exercice 4, les acides aminés utilisés sont :",
            "options": [
              "A1 = alanine et A2 = glycine",
              "A1 = glycine et A2 = valine",
              "A1 = valine et A2 = glycine",
              "Deux molécules d'alanine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la réponse de la question 1 de l'exercice 4 : le résidu CH₃–CH correspond à l'alanine, le résidu –CH₂– à la glycine."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le principe de la synthèse exclusive",
          "stepTheme": "Le principe de la synthèse exclusive",
          "stepBadge": "Le principe de la synthèse exclusive",
          "paragraphText": "La solution de l'exercice 4 liste les étapes : blocage de la fonction amine de A1, blocage de la fonction acide de A2, activation de la fonction acide de A1, activation de la fonction amine de A2, puis déblocages.\nL'exercice 5 résume : bloquer les groupes des réactions non souhaitées et activer un groupe de la réaction voulue.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p06_q2",
            "type": "mcq",
            "prompt": "Pour obtenir un seul dipeptide déterminé, il faut :",
            "options": [
              "Chauffer fortement le mélange",
              "Bloquer ou désactiver les groupes des réactions non souhaitées et activer un groupe de la réaction voulue",
              "Utiliser un seul acide aminé",
              "Ajouter de l'eau en excès"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le principe énoncé dans le corrigé de l'exercice 5 et détaillé dans l'exercice 4."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Quels groupes bloquer pour P1 ?",
          "stepTheme": "Quels groupes bloquer pour P1 ?",
          "stepBadge": "Quels groupes bloquer pour P1 ?",
          "paragraphText": "Pour P1 (A1 en position N-terminale), on bloque la fonction amine de A1 et la fonction acide de A2.\nAinsi, seul le carboxyle de A1 peut réagir avec l'amine de A2 : le sens du dipeptide est imposé.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p06_q3",
            "type": "mcq",
            "prompt": "Dans la synthèse de P1 de l'exercice 4, les fonctions bloquées sont :",
            "options": [
              "L'acide de A1 et l'amine de A2",
              "L'amine de A1 et l'amine de A2",
              "La fonction amine de A1 et la fonction acide de A2",
              "Aucune fonction"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le début du principe de synthèse donné par la solution de l'exercice 4."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Activer les fonctions qui doivent réagir",
          "stepTheme": "Activer les fonctions qui doivent réagir",
          "stepBadge": "Activer les fonctions qui doivent réagir",
          "paragraphText": "En complément des blocages, on active la fonction acide de A1 et la fonction amine de A2, celles qui formeront la liaison peptidique.\nAprès la condensation, on débloque la fonction amine de A1 et la fonction acide de A2 pour obtenir le dipeptide libre.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p06_q4",
            "type": "mcq",
            "prompt": "Les fonctions activées dans la synthèse de P1 sont :",
            "options": [
              "L'amine de A1 et l'acide de A2",
              "Les deux fonctions de A2",
              "Aucune",
              "La fonction acide de A1 et la fonction amine de A2"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ce sont exactement les deux fonctions qui doivent se condenser, d'après la solution de l'exercice 4."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le dipeptide isomère P2",
          "stepTheme": "Le dipeptide isomère P2",
          "stepBadge": "Le dipeptide isomère P2",
          "paragraphText": "L'exercice 4 demande la formule du dipeptide P2, isomère de P1.\nP2 correspond au sens inverse de condensation : la glycine devient l'acide aminé N-terminal et l'alanine le C-terminal.",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p06_q5",
            "type": "mcq",
            "prompt": "Le dipeptide P2, isomère de P1 (ALAGLY), est :",
            "options": [
              "GLYALA : la glycine en position N-terminale",
              "Un tripeptide",
              "Le même que P1",
              "Un dipeptide de deux glycines"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Inverser le sens de la condensation donne l'isomère GLY–ALA demandé à la question 3 de l'exercice 4."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Identifier l'acide N-terminal d'un dipeptide",
          "stepTheme": "Identifier l'acide N-terminal d'un dipeptide",
          "stepBadge": "Identifier l'acide N-terminal d'un dipeptide",
          "paragraphText": "Dans la situation d'évaluation, A est l'acide α-aminé N-terminal du dipeptide D, obtenu par blocage de la fonction amine de A.\nL'acide N-terminal est celui dont la fonction amine reste libre dans le dipeptide (à l'extrémité NH₂).",
          "exercise": {
            "id": "terminale_c_chimie_l12_acides_alpha_amines_p06_q6",
            "type": "mcq",
            "prompt": "L'acide α-aminé N-terminal d'un dipeptide est celui :",
            "options": [
              "Dont la fonction acide reste libre",
              "Dont la fonction amine reste libre (extrémité NH₂)",
              "Qui a la plus grande masse",
              "Qui est toujours la glycine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans ALAGLY comme dans la situation d'évaluation, l'acide N-terminal garde son groupe –NH₂ libre ; son groupe –CO₂H a formé la liaison peptidique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p06_q1",
          "type": "mcq",
          "prompt": "Dans le dipeptide P1 de l'exercice 4, les acides aminés utilisés sont :",
          "options": [
            "A1 = alanine et A2 = glycine",
            "A1 = glycine et A2 = valine",
            "A1 = valine et A2 = glycine",
            "Deux molécules d'alanine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la réponse de la question 1 de l'exercice 4 : le résidu CH₃–CH correspond à l'alanine, le résidu –CH₂– à la glycine."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p06_q2",
          "type": "mcq",
          "prompt": "Pour obtenir un seul dipeptide déterminé, il faut :",
          "options": [
            "Chauffer fortement le mélange",
            "Bloquer ou désactiver les groupes des réactions non souhaitées et activer un groupe de la réaction voulue",
            "Utiliser un seul acide aminé",
            "Ajouter de l'eau en excès"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le principe énoncé dans le corrigé de l'exercice 5 et détaillé dans l'exercice 4."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p06_q3",
          "type": "mcq",
          "prompt": "Dans la synthèse de P1 de l'exercice 4, les fonctions bloquées sont :",
          "options": [
            "L'acide de A1 et l'amine de A2",
            "L'amine de A1 et l'amine de A2",
            "La fonction amine de A1 et la fonction acide de A2",
            "Aucune fonction"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le début du principe de synthèse donné par la solution de l'exercice 4."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p06_q4",
          "type": "mcq",
          "prompt": "Les fonctions activées dans la synthèse de P1 sont :",
          "options": [
            "L'amine de A1 et l'acide de A2",
            "Les deux fonctions de A2",
            "Aucune",
            "La fonction acide de A1 et la fonction amine de A2"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ce sont exactement les deux fonctions qui doivent se condenser, d'après la solution de l'exercice 4."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p06_q5",
          "type": "mcq",
          "prompt": "Le dipeptide P2, isomère de P1 (ALAGLY), est :",
          "options": [
            "GLYALA : la glycine en position N-terminale",
            "Un tripeptide",
            "Le même que P1",
            "Un dipeptide de deux glycines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Inverser le sens de la condensation donne l'isomère GLY–ALA demandé à la question 3 de l'exercice 4."
        },
        {
          "id": "terminale_c_chimie_l12_acides_alpha_amines_p06_q6",
          "type": "mcq",
          "prompt": "L'acide α-aminé N-terminal d'un dipeptide est celui :",
          "options": [
            "Dont la fonction acide reste libre",
            "Dont la fonction amine reste libre (extrémité NH₂)",
            "Qui a la plus grande masse",
            "Qui est toujours la glycine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans ALAGLY comme dans la situation d'évaluation, l'acide N-terminal garde son groupe –NH₂ libre ; son groupe –CO₂H a formé la liaison peptidique."
        }
      ]
    }
  ]
};
