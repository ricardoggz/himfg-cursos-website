import styles from './pagePortrait.module.css'

export const PagePortrait=()=>{
    const imageUrl='https://archivos.him.edu.mx/graficos/direccion-medica.png'
    return (
        <section className={styles.pagePortraitWrapper}>
            <figure>
                <img src={imageUrl}/>
            </figure>
            <div>
                <span className={styles.title}>
                    Dra.  Mónica Villa Guillén
                </span>
                <span className={styles.subtitle}>
                    Dirección Médica
                </span>
            </div>
        </section>
    )
}