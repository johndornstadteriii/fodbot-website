import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About FODBOT — Airfield Debris Solutions",
  description:
    "FODBOT is a robotics company building autonomous FOD detection and removal technology for GA and non-hub airports. Learn about our mission, approach, and team.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
