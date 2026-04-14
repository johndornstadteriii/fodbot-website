"use client";

import { motion } from "framer-motion";
import { Users, Eye, DollarSign, AlertTriangle } from "lucide-react";
import { problems } from "@/data/content";
import { SectionLabel } from "@/components/ui/SectionLabel";

const iconMap: Record<string, React.ElementType> = {
  Users,
  Eye,
  DollarSign,
  AlertTriangle,
};

export default function ProblemSection() {
  return (
    <section className="bg-fodbot-dark-bg py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel>The Problem</SectionLabel>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                Manual inspections can&apos;t keep pace with the runway.
              </h2>
              <p className="text-fodbot-silver font-body leading-relaxed mb-6">
                FOD remains one of aviation&apos;s most persistent and preventable safety threats. For small and
                mid-sized airports, the challenge isn&apos;t awareness — it&apos;s operational reality. There
                aren&apos;t enough hours or crew members to run consistent, documented inspections at the frequency
                the risk demands.
              </p>
              <p className="text-fodbot-silver font-body leading-relaxed">
                Enterprise solutions exist for major hubs. For the 2,500+ GA and non-hub airports that form the
                backbone of U.S. aviation infrastructure, there has been no affordable, active-removal option.
                Until now.
              </p>
            </motion.div>

            {/* Quote from survey */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 border-l-2 border-fodbot-gold pl-5"
            >
              <p className="text-fodbot-silver font-body italic text-sm leading-relaxed">
                &ldquo;Consistent autonomous FOD removal that works at night with minimal operator
                interaction. Does not cause damage to lighting.&rdquo;
              </p>
              <p className="text-xs text-fodbot-charcoal font-body mt-2">
                — Airport Manager, FODBOT Airport Survey 2026
              </p>
            </motion.div>
          </div>

          {/* Right: problem cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {problems.map((problem, i) => {
              const Icon = iconMap[problem.icon] || AlertTriangle;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg p-5 hover:border-fodbot-charcoal/60 transition-colors duration-300"
                >
                  <div className="w-9 h-9 rounded bg-fodbot-gold/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-fodbot-gold" />
                  </div>
                  <h3 className="font-body font-semibold text-white text-sm mb-2">{problem.title}</h3>
                  <p className="font-body text-xs text-fodbot-silver leading-relaxed">{problem.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
