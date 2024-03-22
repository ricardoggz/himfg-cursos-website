import Link from 'next/link'
import styles from './principalads.module.css'

export const PrincipalAds = ()=>{
    return (
        <section className={styles.principalAdsWrapper}>
            <Link
                className={styles.especialidadWrapper}
                href='/especialidades'
            >
                <div className={styles.adMask}>
                    <span className={styles.adTitle}>
                        Especialidades
                    </span>
                </div>
            </Link>
            <Link
                className={styles.requisitosWrapper}
                href='/requisitos'
            >
                <div className={styles.adMask}>
                <span className={styles.adTitle}>
                        Requisitos para ingresar al hospital
                    </span>
                </div>
            </Link>
            <Link
                className={styles.historiaWrapper}
                href='/el-instituto-y-su-historia'
            >
                <div className={styles.adMask}>
                    <span className={styles.adTitle}>
                        El instituto y su historia
                    </span>
                </div>
            </Link>
            <Link
                className={styles.voluntariadoWrapper}
                href='/voluntariado'
            >
                <div className={styles.adMask}>
                    <span className={styles.adTitle}>
                        Voluntariado
                    </span>
                </div>
            </Link>
            <Link
                className={styles.patronatoWrapper}
                href='/patronato'
            >
                <div className={styles.adMask}>
                    <span className={styles.adTitle}>
                        Patronato
                    </span>
                </div>
            </Link>
            <div
                className={styles.legadoWrapper}
            >
                <div className={styles.adMask}>
                    <span className={styles.adTitle}>
                        Legado artístico
                    </span>
                </div>
            </div>
        </section>
    )
}