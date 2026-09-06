interface IconProps {
  name: string;
  size?: number;
  fill?: 0 | 1;
  color?: string;
  className?: string;
}

/** Enveloppe autour de Material Symbols Outlined — seul systeme d'icones du DS. */
export function Icon({ name, size = 24, fill = 0, color = "currentColor", className = "" }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={`icon ${className}`}
      style={{
        fontSize: size,
        color,
        fontVariationSettings: `"FILL" ${fill}`,
      }}
    >
      {name}
    </span>
  );
}
