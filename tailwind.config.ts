import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "background-100": "var(--background-100)",
      "background-200": "var(--background-200)",
      "background-300": "var(--background-300)",
      "primary-100": "var(--primary-100)",
      "primary-200": "var(--primary-200)",
      "primary-300": "var(--primary-300)",
      "accent-100": "var(--accent-100)",
      "accent-200": "var(--accent-200)",
      "text-100": "var(--text-100)",
      "text-200": "var(--text-200)",
    },
  },
  plugins: [require("tailwindcss-fluid-type")],
};
export default config;
