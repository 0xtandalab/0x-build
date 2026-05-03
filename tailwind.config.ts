// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#836EF9",
          black: "#0E0E0E",
          white: "#F0F0F0",
          green: "#00FF9D",
          gray: "#A19797",
          tokopedia: "#03AC0E",
          shopee: "#EE4D2D",
          tiktok: "#000000",
          whatsapp: "#25D366",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["Space Mono", "monospace"],
        deco: ["Cinzel Decorative", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
