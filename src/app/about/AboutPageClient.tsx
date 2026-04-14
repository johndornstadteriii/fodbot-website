"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Eye, Wrench } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const values = [
  {
    icon: Target,
    title: "Precision over hype.",
    description:
      "We build documentation of what FODBOT can do from real operational data, not marketing projections. Pilot-first deployment is how we prove value — not how we sell before we've earned it.",
  },
  {
    icon: Eye,
    title: "Transparency about where we are.",
    description:
      "FODBOT is an early-stage product pursuing FAA/ICAO-aligned safety certification. We are direct about this. We do not claim certifications we haven't received or partners we don't have.",
  },
  {
    icon: Wrench,
    title: "Built for the operator, not the press release.",
    description:
      "Our design decisions prioritize ease of use for airport maintenance staff over flashy capabilities that look good in product videos. If it doesn't work on a real runway, it doesn't ship.",
  },
];

export default function AboutPageClient() {
  return (
    <div className="bg-fodbot-dark-bg min-h-screen pt-20">
      {/* Header */}
      <section className="relative overflow-hidden py-20 border-b border-fodbot-dark-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-100" style={{ backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0 bg-radial-gold" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SectionLabel>About FODBOT</SectionLabel>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
              Airfield safety infrastructure that actually fits the airport.
            </h1>
            <p className="text-fodbot-silver font-body text-lg max-w-2xl leading-relaxed">
              FODBOT was built on a simple observation: the airports that need FOD removal most
              are the ones who can least afford the existing solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 border-b border-fodbot-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel>Our Mission</SectionLabel>
              <h2 className="font-display text-3xl font-bold text-white mb-5">
                Make active FOD removal accessible to every airport that needs it.
              </h2>
              <p className="text-fodbot-silver font-body leading-relaxed mb-4">
                The U.S. has over 5,000 public-use airports. The majority of those are general aviation facilities
                with lean crews, limited budgets, and real safety obligations. They conduct FOD inspections
                manually — walk-downs, drive-throughs, visual checks. It&apos;s labor-intensive, inconsistent,
                and leaves documentation gaps that create audit and liability exposure.
              </p>
              <p className="text-fodbot-silver font-body leading-relaxed mb-4">
                Enterprise FOD detection systems exist — but they&apos;re designed and priced for major commercial
                hubs. FODBOT is built for the other 2,500+ facilities: GA airports, municipal airports, private
                aviation facilities, and small regional hubs that don&apos;t have the runway infrastructure
                budget of O&apos;Hare.
              </p>
              <p className="text-fodbot-silver font-body leading-relaxed">
                Our positioning statement: the only autonomous FOD detection and removal solution that delivers
                continuous, cost-effective runway safety with minimal labor input — because it combines
                autonomous operation, affordable deployment models, and aviation-compliant safety integration
                tailored to smaller facilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg p-7"
            >
              <p className="text-xs font-body font-semibold tracking-widest text-fodbot-gold uppercase mb-5">
                Positioning Statement
              </p>
              <blockquote className="text-white font-body text-lg leading-relaxed italic border-l-2 border-fodbot-gold pl-5">
                &ldquo;For small to mid-sized non-hub and general aviation airports, FODBOT is the only
                autonomous FOD detection and removal solution that delivers continuous, cost-effective runway
                safety with minimal labor input — because it combines autonomous operation, affordable
                deployment models, and aviation-compliant safety integration tailored to smaller facilities.&rdquo;
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-b border-fodbot-dark-border bg-fodbot-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <SectionLabel>How We Operate</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-white">What we believe.</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-fodbot-dark-bg border border-fodbot-dark-border rounded-lg p-6"
                >
                  <div className="w-10 h-10 rounded bg-fodbot-gold/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-fodbot-gold" />
                  </div>
                  <h3 className="font-body font-bold text-white mb-3">{val.title}</h3>
                  <p className="font-body text-sm text-fodbot-silver leading-relaxed">{val.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-20 border-b border-fodbot-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <SectionLabel>Team</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-white">The team behind FODBOT</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Team member placeholders — replace with real profiles */}
            {[
              { name: "Founder / CEO", bio: "Team bio coming soon." },
              { name: "Head of Engineering", bio: "Team bio coming soon." },
              { name: "Aviation Operations Lead", bio: "Team bio coming soon." },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg p-6"
              >
                <div className="w-14 h-14 rounded-full bg-fodbot-dark-border flex items-center justify-center mb-4">
                  {/* Replace with <Image> when photos are available */}
                  <span className="text-xs font-body text-fodbot-charcoal">Photo</span>
                </div>
                <p className="font-body font-bold text-white text-sm mb-1">{member.name}</p>
                <p className="font-body text-xs text-fodbot-silver">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-fodbot-dark-card border-t border-fodbot-dark-border">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-white mb-4">Interested in what we&apos;re building?</h2>
          <p className="text-fodbot-silver font-body text-sm mb-8">
            Reach out to discuss a pilot program, ask technical questions, or learn more about FODBOT&apos;s
            development roadmap.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-fodbot-gold text-fodbot-black font-body font-bold text-sm tracking-wide hover:bg-fodbot-gold-light transition-colors duration-200"
          >
            Get In Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
