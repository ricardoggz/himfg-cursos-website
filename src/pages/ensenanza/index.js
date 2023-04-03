import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'
import {
  Container,
  Title,
} from '../../components'
import styles from './page.module.css'

const EducativeOfer = ()=>{
  const [isOpen, setIsOpen]= useState(false)
  const showMenu = ()=> setIsOpen(!isOpen)
  return(
    <>
      <Head>
        <title>HIMFG - Enseñanza</title>
        <meta name="description" content="Departamento de enseñanza" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/diuxbqmn5/image/upload/v1677114497/himfg-logo_ewzx59.webp" />
      </Head>
        <div className='flexContainer'>
          <button onClick={showMenu} className={styles.buttonOptions}>
            <span>Menú</span>
            <IoIosArrowDown />
          </button>
          <ul className={`${!isOpen ? styles.navigationOut : styles.pageNavigation}`}>
            <li>
              <Link href='/'>
                Educación médica continua
              </Link>
            </li>
            <li>
              <Link href='/'>
               Comunicación social
              </Link>
            </li>
          </ul>
        </div>
      <Container>
        <Title>Dirección de enseñanza</Title>
        <div className={`${styles.pagePharagraphs} flexContainer`}>
          <p>
            La Dirección de Enseñanza y Desarrollo Académico es el área encargada de establecer y supervisar la aplicación de programas académicos de Pre y Posgrado avalados por la Universidad Nacional Autónoma de México para la óptima formación académica de nuestros médicos en el área de pediatría.
          </p>
          <p>
            Tiene también la encomienda de instruir la selección de aspirantes a las residencias médicas de las especialidades pediátricas, con la finalidad de promover el intercambio académico con diversas instituciones nacionales y extranjeras.
          </p>
          <p>
            Una de las tareas sustantivas es evaluar los estudios de pregrado, especialidades, subespecialidades, diplomados, cursos de educación continua, con el fin de fomentar la actualización entre el personal de salud.
          </p>
        </div>
      </Container>
    </>
  )
}

export default EducativeOfer