import { memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Swal from 'sweetalert2'
import styles from './card.module.css'
import 'animate.css'
import withReactContent from 'sweetalert2-react-content'

const Card = ({ course }) => {
    const formatDate = (initDate) => {
        const optionDate = { day: "2-digit", month: 'long', year: 'numeric' }
        let lastDate = new Date(initDate)
        lastDate.setMinutes(lastDate.getMinutes() + lastDate.getTimezoneOffset())
        return lastDate.toLocaleDateString('es-MX', optionDate)
    }
    const addCourse = ()=>{
        return localStorage.setItem('course', JSON.stringify(course))
    }
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
            <span className={styles.courseTitle}>
                    <span>{course.course_name}</span>
            </span>       
            <ul className={styles.cardList}>
                <li>Inicia: {formatDate(course.course_start_date)}</li>
                <li>Termina: {formatDate(course.course_finish_date)}</li>
                {
                    !course.course_max_range ? null
                    :
                    <li>{course.course_max_range} cupos presenciales, en línea ilimitado</li>
                }
                {
                    course.modality_id === 1 ?
                    <li>Modalidad: presencial</li>
                    :
                    null
                }
                {
                    course.modality_id === 2 ?
                    <li>Modalidad: en línea</li>
                    :
                    null
                }
                {
                    course.modality_id === 3 ?
                    <li>Modalidad: híbrida</li>
                    :
                    null
                }
                {
                !course.course_price && course.course_price !==0 ? null
                :
                <li>
                    <span>Precio regular:</span><span className={styles.cardPrice}> ${course.course_price} mxn</span>
                </li>
                }
                {
                    !course.course_student_price ? null
                    :
                    <li>
                        <span>50% de descuento para estudiantes y personal del HIMFG</span>
                    </li>
                }
                {
                course.course_price && course.course_price ===0 ?
                <li className={styles.cardPrice}>Gratuito</li>
                :
                null
                }
            </ul>

            <div className={styles.cardButtons}>
                <button
                    onClick={!course.course_pdf ? null : () => showModal(course)}
                    className={!course.course_pdf ? styles.cardButtonDisabled : styles.cardButton}
                >
                    {!course.course_pdf ? 'Programa no disponible' : 'Ver programa'}
                </button>
                {
                    !course.course_able? null :
                        <Link
                        href='/registro'
                        className={styles.cardButton}
                        onClick={addCourse}
                        >
                            Inscripción
                        </Link>
                }
            </div>

        </article>
    )
}
const showModal = (course) => {
    const modal = withReactContent(Swal)
    return modal.fire({
        html: <div className={styles.cardWrapper}>
            <span>Programa:</span>
            <iframe
                src={course.course_pdf}
            />
            {
                !course.course_url ? null :
                    <Link
                        className={styles.cardButton}
                        href={`/cursos2025/[...id]`}
                        as={`/cursos2025/${course.course_url}`}
                    >
                        Ingresar al curso
                    </Link>
            }
        </div>,
        width: 800,
        heightAuto: true,
        showCloseButton: true,
        showConfirmButton: false,
        showClass: {
            popup: 'animate__animated animate__fadeIn'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOut'
        }
    })
}
export default memo(Card)