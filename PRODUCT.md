# Product

<!-- impeccable:product-schema 1 -->

<!-- Rédigé depuis le brief (BRIEF-Claude-Code-Site-Popi.md), le canevas Claude Design "Popi — pages du site" et le code. Aucune interview : les faits ci-dessous viennent du brief et du code, à corriger si besoin. -->

## Platform

web

## Users

Familles et foyers de l'Ouest francilien autour de Gambais, Houdan et Montfort-l'Amaury. Ils arrivent presque toujours par un lien partagé sur WhatsApp, donc sur mobile. Ils veulent savoir quoi cuisiner le soir en semaine sans y passer des heures et sans culpabiliser. Le foyer de référence compte 5 personnes (2 adultes, 3 enfants), mais rien sur le site ne doit exclure un autre foyer.

## Product Purpose

Popi est un site pilote de la « Semaine Detox Veggie Locale » : une semaine de dîners principalement végétariens (le brief visait 100 % végétarien, mais le carpaccio de betterave au saumon et le ceviche de thon contiennent du poisson ; le texte de l'accueil dit « mais pas que »), avec des produits de fermes voisines, dans l'esprit d'une remise en forme de rentrée. Il présente Pauline et Popi, les recettes, une liste de courses en trois niveaux, les cinq fermes partenaires sur une carte, et il mène vers un groupe WhatsApp de la communauté. Le succès se mesure en visites, temps passé sur les fiches recette, clics vers la carte et clics vers WhatsApp.

## Positioning

Une semaine de dîners veggie construite avec des fermes précises et identifiables du territoire, portée par une personne réelle (Pauline), et non un catalogue de recettes anonyme. Un site concurrent pourrait copier les recettes, mais pas ces cinq fermes ni ce visage.

## Operating Context

- Consultation sur mobile, souvent en cuisine ou en faisant les courses.
- La liste de courses est cochée sur l'appareil de chaque visiteur (localStorage), sans compte.
- Le contenu (recettes, fermes, courses, liens) est modifié par Pauline ou Pierre-Emmanuel dans les fichiers de données `src/data/`, pas dans les composants.
- Un canevas Claude Design (« Popi — pages du site ») reflète les pages et sert à valider les textes avant de les reporter dans le code.
- Hébergé sur Vercel, domaine `latabledepopi.com`.

## Capabilities and Constraints

- Site 100 % statique : pas de compte, pas de paiement, pas de personnalisation (allergies, préférences), pas de page Contact, pas de mécanique de déblocage ni de QR multi-producteurs.
- Pages : Accueil, À propos, Recettes (et fiche par recette), Liste de courses, Fermes (carte avec épingles menant à chaque fiche), Communauté.
- Liste de courses en trois niveaux : fond de tiroir (coché par défaut pour les évidences : sel, poivre, huile d'olive, ail, épices, bouillon), produits de la ferme, tout-venant du supermarché. Un article peut passer d'un niveau à l'autre.
- Le lien WhatsApp et le compte Instagram sont configurables (`VITE_WHATSAPP_URL`, `VITE_INSTAGRAM_URL`).
- Analytics optionnelle (Plausible), désactivée tant qu'aucun domaine n'est configuré.
- Non tranché : nombre final de recettes (le brief propose 7, la page d'accueil des recettes parle de « cinq dîners »), modération du groupe WhatsApp, cibles chiffrées des indicateurs, date de lancement (hypothèse : 17 septembre 2026).
- Vocabulaire : « detox » veut dire fraîcheur et légèreté de rentrée, jamais restriction ni sens médical.

## Brand Commitments

- Nom : Popi, en minuscules-capitalisées « Popi ». Logo fourni (`public/images/logo-popi-compact.png`), placé en haut à gauche.
- Voix : tutoiement chaleureux, phrases courtes, emoji rares, jamais culpabilisant ni injonctif. Références de ton : Epicurienne Green ; références de format de recette : ELLE à Table (verbes d'action en majuscules, « Préparation / Cuisson / Pour X personnes »).
- Pauline est le visage unique du site ; Pierre-Emmanuel reste en retrait.
- Triptyque santé / planète / équité, formulé simplement, sans jargon de plan stratégique.
- Look & feel imposé par le design system « Warm Hearth & Forest » (voir DESIGN.md).

## Evidence on Hand

- Portrait de Pauline : `public/images/pauline.jpg`.
- Photos réelles des recettes 1 à 4 : `public/images/recettes/` (salade de chou-fleur, carpaccio de betterave, ceviche de thon blanc, roulés de courgettes).
- Photos réelles des 5 fermes : `public/images/fermes/`. Deux d'entre elles sont petites (Orvilliers 233×216, Sources 194×259) et paraissent floues en grand.
- Adresses et coordonnées des 5 fermes ; deux positions sont approximatives (Orvilliers, Tremblaye).
- Absent, à ne pas inventer : témoignages des fermes, texte définitif de Pauline (placeholder `[TEXTE À VALIDER AVEC PAULINE]`), quantités et étapes validées des recettes 1 à 4, photos des recettes 5 à 7, chiffres d'audience.
- Les informations sur les fermes doivent encore être validées avec chacune (exactitude, accord pour le nom et la photo).

## Product Principles

1. Accès libre et immédiat : tout le contenu est visible sans compte, sans preuve d'achat, sans étape préalable.
2. Le local est concret : on nomme les fermes, on les place sur la carte, on montre leurs produits.
3. Léger avant tout : le ton, la longueur des recettes et l'effort demandé restent faibles ; jamais de culpabilité.
4. Un visage réel : Pauline parle à la première personne, et rien ne simule une équipe ou une marque plus grosse qu'elle n'est.
5. Le contenu vit dans les données : recettes, fermes, courses et liens se changent sans toucher au code.

## Accessibility & Inclusion

- Mobile d'abord ; le contenu reste lisible et utilisable au pouce.
- Cases à cocher, boutons et liens d'une taille tactile suffisante ; contraste de texte au moins WCAG AA (à vérifier sur les étiquettes vertes et le bouton corail).
- Pas de mention « pour 5 » qui gêne la lecture pour un autre foyer.
- Langue : français.
