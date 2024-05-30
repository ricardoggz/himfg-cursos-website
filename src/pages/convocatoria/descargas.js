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
                    {/*<li>
                        <a
                            href='https://archivos.him.edu.mx/graficos/ensenanza/pre-y-posgrado/convocatoria/CONVOCATORIA_2024.pdf '
                            target='_blank'
                        >
                            Convocatoria PDF
                        </a>
                    </li>*/}
                    {/*<li>
                        <a href='http://ense.himfg.edu.mx/convocatoria/proceso_registro.html'>
                            Registro en línea
                        </a>
                    </li>*/}
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
                    <li>
                        <Link href='/convocatoria/preguntas-frecuentes'>
                            Frecuentes preguntas
                        </Link>
                    </li>
                    <li>
                        <Link href='/convocatoria/informes'>
                            Informes
                        </Link>
                    </li>
                </ul>
            </nav>
            <Container>
                <Title>Descargas disponibles</Title>
                <ol className={`flexContainer ${styles.fileList}`}>
                    <li>
                        <a
                            href='https://archivos.him.edu.mx/graficos/convocatoria/carta_seleccion.pdf'
                            target='_blank'
                        >
                            Carta de selección (descargar)
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://archivos.him.edu.mx/graficos/convocatoria/curriculum_formato.pdf'
                        >
                            Formato currículum (descargar)
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://archivos.him.edu.mx/graficos/convocatoria/convenio.pdf'
                        >
                            Convenio (descargar)
                        </a>
                    </li>
                </ol>
            </Container>
        </>
    )
}