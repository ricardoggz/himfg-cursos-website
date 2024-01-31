import cirugia from '../../assets/cirugia.jpg'
import consulta from '../../assets/consulta.jpg'
import { PageBanner, TextsPage } from '../../components'

const Investigacion = ()=>{
    return (
        <>
            <PageBanner
                title='Semblanza Dirección Investigación'
                banner='https://archivos.him.edu.mx/graficos/investigacion/2do-grafico.jpg'
            >
            <p>
                El Hospital Infantil de México tiene 78 años brindando atención pediátrica especializada a la niñez más desprotegida de nuestro país, su modelo de atención, enseñanza e investigación, han sido repetidos en los actuales Institutos Nacionales de Salud y otros hospitales del país y de América Latina.
                Sus recursos provienen en su mayoría de las arcas federales y atenciones subrogadas, sin embargo, no es suficiente.
                Nuestro Instituto es pionero de pediatría en el país en una gran cantidad de temas del desarrollo y de vanguardia como: vacunas, bacteriología, infectología, nutrición, nefrología, endocrinología, cirugía de corazón, trasplantes de corazón, riñón, etc.
                Ha sido siempre un icono de la Pediatría Nacional, hemos publicado más de 300 libros; múltiples artículos científicos, capítulos de libros desde hace más de 17 años tenemos el "Programa Sigamos Aprendiendo en el Hospital" que apoya a los pacientes a continuar con sus estudios estando hospitalizados tenemos una historia larga en la formación de alumnos de todas las especialidades pediátricas, cuenta con 349 camas, 158 consultorios, 12 quirófanos y 3 terapias intensivas y el desarrollo de la investigación tanto clínica como básica forma parte de nuestra esencia.
            </p>
            </PageBanner>
            <TextsPage
                firstText={
                    `
                    El Hospital Infantil de México tiene 78 años brindando atención pediátrica especializada a la niñez más desprotegida de nuestro país, su modelo de atención, enseñanza e investigación, han sido repetidos en los actuales Institutos Nacionales de Salud y otros hospitales del país y de América Latina.
                    Sus recursos provienen en su mayoría de las arcas federales y atenciones subrogadas, sin embargo, no es suficiente.
                    Nuestro Instituto es pionero de pediatría en el país en una gran cantidad de temas del desarrollo y de vanguardia como: vacunas, bacteriología, infectología, nutrición, nefrología, endocrinología, cirugía de corazón, trasplantes de corazón, riñón, etc.
                    Ha sido siempre un icono de la Pediatría Nacional, hemos publicado más de 300 libros; múltiples artículos científicos, capítulos de libros desde hace más de 17 años tenemos el "Programa Sigamos Aprendiendo en el Hospital" que apoya a los pacientes a continuar con sus estudios estando hospitalizados tenemos una historia larga en la formación de alumnos de todas las especialidades pediátricas, cuenta con 349 camas, 158 consultorios, 12 quirófanos y 3 terapias intensivas y el desarrollo de la investigación tanto clínica como básica forma parte de nuestra esencia.
                    `
                }
                secondText={
                    `
                    El Hospital Infantil de México tiene 78 años brindando atención pediátrica especializada a la niñez más desprotegida de nuestro país, su modelo de atención, enseñanza e investigación, han sido repetidos en los actuales Institutos Nacionales de Salud y otros hospitales del país y de América Latina.
                    Sus recursos provienen en su mayoría de las arcas federales y atenciones subrogadas, sin embargo, no es suficiente.
                    Nuestro Instituto es pionero de pediatría en el país en una gran cantidad de temas del desarrollo y de vanguardia como: vacunas, bacteriología, infectología, nutrición, nefrología, endocrinología, cirugía de corazón, trasplantes de corazón, riñón, etc.
                    Ha sido siempre un icono de la Pediatría Nacional, hemos publicado más de 300 libros; múltiples artículos científicos, capítulos de libros desde hace más de 17 años tenemos el "Programa Sigamos Aprendiendo en el Hospital" que apoya a los pacientes a continuar con sus estudios estando hospitalizados tenemos una historia larga en la formación de alumnos de todas las especialidades pediátricas, cuenta con 349 camas, 158 consultorios, 12 quirófanos y 3 terapias intensivas y el desarrollo de la investigación tanto clínica como básica forma parte de nuestra esencia.
                    `
                }
                firstImage='https://archivos.him.edu.mx/graficos/investigacion/2do-grafico.jpg'
                secondImage='https://archivos.him.edu.mx/graficos/investigacion/primer-grafico.jpg'
            />
        </>
    )
}

export default Investigacion