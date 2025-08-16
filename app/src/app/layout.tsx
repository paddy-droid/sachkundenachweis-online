import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sachkundenachweis-online.at"),
  title: {
    default: 'Sachkundenachweis Online für NÖ & Salzburg | Offizieller Kurs',
    template: '%s | Sachkundenachweis Online',
  },
  description: "Offizieller Sachkundenachweis für Hundebesitzer in Österreich. Absolviere den Kurs für NÖ oder Salzburg bequem online und erhalte dein Zertifikat.",
  keywords: "Sachkundenachweis NÖ, Hundekurs online, Hundeführerschein Niederösterreich, Gesetzlicher Nachweis Hundehaltung",
  verification: {
    google: "tJHzKN6H6x-M4QPsCiWgzw2th7FTkTGVfmGFxAXbDXg",
  },
  openGraph: {
    title: "Sachkundenachweis NÖ: Online Kurs | Jetzt buchen!",
    description: "Offizieller Sachkundenachweis für Niederösterreich. Absolviere den Kurs online via Google Meet und erhalte bequem dein Zertifikat.",
    url: "https://sachkundenachweis-online.at",
    siteName: "Sachkundenachweis NÖ",
    images: [
      {
        url: "/hero/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Glücklicher Hund mit Ball auf einer Wiese für Sachkundenachweis NÖ",
      },
    ],
    locale: "de_AT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachkundenachweis NÖ: Online Kurs | Jetzt buchen!",
    description: "Offizieller Sachkundenachweis für Niederösterreich. Absolviere den Kurs online via Google Meet und erhalte bequem dein Zertifikat.",
    images: ["/hero/hero-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
