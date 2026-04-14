"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, Calendar, ClipboardList, BarChart2, HeadphonesIcon } from "lucide-react";
import { pilotProgram } from "@/data/content";
import { Accordion } from "@/components/ui/Accordion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const timeline = [
  { phase: "Week 0", title: "Site Assessment & Setup", description: "FODBOT team coordinates with your ops team, maps runway boundaries via RTK-GPS, installs base station, and runs calibration." },
  { phase: "Week 1", title: "Initial Deployment", description: "FODBOT begins operating on agreed schedule. Team monitors remotely, addresses any setup adjustments, and reviews first run logs with you." },
  { phase: "Weeks 2–3", title: "Full Operation", description: "FODBOT operates on full cycle schedule. Weekly check-ins review scorecard metrics, answer operational questions, and log any edge cases." },
  { phase: "Week 4", title: "Final Evaluation", description: "FODBOT completes final runs. Team compiles performance report across all five scorecard metrics." },
  { phase: "Post-Pilot", title: "Results Review", description: "FODBOT presents full pilot results. If results support deployment, we transition to your preferred acquisition model at your pace." },
];

export default function PilotPageClient() {
  return (
    <div className="bg-fodbot-dark-bg min-h-screen pt-20">
      {/* Header */}
      <section className="relative overflow-hidden py-20 border-b border-fodbot-dark-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-100" style={{ backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0 bg-radial-gold" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <SectionLabel>Pilot Program</SectionLabel>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
                {pilotProgram.headline}
              </h1>
              <p className="text-fodbot-silver font-body text-lg leading-relaxed mb-6">
                {pilotProgram.subheadline}
              </p>
              <p className="text-fodbot-silver font-body text-sm leading-relaxed mb-8">
                {pilotProgram.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-fodbot-gold text-fodbot-black font-body font-bold text-sm tracking-wide hover:bg-fodbot-gold-light transition-colors duration-200"
              >
                Apply for a Pilot
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Calendar, label: "30 days", sub: "pilot duration" },
                { icon: ClipboardList, label: "5 metrics", sub: "scored scorecard" },
                { icon: BarChart2, label: "Full report", sub: "at pilot close" },
                { icon: HeadphonesIcon, label: "Weekly", sub: "technical check-ins" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg p-5 text-center">
                    <Icon size={20} className="text-fodbot-gold mx-auto mb-3" />
                    <p className="font-display text-xl font-bold text-white">{item.label}</p>
                    <p className="text-xs text-fodbot-silver font-body mt-1">{item.sub}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 border-b border-fodbot-dark-border bg-fodbot-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel>What&apos;s Included</SectionLabel>
              <h2 className="font-display text-3xl font-bold text-white mb-6">What your airport receives during the pilot</h2>
              <ul className="flex flex-col gap-3">
                {pilotProgram.whatYouGet.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 bg-fodbot-dark-bg border border-fodbot-dark-border rounded-lg">
                    <Check size={15} className="text-fodbot-gold mt-0.5 shrink-0" />
                    <span className="font-body text-sm text-fodbot-silver">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <SectionLabel>Scorecard</SectionLabel>
              <h2 className="font-display text-3xl font-bold text-white mb-6">Five metrics define success</h2>
              <div className="flex flex-col gap-4">
                {pilotProgram.scorecardMetrics.map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-fodbot-dark-bg border border-fodbot-dark-border rounded-lg">
                    <div className="w-8 h-8 rounded border border-fodbot-gold/30 bg-fodbot-gold/5 flex items-center justify-center shrink-0">
                      <span className="font-display text-[11px] font-bold text-fodbot-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-white text-sm mb-1">{item.metric}</p>
                      <p className="font-body text-xs text-fodbot-silver leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 border-b border-fodbot-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <SectionLabel className="justify-center">Timeline</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-white max-w-2xl mx-auto">
              What to expect over 30 days
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {timeline.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg p-5"
              >
                <div className="w-16 shrink-0 text-center">
                  <span className="text-xs font-body font-semibold text-fodbot-gold tracking-wide">{phase.phase}</span>
                </div>
                <div className="border-l border-fodbot-gold/20 pl-5">
                  <p className="font-body font-semibold text-white text-sm mb-1">{phase.title}</p>
                  <p className="font-body text-xs text-fodbot-silver leading-relaxed">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* After pilot */}
      <section className="py-20 border-b border-fodbot-dark-border bg-fodbot-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>After the Pilot</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-white mb-5">What happens next</h2>
            <p className="text-fodbot-silver font-body leading-relaxed text-lg">{pilotProgram.afterPilot}</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-b border-fodbot-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <SectionLabel>Common Questions</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-white">Pilot Program FAQ</h2>
          </motion.div>
          <Accordion items={pilotProgram.faq} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-fodbot-dark-bg">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-white mb-4">Apply for a pilot at your facility</h2>
          <p className="text-fodbot-silver font-body text-sm mb-8">
            Fill out the contact form with your airport details and we&apos;ll reach out within one business day.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-fodbot-gold text-fodbot-black font-body font-bold text-sm tracking-wide hover:bg-fodbot-gold-light transition-colors duration-200"
          >
            Apply Now
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
