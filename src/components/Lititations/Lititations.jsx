import { FaBook } from "react-icons/fa"
import styles from '../FileList/filelist.module.css'
import { FileListModal } from "../FileList/FileListModal"

export const Lititations = ()=>{
    return (
        <div className={`flexContainer ${styles.fileListGrid}`}>
            <FileListModal
                icon={<FaBook />}
                title='Licitaciones'
            >
                <span>Licitaciones</span>
                <br/>
                <ul>
                    <li>
                        <a
                            href='http://himfg.com.mx/interna/diradminist/licitaciones.php'
                            target='_blank'
                        >
                            Consultar licitaciones
                        </a>
                    </li>
                </ul>
            </FileListModal>
            <FileListModal
                icon={<FaBook />}
                title='Informe de Gestión Gubernamental del HIMFG'
            >
                <span>Informe de Gestión Gubernamental del HIMFG</span>
                <br/>
                <ul>
                    <li>
                        <a
                            href='https://himfg.edu.mx/administracion/LINEAMIENTOS_GENERALES_ADMINISTRACION_PUBLICA_FEDERAL.pdf'
                            target='_blank'
                        >
                            Consultar Informe
                        </a>
                    </li>
                </ul>
            </FileListModal>
        </div>
    )
}