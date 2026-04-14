"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function FinalCTA() {
  return (
    <section className="relative bg-fodbot-dark-card border-t border-fodbot-dark-border overflow-hidden py-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-gold opacity-60 pointer-events-none" />
      <div
        className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"
        style={{ backgroundSize: "60px 60px" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-fodbot-gold" />
            <span className="text-xs font-body font-semibold tracking-[0.25em] text-fodbot-gold uppercase">
              Ready to Start
            </span>
            <div className="h-px w-8 bg-fodbot-gold" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Put FODBOT on your runway for 30 days.
          </h2>

          <p className="text-fodbot-silver font-body leading-relaxed mb-10 max-w-xl mx-auto">
            The pilot program is the lowest-risk way to evaluate autonomous FOD removal at your facility.
            We handle setup. You run the scorecard. No long-term commitment required.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-fodbot-gold text-fodbot-black font-body font-bold text-sm tracking-wide hover:bg-fodbot-gold-light transition-colors duration-200 shadow-gold"
            >
              Request a Pilot
              <ArrowRight size={16} />
            </Link>

            <Link
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded border border-fodbot-dark-border text-white font-body font-medium text-sm tracking-wide hover:border-fodbot-charcoal hover:bg-white/5 transition-colors duration-200"
            >
              <MessageSquare size={15} />
              Talk to the Team
            </Link>

            <Link
              href={siteConfig.downloadPilotOverview}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded border border-fodbot-dark-border text-fodbot-silver font-body font-medium text-sm tracking-wide hover:border-fodbot-charcoal hover:text-white hover:bg-white/5 transition-colors duration-200"
            >
              <Download size={15} />
              Download Pilot Overview
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
