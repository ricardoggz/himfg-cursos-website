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
      '/video/[...id]': { page : '/video/[...id]'},
      '/ensenanza' : { page: '/ensenanza'},
      '/ensenanza/offer' : { page : '/ensenanza/offer'},
      '/register': { page: '/register'},
      '/payment': { page : '/payment'},
      '/userlogin': { page: '/userlogin'},
      '/pdf' : { page: '/pdf' },
      '/profile': { page: '/profile'}
    }
  },
  env:{
    BASE_URL_API: 'http://localhost:3030/'
  }
}

module.exports = nextConfig
