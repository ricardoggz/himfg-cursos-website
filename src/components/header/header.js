import { useContext} from 'react'
import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'
import styles from './header.module.css'
import { UserContext } from '../../contexts'

export const Header =()=>{
    const { user, logout } = useContext(UserContext)
    return (
        <>
            <header className={styles.headerWrapper}>
            <nav className={`${styles.headerNav} flexContainer`}>
                <Link href='/'>
                    <img
                        src={'https://res.cloudinary.com/diuxbqmn5/image/upload/v1677008056/gob-logo_bmloho.webp'}
                        alt='Gobierno de México'
                    />
                </Link>
                <ul>
                {
                    !user ?
                    <>
                        <li>
                            <Link href='/register'>
                                Registro
                            </Link>
                        </li>
                        <li>
                            <a href='http://himfg.com.mx/interna/transparencia/transparencia.php' target='_blank'>
                                Transparencia
                            </a>
                        </li>
                        <li>
                            <Link href='/userlogin'>
                                <AiOutlineUser className={styles.userLoginIcon}/>
                            </Link>
                        </li>
                    </>
                    :
                    <>
                        <li>
                            <Link href='/profile'>
                                <AiOutlineUser className={styles.userLoginIcon}/>
                            </Link>
                        </li>
                        <li>
                            <a href='http://himfg.com.mx/interna/transparencia/transparencia.php' target='_blank'>
                                Transparencia
                            </a>
                        </li>
                        <li>
                            <button onClick={logout}>Cerrar sesión</button>
                        </li>
                    </>
                }
                </ul>
            </nav>
            </header>
            <div className={`${styles.imageContainer} flexContainer`}>
                <img
                    src={'https://res.cloudinary.com/diuxbqmn5/image/upload/v1677008422/secretaria-salud_tqz45u.webp'}
                    alt='Gobierno de México'
                    className={styles.imgSecretary}
                />
                <div className={styles.headerIconNav}>
                    <span>Hospital Infantil de México Federico Gómez</span>
                    <img
                    src={'https://res.cloudinary.com/diuxbqmn5/image/upload/v1677114497/himfg-logo_ewzx59.webp'}
                    alt='HIMFG'
                    className={styles.logo}
                    />
                </div>
            </div>
        </>
    )
}