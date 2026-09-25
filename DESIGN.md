---
name: Popi
description: La semaine detox veggie locale, dans un design chaleureux et éditorial, forêt profonde sur crème.
colors:
  deep-forest: "#14261f"
  forest-ink: "#011009"
  rich-cream: "#f7f2e9"
  warm-parchment: "#fcfaf7"
  page-cream: "#fef9f0"
  burnt-sienna: "#8c4a32"
  sienna-text: "#8f4c34"
  apricot-clay: "#ffa98b"
  clay-on-apricot: "#793b24"
  blush-clay: "#ffdbcf"
  muted-moss: "#6b7563"
  sage-tag: "#d7e7cd"
  sage-tag-text: "#3d4b37"
  ink: "#1d1c16"
  ink-muted: "#424845"
  outline-grey: "#737875"
  outline-soft: "#c2c8c3"
  surface-low: "#f8f3ea"
  surface-mid: "#f2ede4"
  surface-high: "#ece8df"
  surface-highest: "#e7e2d9"
  error: "#ba1a1a"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "42px"
    fontWeight: 700
    lineHeight: "52px"
    letterSpacing: "-0.02em"
  headline-lg:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: "40px"
  headline-md:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: "32px"
  body-lg:
    fontFamily: "Chivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "28px"
  body:
    fontFamily: "Chivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
  label:
    fontFamily: "Chivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "20px"
    letterSpacing: "0.05em"
  label-sm:
    fontFamily: "Chivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "16px"
    letterSpacing: "0.08em"
rounded:
  sm: "1px"
  base: "2px"
  md: "4px"
  lg: "8px"
  badge: "12px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"
  section: "64px"
  margin-mobile: "20px"
  margin-desktop: "40px"
  content-max: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.deep-forest}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.forest-ink}"
  button-accent:
    backgroundColor: "{colors.apricot-clay}"
    textColor: "{colors.clay-on-apricot}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.forest-ink}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  tag-diet:
    backgroundColor: "{colors.sage-tag}"
    textColor: "{colors.sage-tag-text}"
    rounded: "{rounded.badge}"
  card:
    backgroundColor: "{colors.warm-parchment}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Popi

## Overview

**Creative North Star: "La table de ferme"**

Popi ressemble à une table de cuisine à la campagne en début d'automne : nappe crème, bois sombre de la forêt, terre cuite pour la chaleur. Le site parle comme un carnet de recettes édité avec soin, pas comme une application. Les titres sont en serif chaleureux, le texte fonctionnel en sans-serif lisible, les photos de plats et de fermes portent l'image.

La densité est faible et l'air généreux (64px entre les sections). Les surfaces sont plates et teintées, les ombres à peine perceptibles et toujours teintées de vert forêt, jamais de noir pur. Les mouvements sont lents et posés, sans rebond. Rien ne crie : aucune couleur vive hors du corail de l'appel à l'action.

Le nom « La table de ferme » est un choix de ma part pour cadrer ce document ; à remplacer si tu préfères une autre image.

**Key Characteristics:**
- Vert forêt profond et crème chaud comme couple principal, terre cuite en accent unique.
- Serif éditorial pour les titres, Chivo pour tout le reste.
- Boutons en pilule, cartes aux coins peu arrondis.
- Ombres ambiantes teintées forêt, jamais de noir.
- Photographie réelle en lumière naturelle, jamais de photo générique.
- Icônes Material Symbols Outlined uniquement.

## Colors

Une palette terreuse et végétale : forêt, crème, sienne, mousse, avec un accent abricot réservé aux appels à l'action.

### Primary
- **Forêt profonde** (`#14261f`) : fond du bouton principal, du pied de page et des grandes surfaces sombres. Son survol passe à `#011009` (encre forêt), utilisée aussi pour le texte des titres et des boutons contour.

### Secondary
- **Sienne brûlée** (`#8c4a32`) : accent éditorial : tirets des listes d'ingrédients, épingles de la carte, anneau de sélection d'une fiche ferme. Version texte : `#8f4c34`.
- **Abricot argile** (`#ffa98b`) avec texte **Argile foncée** (`#793b24`) : bouton d'accent (« Rejoins la communauté » et appels équivalents). C'est le seul aplat vif du site.
- **Rose argile** (`#ffdbcf`) : bordure fine des cartes de ferme.

