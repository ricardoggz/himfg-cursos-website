import Link from 'next/link'
import { Title } from '../title/title'
import styles from './educativeoffer.module.css'

export const EducativeOffer = ()=>{
    return (
        <div className={styles.educativeOfferWrapper}>
            <figure>
                <img src='https://himfg.edu.mx/archivos/graficos/ensenanza/pre-y-posgrado/oferta-academica.png'/>    
            </figure>
            <h2 className={styles.registerTitle}>
                Proceso de registro
            </h2>
                <div className={styles.convocatoriaWrapper}>
                    <Link
                        className={styles.adTitle}
                        href='/convocatoria'
                    >
                        <span>Residencias médicas 2024-2025</span>
                    </Link>
                </div>
            <div className={`flexContainer ${styles.adsWrapper}`}>
                <div>
                    <span
                        className={styles.adSubtitle}
                    >
                        Pregrado
                    </span>
                    <ul className={styles.adList}>
                        <li>
                        <Link
                        href='/inscripcion-pre-y-posgrado/pregrado'
                        >
                            Estancias, tesis, servicio social, prácticas profesionales
                        </Link>
                        </li>
                        <li>
                        <Link
                        href='/inscripcion-pre-y-posgrado/internos'
                        >
                            Médicos internos de pregrado
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
                    <span
                        className={styles.adSubtitle}
                    >
                        Posgrado
                    </span>
                <ul className={styles.adList}>
                        <li>
                            <Link
                                href='/inscripcion-pre-y-posgrado/posgrado'
                            >
                                Médicos rotantes
                            </Link>
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
                        <li>
                            <a
                                href='https://archivos.him.edu.mx/inscripciones-pos-grado/reglamento_residentes.pdf'
                                target='_blank'
                            >
                                Reglamento para residentes
                            </a>
                        </li>
                </ul>
                </div>
            </div>            
        </div>
    )
}