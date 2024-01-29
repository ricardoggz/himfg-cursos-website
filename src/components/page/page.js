import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"
import { Title } from '../../components'
import direccion_general from '../../assets/direccion-general.png'
import styles from "./page.module.css"

export const Page = ({children, title, listMenu, textMenu, route}) => {
  const [isOpen, setIsOpen]= useState(false)
  const showMenu = ()=> setIsOpen(!isOpen)
  return (
    <>
      <section className={styles.pageBanner}>
        <div className={styles.pageBannerBackground}>
          <div className={styles.pageTitleBanner}>
            <h1>
              Semblanza Dirección General
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
      <div className={styles.texts}>
        <figure>
          <Image src={direccion_general} />
        </figure>
        <div className={styles.text}>
            {children}
        </div>
      </div>
      <div className="flexContainer">
          {
            !route ? null
            :
            <Link
              href={route}
              className={styles.anchor}
            >
              {textMenu}
            </Link>
          }
      </div>
      <br/>
    </>
  );
};
