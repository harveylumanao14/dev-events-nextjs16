import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  /* config options here */
  experimental: {
    turbopackFileSystemCacheForDev: true
  },
  allowedDevOrigins: ['192.168.20.5'],
};

export default nextConfig;
