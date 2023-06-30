import styles from './jumbotron.module.css'
import { Container } from '../../components'

export const Jumbotron =()=>{
    return (
        <section className={`${styles.jumbotronWrapper}`}>
            <div className={`${styles.jumbotronTitles} flexContainer`}>
                <figure className={`${styles.jumbotronImage}`}>
                    <img
                        src='https://res.cloudinary.com/diuxbqmn5/image/upload/v1676678760/banner-80_zhlxd1.webp'
                    />
                </figure>
                <h1>Hospital Infantil de México Federico Gómez</h1>
                <span>80 años de ciencia, excelencia y humanismo</span>
            </div>
        </section>
    )
}