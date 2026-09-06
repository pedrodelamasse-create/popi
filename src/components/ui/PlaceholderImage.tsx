import { Icon } from "./Icon";

interface PlaceholderImageProps {
  icon?: string;
  label?: string;
  className?: string;
}

/**
 * Traitement visuel sobre pour les photos manquantes (plats, fermes, portrait
 * de Pauline). Le DS d'origine referencait des URLs Google Stitch non
 * possedees ; on evite aussi le stock photo generique (brief section 2).
 */
export function PlaceholderImage({ icon = "restaurant", label = "Photo à venir", className = "" }: PlaceholderImageProps) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-surface-container text-on-surface-variant ${className}`}
    >
      <Icon name={icon} size={36} className="text-moss" />
      <span className="text-label-sm uppercase tracking-[0.08em]">{label}</span>
    </div>
  );
}
