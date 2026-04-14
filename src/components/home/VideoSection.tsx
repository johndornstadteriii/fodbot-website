"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Check } from "lucide-react";
import { siteConfig } from "@/data/content";
import { getYoutubeEmbedUrl, getYoutubeThumbnail } from "@/lib/utils";
import { SectionLabel } from "@/components/ui/SectionLabel";

const videoHighlights = [
  "Active debris collection demonstrated on runway surface",
  "Sensor suite and autonomous navigation in operation",
  "ADS-B hold response to simulated aircraft approach",
  "Inspection log output and coverage visualization",
];

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const videoId = siteConfig.youtubeVideoId;
  const hasVideo = Boolean(videoId);

  return (
    <section className="bg-fodbot-dark-card border-y border-fodbot-dark-border py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>See It In Action</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              See FODBOT in Action
            </h2>
            <p className="text-fodbot-silver font-body leading-relaxed mb-7 text-sm">
              Watch FODBOT operate on an active airfield surface — from initial deployment and sensor
              activation through full runway sweep and debris collection cycle.
            </p>
            <ul className="flex flex-col gap-3">
              {videoHighlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={14} className="text-fodbot-gold mt-0.5 shrink-0" />
                  <span className="text-sm font-body text-fodbot-silver">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: video embed or placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            {hasVideo ? (
              <div className="relative aspect-video rounded-lg overflow-hidden border border-fodbot-dark-border bg-black">
                {!playing ? (
                  <button
                    onClick={() => setPlaying(true)}
                    className="absolute inset-0 w-full h-full group"
                    aria-label="Play FODBOT video"
                  >
                    <img
                      src={getYoutubeThumbnail(videoId)}
                      alt="FODBOT product video thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-fodbot-black/50 group-hover:bg-fodbot-black/40 transition-colors duration-200 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-fodbot-gold flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-gold-md">
                        <Play size={24} className="text-fodbot-black ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </button>
                ) : (
                  <iframe
                    src={getYoutubeEmbedUrl(videoId) + "&autoplay=1"}
                    title="FODBOT Autonomous FOD Removal"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            ) : (
              /* Placeholder state when no video URL is configured */
              <div className="relative aspect-video rounded-lg overflow-hidden border border-fodbot-dark-border bg-fodbot-dark-bg flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-fodbot-gold/10 border border-fodbot-gold/20 flex items-center justify-center">
                  <Play size={24} className="text-fodbot-gold ml-1" />
                </div>
                <div className="text-center">
                  <p className="font-body font-semibold text-white text-sm mb-1">Video Coming Soon</p>
                  <p className="font-body text-xs text-fodbot-silver max-w-xs">
                    Add your YouTube video ID to{" "}
                    <code className="text-fodbot-gold font-mono text-[11px]">src/data/content.ts</code>{" "}
                    to activate this section.
                  </p>
                </div>
                {/* Runway-style decorative lines */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-1 bg-fodbot-gold/10 rounded" />
                  ))}
                </div>
              </div>
            )}

            {/* Corner accent */}
            <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-fodbot-gold/20 rounded-br-sm pointer-events-none" />
            <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-fodbot-gold/20 rounded-tl-sm pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
