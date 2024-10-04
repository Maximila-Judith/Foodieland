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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        lobster: ['Lobster', 'serif'],
      },
      screens: {
        '3xl': '3840px',
      },
      fontSize: {
        '10xl': '8rem',
        '11xl': '9rem',
        // Ajoute d'autres tailles si nécessaire
      },
    },
  },
  plugins: [],
};
export default config;
