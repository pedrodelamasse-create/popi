import { useState } from "react";
import { PlaceholderImage } from "./PlaceholderImage";

interface PhotoOrPlaceholderProps {
  src?: string;
  alt?: string;
  icon?: string;
  placeholderLabel?: string;
  className?: string;
}

/** Affiche la photo si elle existe, sinon (absente ou introuvable) le placeholder du DS. */
export function PhotoOrPlaceholder({ src, alt = "", icon, placeholderLabel, className = "" }: PhotoOrPlaceholderProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <PlaceholderImage icon={icon} label={placeholderLabel} className={className} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`h-full w-full object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
