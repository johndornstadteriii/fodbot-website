"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, Layers, Radar, Navigation, Radio, FileText, Zap, Shield, Sliders } from "lucide-react";
import { features, operationalSteps } from "@/data/content";
import { SectionLabel } from "@/components/ui/SectionLabel";

const iconMap: Record<string, React.ElementType> = {
  Layers, Radar, Navigation, Radio, FileText, Zap, Shield, Sliders,
};

const sensorSpecs = [
  { label: "Sensor Suite", value: "360° LiDAR + Optical Array + Magnetic Detection" },
  { label: "Positioning", value: "RTK-GPS (centimeter accuracy)" },
  { label: "Aircraft Awareness", value: "ADS-B + VHF Airfield Radio Scanning" },
  { label: "Collection System", value: "Multi-modal: Sweep + Vacuum + Magnetic" },
  { label: "Operational Modes", value: "Autonomous / Semi-autonomous / Manual override" },
  { label: "Night Operation", value: "Supported (optical + LiDAR)" },
  { label: "Documentation", value: "Geo-referenced, timestamped inspection logs per run" },
  { label: "Base Station", value: "Autonomous return, charging, debris offload" },
];

export default function ProductPageClient() {
  return (
    <div className="bg-fodbot-dark-bg min-h-screen pt-20">
      {/* Page Header */}
      <section className="relative overflow-hidden py-20 border-b border-fodbot-dark-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-100" style={{ backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0 bg-radial-gold" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SectionLabel>The Product</SectionLabel>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
              Detect. Remove. Document. Repeat.
            </h1>
            <p className="text-fodbot-silver font-body text-lg max-w-2xl leading-relaxed">
              FODBOT is a compact autonomous runway operations platform that actively collects foreign object debris
              from runway and taxiway surfaces — not just flags its location.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is FOD */}
      <section className="py-20 border-b border-fodbot-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel>The Problem</SectionLabel>
              <h2 className="font-display text-3xl font-bold text-white mb-5">What is FOD — and why does active removal matter?</h2>
              <p className="text-fodbot-silver font-body leading-relaxed mb-4">
                Foreign Object Debris (FOD) refers to any object on an airfield that does not belong there —
                hardware, gravel, tire fragments, tool parts, wildlife material, and miscellaneous debris that
                accumulates on runway and taxiway surfaces.
              </p>
              <p className="text-fodbot-silver font-body leading-relaxed mb-4">
                FOD ingestion into aircraft engines is a leading cause of preventable aircraft damage worldwide.
                The FAA, ICAO, and aviation insurers all treat active FOD management as a safety requirement,
                not a preference.
              </p>
              <p className="text-fodbot-silver font-body leading-relaxed">
                Passive detection systems identify where debris is. FODBOT goes further — it physically collects
                and removes debris from the surface, completing the job rather than redirecting it back to a
                crew member.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg p-7"
            >
              <h3 className="font-body font-semibold text-white mb-5 text-sm tracking-wide">Common FOD Categories FODBOT Handles</h3>
              {[
                "Fasteners — nuts, bolts, screws, washers",
                "Aggregate and gravel (runway surface material)",
                "Tire fragments and rubber debris",
                "Small plastic and metal parts",
                "General surface contamination and debris",
                "Wildlife-related material (limited, configuration-dependent)",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2.5 border-b border-fodbot-dark-border last:border-0">
                  <Check size={14} className="text-fodbot-gold mt-0.5 shrink-0" />
                  <span className="text-sm font-body text-fodbot-silver">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operational Workflow */}
      <section className="py-20 border-b border-fodbot-dark-border bg-fodbot-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <SectionLabel className="justify-center">Operational Sequence</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-white max-w-2xl mx-auto">
              How a FODBOT inspection cycle works
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-fodbot-gold/40 via-fodbot-gold/20 to-transparent hidden lg:block" />

            <div className="flex flex-col gap-6 lg:pl-20">
              {operationalSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex gap-6 bg-fodbot-dark-bg border border-fodbot-dark-border rounded-lg p-6 hover:border-fodbot-charcoal/60 transition-colors duration-300"
                >
                  {/* Step number dot on timeline */}
                  <div className="absolute -left-[52px] top-6 w-8 h-8 rounded-full border-2 border-fodbot-gold/40 bg-fodbot-dark-bg flex items-center justify-center hidden lg:flex">
                    <span className="font-display text-[10px] font-bold text-fodbot-gold">{step.step}</span>
                  </div>

                  <div className="w-12 h-12 rounded bg-fodbot-gold/10 flex items-center justify-center shrink-0 lg:hidden">
                    <span className="font-display text-xs font-bold text-fodbot-gold">{step.step}</span>
                  </div>

                  <div>
                    <h3 className="font-body font-bold text-white text-lg mb-2">{step.title}</h3>
                    <p className="font-body text-sm text-fodbot-silver leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 border-b border-fodbot-dark-border" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <SectionLabel>System Capabilities</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-white max-w-2xl">
              Every system integrated for airfield operation.
            </h2>
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
                  <h3 className="font-body font-semibold text-white text-sm mb-2 leading-snug">{feature.title}</h3>
                  <p className="font-body text-xs text-fodbot-silver leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specs Table */}
      <section className="py-20 border-b border-fodbot-dark-border bg-fodbot-dark-card" id="specs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel>Technical Overview</SectionLabel>
              <h2 className="font-display text-3xl font-bold text-white mb-5">System Specifications</h2>
              <p className="text-fodbot-silver font-body text-sm leading-relaxed mb-3">
                Full technical specifications available in the product datasheet. Request it via the contact
                form or during your pilot program onboarding.
              </p>
              <p className="text-xs text-fodbot-charcoal font-body">
                Specifications subject to change as development progresses. Pilot program units may vary.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-fodbot-dark-bg border border-fodbot-dark-border rounded-lg overflow-hidden"
            >
              {sensorSpecs.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 px-6 py-4 border-b border-fodbot-dark-border last:border-0 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-xs font-body text-fodbot-silver w-36 shrink-0">{spec.label}</span>
                  <span className="text-xs font-body text-white">{spec.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-white mb-4">Ready to see it on your runway?</h2>
          <p className="text-fodbot-silver font-body text-sm mb-8">
            The 30-day pilot is the lowest-risk way to evaluate FODBOT at your facility.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-fodbot-gold text-fodbot-black font-body font-bold text-sm tracking-wide hover:bg-fodbot-gold-light transition-colors duration-200"
          >
            Request a Pilot
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
