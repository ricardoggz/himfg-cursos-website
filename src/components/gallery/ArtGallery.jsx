import { useState } from "react"
import { images } from "./consts"
import styles from './artgallery.module.css'
import { Gallery } from "react-grid-gallery"

export const ArtGallery = ()=>{
    const [currentImage, setCurrentImage] = useState(0);
    const openLightbox = (index) => {
        setCurrentImage(index);
      };
    
      const closeLightbox = () => {
        setCurrentImage(0);
      };
    return(
        <div className='flexContainer'>
            <Gallery
                images={images} enableImageSelection={false}
                onClick={openLightbox}
            />
            {currentImage !== 0 && (
                <div className="lightbox">
                <button onClick={closeLightbox}>Cerrar</button>
                <img src={images[currentImage].src} alt={images[currentImage].caption} />
                <p>{images[currentImage].caption}</p>
                </div>
            )}
        </div>
    )
}