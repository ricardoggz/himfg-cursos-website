import { useRouter } from "next/router"
import { useFetch } from "../hooks"

const Video = ()=>{
    const router = useRouter()
    const config = {
        headers: { Authorization: `Bearer 586637bf90ea7727edc8c90c95b056c3` }
    }
    useFetch({
        url: `https://api.vimeo.com/me/folders/15199988/videos`,
        config: config
    })
    return (<h1>Video {router.query.video}</h1>)
}
export default Video