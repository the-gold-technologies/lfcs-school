import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
