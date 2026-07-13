import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/en",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/amenities",
        destination: "/residences",
        permanent: true,
      },
      {
        source: "/villa",
        destination: "/residences/concept-1",
        permanent: true,
      },
    ];
  },
  /** Browsers still request `/favicon.ico`; we serve `/logo-final.png`. */
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/logo-final.png" }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "a0.muscache.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
