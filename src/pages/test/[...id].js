import { useRouter } from 'next/router'
import { Page } from '@/components'
import styles from './test.module.css'

export default function Test({data}){
    const router = useRouter()
    let filteredData = []
    if(data){
        data.forEach((item, i) => {
            const question_id = item.question_id;
          
            // Buscamos una relación existente con el mismo identificador
            const relacionExistente = filteredData.find(relacion => relacion.question_id === question_id);
          
            if (relacionExistente) {
              relacionExistente.options.push(...[{
                    option_name : item.option_name,
                    option_value: item.option_value
                }]);
            } else {
              // Si no existe, creamos una nueva relación
              filteredData.push({
                question_name: item.question_name,
                question_id: item.question_id,
                options:[{
                    option_name : item.option_name,
                    option_value: item.option_value,
                    option_name_input:i
                }],
              });
            }
          });
    }
    return (
        <Page title={`Cuestionario: ${data[0].course_name}`}>
            <form className={styles.formTest}>
                {
                    !filteredData ? null
                    :
                    filteredData.map((question, i)=>(
                        <div key={question.question_id}>
                            <label className={styles.questionName}>
                                {question.question_name}
                            </label>
                            <div className={styles.questionOptions}>
                                {
                                    question.options.map((option, index)=>(
                                        <div key={index}>
                                            <input type='checkbox' value={option.option_value} name='option_name'/> <label>{option.option_name}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </form>
        </Page>
    )
}

export const getStaticPaths = async()=>{
    const response = await fetch(`${process.env.BASE_URL_API}api/courses/all-courses`)
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
        `${process.env.BASE_URL_API}api/courses/get-test-course/${params.id}`,
    )
    const data = await response.json()
    return {
        props:{
            data: data,
        }
    }
}