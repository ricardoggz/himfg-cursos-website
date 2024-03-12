import Image from 'next'
import Link from 'next/link'
import styles from './header.module.css'
import gob_logo from '../../assets/gob-logo.svg'

export const Header =()=>{
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
                <ul className={styles.headerNavList}>
                    <li>
                        <Link href='/video/scp-2024'>
                            Sesión Clínico Patológica
                        </Link>
                    </li>
                </ul>
            </nav>
            </header>
            <div className={`${styles.imageContainer} boxShadow`}>
                <img
                    src={'https://res.cloudinary.com/diuxbqmn5/image/upload/v1677008422/secretaria-salud_tqz45u.webp'}
                    alt='Gobierno de México'
                />
            </div>
        </>
    )
}