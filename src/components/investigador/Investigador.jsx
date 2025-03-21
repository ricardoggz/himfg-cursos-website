import styles from './styles.module.css'
import { showCurriculum } from './Curriculum'

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
                        <p>DR. ERNESTO CALDERÓN JAIMES</p>
                    </div>
                    <div className={styles.investigadorLink}>
                        <button onClick={showCurriculum}>Ver síntesis curricular</button>
                    </div>
                </div>
            </div>
        </section>
    )
}