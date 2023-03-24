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
const Video = ({data, title})=>{
    const router = useRouter()
    //const videos = data.map((video)=>video.player_embed_url)
    console.log(data.data)
    return (
        <Container>
            <h1>{title}</h1>
            <GridContainer>
               {
                data.data.map((video, i)=>(
                    <iframe
                        src={video.player_embed_url}
                        key={i}
                    />
                ))
               }
            </GridContainer>
        </Container>
    )
}
export const getStaticPaths = async()=>{
    const response = await fetch(`${process.env.BASE_URL_API}api/courses/all-courses`)
    const json = await response.json()
    const paths = json.map((course)=>{
        return{
            params:{
                id : `${course.course_vimeo_folder}`.toString()
            }
        }
    })
    return {
        paths,
        fallback: true
    }
}
export const getStaticProps=async({params})=>{
    const config = {
        headers: { Authorization: `Bearer 586637bf90ea7727edc8c90c95b056c3` }
    }
    const response = await fetch(
        `https://api.vimeo.com/me/folders/${params.id}/videos`,
        config
    )
    const data = await response.json()

    return {
        props:{
            title: 'Hello World',
            data: data
        }
    }
}
export default Video