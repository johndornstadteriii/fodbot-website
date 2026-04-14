"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("divide-y divide-fodbot-dark-border", className)}>
      {items.map((item, i) => (
        <div key={i} className="py-4">
          <button
            className="w-full flex items-start justify-between gap-4 text-left group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span
              className={cn(
                "text-sm font-body font-medium leading-snug transition-colors duration-200",
                openIndex === i ? "text-white" : "text-fodbot-silver group-hover:text-white"
              )}
            >
              {item.question}
            </span>
            <ChevronDown
              size={16}
              className={cn(
                "mt-0.5 shrink-0 text-fodbot-silver transition-transform duration-200",
                openIndex === i && "rotate-180 text-fodbot-gold"
              )}
            />
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="pt-3 text-sm font-body text-fodbot-silver leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
