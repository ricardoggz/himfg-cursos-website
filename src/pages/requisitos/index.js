import styles from './requisitos.module.css'
import { Container, Title, PageBanner } from "@/components"
export default function Voluntariado(){
    return (
        <>
            <PageBanner
                title='Requisitos para ingresar al hospital'
                banner='https://archivos.him.edu.mx/graficos/home/requisitos.webp'
                bannerResponsive='https://archivos.him.edu.mx/graficos/home/requisitos.webp'
            />
            <Container>
                <div className={styles.requirementsWrapper}>
                   <center>
                        <p>
                            <b>Requisitos de Consulta de primera vez</b>
                        </p>
                   </center>
                   <p>
                   El Hospital Infantil de México Federico Gómez trata únicamente <b>padecimientos de alta especialidad</b>, conocidos como de Tercer Nivel de Atención. 
                   </p>
                    <p><b>0-18 años.</b> Sólo podrán ser atendidos niños, niñas y adolescentes antes de cumplir la mayoría de edad.</p>
                    <p><b>Sin seguridad social.</b> Es requisito NO contar con ningún tipo de seguridad social: IMSS, ISSSTE, Pemex, Sedena, etc.</p>
                    <p><b>Hoja de referencia.</b> Todos los pacientes deben ser referidos por otra institución de segundo nivel del sector salud público (hospitales pediátricos y maternos, sean generales o regionales).</p>
                    <p><b>CURP:</b> Presentar los tres CURP: paciente, mamá y papá. En caso de que el paciente esté registrado sólo con los apellidos de la madre o padre, presentar ambos CURPS.</p>
                    <p><b>Hoja de alumbramiento.</b> Únicamente para menores que no estén registrados y no cuenten con CURP.</p>
                    <p>En caso de ser extranjero presentar identificación del niño, niña o adolescente y de ambos padres.</p>
                    <p><b>Acceso:</b> Debe acudir a la “Ventanilla de Verificación de Derechohabiencia”, ubicada en Puerta 4 para revisar los documentos previos y ser valorados por los médicos de filtro.</p>
                    <p>
                        <b>Horario de atención.</b>
                        De lunes a viernes de 7:00 a 9:00 a.m. Sábados, domingos y días festivos no hay atención de primera vez.
                        En caso de urgencia acudir directamente a Puerta 2, las 24 hrs los 365 días del año.
                        Sólo se permitirá el acceso al paciente con la mamá o papá, o en caso necesario el representante legal.
                    </p>
                </div>
            </Container>
        </>
    )
}