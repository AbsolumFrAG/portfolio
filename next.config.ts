import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  output: "standalone",
  experimental: {
    reactCompiler: true,
    optimizeCss: true,
    cssChunking: "loose",
  },
};

export default nextConfig;
