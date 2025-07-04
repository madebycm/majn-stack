/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./env.js";

/** @type {import("next").NextConfig} */
const config = {
  // Disable all caching in development
  ...(process.env.NODE_ENV === 'development' && {
    headers: async () => [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
        ],
      },
    ],
    // Disable build caching
    cacheMaxMemorySize: 0,
    // Force dynamic rendering
    experimental: {
      ppr: false,
    },
  }),
};

export default config;
