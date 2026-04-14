import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  gold?: boolean;
}

export function Card({ className, children, hover = false, gold = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg p-6",
        hover && "transition-all duration-300 hover:border-fodbot-charcoal hover:-translate-y-0.5 hover:shadow-card",
        gold && "border-fodbot-gold/20 hover:border-fodbot-gold/40",
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export function CardHeader({ className, children }: CardHeaderProps) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

export function CardContent({ className, children }: CardHeaderProps) {
  return <div className={cn("", className)}>{children}</div>;
}
