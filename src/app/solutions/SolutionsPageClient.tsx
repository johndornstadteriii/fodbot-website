"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, AlertTriangle, Plane, Target, BarChart2 } from "lucide-react";
import { segments } from "@/data/content";
import { SectionLabel } from "@/components/ui/SectionLabel";

const iconMap: Record<string, React.ElementType> = { Plane, Target, BarChart2 };

export default function SolutionsPageClient() {
  return (
    <div className="bg-fodbot-dark-bg min-h-screen pt-20">
      {/* Header */}
      <section className="relative overflow-hidden py-20 border-b border-fodbot-dark-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-100" style={{ backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0 bg-radial-gold" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SectionLabel>Solutions</SectionLabel>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
              Built for how smaller airports actually operate.
            </h1>
            <p className="text-fodbot-silver font-body text-lg max-w-2xl leading-relaxed">
              FODBOT is designed for the facilities that enterprise FOD systems overlook — not because your
              safety obligations are smaller, but because your resources are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Segment sections */}
      {segments.map((segment, i) => {
        const Icon = iconMap[segment.icon] || Plane;
        return (
          <section
            key={segment.id}
            id={segment.id}
            className={`py-20 border-b border-fodbot-dark-border ${i % 2 === 1 ? "bg-fodbot-dark-card" : "bg-fodbot-dark-bg"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-16 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded bg-fodbot-gold/10 flex items-center justify-center">
                      <Icon size={18} className="text-fodbot-gold" />
                    </div>
                    <span className="text-xs font-body font-semibold tracking-widest text-fodbot-gold uppercase">
                      {segment.name}
                    </span>
                  </div>
                  <p className="text-fodbot-silver font-body text-sm mb-3">{segment.subtitle}</p>
                  <h2 className="font-display text-3xl font-bold text-white mb-5 leading-tight">
                    {segment.headline}
                  </h2>
                  <p className="text-fodbot-silver font-body leading-relaxed mb-6">{segment.description}</p>

                  <div className="inline-flex items-center gap-2 bg-fodbot-gold/5 border border-fodbot-gold/20 rounded px-3 py-1.5 mb-6">
                    <span className="text-xs font-body text-fodbot-gold">{segment.marketNote}</span>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-fodbot-gold text-fodbot-black font-body font-bold text-sm tracking-wide hover:bg-fodbot-gold-light transition-colors duration-200"
                  >
                    Request a Pilot
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="grid sm:grid-cols-1 gap-5"
                >
                  {/* Pain points */}
                  <div className={`rounded-lg border border-fodbot-dark-border p-6 ${i % 2 === 1 ? "bg-fodbot-dark-bg" : "bg-fodbot-dark-card"}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle size={15} className="text-amber-500" />
                      <span className="text-xs font-body font-semibold tracking-widest text-amber-500 uppercase">
                        Common Pain Points
                      </span>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {segment.pains.map((pain, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500/60 mt-2 shrink-0" />
                          <span className="text-sm font-body text-fodbot-silver">{pain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Value props */}
                  <div className={`rounded-lg border border-fodbot-gold/20 p-6 ${i % 2 === 1 ? "bg-fodbot-dark-bg" : "bg-fodbot-dark-card"}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <Check size={15} className="text-fodbot-gold" />
                      <span className="text-xs font-body font-semibold tracking-widest text-fodbot-gold uppercase">
                        How FODBOT Helps
                      </span>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {segment.value.map((val, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <Check size={14} className="text-fodbot-gold mt-0.5 shrink-0" />
                          <span className="text-sm font-body text-fodbot-silver">{val}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 text-center bg-fodbot-dark-bg">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            Not sure which model fits your facility?
          </h2>
          <p className="text-fodbot-silver font-body text-sm mb-8">
            Reach out and we&apos;ll discuss your specific airport type, crew structure, and inspection
            requirements before recommending a deployment approach.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-fodbot-gold text-fodbot-black font-body font-bold text-sm tracking-wide hover:bg-fodbot-gold-light transition-colors duration-200"
            >
              Request a Pilot
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded border border-fodbot-dark-border text-white font-body font-medium text-sm tracking-wide hover:border-fodbot-charcoal hover:bg-white/5 transition-colors duration-200"
            >
              View Pricing
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
