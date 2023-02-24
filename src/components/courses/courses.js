import { useState, useMemo } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { months } from './months'
import styles from './courses.module.css'
import { useGetCourses } from './useGetCourses'
import { Loader, Title } from '../../components'
import Card from '../../components/card/card'

const MySwal = withReactContent(Swal)

export const Courses = ()=>{
    const showModal = (content)=>{
        MySwal.fire({
            html:content,
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
    const [selectedMonth, setSelectedMonth]= useState(months[0])
    const [courses, isLoading]= useGetCourses()
    let filteredCourses;
    if(courses) filteredCourses = useMemo(()=>{
        return courses.filter((course)=> course.month_id === selectedMonth.id)
    })
    return (
        <section className={styles.coursesWrapper}>
                <ul className={`${styles.monthBar} flexContainer`}>
                    {months.map((month, i)=>(
                        <li key={i} onClick={()=> setSelectedMonth(month)}>
                            <a href={`#cursos-2023-${selectedMonth.name}`}>
                                {month.name}
                            </a>
                        </li>
                    ))}
                </ul>
            {!isLoading?
            <div id={`cursos-2023-${selectedMonth.name}`}>
                <Title>{selectedMonth.name}</Title>
                <div className={`${styles.coursesGrid} flexContainer`}>
                {
                    filteredCourses.map((course, i)=>{
                        return (
                            <Card
                                key={i}
                                image={course.course_image}
                                title={course.course_name}
                                showModal={()=> showModal(
                                    <Card
                                        key={i}
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