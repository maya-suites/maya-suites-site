import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    qualities: [75, 100],
  },
  async redirects() {
    return [
      { source: "/instagram", destination: "/?utm_source=instagram&utm_medium=bio", permanent: false },
      { source: "/maps", destination: "/?utm_source=google-maps&utm_medium=fiche", permanent: false },
    ];
  },
};

export default nextConfig;
