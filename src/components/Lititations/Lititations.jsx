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
                            href='https://himfg.edu.mx/descargas/documentos/licitaciones/nac/CONVOCATORIA_2025_ABARROTES_Y_AGUA_PURIFICADA_DE_GARAFON.pdf'
                            target='_blank'
                        >
                            Abarrotes, Percederos y Agua purificada en garrafón de 20 litros 2025
                        </a>
                        <br/>
                        <br />
                        <p>Cualquier comentario o aclaración al proyecto enviarla al correo: adq_generales@himfg.edu.mx</p>
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