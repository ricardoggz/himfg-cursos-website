import { useState, useMemo } from 'react'
import Image from 'next/image'
import { months } from './months'
import { Loader, Title } from '../../components'
import styles from './courses.module.css'
import { useGetCourses } from './useGetCourses'
import himfgImage from '../../assets/banner-80.webp'

export const Courses = ()=>{
    const [selectedMonth, setSelectedMonth]= useState(months[0])
    const [courses, isLoading]= useGetCourses()
    let filteredCourses;
    if(courses) filteredCourses = useMemo(()=>{
        return courses.filter((course)=> course.month_id === selectedMonth.id)
    })
    //const [filteredCourses, getFilteredCourses] = useFilterCourses(courses.data)
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
                        <article key={i}>
                            <figure>
                                <Image
                                src={himfgImage}
                                alt='HIMFG-80 aniversario'
                                loading='lazy'
                                />
                            </figure>
                            <div className={styles.courseDescription}>
                                <p>
                                    {course.course_name}
                                </p>
                            </div>
                        </article>
                    ))
                }
                </div>
            </div>
            :<Loader />}
        </section>
    )
}