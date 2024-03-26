import styles from './especialidades.module.css'
import { Container, Title, PageBanner } from "@/components"
export default function Especialidades(){
    const especialidades = [
        'Alergia e Inmunología',
        'Audiología y Foniatria',
        'Cardiología',
        'C.E.D.I.',
        'Dermatología',
        'Endocrinología',
        'Gastroenterología y Nutrición',
        'Genética',
        'Hematología',
        'Infectología',
        'Psiquiatría Psicología y medicina de adolecentes',
        'Nefrología',
        'Neonatología',
        'Neumología',
        'Neurología',
        'Oncología',
        'Rehabilitación',
        'CLINDI',
        'Cirugía de Tórax',
        'Cirugía Anorrectal',
        'Cirugía Cardiovascular',
        'Cirugía General',
        'Cirugía Plástica',
        'Cuidados Paliativos',
        'Odontopediatría, Estomatología y Ortodoncia',
        'Neurocirugía',
        'Oftalmología',
        'Ortopedia',
        'Otorrinolaringología',
        'Urología',
        'Medicina del Dolor y Anestesia',
        'Pediatría del Desarrollo'
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
                                    {esp}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Container>
        </>
    )
}