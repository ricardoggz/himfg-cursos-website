import { memo } from 'react'
import Image from 'next/image'
import styles from './card.module.css'

const Card = ({image, title, showModal, children, startDate, finishDate})=>{
   const formatDate = (initDate)=> {
    const optionDate = {day:"2-digit", month:'long', year:'numeric'}
    let lastDate = new Date(initDate)
    lastDate.setMinutes(lastDate.getMinutes() + lastDate.getTimezoneOffset())
    return lastDate.toLocaleDateString('es-MX', optionDate)
   }
    return (
        <article className={`${styles.cardWrapper} boxShadow`} onClick={showModal}>
            <figure className={styles.cardImage}>
            <Image
                    src={
                    !image ?
                    'https://res.cloudinary.com/diuxbqmn5/image/upload/v1677114497/himfg-logo_ewzx59.webp'
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
                <h2 className={styles.courseTitle}>{title}</h2>
                {!startDate?
                    <></>
                    :
                    <>
                    <span>Inicia: {formatDate(startDate)}</span>
                    <span>Termina: {formatDate(finishDate)}</span>
                    </>
                }
            </div>
            <div className={styles.cardButtons}>
                {children}
            </div>
           
        </article>
    )
}
export default memo(Card)