import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.200.42'],
  images: {
    qualities: [75, 95, 100],
  },
};


export default nextConfig;
