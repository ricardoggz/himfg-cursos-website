import Head from 'next/head'
import {
  Courses,
  Container,
  Title,
  Jumbotron
} from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>HIMFG - INICIO</title>
        <meta name="description" content="Bienvenido a la oferta académica del HIMFG" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/diuxbqmn5/image/upload/v1677114497/himfg-logo_ewzx59.webp" />
      </Head>
      <Container>
        <Title>Oferta educativa del HIMFG</Title>
        <Courses />
      </Container>
    </>
  )
}
