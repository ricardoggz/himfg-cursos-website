import { useState, useEffect } from 'react'

export const useGetCourses = ()=>{
    const baseUrl = 'https://courses-rest-api-hospital.vercel.app/api/courses/all-courses'
    const [courses, setCourses]= useState({
        data: [],
        loading: true,
    })
    useEffect(()=>{
        (async()=>{
            try {
                const response = await fetch(baseUrl)
                const json = await response.json()
                if(json.length > 0){
                    setCourses({
                        data: json,
                        loading:false
                    })
                }else{
                    setCourses({
                        data: [],
                        loading:true
                    })
                }
            } catch (error) {
                throw new Error('Error al cargar la información')
            }
        })()
    },[])
    return [courses]
}