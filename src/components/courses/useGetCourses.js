import { useState, useEffect } from 'react'

export const useGetCourses = ()=>{
    const baseUrl = 'https://courses-rest-api-hospital.vercel.app/api/courses/all-courses'
    const [courses, setCourses]= useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getCourses= async()=>{
        try {
            const response = await fetch(baseUrl)
            const json = await response.json()
            if(response.status === 200){
                setIsLoading(false)
            }
            return setCourses(json)
        } catch (error) {
            throw new Error('Error alcargar la información')
        }
    }
    useEffect(()=>{
        getCourses()
    },[])
    return [courses, isLoading]
}