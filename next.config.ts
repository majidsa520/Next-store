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
      {
        protocol: "https",
        hostname: "yidoflkxvsmcnvqwpwcv.supabase.co",
        // port: "",
        // pathname: "/photos/**",
        // search: "",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;
