import styles from './styles.module.css'

export const Investigador = () => {
    return (
        <section className={styles.investigadorWrapper}>
            <div className={`flexContainer ${styles.investigadorTitulos}`}>
                <figure className={styles.investigadorImagen}>
                    <img
                        src='https://himfg.edu.mx/fotos-investigadores/dr-nuevo-2.png'
                    />
                </figure>
                <div className={styles.investigadorTextos}>
                    <div className={styles.investigadorNombre}>
                        <p>Esteban Benjamín Gonzáles Molina</p>
                    </div>
                    <div className={styles.investigadorLink}>
                        <a href='#'>Ver Síntesis curricular</a>
                    </div>
                </div>
            </div>
        </section>
    )
}