import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "buypalletjacks.vercel.app" }],
        destination: "https://www.buypalletjacks.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
