import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : Terminales C, D, E — Thème : Mécanique — Titre : Oscillations mécaniques libres
export const PHYSIQUE_TLE_CD_L04_OSCILLATIONS_MECANIQUES: CurriculumChapter = {
  "id": "terminale_d_physique_l04_oscillations_mecaniques",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [
    "terminale_c"
  ],
  "order": 4,
  "title": "Leçon 4 : Oscillations mécaniques libres",
  "summary": "Étude cinématique, dynamique et énergétique des oscillateurs mécaniques libres : définitions (mouvement oscillatoire, période, fréquence, pulsation propre), pendule élastique horizontal, établissement de l'équation différentielle harmonique x'' + (k/m) x = 0 par le TCI, solution sinusoïdale x(t) = Xm cos(ω₀ t + φ) et détermination des constantes par les conditions initiales, étude énergétique complète (conservation de l'énergie mécanique, échanges entre énergie cinétique et énergie potentielle élastique), analyse des régimes d'amortissement (pseudo-périodique, apériodique, critique), pendule élastique vertical et applications pratiques (suspension automobile).",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : Terminales C, D, E – Thème : Mécanique – Oscillations mécaniques libres)",
  "points": [
    {
      "id": "terminale_d_physique_l04_oscillations_p01",
      "order": 1,
      "title": "Définitions fondamentales des oscillateurs mécaniques libres",
      "summary": "Définition rigoureuse d'un mouvement oscillatoire libre, oscillateur mécanique, position d'équilibre stable, période propre T₀, fréquence propre N₀ et pulsation propre ω₀.",
      "conceptExplanation": "1. Mouvement oscillatoire libre :\nUn mouvement oscillatoire libre d'un solide est un mouvement périodique de va-et-vient qui s'effectue de part et d'autre de sa position d'équilibre stable, lorsqu'il est écarté de cette position puis abandonné à lui-même sans apport continu d'énergie extérieure.\n\n2. Système oscillateur mécanique :\nUn oscillateur mécanique est constitué d'un solide mobile et d'un dispositif de rappel qui exerce une force ramenant constamment le solide vers sa position d'équilibre (exemples : solide relié à un ressort, pendule pesant).\n\n3. Les grandeurs caractéristiques fondamentales :\n- Période propre T₀ : durée nécessaire pour accomplir une oscillation complète (un aller-retour complet). Elle s'exprime en secondes (s).\n- Fréquence propre N₀ (ou f₀) : nombre d'oscillations complètes effectuées par unité de temps (par seconde). Elle s'exprime en hertz (Hz) : N₀ = 1 / T₀.\n- Pulsation propre ω₀ : vitesse angulaire équivalente du cycle, exprimée en radians par seconde (rad/s) : ω₀ = 2π N₀ = 2π / T₀.",
      "keyRule": "Pour tout oscillateur harmonique : T₀ = 1 / N₀ et ω₀ = 2π / T₀ = 2π N₀. L'oscillation est dite libre lorsque le système évolue uniquement sous l'action de ses forces internes après l'impulsion initiale.",
      "formulas": [
        {
          "name": "Relation période - fréquence",
          "formula": "T_0 = \\frac{1}{N_0}",
          "note": "T₀ en secondes (s), N₀ en hertz (Hz)"
        },
        {
          "name": "Pulsation propre",
          "formula": "\\omega_0 = 2\\pi N_0 = \\frac{2\\pi}{T_0}",
          "note": "ω₀ en rad/s"
        }
      ],
      "workedExample": {
        "title": "Identification des paramètres temporels d'un oscillateur",
        "statement": "Un oscillateur mécanique effectue 50 oscillations complètes en un temps Delta t = 25,0 s. Calcule sa période propre T₀, sa fréquence propre N₀ et sa pulsation propre ω₀.",
        "methodSteps": [
          "Étape 1 : Calculer la période T₀ : durée d'une oscillation complète T₀ = Delta t / n = 25,0 / 50 = 0,50 s.",
          "Étape 2 : Calculer la fréquence N₀ : N₀ = 1 / T₀ = 1 / 0,50 = 2,0 Hz (ou n / Delta t = 50 / 25 = 2,0 Hz).",
          "Étape 3 : Calculer la pulsation propre ω₀ : ω₀ = 2π * N₀ = 2 * 3,1416 * 2,0 ≈ 12,57 rad/s."
        ],
        "conclusion": "L'oscillateur réalise 2 cycles complets par seconde, avec une période de 0,50 s et une pulsation de 12,57 rad/s."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Synthèse des grandeurs temporelles et cinématiques de l'oscillateur",
        "tableData": {
          "headers": [
            "Grandeur",
            "Symbole",
            "Définition physique",
            "Unité SI",
            "Formule de liaison"
          ],
          "rows": [
            [
              "Période propre",
              "T₀",
              "Durée d'un aller-retour complet",
              "Seconde (s)",
              "T₀ = 1 / N₀ = 2π / ω₀"
            ],
            [
              "Fréquence propre",
              "N₀ ou f₀",
              "Nombre d'oscillations par seconde",
              "Hertz (Hz)",
              "N₀ = 1 / T₀ = ω₀ / 2π"
            ],
            [
              "Pulsation propre",
              "ω₀",
              "Vitesse de rotation dans l'espace des phases",
              "Radian par seconde (rad/s)",
              "ω₀ = 2π / T₀ = 2π N₀"
            ],
            [
              "Élongation instantanée",
              "x(t)",
              "Position repérée par rapport à l'équilibre O",
              "Mètre (m)",
              "-Xm ≤ x(t) ≤ +Xm"
            ],
            [
              "Amplitude",
              "Xm",
              "Élongation maximale atteinte",
              "Mètre (m)",
              "Xm > 0 constante (si non amorti)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le mouvement oscillatoire libre",
          "stepTheme": "Oscillateur libre",
          "stepBadge": "Système autonome",
          "paragraphText": "Un oscillateur mécanique est dit libre lorsqu'il est écarté de sa position d'équilibre stable puis abandonné à lui-même sans action motrice extérieure continue. Son mouvement est un va-et-vient périodique autour de cette position d'équilibre.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p01_q1",
            "type": "mcq",
            "prompt": "Une balançoire est poussée une seule fois au départ par un enfant puis oscille seule dans l'air. De quel type de mouvement s'agit-il ?",
            "options": [
              "Un mouvement oscillatoire libre",
              "Un mouvement oscillatoire forcé continu",
              "Un mouvement rectiligne uniforme",
              "Un mouvement circulaire uniforme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Puisqu'elle n'est soumise à aucune force motrice périodique extérieure après l'écartement initial, les oscillations sont dites libres."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Période propre T₀ d'un oscillateur",
          "stepTheme": "Périodicité",
          "stepBadge": "Durée d'un va-et-vient",
          "paragraphText": "La période propre T₀ est la plus petite durée au bout de laquelle l'oscillateur se retrouve dans le même état dynamique (même position x et même vecteur-vitesse v). Elle correspond à la durée d'une oscillation complète.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p01_q2",
            "type": "mcq",
            "prompt": "Un pendule met 0,40 s pour aller de sa position extrême gauche à sa position extrême droite. Quelle est sa période propre T₀ ?",
            "options": [
              "T₀ = 0,80 s",
              "T₀ = 0,40 s",
              "T₀ = 0,20 s",
              "T₀ = 1,60 s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Aller de l'extrême gauche à l'extrême droite ne représente qu'une demi-oscillation. L'oscillation complète exige le retour au point de départ, soit T₀ = 2 * 0,40 = 0,80 s."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Fréquence propre N₀",
          "stepTheme": "Cadence temporelle",
          "stepBadge": "N₀ = 1 / T₀",
          "paragraphText": "La fréquence propre N₀ représente le nombre d'oscillations complètes effectuées par seconde. Son unité internationale est le hertz (1 Hz = 1 s⁻¹). Elle est liée à la période propre par N₀ = 1 / T₀.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p01_q3",
            "type": "mcq",
            "prompt": "Un diapason vibre avec une période T₀ = 2,27 * 10⁻³ s. Quelle est la fréquence de la note émise ?",
            "options": [
              "440 Hz (le La 3 de référence)",
              "220 Hz",
              "880 Hz",
              "100 Hz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "N₀ = 1 / T₀ = 1 / (2,2727 * 10⁻³) ≈ 440 Hz."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calcul de la pulsation propre ω₀",
          "stepTheme": "Vitesse angulaire",
          "stepBadge": "ω₀ = 2π / T₀",
          "paragraphText": "La pulsation propre ω₀ permet d'exprimer la rapidité de variation de la phase de l'oscillation. Elle s'exprime en radians par seconde (rad/s) et vérifie la relation fondamentale : ω₀ = 2π / T₀ = 2π N₀.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p01_q4",
            "type": "mcq",
            "prompt": "Un système oscillant possède une période T₀ = 0,314 s (prendre π ≈ 3,14). Quelle est sa pulsation propre ω₀ ?",
            "options": [
              "ω₀ = 20 rad/s",
              "ω₀ = 10 rad/s",
              "ω₀ = 2 rad/s",
              "ω₀ = 62,8 rad/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "ω₀ = 2π / T₀ = (2 * 3,14) / 0,314 = 20 rad/s."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Élongation x(t) et amplitude Xm",
          "stepTheme": "Variables d'état",
          "stepBadge": "|x(t)| ≤ Xm",
          "paragraphText": "L'élongation x(t) est la valeur algébrique de la coordonnée de position du centre d'inertie mesurée par rapport à la position d'équilibre O (en mètres). L'amplitude Xm est la valeur maximale positive atteinte par x(t) : à tout instant, -Xm ≤ x(t) ≤ +Xm.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p01_q5",
            "type": "mcq",
            "prompt": "L'élongation d'un solide est x(t) = 0,05 cos(10 t + π/3) en mètres. Que valent respectivement l'amplitude Xm et la position à t = 0 ?",
            "options": [
              "Xm = 0,05 m et x(0) = 0,025 m",
              "Xm = 0,10 m et x(0) = 0,05 m",
              "Xm = 0,05 m et x(0) = 0 m",
              "Xm = 0,025 m et x(0) = 0,05 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'amplitude est le facteur pré-cosinus Xm = 0,05 m = 5 cm. À t = 0, x(0) = 0,05 * cos(π/3) = 0,05 * 0,5 = 0,025 m = 2,5 cm."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Ne pas confondre oscillation complète et aller simple",
          "stepTheme": "Mesure de période",
          "stepBadge": "1 oscillation = 2 trajets",
          "paragraphText": "Attention lors des comptages chronométriques : le passage d'une extrémité à l'autre ne constitue qu'un demi-cycle. Pour compter une oscillation complète, le mobile doit partir d'une position, atteindre l'extrémité opposée et revenir exactement à sa position de départ avec le même sens de vitesse.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p01_q6",
            "type": "mcq",
            "prompt": "Un capteur optique placé à la position d'équilibre x = 0 enregistre 20 passages successifs du solide dans le même sens en 10 s. Quelle est la période T₀ de l'oscillateur ?",
            "options": [
              "T₀ = 0,50 s",
              "T₀ = 0,25 s",
              "T₀ = 1,00 s",
              "T₀ = 2,00 s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux passages consécutifs dans le MÊME SENS définissent exactement une oscillation complète. Pour 20 intervalles de ce type en 10 s : T₀ = 10 / 20 = 0,50 s."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Analogies entre oscillateurs mécaniques",
          "stepTheme": "Généralité des oscillateurs",
          "stepBadge": "Force de rappel",
          "paragraphText": "Qu'il s'agisse d'un ressort élastique (force de rappel proportionnelle à l'élongation F = -k x), d'un pendule pesant aux petites oscillations (rappel gravitationnel proportionnel à l'angle θ), ou d'un liquide oscillant dans un tube en U, tout système ramené vers son équilibre par une force proportionnelle à l'écartement décrit des oscillations harmoniques.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p01_q7",
            "type": "mcq",
            "prompt": "Quelle est la caractéristique physique indispensable commune à tous les oscillateurs mécaniques non amortis ?",
            "options": [
              "Une force de rappel dirigée constamment vers la position d'équilibre stable",
              "Une force de frottement augmentant avec la vitesse",
              "Une masse qui diminue au cours du temps",
              "Un champ magnétique perpendiculaire obligatoire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La force de rappel ramenant le système vers sa position d'équilibre stable est la condition sine qua non de l'oscillation mécanique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l04_oscillations_p01_q1",
          "type": "mcq",
          "prompt": "Une balançoire est poussée une seule fois au départ par un enfant puis oscille seule dans l'air. De quel type de mouvement s'agit-il ?",
          "options": [
            "Un mouvement oscillatoire libre",
            "Un mouvement oscillatoire forcé continu",
            "Un mouvement rectiligne uniforme",
            "Un mouvement circulaire uniforme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Puisqu'elle n'est soumise à aucune force motrice périodique extérieure après l'écartement initial, les oscillations sont dites libres."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p01_q2",
          "type": "mcq",
          "prompt": "Un pendule met 0,40 s pour aller de sa position extrême gauche à sa position extrême droite. Quelle est sa période propre T₀ ?",
          "options": [
            "T₀ = 0,80 s",
            "T₀ = 0,40 s",
            "T₀ = 0,20 s",
            "T₀ = 1,60 s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Aller de l'extrême gauche à l'extrême droite ne représente qu'une demi-oscillation. L'oscillation complète exige le retour au point de départ, soit T₀ = 2 * 0,40 = 0,80 s."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p01_q3",
          "type": "mcq",
          "prompt": "Un diapason vibre avec une période T₀ = 2,27 * 10⁻³ s. Quelle est la fréquence de la note émise ?",
          "options": [
            "440 Hz (le La 3 de référence)",
            "220 Hz",
            "880 Hz",
            "100 Hz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "N₀ = 1 / T₀ = 1 / (2,2727 * 10⁻³) ≈ 440 Hz."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p01_q4",
          "type": "mcq",
          "prompt": "Un système oscillant possède une période T₀ = 0,314 s (prendre π ≈ 3,14). Quelle est sa pulsation propre ω₀ ?",
          "options": [
            "ω₀ = 20 rad/s",
            "ω₀ = 10 rad/s",
            "ω₀ = 2 rad/s",
            "ω₀ = 62,8 rad/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "ω₀ = 2π / T₀ = (2 * 3,14) / 0,314 = 20 rad/s."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p01_q5",
          "type": "mcq",
          "prompt": "L'élongation d'un solide est x(t) = 0,05 cos(10 t + π/3) en mètres. Que valent respectivement l'amplitude Xm et la position à t = 0 ?",
          "options": [
            "Xm = 0,05 m et x(0) = 0,025 m",
            "Xm = 0,10 m et x(0) = 0,05 m",
            "Xm = 0,05 m et x(0) = 0 m",
            "Xm = 0,025 m et x(0) = 0,05 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'amplitude est le facteur pré-cosinus Xm = 0,05 m = 5 cm. À t = 0, x(0) = 0,05 * cos(π/3) = 0,05 * 0,5 = 0,025 m = 2,5 cm."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p01_q6",
          "type": "mcq",
          "prompt": "Un capteur optique placé à la position d'équilibre x = 0 enregistre 20 passages successifs du solide dans le même sens en 10 s. Quelle est la période T₀ de l'oscillateur ?",
          "options": [
            "T₀ = 0,50 s",
            "T₀ = 0,25 s",
            "T₀ = 1,00 s",
            "T₀ = 2,00 s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux passages consécutifs dans le MÊME SENS définissent exactement une oscillation complète. Pour 20 intervalles de ce type en 10 s : T₀ = 10 / 20 = 0,50 s."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p01_q7",
          "type": "mcq",
          "prompt": "Quelle est la caractéristique physique indispensable commune à tous les oscillateurs mécaniques non amortis ?",
          "options": [
            "Une force de rappel dirigée constamment vers la position d'équilibre stable",
            "Une force de frottement augmentant avec la vitesse",
            "Une masse qui diminue au cours du temps",
            "Un champ magnétique perpendiculaire obligatoire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La force de rappel ramenant le système vers sa position d'équilibre stable est la condition sine qua non de l'oscillation mécanique."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l04_oscillations_p02",
      "order": 2,
      "title": "Le pendule élastique horizontal : bilan dynamique et équation différentielle",
      "summary": "Constitution du pendule élastique horizontal, force de rappel du ressort T = -k x i, bilan des forces extérieures et démonstration de l'équation différentielle harmonique m x'' + k x = 0.",
      "conceptExplanation": "1. Constitution du pendule élastique horizontal :\nLe pendule élastique horizontal est formé d'un solide de masse m pouvant glisser sans frottement le long d'une tige horizontale d'axe (Ox), relié à un ressort à spires non jointives, de masse négligeable, de longueur à vide ℓ₀ et de constante de raideur k. L'origine O du repère (O, i) coïncide avec la position du centre d'inertie G à l'équilibre (ressort ni tendu ni comprimé).\n\n2. Force de rappel du ressort :\nLorsque le solide est à l'abscisse x(t) :\n- Si x > 0 (ressort allongé), le ressort tire vers la gauche : T = -k x i ;\n- Si x < 0 (ressort comprimé), le ressort pousse vers la droite : T = -k x i.\nDans tous les cas, la tension du ressort s'exprime vectoriellement par T = -k x i. Elle s'oppose systématiquement à l'écartement x.\n\n3. Bilan des forces extérieures appliquées :\n- Le poids du solide : P = -m g j ;\n- La réaction normale de la tige : R = R j ;\n- La force de rappel élastique : T = -k x i.\nComme le mouvement est purement horizontal sans frottement : P + R = 0 (les deux forces verticales se compensent rigoureusement).\n\n4. Application du théorème du centre d'inertie (TCI) :\nDans le référentiel terrestre supposé galiléen :\nSomme F_ext = P + R + T = m a => 0 + (-k x i) = m x'' i.\nPar projection sur l'axe (Ox) :\n-k x = m x''  <=>  m x'' + k x = 0  <=>  x'' + (k / m) x = 0.\nC'est l'équation différentielle canonique d'un oscillateur harmonique linéaire non amorti, souvent notée x'' + ω₀² x = 0 avec ω₀² = k / m.",
      "keyRule": "L'équation différentielle du pendule élastique horizontal sans frottement est x'' + (k/m) x = 0 ou x'' + ω₀² x = 0, avec la pulsation propre ω₀ = √(k / m).",
      "formulas": [
        {
          "name": "Force de rappel élastique",
          "formula": "\\vec{T} = -k\\,x\\,\\vec{i}",
          "note": "k en N/m, x en mètres (m)"
        },
        {
          "name": "Équation différentielle du pendule élastique",
          "formula": "m\\,\\ddot{x} + k\\,x = 0 \\iff \\ddot{x} + \\frac{k}{m}\\,x = 0 \\iff \\ddot{x} + \\omega_0^2\\,x = 0",
          "note": "Sans frottement"
        },
        {
          "name": "Pulsation propre du pendule élastique",
          "formula": "\\omega_0 = \\sqrt{\\frac{k}{m}}",
          "note": "k raideur en N/m, m masse en kg"
        }
      ],
      "workedExample": {
        "title": "Établissement dynamique de l'accélération à l'élongation maximale",
        "statement": "Un solide de masse m = 200 g est attaché à un ressort de raideur k = 50 N/m sur table horizontale sans frottement. On écarte le solide de Xm = 4,0 cm vers la droite et on le lâche. Calcule la force de rappel exercée par le ressort et l'accélération initiale du solide à cet instant.",
        "methodSteps": [
          "Étape 1 : Exprimer la force de rappel pour x = +0,04 m : T = -k * x = -50 * 0,04 = -2,0 N (dirigée vers la gauche).",
          "Étape 2 : Appliquer la deuxième loi de Newton sur l'axe (Ox) : m * a_x = T => a_x = T / m.",
          "Étape 3 : Calculer numériquement l'accélération : a_x = -2,0 / 0,200 = -10 m/s².",
          "Étape 4 : Vérification par ω₀² : ω₀² = k / m = 50 / 0,2 = 250 rad²/s² => a_x = -ω₀² * x = -250 * 0,04 = -10 m/s²."
        ],
        "conclusion": "À l'élongation maximale, le solide subit une force de rappel de 2,0 N et une accélération de 10 m/s² orientée vers l'équilibre."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Bilan des forces et projection sur l'axe horizontal (Ox)",
        "tableData": {
          "headers": [
            "Force extérieure",
            "Point d'application",
            "Composante selon (Ox)",
            "Composante selon (Oy)",
            "Rôle physique"
          ],
          "rows": [
            [
              "Poids P",
              "Centre d'inertie G",
              "Px = 0",
              "Py = -m g",
              "Attraction terrestre vers le bas"
            ],
            [
              "Réaction du support R",
              "Surface de contact",
              "Rx = 0 (sans frottement)",
              "Ry = +R = m g",
              "Compense exactement le poids : P + R = 0"
            ],
            [
              "Tension du ressort T",
              "Point d'attache",
              "Tx = -k x",
              "Ty = 0",
              "Force de rappel centripète ramenant G vers O"
            ],
            [
              "Résultante Somme F_ext",
              "Centre d'inertie G",
              "-k x",
              "0",
              "Provoque l'accélération instantanée x''"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La raideur k d'un ressort",
          "stepTheme": "Propriété élastique",
          "stepBadge": "k en N/m",
          "paragraphText": "La constante de raideur k caractérise la rigidité du ressort : c'est la force qu'il faut exercer pour allonger ou comprimer le ressort d'un mètre. Elle s'exprime en newtons par mètre (N/m ou N.m⁻¹). Plus k est élevé, plus le ressort est dur à déformer.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p02_q1",
            "type": "mcq",
            "prompt": "Une masse suspendue de 500 g provoque un allongement à l'équilibre de Delta ℓ = 5,0 cm sur un ressort vertical (g = 10 m/s²). Quelle est la raideur k de ce ressort ?",
            "options": [
              "k = 100 N/m",
              "k = 10 N/m",
              "k = 50 N/m",
              "k = 250 N/m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À l'équilibre : k * Delta ℓ = m * g => k = (m * g) / Delta ℓ = (0,500 * 10) / 0,050 = 5 / 0,050 = 100 N/m."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Expression vectorielle de la force de rappel",
          "stepTheme": "Loi de Hooke",
          "stepBadge": "T = -k x i",
          "paragraphText": "La force exercée par le ressort sur le solide est une force de rappel proportionnelle à l'élongation algébrique x et de sens constamment opposé : T = -k x i. Si x > 0, T est orientée vers les x négatifs ; si x < 0, T est orientée vers les x positifs.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p02_q2",
            "type": "mcq",
            "prompt": "Le centre d'inertie d'un solide est à l'abscisse x = -3 cm sur un ressort de raideur k = 80 N/m. Quelles sont la norme et la direction de la force exercée par le ressort ?",
            "options": [
              "F = 2,4 N orientée vers la droite (vers l'équilibre)",
              "F = 2,4 N orientée vers la gauche (dans le sens de la compression)",
              "F = 0,24 N vers la gauche",
              "F = 240 N vers le bas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Tx = -k * x = -80 * (-0,03) = +2,4 N. Le signe positif indique que la force est dirigée vers la droite (sens de +i), ramenant le solide vers la position d'équilibre O."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Application du TCI pour établir l'équation différentielle",
          "stepTheme": "Démonstration TCI",
          "stepBadge": "m x'' + k x = 0",
          "paragraphText": "En écrivant la 2e loi de Newton P + R + T = m a dans le repère galiléen (O, i, j) et en projetant sur l'axe (Ox) où Px = 0 et Rx = 0 : Tx = m ax => -k x = m x''. En transposant tous les termes dans le membre de gauche, on obtient m x'' + k x = 0, soit x'' + (k/m) x = 0.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p02_q3",
            "type": "mcq",
            "prompt": "Un chariot de masse m = 0,25 kg est attaché à un ressort de raideur k = 100 N/m sans frottement. Quelle est l'équation différentielle vérifiée par son élongation x(t) ?",
            "options": [
              "x'' + 400 x = 0",
              "x'' + 25 x = 0",
              "x'' + 0,0025 x = 0",
              "x'' - 400 x = 0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "x'' + (k / m) x = 0 avec k / m = 100 / 0,25 = 400 s⁻². L'équation différentielle est donc x'' + 400 x = 0."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La pulsation propre en fonction des paramètres constitutifs",
          "stepTheme": "Identification de ω₀",
          "stepBadge": "ω₀ = √(k / m)",
          "paragraphText": "En posant ω₀² = k / m, l'équation différentielle prend la forme canonique x'' + ω₀² x = 0. La pulsation propre ω₀ = √(k / m) dépend exclusivement de la raideur k du ressort et de la masse m du solide : elle ne dépend jamais de l'amplitude du lancer.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p02_q4",
            "type": "mcq",
            "prompt": "Si on quadruple la masse du solide (m' = 4 m) sans changer de ressort, que devient la pulsation propre ω₀' de l'oscillateur ?",
            "options": [
              "Elle est divisée par 2",
              "Elle est multipliée par 2",
              "Elle est divisée par 4",
              "Elle reste inchangée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "ω₀ = √(k / m). Si m devient 4 m, ω₀' = √(k / (4m)) = (1/2) √(k / m) = ω₀ / 2 : la pulsation propre est divisée par 2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Période propre du pendule élastique T₀ = 2π √(m / k)",
          "stepTheme": "Période analytique",
          "stepBadge": "T₀ = 2π √(m/k)",
          "paragraphText": "Comme T₀ = 2π / ω₀, on en déduit la relation fondamentale de la période propre du pendule élastique : T₀ = 2π √(m / k). La période est proportionnelle à la racine carrée de la masse et inversement proportionnelle à la racine carrée de la raideur.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p02_q5",
            "type": "mcq",
            "prompt": "Un solide de masse m = 0,10 kg relié à un ressort de raideur k = 10 N/m oscille sans frottement. Quelle est sa période propre T₀ (prendre π² ≈ 10) ?",
            "options": [
              "T₀ = 0,63 s (environ 2π / 10 s)",
              "T₀ = 2,0 s",
              "T₀ = 0,10 s",
              "T₀ = 6,28 s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "ω₀ = √(k / m) = √(10 / 0,10) = √100 = 10 rad/s. D'où T₀ = 2π / ω₀ = 2π / 10 ≈ 0,628 s."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : L'isochronisme des petites et grandes oscillations élastiques",
          "stepTheme": "Isochronisme",
          "stepBadge": "T₀ indépendant de Xm",
          "paragraphText": "Dans le cadre de la loi de Hooke (ressort linéaire idéal), la période propre T₀ ne dépend aucunement de l'amplitude Xm des oscillations. Que l'on écarte le ressort de 1 cm ou de 10 cm, la durée de l'aller-retour reste strictement identique : c'est la propriété d'isochronisme des oscillations.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p02_q6",
            "type": "mcq",
            "prompt": "Un élève mesure une période T₀ = 1,2 s lorsqu'il écarte le ressort de 2 cm. S'il l'écarte de 6 cm dans les mêmes conditions, quelle sera la nouvelle période mesurée ?",
            "options": [
              "Exactement 1,2 s",
              "3,6 s (trois fois plus)",
              "0,4 s (trois fois moins)",
              "2,4 s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La période propre T₀ = 2π √(m/k) dépend uniquement de m et k, et est totalement indépendante de l'amplitude initiale Xm."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Détermination expérimentale de la raideur k par mesure de période",
          "stepTheme": "Méthode expérimentale",
          "stepBadge": "k = 4π² m / T₀²",
          "paragraphText": "En chronométrant la période T₀ pour une masse m connue, la formule T₀² = 4π² (m / k) permet de déterminer avec une haute précision la raideur du ressort : k = 4π² m / T₀². En traçant T₀² = f(m), on obtient une droite linéaire dont la pente vaut 4π² / k.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p02_q7",
            "type": "mcq",
            "prompt": "Une masse m = 250 g suspendue oscille avec une période T₀ = 0,50 s (prendre π² = 10). Quelle est la valeur de la raideur k calculée ?",
            "options": [
              "k = 40 N/m",
              "k = 25 N/m",
              "k = 100 N/m",
              "k = 4 N/m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "k = 4π² m / T₀² = (4 * 10 * 0,250) / (0,50)² = 10 / 0,25 = 40 N/m."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l04_oscillations_p02_q1",
          "type": "mcq",
          "prompt": "Une masse suspendue de 500 g provoque un allongement à l'équilibre de Delta ℓ = 5,0 cm sur un ressort vertical (g = 10 m/s²). Quelle est la raideur k de ce ressort ?",
          "options": [
            "k = 100 N/m",
            "k = 10 N/m",
            "k = 50 N/m",
            "k = 250 N/m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À l'équilibre : k * Delta ℓ = m * g => k = (m * g) / Delta ℓ = (0,500 * 10) / 0,050 = 5 / 0,050 = 100 N/m."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p02_q2",
          "type": "mcq",
          "prompt": "Le centre d'inertie d'un solide est à l'abscisse x = -3 cm sur un ressort de raideur k = 80 N/m. Quelles sont la norme et la direction de la force exercée par le ressort ?",
          "options": [
            "F = 2,4 N orientée vers la droite (vers l'équilibre)",
            "F = 2,4 N orientée vers la gauche (dans le sens de la compression)",
            "F = 0,24 N vers la gauche",
            "F = 240 N vers le bas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tx = -k * x = -80 * (-0,03) = +2,4 N. Le signe positif indique que la force est dirigée vers la droite (sens de +i), ramenant le solide vers la position d'équilibre O."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p02_q3",
          "type": "mcq",
          "prompt": "Un chariot de masse m = 0,25 kg est attaché à un ressort de raideur k = 100 N/m sans frottement. Quelle est l'équation différentielle vérifiée par son élongation x(t) ?",
          "options": [
            "x'' + 400 x = 0",
            "x'' + 25 x = 0",
            "x'' + 0,0025 x = 0",
            "x'' - 400 x = 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "x'' + (k / m) x = 0 avec k / m = 100 / 0,25 = 400 s⁻². L'équation différentielle est donc x'' + 400 x = 0."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p02_q4",
          "type": "mcq",
          "prompt": "Si on quadruple la masse du solide (m' = 4 m) sans changer de ressort, que devient la pulsation propre ω₀' de l'oscillateur ?",
          "options": [
            "Elle est divisée par 2",
            "Elle est multipliée par 2",
            "Elle est divisée par 4",
            "Elle reste inchangée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "ω₀ = √(k / m). Si m devient 4 m, ω₀' = √(k / (4m)) = (1/2) √(k / m) = ω₀ / 2 : la pulsation propre est divisée par 2."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p02_q5",
          "type": "mcq",
          "prompt": "Un solide de masse m = 0,10 kg relié à un ressort de raideur k = 10 N/m oscille sans frottement. Quelle est sa période propre T₀ (prendre π² ≈ 10) ?",
          "options": [
            "T₀ = 0,63 s (environ 2π / 10 s)",
            "T₀ = 2,0 s",
            "T₀ = 0,10 s",
            "T₀ = 6,28 s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "ω₀ = √(k / m) = √(10 / 0,10) = √100 = 10 rad/s. D'où T₀ = 2π / ω₀ = 2π / 10 ≈ 0,628 s."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p02_q6",
          "type": "mcq",
          "prompt": "Un élève mesure une période T₀ = 1,2 s lorsqu'il écarte le ressort de 2 cm. S'il l'écarte de 6 cm dans les mêmes conditions, quelle sera la nouvelle période mesurée ?",
          "options": [
            "Exactement 1,2 s",
            "3,6 s (trois fois plus)",
            "0,4 s (trois fois moins)",
            "2,4 s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La période propre T₀ = 2π √(m/k) dépend uniquement de m et k, et est totalement indépendante de l'amplitude initiale Xm."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p02_q7",
          "type": "mcq",
          "prompt": "Une masse m = 250 g suspendue oscille avec une période T₀ = 0,50 s (prendre π² = 10). Quelle est la valeur de la raideur k calculée ?",
          "options": [
            "k = 40 N/m",
            "k = 25 N/m",
            "k = 100 N/m",
            "k = 4 N/m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "k = 4π² m / T₀² = (4 * 10 * 0,250) / (0,50)² = 10 / 0,25 = 40 N/m."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l04_oscillations_p03",
      "order": 3,
      "title": "Solution sinusoïdale, pulsation propre et conditions initiales",
      "summary": "Forme générale de la solution x(t) = Xm cos(ω₀ t + φ), dérivée première v(t), quadrature de phase entre élongation et vitesse, et protocole rigoureux de détermination de l'amplitude Xm et de la phase initiale φ.",
      "conceptExplanation": "1. Forme générale de la solution :\nL'équation différentielle x'' + ω₀² x = 0 admet pour solution générale une fonction sinusoïdale du temps de la forme :\nx(t) = Xm cos(ω₀ t + φ)  ou  x(t) = Xm sin(ω₀ t + φ').\n- Xm : amplitude du mouvement (élongation maximale en mètres, Xm > 0) ;\n- ω₀ t + φ : phase instantanée du mouvement à la date t (en radians) ;\n- φ : phase à l'origine des dates (à t = 0, en radians, comprise entre -π et +π) ;\n- ω₀ : pulsation propre égale à √(k / m).\n\n2. Vecteur-vitesse et déphasage :\nLa vitesse instantanée s'obtient en dérivant l'élongation par rapport au temps :\nv(t) = x'(t) = -ω₀ Xm sin(ω₀ t + φ) = ω₀ Xm cos(ω₀ t + φ + π/2).\n- La vitesse est sinusoïdale de même pulsation ω₀ que l'élongation ;\n- L'amplitude de la vitesse (vitesse maximale) vaut Vm = ω₀ Xm ;\n- La vitesse est en quadrature avance de phase de π/2 par rapport à l'élongation : lorsque le solide passe par la position d'équilibre (x = 0), sa vitesse est maximale (|v| = Vm) ; lorsqu'il atteint les extrémités (x = ±Xm), sa vitesse s'annule instantanément (v = 0).\n\n3. Détermination des constantes Xm et φ par les conditions initiales :\nÀ t = 0 s, soient x(0) = x₀ et v(0) = v₀ :\n- x(0) = Xm cos φ = x₀ ;\n- v(0) = -ω₀ Xm sin φ = v₀ => sin φ = -v₀ / (ω₀ Xm).\nEn divisant membre à membre : tan φ = -v₀ / (ω₀ x₀).\nEn élevant au carré et en sommant : cos²φ + sin²φ = 1 => (x₀ / Xm)² + (v₀ / (ω₀ Xm))² = 1, d'où l'amplitude :\nXm = √[x₀² + (v₀ / ω₀)²].\nLe signe de cos φ et celui de sin φ fixent le quadrant unique de φ.",
      "keyRule": "L'élongation est x(t) = Xm cos(ω₀ t + φ) et la vitesse est v(t) = -ω₀ Xm sin(ω₀ t + φ). À l'origine : Xm = √[x₀² + (v₀/ω₀)²] et tan φ = -v₀ / (ω₀ x₀). La vitesse est maximale à l'équilibre et nulle aux extrémités.",
      "formulas": [
        {
          "name": "Équation horaire de l'élongation",
          "formula": "x(t) = X_m\\cos(\\omega_0\\,t + \\varphi)",
          "note": "Xm en m, ω₀ en rad/s, φ en rad"
        },
        {
          "name": "Équation horaire de la vitesse",
          "formula": "v(t) = \\dot{x}(t) = -\\omega_0\\,X_m\\sin(\\omega_0\\,t + \\varphi)",
          "note": "Vitesse maximale Vm = ω₀ Xm"
        },
        {
          "name": "Amplitude en fonction des conditions initiales",
          "formula": "X_m = \\sqrt{x_0^2 + \\left(\\frac{v_0}{\\omega_0}\\right)^2}",
          "note": "Pour x(0) = x₀ et v(0) = v₀"
        }
      ],
      "workedExample": {
        "title": "Calcul complet de l'équation horaire à partir des conditions initiales",
        "statement": "Un pendule élastique horizontal de masse m = 100 g et de raideur k = 10 N/m est écarté à x₀ = 2,0 cm puis lancé vers les x négatifs à la vitesse v₀ = -0,20 m/s à l'instant t = 0. Établis l'expression numérique de x(t).",
        "methodSteps": [
          "Étape 1 : Calculer la pulsation propre : ω₀ = √(k / m) = √(10 / 0,10) = 10 rad/s.",
          "Étape 2 : Calculer l'amplitude Xm : Xm = √[x₀² + (v₀/ω₀)²] = √[(0,02)² + (-0,20/10)²] = √[0,0004 + 0,0004] = √(0,0008) ≈ 0,0283 m = 2,83 cm.",
          "Étape 3 : Déterminer la phase initiale φ : cos φ = x₀ / Xm = 0,02 / (0,02 √2) = 1 / √2 = √2 / 2 > 0.",
          "sin φ = -v₀ / (ω₀ Xm) = -(-0,20) / (10 * 0,02 √2) = 0,20 / (0,20 √2) = 1 / √2 = √2 / 2 > 0.",
          "Comme cos φ > 0 et sin φ > 0, on en déduit φ = +π / 4 rad.",
          "Conclusion : L'équation horaire est x(t) = 2,83 * 10⁻² cos(10 t + π/4) en mètres."
        ],
        "conclusion": "L'élongation oscille avec une amplitude de 2,83 cm, une pulsation de 10 rad/s et un déphasage initial de π/4 rad."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau de correspondance entre élongation, vitesse et accélération",
        "tableData": {
          "headers": [
            "Position du mobile",
            "Élongation x(t)",
            "Vitesse v(t)",
            "Accélération a(t)",
            "État dynamique"
          ],
          "rows": [
            [
              "Extrémité droite (+Xm)",
              "x = +Xm",
              "v = 0",
              "a = -ω₀² Xm (minimale)",
              "Arrêt instantané et rebroussement vers la gauche"
            ],
            [
              "Équilibre vers la gauche (v < 0)",
              "x = 0",
              "v = -Vm = -ω₀ Xm",
              "a = 0",
              "Vitesse algébrique minimale (norme maximale)"
            ],
            [
              "Extrémité gauche (-Xm)",
              "x = -Xm",
              "v = 0",
              "a = +ω₀² Xm (maximale)",
              "Arrêt instantané et rebroussement vers la droite"
            ],
            [
              "Équilibre vers la droite (v > 0)",
              "x = 0",
              "v = +Vm = +ω₀ Xm",
              "a = 0",
              "Vitesse algébrique maximale (force nulle)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Forme de la solution sinusoïdale",
          "stepTheme": "Fonction horaire",
          "stepBadge": "x(t) = Xm cos(ω₀ t + φ)",
          "paragraphText": "La solution mathématique de l'équation différentielle x'' + ω₀² x = 0 est une fonction sinusoïdale de période T₀ = 2π / ω₀. Elle s'écrit x(t) = Xm cos(ω₀ t + φ). Sa dérivée seconde x''(t) = -ω₀² Xm cos(ω₀ t + φ) = -ω₀² x(t) vérifie bien x'' + ω₀² x = 0 à tout instant.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p03_q1",
            "type": "mcq",
            "prompt": "Quelle est la dérivée seconde par rapport au temps de la fonction x(t) = Xm cos(ω₀ t + φ) ?",
            "options": [
              "x''(t) = -ω₀² x(t)",
              "x''(t) = +ω₀² x(t)",
              "x''(t) = -ω₀ x(t)",
              "x''(t) = 0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivée première est x' = -ω₀ Xm sin(ω₀ t + φ), et sa dérivée seconde est x'' = -ω₀² Xm cos(ω₀ t + φ) = -ω₀² x(t)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Vitesse maximale Vm = ω₀ Xm",
          "stepTheme": "Vitesse de crête",
          "stepBadge": "Vm = ω₀ Xm",
          "paragraphText": "Comme v(t) = -ω₀ Xm sin(ω₀ t + φ), la valeur maximale de la vitesse en valeur absolue est atteinte lorsque |sin(ω₀ t + φ)| = 1. Cette vitesse maximale vaut Vm = ω₀ Xm et se produit exactement au passage par la position d'équilibre x = 0.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p03_q2",
            "type": "mcq",
            "prompt": "Un pendule élastique d'amplitude Xm = 5,0 cm oscille à la pulsation propre ω₀ = 20 rad/s. Quelle est sa vitesse maximale lors du passage à l'équilibre ?",
            "options": [
              "Vm = 1,0 m/s",
              "Vm = 0,25 m/s",
              "Vm = 4,0 m/s",
              "Vm = 100 m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Vm = ω₀ * Xm = 20 rad/s * 0,05 m = 1,0 m/s."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Quadrature de phase entre position et vitesse",
          "stepTheme": "Déphasage π/2",
          "stepBadge": "Avance de phase",
          "paragraphText": "La vitesse v(t) est déphasée de +π/2 rad (en quadrature avance) par rapport à l'élongation x(t). Sur les courbes temporelles, les zéros de la fonction x(t) correspondent exactement aux extrema de v(t), et inversement, les extrema de x(t) correspondent aux passages par zéro de v(t).",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p03_q3",
            "type": "mcq",
            "prompt": "Lorsque l'élongation du solide est maximale (x = +Xm), que vaut instantanément sa vitesse v ?",
            "options": [
              "v = 0 m/s (le mobile s'arrête pour rebrousser chemin)",
              "v est maximale positive",
              "v est maximale négative",
              "v = Vm / 2"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Aux bornes de la trajectoire (x = ±Xm), toute l'énergie est sous forme potentielle : le solide s'immobilise un instant pour changer de sens, sa vitesse est donc rigoureusement nulle."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Cas d'un lâcher sans vitesse initiale (v₀ = 0)",
          "stepTheme": "Condition standard",
          "stepBadge": "v₀ = 0 => Xm = |x₀|",
          "paragraphText": "Si le solide est écarté à l'abscisse x₀ > 0 puis lâché sans vitesse initiale (v₀ = 0 à t = 0) :\nx(0) = Xm cos φ = x₀  et  v(0) = -ω₀ Xm sin φ = 0 => sin φ = 0 => φ = 0 ou π.\nComme x₀ > 0 et Xm > 0, cos φ > 0 impose φ = 0. L'amplitude vaut directement Xm = x₀ et l'équation horaire devient simplement x(t) = Xm cos(ω₀ t).",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p03_q4",
            "type": "mcq",
            "prompt": "On écarte un solide de x₀ = +15 cm et on le libère sans vitesse initiale à t = 0. Que valent l'amplitude Xm et la phase initiale φ ?",
            "options": [
              "Xm = 0,15 m et φ = 0 rad",
              "Xm = 0,15 m et φ = π rad",
              "Xm = 0,30 m et φ = π/2 rad",
              "Xm = 0,075 m et φ = 0 rad"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme v₀ = 0 et x₀ > 0 : Xm = x₀ = 0,15 m et cos φ = +1 => φ = 0 rad."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Cas d'un passage à l'équilibre à t = 0 (x₀ = 0)",
          "stepTheme": "Passage par zéro",
          "stepBadge": "x₀ = 0 => φ = ±π/2",
          "paragraphText": "Si l'origine des dates t = 0 est choisie au passage par la position d'équilibre (x₀ = 0) avec une vitesse initiale v₀ :\nx(0) = Xm cos φ = 0 => φ = +π/2 ou -π/2.\nSi le mobile se déplace dans le sens négatif (v₀ < 0) : v(0) = -ω₀ Xm sin φ < 0 => sin φ > 0 => φ = +π/2 rad. L'amplitude vaut Xm = |v₀| / ω₀.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p03_q5",
            "type": "mcq",
            "prompt": "Un solide passe par l'équilibre x₀ = 0 à t = 0 avec une vitesse v₀ = -0,50 m/s. Sachant que ω₀ = 10 rad/s, quelle est l'équation horaire x(t) ?",
            "options": [
              "x(t) = 0,05 cos(10 t + π/2)",
              "x(t) = 0,05 cos(10 t)",
              "x(t) = 0,50 cos(10 t - π/2)",
              "x(t) = 0,05 cos(10 t + π)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Xm = |v₀| / ω₀ = 0,50 / 10 = 0,05 m. cos φ = 0 et sin φ = -v₀ / (ω₀ Xm) = -(-0,5) / (10 * 0,05) = +1 => φ = +π/2 rad."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Signe de la vitesse et sélection du quadrant de φ",
          "stepTheme": "Cercle trigonométrique",
          "stepBadge": "Examiner cos et sin",
          "paragraphText": "Ne déterminez jamais la phase initiale φ uniquement à partir de la fonction tangente tan φ = -v₀ / (ω₀ x₀), car la tangente est de période π et donne deux angles possibles opposés. Vous devez impérativement inspecter simultanément le signe de cos φ = x₀ / Xm et le signe de sin φ = -v₀ / (ω₀ Xm) pour localiser sans ambiguïté le quadrant sur le cercle trigonométrique.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p03_q6",
            "type": "mcq",
            "prompt": "Si x₀ = -0,10 m (cos φ < 0) et v₀ = 0 (sin φ = 0), quelle est la valeur correcte de la phase initiale φ ?",
            "options": [
              "φ = π rad",
              "φ = 0 rad",
              "φ = π/2 rad",
              "φ = -π/2 rad"
            ],
            "correctAnswerIndex": 0,
            "explanation": "cos φ = x₀ / Xm = -0,10 / 0,10 = -1 => φ = π rad (ou 180°)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Accélération instantanée et force de rappel",
          "stepTheme": "Lien dynamique",
          "stepBadge": "a(t) = -ω₀² x(t)",
          "paragraphText": "L'accélération instantanée du solide est donnée par a(t) = x''(t) = -ω₀² x(t). Cela montre que l'accélération est toujours proportionnelle à l'élongation et de signe opposé : lorsque le solide est à son élongation maximale positive, son accélération est maximale négative, dirigée vers le centre.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p03_q7",
            "type": "mcq",
            "prompt": "Pour un oscillateur de pulsation ω₀ = 15 rad/s, quelle est l'accélération a du solide lorsqu'il se trouve à l'abscisse x = +4,0 cm ?",
            "options": [
              "a = -9,0 m/s²",
              "a = +9,0 m/s²",
              "a = -0,6 m/s²",
              "a = 0 m/s²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "a = -ω₀² * x = -(15)² * 0,04 = -225 * 0,04 = -9,0 m/s²."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l04_oscillations_p03_q1",
          "type": "mcq",
          "prompt": "Quelle est la dérivée seconde par rapport au temps de la fonction x(t) = Xm cos(ω₀ t + φ) ?",
          "options": [
            "x''(t) = -ω₀² x(t)",
            "x''(t) = +ω₀² x(t)",
            "x''(t) = -ω₀ x(t)",
            "x''(t) = 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivée première est x' = -ω₀ Xm sin(ω₀ t + φ), et sa dérivée seconde est x'' = -ω₀² Xm cos(ω₀ t + φ) = -ω₀² x(t)."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p03_q2",
          "type": "mcq",
          "prompt": "Un pendule élastique d'amplitude Xm = 5,0 cm oscille à la pulsation propre ω₀ = 20 rad/s. Quelle est sa vitesse maximale lors du passage à l'équilibre ?",
          "options": [
            "Vm = 1,0 m/s",
            "Vm = 0,25 m/s",
            "Vm = 4,0 m/s",
            "Vm = 100 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Vm = ω₀ * Xm = 20 rad/s * 0,05 m = 1,0 m/s."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p03_q3",
          "type": "mcq",
          "prompt": "Lorsque l'élongation du solide est maximale (x = +Xm), que vaut instantanément sa vitesse v ?",
          "options": [
            "v = 0 m/s (le mobile s'arrête pour rebrousser chemin)",
            "v est maximale positive",
            "v est maximale négative",
            "v = Vm / 2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Aux bornes de la trajectoire (x = ±Xm), toute l'énergie est sous forme potentielle : le solide s'immobilise un instant pour changer de sens, sa vitesse est donc rigoureusement nulle."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p03_q4",
          "type": "mcq",
          "prompt": "On écarte un solide de x₀ = +15 cm et on le libère sans vitesse initiale à t = 0. Que valent l'amplitude Xm et la phase initiale φ ?",
          "options": [
            "Xm = 0,15 m et φ = 0 rad",
            "Xm = 0,15 m et φ = π rad",
            "Xm = 0,30 m et φ = π/2 rad",
            "Xm = 0,075 m et φ = 0 rad"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme v₀ = 0 et x₀ > 0 : Xm = x₀ = 0,15 m et cos φ = +1 => φ = 0 rad."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p03_q5",
          "type": "mcq",
          "prompt": "Un solide passe par l'équilibre x₀ = 0 à t = 0 avec une vitesse v₀ = -0,50 m/s. Sachant que ω₀ = 10 rad/s, quelle est l'équation horaire x(t) ?",
          "options": [
            "x(t) = 0,05 cos(10 t + π/2)",
            "x(t) = 0,05 cos(10 t)",
            "x(t) = 0,50 cos(10 t - π/2)",
            "x(t) = 0,05 cos(10 t + π)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Xm = |v₀| / ω₀ = 0,50 / 10 = 0,05 m. cos φ = 0 et sin φ = -v₀ / (ω₀ Xm) = -(-0,5) / (10 * 0,05) = +1 => φ = +π/2 rad."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p03_q6",
          "type": "mcq",
          "prompt": "Si x₀ = -0,10 m (cos φ < 0) et v₀ = 0 (sin φ = 0), quelle est la valeur correcte de la phase initiale φ ?",
          "options": [
            "φ = π rad",
            "φ = 0 rad",
            "φ = π/2 rad",
            "φ = -π/2 rad"
          ],
          "correctAnswerIndex": 0,
          "explanation": "cos φ = x₀ / Xm = -0,10 / 0,10 = -1 => φ = π rad (ou 180°)."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p03_q7",
          "type": "mcq",
          "prompt": "Pour un oscillateur de pulsation ω₀ = 15 rad/s, quelle est l'accélération a du solide lorsqu'il se trouve à l'abscisse x = +4,0 cm ?",
          "options": [
            "a = -9,0 m/s²",
            "a = +9,0 m/s²",
            "a = -0,6 m/s²",
            "a = 0 m/s²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "a = -ω₀² * x = -(15)² * 0,04 = -225 * 0,04 = -9,0 m/s²."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l04_oscillations_p04",
      "order": 4,
      "title": "Étude énergétique : énergies cinétique, potentielle et mécanique",
      "summary": "Expressions de l'énergie potentielle élastique Epe = (1/2) k x², de l'énergie cinétique Ec = (1/2) m v², démonstration de la conservation de l'énergie mécanique Em = (1/2) k Xm² = Cste, et calcul des vitesses et positions extrêmes.",
      "conceptExplanation": "1. Énergie potentielle élastique Epe :\nLe travail élémentaire de la force de rappel élastique T = -k x i lors d'un déplacement dx vaut dW = -k x dx. L'énergie potentielle élastique emmagasinée par le ressort (en prenant l'état de référence Epe = 0 pour x = 0) s'écrit :\nEpe = (1/2) k x².\nEn remplaçant x(t) = Xm cos(ω₀ t + φ) :\nEpe(t) = (1/2) k Xm² cos²(ω₀ t + φ).\n\n2. Énergie cinétique du solide Ec :\nL'énergie cinétique liée à la vitesse de translation v(t) du solide vaut :\nEc = (1/2) m v².\nEn remplaçant v(t) = -ω₀ Xm sin(ω₀ t + φ) et en utilisant ω₀² = k / m (soit m ω₀² = k) :\nEc(t) = (1/2) m ω₀² Xm² sin²(ω₀ t + φ) = (1/2) k Xm² sin²(ω₀ t + φ).\n\n3. Conservation de l'énergie mécanique totale Em :\nL'énergie mécanique totale est la somme de l'énergie cinétique et de l'énergie potentielle :\nEm = Ec + Epe = (1/2) k Xm² [sin²(ω₀ t + φ) + cos²(ω₀ t + φ)].\nPuisque sin²θ + cos²θ = 1 pour tout angle θ :\nEm = (1/2) k Xm² = (1/2) m Vm² = Constante.\nEn l'absence de frottement, l'énergie mécanique d'un oscillateur harmonique libre se conserve intégralement. Il s'opère un transfert continu et réversible entre l'énergie cinétique du solide et l'énergie potentielle élastique du ressort.\n\n4. Exploitation de la conservation de l'énergie mécanique :\n- À la position d'équilibre (x = 0) : Epe = 0 => Em = Ec,max = (1/2) m Vm² => Vm = √(2 Em / m) = Xm √(k / m).\n- Aux positions de rebroussement (v = 0) : Ec = 0 => Em = Epe,max = (1/2) k Xm² => Xm = √(2 Em / k).\n- Pour une position x quelconque : (1/2) m v² + (1/2) k x² = (1/2) k Xm² => v = ± √[(k / m) (Xm² - x²)].",
      "keyRule": "L'énergie mécanique se conserve : Em = (1/2) k x² + (1/2) m v² = (1/2) k Xm² = (1/2) m Vm² = Cste. Elle est entièrement potentielle aux extrémités (x = ±Xm) et entièrement cinétique à l'équilibre (x = 0).",
      "formulas": [
        {
          "name": "Énergie potentielle élastique",
          "formula": "E_{pe} = \\frac{1}{2}\\,k\\,x^2",
          "note": "En joules (J), nulle pour x = 0"
        },
        {
          "name": "Énergie cinétique de translation",
          "formula": "E_c = \\frac{1}{2}\\,m\\,v^2",
          "note": "En joules (J), nulle aux extrémités x = ±Xm"
        },
        {
          "name": "Énergie mécanique totale conservée",
          "formula": "E_m = E_c + E_{pe} = \\frac{1}{2}\\,k\\,X_m^2 = \\frac{1}{2}\\,m\\,V_m^2 = \\text{Cste}",
          "note": "Constante du mouvement"
        }
      ],
      "workedExample": {
        "title": "Calcul de la vitesse à mi-amplitude par la conservation de l'énergie",
        "statement": "Un oscillateur horizontal a une raideur k = 40 N/m, une masse m = 100 g et une amplitude d'oscillation Xm = 6,0 cm. Calcule son énergie mécanique Em, sa vitesse maximale Vm à l'équilibre, et sa vitesse lorsque son élongation vaut x = 3,0 cm (mi-amplitude).",
        "methodSteps": [
          "Étape 1 : Calculer l'énergie mécanique totale : Em = (1/2) k Xm² = 0,5 * 40 * (0,06)² = 20 * 0,0036 = 0,072 J = 72 mJ.",
          "Étape 2 : Calculer la vitesse maximale au passage à x = 0 : Em = (1/2) m Vm² => Vm = √(2 Em / m) = √(2 * 0,072 / 0,10) = √1,44 = 1,20 m/s.",
          "Étape 3 : Calculer l'énergie potentielle à x = 0,03 m : Epe(x) = (1/2) k x² = 0,5 * 40 * (0,03)² = 20 * 0,0009 = 0,018 J (soit le quart de Em car x = Xm / 2).",
          "Étape 4 : Déduire l'énergie cinétique restante : Ec = Em - Epe = 0,072 - 0,018 = 0,054 J (les trois quarts de Em).",
          "Étape 5 : Calculer la vitesse à x = 3 cm : v = √(2 Ec / m) = √(2 * 0,054 / 0,10) = √1,08 ≈ 1,04 m/s (soit Vm * (√3 / 2))."
        ],
        "conclusion": "À mi-amplitude, le système conserve 75% de son énergie cinétique maximale, conférant au solide une vitesse de 1,04 m/s."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Répartition énergétique en fonction de la position du solide",
        "tableData": {
          "headers": [
            "Position x",
            "Énergie potentielle Epe",
            "Énergie cinétique Ec",
            "Énergie mécanique Em",
            "Vitesse du solide |v|"
          ],
          "rows": [
            [
              "x = -Xm (rebroussement)",
              "Epe = (1/2) k Xm² (100%)",
              "Ec = 0 (0%)",
              "Em = (1/2) k Xm²",
              "v = 0"
            ],
            [
              "x = -Xm / 2",
              "Epe = (1/4) Em (25%)",
              "Ec = (3/4) Em (75%)",
              "Em = (1/2) k Xm²",
              "|v| = Vm (√3 / 2) ≈ 0,866 Vm"
            ],
            [
              "x = 0 (équilibre)",
              "Epe = 0 (0%)",
              "Ec = Em (100%)",
              "Em = (1/2) k Xm²",
              "|v| = Vm = ω₀ Xm (maximale)"
            ],
            [
              "x = +Xm / 2",
              "Epe = (1/4) Em (25%)",
              "Ec = (3/4) Em (75%)",
              "Em = (1/2) k Xm²",
              "|v| = Vm (√3 / 2) ≈ 0,866 Vm"
            ],
            [
              "x = +Xm (rebroussement)",
              "Epe = (1/2) k Xm² (100%)",
              "Ec = 0 (0%)",
              "Em = (1/2) k Xm²",
              "v = 0"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'énergie potentielle élastique Epe",
          "stepTheme": "Stockage potentiel",
          "stepBadge": "Epe = (1/2) k x²",
          "paragraphText": "L'énergie potentielle élastique est l'énergie emmagasinée dans le ressort lors de sa déformation. Elle est donnée par Epe = (1/2) k x², où x est l'élongation par rapport à la position de repos. Elle est toujours positive ou nulle, et minimale (nulle) lorsque le ressort est détendu à l'équilibre x = 0.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p04_q1",
            "type": "mcq",
            "prompt": "Un ressort de raideur k = 200 N/m est comprimé de x = -5,0 cm. Quelle est l'énergie potentielle élastique emmagasinée ?",
            "options": [
              "Epe = 0,25 J",
              "Epe = -0,25 J",
              "Epe = 0,50 J",
              "Epe = 2,5 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Epe = (1/2) k x² = 0,5 * 200 * (-0,05)² = 100 * 0,0025 = 0,25 J. L'énergie potentielle est toujours strictement positive, que le ressort soit étiré ou comprimé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Conservation de l'énergie mécanique",
          "stepTheme": "Système conservatif",
          "stepBadge": "dEm / dt = 0",
          "paragraphText": "En l'absence de frottement, les seules forces travaillant sont conservatives. La dérivée de l'énergie mécanique par rapport au temps vaut dEm/dt = d/dt [(1/2) m v² + (1/2) k x²] = m v v' + k x x' = v (m x'' + k x). Comme m x'' + k x = 0, on a dEm/dt = 0, ce qui prouve rigoureusement que Em reste constante au cours du temps.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p04_q2",
            "type": "mcq",
            "prompt": "Quelle est la valeur de la dérivée par rapport au temps de l'énergie mécanique d'un oscillateur libre sans frottement ?",
            "options": [
              "dEm / dt = 0 (l'énergie totale ne varie pas)",
              "dEm / dt = -k v",
              "dEm / dt = m g v",
              "dEm / dt = +1"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La nullité de la dérivée temporelle de l'énergie mécanique traduit mathématiquement la conservation intégrale de l'énergie du système."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calcul de la vitesse maximale à la position d'équilibre",
          "stepTheme": "Vitesse à l'équilibre",
          "stepBadge": "Vm = √(2 Em / m)",
          "paragraphText": "Au passage par la position d'équilibre, le ressort n'est ni comprimé ni allongé : x = 0 et Epe = 0. Toute l'énergie mécanique s'est transformée en énergie cinétique : Em = (1/2) m Vm², d'où Vm = √(2 Em / m) = Xm √(k / m).",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p04_q3",
            "type": "mcq",
            "prompt": "Un système {solide + ressort} possède une énergie mécanique Em = 0,08 J. La masse du solide vaut m = 0,16 kg. Quelle est sa vitesse au passage par la position d'équilibre ?",
            "options": [
              "Vm = 1,0 m/s",
              "Vm = 0,50 m/s",
              "Vm = 2,0 m/s",
              "Vm = 0,25 m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Vm = √(2 Em / m) = √(2 * 0,08 / 0,16) = √(0,16 / 0,16) = √1,0 = 1,0 m/s."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calcul de l'élongation maximale Xm par l'énergie",
          "stepTheme": "Positions d'arrêt",
          "stepBadge": "Xm = √(2 Em / k)",
          "paragraphText": "Lorsque le solide atteint ses positions extrêmes x = ±Xm, sa vitesse s'annule (v = 0 et Ec = 0). Toute l'énergie mécanique est sous forme élastique : Em = (1/2) k Xm², ce qui permet de déterminer directement l'amplitude sans passer par l'équation différentielle : Xm = √(2 Em / k).",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p04_q4",
            "type": "mcq",
            "prompt": "Un oscillateur dispose d'une énergie mécanique Em = 0,18 J et son ressort a une raideur k = 100 N/m. Quelle est l'amplitude Xm des oscillations ?",
            "options": [
              "Xm = 0,06 m = 6,0 cm",
              "Xm = 0,03 m = 3,0 cm",
              "Xm = 0,18 m = 18 cm",
              "Xm = 0,12 m = 12 cm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Xm = √(2 Em / k) = √(2 * 0,18 / 100) = √(0,36 / 100) = √0,0036 = 0,06 m = 6,0 cm."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Périodicité des échanges énergétiques",
          "stepTheme": "Période énergétique",
          "stepBadge": "T_E = T₀ / 2",
          "paragraphText": "Comme cos²(ω₀ t) et sin²(ω₀ t) ont pour période la moitié de la période de cos(ω₀ t) (d'après les formules de duplication cos²θ = (1 + cos 2θ)/2), les énergies cinétique et potentielle oscillent avec une période doublement plus rapide : T_E = T₀ / 2 et une fréquence énergétique double N_E = 2 N₀.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p04_q5",
            "type": "mcq",
            "prompt": "La période propre des oscillations mécaniques d'un pendule vaut T₀ = 1,2 s. Quelle est la période T_E d'oscillation de son énergie cinétique ?",
            "options": [
              "T_E = 0,6 s",
              "T_E = 1,2 s",
              "T_E = 2,4 s",
              "T_E = 0,3 s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'énergie cinétique s'annule deux fois par période mécanique (à chaque extrémité). Sa période d'évolution temporelle vaut donc T_E = T₀ / 2 = 1,2 / 2 = 0,6 s."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Partage de l'énergie à mi-distance (x = Xm / 2)",
          "stepTheme": "Non-linéarité quadratique",
          "stepBadge": "Epe = Em / 4 ≠ Em / 2",
          "paragraphText": "Attention au piège fréquent : à mi-distance de l'amplitude (x = Xm / 2), l'énergie potentielle n'est PAS la moitié de l'énergie mécanique ! Comme Epe dépend du carré de x, Epe(Xm/2) = (1/2) k (Xm/2)² = (1/4) [(1/2) k Xm²] = Em / 4 (soit seulement 25%). Les 75% restants sont sous forme cinétique (Ec = 3 Em / 4).",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p04_q6",
            "type": "mcq",
            "prompt": "À quelle position x l'énergie cinétique est-elle rigoureusement égale à l'énergie potentielle élastique (Ec = Epe = Em / 2) ?",
            "options": [
              "x = ± Xm / √2 ≈ ± 0,707 Xm",
              "x = ± Xm / 2 = ± 0,5 Xm",
              "x = ± Xm / 4",
              "x = 0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Epe = Em / 2 => (1/2) k x² = (1/2) [(1/2) k Xm²] => x² = Xm² / 2 => x = ± Xm / √2 ≈ ± 0,707 Xm."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Calcul de vitesse en un point quelconque par le bilan d'énergie",
          "stepTheme": "Vitesse locale",
          "stepBadge": "v² = (k/m)(Xm² - x²)",
          "paragraphText": "En tout point d'abscisse x, la conservation de l'énergie permet d'écrire directement : (1/2) m v² + (1/2) k x² = (1/2) k Xm² => v² = (k/m) (Xm² - x²) = ω₀² (Xm² - x²). Cette relation fondamentale permet de calculer la vitesse sans connaître la date t.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p04_q7",
            "type": "mcq",
            "prompt": "Un solide oscille avec ω₀ = 10 rad/s et Xm = 5,0 cm. Quelle est la valeur de sa vitesse lorsqu'il passe à l'abscisse x = 4,0 cm ?",
            "options": [
              "v = 0,30 m/s",
              "v = 0,50 m/s",
              "v = 0,40 m/s",
              "v = 0,10 m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "v = ω₀ √(Xm² - x²) = 10 * √((0,05)² - (0,04)²) = 10 * √(0,0025 - 0,0016) = 10 * √0,0009 = 10 * 0,03 = 0,30 m/s."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l04_oscillations_p04_q1",
          "type": "mcq",
          "prompt": "Un ressort de raideur k = 200 N/m est comprimé de x = -5,0 cm. Quelle est l'énergie potentielle élastique emmagasinée ?",
          "options": [
            "Epe = 0,25 J",
            "Epe = -0,25 J",
            "Epe = 0,50 J",
            "Epe = 2,5 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Epe = (1/2) k x² = 0,5 * 200 * (-0,05)² = 100 * 0,0025 = 0,25 J. L'énergie potentielle est toujours strictement positive, que le ressort soit étiré ou comprimé."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p04_q2",
          "type": "mcq",
          "prompt": "Quelle est la valeur de la dérivée par rapport au temps de l'énergie mécanique d'un oscillateur libre sans frottement ?",
          "options": [
            "dEm / dt = 0 (l'énergie totale ne varie pas)",
            "dEm / dt = -k v",
            "dEm / dt = m g v",
            "dEm / dt = +1"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La nullité de la dérivée temporelle de l'énergie mécanique traduit mathématiquement la conservation intégrale de l'énergie du système."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p04_q3",
          "type": "mcq",
          "prompt": "Un système {solide + ressort} possède une énergie mécanique Em = 0,08 J. La masse du solide vaut m = 0,16 kg. Quelle est sa vitesse au passage par la position d'équilibre ?",
          "options": [
            "Vm = 1,0 m/s",
            "Vm = 0,50 m/s",
            "Vm = 2,0 m/s",
            "Vm = 0,25 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Vm = √(2 Em / m) = √(2 * 0,08 / 0,16) = √(0,16 / 0,16) = √1,0 = 1,0 m/s."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p04_q4",
          "type": "mcq",
          "prompt": "Un oscillateur dispose d'une énergie mécanique Em = 0,18 J et son ressort a une raideur k = 100 N/m. Quelle est l'amplitude Xm des oscillations ?",
          "options": [
            "Xm = 0,06 m = 6,0 cm",
            "Xm = 0,03 m = 3,0 cm",
            "Xm = 0,18 m = 18 cm",
            "Xm = 0,12 m = 12 cm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Xm = √(2 Em / k) = √(2 * 0,18 / 100) = √(0,36 / 100) = √0,0036 = 0,06 m = 6,0 cm."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p04_q5",
          "type": "mcq",
          "prompt": "La période propre des oscillations mécaniques d'un pendule vaut T₀ = 1,2 s. Quelle est la période T_E d'oscillation de son énergie cinétique ?",
          "options": [
            "T_E = 0,6 s",
            "T_E = 1,2 s",
            "T_E = 2,4 s",
            "T_E = 0,3 s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'énergie cinétique s'annule deux fois par période mécanique (à chaque extrémité). Sa période d'évolution temporelle vaut donc T_E = T₀ / 2 = 1,2 / 2 = 0,6 s."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p04_q6",
          "type": "mcq",
          "prompt": "À quelle position x l'énergie cinétique est-elle rigoureusement égale à l'énergie potentielle élastique (Ec = Epe = Em / 2) ?",
          "options": [
            "x = ± Xm / √2 ≈ ± 0,707 Xm",
            "x = ± Xm / 2 = ± 0,5 Xm",
            "x = ± Xm / 4",
            "x = 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Epe = Em / 2 => (1/2) k x² = (1/2) [(1/2) k Xm²] => x² = Xm² / 2 => x = ± Xm / √2 ≈ ± 0,707 Xm."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p04_q7",
          "type": "mcq",
          "prompt": "Un solide oscille avec ω₀ = 10 rad/s et Xm = 5,0 cm. Quelle est la valeur de sa vitesse lorsqu'il passe à l'abscisse x = 4,0 cm ?",
          "options": [
            "v = 0,30 m/s",
            "v = 0,50 m/s",
            "v = 0,40 m/s",
            "v = 0,10 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "v = ω₀ √(Xm² - x²) = 10 * √((0,05)² - (0,04)²) = 10 * √(0,0025 - 0,0016) = 10 * √0,0009 = 10 * 0,03 = 0,30 m/s."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l04_oscillations_p05",
      "order": 5,
      "title": "Régimes d'oscillations amorties (frottements)",
      "summary": "Effet des forces dissipatives (frottements solides et visqueux), régimes pseudo-périodique, apériodique et critique, pseudo-période T, et dissipation thermique de l'énergie mécanique par effet Joule ou viscosité.",
      "conceptExplanation": "1. Présence de frottements et amortissement :\nDans tout système réel, des forces de frottement dissipatives s'exercent sur le mobile (frottement de glissement solide, frottement fluide de l'air ou d'un liquide amortisseur f = -h v). Ces forces effectuent un travail résistant qui dissipe en continu l'énergie mécanique sous forme de chaleur dans le milieu extérieur.\n\n2. Les trois grands régimes d'amortissement :\n- Régime pseudo-périodique (faible amortissement) :\nLe solide effectue des oscillations de va-et-vient autour de la position d'équilibre avec une amplitude qui décroît exponentiellement au cours du temps jusqu'à l'arrêt complet. La durée séparant deux passages consécutifs par zéro dans le même sens (ou deux maxima consécutifs) est appelée la pseudo-période T. Pour un amortissement faible, T est très proche de la période propre T₀ (T ≈ T₀).\n- Régime apériodique (fort amortissement) :\nLes forces de frottement sont très intenses (par exemple solide plongeant dans une huile épaisse). Le mobile, écarté de sa position d'équilibre, y retourne lentement sans jamais osciller ni dépasser l'origine.\n- Régime critique (amortissement optimal) :\nC'est la frontière exacte entre le régime pseudo-périodique et le régime apériodique. Le mobile regagne sa position d'équilibre dans le temps le plus court possible, sans la dépasser.\n\n3. Décroissance énergétique :\nContrairement au cas idéal, l'énergie mécanique Em(t) diminue strictement au fil du temps : Delta Em = W(f) < 0. Pour entretenir des oscillations à amplitude constante dans un système réel, il est indispensable de lui apporter périodiquement de l'énergie extérieure à l'aide d'un dispositif d'entretien (moteur, échappement d'horloge).",
      "keyRule": "L'amortissement dissipe l'énergie mécanique : Delta Em < 0. En amortissement faible : régime pseudo-périodique (T ≈ T₀) ; en amortissement fort : régime apériodique sans oscillation ; régime critique : retour à l'équilibre le plus rapide possible sans dépassement.",
      "formulas": [
        {
          "name": "Bilan d'énergie en présence de frottements",
          "formula": "\\Delta E_m = E_m(t_2) - E_m(t_1) = W(\\vec{f}) < 0",
          "note": "L'énergie mécanique décroît constamment"
        },
        {
          "name": "Pseudo-période (faible frottement fluide)",
          "formula": "T \\approx T_0 = 2\\pi\\sqrt{\\frac{m}{k}}",
          "note": "Légèrement supérieure à T₀"
        }
      ],
      "workedExample": {
        "title": "Calcul de la perte d'énergie mécanique en régime pseudo-périodique",
        "statement": "Un oscillateur de raideur k = 100 N/m part sans vitesse initiale de x₀ = 10,0 cm. Au bout de 5 oscillations complètes, l'amplitude maximale mesurée n'est plus que de x₅ = 6,0 cm. Calcule l'énergie mécanique initiale, l'énergie mécanique restante et l'énergie dissipée par frottement.",
        "methodSteps": [
          "Étape 1 : Calculer l'énergie mécanique initiale : Em,0 = (1/2) k x₀² = 0,5 * 100 * (0,10)² = 50 * 0,01 = 0,50 J.",
          "Étape 2 : Calculer l'énergie mécanique restante au 5e sommet : Em,5 = (1/2) k x₅² = 0,5 * 100 * (0,06)² = 50 * 0,0036 = 0,18 J.",
          "Étape 3 : Calculer l'énergie dissipée : E_dissipee = Em,0 - Em,5 = 0,50 - 0,18 = 0,32 J (soit 64% d'énergie perdue sous forme thermique)."
        ],
        "conclusion": "En 5 oscillations, les frottements ont dissipé 0,32 Joule sous forme de chaleur dans le milieu ambiant."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau comparatif des trois régimes d'oscillations amorties",
        "tableData": {
          "headers": [
            "Régime d'oscillation",
            "Intensité du frottement",
            "Allure de la courbe x(t)",
            "Franchissement de l'équilibre",
            "Application pratique"
          ],
          "rows": [
            [
              "Régime non amorti (idéal)",
              "Frottement rigoureusement nul",
              "Sinusoïde d'amplitude constante Xm",
              "Infinité de passages par x = 0",
              "Modèle théorique de référence"
            ],
            [
              "Régime pseudo-périodique",
              "Frottement faible à modéré",
              "Oscillations sinusoïdales amorties à pseudo-période T",
              "Multiples oscillations autour de 0",
              "Corde de guitare, cloche, balançoire"
            ],
            [
              "Régime critique",
              "Frottement intermédiaire optimal",
              "Décroissance exponentielle rapide vers 0",
              "Aucun dépassement de 0",
              "Galvanomètre, amortisseur de voiture, fermeture de porte"
            ],
            [
              "Régime apériodique",
              "Frottement très élevé (visqueux)",
              "Retour très lent vers 0 sans oscillation",
              "Aucun dépassement de 0",
              "Piston dans l'huile lourde, balance amortie"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le régime pseudo-périodique",
          "stepTheme": "Amortissement faible",
          "stepBadge": "Pseudo-période T",
          "paragraphText": "Lorsque les frottements sont suffisamment faibles, le solide effectue des oscillations de part et d'autre de sa position d'équilibre avec une amplitude qui diminue progressivement au cours du temps. Le mouvement n'est plus strictement périodique mais pseudo-périodique : l'intervalle de temps séparant deux crêtes consécutives s'appelle la pseudo-période T.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p05_q1",
            "type": "mcq",
            "prompt": "Pourquoi qualifie-t-on de 'pseudo-périodique' le mouvement d'un oscillateur amorti ?",
            "options": [
              "Parce que bien que la durée entre deux crêtes soit constante, l'état dynamique ne se reproduit pas à l'identique (l'amplitude décroît)",
              "Parce que la période varie à chaque seconde de façon chaotique",
              "Parce que le système ne passe jamais par sa position d'équilibre",
              "Parce que la masse du solide augmente à chaque oscillation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le préfixe 'pseudo' indique que le mouvement n'est pas rigoureusement périodique : la durée d'un cycle T reste constante mais l'amplitude diminue continuellement."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le régime apériodique",
          "stepTheme": "Frottement fort",
          "stepBadge": "Pas d'oscillation",
          "paragraphText": "Lorsque le frottement est très important (présence d'un fluide très visqueux comme de la glycérine ou de l'huile moteur), le système écarté de sa position d'équilibre revient très lentement vers l'origine sans jamais la dépasser : il n'y a aucune oscillation. C'est le régime apériodique.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p05_q2",
            "type": "mcq",
            "prompt": "Un pendule élastique est immergé dans du miel liquide épais. Écarté de 5 cm puis lâché, que constate-t-on ?",
            "options": [
              "Il retourne lentement vers sa position d'équilibre sans osciller (régime apériodique)",
              "Il oscille très vite à haute fréquence",
              "Son amplitude augmente au cours du temps",
              "Il se met en rotation uniforme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La viscosité très forte du milieu étouffe toute oscillation dès le premier retour vers l'équilibre, caractéristique du régime apériodique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le régime critique",
          "stepTheme": "Amortissement optimal",
          "stepBadge": "Retour optimal sans heurt",
          "paragraphText": "Le régime critique correspond à la valeur charnière du coefficient d'amortissement qui sépare le régime pseudo-périodique du régime apériodique. Dans ce régime, le mobile retourne vers sa position d'équilibre dans le temps le plus court possible, sans jamais effectuer la moindre oscillation.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p05_q3",
            "type": "mcq",
            "prompt": "Quel est l'intérêt fondamental du régime critique pour un appareil de mesure à aiguille (comme un voltmètre ou galvanomètre analogique) ?",
            "options": [
              "Permettre à l'aiguille d'indiquer la valeur mesurée le plus rapidement possible sans osciller autour de la graduation",
              "Augmenter l'amplitude des oscillations pour mieux lire la valeur",
              "Faire vibrer l'aiguille en permanence",
              "Réduire la consommation électrique à zéro"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le régime critique permet une stabilisation immédiate de l'équipage mobile sur la valeur exacte sans perdre de temps en va-et-vient parasites."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calcul de l'énergie dissipée par frottement",
          "stepTheme": "Bilan d'énergie",
          "stepBadge": "E_dissipee = Em(t₁) - Em(t₂)",
          "paragraphText": "D'après le théorème de l'énergie mécanique, la diminution de l'énergie mécanique entre deux dates t₁ et t₂ est égale à la valeur absolue du travail des forces non conservatives : E_dissipee = |Delta Em| = Em(t₁) - Em(t₂). Cette énergie perdue est intégralement convertie en énergie thermique (chaleur).",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p05_q4",
            "type": "mcq",
            "prompt": "L'énergie mécanique d'un oscillateur passe de 0,80 J à 0,35 J après 10 s d'oscillations. Quelle quantité de chaleur a été dégagée dans le système et l'environnement ?",
            "options": [
              "Q = 0,45 J",
              "Q = 1,15 J",
              "Q = 0,80 J",
              "Q = 0,28 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'énergie dissipée sous forme thermique est la perte d'énergie mécanique : Q = 0,80 - 0,35 = 0,45 J."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Entretien des oscillations mécaniques",
          "stepTheme": "Oscillations entretenues",
          "stepBadge": "Compensation d'énergie",
          "paragraphText": "Pour maintenir constante l'amplitude d'un oscillateur réel en régime pseudo-périodique, il faut lui injecter à chaque période une quantité d'énergie exactement égale à celle qu'il a dissipée par frottement. C'est le principe des horloges à pendule (poids moteur ou ressort de barillet) et des montres à quartz.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p05_q5",
            "type": "mcq",
            "prompt": "Dans une horloge comtoise, quel est le rôle du contrepoids qui descend lentement au cours des jours ?",
            "options": [
              "Fournir l'énergie nécessaire pour compenser exactement les pertes par frottement et maintenir l'amplitude du balancier",
              "Refroidir le mécanisme d'échappement",
              "Modifier la période du balancier chaque minute",
              "Empêcher la Terre de tourner sous l'horloge"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le contrepoids fournit l'énergie mécanique de compensation via la roue d'échappement pour entretenir le balancier à amplitude constante."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Confusion entre pseudo-période et période propre",
          "stepTheme": "Rapprochement T et T₀",
          "stepBadge": "T ≥ T₀",
          "paragraphText": "Bien que pour un amortissement très faible la pseudo-période T soit numériquement très proche de la période propre T₀ (T ≈ T₀), la présence de frottements ralentit légèrement le mouvement : en toute rigueur théorique, la pseudo-période est toujours strictement supérieure à la période propre non amortie (T > T₀).",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p05_q6",
            "type": "mcq",
            "prompt": "Un système possède une période propre T₀ = 1,000 s dans le vide. Lorsqu'on le fait osciller dans l'air avec un léger frottement visqueux, sa pseudo-période T mesurée sera-t-elle :",
            "options": [
              "Légèrement supérieure à 1,000 s (le frottement ralentit l'oscillation)",
              "Légèrement inférieure à 1,000 s",
              "Rigoureusement nulle",
              "Trois fois plus petite"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les forces de frottement freinent le système, augmentant légèrement la durée nécessaire pour accomplir un cycle complet : T = T₀ / √(1 - λ²) > T₀."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Application aux amortisseurs de véhicules",
          "stepTheme": "Suspension automobile",
          "stepBadge": "Amortisseur hydraulique",
          "paragraphText": "Dans une automobile, les ressorts de suspension absorbent les chocs de la route mais oscilleraient indéfiniment sans amortisseur. L'amortisseur hydraulique (piston forçant le passage d'huile à travers des clapets calibrés) dissipe rapidement l'énergie d'oscillation en réglant le système proche du régime critique pour assurer adhérence et confort.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p05_q7",
            "type": "mcq",
            "prompt": "Si les amortisseurs d'une voiture sont totalement usés (fuite d'huile), que fait la carrosserie après le passage sur un dos-d'âne ?",
            "options": [
              "Elle continue de rebondir pendant de longues secondes en régime pseudo-périodique sous l'effet des seuls ressorts",
              "Elle s'immobilise instantanément sans bouger",
              "Elle penche définitivement vers la gauche",
              "Elle se détache du châssis"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans liquide amortisseur pour dissiper l'énergie, seuls les ressorts agissent avec très peu de frottement : le véhicule oscille dangereusement sur plusieurs cycles."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l04_oscillations_p05_q1",
          "type": "mcq",
          "prompt": "Pourquoi qualifie-t-on de 'pseudo-périodique' le mouvement d'un oscillateur amorti ?",
          "options": [
            "Parce que bien que la durée entre deux crêtes soit constante, l'état dynamique ne se reproduit pas à l'identique (l'amplitude décroît)",
            "Parce que la période varie à chaque seconde de façon chaotique",
            "Parce que le système ne passe jamais par sa position d'équilibre",
            "Parce que la masse du solide augmente à chaque oscillation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le préfixe 'pseudo' indique que le mouvement n'est pas rigoureusement périodique : la durée d'un cycle T reste constante mais l'amplitude diminue continuellement."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p05_q2",
          "type": "mcq",
          "prompt": "Un pendule élastique est immergé dans du miel liquide épais. Écarté de 5 cm puis lâché, que constate-t-on ?",
          "options": [
            "Il retourne lentement vers sa position d'équilibre sans osciller (régime apériodique)",
            "Il oscille très vite à haute fréquence",
            "Son amplitude augmente au cours du temps",
            "Il se met en rotation uniforme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La viscosité très forte du milieu étouffe toute oscillation dès le premier retour vers l'équilibre, caractéristique du régime apériodique."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p05_q3",
          "type": "mcq",
          "prompt": "Quel est l'intérêt fondamental du régime critique pour un appareil de mesure à aiguille (comme un voltmètre ou galvanomètre analogique) ?",
          "options": [
            "Permettre à l'aiguille d'indiquer la valeur mesurée le plus rapidement possible sans osciller autour de la graduation",
            "Augmenter l'amplitude des oscillations pour mieux lire la valeur",
            "Faire vibrer l'aiguille en permanence",
            "Réduire la consommation électrique à zéro"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le régime critique permet une stabilisation immédiate de l'équipage mobile sur la valeur exacte sans perdre de temps en va-et-vient parasites."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p05_q4",
          "type": "mcq",
          "prompt": "L'énergie mécanique d'un oscillateur passe de 0,80 J à 0,35 J après 10 s d'oscillations. Quelle quantité de chaleur a été dégagée dans le système et l'environnement ?",
          "options": [
            "Q = 0,45 J",
            "Q = 1,15 J",
            "Q = 0,80 J",
            "Q = 0,28 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'énergie dissipée sous forme thermique est la perte d'énergie mécanique : Q = 0,80 - 0,35 = 0,45 J."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p05_q5",
          "type": "mcq",
          "prompt": "Dans une horloge comtoise, quel est le rôle du contrepoids qui descend lentement au cours des jours ?",
          "options": [
            "Fournir l'énergie nécessaire pour compenser exactement les pertes par frottement et maintenir l'amplitude du balancier",
            "Refroidir le mécanisme d'échappement",
            "Modifier la période du balancier chaque minute",
            "Empêcher la Terre de tourner sous l'horloge"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le contrepoids fournit l'énergie mécanique de compensation via la roue d'échappement pour entretenir le balancier à amplitude constante."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p05_q6",
          "type": "mcq",
          "prompt": "Un système possède une période propre T₀ = 1,000 s dans le vide. Lorsqu'on le fait osciller dans l'air avec un léger frottement visqueux, sa pseudo-période T mesurée sera-t-elle :",
          "options": [
            "Légèrement supérieure à 1,000 s (le frottement ralentit l'oscillation)",
            "Légèrement inférieure à 1,000 s",
            "Rigoureusement nulle",
            "Trois fois plus petite"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les forces de frottement freinent le système, augmentant légèrement la durée nécessaire pour accomplir un cycle complet : T = T₀ / √(1 - λ²) > T₀."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p05_q7",
          "type": "mcq",
          "prompt": "Si les amortisseurs d'une voiture sont totalement usés (fuite d'huile), que fait la carrosserie après le passage sur un dos-d'âne ?",
          "options": [
            "Elle continue de rebondir pendant de longues secondes en régime pseudo-périodique sous l'effet des seuls ressorts",
            "Elle s'immobilise instantanément sans bouger",
            "Elle penche définitivement vers la gauche",
            "Elle se détache du châssis"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans liquide amortisseur pour dissiper l'énergie, seuls les ressorts agissent avec très peu de frottement : le véhicule oscille dangereusement sur plusieurs cycles."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l04_oscillations_p06",
      "order": 6,
      "title": "Pendule élastique vertical et applications technologiques",
      "summary": "Étude complète du pendule élastique vertical : allongement à l'équilibre Δℓ₀ = m g / k, compensation du poids, identité de l'équation différentielle z'' + (k/m) z = 0, et applications technologiques des ressorts (pesons, sismographes, suspensions).",
      "conceptExplanation": "1. Le pendule élastique vertical à l'équilibre :\nUn ressort vertical de raideur k et de longueur à vide ℓ₀ est suspendu à un point fixe. On y accroche un solide de masse m. À l'équilibre statique, le ressort s'allonge d'une longueur Delta ℓ₀ :\nBilan à l'équilibre : P + T₀ = 0 => m g - k Delta ℓ₀ = 0 => Delta ℓ₀ = (m g) / k.\nCette relation fondamentale permet de déterminer la raideur k à partir d'une simple mesure statique d'allongement : k = (m g) / Delta ℓ₀.\n\n2. Mouvement d'oscillation verticale :\nSoit un axe (Oz) vertical descendant, dont l'origine O coïncide avec la position du centre d'inertie G à l'équilibre statique. Lorsque le solide est à l'abscisse z(t) :\n- L'allongement total du ressort vaut Delta ℓ(t) = Delta ℓ₀ + z(t) ;\n- La tension du ressort s'écrit : T = -k (Delta ℓ₀ + z) k_vect ;\n- Le poids est : P = m g k_vect.\n\n3. Équation différentielle du pendule vertical :\nEn appliquant le TCI : P + T = m z'' k_vect => m g - k (Delta ℓ₀ + z) = m z''.\nComme m g - k Delta ℓ₀ = 0 (condition d'équilibre statique), il reste simplement :\n-k z = m z''  <=>  m z'' + k z = 0  <=>  z'' + (k / m) z = 0.\nRésultat capital : L'équation différentielle du pendule élastique vertical par rapport à sa position d'équilibre est RIGOUREUSEMENT IDENTIQUE à celle du pendule horizontal ! La pulsation propre vaut toujours ω₀ = √(k / m) = √(g / Delta ℓ₀) et la période T₀ = 2π √(m / k) = 2π √(Delta ℓ₀ / g).\n\n4. Applications technologiques des ressorts oscillants :\n- Le dynamomètre (peson) : mesure de force par déformation statique graduée (F = k Delta ℓ) ;\n- Le sismographe vertical : masse lourde suspendue par un ressort servant de référence inertielle lors des secousses sismiques ;\n- La suspension mécanique des véhicules : association ressort-amortisseur pour isoler l'habitacle des irrégularités de la chaussée.",
      "keyRule": "Pour un pendule vertical : à l'équilibre Delta ℓ₀ = mg / k. L'équation par rapport à l'équilibre est z'' + (k/m) z = 0 avec la même période T₀ = 2π √(m/k) = 2π √(Delta ℓ₀ / g).",
      "formulas": [
        {
          "name": "Allongement statique à l'équilibre",
          "formula": "\\Delta \\ell_0 = \\frac{m\\,g}{k}",
          "note": "Permet de mesurer k statiquement"
        },
        {
          "name": "Période propre du pendule vertical",
          "formula": "T_0 = 2\\pi\\sqrt{\\frac{m}{k}} = 2\\pi\\sqrt{\\frac{\\Delta \\ell_0}{g}}",
          "note": "Indépendante de l'orientation du repère"
        }
      ],
      "workedExample": {
        "title": "Calcul de la période à partir d'un allongement statique",
        "statement": "On suspend une masse m = 400 g à un ressort vertical. À l'équilibre, le ressort s'allonge de Delta ℓ₀ = 10,0 cm (g = 10 m/s²). Calcule la raideur k du ressort puis la période propre T₀ des oscillations libres déclenchées en écartant la masse de sa position d'équilibre.",
        "methodSteps": [
          "Étape 1 : Calculer la raideur k à l'équilibre statique : k = (m * g) / Delta ℓ₀ = (0,400 * 10) / 0,10 = 4,0 / 0,10 = 40 N/m.",
          "Étape 2 : Calculer la pulsation propre : ω₀ = √(g / Delta ℓ₀) = √(10 / 0,10) = √100 = 10 rad/s.",
          "Étape 3 : Calculer la période propre T₀ : T₀ = 2π / ω₀ = (2 * 3,1416) / 10 ≈ 0,628 s.",
          "Vérification par la formule alternative : T₀ = 2π √(Delta ℓ₀ / g) = 2π √(0,10 / 10) = 2π √0,01 = 2π * 0,10 = 0,2π ≈ 0,628 s."
        ],
        "conclusion": "Le ressort a une raideur de 40 N/m et le pendule vertical oscille avec une période propre de 0,63 s."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Comparaison des pendules élastiques horizontal et vertical",
        "tableData": {
          "headers": [
            "Caractéristique",
            "Pendule horizontal",
            "Pendule vertical",
            "Conclusion comparative"
          ],
          "rows": [
            [
              "Position d'équilibre",
              "Ressort à longueur à vide (Delta ℓ = 0)",
              "Ressort allongé de Delta ℓ₀ = m g / k",
              "Décalage de l'origine statique par le poids"
            ],
            [
              "Rôle du poids P",
              "Compensé par la réaction du support",
              "Compensé par la pré-tension k Delta ℓ₀",
              "Le poids ne modifie pas la pulsation propre"
            ],
            [
              "Équation différentielle",
              "x'' + (k / m) x = 0",
              "z'' + (k / m) z = 0",
              "Formes mathématiques rigoureusement identiques"
            ],
            [
              "Période propre T₀",
              "T₀ = 2π √(m / k)",
              "T₀ = 2π √(m / k) = 2π √(Delta ℓ₀ / g)",
              "La formule de T₀ est rigoureusement identique"
            ],
            [
              "Énergie mécanique",
              "Em = (1/2) k Xm²",
              "Em = (1/2) k Zm² (autour de l'équilibre)",
              "Même expression d'amplitude harmonique"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'allongement à l'équilibre Delta ℓ₀",
          "stepTheme": "Équilibre statique",
          "stepBadge": "Delta ℓ₀ = m g / k",
          "paragraphText": "Lorsqu'on suspend une masse m à un ressort vertical, celui-ci s'étire jusqu'à ce que la force de rappel élastique compense exactement le poids : P + T₀ = 0 => m g = k Delta ℓ₀. L'allongement statique vaut Delta ℓ₀ = (m g) / k.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p06_q1",
            "type": "mcq",
            "prompt": "Un solide de masse m = 200 g est suspendu à un ressort de raideur k = 50 N/m (g = 10 m/s²). De combien le ressort s'allonge-t-il à l'équilibre ?",
            "options": [
              "Delta ℓ₀ = 4,0 cm = 0,04 m",
              "Delta ℓ₀ = 1,0 cm",
              "Delta ℓ₀ = 10 cm",
              "Delta ℓ₀ = 2,5 cm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Delta ℓ₀ = (m * g) / k = (0,200 * 10) / 50 = 2 / 50 = 0,04 m = 4,0 cm."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Compensation du poids par la pré-tension élastique",
          "stepTheme": "Élimination de g",
          "stepBadge": "m g - k Delta ℓ₀ = 0",
          "paragraphText": "En dynamique, lorsque le solide est à la position z comptée depuis la position d'équilibre statique, la somme du poids et de la tension vaut P + T = m g - k (Delta ℓ₀ + z) = (m g - k Delta ℓ₀) - k z = -k z. Le poids est ainsi entièrement absorbé par la tension statique d'équilibre !",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p06_q2",
            "type": "mcq",
            "prompt": "Pourquoi le terme de pesanteur m g n'apparaît-il pas dans l'équation différentielle z'' + (k/m) z = 0 du pendule vertical ?",
            "options": [
              "Parce qu'il est exactement compensé par la tension statique du ressort à la position d'équilibre choisie comme origine",
              "Parce que la gravité s'annule quand le solide est en mouvement",
              "Parce que le ressort isole la masse de la gravitation",
              "Parce que z est une coordonnée horizontale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En choisissant la position d'équilibre statique comme origine (où P + T₀ = 0), le poids s'élimine naturellement de la dynamique oscillatoire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Formule de la période avec l'allongement statique",
          "stepTheme": "Période en fonction de Delta ℓ₀",
          "stepBadge": "T₀ = 2π √(Delta ℓ₀ / g)",
          "paragraphText": "En remplaçant m / k = Delta ℓ₀ / g dans l'expression de la période propre, on obtient la formule remarquable : T₀ = 2π √(Delta ℓ₀ / g). Cela prouve que deux pendules verticaux de masses et de ressorts différents mais ayant le même allongement statique Delta ℓ₀ oscillent avec rigoureusement la même période !",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p06_q3",
            "type": "mcq",
            "prompt": "Un ressort suspendu s'allonge de Delta ℓ₀ = 2,5 cm à l'équilibre sous une charge (g = 10 m/s², π² ≈ 10). Quelle est la période propre d'oscillation de ce système ?",
            "options": [
              "T₀ = 0,314 s",
              "T₀ = 0,628 s",
              "T₀ = 1,00 s",
              "T₀ = 0,157 s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "T₀ = 2π √(Delta ℓ₀ / g) = 2π √(0,025 / 10) = 2π √0,0025 = 2π * 0,05 = 0,10 π ≈ 0,314 s."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le sismographe vertical",
          "stepTheme": "Instrument sismique",
          "stepBadge": "Masse inertielle",
          "paragraphText": "Un sismographe vertical est composé d'un bâti solidaire du sol terrestre et d'une masse lourde suspendue à un ressort très souple (faible k, période propre T₀ très grande). Lors d'un tremblement de terre rapide, le bâti bouge avec le sol tandis que la masse lourde reste immobile dans l'espace par inertie, permettant d'enregistrer le mouvement du sol.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p06_q4",
            "type": "mcq",
            "prompt": "Quel principe fondamental permet à la masse d'un sismographe de servir de repère fixe pendant un séisme ?",
            "options": [
              "L'inertie de la masse lourde associée à une suspension de grande période propre",
              "L'attraction magnétique du noyau terrestre",
              "L'amortissement infini du ressort",
              "La rotation de la Terre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par inertie, une masse lourde suspendue par un ressort très souple n'a pas le temps de suivre les vibrations haute fréquence du sol : elle reste quasiment fixe dans l'espace."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Calcul de la raideur équivalente de ressorts en parallèle",
          "stepTheme": "Association de ressorts",
          "stepBadge": "k_eq = k₁ + k₂",
          "paragraphText": "Lorsque deux ressorts de raideurs k₁ et k₂ sont montés en parallèle (supportant ensemble la même charge), la raideur équivalente s'additionne : k_eq = k₁ + k₂. Le système devient plus rigide et sa période propre diminue : T₀ = 2π √[m / (k₁ + k₂)].",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p06_q5",
            "type": "mcq",
            "prompt": "Une masse m = 1,0 kg est suspendue simultanément à deux ressorts identiques en parallèle de raideur k = 50 N/m chacun. Quelle est la raideur équivalente du système ?",
            "options": [
              "k_eq = 100 N/m",
              "k_eq = 25 N/m",
              "k_eq = 50 N/m",
              "k_eq = 2500 N/m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En parallèle, les raideurs s'additionnent : k_eq = k₁ + k₂ = 50 + 50 = 100 N/m."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Calcul de la raideur de ressorts en série",
          "stepTheme": "Ressorts en série",
          "stepBadge": "1/k_eq = 1/k₁ + 1/k₂",
          "paragraphText": "Lorsque deux ressorts sont attachés bout à bout en série, ils subissent la même tension. La raideur équivalente vérifie 1 / k_eq = 1 / k₁ + 1 / k₂, soit k_eq = (k₁ k₂) / (k₁ + k₂). L'ensemble est plus souple que chacun des ressorts isolés.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p06_q6",
            "type": "mcq",
            "prompt": "Deux ressorts identiques de raideur k = 60 N/m sont reliés en série. Quelle est la raideur équivalente de l'ensemble ?",
            "options": [
              "k_eq = 30 N/m",
              "k_eq = 120 N/m",
              "k_eq = 60 N/m",
              "k_eq = 15 N/m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "k_eq = (k * k) / (k + k) = k / 2 = 60 / 2 = 30 N/m."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège : Ne pas compter l'origine à la longueur à vide pour le pendule vertical",
          "stepTheme": "Choix de l'origine",
          "stepBadge": "Origine = Équilibre statique",
          "paragraphText": "Dans un pendule élastique vertical, l'origine z = 0 de l'équation différentielle z'' + (k/m) z = 0 DOIT IMPÉRATIVEMENT être choisie à la position d'équilibre avec la masse accrochée (ressort allongé de Delta ℓ₀), et JAMAIS au niveau de l'extrémité du ressort à vide. Si on prenait le ressort à vide comme origine, l'équation contiendrait un second membre constant égal à g.",
          "exercise": {
            "id": "terminale_d_physique_l04_oscillations_p06_q7",
            "type": "mcq",
            "prompt": "Où se situe l'origine z = 0 dans l'étude canonique du pendule élastique vertical oscillant ?",
            "options": [
              "Au centre d'inertie G lorsque le solide est à l'équilibre statique suspendu",
              "Au point d'attache supérieur fixe du ressort",
              "À l'extrémité libre du ressort lorsqu'aucune masse n'est accrochée",
              "Au centre de la Terre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'origine doit être la position d'équilibre statique G₀ pour que la condition m g - k Delta ℓ₀ = 0 élimine la pesanteur de l'équation différentielle."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l04_oscillations_p06_q1",
          "type": "mcq",
          "prompt": "Un solide de masse m = 200 g est suspendu à un ressort de raideur k = 50 N/m (g = 10 m/s²). De combien le ressort s'allonge-t-il à l'équilibre ?",
          "options": [
            "Delta ℓ₀ = 4,0 cm = 0,04 m",
            "Delta ℓ₀ = 1,0 cm",
            "Delta ℓ₀ = 10 cm",
            "Delta ℓ₀ = 2,5 cm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Delta ℓ₀ = (m * g) / k = (0,200 * 10) / 50 = 2 / 50 = 0,04 m = 4,0 cm."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p06_q2",
          "type": "mcq",
          "prompt": "Pourquoi le terme de pesanteur m g n'apparaît-il pas dans l'équation différentielle z'' + (k/m) z = 0 du pendule vertical ?",
          "options": [
            "Parce qu'il est exactement compensé par la tension statique du ressort à la position d'équilibre choisie comme origine",
            "Parce que la gravité s'annule quand le solide est en mouvement",
            "Parce que le ressort isole la masse de la gravitation",
            "Parce que z est une coordonnée horizontale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En choisissant la position d'équilibre statique comme origine (où P + T₀ = 0), le poids s'élimine naturellement de la dynamique oscillatoire."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p06_q3",
          "type": "mcq",
          "prompt": "Un ressort suspendu s'allonge de Delta ℓ₀ = 2,5 cm à l'équilibre sous une charge (g = 10 m/s², π² ≈ 10). Quelle est la période propre d'oscillation de ce système ?",
          "options": [
            "T₀ = 0,314 s",
            "T₀ = 0,628 s",
            "T₀ = 1,00 s",
            "T₀ = 0,157 s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "T₀ = 2π √(Delta ℓ₀ / g) = 2π √(0,025 / 10) = 2π √0,0025 = 2π * 0,05 = 0,10 π ≈ 0,314 s."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p06_q4",
          "type": "mcq",
          "prompt": "Quel principe fondamental permet à la masse d'un sismographe de servir de repère fixe pendant un séisme ?",
          "options": [
            "L'inertie de la masse lourde associée à une suspension de grande période propre",
            "L'attraction magnétique du noyau terrestre",
            "L'amortissement infini du ressort",
            "La rotation de la Terre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par inertie, une masse lourde suspendue par un ressort très souple n'a pas le temps de suivre les vibrations haute fréquence du sol : elle reste quasiment fixe dans l'espace."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p06_q5",
          "type": "mcq",
          "prompt": "Une masse m = 1,0 kg est suspendue simultanément à deux ressorts identiques en parallèle de raideur k = 50 N/m chacun. Quelle est la raideur équivalente du système ?",
          "options": [
            "k_eq = 100 N/m",
            "k_eq = 25 N/m",
            "k_eq = 50 N/m",
            "k_eq = 2500 N/m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En parallèle, les raideurs s'additionnent : k_eq = k₁ + k₂ = 50 + 50 = 100 N/m."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p06_q6",
          "type": "mcq",
          "prompt": "Deux ressorts identiques de raideur k = 60 N/m sont reliés en série. Quelle est la raideur équivalente de l'ensemble ?",
          "options": [
            "k_eq = 30 N/m",
            "k_eq = 120 N/m",
            "k_eq = 60 N/m",
            "k_eq = 15 N/m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "k_eq = (k * k) / (k + k) = k / 2 = 60 / 2 = 30 N/m."
        },
        {
          "id": "terminale_d_physique_l04_oscillations_p06_q7",
          "type": "mcq",
          "prompt": "Où se situe l'origine z = 0 dans l'étude canonique du pendule élastique vertical oscillant ?",
          "options": [
            "Au centre d'inertie G lorsque le solide est à l'équilibre statique suspendu",
            "Au point d'attache supérieur fixe du ressort",
            "À l'extrémité libre du ressort lorsqu'aucune masse n'est accrochée",
            "Au centre de la Terre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'origine doit être la position d'équilibre statique G₀ pour que la condition m g - k Delta ℓ₀ = 0 élimine la pesanteur de l'équation différentielle."
        }
      ]
    }
  ]
};
