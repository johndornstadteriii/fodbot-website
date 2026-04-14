import Link from "next/link";
import { footerLinks, siteConfig } from "@/data/content";
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-fodbot-dark-bg border-t border-fodbot-dark-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div>
              <p className="font-display text-xl font-bold tracking-[0.15em] text-white">FODBOT</p>
              <p className="text-[9px] tracking-[0.2em] text-fodbot-silver uppercase font-body mt-0.5">
                Airfield Debris Solutions
              </p>
            </div>
            <p className="text-sm text-fodbot-silver font-body leading-relaxed max-w-sm">
              Autonomous FOD detection and removal designed for GA and non-hub airports. Active removal.
              Documented results. Pilot-first deployment.
            </p>
            <div className="flex flex-col gap-1 mt-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-fodbot-silver hover:text-fodbot-gold transition-colors font-body"
              >
                <Mail size={14} />
                {siteConfig.email}
              </a>
              <p className="flex items-center gap-2 text-sm text-fodbot-silver font-body">
                {siteConfig.phone}
              </p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <a
                href={siteConfig.socialLinks.linkedin}
                className="p-2 rounded text-fodbot-silver hover:text-fodbot-gold hover:bg-fodbot-dark-card transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={siteConfig.socialLinks.twitter}
                className="p-2 rounded text-fodbot-silver hover:text-fodbot-gold hover:bg-fodbot-dark-card transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-body font-semibold tracking-widest text-fodbot-silver uppercase">
              Product
            </p>
            <ul className="flex flex-col gap-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fodbot-silver hover:text-white transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-body font-semibold tracking-widest text-fodbot-silver uppercase">
              Solutions
            </p>
            <ul className="flex flex-col gap-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fodbot-silver hover:text-white transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-body font-semibold tracking-widest text-fodbot-silver uppercase">
              Company
            </p>
            <ul className="flex flex-col gap-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fodbot-silver hover:text-white transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-fodbot-dark-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-fodbot-charcoal font-body">
            © {year} FODBOT Airfield Debris Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-fodbot-charcoal hover:text-fodbot-silver transition-colors font-body"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-fodbot-charcoal font-body">
            Pursuing FAA/ICAO-aligned safety pathway
          </p>
        </div>
      </div>
    </footer>
  );
}
