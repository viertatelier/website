/** @type {import('next').NextConfig} */


const BASE_PATH = '';
const BASE_URL = '/';
const BASE_PREFIX = `${BASE_PATH}/`;

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    INSTA_TOKEN: process.env.INSTA_TOKEN,
    BASE_PREFIX,
    BASE_URL,
  }
};

export default nextConfig;
