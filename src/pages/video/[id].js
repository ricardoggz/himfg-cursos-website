import { useRouter } from "next/router"
import { Container, GridContainer } from '../../components'

const Video = ({data, title})=>{
    const router = useRouter()
    return (
        <Container>
            <h1>{title}</h1>
            <GridContainer>
               {
                data?.data?.map((video, i)=>(
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
        fallback: false
    }
}
export const getStaticProps=async({params})=>{
    const videoId = params.id ?? ''
    const config = {
        headers: { Authorization: `Bearer 586637bf90ea7727edc8c90c95b056c3` }
    }
    const response = await fetch(
        `https://api.vimeo.com/me/folders/${videoId}/videos`,
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