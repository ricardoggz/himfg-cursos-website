import Link from 'next/link'
import styles from './especialidades.module.css'
import { Container, PageBanner } from "@/components"
export default function Especialidades(){
    const especialidades = [
        {
            name: 'Alergia e Inmunología',
            link: '/especialidades'
        },
        {
            name: 'Audiología y Foniatria',
            link:'direccion/departamento-de-audiologia-y-foniatria'
        },
        {
            name: 'Cardiología',
            link: 'direccion/departamento-de-cardiologia'
        },
        {
            name: 'C.E.D.I.',
            link:'/especialidades'
        },
        {
            name: 'Dermatología',
            link:'/especialidades'
        },
        {
            name: 'Endocrinología',
            link:'direccion/departamento-de-endocrinologia'
        },
        {
            name: 'Gastroenterología y Nutrición',
            link:'direccion/gastroenterologia-y-nutricion'
        },
        {
            name:  'Genética',
            link:  'direccion/genetica-y-genomica'
        },
        {
            name: 'Hematología',
            link: 'direccion/departamento-de-hemato-oncologia'
        },
        {
            name: 'Infectología',
            link: 'direccion/departamento-de-infectologia'
        },
        {
            name: 'Psiquiatría Psicología y medicina del adolescente',
            link: 'direccion/psiquiatria-y-medicina-del-adolescente'
        },
        {
            name: 'Nefrología',
            link: 'direccion/departamento-de-nefrologia'
        },
        {
            name: 'Neonatología',
            link: 'direccion/departamento-de-neonatologia'
        },
        {
            name: 'Neumología',
            link: '/especialidades'
        },
        {
            name: 'Neurología',
            link: 'direccion/departamento-de-neurologia'
        },
        {
            name: 'Oncología',
            link: 'direccion/departamento-de-hemato-oncologia'
        },
        {
            name: 'Rehabilitación',
            link: 'direccion/departamento-de-rehabilitacion'
        },
        {
            name: 'CLINDI',
            link: '/especialidades'
        },
        {
            name: 'Cirugía de Tórax',
            link: 'direccion/cirugia-cardiovascular-torax-y-endoscopia'
        },
        {
            name: 'Cirugía Anorrectal',
            link: '/especialidades'
        },
        {
            name:  'Cirugía Cardiovascular',
            link: 'direccion/cirugia-cardiovascular-torax-y-endoscopia'
        },
        {
            name: 'Cirugía General',
            link: '/especialidades'
        },
        {
            name: 'Cirugía Plástica',
            link:'/especialidades'
        },
        {
            name: 'Cuidados Paliativos',
            link: 'direccion/cuidados-paleativos-y-calidad-de-vida'
        },
        {
            name: 'Odontopediatría',
            link: 'direccion/departamento-de-estomatologia'
        },
        {
            name: 'Ortodoncia',
            link: 'direccion/departamento-de-estomatologia'
        },
        {
            name: 'Cirugía maxilofacial',
            link: 'direccion/departamento-de-estomatologia'
        },
        {
            name: 'Neurocirugía',
            link: 'direccion/departamento-de-neurocirugia'
        },
        {
            name: 'Oftalmología',
            link: '/especialidades'
        },
        {
            name: 'Ortopedia',
            link: 'direccion/departamento-de-ortopedia'
        },
        {
            name: 'Otorrinolaringología',
            link: '/especialidades'
        },
        {
            name: 'Urología',
            link: 'direccion/departamento-de-urologia'
        },
        {
            name: 'Medicina del Dolor y Anestesia',
            link: 'direccion/anestesia-y-algologia'
        },
        {
            name: 'Pediatría del Desarrollo',
            link : '/especialidades'
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
                                    <Link href={`${esp.link}`}>
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