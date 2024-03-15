import styles from './avisos.module.css'
import { Container } from "@/components"

export default function PrivacityPage(){
    return (
        <Container>
            <ul className={styles.privacityWrapper}>
                <li>
                    <a href='https://archivos.him.edu.mx/graficos/avisos-de-privacidad/Documento_Seguridad_sm.doc'>
                        Aviso de privacidad Simplificado para el Uso de Estacionamiento en el HIMFG
                    </a>
                </li>
                <li>
                    <a href='https://archivos.him.edu.mx/graficos/avisos-de-privacidad/Avisos_datos_sm.doc'>
                        Documento de Seguridad para la Protección de Datos Personales en Posesión de la Subdirección de Mantenimiento.
                    </a>
                </li>
            </ul>
        </Container>
    )
}