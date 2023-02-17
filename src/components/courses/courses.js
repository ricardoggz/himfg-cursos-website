import { useState, useMemo } from 'react'
import { months } from './months'
import styles from './courses.module.css'
import { useGetCourses } from './useGetCourses'
import { Loader, Title } from '../../components'
import Card from '../../components/card/card'

export const Courses = ()=>{
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
                    filteredCourses.map((course, i)=>(
                        <Card
                            key={i}
                            image={course.course_file}
                            title={course.course_name}
                        />
                    ))
                }
                </div>
            </div>
            :<Loader />}
        </section>
    )
}