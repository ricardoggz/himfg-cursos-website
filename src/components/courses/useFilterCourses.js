import { useState, useMemo, useEffect } from 'react'
import { months } from "./months"

export const useFilterCourses = (courses = [])=>{
    const [selectedMonth, setSelectedMonth]= useState(months[0])
    let filteredCourses = useMemo(()=>{
        return courses.filter(course=> course.month_id === selectedMonth.id)
    },[courses])
    const getFilteredCourses = (month)=> setSelectedMonth(month)
    return [filteredCourses, getFilteredCourses]
}