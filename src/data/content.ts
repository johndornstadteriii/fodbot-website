// ─────────────────────────────────────────────────────────────────────────────
//  FODBOT — Central Content File
//  Edit this file to update stats, pricing, FAQs, features, CTAs, and config.
// ─────────────────────────────────────────────────────────────────────────────

// ── Site Config ──────────────────────────────────────────────────────────────
export const siteConfig = {
  name: "FODBOT",
  tagline: "Airfield Debris Solutions",
  description:
    "Autonomous FOD detection and removal for GA and non-hub airports. Active debris removal — not just detection.",
  url: "https://www.fodbotaero.com", // update when live
  email: "info@fodbotaero.com", // update when live
  phone: "+1 (000) 000-0000", // update when live
  demoLink: "#contact", // update with Calendly or demo scheduler URL
  pilotApplyLink: "#contact",
  downloadPilotOverview: "#", // update with PDF link
  youtubeVideoId: "", // ← Paste your YouTube video ID here (e.g. "dQw4w9WgXcQ")
  socialLinks: {
    linkedin: "#",
    twitter: "#",
  },
};

// ── Hero / Homepage ───────────────────────────────────────────────────────────
export const hero = {
  headline: "Active FOD Removal for Airports That Can't Afford to Miss What's on the Runway.",
  subheadline:
    "FODBOT is the only autonomous debris detection and removal system built and priced for GA and non-hub airports — continuous, documented, and designed to support your crew.",
  primaryCta: "Request a Pilot",
  primaryCtaHref: "/contact",
  secondaryCta: "See How It Works",
  secondaryCtaHref: "/product",
  trustPoints: [
    "Active removal — not just detection",
    "Designed for GA & municipal airports",
    "Pilot-first deployment model",
    "Audit-ready documentation",
  ],
};

// ── Stats Strip ───────────────────────────────────────────────────────────────
export const stats = [
  {
    value: "$22.7B",
    label: "Annual global FOD losses",
    source: "ICAO / industry estimates",
  },
  {
    value: "2,500+",
    label: "Target U.S. GA & non-hub airports",
    source: "FAA Airport Data",
  },
  {
    value: "78%",
    label: "Survey respondents were decision-makers or influencers",
    source: "FODBOT Airport Survey, 2026",
  },
  {
    value: "60%+",
    label: "Open to participating in a pilot program",
    source: "FODBOT Airport Survey, 2026",
  },
  {
    value: "$10K–$25K",
    label: "Realistic annual budget cited by operators",
    source: "FODBOT Airport Survey, 2026",
  },
];

// ── Problem Section ───────────────────────────────────────────────────────────
export const problems = [
  {
    icon: "Users",
    title: "Manual Inspections Are Labor-Intensive",
    description:
      "Walk-down and vehicle inspections require dedicated crew time every shift. Survey respondents rated labor intensity as the highest pain point in their current FOD process.",
  },
  {
    icon: "Eye",
    title: "Passive Detection Doesn't Remove Debris",
    description:
      "Camera-based detection systems flag debris locations but leave removal to staff. A robot that detects but doesn't remove shifts the burden rather than solving it.",
  },
  {
    icon: "DollarSign",
    title: "Enterprise Systems Are Out of Reach",
    description:
      "Six-figure airport automation systems are designed and priced for large commercial hubs. Most GA and municipal airports have no viable alternative — until now.",
  },
  {
    icon: "AlertTriangle",
    title: "Missed Debris Creates Real Liability",
    description:
      "A single FOD event can cause aircraft damage, emergency closures, insurance claims, and reputational harm. Inconsistent inspections create compounding exposure over time.",
  },
];

