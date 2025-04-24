import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import styles from './textsPage.module.css'

export const TextsPage = ({
    firstText,
    secondText,
    firstImage,
    secondImage
}) => {
    return (
        <section className={styles.textsWrapper}>
            <div className={`${styles.texts} flexContainer`}>
                <div className={styles.text}>
                    <p>
                        {firstText}
                    </p>
                    <p>
                        {secondText}
                    </p>
                </div>
                <div className={`${styles.text_image}`}>
                    <img
                        src={firstImage}
                        loading='lazy'
                    />
                    <img
                        src={secondImage}
                        loading='lazy'
                    />
                </div>
            </div>
        </section>
    )
}