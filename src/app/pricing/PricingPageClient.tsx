"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { pricingPlans } from "@/data/content";
import { SectionLabel } from "@/components/ui/SectionLabel";

const deploymentDetails = [
  {
    title: "Setup & Onboarding",
    description:
      "All models include setup support. FODBOT team coordinates site assessment, GPS boundary mapping, base station installation, and operator orientation before the unit goes live.",
  },
  {
    title: "Firmware Updates",
    description:
      "Subscription and lease models include ongoing firmware updates throughout the coverage period. One-time purchase includes the first year of updates.",
  },
  {
    title: "Remote Monitoring & Support",
    description:
      "Subscription and lease models include access to remote monitoring and technical support. Response SLA depends on the plan tier.",
  },
  {
    title: "Lease-to-Own Pathway",
    description:
      "Annual lease clients can apply accumulated lease payments toward a one-time purchase. This pathway is available on request and structured case by case.",
  },
  {
    title: "Hardware Warranty",
    description:
      "One-time purchase includes a hardware warranty period. Lease and subscription models cover hardware under the service agreement for the duration of the term.",
  },
  {
    title: "Extended Support Plans",
    description:
      "Optional extended support and on-site service packages are available for purchase clients. Pricing varies by facility location and scope.",
  },
];

export default function PricingPageClient() {
  return (
    <div className="bg-fodbot-dark-bg min-h-screen pt-20">
      {/* Header */}
      <section className="relative overflow-hidden py-20 border-b border-fodbot-dark-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-100" style={{ backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0 bg-radial-gold" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SectionLabel>Deployment Models</SectionLabel>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
              Pricing built for how airports actually budget.
            </h1>
            <p className="text-fodbot-silver font-body text-lg max-w-2xl leading-relaxed">
              FODBOT is structured as an operational expense — not a major capital project. Choose the model
              that fits your budget cycle and procurement process. No sales pressure, no hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20 border-b border-fodbot-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-lg border p-8 flex flex-col gap-6 ${
                  plan.highlight
                    ? "bg-fodbot-dark-card border-fodbot-gold/40 shadow-gold"
                    : "bg-fodbot-dark-card border-fodbot-dark-border"
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
                    <span className="font-display text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-fodbot-silver font-body text-sm mb-2">/{plan.per.replace("per ", "")}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-fodbot-gold/5 border border-fodbot-gold/15 rounded px-2.5 py-1 mt-2">
                    <span className="text-[11px] font-body text-fodbot-gold">Best for: {plan.bestFor}</span>
                  </div>
                </div>

                <p className="text-sm font-body text-fodbot-silver leading-relaxed">{plan.description}</p>

                <div>
                  <p className="text-xs font-body font-semibold text-white mb-3 tracking-wide uppercase">Includes</p>
                  <ul className="flex flex-col gap-2.5">
                    {plan.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <Check size={14} className="text-fodbot-gold mt-0.5 shrink-0" />
                        <span className="text-xs font-body text-fodbot-silver">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded text-sm font-body font-semibold tracking-wide transition-colors duration-200 ${
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
            All pricing is indicative for planning purposes. Final quotes depend on facility configuration
            and deployment scope. Contact us to discuss your specific situation.
          </p>
        </div>
      </section>

      {/* Why operational framing matters */}
      <section className="py-20 border-b border-fodbot-dark-border bg-fodbot-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel>Budget Strategy</SectionLabel>
              <h2 className="font-display text-3xl font-bold text-white mb-5">
                Why operational spend framing matters for airports.
              </h2>
              <p className="text-fodbot-silver font-body leading-relaxed mb-4">
                Most GA and municipal airports face capital budget constraints that make large equipment purchases
                difficult to justify or approve. FODBOT&apos;s subscription and lease models are intentionally
                structured as operating expenses — recurring line items that fit how airport budgets are
                typically organized.
              </p>
              <p className="text-fodbot-silver font-body leading-relaxed mb-4">
                At $450/month, FODBOT competes directly with what many airports already spend on crew time for
                routine FOD inspections — except it runs continuously, documents every cycle, and reduces the
                labor burden on existing staff.
              </p>
              <p className="text-fodbot-silver font-body leading-relaxed">
                For airports with access to equipment grant funding or capital improvement budgets, the one-time
                purchase offers full ownership with a lease-to-own credit pathway available to prior lessees.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col gap-4"
            >
              {deploymentDetails.map((item, i) => (
                <div
                  key={i}
                  className="bg-fodbot-dark-bg border border-fodbot-dark-border rounded-lg p-5 hover:border-fodbot-charcoal/60 transition-colors duration-300"
                >
                  <p className="font-body font-semibold text-white text-sm mb-1.5">{item.title}</p>
                  <p className="font-body text-xs text-fodbot-silver leading-relaxed">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-white mb-4">Start with the pilot. Then decide.</h2>
          <p className="text-fodbot-silver font-body text-sm mb-8">
            All deployment models are available after a successful 30-day pilot. The pilot itself has no
            long-term commitment attached.
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
