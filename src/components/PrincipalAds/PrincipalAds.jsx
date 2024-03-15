import Link from 'next/link'
import styles from './principalads.module.css'

export const PrincipalAds = ()=>{
    return (
        <section className={styles.principalAdsWrapper}>
            <div className={styles.adWrapper}>
                <div className={styles.adMask}>
                    <span className={styles.adTitle}>
                        Especialidades
                    </span>
                </div>
            </div>
            <Link
                className={styles.adWrapper}
                href='/requisitos'
            >
                <div className={styles.adMask}>
                <span className={styles.adTitle}>
                        Requisitos para ingresar al hospital
                    </span>
                </div>
            </Link>
            <div className={styles.adWrapper}>
                <div className={styles.adMask}>
                    <span className={styles.adTitle}>
                        El instituto y su historia
                    </span>
                </div>
            </div>
            <Link
                className={styles.adWrapper}
                href='/voluntariado'
            >
                <div className={styles.adMask}>
                    <span className={styles.adTitle}>
                        Voluntariado
                    </span>
                </div>
            </Link>
            <div className={styles.adWrapper}>
                <div className={styles.adMask}>
                    <span className={styles.adTitle}>
                        Patronato
                    </span>
                </div>
            </div>
            <div className={styles.adWrapper}>
                <div className={styles.adMask}>
                    <span className={styles.adTitle}>
                        Legado artístico
                    </span>
                </div>
            </div>
        </section>
    )
}