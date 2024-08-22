/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "img.freepik.com",
      },
      {
        hostname: "images.ctfassets.net",
      },
      {
        hostname: "scontent-gig4-1.cdninstagram.com",
      },
      {
        hostname: "scontent-iad3-1.cdninstagram.com",
      },
      {
        hostname: "scontent-iad3-2.cdninstagram.com",
      },
      {
        hostname: "scontent.cdninstagram.com",
      },
      {
        hostname: "scontent-gig4-2.cdninstagram.com",
      },
      {
        hostname: "downloads.ctfassets.net",
      },
    ],
  },
  env: {
    INSTA_TOKEN: process.env.INSTA_TOKEN,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.child_process = false;
    }

    return config;
  },
};

export default nextConfig;
