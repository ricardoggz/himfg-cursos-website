import Link from 'next/link'
import { Title } from '../title/title'
import styles from './textsPage.module.css'
import { PagePortrait } from '../pagePortrait/pagePortrait'

export const TextsPage = ({ page }) => {
    return (
        <section className={styles.directionWrapper}>
            <div className={`${styles.texts} ${styles.textsBackground}`}>
                <Title>{page.page_title}</Title>
                <PagePortrait
                    image={page.page_titular_photo}
                    titular={page.page_titular}
                    titularGrade={page.page_titular_grade}
                />
                <div className={styles.text}>
                    <p>
                        {page.page_first_content}
                    </p>
                    <p>
                        {page.page_second_content}
                    </p>
                </div>
                {
                    /*<div className={`${styles.text_image}`}>
                        <img
                            src={page.page_first_image}
                            loading='lazy'
                        />
                        <img
                            src={page.page_second_image}
                            loading='lazy'
                        />
                    </div>*/
                }
            </div>
        </section>
    )
}