import { useContext, memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/helpers'
import styles from './card.module.css'
import { openModal } from './openModal'
import { UserContext, CourseContext } from '@/contexts'

const Card = ({course})=>{
    const { user }= useContext(UserContext)
    const { login } = useContext(CourseContext)
    return (
        <article className={`${styles.cardWrapper} boxShadow`}>
            <figure className={styles.cardImage}>
            <Image
                src={
                    !course.course_image ?
                    'https://res.cloudinary.com/diuxbqmn5/image/upload/v1676678760/banner-80_zhlxd1.webp'
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
            <span>Termina: {formatDate(course.course_start_date)}</span>
            <div className={styles.cardButtons}>
                <button
                    onClick={()=>openModal({course})}
                    className={styles.cardButton}
                >
                    Consultar detalles
                </button>
                {
                    !user ?
                    <Link
                        href='/register'
                        className={styles.cardButton}
                        onClick={()=> login(course)}
                    >
                        Inscripción
                    </Link>
                    :
                    null
                }
            </div>
        </article>
    )
}
export default memo(Card)