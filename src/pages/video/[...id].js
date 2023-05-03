import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import axios from "axios"
import Swal from "sweetalert2"
import styles from './video.module.css'
import { useOnChange } from "../../hooks"
import { Container, GridContainer, Login } from '../../components'

const Video = ()=>{
    const [password, setPassword] = useState(null)
    const [course, setCourse] = useState(null)
    const [ vimeoData, setVimeoData ] = useState(null)
    const [inputData, onChange, onReset]= useOnChange()
    const login = async(evt)=>{
        evt.preventDefault()
        try {
            const resp = await axios.post(
                `${process.env.BASE_URL_API}api/courses/course-login`,
                inputData
            )
            if(!resp.data.rows){
                evt.target.reset()
                onReset()
                return Swal.fire({
                    title: 'Datos incorrectos',
                    icon:'error',
                    showCloseButton:true,
                    showConfirmButton:false,
                    position:'center'
                })
            }
            setPassword(inputData)
            setCourse(resp.data.rows)
            getVimeoData({
                id: resp.data.rows[0].course_vimeo_folder
            })
            onReset()
        } catch (error) {
            throw new Error(error)
        }
    }
    const getVimeoData = async({id})=>{
        try {
            const resp = await axios.get(
                `https://api.vimeo.com/me/folders/${id}/videos`,
                {
                    headers: { Authorization: `Bearer 586637bf90ea7727edc8c90c95b056c3` }
                }
            )
            if(resp.status === 200){
                setVimeoData(resp.data.data)
            }
        } catch (error) {
            throw new Error(error)
        }
    }
    return (
        <>
            <Head>
                <title>
                {
                !course ? 
                'Ingresar al curso'
                :
                course[0].course_name
               }
                </title>
            </Head>
            <Container>
            <h3 className={styles.videoTitle}>
               {
                !course ? 
                'Ingrese la contraseña para acceder al curso'
                :
                course[0].course_name
               }
            </h3>
            {
                !password ?
                <>
                    <Login onSubmit={login}>
                        <label>Contraseña:</label>
                        <input
                        type='password'
                        required
                        onChange={onChange}
                        name='course_password'
                        />
                        <button>Ingresar</button>
                    </Login>
                    <div className={styles.coursePayment}>
                        <Link href="/payment">
                            Obtener contraseña
                        </Link>
                    </div>
                </>
            :
            <>
            {
                !course
                ? null
                :
                course.map(({course_live_video, course_id})=>(
                    <div
                    className={`${styles.liveVideo} flexContainer boxShadow`}
                    key={course_id}
                    >
                    <iframe
                    src={`https://vimeo.com/event/${course_live_video}/embed`}
                    frameBorder='0'
                    allow="
                    autoplay;
                    fullscreen;
                    picture-in-picture
                    "
                    allowFullScreen
                    />
                    <iframe
                    src={`https://vimeo.com/event/${course_live_video}/chat`}
                    frameBorder='0'
                    allow="
                    autoplay;
                    fullscreen;
                    picture-in-picture
                    "
                    />
                </div>
                ))
            }
            {
                !vimeoData
                ?
                null
                :
                <>
                <h3 className={styles.videoTitle}>
                    Transmisiones anteriores
                </h3>
                <GridContainer>
                {
                    vimeoData.map((video, i)=>(
                        <div className={`${styles.iframeVideo} boxShadow`} key={i}>
                            <iframe
                            src={video.player_embed_url}
                            frameBorder='0'
                            allow="
                            autoplay;
                            fullscreen;
                            picture-in-picture
                            "
                            allowFullScreen
                            />
                            <span>{video.name}</span>
                        </div>
                    ))
                }
                </GridContainer>
                </>
            }
            </>
            }
        </Container>
        </>
    )
}
export const getStaticPaths = async()=>{
    const response = await fetch(`${process.env.BASE_URL_API}api/courses/all-courses`)
    const json = await response.json()
    const paths = json.filter((course)=>course.course_vimeo_folder)
    .map((course)=>{
        return{
            params:{
                 id: [
                    `${course.course_url}`,                    
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
        `${process.env.BASE_URL_API}api/courses/all-courses`,
    )
    const data = await response.json()
    return {
        props:{
            data: data,
        }
    }
}
export default Video