import axios from 'axios'
import { useState, useEffect } from 'react'

export const useGetCourses = ()=>{
    const baseUrl =`${process.env.NEXT_PUBLIC_BASE_API}api/courses/all-courses`
    const [courses, setCourses]= useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getCourses= async()=>{
        try {
            const response = await axios.get(baseUrl)
            const json = response.data
            if(json){
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