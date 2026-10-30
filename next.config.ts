import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Content images are uploaded through the CMS to Cloudinary
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "/dpa93copz/**" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  experimental: {
    serverActions: {
      // Careers form accepts a CV up to 5 MB (MAX_CV_BYTES); leave room for the other fields
      bodySizeLimit: "6mb",
    },
  },
  async redirects() {
    return [
      // Many apps encode "&" as "%26" when sharing links; send those to the real page.
      {
        source: "/news-%26-events",
        destination: "/news-&-events",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
