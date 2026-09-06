# Popi — site pilote "Semaine Detox Veggie Locale"

Site vitrine statique (React + Vite + TypeScript + Tailwind) construit à partir de
`BRIEF-Claude-Code-Site-Popi.md`. Look & feel basé sur le design system "Warm Hearth & Forest"
(tokens couleurs/typo/espacements/rayons/ombres) — voir `src/styles/tokens.css`.

## Démarrer

```bash
npm install
npm run dev
```

Ouvre `http://localhost:5173`.

## Build de production

```bash
npm run build
npm run preview
```

## Configuration (`.env`)

Copier `.env.example` en `.env` et renseigner :

- `VITE_WHATSAPP_URL` — lien d'invitation du groupe WhatsApp du pilote (régénérable).
- `VITE_PLAUSIBLE_DOMAIN` — domaine Plausible pour l'analytics ; laisser vide pour désactiver.
- `VITE_INSTAGRAM_URL` — lien Instagram de Popi.

## Éditer le contenu

Tout le contenu éditorial est dans `src/data/`, séparé des composants :

- `src/data/recipes.ts` — les 7 dîners de la semaine (titre, tags, temps, ingrédients, étapes).
  Le contenu actuel est un gabarit de test à valider avec Pauline.
- `src/data/fermes.ts` — les 5 fermes partenaires. **À valider avec chaque ferme avant mise en
  prod** (exactitude des infos, autorisation nom/photo/verbatim) — voir le commentaire `TODO` en
  tête de fichier.
- `src/data/site.config.ts` — liens externes et date de lancement.

Ajouter, retirer ou réordonner une recette ou une ferme se fait uniquement dans ces fichiers.

## Déploiement

Le projet est un site statique standard (`npm run build` produit `dist/`). Configs de rewrite SPA
incluses pour Vercel (`vercel.json`) et Netlify (`netlify.toml`), nécessaires pour que les URLs de
fiches recette (`/recettes/:slug`) fonctionnent en accès direct.

## Notes de scope

- Pas de compte utilisateur, pas de paiement, pas de mécanique de déblocage — tout le contenu est
  visible immédiatement, conformément au brief.
- Les photos (plats, fermes, portrait de Pauline) sont des placeholders visuels ; à remplacer par
  de vraies photos avant lancement.
- La police (Source Serif 4 + Chivo + Material Symbols Outlined) est chargée depuis Google Fonts ;
  envisager un auto-hébergement avant une mise en prod à fort trafic.
