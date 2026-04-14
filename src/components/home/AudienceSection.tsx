"use client";

import { motion } from "framer-motion";
import { Briefcase, Wrench, ShieldCheck, Check } from "lucide-react";
import { audiences } from "@/data/content";
import { SectionLabel } from "@/components/ui/SectionLabel";

const iconMap: Record<string, React.ElementType> = { Briefcase, Wrench, ShieldCheck };

export default function AudienceSection() {
  return (
    <section className="bg-fodbot-dark-card border-y border-fodbot-dark-border py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <SectionLabel className="justify-center">Who It&apos;s Built For</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight max-w-2xl mx-auto">
            Designed for the people who own runway safety.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((audience, i) => {
            const Icon = iconMap[audience.icon] || ShieldCheck;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-fodbot-dark-bg border border-fodbot-dark-border rounded-lg p-7 hover:border-fodbot-charcoal/60 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded bg-fodbot-gold/10 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-fodbot-gold" />
                </div>
                <p className="text-xs font-body font-semibold tracking-widest text-fodbot-gold uppercase mb-2">
                  {audience.role}
                </p>
                <h3 className="font-body font-bold text-white text-lg mb-3 leading-snug">
                  {audience.headline}
                </h3>
                <p className="font-body text-sm text-fodbot-silver leading-relaxed mb-5">
                  {audience.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {audience.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check size={14} className="text-fodbot-gold mt-0.5 shrink-0" />
                      <span className="text-xs font-body text-fodbot-silver">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
