import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // allow specific remote image domains or patterns
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        // port: "",
        // pathname: "/photos/**",
        // search: "",
      },
    ],
  },
};

export default nextConfig;
