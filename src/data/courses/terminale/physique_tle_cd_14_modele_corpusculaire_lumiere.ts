import type { CurriculumChapter } from '../../../lib/curriculum/types';

export const PHYSIQUE_TLE_CD_L14_MODELE_CORPUSCULAIRE_LUMIERE: CurriculumChapter = {
  "id": "physique_tle_cd_14_modele_corpusculaire_lumiere",
  "order": 14,
  "title": "Modèle corpusculaire de la lumière (Photons et quanta)",
  "summary": "Découverte de la nature corpusculaire de la lumière : effet photoélectrique, théorie des quanta de Planck-Einstein, caractéristiques du photon, quantification des niveaux d'énergie de l'atome, spectres de raies de l'hydrogène, séries de Lyman, Balmer et Paschen, et conditions strictes d'absorption et d'ionisation.",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "École Numérique de Côte d'Ivoire - Direction de la Pédagogie et de la Formation Continue (DPFC)",
  "points": [
    {
      "id": "pt1_effet_photoelectrique_limites_classiques",
      "order": 1,
      "title": "Effet photoélectrique et limites du modèle ondulatoire classique",
      "summary": "Mise en évidence expérimentale de l'effet photoélectrique, observation de la fréquence seuil, indépendance de la tension d'arrêt vis-à-vis de l'intensité lumineuse et échec de l'électromagnétisme classique.",
      "conceptExplanation": "L'effet photoélectrique est l'extraction d'électrons d'un matériau conducteur (généralement métallique) sous l'action d'un rayonnement lumineux adapté. Découvert par Heinrich Hertz en 1887 et étudié expérimentalement par Philipp Lenard, ce phénomène présente des lois impossibles à expliquer par la théorie électromagnétique ondulatoire classique de Maxwell : 1. Il existe pour chaque métal une fréquence minimale de coupure, appelée fréquence seuil nu_0 (ou longueur d'onde seuil lambda_0 = c / nu_0), en dessous de laquelle aucun électron n'est éjecté, quelle que soit la puissance ou l'intensité du faisceau lumineux incident. 2. L'émission des photoélectrons est quasi instantanée (délai inférieur à 10⁻⁹ s), même sous un éclairement extrêmement faible. 3. L'énergie cinétique maximale des électrons émis dépend exclusivement de la fréquence nu du rayonnement incident et nullement de l'intensité lumineuse. Une onde classique prédisait qu'en accumulant de l'énergie au cours du temps, une onde de n'importe quelle fréquence finirait par arracher un électron : l'expérience infirme formellement cette prédiction classique.",
      "keyRule": "L'effet photoélectrique ne se produit que si la fréquence du rayonnement incident est supérieure ou égale à la fréquence seuil nu_0 du métal : nu >= nu_0 (ou lambda <= lambda_0).",
      "formulas": [
        {
          "name": "Relation 1",
          "formula": "\\nu \\ge \\nu_0 \\iff \\lambda \\le \\lambda_0 = \\frac{c}{\\nu_0}"
        },
        {
          "name": "Relation 2",
          "formula": "W_0 = h \\nu_0 = \\frac{h c}{\\lambda_0} \\quad \\text{(travail d'extraction)}"
        },
        {
          "name": "Relation 3",
          "formula": "E_{c,\\max} = h\\nu - W_0 = e U_0 \\quad \\text{(tension d'arrêt)}"
        }
      ],
      "workedExample": {
        "title": "Vérification de la condition d'extraction sur une cible en césium",
        "statement": "Une cellule photoélectrique possède une photocathode en césium dont le travail d'extraction vaut W₀ = 1,90 eV. 1. Calculer la fréquence seuil nu_0 et la longueur d'onde seuil lambda_0 du césium. 2. On éclaire cette cathode successivement avec une radiation rouge (lambda_1 = 700 nm) puis avec une radiation bleue (lambda_2 = 450 nm). L'effet photoélectrique est-il observé dans chaque cas ? Données : h = 6,63.10⁻³⁴ J.s ; c = 3,00.10⁸ m/s ; 1 eV = 1,60.10⁻¹⁹ J.",
        "methodSteps": [
          "Étape 1 : Convertir le travail d'extraction en Joules : W₀ = 1,90 eV * 1,60.10⁻¹⁹ J/eV = 3,04.10⁻¹⁹ J.",
          "Étape 2 : Calculer la fréquence seuil : nu_0 = W₀ / h = 3,04.10⁻¹⁹ / 6,63.10⁻³⁴ ≈ 4,59.10¹⁴ Hz.",
          "Étape 3 : Calculer la longueur d'onde seuil : lambda_0 = c / nu_0 = (3,00.10⁸) / (4,59.10¹⁴) ≈ 6,54.10⁻⁷ m = 654 nm.",
          "Étape 4 : Comparer les longueurs d'onde incidentes à lambda_0 : Pour la lumière rouge (lambda_1 = 700 nm) : 700 nm > 654 nm, donc lambda_1 > lambda_0 (nu_1 < nu_0) : aucun électron n'est émis. Pour la lumière bleue (lambda_2 = 450 nm) : 450 nm < 654 nm, donc lambda_2 < lambda_0 (nu_2 > nu_0) : l'effet photoélectrique a lieu."
        ],
        "conclusion": "Seule la radiation bleue permet d'extraire des photoélectrons, la radiation rouge ayant une énergie par photon insuffisante face au seuil de 1,90 eV du césium."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Comparaison des prédictions de la physique classique et des observations réelles",
        "tableData": {
          "headers": [
            "Caractéristique observée",
            "Prédiction du modèle ondulatoire classique",
            "Observation expérimentale réelle (modèle quantique)",
            "Interprétation physique"
          ],
          "rows": [
            [
              "Fréquence seuil (nu_0)",
              "Inexistante : toute lumière doit pouvoir arracher des électrons si l'on attend assez longtemps",
              "Seuil strict nu >= nu_0 : émission impossible si nu < nu_0 même à très forte intensité",
              "Chaque photon interagit individuellement avec un électron unique"
            ],
            [
              "Temps de réponse",
              "Retard de plusieurs minutes ou heures sous faible intensité lumineuse",
              "Instantanéité absolue (délai < 10⁻⁹ s)",
              "L'énergie est transmise en un seul quantum instantané"
            ],
            [
              "Énergie cinétique des électrons",
              "Doit augmenter avec l'amplitude (intensité) de l'onde lumineuse",
              "Dépend strictement de la fréquence nu et est totalement indépendante de l'intensité",
              "E_c = h.nu - W₀ : l'intensité augmente seulement le nombre de photons"
            ],
            [
              "Influence de l'intensité",
              "Contrôle direct de l'énergie des électrons arrachés",
              "Contrôle uniquement le nombre d'électrons émis par seconde (courant de saturation)",
              "Flux d'électrons proportionnel au flux de photons incidents"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition phénoménologique de l'effet photoélectrique",
          "stepTheme": "Effet photoélectrique",
          "stepBadge": "Définition",
          "paragraphText": "L'effet photoélectrique désigne l'émission d'électrons par un matériau (conducteur métallique ou semi-conducteur) lorsqu'il est exposé à un rayonnement électromagnétique de fréquence convenable. Les électrons éjectés de la surface métallique sont appelés 'photoélectrons'. Le dispositif expérimental type comporte une ampoule sous vide munie d'une photocathode métallique réceptrice et d'une anode collectrice reliées à un générateur de tension réglable et à un ampèremètre ultra-sensible.",
          "exercise": {
            "id": "phys_tle_cd_14_p1_s1_qcm",
            "type": "mcq",
            "prompt": "Dans une cellule photoélectrique sous vide, qu'appelle-t-on le 'courant de saturation' I_sat ?",
            "options": [
              "Le courant maximal atteint lorsque tous les photoélectrons émis par la cathode sont captés par l'anode",
              "Le courant obtenu lorsque la fréquence de la lumière incidente est rigoureusement égale à nu_0",
              "Le courant de fuite mesuré dans l'obscurité totale",
              "Le courant qui annule la tension d'arrêt"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Lorsque le potentiel de l'anode est suffisamment positif par rapport à la cathode, l'intégralité des électrons arrachés par le flux lumineux est collectée : le courant atteint une valeur plafond constante appelée courant de saturation I_sat, directement proportionnel à l'intensité lumineuse."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Existence de la fréquence seuil nu_0 et travail d'extraction W₀",
          "stepTheme": "Seuil photoélectrique",
          "stepBadge": "Propriété fondamentale",
          "paragraphText": "Pour un métal donné, les électrons sont retenus dans le réseau cristallin par des forces électrostatiques de liaison. L'énergie minimale indispensable pour extraire un électron situé au niveau de Fermi du métal sans lui conférer de vitesse résiduelle est le travail d'extraction (noté W₀ ou E_s). Il est caractéristique de la nature chimique du métal. La fréquence seuil nu_0 est la fréquence minimale du photon capable de fournir cette énergie : W₀ = h.nu_0. La longueur d'onde seuil correspondante dans le vide est lambda_0 = c / nu_0 = h.c / W₀.",
          "exercise": {
            "id": "phys_tle_cd_14_p1_s2_qcm",
            "type": "mcq",
            "prompt": "Le platine possède un travail d'extraction très élevé W₀ = 6,35 eV. Dans quel domaine du spectre électromagnétique se situe sa longueur d'onde seuil lambda_0 ? (h.c ≈ 1240 eV.nm)",
            "options": [
              "Infrarouge lointain (~ 1 950 nm)",
              "Lumière visible rouge (~ 650 nm)",
              "Ultraviolet lointain (~ 195 nm)",
              "Rayons X durs (~ 0,05 nm)"
            ],
            "correctAnswerIndex": 2,
            "explanation": "lambda_0 = h.c / W₀ ≈ 1240 eV.nm / 6,35 eV ≈ 195,3 nm. Cette longueur d'onde inférieure à 400 nm se situe nettement dans le domaine des ultraviolets (UV-C). Le platine n'émet aucun électron sous de la lumière visible."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Mesure de la tension d'arrêt U_0 (potentiel d'arrêt)",
          "stepTheme": "Potentiel d'arrêt",
          "stepBadge": "Méthode expérimentale",
          "paragraphText": "Pour déterminer l'énergie cinétique maximale E_{c,max} des photoélectrons, on applique entre l'anode et la cathode une tension négative U = V_A - V_C < 0, créant un champ électrique retardateur qui freine les électrons. Lorsque la tension atteint une valeur seuil -U_0 (où U_0 > 0 est le potentiel d'arrêt), même les électrons les plus rapides sont stoppés juste avant d'atteindre l'anode, et le courant s'annule : I = 0. D'après le théorème de l'énergie cinétique : ΔE_c = W(F_e) => 0 - E_{c,max} = -e.U_0, d'où E_{c,max} = e.U_0.",
          "exercise": {
            "id": "phys_tle_cd_14_p1_s3_qcm",
            "type": "mcq",
            "prompt": "Pour une cellule photoélectrique éclairée par une lumière monochromatique, on mesure un potentiel d'arrêt U_0 = 1,45 V. Quelle est l'énergie cinétique maximale des électrons émis à la surface du métal ?",
            "options": [
              "1,45 eV (soit 2,32.10⁻¹⁹ J)",
              "0,725 eV",
              "2,90 eV",
              "1,45 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "E_{c,max} = e * U_0 = 1 e * 1,45 V = 1,45 eV. En convertissant en Joules : 1,45 * 1,602.10⁻¹⁹ J ≈ 2,32.10⁻¹⁹ J."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Indépendance de la tension d'arrêt vis-à-vis du flux lumineux",
          "stepTheme": "Échec du modèle classique",
          "stepBadge": "Preuve décisive",
          "paragraphText": "Si l'on multiplie par 10 ou par 100 l'intensité d'une source lumineuse monochromatique de fréquence nu donnée (en rapprochant la lampe de la photocathode), on constate expérimentalement que : 1. Le courant de saturation I_sat est multiplié par 10 ou 100 (davantage d'électrons sont émis par seconde). 2. En revanche, la tension d'arrêt U_0 reste rigoureusement identique ! Ce résultat a constitué un choc majeur pour la physique classique : l'énergie individuelle des électrons émis ne dépend que de la couleur (la fréquence nu) de la lumière, et non de sa brillance.",
          "exercise": {
            "id": "phys_tle_cd_14_p1_s4_qcm",
            "type": "mcq",
            "prompt": "On éclaire une photocathode avec un laser de 5 mW produisant des électrons d'énergie cinétique maximale 1,2 eV. Si l'on remplace ce laser par un laser de même longueur d'onde mais d'une puissance de 50 mW, que devient l'énergie cinétique maximale des électrons ?",
            "options": [
              "Elle est multipliée par 10 (12 eV)",
              "Elle est multipliée par la racine carrée de 10 (~ 3,8 eV)",
              "Elle reste rigoureusement égale à 1,2 eV",
              "Elle devient nulle car la cathode surchauffe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'énergie cinétique maximale dépend uniquement de l'énergie d'un photon individuel E = h.nu et du travail d'extraction W₀ (E_{c,max} = h.nu - W₀). Comme la longueur d'onde n'a pas varié, l'énergie de chaque photon est identique : E_{c,max} reste strictement égale à 1,2 eV. Seul le nombre d'électrons émis par seconde est multiplié par 10."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confusion entre puissance du faisceau et énergie des photons",
          "stepTheme": "Rigueur conceptuelle",
          "stepBadge": "Attention piège",
          "paragraphText": "Une confusion majeure réside dans la distinction entre la puissance globale d'un rayonnement P (en Watts) et l'énergie d'un photon individuel E = h.nu (en Joules ou eV). La puissance est le produit du nombre N_p de photons émis par seconde par l'énergie unitaire de chacun : P = (N_p / Δt) * h.nu = n_flux * h.nu. Un faisceau infrarouge très puissant (100 W) transporte des milliards de photons de faible énergie individuelle (1 eV) incapables de franchir un seuil W₀ = 2 eV. Inversement, un faisceau ultraviolet de seulement 1 µW transporte des photons de 5 eV qui déclenchent immédiatement l'effet photoélectrique.",
          "exercise": {
            "id": "phys_tle_cd_14_p1_s5_qcm",
            "type": "mcq",
            "prompt": "Un faisceau laser rouge (lambda = 650 nm) délivre une puissance lumineuse de 10 mW. Combien de photons émet-il par seconde ? (h.c ≈ 3,06.10⁻¹⁹ J.m / 650.10⁻⁹ m ≈ 3,06.10⁻¹⁹ J par photon)",
            "options": [
              "3,27.10¹³ photons/s",
              "3,27.10¹⁶ photons/s",
              "1,00.10¹⁸ photons/s",
              "6,02.10²³ photons/s"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'énergie d'un photon est E_p = h.c / lambda = (6,63.10⁻³⁴ * 3,00.10⁸) / (650.10⁻⁹) ≈ 3,06.10⁻¹⁹ J. Le nombre de photons émis par seconde est N = P / E_p = 10.10⁻³ W / 3,06.10⁻¹⁹ J ≈ 3,27.10¹⁶ photons par seconde."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Relation linéaire d'Einstein et détermination de la constante de Planck h",
          "stepTheme": "Équation d'Einstein",
          "stepBadge": "Constante universelle",
          "paragraphText": "En portant sur un graphique le potentiel d'arrêt U_0 en fonction de la fréquence nu pour divers métaux, Robert Millikan a confirmé en 1916 l'équation théorique d'Einstein : e.U_0 = h.nu - W₀ <=> U_0 = (h / e).nu - (W₀ / e). On obtient une droite de pente positive a = h / e. Cette pente est rigoureusement identique pour TOUS les métaux de la création ! La mesure de la pente a permet une mesure directe de la constante de Planck : h = e * a.",
          "exercise": {
            "id": "phys_tle_cd_14_p1_s6_qcm",
            "type": "mcq",
            "prompt": "La droite expérimentale U_0 = f(nu) possède une pente mesurée a = 4,14.10⁻¹⁵ V.s. Quelle est la valeur déduite de la constante de Planck h en J.s ? (e = 1,602.10⁻¹⁹ C)",
            "options": [
              "2,58.10⁻³⁴ J.s",
              "6,63.10⁻³⁴ J.s",
              "1,05.10⁻³⁴ J.s",
              "9,11.10⁻³¹ J.s"
            ],
            "correctAnswerIndex": 1,
            "explanation": "h = e * a = 1,602.10⁻¹⁹ C * 4,14.10⁻¹⁵ V.s ≈ 6,63.10⁻³⁴ J.s."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Applications technologiques modernes de l'effet photoélectrique",
          "stepTheme": "Technologies",
          "stepBadge": "Applications modernes",
          "paragraphText": "L'effet photoélectrique est au cœur de multiples technologies contemporaines : 1. Les cellules photovoltaïques solaires : l'absorption des photons solaires libère des paires électron-trou à la jonction p-n d'un semi-conducteur (silicium), générant une tension électrique continue. 2. Les capteurs d'images CCD et CMOS des appareils photo et smartphones : chaque pixel transforme les photons incidents en charges électriques proportionnelles à la luminosité. 3. Les photomultiplicateurs utilisés en physique des particules et imagerie médicale (scintigraphie, TEP), capables de détecter un photon unique par émission secondaire en cascade.",
          "exercise": {
            "id": "phys_tle_cd_14_p1_s7_qcm",
            "type": "mcq",
            "prompt": "Dans un capteur de caméra numérique CCD à base de silicium, que produit concrètement chaque photon de lumière visible absorbé par un pixel ?",
            "options": [
              "Une étincelle électrique visible",
              "La libération d'un électron collecté sous forme de signal de charge électrique",
              "Une onde thermique qui chauffe le capteur",
              "L'émission d'un photon gamma"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par effet photoélectrique interne dans le silicium, chaque photon absorbé fait franchir la bande interdite à un électron de valence, créant un électron libre collecté dans un puits de potentiel électrostatique pour quantifier le niveau de gris ou de couleur du pixel."
          }
        }
      ],
      "exercises": [
        {
          "id": "phys_tle_cd_14_p1_s1_qcm",
          "type": "mcq",
          "prompt": "Dans une cellule photoélectrique sous vide, qu'appelle-t-on le 'courant de saturation' I_sat ?",
          "options": [
            "Le courant maximal atteint lorsque tous les photoélectrons émis par la cathode sont captés par l'anode",
            "Le courant obtenu lorsque la fréquence de la lumière incidente est rigoureusement égale à nu_0",
            "Le courant de fuite mesuré dans l'obscurité totale",
            "Le courant qui annule la tension d'arrêt"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lorsque le potentiel de l'anode est suffisamment positif par rapport à la cathode, l'intégralité des électrons arrachés par le flux lumineux est collectée : le courant atteint une valeur plafond constante appelée courant de saturation I_sat, directement proportionnel à l'intensité lumineuse."
        },
        {
          "id": "phys_tle_cd_14_p1_s2_qcm",
          "type": "mcq",
          "prompt": "Le platine possède un travail d'extraction très élevé W₀ = 6,35 eV. Dans quel domaine du spectre électromagnétique se situe sa longueur d'onde seuil lambda_0 ? (h.c ≈ 1240 eV.nm)",
          "options": [
            "Infrarouge lointain (~ 1 950 nm)",
            "Lumière visible rouge (~ 650 nm)",
            "Ultraviolet lointain (~ 195 nm)",
            "Rayons X durs (~ 0,05 nm)"
          ],
          "correctAnswerIndex": 2,
          "explanation": "lambda_0 = h.c / W₀ ≈ 1240 eV.nm / 6,35 eV ≈ 195,3 nm. Cette longueur d'onde inférieure à 400 nm se situe nettement dans le domaine des ultraviolets (UV-C). Le platine n'émet aucun électron sous de la lumière visible."
        },
        {
          "id": "phys_tle_cd_14_p1_s3_qcm",
          "type": "mcq",
          "prompt": "Pour une cellule photoélectrique éclairée par une lumière monochromatique, on mesure un potentiel d'arrêt U_0 = 1,45 V. Quelle est l'énergie cinétique maximale des électrons émis à la surface du métal ?",
          "options": [
            "1,45 eV (soit 2,32.10⁻¹⁹ J)",
            "0,725 eV",
            "2,90 eV",
            "1,45 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "E_{c,max} = e * U_0 = 1 e * 1,45 V = 1,45 eV. En convertissant en Joules : 1,45 * 1,602.10⁻¹⁹ J ≈ 2,32.10⁻¹⁹ J."
        },
        {
          "id": "phys_tle_cd_14_p1_s4_qcm",
          "type": "mcq",
          "prompt": "On éclaire une photocathode avec un laser de 5 mW produisant des électrons d'énergie cinétique maximale 1,2 eV. Si l'on remplace ce laser par un laser de même longueur d'onde mais d'une puissance de 50 mW, que devient l'énergie cinétique maximale des électrons ?",
          "options": [
            "Elle est multipliée par 10 (12 eV)",
            "Elle est multipliée par la racine carrée de 10 (~ 3,8 eV)",
            "Elle reste rigoureusement égale à 1,2 eV",
            "Elle devient nulle car la cathode surchauffe"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'énergie cinétique maximale dépend uniquement de l'énergie d'un photon individuel E = h.nu et du travail d'extraction W₀ (E_{c,max} = h.nu - W₀). Comme la longueur d'onde n'a pas varié, l'énergie de chaque photon est identique : E_{c,max} reste strictement égale à 1,2 eV. Seul le nombre d'électrons émis par seconde est multiplié par 10."
        },
        {
          "id": "phys_tle_cd_14_p1_s5_qcm",
          "type": "mcq",
          "prompt": "Un faisceau laser rouge (lambda = 650 nm) délivre une puissance lumineuse de 10 mW. Combien de photons émet-il par seconde ? (h.c ≈ 3,06.10⁻¹⁹ J.m / 650.10⁻⁹ m ≈ 3,06.10⁻¹⁹ J par photon)",
          "options": [
            "3,27.10¹³ photons/s",
            "3,27.10¹⁶ photons/s",
            "1,00.10¹⁸ photons/s",
            "6,02.10²³ photons/s"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'énergie d'un photon est E_p = h.c / lambda = (6,63.10⁻³⁴ * 3,00.10⁸) / (650.10⁻⁹) ≈ 3,06.10⁻¹⁹ J. Le nombre de photons émis par seconde est N = P / E_p = 10.10⁻³ W / 3,06.10⁻¹⁹ J ≈ 3,27.10¹⁶ photons par seconde."
        },
        {
          "id": "phys_tle_cd_14_p1_s6_qcm",
          "type": "mcq",
          "prompt": "La droite expérimentale U_0 = f(nu) possède une pente mesurée a = 4,14.10⁻¹⁵ V.s. Quelle est la valeur déduite de la constante de Planck h en J.s ? (e = 1,602.10⁻¹⁹ C)",
          "options": [
            "2,58.10⁻³⁴ J.s",
            "6,63.10⁻³⁴ J.s",
            "1,05.10⁻³⁴ J.s",
            "9,11.10⁻³¹ J.s"
          ],
          "correctAnswerIndex": 1,
          "explanation": "h = e * a = 1,602.10⁻¹⁹ C * 4,14.10⁻¹⁵ V.s ≈ 6,63.10⁻³⁴ J.s."
        },
        {
          "id": "phys_tle_cd_14_p1_s7_qcm",
          "type": "mcq",
          "prompt": "Dans un capteur de caméra numérique CCD à base de silicium, que produit concrètement chaque photon de lumière visible absorbé par un pixel ?",
          "options": [
            "Une étincelle électrique visible",
            "La libération d'un électron collecté sous forme de signal de charge électrique",
            "Une onde thermique qui chauffe le capteur",
            "L'émission d'un photon gamma"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par effet photoélectrique interne dans le silicium, chaque photon absorbé fait franchir la bande interdite à un électron de valence, créant un électron libre collecté dans un puits de potentiel électrostatique pour quantifier le niveau de gris ou de couleur du pixel."
        }
      ]
    },
    {
      "id": "pt2_modele_photon_theorie_quanta",
      "order": 2,
      "title": "Le photon et la théorie des quanta de Planck-Einstein",
      "summary": "Hypothèse des quanta d'énergie de Max Planck (1900), concept du photon selon Albert Einstein (1905), caractéristiques du photon (vitesse c, masse nulle, charge nulle, énergie E = h.nu).",
      "conceptExplanation": "En 1900, pour résoudre le problème du rayonnement du corps noir et la fameuse 'catastrophe ultraviolette', Max Planck émet l'hypothèse révolutionnaire que les échanges d'énergie entre la matière et le rayonnement s'effectuent par paquets élémentaires d'énergie discrets, appelés quanta. En 1905, Albert Einstein étend cette idée à la lumière elle-même : la lumière n'est pas seulement émise ou absorbée par paquets, elle est elle-même constituée d'un flux de corpuscules d'énergie lumineuse localisés, baptisés plus tard 'photons'. Un photon de fréquence nu transporte un quantum d'énergie indissociable E = h.nu = h.c / lambda. Le photon est une particule fondamentale de masse au repos strictement nulle, de charge électrique nulle, et se déplaçant en permanence à la vitesse de la lumière c dans le vide.",
      "keyRule": "L'énergie transportée par un photon est E = h.nu = h.c / lambda. Un photon ne peut être ni fractionné, ni ralenti : il est soit absorbé en totalité, soit émis en totalité.",
      "formulas": [
        {
          "name": "Relation 1",
          "formula": "E = h \\nu = \\frac{h c}{\\lambda}"
        },
        {
          "name": "Relation 2",
          "formula": "h = 6{,}626 \\times 10^{-34}\\text{ J}\\cdot\\text{s} \\approx 4{,}136 \\times 10^{-15}\\text{ eV}\\cdot\\text{s}"
        },
        {
          "name": "Relation 3",
          "formula": "c = 3{,}00 \\times 10^8\\text{ m/s}"
        },
        {
          "name": "Relation 4",
          "formula": "h c \\approx 1{,}986 \\times 10^{-25}\\text{ J}\\cdot\\text{m} \\approx 1240\\text{ eV}\\cdot\\text{nm}"
        },
        {
          "name": "Relation 5",
          "formula": "p = \\frac{E}{c} = \\frac{h}{\\lambda} \\quad \\text{(quantité de mouvement du photon)}"
        }
      ],
      "workedExample": {
        "title": "Calcul de l'énergie et de la quantité de mouvement d'un photon ultraviolet",
        "statement": "Une lampe à vapeur de mercure émet une raie ultraviolette intense de longueur d'onde lambda = 253,7 nm. 1. Calculer la fréquence nu de cette radiation. 2. Déterminer l'énergie E d'un photon en Joules (J) puis en électronvolts (eV). 3. Calculer la quantité de mouvement p de ce photon.",
        "methodSteps": [
          "Étape 1 : Calculer la fréquence nu : nu = c / lambda = (3,00.10⁸ m/s) / (253,7.10⁻⁹ m) ≈ 1,182.10¹⁵ Hz.",
          "Étape 2 : Calculer l'énergie du photon en Joules : E = h * nu = 6,63.10⁻³⁴ J.s * 1,182.10¹⁵ s⁻¹ ≈ 7,837.10⁻¹⁹ J.",
          "Étape 3 : Convertir cette énergie en électronvolts : E(eV) = E(J) / (1,602.10⁻¹⁹ J/eV) = 7,837.10⁻¹⁹ / 1,602.10⁻¹⁹ ≈ 4,89 eV. (Vérification directe : E = 1240 / 253,7 ≈ 4,89 eV).",
          "Étape 4 : Calculer la quantité de mouvement du photon : p = E / c = 7,837.10⁻¹⁹ J / (3,00.10⁸ m/s) ≈ 2,61.10⁻²⁷ kg.m/s. (Ou p = h / lambda = 6,63.10⁻³⁴ / 253,7.10⁻⁹ ≈ 2,61.10⁻²⁷ kg.m/s)."
        ],
        "conclusion": "Chaque photon de cette raie UV transporte un quantum d'énergie de 4,89 eV et une quantité de mouvement p = 2,61.10⁻²⁷ kg.m/s."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau synoptique des domaines du spectre électromagnétique et énergie des photons",
        "tableData": {
          "headers": [
            "Domaine d'ondes",
            "Longueur d'onde typique (lambda)",
            "Fréquence typique (nu)",
            "Énergie du photon (E)",
            "Effet principal sur la matière"
          ],
          "rows": [
            [
              "Ondes radio / Télécom",
              "> 1 mm à 100 km",
              "< 300 GHz",
              "< 1,2 meV (micro-eV)",
              "Oscillation collective des électrons de conduction"
            ],
            [
              "Infrarouge (IR)",
              "780 nm à 1 mm",
              "300 GHz à 385 THz",
              "1,2 meV à 1,6 eV",
              "Vibrations et rotations des liaisons moléculaires (chaleur)"
            ],
            [
              "Lumière visible",
              "400 nm à 780 nm",
              "385 THz à 750 THz",
              "1,6 eV à 3,1 eV",
              "Transitions électroniques externes (vision, photosynthèse)"
            ],
            [
              "Ultraviolet (UV)",
              "10 nm à 400 nm",
              "750 THz à 30 PHz",
              "3,1 eV à 124 eV",
              "Rupture de liaisons chimiques, ionisation superficielle"
            ],
            [
              "Rayons X",
              "0,01 nm à 10 nm",
              "30 PHz à 30 EHz",
              "124 eV à 124 keV",
              "Ionisation profonde des atomes, radiographie médicale"
            ],
            [
              "Rayons gamma (γ)",
              "< 0,01 nm (< 10 pm)",
              "> 30 EHz",
              "> 124 keV à plusieurs MeV",
              "Réactions et désexcitations au cœur des noyaux atomiques"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le quantum d'énergie et la constante de Planck h",
          "stepTheme": "Théorie des quanta",
          "stepBadge": "Constante fondamentale",
          "paragraphText": "En 1900, Max Planck démontre qu'un oscillateur microscopique ne peut échanger de l'énergie avec le champ de rayonnement que par multiples entiers d'une quantité minimale indivisible, le quantum d'énergie : ΔE = h.nu. La constante de proportionnalité h est la constante de Planck, l'une des constantes universelles fondamentales de la physique : h ≈ 6,62607.10⁻³⁴ J.s. Cette quantification brise le paradigme de la physique continue classique.",
          "exercise": {
            "id": "phys_tle_cd_14_p2_s1_qcm",
            "type": "mcq",
            "prompt": "Quelle est la dimension physique exacte de la constante de Planck h dans le Système International d'unités ?",
            "options": [
              "Une force (N)",
              "Une énergie (J)",
              "Une action (Énergie × Temps, soit kg.m².s⁻¹)",
              "Une puissance (W)"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'unité de h est le Joule-seconde (J.s). Sachant que 1 J = 1 kg.m².s⁻², on a [h] = kg.m².s⁻¹, ce qui correspond dimensionnellement à une 'action' en mécanique analytique (ou à un moment cinétique angulaire)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Caractéristiques physiques invariantes du photon",
          "stepTheme": "Propriétés du photon",
          "stepBadge": "Particule de lumière",
          "paragraphText": "Le photon est le boson médiateur de l'interaction électromagnétique. Ses propriétés fondamentales sont : 1. Masse au repos rigoureusement nulle : m_0 = 0. 2. Charge électrique nulle : q = 0. 3. Vitesse de propagation invariable dans le vide, égale à la constante c ≈ 3,00.10⁸ m/s dans tous les référentiels galiléens. 4. Spin entier s = 1 (boson). 5. Énergie strictement proportionnelle à sa fréquence : E = h.nu = h.c / lambda.",
          "exercise": {
            "id": "phys_tle_cd_14_p2_s2_qcm",
            "type": "mcq",
            "prompt": "Lorsqu'un faisceau de lumière monochromatique passe du vide dans un bloc de verre d'indice de réfraction n = 1,5, qu'advient-il de l'énergie E = h.nu d'un photon individuel ?",
            "options": [
              "L'énergie du photon diminue d'un facteur 1,5",
              "L'énergie du photon augmente d'un facteur 1,5",
              "L'énergie du photon reste strictement inchangée car sa fréquence nu est invariante lors d'un changement de milieu",
              "L'énergie du photon s'annule dans le verre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Lors de la réfraction dans un milieu transparent, la vitesse diminue (v = c/n) et la longueur d'onde diminue (lambda' = lambda/n), mais la fréquence nu temporelle reste rigoureusement invariante ! Par conséquent, l'énergie du photon E = h.nu demeure rigoureusement constante."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Règle de conversion pratique E(eV) = 1240 / lambda(nm)",
          "stepTheme": "Calcul rapide",
          "stepBadge": "Formule pratique",
          "paragraphText": "En calculs d'examen, le produit h.c exprimé en eV.nm est un raccourci précieux : h.c = (6,626.10⁻³⁴ J.s * 2,998.10⁸ m/s) / (1,602.10⁻¹⁹ J/eV) ≈ 1,2398.10⁻⁶ eV.m ≈ 1240 eV.nm. Par conséquent, pour toute radiation de longueur d'onde lambda exprimée en nanomètres (nm), l'énergie du photon en électronvolts (eV) s'obtient instantanément par la formule : E(eV) ≈ 1240 / lambda(nm). Réciproquement, lambda(nm) ≈ 1240 / E(eV).",
          "exercise": {
            "id": "phys_tle_cd_14_p2_s3_qcm",
            "type": "mcq",
            "prompt": "Quelle est la longueur d'onde approximative d'un photon dont l'énergie vaut E = 3,10 eV ?",
            "options": [
              "200 nm",
              "400 nm",
              "620 nm",
              "800 nm"
            ],
            "correctAnswerIndex": 1,
            "explanation": "lambda(nm) ≈ 1240 / E(eV) = 1240 / 3,10 = 400 nm. Cela correspond à la limite violette du spectre visible."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Quantité de mouvement et pression de radiation du photon",
          "stepTheme": "Impulsion du photon",
          "stepBadge": "Relativité",
          "paragraphText": "D'après la relation relativiste générale d'Einstein liant l'énergie, la masse et la quantité de mouvement : E² = p².c² + m_0².c⁴. Pour un photon dont la masse au repos est nulle (m_0 = 0), cette relation se simplifie en E = p.c. On en déduit que le photon, bien que dépourvu de masse matérielle, possède une quantité de mouvement (impulsion) réelle non nulle : p = E / c = h.nu / c = h / lambda. Lorsqu'un faisceau de photons frappe une surface et est réfléchi ou absorbé, il lui transfère de l'impulsion et exerce une force mécanique macroscopique appelée pression de radiation (principe des voiles solaires spatiales).",
          "exercise": {
            "id": "phys_tle_cd_14_p2_s4_qcm",
            "type": "mcq",
            "prompt": "Un photon de longueur d'onde lambda est réfléchi perpendiculairement à 180° par un miroir parfait. Quelle est la quantité de mouvement totale cédée au miroir par ce photon ?",
            "options": [
              "0",
              "h / lambda",
              "2 h / lambda",
              "h.c / lambda"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'impulsion initiale du photon est p_i = +h/lambda, et son impulsion finale après réflexion élastique à 180° est p_f = -h/lambda. La variation d'impulsion du photon est Δp = p_f - p_i = -2.h/lambda. Par conservation de la quantité de mouvement totale, le miroir reçoit une impulsion opposée égale à +2.h/lambda."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Piège entre photon et onde : la dualité onde-corpuscule",
          "stepTheme": "Dualité onde-corpuscule",
          "stepBadge": "Attention piège",
          "paragraphText": "Il ne faut jamais considérer le photon comme une 'petite bille matérielle classique' se déplaçant en ligne droite avec une trajectoire définie. La lumière présente une double nature, formulée par Louis de Broglie : le modèle ondulatoire est indispensable pour décrire la propagation de la lumière dans l'espace (phénomènes continus d'interférences et de diffraction), tandis que le modèle corpusculaire du photon est obligatoire pour expliquer l'émission, l'absorption et les échanges localisés d'énergie avec la matière (effet photoélectrique, effet Compton). Les deux modèles sont complémentaires et non contradictoires.",
          "exercise": {
            "id": "phys_tle_cd_14_p2_s5_qcm",
            "type": "mcq",
            "prompt": "Parmi les phénomènes suivants, lequel nécessite EXCLUSIVEMENT le modèle corpusculaire du photon pour être expliqué ?",
            "options": [
              "La diffraction de la lumière par une fente fine",
              "Les franges d'interférences des fentes d'Young",
              "L'effet photoélectrique et les spectres de raies atomiques",
              "La dispersion de la lumière blanche par un prisme de verre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La diffraction, les interférences et la dispersion s'expliquent parfaitement par la théorie ondulatoire de Maxwell. En revanche, l'effet photoélectrique et les spectres discontinus de raies d'émission/absorption exigent formellement le modèle quantique du photon transportant un quantum d'énergie h.nu."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Effet Compton : collision élastique photon-électron",
          "stepTheme": "Effet Compton",
          "stepBadge": "Preuve corpusculaire",
          "paragraphText": "En 1923, Arthur Compton bombarde une cible de graphite avec des rayons X de haute énergie et observe que les rayons diffusés ont une longueur d'onde lambda' supérieure à celle du faisceau incident lambda : lambda' > lambda. Ce phénomène s'interprète comme un choc élastique relativiste entre un photon incident (de quantité de mouvement p = h/lambda) et un électron au repos. Le photon cède une partie de son énergie cinétique à l'électron : son énergie diminue (E' < E), donc sa fréquence diminue (nu' < nu) et sa longueur d'onde augmente selon la formule de Compton : lambda' - lambda = (h / (m_e.c)) * (1 - cos theta).",
          "exercise": {
            "id": "phys_tle_cd_14_p2_s6_qcm",
            "type": "mcq",
            "prompt": "Dans l'effet Compton, que représente la grandeur constante lambda_C = h / (m_e.c) ≈ 2,43.10⁻¹² m ?",
            "options": [
              "La longueur d'onde de Bohr de l'atome d'hydrogène",
              "La longueur d'onde de Compton de l'électron",
              "Le rayon classique du proton",
              "La longueur d'onde seuil du silicium"
            ],
            "correctAnswerIndex": 1,
            "explanation": "lambda_C = h / (m_e.c) est appelée la longueur d'onde de Compton de l'électron. Elle fixe l'échelle des variations de longueur d'onde lors d'une diffusion inélastique photon-électron."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Bilan énergétique d'Einstein sur un photoélectron",
          "stepTheme": "Synthèse énergétique",
          "stepBadge": "Équation d'Einstein",
          "paragraphText": "Lorsqu'un photon d'énergie E = h.nu supérieur à W₀ frappe un métal, il disparaît en transmettant l'intégralité de son énergie à un électron unique. Une part égale à W₀ est consommée pour vaincre l'attraction du réseau métallique (travail d'extraction), et le surplus résiduel est intégralement converti en énergie cinétique de translation de l'électron : h.nu = W₀ + E_c <=> E_c = h.nu - W₀ = h.c/lambda - W₀. Si l'électron provient des couches plus profondes, il subit des chocs supplémentaires et sort avec une énergie cinétique inférieure : E_c <= E_{c,max}.",
          "exercise": {
            "id": "phys_tle_cd_14_p2_s7_qcm",
            "type": "mcq",
            "prompt": "Un photon d'énergie 4,50 eV heurte un électron superficiel d'une plaque de zinc dont le travail d'extraction est W₀ = 3,60 eV. Quelle est la vitesse maximale de sortie de l'électron éjecté ? (m_e = 9,11.10⁻³¹ kg ; 1 eV = 1,60.10⁻¹⁹ J)",
            "options": [
              "2,8.10⁵ m/s",
              "5,6.10⁵ m/s",
              "1,2.10⁶ m/s",
              "3,0.10⁸ m/s"
            ],
            "correctAnswerIndex": 1,
            "explanation": "E_{c,max} = E_photon - W₀ = 4,50 eV - 3,60 eV = 0,90 eV = 0,90 * 1,602.10⁻¹⁹ J ≈ 1,442.10⁻¹⁹ J. Comme E_c = (1/2)*m_e*v², on a v = sqrt(2 * E_{c,max} / m_e) = sqrt(2 * 1,442.10⁻¹⁹ / 9,11.10⁻³¹) = sqrt(3,165.10¹¹) ≈ 5,62.10⁵ m/s."
          }
        }
      ],
      "exercises": [
        {
          "id": "phys_tle_cd_14_p2_s1_qcm",
          "type": "mcq",
          "prompt": "Quelle est la dimension physique exacte de la constante de Planck h dans le Système International d'unités ?",
          "options": [
            "Une force (N)",
            "Une énergie (J)",
            "Une action (Énergie × Temps, soit kg.m².s⁻¹)",
            "Une puissance (W)"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'unité de h est le Joule-seconde (J.s). Sachant que 1 J = 1 kg.m².s⁻², on a [h] = kg.m².s⁻¹, ce qui correspond dimensionnellement à une 'action' en mécanique analytique (ou à un moment cinétique angulaire)."
        },
        {
          "id": "phys_tle_cd_14_p2_s2_qcm",
          "type": "mcq",
          "prompt": "Lorsqu'un faisceau de lumière monochromatique passe du vide dans un bloc de verre d'indice de réfraction n = 1,5, qu'advient-il de l'énergie E = h.nu d'un photon individuel ?",
          "options": [
            "L'énergie du photon diminue d'un facteur 1,5",
            "L'énergie du photon augmente d'un facteur 1,5",
            "L'énergie du photon reste strictement inchangée car sa fréquence nu est invariante lors d'un changement de milieu",
            "L'énergie du photon s'annule dans le verre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Lors de la réfraction dans un milieu transparent, la vitesse diminue (v = c/n) et la longueur d'onde diminue (lambda' = lambda/n), mais la fréquence nu temporelle reste rigoureusement invariante ! Par conséquent, l'énergie du photon E = h.nu demeure rigoureusement constante."
        },
        {
          "id": "phys_tle_cd_14_p2_s3_qcm",
          "type": "mcq",
          "prompt": "Quelle est la longueur d'onde approximative d'un photon dont l'énergie vaut E = 3,10 eV ?",
          "options": [
            "200 nm",
            "400 nm",
            "620 nm",
            "800 nm"
          ],
          "correctAnswerIndex": 1,
          "explanation": "lambda(nm) ≈ 1240 / E(eV) = 1240 / 3,10 = 400 nm. Cela correspond à la limite violette du spectre visible."
        },
        {
          "id": "phys_tle_cd_14_p2_s4_qcm",
          "type": "mcq",
          "prompt": "Un photon de longueur d'onde lambda est réfléchi perpendiculairement à 180° par un miroir parfait. Quelle est la quantité de mouvement totale cédée au miroir par ce photon ?",
          "options": [
            "0",
            "h / lambda",
            "2 h / lambda",
            "h.c / lambda"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'impulsion initiale du photon est p_i = +h/lambda, et son impulsion finale après réflexion élastique à 180° est p_f = -h/lambda. La variation d'impulsion du photon est Δp = p_f - p_i = -2.h/lambda. Par conservation de la quantité de mouvement totale, le miroir reçoit une impulsion opposée égale à +2.h/lambda."
        },
        {
          "id": "phys_tle_cd_14_p2_s5_qcm",
          "type": "mcq",
          "prompt": "Parmi les phénomènes suivants, lequel nécessite EXCLUSIVEMENT le modèle corpusculaire du photon pour être expliqué ?",
          "options": [
            "La diffraction de la lumière par une fente fine",
            "Les franges d'interférences des fentes d'Young",
            "L'effet photoélectrique et les spectres de raies atomiques",
            "La dispersion de la lumière blanche par un prisme de verre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La diffraction, les interférences et la dispersion s'expliquent parfaitement par la théorie ondulatoire de Maxwell. En revanche, l'effet photoélectrique et les spectres discontinus de raies d'émission/absorption exigent formellement le modèle quantique du photon transportant un quantum d'énergie h.nu."
        },
        {
          "id": "phys_tle_cd_14_p2_s6_qcm",
          "type": "mcq",
          "prompt": "Dans l'effet Compton, que représente la grandeur constante lambda_C = h / (m_e.c) ≈ 2,43.10⁻¹² m ?",
          "options": [
            "La longueur d'onde de Bohr de l'atome d'hydrogène",
            "La longueur d'onde de Compton de l'électron",
            "Le rayon classique du proton",
            "La longueur d'onde seuil du silicium"
          ],
          "correctAnswerIndex": 1,
          "explanation": "lambda_C = h / (m_e.c) est appelée la longueur d'onde de Compton de l'électron. Elle fixe l'échelle des variations de longueur d'onde lors d'une diffusion inélastique photon-électron."
        },
        {
          "id": "phys_tle_cd_14_p2_s7_qcm",
          "type": "mcq",
          "prompt": "Un photon d'énergie 4,50 eV heurte un électron superficiel d'une plaque de zinc dont le travail d'extraction est W₀ = 3,60 eV. Quelle est la vitesse maximale de sortie de l'électron éjecté ? (m_e = 9,11.10⁻³¹ kg ; 1 eV = 1,60.10⁻¹⁹ J)",
          "options": [
            "2,8.10⁵ m/s",
            "5,6.10⁵ m/s",
            "1,2.10⁶ m/s",
            "3,0.10⁸ m/s"
          ],
          "correctAnswerIndex": 1,
          "explanation": "E_{c,max} = E_photon - W₀ = 4,50 eV - 3,60 eV = 0,90 eV = 0,90 * 1,602.10⁻¹⁹ J ≈ 1,442.10⁻¹⁹ J. Comme E_c = (1/2)*m_e*v², on a v = sqrt(2 * E_{c,max} / m_e) = sqrt(2 * 1,442.10⁻¹⁹ / 9,11.10⁻³¹) = sqrt(3,165.10¹¹) ≈ 5,62.10⁵ m/s."
        }
      ]
    },
    {
      "id": "pt3_quantification_energie_spectres_raies",
      "order": 3,
      "title": "Quantification de l'énergie atomique et spectres de raies",
      "summary": "Postulats de Niels Bohr, spectres d'émission et d'absorption discontinus, condition de fréquence de Bohr Delta E = h.nu et caractère unique du spectre pour chaque élément chimique.",
      "conceptExplanation": "Contrairement à la physique classique où l'énergie d'un système peut varier de manière continue, Niels Bohr postule en 1913 que l'énergie d'un atome est quantifiée : un atome ne peut exister que dans des états stationnaires discrets, caractérisés chacun par un niveau d'énergie bien déterminé E_n. Dans un état stationnaire, l'atome ne rayonne aucune énergie. L'atome ne peut changer d'état que par une transition brusque (saut quantique) entre deux niveaux permis E_p et E_n : 1. Émission : en passant d'un niveau supérieur E_p à un niveau inférieur E_n (E_p > E_n), l'atome perd de l'énergie et émet un photon unique de fréquence nu telle que E_p - E_n = h.nu = h.c / lambda. 2. Absorption : l'atome ne peut absorber un photon de fréquence nu que si son énergie h.nu correspond EXACTEMENT à la différence d'énergie entre son état actuel E_n et un état excité supérieur E_p : h.nu = E_p - E_n. Cela explique pourquoi les spectres de gaz atomiques ne sont pas continus mais formés de raies lumineuses ou sombres discrètes.",
      "keyRule": "Condition de Bohr : |Delta E| = |E_p - E_n| = h.nu = h.c / lambda. Un atome n'émet ou n'absorbe que les longueurs d'onde qui correspondent aux écarts stricts entre ses niveaux quantiques.",
      "formulas": [
        {
          "name": "Relation 1",
          "formula": "\\Delta E = E_{\\text{final}} - E_{\\text{initial}}"
        },
        {
          "name": "Relation 2",
          "formula": "|\\Delta E| = h \\nu = \\frac{h c}{\\lambda}"
        },
        {
          "name": "Relation 3",
          "formula": "\\nu = \\frac{|E_p - E_n|}{h}"
        },
        {
          "name": "Relation 4",
          "formula": "\\lambda = \\frac{h c}{|E_p - E_n|}"
        }
      ],
      "workedExample": {
        "title": "Identification de la longueur d'onde émise lors d'une transition quantique",
        "statement": "Dans un atome de sodium, un électron passe d'un niveau excité d'énergie E₂ = -3,03 eV à son niveau fondamental E₁ = -5,14 eV. 1. La transition correspond-elle à une émission ou à une absorption ? 2. Calculer en Joules le quantum d'énergie échangé. 3. Déterminer la longueur d'onde lambda de la raie spectrale correspondante dans le vide. Préciser sa couleur.",
        "methodSteps": [
          "Étape 1 : Le niveau final (E₁ = -5,14 eV) est d'énergie inférieure au niveau initial (E₂ = -3,03 eV). L'atome perd de l'énergie : il y a donc émission spontanée d'un photon.",
          "Étape 2 : Calculer la variation d'énergie en valeur absolue : |ΔE| = |E₂ - E₁| = |-3,03 - (-5,14)| = 2,11 eV.",
          "Étape 3 : Convertir cette énergie en Joules : |ΔE| = 2,11 * 1,602.10⁻¹⁹ J ≈ 3,38.10⁻¹⁹ J.",
          "Étape 4 : Déterminer la longueur d'onde émise : lambda = h.c / |ΔE| = (6,63.10⁻³⁴ * 3,00.10⁸) / (3,38.10⁻¹⁹) ≈ 5,89.10⁻⁷ m = 589 nm.",
          "Étape 5 : Identifier la couleur : Une longueur d'onde de 589 nm appartient au domaine visible et correspond au fameux doublet jaune caractéristique des lampes à vapeur de sodium."
        ],
        "conclusion": "La désexcitation de l'atome de sodium s'accompagne de l'émission d'un photon de longueur d'onde lambda = 589 nm, générant la raie jaune du sodium."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Comparaison entre spectres continus, spectres de raies d'émission et d'absorption",
        "tableData": {
          "headers": [
            "Type de spectre",
            "Origine physique",
            "Aspect visuel à l'écran",
            "Information fournie"
          ],
          "rows": [
            [
              "Spectre continu d'émission",
              "Corps dense chaud (solide, liquide, gaz sous très haute pression)",
              "Bande lumineuse continue sans interruption de couleur (arc-en-ciel du rouge au violet)",
              "Donne la température du corps émetteur (loi de Wien)"
            ],
            [
              "Spectre de raies d'émission",
              "Gaz atomique raréfié excité par décharge électrique ou chaleur",
              "Fond noir strié de fines raies lumineuses colorées bien séparées",
              "Signature caractéristique infalsifiable de l'élément chimique émetteur"
            ],
            [
              "Spectre de raies d'absorption",
              "Lumière blanche continue traversant un gaz atomique froid",
              "Fond coloré continu haché de raies noires étroites",
              "Les raies noires correspondent exactement aux longueurs d'onde que le gaz peut émettre (loi de Kirchhoff)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Spectres de raies d'émission et d'absorption des gaz",
          "stepTheme": "Spectroscopie",
          "stepBadge": "Définition",
          "paragraphText": "Lorsqu'on excite un gaz atomique raréfié (sous basse pression) par une décharge électrique, la lumière émise et décomposée par un prisme ou un réseau de diffraction présente un spectre de raies d'émission : une série de raies fines colorées sur fond noir. Si l'on fait traverser ce même gaz froid par de la lumière blanche continue, le spectre obtenu est un spectre de raies d'absorption : un fond continu traversé par des raies noires. Les raies noires d'absorption occupent rigoureusement les mêmes positions spectrales que les raies d'émission du même gaz : un gaz ne peut absorber que les radiations qu'il est capable d'émettre (loi de Kirchhoff).",
          "exercise": {
            "id": "phys_tle_cd_14_p3_s1_qcm",
            "type": "mcq",
            "prompt": "Pourquoi le spectre émis par un filament incandescent d'ampoule est-il continu alors que celui d'un tube à vapeur de néon est un spectre de raies discontinu ?",
            "options": [
              "Parce que le néon est un gaz froid alors que le filament est chaud",
              "Parce que dans le solide dense, les atomes interagissent fortement et élargissent les niveaux d'énergie en bandes continues, tandis que dans le gaz raréfié, les atomes isolés conservent des niveaux d'énergie quantifiés strictement discrets",
              "Parce que le filament n'est pas constitué d'atomes",
              "Parce que la lumière du néon ne contient aucun photon"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans un gaz atomique à basse pression, les atomes sont indépendants : les transitions s'opèrent entre niveaux d'énergie discrets et bien isolés, créant des raies nettes. Dans un solide chaud condensé, le couplage entre milliards d'atomes contigus transforme les niveaux d'énergie discrets en bandes d'énergie quasi-continues, produisant un spectre d'émission thermique continu."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les postulats du modèle atomique de Niels Bohr (1913)",
          "stepTheme": "Modèle de Bohr",
          "stepBadge": "Postulats de Bohr",
          "paragraphText": "Pour surmonter l'instabilité de l'atome de Rutherford (où un électron classique rayonnant perdrait son énergie en une fraction de microseconde et s'écraserait sur le noyau), Niels Bohr pose deux postulats fondamentaux : 1. Postulat des orbites stationnaires : l'électron ne peut circuler que sur certaines orbites privilégiées non rayonnantes pour lesquelles le moment cinétique orbital est quantifié : L = n.(h / 2pi), avec n entier naturel non nul (n = 1, 2, 3...). 2. Postulat des transitions radiatives : l'atome n'émet ou n'absorbe de l'énergie lumineuse que lors du passage discontinu de l'électron d'une orbite à une autre, avec |Delta E| = h.nu.",
          "exercise": {
            "id": "phys_tle_cd_14_p3_s2_qcm",
            "type": "mcq",
            "prompt": "Dans le modèle de Bohr, quel paramètre quantique est contraint d'être un multiple entier de la constante de Dirac hbar = h / (2pi) ?",
            "options": [
              "La masse du noyau",
              "Le moment cinétique orbital de l'électron",
              "La vitesse de la lumière",
              "La charge de l'électron"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le premier postulat de Bohr stipule la quantification du moment cinétique orbital de l'électron : L = m_e * v * r = n * (h / 2pi) = n * hbar, où n est le nombre quantique principal (n in N*)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Condition de fréquence de Bohr et conservation de l'énergie",
          "stepTheme": "Transitions quantiques",
          "stepBadge": "Condition de Bohr",
          "paragraphText": "La conservation de l'énergie lors d'un saut quantique s'exprime rigoureusement par : E_initial = E_final + E_photon. Si l'atome passe d'un niveau excité supérieur E_p à un niveau inférieur E_n : E_p = E_n + h.nu => h.nu = E_p - E_n. Si l'atome est initialement dans le niveau E_n et absorbe un photon d'énergie h.nu : E_n + h.nu = E_p => E_p - E_n = h.nu. La fréquence du rayonnement est donc strictement proportionnelle à la différence entre les deux niveaux quantiques concernés : nu = |E_p - E_n| / h.",
          "exercise": {
            "id": "phys_tle_cd_14_p3_s3_qcm",
            "type": "mcq",
            "prompt": "Un atome possède trois niveaux d'énergie : E₁ = -10,0 eV (fondamental), E₂ = -6,0 eV et E₃ = -2,0 eV. Combien de raies d'émission distinctes cet atome peut-il émettre lors de sa désexcitation ?",
            "options": [
              "2 raies",
              "3 raies",
              "4 raies",
              "6 raies"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les transitions possibles vers un niveau d'énergie plus bas sont : de E₃ vers E₂ (ΔE = -2,0 - (-6,0) = 4,0 eV) ; de E₂ vers E₁ (ΔE = -6,0 - (-10,0) = 4,0 eV) ; et de E₃ vers E₁ (ΔE = -2,0 - (-10,0) = 8,0 eV). Deux transitions ont la même énergie (4,0 eV), ce qui donne 2 valeurs d'énergies différentes (4,0 eV et 8,0 eV), correspondant à 2 raies spectrales observables distinctes. (S'il n'y avait pas de dégénérescence d'écart, le nombre théorique de paires de niveaux parmi 3 serait C(3,2) = 3 raies)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Piège sur le signe des énergies des états liés",
          "stepTheme": "Convention d'énergie",
          "stepBadge": "Attention piège",
          "paragraphText": "Par convention internationale universelle en physique quantique, l'énergie d'un électron infiniment éloigné du noyau et au repos (état ionisé) est choisie comme référence nulle : E_infini = 0 eV. Comme il faut fournir de l'énergie à l'atome pour en extraire un électron lié, tous les états liés d'un atome (état fondamental et états excités) possèdent des énergies strictement NÉGATIVES : E_n < 0. L'état le plus stable (fondamental) possède l'énergie la plus basse (la valeur la plus négative).",
          "exercise": {
            "id": "phys_tle_cd_14_p3_s4_qcm",
            "type": "mcq",
            "prompt": "Pour un atome donné, on a E₁ = -13,6 eV et E₂ = -3,4 eV. Quel niveau d'énergie est le plus élevé sur l'échelle énergétique ?",
            "options": [
              "Le niveau E₁ car sa valeur absolue 13,6 est plus grande",
              "Le niveau E₂ car -3,4 eV > -13,6 eV",
              "Les deux niveaux ont la même énergie",
              "L'énergie ne peut pas être négative"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sur l'axe des réels orienté vers le haut, -3,4 eV est supérieur à -13,6 eV (-3,4 > -13,6). Le niveau E₂ est donc un niveau excité situé plus haut en énergie que l'état fondamental E₁."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Lecture et tracé d'un diagramme de niveaux d'énergie",
          "stepTheme": "Diagramme de Grotrian",
          "stepBadge": "Méthode graphique",
          "paragraphText": "Un diagramme de niveaux d'énergie représente sur un axe vertical orienté vers le haut les valeurs des énergies permises E_n en eV. L'état fondamental n = 1 est tracé tout en bas. Les états excités n = 2, 3... sont des traits horizontaux horizontaux parallèles qui se resserrent au fur et à mesure que n augmente, jusqu'à la limite de continuum E = 0 (état ionisé). Une flèche verticale vers le bas symbolise une émission spontanée d'un photon, tandis qu'une flèche verticale vers le haut symbolise une absorption stimulée.",
          "exercise": {
            "id": "phys_tle_cd_14_p3_s5_qcm",
            "type": "mcq",
            "prompt": "Sur un diagramme d'énergie, une transition représentée par une flèche orientée de n = 4 vers n = 2 correspond à :",
            "options": [
              "L'absorption d'un photon d'énergie E₄ - E₂",
              "L'émission d'un photon d'énergie E₄ - E₂",
              "L'ionisation complète de l'atome",
              "La capture d'un neutron"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La flèche pointant vers le bas indique que l'atome descend d'un niveau d'énergie plus élevé (n = 4) vers un niveau plus bas (n = 2). La différence d'énergie perdue par l'atome est libérée sous forme d'un photon émis : c'est une désexcitation radiative."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Spectroscopie astronomique et composition stellaire",
          "stepTheme": "Astrophysique",
          "stepBadge": "Application astrophysique",
          "paragraphText": "Les raies spectrales constituent une véritable 'carte d'identité' atomique. En analysant la lumière issue des étoiles à travers un spectrographe, les astrophysiciens observent des raies d'absorption sombres (raies de Fraunhofer pour le Soleil). En identifiant les longueurs d'onde de ces raies, on détermine avec une précision absolue la composition chimique de l'atmosphère stellaire (hydrogène, hélium, métaux) sans jamais avoir à s'y déplacer. C'est d'ailleurs ainsi que l'hélium a été découvert dans le Soleil en 1868 avant d'être identifié sur Terre.",
          "exercise": {
            "id": "phys_tle_cd_14_p3_s6_qcm",
            "type": "mcq",
            "prompt": "Dans le spectre de la lumière solaire reçu sur Terre, pourquoi observe-t-on de fines raies noires superposées au spectre continu ?",
            "options": [
              "Parce que l'espace interstellaire absorbe toute la lumière",
              "Parce que les gaz plus froids de la chromosphère solaire et de l'atmosphère terrestre absorbent sélectivement les photons aux longueurs d'onde de leurs transitions atomiques",
              "Parce que le Soleil s'éteint périodiquement pendant des microsecondes",
              "Parce que le prisme utilisé absorbe certaines couleurs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le cœur du Soleil émet un spectre thermique continu. En traversant les couches gazeuses externes plus froides du Soleil (et l'atmosphère terrestre), les atomes de ces gaz absorbent spécifiquement les longueurs d'onde correspondant à leurs sauts quantiques, creusant les raies noires d'absorption de Fraunhofer."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Calcul du doublet du sodium et principe des lampes d'éclairage public",
          "stepTheme": "Exemple concret",
          "stepBadge": "Éclairage public",
          "paragraphText": "Les lampes à vapeur de sodium qui éclairent les autoroutes et ponts routiers émettent une lumière jaune très caractéristique dominée par deux raies extrêmement proches situées à 589,0 nm et 589,6 nm. Cette lumière monochromatique offre une pénétration remarquable dans le brouillard et correspond à la sensibilité maximale de l'œil humain, réduisant la consommation électrique pour un flux lumineux perçu maximal.",
          "exercise": {
            "id": "phys_tle_cd_14_p3_s7_qcm",
            "type": "mcq",
            "prompt": "Quel est l'écart énergétique Δ(ΔE) entre les deux transitions électroniques produisant le doublet du sodium à 589,0 nm et 589,6 nm ? (h.c ≈ 1240 eV.nm)",
            "options": [
              "0,0021 eV (2,1 meV)",
              "0,21 eV",
              "2,1 eV",
              "12,4 eV"
            ],
            "correctAnswerIndex": 0,
            "explanation": "E₁ = 1240 / 589,0 ≈ 2,10526 eV et E₂ = 1240 / 589,6 ≈ 2,10312 eV. L'écart est ΔE = 2,10526 - 2,10312 ≈ 0,00214 eV = 2,1 meV. Cet infime décalage provient du couplage spin-orbite de l'électron externe du sodium."
          }
        }
      ],
      "exercises": [
        {
          "id": "phys_tle_cd_14_p3_s1_qcm",
          "type": "mcq",
          "prompt": "Pourquoi le spectre émis par un filament incandescent d'ampoule est-il continu alors que celui d'un tube à vapeur de néon est un spectre de raies discontinu ?",
          "options": [
            "Parce que le néon est un gaz froid alors que le filament est chaud",
            "Parce que dans le solide dense, les atomes interagissent fortement et élargissent les niveaux d'énergie en bandes continues, tandis que dans le gaz raréfié, les atomes isolés conservent des niveaux d'énergie quantifiés strictement discrets",
            "Parce que le filament n'est pas constitué d'atomes",
            "Parce que la lumière du néon ne contient aucun photon"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans un gaz atomique à basse pression, les atomes sont indépendants : les transitions s'opèrent entre niveaux d'énergie discrets et bien isolés, créant des raies nettes. Dans un solide chaud condensé, le couplage entre milliards d'atomes contigus transforme les niveaux d'énergie discrets en bandes d'énergie quasi-continues, produisant un spectre d'émission thermique continu."
        },
        {
          "id": "phys_tle_cd_14_p3_s2_qcm",
          "type": "mcq",
          "prompt": "Dans le modèle de Bohr, quel paramètre quantique est contraint d'être un multiple entier de la constante de Dirac hbar = h / (2pi) ?",
          "options": [
            "La masse du noyau",
            "Le moment cinétique orbital de l'électron",
            "La vitesse de la lumière",
            "La charge de l'électron"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le premier postulat de Bohr stipule la quantification du moment cinétique orbital de l'électron : L = m_e * v * r = n * (h / 2pi) = n * hbar, où n est le nombre quantique principal (n in N*)."
        },
        {
          "id": "phys_tle_cd_14_p3_s3_qcm",
          "type": "mcq",
          "prompt": "Un atome possède trois niveaux d'énergie : E₁ = -10,0 eV (fondamental), E₂ = -6,0 eV et E₃ = -2,0 eV. Combien de raies d'émission distinctes cet atome peut-il émettre lors de sa désexcitation ?",
          "options": [
            "2 raies",
            "3 raies",
            "4 raies",
            "6 raies"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les transitions possibles vers un niveau d'énergie plus bas sont : de E₃ vers E₂ (ΔE = -2,0 - (-6,0) = 4,0 eV) ; de E₂ vers E₁ (ΔE = -6,0 - (-10,0) = 4,0 eV) ; et de E₃ vers E₁ (ΔE = -2,0 - (-10,0) = 8,0 eV). Deux transitions ont la même énergie (4,0 eV), ce qui donne 2 valeurs d'énergies différentes (4,0 eV et 8,0 eV), correspondant à 2 raies spectrales observables distinctes. (S'il n'y avait pas de dégénérescence d'écart, le nombre théorique de paires de niveaux parmi 3 serait C(3,2) = 3 raies)."
        },
        {
          "id": "phys_tle_cd_14_p3_s4_qcm",
          "type": "mcq",
          "prompt": "Pour un atome donné, on a E₁ = -13,6 eV et E₂ = -3,4 eV. Quel niveau d'énergie est le plus élevé sur l'échelle énergétique ?",
          "options": [
            "Le niveau E₁ car sa valeur absolue 13,6 est plus grande",
            "Le niveau E₂ car -3,4 eV > -13,6 eV",
            "Les deux niveaux ont la même énergie",
            "L'énergie ne peut pas être négative"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sur l'axe des réels orienté vers le haut, -3,4 eV est supérieur à -13,6 eV (-3,4 > -13,6). Le niveau E₂ est donc un niveau excité situé plus haut en énergie que l'état fondamental E₁."
        },
        {
          "id": "phys_tle_cd_14_p3_s5_qcm",
          "type": "mcq",
          "prompt": "Sur un diagramme d'énergie, une transition représentée par une flèche orientée de n = 4 vers n = 2 correspond à :",
          "options": [
            "L'absorption d'un photon d'énergie E₄ - E₂",
            "L'émission d'un photon d'énergie E₄ - E₂",
            "L'ionisation complète de l'atome",
            "La capture d'un neutron"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La flèche pointant vers le bas indique que l'atome descend d'un niveau d'énergie plus élevé (n = 4) vers un niveau plus bas (n = 2). La différence d'énergie perdue par l'atome est libérée sous forme d'un photon émis : c'est une désexcitation radiative."
        },
        {
          "id": "phys_tle_cd_14_p3_s6_qcm",
          "type": "mcq",
          "prompt": "Dans le spectre de la lumière solaire reçu sur Terre, pourquoi observe-t-on de fines raies noires superposées au spectre continu ?",
          "options": [
            "Parce que l'espace interstellaire absorbe toute la lumière",
            "Parce que les gaz plus froids de la chromosphère solaire et de l'atmosphère terrestre absorbent sélectivement les photons aux longueurs d'onde de leurs transitions atomiques",
            "Parce que le Soleil s'éteint périodiquement pendant des microsecondes",
            "Parce que le prisme utilisé absorbe certaines couleurs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le cœur du Soleil émet un spectre thermique continu. En traversant les couches gazeuses externes plus froides du Soleil (et l'atmosphère terrestre), les atomes de ces gaz absorbent spécifiquement les longueurs d'onde correspondant à leurs sauts quantiques, creusant les raies noires d'absorption de Fraunhofer."
        },
        {
          "id": "phys_tle_cd_14_p3_s7_qcm",
          "type": "mcq",
          "prompt": "Quel est l'écart énergétique Δ(ΔE) entre les deux transitions électroniques produisant le doublet du sodium à 589,0 nm et 589,6 nm ? (h.c ≈ 1240 eV.nm)",
          "options": [
            "0,0021 eV (2,1 meV)",
            "0,21 eV",
            "2,1 eV",
            "12,4 eV"
          ],
          "correctAnswerIndex": 0,
          "explanation": "E₁ = 1240 / 589,0 ≈ 2,10526 eV et E₂ = 1240 / 589,6 ≈ 2,10312 eV. L'écart est ΔE = 2,10526 - 2,10312 ≈ 0,00214 eV = 2,1 meV. Cet infime décalage provient du couplage spin-orbite de l'électron externe du sodium."
        }
      ]
    },
    {
      "id": "pt4_niveaux_energie_hydrogene_ionisation",
      "order": 4,
      "title": "Niveaux d'énergie de l'hydrogène et énergie d'ionisation",
      "summary": "Formule de Bohr En = -13,6 / n² (en eV), état fondamental, états excités, niveau ionisé (continuum E = 0) et énergie d'ionisation de l'atome d'hydrogène.",
      "conceptExplanation": "Pour l'atome d'hydrogène (constitué d'un unique proton et d'un électron), la mécanique quantique établit que l'énergie des niveaux stationnaires est donnée par la formule de Bohr : E_n = -E_0 / n² = -13,6 / n² (avec E_n en électronvolts, eV), où n est le nombre quantique principal (n = 1, 2, 3, 4, ...). Pour n = 1, l'atome est dans son état de plus basse énergie : l'état fondamental, avec E₁ = -13,6 eV. Les états n >= 2 correspondent aux états excités : E₂ = -13,6 / 4 = -3,40 eV ; E₃ = -13,6 / 9 = -1,51 eV ; E₄ = -13,6 / 16 = -0,85 eV ; E₅ = -13,6 / 25 = -0,54 eV ; E₆ = -13,6 / 36 = -0,38 eV. Lorsque n tend vers l'infini (n -> oo), l'énergie tend vers E_oo = 0 eV : l'électron n'est plus lié au noyau, l'atome est ionisé. L'énergie d'ionisation E_i est l'énergie minimale qu'il faut fournir à l'atome d'hydrogène dans son état fondamental pour lui arracher complètement son électron : E_i = E_oo - E₁ = 0 - (-13,6 eV) = +13,6 eV.",
      "keyRule": "Formule des niveaux de l'hydrogène : E_n = -13,6 / n² (en eV). L'énergie d'ionisation depuis l'état fondamental vaut E_i = +13,6 eV (soit 2,18.10⁻¹⁸ J).",
      "formulas": [
        {
          "name": "Relation 1",
          "formula": "E_n = -\\frac{E_0}{n^2} = -\\frac{13{,}6}{n^2}\\text{ eV} \\quad (n \\in \\mathbb{N}^*)"
        },
        {
          "name": "Relation 2",
          "formula": "E_1 = -13{,}6\\text{ eV} \\quad \\text{(état fondamental)}"
        },
        {
          "name": "Relation 3",
          "formula": "E_\\infty = 0\\text{ eV} \\quad \\text{(état ionisé)}"
        },
        {
          "name": "Relation 4",
          "formula": "E_i = E_\\infty - E_1 = +13{,}6\\text{ eV} = 2{,}18 \\times 10^{-18}\\text{ J}"
        },
        {
          "name": "Relation 5",
          "formula": "E_{i,n} = E_\\infty - E_n = -E_n = +\\frac{13{,}6}{n^2}\\text{ eV} \\quad \\text{(ionisation depuis le niveau } n\\text{)}"
        }
      ],
      "workedExample": {
        "title": "Calcul des niveaux excités et de l'énergie d'ionisation depuis l'état n = 2",
        "statement": "On considère un atome d'hydrogène dans son premier état excité (n = 2). 1. Calculer l'énergie E₂ de ce niveau en eV. 2. Quelle est l'énergie minimale qu'il faut fournir à cet atome pour l'ioniser depuis ce niveau n = 2 ? 3. Calculer la longueur d'onde maximale du photon capable d'ioniser l'hydrogène pris dans cet état n = 2.",
        "methodSteps": [
          "Étape 1 : Calculer l'énergie du niveau n = 2 : E₂ = -13,6 / 2² = -13,6 / 4 = -3,40 eV.",
          "Étape 2 : Déterminer l'énergie d'ionisation depuis ce niveau excité : E_{i,2} = E_oo - E₂ = 0 - (-3,40 eV) = +3,40 eV.",
          "Étape 3 : Convertir cette énergie en Joules : E_{i,2} = 3,40 * 1,602.10⁻¹⁹ J ≈ 5,447.10⁻¹⁹ J.",
          "Étape 4 : Calculer la longueur d'onde maximale correspondante (seuil d'ionisation) : lambda_max = h.c / E_{i,2} = 1240 eV.nm / 3,40 eV ≈ 364,7 nm (radiation UV proche)."
        ],
        "conclusion": "L'énergie nécessaire pour ioniser l'atome d'hydrogène excité au niveau n = 2 n'est que de 3,40 eV, ce qui correspond à un photon de longueur d'onde lambda <= 365 nm."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau récapitulatif des niveaux d'énergie de l'hydrogène et écarts à l'état fondamental",
        "tableData": {
          "headers": [
            "Nombre quantique (n)",
            "État quantique",
            "Énergie E_n (eV)",
            "Écart au fondamental Delta E = E_n - E₁ (eV)",
            "Longueur d'onde d'absorption depuis n=1"
          ],
          "rows": [
            [
              "n = 1",
              "État fondamental",
              "-13,60 eV",
              "0 eV",
              "Sans objet"
            ],
            [
              "n = 2",
              "1er état excité",
              "-3,40 eV",
              "10,20 eV (3/4 E₀)",
              "121,6 nm (Lyman alpha, UV)"
            ],
            [
              "n = 3",
              "2e état excité",
              "-1,51 eV",
              "12,09 eV (8/9 E₀)",
              "102,6 nm (Lyman bêta, UV)"
            ],
            [
              "n = 4",
              "3e état excité",
              "-0,85 eV",
              "12,75 eV (15/16 E₀)",
              "97,3 nm (Lyman gamma, UV)"
            ],
            [
              "n = 5",
              "4e état excité",
              "-0,54 eV",
              "13,06 eV (24/25 E₀)",
              "95,0 nm (Lyman delta, UV)"
            ],
            [
              "n = oo",
              "État ionisé (H⁺ + e⁻)",
              "0,00 eV",
              "13,60 eV (Énergie d'ionisation)",
              "91,2 nm (Limite de Lyman)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Formule de Bohr pour les niveaux d'énergie de l'atome d'hydrogène",
          "stepTheme": "Niveaux d'énergie de Bohr",
          "stepBadge": "Formule clé",
          "paragraphText": "En combinant les lois de la mécanique newtonienne, la force électrostatique d'attraction coulombienne et la quantification du moment cinétique, Niels Bohr établit que le rayon de l'orbite de l'électron de l'hydrogène est r_n = n² * r_0 (avec r_0 = 0,053 nm = 0,53 Å, rayon de Bohr) et que son énergie totale est E_n = -E_0 / n² avec E_0 = (m_e * e⁴) / (8 * epsilon_0² * h²) ≈ 13,6 eV. Pour tout n entier supérieur ou égal à 1 : E_n = -13,6 / n² eV.",
          "exercise": {
            "id": "phys_tle_cd_14_p4_s1_qcm",
            "type": "mcq",
            "prompt": "Quelle est l'énergie E₄ du quatrième niveau quantique (n = 4) de l'atome d'hydrogène ?",
            "options": [
              "-3,40 eV",
              "-1,51 eV",
              "-0,85 eV",
              "-0,54 eV"
            ],
            "correctAnswerIndex": 2,
            "explanation": "E₄ = -13,6 / 4² = -13,6 / 16 = -0,85 eV."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Resserrement asymptotique des niveaux d'énergie",
          "stepTheme": "Structure des niveaux",
          "stepBadge": "Propriété",
          "paragraphText": "Lorsque le nombre quantique n augmente, les niveaux d'énergie se rapprochent de plus en plus vite les uns des autres : la différence entre deux niveaux consécutifs E_{n+1} - E_n = 13,6 * [1/n² - 1/(n+1)²] tend rapidement vers 0 quand n augmente. Par exemple, E₂ - E₁ = 10,2 eV (écart immense représentant 75 % de toute la profondeur du puits de potentiel), tandis que E₆ - E₅ = -0,38 - (-0,54) = 0,16 eV seulement. Au voisinage de n -> oo, les niveaux forment un quasi-continuum qui rejoint la zone d'ionisation.",
          "exercise": {
            "id": "phys_tle_cd_14_p4_s2_qcm",
            "type": "mcq",
            "prompt": "Quelle fraction de l'énergie totale d'ionisation (13,6 eV) représente le saut du niveau fondamental n = 1 au tout premier niveau excité n = 2 ?",
            "options": [
              "25 % (1/4)",
              "50 % (1/2)",
              "75 % (3/4)",
              "90 %"
            ],
            "correctAnswerIndex": 2,
            "explanation": "ΔE = E₂ - E₁ = -3,40 - (-13,60) = 10,20 eV. Le rapport ΔE / E_i = 10,20 / 13,60 = 0,75 = 75 % (soit exactement 1 - 1/4 = 3/4)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Définition rigoureuse de l'énergie d'ionisation E_i",
          "stepTheme": "Ionisation",
          "stepBadge": "Définition",
          "paragraphText": "L'énergie de première ionisation E_i d'un atome est l'énergie minimale nécessaire qu'il faut apporter à cet atome pris dans son état fondamental (n = 1) et au repos pour lui arracher son électron et le porter à l'infini (n = oo) avec une énergie cinétique résiduelle nulle : H -> H⁺ + e⁻. Pour l'atome d'hydrogène : E_i = E_infini - E₁ = 0 - (-13,6 eV) = +13,6 eV. En unités du Système International : E_i = 13,6 * 1,602.10⁻¹⁹ J ≈ 2,18.10⁻¹⁸ J.",
          "exercise": {
            "id": "phys_tle_cd_14_p4_s3_qcm",
            "type": "mcq",
            "prompt": "Quelle est l'énergie d'ionisation molaire de l'hydrogène atomique (en kJ/mol) ? (N_A = 6,022.10²³ mol⁻¹ ; 1 eV = 1,602.10⁻¹⁹ J)",
            "options": [
              "1312 kJ/mol",
              "500 kJ/mol",
              "2180 kJ/mol",
              "13,6 kJ/mol"
            ],
            "correctAnswerIndex": 0,
            "explanation": "E_{i,mol} = E_i * N_A = (2,179.10⁻¹⁸ J) * (6,022.10²³ mol⁻¹) ≈ 1,312.10⁶ J/mol = 1312 kJ/mol. C'est l'enthalpie d'ionisation standard de l'hydrogène figurant dans les tables de chimie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calcul de la longueur d'onde de la limite de photo-ionisation",
          "stepTheme": "Limite d'ionisation",
          "stepBadge": "Méthode",
          "paragraphText": "La longueur d'onde seuil de photo-ionisation lambda_limite est la longueur d'onde maximale du photon capable d'ioniser l'atome depuis son état fondamental : E_photon = E_i <=> h.c / lambda_limite = E_i => lambda_limite = h.c / E_i. Pour l'hydrogène à l'état fondamental : lambda_limite = 1240 eV.nm / 13,6 eV ≈ 91,2 nm. Tout photon dont la longueur d'onde lambda <= 91,2 nm ionisera instantanément l'atome d'hydrogène.",
          "exercise": {
            "id": "phys_tle_cd_14_p4_s4_qcm",
            "type": "mcq",
            "prompt": "Un photon de longueur d'onde lambda = 80,0 nm frappe un atome d'hydrogène dans son état fondamental. Que se produit-il ?",
            "options": [
              "Le photon traverse l'atome sans aucune interaction car 80 nm ne correspond à aucune transition",
              "L'atome est ionisé, et l'électron libéré emporte une énergie cinétique égale à 1,90 eV",
              "L'atome est excité au niveau n = 6",
              "Le noyau d'hydrogène éclate"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'énergie du photon incident est E = 1240 / 80,0 = 15,50 eV. Puisque 15,50 eV > 13,60 eV (E > E_i), le photon est absorbé en provoquant l'ionisation. L'excédent d'énergie est emporté par l'électron sous forme d'énergie cinétique : E_c = E - E_i = 15,50 - 13,60 = 1,90 eV."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Généralisation aux ions hydrogénoïdes (He⁺, Li²⁺)",
          "stepTheme": "Ions hydrogénoïdes",
          "stepBadge": "Extension",
          "paragraphText": "Un ion hydrogénoïde est un ion qui ne possède, comme l'atome d'hydrogène, qu'un seul électron unique gravitant autour d'un noyau de numéro atomique Z (par exemple l'ion hélium He⁺ avec Z = 2, ou l'ion lithium Li²⁺ avec Z = 3). Le modèle de Bohr s'applique rigoureusement en multipliant l'attraction coulombienne par Z : les niveaux d'énergie deviennent E_n = -13,6 * (Z² / n²) eV. L'énergie d'ionisation est ainsi multipliée par Z².",
          "exercise": {
            "id": "phys_tle_cd_14_p4_s5_qcm",
            "type": "mcq",
            "prompt": "Quelle est l'énergie d'ionisation de l'ion hydrogénoïde d'hélium He⁺ (Z = 2) depuis son état fondamental n = 1 ?",
            "options": [
              "13,6 eV",
              "27,2 eV",
              "54,4 eV",
              "108,8 eV"
            ],
            "correctAnswerIndex": 2,
            "explanation": "E_i(He⁺) = 13,6 * Z² / 1² = 13,6 * 2² = 13,6 * 4 = 54,4 eV."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Inapplicabilité stricte de la formule de Bohr aux atomes polyélectroniques",
          "stepTheme": "Limites du modèle",
          "stepBadge": "Attention piège",
          "paragraphText": "La formule E_n = -13,6 / n² eV n'est rigoureusement exacte QUE pour l'atome d'hydrogène neutre (et avec le facteur Z² pour les ions à un seul électron). Pour tous les autres atomes neutres comportant plusieurs électrons (hélium neutre à 2 électrons, sodium à 11 électrons, etc.), la répulsion électrostatique mutuelle entre électrons perturbe les niveaux quantiques. Les énergies des états de ces atomes ne suivent plus la formule en -13,6 / n² et doivent être déterminées expérimentalement à partir de leurs diagrammes énergétiques spécifiques.",
          "exercise": {
            "id": "phys_tle_cd_14_p4_s6_qcm",
            "type": "mcq",
            "prompt": "Pourquoi ne peut-on pas utiliser la formule E_n = -13,6 / n² eV pour calculer les niveaux d'énergie de l'atome neutre d'hélium (^4_2He) ?",
            "options": [
              "Parce que le noyau d'hélium est trop lourd",
              "Parce que l'atome d'hélium possède deux électrons qui exercent des forces de répulsion mutuelle non prises en compte par la formule de Bohr",
              "Parce que l'hélium n'émet aucune raie spectrale",
              "Parce que l'hélium est un gaz parfait"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le modèle de Bohr élémentaire ne prend en compte que l'attraction centrale entre un électron unique et le noyau. Dès qu'il y a 2 électrons ou plus, les répulsions coulombiennes interélectroniques et les effets quantiques d'écran modifient complètement la structure énergétique."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Vérification des énergies d'ionisation expérimentales du Sodium et Lithium",
          "stepTheme": "Atomes alcalins",
          "stepBadge": "Données expérimentales",
          "paragraphText": "Sur les diagrammes d'énergie fournis aux examens : Pour le Lithium (Li, Z = 3), l'état fondamental est à E₁ = -5,39 eV, d'où une énergie d'ionisation E_i = 5,39 eV. Pour le Sodium (Na, Z = 11), l'état fondamental se situe à E₁ = -5,14 eV, d'où E_i = 5,14 eV. Ces énergies d'ionisation beaucoup plus faibles que celle de l'hydrogène (13,6 eV) s'expliquent par l'écrantage des couches électroniques internes, qui rend l'électron de valence superficiel très facile à arracher.",
          "exercise": {
            "id": "phys_tle_cd_14_p4_s7_qcm",
            "type": "mcq",
            "prompt": "Un atome inconnu X à l'état fondamental absorbe un photon d'énergie 5,14 eV et s'ionise avec une vitesse d'éjection nulle. Quel est cet atome parmi les données suivantes : Hydrogène (E_i = 13,6 eV), Lithium (E_i = 5,39 eV), Sodium (E_i = 5,14 eV) ?",
            "options": [
              "L'atome d'hydrogène",
              "L'atome de lithium",
              "L'atome de sodium",
              "Un ion inconnu"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'énergie minimale nécessaire pour ioniser l'atome correspond exactement à son énergie d'ionisation E_i = 5,14 eV. D'après le tableau de référence, il s'agit sans équivoque de l'atome de sodium."
          }
        }
      ],
      "exercises": [
        {
          "id": "phys_tle_cd_14_p4_s1_qcm",
          "type": "mcq",
          "prompt": "Quelle est l'énergie E₄ du quatrième niveau quantique (n = 4) de l'atome d'hydrogène ?",
          "options": [
            "-3,40 eV",
            "-1,51 eV",
            "-0,85 eV",
            "-0,54 eV"
          ],
          "correctAnswerIndex": 2,
          "explanation": "E₄ = -13,6 / 4² = -13,6 / 16 = -0,85 eV."
        },
        {
          "id": "phys_tle_cd_14_p4_s2_qcm",
          "type": "mcq",
          "prompt": "Quelle fraction de l'énergie totale d'ionisation (13,6 eV) représente le saut du niveau fondamental n = 1 au tout premier niveau excité n = 2 ?",
          "options": [
            "25 % (1/4)",
            "50 % (1/2)",
            "75 % (3/4)",
            "90 %"
          ],
          "correctAnswerIndex": 2,
          "explanation": "ΔE = E₂ - E₁ = -3,40 - (-13,60) = 10,20 eV. Le rapport ΔE / E_i = 10,20 / 13,60 = 0,75 = 75 % (soit exactement 1 - 1/4 = 3/4)."
        },
        {
          "id": "phys_tle_cd_14_p4_s3_qcm",
          "type": "mcq",
          "prompt": "Quelle est l'énergie d'ionisation molaire de l'hydrogène atomique (en kJ/mol) ? (N_A = 6,022.10²³ mol⁻¹ ; 1 eV = 1,602.10⁻¹⁹ J)",
          "options": [
            "1312 kJ/mol",
            "500 kJ/mol",
            "2180 kJ/mol",
            "13,6 kJ/mol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "E_{i,mol} = E_i * N_A = (2,179.10⁻¹⁸ J) * (6,022.10²³ mol⁻¹) ≈ 1,312.10⁶ J/mol = 1312 kJ/mol. C'est l'enthalpie d'ionisation standard de l'hydrogène figurant dans les tables de chimie."
        },
        {
          "id": "phys_tle_cd_14_p4_s4_qcm",
          "type": "mcq",
          "prompt": "Un photon de longueur d'onde lambda = 80,0 nm frappe un atome d'hydrogène dans son état fondamental. Que se produit-il ?",
          "options": [
            "Le photon traverse l'atome sans aucune interaction car 80 nm ne correspond à aucune transition",
            "L'atome est ionisé, et l'électron libéré emporte une énergie cinétique égale à 1,90 eV",
            "L'atome est excité au niveau n = 6",
            "Le noyau d'hydrogène éclate"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'énergie du photon incident est E = 1240 / 80,0 = 15,50 eV. Puisque 15,50 eV > 13,60 eV (E > E_i), le photon est absorbé en provoquant l'ionisation. L'excédent d'énergie est emporté par l'électron sous forme d'énergie cinétique : E_c = E - E_i = 15,50 - 13,60 = 1,90 eV."
        },
        {
          "id": "phys_tle_cd_14_p4_s5_qcm",
          "type": "mcq",
          "prompt": "Quelle est l'énergie d'ionisation de l'ion hydrogénoïde d'hélium He⁺ (Z = 2) depuis son état fondamental n = 1 ?",
          "options": [
            "13,6 eV",
            "27,2 eV",
            "54,4 eV",
            "108,8 eV"
          ],
          "correctAnswerIndex": 2,
          "explanation": "E_i(He⁺) = 13,6 * Z² / 1² = 13,6 * 2² = 13,6 * 4 = 54,4 eV."
        },
        {
          "id": "phys_tle_cd_14_p4_s6_qcm",
          "type": "mcq",
          "prompt": "Pourquoi ne peut-on pas utiliser la formule E_n = -13,6 / n² eV pour calculer les niveaux d'énergie de l'atome neutre d'hélium (^4_2He) ?",
          "options": [
            "Parce que le noyau d'hélium est trop lourd",
            "Parce que l'atome d'hélium possède deux électrons qui exercent des forces de répulsion mutuelle non prises en compte par la formule de Bohr",
            "Parce que l'hélium n'émet aucune raie spectrale",
            "Parce que l'hélium est un gaz parfait"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le modèle de Bohr élémentaire ne prend en compte que l'attraction centrale entre un électron unique et le noyau. Dès qu'il y a 2 électrons ou plus, les répulsions coulombiennes interélectroniques et les effets quantiques d'écran modifient complètement la structure énergétique."
        },
        {
          "id": "phys_tle_cd_14_p4_s7_qcm",
          "type": "mcq",
          "prompt": "Un atome inconnu X à l'état fondamental absorbe un photon d'énergie 5,14 eV et s'ionise avec une vitesse d'éjection nulle. Quel est cet atome parmi les données suivantes : Hydrogène (E_i = 13,6 eV), Lithium (E_i = 5,39 eV), Sodium (E_i = 5,14 eV) ?",
          "options": [
            "L'atome d'hydrogène",
            "L'atome de lithium",
            "L'atome de sodium",
            "Un ion inconnu"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'énergie minimale nécessaire pour ioniser l'atome correspond exactement à son énergie d'ionisation E_i = 5,14 eV. D'après le tableau de référence, il s'agit sans équivoque de l'atome de sodium."
        }
      ]
    },
    {
      "id": "pt5_series_spectrales_hydrogene",
      "order": 5,
      "title": "Séries spectrales de l'atome d'hydrogène (Lyman, Balmer, Paschen)",
      "summary": "Formule de Rydberg-Ritz, regroupement des raies en séries spectrales selon le niveau d'arrivée n, domaine spectral de chaque série (Lyman en UV, Balmer en visible, Paschen en IR) et calculs des raies H-alpha, H-bêta, H-gamma, H-delta.",
      "conceptExplanation": "Lorsque les atomes d'hydrogène excités se désexcitent, les transitions électroniques d'un niveau initial p vers un niveau d'arrivée n (avec p > n) se regroupent naturellement en familles appelées séries spectrales. La fréquence des photons émis est donnée par la relation de Rydberg-Ritz : nu = (c / lambda) = R_H * c * (1/n² - 1/p²), où R_H est la constante de Rydberg pour l'hydrogène (R_H ≈ 1,097.10⁷ m⁻¹). Les principales séries sont : 1. Série de Lyman (niveau d'arrivée n = 1, p >= 2) : transitions vers l'état fondamental, situées dans l'ultraviolet lointain (91 nm à 122 nm). 2. Série de Balmer (niveau d'arrivée n = 2, p >= 3) : seules transitions dont certaines raies tombent dans le domaine de la lumière visible (raies colorées H_alpha = 656 nm rouge, H_beta = 486 nm cyan, H_gamma = 434 nm bleu-indigo, H_delta = 410 nm violet). 3. Série de Paschen (niveau d'arrivée n = 3, p >= 4) : située dans l'infrarouge (820 nm à 1875 nm). 4. Séries de Brackett (n = 4) et Pfund (n = 5) dans l'infrarouge lointain.",
      "keyRule": "Formule de Rydberg : 1 / lambda = R_H * (1/n² - 1/p²) avec p > n. Lyman : n = 1 (UV). Balmer : n = 2 (Visible/UV proche). Paschen : n = 3 (Infrarouge).",
      "formulas": [
        {
          "name": "Relation 1",
          "formula": "\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n^2} - \\frac{1}{p^2} \\right) \\quad (p > n)"
        },
        {
          "name": "Relation 2",
          "formula": "R_H = \\frac{E_0}{h c} \\approx 1{,}09737 \\times 10^7\\text{ m}^{-1}"
        },
        {
          "name": "Relation 3",
          "formula": "\\text{Lyman : } n = 1, \\; p \\in \\{2, 3, 4, ...\\} \\implies \\text{Ultraviolet}"
        },
        {
          "name": "Relation 4",
          "formula": "\\text{Balmer : } n = 2, \\; p \\in \\{3, 4, 5, 6, ...\\} \\implies \\text{Visible}"
        },
        {
          "name": "Relation 5",
          "formula": "\\text{Paschen : } n = 3, \\; p \\in \\{4, 5, 6, ...\\} \\implies \\text{Infrarouge}"
        }
      ],
      "workedExample": {
        "title": "Calcul de la raie rouge H-alpha de la série de Balmer",
        "statement": "La raie rouge H_alpha de l'hydrogène correspond à la transition radiative entre le niveau p = 3 et le niveau n = 2. 1. Calculer l'énergie du photon émis en eV puis en Joules. 2. Déterminer la longueur d'onde lambda de cette radiation dans le vide en nanomètres (nm) et confirmer sa couleur. Données : E_n = -13,6 / n² eV ; h.c = 1240 eV.nm.",
        "methodSteps": [
          "Étape 1 : Calculer les énergies des deux niveaux : E₂ = -13,6 / 2² = -3,40 eV ; E₃ = -13,6 / 3² = -1,511 eV.",
          "Étape 2 : Calculer l'énergie du photon émis : ΔE = E₃ - E₂ = -1,511 - (-3,400) = 1,889 eV ≈ 1,89 eV.",
          "Étape 3 : Convertir en Joules : ΔE = 1,889 * 1,602.10⁻¹⁹ J ≈ 3,026.10⁻¹⁹ J ≈ 3,03.10⁻¹⁹ J.",
          "Étape 4 : Calculer la longueur d'onde : lambda = h.c / ΔE = 1240 / 1,889 ≈ 656,4 nm ≈ 656 nm.",
          "Étape 5 : Conclusion spectrale : Une radiation monochromatique de longueur d'onde 656 nm est une lumière rouge vive bien connue des astronomes (la raie H-alpha des nébuleuses stellaires)."
        ],
        "conclusion": "La transition p = 3 -> n = 2 engendre la raie rouge H_alpha de l'atome d'hydrogène à lambda = 656 nm."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau détaillé des raies de la série de Balmer (transitions vers n = 2)",
        "tableData": {
          "headers": [
            "Nom de la raie",
            "Transition (p -> 2)",
            "Énergie du photon (eV)",
            "Longueur d'onde calculée (nm)",
            "Couleur observée"
          ],
          "rows": [
            [
              "H_alpha (Hα)",
              "p = 3 -> n = 2",
              "1,89 eV",
              "656,3 nm",
              "Rouge éclatant"
            ],
            [
              "H_bêta (Hβ)",
              "p = 4 -> n = 2",
              "2,55 eV",
              "486,1 nm",
              "Bleu-vert / Cyan"
            ],
            [
              "H_gamma (Hγ)",
              "p = 5 -> n = 2",
              "2,86 eV",
              "434,0 nm",
              "Bleu-indigo"
            ],
            [
              "H_delta (Hδ)",
              "p = 6 -> n = 2",
              "3,02 eV",
              "410,2 nm",
              "Violet profond"
            ],
            [
              "Limite de Balmer",
              "p = oo -> n = 2",
              "3,40 eV",
              "364,6 nm",
              "Ultraviolet proche (limite de série)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Concept de série spectrale et classification",
          "stepTheme": "Séries spectrales",
          "stepBadge": "Définition",
          "paragraphText": "En spectroscopie atomique, une série spectrale est l'ensemble de toutes les raies émises (ou absorbées) par un atome lorsque l'électron transite entre divers niveaux excités p et un niveau d'arrivée n fixé. Pour l'atome d'hydrogène, chaque série porte le nom du physicien qui l'a découverte : Lyman pour n = 1, Balmer pour n = 2, Paschen pour n = 3, Brackett pour n = 4, Pfund pour n = 5.",
          "exercise": {
            "id": "phys_tle_cd_14_p5_s1_qcm",
            "type": "mcq",
            "prompt": "À quelle série spectrale de l'hydrogène appartient une raie émise lors de la transition d'un électron du niveau n = 5 au niveau n = 1 ?",
            "options": [
              "Série de Balmer",
              "Série de Lyman",
              "Série de Paschen",
              "Série de Brackett"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le niveau d'arrivée de la transition est n = 1 (niveau fondamental). Toute transition dont le niveau final est n = 1 appartient par définition à la série de Lyman (située dans le domaine ultraviolet)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule empirique de Rydberg et sa démonstration par Bohr",
          "stepTheme": "Constante de Rydberg",
          "stepBadge": "Formule de Rydberg",
          "paragraphText": "Avant même le modèle de Bohr, le physicien suédois Johannes Rydberg avait découvert que l'inverse de la longueur d'onde suit la loi empirique 1 / lambda = R_H * (1/n² - 1/p²). Niels Bohr a fourni la démonstration théorique exacte de cette formule en montrant que la constante de Rydberg s'exprime uniquement à partir des constantes fondamentales de la physique : R_H = E_0 / (h.c) = 13,6 eV / (1240 eV.nm) ≈ 1,097.10⁷ m⁻¹.",
          "exercise": {
            "id": "phys_tle_cd_14_p5_s2_qcm",
            "type": "mcq",
            "prompt": "En utilisant la formule de Rydberg 1 / lambda = R_H * (1/n² - 1/p²), quelle est l'expression de la longueur d'onde de la première raie de Lyman (n = 1, p = 2) ?",
            "options": [
              "lambda = R_H / 2",
              "lambda = 4 / (3 R_H)",
              "lambda = 3 R_H / 4",
              "lambda = 1 / R_H"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour n = 1 et p = 2 : 1 / lambda = R_H * (1/1² - 1/2²) = R_H * (1 - 1/4) = (3/4) * R_H. En inversant : lambda = 4 / (3 * R_H) ≈ 4 / (3 * 1,097.10⁷) ≈ 1,215.10⁻⁷ m = 121,5 nm."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Caractéristique unique de la série de Balmer : la fenêtre du visible",
          "stepTheme": "Série de Balmer",
          "stepBadge": "Spectre visible",
          "paragraphText": "La série de Balmer (transitions vers n = 2) est historiquement la première découverte (1885) car ses quatre premières raies (H_alpha, H_beta, H_gamma, H_delta) sont les seules de tout l'atome d'hydrogène à être situées dans le spectre visible de l'œil humain (entre 400 nm et 700 nm). Toutes les raies de Lyman sont dans l'ultraviolet (lambda < 400 nm), tandis que toutes celles de Paschen, Brackett et Pfund sont dans l'infrarouge (lambda > 700 nm).",
          "exercise": {
            "id": "phys_tle_cd_14_p5_s3_qcm",
            "type": "mcq",
            "prompt": "Quelle est la longueur d'onde de la raie H_bêta de la série de Balmer correspondant à la transition p = 4 -> n = 2 ? (E₂ = -3,40 eV ; E₄ = -0,85 eV ; h.c = 1240 eV.nm)",
            "options": [
              "656 nm",
              "486 nm",
              "434 nm",
              "410 nm"
            ],
            "correctAnswerIndex": 1,
            "explanation": "ΔE = E₄ - E₂ = -0,85 - (-3,40) = 2,55 eV. lambda = h.c / ΔE = 1240 / 2,55 ≈ 486,3 nm ≈ 486 nm. C'est la raie cyan H-bêta."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calcul de la raie limite d'une série spectrale (p -> infini)",
          "stepTheme": "Limite de série",
          "stepBadge": "Méthode",
          "paragraphText": "Dans chaque série spectrale, la raie de plus courte longueur d'onde (donc de plus haute fréquence et de plus haute énergie) est obtenue lorsque le niveau de départ est à l'infini (p -> oo). Elle est appelée la limite de la série (lambda_lim). En posant 1/p² -> 0 dans la formule de Rydberg : 1 / lambda_lim = R_H * (1/n² - 0) = R_H / n², d'où : lambda_lim = n² / R_H. Au-delà de cette limite vers les courtes longueurs d'onde, le spectre devient continu car il correspond à la capture d'un électron libre.",
          "exercise": {
            "id": "phys_tle_cd_14_p5_s4_qcm",
            "type": "mcq",
            "prompt": "Quelle est la longueur d'onde de la limite de la série de Balmer (n = 2, p -> oo) ? (R_H = 1,097.10⁷ m⁻¹)",
            "options": [
              "91,2 nm",
              "364,6 nm",
              "656,3 nm",
              "820,4 nm"
            ],
            "correctAnswerIndex": 1,
            "explanation": "lambda_lim(Balmer) = n² / R_H = 2² / R_H = 4 / (1,097.10⁷ m⁻¹) ≈ 3,646.10⁻⁷ m = 364,6 nm. Aucune raie de la série de Balmer ne peut avoir une longueur d'onde inférieure à 364,6 nm."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confusion entre énergie de transition et longueur d'onde (relation inverse)",
          "stepTheme": "Ordre des longueurs d'onde",
          "stepBadge": "Attention piège",
          "paragraphText": "Comme l'énergie est inversement proportionnelle à la longueur d'onde (E = h.c / lambda), la transition qui libère la PLUS GRANDE énergie possède la PLUS COURTE longueur d'onde, et inversement, la transition de plus faible énergie possède la plus grande longueur d'onde. Dans la série de Balmer : la transition p = 3 -> 2 libère le moins d'énergie (1,89 eV) et correspond à la plus grande longueur d'onde (656 nm, rouge) ; la transition p = 6 -> 2 libère 3,02 eV et correspond à la plus petite longueur d'onde (410 nm, violet).",
          "exercise": {
            "id": "phys_tle_cd_14_p5_s5_qcm",
            "type": "mcq",
            "prompt": "Parmi les raies de la série de Balmer suivantes, laquelle transporte l'énergie la plus élevée par photon ?",
            "options": [
              "H_alpha (656 nm)",
              "H_bêta (486 nm)",
              "H_gamma (434 nm)",
              "H_delta (410 nm)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'énergie du photon étant E = h.c / lambda, plus la longueur d'onde lambda est courte, plus l'énergie est élevée. La raie violette H_delta (410 nm) possède la longueur d'onde la plus petite parmi les quatre, elle transporte donc l'énergie photonique la plus élevée (3,02 eV)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Série de Paschen et observation dans l'infrarouge",
          "stepTheme": "Série de Paschen",
          "stepBadge": "Infrarouge",
          "paragraphText": "La série de Paschen correspond aux retours d'électrons excités vers le niveau n = 3 (depuis p = 4, 5, 6...). L'énergie maximale de cette série est de 1,51 eV (p -> oo), et la première transition p = 4 -> 3 ne libère que ΔE = -0,85 - (-1,51) = 0,66 eV. Ces énergies très faibles correspondent à des longueurs d'onde comprises entre 820 nm et 1875 nm, situées exclusivement dans le domaine infrarouge, invisibles pour l'œil humain mais détectables par des caméras thermiques infrarouges.",
          "exercise": {
            "id": "phys_tle_cd_14_p5_s6_qcm",
            "type": "mcq",
            "prompt": "Quelle est la longueur d'onde approximative de la première raie de Paschen (p = 4 -> n = 3) sachant que ΔE = 0,66 eV ? (h.c ≈ 1240 eV.nm)",
            "options": [
              "434 nm",
              "820 nm",
              "1240 nm",
              "1879 nm"
            ],
            "correctAnswerIndex": 3,
            "explanation": "lambda = h.c / ΔE = 1240 / 0,66 ≈ 1878,8 nm ≈ 1879 nm (domaine infrarouge)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Spectre d'absorption de l'hydrogène à température ambiante",
          "stepTheme": "Spectre d'absorption",
          "stepBadge": "Température et population",
          "paragraphText": "À température ambiante ordinaire (T ≈ 300 K), l'agitation thermique (k_B.T ≈ 0,025 eV) est infiniment trop faible pour exciter les atomes d'hydrogène au niveau n = 2 (qui requiert 10,2 eV). Par conséquent, 100 % des atomes d'hydrogène d'un gaz froid sont dans leur état fondamental n = 1. Si l'on éclaire ce gaz par de la lumière blanche, il ne peut absorber que des photons partant de n = 1 (série de Lyman, dans l'ultraviolet). L'hydrogène gazeux froid est donc TOTALEMENT TRANSPARENT à la lumière visible : le spectre visible ne montre aucune raie d'absorption de Balmer !",
          "exercise": {
            "id": "phys_tle_cd_14_p5_s7_qcm",
            "type": "mcq",
            "prompt": "Pourquoi les raies d'absorption de la série de Balmer ne sont-elles observables dans les étoiles que si la température de surface est très élevée (de l'ordre de 10 000 K) ?",
            "options": [
              "Parce qu'à basse température, le niveau n = 2 est totalement dépeuplé et tous les atomes sont au niveau fondamental n = 1",
              "Parce que la lumière visible ne se propage pas dans les gaz froids",
              "Parce que la constante de Planck diminue à haute température",
              "Parce que le niveau n = 2 n'existe qu'au-dessus de 10 000 K"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour absorber une raie de Balmer (transitions partant de n = 2 vers p > 2 dans le visible), il faut impérativement que des électrons soient DÉJÀ présents au niveau excité n = 2. Cela exige une température stellaire suffisamment élevée (~ 10 000 K) pour peupler thermiquement le niveau n = 2 par collisions."
          }
        }
      ],
      "exercises": [
        {
          "id": "phys_tle_cd_14_p5_s1_qcm",
          "type": "mcq",
          "prompt": "À quelle série spectrale de l'hydrogène appartient une raie émise lors de la transition d'un électron du niveau n = 5 au niveau n = 1 ?",
          "options": [
            "Série de Balmer",
            "Série de Lyman",
            "Série de Paschen",
            "Série de Brackett"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le niveau d'arrivée de la transition est n = 1 (niveau fondamental). Toute transition dont le niveau final est n = 1 appartient par définition à la série de Lyman (située dans le domaine ultraviolet)."
        },
        {
          "id": "phys_tle_cd_14_p5_s2_qcm",
          "type": "mcq",
          "prompt": "En utilisant la formule de Rydberg 1 / lambda = R_H * (1/n² - 1/p²), quelle est l'expression de la longueur d'onde de la première raie de Lyman (n = 1, p = 2) ?",
          "options": [
            "lambda = R_H / 2",
            "lambda = 4 / (3 R_H)",
            "lambda = 3 R_H / 4",
            "lambda = 1 / R_H"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour n = 1 et p = 2 : 1 / lambda = R_H * (1/1² - 1/2²) = R_H * (1 - 1/4) = (3/4) * R_H. En inversant : lambda = 4 / (3 * R_H) ≈ 4 / (3 * 1,097.10⁷) ≈ 1,215.10⁻⁷ m = 121,5 nm."
        },
        {
          "id": "phys_tle_cd_14_p5_s3_qcm",
          "type": "mcq",
          "prompt": "Quelle est la longueur d'onde de la raie H_bêta de la série de Balmer correspondant à la transition p = 4 -> n = 2 ? (E₂ = -3,40 eV ; E₄ = -0,85 eV ; h.c = 1240 eV.nm)",
          "options": [
            "656 nm",
            "486 nm",
            "434 nm",
            "410 nm"
          ],
          "correctAnswerIndex": 1,
          "explanation": "ΔE = E₄ - E₂ = -0,85 - (-3,40) = 2,55 eV. lambda = h.c / ΔE = 1240 / 2,55 ≈ 486,3 nm ≈ 486 nm. C'est la raie cyan H-bêta."
        },
        {
          "id": "phys_tle_cd_14_p5_s4_qcm",
          "type": "mcq",
          "prompt": "Quelle est la longueur d'onde de la limite de la série de Balmer (n = 2, p -> oo) ? (R_H = 1,097.10⁷ m⁻¹)",
          "options": [
            "91,2 nm",
            "364,6 nm",
            "656,3 nm",
            "820,4 nm"
          ],
          "correctAnswerIndex": 1,
          "explanation": "lambda_lim(Balmer) = n² / R_H = 2² / R_H = 4 / (1,097.10⁷ m⁻¹) ≈ 3,646.10⁻⁷ m = 364,6 nm. Aucune raie de la série de Balmer ne peut avoir une longueur d'onde inférieure à 364,6 nm."
        },
        {
          "id": "phys_tle_cd_14_p5_s5_qcm",
          "type": "mcq",
          "prompt": "Parmi les raies de la série de Balmer suivantes, laquelle transporte l'énergie la plus élevée par photon ?",
          "options": [
            "H_alpha (656 nm)",
            "H_bêta (486 nm)",
            "H_gamma (434 nm)",
            "H_delta (410 nm)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'énergie du photon étant E = h.c / lambda, plus la longueur d'onde lambda est courte, plus l'énergie est élevée. La raie violette H_delta (410 nm) possède la longueur d'onde la plus petite parmi les quatre, elle transporte donc l'énergie photonique la plus élevée (3,02 eV)."
        },
        {
          "id": "phys_tle_cd_14_p5_s6_qcm",
          "type": "mcq",
          "prompt": "Quelle est la longueur d'onde approximative de la première raie de Paschen (p = 4 -> n = 3) sachant que ΔE = 0,66 eV ? (h.c ≈ 1240 eV.nm)",
          "options": [
            "434 nm",
            "820 nm",
            "1240 nm",
            "1879 nm"
          ],
          "correctAnswerIndex": 3,
          "explanation": "lambda = h.c / ΔE = 1240 / 0,66 ≈ 1878,8 nm ≈ 1879 nm (domaine infrarouge)."
        },
        {
          "id": "phys_tle_cd_14_p5_s7_qcm",
          "type": "mcq",
          "prompt": "Pourquoi les raies d'absorption de la série de Balmer ne sont-elles observables dans les étoiles que si la température de surface est très élevée (de l'ordre de 10 000 K) ?",
          "options": [
            "Parce qu'à basse température, le niveau n = 2 est totalement dépeuplé et tous les atomes sont au niveau fondamental n = 1",
            "Parce que la lumière visible ne se propage pas dans les gaz froids",
            "Parce que la constante de Planck diminue à haute température",
            "Parce que le niveau n = 2 n'existe qu'au-dessus de 10 000 K"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour absorber une raie de Balmer (transitions partant de n = 2 vers p > 2 dans le visible), il faut impérativement que des électrons soient DÉJÀ présents au niveau excité n = 2. Cela exige une température stellaire suffisamment élevée (~ 10 000 K) pour peupler thermiquement le niveau n = 2 par collisions."
        }
      ]
    },
    {
      "id": "pt6_regles_absorption_ionisation_effet_photoelectrique",
      "order": 6,
      "title": "Règles strictes d'absorption et ionisation atomique",
      "summary": "Condition de résonance stricte pour l'absorption d'un photon dans les états liés (tout ou rien), mécanisme d'ionisation pour E_photon >= E_i et bilan cinétique de l'électron éjecté.",
      "conceptExplanation": "L'interaction d'un photon incident avec un atome obéit à deux régimes physiques fondamentalement différents selon la valeur de l'énergie du photon E_photon : 1. Régime des états liés (E_photon < E_i) : la condition d'absorption est STRICTE et SÉLECTIVE ('tout ou rien'). L'atome ne peut absorber le photon QUE SI l'énergie E_photon correspond RIGOUREUSEMENT à la différence exacte entre un niveau supérieur permis E_p et le niveau actuel E_n : E_photon = E_p - E_n. Si l'énergie du photon diffère même d'une infime fraction d'électronvolt d'un écart quantique permis, le photon traverse l'atome sans être absorbé : l'atome est transparent à cette radiation. 2. Régime du continuum d'ionisation (E_photon >= E_i) : dès que l'énergie du photon est supérieure ou égale à l'énergie d'ionisation, le photon est SYSTÉMATIQUEMENT ABSORBÉ, quelle que soit son énergie ! L'électron est arraché de l'atome, et l'excédent d'énergie (E_photon - E_i) est intégralement transféré à l'électron libre sous forme d'énergie cinétique continue : E_c = (1/2).m_e.v² = E_photon - E_i.",
      "keyRule": "Si E_photon < E_i : absorption possible SI ET SEULEMENT SI E_photon = E_p - E_n. Si E_photon >= E_i : absorption toujours possible avec éjection d'un électron d'énergie cinétique E_c = E_photon - E_i.",
      "formulas": [
        {
          "name": "Relation 1",
          "formula": "\\text{Si } E_{\\text{photon}} < E_i : \\quad E_{\\text{photon}} = E_p - E_n \\quad \\text{(condition stricte de résonance)}"
        },
        {
          "name": "Relation 2",
          "formula": "\\text{Si } E_{\\text{photon}} \\ge E_i : \\quad \\text{Ionisation systématique}"
        },
        {
          "name": "Relation 3",
          "formula": "E_c = E_{\\text{photon}} - E_i = \\frac{1}{2}m_e v^2"
        },
        {
          "name": "Relation 4",
          "formula": "v = \\sqrt{\\frac{2(E_{\\text{photon}} - E_i)}{m_e}}"
        }
      ],
      "workedExample": {
        "title": "Analyse du comportement d'un atome d'hydrogène fondamental soumis à divers photons",
        "statement": "Un atome d'hydrogène est initialement dans son état fondamental (E₁ = -13,60 eV). On lui envoie successivement trois photons d'énergies respectives : E_A = 10,20 eV ; E_B = 11,50 eV ; E_C = 15,00 eV. Décrire avec précision ce qui se produit dans chaque cas (absorption ou transparence, état final de l'atome, énergie cinétique éventuelle de l'électron). Données : E_n = -13,6 / n² eV (E₂ = -3,40 eV ; E₃ = -1,51 eV ; E₄ = -0,85 eV).",
        "methodSteps": [
          "Étape 1 : Analyser le photon A (E_A = 10,20 eV) : L'énergie requise pour passer de n = 1 à n = 2 est ΔE = E₂ - E₁ = -3,40 - (-13,60) = 10,20 eV. Comme E_A = ΔE exactement, le photon est intégralement absorbé : l'atome passe de l'état fondamental à son premier état excité n = 2.",
          "Étape 2 : Analyser le photon B (E_B = 11,50 eV) : Calculons l'énergie finale si ce photon était absorbé : E_final = E₁ + E_B = -13,60 + 11,50 = -2,10 eV. Or, aucun niveau quantique de l'hydrogène ne possède l'énergie -2,10 eV (les niveaux sont -3,40 eV, puis -1,51 eV). De plus, E_B < 13,60 eV (pas d'ionisation). Le photon B ne peut donc pas être absorbé : l'atome reste dans l'état fondamental et le photon B continue sa route sans encombre (transparence).",
          "Étape 3 : Analyser le photon C (E_C = 15,00 eV) : L'énergie du photon dépasse l'énergie d'ionisation : 15,00 eV > 13,60 eV. L'atome est donc ionisé (H -> H⁺ + e⁻). L'électron extrait s'échappe avec une énergie cinétique : E_c = E_C - E_i = 15,00 - 13,60 = 1,40 eV (soit 2,24.10⁻¹⁹ J)."
        ],
        "conclusion": "Le photon A est absorbé avec excitation au niveau n = 2 ; le photon B n'est pas absorbé (transparence) ; le photon C provoque l'ionisation avec libération d'un électron d'énergie cinétique 1,40 eV."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Synthèse des trois destins possibles d'un photon incident face à un atome",
        "tableData": {
          "headers": [
            "Énergie du photon (E_ph)",
            "Condition mathématique",
            "Comportement de l'atome",
            "État final du système"
          ],
          "rows": [
            [
              "Inférieure à E_i et différente de tout écart",
              "E_ph < E_i et E_ph != E_p - E_n",
              "Aucune interaction (l'atome n'absorbe pas le photon)",
              "L'atome reste dans son état initial, le photon continue sa propagation (transparence)"
            ],
            [
              "Inférieure à E_i mais égale à un écart quantique",
              "E_ph = E_p - E_n (avec E_p < 0)",
              "Absorption par résonance (saut quantique)",
              "Le photon disparaît, l'électron monte sur le niveau excité supérieur E_p"
            ],
            [
              "Supérieure ou égale à l'énergie d'ionisation",
              "E_ph >= E_i",
              "Photo-ionisation systématique (effet photoélectrique atomique)",
              "Le photon disparaît, l'atome devient un ion positif (H⁺), l'électron libre part avec E_c = E_ph - E_i"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Condition de résonance stricte dans les états liés",
          "stepTheme": "Absorption résonante",
          "stepBadge": "Règle de sélection",
          "paragraphText": "Lorsqu'un photon interagit avec un atome sans posséder l'énergie d'ionisation (E < E_i), la transition vers un état lié excité exige une égalité mathématique rigoureuse : E_photon = E_p - E_n. L'atome ne peut pas absorber 'une partie' de l'énergie d'un photon pour laisser repartir un photon affaibli : le photon est un quantum insécable, il est soit absorbé en totalité, soit ignoré. Si l'énergie du photon ne correspond à aucun écart entre niveaux permis, l'atome est rigoureusement transparent à cette radiation.",
          "exercise": {
            "id": "phys_tle_cd_14_p6_s1_qcm",
            "type": "mcq",
            "prompt": "On éclaire des atomes d'hydrogène dans leur état fondamental (E₁ = -13,6 eV) avec un faisceau lumineux monochromatique composé de photons d'énergie E = 11,0 eV. Sachant que les niveaux excités sont E₂ = -3,4 eV (ΔE = 10,2 eV) et E₃ = -1,51 eV (ΔE = 12,09 eV), que se passe-t-il ?",
            "options": [
              "L'atome absorbe 10,2 eV pour monter au niveau 2 et réémet un photon de 0,8 eV",
              "L'atome s'ionise",
              "Les photons de 11,0 eV traversent le gaz sans être absorbés car 11,0 eV ne correspond à aucun saut quantique",
              "L'atome est détruit"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le quantum d'énergie du photon est indivisible. Comme 11,0 eV ne correspond à aucun écart d'énergie entre le fondamental et un état lié (10,2 eV ou 12,09 eV), l'absorption est rigoureusement impossible : le gaz est transparent."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Spectre continu d'ionisation au-delà du seuil E_i",
          "stepTheme": "Ionisation",
          "stepBadge": "Continuum",
          "paragraphText": "Dès que l'énergie du photon incident est supérieure ou égale à l'énergie d'ionisation (E_photon >= E_i), la condition de résonance stricte cesse de s'appliquer. En effet, l'électron éjecté devient une particule libre non confinée dans le puits de potentiel électrostatique du noyau. Son énergie cinétique E_c = (1/2).m_e.v² n'est plus quantifiée : elle peut prendre N'IMPORTE QUELLE valeur continue positive. Par conséquent, TOUT photon dont l'énergie E >= E_i est absorbé par l'atome, sans restriction discrète.",
          "exercise": {
            "id": "phys_tle_cd_14_p6_s2_qcm",
            "type": "mcq",
            "prompt": "Pourquoi un photon d'énergie 17,3 eV peut-il être absorbé par un atome d'hydrogène dans son état fondamental (E_i = 13,6 eV), alors qu'un photon de 11,5 eV ne le peut pas ?",
            "options": [
              "Parce que 17,3 eV est supérieur à l'énergie d'ionisation 13,6 eV : l'électron libre dans l'état final peut emporter n'importe quelle énergie cinétique continue (ici E_c = 3,7 eV)",
              "Parce que 17,3 est un multiple entier de 13,6",
              "Parce que les photons de plus de 15 eV sont des ondes sonores",
              "Parce que l'atome d'hydrogène attire tous les photons impairs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Au-delà de l'énergie d'ionisation (13,6 eV), l'état final est un électron libre dont l'énergie cinétique n'est pas quantifiée et peut varier continûment : E_c = 17,3 - 13,6 = 3,7 eV. L'absorption est donc permise pour toute valeur E >= 13,6 eV."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calcul de la vitesse de l'électron éjecté lors d'une photo-ionisation",
          "stepTheme": "Cinétique de l'électron",
          "stepBadge": "Méthode de calcul",
          "paragraphText": "Pour déterminer la vitesse d'éjection v d'un photoélectron lors de l'ionisation d'un atome par un photon d'énergie E_ph > E_i : 1. Calculer l'énergie cinétique en électronvolts : E_c(eV) = E_ph(eV) - E_i(eV). 2. Convertir E_c en Joules en multipliant par 1,602.10⁻¹⁹ J/eV. 3. Utiliser la relation classique de l'énergie cinétique : E_c = (1/2).m_e.v² (valide tant que E_c << 511 keV, limite non-relativiste). 4. En déduire la vitesse : v = sqrt(2 * E_c / m_e).",
          "exercise": {
            "id": "phys_tle_cd_14_p6_s3_qcm",
            "type": "mcq",
            "prompt": "Un photon d'énergie E_ph = 14,6 eV ionise un atome d'hydrogène fondamental (E_i = 13,6 eV). Quelle est la vitesse de l'électron éjecté ? (m_e = 9,11.10⁻³¹ kg ; 1 eV = 1,602.10⁻¹⁹ J)",
            "options": [
              "5,93.10⁵ m/s",
              "1,87.10⁶ m/s",
              "2,99.10⁸ m/s",
              "4,20.10⁴ m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "E_c = 14,6 - 13,6 = 1,00 eV = 1,602.10⁻¹⁹ J. v = sqrt(2 * E_c / m_e) = sqrt(2 * 1,602.10⁻¹⁹ / 9,11.10⁻³¹) = sqrt(3,517.10¹¹) ≈ 5,93.10⁵ m/s."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Distinction entre absorption de photons et collision avec des électrons (Franck-Hertz)",
          "stepTheme": "Collision inélastique",
          "stepBadge": "Attention piège",
          "paragraphText": "Il existe une différence capitale entre l'interaction d'un atome avec un photon et sa collision avec une particule matérielle chargée (électron incident, expérience de Franck et Hertz) : Un photon doit obligatoirement être absorbé en totalité ou pas du tout (E_photon = ΔE). En revanche, un électron incident accéléré d'énergie cinétique E_{c,inc} peut entrer en collision inélastique avec l'atome, lui céder la quantité exacte ΔE nécessaire à l'excitation, et repartir avec l'énergie résiduelle E_{c,reste} = E_{c,inc} - ΔE. Une collision avec un électron ne requiert donc pas que E_{c,inc} soit exactement égale à ΔE, il suffit simplement que E_{c,inc} >= ΔE !",
          "exercise": {
            "id": "phys_tle_cd_14_p6_s4_qcm",
            "type": "mcq",
            "prompt": "Un électron d'énergie cinétique 11,0 eV bombarde un atome d'hydrogène dans son état fondamental (premier niveau excité à 10,2 eV). Que se passe-t-il lors du choc inélastique ?",
            "options": [
              "Rien, l'électron rebondit élastiquement car 11,0 eV != 10,2 eV",
              "L'atome absorbe 10,2 eV et passe au niveau n = 2, tandis que l'électron incident repart avec une énergie cinétique résiduelle de 0,8 eV",
              "L'atome s'ionise",
              "L'électron incident est absorbé par le noyau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Lors d'une collision particulaire inélastique (expérience de Franck-Hertz), la particule matérielle n'a pas besoin de disparaître : elle peut transférer une part de son énergie (ici 10,2 eV pour exciter l'atome) et conserver le reste sous forme d'énergie cinétique (11,0 - 10,2 = 0,8 eV). C'est impossible pour un photon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Cascade de désexcitations radiatives et émission de fluorescence",
          "stepTheme": "Fluorescence",
          "stepBadge": "Désexcitation",
          "paragraphText": "Lorsqu'un atome est porté dans un état hautement excité (par exemple n = 4), il ne redescend pas nécessairement en une seule étape vers le fondamental. Il peut effectuer une transition directe n = 4 -> 1 en émettant un photon très énergétique UV (Lyman gamma), ou se désexciter en cascade par étapes successives : par exemple n = 4 -> 2 (émission d'un photon visible H_beta de 486 nm) suivi de n = 2 -> 1 (émission d'un photon UV Lyman alpha de 122 nm). C'est le principe de la fluorescence et des tubes fluorescents, où l'absorption d'ultraviolets invisibles est réémise sous forme de lumière visible.",
          "exercise": {
            "id": "phys_tle_cd_14_p6_s5_qcm",
            "type": "mcq",
            "prompt": "Un atome d'hydrogène excité au niveau n = 3 se désexcite en passant par le niveau intermédiaire n = 2 avant de rejoindre le fondamental n = 1. Quels photons sont émis successivement ?",
            "options": [
              "Un photon de 656 nm (rouge visible), puis un photon de 122 nm (UV)",
              "Un seul photon de 102 nm (UV)",
              "Deux photons rouges identiques",
              "Un photon infrarouge puis un photon visible"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La première étape n = 3 -> 2 libère 1,89 eV, ce qui correspond à la raie rouge H_alpha de Balmer à 656 nm. La seconde étape n = 2 -> 1 libère 10,2 eV, correspondant à la raie Lyman alpha à 122 nm dans l'ultraviolet."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Principe du laser et émission stimulée d'Einstein",
          "stepTheme": "Laser",
          "stepBadge": "Technologie quantique",
          "paragraphText": "En 1917, Albert Einstein postule l'existence d'un troisième mécanisme d'interaction en plus de l'absorption et de l'émission spontanée : l'émission stimulée. Lorsqu'un atome excité sur un niveau E₂ est heurté par un photon incident dont l'énergie est exactement h.nu = E₂ - E₁, ce photon ne se fait pas absorber mais force l'atome à se désexciter immédiatement. Il émerge alors deux photons strictement identiques : même fréquence, même direction de propagation, même polarisation et rigoureusement en phase. C'est le fondement du LASER (Light Amplification by Stimulated Emission of Radiation).",
          "exercise": {
            "id": "phys_tle_cd_14_p6_s6_qcm",
            "type": "mcq",
            "prompt": "Quelles sont les caractéristiques remarquables des deux photons résultant d'une émission stimulée dans un milieu amplificateur laser ?",
            "options": [
              "Ils ont des fréquences opposées et partent dans des directions aléatoires",
              "Ils sont rigoureusement identiques : même énergie, même direction, même phase et même polarisation (faisceau cohérent monochromatique)",
              "L'un est un photon visible et l'autre est un photon gamma",
              "L'un des deux photons est absorbé par le miroir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'émission stimulée produit un clone parfait du photon incident : cohérence temporelle et spatiale absolue, monochromatisme parfait et directivité extrême, propriétés fondamentales de la lumière laser."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Bilan global de la spectroscopie atomique et récapitulation",
          "stepTheme": "Synthèse générale",
          "stepBadge": "Récapitulatif",
          "paragraphText": "En résumé, le modèle quantique corpusculaire de la lumière et la structure quantifiée des atomes forment un édifice parfaitement cohérent : l'échange d'énergie s'effectue par paquets insécables (photons h.nu), la conservation de l'énergie gouverne chaque saut quantique entre états discrets (|ΔE| = h.nu), et l'effet photoélectrique ainsi que l'ionisation révèlent la transition continue entre états liés et continuum d'électrons libres.",
          "exercise": {
            "id": "phys_tle_cd_14_p6_s7_qcm",
            "type": "mcq",
            "prompt": "Quelle expérience historique a prouvé pour la première fois que la lumière échangeait son énergie avec les électrons sous forme de corpuscules individuels et non d'ondes continues ?",
            "options": [
              "L'expérience de la double fente d'Young",
              "L'effet photoélectrique interprété par Einstein en 1905",
              "L'expérience de la diffraction par un trou circulaire",
              "La réflexion de la lumière sur un miroir plan"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'effet photoélectrique (prix Nobel d'Albert Einstein en 1921) a démontré sans équivoque que la lumière transfère son énergie par quanta concentrés dans des paquets localisés appelés photons."
          }
        }
      ],
      "exercises": [
        {
          "id": "phys_tle_cd_14_p6_s1_qcm",
          "type": "mcq",
          "prompt": "On éclaire des atomes d'hydrogène dans leur état fondamental (E₁ = -13,6 eV) avec un faisceau lumineux monochromatique composé de photons d'énergie E = 11,0 eV. Sachant que les niveaux excités sont E₂ = -3,4 eV (ΔE = 10,2 eV) et E₃ = -1,51 eV (ΔE = 12,09 eV), que se passe-t-il ?",
          "options": [
            "L'atome absorbe 10,2 eV pour monter au niveau 2 et réémet un photon de 0,8 eV",
            "L'atome s'ionise",
            "Les photons de 11,0 eV traversent le gaz sans être absorbés car 11,0 eV ne correspond à aucun saut quantique",
            "L'atome est détruit"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le quantum d'énergie du photon est indivisible. Comme 11,0 eV ne correspond à aucun écart d'énergie entre le fondamental et un état lié (10,2 eV ou 12,09 eV), l'absorption est rigoureusement impossible : le gaz est transparent."
        },
        {
          "id": "phys_tle_cd_14_p6_s2_qcm",
          "type": "mcq",
          "prompt": "Pourquoi un photon d'énergie 17,3 eV peut-il être absorbé par un atome d'hydrogène dans son état fondamental (E_i = 13,6 eV), alors qu'un photon de 11,5 eV ne le peut pas ?",
          "options": [
            "Parce que 17,3 eV est supérieur à l'énergie d'ionisation 13,6 eV : l'électron libre dans l'état final peut emporter n'importe quelle énergie cinétique continue (ici E_c = 3,7 eV)",
            "Parce que 17,3 est un multiple entier de 13,6",
            "Parce que les photons de plus de 15 eV sont des ondes sonores",
            "Parce que l'atome d'hydrogène attire tous les photons impairs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Au-delà de l'énergie d'ionisation (13,6 eV), l'état final est un électron libre dont l'énergie cinétique n'est pas quantifiée et peut varier continûment : E_c = 17,3 - 13,6 = 3,7 eV. L'absorption est donc permise pour toute valeur E >= 13,6 eV."
        },
        {
          "id": "phys_tle_cd_14_p6_s3_qcm",
          "type": "mcq",
          "prompt": "Un photon d'énergie E_ph = 14,6 eV ionise un atome d'hydrogène fondamental (E_i = 13,6 eV). Quelle est la vitesse de l'électron éjecté ? (m_e = 9,11.10⁻³¹ kg ; 1 eV = 1,602.10⁻¹⁹ J)",
          "options": [
            "5,93.10⁵ m/s",
            "1,87.10⁶ m/s",
            "2,99.10⁸ m/s",
            "4,20.10⁴ m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "E_c = 14,6 - 13,6 = 1,00 eV = 1,602.10⁻¹⁹ J. v = sqrt(2 * E_c / m_e) = sqrt(2 * 1,602.10⁻¹⁹ / 9,11.10⁻³¹) = sqrt(3,517.10¹¹) ≈ 5,93.10⁵ m/s."
        },
        {
          "id": "phys_tle_cd_14_p6_s4_qcm",
          "type": "mcq",
          "prompt": "Un électron d'énergie cinétique 11,0 eV bombarde un atome d'hydrogène dans son état fondamental (premier niveau excité à 10,2 eV). Que se passe-t-il lors du choc inélastique ?",
          "options": [
            "Rien, l'électron rebondit élastiquement car 11,0 eV != 10,2 eV",
            "L'atome absorbe 10,2 eV et passe au niveau n = 2, tandis que l'électron incident repart avec une énergie cinétique résiduelle de 0,8 eV",
            "L'atome s'ionise",
            "L'électron incident est absorbé par le noyau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Lors d'une collision particulaire inélastique (expérience de Franck-Hertz), la particule matérielle n'a pas besoin de disparaître : elle peut transférer une part de son énergie (ici 10,2 eV pour exciter l'atome) et conserver le reste sous forme d'énergie cinétique (11,0 - 10,2 = 0,8 eV). C'est impossible pour un photon."
        },
        {
          "id": "phys_tle_cd_14_p6_s5_qcm",
          "type": "mcq",
          "prompt": "Un atome d'hydrogène excité au niveau n = 3 se désexcite en passant par le niveau intermédiaire n = 2 avant de rejoindre le fondamental n = 1. Quels photons sont émis successivement ?",
          "options": [
            "Un photon de 656 nm (rouge visible), puis un photon de 122 nm (UV)",
            "Un seul photon de 102 nm (UV)",
            "Deux photons rouges identiques",
            "Un photon infrarouge puis un photon visible"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La première étape n = 3 -> 2 libère 1,89 eV, ce qui correspond à la raie rouge H_alpha de Balmer à 656 nm. La seconde étape n = 2 -> 1 libère 10,2 eV, correspondant à la raie Lyman alpha à 122 nm dans l'ultraviolet."
        },
        {
          "id": "phys_tle_cd_14_p6_s6_qcm",
          "type": "mcq",
          "prompt": "Quelles sont les caractéristiques remarquables des deux photons résultant d'une émission stimulée dans un milieu amplificateur laser ?",
          "options": [
            "Ils ont des fréquences opposées et partent dans des directions aléatoires",
            "Ils sont rigoureusement identiques : même énergie, même direction, même phase et même polarisation (faisceau cohérent monochromatique)",
            "L'un est un photon visible et l'autre est un photon gamma",
            "L'un des deux photons est absorbé par le miroir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'émission stimulée produit un clone parfait du photon incident : cohérence temporelle et spatiale absolue, monochromatisme parfait et directivité extrême, propriétés fondamentales de la lumière laser."
        },
        {
          "id": "phys_tle_cd_14_p6_s7_qcm",
          "type": "mcq",
          "prompt": "Quelle expérience historique a prouvé pour la première fois que la lumière échangeait son énergie avec les électrons sous forme de corpuscules individuels et non d'ondes continues ?",
          "options": [
            "L'expérience de la double fente d'Young",
            "L'effet photoélectrique interprété par Einstein en 1905",
            "L'expérience de la diffraction par un trou circulaire",
            "La réflexion de la lumière sur un miroir plan"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'effet photoélectrique (prix Nobel d'Albert Einstein en 1921) a démontré sans équivoque que la lumière transfère son énergie par quanta concentrés dans des paquets localisés appelés photons."
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
