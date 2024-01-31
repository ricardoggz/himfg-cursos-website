import Image from 'next/image'
import styles from './textsPage.module.css'
import cirugia from '../../assets/cirugia.jpg'
import consulta from '../../assets/consulta.jpg'

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
                    <Image src={firstImage} />
                </div>
                <div className={styles.text}>
                  <div>
                  <p>
                    {firstText}
                  </p>
                  </div>
                  <div></div>
                </div>
            </div>
            <div className={styles.texts}>
                <div className={styles.text}>
                <div></div>
                    <div>
                    <p>
                        {secondText}
                    </p>
                    </div>
                </div>
                <div className={styles.text_image}>
                    <Image src={secondImage} />
                </div>
            </div>
        </section>
    )
}