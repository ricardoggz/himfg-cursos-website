import { useState } from 'react'
import { months } from "./months"

export const useFilterCourses = (courses = [])=>{
    const [selectedMonth, setSelectedMonth]= useState(months[0])
    let filteredCourses = courses.filter(course=> course.month_id === selectedMonth.id)
    return [filteredCourses, setSelectedMonth]
}