import type { Config } from "tailwindcss";

// Valeurs alignees sur design_system/tokens/*.css (bundle "Warm Hearth & Forest").
// Garder ce fichier synchronise avec src/styles/tokens.css si les tokens evoluent.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand base
        forest: "#14261F",
        cream: "#F7F2E9",
        parchment: "#FCFAF7",
        sienna: "#8C4A32",
        moss: "#6B7563",

        // Role palette
        primary: "#011009",
        "on-primary": "#ffffff",
        "primary-container": "#14261f",
        "on-primary-container": "#7a8e85",

        secondary: "#8f4c34",
        "on-secondary": "#ffffff",
        "secondary-container": "#ffa98b",
        "on-secondary-container": "#793b24",
        "secondary-fixed": "#ffdbcf",

        tertiary: "#050f03",
        "tertiary-fixed": "#d7e7cd",
        "on-tertiary-fixed-variant": "#3d4b37",

        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",

        // Tonal surfaces
        background: "#fef9f0",
        "on-background": "#1d1c16",
        surface: "#fef9f0",
        "surface-lowest": "#ffffff",
        "surface-low": "#f8f3ea",
        "surface-container": "#f2ede4",
        "surface-high": "#ece8df",
        "surface-highest": "#e7e2d9",
        "surface-variant": "#e7e2d9",
        "on-surface": "#1d1c16",
        "on-surface-variant": "#424845",

        outline: "#737875",
        "outline-variant": "#c2c8c3",
      },
      fontFamily: {
        display: ['"Source Serif 4"', "Georgia", '"Times New Roman"', "serif"],
        body: ["Chivo", '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        icon: ['"Material Symbols Outlined"'],
      },
      fontSize: {
        "display-lg": ["42px", { lineHeight: "52px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px" }],
        "body-md": ["16px", { lineHeight: "24px" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "500" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.08em", fontWeight: "600" }],
      },
      borderRadius: {
        sm: "1px",
        DEFAULT: "2px",
        md: "4px",
        lg: "8px",
        badge: "12px",
        pill: "9999px",
      },
      boxShadow: {
        hairline: "0 2px 8px rgba(30,46,40,0.05)",
        card: "0 4px 20px rgba(30,46,40,0.04)",
        "card-raised": "0 8px 30px rgba(30,46,40,0.06)",
        "inset-card": "0 4px 24px rgba(30,46,40,0.03)",
        image: "0 4px 24px rgba(30,46,40,0.08)",
        cta: "0 8px 16px rgba(30,46,40,0.15)",
        appbar: "0 2px 10px rgba(30,46,40,0.05)",
      },
      spacing: {
        section: "64px",
        gutter: "16px",
        "margin-mobile": "20px",
        "margin-desktop": "40px",
      },
      maxWidth: {
        content: "1280px",
      },
      transitionTimingFunction: {
        popi: "cubic-bezier(0, 0, 0.2, 1)",
      },
      transitionDuration: {
        color: "200ms",
        press: "200ms",
        nav: "300ms",
        image: "700ms",
      },
    },
  },
  plugins: [],
} satisfies Config;