// ── Why FODBOT Comparison ─────────────────────────────────────────────────────
export const comparisonRows = [
  { feature: "Active debris removal", manual: false, passive: false, enterprise: true, fodbot: true },
  { feature: "Autonomous operation", manual: false, passive: true, enterprise: true, fodbot: true },
  { feature: "Priced for GA airports", manual: true, passive: false, enterprise: false, fodbot: true },
  { feature: "Audit-ready inspection logs", manual: false, passive: true, enterprise: true, fodbot: true },
  { feature: "Multi-modal collection", manual: false, passive: false, enterprise: "Partial", fodbot: true },
  { feature: "ADS-B aircraft awareness", manual: false, passive: false, enterprise: "Varies", fodbot: true },
  { feature: "30-day pilot available", manual: false, passive: false, enterprise: false, fodbot: true },
  { feature: "No major infrastructure required", manual: true, passive: false, enterprise: false, fodbot: true },
];

// ── Product Features ──────────────────────────────────────────────────────────
export const features = [
  {
    icon: "Layers",
    title: "Multi-Modal Debris Collection",
    description:
      "Combines a wide-span front sweeping system with vacuum pickup and magnetic collection — designed to handle screws, bolts, gravel, tire fragments, and general surface debris.",
  },
  {
    icon: "Radar",
    title: "360° LiDAR + Optical Sensor Suite",
    description:
      "Solid-state LiDAR and high-resolution optical cameras detect and classify debris in real time across the full sweep width, day or night.",
  },
  {
    icon: "Navigation",
    title: "RTK-GPS Autonomous Pathing",
    description:
      "Centimeter-accurate positioning drives systematic runway and taxiway coverage patterns. No GPS gaps, no missed corridors.",
  },
  {
    icon: "Radio",
    title: "ADS-B + Airfield Radio Integration",
    description:
      "Monitors live airfield traffic via ADS-B and VHF scanning. FODBOT yields right-of-way and holds position when aircraft are detected in the operating zone.",
  },
  {
    icon: "FileText",
    title: "Automated Inspection Logging",
    description:
      "Every run generates a timestamped, geo-referenced log of coverage area, detected items, and removal actions — ready for SMS documentation, audits, and regulatory records.",
  },
  {
    icon: "Zap",
    title: "Autonomous Return & Self-Charging",
    description:
      "FODBOT returns to base for autonomous charging between inspection cycles, minimizing operator involvement and supporting true set-and-forget operation.",
  },
  {
    icon: "Shield",
    title: "Designed for Operational Compatibility",
    description:
      "Built to operate alongside existing crew workflows without runway closures or major infrastructure changes. Supports your team rather than replacing standard safety procedures.",
  },
  {
    icon: "Sliders",
    title: "Modular & Scalable Architecture",
    description:
      "Configurable coverage width and sensor payloads. Scale from a single runway unit to multi-runway deployment as operational needs grow.",
  },
];

// ── Audience / Buyer Personas ─────────────────────────────────────────────────
export const audiences = [
  {
    role: "Airport Management & Executives",
    icon: "Briefcase",
    headline: "Reduce liability exposure and operational cost.",
    description:
      "FODBOT shifts FOD inspection from a recurring labor cost to a documented, autonomous process. Leasing or subscription models let you align spend with operating budgets — no large capital outlay.",
    bullets: [
      "Operational spend framing — lease or subscribe",
      "Audit-ready documentation for insurance and regulators",
      "Scalable from single to multi-runway deployment",
    ],
  },
  {
    role: "Operations & Maintenance Teams",
    icon: "Wrench",
    headline: "Free your crew for higher-value work.",
    description:
      "FODBOT handles the routine sweep and log cycle so your team can focus on inspections that require human judgment. It integrates with existing shift patterns and requires minimal daily interaction.",
    bullets: [
      "Set-and-forget daily operation",
      "No major training burden",
      "Supports, not replaces, crew walk-downs",
    ],
  },
  {
    role: "Safety & SMS Officers",
    icon: "ShieldCheck",
    headline: "Consistent coverage. Verifiable records.",
    description:
      "Every FODBOT run produces a geo-referenced inspection log your SMS program can use. Replace subjective walk-down notes with machine-generated, timestamped documentation.",
    bullets: [
      "Timestamped geo-referenced inspection records",
      "Consistent detection regardless of crew fatigue or shift gaps",
      "Supports FAA SMS documentation requirements",
    ],
  },
];

