import Link from 'next/link'
import styles from './especialidades.module.css'
import { Container, PageBanner } from "@/components"
export default function Especialidades(){
    const especialidades = [
        {
            name: 'Alergia e Inmunología',
            link: '/'
        },
        {
            name: 'Audiología y Foniatria',
            link:'departamento-de-audiologia-y-foniatria'
        },
        {
            name: 'Cardiología',
            link: 'departamento-de-cardiologia'
        },
        {
            name: 'C.E.D.I.',
            link:'/'
        },
        {
            name: 'Dermatología',
            link:'/'
        },
        {
            name: 'Endocrinología',
            link:'departamento-de-endocrinologia'
        },
        {
            name: 'Gastroenterología y Nutrición',
            link:'gastroenterologia-y-nutricion'
        },
        {
            name:  'Genética',
            link:  'genetica-y-genomica'
        },
        {
            name: 'Hematología',
            link: 'departamento-de-hemato-oncologia'
        },
        {
            name: 'Infectología',
            link: 'departamento-de-infectologia'
        },
        {
            name: 'Psiquiatría Psicología y medicina del adolescente',
            link: 'psiquiatria-y-medicina-del-adolescente'
        },
        {
            name: 'Nefrología',
            link: 'departamento-de-nefrologia'
        },
        {
            name: 'Neonatología',
            link: 'departamento-de-neonatologia'
        },
        {
            name: 'Neumología',
            link: '/'
        },
        {
            name: 'Neurología',
            link: 'departamento-de-neurologia'
        },
        {
            name: 'Oncología',
            link: 'departamento-de-hemato-oncologia'
        },
        {
            name: 'Rehabilitación',
            link: 'departamento-de-rehabilitacion'
        },
        {
            name: 'CLINDI',
            link: '/'
        },
        {
            name: 'Cirugía de Tórax',
            link: 'cirugia-cardiovascular-torax-y-endoscopia'
        },
        {
            name: 'Cirugía Anorrectal',
            link: '/'
        },
        {
            name:  'Cirugía Cardiovascular',
            link: 'cirugia-cardiovascular-torax-y-endoscopia'
        },
        {
            name: 'Cirugía General',
            link: '/'
        },
        {
            name: 'Cirugía Plástica',
            link:'/'
        },
        {
            name: 'Cuidados Paliativos',
            link: 'cuidados-paleativos-y-calidad-de-vida'
        },
        {
            name: 'Odontopediatría',
            link: 'departamento-de-estomatologia'
        },
        {
            name: 'Ortodoncia',
            link: 'departamento-de-estomatologia'
        },
        {
            name: 'Cirugía maxilofacial',
            link: 'departamento-de-estomatologia'
        },
        {
            name: 'Neurocirugía',
            link: 'departamento-de-neurocirugia'
        },
        {
            name: 'Oftalmología',
            link: '/'
        },
        {
            name: 'Ortopedia',
            link: 'departamento-de-ortopedia'
        },
        {
            name: 'Otorrinolaringología',
            link: '/'
        },
        {
            name: 'Urología',
            link: 'departamento-de-urologia'
        },
        {
            name: 'Medicina del Dolor y Anestesia',
            link: 'anestesia-y-algologia'
        },
        {
            name: 'Pediatría del Desarrollo',
            link : '/'
        }
    ]
    return (
        <>
            <PageBanner
                title='Especialidades'
                banner='https://archivos.him.edu.mx/graficos/home/especialidades.webp'
                bannerResponsive='https://archivos.him.edu.mx/graficos/home/especialidades.webp'
            />
            <Container>
                <div className={styles.expecialidadesWrapper}>
                    <ul className={styles.especialidadesGrid}>
                        {
                            especialidades.map((esp, i)=>(
                                <li key={i}>
                                    <Link href={`direccion/${esp.link}`}>
                                        {esp.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Container>
        </>
    )
}