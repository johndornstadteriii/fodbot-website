"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Check } from "lucide-react";
import { hero } from "@/data/content";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-fodbot-dark-bg">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid-size opacity-100"
        style={{ backgroundSize: "60px 60px" }}
      />

      {/* Gold radial glow top-center */}
      <div className="absolute inset-0 bg-radial-gold" />

      {/* Subtle scan line animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fodbot-gold/10 to-transparent"
          initial={{ y: "-100%" }}
          animate={{ y: "100vh" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Right side decorative element */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none hidden xl:block">
        <div className="absolute inset-0 bg-gradient-to-l from-fodbot-dark-bg via-transparent to-transparent z-10" />
        {/* Robot placeholder with runway-inspired overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-end pr-16 pt-20">
            {/* Placeholder silhouette / hero image area */}
            <div className="relative w-[500px] h-[340px] rounded-lg overflow-hidden border border-fodbot-dark-border bg-fodbot-dark-card/30">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-30">
                <div className="w-16 h-16 border-2 border-fodbot-gold/40 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-fodbot-gold/60 rounded-full" />
                </div>
                <span className="text-xs font-body text-fodbot-silver tracking-widest uppercase">
                  Product Render
                </span>
              </div>
              {/* Replace the above with: */}
              {/* <Image src="/images/fodbot-hero.png" alt="FODBOT Autonomous FOD Removal Robot" fill className="object-contain" /> */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-fodbot-gold/20" />
              <div className="absolute top-0 left-0 right-0 h-px bg-fodbot-gold/20" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl xl:max-w-3xl">
          {/* Pre-headline label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-fodbot-gold" />
            <span className="text-xs font-body font-semibold tracking-[0.25em] text-fodbot-gold uppercase">
              Autonomous FOD Removal
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            {hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-fodbot-silver font-body leading-relaxed mb-10 max-w-xl"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <Link
              href={hero.primaryCtaHref}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-fodbot-gold text-fodbot-black font-body font-bold text-sm tracking-wide hover:bg-fodbot-gold-light transition-colors duration-200 shadow-gold"
            >
              {hero.primaryCta}
              <ArrowRight size={16} />
            </Link>
            <Link
              href={hero.secondaryCtaHref}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded border border-fodbot-dark-border text-white font-body font-medium text-sm tracking-wide hover:border-fodbot-charcoal hover:bg-white/5 transition-colors duration-200"
            >
              {hero.secondaryCta}
              <ChevronRight size={16} />
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {hero.trustPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check size={13} className="text-fodbot-gold shrink-0" />
                <span className="text-xs font-body text-fodbot-silver">{point}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom runway fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-fodbot-dark-bg to-transparent pointer-events-none" />
    </section>
  );
}
