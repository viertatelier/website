/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  scope: '/',
  reloadOnOnline: false,
  runtimeCaching: require('./cache.js'),
  subdomainPrefix: '',
});

const path = require('path');

const BASE_PATH = '';
const BASE_URL = '/';
const BASE_PREFIX = `${BASE_PATH}/`;

const settings = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: false, // Aviso: isso será removido em futuras versões.
  basePath: BASE_PATH,
  publicRuntimeConfig: {},
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    INSTA_TOKEN: process.env.INSTA_TOKEN,
    BASE_PREFIX,
    BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = process.env.NODE_ENV === 'development' ? settings : withPWA(settings);
