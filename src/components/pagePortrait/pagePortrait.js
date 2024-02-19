import styles from './pagePortrait.module.css'

export const PagePortrait=({image, titular, titularGrade})=>{
    return (
        <section className={styles.pagePortraitWrapper}>
            <div className={styles.pagePortraitContent}>
            <figure>
                <img src={image}/>
            </figure>
            <div>
                <span className={styles.title}>
                    {titular}
                </span>
                <span className={styles.subtitle}>
                    {titularGrade}
                </span>
            </div>
            </div>
        </section>
    )
}