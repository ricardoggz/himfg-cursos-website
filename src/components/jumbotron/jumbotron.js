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
                url:'https://himfg.edu.mx/archivos/banners/declara-net.jpeg',
                link:'https://www.youtube.com/watch?v=bIEgOvVFNA4'
            },
            {
                url:'https://himfg.edu.mx/archivos/banners/dia-del-nino.webp',
                link:'/dia-del-nino'
            },
            {
                url:'https://himfg.edu.mx/archivos/banners/2.webp',
                link:'/galeria'
            },
            {
                url: 'https://himfg.edu.mx/archivos/banners/BANNER-1.1.webp',
                link:'/'
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