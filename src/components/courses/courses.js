import Image from 'next/image'
import styles from './courses.module.css'
import { useGetCourses } from './useGetCourses'
import { useFilterCourses } from './useFilterCourses'
import himfgImage from '../../assets/banner-80.webp'

export const Courses = ()=>{
    const [courses]= useGetCourses()
    const [filteredCourses, setSelectedMonth] = useFilterCourses(courses.data)
    return (
        <section className={styles.coursesWrapper}>
            <div className={styles.monthBar}>

            </div>
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