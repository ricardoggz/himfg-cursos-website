import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import styles from './jumbotron.module.css'

export const Jumbotron =()=>{
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            autoplay:true,
            speed: 2000,
            autoplaySpeed: 3000,
        }
        const images = [
            {
                url:'https://himfg.edu.mx/archivos/banners/CYTOTRON.webp',
                link:'/'
            },
            {
                url:'https://himfg.edu.mx/archivos/banners/CYTOTRON-02.webp',
                link:'/galeria'
            },
            {
                url:'https://himfg.edu.mx/archivos/banners/banner-2.jpeg',
                link:'https://himfg.edu.mx/archivos/documentos/comunicados/aceptados-2025-2026.pdf'
            },
            {
                url:'https://himfg.edu.mx/archivos/banners/banner-8.webp',
                link:'/'
            },
            {
                url:'https://himfg.edu.mx/archivos/banners/banner-2.webp',
                link:'/'
            },
            {
                url:'https://himfg.edu.mx/archivos/banners/banner-1.webp',
                link:'https://himfg.edu.mx/archivos/documentos/comunicados/comunicado-1.pdf'
            },
        ]
          return (
            <Slider {...settings}>
                {
                    images.map((image, index)=>(
                        <div
                        key={index}
                        className={styles.jumbotronWrapper}
                        >
                            <a href={`${image.link}`}>
                                <img
                                    src={image.url}
                                    alt={`Imagen`}
                                    className={styles.jumbotronImage}
                                />
                            </a>
                        </div>
                    ))
                }
            </Slider>
          );
}