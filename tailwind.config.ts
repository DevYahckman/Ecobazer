import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        warning:'#FF8A00',
        softPrimary:'#84D187',
        primary:'#00B207',
        hardPrimary:'#2C742F',
        danger:'#EA4B48',
        success: '#00b207',
        deepGray:'#1a1a1a',
        
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [ "nord"],
  },
};
export default config;
