"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import { comparisonRows } from "@/data/content";
import { SectionLabel } from "@/components/ui/SectionLabel";

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check size={16} className="text-fodbot-gold mx-auto" />;
  if (value === false) return <X size={16} className="text-fodbot-charcoal mx-auto" />;
  return (
    <span className="text-xs text-fodbot-silver font-body">{value}</span>
  );
}

const headers = ["Manual Inspection", "Passive Detection", "Enterprise System", "FODBOT"];

export default function ComparisonSection() {
  return (
    <section className="bg-fodbot-dark-card border-y border-fodbot-dark-border py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <SectionLabel className="justify-center">Why FODBOT</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight max-w-2xl mx-auto">
            Active removal changes the equation.
          </h2>
          <p className="mt-4 text-fodbot-silver font-body max-w-xl mx-auto">
            Detection without removal is only half the solution. FODBOT combines sensor-driven identification with
            physical debris collection — at a price point GA airports can actually justify.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="overflow-x-auto"
        >
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="border-b border-fodbot-dark-border">
                <th className="text-left py-4 pr-6 text-fodbot-silver font-medium w-1/3">Capability</th>
                {headers.map((h, i) => (
                  <th
                    key={i}
                    className={`py-4 px-4 text-center font-semibold ${
                      h === "FODBOT"
                        ? "text-fodbot-gold"
                        : "text-fodbot-silver"
                    }`}
                  >
                    {h === "FODBOT" ? (
                      <span className="inline-flex items-center gap-1">
                        <span className="font-display tracking-widest">{h}</span>
                        <span className="text-[9px] bg-fodbot-gold/10 text-fodbot-gold border border-fodbot-gold/20 px-1.5 py-0.5 rounded font-medium tracking-wide">
                          OUR SYSTEM
                        </span>
                      </span>
                    ) : (
                      h
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-fodbot-dark-border/60 transition-colors hover:bg-white/[0.02] ${
                    i % 2 === 0 ? "" : "bg-white/[0.01]"
                  }`}
                >
                  <td className="py-3.5 pr-6 text-white font-medium">{row.feature}</td>
                  <td className="py-3.5 px-4 text-center">
                    <Cell value={row.manual} />
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <Cell value={row.passive} />
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <Cell value={row.enterprise} />
                  </td>
                  <td className="py-3.5 px-4 text-center bg-fodbot-gold/[0.03] border-l border-r border-fodbot-gold/10">
                    <Cell value={row.fodbot} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="text-xs text-fodbot-charcoal font-body mt-6 text-center">
          System capabilities vary by configuration. This table reflects general positioning of each category.
        </p>
      </div>
    </section>
  );
}
