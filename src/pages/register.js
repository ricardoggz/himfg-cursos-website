import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { RegisterForm, Container, Title } from '../components'
import { UserContext, CourseContext } from '../contexts'

const Register = ()=>{
    const { course } = useContext(CourseContext)
    const router = useRouter()
    const { user }= useContext(UserContext)
    useEffect(()=>{
        if(user){
            router.push('/direccion/educacion-medica-continua')
        }
    },[])
    return (
        <>
            <Head>
                <title>Inscripción online</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="https://res.cloudinary.com/diuxbqmn5/image/upload/v1677114497/himfg-logo_ewzx59.webp" />
            </Head>
            <Container>
                <Title>
                    Inscripción
                </Title>
                <RegisterForm />
            </Container>
        </>
    )
}
export default Register