import { useState, useMemo } from 'react'
import Link from 'next/link'
import 'animate.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { months } from './consts'
import styles from './courses.module.css'
import { Loader, Title } from '../../components'
import Card from '../../components/card/card'
import { useFetch } from '../../hooks'

const CardModal = withReactContent(Swal)

export const Courses = ()=>{
    const [selectedMonth, setSelectedMonth]= useState(months[0])
    const [loading, data]= useFetch({
        url: `${process.env.BASE_URL_API}api/courses/all-courses`
    })
    let filteredCourses;
    if(data) filteredCourses = data.data.filter((course)=> course.month_id === selectedMonth.id)
    return (
        <section className={styles.coursesWrapper}>
                <ul className={`${styles.monthBar} flexContainer`}>
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
                <div className={`${styles.coursesGrid} flexContainer`}>
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
                                        <a
                                            href={course.course_pdf}
                                            target={'_blank'}
                                        >
                                            Ver programa
                                        </a>
                                        <Link href='/register'>
                                            Inscripción online
                                        </Link>
                                        {
                                        !course.course_vimeo_folder && course.course_live_video
                                        ? <></>
                                        :<Link
                                            href={
                                                `/${course.course_name}/${course.course_vimeo_folder}/${course.course_live_video}`
                                                }
                                        >
                                            Ver video
                                        </Link>}
                                        </>
                                        }
                                    </Card>
                                )}
                            />
                        )
                    })
                }
                </div>
            </div>
            :<Loader />}
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