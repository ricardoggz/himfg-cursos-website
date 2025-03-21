'use client'
import { useRouter } from "next/router";
import { Container, GridContainer, Title, Investigador } from "@/components";
export default function(){
    const router = useRouter()
    console.log(router)
    return (
        <Container>
            <Title>Investigadores</Title>
            <GridContainer>
                <Investigador/>
                <Investigador/>
                <Investigador/>
                <Investigador/>
            </GridContainer>
        </Container>
    )
}