"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-fodbot-dark-bg/95 backdrop-blur-md border-b border-fodbot-dark-border shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="FODBOT Home">
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl font-bold tracking-[0.15em] text-white group-hover:text-fodbot-gold transition-colors duration-200">
                FODBOT
              </span>
              <span className="text-[9px] tracking-[0.2em] text-fodbot-silver uppercase font-body">
                Airfield Debris Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-body font-medium tracking-wide rounded transition-colors duration-200",
                  pathname === link.href
                    ? "text-fodbot-gold"
                    : "text-fodbot-silver hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2 text-sm font-body font-semibold rounded bg-fodbot-gold text-fodbot-black hover:bg-fodbot-gold-light transition-colors duration-200 tracking-wide"
            >
              Request a Pilot
            </Link>
            <button
              className="lg:hidden p-2 text-fodbot-silver hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-fodbot-dark-bg/98 backdrop-blur-md border-b border-fodbot-dark-border overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 text-sm font-body font-medium rounded transition-colors duration-200",
                    pathname === link.href
                      ? "text-fodbot-gold bg-fodbot-gold/5"
                      : "text-fodbot-silver hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 px-4 py-3 text-sm font-body font-semibold text-center rounded bg-fodbot-gold text-fodbot-black hover:bg-fodbot-gold-light transition-colors duration-200"
              >
                Request a Pilot
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
