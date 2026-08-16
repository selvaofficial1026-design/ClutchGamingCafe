import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,

  // Strips console.log in production to keep mobile JS thread clean
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Tree-shakes large icon and animation libraries for faster mobile parsing
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  images: {
    // Next-Gen formats: loads up to 40% faster on mobile networks
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
