import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Satisfy } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const satisfy = Satisfy({
  weight: "400",
  variable: "--font-satisfy",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Little Flower Group of Schools",
  description: "Rooted in Values. Rising with Excellence.",
};

// The site is designed for light mode only; stop mobile browsers (Chrome,
// Samsung Internet) from force-darkening it, which hides the header logo.
export const viewport: Viewport = {
  colorScheme: "only light",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${satisfy.variable} antialiased`}>
      <body className="font-sans min-h-screen flex flex-col bg-white text-gray-900">
        <SmoothScroll>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
