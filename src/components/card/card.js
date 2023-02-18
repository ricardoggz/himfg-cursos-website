import { memo } from 'react'
import Image from 'next/image'
import styles from './card.module.css'
import HIMFG80 from '../../assets/banner-80.webp'

const Card = ({image, title})=>{
    return (
        <article className={styles.cardWrapper}>
            <figure className={styles.cardImage}>
                {!image ?
                <Image
                    src={'https://res.cloudinary.com/diuxbqmn5/image/upload/v1676678760/banner-80_zhlxd1.webp'}
                    loading='lazy'
                    alt='No se pudo cargar la imágen'
                    width={1000}
                    height={1000}
                    quality
                />
                :
                <img
                    src={image}
                    loading='lazy'
                    alt='No se pudo cargar la imágen'
                />
                }
            </figure>
            <div className={styles.cardTitles}>
                <p>{title}</p>
            </div>
        </article>
    )
}
export default memo(Card)