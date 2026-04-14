import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — FODBOT",
};

export default function PrivacyPage() {
  return (
    <div className="bg-fodbot-dark-bg min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-white mb-3">Privacy Policy</h1>
        <p className="text-fodbot-silver font-body text-sm mb-8">Last updated: 2026</p>
        <div className="bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg p-8">
          <p className="font-body text-fodbot-silver text-sm leading-relaxed">
            This Privacy Policy is a placeholder. FODBOT collects contact information submitted via our
            contact form for the purpose of responding to pilot program inquiries and business development
            outreach. We do not sell, share, or broker contact information with third parties. Full privacy
            policy will be published prior to commercial launch.
          </p>
        </div>
      </div>
    </div>
  );
}
