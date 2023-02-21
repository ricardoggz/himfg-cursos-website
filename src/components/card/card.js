import { memo } from 'react'
import 'animate.css';
import Image from 'next/image'
import styles from './card.module.css'

const Card = ({image, title, showModal, children})=>{
   return (
        <article className={styles.cardWrapper} onClick={showModal}>
            <figure className={styles.cardImage}>
            <Image
                    src={
                    !image ?
                    'https://res.cloudinary.com/diuxbqmn5/image/upload/v1676678760/banner-80_zhlxd1.webp'
                    :
                    image
                    }
                    loading='lazy'
                    alt='No se pudo cargar la imágen'
                    width={1000}
                    height={150}
                    quality
                />
            </figure>
            <div className={styles.cardTitles}>
                <p>{title}</p>
            </div>
            <div className={styles.cardButtons}>
                {children}
            </div>
           
        </article>
    )
}
export default memo(Card)