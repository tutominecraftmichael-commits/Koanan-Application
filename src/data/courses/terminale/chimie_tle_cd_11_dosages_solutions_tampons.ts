import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : TCDE — Thème : Chimie Générale — Titre : Dosages acido-basiques et solutions tampons
export const CHIMIE_TLE_CD_L11_DOSAGES_SOLUTIONS_TAMPONS: CurriculumChapter = {
  "id": "terminale_c_chimie_l11_dosages_solutions_tampons",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 11,
  "title": "Leçon 11 : Dosages acido-basiques et solutions tampons",
  "summary": "Principe et critères d'une réaction de dosage (unique, rapide, totale), étude comparative détaillée des trois types de titrages acido-basiques (fort-fort, faible-fort, fort-faible), exploitation complète des courbes pH-métriques (méthode des tangentes et de la dérivée), point de demi-équivalence (pH = pKa) et point d'équivalence, sélection raisonnée des indicateurs colorés, et étude approfondie des solutions tampons (définition, résistance aux variations de pH, les trois méthodes de préparation et importance biologique vitale).",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : TCDE – Chimie Générale – Réactions acide-base. Solution tampon)",
  "points": [
    {
      "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p01",
      "order": 1,
      "title": "Principe du dosage acido-basique, dispositif expérimental et critères de réaction",
      "summary": "Définition du dosage (titrage), critères d'exigence d'une réaction support (rapide, totale, unique), verrerie de précision (burette, pipette jaugée, agitateur magnétique), et comparaison entre suivi pH-métrique et suivi colorimétrique.",
      "conceptExplanation": "1. Définition et objectif d'un dosage (titrage) :\nDoser (ou titrer) une espèce chimique A en solution aqueuse consiste à déterminer avec précision sa concentration molaire inconnue CA (ou sa quantité de matière) dans un volume connu VA de prise d'essai, en la faisant réagir totalement avec une solution étalon titrante d'une espèce B de concentration CB connue avec exactitude.\n\n2. Les trois critères obligatoires de la réaction de dosage :\nPour qu'une réaction chimique puisse servir de support à un dosage, elle doit impérativement satisfaire à 3 exigences expérimentales strictes :\n- Elle doit être RAPIDE : le transfert de protons entre réactifs doit s'effectuer quasi instantanément à chaque goutte versée pour que la mesure soit immédiate.\n- Elle doit être TOTALE (quantitative) : le réactif titrant versé en défaut doit être consommé à 100 % (constante d'équilibre K >> 10^4).\n- Elle doit être UNIQUE : aucune réaction secondaire parasite ne doit consommer l'espèce titrée ou l'espèce titrante.\nToutes les réactions entre acides et bases de Brønsted impliquant au moins un partenaire fort satisfont parfaitement à ces conditions.\n\n3. Dispositif expérimental de laboratoire :\n- Une burette graduée contenant la solution titrante (ajustée à zéro).\n- Un bécher (ou erlenmeyer) contenant la prise d'essai de volume VA prélevé à la pipette jaugée munie d'une propipette, et de l'eau distillée ajoutée si nécessaire pour immerger les électrodes sans modifier la quantité de soluté nA.\n- Un agitateur magnétique avec barreau aimanté pour assurer une homogénéisation instantanée.\n- Une sonde de pH-mètre combinée (suivi pH-métrique) ou quelques gouttes d'un indicateur coloré approprié (suivi colorimétrique).",
      "keyRule": "Une réaction de dosage doit être UNIQUE, RAPIDE et TOTALE. À l'équivalence : les réactifs sont mélangés en proportions stœchiométriques et sont intégralement consommés.",
      "formulas": [
        {
          "name": "Relation fondamentale d'équivalence",
          "formula": "n_A(\\text{initial}) = n_B(\\text{versé à l'équivalence}) \\iff C_A \\cdot V_A = C_B \\cdot V_{BE}",
          "note": "Pour une stœchiométrie 1:1"
        }
      ],
      "workedExample": {
        "title": "Calcul de concentration d'un vinaigre commercial titré par la soude",
        "statement": "On prélève VA = 10,0 mL d'une solution de vinaigre dilué 10 fois. On la dose par une solution de soude de concentration CB = 0,10 mol/L. Le virage de l'indicateur se produit pour un volume équivalent VBE = 13,0 mL. Calcule la concentration CA du vinaigre dilué puis la concentration C0 du vinaigre commercial.",
        "methodSteps": [
          "Étape 1 : Écrire la réaction de dosage : CH3COOH + OH- -> CH3COO- + H2O.",
          "Étape 2 : Relation à l'équivalence : nA = nB => CA · VA = CB · VBE.",
          "Étape 3 : Calculer CA : CA = (CB · VBE) / VA = (0,10 mol/L × 13,0 mL) / 10,0 mL = 0,13 mol/L.",
          "Étape 4 : Calculer la concentration C0 de la solution commerciale (facteur de dilution k = 10) : C0 = 10 · CA = 10 × 0,13 = 1,3 mol/L."
        ],
        "conclusion": "La concentration molaire en acide acétique du vinaigre commercial s'élève à 1,3 mol/L."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Dispositif expérimental de titrage pH-métrique et rôle des instruments",
        "tableData": {
          "headers": [
            "Élément du montage",
            "Instrument de laboratoire",
            "Rôle expérimental",
            "Précautions requises"
          ],
          "rows": [
            [
              "Solution titrante",
              "Burette graduée de 25 mL",
              "Délivrer le volume V avec précision",
              "Chasser les bulles d'air sous le robinet, ajuster le zéro"
            ],
            [
              "Solution titrée",
              "Bécher sur agitateur magnétique",
              "Contenir le mélange réactionnel",
              "Volume VA prélevé rigoureusement à la pipette jaugée"
            ],
            [
              "Sonde de mesure",
              "Électrode combinée de pH-mètre",
              "Mesurer le potentiel et le pH",
              "Étalonnée préalablement, ne pas heurter le barreau aimanté"
            ],
            [
              "Homogénéisation",
              "Barreau aimanté + agitateur",
              "Mélanger instantanément les réactifs",
              "Agitation régulière modérée sans éclaboussures ni vortex"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition et but d'un dosage quantitatif",
          "stepTheme": "Définition dosage",
          "stepBadge": "Détermination quantitative",
          "paragraphText": "Un dosage (ou titrage) est une méthode d'analyse quantitative qui permet de déterminer avec exactitude la concentration molaire inconnue d'une espèce chimique présente dans une solution par réaction complète avec un réactif titrant de concentration connue.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p01_q1",
            "type": "mcq",
            "prompt": "Quel est l'objectif premier de la réalisation d'un dosage acido-basique au laboratoire ?",
            "options": [
              "Déterminer la concentration molaire inconnue d'un acide ou d'une base dans une solution",
              "Changer la couleur du liquide pour fabriquer une peinture",
              "Tester la résistance mécanique de la burette",
              "Refroidir le mélange réactionnel"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le but universel d'un titrage volumétrique quantitatif est la détermination exacte de la concentration d'un soluté dans une prise d'essai."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les trois qualités obligatoires de la réaction de dosage",
          "stepTheme": "Qualités de la réaction",
          "stepBadge": "Rapide, totale, unique",
          "paragraphText": "La réaction chimique support d'un dosage doit satisfaire à trois conditions indispensables : être UNIQUE (pas de réaction concurrente), RAPIDE (immédiate) et TOTALE (constante d'équilibre K >> 10^4 consommant tout le réactif limitant).",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p01_q2",
            "type": "mcq",
            "prompt": "Pourquoi une réaction équilibrée très lente (comme l'estérification d'un alcool par un acide carboxylique) ne peut-elle PAS servir de support à un dosage direct ?",
            "options": [
              "Parce qu'elle n'est ni rapide (nécessite des heures) ni totale (rendement limité à 67 %), empêchant de repérer une équivalence stœchiométrique nette.",
              "Parce qu'elle ne contient pas d'atomes d'oxygène.",
              "Parce qu'elle est toujours explosive.",
              "Parce que les esters sont incolores."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un dosage exige un avancement instantané et intégral (100 %) à chaque goutte ajoutée pour que la composition du milieu corresponde rigoureusement aux quantités introduites."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Verrerie de prélèvement : la pipette jaugée",
          "stepTheme": "Verrerie jaugée",
          "stepBadge": "Précision de prélèvement",
          "paragraphText": "Le volume VA de la solution à doser doit obligatoirement être prélevé à l'aide d'une pipette jaugée munie d'une propipette. L'utilisation d'une éprouvette graduée est prohibée car son incertitude fausserait le dosage.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p01_q3",
            "type": "mcq",
            "prompt": "Pour prélever exactement 20,0 mL d'une solution d'acide chlorhydrique à doser, quel instrument doit-on impérativement utiliser ?",
            "options": [
              "Une pipette jaugée de 20 mL munie d'une propipette",
              "Une éprouvette graduée de 20 mL",
              "Un bécher gradué de 50 mL",
              "Un compte-gouttes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seule la pipette jaugée (verrerie à trait de jauge calibrée à 20 °C) assure une tolérance inférieure à 0,03 mL, indispensable à la précision analytique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Ajout d'eau distillée dans le bécher : aucun effet sur l'équivalence",
          "stepTheme": "Dilution de la prise d'essai",
          "stepBadge": "Invariance de nA",
          "paragraphText": "On ajoute fréquemment de l'eau distillée dans le bécher pour immerger correctement les électrodes du pH-mètre. Cet ajout dilue la solution mais NE MODIFIE PAS la quantité de matière nA = CA · VA de soluté présente : le volume équivalent VBE reste rigoureusement inchangé.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p01_q4",
            "type": "mcq",
            "prompt": "Un élève ajoute 40 mL d'eau distillée dans son bécher contenant déjà les 10 mL d'acide à doser afin de recouvrir le bulbe de son électrode. Quelle conséquence cet ajout d'eau a-t-il sur le volume équivalent VBE versé à la burette ?",
            "options": [
              "Aucune conséquence : le volume équivalent VBE reste strictement identique car la quantité de matière nA introduite n'a pas varié.",
              "Le volume VBE est multiplié par 5.",
              "Le volume VBE est divisé par 4.",
              "L'équivalence ne peut plus être atteinte."
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'équivalence dépend exclusivement de la quantité de matière nA = CA · VA de soluté apportée initialement. L'eau distillée n'apporte aucun acide : nA reste constant, donc VBE = nA / CB ne change pas."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Définition de l'équivalence acido-basique",
          "stepTheme": "Équivalence",
          "stepBadge": "Proportions stœchiométriques",
          "paragraphText": "L'équivalence acido-basique est l'état du mélange où les réactifs acide et base ont été introduits dans des proportions rigoureusement stœchiométriques selon l'équation-bilan : les deux réactifs sont alors simultanément et totalement consommés.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p01_q5",
            "type": "mcq",
            "prompt": "Que caractérise rigoureusement le point d'équivalence acido-basique d'un dosage ?",
            "options": [
              "L'état où les quantités de matière d'acide et de base ajoutées sont dans les proportions stœchiométriques de l'équation-bilan (changement de réactif limitant)",
              "Le moment où le pH est obligatoirement égal à 7,0 dans tous les dosages",
              "Le moment où la burette est totalement vide",
              "L'apparition de bulles de gaz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'équivalence est définie par la stœchiométrie : avant l'équivalence, le réactif titrant est limitant ; après l'équivalence, le réactif titré est consommé et le titrant devient en excès."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Comparaison des deux méthodes de détection : pH-métrie vs colorimétrie",
          "stepTheme": "Méthodes de suivi",
          "stepBadge": "Comparaison",
          "paragraphText": "Le dosage pH-métrique permet de tracer la courbe continue pH = f(V) et d'obtenir simultanément VBE, pHE et le pKa du couple. Le dosage colorimétrique est plus rapide mais exige de choisir judicieusement un indicateur dont la zone de virage encadre pHE.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p01_q6",
            "type": "mcq",
            "prompt": "Quel est l'avantage exclusif du suivi pH-métrique par rapport à un dosage colorimétrique à indicateur coloré ?",
            "options": [
              "Il permet de déterminer graphiquement la valeur du pKa du couple faible dosé grâce au point de demi-équivalence.",
              "Il ne nécessite aucune burette.",
              "Il fonctionne sans aucune solution titrante.",
              "Il donne un résultat sans faire aucun calcul."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le tracé de la courbe pH = f(V) donne accès à la courbe complète, révélant le pKa à la demi-équivalence (pH = pKa), ce qu'un simple changement visuel de couleur d'indicateur ne peut fournir."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Synthèse : la classification des 3 grands types de titrages",
          "stepTheme": "Les 3 titrages",
          "stepBadge": "Panorama",
          "paragraphText": "Le programme officiel classe les dosages acido-basiques en 3 familles distinctes selon la force des espèces : 1° Acide fort par base forte (pHE = 7) ; 2° Acide faible par base forte (pHE > 7 basique) ; 3° Base faible par acide fort (pHE < 7 acide).",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p01_q7",
            "type": "mcq",
            "prompt": "Quelle est la valeur attendue du pH à l'équivalence (pHE) à 25 °C pour le dosage d'un acide fort par une base forte ?",
            "options": [
              "pHE = 7,0 (milieu neutre)",
              "pHE = 8,8 (milieu basique)",
              "pHE = 5,2 (milieu acide)",
              "pHE = 14,0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Lors d'un titrage fort-fort, les ions formés sont indifférents (ex : Na+ et Cl-) : la solution finale à l'équivalence est de l'eau pure salée dont le pH est neutre (pHE = 7,0 à 25 °C)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p01_q1",
          "type": "mcq",
          "prompt": "Quel est l'objectif premier de la réalisation d'un dosage acido-basique au laboratoire ?",
          "options": [
            "Déterminer la concentration molaire inconnue d'un acide ou d'une base dans une solution",
            "Changer la couleur du liquide pour fabriquer une peinture",
            "Tester la résistance mécanique de la burette",
            "Refroidir le mélange réactionnel"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le but universel d'un titrage volumétrique quantitatif est la détermination exacte de la concentration d'un soluté dans une prise d'essai."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p01_q2",
          "type": "mcq",
          "prompt": "Pourquoi une réaction équilibrée très lente (comme l'estérification d'un alcool par un acide carboxylique) ne peut-elle PAS servir de support à un dosage direct ?",
          "options": [
            "Parce qu'elle n'est ni rapide (nécessite des heures) ni totale (rendement limité à 67 %), empêchant de repérer une équivalence stœchiométrique nette.",
            "Parce qu'elle ne contient pas d'atomes d'oxygène.",
            "Parce qu'elle est toujours explosive.",
            "Parce que les esters sont incolores."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un dosage exige un avancement instantané et intégral (100 %) à chaque goutte ajoutée pour que la composition du milieu corresponde rigoureusement aux quantités introduites."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p01_q3",
          "type": "mcq",
          "prompt": "Pour prélever exactement 20,0 mL d'une solution d'acide chlorhydrique à doser, quel instrument doit-on impérativement utiliser ?",
          "options": [
            "Une pipette jaugée de 20 mL munie d'une propipette",
            "Une éprouvette graduée de 20 mL",
            "Un bécher gradué de 50 mL",
            "Un compte-gouttes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seule la pipette jaugée (verrerie à trait de jauge calibrée à 20 °C) assure une tolérance inférieure à 0,03 mL, indispensable à la précision analytique."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p01_q4",
          "type": "mcq",
          "prompt": "Un élève ajoute 40 mL d'eau distillée dans son bécher contenant déjà les 10 mL d'acide à doser afin de recouvrir le bulbe de son électrode. Quelle conséquence cet ajout d'eau a-t-il sur le volume équivalent VBE versé à la burette ?",
          "options": [
            "Aucune conséquence : le volume équivalent VBE reste strictement identique car la quantité de matière nA introduite n'a pas varié.",
            "Le volume VBE est multiplié par 5.",
            "Le volume VBE est divisé par 4.",
            "L'équivalence ne peut plus être atteinte."
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'équivalence dépend exclusivement de la quantité de matière nA = CA · VA de soluté apportée initialement. L'eau distillée n'apporte aucun acide : nA reste constant, donc VBE = nA / CB ne change pas."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p01_q5",
          "type": "mcq",
          "prompt": "Que caractérise rigoureusement le point d'équivalence acido-basique d'un dosage ?",
          "options": [
            "L'état où les quantités de matière d'acide et de base ajoutées sont dans les proportions stœchiométriques de l'équation-bilan (changement de réactif limitant)",
            "Le moment où le pH est obligatoirement égal à 7,0 dans tous les dosages",
            "Le moment où la burette est totalement vide",
            "L'apparition de bulles de gaz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'équivalence est définie par la stœchiométrie : avant l'équivalence, le réactif titrant est limitant ; après l'équivalence, le réactif titré est consommé et le titrant devient en excès."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p01_q6",
          "type": "mcq",
          "prompt": "Quel est l'avantage exclusif du suivi pH-métrique par rapport à un dosage colorimétrique à indicateur coloré ?",
          "options": [
            "Il permet de déterminer graphiquement la valeur du pKa du couple faible dosé grâce au point de demi-équivalence.",
            "Il ne nécessite aucune burette.",
            "Il fonctionne sans aucune solution titrante.",
            "Il donne un résultat sans faire aucun calcul."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le tracé de la courbe pH = f(V) donne accès à la courbe complète, révélant le pKa à la demi-équivalence (pH = pKa), ce qu'un simple changement visuel de couleur d'indicateur ne peut fournir."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p01_q7",
          "type": "mcq",
          "prompt": "Quelle est la valeur attendue du pH à l'équivalence (pHE) à 25 °C pour le dosage d'un acide fort par une base forte ?",
          "options": [
            "pHE = 7,0 (milieu neutre)",
            "pHE = 8,8 (milieu basique)",
            "pHE = 5,2 (milieu acide)",
            "pHE = 14,0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lors d'un titrage fort-fort, les ions formés sont indifférents (ex : Na+ et Cl-) : la solution finale à l'équivalence est de l'eau pure salée dont le pH est neutre (pHE = 7,0 à 25 °C)."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p02",
      "order": 2,
      "title": "Titrage d'un acide fort par une base forte (HCl par NaOH)",
      "summary": "Réaction support H3O+ + OH- -> 2 H2O (exothermique et totale), tracé de la courbe pH = f(Vb) à trois parties et un seul point d'inflexion E, détermination de E par les tangentes parallèles, neutralité pHE = 7,0 et choix du BBT.",
      "conceptExplanation": "1. Réaction chimique du dosage :\nOn dose un volume VA d'acide chlorhydrique (H3O+ + Cl-) de concentration CA inconnue par une solution de soude (Na+ + OH-) de concentration CB connue.\nL'équation-bilan est la réaction de neutralisation acido-basique fondamentale :\nH3O+ + OH- -> 2 H2O.\nCaractéristiques : réaction fortement exothermique (élévation mesurable de température de 20 °C à 34 °C) et TOTALE (K = 1 / Ke = 10^14 à 25 °C).\n\n2. Allure et analyse de la courbe pH = f(Vb) :\nLa courbe de titrage présente 3 parties distinctes et un unique point d'inflexion E :\n- 1ère partie (0 <= Vb < VbE) : le pH croît très lentement. La courbe est quasi-rectiligne de très faible pente, avec une concavité tournée vers le haut.\n- 2ème partie (au voisinage immédiat de VbE) : saut de pH spectaculaire et vertical (de pH ≈ 3,5 à pH ≈ 10,5 pour 1 mL versé !). La courbe change de concavité et présente son point d'inflexion unique E.\n- 3ème partie (Vb > VbE) : après l'équivalence, la base forte est en excès. Le pH varie très peu et tend asymptotiquement vers la valeur limite pH = 14 + log CB, avec une concavité tournée vers le bas.\n\n3. Le point d'équivalence E :\n- Déterminé graphiquement par la méthode des tangentes parallèles (ou le pic de dpH/dV).\n- Coordonnées : VbE (volume lu à l'abscisse de E) et pHE = 7,0 à 25 °C.\nÀ l'équivalence, la solution contient les ions Na+, Cl- et de l'eau : comme Cl- et Na+ sont indifférents, [H3O+] = [OH-] = √Ke = 10^-7 mol/L, ce qui démontre rigoureusement pHE = 7,0.\n\n4. Relation stœchiométrique et calcul de CA :\nCA · VA = CB · VbE => CA = (CB · VbE) / VA.\n\n5. Choix de l'indicateur coloré : le Bleu de bromothymol (BBT) dont la zone de virage [6,0 - 7,6] entoure symétriquement pHE = 7,0 (virage au vert à l'équivalence).",
      "keyRule": "Dosage fort-fort : la courbe présente 3 parties et 1 seul point d'inflexion E. Le pH à l'équivalence est rigoureusement NEUTRE : pHE = 7,0 à 25 °C. L'indicateur idéal est le BBT.",
      "formulas": [
        {
          "name": "Équation-bilan fort-fort",
          "formula": "\\mathrm{H_3O^+} + \\mathrm{OH^-} \\longrightarrow 2\\,\\mathrm{H_2O}",
          "note": "Constante K = 1/Ke = 10^14 : totale et exothermique"
        },
        {
          "name": "Équivalence stœchiométrique",
          "formula": "C_A \\cdot V_A = C_B \\cdot V_{bE} \\iff C_A = \\frac{C_B \\cdot V_{bE}}{V_A}",
          "note": "pHE = 7,0 à 25 °C"
        }
      ],
      "workedExample": {
        "title": "Exploitation d'un titrage d'acide chlorhydrique par la soude",
        "statement": "On dose VA = 20,0 mL d'acide chlorhydrique par de la soude à CB = 0,010 mol/L. La méthode des tangentes parallèles donne pour le point d'équivalence E : VbE = 20,0 mL et pHE = 7,0. Détermine la concentration CA de l'acide et la concentration en ions chlorure à l'équivalence.",
        "methodSteps": [
          "Étape 1 : Calculer CA : CA = (CB · VbE) / VA = (0,010 mol/L × 20,0 mL) / 20,0 mL = 0,010 mol/L (1,0×10⁻² mol/L).",
          "Étape 2 : Volume total du mélange à l'équivalence : V_tot = VA + VbE = 20,0 + 20,0 = 40,0 mL.",
          "Étape 3 : Calculer [Cl-] à l'équivalence : les ions Cl- sont spectateurs : n(Cl-) = CA · VA = 0,010 × 0,020 = 2,0×10⁻⁴ mol. [Cl-] = (2,0×10⁻⁴ mol) / 0,040 L = 5,0×10⁻³ mol/L.",
          "Étape 4 : Vérifier l'électroneutralité : [Na+] = [Cl-] = 5,0×10⁻³ mol/L et [H3O+] = [OH-] = 10⁻⁷ mol/L => pH = 7,0."
        ],
        "conclusion": "CA = 1,0×10⁻² mol/L et la solution obtenue à l'équivalence est une solution neutre de NaCl à 5,0×10⁻³ mol/L."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Allure et caractéristiques de la courbe de titrage acide fort par base forte",
        "tableData": {
          "headers": [
            "Phase du dosage",
            "Intervalle de volume Vb",
            "Évolution du pH",
            "Concavité",
            "Espèces dominantes"
          ],
          "rows": [
            [
              "Avant équivalence",
              "0 <= Vb < 19 mL",
              "Variation lente de pH 2 à 3,5",
              "Tournée vers le haut",
              "H3O+ en excès, Cl-, Na+"
            ],
            [
              "Saut de pH",
              "19 mL <= Vb <= 21 mL",
              "Saut abrupt vertical de 4 à 10",
              "Changement de concavité (point E)",
              "Équivalence : Na+, Cl-, H2O (pHE = 7)"
            ],
            [
              "Après équivalence",
              "Vb > 21 mL",
              "Palier asymptotique",
              "Tournée vers le bas",
              "OH- en excès, Na+, Cl-"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Caractère exothermique et total de la réaction fort-fort",
          "stepTheme": "Thermodynamique",
          "stepBadge": "Réaction exothermique",
          "paragraphText": "La réaction H3O+ + OH- -> 2 H2O dégage une quantité considérable de chaleur (enthalpie de neutralisation ΔH° ≈ -57 kJ/mol). Lors du mélange de solutions concentrées, la température s'élève nettement de 20 °C à plus de 34 °C.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p02_q1",
            "type": "mcq",
            "prompt": "Que constate-t-on sur un thermomètre immergé lors du mélange rapide de 20 mL de HCl à 1 mol/L et 20 mL de NaOH à 1 mol/L ?",
            "options": [
              "La température augmente nettement de plus de 10 °C car la réaction de neutralisation est fortement exothermique.",
              "La température baisse jusqu'à congélation de l'eau.",
              "La température reste rigoureusement constante.",
              "Le thermomètre se dissout dans l'acide."
            ],
            "correctAnswerIndex": 0,
            "explanation": "La réaction entre l'ion oxonium et l'ion hydroxyde libère 57,4 kilojoules par mole d'eau formée : c'est une réaction fortement exothermique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Structure en trois parties de la courbe de titrage fort-fort",
          "stepTheme": "Courbe de dosage",
          "stepBadge": "Trois parties",
          "paragraphText": "La courbe pH = f(Vb) d'un acide fort par une base forte comporte trois parties : 1° Une première branche quasi rectiligne de pente faible ; 2° Un saut de pH vertical très étendu ; 3° Une asymptote horizontale d'équation pH = 14 + log CB.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p02_q2",
            "type": "mcq",
            "prompt": "Combien de points d'inflexion présente la courbe de dosage pH-métrique d'un acide fort par une base forte ?",
            "options": [
              "Un seul point d'inflexion (le point d'équivalence E)",
              "Deux points d'inflexion",
              "Trois points d'inflexion",
              "Aucun point d'inflexion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Contrairement au titrage d'un acide faible qui en possède deux, la courbe de titrage d'un acide fort par une base forte ne change de concavité qu'une seule fois, au centre de son saut de pH : elle ne possède donc qu'un unique point d'inflexion E."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La méthode des tangentes parallèles",
          "stepTheme": "Méthode des tangentes",
          "stepBadge": "Tracé graphique",
          "paragraphText": "Pour déterminer E graphiquement : 1° Tracer deux tangentes à la courbe parallèles entre elles de part et d'autre du saut de pH ; 2° Tracer une droite perpendiculaire commune à ces deux tangentes ; 3° Déterminer le milieu de ce segment perpendiculaire ; 4° Tracer la parallèle médiane : son intersection avec la courbe est le point d'équivalence E.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p02_q3",
            "type": "mcq",
            "prompt": "Dans la méthode des tangentes parallèles appliquée à une courbe pH = f(Vb), où se situe précisément le point d'équivalence E ?",
            "options": [
              "À l'intersection de la courbe de titrage avec la droite équidistante et parallèle aux deux tangentes",
              "Au point le plus bas de la courbe",
              "Au sommet de la burette",
              "À l'origine du repère (0, 0)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La méthode géométrique des tangentes repose sur la symétrie centrale du saut de pH : la droite médiane parallèle équidistante coupe la courbe exactement en son point d'inflexion E."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Démonstration de la neutralité stricte à l'équivalence (pHE = 7,0)",
          "stepTheme": "pH à l'équivalence",
          "stepBadge": "pHE = 7,0 à 25 °C",
          "paragraphText": "À l'équivalence, la totalité des ions H3O+ apportés par HCl a réagi avec les ions OH- apportés par NaOH. La solution ne contient que les ions Na+ et Cl- qui sont des ions spectateurs totalement indifférents : la neutralité de l'eau impose [H3O+] = [OH-] = 10^-7 mol/L, d'où pHE = 7,0 à 25 °C.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p02_q4",
            "type": "mcq",
            "prompt": "Pourquoi le pH à l'équivalence du dosage de l'acide chlorhydrique par la soude à 25 °C est-il rigoureusement égal à 7,0 ?",
            "options": [
              "Parce que les ions spectateurs Na+ et Cl- formés n'ont aucune propriété acido-basique dans l'eau : la solution résultante est une solution neutre de NaCl.",
              "Parce que le volume de soude est égal au volume d'acide.",
              "Parce que le sel précipite au fond du récipient.",
              "Parce que la soude détruit le pH-mètre."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Na+ est l'acide conjugué d'une base forte et Cl- est la base conjuguée d'un acide fort : tous deux sont des ions indifférents inertes vis-à-vis de l'eau. Seule subsiste l'autoprotolyse de l'eau pure, d'où pH = 7,0."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Choix de l'indicateur coloré : le Bleu de bromothymol (BBT)",
          "stepTheme": "Indicateur coloré",
          "stepBadge": "BBT approprié",
          "paragraphText": "Le bleu de bromothymol a une zone de virage s'étendant de pH 6,0 à 7,6. Le pH à l'équivalence (7,0) étant compris au centre de cette zone, le passage du jaune acide au vert franc (teinte sensible) correspond exactement au point d'équivalence stœchiométrique.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p02_q5",
            "type": "mcq",
            "prompt": "Quelle couleur prend le BBT à l'instant précis de l'équivalence lors du titrage de HCl par NaOH ?",
            "options": [
              "Verte (teinte sensible)",
              "Jaune pur",
              "Bleu intense",
              "Incolore"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À pHE = 7,0, le BBT est à sa teinte sensible verte, intermédiaire parfaite entre la forme acide jaune et la forme basique bleue."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Influence de la concentration initiale sur le saut de pH",
          "stepTheme": "Concentration et saut",
          "stepBadge": "Amplitude du saut",
          "paragraphText": "Plus les solutions d'acide et de base sont concentrées, plus le saut de pH à l'équivalence est étendu en ordonnée. Pour C = 0,1 mol/L, le saut s'étend de pH 3,5 à 10,5 ; pour C = 0,001 mol/L, le saut ne s'étend plus que de pH 5,5 à 8,5.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p02_q6",
            "type": "mcq",
            "prompt": "Comment varie l'amplitude du saut de pH lorsque la concentration des solutions dosées augmente ?",
            "options": [
              "Le saut de pH devient beaucoup plus abrupt et plus large en ordonnée",
              "Le saut de pH diminue et disparaît",
              "Le saut de pH reste rigoureusement identique",
              "Le point d'équivalence se déplace à pH 14"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une concentration plus élevée abaisse le pH initial de l'acide fort et relève le palier asymptotique basique final, augmentant la hauteur totale du saut vertical à l'équivalence."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Synthèse : bilan du dosage fort-fort",
          "stepTheme": "Bilan titrage fort-fort",
          "stepBadge": "Bilan",
          "paragraphText": "Le dosage fort-fort est la référence de la titrimétrie : réaction totale exothermique, symétrie parfaite du saut de pH, équivalence neutre pHE = 7,0 et repérage au BBT sans distorsion systématique.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p02_q7",
            "type": "mcq",
            "prompt": "On dose 10 mL d'acide chlorhydrique à Ca inconnue par de la soude à Cb = 0,05 mol/L. L'équivalence est obtenue pour VbE = 14,0 mL. Quelle est la concentration Ca ?",
            "options": [
              "Ca = 0,070 mol/L",
              "Ca = 0,035 mol/L",
              "Ca = 0,14 mol/L",
              "Ca = 0,050 mol/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ca = (Cb · VbE) / Va = (0,05 mol/L × 14,0 mL) / 10,0 mL = 0,070 mol/L."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p02_q1",
          "type": "mcq",
          "prompt": "Que constate-t-on sur un thermomètre immergé lors du mélange rapide de 20 mL de HCl à 1 mol/L et 20 mL de NaOH à 1 mol/L ?",
          "options": [
            "La température augmente nettement de plus de 10 °C car la réaction de neutralisation est fortement exothermique.",
            "La température baisse jusqu'à congélation de l'eau.",
            "La température reste rigoureusement constante.",
            "Le thermomètre se dissout dans l'acide."
          ],
          "correctAnswerIndex": 0,
          "explanation": "La réaction entre l'ion oxonium et l'ion hydroxyde libère 57,4 kilojoules par mole d'eau formée : c'est une réaction fortement exothermique."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p02_q2",
          "type": "mcq",
          "prompt": "Combien de points d'inflexion présente la courbe de dosage pH-métrique d'un acide fort par une base forte ?",
          "options": [
            "Un seul point d'inflexion (le point d'équivalence E)",
            "Deux points d'inflexion",
            "Trois points d'inflexion",
            "Aucun point d'inflexion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Contrairement au titrage d'un acide faible qui en possède deux, la courbe de titrage d'un acide fort par une base forte ne change de concavité qu'une seule fois, au centre de son saut de pH : elle ne possède donc qu'un unique point d'inflexion E."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p02_q3",
          "type": "mcq",
          "prompt": "Dans la méthode des tangentes parallèles appliquée à une courbe pH = f(Vb), où se situe précisément le point d'équivalence E ?",
          "options": [
            "À l'intersection de la courbe de titrage avec la droite équidistante et parallèle aux deux tangentes",
            "Au point le plus bas de la courbe",
            "Au sommet de la burette",
            "À l'origine du repère (0, 0)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La méthode géométrique des tangentes repose sur la symétrie centrale du saut de pH : la droite médiane parallèle équidistante coupe la courbe exactement en son point d'inflexion E."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p02_q4",
          "type": "mcq",
          "prompt": "Pourquoi le pH à l'équivalence du dosage de l'acide chlorhydrique par la soude à 25 °C est-il rigoureusement égal à 7,0 ?",
          "options": [
            "Parce que les ions spectateurs Na+ et Cl- formés n'ont aucune propriété acido-basique dans l'eau : la solution résultante est une solution neutre de NaCl.",
            "Parce que le volume de soude est égal au volume d'acide.",
            "Parce que le sel précipite au fond du récipient.",
            "Parce que la soude détruit le pH-mètre."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Na+ est l'acide conjugué d'une base forte et Cl- est la base conjuguée d'un acide fort : tous deux sont des ions indifférents inertes vis-à-vis de l'eau. Seule subsiste l'autoprotolyse de l'eau pure, d'où pH = 7,0."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p02_q5",
          "type": "mcq",
          "prompt": "Quelle couleur prend le BBT à l'instant précis de l'équivalence lors du titrage de HCl par NaOH ?",
          "options": [
            "Verte (teinte sensible)",
            "Jaune pur",
            "Bleu intense",
            "Incolore"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À pHE = 7,0, le BBT est à sa teinte sensible verte, intermédiaire parfaite entre la forme acide jaune et la forme basique bleue."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p02_q6",
          "type": "mcq",
          "prompt": "Comment varie l'amplitude du saut de pH lorsque la concentration des solutions dosées augmente ?",
          "options": [
            "Le saut de pH devient beaucoup plus abrupt et plus large en ordonnée",
            "Le saut de pH diminue et disparaît",
            "Le saut de pH reste rigoureusement identique",
            "Le point d'équivalence se déplace à pH 14"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une concentration plus élevée abaisse le pH initial de l'acide fort et relève le palier asymptotique basique final, augmentant la hauteur totale du saut vertical à l'équivalence."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p02_q7",
          "type": "mcq",
          "prompt": "On dose 10 mL d'acide chlorhydrique à Ca inconnue par de la soude à Cb = 0,05 mol/L. L'équivalence est obtenue pour VbE = 14,0 mL. Quelle est la concentration Ca ?",
          "options": [
            "Ca = 0,070 mol/L",
            "Ca = 0,035 mol/L",
            "Ca = 0,14 mol/L",
            "Ca = 0,050 mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ca = (Cb · VbE) / Va = (0,05 mol/L × 14,0 mL) / 10,0 mL = 0,070 mol/L."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p03",
      "order": 3,
      "title": "Titrage d'un acide faible par une base forte (CH3COOH par NaOH)",
      "summary": "Réaction support CH3COOH + OH- -> CH3COO- + H2O (totale), allure de la courbe à 4 parties et 2 points d'inflexion F (demi-équivalence pH = pKa) et E (équivalence basique pHE > 7), méthodes de dérivée et tangentes, et choix de la phénolphtaléine.",
      "conceptExplanation": "1. Réaction chimique du dosage :\nOn titre un volume VA d'acide éthanoïque CH3COOH par une solution de soude (Na+ + OH-) :\nCH3COOH + OH- -> CH3COO- + H2O.\nBien que CH3COOH soit un acide faible dans l'eau pure, sa réaction avec l'ion hydroxyde OH- (base très forte) est TOTALE et quantitative (K = Ka / Ke = 10^-4,8 / 10^-14 = 10^9,2 ≈ 1,6×10^9 >> 10^4).\n\n2. Allure et analyse de la courbe pH = f(Vb) (Les 4 parties) :\nLa courbe est ascendante et présente 4 parties et DEUX points d'inflexion F et E :\n- 1ère partie (0 <= Vb <= 4 mL) : le pH croît rapidement au tout début, avec une concavité tournée vers le bas.\n- 2ème partie (4 mL <= Vb <= 20 mL) : le pH varie très peu, avec une croissance quasi linéaire et changement de concavité. Elle contient le premier point d'inflexion F appelé POINT DE DEMI-ÉQUIVALENCE.\n- 3ème partie (au voisinage de VbE) : saut de pH étendu avec changement de concavité, contenant le second point d'inflexion E appelé POINT D'ÉQUIVALENCE.\n- 4ème partie (après VbE) : concavité tournée vers le bas tendant vers l'asymptote pH = 14 + log CB.\n\n3. Le point de demi-équivalence F (Propriété fondamentale) :\nÀ la demi-équivalence, on a versé exactement la moitié du volume équivalent : VbF = ½ VbE.\nLa moitié des molécules d'acide CH3COOH initiales a été transformée en ions éthanoates CH3COO- : [CH3COOH] = [CH3COO-].\nD'après la relation d'Henderson : pH = pKa + log([CH3COO-]/[CH3COOH]) = pKa + log(1) = pKa.\nLe pH mesuré au point de demi-équivalence F est RIGOUREUSEMENT ÉGAL AU pKa DU COUPLE (pH_F = 4,8 à 25 °C). C'est une méthode graphique directe pour mesurer le pKa.\n\n4. Le point d'équivalence E et son caractère BASIQUE :\nÀ l'équivalence : Ca · VA = Cb · VbE.\nToutes les molécules de CH3COOH ont réagi : la solution obtenue est une solution aqueuse d'éthanoate de sodium (CH3COO- + Na+). L'ion éthanoate étant une base faible qui réagit partiellement avec l'eau en libérant des ions OH-, LE pH À L'ÉQUIVALENCE EST OBLIGATOIREMENT BASIQUE (pHE > 7, typiquement pHE ≈ 8,7 à 25 °C).\n\n5. Choix de l'indicateur coloré :\nComme pHE ≈ 8,7 > 7, le BBT (qui vire entre 6,0 et 7,6) ne convient absolument pas car il virerait prématurément. L'indicateur approprié est la PHÉNOLPHTALÉINE dont la zone de virage [8,2 - 10,0] englobe parfaitement 8,7.",
      "keyRule": "Dosage acide faible - base forte : 4 parties et 2 points d'inflexion. À la demi-équivalence (Vb = ½ VbE) : pH = pKa. À l'équivalence : pHE > 7 (basique). Indicateur impératif : phénolphtaléine.",
      "formulas": [
        {
          "name": "Point de demi-équivalence",
          "formula": "V_{bF} = \\frac{1}{2} V_{bE} \\implies \\mathrm{pH}_F = \\mathrm{p}K_a",
          "note": "Permet la détermination graphique directe du pKa"
        },
        {
          "name": "Caractère basique à l'équivalence",
          "formula": "\\mathrm{pH}_E > 7 \\quad (\\text{ex : } \\mathrm{pH}_E \\approx 8{,}7)",
          "note": "Dû à l'hydrolyse basique de l'anion conjugué A-"
        }
      ],
      "workedExample": {
        "title": "Exploitation d'une courbe de titrage d'acide éthanoïque par la soude",
        "statement": "On titre VA = 20,0 mL d'acide éthanoïque par de la soude à CB = 0,10 mol/L. La courbe donne deux points d'inflexion remarquables : F (Vb = 11,1 mL ; pH = 4,8) et E (VbE = 22,2 mL ; pHE = 8,7). Détermine le pKa du couple et la concentration CA de l'acide.",
        "methodSteps": [
          "Étape 1 : Vérifier la condition de demi-équivalence : VbF = 11,1 mL = 22,2 / 2 = ½ VbE. La condition est exactement vérifiée.",
          "Étape 2 : Déduire le pKa du couple : à la demi-équivalence, pH = pKa, donc pKa = 4,8.",
          "Étape 3 : Calculer la concentration CA à l'équivalence : CA · VA = CB · VbE => CA = (0,10 mol/L × 22,2 mL) / 20,0 mL = 0,111 mol/L.",
          "Étape 4 : Justifier le caractère basique à l'équivalence : les espèces majoritaires sont Na+ et CH3COO- (base faible), d'où pHE = 8,7 > 7."
        ],
        "conclusion": "pKa = 4,8 ; CA = 0,111 mol/L et la solution est basique à l'équivalence."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Comparaison des deux points d'inflexion du titrage acide faible - base forte",
        "tableData": {
          "headers": [
            "Point d'inflexion",
            "Volume de soude versé",
            "Valeur du pH",
            "Composition chimique du milieu",
            "Rôle analytique"
          ],
          "rows": [
            [
              "F (Demi-équivalence)",
              "VbF = ½ VbE (ex : 11,1 mL)",
              "pHF = pKa = 4,8",
              "[CH3COOH] = [CH3COO-] (mélange équimolaire)",
              "Détermination graphique directe du pKa ; solution tampon"
            ],
            [
              "E (Équivalence)",
              "VbE (ex : 22,2 mL)",
              "pHE = 8,7 > 7 (basique)",
              "Ions CH3COO- et Na+ (éthanoate de sodium)",
              "Calcul de la concentration inconnue CA ; virage phénolphtaléine"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Totalité de la réaction d'un acide faible avec une base forte",
          "stepTheme": "Réaction de titrage",
          "stepBadge": "Réaction totale",
          "paragraphText": "Bien que l'acide éthanoïque ne réagisse que très peu avec l'eau, sa réaction avec l'ion hydroxyde OH- est totale et quantitative : CH3COOH + OH- -> CH3COO- + H2O (K = Ka/Ke ≈ 1,6×10^9).",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p03_q1",
            "type": "mcq",
            "prompt": "Pourquoi la réaction entre l'acide éthanoïque et la soude est-elle totale alors que l'acide éthanoïque est un acide faible ?",
            "options": [
              "Parce que l'ion OH- est une base très forte qui arrache quantitativement le proton de CH3COOH avec une constante d'équilibre K = Ka/Ke = 10^(9,2) >> 10^4.",
              "Parce que la soude est chauffée à 100 °C.",
              "Parce que l'acide éthanoïque se transforme en gaz.",
              "Parce que l'eau empêche la réaction inverse."
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'ion OH- possède une affinité protonique colossale. La constante d'équilibre K = Ka / Ke dépasse 1,6 milliard, garantissant une réaction quantitative à 100 %."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Structure à 4 parties et 2 points d'inflexion de la courbe",
          "stepTheme": "Allure de courbe",
          "stepBadge": "4 parties, 2 inflexions",
          "paragraphText": "La courbe de dosage d'un acide faible par une base forte comporte 4 parties distinctes, 3 concavités et DEUX points d'inflexion F (demi-équivalence) et E (équivalence).",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p03_q2",
            "type": "mcq",
            "prompt": "Quelle caractéristique géométrique distingue immédiatement la courbe de titrage d'un acide faible par une base forte de celle d'un acide fort ?",
            "options": [
              "Elle comporte deux points d'inflexion F et E (avec une concavité initiale tournée vers le bas) au lieu d'un seul point d'inflexion.",
              "Elle est rigoureusement plate.",
              "Elle est descendante au lieu d'être montante.",
              "Elle ne présente aucun saut de pH."
            ],
            "correctAnswerIndex": 0,
            "explanation": "La courbe présente une montée initiale avec concavité vers le bas, s'infléchit au point F (demi-équivalence), puis présente le saut d'inflexion E, soit 2 points d'inflexion au total."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Propriétés du point de demi-équivalence F : pH = pKa",
          "stepTheme": "Demi-équivalence",
          "stepBadge": "pH = pKa",
          "paragraphText": "Pour Vb = ½ VbE, la moitié de l'acide a été neutralisée en sa base conjuguée : [CH3COOH] = [CH3COO-]. En reportant dans l'équation d'Henderson, on a rigoureusement pH = pKa.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p03_q3",
            "type": "mcq",
            "prompt": "Si le volume équivalent d'un dosage d'acide faible vaut VbE = 24,0 mL et que le pH mesuré pour Vb = 12,0 mL vaut 4,75, que vaut le pKa du couple ?",
            "options": [
              "pKa = 4,75",
              "pKa = 9,50",
              "pKa = 2,37",
              "pKa = 7,00"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme 12,0 mL représente exactement la moitié de VbE (demi-équivalence), le pH mesuré est rigoureusement égal au pKa du couple : pKa = 4,75."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Nature basique du mélange à l'équivalence (pHE > 7)",
          "stepTheme": "Équivalence basique",
          "stepBadge": "pHE > 7",
          "paragraphText": "À l'équivalence, tout l'acide initial a été converti en son anion conjugué A-. Cet anion étant une base faible, il réagit partiellement avec l'eau pour libérer des ions OH- : la solution est donc basique à l'équivalence (pHE > 7).",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p03_q4",
            "type": "mcq",
            "prompt": "Pourquoi le pH à l'équivalence du dosage du vinaigre (acide éthanoïque) par la soude est-il de 8,8 et non de 7,0 ?",
            "options": [
              "Parce qu'à l'équivalence, la solution contient des ions éthanoates CH3COO- qui sont des bases faibles libérant des ions OH- au contact de l'eau.",
              "Parce que la soude a été ajoutée en excès.",
              "Parce que le vinaigre est toxique.",
              "Parce que la réaction n'était pas terminée."
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'espèce présente à l'équivalence est le sel éthanoate de sodium. L'anion éthanoate réagit avec l'eau selon CH3COO- + H2O <=> CH3COOH + OH-, produisant un pH alcalin supérieur à 7."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Choix impératif de la phénolphtaléine comme indicateur",
          "stepTheme": "Indicateur coloré",
          "stepBadge": "Phénolphtaléine",
          "paragraphText": "Puisque le pH à l'équivalence est basique (pHE ≈ 8,7), l'indicateur coloré convenable doit avoir une zone de virage basique : la phénolphtaléine (zone 8,2 - 10,0) vire de l'incolore au rose violacé exactement à l'équivalence.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p03_q5",
            "type": "mcq",
            "prompt": "Que se passerait-il si l'on utilisait de l'hélianthine (zone de virage 3,1 - 4,4) pour doser l'acide éthanoïque par la soude (pHE = 8,7) ?",
            "options": [
              "L'hélianthine virerait dès le tout début du dosage (bien avant d'avoir versé le tiers de VbE), conduisant à une valeur de concentration complètement fausse par défaut.",
              "Le dosage serait parfaitement exact.",
              "L'hélianthine virerait après l'équivalence.",
              "La solution exploserait."
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'hélianthine change de couleur dès pH 4,4, soit bien avant le saut de pH qui se situe autour de pH 8,7 : l'élève arrêterait son dosage prématurément avec une erreur dramatique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Détermination de l'équivalence par la méthode de la dérivée dpH/dV",
          "stepTheme": "Méthode de la dérivée",
          "stepBadge": "Pic de dérivée",
          "paragraphText": "Sur les pH-mètres informatisés, le logiciel calcule la dérivée instantanée dpH/dVb. La courbe de la dérivée présente un pic aigu très net dont le sommet correspond exactement à l'abscisse du volume équivalent VbE.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p03_q6",
            "type": "mcq",
            "prompt": "Sur le graphique informatisé de la dérivée dpH/dV en fonction de V, comment repère-t-on avec certitude le volume équivalent VbE ?",
            "options": [
              "Par l'abscisse du pic maximal (extremum) de la courbe dérivée",
              "Par le point où la dérivée s'annule",
              "Par l'ordonnée à l'origine",
              "Par la fin du graphique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le point d'inflexion de la courbe pH(V) correspond à la pente maximale de la tangente, ce qui se traduit par un pic (maximum) très pointu sur la courbe de la fonction dérivée dpH/dV."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Synthèse : le profil type du titrage acide faible - base forte",
          "stepTheme": "Bilan titrage",
          "stepBadge": "Maîtrise totale",
          "paragraphText": "Le titrage d'un acide faible par une base forte est le prototype des courbes à deux inflexions : demi-équivalence révélant le pKa, saut d'équivalence basique révélant Ca, et zone tampon intermédiaire résistante.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p03_q7",
            "type": "mcq",
            "prompt": "On titre 25,0 mL d'acide méthanoïque HCOOH par de la soude à Cb = 0,20 mol/L. Le pic de dérivée apparaît pour VbE = 15,0 mL. Quelle est la concentration molaire Ca de l'acide méthanoïque ?",
            "options": [
              "Ca = 0,12 mol/L",
              "Ca = 0,20 mol/L",
              "Ca = 0,060 mol/L",
              "Ca = 0,33 mol/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ca = (Cb · VbE) / Va = (0,20 mol/L × 15,0 mL) / 25,0 mL = 3,0 / 25,0 = 0,12 mol/L."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p03_q1",
          "type": "mcq",
          "prompt": "Pourquoi la réaction entre l'acide éthanoïque et la soude est-elle totale alors que l'acide éthanoïque est un acide faible ?",
          "options": [
            "Parce que l'ion OH- est une base très forte qui arrache quantitativement le proton de CH3COOH avec une constante d'équilibre K = Ka/Ke = 10^(9,2) >> 10^4.",
            "Parce que la soude est chauffée à 100 °C.",
            "Parce que l'acide éthanoïque se transforme en gaz.",
            "Parce que l'eau empêche la réaction inverse."
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ion OH- possède une affinité protonique colossale. La constante d'équilibre K = Ka / Ke dépasse 1,6 milliard, garantissant une réaction quantitative à 100 %."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p03_q2",
          "type": "mcq",
          "prompt": "Quelle caractéristique géométrique distingue immédiatement la courbe de titrage d'un acide faible par une base forte de celle d'un acide fort ?",
          "options": [
            "Elle comporte deux points d'inflexion F et E (avec une concavité initiale tournée vers le bas) au lieu d'un seul point d'inflexion.",
            "Elle est rigoureusement plate.",
            "Elle est descendante au lieu d'être montante.",
            "Elle ne présente aucun saut de pH."
          ],
          "correctAnswerIndex": 0,
          "explanation": "La courbe présente une montée initiale avec concavité vers le bas, s'infléchit au point F (demi-équivalence), puis présente le saut d'inflexion E, soit 2 points d'inflexion au total."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p03_q3",
          "type": "mcq",
          "prompt": "Si le volume équivalent d'un dosage d'acide faible vaut VbE = 24,0 mL et que le pH mesuré pour Vb = 12,0 mL vaut 4,75, que vaut le pKa du couple ?",
          "options": [
            "pKa = 4,75",
            "pKa = 9,50",
            "pKa = 2,37",
            "pKa = 7,00"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme 12,0 mL représente exactement la moitié de VbE (demi-équivalence), le pH mesuré est rigoureusement égal au pKa du couple : pKa = 4,75."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p03_q4",
          "type": "mcq",
          "prompt": "Pourquoi le pH à l'équivalence du dosage du vinaigre (acide éthanoïque) par la soude est-il de 8,8 et non de 7,0 ?",
          "options": [
            "Parce qu'à l'équivalence, la solution contient des ions éthanoates CH3COO- qui sont des bases faibles libérant des ions OH- au contact de l'eau.",
            "Parce que la soude a été ajoutée en excès.",
            "Parce que le vinaigre est toxique.",
            "Parce que la réaction n'était pas terminée."
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'espèce présente à l'équivalence est le sel éthanoate de sodium. L'anion éthanoate réagit avec l'eau selon CH3COO- + H2O <=> CH3COOH + OH-, produisant un pH alcalin supérieur à 7."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p03_q5",
          "type": "mcq",
          "prompt": "Que se passerait-il si l'on utilisait de l'hélianthine (zone de virage 3,1 - 4,4) pour doser l'acide éthanoïque par la soude (pHE = 8,7) ?",
          "options": [
            "L'hélianthine virerait dès le tout début du dosage (bien avant d'avoir versé le tiers de VbE), conduisant à une valeur de concentration complètement fausse par défaut.",
            "Le dosage serait parfaitement exact.",
            "L'hélianthine virerait après l'équivalence.",
            "La solution exploserait."
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'hélianthine change de couleur dès pH 4,4, soit bien avant le saut de pH qui se situe autour de pH 8,7 : l'élève arrêterait son dosage prématurément avec une erreur dramatique."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p03_q6",
          "type": "mcq",
          "prompt": "Sur le graphique informatisé de la dérivée dpH/dV en fonction de V, comment repère-t-on avec certitude le volume équivalent VbE ?",
          "options": [
            "Par l'abscisse du pic maximal (extremum) de la courbe dérivée",
            "Par le point où la dérivée s'annule",
            "Par l'ordonnée à l'origine",
            "Par la fin du graphique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le point d'inflexion de la courbe pH(V) correspond à la pente maximale de la tangente, ce qui se traduit par un pic (maximum) très pointu sur la courbe de la fonction dérivée dpH/dV."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p03_q7",
          "type": "mcq",
          "prompt": "On titre 25,0 mL d'acide méthanoïque HCOOH par de la soude à Cb = 0,20 mol/L. Le pic de dérivée apparaît pour VbE = 15,0 mL. Quelle est la concentration molaire Ca de l'acide méthanoïque ?",
          "options": [
            "Ca = 0,12 mol/L",
            "Ca = 0,20 mol/L",
            "Ca = 0,060 mol/L",
            "Ca = 0,33 mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ca = (Cb · VbE) / Va = (0,20 mol/L × 15,0 mL) / 25,0 mL = 3,0 / 25,0 = 0,12 mol/L."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p04",
      "order": 4,
      "title": "Titrage d'une base faible par un acide fort (NH3 par HCl)",
      "summary": "Réaction support B + H3O+ -> BH+ + H2O (totale), allure descendante à 4 parties et 2 points d'inflexion, demi-équivalence Va = ½ VaE (pH = pKa = 9,2), équivalence acide (pHE < 7) et choix du rouge de méthyle.",
      "conceptExplanation": "1. Réaction chimique du dosage :\nOn titre un volume VB d'une base faible (ex : ammoniac NH3 ou éthylamine C2H5NH2) de concentration CB inconnue par une solution d'acide fort (HCl : H3O+ + Cl-) de concentration CA connue.\nL'équation-bilan s'écrit :\nNH3 + H3O+ -> NH4+ + H2O  (ou B + H3O+ -> BH+ + H2O).\nCette réaction est totale et exothermique (K = 1 / Ka = 10^9,2 ≈ 1,6×10^9 >> 10^4).\n\n2. Allure de la courbe descendante pH = f(Va) :\nLa courbe est décroissante et présente 4 parties et DEUX points d'inflexion F et E :\n- pH initial basique (pH ≈ 11,1 pour NH3 à 0,1 mol/L).\n- 1ère partie : descente initiale rapide avec concavité vers le haut.\n- 2ème partie : zone de pente très faible (zone tampon) avec changement de concavité et point d'inflexion F appelé POINT DE DEMI-ÉQUIVALENCE.\n- 3ème partie : saut de pH abrupt descendant (de pH ≈ 7,5 à pH ≈ 3,5) avec le second point d'inflexion E appelé POINT D'ÉQUIVALENCE.\n- 4ème partie : palier acide asymptotique tendant vers pH = -log CA.\n\n3. Le point de demi-équivalence F :\nPour VaF = ½ VaE : la moitié de la base a été transformée en ion ammonium : [NH3] = [NH4+].\nLe pH à la demi-équivalence est rigoureusement égal au pKa du couple : pH_F = pKa(NH4+/NH3) = 9,2 à 25 °C.\n\n4. Le point d'équivalence E et son caractère ACIDE :\nÀ l'équivalence : CB · VB = CA · VaE.\nToutes les molécules de NH3 ont été protonées : le mélange final est une solution aqueuse de chlorure d'ammonium (NH4+ + Cl-). L'ion ammonium NH4+ étant un acide faible qui réagit partiellement avec l'eau en libérant des ions H3O+ (NH4+ + H2O <=> NH3 + H3O+), LE pH À L'ÉQUIVALENCE EST OBLIGATOIREMENT ACIDE (pHE < 7, typiquement pHE ≈ 5,2 à 5,4 à 25 °C).\n\n5. Choix de l'indicateur coloré :\nComme pHE ≈ 5,3 < 7, l'indicateur approprié est le ROUGE DE MÉTHYLE (zone de virage [4,2 - 6,2]) ou l'HÉLIANTHINE (zone [3,1 - 4,4]).",
      "keyRule": "Dosage base faible - acide fort : courbe descendante à 4 parties et 2 inflexions. À la demi-équivalence : pH = pKa. À l'équivalence : pHE < 7 (acide). Indicateur impératif : rouge de méthyle ou hélianthine.",
      "formulas": [
        {
          "name": "Équation-bilan base faible - acide fort",
          "formula": "\\mathrm{B} + \\mathrm{H_3O^+} \\longrightarrow \\mathrm{BH^+} + \\mathrm{H_2O}",
          "note": "Réaction quantitative totale"
        },
        {
          "name": "Caractère acide à l'équivalence",
          "formula": "\\mathrm{pH}_E < 7 \\quad (\\text{ex : } \\mathrm{pH}_E \\approx 5{,}2)",
          "note": "Dû à l'acidité faible du cation conjugué BH+"
        }
      ],
      "workedExample": {
        "title": "Titrage de l'ammoniac par l'acide chlorhydrique",
        "statement": "On introduit VB = 20,0 mL d'une solution d'ammoniac de concentration CB inconnue. On y ajoute une solution de HCl à CA = 0,14 mol/L. Le saut de pH donne un point d'équivalence E à VaE = 14,3 mL avec pHE = 5,4. Calcule la concentration CB et justifie le caractère acide de l'équivalence.",
        "methodSteps": [
          "Étape 1 : Écrire la réaction de titrage : NH3 + H3O+ -> NH4+ + H2O.",
          "Étape 2 : Relation à l'équivalence : n(NH3) = n(H3O+) => CB · VB = CA · VaE.",
          "Étape 3 : Calculer CB : CB = (CA · VaE) / VB = (0,14 mol/L × 14,3 mL) / 20,0 mL = 2,002 / 20,0 ≈ 0,10 mol/L.",
          "Étape 4 : Justifier pHE < 7 : à l'équivalence, il y a formation exclusive d'ions ammonium NH4+ et chlorure Cl-. L'ion NH4+ est un acide faible (NH4+ + H2O <=> NH3 + H3O+), ce qui acidifie le milieu à pHE = 5,4."
        ],
        "conclusion": "CB = 0,10 mol/L et la solution est acide à l'équivalence par présence d'ions ammonium."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Synthèse comparative des trois grandes familles de titrages acido-basiques",
        "tableData": {
          "headers": [
            "Type de dosage",
            "Réaction support",
            "Courbe pH = f(V)",
            "Nombre de points d'inflexion",
            "Nature du pH à l'équivalence",
            "Indicateur coloré approprié"
          ],
          "rows": [
            [
              "Acide fort par base forte",
              "H3O+ + OH- -> 2 H2O",
              "Ascendante (3 parties)",
              "1 seul point E",
              "Strictement neutre (pHE = 7,0)",
              "Bleu de bromothymol (BBT) [6,0 - 7,6]"
            ],
            [
              "Acide faible par base forte",
              "AH + OH- -> A- + H2O",
              "Ascendante (4 parties)",
              "2 points (F et E)",
              "Basique (pHE > 7, ex: 8,7)",
              "Phénolphtaléine [8,2 - 10,0]"
            ],
            [
              "Base faible par acide fort",
              "B + H3O+ -> BH+ + H2O",
              "Descendante (4 parties)",
              "2 points (F et E)",
              "Acide (pHE < 7, ex: 5,3)",
              "Rouge de méthyle [4,2 - 6,2] ou Hélianthine"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Principe du titrage d'une base faible par un acide fort",
          "stepTheme": "Titrage base faible",
          "stepBadge": "Réaction support",
          "paragraphText": "Lors du titrage d'une base faible B par un acide fort, les protons H3O+ versés sont captés intégralement par les molécules de base pour former l'acide conjugué BH+ : B + H3O+ -> BH+ + H2O.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p04_q1",
            "type": "mcq",
            "prompt": "Quelle est l'équation-bilan de la réaction de dosage de la méthylamine CH3NH2 par l'acide chlorhydrique ?",
            "options": [
              "CH3NH2 + H3O+ -> CH3NH3+ + H2O",
              "CH3NH2 + OH- -> CH3NH- + H2O",
              "CH3NH2 + H2O <=> CH3OH + NH3",
              "CH3NH2 + HCl -> CH4 + NH2Cl"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'acide fort apporte des ions H3O+ qui transfèrent quantitativement un proton au groupe amine de la méthylamine pour former l'ion méthylammonium CH3NH3+ et de l'eau."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Allure décroissante de la courbe de titrage",
          "stepTheme": "Allure de courbe",
          "stepBadge": "Courbe descendante",
          "paragraphText": "Comme on verse une solution acide sur une solution initiale basique, le pH diminue au cours de l'addition : la courbe pH = f(Va) est décroissante du pH initial basique (≈ 11) vers le palier acide final.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p04_q2",
            "type": "mcq",
            "prompt": "Quelle est l'allure générale de la courbe de dosage de l'ammoniac par l'acide chlorhydrique ?",
            "options": [
              "Une courbe descendante présentant 4 parties et deux points d'inflexion",
              "Une droite horizontale",
              "Une courbe ascendante à un seul palier",
              "Une parabole symétrique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'addition progressive d'acide fort fait chuter le pH depuis une valeur basique initiale, générant une courbe descendante à deux points d'inflexion (demi-équivalence et équivalence)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La demi-équivalence acide : pH = pKa",
          "stepTheme": "Demi-équivalence",
          "stepBadge": "pH_F = pKa",
          "paragraphText": "Au volume VaF = ½ VaE, la moitié de la base faible a été neutralisée en son cation conjugué : [B] = [BH+]. Le pH du mélange est alors rigoureusement égal au pKa du couple étudié.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p04_q3",
            "type": "mcq",
            "prompt": "Lors du dosage d'une solution d'éthylamine C2H5NH2 par HCl, l'équivalence est atteinte à VaE = 18,0 mL. Quelle est la signification du pH mesuré pour Va = 9,0 mL ?",
            "options": [
              "Il est exactement égal au pKa du couple C2H5NH3+ / C2H5NH2 (point de demi-équivalence F)",
              "Il est égal à 7,0",
              "Il est égal au pKe de l'eau",
              "Il est égal à 0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour Va = 9,0 mL (exactement la moitié de 18,0 mL), on se trouve au point de demi-équivalence F où [C2H5NH2] = [C2H5NH3+], ce qui donne pH = pKa = 10,7."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Pourquoi la solution est-elle acide à l'équivalence (pHE < 7) ?",
          "stepTheme": "Équivalence acide",
          "stepBadge": "pHE < 7",
          "paragraphText": "À l'équivalence, la solution contient les ions BH+ formés et les ions chlorure Cl-. Le cation BH+ étant un acide faible, il s'hydrolyse partiellement avec l'eau selon BH+ + H2O <=> B + H3O+, produisant un pH à l'équivalence inférieur à 7.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p04_q4",
            "type": "mcq",
            "prompt": "À l'équivalence du dosage de l'ammoniac par l'acide chlorhydrique, la solution obtenue est une solution de chlorure d'ammonium. Pourquoi son pH est-il de 5,4 ?",
            "options": [
              "Parce que l'ion ammonium NH4+ formé est un acide faible qui s'hydrolyse partiellement dans l'eau en libérant des ions H3O+.",
              "Parce que le sel précipite.",
              "Parce que l'acide chlorhydrique a été versé en excès.",
              "Parce que le chlore est un oxydant puissant."
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'ion ammonium NH4+ formé est l'acide conjugué de l'ammoniac : il libère partiellement des ions oxonium dans l'eau (NH4+ + H2O <=> NH3 + H3O+), conférant au milieu son caractère acide."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Sélection de l'indicateur coloré : le rouge de méthyle",
          "stepTheme": "Choix d'indicateur",
          "stepBadge": "Zone acide",
          "paragraphText": "Avec un pHE voisin de 5,3, le virage doit s'effectuer en zone acide. Le rouge de méthyle (zone de virage 4,2 - 6,2) englobe parfaitement pHE = 5,3 et vire nettement du jaune au rouge au point équivalent.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p04_q5",
            "type": "mcq",
            "prompt": "Parmi les indicateurs suivants, lequel convient parfaitement pour repérer visuellement l'équivalence du titrage d'une amine par l'acide chlorhydrique (pHE = 5,4) ?",
            "options": [
              "Le rouge de méthyle (zone de virage 4,2 – 6,2)",
              "La phénolphtaléine (zone de virage 8,2 – 10,0)",
              "Le bleu de thymol basique (zone de virage 8,0 – 9,6)",
              "Le jaune d'alizarine (zone de virage 10,1 – 12,1)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le rouge de méthyle est l'unique indicateur dont la zone de virage encadre précisément la valeur acide de l'équivalence pHE = 5,4."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Calcul de concentration et stœchiométrie",
          "stepTheme": "Calcul analytique",
          "stepBadge": "Stœchiométrie",
          "paragraphText": "À l'équivalence, la relation n_base = n_acide s'écrit CB · VB = CA · VaE. Elle permet d'extraire la concentration inconnue CB = (CA · VaE) / VB avec une grande exactitude.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p04_q6",
            "type": "mcq",
            "prompt": "On titre VB = 15,0 mL d'une solution de méthylamine par HCl à CA = 0,20 mol/L. Le volume à l'équivalence est VaE = 9,0 mL. Que vaut CB ?",
            "options": [
              "CB = 0,12 mol/L",
              "CB = 0,20 mol/L",
              "CB = 0,33 mol/L",
              "CB = 0,060 mol/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "CB = (CA · VaE) / VB = (0,20 mol/L × 9,0 mL) / 15,0 mL = 1,8 / 15,0 = 0,12 mol/L."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Synthèse : la règle d'or du pH à l'équivalence",
          "stepTheme": "Règle mnémotechnique",
          "stepBadge": "Nature à l'équivalence",
          "paragraphText": "Règle mnémotechnique incontournable : la nature du pH à l'équivalence est TOUJOURS dictée par l'espèce formée à l'équivalence. Fort-fort -> sel neutre (pH = 7) ; Faible-fort -> base faible conjuguée (pH > 7) ; Fort-faible -> acide faible conjugué (pH < 7).",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p04_q7",
            "type": "mcq",
            "prompt": "Si l'on dose l'acide benzoïque C6H5COOH (acide faible) par l'hydroxyde de potassium KOH (base forte), quelle sera la nature acido-basique de la solution obtenue à l'équivalence ?",
            "options": [
              "Basique (pH > 7) en raison de la présence d'ions benzoate C6H5COO-",
              "Neutre (pH = 7) car c'est un dosage complet",
              "Acide (pH < 7) car l'acide de départ est aromatique",
              "Inconnue sans mesure préalable"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À l'équivalence, il y a formation de benzoate de potassium : l'ion benzoate est la base conjuguée de l'acide benzoïque, conférant à la solution un pH basique (pH > 7)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p04_q1",
          "type": "mcq",
          "prompt": "Quelle est l'équation-bilan de la réaction de dosage de la méthylamine CH3NH2 par l'acide chlorhydrique ?",
          "options": [
            "CH3NH2 + H3O+ -> CH3NH3+ + H2O",
            "CH3NH2 + OH- -> CH3NH- + H2O",
            "CH3NH2 + H2O <=> CH3OH + NH3",
            "CH3NH2 + HCl -> CH4 + NH2Cl"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'acide fort apporte des ions H3O+ qui transfèrent quantitativement un proton au groupe amine de la méthylamine pour former l'ion méthylammonium CH3NH3+ et de l'eau."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p04_q2",
          "type": "mcq",
          "prompt": "Quelle est l'allure générale de la courbe de dosage de l'ammoniac par l'acide chlorhydrique ?",
          "options": [
            "Une courbe descendante présentant 4 parties et deux points d'inflexion",
            "Une droite horizontale",
            "Une courbe ascendante à un seul palier",
            "Une parabole symétrique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'addition progressive d'acide fort fait chuter le pH depuis une valeur basique initiale, générant une courbe descendante à deux points d'inflexion (demi-équivalence et équivalence)."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p04_q3",
          "type": "mcq",
          "prompt": "Lors du dosage d'une solution d'éthylamine C2H5NH2 par HCl, l'équivalence est atteinte à VaE = 18,0 mL. Quelle est la signification du pH mesuré pour Va = 9,0 mL ?",
          "options": [
            "Il est exactement égal au pKa du couple C2H5NH3+ / C2H5NH2 (point de demi-équivalence F)",
            "Il est égal à 7,0",
            "Il est égal au pKe de l'eau",
            "Il est égal à 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour Va = 9,0 mL (exactement la moitié de 18,0 mL), on se trouve au point de demi-équivalence F où [C2H5NH2] = [C2H5NH3+], ce qui donne pH = pKa = 10,7."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p04_q4",
          "type": "mcq",
          "prompt": "À l'équivalence du dosage de l'ammoniac par l'acide chlorhydrique, la solution obtenue est une solution de chlorure d'ammonium. Pourquoi son pH est-il de 5,4 ?",
          "options": [
            "Parce que l'ion ammonium NH4+ formé est un acide faible qui s'hydrolyse partiellement dans l'eau en libérant des ions H3O+.",
            "Parce que le sel précipite.",
            "Parce que l'acide chlorhydrique a été versé en excès.",
            "Parce que le chlore est un oxydant puissant."
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ion ammonium NH4+ formé est l'acide conjugué de l'ammoniac : il libère partiellement des ions oxonium dans l'eau (NH4+ + H2O <=> NH3 + H3O+), conférant au milieu son caractère acide."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p04_q5",
          "type": "mcq",
          "prompt": "Parmi les indicateurs suivants, lequel convient parfaitement pour repérer visuellement l'équivalence du titrage d'une amine par l'acide chlorhydrique (pHE = 5,4) ?",
          "options": [
            "Le rouge de méthyle (zone de virage 4,2 – 6,2)",
            "La phénolphtaléine (zone de virage 8,2 – 10,0)",
            "Le bleu de thymol basique (zone de virage 8,0 – 9,6)",
            "Le jaune d'alizarine (zone de virage 10,1 – 12,1)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le rouge de méthyle est l'unique indicateur dont la zone de virage encadre précisément la valeur acide de l'équivalence pHE = 5,4."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p04_q6",
          "type": "mcq",
          "prompt": "On titre VB = 15,0 mL d'une solution de méthylamine par HCl à CA = 0,20 mol/L. Le volume à l'équivalence est VaE = 9,0 mL. Que vaut CB ?",
          "options": [
            "CB = 0,12 mol/L",
            "CB = 0,20 mol/L",
            "CB = 0,33 mol/L",
            "CB = 0,060 mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "CB = (CA · VaE) / VB = (0,20 mol/L × 9,0 mL) / 15,0 mL = 1,8 / 15,0 = 0,12 mol/L."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p04_q7",
          "type": "mcq",
          "prompt": "Si l'on dose l'acide benzoïque C6H5COOH (acide faible) par l'hydroxyde de potassium KOH (base forte), quelle sera la nature acido-basique de la solution obtenue à l'équivalence ?",
          "options": [
            "Basique (pH > 7) en raison de la présence d'ions benzoate C6H5COO-",
            "Neutre (pH = 7) car c'est un dosage complet",
            "Acide (pH < 7) car l'acide de départ est aromatique",
            "Inconnue sans mesure préalable"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À l'équivalence, il y a formation de benzoate de potassium : l'ion benzoate est la base conjuguée de l'acide benzoïque, conférant à la solution un pH basique (pH > 7)."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p05",
      "order": 5,
      "title": "Solutions tampons : propriétés régulatrices, méthodes de préparation et rôle biologique",
      "summary": "Définition d'une solution tampon, composition (mélange équimolaire d'acide faible et de base conjuguée avec pH = pKa), résistance remarquable à la dilution modérée et aux ajouts modérés d'acide ou de base, les trois méthodes de préparation expérimentale et les applications vitales (tampons sanguins et enzymatiques).",
      "conceptExplanation": "1. Définition d'une solution tampon :\nUne solution tampon est une solution aqueuse dont le pH varie très peu (reste pratiquement constant) :\n- lors de l'addition d'une quantité modérée d'acide fort ;\n- lors de l'addition d'une quantité modérée de base forte ;\n- lors d'une dilution modérée avec de l'eau pure distillée.\n\n2. Composition chimique d'une solution tampon optimale :\nUne solution tampon est constituée d'un mélange équimolaire (ou de concentrations voisines) d'un acide faible AH et de sa base conjuguée A- :\n[Acide] = [Base conjuguée].\nD'après la relation d'Henderson-Hasselbalch :\npH = pKa + log([Base] / [Acide]) = pKa + log(1) = pKa.\nLe pH d'une solution tampon est donc égal au pKa du couple acido-basique mis en jeu.\n\n3. Pourquoi le pH reste-t-il quasi invariant ?\n- Si l'on ajoute des ions H3O+ : ils sont immédiatement captés et neutralisés par la base A- présente en réserve : A- + H3O+ -> AH + H2O.\n- Si l'on ajoute des ions OH- : ils sont immédiatement captés et neutralisés par l'acide AH présent en réserve : AH + OH- -> A- + H2O.\n- Si l'on dilue avec de l'eau : les concentrations de [A-] et de [AH] diminuent exactement du même facteur k, leur rapport [A-]/[AH] reste rigoureusement constant, donc pH = pKa + log([A-]/[AH]) ne varie pas !\n\n4. Les trois méthodes officielles de préparation d'une solution tampon :\n- Méthode 1 : Mélange d'un acide faible et d'une base forte jusqu'à la demi-équivalence :\nn(OH-) = ½ n(Acide initial) => Cb · Vb = ½ (Ca · Va).\n- Méthode 2 : Mélange d'une base faible et d'un acide fort jusqu'à la demi-équivalence :\nn(H3O+) = ½ n(Base initiale) => Ca · Va = ½ (Cb · Vb).\n- Méthode 3 : Mélange direct équimolaire d'un acide faible et de sa base conjuguée :\nn(Acide) = n(Base conjuguée) => Ca · Va = Cb · Vb.\n\n5. Rôle vital dans les organismes vivants et applications technologiques :\n- Dans le sang humain : le pH doit rester impérativement calé entre 7,35 et 7,45. Le métabolisme cellulaire produit en permanence des acides (acide lactique, acide carbonique). Sans le système tampon acide carbonique / hydrogénocarbonate (H2CO3 / HCO3-, pKa = 6,1) et les protéines plasmatiques, la moindre séance de sport ferait chuter le pH sanguin à des niveaux mortels !\n- En agronomie : stabilisation du pH des sols fertilisés.\n- Au laboratoire : étalonnage des pH-mètres (tampons étalons certifiés pH 4,00, 7,00, 10,00).",
      "keyRule": "Solution tampon = mélange équimolaire d'acide faible et de base conjuguée (pH = pKa). Elle résiste aux ajouts d'acide, de base et à la dilution. 3 méthodes : demi-équivalence acide faible + base forte, demi-équivalence base faible + acide fort, ou mélange direct équimolaire.",
      "formulas": [
        {
          "name": "pH d'une solution tampon équimolaire",
          "formula": "\\mathrm{pH} = \\mathrm{p}K_a \\quad (\\text{car } [\\mathrm{Acide}] = [\\mathrm{Base}])",
          "note": "Pouvoir tampon maximal lorsque [A] = [B]"
        },
        {
          "name": "Condition de préparation par demi-équivalence",
          "formula": "n_\\text{titrant} = \\frac{1}{2} n_\\text{titré initial} \\iff C_\\text{titrant} \\cdot V_\\text{titrant} = \\frac{1}{2} C_\\text{titré} \\cdot V_\\text{titré}",
          "note": "Permet de convertir exactement 50 % de l'espèce initiale"
        }
      ],
      "workedExample": {
        "title": "Calcul des volumes pour préparer une solution tampon par mélange direct",
        "statement": "On souhaite préparer un volume V = 1,00 L d'une solution tampon de pH = 3,8 à partir d'acide méthanoïque HCOOH (Ca = 0,10 mol/L, pKa = 3,8) et de méthanoate de sodium HCOONa (Cb = 0,30 mol/L). Calcule les volumes Va et Vb à mélanger.",
        "methodSteps": [
          "Étape 1 : Analyser le pH désiré : pH = 3,8 = pKa du couple. Il faut donc un mélange équimolaire : n(Acide) = n(Base) => Ca · Va = Cb · Vb.",
          "Étape 2 : Volume total souhaité : Va + Vb = V = 1,00 L = 1 000 mL => Vb = 1 000 - Va.",
          "Étape 3 : Égalité des quantités de matière : 0,10 · Va = 0,30 · (1 000 - Va) => 0,10 Va = 300 - 0,30 Va => 0,40 Va = 300.",
          "Étape 4 : Calcul numérique de Va : Va = 300 / 0,40 = 750 mL.",
          "Étape 5 : Déduire Vb : Vb = 1 000 - 750 = 250 mL."
        ],
        "conclusion": "On doit mélanger 750 mL de solution d'acide méthanoïque et 250 mL de solution de méthanoate de sodium pour obtenir 1,00 L de solution tampon à pH 3,8."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Les trois méthodes de préparation d'une solution tampon de pH = pKa",
        "tableData": {
          "headers": [
            "Méthode de préparation",
            "Réactifs mis en jeu",
            "Condition quantitative",
            "Équation de réaction"
          ],
          "rows": [
            [
              "1. Demi-équivalence acide faible + base forte",
              "Acide faible AH + soude NaOH",
              "n(OH-) = ½ n(AH initial) => Cb·Vb = ½ Ca·Va",
              "AH + OH- -> A- + H2O (50 % de AH transformé en A-)"
            ],
            [
              "2. Demi-équivalence base faible + acide fort",
              "Base faible B + acide fort HCl",
              "n(H3O+) = ½ n(B initial) => Ca·Va = ½ Cb·Vb",
              "B + H3O+ -> BH+ + H2O (50 % de B transformé en BH+)"
            ],
            [
              "3. Mélange direct équimolaire",
              "Acide faible AH + sel de sa base A-",
              "n(AH) = n(A-) => Ca·Va = Cb·Vb",
              "Simple mélange physique sans réaction chimique"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition rigoureuse d'une solution tampon",
          "stepTheme": "Définition tampon",
          "stepBadge": "Effet tampon",
          "paragraphText": "Une solution tampon est une solution aqueuse dont le pH varie très peu par addition d'une quantité modérée d'acide fort ou de base forte, ainsi que lors d'une dilution modérée avec de l'eau.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p05_q1",
            "type": "mcq",
            "prompt": "Un laborantin ajoute 2 gouttes d'acide chlorhydrique concentré dans 100 mL d'une solution tampon de pH = 4,80. Que devient la valeur du pH ?",
            "options": [
              "Le pH varie à peine et passe par exemple à 4,78 (variation infime)",
              "Le pH chute brutalement à 1,0",
              "Le pH monte à 12,0",
              "Le pH devient rigoureusement égal à 0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la propriété même d'un tampon : la base conjuguée présente dans la solution neutralise immédiatement les protons ajoutés, amortissant quasi totalement la variation de pH."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Invariance du pH lors de la dilution d'une solution tampon",
          "stepTheme": "Résistance à la dilution",
          "stepBadge": "Effet dilution nul",
          "paragraphText": "Dans une solution tampon, pH = pKa + log([B]/[A]). Lorsqu'on dilue par de l'eau, le volume total V augmente, mais les concentrations [B] = nB/V et [A] = nA/V sont divisées par le même facteur : leur rapport [B]/[A] = nB/nA reste rigoureusement invariant, maintenant le pH constant.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p05_q2",
            "type": "mcq",
            "prompt": "On dilue 5 fois une solution tampon d'acide acétique / acétate de pH = 4,80 en lui ajoutant de l'eau distillée. Que vaut le pH de la solution diluée ?",
            "options": [
              "pH ≈ 4,80 (il reste pratiquement inchangé)",
              "pH = 4,80 + log(5) ≈ 5,50",
              "pH = 4,80 / 5 = 0,96",
              "pH = 7,00"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dilution divise par 5 les concentrations de l'acide et de la base en même temps : le terme log([B]/[A]) ne change pas, le pH reste remarquablement stable à 4,80."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Méthode 1 : Préparation par demi-équivalence acide faible - base forte",
          "stepTheme": "Préparation tampon 1",
          "stepBadge": "Demi-équivalence",
          "paragraphText": "Pour préparer un tampon de pH = pKa à partir d'un acide faible, on verse un volume de base forte correspondant exactement à la demi-équivalence : Cb · Vb = ½ (Ca · Va), soit Vb = (Ca · Va) / (2 Cb).",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p05_q3",
            "type": "mcq",
            "prompt": "Quel volume Vb de soude à Cb = 0,50 mol/L doit-on ajouter à Va = 20,0 mL d'acide éthanoïque à Ca = 0,10 mol/L pour obtenir une solution tampon de pH = 4,8 ?",
            "options": [
              "Vb = 2,0 mL",
              "Vb = 4,0 mL",
              "Vb = 10,0 mL",
              "Vb = 1,0 mL"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À la demi-équivalence : Cb · Vb = ½ (Ca · Va) => Vb = (0,10 mol/L × 20,0 mL) / (2 × 0,50 mol/L) = 2,0 / 1,0 = 2,0 mL."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Méthode 2 : Préparation par demi-équivalence base faible - acide fort",
          "stepTheme": "Préparation tampon 2",
          "stepBadge": "Base + acide fort",
          "paragraphText": "Symétriquement, à partir d'un volume Vb de base faible à Cb, on ajoute un volume d'acide fort Va = (Cb · Vb) / (2 Ca) pour transformer la moitié de la base en son cation acide conjugué.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p05_q4",
            "type": "mcq",
            "prompt": "Quel volume Va d'acide chlorhydrique à Ca = 0,40 mol/L faut-il ajouter à Vb = 40,0 mL d'ammoniac à Cb = 0,20 mol/L pour obtenir une solution tampon de pH = 9,2 ?",
            "options": [
              "Va = 10,0 mL",
              "Va = 20,0 mL",
              "Va = 5,0 mL",
              "Va = 40,0 mL"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Va = (Cb · Vb) / (2 Ca) = (0,20 mol/L × 40,0 mL) / (2 × 0,40 mol/L) = 8,0 / 0,80 = 10,0 mL."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Méthode 3 : Préparation par mélange direct de deux solutions",
          "stepTheme": "Préparation tampon 3",
          "stepBadge": "Mélange direct",
          "paragraphText": "La méthode la plus directe consiste à mélanger un volume d'acide faible Va et un volume de sel de sa base conjuguée Vb tels que les quantités de matière soient égales : Ca · Va = Cb · Vb.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p05_q5",
            "type": "mcq",
            "prompt": "On mélange 50 mL d'acide méthanoïque à 0,20 mol/L avec 100 mL de méthanoate de sodium à 0,10 mol/L. Obtient-on une solution tampon ?",
            "options": [
              "Oui, car n(acide) = 0,20 × 0,050 = 0,010 mol et n(base) = 0,10 × 0,100 = 0,010 mol : les quantités sont rigoureusement égales (mélange équimolaire).",
              "Non, car les volumes sont différents.",
              "Non, car les concentrations ne sont pas identiques.",
              "Oui, mais de pH = 7,0."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seule compte l'égalité des quantités de matière nA = nB. Comme n(HCOOH) = n(HCOO-) = 0,010 mol, les concentrations dans le volume total sont égales, formant une excellente solution tampon de pH = pKa = 3,75."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le système tampon du sang humain : le couple H2CO3 / HCO3-",
          "stepTheme": "Physiologie",
          "stepBadge": "Tampon sanguin",
          "paragraphText": "Le sang humain est maintenu à pH = 7,40 grâce au couple acide carbonique / hydrogénocarbonate H2CO3 / HCO3- (pKa = 6,1). Le rapport [HCO3-] / [H2CO3] vaut 10^(7,4 - 6,1) = 10^(1,3) ≈ 20 : cette large réserve de base neutralise instantanément les acides métaboliques.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p05_q6",
            "type": "mcq",
            "prompt": "Pourquoi le métabolisme humain maintient-il dans le sang une réserve d'ions hydrogénocarbonates HCO3- vingt fois supérieure à celle de l'acide carbonique dissous H2CO3 ?",
            "options": [
              "Pour disposer d'un pouvoir tampon massif contre l'acidification permanente provoquée par les acides libérés par l'activité cellulaire (acide lactique, acide pyruvique).",
              "Parce que les reins détruisent l'acide carbonique.",
              "Pour colorer le sang en rouge.",
              "Pour remplacer l'hémoglobine."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le métabolisme produit continuellement des déchets acides : avoir une réserve basique d'ions HCO3- vingt fois plus grande que l'acide carbonique garantit une capacité tampon maximale contre l'acidose."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Synthèse : le pouvoir tampon maximal à pH = pKa",
          "stepTheme": "Pouvoir tampon",
          "stepBadge": "Efficacité maximale",
          "paragraphText": "Le pouvoir tampon mesure la résistance d'une solution aux variations de pH. Il est mathématiquement maximal lorsque la concentration en acide est rigoureusement égale à la concentration en base conjuguée, c'est-à-dire exactement au point où pH = pKa.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p05_q7",
            "type": "mcq",
            "prompt": "Pour préparer une solution tampon efficace à pH = 9,2, quel couple acide/base doit-on obligatoirement choisir parmi ceux disponibles au laboratoire ?",
            "options": [
              "Le couple ion ammonium / ammoniac NH4+ / NH3 dont le pKa vaut exactement 9,2",
              "Le couple acide acétique / acétate de pKa = 4,8",
              "Le couple acide formique / formiate de pKa = 3,8",
              "L'eau pure"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une solution tampon possède son efficacité maximale au voisinage de son pKa. Pour fixer un pH à 9,2, il faut choisir un couple dont le pKa est le plus proche possible de 9,2, soit le couple NH4+ / NH3."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p05_q1",
          "type": "mcq",
          "prompt": "Un laborantin ajoute 2 gouttes d'acide chlorhydrique concentré dans 100 mL d'une solution tampon de pH = 4,80. Que devient la valeur du pH ?",
          "options": [
            "Le pH varie à peine et passe par exemple à 4,78 (variation infime)",
            "Le pH chute brutalement à 1,0",
            "Le pH monte à 12,0",
            "Le pH devient rigoureusement égal à 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la propriété même d'un tampon : la base conjuguée présente dans la solution neutralise immédiatement les protons ajoutés, amortissant quasi totalement la variation de pH."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p05_q2",
          "type": "mcq",
          "prompt": "On dilue 5 fois une solution tampon d'acide acétique / acétate de pH = 4,80 en lui ajoutant de l'eau distillée. Que vaut le pH de la solution diluée ?",
          "options": [
            "pH ≈ 4,80 (il reste pratiquement inchangé)",
            "pH = 4,80 + log(5) ≈ 5,50",
            "pH = 4,80 / 5 = 0,96",
            "pH = 7,00"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dilution divise par 5 les concentrations de l'acide et de la base en même temps : le terme log([B]/[A]) ne change pas, le pH reste remarquablement stable à 4,80."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p05_q3",
          "type": "mcq",
          "prompt": "Quel volume Vb de soude à Cb = 0,50 mol/L doit-on ajouter à Va = 20,0 mL d'acide éthanoïque à Ca = 0,10 mol/L pour obtenir une solution tampon de pH = 4,8 ?",
          "options": [
            "Vb = 2,0 mL",
            "Vb = 4,0 mL",
            "Vb = 10,0 mL",
            "Vb = 1,0 mL"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À la demi-équivalence : Cb · Vb = ½ (Ca · Va) => Vb = (0,10 mol/L × 20,0 mL) / (2 × 0,50 mol/L) = 2,0 / 1,0 = 2,0 mL."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p05_q4",
          "type": "mcq",
          "prompt": "Quel volume Va d'acide chlorhydrique à Ca = 0,40 mol/L faut-il ajouter à Vb = 40,0 mL d'ammoniac à Cb = 0,20 mol/L pour obtenir une solution tampon de pH = 9,2 ?",
          "options": [
            "Va = 10,0 mL",
            "Va = 20,0 mL",
            "Va = 5,0 mL",
            "Va = 40,0 mL"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Va = (Cb · Vb) / (2 Ca) = (0,20 mol/L × 40,0 mL) / (2 × 0,40 mol/L) = 8,0 / 0,80 = 10,0 mL."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p05_q5",
          "type": "mcq",
          "prompt": "On mélange 50 mL d'acide méthanoïque à 0,20 mol/L avec 100 mL de méthanoate de sodium à 0,10 mol/L. Obtient-on une solution tampon ?",
          "options": [
            "Oui, car n(acide) = 0,20 × 0,050 = 0,010 mol et n(base) = 0,10 × 0,100 = 0,010 mol : les quantités sont rigoureusement égales (mélange équimolaire).",
            "Non, car les volumes sont différents.",
            "Non, car les concentrations ne sont pas identiques.",
            "Oui, mais de pH = 7,0."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seule compte l'égalité des quantités de matière nA = nB. Comme n(HCOOH) = n(HCOO-) = 0,010 mol, les concentrations dans le volume total sont égales, formant une excellente solution tampon de pH = pKa = 3,75."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p05_q6",
          "type": "mcq",
          "prompt": "Pourquoi le métabolisme humain maintient-il dans le sang une réserve d'ions hydrogénocarbonates HCO3- vingt fois supérieure à celle de l'acide carbonique dissous H2CO3 ?",
          "options": [
            "Pour disposer d'un pouvoir tampon massif contre l'acidification permanente provoquée par les acides libérés par l'activité cellulaire (acide lactique, acide pyruvique).",
            "Parce que les reins détruisent l'acide carbonique.",
            "Pour colorer le sang en rouge.",
            "Pour remplacer l'hémoglobine."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le métabolisme produit continuellement des déchets acides : avoir une réserve basique d'ions HCO3- vingt fois plus grande que l'acide carbonique garantit une capacité tampon maximale contre l'acidose."
        },
        {
          "id": "terminale_c_chimie_l11_dosages_solutions_tampons_p05_q7",
          "type": "mcq",
          "prompt": "Pour préparer une solution tampon efficace à pH = 9,2, quel couple acide/base doit-on obligatoirement choisir parmi ceux disponibles au laboratoire ?",
          "options": [
            "Le couple ion ammonium / ammoniac NH4+ / NH3 dont le pKa vaut exactement 9,2",
            "Le couple acide acétique / acétate de pKa = 4,8",
            "Le couple acide formique / formiate de pKa = 3,8",
            "L'eau pure"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une solution tampon possède son efficacité maximale au voisinage de son pKa. Pour fixer un pH à 9,2, il faut choisir un couple dont le pKa est le plus proche possible de 9,2, soit le couple NH4+ / NH3."
        }
      ]
    }
  ]
};
