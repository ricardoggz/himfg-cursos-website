import { useRouter } from "next/router"
import { useFetch } from "../hooks"
import { Container, Title } from '../components'

const Video = ()=>{
    const router = useRouter()
    const config = {
        headers: { Authorization: `Bearer 586637bf90ea7727edc8c90c95b056c3` }
    }
    if(router.query.video){
        var [loading, data] = useFetch({
            url: `https://api.vimeo.com/me/folders/${router.query.video[1]}/videos`,
            config: config
        })
    }
    if(data) console.log(data.data.data)
    
    return (
        <Container>
            <Title>Video
                {router.query.video?router.query.video[0]:null}
            </Title>
            {
                router.query.video?
                <iframe src={`https://player.vimeo.com/video/${router.query.video[2]}`}/>
                :
                null
            }
            {
                data?
                data.data.data.map((video)=>(
                    <iframe
                        src={video.player_embed_url}
                        key={video.uri}
                    />
                ))
                :
                null
            }
        </Container>
    )
}
export default Video