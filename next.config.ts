// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       // Prevent fs module from being included in the client bundle
//       config.resolve.fallback = { fs: false };
//     }
//     return config;
//   },
//   images: {
//     domains: [],
//   },
//   typescript: {
//     ignoreBuildErrors: false,
//   }
// }

// module.exports = nextConfig

import { NextConfig } from 'next'; // Optional: for better typing support

const nextConfig: NextConfig = {
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      // Prevent fs module from being included in the client bundle
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
  images: {
    domains: [],
  },
  typescript: {
    ignoreBuildErrors: false,
  }
};

export default nextConfig;
