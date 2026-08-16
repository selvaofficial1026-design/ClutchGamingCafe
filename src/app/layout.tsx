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
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clutchgamingcafe.in"),
  title: {
    default: "Clutch Gaming Cafe | Premier Gaming Lounge - Trichy",
    template: "%s | Clutch Gaming Cafe",
  },
  description:
    "Trichy's premier gaming lounge. High-FPS RTX gaming rigs, 240Hz Fast-IPS monitors, PS5 4K OLED lounge, ultra-low ping fiber at flat ₹80/hour. 1st Floor Above KFC, Samayapuram, Trichy.",
  keywords: [
    "Clutch Gaming Cafe",
    "Gaming Cafe Trichy",
    "PS5 Gaming Lounge Trichy",
    "Gaming Arena Samayapuram",
    "240Hz PC Gaming Trichy",
    "FIFA PS5 Gaming Trichy",
    "Esports Cafe Tiruchirappalli",
  ],
  authors: [{ name: "Clutch Gaming Cafe" }],
  creator: "Clutch Gaming Cafe",
  publisher: "Clutch Gaming Cafe",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://clutchgamingcafe.in",
    siteName: "Clutch Gaming Cafe",
    title: "Clutch Gaming Cafe | Premier Gaming Lounge - Trichy",
    description:
      "Play on high-FPS RTX PC rigs, 240Hz monitors, and PS5 4K OLED lounge with ultra-low ping fiber at just ₹80/hr in Trichy.",
    images: [
      {
        url: "/images/hero_real_arena.jpg",
        width: 1200,
        height: 630,
        alt: "Clutch Gaming Cafe Trichy Arena",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clutch Gaming Cafe | Premier Gaming Lounge - Trichy",
    description:
      "Play on high-FPS RTX PC rigs, 240Hz monitors, and PS5 4K OLED lounge with ultra-low ping fiber at just ₹80/hr in Trichy.",
    images: ["/images/hero_real_arena.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2A1D1D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  // Schema.org Structured Data for LocalBusiness / Entertainment
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    name: "Clutch Gaming Cafe",
    image: "https://clutchgamingcafe.in/images/hero_real_arena.jpg",
    telephone: "+919345469023",
    priceRange: "₹80/hr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1st Floor, No. 21/B, Above KFC, Trichy-Chennai Highway, Samayapuram",
      addressLocality: "Tiruchirappalli",
      addressRegion: "Tamil Nadu",
      postalCode: "621112",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "10.9255",
      longitude: "78.7415",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "23:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/clutch.trichy/",
      "https://wa.me/919345469023",
    ],
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans relative overflow-x-hidden">
        <div className="grain-overlay" aria-hidden="true" />
        <div className="aura-container" aria-hidden="true">
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
