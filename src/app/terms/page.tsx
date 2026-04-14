import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — FODBOT",
};

export default function TermsPage() {
  return (
    <div className="bg-fodbot-dark-bg min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-white mb-3">Terms of Use</h1>
        <p className="text-fodbot-silver font-body text-sm mb-8">Last updated: 2026</p>
        <div className="bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg p-8">
          <p className="font-body text-fodbot-silver text-sm leading-relaxed">
            Terms of Use placeholder. This website is operated by FODBOT Airfield Debris Solutions.
            Content on this site is provided for informational purposes only. Pricing, specifications,
            and capabilities are subject to change. Full terms of use will be published prior to
            commercial launch.
          </p>
        </div>
      </div>
    </div>
  );
}
