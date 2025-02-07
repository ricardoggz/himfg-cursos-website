import { Title } from '@/components'
import styles from './index.module.css'
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

export default function Galeria() {
    const images = [
        {
            original: "https://himfg.edu.mx/galeria/1.jpg",
            thumbnail: "https://himfg.edu.mx/galeria/1.jpg",
        },
        {
            original: "https://himfg.edu.mx/galeria/2.jpg",
            thumbnail: "https://himfg.edu.mx/galeria/2.jpg",
        },
        {
            original: "https://himfg.edu.mx/galeria/3.jpg",
            thumbnail: "https://himfg.edu.mx/galeria/3.jpg",
        },
        {
            original: "https://himfg.edu.mx/galeria/5.jpg",
            thumbnail: "https://himfg.edu.mx/galeria/5.jpg",
        },
        {
            original: "https://himfg.edu.mx/galeria/6.jpg",
            thumbnail: "https://himfg.edu.mx/galeria/6.jpg",
        },
        {
            original: "https://himfg.edu.mx/galeria/7.jpg",
            thumbnail: "https://himfg.edu.mx/galeria/7.jpg",
        },
        {
            original: "https://himfg.edu.mx/galeria/8.jpg",
            thumbnail: "https://himfg.edu.mx/galeria/8.jpg",
        },
    ]
    return (
        <section className={styles.galleryContainer}>
            <Title>Inicia Curso de Pre - Residencia 2025</Title>
            <ImageGallery
                items={images}
                showThumbnails
                loading='lazy'
            />
        </section>
    )
}