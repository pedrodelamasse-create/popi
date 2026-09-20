import { useState } from "react";
import { Icon } from "../ui/Icon";
import { CourseCheckbox } from "./CourseCheckbox";
import { courseTiers, type CourseTier } from "../../data/courses";

interface CourseRowProps {
  label: string;
  checked: boolean;
  onToggle: () => void;
  currentTier: CourseTier;
  onMove: (target: CourseTier) => void;
}

/** Une ligne de la liste : case à cocher + bouton pour la déplacer vers une autre sous-liste. */
export function CourseRow({ label, checked, onToggle, currentTier, onMove }: CourseRowProps) {
  const [open, setOpen] = useState(false);
  const targets = courseTiers.filter((tier) => tier.id !== currentTier);

  return (
    <div className="flex flex-col" onKeyDown={(event) => event.key === "Escape" && setOpen(false)}>
      <div className="flex items-center gap-1">
        <div className="min-w-0 flex-grow">
          <CourseCheckbox label={label} checked={checked} onToggle={onToggle} />
        </div>
        <button
          type="button"
          aria-label={`Déplacer « ${label} » vers une autre liste`}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-pill text-moss transition-colors duration-color ease-popi hover:bg-surface-container aria-expanded:bg-surface-container"
        >
          <Icon name="swap_horiz" size={20} />
        </button>
      </div>

      {open ? (
        <div role="group" aria-label="Déplacer vers" className="flex flex-wrap items-center gap-2 pb-2 pl-12 pr-3">
          <span className="text-label-sm uppercase text-moss">Déplacer vers</span>
          {targets.map((tier) => (
            <button
              key={tier.id}
              type="button"
              onClick={() => {
                onMove(tier.id);
                setOpen(false);
              }}
              className="inline-flex items-center gap-1 rounded-pill border border-moss px-3 py-1 text-label-sm uppercase text-primary transition-colors duration-color ease-popi hover:bg-surface-container"
            >
              <Icon name={tier.icone} size={16} fill={1} />
              {tier.court}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
