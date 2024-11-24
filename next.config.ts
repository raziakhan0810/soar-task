import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard', 
        permanent: true, 
      },
    ]
  },

  images: {
    domains: ['via.placeholder.com'],  // Add external image domain here
  },
  
};

export default nextConfig;
