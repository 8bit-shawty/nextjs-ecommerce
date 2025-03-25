import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb", // Increase to desired limit
    },
  },
  eslint:{
    ignoreDuringBuilds:true
  }
};

export default nextConfig;
