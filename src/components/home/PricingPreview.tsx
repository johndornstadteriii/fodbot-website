"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { pricingPlans } from "@/data/content";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function PricingPreview() {
  return (
    <section className="bg-fodbot-dark-card border-y border-fodbot-dark-border py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <SectionLabel className="justify-center">Deployment Models</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight max-w-2xl mx-auto">
            Pricing built for operational budgets.
          </h2>
          <p className="mt-4 text-fodbot-silver font-body max-w-xl mx-auto">
            No enterprise six-figure commitment required. Choose the model that fits your budget cycle —
            subscribe, lease, or own outright.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-lg border p-7 flex flex-col gap-6 ${
                plan.highlight
                  ? "bg-fodbot-dark-bg border-fodbot-gold/40 shadow-gold"
                  : "bg-fodbot-dark-bg border-fodbot-dark-border"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-fodbot-gold text-fodbot-black text-xs font-body font-bold px-3 py-1 rounded tracking-wide">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div>
                <p className="text-xs font-body font-semibold tracking-widest text-fodbot-gold uppercase mb-3">
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-2">
                  <span className="font-display text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-fodbot-silver font-body text-sm mb-1">/{plan.per.replace("per ", "")}</span>
                </div>
                <p className="text-xs font-body text-fodbot-gold/80 italic">{plan.bestFor}</p>
              </div>

              <p className="text-sm font-body text-fodbot-silver leading-relaxed">{plan.description}</p>

              <ul className="flex flex-col gap-2.5">
                {plan.includes.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check size={14} className="text-fodbot-gold mt-0.5 shrink-0" />
                    <span className="text-xs font-body text-fodbot-silver">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded text-sm font-body font-semibold tracking-wide transition-colors duration-200 ${
                  plan.highlight
                    ? "bg-fodbot-gold text-fodbot-black hover:bg-fodbot-gold-light"
                    : "border border-fodbot-dark-border text-white hover:border-fodbot-charcoal hover:bg-white/5"
                }`}
              >
                {plan.cta}
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-fodbot-charcoal font-body mt-8">
          All pricing is indicative. Final quotes depend on facility size and configuration. Lease-to-own
          options available on annual plans.
        </p>

        <div className="text-center mt-6">
          <Link
            href="/pricing"
            className="text-sm font-body text-fodbot-gold hover:text-fodbot-gold-light transition-colors inline-flex items-center gap-1"
          >
            See full pricing and deployment details
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
