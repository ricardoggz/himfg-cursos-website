import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Page } from '@/components'
import styles from './test.module.css'

export default function Test(){
    const [test, setTest] = useState(null)
    const [selectedValues, setselectedValues] = useState({})
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);
    let filteredData = []
    const router = useRouter()
    let id = parseInt(router.query.id[0])
    const getTest=async()=>{
        const response = await axios.get(
            `${process.env.BASE_URL_API}api/courses/get-test-course/${id}`,
        )
        if(response.data){
            setTest(response.data)
        }
    }
    
    const handleAnswer = (questionIndex, selectedAnswerIndex) => {
        const updatedUserAnswers = [...selectedValues];
        updatedUserAnswers[questionIndex] = selectedAnswerIndex;
        setselectedValues(updatedUserAnswers);
    };
    
      const handleSubmit = (evt) => {
        evt.preventDefault()
        let calculatedScore = 0;
        filteredData.forEach((question, index) => {
        const correctAnswerIndex = question.options.findIndex(answer => answer.option_value === 1)
        if(selectedValues[index] === correctAnswerIndex) {
            calculatedScore += 1;
          }
        });
        setScore(calculatedScore);
      };
    useEffect(()=>{
        getTest()
    },[])
    useEffect(()=>{
        setselectedValues([filteredData.length].fill(-1))
    },[test])
    let values = []
    let suma
    if(test){
        test.forEach((item, i) => {
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
                    option_name_input:i,
                    option_value: item.option_value
                }],
              });
            }
          });
          /*if(filteredData){
            for (const objeto of filteredData) {
                for (const elementoAnidado of objeto.options) {
                values.push(elementoAnidado.option_value)
                }
              }
            suma = values.reduce((prev,next)=> prev + next, 0)
          }*/
    }
    return (
        <Page title={`${!test ? 'Cuestionario' : test[0].course_name}`}>
            <form className={styles.formTest} onSubmit={handleSubmit}>
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
                                            <input
                                            type='radio'
                                            value={option.option_value}
                                            name={`option_${i}`}
                                            onChange={() => handleAnswer(i, index)}/> <label>{option.option_name}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
                <button>Mandar respuestas</button>
                <span>{score !== null && <p>Tu puntuación: {score} de {filteredData.length}</p>}</span>
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