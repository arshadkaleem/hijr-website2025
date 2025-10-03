// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fu.mokshasolutions.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://backend.hijr.in/api/:path*',
      },
    ]
  },
};

export default nextConfig;
