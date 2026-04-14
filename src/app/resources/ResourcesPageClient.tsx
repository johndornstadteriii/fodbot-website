"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, Download, Clock, Tag } from "lucide-react";
import { caseStudies, downloadables, faqs } from "@/data/content";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function ResourcesPageClient() {
  return (
    <div className="bg-fodbot-dark-bg min-h-screen pt-20">
      {/* Header */}
      <section className="relative overflow-hidden py-20 border-b border-fodbot-dark-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-100" style={{ backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0 bg-radial-gold" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SectionLabel>Resources</SectionLabel>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
              Research, results, and answers.
            </h1>
            <p className="text-fodbot-silver font-body text-lg max-w-2xl leading-relaxed">
              Supporting documentation, pilot program findings, and answers to common questions from airport
              operators evaluating autonomous FOD management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 border-b border-fodbot-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <SectionLabel>Case Studies</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-white">Evidence and validation</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg p-6 flex flex-col gap-4 hover:border-fodbot-charcoal/60 transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <FileText size={18} className="text-fodbot-gold shrink-0 mt-0.5" />
                  {study.status === "coming-soon" ? (
                    <Badge variant="silver">Coming Soon</Badge>
                  ) : (
                    <Badge variant="green">Available</Badge>
                  )}
                </div>
                <div>
                  <h3 className="font-body font-semibold text-white text-sm mb-1 leading-snug">{study.title}</h3>
                  <p className="text-xs text-fodbot-silver/70 font-body mb-3">{study.airport}</p>
                  <p className="text-xs font-body text-fodbot-silver leading-relaxed">{study.summary}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {study.tags.map((tag, j) => (
                    <Badge key={j} variant="dark">{tag}</Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 border-b border-fodbot-dark-border bg-fodbot-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <SectionLabel>Downloads</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-white">Supporting materials</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {downloadables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-fodbot-dark-bg border border-fodbot-dark-border rounded-lg p-6 flex flex-col gap-4"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-body font-bold text-fodbot-silver border border-fodbot-dark-border rounded px-2 py-0.5">
                    {item.fileType}
                  </span>
                  {!item.available && <Badge variant="silver">Coming Soon</Badge>}
                </div>
                <div>
                  <h3 className="font-body font-semibold text-white text-sm mb-2">{item.title}</h3>
                  <p className="text-xs font-body text-fodbot-silver leading-relaxed">{item.description}</p>
                </div>
                <a
                  href={item.available ? item.href : undefined}
                  className={`mt-auto inline-flex items-center gap-2 text-sm font-body font-medium transition-colors duration-200 ${
                    item.available
                      ? "text-fodbot-gold hover:text-fodbot-gold-light cursor-pointer"
                      : "text-fodbot-charcoal cursor-not-allowed"
                  }`}
                  aria-disabled={!item.available}
                >
                  <Download size={14} />
                  {item.available ? "Download" : "Coming Soon"}
                </a>
              </motion.div>
            ))}
          </div>
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
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-white">Frequently asked questions</h2>
            <p className="mt-3 text-fodbot-silver font-body text-sm">
              Questions from airport operators evaluating FODBOT for the first time.
            </p>
          </motion.div>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-fodbot-dark-card border-t border-fodbot-dark-border">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-fodbot-silver font-body text-sm mb-8">
            Reach out directly. We&apos;re happy to discuss your facility&apos;s situation, inspection
            schedule, and whether FODBOT is the right fit before any commitment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-fodbot-gold text-fodbot-black font-body font-bold text-sm tracking-wide hover:bg-fodbot-gold-light transition-colors duration-200"
          >
            Contact the Team
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
