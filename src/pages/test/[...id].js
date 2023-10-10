import { useRouter } from 'next/router'
import { Page } from '@/components'
import styles from './test.module.css'

export default function Test({data}){
    const router = useRouter()
    console.log(data)
    return (
        <Page title={`Cuestionario: ${data[0].course_name}`}>
            <form className={styles.formTest}>
                {
                    data.map((question, i)=>(
                        <div key={i}>
                            <label className={styles.questionName}>{question.question_name}</label>
                            <div className={styles.questionOptions}>
                            <input type='radio' value={question.option_value}/>
                            <label>{question.option_name}</label>
                            </div>
                        </div>
                    ))
                }
            </form>
        </Page>
    )
}

export const getStaticPaths = async()=>{
    const response = await fetch(`http://localhost:3030/api/courses/all-courses`)
    const json = await response.json()
    const paths = json.filter((course)=>course.course_vimeo_folder)
    .map((course)=>{
        return{
            params:{
                 id: [
                    `${course.course_id}`,                    
                ],
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps=async({params})=>{
    const response = await fetch(
        `http://localhost:3030/api/courses/get-test-course/${params.id}`,
    )
    const data = await response.json()
    return {
        props:{
            data: data,
        }
    }
}