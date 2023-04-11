import { useState, useContext } from 'react'
import Link from 'next/link'
import 'animate.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { months } from './consts'
import styles from './courses.module.css'
import { Loader, Title, GridContainer } from '../../components'
import Card from '../../components/card/card'
import { useFetch } from '../../hooks'
import { UserContext } from '../../contexts'

const CardModal = withReactContent(Swal)

export const Courses = ()=>{
    const {user} = useContext(UserContext)
    const [selectedMonth, setSelectedMonth]= useState(months[new Date().getMonth()])
    const [loading, data]= useFetch({
        url: `${process.env.BASE_URL_API}api/courses/all-courses`
    })
    let filteredCourses;
    if(data) filteredCourses = data.data.filter((course)=> course.month_id === selectedMonth.id)
    return (
        <section className={styles.coursesWrapper}>
                <ul className={`${styles.monthBar} flexContainer boxShadow`}>
                    {months.map((month)=>(
                        <li key={month.id} onClick={()=> setSelectedMonth(month)}>
                            <a href={`#cursos-2023-${selectedMonth.name}`}>
                                {month.name}
                            </a>
                        </li>
                    ))}
                </ul>
            {!loading?
            <div id={`cursos-2023-${selectedMonth.name}`}>
                <Title>{selectedMonth.name}</Title>
                <GridContainer>
                {
                    filteredCourses.map((course)=>{
                        return (
                            <Card
                                key={course.course_id}
                                image={course.course_image}
                                title={course.course_name}
                                showModal={()=> showModal(
                                    <Card
                                        key={course.course_id}
                                        image={course.course_image}
                                        title={course.course_name}
                                        startDate={course.course_start_date}
                                        finishDate={course.course_finish_date}
                                    >
                                        {
                                        !course.course_pdf ?
                                        <></>
                                        :
                                        <>
                                            <button
                                                onClick={()=>{
                                                    showModal(
                                                        <>
                                                        {
                                                        !course.course_vimeo_folder?
                                                        <></>
                                                        :
                                                        <div className={styles.modalOptions}>
                                                            <iframe 
                                                                src={course.course_pdf}
                                                            />
                                                            <Link
                                                            href={`/video/[...id]`}
                                                            as ={`/video/${course.course_name}/${course.course_vimeo_folder}/${course.course_live_video}`}
                                                            >
                                                            Ingresar con contraseña
                                                            </Link>
                                                            {
                                                            user
                                                            ?
                                                            <></>
                                                            :
                                                            <Link
                                                                href={'/register'}
                                                                onClick={()=>{
                                                                    localStorage.setItem('course', JSON.stringify({
                                                                        course: course.course_name,
                                                                        price: course.course_price,
                                                                        folder: course.course_vimeo_folder,
                                                                        liveVideo: course.course_live_video
                                                                    }))
                                                                }}
                                                            >
                                                                Inscripción online
                                                            </Link>
                                                            }
                                                        </div>
                                                    }
                                                </>
                                                )
                                            }}
                                            >
                                            Ver programa
                                            </button>
                                        </>
                                        }
                                    </Card>
                                )}
                            />
                        )
                    })
                }
                </GridContainer>
            </div>
            :<Loader message='Cargando oferta académica'/>}
            </section>   
    )
}

const showModal = (content)=>{
    CardModal.fire({
        html:content,
        width: 800,
        showCloseButton:true,
        showConfirmButton:false,
        showClass: {
            popup: 'animate__animated animate__fadeIn'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOut'
          }
    })
}