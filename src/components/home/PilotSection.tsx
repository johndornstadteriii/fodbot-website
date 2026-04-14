"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { pilotProgram } from "@/data/content";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function PilotSection() {
  return (
    <section className="bg-fodbot-dark-bg py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>Pilot Program</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              {pilotProgram.headline}
            </h2>
            <p className="text-fodbot-silver font-body leading-relaxed mb-6">
              {pilotProgram.subheadline}
            </p>
            <p className="text-fodbot-silver font-body text-sm leading-relaxed mb-8">
              {pilotProgram.description}
            </p>

            <h3 className="font-body font-semibold text-white mb-4 text-sm tracking-wide uppercase">
              What You Get
            </h3>
            <ul className="flex flex-col gap-3 mb-8">
              {pilotProgram.whatYouGet.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={15} className="text-fodbot-gold mt-0.5 shrink-0" />
                  <span className="font-body text-sm text-fodbot-silver">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/pilot"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-fodbot-gold text-fodbot-black font-body font-bold text-sm tracking-wide hover:bg-fodbot-gold-light transition-colors duration-200"
            >
              Apply for a Pilot Program
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right: scorecard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg overflow-hidden">
              <div className="border-b border-fodbot-dark-border px-6 py-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-fodbot-gold/20" />
                <span className="text-xs font-body font-semibold tracking-widest text-fodbot-gold uppercase">
                  Pilot Scorecard Metrics
                </span>
                <div className="h-px flex-1 bg-fodbot-gold/20" />
              </div>
              <div className="divide-y divide-fodbot-dark-border">
                {pilotProgram.scorecardMetrics.map((item, i) => (
                  <div key={i} className="px-6 py-5 hover:bg-white/[0.02] transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded border border-fodbot-gold/20 bg-fodbot-gold/5 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[10px] font-display font-bold text-fodbot-gold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div>
                        <p className="font-body font-semibold text-white text-sm mb-1">{item.metric}</p>
                        <p className="font-body text-xs text-fodbot-silver leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
