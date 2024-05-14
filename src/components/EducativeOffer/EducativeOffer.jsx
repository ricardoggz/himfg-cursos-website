import Link from 'next/link'
import { Title } from '../title/title'
import styles from './educativeoffer.module.css'

export const EducativeOffer = ()=>{
    return (
        <div className={styles.educativeOfferWrapper}>
            <figure>
                <img src='https://archivos.him.edu.mx/graficos/ensenanza/pre-y-posgrado/oferta-academica.png'/>    
            </figure>
            <h2>
                Proceso de registro
            </h2>
            <h2>Estancias, servicio social, prácticas sociales</h2>
            <h2>
                Médicos internos de pregrado
            </h2>
            <h2>Médicos residentes rotantes</h2>
            <div className={`flexContainer ${styles.adsWrapper}`}>
                <div>
                    <Link
                        className={styles.adTitle}
                        href='/inscripcion-pre-y-posgrado/pregrado'
                    >
                        Pregrado
                    </Link>
                    <ul className={styles.adList}>
                        <li>
                        <Link
                        href='/inscripcion-pre-y-posgrado/pregrado'
                        >
                            Registro de estancias, tesis, servicio social, practicas profesionales
                        </Link>
                        </li>
                        <li>
                        <Link
                        href='/inscripcion-pre-y-posgrado/internos'
                        >
                            Registro para médicos internos de pregrado
                        </Link>
                        </li>
                        <li>
                        <a
                            href='https://archivos.him.edu.mx/inscripciones-pos-grado/reglamento_pregrado.pdf'
                            target='_blank'
                        >
                                Reglamento pregrado
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link
                        className={styles.adTitle}
                        href='/inscripcion-pre-y-posgrado/posgrado'
                    >
                        Posgrado
                    </Link>
                <ul className={styles.adList}>
                        <li>
                            <Link
                                href='/inscripcion-pre-y-posgrado/posgrado'
                            >
                                Registro de médicos rotantes
                            </Link>
                        </li>
                        <li>
                            <a
                                href='https://archivos.him.edu.mx/inscripciones-pos-grado/reglamento_residentes.pdf'
                                target='_blank'
                            >
                                Reglamento para residentes
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://archivos.him.edu.mx/inscripciones-pos-grado/reglamento_rotantes.pdf'
                                target='_blank'
                            >
                                Reglamento para residentes rotantes
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://archivos.him.edu.mx/inscripciones-pos-grado/lineamientos-rotaciones.pdf'
                                target='_blank'
                            >
                                Lineamientos para rotación clínica en el HIMFG
                            </a>
                        </li>
                </ul>
                </div>
            </div>            
        </div>
    )
}