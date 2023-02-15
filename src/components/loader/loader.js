import styles from './loader.module.css'
export const Loader = ()=> {
    return (
        <div className={`${styles.loaderWrapper} flexContainer`}>
            <span className={styles.loader}></span>
            <span>Cargando oferta académica</span>
        </div>
    )
}