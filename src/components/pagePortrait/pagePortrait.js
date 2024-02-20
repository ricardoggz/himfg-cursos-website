import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import styles from './pagePortrait.module.css'

export const PagePortrait=({image, titular, titularGrade})=>{
    return (
        <section className={styles.pagePortraitWrapper}>
            <div className={styles.pagePortraitContent}>
            <figure>
                <LazyLoadImage 
                src={image}
                alt={titular}
                effect='blur'
                loading='lazy'
                width={'100%'}
                height={'100%'}
                />
            </figure>
            <div>
                <span className={styles.title}>
                    {titular}
                </span>
                <span className={styles.subtitle}>
                    {titularGrade}
                </span>
            </div>
            </div>
        </section>
    )
}