import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsStrip from "@/components/home/StatsStrip";
import ProblemSection from "@/components/home/ProblemSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import AudienceSection from "@/components/home/AudienceSection";
import VideoSection from "@/components/home/VideoSection";
import PilotSection from "@/components/home/PilotSection";
import PricingPreview from "@/components/home/PricingPreview";
import ROICalculator from "@/components/home/ROICalculator";
import SafetyTrustSection from "@/components/home/SafetyTrustSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "FODBOT — Active FOD Removal for GA & Non-Hub Airports",
  description:
    "FODBOT is the only autonomous FOD detection and removal system built for GA and non-hub airports. Active debris removal, documented coverage, and pilot-first deployment starting at $450/month.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ProblemSection />
      <ComparisonSection />
      <FeaturesSection />
      <AudienceSection />
      <VideoSection />
      <PilotSection />
      <PricingPreview />
      <ROICalculator />
      <SafetyTrustSection />
      <FinalCTA />
    </>
  );
}
