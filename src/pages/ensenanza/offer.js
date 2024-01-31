import { useContext, useEffect } from 'react'
import {CourseContext} from '@/contexts'
import { Courses, Container, Title } from '../../components'
import styles from './offer.module.css'

const CoursesList = ()=>{
    const {logout} = useContext(CourseContext)
    useEffect(()=>{
        logout()
    },[])
    return (
        <>
        <section className={styles.pageBanner}>
        <div className={styles.pageBannerBackground}>
          <div className={styles.pageTitleBanner}>
            <h1>
              Semblanza Dirección Enseñanza
            </h1>
            <p>
              El Hospital Infantil de México tiene 78 años brindando atención pediátrica especializada a la niñez más desprotegida de nuestro país,
              su modelo de atención,
              enseñanza e investigación,
              han sido repetidos en los actuales Institutos Nacionales de Salud y otros hospitales del país y de América Latina.
            </p>
            <p>
              Sus recursos provienen en su mayoría de las arcas federales y atenciones subrogadas, sin embargo, no es suficiente.
            </p>
            <p>
              Nuestro Instituto es pionero de pediatría en el país en una gran cantidad de temas del desarrollo y de vanguardia como: vacunas, bacteriología, infectología, nutrición, nefrología, endocrinología, cirugía de corazón, trasplantes de corazón, riñón, etc.
            </p>
            <p>
              Ha sido siempre un icono de la Pediatría Nacional, hemos publicado más de 300 libros; múltiples artículos científicos, capítulos de libros desde hace más de 17 años tenemos el "Programa Sigamos Aprendiendo en el Hospital" que apoya a los pacientes a continuar con sus estudios estando hospitalizados tenemos una historia larga en la formación de alumnos de todas las especialidades pediátricas, cuenta con 349 camas, 158 consultorios, 12 quirófanos y 3 terapias intensivas y el desarrollo de la investigación tanto clínica como básica forma parte de nuestra esencia.
            </p>
          </div>
        </div>
        </section>
        <div className={styles.menu_mobile}>
          <button>
            <span>
              Menú
            </span>
          </button>
        </div>
        <ul className={styles.menu}>
          <li>General</li>
          <li>
            <select>
              <option>Enseñanza</option>
              <option>Pre y posgrado</option>
              <option>Educación médica continua</option>
              <option>Comunicación social y CEMESATEL</option>
              <option>Hemerobiblioteca</option>
            </select>
          </li>
          <li>Administración</li>
          <li>Planeación</li>
          <li>Investigación</li>
        </ul>
        <Container>
          <Courses />
        </Container>
        </>
      )
}

export default CoursesList