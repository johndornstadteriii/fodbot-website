import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: {
    default: "FODBOT — Autonomous Airfield FOD Removal",
    template: "%s | FODBOT Airfield Debris Solutions",
  },
  description:
    "FODBOT is the autonomous FOD detection and removal system built for GA and non-hub airports. Active debris removal, audit-ready logs, and pilot-first deployment. Starting at $450/month.",
  keywords: [
    "airport FOD removal",
    "autonomous runway debris removal",
    "FOD robot",
    "airport debris detection and removal",
    "GA airport safety technology",
    "runway inspection automation",
    "foreign object debris",
    "airfield safety system",
    "FOD detection",
    "autonomous airport robot",
  ],
  authors: [{ name: "FODBOT Airfield Debris Solutions" }],
  creator: "FODBOT",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "FODBOT — Autonomous Airfield FOD Removal",
    description:
      "Active FOD removal for airports that can't afford to miss what's on the runway. Built for GA and non-hub airports. Pilot-first deployment.",
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "FODBOT Autonomous FOD Removal Robot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FODBOT — Autonomous Airfield FOD Removal",
    description:
      "Active FOD removal for GA and non-hub airports. Pilot-first deployment starting at $450/month.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0A0B0D" />
      </head>
      <body className="min-h-screen flex flex-col bg-fodbot-dark-bg text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
