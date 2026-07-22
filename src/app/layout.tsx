import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import ToastProvider from "./components/ToastProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sitges Wine Tasting Tour & Penedès Vineyard Trip",
  description: "Premium wine tours, starting from our Sitges historic base, then explore stunning Penedès vineyards. Lunch with highly expressive organic wine pairings",
  keywords: ["wine tasting from Sitges", "Cava winery day trip", "Penedès vineyard tour", "luxury wine tours Spain", "Sitges excursions"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-stone-50 font-sans text-stone-900">
        <ToastProvider>{children}</ToastProvider>
      </body>
      <GoogleAnalytics gaId="G-1BMJWZF4C5" />
    </html>
  );
}

