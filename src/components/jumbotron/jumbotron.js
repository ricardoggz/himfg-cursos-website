import styles from './jumbotron.module.css'
import { Container } from '../../components'

export const Jumbotron =()=>{
    return (
        <section className={`${styles.jumbotronWrapper}`}>
            <div className={`${styles.jumbotronTitles} flexContainer`}>
                <figure className={`${styles.jumbotronImage}`}>
                    <img
                        src='https://res.cloudinary.com/diuxbqmn5/image/upload/v1688238324/80_Logo_oxwpvb.png'
                    />
                </figure>
                <h1>Hospital Infantil de México Federico Gómez</h1>
            </div>
        </section>
    )
}