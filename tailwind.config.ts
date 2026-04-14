import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fodbot: {
          charcoal: "#3D4247",
          gold: "#801010",
          silver: "#B2B8BF",
          black: "#000000",
          "dark-bg": "#0A0B0D",
          "dark-card": "#111318",
          "dark-border": "#1E2128",
          "gold-dim": "#600C0C",
          "gold-light": "#A01515",
        },
      },
      fontFamily: {
        display: ["'Orbitron'", "'Microgramma'", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["'Inter'", "'Calibri'", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(128,16,16,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(128,16,16,0.04) 1px, transparent 1px)",
        "radial-gold": "radial-gradient(circle at 50% 0%, rgba(128,16,16,0.12) 0%, transparent 60%)",
        "radial-subtle": "radial-gradient(circle at 80% 20%, rgba(61,66,71,0.4) 0%, transparent 50%)",
        "hero-gradient": "linear-gradient(180deg, #0A0B0D 0%, #0D0F12 50%, #0A0B0D 100%)",
      },
      backgroundSize: {
        "grid-size": "60px 60px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scan-line": "scanLine 3s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      boxShadow: {
        gold: "0 0 20px rgba(128,16,16,0.15)",
        "gold-md": "0 0 40px rgba(128,16,16,0.2)",
        "inner-dark": "inset 0 1px 0 rgba(255,255,255,0.04)",
        card: "0 1px 3px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
