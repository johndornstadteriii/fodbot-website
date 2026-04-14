import { cn } from "@/lib/utils";
import Link from "next/link";
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonProps | LinkProps;

const variantClasses = {
  primary:
    "bg-fodbot-gold text-fodbot-black font-semibold hover:bg-fodbot-gold-light active:bg-fodbot-gold-dim transition-colors duration-200",
  secondary:
    "bg-fodbot-dark-card text-white border border-fodbot-dark-border hover:border-fodbot-charcoal hover:bg-fodbot-charcoal/30 transition-colors duration-200",
  ghost:
    "text-fodbot-silver hover:text-white hover:bg-white/5 transition-colors duration-200",
  outline:
    "border border-fodbot-gold text-fodbot-gold hover:bg-fodbot-gold/10 transition-colors duration-200",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm rounded",
  md: "px-6 py-2.5 text-sm rounded",
  lg: "px-8 py-3.5 text-base rounded",
};

export function Button({ variant = "primary", size = "md", className, children, href, ...rest }: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-body tracking-wide whitespace-nowrap",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
