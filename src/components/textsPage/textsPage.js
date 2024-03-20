import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import styles from './textsPage.module.css'

export const TextsPage = ({
    firstText,
    secondText,
    firstImage,
    secondImage
})=>{
    return (
        <section className={styles.textsWrapper}>
            <div className={styles.texts}>
                <div className={styles.text_image}>
                    <LazyLoadImage
                        src={firstImage}
                        effect='blur'
                        loading='lazy'
                        width={'100%'}
                        height={'100%'}
                    />
                </div>
                <div className={styles.text}>
                  <div>
                  <p>
                    {firstText}
                  </p>
                  </div>
                </div>
            </div>
            <div className={styles.texts}>
                <div className={styles.text}>
                    <div>
                    <p>
                        {secondText}
                    </p>
                    </div>
                </div>
                <div className={styles.text_image}>
                    <LazyLoadImage
                        src={secondImage}
                        effect='blur'
                        loading='lazy'
                        width={'100%'}
                        height={'100%'}
                    />
                </div>
            </div>
        </section>
    )
}