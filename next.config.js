/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    unoptimized : true
  },
  exportPathMap(){
    return {
      '/': { page : '/'},
    }
  },
  env:{
    BASE_URL_API: process.env.BASE_URL_API
  }
}

module.exports = nextConfig
