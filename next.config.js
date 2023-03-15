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
      '/video': { page : '/video/[...index]'}
    }
  },
  env:{
    BASE_URL_API: 'https://courses-rest-api-hospital.vercel.app/'
  }
}

module.exports = nextConfig
