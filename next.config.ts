import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Github pages config
  basePath: "/portfolio-v3",
  output: "export",
  reactStrictMode: true,

  // Hostname config
  images: {
    // Github pages only
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
};

export default nextConfig;
