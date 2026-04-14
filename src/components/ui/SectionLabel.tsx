import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3 mb-4", className)}>
      <div className="h-px w-8 bg-fodbot-gold" />
      <span className="text-xs font-body font-semibold tracking-[0.25em] text-fodbot-gold uppercase">
        {children}
      </span>
    </div>
  );
}
