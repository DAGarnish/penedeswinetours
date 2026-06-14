import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Penedès Wine Tours | Premium Wine Tasting Day Trip from Sitges",
  description: "Escape to the Catalan vineyards. Indulge in an exclusive half-day Cava & Penedès boutique winery tour with door-to-door Sitges pickup and a romantic tasting menu curated by a celebrity chef.",
  keywords: ["wine tasting from Sitges", "Cava winery day trip", "Penedès vineyard tour", "luxury wine tours Spain", "Sitges excursions"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 font-sans text-stone-900">{children}</body>
    </html>
  );
}

