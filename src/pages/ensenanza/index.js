import Head from 'next/head'
import {
  Courses,
  Container,
  Title,
} from '../../components'

const EducativeOfer = ()=>{
  return(
    <>
      <Head>
        <title>HIMFG - Enseñanza</title>
        <meta name="description" content="Departamento de enseñanza" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/diuxbqmn5/image/upload/v1677114497/himfg-logo_ewzx59.webp" />
      </Head>
      <Container>
        <Title>Oferta educativa del departamento de enseñanza</Title>
        <Courses />
      </Container>
    </>
  )
}

export default EducativeOfer