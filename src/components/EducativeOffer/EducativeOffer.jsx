import Link from 'next/link'
import styles from './educativeoffer.module.css'

export const EducativeOffer = ()=>{
    return (
        <div className={styles.educativeOfferWrapper}>
            <figure>
                <img src='https://archivos.him.edu.mx/graficos/ensenanza/pre-y-posgrado/oferta-academica.png'/>    
            </figure>
            <div className={`flexContainer ${styles.adsWrapper}`}>
                <div>
                    <Link
                        className={styles.adTitle}
                        href='/inscripcion-pre-y-posgrado/pregrado'
                    >
                        Pre grado
                    </Link>
                    <ul className={styles.adList}>
                        
                    </ul>
                </div>
                <div>
                    <Link
                        className={styles.adTitle}
                        href='inscripcion-pre-y-posgrado/posgrado'
                    >
                        Pos grado
                    </Link>
                <ul className={styles.adList}>
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