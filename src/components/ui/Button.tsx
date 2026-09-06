import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { Icon } from "./Icon";

type Variant = "primary" | "accent" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "bg-forest text-on-primary shadow-cta hover:bg-primary",
  accent: "bg-secondary-container text-on-secondary-container shadow-hairline",
  outline: "bg-transparent text-primary border border-moss hover:bg-surface-container",
  ghost: "bg-transparent text-on-surface-variant hover:bg-surface-container",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-label-sm",
  md: "px-6 py-3 text-label-md",
  lg: "px-6 py-4 text-label-md tracking-[0.1em]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill uppercase font-body cursor-pointer " +
  "transition-[background-color,color,transform] duration-color ease-popi active:scale-[0.98] " +
  "disabled:opacity-40 disabled:pointer-events-none";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: string;
  fullWidth?: boolean;
  children?: ReactNode;
  className?: string;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type AnchorButtonProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };
type NavLinkButtonProps = CommonProps & Omit<LinkProps, "className" | "children"> & { as: "link" };

function iconEl(icon?: string) {
  return icon ? <Icon name={icon} size={18} fill={1} /> : null;
}

/** Bouton pill du DS (Button.jsx) : "button" pour les actions, "a" pour les liens externes, "link" pour la nav interne (react-router, sans rechargement). */
export function Button(props: ButtonProps | AnchorButtonProps | NavLinkButtonProps) {
  const { variant = "primary", size = "md", icon, fullWidth = false, children, className = "", as = "button", ...rest } = props;
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (as === "link") {
    return (
      <Link className={classes} {...(rest as Omit<LinkProps, "className" | "children">)}>
        {iconEl(icon)}
        {children}
      </Link>
    );
  }

  if (as === "a") {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {iconEl(icon)}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {iconEl(icon)}
      {children}
    </button>
  );
}
