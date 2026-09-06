/**
 * Un seul embed Google Maps centre sur le secteur des fermes partenaires
 * (Gambais / Bazainville), sans cle API (output=embed). Decision par defaut
 * documentee dans le plan : plus leger sur mobile qu'un mini-embed par ferme.
 * Alternative si demande plus tard : un iframe par ferme avec la meme URL,
 * en remplacant la query par l'adresse exacte de chaque ferme.
 */
const ZONE_QUERY = "Gambais, Bazainville, Yvelines";

export function FarmsMapEmbed() {
  return (
    <div className="overflow-hidden rounded-lg shadow-card">
      <iframe
        title="Carte des fermes partenaires Popi"
        src={`https://www.google.com/maps?q=${encodeURIComponent(ZONE_QUERY)}&output=embed`}
        width="100%"
        height="360"
        style={{ border: 0, display: "block" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
