/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,

  experimental: {
    serverActions: false,
    optimizePackageImports: ["icons"],
    webVitalsAttribution: ["CLS", "LCP"],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/admin/dashboard",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
