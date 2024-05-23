import Link from 'next/link'
import styles from './styles.module.css'
import { Title, Container } from '@/components'

export default function Descargas(){
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
                    <li>
                        <a
                            href='https://archivos.him.edu.mx/graficos/ensenanza/pre-y-posgrado/convocatoria/CONVOCATORIA_2024.pdf '
                            target='_blank'
                        >
                            Convocatoria PDF
                        </a>
                    </li>
                    <li>
                        <Link href='/convocatoria/registro'>
                            Registro en línea
                        </Link>
                    </li>
                    <li>
                        <a
                        href='https://archivos.him.edu.mx/graficos/ensenanza/pre-y-posgrado/convocatoria/FLUJOGRAMA.pdf'
                        target='_blank'
                        >
                            Flujograma
                        </a>
                    </li>
                    <li>
                        <Link href='/convocatoria/descargas'>
                            Descargas
                        </Link>
                    </li>
                    <li>Preguntas frecuentes</li>
                    <li>Informes</li>
                </ul>
            </nav>
            <Container>
                <Title>Descargas disponibles</Title>
                <ol className={`flexContainer ${styles.fileList}`}>
                    <li>
                        <a href='https://archivos.him.edu.mx/graficos/convocatoria/curriculum.docx'>
                            Carta de selección (descargar)
                        </a>
                    </li>
                    <li>
                        <a href='https://archivos.him.edu.mx/graficos/convocatoria/CURRICULUM_VITAE_PLANTILLA.docx'>
                            Formato currículum (descargar)
                        </a>
                    </li>
                </ol>
            </Container>
        </>
    )
}