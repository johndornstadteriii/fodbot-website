import type { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing & Deployment Models — FODBOT",
  description:
    "FODBOT offers three flexible deployment models: monthly subscription ($450/mo), annual lease ($4,500/yr), or one-time purchase ($15,000). Built for GA airport operational budgets.",
};

export default function PricingPage() {
  return <PricingPageClient />;
}