### Tertiary
- **Sauge** (`#d7e7cd`) avec texte **Sauge foncée** (`#3d4b37`) : étiquettes de régime (Végétarien, Vegan, Sans gluten).
- **Mousse** (`#6b7563`) : bordure des boutons contour, petites icônes, repères de la carte, fond des champs.

### Neutral
- **Crème de page** (`#fef9f0`) : fond général du site. **Crème riche** (`#f7f2e9`) et **Parchemin chaud** (`#fcfaf7`) pour les bandeaux et les cartes.
- **Surfaces** `#f8f3ea`, `#f2ede4`, `#ece8df`, `#e7e2d9` : de plus clair à plus foncé, pour les niveaux de fond, survols et filets.
- **Encre** (`#1d1c16`) pour le texte, **Encre atténuée** (`#424845`) pour le texte secondaire, **Gris contour** (`#737875`) et **Contour doux** (`#c2c8c3`) pour les bordures.
- **Erreur** (`#ba1a1a`) : réservé aux états d'erreur.

### Named Rules
**The One Loud Color Rule.** L'abricot (`#ffa98b`) n'apparaît que sur l'appel à l'action principal d'une page. S'il y en a deux, l'un des deux est de trop.
**The No Pure Black Rule.** Ni texte, ni ombre en `#000`. Le noir du site est une encre verte ou brune.

## Typography

**Display Font :** Source Serif 4 (avec Georgia, Times New Roman, serif)
**Body Font :** Chivo (avec Helvetica Neue, Helvetica, Arial, sans-serif)
**Icônes :** Material Symbols Outlined

**Character :** un serif chaleureux à contraste doux pour la voix éditoriale (titres, noms de recettes et de fermes), un sans-serif net pour tout ce qui est fonctionnel (texte courant, boutons, étiquettes, méta).

### Hierarchy
- **Display** (700, 42px, interligne 52px, interlettrage -0.02em) : titre de l'accueil.
- **Headline LG** (600, 32px mobile 28px, interligne 40px) : titres de page et de section.
- **Headline MD** (600, 24px, interligne 32px) : titres de cartes, de recettes et de fermes.
- **Body LG** (400, 18px, interligne 28px) : chapô et introductions.
- **Body** (400, 16px, interligne 24px) : texte courant ; garder des lignes de 65 à 75 caractères.
- **Label** (500, 14px, interligne 20px, interlettrage 0.05em) : boutons moyens, méta (préparation, cuisson).
- **Label SM** (600, 12px, interlettrage 0.08em) : petits boutons, étiquettes ; boutons en MAJUSCULES.

### Named Rules
**The Two Voices Rule.** Le serif ne sert qu'aux titres et aux noms ; le sans-serif ne sert jamais aux titres de page. Ne pas mélanger.
**The Action Verb Rule.** Dans les étapes de recette, le verbe d'action est en majuscules (format ELLE à Table).

## Layout

Mobile d'abord, colonne unique sur téléphone avec des marges de 20px, marges de 40px sur grand écran, contenu plafonné à 1280px de large. Rythme sur une base de 8px : 4, 8, 16, 32 pour les espaces internes, 64px entre les grandes sections. La navigation horizontale n'apparaît qu'à partir du point de rupture `lg` ; en dessous, menu compact. Les grilles de cartes (recettes, fermes) passent de une à deux puis trois colonnes avec un espacement de 16px.

## Elevation & Depth

Approche hybride : la profondeur vient d'abord des niveaux de fond (crème, parchemin, surfaces teintées), puis d'ombres ambiantes très diffuses teintées vert forêt (`rgba(30,46,40,…)`), jamais de noir.

### Shadow Vocabulary
- **Filet** (`0 2px 8px rgba(30,46,40,0.05)`) : bouton d'accent, éléments discrets.
- **Carte** (`0 4px 20px rgba(30,46,40,0.04)`) : cartes au repos.
- **Carte relevée** (`0 8px 30px rgba(30,46,40,0.06)`) : cartes au survol.
- **Encart** (`0 4px 24px rgba(30,46,40,0.03)`) : blocs intégrés.
- **Image** (`0 4px 24px rgba(30,46,40,0.08)`) : photos.
- **Appel à l'action** (`0 8px 16px rgba(30,46,40,0.15)`) : bouton principal.
- **Barre** (`0 2px 10px rgba(30,46,40,0.05)`) : en-tête.

