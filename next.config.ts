import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["rickandmortyapi.com"], // Add the allowed domains here
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
