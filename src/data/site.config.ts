/**
 * Configuration du site, lue depuis les variables d'environnement (voir .env.example).
 * Aucune valeur sensible ici : uniquement des liens publics et un nom de domaine analytics.
 */
export const siteConfig = {
  nom: "Popi",
  accroche: "La semaine detox veggie locale",
  whatsappUrl:
    import.meta.env.VITE_WHATSAPP_URL ||
    "https://chat.whatsapp.com/REMPLACER_PAR_LE_LIEN_DU_GROUPE",
  plausibleDomain: import.meta.env.VITE_PLAUSIBLE_DOMAIN || "",
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/popi_food",
  dateLancement: "2026-09-17",
  /** Portrait de Pauline (page À propos). Fichier à déposer dans public/images/. */
  portraitPauline: "/images/pauline.jpg",
};
