import { useState } from 'react'
import { months } from './consts'
import { useFetch } from '../../hooks'
import styles from './courses.module.css'
import Card from '../../components/card/card'
import { Loader, Title, GridContainer } from '../../components'

export const Courses = ()=>{
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
                                course={course}
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