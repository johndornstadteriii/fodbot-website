"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle, Users, FileText, Award } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const trustPoints = [
  {
    icon: Shield,
    title: "Pursuing FAA/ICAO-Aligned Safety Pathway",
    description:
      "FODBOT is designed in accordance with airfield operational compatibility principles. Our safety certification pathway is active and will be communicated transparently as it advances.",
  },
  {
    icon: Users,
    title: "Supports Crews. Doesn't Replace Them.",
    description:
      "FODBOT handles the autonomous sweep-and-log cycle. Your crew maintains oversight and continues performing inspections that require human judgment. We augment, not substitute.",
  },
  {
    icon: CheckCircle,
    title: "Pilot-First Validation",
    description:
      "Every FODBOT deployment begins with a structured 30-day pilot. You evaluate performance against five measurable scorecard metrics before making any long-term commitment.",
  },
  {
    icon: FileText,
    title: "Audit-Ready Documentation",
    description:
      "Every run generates a geo-referenced, timestamped inspection log compatible with FAA SMS documentation requirements and general airfield record-keeping standards.",
  },
  {
    icon: Award,
    title: "Designed for Operational Compatibility",
    description:
      "FODBOT integrates ADS-B and airfield radio scanning to operate safely around aircraft. Operational windows and hold parameters are coordinated with your ops team.",
  },
];

export default function SafetyTrustSection() {
  return (
    <section className="bg-fodbot-dark-bg py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <SectionLabel>Safety & Trust</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight max-w-2xl">
            Safety-first isn&apos;t a tagline. It&apos;s the design spec.
          </h2>
          <p className="mt-4 text-fodbot-silver font-body max-w-xl text-sm">
            Deploying autonomous equipment on active airfields requires a rigorous approach to operational safety.
            Here&apos;s how FODBOT earns its place on the runway.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg p-6 hover:border-fodbot-charcoal/60 transition-colors duration-300 ${
                  i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="w-10 h-10 rounded bg-fodbot-gold/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-fodbot-gold" />
                </div>
                <h3 className="font-body font-semibold text-white text-sm mb-2 leading-snug">
                  {point.title}
                </h3>
                <p className="font-body text-xs text-fodbot-silver leading-relaxed">{point.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
