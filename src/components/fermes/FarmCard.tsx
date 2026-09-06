import type { Ferme } from "../../types/ferme";
import { PlaceholderImage } from "../ui/PlaceholderImage";
import { Icon } from "../ui/Icon";
import { Button } from "../ui/Button";
import { trackEvent } from "../../lib/analytics";

interface FarmCardProps {
  ferme: Ferme;
}

/** Adapte du pattern FarmSourceNote/SectionCard du DS pour une carte de ferme partenaire. */
export function FarmCard({ ferme }: FarmCardProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ferme.adresse)}`;

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-secondary-fixed bg-parchment shadow-card">
      <div className="h-40 w-full overflow-hidden">
        <PlaceholderImage icon="agriculture" label="Photo à venir" />
      </div>
      <div className="flex flex-grow flex-col gap-3 p-6">
        <h3 className="text-headline-md font-display text-primary">{ferme.nom}</h3>
        <span className="flex items-start gap-2 text-body-md text-on-surface-variant">
          <Icon name="location_on" size={18} className="mt-0.5 flex-shrink-0 text-moss" />
          {ferme.adresse}
        </span>
        <p className="text-body-md text-on-surface">{ferme.specialite}</p>
        <p className="text-label-md italic text-on-surface-variant">
          « {ferme.verbatim} »
        </p>
        <div className="mt-auto pt-2">
          <Button
            as="a"
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            size="sm"
            icon="directions"
            onClick={() => trackEvent("Clic itinéraire ferme", { ferme: ferme.nom })}
          >
            Voir l'itinéraire
          </Button>
        </div>
      </div>
    </article>
  );
}
