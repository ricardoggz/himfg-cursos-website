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
      '/cursos2025/[...id]': { page : '/cursos2025/[...id]'},
      '/registro' : { page: '/registro'},
      '/registro-exitoso': {page: '/registro-exitoso'}
    }
  },
  env:{
    BASE_URL_API: 'https://courses-rest-api-hospital.vercel.app/',
    ID_ANALYTICS: 'G-QP35VQZP0G'
  }
}

module.exports = nextConfig
