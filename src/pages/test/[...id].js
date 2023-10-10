import { useRouter } from 'next/router'

export default function Test({data}){
    const router = useRouter()
    return (
        <p>{JSON.stringify(data)}</p>
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