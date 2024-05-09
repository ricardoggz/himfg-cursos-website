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
            'https://archivos.him.edu.mx/banner-3.jpg',
            'https://archivos.him.edu.mx/banner-1.png',
            'https://archivos.him.edu.mx/banner-2.png',
        ]
          return (
            <Slider {...settings}>
                {
                    images.map((image, index)=>(
                        <div
                        key={index}
                        className={styles.jumbotronWrapper}
                        >
                            <img
                            src={image}
                            alt={`Imagen`}
                            className={styles.jumbotronImage}
                            />
                        </div>
                    ))
                }
            </Slider>
          );
}