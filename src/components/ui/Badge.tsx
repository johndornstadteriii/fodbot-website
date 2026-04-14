import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "silver" | "dark" | "green";
  className?: string;
}

const variants = {
  gold: "bg-fodbot-gold/10 text-fodbot-gold border border-fodbot-gold/20",
  silver: "bg-fodbot-silver/10 text-fodbot-silver border border-fodbot-silver/20",
  dark: "bg-fodbot-dark-border text-fodbot-silver border border-fodbot-dark-border",
  green: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
};

export function Badge({ children, variant = "dark", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-body font-medium tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