### Named Rules
**The Whisper Shadow Rule.** Une ombre ne dépasse jamais 0.15 d'opacité et sert à détacher, pas à impressionner.

## Shapes

Des coins presque droits pour les cartes et les images (2 à 8px), et des pilules complètes (9999px) pour les boutons. Les étiquettes de régime ont des coins de 12px. Les cartes sont cernées d'un filet fin (rose argile pour les fermes) plutôt que d'une ombre forte. Les photos sont recadrées en `object-cover`, avec un fond de repli calme quand la photo manque.

## Components

### Buttons
- **Forme :** pilule (9999px), texte en majuscules, icône Material Symbols facultative à gauche.
- **Primary :** fond forêt profonde (`#14261f`), texte blanc, ombre d'appel à l'action ; survol vers `#011009`.
- **Accent :** fond abricot (`#ffa98b`), texte argile foncée (`#793b24`), ombre filet.
- **Outline :** transparent, bordure mousse (`#6b7563`), survol vers la surface `#f2ede4`.
- **Ghost :** transparent, texte encre atténuée.
- **Tailles :** SM 16×8px (label SM), MD 24×12px (label), LG 24×16px avec interlettrage 0.1em.
- **Appui :** réduction d'échelle à 0.98 en 200ms ; désactivé à 40 % d'opacité.

### Chips (étiquettes)
- **Style :** fond sauge (`#d7e7cd`), texte sauge foncée (`#3d4b37`), coins 12px, label SM.
- **Usage :** régime (Végétarien, Vegan, Sans gluten) et Poisson pour les recettes qui en contiennent.

### Cards / Containers
- **Corner Style :** 8px.
- **Background :** parchemin chaud (`#fcfaf7`).
- **Shadow Strategy :** ombre Carte au repos, Carte relevée au survol.
- **Border :** filet rose argile (`#ffdbcf`) pour les fermes.
- **Internal Padding :** 24px ; photo en tête (160px de haut pour les fermes).

### Inputs / Fields
Case à cocher de la liste de courses : carré de 24px à coins de 4px, bordure mousse de 2px ; une fois cochée, bordure et fond passent en forêt, et le libellé est barré en gris contour (`#737875`). Anneau sienne au focus clavier.

### Navigation
En-tête clair avec logo Popi compact à gauche (image `logo-popi-compact.png`), liens en label, ombre Barre. Menu compact sur mobile, navigation horizontale à partir de `lg`. Liens : Accueil, À propos, Recettes, Courses, Fermes, Communauté.

### Carte des fermes (composant signature)
Carte OpenStreetMap avec épingles sienne (`#8c4a32`) cerclées de blanc ; le survol agrandit le dessin de l'épingle sans déplacer le marqueur. Un clic mène à la fiche de la ferme, qui s'entoure d'un anneau sienne.

## Do's and Don'ts

### Do:
- **Do** garder le fond général en crème (`#fef9f0`) et réserver le vert forêt (`#14261f`) aux boutons principaux et aux grandes surfaces sombres.
- **Do** utiliser le serif (Source Serif 4) pour les titres et Chivo pour le reste.
- **Do** utiliser des ombres teintées forêt à faible opacité, et des transitions de 200 à 300ms avec la courbe `cubic-bezier(0, 0, 0.2, 1)`.
- **Do** montrer de vraies photos (plats, fermes, Pauline) ; en cas d'absence, un fond de repli sobre avec une icône, clairement provisoire.
- **Do** utiliser uniquement Material Symbols Outlined pour les icônes.
- **Do** écrire en tutoyant, en phrases courtes.

### Don't:
- **Don't** utiliser du noir pur, des couleurs criardes ou un second aplat vif à côté de l'abricot.
- **Don't** utiliser des photos de banque d'images génériques.
- **Don't** ajouter de rebond, d'animation vive ou d'effet tape-à-l'œil : le mouvement est lent et posé.
- **Don't** arrondir les cartes comme des bulles : les coins restent à 2–8px, seules les pilules sont complètement rondes.
- **Don't** utiliser un langage culpabilisant ou médical autour de « detox ».
- **Don't** reprendre les éléments d'application du design system d'origine (barre de navigation basse, écran de déblocage, scanner), hors périmètre du site.
