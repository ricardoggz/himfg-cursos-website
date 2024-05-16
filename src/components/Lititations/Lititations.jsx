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
        </div>
    )
}