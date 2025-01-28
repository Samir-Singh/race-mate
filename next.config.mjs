/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ts-production.imgix.net",
      },
    ],
  },
};

export default nextConfig;
