import { useState } from 'react'
import Image from 'next/image'
import { months } from './months'
import styles from './courses.module.css'
import { useGetCourses } from './useGetCourses'
import { useFilterCourses } from './useFilterCourses'
import himfgImage from '../../assets/banner-80.webp'

export const Courses = ()=>{
    const [selectedMonth, setSelectedMonth]= useState(months[0])
    const [courses]= useGetCourses()
    let filteredCourses;
    if(courses) filteredCourses = courses.data.filter((course)=> course.month_id === selectedMonth.id)
    //const [filteredCourses, getFilteredCourses] = useFilterCourses(courses.data)
    return (
        <section className={styles.coursesWrapper}>
                <ul className={styles.monthBar}>
                    {months.map((month, i)=>(
                        <li key={i} onClick={()=> setSelectedMonth(month)}>
                            {month.name}
                        </li>
                    ))}
                </ul>
            <div className={styles.coursesGrid}>
                {
                    !courses.loading?
                    filteredCourses.map((course, i)=>(
                        <article key={i}>
                            <figure>
                                <Image
                                src={himfgImage}
                                alt='HIMFG'
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
                    :
                    null
                }
            </div>
        </section>
    )
}