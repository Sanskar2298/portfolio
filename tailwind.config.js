/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        base: "#0A0A0F",
        surface: "#111118",
        "surface-2": "#1A1A24",
        accent: "#6C63FF",
        "accent-soft": "#A78BFA",
        "text-primary": "#E8E8F0",
        "text-muted": "#8A8A9A",
        "text-dim": "#4A4A5A",
        border: "#1E1E2E",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(24px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 0.8 },
        },
      },
    },
  },
  plugins: [],
};
