import Link from 'next/link'
import styles from './styles.module.css'
import { Container, Title } from "@/components"

export default function Avisos(){
    return (
        <>
            <nav className={styles.menu}>
                <ul className={styles.menuList}>
                    <li>
                        <Link href='/convocatoria'>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href='/convocatoria/avisos'>
                            Avisos
                        </Link>
                    </li>
                    <li>Convocatoria PDF</li>
                    <li>Registro en línea</li>
                    <li>Flujograma</li>
                    <li>Descargas</li>
                    <li>Preguntas frecuentes</li>
                    <li>Informes</li>
                </ul>
            </nav>
            <Container>
                <Title>CONVOCATORIA PARA ASPIRANTES A CURSOS DE ESPECIALIZACIÓN 2024 - Avisos</Title>
                <div className={`flexContainer ${styles.adsWrapper}`}>
                    <a href='/'>
                        ACEPTADOS CURSO UNIVERSITARIO DE ESPECIALIZACIÓN EN PEDIATRÍA Y GENÉTICA MÉDICA Ver aquí. 
                    </a>
                    <a href='/'>
                        ACEPTADOS CURSOS UNIVERSITARIOS DE ESPECIALIZACIÓN Y PAEM 2024 Ver aquí. 
                    </a>
                </div>
            </Container>
        </>
    )
}