// ── Pilot Program ─────────────────────────────────────────────────────────────
export const pilotProgram = {
  headline: "The 30-Day FODBOT Pilot",
  subheadline:
    "We deploy, you evaluate. No long-term commitment required during the pilot period.",
  description:
    "FODBOT's pilot-first deployment model is designed for airports that need to see performance before committing. We provide the hardware, setup support, and technical guidance. You run the scorecard.",
  whatYouGet: [
    "Full FODBOT unit deployed to your facility",
    "Dedicated setup and onboarding support",
    "Access to inspection logs and data dashboard",
    "Weekly check-ins with the FODBOT technical team",
    "Pilot results report at the end of the 30 days",
  ],
  scorecardMetrics: [
    {
      metric: "Coverage Rate",
      description: "What percentage of the declared inspection area did FODBOT complete each cycle?",
    },
    {
      metric: "Alert Precision",
      description: "How accurately did the system detect and flag real debris versus false positives?",
    },
    {
      metric: "Response Time Impact",
      description: "Did FODBOT reduce the time between inspection cycles compared to manual methods?",
    },
    {
      metric: "Operator Burden",
      description: "How much crew time was required to support and monitor FODBOT per shift?",
    },
    {
      metric: "Log Quality",
      description: "Were the generated inspection logs usable, complete, and SMS-compatible?",
    },
  ],
  afterPilot:
    "After the 30-day pilot, FODBOT provides a full performance summary. If results support deployment, we transition you into your preferred acquisition model — purchase, lease, or subscription — with no high-pressure sales cycle.",
  faq: [
    {
      question: "Will FODBOT disrupt normal airfield operations during the pilot?",
      answer:
        "No. FODBOT is designed to operate within standard airfield windows — typically during low-traffic periods or alongside existing inspection schedules. We coordinate timing with your ops team before deployment.",
    },
    {
      question: "What does the airport need to provide?",
      answer:
        "A designated base/charging location near the runway or taxiway, basic power access, and coordination time with our setup team. No major infrastructure investment is required for the pilot.",
    },
    {
      question: "Is FODBOT safe to run on an active airfield?",
      answer:
        "Yes. FODBOT integrates ADS-B and airfield radio monitoring to detect nearby aircraft and holds position until the zone is clear. Operational windows and hold procedures are coordinated with your team.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Typically one to two days, including unit calibration, GPS boundary mapping for your runway, and basic operator walkthrough.",
    },
    {
      question: "What happens if FODBOT misses debris?",
      answer:
        "The pilot is explicitly designed to measure detection and removal performance. All runs are logged. Any missed items identified during parallel manual inspection are documented as part of the performance scorecard.",
    },
  ],
};

// ── Pricing ───────────────────────────────────────────────────────────────────
export const pricingPlans = [
  {
    name: "Monthly Subscription",
    price: "$450",
    per: "per month",
    description: "Ideal for operators who prefer predictable operating expense and want to start with minimum upfront commitment.",
    bestFor: "Municipal & GA airports with tight capital budgets",
    includes: [
      "Full FODBOT unit access",
      "Firmware updates included",
      "Remote monitoring support",
      "Inspection log access",
      "Standard SLA response",
    ],
    cta: "Request a Quote",
    highlight: false,
  },
  {
    name: "Annual Lease",
    price: "$4,500",
    per: "per year",
    description: "Our most popular model. Structured as an operational expense with the flexibility to reassess each term.",
    bestFor: "Airports evaluating multi-year deployment planning",
    includes: [
      "Full FODBOT unit access",
      "Firmware updates included",
      "Dedicated account support",
      "Inspection log access",
      "Priority SLA response",
      "Lease-to-own pathway available",
    ],
    cta: "Request a Quote",
    highlight: true,
  },
  {
    name: "One-Time Purchase",
    price: "$15,000",
    per: "one-time",
    description: "Full ownership for operators who prefer capital acquisition or have access to equipment grant funding.",
    bestFor: "Private aviation facilities and longer-horizon operators",
    includes: [
      "Permanent unit ownership",
      "First-year firmware updates",
      "First-year remote support",
      "Inspection log access",
      "Hardware warranty",
      "Optional extended support plans",
    ],
    cta: "Request a Quote",
    highlight: false,
  },
];

