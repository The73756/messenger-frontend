/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://95.163.240.197/api/:path*",
      },
    ];
  }
};

module.exports = nextConfig;