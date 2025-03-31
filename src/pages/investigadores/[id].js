'use client'
import { useFetch } from "@/hooks";
import { useRouter } from "next/router";
import { Container, GridContainer, Title, Investigador } from "@/components";
export default function () {
    const router = useRouter()
    const [loading, data] = useFetch({
        url: `${process.env.BASE_URL_API}api/directions/all-investigators/${router.query.id}`
    })
    console.log(router)
    return (
        <Container>
            <Title>{!data || !data.data ? null : `${data.data[0].laboratorio_nombre} - Investigadores`}</Title>
            {
                !data && loading ? null :
                    <GridContainer>
                        {
                            !data ? null :
                                data.data.map((e, index) => (
                                    <Investigador
                                        key={index}
                                        investigador={e}
                                    />
                                ))
                        }
                    </GridContainer>
            }
        </Container>
    )
}
export const getStaticPaths = async () => {
    const response = await fetch(`${process.env.BASE_URL_API}api/directions/all-investigators`)
    const json = await response.json()
    const paths = json.filter((e) => e.laboratorio_id)
        .map((e) => {
            return {
                params: {
                    id: `${e.laboratorio_id}`,
                }
            }
        })
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async ({ params }) => {
    const id = params.id ?? ''
    const response = await fetch(
        `${process.env.BASE_URL_API}api/directions/all-investigators`
    )
    const data = await response.json()
    return {
        props: {
            data,
            id
        }
    }
}