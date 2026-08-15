import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clutch Gaming Cafe | Premier Gaming Lounge - Trichy",
  description: "Trichy's premier gaming lounge. High-FPS RTX gaming rigs, 240Hz monitors, PS5 4K lounge, ultra-low ping fiber, and gourmet cafe snacks at just ₹80/hour.",
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans relative overflow-x-hidden">
        <div className="grain-overlay" />
        <div className="aura-container">
          <div className="aura-blob aura-blob-1" />
          <div className="aura-blob aura-blob-2" />
        </div>
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
