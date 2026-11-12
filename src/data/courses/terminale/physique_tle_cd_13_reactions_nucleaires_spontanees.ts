import type { CurriculumChapter } from '../../../lib/curriculum/types';

export const PHYSIQUE_TLE_CD_L13_REACTIONS_NUCLEAIRES_SPONTANEES: CurriculumChapter = {
  "id": "physique_tle_cd_13_reactions_nucleaires_spontanees",
  "order": 13,
  "title": "Réactions nucléaires spontanées (Radioactivité)",
  "summary": "Étude complète et approfondie de la radioactivité naturelle et artificielle : structure du noyau atomique, équivalence masse-énergie, lois de conservation de Soddy, rayonnements alpha, bêta moins, bêta plus et gamma, loi de décroissance radioactive, période radioactive (demi-vie), activité en Becquerel et méthodes de datation.",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "École Numérique de Côte d'Ivoire - Direction de la Pédagogie et de la Formation Continue (DPFC)",
  "points": [
    {
      "id": "pt1_structure_noyau_unite_masse",
      "order": 1,
      "title": "Structure du noyau atomique et équivalence masse-énergie",
      "summary": "Composition du noyau en nucléons (protons et neutrons), écriture symbolique d'un nucléide, isotopes et définition de l'unité de masse atomique (u).",
      "conceptExplanation": "L'expérience de diffusion de Rutherford (1909) a prouvé la structure lacunaire de l'atome, constitué d'un noyau central extrêmement dense chargé positivement autour duquel gravitent les électrons. Le noyau atomique est formé de nucléons : Z protons (charge +e = 1,602.10⁻¹⁹ C, masse m_p = 1,007276 u) et N neutrons (charge nulle, masse m_n = 1,008665 u). Le nombre de masse A = Z + N représente le nombre total de nucléons. Un nucléide est symbolisé par ^A_Z X. Deux isotopes possèdent le même numéro atomique Z mais des nombres de masse A différents. À l'échelle subatomique, les masses s'expriment en unité de masse atomique (u), définie comme 1/12 de la masse d'un atome de carbone 12 (^12_6 C), soit 1 u = 1,66054.10⁻²⁷ kg. En vertu de l'équivalence masse-énergie d'Einstein (E = m.c²), 1 u équivaut à une énergie au repos de 931,5 MeV/c².",
      "keyRule": "Pour tout nucléide ^A_Z X : Z est le nombre de protons, A le nombre de nucléons et N = A - Z le nombre de neutrons. La masse d'un nucléide s'exprime en u, avec 1 u = 1,66054.10⁻²⁷ kg = 931,5 MeV/c².",
      "formulas": [
        {
          "name": "Relation 1",
          "formula": "A = Z + N"
        },
        {
          "name": "Relation 2",
          "formula": "N = A - Z"
        },
        {
          "name": "Relation 3",
          "formula": "1\\text{ u} = \\frac{1}{12}m(^{12}_6\\text{C}) \\approx 1{,}66054 \\times 10^{-27}\\text{ kg}"
        },
        {
          "name": "Relation 4",
          "formula": "E_0 = m c^2 \\implies 1\\text{ u} \\approx 931{,}5\\text{ MeV}/c^2"
        }
      ],
      "workedExample": {
        "title": "Dénombrement des nucléons et conversion énergétique d'un noyau d'Uranium 235",
        "statement": "On considère le noyau d'uranium 235 symbolisé par ^{235}_{92}U. Déterminer sa composition nucléaire (protons, neutrons, nucléons). Calculer ensuite la masse théorique totale des nucléons séparés en unités de masse atomique (u) puis l'énergie de masse correspondante en MeV. Données : m_p = 1,00728 u ; m_n = 1,00866 u ; 1 u = 931,5 MeV/c².",
        "methodSteps": [
          "Étape 1 : Identifier le numéro atomique Z et le nombre de masse A à partir de la notation ^{235}_{92}U : Z = 92 protons, A = 235 nucléons.",
          "Étape 2 : Déduire le nombre de neutrons N par la relation fondamentale N = A - Z = 235 - 92 = 143 neutrons.",
          "Étape 3 : Calculer la somme des masses des constituants séparés : m_total = Z.m_p + N.m_n = 92*(1,00728 u) + 143*(1,00866 u) = 92,66976 u + 144,23838 u = 236,90814 u.",
          "Étape 4 : Déterminer l'équivalent énergétique de cette masse au repos : E_total = m_total * 931,5 MeV/u = 236,90814 * 931,5 ≈ 220 679,9 MeV."
        ],
        "conclusion": "Le noyau d'uranium 235 est composé de 92 protons et 143 neutrons, totalisant 235 nucléons dont la masse à l'état dissocié équivaut à environ 2,21.10⁵ MeV."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Synthèse des caractéristiques des constituants du noyau et unités nucléaires",
        "tableData": {
          "headers": [
            "Particule / Grandeur",
            "Symbole",
            "Charge électrique (C)",
            "Masse (kg)",
            "Masse (u) / Équivalence"
          ],
          "rows": [
            [
              "Proton",
              "p ou ^1_1 p",
              "+1,602.10⁻¹⁹ C (+e)",
              "1,6726.10⁻²⁷ kg",
              "1,007276 u (938,27 MeV/c²)"
            ],
            [
              "Neutron",
              "n ou ^1_0 n",
              "0 C (neutre)",
              "1,6749.10⁻²⁷ kg",
              "1,008665 u (939,57 MeV/c²)"
            ],
            [
              "Électron",
              "e⁻ ou ^0_{-1} e",
              "-1,602.10⁻¹⁹ C (-e)",
              "9,109.10⁻³¹ kg",
              "0,000549 u (0,511 MeV/c²)"
            ],
            [
              "Unité atomique (u)",
              "1 u",
              "Sans objet",
              "1,66054.10⁻²⁷ kg",
              "931,5 MeV/c²"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Structure lacunaire de l'atome et modèle nucléaire",
          "stepTheme": "Nucléons et atome",
          "stepBadge": "Fondement",
          "paragraphText": "L'expérience historique menée par Ernest Rutherford en 1909 consiste à bombarder une feuille d'or ultramince (épaisseur ~ 0,1 µm) avec des particules alpha (^4_2He). La quasi-totalité des particules traverse sans subir de déviation notable, tandis qu'une infime proportion (environ 1 sur 10 000) subit de fortes déviations ou rebrousse chemin. Cette observation prouve que la matière atomique est essentiellement vide : l'atome possède une structure lacunaire. La quasi-totalité de la masse et l'intégralité de la charge positive sont concentrées dans un volume minuscule au centre : le noyau atomique, de rayon de l'ordre de 10⁻¹⁵ m (le femtomètre ou fermi), soit 100 000 fois plus petit que l'atome lui-même (10⁻¹⁰ m).",
          "exercise": {
            "id": "p1_s1_qcm",
            "type": "mcq",
            "prompt": "Sachant que le rayon typique d'un atome est de 10⁻¹⁰ m et celui de son noyau de 10⁻¹⁵ m, quel est l'ordre de grandeur du rapport entre le volume de l'atome et le volume de son noyau ?",
            "options": [
              "10⁵ fois plus grand",
              "10¹⁰ fois plus grand",
              "10¹⁵ fois plus grand",
              "10²⁰ fois plus grand"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le volume d'une sphère étant proportionnel au cube de son rayon (V ~ r³), le rapport des volumes vaut (r_atome / r_noyau)³ = (10⁻¹⁰ / 10⁻¹⁵)³ = (10⁵)³ = 10¹⁵. Le volume de l'atome est donc environ 10¹⁵ fois supérieur à celui du noyau, ce qui illustre le caractère lacunaire de la matière."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Caractérisation des nucléons et nombre de masse",
          "stepTheme": "Composition du noyau",
          "stepBadge": "Propriété",
          "paragraphText": "Le noyau est un édifice constitué de nucléons, nom générique regroupant les protons et les neutrons. Le proton possède une charge élémentaire positive q_p = +e = +1,602.10⁻¹⁹ C et une masse au repos m_p = 1,6726.10⁻²⁷ kg. Le neutron est électriquement neutre (q_n = 0 C) et possède une masse légèrement supérieure à celle du proton : m_n = 1,6749.10⁻²⁷ kg. Le nombre de protons Z, appelé numéro atomique ou nombre de charge, définit l'élément chimique et détermine le nombre d'électrons du cortège électronique de l'atome neutre. Le nombre de neutrons est N, et le nombre total de nucléons est A = Z + N.",
          "exercise": {
            "id": "p1_s2_qcm",
            "type": "mcq",
            "prompt": "Un noyau inconnu contient 82 protons et 126 neutrons. Quelle est la notation symbolique standard de ce nucléide sachant que Z=82 correspond au plomb (Pb) ?",
            "options": [
              "^{126}_{82}Pb",
              "^{208}_{82}Pb",
              "^{82}_{126}Pb",
              "^{208}_{126}Pb"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le nombre de masse A est la somme des protons et des neutrons : A = Z + N = 82 + 126 = 208. La notation conventionnelle est ^A_Z X, soit ici ^{208}_{82}Pb."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Notion d'isotopes et d'élément chimique",
          "stepTheme": "Isotopie",
          "stepBadge": "Définition",
          "paragraphText": "Un élément chimique est l'ensemble de tous les atomes et ions possédant le même numéro atomique Z (même nombre de protons). Deux nucléides isotopes appartiennent au même élément chimique : ils ont le même Z mais un nombre de masse A différent (donc un nombre de neutrons N différent). Partageant la même structure électronique périphérique, les isotopes possèdent des propriétés chimiques strictement identiques. En revanche, leurs propriétés nucléaires (stabilité, modes de désintégration, masse) peuvent être radicalement divergentes. À titre d'exemple, le carbone naturel comprend le carbone 12 stable (6 protons, 6 neutrons), le carbone 13 stable (6 protons, 7 neutrons) et le carbone 14 radioactif (6 protons, 8 neutrons).",
          "exercise": {
            "id": "p1_s3_qcm",
            "type": "mcq",
            "prompt": "Parmi les paires de nucléides suivantes, laquelle est constituée de deux isotopes ?",
            "options": [
              "^{14}_6 C et ^{14}_7 N",
              "^{40}_{19} K et ^{40}_{20} Ca",
              "^{235}_{92} U et ^{238}_{92} U",
              "^{3}_1 H et ^{3}_2 He"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Des isotopes doivent obligatoirement posséder le même numéro atomique Z et des nombres de masse A distincts. Pour ^{235}_{92}U et ^{238}_{92}U, Z = 92 pour les deux alors que A vaut 235 et 238 : ce sont deux isotopes de l'uranium. Les autres paires sont des isobares (même A, Z différent)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Unité de masse atomique (u) et calculs de conversion",
          "stepTheme": "Masse atomique",
          "stepBadge": "Standard",
          "paragraphText": "En physique nucléaire, le kilogramme est une unité inadaptée en raison des ordres de grandeur infinitésimaux en jeu (10⁻²⁷ kg). La communauté scientifique utilise l'unité de masse atomique unifiée (symbole u), définie conventionnellement comme exactement 1/12 de la masse au repos d'un atome neutre de carbone 12 (^12_6 C). Sachant qu'une mole d'atomes de carbone 12 a une masse molaire de 12 g = 0,012 kg et contient N_A = 6,022.10²³ atomes, on déduit : 1 u = 0,012 / (12 * 6,02214.10²³) = 1 / (1000 * N_A) ≈ 1,66054.10⁻²⁷ kg.",
          "exercise": {
            "id": "p1_s4_qcm",
            "type": "mcq",
            "prompt": "Sachant qu'un échantillon pur d'hélium 4 (^4_2He) a une masse mesurée de 2,000 g et que la masse d'un atome d'hélium 4 vaut m_He = 4,0026 u, combien de noyaux d'hélium contient approximativement cet échantillon ? (1 u = 1,6605.10⁻²⁷ kg)",
            "options": [
              "3,01.10²³ noyaux",
              "6,02.10²³ noyaux",
              "1,50.10²⁴ noyaux",
              "4,98.10²² noyaux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La masse d'un atome en kg est m_atome = 4,0026 * 1,6605.10⁻²⁷ kg ≈ 6,646.10⁻²⁷ kg. Pour une masse totale m = 2,000 g = 2,000.10⁻³ kg, le nombre de noyaux est N = m / m_atome = 2,000.10⁻³ / 6,646.10⁻²⁷ ≈ 3,01.10²³ noyaux."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Équivalence masse-énergie d'Einstein et MeV/c²",
          "stepTheme": "Relativité restreinte",
          "stepBadge": "Formule clé",
          "paragraphText": "Albert Einstein a établi en 1905 que toute particule au repos de masse m possède une énergie intrinsèque E_0 = m.c², où c est la vitesse de la lumière dans le vide (c ≈ 2,99792.10⁸ m/s). En physique des particules, l'énergie s'exprime en électronvolts (1 eV = 1,602.10⁻¹⁹ J) ou mégaélectronvolts (1 MeV = 1,602.10⁻¹³ J). L'équivalence énergétique d'une unité de masse atomique est obtenue par : E(1 u) = 1,66054.10⁻²⁷ kg * (2,99792.10⁸ m/s)² ≈ 1,4924.10⁻¹⁰ J. En convertissant en MeV : E(1 u) = 1,4924.10⁻¹⁰ / 1,60218.10⁻¹³ ≈ 931,5 MeV. On peut donc exprimer directement les masses en MeV/c² : 1 u = 931,5 MeV/c².",
          "exercise": {
            "id": "p1_s5_qcm",
            "type": "mcq",
            "prompt": "Un positon et un électron, chacun de masse m = 0,000549 u, s'annihilent mutuellement au repos pour former deux photons gamma identiques. Quelle est l'énergie de chacun des photons émis ?",
            "options": [
              "0,255 MeV",
              "0,511 MeV",
              "1,022 MeV",
              "931,5 MeV"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'énergie de masse totale des deux particules au repos est E_tot = 2 * m * c² = 2 * (0,000549 u * 931,5 MeV/u) ≈ 1,0228 MeV. Cette énergie est partagée à parts égales entre les deux photons émis à 180° : E_photon = E_tot / 2 ≈ 0,511 MeV."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Confusion entre masse atomique et nombre de masse entier",
          "stepTheme": "Rigueur métrologique",
          "stepBadge": "Attention piège",
          "paragraphText": "Il ne faut jamais confondre le nombre de masse A et la masse réelle m d'un noyau. Le nombre de masse A est strictement un entier sans unité comptabilisant les nucléons. La masse réelle d'un noyau mesurée en u n'est jamais rigoureusement égale à A (sauf par définition pour le carbone 12 qui vaut exactement 12 u). Cette infime différence de masse, appelée défaut de masse, provient de l'énergie de liaison qui maintient les nucléons soudés au sein du noyau par l'interaction forte. De plus, la masse atomique d'un élément chimique figurant dans le tableau périodique est une moyenne pondérée par l'abondance isotopique naturelle des différents isotopes de cet élément.",
          "exercise": {
            "id": "p1_s6_qcm",
            "type": "mcq",
            "prompt": "Le chlore naturel est constitué de deux isotopes stables : le chlore 35 (masse 34,97 u, abondance 75,77 %) et le chlore 37 (masse 36,97 u, abondance 24,23 %). Quelle est la masse atomique moyenne du chlore ?",
            "options": [
              "35,00 u",
              "35,45 u",
              "36,00 u",
              "36,45 u"
            ],
            "correctAnswerIndex": 1,
            "explanation": "M = 0,7577 * 34,97 + 0,2423 * 36,97 = 26,4967 + 8,9578 = 35,45 u. Cela explique pourquoi la masse molaire atomique inscrite dans le tableau périodique vaut 35,5 g/mol."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Application aux ordres de grandeur de la densité nucléaire",
          "stepTheme": "Densité de la matière nucléaire",
          "stepBadge": "Calcul d'échelle",
          "paragraphText": "Le rayon d'un noyau atomique suit approximativement la loi empirique R = R_0 * A^(1/3), avec R_0 ≈ 1,2.10⁻¹⁵ m (1,2 fm). Le volume du noyau vaut donc V = (4/3)*pi*R³ = (4/3)*pi*R_0³ * A. On remarque que le volume est rigoureusement proportionnel au nombre de nucléons A. Par conséquent, la masse volumique de la matière nucléaire rho = m_noyau / V ≈ (A * u) / ((4/3)*pi*R_0³ * A) = u / ((4/3)*pi*R_0³) est constante pour tous les noyaux de l'univers ! Cette masse volumique vaut environ 2,3.10¹⁷ kg/m³, soit 230 millions de tonnes par centimètre cube.",
          "exercise": {
            "id": "p1_s7_qcm",
            "type": "mcq",
            "prompt": "Si l'on comprimait une masse équivalente à celle d'un être humain (70 kg) jusqu'à atteindre la masse volumique de la matière nucléaire (rho = 2,3.10¹⁷ kg/m³), quel serait approximativement le volume occupé ?",
            "options": [
              "3,0.10⁻¹⁶ m³ (une sphère de rayon ~ 0,4 µm)",
              "3,0.10⁻¹⁰ m³",
              "7,0.10⁻³ m³",
              "1,5.10⁻² m³"
            ],
            "correctAnswerIndex": 0,
            "explanation": "V = m / rho = 70 / (2,3.10¹⁷) ≈ 3,04.10⁻¹⁶ m³. Sachant que V = (4/3)*pi*r³, on obtient r = [3*V / (4*pi)]^(1/3) ≈ [7,26.10⁻¹⁷]^(1/3) ≈ 4,17.10⁻⁶ m = 4,2 µm. C'est l'ordre de grandeur d'une seule cellule bactérienne."
          }
        }
      ],
      "exercises": [
        {
          "id": "p1_s1_qcm",
          "type": "mcq",
          "prompt": "Sachant que le rayon typique d'un atome est de 10⁻¹⁰ m et celui de son noyau de 10⁻¹⁵ m, quel est l'ordre de grandeur du rapport entre le volume de l'atome et le volume de son noyau ?",
          "options": [
            "10⁵ fois plus grand",
            "10¹⁰ fois plus grand",
            "10¹⁵ fois plus grand",
            "10²⁰ fois plus grand"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le volume d'une sphère étant proportionnel au cube de son rayon (V ~ r³), le rapport des volumes vaut (r_atome / r_noyau)³ = (10⁻¹⁰ / 10⁻¹⁵)³ = (10⁵)³ = 10¹⁵. Le volume de l'atome est donc environ 10¹⁵ fois supérieur à celui du noyau, ce qui illustre le caractère lacunaire de la matière."
        },
        {
          "id": "p1_s2_qcm",
          "type": "mcq",
          "prompt": "Un noyau inconnu contient 82 protons et 126 neutrons. Quelle est la notation symbolique standard de ce nucléide sachant que Z=82 correspond au plomb (Pb) ?",
          "options": [
            "^{126}_{82}Pb",
            "^{208}_{82}Pb",
            "^{82}_{126}Pb",
            "^{208}_{126}Pb"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le nombre de masse A est la somme des protons et des neutrons : A = Z + N = 82 + 126 = 208. La notation conventionnelle est ^A_Z X, soit ici ^{208}_{82}Pb."
        },
        {
          "id": "p1_s3_qcm",
          "type": "mcq",
          "prompt": "Parmi les paires de nucléides suivantes, laquelle est constituée de deux isotopes ?",
          "options": [
            "^{14}_6 C et ^{14}_7 N",
            "^{40}_{19} K et ^{40}_{20} Ca",
            "^{235}_{92} U et ^{238}_{92} U",
            "^{3}_1 H et ^{3}_2 He"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Des isotopes doivent obligatoirement posséder le même numéro atomique Z et des nombres de masse A distincts. Pour ^{235}_{92}U et ^{238}_{92}U, Z = 92 pour les deux alors que A vaut 235 et 238 : ce sont deux isotopes de l'uranium. Les autres paires sont des isobares (même A, Z différent)."
        },
        {
          "id": "p1_s4_qcm",
          "type": "mcq",
          "prompt": "Sachant qu'un échantillon pur d'hélium 4 (^4_2He) a une masse mesurée de 2,000 g et que la masse d'un atome d'hélium 4 vaut m_He = 4,0026 u, combien de noyaux d'hélium contient approximativement cet échantillon ? (1 u = 1,6605.10⁻²⁷ kg)",
          "options": [
            "3,01.10²³ noyaux",
            "6,02.10²³ noyaux",
            "1,50.10²⁴ noyaux",
            "4,98.10²² noyaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La masse d'un atome en kg est m_atome = 4,0026 * 1,6605.10⁻²⁷ kg ≈ 6,646.10⁻²⁷ kg. Pour une masse totale m = 2,000 g = 2,000.10⁻³ kg, le nombre de noyaux est N = m / m_atome = 2,000.10⁻³ / 6,646.10⁻²⁷ ≈ 3,01.10²³ noyaux."
        },
        {
          "id": "p1_s5_qcm",
          "type": "mcq",
          "prompt": "Un positon et un électron, chacun de masse m = 0,000549 u, s'annihilent mutuellement au repos pour former deux photons gamma identiques. Quelle est l'énergie de chacun des photons émis ?",
          "options": [
            "0,255 MeV",
            "0,511 MeV",
            "1,022 MeV",
            "931,5 MeV"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'énergie de masse totale des deux particules au repos est E_tot = 2 * m * c² = 2 * (0,000549 u * 931,5 MeV/u) ≈ 1,0228 MeV. Cette énergie est partagée à parts égales entre les deux photons émis à 180° : E_photon = E_tot / 2 ≈ 0,511 MeV."
        },
        {
          "id": "p1_s6_qcm",
          "type": "mcq",
          "prompt": "Le chlore naturel est constitué de deux isotopes stables : le chlore 35 (masse 34,97 u, abondance 75,77 %) et le chlore 37 (masse 36,97 u, abondance 24,23 %). Quelle est la masse atomique moyenne du chlore ?",
          "options": [
            "35,00 u",
            "35,45 u",
            "36,00 u",
            "36,45 u"
          ],
          "correctAnswerIndex": 1,
          "explanation": "M = 0,7577 * 34,97 + 0,2423 * 36,97 = 26,4967 + 8,9578 = 35,45 u. Cela explique pourquoi la masse molaire atomique inscrite dans le tableau périodique vaut 35,5 g/mol."
        },
        {
          "id": "p1_s7_qcm",
          "type": "mcq",
          "prompt": "Si l'on comprimait une masse équivalente à celle d'un être humain (70 kg) jusqu'à atteindre la masse volumique de la matière nucléaire (rho = 2,3.10¹⁷ kg/m³), quel serait approximativement le volume occupé ?",
          "options": [
            "3,0.10⁻¹⁶ m³ (une sphère de rayon ~ 0,4 µm)",
            "3,0.10⁻¹⁰ m³",
            "7,0.10⁻³ m³",
            "1,5.10⁻² m³"
          ],
          "correctAnswerIndex": 0,
          "explanation": "V = m / rho = 70 / (2,3.10¹⁷) ≈ 3,04.10⁻¹⁶ m³. Sachant que V = (4/3)*pi*r³, on obtient r = [3*V / (4*pi)]^(1/3) ≈ [7,26.10⁻¹⁷]^(1/3) ≈ 4,17.10⁻⁶ m = 4,2 µm. C'est l'ordre de grandeur d'une seule cellule bactérienne."
        }
      ]
    },
    {
      "id": "pt2_types_emissions_lois_soddy",
      "order": 2,
      "title": "Types de rayonnements radioactifs et lois de conservation de Soddy",
      "summary": "Définition de la radioactivité spontanée, lois de conservation de Soddy (charge et masse), caractéristiques des émissions alpha, bêta moins, bêta plus et gamma.",
      "conceptExplanation": "La radioactivité est la désintégration spontanée, inéluctable et aléatoire d'un noyau atomique instable (noyau père) en un autre noyau (noyau fils), accompagnée de l'émission de particules matérielles et/ou d'un rayonnement électromagnétique ionisant. Toute réaction nucléaire vérifie impérativement les deux lois de conservation de Soddy : 1. Conservation du nombre total de nucléons A : la somme des nombres de masse des réactifs est égale à la somme des nombres de masse des produits (A_initial = Σ A_produits). 2. Conservation de la charge électrique totale Z : la somme des numéros atomiques des réactifs est égale à celle des produits (Z_initial = Σ Z_produits). Les trois principaux modes de désintégration corpusculaire sont la radioactivité alpha (^4_2He), bêta moins (^0_{-1}e) et bêta plus (^0_1e), souvent suivies d'une désexcitation gamma (^0_0 γ).",
      "keyRule": "Lois de Soddy pour ^A_Z X -> ^{A'}_{Z'} Y + ^{A''}_{Z''} P : A = A' + A'' (conservation des nucléons) et Z = Z' + Z'' (conservation de la charge électrique).",
      "formulas": [
        {
          "name": "Relation 1",
          "formula": "A_{\\text{père}} = \\sum A_{\\text{fils}}"
        },
        {
          "name": "Relation 2",
          "formula": "Z_{\\text{père}} = \\sum Z_{\\text{fils}}"
        },
        {
          "name": "Relation 3",
          "formula": "\\text{Alpha (}\\alpha\\text{) : } ^{A}_{Z}X \\longrightarrow ^{A-4}_{Z-2}Y + ^{4}_{2}\\text{He}"
        },
        {
          "name": "Relation 4",
          "formula": "\\text{Bêta moins (}\\beta^-\\text{) : } ^{A}_{Z}X \\longrightarrow ^{A}_{Z+1}Y + ^{0}_{-1}\\text{e} + \\bar{\\nu}"
        },
        {
          "name": "Relation 5",
          "formula": "\\text{Bêta plus (}\\beta^+\\text{) : } ^{A}_{Z}X \\longrightarrow ^{A}_{Z-1}Y + ^{0}_{1}\\text{e} + \\nu"
        }
      ],
      "workedExample": {
        "title": "Identification complète d'une chaîne de désintégrations radioactives",
        "statement": "Le noyau de Polonium 210 (^{210}_{84}Po) subit une désintégration alpha en produisant un noyau fils de plomb (Pb). Écrire l'équation-bilan équilibrée. Dans une seconde réaction, le noyau de bismuth 210 (^{210}_{83}Bi) se désintègre par émission bêta moins en produisant un noyau Y. Déterminer la nature et les coordonnées (A, Z) du noyau Y.",
        "methodSteps": [
          "Étape 1 : Écrire la forme générale pour la désintégration alpha de ^{210}_{84}Po : ^{210}_{84}Po -> ^A_Z Pb + ^4_2He.",
          "Étape 2 : Appliquer les lois de Soddy : conservation de A => 210 = A + 4 => A = 206 ; conservation de Z => 84 = Z + 2 => Z = 82. Le noyau fils est le plomb 206 : ^{206}_{82}Pb.",
          "Étape 3 : Écrire l'équation bêta moins de ^{210}_{83}Bi : ^{210}_{83}Bi -> ^{A'}_{Z'} Y + ^0_{-1}e + \\bar{\\nu}.",
          "Étape 4 : Appliquer les lois de Soddy : A' = 210 ; Z' - 1 = 83 => Z' = 84. Le numéro atomique 84 correspond au Polonium. Le noyau Y est donc le polonium 210 : ^{210}_{84}Po."
        ],
        "conclusion": "Les équations complètes sont : ^{210}_{84}Po -> ^{206}_{82}Pb + ^4_2He et ^{210}_{83}Bi -> ^{210}_{84}Po + ^0_{-1}e + \\bar{\\nu}."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau comparatif des quatre modes d'émissions radioactives",
        "tableData": {
          "headers": [
            "Rayonnement",
            "Nature de la particule",
            "Équation-type",
            "Noyaux concernés",
            "Pouvoir de pénétration"
          ],
          "rows": [
            [
              "Alpha (α)",
              "Noyau d'hélium (^4_2He)",
              "^A_Z X -> ^{A-4}_{Z-2}Y + ^4_2He",
              "Noyaux lourds instables (A > 200, Z > 82)",
              "Très faible (arrêté par une feuille de papier ou l'épiderme)"
            ],
            [
              "Bêta moins (β⁻)",
              "Électron rapide (^0_{-1}e)",
              "^A_Z X -> ^A_{Z+1}Y + ^0_{-1}e + ν̄",
              "Noyaux présentant un excès de neutrons",
              "Moyen (arrêté par quelques millimètres d'aluminium)"
            ],
            [
              "Bêta plus (β⁺)",
              "Positon / positron (^0_1e)",
              "^A_Z X -> ^A_{Z-1}Y + ^0_1e + ν",
              "Noyaux présentant un excès de protons",
              "Moyen (s'annihile rapidement avec un électron voisin)"
            ],
            [
              "Gamma (γ)",
              "Photon électromagnétique (^0_0γ)",
              "^A_Z Y* -> ^A_Z Y + ^0_0γ",
              "Désexcitation de noyaux fils excités",
              "Très élevé (nécessite une épaisse couche de plomb ou de béton)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Caractère spontané et inéluctable de la désintégration radioactive",
          "stepTheme": "Nature de la radioactivité",
          "stepBadge": "Définition",
          "paragraphText": "La radioactivité a été découverte en 1896 par Henri Becquerel sur des sels d'uranium, puis étudiée de manière pionnière par Pierre et Marie Curie. Il s'agit d'un phénomène nucléaire purement spontané : il ne dépend ni de la température, ni de la pression, ni de l'état physique (solide, liquide, gaz), ni des liaisons chimiques dans lesquelles l'atome est engagé. Un noyau radioactif instable finit inéluctablement par se désintégrer sans qu'aucun facteur extérieur ne puisse accélérer ou freiner le processus.",
          "exercise": {
            "id": "p2_s1_qcm",
            "type": "mcq",
            "prompt": "Un composé contenant du radium 226 est chauffé de 20 °C à 1500 °C sous une pression de 200 bars. Comment évolue la probabilité de désintégration par seconde d'un noyau de radium ?",
            "options": [
              "Elle est multipliée par un facteur d'au moins 10 due à l'agitation thermique",
              "Elle diminue car la pression stabilise le réseau cristallin",
              "Elle reste rigoureusement inchangée car les forces nucléaires sont insensibles aux facteurs physico-chimiques",
              "Elle est annulée car le radium s'ionise complètement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La radioactivité est une propriété intrinsèque du noyau atomique gouvernée par l'interaction forte et l'interaction faible, dont les énergies de liaison (plusieurs MeV) sont des millions de fois supérieures aux énergies thermiques ou chimiques (quelques eV). La température et la pression n'ont aucun effet mesurable sur la constante de désintégration."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Lois de conservation de Frederick Soddy",
          "stepTheme": "Lois de Soddy",
          "stepBadge": "Principe fondamental",
          "paragraphText": "Énoncées en 1913 par le chimiste britannique Frederick Soddy, les lois de conservation régissent l'intégralité des transformations nucléaires : 1. Conservation de la charge : la somme algébrique des numéros atomiques Z des réactifs est égale à celle des produits. 2. Conservation du nombre de nucléons : la somme algébrique des nombres de masse A des réactifs est égale à celle des produits. Remarque essentielle : la masse au repos globale n'est pas rigoureusement conservée (il y a libération d'énergie cinétique et radiative selon E = Δm.c²), mais le nombre total de nucléons A est strictement conservé.",
          "exercise": {
            "id": "p2_s2_qcm",
            "type": "mcq",
            "prompt": "Le thorium 234 (^{234}_{90}Th) subit deux désintégrations consécutives : d'abord une émission β⁻, puis le noyau intermédiaire subit à son tour une émission β⁻. Quel est le noyau final obtenu ?",
            "options": [
              "^{234}_{88}Ra",
              "^{230}_{86}Rn",
              "^{234}_{92}U",
              "^{238}_{92}U"
            ],
            "correctAnswerIndex": 2,
            "explanation": "À chaque émission β⁻, A reste inchangé et Z augmente de 1 : ^{234}_{90}Th -> ^{234}_{91}Pa + ^0_{-1}e ; puis ^{234}_{91}Pa -> ^{234}_{92}U + ^0_{-1}e. Le noyau final possède A = 234 et Z = 92, ce qui correspond à l'isotope d'uranium 234."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Radioactivité alpha (α) et noyaux lourds",
          "stepTheme": "Émission alpha",
          "stepBadge": "Particule α",
          "paragraphText": "La radioactivité alpha concerne quasi exclusivement les noyaux lourds dont le nombre de masse A > 200 et le numéro atomique Z > 82. Pour ces noyaux volumineux, la répulsion coulombienne entre protons l'emporte sur l'attraction nucléaire à courte portée. Le noyau éjecte un bloc particulièrement stable formé de 2 protons et 2 neutrons : une particule alpha, qui n'est autre qu'un noyau d'hélium 4 (^4_2He). L'équation générale s'écrit : ^A_Z X -> ^{A-4}_{Z-2} Y + ^4_2He. Du fait de leur masse élevée et de leur double charge positive (+2e), les particules alpha sont très ionisantes mais ont un parcours très court dans l'air (quelques centimètres) et sont stoppées par une simple feuille de papier.",
          "exercise": {
            "id": "p2_s3_qcm",
            "type": "mcq",
            "prompt": "Un noyau d'Uranium 238 (^{238}_{92}U) se désintègre en un noyau de Plomb 206 (^{206}_{82}Pb) par une succession de désintégrations alpha (α) et bêta moins (β⁻). Combien de particules alpha ont été émises au cours de cette chaîne ?",
            "options": [
              "6 particules alpha",
              "8 particules alpha",
              "12 particules alpha",
              "16 particules alpha"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Seules les particules alpha modifient le nombre de masse A (chaque émission α diminue A de 4, tandis que β⁻ laisse A inchangé). La variation totale de A est ΔA = 238 - 206 = 32. Le nombre de désintégrations alpha est donc n_α = 32 / 4 = 8 particules alpha. (Pour information, pour équilibrer la charge : 92 - 8*2 = 76 ; pour atteindre Z = 82, il y a également 82 - 76 = 6 émissions β⁻)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Radioactivité bêta moins (β⁻) et excès de neutrons",
          "stepTheme": "Émission bêta moins",
          "stepBadge": "Particule β⁻",
          "paragraphText": "La radioactivité bêta moins se produit chez les noyaux situés au-dessus de la vallée de stabilité, c'est-à-dire qui possèdent un excès de neutrons par rapport aux nucléides stables correspondants. Au sein du noyau, un neutron se transforme spontanément en un proton avec éjection simultanée d'un électron rapide (particule β⁻, notée ^0_{-1}e) et d'un antineutrino électronique ν̄ (particule sans charge et de masse quasi nulle) : ^1_0n -> ^1_1p + ^0_{-1}e + ν̄. Le noyau fils possède le même nombre de masse A mais son numéro atomique augmente d'une unité : ^A_Z X -> ^A_{Z+1} Y + ^0_{-1}e + ν̄.",
          "exercise": {
            "id": "p2_s4_qcm",
            "type": "mcq",
            "prompt": "Le carbone 14 (^{14}_6 C) est radioactif β⁻. Quel noyau fils résulte directement de sa désintégration ?",
            "options": [
              "^{14}_5 B",
              "^{14}_7 N",
              "^{12}_6 C",
              "^{10}_4 Be"
            ],
            "correctAnswerIndex": 1,
            "explanation": "En appliquant les lois de Soddy : A = 14 reste inchangé ; Z = 6 + 1 = 7. Le numéro atomique 7 correspond à l'azote N. Le noyau fils est donc l'azote 14 : ^{14}_7 N."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Radioactivité bêta plus (β⁺) et excès de protons",
          "stepTheme": "Émission bêta plus",
          "stepBadge": "Particule β⁺",
          "paragraphText": "La radioactivité bêta plus s'observe chez les noyaux artificiels instables situés au-dessous de la vallée de stabilité, caractérisés par un excès de protons. Dans le noyau, un proton se convertit en neutron en émettant un positon (ou positron, antiparticule de l'électron, noté ^0_1e) et un neutrino électronique ν : ^1_1p -> ^1_0n + ^0_1e + ν. L'équation de désintégration est : ^A_Z X -> ^A_{Z-1} Y + ^0_1e + ν. Le noyau fils conserve le même nombre de masse A mais son numéro atomique Z diminue d'une unité.",
          "exercise": {
            "id": "p2_s5_qcm",
            "type": "mcq",
            "prompt": "L'azote 12 (^{12}_7 N) est un émetteur β⁺ utilisé en tomographie par émission de positons. Quel est le noyau fils obtenu ?",
            "options": [
              "^{12}_6 C",
              "^{12}_8 O",
              "^{11}_6 C",
              "^{13}_7 N"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D'après les lois de Soddy pour l'émission β⁺ : A = 12 reste constant, et Z_fils = 7 - 1 = 6. L'élément de numéro atomique 6 est le carbone. On obtient le carbone 12 : ^{12}_6 C."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Désexcitation gamma (γ) et rayonnements électromagnétiques",
          "stepTheme": "Rayonnement gamma",
          "stepBadge": "Photon γ",
          "paragraphText": "À l'issue d'une désintégration alpha ou bêta, le noyau fils n'est généralement pas créé dans son état d'énergie fondamental mais dans un état quantique excité instable, noté Y*. Ce noyau se désexcite quasi instantanément (durée de vie typique < 10⁻¹² s) en effectuant une transition vers un état de plus basse énergie ou vers l'état fondamental. L'énergie libérée est évacuée sous forme d'un photon électromagnétique de très haute énergie (rayonnement gamma, ^0_0γ), dont la fréquence dépasse 10²⁰ Hz (longueur d'onde λ < 10⁻¹² m). L'équation s'écrit : ^A_Z Y* -> ^A_Z Y + ^0_0γ.",
          "exercise": {
            "id": "p2_s6_qcm",
            "type": "mcq",
            "prompt": "Lors de la désexcitation d'un noyau de nickel 60 (^{60}_{28}Ni*), un photon gamma d'énergie E_γ = 1,33 MeV est émis. Quelle est la variation de masse correspondante subie par le noyau en unités de masse atomique u ? (1 u = 931,5 MeV/c²)",
            "options": [
              "1,43.10⁻³ u",
              "1,33 u",
              "7,00.10⁻⁴ u",
              "931,5.10⁻³ u"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D'après la relation d'Einstein ΔE = Δm.c², la perte de masse associée à l'énergie rayonnée est Δm = E_γ / (931,5 MeV/u) = 1,33 / 931,5 ≈ 0,001428 u ≈ 1,43.10⁻³ u."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Méthode rigoureuse d'équilibrage d'une équation nucléaire inconnue",
          "stepTheme": "Technique de résolution",
          "stepBadge": "Méthode d'examen",
          "paragraphText": "Face à une réaction nucléaire où une particule ou un nucléide est inconnu, la démarche méthodique consiste à : 1. Noter l'inconnu sous la forme symbolique ^A_Z X. 2. Écrire le système de deux équations indépendantes issu des lois de Soddy : Σ A_initial = Σ A_final et Σ Z_initial = Σ Z_final. 3. Résoudre ce système arithmétique pour déterminer A et Z. 4. Identifier la particule si A et Z correspondent aux particules standard (^4_2He pour α, ^0_{-1}e pour β⁻, ^0_1e pour β⁺, ^1_0n pour neutron, ^1_1p pour proton), ou identifier l'élément chimique dans la classification périodique grâce à la valeur de Z.",
          "exercise": {
            "id": "p2_s7_qcm",
            "type": "mcq",
            "prompt": "Dans la haute atmosphère terrestre, un neutron cosmique frappe un noyau d'azote 14 selon la réaction : ^{14}_7 N + ^1_0 n -> ^{14}_6 C + ^A_Z X. Quelle est la nature de la particule émise ^A_Z X ?",
            "options": [
              "Un électron (^0_{-1}e)",
              "Un proton (^1_1p)",
              "Une particule alpha (^4_2He)",
              "Un photon gamma (^0_0γ)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conservation de A : 14 + 1 = 14 + A => A = 1. Conservation de Z : 7 + 0 = 6 + Z => Z = 1. La particule possédant A = 1 et Z = 1 est un proton (^1_1p ou ^1_1H)."
          }
        }
      ],
      "exercises": [
        {
          "id": "p2_s1_qcm",
          "type": "mcq",
          "prompt": "Un composé contenant du radium 226 est chauffé de 20 °C à 1500 °C sous une pression de 200 bars. Comment évolue la probabilité de désintégration par seconde d'un noyau de radium ?",
          "options": [
            "Elle est multipliée par un facteur d'au moins 10 due à l'agitation thermique",
            "Elle diminue car la pression stabilise le réseau cristallin",
            "Elle reste rigoureusement inchangée car les forces nucléaires sont insensibles aux facteurs physico-chimiques",
            "Elle est annulée car le radium s'ionise complètement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La radioactivité est une propriété intrinsèque du noyau atomique gouvernée par l'interaction forte et l'interaction faible, dont les énergies de liaison (plusieurs MeV) sont des millions de fois supérieures aux énergies thermiques ou chimiques (quelques eV). La température et la pression n'ont aucun effet mesurable sur la constante de désintégration."
        },
        {
          "id": "p2_s2_qcm",
          "type": "mcq",
          "prompt": "Le thorium 234 (^{234}_{90}Th) subit deux désintégrations consécutives : d'abord une émission β⁻, puis le noyau intermédiaire subit à son tour une émission β⁻. Quel est le noyau final obtenu ?",
          "options": [
            "^{234}_{88}Ra",
            "^{230}_{86}Rn",
            "^{234}_{92}U",
            "^{238}_{92}U"
          ],
          "correctAnswerIndex": 2,
          "explanation": "À chaque émission β⁻, A reste inchangé et Z augmente de 1 : ^{234}_{90}Th -> ^{234}_{91}Pa + ^0_{-1}e ; puis ^{234}_{91}Pa -> ^{234}_{92}U + ^0_{-1}e. Le noyau final possède A = 234 et Z = 92, ce qui correspond à l'isotope d'uranium 234."
        },
        {
          "id": "p2_s3_qcm",
          "type": "mcq",
          "prompt": "Un noyau d'Uranium 238 (^{238}_{92}U) se désintègre en un noyau de Plomb 206 (^{206}_{82}Pb) par une succession de désintégrations alpha (α) et bêta moins (β⁻). Combien de particules alpha ont été émises au cours de cette chaîne ?",
          "options": [
            "6 particules alpha",
            "8 particules alpha",
            "12 particules alpha",
            "16 particules alpha"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Seules les particules alpha modifient le nombre de masse A (chaque émission α diminue A de 4, tandis que β⁻ laisse A inchangé). La variation totale de A est ΔA = 238 - 206 = 32. Le nombre de désintégrations alpha est donc n_α = 32 / 4 = 8 particules alpha. (Pour information, pour équilibrer la charge : 92 - 8*2 = 76 ; pour atteindre Z = 82, il y a également 82 - 76 = 6 émissions β⁻)."
        },
        {
          "id": "p2_s4_qcm",
          "type": "mcq",
          "prompt": "Le carbone 14 (^{14}_6 C) est radioactif β⁻. Quel noyau fils résulte directement de sa désintégration ?",
          "options": [
            "^{14}_5 B",
            "^{14}_7 N",
            "^{12}_6 C",
            "^{10}_4 Be"
          ],
          "correctAnswerIndex": 1,
          "explanation": "En appliquant les lois de Soddy : A = 14 reste inchangé ; Z = 6 + 1 = 7. Le numéro atomique 7 correspond à l'azote N. Le noyau fils est donc l'azote 14 : ^{14}_7 N."
        },
        {
          "id": "p2_s5_qcm",
          "type": "mcq",
          "prompt": "L'azote 12 (^{12}_7 N) est un émetteur β⁺ utilisé en tomographie par émission de positons. Quel est le noyau fils obtenu ?",
          "options": [
            "^{12}_6 C",
            "^{12}_8 O",
            "^{11}_6 C",
            "^{13}_7 N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après les lois de Soddy pour l'émission β⁺ : A = 12 reste constant, et Z_fils = 7 - 1 = 6. L'élément de numéro atomique 6 est le carbone. On obtient le carbone 12 : ^{12}_6 C."
        },
        {
          "id": "p2_s6_qcm",
          "type": "mcq",
          "prompt": "Lors de la désexcitation d'un noyau de nickel 60 (^{60}_{28}Ni*), un photon gamma d'énergie E_γ = 1,33 MeV est émis. Quelle est la variation de masse correspondante subie par le noyau en unités de masse atomique u ? (1 u = 931,5 MeV/c²)",
          "options": [
            "1,43.10⁻³ u",
            "1,33 u",
            "7,00.10⁻⁴ u",
            "931,5.10⁻³ u"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après la relation d'Einstein ΔE = Δm.c², la perte de masse associée à l'énergie rayonnée est Δm = E_γ / (931,5 MeV/u) = 1,33 / 931,5 ≈ 0,001428 u ≈ 1,43.10⁻³ u."
        },
        {
          "id": "p2_s7_qcm",
          "type": "mcq",
          "prompt": "Dans la haute atmosphère terrestre, un neutron cosmique frappe un noyau d'azote 14 selon la réaction : ^{14}_7 N + ^1_0 n -> ^{14}_6 C + ^A_Z X. Quelle est la nature de la particule émise ^A_Z X ?",
          "options": [
            "Un électron (^0_{-1}e)",
            "Un proton (^1_1p)",
            "Une particule alpha (^4_2He)",
            "Un photon gamma (^0_0γ)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conservation de A : 14 + 1 = 14 + A => A = 1. Conservation de Z : 7 + 0 = 6 + Z => Z = 1. La particule possédant A = 1 et Z = 1 est un proton (^1_1p ou ^1_1H)."
        }
      ]
    },
    {
      "id": "pt3_loi_decroissance_demi_vie",
      "order": 3,
      "title": "Loi mathématique de décroissance radioactive et demi-vie",
      "summary": "Établissement différentiel de la loi de décroissance N(t) = N₀.e^(-λt), définition et propriétés de la constante radioactive λ et de la période radioactive (demi-vie T).",
      "conceptExplanation": "La désintégration d'un noyau radioactif individuel est un événement aléatoire régi par les lois du hasard : il est impossible de prédire l'instant où un noyau donné se désintégrera. En revanche, pour une population macroscopique comprenant un très grand nombre N(t) de noyaux identiques, le nombre moyen dN de désintégrations se produisant pendant un intervalle infinitésimal dt est strictement proportionnel à N(t) et à dt : dN = -λ.N(t).dt. Le coefficient de proportionnalité λ est la constante radioactive (en s⁻¹), caractéristique exclusive du nucléide. Par intégration entre t = 0 (où N = N₀) et t, on obtient la loi exponentielle de décroissance : N(t) = N₀.e^(-λt). La période radioactive (ou demi-vie T) est la durée au bout de laquelle la moitié des noyaux initialement présents s'est désintégrée : N(T) = N₀ / 2, ce qui conduit à la relation fondamentale T = ln(2) / λ.",
      "keyRule": "Loi de décroissance : N(t) = N₀.e^(-λt) avec λ = ln(2) / T. Au bout de n périodes (t = n.T), il reste N(n.T) = N₀ / 2^n noyaux non désintégrés.",
      "formulas": [
        {
          "name": "Relation 1",
          "formula": "\\text{d}N = -\\lambda N \\text{d}t"
        },
        {
          "name": "Relation 2",
          "formula": "N(t) = N_0 e^{-\\lambda t}"
        },
        {
          "name": "Relation 3",
          "formula": "T = \\frac{\\ln 2}{\\lambda} \\iff \\lambda = \\frac{\\ln 2}{T}"
        },
        {
          "name": "Relation 4",
          "formula": "N(n T) = \\frac{N_0}{2^n}"
        },
        {
          "name": "Relation 5",
          "formula": "N_{\\text{désintégrés}}(t) = N_0 - N(t) = N_0 (1 - e^{-\\lambda t})"
        }
      ],
      "workedExample": {
        "title": "Calcul du nombre de noyaux résiduels et désintégrés après plusieurs demi-vies",
        "statement": "Un laboratoire reçoit un échantillon contenant initialement N₀ = 8,00.10¹⁶ noyaux d'iode 131 (^{131}_{53}I), dont la demi-vie est T = 8,0 jours. 1. Calculer la constante radioactive λ de l'iode 131 en s⁻¹. 2. Déterminer le nombre de noyaux radioactifs subsistant après 24 jours. 3. Quel pourcentage des noyaux initiaux s'est désintégré au bout de 40 jours ?",
        "methodSteps": [
          "Étape 1 : Convertir la période T en secondes : T = 8,0 jours = 8,0 * 24 * 3600 s = 691 200 s = 6,912.10⁵ s.",
          "Étape 2 : Calculer la constante radioactive : λ = ln(2) / T = 0,69315 / 6,912.10⁵ s ≈ 1,003.10⁻⁶ s⁻¹.",
          "Étape 3 : Pour t = 24 jours, exprimer t en fonction de T : t / T = 24 / 8,0 = 3 périodes. Le nombre de noyaux restants est donc N(3T) = N₀ / 2³ = N₀ / 8 = 8,00.10¹⁶ / 8 = 1,00.10¹⁶ noyaux.",
          "Étape 4 : Pour t = 40 jours, t / T = 40 / 8,0 = 5 périodes. La fraction restante est 1 / 2⁵ = 1 / 32 = 0,03125 (3,125 %). La fraction désintégrée est donc 1 - 1/32 = 31/32 = 96,875 % ≈ 96,9 %."
        ],
        "conclusion": "Après 24 jours (3 périodes), il reste 1,00.10¹⁶ noyaux d'iode 131. Après 40 jours (5 périodes), 96,9 % des noyaux se sont désintégrés."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Évolution temporelle du pourcentage de noyaux radioactifs résiduels et désintégrés",
        "tableData": {
          "headers": [
            "Temps écoulé (t)",
            "Nombre de périodes (n = t/T)",
            "Noyaux restants N(t)/N₀ (%)",
            "Noyaux désintégrés (%)",
            "Rapport N(t) / N_désintégrés"
          ],
          "rows": [
            [
              "t = 0",
              "0",
              "100 %",
              "0 %",
              "Infini"
            ],
            [
              "t = T",
              "1",
              "50 % (1/2)",
              "50 % (1/2)",
              "1 : 1 (égalité)"
            ],
            [
              "t = 2T",
              "2",
              "25 % (1/4)",
              "75 % (3/4)",
              "1 : 3"
            ],
            [
              "t = 3T",
              "3",
              "12,5 % (1/8)",
              "87,5 % (7/8)",
              "1 : 7"
            ],
            [
              "t = 4T",
              "4",
              "6,25 % (1/16)",
              "93,75 % (15/16)",
              "1 : 15"
            ],
            [
              "t = 5T",
              "5",
              "3,125 % (1/32)",
              "96,875 % (31/32)",
              "1 : 31"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Caractère probabiliste de la désintégration et constante λ",
          "stepTheme": "Cinétique nucléaire",
          "stepBadge": "Définition",
          "paragraphText": "La probabilité qu'un noyau radioactif donné se désintègre entre les dates t et t + dt ne dépend aucunement de l'âge de ce noyau (le noyau ne 'vieillit' pas). Cette probabilité élémentaire s'écrit dP = λ.dt, où λ est la constante radioactive du radionucléide. Elle s'exprime dans le Système International en seconde inverse (s⁻¹), mais peut également être formulée en jour⁻¹ (j⁻¹) ou en an⁻¹. Pour un échantillon contenant N noyaux à l'instant t, le nombre de désintégrations survenant pendant dt est dN_désintégrés = λ.N.dt. Comme le stock de noyaux N diminue, la variation algébrique est négative : dN = -λ.N.dt.",
          "exercise": {
            "id": "p3_s1_qcm",
            "type": "mcq",
            "prompt": "Un radionucléide A possède une constante radioactive λ_A = 2,0.10⁻⁴ s⁻¹ et un radionucléide B possède λ_B = 1,0.10⁻⁶ s⁻¹. Que peut-on affirmer avec certitude ?",
            "options": [
              "Le radionucléide B se désintègre 200 fois plus vite que le radionucléide A",
              "Un noyau de A a une probabilité de se désintégrer pendant la seconde suivante 200 fois plus élevée qu'un noyau de B",
              "La demi-vie de A est 200 fois plus grande que celle de B",
              "Un échantillon de A contiendra toujours plus de noyaux qu'un échantillon de B"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La constante radioactive représente la probabilité de désintégration par unité de temps : dP/dt = λ. Le rapport λ_A / λ_B = 2,0.10⁻⁴ / 1,0.10⁻⁶ = 200 indique qu'à chaque seconde, un noyau A a 200 fois plus de chances de se désintégrer qu'un noyau B. Sa demi-vie est d'ailleurs 200 fois plus courte (T = ln2 / λ)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Intégration de l'équation différentielle de décroissance",
          "stepTheme": "Démonstration mathématique",
          "stepBadge": "Méthode",
          "paragraphText": "L'équation différentielle gouvernant l'évolution de la population de noyaux est : dN / dt + λ.N = 0. En séparant les variables : dN / N = -λ.dt. En intégrant les deux membres entre l'instant initial t = 0 (où le nombre de noyaux vaut N₀) et une date quelconque t (où le nombre de noyaux est N(t)) : ∫(dN/N) de N₀ à N = -λ ∫dt de 0 à t, ce qui donne ln(N) - ln(N₀) = -λ.t, soit ln(N / N₀) = -λ.t. En prenant l'exponentielle des deux membres, on établit la loi exponentielle de décroissance : N(t) = N₀.e^(-λt).",
          "exercise": {
            "id": "p3_s2_qcm",
            "type": "mcq",
            "prompt": "Si l'on trace la fonction y = ln(N(t)) en fonction du temps t, quelle est la nature de la courbe obtenue et que représente sa pente ?",
            "options": [
              "Une parabole dont le sommet indique la demi-vie",
              "Une droite de pente positive égale à +λ",
              "Une droite de pente négative égale à -λ et d'ordonnée à l'origine ln(N₀)",
              "Une exponentielle décroissante tendant vers zéro"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Puisque ln(N(t)) = ln(N₀) - λ.t, il s'agit de l'équation d'une fonction affine y = a.x + b avec x = t, une ordonnée à l'origine b = ln(N₀) et une pente (coefficient directeur) a = -λ."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Définition rigoureuse de la demi-vie ou période radioactive T",
          "stepTheme": "Période radioactive",
          "stepBadge": "Définition clé",
          "paragraphText": "La période radioactive (ou demi-vie, notée T ou t_{1/2}) est la durée au bout de laquelle la moitié des noyaux radioactifs initialement présents dans l'échantillon se sont désintégrés. Par définition : à t = T, N(T) = N₀ / 2. En injectant dans la loi de décroissance : N₀ / 2 = N₀.e^(-λ.T) => 1/2 = e^(-λ.T) => ln(1/2) = -λ.T => -ln(2) = -λ.T => T = ln(2) / λ ≈ 0,693 / λ. La demi-vie est une constante intrinsèque qui ne dépend ni de la quantité initiale de matière N₀, ni de l'environnement physique.",
          "exercise": {
            "id": "p3_s3_qcm",
            "type": "mcq",
            "prompt": "Le césium 137 a une constante radioactive λ = 7,33.10⁻¹⁰ s⁻¹. Quelle est sa demi-vie en années ? (1 an = 365,25 jours = 3,156.10⁷ s)",
            "options": [
              "15 ans",
              "30 ans",
              "60 ans",
              "300 ans"
            ],
            "correctAnswerIndex": 1,
            "explanation": "T = ln(2) / λ = 0,69315 / (7,33.10⁻¹⁰ s⁻¹) ≈ 9,456.10⁸ s. En convertissant en années : T = 9,456.10⁸ / 3,156.10⁷ ≈ 30,0 années."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Loi des puissances de 2 et durées discrètes",
          "stepTheme": "Règle de calcul rapide",
          "stepBadge": "Astuce calcul",
          "paragraphText": "Après une période t = T, il reste N = N₀ / 2. Après deux périodes t = 2T, il reste N = (N₀ / 2) / 2 = N₀ / 4 = N₀ / 2². Par récurrence immédiate, au bout d'un temps égal à n périodes radioactives (t = n.T, avec n réel positif) : N(n.T) = N₀ / 2^n = N₀ * 2^(-t/T). Cette formulation en base 2 est rigoureusement équivalente à l'exponentielle N₀.e^(-λt) car e^(-λt) = e^(-(ln2/T).t) = (e^ln2)^(-t/T) = 2^(-t/T). Elle permet des calculs mentaux instantanés pour les multiples entiers de T.",
          "exercise": {
            "id": "p3_s4_qcm",
            "type": "mcq",
            "prompt": "Un échantillon radioactif a une demi-vie T = 6 heures. Au bout de combien de temps ne subsistera-t-il plus que 1/16 du nombre initial de noyaux ?",
            "options": [
              "12 heures",
              "18 heures",
              "24 heures",
              "48 heures"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On cherche n tel que 1/2^n = 1/16 = 1/2⁴, d'où n = 4 périodes. Le temps nécessaire est donc t = 4 * T = 4 * 6 heures = 24 heures."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confusion entre noyaux restants et noyaux désintégrés",
          "stepTheme": "Erreur fréquente",
          "stepBadge": "Attention piège",
          "paragraphText": "Une erreur très fréquente aux épreuves du Baccalauréat consiste à confondre le nombre de noyaux radioactifs encore présents N(t) avec le nombre de noyaux qui ont déjà disparu par désintégration N_d(t). Par conservation de la matière : N₀ = N(t) + N_d(t), ce qui impose N_d(t) = N₀ - N(t) = N₀.(1 - e^(-λt)). Si un énoncé demande 'la durée au bout de laquelle 80 % des noyaux se sont désintégrés', cela signifie que N_d(t) = 0,80.N₀ et qu'il ne reste que N(t) = 0,20.N₀ !",
          "exercise": {
            "id": "p3_s5_qcm",
            "type": "mcq",
            "prompt": "Un échantillon contient un nucléide de période T = 10 jours. Combien de temps faut-il pour que 75 % des noyaux initiaux soient désintégrés ?",
            "options": [
              "5 jours",
              "10 jours",
              "20 jours",
              "30 jours"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Si 75 % des noyaux sont désintégrés, il reste 100 % - 75 % = 25 % = 1/4 des noyaux initiaux. Or N(t) = N₀ / 4 correspond à 2 demi-vies (1/2² = 1/4). Le temps requis est donc t = 2 * T = 2 * 10 jours = 20 jours."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Durée de vie moyenne d'un radionucléide (tau)",
          "stepTheme": "Constante de temps",
          "stepBadge": "Propriété",
          "paragraphText": "En analogie avec la constante de temps d'un circuit RC (tau = RC), la durée de vie moyenne tau d'un noyau radioactif est définie par l'inverse de la constante radioactive : tau = 1 / λ. La loi de décroissance s'écrit alors N(t) = N₀.e^(-t/tau). La relation liant la durée de vie moyenne et la demi-vie est : tau = T / ln(2) ≈ 1,443 * T. Graphiquement, la tangente à la courbe de décroissance N(t) à l'instant t = 0 coupe l'axe des abscisses exactement à la date t = tau. À la date t = tau, le nombre de noyaux restants vaut N(tau) = N₀ / e ≈ 0,368.N₀ (il reste 36,8 % des noyaux).",
          "exercise": {
            "id": "p3_s6_qcm",
            "type": "mcq",
            "prompt": "Un radionucléide possède une demi-vie T = 138 jours. Quelle est sa durée de vie moyenne tau ?",
            "options": [
              "95,6 jours",
              "138 jours",
              "199 jours",
              "276 jours"
            ],
            "correctAnswerIndex": 2,
            "explanation": "tau = T / ln(2) = 138 / 0,69315 ≈ 199,1 jours ≈ 199 jours."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Calcul du temps nécessaire à une élimination quasi-totale",
          "stepTheme": "Règle des 10 périodes",
          "stepBadge": "Règle de radioprotection",
          "paragraphText": "En radioprotection et en médecine nucléaire hospitalière, on considère couramment qu'un déchet radioactif à vie courte devient inoffensif au bout de 10 périodes radioactives. Vérifions cette règle : au bout de t = 10.T, la proportion résiduelle de noyaux radioactifs est 1 / 2¹⁰ = 1 / 1024 ≈ 9,77.10⁻⁴ ≈ 0,098 %, soit moins d'un millième (0,1 %) de la quantité initiale. Plus de 99,9 % de la radioactivité a disparu.",
          "exercise": {
            "id": "p3_s7_qcm",
            "type": "mcq",
            "prompt": "Le technétium 99m (^{99m}_{43}Tc) utilisé en scintigraphie a une période T = 6,0 heures. Au bout de quelle durée son activité résiduelle devient-elle inférieure à 0,1 % de sa valeur initiale ?",
            "options": [
              "18 heures",
              "36 heures",
              "60 heures (2,5 jours)",
              "120 heures"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour que N(t)/N₀ < 0,001 (0,1 %), il faut t > 10.T (car 1/2¹⁰ = 1/1024 < 0,001). Le temps requis est t ≈ 10 * 6,0 h = 60 heures, soit 2 jours et demi."
          }
        }
      ],
      "exercises": [
        {
          "id": "p3_s1_qcm",
          "type": "mcq",
          "prompt": "Un radionucléide A possède une constante radioactive λ_A = 2,0.10⁻⁴ s⁻¹ et un radionucléide B possède λ_B = 1,0.10⁻⁶ s⁻¹. Que peut-on affirmer avec certitude ?",
          "options": [
            "Le radionucléide B se désintègre 200 fois plus vite que le radionucléide A",
            "Un noyau de A a une probabilité de se désintégrer pendant la seconde suivante 200 fois plus élevée qu'un noyau de B",
            "La demi-vie de A est 200 fois plus grande que celle de B",
            "Un échantillon de A contiendra toujours plus de noyaux qu'un échantillon de B"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La constante radioactive représente la probabilité de désintégration par unité de temps : dP/dt = λ. Le rapport λ_A / λ_B = 2,0.10⁻⁴ / 1,0.10⁻⁶ = 200 indique qu'à chaque seconde, un noyau A a 200 fois plus de chances de se désintégrer qu'un noyau B. Sa demi-vie est d'ailleurs 200 fois plus courte (T = ln2 / λ)."
        },
        {
          "id": "p3_s2_qcm",
          "type": "mcq",
          "prompt": "Si l'on trace la fonction y = ln(N(t)) en fonction du temps t, quelle est la nature de la courbe obtenue et que représente sa pente ?",
          "options": [
            "Une parabole dont le sommet indique la demi-vie",
            "Une droite de pente positive égale à +λ",
            "Une droite de pente négative égale à -λ et d'ordonnée à l'origine ln(N₀)",
            "Une exponentielle décroissante tendant vers zéro"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Puisque ln(N(t)) = ln(N₀) - λ.t, il s'agit de l'équation d'une fonction affine y = a.x + b avec x = t, une ordonnée à l'origine b = ln(N₀) et une pente (coefficient directeur) a = -λ."
        },
        {
          "id": "p3_s3_qcm",
          "type": "mcq",
          "prompt": "Le césium 137 a une constante radioactive λ = 7,33.10⁻¹⁰ s⁻¹. Quelle est sa demi-vie en années ? (1 an = 365,25 jours = 3,156.10⁷ s)",
          "options": [
            "15 ans",
            "30 ans",
            "60 ans",
            "300 ans"
          ],
          "correctAnswerIndex": 1,
          "explanation": "T = ln(2) / λ = 0,69315 / (7,33.10⁻¹⁰ s⁻¹) ≈ 9,456.10⁸ s. En convertissant en années : T = 9,456.10⁸ / 3,156.10⁷ ≈ 30,0 années."
        },
        {
          "id": "p3_s4_qcm",
          "type": "mcq",
          "prompt": "Un échantillon radioactif a une demi-vie T = 6 heures. Au bout de combien de temps ne subsistera-t-il plus que 1/16 du nombre initial de noyaux ?",
          "options": [
            "12 heures",
            "18 heures",
            "24 heures",
            "48 heures"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On cherche n tel que 1/2^n = 1/16 = 1/2⁴, d'où n = 4 périodes. Le temps nécessaire est donc t = 4 * T = 4 * 6 heures = 24 heures."
        },
        {
          "id": "p3_s5_qcm",
          "type": "mcq",
          "prompt": "Un échantillon contient un nucléide de période T = 10 jours. Combien de temps faut-il pour que 75 % des noyaux initiaux soient désintégrés ?",
          "options": [
            "5 jours",
            "10 jours",
            "20 jours",
            "30 jours"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Si 75 % des noyaux sont désintégrés, il reste 100 % - 75 % = 25 % = 1/4 des noyaux initiaux. Or N(t) = N₀ / 4 correspond à 2 demi-vies (1/2² = 1/4). Le temps requis est donc t = 2 * T = 2 * 10 jours = 20 jours."
        },
        {
          "id": "p3_s6_qcm",
          "type": "mcq",
          "prompt": "Un radionucléide possède une demi-vie T = 138 jours. Quelle est sa durée de vie moyenne tau ?",
          "options": [
            "95,6 jours",
            "138 jours",
            "199 jours",
            "276 jours"
          ],
          "correctAnswerIndex": 2,
          "explanation": "tau = T / ln(2) = 138 / 0,69315 ≈ 199,1 jours ≈ 199 jours."
        },
        {
          "id": "p3_s7_qcm",
          "type": "mcq",
          "prompt": "Le technétium 99m (^{99m}_{43}Tc) utilisé en scintigraphie a une période T = 6,0 heures. Au bout de quelle durée son activité résiduelle devient-elle inférieure à 0,1 % de sa valeur initiale ?",
          "options": [
            "18 heures",
            "36 heures",
            "60 heures (2,5 jours)",
            "120 heures"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour que N(t)/N₀ < 0,001 (0,1 %), il faut t > 10.T (car 1/2¹⁰ = 1/1024 < 0,001). Le temps requis est t ≈ 10 * 6,0 h = 60 heures, soit 2 jours et demi."
        }
      ]
    },
    {
      "id": "pt4_activite_radionuclide",
      "order": 4,
      "title": "Activité radioactive et exploitation graphique",
      "summary": "Définition de l'activité A(t) en Becquerel (Bq), relation A(t) = λ.N(t), décroissance de l'activité et exploitation des courbes expérimentales.",
      "conceptExplanation": "L'activité A d'un échantillon radioactif mesure le rythme de désintégration de ses noyaux : c'est le nombre moyen de désintégrations qui s'y produisent par unité de temps. Mathématiquement, c'est l'opposé de la dérivée par rapport au temps du nombre de noyaux radioactifs présents : A(t) = -dN/dt. En dérivant N(t) = N₀.e^(-λt), on obtient : A(t) = λ.N(t) = λ.N₀.e^(-λt) = A₀.e^(-λt), où A₀ = λ.N₀ représente l'activité initiale à t = 0. Dans le Système International, l'activité s'exprime en Becquerel (Bq), en hommage à Henri Becquerel : 1 Bq équivaut à exactement une désintégration par seconde (1 Bq = 1 s⁻¹). L'ancienne unité, le Curie (Ci), vaut 1 Ci = 3,7.10¹⁰ Bq (activité d'un gramme de radium 226).",
      "keyRule": "L'activité est A(t) = λ.N(t) = A₀.e^(-λt) avec A en Bq (s⁻¹), λ en s⁻¹ et N le nombre de noyaux. Attention : pour calculer A = λ.N, λ DOIT impérativement être convertie en s⁻¹ !",
      "formulas": [
        {
          "name": "Relation 1",
          "formula": "A(t) = -\\frac{\\text{d}N}{\\text{d}t} = \\lambda N(t)"
        },
        {
          "name": "Relation 2",
          "formula": "A(t) = A_0 e^{-\\lambda t}"
        },
        {
          "name": "Relation 3",
          "formula": "A_0 = \\lambda N_0 = \\frac{\\ln 2}{T} N_0"
        },
        {
          "name": "Relation 4",
          "formula": "N_0 = n N_A = \\frac{m}{M} N_A"
        },
        {
          "name": "Relation 5",
          "formula": "\\ln\\left(\\frac{A_0}{A(t)}\\right) = \\lambda t \\iff t = \\frac{1}{\\lambda}\\ln\\left(\\frac{A_0}{A(t)}\\right) = \\frac{T}{\\ln 2}\\ln\\left(\\frac{A_0}{A(t)}\\right)"
        }
      ],
      "workedExample": {
        "title": "Calcul de l'activité initiale d'une source de Césium 137",
        "statement": "Une source scellée de radiothérapie contient une masse m = 1,50 mg de chlorure de césium 137 pur (^{137}_{55}Cs). La demi-vie du césium 137 est T = 30,1 ans. 1. Déterminer le nombre initial N₀ de noyaux de césium 137. 2. Calculer l'activité initiale A₀ de la source en Bq puis en Gigabecquerels (GBq). Données : M(Cs) = 137 g/mol ; N_A = 6,022.10²³ mol⁻¹ ; 1 an = 365,25 j.",
        "methodSteps": [
          "Étape 1 : Calculer le nombre de moles n de césium : n = m / M = 1,50.10⁻³ g / 137 g/mol ≈ 1,0949.10⁻⁵ mol.",
          "Étape 2 : Déduire le nombre de noyaux N₀ : N₀ = n * N_A = 1,0949.10⁻⁵ * 6,022.10²³ ≈ 6,593.10¹⁸ noyaux.",
          "Étape 3 : Convertir la période T en secondes : T = 30,1 * 365,25 * 24 * 3600 s ≈ 9,498.10⁸ s.",
          "Étape 4 : Calculer la constante radioactive λ en s⁻¹ : λ = ln(2) / T = 0,69315 / 9,498.10⁸ s ≈ 7,298.10⁻¹⁰ s⁻¹.",
          "Étape 5 : Calculer l'activité A₀ = λ * N₀ = 7,298.10⁻¹⁰ s⁻¹ * 6,593.10¹⁸ = 4,81.10⁹ Bq = 4,81 GBq."
        ],
        "conclusion": "L'échantillon de 1,5 mg de césium 137 possède une activité initiale très élevée de 4,81 milliards de désintégrations par seconde (4,81 GBq)."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Ordres de grandeur de la radioactivité dans l'environnement et l'activité humaine",
        "tableData": {
          "headers": [
            "Milieu / Objet",
            "Masse / Volume typique",
            "Activité approximative (Bq)",
            "Origine principale de la radioactivité"
          ],
          "rows": [
            [
              "1 litre d'eau de mer",
              "1 kg",
              "12 à 15 Bq",
              "Potassium 40 (^40K)"
            ],
            [
              "1 kg de bananes",
              "1 kg",
              "130 Bq",
              "Potassium 40 (^40K) naturel"
            ],
            [
              "Corps humain adulte",
              "70 kg",
              "8 000 à 10 000 Bq",
              "Carbone 14 (3500 Bq) et Potassium 40 (4500 Bq)"
            ],
            [
              "1 kg de granit",
              "1 kg",
              "1 000 à 3 000 Bq",
              "Uranium, thorium et leurs descendants"
            ],
            [
              "Détecteur de fumée ionique",
              "Élément trace",
              "30 000 Bq (30 kBq)",
              "Américium 241 (^241Am)"
            ],
            [
              "Source médicale de radiothérapie",
              "Quelques grammes",
              "10¹³ à 10¹⁴ Bq (10 à 100 TBq)",
              "Cobalt 60 (^60Co)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition physique de l'activité et unité légale (Becquerel)",
          "stepTheme": "Définition de l'activité",
          "stepBadge": "Becquerel (Bq)",
          "paragraphText": "L'activité A d'un échantillon radioactif représente le nombre effectif de noyaux se désintégrant par seconde au sein de cet échantillon. Son unité internationale est le Becquerel (symbole Bq). Un Becquerel correspond à exactement une désintégration par seconde (1 Bq = 1 s⁻¹). Comme 1 Bq est une unité extrêmement petite à l'échelle des applications médicales et industrielles, on utilise couramment les préfixes du SI : le kilobecquerel (1 kBq = 10³ Bq), le mégabecquerel (1 MBq = 10⁶ Bq) et le gigabecquerel (1 GBq = 10⁹ Bq).",
          "exercise": {
            "id": "p4_s1_qcm",
            "type": "mcq",
            "prompt": "Un compteur Geiger enregistre 18 000 impulsions en 5 minutes avec un rendement de détection de 10 % (le détecteur capte 1 désintégration sur 10). Quelle est l'activité réelle de la source radioactive ?",
            "options": [
              "60 Bq",
              "600 Bq",
              "3 600 Bq",
              "18 000 Bq"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le nombre de coups par minute est 18 000 / 5 = 3 600 cpm, soit par seconde : n_mesuré = 3 600 / 60 = 60 impulsions par seconde. Comme le rendement est de 10 % (r = 0,10), l'activité réelle de la source est A = n_mesuré / r = 60 / 0,10 = 600 Bq."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Loi fondamentale reliant l'activité au nombre de noyaux",
          "stepTheme": "Relation A = λ.N",
          "stepBadge": "Formule maîtresse",
          "paragraphText": "Puisque N(t) = N₀.e^(-λt), la vitesse instantanée de disparition des noyaux vaut -dN/dt = λ.N₀.e^(-λt) = λ.N(t). On en déduit la relation fondamentale liant l'activité au nombre de noyaux présents à cet instant : A(t) = λ.N(t). L'activité décroît donc au cours du temps exactement selon la même loi exponentielle que le nombre de noyaux : A(t) = A₀.e^(-λt), avec une demi-vie rigoureusement identique T = ln(2) / λ.",
          "exercise": {
            "id": "p4_s2_qcm",
            "type": "mcq",
            "prompt": "Deux échantillons radioactifs 1 et 2 contiennent exactement le même nombre de noyaux radioactifs à t = 0 (N_{01} = N_{02}). La demi-vie du nucléide 1 est T₁ = 1 heure et celle du nucléide 2 est T₂ = 10 jours. Quel est le rapport entre leurs activités initiales A_{01} / A_{02} ?",
            "options": [
              "1 / 240",
              "1",
              "240",
              "2400"
            ],
            "correctAnswerIndex": 2,
            "explanation": "A₀ = λ.N₀ = (ln2 / T).N₀. Le rapport des activités est inversement proportionnel au rapport des périodes : A_{01} / A_{02} = T₂ / T₁. Or T₂ = 10 jours = 10 * 24 heures = 240 heures. Donc A_{01} / A_{02} = 240 / 1 = 240. Le nucléide à vie courte a une activité 240 fois plus intense."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Exploitation graphique de la courbe de décroissance A(t)",
          "stepTheme": "Lecture de graphe",
          "stepBadge": "Méthode expérimentale",
          "paragraphText": "Sur un graphe expérimental représentant A en fonction du temps t : 1. La valeur à l'origine (t = 0) donne directement l'activité initiale A₀. 2. Pour déterminer la demi-vie T, on repère l'ordonnée A₀ / 2 et on lit l'abscisse correspondante sur la courbe. 3. On peut vérifier la cohérence en repérant l'abscisse de A₀ / 4 qui doit valoir exactement 2.T, puis celle de A₀ / 8 qui vaut 3.T. 4. La constante radioactive se déduit ensuite par le calcul λ = ln(2) / T.",
          "exercise": {
            "id": "p4_s3_qcm",
            "type": "mcq",
            "prompt": "Sur la courbe de décroissance d'un radioélément, l'activité mesurée passe de 800 Bq à 100 Bq en une durée de 45 jours. Quelle est la demi-vie T de ce nucléide ?",
            "options": [
              "11,25 jours",
              "15,0 jours",
              "22,5 jours",
              "30,0 jours"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le rapport A(t) / A₀ = 100 / 800 = 1/8 = 1/2³. L'échantillon a donc subi 3 demi-vies (n = 3) pendant la durée Δt = 45 jours. On en déduit : 3 * T = 45 jours => T = 45 / 3 = 15,0 jours."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Linéarisation logarithmique ln(A) ou ln(A₀/A)",
          "stepTheme": "Régression linéaire",
          "stepBadge": "Analyse de données",
          "paragraphText": "En prenant le logarithme népérien de la relation A(t) = A₀.e^(-λt), on obtient : ln(A(t)) = ln(A₀) - λ.t ou de façon équivalente ln(A₀ / A(t)) = λ.t. En traçant la droite expérimentale y = ln(A₀ / A(t)) en fonction de t, on obtient une droite passant par l'origine. Le coefficient directeur (la pente) de cette droite donne directement la constante radioactive λ. Si t est exprimé en jours, la pente donne λ en jour⁻¹ ; pour l'obtenir en s⁻¹, il faut diviser par 86 400 s/jour.",
          "exercise": {
            "id": "p4_s4_qcm",
            "type": "mcq",
            "prompt": "On trace la droite ln(N₀ / N) = f(t) pour un échantillon de Polonium 210 avec t en jours. La pente de la droite vaut a = 5,02.10⁻³ j⁻¹. Quelle est la valeur de la demi-vie T en jours ?",
            "options": [
              "69,3 jours",
              "138 jours",
              "276 jours",
              "559 jours"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Puisque ln(N₀ / N) = λ.t, la pente a est égale à la constante radioactive λ = 5,02.10⁻³ j⁻¹. La demi-vie vaut T = ln(2) / λ = 0,69315 / (5,02.10⁻³ j⁻¹) ≈ 138,07 jours ≈ 138 jours."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Activité massique ou spécifique (Bq/kg)",
          "stepTheme": "Activité massique",
          "stepBadge": "Grandeur clé",
          "paragraphText": "L'activité spécifique (ou massique) a_m est l'activité d'un échantillon par unité de masse : a_m = A / m = (λ.N) / m. Sachant que N = (m / M) * N_A, on obtient l'expression remarquable : a_m = (λ * N_A) / M = (ln(2) * N_A) / (T * M). L'activité massique d'un radionucléide pur ne dépend que de sa masse molaire M et de sa demi-vie T : plus la demi-vie est courte, plus l'activité massique est colossale.",
          "exercise": {
            "id": "p4_s5_qcm",
            "type": "mcq",
            "prompt": "Le radium 226 (^{226}_{88}Ra, M = 226 g/mol) a une demi-vie T = 1600 ans (5,05.10¹⁰ s). Quelle est l'activité massique de 1,00 gramme de radium 226 pur ? (N_A = 6,022.10²³ mol⁻¹)",
            "options": [
              "3,7.10⁷ Bq",
              "3,7.10¹⁰ Bq",
              "1,0.10¹² Bq",
              "3,7.10¹³ Bq"
            ],
            "correctAnswerIndex": 1,
            "explanation": "N = (1,00 g / 226 g/mol) * 6,022.10²³ ≈ 2,665.10²¹ noyaux. λ = ln(2) / (5,05.10¹⁰ s) ≈ 1,372.10⁻¹¹ s⁻¹. L'activité vaut A = λ * N = 1,372.10⁻¹¹ * 2,665.10²¹ ≈ 3,66.10¹⁰ Bq ≈ 3,7.10¹⁰ Bq. C'est précisément la définition historique du Curie (1 Ci = 3,7.10¹⁰ Bq)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège sur les unités de temps lors du calcul de A = λ.N",
          "stepTheme": "Conversions d'unités",
          "stepBadge": "Attention piège",
          "paragraphText": "La formule A = λ.N n'est valide avec A en Becquerels (Bq) que si et seulement si la constante radioactive λ est exprimée en secondes inverses (s⁻¹). Si la demi-vie T est fournie en années, en jours ou en heures, il est rigoureusement obligatoire de la convertir en secondes (1 an ≈ 3,156.10⁷ s ; 1 jour = 86 400 s ; 1 h = 3 600 s) avant de calculer λ = ln(2) / T. Utiliser un λ en an⁻¹ donnerait un résultat erroné d'un facteur 31,5 millions !",
          "exercise": {
            "id": "p4_s6_qcm",
            "type": "mcq",
            "prompt": "Un échantillon contient N = 1,00.10¹⁵ noyaux de tritium (^3H) dont la demi-vie est T = 12,3 ans. Quelle est son activité en Bq ? (1 an = 3,156.10⁷ s)",
            "options": [
              "5,63.10¹³ Bq",
              "1,79.10⁶ Bq",
              "5,63.10⁷ Bq",
              "8,13.10¹³ Bq"
            ],
            "correctAnswerIndex": 1,
            "explanation": "T = 12,3 * 3,156.10⁷ s ≈ 3,882.10⁸ s. λ = ln(2) / T = 0,69315 / 3,882.10⁸ s ≈ 1,786.10⁻⁹ s⁻¹. L'activité vaut alors A = λ * N = 1,786.10⁻⁹ s⁻¹ * 1,00.10¹⁵ = 1,79.10⁶ Bq (1,79 MBq)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Équilibre radioactif dans une chaîne de filiation séculaire",
          "stepTheme": "Filiation radioactive",
          "stepBadge": "Équilibre séculaire",
          "paragraphText": "Dans une chaîne radioactive où un noyau père à vie très longue (par exemple l'Uranium 238 avec T = 4,5.10⁹ ans) se désintègre en un noyau fils radioactif à vie beaucoup plus courte, il s'établit au bout de quelques demi-vies du fils un régime stationnaire appelé équilibre séculaire. À cet équilibre, la vitesse de formation du fils est rigoureusement égale à sa vitesse de désintégration. Par conséquent, les activités du père et du fils deviennent rigoureusement égales : A_père = A_fils <=> λ_père * N_père = λ_fils * N_fils.",
          "exercise": {
            "id": "p4_s7_qcm",
            "type": "mcq",
            "prompt": "Dans un minerai d'uranium à l'équilibre séculaire, pour chaque noyau de radium 226 (T_Ra = 1600 ans), combien y a-t-il environ de noyaux d'uranium 238 (T_U = 4,5.10⁹ ans) ?",
            "options": [
              "1 600 noyaux d'uranium",
              "365 000 noyaux d'uranium",
              "2,8.10⁶ noyaux d'uranium",
              "4,5.10⁹ noyaux d'uranium"
            ],
            "correctAnswerIndex": 2,
            "explanation": "À l'équilibre séculaire, A_U = A_Ra => λ_U * N_U = λ_Ra * N_Ra => (ln2 / T_U) * N_U = (ln2 / T_Ra) * N_Ra => N_U / N_Ra = T_U / T_Ra = 4,5.10⁹ / 1600 ≈ 2,81.10⁶ noyaux d'uranium pour un seul noyau de radium."
          }
        }
      ],
      "exercises": [
        {
          "id": "p4_s1_qcm",
          "type": "mcq",
          "prompt": "Un compteur Geiger enregistre 18 000 impulsions en 5 minutes avec un rendement de détection de 10 % (le détecteur capte 1 désintégration sur 10). Quelle est l'activité réelle de la source radioactive ?",
          "options": [
            "60 Bq",
            "600 Bq",
            "3 600 Bq",
            "18 000 Bq"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le nombre de coups par minute est 18 000 / 5 = 3 600 cpm, soit par seconde : n_mesuré = 3 600 / 60 = 60 impulsions par seconde. Comme le rendement est de 10 % (r = 0,10), l'activité réelle de la source est A = n_mesuré / r = 60 / 0,10 = 600 Bq."
        },
        {
          "id": "p4_s2_qcm",
          "type": "mcq",
          "prompt": "Deux échantillons radioactifs 1 et 2 contiennent exactement le même nombre de noyaux radioactifs à t = 0 (N_{01} = N_{02}). La demi-vie du nucléide 1 est T₁ = 1 heure et celle du nucléide 2 est T₂ = 10 jours. Quel est le rapport entre leurs activités initiales A_{01} / A_{02} ?",
          "options": [
            "1 / 240",
            "1",
            "240",
            "2400"
          ],
          "correctAnswerIndex": 2,
          "explanation": "A₀ = λ.N₀ = (ln2 / T).N₀. Le rapport des activités est inversement proportionnel au rapport des périodes : A_{01} / A_{02} = T₂ / T₁. Or T₂ = 10 jours = 10 * 24 heures = 240 heures. Donc A_{01} / A_{02} = 240 / 1 = 240. Le nucléide à vie courte a une activité 240 fois plus intense."
        },
        {
          "id": "p4_s3_qcm",
          "type": "mcq",
          "prompt": "Sur la courbe de décroissance d'un radioélément, l'activité mesurée passe de 800 Bq à 100 Bq en une durée de 45 jours. Quelle est la demi-vie T de ce nucléide ?",
          "options": [
            "11,25 jours",
            "15,0 jours",
            "22,5 jours",
            "30,0 jours"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le rapport A(t) / A₀ = 100 / 800 = 1/8 = 1/2³. L'échantillon a donc subi 3 demi-vies (n = 3) pendant la durée Δt = 45 jours. On en déduit : 3 * T = 45 jours => T = 45 / 3 = 15,0 jours."
        },
        {
          "id": "p4_s4_qcm",
          "type": "mcq",
          "prompt": "On trace la droite ln(N₀ / N) = f(t) pour un échantillon de Polonium 210 avec t en jours. La pente de la droite vaut a = 5,02.10⁻³ j⁻¹. Quelle est la valeur de la demi-vie T en jours ?",
          "options": [
            "69,3 jours",
            "138 jours",
            "276 jours",
            "559 jours"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Puisque ln(N₀ / N) = λ.t, la pente a est égale à la constante radioactive λ = 5,02.10⁻³ j⁻¹. La demi-vie vaut T = ln(2) / λ = 0,69315 / (5,02.10⁻³ j⁻¹) ≈ 138,07 jours ≈ 138 jours."
        },
        {
          "id": "p4_s5_qcm",
          "type": "mcq",
          "prompt": "Le radium 226 (^{226}_{88}Ra, M = 226 g/mol) a une demi-vie T = 1600 ans (5,05.10¹⁰ s). Quelle est l'activité massique de 1,00 gramme de radium 226 pur ? (N_A = 6,022.10²³ mol⁻¹)",
          "options": [
            "3,7.10⁷ Bq",
            "3,7.10¹⁰ Bq",
            "1,0.10¹² Bq",
            "3,7.10¹³ Bq"
          ],
          "correctAnswerIndex": 1,
          "explanation": "N = (1,00 g / 226 g/mol) * 6,022.10²³ ≈ 2,665.10²¹ noyaux. λ = ln(2) / (5,05.10¹⁰ s) ≈ 1,372.10⁻¹¹ s⁻¹. L'activité vaut A = λ * N = 1,372.10⁻¹¹ * 2,665.10²¹ ≈ 3,66.10¹⁰ Bq ≈ 3,7.10¹⁰ Bq. C'est précisément la définition historique du Curie (1 Ci = 3,7.10¹⁰ Bq)."
        },
        {
          "id": "p4_s6_qcm",
          "type": "mcq",
          "prompt": "Un échantillon contient N = 1,00.10¹⁵ noyaux de tritium (^3H) dont la demi-vie est T = 12,3 ans. Quelle est son activité en Bq ? (1 an = 3,156.10⁷ s)",
          "options": [
            "5,63.10¹³ Bq",
            "1,79.10⁶ Bq",
            "5,63.10⁷ Bq",
            "8,13.10¹³ Bq"
          ],
          "correctAnswerIndex": 1,
          "explanation": "T = 12,3 * 3,156.10⁷ s ≈ 3,882.10⁸ s. λ = ln(2) / T = 0,69315 / 3,882.10⁸ s ≈ 1,786.10⁻⁹ s⁻¹. L'activité vaut alors A = λ * N = 1,786.10⁻⁹ s⁻¹ * 1,00.10¹⁵ = 1,79.10⁶ Bq (1,79 MBq)."
        },
        {
          "id": "p4_s7_qcm",
          "type": "mcq",
          "prompt": "Dans un minerai d'uranium à l'équilibre séculaire, pour chaque noyau de radium 226 (T_Ra = 1600 ans), combien y a-t-il environ de noyaux d'uranium 238 (T_U = 4,5.10⁹ ans) ?",
          "options": [
            "1 600 noyaux d'uranium",
            "365 000 noyaux d'uranium",
            "2,8.10⁶ noyaux d'uranium",
            "4,5.10⁹ noyaux d'uranium"
          ],
          "correctAnswerIndex": 2,
          "explanation": "À l'équilibre séculaire, A_U = A_Ra => λ_U * N_U = λ_Ra * N_Ra => (ln2 / T_U) * N_U = (ln2 / T_Ra) * N_Ra => N_U / N_Ra = T_U / T_Ra = 4,5.10⁹ / 1600 ≈ 2,81.10⁶ noyaux d'uranium pour un seul noyau de radium."
        }
      ]
    },
    {
      "id": "pt5_datation_radioactive",
      "order": 5,
      "title": "Principes et méthodes de la datation radioactive",
      "summary": "Principe fondamental de la datation au Carbone 14, équation de l'âge d'un échantillon, domaine de validité et autres méthodes de datation (Uranium-Plomb, Potassium-Argon).",
      "conceptExplanation": "La loi de décroissance radioactive constitue une véritable horloge nucléaire naturelle permettant de mesurer le temps écoulé depuis un événement marquant (mort d'un organisme vivant, cristallisation d'une roche). Pour dater un échantillon, on mesure l'activité résiduelle A(t) ou le rapport isotopique actuel et on le compare à la valeur de référence A₀ à l'instant initial t = 0. En inversant la relation A(t) = A₀.e^(-λt), on détermine l'âge t de l'échantillon par la relation : t = (1 / λ).ln(A₀ / A(t)) = (T / ln(2)).ln(A₀ / A(t)). Pour le carbone 14 (radioactif β⁻, demi-vie T = 5590 ou 5730 ans), tant qu'un organisme est vivant, il échange en permanence du carbone avec son environnement (photosynthèse, alimentation), maintenant constant le rapport ^14C / ^12C ≈ 1,2.10⁻¹² (activité spécifique d'environ 13,5 dpm par gramme de carbone). Dès sa mort, les échanges cessent et le carbone 14 piégé décroît exponentiellement.",
      "keyRule": "L'âge d'un échantillon est donné par t = (T / ln 2) * ln(A₀ / A) = (T / ln 2) * ln(N₀ / N). La méthode au carbone 14 n'est applicable qu'aux vestiges organiques âgés de moins de 50 000 ans (~ 10 demi-vies).",
      "formulas": [
        {
          "name": "Relation 1",
          "formula": "t = \\frac{1}{\\lambda} \\ln\\left(\\frac{A_0}{A}\\right)"
        },
        {
          "name": "Relation 2",
          "formula": "t = \\frac{T}{\\ln 2} \\ln\\left(\\frac{A_0}{A}\\right)"
        },
        {
          "name": "Relation 3",
          "formula": "t = \\frac{T}{\\ln 2} \\ln\\left(1 + \\frac{N_{\\text{fils}}(t)}{N_{\\text{père}}(t)}\\right) \\quad \\text{(méthode isochrone)}"
        },
        {
          "name": "Relation 4",
          "formula": "\\text{Condition d'application : } t \\le 10 \\times T"
        }
      ],
      "workedExample": {
        "title": "Datation d'un fragment de charbon de bois préhistorique",
        "statement": "Un fragment de charbon de bois découvert dans la grotte de Dabou présente une activité en carbone 14 de 2,40 désintégrations par minute et par gramme de carbone (dpm/g). Un échantillon de bois moderne identique présente une activité de référence A₀ = 15,3 dpm/g. La période du carbone 14 est T = 5590 ans. Déterminer l'âge t de ce vestige archéologique.",
        "methodSteps": [
          "Étape 1 : Poser la loi de décroissance de l'activité spécifique : A(t) = A₀.e^(-λt).",
          "Étape 2 : Isoler le terme exponentiel : A(t) / A₀ = e^(-λt) => ln(A₀ / A(t)) = λ.t.",
          "Étape 3 : Exprimer l'âge t en fonction de la période T : t = (T / ln(2)) * ln(A₀ / A(t)).",
          "Étape 4 : Calculer le rapport des activités : A₀ / A(t) = 15,3 / 2,40 = 6,375.",
          "Étape 5 : Effectuer l'application numérique : t = (5590 / 0,69315) * ln(6,375) = 8064,6 * 1,8524 ≈ 14 939 ans."
        ],
        "conclusion": "Le charbon de bois date d'environ 14 940 ans avant nos jours (Paléolithique supérieur)."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Comparatif des principales méthodes de géochronologie et datation nucléaire",
        "tableData": {
          "headers": [
            "Méthode de datation",
            "Couple père -> fils",
            "Demi-vie (T)",
            "Éléments datés",
            "Plage temporelle utile"
          ],
          "rows": [
            [
              "Carbone 14",
              "^{14}_6 C -> ^{14}_7 N + e⁻",
              "5 590 à 5 730 ans",
              "Matières organiques (bois, os, tissus, charbon)",
              "500 ans à 50 000 ans"
            ],
            [
              "Béryllium 10",
              "^{10}_4 Be -> ^{10}_5 B + e⁻",
              "1,39.10⁶ ans",
              "Sédiments marins, carottes glaciaires",
              "100 000 ans à 10 millions d'années"
            ],
            [
              "Potassium - Argon",
              "^{40}_{19} K -> ^{40}_{18} Ar",
              "1,25.10⁹ ans",
              "Roches volcaniques, laves solidifiées",
              "100 000 ans à plusieurs milliards d'années"
            ],
            [
              "Uranium - Plomb",
              "^{238}_{92} U -> ^{206}_{82} Pb",
              "4,47.10⁹ ans",
              "Minéraux anciens (zircons), âge de la Terre",
              "10 millions d'années à 4,5 milliards d'années"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Origine atmosphérique et cycle biologique du Carbone 14",
          "stepTheme": "Cycle du Carbone 14",
          "stepBadge": "Fondement",
          "paragraphText": "Le carbone 14 est continuellement produit dans la haute atmosphère sous l'action des neutrons issus du rayonnement cosmique qui bombardent l'azote 14 selon : ^{14}_7 N + ^1_0 n -> ^{14}_6 C + ^1_1 p. Les atomes de carbone 14 s'oxydent rapidement en dioxyde de carbone (^14CO_2) et se mélangent de façon homogène au ^12CO_2 dans toute la biosphère. Les végétaux assimilent ce dioxyde de carbone par photosynthèse, puis les herbivores et carnivores l'intègrent dans leur organisme. Tant qu'un être est vivant, le taux de renouvellement compense exactement la désintégration : le rapport ^14C / ^12C reste constant.",
          "exercise": {
            "id": "p5_s1_qcm",
            "type": "mcq",
            "prompt": "Pourquoi la datation au carbone 14 ne peut-elle pas être utilisée pour déterminer l'âge d'un silex taillé préhistorique ou d'un outil en cuivre ?",
            "options": [
              "Parce que le silex et le cuivre contiennent trop de carbone 14 pour être mesurés",
              "Parce que ces minéraux inorganiques n'ont jamais absorbé de carbone atmosphérique par métabolisme",
              "Parce que leur âge dépasse toujours 100 000 ans",
              "Parce que les métaux détruisent les particules radioactives"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La méthode au carbone 14 repose sur l'assimilation biologique du dioxyde de carbone atmosphérique au cours du métabolisme vivant. Les roches siliceuses ou les minerais métalliques sont inorganiques et ne participent pas au cycle du carbone."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Fermeture du système à la mort de l'organisme",
          "stepTheme": "Principe d'horloge",
          "stepBadge": "Hypothèse clé",
          "paragraphText": "À l'instant de la mort d'un organisme, tout métabolisme et tout échange avec l'environnement cessent instantanément : le système biologique devient un système fermé. La quantité de carbone 12 stable reste inchangée, tandis que les atomes de carbone 14 ne sont plus renouvelés et disparaissent selon la loi de décroissance N(t) = N₀.e^(-λt). La mesure de l'activité résiduelle actuelle permet de remonter avec précision à la date de la mort de l'organisme.",
          "exercise": {
            "id": "p5_s2_qcm",
            "type": "mcq",
            "prompt": "Un ossement ancien retrouvé lors d'une fouille contient 25 % de la teneur en carbone 14 mesurée sur un ossement actuel de même masse. Sachant que T = 5590 ans, quel est l'âge de l'ossement ?",
            "options": [
              "2 795 ans",
              "5 590 ans",
              "11 180 ans",
              "16 770 ans"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une proportion résiduelle de 25 % correspond à 1/4 = 1/2² de la valeur initiale, soit exactement 2 demi-vies (n = 2). L'âge vaut t = 2 * T = 2 * 5590 ans = 11 180 ans."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Formule générale de l'âge d'un échantillon radioactif",
          "stepTheme": "Calcul d'âge",
          "stepBadge": "Formule d'examen",
          "paragraphText": "Pour déterminer l'âge t, la démarche analytique universelle est : 1. Partir de A(t) = A₀.e^(-λt). 2. Prendre le logarithme népérien des deux membres : ln(A(t)/A₀) = -λ.t <=> ln(A₀/A(t)) = λ.t. 3. Isoler t : t = (1/λ)*ln(A₀/A(t)). 4. Remplacer λ par ln(2)/T : t = (T / ln(2)) * ln(A₀ / A(t)). Cette même formule s'applique rigoureusement aux nombres de noyaux : t = (T / ln(2)) * ln(N₀ / N(t)).",
          "exercise": {
            "id": "p5_s3_qcm",
            "type": "mcq",
            "prompt": "Un morceau de parchemin ancien présente une activité en carbone 14 égale à 60 % de l'activité d'un parchemin moderne équivalent. Quel est l'âge du manuscrit ? (T = 5590 ans, ln(2) = 0,693, ln(1/0,60) = 0,511)",
            "options": [
              "2 235 ans",
              "4 120 ans",
              "3 355 ans",
              "5 590 ans"
            ],
            "correctAnswerIndex": 1,
            "explanation": "t = (T / ln 2) * ln(A₀ / A) = (5590 / 0,693) * ln(1 / 0,60) = 8066 * 0,5108 ≈ 4120 ans."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Limite de détection et contamination moderne",
          "stepTheme": "Limites de validité",
          "stepBadge": "Attention piège",
          "paragraphText": "Au-delà d'environ 50 000 ans (environ 9 à 10 périodes du carbone 14), la proportion restante de carbone 14 devient inférieure à 1/1000 de sa valeur initiale. Le signal radiatif devient alors indistinguable du bruit de fond ambiant des détecteurs. De plus, la moindre contamination moderne par des poussières ou moisissures (contenant du carbone 14 actuel à 100 %) fausse dramatiquement les résultats. Pour des fossiles plus anciens (hominidés, dinosaures), la méthode au carbone 14 est totalement inapplicable : on utilise alors la méthode Potassium-Argon ou Uranium-Plomb.",
          "exercise": {
            "id": "p5_s4_qcm",
            "type": "mcq",
            "prompt": "Un paléontologue affirme avoir daté un fossile de dinosaure (stégosaure disparu il y a 150 millions d'années) grâce à la méthode du carbone 14 (T = 5590 ans). Quelle critique scientifique fondamentale doit-on immédiatement lui opposer ?",
            "options": [
              "Les dinosaures ne contenaient pas de carbone dans leur squelette",
              "Au bout de 150 millions d'années (~27 000 demi-vies), il ne reste plus un seul atome de carbone 14 d'origine dans le fossile",
              "Le carbone 14 ne fonctionne que sur les végétaux et non sur les animaux",
              "La constante radioactive du carbone 14 a changé depuis l'ère secondaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Au bout de 150 millions d'années, le nombre de périodes écoulées est n = 1,5.10⁸ / 5590 ≈ 26 800 demi-vies ! La fraction résiduelle théorique (1/2)^26800 est infiniment plus petite que l'inverse du nombre d'atomes dans l'univers observable : il n'y a plus aucun atome de ^14C originel."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Méthode de datation des roches par filiation père-fils (Potassium-Argon)",
          "stepTheme": "Géochronologie",
          "stepBadge": "Datation des roches",
          "paragraphText": "Pour dater les roches volcaniques, on utilise souvent le couple Potassium 40 / Argon 40. Le potassium 40 (^{40}K) se désintègre par capture électronique en Argon 40 (^{40}Ar, gaz rare) avec une période T = 1,25 milliard d'années. Lorsque la lave est en fusion liquide à plus de 1000 °C, tout l'argon gazeux s'échappe dans l'atmosphère. À l'instant de la solidification de la roche (t = 0), N_{Ar}(0) = 0. Au fur et à mesure des millions d'années, l'argon 40 produit reste emprisonné dans le réseau cristallin solide : N_{Ar}(t) = N_K(0) - N_K(t) = N_K(t).(e^(λt) - 1). En mesurant le rapport N_{Ar}/N_K, on déduit l'âge de la roche : t = (1/λ)*ln(1 + N_{Ar}/N_K).",
          "exercise": {
            "id": "p5_s5_qcm",
            "type": "mcq",
            "prompt": "Dans une roche basaltique ancienne, l'analyse spectrométrique montre qu'il y a 3 fois plus de noyaux d'argon 40 piégés que de noyaux de potassium 40 résiduels (N_{Ar} / N_K = 3). Quel est l'âge de la coulée de lave ? (T = 1,25 milliard d'années)",
            "options": [
              "1,25 milliard d'années",
              "2,50 milliards d'années",
              "3,75 milliards d'années",
              "5,00 milliards d'années"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le nombre de noyaux pères initiaux était N_0 = N_K + N_{Ar} = N_K + 3.N_K = 4.N_K. Le rapport restant est donc N_K / N_0 = 1/4 = 1/2², ce qui correspond à exactement 2 demi-vies (n = 2). L'âge vaut t = 2 * T = 2 * 1,25 = 2,50 milliards d'années."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Calibration par dendrochronologie et spectrométrie de masse (AMS)",
          "stepTheme": "Raffinement moderne",
          "stepBadge": "Haute précision",
          "paragraphText": "En raison des variations du champ magnétique terrestre, des cycles solaires et des essais nucléaires atmosphériques du XXe siècle, le taux de production du carbone 14 n'a pas été parfaitement constant dans l'histoire. Les scientifiques étalonnent l'échelle radiocarbone grâce à la dendrochronologie (comptage et analyse des cernes annuels de croissance des arbres millénaires tels que les pins de Bristlecone). De plus, l'utilisation de la spectrométrie de masse par accélérateur (AMS) permet aujourd'hui de compter directement les atomes de carbone 14 un par un au lieu d'attendre leurs désintégrations, réduisant la taille des échantillons nécessaires à quelques milligrammes.",
          "exercise": {
            "id": "p5_s6_qcm",
            "type": "mcq",
            "prompt": "Quel est le principal avantage de la spectrométrie de masse par accélérateur (AMS) par rapport au comptage classique de l'activité radioactive par scintillateur ?",
            "options": [
              "Elle permet d'augmenter artificiellement la demi-vie du carbone 14",
              "Elle nécessite des échantillons 1 000 fois plus petits (quelques milligrammes suffisent) car elle compte directement les atomes présents",
              "Elle élimine le besoin d'utiliser les lois de conservation de Soddy",
              "Elle permet de dater des métaux purs sans carbone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Puisque la demi-vie du ^14C est longue (5590 ans), seul un atome de ^14C sur des millions se désintègre chaque jour. L'AMS compte directement les atomes de ^14C par tri de masse, sans attendre leur désintégration, ce qui autorise des prélèvements quasi invisibles sur des œuvres d'art précieuses."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Étude de cas : Datation d'un rouleau de papyrus historique",
          "stepTheme": "Synthèse d'examen",
          "stepBadge": "Problème type",
          "paragraphText": "Un échantillon de 100 mg de papyrus égyptien fournit une activité mesurée A = 0,85 Bq. Un échantillon de même masse prélevé sur une plante de papyrus fraîche actuelle présente une activité A₀ = 1,53 Bq. Calculons l'âge du document (avec T = 5590 ans) : t = (5590 / ln 2) * ln(1,53 / 0,85) = 8064,6 * ln(1,80) = 8064,6 * 0,5878 ≈ 4 740 ans. Le papyrus a donc été fabriqué vers 2720 avant J.-C., sous l'Ancien Empire égyptien (époque des grandes pyramides).",
          "exercise": {
            "id": "p5_s7_qcm",
            "type": "mcq",
            "prompt": "Dans l'exemple ci-dessus, quel pourcentage de l'activité initiale subsiste dans le papyrus égyptien ?",
            "options": [
              "35,5 %",
              "55,6 %",
              "65,4 %",
              "85,0 %"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le pourcentage résiduel est (A / A₀) * 100 = (0,85 / 1,53) * 100 ≈ 55,56 % ≈ 55,6 %."
          }
        }
      ],
      "exercises": [
        {
          "id": "p5_s1_qcm",
          "type": "mcq",
          "prompt": "Pourquoi la datation au carbone 14 ne peut-elle pas être utilisée pour déterminer l'âge d'un silex taillé préhistorique ou d'un outil en cuivre ?",
          "options": [
            "Parce que le silex et le cuivre contiennent trop de carbone 14 pour être mesurés",
            "Parce que ces minéraux inorganiques n'ont jamais absorbé de carbone atmosphérique par métabolisme",
            "Parce que leur âge dépasse toujours 100 000 ans",
            "Parce que les métaux détruisent les particules radioactives"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La méthode au carbone 14 repose sur l'assimilation biologique du dioxyde de carbone atmosphérique au cours du métabolisme vivant. Les roches siliceuses ou les minerais métalliques sont inorganiques et ne participent pas au cycle du carbone."
        },
        {
          "id": "p5_s2_qcm",
          "type": "mcq",
          "prompt": "Un ossement ancien retrouvé lors d'une fouille contient 25 % de la teneur en carbone 14 mesurée sur un ossement actuel de même masse. Sachant que T = 5590 ans, quel est l'âge de l'ossement ?",
          "options": [
            "2 795 ans",
            "5 590 ans",
            "11 180 ans",
            "16 770 ans"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une proportion résiduelle de 25 % correspond à 1/4 = 1/2² de la valeur initiale, soit exactement 2 demi-vies (n = 2). L'âge vaut t = 2 * T = 2 * 5590 ans = 11 180 ans."
        },
        {
          "id": "p5_s3_qcm",
          "type": "mcq",
          "prompt": "Un morceau de parchemin ancien présente une activité en carbone 14 égale à 60 % de l'activité d'un parchemin moderne équivalent. Quel est l'âge du manuscrit ? (T = 5590 ans, ln(2) = 0,693, ln(1/0,60) = 0,511)",
          "options": [
            "2 235 ans",
            "4 120 ans",
            "3 355 ans",
            "5 590 ans"
          ],
          "correctAnswerIndex": 1,
          "explanation": "t = (T / ln 2) * ln(A₀ / A) = (5590 / 0,693) * ln(1 / 0,60) = 8066 * 0,5108 ≈ 4120 ans."
        },
        {
          "id": "p5_s4_qcm",
          "type": "mcq",
          "prompt": "Un paléontologue affirme avoir daté un fossile de dinosaure (stégosaure disparu il y a 150 millions d'années) grâce à la méthode du carbone 14 (T = 5590 ans). Quelle critique scientifique fondamentale doit-on immédiatement lui opposer ?",
          "options": [
            "Les dinosaures ne contenaient pas de carbone dans leur squelette",
            "Au bout de 150 millions d'années (~27 000 demi-vies), il ne reste plus un seul atome de carbone 14 d'origine dans le fossile",
            "Le carbone 14 ne fonctionne que sur les végétaux et non sur les animaux",
            "La constante radioactive du carbone 14 a changé depuis l'ère secondaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Au bout de 150 millions d'années, le nombre de périodes écoulées est n = 1,5.10⁸ / 5590 ≈ 26 800 demi-vies ! La fraction résiduelle théorique (1/2)^26800 est infiniment plus petite que l'inverse du nombre d'atomes dans l'univers observable : il n'y a plus aucun atome de ^14C originel."
        },
        {
          "id": "p5_s5_qcm",
          "type": "mcq",
          "prompt": "Dans une roche basaltique ancienne, l'analyse spectrométrique montre qu'il y a 3 fois plus de noyaux d'argon 40 piégés que de noyaux de potassium 40 résiduels (N_{Ar} / N_K = 3). Quel est l'âge de la coulée de lave ? (T = 1,25 milliard d'années)",
          "options": [
            "1,25 milliard d'années",
            "2,50 milliards d'années",
            "3,75 milliards d'années",
            "5,00 milliards d'années"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le nombre de noyaux pères initiaux était N_0 = N_K + N_{Ar} = N_K + 3.N_K = 4.N_K. Le rapport restant est donc N_K / N_0 = 1/4 = 1/2², ce qui correspond à exactement 2 demi-vies (n = 2). L'âge vaut t = 2 * T = 2 * 1,25 = 2,50 milliards d'années."
        },
        {
          "id": "p5_s6_qcm",
          "type": "mcq",
          "prompt": "Quel est le principal avantage de la spectrométrie de masse par accélérateur (AMS) par rapport au comptage classique de l'activité radioactive par scintillateur ?",
          "options": [
            "Elle permet d'augmenter artificiellement la demi-vie du carbone 14",
            "Elle nécessite des échantillons 1 000 fois plus petits (quelques milligrammes suffisent) car elle compte directement les atomes présents",
            "Elle élimine le besoin d'utiliser les lois de conservation de Soddy",
            "Elle permet de dater des métaux purs sans carbone"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Puisque la demi-vie du ^14C est longue (5590 ans), seul un atome de ^14C sur des millions se désintègre chaque jour. L'AMS compte directement les atomes de ^14C par tri de masse, sans attendre leur désintégration, ce qui autorise des prélèvements quasi invisibles sur des œuvres d'art précieuses."
        },
        {
          "id": "p5_s7_qcm",
          "type": "mcq",
          "prompt": "Dans l'exemple ci-dessus, quel pourcentage de l'activité initiale subsiste dans le papyrus égyptien ?",
          "options": [
            "35,5 %",
            "55,6 %",
            "65,4 %",
            "85,0 %"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le pourcentage résiduel est (A / A₀) * 100 = (0,85 / 1,53) * 100 ≈ 55,56 % ≈ 55,6 %."
        }
      ]
    },
    {
      "id": "pt6_applications_effets_biologiques",
      "order": 6,
      "title": "Applications pratiques, radioprotection et effets biologiques",
      "summary": "Usages médicaux et industriels des radioéléments, notions d'ionisation, radioprotection (temps, distance, écrans) et gestion des déchets radioactifs.",
      "conceptExplanation": "La radioactivité trouve des applications majeures dans la société moderne : en médecine pour le diagnostic (scintigraphie au technétium 99m, TEP au fluor 18) et la thérapie (curiethérapie, radiothérapie externe au cobalt 60 pour détruire les cellules cancéreuses) ; dans l'industrie pour le contrôle non destructif de soudures (gammagraphie), la stérilisation de matériel chirurgical ou d'aliments par ionisation, et la détection de fuites (traceurs radioactifs). Néanmoins, les rayonnements émis (alpha, bêta, gamma) sont ionisants : ils arrachent des électrons aux molécules biologiques des cellules vivantes, provoquant des ruptures de brins d'ADN, des mutations génétiques ou la mort cellulaire. Les principes fondamentaux de la radioprotection reposent sur trois règles universelles : minimiser la durée d'exposition, maximiser la distance à la source (loi en 1/d²) et interposer des écrans absorbants adaptés (feuille pour alpha, aluminium pour bêta, plomb/béton lourd pour gamma).",
      "keyRule": "Trois règles d'or en radioprotection : 1. Réduire au maximum le temps d'exposition. 2. Augmenter la distance par rapport à la source (débit de dose proportionnel à 1/d²). 3. Utiliser des blindages appropriés (plomb/béton pour γ).",
      "formulas": [
        {
          "name": "Relation 1",
          "formula": "I(d) = \\frac{I_0}{d^2} \\quad \\text{(atténuation géométrique en champ libre)}"
        },
        {
          "name": "Relation 2",
          "formula": "I(x) = I_0 e^{-\\mu x} \\quad \\text{(loi de Beer-Lambert d'atténuation dans la matière)}"
        },
        {
          "name": "Relation 3",
          "formula": "\\text{CDA} = \\frac{\\ln 2}{\\mu} \\quad \\text{(Couche de Demi-Atténuation d'un matériau)}"
        }
      ],
      "workedExample": {
        "title": "Calcul de l'épaisseur de blindage en plomb nécessaire en radiothérapie",
        "statement": "Un faisceau de rayons gamma émis par une source de cobalt 60 traverse un mur en plomb. Le coefficient d'atténuation linéique du plomb pour ces photons gamma est mu = 0,693 cm⁻¹. 1. Calculer la couche de demi-atténuation (CDA) du plomb. 2. Quelle épaisseur de plomb x faut-il installer pour réduire l'intensité du faisceau à 3,125 % de sa valeur initiale ?",
        "methodSteps": [
          "Étape 1 : Calculer la couche de demi-atténuation (épaisseur divisant l'intensité par 2) : CDA = ln(2) / mu = 0,69315 / 0,693 cm⁻¹ = 1,00 cm.",
          "Étape 2 : Analyser le facteur de réduction souhaité : I / I₀ = 3,125 % = 0,03125 = 1 / 32 = 1 / 2⁵.",
          "Étape 3 : Déduire le nombre de CDA nécessaires : n = 5 couches de demi-atténuation.",
          "Étape 4 : Calculer l'épaisseur totale de plomb requise : x = n * CDA = 5 * 1,00 cm = 5,00 cm."
        ],
        "conclusion": "Un écran de 5 cm de plomb permet d'atténuer 96,875 % de l'intensité du rayonnement gamma incident."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau récapitulatif des rayonnements ionisants et protections correspondantes",
        "tableData": {
          "headers": [
            "Rayonnement",
            "Charge / Masse",
            "Mécanisme d'ionisation",
            "Danger externe / interne",
            "Écran de protection préconisé"
          ],
          "rows": [
            [
              "Alpha (α)",
              "+2e / 4 u",
              "Ionisation directe très dense",
              "Inoffensif de l'extérieur (peau) / Mortel par inhalation ou ingestion",
              "Feuille de papier, gants légers"
            ],
            [
              "Bêta (β⁻, β⁺)",
              "±e / 0,00055 u",
              "Ionisation directe modérée",
              "Brûlures cutanées superficielles / Risque interne important",
              "Plaque d'aluminium (quelques mm) ou plexiglas"
            ],
            [
              "Gamma (γ)",
              "0 / 0",
              "Ionisation indirecte (effet photoélectrique, Compton)",
              "Très dangereux en irradiation externe globale",
              "Écrans épais de plomb (plusieurs cm) ou murs de béton"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Notion de rayonnements ionisants et mécanisme d'action",
          "stepTheme": "Rayonnements ionisants",
          "stepBadge": "Définition",
          "paragraphText": "Un rayonnement est qualifié d'ionisant lorsque l'énergie transportée par chaque particule ou quantum dépasse l'énergie de liaison des électrons de la matière (typiquement > 13,6 eV). En traversant les tissus vivants, ces rayonnements arrachent des électrons aux atomes des molécules constituantes (eau, protéines, lipides, ADN). L'ionisation des molécules d'eau intracellulaires engendre par radiolyse des radicaux libres hautement réactifs (OH•, H•) qui agressent chimiquement la double hélice d'ADN.",
          "exercise": {
            "id": "p6_s1_qcm",
            "type": "mcq",
            "prompt": "Quel est le mécanisme principal par lequel les rayonnements gamma provoquent des lésions dans les cellules biologiques ?",
            "options": [
              "En augmentant la température de la cellule de plus de 50 °C par effet Joule",
              "Par la radiolyse de l'eau cellulaire créant des radicaux libres oxydants qui endommagent l'ADN",
              "En provoquant la fusion nucléaire des atomes d'oxygène du cytoplasme",
              "En neutralisant la charge électrique des membranes cellulaires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les cellules étant composées à plus de 70 % d'eau, les rayonnements ionisants interagissent majoritairement avec les molécules d'eau (radiolyse de l'eau : H₂O -> H₂O⁺ + e⁻ -> H⁺ + OH•), libérant des radicaux hydroxyles très agressifs qui rompent les brins de l'ADN."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Effets déterministes et effets stochastiques",
          "stepTheme": "Effets biologiques",
          "stepBadge": "Biologie médicale",
          "paragraphText": "On distingue en médecine deux grandes catégories d'effets biologiques des rayonnements : 1. Les effets déterministes (à court terme) : ils apparaissent avec certitude au-delà d'un seuil de dose (brûlures radiologiques, stérilité temporaire, nausées, destruction des cellules sanguines de la moelle osseuse). Leur gravité augmente avec la dose reçue. 2. Les effets stochastiques ou aléatoires (à long terme) : ils peuvent survenir des années après sans seuil de dose certain (cancers, leucémies, mutations génétiques héréditaires). C'est la probabilité d'apparition qui croît avec la dose, et non la sévérité du cancer une fois déclenché.",
          "exercise": {
            "id": "p6_s2_qcm",
            "type": "mcq",
            "prompt": "Parmi les propositions suivantes, laquelle décrit un effet stochastique (aléatoire) de l'exposition aux rayonnements ionisants ?",
            "options": [
              "Une brûlure cutanée immédiate apparaissant au-delà d'une dose de 3 Sieverts",
              "Une cataracte oculaire sévère survenant au-dessus d'un seuil de 0,5 Sievert",
              "L'apparition d'une leucémie 15 ans après une exposition à faible dose, dont la probabilité augmente avec la dose reçue",
              "Une baisse immédiate du nombre de globules blancs dans le sang"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les effets stochastiques sont probabilistes et tardifs (cancers, leucémies) : ils n'ont pas de seuil d'apparition avéré, et l'augmentation de la dose accroît la probabilité que la maladie apparaisse, mais ne modifie pas sa gravité."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Les trois règles fondamentales de la radioprotection",
          "stepTheme": "Radioprotection",
          "stepBadge": "Sécurité",
          "paragraphText": "Pour protéger les manipulateurs, techniciens et médecins contre l'exposition aux rayonnements, la radioprotection applique trois règles universelles : 1. Le temps : réduire au strict minimum la durée de présence à proximité de la source. 2. La distance : s'éloigner au maximum de la source car en champ libre, le débit de dose diminue avec le carré de la distance (Dose ~ 1 / d²). Doubler la distance divise l'exposition par 4. 3. Les écrans : interposer des blindages adaptés à la nature du rayonnement.",
          "exercise": {
            "id": "p6_s3_qcm",
            "type": "mcq",
            "prompt": "Un opérateur se trouve à une distance d₁ = 1,0 m d'une source radioactive ponctuelle non blindée et subit un débit de dose D₁ = 400 µSv/h. S'il recule à une distance d₂ = 4,0 m, quel sera le nouveau débit de dose subi ?",
            "options": [
              "100 µSv/h",
              "50 µSv/h",
              "25 µSv/h",
              "10 µSv/h"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le débit de dose varie selon l'inverse du carré de la distance : D₂ / D₁ = (d₁ / d₂)² = (1,0 / 4,0)² = 1 / 16. Le nouveau débit de dose est donc D₂ = 400 / 16 = 25 µSv/h. S'éloigner est une mesure de protection extrêmement efficace."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Applications médicales en diagnostic : scintigraphie et TEP",
          "stepTheme": "Médecine nucléaire",
          "stepBadge": "Imagerie médicale",
          "paragraphText": "En imagerie médicale fonctionnelle, on injecte au patient une molécule marquée par un radionucléide émetteur gamma à vie courte (comme le Technétium 99m, T = 6 h). Le radiotraceur se fixe sélectivement sur l'organe cible (os, thyroïde, cœur). Une gamma-caméra détecte les photons gamma émis de l'intérieur du corps et reconstitue une carte fonctionnelle de l'organe (scintigraphie). En Tomographie par Émission de Positons (TEP-scan), on utilise un émetteur β⁺ (le Fluor 18 incorporé dans le glucose). Le positon émis s'annihile avec un électron tissulaire en émettant deux photons gamma à 180°, détectés en coïncidence pour localiser les tumeurs cancéreuses hypermétaboliques.",
          "exercise": {
            "id": "p6_s4_qcm",
            "type": "mcq",
            "prompt": "Pourquoi privilégie-t-on impérativement des radionucléides de courte demi-vie (quelques heures) pour les examens d'imagerie diagnostique in vivo ?",
            "options": [
              "Parce que leur activité est nulle au moment de l'injection",
              "Pour minimiser la dose radioactive intégrée par le patient après l'examen tout en ayant un signal détectable suffisant pendant l'acquisition",
              "Parce que les radionucléides à vie longue ne peuvent pas émettre de rayons gamma",
              "Pour éviter que le traceur ne soit éliminé par les urines"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une demi-vie courte (ex. 6 h pour le Tc-99m) garantit qu'en quelques jours (10 demi-vies), la totalité de la radioactivité a disparu du corps du patient, ce qui limite considérablement l'irradiation cumulée sans altérer la qualité des images."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Applications industrielles : traceurs, gammagraphie et ionisation",
          "stepTheme": "Industrie",
          "stepBadge": "Applications industrielles",
          "paragraphText": "Dans le secteur industriel : 1. La gammagraphie : des sources scellées de cobalt 60 (^60Co) ou d'iridium 192 (^192Ir) émettent des rayons gamma hautement pénétrants permettant de radiographier des tuyauteries épaisses, des ailes d'avions ou des soudures métalliques sur des chantiers navals pour détecter d'éventuelles fissures microscopiques. 2. Les jauges de niveau et d'épaisseur : l'atténuation d'un rayonnement à travers une tôle d'acier ou du papier mesure l'épaisseur au micromètre près en continu sans contact physique. 3. Les traceurs : détection de fuites dans des pipelines souterrains ou étude de l'érosion des côtes.",
          "exercise": {
            "id": "p6_s5_qcm",
            "type": "mcq",
            "prompt": "Dans une usine papetière, pour contrôler en temps réel l'épaisseur d'une feuille de papier en défilement rapide sans la toucher, quel type de source radioactive est le plus approprié ?",
            "options": [
              "Une source alpha puissante",
              "Une source bêta d'énergie adaptée, dont l'absorption varie sensiblement avec de légères variations d'épaisseur de papier",
              "Une source gamma de haute énergie comme le cobalt 60",
              "Une source de neutrons rapides"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les rayons alpha seraient totalement arrêtés dès la moindre feuille de papier, et les rayons gamma la traverseraient sans subir d'atténuation mesurable. Le rayonnement bêta (absorbé modérément par quelques millimètres de matière) est parfaitement adapté pour mesurer l'épaisseur d'une feuille avec une très haute sensibilité."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Confusion entre irradiation externe et contamination radioactive",
          "stepTheme": "Rigueur des concepts",
          "stepBadge": "Attention piège",
          "paragraphText": "Il est primordial de distinguer nettement : 1. L'irradiation : un individu est exposé à distance à un rayonnement ionisant issu d'une source extérieure (comme lorsqu'on effectue une radiographie dentaire). Dès que l'individu s'éloigne ou que la source est retirée, l'exposition cesse instantanément. La personne irradiée NE DEVIENT PAS radioactive et ne présente aucun danger pour son entourage. 2. La contamination : des substances radioactives (poussières, aérosols, liquides) se déposent sur la peau ou les vêtements (contamination externe), ou pénètrent à l'intérieur du corps par inhalation ou ingestion (contamination interne). Dans ce cas, la personne transporte la source et continue d'être irradiée en permanence tant que la matière n'est pas décontaminée ou éliminée biologiquement.",
          "exercise": {
            "id": "p6_s6_qcm",
            "type": "mcq",
            "prompt": "Un patient subit une radiographie pulmonaire aux rayons X. Une fois rentré chez lui, ses proches courent-ils le moindre risque d'être irradiés à son contact ?",
            "options": [
              "Oui, car son corps a accumulé des radiations qu'il réémet pendant 24 heures",
              "Non, car il a subi une simple irradiation : les photons le traversent sans y déposer de matière radioactive ; son corps n'est absolument pas radioactif",
              "Oui, s'il transpire ou respire près d'eux",
              "Oui, uniquement pour les femmes enceintes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'irradiation n'est qu'un flux d'ondes ou de particules qui traverse la matière sans y laisser de radionucléides. La personne irradiée ne devient jamais radioactive, contrairement à une contamination où de la matière radioactive est absorbée."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Gestion des déchets radioactifs et classification par durée de vie",
          "stepTheme": "Gestion des déchets",
          "stepBadge": "Environnement",
          "paragraphText": "Les déchets radioactifs sont rigoureusement classés selon leur niveau d'activité (très faible, faible, moyenne, haute activité) et leur période radioactive : 1. Déchets à vie très courte (VTC, T < 100 jours) : principalement issus des hôpitaux, ils sont stockés sur place quelques mois dans des locaux blindés pour décroissance radioactive, puis traités comme des déchets hospitaliers ordinaires une fois inactifs. 2. Déchets à vie courte (T <= 31 ans, ex. césium 137, strontium 90) : stockés en surface ou faible profondeur pendant 300 ans. 3. Déchets de haute activité et à vie longue (HAVL, T > 31 ans, actinides mineurs, uranium, plutonium) : vitrifiés dans des matrices d'acier et destinés au stockage géologique profond en couche géologique stable (argile, granite) à plusieurs centaines de mètres sous terre.",
          "exercise": {
            "id": "p6_s7_qcm",
            "type": "mcq",
            "prompt": "Un laboratoire médical utilise de l'iode 131 (^{131}I) dont la période radioactive est T = 8,0 jours pour traiter la thyroïde. Au bout de combien de temps les compresses et seringues utilisées peuvent-elles être évacuées dans les filières classiques de déchets sans aucun risque radiologique ? (règle des 10 périodes)",
            "options": [
              "8 jours",
              "24 jours",
              "80 jours (environ 2,5 mois)",
              "800 jours"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Selon la règle des 10 périodes (t = 10.T), l'activité résiduelle est divisée par 2¹⁰ = 1024, soit une atténuation supérieure à 99,9 %. Pour l'iode 131 : t = 10 * 8,0 jours = 80 jours (environ deux mois et demi)."
          }
        }
      ],
      "exercises": [
        {
          "id": "p6_s1_qcm",
          "type": "mcq",
          "prompt": "Quel est le mécanisme principal par lequel les rayonnements gamma provoquent des lésions dans les cellules biologiques ?",
          "options": [
            "En augmentant la température de la cellule de plus de 50 °C par effet Joule",
            "Par la radiolyse de l'eau cellulaire créant des radicaux libres oxydants qui endommagent l'ADN",
            "En provoquant la fusion nucléaire des atomes d'oxygène du cytoplasme",
            "En neutralisant la charge électrique des membranes cellulaires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les cellules étant composées à plus de 70 % d'eau, les rayonnements ionisants interagissent majoritairement avec les molécules d'eau (radiolyse de l'eau : H₂O -> H₂O⁺ + e⁻ -> H⁺ + OH•), libérant des radicaux hydroxyles très agressifs qui rompent les brins de l'ADN."
        },
        {
          "id": "p6_s2_qcm",
          "type": "mcq",
          "prompt": "Parmi les propositions suivantes, laquelle décrit un effet stochastique (aléatoire) de l'exposition aux rayonnements ionisants ?",
          "options": [
            "Une brûlure cutanée immédiate apparaissant au-delà d'une dose de 3 Sieverts",
            "Une cataracte oculaire sévère survenant au-dessus d'un seuil de 0,5 Sievert",
            "L'apparition d'une leucémie 15 ans après une exposition à faible dose, dont la probabilité augmente avec la dose reçue",
            "Une baisse immédiate du nombre de globules blancs dans le sang"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les effets stochastiques sont probabilistes et tardifs (cancers, leucémies) : ils n'ont pas de seuil d'apparition avéré, et l'augmentation de la dose accroît la probabilité que la maladie apparaisse, mais ne modifie pas sa gravité."
        },
        {
          "id": "p6_s3_qcm",
          "type": "mcq",
          "prompt": "Un opérateur se trouve à une distance d₁ = 1,0 m d'une source radioactive ponctuelle non blindée et subit un débit de dose D₁ = 400 µSv/h. S'il recule à une distance d₂ = 4,0 m, quel sera le nouveau débit de dose subi ?",
          "options": [
            "100 µSv/h",
            "50 µSv/h",
            "25 µSv/h",
            "10 µSv/h"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le débit de dose varie selon l'inverse du carré de la distance : D₂ / D₁ = (d₁ / d₂)² = (1,0 / 4,0)² = 1 / 16. Le nouveau débit de dose est donc D₂ = 400 / 16 = 25 µSv/h. S'éloigner est une mesure de protection extrêmement efficace."
        },
        {
          "id": "p6_s4_qcm",
          "type": "mcq",
          "prompt": "Pourquoi privilégie-t-on impérativement des radionucléides de courte demi-vie (quelques heures) pour les examens d'imagerie diagnostique in vivo ?",
          "options": [
            "Parce que leur activité est nulle au moment de l'injection",
            "Pour minimiser la dose radioactive intégrée par le patient après l'examen tout en ayant un signal détectable suffisant pendant l'acquisition",
            "Parce que les radionucléides à vie longue ne peuvent pas émettre de rayons gamma",
            "Pour éviter que le traceur ne soit éliminé par les urines"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une demi-vie courte (ex. 6 h pour le Tc-99m) garantit qu'en quelques jours (10 demi-vies), la totalité de la radioactivité a disparu du corps du patient, ce qui limite considérablement l'irradiation cumulée sans altérer la qualité des images."
        },
        {
          "id": "p6_s5_qcm",
          "type": "mcq",
          "prompt": "Dans une usine papetière, pour contrôler en temps réel l'épaisseur d'une feuille de papier en défilement rapide sans la toucher, quel type de source radioactive est le plus approprié ?",
          "options": [
            "Une source alpha puissante",
            "Une source bêta d'énergie adaptée, dont l'absorption varie sensiblement avec de légères variations d'épaisseur de papier",
            "Une source gamma de haute énergie comme le cobalt 60",
            "Une source de neutrons rapides"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les rayons alpha seraient totalement arrêtés dès la moindre feuille de papier, et les rayons gamma la traverseraient sans subir d'atténuation mesurable. Le rayonnement bêta (absorbé modérément par quelques millimètres de matière) est parfaitement adapté pour mesurer l'épaisseur d'une feuille avec une très haute sensibilité."
        },
        {
          "id": "p6_s6_qcm",
          "type": "mcq",
          "prompt": "Un patient subit une radiographie pulmonaire aux rayons X. Une fois rentré chez lui, ses proches courent-ils le moindre risque d'être irradiés à son contact ?",
          "options": [
            "Oui, car son corps a accumulé des radiations qu'il réémet pendant 24 heures",
            "Non, car il a subi une simple irradiation : les photons le traversent sans y déposer de matière radioactive ; son corps n'est absolument pas radioactif",
            "Oui, s'il transpire ou respire près d'eux",
            "Oui, uniquement pour les femmes enceintes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'irradiation n'est qu'un flux d'ondes ou de particules qui traverse la matière sans y laisser de radionucléides. La personne irradiée ne devient jamais radioactive, contrairement à une contamination où de la matière radioactive est absorbée."
        },
        {
          "id": "p6_s7_qcm",
          "type": "mcq",
          "prompt": "Un laboratoire médical utilise de l'iode 131 (^{131}I) dont la période radioactive est T = 8,0 jours pour traiter la thyroïde. Au bout de combien de temps les compresses et seringues utilisées peuvent-elles être évacuées dans les filières classiques de déchets sans aucun risque radiologique ? (règle des 10 périodes)",
          "options": [
            "8 jours",
            "24 jours",
            "80 jours (environ 2,5 mois)",
            "800 jours"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Selon la règle des 10 périodes (t = 10.T), l'activité résiduelle est divisée par 2¹⁰ = 1024, soit une atténuation supérieure à 99,9 %. Pour l'iode 131 : t = 10 * 8,0 jours = 80 jours (environ deux mois et demi)."
        }
      ]
    }
  ],
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [
    "terminale_c"
  ]
};
