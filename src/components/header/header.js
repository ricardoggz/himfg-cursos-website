import Link from 'next/link'
import styles from './header.module.css'

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