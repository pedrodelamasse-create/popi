import { ReactNode } from "react";

type Tone = "diet" | "allergen" | "neutral";

const tones: Record<Tone, string> = {
  diet: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
  allergen: "bg-error-container text-on-error-container border border-error/20",
  neutral: "bg-surface-container text-on-surface-variant",
};

interface TagProps {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}

/** Marqueur uppercase pour les tags de recette (Vegan, Sans gluten...). */
export function Tag({ tone = "diet", children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-pill px-3 py-1 text-label-sm uppercase ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
