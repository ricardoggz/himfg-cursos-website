import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useOnChange } from '../hooks'
import { UserContext } from '../contexts'
import { Container, Login, Title } from '../components'
const UserLogin = ()=>{
    const [course, setCourse] = useState(null)
    useEffect(()=>{
        setCourse(JSON.parse(localStorage.getItem('course')))
    },[])
    const router = useRouter()
    const { loginUser, user } = useContext(UserContext)
    if(user){
        router.push('/ensenanza/offer')
    }
    const [inputData, onChange, onReset] = useOnChange()
    const login = async(evt)=>{
        evt.preventDefault()
        try {
            const response = await axios.post(
                `${process.env.BASE_URL_API}api/auth/login-user`,
                inputData
            )
            if(response.data.rows.length === 0){
                onReset()
                evt.target.reset()
                return Swal.fire({
                    title: 'Datos incorrectos',
                    icon:'error',
                    showCloseButton:true,
                    showConfirmButton:false,
                    position:'center'
                })
            }
            loginUser(response.data.rows[0])
            if(!course){
                router.push('/ensenanza/offer')
            }else{
                router.push(`/video/${course.course}/${course.folder}/${course.liveVideo}`)
            }
        } catch (error) {
            throw new Error(error)
        }
        onReset()
    }
    return (
        <Container>
            <Title>
                Iniciar sesión
            </Title>
            <Login onSubmit={login}>
                <label>Correo:</label>
                <input
                    type='email'
                    required
                    onChange={onChange}
                    name='student_email'
                />
                <label>Contraseña:</label>
                <input
                    type='password'
                    required
                    onChange={onChange}
                    name='student_password'
                />
                <button>Iniciar sesión</button>
            </Login>
        </Container>
    )
}

export default UserLogin