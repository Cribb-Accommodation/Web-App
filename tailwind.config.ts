import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        fontFamily: {
          inter: ["var( --font-inter)"],
          poppins: ["var(--font-poppins)"],
          hind: ["var(--font-hind)"],
          lato: ["var(--font-lato)"],
        },
    },
  },
  plugins: [],
}
export default config
