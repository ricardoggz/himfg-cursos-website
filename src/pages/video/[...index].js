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
const Video = ()=>{
    const router = useRouter()
    return (
        <Container>
            {
            !router.query.index? <></>
            :
            <Videos folderNumber={router.query.index[0]}/>
            }
        </Container>
    )
}
export default Video