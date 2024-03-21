import Link from 'next/link'
import styles from './principalads.module.css'

export const PrincipalAds = ()=>{
    return (
        <section className={styles.principalAdsWrapper}>
            <Link
                style={
                    {
                        background:`
                        url('https://archivos.him.edu.mx/graficos/home/especialidades.webp')
                        no-repeat;`,
                        backgroundSize: `cover;`,
                        backgroundPosition: `center;`,
                        height:`400px;`,
                        width:`100%;`
                    }
                }
                href='/especialidades'
            >
                <div className={styles.adMask}>
                    <span className={styles.adTitle}>
                        Especialidades
                    </span>
                </div>
            </Link>
            <Link
                style={
                    {
                        background:`
                        url('https://archivos.him.edu.mx/graficos/home/requisitos.webp')
                        no-repeat;`,
                        backgroundSize: `cover;`,
                        backgroundPosition: `center;`,
                        height:`400px;`,
                        width:`100%;`
                    }
                }
                href='/requisitos'
            >
                <div className={styles.adMask}>
                <span className={styles.adTitle}>
                        Requisitos para ingresar al hospital
                    </span>
                </div>
            </Link>
            <div
                style={
                    {
                        background:`
                        url('https://archivos.him.edu.mx/graficos/home/el-instituto.webp')
                        no-repeat;`,
                        backgroundSize: `cover;`,
                        backgroundPosition: `top;`,
                        height:`400px;`,
                        width:`100%;`
                    }
                }
            >
                <div className={styles.adMask}>
                    <span className={styles.adTitle}>
                        El instituto y su historia
                    </span>
                </div>
            </div>
            <Link
                style={
                    {
                        background:`
                        url('https://archivos.him.edu.mx/graficos/home/voluntariado.webp')
                        no-repeat;`,
                        backgroundSize: `cover;`,
                        backgroundPosition: `top;`,
                        height:`400px;`,
                        width:`100%;`
                    }
                }
                href='/voluntariado'
            >
                <div className={styles.adMask}>
                    <span className={styles.adTitle}>
                        Voluntariado
                    </span>
                </div>
            </Link>
            <Link
                style={
                    {
                        background:`
                        url('https://archivos.him.edu.mx/graficos/home/patronato.webp')
                        no-repeat;`,
                        backgroundSize: `cover;`,
                        backgroundPosition: `top;`,
                        height:`400px;`,
                        width:`100%;`
                    }
                }
                href='/patronato'
            >
                <div className={styles.adMask}>
                    <span className={styles.adTitle}>
                        Patronato
                    </span>
                </div>
            </Link>
            <div
                style={
                    {
                        background:`
                        url('https://archivos.him.edu.mx/graficos/home/legado-artistico.webp')
                        no-repeat;`,
                        backgroundSize: `cover;`,
                        backgroundPosition: `top;`,
                        height:`400px;`,
                        width:`100%;`
                    }
                }
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