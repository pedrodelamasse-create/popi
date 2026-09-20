import type { Ferme } from "../../types/ferme";
import { PhotoOrPlaceholder } from "../ui/PhotoOrPlaceholder";
import { Icon } from "../ui/Icon";
import { Button } from "../ui/Button";
import { trackEvent } from "../../lib/analytics";

interface FarmCardProps {
  ferme: Ferme;
}

/**
 * Fiche d'une ferme partenaire. L'id (= slug) sert d'ancre : les épingles de la carte y renvoient,
 * et la fiche visée est entourée (`target:`) pour qu'on la repère.
 */
export function FarmCard({ ferme }: FarmCardProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ferme.adresse)}`;

  return (
    <article
      id={ferme.slug}
      className="flex scroll-mt-28 flex-col overflow-hidden rounded-lg border border-secondary-fixed bg-parchment shadow-card transition-shadow duration-color ease-popi target:ring-2 target:ring-sienna target:ring-offset-2 target:ring-offset-background"
    >
      <div className="h-40 w-full overflow-hidden">
        <PhotoOrPlaceholder src={ferme.image} alt={ferme.imageAlt} icon="agriculture" placeholderLabel="Photo à venir" />
      </div>
      <div className="flex flex-grow flex-col gap-3 p-6">
        <h3 className="text-headline-md font-display text-primary">{ferme.nom}</h3>
        <span className="flex items-start gap-2 text-body-md text-on-surface-variant">
          <Icon name="location_on" size={18} className="mt-0.5 flex-shrink-0 text-moss" />
          {ferme.adresse}
        </span>
        <p className="text-body-md text-on-surface">{ferme.specialite}</p>
        {ferme.verbatim ? (
          <p className="text-label-md italic text-on-surface-variant">« {ferme.verbatim} »</p>
        ) : null}
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
