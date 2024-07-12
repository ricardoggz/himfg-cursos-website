import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import axios from "axios"
import Swal from "sweetalert2"
import styles from './video.module.css'
import { useOnChange } from "../../hooks"
import { Container, GridContainer, Login } from '../../components'

const Video = (props)=>{
    const id = useRouter()
    console.log(id.asPath)
    const [count, setCount] = useState(1)
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
                `https://api.vimeo.com/me/folders/${id}/videos?page=${count}`,
                {
                    headers: { Authorization: `Bearer 586637bf90ea7727edc8c90c95b056c3` }
                }
            )
            if(resp.status === 200){
                setVimeoData(resp.data)
            }
        } catch (error) {
            throw new Error(error)
        }
    }
    const increment = ()=>setCount(count + 1)
    const decrement = ()=> setCount(count - 1)
    useEffect(()=>{
        if(course){
            getVimeoData({id: course[0].course_vimeo_folder})
        }
    },[count])
    useEffect(()=>{
        if(window.dataLayer){
          window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1YHJW3W0J0');
        }
      }, [])
    return (
        <>
            <Head>
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ID_ANALYTICS}`}></script>
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
                {
                    id.asPath === '/video/scp-2024/' || id.asPath === '/video/scp-2024'?
                    <>
                        <center>
                        <br/>
                        <a
                            href='https://docs.google.com/forms/d/e/1FAIpQLSdQrVXZ6rNwvGHnsCsQubgJTsevrb9JFdzTjHOHSy7xWBiQww/viewform'
                            className={styles.formLink}
                            target='_blank'
                        >
                            Formulario de registro a la Sesión Clínico Patológica
                        </a>
                        </center>
                        <br/>                    
                        <center>
                        <br/>
                        <p className={styles.formMessage}>
                            <b>ATENTO AVISO</b> este registro será habilitado hasta las 11:00 am
                            del 24 de julio de 2024, razón por la cual te sugerimos hacer tu registro
                            con tiempo para que se te pueda enviar sin contratiempos tu clave de acceso.
                        </p>
                        </center>
                    </>
                    :
                    null
                }
                </>
            :
            <>
            {
                !course[0].course_live_video
                ? null
                :
                course.map(({course_live_video, course_id, course_name})=>(
                    <>
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
                    {
                       id.asPath === '/video/scp-2024/' || id.asPath === '/video/scp-2024'?
                       <center>
                        <br/>
                        <a
                            href='https://scp.him.edu.mx/resumen-del-caso-clinico.pdf'
                            className={styles.formLink}
                            target='_blank'
                        >
                            Resumen del caso clínico
                        </a>
                        <br/>
                        <br/>
                        </center>
                        :
                        null
                    }
                    {
                        course_name === 'XXVI Curso de actualización en anestesiología pediátrica'
                        ?
                    <>
                    <center><h1>Aula 2</h1></center>
                    <br />
                    <br/>
                    <div
                    className={`${styles.liveVideo} flexContainer boxShadow`}
                    key={course_id}
                    >
                    <iframe
                    src={`https://vimeo.com/event/3792638/embed`}
                    frameBorder='0'
                    allow="
                    autoplay;
                    fullscreen;
                    picture-in-picture
                    "
                    allowFullScreen
                    />
                    <iframe
                    src={`https://vimeo.com/event/3792638/chat`}
                    frameBorder='0'
                    allow="
                    autoplay;
                    fullscreen;
                    picture-in-picture
                    "
                    />
                    </div>
                    </>
                    :
                    null
                    }
                    </>
                ))
            }
            {
                !course[0].course_zoom_video
                ? null
                : 
                <div className={`${styles.liveVideoZoom} flexContainer`}>
                    <figure>
                        <img src="https://res.cloudinary.com/diuxbqmn5/image/upload/v1704817341/b3x17pdocciixfcgktki.png" />
                    </figure>
                    <a
                    href={course[0].course_zoom_video}
                    target='_blank'
                    >
                        Enlace de Zoom
                    </a>
                    <span>{`ID de reunión: ${course[0].course_zoom_id}`}</span>
                    <span>{`Código de acceso: ${course[0].course_zoom_password}`}</span>
                </div>
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
                    vimeoData.data.map((video, i)=>(
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
                <div className="flexContainer">
                    {
                        vimeoData.paging.next ?
                        <button
                        className={styles.viewMoreButton}
                        onClick={increment}
                        >
                            Siguiente
                        </button>
                        :
                        null
                    }
                    {
                        vimeoData.paging.previous ?
                        <button
                        className={styles.viewMoreButton}
                        onClick={decrement}
                        >
                            Anterior
                        </button>
                        :
                        null
                    }
                    {
                        vimeoData.paging.previous  && vimeoData.paging.next ?
                        <>
                            <button
                            className={styles.viewMoreButton}
                            onClick={decrement}
                            >
                            Anterior
                            </button>
                            <button
                            className={styles.viewMoreButton}
                            onClick={increment}
                            >
                            Siguiente
                            </button>
                        </>
                        :
                        null
                    }
                </div>
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
    const videoId = params.id ?? ''
    const config = {
        headers: { Authorization: `Bearer 586637bf90ea7727edc8c90c95b056c3` }
    }
    const response = await fetch(
        `https://api.vimeo.com/me/folders/${videoId[1]}/videos`,
        config
    )
    const data = await response.json()
    return {
        props:{
            data: data,
            title: videoId[0] || null,
            liveVideoId: videoId[2] ? videoId[2] : null
        }
    }
}
export default Video