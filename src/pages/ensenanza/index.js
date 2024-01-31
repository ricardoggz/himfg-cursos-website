import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {
  Container,
  Page,
  Courses
} from '../../components'
import consulta from '../../assets/auditorio.jpg'
import alumno from '../../assets/alumno.jpg'
import styles from './ensenanza.module.css'

const EducativeOfer = ()=>{
  const paths = [
    {
      path: '/ensenanza/offer',
      name: 'Educación médica continua'
    },
  ]
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
          <option value='/ensenanza/offer'>
            Enseñanza
          </option>
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
    <section className={styles.textsWrapper}>
        <div className={styles.texts}>
            <div className={styles.text_image}>
                <Image src={consulta} />
            </div>
            <div className={styles.text}>
              <div>
              <p>
                El Hospital Infantil de México tiene 78 años brindando atención pediátrica especializada a la niñez más desprotegida de nuestro país, su modelo de atención, enseñanza e investigación, han sido repetidos en los actuales Institutos Nacionales de Salud y otros hospitales del país y de América Latina.

                Sus recursos provienen en su mayoría de las arcas federales y atenciones subrogadas, sin embargo, no es suficiente.

                Nuestro Instituto es pionero de pediatría en el país en una gran cantidad de temas del desarrollo y de vanguardia como: vacunas, bacteriología, infectología, nutrición, nefrología, endocrinología, cirugía de corazón, trasplantes de corazón, riñón, etc.

                Ha sido siempre un icono de la Pediatría Nacional, hemos publicado más de 300 libros; múltiples artículos científicos, capítulos de libros desde hace más de 17 años tenemos el "Programa Sigamos Aprendiendo en el Hospital" que apoya a los pacientes a continuar con sus estudios estando hospitalizados tenemos una historia larga en la formación de alumnos de todas las especialidades pediátricas, cuenta con 349 camas, 158 consultorios, 12 quirófanos y 3 terapias intensivas y el desarrollo de la investigación tanto clínica como básica forma parte de nuestra esencia.
              </p>
              </div>
              <div></div>
            </div>
        </div>
        <div className={styles.texts}>
            <div className={styles.text}>
            <div></div>
                <div>
                <p>
                El Hospital Infantil de México tiene 78 años brindando atención pediátrica especializada a la niñez más desprotegida de nuestro país, su modelo de atención, enseñanza e investigación, han sido repetidos en los actuales Institutos Nacionales de Salud y otros hospitales del país y de América Latina.

                Sus recursos provienen en su mayoría de las arcas federales y atenciones subrogadas, sin embargo, no es suficiente.

                Nuestro Instituto es pionero de pediatría en el país en una gran cantidad de temas del desarrollo y de vanguardia como: vacunas, bacteriología, infectología, nutrición, nefrología, endocrinología, cirugía de corazón, trasplantes de corazón, riñón, etc.

                Ha sido siempre un icono de la Pediatría Nacional, hemos publicado más de 300 libros; múltiples artículos científicos, capítulos de libros desde hace más de 17 años tenemos el "Programa Sigamos Aprendiendo en el Hospital" que apoya a los pacientes a continuar con sus estudios estando hospitalizados tenemos una historia larga en la formación de alumnos de todas las especialidades pediátricas, cuenta con 349 camas, 158 consultorios, 12 quirófanos y 3 terapias intensivas y el desarrollo de la investigación tanto clínica como básica forma parte de nuestra esencia.
                </p>
                </div>
            </div>
            <div className={styles.text_image}>
                <Image src={alumno} />
            </div>
        </div>
    </section>
    </>
  )
}

export default EducativeOfer