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
                url: 'https://archivos.him.edu.mx/BannerResidentes-1.webp',
                link:'/'
            },
            /*{
                url: 'https://archivos.him.edu.mx/Calor-01.webp',
                link:'/'
            },
            {
                url:'https://archivos.him.edu.mx/Calor2-01.webp',
                link:'/'
            },
            {
                url:'https://archivos.him.edu.mx/banner-6.webp',
                link:'https://archivos.him.edu.mx/resultados-fondos-fet-2025.pdf'
            },
            {
                url: 'https://archivos.him.edu.mx/banner-4.webp',
                link:'https://archivos.him.edu.mx/reunion-anual.jpg'
            },
            {
                url: 'https://archivos.him.edu.mx/banner-5.png',
                link:'/'
            },*/
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