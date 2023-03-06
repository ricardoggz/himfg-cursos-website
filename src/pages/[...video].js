import { useState } from "react"
import { useRouter } from "next/router"
import { useFetch } from "../hooks"
import { Container, Title } from '../components'
import styles from './video.module.css'

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
            <>
                <div className={`flexContainer ${styles.liveVideo}`}>
                {folderNumber?
                    <iframe
                    src={`https://vimeo.com/event/${liveVideo}/embed`}
                    className={`${styles.iframeVideo}`}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    />
                    :
                    <></>
                }
                </div>
                <div className={`flexContainer ${styles.gridVideos}`}>
                    {
                        data.data.data.map((video, i)=>(
                            <iframe
                                key={i}
                                src={video.player_embed_url}
                                className={`${styles.iframeVideo}`}
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                            />
                        ))
                    }
                </div>
            </>
        )
    }else{
        return (
            <p>{JSON.stringify(loading)}</p>
        )
    }
}
const Video = ()=>{
    const [password, setPassword] = useState(null)
    const [isEqual, setIsEqual] = useState(false)
    const router = useRouter()
    const coursePassword = 'contra123'
    const onSubmit = (evt)=>{
        evt.preventDefault()
        evt.target.reset()
        if(password === coursePassword){
            setIsEqual(true)
        }
        setPassword(null)
    }
    const onChange = (evt)=> setPassword(evt.target.value)
    return (
        <Container>
            <Title>
                {
                router.query.video?
                router.query.video[0]:
                null 
                }
            </Title>
            <div>
                {
                   isEqual?
                    <Videos
                    folderNumber={router.query.video? router.query.video[1] : ''}
                    liveVideo={router.query.video? router.query.video[2] : ''}
                    />
                    :
                    <form className={`${styles.formPassword}`} onSubmit={onSubmit}>
                        <label>Contraseña</label>
                        <input type='password' required onChange={onChange}/>
                        <button>Entrar</button>
                    </form>
                }
            </div>
            </Container>
        )
}
export default Video