import styles from './styles.module.css'

export default function Convocatoria(){
   return (
    <>
        <nav className={styles.menu}>
        <ul className={styles.menuList}>
            <li>Avisos</li>
            <li>Convocatoria PDF</li>
            <li>Registro en línea</li>
            <li>Flujograma</li>
            <li>Descargas</li>
            <li>Preguntas frecuentes</li>
            <li>Informes</li>
        </ul>
        </nav>
        <section className={styles.photoWrapper}>
            <figure>
                <img src='https://archivos.him.edu.mx/graficos/convocatoria/convocatoria24.jpeg'/>
            </figure>
        </section>
    </>
   ) 
}