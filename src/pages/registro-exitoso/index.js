'use client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { Container, Title } from "../../components"

export default function () {
    const router = useRouter()
    const [paymentInfo, setPaymentInfo] = useState(null)
    useEffect(() => {
        if (window && localStorage.getItem('course')) {
            setPaymentInfo({
                ...JSON.parse(localStorage.getItem('user')),
                ...JSON.parse(localStorage.getItem('course')),
                reference: localStorage.getItem('reference')
            })
        } else {
            router.push('/')
        }
    }, [])
    console.log(paymentInfo)
    return (
        <Container>
            {
                paymentInfo && paymentInfo.course_price === 0 ? <Title>Registro exitoso</Title> : <Title>Su pago ha sido aprobado</Title>
            }
            <div className={`${styles.checkWrapper} flexContainer`}>
                <FaCheckCircle />
                {
                    !paymentInfo ? null
                        :
                        <div>
                            <p>
                                Su documentación será validada por el Departamento de Educación Médica Continua,
                                le recomendamos estar atento a la bandeja de entrada, correo no deseado o spam y busque el siguiente remitente: lcruz@himfg.edu.mx
                            </p>
                            <Title>Referencia: {paymentInfo.reference}</Title>
                            <Link href='/'>Volver al inicio</Link>
                        </div>
                }
            </div>
        </Container>
    )
}