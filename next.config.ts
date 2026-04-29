import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/amenities",
        destination: "/villa",
        permanent: true,
      },
    ];
  },
  /** Browsers still request `/favicon.ico` by default; we serve the same asset as `public/logo.png`. */
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/logo.png" }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
