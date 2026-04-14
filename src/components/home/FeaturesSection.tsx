"use client";

import { motion } from "framer-motion";
import {
  Layers, Radar, Navigation, Radio, FileText, Zap, Shield, Sliders,
} from "lucide-react";
import { features } from "@/data/content";
import { SectionLabel } from "@/components/ui/SectionLabel";

const iconMap: Record<string, React.ElementType> = {
  Layers, Radar, Navigation, Radio, FileText, Zap, Shield, Sliders,
};

export default function FeaturesSection() {
  return (
    <section className="bg-fodbot-dark-bg py-24" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight max-w-2xl">
            Built for the runway. Every system matters.
          </h2>
          <p className="mt-4 text-fodbot-silver font-body max-w-xl">
            FODBOT integrates detection, removal, navigation, and documentation into a single autonomous platform —
            designed for active airfield operations at facilities with lean crews and real safety obligations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Shield;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg p-5 hover:border-fodbot-charcoal/60 hover:-translate-y-0.5 hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded bg-fodbot-gold/10 flex items-center justify-center mb-4 group-hover:bg-fodbot-gold/15 transition-colors duration-300">
                  <Icon size={20} className="text-fodbot-gold" />
                </div>
                <h3 className="font-body font-semibold text-white text-sm mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="font-body text-xs text-fodbot-silver leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
