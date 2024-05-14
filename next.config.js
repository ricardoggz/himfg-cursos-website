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
      '/investigacion' : { page : '/investigacion'},
      '/general' : { page : '/general'},
      '/medica' : { page : '/medica'},
      '/administracion' : { page : '/administracion'},
      '/planeacion' : { page : '/planeacion'},
      '/register': { page: '/register'},
      '/payment': { page : '/payment'},
      '/userlogin': { page: '/userlogin'},
      '/pdf' : { page: '/pdf' },
      '/profile': { page: '/profile'},
      '/test/[...id]' : { page: '/test/[...id]'},
      '/direccion/[...id]': { page : '/direccion/[...id]'},
      '/voluntariado' : { page: '/voluntariado'},
      '/especialidades': {page: '/especialidades'},
      '/el-instituto-y-su-historia': {page: '/el-instituto-y-su-historia'},
      '/inscripcion-pre-y-posgrado/pregrado' : {page: '/inscripcion-pre-y-posgrado/pregrado'},
      '/inscripcion-pre-y-posgrado/posgrado' : {page: '/inscripcion-pre-y-posgrado/posgrado'},
      '/inscripcion-pre-y-posgrado/posgrado' : {page: '/inscripcion-pre-y-posgrado/internos'}
    }
  },
  env:{
    BASE_URL_API: 'https://courses-rest-api-hospital.vercel.app/'
  }
}

module.exports = nextConfig
