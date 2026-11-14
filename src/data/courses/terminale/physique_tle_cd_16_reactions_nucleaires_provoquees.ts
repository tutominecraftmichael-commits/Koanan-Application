import type { CurriculumChapter } from '../../../lib/curriculum/types';

export const PHYSIQUE_TLE_CD_L16_REACTIONS_NUCLEAIRES_PROVOQUEES: CurriculumChapter = {
  "id": "terminale_d_physique_l16_reactions_nucleaires_provoquees",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [
    "terminale_c"
  ],
  "order": 16,
  "title": "Réactions nucléaires provoquées (Fission, fusion et bilans d'énergie)",
  "summary": "Étude complète et approfondie des réactions nucléaires provoquées : défaut de masse et énergie de liaison du noyau, énergie de liaison par nucléon et courbe d'Aston, mécanisme de la fission de l'uranium 235 et réactions en chaîne dans les réacteurs nucléaires, fusion thermonucléaire stellaire et projet ITER, calcul rigoureux des bilans énergétiques par les masses et par les énergies de liaison, applications industrielles et médicales, et analyse des risques radiologiques majeurs (Fukushima, Tchernobyl).",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "École Numérique de Côte d'Ivoire - Direction de la Pédagogie et de la Formation Continue (DPFC) - Niveau Terminale CDE",
  "points": [
    {
      "id": "pt1_defaut_masse_equivalence_einstein",
      "order": 1,
      "title": "Défaut de masse et équivalence masse-énergie d'Einstein",
      "summary": "Définition du défaut de masse Delta m = [Z.m_p + (A-Z).m_n - m_X], relation d'Einstein E₀ = m.c², unités atomiques (u, kg, MeV/c²) et calculs de conversion.",
      "conceptExplanation": "La mesure par spectrométrie de masse de haute précision révèle un résultat surprenant : la masse m_X d'un noyau atomique stable au repos est TOUJOURS strictement inférieure à la somme des masses de ses nucléons constitutifs pris isolément au repos. Cette différence positive de masse est appelée le défaut de masse du noyau (noté Delta m) : Delta m = [Z * m_p + (A - Z) * m_n] - m_X > 0. D'après la théorie de la relativité restreinte formulée par Albert Einstein en 1905, la masse et l'énergie sont deux formes équivalentes d'une même grandeur physique, reliées par la relation fondamentale E₀ = m * c², où c est la vitesse de la lumière dans le vide (c ≈ 3,00.10⁸ m/s). La disparition apparente de masse lors de l'assemblage des nucléons correspond exactement à l'énergie colossale libérée lors de la formation du noyau sous l'action de l'interaction forte. En physique nucléaire, les masses sont communément exprimées en unités de masse atomique (u) ou en MeV/c² : 1 u = 1,66054.10⁻²⁷ kg = 931,5 MeV/c².",
      "keyRule": "Défaut de masse : Delta m = [Z.m_p + (A-Z).m_n - m_X] > 0. La masse d'un noyau est toujours inférieure à celle de ses nucléons séparés. 1 u équivaut à 931,5 MeV/c².",
      "formulas": [
        {
          "name": "Défaut de masse du noyau",
          "formula": "\\Delta m = \\left[ Z m_p + (A - Z) m_n \\right] - m_X",
          "note": "Toujours strictement positif pour un noyau lié"
        },
        {
          "name": "Équivalence masse-énergie d'Einstein",
          "formula": "E_0 = m c^2 \\iff \\Delta E = \\Delta m \\cdot c^2",
          "note": "c = 3,00.10⁸ m/s"
        },
        {
          "name": "Conversion de l'unité de masse atomique",
          "formula": "1\\text{ u} = \\frac{1}{12}m(^{12}_6\\text{C}) \\approx 1{,}66054 \\times 10^{-27}\\text{ kg} = 931{,}5\\text{ MeV}/c^2",
          "note": "1 eV = 1,602.10⁻¹⁹ J ; 1 MeV = 1,602.10⁻¹³ J"
        }
      ],
      "workedExample": {
        "title": "Calcul du défaut de masse du noyau d'hélium 4 (particule alpha)",
        "statement": "On considère le noyau d'hélium 4 (^4_2He) de masse mesurée m_He = 4,00150 u. On donne : masse du proton isolé m_p = 1,00728 u ; masse du neutron isolé m_n = 1,00866 u ; 1 u = 1,6605.10⁻²⁷ kg = 931,5 MeV/c². 1. Déterminer la composition du noyau d'hélium 4. 2. Calculer la masse théorique des nucléons séparés en u. 3. En déduire le défaut de masse Delta m en u, en kg et son équivalent énergétique en MeV.",
        "methodSteps": [
          "Étape 1 : Identifier la composition du noyau ^4_2He : Z = 2 protons et N = A - Z = 4 - 2 = 2 neutrons.",
          "Étape 2 : Calculer la somme des masses des constituants séparés : m_constituants = 2 * m_p + 2 * m_n = 2 * (1,00728 u) + 2 * (1,00866 u) = 2,01456 u + 2,01732 u = 4,03188 u.",
          "Étape 3 : Calculer le défaut de masse : Delta m = m_constituants - m_He = 4,03188 u - 4,00150 u = 0,03038 u.",
          "Étape 4 : Convertir Delta m en kg : Delta m(kg) = 0,03038 * 1,6605.10⁻²⁷ kg ≈ 5,045.10⁻²⁹ kg.",
          "Étape 5 : Calculer l'équivalent énergétique : E = Delta m * 931,5 MeV/u = 0,03038 * 931,5 ≈ 28,30 MeV."
        ],
        "conclusion": "Le noyau d'hélium 4 présente un défaut de masse de 0,03038 u (5,05.10⁻²⁹ kg), libérant 28,3 MeV lors de sa formation."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Bilan des masses et équivalences d'énergie pour les nucléons et noyaux légers",
        "tableData": {
          "headers": [
            "Nucléide / Particule",
            "Composition (Z, N)",
            "Masse des constituants (u)",
            "Masse réelle du noyau (u)",
            "Défaut de masse Delta m (u)",
            "Équivalent énergétique (MeV)"
          ],
          "rows": [
            [
              "Deutérium (^2_1H)",
              "1 p + 1 n",
              "2,01594 u",
              "2,01355 u",
              "0,00239 u",
              "2,23 MeV"
            ],
            [
              "Tritium (^3_1H)",
              "1 p + 2 n",
              "3,02460 u",
              "3,01550 u",
              "0,00910 u",
              "8,48 MeV"
            ],
            [
              "Hélium 3 (^3_2He)",
              "2 p + 1 n",
              "3,02322 u",
              "3,01493 u",
              "0,00829 u",
              "7,72 MeV"
            ],
            [
              "Hélium 4 (^4_2He)",
              "2 p + 2 n",
              "4,03188 u",
              "4,00150 u",
              "0,03038 u",
              "28,30 MeV"
            ],
            [
              "Carbone 12 (^12_6C)",
              "6 p + 6 n",
              "12,09564 u",
              "11,99671 u",
              "0,09893 u",
              "92,16 MeV"
            ],
            [
              "Uranium 235 (^235_92U)",
              "92 p + 143 n",
              "236,90814 u",
              "235,04390 u",
              "1,86424 u",
              "1 736,54 MeV"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Mise en évidence expérimentale du défaut de masse",
          "stepTheme": "Défaut de masse",
          "stepBadge": "Définition",
          "paragraphText": "Lorsqu'on compare la masse réelle m_X d'un noyau mesurée au spectromètre de masse avec la somme des masses de ses nucléons individuels (Z protons et A-Z neutrons), on observe invariablement que m_X < Z.m_p + (A-Z).m_n. Le défaut de masse Delta m est la quantité positive définie par : Delta m = [Z.m_p + (A-Z).m_n] - m_X. Ce phénomène est universel pour tous les noyaux liés de l'univers : les nucléons 'perdent' de la masse lorsqu'ils se lient pour former un édifice nucléaire stable.",
          "exercise": {
            "id": "phys_tle_cd_16_p1_s1_qcm",
            "type": "mcq",
            "prompt": "On considère un noyau d'azote 14 (^{14}_7N) de masse m = 13,9992 u. Sachant que m_p = 1,0073 u et m_n = 1,0087 u, quelle est la valeur du défaut de masse Delta m ?",
            "options": [
              "0,0140 u",
              "0,1128 u",
              "1,0000 u",
              "14,1120 u"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Z = 7 protons et N = 14 - 7 = 7 neutrons. Masse des nucléons isolés : 7 * 1,0073 + 7 * 1,0087 = 7,0511 + 7,0609 = 14,1120 u. Le défaut de masse vaut Delta m = 14,1120 u - 13,9992 u = 0,1128 u."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Principe de relativité et équivalence masse-énergie d'Einstein",
          "stepTheme": "Relativité restreinte",
          "stepBadge": "Principe fondamental",
          "paragraphText": "Le postulat fondamental d'Albert Einstein énonce que toute masse au repos m possède une énergie propre équivalente E₀ = m.c². Réciproquement, toute variation d'énergie ΔE d'un système au repos s'accompagne obligatoirement d'une variation de masse Δm telle que ΔE = Δm.c². Lorsque des nucléons isolés se rassemblent pour former un noyau, ils libèrent une énergie colossale vers le milieu extérieur : leur énergie totale diminue de ΔE, ce qui se traduit par une perte équivalente de masse au repos Δm = ΔE / c².",
          "exercise": {
            "id": "phys_tle_cd_16_p1_s2_qcm",
            "type": "mcq",
            "prompt": "Si un système matériel au repos libère une énergie de 9,0.10¹³ Joules sous forme de chaleur et de rayonnement, quelle est la perte de masse subie par ce système ? (c = 3,00.10⁸ m/s)",
            "options": [
              "1,0 mg",
              "1,0 g",
              "1,0 kg",
              "300 kg"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Δm = ΔE / c² = 9,0.10¹³ J / (3,00.10⁸ m/s)² = 9,0.10¹³ / 9,0.10¹⁶ = 1,0.10⁻³ kg = 1,0 gramme."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Conversion systématique entre u, kg et MeV/c²",
          "stepTheme": "Unités de physique nucléaire",
          "stepBadge": "Méthode de calcul",
          "paragraphText": "En physique nucléaire, les calculs de masse et d'énergie s'effectuent par deux méthodes équivalentes : 1. En unités du Système International : convertir les masses en kg (1 u = 1,66054.10⁻²⁷ kg), appliquer E = Δm.c² (avec c = 3,00.10⁸ m/s) pour obtenir l'énergie en Joules, puis convertir en MeV en divisant par 1,602.10⁻¹³ J/MeV. 2. Par la constante d'équivalence directe : sachant que 1 u équivaut directement à 931,5 MeV/c², l'énergie en MeV s'obtient instantanément par la multiplication : E(MeV) = Δm(u) * 931,5 MeV/u. Cette seconde méthode évite les erreurs de puissances de 10.",
          "exercise": {
            "id": "phys_tle_cd_16_p1_s3_qcm",
            "type": "mcq",
            "prompt": "Un défaut de masse mesuré vaut Delta m = 0,200 u. Quelle est l'énergie libérée en mégaélectronvolts (MeV) ?",
            "options": [
              "46,58 MeV",
              "186,30 MeV",
              "931,50 MeV",
              "1 863,00 MeV"
            ],
            "correctAnswerIndex": 1,
            "explanation": "E = Delta m * 931,5 MeV/u = 0,200 * 931,5 = 186,30 MeV."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Piège entre masse atomique globale et masse du noyau nu",
          "stepTheme": "Rigueur métrologique",
          "stepBadge": "Attention piège",
          "paragraphText": "Les tables périodiques fournissent la masse des ATOMES NEUTRES (incluant le cortège des Z électrons périphériques) et non la masse du noyau nu seul : m(atome) = m(noyau) + Z.m_e - E_liaison_électronique/c². Pour un calcul rigoureux de défaut de masse avec les masses atomiques : Delta m = Z.m(^1_1H) + (A-Z).m_n - m(atome ^A_ZX). La masse des électrons se compense alors exactement avec celle présente dans l'atome d'hydrogène ^1_1H !",
          "exercise": {
            "id": "phys_tle_cd_16_p1_s4_qcm",
            "type": "mcq",
            "prompt": "Pourquoi peut-on utiliser la masse de l'atome d'hydrogène neutre m(^1_1H) à la place de la masse du proton nu m_p dans le calcul du défaut de masse à partir des masses atomiques neutres ?",
            "options": [
              "Parce que le proton et l'atome d'hydrogène ont exactement la même masse",
              "Parce que les Z électrons comptabilisés dans les Z atomes d'hydrogène compensent exactement les Z électrons du cortège de l'atome neutre ^A_ZX",
              "Parce que les électrons n'ont pas de masse",
              "Parce que l'atome d'hydrogène contient un neutron"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans l'expression [Z.m(^1_1H) + (A-Z).m_n] - m(atome), le terme Z.m(^1_1H) apporte Z protons et Z électrons, qui annulent exactement les Z électrons compris dans la masse atomique m(atome)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Ordre de grandeur comparé des énergies nucléaires et chimiques",
          "stepTheme": "Comparaison énergétique",
          "stepBadge": "Ordre de grandeur",
          "paragraphText": "Lors d'une réaction chimique de combustion (ex. combustion du carbone C + O₂ -> CO₂), le réarrangement des liaisons électroniques libère environ 4 eV par molécule, ce qui correspond à une variation relative de masse Delta m / m de l'ordre de 10⁻¹⁰ (totalement indétectable sur une balance ordinaire). En revanche, lors d'une réaction nucléaire, le réarrangement des nucléons libère environ 200 MeV par événement, soit 50 millions de fois plus d'énergie par atome ! La perte de masse relative atteint alors près de 0,1 % (10⁻³), ce qui est parfaitement mesurable.",
          "exercise": {
            "id": "phys_tle_cd_16_p1_s5_qcm",
            "type": "mcq",
            "prompt": "Quel est approximativement le rapport entre l'énergie libérée par la fission d'un noyau d'uranium (~200 MeV) et l'énergie chimique libérée par la combustion d'un atome de carbone (~4 eV) ?",
            "options": [
              "Environ 50 fois plus",
              "Environ 5 000 fois plus",
              "Environ 50 000 000 fois plus (5.10⁷)",
              "Elles sont identiques"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Rapport = 200 MeV / 4 eV = 200.10⁶ eV / 4 eV = 50.10⁶ = 5.10⁷ (50 millions de fois plus d'énergie par unité de matière)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Calcul du défaut de masse de l'uranium 235",
          "stepTheme": "Exemple appliqué",
          "stepBadge": "Application numérique",
          "paragraphText": "Reprenons les données officielles de l'École Numérique : m(^235_92U) = 235,0439 u, m_p = 1,0073 u, m_n = 1,0087 u. Pour l'uranium 235 : Z = 92 et N = 235 - 92 = 143. Masse des nucléons séparés = 92 * 1,0073 + 143 * 1,0087 = 92,6716 + 144,2441 = 236,9157 u. Le défaut de masse vaut : Delta m = 236,9157 - 235,0439 = 1,8718 u.",
          "exercise": {
            "id": "phys_tle_cd_16_p1_s6_qcm",
            "type": "mcq",
            "prompt": "À partir de la valeur Delta m = 1,8718 u trouvée pour l'uranium 235, quelle est la masse manquante exprimée en kilogrammes ? (1 u = 1,6605.10⁻²⁷ kg)",
            "options": [
              "1,87.10⁻²⁷ kg",
              "3,11.10⁻²⁷ kg",
              "3,11.10⁻²⁴ kg",
              "1,66.10⁻²⁷ kg"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Delta m = 1,8718 * 1,66054.10⁻²⁷ kg ≈ 3,108.10⁻²⁷ kg ≈ 3,11.10⁻²⁷ kg."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "L'interaction nucléaire forte : ciment du noyau",
          "stepTheme": "Forces fondamentales",
          "stepBadge": "Interaction forte",
          "paragraphText": "À l'intérieur du noyau de rayon ~ 10⁻¹⁵ m, les protons chargés positivement subissent une répulsion électrostatique coulombienne gigantesque (F_e ~ 230 N entre deux protons contigus). Pour que le noyau soit stable, il doit exister une force attractive encore plus puissante : l'interaction nucléaire forte. Cette force fondamentale est attractive, indépendante de la charge électrique (elle s'exerce avec la même intensité entre p-p, n-n ou p-n), mais possède une portée extrêmement courte limitée à environ 2 femtomètres (2.10⁻¹⁵ m). Le défaut de masse est la signature énergétique de ce puits de potentiel attractif intense.",
          "exercise": {
            "id": "phys_tle_cd_16_p1_s7_qcm",
            "type": "mcq",
            "prompt": "Parmi les caractéristiques suivantes, laquelle s'applique à l'interaction nucléaire forte responsable de la cohésion des nucléons ?",
            "options": [
              "Elle n'agit qu'entre particules de charges électriques opposées",
              "Elle a une portée infinie comme la gravitation",
              "Elle est strictement attractive, indépendante de la charge électrique et à très courte portée (~ 10⁻¹⁵ m)",
              "Elle repousse les neutrons"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'interaction forte agit indifféremment sur tous les nucléons (protons et neutrons), domine très largement la répulsion coulombienne à courte distance, mais s'annule complètement au-delà de quelques femtomètres."
          }
        }
      ],
      "exercises": [
        {
          "id": "phys_tle_cd_16_p1_s1_qcm",
          "type": "mcq",
          "prompt": "On considère un noyau d'azote 14 (^{14}_7N) de masse m = 13,9992 u. Sachant que m_p = 1,0073 u et m_n = 1,0087 u, quelle est la valeur du défaut de masse Delta m ?",
          "options": [
            "0,0140 u",
            "0,1128 u",
            "1,0000 u",
            "14,1120 u"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Z = 7 protons et N = 14 - 7 = 7 neutrons. Masse des nucléons isolés : 7 * 1,0073 + 7 * 1,0087 = 7,0511 + 7,0609 = 14,1120 u. Le défaut de masse vaut Delta m = 14,1120 u - 13,9992 u = 0,1128 u."
        },
        {
          "id": "phys_tle_cd_16_p1_s2_qcm",
          "type": "mcq",
          "prompt": "Si un système matériel au repos libère une énergie de 9,0.10¹³ Joules sous forme de chaleur et de rayonnement, quelle est la perte de masse subie par ce système ? (c = 3,00.10⁸ m/s)",
          "options": [
            "1,0 mg",
            "1,0 g",
            "1,0 kg",
            "300 kg"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Δm = ΔE / c² = 9,0.10¹³ J / (3,00.10⁸ m/s)² = 9,0.10¹³ / 9,0.10¹⁶ = 1,0.10⁻³ kg = 1,0 gramme."
        },
        {
          "id": "phys_tle_cd_16_p1_s3_qcm",
          "type": "mcq",
          "prompt": "Un défaut de masse mesuré vaut Delta m = 0,200 u. Quelle est l'énergie libérée en mégaélectronvolts (MeV) ?",
          "options": [
            "46,58 MeV",
            "186,30 MeV",
            "931,50 MeV",
            "1 863,00 MeV"
          ],
          "correctAnswerIndex": 1,
          "explanation": "E = Delta m * 931,5 MeV/u = 0,200 * 931,5 = 186,30 MeV."
        },
        {
          "id": "phys_tle_cd_16_p1_s4_qcm",
          "type": "mcq",
          "prompt": "Pourquoi peut-on utiliser la masse de l'atome d'hydrogène neutre m(^1_1H) à la place de la masse du proton nu m_p dans le calcul du défaut de masse à partir des masses atomiques neutres ?",
          "options": [
            "Parce que le proton et l'atome d'hydrogène ont exactement la même masse",
            "Parce que les Z électrons comptabilisés dans les Z atomes d'hydrogène compensent exactement les Z électrons du cortège de l'atome neutre ^A_ZX",
            "Parce que les électrons n'ont pas de masse",
            "Parce que l'atome d'hydrogène contient un neutron"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans l'expression [Z.m(^1_1H) + (A-Z).m_n] - m(atome), le terme Z.m(^1_1H) apporte Z protons et Z électrons, qui annulent exactement les Z électrons compris dans la masse atomique m(atome)."
        },
        {
          "id": "phys_tle_cd_16_p1_s5_qcm",
          "type": "mcq",
          "prompt": "Quel est approximativement le rapport entre l'énergie libérée par la fission d'un noyau d'uranium (~200 MeV) et l'énergie chimique libérée par la combustion d'un atome de carbone (~4 eV) ?",
          "options": [
            "Environ 50 fois plus",
            "Environ 5 000 fois plus",
            "Environ 50 000 000 fois plus (5.10⁷)",
            "Elles sont identiques"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Rapport = 200 MeV / 4 eV = 200.10⁶ eV / 4 eV = 50.10⁶ = 5.10⁷ (50 millions de fois plus d'énergie par unité de matière)."
        },
        {
          "id": "phys_tle_cd_16_p1_s6_qcm",
          "type": "mcq",
          "prompt": "À partir de la valeur Delta m = 1,8718 u trouvée pour l'uranium 235, quelle est la masse manquante exprimée en kilogrammes ? (1 u = 1,6605.10⁻²⁷ kg)",
          "options": [
            "1,87.10⁻²⁷ kg",
            "3,11.10⁻²⁷ kg",
            "3,11.10⁻²⁴ kg",
            "1,66.10⁻²⁷ kg"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Delta m = 1,8718 * 1,66054.10⁻²⁷ kg ≈ 3,108.10⁻²⁷ kg ≈ 3,11.10⁻²⁷ kg."
        },
        {
          "id": "phys_tle_cd_16_p1_s7_qcm",
          "type": "mcq",
          "prompt": "Parmi les caractéristiques suivantes, laquelle s'applique à l'interaction nucléaire forte responsable de la cohésion des nucléons ?",
          "options": [
            "Elle n'agit qu'entre particules de charges électriques opposées",
            "Elle a une portée infinie comme la gravitation",
            "Elle est strictement attractive, indépendante de la charge électrique et à très courte portée (~ 10⁻¹⁵ m)",
            "Elle repousse les neutrons"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'interaction forte agit indifféremment sur tous les nucléons (protons et neutrons), domine très largement la répulsion coulombienne à courte distance, mais s'annule complètement au-delà de quelques femtomètres."
        }
      ]
    },
    {
      "id": "pt2_energie_liaison_courbe_aston",
      "order": 2,
      "title": "Énergie de liaison et courbe d'Aston",
      "summary": "Définition de l'énergie de liaison E_L = Delta m.c², énergie de liaison par nucléon E_L/A, courbe d'Aston, région de stabilité maximale autour du fer 56 et zones de fusion/fission.",
      "conceptExplanation": "L'énergie de liaison E_L d'un noyau atomique est définie comme l'énergie minimale qu'il faut fournir à un noyau au repos pour le dissocier entièrement en ses nucléons constituants séparés et immobiles. Par conservation de l'énergie : E_noyau + E_L = E_nucléons_séparés, d'où : E_L = [Z.m_p + (A-Z).m_n - m_X] * c² = Delta m * c² > 0. L'énergie de liaison totale E_L augmente globalement avec la taille du noyau (avec le nombre de nucléons A). Pour comparer valablement la stabilité relative de noyaux différents, on définit l'énergie de liaison par nucléon E_0 = E_L / A (exprimée en MeV/nucléon). Plus l'énergie de liaison par nucléon est grande, plus chaque nucléon est solidement retenu et plus le noyau est stable. La représentation graphique de -E_L/A (ou de E_L/A) en fonction du nombre de masse A est la courbe d'Aston. Cette courbe fondamentale présente un maximum de stabilité remarquable autour de A ≈ 56 à 62 (noyau de fer 56, avec E_L/A ≈ 8,79 MeV/nucléon). Elle met en évidence deux voies naturelles d'évolution vers une plus grande stabilité : la fusion pour les noyaux légers (A < 20) et la fission pour les noyaux très lourds (A > 100).",
      "keyRule": "L'énergie de liaison par nucléon E_L / A traduit la stabilité du noyau : plus elle est élevée, plus le noyau est stable. Maximum de stabilité : Fer 56 (8,8 MeV/nucléon).",
      "formulas": [
        {
          "name": "Énergie de liaison du noyau",
          "formula": "E_L = \\Delta m \\cdot c^2 = \\left[ Z m_p + (A - Z) m_n - m_X \\right] c^2",
          "note": "E_L > 0 (énergie à fournir pour dissocier le noyau)"
        },
        {
          "name": "Énergie de liaison par nucléon",
          "formula": "E_0 = \\frac{E_L}{A} = \\frac{\\Delta m \\cdot c^2}{A}",
          "note": "Exprimée en MeV/nucléon, critère absolu de stabilité"
        },
        {
          "name": "Stabilité maximale (pic d'Aston)",
          "formula": "\\left( \\frac{E_L}{A} \\right)_{\\max} \\approx 8{,}8\\text{ MeV/nucléon} \\quad (^{56}_{26}\\text{Fe})",
          "note": "Fer 56 et Nickel 62"
        }
      ],
      "workedExample": {
        "title": "Comparaison de stabilité entre l'hélium 4 et l'uranium 235",
        "statement": "On dispose des données suivantes : Hélium 4 (^4_2He) : E_L = 28,30 MeV. Uranium 235 (^235_92U) : E_L = 1743,58 MeV. 1. Quel noyau possède la plus grande énergie de liaison totale ? 2. Calculer l'énergie de liaison par nucléon de chaque noyau. 3. Lequel de ces deux noyaux est le plus stable ?",
        "methodSteps": [
          "Étape 1 : Comparer les énergies de liaison totales : E_L(^235U) = 1743,58 MeV est immensément supérieure à E_L(^4He) = 28,30 MeV.",
          "Étape 2 : Calculer l'énergie de liaison par nucléon pour l'hélium 4 : (E_L / A)_{He} = 28,30 MeV / 4 = 7,075 MeV/nucléon.",
          "Étape 3 : Calculer l'énergie de liaison par nucléon pour l'uranium 235 : (E_L / A)_U = 1743,58 MeV / 235 ≈ 7,419 MeV/nucléon.",
          "Étape 4 : Analyser la stabilité : L'uranium 235 a une énergie de liaison par nucléon légèrement supérieure (7,42 MeV/nucl contre 7,08 MeV/nucl), mais il se situe sur la pente descendante de la courbe d'Aston (A >> 56) où la répulsion coulombienne déstabilise l'édifice, le rendant fissible."
        ],
        "conclusion": "Bien que l'uranium 235 possède une énergie de liaison totale 60 fois plus grande, son énergie par nucléon (7,42 MeV/nucléon) est inférieure à celle des noyaux moyens stables (8,8 MeV/nucléon pour le fer 56), expliquant sa propension à la fission."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Allure et zones caractéristiques de la courbe d'Aston (E_L / A en fonction de A)",
        "tableData": {
          "headers": [
            "Zone de la courbe d'Aston",
            "Nombre de masse A",
            "Énergie E_L/A typique",
            "Comportement nucléaire spontané ou provoqué"
          ],
          "rows": [
            [
              "Noyaux très légers",
              "A < 20 (H, D, T, Li)",
              "1,1 à 7,1 MeV/nucléon (pente très raide)",
              "Tendance naturelle à la FUSION thermonucléaire pour gagner en stabilité"
            ],
            [
              "Exception notable",
              "A = 4 (Hélium 4, particule alpha)",
              "7,08 MeV/nucléon (pic de stabilité locale)",
              "Noyau particulièrement solide éjecté lors des désintégrations alpha"
            ],
            [
              "Zone de stabilité maximale",
              "40 < A < 100 (Fer 56, Nickel 62)",
              "8,6 à 8,8 MeV/nucléon (plateau sommital)",
              "Noyaux les plus stables de l'univers : ni fission ni fusion possibles"
            ],
            [
              "Noyaux lourds",
              "A > 100 (Iode, Césium, Baryum)",
              "8,5 à 8,0 MeV/nucléon (lente descente)",
              "Produits stables issus des fissions nucléaires"
            ],
            [
              "Noyaux très lourds",
              "A > 200 (Uranium, Plutonium)",
              "7,4 à 7,6 MeV/nucléon",
              "Tendance naturelle à la FISSION nucléaire (ou radioactivité alpha)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition thermodynamique de l'énergie de liaison E_L",
          "stepTheme": "Énergie de liaison",
          "stepBadge": "Définition",
          "paragraphText": "L'énergie de liaison E_L d'un noyau est l'énergie qu'il faut fournir au noyau pour le dissocier en ses nucléons constitutifs au repos. C'est l'opposé de l'énergie de formation du noyau à partir de ses nucléons libres : E_formation = -E_L < 0. Puisque le noyau lié est plus stable que les nucléons isolés, E_L est une grandeur strictement positive : E_L = Delta m * c² > 0.",
          "exercise": {
            "id": "phys_tle_cd_16_p2_s1_qcm",
            "type": "mcq",
            "prompt": "On fournit une énergie de 28,3 MeV à un noyau d'hélium 4 au repos. Quel est l'état final du système ?",
            "options": [
              "Deux noyaux de deutérium au repos",
              "Deux protons et deux neutrons entièrement séparés et immobiles",
              "Un noyau de béryllium 8",
              "Quatre photons gamma"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition même de l'énergie de liaison E_L = 28,3 MeV, cet apport énergétique permet de rompre toutes les liaisons nucléaires et de séparer les 2 protons et 2 neutrons sans leur conférer d'énergie cinétique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'énergie de liaison par nucléon : critère de stabilité",
          "stepTheme": "Stabilité nucléaire",
          "stepBadge": "Critère E_L / A",
          "paragraphText": "L'énergie de liaison globale E_L ne permet pas de comparer la stabilité de deux noyaux car elle croît naturellement avec le nombre de nucléons A. Le critère physique déterminant la stabilité intrinsèque est l'énergie moyenne de liaison par nucléon : E_0 = E_L / A. Elle représente l'énergie qu'il faut dépenser en moyenne pour arracher un nucléon quelconque au noyau. Plus E_L / A est élevée, plus le noyau est difficile à démanteler et plus il est stable.",
          "exercise": {
            "id": "phys_tle_cd_16_p2_s2_qcm",
            "type": "mcq",
            "prompt": "Le noyau X a E_L = 120 MeV pour A = 16 (E_L/A = 7,5 MeV/nucl). Le noyau Y a E_L = 400 MeV pour A = 50 (E_L/A = 8,0 MeV/nucl). Quel noyau est le plus stable ?",
            "options": [
              "Le noyau X car il a moins de nucléons",
              "Le noyau Y car son énergie de liaison par nucléon est plus grande (8,0 > 7,5 MeV/nucléon)",
              "Les deux noyaux ont la même stabilité",
              "Le noyau X car son énergie de liaison totale est plus faible"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La stabilité est régie exclusivement par le rapport E_L / A : comme 8,0 MeV/nucléon > 7,5 MeV/nucléon, les nucléons du noyau Y sont plus fortement liés que ceux du noyau X."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Analyse détaillée de la courbe d'Aston",
          "stepTheme": "Courbe d'Aston",
          "stepBadge": "Courbe d'Aston",
          "paragraphText": "Tracée par Francis Aston (inventeur du spectromètre de masse), la courbe d'Aston représente E_L / A en fonction de A. Elle met en lumière trois régions clés : 1. Pour A < 20 : E_L/A augmente très brutalement de 1,1 MeV/nucléon (deutérium) à ~7,5 MeV/nucléon, avec un pic remarquable à A = 4 (^4He). 2. Pour 40 < A < 100 : un large plateau de stabilité maximale culmine autour de A = 56 à 62 avec E_L/A ≈ 8,8 MeV/nucléon (le fer 56 et le nickel 62). 3. Pour A > 100 : E_L/A décroît lentement jusqu'à environ 7,4 MeV/nucléon pour l'uranium 238, en raison de la répulsion électrostatique cumulative entre les nombreux protons.",
          "exercise": {
            "id": "phys_tle_cd_16_p2_s3_qcm",
            "type": "mcq",
            "prompt": "Quel nucléide correspond au sommet absolu de stabilité de la courbe d'Aston ?",
            "options": [
              "L'hydrogène 1 (^1H)",
              "Le carbone 12 (^12C)",
              "Le fer 56 (^{56}_{26}Fe)",
              "L'uranium 235 (^{235}_{92}U)"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le fer 56 (ainsi que le nickel 62) possède l'énergie de liaison par nucléon la plus élevée de tous les éléments chimiques (~8,8 MeV/nucléon), ce qui en fait le noyau le plus stable de l'univers."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Pourquoi les noyaux très légers fusionnent et les très lourds fissionnent",
          "stepTheme": "Sens thermodynamique",
          "stepBadge": "Principe d'évolution",
          "paragraphText": "Tout système physique évolue spontanément vers l'état d'énergie minimale et de stabilité maximale (c'est-à-dire vers le sommet de la courbe d'Aston où E_L/A est maximal) : 1. Deux noyaux légers (situés à gauche du fer, ex. deutérium et tritium) peuvent fusionner pour donner un noyau plus lourd plus proche du fer : leur E_L/A augmente, la réaction libère de l'énergie. 2. Un noyau très lourd (situé à droite du fer, ex. uranium 235) peut se scinder en deux noyaux de masse moyenne plus proches du fer : leur E_L/A augmente également, libérant aussi une quantité considérable d'énergie !",
          "exercise": {
            "id": "phys_tle_cd_16_p2_s4_qcm",
            "type": "mcq",
            "prompt": "D'après la courbe d'Aston, pourquoi une réaction de fusion entre deux noyaux de plomb 206 pour former un noyau lourd n'est-elle pas spontanément exoénergétique ?",
            "options": [
              "Parce que le plomb est liquide",
              "Parce qu'au-delà de A = 56, l'énergie de liaison par nucléon diminue lorsque A augmente : former un noyau encore plus lourd coûterait de l'énergie au lieu d'en libérer",
              "Parce que le plomb n'a pas de protons",
              "Parce que le plomb est un gaz noble"
            ],
            "correctAnswerIndex": 1,
            "explanation": "À droite du fer 56, la courbe d'Aston est descendante : l'augmentation du nombre de nucléons diminue E_L/A. La fusion de noyaux lourds est donc endoénergétique (elle absorbe de l'énergie au lieu d'en libérer)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Piège sur la convention de tracé de la courbe d'Aston (-E_L/A vs +E_L/A)",
          "stepTheme": "Représentation graphique",
          "stepBadge": "Attention piège",
          "paragraphText": "Dans certains manuels historiques ou sujets de concours, la courbe d'Aston est tracée en représentant -E_L/A (opposé de l'énergie de liaison par nucléon) en fonction de A. La courbe a alors la forme d'une cuvette ou d'un puits de potentiel, dont le minimum correspond aux noyaux les plus stables (le fer 56 est au fond du puits). Dans les programmes actuels, on trace généralement +E_L/A en fonction de A : la courbe présente alors une forme de colline dont le sommet correspond à la stabilité maximale.",
          "exercise": {
            "id": "phys_tle_cd_16_p2_s5_qcm",
            "type": "mcq",
            "prompt": "Si un graphique présente la courbe d'Aston sous la forme y = -E_L/A en fonction de A, où se situent les noyaux les plus stables ?",
            "options": [
              "Au point d'ordonnée maximale (sommet)",
              "Au point d'ordonnée minimale (fond du puits à environ -8,8 MeV/nucléon)",
              "À l'origine (0, 0)",
              "Aux extrémités pour A > 240"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Si l'axe vertical porte -E_L/A, la valeur la plus négative (-8,8 MeV/nucléon) correspond à la valeur maximale de E_L/A (+8,8 MeV/nucléon), c'est-à-dire au fond du puits de potentiel le plus stable."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Calcul de l'énergie de liaison par nucléon du Zirconium 91",
          "stepTheme": "Données d'évaluation",
          "stepBadge": "Calcul type",
          "paragraphText": "Dans le sujet officiel de l'École Numérique, on donne pour le zirconium 91 (^{91}_{40}Zr) une énergie de liaison par nucléon E_L / A = 8,70 MeV/nucléon. L'énergie de liaison totale de ce noyau vaut donc : E_L = A * (E_L / A) = 91 * 8,70 MeV = 791,70 MeV. Ce chiffre élevé confirme que le zirconium 91, produit de fission de l'uranium, est un noyau remarquablement stable situé tout près du plateau du fer 56.",
          "exercise": {
            "id": "phys_tle_cd_16_p2_s6_qcm",
            "type": "mcq",
            "prompt": "Pour le cérium 142 (^{142}_{58}Ce), l'énergie de liaison par nucléon vaut E_L/A = 8,37 MeV/nucléon. Quelle est l'énergie de liaison totale de ce noyau ?",
            "options": [
              "485,46 MeV",
              "791,70 MeV",
              "1 188,54 MeV",
              "1 743,58 MeV"
            ],
            "correctAnswerIndex": 2,
            "explanation": "E_L = A * (E_L / A) = 142 * 8,37 MeV = 1 188,54 MeV."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Le modèle de la goutte liquide de Weizsäcker",
          "stepTheme": "Modélisation du noyau",
          "stepBadge": "Formule semi-empirique",
          "paragraphText": "En 1935, Carl Friedrich von Weizsäcker modélise le noyau atomique comme une goutte de liquide incompressible de densité constante. L'énergie de liaison totale s'exprime comme la somme de cinq termes : 1. Énergie de volume (+a_v.A). 2. Énergie de surface (-a_s.A^(2/3), effet de tension superficielle). 3. Énergie de répulsion coulombienne (-a_c.Z²/A^(1/3)). 4. Énergie d'asymétrie (-a_a.(A-2Z)²/A). 5. Terme d'appariement. Ce modèle explique parfaitement la forme de la courbe d'Aston et prédit avec une grande précision le phénomène d'instabilité par fission des noyaux très volumineux.",
          "exercise": {
            "id": "phys_tle_cd_16_p2_s7_qcm",
            "type": "mcq",
            "prompt": "Dans le modèle de la goutte liquide, quel terme énergétique est responsable de la baisse de stabilité des noyaux très lourds (A > 100) vers la droite de la courbe d'Aston ?",
            "options": [
              "L'énergie de volume",
              "L'énergie de tension superficielle",
              "La répulsion coulombienne entre protons (-a_c.Z² / A^(1/3))",
              "La gravitation universelle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Chaque proton repousse tous les autres protons du noyau (terme proportionnel à Z*(Z-1) ~ Z²). Lorsque Z devient grand (Z > 80), cette répulsion coulombienne globale l'emporte progressivement sur l'attraction nucléaire de volume, abaissant l'énergie de liaison par nucléon."
          }
        }
      ],
      "exercises": [
        {
          "id": "phys_tle_cd_16_p2_s1_qcm",
          "type": "mcq",
          "prompt": "On fournit une énergie de 28,3 MeV à un noyau d'hélium 4 au repos. Quel est l'état final du système ?",
          "options": [
            "Deux noyaux de deutérium au repos",
            "Deux protons et deux neutrons entièrement séparés et immobiles",
            "Un noyau de béryllium 8",
            "Quatre photons gamma"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition même de l'énergie de liaison E_L = 28,3 MeV, cet apport énergétique permet de rompre toutes les liaisons nucléaires et de séparer les 2 protons et 2 neutrons sans leur conférer d'énergie cinétique."
        },
        {
          "id": "phys_tle_cd_16_p2_s2_qcm",
          "type": "mcq",
          "prompt": "Le noyau X a E_L = 120 MeV pour A = 16 (E_L/A = 7,5 MeV/nucl). Le noyau Y a E_L = 400 MeV pour A = 50 (E_L/A = 8,0 MeV/nucl). Quel noyau est le plus stable ?",
          "options": [
            "Le noyau X car il a moins de nucléons",
            "Le noyau Y car son énergie de liaison par nucléon est plus grande (8,0 > 7,5 MeV/nucléon)",
            "Les deux noyaux ont la même stabilité",
            "Le noyau X car son énergie de liaison totale est plus faible"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La stabilité est régie exclusivement par le rapport E_L / A : comme 8,0 MeV/nucléon > 7,5 MeV/nucléon, les nucléons du noyau Y sont plus fortement liés que ceux du noyau X."
        },
        {
          "id": "phys_tle_cd_16_p2_s3_qcm",
          "type": "mcq",
          "prompt": "Quel nucléide correspond au sommet absolu de stabilité de la courbe d'Aston ?",
          "options": [
            "L'hydrogène 1 (^1H)",
            "Le carbone 12 (^12C)",
            "Le fer 56 (^{56}_{26}Fe)",
            "L'uranium 235 (^{235}_{92}U)"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le fer 56 (ainsi que le nickel 62) possède l'énergie de liaison par nucléon la plus élevée de tous les éléments chimiques (~8,8 MeV/nucléon), ce qui en fait le noyau le plus stable de l'univers."
        },
        {
          "id": "phys_tle_cd_16_p2_s4_qcm",
          "type": "mcq",
          "prompt": "D'après la courbe d'Aston, pourquoi une réaction de fusion entre deux noyaux de plomb 206 pour former un noyau lourd n'est-elle pas spontanément exoénergétique ?",
          "options": [
            "Parce que le plomb est liquide",
            "Parce qu'au-delà de A = 56, l'énergie de liaison par nucléon diminue lorsque A augmente : former un noyau encore plus lourd coûterait de l'énergie au lieu d'en libérer",
            "Parce que le plomb n'a pas de protons",
            "Parce que le plomb est un gaz noble"
          ],
          "correctAnswerIndex": 1,
          "explanation": "À droite du fer 56, la courbe d'Aston est descendante : l'augmentation du nombre de nucléons diminue E_L/A. La fusion de noyaux lourds est donc endoénergétique (elle absorbe de l'énergie au lieu d'en libérer)."
        },
        {
          "id": "phys_tle_cd_16_p2_s5_qcm",
          "type": "mcq",
          "prompt": "Si un graphique présente la courbe d'Aston sous la forme y = -E_L/A en fonction de A, où se situent les noyaux les plus stables ?",
          "options": [
            "Au point d'ordonnée maximale (sommet)",
            "Au point d'ordonnée minimale (fond du puits à environ -8,8 MeV/nucléon)",
            "À l'origine (0, 0)",
            "Aux extrémités pour A > 240"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Si l'axe vertical porte -E_L/A, la valeur la plus négative (-8,8 MeV/nucléon) correspond à la valeur maximale de E_L/A (+8,8 MeV/nucléon), c'est-à-dire au fond du puits de potentiel le plus stable."
        },
        {
          "id": "phys_tle_cd_16_p2_s6_qcm",
          "type": "mcq",
          "prompt": "Pour le cérium 142 (^{142}_{58}Ce), l'énergie de liaison par nucléon vaut E_L/A = 8,37 MeV/nucléon. Quelle est l'énergie de liaison totale de ce noyau ?",
          "options": [
            "485,46 MeV",
            "791,70 MeV",
            "1 188,54 MeV",
            "1 743,58 MeV"
          ],
          "correctAnswerIndex": 2,
          "explanation": "E_L = A * (E_L / A) = 142 * 8,37 MeV = 1 188,54 MeV."
        },
        {
          "id": "phys_tle_cd_16_p2_s7_qcm",
          "type": "mcq",
          "prompt": "Dans le modèle de la goutte liquide, quel terme énergétique est responsable de la baisse de stabilité des noyaux très lourds (A > 100) vers la droite de la courbe d'Aston ?",
          "options": [
            "L'énergie de volume",
            "L'énergie de tension superficielle",
            "La répulsion coulombienne entre protons (-a_c.Z² / A^(1/3))",
            "La gravitation universelle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Chaque proton repousse tous les autres protons du noyau (terme proportionnel à Z*(Z-1) ~ Z²). Lorsque Z devient grand (Z > 80), cette répulsion coulombienne globale l'emporte progressivement sur l'attraction nucléaire de volume, abaissant l'énergie de liaison par nucléon."
        }
      ]
    },
    {
      "id": "pt3_fission_nucleaire_reactions_chaine",
      "order": 3,
      "title": "Réaction de fission nucléaire et réactions en chaîne",
      "summary": "Définition de la fission provoquée par neutron lent (thermique), noyaux fissibles (^235U, ^239Pu) et fertiles (^238U), équations-bilans de fission, mécanisme de réaction en chaîne et contrôle dans un réacteur nucléaire.",
      "conceptExplanation": "La fission nucléaire provoquée est une réaction nucléaire au cours de laquelle un noyau lourd instable (dit noyau fissible) se scinde en deux noyaux de masse moyenne plus stables sous l'impact d'un neutron de faible énergie cinétique (appelé neutron lent ou thermique, d'énergie cinétique ~ 0,025 eV). Découverte en 1938 par Otto Hahn, Fritz Strassmann et Lise Meitner, cette réaction s'accompagne de l'éjection de 2 à 3 neutrons rapides et d'une libération colossale d'énergie (environ 200 MeV par fission). Le seul noyau fissible naturel sur Terre est l'uranium 235 (^235_92U), qui ne représente que 0,7 % de l'uranium naturel (le reste étant constitué à 99,3 % d'uranium 238, non fissible par neutrons lents mais fertile). Les neutrons éjectés lors d'une première fission peuvent à leur tour être ralentis par un modérateur et provoquer la fission de noyaux voisins : c'est le mécanisme de la réaction en chaîne. Si chaque fission engendre en moyenne exactement un neutron qui induit une nouvelle fission (facteur de multiplication k = 1), la réaction est auto-entretenue et stable : c'est le régime d'un réacteur nucléaire civil contrôlé par des barres de commande absorbantes (cadmium, bore). Si k > 1, la réaction diverge exponentiellement en quelques microsecondes, provoquant l'explosion dévastatrice d'une bombe atomique (bombe A).",
      "keyRule": "Fission : Noyau lourd + neutron lent -> 2 noyaux moyens + 2 à 3 neutrons rapides + énergie (~200 MeV). Contrôle : k = 1 (réacteur civil) ; k > 1 divergent (bombe A).",
      "formulas": [
        {
          "name": "Équation-type de fission de l'Uranium 235",
          "formula": "^{235}_{92}\\text{U} + ^1_0\\text{n} \\longrightarrow ^{A_1}_{Z_1}\\text{X} + ^{A_2}_{Z_2}\\text{Y} + k \\cdot ^1_0\\text{n} + \\text{énergie}",
          "note": "k = 2 ou 3 neutrons émis"
        },
        {
          "name": "Conservation de Soddy pour la fission",
          "formula": "235 + 1 = A_1 + A_2 + k \\quad \\text{et} \\quad 92 + 0 = Z_1 + Z_2",
          "note": "Conservation de la charge Z et des nucléons A"
        },
        {
          "name": "Facteur de multiplication neutronique k_eff",
          "formula": "k_{\\text{eff}} = \\frac{\\text{Nombre de neutrons de la génération } (n+1)}{\\text{Nombre de neutrons de la génération } n}",
          "note": "k=1 : critique stationnaire ; k<1 : sous-critique ; k>1 : sur-critique"
        }
      ],
      "workedExample": {
        "title": "Équilibrage complet d'une réaction de fission dans un réacteur à eau pressurisée (REP)",
        "statement": "Dans le cœur d'un réacteur nucléaire, un neutron thermique heurte un noyau d'uranium 235 pour donner du strontium (^A_38Sr), du xénon (^{140}_Z Xe) et 2 neutrons rapides. 1. Écrire l'équation nucléaire avec les inconnues A et Z. 2. Déterminer A et Z en énonçant les lois appliquées. 3. Pourquoi les produits de fission formés sont-ils généralement radioactifs bêta moins ?",
        "methodSteps": [
          "Étape 1 : Écrire l'équation-bilan : ^{235}_{92}U + ^1_0n -> ^A_{38}Sr + ^{140}_Z Xe + 2 ^1_0n.",
          "Étape 2 : Appliquer la loi de conservation du nombre de nucléons A de Soddy : 235 + 1 = A + 140 + 2 * 1 => 236 = A + 142 => A = 236 - 142 = 94. Le noyau formé est le strontium 94 (^{94}_{38}Sr).",
          "Étape 3 : Appliquer la loi de conservation de la charge électrique Z de Soddy : 92 + 0 = 38 + Z + 2 * 0 => 92 = 38 + Z => Z = 92 - 38 = 54. Le numéro atomique 54 correspond bien au xénon (Xe).",
          "Étape 4 : Analyser l'excès de neutrons des produits : Dans l'uranium 235, le rapport N/Z = 143 / 92 ≈ 1,55. Les noyaux moyens stables autour de A = 90-140 possèdent un rapport N/Z plus faible (~1,2 à 1,3). Les fragments de fission se retrouvent donc avec un fort excès de neutrons par rapport à la vallée de stabilité : ils se désexcitent en cascade par radioactivité bêta moins (^1_0n -> ^1_1p + ^0_{-1}e + ν̄)."
        ],
        "conclusion": "L'équation équilibrée est : ^{235}_{92}U + ^1_0n -> ^{94}_{38}Sr + ^{140}_{54}Xe + 2 ^1_0n. Les fragments Sr et Xe sont de puissants émetteurs bêta moins."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Composants principaux et rôles d'un réacteur nucléaire de puissance (REP)",
        "tableData": {
          "headers": [
            "Composant du réacteur",
            "Matériau utilisé",
            "Rôle physique fondamental",
            "Conséquence sur la réaction"
          ],
          "rows": [
            [
              "Combustible fissible",
              "Dioxyde d'uranium (enrichi à 3-5 % en ^235U) ou MOX (^239Pu)",
              "Subit les fissions sous l'impact neutronique et libère la chaleur",
              "Source primaire d'énergie thermique"
            ],
            [
              "Modérateur",
              "Eau légère ordinaire (H₂O) sous haute pression (155 bars)",
              "Ralentit les neutrons rapides (2 MeV) en neutrons thermiques (0,025 eV) par chocs élastiques",
              "Multiplie par des centaines la probabilité de capture fission par ^235U"
            ],
            [
              "Barres de commande (absorbeurs)",
              "Alliage de Cadmium, Indium, Argent ou Bore",
              "Captent les neutrons excédentaires sans subir de fission",
              "Maintiennent k = 1 en fonctionnement normal et stoppent le réacteur d'urgence"
            ],
            [
              "Caloporteur primaire",
              "Eau pressurisée en circuit fermé étanche",
              "Évacue la chaleur intense dégagée par le cœur vers les générateurs de vapeur",
              "Empêche la fusion des gaines de combustible"
            ],
            [
              "Enceinte de confinement",
              "Double paroi de béton précontraint et acier",
              "Isole hermétiquement l'ensemble du circuit primaire de l'atmosphère",
              "Ultime barrière de sécurité radiologique"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition formelle de la fission nucléaire provoquée",
          "stepTheme": "Fission nucléaire",
          "stepBadge": "Définition",
          "paragraphText": "La fission nucléaire provoquée est la rupture d'un noyau lourd lourdement chargé (nombre de masse A > 230) en deux fragments de masses comparables sous l'impact d'un projectile neutre : un neutron. Cette réaction s'accompagne de l'émission simultanée de plusieurs neutrons secondaires et d'un dégagement d'énergie thermique considérable.",
          "exercise": {
            "id": "phys_tle_cd_16_p3_s1_qcm",
            "type": "mcq",
            "prompt": "Pourquoi utilise-t-on un neutron plutôt qu'un proton ou une particule alpha comme projectile pour provoquer la fission d'un noyau lourd ?",
            "options": [
              "Parce que le neutron est plus rapide que la lumière",
              "Parce que le neutron étant électriquement neutre, il ne subit aucune force de répulsion électrostatique coulombienne de la part du noyau positif et peut y pénétrer sans énergie cinétique initiale élevée",
              "Parce que les protons détruisent les réacteurs",
              "Parce que le neutron a une charge négative"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le noyau d'uranium possède 92 protons : sa barrière coulombienne de répulsion est gigantesque. Un proton ou une particule alpha positive serait violemment repoussé. Le neutron, de charge nulle, pénètre librement dans le noyau même à vitesse thermique ambiante."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Distinction essentielle entre neutrons rapides et neutrons thermiques (lents)",
          "stepTheme": "Modération des neutrons",
          "stepBadge": "Neutrons thermiques",
          "paragraphText": "Les neutrons libérés directement par la fission sont émis avec une vitesse phénoménale d'environ 20 000 km/s (énergie cinétique de l'ordre de 2 MeV) : ce sont des neutrons rapides. Or, la probabilité que l'uranium 235 capture un neutron rapide est très faible. Pour induire efficacement de nouvelles fissions, ces neutrons doivent être ralentis jusqu'à une vitesse d'environ 2 km/s (énergie thermique de 0,025 eV, équivalente à l'agitation thermique du milieu). Ce ralentissement s'opère par chocs élastiques successifs contre les noyaux légers d'un matériau modérateur (l'hydrogène de l'eau ordinaire, le deutérium de l'eau lourde ou le carbone du graphite).",
          "exercise": {
            "id": "phys_tle_cd_16_p3_s2_qcm",
            "type": "mcq",
            "prompt": "Quel est le rôle physique indispensable du modérateur (comme l'eau) dans un réacteur nucléaire à uranium 235 ?",
            "options": [
              "Accélérer les neutrons pour augmenter leur force d'impact",
              "Ralentir les neutrons rapides par chocs élastiques afin d'augmenter considérablement la probabilité de capture par l'uranium 235",
              "Absorber tous les neutrons pour éteindre le réacteur",
              "Transformer l'uranium en plutonium"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La section efficace de fission de l'uranium 235 est environ 500 fois plus élevée pour des neutrons lents (thermiques à 0,025 eV) que pour des neutrons rapides (2 MeV). Le modérateur ralentit les neutrons sans les absorber."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Noyaux fissiles vs noyaux fertiles et filiation du plutonium 239",
          "stepTheme": "Fissile et fertile",
          "stepBadge": "Transmutation",
          "paragraphText": "On appelle noyau fissile un nucléide capable de subir la fission sous l'action de neutrons thermiques lents (ex. ^235_92U et ^239_94Pu). On appelle noyau fertile un nucléide qui n'est pas fissile par neutrons lents mais qui peut, par capture d'un neutron, se transmuter en un noyau fissile. C'est le cas remarquable de l'uranium 238 (^238_92U), qui constitue 99,3 % de l'uranium naturel : en captant un neutron, il forme de l'uranium 239, qui subit deux désintégrations bêta moins consécutives pour engendrer du plutonium 239 fissile : ^238_92U + ^1_0n -> ^239_92U -> ^239_93Np + e⁻ -> ^239_94Pu + e⁻. C'est le principe des réacteurs surgénérateurs (ou réacteurs à neutrons rapides type Phénix).",
          "exercise": {
            "id": "phys_tle_cd_16_p3_s3_qcm",
            "type": "mcq",
            "prompt": "Pourquoi qualifie-t-on l'uranium 238 de nucléide 'fertile' ?",
            "options": [
              "Parce qu'il peut être utilisé comme engrais agricole",
              "Parce qu'il se reproduit par scissiparité",
              "Parce qu'en captant un neutron rapide, il engendre par désintégrations successives du plutonium 239, qui est un combustible fissible",
              "Parce qu'il ne produit aucun rayonnement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'uranium 238 n'est pas fissile par neutrons thermiques, mais sa capture neutronique engendre du plutonium 239 fissible, permettant de 'régénérer' du combustible nucléaire à partir de matière fertile abondante."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Application des lois de conservation de Soddy à une réaction de fission",
          "stepTheme": "Équilibrage de réaction",
          "stepBadge": "Méthode d'examen",
          "paragraphText": "Lors de toute réaction de fission, le système initial est constitué du noyau cible lourd bombardé et d'un neutron incident (^1_0n) : A_initial = A_cible + 1 et Z_initial = Z_cible. Le système final comprend deux fragments de fission (^A1_Z1 X et ^A2_Z2 Y), un certain nombre k de neutrons libérés (k * ^1_0n) et éventuellement des électrons d'émission bêta. Les lois de Soddy imposent : A_cible + 1 = A1 + A2 + k et Z_cible = Z1 + Z2 (avec Z_neutron = 0).",
          "exercise": {
            "id": "phys_tle_cd_16_p3_s4_qcm",
            "type": "mcq",
            "prompt": "Soit la réaction de fission : ^{235}_{92}U + ^1_0n -> ^{139}_{53}I + ^b_{39}Y + k ^1_0n. Sachant qu'il est libéré k = 3 neutrons, quelle est la valeur du nombre de masse b du noyau d'yttrium ?",
            "options": [
              "b = 92",
              "b = 94",
              "b = 95",
              "b = 97"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conservation des nucléons : 235 + 1 = 139 + b + 3 * 1 => 236 = 142 + b => b = 236 - 142 = 94. Le noyau produit est l'yttrium 94 (^{94}_{39}Y). Vérification de la charge : 53 + 39 = 92."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Facteur de multiplication neutronique k et masse critique",
          "stepTheme": "Cinétique neutronique",
          "stepBadge": "Facteur k",
          "paragraphText": "Le facteur effectif de multiplication k_eff est le rapport entre le nombre de neutrons provoquant une fission à une génération donnée et le nombre de neutrons ayant provoqué la génération précédente. Trois régimes sont possibles : 1. k_eff < 1 (sous-critique) : le nombre de fissions diminue rapidement, la réaction s'éteint. 2. k_eff = 1 (critique) : le flux de neutrons et la puissance thermique sont rigoureusement constants dans le temps (régime de fonctionnement normal d'un réacteur nucléaire de centrale électrique). 3. k_eff > 1 (sur-critique) : le nombre de fissions croît de manière géométrique divergente. La masse critique est la masse minimale de matière fissible nécessaire pour que les pertes de neutrons par les parois extérieures soient suffisamment faibles pour maintenir k_eff >= 1 (environ 50 kg pour l'uranium 235 pur et 10 kg pour le plutonium 239).",
          "exercise": {
            "id": "phys_tle_cd_16_p3_s5_qcm",
            "type": "mcq",
            "prompt": "Dans une centrale nucléaire fonctionnant à puissance constante (par exemple 1 300 MW électriques), quelle est la valeur rigoureuse du facteur de multiplication neutronique k_eff ?",
            "options": [
              "k_eff = 0",
              "k_eff = 0,5",
              "k_eff = 1,000",
              "k_eff = 2,5"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour que la puissance thermique dégagée par le réacteur reste parfaitement stationnaire, chaque fission doit induire en moyenne exactement UNE nouvelle fission : le réacteur est maintenu à l'état strictement critique k_eff = 1."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Confusion entre réacteur nucléaire civil et bombe atomique",
          "stepTheme": "Sécurité et physique",
          "stepBadge": "Attention piège",
          "paragraphText": "Il est physiquement rigoureusement impossible qu'un réacteur nucléaire civil explose comme une bombe atomique nucléaire. Dans une bombe atomique A, le combustible est constitué d'uranium 235 ou de plutonium 239 enrichi à plus de 90 % assemblé sous une géométrie ultra-compacte sans modérateur par des explosifs conventionnels pour une divergence instantanée. Dans un réacteur civil, l'uranium n'est enrichi qu'à 3 à 5 % en isotope 235 (le reste étant du ^238U absorbant), et le réacteur a un coefficient de réactivité thermique négatif : si la température monte, l'eau modératrice se vaporise, ce qui stoppe le ralentissement des neutrons et étouffe la réaction en chaîne. Les accidents nucléaires (Tchernobyl, Fukushima) sont des explosions thermochimiques de vapeur d'eau ou d'hydrogène suivies de feux de graphite, et JAMAIS des explosions nucléaires de type bombe !",
          "exercise": {
            "id": "phys_tle_cd_16_p3_s6_qcm",
            "type": "mcq",
            "prompt": "Pourquoi un réacteur nucléaire civil à eau pressurisée ne peut-il en aucun cas produire une explosion nucléaire de type bombe atomique ?",
            "options": [
              "Parce que le béton armé absorbe toutes les ondes de choc",
              "Parce que le combustible n'est enrichi qu'à 3-5 % en isotope 235 (au lieu de >90 % pour une bombe) et que la perte de modérateur liquide stoppe automatiquement la fission thermique",
              "Parce que les centrales nucléaires fonctionnent avec du charbon",
              "Parce que les bombes n'utilisent pas d'uranium"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le faible taux d'enrichissement (3 à 5 %) et la présence massive d'uranium 238 empêchent toute divergence surcritique prompte. Sans modérateur liquide pour thermaliser les neutrons, les fissions en chaîne s'arrêtent d'elles-mêmes."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Énergie thermique libérée par la fission complète de 1 kg d'uranium 235",
          "stepTheme": "Densité d'énergie colossale",
          "stepBadge": "Calcul d'énergie",
          "paragraphText": "Sachant qu'une mole d'uranium 235 a une masse de 235 g et contient N_A = 6,022.10²³ atomes, 1 kg d'uranium 235 contient N = (1000 / 235) * 6,022.10²³ ≈ 2,56.10²⁴ noyaux. Chaque fission libérant en moyenne 200 MeV (soit 3,20.10⁻¹¹ J), l'énergie totale libérée par 1 kg d'uranium 235 est : E = 2,56.10²⁴ * 3,20.10⁻¹¹ J ≈ 8,20.10¹³ Joules = 82 000 GJ. Cela équivaut au pouvoir calorifique de la combustion de 2 800 tonnes de charbon ou de 2 000 tonnes de pétrole lourd !",
          "exercise": {
            "id": "phys_tle_cd_16_p3_s7_qcm",
            "type": "mcq",
            "prompt": "Combien de tonnes de charbon (pouvoir calorifique ~ 30 MJ/kg) faudrait-il brûler pour produire la même quantité d'énergie thermique que la fission complète d'un seul kilogramme d'uranium 235 (8,2.10¹³ J) ?",
            "options": [
              "2,7 tonnes de charbon",
              "270 tonnes de charbon",
              "environ 2 700 tonnes de charbon",
              "1 000 000 tonnes de charbon"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Masse de charbon = (8,2.10¹³ J) / (3,0.10⁷ J/kg) ≈ 2,73.10⁶ kg = 2 730 tonnes de charbon. C'est l'illustration spectaculaire de la densité énergétique nucléaire."
          }
        }
      ],
      "exercises": [
        {
          "id": "phys_tle_cd_16_p3_s1_qcm",
          "type": "mcq",
          "prompt": "Pourquoi utilise-t-on un neutron plutôt qu'un proton ou une particule alpha comme projectile pour provoquer la fission d'un noyau lourd ?",
          "options": [
            "Parce que le neutron est plus rapide que la lumière",
            "Parce que le neutron étant électriquement neutre, il ne subit aucune force de répulsion électrostatique coulombienne de la part du noyau positif et peut y pénétrer sans énergie cinétique initiale élevée",
            "Parce que les protons détruisent les réacteurs",
            "Parce que le neutron a une charge négative"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le noyau d'uranium possède 92 protons : sa barrière coulombienne de répulsion est gigantesque. Un proton ou une particule alpha positive serait violemment repoussé. Le neutron, de charge nulle, pénètre librement dans le noyau même à vitesse thermique ambiante."
        },
        {
          "id": "phys_tle_cd_16_p3_s2_qcm",
          "type": "mcq",
          "prompt": "Quel est le rôle physique indispensable du modérateur (comme l'eau) dans un réacteur nucléaire à uranium 235 ?",
          "options": [
            "Accélérer les neutrons pour augmenter leur force d'impact",
            "Ralentir les neutrons rapides par chocs élastiques afin d'augmenter considérablement la probabilité de capture par l'uranium 235",
            "Absorber tous les neutrons pour éteindre le réacteur",
            "Transformer l'uranium en plutonium"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La section efficace de fission de l'uranium 235 est environ 500 fois plus élevée pour des neutrons lents (thermiques à 0,025 eV) que pour des neutrons rapides (2 MeV). Le modérateur ralentit les neutrons sans les absorber."
        },
        {
          "id": "phys_tle_cd_16_p3_s3_qcm",
          "type": "mcq",
          "prompt": "Pourquoi qualifie-t-on l'uranium 238 de nucléide 'fertile' ?",
          "options": [
            "Parce qu'il peut être utilisé comme engrais agricole",
            "Parce qu'il se reproduit par scissiparité",
            "Parce qu'en captant un neutron rapide, il engendre par désintégrations successives du plutonium 239, qui est un combustible fissible",
            "Parce qu'il ne produit aucun rayonnement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'uranium 238 n'est pas fissile par neutrons thermiques, mais sa capture neutronique engendre du plutonium 239 fissible, permettant de 'régénérer' du combustible nucléaire à partir de matière fertile abondante."
        },
        {
          "id": "phys_tle_cd_16_p3_s4_qcm",
          "type": "mcq",
          "prompt": "Soit la réaction de fission : ^{235}_{92}U + ^1_0n -> ^{139}_{53}I + ^b_{39}Y + k ^1_0n. Sachant qu'il est libéré k = 3 neutrons, quelle est la valeur du nombre de masse b du noyau d'yttrium ?",
          "options": [
            "b = 92",
            "b = 94",
            "b = 95",
            "b = 97"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conservation des nucléons : 235 + 1 = 139 + b + 3 * 1 => 236 = 142 + b => b = 236 - 142 = 94. Le noyau produit est l'yttrium 94 (^{94}_{39}Y). Vérification de la charge : 53 + 39 = 92."
        },
        {
          "id": "phys_tle_cd_16_p3_s5_qcm",
          "type": "mcq",
          "prompt": "Dans une centrale nucléaire fonctionnant à puissance constante (par exemple 1 300 MW électriques), quelle est la valeur rigoureuse du facteur de multiplication neutronique k_eff ?",
          "options": [
            "k_eff = 0",
            "k_eff = 0,5",
            "k_eff = 1,000",
            "k_eff = 2,5"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour que la puissance thermique dégagée par le réacteur reste parfaitement stationnaire, chaque fission doit induire en moyenne exactement UNE nouvelle fission : le réacteur est maintenu à l'état strictement critique k_eff = 1."
        },
        {
          "id": "phys_tle_cd_16_p3_s6_qcm",
          "type": "mcq",
          "prompt": "Pourquoi un réacteur nucléaire civil à eau pressurisée ne peut-il en aucun cas produire une explosion nucléaire de type bombe atomique ?",
          "options": [
            "Parce que le béton armé absorbe toutes les ondes de choc",
            "Parce que le combustible n'est enrichi qu'à 3-5 % en isotope 235 (au lieu de >90 % pour une bombe) et que la perte de modérateur liquide stoppe automatiquement la fission thermique",
            "Parce que les centrales nucléaires fonctionnent avec du charbon",
            "Parce que les bombes n'utilisent pas d'uranium"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le faible taux d'enrichissement (3 à 5 %) et la présence massive d'uranium 238 empêchent toute divergence surcritique prompte. Sans modérateur liquide pour thermaliser les neutrons, les fissions en chaîne s'arrêtent d'elles-mêmes."
        },
        {
          "id": "phys_tle_cd_16_p3_s7_qcm",
          "type": "mcq",
          "prompt": "Combien de tonnes de charbon (pouvoir calorifique ~ 30 MJ/kg) faudrait-il brûler pour produire la même quantité d'énergie thermique que la fission complète d'un seul kilogramme d'uranium 235 (8,2.10¹³ J) ?",
          "options": [
            "2,7 tonnes de charbon",
            "270 tonnes de charbon",
            "environ 2 700 tonnes de charbon",
            "1 000 000 tonnes de charbon"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Masse de charbon = (8,2.10¹³ J) / (3,0.10⁷ J/kg) ≈ 2,73.10⁶ kg = 2 730 tonnes de charbon. C'est l'illustration spectaculaire de la densité énergétique nucléaire."
        }
      ]
    },
    {
      "id": "pt4_fusion_thermonucleaire_etoiles_iter",
      "order": 4,
      "title": "Réaction de fusion thermonucléaire et énergie des étoiles",
      "summary": "Définition de la fusion de noyaux légers, franchissement de la barrière coulombienne à ultra-haute température, cycle de fusion stellaire dans le Soleil, bombe thermonucléaire H et recherche sur la fusion contrôlée (Tokamak, projet ITER).",
      "conceptExplanation": "La fusion nucléaire est une réaction au cours de laquelle deux noyaux atomiques légers s'unissent pour former un noyau plus lourd et plus stable, accompagnée de l'émission d'une particule (souvent un neutron ou un proton) et d'un dégagement phénoménal d'énergie. L'exemple le plus accessible est la fusion du deutérium (^2_1H) et du tritium (^3_1H) : ^2_1H + ^3_1H -> ^4_2He + ^1_0n + 17,6 MeV. Cependant, pour que deux noyaux chargés positivement puissent fusionner, ils doivent vaincre la formidable force de répulsion électrostatique coulombienne qui les repousse mutuellement. Pour franchir cette 'barrière coulombienne' et s'approcher à une distance de l'ordre de 10⁻¹⁵ m où l'attraction nucléaire forte devient prépondérante, les noyaux doivent posséder une énergie cinétique thermique gigantesque. Cela exige de porter la matière à des températures de plusieurs dizaines à centaines de millions de degrés (T > 10⁸ K), état où la matière est totalement ionisée sous forme d'un plasma. C'est pourquoi ces réactions sont qualifiées de réactions thermonucléaires. La fusion est le moteur naturel de l'univers : c'est elle qui alimente le Soleil et toutes les étoiles depuis des milliards d'années par la transformation de l'hydrogène en hélium.",
      "keyRule": "Fusion : 2 noyaux légers s'unissent en un noyau plus lourd. Réaction thermonucléaire nécessitant T > 10⁸ K pour vaincre la répulsion coulombienne. D + T -> ^4He + n + 17,6 MeV.",
      "formulas": [
        {
          "name": "Réaction de fusion Deutérium - Tritium (D-T)",
          "formula": "^2_1\\text{H} + ^3_1\\text{H} \\longrightarrow ^4_2\\text{He} + ^1_0\\text{n} + 17{,}6\\text{ MeV}",
          "note": "Réaction la plus favorable énergétiquement pour les réacteurs terrestres"
        },
        {
          "name": "Réaction de fusion Deutérium - Deutérium (D-D)",
          "formula": "^2_1\\text{H} + ^2_1\\text{H} \\longrightarrow ^3_2\\text{He} + ^1_0\\text{n} \\quad \\text{ou} \\quad ^2_1\\text{H} + ^2_1\\text{H} \\longrightarrow ^3_1\\text{H} + ^1_1\\text{p}",
          "note": "Deux voies équiprobables"
        },
        {
          "name": "Énergie cinétique thermique et température de fusion",
          "formula": "E_c = \\frac{3}{2} k_B T \\ge E_{\\text{Coulomb}} \\iff T \\sim 10^8\\text{ K}",
          "note": "k_B = 1,38.10⁻²³ J/K (constante de Boltzmann)"
        }
      ],
      "workedExample": {
        "title": "Calcul de l'énergie libérée par la réaction de fusion Deutérium-Tritium",
        "statement": "On considère la réaction de fusion : ^2_1H + ^3_1H -> ^4_2He + ^1_0n. On donne les masses des nucléides : m(^2_1H) = 2,01355 u ; m(^3_1H) = 3,01550 u ; m(^4_2He) = 4,00150 u ; m(^1_0n) = 1,00867 u ; 1 u = 931,5 MeV/c². 1. Calculer la perte de masse Delta m de la réaction en u. 2. En déduire l'énergie libérée par cette réaction en MeV puis en Joules. 3. Calculer l'énergie libérée par gramme de mélange équimolaire D-T.",
        "methodSteps": [
          "Étape 1 : Calculer la masse totale initiale des réactifs : m_initiale = m(^2_1H) + m(^3_1H) = 2,01355 u + 3,01550 u = 5,02905 u.",
          "Étape 2 : Calculer la masse totale finale des produits : m_finale = m(^4_2He) + m(^1_0n) = 4,00150 u + 1,00867 u = 5,01017 u.",
          "Étape 3 : Calculer la perte de masse : Delta m = m_initiale - m_finale = 5,02905 u - 5,01017 u = 0,01888 u.",
          "Étape 4 : Calculer l'énergie libérée : E = Delta m * 931,5 MeV/u = 0,01888 * 931,5 ≈ 17,587 MeV ≈ 17,6 MeV. En Joules : E = 17,587 * 1,602.10⁻¹³ J ≈ 2,82.10⁻¹¹ J.",
          "Étape 5 : Calculer l'énergie par gramme de mélange (masse molaire du mélange M ≈ 2 + 3 = 5 g/mol) : Un gramme contient N = (1 g / 5 g/mol) * 6,022.10²³ ≈ 1,204.10²³ paires D-T. Énergie par gramme = 1,204.10²³ * 2,82.10⁻¹¹ J ≈ 3,40.10¹¹ J/g = 340 GJ/g !"
        ],
        "conclusion": "La fusion D-T libère 17,6 MeV par événement, soit 340 milliards de Joules par gramme de combustible, quatre fois plus que la fission de l'uranium 235."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau comparatif détaillé entre fission nucléaire et fusion thermonucléaire",
        "tableData": {
          "headers": [
            "Critère d'analyse",
            "Fission nucléaire",
            "Fusion thermonucléaire",
            "Avantage comparatif de la fusion"
          ],
          "rows": [
            [
              "Principe physique",
              "Scission d'un noyau lourd (^235U) en 2 noyaux moyens",
              "Union de 2 noyaux légers (D + T) en un noyau plus lourd (^4He)",
              "Rendement énergétique 4 fois plus élevé par unité de masse"
            ],
            [
              "Combustible primaire",
              "Uranium naturel (ressource minière limitée, enrichissement nécessaire)",
              "Deutérium (inépuisable dans l'eau de mer) et Tritium (généré à partir de lithium abondant)",
              "Ressources quasi illimitées pour des millions d'années"
            ],
            [
              "Conditions d'amorçage",
              "Facile : neutrons lents à température ambiante",
              "Extrêmement difficile : température de plasma > 100 à 150 millions de degrés",
              "Sécurité intrinsèque : aucun risque d'emballement ou d'explosion"
            ],
            [
              "Déchets radioactifs",
              "Produits de fission à vie longue (actinides, césium, strontium) dangereux pendant des millénaires",
              "Hélium 4 (gaz noble inerte et non toxique) ; matériaux de structure à vie courte (<100 ans)",
              "Absence totale de déchets radioactifs de haute activité à vie longue"
            ],
            [
              "État industriel mondial",
              "Parfaitement maîtrisé (centaines de réacteurs dans le monde)",
              "En phase de recherche et développement avancée (projet international ITER)",
              "Filière d'avenir pour la seconde moitié du XXIe siècle"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la fusion thermonucléaire",
          "stepTheme": "Fusion nucléaire",
          "stepBadge": "Définition",
          "paragraphText": "La fusion nucléaire est une transformation au cours de laquelle deux noyaux atomiques légers s'associent pour constituer un noyau plus lourd, en émettant une particule et en libérant une quantité massive d'énergie. Ces réactions sont dites 'thermonucléaires' car elles ne peuvent s'amorcer qu'à des températures phénoménales (de l'ordre de 10⁸ K), conférant aux noyaux une énergie cinétique suffisante pour vaincre leur répulsion électrostatique mutuelle.",
          "exercise": {
            "id": "phys_tle_cd_16_p4_s1_qcm",
            "type": "mcq",
            "prompt": "Pourquoi deux noyaux de deutérium (^2_1H) ne fusionnent-ils pas spontanément à température ambiante (20 °C) dans un verre d'eau lourde ?",
            "options": [
              "Parce que l'eau les dissout",
              "Parce que la répulsion électrostatique coulombienne entre leurs charges positives respectives (+e et +e) forme une barrière infranchissable à faible énergie cinétique",
              "Parce que le deutérium n'a pas de masse",
              "Parce que la pression atmosphérique est trop forte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Tous les noyaux sont positifs et se repoussent violemment selon la loi de Coulomb en 1/r². Pour que les forces nucléaires attractives à très courte portée (interaction forte) interviennent, il faut projeter les noyaux l'un contre l'autre à des vitesses thermiques extrêmes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La fusion : source d'énergie du Soleil et des étoiles",
          "stepTheme": "Nucléosynthèse stellaire",
          "stepBadge": "Astrophysique",
          "paragraphText": "Au cœur du Soleil, à une température centrale d'environ 15 millions de kelvins et sous une pression gravitationnelle colossale de 250 milliards d'atmosphères, l'hydrogène fusionne en hélium selon la chaîne proton-proton découverte par Hans Bethe : 4 ^1_1H -> ^4_2He + 2 ^0_1e + 2 ν + 26,7 MeV. Chaque seconde, le Soleil convertit environ 600 millions de tonnes d'hydrogène en 596 millions de tonnes d'hélium : la différence de masse (4 millions de tonnes par seconde) est intégralement rayonnée dans l'espace sous forme de lumière et de chaleur selon E = Δm.c².",
          "exercise": {
            "id": "phys_tle_cd_16_p4_s2_qcm",
            "type": "mcq",
            "prompt": "Chaque seconde, le Soleil perd environ 4,0.10⁹ kg (4 millions de tonnes) de matière par fusion nucléaire. Quelle est la puissance totale rayonnée par le Soleil ? (c = 3,00.10⁸ m/s)",
            "options": [
              "3,6.10¹⁷ W",
              "1,2.10²⁰ W",
              "3,6.10²⁶ W",
              "9,0.10³⁴ W"
            ],
            "correctAnswerIndex": 2,
            "explanation": "P = ΔE / Δt = (Δm / Δt) * c² = 4,0.10⁹ kg/s * (3,00.10⁸ m/s)² = 4,0.10⁹ * 9,0.10¹⁶ = 3,6.10²⁶ Watts. C'est la luminosité totale du Soleil."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La réaction Deutérium - Tritium et le projet international ITER",
          "stepTheme": "Fusion terrestre contrôlée",
          "stepBadge": "Projet ITER",
          "paragraphText": "Pour reproduire la fusion sur Terre sans la pression gravitationnelle gigantesque du Soleil, la réaction la plus accessible est la fusion Deutérium-Tritium : ^2_1H + ^3_1H -> ^4_2He + ^1_0n + 17,6 MeV. Elle nécessite une température d'environ 150 millions de degrés. À cette température, la matière forme un plasma chaud qui ne peut toucher aucune paroi matérielle sans fondre instantanément. Le projet mondial ITER (construit à Cadarache en France) utilise une chambre toroïdale sous vide équipée de puissants champs magnétiques supraconducteurs pour confiner et isoler le plasma : c'est le principe du Tokamak (confinement magnétique).",
          "exercise": {
            "id": "phys_tle_cd_16_p4_s3_qcm",
            "type": "mcq",
            "prompt": "Dans un réacteur de fusion de type Tokamak comme ITER, comment maintient-on le plasma à 150 millions de degrés sans qu'il ne fasse fondre les parois métalliques de la chambre ?",
            "options": [
              "En soufflant de l'air liquide très froid",
              "En confinant et en maintenant les particules chargées du plasma en suspension au centre du tore grâce à de puissants champs magnétiques",
              "En éteignant la réaction toutes les secondes",
              "En utilisant des parois en diamant pur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le plasma étant constitué d'ions et d'électrons libres chargés, les forces de Lorentz exercées par les champs magnétiques hélicoïdaux courbent leurs trajectoires et les emprisonnent au centre de la chambre toroïdale, évitant tout contact thermique direct avec les parois."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Sûreté intrinsèque de la fusion : absence totale d'emballement",
          "stepTheme": "Sûreté nucléaire",
          "stepBadge": "Sécurité absolue",
          "paragraphText": "Contrairement à un réacteur de fission qui contient dans sa cuve plusieurs tonnes de combustible capable de fondre en cas de panne de refroidissement (accident de fusion du cœur), un réacteur de fusion ne contient dans sa chambre à plasma que quelques grammes de combustible à tout instant (moins de 5 grammes de D-T). En cas d'incident technique, de brèche ou de panne électrique, le plasma se refroidit spontanément en quelques fractions de seconde au contact de la moindre impureté, et la réaction de fusion s'éteint automatiquement et instantanément. Tout accident de type Tchernobyl ou Fukushima est physiquement impossible dans un réacteur de fusion.",
          "exercise": {
            "id": "phys_tle_cd_16_p4_s4_qcm",
            "type": "mcq",
            "prompt": "Que se passe-t-il dans un réacteur de fusion thermonucléaire si le système de confinement magnétique subit une panne électrique totale ?",
            "options": [
              "Une explosion nucléaire semblable à une bombe thermonucléaire H",
              "Le plasma touche immédiatement la paroi, se refroidit instantanément et la réaction de fusion s'arrête d'elle-même sans aucun risque d'emballement",
              "La réaction s'accélère et détruit le continent",
              "Le réacteur continue de brûler pendant des années"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La fusion exige des conditions de température et de densité ultra-précises et extrêmes. Toute perte de confinement rompt immédiatement ces conditions et étouffe la réaction en moins d'une milliseconde."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Piège sur la radioactivité du tritium et des matériaux de structure",
          "stepTheme": "Impact radiologique",
          "stepBadge": "Attention piège",
          "paragraphText": "Affirmer que la fusion thermonucléaire est 'totalement dépourvue de radioactivité' est inexact : 1. Le tritium (^3_1H) est un gaz radioactif émetteur bêta moins de demi-vie 12,3 ans, qui doit être manipulé avec précaution dans des circuits étanches. 2. Les neutrons très énergétiques (14,1 MeV) émis par la réaction D-T bombardent les parois métalliques de la chambre à vide et créent une activation neutronique de l'acier. Toutefois, ces déchets radioactifs de structure ont des demi-vies courtes à moyennes (< 50 à 100 ans) et ne posent pas le problème millénaire des déchets HAVL de la fission.",
          "exercise": {
            "id": "phys_tle_cd_16_p4_s5_qcm",
            "type": "mcq",
            "prompt": "Parmi les assertions suivantes concernant la gestion environnementale de la fusion D-T, laquelle est exacte ?",
            "options": [
              "La réaction produit des tonnes de plutonium 239",
              "Le produit direct de la réaction est l'hélium 4 (gaz noble inerte non radioactif), mais les neutrons de 14 MeV activent les parois métalliques du réacteur pendant quelques décennies",
              "La fusion rejette massivement du dioxyde de carbone CO₂ dans l'atmosphère",
              "La fusion est impossible avec de l'eau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le sous-produit immédiat est l'hélium 4, non toxique et inoffensif. L'unique radioactivité résiduelle provient de l'activation des parois du réacteur par le flux de neutrons, nécessitant un stockage de quelques dizaines d'années seulement."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La bombe thermonucléaire (bombe H) et l'amorce par fission",
          "stepTheme": "Arme thermonucléaire",
          "stepBadge": "Bombe H",
          "paragraphText": "La seule application de la fusion actuellement opérationnelle à grande échelle est malheureusement militaire : la bombe thermonucléaire ou bombe H (conçue par Edward Teller et Stanislaw Ulam). Pour atteindre les 100 millions de degrés indispensables pour déclencher la fusion explosive du deutériure de lithium, la bombe H utilise comme détonateur une véritable bombe à fission A miniaturisée ! Le rayonnement X issu de la fission compresse et chauffe le combustible de fusion, libérant une énergie destructrice équivalente à plusieurs mégatonnes de TNT.",
          "exercise": {
            "id": "phys_tle_cd_16_p4_s6_qcm",
            "type": "mcq",
            "prompt": "Quel dispositif physique fournit la température et la pression extrêmes indispensables à l'allumage thermonucléaire d'une bombe H ?",
            "options": [
              "Une résistance électrique géante chauffée au rouge",
              "Une bombe atomique à fission (bombe A) intégrée qui sert d'amorce",
              "Un faisceau laser ultra-puissant",
              "Des miroirs solaires paraboliques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Seule une bombe à fission A au plutonium ou à l'uranium est capable de générer instantanément l'onde de choc thermique et radiative (> 10⁸ K) requise pour amorcer la fusion de la bombe H."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Régénération in-situ du tritium par couverture tritigène de Lithium",
          "stepTheme": "Cycle du combustible",
          "stepBadge": "Couverture tritigène",
          "paragraphText": "Le tritium n'existant qu'à l'état de traces infinitésimales dans la nature, les réacteurs à fusion comme ITER doivent produire leur propre tritium. Pour cela, la paroi intérieure du réacteur est tapissée d'une couverture contenant du lithium (^6_3Li). Les neutrons émis par la fusion D-T frappent le lithium selon la réaction : ^6_3Li + ^1_0n -> ^4_2He + ^3_1H + 4,8 MeV. Le réacteur fabrique ainsi son propre combustible en continu à partir de lithium, un métal abondant dans les roches et l'eau de mer !",
          "exercise": {
            "id": "phys_tle_cd_16_p4_s7_qcm",
            "type": "mcq",
            "prompt": "Comment les futurs réacteurs de fusion produiront-ils le tritium nécessaire à leur fonctionnement continu ?",
            "options": [
              "En l'extrayant de l'atmosphère terrestre",
              "Par capture des neutrons de fusion sur une couverture fertile de lithium entourant la chambre à vide",
              "En achetant du tritium fabriqué sur la Lune",
              "Par électrolyse de l'eau douce"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les neutrons rapides issus de la fusion D-T heurtent les atomes de lithium de la couverture tritigène, régénérant le tritium consommé et libérant un supplément de chaleur de 4,8 MeV."
          }
        }
      ],
      "exercises": [
        {
          "id": "phys_tle_cd_16_p4_s1_qcm",
          "type": "mcq",
          "prompt": "Pourquoi deux noyaux de deutérium (^2_1H) ne fusionnent-ils pas spontanément à température ambiante (20 °C) dans un verre d'eau lourde ?",
          "options": [
            "Parce que l'eau les dissout",
            "Parce que la répulsion électrostatique coulombienne entre leurs charges positives respectives (+e et +e) forme une barrière infranchissable à faible énergie cinétique",
            "Parce que le deutérium n'a pas de masse",
            "Parce que la pression atmosphérique est trop forte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Tous les noyaux sont positifs et se repoussent violemment selon la loi de Coulomb en 1/r². Pour que les forces nucléaires attractives à très courte portée (interaction forte) interviennent, il faut projeter les noyaux l'un contre l'autre à des vitesses thermiques extrêmes."
        },
        {
          "id": "phys_tle_cd_16_p4_s2_qcm",
          "type": "mcq",
          "prompt": "Chaque seconde, le Soleil perd environ 4,0.10⁹ kg (4 millions de tonnes) de matière par fusion nucléaire. Quelle est la puissance totale rayonnée par le Soleil ? (c = 3,00.10⁸ m/s)",
          "options": [
            "3,6.10¹⁷ W",
            "1,2.10²⁰ W",
            "3,6.10²⁶ W",
            "9,0.10³⁴ W"
          ],
          "correctAnswerIndex": 2,
          "explanation": "P = ΔE / Δt = (Δm / Δt) * c² = 4,0.10⁹ kg/s * (3,00.10⁸ m/s)² = 4,0.10⁹ * 9,0.10¹⁶ = 3,6.10²⁶ Watts. C'est la luminosité totale du Soleil."
        },
        {
          "id": "phys_tle_cd_16_p4_s3_qcm",
          "type": "mcq",
          "prompt": "Dans un réacteur de fusion de type Tokamak comme ITER, comment maintient-on le plasma à 150 millions de degrés sans qu'il ne fasse fondre les parois métalliques de la chambre ?",
          "options": [
            "En soufflant de l'air liquide très froid",
            "En confinant et en maintenant les particules chargées du plasma en suspension au centre du tore grâce à de puissants champs magnétiques",
            "En éteignant la réaction toutes les secondes",
            "En utilisant des parois en diamant pur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le plasma étant constitué d'ions et d'électrons libres chargés, les forces de Lorentz exercées par les champs magnétiques hélicoïdaux courbent leurs trajectoires et les emprisonnent au centre de la chambre toroïdale, évitant tout contact thermique direct avec les parois."
        },
        {
          "id": "phys_tle_cd_16_p4_s4_qcm",
          "type": "mcq",
          "prompt": "Que se passe-t-il dans un réacteur de fusion thermonucléaire si le système de confinement magnétique subit une panne électrique totale ?",
          "options": [
            "Une explosion nucléaire semblable à une bombe thermonucléaire H",
            "Le plasma touche immédiatement la paroi, se refroidit instantanément et la réaction de fusion s'arrête d'elle-même sans aucun risque d'emballement",
            "La réaction s'accélère et détruit le continent",
            "Le réacteur continue de brûler pendant des années"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La fusion exige des conditions de température et de densité ultra-précises et extrêmes. Toute perte de confinement rompt immédiatement ces conditions et étouffe la réaction en moins d'une milliseconde."
        },
        {
          "id": "phys_tle_cd_16_p4_s5_qcm",
          "type": "mcq",
          "prompt": "Parmi les assertions suivantes concernant la gestion environnementale de la fusion D-T, laquelle est exacte ?",
          "options": [
            "La réaction produit des tonnes de plutonium 239",
            "Le produit direct de la réaction est l'hélium 4 (gaz noble inerte non radioactif), mais les neutrons de 14 MeV activent les parois métalliques du réacteur pendant quelques décennies",
            "La fusion rejette massivement du dioxyde de carbone CO₂ dans l'atmosphère",
            "La fusion est impossible avec de l'eau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le sous-produit immédiat est l'hélium 4, non toxique et inoffensif. L'unique radioactivité résiduelle provient de l'activation des parois du réacteur par le flux de neutrons, nécessitant un stockage de quelques dizaines d'années seulement."
        },
        {
          "id": "phys_tle_cd_16_p4_s6_qcm",
          "type": "mcq",
          "prompt": "Quel dispositif physique fournit la température et la pression extrêmes indispensables à l'allumage thermonucléaire d'une bombe H ?",
          "options": [
            "Une résistance électrique géante chauffée au rouge",
            "Une bombe atomique à fission (bombe A) intégrée qui sert d'amorce",
            "Un faisceau laser ultra-puissant",
            "Des miroirs solaires paraboliques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Seule une bombe à fission A au plutonium ou à l'uranium est capable de générer instantanément l'onde de choc thermique et radiative (> 10⁸ K) requise pour amorcer la fusion de la bombe H."
        },
        {
          "id": "phys_tle_cd_16_p4_s7_qcm",
          "type": "mcq",
          "prompt": "Comment les futurs réacteurs de fusion produiront-ils le tritium nécessaire à leur fonctionnement continu ?",
          "options": [
            "En l'extrayant de l'atmosphère terrestre",
            "Par capture des neutrons de fusion sur une couverture fertile de lithium entourant la chambre à vide",
            "En achetant du tritium fabriqué sur la Lune",
            "Par électrolyse de l'eau douce"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les neutrons rapides issus de la fusion D-T heurtent les atomes de lithium de la couverture tritigène, régénérant le tritium consommé et libérant un supplément de chaleur de 4,8 MeV."
        }
      ]
    },
    {
      "id": "pt5_bilans_energetiques_reactions_provoquees",
      "order": 5,
      "title": "Bilans d'énergie des réactions nucléaires provoquées",
      "summary": "Calcul universel de la variation de masse Delta m = somme(m_produits) - somme(m_réactifs), énergie de réaction Delta E = Delta m.c², énergie libérée E_libérée = |Delta E|, calcul alternatif par les énergies de liaison, et rendements.",
      "conceptExplanation": "Pour toute réaction nucléaire provoquée représentée par : Réactifs -> Produits, le bilan énergétique repose sur le principe d'équivalence d'Einstein. 1. Calcul par les masses : on calcule d'abord la variation de masse de la réaction : Delta m = Σ m(produits) - Σ m(réactifs). Si Delta m < 0, la masse des produits est inférieure à celle des réactifs : le système a perdu de la masse au repos, convertie en énergie rayonnée ou cinétique. La variation d'énergie du système nucléaire est : Delta E = Delta m * c² < 0. L'énergie libérée ou dégagée par la réaction vers le milieu extérieur est la valeur absolue : E_libérée = |Delta E| = -Delta E = [Σ m(réactifs) - Σ m(produits)] * c² > 0. 2. Calcul par les énergies de liaison : comme chaque produit est plus fortement lié que les réactifs initiaux, l'énergie libérée s'exprime également par la différence des énergies de liaison totales : E_libérée = Σ E_L(produits) - Σ E_L(réactifs) = Σ [A_p * (E_L/A)_p] - Σ [A_r * (E_L/A)_r]. Les deux méthodes mènent rigoureusement au même résultat physique.",
      "keyRule": "Énergie libérée par une réaction nucléaire : E_libérée = [somme m(réactifs) - somme m(produits)] * c² = somme E_L(produits) - somme E_L(réactifs). Toujours positive !",
      "formulas": [
        {
          "name": "Variation de masse de la réaction",
          "formula": "\\Delta m = \\sum m_{\\text{produits}} - \\sum m_{\\text{réactifs}}",
          "note": "Δm < 0 pour une réaction exoénergétique"
        },
        {
          "name": "Énergie libérée (bilan de masse)",
          "formula": "E_{\\text{libérée}} = |\\Delta m| \\cdot c^2 = \\left( \\sum m_{\\text{réactifs}} - \\sum m_{\\text{produits}} \\right) c^2",
          "note": "Multiplication directe par 931,5 MeV si les masses sont en u"
        },
        {
          "name": "Énergie libérée (bilan d'énergie de liaison)",
          "formula": "E_{\\text{libérée}} = \\sum E_L(\\text{produits}) - \\sum E_L(\\text{réactifs})",
          "note": "Avec E_L(X) = A_X * (E_L/A)_X"
        }
      ],
      "workedExample": {
        "title": "Calcul de l'énergie libérée par deux méthodes indépendantes (masses et énergies de liaison)",
        "statement": "On étudie la fission : ^235_92U + ^1_0n -> ^91_40Zr + ^142_58Ce + 3 ^1_0n + 6 ^0_{-1}e. On donne les énergies de liaison par nucléon : (E_L/A)(^235U) = 7,59 MeV/nucl ; (E_L/A)(^91Zr) = 8,70 MeV/nucl ; (E_L/A)(^142Ce) = 8,37 MeV/nucl. 1. Calculer l'énergie de liaison totale de chaque noyau. 2. Déterminer l'énergie libérée par cette fission en MeV puis en Joules. Données : 1 MeV = 1,602.10⁻¹³ J.",
        "methodSteps": [
          "Étape 1 : Calculer l'énergie de liaison de l'uranium 235 : E_L(^235U) = 235 * 7,59 MeV = 1783,65 MeV.",
          "Étape 2 : Calculer l'énergie de liaison du zirconium 91 : E_L(^91Zr) = 91 * 8,70 MeV = 791,70 MeV.",
          "Étape 3 : Calculer l'énergie de liaison du cérium 142 : E_L(^142Ce) = 142 * 8,37 MeV = 1188,54 MeV.",
          "Étape 4 : Rappel des énergies de liaison des particules simples : Le neutron libre (^1_0n) et l'électron (^0_{-1}e) ne sont pas des noyaux composés liés : leur énergie de liaison nucléaire est rigoureusement nulle (E_L = 0).",
          "Étape 5 : Appliquer la formule du bilan des énergies de liaison : E_libérée = [E_L(^91Zr) + E_L(^142Ce)] - E_L(^235U) = (791,70 + 1188,54) - 1783,65 = 1980,24 - 1783,65 = 196,59 MeV.",
          "Étape 6 : Convertir cette énergie en Joules : E_libérée = 196,59 * 1,602.10⁻¹³ J ≈ 3,15.10⁻¹¹ Joules."
        ],
        "conclusion": "La fission libère 196,6 MeV (soit 3,15.10⁻¹¹ J) sous forme d'énergie cinétique des fragments et des neutrons, et de rayonnement gamma."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Comparaison des bilans énergétiques par masse et par énergie de liaison",
        "tableData": {
          "headers": [
            "Méthode de calcul",
            "Formule appliquée",
            "Données requises",
            "Attention particulière"
          ],
          "rows": [
            [
              "Bilan par les masses réelles",
              "E_lib = [m(réactifs) - m(produits)] * c²",
              "Masses individuelles très précises en u (au moins 5 décimales)",
              "Ne pas oublier les masses des neutrons et particules émises"
            ],
            [
              "Bilan par énergies de liaison",
              "E_lib = somme E_L(produits) - somme E_L(réactifs)",
              "Énergies E_L par nucléon en MeV/nucléon",
              "E_L = 0 pour les nucléons libres isolés (^1_0n, ^1_1p) et électrons"
            ],
            [
              "Signe thermodynamique ΔE",
              "ΔE = E_produits - E_réactifs = -E_lib < 0",
              "Convention internationale",
              "Une réaction exothermique cède de l'énergie : ΔE négatif mais E_libérée positive !"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le sens physique de la perte de masse dans une réaction exoénergétique",
          "stepTheme": "Perte de masse",
          "stepBadge": "Principe fondamental",
          "paragraphText": "Dans toute réaction nucléaire où de l'énergie thermique ou radiative est cédée vers l'extérieur (réaction exoénergétique, comme la fission et la fusion), la somme des masses au repos des produits est rigoureusement INFÉRIEURE à la somme des masses au repos des réactifs : Σ m_produits < Σ m_réactifs. Cette masse manquante n'a pas été 'anéantie' : elle a été convertie en énergie cinétique portée par les particules émises et en énergie radiative transportée par les photons gamma.",
          "exercise": {
            "id": "phys_tle_cd_16_p5_s1_qcm",
            "type": "mcq",
            "prompt": "Dans une réaction nucléaire où la variation de masse vaut Delta m = Σ m_produits - Σ m_réactifs = -0,150 u, que peut-on affirmer ?",
            "options": [
              "La réaction absorbe de l'énergie du milieu extérieur",
              "La réaction libère une énergie E = 0,150 * 931,5 ≈ 139,7 MeV vers le milieu extérieur",
              "La réaction est impossible en vertu de la conservation de la masse",
              "La vitesse de la lumière a diminué"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Comme Delta m < 0, il y a perte de masse au repos : la réaction est exoénergétique et libère vers l'extérieur une énergie E_libérée = |Delta m| * c² = 0,150 * 931,5 MeV ≈ 139,7 MeV."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Calcul de l'énergie libérée à partir des masses en u",
          "stepTheme": "Calcul par les masses",
          "stepBadge": "Méthode",
          "paragraphText": "La méthode de calcul par les masses comporte 4 étapes méthodiques : 1. Calculer la somme des masses des réactifs M_R = Σ m_réactifs. 2. Calculer la somme des masses des produits M_P = Σ m_produits. 3. Calculer la perte de masse positive : |Δm| = M_R - M_P (en u). 4. Multiplier directement par 931,5 MeV/u pour obtenir l'énergie libérée en MeV. Pour convertir en Joules, multiplier par 1,602.10⁻¹³ J/MeV.",
          "exercise": {
            "id": "phys_tle_cd_16_p5_s2_qcm",
            "type": "mcq",
            "prompt": "On considère une réaction où M_R = 236,0526 u et M_P = 235,8636 u. Quelle est l'énergie libérée en MeV ?",
            "options": [
              "176,05 MeV",
              "189,00 MeV",
              "235,86 MeV",
              "931,50 MeV"
            ],
            "correctAnswerIndex": 0,
            "explanation": "|Δm| = 236,0526 - 235,8636 = 0,1890 u. E_libérée = 0,1890 * 931,5 MeV/u ≈ 176,05 MeV."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Démonstration de la formule par les énergies de liaison",
          "stepTheme": "Démonstration théorique",
          "stepBadge": "Théorème énergétique",
          "paragraphText": "Rappelons que pour tout noyau X de composition (Z, A) : m_X = Z.m_p + (A-Z).m_n - E_L(X)/c². En insérant cette expression dans la formule de l'énergie libérée E_lib = (Σ m_réactifs - Σ m_produits).c², les masses des protons individuels et des neutrons individuels s'annulent rigoureusement deux à deux grâce aux lois de conservation de Soddy (conservation du nombre de protons Z et du nombre de neutrons N). Il reste alors la relation fondamentale : E_libérée = Σ E_L(produits) - Σ E_L(réactifs).",
          "exercise": {
            "id": "phys_tle_cd_16_p5_s3_qcm",
            "type": "mcq",
            "prompt": "Pourquoi la formule de l'énergie libérée s'écrit-elle E_lib = Σ E_L(produits) - Σ E_L(réactifs) avec les PRODUITS EN PREMIER, alors que la formule des masses s'écrit avec les RÉACTIFS EN PREMIER ?",
            "options": [
              "C'est une erreur de signe arbitraire",
              "Parce que l'énergie de liaison E_L représente un défaut de masse soustrait à la masse des constituants : plus un noyau est lié, plus sa masse est faible",
              "Parce que les produits sont toujours plus légers que les protons",
              "Parce que les réactifs ont une énergie de liaison négative"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Comme m_noyau = m_constituants - E_L/c², la masse varie en sens inverse de l'énergie de liaison. Une augmentation de l'énergie de liaison globale (Σ E_L(produits) > Σ E_L(réactifs)) correspond à une diminution de la masse totale au repos, libérant de l'énergie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Énergie de liaison d'un neutron ou proton libre",
          "stepTheme": "Nucléons isolés",
          "stepBadge": "Attention piège",
          "paragraphText": "Dans le calcul E_lib = Σ E_L(produits) - Σ E_L(réactifs), les neutrons libres isolés (^1_0n) ou protons libres (^1_1p) apparaissant comme réactifs ou produits n'ont AUCUNE liaison nucléaire : leur énergie de liaison est STRICTEMENT NULLE : E_L(^1_0n) = 0 MeV et E_L(^1_1p) = 0 MeV ! De même, les électrons ou positons ont une énergie de liaison nucléaire nulle. Il ne faut donc sommer que les énergies de liaison des vrais noyaux formés de deux nucléons ou plus.",
          "exercise": {
            "id": "phys_tle_cd_16_p5_s4_qcm",
            "type": "mcq",
            "prompt": "Dans la réaction de fusion ^2_1H + ^3_1H -> ^4_2He + ^1_0n, quelle est l'expression correcte de l'énergie libérée en fonction des énergies de liaison ?",
            "options": [
              "E_lib = E_L(^4He) + E_L(^1n) - E_L(^2H) - E_L(^3H)",
              "E_lib = E_L(^4He) - E_L(^2H) - E_L(^3H) car E_L(neutron libre) = 0",
              "E_lib = E_L(^2H) + E_L(^3H) - E_L(^4He)",
              "E_lib = E_L(^4He) / 4"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le neutron libre produit n'est pas un noyau lié : E_L(^1_0n) = 0. Le bilan s'écrit donc simplement E_lib = E_L(^4He) - [E_L(^2H) + E_L(^3H)]."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Répartition de l'énergie libérée entre les produits",
          "stepTheme": "Cinématique relativiste",
          "stepBadge": "Partage cinétique",
          "paragraphText": "En vertu de la conservation de la quantité de mouvement totale dans le référentiel du centre de masse (Σ p = 0), l'énergie cinétique libérée lors d'une réaction à deux corps se partage de manière inversement proportionnelle à la masse des fragments : la particule la plus légère emporte la plus grande part de l'énergie cinétique ! Par exemple, dans la fusion D-T produisant un noyau d'hélium 4 (masse 4 u) et un neutron (masse 1 u), le neutron, 4 fois plus léger, emporte 4/5 de l'énergie totale (soit 14,1 MeV sur les 17,6 MeV) tandis que l'hélium 4 n'emporte que 1/5 (soit 3,5 MeV).",
          "exercise": {
            "id": "phys_tle_cd_16_p5_s5_qcm",
            "type": "mcq",
            "prompt": "Dans la fusion D-T libérant 17,6 MeV, quelle fraction et quelle valeur d'énergie cinétique emporte le neutron de masse 1 u par rapport au noyau d'hélium de masse 4 u ?",
            "options": [
              "La moitié (8,8 MeV)",
              "Un cinquième (3,5 MeV)",
              "Quatre cinquièmes (14,1 MeV)",
              "L'intégralité (17,6 MeV)"
            ],
            "correctAnswerIndex": 2,
            "explanation": "E_{c,neutron} / E_{c,He} = m_{He} / m_{neutron} = 4 / 1. Le neutron emporte donc 4 parts sur 5 de l'énergie cinétique totale : E_n = (4/5) * 17,6 MeV = 14,08 MeV ≈ 14,1 MeV."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Calcul de la consommation quotidienne d'une centrale nucléaire",
          "stepTheme": "Rendement de centrale",
          "stepBadge": "Problème d'ingénierie",
          "paragraphText": "Une tranche de centrale nucléaire moderne délivre une puissance électrique P_élec = 1 000 MW = 1,0.10⁹ W avec un rendement thermodynamique r = P_élec / P_thermique ≈ 33 % = 0,33. La puissance thermique requise est donc P_th = 1000 / 0,33 ≈ 3 030 MW = 3,03.10⁹ J/s. En 24 heures (86 400 s), l'énergie thermique totale produite est E_th = 3,03.10⁹ * 86 400 ≈ 2,62.10¹⁴ J. Sachant que 1 kg d'uranium 235 fissionné libère 8,2.10¹³ J, la masse d'uranium 235 consommée par jour n'est que de m = 2,62.10¹⁴ / 8,2.10¹³ ≈ 3,2 kg d'uranium 235 par jour seulement !",
          "exercise": {
            "id": "phys_tle_cd_16_p5_s6_qcm",
            "type": "mcq",
            "prompt": "Combien de kilogrammes d'uranium 235 pur une centrale de 1 000 MW électriques (rendement 33 %) consomme-t-elle approximativement en une journée complète de fonctionnement ?",
            "options": [
              "environ 3,2 kg",
              "environ 320 kg",
              "environ 3 200 tonnes",
              "environ 50 000 tonnes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La consommation journalière est de seulement 3,2 kg d'uranium 235 fissionné, à comparer aux 10 000 tonnes de charbon qu'engloutirait chaque jour une centrale thermique conventionnelle équivalente."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Synthèse générale des calculs de bilans d'énergie",
          "stepTheme": "Récapitulatif",
          "stepBadge": "Bilan global",
          "paragraphText": "En résumé, qu'il s'agisse de réactions spontanées (radioactivité) ou provoquées (fission, fusion) : 1. Les lois de Soddy garantissent la conservation absolue de la charge électrique totale Z et du nombre de nucléons A. 2. Toute libération d'énergie s'accompagne d'un défaut de masse positif |Δm| = M_réactifs - M_produits > 0. 3. L'énergie libérée se calcule sans ambiguïté soit par E = |Δm|.c², soit par E = Σ E_L(produits) - Σ E_L(réactifs).",
          "exercise": {
            "id": "phys_tle_cd_16_p5_s7_qcm",
            "type": "mcq",
            "prompt": "Si une réaction nucléaire hypothétique présentait une masse de produits supérieure à la masse des réactifs (Σ m_produits > Σ m_réactifs), comment se qualifierait cette réaction ?",
            "options": [
              "Exoénergétique (elle libère de l'énergie spontanément)",
              "Endoénergétique (elle ne peut avoir lieu que si l'on apporte de l'énergie cinétique au système)",
              "Impossible quel que soit l'apport d'énergie",
              "Spontanée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Si Σ m_produits > Σ m_réactifs, ΔE = Δm.c² > 0 : le système final possède plus d'énergie de masse que l'état initial. La réaction est endoénergétique et requiert un apport d'énergie extérieur (énergie cinétique du projectile) pour se produire."
          }
        }
      ],
      "exercises": [
        {
          "id": "phys_tle_cd_16_p5_s1_qcm",
          "type": "mcq",
          "prompt": "Dans une réaction nucléaire où la variation de masse vaut Delta m = Σ m_produits - Σ m_réactifs = -0,150 u, que peut-on affirmer ?",
          "options": [
            "La réaction absorbe de l'énergie du milieu extérieur",
            "La réaction libère une énergie E = 0,150 * 931,5 ≈ 139,7 MeV vers le milieu extérieur",
            "La réaction est impossible en vertu de la conservation de la masse",
            "La vitesse de la lumière a diminué"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Comme Delta m < 0, il y a perte de masse au repos : la réaction est exoénergétique et libère vers l'extérieur une énergie E_libérée = |Delta m| * c² = 0,150 * 931,5 MeV ≈ 139,7 MeV."
        },
        {
          "id": "phys_tle_cd_16_p5_s2_qcm",
          "type": "mcq",
          "prompt": "On considère une réaction où M_R = 236,0526 u et M_P = 235,8636 u. Quelle est l'énergie libérée en MeV ?",
          "options": [
            "176,05 MeV",
            "189,00 MeV",
            "235,86 MeV",
            "931,50 MeV"
          ],
          "correctAnswerIndex": 0,
          "explanation": "|Δm| = 236,0526 - 235,8636 = 0,1890 u. E_libérée = 0,1890 * 931,5 MeV/u ≈ 176,05 MeV."
        },
        {
          "id": "phys_tle_cd_16_p5_s3_qcm",
          "type": "mcq",
          "prompt": "Pourquoi la formule de l'énergie libérée s'écrit-elle E_lib = Σ E_L(produits) - Σ E_L(réactifs) avec les PRODUITS EN PREMIER, alors que la formule des masses s'écrit avec les RÉACTIFS EN PREMIER ?",
          "options": [
            "C'est une erreur de signe arbitraire",
            "Parce que l'énergie de liaison E_L représente un défaut de masse soustrait à la masse des constituants : plus un noyau est lié, plus sa masse est faible",
            "Parce que les produits sont toujours plus légers que les protons",
            "Parce que les réactifs ont une énergie de liaison négative"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Comme m_noyau = m_constituants - E_L/c², la masse varie en sens inverse de l'énergie de liaison. Une augmentation de l'énergie de liaison globale (Σ E_L(produits) > Σ E_L(réactifs)) correspond à une diminution de la masse totale au repos, libérant de l'énergie."
        },
        {
          "id": "phys_tle_cd_16_p5_s4_qcm",
          "type": "mcq",
          "prompt": "Dans la réaction de fusion ^2_1H + ^3_1H -> ^4_2He + ^1_0n, quelle est l'expression correcte de l'énergie libérée en fonction des énergies de liaison ?",
          "options": [
            "E_lib = E_L(^4He) + E_L(^1n) - E_L(^2H) - E_L(^3H)",
            "E_lib = E_L(^4He) - E_L(^2H) - E_L(^3H) car E_L(neutron libre) = 0",
            "E_lib = E_L(^2H) + E_L(^3H) - E_L(^4He)",
            "E_lib = E_L(^4He) / 4"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le neutron libre produit n'est pas un noyau lié : E_L(^1_0n) = 0. Le bilan s'écrit donc simplement E_lib = E_L(^4He) - [E_L(^2H) + E_L(^3H)]."
        },
        {
          "id": "phys_tle_cd_16_p5_s5_qcm",
          "type": "mcq",
          "prompt": "Dans la fusion D-T libérant 17,6 MeV, quelle fraction et quelle valeur d'énergie cinétique emporte le neutron de masse 1 u par rapport au noyau d'hélium de masse 4 u ?",
          "options": [
            "La moitié (8,8 MeV)",
            "Un cinquième (3,5 MeV)",
            "Quatre cinquièmes (14,1 MeV)",
            "L'intégralité (17,6 MeV)"
          ],
          "correctAnswerIndex": 2,
          "explanation": "E_{c,neutron} / E_{c,He} = m_{He} / m_{neutron} = 4 / 1. Le neutron emporte donc 4 parts sur 5 de l'énergie cinétique totale : E_n = (4/5) * 17,6 MeV = 14,08 MeV ≈ 14,1 MeV."
        },
        {
          "id": "phys_tle_cd_16_p5_s6_qcm",
          "type": "mcq",
          "prompt": "Combien de kilogrammes d'uranium 235 pur une centrale de 1 000 MW électriques (rendement 33 %) consomme-t-elle approximativement en une journée complète de fonctionnement ?",
          "options": [
            "environ 3,2 kg",
            "environ 320 kg",
            "environ 3 200 tonnes",
            "environ 50 000 tonnes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La consommation journalière est de seulement 3,2 kg d'uranium 235 fissionné, à comparer aux 10 000 tonnes de charbon qu'engloutirait chaque jour une centrale thermique conventionnelle équivalente."
        },
        {
          "id": "phys_tle_cd_16_p5_s7_qcm",
          "type": "mcq",
          "prompt": "Si une réaction nucléaire hypothétique présentait une masse de produits supérieure à la masse des réactifs (Σ m_produits > Σ m_réactifs), comment se qualifierait cette réaction ?",
          "options": [
            "Exoénergétique (elle libère de l'énergie spontanément)",
            "Endoénergétique (elle ne peut avoir lieu que si l'on apporte de l'énergie cinétique au système)",
            "Impossible quel que soit l'apport d'énergie",
            "Spontanée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Si Σ m_produits > Σ m_réactifs, ΔE = Δm.c² > 0 : le système final possède plus d'énergie de masse que l'état initial. La réaction est endoénergétique et requiert un apport d'énergie extérieur (énergie cinétique du projectile) pour se produire."
        }
      ]
    },
    {
      "id": "pt6_applications_risques_fukushima",
      "order": 6,
      "title": "Applications industrielles, risques nucléaires et catastrophe de Fukushima",
      "summary": "Usages pacifiques majeurs de l'énergie nucléaire, analyse physique des accidents nucléaires majeurs (Fukushima 2011, Tchernobyl 1986), radiotoxicité de l'iode 131 et du césium 137, et gestion des déchets vitrifiés.",
      "conceptExplanation": "Les réactions nucléaires provoquées occupent une place stratégique majeure dans le monde contemporain : elles fournissent près de 10 % de l'électricité mondiale de façon continue et décarbonée (sans émission directe de gaz à effet de serre CO₂). En médecine, les réacteurs de recherche produisent des radioisotopes artificiels vitaux pour le diagnostic et le traitement du cancer (molybdène 99/technétium 99m, cobalt 60, iode 131). En agronomie, l'irradiation gamma induit des mutations génétiques contrôlées sur les semences pour développer des variétés de céréales résistantes à la sécheresse et stérilise les insectes ravageurs mâles (technique TIS). Cependant, la technologie nucléaire comporte des risques majeurs : 1. Le risque de prolifération militaire (armes nucléaires). 2. Le risque d'accident industriel grave par perte de refroidissement du cœur, illustré par la catastrophe de Fukushima-Daiichi en mars 2011 au Japon. Suite à un séisme de magnitude 9,1 et à un tsunami géant de 15 mètres submergeant les générateurs diesels de secours, le refroidissement du cœur a été interrompu. La chaleur résiduelle de désintégration des produits de fission a fait monter la température au-delà de 2000 °C, provoquant la fusion des barres de combustible, l'oxydation du zirconium produisant de l'hydrogène explosif et le rejet massif de radionucléides volatils (iode 131 et césium 137). 3. La gestion sur le très long terme des déchets de haute activité et à vie longue (HAVL), nécessitant la vitrification et le confinement géologique profond.",
      "keyRule": "L'accident de Fukushima a démontré que même après l'arrêt immédiat des réactions de fission, la puissance résiduelle de désintégration des produits de fission impose un refroidissement continu permanent sous peine de fusion du cœur.",
      "formulas": [
        {
          "name": "Puissance résiduelle post-arrêt de Wigner-Way",
          "formula": "P_{\\text{résiduelle}}(t) \\approx 0{,}065 \\cdot P_0 \\cdot t^{-0{,}2}",
          "note": "Représente encore ~7 % de la puissance nominale à t = 0, et ~1 % après 1 jour"
        },
        {
          "name": "Réaction d'oxydation du zirconium à haute température",
          "formula": "\\text{Zr} + 2\\text{H}_2\\text{O} \\longrightarrow \\text{ZrO}_2 + 2\\text{H}_2 \\quad (T > 1000^\\circ\\text{C})",
          "note": "Production d'hydrogène gazeux hautement explosif"
        }
      ],
      "workedExample": {
        "title": "Calcul de la puissance thermique résiduelle d'un réacteur de 3 000 MWth après l'arrêt d'urgence",
        "statement": "Un réacteur nucléaire de puissance thermique nominale P₀ = 3 000 MW s'arrête instantanément suite à la chute des barres de commande (arrêt d'urgence automatique SCRAM). 1. Sachant que la puissance résiduelle de décroissance radioactive représente 6,5 % de la puissance nominale une seconde après l'arrêt, calculer la puissance thermique dégagée par le cœur à cet instant. 2. Après une semaine d'arrêt, cette puissance résiduelle vaut encore 0,3 % de P₀. Calculer l'énergie thermique en Joules dégagée en une seule journée pendant cette deuxième semaine. 3. Expliquer pourquoi la coupure des pompes de refroidissement conduit inévitablement à la fusion du cœur.",
        "methodSteps": [
          "Étape 1 : Calculer la puissance résiduelle initiale : P(1 s) = 0,065 * 3 000 MW = 195 MW = 1,95.10⁸ Joules par seconde.",
          "Étape 2 : Calculer la puissance résiduelle après une semaine : P(7 jours) = 0,003 * 3 000 MW = 9,0 MW = 9,0.10⁶ W.",
          "Étape 3 : Calculer l'énergie thermique dégagée en une journée (Δt = 86 400 s) à cette puissance : E = P * Δt = 9,0.10⁶ W * 86 400 s ≈ 7,78.10¹¹ Joules.",
          "Étape 4 : Interpréter physiquement : Même arrêté depuis une semaine, le cœur dégage encore près de 780 milliards de Joules par jour uniquement par la radioactivité de ses produits de fission ! Si l'eau ne circule plus, cette chaleur accumulée fait bouillir l'eau résiduelle, dénoie les assemblages combustibles qui atteignent 2 500 °C et fondent en une masse liquide incandescente appelée 'corium'."
        ],
        "conclusion": "Même après l'arrêt complet des fissions, un réacteur nucléaire doit être refroidi sans interruption pendant des semaines pour évacuer la chaleur résiduelle de désintégration."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Chronologie et mécanismes physiques de la catastrophe nucléaire de Fukushima (2011)",
        "tableData": {
          "headers": [
            "Étape temporelle",
            "Événement physique",
            "Mécanisme microscopique",
            "Conséquence radiologique"
          ],
          "rows": [
            [
              "11 mars 2011 à 14h46",
              "Séisme sous-marin de magnitude 9,1",
              "Chute automatique des barres de contrôle (SCRAM) : arrêt immédiat de la réaction en chaîne",
              "Perte de l'alimentation électrique externe du réseau japonais"
            ],
            [
              "11 mars à 15h37",
              "Tsunami de 15 m submersion du site",
              "Noyade des groupes électrogènes diesels de secours et des tableaux électriques (black-out total)",
              "Arrêt complet de toutes les pompes de refroidissement du cœur"
            ],
            [
              "11 au 12 mars",
              "Dénoyage du combustible",
              "Évaporation de l'eau par la chaleur résiduelle de décroissance radioactive ; gaines à > 1200 °C",
              "Réaction Zr + 2 H₂O -> ZrO₂ + 2 H₂ (formation massive d'hydrogène)"
            ],
            [
              "12 au 15 mars",
              "Explosions d'hydrogène",
              "Déflagration chimique de l'hydrogène au contact de l'oxygène de l'air dans les bâtiments réacteurs",
              "Destruction des superstructures et rejets massifs de ^131I et ^137Cs dans l'air"
            ],
            [
              "Phase finale",
              "Fusion du cœur (corium)",
              "Chute du combustible fondu au fond de la cuve sous pression (réacteurs 1, 2 et 3)",
              "Contamination des sols, évacuation de 150 000 habitants, eau contaminée stockée"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La chaleur résiduelle de désintégration post-arrêt",
          "stepTheme": "Chaleur résiduelle",
          "stepBadge": "Concept clé de sécurité",
          "paragraphText": "Lorsqu'un réacteur nucléaire est arrêté d'urgence par insertion des barres absorbantes, la réaction de fission s'arrête instantanément. Cependant, le cœur continue de dégager une quantité gigantesque de chaleur : la puissance résiduelle de désintégration. Elle provient de la radioactivité spontanée intense (désintégrations bêta et gamma) des milliards de produits de fission accumulés dans le combustible. Cette puissance représente environ 7 % de la puissance nominale à l'instant de l'arrêt, 1 % après 24 heures et encore plusieurs mégawatts après un mois.",
          "exercise": {
            "id": "phys_tle_cd_16_p6_s1_qcm",
            "type": "mcq",
            "prompt": "Dans la catastrophe de Fukushima, quelle a été la cause physique directe de la fusion du combustible nucléaire ?",
            "options": [
              "La réaction en chaîne de fission qui est devenue incontrôlable comme une bombe atomique",
              "L'incapacité à évacuer la chaleur résiduelle de désintégration des produits de fission suite à la perte totale d'alimentation électrique des pompes de refroidissement",
              "Une météorite tombée sur le toit du réacteur",
              "L'absence d'uranium dans le cœur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les fissions en chaîne étaient parfaitement arrêtées dès les premières secondes du séisme. C'est l'impossibilité de refroidir le combustible après la submersion des diesels par le tsunami qui a provoqué l'échauffement thermique et la fusion du cœur (perte de la source froide)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La réaction Zirconium-Eau et la formation d'hydrogène explosif",
          "stepTheme": "Réaction thermochimique",
          "stepBadge": "Explosion d'hydrogène",
          "paragraphText": "Les pastilles d'uranium sont empilées dans des tubes métalliques étanches appelés gaines, fabriquées en alliage de zirconium (zircaloy). Lorsque le niveau d'eau baisse dans la cuve et que la température dépasse 1 000 °C à 1 200 °C, le zirconium réagit violemment avec la vapeur d'eau par une réaction d'oxydation hautement exothermique : Zr + 2 H₂O -> ZrO₂ + 2 H₂. L'hydrogène gazeux formé s'accumule sous pression dans le bâtiment réacteur. Au contact de l'air atmosphérique, le mélange hydrogène-oxygène déflagre spontanément, soufflant les superstructures des bâtiments.",
          "exercise": {
            "id": "phys_tle_cd_16_p6_s2_qcm",
            "type": "mcq",
            "prompt": "D'où provenait l'hydrogène responsable des spectaculaires explosions des bâtiments réacteurs à Fukushima les 12 et 14 mars 2011 ?",
            "options": [
              "D'une fuite des réservoirs de carburant des voitures sur le parking",
              "De l'oxydation des gaines de zirconium du combustible par la vapeur d'eau à plus de 1 000 °C (Zr + 2 H₂O -> ZrO₂ + 2 H₂)",
              "De la fission spontanée de l'eau en hydrogène pur",
              "D'une réaction de fusion thermonucléaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "À très haute température (>1000 °C), le zirconium réagit avec l'eau en arrachant l'oxygène pour former de la zircone (ZrO₂), libérant des tonnes de dihydrogène gazeux hautement explosif."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Radiotoxicité des produits de fission volatils : Iode 131 et Césium 137",
          "stepTheme": "Impact radiologique",
          "stepBadge": "Produits de fission",
          "paragraphText": "Lors d'un accident avec perte d'intégrité du confinement, deux radioéléments volatils constituent le danger biologique principal : 1. L'iode 131 (^{131}I, période T = 8,0 jours) : émetteur bêta et gamma, il est inhalé ou ingéré (lait, légumes) et se fixe sélectivement dans la glande thyroïde, provoquant des cancers thyroïdiens. La parade médicale d'urgence consiste à ingérer des pastilles d'iode stable (iodure de potassium ^127I) pour saturer la thyroïde avant l'arrivée du panache. 2. Le césium 137 (^{137}Cs, période T = 30,1 ans) : analogue chimique du potassium, il contamine durablement les sols, les champignons et la chaîne alimentaire pendant des décennies.",
          "exercise": {
            "id": "phys_tle_cd_16_p6_s3_qcm",
            "type": "mcq",
            "prompt": "Pourquoi distribue-t-on des comprimés d'iode stable (iodure de potassium non radioactif) aux populations riveraines en cas d'accident nucléaire ?",
            "options": [
              "Pour soigner les brûlures de la peau",
              "Pour saturer préalablement la glande thyroïde en iode sain afin qu'elle n'absorbe pas l'iode 131 radioactif cancérigène présent dans l'air",
              "Pour détruire les radiations dans l'atmosphère",
              "Pour purifier l'eau potable contaminée au césium"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La thyroïde fixe avidement l'iode pour fabriquer ses hormones. En la saturant à 100 % avec de l'iode 127 stable, tout iode 131 radioactif inhalé ultérieurement est immédiatement éliminé par les reins sans être fixé dans l'organisme."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Gestion des déchets nucléaires et procédé de vitrification",
          "stepTheme": "Déchets radioactifs",
          "stepBadge": "Vitrification",
          "paragraphText": "Les combustibles usés retirés des réacteurs sont traités pour récupérer l'uranium et le plutonium réutilisables (procédé PUREX). Les résidus ultimes, formés des produits de fission hautement radioactifs et d'actinides mineurs (américium, curium), sont incorporés à 1 100 °C dans une pâte de verre borosilicaté en fusion liquide, puis coulés dans des conteneurs étanches en acier inoxydable : c'est le procédé de vitrification. Le verre borosilicaté emprisonne les atomes radioactifs dans son réseau amorphe sans altération pendant plus de 100 000 ans, prêt pour le stockage géologique profond réversible en couche d'argile stable (projet Cigéo).",
          "exercise": {
            "id": "phys_tle_cd_16_p6_s4_qcm",
            "type": "mcq",
            "prompt": "Quel est l'objectif fondamental du procédé de vitrification appliqué aux déchets nucléaires de haute activité (HAVL) ?",
            "options": [
              "Rendre les déchets transparents pour mieux les voir",
              "Piéger chimiquement les radioéléments dans une matrice de verre extrêmement résistante à l'eau, à la chaleur et aux radiations pendant des dizaines de millénaires",
              "Éteindre définitivement leur radioactivité en quelques jours",
              "Transformer les déchets en combustible pour fusées"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La matrice vitreuse borosilicatée confine les radionucléides au niveau moléculaire avec un taux de lixiviation par l'eau quasi nul, garantissant leur immobilisation même en cas de contact avec des nappes phréatiques profondes sur des échelles de temps géologiques."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Principe de radioprotection ALARA",
          "stepTheme": "Normes internationales",
          "stepBadge": "Principe ALARA",
          "paragraphText": "La Commission Internationale de Protection Radiologique (CIPR) a défini le principe ALARA ('As Low As Reasonably Achievable' : aussi bas que raisonnablement possible). Il repose sur trois piliers indissociables : 1. La justification : aucune pratique impliquant des rayonnements ionisants ne doit être adoptée si elle ne procure un bénéfice net positif pour la société. 2. L'optimisation : toutes les expositions individuelles et collectives doivent être maintenues au niveau le plus bas possible compte tenu des facteurs économiques et sociétaux. 3. La limitation des doses : des limites réglementaires strictes de dose efficace annuelle sont imposées (20 mSv/an pour les travailleurs du nucléaire, 1 mSv/an pour le public).",
          "exercise": {
            "id": "phys_tle_cd_16_p6_s5_qcm",
            "type": "mcq",
            "prompt": "Que signifie le sigle ALARA universellement appliqué dans la gestion des installations nucléaires et médicales ?",
            "options": [
              "Arrêt Légal Automatique des Réacteurs Atomiques",
              "As Low As Reasonably Achievable (maintenir les doses aussi basses que raisonnablement possible)",
              "Association de Lutte Anti-Radiations Avancée",
              "Analyse Limite de Radioactivité Artificielle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "ALARA ('As Low As Reasonably Achievable') est le principe directeur mondial de la radioprotection opérationnelle pour réduire au strict minimum toute dose reçue par les soignants, ouvriers et citoyens."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Confusion entre dose absorbée (Gray) et dose équivalente/efficace (Sievert)",
          "stepTheme": "Unités dosimétriques",
          "stepBadge": "Attention piège",
          "paragraphText": "Il est primordial de ne pas confondre : 1. Le Gray (Gy) : unité de dose absorbée mesurant l'énergie physique déposée par le rayonnement par unité de masse de matière (1 Gy = 1 J/kg). 2. Le Sievert (Sv) : unité de dose équivalente et efficace qui pondère la dose absorbée en Grays par des facteurs biologiques reflétant la dangerosité relative du type de rayonnement (W_R = 1 pour gamma et bêta, mais W_R = 20 pour les particules alpha !) et la sensibilité des tissus touchés (W_T). Une dose de 1 Gy d'alpha est biologiquement 20 fois plus destructrice qu'une dose de 1 Gy de gamma !",
          "exercise": {
            "id": "phys_tle_cd_16_p6_s6_qcm",
            "type": "mcq",
            "prompt": "Un tissu biologique reçoit une dose absorbée D = 0,05 Gy de rayonnement alpha (facteur de pondération radiologique W_R = 20). Quelle est la dose équivalente H en Sieverts ?",
            "options": [
              "0,05 Sv",
              "0,25 Sv",
              "1,00 Sv",
              "20,0 Sv"
            ],
            "correctAnswerIndex": 2,
            "explanation": "H = D * W_R = 0,05 Gy * 20 = 1,00 Sievert (Sv). Les particules alpha déposent leur énergie de façon très dense sur une distance microscopique, causant des dégâts biologiques considérables."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Bilan global du cours et synthèse des acquis sur le nucléaire",
          "stepTheme": "Synthèse générale",
          "stepBadge": "Récapitulatif final",
          "paragraphText": "En conclusion de cette étude des réactions nucléaires provoquées : 1. La fission et la fusion exploitent l'énergie de liaison nucléaire en convertissant une fraction de la masse au repos en énergie utile (E = |Δm|.c²). 2. La fission de noyaux lourds est la technologie industrielle mature d'aujourd'hui, exigeant une maîtrise absolue du refroidissement permanent. 3. La fusion thermonucléaire de noyaux légers est l'énergie propre et inépuisable de demain, exempte de risques d'emballement et de déchets à vie longue. 4. Le physicien responsable maîtrise à la fois les équations mathématiques de Soddy, les calculs de bilans thermiques et les impératifs éthiques de radioprotection de la société.",
          "exercise": {
            "id": "phys_tle_cd_16_p6_s7_qcm",
            "type": "mcq",
            "prompt": "Quelle caractéristique fondamentale confère à la fusion thermonucléaire D-T son statut d'énergie idéale d'avenir par rapport à la fission de l'uranium ?",
            "options": [
              "Elle produit des déchets plastiques recyclables",
              "Un combustible quasi-inépuisable (eau de mer et lithium), une absence de déchets radioactifs à vie longue et une impossibilité physique d'accident par emballement de réaction",
              "Elle ne nécessite aucune installation technique",
              "Elle fonctionne sans chaleur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La fusion offre une combinaison unique au monde : combustible illimité pour des millions d'années, déchet direct inerte (hélium 4), et arrêt instantané automatique en cas de perturbation, éliminant tout risque de catastrophe majeure."
          }
        }
      ],
      "exercises": [
        {
          "id": "phys_tle_cd_16_p6_s1_qcm",
          "type": "mcq",
          "prompt": "Dans la catastrophe de Fukushima, quelle a été la cause physique directe de la fusion du combustible nucléaire ?",
          "options": [
            "La réaction en chaîne de fission qui est devenue incontrôlable comme une bombe atomique",
            "L'incapacité à évacuer la chaleur résiduelle de désintégration des produits de fission suite à la perte totale d'alimentation électrique des pompes de refroidissement",
            "Une météorite tombée sur le toit du réacteur",
            "L'absence d'uranium dans le cœur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les fissions en chaîne étaient parfaitement arrêtées dès les premières secondes du séisme. C'est l'impossibilité de refroidir le combustible après la submersion des diesels par le tsunami qui a provoqué l'échauffement thermique et la fusion du cœur (perte de la source froide)."
        },
        {
          "id": "phys_tle_cd_16_p6_s2_qcm",
          "type": "mcq",
          "prompt": "D'où provenait l'hydrogène responsable des spectaculaires explosions des bâtiments réacteurs à Fukushima les 12 et 14 mars 2011 ?",
          "options": [
            "D'une fuite des réservoirs de carburant des voitures sur le parking",
            "De l'oxydation des gaines de zirconium du combustible par la vapeur d'eau à plus de 1 000 °C (Zr + 2 H₂O -> ZrO₂ + 2 H₂)",
            "De la fission spontanée de l'eau en hydrogène pur",
            "D'une réaction de fusion thermonucléaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "À très haute température (>1000 °C), le zirconium réagit avec l'eau en arrachant l'oxygène pour former de la zircone (ZrO₂), libérant des tonnes de dihydrogène gazeux hautement explosif."
        },
        {
          "id": "phys_tle_cd_16_p6_s3_qcm",
          "type": "mcq",
          "prompt": "Pourquoi distribue-t-on des comprimés d'iode stable (iodure de potassium non radioactif) aux populations riveraines en cas d'accident nucléaire ?",
          "options": [
            "Pour soigner les brûlures de la peau",
            "Pour saturer préalablement la glande thyroïde en iode sain afin qu'elle n'absorbe pas l'iode 131 radioactif cancérigène présent dans l'air",
            "Pour détruire les radiations dans l'atmosphère",
            "Pour purifier l'eau potable contaminée au césium"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La thyroïde fixe avidement l'iode pour fabriquer ses hormones. En la saturant à 100 % avec de l'iode 127 stable, tout iode 131 radioactif inhalé ultérieurement est immédiatement éliminé par les reins sans être fixé dans l'organisme."
        },
        {
          "id": "phys_tle_cd_16_p6_s4_qcm",
          "type": "mcq",
          "prompt": "Quel est l'objectif fondamental du procédé de vitrification appliqué aux déchets nucléaires de haute activité (HAVL) ?",
          "options": [
            "Rendre les déchets transparents pour mieux les voir",
            "Piéger chimiquement les radioéléments dans une matrice de verre extrêmement résistante à l'eau, à la chaleur et aux radiations pendant des dizaines de millénaires",
            "Éteindre définitivement leur radioactivité en quelques jours",
            "Transformer les déchets en combustible pour fusées"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La matrice vitreuse borosilicatée confine les radionucléides au niveau moléculaire avec un taux de lixiviation par l'eau quasi nul, garantissant leur immobilisation même en cas de contact avec des nappes phréatiques profondes sur des échelles de temps géologiques."
        },
        {
          "id": "phys_tle_cd_16_p6_s5_qcm",
          "type": "mcq",
          "prompt": "Que signifie le sigle ALARA universellement appliqué dans la gestion des installations nucléaires et médicales ?",
          "options": [
            "Arrêt Légal Automatique des Réacteurs Atomiques",
            "As Low As Reasonably Achievable (maintenir les doses aussi basses que raisonnablement possible)",
            "Association de Lutte Anti-Radiations Avancée",
            "Analyse Limite de Radioactivité Artificielle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "ALARA ('As Low As Reasonably Achievable') est le principe directeur mondial de la radioprotection opérationnelle pour réduire au strict minimum toute dose reçue par les soignants, ouvriers et citoyens."
        },
        {
          "id": "phys_tle_cd_16_p6_s6_qcm",
          "type": "mcq",
          "prompt": "Un tissu biologique reçoit une dose absorbée D = 0,05 Gy de rayonnement alpha (facteur de pondération radiologique W_R = 20). Quelle est la dose équivalente H en Sieverts ?",
          "options": [
            "0,05 Sv",
            "0,25 Sv",
            "1,00 Sv",
            "20,0 Sv"
          ],
          "correctAnswerIndex": 2,
          "explanation": "H = D * W_R = 0,05 Gy * 20 = 1,00 Sievert (Sv). Les particules alpha déposent leur énergie de façon très dense sur une distance microscopique, causant des dégâts biologiques considérables."
        },
        {
          "id": "phys_tle_cd_16_p6_s7_qcm",
          "type": "mcq",
          "prompt": "Quelle caractéristique fondamentale confère à la fusion thermonucléaire D-T son statut d'énergie idéale d'avenir par rapport à la fission de l'uranium ?",
          "options": [
            "Elle produit des déchets plastiques recyclables",
            "Un combustible quasi-inépuisable (eau de mer et lithium), une absence de déchets radioactifs à vie longue et une impossibilité physique d'accident par emballement de réaction",
            "Elle ne nécessite aucune installation technique",
            "Elle fonctionne sans chaleur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La fusion offre une combinaison unique au monde : combustible illimité pour des millions d'années, déchet direct inerte (hélium 4), et arrêt instantané automatique en cas de perturbation, éliminant tout risque de catastrophe majeure."
        }
      ]
    }
  ]
};
