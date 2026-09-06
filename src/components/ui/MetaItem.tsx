import { ReactNode } from "react";
import { Icon } from "./Icon";

interface MetaItemProps {
  icon: string;
  tone?: "muted" | "accent";
  children: ReactNode;
  className?: string;
}

/** Paire icone + label pour les meta-donnees de recette (temps, portions). */
export function MetaItem({ icon, tone = "muted", children, className = "" }: MetaItemProps) {
  const color = tone === "accent" ? "text-sienna" : "text-moss";
  return (
    <span className={`inline-flex items-center gap-2 text-label-md ${color} ${className}`}>
      <Icon name={icon} size={18} />
      {children}
    </span>
  );
}