// ── ROI Calculator Defaults ────────────────────────────────────────────────────
export const roiDefaults = {
  inspectionsPerDay: 2,
  crewMembers: 2,
  avgHourlyLaborCost: 28,
  avgInspectionMinutes: 45,
  workingDaysPerYear: 365,
};

// ── Segments / Solutions ──────────────────────────────────────────────────────
export const segments = [
  {
    id: "lean-operators",
    name: "Lean Operators",
    subtitle: "Non-Hub / GA / Municipal Airports",
    icon: "Plane",
    headline: "Do more with the crew you have.",
    description:
      "For smaller airports running lean operations, every hour of crew time matters. FODBOT handles the routine sweep-and-log cycle autonomously, freeing your team for work that requires human judgment.",
    pains: [
      "Limited staff covering multiple responsibilities",
      "Inspection frequency constrained by crew availability",
      "No budget for large enterprise automation systems",
      "Documentation gaps creating SMS and audit risk",
    ],
    value: [
      "Autonomous daily coverage at $450/month",
      "No dedicated operator required after setup",
      "Structured inspection logs for your SMS program",
      "Pilot-first commitment reduces adoption risk",
    ],
    marketNote: "~2,500 target U.S. facilities in this segment",
  },
  {
    id: "efficiency-seekers",
    name: "Efficiency Seekers",
    subtitle: "Private & Corporate Aviation Facilities",
    icon: "Target",
    headline: "Operational excellence starts on the ground.",
    description:
      "Private and corporate aviation facilities demand consistent, high-standard operations. FODBOT provides the inspection consistency and documentation trail that aligns with the operational standards your clients expect.",
    pains: [
      "Client expectations for safety and operational rigor",
      "Staff time absorbed by routine surface monitoring",
      "Limited third-party validation of inspection quality",
      "Insurance and liability documentation requirements",
    ],
    value: [
      "Consistent machine-driven coverage, every cycle",
      "Inspection reports available for client and insurer review",
      "Subscription model fits operating cost structure",
      "Supports the safety image your facility represents",
    ],
    marketNote: "Growing segment across business aviation infrastructure",
  },
  {
    id: "reliability-drivers",
    name: "Reliability Drivers",
    subtitle: "Small Commercial & Regional Hub Airports",
    icon: "BarChart2",
    headline: "Safety documentation that holds up to scrutiny.",
    description:
      "Regional airports face increasing regulatory expectation around SMS implementation and FOD management documentation. FODBOT provides the consistent, verifiable inspection record your compliance program needs.",
    pains: [
      "Regulatory and audit pressure on SMS documentation",
      "Inconsistent inspection quality across shifts and crew",
      "Manual logs that don't meet evolving documentation standards",
      "Cost of missed debris incidents — financial and reputational",
    ],
    value: [
      "Geo-referenced, timestamped inspection records per run",
      "Consistent coverage regardless of shift changes",
      "Supports ICAO-aligned FOD management documentation",
      "Complements, doesn't replace, required human inspections",
    ],
    marketNote: "Aligned with FAA Safety Management System (SMS) program expectations",
  },
];

