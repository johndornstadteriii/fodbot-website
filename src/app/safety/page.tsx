import type { Metadata } from "next";
import SafetyPageClient from "./SafetyPageClient";

export const metadata: Metadata = {
  title: "Safety & Compliance — FODBOT",
  description:
    "FODBOT's approach to safe autonomous operation on active airfields — ADS-B integration, operational protocols, safety certification pathway, and crew compatibility design.",
};

export default function SafetyPage() {
  return <SafetyPageClient />;
}
