import type {
  CurriculumChapter,
  CurriculumPoint,
  StructuredLessonStep,
} from '../../../../lib/curriculum/types';

const makePoint = (
  p: Omit<CurriculumPoint, 'exercises'> & { structuredSteps: StructuredLessonStep[] },
): CurriculumPoint => ({
  ...p,
  exercises: p.structuredSteps.map((s) => s.exercise),
});

export const BUREAUTIQUE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  {
    id: 'lmd_entd_l1_bureautique_ch1',
    subjectId: 'lmd_bureautique',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Traitement de texte (Microsoft Word) : Mise en page, page de garde et styles',
    summary:
      'Maîtriser le paramétrage d’un document professionnel sous Microsoft Word ou LibreOffice Writer : format A4, marges, en-têtes/pieds de page, page de garde, mise en forme des paragraphes et hiérarchisation par styles.',
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Fascicule de TD Traitement de texte (Microsoft Word, 2025-2026)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_bureautique_ch1_p1',
        order: 1,
        title: 'Paramétrage général et mise en page professionnelle',
        summary:
          'Configurer le format A4, les marges, l’orientation, les en-têtes et la numérotation automatique de pied de page.',
        conceptExplanation:
          "Dans la production d'un rapport professionnel (comme le cas pratique INFOGEST SARL), la mise en page est l'étape fondatrice qui conditionne la lisibilité et l'uniformité du document avant même d'affiner le texte.\n\nLes paramètres structurants de la mise en page sous Microsoft Word (onglet « Mise en page ») ou LibreOffice Writer comprennent :\n- Le format du papier : standard A4 (21 cm × 29,7 cm) pour les rapports administratifs et universitaires.\n- L'orientation : Portrait (verticale, standard pour un rapport) ou Paysage (horizontale, réservée aux tableaux larges ou graphiques via un saut de section).\n- Les marges : 2,5 cm de chaque côté (haut, bas, gauche, droite), offrant un espace de respiration propre à la reliure et aux annotations.\n- L'en-tête et le pied de page (onglet « Insertion ») : zones répétées automatiquement sur les pages du document. Dans un rapport d'entreprise, l'en-tête affiche souvent la raison sociale à gauche (ex. « INFOGEST SARL ») et la référence du document à droite (ex. « Rapport 2026 »), tandis que le pied de page accueille une numérotation automatique centrée.",
        keyRule:
          'Définir la mise en page (A4, Portrait, marges 2,5 cm, en-tête/pied de page) dès l’ouverture du document garantit une pagination stable et évite de décaler les objets en fin de travail.',
        formulas: [
          {
            name: 'Standard rapport A4',
            formula: 'Format A4 (21 × 29,7 cm) | Orientation : Portrait | Marges : 2,5 cm × 4',
            note: 'En-tête : texte gauche + texte droite ; Pied de page : numéro de page automatique centré.',
          },
        ],
        workedExample: {
          title: 'Configurer la mise en page du rapport INFOGEST SARL',
          statement:
            'Vous devez paramétrer un rapport sous Word avec un papier A4 en Portrait, des marges de 2,5 cm, un en-tête affichant « INFOGEST SARL » à gauche et « Rapport 2026 » à droite, ainsi qu’une numérotation automatique centrée en pied de page.',
          methodSteps: [
            'Ouvrir l’onglet « Mise en page », vérifier Taille = A4 et Orientation = Portrait.',
            'Cliquer sur « Marges » > « Marges personnalisées » et saisir 2,5 cm pour Haut, Bas, Gauche et Droite.',
            'Ouvrir « Insertion » > « En-tête » > « Modifier l’en-tête », saisir « INFOGEST SARL », puis utiliser la tabulation droite pour écrire « Rapport 2026 ».',
            'Aller dans le pied de page, cliquer sur « Numéro de page » > « Bas de page » > « Numéro normal 2 (centré) » et cocher « Première page différente » si la page de garde ne doit pas afficher l’en-tête ni le numéro.',
          ],
          conclusion:
            'La structure de page est verrouillée et se répliquera proprement sur toutes les pages du rapport.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Format & Orientation',
            stepTheme: 'Mise en page',
            stepTitle: 'Choisir le format A4 et l’orientation adaptée',
            paragraphText:
              'Un rapport administratif ou universitaire en Côte d’Ivoire adopte le format standard A4 (21 cm × 29,7 cm) en orientation Portrait. L’orientation Paysage ne s’utilise que ponctuellement (pour un grand tableau), idéalement isolée par des sauts de section.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Quels sont les paramètres standards exigés pour le corps d’un rapport professionnel dans le TD de Bureautique ENTD L1 ?',
              options: [
                'Format A5, orientation Paysage',
                'Format A4, orientation Portrait',
                'Format Lettre US, orientation Portrait',
                'Format A3, orientation Paysage',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le format A4 (21 × 29,7 cm) en orientation Portrait est la norme bureautique de référence pour les rapports administratifs.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Marges',
            stepTheme: 'Mise en page',
            stepTitle: 'Régler des marges uniformes de 2,5 cm',
            paragraphText:
              'Les marges délimitent la zone imprimable autour du texte. Les régler à 2,5 cm de chaque côté (haut, bas, gauche, droite) assure une présentation équilibrée, facilite la lecture et préserve le texte lors d’une reliure.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Dans quel onglet de Microsoft Word configure-t-on les marges personnalisées à 2,5 cm de chaque côté ?',
              options: [
                'Onglet « Révision »',
                'Onglet « Publipostage »',
                'Onglet « Mise en page »',
                'Onglet « Affichage »',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les commandes Marges, Orientation et Taille du papier se trouvent dans le groupe « Mise en page » de l’onglet « Mise en page ».',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'En-tête',
            stepTheme: 'Zones répétitives',
            stepTitle: 'Aligner deux informations dans un même en-tête',
            paragraphText:
              'Pour afficher « INFOGEST SARL » à gauche et « Rapport 2026 » à droite sur une seule ligne d’en-tête sans décalage, on utilise les taquets de tabulation intégrés à l’en-tête (ou un modèle à 3 colonnes) plutôt qu’une suite d’espaces.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Quelle méthode est la plus professionnelle pour placer « INFOGEST SARL » à gauche et « Rapport 2026 » à droite dans l’en-tête ?',
              options: [
                'Utiliser un taquet de tabulation aligné à droite (ou un en-tête à colonnes)',
                'Appuyer quarante fois sur la barre d’espace jusqu’au bord droit',
                'Insérer une capture d’écran du texte dans la marge supérieure',
                'Taper les deux textes sur deux lignes différentes',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les taquets de tabulation garantissent un alignement exact sur la marge droite, même si le texte ou la police est modifié par la suite.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Pied de page',
            stepTheme: 'Pagination',
            stepTitle: 'Insérer une numérotation automatique',
            paragraphText:
              'Un numéro de page ne doit jamais être saisi manuellement : il doit être inséré en tant que champ dynamique (« Insertion » > « Numéro de page ») afin de se mettre à jour automatiquement lors de l’ajout ou la suppression de contenu.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Que se passe-t-il si vous tapez manuellement le chiffre « 1 » dans le pied de page au lieu d’utiliser la commande « Numéro de page » ?',
              options: [
                'Word incrémente automatiquement 1, 2, 3 sur les pages suivantes',
                'Le numéro disparaît automatiquement à l’export PDF',
                'Word convertit automatiquement le chiffre en table des matières',
                'Le chiffre « 1 » se répète à l’identique sur toutes les pages de la section',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Un texte statique placé en pied de page se répète tel quel sur chaque page. Seul un champ dynamique de numérotation s’incrémente automatiquement.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'Page de garde',
            stepTitle: 'Masquer l’en-tête et le numéro sur la page de garde',
            paragraphText:
              'Dans un rapport académique ou d’entreprise, la page de garde ne porte ni en-tête ni numéro de page apparent. L’option « Première page différente » dans l’onglet contextuel « En-tête et pied de page » permet de masquer proprement ces éléments sur la page 1.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle option permet de ne pas afficher l’en-tête « INFOGEST SARL » ni le numéro de page sur la page de garde ?',
              options: [
                'Supprimer l’en-tête sur la page 1 sans cocher d’option',
                'Cocher « Première page différente » dans les outils d’en-tête et pied de page',
                'Réduire la taille de la police à 1 pt sur la première page',
                'Changer l’orientation de la page de garde en Paysage',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Si on supprime l’en-tête sans activer « Première page différente », il est effacé sur tout le document. Cette option isole spécifiquement la page 1.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_bureautique_ch1_p2',
        order: 2,
        title: 'Page de garde et mise en forme des caractères et paragraphes',
        summary:
          'Concevoir une page de garde normalisée et appliquer rigoureusement police, taille, interligne, justification, retrait de première ligne et emphases.',
        conceptExplanation:
          "La présentation typographique d'un rapport obéit à des normes strictes qui assurent le confort de lecture et la crédibilité de l'auteur.\n\n1. La page de garde regroupe les métadonnées d'identification : titre centré en gras (taille 22), sous-titre (taille 14), nom de l'étudiant, classe/filière (Licence 1 / ENTD), année académique (2025–2026) et date du jour insérée en champ automatique (qui s'actualise à chaque ouverture).\n\n2. La mise en forme du corps de texte (caractères et paragraphes) fixe :\n- La police principale : Times New Roman, couleur noire, taille 12.\n- L'alignement : Justifié (aligné simultanément sur la marge gauche et la marge droite).\n- L'interligne : 1,5 ligne pour aérer la lecture.\n- Le retrait de première ligne : 1 cm (paramétré dans la boîte de dialogue Paragraphe > Retrait spécial > Première ligne, jamais avec des espaces).\n- Les emphases ciblées : gras pour les concepts clés (« transformation numérique », « performance », « sécurité ») et italique pour une mise en relief ou citation ciblée.",
        keyRule:
          'Toujours utiliser un saut de page (Ctrl + Entrée) après la page de garde et paramétrer le retrait de première ligne (1 cm) dans « Paragraphe », jamais avec la barre d’espace.',
        formulas: [
          {
            name: 'Charte typographique du corps de texte',
            formula: 'Times New Roman 12 pt | Noir | Interligne 1,5 | Justifié | Retrait 1re ligne : 1 cm',
            note: 'Raccourcis Word : Ctrl+G (Gras), Ctrl+I (Italique), Ctrl+J (Justifier), Ctrl+Entrée (Saut de page).',
          },
        ],
        workedExample: {
          title: 'Mettre en forme le texte brut du rapport sur la transformation numérique',
          statement:
            'Formater un paragraphe brut en Times New Roman 12, justifié, interligne 1,5, retrait de première ligne de 1 cm, avec les mots-clés en gras et une phrase en italique.',
          methodSteps: [
            'Sélectionner l’ensemble des paragraphes du corps de texte (sans le titre principal).',
            'Dans l’onglet « Accueil » > groupe « Police », choisir Times New Roman, taille 12, couleur Automatique (Noir).',
            'Ouvrir la boîte de dialogue « Paragraphe » : définir Alignement = Justifiée, Retrait spécial = Première ligne à 1 cm, Interligne = 1,5 ligne.',
            'Sélectionner successivement « transformation numérique », « performance » et « sécurité » puis appliquer le Gras (Ctrl+G) ; mettre en Italique (Ctrl+I) la phrase « Dans un contexte de concurrence accrue… ».',
          ],
          conclusion:
            'Chaque paragraphe présente une silhouette homogène, lisible et conforme aux exigences du cahier des charges.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Page de garde',
            stepTheme: 'Structuration',
            stepTitle: 'Séparer proprement la page de garde du contenu',
            paragraphText:
              'Une fois les informations de la page de garde saisies (titre taille 22 gras centré, sous-titre taille 14, nom, filière, année académique), on passe à la page suivante à l’aide d’un saut de page (Ctrl + Entrée) afin que l’ajout de texte sur la page 1 ne fasse pas glisser le reste du rapport.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Quel raccourci clavier insère un saut de page propre après la page de garde dans Microsoft Word ?',
              options: ['Ctrl + S', 'Ctrl + Z', 'Ctrl + Entrée', 'Alt + F4'],
              correctAnswerIndex: 2,
              explanation:
                'Ctrl + Entrée insère immédiatement un saut de page, évitant d’empiler des lignes vides qui dérèglent la mise en page dès qu’on modifie le texte.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Date automatique',
            stepTheme: 'Champs dynamiques',
            stepTitle: 'Insérer la date du jour automatique',
            paragraphText:
              'Pour afficher une date qui se met à jour automatiquement sur la page de garde, on utilise « Insertion » > « Date et heure » en veillant à cocher l’option « Mettre à jour automatiquement ».',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Lors de l’insertion de la date du jour via « Insertion > Date et heure », quelle case garantit qu’elle s’actualisera à chaque ouverture du fichier ?',
              options: [
                'Mettre à jour automatiquement',
                'Verrouiller le format',
                'Convertir en texte brut',
                'Masquer les caractères non imprimables',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Sans cette case, Word insère un texte fixe. Avec l’option « Mettre à jour automatiquement », la date devient un champ dynamique recalculé à l’ouverture.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Justification',
            stepTheme: 'Alignement',
            stepTitle: 'Différencier alignement gauche, centré et justifié',
            paragraphText:
              'Un paragraphe « justifié » aligne le texte simultanément sur la marge gauche et sur la marge droite en ajustant finement les espaces entre les mots. C’est la norme pour les paragraphes de rapports, tandis que le titre de couverture est centré.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Quel effet visuel produit l’alignement « Justifié » appliqué aux paragraphes d’un rapport ?',
              options: [
                'Toutes les lignes sont centrées au milieu de la page',
                'Le texte est aligné uniquement sur la marge droite',
                'Le texte est centré en haut et en bas de la page',
                'Le texte est aligné de façon rectiligne sur les deux marges gauche et droite',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La justification crée des blocs de texte nets alignés à gauche et à droite, caractéristique de l’édition professionnelle.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Retrait 1re ligne',
            stepTheme: 'Paragraphes',
            stepTitle: 'Paramétrer un retrait de première ligne de 1 cm',
            paragraphText:
              'Le retrait positif de première ligne (1 cm) décale vers la droite uniquement la première ligne de chaque paragraphe. Il se configure dans la boîte de dialogue « Paragraphe » (section Retrait > Spécial : Première ligne > De : 1 cm).',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Où paramètre-t-on précisément un retrait de première ligne de 1 cm pour tous les paragraphes sélectionnés ?',
              options: [
                'Dans « Mise en page > Marges » en augmentant la marge gauche de 1 cm',
                'Dans « Accueil > Paragraphe > Retrait spécial : Première ligne (1 cm) »',
                'Dans « Accueil > Police > Espacement des caractères »',
                'Dans « Insertion > Tableau > Largeur de colonne »',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Modifier la marge gauche déplacerait tout le texte. Seul le retrait spécial « Première ligne » décale uniquement l’alinéa d’ouverture de chaque paragraphe.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Interligne',
            stepTheme: 'Lisibilité',
            stepTitle: 'Distinguer interligne et espacement après paragraphe',
            paragraphText:
              'L’interligne (ici 1,5) règle l’espace vertical entre deux lignes d’un même paragraphe. L’espacement Avant/Après règle l’espace qui sépare deux paragraphes consécutifs, évitant de taper des touches Entrée vides.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Que modifie concrètement le réglage « Interligne : 1,5 » dans un paragraphe ?',
              options: [
                'L’espace horizontal entre chaque lettre d’un mot',
                'La taille de la police multipliée par 1,5',
                'L’espace vertical entre les lignes à l’intérieur du paragraphe',
                'La distance entre le bord de la feuille et le texte',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’interligne 1,5 ajoute un demi-interligne supplémentaire entre chaque ligne du paragraphe pour améliorer le confort de lecture.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_bureautique_ch1_p3',
        order: 3,
        title: 'Hiérarchisation par styles (Titre 1, Titre 2 et styles personnalisés)',
        summary:
          'Comprendre le rôle fondamental des styles pour uniformiser un document long et activer la navigation ainsi que la table des matières automatique.',
        conceptExplanation:
          "Un style est un ensemble nommé de caractéristiques de mise en forme (police, taille, couleur, alignement, espacement, niveau hiérarchique) que l'on applique en un seul clic à un titre ou un paragraphe.\n\nDans un document professionnel, on ne met jamais en forme les titres « manuellement » (gras + taille 16 au hasard) :\n1. On applique les styles hiérarchiques intégrés : « Titre 1 » pour les grands chapitres/parties, « Titre 2 » pour les sous-parties, « Titre 3 » pour les sous-sections.\n2. Si l'on modifie la définition du style « Titre 1 » (par exemple sa couleur ou sa police Times New Roman), tous les titres portant ce style se mettent à jour instantanément dans tout le document.\n3. Les styles hiérarchiques alimentent automatiquement le Volet de navigation (onglet Affichage) et sont indispensables pour générer une table des matières automatique.\n4. On peut également créer des styles personnalisés pour les citations, encadrés ou légendes d'entreprise.",
        keyRule:
          'Sans styles hiérarchiques (Titre 1, Titre 2…), Word ne reconnaît pas la structure du document et ne peut pas générer de table des matières automatique.',
        workedExample: {
          title: 'Structurer le rapport INFOGEST SARL avec des styles',
          statement:
            'Appliquer le style « Titre 1 » au titre principal et modifier ce style pour qu’il respecte la charte Times New Roman noire en gras taille 16.',
          methodSteps: [
            'Placer le curseur sur le titre principal et cliquer sur « Titre 1 » dans la galerie des Styles (onglet Accueil).',
            'Faire un clic droit sur « Titre 1 » dans la galerie puis sélectionner « Modifier… ».',
            'Changer la police en Times New Roman, taille 16, gras, couleur noire (ou bleu foncé corporate) et valider par OK.',
            'Vérifier dans « Affichage » > cocher « Volet de navigation » que le titre apparaît bien dans l’arborescence du document.',
          ],
          conclusion:
            'Le document est désormais structuré sémantiquement : il est prêt pour la génération automatique de la table des matières.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'Styles Word',
            stepTitle: 'Qu’est-ce qu’un style dans un traitement de texte ?',
            paragraphText:
              'Un style regroupe sous un même nom un ensemble complet de réglages de police et de paragraphe (ex. Normal, Titre 1, Titre 2). L’appliquer garantit une cohérence visuelle absolue sur des dizaines ou centaines de pages.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Quel est le principal avantage fonctionnel d’utiliser les styles « Titre 1 » et « Titre 2 » plutôt que de mettre les titres en gras manuellement ?',
              options: [
                'Cela réduit automatiquement le poids du fichier de 90 %',
                'Cela empêche toute modification ultérieure du texte par un collègue',
                'Cela traduit automatiquement les titres en anglais',
                'Cela structure la hiérarchie du document et permet de générer une table des matières automatique',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La table des matières automatique et le volet de navigation s’appuient exclusivement sur les niveaux hiérarchiques définis par les styles de titres.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Mise à jour globale',
            stepTheme: 'Productivité',
            stepTitle: 'Modifier un style pour actualiser tout le document',
            paragraphText:
              'Si un rapport comporte 15 chapitres formatés avec le style « Titre 1 » et que le directeur demande de changer leur couleur, il suffit de modifier le style « Titre 1 » une seule fois : les 15 titres sont mis à jour instantanément.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Votre rapport contient 12 sections en « Titre 1 ». Vous souhaitez passer tous ces titres en Times New Roman 14 gras. Quelle est la démarche optimale ?',
              options: [
                'Faire un clic droit sur le style « Titre 1 » > « Modifier » et régler la police une seule fois',
                'Sélectionner manuellement chacun des 12 titres l’un après l’autre',
                'Effacer tous les titres et les retaper avec la nouvelle police',
                'Exporter le fichier en PDF puis modifier les titres dans un lecteur PDF',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La modification de la définition d’un style se propage automatiquement à tous les paragraphes qui utilisent ce style.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Volet de navigation',
            stepTheme: 'Vérification',
            stepTitle: 'Contrôler la hiérarchie grâce au Volet de navigation',
            paragraphText:
              'Dans l’onglet « Affichage », l’activation du « Volet de navigation » affiche à gauche l’arborescence de tous les styles de titres. On peut ainsi vérifier qu’aucun paragraphe normal n’a reçu un style de titre par erreur et réorganiser les sections par glisser-déposer.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Quel outil de l’onglet « Affichage » permet de visualiser instantanément le plan hiérarchique des titres d’un document Word ?',
              options: [
                'La règle verticale',
                'Le Volet de navigation',
                'Le mode Brouillon sans styles',
                'Le zoom 200 %',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Volet de navigation (onglet « Titres ») liste automatiquement tous les paragraphes dotés d’un niveau hiérarchique (Titre 1, Titre 2, etc.).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Style personnalisé',
            stepTheme: 'Charte graphique',
            stepTitle: 'Créer un style personnalisé d’entreprise',
            paragraphText:
              'Pour répondre à une charte graphique spécifique, on peut créer un nouveau style (ex. « Encadré_INFOGEST » ou « Citation_Rapport ») via le lanceur du groupe Styles > « Nouveau style », en choisissant sa police, sa bordure, sa trame de fond et son style de paragraphe suivant.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Dans quel cas est-il particulièrement pertinent de créer un style personnalisé dans un rapport ?',
              options: [
                'Pour formater un mot isolé qui n’apparaît qu’une seule fois dans le rapport',
                'Pour remplacer l’enregistrement du document au format .docx',
                'Pour appliquer de manière uniforme une mise en forme récurrente (encadrés clés, citations) conforme à la charte de l’entreprise',
                'Pour contourner la limite de nombre de pages de Microsoft Word',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Un style personnalisé garantit l’homogénéité de blocs récurrents propres à la charte graphique de l’organisation.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège classique',
            stepTheme: 'Caractères masqués',
            stepTitle: 'Afficher les marques de mise en forme (¶)',
            paragraphText:
              'Le bouton « Afficher tout » (symbole ¶ dans l’onglet Accueil) révèle les espaces, tabulations, sauts de ligne et sauts de page. C’est le premier réflexe de diagnostic lorsqu’un retrait, un style ou une page blanche inexpliquée perturbe un document.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'À quoi sert le bouton « ¶ » (Afficher tout) dans l’onglet Accueil de Word ?',
              options: [
                'À imprimer le symbole ¶ à la fin de chaque phrase sur le papier',
                'À afficher à l’écran les caractères non imprimables (espaces, tabulations, sauts de page) pour corriger la mise en forme',
                'À supprimer automatiquement toutes les fautes d’orthographe',
                'À convertir le document en tableau',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les marques ¶ ne s’impriment jamais ; elles rendent visibles les espaces doubles, paragraphes vides et sauts de page/section afin de nettoyer le document.',
            },
          },
        ],
      }),
    ],
  },
  {
    id: 'lmd_entd_l1_bureautique_ch2',
    subjectId: 'lmd_bureautique',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Insertion d’objets, automatisation et finalisation d’un rapport professionnel',
    summary:
      'Insérer des images légendées et des tableaux, automatiser la table des matières et les notes de bas de page, utiliser Rechercher/Remplacer, intégrer une bibliographie et exporter en PDF.',
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Fascicule de TD Traitement de texte (Partie II, 2025-2026)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_bureautique_ch2_p1',
        order: 1,
        title: 'Insertion d’images, légendes automatiques et tableaux structurés',
        summary:
          'Intégrer une image avec habillage et légende numérotée, et concevoir un tableau 3 × 3 lisible et cohérent.',
        conceptExplanation:
          "Un rapport moderne combine texte structuré et objets visuels pour synthétiser l'information.\n\n1. Images et habillage : On insère une image via « Insertion » > « Images ». On ajuste ensuite son « Habillage du texte » (Aligné sur le texte, Carré, Rapproché, Haut et bas) afin de contrôler comment le texte circule autour d'elle.\n2. Légendes automatiques : Plutôt que d'écrire manuellement « Figure 1 : ... », on fait un clic droit sur l'image > « Insérer une légende » (ou onglet « Références » > « Insérer une légende »). Word numérote automatiquement les figures (Figure 1, Figure 2…), ce qui permet même de générer une table des illustrations.\n3. Tableaux : Via « Insertion » > « Tableau », on définit le nombre de colonnes et de lignes (ligne d'en-tête grisée et centrée + lignes de données). On évite les cellules fusionnées inutiles et on active « Répéter les lignes d'en-tête » pour les tableaux longs.",
        keyRule:
          'Toujours utiliser « Références > Insérer une légende » pour légender une image ou un tableau : la numérotation reste cohérente même si vous déplacez ou ajoutez un objet.',
        workedExample: {
          title: 'Insérer une illustration légendée et un tableau 3×3',
          statement:
            'Dans le rapport sur la transformation numérique, insérer une image illustrative avec sa légende « Figure 1 : Transformation numérique en entreprise », puis un tableau 3×3 synthétisant Enjeux / Outils / Risques.',
          methodSteps: [
            'Placer le curseur à l’emplacement souhaité, cliquer sur « Insertion > Images > Cet appareil », choisir l’image et la centrer.',
            'Faire un clic droit sur l’image > « Insérer une légende », choisir l’étiquette « Figure », position « Sous la sélection », saisir « : Transformation numérique en entreprise » et valider.',
            'Cliquer sur « Insertion > Tableau », sélectionner une grille 3×3, renseigner la première ligne d’en-tête (Domaine | Outil numérique | Risque associé) en gras et appliquer un style de tableau sobre.',
          ],
          conclusion:
            'L’image est proprement ancrée et référencée, et le tableau synthétise visuellement les idées clés du rapport.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Légende auto',
            stepTheme: 'Objets visuels',
            stepTitle: 'Insérer une légende sous une image',
            paragraphText:
              'Une légende insérée via « Références > Insérer une légende » (ou clic droit sur l’image) associe un numéro dynamique (Figure 1, Figure 2…) à l’illustration et permet de créer une table des figures.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle est la bonne pratique pour ajouter la légende « Figure 1 : Outils collaboratifs » sous une image dans Word ?',
              options: [
                'Taper le texte dans une zone de texte libre sans lien avec l’image',
                'Sélectionner l’image puis utiliser « Références > Insérer une légende » (position : Sous la sélection)',
                'Écrire la légende dans le pied de page',
                'Renommer le fichier image sur le bureau Windows',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La commande « Insérer une légende » crée une numérotation automatique qui se met à jour si vous insérez une nouvelle image plus haut dans le rapport.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Habillage',
            stepTheme: 'Mise en page',
            stepTitle: 'Choisir le mode d’habillage d’une image',
            paragraphText:
              'Le mode « Aligné sur le texte » traite l’image comme un gros caractère (très stable dans un rapport). Les modes « Carré » ou « Rapproché » permettent au texte de couler sur les côtés de l’image.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Quel mode d’habillage permet au texte du paragraphe d’entourer proprement une image en formant un cadre rectangulaire autour d’elle ?',
              options: [
                'Derrière le texte',
                'Devant le texte',
                'Carré',
                'Aligné sur le texte',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’habillage « Carré » fait circuler le texte autour de la boîte englobante rectangulaire de l’image, sans jamais chevaucher le texte.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Tableau 3×3',
            stepTheme: 'Synthèse',
            stepTitle: 'Créer et structurer un tableau 3 lignes × 3 colonnes',
            paragraphText:
              'Dans un tableau 3×3, la première ligne sert généralement d’en-tête (titres des colonnes mis en valeur en gras avec une trame légère) et les lignes suivantes présentent les données structurées.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Combien de cellules contient au total un tableau de 3 lignes × 3 colonnes sans cellules fusionnées ?',
              options: ['9 cellules', '6 cellules', '3 cellules', '12 cellules'],
              correctAnswerIndex: 0,
              explanation:
                'Un tableau de 3 lignes par 3 colonnes comporte 3 × 3 = 9 cellules distinctes.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Proportions',
            stepTheme: 'Images',
            stepTitle: 'Redimensionner une image sans la déformer',
            paragraphText:
              'Pour agrandir ou réduire une image tout en conservant son rapport hauteur/largeur, il faut toujours tirer par l’une des poignées d’angle (coins) et jamais par les poignées latérales ou verticales qui écrasent ou étirent l’image.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle poignée faut-il utiliser pour redimensionner une image dans Word sans la déformer ?',
              options: [
                'La poignée située au milieu du bord supérieur',
                'La poignée située au milieu du bord droit',
                'L’icône de rotation au-dessus de l’image',
                'Une des quatre poignées situées dans les coins (angles) de l’image',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Les poignées d’angle conservent automatiquement les proportions d’origine de l’image.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Navigation tableau',
            stepTheme: 'Productivité',
            stepTitle: 'Ajouter rapidement une ligne à un tableau',
            paragraphText:
              'Dans Word, placer le curseur dans la dernière cellule en bas à droite d’un tableau et appuyer sur la touche « Tab » (Tabulation) crée immédiatement une nouvelle ligne complète en conservant la mise en forme.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Lorsque le curseur se trouve dans la dernière cellule (en bas à droite) d’un tableau Word, quelle touche permet d’ajouter instantanément une nouvelle ligne ?',
              options: [
                'La touche Échap (Esc)',
                'La touche Tabulation (Tab)',
                'La touche Retour arrière (Backspace)',
                'La touche Fin (End)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La touche Tab permet de passer d’une cellule à la suivante, et en fin de tableau elle insère automatiquement une nouvelle ligne.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_bureautique_ch2_p2',
        order: 2,
        title: 'Automatisation et révision : Table des matières, notes de bas de page et Rechercher/Remplacer',
        summary:
          'Générer et mettre à jour une table des matières, insérer des notes de bas de page, exécuter des remplacements globaux et vérifier l’orthographe.',
        conceptExplanation:
          "Les outils d'automatisation distinguent un utilisateur occasionnel d'un assistant administratif ou analyste rigoureux :\n\n1. Table des matières automatique : Onglet « Références » > « Table des matières » > « Table automatique 1 ou 2 ». Elle recense tous les paragraphes formatés en Titre 1, Titre 2, etc., avec leurs numéros de page exacts. Après toute modification du document, un clic sur « Mettre à jour la table » (toute la table ou uniquement les numéros de page) garantit son exactitude.\n2. Note de bas de page : Placée après un terme technique à expliciter via « Références » > « Insérer une note de bas de page » (raccourci Alt + Ctrl + F). Word insère un appel de note en exposant (1) et place la définition en bas de la même page.\n3. Rechercher et remplacer (Ctrl + H) : Permet de remplacer systématiquement un mot dans tout le document (ex. remplacer « entreprises » par « organisations »), avec possibilité de vérifier la casse ou le mot entier pour éviter les erreurs.\n4. Vérification orthographique et grammaticale : Onglet « Révision » > « Grammaire et orthographe » (touche F7), complétée par une relecture humaine (les homophones ou mots mal choisis échappent parfois au correcteur).",
        keyRule:
          'Ne jamais taper une table des matières ni des appels de notes à la main ; toujours lancer « Mettre à jour la table » et le correcteur (F7) avant l’export final.',
        formulas: [
          {
            name: 'Raccourcis clés d’automatisation Word',
            formula: 'Ctrl + H : Rechercher/Remplacer | F7 : Orthographe | Alt + Ctrl + F : Note de bas de page',
          },
        ],
        workedExample: {
          title: 'Automatiser le rapport INFOGEST SARL',
          statement:
            'Insérer une table des matières automatique en page 2, ajouter une note de bas de page sur « données », remplacer « entreprises » par « organisations » et vérifier l’orthographe.',
          methodSteps: [
            'Placer le curseur en haut de la page 2 (après la page de garde), puis cliquer sur « Références > Table des matières > Table automatique 1 » suivi d’un saut de page.',
            'Placer le curseur juste après le mot « données », cliquer sur « Références > Insérer une note de bas de page » et rédiger une définition claire des données personnelles.',
            'Appuyer sur Ctrl + H, taper « entreprises » dans Rechercher et « organisations » dans Remplacer par, puis cliquer sur « Remplacer tout » (en vérifiant les accords grammaticaux comme « les organisations modernes »).',
            'Appuyer sur F7 (« Révision > Rédacteur / Grammaire et orthographe ») et corriger les anomalies détectées, puis faire un clic droit sur la table des matières > « Mettre à jour les champs ».',
          ],
          conclusion:
            'Le rapport est synchronisé, sans faute et entièrement dynamique.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Table des matières',
            stepTheme: 'Automatisation',
            stepTitle: 'Générer et actualiser une table des matières',
            paragraphText:
              'La table des matières automatique se crée depuis l’onglet « Références ». Elle n’est pas mise à jour en temps réel pendant la frappe : il faut cliquer sur « Mettre à jour la table » après avoir ajouté ou déplacé des sections.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Vous avez ajouté deux nouveaux titres et modifié la pagination de votre rapport. Que devez-vous faire pour actualiser votre table des matières automatique ?',
              options: [
                'Modifier les numéros de page un par un au clavier dans la table',
                'Supprimer le document et tout recommencer',
                'Cliquer sur « Mettre à jour la table » > « Mettre à jour toute la table »',
                'Changer la police de la table en Arial',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’option « Mettre à jour toute la table » recharge à la fois les nouveaux intitulés de titres et les nouveaux numéros de page.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Note de bas de page',
            stepTheme: 'Références',
            stepTitle: 'Insérer une note de bas de page sur un terme clé',
            paragraphText:
              'Une note de bas de page (« Références > Insérer une note de bas de page ») ajoute un petit chiffre en exposant à côté du mot « données » et affiche son explication en bas de la même page. Si le paragraphe glisse sur la page suivante, la note le suit automatiquement.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Quelle différence existe-t-il entre une note de bas de page et une note de fin dans Word ?',
              options: [
                'La note de bas de page apparaît en bas de la page où figure le mot ; la note de fin est regroupée à la fin du document ou de la section',
                'La note de bas de page ne peut pas être numérotée',
                'La note de fin s’affiche dans l’en-tête en haut de chaque page',
                'Il n’existe aucune différence entre les deux',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La note de bas de page se lit immédiatement sur la même page, tandis que la note de fin rassemble toutes les notes en clôture de section ou de document.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Rechercher / Remplacer',
            stepTheme: 'Édition rapide',
            stepTitle: 'Remplacer globalement un terme avec Ctrl + H',
            paragraphText:
              'La boîte de dialogue « Rechercher et remplacer » (Ctrl + H) permet de substituer toutes les occurrences de « entreprises » par « organisations » en un clic. Elle propose aussi des options avancées (« Respecter la casse », « Mot entier uniquement »).',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Quel raccourci clavier ouvre directement l’outil « Rechercher et remplacer » dans Microsoft Word ?',
              options: ['Ctrl + P', 'Ctrl + H', 'Ctrl + N', 'Ctrl + U'],
              correctAnswerIndex: 1,
              explanation:
                'Ctrl + H ouvre directement l’onglet « Remplacer » (alors que Ctrl + F ouvre le volet de recherche simple).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Vigilance',
            stepTheme: 'Rechercher / Remplacer',
            stepTitle: 'Éviter les remplacements indésirables dans des sous-chaînes',
            paragraphText:
              'Un « Remplacer tout » irréfléchi peut altérer des mots composés ou créer des fautes d’accord (ex. « une entreprises » ou remplacer « art » à l’intérieur de « départ »). L’option « Mot entier uniquement » et une relecture rapide des occurrences évitent ces pièges.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Pourquoi faut-il activer « Mot entier uniquement » lorsque l’on veut remplacer un mot court (ex. « an » par « année ») ?',
              options: [
                'Pour que Word traduise le mot automatiquement',
                'Pour accélérer l’impression du document',
                'Pour supprimer automatiquement la ponctuation',
                'Pour éviter de modifier des mots contenant cette suite de lettres (comme « dans » ou « banque »)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Sans l’option « Mot entier uniquement », Word remplacerait « an » à l’intérieur de « dans » (« dannées ») ou « banque » (« bannéeque »).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Révision',
            stepTheme: 'Qualité linguistique',
            stepTitle: 'Combiner vérificateur orthographique et relecture humaine',
            paragraphText:
              'Le vérificateur orthographique et grammatical (onglet Révision ou touche F7) souligne en rouge les erreurs lexicales et en bleu les erreurs grammaticales ou stylistiques. Une relecture attentive reste toutefois indispensable pour repérer les confusions de sens.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Dans quel onglet de Microsoft Word lance-t-on la vérification complète de l’orthographe et de la grammaire ?',
              options: [
                'Onglet « Révision »',
                'Onglet « Conception »',
                'Onglet « Insertion »',
                'Onglet « Mise en page »',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’onglet « Révision » regroupe le correcteur (« Grammaire et orthographe » / « Rédacteur »), le dictionnaire des synonymes, les statistiques de mots et le suivi des modifications.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_bureautique_ch2_p3',
        order: 3,
        title: 'Finalisation : bibliographie, filigrane, nommage et exportation PDF',
        summary:
          'Ajouter une bibliographie structurée, appliquer un filigrane discret, nommer proprement le fichier .docx et l’exporter en PDF.',
        conceptExplanation:
          "La finalisation d'un document professionnel conditionne sa diffusion sans erreur de mise en page.\n\n1. Bibliographie : Word dispose d'un gestionnaire de sources (« Références » > « Gérer les sources » / « Insérer une citation » > « Bibliographie ») qui formate automatiquement les ouvrages, articles et sites web selon une norme (APA, ISO 690…). Pour un rapport court, on mentionne au minimum l'auteur, l'année, le titre et l'éditeur/URL.\n2. Filigrane (Bonus) : Accessible via « Conception » (ou Création) > « Filigrane », il affiche un texte semi-transparent en arrière-plan de chaque page (ex. « CONFIDENTIEL », « BROUILLON » ou « INFOGEST SARL ») pour marquer le statut du document.\n3. Convention de nommage : Un nom de fichier professionnel évite les accents, les espaces et les caractères spéciaux (ex. `Rapport_Transformation_Numerique.docx`), ce qui garantit la compatibilité entre systèmes d'exploitation et serveurs.\n4. Exportation PDF : Le format `.docx` sert à l'édition collaborative, tandis que le format `.pdf` (Portable Document Format, via « Fichier > Exporter > Créer un document PDF/XPS ») fige la mise en page, les polices et les marges sur n'importe quel écran ou imprimante.",
        keyRule:
          'Conserver toujours la version éditable (.docx) avec un nom normalisé et diffuser la version finale au format PDF pour verrouiller la mise en page.',
        formulas: [
          {
            name: 'Workflow de livraison finale',
            formula: 'Mise à jour TDM -> Vérification F7 -> Enregistrement .docx -> Export .pdf',
          },
        ],
        workedExample: {
          title: 'Finaliser et livrer le rapport INFOGEST SARL',
          statement:
            'Ajouter une bibliographie de 2 sources, un filigrane « CONFIDENTIEL », enregistrer sous `Rapport_Transformation_Numerique.docx` et exporter en PDF.',
          methodSteps: [
            'En dernière page, insérer un titre « Bibliographie » (style Titre 1), puis ajouter 2 sources via « Références > Gérer les sources » et cliquer sur « Bibliographie > Insérer une bibliographie ».',
            'Dans l’onglet « Conception » > « Filigrane » > « Filigrane personnalisé », choisir « Texte en filigrane », saisir « CONFIDENTIEL » en gris clair diagonal.',
            'Mettre à jour la table des matières une dernière fois pour y inclure la section Bibliographie.',
            'Enregistrer via « Fichier > Enregistrer sous » sous le nom `Rapport_Transformation_Numerique.docx`, puis cliquer sur « Fichier > Exporter > Créer un document PDF ».',
          ],
          conclusion:
            'Vous disposez d’une archive source modifiable (.docx) et d’un livrable diffusable universellement (.pdf).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Bibliographie',
            stepTheme: 'Sources',
            stepTitle: 'Gérer les sources et générer une bibliographie',
            paragraphText:
              'L’onglet « Références » de Word permet d’enregistrer des sources (livres, rapports, sites web) avec auteur, titre, année et éditeur, puis de générer automatiquement une bibliographie formatée selon une norme (ISO 690, APA).',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Dans quel onglet de Microsoft Word trouve-t-on les commandes « Gérer les sources » et « Bibliographie » ?',
              options: [
                'Onglet « Publipostage »',
                'Onglet « Affichage »',
                'Onglet « Références »',
                'Onglet « Insertion »',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’onglet « Références » centralise la table des matières, les notes de bas de page, les légendes et les citations/bibliographies.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Filigrane',
            stepTheme: 'Protection visuelle',
            stepTitle: 'Ajouter un filigrane en arrière-plan',
            paragraphText:
              'Un filigrane est un texte ou un logo très pâle affiché en arrière-plan du texte sur toutes les pages (ex. « BROUILLON », « CONFIDENTIEL »). Il indique le statut du document sans nuire à la lisibilité.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Quel est le rôle d’un filigrane (Watermark) ajouté dans un rapport d’entreprise ?',
              options: [
                'Afficher discrètement en arrière-plan le statut ou l’origine du document (ex. CONFIDENTIEL, BROUILLON)',
                'Chiffrer le fichier avec un mot de passe bancaire',
                'Augmenter la taille des marges sur la première page',
                'Convertir les tableaux en graphiques',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le filigrane est une marque visuelle semi-transparente placée derrière le texte pour signaler la confidentialité, le statut de brouillon ou l’identité de l’organisation.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Nommage',
            stepTheme: 'Gestion documentaire',
            stepTitle: 'Respecter une convention de nommage propre',
            paragraphText:
              'Nommer son fichier `Rapport_Transformation_Numerique.docx` (sans espaces, sans accents ni caractères spéciaux comme `/ ? * :`) évite les bugs lors des transferts par e-mail, plateformes LMS ou serveurs web.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Parmi les noms de fichiers suivants, lequel respecte le mieux les bonnes pratiques de nommage informatique exigées dans le TD ?',
              options: [
                'mon rapport final (v2) été!!.docx',
                'Document1.docx',
                'rapport / transformation : 2026?.docx',
                'Rapport_Transformation_Numerique.docx',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Un nom explicite utilisant des underscores (`_`), sans accents ni caractères interdits, assure lisibilité et compatibilité multiplateforme.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Export PDF',
            stepTheme: 'Diffusion',
            stepTitle: 'Pourquoi exporter le rapport final en PDF ?',
            paragraphText:
              'Contrairement au format `.docx` dont le rendu peut varier si le destinataire ne possède pas les mêmes polices ou la même version de Word, le format PDF fige fidèlement la mise en page, les tableaux et les graphiques sur tous les appareils.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Pourquoi est-il recommandé d’envoyer un rapport finalisé à un client ou un jury au format PDF plutôt qu’uniquement au format .docx ?',
              options: [
                'Parce que le format PDF corrige automatiquement les fautes d’orthographe',
                'Parce que le format PDF fige la mise en page et garantit un affichage identique sur tout appareil',
                'Parce que le format .docx ne peut pas contenir d’images',
                'Parce qu’un fichier PDF ne peut jamais être imprimé',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le format PDF embarque la structure exacte des pages et les polices, évitant tout décalage de tableaux ou de sauts de page chez le destinataire.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège de livraison',
            stepTheme: 'Contrôle final',
            stepTitle: 'Ne pas oublier la mise à jour avant l’export PDF',
            paragraphText:
              'Une erreur fréquente consiste à exporter en PDF juste après avoir ajouté la bibliographie sans avoir actualisé la table des matières : la section Bibliographie manque alors dans le sommaire ! Il faut toujours mettre à jour tous les champs avant l’export.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Quelle ultime vérification faut-il effectuer juste avant de cliquer sur « Exporter en PDF » ?',
              options: [
                'Supprimer les styles Titre 1 pour alléger le fichier',
                'Convertir toutes les images en noir et blanc',
                'Mettre à jour la table des matières (et les légendes) puis enregistrer le fichier .docx',
                'Retirer la pagination du pied de page',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Actualiser les champs (table des matières, numéros de figures) puis sauvegarder le .docx garantit que le PDF exporté reflète parfaitement la version finale.',
            },
          },
        ],
      }),
    ],
  },
];
