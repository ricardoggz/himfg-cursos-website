import styles from './footer.module.css'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
export const Footer = ()=>{
    return (
        <footer className={styles.footerWrapper}>
            <ul className={`${styles.footerList} flexContainer`}>
                <div>
                    <li>Redes sociales:</li>
                    <li>
                        <a
                        href='https://www.facebook.com/HospitalInfantilDeMexicoFG/?locale=es_LA'
                        target={'_blank'}
                        >
                            <BsFacebook />
                        </a>
                    </li>
                    <li>
                        <a
                        href='https://twitter.com/T_HIMFG'
                        target={'_blank'}
                        >
                            <BsTwitter />
                        </a>
                    </li>
                </div>
                <div>
                    <li>Dirección:</li>
                    <li>
                        Dr.Márquez No.162, Col. Doctores, Delegación Cuauhtémoc; Mexico D.F. C.P 06720
                    </li>
                </div>
                <div>
                    <li>Teléfono:</li>
                    <li>
                        55 52 28 99 17
                    </li>
                </div>
            </ul>
            <p className={styles.copyRight}>
                HIMFG - Todos los derechos reservados &copy;
            </p>
        </footer>
    )
}