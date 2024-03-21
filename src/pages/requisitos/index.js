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
                    <p>
                        <b>Consulta de primera vez</b>
                    </p>
                    <p><b>0-18 años.</b> Al Hospital Infantil de México Federico Gomez, solo ingresan pacientes desde recién nacidos hasta los 18 años de edad.</p>
                    <p><b>Sin seguridad social.</b> Es requisito NO contar con ningún tipo de seguridad social: IMSS, ISSSTE, Pemex, Sedena, etc.</p>
                    <p><b>CURP:</b> Es indispensable presentar la CURP de padre y madre. De ser posible, también presentar la CURP del paciente.</p>
                    <p><b>Enfermedades complejas.</b> El hospital trata únicamente padecimientos de alta especialidad, conocidos como de Tercer Nivel de atención. Pacientes con afecciones simples no serán atendidos.</p>
                    <p><b>Puerta 4.</b> Para ingresar, primero debe de usted acudir a la “Ventanilla de Verificación de Derechohabiencia” ubicada en la puerta 4.</p>
                    <p><b>Horario:</b> Asistir a la institución de lunes a viernes en un horario de 7:00 a 9:00 a.m.</p>
                    <p>Todos los pacientes deben ser referidos por otra institución.</p>
                </div>
            </Container>
        </>
    )
}