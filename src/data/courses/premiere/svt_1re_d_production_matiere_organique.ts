import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère D_L10_La production de matière organique val.pdf (Mon école à la maison ; thème « La production de la matière organique et son utilisation ») ». Première D (programme propre à la 1re D).
// Fichier généré (scratchpad build_1re_d_svt_d.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_D_L10_PRODUCTION_MATIERE_ORGANIQUE: CurriculumChapter = {
  "id": "premiere_d_svt_l10_production_matiere_organique",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "order": 10,
  "title": "Leçon 10 : La production de la matière organique",
  "summary": "Facteurs de la photosynthèse (lumière, CO₂, température), chloroplaste et pigments, extraction et chromatographie, spectre d’absorption de la chlorophylle, phase lumineuse et phase sombre (cycle de Calvin), importance pour la biosphère.",
  "officialVolumeHours": 9,
  "contentVersion": 2,
  "source": "SVT 1ère D_L10_La production de matière organique val.pdf (Mon école à la maison ; thème « La production de la matière organique et son utilisation »)",
  "points": [
    {
      "id": "premiere_d_svt_l10_production_matiere_organique_p01",
      "order": 1,
      "title": "La lumière et la photosynthèse",
      "summary": "Point de compensation, plantes d’ombre et plantes de lumière.",
      "conceptExplanation": "Situation : dans un jardin botanique, des élèves de 1re D voient de jeunes plantes chétives à l’ombre des grands arbres, et des plantes de la même espèce robustes, aux larges feuilles vert sombre et portant des fruits, dans une clairière. Le professeur explique que les plantes de la clairière produisent plus de matière organique.\n- La photosynthèse est la production de matière organique par les plantes vertes à partir du CO₂ et de l’eau, grâce à l’énergie lumineuse ; elle dégage du dioxygène. On mesure son intensité par le dégagement de O₂ ou l’absorption de CO₂.\n- Expérience : une tomate et une fougère reçoivent des éclairements croissants (température et CO₂ constants).\n- À l’obscurité et sous très faible éclairement, le dégagement de O₂ est négatif : la plante respire plus qu’elle ne fait de photosynthèse.\n- Quand la photosynthèse produit autant de O₂ que la respiration en consomme, le dégagement est nul : c’est le point de compensation lumineux (vers 2,5 à 5 % d’éclairement).\n- L’intensité augmente ensuite jusqu’à un maximum : vers 20 % d’éclairement pour la fougère, vers 70 % pour la tomate. Au-delà, elle reste constante chez la tomate et baisse un peu chez la fougère, dont les structures photosynthétiques s’abîment en forte lumière.\n- La fougère est une plante d’ombre (sciaphile) ; la tomate est une plante de lumière (héliophile).",
      "keyRule": "Obscurité : respiration seule (O₂ consommé). Point de compensation : photosynthèse = respiration. Plante d’ombre : maximum à faible lumière ; plante de lumière : maximum à forte lumière.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer les plantes chétives à l’ombre",
        "statement": "Pourquoi les jeunes plantes à l’ombre des grands arbres sont-elles chétives ?",
        "methodSteps": [
          "À l’ombre, l’éclairement est faible : la photosynthèse dépasse à peine la respiration.",
          "La plante produit donc peu de matière organique pour grandir."
        ],
        "conclusion": "Ces plantes manquent de lumière pour produire assez de matière organique."
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
            "id": "premiere_d_svt_l10_production_matiere_organique_p01_q1",
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
            "id": "premiere_d_svt_l10_production_matiere_organique_p01_q2",
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
            "id": "premiere_d_svt_l10_production_matiere_organique_p01_q3",
            "type": "mcq",
            "prompt": "Comment appelle-t-on l’éclairement pour lequel une plante produit autant de O₂ par photosynthèse qu’elle en consomme par respiration ?",
            "options": [
              "Le point de compensation",
              "L’optimum de température",
              "Le spectre d’absorption",
              "La photolyse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il se situe vers 2,5 à 5 % d’éclairement."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Fougère",
          "stepTheme": "Plante d’ombre",
          "stepTitle": "La fougère, plante d’ombre",
          "paragraphText": "La **fougère** atteint son maximum vers **20 %** d’éclairement, puis baisse un peu : c’est une plante d’**ombre** (**sciaphile**).",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p01_q4",
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
          "paragraphText": "La **tomate** atteint son maximum vers **70 %** d’éclairement et s’y maintient : c’est une plante de **lumière** (**héliophile**).",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p01_q5",
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
          "stepKind": "methode",
          "stepBadge": "Clairière",
          "stepTheme": "Situation",
          "stepTitle": "Les plantes de la clairière",
          "paragraphText": "Dans la **clairière**, l’éclairement est fort : les plantes de lumière y font beaucoup de **photosynthèse** et produisent plus de **matière organique**.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p01_q6",
            "type": "mcq",
            "prompt": "Pourquoi des plantes de lumière d’une même espèce sont-elles plus robustes dans une clairière qu’à l’ombre des grands arbres ?",
            "options": [
              "Elles reçoivent plus de lumière, font plus de photosynthèse et produisent plus de matière organique",
              "Elles reçoivent moins de CO₂",
              "L’ombre leur apporte plus d’eau",
              "Elles respirent moins dans la clairière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La lumière est un facteur de la production."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p01_q1",
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
          "id": "premiere_d_svt_l10_production_matiere_organique_p01_q2",
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
          "id": "premiere_d_svt_l10_production_matiere_organique_p01_q3",
          "type": "mcq",
          "prompt": "Comment appelle-t-on l’éclairement pour lequel une plante produit autant de O₂ par photosynthèse qu’elle en consomme par respiration ?",
          "options": [
            "Le point de compensation",
            "L’optimum de température",
            "Le spectre d’absorption",
            "La photolyse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il se situe vers 2,5 à 5 % d’éclairement."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p01_q4",
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
          "id": "premiere_d_svt_l10_production_matiere_organique_p01_q5",
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
          "id": "premiere_d_svt_l10_production_matiere_organique_p01_q6",
          "type": "mcq",
          "prompt": "Pourquoi des plantes de lumière d’une même espèce sont-elles plus robustes dans une clairière qu’à l’ombre des grands arbres ?",
          "options": [
            "Elles reçoivent plus de lumière, font plus de photosynthèse et produisent plus de matière organique",
            "Elles reçoivent moins de CO₂",
            "L’ombre leur apporte plus d’eau",
            "Elles respirent moins dans la clairière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La lumière est un facteur de la production."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l10_production_matiere_organique_p02",
      "order": 2,
      "title": "Le CO₂ et la température",
      "summary": "Le CO₂ facteur limitant ; l’optimum de température.",
      "conceptExplanation": "- Teneur en CO₂ : de 0 à 0,025 % de CO₂, le dégagement de O₂ passe de valeurs négatives (respiration) à 0 (point de compensation). De 0,025 % à 0,4 %, il croît rapidement puis ralentit ; au-delà de 0,4 %, il reste constant : les structures de la photosynthèse sont saturées.\n- L’air ne contient qu’environ 0,04 % de CO₂ : c’est souvent le CO₂ qui limite la photosynthèse ; c’est un facteur limitant.\n- Température : la photosynthèse est nulle vers 0 °C (enzymes inactives), augmente jusqu’à un optimum vers 30 °C (40 mm³ de CO₂ absorbé), puis diminue et s’annule vers 45 °C (enzymes dénaturées par la chaleur).\n- La plante verte produit donc la matière organique sous l’influence de la lumière, de la teneur en CO₂ et de la température.\n- Correction du document : il donne une teneur en CO₂ de l’air « d’environ 0,003 % » ; c’est environ 0,04 %, comme le montre le repère « air » de sa propre courbe (entre 0,02 et 0,06 %).",
      "keyRule": "CO₂ : facteur limitant (air ≈ 0,04 %), saturation vers 0,4 %. Température : optimum ≈ 30 °C, nulle à 0 °C et vers 45 °C (enzymes).",
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
          "paragraphText": "De **0,025 %** à **0,4 %** de CO₂, le dégagement de O₂ **croît**, puis il se **stabilise** au-delà de 0,4 % (saturation).",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p02_q1",
            "type": "mcq",
            "prompt": "Comment évolue l’intensité de la photosynthèse quand on augmente la teneur en CO₂ de l’air de 0,025 % à 0,4 %, à lumière et température constantes ?",
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
          "stepKind": "exemple",
          "stepBadge": "Faible CO₂",
          "stepTheme": "Courbe",
          "stepTitle": "Trop peu de CO₂",
          "paragraphText": "Entre **0 et 0,025 %** de CO₂, le dégagement de O₂ est **négatif** puis **nul** : la respiration l’emporte, puis l’égale.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p02_q2",
            "type": "mcq",
            "prompt": "Une plante éclairée est placée dans un air presque sans CO₂ (moins de 0,025 %). Que se passe-t-il ?",
            "options": [
              "Elle consomme du O₂ par respiration plus qu’elle n’en produit",
              "Elle produit beaucoup de dioxygène",
              "Elle fabrique beaucoup d’amidon",
              "Elle n’a plus besoin de lumière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il existe aussi un point de compensation pour le CO₂."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "0,04 %",
          "stepTheme": "Erreur du document",
          "stepTitle": "La teneur en CO₂ de l’air",
          "paragraphText": "Le document écrit « **0,003 %** » : l’air contient en fait environ **0,04 %** de CO₂, ce qui limite souvent la photosynthèse.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p02_q3",
            "type": "mcq",
            "prompt": "Quelle est la teneur approximative de l’air en dioxyde de carbone ?",
            "options": [
              "Environ 0,04 %",
              "Environ 0,003 %",
              "Environ 21 %",
              "Environ 78 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "21 % est la teneur en O₂, 78 % celle en diazote."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Facteur limitant",
          "stepTheme": "Notion",
          "stepTitle": "Un facteur limitant",
          "paragraphText": "Le facteur présent en **quantité insuffisante** freine toute la photosynthèse : c’est le **facteur limitant**. Dans l’air, c’est souvent le **CO₂**.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p02_q4",
            "type": "mcq",
            "prompt": "Pourquoi enrichit-on parfois l’air des serres en CO₂ ?",
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
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Température",
          "stepTheme": "Optimum",
          "stepTitle": "L’optimum de température",
          "paragraphText": "La photosynthèse est **nulle vers 0 °C**, **maximale vers 30 °C** et s’**annule vers 45 °C**.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p02_q5",
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
            "caption": "Nulle à 0 °C, maximale vers 30 °C (40 mm³ de CO₂ absorbé), nulle de nouveau vers 45 °C : les enzymes sont d’abord peu actives, puis détruites par la chaleur.",
            "svgContent": "<svg viewBox=\"0 0 560 240\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Intensité photosynthétique selon la température : maximum vers 30 °C\"><line x1=\"60\" y1=\"200\" x2=\"540\" y2=\"200\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"200\" x2=\"60\" y2=\"29\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polyline points=\"60.0,200.0 160.0,165.8 260.0,131.6 330.0,63.2 370.0,48.0 410.0,63.2 460.0,116.4 510.0,200.0\" fill=\"none\" stroke=\"#F59E0B\" stroke-width=\"2.8\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"60\" y=\"216\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">0</text><text x=\"160\" y=\"216\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">10</text><text x=\"260\" y=\"216\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">20</text><text x=\"360\" y=\"216\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">30</text><text x=\"460\" y=\"216\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">40</text><text x=\"510\" y=\"216\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">45</text><text x=\"300\" y=\"232\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">température (°C)</text><text x=\"370\" y=\"40\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#F59E0B\">optimum ≈ 30 °C</text><text x=\"64\" y=\"16\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">CO₂ absorbé (mm³)</text></svg>"
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Enzymes",
          "stepTheme": "Explication",
          "stepTitle": "Pourquoi la chaleur arrête tout",
          "paragraphText": "La photosynthèse dépend d’**enzymes** : inactives au froid, elles sont **dénaturées** par une forte **chaleur**.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p02_q6",
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
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p02_q1",
          "type": "mcq",
          "prompt": "Comment évolue l’intensité de la photosynthèse quand on augmente la teneur en CO₂ de l’air de 0,025 % à 0,4 %, à lumière et température constantes ?",
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
          "id": "premiere_d_svt_l10_production_matiere_organique_p02_q2",
          "type": "mcq",
          "prompt": "Une plante éclairée est placée dans un air presque sans CO₂ (moins de 0,025 %). Que se passe-t-il ?",
          "options": [
            "Elle consomme du O₂ par respiration plus qu’elle n’en produit",
            "Elle produit beaucoup de dioxygène",
            "Elle fabrique beaucoup d’amidon",
            "Elle n’a plus besoin de lumière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il existe aussi un point de compensation pour le CO₂."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p02_q3",
          "type": "mcq",
          "prompt": "Quelle est la teneur approximative de l’air en dioxyde de carbone ?",
          "options": [
            "Environ 0,04 %",
            "Environ 0,003 %",
            "Environ 21 %",
            "Environ 78 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "21 % est la teneur en O₂, 78 % celle en diazote."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p02_q4",
          "type": "mcq",
          "prompt": "Pourquoi enrichit-on parfois l’air des serres en CO₂ ?",
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
          "id": "premiere_d_svt_l10_production_matiere_organique_p02_q5",
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
          "id": "premiere_d_svt_l10_production_matiere_organique_p02_q6",
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
      ]
    },
    {
      "id": "premiere_d_svt_l10_production_matiere_organique_p03",
      "order": 3,
      "title": "Le chloroplaste et ses pigments",
      "summary": "Feuille panachée, chloroplaste, extraction et chromatographie.",
      "conceptExplanation": "- Au microscope optique, les cellules d’une feuille verte contiennent de petits grains verts : les chloroplastes. Au microscope électronique, un chloroplaste montre une membrane externe, une membrane interne, un liquide (le stroma) où baignent des sacs aplatis, les thylakoïdes (empilés en granums), et des grains d’amidon. La chlorophylle est dans les membranes des thylakoïdes.\n- Feuille panachée éclairée une journée, bouillie, décolorée à l’alcool bouillant, puis testée à l’eau iodée : seule la partie verte devient bleu violacé (amidon). La chlorophylle est nécessaire à la production de matière organique.\n- Extraction : on broie des feuilles dans l’acétone (ou l’alcool à 95°) avec du sulfate de sodium anhydre (qui absorbe l’eau) et du carbonate de calcium (qui neutralise les acides), puis on filtre : on obtient la chlorophylle brute.\n- Chromatographie : une tache de chlorophylle brute est déposée sur un papier dont le bas trempe dans un solvant, à l’abri de la lumière. Le solvant monte et entraîne les pigments à des vitesses différentes. On sépare quatre pigments : carotène (jaune orangé, en haut), xanthophylles (jaunes), chlorophylle a et chlorophylle b (vertes).\n- La « chlorophylle » est donc un mélange de pigments.\n- Exercice 1 : 1 faux (les thylakoïdes sont des sacs membranaires qui portent les pigments) ; 2 vrai ; 3 faux (il y a quatre pigments, pas cinq) ; 4 faux (voir le spectre d’absorption).",
      "keyRule": "Chloroplaste : membranes, stroma, thylakoïdes (pigments), amidon. Chlorophylle brute = 4 pigments : chlorophylles a et b, xanthophylles, carotène.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter la feuille panachée",
        "statement": "Après le test à l’eau iodée, seule la partie verte d’une feuille panachée devient bleu violacé. Conclusion ?",
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
          "stepBadge": "Feuille panachée",
          "stepTheme": "Expérience",
          "stepTitle": "Seule la partie verte produit",
          "paragraphText": "Sur une feuille **panachée**, seule la partie **verte** devient **bleu violacé** à l’eau iodée : seule elle a fabriqué de l’**amidon**.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p03_q1",
            "type": "mcq",
            "prompt": "Une feuille panachée (vert et blanc) éclairée une journée est testée à l’eau iodée : seule la partie verte devient bleu violacé. Que montre ce résultat ?",
            "options": [
              "La chlorophylle est nécessaire à la production d’amidon",
              "La partie blanche produit plus d’amidon",
              "La lumière est inutile",
              "L’eau iodée colore toute la feuille"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On décolore d’abord la feuille dans l’alcool bouillant."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Chloroplaste",
          "stepTheme": "Ultrastructure",
          "stepTitle": "Le chloroplaste",
          "paragraphText": "Le **chloroplaste** a deux **membranes**, un liquide (le **stroma**), des **thylakoïdes** (empilés en granums) et des grains d’**amidon**.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p03_q2",
            "type": "mcq",
            "prompt": "Où se trouve la chlorophylle dans le chloroplaste ?",
            "options": [
              "Dans les membranes des thylakoïdes",
              "Dans le stroma uniquement",
              "Dans les grains d’amidon",
              "Dans la membrane externe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice 1 : la chlorophylle est bien dans le chloroplaste."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Extraction",
          "stepTheme": "Manipulation",
          "stepTitle": "Extraire la chlorophylle",
          "paragraphText": "On **broie** des feuilles dans l’**acétone** avec du **sulfate de sodium anhydre** (qui retire l’eau) et du **carbonate de calcium** (qui neutralise les acides), puis on **filtre**.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p03_q3",
            "type": "mcq",
            "prompt": "Pourquoi ajoute-t-on du carbonate de calcium quand on broie des feuilles dans l’acétone pour extraire la chlorophylle ?",
            "options": [
              "Pour neutraliser les acides des cellules qui abîmeraient la chlorophylle",
              "Pour colorer la solution en vert",
              "Pour faire bouillir l’acétone",
              "Pour retirer l’amidon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le sulfate de sodium anhydre, lui, absorbe l’eau."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Chromatographie",
          "stepTheme": "Séparation",
          "stepTitle": "Séparer les pigments",
          "paragraphText": "Sur le papier, le **solvant** monte et entraîne les pigments à des **vitesses différentes** : ils se **séparent** en bandes.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p03_q4",
            "type": "mcq",
            "prompt": "Pourquoi les pigments de la chlorophylle brute se séparent-ils sur le papier de chromatographie ?",
            "options": [
              "Parce qu’ils sont entraînés par le solvant à des vitesses différentes",
              "Parce qu’ils ont tous la même couleur",
              "Parce que la lumière les détruit",
              "Parce que le papier les fabrique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On garde le montage à l’abri de la lumière."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Quatre pigments",
          "stepTheme": "Erreur du document",
          "stepTitle": "Quatre, pas cinq",
          "paragraphText": "La chromatographie sépare **quatre** pigments : **carotène**, **xanthophylles**, **chlorophylle a**, **chlorophylle b**. L’exercice « 5 pigments » est **faux**.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p03_q5",
            "type": "mcq",
            "prompt": "Combien de pigments la chromatographie de la chlorophylle brute permet-elle de séparer ?",
            "options": [
              "Quatre",
              "Cinq",
              "Deux",
              "Un seul"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le carotène migre le plus haut."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les pigments de la chlorophylle brute",
            "caption": "Séparés par chromatographie sur papier, du haut vers le bas.",
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
                  "Vert"
                ],
                [
                  "Chlorophylle b",
                  "Vert jaunâtre"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Thylakoïdes",
          "stepTheme": "Exercice 1",
          "stepTitle": "Les thylakoïdes ne sont pas des pigments",
          "paragraphText": "« Les **thylakoïdes** sont des pigments » : **faux**. Ce sont des **sacs membranaires** du chloroplaste qui **portent** les pigments.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p03_q6",
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
          "id": "premiere_d_svt_l10_production_matiere_organique_p03_q1",
          "type": "mcq",
          "prompt": "Une feuille panachée (vert et blanc) éclairée une journée est testée à l’eau iodée : seule la partie verte devient bleu violacé. Que montre ce résultat ?",
          "options": [
            "La chlorophylle est nécessaire à la production d’amidon",
            "La partie blanche produit plus d’amidon",
            "La lumière est inutile",
            "L’eau iodée colore toute la feuille"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On décolore d’abord la feuille dans l’alcool bouillant."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p03_q2",
          "type": "mcq",
          "prompt": "Où se trouve la chlorophylle dans le chloroplaste ?",
          "options": [
            "Dans les membranes des thylakoïdes",
            "Dans le stroma uniquement",
            "Dans les grains d’amidon",
            "Dans la membrane externe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice 1 : la chlorophylle est bien dans le chloroplaste."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p03_q3",
          "type": "mcq",
          "prompt": "Pourquoi ajoute-t-on du carbonate de calcium quand on broie des feuilles dans l’acétone pour extraire la chlorophylle ?",
          "options": [
            "Pour neutraliser les acides des cellules qui abîmeraient la chlorophylle",
            "Pour colorer la solution en vert",
            "Pour faire bouillir l’acétone",
            "Pour retirer l’amidon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le sulfate de sodium anhydre, lui, absorbe l’eau."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p03_q4",
          "type": "mcq",
          "prompt": "Pourquoi les pigments de la chlorophylle brute se séparent-ils sur le papier de chromatographie ?",
          "options": [
            "Parce qu’ils sont entraînés par le solvant à des vitesses différentes",
            "Parce qu’ils ont tous la même couleur",
            "Parce que la lumière les détruit",
            "Parce que le papier les fabrique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On garde le montage à l’abri de la lumière."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p03_q5",
          "type": "mcq",
          "prompt": "Combien de pigments la chromatographie de la chlorophylle brute permet-elle de séparer ?",
          "options": [
            "Quatre",
            "Cinq",
            "Deux",
            "Un seul"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le carotène migre le plus haut."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p03_q6",
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
      "id": "premiere_d_svt_l10_production_matiere_organique_p04",
      "order": 4,
      "title": "La chlorophylle capte la lumière",
      "summary": "Spectre d’émission et spectre d’absorption.",
      "conceptExplanation": "- Expérience 1 : un prisme décompose la lumière blanche en bandes colorées (rouge, orange, jaune, vert, bleu, indigo, violet) : c’est le spectre d’émission de la lumière blanche. Ces radiations ont des longueurs d’onde d’environ 400 nm (violet) à 700 nm (rouge) et portent de l’énergie.\n- Expérience 2 : on place une solution de chlorophylle brute devant la source. Des bandes sombres apparaissent : les radiations correspondantes ont été absorbées. C’est le spectre d’absorption de la chlorophylle.\n- La chlorophylle absorbe surtout le bleu-violet et le rouge. Elle absorbe très peu le vert, qu’elle renvoie : c’est pourquoi les feuilles paraissent vertes.\n- En absorbant ces radiations, la chlorophylle capte l’énergie lumineuse et la convertit en énergie chimique, utilisée pour fabriquer la matière organique.\n- Exercice 1, affirmation 4 : « la chlorophylle absorbe toutes les radiations sauf le rouge » est faux. Elle absorbe fortement le rouge ; c’est le vert qu’elle absorbe peu.",
      "keyRule": "La chlorophylle absorbe le bleu-violet et le rouge, peu le vert. Elle capte l’énergie lumineuse et la convertit en énergie chimique.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la couleur verte des feuilles",
        "statement": "Pourquoi les feuilles sont-elles vertes ?",
        "methodSteps": [
          "La chlorophylle absorbe le bleu-violet et le rouge.",
          "Elle absorbe peu le vert, qui est renvoyé vers nos yeux."
        ],
        "conclusion": "Les feuilles paraissent vertes parce que leur chlorophylle renvoie la lumière verte."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Spectre d’émission",
          "stepTheme": "Prisme",
          "stepTitle": "Décomposer la lumière blanche",
          "paragraphText": "Un **prisme** décompose la lumière blanche en **radiations** colorées, du **violet** (≈ 400 nm) au **rouge** (≈ 700 nm) : c’est le **spectre d’émission**.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p04_q1",
            "type": "mcq",
            "prompt": "Qu’obtient-on en faisant passer de la lumière blanche à travers un prisme ?",
            "options": [
              "Un spectre de bandes colorées, du violet au rouge",
              "Une lumière uniquement verte",
              "Une lumière noire",
              "De la chlorophylle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque couleur a sa longueur d’onde."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Bandes sombres",
          "stepTheme": "Expérience 2",
          "stepTitle": "La chlorophylle arrête certaines couleurs",
          "paragraphText": "Avec une solution de **chlorophylle** devant la source, des **bandes sombres** apparaissent : ces radiations ont été **absorbées**.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p04_q2",
            "type": "mcq",
            "prompt": "On place une solution de chlorophylle entre une lampe et un prisme : certaines bandes colorées du spectre deviennent sombres. Pourquoi ?",
            "options": [
              "Ces radiations ont été absorbées par la chlorophylle",
              "Le prisme s’est cassé",
              "La chlorophylle émet de la lumière noire",
              "La lampe s’est éteinte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le spectre d’absorption."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Le spectre d’absorption de la chlorophylle",
            "caption": "La chlorophylle absorbe surtout le bleu-violet et le rouge ; elle absorbe peu le vert, qu’elle renvoie : c’est pourquoi les feuilles paraissent vertes.",
            "svgContent": "<svg viewBox=\"0 0 560 226\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Spectre d’absorption de la chlorophylle : forte absorption dans le bleu-violet et le rouge, faible dans le vert\"><rect x=\"60\" y=\"172\" width=\"75\" height=\"16\" fill=\"#7c3aed\" fill-opacity=\"0.85\"/><rect x=\"135\" y=\"172\" width=\"60\" height=\"16\" fill=\"#2563eb\" fill-opacity=\"0.85\"/><rect x=\"195\" y=\"172\" width=\"45\" height=\"16\" fill=\"#06b6d4\" fill-opacity=\"0.85\"/><rect x=\"240\" y=\"172\" width=\"75\" height=\"16\" fill=\"#16a34a\" fill-opacity=\"0.85\"/><rect x=\"315\" y=\"172\" width=\"45\" height=\"16\" fill=\"#eab308\" fill-opacity=\"0.85\"/><rect x=\"360\" y=\"172\" width=\"60\" height=\"16\" fill=\"#f97316\" fill-opacity=\"0.85\"/><rect x=\"420\" y=\"172\" width=\"90\" height=\"16\" fill=\"#dc2626\" fill-opacity=\"0.85\"/><line x1=\"60\" y1=\"160\" x2=\"515\" y2=\"160\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"160\" x2=\"60\" y2=\"30\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polyline points=\"60.0,85.0 90.0,60.0 112.5,41.3 135.0,53.8 165.0,91.3 210.0,135.0 255.0,147.5 300.0,145.0 360.0,137.5 405.0,116.3 450.0,60.0 472.5,72.5 495.0,122.5 510.0,141.3\" fill=\"none\" stroke=\"#10B981\" stroke-width=\"2.8\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"60\" y=\"204\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">400</text><text x=\"210\" y=\"204\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">500</text><text x=\"360\" y=\"204\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">600</text><text x=\"510\" y=\"204\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">700</text><text x=\"287\" y=\"220\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">longueur d’onde (nm)</text><text x=\"150\" y=\"40\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#3B82F6\">bleu absorbé</text><text x=\"457.5\" y=\"46\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">rouge absorbé</text><text x=\"277.5\" y=\"128\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#10B981\">vert peu absorbé</text><text x=\"64\" y=\"22\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">absorption</text></svg>"
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Bleu et rouge",
          "stepTheme": "Résultat",
          "stepTitle": "Les couleurs absorbées",
          "paragraphText": "La chlorophylle absorbe surtout le **bleu-violet** et le **rouge**.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p04_q3",
            "type": "mcq",
            "prompt": "Quelles radiations la chlorophylle absorbe-t-elle le plus ?",
            "options": [
              "Le bleu-violet et le rouge",
              "Le vert seulement",
              "Le jaune et le vert",
              "Aucune radiation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les radiations les plus efficaces pour la photosynthèse."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Vert",
          "stepTheme": "Explication",
          "stepTitle": "Pourquoi les feuilles sont vertes",
          "paragraphText": "La chlorophylle **absorbe peu le vert** : elle le **renvoie**. C’est pourquoi les feuilles paraissent **vertes**.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p04_q4",
            "type": "mcq",
            "prompt": "Pourquoi les feuilles des plantes paraissent-elles vertes ?",
            "options": [
              "Parce que leur chlorophylle absorbe peu la lumière verte et la renvoie",
              "Parce qu’elles absorbent surtout le vert",
              "Parce qu’elles émettent de la lumière verte",
              "Parce qu’elles contiennent du carotène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On voit la couleur qui n’est pas absorbée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Sauf le rouge ?",
          "stepTheme": "Exercice 1",
          "stepTitle": "Une affirmation fausse",
          "paragraphText": "« La chlorophylle absorbe toutes les radiations **sauf le rouge** » : **faux**. Elle absorbe **fortement** le rouge ; c’est le **vert** qu’elle absorbe peu.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p04_q5",
            "type": "mcq",
            "prompt": "« La chlorophylle absorbe toutes les radiations de la lumière blanche sauf le rouge. » Vrai ou faux ?",
            "options": [
              "Faux : elle absorbe le rouge ; c’est le vert qu’elle absorbe peu",
              "Vrai",
              "Vrai, et elle absorbe aussi le vert",
              "Faux : elle n’absorbe aucune radiation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice 1 corrigé : 1 F, 2 V, 3 F, 4 F."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepBadge": "Énergie",
          "stepTheme": "Rôle",
          "stepTitle": "Capter l’énergie lumineuse",
          "paragraphText": "En absorbant ces radiations, la chlorophylle **capte l’énergie lumineuse** et la **convertit en énergie chimique** pour fabriquer la matière organique.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p04_q6",
            "type": "mcq",
            "prompt": "Quel est le rôle de la chlorophylle dans la photosynthèse ?",
            "options": [
              "Capter l’énergie lumineuse et la convertir en énergie chimique",
              "Absorber l’eau du sol",
              "Rejeter le CO₂",
              "Stocker l’amidon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le point de départ de la phase lumineuse."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p04_q1",
          "type": "mcq",
          "prompt": "Qu’obtient-on en faisant passer de la lumière blanche à travers un prisme ?",
          "options": [
            "Un spectre de bandes colorées, du violet au rouge",
            "Une lumière uniquement verte",
            "Une lumière noire",
            "De la chlorophylle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque couleur a sa longueur d’onde."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p04_q2",
          "type": "mcq",
          "prompt": "On place une solution de chlorophylle entre une lampe et un prisme : certaines bandes colorées du spectre deviennent sombres. Pourquoi ?",
          "options": [
            "Ces radiations ont été absorbées par la chlorophylle",
            "Le prisme s’est cassé",
            "La chlorophylle émet de la lumière noire",
            "La lampe s’est éteinte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le spectre d’absorption."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p04_q3",
          "type": "mcq",
          "prompt": "Quelles radiations la chlorophylle absorbe-t-elle le plus ?",
          "options": [
            "Le bleu-violet et le rouge",
            "Le vert seulement",
            "Le jaune et le vert",
            "Aucune radiation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les radiations les plus efficaces pour la photosynthèse."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p04_q4",
          "type": "mcq",
          "prompt": "Pourquoi les feuilles des plantes paraissent-elles vertes ?",
          "options": [
            "Parce que leur chlorophylle absorbe peu la lumière verte et la renvoie",
            "Parce qu’elles absorbent surtout le vert",
            "Parce qu’elles émettent de la lumière verte",
            "Parce qu’elles contiennent du carotène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On voit la couleur qui n’est pas absorbée."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p04_q5",
          "type": "mcq",
          "prompt": "« La chlorophylle absorbe toutes les radiations de la lumière blanche sauf le rouge. » Vrai ou faux ?",
          "options": [
            "Faux : elle absorbe le rouge ; c’est le vert qu’elle absorbe peu",
            "Vrai",
            "Vrai, et elle absorbe aussi le vert",
            "Faux : elle n’absorbe aucune radiation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice 1 corrigé : 1 F, 2 V, 3 F, 4 F."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p04_q6",
          "type": "mcq",
          "prompt": "Quel est le rôle de la chlorophylle dans la photosynthèse ?",
          "options": [
            "Capter l’énergie lumineuse et la convertir en énergie chimique",
            "Absorber l’eau du sol",
            "Rejeter le CO₂",
            "Stocker l’amidon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le point de départ de la phase lumineuse."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l10_production_matiere_organique_p05",
      "order": 5,
      "title": "Le mécanisme : phase lumineuse et phase sombre",
      "summary": "Photolyse de l’eau, ATP, TH,H⁺ ; cycle de Calvin ; équation bilan.",
      "conceptExplanation": "- La photosynthèse se fait en deux phases : la phase lumineuse (ou claire), dans les membranes des thylakoïdes, et la phase sombre (ou obscure), dans le stroma.\n- Phase lumineuse :\n- étape 1 : la lumière excite la chlorophylle, qui perd des électrons, pris en charge par la chaîne photosynthétique (chaîne d’oxydoréduction). La chlorophylle oxydée récupère des électrons en décomposant l’eau : c’est la photolyse de l’eau, H₂O → 2 H⁺ + ½ O₂ + 2 e⁻, qui libère le dioxygène ;\n- étape 2 : au niveau de la sphère pédonculée, de l’ATP est fabriqué : ADP + Pi → ATP ;\n- étape 3 : les électrons et les protons réduisent un transporteur : T⁺ + 2 H⁺ + 2 e⁻ → TH,H⁺.\n- Phase sombre (cycle de Calvin), aussi appelée phase d’assimilation : dans le stroma, le CO₂ se fixe sur un sucre en C₅, le ribulose diphosphate (RuDP), grâce à une carboxylase. Il se forme un composé en C₆ instable qui donne 2 molécules d’acide phosphoglycérique (APG, en C₃). Grâce à l’ATP et au TH,H⁺ de la phase lumineuse, ces molécules donnent des glucides (amidon), des lipides et des protides, et le RuDP est régénéré.\n- La phase sombre n’utilise pas directement la lumière, mais elle a besoin de l’ATP et du TH,H⁺ produits à la lumière.\n- Équation globale : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂, grâce à l’énergie lumineuse captée par la chlorophylle. Le O₂ dégagé vient de l’eau.\n- Remarque : le document écrit tantôt TH,H⁺, tantôt TH₂ ; ce sont deux façons de noter le même transporteur réduit.",
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
            "id": "premiere_d_svt_l10_production_matiere_organique_p05_q1",
            "type": "mcq",
            "prompt": "Où se déroule la phase lumineuse de la photosynthèse ?",
            "options": [
              "Dans les membranes des thylakoïdes",
              "Dans le stroma",
              "Dans le noyau",
              "Dans les mitochondries"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La phase sombre se fait dans le stroma."
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
          "stepTheme": "Étape 1",
          "stepTitle": "La photolyse de l’eau",
          "paragraphText": "La chlorophylle oxydée récupère des électrons en décomposant l’**eau** : **H₂O → 2 H⁺ + ½ O₂ + 2 e⁻**. C’est la **photolyse**, qui libère le **dioxygène**.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p05_q2",
            "type": "mcq",
            "prompt": "D’où vient le dioxygène dégagé pendant la photosynthèse ?",
            "options": [
              "De la décomposition de l’eau (photolyse)",
              "Du dioxyde de carbone",
              "Du glucose",
              "De l’air du sol"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Photolyse : coupure par la lumière."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "ATP et TH,H⁺",
          "stepTheme": "Étapes 2 et 3",
          "stepTitle": "L’énergie chimique",
          "paragraphText": "La phase lumineuse produit de l’**ATP** (ADP + Pi → ATP, dans la sphère pédonculée) et réduit un transporteur : **T⁺ + 2 H⁺ + 2 e⁻ → TH,H⁺**.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p05_q3",
            "type": "mcq",
            "prompt": "Que produit la phase lumineuse, en plus du dioxygène ?",
            "options": [
              "De l’ATP et un transporteur réduit (TH,H⁺)",
              "Du glucose directement",
              "Du CO₂",
              "De l’amidon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "TH,H⁺ se note aussi TH₂."
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
            "id": "premiere_d_svt_l10_production_matiere_organique_p05_q4",
            "type": "mcq",
            "prompt": "Pendant la phase sombre, sur quelle molécule le CO₂ se fixe-t-il ?",
            "options": [
              "Sur le ribulose diphosphate (RuDP), un sucre en C₅",
              "Sur la chlorophylle",
              "Sur l’eau",
              "Sur l’ATP"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le cycle de Calvin, ou phase d’assimilation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Phase sombre",
          "stepTheme": "Nuance",
          "stepTitle": "La phase sombre dépend de la lumière… indirectement",
          "paragraphText": "La phase sombre n’utilise pas **directement** la lumière, mais elle consomme l’**ATP** et le **TH,H⁺** de la phase lumineuse : à l’obscurité, elle **s’arrête vite**.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p05_q5",
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
            "id": "premiere_d_svt_l10_production_matiere_organique_p05_q6",
            "type": "mcq",
            "prompt": "Quelle est l’équation globale de la photosynthèse ?",
            "options": [
              "6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂",
              "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O",
              "C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂",
              "6 O₂ + 6 H₂O → C₆H₁₂O₆ + 6 CO₂"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’inverse de l’équation de la respiration."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p05_q1",
          "type": "mcq",
          "prompt": "Où se déroule la phase lumineuse de la photosynthèse ?",
          "options": [
            "Dans les membranes des thylakoïdes",
            "Dans le stroma",
            "Dans le noyau",
            "Dans les mitochondries"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La phase sombre se fait dans le stroma."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p05_q2",
          "type": "mcq",
          "prompt": "D’où vient le dioxygène dégagé pendant la photosynthèse ?",
          "options": [
            "De la décomposition de l’eau (photolyse)",
            "Du dioxyde de carbone",
            "Du glucose",
            "De l’air du sol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Photolyse : coupure par la lumière."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p05_q3",
          "type": "mcq",
          "prompt": "Que produit la phase lumineuse, en plus du dioxygène ?",
          "options": [
            "De l’ATP et un transporteur réduit (TH,H⁺)",
            "Du glucose directement",
            "Du CO₂",
            "De l’amidon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "TH,H⁺ se note aussi TH₂."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p05_q4",
          "type": "mcq",
          "prompt": "Pendant la phase sombre, sur quelle molécule le CO₂ se fixe-t-il ?",
          "options": [
            "Sur le ribulose diphosphate (RuDP), un sucre en C₅",
            "Sur la chlorophylle",
            "Sur l’eau",
            "Sur l’ATP"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le cycle de Calvin, ou phase d’assimilation."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p05_q5",
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
          "id": "premiere_d_svt_l10_production_matiere_organique_p05_q6",
          "type": "mcq",
          "prompt": "Quelle est l’équation globale de la photosynthèse ?",
          "options": [
            "6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂",
            "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O",
            "C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂",
            "6 O₂ + 6 H₂O → C₆H₁₂O₆ + 6 CO₂"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’inverse de l’équation de la respiration."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l10_production_matiere_organique_p06",
      "order": 6,
      "title": "Évaluation : la feuille de haricot et la biosphère",
      "summary": "Interpréter un test à l’eau iodée ; importance de la photosynthèse.",
      "conceptExplanation": "- Situation d’évaluation : une feuille de haricot exposée plusieurs heures à la lumière, plongée dans l’eau bouillante, puis dans l’alcool bouillant et rincée, devient bleu violacé au contact de l’eau iodée.\n- Le phénomène de production de matière organique est la photosynthèse. La coloration bleu violacé montre la présence d’amidon, fabriqué dans les chloroplastes à partir du CO₂ et de l’eau grâce à la lumière.\n- L’eau bouillante tue les cellules et l’alcool bouillant dissout la chlorophylle : la feuille décolorée permet de bien voir la couleur donnée par l’eau iodée.\n- Activité d’application : parmi « air, dioxyde de carbone, azote, lumière, température, dioxygène, matière organique », les facteurs qui influencent la photosynthèse sont le dioxyde de carbone, la lumière et la température.\n- Importance pour la biosphère : la matière organique produite nourrit les êtres vivants (base des chaînes alimentaires) ; le dioxygène dégagé sert à leur respiration ; l’absorption du CO₂ purifie l’air et limite l’effet de serre.",
      "keyRule": "Eau iodée bleu violacé = amidon produit par photosynthèse. Facteurs : lumière, CO₂, température. Photosynthèse = nourriture, dioxygène et air purifié.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter la feuille de haricot",
        "statement": "Une feuille de haricot éclairée, décolorée, devient bleu violacé à l’eau iodée. Interprète.",
        "methodSteps": [
          "L’eau iodée colore l’amidon en bleu violacé.",
          "Cet amidon a été fabriqué à la lumière par photosynthèse."
        ],
        "conclusion": "La feuille éclairée a produit de la matière organique (amidon) par photosynthèse."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Eau iodée",
          "stepTheme": "Situation",
          "stepTitle": "Une feuille bleu violacé",
          "paragraphText": "La feuille éclairée devient **bleu violacé** à l’eau iodée : elle contient de l’**amidon**, fabriqué par **photosynthèse**.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p06_q1",
            "type": "mcq",
            "prompt": "Une feuille de haricot exposée plusieurs heures à la lumière, puis décolorée, devient bleu violacé avec de l’eau iodée. Que révèle cette couleur ?",
            "options": [
              "La présence d’amidon fabriqué par photosynthèse",
              "La présence de chlorophylle",
              "La présence de dioxygène",
              "L’absence de matière organique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le phénomène est la photosynthèse."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Alcool bouillant",
          "stepTheme": "Protocole",
          "stepTitle": "Pourquoi décolorer la feuille ?",
          "paragraphText": "L’**alcool bouillant** dissout la **chlorophylle** : la feuille décolorée laisse bien voir la couleur donnée par l’eau iodée.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p06_q2",
            "type": "mcq",
            "prompt": "Pourquoi plonge-t-on la feuille dans l’alcool bouillant avant le test à l’eau iodée ?",
            "options": [
              "Pour dissoudre la chlorophylle et bien voir la coloration de l’amidon",
              "Pour fabriquer de l’amidon",
              "Pour colorer la feuille en bleu",
              "Pour nourrir la feuille"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’eau bouillante, avant, tue les cellules."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Facteurs",
          "stepTheme": "Activité",
          "stepTitle": "Les facteurs de la photosynthèse",
          "paragraphText": "Les facteurs qui influencent la photosynthèse sont le **dioxyde de carbone**, la **lumière** et la **température**.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p06_q3",
            "type": "mcq",
            "prompt": "Parmi : air, dioxyde de carbone, azote, lumière, température, dioxygène, matière organique, lesquels influencent la photosynthèse ?",
            "options": [
              "Le dioxyde de carbone, la lumière et la température",
              "L’air, l’azote et le dioxygène",
              "Seulement la lumière",
              "La matière organique et l’azote"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le dioxygène est un produit, pas un facteur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Nourriture",
          "stepTheme": "Biosphère",
          "stepTitle": "Nourrir les êtres vivants",
          "paragraphText": "La matière organique produite par les plantes **nourrit** les êtres vivants : c’est le **premier maillon** des chaînes alimentaires.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p06_q4",
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
          "paragraphText": "Le **dioxygène** dégagé sert à la **respiration** des êtres vivants ; l’absorption du **CO₂** **purifie l’air**.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p06_q5",
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
          "stepKind": "propriete",
          "stepBadge": "Organite",
          "stepTheme": "Situation",
          "stepTitle": "L’organite de l’amidon",
          "paragraphText": "L’amidon est fabriqué dans le **chloroplaste** : c’est l’organite de la photosynthèse.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p06_q6",
            "type": "mcq",
            "prompt": "Dans quel organite de la cellule végétale l’amidon coloré par l’eau iodée a-t-il été fabriqué ?",
            "options": [
              "Le chloroplaste",
              "La mitochondrie",
              "Le noyau",
              "La vacuole"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On y voit des grains d’amidon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p06_q1",
          "type": "mcq",
          "prompt": "Une feuille de haricot exposée plusieurs heures à la lumière, puis décolorée, devient bleu violacé avec de l’eau iodée. Que révèle cette couleur ?",
          "options": [
            "La présence d’amidon fabriqué par photosynthèse",
            "La présence de chlorophylle",
            "La présence de dioxygène",
            "L’absence de matière organique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le phénomène est la photosynthèse."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p06_q2",
          "type": "mcq",
          "prompt": "Pourquoi plonge-t-on la feuille dans l’alcool bouillant avant le test à l’eau iodée ?",
          "options": [
            "Pour dissoudre la chlorophylle et bien voir la coloration de l’amidon",
            "Pour fabriquer de l’amidon",
            "Pour colorer la feuille en bleu",
            "Pour nourrir la feuille"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’eau bouillante, avant, tue les cellules."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p06_q3",
          "type": "mcq",
          "prompt": "Parmi : air, dioxyde de carbone, azote, lumière, température, dioxygène, matière organique, lesquels influencent la photosynthèse ?",
          "options": [
            "Le dioxyde de carbone, la lumière et la température",
            "L’air, l’azote et le dioxygène",
            "Seulement la lumière",
            "La matière organique et l’azote"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le dioxygène est un produit, pas un facteur."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p06_q4",
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
          "id": "premiere_d_svt_l10_production_matiere_organique_p06_q5",
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
          "id": "premiere_d_svt_l10_production_matiere_organique_p06_q6",
          "type": "mcq",
          "prompt": "Dans quel organite de la cellule végétale l’amidon coloré par l’eau iodée a-t-il été fabriqué ?",
          "options": [
            "Le chloroplaste",
            "La mitochondrie",
            "Le noyau",
            "La vacuole"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On y voit des grains d’amidon."
        }
      ]
    }
  ]
};
