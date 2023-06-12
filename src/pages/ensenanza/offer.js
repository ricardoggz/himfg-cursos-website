import { useContext, useEffect } from 'react'
import {CourseContext} from '@/contexts'
import { Courses, Container, Title } from '../../components'
const CoursesList = ()=>{
    const {logout} = useContext(CourseContext)
    useEffect(()=>{
        logout()
    },[])
    return (
        <Container>
            <Title>Oferta educativa del HIMFG</Title>
            <Courses />
        </Container>
    )
}

export default CoursesList