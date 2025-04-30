import { Title } from '@/components'
import styles from './index.module.css'
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

export default function Galeria() {
    const images = [
        {
            original: "https://himfg.edu.mx/galeria/1.JPG",
            thumbnail: "https://himfg.edu.mx/galeria/1.JPG",
        },
        {
            original: "https://himfg.edu.mx/galeria/2.JPG",
            thumbnail: "https://himfg.edu.mx/galeria/2.JPG",
        },
        {
            original: "https://himfg.edu.mx/galeria/3.JPG",
            thumbnail: "https://himfg.edu.mx/galeria/3.JPG",
        },
        {
            original: "https://himfg.edu.mx/galeria/5.JPG",
            thumbnail: "https://himfg.edu.mx/galeria/5.JPG",
        },
        {
            original: "https://himfg.edu.mx/galeria/6.JPG",
            thumbnail: "https://himfg.edu.mx/galeria/6.JPG",
        },
        {
            original: "https://himfg.edu.mx/galeria/7.JPG",
            thumbnail: "https://himfg.edu.mx/galeria/7.JPG",
        },
        {
            original: "https://himfg.edu.mx/galeria/8.JPG",
            thumbnail: "https://himfg.edu.mx/galeria/8.JPG",
        },
    ]
    return (
        <section className={styles.galleryContainer}>
            <Title>Chiquitúnel de la CIENCIA</Title>
            <ImageGallery
                items={images}
                showThumbnails
                loading='lazy'
            />
        </section>
    )
}