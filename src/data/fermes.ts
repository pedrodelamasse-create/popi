import type { Ferme } from "../types/ferme";

// TODO: valider avec chaque ferme avant mise en prod (exactitude des infos,
// autorisation d'utiliser son nom, une photo et un verbatim). Ces donnees
// viennent de recherches web publiques, pas d'un contact direct (brief section 5).
export const fermes: Ferme[] = [
  {
    slug: "ferme-du-loup-ravissant",
    nom: "Ferme du Loup Ravissant",
    adresse: "3 route de Richebourg, 78550 Bazainville",
    producteurs: "Jeffrey Vanhalst",
    specialite: "Foie gras et produits de canard élevés en plein air, légumes de saison",
    verbatim: "[À VALIDER DIRECTEMENT AVEC LA FERME]",
  },
  {
    slug: "la-ferme-des-sources",
    nom: "La Ferme des Sources",
    adresse: "215 route du Boulay, hameau de Mocsouris, 78950 Gambais",
    producteurs: "Famille Duchemin (GAEC des Sources)",
    specialite: "Une quarantaine de légumes de saison en agriculture biologique",
    verbatim: "[À VALIDER DIRECTEMENT AVEC LA FERME]",
  },
  {
    slug: "la-ferme-d-orvilliers",
    nom: "La Ferme d'Orvilliers (boutique La Brouette)",
    adresse: "11 rue du Télégraphe, 28410 Broué",
    producteurs: "Hélène Chaudy, Adrien et Benjamin Pelletier",
    specialite: "Paysans-boulangers : céréales bio, farine et pain au levain naturel",
    verbatim: "[À VALIDER DIRECTEMENT AVEC LA FERME]",
  },
  {
    slug: "la-ferme-du-recoin",
    nom: "La Ferme du Recoin",
    adresse: "14 Recoin, 78113 Bourdonné",
    producteurs: "[À IDENTIFIER]",
    specialite: "Légumes en circuit court, vente en click & collect",
    verbatim: "[À VALIDER DIRECTEMENT AVEC LA FERME]",
  },
  {
    slug: "la-ferme-de-la-tremblaye",
    nom: "La Ferme de la Tremblaye",
    adresse: "Chemin de la Tremblaye, 78125 La Boissière-École",
    producteurs: "Baptiste Carrouche",
    specialite: "Fromagerie fermière (vache et chèvre) depuis 1967, agroécologie",
    verbatim: "[À VALIDER DIRECTEMENT AVEC LA FERME]",
  },
];
