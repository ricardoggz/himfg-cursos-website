import styles from './hemerooptions.module.css'

export const DataBases = ()=>{
    return (
        <div className={styles.hemeroList}>
            <a
                href='http://www.clinicalkey.es'
                terget='_blank'
                className={styles.hemeroListImage}
            >
                <figure>
                    <img src='https://archivos.him.edu.mx/graficos/ensenanza/hemerobiblioteca/clinicalkey.jpeg'/>
                </figure>
            </a>
            <a
                href='https://conricyt.remotexs.co/user/login?dest=http%3A%2F%2Fapps.webofknowledge.com.conricyt.remotexs.co%2FWOS_GeneralSearch_input.do%3Fproduct%3DWOS%26search_mode%3DGeneralSearch%26SID%3D5CpBAX3E1JFLqOzAZOL%26preferencesSaved%3D%26highlighted_tab%3DWOS'
                terget='_blank'
                className={styles.hemeroListImage}
            >
                <figure>
                    <img src='https://archivos.him.edu.mx/graficos/ensenanza/hemerobiblioteca/db_clarivate.jpeg'/>
                </figure>
            </a>
            <a
                href='https://conricyt.remotexs.co/user/login?dest=http%3A%2F%2Fwww.sciencedirect.com.conricyt.remotexs.co%2F'
                terget='_blank'
                className={styles.hemeroListImage}
            >
                <figure>
                    <img src='https://archivos.him.edu.mx/graficos/ensenanza/hemerobiblioteca/db_scienceDirect.jpeg'/>
                </figure>
            </a>
            <a
                href='https://onlinelibrary.wiley.com/'
                terget='_blank'
                className={styles.hemeroListImage}
            >
                <figure>
                    <img src='https://archivos.him.edu.mx/graficos/ensenanza/hemerobiblioteca/db_wiley.jpeg'/>
                </figure>
            </a>
            <a
                href='https://sites.google.com/view/consulta-informacion-conricyt/p%C3%A1gina-principal'
                terget='_blank'
                className={styles.hemeroListImage}
            >
                <figure>
                    <img src='https://archivos.him.edu.mx/graficos/ensenanza/hemerobiblioteca/db_ccinshae.jpeg'/>
                </figure>
            </a>
            <a
                href='http://187.141.21.244/bmhim/consulta.html'
                terget='_blank'
                className={styles.hemeroListImage}
            >
                <figure>
                    <img src='https://archivos.him.edu.mx/graficos/ensenanza/hemerobiblioteca/bd_bm.jpeg'/>
                </figure>
            </a>
            <a
                href='http://187.141.21.244/repositorio/'
                terget='_blank'
                className={styles.hemeroListImage}
            >
                <figure>
                    <img src='https://archivos.him.edu.mx/graficos/ensenanza/hemerobiblioteca/bd_repos.jpeg'/>
                </figure>
                <span>Boletín Médico del Hospital Infantil de México</span>
            </a>
            <a
                href='https://www.karger.com/Resources/Qinsight-es'
                terget='_blank'
                className={styles.hemeroListImage}
            >
                <figure>
                    <img src='https://archivos.him.edu.mx/graficos/ensenanza/hemerobiblioteca/db_karger.jpeg'/>
                </figure>
                <span>Pediatrics in Review</span>
            </a>
        </div>
    )
}