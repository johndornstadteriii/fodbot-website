import type { Metadata } from "next";
import ResourcesPageClient from "./ResourcesPageClient";

export const metadata: Metadata = {
  title: "Resources, Case Studies & FAQ — FODBOT",
  description:
    "FODBOT resources including case studies, downloadable materials, and frequently asked questions about autonomous FOD removal for airports.",
};

export default function ResourcesPage() {
  return <ResourcesPageClient />;
}
