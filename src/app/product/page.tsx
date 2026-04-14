import type { Metadata } from "next";
import ProductPageClient from "./ProductPageClient";

export const metadata: Metadata = {
  title: "How It Works — FODBOT Autonomous FOD Removal",
  description:
    "Learn how FODBOT detects, classifies, removes, and logs runway debris autonomously. 360° LiDAR, ADS-B aircraft awareness, multi-modal debris collection, and audit-ready documentation.",
};

export default function ProductPage() {
  return <ProductPageClient />;
}
