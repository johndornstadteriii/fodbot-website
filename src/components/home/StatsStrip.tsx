"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/content";

export default function StatsStrip() {
  return (
    <section className="relative bg-fodbot-dark-card border-y border-fodbot-dark-border overflow-hidden">
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fodbot-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-1.5 text-center lg:text-left lg:border-r lg:border-fodbot-dark-border last:border-0 lg:px-6 first:pl-0"
            >
              <p className="font-display text-3xl lg:text-4xl font-bold text-fodbot-gold tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm font-body text-white leading-snug">{stat.label}</p>
              <p className="text-xs font-body text-fodbot-charcoal">{stat.source}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fodbot-gold/20 to-transparent" />
    </section>
  );
}
