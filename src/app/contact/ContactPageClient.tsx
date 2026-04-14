"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Check, ArrowRight } from "lucide-react";
import { contactFormConfig, siteConfig } from "@/data/content";
import { SectionLabel } from "@/components/ui/SectionLabel";

type FormData = {
  airportName: string;
  contactName: string;
  role: string;
  email: string;
  phone: string;
  airportType: string;
  runwayCount: string;
  currentMethod: string;
  timeline: string;
  message: string;
  interestedInPilot: boolean;
};

const initialForm: FormData = {
  airportName: "",
  contactName: "",
  role: "",
  email: "",
  phone: "",
  airportType: "",
  runwayCount: "",
  currentMethod: "",
  timeline: "",
  message: "",
  interestedInPilot: true,
};

export default function ContactPageClient() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Replace with your actual form submission endpoint (e.g. Formspree, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  const inputClass =
    "w-full bg-fodbot-dark-bg border border-fodbot-dark-border rounded px-4 py-2.5 text-sm font-body text-white placeholder:text-fodbot-charcoal focus:outline-none focus:border-fodbot-gold/50 focus:ring-1 focus:ring-fodbot-gold/20 transition-colors duration-200";

  const labelClass = "block text-xs font-body font-medium text-fodbot-silver mb-1.5";

  const fields = contactFormConfig.fields;

  const textFields = fields.filter((f) => f.type === "text" || f.type === "email" || f.type === "tel");
  const selectFields = fields.filter((f) => f.type === "select");
  const textareaField = fields.find((f) => f.type === "textarea");

  return (
    <div className="bg-fodbot-dark-bg min-h-screen pt-20">
      {/* Header */}
      <section className="relative overflow-hidden py-20 border-b border-fodbot-dark-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-100" style={{ backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0 bg-radial-gold" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SectionLabel>Get In Touch</SectionLabel>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
              {contactFormConfig.headline}
            </h1>
            <p className="text-fodbot-silver font-body text-lg max-w-2xl leading-relaxed">
              {contactFormConfig.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-7"
            >
              <div>
                <h2 className="font-body font-bold text-white text-lg mb-4">Contact Information</h2>
                <div className="flex flex-col gap-4">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 rounded bg-fodbot-gold/10 flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-fodbot-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-body text-fodbot-silver mb-0.5">Email</p>
                      <p className="text-sm font-body text-white group-hover:text-fodbot-gold transition-colors">
                        {siteConfig.email}
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded bg-fodbot-gold/10 flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-fodbot-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-body text-fodbot-silver mb-0.5">Phone</p>
                      <p className="text-sm font-body text-white">{siteConfig.phone}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-fodbot-dark-card border border-fodbot-gold/20 rounded-lg p-5">
                <p className="text-xs font-body font-semibold tracking-widest text-fodbot-gold uppercase mb-3">
                  Pilot Program Interest
                </p>
                <p className="text-sm font-body text-fodbot-silver leading-relaxed mb-4">
                  Check the &ldquo;Interested in Pilot Program&rdquo; box in the form and we&apos;ll prioritize
                  your inquiry for pilot scheduling.
                </p>
                <ul className="flex flex-col gap-2">
                  {["30-day deployment at your facility", "No long-term commitment during pilot", "Full performance report included"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={13} className="text-fodbot-gold mt-0.5 shrink-0" />
                      <span className="text-xs font-body text-fodbot-silver">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg p-5">
                <p className="text-xs font-body font-semibold text-fodbot-silver uppercase tracking-widest mb-2">
                  Response Time
                </p>
                <p className="text-sm font-body text-white">Within one business day</p>
                <p className="text-xs font-body text-fodbot-charcoal mt-1">
                  Monday–Friday, 8am–6pm MT
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-2"
            >
              {submitted ? (
                <div className="bg-fodbot-dark-card border border-fodbot-gold/30 rounded-lg p-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-fodbot-gold/10 flex items-center justify-center mx-auto mb-5">
                    <Check size={24} className="text-fodbot-gold" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Message received.</h3>
                  <p className="font-body text-fodbot-silver text-sm max-w-md mx-auto leading-relaxed">
                    We&apos;ll review your submission and reach out within one business day to discuss your
                    facility and next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg p-8">
                  <h2 className="font-body font-bold text-white text-lg mb-6">Tell us about your facility</h2>

                  {/* First row */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="airportName" className={labelClass}>Airport Name *</label>
                      <input id="airportName" name="airportName" type="text" required value={form.airportName} onChange={handleChange} placeholder="e.g. Centennial Airport" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="contactName" className={labelClass}>Your Name *</label>
                      <input id="contactName" name="contactName" type="text" required value={form.contactName} onChange={handleChange} placeholder="First and last name" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="role" className={labelClass}>Your Role / Title *</label>
                      <input id="role" name="role" type="text" required value={form.role} onChange={handleChange} placeholder="e.g. Airport Manager" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email Address *</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@airport.gov" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number</label>
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Optional" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="airportType" className={labelClass}>Airport Type *</label>
                      <select id="airportType" name="airportType" required value={form.airportType} onChange={handleChange} className={inputClass}>
                        <option value="">Select airport type</option>
                        {["GA / Municipal", "Private / Corporate Aviation", "Regional Hub", "Military / Government", "Other"].map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label htmlFor="runwayCount" className={labelClass}>Runway Count</label>
                      <select id="runwayCount" name="runwayCount" value={form.runwayCount} onChange={handleChange} className={inputClass}>
                        <option value="">Select</option>
                        {["1", "2", "3", "4+"].map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="currentMethod" className={labelClass}>Current Inspection Method</label>
                      <select id="currentMethod" name="currentMethod" value={form.currentMethod} onChange={handleChange} className={inputClass}>
                        <option value="">Select</option>
                        {["Manual walk-down", "Vehicle-based inspection", "Passive detection system", "Combination", "Other"].map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className={labelClass}>Timeline Interest</label>
                      <select id="timeline" name="timeline" value={form.timeline} onChange={handleChange} className={inputClass}>
                        <option value="">Select</option>
                        {["ASAP", "Within 3 months", "3–6 months", "6–12 months", "Evaluating only"].map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="message" className={labelClass}>Additional Notes</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your inspection setup, key challenges, or any specific questions."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Pilot checkbox */}
                  <label className="flex items-start gap-3 mb-6 cursor-pointer group">
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        name="interestedInPilot"
                        checked={form.interestedInPilot}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded border transition-colors duration-200 flex items-center justify-center ${form.interestedInPilot ? "bg-fodbot-gold border-fodbot-gold" : "border-fodbot-dark-border bg-fodbot-dark-bg"}`}>
                        {form.interestedInPilot && <Check size={10} className="text-fodbot-black" strokeWidth={3} />}
                      </div>
                    </div>
                    <span className="text-sm font-body text-fodbot-silver group-hover:text-white transition-colors duration-200">
                      {contactFormConfig.pilotCheckboxLabel}
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-fodbot-gold text-fodbot-black font-body font-bold text-sm tracking-wide hover:bg-fodbot-gold-light transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Submit Request"}
                    {!loading && <ArrowRight size={16} />}
                  </button>

                  <p className="text-xs text-fodbot-charcoal font-body mt-3 text-center">
                    We&apos;ll respond within one business day. No spam, no high-pressure sales.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
