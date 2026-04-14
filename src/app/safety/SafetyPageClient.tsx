"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Radio, Navigation, Users, FileText, ShieldCheck, AlertTriangle } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const safetyFeatures = [
  {
    icon: Radio,
    title: "ADS-B Traffic Monitoring",
    description:
      "FODBOT continuously monitors ADS-B broadcasts to detect aircraft operating in or approaching the airfield exclusion zone. When an aircraft is detected within the configured boundary, FODBOT holds position or initiates a return-to-base sequence.",
  },
  {
    icon: Radio,
    title: "VHF Airfield Radio Scanning",
    description:
      "In addition to ADS-B, FODBOT scans designated airfield communication frequencies to detect approach and departure communications, providing an additional aircraft-awareness layer for aircraft that may not be ADS-B equipped.",
  },
  {
    icon: Navigation,
    title: "Configurable Exclusion Zones",
    description:
      "Prior to deployment, FODBOT's operational boundaries are geo-fenced to your runway and taxiway dimensions via RTK-GPS. The system will not operate outside of these boundaries without operator override.",
  },
  {
    icon: Users,
    title: "Human Override at All Times",
    description:
      "FODBOT operates autonomously but is never beyond human control. A full stop command is available to any operator via the control interface. Automatic emergency hold is triggered on ADS-B detection or communication anomalies.",
  },
  {
    icon: FileText,
    title: "Operational Window Coordination",
    description:
      "FODBOT operational schedules are coordinated with your operations team before deployment. Typical windows are during low-traffic periods or when coordination with tower/CTAF permits safe operation.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Certification Pathway",
    description:
      "FODBOT is currently pursuing FAA and ICAO-aligned certification pathways for autonomous airfield ground vehicles. Our engineering documentation and safety case are being developed in accordance with applicable guidance. Certification status will be communicated transparently.",
  },
];

export default function SafetyPageClient() {
  return (
    <div className="bg-fodbot-dark-bg min-h-screen pt-20">
      {/* Header */}
      <section className="relative overflow-hidden py-20 border-b border-fodbot-dark-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-100" style={{ backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0 bg-radial-gold" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SectionLabel>Safety & Compliance</SectionLabel>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
              Safety-first isn&apos;t a marketing position. It&apos;s the engineering requirement.
            </h1>
            <p className="text-fodbot-silver font-body text-lg max-w-2xl leading-relaxed">
              Autonomous equipment on an active airfield must meet a higher standard than anywhere else.
              Here is how FODBOT is designed to meet it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important disclaimer */}
      <section className="py-8 border-b border-fodbot-dark-border bg-amber-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <AlertTriangle size={18} className="text-amber-500 mt-0.5 shrink-0" />
            <p className="text-sm font-body text-amber-200/80 leading-relaxed">
              <strong className="text-amber-200">Important:</strong> FODBOT is not currently FAA certified for
              autonomous operation on active airfields. All pilot deployments are conducted under coordinated
              operational protocols with the airport&apos;s operations team. FODBOT is pursuing FAA/ICAO-aligned
              safety certification pathways. This information will be updated as that process advances.
            </p>
          </div>
        </div>
      </section>

      {/* Safety features */}
      <section className="py-20 border-b border-fodbot-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <SectionLabel>Safety Architecture</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-white max-w-2xl">
              Multiple redundant safety layers in every operation.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {safetyFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg p-6 hover:border-fodbot-charcoal/60 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded bg-fodbot-gold/10 flex items-center justify-center mb-4">
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

      {/* Crew compatibility */}
      <section className="py-20 border-b border-fodbot-dark-border bg-fodbot-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel>Crew Compatibility</SectionLabel>
              <h2 className="font-display text-3xl font-bold text-white mb-5">
                Designed to work alongside crews — not around them.
              </h2>
              <p className="text-fodbot-silver font-body leading-relaxed mb-4">
                FODBOT does not replace required human inspections. Regulations require human FOD inspections,
                and FODBOT is not positioned as a substitute for those obligations.
              </p>
              <p className="text-fodbot-silver font-body leading-relaxed mb-4">
                What FODBOT does is handle the continuous autonomous sweep cycle between required inspections —
                reducing the frequency of missed debris accumulation, improving the documented record between
                human inspection events, and freeing crew time for higher-value work.
              </p>
              <p className="text-fodbot-silver font-body leading-relaxed">
                All FODBOT operational schedules are designed around your crew&apos;s existing workflow. No
                runway closures are required for FODBOT operation. No new safety procedures are needed
                beyond the coordination protocol established during onboarding.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-fodbot-dark-bg border border-fodbot-gold/20 rounded-lg p-7"
            >
              <p className="text-xs font-body font-semibold tracking-widest text-fodbot-gold uppercase mb-5">
                FODBOT&apos;s Safety Commitments
              </p>
              {[
                "We do not claim FAA certification we have not received.",
                "We do not deploy without coordinating with your ops team first.",
                "We do not position FODBOT as a replacement for required human inspections.",
                "We do not understate the current stage of our certification pathway.",
                "We will not pressure airports into deployments until we are confident in the safety case.",
              ].map((commitment, i) => (
                <div key={i} className="flex items-start gap-3 py-3 border-b border-fodbot-dark-border last:border-0">
                  <ShieldCheck size={14} className="text-fodbot-gold mt-0.5 shrink-0" />
                  <span className="text-sm font-body text-white">{commitment}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-20 border-b border-fodbot-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>SMS Documentation</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-white max-w-2xl mb-5">
              Inspection logs designed for your SMS program.
            </h2>
            <p className="text-fodbot-silver font-body max-w-2xl leading-relaxed">
              Every FODBOT inspection run produces a geo-referenced, timestamped log documenting coverage area,
              detected items, classification results, and removal actions. These logs are structured to support
              FAA Safety Management System (SMS) documentation requirements and general airfield record-keeping
              standards. Logs are accessible via the inspection dashboard and exportable for your records system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-fodbot-dark-card border-t border-fodbot-dark-border">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-white mb-4">Questions about our safety approach?</h2>
          <p className="text-fodbot-silver font-body text-sm mb-8">
            We are happy to walk through our operational safety protocols, discuss certification status, or
            answer any technical questions about how FODBOT operates on active airfields.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-fodbot-gold text-fodbot-black font-body font-bold text-sm tracking-wide hover:bg-fodbot-gold-light transition-colors duration-200"
          >
            Talk to the Team
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
