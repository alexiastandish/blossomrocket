import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/company-stores",
        destination: "/solutions/company-stores",
        permanent: true,
      },
      {
        source: "/services/company-storefronts",
        destination: "/solutions/company-stores",
        permanent: true,
      },
      {
        source: "/services/merchandise-and-promotional-products",
        destination: "/solutions/merchandise-and-promotional-products",
        permanent: true,
      },
      {
        source: "/services/swag-storefronts",
        destination: "/solutions/swag-storefronts",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
