import type { Metadata } from "next";
import "./globals.css";
import { Inter, Hind, Poppins, Lato, Playfair_Display } from "next/font/google";

const inter = Inter({
  style: "normal",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const hind = Hind({
  style: "normal",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
});
const playfair = Playfair_Display({
  style: "normal",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
});
const poppins = Poppins({
  style: "normal",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const lato = Lato({
  style: "normal",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Cribb",
  description: "cribb Accomodations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${hind.variable} ${poppins.variable} ${lato.variable} ${playfair.variable} h-full  w-full font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
