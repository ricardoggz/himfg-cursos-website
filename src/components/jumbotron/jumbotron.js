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
                url:'https://himfg.edu.mx/archivos/banners/banner-2.webp',
                link:'/'
            },
            {
                url:'https://himfg.edu.mx/archivos/banners/banner-1.webp',
                link:'https://himfg.edu.mx/archivos/documentos/comunicados/comunicado-1.pdf'
            },
            {
                url:'https://archivos.him.edu.mx/Banner_Mesa_de_trabajo_1.webp',
                link:'https://archivos.him.edu.mx/ENTREVISTAS_2024-2025_SUBS-BUENO.pdf'
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