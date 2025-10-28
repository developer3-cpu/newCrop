import type { NextConfig } from "next";

const basePath = "/digitrans/apps/cropknowledge";

const nextConfig: NextConfig = {
  basePath,
  // Output compiled assets to default '.next' directory
  distDir: ".next",
  compress: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  async redirects() {
    return [
      // Redirect root to the configured base path so the app launches there.
      // Disable basePath auto-prefixing to avoid duplicated segments.
      { source: "/", destination: basePath, permanent: false, basePath: false },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      // Define sources without basePath; Next will apply it automatically.
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/Fruits/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/vegitables/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:path*",
        headers: [
          // HTML and app shell should be revalidated when changed
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
    ];
  },
  eslint: {
    // Do not fail production builds on ESLint warnings/errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
