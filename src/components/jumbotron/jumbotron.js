import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'

export const Jumbotron =()=>{
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
        }
        const images = [
            'https://framework-gb.cdn.gob.mx/landing/img/1362X312.png',
            'https://framework-gb.cdn.gob.mx/landing/img/clanding2.png',
            'https://framework-gb.cdn.gob.mx/landing/img/clanding3.png'
        ]
          return (
            <Slider {...settings}>
                {
                    images.map((image, index)=>(
                        <div key={index}>
                            <img
                            src={image}
                            alt={`Imagen`}
                            width="100%" height="100%"
                            />
                        </div>
                    ))
                }
            </Slider>
          );
}