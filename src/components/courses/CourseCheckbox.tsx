import { Icon } from "../ui/Icon";

interface CourseCheckboxProps {
  label: string;
  checked: boolean;
  onToggle: () => void;
}

/** Ligne de liste avec case à cocher. Cochée : libellé barré et grisé, comme dans le design system. */
export function CourseCheckbox({ label, checked, onToggle }: CourseCheckboxProps) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-transparent p-3 transition-colors duration-color ease-popi hover:border-surface-variant hover:bg-surface-low">
      <input type="checkbox" className="peer sr-only" checked={checked} onChange={onToggle} />
      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border-2 border-moss text-on-primary transition-colors duration-color ease-popi peer-checked:border-forest peer-checked:bg-forest peer-focus-visible:ring-2 peer-focus-visible:ring-sienna peer-focus-visible:ring-offset-2">
        {checked ? <Icon name="check" size={18} /> : null}
      </span>
      <span className={`text-body-md transition-colors duration-color ease-popi ${checked ? "text-outline line-through" : "text-on-surface"}`}>
        {label}
      </span>
    </label>
  );
}
