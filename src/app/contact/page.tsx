import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact & Request a Pilot — FODBOT",
  description:
    "Request a FODBOT pilot program at your airport or contact the team directly. Fill out the form with your airport details and we'll respond within one business day.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
