import type { Metadata } from "next";
import SolutionsPageClient from "./SolutionsPageClient";

export const metadata: Metadata = {
  title: "Solutions by Airport Type — FODBOT",
  description:
    "FODBOT solutions tailored for GA and municipal airports, private aviation facilities, and small regional hubs. See how autonomous FOD removal fits your operation.",
};

export default function SolutionsPage() {
  return <SolutionsPageClient />;
}
