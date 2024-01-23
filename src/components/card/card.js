import { useContext, memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/helpers'
import styles from './card.module.css'
import { openModal } from './openModal'
import { UserContext, CourseContext } from '@/contexts'
import { setItem, getItem, removeItem } from "@/helpers"

const Card = ({course})=>{
    const { user }= useContext(UserContext)
    const { login } = useContext(CourseContext)
    return (
        <article className={`${styles.cardWrapper} boxShadow`}>
            <figure className={styles.cardImage}>
            <Image
                src={
                    !course.course_image ?
                    'https://res.cloudinary.com/diuxbqmn5/image/upload/v1677114497/himfg-logo_ewzx59.webp'
                    :
                    course.course_image
                }
                loading='lazy'
                alt='No se pudo cargar la imágen'
                width={1000}
                height={150}
                quality
            />
            </figure>
            <h3 className={styles.courseTitle}>{course.course_name}</h3>
            <span>Inicia: {formatDate(course.course_start_date)}</span>
            <span>Termina: {formatDate(course.course_finish_date)}</span>
            { !course.course_price ? null : 
              <>
                <span>
                    Costo para externos al HIMFG: ${course.course_price}mxn
                </span>
                <span>
                    Gratuito para personal del HIMFG y estudiantes
                </span>
              </>
            }
            <div className={styles.cardButtons}>
                {
                    !course.course_pdf ?
                    <span className={styles.disabledLink}>
                        Programa no disponible
                    </span>
                    :
                    <button
                    onClick={()=>openModal({course})}
                    className={styles.cardButton}
                    >
                        Programa
                    </button>
                }
                {
                    course.course_price && !user?
                    <Link
                        href='/register'
                        className={styles.cardButtonInscription}
                        onClick={()=> login(course)}
                    >
                        Inscripción
                    </Link>
                    :
                    null
                }
                {
                    course.course_price && user
                    ?
                    <Link
                        href='/payment'
                        className={styles.cardButtonInscription}
                        onClick={()=>{
                            if(course.modality_id === 1){
                                setItem('modality', 'presencial')
                            }
                            if(course.modality_id === 2){
                                setItem('modality', 'en_linea')
                            }
                            if(course.modality_id === 3){
                                setItem('modality', 'en_linea')
                            }
                            return login(course)
                        }}
                    >
                        Comprar
                    </Link>
                    :
                    null
                }
            </div>
        </article>
    )
}
export default memo(Card)