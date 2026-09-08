import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
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
      {
        source: "/villa/:path*",
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
