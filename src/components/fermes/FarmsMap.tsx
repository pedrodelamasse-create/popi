import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Ferme } from "../../types/ferme";
import { trackEvent } from "../../lib/analytics";

/**
 * Carte interactive des fermes partenaires, centrée sur la zone Houdan – Montfort-l'Amaury.
 * Une épingle par ferme : un clic mène à sa fiche (ancre #slug, voir FarmCard).
 *
 * Choix technique : Leaflet + fond OpenStreetMap, sans clé d'API. Une carte Google avec épingles
 * personnalisées cliquables demanderait une clé Google Maps Platform (compte de facturation).
 * Les tuiles publiques d'OpenStreetMap conviennent à un pilote ; pour un trafic important, prévoir
 * un fournisseur de tuiles dédié (MapTiler, Stadia, etc.).
 */

// Repères pour cadrer la zone voulue (coordonnées Base Adresse Nationale).
const REPERES: [number, number][] = [
  [48.79142, 1.59855], // Houdan
  [48.77433, 1.80529], // Montfort-l'Amaury
];

const PIN_SVG =
  '<svg width="36" height="46" viewBox="0 0 36 46" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
  '<path d="M18 44C18 44 3 28 3 17a15 15 0 0 1 30 0c0 11-15 27-15 27z" fill="#8c4a32" stroke="#ffffff" stroke-width="2.5"/>' +
  '<circle cx="18" cy="17" r="6" fill="#ffffff"/></svg>';

interface FarmsMapProps {
  fermes: Ferme[];
}

export function FarmsMap({ fermes }: FarmsMapProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const map = L.map(container.current, {
      scrollWheelZoom: false, // ne pas capturer le défilement de la page
      dragging: !L.Browser.mobile, // sur mobile, le doigt fait défiler la page (zoom par + / − ou pincement)
    });

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">Contributeurs OpenStreetMap</a>',
    }).addTo(map);

    const pin = L.divIcon({
      className: "popi-pin",
      html: PIN_SVG,
      iconSize: [36, 46],
      iconAnchor: [18, 44],
      tooltipAnchor: [0, -40],
    });

    fermes.forEach((ferme) => {
      L.marker([ferme.lat, ferme.lng], { icon: pin, title: ferme.nom, alt: `Fiche de ${ferme.nom}`, keyboard: true })
        .bindTooltip(ferme.nom, { direction: "top", opacity: 1 })
        .on("click", () => {
          trackEvent("Clic pin ferme", { ferme: ferme.nom });
          // Aller à la fiche : l'ancre déclenche le défilement, et la fiche s'entoure (target:).
          window.location.hash = ferme.slug;
        })
        .addTo(map);
    });

    const zone = L.latLngBounds([...fermes.map((f): [number, number] => [f.lat, f.lng]), ...REPERES]);
    const fit = () => map.fitBounds(zone, { padding: [40, 40] });
    fit();

    // Si le conteneur n'avait pas encore de taille à la création (onglet en arrière-plan, mise en page
    // tardive), on recadre la zone dès que sa taille devient valide, puis on suit ses changements.
    let sized = container.current.clientWidth > 0;
    const observer = new ResizeObserver(() => {
      map.invalidateSize();
      if (!sized && container.current && container.current.clientWidth > 0) {
        sized = true;
        fit();
      }
    });
    observer.observe(container.current);

    return () => {
      observer.disconnect();
      map.remove();
    };
  }, [fermes]);

  return (
    <div className="flex flex-col gap-3">
      <div
        ref={container}
        role="region"
        aria-label="Carte des fermes partenaires entre Houdan et Montfort-l'Amaury"
        className="isolate h-[340px] w-full overflow-hidden rounded-lg shadow-card md:h-[440px]"
      />
      <p className="text-label-md text-on-surface-variant">
        Touche une épingle pour aller à la fiche de la ferme.
      </p>
    </div>
  );
}
