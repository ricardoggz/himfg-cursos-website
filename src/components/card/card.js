import { memo } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import 'animate.css';
import Image from 'next/image'
import styles from './card.module.css'

const MySwal = withReactContent(Swal)

const Card = ({image, title})=>{
    const showModalInfo = ()=>{
        MySwal.fire({
            html: 
            <article className={styles.cardWrapper}>
            <figure className={styles.cardImage}>
            <Image
                src={!image ?'https://res.cloudinary.com/diuxbqmn5/image/upload/v1676678760/banner-80_zhlxd1.webp'
                :image
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
            </article>,
            width: 800,
            showConfirmButton:false,
            showClass: {
                popup: 'animate__animated animate__fadeIn'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOut'
              }
        })
    }
   return (
        <article className={styles.cardWrapper} onClick={showModalInfo}>
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
        </article>
    )
}
export default memo(Card)