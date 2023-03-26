import { useRouter } from "next/router"
import styles from './video.module.css'
import { Container, GridContainer } from '../../components'

const Video = (props)=>{
    useRouter()
    return (
        <Container>
            <h3 className={styles.videoTitle}>
               {props.title}
            </h3>
            {
                props.liveVideoId === 'null'
                ? null
                :
                <div className={`${styles.liveVideo} flexContainer boxShadow`}>
                    <iframe
                    src={`https://vimeo.com/event/${props.liveVideoId}/embed`}
                    frameBorder='0'
                    allow="
                    autoplay;
                    fullscreen;
                    picture-in-picture
                    "
                    allowFullScreen
                    />
                    <iframe
                    src={`https://vimeo.com/event/${props.liveVideoId}/chat`}
                    frameBorder='0'
                    allow="
                    autoplay;
                    fullscreen;
                    picture-in-picture
                    "
                    />
                </div>
            }
            {
                props.data.data.length !== 0
                ?
                <>
                <h3 className={styles.videoTitle}>
                    Transmisiones anteriores
                </h3>
                <GridContainer>
                {
                    props.data?.data?.map((video, i)=>(
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
                :
                null
            }
        </Container>
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
                    `${course.course_name}`,
                    `${course.course_vimeo_folder}`,
                    `${!course.course_live_video ? null : course.course_live_video}`
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