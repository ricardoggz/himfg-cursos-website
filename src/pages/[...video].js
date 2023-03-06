import { useRouter } from "next/router"
import { useFetch } from "../hooks"
import { Container, Title } from '../components'

const Videos = ({folderNumber, liveVideo})=>{
    const config = {
        headers: { Authorization: `Bearer 586637bf90ea7727edc8c90c95b056c3` }
    }
    const [loading, data]= useFetch({
        url: `https://api.vimeo.com/me/folders/${folderNumber}/videos`,
        config: config
    })
    if(folderNumber && data){
        return (
            <div>
                {folderNumber?
                    <iframe
                    src={`https://vimeo.com/event/${liveVideo}/embed`}
                    />
                    :
                    <></>
                }
                {data.data.data.map((video, i)=>(
                    <iframe
                        key={i}
                        src={video.player_embed_url}
                    />
                ))}
            </div>
        )
    }else{
        return (
            <p>{JSON.stringify(loading)}</p>
        )
    }
}
const Video = ()=>{
    const router = useRouter()
    return (
        <Container>
            <Title>
                {
                router.query.video?
                router.query.video[0]:
                null 
                }
            </Title>
            <form>
                <label>Contraseña</label>
                <input type='password' required/>
                <button>Entrar</button>
            </form>
            <div>
                <Videos
                    folderNumber={router.query.video? router.query.video[1] : ''}
                    liveVideo={router.query.video? router.query.video[2] : ''}
                />
            </div>
        </Container>
    )
}
export default Video