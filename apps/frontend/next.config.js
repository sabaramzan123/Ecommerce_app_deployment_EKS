/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL || "http://gateway.ecommerce.svc.cluster.local",
  },
};

module.exports = nextConfig;