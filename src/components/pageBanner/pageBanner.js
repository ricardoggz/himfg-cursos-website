import { Menu } from '../../components'
import styles from './pageBanner.module.css'

export const PageBanner = ({title, children}) => {
    return (
      <>
        <section className={styles.pageBanner}>
          <div className={styles.pageBannerBackground}>
            <div className={styles.pageTitleBanner}>
              <h1>{title}</h1>
              {children}
            </div>
          </div>
        </section>
        <Menu />
      </>
    );
};