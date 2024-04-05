import Link from 'next/link';
import styles from './hemeroOptions.module.css'
import { Container } from "../container/container"
import { HiMiniClipboardDocumentList } from "react-icons/hi2"
import { MdOutlineMiscellaneousServices } from "react-icons/md"
import { BsCollectionFill } from "react-icons/bs"
import { GrCatalog } from "react-icons/gr"
import { IoBook } from "react-icons/io5"
import { GoDatabase } from "react-icons/go"
import { HiLink } from "react-icons/hi2"
import { IoMdContact } from "react-icons/io"
import { showHemeroOption } from './ModalOptions'
import { Rules } from './Rules'
import { Services } from './Services'
import { Collections } from './Collections';

export const HemeroOptions = ()=>{
    return (
        <Container>
                <div className={`flexContainer ${styles.hemeroOptionsGrid}`}>
                    <button
                        className={styles.hemeroOption}
                        href='/'
                        onClick={()=>showHemeroOption({
                            html: <Rules/>,
                            className: 'hemeroList'
                        })}
                    >
                        <HiMiniClipboardDocumentList/>
                        <span>Reglamento</span>
                    </button>
                    <button
                        className={styles.hemeroOption}
                        onClick={()=>showHemeroOption({
                            html: <Services/>,
                            className: 'hemeroList'
                        })}
                    >
                        <MdOutlineMiscellaneousServices/>
                        <span>Servicios</span>
                    </button>
                    <button
                        className={styles.hemeroOption}
                        onClick={()=>showHemeroOption({
                            html: <Collections/>,
                            className: 'hemeroList'
                        })}
                    >
                        <BsCollectionFill/>
                        <span>Colecciones</span>
                    </button>
                    <Link
                        className={styles.hemeroOption}
                        href='/'
                    >
                        <GrCatalog/>
                        <span>Catálogo</span>
                    </Link>
                    <Link
                        className={styles.hemeroOption}
                        href='/'
                    >
                        <IoBook/>
                        <span>Revistas en línea</span>
                    </Link>
                    <Link
                        className={styles.hemeroOption}
                        href='/'
                    >
                        <GoDatabase/>
                        <span>Bases de datos</span>
                    </Link>
                    <Link
                        className={styles.hemeroOption}
                        href='/'
                    >
                        <HiLink/>
                        <span>Ligas de interés</span>
                    </Link>
                    <Link
                        className={styles.hemeroOption}
                        href='/'
                    >
                        <IoMdContact/>
                        <span>Contacto</span>
                    </Link>
                </div>
        </Container>
    )
}