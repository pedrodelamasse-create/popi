import type { Ferme } from "../types/ferme";

// TODO: valider avec chaque ferme avant mise en prod (exactitude des infos,
// autorisation d'utiliser son nom, une photo et un verbatim). Ces donnees
// viennent de recherches web publiques, pas d'un contact direct (brief section 5).
//
// Coordonnees GPS (lat, lng) : obtenues via la Base Adresse Nationale (api-adresse.data.gouv.fr)
// a partir des adresses ci-dessous. `positionApprox: true` = point situe au lieu-dit / a la voie,
// pas au numero exact — a verifier sur place.
export const fermes: Ferme[] = [
  {
    slug: "ferme-du-loup-ravissant",
    nom: "Ferme du Loup Ravissant",
    adresse: "3 route de Richebourg, 78550 Bazainville",
    producteurs: "Jeffrey Vanhalst",
    specialite:
      "Foie gras et produits de canard élevés en plein air, légumes de saison, pains de la Ferme d'Orvilliers",
    image: "/images/fermes/ferme-du-loup-ravissant.jpg",
    imageAlt: "Bâtiment de ferme en pierre couvert de vigne vierge rouge, porte en bois ouverte et courges à l'entrée",
    lat: 48.80566,
    lng: 1.66558,
  },
  {
    slug: "la-ferme-des-sources",
    nom: "La Ferme des Sources",
    adresse: "215 route du Boulay, hameau de Mocsouris, 78950 Gambais",
    producteurs: "Famille Duchemin (GAEC des Sources)",
    specialite: "Une quarantaine de légumes de saison en agriculture biologique, pain de la Ferme d'Orvilliers",
    image: "/images/fermes/la-ferme-des-sources.jpg",
    imageAlt: "Potimarron orange et courge verte au milieu des feuilles dans un champ",
    lat: 48.78739,
    lng: 1.63921,
  },
  {
    slug: "la-ferme-d-orvilliers",
    nom: "La Ferme d'Orvilliers (boutique La Brouette)",
    adresse: "11 rue du Télégraphe, 28410 Broué",
    producteurs: "Hélène Chaudy, Adrien et Benjamin Pelletier",
    specialite: "Paysans-boulangers : céréales bio, farine et pain au levain naturel",
    image: "/images/fermes/la-ferme-d-orvilliers.jpg",
    imageAlt: "Atelier de meunerie et de boulangerie avec des sacs de farine posés sur de grandes tables en bois",
    lat: 48.75212,
    lng: 1.52064,
    positionApprox: true,
  },
  {
    slug: "la-ferme-du-recoin",
    nom: "La Ferme du Recoin",
    adresse: "14 Recoin, 78113 Bourdonné",
    producteurs: "[À IDENTIFIER]",
    specialite: "Légumes en circuit court, vente en click & collect",
    image: "/images/fermes/la-ferme-du-recoin.webp",
    imageAlt: "Rangs de fenouil, de laitues rouges et vertes et de betteraves dans un champ de légumes",
    lat: 48.76322,
    lng: 1.6472,
  },
  {
    slug: "la-ferme-de-la-tremblaye",
    nom: "La Ferme de la Tremblaye",
    adresse: "Chemin de la Tremblaye, 78125 La Boissière-École",
    producteurs: "Baptiste Carrouche",
    specialite: "Fromagerie fermière (vache et chèvre) depuis 1967, agroécologie",
    image: "/images/fermes/la-ferme-de-la-tremblaye.jpg",
    imageAlt: "Boutique de la Fromagerie de la Tremblaye : comptoir vitré, fromages et produits fermiers",
    lat: 48.67771,
    lng: 1.65099,
    positionApprox: true,
  },
];