// ── How It Works / Product Steps ──────────────────────────────────────────────
export const operationalSteps = [
  {
    step: "01",
    title: "Detect",
    description:
      "FODBOT's 360° LiDAR and optical sensor array continuously scans the runway surface for foreign objects — from small hardware to larger debris — across the full operating width.",
  },
  {
    step: "02",
    title: "Classify",
    description:
      "Onboard processing classifies detected items by type and size. High-confidence debris triggers immediate collection. Edge cases are flagged in the inspection log for crew review.",
  },
  {
    step: "03",
    title: "Remove",
    description:
      "The multi-modal debris collection system engages — sweeping, vacuuming, and magnetically capturing debris based on item type. Removal is active, not passive.",
  },
  {
    step: "04",
    title: "Log",
    description:
      "Every detection, classification, and removal event is timestamped and geo-referenced. Logs are generated per run and accessible through the inspection dashboard.",
  },
  {
    step: "05",
    title: "Return",
    description:
      "After completing the designated coverage pattern, FODBOT autonomously returns to base for recharging, self-diagnostics, and debris offloading before the next cycle.",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
export const faqs = [
  {
    question: "What types of debris can FODBOT remove?",
    answer:
      "FODBOT is designed to handle common runway FOD categories: fasteners (nuts, bolts, screws), gravel and aggregate, tire fragments, plastic debris, and general surface material. The multi-modal collection system includes sweeping, vacuum, and magnetic pickup to handle different debris types.",
  },
  {
    question: "What airports is FODBOT best suited for?",
    answer:
      "FODBOT is designed and priced for GA airports, municipal airports, private aviation facilities, and smaller regional hubs. It is not currently marketed as a replacement for enterprise-level systems at major commercial airports, though the architecture is scalable.",
  },
  {
    question: "Does FODBOT replace human inspection crews?",
    answer:
      "No. FODBOT supports and augments existing crews — it does not replace required human inspections. It handles the routine autonomous sweep cycle and generates documentation that supports your SMS program. Human inspections remain part of a complete FOD management approach.",
  },
  {
    question: "How does FODBOT operate safely on an active airfield?",
    answer:
      "FODBOT integrates ADS-B receiver monitoring and airfield radio scanning to detect aircraft in the operational zone. When an aircraft is detected within the configured exclusion boundary, FODBOT holds position or returns to base. Operational windows are coordinated with your ops team during setup.",
  },
  {
    question: "Is FODBOT FAA certified?",
    answer:
      "FODBOT is currently pursuing FAA and ICAO-aligned safety pathways for autonomous airfield operation. The system is designed in accordance with operational compatibility principles for active airfields. Certification status will be communicated transparently as the regulatory process advances.",
  },
  {
    question: "How does the pilot program work?",
    answer:
      "FODBOT deploys a unit to your facility for 30 days. We handle setup, coordinate with your ops team, and provide technical support throughout. At the end, you receive a full performance report against five standard scorecard metrics: coverage rate, alert precision, response time impact, operator burden, and log quality.",
  },
  {
    question: "What does the subscription cover?",
    answer:
      "The monthly subscription ($450/month) includes full access to a FODBOT unit, firmware updates, remote monitoring support, and inspection log access. The annual lease ($4,500/year) adds priority support and a lease-to-own pathway.",
  },
  {
    question: "What infrastructure does my airport need?",
    answer:
      "Minimal. You need a designated base location near the runway or taxiway with standard power access for the charging station. No runway infrastructure modification is required.",
  },
  {
    question: "How long does a full inspection cycle take?",
    answer:
      "Coverage time varies by runway length and taxiway configuration. Typical single-runway cycles at GA-sized facilities run 30–90 minutes depending on coverage width, speed settings, and surface conditions.",
  },
  {
    question: "What happens with the collected debris?",
    answer:
      "Debris is collected in the onboard containment system and offloaded at the base station. The base station consolidates collected material for periodic manual disposal — typically once per day or every few cycles.",
  },
  {
    question: "What support does FODBOT provide after deployment?",
    answer:
      "All models include remote monitoring support and firmware updates during the covered period. Lease and subscription models include standard or priority SLA response for operational issues. On-site support is available for significant hardware issues.",
  },
  {
    question: "Can FODBOT operate at night or in adverse weather?",
    answer:
      "FODBOT's optical and LiDAR sensor suite is designed to operate in low-light conditions. Night operation is supported. Operation in heavy precipitation, ice, or extreme wind conditions follows configurable operational parameters defined during setup for your facility.",
  },
];

// ── Resources / Case Studies ──────────────────────────────────────────────────
export const caseStudies = [
  {
    title: "30-Day Pilot Program Results",
    airport: "Pilot Facility — Results Pending",
    summary:
      "FODBOT is currently scheduling pilot deployments at select GA and municipal airports. First pilot results will be published here following program completion.",
    status: "coming-soon",
    tags: ["GA Airport", "Pilot Program"],
  },
  {
    title: "Survey: Airport Manager FOD Pain Points",
    airport: "FODBOT Airport Survey, 2026 (N=35+)",
    summary:
      "78% of survey respondents were airport decision-makers or direct influencers. Labor intensity and missed debris risk ranked as top challenges across facility types. 60%+ expressed openness to a pilot program.",
    status: "available",
    tags: ["Market Research", "Survey Data"],
  },
  {
    title: "Autonomous Airfield Operations: Safety Framework",
    airport: "Internal White Paper",
    summary:
      "An overview of FODBOT's approach to safe autonomous operation on active airfields, including ADS-B integration, exclusion zone management, and crew coordination protocols.",
    status: "coming-soon",
    tags: ["Safety", "Technical"],
  },
];

export const downloadables = [
  {
    title: "FODBOT Pilot Program Overview",
    description: "One-page summary of the 30-day pilot structure, scorecard metrics, and what to expect.",
    fileType: "PDF",
    href: siteConfig.downloadPilotOverview,
    available: false,
  },
  {
    title: "FODBOT Product Specification Sheet",
    description: "Technical specifications, sensor suite details, and operational parameters.",
    fileType: "PDF",
    href: "#",
    available: false,
  },
  {
    title: "FOD Risk & Cost Estimation Guide",
    description: "A framework for estimating your facility's FOD risk exposure and cost of inaction.",
    fileType: "PDF",
    href: "#",
    available: false,
  },
];

// ── Contact Form Fields ────────────────────────────────────────────────────────
export const contactFormConfig = {
  headline: "Request a Pilot Program",
  subheadline:
    "Tell us about your facility and we'll reach out within one business day to discuss next steps.",
  fields: [
    { name: "airportName", label: "Airport Name", type: "text", required: true },
    { name: "contactName", label: "Your Name", type: "text", required: true },
    { name: "role", label: "Your Role / Title", type: "text", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: false },
    {
      name: "airportType",
      label: "Airport Type",
      type: "select",
      required: true,
      options: ["GA / Municipal", "Private / Corporate Aviation", "Regional Hub", "Military / Government", "Other"],
    },
    {
      name: "runwayCount",
      label: "Number of Runways",
      type: "select",
      required: false,
      options: ["1", "2", "3", "4+"],
    },
    {
      name: "currentMethod",
      label: "Current Inspection Method",
      type: "select",
      required: false,
      options: ["Manual walk-down", "Vehicle-based inspection", "Passive detection system", "Combination", "Other"],
    },
    {
      name: "timeline",
      label: "Deployment Timeline Interest",
      type: "select",
      required: false,
      options: ["ASAP", "Within 3 months", "3–6 months", "6–12 months", "Evaluating only"],
    },
    { name: "message", label: "Additional Notes", type: "textarea", required: false },
  ],
  pilotCheckboxLabel: "I'm interested in participating in the 30-day pilot program.",
};

// ── Navigation ─────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Product", href: "/product" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pilot Program", href: "/pilot" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Safety", href: "/safety" },
];

// ── Footer ─────────────────────────────────────────────────────────────────────
export const footerLinks = {
  product: [
    { label: "How It Works", href: "/product" },
    { label: "Features", href: "/product#features" },
    { label: "Technical Specs", href: "/product#specs" },
    { label: "Safety Design", href: "/safety" },
  ],
  solutions: [
    { label: "GA & Municipal Airports", href: "/solutions#lean-operators" },
    { label: "Private Aviation", href: "/solutions#efficiency-seekers" },
    { label: "Regional Hubs", href: "/solutions#reliability-drivers" },
  ],
  company: [
    { label: "About FODBOT", href: "/about" },
    { label: "Pilot Program", href: "/pilot" },
    { label: "Pricing", href: "/pricing" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};
