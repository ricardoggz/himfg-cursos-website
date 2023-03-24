import { useRouter } from "next/router"
import { useFetch } from "../../hooks"
import { Container, GridContainer, Loader, Login } from '../../components'

const Videos = ({folderNumber, liveVideo})=>{
    const config = {
        headers: { Authorization: `Bearer 586637bf90ea7727edc8c90c95b056c3` }
    }
    const [loading, data]= useFetch({
        url: `https://api.vimeo.com/me/folders/${folderNumber}/videos`,
        config: config
    })
    return (
        <>
            {
            !loading?
            <GridContainer>
                {
                    data.data.data.map((video, i)=>(
                        <div key={i} className="boxShadow">
                            <iframe
                            src={video.player_embed_url}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            />
                            <span>{video.name}</span>
                        </div>    
                    ))
                }
            </GridContainer>
            :
            <Loader message='Cargando videos'/>
            }
        </>
    )
}
const Video = ({data})=>{
    const router = useRouter()
    console.log(data)
    return (
        <Container>
            <h1>Video</h1>
        </Container>
    )
}
export const getStaticPaths = async()=>{
    const response = await fetch(`${process.env.BASE_URL_API}api/courses/all-courses`)
    const json = await response.json()
    const paths = json.map((course)=>{
        return{
            params:{
                course_vimeo_folder : [course.course_vimeo_folder]
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps=async({params})=>{
    const config = {
        headers: { Authorization: `Bearer 586637bf90ea7727edc8c90c95b056c3` }
    }
    const response = await fetch(
        `https://api.vimeo.com/me/folders/${params.course_vimeo_folder}/videos`,
        config
    )
    const json = response.json()

    return {
        props:{
            data: json
        }
    }
}
export default Video