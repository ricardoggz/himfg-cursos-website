'use client'
import Link from 'next/link'
import styles from './styles.module.css'
import { Container, Title } from "@/components"
export default function () {
    return (
        <Container>
            <Title>Considera estos puntos antes de realizar tu pago</Title>
            <div className={`${styles.considerationWrapper} flexContainer`}>
                <ul>
                    <li className={styles.considerationTitle}>Facturación del curso:</li>
                    <li>
                        Debido a que los pagos en línea pueden tardar hasta 72 horas hábiles en reflejarse, es importante, que se efectúen antes de los últimos días del mes, en el supuesto de solicitar el Comprobante Fiscal por Internet (CFDI) dentro del mes de pago; en caso contrario, la factura se realizará dentro del siguiente mes.
                        Ejemplo: Si el pago se realiza el 31 de enero 2025, la factura podrá emitirse a partir del 04 de febrero 2024, debido a que las primeras 72 horas son días inhábiles (sábado y domingo) así como el 03 de febrero (festivo).
                    </li>
                </ul>
                <ul>
                    <li className={styles.considerationTitle}>Códigos de Seguridad:</li>
                    <li>
                        Cabe mencionar que, por seguridad en las compras en línea, algunos bancos envían a través de mensajes de texto “códigos de verificación”; por lo que, es responsabilidad de cada usuario estar al pendiente de recibir esta información en sus respectivos números telefónicos para completar las transacciones.

                        Todas las transacciones (autorización o rechazo) se realizan entre el banco emisor (tarjetahabiente) y banco adquiriente (BANORTE); por lo que, se deslinda al Hospital o servidor público de cualquier cargo incorrecto (cargo duplicado, monto erróneo, entre otros). Se deberá presentar una reclamación o aclaración con directamente con el banco o Institución Financiera del interesado.
                    </li>
                </ul>
                <ul>
                    <li className={styles.considerationTitle}>Recomendaciones:</li>
                    <li>
                        Procura no inscribirte y efectuar el pago desde una red Wi-Fi pública o abierta, debido a la inestabilidad de la señal.

                        Cerciorarse desde la app bancaria (de cada participante), que el pago fue aceptado, declinado o devuelto.
                    </li>
                </ul>
                <ul>
                    <li className={styles.considerationTitle}>Importante:</li>
                    <li>
                        Mientras no se haya completado el pago, es decir generado una cadena alfanumérica (ejemplo: HIMFGCURSOS233OZD70JAucK), o en caso de no recibir correo de confirmación de inscripción el registró estará inconcluso.
                    </li>
                </ul>
                <ul>
                    <li className={styles.considerationTitle}>Formas de pago:</li>
                    <li>
                        Preferentemente Tarjetas de crédito o débito mediante sitio web del Hospital.
                    </li>
                    <li className={styles.considerationTitle}>
                        Existen tres alternativas más:
                        <ul>
                            <li>* Transferencia bancaria (Cta. CLABE virtual)</li>
                            <li>* Corresponsales bancarios (7-Eleven, Farmacias del Ahorro, Tiendas de conveniencia, etc.).</li>
                            <li>* Efectivo: pago en ventanilla bancaria (mediante referencias, proporcionadas por el Área de Enseñanza).</li>
                            <li>Nota: Estas formas de pago generan comisión que corre por cuenta del interesado.</li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href='/registro' className={styles.considerationLink}>
                            Continuar al pago
                        </Link>
                    </li>
                </ul>
            </div>
        </Container>
    )
}