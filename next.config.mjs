/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Remote images allowed
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'icons8.com',
      },
    ],

     remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
    ],


  },
};

export default nextConfig;