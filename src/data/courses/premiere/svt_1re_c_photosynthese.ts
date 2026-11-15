import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère C_L8_La photosynthèse.pdf (Mon école à la maison ; le document l’intitule « Leçon 9 ») ». Première C (la 1re D a sa propre leçon sur ce sujet).
// Fichier généré (scratchpad build_1re_c_svt_c.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_C_L08_PHOTOSYNTHESE: CurriculumChapter = {
  "id": "premiere_c_svt_l08_photosynthese",
  "subjectId": "svt",
  "gradeLevel": "premiere_c",
  "order": 8,
  "title": "Leçon 8 : La photosynthèse",
  "summary": "Facteurs de la photosynthèse (lumière, CO₂, température), chlorophylle et chloroplaste, pigments, phase lumineuse (photolyse de l’eau, ATP, TH,H⁺) et phase sombre (cycle de Calvin), équation bilan et importance pour la biosphère.",
  "officialVolumeHours": 9,
  "contentVersion": 2,
  "source": "SVT 1ère C_L8_La photosynthèse.pdf (Mon école à la maison ; le document l’intitule « Leçon 9 »)",
  "points": [
    {
      "id": "premiere_c_svt_l08_photosynthese_p01",
      "order": 1,
      "title": "La lumière et la photosynthèse",
      "summary": "Point de compensation, plantes d’ombre et plantes de lumière.",
      "conceptExplanation": "Situation : dans un jardin botanique, des élèves de 1re C voient de jeunes plantes chétives à l’ombre des grands arbres et des plantes de la même espèce robustes, aux larges feuilles vert sombre, dans une clairière. Les plantes de la clairière produisent plus de matière organique.\n- La photosynthèse est la production de matière organique par les plantes vertes à partir du CO₂ et de l’eau, grâce à l’énergie lumineuse ; elle dégage du dioxygène. On mesure son intensité par le dégagement de O₂ (ou l’absorption de CO₂).\n- Expérience : une tomate et une fougère reçoivent des éclairements croissants (température et CO₂ constants).\n- À l’obscurité et sous très faible éclairement, le dégagement de O₂ est négatif : la plante respire plus qu’elle ne fait de photosynthèse.\n- Quand la photosynthèse produit autant de O₂ que la respiration en consomme, le dégagement est nul : c’est le point de compensation lumineux.\n- Ensuite, l’intensité augmente avec la lumière jusqu’à un maximum : vers 20 % d’éclairement pour la fougère, vers 70 % pour la tomate.\n- La fougère est une plante d’ombre (sciaphile) : son maximum est atteint à faible éclairement, puis l’intensité baisse un peu en forte lumière. La tomate est une plante de lumière (héliophile).",
      "keyRule": "Obscurité : respiration seule (O₂ consommé). Point de compensation : photosynthèse = respiration. Plante d’ombre : maximum à faible lumière ; plante de lumière : maximum à forte lumière.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer les plantes chétives à l’ombre",
        "statement": "Pourquoi les jeunes plantes à l’ombre des grands arbres sont-elles chétives ?",
        "methodSteps": [
          "À l’ombre, l’éclairement est faible : la photosynthèse est à peine supérieure à la respiration.",
          "La plante produit donc peu de matière organique pour grandir."
        ],
        "conclusion": "Ces plantes de lumière manquent d’éclairement pour produire assez de matière organique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Photosynthèse",
          "stepTheme": "Définition",
          "stepTitle": "Qu’est-ce que la photosynthèse ?",
          "paragraphText": "La **photosynthèse** est la fabrication de **matière organique** par les plantes vertes, à partir de **CO₂** et d’**eau**, grâce à l’**énergie lumineuse** ; elle dégage du **dioxygène**.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p01_q1",
            "type": "mcq",
            "prompt": "Qu’est-ce que la photosynthèse ?",
            "options": [
              "La fabrication de matière organique par les plantes vertes grâce à la lumière, à partir de CO₂ et d’eau",
              "La respiration des plantes à l’obscurité",
              "La décomposition de la matière organique",
              "L’absorption de l’eau par les racines"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Photo : lumière ; synthèse : fabrication."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Lumière et photosynthèse : tomate et fougère",
            "caption": "Dégagement de dioxygène selon l’éclairement. La fougère (plante d’ombre) atteint son maximum vers 20 % d’éclairement, la tomate (plante de lumière) vers 70 %.",
            "svgContent": "<svg viewBox=\"0 0 560 250\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Courbes de dégagement de dioxygène de la tomate et de la fougère selon le pourcentage d’éclairement\"><line x1=\"60\" y1=\"200\" x2=\"520\" y2=\"200\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"216\" x2=\"60\" y2=\"24\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"54\" y=\"204\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">0</text><polyline points=\"60.0,216.0 73.8,200.0 106.0,152.0 152.0,120.0 221.0,88.0 290.0,64.0 382.0,40.0 520.0,40.0\" fill=\"none\" stroke=\"#EF4444\" stroke-width=\"2.8\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"60.0,212.8 69.2,200.0 96.8,148.8 152.0,128.0 244.0,129.6 382.0,136.0 520.0,145.6\" fill=\"none\" stroke=\"#10B981\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-dasharray=\"7 4\"/><text x=\"520\" y=\"32\" font-size=\"11.5\" text-anchor=\"end\" font-weight=\"800\" fill=\"#EF4444\">tomate</text><text x=\"520\" y=\"137.6\" font-size=\"11.5\" text-anchor=\"end\" font-weight=\"800\" fill=\"#10B981\">fougère</text><text x=\"152\" y=\"216\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">20 %</text><text x=\"290\" y=\"216\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">50 %</text><text x=\"382\" y=\"216\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">70 %</text><text x=\"520\" y=\"216\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">100 %</text><text x=\"290\" y=\"232\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">éclairement (% de la lumière solaire directe)</text><text x=\"64\" y=\"18\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">dégagement de O₂</text><text x=\"79.8\" y=\"194\" font-size=\"9.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"#8B5CF6\">compensation</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Obscurité",
          "stepTheme": "Respiration",
          "stepTitle": "À l’obscurité",
          "paragraphText": "À l’**obscurité**, le dégagement de O₂ est **négatif** : la plante **respire** (elle consomme du O₂) sans faire de photosynthèse.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p01_q2",
            "type": "mcq",
            "prompt": "Pourquoi une plante verte placée à l’obscurité consomme-t-elle du dioxygène au lieu d’en dégager ?",
            "options": [
              "Elle respire sans faire de photosynthèse",
              "Elle fait plus de photosynthèse",
              "Elle fabrique de l’amidon",
              "Elle absorbe la lumière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La respiration continue jour et nuit."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Compensation",
          "stepTheme": "Point",
          "stepTitle": "Le point de compensation",
          "paragraphText": "Au **point de compensation**, la photosynthèse **produit** autant de O₂ que la respiration en **consomme** : le dégagement est **nul**.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p01_q3",
            "type": "mcq",
            "prompt": "Comment appelle-t-on l’éclairement pour lequel la plante produit autant de O₂ par photosynthèse qu’elle en consomme par respiration ?",
            "options": [
              "Le point de compensation",
              "L’optimum de température",
              "Le point de saturation",
              "La photolyse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le bilan des échanges gazeux est nul."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Fougère",
          "stepTheme": "Plante d’ombre",
          "stepTitle": "La fougère, plante d’ombre",
          "paragraphText": "La **fougère** atteint son maximum vers **20 %** d’éclairement : c’est une plante d’**ombre** (**sciaphile**).",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p01_q4",
            "type": "mcq",
            "prompt": "Une plante atteint son maximum de photosynthèse dès 20 % d’éclairement, puis son activité baisse un peu en forte lumière. Comment la qualifie-t-on ?",
            "options": [
              "Plante d’ombre (sciaphile)",
              "Plante de lumière (héliophile)",
              "Plante sans chlorophylle",
              "Plante aquatique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sciaphile : qui aime l’ombre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Tomate",
          "stepTheme": "Plante de lumière",
          "stepTitle": "La tomate, plante de lumière",
          "paragraphText": "La **tomate** atteint son maximum vers **70 %** d’éclairement : c’est une plante de **lumière** (**héliophile**).",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p01_q5",
            "type": "mcq",
            "prompt": "D’après les courbes, à quel éclairement la tomate atteint-elle son maximum de photosynthèse ?",
            "options": [
              "Vers 70 % de l’éclairement solaire direct",
              "Vers 20 %",
              "À l’obscurité",
              "Vers 2 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Héliophile : qui aime le soleil."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Vrai ou faux",
          "stepTheme": "Activité",
          "stepTitle": "La photosynthèse à l’obscurité ?",
          "paragraphText": "« La photosynthèse se déroule à l’obscurité » : **faux**. Sans lumière, pas de photosynthèse ; seule la **respiration** continue.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p01_q6",
            "type": "mcq",
            "prompt": "« La photosynthèse se déroule à l’obscurité. » Vrai ou faux ?",
            "options": [
              "Faux : la photosynthèse a besoin de lumière",
              "Vrai",
              "Vrai, surtout la nuit",
              "Faux : elle a besoin d’obscurité totale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La phase sombre, elle, utilise les produits de la phase lumineuse."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l08_photosynthese_p01_q1",
          "type": "mcq",
          "prompt": "Qu’est-ce que la photosynthèse ?",
          "options": [
            "La fabrication de matière organique par les plantes vertes grâce à la lumière, à partir de CO₂ et d’eau",
            "La respiration des plantes à l’obscurité",
            "La décomposition de la matière organique",
            "L’absorption de l’eau par les racines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Photo : lumière ; synthèse : fabrication."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p01_q2",
          "type": "mcq",
          "prompt": "Pourquoi une plante verte placée à l’obscurité consomme-t-elle du dioxygène au lieu d’en dégager ?",
          "options": [
            "Elle respire sans faire de photosynthèse",
            "Elle fait plus de photosynthèse",
            "Elle fabrique de l’amidon",
            "Elle absorbe la lumière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La respiration continue jour et nuit."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p01_q3",
          "type": "mcq",
          "prompt": "Comment appelle-t-on l’éclairement pour lequel la plante produit autant de O₂ par photosynthèse qu’elle en consomme par respiration ?",
          "options": [
            "Le point de compensation",
            "L’optimum de température",
            "Le point de saturation",
            "La photolyse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le bilan des échanges gazeux est nul."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p01_q4",
          "type": "mcq",
          "prompt": "Une plante atteint son maximum de photosynthèse dès 20 % d’éclairement, puis son activité baisse un peu en forte lumière. Comment la qualifie-t-on ?",
          "options": [
            "Plante d’ombre (sciaphile)",
            "Plante de lumière (héliophile)",
            "Plante sans chlorophylle",
            "Plante aquatique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sciaphile : qui aime l’ombre."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p01_q5",
          "type": "mcq",
          "prompt": "D’après les courbes, à quel éclairement la tomate atteint-elle son maximum de photosynthèse ?",
          "options": [
            "Vers 70 % de l’éclairement solaire direct",
            "Vers 20 %",
            "À l’obscurité",
            "Vers 2 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Héliophile : qui aime le soleil."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p01_q6",
          "type": "mcq",
          "prompt": "« La photosynthèse se déroule à l’obscurité. » Vrai ou faux ?",
          "options": [
            "Faux : la photosynthèse a besoin de lumière",
            "Vrai",
            "Vrai, surtout la nuit",
            "Faux : elle a besoin d’obscurité totale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La phase sombre, elle, utilise les produits de la phase lumineuse."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l08_photosynthese_p02",
      "order": 2,
      "title": "Le CO₂ et la température",
      "summary": "Le CO₂ facteur limitant ; l’optimum de température.",
      "conceptExplanation": "- Teneur en CO₂ : à très faible teneur, le dégagement de O₂ est négatif (respiration) ; il s’annule au point de compensation, puis augmente rapidement avec le CO₂ jusqu’à environ 0,1 %, et se stabilise vers 0,4 % (saturation).\n- L’air ne contient qu’environ 0,04 % de CO₂ : c’est souvent le CO₂ qui limite la photosynthèse ; c’est un facteur limitant.\n- Température : la photosynthèse est nulle vers 0 °C (enzymes inactives), augmente jusqu’à un optimum vers 30 °C, puis diminue et s’annule vers 45 °C (enzymes dénaturées par la chaleur).\n- Conclusion : la lumière, la teneur en CO₂ et la température influencent la production de matière organique. La nature (couleur) de la lumière compte aussi : la chlorophylle absorbe surtout le bleu et le rouge.\n- Correction du document : il donne une teneur en CO₂ de l’air « d’environ 0,003 % » ; c’est environ 0,04 %, comme l’indique sa propre courbe (repère « air » entre 0,02 et 0,06 %).\n- Évaluation (chlorelles, 10 jours à la lumière) : la biomasse augmente avec le CO₂ jusqu’à un maximum (210 µg/mL à 6 %), puis diminue (150 µg/mL de 8 à 10 %) et devient nulle à partir de 12 % : un excès de CO₂ devient toxique (le milieu s’acidifie). Équation : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂.",
      "keyRule": "CO₂ : facteur limitant (air ≈ 0,04 %). Température : optimum ≈ 30 °C, nulle à 0 °C et vers 45 °C (enzymes).",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer l’effet de la chaleur",
        "statement": "Pourquoi la photosynthèse s’arrête-t-elle vers 45 °C ?",
        "methodSteps": [
          "La photosynthèse dépend d’enzymes.",
          "Une forte chaleur dénature (détruit) ces enzymes."
        ],
        "conclusion": "Au-delà de l’optimum, l’intensité baisse puis s’annule vers 45 °C."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "CO₂",
          "stepTheme": "Courbe",
          "stepTitle": "Plus de CO₂, plus de photosynthèse",
          "paragraphText": "Quand la teneur en **CO₂** augmente, le dégagement de O₂ **croît** rapidement, puis se **stabilise** (saturation).",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p02_q1",
            "type": "mcq",
            "prompt": "Comment évolue l’intensité de la photosynthèse quand on augmente la teneur en CO₂ de l’air, à lumière et température constantes ?",
            "options": [
              "Elle augmente, puis se stabilise",
              "Elle diminue toujours",
              "Elle reste nulle",
              "Elle ne dépend pas du CO₂"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le CO₂ est la matière première de la photosynthèse."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepBadge": "0,04 %",
          "stepTheme": "Erreur du document",
          "stepTitle": "La teneur en CO₂ de l’air",
          "paragraphText": "Le document écrit « **0,003 %** » : l’air contient en fait environ **0,04 %** de CO₂, ce qui limite souvent la photosynthèse.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p02_q2",
            "type": "mcq",
            "prompt": "Quelle est la teneur approximative de l’air en dioxyde de carbone ?",
            "options": [
              "Environ 0,04 %",
              "Environ 0,003 %",
              "Environ 21 %",
              "Environ 78 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "21 % est la teneur en O₂, 78 % celle en azote."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Facteur limitant",
          "stepTheme": "Notion",
          "stepTitle": "Un facteur limitant",
          "paragraphText": "Le facteur présent en **quantité insuffisante** freine toute la photosynthèse : c’est le **facteur limitant**. Dans l’air, c’est souvent le **CO₂**.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p02_q3",
            "type": "mcq",
            "prompt": "Dans les serres, on enrichit parfois l’air en CO₂. Pourquoi ?",
            "options": [
              "Parce que le CO₂ de l’air est souvent un facteur limitant de la photosynthèse",
              "Pour tuer les insectes",
              "Pour refroidir la serre",
              "Pour remplacer la lumière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Plus de CO₂ = plus de matière organique, jusqu’à saturation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Température",
          "stepTheme": "Optimum",
          "stepTitle": "L’optimum de température",
          "paragraphText": "La photosynthèse est **nulle vers 0 °C**, **maximale vers 30 °C** et s’**annule vers 45 °C**.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p02_q4",
            "type": "mcq",
            "prompt": "D’après la courbe, à quelle température la photosynthèse est-elle la plus intense ?",
            "options": [
              "Vers 30 °C",
              "Vers 0 °C",
              "Vers 45 °C",
              "Vers 60 °C"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’optimum thermique."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Température et photosynthèse",
            "caption": "Nulle à 0 °C, maximale vers 30 °C, nulle de nouveau vers 45 °C : les enzymes sont d’abord inactives, puis détruites par la chaleur.",
            "svgContent": "<svg viewBox=\"0 0 560 240\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Intensité photosynthétique selon la température : maximum vers 30 °C\"><line x1=\"60\" y1=\"200\" x2=\"540\" y2=\"200\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"200\" x2=\"60\" y2=\"29\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polyline points=\"60.0,200.0 160.0,165.8 260.0,131.6 330.0,63.2 370.0,48.0 410.0,63.2 460.0,116.4 510.0,200.0\" fill=\"none\" stroke=\"#F59E0B\" stroke-width=\"2.8\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"60\" y=\"216\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">0</text><text x=\"160\" y=\"216\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">10</text><text x=\"260\" y=\"216\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">20</text><text x=\"360\" y=\"216\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">30</text><text x=\"460\" y=\"216\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">40</text><text x=\"510\" y=\"216\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">45</text><text x=\"300\" y=\"232\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">température (°C)</text><text x=\"370\" y=\"40\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#F59E0B\">optimum ≈ 30 °C</text><text x=\"64\" y=\"16\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">intensité photosynthétique</text></svg>"
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Enzymes",
          "stepTheme": "Explication",
          "stepTitle": "Pourquoi la chaleur arrête tout",
          "paragraphText": "La photosynthèse dépend d’**enzymes** : inactives au froid, elles sont **dénaturées** par une forte **chaleur**.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p02_q5",
            "type": "mcq",
            "prompt": "Pourquoi la photosynthèse s’arrête-t-elle vers 45 °C ?",
            "options": [
              "Les enzymes de la photosynthèse sont dénaturées par la chaleur",
              "Il n’y a plus de lumière",
              "La plante n’a plus d’eau",
              "Le CO₂ disparaît de l’air"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les enzymes sont des protéines fragiles."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Chlorelles",
          "stepTheme": "Évaluation",
          "stepTitle": "Trop de CO₂",
          "paragraphText": "Biomasse des chlorelles : maximum (**210 µg/mL**) à **6 %** de CO₂, puis **150** de 8 à 10 %, et **0** à partir de 12 % : un **excès** de CO₂ devient toxique.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p02_q6",
            "type": "mcq",
            "prompt": "Des chlorelles cultivées 10 jours à la lumière ont une biomasse de 210 µg/mL à 6 % de CO₂, 150 µg/mL de 8 à 10 %, et 0 à partir de 12 %. Que montre ce résultat ?",
            "options": [
              "Le CO₂ favorise la production jusqu’à un optimum, mais un excès devient toxique",
              "Plus il y a de CO₂, plus la biomasse augmente sans limite",
              "Le CO₂ n’a aucun effet",
              "Les chlorelles ne font pas de photosynthèse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme pour la température, il existe un optimum."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Chlorelles et teneur en CO₂ (10 jours à la lumière)",
            "caption": "Biomasse obtenue selon la concentration en CO₂ du milieu.",
            "tableData": {
              "headers": [
                "CO₂ (%)",
                "0,2",
                "0,4",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "12",
                "13",
                "14"
              ],
              "rows": [
                [
                  "Biomasse (µg/mL)",
                  0,
                  10,
                  25,
                  60,
                  140,
                  150,
                  210,
                  200,
                  150,
                  150,
                  150,
                  0,
                  0,
                  0
                ]
              ]
            }
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l08_photosynthese_p02_q1",
          "type": "mcq",
          "prompt": "Comment évolue l’intensité de la photosynthèse quand on augmente la teneur en CO₂ de l’air, à lumière et température constantes ?",
          "options": [
            "Elle augmente, puis se stabilise",
            "Elle diminue toujours",
            "Elle reste nulle",
            "Elle ne dépend pas du CO₂"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le CO₂ est la matière première de la photosynthèse."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p02_q2",
          "type": "mcq",
          "prompt": "Quelle est la teneur approximative de l’air en dioxyde de carbone ?",
          "options": [
            "Environ 0,04 %",
            "Environ 0,003 %",
            "Environ 21 %",
            "Environ 78 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "21 % est la teneur en O₂, 78 % celle en azote."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p02_q3",
          "type": "mcq",
          "prompt": "Dans les serres, on enrichit parfois l’air en CO₂. Pourquoi ?",
          "options": [
            "Parce que le CO₂ de l’air est souvent un facteur limitant de la photosynthèse",
            "Pour tuer les insectes",
            "Pour refroidir la serre",
            "Pour remplacer la lumière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Plus de CO₂ = plus de matière organique, jusqu’à saturation."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p02_q4",
          "type": "mcq",
          "prompt": "D’après la courbe, à quelle température la photosynthèse est-elle la plus intense ?",
          "options": [
            "Vers 30 °C",
            "Vers 0 °C",
            "Vers 45 °C",
            "Vers 60 °C"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’optimum thermique."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p02_q5",
          "type": "mcq",
          "prompt": "Pourquoi la photosynthèse s’arrête-t-elle vers 45 °C ?",
          "options": [
            "Les enzymes de la photosynthèse sont dénaturées par la chaleur",
            "Il n’y a plus de lumière",
            "La plante n’a plus d’eau",
            "Le CO₂ disparaît de l’air"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les enzymes sont des protéines fragiles."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p02_q6",
          "type": "mcq",
          "prompt": "Des chlorelles cultivées 10 jours à la lumière ont une biomasse de 210 µg/mL à 6 % de CO₂, 150 µg/mL de 8 à 10 %, et 0 à partir de 12 %. Que montre ce résultat ?",
          "options": [
            "Le CO₂ favorise la production jusqu’à un optimum, mais un excès devient toxique",
            "Plus il y a de CO₂, plus la biomasse augmente sans limite",
            "Le CO₂ n’a aucun effet",
            "Les chlorelles ne font pas de photosynthèse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme pour la température, il existe un optimum."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l08_photosynthese_p03",
      "order": 3,
      "title": "La chlorophylle et le chloroplaste",
      "summary": "Feuille panachée, chloroplaste, thylakoïdes, pigments.",
      "conceptExplanation": "- Expérience de la feuille panachée : une plante à feuilles en partie vertes, en partie blanches, est éclairée une journée en présence de CO₂. On fait bouillir une feuille, on la décolore dans l’alcool bouillant, puis on la teste à l’eau iodée.\n- Seule la partie verte se colore en bleu violacé : elle contient de l’amidon. La partie blanche, sans chlorophylle, n’en a pas fabriqué.\n- La chlorophylle capte l’énergie lumineuse et permet la production d’amidon, une matière organique.\n- La chlorophylle se trouve dans les chloroplastes, dans la membrane des thylakoïdes. Le chloroplaste a une membrane externe, une membrane interne, un liquide interne (le stroma) où baignent les thylakoïdes, parfois empilés en granums ; on y trouve aussi des grains d’amidon.\n- La chromatographie de la chlorophylle brute sépare quatre pigments : la chlorophylle a et la chlorophylle b (vertes), les xanthophylles (jaunes) et le carotène (jaune orangé).\n- La mélanine (pigment de la peau) et l’anthocyane (pigment rouge-violet des fleurs) ne font pas partie de la chlorophylle brute.",
      "keyRule": "Eau iodée bleu violacé = amidon, seulement dans la partie verte. Chlorophylle dans les thylakoïdes des chloroplastes. 4 pigments : chlorophylles a et b, xanthophylles, carotène.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter la feuille panachée",
        "statement": "Après le test à l’eau iodée, seule la partie verte d’une feuille panachée devient bleu violacé. Concluez.",
        "methodSteps": [
          "Le bleu violacé révèle l’amidon.",
          "Seule la partie verte, qui contient la chlorophylle, en a fabriqué."
        ],
        "conclusion": "La chlorophylle est indispensable à la production de matière organique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Eau iodée",
          "stepTheme": "Test",
          "stepTitle": "Le test de l’amidon",
          "paragraphText": "L’**eau iodée** colore l’**amidon** en **bleu violacé**. Avant le test, on décolore la feuille dans l’**alcool bouillant**.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p03_q1",
            "type": "mcq",
            "prompt": "Quelle couleur prend l’amidon au contact de l’eau iodée ?",
            "options": [
              "Bleu violacé",
              "Rouge",
              "Vert",
              "Jaune orangé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la preuve qu’une matière organique a été produite."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Feuille panachée",
          "stepTheme": "Expérience",
          "stepTitle": "Seule la partie verte produit",
          "paragraphText": "Sur une feuille **panachée**, seule la partie **verte** devient bleu violacé : seule elle a fabriqué de l’amidon.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p03_q2",
            "type": "mcq",
            "prompt": "Une feuille panachée (vert et blanc) éclairée une journée est testée à l’eau iodée : seule la partie verte devient bleu violacé. Que montre ce résultat ?",
            "options": [
              "La chlorophylle est nécessaire à la production d’amidon",
              "La partie blanche produit plus d’amidon",
              "La lumière est inutile",
              "L’eau iodée colore toute la feuille"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La partie blanche n’a pas de chlorophylle."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Chloroplaste",
          "stepTheme": "Organite",
          "stepTitle": "Le chloroplaste",
          "paragraphText": "La chlorophylle se trouve dans les **chloroplastes**, dans la membrane des **thylakoïdes**, qui baignent dans le **stroma**.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p03_q3",
            "type": "mcq",
            "prompt": "Où se trouve la chlorophylle dans la cellule végétale ?",
            "options": [
              "Dans les membranes des thylakoïdes des chloroplastes",
              "Dans le noyau",
              "Dans les mitochondries",
              "Dans la paroi cellulosique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité 2 : la chlorophylle est localisée dans le chloroplaste."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Pigments",
          "stepTheme": "Chromatographie",
          "stepTitle": "Quatre pigments",
          "paragraphText": "La **chromatographie** sépare **quatre** pigments : **chlorophylle a**, **chlorophylle b**, **xanthophylles** et **carotène**.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p03_q4",
            "type": "mcq",
            "prompt": "Combien de pigments la chromatographie de la chlorophylle brute permet-elle de séparer ?",
            "options": [
              "Quatre",
              "Cinq",
              "Deux",
              "Un seul"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité 2 : « on distingue 5 pigments » est faux."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les pigments de la chlorophylle brute",
            "caption": "Séparés par chromatographie, du haut vers le bas du papier.",
            "tableData": {
              "headers": [
                "Pigment",
                "Couleur"
              ],
              "rows": [
                [
                  "Carotène",
                  "Jaune orangé (migre le plus haut)"
                ],
                [
                  "Xanthophylles",
                  "Jaune"
                ],
                [
                  "Chlorophylle a",
                  "Vert (bleuté)"
                ],
                [
                  "Chlorophylle b",
                  "Vert (jaunâtre)"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Pigments",
          "stepTheme": "Activité",
          "stepTitle": "Ce qui n’est pas dans la chlorophylle brute",
          "paragraphText": "La **mélanine** (peau) et l’**anthocyane** (fleurs) ne font **pas** partie de la chlorophylle brute.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p03_q5",
            "type": "mcq",
            "prompt": "Parmi ces pigments, lequel ne fait pas partie de la chlorophylle brute ?",
            "options": [
              "La mélanine",
              "La chlorophylle a",
              "Le carotène",
              "La xanthophylle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé : 2, 4, 5, 6."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Thylakoïdes",
          "stepTheme": "Activité 2",
          "stepTitle": "Les thylakoïdes ne sont pas des pigments",
          "paragraphText": "« Les **thylakoïdes** sont des pigments » : **faux**. Ce sont des **sacs membranaires** du chloroplaste qui **contiennent** les pigments.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p03_q6",
            "type": "mcq",
            "prompt": "« Les thylakoïdes sont des pigments chlorophylliens. » Vrai ou faux ?",
            "options": [
              "Faux : ce sont des structures du chloroplaste qui portent les pigments",
              "Vrai",
              "Faux : ce sont des enzymes du noyau",
              "Vrai, comme le carotène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pigments = molécules ; thylakoïdes = membranes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l08_photosynthese_p03_q1",
          "type": "mcq",
          "prompt": "Quelle couleur prend l’amidon au contact de l’eau iodée ?",
          "options": [
            "Bleu violacé",
            "Rouge",
            "Vert",
            "Jaune orangé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la preuve qu’une matière organique a été produite."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p03_q2",
          "type": "mcq",
          "prompt": "Une feuille panachée (vert et blanc) éclairée une journée est testée à l’eau iodée : seule la partie verte devient bleu violacé. Que montre ce résultat ?",
          "options": [
            "La chlorophylle est nécessaire à la production d’amidon",
            "La partie blanche produit plus d’amidon",
            "La lumière est inutile",
            "L’eau iodée colore toute la feuille"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La partie blanche n’a pas de chlorophylle."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p03_q3",
          "type": "mcq",
          "prompt": "Où se trouve la chlorophylle dans la cellule végétale ?",
          "options": [
            "Dans les membranes des thylakoïdes des chloroplastes",
            "Dans le noyau",
            "Dans les mitochondries",
            "Dans la paroi cellulosique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité 2 : la chlorophylle est localisée dans le chloroplaste."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p03_q4",
          "type": "mcq",
          "prompt": "Combien de pigments la chromatographie de la chlorophylle brute permet-elle de séparer ?",
          "options": [
            "Quatre",
            "Cinq",
            "Deux",
            "Un seul"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité 2 : « on distingue 5 pigments » est faux."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p03_q5",
          "type": "mcq",
          "prompt": "Parmi ces pigments, lequel ne fait pas partie de la chlorophylle brute ?",
          "options": [
            "La mélanine",
            "La chlorophylle a",
            "Le carotène",
            "La xanthophylle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé : 2, 4, 5, 6."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p03_q6",
          "type": "mcq",
          "prompt": "« Les thylakoïdes sont des pigments chlorophylliens. » Vrai ou faux ?",
          "options": [
            "Faux : ce sont des structures du chloroplaste qui portent les pigments",
            "Vrai",
            "Faux : ce sont des enzymes du noyau",
            "Vrai, comme le carotène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pigments = molécules ; thylakoïdes = membranes."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l08_photosynthese_p04",
      "order": 4,
      "title": "Le mécanisme : phase lumineuse et phase sombre",
      "summary": "Photolyse de l’eau, ATP, TH,H⁺ ; cycle de Calvin ; équation bilan.",
      "conceptExplanation": "- La photosynthèse se fait en deux phases : la phase lumineuse (ou claire), dans les thylakoïdes, et la phase sombre (ou obscure), dans le stroma.\n- Phase lumineuse :\n- la lumière excite la chlorophylle, qui perd des électrons, pris en charge par une chaîne photosynthétique (chaîne d’oxydoréduction) ;\n- la chlorophylle récupère des électrons en décomposant l’eau : c’est la photolyse de l’eau, H₂O → 2 H⁺ + ½ O₂ + 2 e⁻, qui libère le dioxygène ;\n- le passage des protons par la sphère pédonculée (ATP synthase) produit de l’ATP : ADP + Pi → ATP ;\n- les électrons et les protons réduisent un transporteur : T⁺ + 2 H⁺ + 2 e⁻ → TH,H⁺.\n- Phase sombre (cycle de Calvin) : dans le stroma, le CO₂ se fixe sur un sucre en C₅, le ribulose diphosphate (RuDP), grâce à une carboxylase ; il se forme un composé en C₆ instable qui donne 2 molécules d’acide phosphoglycérique (APG, en C₃). Grâce à l’ATP et au TH,H⁺ de la phase lumineuse, ces molécules donnent des glucides (amidon), des lipides et des protides, et le RuDP est régénéré.\n- La phase sombre n’utilise pas directement la lumière, mais elle a besoin de l’ATP et du TH,H⁺ produits à la lumière : à l’obscurité, elle s’arrête vite.\n- Équation globale : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂, grâce à l’énergie lumineuse captée par la chlorophylle. Le O₂ dégagé vient de l’eau.",
      "keyRule": "Phase lumineuse (thylakoïdes) : lumière → photolyse de l’eau (O₂) → ATP + TH,H⁺. Phase sombre (stroma) : CO₂ + RuDP → APG → glucides (cycle de Calvin).",
      "formulas": [],
      "workedExample": {
        "title": "D’où vient le dioxygène ?",
        "statement": "Le dioxygène dégagé par la photosynthèse vient-il du CO₂ ou de l’eau ?",
        "methodSteps": [
          "La photolyse de l’eau s’écrit H₂O → 2 H⁺ + ½ O₂ + 2 e⁻.",
          "Le carbone et l’oxygène du CO₂ servent à fabriquer la matière organique."
        ],
        "conclusion": "Le O₂ dégagé vient de l’eau."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Deux phases",
          "stepTheme": "Mécanisme",
          "stepTitle": "Deux phases",
          "paragraphText": "La photosynthèse comprend une **phase lumineuse** (dans les **thylakoïdes**) et une **phase sombre** (dans le **stroma**).",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p04_q1",
            "type": "mcq",
            "prompt": "Où se déroule la phase lumineuse de la photosynthèse ?",
            "options": [
              "Dans les membranes des thylakoïdes",
              "Dans le stroma",
              "Dans le noyau",
              "Dans les mitochondries"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité : 1 des thylakoïdes."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les deux phases de la photosynthèse",
            "caption": "La phase lumineuse (thylakoïdes) produit O₂, ATP et TH,H⁺ ; la phase sombre (stroma) les utilise pour fixer le CO₂ dans le cycle de Calvin.",
            "svgContent": "<svg viewBox=\"0 0 560 300\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Phase lumineuse dans les thylakoïdes : lumière, photolyse de l’eau, O2, ATP, TH,H+ ; phase sombre dans le stroma : CO2, RuDP, APG, glucides\"><rect x=\"10\" y=\"20\" width=\"260\" height=\"260\" rx=\"16\" fill=\"#10B981\" fill-opacity=\"0.08\" stroke=\"#10B981\" stroke-width=\"2\"/><text x=\"140\" y=\"40\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#10B981\">PHASE LUMINEUSE (thylakoïdes)</text><rect x=\"40\" y=\"54\" width=\"200\" height=\"44\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"140\" y=\"72.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Lumière captée</text><text x=\"140\" y=\"87.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">par la chlorophylle</text><line x1=\"140\" y1=\"100\" x2=\"140.0\" y2=\"115.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"140,124 145.0,115.0 135.0,115.0\" fill=\"#94A3B8\"/><rect x=\"40\" y=\"128\" width=\"200\" height=\"44\" rx=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.14\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"140\" y=\"146.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Photolyse de l’eau</text><text x=\"140\" y=\"161.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">H₂O → 2 H⁺ + ½ O₂ + 2 e⁻</text><line x1=\"140\" y1=\"174\" x2=\"140.0\" y2=\"189.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"140,198 145.0,189.0 135.0,189.0\" fill=\"#94A3B8\"/><rect x=\"40\" y=\"202\" width=\"200\" height=\"56\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"140\" y=\"226.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Énergie chimique</text><text x=\"140\" y=\"241.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">ATP et TH,H⁺</text><text x=\"252\" y=\"191\" font-size=\"10.5\" text-anchor=\"end\" font-weight=\"800\" fill=\"#3B82F6\">O₂ rejeté</text><line x1=\"242\" y1=\"230\" x2=\"307.0\" y2=\"230.0\" stroke=\"#8B5CF6\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"316,230 307.0,225.0 307.0,235.0\" fill=\"#8B5CF6\"/><rect x=\"290\" y=\"20\" width=\"260\" height=\"260\" rx=\"16\" fill=\"#F59E0B\" fill-opacity=\"0.08\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"420\" y=\"40\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#F59E0B\">PHASE SOMBRE (stroma)</text><rect x=\"320\" y=\"54\" width=\"200\" height=\"44\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"420\" y=\"72.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">CO₂ + RuDP (C₅)</text><text x=\"420\" y=\"87.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">carboxylase</text><line x1=\"420\" y1=\"100\" x2=\"420.0\" y2=\"115.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"420,124 425.0,115.0 415.0,115.0\" fill=\"#94A3B8\"/><rect x=\"320\" y=\"128\" width=\"200\" height=\"44\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"420\" y=\"154\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">2 APG (C₃)</text><line x1=\"420\" y1=\"174\" x2=\"420.0\" y2=\"189.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"420,198 425.0,189.0 415.0,189.0\" fill=\"#94A3B8\"/><rect x=\"320\" y=\"202\" width=\"200\" height=\"56\" rx=\"10\" fill=\"#10B981\" fill-opacity=\"0.14\" stroke=\"#10B981\" stroke-width=\"2\"/><text x=\"420\" y=\"226.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Cycle de Calvin</text><text x=\"420\" y=\"241.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">glucides, lipides, protides</text><text x=\"420\" y=\"274\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">le RuDP est régénéré</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Photolyse",
          "stepTheme": "Phase lumineuse",
          "stepTitle": "La photolyse de l’eau",
          "paragraphText": "La chlorophylle oxydée récupère des électrons en décomposant l’**eau** : **H₂O → 2 H⁺ + ½ O₂ + 2 e⁻**. C’est la **photolyse**, qui libère le **dioxygène**.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p04_q2",
            "type": "mcq",
            "prompt": "D’où vient le dioxygène dégagé pendant la photosynthèse ?",
            "options": [
              "De la décomposition de l’eau (photolyse)",
              "Du dioxyde de carbone",
              "Du glucose",
              "De l’air du sol"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité : 5 photolyse ; 6 libération d’oxygène."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "ATP et TH,H⁺",
          "stepTheme": "Phase lumineuse",
          "stepTitle": "L’énergie chimique",
          "paragraphText": "La phase lumineuse produit de l’**ATP** (ADP + Pi → ATP, dans la sphère pédonculée) et réduit un transporteur : **T⁺ + 2 H⁺ + 2 e⁻ → TH,H⁺**.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p04_q3",
            "type": "mcq",
            "prompt": "Que produit la phase lumineuse, en plus du dioxygène ?",
            "options": [
              "De l’ATP et un transporteur réduit (TH,H⁺)",
              "Du glucose directement",
              "Du CO₂",
              "De l’amidon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les sources d’énergie de la phase sombre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Cycle de Calvin",
          "stepTheme": "Phase sombre",
          "stepTitle": "La fixation du CO₂",
          "paragraphText": "Dans le stroma, le **CO₂** se fixe sur le **RuDP** (C₅) grâce à une **carboxylase** ; il se forme **2 APG** (C₃), qui donnent des **glucides** ; le RuDP est **régénéré**.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p04_q4",
            "type": "mcq",
            "prompt": "Pendant la phase sombre, sur quelle molécule le CO₂ se fixe-t-il ?",
            "options": [
              "Sur le ribulose diphosphate (RuDP), un sucre en C₅",
              "Sur la chlorophylle",
              "Sur l’eau",
              "Sur l’ATP"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le cycle de Calvin."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Phase sombre",
          "stepTheme": "Nuance",
          "stepTitle": "La phase sombre a besoin de la lumière… indirectement",
          "paragraphText": "La phase sombre n’utilise pas **directement** la lumière, mais elle consomme l’**ATP** et le **TH,H⁺** de la phase lumineuse : à l’obscurité, elle **s’arrête vite**.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p04_q5",
            "type": "mcq",
            "prompt": "Une plante éclairée est brusquement mise à l’obscurité. Pourquoi la fixation du CO₂ s’arrête-t-elle rapidement ?",
            "options": [
              "Parce que l’ATP et le TH,H⁺ fournis par la phase lumineuse ne sont plus produits",
              "Parce que le CO₂ disparaît de l’air",
              "Parce que la chlorophylle est détruite",
              "Parce que le RuDP devient de l’eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les deux phases sont liées."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Équation",
          "stepTheme": "Bilan",
          "stepTitle": "L’équation de la photosynthèse",
          "paragraphText": "**6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂**, grâce à l’énergie **lumineuse** captée par la **chlorophylle**.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p04_q6",
            "type": "mcq",
            "prompt": "Quelle est l’équation globale de la photosynthèse ?",
            "options": [
              "6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂",
              "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O",
              "C₆H₁₂O₆ → 2 CH₃CH₂OH + 2 CO₂",
              "6 O₂ + 6 H₂O → C₆H₁₂O₆ + 6 CO₂"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’inverse de l’équation de la respiration."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l08_photosynthese_p04_q1",
          "type": "mcq",
          "prompt": "Où se déroule la phase lumineuse de la photosynthèse ?",
          "options": [
            "Dans les membranes des thylakoïdes",
            "Dans le stroma",
            "Dans le noyau",
            "Dans les mitochondries"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité : 1 des thylakoïdes."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p04_q2",
          "type": "mcq",
          "prompt": "D’où vient le dioxygène dégagé pendant la photosynthèse ?",
          "options": [
            "De la décomposition de l’eau (photolyse)",
            "Du dioxyde de carbone",
            "Du glucose",
            "De l’air du sol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité : 5 photolyse ; 6 libération d’oxygène."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p04_q3",
          "type": "mcq",
          "prompt": "Que produit la phase lumineuse, en plus du dioxygène ?",
          "options": [
            "De l’ATP et un transporteur réduit (TH,H⁺)",
            "Du glucose directement",
            "Du CO₂",
            "De l’amidon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les sources d’énergie de la phase sombre."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p04_q4",
          "type": "mcq",
          "prompt": "Pendant la phase sombre, sur quelle molécule le CO₂ se fixe-t-il ?",
          "options": [
            "Sur le ribulose diphosphate (RuDP), un sucre en C₅",
            "Sur la chlorophylle",
            "Sur l’eau",
            "Sur l’ATP"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le cycle de Calvin."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p04_q5",
          "type": "mcq",
          "prompt": "Une plante éclairée est brusquement mise à l’obscurité. Pourquoi la fixation du CO₂ s’arrête-t-elle rapidement ?",
          "options": [
            "Parce que l’ATP et le TH,H⁺ fournis par la phase lumineuse ne sont plus produits",
            "Parce que le CO₂ disparaît de l’air",
            "Parce que la chlorophylle est détruite",
            "Parce que le RuDP devient de l’eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les deux phases sont liées."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p04_q6",
          "type": "mcq",
          "prompt": "Quelle est l’équation globale de la photosynthèse ?",
          "options": [
            "6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂",
            "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O",
            "C₆H₁₂O₆ → 2 CH₃CH₂OH + 2 CO₂",
            "6 O₂ + 6 H₂O → C₆H₁₂O₆ + 6 CO₂"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’inverse de l’équation de la respiration."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l08_photosynthese_p05",
      "order": 5,
      "title": "Évaluation : lumière, amidon et biosphère",
      "summary": "Chlorelles à la lumière et à l’obscurité ; importance de la photosynthèse.",
      "conceptExplanation": "- Situation : une feuille de haricot exposée plusieurs heures à la lumière, bouillie, décolorée dans l’alcool bouillant, puis mise dans l’eau iodée, devient bleu violacé : elle a produit de l’amidon grâce à la photosynthèse.\n- Importance de la photosynthèse pour la biosphère : la matière organique produite nourrit tous les êtres vivants (chaînes alimentaires) ; le dioxygène dégagé sert à leur respiration ; l’absorption du CO₂ par les plantes purifie l’air et limite l’effet de serre.\n- Évaluation 2 (chlorelles, eau, ions minéraux, CO₂, 25 °C) : à la lumière (lot A), le nombre de cellules passe de 1,0 à 2,2 millions par mL en 6 jours ; à l’obscurité (lot B), il tombe à 0,3 million par mL et y reste.\n- Explication : à la lumière, les chlorelles font la photosynthèse, produisent de la matière organique et se multiplient. À l’obscurité, elles ne produisent plus rien, consomment leurs réserves par la respiration et beaucoup meurent.\n- Déduction : la lumière est indispensable à la production de matière organique.\n- Facteurs qui influencent la photosynthèse (activité 1) : le dioxyde de carbone, la lumière et la température.",
      "keyRule": "Lumière → photosynthèse → matière organique → croissance. Photosynthèse = nourriture, dioxygène et air purifié pour la biosphère.",
      "formulas": [],
      "workedExample": {
        "title": "Exploiter les deux lots de chlorelles",
        "statement": "Lot A (lumière) : 1,0 → 2,2 millions/mL en 6 jours. Lot B (obscurité) : 1,0 → 0,3 million/mL. Concluez.",
        "methodSteps": [
          "À la lumière, les chlorelles produisent de la matière organique et se multiplient.",
          "À l’obscurité, sans photosynthèse, elles épuisent leurs réserves et beaucoup meurent."
        ],
        "conclusion": "La lumière est indispensable à la production de matière organique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Lot A",
          "stepTheme": "Analyse",
          "stepTitle": "Les chlorelles à la lumière",
          "paragraphText": "À la **lumière**, le nombre de chlorelles passe de **1,0** à **2,2 millions/mL** en 6 jours : elles se **multiplient**.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p05_q1",
            "type": "mcq",
            "prompt": "Des chlorelles à la lumière passent de 1,0 à 2,2 millions de cellules par mL en 6 jours. Comment l’expliquer ?",
            "options": [
              "Elles font la photosynthèse, produisent de la matière organique et se multiplient",
              "Elles respirent sans rien produire",
              "Elles absorbent la matière organique du milieu",
              "Elles meurent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La matière produite sert à fabriquer de nouvelles cellules."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Chlorelles à la lumière et à l’obscurité",
            "caption": "Nombre de cellules (millions par mL) dans un milieu avec eau, ions minéraux et CO₂, à 25 °C.",
            "tableData": {
              "headers": [
                "Jour",
                "Lot A (lumière)",
                "Lot B (obscurité)"
              ],
              "rows": [
                [
                  "0",
                  "1,0",
                  "1,0"
                ],
                [
                  "3",
                  "1,8",
                  "0,3"
                ],
                [
                  "6",
                  "2,2",
                  "0,3"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Lot B",
          "stepTheme": "Analyse",
          "stepTitle": "Les chlorelles à l’obscurité",
          "paragraphText": "À l’**obscurité**, le nombre tombe à **0,3 million/mL** : sans photosynthèse, les chlorelles **épuisent** leurs réserves et beaucoup **meurent**.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p05_q2",
            "type": "mcq",
            "prompt": "Des chlorelles placées à l’obscurité passent de 1,0 à 0,3 million de cellules par mL. Pourquoi ?",
            "options": [
              "Sans photosynthèse, elles épuisent leurs réserves par la respiration et beaucoup meurent",
              "Elles font trop de photosynthèse",
              "Le CO₂ est toxique à l’obscurité",
              "Elles se transforment en amidon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La respiration continue, la production s’arrête."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Lumière",
          "stepTheme": "Déduction",
          "stepTitle": "Le rôle de la lumière",
          "paragraphText": "La **lumière** est **indispensable** à la production de matière organique par les végétaux chlorophylliens.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p05_q3",
            "type": "mcq",
            "prompt": "Que déduire de la comparaison des chlorelles à la lumière et à l’obscurité ?",
            "options": [
              "La lumière est indispensable à la production de matière organique",
              "L’obscurité favorise la croissance",
              "La lumière tue les chlorelles",
              "La lumière ne joue aucun rôle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’énergie de la photosynthèse."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Nourriture",
          "stepTheme": "Biosphère",
          "stepTitle": "Nourrir les êtres vivants",
          "paragraphText": "La matière organique produite par les plantes **nourrit** tous les êtres vivants : c’est le **premier maillon** des chaînes alimentaires.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p05_q4",
            "type": "mcq",
            "prompt": "Pourquoi dit-on que les plantes vertes sont à la base des chaînes alimentaires ?",
            "options": [
              "Parce qu’elles produisent la matière organique qui nourrit les autres êtres vivants",
              "Parce qu’elles mangent les animaux",
              "Parce qu’elles consomment du dioxygène",
              "Parce qu’elles vivent à l’ombre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les producteurs."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Dioxygène",
          "stepTheme": "Biosphère",
          "stepTitle": "Le dioxygène de l’air",
          "paragraphText": "Le **dioxygène** dégagé par la photosynthèse sert à la **respiration** des êtres vivants ; l’absorption du **CO₂** **purifie l’air**.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p05_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces propositions est une importance de la photosynthèse pour la biosphère ?",
            "options": [
              "Elle fournit le dioxygène nécessaire à la respiration des êtres vivants",
              "Elle augmente le CO₂ de l’air",
              "Elle consomme tout le dioxygène",
              "Elle empêche la respiration"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle absorbe aussi le CO₂."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Facteurs",
          "stepTheme": "Activité 1",
          "stepTitle": "Les facteurs de la photosynthèse",
          "paragraphText": "Les facteurs qui influencent la photosynthèse sont le **dioxyde de carbone**, la **lumière** et la **température**.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p05_q6",
            "type": "mcq",
            "prompt": "Parmi les éléments suivants : azote, lumière, dioxygène, température, matière organique, dioxyde de carbone, lesquels influencent la photosynthèse ?",
            "options": [
              "La lumière, la température et le dioxyde de carbone",
              "L’azote, le dioxygène et la matière organique",
              "Seulement la lumière",
              "Le dioxygène et l’azote"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé : dioxyde de carbone, lumière, température."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l08_photosynthese_p05_q1",
          "type": "mcq",
          "prompt": "Des chlorelles à la lumière passent de 1,0 à 2,2 millions de cellules par mL en 6 jours. Comment l’expliquer ?",
          "options": [
            "Elles font la photosynthèse, produisent de la matière organique et se multiplient",
            "Elles respirent sans rien produire",
            "Elles absorbent la matière organique du milieu",
            "Elles meurent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La matière produite sert à fabriquer de nouvelles cellules."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p05_q2",
          "type": "mcq",
          "prompt": "Des chlorelles placées à l’obscurité passent de 1,0 à 0,3 million de cellules par mL. Pourquoi ?",
          "options": [
            "Sans photosynthèse, elles épuisent leurs réserves par la respiration et beaucoup meurent",
            "Elles font trop de photosynthèse",
            "Le CO₂ est toxique à l’obscurité",
            "Elles se transforment en amidon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La respiration continue, la production s’arrête."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p05_q3",
          "type": "mcq",
          "prompt": "Que déduire de la comparaison des chlorelles à la lumière et à l’obscurité ?",
          "options": [
            "La lumière est indispensable à la production de matière organique",
            "L’obscurité favorise la croissance",
            "La lumière tue les chlorelles",
            "La lumière ne joue aucun rôle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’énergie de la photosynthèse."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p05_q4",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que les plantes vertes sont à la base des chaînes alimentaires ?",
          "options": [
            "Parce qu’elles produisent la matière organique qui nourrit les autres êtres vivants",
            "Parce qu’elles mangent les animaux",
            "Parce qu’elles consomment du dioxygène",
            "Parce qu’elles vivent à l’ombre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les producteurs."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p05_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces propositions est une importance de la photosynthèse pour la biosphère ?",
          "options": [
            "Elle fournit le dioxygène nécessaire à la respiration des êtres vivants",
            "Elle augmente le CO₂ de l’air",
            "Elle consomme tout le dioxygène",
            "Elle empêche la respiration"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle absorbe aussi le CO₂."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p05_q6",
          "type": "mcq",
          "prompt": "Parmi les éléments suivants : azote, lumière, dioxygène, température, matière organique, dioxyde de carbone, lesquels influencent la photosynthèse ?",
          "options": [
            "La lumière, la température et le dioxyde de carbone",
            "L’azote, le dioxygène et la matière organique",
            "Seulement la lumière",
            "Le dioxygène et l’azote"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé : dioxyde de carbone, lumière, température."
        }
      ]
    }
  ]
};
