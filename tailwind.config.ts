import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { 
    screens: {
    x375: "375px",
    xxxs: "400px",
    s425: "425px",
    s450: "450px",
    xxs: "500px",
    xs: "540px",
    s: "600px",
    sm: "640px",
    ssm: "670px",
    m: "700px",
    md: "768px",
    mmd: "800px",
    m834: "834px",
    mmmd: "850px",
    pc: "900px",
    lg: "1024px",
    llg: "1124px",
    xl: "1280px",
    l1440: "1440px",
    xxl: "1536px",
  },
    extend: {
      colors: {
      // primary color
      default: "#000",
      default2: "#FFF",
      primary_text: "#18140A",
      subText: "#4A463C",
      Main_primary_colour: "#BC6C25"
    },
        fontFamily: {
          inter: ["var( --font-inter)"],
          poppins: ["var(--font-poppins)"],
          hind: ["var(--font-hind)"],
          lato: ["var(--font-lato)"],
          playfair: ["var(--font-playfair)"],
        },
    },
  },
  plugins: [],
}
export default config
