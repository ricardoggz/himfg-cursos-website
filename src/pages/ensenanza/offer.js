import { useEffect } from 'react'
import { Courses, Container, Title } from '../../components'
const CoursesList = ()=>{
    useEffect(()=>{
        localStorage.clear()
    },[])
    return (
        <Container>
            <Title>Oferta educativa del HIMFG</Title>
            <Courses />
        </Container>
    )
}

export default CoursesList