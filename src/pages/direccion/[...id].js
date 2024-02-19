import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import { PageBanner, TextsPage, Loader, PagePortrait } from "@/components"

export default function Direction(){
    const id = useRouter()
    let filteredPage
    const [page, setPage] = useState(null)
    const [loading, setLoading] = useState(true)
    const getLinks = async()=>{
        try {
        const pages = await axios.get(`${process.env.BASE_URL_API}api/directions/all-directions`)
        if(pages.status === 200){
            setLoading(false)
        }
        if(pages.data){
            filteredPage = pages.data.filter((page)=> page.page_url === id.query.id[0])
            setPage(filteredPage)
        }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getLinks()
    },[])
    useEffect(() => {
        const handleRouteChange = () => {
          id.reload(document.location.reload())
        }
        id.events.on('routeChangeComplete', handleRouteChange)
        return () => {
          id.events.off('routeChangeComplete', handleRouteChange)
        }
      },[id])
    return (
        <>
            {
                !loading ?
                <>
                    {
                !page ? null
                :
                page.map((page)=>(
                    <>
                        <PageBanner
                        title={page.page_title}
                        banner={page.page_banner_image}
                        bannerResponsive={page.banner_image_responsive}
                        textLeft={!page.page_left_text ? false : true}
                        >
                        <p>{page.page_banner_content}</p>
                        </PageBanner>
                        <TextsPage
                            firstText={page.page_first_content}
                            secondText={page.page_second_content}
                            firstImage={page.page_first_image}
                            secondImage={page.page_second_image}
                        />
                        {
                            !page.page_titular ? null
                            :
                            <PagePortrait
                                image={page.page_titular_photo}
                                titular={page.page_titular}
                                titularGrade={page.page_titular_grade}
                            />
                        }
                    </>
                ))
            }
                </>
                :
                <Loader
                    message='Cargando...'
                />
            }
        </>
    )
}

export const getStaticPaths = async()=>{
    const response = await fetch(`${process.env.BASE_URL_API}api/directions/all-directions`)
    const json = await response.json()
    const paths = json.map((direction)=>{
        return{
            params:{
                 id: [
                    `${direction.page_url}`,
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