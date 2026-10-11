/** @type {import('next').NextConfig} */
const nextConfig = {
  // Non-Negotiable Law 1: Must execute under path-routed sub-directory /matrimony
  basePath: '/matrimony',
  reactStrictMode: true,
  poweredByHeader: false,
  output: process.env.DOCKER_BUILD ? 'standalone' : undefined,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/matrimony',
        basePath: false,
        permanent: false,
      },
    ];
  },
  async headers() {

    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
