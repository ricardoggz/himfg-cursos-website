import Head from 'next/head'
import {
  Container,
  Page
} from '../../components'

const EducativeOfer = ()=>{
  const paths = [
    {
      path: '/ensenanza/offer',
      name: 'Educación médica continua'
    },
  ]
  return(
    <>
      <Head>
        <title>HIMFG - Enseñanza</title>
        <meta name="description" content="Departamento de enseñanza" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/diuxbqmn5/image/upload/v1677114497/himfg-logo_ewzx59.webp" />
      </Head>
      <Container>
        <Page
          title='Dirección de enseñanza'
          listMenu={paths}
        >
          <p>
            La Dirección de Enseñanza y Desarrollo Académico es el área encargada
            de establecer y supervisar la aplicación de programas académicos de
            Pre y Posgrado avalados por la Universidad Nacional Autónoma de México
            para la óptima formación académica de nuestros médicos en el área de
            pediatría.
          </p>
          <p>
            Tiene también la encomienda de instruir la selección de aspirantes a
            las residencias médicas de las especialidades pediátricas, con la
            finalidad de promover el intercambio académico con diversas
            instituciones nacionales y extranjeras.
          </p>
          <p>
            Una de las tareas sustantivas es evaluar los estudios de pregrado,
            especialidades, subespecialidades, diplomados, cursos de educación
            continua, con el fin de fomentar la actualización entre el personal de
            salud.
          </p>
          <p>
            Esta dirección tiene la facultad de emitir los reconocimientos,
            diplomas, certificados, títulos con validez oficial por la UNAM, así
            como otras instituciones educativas para titulación de los
            profesionales de salud.
          </p>
          <p>
            En Enseñanza y Desarrollo Académico se realizan los mecanismos que
            permiten evaluar la calidad de los programas educativos y precisar su
            impacto en la prestación de los servicios en el Hospital.
          </p>
          <p>
            La dirección tiene la labor de vigilar la participación en la docencia
            de los médicos, investigadores, enfermeras y otros profesionistas del
            hospital, así como facilitar la información bibliográfica actualizada
            durante el desarrollo de protocolos de investigación en el proceso de
            enseñanza-aprendizaje de médicos residentes, médicos adscritos e
            investigadores del hospital.
          </p>
        </Page>
      </Container>
    </>
  )
}

export default EducativeOfer