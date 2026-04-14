"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { roiDefaults } from "@/data/content";
import { formatCurrency } from "@/lib/utils";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Calculator } from "lucide-react";

interface Inputs {
  inspectionsPerDay: number;
  crewMembers: number;
  avgHourlyLaborCost: number;
  avgInspectionMinutes: number;
  workingDaysPerYear: number;
}

function Slider({
  label, value, min, max, step, unit, onChange,
}: {
  label: string; value: number; min: number; max: number; step: number; unit: string;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-body text-fodbot-silver">{label}</label>
        <span className="text-sm font-body font-semibold text-white">
          {unit === "$" ? `${unit}${value}` : `${value} ${unit}`}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-fodbot-dark-border rounded-full appearance-none cursor-pointer accent-fodbot-gold"
      />
      <div className="flex justify-between text-[10px] text-fodbot-charcoal font-body">
        <span>{unit === "$" ? `${unit}${min}` : `${min}`}</span>
        <span>{unit === "$" ? `${unit}${max}` : `${max}`}</span>
      </div>
    </div>
  );
}

export default function ROICalculator() {
  const [inputs, setInputs] = useState<Inputs>(roiDefaults);

  const set = (key: keyof Inputs) => (val: number) =>
    setInputs((prev) => ({ ...prev, [key]: val }));

  const calc = useMemo(() => {
    const hoursPerInspection = inputs.avgInspectionMinutes / 60;
    const annualInspectionHours =
      inputs.inspectionsPerDay * inputs.crewMembers * hoursPerInspection * inputs.workingDaysPerYear;
    const annualLaborCost = annualInspectionHours * inputs.avgHourlyLaborCost;
    const fodbotAnnualCost = 4500; // annual lease
    const estimatedLaborReduction = 0.65; // FODBOT handles ~65% of routine sweep burden
    const laborSavings = annualLaborCost * estimatedLaborReduction;
    const netBenefit = laborSavings - fodbotAnnualCost;
    const roi = fodbotAnnualCost > 0 ? (netBenefit / fodbotAnnualCost) * 100 : 0;

    return {
      annualLaborCost,
      laborSavings,
      fodbotAnnualCost,
      netBenefit,
      roi,
      annualInspectionHours,
    };
  }, [inputs]);

  return (
    <section className="bg-fodbot-dark-bg py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <SectionLabel>ROI Estimator</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight max-w-2xl">
            Estimate your operational savings.
          </h2>
          <p className="mt-4 text-fodbot-silver font-body max-w-xl text-sm">
            Adjust the inputs below to see a directional estimate of how FODBOT could reduce your
            inspection labor burden. This is a planning tool — not an audited financial projection.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Inputs */}
          <div className="bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg p-7 flex flex-col gap-7">
            <div className="flex items-center gap-3 mb-2">
              <Calculator size={18} className="text-fodbot-gold" />
              <span className="font-body font-semibold text-white text-sm">Your Current Operation</span>
            </div>

            <Slider
              label="Inspections per day"
              value={inputs.inspectionsPerDay}
              min={1} max={10} step={1} unit="runs/day"
              onChange={set("inspectionsPerDay")}
            />
            <Slider
              label="Crew members per inspection"
              value={inputs.crewMembers}
              min={1} max={6} step={1} unit="people"
              onChange={set("crewMembers")}
            />
            <Slider
              label="Average hourly labor cost"
              value={inputs.avgHourlyLaborCost}
              min={15} max={75} step={1} unit="$"
              onChange={set("avgHourlyLaborCost")}
            />
            <Slider
              label="Average inspection duration"
              value={inputs.avgInspectionMinutes}
              min={15} max={180} step={5} unit="min"
              onChange={set("avgInspectionMinutes")}
            />
            <Slider
              label="Operating days per year"
              value={inputs.workingDaysPerYear}
              min={200} max={365} step={5} unit="days"
              onChange={set("workingDaysPerYear")}
            />
          </div>

          {/* Results */}
          <div className="flex flex-col gap-5">
            {/* Primary result */}
            <div className="bg-fodbot-dark-card border border-fodbot-gold/30 rounded-lg p-7">
              <p className="text-xs font-body font-semibold tracking-widest text-fodbot-gold uppercase mb-2">
                Estimated Annual Labor Savings
              </p>
              <p className="font-display text-5xl font-bold text-white">
                {formatCurrency(Math.max(0, calc.laborSavings))}
              </p>
              <p className="text-sm text-fodbot-silver font-body mt-2">
                Based on FODBOT handling ~65% of routine sweep labor
              </p>
            </div>

            {/* Secondary metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg p-5">
                <p className="text-xs text-fodbot-silver font-body mb-1">Annual Inspection Labor</p>
                <p className="font-display text-2xl font-bold text-white">
                  {formatCurrency(calc.annualLaborCost)}
                </p>
                <p className="text-[10px] text-fodbot-charcoal font-body mt-1">current estimated spend</p>
              </div>
              <div className="bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg p-5">
                <p className="text-xs text-fodbot-silver font-body mb-1">FODBOT Annual Lease</p>
                <p className="font-display text-2xl font-bold text-white">
                  {formatCurrency(calc.fodbotAnnualCost)}
                </p>
                <p className="text-[10px] text-fodbot-charcoal font-body mt-1">annual plan</p>
              </div>
              <div className="bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg p-5">
                <p className="text-xs text-fodbot-silver font-body mb-1">Net Annual Benefit</p>
                <p className={`font-display text-2xl font-bold ${calc.netBenefit > 0 ? "text-emerald-400" : "text-fodbot-silver"}`}>
                  {formatCurrency(Math.max(0, calc.netBenefit))}
                </p>
                <p className="text-[10px] text-fodbot-charcoal font-body mt-1">directional estimate</p>
              </div>
              <div className="bg-fodbot-dark-card border border-fodbot-dark-border rounded-lg p-5">
                <p className="text-xs text-fodbot-silver font-body mb-1">Inspection Hours / Year</p>
                <p className="font-display text-2xl font-bold text-white">
                  {Math.round(calc.annualInspectionHours).toLocaleString()}
                </p>
                <p className="text-[10px] text-fodbot-charcoal font-body mt-1">crew hours committed</p>
              </div>
            </div>

            <p className="text-xs text-fodbot-charcoal font-body leading-relaxed">
              This calculator provides directional estimates only and does not account for all operational
              variables. Actual results vary by facility. Figures do not include potential avoided-damage savings
              or reduced liability exposure from improved FOD management.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
