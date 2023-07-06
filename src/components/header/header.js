import { useContext} from 'react'
import Link from 'next/link'
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
                            <Link href='/userlogin'>
                                Iniciar sesión
                            </Link>
                        </li>
                        <li>
                            <Link href='/ensenanza/offer'>
                                Oferta académica
                            </Link>
                        </li>
                    </>
                    :
                    <li>
                        <button onClick={logout}>Cerrar sesión</button>
                    </li>
                }
                </ul>
            </nav>
            </header>
            <div className={`${styles.imageContainer} flexContainer`}>
                <img
                    src={'https://res.cloudinary.com/diuxbqmn5/image/upload/v1677008422/secretaria-salud_tqz45u.webp'}
                    alt='Gobierno de México'
                />
                <img
                    src={'https://res.cloudinary.com/diuxbqmn5/image/upload/v1679079932/logo_him-removebg-preview-min_baosmy.png'}
                    alt='HIMFG'
                />
            </div>
        </>
    )
}