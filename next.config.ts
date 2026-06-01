import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: "export",
  allowedDevOrigins: ['192.168.200.42'],
 
  images: {
    qualities: [75, 95, 100],
    unoptimized: true,
  },
};


export default nextConfig;
