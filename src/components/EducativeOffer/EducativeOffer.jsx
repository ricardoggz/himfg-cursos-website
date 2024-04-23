import styles from './educativeoffer.module.css'

export const EducativeOffer = ()=>{
    return (
        <div className={styles.educativeOfferWrapper}>
            <figure>
                <img src='https://archivos.him.edu.mx/graficos/ensenanza/pre-y-posgrado/oferta-academica.png'/>    
            </figure>
            <div className={`flexContainer ${styles.adsWrapper}`}>
                <div>
                    <span className={styles.adTitle}>
                        Pre grado
                    </span>
                    <ul className={styles.adList}>
                        <li>Opción 1</li>
                        <li>Opción 1</li>
                        <li>Opción 1</li>
                        <li>Opción 1</li>
                    </ul>
                </div>
                <div>
                <span className={styles.adTitle}>Pos grado</span>
                <ul className={styles.adList}>
                        <li>Opción 1</li>
                        <li>Opción 1</li>
                        <li>Opción 1</li>
                        <li>Opción 1</li>
                </ul>
                </div>
            </div>            
        </div>
    )
}