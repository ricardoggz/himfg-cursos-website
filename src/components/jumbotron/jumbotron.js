import styles from './jumbotron.module.css'
import { Container } from '../../components'

export const Jumbotron =()=>{
    return (
        <section className={`${styles.jumbotronWrapper}`}>
            <div className={`${styles.jumbotronTitles} flexContainer`}>
                <figure className={`${styles.jumbotronImage}`}>
                    <img
                        src='https://res.cloudinary.com/diuxbqmn5/image/upload/v1679079932/logo_him-removebg-preview-min_baosmy.png'
                    />
                </figure>
                <h1>Hospital Infantil de México Federico Goméz</h1>
                <span>80 años de ciencia, excelencia y humanismo</span>
                <hr />
            </div>
        </section>
    )
}