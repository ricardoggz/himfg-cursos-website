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
                url: 'https://archivos.him.edu.mx/banner-3.webp',
                link:'/'
            },
            {
                url: 'https://archivos.him.edu.mx/banner-4.jpg',
                link:'https://archivos.him.edu.mx/reunion-anual.jpg'
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