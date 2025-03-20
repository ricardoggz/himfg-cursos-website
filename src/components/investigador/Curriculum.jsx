import Swal from "sweetalert2"
import { Title } from '@/components'
import styles from './styles.module.css'
import withReactContent from "sweetalert2-react-content"

const Alert = withReactContent(Swal)

export const showCurriculum = () => {
    return Alert.fire({
        html: <Curriculum />,
        customClass: {
            container: styles.curriculumWrapper
        },
        showConfirmButton: false,
        showCloseButton: true,
        width: 'auto',
    })
}
const Curriculum = () => {
    return (
        <section className={styles.curriculumWrapper}>
            <Title>Dra. Martha Avilés Robles</Title>
            <div className={`${styles.sintesisWrapper} flexContainer`}>
                <div className={styles.sintesisTextos}>
                    <div>
                        <p>
                            · Investigador en Ciencias Médicas “F”.

                            · Miembro del sistema Nacional de Investigadoras e Investigadores Nivel 3.

                            · Miembro de la Academia Nacional de Ciencias.

                            · Miembro del Comité de Investigación, Comité Interno para el Cuidado y Uso de los Animales de Laboratorio, en el Hospital Infantil de México Federico Gómez.

                            · Miembro de la Comisión Dictaminadora del Sistema Nacional de Investigadoras e Investigadores (SNII), Comité de Ciencia Básica y Fronteras del SECIHTI.

                            · Miembro de la Sociedad Mexicana de Bioquímica, Sociedad Americana de Microbiología, Asociación Mexicana de Infectología y Microbiología Clínica.

                            · Asistencia de más de 174 Congresos Nacionales e Internacionales.

                            · Autor de 123 artículos internacionales y 8 capítulos de microbiología.

                            · Profesor de cursos (14) a nivel de Licenciatura y Posgrado, Maestría y Doctorado.

                            · Acreedor de diversos donativos o financiamientos: 4 de Ciencia Básica/ Fronteras de SECIHTI, 51 proyectos financiados por Fondos Federales por el HIMFG.

                            · Tutor de alumnos de Licenciatura, Maestría y Doctorado de la BUAP, IPN y UNAM.

                            · Alumnos titulados de Licenciatura, Maestría y Doctorado: 4 alumnos de Doctorado, 10 alumnos de Maestría, y 29 alumnos de Licenciatura.

                            · Alumnos con grado y mención honorifica: 2 alumnos de Doctorado, 9 alumnos de Maestría y 1 alumnos de Licenciatura.

                            · Ganador de 4 veces del Premio Anual de Investigación Pediátrica Aaron Sáenz, 2 primeros lugares en la categoría Biomédica, 1 primer lugar en el área clínica epidemiológica y un segundo lugar en el área clínica epidemiológica.

                            · De la asistencia a los Congreso, 15 trabajos presentados han sido galardonados, primero o segundo lugar.

                            · Jurado Calificador en varios eventos científicos: Premio Mujeres en Ciencias Biológicas y de la Salud “Matilde Montoya, Dr. Jorge Rosenkranz, Lola E Igo Flisser-Puis, Innovación y Talento Emprendedor de la BUAP, y Reunión de Investigación Pediátrica y Reunión de Investigación en Enfermería pediátrica.

                            · Dos patentes generados, uno Nacional con registro MX/E/2017/075842 y otro internacional con registro US 2020/0369732 A1.

                            · Editor y revisor de las principales revistas internacionales de Microbiología.
                            Lineas de Investigación

                            1. Epidemiología molecular y diversidad genética en cepas asociadas a brotes hospitalarios (Escherichia coli uropatogénica, Staphylococcus aureus, y Stenotrophomonas maltophilia y Enterococcus faecalis y Enterococcus faecium).

                            2. Caracterización molecular y fenotípica de adhesinas fimbriales en cepas de Escherichia coli uropatogénicas asociada con ifecciones del tracto urinario, complicado y recurrente.

                            3. Diseño de proteínas de fusión en base a determinantes antigénicos de Escherichia coli uropatogénica, como propuestas de vacunas viables contra las ifecciones del tracto urinario por Escherichia coli uropatogénica.

                            4. Análisis proteómicos y metabolómicos de patógenos oportunistas (Escherichia coli uropatogénica, Staphylococcus aureus, Serratia marcescens, K. pneumoniae, Enterococcus faecalis y Enterococcus faecium).

                            5. Modelo murino de infección de tracto urinario transuretral en la evaluación de proteínas de fusión con base en adhesinas fimbriales de UPEC.
                        </p>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href='https://onlinelibrary.wiley.com/doi/10.1002/pbc.28251'>https://onlinelibrary.wiley.com/doi/10.1002/pbc.28251</a>
                        </li>
                        <li>
                            <a href='https://bmchealthservres.biomedcentral.com/articles/10.1186/s12913-024-11442-w'>https://bmchealthservres.biomedcentral.com/articles/10.1186/s12913-024-11442-w</a>
                        </li>
                        <li>
                            <a href='https://academic.oup.com/jpids/article/11/11/498/6655604?login=false'>https://academic.oup.com/jpids/article/11/11/498/6655604?login=false</a>
                        </li>
                        <li>
                            <a href='https://academic.oup.com/jpids/article/12/9/487/7243712?login=false'>https://academic.oup.com/jpids/article/12/9/487/7243712?login=false</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}