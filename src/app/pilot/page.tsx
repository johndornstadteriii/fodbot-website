import type { Metadata } from "next";
import PilotPageClient from "./PilotPageClient";

export const metadata: Metadata = {
  title: "30-Day Pilot Program — FODBOT",
  description:
    "FODBOT's pilot-first deployment model. Deploy at your facility for 30 days. We handle setup. You run the scorecard. No long-term commitment required to participate.",
};

export default function PilotPage() {
  return <PilotPageClient />;
}
