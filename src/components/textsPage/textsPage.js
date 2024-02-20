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
                    <img src={firstImage} />
                </div>
                <div className={styles.text}>
                  <div>
                  <p>
                    {firstText}
                  </p>
                  </div>
                  <div/>
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
                    <img src={secondImage} />
                </div>
            </div>
        </section>
    )
}