import type { Metadata } from "next";
import { Manrope, Instrument_Serif, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { StoreProvider } from "@/lib/store";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const instrument = Instrument_Serif({ weight: "400", subsets: ["latin"], variable: "--font-instrument", display: "swap" });
const tiro = Tiro_Devanagari_Hindi({ weight: "400", subsets: ["devanagari"], variable: "--font-tiro", display: "swap" });

export const metadata: Metadata = {
  title: "Konnect 360 — Where industries meet opportunity",
  description: "Konnect 360 creates industry-focused exhibitions where brands meet buyers, distributors and decision-makers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrument.variable} ${tiro.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FFFBF5] text-[#0F0F0F] antialiased">
        <StoreProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
