export interface Ferme {
  slug: string;
  nom: string;
  adresse: string;
  producteurs: string;
  specialite: string;
  /** Court témoignage de la ferme, affiché sur sa fiche seulement s'il est renseigné (à obtenir de la ferme). */
  verbatim?: string;
  /** Photo de la ferme, ex. "/images/fermes/mon-slug.jpg" (dossier public/). Placeholder si absente. */
  image?: string;
  imageAlt?: string;
  /** Position GPS pour l'epingle sur la carte */
  lat: number;
  lng: number;
  /** true = epingle au lieu-dit ou a la voie plutot qu'au numero exact */
  positionApprox?: boolean;
}
