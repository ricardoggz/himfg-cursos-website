import { memo } from 'react'
import Image from 'next/image'
import styles from './card.module.css'
import HIMFG80 from '../../assets/banner-80.webp'

const Card = ({image, title})=>{
    console.log('render')
    return (
        <article className={styles.cardWrapper}>
            <figure className={styles.cardImage}>
                {!image ?
                <Image
                    src={HIMFG80}
                    loading='lazy'
                    alt='No se pudo cargar la imágen'
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